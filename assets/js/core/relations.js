/* core/relations.js · 词汇关系：分类、逐字母对比、综合推荐
 * 形近 / 音近 / 同音 / 近义 / 易混 / 同根 分列存放，可重叠但不合并。
 * 推荐逻辑综合：拼写相似度 + 发音相似度 + 语义混淆度（人工标注）+ 学习价值。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const U = RA.util;

  /** 逐字母对齐（LCS）：返回两侧字符数组，type = same / sub / ins / del / gap */
  function letterDiff(a, b) {
    a = String(a || '');
    b = String(b || '');
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    const A = [], B = [];
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (a[i] === b[j]) {
        A.push({ ch: a[i], type: 'same' }); B.push({ ch: b[j], type: 'same' }); i++; j++;
      } else if (dp[i + 1][j + 1] >= dp[i + 1][j] && dp[i + 1][j + 1] >= dp[i][j + 1]) {
        A.push({ ch: a[i], type: 'sub' }); B.push({ ch: b[j], type: 'sub' }); i++; j++;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        A.push({ ch: a[i], type: 'del' }); B.push({ ch: null, type: 'gap' }); i++;
      } else {
        A.push({ ch: null, type: 'gap' }); B.push({ ch: b[j], type: 'ins' }); j++;
      }
    }
    while (i < m) { A.push({ ch: a[i], type: 'del' }); B.push({ ch: null, type: 'gap' }); i++; }
    while (j < n) { A.push({ ch: null, type: 'gap' }); B.push({ ch: b[j], type: 'ins' }); j++; }
    return { left: A, right: B, diffCount: A.filter((x) => x.type !== 'same').length };
  }

  /** 音标去符号后比较 */
  function ipaPlain(ipa) {
    return String(ipa || '').toLowerCase().replace(/[^a-zɑæʌɒɔəɜɪʊʌʃʒθðŋɡːˌˈ]/g, '').replace(/[ˈˌ]/g, '');
  }
  function phoneticSimilarity(a, b) {
    const x = ipaPlain(a), y = ipaPlain(b);
    if (!x || !y) return 0;
    return U.similarity(x, y);
  }

  /** 综合混淆度评分（0~1） */
  function confusableScore(wordA, wordB, manualWeight) {
    const la = String(wordA.lemma || ''), lb = String(wordB.lemma || '');
    const spelling = Math.max(U.similarity(la, lb), U.bigramScore(la, lb));
    const ipaA = (wordA.pronunciations || []).map((p) => p.ipa).join(' ');
    const ipaB = (wordB.pronunciations || []).map((p) => p.ipa).join(' ');
    const phonetic = phoneticSimilarity(ipaA, ipaB);
    const semantic = Math.min(1, (manualWeight || 0) / 5);
    const value = (wordA.tier === 'full' || wordB.tier === 'full' ? 0.6 : 0.4) +
      (wordA.level && wordA.level === wordB.level ? 0.4 : 0.2);
    const normalizedValue = Math.min(1, value);
    const score = 0.34 * spelling + 0.18 * phonetic + 0.3 * semantic + 0.18 * normalizedValue;
    return { score: Math.round(score * 1000) / 1000, spelling, phonetic, semantic, value: normalizedValue };
  }

  /** 由 pairSpec 生成对称关系记录（并入 words） */
  function attachPairs(words, pairSpec) {
    const key = (a, b) => [a, b].sort().join('|');
    (pairSpec || []).forEach((p) => {
      const A = words[p.a], B = words[p.b];
      if (!A || !B) return;
      [[A, B], [B, A]].forEach(([src, dst]) => {
        src.relations = src.relations || [];
        const exists = src.relations.find((r) => r.target === dst.id);
        if (exists) {
          exists.relationTypes = U.uniq((exists.relationTypes || []).concat(p.types));
          exists.weight = Math.max(exists.weight || 0, p.weight || 0);
          exists.semanticDiff = exists.semanticDiff || p.semanticDiff;
          exists.collocationDiff = exists.collocationDiff || p.collocationDiff;
        } else {
          src.relations.push({
            sourceWordId: src.id,
            targetWordId: dst.id,
            target: dst.id,
            sourceSenseId: null,
            targetSenseId: null,
            relationTypes: p.types.slice(),
            explanation: '',
            semanticDiff: p.semanticDiff || '',
            collocationDiff: p.collocationDiff || '',
            weight: p.weight || 0,
          });
        }
      });
    });
    return words;
  }

  /** 补充展示信息：目标词音标 / 词性 / 中文义 / 例句，拼写与发音差异 */
  function enrichRelations(words) {
    Object.values(words).forEach((w) => {
      (w.relations || []).forEach((r) => {
        r.target = r.target || r.targetWordId || '';
        const t = words[r.target];
        r.targetLemma = r.targetLemma || (t ? t.lemma : r.targetWordId);
        r.known = !!t;
        if (t) {
          r.ipa = r.ipa || (t.pronunciations || []).map((p) => (p.region && p.region !== '通用' ? p.region + ' ' : '') + p.ipa).join(' · ');
          r.pos = r.pos || (t.pos || []).join(' / ');
          r.zh = r.zh || (t.coreMeaning && t.coreMeaning.zh) || '';
          const ex = (t.senses || []).flatMap((s) => s.examples || [])[0];
          if (!r.exampleEn && ex) { r.exampleEn = ex.english; r.exampleZh = ex.chinese; }
        }
        if (!r.spellingDiff) {
          const d = letterDiff(w.lemma, r.targetLemma);
          const subs = d.left.filter((x, i) => x.type !== 'same' || d.right[i].type !== 'same');
          r.spellingDiff = subs.length
            ? '逐字母差异位置：' + subs.map((x, k) => {
              const idx = d.left.indexOf(x) + 1;
              const A = x.ch || '—', B = d.right[d.left.indexOf(x)] ? (d.right[d.left.indexOf(x)].ch || '—') : '—';
              return '第 ' + idx + ' 位 ' + A + ' → ' + B;
            }).join('；')
            : '拼写完全一致';
        }
        if (!r.phoneticDiff) {
          const ia = (w.pronunciations || []).map((p) => p.ipa).join(' ');
          const ib = (r.ipa || '');
          const s = phoneticSimilarity(ia, ib);
          r.phoneticDiff = ib ? (s >= 0.85 ? '读音高度接近（相似度 ' + s.toFixed(2) + '）' : '读音相似度 ' + s.toFixed(2)) : '暂无可靠发音数据';
        }
        r.score = confusableScore(w, { lemma: r.targetLemma, pronunciations: [{ ipa: (r.ipa || '').replace(/UK |US /g, '') }], tier: t ? t.tier : 'curated', level: t ? t.level : null }, r.weight || 0).score;
      });
      w.relations.sort((a, b) => (b.weight || 0) - (a.weight || 0) || (b.score || 0) - (a.score || 0));
    });
    return words;
  }

  /** 按关系类型分组 */
  function groupByType(word) {
    const out = {};
    (word.relations || []).forEach((r) => {
      (r.relationTypes || []).forEach((t) => {
        (out[t] = out[t] || []).push(r);
      });
    });
    return out;
  }

  /** 系统推荐（人工标注之外的候选），用于词库中没有手写关系的词 */
  function suggestConfusables(words, wordId, limit = 6) {
    const w = words[wordId];
    if (!w) return [];
    const manual = new Set((w.relations || []).map((r) => r.target));
    return Object.values(words)
      .filter((o) => o.id !== wordId && !manual.has(o.id))
      .map((o) => {
        const s = confusableScore(w, o, 0);
        return { word: o, score: s.score, parts: s };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  RA.relations = { letterDiff, phoneticSimilarity, confusableScore, attachPairs, enrichRelations, groupByType, suggestConfusables };
})(typeof window !== 'undefined' ? window : globalThis);
