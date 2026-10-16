/* render/views.js · 首页 / 词库 / 生词本 / 复习 / 查不到 / 加载中 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const E = RA.util.esc;
  const icon = (name) => `<svg class="ui-icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  function featured() {
    return ['adapt', 'adopt', 'adept', 'affect', 'effect', 'approach', 'issue', 'charge']
      .filter((w) => RA.dictionary.has(w));
  }

  function renderHome() {
    const words = RA.dictionary.words();
    const total = RA.dictionary.count();
    const saved = RA.learn.savedList().length;
    const stats = RA.learn.quizStats();
    return `<section class="home-hero">
      <div class="home-hero-top">
        <div><div class="eyebrow">A WORD, A LITTLE WORLD</div>
          <h1>从一个词，<br>读懂<em>更多。</em></h1>
          <p>在释义中理解，在语境中记住。<br>让每一次查词，都多一点收获。</p></div>
        <figure class="home-photo"><img src="assets/images/reading-desk.jpg" alt="窗边书桌上翻开的书与一杯茶" width="1200" height="800" fetchpriority="high"><figcaption>A QUIET MOMENT TO LEARN</figcaption></figure>
      </div>
      <form class="home-search" id="homeSearchForm" autocomplete="off">
        <span class="search-icon" aria-hidden="true">${icon('search')}</span>
        <input id="homeSearchInput" type="search" aria-label="首页查词" placeholder="输入想了解的英文单词" spellcheck="false" maxlength="90">
        <button type="submit" class="btn primary">查词 ${icon('arrow')}</button>
      </form>
      <div class="search-hints"><span>试着查查</span>${['adapt', 'adopt', 'issue'].map((w) => `<button data-word="${w}">${w}</button>`).join('')}</div>
    </section>
    <div class="home-stats" aria-label="词库与学习概况">
      <div class="home-stat"><b>${total.toLocaleString('en-US')}</b><span>本地词条 · 离线可查</span></div>
      <div class="home-stat"><b>${saved}</b><span>收藏的单词</span></div>
      <div class="home-stat"><b>${stats.attempts || 0}</b><span>累计练习题数</span></div>
    </div>
    <section class="panel home-picks">
      <div class="section-heading"><div><h2>值得认识的词</h2><p>常见，也值得再读一遍。</p></div><button class="text-link" data-action="library">浏览词库 ${icon('arrow')}</button></div>
      <div class="word-grid">${featured().map((w) => {
        const e = words[w];
        return `<button class="word-card" data-word="${E(w)}"><b>${E(w)}</b><p>${E(e.coreMeaning.zh)}</p><span class="mini-label">${e.senses.length} 个义项 · 查看释义 →</span></button>`;
      }).join('')}</div>
    </section>
    <section class="panel">
      <div class="section-heading"><div><h2>相似的词，不同的意思</h2><p>放在一起，差别更清楚。</p></div><button class="text-link" data-action="quiz">开始练习 ${icon('arrow')}</button></div>
      <div class="confusion-grid">${(RA.groups || []).slice(0, 4).map((g) => `<div class="confusion-pair"><h3>${E(g.title)}</h3>
        <div class="chips">${g.words.map((w) => `<button class="chip click" data-word="${E(w)}">${E(w)}</button>`).join('')}</div><p>${E(g.note)}</p></div>`).join('')}</div>
    </section>
    <section class="explore-strip"><img src="assets/images/quiet-path.jpg" alt="晨雾中的草地小路和树木" width="900" height="600" loading="lazy"><div><h3>走得慢一点，记得深一点。</h3><p>收藏一个新词，留下一点自己的理解。</p><button class="text-link" data-view="saved">打开我的生词本 ${icon('arrow')}</button></div></section>
    <div class="footer-note">ReadAge Dictionary · 读懂词义，也读懂用法。</div>`;
  }
  const PAGE_SIZE = 72;

  function libraryStats() {
    const all = Object.values(RA.dictionary.words());
    const full = all.filter((w) => w.tier === 'full').length;
    const curatedThin = all.filter((w) => w.tier !== 'pending' && w.tier !== 'full').length;
    return { total: all.length, authored: all.filter((w) => w.tier !== 'pending').length, pending: all.filter((w) => w.tier === 'pending').length, full, curatedThin };
  }

  function renderLibrary() {
    const st = RA.appState;
    const filter = st.libraryFilter || '已补全';
    const letter = st.libraryLetter || '';
    const page = Math.max(0, st.libraryPage || 0);
    const words = RA.dictionary.words();
    let list = Object.values(words).sort((a, b) => a.lemma.localeCompare(b.lemma));
    if (filter === '已补全') list = list.filter((w) => w.tier !== 'pending');
    else if (filter === '待补全') list = list.filter((w) => w.tier === 'pending');
    else if (filter === '形近词') list = list.filter((w) => (w.relations || []).length);
    else if (filter === '多义词') list = list.filter((w) => w.senses.length > 1);
    else if (filter === '完整词条') list = list.filter((w) => w.tier === 'full');
    if (letter) list = list.filter((w) => w.lemma.toLowerCase().indexOf(letter) === 0);

    const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    const cur = Math.min(page, pages - 1);
    st.libraryPage = cur;
    const slice = list.slice(cur * PAGE_SIZE, cur * PAGE_SIZE + PAGE_SIZE);
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const stats = libraryStats();

    const filterLabels = { '已补全': '有释义', '待补全': '待补释义', '形近词': '形近词', '多义词': '多义词', '完整词条': '完整词条' };
    return `<div class="page-hero"><div class="eyebrow">THE WORD COLLECTION</div>
      <h1>本地词库</h1>
      <p>按字母浏览，或从熟悉的词开始，发现新的义项与用法。</p>
      <div class="library-meta"><span>${stats.total.toLocaleString('en-US')} 个词条</span><span>${stats.authored.toLocaleString('en-US')} 个已有释义</span><span>离线可查</span></div></div>
      <div class="filter-bar">${['已补全', '待补全', '形近词', '多义词', '完整词条'].map((f) =>
        `<button class="${filter === f ? 'active' : ''}" data-filter="${E(f)}" aria-pressed="${filter === f}">${E(filterLabels[f])}</button>`).join('')}</div>
      <div class="filter-bar letter-filter" aria-label="按首字母筛选">
        <button class="${letter === '' ? 'active' : ''}" data-letter="" aria-pressed="${letter === ''}">全部</button>
        ${letters.map((l) => `<button class="${letter === l ? 'active' : ''}" data-letter="${l}" aria-pressed="${letter === l}">${l.toUpperCase()}</button>`).join('')}
      </div>
      <div class="word-grid">${slice.map((w) => `<button class="word-card" data-word="${E(w.lemma)}">
        <b>${E(w.lemma)}</b><p>${E((w.coreMeaning && w.coreMeaning.zh) || '释义待补')}</p>
        <span class="mini-label">${w.tier === 'pending'
          ? E((w.examTags || []).join('/') || '词表词') + ' · 释义待补'
          : w.senses.length + ' 个义项' + (w.tier === 'full' ? ' · 完整词条' : '')} →</span></button>`).join('') || '<div class="empty"><h3>暂无匹配的词条</h3><p>换一个分类或首字母试试。</p></div>'}</div>
      <div class="filter-bar" style="margin-top:16px">
        <button data-page="prev" ${cur === 0 ? 'disabled' : ''}>← 上一页</button>
        <span class="mini-label" style="align-self:center">第 ${cur + 1} / ${pages} 页 · 共 ${list.length} 个</span>
        <button data-page="next" ${cur >= pages - 1 ? 'disabled' : ''}>下一页 →</button>
      </div>
      <div class="footer-note">每页 ${PAGE_SIZE} 个词条 · 部分词条的词源、语境与练习内容仍待完善。</div>`;
  }

  function renderSaved() {
    const list = RA.learn.savedList().filter((w) => RA.dictionary.has(w));
    return `<div class="page-hero"><div class="eyebrow">MY VOCABULARY</div>
      <h1>我的生词本</h1>
      <p>收藏想记住的单词，把新的理解留在笔记里。记录保存在当前浏览器，可导出备份。</p></div>
      ${list.length ? `<div class="word-grid">${list.map((w) => {
        const e = RA.dictionary.get(w);
        const sum = RA.learn.senseSummary(w, e.senses);
        return `<button class="word-card" data-word="${E(w)}"><b>${E(w)}</b><p>${E(e.coreMeaning.zh)}</p>
          <span class="mini-label">掌握 ${sum.mastered}/${sum.total} 义项${RA.learn.getNote(w) ? ' · 有笔记' : ''} ↗</span></button>`;
      }).join('')}</div>
`
      : `<div class="empty"><svg class="ui-icon empty-icon" aria-hidden="true"><use href="#i-bookmark"/></svg><h3>留住遇见的新词</h3><p>在词条页点击「收藏该词」，开始积累你的生词本。</p>
         <button class="btn primary" data-action="library">浏览本地词库</button></div>`}
      <div class="panel" style="margin-top:18px"><h2>管理记录</h2>
        <p class="sub" style="color:var(--muted);font-size:13px">导出收藏、笔记、义项掌握状态与错误记录为 JSON，可在其他设备导入。</p>
        <div class="chips" style="margin-top:10px">
          <button class="btn secondary" data-action="export">导出学习数据 ↓</button>
          <button class="btn secondary" data-action="import">导入备份文件 ↑</button>
        </div>
      </div>`;
  }

  function renderReview() {
    const queue = RA.learn.reviewQueue(RA.dictionary.words(), 30);
    const errors = RA.learn.errors().slice(0, 30);
    return `<div class="page-hero"><div class="eyebrow">REVIEW · 针对性复习</div>
      <h1>错题与复习队列</h1>
      <p>错误记录关联到具体单词与义项；复习队列由错题频次和义项「学习中 / 到期」状态生成。</p></div>
      ${queue.length ? `<section class="panel"><h2>复习队列</h2>
        ${rows(queue.map((x) => `<div style="display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-top:1px solid var(--rule-soft)">
          <span><button class="chip click" data-word="${E(x.lemma)}">${E(x.lemma)} ↗</button> <span style="font-size:12.5px;color:var(--muted)">${E(x.zh)}</span></span>
          <span style="font-size:12px;color:var(--muted);white-space:nowrap">错误 ${x.count} 次 ｜ 最近 ${E(String(x.last).slice(0, 10))}</span>
        </div>`).join(''))}
      </section>` : '<div class="empty"><h3>暂无复习任务</h3><p>做一次词条内的即时检测，答错的题会进入这里。</p></div>'}
      ${errors.length ? `<section class="panel"><h2>最近错误记录</h2>
        ${rows(errors.map((e) => `<div style="padding:9px 0;border-top:1px solid var(--rule-soft)">
          <div><button class="chip click" data-word="${E(e.wordId)}">${E(e.wordId)} ↗</button>
            <span class="tag red">${E(RA.model.ERROR_TYPES[e.errorType] || e.errorType)}</span>
            ${e.senseId ? `<span class="tag outline">${E(e.senseId)}</span>` : ''}</div>
          <div style="font-size:12.5px;color:var(--muted);margin-top:4px">选择了「${E(e.chosen)}」｜${E(String(e.timestamp).slice(0, 16).replace('T', ' '))}</div>
        </div>`).join(''))}
        <button class="btn secondary" data-action="clear-errors" style="margin-top:12px">清空错误记录</button>
      </section>` : ''}`;

    function rows(html) { return html; }
  }

  function renderMissing(query, suggestions, errorInfo) {
    return `<div class="page-hero"><div class="eyebrow">WORD NOT FOUND</div>
      <h1>${E(query)}</h1>
      <p>本地词库没有收录这个词${errorInfo ? '，' + E(errorInfo.message) : ''}。请检查拼写，或重试在线查询。</p></div>
      <section class="panel">
        <h2>你是不是想找</h2>
        ${suggestions.length ? `<div class="chips">${suggestions.map((s) => `<button class="chip click" data-word="${E(s.lemma)}">${E(s.lemma)} ↗</button>`).join('')}</div>`
        : '<p style="color:var(--muted)">没有相近的本地词条。</p>'}
        <div class="notice">可以点击上方建议词，或在搜索框输入其他单词后重试在线查询。</div>
        <button class="btn secondary" data-action="retry-online" data-word="${E(query)}" style="margin-top:14px">重试在线查询</button>
      </section>`;
  }

  function renderLoading(query) {
    return `<div class="page-hero"><div class="eyebrow">LOOKUP · 在线查词</div>
      <h1>${E(query)}</h1><p>本地词库中没有该词，正在尝试获取在线英文释义（超时 8 秒自动放弃）。</p></div>
      <div class="panel"><p style="color:var(--muted)">查询中……若网络不可用，可继续使用本地词库。</p></div>`;
  }

  function renderRail() {
    const words = RA.dictionary.words();
    const visited = RA.learn.history().filter((w) => RA.dictionary.has(w));
    const saved = RA.learn.savedList().length;
    const stats = RA.learn.quizStats();
    const issues = RA.dictionary.issues().length;
    const lib = libraryStats();
    return `${RA.appState.view === 'home' ? '' : `<figure class="reading-note"><img src="assets/images/reading-desk.jpg" alt="窗边书桌上翻开的书与一杯茶" width="1200" height="800"><figcaption><span>MAKE ROOM FOR A NEW WORD</span><p>给一个新词，一点时间。</p></figcaption></figure>`}
    <section class="rail-card"><h2 class="rail-title">我的学习<small>A LITTLE, EVERY DAY</small></h2>
      <div class="rail-stats">
        <div class="rail-stat"><b>${visited.length}</b><span>最近查阅</span></div>
        <div class="rail-stat"><b>${saved}</b><span>收藏单词</span></div>
        <div class="rail-stat"><b>${stats.attempts ? Math.round((stats.correct / stats.attempts) * 100) + '%' : '—'}</b><span>答题正确率</span></div>
      </div>
      <button class="text-link" data-view="saved">查看生词本 ${icon('arrow')}</button>
      <div class="rail-divider"></div><h2 class="rail-title">最近查阅</h2>
      ${visited.slice(0, 5).map((w) => `<div class="tiny-word"><button data-word="${E(w)}">${E(w)}</button><small>${E((words[w].coreMeaning || {}).zh || '查看释义')}</small></div>`).join('') || '<p>查过的词，会留在这里。</p>'}
    </section>
    <details class="data-note"><summary>关于词库</summary>
      <p>${lib.total.toLocaleString('en-US')} 个本地词条，${lib.authored.toLocaleString('en-US')} 个已有释义。部分词条的词源、语境与练习仍待完善，缺失内容会明确标注。</p>
      <p>教学释义与例句由本项目编写，来源链接用于核对。在线查询为第三方补充结果。</p>
      <span class="offline-flag"><span class="status-dot" aria-hidden="true"></span>本地词库可离线使用</span>
      ${issues ? `<p>数据校验提示：${issues} 条。</p>` : ''}
    </details>`;
  }
  RA.views = { renderHome, renderLibrary, renderSaved, renderReview, renderMissing, renderLoading, renderRail };
})(typeof window !== 'undefined' ? window : globalThis);

