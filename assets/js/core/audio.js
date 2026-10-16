/* core/audio.js · 发音：优先用词条自带的音频资源，其次浏览器语音合成
 * 硬约束：没有可用音频时不渲染播放按钮，只渲染说明文字。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});

  let ttsReady = null;

  function capability() {
    if (ttsReady) return ttsReady;
    const ok = typeof global.speechSynthesis !== 'undefined' && typeof global.SpeechSynthesisUtterance !== 'undefined';
    ttsReady = { tts: ok, note: ok ? '浏览器语音合成' : '当前浏览器不支持语音合成' };
    return ttsReady;
  }

  function pickVoice(region) {
    const synth = global.speechSynthesis;
    if (!synth || !synth.getVoices) return null;
    const voices = synth.getVoices() || [];
    const want = region === 'UK' ? 'en-GB' : region === 'US' ? 'en-US' : 'en';
    return voices.find((v) => v.lang && v.lang.replace('_', '-').toLowerCase() === want.toLowerCase()) ||
      voices.find((v) => /^en/i.test(v.lang || '')) || null;
  }

  function speak(word, region) {
    const cap = capability();
    if (!cap.tts) return { ok: false, message: '当前浏览器不支持语音合成，暂无可播放的发音资源' };
    try {
      const synth = global.speechSynthesis;
      synth.cancel();
      const u = new global.SpeechSynthesisUtterance(String(word));
      u.lang = region === 'UK' ? 'en-GB' : 'en-US';
      u.rate = 0.85;
      const v = pickVoice(region);
      if (v) u.voice = v;
      synth.speak(u);
      return { ok: true, message: '已播放（浏览器合成语音，非真人录音）' };
    } catch (e) {
      return { ok: false, message: '播放失败：' + e.message };
    }
  }

  function playUrl(url) {
    return new Promise((resolve) => {
      if (!url) return resolve({ ok: false, message: '没有音频地址' });
      try {
        const a = new global.Audio(url);
        a.play().then(() => resolve({ ok: true, message: '已播放音频文件' }))
          .catch(() => resolve({ ok: false, message: '音频文件无法播放，已尝试合成语音', fallback: true }));
      } catch (e) {
        resolve({ ok: false, message: '音频播放失败：' + e.message, fallback: true });
      }
    });
  }

  /** 统一的发音入口：有无音频资源都返回明确结果，绝不静默失败 */
  function pronounce(word, pron) {
    const url = pron && pron.audio;
    if (url) {
      return playUrl(url).then((r) => (r.ok || !r.fallback ? r : speak(word, pron && pron.region)));
    }
    return Promise.resolve(speak(word, pron && pron.region));
  }

  /** 是否有任何可播放手段（决定渲染按钮还是说明文字） */
  function available(pron) {
    const cap = capability();
    if (pron && pron.audio) return { ok: true, source: pron.source || '词条自带音频资源' };
    if (cap.tts) return { ok: true, source: '浏览器语音合成（非真人录音）' };
    return { ok: false, source: '无音频资源，且当前浏览器不支持语音合成' };
  }

  RA.audio = { capability, speak, playUrl, pronounce, available };
})(typeof window !== 'undefined' ? window : globalThis);
