/* assets/js/data/words/cet/pending_j.js
 * 自动生成（tools/import_cet.js），源：《全国大学英语四、六级考试大纲（2016年修订版）》词表。
 * 这里只有词形、考级标签与大纲标注的拼写变体 —— 释义 / 例句 / 辨析必须逐个手敲，
 * 手敲词条放在 author_j.js，装配时自动覆盖本文件的占位条目。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.pendingWords = RA.pendingWords || {};
  const P = (lemma, level, variants, phrase) => {
    RA.pendingWords[lemma] = { id: lemma, lemma: lemma, level: level, variants: variants || [], phrase: !!phrase };
  };
  P('jack', 'CET6');
  P('jacket', 'CET4');
  P('jail', 'CET4', ['gaol']);
  P('jam', 'CET4');
  P('January', 'CET4');
  P('jar', 'CET4');
  P('jargon', 'CET6');
  P('jaw', 'CET4');
  P('jazz', 'CET4');
  P('jealous', 'CET4');
  P('jeans', 'CET4');
  P('jeep', 'CET4');
  P('jelly', 'CET6');
  P('jeopardize', 'CET6', ['jeopardise']);
  P('jerk', 'CET6');
  P('jet', 'CET4');
  P('jetlag', 'CET4');
  P('jewel', 'CET4');
  P('job', 'CET4');
  P('jockey', 'CET6');
  P('jog', 'CET4');
  P('join', 'CET4');
  P('joint', 'CET4');
  P('joke', 'CET4');
  P('jolly', 'CET6');
  P('journal', 'CET4');
  P('journalism', 'CET4');
  P('journey', 'CET4');
  P('joy', 'CET4');
  P('judge', 'CET4');
  P('judicial', 'CET6');
  P('judiciary', 'CET6');
  P('juice', 'CET4');
  P('July', 'CET4');
  P('jump', 'CET4');
  P('junction', 'CET6');
  P('June', 'CET4');
  P('jungle', 'CET4');
  P('junior', 'CET4');
  P('junk', 'CET4');
  P('jurisdiction', 'CET6');
  P('jury', 'CET4');
  P('just', 'CET4');
  P('justice', 'CET4');
  P('justify', 'CET4');
  P('juvenile', 'CET6');
})(typeof window !== 'undefined' ? window : globalThis);
