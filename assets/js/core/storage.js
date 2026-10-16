/* core/storage.js · 持久化抽象：优先 localStorage，失败时降级为内存并回报 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const PREFIX = 'readage.v2.';

  let backend = 'memory';
  const mem = new Map();
  let warned = false;

  const KEYS = ['saved','notes','senseState','errors','history','quizStats'];
  const plain = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  const strings = v => Array.isArray(v) && v.every(x => typeof x === 'string');
  const stats = v => plain(v) && Number.isInteger(v.attempts) && v.attempts >= 0 && Number.isInteger(v.correct) && v.correct >= 0 && v.correct <= v.attempts;
  function valid(key, v) {
    if (key === 'saved' || key === 'history') return strings(v);
    if (key === 'notes') return plain(v) && Object.values(v).every(x => typeof x === 'string');
    if (key === 'senseState') return plain(v) && Object.values(v).every(m => plain(m) && Object.values(m).every(x => plain(x) && ['unlearned','learning','mastered'].includes(x.status) && ['updatedAt','nextReviewAt'].every(k => x[k] == null || (typeof x[k] === 'string' && Number.isFinite(Date.parse(x[k]))))));
    if (key === 'errors') return Array.isArray(v) && v.every(x => plain(x) && typeof x.wordId === 'string' && typeof x.timestamp === 'string' && Number.isFinite(Date.parse(x.timestamp)) && ['senseId','questionId','errorType','detail','chosen'].every(k => x[k] == null || typeof x[k] === 'string'));
    if (key === 'quizStats') return stats(v) && plain(v.byWord) && Object.values(v.byWord).every(stats);
    return true;
  }

  function probe() {
    try {
      const k = PREFIX + '__probe';
      global.localStorage.setItem(k, '1');
      global.localStorage.removeItem(k);
      backend = 'localStorage';
    } catch (e) {
      backend = 'memory';
    }
    return backend;
  }

  const storage = {
    PREFIX,
    isVolatile(key) { return backend !== "localStorage" || mem.has(key); },
    previewImport(obj) {
      const errors = []; const summary = {};
      if (!obj || obj.format !== "readage-learning-v2" || !plain(obj.data)) errors.push("备份格式不正确");
      else Object.entries(obj.data).forEach(([key,value]) => {
        if (!KEYS.includes(key) || (value != null && !valid(key,value))) errors.push("字段格式不正确：" + key);
        else if (value != null) summary[key] = { incoming: Object.keys(value).length, current: Object.keys(storage.read(key, {}) || {}).length };
      });
      return { ok: !errors.length, errors, summary };
    },
    get backend() {
      return backend;
    },
    init() {
      return probe();
    },
    read(key, fallback) {
      try {
        const raw = mem.has(key) ? mem.get(key) : backend === 'localStorage' ? global.localStorage.getItem(PREFIX + key) : null;
        if (raw == null || raw === '') return fallback;
        const v = JSON.parse(raw);
        return v == null || !valid(key, v) ? fallback : v;
      } catch (e) {
        return fallback;
      }
    },
    write(key, value) {
      const raw = JSON.stringify(value);
      try {
        if (backend === 'localStorage') { global.localStorage.setItem(PREFIX + key, raw); mem.delete(key); }
        else mem.set(key, raw);
        return true;
      } catch (e) {
        mem.set(key, raw);
        if (!warned && typeof global.RA?.notify === 'function') {
          warned = true;
          global.RA.notify('浏览器不允许写入本地存储：本次会话可正常操作，刷新后不会保留。');
        }
        return false;
      }
    },
    remove(key) {
      try {
        if (backend === 'localStorage') global.localStorage.removeItem(PREFIX + key);
        mem.delete(key);
      } catch (e) { mem.set(key, null); }
    },
    /** 导出全部学习数据（备份用） */
    dump() {
      const out = {};
      const keys = ['saved', 'notes', 'senseState', 'errors', 'history', 'quizStats'];
      keys.forEach((k) => { out[k] = storage.read(k, null); });
      return { format: 'readage-learning-v2', exportedAt: new Date().toISOString(), data: out };
    },
    restore(obj) {
      if (!storage.previewImport(obj).ok) return false;
      Object.entries(obj.data).forEach(([k, v]) => { if (v != null) storage.write(k, v); });
      return true;
    },
  };

  RA.storage = storage;
})(typeof window !== 'undefined' ? window : globalThis);
