/* assets/js/data/words/cet/pending_k.js
 * 自动生成（tools/import_cet.js），源：《全国大学英语四、六级考试大纲（2016年修订版）》词表。
 * 这里只有词形、考级标签与大纲标注的拼写变体 —— 释义 / 例句 / 辨析必须逐个手敲，
 * 手敲词条放在 author_k.js，装配时自动覆盖本文件的占位条目。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.pendingWords = RA.pendingWords || {};
  const P = (lemma, level, variants, phrase) => {
    RA.pendingWords[lemma] = { id: lemma, lemma: lemma, level: level, variants: variants || [], phrase: !!phrase };
  };
  P('keen', 'CET4');
  P('keep', 'CET4');
  P('kettle', 'CET4');
  P('key', 'CET4');
  P('keyboard', 'CET4');
  P('kick', 'CET4');
  P('kid', 'CET4');
  P('kidnap', 'CET6');
  P('kidney', 'CET6');
  P('kill', 'CET4');
  P('kilogram', 'CET4', ['kilogramme','kilo']);
  P('kilometer', 'CET4', ['kilometre']);
  P('kin', 'CET4');
  P('kind', 'CET4');
  P('kindergarten', 'CET4');
  P('king', 'CET4');
  P('kingdom', 'CET4');
  P('kiss', 'CET4');
  P('kit', 'CET4');
  P('kitchen', 'CET4');
  P('kite', 'CET4');
  P('knee', 'CET4');
  P('kneel', 'CET4');
  P('knife', 'CET4');
  P('knight', 'CET6');
  P('knit', 'CET4');
  P('knob', 'CET6');
  P('knock', 'CET4');
  P('knot', 'CET4');
  P('know', 'CET4');
  P('knowhow', 'CET4');
})(typeof window !== 'undefined' ? window : globalThis);
