/* assets/js/data/words/cet/pending_z.js
 * 自动生成（tools/import_cet.js），源：《全国大学英语四、六级考试大纲（2016年修订版）》词表。
 * 这里只有词形、考级标签与大纲标注的拼写变体 —— 释义 / 例句 / 辨析必须逐个手敲，
 * 手敲词条放在 author_z.js，装配时自动覆盖本文件的占位条目。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.pendingWords = RA.pendingWords || {};
  const P = (lemma, level, variants, phrase) => {
    RA.pendingWords[lemma] = { id: lemma, lemma: lemma, level: level, variants: variants || [], phrase: !!phrase };
  };
  P('zeal', 'CET6');
  P('zero', 'CET4');
  P('zigzag', 'CET6');
  P('zip', 'CET6');
  P('zone', 'CET4');
  P('zoo', 'CET4');
  P('zoology', 'CET4');
  P('zoom', 'CET6');
})(typeof window !== 'undefined' ? window : globalThis);
