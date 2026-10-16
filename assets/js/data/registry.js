/* data/registry.js · 词条装配：归一化 → 关系注入 → 交叉补全 → 校验 → 建索引 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const U = RA.util;

  /** 通用参考来源（仅提供链接供核对，不复制受保护内容） */
  function defaultSources(lemma) {
    return [
      { name: 'Cambridge Dictionary — ' + lemma, url: 'https://dictionary.cambridge.org/dictionary/english/' + encodeURIComponent(lemma), dataType: '词义 / 发音 / 用法核对', updatedAt: '2026-09', license: '以来源页面现时内容与授权为准；本词条未逐字复制其释义' },
      { name: 'Etymonline — ' + lemma, url: 'https://www.etymonline.com/word/' + encodeURIComponent(lemma), dataType: '词源核对', updatedAt: '2026-09', license: '以来源页面现时内容与授权为准' },
    ];
  }

  /** 拼写变体索引：英式等变体形 → 词条 lemma（honour → honor），用于家族 / 近义交叉解析 */
  function buildVariantIndex(words) {
    const idx = new Map();
    Object.values(words).forEach((w) => {
      (w.forms || []).forEach((f) => {
        if (f.formType === 'variant' && f.form) idx.set(U.slug(f.form), w.lemma);
      });
    });
    return idx;
  }

  /** 家族词：能在本库解析的补出词性 / 释义 / 例句，不能的标注未收录 */
  function enrichFamily(words) {
    const variants = buildVariantIndex(words);
    // 只把「已有内容的词条」当作可解析对象；pending 占位词条没有释义，等同于未收录
    // 直接命中失败时走拼写变体索引（honour → honor），保留引用里的原始拼写
    const resolvable = (id) => {
      const key = U.slug(id);
      const direct = words[key];
      if (direct && direct.tier !== 'pending') return { t: direct, viaVariant: false };
      const via = variants.get(key);
      const t2 = via && words[via];
      if (t2 && t2.tier !== 'pending') return { t: t2, viaVariant: true };
      return null;
    };
    Object.values(words).forEach((w) => {
      w.family = (w.family || []).map((f) => {
        const r = resolvable(f.word);
        if (f.pos && f.zh) return Object.assign({ known: !!r || f.word === w.lemma }, f);
        if (r) {
          const t = r.t;
          const ex = (t.senses || []).flatMap((s) => s.examples || [])[0] || {};
          return { word: r.viaVariant ? f.word : t.lemma, pos: (t.pos || []).join(' / '), zh: (t.coreMeaning && t.coreMeaning.zh) || '', exampleEn: ex.english || '', exampleZh: ex.chinese || '', known: true };
        }
        return { word: f.word, pos: '', zh: '', exampleEn: '', exampleZh: '', known: false };
      });
    });
  }

  /** 近义词：从目标词条交叉补全中文义、侧重点、例句；无法补全的字段渲染层会标「暂无数据」 */
  function enrichSynonyms(words) {
    const variants = buildVariantIndex(words);
    Object.values(words).forEach((w) => {
      (w.senses || []).forEach((s) => {
        ['synonyms', 'antonyms'].forEach((field) => {
          s[field] = (s[field] || []).map((x) => {
            const key = U.slug(x.word);
            const direct = words[key];
            const via = variants.get(key);
            const t = direct && direct.tier !== 'pending' ? direct
              : (via && words[via] && words[via].tier !== 'pending' ? words[via] : null);
            if (!t) return Object.assign({ known: false }, x);
            const ex = (t.senses || []).flatMap((k) => k.examples || [])[0] || {};
            const coll = (t.senses || []).flatMap((k) => k.collocations || [])[0] || {};
            return Object.assign({
              known: true,
              zh: (t.coreMeaning && t.coreMeaning.zh) || '',
              focus: (t.coreMeaning && t.coreMeaning.note) || '',
              collocation: coll.phrase || '',
              exampleEn: ex.english || '',
              exampleZh: ex.chinese || '',
              interchangeable: 'contextual',
              reason: '',
            }, x);
          });
        });
      });
    });
  }

  function build() {
    const words = {};
    Object.assign(words, RA.rawWords || {});
    Object.assign(words, RA.buildCurated ? RA.buildCurated() : {});

    // 大纲词表占位词条：只含可靠字段（词形、考试标签、拼写变体），
    // 释义与例句必须手敲补全（author_*.js），未补全前标记 tier='pending'。
    // CET 大纲（pendingWords）与考研/托福/雅思表（pendingWordsKTY）走同一套合并逻辑。
    [RA.pendingWords, RA.pendingWordsKTY].forEach((outline) => {
    Object.values(outline || {}).forEach((p) => {
      if (!words[p.lemma]) {
        words[p.lemma] = {
        id: p.lemma,
        lemma: p.lemma,
        language: 'en',
        tier: 'pending',
        pos: [],
        level: null,
        examTags: p.level ? p.level.split('/') : [],
        pronunciations: [],
        syllables: '',
        stress: '',
        coreMeaning: { zh: '', en: '', note: '' },
        senses: [],
        forms: (p.variants || []).map((v) => ({ formType: 'variant', form: v, label: '大纲拼写变体' })),
        formNote: '',
        family: [],
        confused: [],
        relations: [],
        contexts: [],
        mistakes: [],
        quiz: [],
        sources: [],
        usage: { cefr: '暂无可靠数据', frequency: '暂无可靠数据', register: '暂无可靠数据', domains: [], britishAmerican: '暂无可靠数据', tone: '暂无可靠数据', examTags: p.level || '暂无可靠数据', commonConfusion: [] },
        phrase: !!p.phrase,
        };
        return;
      }
      // 已有手敲 / 精编词条：不覆盖内容，只把大纲信息补进去（考试标签、拼写变体、短语标记），
      // 并刷新 usage 展示串（否则“考试标签”行仍显示手敲时的旧标签）
      const w = words[p.lemma];
      (p.level ? p.level.split('/') : []).forEach((t) => {
        if (!(w.examTags || []).includes(t)) w.examTags = (w.examTags || []).concat(t);
      });
      if (w.usage) w.usage.examTags = (w.examTags || []).length ? w.examTags.join(' / ') : '暂无可靠数据';
      (p.variants || []).forEach((v) => {
        if (!(w.forms || []).some((f) => f.form === v)) w.forms = (w.forms || []).concat({ formType: 'variant', form: v, label: '大纲拼写变体' });
      });
      if (p.phrase) w.phrase = true;
    });
    });

    const depthMiss = [];
    const formOfOther = new Set();
    Object.keys(words).forEach((id) => {
      (words[id].forms || []).forEach((f) => {
        const k = String(f.form || '').toLowerCase();
        if (k && k !== String(words[id].lemma || id).toLowerCase()) formOfOther.add(k);
      });
    });
    Object.keys(RA.depthPatches || {}).forEach((lemma) => {
      const w = words[lemma];
      const p = RA.depthPatches[lemma];
      if (!w || w.tier === 'pending') {
        depthMiss.push(lemma);
        return;
      }
      if (p.etymology) w.etymology = p.etymology;
      (p.extraExamples || []).forEach((ex) => {
        const s = (w.senses || [])[(ex.sense || 1) - 1];
        if (!s || !ex.english || !ex.chinese) return;
        s.examples = s.examples || [];
        if (s.examples.some((e) => e.english === ex.english)) return;
        s.examples.push({ english: ex.english, chinese: ex.chinese, label: '例句 · 补充', sourceType: 'authored' });
      });
      if (p.contexts) w.contexts = p.contexts;
      if (p.mistakes) w.mistakes = p.mistakes;
      if (p.quiz) w.quiz = p.quiz;
      if (p.relations) w.relations = p.relations;
      if (p.usage && w.usage) Object.assign(w.usage, p.usage);
      const ready = w.etymology && w.etymology.origin
        && (w.quiz || []).length >= 4
        && (w.contexts || []).length >= 1
        && (w.mistakes || []).length >= 1;
      // 升到 full 会在检索里压过同形的词根或英式独立词条（adapted→adapt，afterwards 不能被 afterward 抢走）。
      // 本词若是别人的词形，或自己的拼写变体另有独立词条，就只合并内容，不升 tier。
      const low = String(w.lemma || '').toLowerCase();
      const listedOnAnother = formOfOther.has(low);
      const ownsOtherHeadword = (w.forms || []).some((f) => f.formType === 'variant' && words[U.slug(f.form)] && words[U.slug(f.form)].tier !== 'pending' && U.slug(f.form) !== low);
      if (ready && w.tier !== 'full' && !listedOnAnother && !ownsOtherHeadword) w.tier = 'full';
    });

    Object.keys(words).forEach((k) => {
      const w = RA.model.normalizeWord(words[k]);
      if (!w.sources || !w.sources.length) w.sources = defaultSources(w.lemma);
      if (!w.sourceNote) w.sourceNote = '本词条的教学释义、例句与辨析为 ReadAge 项目编写，来源链接仅用于核对，不代表逐字复制。';
      words[k] = w;
    });

    // 带变音符词条（abbé、cliché、résumé）：键与 id 是原形，但关系解析、检索与
    // tools 按 slug 查找（slug 会去掉变音符）。在此补一个非枚举的 slug 别名键，
    // 使 words[slug(ref)] 能命中；slug 已被同形词条占用（résumé→resume）时不挂，
    // 避免覆盖。非枚举保证 Object.values/keys 的遍历（装配、校验、索引、联想）仍各走原键一次。
    Object.keys(words).forEach((k) => {
      const sk = U.slug(k);
      if (sk && sk !== k && words[sk] === undefined) {
        Object.defineProperty(words, sk, { value: words[k], enumerable: false, configurable: true, writable: true });
      }
    });

    RA.relations.attachPairs(words, RA.pairSpec || []);
    RA.relations.enrichRelations(words);
    enrichFamily(words);
    enrichSynonyms(words);

    const issues = [];
    depthMiss.forEach((lemma) => issues.push(lemma + '：深度补丁找不到已有词条'));
    Object.values(words).forEach((w) => {
      if (w.tier === 'pending') return; // 占位词条只等手敲补全，不参与完整度校验
      RA.model.validateWord(w).forEach((m) => issues.push(m));
    });

    const index = RA.search.buildIndex(words);
    return { words, index, issues };
  }

  let instance = null;
  RA.dictionary = {
    get data() {
      if (!instance) instance = build();
      return instance;
    },
    build,
    words() { return RA.dictionary.data.words; },
    index() { return RA.dictionary.data.index; },
    issues() { return RA.dictionary.data.issues; },
    get(id) { return RA.dictionary.words()[id] || null; },
    has(id) { return !!RA.dictionary.words()[id]; },
    count() { return Object.keys(RA.dictionary.words()).length; },
  };
})(typeof window !== 'undefined' ? window : globalThis);
