/* app.js · 应用装配：路由、事件委托、搜索、在线兜底、学习交互 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const U = RA.util;
  const E = U.esc;

  RA.appState = {
    view: 'entry',
    word: 'adapt',
    libraryFilter: '已补全',
    libraryLetter: '',
    libraryPage: 0,
    quiz: {},
    globalQuiz: null,
    onlineWord: null,
    onlineEntry: null,
    onlineError: null,
    onlineLoading: false,
    lastQuery: '',
  };

  let toastTimer = null;
  RA.notify = function (msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 3000);
  };

  const $ = (id) => document.getElementById(id);
  const dict = () => RA.dictionary;

  /* ---------- 路由 ---------- */
  function setHash(view, word) {
    const h = view === 'entry' ? '#/word/' + encodeURIComponent(word || 'adapt') : '#/' + view;
    if (location.hash !== h) {
      suppressHash = true;
      location.hash = h;
      setTimeout(() => { suppressHash = false; }, 0);
    }
  }
  let suppressHash = false;
  let queryGeneration = 0;

  function navigate(view, word) {
    queryGeneration++;
    clearTimeout(suggestTimer);
    closeSidebar();
    RA.appState.view = view;
    if (word) RA.appState.word = word;
    if (view === 'quiz' && (!RA.appState.globalQuiz || !RA.appState.globalQuiz.set.length)) RA.quizView.start();
    render();
    window.scrollTo({ top: 0, behavior: 'instant' });
    setHash(view, RA.appState.word);
  }

  function parseHash() {
    const m = /^#\/(word)\/(.+)$/.exec(location.hash || '');
    if (m) { try { return { view: 'entry', word: decodeURIComponent(m[2]) }; } catch (_) { return { view: 'entry', word: 'adapt' }; } }
    const v = (location.hash || '').replace(/^#\//, '');
    if (['home', 'library', 'saved', 'quiz', 'review'].indexOf(v) >= 0) return { view: v };
    return null;
  }

  /* ---------- 查词 ---------- */
  async function openWord(raw, opts) {
    const q = U.slug(raw);
    if (!q) { RA.notify('请输入英文单词'); return; }
    const localHit = RA.search.lookup(dict().index(), q, opts);
    if (!['exact','inflected'].includes(localHit.type) && !U.isWordLike(q)) { RA.notify('请输入英文单词或简短英文词组'); return; }
    queryGeneration++;
    clearTimeout(suggestTimer);
    $('searchDrop').classList.remove('open');
    closeSidebar();
    RA.appState.onlineLoading = false;
    RA.appState.word = q;
    RA.appState.view = 'entry';
    RA.appState.onlineWord = null;
    RA.appState.onlineEntry = null;
    RA.appState.onlineError = null;

    const r = localHit;
    if (r.type === 'exact' || r.type === 'inflected') {
      RA.appState.word = r.wordId;
      RA.learn.pushHistory(r.wordId);
      if (r.type === 'inflected' && !opts || (r.type === 'inflected' && opts && opts.silent !== true)) {
        RA.notify('已跳转到原形词条：' + r.lemma);
      }
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
      setHash('entry', r.wordId);
      return;
    }
    if (r.type === 'external') {
      await tryOnline(r.lemma, r.suggestions);
      return;
    }
    await tryOnline(q, r.suggestions);
  }

  async function tryOnline(word, suggestions) {
    RA.appState.onlineWord = word;
    RA.appState.onlineLoading = true;
    RA.appState.view = 'entry';
    render();
    const generation = queryGeneration;
    const res = await RA.online.fetchWord(word);
    if (generation !== queryGeneration) return;
    RA.appState.onlineLoading = false;
    if (res.ok) {
      RA.appState.onlineEntry = RA.online.toPartialEntry(word, res.data);
      RA.learn.pushHistory('*' + word);
    } else {
      RA.appState.onlineEntry = null;
      RA.appState.onlineError = res.error;
    }
    RA.appState.suggestions = suggestions || [];
    render();
    setHash('entry', word);
  }

  /* ---------- 渲染 ---------- */
  function render() {
    const app = RA.appState;
    const main = $('main');
    document.querySelectorAll('.nav-btn[data-view]').forEach((b) => {
      const active = b.dataset.view === app.view;
      b.classList.toggle('active', active);
      if (active) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    main.dataset.view = app.view;
    $('navSavedCount').textContent = RA.learn.savedList().length;
    $('navLibraryCount').textContent = dict().count();
    $('rail').innerHTML = RA.views.renderRail();

    if (app.view === 'home') main.innerHTML = RA.views.renderHome();
    else if (app.view === 'library') main.innerHTML = RA.views.renderLibrary();
    else if (app.view === 'saved') main.innerHTML = RA.views.renderSaved();
    else if (app.view === 'review') main.innerHTML = RA.views.renderReview();
    else if (app.view === 'quiz') main.innerHTML = RA.quizView.render();
    else {
      const w = dict().get(app.word);
      if (w) main.innerHTML = RA.entryRenderer.renderEntry(w);
      else if (app.onlineEntry && app.onlineEntry.lemma === U.slug(app.word)) main.innerHTML = RA.entryRenderer.renderEntry(app.onlineEntry);
      else if (app.onlineLoading) main.innerHTML = RA.views.renderLoading(app.word);
      else main.innerHTML = RA.views.renderMissing(app.word, app.suggestions || [], app.onlineError);
    }
    document.title = (app.view === 'entry' ? app.word + ' · ' : '') + 'ReadAge 词典';
  }
  RA.render = render;

  /* ---------- 搜索建议（防抖：17974 词条下避免每键全量计算） ---------- */
  let suggestTimer = null;
  function updateSuggest() {
    clearTimeout(suggestTimer);
    suggestTimer = setTimeout(updateSuggestNow, 120);
  }
  function updateSuggestNow() {
    const q = $('searchInput').value.trim();
    const el = $('searchDrop');
    if (!q) { el.classList.remove('open'); el.innerHTML = ''; return; }
    const list = RA.search.suggest(dict().index(), q, 8);
    if (!list.length) {
      el.innerHTML = `<div class="drop-head">本地词库没有匹配项，回车可尝试在线查询</div>`;
      el.classList.add('open');
      return;
    }
    el.innerHTML = `<div class="drop-head">本地词库建议</div>` + list.map((s) =>
      `<button class="suggest" data-word="${E(s.lemma)}" role="option"><b>${E(s.lemma)}</b><small>${E(s.zh)}</small></button>`).join('');
    el.classList.add('open');
  }

  /* ---------- 词条内测试 ---------- */
  function submitEntryQuiz(wordId) {
    const w = dict().get(wordId);
    if (!w) return;
    const qs = RA.entryRenderer.quizFor(w);
    const st = RA.appState.quiz[wordId] || { answers: {}, submitted: false };
    if (Object.keys(st.answers).length !== qs.length) { RA.notify('请先完成全部题目'); return; }
    if (st.submitted) return;
    st.submitted = true;
    RA.appState.quiz[wordId] = st;
    qs.forEach((q, i) => {
      const ok = st.answers[i] === q.answer;
      RA.learn.markQuiz(wordId, ok);
      if (!ok) {
        RA.learn.recordError({
          wordId, senseId: q.senseId || '', questionId: q.id || '', errorType: q.errorType || 'meaning',
          chosen: st.answers[i] || '', detail: q.prompt, correct: false,
        });
      }
    });
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
    RA.notify('已提交，成绩见测试模块');
  }

  /* ---------- 事件委托 ---------- */
  function onClick(ev) {
    const sectionLink = ev.target.closest('.lex-toc a[href^="#lex-"]');
    if (sectionLink) {
      const section = document.getElementById(sectionLink.getAttribute('href').slice(1));
      if (section) {
        ev.preventDefault();
        section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
      return;
    }
    const b = ev.target.closest('button,[role="button"],a[data-word]');
    if (!b) {
      if (!ev.target.closest('.top-search')) $('searchDrop').classList.remove('open');
      return;
    }
    if (b.id === 'brand') { navigate('home'); return; }
    if (b.id === 'menuBtn') { document.getElementById('sideNav').classList.toggle('open'); toggleScrim(); return; }
    if (b.id === 'scrim') { closeSidebar(); return; }
    // 只有「纯跳转」按钮才走 data-word 分支；带 data-action / data-pron 的按钮由后面对应分支处理
    if (b.dataset.word && !b.dataset.action && !b.dataset.pron) { $('searchInput').value = b.dataset.word; openWord(b.dataset.word, { preferExact: true }); return; }
    if (b.dataset.view) { navigate(b.dataset.view); return; }
    if (b.dataset.filter) { RA.appState.libraryFilter = b.dataset.filter; RA.appState.libraryPage = 0; render(); return; }
    if (b.dataset.letter !== undefined) { RA.appState.libraryLetter = b.dataset.letter; RA.appState.libraryPage = 0; render(); return; }
    if (b.dataset.page) {
      RA.appState.libraryPage = (RA.appState.libraryPage || 0) + (b.dataset.page === 'next' ? 1 : -1);
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    if (b.dataset.pron) {
      const [wid, region] = b.dataset.pron.split('|');
      const w = dict().get(wid) || (RA.appState.onlineEntry && RA.appState.onlineEntry.id === wid ? RA.appState.onlineEntry : null);
      const p = (w.pronunciations || []).find((x) => x.region === region) || w.pronunciations[0];
      RA.audio.pronounce(w.lemma, p).then((r) => RA.notify(r.message));
      return;
    }
    if (b.dataset.gqOption) { RA.appState.globalQuiz.selected = b.dataset.gqOption; render(); return; }

    const act = b.dataset.action;
    if (!act) return;
    switch (act) {
      case 'toggle-save': {
        const added = RA.learn.toggleSaved(b.dataset.word);
        RA.notify(added ? '已加入生词本' : '已从生词本移除');
        render();
        break;
      }
      case 'copy': {
        const text = b.dataset.word;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => RA.notify('已复制：' + text)).catch(() => RA.notify('无法自动复制，请手动选择'));
        } else RA.notify('当前环境不支持自动复制');
        break;
      }
      case 'add-review': {
        const w = dict().get(b.dataset.word);
        (w.senses || []).forEach((s) => {
          if (RA.learn.getSenseStatus(w.id, s.id) === 'unlearned') RA.learn.setSenseStatus(w.id, s.id, 'learning');
        });
        RA.notify('已将该词未学习的义项标记为「学习中」，可在复习中查看');
        render();
        break;
      }
      case 'set-status': {
        RA.learn.setSenseStatus(b.dataset.word, b.dataset.sense, b.dataset.status);
        render();
        RA.notify('义项状态已保存：' + RA.model.STATUS[b.dataset.status]);
        break;
      }
      case 'save-note': {
        const el = $('noteArea');
        if (!el) return;
        RA.learn.setNote(b.dataset.word, el.value);
        RA.notify(RA.storage.isVolatile('notes') ? '笔记仅在本次会话保存，请导出备份' : '笔记已保存到本浏览器');
        break;
      }
      case 'quiz-submit': submitEntryQuiz(b.dataset.word); break;
      case 'quiz-restart': {
        RA.appState.quiz[b.dataset.word] = { answers: {}, submitted: false };
        const y = window.scrollY; render(); window.scrollTo(0, y);
        break;
      }
      case 'quiz-restart-global': RA.quizView.start(); render(); break;
      case 'quiz-check-global': {
        const s = RA.appState.globalQuiz;
        if (!s.selected || s.checked) return;
        s.checked = true;
        const q = s.set[s.index];
        const ok = s.selected === q.answer;
        if (ok) s.correct++; else RA.learn.recordError({ wordId: RA.quizView.guessWord(q) || '', senseId: '', questionId: q.id, errorType: q.errorType, chosen: s.selected, detail: q.prompt, correct: false });
        RA.learn.markQuiz(RA.quizView.guessWord(q) || '', ok);
        render();
        break;
      }
      case 'quiz-next-global': {
        const s = RA.appState.globalQuiz;
        s.index++; s.selected = ''; s.checked = false; render();
        break;
      }
      case 'quiz': navigate('quiz'); break;
      case 'library': navigate('library'); break;
      case 'retry-online': openWord(b.dataset.word); break;
      case 'export': exportData(); break;
      case 'import': $('importFile').click(); break;
      case 'clear-errors': RA.learn.clearErrors(); RA.notify('已清空错误记录'); render(); break;
      default: break;
    }
  }

  function onChange(ev) {
    const t = ev.target;
    if (t.matches('[data-quiz-index]')) {
      const wid = t.dataset.quizWord, i = Number(t.dataset.quizIndex);
      RA.appState.quiz[wid] = RA.appState.quiz[wid] || { answers: {}, submitted: false };
      RA.appState.quiz[wid].answers[i] = t.value;
      const btn = document.querySelector('[data-action="quiz-submit"][data-word="' + wid + '"]');
      const w = dict().get(wid);
      const total = w ? RA.entryRenderer.quizFor(w).length : 0;
      if (btn) {
        const n = Object.keys(RA.appState.quiz[wid].answers).length;
        btn.disabled = n !== total;
        btn.textContent = '提交答案（已选 ' + n + ' / ' + total + '）';
      }
    }
  }

  function exportData() {
    const data = RA.learn.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ReadAge_学习数据.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    RA.notify('已导出学习数据备份文件');
  }

  function toggleScrim() {
    const open = document.getElementById('sideNav').classList.contains('open');
    $('menuBtn').setAttribute('aria-expanded', String(open));
    let scrim = document.getElementById('scrim');
    if (open && !scrim) {
      scrim = document.createElement('button');
      scrim.id = 'scrim';
      scrim.className = 'scrim';
      scrim.setAttribute('aria-label', '关闭导航菜单');
      document.body.appendChild(scrim);
    } else if (!open && scrim) scrim.remove();
  }
  function closeSidebar() {
    document.getElementById('sideNav').classList.remove('open');
    $('menuBtn').setAttribute('aria-expanded', 'false');
    const scrim = document.getElementById('scrim');
    if (scrim) scrim.remove();
  }

  /* ---------- 启动 ---------- */
  function boot() {
    const backend = RA.storage.init();
    const issues = dict().issues();
    if (issues.length) console.warn('[ReadAge] 数据校验告警：', issues);

    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        clearTimeout(suggestTimer);
        if ($('sideNav').classList.contains('open')) { closeSidebar(); $('menuBtn').focus(); }
        $('searchDrop').classList.remove('open');
      }
    });
    $('brand').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('home'); } });
    $('searchForm').addEventListener('submit', (e) => { e.preventDefault(); $('searchDrop').classList.remove('open'); openWord($('searchInput').value); });
    $('searchInput').addEventListener('input', updateSuggest);
    $('searchInput').addEventListener('keydown', (e) => {
      if (e.key === 'Escape') $('searchDrop').classList.remove('open');
      if (e.key === 'ArrowDown') { const f = $('searchDrop').querySelector('button'); if (f) { e.preventDefault(); f.focus(); } }
    });
    $('main').addEventListener('submit', (e) => {
      if (e.target.id === 'homeSearchForm') { e.preventDefault(); openWord($('homeSearchInput').value); }
    });
    window.addEventListener('hashchange', () => {
      if (suppressHash) return;
      const r = parseHash();
      if (!r) return;
      if (r.view === 'entry') openWord(r.word, { silent: true, preferExact: true });
      else navigate(r.view);
    });

    const initial = parseHash();
    if (initial && initial.view === 'entry') {
      openWord(initial.word, { silent: true, preferExact: true });
    } else if (initial) {
      navigate(initial.view);
    } else {
      navigate('entry', 'adapt');
    }

    if (backend !== 'localStorage') {
      RA.notify('当前环境无法写入本地存储：学习记录只在本次会话有效。');
    }
    console.log('[ReadAge] 词条数：' + dict().count() + '，校验告警：' + issues.length + '，存储后端：' + backend);
  }

  RA.app = { boot, navigate, openWord, render, exportData };
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
  }
})(typeof window !== 'undefined' ? window : globalThis);
