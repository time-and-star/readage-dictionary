/* assets/js/data/words/cet/pending_y.js
 * 自动生成（tools/import_cet.js），源：《全国大学英语四、六级考试大纲（2016年修订版）》词表。
 * 这里只有词形、考级标签与大纲标注的拼写变体 —— 释义 / 例句 / 辨析必须逐个手敲，
 * 手敲词条放在 author_y.js，装配时自动覆盖本文件的占位条目。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.pendingWords = RA.pendingWords || {};
  const P = (lemma, level, variants, phrase) => {
    RA.pendingWords[lemma] = { id: lemma, lemma: lemma, level: level, variants: variants || [], phrase: !!phrase };
  };
  P('yacht', 'CET6');
  P('yard', 'CET4');
  P('yawn', 'CET6');
  P('year', 'CET4');
  P('yearn', 'CET6');
  P('yell', 'CET4');
  P('yellow', 'CET4');
  P('yes', 'CET4');
  P('yesterday', 'CET4');
  P('yet', 'CET4');
  P('yield', 'CET4');
  P('yoga', 'CET4');
  P('yoghurt', 'CET4');
  P('you', 'CET4');
  P('young', 'CET4');
  P('youngster', 'CET4');
  P('your', 'CET4');
  P('yours', 'CET4');
  P('yourself', 'CET4');
  P('youth', 'CET4');
})(typeof window !== 'undefined' ? window : globalThis);
