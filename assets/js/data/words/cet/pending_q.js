/* assets/js/data/words/cet/pending_q.js
 * 自动生成（tools/import_cet.js），源：《全国大学英语四、六级考试大纲（2016年修订版）》词表。
 * 这里只有词形、考级标签与大纲标注的拼写变体 —— 释义 / 例句 / 辨析必须逐个手敲，
 * 手敲词条放在 author_q.js，装配时自动覆盖本文件的占位条目。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.pendingWords = RA.pendingWords || {};
  const P = (lemma, level, variants, phrase) => {
    RA.pendingWords[lemma] = { id: lemma, lemma: lemma, level: level, variants: variants || [], phrase: !!phrase };
  };
  P('quake', 'CET4');
  P('qualify', 'CET4');
  P('quality', 'CET4');
  P('quantify', 'CET4');
  P('quantity', 'CET4');
  P('quarrel', 'CET4');
  P('quart', 'CET6');
  P('quarter', 'CET4');
  P('queen', 'CET4');
  P('query', 'CET6');
  P('quest', 'CET6');
  P('question', 'CET4');
  P('queue', 'CET4');
  P('quick', 'CET4');
  P('quit', 'CET4');
  P('quiver', 'CET6');
  P('quiz', 'CET4');
  P('quota', 'CET4');
  P('quote', 'CET4');
})(typeof window !== 'undefined' ? window : globalThis);
