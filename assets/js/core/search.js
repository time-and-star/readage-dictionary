/* core/search.js · 检索：精确 / 词形还原 / 前缀 / 子串 / 拼写纠错 / 联想 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const U = RA.util;

  /** 词形冲突时，词条本身优先于无内容占位；可识别的派生词仍回链到词根。 */
  function rank(w) {
    return !w ? 0 : w.tier === 'full' ? 3 : w.tier === 'curated' ? 2 : w.tier === 'online' ? 1 : 0;
  }

  function buildIndex(words) {
    const forms = new Map();
    const setForm = (key, id) => {
      key = String(key || '').toLowerCase().trim();
      if (!key) return;
      const prev = forms.get(key);
      if (prev == null || rank(words[id]) > rank(words[prev])) forms.set(key, id);
    };
    // 联想用扁平数组 + 首字母分桶，避免每次全量 editDistance
    const lemmas = [];
    const buckets = new Map();
    Object.values(words).forEach((w) => {
      setForm(w.lemma, w.id);
      (w.forms || []).forEach((f) => { if (f.form) setForm(f.form, w.id); });
      // 家族词：本身是词条就指向自己，否则回指来源词（afterwards → afterward、aeroplane → airplane）
      (w.family || []).forEach((f) => {
        const key = String(f.word || '').toLowerCase();
        if (!key || forms.has(key)) return;
        setForm(key, words[key] ? key : w.id);
      });
      const lemma = String(w.lemma || '').toLowerCase();
      const entry = { id: w.id, lemma: w.lemma, low: lemma, zh: (w.coreMeaning && w.coreMeaning.zh) || '', level: w.level || '' };
      lemmas.push(entry);
      const bk = lemma.slice(0, 2) || '#';
      if (!buckets.has(bk)) buckets.set(bk, []);
      buckets.get(bk).push(entry);
    });
    return { words, forms, lemmas, buckets };
  }

  /** 候选打分：命中位置越靠前、距离越近，越靠前 */
  function scoreCandidate(q, lemma) {
    if (q === lemma) return 1000;
    if (lemma.startsWith(q)) return 800 - (lemma.length - q.length);
    if (lemma.includes(q)) return 600 - lemma.indexOf(q);
    const d = U.editDistance(q, lemma);
    const tol = Math.max(1, Math.floor(lemma.length / 3));
    if (d <= tol) return 300 - d * 10;
    return -1;
  }

  function suggest(index, query, limit = 8) {
    const q = U.slug(query);
    if (!q) return [];
    const out = [];
    const pool = index.lemmas || Object.values(index.words).map((w) => ({ wordId: w.id, lemma: w.lemma, zh: (w.coreMeaning && w.coreMeaning.zh) || '', level: w.level || '' }));
    // 第一阶段：廉价的前缀/包含匹配，不计算编辑距离
    for (const w of pool) {
      const lemma = (w.low || String(w.lemma || '').toLowerCase());
      let s = -1, reason = '';
      if (q === lemma) { s = 1000; reason = ''; }
      else if (lemma.startsWith(q)) { s = 800 - (lemma.length - q.length); reason = '前缀匹配'; }
      else if (q.length >= 3 && lemma.includes(q)) { s = 600 - lemma.indexOf(q); reason = '包含匹配'; }
      if (s > 0) out.push({ wordId: w.id || w.wordId, lemma: w.lemma, zh: w.zh || '', level: w.level || '', score: s, reason });
    }
    if (out.length >= limit) {
      out.sort((a, b) => b.score - a.score || a.lemma.localeCompare(b.lemma));
      return out.slice(0, limit);
    }
    // 第二阶段：拼写纠错，只对同首字母、长度接近的候选计算 editDistance，并设上限避免卡顿
    const buckets = index.buckets;
    let candidates = pool;
    if (buckets && q.length >= 2) {
      const bk = q.slice(0, 2);
      candidates = (buckets.get(bk) || []).concat(buckets.get(q.slice(0, 1) + '*') || []);
      // 首字母相同也纳入，避免桶过小漏掉纠错
      if (candidates.length < 200) {
        candidates = pool.filter((w) => (w.low || w.lemma || '')[0] === q[0]);
      }
      if (!candidates.length) candidates = pool.slice(0, 2000);
    }
    let distCount = 0;
    for (const w of candidates) {
      const lemma = (w.low || String(w.lemma || '').toLowerCase());
      if (lemma.length < 4 || Math.abs(lemma.length - q.length) > 2) continue;
      if (out.some((o) => o.lemma === w.lemma)) continue;
      if (distCount++ > 3000) break;
      const d = U.editDistance(q, lemma);
      if (d <= 2) out.push({ wordId: w.id || w.wordId, lemma: w.lemma, zh: w.zh || '', level: w.level || '', score: 200 - d * 20, reason: '拼写接近' });
      if (out.length >= limit * 4) break;
    }
    out.sort((a, b) => b.score - a.score || a.lemma.localeCompare(b.lemma));
    return out.slice(0, limit);
  }

  /** 查词：先精确，再词形还原，再纠错建议 */
  function lookup(index, rawQuery, options) {
    const q = U.slug(rawQuery);
    if (!q) return { type: 'empty', query: rawQuery, suggestions: [] };
    const exact = index.words[q];
    if (exact) {
      // 只有空占位词条或明确属于该词族的派生词，才让位给更完整的词形来源。
      // 独立词头仍保留精确命中，例如名词 rose 不应被动词 rise 的过去式覆盖。
      // 词条链接和明确的词条 URL 已选定词头，应保留其独立释义。
      const preferExact = options && options.preferExact && exact.tier !== 'pending';
      if (!preferExact && index.forms.has(q)) {
        const alt = index.forms.get(q);
        const altWord = index.words[alt];
        const exactDerivesFromAlt = (exact.family || []).some((item) => {
          const familyLemma = typeof item === 'string' ? item : item && item.word;
          return U.slug(familyLemma) === alt;
        });
        const altHasInflection = (altWord && (altWord.forms || []).some((form) =>
          U.slug(form.form) === q && form.formType !== 'variant'));
        if (altWord && rank(altWord) > rank(exact)
            && (exact.tier === 'pending' || (exactDerivesFromAlt && altHasInflection))) {
          return { type: 'inflected', wordId: alt, lemma: altWord.lemma, matchedForm: q, suggestions: [] };
        }
      }
      return { type: 'exact', wordId: exact.id || q, lemma: exact.lemma || q, suggestions: [] };
    }
    if (index.forms.has(q)) {
      const wid = index.forms.get(q);
      if (index.words[wid]) {
        return { type: 'inflected', wordId: wid, lemma: index.words[wid].lemma, matchedForm: q, suggestions: [] };
      }
      return { type: 'external', wordId: wid, lemma: wid, suggestions: suggest(index, q, 6) };
    }
    return { type: 'missing', query: q, suggestions: suggest(index, q, 8) };
  }

  RA.search = { buildIndex, suggest, lookup, scoreCandidate };
})(typeof window !== 'undefined' ? window : globalThis);
