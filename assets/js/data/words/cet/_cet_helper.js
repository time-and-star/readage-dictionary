/* data/words/cet/_cet_helper.js · 手敲词条写入器
 * 逐个手敲的词条用 RA.W(...) 登记；装配时自动覆盖 tools/import_cet.js 生成的占位条目。
 * 参数顺序固定，注释在下方 W 定义处，写错会被 registry 的校验拦下来。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.rawWords = RA.rawWords || {};

  /**
   * W(词条, 词性, 音标, CEFR, 考试标签, 核心中文义, 核心英文义, 义项数组, 词形变化, 家族词, 备注)
   *
   * 义项数组每项（新规范，11 字段）：
   * [0] 中文义项标题  [1] 英文释义  [2] 英文释义的中文翻译  [3] 中文详细解释
   * [4] 英文例句      [5] 例句中文  [6] 搭配数组           [7] 近义词数组
   * [8] 可选：该义项词性  [9] 可选：及物性  [10] 可选：领域
   *
   * 兼容旧规范（≤8 字段，a1-a4 / b1 早期写法）：中文翻译与详解合并为 [2]，
   * [3] 起依次为英文例句、例句中文、搭配、近义词。
   *
   * 及物性取值：transitive（及物）/ intransitive（不及物）/ countable / uncountable
   */
  RA.W = function (lemma, posCsv, ipa, cefr, exam, coreZh, coreEn, senses, formsStr, family, note) {
    const pos = String(posCsv || '').split('/').filter(Boolean);
    const senseObjs = (senses || []).map((s, i) => {
      // 9 字段以上按新规范解析：单义项条目可省写尾部可选标注，前 8 位含义不变
      const legacy = s.length <= 8;
      const exEn = legacy ? s[3] : s[4];
      const exZh = legacy ? s[4] : s[5];
      const coll = legacy ? s[5] : s[6];
      const syn = legacy ? s[6] : s[7];
      return {
        index: i + 1,
        titleZh: s[0],
        partOfSpeech: legacy ? (pos[0] || '') : (s[8] || pos[0] || ''),
        transitivity: legacy ? null : (s[9] || null),
        domain: legacy ? '通用' : (s[10] || '通用'),
        register: '通用',
        isCore: i === 0,
        definitionEn: s[1],
        definitionZhTranslation: s[2],
        explanationZh: legacy ? s[2] : s[3],
        examples: exEn ? [{ english: exEn, chinese: Array.isArray(exZh) ? '' : (exZh || ''), label: '例句 · ' + (legacy ? '通用' : (s[10] || '通用')), sourceType: 'authored' }] : [],
        collocations: (coll || []).map((c) => (Array.isArray(c) ? { phrase: c[0], meaningZh: c[1] || '' } : { phrase: c, meaningZh: '' })),
        synonyms: (syn || []).map((w) => ({ word: w })),
        antonyms: [],
        grammar: [],
        usageScenes: [],
        cautions: '',
      };
    });

    const forms = [];
    if (formsStr) {
      // 早期文件用「 · 」分隔，F 字母之后改用「~」；名词只写一个复数
      const p = String(formsStr).split(/[·~]/).map((x) => x.trim()).filter(Boolean);
      forms.push({ formType: 'base', form: lemma, label: '原形' });
      if (p.length >= 3) {
        forms.push({ formType: 'third', form: p[0], label: '第三人称单数' });
        forms.push({ formType: 'past', form: p[1], label: '过去式', irregular: p[1] !== lemma + 'ed' });
        forms.push({ formType: 'pastParticiple', form: p.length >= 4 ? p[2] : p[1], label: '过去分词', irregular: (p.length >= 4 ? p[2] : p[1]) !== lemma + 'ed' });
        forms.push({ formType: 'presentParticiple', form: p[p.length - 1], label: '现在分词' });
      } else if (p.length === 1 && p[0].toLowerCase() !== String(lemma).toLowerCase()) {
        forms.push({ formType: 'plural', form: p[0], label: '复数' });
      }
    }

    const word = {
      id: lemma,
      lemma: lemma,
      language: 'en',
      tier: 'curated',
      pos: pos,
      level: cefr || null,
      examTags: exam || [],
      pronunciations: ipa ? [{ region: '通用', ipa: ipa, audio: null }] : [],
      syllables: '',
      stress: '',
      coreMeaning: { zh: coreZh, en: coreEn, note: '' },
      senses: senseObjs,
      forms: forms,
      formNote: '',
      family: (family || []).map((f) => ({ word: f })),
      confused: [],
      pitfall: '',
      note: note || '',
      usage: {
        cefr: cefr || '暂无可靠数据',
        frequency: '暂无可靠数据（本项目不做未经语料库统计的词频排名）',
        register: '常规用语',
        domains: [],
        britishAmerican: '暂无可靠数据',
        tone: '暂无可靠数据',
        examTags: (exam || []).length ? exam.join(' / ') : '暂无可靠数据',
        commonConfusion: [],
      },
      sources: [],
    };
    RA.rawWords[lemma] = word;
    return word;
  };

  /**
   * D(词条, 补丁) · 在已有义项上补词源、加长例句、易混、常见错误和即时检测。
   * 不改写 RA.W 里的释义。装配时由 registry 合并；词条不存在则记入校验问题。
   * 补丁字段：etymology, extraExamples[{sense, english, chinese}], contexts, mistakes, quiz, relations, usage
   */
  RA.depthPatches = RA.depthPatches || {};
  RA.D = function (lemma, patch) {
    RA.depthPatches[lemma] = patch;
    return patch;
  };
})(typeof window !== 'undefined' ? window : globalThis);
