/* core/util.js · 无依赖工具层（DOM 无关，可在 Node 中直接加载做单元测试） */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});

  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  const util = {
    /** HTML 转义：所有渲染出口必须经过它 */
    esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC[c]);
    },
    /** 归一化查询词：小写、去首尾非字母 */
    slug(s) {
      return String(s == null ? '' : s)
        .toLowerCase()
        .trim()
        .replace(/^[^a-z]+|[^a-z]+$/g, '')
        .replace(/\s+/g, ' ');
    },
    /** 词条 id 与 lemma 一致时用于生成子对象 id */
    id(...parts) {
      return parts.filter((x) => x !== null && x !== undefined && x !== '').join('.');
    },
    /** 是否疑似英文词条（含 ' - 空格 的短词组） */
    isWordLike(s) {
      const w = util.slug(s);
      return /^[a-z][a-z' -]{0,79}$/.test(w) && /[a-z]/.test(w);
    },
    /** 去重保序 */
    uniq(arr) {
      return (arr || []).filter((v, i, a) => v != null && a.indexOf(v) === i);
    },
    clamp(n, lo, hi) {
      return Math.min(hi, Math.max(lo, n));
    },
    /** 编辑距离（Damerau-Levenshtein，含相邻换位，更适合拼写纠错） */
    editDistance(a, b) {
      a = String(a || '');
      b = String(b || '');
      if (a === b) return 0;
      const m = a.length, n = b.length;
      if (!m) return n;
      if (!n) return m;
      let prev2 = null, prev = Array.from({ length: n + 1 }, (_, j) => j);
      for (let i = 1; i <= m; i++) {
        const cur = [i];
        for (let j = 1; j <= n; j++) {
          let cost = a[i - 1] === b[j - 1] ? 0 : 1;
          cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            cur[j] = Math.min(cur[j], prev2[j - 2] + 1); // 换位
          }
        }
        prev2 = prev;
        prev = cur;
      }
      return prev[n];
    },
    /** 归一化相似度 0~1 */
    similarity(a, b) {
      a = String(a || '');
      b = String(b || '');
      if (!a && !b) return 1;
      const d = util.editDistance(a, b);
      return 1 - d / Math.max(a.length, b.length, 1);
    },
    /** 二元组重合度（对拼写相似更稳） */
    bigramScore(a, b) {
      const g = (s) => {
        const out = new Set();
        for (let i = 0; i < s.length - 1; i++) out.add(s.slice(i, i + 2));
        return out;
      };
      const A = g(String(a || '')), B = g(String(b || ''));
      if (!A.size || !B.size) return 0;
      let hit = 0;
      A.forEach((x) => { if (B.has(x)) hit++; });
      return (2 * hit) / (A.size + B.size);
    },
    isEmpty(v) {
      if (v == null) return true;
      if (Array.isArray(v)) return v.length === 0;
      if (typeof v === 'string') return v.trim() === '';
      if (typeof v === 'object') return Object.keys(v).length === 0;
      return false;
    },
    /** 稳定排序用的比较器 */
    by(fn, dir = -1) {
      return (a, b) => {
        const x = fn(a), y = fn(b);
        if (x === y) return 0;
        return (x > y ? 1 : -1) * dir;
      };
    },
    nowISO() {
      return new Date().toISOString();
    },
    /** 供渲染：把 \n 变成 <br> 后仍需转义，先转义再替换 */
    nl2br(s) {
      return util.esc(s).replace(/\n/g, '<br>');
    },
  };

  RA.util = util;
})(typeof window !== 'undefined' ? window : globalThis);
