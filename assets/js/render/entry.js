/* render/entry.js · 词条页渲染（经典词典风格）
 * 全部内容由数据驱动：同一个渲染器服务完整词条（adapt）与精编词条，
 * 数据缺失的模块统一渲染「暂无可靠数据」，不隐藏、不编造。
 * 模块顺序固定为 00 头部 + 01~13，与原原型一致。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  const E = RA.util.esc;
  const M = RA.model;
  const icon = (name) => `<svg class="ui-icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  const SECTIONS = [
    { no: '01', id: 'senses', title: '释义与例句' },
    { no: '02', id: 'forms', title: '词形变化' },
    { no: '03', id: 'family', title: '词汇家族' },
    { no: '04', id: 'etymology', title: '词源与构词' },
    { no: '05', id: 'relations', title: '形近与易混词' },
    { no: '06', id: 'synonyms', title: '近义词辨析' },
    { no: '07', id: 'collocations', title: '搭配与句型' },
    { no: '08', id: 'mistakes', title: '常见错误' },
    { no: '09', id: 'contexts', title: '语境与长难句' },
    { no: '10', id: 'usage', title: '词汇使用范围' },
    { no: '11', id: 'memory', title: '学习与笔记' },
    { no: '12', id: 'quiz', title: '即时检测' },
    { no: '13', id: 'sources', title: '参考来源' },
  ];

  const MISSING = '<div class="missing">暂无可靠数据，该模块内容暂未收录。</div>';

  /* ---------- 小工具 ---------- */
  function sec(no, id, title, body, sub) {
    return `<section class="lex-sec" id="lex-${id}">
      <div class="lex-sec-h"><span class="lex-sec-no">${no}</span><h2 class="lex-sec-title">${E(title)}</h2>${sub ? `<span class="lex-sec-sub">${E(sub)}</span>` : ''}</div>
      ${body}</section>`;
  }
  function rowsToTable(headers, rows) {
    if (!rows.length) return MISSING;
    return `<div class="tbl-wrap"><table class="lex-tbl"><thead><tr>${headers.map((h) => `<th>${E(h)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  function wordLink(lemma, opts) {
    const known = RA.dictionary.has(lemma);
    const cls = known ? 'wl' : 'wl dead';
    const tip = known ? '' : ' title="本词库未收录，点击尝试在线查询"';
    return `<button class="${cls}" data-word="${E(lemma)}"${tip}>${E(lemma)}${known ? '' : '<em> 未收录</em>'}</button>`;
  }
  function exampleBlock(ex) {
    if (!ex || !ex.english) return '';
    const srcTag = ex.sourceType === 'external' ? '例句 · 在线来源' : '例句 · 教学自编';
    return `<div class="ex-block">
      <div class="ex-meta">${E(ex.label || srcTag)}</div>
      <div class="ex-en">${E(ex.english)}</div>
      ${ex.chinese ? `<div class="ex-zh">${E(ex.chinese)}</div>` : '<div class="ex-zh" style="color:var(--muted)">（在线数据未提供中文翻译）</div>'}
      ${ex.structure ? `<div class="ex-analysis"><b>句子结构：</b>${E(ex.structure)}</div>` : ''}
      ${ex.analysis ? `<div class="ex-analysis">${ex.analysis}</div>` : ''}
    </div>`;
  }

  /* ---------- 00 头部 ---------- */
  function renderHead(w) {
    const saved = RA.learn.isSaved(w.id);
    const isVerb = (w.pos || []).indexOf('verb') >= 0;
    const irregular = (w.forms || []).some((f) => f.irregular);
    const posLine = [
      (w.pos || []).join(' / '),
      ...(w.pos || []).map((p) => ({ verb: '动词', noun: '名词', adjective: '形容词', adverb: '副词', preposition: '介词', conjunction: '连词' }[p] || '')).filter(Boolean),
      isVerb ? (irregular ? '不规则变化' : '规则变化') : '',
    ].filter(Boolean).join(' <span class="sep">·</span> ');

    const pron = (w.pronunciations || []).map((p) => {
      const av = RA.audio.available(p);
      const btn = av.ok
        ? `<button class="play-btn" data-pron="${E(w.id)}|${E(p.region)}" aria-label="播放${E(p.region)}发音">${icon('volume')} 播放</button>`
        : `<span class="play-btn" disabled aria-disabled="true">${icon('volume')} 不可用</span>`;
      return `<div class="pron-item"><span class="pron-region">${E(p.region)}</span><span class="pron-ipa">${E(p.ipa || '暂无音标')}</span>${btn}</div>`;
    }).join('');
    const audioAvailable = (w.pronunciations || []).some((p) => RA.audio.available(p).ok);
    const audioNote = audioAvailable
      ? '发音来源：' + (w.pronunciations || []).map((p) => RA.audio.available(p).source).filter((v, i, a) => a.indexOf(v) === i).join('；') + '。'
      : '当前没有可用的发音资源：词条未附带音频文件，且浏览器不支持语音合成。';

    return `<header class="lex-head">
      <h1 class="lex-headword">${E(w.lemma)}</h1>
      <div class="lex-posline">${posLine}</div>
      <div class="lex-pron">${pron || '<span class="pron-ipa">暂无音标数据</span>'}
        <div class="audio-note">${E(audioNote)}</div>
      </div>
      <details class="lex-meta"><summary>词形与等级信息</summary><div class="lex-meta-items">
        ${w.syllables ? `<span>音节划分：<b>${E(w.syllables)}</b></span>` : ''}
        ${w.stress ? `<span>重音：<b>${E(w.stress)}</b></span>` : ''}
        <span>词性：<b>${E((w.pos || []).join(' / ') || '未标注')}</b></span>
        <span>CEFR：<b>${E(w.level || '暂无可靠数据')}</b></span>
        ${w.levelSource ? `<span>等级来源：${E(w.levelSource)}</span>` : ''}
        ${w.levelLabel ? `<span>难度标签：${E(w.levelLabel)}</span>` : ''}
      </div></details>
      <div class="lex-core">
        <div class="lex-core-zh">${E((w.coreMeaning && w.coreMeaning.zh) || '暂无中文核心义')}</div>
        ${w.coreMeaning && w.coreMeaning.en ? `<div class="lex-core-en">${E(w.coreMeaning.en)}</div>` : ''}
        ${w.coreMeaning && w.coreMeaning.note ? `<div class="lex-core-note">${w.coreMeaning.note}</div>` : ''}
      </div>
      <div class="lex-actions">
        <button class="btn ${saved ? 'secondary is-saved' : 'primary'}" data-action="toggle-save" data-word="${E(w.id)}" aria-pressed="${saved}">${icon('bookmark')}${saved ? '已收藏 · 取消' : '收藏该词'}</button>
        <button class="btn secondary" data-action="add-review" data-word="${E(w.id)}">${icon('clock')} 加入复习</button>
        <button class="btn secondary" data-action="copy" data-word="${E(w.lemma)}">${icon('copy')} 复制单词</button>
      </div>
    </header>`;
  }

  /* ---------- 01 释义 ---------- */
  function renderSenses(w) {
    if (!w.senses || !w.senses.length) return MISSING;
    const body = w.senses.map((s, i) => {
      const posLabel = M.posLabel(s);
      const defEn = s.definitionEn
        ? `<p class="sense-def-en">${E(s.definitionEn)}</p>` +
          (s.definitionZhTranslation
            ? `<p class="sense-def-zh"><span class="k">中文翻译</span>${E(s.definitionZhTranslation)}</p>`
            : `<p class="sense-def-zh"><span class="k">中文翻译</span><span style="color:var(--muted)">暂无该英文释义的中文翻译</span></p>`)
        : `<p class="sense-def-en">暂无英文释义数据</p>`;
      return `<div class="sense-block${s.isCore ? ' is-core' : ''}" id="sense-${E(s.id)}">
        <div class="sense-top">
          <span class="sense-no">${i + 1}</span>
          ${posLabel ? `<span class="sense-pos">${E(posLabel)}</span>` : ''}
          ${s.isCore ? '<span class="tag red">核心义项</span>' : ''}
          ${s.domain ? `<span class="sense-domain">${E(s.domain)}</span>` : ''}
        </div>
        <h3 class="sense-title-zh">${E(s.titleZh || s.definitionZhTranslation || '未命名义项')}</h3>
        ${defEn}
        <p class="sense-expl"><span class="k">中文解释</span>${E(s.explanationZh || '暂无中文详细解释')}</p>
        ${(s.examples || []).map(exampleBlock).join('') || '<div class="ex-block"><div class="ex-meta">例句</div><div class="ex-zh">暂无例句数据</div></div>'}
        ${(s.grammar && s.grammar.length) ? `<div class="lex-label neutral">语法结构</div><div class="gram-list">${s.grammar.map((g) => `<code>${E(g)}</code>`).join('')}</div>` : ''}
        ${(s.usageScenes && s.usageScenes.length) ? `<div class="lex-label neutral">使用场景</div><p class="lex-p">${s.usageScenes.map((x) => E(x)).join(' · ')}</p>` : ''}
        ${s.cautions ? `<div class="cautious"><b>使用注意：</b>${E(s.cautions)}</div>` : ''}
      </div>`;
    }).join('');
    return body;
  }

  /* ---------- 02 词形 ---------- */
  function renderForms(w) {
    if (!w.forms || !w.forms.length) return MISSING;
    const cells = w.forms.map((f) => `<div class="form-cell"><span>${E(f.label || f.formType)}</span>
      <b class="${f.irregular ? 'irregular' : ''}">${E(f.form)}</b>${f.irregular ? '<span style="color:var(--accent);font-size:11px">不规则</span>' : ''}</div>`).join('');
    return `<div class="form-grid">${cells}</div>${w.formNote ? `<p class="lex-p" style="margin-top:14px">${E(w.formNote)}</p>` : ''}`;
  }

  /* ---------- 03 家族 ---------- */
  function renderFamily(w) {
    if (!w.family || !w.family.length) return MISSING;
    const rows = w.family.map((f) => `<div class="family-row">
      <span class="fw">${f.word === w.lemma ? `<span class="self">${E(f.word)}</span>` : wordLink(f.word)}</span>
      <span class="tag outline">${E(f.pos || '未标注词性')}</span>
      <span>${E(f.zh || '（本词库未收录该派生词）')}</span>
      <span class="fex">${f.exampleEn ? E(f.exampleEn) + '<span class="fexz"><br>' + E(f.exampleZh || '') + '</span>' : '<span class="fexz">暂无例句</span>'}</span>
    </div>`).join('');
    return `<div class="family-list">${rows}</div>${w.familyNote ? `<div class="lex-divider"></div><p class="lex-p">${w.familyNote}</p>` : ''}
      <p class="lex-muted">词汇家族中的已收录单词可点击跳转；标注「未收录」的词暂无本地词条。</p>`;
  }

  /* ---------- 04 词源 ---------- */
  function renderEtymology(w) {
    const e = w.etymology;
    if (!e || (!e.origin && !e.history)) return MISSING;
    const flow = (e.history || []).map((h, i) => `${i ? '<span class="etym-arrow">↓</span>' : ''}
      <div class="etym-box"><strong>${E(h.label)}</strong><span>${E(h.text)}</span></div>`).join('');
    const parts = [e.prefix, e.root, e.suffix].filter(Boolean).map((p) =>
      `<div class="etym-part"><span>${E(p === e.prefix ? '前缀' : p === e.root ? '词根' : '后缀')}</span><b>${E(p.text)}</b><em>${E(p.gloss || '')}</em></div>`).join('');
    return `${flow ? `<div class="etym-flow">${flow}</div>` : ''}
      ${parts ? `<div class="lex-label neutral">构词成分（历史词源分析）</div><div class="etym-split">${parts}</div>` : ''}
      ${e.origin ? `<p class="lex-p"><b>可靠词源：</b>${E(e.origin)}</p>` : ''}
      ${e.formationLogic ? `<p class="lex-p"><b>构词逻辑：</b>${E(e.formationLogic)}</p>` : ''}
      ${e.mnemonic ? `<div class="lex-divider"></div><div class="lex-label">助记说明（学习型解释，非历史词源）</div><p class="lex-p">${E(e.mnemonic)}</p>` : ''}
      ${e.note ? `<p class="lex-muted">${E(e.note)}</p>` : ''}`;
  }

  /* ---------- 05 形近 / 音近 / 易混 ---------- */
  function renderRelations(w) {
    const groups = RA.relations.groupByType(w);
    const manual = w.relations || [];
    if (!manual.length) {
      const auto = RA.relations.suggestConfusables(RA.dictionary.words(), w.id, 6);
      if (!auto.length) return MISSING;
      return `<p class="lex-p">本词条暂无人工标注的形近 / 音近关系，以下由推荐引擎给出（综合拼写相似度、发音相似度与学习价值）：</p>
        ${rowsToTable(['候选词', '综合评分', '拼写', '发音'], auto.map((x) => [wordLink(x.word.lemma), String(x.score), x.parts.spelling.toFixed(2), x.parts.phonetic.toFixed(2)]))}
        <p class="lex-muted">推荐结果不等同于人工审校的辨析结论。</p>`;
    }

    const blocks = [];
    Object.keys(M.RELATION_TYPES).forEach((type) => {
      const list = groups[type];
      if (!list || !list.length) return;
      const cards = list.map((r) => `<div class="rel-card${r.target === w.id ? ' target' : ''}">
        <span class="tag ${type === 'confusable' ? 'red' : type === 'homophone' ? 'amber' : 'blue'}">${E(M.RELATION_TYPES[type])}</span>
        <h4>${RA.dictionary.has(r.targetLemma) ? wordLink(r.targetLemma) : E(r.targetLemma)}</h4>
        <div class="ipa">${E(r.ipa || '暂无音标')} ${r.pos ? '· ' + E(r.pos) : ''}</div>
        <div class="zh">${E(r.zh || '')}</div>
        ${r.exampleEn ? `<div class="ex">${E(r.exampleEn)}</div><div class="exz">${E(r.exampleZh || '')}</div>` : ''}
      </div>`).join('');
      blocks.push(`<div class="rel-group"><div class="rel-group-h"><h3 class="lex-h3" style="margin:0">${E(M.RELATION_TYPES[type])}</h3>
        <span class="tag outline">${list.length} 个</span></div><div class="rel-cards">${cards}</div></div>`);
    });

    // 逐字母高亮对比
    const diffTargets = manual.filter((r) => r.relationTypes.some((t) => t === 'visual' || t === 'phonetic' || t === 'homophone' || t === 'confusable') && r.targetLemma);
    const diffs = diffTargets.slice(0, 4).map((r) => {
      const d = RA.relations.letterDiff(w.lemma, r.targetLemma);
      const letters = (arr, side) => arr.map((x) => {
        if (x.type === 'same') return `<span class="letter">${E(x.ch)}</span>`;
        if (x.type === 'gap') return `<span class="letter gap">·</span>`;
        return `<span class="letter ${side === 'a' ? 'diff-a' : 'diff-b'}">${E(x.ch || '·')}</span>`;
      }).join('');
      return `<div class="diff-box">
        <div class="diff-row"><span class="who">${E(w.lemma)}</span><div class="letters">${letters(d.left, 'a')}</div></div>
        <div class="diff-row"><span class="who">${E(r.targetLemma)}</span><div class="letters">${letters(d.right, 'b')}</div></div>
        <div class="diff-note">${E(r.spellingDiff || '')}｜${E(r.phoneticDiff || '')}</div>
      </div>`;
    }).join('');

    const table = rowsToTable(['对比维度', w.lemma, '对比词'], diffTargets.slice(0, 4).map((r) => [
      E(r.targetLemma),
      '核心义：' + E((w.coreMeaning && w.coreMeaning.zh) || ''),
      '核心义：' + E(r.zh || '') + (r.semanticDiff ? '<br>语义：' + E(r.semanticDiff) : '') + (r.collocationDiff ? '<br>搭配：' + E(r.collocationDiff) : ''),
    ]));

    return `${blocks.join('')}
      <div class="lex-divider"></div>
      <h3 class="lex-h3">逐字母对比</h3>
      <p class="lex-p">高亮字母为两词拼写差异位置（基于最长公共子序列对齐，不等长也能正确对齐）。</p>
      ${diffs}
      <div class="lex-divider"></div>
      <h3 class="lex-h3">语义与搭配差异</h3>
      ${table}
      ${w.relationNote ? `<p class="lex-muted">${E(w.relationNote)}</p>` : ''}
      ${w.contrast ? `<div class="lex-divider"></div><div class="lex-label neutral">辨析要点</div><p class="lex-p">${E(w.contrast)}</p>` : ''}`;
  }

  /* ---------- 06 近义辨析 ---------- */
  function renderSynonyms(w) {
    const withSyn = (w.senses || []).filter((s) => (s.synonyms && s.synonyms.length) || (s.antonyms && s.antonyms.length));
    if (!withSyn.length) return MISSING;
    const body = withSyn.map((s, i) => {
      const idx = (w.senses || []).indexOf(s) + 1;
      const synList = (s.synonyms || []).map((x) => `<div class="syn-entry">
        <div class="syn-head"><span class="syn-word">${RA.dictionary.has(x.word) ? wordLink(x.word) : E(x.word)}</span>
          <span class="tag outline">${E(x.zh || '未标注中文义')}</span>
          <span class="tag ${x.interchangeable === 'yes' ? 'green' : x.interchangeable === 'no' ? 'red' : 'amber'}">${x.interchangeable === 'yes' ? '多数语境可替换' : x.interchangeable === 'no' ? '通常不可替换' : '部分语境可替换'}</span></div>
        <div class="syn-focus">${E(x.focus || '语义侧重点：暂无数据')}</div>
        ${x.collocation ? `<div class="syn-focus">典型搭配：<code>${E(x.collocation)}</code></div>` : ''}
        ${x.exampleEn ? `<div class="syn-ex">${E(x.exampleEn)}</div><div class="syn-exz">${E(x.exampleZh || '')}</div>` : ''}
        ${x.reason ? `<div class="syn-exz">不可直接替换的原因：${E(x.reason)}</div>` : ''}
      </div>`).join('');
      const antList = (s.antonyms || []).map((x) => `<div class="syn-entry"><div class="syn-head">
        <span class="syn-word">${RA.dictionary.has(x.word) ? wordLink(x.word) : E(x.word)}</span><span class="tag outline">${E(x.zh || '')}</span>
        <span class="tag amber">语境对照，非严格反义</span></div>
        <div class="syn-focus">${E(x.focus || '')}</div>
        ${x.exampleEn ? `<div class="syn-ex">${E(x.exampleEn)}</div><div class="syn-exz">${E(x.exampleZh || '')}</div>` : ''}
        ${x.note ? `<div class="syn-exz">${E(x.note)}</div>` : ''}</div>`).join('');
      return `<h3 class="lex-h3">义项 ${idx}：${E(s.titleZh || '')}${s.antonyms && s.antonyms.length ? '' : ''}</h3>
        ${synList || '<p class="lex-p">该义项暂无近义词数据。</p>'}
        ${antList ? `<div class="lex-label neutral">反义 / 语义对照</div>${antList}` : ''}`;
    }).join('');
    return `<p class="lex-p">近义词尽量关联到具体义项，而不是整个单词；是否可替换取决于语境。</p>${body}`;
  }

  /* ---------- 07 搭配 ---------- */
  function renderCollocations(w) {
    const items = [];
    (w.senses || []).forEach((s, i) => {
      (s.collocations || []).forEach((c) => items.push({ c, senseIndex: i + 1, senseTitle: s.titleZh }));
    });
    if (!items.length) return MISSING;
    const body = items.map((it) => `<div class="coll-item">
      <div class="coll-phrase">${E(it.c.phrase)}</div>
      <div class="coll-zh">${E(it.c.meaningZh || '中文含义暂无数据')} <span class="tag outline">义项 ${it.senseIndex}</span></div>
      ${it.c.exampleEn ? `<div class="coll-ex">${E(it.c.exampleEn)}<br><span style="font-style:normal">${E(it.c.exampleZh || '')}</span></div>` : ''}
      ${it.c.grammarNote ? `<div class="coll-zh">${E(it.c.grammarNote)}</div>` : ''}
    </div>`).join('');
    return `<div class="coll-list">${body}</div>`;
  }

  /* ---------- 08 错误 ---------- */
  function renderMistakes(w) {
    if (!w.mistakes || !w.mistakes.length) {
      return w.pitfall
        ? `<div class="notice info">本词条暂无结构化错误条目。使用提醒：${E(w.pitfall)}</div>`
        : MISSING;
    }
    return w.mistakes.map((m, i) => `<div class="err-item">
      <span class="tag red">${E(M.ERROR_TYPES[m.errorType] || '未分类错误')}</span>
      <div class="err-line wrong"><span class="mk">✕</span><span>${E(m.wrong)}</span></div>
      <div class="err-line right"><span class="mk">✓</span><span>${E(m.right)}</span></div>
      <div class="err-why">${E(m.reason)}</div>
      ${m.rule ? `<div class="err-rule">语法规则：${E(m.rule)}</div>` : ''}
      ${m.special ? `<div class="err-rule">特殊情况：${E(m.special)}</div>` : ''}
    </div>`).join('') + (w.mistakeNote ? `<p class="lex-muted">${E(w.mistakeNote)}</p>` : '') +
      (w.pitfall ? `<div class="notice info">使用提醒：${E(w.pitfall)}</div>` : '');
  }

  /* ---------- 09 语境 ---------- */
  function renderContexts(w) {
    if (!w.contexts || !w.contexts.length) return MISSING;
    return w.contexts.map((c) => `<div style="margin-bottom:22px">
      <span class="ctx-tag">${E(c.domain)}</span>
      ${exampleBlock({ english: c.en, chinese: c.zh, label: '语境例句 · ' + (c.sourceType === 'corpus' ? '真实语料' : '教学自编'), sourceType: c.sourceType })}
      ${c.structure ? `<div class="lex-label neutral">句子结构</div><p class="lex-p">${E(c.structure)}</p>` : ''}
      ${c.grammar ? `<div class="lex-label neutral">重点语法</div><p class="lex-p">${E(c.grammar)}</p>` : ''}
      ${c.rationale ? `<div class="lex-label neutral">为什么这里用这个词</div><p class="lex-p">${E(c.rationale)}</p>` : ''}
    </div>`).join('') + (w.contextNote ? `<p class="lex-muted">${E(w.contextNote)}</p>` : '');
  }

  /* ---------- 10 使用范围 ---------- */
  function renderUsage(w) {
    const u = w.usage || {};
    if (!u || !Object.keys(u).length) return MISSING;
    const rows = [
      ['CEFR 等级', E(u.cefr || '暂无可靠数据') + (w.levelLabel ? '<br>' + E(w.levelLabel) : '')],
      ['词频', E(u.frequency || '暂无可靠数据')],
      ['常见语域', E(u.register || '暂无可靠数据')],
      ['使用领域', (u.domains && u.domains.length) ? E(u.domains.join(' · ')) : '暂无可靠数据'],
      ['英美差异', E(u.britishAmerican || '暂无可靠数据')],
      ['情感色彩', E(u.tone || '暂无可靠数据')],
      ['考试标签', E(u.examTags || '暂无可靠数据')],
      ['常见混淆', u.commonConfusion && u.commonConfusion.length ? u.commonConfusion.map((x) => wordLink(x)).join(' ') : '暂无可靠数据'],
    ];
    return rowsToTable(['属性', '信息'], rows) +
      '<p class="lex-muted">缺少可靠数据的字段明确标注为「暂无可靠数据」，不做推测性填充。</p>';
  }

  /* ---------- 11 记忆系统 ---------- */
  function renderMemory(w) {
    const senses = w.senses || [];
    if (!senses.length) return MISSING;
    const summary = RA.learn.senseSummary(w.id, senses);
    const rows = senses.map((s, i) => {
      const status = RA.learn.getSenseStatus(w.id, s.id);
      const st = RA.learn.senseStates(w.id)[s.id] || {};
      const btn = (k, label) => `<button class="ms-state ${status === k ? 'on' : ''}" data-status="${k}" data-sense="${E(s.id)}" data-word="${E(w.id)}" data-action="set-status">${label}</button>`;
      return `<div class="ms-row">
        <span class="sense-no">${i + 1}</span>
        <div class="ms-text"><b>${E(s.titleZh || s.definitionZhTranslation || '义项 ' + (i + 1))}</b>
          <small>${E((s.collocations && s.collocations[0] && s.collocations[0].phrase) || (s.examples && s.examples[0] && s.examples[0].english) || '')}</small></div>
        <div class="ms-states">${btn('unlearned', '未学习')}${btn('learning', '学习中')}${btn('mastered', '已掌握')}</div>
      </div>
      ${st.nextReviewAt && status !== 'unlearned' ? `<div class="ms-text" style="padding-left:40px"><small>下次复习建议：${E(String(st.nextReviewAt).slice(0, 10))}（本地估算，非科学间隔重复算法）</small></div>` : ''}`;
    }).join('');
    const bar = `<div class="ms-bar" role="img" aria-label="掌握进度">
      <i class="m" style="width:${summary.total ? (summary.mastered / summary.total) * 100 : 0}%"></i>
      <i class="l" style="width:${summary.total ? (summary.learning / summary.total) * 100 : 0}%"></i></div>
      <p class="lex-muted">已掌握 ${summary.mastered} · 学习中 ${summary.learning} · 未学习 ${summary.unlearned}（共 ${summary.total} 个义项，彼此独立）</p>`;
    return `<p class="lex-p">掌握状态按义项分别记录，刷新页面后仍然保留（保存在本浏览器）。</p>
      ${rows}${bar}
      <div class="lex-divider"></div>
      <div class="lex-label">我的笔记</div>
      <textarea class="note-area" id="noteArea" maxlength="5000" placeholder="例如：adapt 是调整，adopt 是采用……">${E(RA.learn.getNote(w.id))}</textarea>
      <div class="ms-actions">
        <button class="btn primary" data-action="save-note" data-word="${E(w.id)}">保存笔记</button>
        <button class="btn secondary" data-action="toggle-save" data-word="${E(w.id)}">${RA.learn.isSaved(w.id) ? '♥ 已收藏 · 点击取消' : '♡ 加入生词本'}</button>
      </div>`;
  }

  /* ---------- 12 检测 ---------- */
  function quizFor(w) {
    if (w.quiz && w.quiz.length) return w.quiz.map((q) => Object.assign({ wordId: w.id }, q));
    const relTargets = (w.relations || []).map((r) => r.targetLemma);
    const hit = (RA.globalQuiz || []).filter((q) =>
      (q.options || []).some((o) => o === w.lemma || relTargets.indexOf(o) >= 0) || q.answer === w.lemma);
    return hit.slice(0, 5).map((q) => Object.assign({ wordId: w.id, senseId: '' }, q));
  }

  function renderQuiz(w) {
    const qs = quizFor(w);
    if (!qs.length) return MISSING;
    const st = RA.appState.quiz[w.id] || { answers: {}, submitted: false };
    const answered = Object.keys(st.answers).length;
    const correctCount = qs.filter((q, i) => st.answers[i] === q.answer).length;
    const body = qs.map((q, i) => {
      const chosen = st.answers[i];
      return `<div class="quiz-item">
        <div class="quiz-q">${i + 1}. ${E(q.prompt)}</div>
        <div class="quiz-opts">${q.options.map((o) => {
          let cls = 'quiz-opt';
          if (st.submitted) {
            if (o === q.answer) cls += ' ok';
            else if (o === chosen) cls += ' bad';
          } else if (o === chosen) cls += ' sel';
          return `<label class="${cls}"><input type="radio" name="q_${E(w.id)}_${i}" value="${E(o)}" data-quiz-word="${E(w.id)}" data-quiz-index="${i}" ${st.submitted ? 'disabled' : ''} ${chosen === o ? 'checked' : ''}><span>${E(o)}</span></label>`;
        }).join('')}</div>
        ${st.submitted ? `<div class="quiz-fb ${chosen === q.answer ? '' : 'wrong'}">
          <b>${chosen === q.answer ? '✓ 回答正确' : '✕ 正确答案：' + E(q.answer)}</b>
          <div>${E(q.explain || '')}</div></div>` : ''}
      </div>`;
    }).join('');
    const footer = st.submitted
      ? `<div class="quiz-score"><div class="mini-label">本次测试成绩</div><strong>${correctCount} / ${qs.length}</strong>
         <p>${correctCount === qs.length ? '全部正确。可以尝试在新语境中造句。' : '建议重点复习答错题目对应的词义或语法结构。'}</p>
         <button class="btn secondary" data-action="quiz-restart" data-word="${E(w.id)}">重新测试</button></div>`
      : `<button class="btn primary" data-action="quiz-submit" data-word="${E(w.id)}" style="width:100%;margin-top:14px" ${answered === qs.length ? '' : 'disabled'}>提交答案（已选 ${answered} / ${qs.length}）</button>`;
    return `<p class="lex-p">题型覆盖词义选择、易混词辨析、介词搭配与语法填空；错误会记入本浏览器，可在「复习」中查看。</p>${body}${footer}`;
  }

  /* ---------- 13 来源 ---------- */
  function renderSources(w) {
    if (!w.sources || !w.sources.length) return MISSING;
    return w.sources.map((s) => `<div class="src-item">
      <a href="${E(s.url)}" target="_blank" rel="noopener noreferrer">${E(s.name)} ↗</a>
      <div class="src-meta">数据类型：${E(s.dataType || '未标注')} ｜ 查询 / 更新：${E(s.updatedAt || '未标注')} ｜ 授权：${E(s.license || '以来源页面为准')}</div>
    </div>`).join('') + (w.sourceNote ? `<p class="lex-muted">${E(w.sourceNote)}</p>` : '');
  }

  /* ---------- 主入口 ---------- */
  const RENDERERS = {
    senses: renderSenses, forms: renderForms, family: renderFamily, etymology: renderEtymology,
    relations: renderRelations, synonyms: renderSynonyms, collocations: renderCollocations,
    mistakes: renderMistakes, contexts: renderContexts, usage: renderUsage,
    memory: renderMemory, quiz: renderQuiz, sources: renderSources,
  };

  /* ---------- 占位词条（已导入词形，释义待手敲补全） ---------- */
  function renderPending(w) {
    const variants = (w.forms || []).map((f) => f.form);
    return `<div class="lex">
      <div class="online-flag"><b>已收录词形，释义待补。</b>该词来自《全国大学英语四、六级考试大纲（2016年修订版）》词表，
        目前只有词形与考级标签；释义、例句、辨析、词源与测试必须逐个手敲补全，ReadAge 不会用机器生成的解释填充。</div>
      <header class="lex-head">
        <h1 class="lex-headword">${E(w.lemma)}</h1>
        <div class="lex-posline">${w.phrase ? 'phrase' : '词形已收录 · 释义待补'}</div>
        <div class="lex-meta">
          <span>考级标签：<b>${E((w.examTags || []).join(' / ') || '未标注')}</b></span>
          ${variants.length ? `<span>大纲拼写变体：<b>${variants.map((v) => E(v)).join(' · ')}</b></span>` : ''}
          <span>CEFR：<b>暂无可靠数据</b></span>
        </div>
        <div class="lex-actions">
          <button class="btn secondary" data-action="toggle-save" data-word="${E(w.id)}">${RA.learn.isSaved(w.id) ? '♥ 已收藏 · 点击取消' : '♡ 收藏该词'}</button>
          <button class="btn primary" data-action="retry-online" data-word="${E(w.lemma)}">在线查询该词 ↗</button>
          <button class="btn secondary" data-view="library">去词库浏览已补全的词条</button>
        </div>
      </header>
      <section class="lex-sec">
        <div class="lex-sec-h"><span class="lex-sec-no">说明</span><h2 class="lex-sec-title">为什么这里没有释义</h2></div>
        <div class="missing">词条内容（英英释义、中文翻译、中文详解、例句、搭配、辨析、词源、测试）由人工逐个编写，
          不通过接口抓取或批量生成。该词尚未编写，因此这里只呈现可靠的考级信息，不做推测性填充。</div>
      </section>
    </div>`;
  }

  function renderEntry(w) {
    if (w.tier === 'pending') return renderPending(w);
    const online = w.tier === 'online';
    const toc = `<nav class="lex-toc" aria-label="词条目录"><div class="lex-quick-links">
      <a href="#lex-senses">释义</a><a href="#lex-collocations">搭配</a><a href="#lex-relations">辨析</a><a href="#lex-memory">学习</a>
      <details class="lex-toc-more"><summary>全部目录 <span aria-hidden="true">+</span></summary>
        <div class="lex-toc-items">${SECTIONS.map((s) => `<a href="#lex-${s.id}"><span>${s.no}</span>${E(s.title)}</a>`).join('')}</div>
      </details></div></nav>`;
    const intro = online
      ? `<div class="online-flag"><b>在线兜底结果，不是完整词条。</b>以下内容来自第三方公开接口，缺失模块已明确标注：${E((w.missingModules || []).join('、'))}。中文释义、词源、形近辨析、搭配与记忆模块均无数据，不做推测填充。</div>`
      : `<div class="lex-intro"><button data-view="library">词库</button><span aria-hidden="true">/</span><span>词条详情</span><span class="tag ${w.tier === 'full' ? 'green' : 'outline'}">${w.tier === 'full' ? '完整词条' : '精编词条'}</span></div>`;
    const body = SECTIONS.map((s) => sec(s.no, s.id, s.title, RENDERERS[s.id](w))).join('');
    const appendix = w.appendix
      ? `<section class="lex-sec" id="lex-appendix"><div class="lex-sec-h"><span class="lex-sec-no">附</span><h2 class="lex-sec-title">${E(w.appendix.title)}</h2></div>
         ${(w.appendix.paragraphs || []).map((p) => `<p class="lex-p">${E(p)}</p>`).join('')}</section>`
      : '';
    return `<div class="lex">${intro}${renderHead(w)}${toc}${body}${appendix}</div>`;
  }

  RA.entryRenderer = { renderEntry, SECTIONS, quizFor, wordLink, exampleBlock, MISSING };
})(typeof window !== 'undefined' ? window : globalThis);
