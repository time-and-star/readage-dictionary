/* core/model.js · 数据模型定义、归一化与校验
 *
 * Word ──1:n──> Sense ──1:n──> Example / Collocation
 *   │                 └──1:n──> Synonym / Antonym（近义尽量挂到具体义项）
 *   ├──1:n──> WordForm
 *   ├──1:1──> Etymology
 *   └──1:n──> WordRelation（形近 / 音近 / 同音 / 近义 / 易混 / 同根，通常挂到词条）
 * LearningState / ErrorRecord 由 core/learn.js 维护，索引键为 (wordId, senseId)
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const U = RA.util;

  /** 及物性 → 经典词典式英文标注 */
  const TRANSITIVITY_LABEL = {
    transitive: 'used with object',
    intransitive: 'used without object',
    ditransitive: 'used with object',
    linking: 'linking verb',
    countable: 'countable',
    uncountable: 'uncountable',
  };

  const RELATION_TYPES = {
    visual: '形近词',
    phonetic: '音近词',
    homophone: '同音异形词',
    synonym: '近义词',
    antonym: '反义词',
    confusable: '易混词',
    cognate: '同根词',
  };

  const STATUS = {
    unlearned: '未学习',
    learning: '学习中',
    mastered: '已掌握',
  };

  const ERROR_TYPES = {
    'meaning': '词义选择错误',
    'confusable': '易混词辨析错误',
    'collocation': '介词 / 搭配错误',
    'grammar': '语法填空错误',
    'context': '语境选词错误',
    'word-formation': '构词错误',
    'measurement': '计量单位错误',
    'word-choice': '用词错误',
    'register': '语域错误',
    'plural': '复数形式错误',
    'countability': '可数性错误',
    'spelling': '拼写错误',
    'word form': '词形错误',
    'capitalization': '大小写错误',
    'verb-form': '动词形式错误',
    'word choice': '用词错误',
    'usage': '用法错误',
    'distinction': '辨析错误',
    'punctuation': '标点错误',
    'number': '数词错误',
  };

  /** 词性 + 及物性 → "verb (used with object)" 形式 */
  function posLabel(sense) {
    const pos = String((sense && sense.partOfSpeech) || '').trim();
    const tr = sense && sense.transitivity;
    if (!pos) return '';
    const suffix = TRANSITIVITY_LABEL[tr];
    return suffix ? pos + ' (' + suffix + ')' : pos;
  }

  /** 归一化：补齐 id、编号、默认字段；不篡改已有内容 */
  function normalizeWord(raw) {
    if (!raw || !raw.lemma) throw new Error('normalizeWord: 缺少 lemma');
    const w = Object.assign({}, raw);
    const wid = w.id || U.slug(w.lemma);
    w.id = wid;
    w.language = w.language || 'en';
    w.tier = w.tier || 'curated';
    w.pronunciations = (w.pronunciations || []).map((p) => ({
      region: p.region || '通用',
      ipa: p.ipa || '',
      audio: p.audio || null,
      source: p.source || '',
    }));
    w.pos = w.pos || [];
    w.senses = (w.senses || []).map((s, i) => {
      const sense = Object.assign({}, s);
      const idx = sense.index || i + 1;
      sense.index = idx;
      sense.id = sense.id || U.id(wid, 's' + idx);
      sense.wordId = wid;
      sense.examples = (sense.examples || []).map((e, j) =>
        Object.assign({ id: U.id(sense.id, 'e' + (j + 1)), senseId: sense.id, sourceType: 'authored' }, e)
      );
      sense.collocations = (sense.collocations || []).map((c, j) =>
        Object.assign({ id: U.id(sense.id, 'c' + (j + 1)), senseId: sense.id }, c)
      );
      sense.synonyms = (sense.synonyms || []).map((x) => Object.assign({ relationType: 'synonym' }, x));
      sense.antonyms = (sense.antonyms || []).map((x) => Object.assign({ relationType: 'antonym' }, x));
      return sense;
    });
    w.forms = (w.forms || []).map((f) => Object.assign({ wordId: wid }, f));
    w.family = w.family || [];
    w.relations = w.relations || [];
    w.contexts = w.contexts || [];
    w.mistakes = w.mistakes || [];
    w.quiz = (w.quiz || []).map((q, i) => Object.assign({ id: q.id || U.id(wid, 'q' + (i + 1)) }, q));
    w.sources = w.sources || [];
    return w;
  }

  /** 校验：硬约束（英英释义 + 中文翻译 + 中文详解一一对应）在这里被强制 */
  function validateWord(w) {
    const issues = [];
    if (!w || !w.id) return ['缺少 id'];
    const check = (cond, msg) => { if (!cond) issues.push(w.id + '：' + msg); };
    check(!!w.lemma, '缺少 lemma');
    check(!!(w.coreMeaning && w.coreMeaning.zh), '缺少核心中文释义');
    check(!!(w.coreMeaning && w.coreMeaning.en), '缺少核心英文释义');
    check(Array.isArray(w.senses) && w.senses.length > 0, '没有义项');

    const senseIds = new Set();
    (w.senses || []).forEach((s, i) => {
      const tag = w.id + ' · 义项' + (i + 1);
      if (senseIds.has(s.id)) issues.push(tag + '：义项 id 重复（' + s.id + '）');
      senseIds.add(s.id);
      if (!s.definitionEn) issues.push(tag + '：缺少英文释义 definitionEn（硬约束）');
      if (!s.definitionZhTranslation) issues.push(tag + '：缺少英英释义的中文翻译 definitionZhTranslation（硬约束）');
      if (!s.explanationZh) issues.push(tag + '：缺少中文详细解释 explanationZh（硬约束）');
      if (s.definitionEn && (w.senses || []).some((o, j) => j !== i && o.definitionEn === s.definitionEn)) {
        issues.push(tag + '：多个义项共用同一条英英释义（硬约束）');
      }
      if (!s.partOfSpeech) issues.push(tag + '：缺少词性');
      (s.examples || []).forEach((e, j) => {
        if (!e.english) issues.push(tag + ' · 例句' + (j + 1) + '：缺少英文');
        if (!e.chinese) issues.push(tag + ' · 例句' + (j + 1) + '：缺少中文翻译');
      });
    });

    if (w.forms) {
      w.forms.forEach((f) => { if (!f.formType || !f.form) issues.push(w.id + '：词形变化字段不完整'); });
    }
    if (w.family) {
      // known === false 表示本词库尚未收录该派生词，允许只有词形（界面会标注「未收录」）
      w.family.forEach((f) => {
        if (f.known === false) return;
        if (!f.word || !f.zh) issues.push(w.id + '：词汇家族条目字段不完整（' + (f.word || '?') + '）');
      });
    }
    (w.contexts || []).forEach((c, i) => {
      if (!senseIds.has(c.senseId)) issues.push(w.id + ' · 语境' + (i + 1) + '：义项引用无效');
      if (['en','zh','structure','grammar','rationale'].some(k => typeof c[k] !== 'string' || !c[k].trim())) issues.push(w.id + ' · 语境' + (i + 1) + '：必要字段缺失');
    });
    if (w.quiz) {
      const questionIds = new Set();
      w.quiz.forEach((q, i) => {
        const tag = w.id + ' · 测试' + (i + 1);
        if (!q.id || questionIds.has(q.id)) issues.push(tag + '：题目 id 缺失或重复');
        questionIds.add(q.id);
        if (!senseIds.has(q.senseId)) issues.push(tag + '：义项引用无效');
        if (!q.explain || !ERROR_TYPES[q.errorType]) issues.push(tag + '：解释或错误类型缺失');
        if (Array.isArray(q.options) && new Set(q.options).size !== q.options.length) issues.push(tag + '：选项重复');
      });
      const answers = new Set(w.quiz.map((q) => q.answer));
      w.quiz.forEach((q, i) => {
        if (!q.prompt) issues.push(w.id + ' · 测试' + (i + 1) + '：缺少题干');
        if (!answers.has(q.answer)) issues.push(w.id + ' · 测试' + (i + 1) + '：正确答案不在选项内');
        if (!Array.isArray(q.options) || q.options.length < 2) issues.push(w.id + ' · 测试' + (i + 1) + '：选项不足');
        else if (!q.options.includes(q.answer)) issues.push(w.id + ' · 测试' + (i + 1) + '：正确答案不在选项内');
      });
    }
    if (w.mistakes) {
      w.mistakes.forEach((m, i) => {
        if (!m.wrong || !m.right) issues.push(w.id + ' · 错误示例' + (i + 1) + '：缺少错误句或正确句');
        if (!ERROR_TYPES[m.errorType]) issues.push(w.id + ' · 错误示例' + (i + 1) + '：未标注错误类型');
      });
    }
    return issues;
  }

  RA.model = {
    TRANSITIVITY_LABEL,
    RELATION_TYPES,
    STATUS,
    ERROR_TYPES,
    posLabel,
    normalizeWord,
    validateWord,
  };
})(typeof window !== 'undefined' ? window : globalThis);
