/* render/quiz.js · 全局易混词练习（跨词条） */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const E = RA.util.esc;

  function start() {
    const pool = (RA.globalQuiz || []).slice();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    RA.appState.globalQuiz = { set: pool.slice(0, 8), index: 0, selected: '', checked: false, correct: 0 };
  }

  function render() {
    const st = RA.appState.globalQuiz;
    if (!st || !st.set.length) start();
    const s = RA.appState.globalQuiz;
    const total = s.set.length;
    if (s.index >= total) {
      return `<div class="page-hero"><div class="eyebrow">RESULT</div><h1>练习完成</h1>
        <p>完成了一组易混词、搭配与词义辨析题目。</p></div>
        <div class="panel"><div class="quiz-score"><div class="mini-label">YOUR SCORE</div>
        <strong>${s.correct} / ${total}</strong>
        <p>${s.correct === total ? '本轮全部答对！' : '可以继续练习，尝试区分每个词的使用语境。'}</p>
        <button class="btn primary" data-action="quiz-restart-global">再练一组 ↗</button></div></div>`;
    }
    const q = s.set[s.index];
    const word = guessWord(q);
    return `<div class="page-hero"><div class="eyebrow">CONFUSABLE WORDS · PRACTICE</div>
      <h1>易混词练习</h1><p>${total} 道即时检测题。回答后显示解释；答错会记入复习队列。</p></div>
      <div class="panel">
        <div class="row" style="display:flex;justify-content:space-between;align-items:center">
          <span class="mini-label">QUESTION ${s.index + 1} / ${total}</span>
          <span style="font-size:12px;color:var(--muted)">已答对 ${s.correct} 题</span></div>
        <div class="progress"><div class="progress-fill" style="width:${(s.index / total) * 100}%"></div></div>
        <div class="quiz-q" style="font-family:var(--serif);font-size:18px;margin:12px 0">${E(q.prompt)}</div>
        ${q.options.map((o) => `<button class="quiz-opt ${s.checked ? (o === q.answer ? 'ok' : o === s.selected ? 'bad' : '') : o === s.selected ? 'sel' : ''}"
          data-gq-option="${E(o)}" ${s.checked ? 'disabled' : ''} style="display:block;width:100%;margin-bottom:8px;text-align:left">
          ${s.checked ? (o === q.answer ? '✓' : o === s.selected ? '✕' : '○') : s.selected === o ? '◉' : '○'} &nbsp; ${E(o)}</button>`).join('')}
        ${s.checked ? `<div class="quiz-fb ${s.selected === q.answer ? '' : 'wrong'}">
          <b>${s.selected === q.answer ? '✓ 回答正确' : '✕ 正确答案：' + E(q.answer)}</b><div>${E(q.explain || '')}</div></div>
          <button class="btn primary" data-action="quiz-next-global" style="width:100%;margin-top:14px">${s.index === total - 1 ? '查看结果 →' : '下一题 →'}</button>`
        : `<button class="btn primary" data-action="quiz-check-global" ${s.selected ? '' : 'disabled'} style="width:100%;margin-top:12px">提交答案</button>`}
        ${word && RA.dictionary.has(word) ? `<div style="margin-top:12px"><button class="chip click" data-word="${E(word)}">查看 ${E(word)} 完整词条 ↗</button></div>` : ''}
      </div>
      <div class="notice">题目为教学编写，分数只代表本轮答题结果，不是正式语言能力测评。</div>`;
  }

  /** 从题干里猜一个可用的词条（用于「查看词条」快捷入口） */
  function guessWord(q) {
    const cands = (q.options || []).concat([q.answer]).filter(Boolean);
    return cands.find((w) => RA.dictionary.has(w)) || '';
  }

  RA.quizView = { start, render, guessWord };
})(typeof window !== 'undefined' ? window : globalThis);
