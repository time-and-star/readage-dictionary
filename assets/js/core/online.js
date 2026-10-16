/* core/online.js · 在线兜底查询（dictionaryapi.dev，公开 API）
 * 约定：在线结果只作补充，绝不伪装成完整词条；缺失模块在界面上明确标注。
 * 已处理：网络错误 / CORS / 超时 / 空结果 / 数据格式异常 / 第三方不可用。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});

  const ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const TIMEOUT = 8000;

  const state = { cache: {}, pending: {}, failures: {} };

  function classify(err, status) {
    if (err && err.name === 'AbortError') return { kind: 'timeout', message: '在线查询超时（8 秒），请稍后重试。' };
    if (status === 404) return { kind: 'notfound', message: '在线词库未收录该单词。' };
    if (status === 429) return { kind: 'ratelimit', message: '在线查询请求过于频繁，请稍后再试。' };
    if (status) return { kind: 'http', message: '在线服务返回 HTTP ' + status + '。' };
    return { kind: 'network', message: '网络不可用或被浏览器策略拦截（CORS / 离线）。' };
  }

  async function fetchWord(word) {
    const w = RA.util.slug(word);
    if (!w) return { ok: false, error: { kind: 'input', message: '请输入英文单词。' } };
    if (state.cache[w]) return { ok: true, data: state.cache[w] };
    if (state.pending[w]) return state.pending[w];

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), TIMEOUT) : null;
    const p = (async () => {
      try {
        const res = await fetch(ENDPOINT + encodeURIComponent(w), controller ? { signal: controller.signal } : undefined);
        if (!res.ok) throw Object.assign(new Error('HTTP ' + res.status), { status: res.status });
        const data = await res.json();
        if (!Array.isArray(data) || !data.some((x) => Array.isArray(x.meanings) && x.meanings.length)) {
          throw Object.assign(new Error('数据格式异常'), { kind: 'format' });
        }
        state.cache[w] = data;
        return { ok: true, data };
      } catch (err) {
        const info = err && err.kind === 'format'
          ? { kind: 'format', message: '在线数据格式异常：返回内容缺少有效词义。' }
          : classify(err, err && err.status);
        state.failures[w] = info;
        return { ok: false, error: info };
      } finally {
        if (timer) clearTimeout(timer);
        delete state.pending[w];
      }
    })();
    state.pending[w] = p;
    return p;
  }

  /** 在线数据 → 受限词条对象（字段缺失处保留空值，由渲染层标出「暂无数据」） */
  function toPartialEntry(word, data) {
    const first = (data && data[0]) || {};
    const pron = [first.phonetic, ...((first.phonetics || []).map((p) => p.text))].filter(Boolean)[0] || '';
    const audio = ((first.phonetics || []) .map((p) => p.audio).find(Boolean)) || null;
    const meanings = (data || []).flatMap((x) => Array.isArray(x.meanings) ? x.meanings : []);
    const senses = meanings.slice(0, 12).map((m, i) => {
      const def = (m.definitions || [])[0] || {};
      return {
        index: i + 1,
        titleZh: '',
        partOfSpeech: m.partOfSpeech || '',
        transitivity: null,
        domain: '',
        definitionEn: def.definition || '',
        definitionZhTranslation: '',
        explanationZh: '',
        examples: def.example ? [{ english: def.example, chinese: '', label: '在线例句', sourceType: 'external' }] : [],
        collocations: [],
        synonyms: [],
      };
    }).filter((s) => s.definitionEn);
    const sourceUrls = [...new Set((data || []).flatMap((x) => Array.isArray(x.sourceUrls) ? x.sourceUrls : []))].slice(0, 3);
    return {
      id: word,
      lemma: (first.word || word),
      language: 'en',
      tier: 'online',
      pos: [...new Set(meanings.map((m) => m.partOfSpeech).filter(Boolean))],
      level: null,
      pronunciations: pron ? [{ region: '在线', ipa: pron, audio: audio ? (audio.startsWith('//') ? 'https:' + audio : audio) : null, source: 'dictionaryapi.dev' }] : [],
      coreMeaning: { zh: '', en: senses.length ? senses[0].definitionEn : '', note: '' },
      senses,
      forms: [],
      family: [],
      relations: [],
      contexts: [],
      mistakes: [],
      quiz: [],
      sources: sourceUrls.map((u) => ({ name: 'dictionaryapi.dev 提供的来源链接', url: u, dataType: '英文释义 / 例句', updatedAt: new Date().toISOString().slice(0, 10), license: '以来源页面授权为准' })),
      missingModules: ['中文释义与中文详解', '词形变化', '词汇家族', '词源', '形近音近辨析', '近义词辨析', '搭配与句型', '常见错误', '语境长难句', '使用范围', '记忆与测试'],
    };
  }

  RA.online = { fetchWord, toPartialEntry, state, ENDPOINT, TIMEOUT, classify };
})(typeof window !== 'undefined' ? window : globalThis);
