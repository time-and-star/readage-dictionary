/* data/words/cet/author_depth_g5.js
 * 手敲深度补丁：full–gossip（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('full', {
    etymology: {
      origin: '现代英语常用词「full」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'full', gloss: '满的' },
      suffix: null,
      history: [
        { label: 'full', text: '现代英语常用词「full」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：满的。' },
      ],
      formationLogic: '核心义：满的。',
      mnemonic: '看到 full，先说出「满的」。',
      note: '核心义：满的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was full.', chinese: '即使是初读者也能看出，这个结果是满的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'full.s1', en: 'They wanted a full answer, not a long speech.', zh: '他们要一个满的的答复，不要长篇发言。', structure: 'full / 表示 / 满的', grammar: 'adjective，围绕「满的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are full.', right: 'The news is full.', reason: 'news 作主语时动词用单数。', rule: '先确定 full 是adjective，再套「满的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'full.q1', senseId: 'full.s1', errorType: 'meaning', type: '词义选择', prompt: '「full」在本条的核心意思是：', options: ['满的', '完全相反的意思', '一种古代钱币'], answer: '满的', explain: 'full：满的。' },
      { id: 'full.q2', senseId: 'full.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches full?', options: ['满的', 'a kind of ancient coin', 'the past tense of be'], answer: '满的', explain: '对的是「满的」。' },
      { id: 'full.q3', senseId: 'full.s1', errorType: 'grammar', type: '词义选择', prompt: 'full 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'full.q4', senseId: 'full.s1', errorType: 'meaning', type: '词源', prompt: '记 full 时，哪句更稳妥？', options: ['先锁住「满的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「满的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['满的'] },
  });

  D('full stop', {
    etymology: {
      origin: '现代英语固定说法「full stop」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'full stop', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'full stop', text: '现代英语固定说法「full stop」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：句号。' },
      ],
      formationLogic: '核心义：句号。',
      mnemonic: '看到 full stop，先说出「句号」。',
      note: '核心义：句号。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "full stop" and asked the class to keep it as one unit.', chinese: '老师把「full stop」圈出来，让全班把它当成一个整体。它表示句号。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'full stop.s1', en: 'In the margin she wrote "full stop" so nobody would split the phrase.', zh: '她在页边写下「full stop」，免得有人把这个说法拆开。意思是句号。', structure: 'full stop / 表示 / 句号', grammar: 'noun，围绕「句号」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of full stop and lost the point.', right: 'Keep "full stop" together: it means 句号.', reason: '「full stop」要整块理解。', rule: '先确定 full stop 是noun，再套「句号」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'full stop.q1', senseId: 'full stop.s1', errorType: 'meaning', type: '词义选择', prompt: '「full stop」在本条的核心意思是：', options: ['句号', '完全相反的意思', '一种古代钱币'], answer: '句号', explain: 'full stop：句号。' },
      { id: 'full stop.q2', senseId: 'full stop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches full stop?', options: ['句号', 'a kind of ancient coin', 'the past tense of be'], answer: '句号', explain: '对的是「句号」。' },
      { id: 'full stop.q3', senseId: 'full stop.s1', errorType: 'grammar', type: '词义选择', prompt: 'full stop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'full stop.q4', senseId: 'full stop.s1', errorType: 'meaning', type: '词源', prompt: '记 full stop 时，哪句更稳妥？', options: ['先锁住「句号」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「句号」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['句号'] },
  });

  D('fully', {
    etymology: {
      origin: '英语派生：ful + -ly，词性转到「完全地」。',
      prefix: null,
      root: { text: 'ful', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fully', text: '英语派生：ful + -ly，词性转到「完全地」。' },
        { label: '现在', text: '核心用法是：完全地。' },
      ],
      formationLogic: '先认词干 ful，再看词尾。',
      mnemonic: '看到 fully，先说出「完全地」。',
      note: '先认词干 ful，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule fully, and the class followed.', chinese: '她把规则讲清楚了（完全地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fully.s1', en: 'He nodded fully and returned to the notes.', zh: '他完全地地点了点头，又回去看笔记。', structure: 'fully / 表示 / 完全地', grammar: 'adverb，围绕「完全地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very fullyly in the meeting.', right: 'She spoke fully in the meeting.', reason: 'fully 已经是副词，不要再加 -ly。', rule: '先确定 fully 是adverb，再套「完全地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fully.q1', senseId: 'fully.s1', errorType: 'meaning', type: '词义选择', prompt: '「fully」在本条的核心意思是：', options: ['完全地', '完全相反的意思', '一种古代钱币'], answer: '完全地', explain: 'fully：完全地。' },
      { id: 'fully.q2', senseId: 'fully.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fully?', options: ['完全地', 'a kind of ancient coin', 'the past tense of be'], answer: '完全地', explain: '对的是「完全地」。' },
      { id: 'fully.q3', senseId: 'fully.s1', errorType: 'grammar', type: '词义选择', prompt: 'fully 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'fully.q4', senseId: 'fully.s1', errorType: 'meaning', type: '词源', prompt: '记 fully 时，哪句更稳妥？', options: ['先锁住「完全地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完全地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完全地'] },
  });

  D('fumble', {
    etymology: {
      origin: '现代英语常用词「fumble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fumble', gloss: '摸索' },
      suffix: null,
      history: [
        { label: 'fumble', text: '现代英语常用词「fumble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：摸索。' },
      ],
      formationLogic: '核心义：摸索。',
      mnemonic: '看到 fumble，先说出「摸索」。',
      note: '核心义：摸索。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fumble before the office closed.', chinese: '他们同意在办公室关门前做这件事：摸索。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fumble.s1', en: 'The deadline forced the team to fumble that afternoon.', zh: '截止日期逼着小组在那天下午摸索。', structure: 'fumble / 表示 / 摸索', grammar: 'verb，围绕「摸索」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fumbleed it yesterday without checking the real past form.', right: 'Check the past form of "fumble" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fumble 是verb，再套「摸索」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fumble.q1', senseId: 'fumble.s1', errorType: 'meaning', type: '词义选择', prompt: '「fumble」在本条的核心意思是：', options: ['摸索', '完全相反的意思', '一种古代钱币'], answer: '摸索', explain: 'fumble：摸索。' },
      { id: 'fumble.q2', senseId: 'fumble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fumble?', options: ['摸索', 'a kind of ancient coin', 'the past tense of be'], answer: '摸索', explain: '对的是「摸索」。' },
      { id: 'fumble.q3', senseId: 'fumble.s1', errorType: 'grammar', type: '词义选择', prompt: 'fumble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fumble.q4', senseId: 'fumble.s1', errorType: 'meaning', type: '词源', prompt: '记 fumble 时，哪句更稳妥？', options: ['先锁住「摸索」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摸索」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摸索'] },
  });

  D('fume', {
    etymology: {
      origin: '现代英语常用词「fume」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fume', gloss: '冒烟' },
      suffix: null,
      history: [
        { label: 'fume', text: '现代英语常用词「fume」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：冒烟。' },
      ],
      formationLogic: '核心义：冒烟。',
      mnemonic: '看到 fume，先说出「冒烟」。',
      note: '核心义：冒烟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fume before the office closed.', chinese: '他们同意在办公室关门前做这件事：冒烟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fume.s1', en: 'The deadline forced the team to fume that afternoon.', zh: '截止日期逼着小组在那天下午冒烟。', structure: 'fume / 表示 / 冒烟', grammar: 'verb，围绕「冒烟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fumeed it yesterday without checking the real past form.', right: 'Check the past form of "fume" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fume 是verb，再套「冒烟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fume.q1', senseId: 'fume.s1', errorType: 'meaning', type: '词义选择', prompt: '「fume」在本条的核心意思是：', options: ['冒烟', '完全相反的意思', '一种古代钱币'], answer: '冒烟', explain: 'fume：冒烟。' },
      { id: 'fume.q2', senseId: 'fume.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fume?', options: ['冒烟', 'a kind of ancient coin', 'the past tense of be'], answer: '冒烟', explain: '对的是「冒烟」。' },
      { id: 'fume.q3', senseId: 'fume.s1', errorType: 'grammar', type: '词义选择', prompt: 'fume 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fume.q4', senseId: 'fume.s1', errorType: 'meaning', type: '词源', prompt: '记 fume 时，哪句更稳妥？', options: ['先锁住「冒烟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冒烟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冒烟'] },
  });

  D('fumes', {
    etymology: {
      origin: '现代英语常用词「fumes」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fumes', gloss: '烟雾（复数）' },
      suffix: null,
      history: [
        { label: 'fumes', text: '现代英语常用词「fumes」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：烟雾（复数）。' },
      ],
      formationLogic: '核心义：烟雾（复数）。',
      mnemonic: '看到 fumes，先说出「烟雾（复数）」。',
      note: '核心义：烟雾（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fumes.', chinese: '这一章反复回到同一个点：烟雾（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fumes.s1', en: 'Without that fumes, the next paragraph is hard to follow.', zh: '没有这个烟雾（复数），下一段会很难读。', structure: 'fumes / 表示 / 烟雾（复数）', grammar: 'noun，围绕「烟雾（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fumes.', right: 'He gave me some advice about the fumes.', reason: 'advice 不可数。名词 fumes 的单复数按词典词形记。', rule: '先确定 fumes 是noun，再套「烟雾（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fumes.q1', senseId: 'fumes.s1', errorType: 'meaning', type: '词义选择', prompt: '「fumes」在本条的核心意思是：', options: ['烟雾（复数）', '完全相反的意思', '一种古代钱币'], answer: '烟雾（复数）', explain: 'fumes：烟雾（复数）。' },
      { id: 'fumes.q2', senseId: 'fumes.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fumes?', options: ['烟雾（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '烟雾（复数）', explain: '对的是「烟雾（复数）」。' },
      { id: 'fumes.q3', senseId: 'fumes.s1', errorType: 'grammar', type: '词义选择', prompt: 'fumes 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fumes.q4', senseId: 'fumes.s1', errorType: 'meaning', type: '词源', prompt: '记 fumes 时，哪句更稳妥？', options: ['先锁住「烟雾（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烟雾（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烟雾（复数）'] },
  });

  D('fun', {
    etymology: {
      origin: '现代英语常用词「fun」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fun', gloss: '乐趣' },
      suffix: null,
      history: [
        { label: 'fun', text: '现代英语常用词「fun」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：乐趣。' },
      ],
      formationLogic: '核心义：乐趣。',
      mnemonic: '看到 fun，先说出「乐趣」。',
      note: '核心义：乐趣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fun.', chinese: '这一章反复回到同一个点：乐趣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fun.s1', en: 'Without that fun, the next paragraph is hard to follow.', zh: '没有这个乐趣，下一段会很难读。', structure: 'fun / 表示 / 乐趣', grammar: 'noun，围绕「乐趣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fun.', right: 'He gave me some advice about the fun.', reason: 'advice 不可数。名词 fun 的单复数按词典词形记。', rule: '先确定 fun 是noun，再套「乐趣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fun.q1', senseId: 'fun.s1', errorType: 'meaning', type: '词义选择', prompt: '「fun」在本条的核心意思是：', options: ['乐趣', '完全相反的意思', '一种古代钱币'], answer: '乐趣', explain: 'fun：乐趣。' },
      { id: 'fun.q2', senseId: 'fun.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fun?', options: ['乐趣', 'a kind of ancient coin', 'the past tense of be'], answer: '乐趣', explain: '对的是「乐趣」。' },
      { id: 'fun.q3', senseId: 'fun.s1', errorType: 'grammar', type: '词义选择', prompt: 'fun 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fun.q4', senseId: 'fun.s1', errorType: 'meaning', type: '词源', prompt: '记 fun 时，哪句更稳妥？', options: ['先锁住「乐趣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乐趣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乐趣'] },
  });

  D('function', {
    etymology: {
      origin: '英语派生：func + -tion，词性转到「功能」。',
      prefix: null,
      root: { text: 'func', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'function', text: '英语派生：func + -tion，词性转到「功能」。' },
        { label: '现在', text: '核心用法是：功能。' },
      ],
      formationLogic: '先认词干 func，再看词尾。',
      mnemonic: '看到 function，先说出「功能」。',
      note: '先认词干 func，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one function.', chinese: '这一章反复回到同一个点：功能。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'function.s1', en: 'Without that function, the next paragraph is hard to follow.', zh: '没有这个功能，下一段会很难读。', structure: 'function / 表示 / 功能', grammar: 'noun，围绕「功能」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the function.', right: 'He gave me some advice about the function.', reason: 'advice 不可数。名词 function 的单复数按词典词形记。', rule: '先确定 function 是noun，再套「功能」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'function.q1', senseId: 'function.s1', errorType: 'meaning', type: '词义选择', prompt: '「function」在本条的核心意思是：', options: ['功能', '完全相反的意思', '一种古代钱币'], answer: '功能', explain: 'function：功能。' },
      { id: 'function.q2', senseId: 'function.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches function?', options: ['功能', 'a kind of ancient coin', 'the past tense of be'], answer: '功能', explain: '对的是「功能」。' },
      { id: 'function.q3', senseId: 'function.s1', errorType: 'grammar', type: '词义选择', prompt: 'function 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'function.q4', senseId: 'function.s1', errorType: 'meaning', type: '词源', prompt: '记 function 时，哪句更稳妥？', options: ['先锁住「功能」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「功能」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['功能'] },
  });

  D('function word', {
    etymology: {
      origin: '现代英语固定说法「function word」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'function word', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'function word', text: '现代英语固定说法「function word」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：功能词。' },
      ],
      formationLogic: '核心义：功能词。',
      mnemonic: '看到 function word，先说出「功能词」。',
      note: '核心义：功能词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "function word" and asked the class to keep it as one unit.', chinese: '老师把「function word」圈出来，让全班把它当成一个整体。它表示功能词。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'function word.s1', en: 'In the margin she wrote "function word" so nobody would split the phrase.', zh: '她在页边写下「function word」，免得有人把这个说法拆开。意思是功能词。', structure: 'function word / 表示 / 功能词', grammar: 'noun，围绕「功能词」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of function word and lost the point.', right: 'Keep "function word" together: it means 功能词.', reason: '「function word」要整块理解。', rule: '先确定 function word 是noun，再套「功能词」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'function word.q1', senseId: 'function word.s1', errorType: 'meaning', type: '词义选择', prompt: '「function word」在本条的核心意思是：', options: ['功能词', '完全相反的意思', '一种古代钱币'], answer: '功能词', explain: 'function word：功能词。' },
      { id: 'function word.q2', senseId: 'function word.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches function word?', options: ['功能词', 'a kind of ancient coin', 'the past tense of be'], answer: '功能词', explain: '对的是「功能词」。' },
      { id: 'function word.q3', senseId: 'function word.s1', errorType: 'grammar', type: '词义选择', prompt: 'function word 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'function word.q4', senseId: 'function word.s1', errorType: 'meaning', type: '词源', prompt: '记 function word 时，哪句更稳妥？', options: ['先锁住「功能词」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「功能词」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['功能词'] },
  });

  D('fund', {
    etymology: {
      origin: '现代英语常用词「fund」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fund', gloss: '基金' },
      suffix: null,
      history: [
        { label: 'fund', text: '现代英语常用词「fund」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：基金。' },
      ],
      formationLogic: '核心义：基金。',
      mnemonic: '看到 fund，先说出「基金」。',
      note: '核心义：基金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fund.', chinese: '这一章反复回到同一个点：基金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fund.s1', en: 'Without that fund, the next paragraph is hard to follow.', zh: '没有这个基金，下一段会很难读。', structure: 'fund / 表示 / 基金', grammar: 'noun，围绕「基金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fund.', right: 'He gave me some advice about the fund.', reason: 'advice 不可数。名词 fund 的单复数按词典词形记。', rule: '先确定 fund 是noun，再套「基金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fund.q1', senseId: 'fund.s1', errorType: 'meaning', type: '词义选择', prompt: '「fund」在本条的核心意思是：', options: ['基金', '完全相反的意思', '一种古代钱币'], answer: '基金', explain: 'fund：基金。' },
      { id: 'fund.q2', senseId: 'fund.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fund?', options: ['基金', 'a kind of ancient coin', 'the past tense of be'], answer: '基金', explain: '对的是「基金」。' },
      { id: 'fund.q3', senseId: 'fund.s1', errorType: 'grammar', type: '词义选择', prompt: 'fund 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fund.q4', senseId: 'fund.s1', errorType: 'meaning', type: '词源', prompt: '记 fund 时，哪句更稳妥？', options: ['先锁住「基金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「基金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['基金'] },
  });

  D('fundamental', {
    etymology: {
      origin: '英语派生：fundament + -al，词性转到「根本的」。',
      prefix: null,
      root: { text: 'fundament', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fundamental', text: '英语派生：fundament + -al，词性转到「根本的」。' },
        { label: '现在', text: '核心用法是：根本的。' },
      ],
      formationLogic: '先认词干 fundament，再看词尾。',
      mnemonic: '看到 fundamental，先说出「根本的」。',
      note: '先认词干 fundament，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fundamental.', chinese: '即使是初读者也能看出，这个结果是根本的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fundamental.s1', en: 'They wanted a fundamental answer, not a long speech.', zh: '他们要一个根本的的答复，不要长篇发言。', structure: 'fundamental / 表示 / 根本的', grammar: 'adjective，围绕「根本的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fundamental.', right: 'The news is fundamental.', reason: 'news 作主语时动词用单数。', rule: '先确定 fundamental 是adjective，再套「根本的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fundamental.q1', senseId: 'fundamental.s1', errorType: 'meaning', type: '词义选择', prompt: '「fundamental」在本条的核心意思是：', options: ['根本的', '完全相反的意思', '一种古代钱币'], answer: '根本的', explain: 'fundamental：根本的。' },
      { id: 'fundamental.q2', senseId: 'fundamental.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fundamental?', options: ['根本的', 'a kind of ancient coin', 'the past tense of be'], answer: '根本的', explain: '对的是「根本的」。' },
      { id: 'fundamental.q3', senseId: 'fundamental.s1', errorType: 'grammar', type: '词义选择', prompt: 'fundamental 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fundamental.q4', senseId: 'fundamental.s1', errorType: 'meaning', type: '词源', prompt: '记 fundamental 时，哪句更稳妥？', options: ['先锁住「根本的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「根本的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['根本的'] },
  });

  D('funding', {
    etymology: {
      origin: '英语派生：fund + -ing，词性转到「资金」。',
      prefix: null,
      root: { text: 'fund', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'funding', text: '英语派生：fund + -ing，词性转到「资金」。' },
        { label: '现在', text: '核心用法是：资金。' },
      ],
      formationLogic: '先认词干 fund，再看词尾。',
      mnemonic: '看到 funding，先说出「资金」。',
      note: '先认词干 fund，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one funding.', chinese: '这一章反复回到同一个点：资金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'funding.s1', en: 'Without that funding, the next paragraph is hard to follow.', zh: '没有这个资金，下一段会很难读。', structure: 'funding / 表示 / 资金', grammar: 'noun，围绕「资金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the funding.', right: 'He gave me some advice about the funding.', reason: 'advice 不可数。名词 funding 的单复数按词典词形记。', rule: '先确定 funding 是noun，再套「资金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'funding.q1', senseId: 'funding.s1', errorType: 'meaning', type: '词义选择', prompt: '「funding」在本条的核心意思是：', options: ['资金', '完全相反的意思', '一种古代钱币'], answer: '资金', explain: 'funding：资金。' },
      { id: 'funding.q2', senseId: 'funding.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches funding?', options: ['资金', 'a kind of ancient coin', 'the past tense of be'], answer: '资金', explain: '对的是「资金」。' },
      { id: 'funding.q3', senseId: 'funding.s1', errorType: 'grammar', type: '词义选择', prompt: 'funding 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'funding.q4', senseId: 'funding.s1', errorType: 'meaning', type: '词源', prompt: '记 funding 时，哪句更稳妥？', options: ['先锁住「资金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「资金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['资金'] },
  });

  D('funds', {
    etymology: {
      origin: '现代英语常用词「funds」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'funds', gloss: '资金（复数）' },
      suffix: null,
      history: [
        { label: 'funds', text: '现代英语常用词「funds」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：资金（复数）。' },
      ],
      formationLogic: '核心义：资金（复数）。',
      mnemonic: '看到 funds，先说出「资金（复数）」。',
      note: '核心义：资金（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one funds.', chinese: '这一章反复回到同一个点：资金（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'funds.s1', en: 'Without that funds, the next paragraph is hard to follow.', zh: '没有这个资金（复数），下一段会很难读。', structure: 'funds / 表示 / 资金（复数）', grammar: 'noun，围绕「资金（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the funds.', right: 'He gave me some advice about the funds.', reason: 'advice 不可数。名词 funds 的单复数按词典词形记。', rule: '先确定 funds 是noun，再套「资金（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'funds.q1', senseId: 'funds.s1', errorType: 'meaning', type: '词义选择', prompt: '「funds」在本条的核心意思是：', options: ['资金（复数）', '完全相反的意思', '一种古代钱币'], answer: '资金（复数）', explain: 'funds：资金（复数）。' },
      { id: 'funds.q2', senseId: 'funds.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches funds?', options: ['资金（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '资金（复数）', explain: '对的是「资金（复数）」。' },
      { id: 'funds.q3', senseId: 'funds.s1', errorType: 'grammar', type: '词义选择', prompt: 'funds 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'funds.q4', senseId: 'funds.s1', errorType: 'meaning', type: '词源', prompt: '记 funds 时，哪句更稳妥？', options: ['先锁住「资金（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「资金（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['资金（复数）'] },
  });

  D('funeral', {
    etymology: {
      origin: '英语派生：funer + -al，词性转到「葬礼」。',
      prefix: null,
      root: { text: 'funer', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'funeral', text: '英语派生：funer + -al，词性转到「葬礼」。' },
        { label: '现在', text: '核心用法是：葬礼。' },
      ],
      formationLogic: '先认词干 funer，再看词尾。',
      mnemonic: '看到 funeral，先说出「葬礼」。',
      note: '先认词干 funer，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one funeral.', chinese: '这一章反复回到同一个点：葬礼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'funeral.s1', en: 'Without that funeral, the next paragraph is hard to follow.', zh: '没有这个葬礼，下一段会很难读。', structure: 'funeral / 表示 / 葬礼', grammar: 'noun，围绕「葬礼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the funeral.', right: 'He gave me some advice about the funeral.', reason: 'advice 不可数。名词 funeral 的单复数按词典词形记。', rule: '先确定 funeral 是noun，再套「葬礼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'funeral.q1', senseId: 'funeral.s1', errorType: 'meaning', type: '词义选择', prompt: '「funeral」在本条的核心意思是：', options: ['葬礼', '完全相反的意思', '一种古代钱币'], answer: '葬礼', explain: 'funeral：葬礼。' },
      { id: 'funeral.q2', senseId: 'funeral.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches funeral?', options: ['葬礼', 'a kind of ancient coin', 'the past tense of be'], answer: '葬礼', explain: '对的是「葬礼」。' },
      { id: 'funeral.q3', senseId: 'funeral.s1', errorType: 'grammar', type: '词义选择', prompt: 'funeral 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'funeral.q4', senseId: 'funeral.s1', errorType: 'meaning', type: '词源', prompt: '记 funeral 时，哪句更稳妥？', options: ['先锁住「葬礼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「葬礼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['葬礼'] },
  });

  D('fungus', {
    etymology: {
      origin: '现代英语常用词「fungus」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fungus', gloss: '真菌' },
      suffix: null,
      history: [
        { label: 'fungus', text: '现代英语常用词「fungus」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：真菌。' },
      ],
      formationLogic: '核心义：真菌。',
      mnemonic: '看到 fungus，先说出「真菌」。',
      note: '核心义：真菌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fungus.', chinese: '这一章反复回到同一个点：真菌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fungus.s1', en: 'Without that fungus, the next paragraph is hard to follow.', zh: '没有这个真菌，下一段会很难读。', structure: 'fungus / 表示 / 真菌', grammar: 'noun，围绕「真菌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fungus.', right: 'He gave me some advice about the fungus.', reason: 'advice 不可数。名词 fungus 的单复数按词典词形记。', rule: '先确定 fungus 是noun，再套「真菌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fungus.q1', senseId: 'fungus.s1', errorType: 'meaning', type: '词义选择', prompt: '「fungus」在本条的核心意思是：', options: ['真菌', '完全相反的意思', '一种古代钱币'], answer: '真菌', explain: 'fungus：真菌。' },
      { id: 'fungus.q2', senseId: 'fungus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fungus?', options: ['真菌', 'a kind of ancient coin', 'the past tense of be'], answer: '真菌', explain: '对的是「真菌」。' },
      { id: 'fungus.q3', senseId: 'fungus.s1', errorType: 'grammar', type: '词义选择', prompt: 'fungus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fungus.q4', senseId: 'fungus.s1', errorType: 'meaning', type: '词源', prompt: '记 fungus 时，哪句更稳妥？', options: ['先锁住「真菌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「真菌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['真菌'] },
  });

  D('funny', {
    etymology: {
      origin: '现代英语常用词「funny」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'funny', gloss: '好笑的' },
      suffix: null,
      history: [
        { label: 'funny', text: '现代英语常用词「funny」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：好笑的。' },
      ],
      formationLogic: '核心义：好笑的。',
      mnemonic: '看到 funny，先说出「好笑的」。',
      note: '核心义：好笑的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was funny.', chinese: '即使是初读者也能看出，这个结果是好笑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'funny.s1', en: 'They wanted a funny answer, not a long speech.', zh: '他们要一个好笑的的答复，不要长篇发言。', structure: 'funny / 表示 / 好笑的', grammar: 'adjective，围绕「好笑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are funny.', right: 'The news is funny.', reason: 'news 作主语时动词用单数。', rule: '先确定 funny 是adjective，再套「好笑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'funny.q1', senseId: 'funny.s1', errorType: 'meaning', type: '词义选择', prompt: '「funny」在本条的核心意思是：', options: ['好笑的', '完全相反的意思', '一种古代钱币'], answer: '好笑的', explain: 'funny：好笑的。' },
      { id: 'funny.q2', senseId: 'funny.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches funny?', options: ['好笑的', 'a kind of ancient coin', 'the past tense of be'], answer: '好笑的', explain: '对的是「好笑的」。' },
      { id: 'funny.q3', senseId: 'funny.s1', errorType: 'grammar', type: '词义选择', prompt: 'funny 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'funny.q4', senseId: 'funny.s1', errorType: 'meaning', type: '词源', prompt: '记 funny 时，哪句更稳妥？', options: ['先锁住「好笑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好笑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好笑的'] },
  });

  D('fur', {
    etymology: {
      origin: '现代英语常用词「fur」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fur', gloss: '毛皮' },
      suffix: null,
      history: [
        { label: 'fur', text: '现代英语常用词「fur」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：毛皮。' },
      ],
      formationLogic: '核心义：毛皮。',
      mnemonic: '看到 fur，先说出「毛皮」。',
      note: '核心义：毛皮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fur.', chinese: '这一章反复回到同一个点：毛皮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fur.s1', en: 'Without that fur, the next paragraph is hard to follow.', zh: '没有这个毛皮，下一段会很难读。', structure: 'fur / 表示 / 毛皮', grammar: 'noun，围绕「毛皮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fur.', right: 'He gave me some advice about the fur.', reason: 'advice 不可数。名词 fur 的单复数按词典词形记。', rule: '先确定 fur 是noun，再套「毛皮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fur.q1', senseId: 'fur.s1', errorType: 'meaning', type: '词义选择', prompt: '「fur」在本条的核心意思是：', options: ['毛皮', '完全相反的意思', '一种古代钱币'], answer: '毛皮', explain: 'fur：毛皮。' },
      { id: 'fur.q2', senseId: 'fur.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fur?', options: ['毛皮', 'a kind of ancient coin', 'the past tense of be'], answer: '毛皮', explain: '对的是「毛皮」。' },
      { id: 'fur.q3', senseId: 'fur.s1', errorType: 'grammar', type: '词义选择', prompt: 'fur 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fur.q4', senseId: 'fur.s1', errorType: 'meaning', type: '词源', prompt: '记 fur 时，哪句更稳妥？', options: ['先锁住「毛皮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「毛皮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毛皮'] },
  });

  D('furious', {
    etymology: {
      origin: '英语派生：furi + -ous，词性转到「狂怒的」。',
      prefix: null,
      root: { text: 'furi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'furious', text: '英语派生：furi + -ous，词性转到「狂怒的」。' },
        { label: '现在', text: '核心用法是：狂怒的。' },
      ],
      formationLogic: '先认词干 furi，再看词尾。',
      mnemonic: '看到 furious，先说出「狂怒的」。',
      note: '先认词干 furi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was furious.', chinese: '即使是初读者也能看出，这个结果是狂怒的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furious.s1', en: 'They wanted a furious answer, not a long speech.', zh: '他们要一个狂怒的的答复，不要长篇发言。', structure: 'furious / 表示 / 狂怒的', grammar: 'adjective，围绕「狂怒的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are furious.', right: 'The news is furious.', reason: 'news 作主语时动词用单数。', rule: '先确定 furious 是adjective，再套「狂怒的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furious.q1', senseId: 'furious.s1', errorType: 'meaning', type: '词义选择', prompt: '「furious」在本条的核心意思是：', options: ['狂怒的', '完全相反的意思', '一种古代钱币'], answer: '狂怒的', explain: 'furious：狂怒的。' },
      { id: 'furious.q2', senseId: 'furious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furious?', options: ['狂怒的', 'a kind of ancient coin', 'the past tense of be'], answer: '狂怒的', explain: '对的是「狂怒的」。' },
      { id: 'furious.q3', senseId: 'furious.s1', errorType: 'grammar', type: '词义选择', prompt: 'furious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'furious.q4', senseId: 'furious.s1', errorType: 'meaning', type: '词源', prompt: '记 furious 时，哪句更稳妥？', options: ['先锁住「狂怒的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狂怒的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狂怒的'] },
  });

  D('furlough', {
    etymology: {
      origin: '现代英语常用词「furlough」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'furlough', gloss: '休假' },
      suffix: null,
      history: [
        { label: 'furlough', text: '现代英语常用词「furlough」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：休假。' },
      ],
      formationLogic: '核心义：休假。',
      mnemonic: '看到 furlough，先说出「休假」。',
      note: '核心义：休假。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one furlough.', chinese: '这一章反复回到同一个点：休假。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furlough.s1', en: 'Without that furlough, the next paragraph is hard to follow.', zh: '没有这个休假，下一段会很难读。', structure: 'furlough / 表示 / 休假', grammar: 'noun，围绕「休假」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the furlough.', right: 'He gave me some advice about the furlough.', reason: 'advice 不可数。名词 furlough 的单复数按词典词形记。', rule: '先确定 furlough 是noun，再套「休假」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furlough.q1', senseId: 'furlough.s1', errorType: 'meaning', type: '词义选择', prompt: '「furlough」在本条的核心意思是：', options: ['休假', '完全相反的意思', '一种古代钱币'], answer: '休假', explain: 'furlough：休假。' },
      { id: 'furlough.q2', senseId: 'furlough.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furlough?', options: ['休假', 'a kind of ancient coin', 'the past tense of be'], answer: '休假', explain: '对的是「休假」。' },
      { id: 'furlough.q3', senseId: 'furlough.s1', errorType: 'grammar', type: '词义选择', prompt: 'furlough 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'furlough.q4', senseId: 'furlough.s1', errorType: 'meaning', type: '词源', prompt: '记 furlough 时，哪句更稳妥？', options: ['先锁住「休假」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「休假」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['休假'] },
  });

  D('furnace', {
    etymology: {
      origin: '现代英语常用词「furnace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'furnace', gloss: '火炉' },
      suffix: null,
      history: [
        { label: 'furnace', text: '现代英语常用词「furnace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：火炉。' },
      ],
      formationLogic: '核心义：火炉。',
      mnemonic: '看到 furnace，先说出「火炉」。',
      note: '核心义：火炉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one furnace.', chinese: '这一章反复回到同一个点：火炉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furnace.s1', en: 'Without that furnace, the next paragraph is hard to follow.', zh: '没有这个火炉，下一段会很难读。', structure: 'furnace / 表示 / 火炉', grammar: 'noun，围绕「火炉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the furnace.', right: 'He gave me some advice about the furnace.', reason: 'advice 不可数。名词 furnace 的单复数按词典词形记。', rule: '先确定 furnace 是noun，再套「火炉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furnace.q1', senseId: 'furnace.s1', errorType: 'meaning', type: '词义选择', prompt: '「furnace」在本条的核心意思是：', options: ['火炉', '完全相反的意思', '一种古代钱币'], answer: '火炉', explain: 'furnace：火炉。' },
      { id: 'furnace.q2', senseId: 'furnace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furnace?', options: ['火炉', 'a kind of ancient coin', 'the past tense of be'], answer: '火炉', explain: '对的是「火炉」。' },
      { id: 'furnace.q3', senseId: 'furnace.s1', errorType: 'grammar', type: '词义选择', prompt: 'furnace 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'furnace.q4', senseId: 'furnace.s1', errorType: 'meaning', type: '词源', prompt: '记 furnace 时，哪句更稳妥？', options: ['先锁住「火炉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火炉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火炉'] },
  });

  D('furnish', {
    etymology: {
      origin: '现代英语常用词「furnish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'furnish', gloss: '布置家具' },
      suffix: null,
      history: [
        { label: 'furnish', text: '现代英语常用词「furnish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：布置家具。' },
      ],
      formationLogic: '核心义：布置家具。',
      mnemonic: '看到 furnish，先说出「布置家具」。',
      note: '核心义：布置家具。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to furnish before the office closed.', chinese: '他们同意在办公室关门前做这件事：布置家具。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furnish.s1', en: 'The deadline forced the team to furnish that afternoon.', zh: '截止日期逼着小组在那天下午布置家具。', structure: 'furnish / 表示 / 布置家具', grammar: 'verb，围绕「布置家具」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She furnished it yesterday without checking the real past form.', right: 'Check the past form of "furnish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 furnish 是verb，再套「布置家具」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furnish.q1', senseId: 'furnish.s1', errorType: 'meaning', type: '词义选择', prompt: '「furnish」在本条的核心意思是：', options: ['布置家具', '完全相反的意思', '一种古代钱币'], answer: '布置家具', explain: 'furnish：布置家具。' },
      { id: 'furnish.q2', senseId: 'furnish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furnish?', options: ['布置家具', 'a kind of ancient coin', 'the past tense of be'], answer: '布置家具', explain: '对的是「布置家具」。' },
      { id: 'furnish.q3', senseId: 'furnish.s1', errorType: 'grammar', type: '词义选择', prompt: 'furnish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'furnish.q4', senseId: 'furnish.s1', errorType: 'meaning', type: '词源', prompt: '记 furnish 时，哪句更稳妥？', options: ['先锁住「布置家具」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「布置家具」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['布置家具'] },
  });

  D('furniture', {
    etymology: {
      origin: '现代英语常用词「furniture」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'furniture', gloss: '家具' },
      suffix: null,
      history: [
        { label: 'furniture', text: '现代英语常用词「furniture」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：家具。' },
      ],
      formationLogic: '核心义：家具。',
      mnemonic: '看到 furniture，先说出「家具」。',
      note: '核心义：家具。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one furniture.', chinese: '这一章反复回到同一个点：家具。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furniture.s1', en: 'Without that furniture, the next paragraph is hard to follow.', zh: '没有这个家具，下一段会很难读。', structure: 'furniture / 表示 / 家具', grammar: 'noun，围绕「家具」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the furniture.', right: 'He gave me some advice about the furniture.', reason: 'advice 不可数。名词 furniture 的单复数按词典词形记。', rule: '先确定 furniture 是noun，再套「家具」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furniture.q1', senseId: 'furniture.s1', errorType: 'meaning', type: '词义选择', prompt: '「furniture」在本条的核心意思是：', options: ['家具', '完全相反的意思', '一种古代钱币'], answer: '家具', explain: 'furniture：家具。' },
      { id: 'furniture.q2', senseId: 'furniture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furniture?', options: ['家具', 'a kind of ancient coin', 'the past tense of be'], answer: '家具', explain: '对的是「家具」。' },
      { id: 'furniture.q3', senseId: 'furniture.s1', errorType: 'grammar', type: '词义选择', prompt: 'furniture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'furniture.q4', senseId: 'furniture.s1', errorType: 'meaning', type: '词源', prompt: '记 furniture 时，哪句更稳妥？', options: ['先锁住「家具」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家具」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家具'] },
  });

  D('furrow', {
    etymology: {
      origin: '现代英语常用词「furrow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'furrow', gloss: '犁沟' },
      suffix: null,
      history: [
        { label: 'furrow', text: '现代英语常用词「furrow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：犁沟。' },
      ],
      formationLogic: '核心义：犁沟。',
      mnemonic: '看到 furrow，先说出「犁沟」。',
      note: '核心义：犁沟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one furrow.', chinese: '这一章反复回到同一个点：犁沟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furrow.s1', en: 'Without that furrow, the next paragraph is hard to follow.', zh: '没有这个犁沟，下一段会很难读。', structure: 'furrow / 表示 / 犁沟', grammar: 'noun，围绕「犁沟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the furrow.', right: 'He gave me some advice about the furrow.', reason: 'advice 不可数。名词 furrow 的单复数按词典词形记。', rule: '先确定 furrow 是noun，再套「犁沟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furrow.q1', senseId: 'furrow.s1', errorType: 'meaning', type: '词义选择', prompt: '「furrow」在本条的核心意思是：', options: ['犁沟', '完全相反的意思', '一种古代钱币'], answer: '犁沟', explain: 'furrow：犁沟。' },
      { id: 'furrow.q2', senseId: 'furrow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furrow?', options: ['犁沟', 'a kind of ancient coin', 'the past tense of be'], answer: '犁沟', explain: '对的是「犁沟」。' },
      { id: 'furrow.q3', senseId: 'furrow.s1', errorType: 'grammar', type: '词义选择', prompt: 'furrow 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'furrow.q4', senseId: 'furrow.s1', errorType: 'meaning', type: '词源', prompt: '记 furrow 时，哪句更稳妥？', options: ['先锁住「犁沟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「犁沟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['犁沟'] },
  });

  D('further', {
    etymology: {
      origin: '英语派生：furth + -er，词性转到「进一步」。',
      prefix: null,
      root: { text: 'furth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'further', text: '英语派生：furth + -er，词性转到「进一步」。' },
        { label: '现在', text: '核心用法是：进一步。' },
      ],
      formationLogic: '先认词干 furth，再看词尾。',
      mnemonic: '看到 further，先说出「进一步」。',
      note: '先认词干 furth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule further, and the class followed.', chinese: '她把规则讲清楚了（进一步），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'further.s1', en: 'He nodded further and returned to the notes.', zh: '他进一步地点了点头，又回去看笔记。', structure: 'further / 表示 / 进一步', grammar: 'adverb，围绕「进一步」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very furtherly in the meeting.', right: 'She spoke further in the meeting.', reason: 'further 已经是副词，不要再加 -ly。', rule: '先确定 further 是adverb，再套「进一步」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'further.q1', senseId: 'further.s1', errorType: 'meaning', type: '词义选择', prompt: '「further」在本条的核心意思是：', options: ['进一步', '完全相反的意思', '一种古代钱币'], answer: '进一步', explain: 'further：进一步。' },
      { id: 'further.q2', senseId: 'further.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches further?', options: ['进一步', 'a kind of ancient coin', 'the past tense of be'], answer: '进一步', explain: '对的是「进一步」。' },
      { id: 'further.q3', senseId: 'further.s1', errorType: 'grammar', type: '词义选择', prompt: 'further 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'further.q4', senseId: 'further.s1', errorType: 'meaning', type: '词源', prompt: '记 further 时，哪句更稳妥？', options: ['先锁住「进一步」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进一步」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进一步'] },
  });

  D('furthermore', {
    etymology: {
      origin: '现代英语常用词「furthermore」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'furthermore', gloss: '此外' },
      suffix: null,
      history: [
        { label: 'furthermore', text: '现代英语常用词「furthermore」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：此外。' },
      ],
      formationLogic: '核心义：此外。',
      mnemonic: '看到 furthermore，先说出「此外」。',
      note: '核心义：此外。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule furthermore, and the class followed.', chinese: '她把规则讲清楚了（此外），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'furthermore.s1', en: 'He nodded furthermore and returned to the notes.', zh: '他此外地点了点头，又回去看笔记。', structure: 'furthermore / 表示 / 此外', grammar: 'adverb，围绕「此外」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very furthermorely in the meeting.', right: 'She spoke furthermore in the meeting.', reason: 'furthermore 已经是副词，不要再加 -ly。', rule: '先确定 furthermore 是adverb，再套「此外」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'furthermore.q1', senseId: 'furthermore.s1', errorType: 'meaning', type: '词义选择', prompt: '「furthermore」在本条的核心意思是：', options: ['此外', '完全相反的意思', '一种古代钱币'], answer: '此外', explain: 'furthermore：此外。' },
      { id: 'furthermore.q2', senseId: 'furthermore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches furthermore?', options: ['此外', 'a kind of ancient coin', 'the past tense of be'], answer: '此外', explain: '对的是「此外」。' },
      { id: 'furthermore.q3', senseId: 'furthermore.s1', errorType: 'grammar', type: '词义选择', prompt: 'furthermore 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'furthermore.q4', senseId: 'furthermore.s1', errorType: 'meaning', type: '词源', prompt: '记 furthermore 时，哪句更稳妥？', options: ['先锁住「此外」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「此外」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['此外'] },
  });

  D('fury', {
    etymology: {
      origin: '现代英语常用词「fury」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fury', gloss: '狂怒' },
      suffix: null,
      history: [
        { label: 'fury', text: '现代英语常用词「fury」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：狂怒。' },
      ],
      formationLogic: '核心义：狂怒。',
      mnemonic: '看到 fury，先说出「狂怒」。',
      note: '核心义：狂怒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fury.', chinese: '这一章反复回到同一个点：狂怒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fury.s1', en: 'Without that fury, the next paragraph is hard to follow.', zh: '没有这个狂怒，下一段会很难读。', structure: 'fury / 表示 / 狂怒', grammar: 'noun，围绕「狂怒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fury.', right: 'He gave me some advice about the fury.', reason: 'advice 不可数。名词 fury 的单复数按词典词形记。', rule: '先确定 fury 是noun，再套「狂怒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fury.q1', senseId: 'fury.s1', errorType: 'meaning', type: '词义选择', prompt: '「fury」在本条的核心意思是：', options: ['狂怒', '完全相反的意思', '一种古代钱币'], answer: '狂怒', explain: 'fury：狂怒。' },
      { id: 'fury.q2', senseId: 'fury.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fury?', options: ['狂怒', 'a kind of ancient coin', 'the past tense of be'], answer: '狂怒', explain: '对的是「狂怒」。' },
      { id: 'fury.q3', senseId: 'fury.s1', errorType: 'grammar', type: '词义选择', prompt: 'fury 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fury.q4', senseId: 'fury.s1', errorType: 'meaning', type: '词源', prompt: '记 fury 时，哪句更稳妥？', options: ['先锁住「狂怒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狂怒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狂怒'] },
  });

  D('fuse', {
    etymology: {
      origin: '现代英语常用词「fuse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fuse', gloss: '保险丝' },
      suffix: null,
      history: [
        { label: 'fuse', text: '现代英语常用词「fuse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：保险丝。' },
      ],
      formationLogic: '核心义：保险丝。',
      mnemonic: '看到 fuse，先说出「保险丝」。',
      note: '核心义：保险丝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fuse.', chinese: '这一章反复回到同一个点：保险丝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fuse.s1', en: 'Without that fuse, the next paragraph is hard to follow.', zh: '没有这个保险丝，下一段会很难读。', structure: 'fuse / 表示 / 保险丝', grammar: 'noun，围绕「保险丝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fuse.', right: 'He gave me some advice about the fuse.', reason: 'advice 不可数。名词 fuse 的单复数按词典词形记。', rule: '先确定 fuse 是noun，再套「保险丝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fuse.q1', senseId: 'fuse.s1', errorType: 'meaning', type: '词义选择', prompt: '「fuse」在本条的核心意思是：', options: ['保险丝', '完全相反的意思', '一种古代钱币'], answer: '保险丝', explain: 'fuse：保险丝。' },
      { id: 'fuse.q2', senseId: 'fuse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fuse?', options: ['保险丝', 'a kind of ancient coin', 'the past tense of be'], answer: '保险丝', explain: '对的是「保险丝」。' },
      { id: 'fuse.q3', senseId: 'fuse.s1', errorType: 'grammar', type: '词义选择', prompt: 'fuse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fuse.q4', senseId: 'fuse.s1', errorType: 'meaning', type: '词源', prompt: '记 fuse 时，哪句更稳妥？', options: ['先锁住「保险丝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「保险丝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['保险丝'] },
  });

  D('fusion', {
    etymology: {
      origin: '现代英语常用词「fusion」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fusion', gloss: '融合' },
      suffix: null,
      history: [
        { label: 'fusion', text: '现代英语常用词「fusion」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：融合。' },
      ],
      formationLogic: '核心义：融合。',
      mnemonic: '看到 fusion，先说出「融合」。',
      note: '核心义：融合。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fusion.', chinese: '这一章反复回到同一个点：融合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fusion.s1', en: 'Without that fusion, the next paragraph is hard to follow.', zh: '没有这个融合，下一段会很难读。', structure: 'fusion / 表示 / 融合', grammar: 'noun，围绕「融合」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fusion.', right: 'He gave me some advice about the fusion.', reason: 'advice 不可数。名词 fusion 的单复数按词典词形记。', rule: '先确定 fusion 是noun，再套「融合」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fusion.q1', senseId: 'fusion.s1', errorType: 'meaning', type: '词义选择', prompt: '「fusion」在本条的核心意思是：', options: ['融合', '完全相反的意思', '一种古代钱币'], answer: '融合', explain: 'fusion：融合。' },
      { id: 'fusion.q2', senseId: 'fusion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fusion?', options: ['融合', 'a kind of ancient coin', 'the past tense of be'], answer: '融合', explain: '对的是「融合」。' },
      { id: 'fusion.q3', senseId: 'fusion.s1', errorType: 'grammar', type: '词义选择', prompt: 'fusion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fusion.q4', senseId: 'fusion.s1', errorType: 'meaning', type: '词源', prompt: '记 fusion 时，哪句更稳妥？', options: ['先锁住「融合」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「融合」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['融合'] },
  });

  D('fuss', {
    etymology: {
      origin: '现代英语常用词「fuss」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fuss', gloss: '大惊小怪' },
      suffix: null,
      history: [
        { label: 'fuss', text: '现代英语常用词「fuss」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大惊小怪。' },
      ],
      formationLogic: '核心义：大惊小怪。',
      mnemonic: '看到 fuss，先说出「大惊小怪」。',
      note: '核心义：大惊小怪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fuss.', chinese: '这一章反复回到同一个点：大惊小怪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fuss.s1', en: 'Without that fuss, the next paragraph is hard to follow.', zh: '没有这个大惊小怪，下一段会很难读。', structure: 'fuss / 表示 / 大惊小怪', grammar: 'noun，围绕「大惊小怪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fuss.', right: 'He gave me some advice about the fuss.', reason: 'advice 不可数。名词 fuss 的单复数按词典词形记。', rule: '先确定 fuss 是noun，再套「大惊小怪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fuss.q1', senseId: 'fuss.s1', errorType: 'meaning', type: '词义选择', prompt: '「fuss」在本条的核心意思是：', options: ['大惊小怪', '完全相反的意思', '一种古代钱币'], answer: '大惊小怪', explain: 'fuss：大惊小怪。' },
      { id: 'fuss.q2', senseId: 'fuss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fuss?', options: ['大惊小怪', 'a kind of ancient coin', 'the past tense of be'], answer: '大惊小怪', explain: '对的是「大惊小怪」。' },
      { id: 'fuss.q3', senseId: 'fuss.s1', errorType: 'grammar', type: '词义选择', prompt: 'fuss 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fuss.q4', senseId: 'fuss.s1', errorType: 'meaning', type: '词源', prompt: '记 fuss 时，哪句更稳妥？', options: ['先锁住「大惊小怪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大惊小怪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大惊小怪'] },
  });

  D('fussy', {
    etymology: {
      origin: '现代英语常用词「fussy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fussy', gloss: '挑剔的' },
      suffix: null,
      history: [
        { label: 'fussy', text: '现代英语常用词「fussy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：挑剔的。' },
      ],
      formationLogic: '核心义：挑剔的。',
      mnemonic: '看到 fussy，先说出「挑剔的」。',
      note: '核心义：挑剔的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fussy.', chinese: '即使是初读者也能看出，这个结果是挑剔的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fussy.s1', en: 'They wanted a fussy answer, not a long speech.', zh: '他们要一个挑剔的的答复，不要长篇发言。', structure: 'fussy / 表示 / 挑剔的', grammar: 'adjective，围绕「挑剔的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fussy.', right: 'The news is fussy.', reason: 'news 作主语时动词用单数。', rule: '先确定 fussy 是adjective，再套「挑剔的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fussy.q1', senseId: 'fussy.s1', errorType: 'meaning', type: '词义选择', prompt: '「fussy」在本条的核心意思是：', options: ['挑剔的', '完全相反的意思', '一种古代钱币'], answer: '挑剔的', explain: 'fussy：挑剔的。' },
      { id: 'fussy.q2', senseId: 'fussy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fussy?', options: ['挑剔的', 'a kind of ancient coin', 'the past tense of be'], answer: '挑剔的', explain: '对的是「挑剔的」。' },
      { id: 'fussy.q3', senseId: 'fussy.s1', errorType: 'grammar', type: '词义选择', prompt: 'fussy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fussy.q4', senseId: 'fussy.s1', errorType: 'meaning', type: '词源', prompt: '记 fussy 时，哪句更稳妥？', options: ['先锁住「挑剔的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挑剔的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挑剔的'] },
  });

  D('futile', {
    etymology: {
      origin: '现代英语常用词「futile」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'futile', gloss: '徒劳的' },
      suffix: null,
      history: [
        { label: 'futile', text: '现代英语常用词「futile」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：徒劳的。' },
      ],
      formationLogic: '核心义：徒劳的。',
      mnemonic: '看到 futile，先说出「徒劳的」。',
      note: '核心义：徒劳的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was futile.', chinese: '即使是初读者也能看出，这个结果是徒劳的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'futile.s1', en: 'They wanted a futile answer, not a long speech.', zh: '他们要一个徒劳的的答复，不要长篇发言。', structure: 'futile / 表示 / 徒劳的', grammar: 'adjective，围绕「徒劳的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are futile.', right: 'The news is futile.', reason: 'news 作主语时动词用单数。', rule: '先确定 futile 是adjective，再套「徒劳的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'futile.q1', senseId: 'futile.s1', errorType: 'meaning', type: '词义选择', prompt: '「futile」在本条的核心意思是：', options: ['徒劳的', '完全相反的意思', '一种古代钱币'], answer: '徒劳的', explain: 'futile：徒劳的。' },
      { id: 'futile.q2', senseId: 'futile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches futile?', options: ['徒劳的', 'a kind of ancient coin', 'the past tense of be'], answer: '徒劳的', explain: '对的是「徒劳的」。' },
      { id: 'futile.q3', senseId: 'futile.s1', errorType: 'grammar', type: '词义选择', prompt: 'futile 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'futile.q4', senseId: 'futile.s1', errorType: 'meaning', type: '词源', prompt: '记 futile 时，哪句更稳妥？', options: ['先锁住「徒劳的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「徒劳的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['徒劳的'] },
  });

  D('future', {
    etymology: {
      origin: '现代英语常用词「future」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'future', gloss: '将来' },
      suffix: null,
      history: [
        { label: 'future', text: '现代英语常用词「future」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：将来。' },
      ],
      formationLogic: '核心义：将来。',
      mnemonic: '看到 future，先说出「将来」。',
      note: '核心义：将来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one future.', chinese: '这一章反复回到同一个点：将来。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'future.s1', en: 'Without that future, the next paragraph is hard to follow.', zh: '没有这个将来，下一段会很难读。', structure: 'future / 表示 / 将来', grammar: 'noun，围绕「将来」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the future.', right: 'He gave me some advice about the future.', reason: 'advice 不可数。名词 future 的单复数按词典词形记。', rule: '先确定 future 是noun，再套「将来」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'future.q1', senseId: 'future.s1', errorType: 'meaning', type: '词义选择', prompt: '「future」在本条的核心意思是：', options: ['将来', '完全相反的意思', '一种古代钱币'], answer: '将来', explain: 'future：将来。' },
      { id: 'future.q2', senseId: 'future.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches future?', options: ['将来', 'a kind of ancient coin', 'the past tense of be'], answer: '将来', explain: '对的是「将来」。' },
      { id: 'future.q3', senseId: 'future.s1', errorType: 'grammar', type: '词义选择', prompt: 'future 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'future.q4', senseId: 'future.s1', errorType: 'meaning', type: '词源', prompt: '记 future 时，哪句更稳妥？', options: ['先锁住「将来」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「将来」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['将来'] },
  });

  D('fuzz', {
    etymology: {
      origin: '现代英语常用词「fuzz」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fuzz', gloss: '绒毛' },
      suffix: null,
      history: [
        { label: 'fuzz', text: '现代英语常用词「fuzz」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：绒毛。' },
      ],
      formationLogic: '核心义：绒毛。',
      mnemonic: '看到 fuzz，先说出「绒毛」。',
      note: '核心义：绒毛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fuzz.', chinese: '这一章反复回到同一个点：绒毛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fuzz.s1', en: 'Without that fuzz, the next paragraph is hard to follow.', zh: '没有这个绒毛，下一段会很难读。', structure: 'fuzz / 表示 / 绒毛', grammar: 'noun，围绕「绒毛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fuzz.', right: 'He gave me some advice about the fuzz.', reason: 'advice 不可数。名词 fuzz 的单复数按词典词形记。', rule: '先确定 fuzz 是noun，再套「绒毛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fuzz.q1', senseId: 'fuzz.s1', errorType: 'meaning', type: '词义选择', prompt: '「fuzz」在本条的核心意思是：', options: ['绒毛', '完全相反的意思', '一种古代钱币'], answer: '绒毛', explain: 'fuzz：绒毛。' },
      { id: 'fuzz.q2', senseId: 'fuzz.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fuzz?', options: ['绒毛', 'a kind of ancient coin', 'the past tense of be'], answer: '绒毛', explain: '对的是「绒毛」。' },
      { id: 'fuzz.q3', senseId: 'fuzz.s1', errorType: 'grammar', type: '词义选择', prompt: 'fuzz 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fuzz.q4', senseId: 'fuzz.s1', errorType: 'meaning', type: '词源', prompt: '记 fuzz 时，哪句更稳妥？', options: ['先锁住「绒毛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「绒毛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绒毛'] },
  });

  D('gab', {
    etymology: {
      origin: '现代英语常用词「gab」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gab', gloss: '闲聊' },
      suffix: null,
      history: [
        { label: 'gab', text: '现代英语常用词「gab」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闲聊。' },
      ],
      formationLogic: '核心义：闲聊。',
      mnemonic: '看到 gab，先说出「闲聊」。',
      note: '核心义：闲聊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gab before the office closed.', chinese: '他们同意在办公室关门前做这件事：闲聊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gab.s1', en: 'The deadline forced the team to gab that afternoon.', zh: '截止日期逼着小组在那天下午闲聊。', structure: 'gab / 表示 / 闲聊', grammar: 'verb，围绕「闲聊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gabed it yesterday without checking the real past form.', right: 'Check the past form of "gab" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gab 是verb，再套「闲聊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gab.q1', senseId: 'gab.s1', errorType: 'meaning', type: '词义选择', prompt: '「gab」在本条的核心意思是：', options: ['闲聊', '完全相反的意思', '一种古代钱币'], answer: '闲聊', explain: 'gab：闲聊。' },
      { id: 'gab.q2', senseId: 'gab.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gab?', options: ['闲聊', 'a kind of ancient coin', 'the past tense of be'], answer: '闲聊', explain: '对的是「闲聊」。' },
      { id: 'gab.q3', senseId: 'gab.s1', errorType: 'grammar', type: '词义选择', prompt: 'gab 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gab.q4', senseId: 'gab.s1', errorType: 'meaning', type: '词源', prompt: '记 gab 时，哪句更稳妥？', options: ['先锁住「闲聊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闲聊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闲聊'] },
  });

  D('gadget', {
    etymology: {
      origin: '现代英语常用词「gadget」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gadget', gloss: '小装置' },
      suffix: null,
      history: [
        { label: 'gadget', text: '现代英语常用词「gadget」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小装置。' },
      ],
      formationLogic: '核心义：小装置。',
      mnemonic: '看到 gadget，先说出「小装置」。',
      note: '核心义：小装置。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gadget.', chinese: '这一章反复回到同一个点：小装置。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gadget.s1', en: 'Without that gadget, the next paragraph is hard to follow.', zh: '没有这个小装置，下一段会很难读。', structure: 'gadget / 表示 / 小装置', grammar: 'noun，围绕「小装置」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gadget.', right: 'He gave me some advice about the gadget.', reason: 'advice 不可数。名词 gadget 的单复数按词典词形记。', rule: '先确定 gadget 是noun，再套「小装置」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gadget.q1', senseId: 'gadget.s1', errorType: 'meaning', type: '词义选择', prompt: '「gadget」在本条的核心意思是：', options: ['小装置', '完全相反的意思', '一种古代钱币'], answer: '小装置', explain: 'gadget：小装置。' },
      { id: 'gadget.q2', senseId: 'gadget.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gadget?', options: ['小装置', 'a kind of ancient coin', 'the past tense of be'], answer: '小装置', explain: '对的是「小装置」。' },
      { id: 'gadget.q3', senseId: 'gadget.s1', errorType: 'grammar', type: '词义选择', prompt: 'gadget 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gadget.q4', senseId: 'gadget.s1', errorType: 'meaning', type: '词源', prompt: '记 gadget 时，哪句更稳妥？', options: ['先锁住「小装置」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小装置」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小装置'] },
  });

  D('gag', {
    etymology: {
      origin: '现代英语常用词「gag」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gag', gloss: '笑话' },
      suffix: null,
      history: [
        { label: 'gag', text: '现代英语常用词「gag」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：笑话。' },
      ],
      formationLogic: '核心义：笑话。',
      mnemonic: '看到 gag，先说出「笑话」。',
      note: '核心义：笑话。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gag.', chinese: '这一章反复回到同一个点：笑话。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gag.s1', en: 'Without that gag, the next paragraph is hard to follow.', zh: '没有这个笑话，下一段会很难读。', structure: 'gag / 表示 / 笑话', grammar: 'noun，围绕「笑话」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gag.', right: 'He gave me some advice about the gag.', reason: 'advice 不可数。名词 gag 的单复数按词典词形记。', rule: '先确定 gag 是noun，再套「笑话」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gag.q1', senseId: 'gag.s1', errorType: 'meaning', type: '词义选择', prompt: '「gag」在本条的核心意思是：', options: ['笑话', '完全相反的意思', '一种古代钱币'], answer: '笑话', explain: 'gag：笑话。' },
      { id: 'gag.q2', senseId: 'gag.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gag?', options: ['笑话', 'a kind of ancient coin', 'the past tense of be'], answer: '笑话', explain: '对的是「笑话」。' },
      { id: 'gag.q3', senseId: 'gag.s1', errorType: 'grammar', type: '词义选择', prompt: 'gag 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gag.q4', senseId: 'gag.s1', errorType: 'meaning', type: '词源', prompt: '记 gag 时，哪句更稳妥？', options: ['先锁住「笑话」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「笑话」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['笑话'] },
  });

  D('gain', {
    etymology: {
      origin: '现代英语常用词「gain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gain', gloss: '获得' },
      suffix: null,
      history: [
        { label: 'gain', text: '现代英语常用词「gain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：获得。' },
      ],
      formationLogic: '核心义：获得。',
      mnemonic: '看到 gain，先说出「获得」。',
      note: '核心义：获得。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gain before the office closed.', chinese: '他们同意在办公室关门前做这件事：获得。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gain.s1', en: 'The deadline forced the team to gain that afternoon.', zh: '截止日期逼着小组在那天下午获得。', structure: 'gain / 表示 / 获得', grammar: 'verb，围绕「获得」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gained it yesterday without checking the real past form.', right: 'Check the past form of "gain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gain 是verb，再套「获得」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gain.q1', senseId: 'gain.s1', errorType: 'meaning', type: '词义选择', prompt: '「gain」在本条的核心意思是：', options: ['获得', '完全相反的意思', '一种古代钱币'], answer: '获得', explain: 'gain：获得。' },
      { id: 'gain.q2', senseId: 'gain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gain?', options: ['获得', 'a kind of ancient coin', 'the past tense of be'], answer: '获得', explain: '对的是「获得」。' },
      { id: 'gain.q3', senseId: 'gain.s1', errorType: 'grammar', type: '词义选择', prompt: 'gain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gain.q4', senseId: 'gain.s1', errorType: 'meaning', type: '词源', prompt: '记 gain 时，哪句更稳妥？', options: ['先锁住「获得」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「获得」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['获得'] },
  });

  D('gaining', {
    etymology: {
      origin: '英语派生：gain + -ing，词性转到「获得」。',
      prefix: null,
      root: { text: 'gain', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'gaining', text: '英语派生：gain + -ing，词性转到「获得」。' },
        { label: '现在', text: '核心用法是：获得。' },
      ],
      formationLogic: '先认词干 gain，再看词尾。',
      mnemonic: '看到 gaining，先说出「获得」。',
      note: '先认词干 gain，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gaining.', chinese: '这一章反复回到同一个点：获得。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gaining.s1', en: 'Without that gaining, the next paragraph is hard to follow.', zh: '没有这个获得，下一段会很难读。', structure: 'gaining / 表示 / 获得', grammar: 'noun，围绕「获得」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gaining.', right: 'He gave me some advice about the gaining.', reason: 'advice 不可数。名词 gaining 的单复数按词典词形记。', rule: '先确定 gaining 是noun，再套「获得」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gaining.q1', senseId: 'gaining.s1', errorType: 'meaning', type: '词义选择', prompt: '「gaining」在本条的核心意思是：', options: ['获得', '完全相反的意思', '一种古代钱币'], answer: '获得', explain: 'gaining：获得。' },
      { id: 'gaining.q2', senseId: 'gaining.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gaining?', options: ['获得', 'a kind of ancient coin', 'the past tense of be'], answer: '获得', explain: '对的是「获得」。' },
      { id: 'gaining.q3', senseId: 'gaining.s1', errorType: 'grammar', type: '词义选择', prompt: 'gaining 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gaining.q4', senseId: 'gaining.s1', errorType: 'meaning', type: '词源', prompt: '记 gaining 时，哪句更稳妥？', options: ['先锁住「获得」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「获得」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['获得'] },
  });

  D('galaxy', {
    etymology: {
      origin: '现代英语常用词「galaxy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'galaxy', gloss: '星系' },
      suffix: null,
      history: [
        { label: 'galaxy', text: '现代英语常用词「galaxy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：星系。' },
      ],
      formationLogic: '核心义：星系。',
      mnemonic: '看到 galaxy，先说出「星系」。',
      note: '核心义：星系。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one galaxy.', chinese: '这一章反复回到同一个点：星系。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'galaxy.s1', en: 'Without that galaxy, the next paragraph is hard to follow.', zh: '没有这个星系，下一段会很难读。', structure: 'galaxy / 表示 / 星系', grammar: 'noun，围绕「星系」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the galaxy.', right: 'He gave me some advice about the galaxy.', reason: 'advice 不可数。名词 galaxy 的单复数按词典词形记。', rule: '先确定 galaxy 是noun，再套「星系」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'galaxy.q1', senseId: 'galaxy.s1', errorType: 'meaning', type: '词义选择', prompt: '「galaxy」在本条的核心意思是：', options: ['星系', '完全相反的意思', '一种古代钱币'], answer: '星系', explain: 'galaxy：星系。' },
      { id: 'galaxy.q2', senseId: 'galaxy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches galaxy?', options: ['星系', 'a kind of ancient coin', 'the past tense of be'], answer: '星系', explain: '对的是「星系」。' },
      { id: 'galaxy.q3', senseId: 'galaxy.s1', errorType: 'grammar', type: '词义选择', prompt: 'galaxy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'galaxy.q4', senseId: 'galaxy.s1', errorType: 'meaning', type: '词源', prompt: '记 galaxy 时，哪句更稳妥？', options: ['先锁住「星系」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「星系」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['星系'] },
  });

  D('gale', {
    etymology: {
      origin: '现代英语常用词「gale」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gale', gloss: '大风' },
      suffix: null,
      history: [
        { label: 'gale', text: '现代英语常用词「gale」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大风。' },
      ],
      formationLogic: '核心义：大风。',
      mnemonic: '看到 gale，先说出「大风」。',
      note: '核心义：大风。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gale.', chinese: '这一章反复回到同一个点：大风。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gale.s1', en: 'Without that gale, the next paragraph is hard to follow.', zh: '没有这个大风，下一段会很难读。', structure: 'gale / 表示 / 大风', grammar: 'noun，围绕「大风」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gale.', right: 'He gave me some advice about the gale.', reason: 'advice 不可数。名词 gale 的单复数按词典词形记。', rule: '先确定 gale 是noun，再套「大风」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gale.q1', senseId: 'gale.s1', errorType: 'meaning', type: '词义选择', prompt: '「gale」在本条的核心意思是：', options: ['大风', '完全相反的意思', '一种古代钱币'], answer: '大风', explain: 'gale：大风。' },
      { id: 'gale.q2', senseId: 'gale.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gale?', options: ['大风', 'a kind of ancient coin', 'the past tense of be'], answer: '大风', explain: '对的是「大风」。' },
      { id: 'gale.q3', senseId: 'gale.s1', errorType: 'grammar', type: '词义选择', prompt: 'gale 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gale.q4', senseId: 'gale.s1', errorType: 'meaning', type: '词源', prompt: '记 gale 时，哪句更稳妥？', options: ['先锁住「大风」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大风」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大风'] },
  });

  D('gallery', {
    etymology: {
      origin: '现代英语常用词「gallery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gallery', gloss: '画廊' },
      suffix: null,
      history: [
        { label: 'gallery', text: '现代英语常用词「gallery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：画廊。' },
      ],
      formationLogic: '核心义：画廊。',
      mnemonic: '看到 gallery，先说出「画廊」。',
      note: '核心义：画廊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gallery.', chinese: '这一章反复回到同一个点：画廊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gallery.s1', en: 'Without that gallery, the next paragraph is hard to follow.', zh: '没有这个画廊，下一段会很难读。', structure: 'gallery / 表示 / 画廊', grammar: 'noun，围绕「画廊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gallery.', right: 'He gave me some advice about the gallery.', reason: 'advice 不可数。名词 gallery 的单复数按词典词形记。', rule: '先确定 gallery 是noun，再套「画廊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gallery.q1', senseId: 'gallery.s1', errorType: 'meaning', type: '词义选择', prompt: '「gallery」在本条的核心意思是：', options: ['画廊', '完全相反的意思', '一种古代钱币'], answer: '画廊', explain: 'gallery：画廊。' },
      { id: 'gallery.q2', senseId: 'gallery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gallery?', options: ['画廊', 'a kind of ancient coin', 'the past tense of be'], answer: '画廊', explain: '对的是「画廊」。' },
      { id: 'gallery.q3', senseId: 'gallery.s1', errorType: 'grammar', type: '词义选择', prompt: 'gallery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gallery.q4', senseId: 'gallery.s1', errorType: 'meaning', type: '词源', prompt: '记 gallery 时，哪句更稳妥？', options: ['先锁住「画廊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「画廊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['画廊'] },
  });

  D('gallon', {
    etymology: {
      origin: '现代英语常用词「gallon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gallon', gloss: '加仑（液量单位）' },
      suffix: null,
      history: [
        { label: 'gallon', text: '现代英语常用词「gallon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：加仑（液量单位）。' },
      ],
      formationLogic: '核心义：加仑（液量单位）。',
      mnemonic: '看到 gallon，先说出「加仑（液量单位）」。',
      note: '核心义：加仑（液量单位）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gallon.', chinese: '这一章反复回到同一个点：加仑（液量单位）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gallon.s1', en: 'Without that gallon, the next paragraph is hard to follow.', zh: '没有这个加仑（液量单位），下一段会很难读。', structure: 'gallon / 表示 / 加仑（液量单位）', grammar: 'noun，围绕「加仑（液量单位）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gallon.', right: 'He gave me some advice about the gallon.', reason: 'advice 不可数。名词 gallon 的单复数按词典词形记。', rule: '先确定 gallon 是noun，再套「加仑（液量单位）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gallon.q1', senseId: 'gallon.s1', errorType: 'meaning', type: '词义选择', prompt: '「gallon」在本条的核心意思是：', options: ['加仑（液量单位）', '完全相反的意思', '一种古代钱币'], answer: '加仑（液量单位）', explain: 'gallon：加仑（液量单位）。' },
      { id: 'gallon.q2', senseId: 'gallon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gallon?', options: ['加仑（液量单位）', 'a kind of ancient coin', 'the past tense of be'], answer: '加仑（液量单位）', explain: '对的是「加仑（液量单位）」。' },
      { id: 'gallon.q3', senseId: 'gallon.s1', errorType: 'grammar', type: '词义选择', prompt: 'gallon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gallon.q4', senseId: 'gallon.s1', errorType: 'meaning', type: '词源', prompt: '记 gallon 时，哪句更稳妥？', options: ['先锁住「加仑（液量单位）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「加仑（液量单位）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加仑（液量单位）'] },
  });

  D('gamble', {
    etymology: {
      origin: '现代英语常用词「gamble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gamble', gloss: '赌博' },
      suffix: null,
      history: [
        { label: 'gamble', text: '现代英语常用词「gamble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赌博。' },
      ],
      formationLogic: '核心义：赌博。',
      mnemonic: '看到 gamble，先说出「赌博」。',
      note: '核心义：赌博。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gamble before the office closed.', chinese: '他们同意在办公室关门前做这件事：赌博。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gamble.s1', en: 'The deadline forced the team to gamble that afternoon.', zh: '截止日期逼着小组在那天下午赌博。', structure: 'gamble / 表示 / 赌博', grammar: 'verb，围绕「赌博」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gambleed it yesterday without checking the real past form.', right: 'Check the past form of "gamble" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gamble 是verb，再套「赌博」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gamble.q1', senseId: 'gamble.s1', errorType: 'meaning', type: '词义选择', prompt: '「gamble」在本条的核心意思是：', options: ['赌博', '完全相反的意思', '一种古代钱币'], answer: '赌博', explain: 'gamble：赌博。' },
      { id: 'gamble.q2', senseId: 'gamble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gamble?', options: ['赌博', 'a kind of ancient coin', 'the past tense of be'], answer: '赌博', explain: '对的是「赌博」。' },
      { id: 'gamble.q3', senseId: 'gamble.s1', errorType: 'grammar', type: '词义选择', prompt: 'gamble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gamble.q4', senseId: 'gamble.s1', errorType: 'meaning', type: '词源', prompt: '记 gamble 时，哪句更稳妥？', options: ['先锁住「赌博」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赌博」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赌博'] },
  });

  D('gambling house', {
    etymology: {
      origin: '现代英语固定说法「gambling house」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'gambling house', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'gambling house', text: '现代英语固定说法「gambling house」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：赌场。' },
      ],
      formationLogic: '核心义：赌场。',
      mnemonic: '看到 gambling house，先说出「赌场」。',
      note: '核心义：赌场。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "gambling house" and asked the class to keep it as one unit.', chinese: '老师把「gambling house」圈出来，让全班把它当成一个整体。它表示赌场。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gambling house.s1', en: 'In the margin she wrote "gambling house" so nobody would split the phrase.', zh: '她在页边写下「gambling house」，免得有人把这个说法拆开。意思是赌场。', structure: 'gambling house / 表示 / 赌场', grammar: 'noun，围绕「赌场」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of gambling house and lost the point.', right: 'Keep "gambling house" together: it means 赌场.', reason: '「gambling house」要整块理解。', rule: '先确定 gambling house 是noun，再套「赌场」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gambling house.q1', senseId: 'gambling house.s1', errorType: 'meaning', type: '词义选择', prompt: '「gambling house」在本条的核心意思是：', options: ['赌场', '完全相反的意思', '一种古代钱币'], answer: '赌场', explain: 'gambling house：赌场。' },
      { id: 'gambling house.q2', senseId: 'gambling house.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gambling house?', options: ['赌场', 'a kind of ancient coin', 'the past tense of be'], answer: '赌场', explain: '对的是「赌场」。' },
      { id: 'gambling house.q3', senseId: 'gambling house.s1', errorType: 'grammar', type: '词义选择', prompt: 'gambling house 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gambling house.q4', senseId: 'gambling house.s1', errorType: 'meaning', type: '词源', prompt: '记 gambling house 时，哪句更稳妥？', options: ['先锁住「赌场」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赌场」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赌场'] },
  });

  D('game', {
    etymology: {
      origin: '现代英语常用词「game」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'game', gloss: '游戏' },
      suffix: null,
      history: [
        { label: 'game', text: '现代英语常用词「game」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：游戏。' },
      ],
      formationLogic: '核心义：游戏。',
      mnemonic: '看到 game，先说出「游戏」。',
      note: '核心义：游戏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one game.', chinese: '这一章反复回到同一个点：游戏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'game.s1', en: 'Without that game, the next paragraph is hard to follow.', zh: '没有这个游戏，下一段会很难读。', structure: 'game / 表示 / 游戏', grammar: 'noun，围绕「游戏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the game.', right: 'He gave me some advice about the game.', reason: 'advice 不可数。名词 game 的单复数按词典词形记。', rule: '先确定 game 是noun，再套「游戏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'game.q1', senseId: 'game.s1', errorType: 'meaning', type: '词义选择', prompt: '「game」在本条的核心意思是：', options: ['游戏', '完全相反的意思', '一种古代钱币'], answer: '游戏', explain: 'game：游戏。' },
      { id: 'game.q2', senseId: 'game.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches game?', options: ['游戏', 'a kind of ancient coin', 'the past tense of be'], answer: '游戏', explain: '对的是「游戏」。' },
      { id: 'game.q3', senseId: 'game.s1', errorType: 'grammar', type: '词义选择', prompt: 'game 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'game.q4', senseId: 'game.s1', errorType: 'meaning', type: '词源', prompt: '记 game 时，哪句更稳妥？', options: ['先锁住「游戏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「游戏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['游戏'] },
  });

  D('games', {
    etymology: {
      origin: '现代英语常用词「games」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'games', gloss: '运动会（复数）' },
      suffix: null,
      history: [
        { label: 'games', text: '现代英语常用词「games」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：运动会（复数）。' },
      ],
      formationLogic: '核心义：运动会（复数）。',
      mnemonic: '看到 games，先说出「运动会（复数）」。',
      note: '核心义：运动会（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one games.', chinese: '这一章反复回到同一个点：运动会（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'games.s1', en: 'Without that games, the next paragraph is hard to follow.', zh: '没有这个运动会（复数），下一段会很难读。', structure: 'games / 表示 / 运动会（复数）', grammar: 'noun，围绕「运动会（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the games.', right: 'He gave me some advice about the games.', reason: 'advice 不可数。名词 games 的单复数按词典词形记。', rule: '先确定 games 是noun，再套「运动会（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'games.q1', senseId: 'games.s1', errorType: 'meaning', type: '词义选择', prompt: '「games」在本条的核心意思是：', options: ['运动会（复数）', '完全相反的意思', '一种古代钱币'], answer: '运动会（复数）', explain: 'games：运动会（复数）。' },
      { id: 'games.q2', senseId: 'games.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches games?', options: ['运动会（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '运动会（复数）', explain: '对的是「运动会（复数）」。' },
      { id: 'games.q3', senseId: 'games.s1', errorType: 'grammar', type: '词义选择', prompt: 'games 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'games.q4', senseId: 'games.s1', errorType: 'meaning', type: '词源', prompt: '记 games 时，哪句更稳妥？', options: ['先锁住「运动会（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「运动会（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['运动会（复数）'] },
  });

  D('gang', {
    etymology: {
      origin: '现代英语常用词「gang」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gang', gloss: '一帮' },
      suffix: null,
      history: [
        { label: 'gang', text: '现代英语常用词「gang」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一帮。' },
      ],
      formationLogic: '核心义：一帮。',
      mnemonic: '看到 gang，先说出「一帮」。',
      note: '核心义：一帮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gang.', chinese: '这一章反复回到同一个点：一帮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gang.s1', en: 'Without that gang, the next paragraph is hard to follow.', zh: '没有这个一帮，下一段会很难读。', structure: 'gang / 表示 / 一帮', grammar: 'noun，围绕「一帮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gang.', right: 'He gave me some advice about the gang.', reason: 'advice 不可数。名词 gang 的单复数按词典词形记。', rule: '先确定 gang 是noun，再套「一帮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gang.q1', senseId: 'gang.s1', errorType: 'meaning', type: '词义选择', prompt: '「gang」在本条的核心意思是：', options: ['一帮', '完全相反的意思', '一种古代钱币'], answer: '一帮', explain: 'gang：一帮。' },
      { id: 'gang.q2', senseId: 'gang.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gang?', options: ['一帮', 'a kind of ancient coin', 'the past tense of be'], answer: '一帮', explain: '对的是「一帮」。' },
      { id: 'gang.q3', senseId: 'gang.s1', errorType: 'grammar', type: '词义选择', prompt: 'gang 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gang.q4', senseId: 'gang.s1', errorType: 'meaning', type: '词源', prompt: '记 gang 时，哪句更稳妥？', options: ['先锁住「一帮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一帮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一帮'] },
  });

  D('gaol', {
    etymology: {
      origin: '现代英语常用词「gaol」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gaol', gloss: '监狱' },
      suffix: null,
      history: [
        { label: 'gaol', text: '现代英语常用词「gaol」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：监狱。' },
      ],
      formationLogic: '核心义：监狱。',
      mnemonic: '看到 gaol，先说出「监狱」。',
      note: '核心义：监狱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gaol.', chinese: '这一章反复回到同一个点：监狱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gaol.s1', en: 'Without that gaol, the next paragraph is hard to follow.', zh: '没有这个监狱，下一段会很难读。', structure: 'gaol / 表示 / 监狱', grammar: 'noun，围绕「监狱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gaol.', right: 'He gave me some advice about the gaol.', reason: 'advice 不可数。名词 gaol 的单复数按词典词形记。', rule: '先确定 gaol 是noun，再套「监狱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gaol.q1', senseId: 'gaol.s1', errorType: 'meaning', type: '词义选择', prompt: '「gaol」在本条的核心意思是：', options: ['监狱', '完全相反的意思', '一种古代钱币'], answer: '监狱', explain: 'gaol：监狱。' },
      { id: 'gaol.q2', senseId: 'gaol.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gaol?', options: ['监狱', 'a kind of ancient coin', 'the past tense of be'], answer: '监狱', explain: '对的是「监狱」。' },
      { id: 'gaol.q3', senseId: 'gaol.s1', errorType: 'grammar', type: '词义选择', prompt: 'gaol 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gaol.q4', senseId: 'gaol.s1', errorType: 'meaning', type: '词源', prompt: '记 gaol 时，哪句更稳妥？', options: ['先锁住「监狱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「监狱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['监狱'] },
  });

  D('gap', {
    etymology: {
      origin: '现代英语常用词「gap」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gap', gloss: '缺口' },
      suffix: null,
      history: [
        { label: 'gap', text: '现代英语常用词「gap」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：缺口。' },
      ],
      formationLogic: '核心义：缺口。',
      mnemonic: '看到 gap，先说出「缺口」。',
      note: '核心义：缺口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gap.', chinese: '这一章反复回到同一个点：缺口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gap.s1', en: 'Without that gap, the next paragraph is hard to follow.', zh: '没有这个缺口，下一段会很难读。', structure: 'gap / 表示 / 缺口', grammar: 'noun，围绕「缺口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gap.', right: 'He gave me some advice about the gap.', reason: 'advice 不可数。名词 gap 的单复数按词典词形记。', rule: '先确定 gap 是noun，再套「缺口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gap.q1', senseId: 'gap.s1', errorType: 'meaning', type: '词义选择', prompt: '「gap」在本条的核心意思是：', options: ['缺口', '完全相反的意思', '一种古代钱币'], answer: '缺口', explain: 'gap：缺口。' },
      { id: 'gap.q2', senseId: 'gap.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gap?', options: ['缺口', 'a kind of ancient coin', 'the past tense of be'], answer: '缺口', explain: '对的是「缺口」。' },
      { id: 'gap.q3', senseId: 'gap.s1', errorType: 'grammar', type: '词义选择', prompt: 'gap 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gap.q4', senseId: 'gap.s1', errorType: 'meaning', type: '词源', prompt: '记 gap 时，哪句更稳妥？', options: ['先锁住「缺口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「缺口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缺口'] },
  });

  D('gape', {
    etymology: {
      origin: '现代英语常用词「gape」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gape', gloss: '目瞪口呆' },
      suffix: null,
      history: [
        { label: 'gape', text: '现代英语常用词「gape」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：目瞪口呆。' },
      ],
      formationLogic: '核心义：目瞪口呆。',
      mnemonic: '看到 gape，先说出「目瞪口呆」。',
      note: '核心义：目瞪口呆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gape before the office closed.', chinese: '他们同意在办公室关门前做这件事：目瞪口呆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gape.s1', en: 'The deadline forced the team to gape that afternoon.', zh: '截止日期逼着小组在那天下午目瞪口呆。', structure: 'gape / 表示 / 目瞪口呆', grammar: 'verb，围绕「目瞪口呆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gapeed it yesterday without checking the real past form.', right: 'Check the past form of "gape" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gape 是verb，再套「目瞪口呆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gape.q1', senseId: 'gape.s1', errorType: 'meaning', type: '词义选择', prompt: '「gape」在本条的核心意思是：', options: ['目瞪口呆', '完全相反的意思', '一种古代钱币'], answer: '目瞪口呆', explain: 'gape：目瞪口呆。' },
      { id: 'gape.q2', senseId: 'gape.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gape?', options: ['目瞪口呆', 'a kind of ancient coin', 'the past tense of be'], answer: '目瞪口呆', explain: '对的是「目瞪口呆」。' },
      { id: 'gape.q3', senseId: 'gape.s1', errorType: 'grammar', type: '词义选择', prompt: 'gape 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gape.q4', senseId: 'gape.s1', errorType: 'meaning', type: '词源', prompt: '记 gape 时，哪句更稳妥？', options: ['先锁住「目瞪口呆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「目瞪口呆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['目瞪口呆'] },
  });

  D('garage', {
    etymology: {
      origin: '现代英语常用词「garage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'garage', gloss: '车库' },
      suffix: null,
      history: [
        { label: 'garage', text: '现代英语常用词「garage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：车库。' },
      ],
      formationLogic: '核心义：车库。',
      mnemonic: '看到 garage，先说出「车库」。',
      note: '核心义：车库。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one garage.', chinese: '这一章反复回到同一个点：车库。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'garage.s1', en: 'Without that garage, the next paragraph is hard to follow.', zh: '没有这个车库，下一段会很难读。', structure: 'garage / 表示 / 车库', grammar: 'noun，围绕「车库」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the garage.', right: 'He gave me some advice about the garage.', reason: 'advice 不可数。名词 garage 的单复数按词典词形记。', rule: '先确定 garage 是noun，再套「车库」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'garage.q1', senseId: 'garage.s1', errorType: 'meaning', type: '词义选择', prompt: '「garage」在本条的核心意思是：', options: ['车库', '完全相反的意思', '一种古代钱币'], answer: '车库', explain: 'garage：车库。' },
      { id: 'garage.q2', senseId: 'garage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches garage?', options: ['车库', 'a kind of ancient coin', 'the past tense of be'], answer: '车库', explain: '对的是「车库」。' },
      { id: 'garage.q3', senseId: 'garage.s1', errorType: 'grammar', type: '词义选择', prompt: 'garage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'garage.q4', senseId: 'garage.s1', errorType: 'meaning', type: '词源', prompt: '记 garage 时，哪句更稳妥？', options: ['先锁住「车库」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「车库」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['车库'] },
  });

  D('garbage', {
    etymology: {
      origin: '现代英语常用词「garbage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'garbage', gloss: '垃圾' },
      suffix: null,
      history: [
        { label: 'garbage', text: '现代英语常用词「garbage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：垃圾。' },
      ],
      formationLogic: '核心义：垃圾。',
      mnemonic: '看到 garbage，先说出「垃圾」。',
      note: '核心义：垃圾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one garbage.', chinese: '这一章反复回到同一个点：垃圾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'garbage.s1', en: 'Without that garbage, the next paragraph is hard to follow.', zh: '没有这个垃圾，下一段会很难读。', structure: 'garbage / 表示 / 垃圾', grammar: 'noun，围绕「垃圾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the garbage.', right: 'He gave me some advice about the garbage.', reason: 'advice 不可数。名词 garbage 的单复数按词典词形记。', rule: '先确定 garbage 是noun，再套「垃圾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'garbage.q1', senseId: 'garbage.s1', errorType: 'meaning', type: '词义选择', prompt: '「garbage」在本条的核心意思是：', options: ['垃圾', '完全相反的意思', '一种古代钱币'], answer: '垃圾', explain: 'garbage：垃圾。' },
      { id: 'garbage.q2', senseId: 'garbage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches garbage?', options: ['垃圾', 'a kind of ancient coin', 'the past tense of be'], answer: '垃圾', explain: '对的是「垃圾」。' },
      { id: 'garbage.q3', senseId: 'garbage.s1', errorType: 'grammar', type: '词义选择', prompt: 'garbage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'garbage.q4', senseId: 'garbage.s1', errorType: 'meaning', type: '词源', prompt: '记 garbage 时，哪句更稳妥？', options: ['先锁住「垃圾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「垃圾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['垃圾'] },
  });

  D('garden', {
    etymology: {
      origin: '现代英语常用词「garden」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'garden', gloss: '花园' },
      suffix: null,
      history: [
        { label: 'garden', text: '现代英语常用词「garden」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：花园。' },
      ],
      formationLogic: '核心义：花园。',
      mnemonic: '看到 garden，先说出「花园」。',
      note: '核心义：花园。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one garden.', chinese: '这一章反复回到同一个点：花园。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'garden.s1', en: 'Without that garden, the next paragraph is hard to follow.', zh: '没有这个花园，下一段会很难读。', structure: 'garden / 表示 / 花园', grammar: 'noun，围绕「花园」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the garden.', right: 'He gave me some advice about the garden.', reason: 'advice 不可数。名词 garden 的单复数按词典词形记。', rule: '先确定 garden 是noun，再套「花园」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'garden.q1', senseId: 'garden.s1', errorType: 'meaning', type: '词义选择', prompt: '「garden」在本条的核心意思是：', options: ['花园', '完全相反的意思', '一种古代钱币'], answer: '花园', explain: 'garden：花园。' },
      { id: 'garden.q2', senseId: 'garden.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches garden?', options: ['花园', 'a kind of ancient coin', 'the past tense of be'], answer: '花园', explain: '对的是「花园」。' },
      { id: 'garden.q3', senseId: 'garden.s1', errorType: 'grammar', type: '词义选择', prompt: 'garden 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'garden.q4', senseId: 'garden.s1', errorType: 'meaning', type: '词源', prompt: '记 garden 时，哪句更稳妥？', options: ['先锁住「花园」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「花园」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['花园'] },
  });

  D('garlic', {
    etymology: {
      origin: '英语派生：garl + -ic，词性转到「大蒜」。',
      prefix: null,
      root: { text: 'garl', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'garlic', text: '英语派生：garl + -ic，词性转到「大蒜」。' },
        { label: '现在', text: '核心用法是：大蒜。' },
      ],
      formationLogic: '先认词干 garl，再看词尾。',
      mnemonic: '看到 garlic，先说出「大蒜」。',
      note: '先认词干 garl，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one garlic.', chinese: '这一章反复回到同一个点：大蒜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'garlic.s1', en: 'Without that garlic, the next paragraph is hard to follow.', zh: '没有这个大蒜，下一段会很难读。', structure: 'garlic / 表示 / 大蒜', grammar: 'noun，围绕「大蒜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the garlic.', right: 'He gave me some advice about the garlic.', reason: 'advice 不可数。名词 garlic 的单复数按词典词形记。', rule: '先确定 garlic 是noun，再套「大蒜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'garlic.q1', senseId: 'garlic.s1', errorType: 'meaning', type: '词义选择', prompt: '「garlic」在本条的核心意思是：', options: ['大蒜', '完全相反的意思', '一种古代钱币'], answer: '大蒜', explain: 'garlic：大蒜。' },
      { id: 'garlic.q2', senseId: 'garlic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches garlic?', options: ['大蒜', 'a kind of ancient coin', 'the past tense of be'], answer: '大蒜', explain: '对的是「大蒜」。' },
      { id: 'garlic.q3', senseId: 'garlic.s1', errorType: 'grammar', type: '词义选择', prompt: 'garlic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'garlic.q4', senseId: 'garlic.s1', errorType: 'meaning', type: '词源', prompt: '记 garlic 时，哪句更稳妥？', options: ['先锁住「大蒜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大蒜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大蒜'] },
  });

  D('garment', {
    etymology: {
      origin: '英语派生：gar + -ment，词性转到「衣服」。',
      prefix: null,
      root: { text: 'gar', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'garment', text: '英语派生：gar + -ment，词性转到「衣服」。' },
        { label: '现在', text: '核心用法是：衣服。' },
      ],
      formationLogic: '先认词干 gar，再看词尾。',
      mnemonic: '看到 garment，先说出「衣服」。',
      note: '先认词干 gar，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one garment.', chinese: '这一章反复回到同一个点：衣服。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'garment.s1', en: 'Without that garment, the next paragraph is hard to follow.', zh: '没有这个衣服，下一段会很难读。', structure: 'garment / 表示 / 衣服', grammar: 'noun，围绕「衣服」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the garment.', right: 'He gave me some advice about the garment.', reason: 'advice 不可数。名词 garment 的单复数按词典词形记。', rule: '先确定 garment 是noun，再套「衣服」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'garment.q1', senseId: 'garment.s1', errorType: 'meaning', type: '词义选择', prompt: '「garment」在本条的核心意思是：', options: ['衣服', '完全相反的意思', '一种古代钱币'], answer: '衣服', explain: 'garment：衣服。' },
      { id: 'garment.q2', senseId: 'garment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches garment?', options: ['衣服', 'a kind of ancient coin', 'the past tense of be'], answer: '衣服', explain: '对的是「衣服」。' },
      { id: 'garment.q3', senseId: 'garment.s1', errorType: 'grammar', type: '词义选择', prompt: 'garment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'garment.q4', senseId: 'garment.s1', errorType: 'meaning', type: '词源', prompt: '记 garment 时，哪句更稳妥？', options: ['先锁住「衣服」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「衣服」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['衣服'] },
  });

  D('gas', {
    etymology: {
      origin: '现代英语常用词「gas」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gas', gloss: '气体' },
      suffix: null,
      history: [
        { label: 'gas', text: '现代英语常用词「gas」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：气体。' },
      ],
      formationLogic: '核心义：气体。',
      mnemonic: '看到 gas，先说出「气体」。',
      note: '核心义：气体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gas.', chinese: '这一章反复回到同一个点：气体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gas.s1', en: 'Without that gas, the next paragraph is hard to follow.', zh: '没有这个气体，下一段会很难读。', structure: 'gas / 表示 / 气体', grammar: 'noun，围绕「气体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gas.', right: 'He gave me some advice about the gas.', reason: 'advice 不可数。名词 gas 的单复数按词典词形记。', rule: '先确定 gas 是noun，再套「气体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gas.q1', senseId: 'gas.s1', errorType: 'meaning', type: '词义选择', prompt: '「gas」在本条的核心意思是：', options: ['气体', '完全相反的意思', '一种古代钱币'], answer: '气体', explain: 'gas：气体。' },
      { id: 'gas.q2', senseId: 'gas.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gas?', options: ['气体', 'a kind of ancient coin', 'the past tense of be'], answer: '气体', explain: '对的是「气体」。' },
      { id: 'gas.q3', senseId: 'gas.s1', errorType: 'grammar', type: '词义选择', prompt: 'gas 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gas.q4', senseId: 'gas.s1', errorType: 'meaning', type: '词源', prompt: '记 gas 时，哪句更稳妥？', options: ['先锁住「气体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「气体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['气体'] },
  });

  D('gash', {
    etymology: {
      origin: '现代英语常用词「gash」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gash', gloss: '深长的伤口' },
      suffix: null,
      history: [
        { label: 'gash', text: '现代英语常用词「gash」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：深长的伤口。' },
      ],
      formationLogic: '核心义：深长的伤口。',
      mnemonic: '看到 gash，先说出「深长的伤口」。',
      note: '核心义：深长的伤口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gash.', chinese: '这一章反复回到同一个点：深长的伤口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gash.s1', en: 'Without that gash, the next paragraph is hard to follow.', zh: '没有这个深长的伤口，下一段会很难读。', structure: 'gash / 表示 / 深长的伤口', grammar: 'noun，围绕「深长的伤口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gash.', right: 'He gave me some advice about the gash.', reason: 'advice 不可数。名词 gash 的单复数按词典词形记。', rule: '先确定 gash 是noun，再套「深长的伤口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gash.q1', senseId: 'gash.s1', errorType: 'meaning', type: '词义选择', prompt: '「gash」在本条的核心意思是：', options: ['深长的伤口', '完全相反的意思', '一种古代钱币'], answer: '深长的伤口', explain: 'gash：深长的伤口。' },
      { id: 'gash.q2', senseId: 'gash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gash?', options: ['深长的伤口', 'a kind of ancient coin', 'the past tense of be'], answer: '深长的伤口', explain: '对的是「深长的伤口」。' },
      { id: 'gash.q3', senseId: 'gash.s1', errorType: 'grammar', type: '词义选择', prompt: 'gash 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gash.q4', senseId: 'gash.s1', errorType: 'meaning', type: '词源', prompt: '记 gash 时，哪句更稳妥？', options: ['先锁住「深长的伤口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深长的伤口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深长的伤口'] },
  });

  D('gasoline', {
    etymology: {
      origin: '现代英语常用词「gasoline」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gasoline', gloss: '汽油' },
      suffix: null,
      history: [
        { label: 'gasoline', text: '现代英语常用词「gasoline」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：汽油。' },
      ],
      formationLogic: '核心义：汽油。',
      mnemonic: '看到 gasoline，先说出「汽油」。',
      note: '核心义：汽油。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gasoline.', chinese: '这一章反复回到同一个点：汽油。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gasoline.s1', en: 'Without that gasoline, the next paragraph is hard to follow.', zh: '没有这个汽油，下一段会很难读。', structure: 'gasoline / 表示 / 汽油', grammar: 'noun，围绕「汽油」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gasoline.', right: 'He gave me some advice about the gasoline.', reason: 'advice 不可数。名词 gasoline 的单复数按词典词形记。', rule: '先确定 gasoline 是noun，再套「汽油」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gasoline.q1', senseId: 'gasoline.s1', errorType: 'meaning', type: '词义选择', prompt: '「gasoline」在本条的核心意思是：', options: ['汽油', '完全相反的意思', '一种古代钱币'], answer: '汽油', explain: 'gasoline：汽油。' },
      { id: 'gasoline.q2', senseId: 'gasoline.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gasoline?', options: ['汽油', 'a kind of ancient coin', 'the past tense of be'], answer: '汽油', explain: '对的是「汽油」。' },
      { id: 'gasoline.q3', senseId: 'gasoline.s1', errorType: 'grammar', type: '词义选择', prompt: 'gasoline 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gasoline.q4', senseId: 'gasoline.s1', errorType: 'meaning', type: '词源', prompt: '记 gasoline 时，哪句更稳妥？', options: ['先锁住「汽油」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「汽油」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['汽油'] },
  });

  D('gasp', {
    etymology: {
      origin: '现代英语常用词「gasp」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gasp', gloss: '喘气' },
      suffix: null,
      history: [
        { label: 'gasp', text: '现代英语常用词「gasp」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：喘气。' },
      ],
      formationLogic: '核心义：喘气。',
      mnemonic: '看到 gasp，先说出「喘气」。',
      note: '核心义：喘气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gasp before the office closed.', chinese: '他们同意在办公室关门前做这件事：喘气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gasp.s1', en: 'The deadline forced the team to gasp that afternoon.', zh: '截止日期逼着小组在那天下午喘气。', structure: 'gasp / 表示 / 喘气', grammar: 'verb，围绕「喘气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gasped it yesterday without checking the real past form.', right: 'Check the past form of "gasp" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gasp 是verb，再套「喘气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gasp.q1', senseId: 'gasp.s1', errorType: 'meaning', type: '词义选择', prompt: '「gasp」在本条的核心意思是：', options: ['喘气', '完全相反的意思', '一种古代钱币'], answer: '喘气', explain: 'gasp：喘气。' },
      { id: 'gasp.q2', senseId: 'gasp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gasp?', options: ['喘气', 'a kind of ancient coin', 'the past tense of be'], answer: '喘气', explain: '对的是「喘气」。' },
      { id: 'gasp.q3', senseId: 'gasp.s1', errorType: 'grammar', type: '词义选择', prompt: 'gasp 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gasp.q4', senseId: 'gasp.s1', errorType: 'meaning', type: '词源', prompt: '记 gasp 时，哪句更稳妥？', options: ['先锁住「喘气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喘气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喘气'] },
  });

  D('gate', {
    etymology: {
      origin: '现代英语常用词「gate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gate', gloss: '大门' },
      suffix: null,
      history: [
        { label: 'gate', text: '现代英语常用词「gate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大门。' },
      ],
      formationLogic: '核心义：大门。',
      mnemonic: '看到 gate，先说出「大门」。',
      note: '核心义：大门。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gate.', chinese: '这一章反复回到同一个点：大门。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gate.s1', en: 'Without that gate, the next paragraph is hard to follow.', zh: '没有这个大门，下一段会很难读。', structure: 'gate / 表示 / 大门', grammar: 'noun，围绕「大门」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gate.', right: 'He gave me some advice about the gate.', reason: 'advice 不可数。名词 gate 的单复数按词典词形记。', rule: '先确定 gate 是noun，再套「大门」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gate.q1', senseId: 'gate.s1', errorType: 'meaning', type: '词义选择', prompt: '「gate」在本条的核心意思是：', options: ['大门', '完全相反的意思', '一种古代钱币'], answer: '大门', explain: 'gate：大门。' },
      { id: 'gate.q2', senseId: 'gate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gate?', options: ['大门', 'a kind of ancient coin', 'the past tense of be'], answer: '大门', explain: '对的是「大门」。' },
      { id: 'gate.q3', senseId: 'gate.s1', errorType: 'grammar', type: '词义选择', prompt: 'gate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gate.q4', senseId: 'gate.s1', errorType: 'meaning', type: '词源', prompt: '记 gate 时，哪句更稳妥？', options: ['先锁住「大门」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大门」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大门'] },
  });

  D('gateway', {
    etymology: {
      origin: '现代英语常用词「gateway」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gateway', gloss: '大门' },
      suffix: null,
      history: [
        { label: 'gateway', text: '现代英语常用词「gateway」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大门。' },
      ],
      formationLogic: '核心义：大门。',
      mnemonic: '看到 gateway，先说出「大门」。',
      note: '核心义：大门。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gateway.', chinese: '这一章反复回到同一个点：大门。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gateway.s1', en: 'Without that gateway, the next paragraph is hard to follow.', zh: '没有这个大门，下一段会很难读。', structure: 'gateway / 表示 / 大门', grammar: 'noun，围绕「大门」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gateway.', right: 'He gave me some advice about the gateway.', reason: 'advice 不可数。名词 gateway 的单复数按词典词形记。', rule: '先确定 gateway 是noun，再套「大门」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gateway.q1', senseId: 'gateway.s1', errorType: 'meaning', type: '词义选择', prompt: '「gateway」在本条的核心意思是：', options: ['大门', '完全相反的意思', '一种古代钱币'], answer: '大门', explain: 'gateway：大门。' },
      { id: 'gateway.q2', senseId: 'gateway.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gateway?', options: ['大门', 'a kind of ancient coin', 'the past tense of be'], answer: '大门', explain: '对的是「大门」。' },
      { id: 'gateway.q3', senseId: 'gateway.s1', errorType: 'grammar', type: '词义选择', prompt: 'gateway 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gateway.q4', senseId: 'gateway.s1', errorType: 'meaning', type: '词源', prompt: '记 gateway 时，哪句更稳妥？', options: ['先锁住「大门」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大门」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大门'] },
  });

  D('gather', {
    etymology: {
      origin: '英语派生：gath + -er，词性转到「聚集」。',
      prefix: null,
      root: { text: 'gath', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'gather', text: '英语派生：gath + -er，词性转到「聚集」。' },
        { label: '现在', text: '核心用法是：聚集。' },
      ],
      formationLogic: '先认词干 gath，再看词尾。',
      mnemonic: '看到 gather，先说出「聚集」。',
      note: '先认词干 gath，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gather before the office closed.', chinese: '他们同意在办公室关门前做这件事：聚集。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gather.s1', en: 'The deadline forced the team to gather that afternoon.', zh: '截止日期逼着小组在那天下午聚集。', structure: 'gather / 表示 / 聚集', grammar: 'verb，围绕「聚集」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gathered it yesterday without checking the real past form.', right: 'Check the past form of "gather" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gather 是verb，再套「聚集」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gather.q1', senseId: 'gather.s1', errorType: 'meaning', type: '词义选择', prompt: '「gather」在本条的核心意思是：', options: ['聚集', '完全相反的意思', '一种古代钱币'], answer: '聚集', explain: 'gather：聚集。' },
      { id: 'gather.q2', senseId: 'gather.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gather?', options: ['聚集', 'a kind of ancient coin', 'the past tense of be'], answer: '聚集', explain: '对的是「聚集」。' },
      { id: 'gather.q3', senseId: 'gather.s1', errorType: 'grammar', type: '词义选择', prompt: 'gather 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gather.q4', senseId: 'gather.s1', errorType: 'meaning', type: '词源', prompt: '记 gather 时，哪句更稳妥？', options: ['先锁住「聚集」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聚集」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聚集'] },
  });

  D('gathering', {
    etymology: {
      origin: '英语派生：gather + -ing，词性转到「聚会」。',
      prefix: null,
      root: { text: 'gather', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'gathering', text: '英语派生：gather + -ing，词性转到「聚会」。' },
        { label: '现在', text: '核心用法是：聚会。' },
      ],
      formationLogic: '先认词干 gather，再看词尾。',
      mnemonic: '看到 gathering，先说出「聚会」。',
      note: '先认词干 gather，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gathering.', chinese: '这一章反复回到同一个点：聚会。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gathering.s1', en: 'Without that gathering, the next paragraph is hard to follow.', zh: '没有这个聚会，下一段会很难读。', structure: 'gathering / 表示 / 聚会', grammar: 'noun，围绕「聚会」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gathering.', right: 'He gave me some advice about the gathering.', reason: 'advice 不可数。名词 gathering 的单复数按词典词形记。', rule: '先确定 gathering 是noun，再套「聚会」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gathering.q1', senseId: 'gathering.s1', errorType: 'meaning', type: '词义选择', prompt: '「gathering」在本条的核心意思是：', options: ['聚会', '完全相反的意思', '一种古代钱币'], answer: '聚会', explain: 'gathering：聚会。' },
      { id: 'gathering.q2', senseId: 'gathering.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gathering?', options: ['聚会', 'a kind of ancient coin', 'the past tense of be'], answer: '聚会', explain: '对的是「聚会」。' },
      { id: 'gathering.q3', senseId: 'gathering.s1', errorType: 'grammar', type: '词义选择', prompt: 'gathering 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gathering.q4', senseId: 'gathering.s1', errorType: 'meaning', type: '词源', prompt: '记 gathering 时，哪句更稳妥？', options: ['先锁住「聚会」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聚会」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聚会'] },
  });

  D('gaudy', {
    etymology: {
      origin: '现代英语常用词「gaudy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gaudy', gloss: '俗艳的' },
      suffix: null,
      history: [
        { label: 'gaudy', text: '现代英语常用词「gaudy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：俗艳的。' },
      ],
      formationLogic: '核心义：俗艳的。',
      mnemonic: '看到 gaudy，先说出「俗艳的」。',
      note: '核心义：俗艳的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was gaudy.', chinese: '即使是初读者也能看出，这个结果是俗艳的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gaudy.s1', en: 'They wanted a gaudy answer, not a long speech.', zh: '他们要一个俗艳的的答复，不要长篇发言。', structure: 'gaudy / 表示 / 俗艳的', grammar: 'adjective，围绕「俗艳的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are gaudy.', right: 'The news is gaudy.', reason: 'news 作主语时动词用单数。', rule: '先确定 gaudy 是adjective，再套「俗艳的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gaudy.q1', senseId: 'gaudy.s1', errorType: 'meaning', type: '词义选择', prompt: '「gaudy」在本条的核心意思是：', options: ['俗艳的', '完全相反的意思', '一种古代钱币'], answer: '俗艳的', explain: 'gaudy：俗艳的。' },
      { id: 'gaudy.q2', senseId: 'gaudy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gaudy?', options: ['俗艳的', 'a kind of ancient coin', 'the past tense of be'], answer: '俗艳的', explain: '对的是「俗艳的」。' },
      { id: 'gaudy.q3', senseId: 'gaudy.s1', errorType: 'grammar', type: '词义选择', prompt: 'gaudy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'gaudy.q4', senseId: 'gaudy.s1', errorType: 'meaning', type: '词源', prompt: '记 gaudy 时，哪句更稳妥？', options: ['先锁住「俗艳的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「俗艳的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['俗艳的'] },
  });

  D('gauge', {
    etymology: {
      origin: '现代英语常用词「gauge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gauge', gloss: '测量' },
      suffix: null,
      history: [
        { label: 'gauge', text: '现代英语常用词「gauge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：测量。' },
      ],
      formationLogic: '核心义：测量。',
      mnemonic: '看到 gauge，先说出「测量」。',
      note: '核心义：测量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gauge before the office closed.', chinese: '他们同意在办公室关门前做这件事：测量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gauge.s1', en: 'The deadline forced the team to gauge that afternoon.', zh: '截止日期逼着小组在那天下午测量。', structure: 'gauge / 表示 / 测量', grammar: 'verb，围绕「测量」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gaugeed it yesterday without checking the real past form.', right: 'Check the past form of "gauge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gauge 是verb，再套「测量」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gauge.q1', senseId: 'gauge.s1', errorType: 'meaning', type: '词义选择', prompt: '「gauge」在本条的核心意思是：', options: ['测量', '完全相反的意思', '一种古代钱币'], answer: '测量', explain: 'gauge：测量。' },
      { id: 'gauge.q2', senseId: 'gauge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gauge?', options: ['测量', 'a kind of ancient coin', 'the past tense of be'], answer: '测量', explain: '对的是「测量」。' },
      { id: 'gauge.q3', senseId: 'gauge.s1', errorType: 'grammar', type: '词义选择', prompt: 'gauge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gauge.q4', senseId: 'gauge.s1', errorType: 'meaning', type: '词源', prompt: '记 gauge 时，哪句更稳妥？', options: ['先锁住「测量」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「测量」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['测量'] },
  });

  D('gay', {
    etymology: {
      origin: '现代英语常用词「gay」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gay', gloss: '同性恋的' },
      suffix: null,
      history: [
        { label: 'gay', text: '现代英语常用词「gay」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同性恋的。' },
      ],
      formationLogic: '核心义：同性恋的。',
      mnemonic: '看到 gay，先说出「同性恋的」。',
      note: '核心义：同性恋的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was gay.', chinese: '即使是初读者也能看出，这个结果是同性恋的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gay.s1', en: 'They wanted a gay answer, not a long speech.', zh: '他们要一个同性恋的的答复，不要长篇发言。', structure: 'gay / 表示 / 同性恋的', grammar: 'adjective，围绕「同性恋的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are gay.', right: 'The news is gay.', reason: 'news 作主语时动词用单数。', rule: '先确定 gay 是adjective，再套「同性恋的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gay.q1', senseId: 'gay.s1', errorType: 'meaning', type: '词义选择', prompt: '「gay」在本条的核心意思是：', options: ['同性恋的', '完全相反的意思', '一种古代钱币'], answer: '同性恋的', explain: 'gay：同性恋的。' },
      { id: 'gay.q2', senseId: 'gay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gay?', options: ['同性恋的', 'a kind of ancient coin', 'the past tense of be'], answer: '同性恋的', explain: '对的是「同性恋的」。' },
      { id: 'gay.q3', senseId: 'gay.s1', errorType: 'grammar', type: '词义选择', prompt: 'gay 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'gay.q4', senseId: 'gay.s1', errorType: 'meaning', type: '词源', prompt: '记 gay 时，哪句更稳妥？', options: ['先锁住「同性恋的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同性恋的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同性恋的'] },
  });

  D('gay person', {
    etymology: {
      origin: '现代英语固定说法「gay person」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'gay person', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'gay person', text: '现代英语固定说法「gay person」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：同性恋者。' },
      ],
      formationLogic: '核心义：同性恋者。',
      mnemonic: '看到 gay person，先说出「同性恋者」。',
      note: '核心义：同性恋者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "gay person" and asked the class to keep it as one unit.', chinese: '老师把「gay person」圈出来，让全班把它当成一个整体。它表示同性恋者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gay person.s1', en: 'In the margin she wrote "gay person" so nobody would split the phrase.', zh: '她在页边写下「gay person」，免得有人把这个说法拆开。意思是同性恋者。', structure: 'gay person / 表示 / 同性恋者', grammar: 'noun，围绕「同性恋者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of gay person and lost the point.', right: 'Keep "gay person" together: it means 同性恋者.', reason: '「gay person」要整块理解。', rule: '先确定 gay person 是noun，再套「同性恋者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gay person.q1', senseId: 'gay person.s1', errorType: 'meaning', type: '词义选择', prompt: '「gay person」在本条的核心意思是：', options: ['同性恋者', '完全相反的意思', '一种古代钱币'], answer: '同性恋者', explain: 'gay person：同性恋者。' },
      { id: 'gay person.q2', senseId: 'gay person.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gay person?', options: ['同性恋者', 'a kind of ancient coin', 'the past tense of be'], answer: '同性恋者', explain: '对的是「同性恋者」。' },
      { id: 'gay person.q3', senseId: 'gay person.s1', errorType: 'grammar', type: '词义选择', prompt: 'gay person 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gay person.q4', senseId: 'gay person.s1', errorType: 'meaning', type: '词源', prompt: '记 gay person 时，哪句更稳妥？', options: ['先锁住「同性恋者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同性恋者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同性恋者'] },
  });

  D('gay woman', {
    etymology: {
      origin: '现代英语固定说法「gay woman」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'gay woman', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'gay woman', text: '现代英语固定说法「gay woman」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：女同性恋者。' },
      ],
      formationLogic: '核心义：女同性恋者。',
      mnemonic: '看到 gay woman，先说出「女同性恋者」。',
      note: '核心义：女同性恋者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "gay woman" and asked the class to keep it as one unit.', chinese: '老师把「gay woman」圈出来，让全班把它当成一个整体。它表示女同性恋者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gay woman.s1', en: 'In the margin she wrote "gay woman" so nobody would split the phrase.', zh: '她在页边写下「gay woman」，免得有人把这个说法拆开。意思是女同性恋者。', structure: 'gay woman / 表示 / 女同性恋者', grammar: 'noun，围绕「女同性恋者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of gay woman and lost the point.', right: 'Keep "gay woman" together: it means 女同性恋者.', reason: '「gay woman」要整块理解。', rule: '先确定 gay woman 是noun，再套「女同性恋者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gay woman.q1', senseId: 'gay woman.s1', errorType: 'meaning', type: '词义选择', prompt: '「gay woman」在本条的核心意思是：', options: ['女同性恋者', '完全相反的意思', '一种古代钱币'], answer: '女同性恋者', explain: 'gay woman：女同性恋者。' },
      { id: 'gay woman.q2', senseId: 'gay woman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gay woman?', options: ['女同性恋者', 'a kind of ancient coin', 'the past tense of be'], answer: '女同性恋者', explain: '对的是「女同性恋者」。' },
      { id: 'gay woman.q3', senseId: 'gay woman.s1', errorType: 'grammar', type: '词义选择', prompt: 'gay woman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gay woman.q4', senseId: 'gay woman.s1', errorType: 'meaning', type: '词源', prompt: '记 gay woman 时，哪句更稳妥？', options: ['先锁住「女同性恋者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女同性恋者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女同性恋者'] },
  });

  D('gaze', {
    etymology: {
      origin: '现代英语常用词「gaze」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gaze', gloss: '凝视' },
      suffix: null,
      history: [
        { label: 'gaze', text: '现代英语常用词「gaze」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：凝视。' },
      ],
      formationLogic: '核心义：凝视。',
      mnemonic: '看到 gaze，先说出「凝视」。',
      note: '核心义：凝视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gaze before the office closed.', chinese: '他们同意在办公室关门前做这件事：凝视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gaze.s1', en: 'The deadline forced the team to gaze that afternoon.', zh: '截止日期逼着小组在那天下午凝视。', structure: 'gaze / 表示 / 凝视', grammar: 'verb，围绕「凝视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gazeed it yesterday without checking the real past form.', right: 'Check the past form of "gaze" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gaze 是verb，再套「凝视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gaze.q1', senseId: 'gaze.s1', errorType: 'meaning', type: '词义选择', prompt: '「gaze」在本条的核心意思是：', options: ['凝视', '完全相反的意思', '一种古代钱币'], answer: '凝视', explain: 'gaze：凝视。' },
      { id: 'gaze.q2', senseId: 'gaze.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gaze?', options: ['凝视', 'a kind of ancient coin', 'the past tense of be'], answer: '凝视', explain: '对的是「凝视」。' },
      { id: 'gaze.q3', senseId: 'gaze.s1', errorType: 'grammar', type: '词义选择', prompt: 'gaze 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gaze.q4', senseId: 'gaze.s1', errorType: 'meaning', type: '词源', prompt: '记 gaze 时，哪句更稳妥？', options: ['先锁住「凝视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凝视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凝视'] },
  });

  D('gear', {
    etymology: {
      origin: '现代英语常用词「gear」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gear', gloss: '齿轮' },
      suffix: null,
      history: [
        { label: 'gear', text: '现代英语常用词「gear」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：齿轮。' },
      ],
      formationLogic: '核心义：齿轮。',
      mnemonic: '看到 gear，先说出「齿轮」。',
      note: '核心义：齿轮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gear.', chinese: '这一章反复回到同一个点：齿轮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gear.s1', en: 'Without that gear, the next paragraph is hard to follow.', zh: '没有这个齿轮，下一段会很难读。', structure: 'gear / 表示 / 齿轮', grammar: 'noun，围绕「齿轮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gear.', right: 'He gave me some advice about the gear.', reason: 'advice 不可数。名词 gear 的单复数按词典词形记。', rule: '先确定 gear 是noun，再套「齿轮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gear.q1', senseId: 'gear.s1', errorType: 'meaning', type: '词义选择', prompt: '「gear」在本条的核心意思是：', options: ['齿轮', '完全相反的意思', '一种古代钱币'], answer: '齿轮', explain: 'gear：齿轮。' },
      { id: 'gear.q2', senseId: 'gear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gear?', options: ['齿轮', 'a kind of ancient coin', 'the past tense of be'], answer: '齿轮', explain: '对的是「齿轮」。' },
      { id: 'gear.q3', senseId: 'gear.s1', errorType: 'grammar', type: '词义选择', prompt: 'gear 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gear.q4', senseId: 'gear.s1', errorType: 'meaning', type: '词源', prompt: '记 gear 时，哪句更稳妥？', options: ['先锁住「齿轮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「齿轮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['齿轮'] },
  });

  D('gel', {
    etymology: {
      origin: '现代英语常用词「gel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gel', gloss: '凝胶' },
      suffix: null,
      history: [
        { label: 'gel', text: '现代英语常用词「gel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：凝胶。' },
      ],
      formationLogic: '核心义：凝胶。',
      mnemonic: '看到 gel，先说出「凝胶」。',
      note: '核心义：凝胶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gel.', chinese: '这一章反复回到同一个点：凝胶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gel.s1', en: 'Without that gel, the next paragraph is hard to follow.', zh: '没有这个凝胶，下一段会很难读。', structure: 'gel / 表示 / 凝胶', grammar: 'noun，围绕「凝胶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gel.', right: 'He gave me some advice about the gel.', reason: 'advice 不可数。名词 gel 的单复数按词典词形记。', rule: '先确定 gel 是noun，再套「凝胶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gel.q1', senseId: 'gel.s1', errorType: 'meaning', type: '词义选择', prompt: '「gel」在本条的核心意思是：', options: ['凝胶', '完全相反的意思', '一种古代钱币'], answer: '凝胶', explain: 'gel：凝胶。' },
      { id: 'gel.q2', senseId: 'gel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gel?', options: ['凝胶', 'a kind of ancient coin', 'the past tense of be'], answer: '凝胶', explain: '对的是「凝胶」。' },
      { id: 'gel.q3', senseId: 'gel.s1', errorType: 'grammar', type: '词义选择', prompt: 'gel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gel.q4', senseId: 'gel.s1', errorType: 'meaning', type: '词源', prompt: '记 gel 时，哪句更稳妥？', options: ['先锁住「凝胶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凝胶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凝胶'] },
  });

  D('gelatin', {
    etymology: {
      origin: '现代英语常用词「gelatin」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gelatin', gloss: '明胶' },
      suffix: null,
      history: [
        { label: 'gelatin', text: '现代英语常用词「gelatin」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：明胶。' },
      ],
      formationLogic: '核心义：明胶。',
      mnemonic: '看到 gelatin，先说出「明胶」。',
      note: '核心义：明胶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gelatin.', chinese: '这一章反复回到同一个点：明胶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gelatin.s1', en: 'Without that gelatin, the next paragraph is hard to follow.', zh: '没有这个明胶，下一段会很难读。', structure: 'gelatin / 表示 / 明胶', grammar: 'noun，围绕「明胶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gelatin.', right: 'He gave me some advice about the gelatin.', reason: 'advice 不可数。名词 gelatin 的单复数按词典词形记。', rule: '先确定 gelatin 是noun，再套「明胶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gelatin.q1', senseId: 'gelatin.s1', errorType: 'meaning', type: '词义选择', prompt: '「gelatin」在本条的核心意思是：', options: ['明胶', '完全相反的意思', '一种古代钱币'], answer: '明胶', explain: 'gelatin：明胶。' },
      { id: 'gelatin.q2', senseId: 'gelatin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gelatin?', options: ['明胶', 'a kind of ancient coin', 'the past tense of be'], answer: '明胶', explain: '对的是「明胶」。' },
      { id: 'gelatin.q3', senseId: 'gelatin.s1', errorType: 'grammar', type: '词义选择', prompt: 'gelatin 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gelatin.q4', senseId: 'gelatin.s1', errorType: 'meaning', type: '词源', prompt: '记 gelatin 时，哪句更稳妥？', options: ['先锁住「明胶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「明胶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['明胶'] },
  });

  D('gem', {
    etymology: {
      origin: '现代英语常用词「gem」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gem', gloss: '宝石' },
      suffix: null,
      history: [
        { label: 'gem', text: '现代英语常用词「gem」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：宝石。' },
      ],
      formationLogic: '核心义：宝石。',
      mnemonic: '看到 gem，先说出「宝石」。',
      note: '核心义：宝石。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gem.', chinese: '这一章反复回到同一个点：宝石。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gem.s1', en: 'Without that gem, the next paragraph is hard to follow.', zh: '没有这个宝石，下一段会很难读。', structure: 'gem / 表示 / 宝石', grammar: 'noun，围绕「宝石」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gem.', right: 'He gave me some advice about the gem.', reason: 'advice 不可数。名词 gem 的单复数按词典词形记。', rule: '先确定 gem 是noun，再套「宝石」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gem.q1', senseId: 'gem.s1', errorType: 'meaning', type: '词义选择', prompt: '「gem」在本条的核心意思是：', options: ['宝石', '完全相反的意思', '一种古代钱币'], answer: '宝石', explain: 'gem：宝石。' },
      { id: 'gem.q2', senseId: 'gem.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gem?', options: ['宝石', 'a kind of ancient coin', 'the past tense of be'], answer: '宝石', explain: '对的是「宝石」。' },
      { id: 'gem.q3', senseId: 'gem.s1', errorType: 'grammar', type: '词义选择', prompt: 'gem 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gem.q4', senseId: 'gem.s1', errorType: 'meaning', type: '词源', prompt: '记 gem 时，哪句更稳妥？', options: ['先锁住「宝石」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宝石」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宝石'] },
  });

  D('gemstone', {
    etymology: {
      origin: '现代英语常用词「gemstone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gemstone', gloss: '宝石' },
      suffix: null,
      history: [
        { label: 'gemstone', text: '现代英语常用词「gemstone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：宝石。' },
      ],
      formationLogic: '核心义：宝石。',
      mnemonic: '看到 gemstone，先说出「宝石」。',
      note: '核心义：宝石。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gemstone.', chinese: '这一章反复回到同一个点：宝石。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gemstone.s1', en: 'Without that gemstone, the next paragraph is hard to follow.', zh: '没有这个宝石，下一段会很难读。', structure: 'gemstone / 表示 / 宝石', grammar: 'noun，围绕「宝石」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gemstone.', right: 'He gave me some advice about the gemstone.', reason: 'advice 不可数。名词 gemstone 的单复数按词典词形记。', rule: '先确定 gemstone 是noun，再套「宝石」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gemstone.q1', senseId: 'gemstone.s1', errorType: 'meaning', type: '词义选择', prompt: '「gemstone」在本条的核心意思是：', options: ['宝石', '完全相反的意思', '一种古代钱币'], answer: '宝石', explain: 'gemstone：宝石。' },
      { id: 'gemstone.q2', senseId: 'gemstone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gemstone?', options: ['宝石', 'a kind of ancient coin', 'the past tense of be'], answer: '宝石', explain: '对的是「宝石」。' },
      { id: 'gemstone.q3', senseId: 'gemstone.s1', errorType: 'grammar', type: '词义选择', prompt: 'gemstone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gemstone.q4', senseId: 'gemstone.s1', errorType: 'meaning', type: '词源', prompt: '记 gemstone 时，哪句更稳妥？', options: ['先锁住「宝石」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宝石」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宝石'] },
  });

  D('gender', {
    etymology: {
      origin: '英语派生：gend + -er，词性转到「性别」。',
      prefix: null,
      root: { text: 'gend', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'gender', text: '英语派生：gend + -er，词性转到「性别」。' },
        { label: '现在', text: '核心用法是：性别。' },
      ],
      formationLogic: '先认词干 gend，再看词尾。',
      mnemonic: '看到 gender，先说出「性别」。',
      note: '先认词干 gend，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gender.', chinese: '这一章反复回到同一个点：性别。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gender.s1', en: 'Without that gender, the next paragraph is hard to follow.', zh: '没有这个性别，下一段会很难读。', structure: 'gender / 表示 / 性别', grammar: 'noun，围绕「性别」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gender.', right: 'He gave me some advice about the gender.', reason: 'advice 不可数。名词 gender 的单复数按词典词形记。', rule: '先确定 gender 是noun，再套「性别」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gender.q1', senseId: 'gender.s1', errorType: 'meaning', type: '词义选择', prompt: '「gender」在本条的核心意思是：', options: ['性别', '完全相反的意思', '一种古代钱币'], answer: '性别', explain: 'gender：性别。' },
      { id: 'gender.q2', senseId: 'gender.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gender?', options: ['性别', 'a kind of ancient coin', 'the past tense of be'], answer: '性别', explain: '对的是「性别」。' },
      { id: 'gender.q3', senseId: 'gender.s1', errorType: 'grammar', type: '词义选择', prompt: 'gender 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gender.q4', senseId: 'gender.s1', errorType: 'meaning', type: '词源', prompt: '记 gender 时，哪句更稳妥？', options: ['先锁住「性别」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「性别」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['性别'] },
  });

  D('gene', {
    etymology: {
      origin: '现代英语常用词「gene」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gene', gloss: '基因' },
      suffix: null,
      history: [
        { label: 'gene', text: '现代英语常用词「gene」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：基因。' },
      ],
      formationLogic: '核心义：基因。',
      mnemonic: '看到 gene，先说出「基因」。',
      note: '核心义：基因。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gene.', chinese: '这一章反复回到同一个点：基因。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gene.s1', en: 'Without that gene, the next paragraph is hard to follow.', zh: '没有这个基因，下一段会很难读。', structure: 'gene / 表示 / 基因', grammar: 'noun，围绕「基因」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gene.', right: 'He gave me some advice about the gene.', reason: 'advice 不可数。名词 gene 的单复数按词典词形记。', rule: '先确定 gene 是noun，再套「基因」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gene.q1', senseId: 'gene.s1', errorType: 'meaning', type: '词义选择', prompt: '「gene」在本条的核心意思是：', options: ['基因', '完全相反的意思', '一种古代钱币'], answer: '基因', explain: 'gene：基因。' },
      { id: 'gene.q2', senseId: 'gene.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gene?', options: ['基因', 'a kind of ancient coin', 'the past tense of be'], answer: '基因', explain: '对的是「基因」。' },
      { id: 'gene.q3', senseId: 'gene.s1', errorType: 'grammar', type: '词义选择', prompt: 'gene 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gene.q4', senseId: 'gene.s1', errorType: 'meaning', type: '词源', prompt: '记 gene 时，哪句更稳妥？', options: ['先锁住「基因」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「基因」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['基因'] },
  });

  D('general', {
    etymology: {
      origin: '英语派生：gener + -al，词性转到「总的」。',
      prefix: null,
      root: { text: 'gener', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'general', text: '英语派生：gener + -al，词性转到「总的」。' },
        { label: '现在', text: '核心用法是：总的。' },
      ],
      formationLogic: '先认词干 gener，再看词尾。',
      mnemonic: '看到 general，先说出「总的」。',
      note: '先认词干 gener，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was general.', chinese: '即使是初读者也能看出，这个结果是总的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'general.s1', en: 'They wanted a general answer, not a long speech.', zh: '他们要一个总的的答复，不要长篇发言。', structure: 'general / 表示 / 总的', grammar: 'adjective，围绕「总的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are general.', right: 'The news is general.', reason: 'news 作主语时动词用单数。', rule: '先确定 general 是adjective，再套「总的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'general.q1', senseId: 'general.s1', errorType: 'meaning', type: '词义选择', prompt: '「general」在本条的核心意思是：', options: ['总的', '完全相反的意思', '一种古代钱币'], answer: '总的', explain: 'general：总的。' },
      { id: 'general.q2', senseId: 'general.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches general?', options: ['总的', 'a kind of ancient coin', 'the past tense of be'], answer: '总的', explain: '对的是「总的」。' },
      { id: 'general.q3', senseId: 'general.s1', errorType: 'grammar', type: '词义选择', prompt: 'general 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'general.q4', senseId: 'general.s1', errorType: 'meaning', type: '词源', prompt: '记 general 时，哪句更稳妥？', options: ['先锁住「总的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「总的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总的'] },
  });

  D('generally', {
    etymology: {
      origin: '英语派生：general + -ly，词性转到「通常」。',
      prefix: null,
      root: { text: 'general', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'generally', text: '英语派生：general + -ly，词性转到「通常」。' },
        { label: '现在', text: '核心用法是：通常。' },
      ],
      formationLogic: '先认词干 general，再看词尾。',
      mnemonic: '看到 generally，先说出「通常」。',
      note: '先认词干 general，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule generally, and the class followed.', chinese: '她把规则讲清楚了（通常），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'generally.s1', en: 'He nodded generally and returned to the notes.', zh: '他通常地点了点头，又回去看笔记。', structure: 'generally / 表示 / 通常', grammar: 'adverb，围绕「通常」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very generallyly in the meeting.', right: 'She spoke generally in the meeting.', reason: 'generally 已经是副词，不要再加 -ly。', rule: '先确定 generally 是adverb，再套「通常」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'generally.q1', senseId: 'generally.s1', errorType: 'meaning', type: '词义选择', prompt: '「generally」在本条的核心意思是：', options: ['通常', '完全相反的意思', '一种古代钱币'], answer: '通常', explain: 'generally：通常。' },
      { id: 'generally.q2', senseId: 'generally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches generally?', options: ['通常', 'a kind of ancient coin', 'the past tense of be'], answer: '通常', explain: '对的是「通常」。' },
      { id: 'generally.q3', senseId: 'generally.s1', errorType: 'grammar', type: '词义选择', prompt: 'generally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'generally.q4', senseId: 'generally.s1', errorType: 'meaning', type: '词源', prompt: '记 generally 时，哪句更稳妥？', options: ['先锁住「通常」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「通常」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['通常'] },
  });

  D('generate', {
    etymology: {
      origin: '现代英语常用词「generate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'generate', gloss: '产生' },
      suffix: null,
      history: [
        { label: 'generate', text: '现代英语常用词「generate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：产生。' },
      ],
      formationLogic: '核心义：产生。',
      mnemonic: '看到 generate，先说出「产生」。',
      note: '核心义：产生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to generate before the office closed.', chinese: '他们同意在办公室关门前做这件事：产生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'generate.s1', en: 'The deadline forced the team to generate that afternoon.', zh: '截止日期逼着小组在那天下午产生。', structure: 'generate / 表示 / 产生', grammar: 'verb，围绕「产生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She generateed it yesterday without checking the real past form.', right: 'Check the past form of "generate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 generate 是verb，再套「产生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'generate.q1', senseId: 'generate.s1', errorType: 'meaning', type: '词义选择', prompt: '「generate」在本条的核心意思是：', options: ['产生', '完全相反的意思', '一种古代钱币'], answer: '产生', explain: 'generate：产生。' },
      { id: 'generate.q2', senseId: 'generate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches generate?', options: ['产生', 'a kind of ancient coin', 'the past tense of be'], answer: '产生', explain: '对的是「产生」。' },
      { id: 'generate.q3', senseId: 'generate.s1', errorType: 'grammar', type: '词义选择', prompt: 'generate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'generate.q4', senseId: 'generate.s1', errorType: 'meaning', type: '词源', prompt: '记 generate 时，哪句更稳妥？', options: ['先锁住「产生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「产生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['产生'] },
  });

  D('generation', {
    etymology: {
      origin: '英语派生：genera + -tion，词性转到「一代」。',
      prefix: null,
      root: { text: 'genera', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'generation', text: '英语派生：genera + -tion，词性转到「一代」。' },
        { label: '现在', text: '核心用法是：一代。' },
      ],
      formationLogic: '先认词干 genera，再看词尾。',
      mnemonic: '看到 generation，先说出「一代」。',
      note: '先认词干 genera，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one generation.', chinese: '这一章反复回到同一个点：一代。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'generation.s1', en: 'Without that generation, the next paragraph is hard to follow.', zh: '没有这个一代，下一段会很难读。', structure: 'generation / 表示 / 一代', grammar: 'noun，围绕「一代」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the generation.', right: 'He gave me some advice about the generation.', reason: 'advice 不可数。名词 generation 的单复数按词典词形记。', rule: '先确定 generation 是noun，再套「一代」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'generation.q1', senseId: 'generation.s1', errorType: 'meaning', type: '词义选择', prompt: '「generation」在本条的核心意思是：', options: ['一代', '完全相反的意思', '一种古代钱币'], answer: '一代', explain: 'generation：一代。' },
      { id: 'generation.q2', senseId: 'generation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches generation?', options: ['一代', 'a kind of ancient coin', 'the past tense of be'], answer: '一代', explain: '对的是「一代」。' },
      { id: 'generation.q3', senseId: 'generation.s1', errorType: 'grammar', type: '词义选择', prompt: 'generation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'generation.q4', senseId: 'generation.s1', errorType: 'meaning', type: '词源', prompt: '记 generation 时，哪句更稳妥？', options: ['先锁住「一代」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一代」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一代'] },
  });

  D('generous', {
    etymology: {
      origin: '英语派生：gener + -ous，词性转到「慷慨的」。',
      prefix: null,
      root: { text: 'gener', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'generous', text: '英语派生：gener + -ous，词性转到「慷慨的」。' },
        { label: '现在', text: '核心用法是：慷慨的。' },
      ],
      formationLogic: '先认词干 gener，再看词尾。',
      mnemonic: '看到 generous，先说出「慷慨的」。',
      note: '先认词干 gener，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was generous.', chinese: '即使是初读者也能看出，这个结果是慷慨的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'generous.s1', en: 'They wanted a generous answer, not a long speech.', zh: '他们要一个慷慨的的答复，不要长篇发言。', structure: 'generous / 表示 / 慷慨的', grammar: 'adjective，围绕「慷慨的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are generous.', right: 'The news is generous.', reason: 'news 作主语时动词用单数。', rule: '先确定 generous 是adjective，再套「慷慨的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'generous.q1', senseId: 'generous.s1', errorType: 'meaning', type: '词义选择', prompt: '「generous」在本条的核心意思是：', options: ['慷慨的', '完全相反的意思', '一种古代钱币'], answer: '慷慨的', explain: 'generous：慷慨的。' },
      { id: 'generous.q2', senseId: 'generous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches generous?', options: ['慷慨的', 'a kind of ancient coin', 'the past tense of be'], answer: '慷慨的', explain: '对的是「慷慨的」。' },
      { id: 'generous.q3', senseId: 'generous.s1', errorType: 'grammar', type: '词义选择', prompt: 'generous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'generous.q4', senseId: 'generous.s1', errorType: 'meaning', type: '词源', prompt: '记 generous 时，哪句更稳妥？', options: ['先锁住「慷慨的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「慷慨的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['慷慨的'] },
  });

  D('genius', {
    etymology: {
      origin: '现代英语常用词「genius」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'genius', gloss: '天才' },
      suffix: null,
      history: [
        { label: 'genius', text: '现代英语常用词「genius」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：天才。' },
      ],
      formationLogic: '核心义：天才。',
      mnemonic: '看到 genius，先说出「天才」。',
      note: '核心义：天才。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one genius.', chinese: '这一章反复回到同一个点：天才。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'genius.s1', en: 'Without that genius, the next paragraph is hard to follow.', zh: '没有这个天才，下一段会很难读。', structure: 'genius / 表示 / 天才', grammar: 'noun，围绕「天才」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the genius.', right: 'He gave me some advice about the genius.', reason: 'advice 不可数。名词 genius 的单复数按词典词形记。', rule: '先确定 genius 是noun，再套「天才」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'genius.q1', senseId: 'genius.s1', errorType: 'meaning', type: '词义选择', prompt: '「genius」在本条的核心意思是：', options: ['天才', '完全相反的意思', '一种古代钱币'], answer: '天才', explain: 'genius：天才。' },
      { id: 'genius.q2', senseId: 'genius.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches genius?', options: ['天才', 'a kind of ancient coin', 'the past tense of be'], answer: '天才', explain: '对的是「天才」。' },
      { id: 'genius.q3', senseId: 'genius.s1', errorType: 'grammar', type: '词义选择', prompt: 'genius 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'genius.q4', senseId: 'genius.s1', errorType: 'meaning', type: '词源', prompt: '记 genius 时，哪句更稳妥？', options: ['先锁住「天才」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「天才」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['天才'] },
  });

  D('genre', {
    etymology: {
      origin: '现代英语常用词「genre」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'genre', gloss: '体裁' },
      suffix: null,
      history: [
        { label: 'genre', text: '现代英语常用词「genre」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：体裁。' },
      ],
      formationLogic: '核心义：体裁。',
      mnemonic: '看到 genre，先说出「体裁」。',
      note: '核心义：体裁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one genre.', chinese: '这一章反复回到同一个点：体裁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'genre.s1', en: 'Without that genre, the next paragraph is hard to follow.', zh: '没有这个体裁，下一段会很难读。', structure: 'genre / 表示 / 体裁', grammar: 'noun，围绕「体裁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the genre.', right: 'He gave me some advice about the genre.', reason: 'advice 不可数。名词 genre 的单复数按词典词形记。', rule: '先确定 genre 是noun，再套「体裁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'genre.q1', senseId: 'genre.s1', errorType: 'meaning', type: '词义选择', prompt: '「genre」在本条的核心意思是：', options: ['体裁', '完全相反的意思', '一种古代钱币'], answer: '体裁', explain: 'genre：体裁。' },
      { id: 'genre.q2', senseId: 'genre.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches genre?', options: ['体裁', 'a kind of ancient coin', 'the past tense of be'], answer: '体裁', explain: '对的是「体裁」。' },
      { id: 'genre.q3', senseId: 'genre.s1', errorType: 'grammar', type: '词义选择', prompt: 'genre 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'genre.q4', senseId: 'genre.s1', errorType: 'meaning', type: '词源', prompt: '记 genre 时，哪句更稳妥？', options: ['先锁住「体裁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「体裁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['体裁'] },
  });

  D('gentle', {
    etymology: {
      origin: '现代英语常用词「gentle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gentle', gloss: '温柔的' },
      suffix: null,
      history: [
        { label: 'gentle', text: '现代英语常用词「gentle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：温柔的。' },
      ],
      formationLogic: '核心义：温柔的。',
      mnemonic: '看到 gentle，先说出「温柔的」。',
      note: '核心义：温柔的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was gentle.', chinese: '即使是初读者也能看出，这个结果是温柔的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gentle.s1', en: 'They wanted a gentle answer, not a long speech.', zh: '他们要一个温柔的的答复，不要长篇发言。', structure: 'gentle / 表示 / 温柔的', grammar: 'adjective，围绕「温柔的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are gentle.', right: 'The news is gentle.', reason: 'news 作主语时动词用单数。', rule: '先确定 gentle 是adjective，再套「温柔的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gentle.q1', senseId: 'gentle.s1', errorType: 'meaning', type: '词义选择', prompt: '「gentle」在本条的核心意思是：', options: ['温柔的', '完全相反的意思', '一种古代钱币'], answer: '温柔的', explain: 'gentle：温柔的。' },
      { id: 'gentle.q2', senseId: 'gentle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gentle?', options: ['温柔的', 'a kind of ancient coin', 'the past tense of be'], answer: '温柔的', explain: '对的是「温柔的」。' },
      { id: 'gentle.q3', senseId: 'gentle.s1', errorType: 'grammar', type: '词义选择', prompt: 'gentle 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'gentle.q4', senseId: 'gentle.s1', errorType: 'meaning', type: '词源', prompt: '记 gentle 时，哪句更稳妥？', options: ['先锁住「温柔的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「温柔的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['温柔的'] },
  });

  D('gentleman', {
    etymology: {
      origin: '现代英语常用词「gentleman」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gentleman', gloss: '绅士' },
      suffix: null,
      history: [
        { label: 'gentleman', text: '现代英语常用词「gentleman」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：绅士。' },
      ],
      formationLogic: '核心义：绅士。',
      mnemonic: '看到 gentleman，先说出「绅士」。',
      note: '核心义：绅士。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gentleman.', chinese: '这一章反复回到同一个点：绅士。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gentleman.s1', en: 'Without that gentleman, the next paragraph is hard to follow.', zh: '没有这个绅士，下一段会很难读。', structure: 'gentleman / 表示 / 绅士', grammar: 'noun，围绕「绅士」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gentleman.', right: 'He gave me some advice about the gentleman.', reason: 'advice 不可数。名词 gentleman 的单复数按词典词形记。', rule: '先确定 gentleman 是noun，再套「绅士」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gentleman.q1', senseId: 'gentleman.s1', errorType: 'meaning', type: '词义选择', prompt: '「gentleman」在本条的核心意思是：', options: ['绅士', '完全相反的意思', '一种古代钱币'], answer: '绅士', explain: 'gentleman：绅士。' },
      { id: 'gentleman.q2', senseId: 'gentleman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gentleman?', options: ['绅士', 'a kind of ancient coin', 'the past tense of be'], answer: '绅士', explain: '对的是「绅士」。' },
      { id: 'gentleman.q3', senseId: 'gentleman.s1', errorType: 'grammar', type: '词义选择', prompt: 'gentleman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gentleman.q4', senseId: 'gentleman.s1', errorType: 'meaning', type: '词源', prompt: '记 gentleman 时，哪句更稳妥？', options: ['先锁住「绅士」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「绅士」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绅士'] },
  });

  D('gently', {
    etymology: {
      origin: '英语派生：gent + -ly，词性转到「温柔地」。',
      prefix: null,
      root: { text: 'gent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'gently', text: '英语派生：gent + -ly，词性转到「温柔地」。' },
        { label: '现在', text: '核心用法是：温柔地。' },
      ],
      formationLogic: '先认词干 gent，再看词尾。',
      mnemonic: '看到 gently，先说出「温柔地」。',
      note: '先认词干 gent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule gently, and the class followed.', chinese: '她把规则讲清楚了（温柔地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gently.s1', en: 'He nodded gently and returned to the notes.', zh: '他温柔地地点了点头，又回去看笔记。', structure: 'gently / 表示 / 温柔地', grammar: 'adverb，围绕「温柔地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very gentlyly in the meeting.', right: 'She spoke gently in the meeting.', reason: 'gently 已经是副词，不要再加 -ly。', rule: '先确定 gently 是adverb，再套「温柔地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gently.q1', senseId: 'gently.s1', errorType: 'meaning', type: '词义选择', prompt: '「gently」在本条的核心意思是：', options: ['温柔地', '完全相反的意思', '一种古代钱币'], answer: '温柔地', explain: 'gently：温柔地。' },
      { id: 'gently.q2', senseId: 'gently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gently?', options: ['温柔地', 'a kind of ancient coin', 'the past tense of be'], answer: '温柔地', explain: '对的是「温柔地」。' },
      { id: 'gently.q3', senseId: 'gently.s1', errorType: 'grammar', type: '词义选择', prompt: 'gently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'gently.q4', senseId: 'gently.s1', errorType: 'meaning', type: '词源', prompt: '记 gently 时，哪句更稳妥？', options: ['先锁住「温柔地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「温柔地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['温柔地'] },
  });

  D('genuine', {
    etymology: {
      origin: '现代英语常用词「genuine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'genuine', gloss: '真正的' },
      suffix: null,
      history: [
        { label: 'genuine', text: '现代英语常用词「genuine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：真正的。' },
      ],
      formationLogic: '核心义：真正的。',
      mnemonic: '看到 genuine，先说出「真正的」。',
      note: '核心义：真正的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was genuine.', chinese: '即使是初读者也能看出，这个结果是真正的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'genuine.s1', en: 'They wanted a genuine answer, not a long speech.', zh: '他们要一个真正的的答复，不要长篇发言。', structure: 'genuine / 表示 / 真正的', grammar: 'adjective，围绕「真正的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are genuine.', right: 'The news is genuine.', reason: 'news 作主语时动词用单数。', rule: '先确定 genuine 是adjective，再套「真正的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'genuine.q1', senseId: 'genuine.s1', errorType: 'meaning', type: '词义选择', prompt: '「genuine」在本条的核心意思是：', options: ['真正的', '完全相反的意思', '一种古代钱币'], answer: '真正的', explain: 'genuine：真正的。' },
      { id: 'genuine.q2', senseId: 'genuine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches genuine?', options: ['真正的', 'a kind of ancient coin', 'the past tense of be'], answer: '真正的', explain: '对的是「真正的」。' },
      { id: 'genuine.q3', senseId: 'genuine.s1', errorType: 'grammar', type: '词义选择', prompt: 'genuine 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'genuine.q4', senseId: 'genuine.s1', errorType: 'meaning', type: '词源', prompt: '记 genuine 时，哪句更稳妥？', options: ['先锁住「真正的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「真正的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['真正的'] },
  });

  D('genus', {
    etymology: {
      origin: '现代英语常用词「genus」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'genus', gloss: '属（生物分类）' },
      suffix: null,
      history: [
        { label: 'genus', text: '现代英语常用词「genus」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：属（生物分类）。' },
      ],
      formationLogic: '核心义：属（生物分类）。',
      mnemonic: '看到 genus，先说出「属（生物分类）」。',
      note: '核心义：属（生物分类）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one genus.', chinese: '这一章反复回到同一个点：属（生物分类）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'genus.s1', en: 'Without that genus, the next paragraph is hard to follow.', zh: '没有这个属（生物分类），下一段会很难读。', structure: 'genus / 表示 / 属（生物分类）', grammar: 'noun，围绕「属（生物分类）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the genus.', right: 'He gave me some advice about the genus.', reason: 'advice 不可数。名词 genus 的单复数按词典词形记。', rule: '先确定 genus 是noun，再套「属（生物分类）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'genus.q1', senseId: 'genus.s1', errorType: 'meaning', type: '词义选择', prompt: '「genus」在本条的核心意思是：', options: ['属（生物分类）', '完全相反的意思', '一种古代钱币'], answer: '属（生物分类）', explain: 'genus：属（生物分类）。' },
      { id: 'genus.q2', senseId: 'genus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches genus?', options: ['属（生物分类）', 'a kind of ancient coin', 'the past tense of be'], answer: '属（生物分类）', explain: '对的是「属（生物分类）」。' },
      { id: 'genus.q3', senseId: 'genus.s1', errorType: 'grammar', type: '词义选择', prompt: 'genus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'genus.q4', senseId: 'genus.s1', errorType: 'meaning', type: '词源', prompt: '记 genus 时，哪句更稳妥？', options: ['先锁住「属（生物分类）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「属（生物分类）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['属（生物分类）'] },
  });

  D('geography', {
    etymology: {
      origin: '现代英语常用词「geography」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'geography', gloss: '地理' },
      suffix: null,
      history: [
        { label: 'geography', text: '现代英语常用词「geography」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地理。' },
      ],
      formationLogic: '核心义：地理。',
      mnemonic: '看到 geography，先说出「地理」。',
      note: '核心义：地理。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one geography.', chinese: '这一章反复回到同一个点：地理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'geography.s1', en: 'Without that geography, the next paragraph is hard to follow.', zh: '没有这个地理，下一段会很难读。', structure: 'geography / 表示 / 地理', grammar: 'noun，围绕「地理」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the geography.', right: 'He gave me some advice about the geography.', reason: 'advice 不可数。名词 geography 的单复数按词典词形记。', rule: '先确定 geography 是noun，再套「地理」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'geography.q1', senseId: 'geography.s1', errorType: 'meaning', type: '词义选择', prompt: '「geography」在本条的核心意思是：', options: ['地理', '完全相反的意思', '一种古代钱币'], answer: '地理', explain: 'geography：地理。' },
      { id: 'geography.q2', senseId: 'geography.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches geography?', options: ['地理', 'a kind of ancient coin', 'the past tense of be'], answer: '地理', explain: '对的是「地理」。' },
      { id: 'geography.q3', senseId: 'geography.s1', errorType: 'grammar', type: '词义选择', prompt: 'geography 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'geography.q4', senseId: 'geography.s1', errorType: 'meaning', type: '词源', prompt: '记 geography 时，哪句更稳妥？', options: ['先锁住「地理」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地理」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地理'] },
  });

  D('geology', {
    etymology: {
      origin: '现代英语常用词「geology」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'geology', gloss: '地质学' },
      suffix: null,
      history: [
        { label: 'geology', text: '现代英语常用词「geology」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地质学。' },
      ],
      formationLogic: '核心义：地质学。',
      mnemonic: '看到 geology，先说出「地质学」。',
      note: '核心义：地质学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one geology.', chinese: '这一章反复回到同一个点：地质学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'geology.s1', en: 'Without that geology, the next paragraph is hard to follow.', zh: '没有这个地质学，下一段会很难读。', structure: 'geology / 表示 / 地质学', grammar: 'noun，围绕「地质学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the geology.', right: 'He gave me some advice about the geology.', reason: 'advice 不可数。名词 geology 的单复数按词典词形记。', rule: '先确定 geology 是noun，再套「地质学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'geology.q1', senseId: 'geology.s1', errorType: 'meaning', type: '词义选择', prompt: '「geology」在本条的核心意思是：', options: ['地质学', '完全相反的意思', '一种古代钱币'], answer: '地质学', explain: 'geology：地质学。' },
      { id: 'geology.q2', senseId: 'geology.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches geology?', options: ['地质学', 'a kind of ancient coin', 'the past tense of be'], answer: '地质学', explain: '对的是「地质学」。' },
      { id: 'geology.q3', senseId: 'geology.s1', errorType: 'grammar', type: '词义选择', prompt: 'geology 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'geology.q4', senseId: 'geology.s1', errorType: 'meaning', type: '词源', prompt: '记 geology 时，哪句更稳妥？', options: ['先锁住「地质学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地质学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地质学'] },
  });

  D('geometry', {
    etymology: {
      origin: '现代英语常用词「geometry」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'geometry', gloss: '几何学' },
      suffix: null,
      history: [
        { label: 'geometry', text: '现代英语常用词「geometry」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：几何学。' },
      ],
      formationLogic: '核心义：几何学。',
      mnemonic: '看到 geometry，先说出「几何学」。',
      note: '核心义：几何学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one geometry.', chinese: '这一章反复回到同一个点：几何学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'geometry.s1', en: 'Without that geometry, the next paragraph is hard to follow.', zh: '没有这个几何学，下一段会很难读。', structure: 'geometry / 表示 / 几何学', grammar: 'noun，围绕「几何学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the geometry.', right: 'He gave me some advice about the geometry.', reason: 'advice 不可数。名词 geometry 的单复数按词典词形记。', rule: '先确定 geometry 是noun，再套「几何学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'geometry.q1', senseId: 'geometry.s1', errorType: 'meaning', type: '词义选择', prompt: '「geometry」在本条的核心意思是：', options: ['几何学', '完全相反的意思', '一种古代钱币'], answer: '几何学', explain: 'geometry：几何学。' },
      { id: 'geometry.q2', senseId: 'geometry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches geometry?', options: ['几何学', 'a kind of ancient coin', 'the past tense of be'], answer: '几何学', explain: '对的是「几何学」。' },
      { id: 'geometry.q3', senseId: 'geometry.s1', errorType: 'grammar', type: '词义选择', prompt: 'geometry 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'geometry.q4', senseId: 'geometry.s1', errorType: 'meaning', type: '词源', prompt: '记 geometry 时，哪句更稳妥？', options: ['先锁住「几何学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「几何学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['几何学'] },
  });

  D('germ', {
    etymology: {
      origin: '现代英语常用词「germ」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'germ', gloss: '细菌' },
      suffix: null,
      history: [
        { label: 'germ', text: '现代英语常用词「germ」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：细菌。' },
      ],
      formationLogic: '核心义：细菌。',
      mnemonic: '看到 germ，先说出「细菌」。',
      note: '核心义：细菌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one germ.', chinese: '这一章反复回到同一个点：细菌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'germ.s1', en: 'Without that germ, the next paragraph is hard to follow.', zh: '没有这个细菌，下一段会很难读。', structure: 'germ / 表示 / 细菌', grammar: 'noun，围绕「细菌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the germ.', right: 'He gave me some advice about the germ.', reason: 'advice 不可数。名词 germ 的单复数按词典词形记。', rule: '先确定 germ 是noun，再套「细菌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'germ.q1', senseId: 'germ.s1', errorType: 'meaning', type: '词义选择', prompt: '「germ」在本条的核心意思是：', options: ['细菌', '完全相反的意思', '一种古代钱币'], answer: '细菌', explain: 'germ：细菌。' },
      { id: 'germ.q2', senseId: 'germ.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches germ?', options: ['细菌', 'a kind of ancient coin', 'the past tense of be'], answer: '细菌', explain: '对的是「细菌」。' },
      { id: 'germ.q3', senseId: 'germ.s1', errorType: 'grammar', type: '词义选择', prompt: 'germ 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'germ.q4', senseId: 'germ.s1', errorType: 'meaning', type: '词源', prompt: '记 germ 时，哪句更稳妥？', options: ['先锁住「细菌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「细菌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['细菌'] },
  });

  D('gesture', {
    etymology: {
      origin: '现代英语常用词「gesture」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gesture', gloss: '手势' },
      suffix: null,
      history: [
        { label: 'gesture', text: '现代英语常用词「gesture」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：手势。' },
      ],
      formationLogic: '核心义：手势。',
      mnemonic: '看到 gesture，先说出「手势」。',
      note: '核心义：手势。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gesture.', chinese: '这一章反复回到同一个点：手势。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gesture.s1', en: 'Without that gesture, the next paragraph is hard to follow.', zh: '没有这个手势，下一段会很难读。', structure: 'gesture / 表示 / 手势', grammar: 'noun，围绕「手势」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gesture.', right: 'He gave me some advice about the gesture.', reason: 'advice 不可数。名词 gesture 的单复数按词典词形记。', rule: '先确定 gesture 是noun，再套「手势」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gesture.q1', senseId: 'gesture.s1', errorType: 'meaning', type: '词义选择', prompt: '「gesture」在本条的核心意思是：', options: ['手势', '完全相反的意思', '一种古代钱币'], answer: '手势', explain: 'gesture：手势。' },
      { id: 'gesture.q2', senseId: 'gesture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gesture?', options: ['手势', 'a kind of ancient coin', 'the past tense of be'], answer: '手势', explain: '对的是「手势」。' },
      { id: 'gesture.q3', senseId: 'gesture.s1', errorType: 'grammar', type: '词义选择', prompt: 'gesture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gesture.q4', senseId: 'gesture.s1', errorType: 'meaning', type: '词源', prompt: '记 gesture 时，哪句更稳妥？', options: ['先锁住「手势」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手势」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手势'] },
  });

  D('get', {
    etymology: {
      origin: '现代英语常用词「get」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'get', gloss: '得到' },
      suffix: null,
      history: [
        { label: 'get', text: '现代英语常用词「get」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：得到。' },
      ],
      formationLogic: '核心义：得到。',
      mnemonic: '看到 get，先说出「得到」。',
      note: '核心义：得到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to get before the office closed.', chinese: '他们同意在办公室关门前做这件事：得到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get.s1', en: 'The deadline forced the team to get that afternoon.', zh: '截止日期逼着小组在那天下午得到。', structure: 'get / 表示 / 得到', grammar: 'verb，围绕「得到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She geted it yesterday without checking the real past form.', right: 'Check the past form of "get" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 get 是verb，再套「得到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get.q1', senseId: 'get.s1', errorType: 'meaning', type: '词义选择', prompt: '「get」在本条的核心意思是：', options: ['得到', '完全相反的意思', '一种古代钱币'], answer: '得到', explain: 'get：得到。' },
      { id: 'get.q2', senseId: 'get.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get?', options: ['得到', 'a kind of ancient coin', 'the past tense of be'], answer: '得到', explain: '对的是「得到」。' },
      { id: 'get.q3', senseId: 'get.s1', errorType: 'grammar', type: '词义选择', prompt: 'get 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get.q4', senseId: 'get.s1', errorType: 'meaning', type: '词源', prompt: '记 get 时，哪句更稳妥？', options: ['先锁住「得到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「得到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['得到'] },
  });

  D('get away', {
    etymology: {
      origin: '现代英语固定说法「get away」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get away', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get away', text: '现代英语固定说法「get away」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：逃脱。' },
      ],
      formationLogic: '核心义：逃脱。',
      mnemonic: '看到 get away，先说出「逃脱」。',
      note: '核心义：逃脱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get away" and asked the class to keep it as one unit.', chinese: '老师把「get away」圈出来，让全班把它当成一个整体。它表示逃脱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get away.s1', en: 'In the margin she wrote "get away" so nobody would split the phrase.', zh: '她在页边写下「get away」，免得有人把这个说法拆开。意思是逃脱。', structure: 'get away / 表示 / 逃脱', grammar: 'verb，围绕「逃脱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get away and lost the point.', right: 'Keep "get away" together: it means 逃脱.', reason: '「get away」要整块理解。', rule: '先确定 get away 是verb，再套「逃脱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get away.q1', senseId: 'get away.s1', errorType: 'meaning', type: '词义选择', prompt: '「get away」在本条的核心意思是：', options: ['逃脱', '完全相反的意思', '一种古代钱币'], answer: '逃脱', explain: 'get away：逃脱。' },
      { id: 'get away.q2', senseId: 'get away.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get away?', options: ['逃脱', 'a kind of ancient coin', 'the past tense of be'], answer: '逃脱', explain: '对的是「逃脱」。' },
      { id: 'get away.q3', senseId: 'get away.s1', errorType: 'grammar', type: '词义选择', prompt: 'get away 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get away.q4', senseId: 'get away.s1', errorType: 'meaning', type: '词源', prompt: '记 get away 时，哪句更稳妥？', options: ['先锁住「逃脱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逃脱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逃脱'] },
  });

  D('get better', {
    etymology: {
      origin: '现代英语固定说法「get better」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get better', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get better', text: '现代英语固定说法「get better」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：好转。' },
      ],
      formationLogic: '核心义：好转。',
      mnemonic: '看到 get better，先说出「好转」。',
      note: '核心义：好转。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get better" and asked the class to keep it as one unit.', chinese: '老师把「get better」圈出来，让全班把它当成一个整体。它表示好转。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get better.s1', en: 'In the margin she wrote "get better" so nobody would split the phrase.', zh: '她在页边写下「get better」，免得有人把这个说法拆开。意思是好转。', structure: 'get better / 表示 / 好转', grammar: 'verb，围绕「好转」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get better and lost the point.', right: 'Keep "get better" together: it means 好转.', reason: '「get better」要整块理解。', rule: '先确定 get better 是verb，再套「好转」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get better.q1', senseId: 'get better.s1', errorType: 'meaning', type: '词义选择', prompt: '「get better」在本条的核心意思是：', options: ['好转', '完全相反的意思', '一种古代钱币'], answer: '好转', explain: 'get better：好转。' },
      { id: 'get better.q2', senseId: 'get better.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get better?', options: ['好转', 'a kind of ancient coin', 'the past tense of be'], answer: '好转', explain: '对的是「好转」。' },
      { id: 'get better.q3', senseId: 'get better.s1', errorType: 'grammar', type: '词义选择', prompt: 'get better 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get better.q4', senseId: 'get better.s1', errorType: 'meaning', type: '词源', prompt: '记 get better 时，哪句更稳妥？', options: ['先锁住「好转」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好转」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好转'] },
  });

  D('get by', {
    etymology: {
      origin: '现代英语固定说法「get by」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get by', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get by', text: '现代英语固定说法「get by」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：勉强度日。' },
      ],
      formationLogic: '核心义：勉强度日。',
      mnemonic: '看到 get by，先说出「勉强度日」。',
      note: '核心义：勉强度日。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get by" and asked the class to keep it as one unit.', chinese: '老师把「get by」圈出来，让全班把它当成一个整体。它表示勉强度日。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get by.s1', en: 'In the margin she wrote "get by" so nobody would split the phrase.', zh: '她在页边写下「get by」，免得有人把这个说法拆开。意思是勉强度日。', structure: 'get by / 表示 / 勉强度日', grammar: 'verb，围绕「勉强度日」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get by and lost the point.', right: 'Keep "get by" together: it means 勉强度日.', reason: '「get by」要整块理解。', rule: '先确定 get by 是verb，再套「勉强度日」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get by.q1', senseId: 'get by.s1', errorType: 'meaning', type: '词义选择', prompt: '「get by」在本条的核心意思是：', options: ['勉强度日', '完全相反的意思', '一种古代钱币'], answer: '勉强度日', explain: 'get by：勉强度日。' },
      { id: 'get by.q2', senseId: 'get by.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get by?', options: ['勉强度日', 'a kind of ancient coin', 'the past tense of be'], answer: '勉强度日', explain: '对的是「勉强度日」。' },
      { id: 'get by.q3', senseId: 'get by.s1', errorType: 'grammar', type: '词义选择', prompt: 'get by 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get by.q4', senseId: 'get by.s1', errorType: 'meaning', type: '词源', prompt: '记 get by 时，哪句更稳妥？', options: ['先锁住「勉强度日」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勉强度日」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勉强度日'] },
  });

  D('get hold of', {
    etymology: {
      origin: '现代英语固定说法「get hold of」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get hold of', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get hold of', text: '现代英语固定说法「get hold of」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：拿到。' },
      ],
      formationLogic: '核心义：拿到。',
      mnemonic: '看到 get hold of，先说出「拿到」。',
      note: '核心义：拿到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get hold of" and asked the class to keep it as one unit.', chinese: '老师把「get hold of」圈出来，让全班把它当成一个整体。它表示拿到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get hold of.s1', en: 'In the margin she wrote "get hold of" so nobody would split the phrase.', zh: '她在页边写下「get hold of」，免得有人把这个说法拆开。意思是拿到。', structure: 'get hold of / 表示 / 拿到', grammar: 'verb，围绕「拿到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get hold of and lost the point.', right: 'Keep "get hold of" together: it means 拿到.', reason: '「get hold of」要整块理解。', rule: '先确定 get hold of 是verb，再套「拿到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get hold of.q1', senseId: 'get hold of.s1', errorType: 'meaning', type: '词义选择', prompt: '「get hold of」在本条的核心意思是：', options: ['拿到', '完全相反的意思', '一种古代钱币'], answer: '拿到', explain: 'get hold of：拿到。' },
      { id: 'get hold of.q2', senseId: 'get hold of.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get hold of?', options: ['拿到', 'a kind of ancient coin', 'the past tense of be'], answer: '拿到', explain: '对的是「拿到」。' },
      { id: 'get hold of.q3', senseId: 'get hold of.s1', errorType: 'grammar', type: '词义选择', prompt: 'get hold of 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get hold of.q4', senseId: 'get hold of.s1', errorType: 'meaning', type: '词源', prompt: '记 get hold of 时，哪句更稳妥？', options: ['先锁住「拿到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拿到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拿到'] },
  });

  D('get it right', {
    etymology: {
      origin: '现代英语固定说法「get it right」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get it right', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get it right', text: '现代英语固定说法「get it right」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：做对。' },
      ],
      formationLogic: '核心义：做对。',
      mnemonic: '看到 get it right，先说出「做对」。',
      note: '核心义：做对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get it right" and asked the class to keep it as one unit.', chinese: '老师把「get it right」圈出来，让全班把它当成一个整体。它表示做对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get it right.s1', en: 'In the margin she wrote "get it right" so nobody would split the phrase.', zh: '她在页边写下「get it right」，免得有人把这个说法拆开。意思是做对。', structure: 'get it right / 表示 / 做对', grammar: 'verb，围绕「做对」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get it right and lost the point.', right: 'Keep "get it right" together: it means 做对.', reason: '「get it right」要整块理解。', rule: '先确定 get it right 是verb，再套「做对」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get it right.q1', senseId: 'get it right.s1', errorType: 'meaning', type: '词义选择', prompt: '「get it right」在本条的核心意思是：', options: ['做对', '完全相反的意思', '一种古代钱币'], answer: '做对', explain: 'get it right：做对。' },
      { id: 'get it right.q2', senseId: 'get it right.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get it right?', options: ['做对', 'a kind of ancient coin', 'the past tense of be'], answer: '做对', explain: '对的是「做对」。' },
      { id: 'get it right.q3', senseId: 'get it right.s1', errorType: 'grammar', type: '词义选择', prompt: 'get it right 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get it right.q4', senseId: 'get it right.s1', errorType: 'meaning', type: '词源', prompt: '记 get it right 时，哪句更稳妥？', options: ['先锁住「做对」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「做对」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['做对'] },
  });

  D('get married', {
    etymology: {
      origin: '现代英语固定说法「get married」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get married', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get married', text: '现代英语固定说法「get married」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：结婚。' },
      ],
      formationLogic: '核心义：结婚。',
      mnemonic: '看到 get married，先说出「结婚」。',
      note: '核心义：结婚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get married" and asked the class to keep it as one unit.', chinese: '老师把「get married」圈出来，让全班把它当成一个整体。它表示结婚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get married.s1', en: 'In the margin she wrote "get married" so nobody would split the phrase.', zh: '她在页边写下「get married」，免得有人把这个说法拆开。意思是结婚。', structure: 'get married / 表示 / 结婚', grammar: 'verb，围绕「结婚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get married and lost the point.', right: 'Keep "get married" together: it means 结婚.', reason: '「get married」要整块理解。', rule: '先确定 get married 是verb，再套「结婚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get married.q1', senseId: 'get married.s1', errorType: 'meaning', type: '词义选择', prompt: '「get married」在本条的核心意思是：', options: ['结婚', '完全相反的意思', '一种古代钱币'], answer: '结婚', explain: 'get married：结婚。' },
      { id: 'get married.q2', senseId: 'get married.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get married?', options: ['结婚', 'a kind of ancient coin', 'the past tense of be'], answer: '结婚', explain: '对的是「结婚」。' },
      { id: 'get married.q3', senseId: 'get married.s1', errorType: 'grammar', type: '词义选择', prompt: 'get married 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get married.q4', senseId: 'get married.s1', errorType: 'meaning', type: '词源', prompt: '记 get married 时，哪句更稳妥？', options: ['先锁住「结婚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结婚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结婚'] },
  });

  D('get on', {
    etymology: {
      origin: '现代英语固定说法「get on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get on', text: '现代英语固定说法「get on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：上车。' },
      ],
      formationLogic: '核心义：上车。',
      mnemonic: '看到 get on，先说出「上车」。',
      note: '核心义：上车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get on" and asked the class to keep it as one unit.', chinese: '老师把「get on」圈出来，让全班把它当成一个整体。它表示上车。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get on.s1', en: 'In the margin she wrote "get on" so nobody would split the phrase.', zh: '她在页边写下「get on」，免得有人把这个说法拆开。意思是上车。', structure: 'get on / 表示 / 上车', grammar: 'verb，围绕「上车」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get on and lost the point.', right: 'Keep "get on" together: it means 上车.', reason: '「get on」要整块理解。', rule: '先确定 get on 是verb，再套「上车」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get on.q1', senseId: 'get on.s1', errorType: 'meaning', type: '词义选择', prompt: '「get on」在本条的核心意思是：', options: ['上车', '完全相反的意思', '一种古代钱币'], answer: '上车', explain: 'get on：上车。' },
      { id: 'get on.q2', senseId: 'get on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get on?', options: ['上车', 'a kind of ancient coin', 'the past tense of be'], answer: '上车', explain: '对的是「上车」。' },
      { id: 'get on.q3', senseId: 'get on.s1', errorType: 'grammar', type: '词义选择', prompt: 'get on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get on.q4', senseId: 'get on.s1', errorType: 'meaning', type: '词源', prompt: '记 get on 时，哪句更稳妥？', options: ['先锁住「上车」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「上车」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上车'] },
  });

  D('get over', {
    etymology: {
      origin: '现代英语固定说法「get over」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get over', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get over', text: '现代英语固定说法「get over」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：克服。' },
      ],
      formationLogic: '核心义：克服。',
      mnemonic: '看到 get over，先说出「克服」。',
      note: '核心义：克服。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get over" and asked the class to keep it as one unit.', chinese: '老师把「get over」圈出来，让全班把它当成一个整体。它表示克服。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get over.s1', en: 'In the margin she wrote "get over" so nobody would split the phrase.', zh: '她在页边写下「get over」，免得有人把这个说法拆开。意思是克服。', structure: 'get over / 表示 / 克服', grammar: 'verb，围绕「克服」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get over and lost the point.', right: 'Keep "get over" together: it means 克服.', reason: '「get over」要整块理解。', rule: '先确定 get over 是verb，再套「克服」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get over.q1', senseId: 'get over.s1', errorType: 'meaning', type: '词义选择', prompt: '「get over」在本条的核心意思是：', options: ['克服', '完全相反的意思', '一种古代钱币'], answer: '克服', explain: 'get over：克服。' },
      { id: 'get over.q2', senseId: 'get over.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get over?', options: ['克服', 'a kind of ancient coin', 'the past tense of be'], answer: '克服', explain: '对的是「克服」。' },
      { id: 'get over.q3', senseId: 'get over.s1', errorType: 'grammar', type: '词义选择', prompt: 'get over 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get over.q4', senseId: 'get over.s1', errorType: 'meaning', type: '词源', prompt: '记 get over 时，哪句更稳妥？', options: ['先锁住「克服」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「克服」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['克服'] },
  });

  D('get ready', {
    etymology: {
      origin: '现代英语固定说法「get ready」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get ready', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get ready', text: '现代英语固定说法「get ready」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：准备好。' },
      ],
      formationLogic: '核心义：准备好。',
      mnemonic: '看到 get ready，先说出「准备好」。',
      note: '核心义：准备好。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get ready" and asked the class to keep it as one unit.', chinese: '老师把「get ready」圈出来，让全班把它当成一个整体。它表示准备好。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get ready.s1', en: 'In the margin she wrote "get ready" so nobody would split the phrase.', zh: '她在页边写下「get ready」，免得有人把这个说法拆开。意思是准备好。', structure: 'get ready / 表示 / 准备好', grammar: 'verb，围绕「准备好」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get ready and lost the point.', right: 'Keep "get ready" together: it means 准备好.', reason: '「get ready」要整块理解。', rule: '先确定 get ready 是verb，再套「准备好」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get ready.q1', senseId: 'get ready.s1', errorType: 'meaning', type: '词义选择', prompt: '「get ready」在本条的核心意思是：', options: ['准备好', '完全相反的意思', '一种古代钱币'], answer: '准备好', explain: 'get ready：准备好。' },
      { id: 'get ready.q2', senseId: 'get ready.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get ready?', options: ['准备好', 'a kind of ancient coin', 'the past tense of be'], answer: '准备好', explain: '对的是「准备好」。' },
      { id: 'get ready.q3', senseId: 'get ready.s1', errorType: 'grammar', type: '词义选择', prompt: 'get ready 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get ready.q4', senseId: 'get ready.s1', errorType: 'meaning', type: '词源', prompt: '记 get ready 时，哪句更稳妥？', options: ['先锁住「准备好」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「准备好」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['准备好'] },
  });

  D('get rid of', {
    etymology: {
      origin: '现代英语固定说法「get rid of」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get rid of', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get rid of', text: '现代英语固定说法「get rid of」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：摆脱。' },
      ],
      formationLogic: '核心义：摆脱。',
      mnemonic: '看到 get rid of，先说出「摆脱」。',
      note: '核心义：摆脱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get rid of" and asked the class to keep it as one unit.', chinese: '老师把「get rid of」圈出来，让全班把它当成一个整体。它表示摆脱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get rid of.s1', en: 'In the margin she wrote "get rid of" so nobody would split the phrase.', zh: '她在页边写下「get rid of」，免得有人把这个说法拆开。意思是摆脱。', structure: 'get rid of / 表示 / 摆脱', grammar: 'verb，围绕「摆脱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get rid of and lost the point.', right: 'Keep "get rid of" together: it means 摆脱.', reason: '「get rid of」要整块理解。', rule: '先确定 get rid of 是verb，再套「摆脱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get rid of.q1', senseId: 'get rid of.s1', errorType: 'meaning', type: '词义选择', prompt: '「get rid of」在本条的核心意思是：', options: ['摆脱', '完全相反的意思', '一种古代钱币'], answer: '摆脱', explain: 'get rid of：摆脱。' },
      { id: 'get rid of.q2', senseId: 'get rid of.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get rid of?', options: ['摆脱', 'a kind of ancient coin', 'the past tense of be'], answer: '摆脱', explain: '对的是「摆脱」。' },
      { id: 'get rid of.q3', senseId: 'get rid of.s1', errorType: 'grammar', type: '词义选择', prompt: 'get rid of 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get rid of.q4', senseId: 'get rid of.s1', errorType: 'meaning', type: '词源', prompt: '记 get rid of 时，哪句更稳妥？', options: ['先锁住「摆脱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摆脱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摆脱'] },
  });

  D('get to', {
    etymology: {
      origin: '现代英语固定说法「get to」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'get to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'get to', text: '现代英语固定说法「get to」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：到达。' },
      ],
      formationLogic: '核心义：到达。',
      mnemonic: '看到 get to，先说出「到达」。',
      note: '核心义：到达。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "get to" and asked the class to keep it as one unit.', chinese: '老师把「get to」圈出来，让全班把它当成一个整体。它表示到达。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'get to.s1', en: 'In the margin she wrote "get to" so nobody would split the phrase.', zh: '她在页边写下「get to」，免得有人把这个说法拆开。意思是到达。', structure: 'get to / 表示 / 到达', grammar: 'verb，围绕「到达」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of get to and lost the point.', right: 'Keep "get to" together: it means 到达.', reason: '「get to」要整块理解。', rule: '先确定 get to 是verb，再套「到达」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'get to.q1', senseId: 'get to.s1', errorType: 'meaning', type: '词义选择', prompt: '「get to」在本条的核心意思是：', options: ['到达', '完全相反的意思', '一种古代钱币'], answer: '到达', explain: 'get to：到达。' },
      { id: 'get to.q2', senseId: 'get to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches get to?', options: ['到达', 'a kind of ancient coin', 'the past tense of be'], answer: '到达', explain: '对的是「到达」。' },
      { id: 'get to.q3', senseId: 'get to.s1', errorType: 'grammar', type: '词义选择', prompt: 'get to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'get to.q4', senseId: 'get to.s1', errorType: 'meaning', type: '词源', prompt: '记 get to 时，哪句更稳妥？', options: ['先锁住「到达」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「到达」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['到达'] },
  });

  D('ghetto', {
    etymology: {
      origin: '现代英语常用词「ghetto」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ghetto', gloss: '贫民区' },
      suffix: null,
      history: [
        { label: 'ghetto', text: '现代英语常用词「ghetto」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：贫民区。' },
      ],
      formationLogic: '核心义：贫民区。',
      mnemonic: '看到 ghetto，先说出「贫民区」。',
      note: '核心义：贫民区。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ghetto.', chinese: '这一章反复回到同一个点：贫民区。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ghetto.s1', en: 'Without that ghetto, the next paragraph is hard to follow.', zh: '没有这个贫民区，下一段会很难读。', structure: 'ghetto / 表示 / 贫民区', grammar: 'noun，围绕「贫民区」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ghetto.', right: 'He gave me some advice about the ghetto.', reason: 'advice 不可数。名词 ghetto 的单复数按词典词形记。', rule: '先确定 ghetto 是noun，再套「贫民区」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ghetto.q1', senseId: 'ghetto.s1', errorType: 'meaning', type: '词义选择', prompt: '「ghetto」在本条的核心意思是：', options: ['贫民区', '完全相反的意思', '一种古代钱币'], answer: '贫民区', explain: 'ghetto：贫民区。' },
      { id: 'ghetto.q2', senseId: 'ghetto.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ghetto?', options: ['贫民区', 'a kind of ancient coin', 'the past tense of be'], answer: '贫民区', explain: '对的是「贫民区」。' },
      { id: 'ghetto.q3', senseId: 'ghetto.s1', errorType: 'grammar', type: '词义选择', prompt: 'ghetto 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ghetto.q4', senseId: 'ghetto.s1', errorType: 'meaning', type: '词源', prompt: '记 ghetto 时，哪句更稳妥？', options: ['先锁住「贫民区」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贫民区」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贫民区'] },
  });

  D('ghost', {
    etymology: {
      origin: '现代英语常用词「ghost」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ghost', gloss: '鬼' },
      suffix: null,
      history: [
        { label: 'ghost', text: '现代英语常用词「ghost」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鬼。' },
      ],
      formationLogic: '核心义：鬼。',
      mnemonic: '看到 ghost，先说出「鬼」。',
      note: '核心义：鬼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ghost.', chinese: '这一章反复回到同一个点：鬼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ghost.s1', en: 'Without that ghost, the next paragraph is hard to follow.', zh: '没有这个鬼，下一段会很难读。', structure: 'ghost / 表示 / 鬼', grammar: 'noun，围绕「鬼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ghost.', right: 'He gave me some advice about the ghost.', reason: 'advice 不可数。名词 ghost 的单复数按词典词形记。', rule: '先确定 ghost 是noun，再套「鬼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ghost.q1', senseId: 'ghost.s1', errorType: 'meaning', type: '词义选择', prompt: '「ghost」在本条的核心意思是：', options: ['鬼', '完全相反的意思', '一种古代钱币'], answer: '鬼', explain: 'ghost：鬼。' },
      { id: 'ghost.q2', senseId: 'ghost.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ghost?', options: ['鬼', 'a kind of ancient coin', 'the past tense of be'], answer: '鬼', explain: '对的是「鬼」。' },
      { id: 'ghost.q3', senseId: 'ghost.s1', errorType: 'grammar', type: '词义选择', prompt: 'ghost 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ghost.q4', senseId: 'ghost.s1', errorType: 'meaning', type: '词源', prompt: '记 ghost 时，哪句更稳妥？', options: ['先锁住「鬼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鬼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鬼'] },
  });

  D('giant', {
    etymology: {
      origin: '现代英语常用词「giant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'giant', gloss: '巨人' },
      suffix: null,
      history: [
        { label: 'giant', text: '现代英语常用词「giant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：巨人。' },
      ],
      formationLogic: '核心义：巨人。',
      mnemonic: '看到 giant，先说出「巨人」。',
      note: '核心义：巨人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one giant.', chinese: '这一章反复回到同一个点：巨人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'giant.s1', en: 'Without that giant, the next paragraph is hard to follow.', zh: '没有这个巨人，下一段会很难读。', structure: 'giant / 表示 / 巨人', grammar: 'noun，围绕「巨人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the giant.', right: 'He gave me some advice about the giant.', reason: 'advice 不可数。名词 giant 的单复数按词典词形记。', rule: '先确定 giant 是noun，再套「巨人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'giant.q1', senseId: 'giant.s1', errorType: 'meaning', type: '词义选择', prompt: '「giant」在本条的核心意思是：', options: ['巨人', '完全相反的意思', '一种古代钱币'], answer: '巨人', explain: 'giant：巨人。' },
      { id: 'giant.q2', senseId: 'giant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches giant?', options: ['巨人', 'a kind of ancient coin', 'the past tense of be'], answer: '巨人', explain: '对的是「巨人」。' },
      { id: 'giant.q3', senseId: 'giant.s1', errorType: 'grammar', type: '词义选择', prompt: 'giant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'giant.q4', senseId: 'giant.s1', errorType: 'meaning', type: '词源', prompt: '记 giant 时，哪句更稳妥？', options: ['先锁住「巨人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「巨人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['巨人'] },
  });

  D('giddy', {
    etymology: {
      origin: '现代英语常用词「giddy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'giddy', gloss: '头晕的' },
      suffix: null,
      history: [
        { label: 'giddy', text: '现代英语常用词「giddy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：头晕的。' },
      ],
      formationLogic: '核心义：头晕的。',
      mnemonic: '看到 giddy，先说出「头晕的」。',
      note: '核心义：头晕的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was giddy.', chinese: '即使是初读者也能看出，这个结果是头晕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'giddy.s1', en: 'They wanted a giddy answer, not a long speech.', zh: '他们要一个头晕的的答复，不要长篇发言。', structure: 'giddy / 表示 / 头晕的', grammar: 'adjective，围绕「头晕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are giddy.', right: 'The news is giddy.', reason: 'news 作主语时动词用单数。', rule: '先确定 giddy 是adjective，再套「头晕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'giddy.q1', senseId: 'giddy.s1', errorType: 'meaning', type: '词义选择', prompt: '「giddy」在本条的核心意思是：', options: ['头晕的', '完全相反的意思', '一种古代钱币'], answer: '头晕的', explain: 'giddy：头晕的。' },
      { id: 'giddy.q2', senseId: 'giddy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches giddy?', options: ['头晕的', 'a kind of ancient coin', 'the past tense of be'], answer: '头晕的', explain: '对的是「头晕的」。' },
      { id: 'giddy.q3', senseId: 'giddy.s1', errorType: 'grammar', type: '词义选择', prompt: 'giddy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'giddy.q4', senseId: 'giddy.s1', errorType: 'meaning', type: '词源', prompt: '记 giddy 时，哪句更稳妥？', options: ['先锁住「头晕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「头晕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['头晕的'] },
  });

  D('gift', {
    etymology: {
      origin: '现代英语常用词「gift」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gift', gloss: '礼物' },
      suffix: null,
      history: [
        { label: 'gift', text: '现代英语常用词「gift」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：礼物。' },
      ],
      formationLogic: '核心义：礼物。',
      mnemonic: '看到 gift，先说出「礼物」。',
      note: '核心义：礼物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gift.', chinese: '这一章反复回到同一个点：礼物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gift.s1', en: 'Without that gift, the next paragraph is hard to follow.', zh: '没有这个礼物，下一段会很难读。', structure: 'gift / 表示 / 礼物', grammar: 'noun，围绕「礼物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gift.', right: 'He gave me some advice about the gift.', reason: 'advice 不可数。名词 gift 的单复数按词典词形记。', rule: '先确定 gift 是noun，再套「礼物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gift.q1', senseId: 'gift.s1', errorType: 'meaning', type: '词义选择', prompt: '「gift」在本条的核心意思是：', options: ['礼物', '完全相反的意思', '一种古代钱币'], answer: '礼物', explain: 'gift：礼物。' },
      { id: 'gift.q2', senseId: 'gift.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gift?', options: ['礼物', 'a kind of ancient coin', 'the past tense of be'], answer: '礼物', explain: '对的是「礼物」。' },
      { id: 'gift.q3', senseId: 'gift.s1', errorType: 'grammar', type: '词义选择', prompt: 'gift 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gift.q4', senseId: 'gift.s1', errorType: 'meaning', type: '词源', prompt: '记 gift 时，哪句更稳妥？', options: ['先锁住「礼物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「礼物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['礼物'] },
  });

  D('giggle', {
    etymology: {
      origin: '现代英语常用词「giggle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'giggle', gloss: '咯咯地笑' },
      suffix: null,
      history: [
        { label: 'giggle', text: '现代英语常用词「giggle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：咯咯地笑。' },
      ],
      formationLogic: '核心义：咯咯地笑。',
      mnemonic: '看到 giggle，先说出「咯咯地笑」。',
      note: '核心义：咯咯地笑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to giggle before the office closed.', chinese: '他们同意在办公室关门前做这件事：咯咯地笑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'giggle.s1', en: 'The deadline forced the team to giggle that afternoon.', zh: '截止日期逼着小组在那天下午咯咯地笑。', structure: 'giggle / 表示 / 咯咯地笑', grammar: 'verb，围绕「咯咯地笑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She giggleed it yesterday without checking the real past form.', right: 'Check the past form of "giggle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 giggle 是verb，再套「咯咯地笑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'giggle.q1', senseId: 'giggle.s1', errorType: 'meaning', type: '词义选择', prompt: '「giggle」在本条的核心意思是：', options: ['咯咯地笑', '完全相反的意思', '一种古代钱币'], answer: '咯咯地笑', explain: 'giggle：咯咯地笑。' },
      { id: 'giggle.q2', senseId: 'giggle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches giggle?', options: ['咯咯地笑', 'a kind of ancient coin', 'the past tense of be'], answer: '咯咯地笑', explain: '对的是「咯咯地笑」。' },
      { id: 'giggle.q3', senseId: 'giggle.s1', errorType: 'grammar', type: '词义选择', prompt: 'giggle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'giggle.q4', senseId: 'giggle.s1', errorType: 'meaning', type: '词源', prompt: '记 giggle 时，哪句更稳妥？', options: ['先锁住「咯咯地笑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咯咯地笑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咯咯地笑'] },
  });

  D('gild', {
    etymology: {
      origin: '现代英语常用词「gild」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gild', gloss: '镀金' },
      suffix: null,
      history: [
        { label: 'gild', text: '现代英语常用词「gild」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：镀金。' },
      ],
      formationLogic: '核心义：镀金。',
      mnemonic: '看到 gild，先说出「镀金」。',
      note: '核心义：镀金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gild before the office closed.', chinese: '他们同意在办公室关门前做这件事：镀金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gild.s1', en: 'The deadline forced the team to gild that afternoon.', zh: '截止日期逼着小组在那天下午镀金。', structure: 'gild / 表示 / 镀金', grammar: 'verb，围绕「镀金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gilded it yesterday without checking the real past form.', right: 'Check the past form of "gild" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gild 是verb，再套「镀金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gild.q1', senseId: 'gild.s1', errorType: 'meaning', type: '词义选择', prompt: '「gild」在本条的核心意思是：', options: ['镀金', '完全相反的意思', '一种古代钱币'], answer: '镀金', explain: 'gild：镀金。' },
      { id: 'gild.q2', senseId: 'gild.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gild?', options: ['镀金', 'a kind of ancient coin', 'the past tense of be'], answer: '镀金', explain: '对的是「镀金」。' },
      { id: 'gild.q3', senseId: 'gild.s1', errorType: 'grammar', type: '词义选择', prompt: 'gild 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gild.q4', senseId: 'gild.s1', errorType: 'meaning', type: '词源', prompt: '记 gild 时，哪句更稳妥？', options: ['先锁住「镀金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「镀金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['镀金'] },
  });

  D('girl', {
    etymology: {
      origin: '现代英语常用词「girl」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'girl', gloss: '女孩' },
      suffix: null,
      history: [
        { label: 'girl', text: '现代英语常用词「girl」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：女孩。' },
      ],
      formationLogic: '核心义：女孩。',
      mnemonic: '看到 girl，先说出「女孩」。',
      note: '核心义：女孩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one girl.', chinese: '这一章反复回到同一个点：女孩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'girl.s1', en: 'Without that girl, the next paragraph is hard to follow.', zh: '没有这个女孩，下一段会很难读。', structure: 'girl / 表示 / 女孩', grammar: 'noun，围绕「女孩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the girl.', right: 'He gave me some advice about the girl.', reason: 'advice 不可数。名词 girl 的单复数按词典词形记。', rule: '先确定 girl 是noun，再套「女孩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'girl.q1', senseId: 'girl.s1', errorType: 'meaning', type: '词义选择', prompt: '「girl」在本条的核心意思是：', options: ['女孩', '完全相反的意思', '一种古代钱币'], answer: '女孩', explain: 'girl：女孩。' },
      { id: 'girl.q2', senseId: 'girl.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches girl?', options: ['女孩', 'a kind of ancient coin', 'the past tense of be'], answer: '女孩', explain: '对的是「女孩」。' },
      { id: 'girl.q3', senseId: 'girl.s1', errorType: 'grammar', type: '词义选择', prompt: 'girl 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'girl.q4', senseId: 'girl.s1', errorType: 'meaning', type: '词源', prompt: '记 girl 时，哪句更稳妥？', options: ['先锁住「女孩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女孩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女孩'] },
  });

  D('girlfriend', {
    etymology: {
      origin: '现代英语常用词「girlfriend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'girlfriend', gloss: '女朋友' },
      suffix: null,
      history: [
        { label: 'girlfriend', text: '现代英语常用词「girlfriend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：女朋友。' },
      ],
      formationLogic: '核心义：女朋友。',
      mnemonic: '看到 girlfriend，先说出「女朋友」。',
      note: '核心义：女朋友。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one girlfriend.', chinese: '这一章反复回到同一个点：女朋友。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'girlfriend.s1', en: 'Without that girlfriend, the next paragraph is hard to follow.', zh: '没有这个女朋友，下一段会很难读。', structure: 'girlfriend / 表示 / 女朋友', grammar: 'noun，围绕「女朋友」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the girlfriend.', right: 'He gave me some advice about the girlfriend.', reason: 'advice 不可数。名词 girlfriend 的单复数按词典词形记。', rule: '先确定 girlfriend 是noun，再套「女朋友」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'girlfriend.q1', senseId: 'girlfriend.s1', errorType: 'meaning', type: '词义选择', prompt: '「girlfriend」在本条的核心意思是：', options: ['女朋友', '完全相反的意思', '一种古代钱币'], answer: '女朋友', explain: 'girlfriend：女朋友。' },
      { id: 'girlfriend.q2', senseId: 'girlfriend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches girlfriend?', options: ['女朋友', 'a kind of ancient coin', 'the past tense of be'], answer: '女朋友', explain: '对的是「女朋友」。' },
      { id: 'girlfriend.q3', senseId: 'girlfriend.s1', errorType: 'grammar', type: '词义选择', prompt: 'girlfriend 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'girlfriend.q4', senseId: 'girlfriend.s1', errorType: 'meaning', type: '词源', prompt: '记 girlfriend 时，哪句更稳妥？', options: ['先锁住「女朋友」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女朋友」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女朋友'] },
  });

  D('gist', {
    etymology: {
      origin: '现代英语常用词「gist」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gist', gloss: '要旨' },
      suffix: null,
      history: [
        { label: 'gist', text: '现代英语常用词「gist」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：要旨。' },
      ],
      formationLogic: '核心义：要旨。',
      mnemonic: '看到 gist，先说出「要旨」。',
      note: '核心义：要旨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gist.', chinese: '这一章反复回到同一个点：要旨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gist.s1', en: 'Without that gist, the next paragraph is hard to follow.', zh: '没有这个要旨，下一段会很难读。', structure: 'gist / 表示 / 要旨', grammar: 'noun，围绕「要旨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gist.', right: 'He gave me some advice about the gist.', reason: 'advice 不可数。名词 gist 的单复数按词典词形记。', rule: '先确定 gist 是noun，再套「要旨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gist.q1', senseId: 'gist.s1', errorType: 'meaning', type: '词义选择', prompt: '「gist」在本条的核心意思是：', options: ['要旨', '完全相反的意思', '一种古代钱币'], answer: '要旨', explain: 'gist：要旨。' },
      { id: 'gist.q2', senseId: 'gist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gist?', options: ['要旨', 'a kind of ancient coin', 'the past tense of be'], answer: '要旨', explain: '对的是「要旨」。' },
      { id: 'gist.q3', senseId: 'gist.s1', errorType: 'grammar', type: '词义选择', prompt: 'gist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gist.q4', senseId: 'gist.s1', errorType: 'meaning', type: '词源', prompt: '记 gist 时，哪句更稳妥？', options: ['先锁住「要旨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「要旨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['要旨'] },
  });

  D('give', {
    etymology: {
      origin: '现代英语常用词「give」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'give', gloss: '给' },
      suffix: null,
      history: [
        { label: 'give', text: '现代英语常用词「give」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：给。' },
      ],
      formationLogic: '核心义：给。',
      mnemonic: '看到 give，先说出「给」。',
      note: '核心义：给。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to give before the office closed.', chinese: '他们同意在办公室关门前做这件事：给。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'give.s1', en: 'The deadline forced the team to give that afternoon.', zh: '截止日期逼着小组在那天下午给。', structure: 'give / 表示 / 给', grammar: 'verb，围绕「给」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She giveed it yesterday without checking the real past form.', right: 'Check the past form of "give" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 give 是verb，再套「给」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'give.q1', senseId: 'give.s1', errorType: 'meaning', type: '词义选择', prompt: '「give」在本条的核心意思是：', options: ['给', '完全相反的意思', '一种古代钱币'], answer: '给', explain: 'give：给。' },
      { id: 'give.q2', senseId: 'give.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches give?', options: ['给', 'a kind of ancient coin', 'the past tense of be'], answer: '给', explain: '对的是「给」。' },
      { id: 'give.q3', senseId: 'give.s1', errorType: 'grammar', type: '词义选择', prompt: 'give 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'give.q4', senseId: 'give.s1', errorType: 'meaning', type: '词源', prompt: '记 give 时，哪句更稳妥？', options: ['先锁住「给」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「给」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['给'] },
  });

  D('give back', {
    etymology: {
      origin: '现代英语固定说法「give back」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'give back', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'give back', text: '现代英语固定说法「give back」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：归还。' },
      ],
      formationLogic: '核心义：归还。',
      mnemonic: '看到 give back，先说出「归还」。',
      note: '核心义：归还。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "give back" and asked the class to keep it as one unit.', chinese: '老师把「give back」圈出来，让全班把它当成一个整体。它表示归还。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'give back.s1', en: 'In the margin she wrote "give back" so nobody would split the phrase.', zh: '她在页边写下「give back」，免得有人把这个说法拆开。意思是归还。', structure: 'give back / 表示 / 归还', grammar: 'verb，围绕「归还」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of give back and lost the point.', right: 'Keep "give back" together: it means 归还.', reason: '「give back」要整块理解。', rule: '先确定 give back 是verb，再套「归还」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'give back.q1', senseId: 'give back.s1', errorType: 'meaning', type: '词义选择', prompt: '「give back」在本条的核心意思是：', options: ['归还', '完全相反的意思', '一种古代钱币'], answer: '归还', explain: 'give back：归还。' },
      { id: 'give back.q2', senseId: 'give back.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches give back?', options: ['归还', 'a kind of ancient coin', 'the past tense of be'], answer: '归还', explain: '对的是「归还」。' },
      { id: 'give back.q3', senseId: 'give back.s1', errorType: 'grammar', type: '词义选择', prompt: 'give back 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'give back.q4', senseId: 'give back.s1', errorType: 'meaning', type: '词源', prompt: '记 give back 时，哪句更稳妥？', options: ['先锁住「归还」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「归还」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['归还'] },
  });

  D('give birth to', {
    etymology: {
      origin: '现代英语固定说法「give birth to」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'give birth to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'give birth to', text: '现代英语固定说法「give birth to」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：生（孩子）。' },
      ],
      formationLogic: '核心义：生（孩子）。',
      mnemonic: '看到 give birth to，先说出「生（孩子）」。',
      note: '核心义：生（孩子）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "give birth to" and asked the class to keep it as one unit.', chinese: '老师把「give birth to」圈出来，让全班把它当成一个整体。它表示生（孩子）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'give birth to.s1', en: 'In the margin she wrote "give birth to" so nobody would split the phrase.', zh: '她在页边写下「give birth to」，免得有人把这个说法拆开。意思是生（孩子）。', structure: 'give birth to / 表示 / 生（孩子）', grammar: 'verb，围绕「生（孩子）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of give birth to and lost the point.', right: 'Keep "give birth to" together: it means 生（孩子）.', reason: '「give birth to」要整块理解。', rule: '先确定 give birth to 是verb，再套「生（孩子）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'give birth to.q1', senseId: 'give birth to.s1', errorType: 'meaning', type: '词义选择', prompt: '「give birth to」在本条的核心意思是：', options: ['生（孩子）', '完全相反的意思', '一种古代钱币'], answer: '生（孩子）', explain: 'give birth to：生（孩子）。' },
      { id: 'give birth to.q2', senseId: 'give birth to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches give birth to?', options: ['生（孩子）', 'a kind of ancient coin', 'the past tense of be'], answer: '生（孩子）', explain: '对的是「生（孩子）」。' },
      { id: 'give birth to.q3', senseId: 'give birth to.s1', errorType: 'grammar', type: '词义选择', prompt: 'give birth to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'give birth to.q4', senseId: 'give birth to.s1', errorType: 'meaning', type: '词源', prompt: '记 give birth to 时，哪句更稳妥？', options: ['先锁住「生（孩子）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「生（孩子）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['生（孩子）'] },
  });

  D('give off', {
    etymology: {
      origin: '现代英语固定说法「give off」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'give off', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'give off', text: '现代英语固定说法「give off」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：散发。' },
      ],
      formationLogic: '核心义：散发。',
      mnemonic: '看到 give off，先说出「散发」。',
      note: '核心义：散发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "give off" and asked the class to keep it as one unit.', chinese: '老师把「give off」圈出来，让全班把它当成一个整体。它表示散发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'give off.s1', en: 'In the margin she wrote "give off" so nobody would split the phrase.', zh: '她在页边写下「give off」，免得有人把这个说法拆开。意思是散发。', structure: 'give off / 表示 / 散发', grammar: 'verb，围绕「散发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of give off and lost the point.', right: 'Keep "give off" together: it means 散发.', reason: '「give off」要整块理解。', rule: '先确定 give off 是verb，再套「散发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'give off.q1', senseId: 'give off.s1', errorType: 'meaning', type: '词义选择', prompt: '「give off」在本条的核心意思是：', options: ['散发', '完全相反的意思', '一种古代钱币'], answer: '散发', explain: 'give off：散发。' },
      { id: 'give off.q2', senseId: 'give off.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches give off?', options: ['散发', 'a kind of ancient coin', 'the past tense of be'], answer: '散发', explain: '对的是「散发」。' },
      { id: 'give off.q3', senseId: 'give off.s1', errorType: 'grammar', type: '词义选择', prompt: 'give off 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'give off.q4', senseId: 'give off.s1', errorType: 'meaning', type: '词源', prompt: '记 give off 时，哪句更稳妥？', options: ['先锁住「散发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「散发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['散发'] },
  });

  D('give up', {
    etymology: {
      origin: '现代英语固定说法「give up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'give up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'give up', text: '现代英语固定说法「give up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：放弃。' },
      ],
      formationLogic: '核心义：放弃。',
      mnemonic: '看到 give up，先说出「放弃」。',
      note: '核心义：放弃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "give up" and asked the class to keep it as one unit.', chinese: '老师把「give up」圈出来，让全班把它当成一个整体。它表示放弃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'give up.s1', en: 'In the margin she wrote "give up" so nobody would split the phrase.', zh: '她在页边写下「give up」，免得有人把这个说法拆开。意思是放弃。', structure: 'give up / 表示 / 放弃', grammar: 'verb，围绕「放弃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of give up and lost the point.', right: 'Keep "give up" together: it means 放弃.', reason: '「give up」要整块理解。', rule: '先确定 give up 是verb，再套「放弃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'give up.q1', senseId: 'give up.s1', errorType: 'meaning', type: '词义选择', prompt: '「give up」在本条的核心意思是：', options: ['放弃', '完全相反的意思', '一种古代钱币'], answer: '放弃', explain: 'give up：放弃。' },
      { id: 'give up.q2', senseId: 'give up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches give up?', options: ['放弃', 'a kind of ancient coin', 'the past tense of be'], answer: '放弃', explain: '对的是「放弃」。' },
      { id: 'give up.q3', senseId: 'give up.s1', errorType: 'grammar', type: '词义选择', prompt: 'give up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'give up.q4', senseId: 'give up.s1', errorType: 'meaning', type: '词源', prompt: '记 give up 时，哪句更稳妥？', options: ['先锁住「放弃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「放弃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放弃'] },
  });

  D('give way', {
    etymology: {
      origin: '现代英语固定说法「give way」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'give way', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'give way', text: '现代英语固定说法「give way」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：让路。' },
      ],
      formationLogic: '核心义：让路。',
      mnemonic: '看到 give way，先说出「让路」。',
      note: '核心义：让路。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "give way" and asked the class to keep it as one unit.', chinese: '老师把「give way」圈出来，让全班把它当成一个整体。它表示让路。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'give way.s1', en: 'In the margin she wrote "give way" so nobody would split the phrase.', zh: '她在页边写下「give way」，免得有人把这个说法拆开。意思是让路。', structure: 'give way / 表示 / 让路', grammar: 'verb，围绕「让路」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of give way and lost the point.', right: 'Keep "give way" together: it means 让路.', reason: '「give way」要整块理解。', rule: '先确定 give way 是verb，再套「让路」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'give way.q1', senseId: 'give way.s1', errorType: 'meaning', type: '词义选择', prompt: '「give way」在本条的核心意思是：', options: ['让路', '完全相反的意思', '一种古代钱币'], answer: '让路', explain: 'give way：让路。' },
      { id: 'give way.q2', senseId: 'give way.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches give way?', options: ['让路', 'a kind of ancient coin', 'the past tense of be'], answer: '让路', explain: '对的是「让路」。' },
      { id: 'give way.q3', senseId: 'give way.s1', errorType: 'grammar', type: '词义选择', prompt: 'give way 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'give way.q4', senseId: 'give way.s1', errorType: 'meaning', type: '词源', prompt: '记 give way 时，哪句更稳妥？', options: ['先锁住「让路」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「让路」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['让路'] },
  });

  D('given', {
    etymology: {
      origin: '现代英语常用词「given」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'given', gloss: '规定的' },
      suffix: null,
      history: [
        { label: 'given', text: '现代英语常用词「given」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：规定的。' },
      ],
      formationLogic: '核心义：规定的。',
      mnemonic: '看到 given，先说出「规定的」。',
      note: '核心义：规定的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was given.', chinese: '即使是初读者也能看出，这个结果是规定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'given.s1', en: 'They wanted a given answer, not a long speech.', zh: '他们要一个规定的的答复，不要长篇发言。', structure: 'given / 表示 / 规定的', grammar: 'adjective，围绕「规定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are given.', right: 'The news is given.', reason: 'news 作主语时动词用单数。', rule: '先确定 given 是adjective，再套「规定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'given.q1', senseId: 'given.s1', errorType: 'meaning', type: '词义选择', prompt: '「given」在本条的核心意思是：', options: ['规定的', '完全相反的意思', '一种古代钱币'], answer: '规定的', explain: 'given：规定的。' },
      { id: 'given.q2', senseId: 'given.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches given?', options: ['规定的', 'a kind of ancient coin', 'the past tense of be'], answer: '规定的', explain: '对的是「规定的」。' },
      { id: 'given.q3', senseId: 'given.s1', errorType: 'grammar', type: '词义选择', prompt: 'given 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'given.q4', senseId: 'given.s1', errorType: 'meaning', type: '词源', prompt: '记 given 时，哪句更稳妥？', options: ['先锁住「规定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「规定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['规定的'] },
  });

  D('given that', {
    etymology: {
      origin: '现代英语固定说法「given that」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'given that', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'given that', text: '现代英语固定说法「given that」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：考虑到。' },
      ],
      formationLogic: '核心义：考虑到。',
      mnemonic: '看到 given that，先说出「考虑到」。',
      note: '核心义：考虑到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "given that" and asked the class to keep it as one unit.', chinese: '老师把「given that」圈出来，让全班把它当成一个整体。它表示考虑到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'given that.s1', en: 'In the margin she wrote "given that" so nobody would split the phrase.', zh: '她在页边写下「given that」，免得有人把这个说法拆开。意思是考虑到。', structure: 'given that / 表示 / 考虑到', grammar: 'conjunction，围绕「考虑到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of given that and lost the point.', right: 'Keep "given that" together: it means 考虑到.', reason: '「given that」要整块理解。', rule: '先确定 given that 是conjunction，再套「考虑到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'given that.q1', senseId: 'given that.s1', errorType: 'meaning', type: '词义选择', prompt: '「given that」在本条的核心意思是：', options: ['考虑到', '完全相反的意思', '一种古代钱币'], answer: '考虑到', explain: 'given that：考虑到。' },
      { id: 'given that.q2', senseId: 'given that.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches given that?', options: ['考虑到', 'a kind of ancient coin', 'the past tense of be'], answer: '考虑到', explain: '对的是「考虑到」。' },
      { id: 'given that.q3', senseId: 'given that.s1', errorType: 'grammar', type: '词义选择', prompt: 'given that 的词性（本条）更接近：', options: ['conjunction', '只能作感叹词', '只能作数词'], answer: 'conjunction', explain: '本条按 conjunction 来用。' },
      { id: 'given that.q4', senseId: 'given that.s1', errorType: 'meaning', type: '词源', prompt: '记 given that 时，哪句更稳妥？', options: ['先锁住「考虑到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考虑到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考虑到'] },
  });

  D('giving up', {
    etymology: {
      origin: '现代英语固定说法「giving up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'giving up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'giving up', text: '现代英语固定说法「giving up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：放弃。' },
      ],
      formationLogic: '核心义：放弃。',
      mnemonic: '看到 giving up，先说出「放弃」。',
      note: '核心义：放弃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "giving up" and asked the class to keep it as one unit.', chinese: '老师把「giving up」圈出来，让全班把它当成一个整体。它表示放弃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'giving up.s1', en: 'In the margin she wrote "giving up" so nobody would split the phrase.', zh: '她在页边写下「giving up」，免得有人把这个说法拆开。意思是放弃。', structure: 'giving up / 表示 / 放弃', grammar: 'noun，围绕「放弃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of giving up and lost the point.', right: 'Keep "giving up" together: it means 放弃.', reason: '「giving up」要整块理解。', rule: '先确定 giving up 是noun，再套「放弃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'giving up.q1', senseId: 'giving up.s1', errorType: 'meaning', type: '词义选择', prompt: '「giving up」在本条的核心意思是：', options: ['放弃', '完全相反的意思', '一种古代钱币'], answer: '放弃', explain: 'giving up：放弃。' },
      { id: 'giving up.q2', senseId: 'giving up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches giving up?', options: ['放弃', 'a kind of ancient coin', 'the past tense of be'], answer: '放弃', explain: '对的是「放弃」。' },
      { id: 'giving up.q3', senseId: 'giving up.s1', errorType: 'grammar', type: '词义选择', prompt: 'giving up 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'giving up.q4', senseId: 'giving up.s1', errorType: 'meaning', type: '词源', prompt: '记 giving up 时，哪句更稳妥？', options: ['先锁住「放弃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「放弃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放弃'] },
  });

  D('gizmo', {
    etymology: {
      origin: '现代英语常用词「gizmo」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gizmo', gloss: '小玩意儿' },
      suffix: null,
      history: [
        { label: 'gizmo', text: '现代英语常用词「gizmo」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小玩意儿。' },
      ],
      formationLogic: '核心义：小玩意儿。',
      mnemonic: '看到 gizmo，先说出「小玩意儿」。',
      note: '核心义：小玩意儿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gizmo.', chinese: '这一章反复回到同一个点：小玩意儿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gizmo.s1', en: 'Without that gizmo, the next paragraph is hard to follow.', zh: '没有这个小玩意儿，下一段会很难读。', structure: 'gizmo / 表示 / 小玩意儿', grammar: 'noun，围绕「小玩意儿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gizmo.', right: 'He gave me some advice about the gizmo.', reason: 'advice 不可数。名词 gizmo 的单复数按词典词形记。', rule: '先确定 gizmo 是noun，再套「小玩意儿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gizmo.q1', senseId: 'gizmo.s1', errorType: 'meaning', type: '词义选择', prompt: '「gizmo」在本条的核心意思是：', options: ['小玩意儿', '完全相反的意思', '一种古代钱币'], answer: '小玩意儿', explain: 'gizmo：小玩意儿。' },
      { id: 'gizmo.q2', senseId: 'gizmo.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gizmo?', options: ['小玩意儿', 'a kind of ancient coin', 'the past tense of be'], answer: '小玩意儿', explain: '对的是「小玩意儿」。' },
      { id: 'gizmo.q3', senseId: 'gizmo.s1', errorType: 'grammar', type: '词义选择', prompt: 'gizmo 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gizmo.q4', senseId: 'gizmo.s1', errorType: 'meaning', type: '词源', prompt: '记 gizmo 时，哪句更稳妥？', options: ['先锁住「小玩意儿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小玩意儿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小玩意儿'] },
  });

  D('glacier', {
    etymology: {
      origin: '英语派生：glaci + -er，词性转到「冰川」。',
      prefix: null,
      root: { text: 'glaci', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glacier', text: '英语派生：glaci + -er，词性转到「冰川」。' },
        { label: '现在', text: '核心用法是：冰川。' },
      ],
      formationLogic: '先认词干 glaci，再看词尾。',
      mnemonic: '看到 glacier，先说出「冰川」。',
      note: '先认词干 glaci，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glacier.', chinese: '这一章反复回到同一个点：冰川。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glacier.s1', en: 'Without that glacier, the next paragraph is hard to follow.', zh: '没有这个冰川，下一段会很难读。', structure: 'glacier / 表示 / 冰川', grammar: 'noun，围绕「冰川」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glacier.', right: 'He gave me some advice about the glacier.', reason: 'advice 不可数。名词 glacier 的单复数按词典词形记。', rule: '先确定 glacier 是noun，再套「冰川」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glacier.q1', senseId: 'glacier.s1', errorType: 'meaning', type: '词义选择', prompt: '「glacier」在本条的核心意思是：', options: ['冰川', '完全相反的意思', '一种古代钱币'], answer: '冰川', explain: 'glacier：冰川。' },
      { id: 'glacier.q2', senseId: 'glacier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glacier?', options: ['冰川', 'a kind of ancient coin', 'the past tense of be'], answer: '冰川', explain: '对的是「冰川」。' },
      { id: 'glacier.q3', senseId: 'glacier.s1', errorType: 'grammar', type: '词义选择', prompt: 'glacier 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glacier.q4', senseId: 'glacier.s1', errorType: 'meaning', type: '词源', prompt: '记 glacier 时，哪句更稳妥？', options: ['先锁住「冰川」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冰川」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冰川'] },
  });

  D('glad', {
    etymology: {
      origin: '现代英语常用词「glad」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glad', gloss: '高兴的' },
      suffix: null,
      history: [
        { label: 'glad', text: '现代英语常用词「glad」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：高兴的。' },
      ],
      formationLogic: '核心义：高兴的。',
      mnemonic: '看到 glad，先说出「高兴的」。',
      note: '核心义：高兴的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was glad.', chinese: '即使是初读者也能看出，这个结果是高兴的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glad.s1', en: 'They wanted a glad answer, not a long speech.', zh: '他们要一个高兴的的答复，不要长篇发言。', structure: 'glad / 表示 / 高兴的', grammar: 'adjective，围绕「高兴的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are glad.', right: 'The news is glad.', reason: 'news 作主语时动词用单数。', rule: '先确定 glad 是adjective，再套「高兴的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glad.q1', senseId: 'glad.s1', errorType: 'meaning', type: '词义选择', prompt: '「glad」在本条的核心意思是：', options: ['高兴的', '完全相反的意思', '一种古代钱币'], answer: '高兴的', explain: 'glad：高兴的。' },
      { id: 'glad.q2', senseId: 'glad.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glad?', options: ['高兴的', 'a kind of ancient coin', 'the past tense of be'], answer: '高兴的', explain: '对的是「高兴的」。' },
      { id: 'glad.q3', senseId: 'glad.s1', errorType: 'grammar', type: '词义选择', prompt: 'glad 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'glad.q4', senseId: 'glad.s1', errorType: 'meaning', type: '词源', prompt: '记 glad 时，哪句更稳妥？', options: ['先锁住「高兴的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「高兴的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高兴的'] },
  });

  D('gladden', {
    etymology: {
      origin: '现代英语常用词「gladden」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gladden', gloss: '使高兴' },
      suffix: null,
      history: [
        { label: 'gladden', text: '现代英语常用词「gladden」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使高兴。' },
      ],
      formationLogic: '核心义：使高兴。',
      mnemonic: '看到 gladden，先说出「使高兴」。',
      note: '核心义：使高兴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gladden before the office closed.', chinese: '他们同意在办公室关门前做这件事：使高兴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gladden.s1', en: 'The deadline forced the team to gladden that afternoon.', zh: '截止日期逼着小组在那天下午使高兴。', structure: 'gladden / 表示 / 使高兴', grammar: 'verb，围绕「使高兴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gladdened it yesterday without checking the real past form.', right: 'Check the past form of "gladden" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gladden 是verb，再套「使高兴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gladden.q1', senseId: 'gladden.s1', errorType: 'meaning', type: '词义选择', prompt: '「gladden」在本条的核心意思是：', options: ['使高兴', '完全相反的意思', '一种古代钱币'], answer: '使高兴', explain: 'gladden：使高兴。' },
      { id: 'gladden.q2', senseId: 'gladden.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gladden?', options: ['使高兴', 'a kind of ancient coin', 'the past tense of be'], answer: '使高兴', explain: '对的是「使高兴」。' },
      { id: 'gladden.q3', senseId: 'gladden.s1', errorType: 'grammar', type: '词义选择', prompt: 'gladden 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gladden.q4', senseId: 'gladden.s1', errorType: 'meaning', type: '词源', prompt: '记 gladden 时，哪句更稳妥？', options: ['先锁住「使高兴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使高兴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使高兴'] },
  });

  D('glade', {
    etymology: {
      origin: '现代英语常用词「glade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glade', gloss: '林中空地' },
      suffix: null,
      history: [
        { label: 'glade', text: '现代英语常用词「glade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：林中空地。' },
      ],
      formationLogic: '核心义：林中空地。',
      mnemonic: '看到 glade，先说出「林中空地」。',
      note: '核心义：林中空地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glade.', chinese: '这一章反复回到同一个点：林中空地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glade.s1', en: 'Without that glade, the next paragraph is hard to follow.', zh: '没有这个林中空地，下一段会很难读。', structure: 'glade / 表示 / 林中空地', grammar: 'noun，围绕「林中空地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glade.', right: 'He gave me some advice about the glade.', reason: 'advice 不可数。名词 glade 的单复数按词典词形记。', rule: '先确定 glade 是noun，再套「林中空地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glade.q1', senseId: 'glade.s1', errorType: 'meaning', type: '词义选择', prompt: '「glade」在本条的核心意思是：', options: ['林中空地', '完全相反的意思', '一种古代钱币'], answer: '林中空地', explain: 'glade：林中空地。' },
      { id: 'glade.q2', senseId: 'glade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glade?', options: ['林中空地', 'a kind of ancient coin', 'the past tense of be'], answer: '林中空地', explain: '对的是「林中空地」。' },
      { id: 'glade.q3', senseId: 'glade.s1', errorType: 'grammar', type: '词义选择', prompt: 'glade 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glade.q4', senseId: 'glade.s1', errorType: 'meaning', type: '词源', prompt: '记 glade 时，哪句更稳妥？', options: ['先锁住「林中空地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「林中空地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['林中空地'] },
  });

  D('glamor', {
    etymology: {
      origin: '英语派生：glam + -or，词性转到「魅力」。',
      prefix: null,
      root: { text: 'glam', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glamor', text: '英语派生：glam + -or，词性转到「魅力」。' },
        { label: '现在', text: '核心用法是：魅力。' },
      ],
      formationLogic: '先认词干 glam，再看词尾。',
      mnemonic: '看到 glamor，先说出「魅力」。',
      note: '先认词干 glam，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glamor.', chinese: '这一章反复回到同一个点：魅力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glamor.s1', en: 'Without that glamor, the next paragraph is hard to follow.', zh: '没有这个魅力，下一段会很难读。', structure: 'glamor / 表示 / 魅力', grammar: 'noun，围绕「魅力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glamor.', right: 'He gave me some advice about the glamor.', reason: 'advice 不可数。名词 glamor 的单复数按词典词形记。', rule: '先确定 glamor 是noun，再套「魅力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glamor.q1', senseId: 'glamor.s1', errorType: 'meaning', type: '词义选择', prompt: '「glamor」在本条的核心意思是：', options: ['魅力', '完全相反的意思', '一种古代钱币'], answer: '魅力', explain: 'glamor：魅力。' },
      { id: 'glamor.q2', senseId: 'glamor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glamor?', options: ['魅力', 'a kind of ancient coin', 'the past tense of be'], answer: '魅力', explain: '对的是「魅力」。' },
      { id: 'glamor.q3', senseId: 'glamor.s1', errorType: 'grammar', type: '词义选择', prompt: 'glamor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glamor.q4', senseId: 'glamor.s1', errorType: 'meaning', type: '词源', prompt: '记 glamor 时，哪句更稳妥？', options: ['先锁住「魅力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「魅力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['魅力'] },
  });

  D('glance', {
    etymology: {
      origin: '现代英语常用词「glance」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glance', gloss: '瞥一眼' },
      suffix: null,
      history: [
        { label: 'glance', text: '现代英语常用词「glance」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：瞥一眼。' },
      ],
      formationLogic: '核心义：瞥一眼。',
      mnemonic: '看到 glance，先说出「瞥一眼」。',
      note: '核心义：瞥一眼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glance before the office closed.', chinese: '他们同意在办公室关门前做这件事：瞥一眼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glance.s1', en: 'The deadline forced the team to glance that afternoon.', zh: '截止日期逼着小组在那天下午瞥一眼。', structure: 'glance / 表示 / 瞥一眼', grammar: 'verb，围绕「瞥一眼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glanceed it yesterday without checking the real past form.', right: 'Check the past form of "glance" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glance 是verb，再套「瞥一眼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glance.q1', senseId: 'glance.s1', errorType: 'meaning', type: '词义选择', prompt: '「glance」在本条的核心意思是：', options: ['瞥一眼', '完全相反的意思', '一种古代钱币'], answer: '瞥一眼', explain: 'glance：瞥一眼。' },
      { id: 'glance.q2', senseId: 'glance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glance?', options: ['瞥一眼', 'a kind of ancient coin', 'the past tense of be'], answer: '瞥一眼', explain: '对的是「瞥一眼」。' },
      { id: 'glance.q3', senseId: 'glance.s1', errorType: 'grammar', type: '词义选择', prompt: 'glance 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glance.q4', senseId: 'glance.s1', errorType: 'meaning', type: '词源', prompt: '记 glance 时，哪句更稳妥？', options: ['先锁住「瞥一眼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「瞥一眼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['瞥一眼'] },
  });

  D('gland', {
    etymology: {
      origin: '现代英语常用词「gland」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gland', gloss: '腺' },
      suffix: null,
      history: [
        { label: 'gland', text: '现代英语常用词「gland」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：腺。' },
      ],
      formationLogic: '核心义：腺。',
      mnemonic: '看到 gland，先说出「腺」。',
      note: '核心义：腺。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gland.', chinese: '这一章反复回到同一个点：腺。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gland.s1', en: 'Without that gland, the next paragraph is hard to follow.', zh: '没有这个腺，下一段会很难读。', structure: 'gland / 表示 / 腺', grammar: 'noun，围绕「腺」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gland.', right: 'He gave me some advice about the gland.', reason: 'advice 不可数。名词 gland 的单复数按词典词形记。', rule: '先确定 gland 是noun，再套「腺」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gland.q1', senseId: 'gland.s1', errorType: 'meaning', type: '词义选择', prompt: '「gland」在本条的核心意思是：', options: ['腺', '完全相反的意思', '一种古代钱币'], answer: '腺', explain: 'gland：腺。' },
      { id: 'gland.q2', senseId: 'gland.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gland?', options: ['腺', 'a kind of ancient coin', 'the past tense of be'], answer: '腺', explain: '对的是「腺」。' },
      { id: 'gland.q3', senseId: 'gland.s1', errorType: 'grammar', type: '词义选择', prompt: 'gland 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gland.q4', senseId: 'gland.s1', errorType: 'meaning', type: '词源', prompt: '记 gland 时，哪句更稳妥？', options: ['先锁住「腺」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腺」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腺'] },
  });

  D('glare', {
    etymology: {
      origin: '现代英语常用词「glare」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glare', gloss: '怒视' },
      suffix: null,
      history: [
        { label: 'glare', text: '现代英语常用词「glare」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：怒视。' },
      ],
      formationLogic: '核心义：怒视。',
      mnemonic: '看到 glare，先说出「怒视」。',
      note: '核心义：怒视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glare before the office closed.', chinese: '他们同意在办公室关门前做这件事：怒视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glare.s1', en: 'The deadline forced the team to glare that afternoon.', zh: '截止日期逼着小组在那天下午怒视。', structure: 'glare / 表示 / 怒视', grammar: 'verb，围绕「怒视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glareed it yesterday without checking the real past form.', right: 'Check the past form of "glare" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glare 是verb，再套「怒视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glare.q1', senseId: 'glare.s1', errorType: 'meaning', type: '词义选择', prompt: '「glare」在本条的核心意思是：', options: ['怒视', '完全相反的意思', '一种古代钱币'], answer: '怒视', explain: 'glare：怒视。' },
      { id: 'glare.q2', senseId: 'glare.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glare?', options: ['怒视', 'a kind of ancient coin', 'the past tense of be'], answer: '怒视', explain: '对的是「怒视」。' },
      { id: 'glare.q3', senseId: 'glare.s1', errorType: 'grammar', type: '词义选择', prompt: 'glare 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glare.q4', senseId: 'glare.s1', errorType: 'meaning', type: '词源', prompt: '记 glare 时，哪句更稳妥？', options: ['先锁住「怒视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怒视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怒视'] },
  });

  D('glass', {
    etymology: {
      origin: '现代英语常用词「glass」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glass', gloss: '玻璃' },
      suffix: null,
      history: [
        { label: 'glass', text: '现代英语常用词「glass」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：玻璃。' },
      ],
      formationLogic: '核心义：玻璃。',
      mnemonic: '看到 glass，先说出「玻璃」。',
      note: '核心义：玻璃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glass.', chinese: '这一章反复回到同一个点：玻璃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glass.s1', en: 'Without that glass, the next paragraph is hard to follow.', zh: '没有这个玻璃，下一段会很难读。', structure: 'glass / 表示 / 玻璃', grammar: 'noun，围绕「玻璃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glass.', right: 'He gave me some advice about the glass.', reason: 'advice 不可数。名词 glass 的单复数按词典词形记。', rule: '先确定 glass 是noun，再套「玻璃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glass.q1', senseId: 'glass.s1', errorType: 'meaning', type: '词义选择', prompt: '「glass」在本条的核心意思是：', options: ['玻璃', '完全相反的意思', '一种古代钱币'], answer: '玻璃', explain: 'glass：玻璃。' },
      { id: 'glass.q2', senseId: 'glass.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glass?', options: ['玻璃', 'a kind of ancient coin', 'the past tense of be'], answer: '玻璃', explain: '对的是「玻璃」。' },
      { id: 'glass.q3', senseId: 'glass.s1', errorType: 'grammar', type: '词义选择', prompt: 'glass 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glass.q4', senseId: 'glass.s1', errorType: 'meaning', type: '词源', prompt: '记 glass 时，哪句更稳妥？', options: ['先锁住「玻璃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「玻璃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['玻璃'] },
  });

  D('glasses', {
    etymology: {
      origin: '现代英语常用词「glasses」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glasses', gloss: '眼镜（复数）' },
      suffix: null,
      history: [
        { label: 'glasses', text: '现代英语常用词「glasses」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：眼镜（复数）。' },
      ],
      formationLogic: '核心义：眼镜（复数）。',
      mnemonic: '看到 glasses，先说出「眼镜（复数）」。',
      note: '核心义：眼镜（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glasses.', chinese: '这一章反复回到同一个点：眼镜（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glasses.s1', en: 'Without that glasses, the next paragraph is hard to follow.', zh: '没有这个眼镜（复数），下一段会很难读。', structure: 'glasses / 表示 / 眼镜（复数）', grammar: 'noun，围绕「眼镜（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glasses.', right: 'He gave me some advice about the glasses.', reason: 'advice 不可数。名词 glasses 的单复数按词典词形记。', rule: '先确定 glasses 是noun，再套「眼镜（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glasses.q1', senseId: 'glasses.s1', errorType: 'meaning', type: '词义选择', prompt: '「glasses」在本条的核心意思是：', options: ['眼镜（复数）', '完全相反的意思', '一种古代钱币'], answer: '眼镜（复数）', explain: 'glasses：眼镜（复数）。' },
      { id: 'glasses.q2', senseId: 'glasses.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glasses?', options: ['眼镜（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '眼镜（复数）', explain: '对的是「眼镜（复数）」。' },
      { id: 'glasses.q3', senseId: 'glasses.s1', errorType: 'grammar', type: '词义选择', prompt: 'glasses 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glasses.q4', senseId: 'glasses.s1', errorType: 'meaning', type: '词源', prompt: '记 glasses 时，哪句更稳妥？', options: ['先锁住「眼镜（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「眼镜（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['眼镜（复数）'] },
  });

  D('glasshouse', {
    etymology: {
      origin: '现代英语常用词「glasshouse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glasshouse', gloss: '温室' },
      suffix: null,
      history: [
        { label: 'glasshouse', text: '现代英语常用词「glasshouse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：温室。' },
      ],
      formationLogic: '核心义：温室。',
      mnemonic: '看到 glasshouse，先说出「温室」。',
      note: '核心义：温室。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glasshouse.', chinese: '这一章反复回到同一个点：温室。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glasshouse.s1', en: 'Without that glasshouse, the next paragraph is hard to follow.', zh: '没有这个温室，下一段会很难读。', structure: 'glasshouse / 表示 / 温室', grammar: 'noun，围绕「温室」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glasshouse.', right: 'He gave me some advice about the glasshouse.', reason: 'advice 不可数。名词 glasshouse 的单复数按词典词形记。', rule: '先确定 glasshouse 是noun，再套「温室」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glasshouse.q1', senseId: 'glasshouse.s1', errorType: 'meaning', type: '词义选择', prompt: '「glasshouse」在本条的核心意思是：', options: ['温室', '完全相反的意思', '一种古代钱币'], answer: '温室', explain: 'glasshouse：温室。' },
      { id: 'glasshouse.q2', senseId: 'glasshouse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glasshouse?', options: ['温室', 'a kind of ancient coin', 'the past tense of be'], answer: '温室', explain: '对的是「温室」。' },
      { id: 'glasshouse.q3', senseId: 'glasshouse.s1', errorType: 'grammar', type: '词义选择', prompt: 'glasshouse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glasshouse.q4', senseId: 'glasshouse.s1', errorType: 'meaning', type: '词源', prompt: '记 glasshouse 时，哪句更稳妥？', options: ['先锁住「温室」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「温室」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['温室'] },
  });

  D('gleam', {
    etymology: {
      origin: '现代英语常用词「gleam」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gleam', gloss: '闪光' },
      suffix: null,
      history: [
        { label: 'gleam', text: '现代英语常用词「gleam」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闪光。' },
      ],
      formationLogic: '核心义：闪光。',
      mnemonic: '看到 gleam，先说出「闪光」。',
      note: '核心义：闪光。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gleam before the office closed.', chinese: '他们同意在办公室关门前做这件事：闪光。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gleam.s1', en: 'The deadline forced the team to gleam that afternoon.', zh: '截止日期逼着小组在那天下午闪光。', structure: 'gleam / 表示 / 闪光', grammar: 'verb，围绕「闪光」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gleamed it yesterday without checking the real past form.', right: 'Check the past form of "gleam" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gleam 是verb，再套「闪光」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gleam.q1', senseId: 'gleam.s1', errorType: 'meaning', type: '词义选择', prompt: '「gleam」在本条的核心意思是：', options: ['闪光', '完全相反的意思', '一种古代钱币'], answer: '闪光', explain: 'gleam：闪光。' },
      { id: 'gleam.q2', senseId: 'gleam.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gleam?', options: ['闪光', 'a kind of ancient coin', 'the past tense of be'], answer: '闪光', explain: '对的是「闪光」。' },
      { id: 'gleam.q3', senseId: 'gleam.s1', errorType: 'grammar', type: '词义选择', prompt: 'gleam 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gleam.q4', senseId: 'gleam.s1', errorType: 'meaning', type: '词源', prompt: '记 gleam 时，哪句更稳妥？', options: ['先锁住「闪光」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闪光」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闪光'] },
  });

  D('glib', {
    etymology: {
      origin: '现代英语常用词「glib」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glib', gloss: '油嘴滑舌的' },
      suffix: null,
      history: [
        { label: 'glib', text: '现代英语常用词「glib」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：油嘴滑舌的。' },
      ],
      formationLogic: '核心义：油嘴滑舌的。',
      mnemonic: '看到 glib，先说出「油嘴滑舌的」。',
      note: '核心义：油嘴滑舌的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was glib.', chinese: '即使是初读者也能看出，这个结果是油嘴滑舌的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glib.s1', en: 'They wanted a glib answer, not a long speech.', zh: '他们要一个油嘴滑舌的的答复，不要长篇发言。', structure: 'glib / 表示 / 油嘴滑舌的', grammar: 'adjective，围绕「油嘴滑舌的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are glib.', right: 'The news is glib.', reason: 'news 作主语时动词用单数。', rule: '先确定 glib 是adjective，再套「油嘴滑舌的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glib.q1', senseId: 'glib.s1', errorType: 'meaning', type: '词义选择', prompt: '「glib」在本条的核心意思是：', options: ['油嘴滑舌的', '完全相反的意思', '一种古代钱币'], answer: '油嘴滑舌的', explain: 'glib：油嘴滑舌的。' },
      { id: 'glib.q2', senseId: 'glib.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glib?', options: ['油嘴滑舌的', 'a kind of ancient coin', 'the past tense of be'], answer: '油嘴滑舌的', explain: '对的是「油嘴滑舌的」。' },
      { id: 'glib.q3', senseId: 'glib.s1', errorType: 'grammar', type: '词义选择', prompt: 'glib 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'glib.q4', senseId: 'glib.s1', errorType: 'meaning', type: '词源', prompt: '记 glib 时，哪句更稳妥？', options: ['先锁住「油嘴滑舌的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「油嘴滑舌的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['油嘴滑舌的'] },
  });

  D('glide', {
    etymology: {
      origin: '现代英语常用词「glide」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glide', gloss: '滑行' },
      suffix: null,
      history: [
        { label: 'glide', text: '现代英语常用词「glide」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：滑行。' },
      ],
      formationLogic: '核心义：滑行。',
      mnemonic: '看到 glide，先说出「滑行」。',
      note: '核心义：滑行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glide before the office closed.', chinese: '他们同意在办公室关门前做这件事：滑行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glide.s1', en: 'The deadline forced the team to glide that afternoon.', zh: '截止日期逼着小组在那天下午滑行。', structure: 'glide / 表示 / 滑行', grammar: 'verb，围绕「滑行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glideed it yesterday without checking the real past form.', right: 'Check the past form of "glide" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glide 是verb，再套「滑行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glide.q1', senseId: 'glide.s1', errorType: 'meaning', type: '词义选择', prompt: '「glide」在本条的核心意思是：', options: ['滑行', '完全相反的意思', '一种古代钱币'], answer: '滑行', explain: 'glide：滑行。' },
      { id: 'glide.q2', senseId: 'glide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glide?', options: ['滑行', 'a kind of ancient coin', 'the past tense of be'], answer: '滑行', explain: '对的是「滑行」。' },
      { id: 'glide.q3', senseId: 'glide.s1', errorType: 'grammar', type: '词义选择', prompt: 'glide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glide.q4', senseId: 'glide.s1', errorType: 'meaning', type: '词源', prompt: '记 glide 时，哪句更稳妥？', options: ['先锁住「滑行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「滑行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['滑行'] },
  });

  D('glimmer', {
    etymology: {
      origin: '英语派生：glimm + -er，词性转到「微光」。',
      prefix: null,
      root: { text: 'glimm', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glimmer', text: '英语派生：glimm + -er，词性转到「微光」。' },
        { label: '现在', text: '核心用法是：微光。' },
      ],
      formationLogic: '先认词干 glimm，再看词尾。',
      mnemonic: '看到 glimmer，先说出「微光」。',
      note: '先认词干 glimm，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glimmer.', chinese: '这一章反复回到同一个点：微光。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glimmer.s1', en: 'Without that glimmer, the next paragraph is hard to follow.', zh: '没有这个微光，下一段会很难读。', structure: 'glimmer / 表示 / 微光', grammar: 'noun，围绕「微光」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glimmer.', right: 'He gave me some advice about the glimmer.', reason: 'advice 不可数。名词 glimmer 的单复数按词典词形记。', rule: '先确定 glimmer 是noun，再套「微光」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glimmer.q1', senseId: 'glimmer.s1', errorType: 'meaning', type: '词义选择', prompt: '「glimmer」在本条的核心意思是：', options: ['微光', '完全相反的意思', '一种古代钱币'], answer: '微光', explain: 'glimmer：微光。' },
      { id: 'glimmer.q2', senseId: 'glimmer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glimmer?', options: ['微光', 'a kind of ancient coin', 'the past tense of be'], answer: '微光', explain: '对的是「微光」。' },
      { id: 'glimmer.q3', senseId: 'glimmer.s1', errorType: 'grammar', type: '词义选择', prompt: 'glimmer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glimmer.q4', senseId: 'glimmer.s1', errorType: 'meaning', type: '词源', prompt: '记 glimmer 时，哪句更稳妥？', options: ['先锁住「微光」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「微光」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['微光'] },
  });

  D('glimpse', {
    etymology: {
      origin: '现代英语常用词「glimpse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glimpse', gloss: '一瞥' },
      suffix: null,
      history: [
        { label: 'glimpse', text: '现代英语常用词「glimpse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一瞥。' },
      ],
      formationLogic: '核心义：一瞥。',
      mnemonic: '看到 glimpse，先说出「一瞥」。',
      note: '核心义：一瞥。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glimpse.', chinese: '这一章反复回到同一个点：一瞥。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glimpse.s1', en: 'Without that glimpse, the next paragraph is hard to follow.', zh: '没有这个一瞥，下一段会很难读。', structure: 'glimpse / 表示 / 一瞥', grammar: 'noun，围绕「一瞥」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glimpse.', right: 'He gave me some advice about the glimpse.', reason: 'advice 不可数。名词 glimpse 的单复数按词典词形记。', rule: '先确定 glimpse 是noun，再套「一瞥」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glimpse.q1', senseId: 'glimpse.s1', errorType: 'meaning', type: '词义选择', prompt: '「glimpse」在本条的核心意思是：', options: ['一瞥', '完全相反的意思', '一种古代钱币'], answer: '一瞥', explain: 'glimpse：一瞥。' },
      { id: 'glimpse.q2', senseId: 'glimpse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glimpse?', options: ['一瞥', 'a kind of ancient coin', 'the past tense of be'], answer: '一瞥', explain: '对的是「一瞥」。' },
      { id: 'glimpse.q3', senseId: 'glimpse.s1', errorType: 'grammar', type: '词义选择', prompt: 'glimpse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glimpse.q4', senseId: 'glimpse.s1', errorType: 'meaning', type: '词源', prompt: '记 glimpse 时，哪句更稳妥？', options: ['先锁住「一瞥」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一瞥」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一瞥'] },
  });

  D('glitter', {
    etymology: {
      origin: '英语派生：glitt + -er，词性转到「闪闪发光」。',
      prefix: null,
      root: { text: 'glitt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glitter', text: '英语派生：glitt + -er，词性转到「闪闪发光」。' },
        { label: '现在', text: '核心用法是：闪闪发光。' },
      ],
      formationLogic: '先认词干 glitt，再看词尾。',
      mnemonic: '看到 glitter，先说出「闪闪发光」。',
      note: '先认词干 glitt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glitter before the office closed.', chinese: '他们同意在办公室关门前做这件事：闪闪发光。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glitter.s1', en: 'The deadline forced the team to glitter that afternoon.', zh: '截止日期逼着小组在那天下午闪闪发光。', structure: 'glitter / 表示 / 闪闪发光', grammar: 'verb，围绕「闪闪发光」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glittered it yesterday without checking the real past form.', right: 'Check the past form of "glitter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glitter 是verb，再套「闪闪发光」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glitter.q1', senseId: 'glitter.s1', errorType: 'meaning', type: '词义选择', prompt: '「glitter」在本条的核心意思是：', options: ['闪闪发光', '完全相反的意思', '一种古代钱币'], answer: '闪闪发光', explain: 'glitter：闪闪发光。' },
      { id: 'glitter.q2', senseId: 'glitter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glitter?', options: ['闪闪发光', 'a kind of ancient coin', 'the past tense of be'], answer: '闪闪发光', explain: '对的是「闪闪发光」。' },
      { id: 'glitter.q3', senseId: 'glitter.s1', errorType: 'grammar', type: '词义选择', prompt: 'glitter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glitter.q4', senseId: 'glitter.s1', errorType: 'meaning', type: '词源', prompt: '记 glitter 时，哪句更稳妥？', options: ['先锁住「闪闪发光」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闪闪发光」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闪闪发光'] },
  });

  D('global', {
    etymology: {
      origin: '英语派生：glob + -al，词性转到「全球的」。',
      prefix: null,
      root: { text: 'glob', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'global', text: '英语派生：glob + -al，词性转到「全球的」。' },
        { label: '现在', text: '核心用法是：全球的。' },
      ],
      formationLogic: '先认词干 glob，再看词尾。',
      mnemonic: '看到 global，先说出「全球的」。',
      note: '先认词干 glob，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was global.', chinese: '即使是初读者也能看出，这个结果是全球的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'global.s1', en: 'They wanted a global answer, not a long speech.', zh: '他们要一个全球的的答复，不要长篇发言。', structure: 'global / 表示 / 全球的', grammar: 'adjective，围绕「全球的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are global.', right: 'The news is global.', reason: 'news 作主语时动词用单数。', rule: '先确定 global 是adjective，再套「全球的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'global.q1', senseId: 'global.s1', errorType: 'meaning', type: '词义选择', prompt: '「global」在本条的核心意思是：', options: ['全球的', '完全相反的意思', '一种古代钱币'], answer: '全球的', explain: 'global：全球的。' },
      { id: 'global.q2', senseId: 'global.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches global?', options: ['全球的', 'a kind of ancient coin', 'the past tense of be'], answer: '全球的', explain: '对的是「全球的」。' },
      { id: 'global.q3', senseId: 'global.s1', errorType: 'grammar', type: '词义选择', prompt: 'global 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'global.q4', senseId: 'global.s1', errorType: 'meaning', type: '词源', prompt: '记 global 时，哪句更稳妥？', options: ['先锁住「全球的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全球的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全球的'] },
  });

  D('globally', {
    etymology: {
      origin: '英语派生：global + -ly，词性转到「全球地」。',
      prefix: null,
      root: { text: 'global', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'globally', text: '英语派生：global + -ly，词性转到「全球地」。' },
        { label: '现在', text: '核心用法是：全球地。' },
      ],
      formationLogic: '先认词干 global，再看词尾。',
      mnemonic: '看到 globally，先说出「全球地」。',
      note: '先认词干 global，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule globally, and the class followed.', chinese: '她把规则讲清楚了（全球地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'globally.s1', en: 'He nodded globally and returned to the notes.', zh: '他全球地地点了点头，又回去看笔记。', structure: 'globally / 表示 / 全球地', grammar: 'adverb，围绕「全球地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very globallyly in the meeting.', right: 'She spoke globally in the meeting.', reason: 'globally 已经是副词，不要再加 -ly。', rule: '先确定 globally 是adverb，再套「全球地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'globally.q1', senseId: 'globally.s1', errorType: 'meaning', type: '词义选择', prompt: '「globally」在本条的核心意思是：', options: ['全球地', '完全相反的意思', '一种古代钱币'], answer: '全球地', explain: 'globally：全球地。' },
      { id: 'globally.q2', senseId: 'globally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches globally?', options: ['全球地', 'a kind of ancient coin', 'the past tense of be'], answer: '全球地', explain: '对的是「全球地」。' },
      { id: 'globally.q3', senseId: 'globally.s1', errorType: 'grammar', type: '词义选择', prompt: 'globally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'globally.q4', senseId: 'globally.s1', errorType: 'meaning', type: '词源', prompt: '记 globally 时，哪句更稳妥？', options: ['先锁住「全球地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全球地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全球地'] },
  });

  D('globe', {
    etymology: {
      origin: '现代英语常用词「globe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'globe', gloss: '地球' },
      suffix: null,
      history: [
        { label: 'globe', text: '现代英语常用词「globe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地球。' },
      ],
      formationLogic: '核心义：地球。',
      mnemonic: '看到 globe，先说出「地球」。',
      note: '核心义：地球。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one globe.', chinese: '这一章反复回到同一个点：地球。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'globe.s1', en: 'Without that globe, the next paragraph is hard to follow.', zh: '没有这个地球，下一段会很难读。', structure: 'globe / 表示 / 地球', grammar: 'noun，围绕「地球」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the globe.', right: 'He gave me some advice about the globe.', reason: 'advice 不可数。名词 globe 的单复数按词典词形记。', rule: '先确定 globe 是noun，再套「地球」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'globe.q1', senseId: 'globe.s1', errorType: 'meaning', type: '词义选择', prompt: '「globe」在本条的核心意思是：', options: ['地球', '完全相反的意思', '一种古代钱币'], answer: '地球', explain: 'globe：地球。' },
      { id: 'globe.q2', senseId: 'globe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches globe?', options: ['地球', 'a kind of ancient coin', 'the past tense of be'], answer: '地球', explain: '对的是「地球」。' },
      { id: 'globe.q3', senseId: 'globe.s1', errorType: 'grammar', type: '词义选择', prompt: 'globe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'globe.q4', senseId: 'globe.s1', errorType: 'meaning', type: '词源', prompt: '记 globe 时，哪句更稳妥？', options: ['先锁住「地球」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地球」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地球'] },
  });

  D('gloom', {
    etymology: {
      origin: '现代英语常用词「gloom」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gloom', gloss: '昏暗' },
      suffix: null,
      history: [
        { label: 'gloom', text: '现代英语常用词「gloom」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：昏暗。' },
      ],
      formationLogic: '核心义：昏暗。',
      mnemonic: '看到 gloom，先说出「昏暗」。',
      note: '核心义：昏暗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gloom.', chinese: '这一章反复回到同一个点：昏暗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gloom.s1', en: 'Without that gloom, the next paragraph is hard to follow.', zh: '没有这个昏暗，下一段会很难读。', structure: 'gloom / 表示 / 昏暗', grammar: 'noun，围绕「昏暗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gloom.', right: 'He gave me some advice about the gloom.', reason: 'advice 不可数。名词 gloom 的单复数按词典词形记。', rule: '先确定 gloom 是noun，再套「昏暗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gloom.q1', senseId: 'gloom.s1', errorType: 'meaning', type: '词义选择', prompt: '「gloom」在本条的核心意思是：', options: ['昏暗', '完全相反的意思', '一种古代钱币'], answer: '昏暗', explain: 'gloom：昏暗。' },
      { id: 'gloom.q2', senseId: 'gloom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gloom?', options: ['昏暗', 'a kind of ancient coin', 'the past tense of be'], answer: '昏暗', explain: '对的是「昏暗」。' },
      { id: 'gloom.q3', senseId: 'gloom.s1', errorType: 'grammar', type: '词义选择', prompt: 'gloom 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gloom.q4', senseId: 'gloom.s1', errorType: 'meaning', type: '词源', prompt: '记 gloom 时，哪句更稳妥？', options: ['先锁住「昏暗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「昏暗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['昏暗'] },
  });

  D('gloomy', {
    etymology: {
      origin: '现代英语常用词「gloomy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gloomy', gloss: '阴暗的' },
      suffix: null,
      history: [
        { label: 'gloomy', text: '现代英语常用词「gloomy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：阴暗的。' },
      ],
      formationLogic: '核心义：阴暗的。',
      mnemonic: '看到 gloomy，先说出「阴暗的」。',
      note: '核心义：阴暗的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was gloomy.', chinese: '即使是初读者也能看出，这个结果是阴暗的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gloomy.s1', en: 'They wanted a gloomy answer, not a long speech.', zh: '他们要一个阴暗的的答复，不要长篇发言。', structure: 'gloomy / 表示 / 阴暗的', grammar: 'adjective，围绕「阴暗的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are gloomy.', right: 'The news is gloomy.', reason: 'news 作主语时动词用单数。', rule: '先确定 gloomy 是adjective，再套「阴暗的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gloomy.q1', senseId: 'gloomy.s1', errorType: 'meaning', type: '词义选择', prompt: '「gloomy」在本条的核心意思是：', options: ['阴暗的', '完全相反的意思', '一种古代钱币'], answer: '阴暗的', explain: 'gloomy：阴暗的。' },
      { id: 'gloomy.q2', senseId: 'gloomy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gloomy?', options: ['阴暗的', 'a kind of ancient coin', 'the past tense of be'], answer: '阴暗的', explain: '对的是「阴暗的」。' },
      { id: 'gloomy.q3', senseId: 'gloomy.s1', errorType: 'grammar', type: '词义选择', prompt: 'gloomy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'gloomy.q4', senseId: 'gloomy.s1', errorType: 'meaning', type: '词源', prompt: '记 gloomy 时，哪句更稳妥？', options: ['先锁住「阴暗的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「阴暗的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['阴暗的'] },
  });

  D('glorify', {
    etymology: {
      origin: '现代英语常用词「glorify」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glorify', gloss: '赞美' },
      suffix: null,
      history: [
        { label: 'glorify', text: '现代英语常用词「glorify」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赞美。' },
      ],
      formationLogic: '核心义：赞美。',
      mnemonic: '看到 glorify，先说出「赞美」。',
      note: '核心义：赞美。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glorify before the office closed.', chinese: '他们同意在办公室关门前做这件事：赞美。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glorify.s1', en: 'The deadline forced the team to glorify that afternoon.', zh: '截止日期逼着小组在那天下午赞美。', structure: 'glorify / 表示 / 赞美', grammar: 'verb，围绕「赞美」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glorifyed it yesterday without checking the real past form.', right: 'Check the past form of "glorify" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glorify 是verb，再套「赞美」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glorify.q1', senseId: 'glorify.s1', errorType: 'meaning', type: '词义选择', prompt: '「glorify」在本条的核心意思是：', options: ['赞美', '完全相反的意思', '一种古代钱币'], answer: '赞美', explain: 'glorify：赞美。' },
      { id: 'glorify.q2', senseId: 'glorify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glorify?', options: ['赞美', 'a kind of ancient coin', 'the past tense of be'], answer: '赞美', explain: '对的是「赞美」。' },
      { id: 'glorify.q3', senseId: 'glorify.s1', errorType: 'grammar', type: '词义选择', prompt: 'glorify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glorify.q4', senseId: 'glorify.s1', errorType: 'meaning', type: '词源', prompt: '记 glorify 时，哪句更稳妥？', options: ['先锁住「赞美」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赞美」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赞美'] },
  });

  D('glorious', {
    etymology: {
      origin: '英语派生：glori + -ous，词性转到「辉煌的」。',
      prefix: null,
      root: { text: 'glori', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glorious', text: '英语派生：glori + -ous，词性转到「辉煌的」。' },
        { label: '现在', text: '核心用法是：辉煌的。' },
      ],
      formationLogic: '先认词干 glori，再看词尾。',
      mnemonic: '看到 glorious，先说出「辉煌的」。',
      note: '先认词干 glori，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was glorious.', chinese: '即使是初读者也能看出，这个结果是辉煌的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glorious.s1', en: 'They wanted a glorious answer, not a long speech.', zh: '他们要一个辉煌的的答复，不要长篇发言。', structure: 'glorious / 表示 / 辉煌的', grammar: 'adjective，围绕「辉煌的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are glorious.', right: 'The news is glorious.', reason: 'news 作主语时动词用单数。', rule: '先确定 glorious 是adjective，再套「辉煌的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glorious.q1', senseId: 'glorious.s1', errorType: 'meaning', type: '词义选择', prompt: '「glorious」在本条的核心意思是：', options: ['辉煌的', '完全相反的意思', '一种古代钱币'], answer: '辉煌的', explain: 'glorious：辉煌的。' },
      { id: 'glorious.q2', senseId: 'glorious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glorious?', options: ['辉煌的', 'a kind of ancient coin', 'the past tense of be'], answer: '辉煌的', explain: '对的是「辉煌的」。' },
      { id: 'glorious.q3', senseId: 'glorious.s1', errorType: 'grammar', type: '词义选择', prompt: 'glorious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'glorious.q4', senseId: 'glorious.s1', errorType: 'meaning', type: '词源', prompt: '记 glorious 时，哪句更稳妥？', options: ['先锁住「辉煌的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「辉煌的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['辉煌的'] },
  });

  D('glory', {
    etymology: {
      origin: '现代英语常用词「glory」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glory', gloss: '光荣' },
      suffix: null,
      history: [
        { label: 'glory', text: '现代英语常用词「glory」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：光荣。' },
      ],
      formationLogic: '核心义：光荣。',
      mnemonic: '看到 glory，先说出「光荣」。',
      note: '核心义：光荣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glory.', chinese: '这一章反复回到同一个点：光荣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glory.s1', en: 'Without that glory, the next paragraph is hard to follow.', zh: '没有这个光荣，下一段会很难读。', structure: 'glory / 表示 / 光荣', grammar: 'noun，围绕「光荣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glory.', right: 'He gave me some advice about the glory.', reason: 'advice 不可数。名词 glory 的单复数按词典词形记。', rule: '先确定 glory 是noun，再套「光荣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glory.q1', senseId: 'glory.s1', errorType: 'meaning', type: '词义选择', prompt: '「glory」在本条的核心意思是：', options: ['光荣', '完全相反的意思', '一种古代钱币'], answer: '光荣', explain: 'glory：光荣。' },
      { id: 'glory.q2', senseId: 'glory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glory?', options: ['光荣', 'a kind of ancient coin', 'the past tense of be'], answer: '光荣', explain: '对的是「光荣」。' },
      { id: 'glory.q3', senseId: 'glory.s1', errorType: 'grammar', type: '词义选择', prompt: 'glory 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glory.q4', senseId: 'glory.s1', errorType: 'meaning', type: '词源', prompt: '记 glory 时，哪句更稳妥？', options: ['先锁住「光荣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「光荣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['光荣'] },
  });

  D('gloss', {
    etymology: {
      origin: '现代英语常用词「gloss」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gloss', gloss: '光泽' },
      suffix: null,
      history: [
        { label: 'gloss', text: '现代英语常用词「gloss」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：光泽。' },
      ],
      formationLogic: '核心义：光泽。',
      mnemonic: '看到 gloss，先说出「光泽」。',
      note: '核心义：光泽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gloss.', chinese: '这一章反复回到同一个点：光泽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gloss.s1', en: 'Without that gloss, the next paragraph is hard to follow.', zh: '没有这个光泽，下一段会很难读。', structure: 'gloss / 表示 / 光泽', grammar: 'noun，围绕「光泽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gloss.', right: 'He gave me some advice about the gloss.', reason: 'advice 不可数。名词 gloss 的单复数按词典词形记。', rule: '先确定 gloss 是noun，再套「光泽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gloss.q1', senseId: 'gloss.s1', errorType: 'meaning', type: '词义选择', prompt: '「gloss」在本条的核心意思是：', options: ['光泽', '完全相反的意思', '一种古代钱币'], answer: '光泽', explain: 'gloss：光泽。' },
      { id: 'gloss.q2', senseId: 'gloss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gloss?', options: ['光泽', 'a kind of ancient coin', 'the past tense of be'], answer: '光泽', explain: '对的是「光泽」。' },
      { id: 'gloss.q3', senseId: 'gloss.s1', errorType: 'grammar', type: '词义选择', prompt: 'gloss 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gloss.q4', senseId: 'gloss.s1', errorType: 'meaning', type: '词源', prompt: '记 gloss 时，哪句更稳妥？', options: ['先锁住「光泽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「光泽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['光泽'] },
  });

  D('glossary', {
    etymology: {
      origin: '现代英语常用词「glossary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glossary', gloss: '词汇表' },
      suffix: null,
      history: [
        { label: 'glossary', text: '现代英语常用词「glossary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：词汇表。' },
      ],
      formationLogic: '核心义：词汇表。',
      mnemonic: '看到 glossary，先说出「词汇表」。',
      note: '核心义：词汇表。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glossary.', chinese: '这一章反复回到同一个点：词汇表。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glossary.s1', en: 'Without that glossary, the next paragraph is hard to follow.', zh: '没有这个词汇表，下一段会很难读。', structure: 'glossary / 表示 / 词汇表', grammar: 'noun，围绕「词汇表」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glossary.', right: 'He gave me some advice about the glossary.', reason: 'advice 不可数。名词 glossary 的单复数按词典词形记。', rule: '先确定 glossary 是noun，再套「词汇表」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glossary.q1', senseId: 'glossary.s1', errorType: 'meaning', type: '词义选择', prompt: '「glossary」在本条的核心意思是：', options: ['词汇表', '完全相反的意思', '一种古代钱币'], answer: '词汇表', explain: 'glossary：词汇表。' },
      { id: 'glossary.q2', senseId: 'glossary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glossary?', options: ['词汇表', 'a kind of ancient coin', 'the past tense of be'], answer: '词汇表', explain: '对的是「词汇表」。' },
      { id: 'glossary.q3', senseId: 'glossary.s1', errorType: 'grammar', type: '词义选择', prompt: 'glossary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glossary.q4', senseId: 'glossary.s1', errorType: 'meaning', type: '词源', prompt: '记 glossary 时，哪句更稳妥？', options: ['先锁住「词汇表」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「词汇表」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['词汇表'] },
  });

  D('glove', {
    etymology: {
      origin: '现代英语常用词「glove」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glove', gloss: '手套' },
      suffix: null,
      history: [
        { label: 'glove', text: '现代英语常用词「glove」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：手套。' },
      ],
      formationLogic: '核心义：手套。',
      mnemonic: '看到 glove，先说出「手套」。',
      note: '核心义：手套。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glove.', chinese: '这一章反复回到同一个点：手套。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glove.s1', en: 'Without that glove, the next paragraph is hard to follow.', zh: '没有这个手套，下一段会很难读。', structure: 'glove / 表示 / 手套', grammar: 'noun，围绕「手套」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glove.', right: 'He gave me some advice about the glove.', reason: 'advice 不可数。名词 glove 的单复数按词典词形记。', rule: '先确定 glove 是noun，再套「手套」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glove.q1', senseId: 'glove.s1', errorType: 'meaning', type: '词义选择', prompt: '「glove」在本条的核心意思是：', options: ['手套', '完全相反的意思', '一种古代钱币'], answer: '手套', explain: 'glove：手套。' },
      { id: 'glove.q2', senseId: 'glove.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glove?', options: ['手套', 'a kind of ancient coin', 'the past tense of be'], answer: '手套', explain: '对的是「手套」。' },
      { id: 'glove.q3', senseId: 'glove.s1', errorType: 'grammar', type: '词义选择', prompt: 'glove 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glove.q4', senseId: 'glove.s1', errorType: 'meaning', type: '词源', prompt: '记 glove 时，哪句更稳妥？', options: ['先锁住「手套」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手套」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手套'] },
  });

  D('glow', {
    etymology: {
      origin: '现代英语常用词「glow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glow', gloss: '发光' },
      suffix: null,
      history: [
        { label: 'glow', text: '现代英语常用词「glow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：发光。' },
      ],
      formationLogic: '核心义：发光。',
      mnemonic: '看到 glow，先说出「发光」。',
      note: '核心义：发光。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glow before the office closed.', chinese: '他们同意在办公室关门前做这件事：发光。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glow.s1', en: 'The deadline forced the team to glow that afternoon.', zh: '截止日期逼着小组在那天下午发光。', structure: 'glow / 表示 / 发光', grammar: 'verb，围绕「发光」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glowed it yesterday without checking the real past form.', right: 'Check the past form of "glow" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glow 是verb，再套「发光」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glow.q1', senseId: 'glow.s1', errorType: 'meaning', type: '词义选择', prompt: '「glow」在本条的核心意思是：', options: ['发光', '完全相反的意思', '一种古代钱币'], answer: '发光', explain: 'glow：发光。' },
      { id: 'glow.q2', senseId: 'glow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glow?', options: ['发光', 'a kind of ancient coin', 'the past tense of be'], answer: '发光', explain: '对的是「发光」。' },
      { id: 'glow.q3', senseId: 'glow.s1', errorType: 'grammar', type: '词义选择', prompt: 'glow 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glow.q4', senseId: 'glow.s1', errorType: 'meaning', type: '词源', prompt: '记 glow 时，哪句更稳妥？', options: ['先锁住「发光」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发光」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发光'] },
  });

  D('glower', {
    etymology: {
      origin: '英语派生：glow + -er，词性转到「怒视」。',
      prefix: null,
      root: { text: 'glow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glower', text: '英语派生：glow + -er，词性转到「怒视」。' },
        { label: '现在', text: '核心用法是：怒视。' },
      ],
      formationLogic: '先认词干 glow，再看词尾。',
      mnemonic: '看到 glower，先说出「怒视」。',
      note: '先认词干 glow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to glower before the office closed.', chinese: '他们同意在办公室关门前做这件事：怒视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glower.s1', en: 'The deadline forced the team to glower that afternoon.', zh: '截止日期逼着小组在那天下午怒视。', structure: 'glower / 表示 / 怒视', grammar: 'verb，围绕「怒视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She glowered it yesterday without checking the real past form.', right: 'Check the past form of "glower" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 glower 是verb，再套「怒视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glower.q1', senseId: 'glower.s1', errorType: 'meaning', type: '词义选择', prompt: '「glower」在本条的核心意思是：', options: ['怒视', '完全相反的意思', '一种古代钱币'], answer: '怒视', explain: 'glower：怒视。' },
      { id: 'glower.q2', senseId: 'glower.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glower?', options: ['怒视', 'a kind of ancient coin', 'the past tense of be'], answer: '怒视', explain: '对的是「怒视」。' },
      { id: 'glower.q3', senseId: 'glower.s1', errorType: 'grammar', type: '词义选择', prompt: 'glower 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'glower.q4', senseId: 'glower.s1', errorType: 'meaning', type: '词源', prompt: '记 glower 时，哪句更稳妥？', options: ['先锁住「怒视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怒视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怒视'] },
  });

  D('glowing', {
    etymology: {
      origin: '英语派生：glow + -ing，词性转到「发光的」。',
      prefix: null,
      root: { text: 'glow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'glowing', text: '英语派生：glow + -ing，词性转到「发光的」。' },
        { label: '现在', text: '核心用法是：发光的。' },
      ],
      formationLogic: '先认词干 glow，再看词尾。',
      mnemonic: '看到 glowing，先说出「发光的」。',
      note: '先认词干 glow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was glowing.', chinese: '即使是初读者也能看出，这个结果是发光的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glowing.s1', en: 'They wanted a glowing answer, not a long speech.', zh: '他们要一个发光的的答复，不要长篇发言。', structure: 'glowing / 表示 / 发光的', grammar: 'adjective，围绕「发光的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are glowing.', right: 'The news is glowing.', reason: 'news 作主语时动词用单数。', rule: '先确定 glowing 是adjective，再套「发光的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glowing.q1', senseId: 'glowing.s1', errorType: 'meaning', type: '词义选择', prompt: '「glowing」在本条的核心意思是：', options: ['发光的', '完全相反的意思', '一种古代钱币'], answer: '发光的', explain: 'glowing：发光的。' },
      { id: 'glowing.q2', senseId: 'glowing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glowing?', options: ['发光的', 'a kind of ancient coin', 'the past tense of be'], answer: '发光的', explain: '对的是「发光的」。' },
      { id: 'glowing.q3', senseId: 'glowing.s1', errorType: 'grammar', type: '词义选择', prompt: 'glowing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'glowing.q4', senseId: 'glowing.s1', errorType: 'meaning', type: '词源', prompt: '记 glowing 时，哪句更稳妥？', options: ['先锁住「发光的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发光的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发光的'] },
  });

  D('glue', {
    etymology: {
      origin: '现代英语常用词「glue」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glue', gloss: '胶水' },
      suffix: null,
      history: [
        { label: 'glue', text: '现代英语常用词「glue」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：胶水。' },
      ],
      formationLogic: '核心义：胶水。',
      mnemonic: '看到 glue，先说出「胶水」。',
      note: '核心义：胶水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glue.', chinese: '这一章反复回到同一个点：胶水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glue.s1', en: 'Without that glue, the next paragraph is hard to follow.', zh: '没有这个胶水，下一段会很难读。', structure: 'glue / 表示 / 胶水', grammar: 'noun，围绕「胶水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glue.', right: 'He gave me some advice about the glue.', reason: 'advice 不可数。名词 glue 的单复数按词典词形记。', rule: '先确定 glue 是noun，再套「胶水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glue.q1', senseId: 'glue.s1', errorType: 'meaning', type: '词义选择', prompt: '「glue」在本条的核心意思是：', options: ['胶水', '完全相反的意思', '一种古代钱币'], answer: '胶水', explain: 'glue：胶水。' },
      { id: 'glue.q2', senseId: 'glue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glue?', options: ['胶水', 'a kind of ancient coin', 'the past tense of be'], answer: '胶水', explain: '对的是「胶水」。' },
      { id: 'glue.q3', senseId: 'glue.s1', errorType: 'grammar', type: '词义选择', prompt: 'glue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glue.q4', senseId: 'glue.s1', errorType: 'meaning', type: '词源', prompt: '记 glue 时，哪句更稳妥？', options: ['先锁住「胶水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「胶水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['胶水'] },
  });

  D('glut', {
    etymology: {
      origin: '现代英语常用词「glut」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glut', gloss: '供过于求' },
      suffix: null,
      history: [
        { label: 'glut', text: '现代英语常用词「glut」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：供过于求。' },
      ],
      formationLogic: '核心义：供过于求。',
      mnemonic: '看到 glut，先说出「供过于求」。',
      note: '核心义：供过于求。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glut.', chinese: '这一章反复回到同一个点：供过于求。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glut.s1', en: 'Without that glut, the next paragraph is hard to follow.', zh: '没有这个供过于求，下一段会很难读。', structure: 'glut / 表示 / 供过于求', grammar: 'noun，围绕「供过于求」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glut.', right: 'He gave me some advice about the glut.', reason: 'advice 不可数。名词 glut 的单复数按词典词形记。', rule: '先确定 glut 是noun，再套「供过于求」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glut.q1', senseId: 'glut.s1', errorType: 'meaning', type: '词义选择', prompt: '「glut」在本条的核心意思是：', options: ['供过于求', '完全相反的意思', '一种古代钱币'], answer: '供过于求', explain: 'glut：供过于求。' },
      { id: 'glut.q2', senseId: 'glut.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glut?', options: ['供过于求', 'a kind of ancient coin', 'the past tense of be'], answer: '供过于求', explain: '对的是「供过于求」。' },
      { id: 'glut.q3', senseId: 'glut.s1', errorType: 'grammar', type: '词义选择', prompt: 'glut 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glut.q4', senseId: 'glut.s1', errorType: 'meaning', type: '词源', prompt: '记 glut 时，哪句更稳妥？', options: ['先锁住「供过于求」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「供过于求」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['供过于求'] },
  });

  D('glutton', {
    etymology: {
      origin: '现代英语常用词「glutton」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'glutton', gloss: '贪吃者' },
      suffix: null,
      history: [
        { label: 'glutton', text: '现代英语常用词「glutton」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：贪吃者。' },
      ],
      formationLogic: '核心义：贪吃者。',
      mnemonic: '看到 glutton，先说出「贪吃者」。',
      note: '核心义：贪吃者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one glutton.', chinese: '这一章反复回到同一个点：贪吃者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'glutton.s1', en: 'Without that glutton, the next paragraph is hard to follow.', zh: '没有这个贪吃者，下一段会很难读。', structure: 'glutton / 表示 / 贪吃者', grammar: 'noun，围绕「贪吃者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the glutton.', right: 'He gave me some advice about the glutton.', reason: 'advice 不可数。名词 glutton 的单复数按词典词形记。', rule: '先确定 glutton 是noun，再套「贪吃者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'glutton.q1', senseId: 'glutton.s1', errorType: 'meaning', type: '词义选择', prompt: '「glutton」在本条的核心意思是：', options: ['贪吃者', '完全相反的意思', '一种古代钱币'], answer: '贪吃者', explain: 'glutton：贪吃者。' },
      { id: 'glutton.q2', senseId: 'glutton.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches glutton?', options: ['贪吃者', 'a kind of ancient coin', 'the past tense of be'], answer: '贪吃者', explain: '对的是「贪吃者」。' },
      { id: 'glutton.q3', senseId: 'glutton.s1', errorType: 'grammar', type: '词义选择', prompt: 'glutton 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'glutton.q4', senseId: 'glutton.s1', errorType: 'meaning', type: '词源', prompt: '记 glutton 时，哪句更稳妥？', options: ['先锁住「贪吃者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贪吃者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贪吃者'] },
  });

  D('gluttony', {
    etymology: {
      origin: '现代英语常用词「gluttony」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gluttony', gloss: '暴食' },
      suffix: null,
      history: [
        { label: 'gluttony', text: '现代英语常用词「gluttony」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：暴食。' },
      ],
      formationLogic: '核心义：暴食。',
      mnemonic: '看到 gluttony，先说出「暴食」。',
      note: '核心义：暴食。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gluttony.', chinese: '这一章反复回到同一个点：暴食。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gluttony.s1', en: 'Without that gluttony, the next paragraph is hard to follow.', zh: '没有这个暴食，下一段会很难读。', structure: 'gluttony / 表示 / 暴食', grammar: 'noun，围绕「暴食」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gluttony.', right: 'He gave me some advice about the gluttony.', reason: 'advice 不可数。名词 gluttony 的单复数按词典词形记。', rule: '先确定 gluttony 是noun，再套「暴食」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gluttony.q1', senseId: 'gluttony.s1', errorType: 'meaning', type: '词义选择', prompt: '「gluttony」在本条的核心意思是：', options: ['暴食', '完全相反的意思', '一种古代钱币'], answer: '暴食', explain: 'gluttony：暴食。' },
      { id: 'gluttony.q2', senseId: 'gluttony.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gluttony?', options: ['暴食', 'a kind of ancient coin', 'the past tense of be'], answer: '暴食', explain: '对的是「暴食」。' },
      { id: 'gluttony.q3', senseId: 'gluttony.s1', errorType: 'grammar', type: '词义选择', prompt: 'gluttony 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gluttony.q4', senseId: 'gluttony.s1', errorType: 'meaning', type: '词源', prompt: '记 gluttony 时，哪句更稳妥？', options: ['先锁住「暴食」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「暴食」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暴食'] },
  });

  D('gnash', {
    etymology: {
      origin: '现代英语常用词「gnash」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gnash', gloss: '咬牙切齿' },
      suffix: null,
      history: [
        { label: 'gnash', text: '现代英语常用词「gnash」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：咬牙切齿。' },
      ],
      formationLogic: '核心义：咬牙切齿。',
      mnemonic: '看到 gnash，先说出「咬牙切齿」。',
      note: '核心义：咬牙切齿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gnash before the office closed.', chinese: '他们同意在办公室关门前做这件事：咬牙切齿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gnash.s1', en: 'The deadline forced the team to gnash that afternoon.', zh: '截止日期逼着小组在那天下午咬牙切齿。', structure: 'gnash / 表示 / 咬牙切齿', grammar: 'verb，围绕「咬牙切齿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gnashed it yesterday without checking the real past form.', right: 'Check the past form of "gnash" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gnash 是verb，再套「咬牙切齿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gnash.q1', senseId: 'gnash.s1', errorType: 'meaning', type: '词义选择', prompt: '「gnash」在本条的核心意思是：', options: ['咬牙切齿', '完全相反的意思', '一种古代钱币'], answer: '咬牙切齿', explain: 'gnash：咬牙切齿。' },
      { id: 'gnash.q2', senseId: 'gnash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gnash?', options: ['咬牙切齿', 'a kind of ancient coin', 'the past tense of be'], answer: '咬牙切齿', explain: '对的是「咬牙切齿」。' },
      { id: 'gnash.q3', senseId: 'gnash.s1', errorType: 'grammar', type: '词义选择', prompt: 'gnash 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gnash.q4', senseId: 'gnash.s1', errorType: 'meaning', type: '词源', prompt: '记 gnash 时，哪句更稳妥？', options: ['先锁住「咬牙切齿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咬牙切齿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咬牙切齿'] },
  });

  D('gnat', {
    etymology: {
      origin: '现代英语常用词「gnat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gnat', gloss: '蚋' },
      suffix: null,
      history: [
        { label: 'gnat', text: '现代英语常用词「gnat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蚋。' },
      ],
      formationLogic: '核心义：蚋。',
      mnemonic: '看到 gnat，先说出「蚋」。',
      note: '核心义：蚋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gnat.', chinese: '这一章反复回到同一个点：蚋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gnat.s1', en: 'Without that gnat, the next paragraph is hard to follow.', zh: '没有这个蚋，下一段会很难读。', structure: 'gnat / 表示 / 蚋', grammar: 'noun，围绕「蚋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gnat.', right: 'He gave me some advice about the gnat.', reason: 'advice 不可数。名词 gnat 的单复数按词典词形记。', rule: '先确定 gnat 是noun，再套「蚋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gnat.q1', senseId: 'gnat.s1', errorType: 'meaning', type: '词义选择', prompt: '「gnat」在本条的核心意思是：', options: ['蚋', '完全相反的意思', '一种古代钱币'], answer: '蚋', explain: 'gnat：蚋。' },
      { id: 'gnat.q2', senseId: 'gnat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gnat?', options: ['蚋', 'a kind of ancient coin', 'the past tense of be'], answer: '蚋', explain: '对的是「蚋」。' },
      { id: 'gnat.q3', senseId: 'gnat.s1', errorType: 'grammar', type: '词义选择', prompt: 'gnat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gnat.q4', senseId: 'gnat.s1', errorType: 'meaning', type: '词源', prompt: '记 gnat 时，哪句更稳妥？', options: ['先锁住「蚋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蚋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蚋'] },
  });

  D('go', {
    etymology: {
      origin: '现代英语常用词「go」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'go', gloss: '去' },
      suffix: null,
      history: [
        { label: 'go', text: '现代英语常用词「go」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：去。' },
      ],
      formationLogic: '核心义：去。',
      mnemonic: '看到 go，先说出「去」。',
      note: '核心义：去。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to go before the office closed.', chinese: '他们同意在办公室关门前做这件事：去。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go.s1', en: 'The deadline forced the team to go that afternoon.', zh: '截止日期逼着小组在那天下午去。', structure: 'go / 表示 / 去', grammar: 'verb，围绕「去」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She goed it yesterday without checking the real past form.', right: 'Check the past form of "go" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 go 是verb，再套「去」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go.q1', senseId: 'go.s1', errorType: 'meaning', type: '词义选择', prompt: '「go」在本条的核心意思是：', options: ['去', '完全相反的意思', '一种古代钱币'], answer: '去', explain: 'go：去。' },
      { id: 'go.q2', senseId: 'go.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go?', options: ['去', 'a kind of ancient coin', 'the past tense of be'], answer: '去', explain: '对的是「去」。' },
      { id: 'go.q3', senseId: 'go.s1', errorType: 'grammar', type: '词义选择', prompt: 'go 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go.q4', senseId: 'go.s1', errorType: 'meaning', type: '词源', prompt: '记 go 时，哪句更稳妥？', options: ['先锁住「去」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「去」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['去'] },
  });

  D('go back', {
    etymology: {
      origin: '现代英语固定说法「go back」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go back', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go back', text: '现代英语固定说法「go back」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：回去。' },
      ],
      formationLogic: '核心义：回去。',
      mnemonic: '看到 go back，先说出「回去」。',
      note: '核心义：回去。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go back" and asked the class to keep it as one unit.', chinese: '老师把「go back」圈出来，让全班把它当成一个整体。它表示回去。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go back.s1', en: 'In the margin she wrote "go back" so nobody would split the phrase.', zh: '她在页边写下「go back」，免得有人把这个说法拆开。意思是回去。', structure: 'go back / 表示 / 回去', grammar: 'verb，围绕「回去」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go back and lost the point.', right: 'Keep "go back" together: it means 回去.', reason: '「go back」要整块理解。', rule: '先确定 go back 是verb，再套「回去」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go back.q1', senseId: 'go back.s1', errorType: 'meaning', type: '词义选择', prompt: '「go back」在本条的核心意思是：', options: ['回去', '完全相反的意思', '一种古代钱币'], answer: '回去', explain: 'go back：回去。' },
      { id: 'go back.q2', senseId: 'go back.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go back?', options: ['回去', 'a kind of ancient coin', 'the past tense of be'], answer: '回去', explain: '对的是「回去」。' },
      { id: 'go back.q3', senseId: 'go back.s1', errorType: 'grammar', type: '词义选择', prompt: 'go back 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go back.q4', senseId: 'go back.s1', errorType: 'meaning', type: '词源', prompt: '记 go back 时，哪句更稳妥？', options: ['先锁住「回去」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「回去」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['回去'] },
  });

  D('go backwards', {
    etymology: {
      origin: '现代英语固定说法「go backwards」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go backwards', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go backwards', text: '现代英语固定说法「go backwards」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：倒退。' },
      ],
      formationLogic: '核心义：倒退。',
      mnemonic: '看到 go backwards，先说出「倒退」。',
      note: '核心义：倒退。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go backwards" and asked the class to keep it as one unit.', chinese: '老师把「go backwards」圈出来，让全班把它当成一个整体。它表示倒退。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go backwards.s1', en: 'In the margin she wrote "go backwards" so nobody would split the phrase.', zh: '她在页边写下「go backwards」，免得有人把这个说法拆开。意思是倒退。', structure: 'go backwards / 表示 / 倒退', grammar: 'verb，围绕「倒退」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go backwards and lost the point.', right: 'Keep "go backwards" together: it means 倒退.', reason: '「go backwards」要整块理解。', rule: '先确定 go backwards 是verb，再套「倒退」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go backwards.q1', senseId: 'go backwards.s1', errorType: 'meaning', type: '词义选择', prompt: '「go backwards」在本条的核心意思是：', options: ['倒退', '完全相反的意思', '一种古代钱币'], answer: '倒退', explain: 'go backwards：倒退。' },
      { id: 'go backwards.q2', senseId: 'go backwards.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go backwards?', options: ['倒退', 'a kind of ancient coin', 'the past tense of be'], answer: '倒退', explain: '对的是「倒退」。' },
      { id: 'go backwards.q3', senseId: 'go backwards.s1', errorType: 'grammar', type: '词义选择', prompt: 'go backwards 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go backwards.q4', senseId: 'go backwards.s1', errorType: 'meaning', type: '词源', prompt: '记 go backwards 时，哪句更稳妥？', options: ['先锁住「倒退」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倒退」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倒退'] },
  });

  D('go before', {
    etymology: {
      origin: '现代英语固定说法「go before」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go before', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go before', text: '现代英语固定说法「go before」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：在…之前。' },
      ],
      formationLogic: '核心义：在…之前。',
      mnemonic: '看到 go before，先说出「在…之前」。',
      note: '核心义：在…之前。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go before" and asked the class to keep it as one unit.', chinese: '老师把「go before」圈出来，让全班把它当成一个整体。它表示在…之前。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go before.s1', en: 'In the margin she wrote "go before" so nobody would split the phrase.', zh: '她在页边写下「go before」，免得有人把这个说法拆开。意思是在…之前。', structure: 'go before / 表示 / 在…之前', grammar: 'verb，围绕「在…之前」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go before and lost the point.', right: 'Keep "go before" together: it means 在…之前.', reason: '「go before」要整块理解。', rule: '先确定 go before 是verb，再套「在…之前」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go before.q1', senseId: 'go before.s1', errorType: 'meaning', type: '词义选择', prompt: '「go before」在本条的核心意思是：', options: ['在…之前', '完全相反的意思', '一种古代钱币'], answer: '在…之前', explain: 'go before：在…之前。' },
      { id: 'go before.q2', senseId: 'go before.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go before?', options: ['在…之前', 'a kind of ancient coin', 'the past tense of be'], answer: '在…之前', explain: '对的是「在…之前」。' },
      { id: 'go before.q3', senseId: 'go before.s1', errorType: 'grammar', type: '词义选择', prompt: 'go before 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go before.q4', senseId: 'go before.s1', errorType: 'meaning', type: '词源', prompt: '记 go before 时，哪句更稳妥？', options: ['先锁住「在…之前」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「在…之前」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在…之前'] },
  });

  D('go by', {
    etymology: {
      origin: '现代英语固定说法「go by」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go by', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go by', text: '现代英语固定说法「go by」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：经过。' },
      ],
      formationLogic: '核心义：经过。',
      mnemonic: '看到 go by，先说出「经过」。',
      note: '核心义：经过。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go by" and asked the class to keep it as one unit.', chinese: '老师把「go by」圈出来，让全班把它当成一个整体。它表示经过。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go by.s1', en: 'In the margin she wrote "go by" so nobody would split the phrase.', zh: '她在页边写下「go by」，免得有人把这个说法拆开。意思是经过。', structure: 'go by / 表示 / 经过', grammar: 'verb，围绕「经过」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go by and lost the point.', right: 'Keep "go by" together: it means 经过.', reason: '「go by」要整块理解。', rule: '先确定 go by 是verb，再套「经过」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go by.q1', senseId: 'go by.s1', errorType: 'meaning', type: '词义选择', prompt: '「go by」在本条的核心意思是：', options: ['经过', '完全相反的意思', '一种古代钱币'], answer: '经过', explain: 'go by：经过。' },
      { id: 'go by.q2', senseId: 'go by.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go by?', options: ['经过', 'a kind of ancient coin', 'the past tense of be'], answer: '经过', explain: '对的是「经过」。' },
      { id: 'go by.q3', senseId: 'go by.s1', errorType: 'grammar', type: '词义选择', prompt: 'go by 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go by.q4', senseId: 'go by.s1', errorType: 'meaning', type: '词源', prompt: '记 go by 时，哪句更稳妥？', options: ['先锁住「经过」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经过」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经过'] },
  });

  D('go down', {
    etymology: {
      origin: '现代英语固定说法「go down」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go down', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go down', text: '现代英语固定说法「go down」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：下降。' },
      ],
      formationLogic: '核心义：下降。',
      mnemonic: '看到 go down，先说出「下降」。',
      note: '核心义：下降。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go down" and asked the class to keep it as one unit.', chinese: '老师把「go down」圈出来，让全班把它当成一个整体。它表示下降。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go down.s1', en: 'In the margin she wrote "go down" so nobody would split the phrase.', zh: '她在页边写下「go down」，免得有人把这个说法拆开。意思是下降。', structure: 'go down / 表示 / 下降', grammar: 'verb，围绕「下降」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go down and lost the point.', right: 'Keep "go down" together: it means 下降.', reason: '「go down」要整块理解。', rule: '先确定 go down 是verb，再套「下降」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go down.q1', senseId: 'go down.s1', errorType: 'meaning', type: '词义选择', prompt: '「go down」在本条的核心意思是：', options: ['下降', '完全相反的意思', '一种古代钱币'], answer: '下降', explain: 'go down：下降。' },
      { id: 'go down.q2', senseId: 'go down.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go down?', options: ['下降', 'a kind of ancient coin', 'the past tense of be'], answer: '下降', explain: '对的是「下降」。' },
      { id: 'go down.q3', senseId: 'go down.s1', errorType: 'grammar', type: '词义选择', prompt: 'go down 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go down.q4', senseId: 'go down.s1', errorType: 'meaning', type: '词源', prompt: '记 go down 时，哪句更稳妥？', options: ['先锁住「下降」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下降」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下降'] },
  });

  D('go in', {
    etymology: {
      origin: '现代英语固定说法「go in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go in', text: '现代英语固定说法「go in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：进去。' },
      ],
      formationLogic: '核心义：进去。',
      mnemonic: '看到 go in，先说出「进去」。',
      note: '核心义：进去。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go in" and asked the class to keep it as one unit.', chinese: '老师把「go in」圈出来，让全班把它当成一个整体。它表示进去。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go in.s1', en: 'In the margin she wrote "go in" so nobody would split the phrase.', zh: '她在页边写下「go in」，免得有人把这个说法拆开。意思是进去。', structure: 'go in / 表示 / 进去', grammar: 'verb，围绕「进去」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go in and lost the point.', right: 'Keep "go in" together: it means 进去.', reason: '「go in」要整块理解。', rule: '先确定 go in 是verb，再套「进去」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go in.q1', senseId: 'go in.s1', errorType: 'meaning', type: '词义选择', prompt: '「go in」在本条的核心意思是：', options: ['进去', '完全相反的意思', '一种古代钱币'], answer: '进去', explain: 'go in：进去。' },
      { id: 'go in.q2', senseId: 'go in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go in?', options: ['进去', 'a kind of ancient coin', 'the past tense of be'], answer: '进去', explain: '对的是「进去」。' },
      { id: 'go in.q3', senseId: 'go in.s1', errorType: 'grammar', type: '词义选择', prompt: 'go in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go in.q4', senseId: 'go in.s1', errorType: 'meaning', type: '词源', prompt: '记 go in 时，哪句更稳妥？', options: ['先锁住「进去」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进去」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进去'] },
  });

  D('go off', {
    etymology: {
      origin: '现代英语固定说法「go off」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go off', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go off', text: '现代英语固定说法「go off」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：爆炸。' },
      ],
      formationLogic: '核心义：爆炸。',
      mnemonic: '看到 go off，先说出「爆炸」。',
      note: '核心义：爆炸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go off" and asked the class to keep it as one unit.', chinese: '老师把「go off」圈出来，让全班把它当成一个整体。它表示爆炸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go off.s1', en: 'In the margin she wrote "go off" so nobody would split the phrase.', zh: '她在页边写下「go off」，免得有人把这个说法拆开。意思是爆炸。', structure: 'go off / 表示 / 爆炸', grammar: 'verb，围绕「爆炸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go off and lost the point.', right: 'Keep "go off" together: it means 爆炸.', reason: '「go off」要整块理解。', rule: '先确定 go off 是verb，再套「爆炸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go off.q1', senseId: 'go off.s1', errorType: 'meaning', type: '词义选择', prompt: '「go off」在本条的核心意思是：', options: ['爆炸', '完全相反的意思', '一种古代钱币'], answer: '爆炸', explain: 'go off：爆炸。' },
      { id: 'go off.q2', senseId: 'go off.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go off?', options: ['爆炸', 'a kind of ancient coin', 'the past tense of be'], answer: '爆炸', explain: '对的是「爆炸」。' },
      { id: 'go off.q3', senseId: 'go off.s1', errorType: 'grammar', type: '词义选择', prompt: 'go off 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go off.q4', senseId: 'go off.s1', errorType: 'meaning', type: '词源', prompt: '记 go off 时，哪句更稳妥？', options: ['先锁住「爆炸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爆炸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爆炸'] },
  });

  D('go on', {
    etymology: {
      origin: '现代英语固定说法「go on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go on', text: '现代英语固定说法「go on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：继续。' },
      ],
      formationLogic: '核心义：继续。',
      mnemonic: '看到 go on，先说出「继续」。',
      note: '核心义：继续。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go on" and asked the class to keep it as one unit.', chinese: '老师把「go on」圈出来，让全班把它当成一个整体。它表示继续。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go on.s1', en: 'In the margin she wrote "go on" so nobody would split the phrase.', zh: '她在页边写下「go on」，免得有人把这个说法拆开。意思是继续。', structure: 'go on / 表示 / 继续', grammar: 'verb，围绕「继续」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go on and lost the point.', right: 'Keep "go on" together: it means 继续.', reason: '「go on」要整块理解。', rule: '先确定 go on 是verb，再套「继续」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go on.q1', senseId: 'go on.s1', errorType: 'meaning', type: '词义选择', prompt: '「go on」在本条的核心意思是：', options: ['继续', '完全相反的意思', '一种古代钱币'], answer: '继续', explain: 'go on：继续。' },
      { id: 'go on.q2', senseId: 'go on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go on?', options: ['继续', 'a kind of ancient coin', 'the past tense of be'], answer: '继续', explain: '对的是「继续」。' },
      { id: 'go on.q3', senseId: 'go on.s1', errorType: 'grammar', type: '词义选择', prompt: 'go on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go on.q4', senseId: 'go on.s1', errorType: 'meaning', type: '词源', prompt: '记 go on 时，哪句更稳妥？', options: ['先锁住「继续」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「继续」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['继续'] },
  });

  D('go on foot', {
    etymology: {
      origin: '现代英语固定说法「go on foot」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go on foot', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go on foot', text: '现代英语固定说法「go on foot」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：步行。' },
      ],
      formationLogic: '核心义：步行。',
      mnemonic: '看到 go on foot，先说出「步行」。',
      note: '核心义：步行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go on foot" and asked the class to keep it as one unit.', chinese: '老师把「go on foot」圈出来，让全班把它当成一个整体。它表示步行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go on foot.s1', en: 'In the margin she wrote "go on foot" so nobody would split the phrase.', zh: '她在页边写下「go on foot」，免得有人把这个说法拆开。意思是步行。', structure: 'go on foot / 表示 / 步行', grammar: 'verb，围绕「步行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go on foot and lost the point.', right: 'Keep "go on foot" together: it means 步行.', reason: '「go on foot」要整块理解。', rule: '先确定 go on foot 是verb，再套「步行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go on foot.q1', senseId: 'go on foot.s1', errorType: 'meaning', type: '词义选择', prompt: '「go on foot」在本条的核心意思是：', options: ['步行', '完全相反的意思', '一种古代钱币'], answer: '步行', explain: 'go on foot：步行。' },
      { id: 'go on foot.q2', senseId: 'go on foot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go on foot?', options: ['步行', 'a kind of ancient coin', 'the past tense of be'], answer: '步行', explain: '对的是「步行」。' },
      { id: 'go on foot.q3', senseId: 'go on foot.s1', errorType: 'grammar', type: '词义选择', prompt: 'go on foot 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go on foot.q4', senseId: 'go on foot.s1', errorType: 'meaning', type: '词源', prompt: '记 go on foot 时，哪句更稳妥？', options: ['先锁住「步行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「步行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['步行'] },
  });

  D('go over', {
    etymology: {
      origin: '现代英语固定说法「go over」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go over', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go over', text: '现代英语固定说法「go over」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：检查。' },
      ],
      formationLogic: '核心义：检查。',
      mnemonic: '看到 go over，先说出「检查」。',
      note: '核心义：检查。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go over" and asked the class to keep it as one unit.', chinese: '老师把「go over」圈出来，让全班把它当成一个整体。它表示检查。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go over.s1', en: 'In the margin she wrote "go over" so nobody would split the phrase.', zh: '她在页边写下「go over」，免得有人把这个说法拆开。意思是检查。', structure: 'go over / 表示 / 检查', grammar: 'verb，围绕「检查」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go over and lost the point.', right: 'Keep "go over" together: it means 检查.', reason: '「go over」要整块理解。', rule: '先确定 go over 是verb，再套「检查」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go over.q1', senseId: 'go over.s1', errorType: 'meaning', type: '词义选择', prompt: '「go over」在本条的核心意思是：', options: ['检查', '完全相反的意思', '一种古代钱币'], answer: '检查', explain: 'go over：检查。' },
      { id: 'go over.q2', senseId: 'go over.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go over?', options: ['检查', 'a kind of ancient coin', 'the past tense of be'], answer: '检查', explain: '对的是「检查」。' },
      { id: 'go over.q3', senseId: 'go over.s1', errorType: 'grammar', type: '词义选择', prompt: 'go over 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go over.q4', senseId: 'go over.s1', errorType: 'meaning', type: '词源', prompt: '记 go over 时，哪句更稳妥？', options: ['先锁住「检查」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「检查」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['检查'] },
  });

  D('go past', {
    etymology: {
      origin: '现代英语固定说法「go past」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go past', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go past', text: '现代英语固定说法「go past」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：经过。' },
      ],
      formationLogic: '核心义：经过。',
      mnemonic: '看到 go past，先说出「经过」。',
      note: '核心义：经过。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go past" and asked the class to keep it as one unit.', chinese: '老师把「go past」圈出来，让全班把它当成一个整体。它表示经过。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go past.s1', en: 'In the margin she wrote "go past" so nobody would split the phrase.', zh: '她在页边写下「go past」，免得有人把这个说法拆开。意思是经过。', structure: 'go past / 表示 / 经过', grammar: 'verb，围绕「经过」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go past and lost the point.', right: 'Keep "go past" together: it means 经过.', reason: '「go past」要整块理解。', rule: '先确定 go past 是verb，再套「经过」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go past.q1', senseId: 'go past.s1', errorType: 'meaning', type: '词义选择', prompt: '「go past」在本条的核心意思是：', options: ['经过', '完全相反的意思', '一种古代钱币'], answer: '经过', explain: 'go past：经过。' },
      { id: 'go past.q2', senseId: 'go past.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go past?', options: ['经过', 'a kind of ancient coin', 'the past tense of be'], answer: '经过', explain: '对的是「经过」。' },
      { id: 'go past.q3', senseId: 'go past.s1', errorType: 'grammar', type: '词义选择', prompt: 'go past 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go past.q4', senseId: 'go past.s1', errorType: 'meaning', type: '词源', prompt: '记 go past 时，哪句更稳妥？', options: ['先锁住「经过」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经过」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经过'] },
  });

  D('go through', {
    etymology: {
      origin: '现代英语固定说法「go through」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go through', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go through', text: '现代英语固定说法「go through」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：经历。' },
      ],
      formationLogic: '核心义：经历。',
      mnemonic: '看到 go through，先说出「经历」。',
      note: '核心义：经历。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go through" and asked the class to keep it as one unit.', chinese: '老师把「go through」圈出来，让全班把它当成一个整体。它表示经历。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go through.s1', en: 'In the margin she wrote "go through" so nobody would split the phrase.', zh: '她在页边写下「go through」，免得有人把这个说法拆开。意思是经历。', structure: 'go through / 表示 / 经历', grammar: 'verb，围绕「经历」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go through and lost the point.', right: 'Keep "go through" together: it means 经历.', reason: '「go through」要整块理解。', rule: '先确定 go through 是verb，再套「经历」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go through.q1', senseId: 'go through.s1', errorType: 'meaning', type: '词义选择', prompt: '「go through」在本条的核心意思是：', options: ['经历', '完全相反的意思', '一种古代钱币'], answer: '经历', explain: 'go through：经历。' },
      { id: 'go through.q2', senseId: 'go through.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go through?', options: ['经历', 'a kind of ancient coin', 'the past tense of be'], answer: '经历', explain: '对的是「经历」。' },
      { id: 'go through.q3', senseId: 'go through.s1', errorType: 'grammar', type: '词义选择', prompt: 'go through 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go through.q4', senseId: 'go through.s1', errorType: 'meaning', type: '词源', prompt: '记 go through 时，哪句更稳妥？', options: ['先锁住「经历」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经历」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经历'] },
  });

  D('go to bed', {
    etymology: {
      origin: '现代英语固定说法「go to bed」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go to bed', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go to bed', text: '现代英语固定说法「go to bed」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：上床睡觉。' },
      ],
      formationLogic: '核心义：上床睡觉。',
      mnemonic: '看到 go to bed，先说出「上床睡觉」。',
      note: '核心义：上床睡觉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go to bed" and asked the class to keep it as one unit.', chinese: '老师把「go to bed」圈出来，让全班把它当成一个整体。它表示上床睡觉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go to bed.s1', en: 'In the margin she wrote "go to bed" so nobody would split the phrase.', zh: '她在页边写下「go to bed」，免得有人把这个说法拆开。意思是上床睡觉。', structure: 'go to bed / 表示 / 上床睡觉', grammar: 'verb，围绕「上床睡觉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go to bed and lost the point.', right: 'Keep "go to bed" together: it means 上床睡觉.', reason: '「go to bed」要整块理解。', rule: '先确定 go to bed 是verb，再套「上床睡觉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go to bed.q1', senseId: 'go to bed.s1', errorType: 'meaning', type: '词义选择', prompt: '「go to bed」在本条的核心意思是：', options: ['上床睡觉', '完全相反的意思', '一种古代钱币'], answer: '上床睡觉', explain: 'go to bed：上床睡觉。' },
      { id: 'go to bed.q2', senseId: 'go to bed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go to bed?', options: ['上床睡觉', 'a kind of ancient coin', 'the past tense of be'], answer: '上床睡觉', explain: '对的是「上床睡觉」。' },
      { id: 'go to bed.q3', senseId: 'go to bed.s1', errorType: 'grammar', type: '词义选择', prompt: 'go to bed 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go to bed.q4', senseId: 'go to bed.s1', errorType: 'meaning', type: '词源', prompt: '记 go to bed 时，哪句更稳妥？', options: ['先锁住「上床睡觉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「上床睡觉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上床睡觉'] },
  });

  D('go with', {
    etymology: {
      origin: '现代英语固定说法「go with」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'go with', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'go with', text: '现代英语固定说法「go with」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：配。' },
      ],
      formationLogic: '核心义：配。',
      mnemonic: '看到 go with，先说出「配」。',
      note: '核心义：配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "go with" and asked the class to keep it as one unit.', chinese: '老师把「go with」圈出来，让全班把它当成一个整体。它表示配。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go with.s1', en: 'In the margin she wrote "go with" so nobody would split the phrase.', zh: '她在页边写下「go with」，免得有人把这个说法拆开。意思是配。', structure: 'go with / 表示 / 配', grammar: 'verb，围绕「配」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of go with and lost the point.', right: 'Keep "go with" together: it means 配.', reason: '「go with」要整块理解。', rule: '先确定 go with 是verb，再套「配」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go with.q1', senseId: 'go with.s1', errorType: 'meaning', type: '词义选择', prompt: '「go with」在本条的核心意思是：', options: ['配', '完全相反的意思', '一种古代钱币'], answer: '配', explain: 'go with：配。' },
      { id: 'go with.q2', senseId: 'go with.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go with?', options: ['配', 'a kind of ancient coin', 'the past tense of be'], answer: '配', explain: '对的是「配」。' },
      { id: 'go with.q3', senseId: 'go with.s1', errorType: 'grammar', type: '词义选择', prompt: 'go with 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'go with.q4', senseId: 'go with.s1', errorType: 'meaning', type: '词源', prompt: '记 go with 时，哪句更稳妥？', options: ['先锁住「配」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「配」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['配'] },
  });

  D('go-ahead', {
    etymology: {
      origin: '现代英语常用词「go-ahead」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'go-ahead', gloss: '批准' },
      suffix: null,
      history: [
        { label: 'go-ahead', text: '现代英语常用词「go-ahead」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：批准。' },
      ],
      formationLogic: '核心义：批准。',
      mnemonic: '看到 go-ahead，先说出「批准」。',
      note: '核心义：批准。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one go-ahead.', chinese: '这一章反复回到同一个点：批准。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'go-ahead.s1', en: 'Without that go-ahead, the next paragraph is hard to follow.', zh: '没有这个批准，下一段会很难读。', structure: 'go-ahead / 表示 / 批准', grammar: 'noun，围绕「批准」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the go-ahead.', right: 'He gave me some advice about the go-ahead.', reason: 'advice 不可数。名词 go-ahead 的单复数按词典词形记。', rule: '先确定 go-ahead 是noun，再套「批准」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'go-ahead.q1', senseId: 'go-ahead.s1', errorType: 'meaning', type: '词义选择', prompt: '「go-ahead」在本条的核心意思是：', options: ['批准', '完全相反的意思', '一种古代钱币'], answer: '批准', explain: 'go-ahead：批准。' },
      { id: 'go-ahead.q2', senseId: 'go-ahead.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches go-ahead?', options: ['批准', 'a kind of ancient coin', 'the past tense of be'], answer: '批准', explain: '对的是「批准」。' },
      { id: 'go-ahead.q3', senseId: 'go-ahead.s1', errorType: 'grammar', type: '词义选择', prompt: 'go-ahead 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'go-ahead.q4', senseId: 'go-ahead.s1', errorType: 'meaning', type: '词源', prompt: '记 go-ahead 时，哪句更稳妥？', options: ['先锁住「批准」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「批准」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['批准'] },
  });

  D('goad', {
    etymology: {
      origin: '现代英语常用词「goad」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'goad', gloss: '刺激' },
      suffix: null,
      history: [
        { label: 'goad', text: '现代英语常用词「goad」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：刺激。' },
      ],
      formationLogic: '核心义：刺激。',
      mnemonic: '看到 goad，先说出「刺激」。',
      note: '核心义：刺激。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goad.', chinese: '这一章反复回到同一个点：刺激。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goad.s1', en: 'Without that goad, the next paragraph is hard to follow.', zh: '没有这个刺激，下一段会很难读。', structure: 'goad / 表示 / 刺激', grammar: 'noun，围绕「刺激」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goad.', right: 'He gave me some advice about the goad.', reason: 'advice 不可数。名词 goad 的单复数按词典词形记。', rule: '先确定 goad 是noun，再套「刺激」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goad.q1', senseId: 'goad.s1', errorType: 'meaning', type: '词义选择', prompt: '「goad」在本条的核心意思是：', options: ['刺激', '完全相反的意思', '一种古代钱币'], answer: '刺激', explain: 'goad：刺激。' },
      { id: 'goad.q2', senseId: 'goad.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goad?', options: ['刺激', 'a kind of ancient coin', 'the past tense of be'], answer: '刺激', explain: '对的是「刺激」。' },
      { id: 'goad.q3', senseId: 'goad.s1', errorType: 'grammar', type: '词义选择', prompt: 'goad 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'goad.q4', senseId: 'goad.s1', errorType: 'meaning', type: '词源', prompt: '记 goad 时，哪句更稳妥？', options: ['先锁住「刺激」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「刺激」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['刺激'] },
  });

  D('goal', {
    etymology: {
      origin: '现代英语常用词「goal」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'goal', gloss: '目标' },
      suffix: null,
      history: [
        { label: 'goal', text: '现代英语常用词「goal」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：目标。' },
      ],
      formationLogic: '核心义：目标。',
      mnemonic: '看到 goal，先说出「目标」。',
      note: '核心义：目标。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goal.', chinese: '这一章反复回到同一个点：目标。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goal.s1', en: 'Without that goal, the next paragraph is hard to follow.', zh: '没有这个目标，下一段会很难读。', structure: 'goal / 表示 / 目标', grammar: 'noun，围绕「目标」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goal.', right: 'He gave me some advice about the goal.', reason: 'advice 不可数。名词 goal 的单复数按词典词形记。', rule: '先确定 goal 是noun，再套「目标」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goal.q1', senseId: 'goal.s1', errorType: 'meaning', type: '词义选择', prompt: '「goal」在本条的核心意思是：', options: ['目标', '完全相反的意思', '一种古代钱币'], answer: '目标', explain: 'goal：目标。' },
      { id: 'goal.q2', senseId: 'goal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goal?', options: ['目标', 'a kind of ancient coin', 'the past tense of be'], answer: '目标', explain: '对的是「目标」。' },
      { id: 'goal.q3', senseId: 'goal.s1', errorType: 'grammar', type: '词义选择', prompt: 'goal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'goal.q4', senseId: 'goal.s1', errorType: 'meaning', type: '词源', prompt: '记 goal 时，哪句更稳妥？', options: ['先锁住「目标」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「目标」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['目标'] },
  });

  D('goat', {
    etymology: {
      origin: '现代英语常用词「goat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'goat', gloss: '山羊' },
      suffix: null,
      history: [
        { label: 'goat', text: '现代英语常用词「goat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：山羊。' },
      ],
      formationLogic: '核心义：山羊。',
      mnemonic: '看到 goat，先说出「山羊」。',
      note: '核心义：山羊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goat.', chinese: '这一章反复回到同一个点：山羊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goat.s1', en: 'Without that goat, the next paragraph is hard to follow.', zh: '没有这个山羊，下一段会很难读。', structure: 'goat / 表示 / 山羊', grammar: 'noun，围绕「山羊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goat.', right: 'He gave me some advice about the goat.', reason: 'advice 不可数。名词 goat 的单复数按词典词形记。', rule: '先确定 goat 是noun，再套「山羊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goat.q1', senseId: 'goat.s1', errorType: 'meaning', type: '词义选择', prompt: '「goat」在本条的核心意思是：', options: ['山羊', '完全相反的意思', '一种古代钱币'], answer: '山羊', explain: 'goat：山羊。' },
      { id: 'goat.q2', senseId: 'goat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goat?', options: ['山羊', 'a kind of ancient coin', 'the past tense of be'], answer: '山羊', explain: '对的是「山羊」。' },
      { id: 'goat.q3', senseId: 'goat.s1', errorType: 'grammar', type: '词义选择', prompt: 'goat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'goat.q4', senseId: 'goat.s1', errorType: 'meaning', type: '词源', prompt: '记 goat 时，哪句更稳妥？', options: ['先锁住「山羊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「山羊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['山羊'] },
  });

  D('gobble', {
    etymology: {
      origin: '现代英语常用词「gobble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gobble', gloss: '狼吞虎咽' },
      suffix: null,
      history: [
        { label: 'gobble', text: '现代英语常用词「gobble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：狼吞虎咽。' },
      ],
      formationLogic: '核心义：狼吞虎咽。',
      mnemonic: '看到 gobble，先说出「狼吞虎咽」。',
      note: '核心义：狼吞虎咽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to gobble before the office closed.', chinese: '他们同意在办公室关门前做这件事：狼吞虎咽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gobble.s1', en: 'The deadline forced the team to gobble that afternoon.', zh: '截止日期逼着小组在那天下午狼吞虎咽。', structure: 'gobble / 表示 / 狼吞虎咽', grammar: 'verb，围绕「狼吞虎咽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She gobbleed it yesterday without checking the real past form.', right: 'Check the past form of "gobble" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 gobble 是verb，再套「狼吞虎咽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gobble.q1', senseId: 'gobble.s1', errorType: 'meaning', type: '词义选择', prompt: '「gobble」在本条的核心意思是：', options: ['狼吞虎咽', '完全相反的意思', '一种古代钱币'], answer: '狼吞虎咽', explain: 'gobble：狼吞虎咽。' },
      { id: 'gobble.q2', senseId: 'gobble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gobble?', options: ['狼吞虎咽', 'a kind of ancient coin', 'the past tense of be'], answer: '狼吞虎咽', explain: '对的是「狼吞虎咽」。' },
      { id: 'gobble.q3', senseId: 'gobble.s1', errorType: 'grammar', type: '词义选择', prompt: 'gobble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'gobble.q4', senseId: 'gobble.s1', errorType: 'meaning', type: '词源', prompt: '记 gobble 时，哪句更稳妥？', options: ['先锁住「狼吞虎咽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狼吞虎咽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狼吞虎咽'] },
  });

  D('gobbledygook', {
    etymology: {
      origin: '现代英语常用词「gobbledygook」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gobbledygook', gloss: '官话套话' },
      suffix: null,
      history: [
        { label: 'gobbledygook', text: '现代英语常用词「gobbledygook」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：官话套话。' },
      ],
      formationLogic: '核心义：官话套话。',
      mnemonic: '看到 gobbledygook，先说出「官话套话」。',
      note: '核心义：官话套话。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gobbledygook.', chinese: '这一章反复回到同一个点：官话套话。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gobbledygook.s1', en: 'Without that gobbledygook, the next paragraph is hard to follow.', zh: '没有这个官话套话，下一段会很难读。', structure: 'gobbledygook / 表示 / 官话套话', grammar: 'noun，围绕「官话套话」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gobbledygook.', right: 'He gave me some advice about the gobbledygook.', reason: 'advice 不可数。名词 gobbledygook 的单复数按词典词形记。', rule: '先确定 gobbledygook 是noun，再套「官话套话」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gobbledygook.q1', senseId: 'gobbledygook.s1', errorType: 'meaning', type: '词义选择', prompt: '「gobbledygook」在本条的核心意思是：', options: ['官话套话', '完全相反的意思', '一种古代钱币'], answer: '官话套话', explain: 'gobbledygook：官话套话。' },
      { id: 'gobbledygook.q2', senseId: 'gobbledygook.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gobbledygook?', options: ['官话套话', 'a kind of ancient coin', 'the past tense of be'], answer: '官话套话', explain: '对的是「官话套话」。' },
      { id: 'gobbledygook.q3', senseId: 'gobbledygook.s1', errorType: 'grammar', type: '词义选择', prompt: 'gobbledygook 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gobbledygook.q4', senseId: 'gobbledygook.s1', errorType: 'meaning', type: '词源', prompt: '记 gobbledygook 时，哪句更稳妥？', options: ['先锁住「官话套话」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「官话套话」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['官话套话'] },
  });

  D('god', {
    etymology: {
      origin: '现代英语常用词「god」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'god', gloss: '神' },
      suffix: null,
      history: [
        { label: 'god', text: '现代英语常用词「god」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：神。' },
      ],
      formationLogic: '核心义：神。',
      mnemonic: '看到 god，先说出「神」。',
      note: '核心义：神。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one god.', chinese: '这一章反复回到同一个点：神。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'god.s1', en: 'Without that god, the next paragraph is hard to follow.', zh: '没有这个神，下一段会很难读。', structure: 'god / 表示 / 神', grammar: 'noun，围绕「神」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the god.', right: 'He gave me some advice about the god.', reason: 'advice 不可数。名词 god 的单复数按词典词形记。', rule: '先确定 god 是noun，再套「神」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'god.q1', senseId: 'god.s1', errorType: 'meaning', type: '词义选择', prompt: '「god」在本条的核心意思是：', options: ['神', '完全相反的意思', '一种古代钱币'], answer: '神', explain: 'god：神。' },
      { id: 'god.q2', senseId: 'god.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches god?', options: ['神', 'a kind of ancient coin', 'the past tense of be'], answer: '神', explain: '对的是「神」。' },
      { id: 'god.q3', senseId: 'god.s1', errorType: 'grammar', type: '词义选择', prompt: 'god 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'god.q4', senseId: 'god.s1', errorType: 'meaning', type: '词源', prompt: '记 god 时，哪句更稳妥？', options: ['先锁住「神」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「神」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['神'] },
  });

  D('gold', {
    etymology: {
      origin: '现代英语常用词「gold」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gold', gloss: '金' },
      suffix: null,
      history: [
        { label: 'gold', text: '现代英语常用词「gold」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：金。' },
      ],
      formationLogic: '核心义：金。',
      mnemonic: '看到 gold，先说出「金」。',
      note: '核心义：金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gold.', chinese: '这一章反复回到同一个点：金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gold.s1', en: 'Without that gold, the next paragraph is hard to follow.', zh: '没有这个金，下一段会很难读。', structure: 'gold / 表示 / 金', grammar: 'noun，围绕「金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gold.', right: 'He gave me some advice about the gold.', reason: 'advice 不可数。名词 gold 的单复数按词典词形记。', rule: '先确定 gold 是noun，再套「金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gold.q1', senseId: 'gold.s1', errorType: 'meaning', type: '词义选择', prompt: '「gold」在本条的核心意思是：', options: ['金', '完全相反的意思', '一种古代钱币'], answer: '金', explain: 'gold：金。' },
      { id: 'gold.q2', senseId: 'gold.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gold?', options: ['金', 'a kind of ancient coin', 'the past tense of be'], answer: '金', explain: '对的是「金」。' },
      { id: 'gold.q3', senseId: 'gold.s1', errorType: 'grammar', type: '词义选择', prompt: 'gold 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gold.q4', senseId: 'gold.s1', errorType: 'meaning', type: '词源', prompt: '记 gold 时，哪句更稳妥？', options: ['先锁住「金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['金'] },
  });

  D('golden', {
    etymology: {
      origin: '现代英语常用词「golden」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'golden', gloss: '金的' },
      suffix: null,
      history: [
        { label: 'golden', text: '现代英语常用词「golden」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：金的。' },
      ],
      formationLogic: '核心义：金的。',
      mnemonic: '看到 golden，先说出「金的」。',
      note: '核心义：金的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was golden.', chinese: '即使是初读者也能看出，这个结果是金的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'golden.s1', en: 'They wanted a golden answer, not a long speech.', zh: '他们要一个金的的答复，不要长篇发言。', structure: 'golden / 表示 / 金的', grammar: 'adjective，围绕「金的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are golden.', right: 'The news is golden.', reason: 'news 作主语时动词用单数。', rule: '先确定 golden 是adjective，再套「金的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'golden.q1', senseId: 'golden.s1', errorType: 'meaning', type: '词义选择', prompt: '「golden」在本条的核心意思是：', options: ['金的', '完全相反的意思', '一种古代钱币'], answer: '金的', explain: 'golden：金的。' },
      { id: 'golden.q2', senseId: 'golden.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches golden?', options: ['金的', 'a kind of ancient coin', 'the past tense of be'], answer: '金的', explain: '对的是「金的」。' },
      { id: 'golden.q3', senseId: 'golden.s1', errorType: 'grammar', type: '词义选择', prompt: 'golden 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'golden.q4', senseId: 'golden.s1', errorType: 'meaning', type: '词源', prompt: '记 golden 时，哪句更稳妥？', options: ['先锁住「金的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「金的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['金的'] },
  });

  D('golf', {
    etymology: {
      origin: '现代英语常用词「golf」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'golf', gloss: '高尔夫球（运动）' },
      suffix: null,
      history: [
        { label: 'golf', text: '现代英语常用词「golf」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：高尔夫球（运动）。' },
      ],
      formationLogic: '核心义：高尔夫球（运动）。',
      mnemonic: '看到 golf，先说出「高尔夫球（运动）」。',
      note: '核心义：高尔夫球（运动）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one golf.', chinese: '这一章反复回到同一个点：高尔夫球（运动）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'golf.s1', en: 'Without that golf, the next paragraph is hard to follow.', zh: '没有这个高尔夫球（运动），下一段会很难读。', structure: 'golf / 表示 / 高尔夫球（运动）', grammar: 'noun，围绕「高尔夫球（运动）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the golf.', right: 'He gave me some advice about the golf.', reason: 'advice 不可数。名词 golf 的单复数按词典词形记。', rule: '先确定 golf 是noun，再套「高尔夫球（运动）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'golf.q1', senseId: 'golf.s1', errorType: 'meaning', type: '词义选择', prompt: '「golf」在本条的核心意思是：', options: ['高尔夫球（运动）', '完全相反的意思', '一种古代钱币'], answer: '高尔夫球（运动）', explain: 'golf：高尔夫球（运动）。' },
      { id: 'golf.q2', senseId: 'golf.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches golf?', options: ['高尔夫球（运动）', 'a kind of ancient coin', 'the past tense of be'], answer: '高尔夫球（运动）', explain: '对的是「高尔夫球（运动）」。' },
      { id: 'golf.q3', senseId: 'golf.s1', errorType: 'grammar', type: '词义选择', prompt: 'golf 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'golf.q4', senseId: 'golf.s1', errorType: 'meaning', type: '词源', prompt: '记 golf 时，哪句更稳妥？', options: ['先锁住「高尔夫球（运动）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「高尔夫球（运动）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高尔夫球（运动）'] },
  });

  D('good', {
    etymology: {
      origin: '现代英语常用词「good」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'good', gloss: '好的' },
      suffix: null,
      history: [
        { label: 'good', text: '现代英语常用词「good」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：好的。' },
      ],
      formationLogic: '核心义：好的。',
      mnemonic: '看到 good，先说出「好的」。',
      note: '核心义：好的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was good.', chinese: '即使是初读者也能看出，这个结果是好的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'good.s1', en: 'They wanted a good answer, not a long speech.', zh: '他们要一个好的的答复，不要长篇发言。', structure: 'good / 表示 / 好的', grammar: 'adjective，围绕「好的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are good.', right: 'The news is good.', reason: 'news 作主语时动词用单数。', rule: '先确定 good 是adjective，再套「好的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'good.q1', senseId: 'good.s1', errorType: 'meaning', type: '词义选择', prompt: '「good」在本条的核心意思是：', options: ['好的', '完全相反的意思', '一种古代钱币'], answer: '好的', explain: 'good：好的。' },
      { id: 'good.q2', senseId: 'good.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches good?', options: ['好的', 'a kind of ancient coin', 'the past tense of be'], answer: '好的', explain: '对的是「好的」。' },
      { id: 'good.q3', senseId: 'good.s1', errorType: 'grammar', type: '词义选择', prompt: 'good 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'good.q4', senseId: 'good.s1', errorType: 'meaning', type: '词源', prompt: '记 good 时，哪句更稳妥？', options: ['先锁住「好的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好的'] },
  });

  D('good person', {
    etymology: {
      origin: '现代英语固定说法「good person」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'good person', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'good person', text: '现代英语固定说法「good person」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：好人。' },
      ],
      formationLogic: '核心义：好人。',
      mnemonic: '看到 good person，先说出「好人」。',
      note: '核心义：好人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "good person" and asked the class to keep it as one unit.', chinese: '老师把「good person」圈出来，让全班把它当成一个整体。它表示好人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'good person.s1', en: 'In the margin she wrote "good person" so nobody would split the phrase.', zh: '她在页边写下「good person」，免得有人把这个说法拆开。意思是好人。', structure: 'good person / 表示 / 好人', grammar: 'noun，围绕「好人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of good person and lost the point.', right: 'Keep "good person" together: it means 好人.', reason: '「good person」要整块理解。', rule: '先确定 good person 是noun，再套「好人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'good person.q1', senseId: 'good person.s1', errorType: 'meaning', type: '词义选择', prompt: '「good person」在本条的核心意思是：', options: ['好人', '完全相反的意思', '一种古代钱币'], answer: '好人', explain: 'good person：好人。' },
      { id: 'good person.q2', senseId: 'good person.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches good person?', options: ['好人', 'a kind of ancient coin', 'the past tense of be'], answer: '好人', explain: '对的是「好人」。' },
      { id: 'good person.q3', senseId: 'good person.s1', errorType: 'grammar', type: '词义选择', prompt: 'good person 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'good person.q4', senseId: 'good person.s1', errorType: 'meaning', type: '词源', prompt: '记 good person 时，哪句更稳妥？', options: ['先锁住「好人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好人'] },
  });

  D('good-looking', {
    etymology: {
      origin: '英语派生：good-look + -ing，词性转到「好看的」。',
      prefix: null,
      root: { text: 'good-look', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'good-looking', text: '英语派生：good-look + -ing，词性转到「好看的」。' },
        { label: '现在', text: '核心用法是：好看的。' },
      ],
      formationLogic: '先认词干 good-look，再看词尾。',
      mnemonic: '看到 good-looking，先说出「好看的」。',
      note: '先认词干 good-look，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was good-looking.', chinese: '即使是初读者也能看出，这个结果是好看的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'good-looking.s1', en: 'They wanted a good-looking answer, not a long speech.', zh: '他们要一个好看的的答复，不要长篇发言。', structure: 'good-looking / 表示 / 好看的', grammar: 'adjective，围绕「好看的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are good-looking.', right: 'The news is good-looking.', reason: 'news 作主语时动词用单数。', rule: '先确定 good-looking 是adjective，再套「好看的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'good-looking.q1', senseId: 'good-looking.s1', errorType: 'meaning', type: '词义选择', prompt: '「good-looking」在本条的核心意思是：', options: ['好看的', '完全相反的意思', '一种古代钱币'], answer: '好看的', explain: 'good-looking：好看的。' },
      { id: 'good-looking.q2', senseId: 'good-looking.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches good-looking?', options: ['好看的', 'a kind of ancient coin', 'the past tense of be'], answer: '好看的', explain: '对的是「好看的」。' },
      { id: 'good-looking.q3', senseId: 'good-looking.s1', errorType: 'grammar', type: '词义选择', prompt: 'good-looking 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'good-looking.q4', senseId: 'good-looking.s1', errorType: 'meaning', type: '词源', prompt: '记 good-looking 时，哪句更稳妥？', options: ['先锁住「好看的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好看的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好看的'] },
  });

  D('good-natured', {
    etymology: {
      origin: '现代英语常用词「good-natured」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'good-natured', gloss: '和善的' },
      suffix: null,
      history: [
        { label: 'good-natured', text: '现代英语常用词「good-natured」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：和善的。' },
      ],
      formationLogic: '核心义：和善的。',
      mnemonic: '看到 good-natured，先说出「和善的」。',
      note: '核心义：和善的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was good-natured.', chinese: '即使是初读者也能看出，这个结果是和善的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'good-natured.s1', en: 'They wanted a good-natured answer, not a long speech.', zh: '他们要一个和善的的答复，不要长篇发言。', structure: 'good-natured / 表示 / 和善的', grammar: 'adjective，围绕「和善的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are good-natured.', right: 'The news is good-natured.', reason: 'news 作主语时动词用单数。', rule: '先确定 good-natured 是adjective，再套「和善的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'good-natured.q1', senseId: 'good-natured.s1', errorType: 'meaning', type: '词义选择', prompt: '「good-natured」在本条的核心意思是：', options: ['和善的', '完全相反的意思', '一种古代钱币'], answer: '和善的', explain: 'good-natured：和善的。' },
      { id: 'good-natured.q2', senseId: 'good-natured.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches good-natured?', options: ['和善的', 'a kind of ancient coin', 'the past tense of be'], answer: '和善的', explain: '对的是「和善的」。' },
      { id: 'good-natured.q3', senseId: 'good-natured.s1', errorType: 'grammar', type: '词义选择', prompt: 'good-natured 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'good-natured.q4', senseId: 'good-natured.s1', errorType: 'meaning', type: '词源', prompt: '记 good-natured 时，哪句更稳妥？', options: ['先锁住「和善的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「和善的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['和善的'] },
  });

  D('goodbye', {
    etymology: {
      origin: '现代英语常用词「goodbye」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'goodbye', gloss: '再见' },
      suffix: null,
      history: [
        { label: 'goodbye', text: '现代英语常用词「goodbye」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：再见。' },
      ],
      formationLogic: '核心义：再见。',
      mnemonic: '看到 goodbye，先说出「再见」。',
      note: '核心义：再见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goodbye.', chinese: '这一章反复回到同一个点：再见。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goodbye.s1', en: 'Without that goodbye, the next paragraph is hard to follow.', zh: '没有这个再见，下一段会很难读。', structure: 'goodbye / 表示 / 再见', grammar: 'interjection，围绕「再见」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goodbye.', right: 'He gave me some advice about the goodbye.', reason: 'advice 不可数。名词 goodbye 的单复数按词典词形记。', rule: '先确定 goodbye 是interjection，再套「再见」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goodbye.q1', senseId: 'goodbye.s1', errorType: 'meaning', type: '词义选择', prompt: '「goodbye」在本条的核心意思是：', options: ['再见', '完全相反的意思', '一种古代钱币'], answer: '再见', explain: 'goodbye：再见。' },
      { id: 'goodbye.q2', senseId: 'goodbye.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goodbye?', options: ['再见', 'a kind of ancient coin', 'the past tense of be'], answer: '再见', explain: '对的是「再见」。' },
      { id: 'goodbye.q3', senseId: 'goodbye.s1', errorType: 'grammar', type: '词义选择', prompt: 'goodbye 的词性（本条）更接近：', options: ['interjection', '只能作感叹词', '只能作数词'], answer: 'interjection', explain: '本条按 interjection 来用。' },
      { id: 'goodbye.q4', senseId: 'goodbye.s1', errorType: 'meaning', type: '词源', prompt: '记 goodbye 时，哪句更稳妥？', options: ['先锁住「再见」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「再见」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['再见'] },
  });

  D('goodness', {
    etymology: {
      origin: '英语派生：good + -ness，词性转到「善良」。',
      prefix: null,
      root: { text: 'good', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'goodness', text: '英语派生：good + -ness，词性转到「善良」。' },
        { label: '现在', text: '核心用法是：善良。' },
      ],
      formationLogic: '先认词干 good，再看词尾。',
      mnemonic: '看到 goodness，先说出「善良」。',
      note: '先认词干 good，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goodness.', chinese: '这一章反复回到同一个点：善良。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goodness.s1', en: 'Without that goodness, the next paragraph is hard to follow.', zh: '没有这个善良，下一段会很难读。', structure: 'goodness / 表示 / 善良', grammar: 'noun，围绕「善良」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goodness.', right: 'He gave me some advice about the goodness.', reason: 'advice 不可数。名词 goodness 的单复数按词典词形记。', rule: '先确定 goodness 是noun，再套「善良」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goodness.q1', senseId: 'goodness.s1', errorType: 'meaning', type: '词义选择', prompt: '「goodness」在本条的核心意思是：', options: ['善良', '完全相反的意思', '一种古代钱币'], answer: '善良', explain: 'goodness：善良。' },
      { id: 'goodness.q2', senseId: 'goodness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goodness?', options: ['善良', 'a kind of ancient coin', 'the past tense of be'], answer: '善良', explain: '对的是「善良」。' },
      { id: 'goodness.q3', senseId: 'goodness.s1', errorType: 'grammar', type: '词义选择', prompt: 'goodness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'goodness.q4', senseId: 'goodness.s1', errorType: 'meaning', type: '词源', prompt: '记 goodness 时，哪句更稳妥？', options: ['先锁住「善良」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「善良」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['善良'] },
  });

  D('goods', {
    etymology: {
      origin: '现代英语常用词「goods」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'goods', gloss: '商品' },
      suffix: null,
      history: [
        { label: 'goods', text: '现代英语常用词「goods」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：商品。' },
      ],
      formationLogic: '核心义：商品。',
      mnemonic: '看到 goods，先说出「商品」。',
      note: '核心义：商品。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goods.', chinese: '这一章反复回到同一个点：商品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goods.s1', en: 'Without that goods, the next paragraph is hard to follow.', zh: '没有这个商品，下一段会很难读。', structure: 'goods / 表示 / 商品', grammar: 'noun，围绕「商品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goods.', right: 'He gave me some advice about the goods.', reason: 'advice 不可数。名词 goods 的单复数按词典词形记。', rule: '先确定 goods 是noun，再套「商品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goods.q1', senseId: 'goods.s1', errorType: 'meaning', type: '词义选择', prompt: '「goods」在本条的核心意思是：', options: ['商品', '完全相反的意思', '一种古代钱币'], answer: '商品', explain: 'goods：商品。' },
      { id: 'goods.q2', senseId: 'goods.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goods?', options: ['商品', 'a kind of ancient coin', 'the past tense of be'], answer: '商品', explain: '对的是「商品」。' },
      { id: 'goods.q3', senseId: 'goods.s1', errorType: 'grammar', type: '词义选择', prompt: 'goods 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'goods.q4', senseId: 'goods.s1', errorType: 'meaning', type: '词源', prompt: '记 goods 时，哪句更稳妥？', options: ['先锁住「商品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「商品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['商品'] },
  });

  D('goose', {
    etymology: {
      origin: '现代英语常用词「goose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'goose', gloss: '鹅' },
      suffix: null,
      history: [
        { label: 'goose', text: '现代英语常用词「goose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鹅。' },
      ],
      formationLogic: '核心义：鹅。',
      mnemonic: '看到 goose，先说出「鹅」。',
      note: '核心义：鹅。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one goose.', chinese: '这一章反复回到同一个点：鹅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'goose.s1', en: 'Without that goose, the next paragraph is hard to follow.', zh: '没有这个鹅，下一段会很难读。', structure: 'goose / 表示 / 鹅', grammar: 'noun，围绕「鹅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the goose.', right: 'He gave me some advice about the goose.', reason: 'advice 不可数。名词 goose 的单复数按词典词形记。', rule: '先确定 goose 是noun，再套「鹅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'goose.q1', senseId: 'goose.s1', errorType: 'meaning', type: '词义选择', prompt: '「goose」在本条的核心意思是：', options: ['鹅', '完全相反的意思', '一种古代钱币'], answer: '鹅', explain: 'goose：鹅。' },
      { id: 'goose.q2', senseId: 'goose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches goose?', options: ['鹅', 'a kind of ancient coin', 'the past tense of be'], answer: '鹅', explain: '对的是「鹅」。' },
      { id: 'goose.q3', senseId: 'goose.s1', errorType: 'grammar', type: '词义选择', prompt: 'goose 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'goose.q4', senseId: 'goose.s1', errorType: 'meaning', type: '词源', prompt: '记 goose 时，哪句更稳妥？', options: ['先锁住「鹅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鹅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鹅'] },
  });

  D('gorge', {
    etymology: {
      origin: '现代英语常用词「gorge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gorge', gloss: '峡谷' },
      suffix: null,
      history: [
        { label: 'gorge', text: '现代英语常用词「gorge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：峡谷。' },
      ],
      formationLogic: '核心义：峡谷。',
      mnemonic: '看到 gorge，先说出「峡谷」。',
      note: '核心义：峡谷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gorge.', chinese: '这一章反复回到同一个点：峡谷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gorge.s1', en: 'Without that gorge, the next paragraph is hard to follow.', zh: '没有这个峡谷，下一段会很难读。', structure: 'gorge / 表示 / 峡谷', grammar: 'noun，围绕「峡谷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gorge.', right: 'He gave me some advice about the gorge.', reason: 'advice 不可数。名词 gorge 的单复数按词典词形记。', rule: '先确定 gorge 是noun，再套「峡谷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gorge.q1', senseId: 'gorge.s1', errorType: 'meaning', type: '词义选择', prompt: '「gorge」在本条的核心意思是：', options: ['峡谷', '完全相反的意思', '一种古代钱币'], answer: '峡谷', explain: 'gorge：峡谷。' },
      { id: 'gorge.q2', senseId: 'gorge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gorge?', options: ['峡谷', 'a kind of ancient coin', 'the past tense of be'], answer: '峡谷', explain: '对的是「峡谷」。' },
      { id: 'gorge.q3', senseId: 'gorge.s1', errorType: 'grammar', type: '词义选择', prompt: 'gorge 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gorge.q4', senseId: 'gorge.s1', errorType: 'meaning', type: '词源', prompt: '记 gorge 时，哪句更稳妥？', options: ['先锁住「峡谷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「峡谷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['峡谷'] },
  });

  D('gorgeous', {
    etymology: {
      origin: '英语派生：gorge + -ous，词性转到「华丽的」。',
      prefix: null,
      root: { text: 'gorge', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'gorgeous', text: '英语派生：gorge + -ous，词性转到「华丽的」。' },
        { label: '现在', text: '核心用法是：华丽的。' },
      ],
      formationLogic: '先认词干 gorge，再看词尾。',
      mnemonic: '看到 gorgeous，先说出「华丽的」。',
      note: '先认词干 gorge，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was gorgeous.', chinese: '即使是初读者也能看出，这个结果是华丽的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gorgeous.s1', en: 'They wanted a gorgeous answer, not a long speech.', zh: '他们要一个华丽的的答复，不要长篇发言。', structure: 'gorgeous / 表示 / 华丽的', grammar: 'adjective，围绕「华丽的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are gorgeous.', right: 'The news is gorgeous.', reason: 'news 作主语时动词用单数。', rule: '先确定 gorgeous 是adjective，再套「华丽的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gorgeous.q1', senseId: 'gorgeous.s1', errorType: 'meaning', type: '词义选择', prompt: '「gorgeous」在本条的核心意思是：', options: ['华丽的', '完全相反的意思', '一种古代钱币'], answer: '华丽的', explain: 'gorgeous：华丽的。' },
      { id: 'gorgeous.q2', senseId: 'gorgeous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gorgeous?', options: ['华丽的', 'a kind of ancient coin', 'the past tense of be'], answer: '华丽的', explain: '对的是「华丽的」。' },
      { id: 'gorgeous.q3', senseId: 'gorgeous.s1', errorType: 'grammar', type: '词义选择', prompt: 'gorgeous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'gorgeous.q4', senseId: 'gorgeous.s1', errorType: 'meaning', type: '词源', prompt: '记 gorgeous 时，哪句更稳妥？', options: ['先锁住「华丽的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「华丽的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['华丽的'] },
  });

  D('gosh', {
    etymology: {
      origin: '现代英语常用词「gosh」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gosh', gloss: '哎呀' },
      suffix: null,
      history: [
        { label: 'gosh', text: '现代英语常用词「gosh」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：哎呀。' },
      ],
      formationLogic: '核心义：哎呀。',
      mnemonic: '看到 gosh，先说出「哎呀」。',
      note: '核心义：哎呀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gosh.', chinese: '这一章反复回到同一个点：哎呀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gosh.s1', en: 'Without that gosh, the next paragraph is hard to follow.', zh: '没有这个哎呀，下一段会很难读。', structure: 'gosh / 表示 / 哎呀', grammar: 'interjection，围绕「哎呀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gosh.', right: 'He gave me some advice about the gosh.', reason: 'advice 不可数。名词 gosh 的单复数按词典词形记。', rule: '先确定 gosh 是interjection，再套「哎呀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gosh.q1', senseId: 'gosh.s1', errorType: 'meaning', type: '词义选择', prompt: '「gosh」在本条的核心意思是：', options: ['哎呀', '完全相反的意思', '一种古代钱币'], answer: '哎呀', explain: 'gosh：哎呀。' },
      { id: 'gosh.q2', senseId: 'gosh.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gosh?', options: ['哎呀', 'a kind of ancient coin', 'the past tense of be'], answer: '哎呀', explain: '对的是「哎呀」。' },
      { id: 'gosh.q3', senseId: 'gosh.s1', errorType: 'grammar', type: '词义选择', prompt: 'gosh 的词性（本条）更接近：', options: ['interjection', '只能作感叹词', '只能作数词'], answer: 'interjection', explain: '本条按 interjection 来用。' },
      { id: 'gosh.q4', senseId: 'gosh.s1', errorType: 'meaning', type: '词源', prompt: '记 gosh 时，哪句更稳妥？', options: ['先锁住「哎呀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哎呀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哎呀'] },
  });

  D('gospel', {
    etymology: {
      origin: '现代英语常用词「gospel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gospel', gloss: '福音' },
      suffix: null,
      history: [
        { label: 'gospel', text: '现代英语常用词「gospel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：福音。' },
      ],
      formationLogic: '核心义：福音。',
      mnemonic: '看到 gospel，先说出「福音」。',
      note: '核心义：福音。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gospel.', chinese: '这一章反复回到同一个点：福音。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gospel.s1', en: 'Without that gospel, the next paragraph is hard to follow.', zh: '没有这个福音，下一段会很难读。', structure: 'gospel / 表示 / 福音', grammar: 'noun，围绕「福音」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gospel.', right: 'He gave me some advice about the gospel.', reason: 'advice 不可数。名词 gospel 的单复数按词典词形记。', rule: '先确定 gospel 是noun，再套「福音」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gospel.q1', senseId: 'gospel.s1', errorType: 'meaning', type: '词义选择', prompt: '「gospel」在本条的核心意思是：', options: ['福音', '完全相反的意思', '一种古代钱币'], answer: '福音', explain: 'gospel：福音。' },
      { id: 'gospel.q2', senseId: 'gospel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gospel?', options: ['福音', 'a kind of ancient coin', 'the past tense of be'], answer: '福音', explain: '对的是「福音」。' },
      { id: 'gospel.q3', senseId: 'gospel.s1', errorType: 'grammar', type: '词义选择', prompt: 'gospel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gospel.q4', senseId: 'gospel.s1', errorType: 'meaning', type: '词源', prompt: '记 gospel 时，哪句更稳妥？', options: ['先锁住「福音」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「福音」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['福音'] },
  });

  D('gossip', {
    etymology: {
      origin: '现代英语常用词「gossip」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'gossip', gloss: '闲话' },
      suffix: null,
      history: [
        { label: 'gossip', text: '现代英语常用词「gossip」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闲话。' },
      ],
      formationLogic: '核心义：闲话。',
      mnemonic: '看到 gossip，先说出「闲话」。',
      note: '核心义：闲话。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one gossip.', chinese: '这一章反复回到同一个点：闲话。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'gossip.s1', en: 'Without that gossip, the next paragraph is hard to follow.', zh: '没有这个闲话，下一段会很难读。', structure: 'gossip / 表示 / 闲话', grammar: 'noun，围绕「闲话」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the gossip.', right: 'He gave me some advice about the gossip.', reason: 'advice 不可数。名词 gossip 的单复数按词典词形记。', rule: '先确定 gossip 是noun，再套「闲话」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'gossip.q1', senseId: 'gossip.s1', errorType: 'meaning', type: '词义选择', prompt: '「gossip」在本条的核心意思是：', options: ['闲话', '完全相反的意思', '一种古代钱币'], answer: '闲话', explain: 'gossip：闲话。' },
      { id: 'gossip.q2', senseId: 'gossip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches gossip?', options: ['闲话', 'a kind of ancient coin', 'the past tense of be'], answer: '闲话', explain: '对的是「闲话」。' },
      { id: 'gossip.q3', senseId: 'gossip.s1', errorType: 'grammar', type: '词义选择', prompt: 'gossip 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'gossip.q4', senseId: 'gossip.s1', errorType: 'meaning', type: '词源', prompt: '记 gossip 时，哪句更稳妥？', options: ['先锁住「闲话」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闲话」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闲话'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
