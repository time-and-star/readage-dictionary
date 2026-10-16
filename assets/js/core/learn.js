/* core/learn.js · 学习状态：收藏 / 笔记 / 按义项掌握状态 / 错误记录 / 复习队列
 * 全部落盘到 localStorage（storage.js 抽象），刷新后保留；失败时降级为内存并提示。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const store = RA.storage;

  const DAY = 86400000;
  const NEXT_REVIEW_DAYS = { unlearned: 0, learning: 2, mastered: 7 };

  function readMap(key) { return store.read(key, {}) || {}; }

  const learn = {
    /* ---------- 收藏 ---------- */
    savedList() {
      const v = store.read('saved', []);
      return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
    },
    isSaved(wordId) { return learn.savedList().indexOf(wordId) >= 0; },
    toggleSaved(wordId) {
      const list = learn.savedList();
      const i = list.indexOf(wordId);
      if (i >= 0) list.splice(i, 1); else list.unshift(wordId);
      store.write('saved', list);
      return i < 0;
    },

    /* ---------- 笔记 ---------- */
    getNote(wordId) { return readMap('notes')[wordId] || ''; },
    setNote(wordId, text) {
      const m = readMap('notes');
      m[wordId] = String(text || '').slice(0, 5000);
      store.write('notes', m);
    },

    /* ---------- 义项掌握状态 ---------- */
    senseStates(wordId) {
      const all = readMap('senseState');
      return (all && all[wordId]) || {};
    },
    getSenseStatus(wordId, senseId) {
      return (learn.senseStates(wordId)[senseId] || {}).status || 'unlearned';
    },
    setSenseStatus(wordId, senseId, status) {
      if (!RA.model.STATUS[status]) throw new Error('未支持的掌握状态：' + status);
      const all = readMap('senseState');
      all[wordId] = all[wordId] || {};
      const now = Date.now();
      all[wordId][senseId] = {
        status: status,
        updatedAt: new Date(now).toISOString(),
        nextReviewAt: new Date(now + (NEXT_REVIEW_DAYS[status] || 0) * DAY).toISOString(),
      };
      store.write('senseState', all);
      return all[wordId][senseId];
    },
    /** 整词统计：掌握 / 学习中 / 未学习 */
    senseSummary(wordId, senses) {
      const ids = (senses || []).map((s) => s.id);
      const st = learn.senseStates(wordId);
      const counts = { mastered: 0, learning: 0, unlearned: 0 };
      ids.forEach((id) => {
        const s = (st[id] || {}).status || 'unlearned';
        counts[s] += 1;
      });
      const total = ids.length || 0;
      return {
        total,
        ...counts,
        percent: total ? Math.round((counts.mastered / total) * 100) : 0,
      };
    },

    /* ---------- 错误记录 ---------- */
    errors() {
      const v = store.read('errors', []);
      return Array.isArray(v) ? v : [];
    },
    recordError(rec) {
      const list = learn.errors();
      list.unshift({
        wordId: rec.wordId || '',
        senseId: rec.senseId || '',
        questionId: rec.questionId || '',
        errorType: rec.errorType || 'meaning',
        detail: rec.detail || '',
        chosen: rec.chosen || '',
        timestamp: new Date().toISOString(),
      });
      store.write('errors', list.slice(0, 500));

      return list[0];
    },
    clearErrors(wordId) {
      const list = wordId ? learn.errors().filter((e) => e.wordId !== wordId) : [];
      store.write('errors', list);
    },
    /** 复习队列：按错误次数与最近时间排序 */
    reviewQueue(words, limit = 20) {
      const byWord = {};
      learn.errors().forEach((e) => {
        if (!e.wordId) return;
        byWord[e.wordId] = byWord[e.wordId] || { wordId: e.wordId, count: 0, types: {}, last: e.timestamp };
        byWord[e.wordId].count++;
        byWord[e.wordId].types[e.errorType] = (byWord[e.wordId].types[e.errorType] || 0) + 1;
        if (e.timestamp > byWord[e.wordId].last) byWord[e.wordId].last = e.timestamp;
      });
      const st = readMap('senseState');
      Object.keys(st).forEach((wid) => {
        Object.values(st[wid]).forEach((s) => {
          if (s.status === 'learning' || (s.nextReviewAt && s.nextReviewAt < new Date().toISOString())) {
            byWord[wid] = byWord[wid] || { wordId: wid, count: 0, types: {}, last: s.updatedAt };
          }
        });
      });
      return Object.values(byWord)
        .map((x) => {
          const w = words[x.wordId];
          x.lemma = w ? w.lemma : x.wordId;
          x.zh = w && w.coreMeaning ? w.coreMeaning.zh : '';
          x.known = !!w;
          return x;
        })
        .sort((a, b) => b.count - a.count || String(b.last).localeCompare(String(a.last)))
        .slice(0, limit);
    },

    /* ---------- 历史与统计 ---------- */
    history() {
      const v = store.read('history', []);
      return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [];
    },
    pushHistory(wordId) {
      const h = learn.history().filter((x) => x !== wordId);
      h.unshift(wordId);
      store.write('history', h.slice(0, 30));
    },
    markQuiz(wordId, correct) {
      const s = store.read('quizStats', { attempts: 0, correct: 0, byWord: {} }) || {};
      s.attempts = (s.attempts || 0) + 1;
      if (correct) s.correct = (s.correct || 0) + 1;
      s.byWord = s.byWord || {};
      if (wordId) {
        s.byWord[wordId] = s.byWord[wordId] || { attempts: 0, correct: 0 };
        s.byWord[wordId].attempts++;
        if (correct) s.byWord[wordId].correct++;
      }
      store.write('quizStats', s);
      return s;
    },
    quizStats() { return store.read('quizStats', { attempts: 0, correct: 0, byWord: {} }); },

    /* ---------- 备份 ---------- */
    exportData() { return store.dump(); },
    importData(obj) { return store.restore(obj); },
  };

  RA.learn = learn;
})(typeof window !== 'undefined' ? window : globalThis);
