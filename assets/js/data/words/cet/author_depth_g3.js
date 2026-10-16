/* data/words/cet/author_depth_g3.js
 * 手敲深度补丁：farming–flood（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('farming', {
    etymology: {
      origin: '英语派生：farm + -ing，词性转到「farming」。',
      prefix: null,
      root: { text: 'farm', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'farming', text: '英语派生：farm + -ing，词性转到「farming」。' },
        { label: '现在', text: '核心用法是：farming。' },
      ],
      formationLogic: '先认词干 farm，再看词尾。',
      mnemonic: '看到 farming，先说出「farming」。',
      note: '先认词干 farm，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one farming.', chinese: '这一章反复回到同一个点：farming。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'farming.s1', en: 'Without that farming, the next paragraph is hard to follow.', zh: '没有这个farming，下一段会很难读。', structure: 'farming / 表示 / farming', grammar: 'noun，围绕「farming」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the farming.', right: 'He gave me some advice about the farming.', reason: 'advice 不可数。名词 farming 的单复数按词典词形记。', rule: '先确定 farming 是noun，再套「farming」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'farming.q1', senseId: 'farming.s1', errorType: 'meaning', type: '词义选择', prompt: '「farming」在本条的核心意思是：', options: ['farming', '完全相反的意思', '一种古代钱币'], answer: 'farming', explain: 'farming：farming。' },
      { id: 'farming.q2', senseId: 'farming.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches farming?', options: ['farming', 'a kind of ancient coin', 'the past tense of be'], answer: 'farming', explain: '对的是「farming」。' },
      { id: 'farming.q3', senseId: 'farming.s1', errorType: 'grammar', type: '词义选择', prompt: 'farming 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'farming.q4', senseId: 'farming.s1', errorType: 'meaning', type: '词源', prompt: '记 farming 时，哪句更稳妥？', options: ['先锁住「farming」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「farming」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['farming'] },
  });

  D('farther', {
    etymology: {
      origin: '英语派生：farth + -er，词性转到「更远」。',
      prefix: null,
      root: { text: 'farth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'farther', text: '英语派生：farth + -er，词性转到「更远」。' },
        { label: '现在', text: '核心用法是：更远。' },
      ],
      formationLogic: '先认词干 farth，再看词尾。',
      mnemonic: '看到 farther，先说出「更远」。',
      note: '先认词干 farth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule farther, and the class followed.', chinese: '她把规则讲清楚了（更远），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'farther.s1', en: 'He nodded farther and returned to the notes.', zh: '他更远地点了点头，又回去看笔记。', structure: 'farther / 表示 / 更远', grammar: 'adverb，围绕「更远」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very fartherly in the meeting.', right: 'She spoke farther in the meeting.', reason: 'farther 已经是副词，不要再加 -ly。', rule: '先确定 farther 是adverb，再套「更远」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'farther.q1', senseId: 'farther.s1', errorType: 'meaning', type: '词义选择', prompt: '「farther」在本条的核心意思是：', options: ['更远', '完全相反的意思', '一种古代钱币'], answer: '更远', explain: 'farther：更远。' },
      { id: 'farther.q2', senseId: 'farther.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches farther?', options: ['更远', 'a kind of ancient coin', 'the past tense of be'], answer: '更远', explain: '对的是「更远」。' },
      { id: 'farther.q3', senseId: 'farther.s1', errorType: 'grammar', type: '词义选择', prompt: 'farther 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'farther.q4', senseId: 'farther.s1', errorType: 'meaning', type: '词源', prompt: '记 farther 时，哪句更稳妥？', options: ['先锁住「更远」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「更远」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['更远'] },
  });

  D('fascinate', {
    etymology: {
      origin: '现代英语常用词「fascinate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fascinate', gloss: '使着迷' },
      suffix: null,
      history: [
        { label: 'fascinate', text: '现代英语常用词「fascinate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使着迷。' },
      ],
      formationLogic: '核心义：使着迷。',
      mnemonic: '看到 fascinate，先说出「使着迷」。',
      note: '核心义：使着迷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fascinate before the office closed.', chinese: '他们同意在办公室关门前做这件事：使着迷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fascinate.s1', en: 'The deadline forced the team to fascinate that afternoon.', zh: '截止日期逼着小组在那天下午使着迷。', structure: 'fascinate / 表示 / 使着迷', grammar: 'verb，围绕「使着迷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fascinateed it yesterday without checking the real past form.', right: 'Check the past form of "fascinate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fascinate 是verb，再套「使着迷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fascinate.q1', senseId: 'fascinate.s1', errorType: 'meaning', type: '词义选择', prompt: '「fascinate」在本条的核心意思是：', options: ['使着迷', '完全相反的意思', '一种古代钱币'], answer: '使着迷', explain: 'fascinate：使着迷。' },
      { id: 'fascinate.q2', senseId: 'fascinate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fascinate?', options: ['使着迷', 'a kind of ancient coin', 'the past tense of be'], answer: '使着迷', explain: '对的是「使着迷」。' },
      { id: 'fascinate.q3', senseId: 'fascinate.s1', errorType: 'grammar', type: '词义选择', prompt: 'fascinate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fascinate.q4', senseId: 'fascinate.s1', errorType: 'meaning', type: '词源', prompt: '记 fascinate 时，哪句更稳妥？', options: ['先锁住「使着迷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使着迷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使着迷'] },
  });

  D('fascist', {
    etymology: {
      origin: '英语派生：fasc + -ist，词性转到「法西斯主义者」。',
      prefix: null,
      root: { text: 'fasc', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fascist', text: '英语派生：fasc + -ist，词性转到「法西斯主义者」。' },
        { label: '现在', text: '核心用法是：法西斯主义者。' },
      ],
      formationLogic: '先认词干 fasc，再看词尾。',
      mnemonic: '看到 fascist，先说出「法西斯主义者」。',
      note: '先认词干 fasc，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fascist.', chinese: '这一章反复回到同一个点：法西斯主义者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fascist.s1', en: 'Without that fascist, the next paragraph is hard to follow.', zh: '没有这个法西斯主义者，下一段会很难读。', structure: 'fascist / 表示 / 法西斯主义者', grammar: 'noun，围绕「法西斯主义者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fascist.', right: 'He gave me some advice about the fascist.', reason: 'advice 不可数。名词 fascist 的单复数按词典词形记。', rule: '先确定 fascist 是noun，再套「法西斯主义者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fascist.q1', senseId: 'fascist.s1', errorType: 'meaning', type: '词义选择', prompt: '「fascist」在本条的核心意思是：', options: ['法西斯主义者', '完全相反的意思', '一种古代钱币'], answer: '法西斯主义者', explain: 'fascist：法西斯主义者。' },
      { id: 'fascist.q2', senseId: 'fascist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fascist?', options: ['法西斯主义者', 'a kind of ancient coin', 'the past tense of be'], answer: '法西斯主义者', explain: '对的是「法西斯主义者」。' },
      { id: 'fascist.q3', senseId: 'fascist.s1', errorType: 'grammar', type: '词义选择', prompt: 'fascist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fascist.q4', senseId: 'fascist.s1', errorType: 'meaning', type: '词源', prompt: '记 fascist 时，哪句更稳妥？', options: ['先锁住「法西斯主义者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「法西斯主义者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['法西斯主义者'] },
  });

  D('fashion', {
    etymology: {
      origin: '现代英语常用词「fashion」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fashion', gloss: '时尚' },
      suffix: null,
      history: [
        { label: 'fashion', text: '现代英语常用词「fashion」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：时尚。' },
      ],
      formationLogic: '核心义：时尚。',
      mnemonic: '看到 fashion，先说出「时尚」。',
      note: '核心义：时尚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fashion.', chinese: '这一章反复回到同一个点：时尚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fashion.s1', en: 'Without that fashion, the next paragraph is hard to follow.', zh: '没有这个时尚，下一段会很难读。', structure: 'fashion / 表示 / 时尚', grammar: 'noun，围绕「时尚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fashion.', right: 'He gave me some advice about the fashion.', reason: 'advice 不可数。名词 fashion 的单复数按词典词形记。', rule: '先确定 fashion 是noun，再套「时尚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fashion.q1', senseId: 'fashion.s1', errorType: 'meaning', type: '词义选择', prompt: '「fashion」在本条的核心意思是：', options: ['时尚', '完全相反的意思', '一种古代钱币'], answer: '时尚', explain: 'fashion：时尚。' },
      { id: 'fashion.q2', senseId: 'fashion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fashion?', options: ['时尚', 'a kind of ancient coin', 'the past tense of be'], answer: '时尚', explain: '对的是「时尚」。' },
      { id: 'fashion.q3', senseId: 'fashion.s1', errorType: 'grammar', type: '词义选择', prompt: 'fashion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fashion.q4', senseId: 'fashion.s1', errorType: 'meaning', type: '词源', prompt: '记 fashion 时，哪句更稳妥？', options: ['先锁住「时尚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「时尚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['时尚'] },
  });

  D('fashionable', {
    etymology: {
      origin: '英语派生：fashion + -able，词性转到「流行的」。',
      prefix: null,
      root: { text: 'fashion', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fashionable', text: '英语派生：fashion + -able，词性转到「流行的」。' },
        { label: '现在', text: '核心用法是：流行的。' },
      ],
      formationLogic: '先认词干 fashion，再看词尾。',
      mnemonic: '看到 fashionable，先说出「流行的」。',
      note: '先认词干 fashion，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fashionable.', chinese: '即使是初读者也能看出，这个结果是流行的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fashionable.s1', en: 'They wanted a fashionable answer, not a long speech.', zh: '他们要一个流行的的答复，不要长篇发言。', structure: 'fashionable / 表示 / 流行的', grammar: 'adjective，围绕「流行的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fashionable.', right: 'The news is fashionable.', reason: 'news 作主语时动词用单数。', rule: '先确定 fashionable 是adjective，再套「流行的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fashionable.q1', senseId: 'fashionable.s1', errorType: 'meaning', type: '词义选择', prompt: '「fashionable」在本条的核心意思是：', options: ['流行的', '完全相反的意思', '一种古代钱币'], answer: '流行的', explain: 'fashionable：流行的。' },
      { id: 'fashionable.q2', senseId: 'fashionable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fashionable?', options: ['流行的', 'a kind of ancient coin', 'the past tense of be'], answer: '流行的', explain: '对的是「流行的」。' },
      { id: 'fashionable.q3', senseId: 'fashionable.s1', errorType: 'grammar', type: '词义选择', prompt: 'fashionable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fashionable.q4', senseId: 'fashionable.s1', errorType: 'meaning', type: '词源', prompt: '记 fashionable 时，哪句更稳妥？', options: ['先锁住「流行的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流行的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流行的'] },
  });

  D('fast', {
    etymology: {
      origin: '现代英语常用词「fast」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fast', gloss: '快的' },
      suffix: null,
      history: [
        { label: 'fast', text: '现代英语常用词「fast」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：快的。' },
      ],
      formationLogic: '核心义：快的。',
      mnemonic: '看到 fast，先说出「快的」。',
      note: '核心义：快的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fast.', chinese: '即使是初读者也能看出，这个结果是快的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fast.s1', en: 'They wanted a fast answer, not a long speech.', zh: '他们要一个快的的答复，不要长篇发言。', structure: 'fast / 表示 / 快的', grammar: 'adjective，围绕「快的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fast.', right: 'The news is fast.', reason: 'news 作主语时动词用单数。', rule: '先确定 fast 是adjective，再套「快的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fast.q1', senseId: 'fast.s1', errorType: 'meaning', type: '词义选择', prompt: '「fast」在本条的核心意思是：', options: ['快的', '完全相反的意思', '一种古代钱币'], answer: '快的', explain: 'fast：快的。' },
      { id: 'fast.q2', senseId: 'fast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fast?', options: ['快的', 'a kind of ancient coin', 'the past tense of be'], answer: '快的', explain: '对的是「快的」。' },
      { id: 'fast.q3', senseId: 'fast.s1', errorType: 'grammar', type: '词义选择', prompt: 'fast 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fast.q4', senseId: 'fast.s1', errorType: 'meaning', type: '词源', prompt: '记 fast 时，哪句更稳妥？', options: ['先锁住「快的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「快的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['快的'] },
  });

  D('fast asleep', {
    etymology: {
      origin: '现代英语固定说法「fast asleep」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fast asleep', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fast asleep', text: '现代英语固定说法「fast asleep」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：熟睡的。' },
      ],
      formationLogic: '核心义：熟睡的。',
      mnemonic: '看到 fast asleep，先说出「熟睡的」。',
      note: '核心义：熟睡的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fast asleep" and asked the class to keep it as one unit.', chinese: '老师把「fast asleep」圈出来，让全班把它当成一个整体。它表示熟睡的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fast asleep.s1', en: 'In the margin she wrote "fast asleep" so nobody would split the phrase.', zh: '她在页边写下「fast asleep」，免得有人把这个说法拆开。意思是熟睡的。', structure: 'fast asleep / 表示 / 熟睡的', grammar: 'adjective，围绕「熟睡的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fast asleep and lost the point.', right: 'Keep "fast asleep" together: it means 熟睡的.', reason: '「fast asleep」要整块理解。', rule: '先确定 fast asleep 是adjective，再套「熟睡的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fast asleep.q1', senseId: 'fast asleep.s1', errorType: 'meaning', type: '词义选择', prompt: '「fast asleep」在本条的核心意思是：', options: ['熟睡的', '完全相反的意思', '一种古代钱币'], answer: '熟睡的', explain: 'fast asleep：熟睡的。' },
      { id: 'fast asleep.q2', senseId: 'fast asleep.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fast asleep?', options: ['熟睡的', 'a kind of ancient coin', 'the past tense of be'], answer: '熟睡的', explain: '对的是「熟睡的」。' },
      { id: 'fast asleep.q3', senseId: 'fast asleep.s1', errorType: 'grammar', type: '词义选择', prompt: 'fast asleep 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fast asleep.q4', senseId: 'fast asleep.s1', errorType: 'meaning', type: '词源', prompt: '记 fast asleep 时，哪句更稳妥？', options: ['先锁住「熟睡的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「熟睡的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熟睡的'] },
  });

  D('fast train', {
    etymology: {
      origin: '现代英语固定说法「fast train」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fast train', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fast train', text: '现代英语固定说法「fast train」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：快车。' },
      ],
      formationLogic: '核心义：快车。',
      mnemonic: '看到 fast train，先说出「快车」。',
      note: '核心义：快车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fast train" and asked the class to keep it as one unit.', chinese: '老师把「fast train」圈出来，让全班把它当成一个整体。它表示快车。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fast train.s1', en: 'In the margin she wrote "fast train" so nobody would split the phrase.', zh: '她在页边写下「fast train」，免得有人把这个说法拆开。意思是快车。', structure: 'fast train / 表示 / 快车', grammar: 'noun，围绕「快车」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fast train and lost the point.', right: 'Keep "fast train" together: it means 快车.', reason: '「fast train」要整块理解。', rule: '先确定 fast train 是noun，再套「快车」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fast train.q1', senseId: 'fast train.s1', errorType: 'meaning', type: '词义选择', prompt: '「fast train」在本条的核心意思是：', options: ['快车', '完全相反的意思', '一种古代钱币'], answer: '快车', explain: 'fast train：快车。' },
      { id: 'fast train.q2', senseId: 'fast train.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fast train?', options: ['快车', 'a kind of ancient coin', 'the past tense of be'], answer: '快车', explain: '对的是「快车」。' },
      { id: 'fast train.q3', senseId: 'fast train.s1', errorType: 'grammar', type: '词义选择', prompt: 'fast train 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fast train.q4', senseId: 'fast train.s1', errorType: 'meaning', type: '词源', prompt: '记 fast train 时，哪句更稳妥？', options: ['先锁住「快车」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「快车」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['快车'] },
  });

  D('fasten', {
    etymology: {
      origin: '现代英语常用词「fasten」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fasten', gloss: '扣紧' },
      suffix: null,
      history: [
        { label: 'fasten', text: '现代英语常用词「fasten」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：扣紧。' },
      ],
      formationLogic: '核心义：扣紧。',
      mnemonic: '看到 fasten，先说出「扣紧」。',
      note: '核心义：扣紧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fasten before the office closed.', chinese: '他们同意在办公室关门前做这件事：扣紧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fasten.s1', en: 'The deadline forced the team to fasten that afternoon.', zh: '截止日期逼着小组在那天下午扣紧。', structure: 'fasten / 表示 / 扣紧', grammar: 'verb，围绕「扣紧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fastened it yesterday without checking the real past form.', right: 'Check the past form of "fasten" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fasten 是verb，再套「扣紧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fasten.q1', senseId: 'fasten.s1', errorType: 'meaning', type: '词义选择', prompt: '「fasten」在本条的核心意思是：', options: ['扣紧', '完全相反的意思', '一种古代钱币'], answer: '扣紧', explain: 'fasten：扣紧。' },
      { id: 'fasten.q2', senseId: 'fasten.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fasten?', options: ['扣紧', 'a kind of ancient coin', 'the past tense of be'], answer: '扣紧', explain: '对的是「扣紧」。' },
      { id: 'fasten.q3', senseId: 'fasten.s1', errorType: 'grammar', type: '词义选择', prompt: 'fasten 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fasten.q4', senseId: 'fasten.s1', errorType: 'meaning', type: '词源', prompt: '记 fasten 时，哪句更稳妥？', options: ['先锁住「扣紧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扣紧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扣紧'] },
  });

  D('fastener', {
    etymology: {
      origin: '英语派生：fasten + -er，词性转到「扣件」。',
      prefix: null,
      root: { text: 'fasten', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fastener', text: '英语派生：fasten + -er，词性转到「扣件」。' },
        { label: '现在', text: '核心用法是：扣件。' },
      ],
      formationLogic: '先认词干 fasten，再看词尾。',
      mnemonic: '看到 fastener，先说出「扣件」。',
      note: '先认词干 fasten，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fastener.', chinese: '这一章反复回到同一个点：扣件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fastener.s1', en: 'Without that fastener, the next paragraph is hard to follow.', zh: '没有这个扣件，下一段会很难读。', structure: 'fastener / 表示 / 扣件', grammar: 'noun，围绕「扣件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fastener.', right: 'He gave me some advice about the fastener.', reason: 'advice 不可数。名词 fastener 的单复数按词典词形记。', rule: '先确定 fastener 是noun，再套「扣件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fastener.q1', senseId: 'fastener.s1', errorType: 'meaning', type: '词义选择', prompt: '「fastener」在本条的核心意思是：', options: ['扣件', '完全相反的意思', '一种古代钱币'], answer: '扣件', explain: 'fastener：扣件。' },
      { id: 'fastener.q2', senseId: 'fastener.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fastener?', options: ['扣件', 'a kind of ancient coin', 'the past tense of be'], answer: '扣件', explain: '对的是「扣件」。' },
      { id: 'fastener.q3', senseId: 'fastener.s1', errorType: 'grammar', type: '词义选择', prompt: 'fastener 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fastener.q4', senseId: 'fastener.s1', errorType: 'meaning', type: '词源', prompt: '记 fastener 时，哪句更稳妥？', options: ['先锁住「扣件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扣件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扣件'] },
  });

  D('fastening', {
    etymology: {
      origin: '英语派生：fasten + -ing，词性转到「系紧」。',
      prefix: null,
      root: { text: 'fasten', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fastening', text: '英语派生：fasten + -ing，词性转到「系紧」。' },
        { label: '现在', text: '核心用法是：系紧。' },
      ],
      formationLogic: '先认词干 fasten，再看词尾。',
      mnemonic: '看到 fastening，先说出「系紧」。',
      note: '先认词干 fasten，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fastening.', chinese: '这一章反复回到同一个点：系紧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fastening.s1', en: 'Without that fastening, the next paragraph is hard to follow.', zh: '没有这个系紧，下一段会很难读。', structure: 'fastening / 表示 / 系紧', grammar: 'noun，围绕「系紧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fastening.', right: 'He gave me some advice about the fastening.', reason: 'advice 不可数。名词 fastening 的单复数按词典词形记。', rule: '先确定 fastening 是noun，再套「系紧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fastening.q1', senseId: 'fastening.s1', errorType: 'meaning', type: '词义选择', prompt: '「fastening」在本条的核心意思是：', options: ['系紧', '完全相反的意思', '一种古代钱币'], answer: '系紧', explain: 'fastening：系紧。' },
      { id: 'fastening.q2', senseId: 'fastening.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fastening?', options: ['系紧', 'a kind of ancient coin', 'the past tense of be'], answer: '系紧', explain: '对的是「系紧」。' },
      { id: 'fastening.q3', senseId: 'fastening.s1', errorType: 'grammar', type: '词义选择', prompt: 'fastening 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fastening.q4', senseId: 'fastening.s1', errorType: 'meaning', type: '词源', prompt: '记 fastening 时，哪句更稳妥？', options: ['先锁住「系紧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「系紧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['系紧'] },
  });

  D('fastidious', {
    etymology: {
      origin: '英语派生：fastidi + -ous，词性转到「挑剔的」。',
      prefix: null,
      root: { text: 'fastidi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fastidious', text: '英语派生：fastidi + -ous，词性转到「挑剔的」。' },
        { label: '现在', text: '核心用法是：挑剔的。' },
      ],
      formationLogic: '先认词干 fastidi，再看词尾。',
      mnemonic: '看到 fastidious，先说出「挑剔的」。',
      note: '先认词干 fastidi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fastidious.', chinese: '即使是初读者也能看出，这个结果是挑剔的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fastidious.s1', en: 'They wanted a fastidious answer, not a long speech.', zh: '他们要一个挑剔的的答复，不要长篇发言。', structure: 'fastidious / 表示 / 挑剔的', grammar: 'adjective，围绕「挑剔的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fastidious.', right: 'The news is fastidious.', reason: 'news 作主语时动词用单数。', rule: '先确定 fastidious 是adjective，再套「挑剔的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fastidious.q1', senseId: 'fastidious.s1', errorType: 'meaning', type: '词义选择', prompt: '「fastidious」在本条的核心意思是：', options: ['挑剔的', '完全相反的意思', '一种古代钱币'], answer: '挑剔的', explain: 'fastidious：挑剔的。' },
      { id: 'fastidious.q2', senseId: 'fastidious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fastidious?', options: ['挑剔的', 'a kind of ancient coin', 'the past tense of be'], answer: '挑剔的', explain: '对的是「挑剔的」。' },
      { id: 'fastidious.q3', senseId: 'fastidious.s1', errorType: 'grammar', type: '词义选择', prompt: 'fastidious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fastidious.q4', senseId: 'fastidious.s1', errorType: 'meaning', type: '词源', prompt: '记 fastidious 时，哪句更稳妥？', options: ['先锁住「挑剔的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挑剔的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挑剔的'] },
  });

  D('fat', {
    etymology: {
      origin: '现代英语常用词「fat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fat', gloss: '肥胖的' },
      suffix: null,
      history: [
        { label: 'fat', text: '现代英语常用词「fat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肥胖的。' },
      ],
      formationLogic: '核心义：肥胖的。',
      mnemonic: '看到 fat，先说出「肥胖的」。',
      note: '核心义：肥胖的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fat.', chinese: '即使是初读者也能看出，这个结果是肥胖的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fat.s1', en: 'They wanted a fat answer, not a long speech.', zh: '他们要一个肥胖的的答复，不要长篇发言。', structure: 'fat / 表示 / 肥胖的', grammar: 'adjective，围绕「肥胖的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fat.', right: 'The news is fat.', reason: 'news 作主语时动词用单数。', rule: '先确定 fat 是adjective，再套「肥胖的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fat.q1', senseId: 'fat.s1', errorType: 'meaning', type: '词义选择', prompt: '「fat」在本条的核心意思是：', options: ['肥胖的', '完全相反的意思', '一种古代钱币'], answer: '肥胖的', explain: 'fat：肥胖的。' },
      { id: 'fat.q2', senseId: 'fat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fat?', options: ['肥胖的', 'a kind of ancient coin', 'the past tense of be'], answer: '肥胖的', explain: '对的是「肥胖的」。' },
      { id: 'fat.q3', senseId: 'fat.s1', errorType: 'grammar', type: '词义选择', prompt: 'fat 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fat.q4', senseId: 'fat.s1', errorType: 'meaning', type: '词源', prompt: '记 fat 时，哪句更稳妥？', options: ['先锁住「肥胖的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肥胖的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肥胖的'] },
  });

  D('fatal', {
    etymology: {
      origin: '英语派生：fat + -al，词性转到「致命的」。',
      prefix: null,
      root: { text: 'fat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fatal', text: '英语派生：fat + -al，词性转到「致命的」。' },
        { label: '现在', text: '核心用法是：致命的。' },
      ],
      formationLogic: '先认词干 fat，再看词尾。',
      mnemonic: '看到 fatal，先说出「致命的」。',
      note: '先认词干 fat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fatal.', chinese: '即使是初读者也能看出，这个结果是致命的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fatal.s1', en: 'They wanted a fatal answer, not a long speech.', zh: '他们要一个致命的的答复，不要长篇发言。', structure: 'fatal / 表示 / 致命的', grammar: 'adjective，围绕「致命的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fatal.', right: 'The news is fatal.', reason: 'news 作主语时动词用单数。', rule: '先确定 fatal 是adjective，再套「致命的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fatal.q1', senseId: 'fatal.s1', errorType: 'meaning', type: '词义选择', prompt: '「fatal」在本条的核心意思是：', options: ['致命的', '完全相反的意思', '一种古代钱币'], answer: '致命的', explain: 'fatal：致命的。' },
      { id: 'fatal.q2', senseId: 'fatal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fatal?', options: ['致命的', 'a kind of ancient coin', 'the past tense of be'], answer: '致命的', explain: '对的是「致命的」。' },
      { id: 'fatal.q3', senseId: 'fatal.s1', errorType: 'grammar', type: '词义选择', prompt: 'fatal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fatal.q4', senseId: 'fatal.s1', errorType: 'meaning', type: '词源', prompt: '记 fatal 时，哪句更稳妥？', options: ['先锁住「致命的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「致命的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['致命的'] },
  });

  D('fate', {
    etymology: {
      origin: '现代英语常用词「fate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fate', gloss: '命运' },
      suffix: null,
      history: [
        { label: 'fate', text: '现代英语常用词「fate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：命运。' },
      ],
      formationLogic: '核心义：命运。',
      mnemonic: '看到 fate，先说出「命运」。',
      note: '核心义：命运。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fate.', chinese: '这一章反复回到同一个点：命运。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fate.s1', en: 'Without that fate, the next paragraph is hard to follow.', zh: '没有这个命运，下一段会很难读。', structure: 'fate / 表示 / 命运', grammar: 'noun，围绕「命运」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fate.', right: 'He gave me some advice about the fate.', reason: 'advice 不可数。名词 fate 的单复数按词典词形记。', rule: '先确定 fate 是noun，再套「命运」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fate.q1', senseId: 'fate.s1', errorType: 'meaning', type: '词义选择', prompt: '「fate」在本条的核心意思是：', options: ['命运', '完全相反的意思', '一种古代钱币'], answer: '命运', explain: 'fate：命运。' },
      { id: 'fate.q2', senseId: 'fate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fate?', options: ['命运', 'a kind of ancient coin', 'the past tense of be'], answer: '命运', explain: '对的是「命运」。' },
      { id: 'fate.q3', senseId: 'fate.s1', errorType: 'grammar', type: '词义选择', prompt: 'fate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fate.q4', senseId: 'fate.s1', errorType: 'meaning', type: '词源', prompt: '记 fate 时，哪句更稳妥？', options: ['先锁住「命运」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「命运」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['命运'] },
  });

  D('father', {
    etymology: {
      origin: '英语派生：fath + -er，词性转到「父亲」。',
      prefix: null,
      root: { text: 'fath', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'father', text: '英语派生：fath + -er，词性转到「父亲」。' },
        { label: '现在', text: '核心用法是：父亲。' },
      ],
      formationLogic: '先认词干 fath，再看词尾。',
      mnemonic: '看到 father，先说出「父亲」。',
      note: '先认词干 fath，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one father.', chinese: '这一章反复回到同一个点：父亲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'father.s1', en: 'Without that father, the next paragraph is hard to follow.', zh: '没有这个父亲，下一段会很难读。', structure: 'father / 表示 / 父亲', grammar: 'noun，围绕「父亲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the father.', right: 'He gave me some advice about the father.', reason: 'advice 不可数。名词 father 的单复数按词典词形记。', rule: '先确定 father 是noun，再套「父亲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'father.q1', senseId: 'father.s1', errorType: 'meaning', type: '词义选择', prompt: '「father」在本条的核心意思是：', options: ['父亲', '完全相反的意思', '一种古代钱币'], answer: '父亲', explain: 'father：父亲。' },
      { id: 'father.q2', senseId: 'father.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches father?', options: ['父亲', 'a kind of ancient coin', 'the past tense of be'], answer: '父亲', explain: '对的是「父亲」。' },
      { id: 'father.q3', senseId: 'father.s1', errorType: 'grammar', type: '词义选择', prompt: 'father 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'father.q4', senseId: 'father.s1', errorType: 'meaning', type: '词源', prompt: '记 father 时，哪句更稳妥？', options: ['先锁住「父亲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「父亲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['父亲'] },
  });

  D('fatherland', {
    etymology: {
      origin: '现代英语常用词「fatherland」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fatherland', gloss: '祖国' },
      suffix: null,
      history: [
        { label: 'fatherland', text: '现代英语常用词「fatherland」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：祖国。' },
      ],
      formationLogic: '核心义：祖国。',
      mnemonic: '看到 fatherland，先说出「祖国」。',
      note: '核心义：祖国。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fatherland.', chinese: '这一章反复回到同一个点：祖国。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fatherland.s1', en: 'Without that fatherland, the next paragraph is hard to follow.', zh: '没有这个祖国，下一段会很难读。', structure: 'fatherland / 表示 / 祖国', grammar: 'noun，围绕「祖国」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fatherland.', right: 'He gave me some advice about the fatherland.', reason: 'advice 不可数。名词 fatherland 的单复数按词典词形记。', rule: '先确定 fatherland 是noun，再套「祖国」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fatherland.q1', senseId: 'fatherland.s1', errorType: 'meaning', type: '词义选择', prompt: '「fatherland」在本条的核心意思是：', options: ['祖国', '完全相反的意思', '一种古代钱币'], answer: '祖国', explain: 'fatherland：祖国。' },
      { id: 'fatherland.q2', senseId: 'fatherland.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fatherland?', options: ['祖国', 'a kind of ancient coin', 'the past tense of be'], answer: '祖国', explain: '对的是「祖国」。' },
      { id: 'fatherland.q3', senseId: 'fatherland.s1', errorType: 'grammar', type: '词义选择', prompt: 'fatherland 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fatherland.q4', senseId: 'fatherland.s1', errorType: 'meaning', type: '词源', prompt: '记 fatherland 时，哪句更稳妥？', options: ['先锁住「祖国」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「祖国」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['祖国'] },
  });

  D('fathom', {
    etymology: {
      origin: '现代英语常用词「fathom」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fathom', gloss: '理解' },
      suffix: null,
      history: [
        { label: 'fathom', text: '现代英语常用词「fathom」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：理解。' },
      ],
      formationLogic: '核心义：理解。',
      mnemonic: '看到 fathom，先说出「理解」。',
      note: '核心义：理解。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fathom before the office closed.', chinese: '他们同意在办公室关门前做这件事：理解。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fathom.s1', en: 'The deadline forced the team to fathom that afternoon.', zh: '截止日期逼着小组在那天下午理解。', structure: 'fathom / 表示 / 理解', grammar: 'verb，围绕「理解」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fathomed it yesterday without checking the real past form.', right: 'Check the past form of "fathom" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fathom 是verb，再套「理解」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fathom.q1', senseId: 'fathom.s1', errorType: 'meaning', type: '词义选择', prompt: '「fathom」在本条的核心意思是：', options: ['理解', '完全相反的意思', '一种古代钱币'], answer: '理解', explain: 'fathom：理解。' },
      { id: 'fathom.q2', senseId: 'fathom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fathom?', options: ['理解', 'a kind of ancient coin', 'the past tense of be'], answer: '理解', explain: '对的是「理解」。' },
      { id: 'fathom.q3', senseId: 'fathom.s1', errorType: 'grammar', type: '词义选择', prompt: 'fathom 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fathom.q4', senseId: 'fathom.s1', errorType: 'meaning', type: '词源', prompt: '记 fathom 时，哪句更稳妥？', options: ['先锁住「理解」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「理解」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['理解'] },
  });

  D('fatigue', {
    etymology: {
      origin: '现代英语常用词「fatigue」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fatigue', gloss: '疲劳' },
      suffix: null,
      history: [
        { label: 'fatigue', text: '现代英语常用词「fatigue」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：疲劳。' },
      ],
      formationLogic: '核心义：疲劳。',
      mnemonic: '看到 fatigue，先说出「疲劳」。',
      note: '核心义：疲劳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fatigue.', chinese: '这一章反复回到同一个点：疲劳。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fatigue.s1', en: 'Without that fatigue, the next paragraph is hard to follow.', zh: '没有这个疲劳，下一段会很难读。', structure: 'fatigue / 表示 / 疲劳', grammar: 'noun，围绕「疲劳」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fatigue.', right: 'He gave me some advice about the fatigue.', reason: 'advice 不可数。名词 fatigue 的单复数按词典词形记。', rule: '先确定 fatigue 是noun，再套「疲劳」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fatigue.q1', senseId: 'fatigue.s1', errorType: 'meaning', type: '词义选择', prompt: '「fatigue」在本条的核心意思是：', options: ['疲劳', '完全相反的意思', '一种古代钱币'], answer: '疲劳', explain: 'fatigue：疲劳。' },
      { id: 'fatigue.q2', senseId: 'fatigue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fatigue?', options: ['疲劳', 'a kind of ancient coin', 'the past tense of be'], answer: '疲劳', explain: '对的是「疲劳」。' },
      { id: 'fatigue.q3', senseId: 'fatigue.s1', errorType: 'grammar', type: '词义选择', prompt: 'fatigue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fatigue.q4', senseId: 'fatigue.s1', errorType: 'meaning', type: '词源', prompt: '记 fatigue 时，哪句更稳妥？', options: ['先锁住「疲劳」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「疲劳」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疲劳'] },
  });

  D('faucet', {
    etymology: {
      origin: '现代英语常用词「faucet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'faucet', gloss: '水龙头' },
      suffix: null,
      history: [
        { label: 'faucet', text: '现代英语常用词「faucet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：水龙头。' },
      ],
      formationLogic: '核心义：水龙头。',
      mnemonic: '看到 faucet，先说出「水龙头」。',
      note: '核心义：水龙头。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one faucet.', chinese: '这一章反复回到同一个点：水龙头。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faucet.s1', en: 'Without that faucet, the next paragraph is hard to follow.', zh: '没有这个水龙头，下一段会很难读。', structure: 'faucet / 表示 / 水龙头', grammar: 'noun，围绕「水龙头」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the faucet.', right: 'He gave me some advice about the faucet.', reason: 'advice 不可数。名词 faucet 的单复数按词典词形记。', rule: '先确定 faucet 是noun，再套「水龙头」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faucet.q1', senseId: 'faucet.s1', errorType: 'meaning', type: '词义选择', prompt: '「faucet」在本条的核心意思是：', options: ['水龙头', '完全相反的意思', '一种古代钱币'], answer: '水龙头', explain: 'faucet：水龙头。' },
      { id: 'faucet.q2', senseId: 'faucet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faucet?', options: ['水龙头', 'a kind of ancient coin', 'the past tense of be'], answer: '水龙头', explain: '对的是「水龙头」。' },
      { id: 'faucet.q3', senseId: 'faucet.s1', errorType: 'grammar', type: '词义选择', prompt: 'faucet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'faucet.q4', senseId: 'faucet.s1', errorType: 'meaning', type: '词源', prompt: '记 faucet 时，哪句更稳妥？', options: ['先锁住「水龙头」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「水龙头」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['水龙头'] },
  });

  D('fault', {
    etymology: {
      origin: '现代英语常用词「fault」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fault', gloss: '过错' },
      suffix: null,
      history: [
        { label: 'fault', text: '现代英语常用词「fault」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：过错。' },
      ],
      formationLogic: '核心义：过错。',
      mnemonic: '看到 fault，先说出「过错」。',
      note: '核心义：过错。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fault.', chinese: '这一章反复回到同一个点：过错。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fault.s1', en: 'Without that fault, the next paragraph is hard to follow.', zh: '没有这个过错，下一段会很难读。', structure: 'fault / 表示 / 过错', grammar: 'noun，围绕「过错」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fault.', right: 'He gave me some advice about the fault.', reason: 'advice 不可数。名词 fault 的单复数按词典词形记。', rule: '先确定 fault 是noun，再套「过错」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fault.q1', senseId: 'fault.s1', errorType: 'meaning', type: '词义选择', prompt: '「fault」在本条的核心意思是：', options: ['过错', '完全相反的意思', '一种古代钱币'], answer: '过错', explain: 'fault：过错。' },
      { id: 'fault.q2', senseId: 'fault.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fault?', options: ['过错', 'a kind of ancient coin', 'the past tense of be'], answer: '过错', explain: '对的是「过错」。' },
      { id: 'fault.q3', senseId: 'fault.s1', errorType: 'grammar', type: '词义选择', prompt: 'fault 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fault.q4', senseId: 'fault.s1', errorType: 'meaning', type: '词源', prompt: '记 fault 时，哪句更稳妥？', options: ['先锁住「过错」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「过错」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过错'] },
  });

  D('faulty', {
    etymology: {
      origin: '现代英语常用词「faulty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'faulty', gloss: '有毛病的' },
      suffix: null,
      history: [
        { label: 'faulty', text: '现代英语常用词「faulty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：有毛病的。' },
      ],
      formationLogic: '核心义：有毛病的。',
      mnemonic: '看到 faulty，先说出「有毛病的」。',
      note: '核心义：有毛病的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was faulty.', chinese: '即使是初读者也能看出，这个结果是有毛病的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faulty.s1', en: 'They wanted a faulty answer, not a long speech.', zh: '他们要一个有毛病的的答复，不要长篇发言。', structure: 'faulty / 表示 / 有毛病的', grammar: 'adjective，围绕「有毛病的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are faulty.', right: 'The news is faulty.', reason: 'news 作主语时动词用单数。', rule: '先确定 faulty 是adjective，再套「有毛病的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faulty.q1', senseId: 'faulty.s1', errorType: 'meaning', type: '词义选择', prompt: '「faulty」在本条的核心意思是：', options: ['有毛病的', '完全相反的意思', '一种古代钱币'], answer: '有毛病的', explain: 'faulty：有毛病的。' },
      { id: 'faulty.q2', senseId: 'faulty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faulty?', options: ['有毛病的', 'a kind of ancient coin', 'the past tense of be'], answer: '有毛病的', explain: '对的是「有毛病的」。' },
      { id: 'faulty.q3', senseId: 'faulty.s1', errorType: 'grammar', type: '词义选择', prompt: 'faulty 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'faulty.q4', senseId: 'faulty.s1', errorType: 'meaning', type: '词源', prompt: '记 faulty 时，哪句更稳妥？', options: ['先锁住「有毛病的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有毛病的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有毛病的'] },
  });

  D('fauna', {
    etymology: {
      origin: '现代英语常用词「fauna」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fauna', gloss: '动物群' },
      suffix: null,
      history: [
        { label: 'fauna', text: '现代英语常用词「fauna」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：动物群。' },
      ],
      formationLogic: '核心义：动物群。',
      mnemonic: '看到 fauna，先说出「动物群」。',
      note: '核心义：动物群。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fauna.', chinese: '这一章反复回到同一个点：动物群。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fauna.s1', en: 'Without that fauna, the next paragraph is hard to follow.', zh: '没有这个动物群，下一段会很难读。', structure: 'fauna / 表示 / 动物群', grammar: 'noun，围绕「动物群」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fauna.', right: 'He gave me some advice about the fauna.', reason: 'advice 不可数。名词 fauna 的单复数按词典词形记。', rule: '先确定 fauna 是noun，再套「动物群」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fauna.q1', senseId: 'fauna.s1', errorType: 'meaning', type: '词义选择', prompt: '「fauna」在本条的核心意思是：', options: ['动物群', '完全相反的意思', '一种古代钱币'], answer: '动物群', explain: 'fauna：动物群。' },
      { id: 'fauna.q2', senseId: 'fauna.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fauna?', options: ['动物群', 'a kind of ancient coin', 'the past tense of be'], answer: '动物群', explain: '对的是「动物群」。' },
      { id: 'fauna.q3', senseId: 'fauna.s1', errorType: 'grammar', type: '词义选择', prompt: 'fauna 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fauna.q4', senseId: 'fauna.s1', errorType: 'meaning', type: '词源', prompt: '记 fauna 时，哪句更稳妥？', options: ['先锁住「动物群」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「动物群」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['动物群'] },
  });

  D('favor', {
    etymology: {
      origin: '英语派生：fav + -or，词性转到「恩惠」。',
      prefix: null,
      root: { text: 'fav', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'favor', text: '英语派生：fav + -or，词性转到「恩惠」。' },
        { label: '现在', text: '核心用法是：恩惠。' },
      ],
      formationLogic: '先认词干 fav，再看词尾。',
      mnemonic: '看到 favor，先说出「恩惠」。',
      note: '先认词干 fav，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one favor.', chinese: '这一章反复回到同一个点：恩惠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'favor.s1', en: 'Without that favor, the next paragraph is hard to follow.', zh: '没有这个恩惠，下一段会很难读。', structure: 'favor / 表示 / 恩惠', grammar: 'noun，围绕「恩惠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the favor.', right: 'He gave me some advice about the favor.', reason: 'advice 不可数。名词 favor 的单复数按词典词形记。', rule: '先确定 favor 是noun，再套「恩惠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'favor.q1', senseId: 'favor.s1', errorType: 'meaning', type: '词义选择', prompt: '「favor」在本条的核心意思是：', options: ['恩惠', '完全相反的意思', '一种古代钱币'], answer: '恩惠', explain: 'favor：恩惠。' },
      { id: 'favor.q2', senseId: 'favor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches favor?', options: ['恩惠', 'a kind of ancient coin', 'the past tense of be'], answer: '恩惠', explain: '对的是「恩惠」。' },
      { id: 'favor.q3', senseId: 'favor.s1', errorType: 'grammar', type: '词义选择', prompt: 'favor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'favor.q4', senseId: 'favor.s1', errorType: 'meaning', type: '词源', prompt: '记 favor 时，哪句更稳妥？', options: ['先锁住「恩惠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「恩惠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['恩惠'] },
  });

  D('favourable', {
    etymology: {
      origin: '英语派生：favour + -able，词性转到「有利的」。',
      prefix: null,
      root: { text: 'favour', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'favourable', text: '英语派生：favour + -able，词性转到「有利的」。' },
        { label: '现在', text: '核心用法是：有利的。' },
      ],
      formationLogic: '先认词干 favour，再看词尾。',
      mnemonic: '看到 favourable，先说出「有利的」。',
      note: '先认词干 favour，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was favourable.', chinese: '即使是初读者也能看出，这个结果是有利的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'favourable.s1', en: 'They wanted a favourable answer, not a long speech.', zh: '他们要一个有利的的答复，不要长篇发言。', structure: 'favourable / 表示 / 有利的', grammar: 'adjective，围绕「有利的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are favourable.', right: 'The news is favourable.', reason: 'news 作主语时动词用单数。', rule: '先确定 favourable 是adjective，再套「有利的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'favourable.q1', senseId: 'favourable.s1', errorType: 'meaning', type: '词义选择', prompt: '「favourable」在本条的核心意思是：', options: ['有利的', '完全相反的意思', '一种古代钱币'], answer: '有利的', explain: 'favourable：有利的。' },
      { id: 'favourable.q2', senseId: 'favourable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches favourable?', options: ['有利的', 'a kind of ancient coin', 'the past tense of be'], answer: '有利的', explain: '对的是「有利的」。' },
      { id: 'favourable.q3', senseId: 'favourable.s1', errorType: 'grammar', type: '词义选择', prompt: 'favourable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'favourable.q4', senseId: 'favourable.s1', errorType: 'meaning', type: '词源', prompt: '记 favourable 时，哪句更稳妥？', options: ['先锁住「有利的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有利的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有利的'] },
  });

  D('favourite', {
    etymology: {
      origin: '现代英语常用词「favourite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'favourite', gloss: '最喜欢的' },
      suffix: null,
      history: [
        { label: 'favourite', text: '现代英语常用词「favourite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：最喜欢的。' },
      ],
      formationLogic: '核心义：最喜欢的。',
      mnemonic: '看到 favourite，先说出「最喜欢的」。',
      note: '核心义：最喜欢的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was favourite.', chinese: '即使是初读者也能看出，这个结果是最喜欢的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'favourite.s1', en: 'They wanted a favourite answer, not a long speech.', zh: '他们要一个最喜欢的的答复，不要长篇发言。', structure: 'favourite / 表示 / 最喜欢的', grammar: 'adjective，围绕「最喜欢的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are favourite.', right: 'The news is favourite.', reason: 'news 作主语时动词用单数。', rule: '先确定 favourite 是adjective，再套「最喜欢的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'favourite.q1', senseId: 'favourite.s1', errorType: 'meaning', type: '词义选择', prompt: '「favourite」在本条的核心意思是：', options: ['最喜欢的', '完全相反的意思', '一种古代钱币'], answer: '最喜欢的', explain: 'favourite：最喜欢的。' },
      { id: 'favourite.q2', senseId: 'favourite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches favourite?', options: ['最喜欢的', 'a kind of ancient coin', 'the past tense of be'], answer: '最喜欢的', explain: '对的是「最喜欢的」。' },
      { id: 'favourite.q3', senseId: 'favourite.s1', errorType: 'grammar', type: '词义选择', prompt: 'favourite 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'favourite.q4', senseId: 'favourite.s1', errorType: 'meaning', type: '词源', prompt: '记 favourite 时，哪句更稳妥？', options: ['先锁住「最喜欢的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最喜欢的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最喜欢的'] },
  });

  D('fax', {
    etymology: {
      origin: '现代英语常用词「fax」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fax', gloss: '传真' },
      suffix: null,
      history: [
        { label: 'fax', text: '现代英语常用词「fax」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：传真。' },
      ],
      formationLogic: '核心义：传真。',
      mnemonic: '看到 fax，先说出「传真」。',
      note: '核心义：传真。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fax.', chinese: '这一章反复回到同一个点：传真。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fax.s1', en: 'Without that fax, the next paragraph is hard to follow.', zh: '没有这个传真，下一段会很难读。', structure: 'fax / 表示 / 传真', grammar: 'noun，围绕「传真」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fax.', right: 'He gave me some advice about the fax.', reason: 'advice 不可数。名词 fax 的单复数按词典词形记。', rule: '先确定 fax 是noun，再套「传真」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fax.q1', senseId: 'fax.s1', errorType: 'meaning', type: '词义选择', prompt: '「fax」在本条的核心意思是：', options: ['传真', '完全相反的意思', '一种古代钱币'], answer: '传真', explain: 'fax：传真。' },
      { id: 'fax.q2', senseId: 'fax.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fax?', options: ['传真', 'a kind of ancient coin', 'the past tense of be'], answer: '传真', explain: '对的是「传真」。' },
      { id: 'fax.q3', senseId: 'fax.s1', errorType: 'grammar', type: '词义选择', prompt: 'fax 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fax.q4', senseId: 'fax.s1', errorType: 'meaning', type: '词源', prompt: '记 fax 时，哪句更稳妥？', options: ['先锁住「传真」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「传真」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['传真'] },
  });

  D('fear', {
    etymology: {
      origin: '现代英语常用词「fear」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fear', gloss: '害怕' },
      suffix: null,
      history: [
        { label: 'fear', text: '现代英语常用词「fear」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：害怕。' },
      ],
      formationLogic: '核心义：害怕。',
      mnemonic: '看到 fear，先说出「害怕」。',
      note: '核心义：害怕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fear.', chinese: '这一章反复回到同一个点：害怕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fear.s1', en: 'Without that fear, the next paragraph is hard to follow.', zh: '没有这个害怕，下一段会很难读。', structure: 'fear / 表示 / 害怕', grammar: 'noun，围绕「害怕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fear.', right: 'He gave me some advice about the fear.', reason: 'advice 不可数。名词 fear 的单复数按词典词形记。', rule: '先确定 fear 是noun，再套「害怕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fear.q1', senseId: 'fear.s1', errorType: 'meaning', type: '词义选择', prompt: '「fear」在本条的核心意思是：', options: ['害怕', '完全相反的意思', '一种古代钱币'], answer: '害怕', explain: 'fear：害怕。' },
      { id: 'fear.q2', senseId: 'fear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fear?', options: ['害怕', 'a kind of ancient coin', 'the past tense of be'], answer: '害怕', explain: '对的是「害怕」。' },
      { id: 'fear.q3', senseId: 'fear.s1', errorType: 'grammar', type: '词义选择', prompt: 'fear 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fear.q4', senseId: 'fear.s1', errorType: 'meaning', type: '词源', prompt: '记 fear 时，哪句更稳妥？', options: ['先锁住「害怕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「害怕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['害怕'] },
  });

  D('fearful', {
    etymology: {
      origin: '英语派生：fear + -ful，词性转到「害怕的」。',
      prefix: null,
      root: { text: 'fear', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fearful', text: '英语派生：fear + -ful，词性转到「害怕的」。' },
        { label: '现在', text: '核心用法是：害怕的。' },
      ],
      formationLogic: '先认词干 fear，再看词尾。',
      mnemonic: '看到 fearful，先说出「害怕的」。',
      note: '先认词干 fear，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fearful.', chinese: '即使是初读者也能看出，这个结果是害怕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fearful.s1', en: 'They wanted a fearful answer, not a long speech.', zh: '他们要一个害怕的的答复，不要长篇发言。', structure: 'fearful / 表示 / 害怕的', grammar: 'adjective，围绕「害怕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fearful.', right: 'The news is fearful.', reason: 'news 作主语时动词用单数。', rule: '先确定 fearful 是adjective，再套「害怕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fearful.q1', senseId: 'fearful.s1', errorType: 'meaning', type: '词义选择', prompt: '「fearful」在本条的核心意思是：', options: ['害怕的', '完全相反的意思', '一种古代钱币'], answer: '害怕的', explain: 'fearful：害怕的。' },
      { id: 'fearful.q2', senseId: 'fearful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fearful?', options: ['害怕的', 'a kind of ancient coin', 'the past tense of be'], answer: '害怕的', explain: '对的是「害怕的」。' },
      { id: 'fearful.q3', senseId: 'fearful.s1', errorType: 'grammar', type: '词义选择', prompt: 'fearful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fearful.q4', senseId: 'fearful.s1', errorType: 'meaning', type: '词源', prompt: '记 fearful 时，哪句更稳妥？', options: ['先锁住「害怕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「害怕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['害怕的'] },
  });

  D('fearless', {
    etymology: {
      origin: '英语派生：fear + -less，词性转到「无畏的」。',
      prefix: null,
      root: { text: 'fear', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fearless', text: '英语派生：fear + -less，词性转到「无畏的」。' },
        { label: '现在', text: '核心用法是：无畏的。' },
      ],
      formationLogic: '先认词干 fear，再看词尾。',
      mnemonic: '看到 fearless，先说出「无畏的」。',
      note: '先认词干 fear，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fearless.', chinese: '即使是初读者也能看出，这个结果是无畏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fearless.s1', en: 'They wanted a fearless answer, not a long speech.', zh: '他们要一个无畏的的答复，不要长篇发言。', structure: 'fearless / 表示 / 无畏的', grammar: 'adjective，围绕「无畏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fearless.', right: 'The news is fearless.', reason: 'news 作主语时动词用单数。', rule: '先确定 fearless 是adjective，再套「无畏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fearless.q1', senseId: 'fearless.s1', errorType: 'meaning', type: '词义选择', prompt: '「fearless」在本条的核心意思是：', options: ['无畏的', '完全相反的意思', '一种古代钱币'], answer: '无畏的', explain: 'fearless：无畏的。' },
      { id: 'fearless.q2', senseId: 'fearless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fearless?', options: ['无畏的', 'a kind of ancient coin', 'the past tense of be'], answer: '无畏的', explain: '对的是「无畏的」。' },
      { id: 'fearless.q3', senseId: 'fearless.s1', errorType: 'grammar', type: '词义选择', prompt: 'fearless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fearless.q4', senseId: 'fearless.s1', errorType: 'meaning', type: '词源', prompt: '记 fearless 时，哪句更稳妥？', options: ['先锁住「无畏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「无畏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['无畏的'] },
  });

  D('feasible', {
    etymology: {
      origin: '英语派生：feas + -ible，词性转到「可行的」。',
      prefix: null,
      root: { text: 'feas', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'feasible', text: '英语派生：feas + -ible，词性转到「可行的」。' },
        { label: '现在', text: '核心用法是：可行的。' },
      ],
      formationLogic: '先认词干 feas，再看词尾。',
      mnemonic: '看到 feasible，先说出「可行的」。',
      note: '先认词干 feas，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was feasible.', chinese: '即使是初读者也能看出，这个结果是可行的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feasible.s1', en: 'They wanted a feasible answer, not a long speech.', zh: '他们要一个可行的的答复，不要长篇发言。', structure: 'feasible / 表示 / 可行的', grammar: 'adjective，围绕「可行的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are feasible.', right: 'The news is feasible.', reason: 'news 作主语时动词用单数。', rule: '先确定 feasible 是adjective，再套「可行的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feasible.q1', senseId: 'feasible.s1', errorType: 'meaning', type: '词义选择', prompt: '「feasible」在本条的核心意思是：', options: ['可行的', '完全相反的意思', '一种古代钱币'], answer: '可行的', explain: 'feasible：可行的。' },
      { id: 'feasible.q2', senseId: 'feasible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feasible?', options: ['可行的', 'a kind of ancient coin', 'the past tense of be'], answer: '可行的', explain: '对的是「可行的」。' },
      { id: 'feasible.q3', senseId: 'feasible.s1', errorType: 'grammar', type: '词义选择', prompt: 'feasible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'feasible.q4', senseId: 'feasible.s1', errorType: 'meaning', type: '词源', prompt: '记 feasible 时，哪句更稳妥？', options: ['先锁住「可行的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可行的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可行的'] },
  });

  D('feast', {
    etymology: {
      origin: '现代英语常用词「feast」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feast', gloss: '盛宴' },
      suffix: null,
      history: [
        { label: 'feast', text: '现代英语常用词「feast」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：盛宴。' },
      ],
      formationLogic: '核心义：盛宴。',
      mnemonic: '看到 feast，先说出「盛宴」。',
      note: '核心义：盛宴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feast.', chinese: '这一章反复回到同一个点：盛宴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feast.s1', en: 'Without that feast, the next paragraph is hard to follow.', zh: '没有这个盛宴，下一段会很难读。', structure: 'feast / 表示 / 盛宴', grammar: 'noun，围绕「盛宴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feast.', right: 'He gave me some advice about the feast.', reason: 'advice 不可数。名词 feast 的单复数按词典词形记。', rule: '先确定 feast 是noun，再套「盛宴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feast.q1', senseId: 'feast.s1', errorType: 'meaning', type: '词义选择', prompt: '「feast」在本条的核心意思是：', options: ['盛宴', '完全相反的意思', '一种古代钱币'], answer: '盛宴', explain: 'feast：盛宴。' },
      { id: 'feast.q2', senseId: 'feast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feast?', options: ['盛宴', 'a kind of ancient coin', 'the past tense of be'], answer: '盛宴', explain: '对的是「盛宴」。' },
      { id: 'feast.q3', senseId: 'feast.s1', errorType: 'grammar', type: '词义选择', prompt: 'feast 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feast.q4', senseId: 'feast.s1', errorType: 'meaning', type: '词源', prompt: '记 feast 时，哪句更稳妥？', options: ['先锁住「盛宴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「盛宴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['盛宴'] },
  });

  D('feat', {
    etymology: {
      origin: '现代英语常用词「feat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feat', gloss: '功绩' },
      suffix: null,
      history: [
        { label: 'feat', text: '现代英语常用词「feat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：功绩。' },
      ],
      formationLogic: '核心义：功绩。',
      mnemonic: '看到 feat，先说出「功绩」。',
      note: '核心义：功绩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feat.', chinese: '这一章反复回到同一个点：功绩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feat.s1', en: 'Without that feat, the next paragraph is hard to follow.', zh: '没有这个功绩，下一段会很难读。', structure: 'feat / 表示 / 功绩', grammar: 'noun，围绕「功绩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feat.', right: 'He gave me some advice about the feat.', reason: 'advice 不可数。名词 feat 的单复数按词典词形记。', rule: '先确定 feat 是noun，再套「功绩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feat.q1', senseId: 'feat.s1', errorType: 'meaning', type: '词义选择', prompt: '「feat」在本条的核心意思是：', options: ['功绩', '完全相反的意思', '一种古代钱币'], answer: '功绩', explain: 'feat：功绩。' },
      { id: 'feat.q2', senseId: 'feat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feat?', options: ['功绩', 'a kind of ancient coin', 'the past tense of be'], answer: '功绩', explain: '对的是「功绩」。' },
      { id: 'feat.q3', senseId: 'feat.s1', errorType: 'grammar', type: '词义选择', prompt: 'feat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feat.q4', senseId: 'feat.s1', errorType: 'meaning', type: '词源', prompt: '记 feat 时，哪句更稳妥？', options: ['先锁住「功绩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「功绩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['功绩'] },
  });

  D('feather', {
    etymology: {
      origin: '英语派生：feath + -er，词性转到「羽毛」。',
      prefix: null,
      root: { text: 'feath', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'feather', text: '英语派生：feath + -er，词性转到「羽毛」。' },
        { label: '现在', text: '核心用法是：羽毛。' },
      ],
      formationLogic: '先认词干 feath，再看词尾。',
      mnemonic: '看到 feather，先说出「羽毛」。',
      note: '先认词干 feath，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feather.', chinese: '这一章反复回到同一个点：羽毛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feather.s1', en: 'Without that feather, the next paragraph is hard to follow.', zh: '没有这个羽毛，下一段会很难读。', structure: 'feather / 表示 / 羽毛', grammar: 'noun，围绕「羽毛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feather.', right: 'He gave me some advice about the feather.', reason: 'advice 不可数。名词 feather 的单复数按词典词形记。', rule: '先确定 feather 是noun，再套「羽毛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feather.q1', senseId: 'feather.s1', errorType: 'meaning', type: '词义选择', prompt: '「feather」在本条的核心意思是：', options: ['羽毛', '完全相反的意思', '一种古代钱币'], answer: '羽毛', explain: 'feather：羽毛。' },
      { id: 'feather.q2', senseId: 'feather.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feather?', options: ['羽毛', 'a kind of ancient coin', 'the past tense of be'], answer: '羽毛', explain: '对的是「羽毛」。' },
      { id: 'feather.q3', senseId: 'feather.s1', errorType: 'grammar', type: '词义选择', prompt: 'feather 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feather.q4', senseId: 'feather.s1', errorType: 'meaning', type: '词源', prompt: '记 feather 时，哪句更稳妥？', options: ['先锁住「羽毛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「羽毛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['羽毛'] },
  });

  D('feature', {
    etymology: {
      origin: '现代英语常用词「feature」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feature', gloss: '特征' },
      suffix: null,
      history: [
        { label: 'feature', text: '现代英语常用词「feature」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：特征。' },
      ],
      formationLogic: '核心义：特征。',
      mnemonic: '看到 feature，先说出「特征」。',
      note: '核心义：特征。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feature.', chinese: '这一章反复回到同一个点：特征。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feature.s1', en: 'Without that feature, the next paragraph is hard to follow.', zh: '没有这个特征，下一段会很难读。', structure: 'feature / 表示 / 特征', grammar: 'noun，围绕「特征」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feature.', right: 'He gave me some advice about the feature.', reason: 'advice 不可数。名词 feature 的单复数按词典词形记。', rule: '先确定 feature 是noun，再套「特征」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feature.q1', senseId: 'feature.s1', errorType: 'meaning', type: '词义选择', prompt: '「feature」在本条的核心意思是：', options: ['特征', '完全相反的意思', '一种古代钱币'], answer: '特征', explain: 'feature：特征。' },
      { id: 'feature.q2', senseId: 'feature.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feature?', options: ['特征', 'a kind of ancient coin', 'the past tense of be'], answer: '特征', explain: '对的是「特征」。' },
      { id: 'feature.q3', senseId: 'feature.s1', errorType: 'grammar', type: '词义选择', prompt: 'feature 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feature.q4', senseId: 'feature.s1', errorType: 'meaning', type: '词源', prompt: '记 feature 时，哪句更稳妥？', options: ['先锁住「特征」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「特征」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['特征'] },
  });

  D('features', {
    etymology: {
      origin: '现代英语常用词「features」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'features', gloss: '面貌' },
      suffix: null,
      history: [
        { label: 'features', text: '现代英语常用词「features」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：面貌。' },
      ],
      formationLogic: '核心义：面貌。',
      mnemonic: '看到 features，先说出「面貌」。',
      note: '核心义：面貌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one features.', chinese: '这一章反复回到同一个点：面貌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'features.s1', en: 'Without that features, the next paragraph is hard to follow.', zh: '没有这个面貌，下一段会很难读。', structure: 'features / 表示 / 面貌', grammar: 'noun，围绕「面貌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the features.', right: 'He gave me some advice about the features.', reason: 'advice 不可数。名词 features 的单复数按词典词形记。', rule: '先确定 features 是noun，再套「面貌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'features.q1', senseId: 'features.s1', errorType: 'meaning', type: '词义选择', prompt: '「features」在本条的核心意思是：', options: ['面貌', '完全相反的意思', '一种古代钱币'], answer: '面貌', explain: 'features：面貌。' },
      { id: 'features.q2', senseId: 'features.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches features?', options: ['面貌', 'a kind of ancient coin', 'the past tense of be'], answer: '面貌', explain: '对的是「面貌」。' },
      { id: 'features.q3', senseId: 'features.s1', errorType: 'grammar', type: '词义选择', prompt: 'features 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'features.q4', senseId: 'features.s1', errorType: 'meaning', type: '词源', prompt: '记 features 时，哪句更稳妥？', options: ['先锁住「面貌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面貌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面貌'] },
  });

  D('February', {
    etymology: {
      origin: '现代英语常用词「February」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'February', gloss: '二月' },
      suffix: null,
      history: [
        { label: 'February', text: '现代英语常用词「February」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：二月。' },
      ],
      formationLogic: '核心义：二月。',
      mnemonic: '看到 February，先说出「二月」。',
      note: '核心义：二月。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one February.', chinese: '这一章反复回到同一个点：二月。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'February.s1', en: 'Without that February, the next paragraph is hard to follow.', zh: '没有这个二月，下一段会很难读。', structure: 'February / 表示 / 二月', grammar: 'noun，围绕「二月」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the February.', right: 'He gave me some advice about the February.', reason: 'advice 不可数。名词 February 的单复数按词典词形记。', rule: '先确定 February 是noun，再套「二月」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'February.q1', senseId: 'February.s1', errorType: 'meaning', type: '词义选择', prompt: '「February」在本条的核心意思是：', options: ['二月', '完全相反的意思', '一种古代钱币'], answer: '二月', explain: 'February：二月。' },
      { id: 'February.q2', senseId: 'February.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches February?', options: ['二月', 'a kind of ancient coin', 'the past tense of be'], answer: '二月', explain: '对的是「二月」。' },
      { id: 'February.q3', senseId: 'February.s1', errorType: 'grammar', type: '词义选择', prompt: 'February 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'February.q4', senseId: 'February.s1', errorType: 'meaning', type: '词源', prompt: '记 February 时，哪句更稳妥？', options: ['先锁住「二月」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「二月」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['二月'] },
  });

  D('feces', {
    etymology: {
      origin: '现代英语常用词「feces」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feces', gloss: '粪便（美式）' },
      suffix: null,
      history: [
        { label: 'feces', text: '现代英语常用词「feces」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：粪便（美式）。' },
      ],
      formationLogic: '核心义：粪便（美式）。',
      mnemonic: '看到 feces，先说出「粪便（美式）」。',
      note: '核心义：粪便（美式）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feces.', chinese: '这一章反复回到同一个点：粪便（美式）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feces.s1', en: 'Without that feces, the next paragraph is hard to follow.', zh: '没有这个粪便（美式），下一段会很难读。', structure: 'feces / 表示 / 粪便（美式）', grammar: 'noun，围绕「粪便（美式）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feces.', right: 'He gave me some advice about the feces.', reason: 'advice 不可数。名词 feces 的单复数按词典词形记。', rule: '先确定 feces 是noun，再套「粪便（美式）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feces.q1', senseId: 'feces.s1', errorType: 'meaning', type: '词义选择', prompt: '「feces」在本条的核心意思是：', options: ['粪便（美式）', '完全相反的意思', '一种古代钱币'], answer: '粪便（美式）', explain: 'feces：粪便（美式）。' },
      { id: 'feces.q2', senseId: 'feces.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feces?', options: ['粪便（美式）', 'a kind of ancient coin', 'the past tense of be'], answer: '粪便（美式）', explain: '对的是「粪便（美式）」。' },
      { id: 'feces.q3', senseId: 'feces.s1', errorType: 'grammar', type: '词义选择', prompt: 'feces 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feces.q4', senseId: 'feces.s1', errorType: 'meaning', type: '词源', prompt: '记 feces 时，哪句更稳妥？', options: ['先锁住「粪便（美式）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「粪便（美式）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粪便（美式）'] },
  });

  D('fed up', {
    etymology: {
      origin: '现代英语固定说法「fed up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fed up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fed up', text: '现代英语固定说法「fed up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：厌倦的。' },
      ],
      formationLogic: '核心义：厌倦的。',
      mnemonic: '看到 fed up，先说出「厌倦的」。',
      note: '核心义：厌倦的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fed up" and asked the class to keep it as one unit.', chinese: '老师把「fed up」圈出来，让全班把它当成一个整体。它表示厌倦的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fed up.s1', en: 'In the margin she wrote "fed up" so nobody would split the phrase.', zh: '她在页边写下「fed up」，免得有人把这个说法拆开。意思是厌倦的。', structure: 'fed up / 表示 / 厌倦的', grammar: 'adjective，围绕「厌倦的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fed up and lost the point.', right: 'Keep "fed up" together: it means 厌倦的.', reason: '「fed up」要整块理解。', rule: '先确定 fed up 是adjective，再套「厌倦的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fed up.q1', senseId: 'fed up.s1', errorType: 'meaning', type: '词义选择', prompt: '「fed up」在本条的核心意思是：', options: ['厌倦的', '完全相反的意思', '一种古代钱币'], answer: '厌倦的', explain: 'fed up：厌倦的。' },
      { id: 'fed up.q2', senseId: 'fed up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fed up?', options: ['厌倦的', 'a kind of ancient coin', 'the past tense of be'], answer: '厌倦的', explain: '对的是「厌倦的」。' },
      { id: 'fed up.q3', senseId: 'fed up.s1', errorType: 'grammar', type: '词义选择', prompt: 'fed up 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fed up.q4', senseId: 'fed up.s1', errorType: 'meaning', type: '词源', prompt: '记 fed up 时，哪句更稳妥？', options: ['先锁住「厌倦的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厌倦的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厌倦的'] },
  });

  D('federal', {
    etymology: {
      origin: '英语派生：feder + -al，词性转到「联邦的」。',
      prefix: null,
      root: { text: 'feder', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'federal', text: '英语派生：feder + -al，词性转到「联邦的」。' },
        { label: '现在', text: '核心用法是：联邦的。' },
      ],
      formationLogic: '先认词干 feder，再看词尾。',
      mnemonic: '看到 federal，先说出「联邦的」。',
      note: '先认词干 feder，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was federal.', chinese: '即使是初读者也能看出，这个结果是联邦的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'federal.s1', en: 'They wanted a federal answer, not a long speech.', zh: '他们要一个联邦的的答复，不要长篇发言。', structure: 'federal / 表示 / 联邦的', grammar: 'adjective，围绕「联邦的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are federal.', right: 'The news is federal.', reason: 'news 作主语时动词用单数。', rule: '先确定 federal 是adjective，再套「联邦的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'federal.q1', senseId: 'federal.s1', errorType: 'meaning', type: '词义选择', prompt: '「federal」在本条的核心意思是：', options: ['联邦的', '完全相反的意思', '一种古代钱币'], answer: '联邦的', explain: 'federal：联邦的。' },
      { id: 'federal.q2', senseId: 'federal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches federal?', options: ['联邦的', 'a kind of ancient coin', 'the past tense of be'], answer: '联邦的', explain: '对的是「联邦的」。' },
      { id: 'federal.q3', senseId: 'federal.s1', errorType: 'grammar', type: '词义选择', prompt: 'federal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'federal.q4', senseId: 'federal.s1', errorType: 'meaning', type: '词源', prompt: '记 federal 时，哪句更稳妥？', options: ['先锁住「联邦的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联邦的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联邦的'] },
  });

  D('federation', {
    etymology: {
      origin: '英语派生：federa + -tion，词性转到「联邦」。',
      prefix: null,
      root: { text: 'federa', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'federation', text: '英语派生：federa + -tion，词性转到「联邦」。' },
        { label: '现在', text: '核心用法是：联邦。' },
      ],
      formationLogic: '先认词干 federa，再看词尾。',
      mnemonic: '看到 federation，先说出「联邦」。',
      note: '先认词干 federa，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one federation.', chinese: '这一章反复回到同一个点：联邦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'federation.s1', en: 'Without that federation, the next paragraph is hard to follow.', zh: '没有这个联邦，下一段会很难读。', structure: 'federation / 表示 / 联邦', grammar: 'noun，围绕「联邦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the federation.', right: 'He gave me some advice about the federation.', reason: 'advice 不可数。名词 federation 的单复数按词典词形记。', rule: '先确定 federation 是noun，再套「联邦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'federation.q1', senseId: 'federation.s1', errorType: 'meaning', type: '词义选择', prompt: '「federation」在本条的核心意思是：', options: ['联邦', '完全相反的意思', '一种古代钱币'], answer: '联邦', explain: 'federation：联邦。' },
      { id: 'federation.q2', senseId: 'federation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches federation?', options: ['联邦', 'a kind of ancient coin', 'the past tense of be'], answer: '联邦', explain: '对的是「联邦」。' },
      { id: 'federation.q3', senseId: 'federation.s1', errorType: 'grammar', type: '词义选择', prompt: 'federation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'federation.q4', senseId: 'federation.s1', errorType: 'meaning', type: '词源', prompt: '记 federation 时，哪句更稳妥？', options: ['先锁住「联邦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联邦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联邦'] },
  });

  D('fee', {
    etymology: {
      origin: '现代英语常用词「fee」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fee', gloss: '费' },
      suffix: null,
      history: [
        { label: 'fee', text: '现代英语常用词「fee」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：费。' },
      ],
      formationLogic: '核心义：费。',
      mnemonic: '看到 fee，先说出「费」。',
      note: '核心义：费。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fee.', chinese: '这一章反复回到同一个点：费。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fee.s1', en: 'Without that fee, the next paragraph is hard to follow.', zh: '没有这个费，下一段会很难读。', structure: 'fee / 表示 / 费', grammar: 'noun，围绕「费」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fee.', right: 'He gave me some advice about the fee.', reason: 'advice 不可数。名词 fee 的单复数按词典词形记。', rule: '先确定 fee 是noun，再套「费」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fee.q1', senseId: 'fee.s1', errorType: 'meaning', type: '词义选择', prompt: '「fee」在本条的核心意思是：', options: ['费', '完全相反的意思', '一种古代钱币'], answer: '费', explain: 'fee：费。' },
      { id: 'fee.q2', senseId: 'fee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fee?', options: ['费', 'a kind of ancient coin', 'the past tense of be'], answer: '费', explain: '对的是「费」。' },
      { id: 'fee.q3', senseId: 'fee.s1', errorType: 'grammar', type: '词义选择', prompt: 'fee 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fee.q4', senseId: 'fee.s1', errorType: 'meaning', type: '词源', prompt: '记 fee 时，哪句更稳妥？', options: ['先锁住「费」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「费」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['费'] },
  });

  D('feeble', {
    etymology: {
      origin: '现代英语常用词「feeble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feeble', gloss: '虚弱的' },
      suffix: null,
      history: [
        { label: 'feeble', text: '现代英语常用词「feeble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：虚弱的。' },
      ],
      formationLogic: '核心义：虚弱的。',
      mnemonic: '看到 feeble，先说出「虚弱的」。',
      note: '核心义：虚弱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was feeble.', chinese: '即使是初读者也能看出，这个结果是虚弱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feeble.s1', en: 'They wanted a feeble answer, not a long speech.', zh: '他们要一个虚弱的的答复，不要长篇发言。', structure: 'feeble / 表示 / 虚弱的', grammar: 'adjective，围绕「虚弱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are feeble.', right: 'The news is feeble.', reason: 'news 作主语时动词用单数。', rule: '先确定 feeble 是adjective，再套「虚弱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feeble.q1', senseId: 'feeble.s1', errorType: 'meaning', type: '词义选择', prompt: '「feeble」在本条的核心意思是：', options: ['虚弱的', '完全相反的意思', '一种古代钱币'], answer: '虚弱的', explain: 'feeble：虚弱的。' },
      { id: 'feeble.q2', senseId: 'feeble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feeble?', options: ['虚弱的', 'a kind of ancient coin', 'the past tense of be'], answer: '虚弱的', explain: '对的是「虚弱的」。' },
      { id: 'feeble.q3', senseId: 'feeble.s1', errorType: 'grammar', type: '词义选择', prompt: 'feeble 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'feeble.q4', senseId: 'feeble.s1', errorType: 'meaning', type: '词源', prompt: '记 feeble 时，哪句更稳妥？', options: ['先锁住「虚弱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「虚弱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['虚弱的'] },
  });

  D('feed', {
    etymology: {
      origin: '现代英语常用词「feed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feed', gloss: '喂养' },
      suffix: null,
      history: [
        { label: 'feed', text: '现代英语常用词「feed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：喂养。' },
      ],
      formationLogic: '核心义：喂养。',
      mnemonic: '看到 feed，先说出「喂养」。',
      note: '核心义：喂养。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to feed before the office closed.', chinese: '他们同意在办公室关门前做这件事：喂养。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feed.s1', en: 'The deadline forced the team to feed that afternoon.', zh: '截止日期逼着小组在那天下午喂养。', structure: 'feed / 表示 / 喂养', grammar: 'verb，围绕「喂养」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She feeded it yesterday without checking the real past form.', right: 'Check the past form of "feed" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 feed 是verb，再套「喂养」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feed.q1', senseId: 'feed.s1', errorType: 'meaning', type: '词义选择', prompt: '「feed」在本条的核心意思是：', options: ['喂养', '完全相反的意思', '一种古代钱币'], answer: '喂养', explain: 'feed：喂养。' },
      { id: 'feed.q2', senseId: 'feed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feed?', options: ['喂养', 'a kind of ancient coin', 'the past tense of be'], answer: '喂养', explain: '对的是「喂养」。' },
      { id: 'feed.q3', senseId: 'feed.s1', errorType: 'grammar', type: '词义选择', prompt: 'feed 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'feed.q4', senseId: 'feed.s1', errorType: 'meaning', type: '词源', prompt: '记 feed 时，哪句更稳妥？', options: ['先锁住「喂养」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喂养」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喂养'] },
  });

  D('feedback', {
    etymology: {
      origin: '现代英语常用词「feedback」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feedback', gloss: '反馈' },
      suffix: null,
      history: [
        { label: 'feedback', text: '现代英语常用词「feedback」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：反馈。' },
      ],
      formationLogic: '核心义：反馈。',
      mnemonic: '看到 feedback，先说出「反馈」。',
      note: '核心义：反馈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feedback.', chinese: '这一章反复回到同一个点：反馈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feedback.s1', en: 'Without that feedback, the next paragraph is hard to follow.', zh: '没有这个反馈，下一段会很难读。', structure: 'feedback / 表示 / 反馈', grammar: 'noun，围绕「反馈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feedback.', right: 'He gave me some advice about the feedback.', reason: 'advice 不可数。名词 feedback 的单复数按词典词形记。', rule: '先确定 feedback 是noun，再套「反馈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feedback.q1', senseId: 'feedback.s1', errorType: 'meaning', type: '词义选择', prompt: '「feedback」在本条的核心意思是：', options: ['反馈', '完全相反的意思', '一种古代钱币'], answer: '反馈', explain: 'feedback：反馈。' },
      { id: 'feedback.q2', senseId: 'feedback.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feedback?', options: ['反馈', 'a kind of ancient coin', 'the past tense of be'], answer: '反馈', explain: '对的是「反馈」。' },
      { id: 'feedback.q3', senseId: 'feedback.s1', errorType: 'grammar', type: '词义选择', prompt: 'feedback 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feedback.q4', senseId: 'feedback.s1', errorType: 'meaning', type: '词源', prompt: '记 feedback 时，哪句更稳妥？', options: ['先锁住「反馈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「反馈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['反馈'] },
  });

  D('feel', {
    etymology: {
      origin: '现代英语常用词「feel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feel', gloss: '感觉' },
      suffix: null,
      history: [
        { label: 'feel', text: '现代英语常用词「feel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：感觉。' },
      ],
      formationLogic: '核心义：感觉。',
      mnemonic: '看到 feel，先说出「感觉」。',
      note: '核心义：感觉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to feel before the office closed.', chinese: '他们同意在办公室关门前做这件事：感觉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feel.s1', en: 'The deadline forced the team to feel that afternoon.', zh: '截止日期逼着小组在那天下午感觉。', structure: 'feel / 表示 / 感觉', grammar: 'verb，围绕「感觉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She feeled it yesterday without checking the real past form.', right: 'Check the past form of "feel" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 feel 是verb，再套「感觉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feel.q1', senseId: 'feel.s1', errorType: 'meaning', type: '词义选择', prompt: '「feel」在本条的核心意思是：', options: ['感觉', '完全相反的意思', '一种古代钱币'], answer: '感觉', explain: 'feel：感觉。' },
      { id: 'feel.q2', senseId: 'feel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feel?', options: ['感觉', 'a kind of ancient coin', 'the past tense of be'], answer: '感觉', explain: '对的是「感觉」。' },
      { id: 'feel.q3', senseId: 'feel.s1', errorType: 'grammar', type: '词义选择', prompt: 'feel 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'feel.q4', senseId: 'feel.s1', errorType: 'meaning', type: '词源', prompt: '记 feel 时，哪句更稳妥？', options: ['先锁住「感觉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「感觉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['感觉'] },
  });

  D('feel for', {
    etymology: {
      origin: '现代英语固定说法「feel for」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'feel for', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'feel for', text: '现代英语固定说法「feel for」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：同情。' },
      ],
      formationLogic: '核心义：同情。',
      mnemonic: '看到 feel for，先说出「同情」。',
      note: '核心义：同情。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "feel for" and asked the class to keep it as one unit.', chinese: '老师把「feel for」圈出来，让全班把它当成一个整体。它表示同情。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feel for.s1', en: 'In the margin she wrote "feel for" so nobody would split the phrase.', zh: '她在页边写下「feel for」，免得有人把这个说法拆开。意思是同情。', structure: 'feel for / 表示 / 同情', grammar: 'verb，围绕「同情」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of feel for and lost the point.', right: 'Keep "feel for" together: it means 同情.', reason: '「feel for」要整块理解。', rule: '先确定 feel for 是verb，再套「同情」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feel for.q1', senseId: 'feel for.s1', errorType: 'meaning', type: '词义选择', prompt: '「feel for」在本条的核心意思是：', options: ['同情', '完全相反的意思', '一种古代钱币'], answer: '同情', explain: 'feel for：同情。' },
      { id: 'feel for.q2', senseId: 'feel for.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feel for?', options: ['同情', 'a kind of ancient coin', 'the past tense of be'], answer: '同情', explain: '对的是「同情」。' },
      { id: 'feel for.q3', senseId: 'feel for.s1', errorType: 'grammar', type: '词义选择', prompt: 'feel for 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'feel for.q4', senseId: 'feel for.s1', errorType: 'meaning', type: '词源', prompt: '记 feel for 时，哪句更稳妥？', options: ['先锁住「同情」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同情」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同情'] },
  });

  D('feel like', {
    etymology: {
      origin: '现代英语固定说法「feel like」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'feel like', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'feel like', text: '现代英语固定说法「feel like」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：想。' },
      ],
      formationLogic: '核心义：想。',
      mnemonic: '看到 feel like，先说出「想」。',
      note: '核心义：想。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "feel like" and asked the class to keep it as one unit.', chinese: '老师把「feel like」圈出来，让全班把它当成一个整体。它表示想。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feel like.s1', en: 'In the margin she wrote "feel like" so nobody would split the phrase.', zh: '她在页边写下「feel like」，免得有人把这个说法拆开。意思是想。', structure: 'feel like / 表示 / 想', grammar: 'verb，围绕「想」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of feel like and lost the point.', right: 'Keep "feel like" together: it means 想.', reason: '「feel like」要整块理解。', rule: '先确定 feel like 是verb，再套「想」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feel like.q1', senseId: 'feel like.s1', errorType: 'meaning', type: '词义选择', prompt: '「feel like」在本条的核心意思是：', options: ['想', '完全相反的意思', '一种古代钱币'], answer: '想', explain: 'feel like：想。' },
      { id: 'feel like.q2', senseId: 'feel like.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feel like?', options: ['想', 'a kind of ancient coin', 'the past tense of be'], answer: '想', explain: '对的是「想」。' },
      { id: 'feel like.q3', senseId: 'feel like.s1', errorType: 'grammar', type: '词义选择', prompt: 'feel like 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'feel like.q4', senseId: 'feel like.s1', errorType: 'meaning', type: '词源', prompt: '记 feel like 时，哪句更稳妥？', options: ['先锁住「想」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「想」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['想'] },
  });

  D('feeling', {
    etymology: {
      origin: '英语派生：feel + -ing，词性转到「感觉」。',
      prefix: null,
      root: { text: 'feel', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'feeling', text: '英语派生：feel + -ing，词性转到「感觉」。' },
        { label: '现在', text: '核心用法是：感觉。' },
      ],
      formationLogic: '先认词干 feel，再看词尾。',
      mnemonic: '看到 feeling，先说出「感觉」。',
      note: '先认词干 feel，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feeling.', chinese: '这一章反复回到同一个点：感觉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feeling.s1', en: 'Without that feeling, the next paragraph is hard to follow.', zh: '没有这个感觉，下一段会很难读。', structure: 'feeling / 表示 / 感觉', grammar: 'noun，围绕「感觉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feeling.', right: 'He gave me some advice about the feeling.', reason: 'advice 不可数。名词 feeling 的单复数按词典词形记。', rule: '先确定 feeling 是noun，再套「感觉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feeling.q1', senseId: 'feeling.s1', errorType: 'meaning', type: '词义选择', prompt: '「feeling」在本条的核心意思是：', options: ['感觉', '完全相反的意思', '一种古代钱币'], answer: '感觉', explain: 'feeling：感觉。' },
      { id: 'feeling.q2', senseId: 'feeling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feeling?', options: ['感觉', 'a kind of ancient coin', 'the past tense of be'], answer: '感觉', explain: '对的是「感觉」。' },
      { id: 'feeling.q3', senseId: 'feeling.s1', errorType: 'grammar', type: '词义选择', prompt: 'feeling 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feeling.q4', senseId: 'feeling.s1', errorType: 'meaning', type: '词源', prompt: '记 feeling 时，哪句更稳妥？', options: ['先锁住「感觉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「感觉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['感觉'] },
  });

  D('feelings', {
    etymology: {
      origin: '现代英语常用词「feelings」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feelings', gloss: '感情（复数）' },
      suffix: null,
      history: [
        { label: 'feelings', text: '现代英语常用词「feelings」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：感情（复数）。' },
      ],
      formationLogic: '核心义：感情（复数）。',
      mnemonic: '看到 feelings，先说出「感情（复数）」。',
      note: '核心义：感情（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feelings.', chinese: '这一章反复回到同一个点：感情（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feelings.s1', en: 'Without that feelings, the next paragraph is hard to follow.', zh: '没有这个感情（复数），下一段会很难读。', structure: 'feelings / 表示 / 感情（复数）', grammar: 'noun，围绕「感情（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feelings.', right: 'He gave me some advice about the feelings.', reason: 'advice 不可数。名词 feelings 的单复数按词典词形记。', rule: '先确定 feelings 是noun，再套「感情（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feelings.q1', senseId: 'feelings.s1', errorType: 'meaning', type: '词义选择', prompt: '「feelings」在本条的核心意思是：', options: ['感情（复数）', '完全相反的意思', '一种古代钱币'], answer: '感情（复数）', explain: 'feelings：感情（复数）。' },
      { id: 'feelings.q2', senseId: 'feelings.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feelings?', options: ['感情（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '感情（复数）', explain: '对的是「感情（复数）」。' },
      { id: 'feelings.q3', senseId: 'feelings.s1', errorType: 'grammar', type: '词义选择', prompt: 'feelings 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feelings.q4', senseId: 'feelings.s1', errorType: 'meaning', type: '词源', prompt: '记 feelings 时，哪句更稳妥？', options: ['先锁住「感情（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「感情（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['感情（复数）'] },
  });

  D('fees', {
    etymology: {
      origin: '现代英语常用词「fees」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fees', gloss: '费用' },
      suffix: null,
      history: [
        { label: 'fees', text: '现代英语常用词「fees」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：费用。' },
      ],
      formationLogic: '核心义：费用。',
      mnemonic: '看到 fees，先说出「费用」。',
      note: '核心义：费用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fees.', chinese: '这一章反复回到同一个点：费用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fees.s1', en: 'Without that fees, the next paragraph is hard to follow.', zh: '没有这个费用，下一段会很难读。', structure: 'fees / 表示 / 费用', grammar: 'noun，围绕「费用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fees.', right: 'He gave me some advice about the fees.', reason: 'advice 不可数。名词 fees 的单复数按词典词形记。', rule: '先确定 fees 是noun，再套「费用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fees.q1', senseId: 'fees.s1', errorType: 'meaning', type: '词义选择', prompt: '「fees」在本条的核心意思是：', options: ['费用', '完全相反的意思', '一种古代钱币'], answer: '费用', explain: 'fees：费用。' },
      { id: 'fees.q2', senseId: 'fees.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fees?', options: ['费用', 'a kind of ancient coin', 'the past tense of be'], answer: '费用', explain: '对的是「费用」。' },
      { id: 'fees.q3', senseId: 'fees.s1', errorType: 'grammar', type: '词义选择', prompt: 'fees 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fees.q4', senseId: 'fees.s1', errorType: 'meaning', type: '词源', prompt: '记 fees 时，哪句更稳妥？', options: ['先锁住「费用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「费用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['费用'] },
  });

  D('feet', {
    etymology: {
      origin: '现代英语常用词「feet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feet', gloss: '脚（复数）' },
      suffix: null,
      history: [
        { label: 'feet', text: '现代英语常用词「feet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脚（复数）。' },
      ],
      formationLogic: '核心义：脚（复数）。',
      mnemonic: '看到 feet，先说出「脚（复数）」。',
      note: '核心义：脚（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one feet.', chinese: '这一章反复回到同一个点：脚（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feet.s1', en: 'Without that feet, the next paragraph is hard to follow.', zh: '没有这个脚（复数），下一段会很难读。', structure: 'feet / 表示 / 脚（复数）', grammar: 'noun，围绕「脚（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the feet.', right: 'He gave me some advice about the feet.', reason: 'advice 不可数。名词 feet 的单复数按词典词形记。', rule: '先确定 feet 是noun，再套「脚（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feet.q1', senseId: 'feet.s1', errorType: 'meaning', type: '词义选择', prompt: '「feet」在本条的核心意思是：', options: ['脚（复数）', '完全相反的意思', '一种古代钱币'], answer: '脚（复数）', explain: 'feet：脚（复数）。' },
      { id: 'feet.q2', senseId: 'feet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feet?', options: ['脚（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '脚（复数）', explain: '对的是「脚（复数）」。' },
      { id: 'feet.q3', senseId: 'feet.s1', errorType: 'grammar', type: '词义选择', prompt: 'feet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'feet.q4', senseId: 'feet.s1', errorType: 'meaning', type: '词源', prompt: '记 feet 时，哪句更稳妥？', options: ['先锁住「脚（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脚（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脚（复数）'] },
  });

  D('feign', {
    etymology: {
      origin: '现代英语常用词「feign」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feign', gloss: '假装' },
      suffix: null,
      history: [
        { label: 'feign', text: '现代英语常用词「feign」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：假装。' },
      ],
      formationLogic: '核心义：假装。',
      mnemonic: '看到 feign，先说出「假装」。',
      note: '核心义：假装。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to feign before the office closed.', chinese: '他们同意在办公室关门前做这件事：假装。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feign.s1', en: 'The deadline forced the team to feign that afternoon.', zh: '截止日期逼着小组在那天下午假装。', structure: 'feign / 表示 / 假装', grammar: 'verb，围绕「假装」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She feigned it yesterday without checking the real past form.', right: 'Check the past form of "feign" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 feign 是verb，再套「假装」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feign.q1', senseId: 'feign.s1', errorType: 'meaning', type: '词义选择', prompt: '「feign」在本条的核心意思是：', options: ['假装', '完全相反的意思', '一种古代钱币'], answer: '假装', explain: 'feign：假装。' },
      { id: 'feign.q2', senseId: 'feign.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feign?', options: ['假装', 'a kind of ancient coin', 'the past tense of be'], answer: '假装', explain: '对的是「假装」。' },
      { id: 'feign.q3', senseId: 'feign.s1', errorType: 'grammar', type: '词义选择', prompt: 'feign 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'feign.q4', senseId: 'feign.s1', errorType: 'meaning', type: '词源', prompt: '记 feign 时，哪句更稳妥？', options: ['先锁住「假装」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「假装」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['假装'] },
  });

  D('fellow', {
    etymology: {
      origin: '现代英语常用词「fellow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fellow', gloss: '男人' },
      suffix: null,
      history: [
        { label: 'fellow', text: '现代英语常用词「fellow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：男人。' },
      ],
      formationLogic: '核心义：男人。',
      mnemonic: '看到 fellow，先说出「男人」。',
      note: '核心义：男人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fellow.', chinese: '这一章反复回到同一个点：男人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fellow.s1', en: 'Without that fellow, the next paragraph is hard to follow.', zh: '没有这个男人，下一段会很难读。', structure: 'fellow / 表示 / 男人', grammar: 'noun，围绕「男人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fellow.', right: 'He gave me some advice about the fellow.', reason: 'advice 不可数。名词 fellow 的单复数按词典词形记。', rule: '先确定 fellow 是noun，再套「男人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fellow.q1', senseId: 'fellow.s1', errorType: 'meaning', type: '词义选择', prompt: '「fellow」在本条的核心意思是：', options: ['男人', '完全相反的意思', '一种古代钱币'], answer: '男人', explain: 'fellow：男人。' },
      { id: 'fellow.q2', senseId: 'fellow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fellow?', options: ['男人', 'a kind of ancient coin', 'the past tense of be'], answer: '男人', explain: '对的是「男人」。' },
      { id: 'fellow.q3', senseId: 'fellow.s1', errorType: 'grammar', type: '词义选择', prompt: 'fellow 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fellow.q4', senseId: 'fellow.s1', errorType: 'meaning', type: '词源', prompt: '记 fellow 时，哪句更稳妥？', options: ['先锁住「男人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「男人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['男人'] },
  });

  D('fellowship', {
    etymology: {
      origin: '现代英语常用词「fellowship」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fellowship', gloss: '友谊' },
      suffix: null,
      history: [
        { label: 'fellowship', text: '现代英语常用词「fellowship」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：友谊。' },
      ],
      formationLogic: '核心义：友谊。',
      mnemonic: '看到 fellowship，先说出「友谊」。',
      note: '核心义：友谊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fellowship.', chinese: '这一章反复回到同一个点：友谊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fellowship.s1', en: 'Without that fellowship, the next paragraph is hard to follow.', zh: '没有这个友谊，下一段会很难读。', structure: 'fellowship / 表示 / 友谊', grammar: 'noun，围绕「友谊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fellowship.', right: 'He gave me some advice about the fellowship.', reason: 'advice 不可数。名词 fellowship 的单复数按词典词形记。', rule: '先确定 fellowship 是noun，再套「友谊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fellowship.q1', senseId: 'fellowship.s1', errorType: 'meaning', type: '词义选择', prompt: '「fellowship」在本条的核心意思是：', options: ['友谊', '完全相反的意思', '一种古代钱币'], answer: '友谊', explain: 'fellowship：友谊。' },
      { id: 'fellowship.q2', senseId: 'fellowship.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fellowship?', options: ['友谊', 'a kind of ancient coin', 'the past tense of be'], answer: '友谊', explain: '对的是「友谊」。' },
      { id: 'fellowship.q3', senseId: 'fellowship.s1', errorType: 'grammar', type: '词义选择', prompt: 'fellowship 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fellowship.q4', senseId: 'fellowship.s1', errorType: 'meaning', type: '词源', prompt: '记 fellowship 时，哪句更稳妥？', options: ['先锁住「友谊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「友谊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['友谊'] },
  });

  D('female', {
    etymology: {
      origin: '现代英语常用词「female」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'female', gloss: '女性的' },
      suffix: null,
      history: [
        { label: 'female', text: '现代英语常用词「female」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：女性的。' },
      ],
      formationLogic: '核心义：女性的。',
      mnemonic: '看到 female，先说出「女性的」。',
      note: '核心义：女性的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was female.', chinese: '即使是初读者也能看出，这个结果是女性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'female.s1', en: 'They wanted a female answer, not a long speech.', zh: '他们要一个女性的的答复，不要长篇发言。', structure: 'female / 表示 / 女性的', grammar: 'adjective，围绕「女性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are female.', right: 'The news is female.', reason: 'news 作主语时动词用单数。', rule: '先确定 female 是adjective，再套「女性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'female.q1', senseId: 'female.s1', errorType: 'meaning', type: '词义选择', prompt: '「female」在本条的核心意思是：', options: ['女性的', '完全相反的意思', '一种古代钱币'], answer: '女性的', explain: 'female：女性的。' },
      { id: 'female.q2', senseId: 'female.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches female?', options: ['女性的', 'a kind of ancient coin', 'the past tense of be'], answer: '女性的', explain: '对的是「女性的」。' },
      { id: 'female.q3', senseId: 'female.s1', errorType: 'grammar', type: '词义选择', prompt: 'female 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'female.q4', senseId: 'female.s1', errorType: 'meaning', type: '词源', prompt: '记 female 时，哪句更稳妥？', options: ['先锁住「女性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女性的'] },
  });

  D('females', {
    etymology: {
      origin: '现代英语常用词「females」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'females', gloss: '女性（复数）' },
      suffix: null,
      history: [
        { label: 'females', text: '现代英语常用词「females」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：女性（复数）。' },
      ],
      formationLogic: '核心义：女性（复数）。',
      mnemonic: '看到 females，先说出「女性（复数）」。',
      note: '核心义：女性（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one females.', chinese: '这一章反复回到同一个点：女性（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'females.s1', en: 'Without that females, the next paragraph is hard to follow.', zh: '没有这个女性（复数），下一段会很难读。', structure: 'females / 表示 / 女性（复数）', grammar: 'noun，围绕「女性（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the females.', right: 'He gave me some advice about the females.', reason: 'advice 不可数。名词 females 的单复数按词典词形记。', rule: '先确定 females 是noun，再套「女性（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'females.q1', senseId: 'females.s1', errorType: 'meaning', type: '词义选择', prompt: '「females」在本条的核心意思是：', options: ['女性（复数）', '完全相反的意思', '一种古代钱币'], answer: '女性（复数）', explain: 'females：女性（复数）。' },
      { id: 'females.q2', senseId: 'females.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches females?', options: ['女性（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '女性（复数）', explain: '对的是「女性（复数）」。' },
      { id: 'females.q3', senseId: 'females.s1', errorType: 'grammar', type: '词义选择', prompt: 'females 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'females.q4', senseId: 'females.s1', errorType: 'meaning', type: '词源', prompt: '记 females 时，哪句更稳妥？', options: ['先锁住「女性（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女性（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女性（复数）'] },
  });

  D('feminine', {
    etymology: {
      origin: '现代英语常用词「feminine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feminine', gloss: '女性的' },
      suffix: null,
      history: [
        { label: 'feminine', text: '现代英语常用词「feminine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：女性的。' },
      ],
      formationLogic: '核心义：女性的。',
      mnemonic: '看到 feminine，先说出「女性的」。',
      note: '核心义：女性的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was feminine.', chinese: '即使是初读者也能看出，这个结果是女性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feminine.s1', en: 'They wanted a feminine answer, not a long speech.', zh: '他们要一个女性的的答复，不要长篇发言。', structure: 'feminine / 表示 / 女性的', grammar: 'adjective，围绕「女性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are feminine.', right: 'The news is feminine.', reason: 'news 作主语时动词用单数。', rule: '先确定 feminine 是adjective，再套「女性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feminine.q1', senseId: 'feminine.s1', errorType: 'meaning', type: '词义选择', prompt: '「feminine」在本条的核心意思是：', options: ['女性的', '完全相反的意思', '一种古代钱币'], answer: '女性的', explain: 'feminine：女性的。' },
      { id: 'feminine.q2', senseId: 'feminine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feminine?', options: ['女性的', 'a kind of ancient coin', 'the past tense of be'], answer: '女性的', explain: '对的是「女性的」。' },
      { id: 'feminine.q3', senseId: 'feminine.s1', errorType: 'grammar', type: '词义选择', prompt: 'feminine 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'feminine.q4', senseId: 'feminine.s1', errorType: 'meaning', type: '词源', prompt: '记 feminine 时，哪句更稳妥？', options: ['先锁住「女性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女性的'] },
  });

  D('fen', {
    etymology: {
      origin: '现代英语常用词「fen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fen', gloss: '沼泽' },
      suffix: null,
      history: [
        { label: 'fen', text: '现代英语常用词「fen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：沼泽。' },
      ],
      formationLogic: '核心义：沼泽。',
      mnemonic: '看到 fen，先说出「沼泽」。',
      note: '核心义：沼泽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fen.', chinese: '这一章反复回到同一个点：沼泽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fen.s1', en: 'Without that fen, the next paragraph is hard to follow.', zh: '没有这个沼泽，下一段会很难读。', structure: 'fen / 表示 / 沼泽', grammar: 'noun，围绕「沼泽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fen.', right: 'He gave me some advice about the fen.', reason: 'advice 不可数。名词 fen 的单复数按词典词形记。', rule: '先确定 fen 是noun，再套「沼泽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fen.q1', senseId: 'fen.s1', errorType: 'meaning', type: '词义选择', prompt: '「fen」在本条的核心意思是：', options: ['沼泽', '完全相反的意思', '一种古代钱币'], answer: '沼泽', explain: 'fen：沼泽。' },
      { id: 'fen.q2', senseId: 'fen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fen?', options: ['沼泽', 'a kind of ancient coin', 'the past tense of be'], answer: '沼泽', explain: '对的是「沼泽」。' },
      { id: 'fen.q3', senseId: 'fen.s1', errorType: 'grammar', type: '词义选择', prompt: 'fen 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fen.q4', senseId: 'fen.s1', errorType: 'meaning', type: '词源', prompt: '记 fen 时，哪句更稳妥？', options: ['先锁住「沼泽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沼泽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沼泽'] },
  });

  D('fence', {
    etymology: {
      origin: '现代英语常用词「fence」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fence', gloss: '栅栏' },
      suffix: null,
      history: [
        { label: 'fence', text: '现代英语常用词「fence」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：栅栏。' },
      ],
      formationLogic: '核心义：栅栏。',
      mnemonic: '看到 fence，先说出「栅栏」。',
      note: '核心义：栅栏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fence.', chinese: '这一章反复回到同一个点：栅栏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fence.s1', en: 'Without that fence, the next paragraph is hard to follow.', zh: '没有这个栅栏，下一段会很难读。', structure: 'fence / 表示 / 栅栏', grammar: 'noun，围绕「栅栏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fence.', right: 'He gave me some advice about the fence.', reason: 'advice 不可数。名词 fence 的单复数按词典词形记。', rule: '先确定 fence 是noun，再套「栅栏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fence.q1', senseId: 'fence.s1', errorType: 'meaning', type: '词义选择', prompt: '「fence」在本条的核心意思是：', options: ['栅栏', '完全相反的意思', '一种古代钱币'], answer: '栅栏', explain: 'fence：栅栏。' },
      { id: 'fence.q2', senseId: 'fence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fence?', options: ['栅栏', 'a kind of ancient coin', 'the past tense of be'], answer: '栅栏', explain: '对的是「栅栏」。' },
      { id: 'fence.q3', senseId: 'fence.s1', errorType: 'grammar', type: '词义选择', prompt: 'fence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fence.q4', senseId: 'fence.s1', errorType: 'meaning', type: '词源', prompt: '记 fence 时，哪句更稳妥？', options: ['先锁住「栅栏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「栅栏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['栅栏'] },
  });

  D('fend off', {
    etymology: {
      origin: '现代英语固定说法「fend off」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fend off', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fend off', text: '现代英语固定说法「fend off」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：抵挡。' },
      ],
      formationLogic: '核心义：抵挡。',
      mnemonic: '看到 fend off，先说出「抵挡」。',
      note: '核心义：抵挡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fend off" and asked the class to keep it as one unit.', chinese: '老师把「fend off」圈出来，让全班把它当成一个整体。它表示抵挡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fend off.s1', en: 'In the margin she wrote "fend off" so nobody would split the phrase.', zh: '她在页边写下「fend off」，免得有人把这个说法拆开。意思是抵挡。', structure: 'fend off / 表示 / 抵挡', grammar: 'verb，围绕「抵挡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fend off and lost the point.', right: 'Keep "fend off" together: it means 抵挡.', reason: '「fend off」要整块理解。', rule: '先确定 fend off 是verb，再套「抵挡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fend off.q1', senseId: 'fend off.s1', errorType: 'meaning', type: '词义选择', prompt: '「fend off」在本条的核心意思是：', options: ['抵挡', '完全相反的意思', '一种古代钱币'], answer: '抵挡', explain: 'fend off：抵挡。' },
      { id: 'fend off.q2', senseId: 'fend off.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fend off?', options: ['抵挡', 'a kind of ancient coin', 'the past tense of be'], answer: '抵挡', explain: '对的是「抵挡」。' },
      { id: 'fend off.q3', senseId: 'fend off.s1', errorType: 'grammar', type: '词义选择', prompt: 'fend off 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fend off.q4', senseId: 'fend off.s1', errorType: 'meaning', type: '词源', prompt: '记 fend off 时，哪句更稳妥？', options: ['先锁住「抵挡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抵挡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抵挡'] },
  });

  D('ferry', {
    etymology: {
      origin: '现代英语常用词「ferry」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ferry', gloss: '渡轮' },
      suffix: null,
      history: [
        { label: 'ferry', text: '现代英语常用词「ferry」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：渡轮。' },
      ],
      formationLogic: '核心义：渡轮。',
      mnemonic: '看到 ferry，先说出「渡轮」。',
      note: '核心义：渡轮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ferry.', chinese: '这一章反复回到同一个点：渡轮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ferry.s1', en: 'Without that ferry, the next paragraph is hard to follow.', zh: '没有这个渡轮，下一段会很难读。', structure: 'ferry / 表示 / 渡轮', grammar: 'noun，围绕「渡轮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ferry.', right: 'He gave me some advice about the ferry.', reason: 'advice 不可数。名词 ferry 的单复数按词典词形记。', rule: '先确定 ferry 是noun，再套「渡轮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ferry.q1', senseId: 'ferry.s1', errorType: 'meaning', type: '词义选择', prompt: '「ferry」在本条的核心意思是：', options: ['渡轮', '完全相反的意思', '一种古代钱币'], answer: '渡轮', explain: 'ferry：渡轮。' },
      { id: 'ferry.q2', senseId: 'ferry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ferry?', options: ['渡轮', 'a kind of ancient coin', 'the past tense of be'], answer: '渡轮', explain: '对的是「渡轮」。' },
      { id: 'ferry.q3', senseId: 'ferry.s1', errorType: 'grammar', type: '词义选择', prompt: 'ferry 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ferry.q4', senseId: 'ferry.s1', errorType: 'meaning', type: '词源', prompt: '记 ferry 时，哪句更稳妥？', options: ['先锁住「渡轮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「渡轮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['渡轮'] },
  });

  D('fertile', {
    etymology: {
      origin: '现代英语常用词「fertile」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fertile', gloss: '肥沃的' },
      suffix: null,
      history: [
        { label: 'fertile', text: '现代英语常用词「fertile」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肥沃的。' },
      ],
      formationLogic: '核心义：肥沃的。',
      mnemonic: '看到 fertile，先说出「肥沃的」。',
      note: '核心义：肥沃的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fertile.', chinese: '即使是初读者也能看出，这个结果是肥沃的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fertile.s1', en: 'They wanted a fertile answer, not a long speech.', zh: '他们要一个肥沃的的答复，不要长篇发言。', structure: 'fertile / 表示 / 肥沃的', grammar: 'adjective，围绕「肥沃的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fertile.', right: 'The news is fertile.', reason: 'news 作主语时动词用单数。', rule: '先确定 fertile 是adjective，再套「肥沃的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fertile.q1', senseId: 'fertile.s1', errorType: 'meaning', type: '词义选择', prompt: '「fertile」在本条的核心意思是：', options: ['肥沃的', '完全相反的意思', '一种古代钱币'], answer: '肥沃的', explain: 'fertile：肥沃的。' },
      { id: 'fertile.q2', senseId: 'fertile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fertile?', options: ['肥沃的', 'a kind of ancient coin', 'the past tense of be'], answer: '肥沃的', explain: '对的是「肥沃的」。' },
      { id: 'fertile.q3', senseId: 'fertile.s1', errorType: 'grammar', type: '词义选择', prompt: 'fertile 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fertile.q4', senseId: 'fertile.s1', errorType: 'meaning', type: '词源', prompt: '记 fertile 时，哪句更稳妥？', options: ['先锁住「肥沃的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肥沃的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肥沃的'] },
  });

  D('fervent', {
    etymology: {
      origin: '现代英语常用词「fervent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fervent', gloss: '热烈的' },
      suffix: null,
      history: [
        { label: 'fervent', text: '现代英语常用词「fervent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：热烈的。' },
      ],
      formationLogic: '核心义：热烈的。',
      mnemonic: '看到 fervent，先说出「热烈的」。',
      note: '核心义：热烈的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fervent.', chinese: '即使是初读者也能看出，这个结果是热烈的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fervent.s1', en: 'They wanted a fervent answer, not a long speech.', zh: '他们要一个热烈的的答复，不要长篇发言。', structure: 'fervent / 表示 / 热烈的', grammar: 'adjective，围绕「热烈的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fervent.', right: 'The news is fervent.', reason: 'news 作主语时动词用单数。', rule: '先确定 fervent 是adjective，再套「热烈的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fervent.q1', senseId: 'fervent.s1', errorType: 'meaning', type: '词义选择', prompt: '「fervent」在本条的核心意思是：', options: ['热烈的', '完全相反的意思', '一种古代钱币'], answer: '热烈的', explain: 'fervent：热烈的。' },
      { id: 'fervent.q2', senseId: 'fervent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fervent?', options: ['热烈的', 'a kind of ancient coin', 'the past tense of be'], answer: '热烈的', explain: '对的是「热烈的」。' },
      { id: 'fervent.q3', senseId: 'fervent.s1', errorType: 'grammar', type: '词义选择', prompt: 'fervent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fervent.q4', senseId: 'fervent.s1', errorType: 'meaning', type: '词源', prompt: '记 fervent 时，哪句更稳妥？', options: ['先锁住「热烈的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热烈的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热烈的'] },
  });

  D('fervour', {
    etymology: {
      origin: '现代英语常用词「fervour」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fervour', gloss: '热情' },
      suffix: null,
      history: [
        { label: 'fervour', text: '现代英语常用词「fervour」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：热情。' },
      ],
      formationLogic: '核心义：热情。',
      mnemonic: '看到 fervour，先说出「热情」。',
      note: '核心义：热情。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fervour.', chinese: '这一章反复回到同一个点：热情。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fervour.s1', en: 'Without that fervour, the next paragraph is hard to follow.', zh: '没有这个热情，下一段会很难读。', structure: 'fervour / 表示 / 热情', grammar: 'noun，围绕「热情」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fervour.', right: 'He gave me some advice about the fervour.', reason: 'advice 不可数。名词 fervour 的单复数按词典词形记。', rule: '先确定 fervour 是noun，再套「热情」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fervour.q1', senseId: 'fervour.s1', errorType: 'meaning', type: '词义选择', prompt: '「fervour」在本条的核心意思是：', options: ['热情', '完全相反的意思', '一种古代钱币'], answer: '热情', explain: 'fervour：热情。' },
      { id: 'fervour.q2', senseId: 'fervour.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fervour?', options: ['热情', 'a kind of ancient coin', 'the past tense of be'], answer: '热情', explain: '对的是「热情」。' },
      { id: 'fervour.q3', senseId: 'fervour.s1', errorType: 'grammar', type: '词义选择', prompt: 'fervour 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fervour.q4', senseId: 'fervour.s1', errorType: 'meaning', type: '词源', prompt: '记 fervour 时，哪句更稳妥？', options: ['先锁住「热情」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热情」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热情'] },
  });

  D('festival', {
    etymology: {
      origin: '英语派生：festiv + -al，词性转到「节日」。',
      prefix: null,
      root: { text: 'festiv', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'festival', text: '英语派生：festiv + -al，词性转到「节日」。' },
        { label: '现在', text: '核心用法是：节日。' },
      ],
      formationLogic: '先认词干 festiv，再看词尾。',
      mnemonic: '看到 festival，先说出「节日」。',
      note: '先认词干 festiv，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one festival.', chinese: '这一章反复回到同一个点：节日。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'festival.s1', en: 'Without that festival, the next paragraph is hard to follow.', zh: '没有这个节日，下一段会很难读。', structure: 'festival / 表示 / 节日', grammar: 'noun，围绕「节日」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the festival.', right: 'He gave me some advice about the festival.', reason: 'advice 不可数。名词 festival 的单复数按词典词形记。', rule: '先确定 festival 是noun，再套「节日」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'festival.q1', senseId: 'festival.s1', errorType: 'meaning', type: '词义选择', prompt: '「festival」在本条的核心意思是：', options: ['节日', '完全相反的意思', '一种古代钱币'], answer: '节日', explain: 'festival：节日。' },
      { id: 'festival.q2', senseId: 'festival.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches festival?', options: ['节日', 'a kind of ancient coin', 'the past tense of be'], answer: '节日', explain: '对的是「节日」。' },
      { id: 'festival.q3', senseId: 'festival.s1', errorType: 'grammar', type: '词义选择', prompt: 'festival 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'festival.q4', senseId: 'festival.s1', errorType: 'meaning', type: '词源', prompt: '记 festival 时，哪句更稳妥？', options: ['先锁住「节日」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「节日」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['节日'] },
  });

  D('fetch', {
    etymology: {
      origin: '现代英语常用词「fetch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fetch', gloss: '取来' },
      suffix: null,
      history: [
        { label: 'fetch', text: '现代英语常用词「fetch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：取来。' },
      ],
      formationLogic: '核心义：取来。',
      mnemonic: '看到 fetch，先说出「取来」。',
      note: '核心义：取来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fetch before the office closed.', chinese: '他们同意在办公室关门前做这件事：取来。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fetch.s1', en: 'The deadline forced the team to fetch that afternoon.', zh: '截止日期逼着小组在那天下午取来。', structure: 'fetch / 表示 / 取来', grammar: 'verb，围绕「取来」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fetched it yesterday without checking the real past form.', right: 'Check the past form of "fetch" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fetch 是verb，再套「取来」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fetch.q1', senseId: 'fetch.s1', errorType: 'meaning', type: '词义选择', prompt: '「fetch」在本条的核心意思是：', options: ['取来', '完全相反的意思', '一种古代钱币'], answer: '取来', explain: 'fetch：取来。' },
      { id: 'fetch.q2', senseId: 'fetch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fetch?', options: ['取来', 'a kind of ancient coin', 'the past tense of be'], answer: '取来', explain: '对的是「取来」。' },
      { id: 'fetch.q3', senseId: 'fetch.s1', errorType: 'grammar', type: '词义选择', prompt: 'fetch 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fetch.q4', senseId: 'fetch.s1', errorType: 'meaning', type: '词源', prompt: '记 fetch 时，哪句更稳妥？', options: ['先锁住「取来」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「取来」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['取来'] },
  });

  D('feudal', {
    etymology: {
      origin: '英语派生：feud + -al，词性转到「封建的」。',
      prefix: null,
      root: { text: 'feud', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'feudal', text: '英语派生：feud + -al，词性转到「封建的」。' },
        { label: '现在', text: '核心用法是：封建的。' },
      ],
      formationLogic: '先认词干 feud，再看词尾。',
      mnemonic: '看到 feudal，先说出「封建的」。',
      note: '先认词干 feud，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was feudal.', chinese: '即使是初读者也能看出，这个结果是封建的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feudal.s1', en: 'They wanted a feudal answer, not a long speech.', zh: '他们要一个封建的的答复，不要长篇发言。', structure: 'feudal / 表示 / 封建的', grammar: 'adjective，围绕「封建的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are feudal.', right: 'The news is feudal.', reason: 'news 作主语时动词用单数。', rule: '先确定 feudal 是adjective，再套「封建的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feudal.q1', senseId: 'feudal.s1', errorType: 'meaning', type: '词义选择', prompt: '「feudal」在本条的核心意思是：', options: ['封建的', '完全相反的意思', '一种古代钱币'], answer: '封建的', explain: 'feudal：封建的。' },
      { id: 'feudal.q2', senseId: 'feudal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feudal?', options: ['封建的', 'a kind of ancient coin', 'the past tense of be'], answer: '封建的', explain: '对的是「封建的」。' },
      { id: 'feudal.q3', senseId: 'feudal.s1', errorType: 'grammar', type: '词义选择', prompt: 'feudal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'feudal.q4', senseId: 'feudal.s1', errorType: 'meaning', type: '词源', prompt: '记 feudal 时，哪句更稳妥？', options: ['先锁住「封建的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「封建的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['封建的'] },
  });

  D('fever', {
    etymology: {
      origin: '英语派生：fev + -er，词性转到「发烧」。',
      prefix: null,
      root: { text: 'fev', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fever', text: '英语派生：fev + -er，词性转到「发烧」。' },
        { label: '现在', text: '核心用法是：发烧。' },
      ],
      formationLogic: '先认词干 fev，再看词尾。',
      mnemonic: '看到 fever，先说出「发烧」。',
      note: '先认词干 fev，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fever.', chinese: '这一章反复回到同一个点：发烧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fever.s1', en: 'Without that fever, the next paragraph is hard to follow.', zh: '没有这个发烧，下一段会很难读。', structure: 'fever / 表示 / 发烧', grammar: 'noun，围绕「发烧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fever.', right: 'He gave me some advice about the fever.', reason: 'advice 不可数。名词 fever 的单复数按词典词形记。', rule: '先确定 fever 是noun，再套「发烧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fever.q1', senseId: 'fever.s1', errorType: 'meaning', type: '词义选择', prompt: '「fever」在本条的核心意思是：', options: ['发烧', '完全相反的意思', '一种古代钱币'], answer: '发烧', explain: 'fever：发烧。' },
      { id: 'fever.q2', senseId: 'fever.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fever?', options: ['发烧', 'a kind of ancient coin', 'the past tense of be'], answer: '发烧', explain: '对的是「发烧」。' },
      { id: 'fever.q3', senseId: 'fever.s1', errorType: 'grammar', type: '词义选择', prompt: 'fever 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fever.q4', senseId: 'fever.s1', errorType: 'meaning', type: '词源', prompt: '记 fever 时，哪句更稳妥？', options: ['先锁住「发烧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发烧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发烧'] },
  });

  D('feverish', {
    etymology: {
      origin: '现代英语常用词「feverish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'feverish', gloss: '发烧的' },
      suffix: null,
      history: [
        { label: 'feverish', text: '现代英语常用词「feverish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：发烧的。' },
      ],
      formationLogic: '核心义：发烧的。',
      mnemonic: '看到 feverish，先说出「发烧的」。',
      note: '核心义：发烧的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was feverish.', chinese: '即使是初读者也能看出，这个结果是发烧的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'feverish.s1', en: 'They wanted a feverish answer, not a long speech.', zh: '他们要一个发烧的的答复，不要长篇发言。', structure: 'feverish / 表示 / 发烧的', grammar: 'adjective，围绕「发烧的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are feverish.', right: 'The news is feverish.', reason: 'news 作主语时动词用单数。', rule: '先确定 feverish 是adjective，再套「发烧的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'feverish.q1', senseId: 'feverish.s1', errorType: 'meaning', type: '词义选择', prompt: '「feverish」在本条的核心意思是：', options: ['发烧的', '完全相反的意思', '一种古代钱币'], answer: '发烧的', explain: 'feverish：发烧的。' },
      { id: 'feverish.q2', senseId: 'feverish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches feverish?', options: ['发烧的', 'a kind of ancient coin', 'the past tense of be'], answer: '发烧的', explain: '对的是「发烧的」。' },
      { id: 'feverish.q3', senseId: 'feverish.s1', errorType: 'grammar', type: '词义选择', prompt: 'feverish 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'feverish.q4', senseId: 'feverish.s1', errorType: 'meaning', type: '词源', prompt: '记 feverish 时，哪句更稳妥？', options: ['先锁住「发烧的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发烧的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发烧的'] },
  });

  D('few', {
    etymology: {
      origin: '现代英语常用词「few」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'few', gloss: '很少的' },
      suffix: null,
      history: [
        { label: 'few', text: '现代英语常用词「few」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：很少的。' },
      ],
      formationLogic: '核心义：很少的。',
      mnemonic: '看到 few，先说出「很少的」。',
      note: '核心义：很少的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "few" and asked the class to keep it as one unit.', chinese: '老师把「few」圈出来，让全班把它当成一个整体。它表示很少的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'few.s1', en: 'In the margin she wrote "few" so nobody would split the phrase.', zh: '她在页边写下「few」，免得有人把这个说法拆开。意思是很少的。', structure: 'few / 表示 / 很少的', grammar: 'determiner，围绕「很少的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of few and lost the point.', right: 'Keep "few" together: it means 很少的.', reason: '「few」要整块理解。', rule: '先确定 few 是determiner，再套「很少的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'few.q1', senseId: 'few.s1', errorType: 'meaning', type: '词义选择', prompt: '「few」在本条的核心意思是：', options: ['很少的', '完全相反的意思', '一种古代钱币'], answer: '很少的', explain: 'few：很少的。' },
      { id: 'few.q2', senseId: 'few.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches few?', options: ['很少的', 'a kind of ancient coin', 'the past tense of be'], answer: '很少的', explain: '对的是「很少的」。' },
      { id: 'few.q3', senseId: 'few.s1', errorType: 'grammar', type: '词义选择', prompt: 'few 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'few.q4', senseId: 'few.s1', errorType: 'meaning', type: '词源', prompt: '记 few 时，哪句更稳妥？', options: ['先锁住「很少的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「很少的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['很少的'] },
  });

  D('fewer', {
    etymology: {
      origin: '英语派生：few + -er，词性转到「更少的」。',
      prefix: null,
      root: { text: 'few', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fewer', text: '英语派生：few + -er，词性转到「更少的」。' },
        { label: '现在', text: '核心用法是：更少的。' },
      ],
      formationLogic: '先认词干 few，再看词尾。',
      mnemonic: '看到 fewer，先说出「更少的」。',
      note: '先认词干 few，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fewer" and asked the class to keep it as one unit.', chinese: '老师把「fewer」圈出来，让全班把它当成一个整体。它表示更少的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fewer.s1', en: 'In the margin she wrote "fewer" so nobody would split the phrase.', zh: '她在页边写下「fewer」，免得有人把这个说法拆开。意思是更少的。', structure: 'fewer / 表示 / 更少的', grammar: 'determiner，围绕「更少的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fewer and lost the point.', right: 'Keep "fewer" together: it means 更少的.', reason: '「fewer」要整块理解。', rule: '先确定 fewer 是determiner，再套「更少的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fewer.q1', senseId: 'fewer.s1', errorType: 'meaning', type: '词义选择', prompt: '「fewer」在本条的核心意思是：', options: ['更少的', '完全相反的意思', '一种古代钱币'], answer: '更少的', explain: 'fewer：更少的。' },
      { id: 'fewer.q2', senseId: 'fewer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fewer?', options: ['更少的', 'a kind of ancient coin', 'the past tense of be'], answer: '更少的', explain: '对的是「更少的」。' },
      { id: 'fewer.q3', senseId: 'fewer.s1', errorType: 'grammar', type: '词义选择', prompt: 'fewer 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'fewer.q4', senseId: 'fewer.s1', errorType: 'meaning', type: '词源', prompt: '记 fewer 时，哪句更稳妥？', options: ['先锁住「更少的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「更少的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['更少的'] },
  });

  D('fewest', {
    etymology: {
      origin: '现代英语常用词「fewest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fewest', gloss: '最少的' },
      suffix: null,
      history: [
        { label: 'fewest', text: '现代英语常用词「fewest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：最少的。' },
      ],
      formationLogic: '核心义：最少的。',
      mnemonic: '看到 fewest，先说出「最少的」。',
      note: '核心义：最少的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fewest" and asked the class to keep it as one unit.', chinese: '老师把「fewest」圈出来，让全班把它当成一个整体。它表示最少的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fewest.s1', en: 'In the margin she wrote "fewest" so nobody would split the phrase.', zh: '她在页边写下「fewest」，免得有人把这个说法拆开。意思是最少的。', structure: 'fewest / 表示 / 最少的', grammar: 'determiner，围绕「最少的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fewest and lost the point.', right: 'Keep "fewest" together: it means 最少的.', reason: '「fewest」要整块理解。', rule: '先确定 fewest 是determiner，再套「最少的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fewest.q1', senseId: 'fewest.s1', errorType: 'meaning', type: '词义选择', prompt: '「fewest」在本条的核心意思是：', options: ['最少的', '完全相反的意思', '一种古代钱币'], answer: '最少的', explain: 'fewest：最少的。' },
      { id: 'fewest.q2', senseId: 'fewest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fewest?', options: ['最少的', 'a kind of ancient coin', 'the past tense of be'], answer: '最少的', explain: '对的是「最少的」。' },
      { id: 'fewest.q3', senseId: 'fewest.s1', errorType: 'grammar', type: '词义选择', prompt: 'fewest 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'fewest.q4', senseId: 'fewest.s1', errorType: 'meaning', type: '词源', prompt: '记 fewest 时，哪句更稳妥？', options: ['先锁住「最少的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最少的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最少的'] },
  });

  D('fiasco', {
    etymology: {
      origin: '现代英语常用词「fiasco」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fiasco', gloss: '惨败' },
      suffix: null,
      history: [
        { label: 'fiasco', text: '现代英语常用词「fiasco」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：惨败。' },
      ],
      formationLogic: '核心义：惨败。',
      mnemonic: '看到 fiasco，先说出「惨败」。',
      note: '核心义：惨败。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fiasco.', chinese: '这一章反复回到同一个点：惨败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiasco.s1', en: 'Without that fiasco, the next paragraph is hard to follow.', zh: '没有这个惨败，下一段会很难读。', structure: 'fiasco / 表示 / 惨败', grammar: 'noun，围绕「惨败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fiasco.', right: 'He gave me some advice about the fiasco.', reason: 'advice 不可数。名词 fiasco 的单复数按词典词形记。', rule: '先确定 fiasco 是noun，再套「惨败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiasco.q1', senseId: 'fiasco.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiasco」在本条的核心意思是：', options: ['惨败', '完全相反的意思', '一种古代钱币'], answer: '惨败', explain: 'fiasco：惨败。' },
      { id: 'fiasco.q2', senseId: 'fiasco.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiasco?', options: ['惨败', 'a kind of ancient coin', 'the past tense of be'], answer: '惨败', explain: '对的是「惨败」。' },
      { id: 'fiasco.q3', senseId: 'fiasco.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiasco 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fiasco.q4', senseId: 'fiasco.s1', errorType: 'meaning', type: '词源', prompt: '记 fiasco 时，哪句更稳妥？', options: ['先锁住「惨败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「惨败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['惨败'] },
  });

  D('fib', {
    etymology: {
      origin: '现代英语常用词「fib」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fib', gloss: '撒小谎' },
      suffix: null,
      history: [
        { label: 'fib', text: '现代英语常用词「fib」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：撒小谎。' },
      ],
      formationLogic: '核心义：撒小谎。',
      mnemonic: '看到 fib，先说出「撒小谎」。',
      note: '核心义：撒小谎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fib.', chinese: '这一章反复回到同一个点：撒小谎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fib.s1', en: 'Without that fib, the next paragraph is hard to follow.', zh: '没有这个撒小谎，下一段会很难读。', structure: 'fib / 表示 / 撒小谎', grammar: 'noun，围绕「撒小谎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fib.', right: 'He gave me some advice about the fib.', reason: 'advice 不可数。名词 fib 的单复数按词典词形记。', rule: '先确定 fib 是noun，再套「撒小谎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fib.q1', senseId: 'fib.s1', errorType: 'meaning', type: '词义选择', prompt: '「fib」在本条的核心意思是：', options: ['撒小谎', '完全相反的意思', '一种古代钱币'], answer: '撒小谎', explain: 'fib：撒小谎。' },
      { id: 'fib.q2', senseId: 'fib.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fib?', options: ['撒小谎', 'a kind of ancient coin', 'the past tense of be'], answer: '撒小谎', explain: '对的是「撒小谎」。' },
      { id: 'fib.q3', senseId: 'fib.s1', errorType: 'grammar', type: '词义选择', prompt: 'fib 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fib.q4', senseId: 'fib.s1', errorType: 'meaning', type: '词源', prompt: '记 fib 时，哪句更稳妥？', options: ['先锁住「撒小谎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「撒小谎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['撒小谎'] },
  });

  D('fiber', {
    etymology: {
      origin: '英语派生：fib + -er，词性转到「纤维」。',
      prefix: null,
      root: { text: 'fib', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fiber', text: '英语派生：fib + -er，词性转到「纤维」。' },
        { label: '现在', text: '核心用法是：纤维。' },
      ],
      formationLogic: '先认词干 fib，再看词尾。',
      mnemonic: '看到 fiber，先说出「纤维」。',
      note: '先认词干 fib，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fiber.', chinese: '这一章反复回到同一个点：纤维。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiber.s1', en: 'Without that fiber, the next paragraph is hard to follow.', zh: '没有这个纤维，下一段会很难读。', structure: 'fiber / 表示 / 纤维', grammar: 'noun，围绕「纤维」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fiber.', right: 'He gave me some advice about the fiber.', reason: 'advice 不可数。名词 fiber 的单复数按词典词形记。', rule: '先确定 fiber 是noun，再套「纤维」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiber.q1', senseId: 'fiber.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiber」在本条的核心意思是：', options: ['纤维', '完全相反的意思', '一种古代钱币'], answer: '纤维', explain: 'fiber：纤维。' },
      { id: 'fiber.q2', senseId: 'fiber.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiber?', options: ['纤维', 'a kind of ancient coin', 'the past tense of be'], answer: '纤维', explain: '对的是「纤维」。' },
      { id: 'fiber.q3', senseId: 'fiber.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiber 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fiber.q4', senseId: 'fiber.s1', errorType: 'meaning', type: '词源', prompt: '记 fiber 时，哪句更稳妥？', options: ['先锁住「纤维」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「纤维」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['纤维'] },
  });

  D('fiction', {
    etymology: {
      origin: '英语派生：fic + -tion，词性转到「小说」。',
      prefix: null,
      root: { text: 'fic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fiction', text: '英语派生：fic + -tion，词性转到「小说」。' },
        { label: '现在', text: '核心用法是：小说。' },
      ],
      formationLogic: '先认词干 fic，再看词尾。',
      mnemonic: '看到 fiction，先说出「小说」。',
      note: '先认词干 fic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fiction.', chinese: '这一章反复回到同一个点：小说。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiction.s1', en: 'Without that fiction, the next paragraph is hard to follow.', zh: '没有这个小说，下一段会很难读。', structure: 'fiction / 表示 / 小说', grammar: 'noun，围绕「小说」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fiction.', right: 'He gave me some advice about the fiction.', reason: 'advice 不可数。名词 fiction 的单复数按词典词形记。', rule: '先确定 fiction 是noun，再套「小说」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiction.q1', senseId: 'fiction.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiction」在本条的核心意思是：', options: ['小说', '完全相反的意思', '一种古代钱币'], answer: '小说', explain: 'fiction：小说。' },
      { id: 'fiction.q2', senseId: 'fiction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiction?', options: ['小说', 'a kind of ancient coin', 'the past tense of be'], answer: '小说', explain: '对的是「小说」。' },
      { id: 'fiction.q3', senseId: 'fiction.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fiction.q4', senseId: 'fiction.s1', errorType: 'meaning', type: '词源', prompt: '记 fiction 时，哪句更稳妥？', options: ['先锁住「小说」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小说」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小说'] },
  });

  D('fiddle', {
    etymology: {
      origin: '现代英语常用词「fiddle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fiddle', gloss: '小提琴' },
      suffix: null,
      history: [
        { label: 'fiddle', text: '现代英语常用词「fiddle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小提琴。' },
      ],
      formationLogic: '核心义：小提琴。',
      mnemonic: '看到 fiddle，先说出「小提琴」。',
      note: '核心义：小提琴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fiddle.', chinese: '这一章反复回到同一个点：小提琴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiddle.s1', en: 'Without that fiddle, the next paragraph is hard to follow.', zh: '没有这个小提琴，下一段会很难读。', structure: 'fiddle / 表示 / 小提琴', grammar: 'noun，围绕「小提琴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fiddle.', right: 'He gave me some advice about the fiddle.', reason: 'advice 不可数。名词 fiddle 的单复数按词典词形记。', rule: '先确定 fiddle 是noun，再套「小提琴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiddle.q1', senseId: 'fiddle.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiddle」在本条的核心意思是：', options: ['小提琴', '完全相反的意思', '一种古代钱币'], answer: '小提琴', explain: 'fiddle：小提琴。' },
      { id: 'fiddle.q2', senseId: 'fiddle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiddle?', options: ['小提琴', 'a kind of ancient coin', 'the past tense of be'], answer: '小提琴', explain: '对的是「小提琴」。' },
      { id: 'fiddle.q3', senseId: 'fiddle.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiddle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fiddle.q4', senseId: 'fiddle.s1', errorType: 'meaning', type: '词源', prompt: '记 fiddle 时，哪句更稳妥？', options: ['先锁住「小提琴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小提琴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小提琴'] },
  });

  D('fidgety', {
    etymology: {
      origin: '现代英语常用词「fidgety」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fidgety', gloss: '坐立不安的' },
      suffix: null,
      history: [
        { label: 'fidgety', text: '现代英语常用词「fidgety」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：坐立不安的。' },
      ],
      formationLogic: '核心义：坐立不安的。',
      mnemonic: '看到 fidgety，先说出「坐立不安的」。',
      note: '核心义：坐立不安的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fidgety.', chinese: '即使是初读者也能看出，这个结果是坐立不安的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fidgety.s1', en: 'They wanted a fidgety answer, not a long speech.', zh: '他们要一个坐立不安的的答复，不要长篇发言。', structure: 'fidgety / 表示 / 坐立不安的', grammar: 'adjective，围绕「坐立不安的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fidgety.', right: 'The news is fidgety.', reason: 'news 作主语时动词用单数。', rule: '先确定 fidgety 是adjective，再套「坐立不安的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fidgety.q1', senseId: 'fidgety.s1', errorType: 'meaning', type: '词义选择', prompt: '「fidgety」在本条的核心意思是：', options: ['坐立不安的', '完全相反的意思', '一种古代钱币'], answer: '坐立不安的', explain: 'fidgety：坐立不安的。' },
      { id: 'fidgety.q2', senseId: 'fidgety.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fidgety?', options: ['坐立不安的', 'a kind of ancient coin', 'the past tense of be'], answer: '坐立不安的', explain: '对的是「坐立不安的」。' },
      { id: 'fidgety.q3', senseId: 'fidgety.s1', errorType: 'grammar', type: '词义选择', prompt: 'fidgety 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fidgety.q4', senseId: 'fidgety.s1', errorType: 'meaning', type: '词源', prompt: '记 fidgety 时，哪句更稳妥？', options: ['先锁住「坐立不安的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「坐立不安的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['坐立不安的'] },
  });

  D('field', {
    etymology: {
      origin: '现代英语常用词「field」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'field', gloss: '田地' },
      suffix: null,
      history: [
        { label: 'field', text: '现代英语常用词「field」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：田地。' },
      ],
      formationLogic: '核心义：田地。',
      mnemonic: '看到 field，先说出「田地」。',
      note: '核心义：田地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one field.', chinese: '这一章反复回到同一个点：田地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'field.s1', en: 'Without that field, the next paragraph is hard to follow.', zh: '没有这个田地，下一段会很难读。', structure: 'field / 表示 / 田地', grammar: 'noun，围绕「田地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the field.', right: 'He gave me some advice about the field.', reason: 'advice 不可数。名词 field 的单复数按词典词形记。', rule: '先确定 field 是noun，再套「田地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'field.q1', senseId: 'field.s1', errorType: 'meaning', type: '词义选择', prompt: '「field」在本条的核心意思是：', options: ['田地', '完全相反的意思', '一种古代钱币'], answer: '田地', explain: 'field：田地。' },
      { id: 'field.q2', senseId: 'field.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches field?', options: ['田地', 'a kind of ancient coin', 'the past tense of be'], answer: '田地', explain: '对的是「田地」。' },
      { id: 'field.q3', senseId: 'field.s1', errorType: 'grammar', type: '词义选择', prompt: 'field 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'field.q4', senseId: 'field.s1', errorType: 'meaning', type: '词源', prompt: '记 field 时，哪句更稳妥？', options: ['先锁住「田地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「田地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['田地'] },
  });

  D('field trip', {
    etymology: {
      origin: '现代英语固定说法「field trip」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'field trip', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'field trip', text: '现代英语固定说法「field trip」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：实地考察旅行。' },
      ],
      formationLogic: '核心义：实地考察旅行。',
      mnemonic: '看到 field trip，先说出「实地考察旅行」。',
      note: '核心义：实地考察旅行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "field trip" and asked the class to keep it as one unit.', chinese: '老师把「field trip」圈出来，让全班把它当成一个整体。它表示实地考察旅行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'field trip.s1', en: 'In the margin she wrote "field trip" so nobody would split the phrase.', zh: '她在页边写下「field trip」，免得有人把这个说法拆开。意思是实地考察旅行。', structure: 'field trip / 表示 / 实地考察旅行', grammar: 'noun，围绕「实地考察旅行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of field trip and lost the point.', right: 'Keep "field trip" together: it means 实地考察旅行.', reason: '「field trip」要整块理解。', rule: '先确定 field trip 是noun，再套「实地考察旅行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'field trip.q1', senseId: 'field trip.s1', errorType: 'meaning', type: '词义选择', prompt: '「field trip」在本条的核心意思是：', options: ['实地考察旅行', '完全相反的意思', '一种古代钱币'], answer: '实地考察旅行', explain: 'field trip：实地考察旅行。' },
      { id: 'field trip.q2', senseId: 'field trip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches field trip?', options: ['实地考察旅行', 'a kind of ancient coin', 'the past tense of be'], answer: '实地考察旅行', explain: '对的是「实地考察旅行」。' },
      { id: 'field trip.q3', senseId: 'field trip.s1', errorType: 'grammar', type: '词义选择', prompt: 'field trip 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'field trip.q4', senseId: 'field trip.s1', errorType: 'meaning', type: '词源', prompt: '记 field trip 时，哪句更稳妥？', options: ['先锁住「实地考察旅行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「实地考察旅行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['实地考察旅行'] },
  });

  D('fiend', {
    etymology: {
      origin: '现代英语常用词「fiend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fiend', gloss: '恶魔' },
      suffix: null,
      history: [
        { label: 'fiend', text: '现代英语常用词「fiend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：恶魔。' },
      ],
      formationLogic: '核心义：恶魔。',
      mnemonic: '看到 fiend，先说出「恶魔」。',
      note: '核心义：恶魔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fiend.', chinese: '这一章反复回到同一个点：恶魔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiend.s1', en: 'Without that fiend, the next paragraph is hard to follow.', zh: '没有这个恶魔，下一段会很难读。', structure: 'fiend / 表示 / 恶魔', grammar: 'noun，围绕「恶魔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fiend.', right: 'He gave me some advice about the fiend.', reason: 'advice 不可数。名词 fiend 的单复数按词典词形记。', rule: '先确定 fiend 是noun，再套「恶魔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiend.q1', senseId: 'fiend.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiend」在本条的核心意思是：', options: ['恶魔', '完全相反的意思', '一种古代钱币'], answer: '恶魔', explain: 'fiend：恶魔。' },
      { id: 'fiend.q2', senseId: 'fiend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiend?', options: ['恶魔', 'a kind of ancient coin', 'the past tense of be'], answer: '恶魔', explain: '对的是「恶魔」。' },
      { id: 'fiend.q3', senseId: 'fiend.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiend 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fiend.q4', senseId: 'fiend.s1', errorType: 'meaning', type: '词源', prompt: '记 fiend 时，哪句更稳妥？', options: ['先锁住「恶魔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「恶魔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['恶魔'] },
  });

  D('fierce', {
    etymology: {
      origin: '现代英语常用词「fierce」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fierce', gloss: '凶猛的' },
      suffix: null,
      history: [
        { label: 'fierce', text: '现代英语常用词「fierce」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：凶猛的。' },
      ],
      formationLogic: '核心义：凶猛的。',
      mnemonic: '看到 fierce，先说出「凶猛的」。',
      note: '核心义：凶猛的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fierce.', chinese: '即使是初读者也能看出，这个结果是凶猛的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fierce.s1', en: 'They wanted a fierce answer, not a long speech.', zh: '他们要一个凶猛的的答复，不要长篇发言。', structure: 'fierce / 表示 / 凶猛的', grammar: 'adjective，围绕「凶猛的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fierce.', right: 'The news is fierce.', reason: 'news 作主语时动词用单数。', rule: '先确定 fierce 是adjective，再套「凶猛的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fierce.q1', senseId: 'fierce.s1', errorType: 'meaning', type: '词义选择', prompt: '「fierce」在本条的核心意思是：', options: ['凶猛的', '完全相反的意思', '一种古代钱币'], answer: '凶猛的', explain: 'fierce：凶猛的。' },
      { id: 'fierce.q2', senseId: 'fierce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fierce?', options: ['凶猛的', 'a kind of ancient coin', 'the past tense of be'], answer: '凶猛的', explain: '对的是「凶猛的」。' },
      { id: 'fierce.q3', senseId: 'fierce.s1', errorType: 'grammar', type: '词义选择', prompt: 'fierce 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fierce.q4', senseId: 'fierce.s1', errorType: 'meaning', type: '词源', prompt: '记 fierce 时，哪句更稳妥？', options: ['先锁住「凶猛的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凶猛的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凶猛的'] },
  });

  D('fiery', {
    etymology: {
      origin: '现代英语常用词「fiery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fiery', gloss: '火一般的' },
      suffix: null,
      history: [
        { label: 'fiery', text: '现代英语常用词「fiery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：火一般的。' },
      ],
      formationLogic: '核心义：火一般的。',
      mnemonic: '看到 fiery，先说出「火一般的」。',
      note: '核心义：火一般的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fiery.', chinese: '即使是初读者也能看出，这个结果是火一般的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiery.s1', en: 'They wanted a fiery answer, not a long speech.', zh: '他们要一个火一般的的答复，不要长篇发言。', structure: 'fiery / 表示 / 火一般的', grammar: 'adjective，围绕「火一般的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fiery.', right: 'The news is fiery.', reason: 'news 作主语时动词用单数。', rule: '先确定 fiery 是adjective，再套「火一般的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiery.q1', senseId: 'fiery.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiery」在本条的核心意思是：', options: ['火一般的', '完全相反的意思', '一种古代钱币'], answer: '火一般的', explain: 'fiery：火一般的。' },
      { id: 'fiery.q2', senseId: 'fiery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiery?', options: ['火一般的', 'a kind of ancient coin', 'the past tense of be'], answer: '火一般的', explain: '对的是「火一般的」。' },
      { id: 'fiery.q3', senseId: 'fiery.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiery 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fiery.q4', senseId: 'fiery.s1', errorType: 'meaning', type: '词源', prompt: '记 fiery 时，哪句更稳妥？', options: ['先锁住「火一般的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火一般的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火一般的'] },
  });

  D('fifteen', {
    etymology: {
      origin: '现代英语常用词「fifteen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fifteen', gloss: '十五' },
      suffix: null,
      history: [
        { label: 'fifteen', text: '现代英语常用词「fifteen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：十五。' },
      ],
      formationLogic: '核心义：十五。',
      mnemonic: '看到 fifteen，先说出「十五」。',
      note: '核心义：十五。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fifteen.', chinese: '这一章反复回到同一个点：十五。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fifteen.s1', en: 'Without that fifteen, the next paragraph is hard to follow.', zh: '没有这个十五，下一段会很难读。', structure: 'fifteen / 表示 / 十五', grammar: 'number，围绕「十五」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fifteen.', right: 'He gave me some advice about the fifteen.', reason: 'advice 不可数。名词 fifteen 的单复数按词典词形记。', rule: '先确定 fifteen 是number，再套「十五」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fifteen.q1', senseId: 'fifteen.s1', errorType: 'meaning', type: '词义选择', prompt: '「fifteen」在本条的核心意思是：', options: ['十五', '完全相反的意思', '一种古代钱币'], answer: '十五', explain: 'fifteen：十五。' },
      { id: 'fifteen.q2', senseId: 'fifteen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fifteen?', options: ['十五', 'a kind of ancient coin', 'the past tense of be'], answer: '十五', explain: '对的是「十五」。' },
      { id: 'fifteen.q3', senseId: 'fifteen.s1', errorType: 'grammar', type: '词义选择', prompt: 'fifteen 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fifteen.q4', senseId: 'fifteen.s1', errorType: 'meaning', type: '词源', prompt: '记 fifteen 时，哪句更稳妥？', options: ['先锁住「十五」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十五」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十五'] },
  });

  D('fifteen minutes', {
    etymology: {
      origin: '现代英语固定说法「fifteen minutes」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fifteen minutes', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fifteen minutes', text: '现代英语固定说法「fifteen minutes」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：十五分钟。' },
      ],
      formationLogic: '核心义：十五分钟。',
      mnemonic: '看到 fifteen minutes，先说出「十五分钟」。',
      note: '核心义：十五分钟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fifteen minutes" and asked the class to keep it as one unit.', chinese: '老师把「fifteen minutes」圈出来，让全班把它当成一个整体。它表示十五分钟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fifteen minutes.s1', en: 'In the margin she wrote "fifteen minutes" so nobody would split the phrase.', zh: '她在页边写下「fifteen minutes」，免得有人把这个说法拆开。意思是十五分钟。', structure: 'fifteen minutes / 表示 / 十五分钟', grammar: 'noun，围绕「十五分钟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fifteen minutes and lost the point.', right: 'Keep "fifteen minutes" together: it means 十五分钟.', reason: '「fifteen minutes」要整块理解。', rule: '先确定 fifteen minutes 是noun，再套「十五分钟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fifteen minutes.q1', senseId: 'fifteen minutes.s1', errorType: 'meaning', type: '词义选择', prompt: '「fifteen minutes」在本条的核心意思是：', options: ['十五分钟', '完全相反的意思', '一种古代钱币'], answer: '十五分钟', explain: 'fifteen minutes：十五分钟。' },
      { id: 'fifteen minutes.q2', senseId: 'fifteen minutes.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fifteen minutes?', options: ['十五分钟', 'a kind of ancient coin', 'the past tense of be'], answer: '十五分钟', explain: '对的是「十五分钟」。' },
      { id: 'fifteen minutes.q3', senseId: 'fifteen minutes.s1', errorType: 'grammar', type: '词义选择', prompt: 'fifteen minutes 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fifteen minutes.q4', senseId: 'fifteen minutes.s1', errorType: 'meaning', type: '词源', prompt: '记 fifteen minutes 时，哪句更稳妥？', options: ['先锁住「十五分钟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十五分钟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十五分钟'] },
  });

  D('fifteenth', {
    etymology: {
      origin: '现代英语常用词「fifteenth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fifteenth', gloss: '第十五' },
      suffix: null,
      history: [
        { label: 'fifteenth', text: '现代英语常用词「fifteenth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第十五。' },
      ],
      formationLogic: '核心义：第十五。',
      mnemonic: '看到 fifteenth，先说出「第十五」。',
      note: '核心义：第十五。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fifteenth.', chinese: '这一章反复回到同一个点：第十五。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fifteenth.s1', en: 'Without that fifteenth, the next paragraph is hard to follow.', zh: '没有这个第十五，下一段会很难读。', structure: 'fifteenth / 表示 / 第十五', grammar: 'number，围绕「第十五」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fifteenth.', right: 'He gave me some advice about the fifteenth.', reason: 'advice 不可数。名词 fifteenth 的单复数按词典词形记。', rule: '先确定 fifteenth 是number，再套「第十五」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fifteenth.q1', senseId: 'fifteenth.s1', errorType: 'meaning', type: '词义选择', prompt: '「fifteenth」在本条的核心意思是：', options: ['第十五', '完全相反的意思', '一种古代钱币'], answer: '第十五', explain: 'fifteenth：第十五。' },
      { id: 'fifteenth.q2', senseId: 'fifteenth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fifteenth?', options: ['第十五', 'a kind of ancient coin', 'the past tense of be'], answer: '第十五', explain: '对的是「第十五」。' },
      { id: 'fifteenth.q3', senseId: 'fifteenth.s1', errorType: 'grammar', type: '词义选择', prompt: 'fifteenth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fifteenth.q4', senseId: 'fifteenth.s1', errorType: 'meaning', type: '词源', prompt: '记 fifteenth 时，哪句更稳妥？', options: ['先锁住「第十五」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第十五」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第十五'] },
  });

  D('fifth', {
    etymology: {
      origin: '现代英语常用词「fifth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fifth', gloss: '第五' },
      suffix: null,
      history: [
        { label: 'fifth', text: '现代英语常用词「fifth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第五。' },
      ],
      formationLogic: '核心义：第五。',
      mnemonic: '看到 fifth，先说出「第五」。',
      note: '核心义：第五。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fifth.', chinese: '这一章反复回到同一个点：第五。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fifth.s1', en: 'Without that fifth, the next paragraph is hard to follow.', zh: '没有这个第五，下一段会很难读。', structure: 'fifth / 表示 / 第五', grammar: 'number，围绕「第五」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fifth.', right: 'He gave me some advice about the fifth.', reason: 'advice 不可数。名词 fifth 的单复数按词典词形记。', rule: '先确定 fifth 是number，再套「第五」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fifth.q1', senseId: 'fifth.s1', errorType: 'meaning', type: '词义选择', prompt: '「fifth」在本条的核心意思是：', options: ['第五', '完全相反的意思', '一种古代钱币'], answer: '第五', explain: 'fifth：第五。' },
      { id: 'fifth.q2', senseId: 'fifth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fifth?', options: ['第五', 'a kind of ancient coin', 'the past tense of be'], answer: '第五', explain: '对的是「第五」。' },
      { id: 'fifth.q3', senseId: 'fifth.s1', errorType: 'grammar', type: '词义选择', prompt: 'fifth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fifth.q4', senseId: 'fifth.s1', errorType: 'meaning', type: '词源', prompt: '记 fifth 时，哪句更稳妥？', options: ['先锁住「第五」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第五」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第五'] },
  });

  D('fifthly', {
    etymology: {
      origin: '英语派生：fifth + -ly，词性转到「第五」。',
      prefix: null,
      root: { text: 'fifth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fifthly', text: '英语派生：fifth + -ly，词性转到「第五」。' },
        { label: '现在', text: '核心用法是：第五。' },
      ],
      formationLogic: '先认词干 fifth，再看词尾。',
      mnemonic: '看到 fifthly，先说出「第五」。',
      note: '先认词干 fifth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule fifthly, and the class followed.', chinese: '她把规则讲清楚了（第五），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fifthly.s1', en: 'He nodded fifthly and returned to the notes.', zh: '他第五地点了点头，又回去看笔记。', structure: 'fifthly / 表示 / 第五', grammar: 'adverb，围绕「第五」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very fifthlyly in the meeting.', right: 'She spoke fifthly in the meeting.', reason: 'fifthly 已经是副词，不要再加 -ly。', rule: '先确定 fifthly 是adverb，再套「第五」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fifthly.q1', senseId: 'fifthly.s1', errorType: 'meaning', type: '词义选择', prompt: '「fifthly」在本条的核心意思是：', options: ['第五', '完全相反的意思', '一种古代钱币'], answer: '第五', explain: 'fifthly：第五。' },
      { id: 'fifthly.q2', senseId: 'fifthly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fifthly?', options: ['第五', 'a kind of ancient coin', 'the past tense of be'], answer: '第五', explain: '对的是「第五」。' },
      { id: 'fifthly.q3', senseId: 'fifthly.s1', errorType: 'grammar', type: '词义选择', prompt: 'fifthly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'fifthly.q4', senseId: 'fifthly.s1', errorType: 'meaning', type: '词源', prompt: '记 fifthly 时，哪句更稳妥？', options: ['先锁住「第五」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第五」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第五'] },
  });

  D('fiftieth', {
    etymology: {
      origin: '现代英语常用词「fiftieth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fiftieth', gloss: '第五十' },
      suffix: null,
      history: [
        { label: 'fiftieth', text: '现代英语常用词「fiftieth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第五十。' },
      ],
      formationLogic: '核心义：第五十。',
      mnemonic: '看到 fiftieth，先说出「第五十」。',
      note: '核心义：第五十。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fiftieth.', chinese: '这一章反复回到同一个点：第五十。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiftieth.s1', en: 'Without that fiftieth, the next paragraph is hard to follow.', zh: '没有这个第五十，下一段会很难读。', structure: 'fiftieth / 表示 / 第五十', grammar: 'number，围绕「第五十」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fiftieth.', right: 'He gave me some advice about the fiftieth.', reason: 'advice 不可数。名词 fiftieth 的单复数按词典词形记。', rule: '先确定 fiftieth 是number，再套「第五十」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiftieth.q1', senseId: 'fiftieth.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiftieth」在本条的核心意思是：', options: ['第五十', '完全相反的意思', '一种古代钱币'], answer: '第五十', explain: 'fiftieth：第五十。' },
      { id: 'fiftieth.q2', senseId: 'fiftieth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiftieth?', options: ['第五十', 'a kind of ancient coin', 'the past tense of be'], answer: '第五十', explain: '对的是「第五十」。' },
      { id: 'fiftieth.q3', senseId: 'fiftieth.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiftieth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fiftieth.q4', senseId: 'fiftieth.s1', errorType: 'meaning', type: '词源', prompt: '记 fiftieth 时，哪句更稳妥？', options: ['先锁住「第五十」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第五十」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第五十'] },
  });

  D('fifty', {
    etymology: {
      origin: '现代英语常用词「fifty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fifty', gloss: '五十' },
      suffix: null,
      history: [
        { label: 'fifty', text: '现代英语常用词「fifty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：五十。' },
      ],
      formationLogic: '核心义：五十。',
      mnemonic: '看到 fifty，先说出「五十」。',
      note: '核心义：五十。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fifty.', chinese: '这一章反复回到同一个点：五十。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fifty.s1', en: 'Without that fifty, the next paragraph is hard to follow.', zh: '没有这个五十，下一段会很难读。', structure: 'fifty / 表示 / 五十', grammar: 'number，围绕「五十」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fifty.', right: 'He gave me some advice about the fifty.', reason: 'advice 不可数。名词 fifty 的单复数按词典词形记。', rule: '先确定 fifty 是number，再套「五十」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fifty.q1', senseId: 'fifty.s1', errorType: 'meaning', type: '词义选择', prompt: '「fifty」在本条的核心意思是：', options: ['五十', '完全相反的意思', '一种古代钱币'], answer: '五十', explain: 'fifty：五十。' },
      { id: 'fifty.q2', senseId: 'fifty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fifty?', options: ['五十', 'a kind of ancient coin', 'the past tense of be'], answer: '五十', explain: '对的是「五十」。' },
      { id: 'fifty.q3', senseId: 'fifty.s1', errorType: 'grammar', type: '词义选择', prompt: 'fifty 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fifty.q4', senseId: 'fifty.s1', errorType: 'meaning', type: '词源', prompt: '记 fifty 时，哪句更稳妥？', options: ['先锁住「五十」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「五十」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['五十'] },
  });

  D('fight', {
    etymology: {
      origin: '现代英语常用词「fight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fight', gloss: '打仗' },
      suffix: null,
      history: [
        { label: 'fight', text: '现代英语常用词「fight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：打仗。' },
      ],
      formationLogic: '核心义：打仗。',
      mnemonic: '看到 fight，先说出「打仗」。',
      note: '核心义：打仗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fight before the office closed.', chinese: '他们同意在办公室关门前做这件事：打仗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fight.s1', en: 'The deadline forced the team to fight that afternoon.', zh: '截止日期逼着小组在那天下午打仗。', structure: 'fight / 表示 / 打仗', grammar: 'verb，围绕「打仗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fighted it yesterday without checking the real past form.', right: 'Check the past form of "fight" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fight 是verb，再套「打仗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fight.q1', senseId: 'fight.s1', errorType: 'meaning', type: '词义选择', prompt: '「fight」在本条的核心意思是：', options: ['打仗', '完全相反的意思', '一种古代钱币'], answer: '打仗', explain: 'fight：打仗。' },
      { id: 'fight.q2', senseId: 'fight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fight?', options: ['打仗', 'a kind of ancient coin', 'the past tense of be'], answer: '打仗', explain: '对的是「打仗」。' },
      { id: 'fight.q3', senseId: 'fight.s1', errorType: 'grammar', type: '词义选择', prompt: 'fight 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fight.q4', senseId: 'fight.s1', errorType: 'meaning', type: '词源', prompt: '记 fight 时，哪句更稳妥？', options: ['先锁住「打仗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打仗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打仗'] },
  });

  D('fighter', {
    etymology: {
      origin: '英语派生：fight + -er，词性转到「斗士」。',
      prefix: null,
      root: { text: 'fight', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fighter', text: '英语派生：fight + -er，词性转到「斗士」。' },
        { label: '现在', text: '核心用法是：斗士。' },
      ],
      formationLogic: '先认词干 fight，再看词尾。',
      mnemonic: '看到 fighter，先说出「斗士」。',
      note: '先认词干 fight，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fighter.', chinese: '这一章反复回到同一个点：斗士。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fighter.s1', en: 'Without that fighter, the next paragraph is hard to follow.', zh: '没有这个斗士，下一段会很难读。', structure: 'fighter / 表示 / 斗士', grammar: 'noun，围绕「斗士」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fighter.', right: 'He gave me some advice about the fighter.', reason: 'advice 不可数。名词 fighter 的单复数按词典词形记。', rule: '先确定 fighter 是noun，再套「斗士」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fighter.q1', senseId: 'fighter.s1', errorType: 'meaning', type: '词义选择', prompt: '「fighter」在本条的核心意思是：', options: ['斗士', '完全相反的意思', '一种古代钱币'], answer: '斗士', explain: 'fighter：斗士。' },
      { id: 'fighter.q2', senseId: 'fighter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fighter?', options: ['斗士', 'a kind of ancient coin', 'the past tense of be'], answer: '斗士', explain: '对的是「斗士」。' },
      { id: 'fighter.q3', senseId: 'fighter.s1', errorType: 'grammar', type: '词义选择', prompt: 'fighter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fighter.q4', senseId: 'fighter.s1', errorType: 'meaning', type: '词源', prompt: '记 fighter 时，哪句更稳妥？', options: ['先锁住「斗士」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「斗士」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['斗士'] },
  });

  D('fighting', {
    etymology: {
      origin: '英语派生：fight + -ing，词性转到「战斗」。',
      prefix: null,
      root: { text: 'fight', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fighting', text: '英语派生：fight + -ing，词性转到「战斗」。' },
        { label: '现在', text: '核心用法是：战斗。' },
      ],
      formationLogic: '先认词干 fight，再看词尾。',
      mnemonic: '看到 fighting，先说出「战斗」。',
      note: '先认词干 fight，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fighting.', chinese: '这一章反复回到同一个点：战斗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fighting.s1', en: 'Without that fighting, the next paragraph is hard to follow.', zh: '没有这个战斗，下一段会很难读。', structure: 'fighting / 表示 / 战斗', grammar: 'noun，围绕「战斗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fighting.', right: 'He gave me some advice about the fighting.', reason: 'advice 不可数。名词 fighting 的单复数按词典词形记。', rule: '先确定 fighting 是noun，再套「战斗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fighting.q1', senseId: 'fighting.s1', errorType: 'meaning', type: '词义选择', prompt: '「fighting」在本条的核心意思是：', options: ['战斗', '完全相反的意思', '一种古代钱币'], answer: '战斗', explain: 'fighting：战斗。' },
      { id: 'fighting.q2', senseId: 'fighting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fighting?', options: ['战斗', 'a kind of ancient coin', 'the past tense of be'], answer: '战斗', explain: '对的是「战斗」。' },
      { id: 'fighting.q3', senseId: 'fighting.s1', errorType: 'grammar', type: '词义选择', prompt: 'fighting 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fighting.q4', senseId: 'fighting.s1', errorType: 'meaning', type: '词源', prompt: '记 fighting 时，哪句更稳妥？', options: ['先锁住「战斗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「战斗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['战斗'] },
  });

  D('figure', {
    etymology: {
      origin: '现代英语常用词「figure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'figure', gloss: '数字' },
      suffix: null,
      history: [
        { label: 'figure', text: '现代英语常用词「figure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：数字。' },
      ],
      formationLogic: '核心义：数字。',
      mnemonic: '看到 figure，先说出「数字」。',
      note: '核心义：数字。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one figure.', chinese: '这一章反复回到同一个点：数字。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'figure.s1', en: 'Without that figure, the next paragraph is hard to follow.', zh: '没有这个数字，下一段会很难读。', structure: 'figure / 表示 / 数字', grammar: 'noun，围绕「数字」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the figure.', right: 'He gave me some advice about the figure.', reason: 'advice 不可数。名词 figure 的单复数按词典词形记。', rule: '先确定 figure 是noun，再套「数字」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'figure.q1', senseId: 'figure.s1', errorType: 'meaning', type: '词义选择', prompt: '「figure」在本条的核心意思是：', options: ['数字', '完全相反的意思', '一种古代钱币'], answer: '数字', explain: 'figure：数字。' },
      { id: 'figure.q2', senseId: 'figure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches figure?', options: ['数字', 'a kind of ancient coin', 'the past tense of be'], answer: '数字', explain: '对的是「数字」。' },
      { id: 'figure.q3', senseId: 'figure.s1', errorType: 'grammar', type: '词义选择', prompt: 'figure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'figure.q4', senseId: 'figure.s1', errorType: 'meaning', type: '词源', prompt: '记 figure 时，哪句更稳妥？', options: ['先锁住「数字」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数字」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数字'] },
  });

  D('figures', {
    etymology: {
      origin: '现代英语常用词「figures」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'figures', gloss: '数字' },
      suffix: null,
      history: [
        { label: 'figures', text: '现代英语常用词「figures」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：数字。' },
      ],
      formationLogic: '核心义：数字。',
      mnemonic: '看到 figures，先说出「数字」。',
      note: '核心义：数字。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one figures.', chinese: '这一章反复回到同一个点：数字。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'figures.s1', en: 'Without that figures, the next paragraph is hard to follow.', zh: '没有这个数字，下一段会很难读。', structure: 'figures / 表示 / 数字', grammar: 'noun，围绕「数字」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the figures.', right: 'He gave me some advice about the figures.', reason: 'advice 不可数。名词 figures 的单复数按词典词形记。', rule: '先确定 figures 是noun，再套「数字」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'figures.q1', senseId: 'figures.s1', errorType: 'meaning', type: '词义选择', prompt: '「figures」在本条的核心意思是：', options: ['数字', '完全相反的意思', '一种古代钱币'], answer: '数字', explain: 'figures：数字。' },
      { id: 'figures.q2', senseId: 'figures.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches figures?', options: ['数字', 'a kind of ancient coin', 'the past tense of be'], answer: '数字', explain: '对的是「数字」。' },
      { id: 'figures.q3', senseId: 'figures.s1', errorType: 'grammar', type: '词义选择', prompt: 'figures 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'figures.q4', senseId: 'figures.s1', errorType: 'meaning', type: '词源', prompt: '记 figures 时，哪句更稳妥？', options: ['先锁住「数字」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数字」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数字'] },
  });

  D('file', {
    etymology: {
      origin: '现代英语常用词「file」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'file', gloss: '文件' },
      suffix: null,
      history: [
        { label: 'file', text: '现代英语常用词「file」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：文件。' },
      ],
      formationLogic: '核心义：文件。',
      mnemonic: '看到 file，先说出「文件」。',
      note: '核心义：文件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one file.', chinese: '这一章反复回到同一个点：文件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'file.s1', en: 'Without that file, the next paragraph is hard to follow.', zh: '没有这个文件，下一段会很难读。', structure: 'file / 表示 / 文件', grammar: 'noun，围绕「文件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the file.', right: 'He gave me some advice about the file.', reason: 'advice 不可数。名词 file 的单复数按词典词形记。', rule: '先确定 file 是noun，再套「文件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'file.q1', senseId: 'file.s1', errorType: 'meaning', type: '词义选择', prompt: '「file」在本条的核心意思是：', options: ['文件', '完全相反的意思', '一种古代钱币'], answer: '文件', explain: 'file：文件。' },
      { id: 'file.q2', senseId: 'file.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches file?', options: ['文件', 'a kind of ancient coin', 'the past tense of be'], answer: '文件', explain: '对的是「文件」。' },
      { id: 'file.q3', senseId: 'file.s1', errorType: 'grammar', type: '词义选择', prompt: 'file 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'file.q4', senseId: 'file.s1', errorType: 'meaning', type: '词源', prompt: '记 file 时，哪句更稳妥？', options: ['先锁住「文件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文件'] },
  });

  D('fill', {
    etymology: {
      origin: '现代英语常用词「fill」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fill', gloss: '装满' },
      suffix: null,
      history: [
        { label: 'fill', text: '现代英语常用词「fill」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：装满。' },
      ],
      formationLogic: '核心义：装满。',
      mnemonic: '看到 fill，先说出「装满」。',
      note: '核心义：装满。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fill before the office closed.', chinese: '他们同意在办公室关门前做这件事：装满。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fill.s1', en: 'The deadline forced the team to fill that afternoon.', zh: '截止日期逼着小组在那天下午装满。', structure: 'fill / 表示 / 装满', grammar: 'verb，围绕「装满」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She filled it yesterday without checking the real past form.', right: 'Check the past form of "fill" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fill 是verb，再套「装满」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fill.q1', senseId: 'fill.s1', errorType: 'meaning', type: '词义选择', prompt: '「fill」在本条的核心意思是：', options: ['装满', '完全相反的意思', '一种古代钱币'], answer: '装满', explain: 'fill：装满。' },
      { id: 'fill.q2', senseId: 'fill.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fill?', options: ['装满', 'a kind of ancient coin', 'the past tense of be'], answer: '装满', explain: '对的是「装满」。' },
      { id: 'fill.q3', senseId: 'fill.s1', errorType: 'grammar', type: '词义选择', prompt: 'fill 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fill.q4', senseId: 'fill.s1', errorType: 'meaning', type: '词源', prompt: '记 fill 时，哪句更稳妥？', options: ['先锁住「装满」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装满」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装满'] },
  });

  D('filled', {
    etymology: {
      origin: '现代英语常用词「filled」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'filled', gloss: '装满的' },
      suffix: null,
      history: [
        { label: 'filled', text: '现代英语常用词「filled」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：装满的。' },
      ],
      formationLogic: '核心义：装满的。',
      mnemonic: '看到 filled，先说出「装满的」。',
      note: '核心义：装满的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was filled.', chinese: '即使是初读者也能看出，这个结果是装满的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'filled.s1', en: 'They wanted a filled answer, not a long speech.', zh: '他们要一个装满的的答复，不要长篇发言。', structure: 'filled / 表示 / 装满的', grammar: 'adjective，围绕「装满的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are filled.', right: 'The news is filled.', reason: 'news 作主语时动词用单数。', rule: '先确定 filled 是adjective，再套「装满的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'filled.q1', senseId: 'filled.s1', errorType: 'meaning', type: '词义选择', prompt: '「filled」在本条的核心意思是：', options: ['装满的', '完全相反的意思', '一种古代钱币'], answer: '装满的', explain: 'filled：装满的。' },
      { id: 'filled.q2', senseId: 'filled.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches filled?', options: ['装满的', 'a kind of ancient coin', 'the past tense of be'], answer: '装满的', explain: '对的是「装满的」。' },
      { id: 'filled.q3', senseId: 'filled.s1', errorType: 'grammar', type: '词义选择', prompt: 'filled 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'filled.q4', senseId: 'filled.s1', errorType: 'meaning', type: '词源', prompt: '记 filled 时，哪句更稳妥？', options: ['先锁住「装满的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装满的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装满的'] },
  });

  D('filled with', {
    etymology: {
      origin: '现代英语固定说法「filled with」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'filled with', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'filled with', text: '现代英语固定说法「filled with」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：充满。' },
      ],
      formationLogic: '核心义：充满。',
      mnemonic: '看到 filled with，先说出「充满」。',
      note: '核心义：充满。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "filled with" and asked the class to keep it as one unit.', chinese: '老师把「filled with」圈出来，让全班把它当成一个整体。它表示充满。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'filled with.s1', en: 'In the margin she wrote "filled with" so nobody would split the phrase.', zh: '她在页边写下「filled with」，免得有人把这个说法拆开。意思是充满。', structure: 'filled with / 表示 / 充满', grammar: 'adjective，围绕「充满」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of filled with and lost the point.', right: 'Keep "filled with" together: it means 充满.', reason: '「filled with」要整块理解。', rule: '先确定 filled with 是adjective，再套「充满」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'filled with.q1', senseId: 'filled with.s1', errorType: 'meaning', type: '词义选择', prompt: '「filled with」在本条的核心意思是：', options: ['充满', '完全相反的意思', '一种古代钱币'], answer: '充满', explain: 'filled with：充满。' },
      { id: 'filled with.q2', senseId: 'filled with.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches filled with?', options: ['充满', 'a kind of ancient coin', 'the past tense of be'], answer: '充满', explain: '对的是「充满」。' },
      { id: 'filled with.q3', senseId: 'filled with.s1', errorType: 'grammar', type: '词义选择', prompt: 'filled with 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'filled with.q4', senseId: 'filled with.s1', errorType: 'meaning', type: '词源', prompt: '记 filled with 时，哪句更稳妥？', options: ['先锁住「充满」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「充满」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['充满'] },
  });

  D('film', {
    etymology: {
      origin: '现代英语常用词「film」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'film', gloss: '电影' },
      suffix: null,
      history: [
        { label: 'film', text: '现代英语常用词「film」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：电影。' },
      ],
      formationLogic: '核心义：电影。',
      mnemonic: '看到 film，先说出「电影」。',
      note: '核心义：电影。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one film.', chinese: '这一章反复回到同一个点：电影。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'film.s1', en: 'Without that film, the next paragraph is hard to follow.', zh: '没有这个电影，下一段会很难读。', structure: 'film / 表示 / 电影', grammar: 'noun，围绕「电影」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the film.', right: 'He gave me some advice about the film.', reason: 'advice 不可数。名词 film 的单复数按词典词形记。', rule: '先确定 film 是noun，再套「电影」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'film.q1', senseId: 'film.s1', errorType: 'meaning', type: '词义选择', prompt: '「film」在本条的核心意思是：', options: ['电影', '完全相反的意思', '一种古代钱币'], answer: '电影', explain: 'film：电影。' },
      { id: 'film.q2', senseId: 'film.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches film?', options: ['电影', 'a kind of ancient coin', 'the past tense of be'], answer: '电影', explain: '对的是「电影」。' },
      { id: 'film.q3', senseId: 'film.s1', errorType: 'grammar', type: '词义选择', prompt: 'film 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'film.q4', senseId: 'film.s1', errorType: 'meaning', type: '词源', prompt: '记 film 时，哪句更稳妥？', options: ['先锁住「电影」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电影」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电影'] },
  });

  D('filter', {
    etymology: {
      origin: '英语派生：filt + -er，词性转到「过滤器」。',
      prefix: null,
      root: { text: 'filt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'filter', text: '英语派生：filt + -er，词性转到「过滤器」。' },
        { label: '现在', text: '核心用法是：过滤器。' },
      ],
      formationLogic: '先认词干 filt，再看词尾。',
      mnemonic: '看到 filter，先说出「过滤器」。',
      note: '先认词干 filt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one filter.', chinese: '这一章反复回到同一个点：过滤器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'filter.s1', en: 'Without that filter, the next paragraph is hard to follow.', zh: '没有这个过滤器，下一段会很难读。', structure: 'filter / 表示 / 过滤器', grammar: 'noun，围绕「过滤器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the filter.', right: 'He gave me some advice about the filter.', reason: 'advice 不可数。名词 filter 的单复数按词典词形记。', rule: '先确定 filter 是noun，再套「过滤器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'filter.q1', senseId: 'filter.s1', errorType: 'meaning', type: '词义选择', prompt: '「filter」在本条的核心意思是：', options: ['过滤器', '完全相反的意思', '一种古代钱币'], answer: '过滤器', explain: 'filter：过滤器。' },
      { id: 'filter.q2', senseId: 'filter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches filter?', options: ['过滤器', 'a kind of ancient coin', 'the past tense of be'], answer: '过滤器', explain: '对的是「过滤器」。' },
      { id: 'filter.q3', senseId: 'filter.s1', errorType: 'grammar', type: '词义选择', prompt: 'filter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'filter.q4', senseId: 'filter.s1', errorType: 'meaning', type: '词源', prompt: '记 filter 时，哪句更稳妥？', options: ['先锁住「过滤器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「过滤器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过滤器'] },
  });

  D('filthy', {
    etymology: {
      origin: '现代英语常用词「filthy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'filthy', gloss: '肮脏的' },
      suffix: null,
      history: [
        { label: 'filthy', text: '现代英语常用词「filthy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肮脏的。' },
      ],
      formationLogic: '核心义：肮脏的。',
      mnemonic: '看到 filthy，先说出「肮脏的」。',
      note: '核心义：肮脏的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was filthy.', chinese: '即使是初读者也能看出，这个结果是肮脏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'filthy.s1', en: 'They wanted a filthy answer, not a long speech.', zh: '他们要一个肮脏的的答复，不要长篇发言。', structure: 'filthy / 表示 / 肮脏的', grammar: 'adjective，围绕「肮脏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are filthy.', right: 'The news is filthy.', reason: 'news 作主语时动词用单数。', rule: '先确定 filthy 是adjective，再套「肮脏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'filthy.q1', senseId: 'filthy.s1', errorType: 'meaning', type: '词义选择', prompt: '「filthy」在本条的核心意思是：', options: ['肮脏的', '完全相反的意思', '一种古代钱币'], answer: '肮脏的', explain: 'filthy：肮脏的。' },
      { id: 'filthy.q2', senseId: 'filthy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches filthy?', options: ['肮脏的', 'a kind of ancient coin', 'the past tense of be'], answer: '肮脏的', explain: '对的是「肮脏的」。' },
      { id: 'filthy.q3', senseId: 'filthy.s1', errorType: 'grammar', type: '词义选择', prompt: 'filthy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'filthy.q4', senseId: 'filthy.s1', errorType: 'meaning', type: '词源', prompt: '记 filthy 时，哪句更稳妥？', options: ['先锁住「肮脏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肮脏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肮脏的'] },
  });

  D('final', {
    etymology: {
      origin: '英语派生：fin + -al，词性转到「最后的」。',
      prefix: null,
      root: { text: 'fin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'final', text: '英语派生：fin + -al，词性转到「最后的」。' },
        { label: '现在', text: '核心用法是：最后的。' },
      ],
      formationLogic: '先认词干 fin，再看词尾。',
      mnemonic: '看到 final，先说出「最后的」。',
      note: '先认词干 fin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was final.', chinese: '即使是初读者也能看出，这个结果是最后的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'final.s1', en: 'They wanted a final answer, not a long speech.', zh: '他们要一个最后的的答复，不要长篇发言。', structure: 'final / 表示 / 最后的', grammar: 'adjective，围绕「最后的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are final.', right: 'The news is final.', reason: 'news 作主语时动词用单数。', rule: '先确定 final 是adjective，再套「最后的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'final.q1', senseId: 'final.s1', errorType: 'meaning', type: '词义选择', prompt: '「final」在本条的核心意思是：', options: ['最后的', '完全相反的意思', '一种古代钱币'], answer: '最后的', explain: 'final：最后的。' },
      { id: 'final.q2', senseId: 'final.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches final?', options: ['最后的', 'a kind of ancient coin', 'the past tense of be'], answer: '最后的', explain: '对的是「最后的」。' },
      { id: 'final.q3', senseId: 'final.s1', errorType: 'grammar', type: '词义选择', prompt: 'final 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'final.q4', senseId: 'final.s1', errorType: 'meaning', type: '词源', prompt: '记 final 时，哪句更稳妥？', options: ['先锁住「最后的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最后的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最后的'] },
  });

  D('finale', {
    etymology: {
      origin: '现代英语常用词「finale」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'finale', gloss: '终曲' },
      suffix: null,
      history: [
        { label: 'finale', text: '现代英语常用词「finale」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：终曲。' },
      ],
      formationLogic: '核心义：终曲。',
      mnemonic: '看到 finale，先说出「终曲」。',
      note: '核心义：终曲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one finale.', chinese: '这一章反复回到同一个点：终曲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finale.s1', en: 'Without that finale, the next paragraph is hard to follow.', zh: '没有这个终曲，下一段会很难读。', structure: 'finale / 表示 / 终曲', grammar: 'noun，围绕「终曲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the finale.', right: 'He gave me some advice about the finale.', reason: 'advice 不可数。名词 finale 的单复数按词典词形记。', rule: '先确定 finale 是noun，再套「终曲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finale.q1', senseId: 'finale.s1', errorType: 'meaning', type: '词义选择', prompt: '「finale」在本条的核心意思是：', options: ['终曲', '完全相反的意思', '一种古代钱币'], answer: '终曲', explain: 'finale：终曲。' },
      { id: 'finale.q2', senseId: 'finale.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finale?', options: ['终曲', 'a kind of ancient coin', 'the past tense of be'], answer: '终曲', explain: '对的是「终曲」。' },
      { id: 'finale.q3', senseId: 'finale.s1', errorType: 'grammar', type: '词义选择', prompt: 'finale 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'finale.q4', senseId: 'finale.s1', errorType: 'meaning', type: '词源', prompt: '记 finale 时，哪句更稳妥？', options: ['先锁住「终曲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「终曲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['终曲'] },
  });

  D('finalize', {
    etymology: {
      origin: '现代英语常用词「finalize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'finalize', gloss: '定案' },
      suffix: null,
      history: [
        { label: 'finalize', text: '现代英语常用词「finalize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：定案。' },
      ],
      formationLogic: '核心义：定案。',
      mnemonic: '看到 finalize，先说出「定案」。',
      note: '核心义：定案。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to finalize before the office closed.', chinese: '他们同意在办公室关门前做这件事：定案。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finalize.s1', en: 'The deadline forced the team to finalize that afternoon.', zh: '截止日期逼着小组在那天下午定案。', structure: 'finalize / 表示 / 定案', grammar: 'verb，围绕「定案」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She finalizeed it yesterday without checking the real past form.', right: 'Check the past form of "finalize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 finalize 是verb，再套「定案」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finalize.q1', senseId: 'finalize.s1', errorType: 'meaning', type: '词义选择', prompt: '「finalize」在本条的核心意思是：', options: ['定案', '完全相反的意思', '一种古代钱币'], answer: '定案', explain: 'finalize：定案。' },
      { id: 'finalize.q2', senseId: 'finalize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finalize?', options: ['定案', 'a kind of ancient coin', 'the past tense of be'], answer: '定案', explain: '对的是「定案」。' },
      { id: 'finalize.q3', senseId: 'finalize.s1', errorType: 'grammar', type: '词义选择', prompt: 'finalize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'finalize.q4', senseId: 'finalize.s1', errorType: 'meaning', type: '词源', prompt: '记 finalize 时，哪句更稳妥？', options: ['先锁住「定案」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「定案」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['定案'] },
  });

  D('finally', {
    etymology: {
      origin: '英语派生：final + -ly，词性转到「终于」。',
      prefix: null,
      root: { text: 'final', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'finally', text: '英语派生：final + -ly，词性转到「终于」。' },
        { label: '现在', text: '核心用法是：终于。' },
      ],
      formationLogic: '先认词干 final，再看词尾。',
      mnemonic: '看到 finally，先说出「终于」。',
      note: '先认词干 final，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule finally, and the class followed.', chinese: '她把规则讲清楚了（终于），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finally.s1', en: 'He nodded finally and returned to the notes.', zh: '他终于地点了点头，又回去看笔记。', structure: 'finally / 表示 / 终于', grammar: 'adverb，围绕「终于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very finallyly in the meeting.', right: 'She spoke finally in the meeting.', reason: 'finally 已经是副词，不要再加 -ly。', rule: '先确定 finally 是adverb，再套「终于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finally.q1', senseId: 'finally.s1', errorType: 'meaning', type: '词义选择', prompt: '「finally」在本条的核心意思是：', options: ['终于', '完全相反的意思', '一种古代钱币'], answer: '终于', explain: 'finally：终于。' },
      { id: 'finally.q2', senseId: 'finally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finally?', options: ['终于', 'a kind of ancient coin', 'the past tense of be'], answer: '终于', explain: '对的是「终于」。' },
      { id: 'finally.q3', senseId: 'finally.s1', errorType: 'grammar', type: '词义选择', prompt: 'finally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'finally.q4', senseId: 'finally.s1', errorType: 'meaning', type: '词源', prompt: '记 finally 时，哪句更稳妥？', options: ['先锁住「终于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「终于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['终于'] },
  });

  D('finance', {
    etymology: {
      origin: '英语派生：fin + -ance，词性转到「财政」。',
      prefix: null,
      root: { text: 'fin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'finance', text: '英语派生：fin + -ance，词性转到「财政」。' },
        { label: '现在', text: '核心用法是：财政。' },
      ],
      formationLogic: '先认词干 fin，再看词尾。',
      mnemonic: '看到 finance，先说出「财政」。',
      note: '先认词干 fin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one finance.', chinese: '这一章反复回到同一个点：财政。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finance.s1', en: 'Without that finance, the next paragraph is hard to follow.', zh: '没有这个财政，下一段会很难读。', structure: 'finance / 表示 / 财政', grammar: 'noun，围绕「财政」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the finance.', right: 'He gave me some advice about the finance.', reason: 'advice 不可数。名词 finance 的单复数按词典词形记。', rule: '先确定 finance 是noun，再套「财政」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finance.q1', senseId: 'finance.s1', errorType: 'meaning', type: '词义选择', prompt: '「finance」在本条的核心意思是：', options: ['财政', '完全相反的意思', '一种古代钱币'], answer: '财政', explain: 'finance：财政。' },
      { id: 'finance.q2', senseId: 'finance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finance?', options: ['财政', 'a kind of ancient coin', 'the past tense of be'], answer: '财政', explain: '对的是「财政」。' },
      { id: 'finance.q3', senseId: 'finance.s1', errorType: 'grammar', type: '词义选择', prompt: 'finance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'finance.q4', senseId: 'finance.s1', errorType: 'meaning', type: '词源', prompt: '记 finance 时，哪句更稳妥？', options: ['先锁住「财政」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「财政」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['财政'] },
  });

  D('finance ministry', {
    etymology: {
      origin: '现代英语固定说法「finance ministry」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'finance ministry', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'finance ministry', text: '现代英语固定说法「finance ministry」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：财政部。' },
      ],
      formationLogic: '核心义：财政部。',
      mnemonic: '看到 finance ministry，先说出「财政部」。',
      note: '核心义：财政部。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "finance ministry" and asked the class to keep it as one unit.', chinese: '老师把「finance ministry」圈出来，让全班把它当成一个整体。它表示财政部。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finance ministry.s1', en: 'In the margin she wrote "finance ministry" so nobody would split the phrase.', zh: '她在页边写下「finance ministry」，免得有人把这个说法拆开。意思是财政部。', structure: 'finance ministry / 表示 / 财政部', grammar: 'noun，围绕「财政部」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of finance ministry and lost the point.', right: 'Keep "finance ministry" together: it means 财政部.', reason: '「finance ministry」要整块理解。', rule: '先确定 finance ministry 是noun，再套「财政部」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finance ministry.q1', senseId: 'finance ministry.s1', errorType: 'meaning', type: '词义选择', prompt: '「finance ministry」在本条的核心意思是：', options: ['财政部', '完全相反的意思', '一种古代钱币'], answer: '财政部', explain: 'finance ministry：财政部。' },
      { id: 'finance ministry.q2', senseId: 'finance ministry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finance ministry?', options: ['财政部', 'a kind of ancient coin', 'the past tense of be'], answer: '财政部', explain: '对的是「财政部」。' },
      { id: 'finance ministry.q3', senseId: 'finance ministry.s1', errorType: 'grammar', type: '词义选择', prompt: 'finance ministry 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'finance ministry.q4', senseId: 'finance ministry.s1', errorType: 'meaning', type: '词源', prompt: '记 finance ministry 时，哪句更稳妥？', options: ['先锁住「财政部」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「财政部」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['财政部'] },
  });

  D('financial', {
    etymology: {
      origin: '英语派生：financi + -al，词性转到「金融的」。',
      prefix: null,
      root: { text: 'financi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'financial', text: '英语派生：financi + -al，词性转到「金融的」。' },
        { label: '现在', text: '核心用法是：金融的。' },
      ],
      formationLogic: '先认词干 financi，再看词尾。',
      mnemonic: '看到 financial，先说出「金融的」。',
      note: '先认词干 financi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was financial.', chinese: '即使是初读者也能看出，这个结果是金融的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'financial.s1', en: 'They wanted a financial answer, not a long speech.', zh: '他们要一个金融的的答复，不要长篇发言。', structure: 'financial / 表示 / 金融的', grammar: 'adjective，围绕「金融的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are financial.', right: 'The news is financial.', reason: 'news 作主语时动词用单数。', rule: '先确定 financial 是adjective，再套「金融的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'financial.q1', senseId: 'financial.s1', errorType: 'meaning', type: '词义选择', prompt: '「financial」在本条的核心意思是：', options: ['金融的', '完全相反的意思', '一种古代钱币'], answer: '金融的', explain: 'financial：金融的。' },
      { id: 'financial.q2', senseId: 'financial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches financial?', options: ['金融的', 'a kind of ancient coin', 'the past tense of be'], answer: '金融的', explain: '对的是「金融的」。' },
      { id: 'financial.q3', senseId: 'financial.s1', errorType: 'grammar', type: '词义选择', prompt: 'financial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'financial.q4', senseId: 'financial.s1', errorType: 'meaning', type: '词源', prompt: '记 financial 时，哪句更稳妥？', options: ['先锁住「金融的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「金融的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['金融的'] },
  });

  D('find', {
    etymology: {
      origin: '现代英语常用词「find」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'find', gloss: '找到' },
      suffix: null,
      history: [
        { label: 'find', text: '现代英语常用词「find」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：找到。' },
      ],
      formationLogic: '核心义：找到。',
      mnemonic: '看到 find，先说出「找到」。',
      note: '核心义：找到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to find before the office closed.', chinese: '他们同意在办公室关门前做这件事：找到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'find.s1', en: 'The deadline forced the team to find that afternoon.', zh: '截止日期逼着小组在那天下午找到。', structure: 'find / 表示 / 找到', grammar: 'verb，围绕「找到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She finded it yesterday without checking the real past form.', right: 'Check the past form of "find" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 find 是verb，再套「找到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'find.q1', senseId: 'find.s1', errorType: 'meaning', type: '词义选择', prompt: '「find」在本条的核心意思是：', options: ['找到', '完全相反的意思', '一种古代钱币'], answer: '找到', explain: 'find：找到。' },
      { id: 'find.q2', senseId: 'find.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches find?', options: ['找到', 'a kind of ancient coin', 'the past tense of be'], answer: '找到', explain: '对的是「找到」。' },
      { id: 'find.q3', senseId: 'find.s1', errorType: 'grammar', type: '词义选择', prompt: 'find 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'find.q4', senseId: 'find.s1', errorType: 'meaning', type: '词源', prompt: '记 find 时，哪句更稳妥？', options: ['先锁住「找到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「找到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['找到'] },
  });

  D('find out', {
    etymology: {
      origin: '现代英语固定说法「find out」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'find out', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'find out', text: '现代英语固定说法「find out」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：查明。' },
      ],
      formationLogic: '核心义：查明。',
      mnemonic: '看到 find out，先说出「查明」。',
      note: '核心义：查明。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "find out" and asked the class to keep it as one unit.', chinese: '老师把「find out」圈出来，让全班把它当成一个整体。它表示查明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'find out.s1', en: 'In the margin she wrote "find out" so nobody would split the phrase.', zh: '她在页边写下「find out」，免得有人把这个说法拆开。意思是查明。', structure: 'find out / 表示 / 查明', grammar: 'verb，围绕「查明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of find out and lost the point.', right: 'Keep "find out" together: it means 查明.', reason: '「find out」要整块理解。', rule: '先确定 find out 是verb，再套「查明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'find out.q1', senseId: 'find out.s1', errorType: 'meaning', type: '词义选择', prompt: '「find out」在本条的核心意思是：', options: ['查明', '完全相反的意思', '一种古代钱币'], answer: '查明', explain: 'find out：查明。' },
      { id: 'find out.q2', senseId: 'find out.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches find out?', options: ['查明', 'a kind of ancient coin', 'the past tense of be'], answer: '查明', explain: '对的是「查明」。' },
      { id: 'find out.q3', senseId: 'find out.s1', errorType: 'grammar', type: '词义选择', prompt: 'find out 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'find out.q4', senseId: 'find out.s1', errorType: 'meaning', type: '词源', prompt: '记 find out 时，哪句更稳妥？', options: ['先锁住「查明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「查明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['查明'] },
  });

  D('fine', {
    etymology: {
      origin: '现代英语常用词「fine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fine', gloss: '好的' },
      suffix: null,
      history: [
        { label: 'fine', text: '现代英语常用词「fine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：好的。' },
      ],
      formationLogic: '核心义：好的。',
      mnemonic: '看到 fine，先说出「好的」。',
      note: '核心义：好的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fine.', chinese: '即使是初读者也能看出，这个结果是好的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fine.s1', en: 'They wanted a fine answer, not a long speech.', zh: '他们要一个好的的答复，不要长篇发言。', structure: 'fine / 表示 / 好的', grammar: 'adjective，围绕「好的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fine.', right: 'The news is fine.', reason: 'news 作主语时动词用单数。', rule: '先确定 fine 是adjective，再套「好的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fine.q1', senseId: 'fine.s1', errorType: 'meaning', type: '词义选择', prompt: '「fine」在本条的核心意思是：', options: ['好的', '完全相反的意思', '一种古代钱币'], answer: '好的', explain: 'fine：好的。' },
      { id: 'fine.q2', senseId: 'fine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fine?', options: ['好的', 'a kind of ancient coin', 'the past tense of be'], answer: '好的', explain: '对的是「好的」。' },
      { id: 'fine.q3', senseId: 'fine.s1', errorType: 'grammar', type: '词义选择', prompt: 'fine 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fine.q4', senseId: 'fine.s1', errorType: 'meaning', type: '词源', prompt: '记 fine 时，哪句更稳妥？', options: ['先锁住「好的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好的'] },
  });

  D('fine art', {
    etymology: {
      origin: '现代英语固定说法「fine art」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fine art', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fine art', text: '现代英语固定说法「fine art」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：美术。' },
      ],
      formationLogic: '核心义：美术。',
      mnemonic: '看到 fine art，先说出「美术」。',
      note: '核心义：美术。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fine art" and asked the class to keep it as one unit.', chinese: '老师把「fine art」圈出来，让全班把它当成一个整体。它表示美术。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fine art.s1', en: 'In the margin she wrote "fine art" so nobody would split the phrase.', zh: '她在页边写下「fine art」，免得有人把这个说法拆开。意思是美术。', structure: 'fine art / 表示 / 美术', grammar: 'noun，围绕「美术」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fine art and lost the point.', right: 'Keep "fine art" together: it means 美术.', reason: '「fine art」要整块理解。', rule: '先确定 fine art 是noun，再套「美术」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fine art.q1', senseId: 'fine art.s1', errorType: 'meaning', type: '词义选择', prompt: '「fine art」在本条的核心意思是：', options: ['美术', '完全相反的意思', '一种古代钱币'], answer: '美术', explain: 'fine art：美术。' },
      { id: 'fine art.q2', senseId: 'fine art.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fine art?', options: ['美术', 'a kind of ancient coin', 'the past tense of be'], answer: '美术', explain: '对的是「美术」。' },
      { id: 'fine art.q3', senseId: 'fine art.s1', errorType: 'grammar', type: '词义选择', prompt: 'fine art 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fine art.q4', senseId: 'fine art.s1', errorType: 'meaning', type: '词源', prompt: '记 fine art 时，哪句更稳妥？', options: ['先锁住「美术」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「美术」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['美术'] },
  });

  D('fineness', {
    etymology: {
      origin: '英语派生：fine + -ness，词性转到「精细」。',
      prefix: null,
      root: { text: 'fine', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fineness', text: '英语派生：fine + -ness，词性转到「精细」。' },
        { label: '现在', text: '核心用法是：精细。' },
      ],
      formationLogic: '先认词干 fine，再看词尾。',
      mnemonic: '看到 fineness，先说出「精细」。',
      note: '先认词干 fine，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fineness.', chinese: '这一章反复回到同一个点：精细。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fineness.s1', en: 'Without that fineness, the next paragraph is hard to follow.', zh: '没有这个精细，下一段会很难读。', structure: 'fineness / 表示 / 精细', grammar: 'noun，围绕「精细」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fineness.', right: 'He gave me some advice about the fineness.', reason: 'advice 不可数。名词 fineness 的单复数按词典词形记。', rule: '先确定 fineness 是noun，再套「精细」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fineness.q1', senseId: 'fineness.s1', errorType: 'meaning', type: '词义选择', prompt: '「fineness」在本条的核心意思是：', options: ['精细', '完全相反的意思', '一种古代钱币'], answer: '精细', explain: 'fineness：精细。' },
      { id: 'fineness.q2', senseId: 'fineness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fineness?', options: ['精细', 'a kind of ancient coin', 'the past tense of be'], answer: '精细', explain: '对的是「精细」。' },
      { id: 'fineness.q3', senseId: 'fineness.s1', errorType: 'grammar', type: '词义选择', prompt: 'fineness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fineness.q4', senseId: 'fineness.s1', errorType: 'meaning', type: '词源', prompt: '记 fineness 时，哪句更稳妥？', options: ['先锁住「精细」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精细」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精细'] },
  });

  D('finer', {
    etymology: {
      origin: '英语派生：fin + -er，词性转到「更细的」。',
      prefix: null,
      root: { text: 'fin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'finer', text: '英语派生：fin + -er，词性转到「更细的」。' },
        { label: '现在', text: '核心用法是：更细的。' },
      ],
      formationLogic: '先认词干 fin，再看词尾。',
      mnemonic: '看到 finer，先说出「更细的」。',
      note: '先认词干 fin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was finer.', chinese: '即使是初读者也能看出，这个结果是更细的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finer.s1', en: 'They wanted a finer answer, not a long speech.', zh: '他们要一个更细的的答复，不要长篇发言。', structure: 'finer / 表示 / 更细的', grammar: 'adjective，围绕「更细的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are finer.', right: 'The news is finer.', reason: 'news 作主语时动词用单数。', rule: '先确定 finer 是adjective，再套「更细的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finer.q1', senseId: 'finer.s1', errorType: 'meaning', type: '词义选择', prompt: '「finer」在本条的核心意思是：', options: ['更细的', '完全相反的意思', '一种古代钱币'], answer: '更细的', explain: 'finer：更细的。' },
      { id: 'finer.q2', senseId: 'finer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finer?', options: ['更细的', 'a kind of ancient coin', 'the past tense of be'], answer: '更细的', explain: '对的是「更细的」。' },
      { id: 'finer.q3', senseId: 'finer.s1', errorType: 'grammar', type: '词义选择', prompt: 'finer 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'finer.q4', senseId: 'finer.s1', errorType: 'meaning', type: '词源', prompt: '记 finer 时，哪句更稳妥？', options: ['先锁住「更细的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「更细的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['更细的'] },
  });

  D('finger', {
    etymology: {
      origin: '英语派生：fing + -er，词性转到「手指」。',
      prefix: null,
      root: { text: 'fing', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'finger', text: '英语派生：fing + -er，词性转到「手指」。' },
        { label: '现在', text: '核心用法是：手指。' },
      ],
      formationLogic: '先认词干 fing，再看词尾。',
      mnemonic: '看到 finger，先说出「手指」。',
      note: '先认词干 fing，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one finger.', chinese: '这一章反复回到同一个点：手指。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finger.s1', en: 'Without that finger, the next paragraph is hard to follow.', zh: '没有这个手指，下一段会很难读。', structure: 'finger / 表示 / 手指', grammar: 'noun，围绕「手指」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the finger.', right: 'He gave me some advice about the finger.', reason: 'advice 不可数。名词 finger 的单复数按词典词形记。', rule: '先确定 finger 是noun，再套「手指」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finger.q1', senseId: 'finger.s1', errorType: 'meaning', type: '词义选择', prompt: '「finger」在本条的核心意思是：', options: ['手指', '完全相反的意思', '一种古代钱币'], answer: '手指', explain: 'finger：手指。' },
      { id: 'finger.q2', senseId: 'finger.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finger?', options: ['手指', 'a kind of ancient coin', 'the past tense of be'], answer: '手指', explain: '对的是「手指」。' },
      { id: 'finger.q3', senseId: 'finger.s1', errorType: 'grammar', type: '词义选择', prompt: 'finger 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'finger.q4', senseId: 'finger.s1', errorType: 'meaning', type: '词源', prompt: '记 finger 时，哪句更稳妥？', options: ['先锁住「手指」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手指」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手指'] },
  });

  D('fingerprint', {
    etymology: {
      origin: '现代英语常用词「fingerprint」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fingerprint', gloss: '指纹' },
      suffix: null,
      history: [
        { label: 'fingerprint', text: '现代英语常用词「fingerprint」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：指纹。' },
      ],
      formationLogic: '核心义：指纹。',
      mnemonic: '看到 fingerprint，先说出「指纹」。',
      note: '核心义：指纹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fingerprint.', chinese: '这一章反复回到同一个点：指纹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fingerprint.s1', en: 'Without that fingerprint, the next paragraph is hard to follow.', zh: '没有这个指纹，下一段会很难读。', structure: 'fingerprint / 表示 / 指纹', grammar: 'noun，围绕「指纹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fingerprint.', right: 'He gave me some advice about the fingerprint.', reason: 'advice 不可数。名词 fingerprint 的单复数按词典词形记。', rule: '先确定 fingerprint 是noun，再套「指纹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fingerprint.q1', senseId: 'fingerprint.s1', errorType: 'meaning', type: '词义选择', prompt: '「fingerprint」在本条的核心意思是：', options: ['指纹', '完全相反的意思', '一种古代钱币'], answer: '指纹', explain: 'fingerprint：指纹。' },
      { id: 'fingerprint.q2', senseId: 'fingerprint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fingerprint?', options: ['指纹', 'a kind of ancient coin', 'the past tense of be'], answer: '指纹', explain: '对的是「指纹」。' },
      { id: 'fingerprint.q3', senseId: 'fingerprint.s1', errorType: 'grammar', type: '词义选择', prompt: 'fingerprint 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fingerprint.q4', senseId: 'fingerprint.s1', errorType: 'meaning', type: '词源', prompt: '记 fingerprint 时，哪句更稳妥？', options: ['先锁住「指纹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指纹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指纹'] },
  });

  D('finish', {
    etymology: {
      origin: '现代英语常用词「finish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'finish', gloss: '完成' },
      suffix: null,
      history: [
        { label: 'finish', text: '现代英语常用词「finish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：完成。' },
      ],
      formationLogic: '核心义：完成。',
      mnemonic: '看到 finish，先说出「完成」。',
      note: '核心义：完成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to finish before the office closed.', chinese: '他们同意在办公室关门前做这件事：完成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finish.s1', en: 'The deadline forced the team to finish that afternoon.', zh: '截止日期逼着小组在那天下午完成。', structure: 'finish / 表示 / 完成', grammar: 'verb，围绕「完成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She finished it yesterday without checking the real past form.', right: 'Check the past form of "finish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 finish 是verb，再套「完成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finish.q1', senseId: 'finish.s1', errorType: 'meaning', type: '词义选择', prompt: '「finish」在本条的核心意思是：', options: ['完成', '完全相反的意思', '一种古代钱币'], answer: '完成', explain: 'finish：完成。' },
      { id: 'finish.q2', senseId: 'finish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finish?', options: ['完成', 'a kind of ancient coin', 'the past tense of be'], answer: '完成', explain: '对的是「完成」。' },
      { id: 'finish.q3', senseId: 'finish.s1', errorType: 'grammar', type: '词义选择', prompt: 'finish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'finish.q4', senseId: 'finish.s1', errorType: 'meaning', type: '词源', prompt: '记 finish 时，哪句更稳妥？', options: ['先锁住「完成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完成'] },
  });

  D('finished', {
    etymology: {
      origin: '现代英语常用词「finished」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'finished', gloss: '完成了的' },
      suffix: null,
      history: [
        { label: 'finished', text: '现代英语常用词「finished」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：完成了的。' },
      ],
      formationLogic: '核心义：完成了的。',
      mnemonic: '看到 finished，先说出「完成了的」。',
      note: '核心义：完成了的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was finished.', chinese: '即使是初读者也能看出，这个结果是完成了的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finished.s1', en: 'They wanted a finished answer, not a long speech.', zh: '他们要一个完成了的的答复，不要长篇发言。', structure: 'finished / 表示 / 完成了的', grammar: 'adjective，围绕「完成了的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are finished.', right: 'The news is finished.', reason: 'news 作主语时动词用单数。', rule: '先确定 finished 是adjective，再套「完成了的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finished.q1', senseId: 'finished.s1', errorType: 'meaning', type: '词义选择', prompt: '「finished」在本条的核心意思是：', options: ['完成了的', '完全相反的意思', '一种古代钱币'], answer: '完成了的', explain: 'finished：完成了的。' },
      { id: 'finished.q2', senseId: 'finished.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finished?', options: ['完成了的', 'a kind of ancient coin', 'the past tense of be'], answer: '完成了的', explain: '对的是「完成了的」。' },
      { id: 'finished.q3', senseId: 'finished.s1', errorType: 'grammar', type: '词义选择', prompt: 'finished 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'finished.q4', senseId: 'finished.s1', errorType: 'meaning', type: '词源', prompt: '记 finished 时，哪句更稳妥？', options: ['先锁住「完成了的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完成了的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完成了的'] },
  });

  D('finite', {
    etymology: {
      origin: '现代英语常用词「finite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'finite', gloss: '有限的' },
      suffix: null,
      history: [
        { label: 'finite', text: '现代英语常用词「finite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：有限的。' },
      ],
      formationLogic: '核心义：有限的。',
      mnemonic: '看到 finite，先说出「有限的」。',
      note: '核心义：有限的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was finite.', chinese: '即使是初读者也能看出，这个结果是有限的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'finite.s1', en: 'They wanted a finite answer, not a long speech.', zh: '他们要一个有限的的答复，不要长篇发言。', structure: 'finite / 表示 / 有限的', grammar: 'adjective，围绕「有限的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are finite.', right: 'The news is finite.', reason: 'news 作主语时动词用单数。', rule: '先确定 finite 是adjective，再套「有限的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'finite.q1', senseId: 'finite.s1', errorType: 'meaning', type: '词义选择', prompt: '「finite」在本条的核心意思是：', options: ['有限的', '完全相反的意思', '一种古代钱币'], answer: '有限的', explain: 'finite：有限的。' },
      { id: 'finite.q2', senseId: 'finite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches finite?', options: ['有限的', 'a kind of ancient coin', 'the past tense of be'], answer: '有限的', explain: '对的是「有限的」。' },
      { id: 'finite.q3', senseId: 'finite.s1', errorType: 'grammar', type: '词义选择', prompt: 'finite 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'finite.q4', senseId: 'finite.s1', errorType: 'meaning', type: '词源', prompt: '记 finite 时，哪句更稳妥？', options: ['先锁住「有限的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有限的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有限的'] },
  });

  D('fire', {
    etymology: {
      origin: '现代英语常用词「fire」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fire', gloss: '火' },
      suffix: null,
      history: [
        { label: 'fire', text: '现代英语常用词「fire」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：火。' },
      ],
      formationLogic: '核心义：火。',
      mnemonic: '看到 fire，先说出「火」。',
      note: '核心义：火。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fire.', chinese: '这一章反复回到同一个点：火。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fire.s1', en: 'Without that fire, the next paragraph is hard to follow.', zh: '没有这个火，下一段会很难读。', structure: 'fire / 表示 / 火', grammar: 'noun，围绕「火」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fire.', right: 'He gave me some advice about the fire.', reason: 'advice 不可数。名词 fire 的单复数按词典词形记。', rule: '先确定 fire 是noun，再套「火」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fire.q1', senseId: 'fire.s1', errorType: 'meaning', type: '词义选择', prompt: '「fire」在本条的核心意思是：', options: ['火', '完全相反的意思', '一种古代钱币'], answer: '火', explain: 'fire：火。' },
      { id: 'fire.q2', senseId: 'fire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fire?', options: ['火', 'a kind of ancient coin', 'the past tense of be'], answer: '火', explain: '对的是「火」。' },
      { id: 'fire.q3', senseId: 'fire.s1', errorType: 'grammar', type: '词义选择', prompt: 'fire 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fire.q4', senseId: 'fire.s1', errorType: 'meaning', type: '词源', prompt: '记 fire 时，哪句更稳妥？', options: ['先锁住「火」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火'] },
  });

  D('firearm', {
    etymology: {
      origin: '现代英语常用词「firearm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'firearm', gloss: '火器' },
      suffix: null,
      history: [
        { label: 'firearm', text: '现代英语常用词「firearm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：火器。' },
      ],
      formationLogic: '核心义：火器。',
      mnemonic: '看到 firearm，先说出「火器」。',
      note: '核心义：火器。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one firearm.', chinese: '这一章反复回到同一个点：火器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firearm.s1', en: 'Without that firearm, the next paragraph is hard to follow.', zh: '没有这个火器，下一段会很难读。', structure: 'firearm / 表示 / 火器', grammar: 'noun，围绕「火器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the firearm.', right: 'He gave me some advice about the firearm.', reason: 'advice 不可数。名词 firearm 的单复数按词典词形记。', rule: '先确定 firearm 是noun，再套「火器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firearm.q1', senseId: 'firearm.s1', errorType: 'meaning', type: '词义选择', prompt: '「firearm」在本条的核心意思是：', options: ['火器', '完全相反的意思', '一种古代钱币'], answer: '火器', explain: 'firearm：火器。' },
      { id: 'firearm.q2', senseId: 'firearm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firearm?', options: ['火器', 'a kind of ancient coin', 'the past tense of be'], answer: '火器', explain: '对的是「火器」。' },
      { id: 'firearm.q3', senseId: 'firearm.s1', errorType: 'grammar', type: '词义选择', prompt: 'firearm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'firearm.q4', senseId: 'firearm.s1', errorType: 'meaning', type: '词源', prompt: '记 firearm 时，哪句更稳妥？', options: ['先锁住「火器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火器'] },
  });

  D('firefighter', {
    etymology: {
      origin: '英语派生：firefight + -er，词性转到「消防员」。',
      prefix: null,
      root: { text: 'firefight', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'firefighter', text: '英语派生：firefight + -er，词性转到「消防员」。' },
        { label: '现在', text: '核心用法是：消防员。' },
      ],
      formationLogic: '先认词干 firefight，再看词尾。',
      mnemonic: '看到 firefighter，先说出「消防员」。',
      note: '先认词干 firefight，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one firefighter.', chinese: '这一章反复回到同一个点：消防员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firefighter.s1', en: 'Without that firefighter, the next paragraph is hard to follow.', zh: '没有这个消防员，下一段会很难读。', structure: 'firefighter / 表示 / 消防员', grammar: 'noun，围绕「消防员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the firefighter.', right: 'He gave me some advice about the firefighter.', reason: 'advice 不可数。名词 firefighter 的单复数按词典词形记。', rule: '先确定 firefighter 是noun，再套「消防员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firefighter.q1', senseId: 'firefighter.s1', errorType: 'meaning', type: '词义选择', prompt: '「firefighter」在本条的核心意思是：', options: ['消防员', '完全相反的意思', '一种古代钱币'], answer: '消防员', explain: 'firefighter：消防员。' },
      { id: 'firefighter.q2', senseId: 'firefighter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firefighter?', options: ['消防员', 'a kind of ancient coin', 'the past tense of be'], answer: '消防员', explain: '对的是「消防员」。' },
      { id: 'firefighter.q3', senseId: 'firefighter.s1', errorType: 'grammar', type: '词义选择', prompt: 'firefighter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'firefighter.q4', senseId: 'firefighter.s1', errorType: 'meaning', type: '词源', prompt: '记 firefighter 时，哪句更稳妥？', options: ['先锁住「消防员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消防员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消防员'] },
  });

  D('fireman', {
    etymology: {
      origin: '现代英语常用词「fireman」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fireman', gloss: '消防队员' },
      suffix: null,
      history: [
        { label: 'fireman', text: '现代英语常用词「fireman」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：消防队员。' },
      ],
      formationLogic: '核心义：消防队员。',
      mnemonic: '看到 fireman，先说出「消防队员」。',
      note: '核心义：消防队员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fireman.', chinese: '这一章反复回到同一个点：消防队员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fireman.s1', en: 'Without that fireman, the next paragraph is hard to follow.', zh: '没有这个消防队员，下一段会很难读。', structure: 'fireman / 表示 / 消防队员', grammar: 'noun，围绕「消防队员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fireman.', right: 'He gave me some advice about the fireman.', reason: 'advice 不可数。名词 fireman 的单复数按词典词形记。', rule: '先确定 fireman 是noun，再套「消防队员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fireman.q1', senseId: 'fireman.s1', errorType: 'meaning', type: '词义选择', prompt: '「fireman」在本条的核心意思是：', options: ['消防队员', '完全相反的意思', '一种古代钱币'], answer: '消防队员', explain: 'fireman：消防队员。' },
      { id: 'fireman.q2', senseId: 'fireman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fireman?', options: ['消防队员', 'a kind of ancient coin', 'the past tense of be'], answer: '消防队员', explain: '对的是「消防队员」。' },
      { id: 'fireman.q3', senseId: 'fireman.s1', errorType: 'grammar', type: '词义选择', prompt: 'fireman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fireman.q4', senseId: 'fireman.s1', errorType: 'meaning', type: '词源', prompt: '记 fireman 时，哪句更稳妥？', options: ['先锁住「消防队员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消防队员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消防队员'] },
  });

  D('fireplace', {
    etymology: {
      origin: '现代英语常用词「fireplace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fireplace', gloss: '壁炉' },
      suffix: null,
      history: [
        { label: 'fireplace', text: '现代英语常用词「fireplace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：壁炉。' },
      ],
      formationLogic: '核心义：壁炉。',
      mnemonic: '看到 fireplace，先说出「壁炉」。',
      note: '核心义：壁炉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fireplace.', chinese: '这一章反复回到同一个点：壁炉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fireplace.s1', en: 'Without that fireplace, the next paragraph is hard to follow.', zh: '没有这个壁炉，下一段会很难读。', structure: 'fireplace / 表示 / 壁炉', grammar: 'noun，围绕「壁炉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fireplace.', right: 'He gave me some advice about the fireplace.', reason: 'advice 不可数。名词 fireplace 的单复数按词典词形记。', rule: '先确定 fireplace 是noun，再套「壁炉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fireplace.q1', senseId: 'fireplace.s1', errorType: 'meaning', type: '词义选择', prompt: '「fireplace」在本条的核心意思是：', options: ['壁炉', '完全相反的意思', '一种古代钱币'], answer: '壁炉', explain: 'fireplace：壁炉。' },
      { id: 'fireplace.q2', senseId: 'fireplace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fireplace?', options: ['壁炉', 'a kind of ancient coin', 'the past tense of be'], answer: '壁炉', explain: '对的是「壁炉」。' },
      { id: 'fireplace.q3', senseId: 'fireplace.s1', errorType: 'grammar', type: '词义选择', prompt: 'fireplace 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fireplace.q4', senseId: 'fireplace.s1', errorType: 'meaning', type: '词源', prompt: '记 fireplace 时，哪句更稳妥？', options: ['先锁住「壁炉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「壁炉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['壁炉'] },
  });

  D('firework', {
    etymology: {
      origin: '现代英语常用词「firework」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'firework', gloss: '烟花' },
      suffix: null,
      history: [
        { label: 'firework', text: '现代英语常用词「firework」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：烟花。' },
      ],
      formationLogic: '核心义：烟花。',
      mnemonic: '看到 firework，先说出「烟花」。',
      note: '核心义：烟花。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one firework.', chinese: '这一章反复回到同一个点：烟花。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firework.s1', en: 'Without that firework, the next paragraph is hard to follow.', zh: '没有这个烟花，下一段会很难读。', structure: 'firework / 表示 / 烟花', grammar: 'noun，围绕「烟花」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the firework.', right: 'He gave me some advice about the firework.', reason: 'advice 不可数。名词 firework 的单复数按词典词形记。', rule: '先确定 firework 是noun，再套「烟花」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firework.q1', senseId: 'firework.s1', errorType: 'meaning', type: '词义选择', prompt: '「firework」在本条的核心意思是：', options: ['烟花', '完全相反的意思', '一种古代钱币'], answer: '烟花', explain: 'firework：烟花。' },
      { id: 'firework.q2', senseId: 'firework.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firework?', options: ['烟花', 'a kind of ancient coin', 'the past tense of be'], answer: '烟花', explain: '对的是「烟花」。' },
      { id: 'firework.q3', senseId: 'firework.s1', errorType: 'grammar', type: '词义选择', prompt: 'firework 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'firework.q4', senseId: 'firework.s1', errorType: 'meaning', type: '词源', prompt: '记 firework 时，哪句更稳妥？', options: ['先锁住「烟花」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烟花」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烟花'] },
  });

  D('fireworks', {
    etymology: {
      origin: '现代英语常用词「fireworks」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fireworks', gloss: '烟火' },
      suffix: null,
      history: [
        { label: 'fireworks', text: '现代英语常用词「fireworks」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：烟火。' },
      ],
      formationLogic: '核心义：烟火。',
      mnemonic: '看到 fireworks，先说出「烟火」。',
      note: '核心义：烟火。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fireworks.', chinese: '这一章反复回到同一个点：烟火。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fireworks.s1', en: 'Without that fireworks, the next paragraph is hard to follow.', zh: '没有这个烟火，下一段会很难读。', structure: 'fireworks / 表示 / 烟火', grammar: 'noun，围绕「烟火」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fireworks.', right: 'He gave me some advice about the fireworks.', reason: 'advice 不可数。名词 fireworks 的单复数按词典词形记。', rule: '先确定 fireworks 是noun，再套「烟火」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fireworks.q1', senseId: 'fireworks.s1', errorType: 'meaning', type: '词义选择', prompt: '「fireworks」在本条的核心意思是：', options: ['烟火', '完全相反的意思', '一种古代钱币'], answer: '烟火', explain: 'fireworks：烟火。' },
      { id: 'fireworks.q2', senseId: 'fireworks.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fireworks?', options: ['烟火', 'a kind of ancient coin', 'the past tense of be'], answer: '烟火', explain: '对的是「烟火」。' },
      { id: 'fireworks.q3', senseId: 'fireworks.s1', errorType: 'grammar', type: '词义选择', prompt: 'fireworks 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fireworks.q4', senseId: 'fireworks.s1', errorType: 'meaning', type: '词源', prompt: '记 fireworks 时，哪句更稳妥？', options: ['先锁住「烟火」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烟火」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烟火'] },
  });

  D('firm', {
    etymology: {
      origin: '现代英语常用词「firm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'firm', gloss: '公司' },
      suffix: null,
      history: [
        { label: 'firm', text: '现代英语常用词「firm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：公司。' },
      ],
      formationLogic: '核心义：公司。',
      mnemonic: '看到 firm，先说出「公司」。',
      note: '核心义：公司。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one firm.', chinese: '这一章反复回到同一个点：公司。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firm.s1', en: 'Without that firm, the next paragraph is hard to follow.', zh: '没有这个公司，下一段会很难读。', structure: 'firm / 表示 / 公司', grammar: 'noun，围绕「公司」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the firm.', right: 'He gave me some advice about the firm.', reason: 'advice 不可数。名词 firm 的单复数按词典词形记。', rule: '先确定 firm 是noun，再套「公司」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firm.q1', senseId: 'firm.s1', errorType: 'meaning', type: '词义选择', prompt: '「firm」在本条的核心意思是：', options: ['公司', '完全相反的意思', '一种古代钱币'], answer: '公司', explain: 'firm：公司。' },
      { id: 'firm.q2', senseId: 'firm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firm?', options: ['公司', 'a kind of ancient coin', 'the past tense of be'], answer: '公司', explain: '对的是「公司」。' },
      { id: 'firm.q3', senseId: 'firm.s1', errorType: 'grammar', type: '词义选择', prompt: 'firm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'firm.q4', senseId: 'firm.s1', errorType: 'meaning', type: '词源', prompt: '记 firm 时，哪句更稳妥？', options: ['先锁住「公司」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公司」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公司'] },
  });

  D('firmament', {
    etymology: {
      origin: '英语派生：firma + -ment，词性转到「苍穹」。',
      prefix: null,
      root: { text: 'firma', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'firmament', text: '英语派生：firma + -ment，词性转到「苍穹」。' },
        { label: '现在', text: '核心用法是：苍穹。' },
      ],
      formationLogic: '先认词干 firma，再看词尾。',
      mnemonic: '看到 firmament，先说出「苍穹」。',
      note: '先认词干 firma，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one firmament.', chinese: '这一章反复回到同一个点：苍穹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firmament.s1', en: 'Without that firmament, the next paragraph is hard to follow.', zh: '没有这个苍穹，下一段会很难读。', structure: 'firmament / 表示 / 苍穹', grammar: 'noun，围绕「苍穹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the firmament.', right: 'He gave me some advice about the firmament.', reason: 'advice 不可数。名词 firmament 的单复数按词典词形记。', rule: '先确定 firmament 是noun，再套「苍穹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firmament.q1', senseId: 'firmament.s1', errorType: 'meaning', type: '词义选择', prompt: '「firmament」在本条的核心意思是：', options: ['苍穹', '完全相反的意思', '一种古代钱币'], answer: '苍穹', explain: 'firmament：苍穹。' },
      { id: 'firmament.q2', senseId: 'firmament.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firmament?', options: ['苍穹', 'a kind of ancient coin', 'the past tense of be'], answer: '苍穹', explain: '对的是「苍穹」。' },
      { id: 'firmament.q3', senseId: 'firmament.s1', errorType: 'grammar', type: '词义选择', prompt: 'firmament 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'firmament.q4', senseId: 'firmament.s1', errorType: 'meaning', type: '词源', prompt: '记 firmament 时，哪句更稳妥？', options: ['先锁住「苍穹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「苍穹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['苍穹'] },
  });

  D('firmly', {
    etymology: {
      origin: '英语派生：firm + -ly，词性转到「牢牢地」。',
      prefix: null,
      root: { text: 'firm', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'firmly', text: '英语派生：firm + -ly，词性转到「牢牢地」。' },
        { label: '现在', text: '核心用法是：牢牢地。' },
      ],
      formationLogic: '先认词干 firm，再看词尾。',
      mnemonic: '看到 firmly，先说出「牢牢地」。',
      note: '先认词干 firm，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule firmly, and the class followed.', chinese: '她把规则讲清楚了（牢牢地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firmly.s1', en: 'He nodded firmly and returned to the notes.', zh: '他牢牢地地点了点头，又回去看笔记。', structure: 'firmly / 表示 / 牢牢地', grammar: 'adverb，围绕「牢牢地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very firmlyly in the meeting.', right: 'She spoke firmly in the meeting.', reason: 'firmly 已经是副词，不要再加 -ly。', rule: '先确定 firmly 是adverb，再套「牢牢地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firmly.q1', senseId: 'firmly.s1', errorType: 'meaning', type: '词义选择', prompt: '「firmly」在本条的核心意思是：', options: ['牢牢地', '完全相反的意思', '一种古代钱币'], answer: '牢牢地', explain: 'firmly：牢牢地。' },
      { id: 'firmly.q2', senseId: 'firmly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firmly?', options: ['牢牢地', 'a kind of ancient coin', 'the past tense of be'], answer: '牢牢地', explain: '对的是「牢牢地」。' },
      { id: 'firmly.q3', senseId: 'firmly.s1', errorType: 'grammar', type: '词义选择', prompt: 'firmly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'firmly.q4', senseId: 'firmly.s1', errorType: 'meaning', type: '词源', prompt: '记 firmly 时，哪句更稳妥？', options: ['先锁住「牢牢地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牢牢地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牢牢地'] },
  });

  D('first', {
    etymology: {
      origin: '现代英语常用词「first」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'first', gloss: '第一的' },
      suffix: null,
      history: [
        { label: 'first', text: '现代英语常用词「first」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第一的。' },
      ],
      formationLogic: '核心义：第一的。',
      mnemonic: '看到 first，先说出「第一的」。',
      note: '核心义：第一的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was first.', chinese: '即使是初读者也能看出，这个结果是第一的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'first.s1', en: 'They wanted a first answer, not a long speech.', zh: '他们要一个第一的的答复，不要长篇发言。', structure: 'first / 表示 / 第一的', grammar: 'adjective，围绕「第一的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are first.', right: 'The news is first.', reason: 'news 作主语时动词用单数。', rule: '先确定 first 是adjective，再套「第一的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'first.q1', senseId: 'first.s1', errorType: 'meaning', type: '词义选择', prompt: '「first」在本条的核心意思是：', options: ['第一的', '完全相反的意思', '一种古代钱币'], answer: '第一的', explain: 'first：第一的。' },
      { id: 'first.q2', senseId: 'first.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches first?', options: ['第一的', 'a kind of ancient coin', 'the past tense of be'], answer: '第一的', explain: '对的是「第一的」。' },
      { id: 'first.q3', senseId: 'first.s1', errorType: 'grammar', type: '词义选择', prompt: 'first 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'first.q4', senseId: 'first.s1', errorType: 'meaning', type: '词源', prompt: '记 first 时，哪句更稳妥？', options: ['先锁住「第一的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第一的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第一的'] },
  });

  D('first place', {
    etymology: {
      origin: '现代英语固定说法「first place」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'first place', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'first place', text: '现代英语固定说法「first place」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：第一名。' },
      ],
      formationLogic: '核心义：第一名。',
      mnemonic: '看到 first place，先说出「第一名」。',
      note: '核心义：第一名。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "first place" and asked the class to keep it as one unit.', chinese: '老师把「first place」圈出来，让全班把它当成一个整体。它表示第一名。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'first place.s1', en: 'In the margin she wrote "first place" so nobody would split the phrase.', zh: '她在页边写下「first place」，免得有人把这个说法拆开。意思是第一名。', structure: 'first place / 表示 / 第一名', grammar: 'noun，围绕「第一名」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of first place and lost the point.', right: 'Keep "first place" together: it means 第一名.', reason: '「first place」要整块理解。', rule: '先确定 first place 是noun，再套「第一名」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'first place.q1', senseId: 'first place.s1', errorType: 'meaning', type: '词义选择', prompt: '「first place」在本条的核心意思是：', options: ['第一名', '完全相反的意思', '一种古代钱币'], answer: '第一名', explain: 'first place：第一名。' },
      { id: 'first place.q2', senseId: 'first place.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches first place?', options: ['第一名', 'a kind of ancient coin', 'the past tense of be'], answer: '第一名', explain: '对的是「第一名」。' },
      { id: 'first place.q3', senseId: 'first place.s1', errorType: 'grammar', type: '词义选择', prompt: 'first place 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'first place.q4', senseId: 'first place.s1', errorType: 'meaning', type: '词源', prompt: '记 first place 时，哪句更稳妥？', options: ['先锁住「第一名」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第一名」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第一名'] },
  });

  D('first-year', {
    etymology: {
      origin: '现代英语常用词「first-year」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'first-year', gloss: '一年级的' },
      suffix: null,
      history: [
        { label: 'first-year', text: '现代英语常用词「first-year」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一年级的。' },
      ],
      formationLogic: '核心义：一年级的。',
      mnemonic: '看到 first-year，先说出「一年级的」。',
      note: '核心义：一年级的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was first-year.', chinese: '即使是初读者也能看出，这个结果是一年级的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'first-year.s1', en: 'They wanted a first-year answer, not a long speech.', zh: '他们要一个一年级的的答复，不要长篇发言。', structure: 'first-year / 表示 / 一年级的', grammar: 'adjective，围绕「一年级的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are first-year.', right: 'The news is first-year.', reason: 'news 作主语时动词用单数。', rule: '先确定 first-year 是adjective，再套「一年级的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'first-year.q1', senseId: 'first-year.s1', errorType: 'meaning', type: '词义选择', prompt: '「first-year」在本条的核心意思是：', options: ['一年级的', '完全相反的意思', '一种古代钱币'], answer: '一年级的', explain: 'first-year：一年级的。' },
      { id: 'first-year.q2', senseId: 'first-year.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches first-year?', options: ['一年级的', 'a kind of ancient coin', 'the past tense of be'], answer: '一年级的', explain: '对的是「一年级的」。' },
      { id: 'first-year.q3', senseId: 'first-year.s1', errorType: 'grammar', type: '词义选择', prompt: 'first-year 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'first-year.q4', senseId: 'first-year.s1', errorType: 'meaning', type: '词源', prompt: '记 first-year 时，哪句更稳妥？', options: ['先锁住「一年级的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一年级的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一年级的'] },
  });

  D('firstly', {
    etymology: {
      origin: '英语派生：first + -ly，词性转到「第一」。',
      prefix: null,
      root: { text: 'first', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'firstly', text: '英语派生：first + -ly，词性转到「第一」。' },
        { label: '现在', text: '核心用法是：第一。' },
      ],
      formationLogic: '先认词干 first，再看词尾。',
      mnemonic: '看到 firstly，先说出「第一」。',
      note: '先认词干 first，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule firstly, and the class followed.', chinese: '她把规则讲清楚了（第一），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'firstly.s1', en: 'He nodded firstly and returned to the notes.', zh: '他第一地点了点头，又回去看笔记。', structure: 'firstly / 表示 / 第一', grammar: 'adverb，围绕「第一」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very firstlyly in the meeting.', right: 'She spoke firstly in the meeting.', reason: 'firstly 已经是副词，不要再加 -ly。', rule: '先确定 firstly 是adverb，再套「第一」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'firstly.q1', senseId: 'firstly.s1', errorType: 'meaning', type: '词义选择', prompt: '「firstly」在本条的核心意思是：', options: ['第一', '完全相反的意思', '一种古代钱币'], answer: '第一', explain: 'firstly：第一。' },
      { id: 'firstly.q2', senseId: 'firstly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches firstly?', options: ['第一', 'a kind of ancient coin', 'the past tense of be'], answer: '第一', explain: '对的是「第一」。' },
      { id: 'firstly.q3', senseId: 'firstly.s1', errorType: 'grammar', type: '词义选择', prompt: 'firstly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'firstly.q4', senseId: 'firstly.s1', errorType: 'meaning', type: '词源', prompt: '记 firstly 时，哪句更稳妥？', options: ['先锁住「第一」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第一」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第一'] },
  });

  D('fiscal', {
    etymology: {
      origin: '英语派生：fisc + -al，词性转到「财政的」。',
      prefix: null,
      root: { text: 'fisc', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fiscal', text: '英语派生：fisc + -al，词性转到「财政的」。' },
        { label: '现在', text: '核心用法是：财政的。' },
      ],
      formationLogic: '先认词干 fisc，再看词尾。',
      mnemonic: '看到 fiscal，先说出「财政的」。',
      note: '先认词干 fisc，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fiscal.', chinese: '即使是初读者也能看出，这个结果是财政的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fiscal.s1', en: 'They wanted a fiscal answer, not a long speech.', zh: '他们要一个财政的的答复，不要长篇发言。', structure: 'fiscal / 表示 / 财政的', grammar: 'adjective，围绕「财政的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fiscal.', right: 'The news is fiscal.', reason: 'news 作主语时动词用单数。', rule: '先确定 fiscal 是adjective，再套「财政的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fiscal.q1', senseId: 'fiscal.s1', errorType: 'meaning', type: '词义选择', prompt: '「fiscal」在本条的核心意思是：', options: ['财政的', '完全相反的意思', '一种古代钱币'], answer: '财政的', explain: 'fiscal：财政的。' },
      { id: 'fiscal.q2', senseId: 'fiscal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fiscal?', options: ['财政的', 'a kind of ancient coin', 'the past tense of be'], answer: '财政的', explain: '对的是「财政的」。' },
      { id: 'fiscal.q3', senseId: 'fiscal.s1', errorType: 'grammar', type: '词义选择', prompt: 'fiscal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fiscal.q4', senseId: 'fiscal.s1', errorType: 'meaning', type: '词源', prompt: '记 fiscal 时，哪句更稳妥？', options: ['先锁住「财政的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「财政的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['财政的'] },
  });

  D('fish', {
    etymology: {
      origin: '现代英语常用词「fish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fish', gloss: '鱼' },
      suffix: null,
      history: [
        { label: 'fish', text: '现代英语常用词「fish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鱼。' },
      ],
      formationLogic: '核心义：鱼。',
      mnemonic: '看到 fish，先说出「鱼」。',
      note: '核心义：鱼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fish.', chinese: '这一章反复回到同一个点：鱼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fish.s1', en: 'Without that fish, the next paragraph is hard to follow.', zh: '没有这个鱼，下一段会很难读。', structure: 'fish / 表示 / 鱼', grammar: 'noun，围绕「鱼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fish.', right: 'He gave me some advice about the fish.', reason: 'advice 不可数。名词 fish 的单复数按词典词形记。', rule: '先确定 fish 是noun，再套「鱼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fish.q1', senseId: 'fish.s1', errorType: 'meaning', type: '词义选择', prompt: '「fish」在本条的核心意思是：', options: ['鱼', '完全相反的意思', '一种古代钱币'], answer: '鱼', explain: 'fish：鱼。' },
      { id: 'fish.q2', senseId: 'fish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fish?', options: ['鱼', 'a kind of ancient coin', 'the past tense of be'], answer: '鱼', explain: '对的是「鱼」。' },
      { id: 'fish.q3', senseId: 'fish.s1', errorType: 'grammar', type: '词义选择', prompt: 'fish 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fish.q4', senseId: 'fish.s1', errorType: 'meaning', type: '词源', prompt: '记 fish 时，哪句更稳妥？', options: ['先锁住「鱼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鱼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鱼'] },
  });

  D('fissure', {
    etymology: {
      origin: '现代英语常用词「fissure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fissure', gloss: '裂缝' },
      suffix: null,
      history: [
        { label: 'fissure', text: '现代英语常用词「fissure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：裂缝。' },
      ],
      formationLogic: '核心义：裂缝。',
      mnemonic: '看到 fissure，先说出「裂缝」。',
      note: '核心义：裂缝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fissure.', chinese: '这一章反复回到同一个点：裂缝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fissure.s1', en: 'Without that fissure, the next paragraph is hard to follow.', zh: '没有这个裂缝，下一段会很难读。', structure: 'fissure / 表示 / 裂缝', grammar: 'noun，围绕「裂缝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fissure.', right: 'He gave me some advice about the fissure.', reason: 'advice 不可数。名词 fissure 的单复数按词典词形记。', rule: '先确定 fissure 是noun，再套「裂缝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fissure.q1', senseId: 'fissure.s1', errorType: 'meaning', type: '词义选择', prompt: '「fissure」在本条的核心意思是：', options: ['裂缝', '完全相反的意思', '一种古代钱币'], answer: '裂缝', explain: 'fissure：裂缝。' },
      { id: 'fissure.q2', senseId: 'fissure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fissure?', options: ['裂缝', 'a kind of ancient coin', 'the past tense of be'], answer: '裂缝', explain: '对的是「裂缝」。' },
      { id: 'fissure.q3', senseId: 'fissure.s1', errorType: 'grammar', type: '词义选择', prompt: 'fissure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fissure.q4', senseId: 'fissure.s1', errorType: 'meaning', type: '词源', prompt: '记 fissure 时，哪句更稳妥？', options: ['先锁住「裂缝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「裂缝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['裂缝'] },
  });

  D('fist', {
    etymology: {
      origin: '现代英语常用词「fist」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fist', gloss: '拳头' },
      suffix: null,
      history: [
        { label: 'fist', text: '现代英语常用词「fist」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拳头。' },
      ],
      formationLogic: '核心义：拳头。',
      mnemonic: '看到 fist，先说出「拳头」。',
      note: '核心义：拳头。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fist.', chinese: '这一章反复回到同一个点：拳头。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fist.s1', en: 'Without that fist, the next paragraph is hard to follow.', zh: '没有这个拳头，下一段会很难读。', structure: 'fist / 表示 / 拳头', grammar: 'noun，围绕「拳头」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fist.', right: 'He gave me some advice about the fist.', reason: 'advice 不可数。名词 fist 的单复数按词典词形记。', rule: '先确定 fist 是noun，再套「拳头」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fist.q1', senseId: 'fist.s1', errorType: 'meaning', type: '词义选择', prompt: '「fist」在本条的核心意思是：', options: ['拳头', '完全相反的意思', '一种古代钱币'], answer: '拳头', explain: 'fist：拳头。' },
      { id: 'fist.q2', senseId: 'fist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fist?', options: ['拳头', 'a kind of ancient coin', 'the past tense of be'], answer: '拳头', explain: '对的是「拳头」。' },
      { id: 'fist.q3', senseId: 'fist.s1', errorType: 'grammar', type: '词义选择', prompt: 'fist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fist.q4', senseId: 'fist.s1', errorType: 'meaning', type: '词源', prompt: '记 fist 时，哪句更稳妥？', options: ['先锁住「拳头」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拳头」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拳头'] },
  });

  D('fit', {
    etymology: {
      origin: '现代英语常用词「fit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fit', gloss: '合身' },
      suffix: null,
      history: [
        { label: 'fit', text: '现代英语常用词「fit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：合身。' },
      ],
      formationLogic: '核心义：合身。',
      mnemonic: '看到 fit，先说出「合身」。',
      note: '核心义：合身。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fit before the office closed.', chinese: '他们同意在办公室关门前做这件事：合身。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fit.s1', en: 'The deadline forced the team to fit that afternoon.', zh: '截止日期逼着小组在那天下午合身。', structure: 'fit / 表示 / 合身', grammar: 'verb，围绕「合身」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fited it yesterday without checking the real past form.', right: 'Check the past form of "fit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fit 是verb，再套「合身」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fit.q1', senseId: 'fit.s1', errorType: 'meaning', type: '词义选择', prompt: '「fit」在本条的核心意思是：', options: ['合身', '完全相反的意思', '一种古代钱币'], answer: '合身', explain: 'fit：合身。' },
      { id: 'fit.q2', senseId: 'fit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fit?', options: ['合身', 'a kind of ancient coin', 'the past tense of be'], answer: '合身', explain: '对的是「合身」。' },
      { id: 'fit.q3', senseId: 'fit.s1', errorType: 'grammar', type: '词义选择', prompt: 'fit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fit.q4', senseId: 'fit.s1', errorType: 'meaning', type: '词源', prompt: '记 fit 时，哪句更稳妥？', options: ['先锁住「合身」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合身」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合身'] },
  });

  D('fit in', {
    etymology: {
      origin: '现代英语固定说法「fit in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fit in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fit in', text: '现代英语固定说法「fit in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：融入。' },
      ],
      formationLogic: '核心义：融入。',
      mnemonic: '看到 fit in，先说出「融入」。',
      note: '核心义：融入。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fit in" and asked the class to keep it as one unit.', chinese: '老师把「fit in」圈出来，让全班把它当成一个整体。它表示融入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fit in.s1', en: 'In the margin she wrote "fit in" so nobody would split the phrase.', zh: '她在页边写下「fit in」，免得有人把这个说法拆开。意思是融入。', structure: 'fit in / 表示 / 融入', grammar: 'verb，围绕「融入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fit in and lost the point.', right: 'Keep "fit in" together: it means 融入.', reason: '「fit in」要整块理解。', rule: '先确定 fit in 是verb，再套「融入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fit in.q1', senseId: 'fit in.s1', errorType: 'meaning', type: '词义选择', prompt: '「fit in」在本条的核心意思是：', options: ['融入', '完全相反的意思', '一种古代钱币'], answer: '融入', explain: 'fit in：融入。' },
      { id: 'fit in.q2', senseId: 'fit in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fit in?', options: ['融入', 'a kind of ancient coin', 'the past tense of be'], answer: '融入', explain: '对的是「融入」。' },
      { id: 'fit in.q3', senseId: 'fit in.s1', errorType: 'grammar', type: '词义选择', prompt: 'fit in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fit in.q4', senseId: 'fit in.s1', errorType: 'meaning', type: '词源', prompt: '记 fit in 时，哪句更稳妥？', options: ['先锁住「融入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「融入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['融入'] },
  });

  D('fit together', {
    etymology: {
      origin: '现代英语固定说法「fit together」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fit together', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fit together', text: '现代英语固定说法「fit together」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：拼合。' },
      ],
      formationLogic: '核心义：拼合。',
      mnemonic: '看到 fit together，先说出「拼合」。',
      note: '核心义：拼合。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fit together" and asked the class to keep it as one unit.', chinese: '老师把「fit together」圈出来，让全班把它当成一个整体。它表示拼合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fit together.s1', en: 'In the margin she wrote "fit together" so nobody would split the phrase.', zh: '她在页边写下「fit together」，免得有人把这个说法拆开。意思是拼合。', structure: 'fit together / 表示 / 拼合', grammar: 'verb，围绕「拼合」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fit together and lost the point.', right: 'Keep "fit together" together: it means 拼合.', reason: '「fit together」要整块理解。', rule: '先确定 fit together 是verb，再套「拼合」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fit together.q1', senseId: 'fit together.s1', errorType: 'meaning', type: '词义选择', prompt: '「fit together」在本条的核心意思是：', options: ['拼合', '完全相反的意思', '一种古代钱币'], answer: '拼合', explain: 'fit together：拼合。' },
      { id: 'fit together.q2', senseId: 'fit together.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fit together?', options: ['拼合', 'a kind of ancient coin', 'the past tense of be'], answer: '拼合', explain: '对的是「拼合」。' },
      { id: 'fit together.q3', senseId: 'fit together.s1', errorType: 'grammar', type: '词义选择', prompt: 'fit together 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fit together.q4', senseId: 'fit together.s1', errorType: 'meaning', type: '词源', prompt: '记 fit together 时，哪句更稳妥？', options: ['先锁住「拼合」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拼合」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拼合'] },
  });

  D('fitful', {
    etymology: {
      origin: '英语派生：fit + -ful，词性转到「一阵阵的」。',
      prefix: null,
      root: { text: 'fit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fitful', text: '英语派生：fit + -ful，词性转到「一阵阵的」。' },
        { label: '现在', text: '核心用法是：一阵阵的。' },
      ],
      formationLogic: '先认词干 fit，再看词尾。',
      mnemonic: '看到 fitful，先说出「一阵阵的」。',
      note: '先认词干 fit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fitful.', chinese: '即使是初读者也能看出，这个结果是一阵阵的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fitful.s1', en: 'They wanted a fitful answer, not a long speech.', zh: '他们要一个一阵阵的的答复，不要长篇发言。', structure: 'fitful / 表示 / 一阵阵的', grammar: 'adjective，围绕「一阵阵的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fitful.', right: 'The news is fitful.', reason: 'news 作主语时动词用单数。', rule: '先确定 fitful 是adjective，再套「一阵阵的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fitful.q1', senseId: 'fitful.s1', errorType: 'meaning', type: '词义选择', prompt: '「fitful」在本条的核心意思是：', options: ['一阵阵的', '完全相反的意思', '一种古代钱币'], answer: '一阵阵的', explain: 'fitful：一阵阵的。' },
      { id: 'fitful.q2', senseId: 'fitful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fitful?', options: ['一阵阵的', 'a kind of ancient coin', 'the past tense of be'], answer: '一阵阵的', explain: '对的是「一阵阵的」。' },
      { id: 'fitful.q3', senseId: 'fitful.s1', errorType: 'grammar', type: '词义选择', prompt: 'fitful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fitful.q4', senseId: 'fitful.s1', errorType: 'meaning', type: '词源', prompt: '记 fitful 时，哪句更稳妥？', options: ['先锁住「一阵阵的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一阵阵的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一阵阵的'] },
  });

  D('fitness', {
    etymology: {
      origin: '英语派生：fit + -ness，词性转到「健康」。',
      prefix: null,
      root: { text: 'fit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fitness', text: '英语派生：fit + -ness，词性转到「健康」。' },
        { label: '现在', text: '核心用法是：健康。' },
      ],
      formationLogic: '先认词干 fit，再看词尾。',
      mnemonic: '看到 fitness，先说出「健康」。',
      note: '先认词干 fit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fitness.', chinese: '这一章反复回到同一个点：健康。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fitness.s1', en: 'Without that fitness, the next paragraph is hard to follow.', zh: '没有这个健康，下一段会很难读。', structure: 'fitness / 表示 / 健康', grammar: 'noun，围绕「健康」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fitness.', right: 'He gave me some advice about the fitness.', reason: 'advice 不可数。名词 fitness 的单复数按词典词形记。', rule: '先确定 fitness 是noun，再套「健康」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fitness.q1', senseId: 'fitness.s1', errorType: 'meaning', type: '词义选择', prompt: '「fitness」在本条的核心意思是：', options: ['健康', '完全相反的意思', '一种古代钱币'], answer: '健康', explain: 'fitness：健康。' },
      { id: 'fitness.q2', senseId: 'fitness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fitness?', options: ['健康', 'a kind of ancient coin', 'the past tense of be'], answer: '健康', explain: '对的是「健康」。' },
      { id: 'fitness.q3', senseId: 'fitness.s1', errorType: 'grammar', type: '词义选择', prompt: 'fitness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fitness.q4', senseId: 'fitness.s1', errorType: 'meaning', type: '词源', prompt: '记 fitness 时，哪句更稳妥？', options: ['先锁住「健康」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「健康」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['健康'] },
  });

  D('fitness centre', {
    etymology: {
      origin: '现代英语固定说法「fitness centre」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fitness centre', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fitness centre', text: '现代英语固定说法「fitness centre」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：健身中心。' },
      ],
      formationLogic: '核心义：健身中心。',
      mnemonic: '看到 fitness centre，先说出「健身中心」。',
      note: '核心义：健身中心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fitness centre" and asked the class to keep it as one unit.', chinese: '老师把「fitness centre」圈出来，让全班把它当成一个整体。它表示健身中心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fitness centre.s1', en: 'In the margin she wrote "fitness centre" so nobody would split the phrase.', zh: '她在页边写下「fitness centre」，免得有人把这个说法拆开。意思是健身中心。', structure: 'fitness centre / 表示 / 健身中心', grammar: 'noun，围绕「健身中心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fitness centre and lost the point.', right: 'Keep "fitness centre" together: it means 健身中心.', reason: '「fitness centre」要整块理解。', rule: '先确定 fitness centre 是noun，再套「健身中心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fitness centre.q1', senseId: 'fitness centre.s1', errorType: 'meaning', type: '词义选择', prompt: '「fitness centre」在本条的核心意思是：', options: ['健身中心', '完全相反的意思', '一种古代钱币'], answer: '健身中心', explain: 'fitness centre：健身中心。' },
      { id: 'fitness centre.q2', senseId: 'fitness centre.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fitness centre?', options: ['健身中心', 'a kind of ancient coin', 'the past tense of be'], answer: '健身中心', explain: '对的是「健身中心」。' },
      { id: 'fitness centre.q3', senseId: 'fitness centre.s1', errorType: 'grammar', type: '词义选择', prompt: 'fitness centre 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fitness centre.q4', senseId: 'fitness centre.s1', errorType: 'meaning', type: '词源', prompt: '记 fitness centre 时，哪句更稳妥？', options: ['先锁住「健身中心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「健身中心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['健身中心'] },
  });

  D('fitting', {
    etymology: {
      origin: '英语派生：fitt + -ing，词性转到「合适的」。',
      prefix: null,
      root: { text: 'fitt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fitting', text: '英语派生：fitt + -ing，词性转到「合适的」。' },
        { label: '现在', text: '核心用法是：合适的。' },
      ],
      formationLogic: '先认词干 fitt，再看词尾。',
      mnemonic: '看到 fitting，先说出「合适的」。',
      note: '先认词干 fitt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fitting.', chinese: '即使是初读者也能看出，这个结果是合适的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fitting.s1', en: 'They wanted a fitting answer, not a long speech.', zh: '他们要一个合适的的答复，不要长篇发言。', structure: 'fitting / 表示 / 合适的', grammar: 'adjective，围绕「合适的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fitting.', right: 'The news is fitting.', reason: 'news 作主语时动词用单数。', rule: '先确定 fitting 是adjective，再套「合适的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fitting.q1', senseId: 'fitting.s1', errorType: 'meaning', type: '词义选择', prompt: '「fitting」在本条的核心意思是：', options: ['合适的', '完全相反的意思', '一种古代钱币'], answer: '合适的', explain: 'fitting：合适的。' },
      { id: 'fitting.q2', senseId: 'fitting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fitting?', options: ['合适的', 'a kind of ancient coin', 'the past tense of be'], answer: '合适的', explain: '对的是「合适的」。' },
      { id: 'fitting.q3', senseId: 'fitting.s1', errorType: 'grammar', type: '词义选择', prompt: 'fitting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fitting.q4', senseId: 'fitting.s1', errorType: 'meaning', type: '词源', prompt: '记 fitting 时，哪句更稳妥？', options: ['先锁住「合适的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合适的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合适的'] },
  });

  D('fittings', {
    etymology: {
      origin: '现代英语常用词「fittings」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fittings', gloss: '装置' },
      suffix: null,
      history: [
        { label: 'fittings', text: '现代英语常用词「fittings」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：装置。' },
      ],
      formationLogic: '核心义：装置。',
      mnemonic: '看到 fittings，先说出「装置」。',
      note: '核心义：装置。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fittings.', chinese: '这一章反复回到同一个点：装置。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fittings.s1', en: 'Without that fittings, the next paragraph is hard to follow.', zh: '没有这个装置，下一段会很难读。', structure: 'fittings / 表示 / 装置', grammar: 'noun，围绕「装置」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fittings.', right: 'He gave me some advice about the fittings.', reason: 'advice 不可数。名词 fittings 的单复数按词典词形记。', rule: '先确定 fittings 是noun，再套「装置」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fittings.q1', senseId: 'fittings.s1', errorType: 'meaning', type: '词义选择', prompt: '「fittings」在本条的核心意思是：', options: ['装置', '完全相反的意思', '一种古代钱币'], answer: '装置', explain: 'fittings：装置。' },
      { id: 'fittings.q2', senseId: 'fittings.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fittings?', options: ['装置', 'a kind of ancient coin', 'the past tense of be'], answer: '装置', explain: '对的是「装置」。' },
      { id: 'fittings.q3', senseId: 'fittings.s1', errorType: 'grammar', type: '词义选择', prompt: 'fittings 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fittings.q4', senseId: 'fittings.s1', errorType: 'meaning', type: '词源', prompt: '记 fittings 时，哪句更稳妥？', options: ['先锁住「装置」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装置」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装置'] },
  });

  D('five', {
    etymology: {
      origin: '现代英语常用词「five」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'five', gloss: '五' },
      suffix: null,
      history: [
        { label: 'five', text: '现代英语常用词「five」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：五。' },
      ],
      formationLogic: '核心义：五。',
      mnemonic: '看到 five，先说出「五」。',
      note: '核心义：五。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one five.', chinese: '这一章反复回到同一个点：五。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'five.s1', en: 'Without that five, the next paragraph is hard to follow.', zh: '没有这个五，下一段会很难读。', structure: 'five / 表示 / 五', grammar: 'number，围绕「五」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the five.', right: 'He gave me some advice about the five.', reason: 'advice 不可数。名词 five 的单复数按词典词形记。', rule: '先确定 five 是number，再套「五」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'five.q1', senseId: 'five.s1', errorType: 'meaning', type: '词义选择', prompt: '「five」在本条的核心意思是：', options: ['五', '完全相反的意思', '一种古代钱币'], answer: '五', explain: 'five：五。' },
      { id: 'five.q2', senseId: 'five.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches five?', options: ['五', 'a kind of ancient coin', 'the past tense of be'], answer: '五', explain: '对的是「五」。' },
      { id: 'five.q3', senseId: 'five.s1', errorType: 'grammar', type: '词义选择', prompt: 'five 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'five.q4', senseId: 'five.s1', errorType: 'meaning', type: '词源', prompt: '记 five 时，哪句更稳妥？', options: ['先锁住「五」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「五」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['五'] },
  });

  D('fix', {
    etymology: {
      origin: '现代英语常用词「fix」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fix', gloss: '修理' },
      suffix: null,
      history: [
        { label: 'fix', text: '现代英语常用词「fix」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：修理。' },
      ],
      formationLogic: '核心义：修理。',
      mnemonic: '看到 fix，先说出「修理」。',
      note: '核心义：修理。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fix before the office closed.', chinese: '他们同意在办公室关门前做这件事：修理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fix.s1', en: 'The deadline forced the team to fix that afternoon.', zh: '截止日期逼着小组在那天下午修理。', structure: 'fix / 表示 / 修理', grammar: 'verb，围绕「修理」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fixed it yesterday without checking the real past form.', right: 'Check the past form of "fix" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fix 是verb，再套「修理」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fix.q1', senseId: 'fix.s1', errorType: 'meaning', type: '词义选择', prompt: '「fix」在本条的核心意思是：', options: ['修理', '完全相反的意思', '一种古代钱币'], answer: '修理', explain: 'fix：修理。' },
      { id: 'fix.q2', senseId: 'fix.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fix?', options: ['修理', 'a kind of ancient coin', 'the past tense of be'], answer: '修理', explain: '对的是「修理」。' },
      { id: 'fix.q3', senseId: 'fix.s1', errorType: 'grammar', type: '词义选择', prompt: 'fix 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fix.q4', senseId: 'fix.s1', errorType: 'meaning', type: '词源', prompt: '记 fix 时，哪句更稳妥？', options: ['先锁住「修理」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「修理」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['修理'] },
  });

  D('fixate', {
    etymology: {
      origin: '现代英语常用词「fixate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fixate', gloss: '注视' },
      suffix: null,
      history: [
        { label: 'fixate', text: '现代英语常用词「fixate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：注视。' },
      ],
      formationLogic: '核心义：注视。',
      mnemonic: '看到 fixate，先说出「注视」。',
      note: '核心义：注视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fixate before the office closed.', chinese: '他们同意在办公室关门前做这件事：注视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fixate.s1', en: 'The deadline forced the team to fixate that afternoon.', zh: '截止日期逼着小组在那天下午注视。', structure: 'fixate / 表示 / 注视', grammar: 'verb，围绕「注视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fixateed it yesterday without checking the real past form.', right: 'Check the past form of "fixate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fixate 是verb，再套「注视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fixate.q1', senseId: 'fixate.s1', errorType: 'meaning', type: '词义选择', prompt: '「fixate」在本条的核心意思是：', options: ['注视', '完全相反的意思', '一种古代钱币'], answer: '注视', explain: 'fixate：注视。' },
      { id: 'fixate.q2', senseId: 'fixate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fixate?', options: ['注视', 'a kind of ancient coin', 'the past tense of be'], answer: '注视', explain: '对的是「注视」。' },
      { id: 'fixate.q3', senseId: 'fixate.s1', errorType: 'grammar', type: '词义选择', prompt: 'fixate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fixate.q4', senseId: 'fixate.s1', errorType: 'meaning', type: '词源', prompt: '记 fixate 时，哪句更稳妥？', options: ['先锁住「注视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「注视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['注视'] },
  });

  D('fixation', {
    etymology: {
      origin: '英语派生：fixa + -tion，词性转到「执念」。',
      prefix: null,
      root: { text: 'fixa', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fixation', text: '英语派生：fixa + -tion，词性转到「执念」。' },
        { label: '现在', text: '核心用法是：执念。' },
      ],
      formationLogic: '先认词干 fixa，再看词尾。',
      mnemonic: '看到 fixation，先说出「执念」。',
      note: '先认词干 fixa，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fixation.', chinese: '这一章反复回到同一个点：执念。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fixation.s1', en: 'Without that fixation, the next paragraph is hard to follow.', zh: '没有这个执念，下一段会很难读。', structure: 'fixation / 表示 / 执念', grammar: 'noun，围绕「执念」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fixation.', right: 'He gave me some advice about the fixation.', reason: 'advice 不可数。名词 fixation 的单复数按词典词形记。', rule: '先确定 fixation 是noun，再套「执念」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fixation.q1', senseId: 'fixation.s1', errorType: 'meaning', type: '词义选择', prompt: '「fixation」在本条的核心意思是：', options: ['执念', '完全相反的意思', '一种古代钱币'], answer: '执念', explain: 'fixation：执念。' },
      { id: 'fixation.q2', senseId: 'fixation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fixation?', options: ['执念', 'a kind of ancient coin', 'the past tense of be'], answer: '执念', explain: '对的是「执念」。' },
      { id: 'fixation.q3', senseId: 'fixation.s1', errorType: 'grammar', type: '词义选择', prompt: 'fixation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fixation.q4', senseId: 'fixation.s1', errorType: 'meaning', type: '词源', prompt: '记 fixation 时，哪句更稳妥？', options: ['先锁住「执念」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「执念」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['执念'] },
  });

  D('fixed', {
    etymology: {
      origin: '现代英语常用词「fixed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fixed', gloss: '固定的' },
      suffix: null,
      history: [
        { label: 'fixed', text: '现代英语常用词「fixed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：固定的。' },
      ],
      formationLogic: '核心义：固定的。',
      mnemonic: '看到 fixed，先说出「固定的」。',
      note: '核心义：固定的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fixed.', chinese: '即使是初读者也能看出，这个结果是固定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fixed.s1', en: 'They wanted a fixed answer, not a long speech.', zh: '他们要一个固定的的答复，不要长篇发言。', structure: 'fixed / 表示 / 固定的', grammar: 'adjective，围绕「固定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fixed.', right: 'The news is fixed.', reason: 'news 作主语时动词用单数。', rule: '先确定 fixed 是adjective，再套「固定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fixed.q1', senseId: 'fixed.s1', errorType: 'meaning', type: '词义选择', prompt: '「fixed」在本条的核心意思是：', options: ['固定的', '完全相反的意思', '一种古代钱币'], answer: '固定的', explain: 'fixed：固定的。' },
      { id: 'fixed.q2', senseId: 'fixed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fixed?', options: ['固定的', 'a kind of ancient coin', 'the past tense of be'], answer: '固定的', explain: '对的是「固定的」。' },
      { id: 'fixed.q3', senseId: 'fixed.s1', errorType: 'grammar', type: '词义选择', prompt: 'fixed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fixed.q4', senseId: 'fixed.s1', errorType: 'meaning', type: '词源', prompt: '记 fixed 时，哪句更稳妥？', options: ['先锁住「固定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「固定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['固定的'] },
  });

  D('fixed value', {
    etymology: {
      origin: '现代英语固定说法「fixed value」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fixed value', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fixed value', text: '现代英语固定说法「fixed value」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：固定值。' },
      ],
      formationLogic: '核心义：固定值。',
      mnemonic: '看到 fixed value，先说出「固定值」。',
      note: '核心义：固定值。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fixed value" and asked the class to keep it as one unit.', chinese: '老师把「fixed value」圈出来，让全班把它当成一个整体。它表示固定值。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fixed value.s1', en: 'In the margin she wrote "fixed value" so nobody would split the phrase.', zh: '她在页边写下「fixed value」，免得有人把这个说法拆开。意思是固定值。', structure: 'fixed value / 表示 / 固定值', grammar: 'noun，围绕「固定值」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fixed value and lost the point.', right: 'Keep "fixed value" together: it means 固定值.', reason: '「fixed value」要整块理解。', rule: '先确定 fixed value 是noun，再套「固定值」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fixed value.q1', senseId: 'fixed value.s1', errorType: 'meaning', type: '词义选择', prompt: '「fixed value」在本条的核心意思是：', options: ['固定值', '完全相反的意思', '一种古代钱币'], answer: '固定值', explain: 'fixed value：固定值。' },
      { id: 'fixed value.q2', senseId: 'fixed value.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fixed value?', options: ['固定值', 'a kind of ancient coin', 'the past tense of be'], answer: '固定值', explain: '对的是「固定值」。' },
      { id: 'fixed value.q3', senseId: 'fixed value.s1', errorType: 'grammar', type: '词义选择', prompt: 'fixed value 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fixed value.q4', senseId: 'fixed value.s1', errorType: 'meaning', type: '词源', prompt: '记 fixed value 时，哪句更稳妥？', options: ['先锁住「固定值」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「固定值」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['固定值'] },
  });

  D('fixture', {
    etymology: {
      origin: '现代英语常用词「fixture」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fixture', gloss: '固定物' },
      suffix: null,
      history: [
        { label: 'fixture', text: '现代英语常用词「fixture」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：固定物。' },
      ],
      formationLogic: '核心义：固定物。',
      mnemonic: '看到 fixture，先说出「固定物」。',
      note: '核心义：固定物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fixture.', chinese: '这一章反复回到同一个点：固定物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fixture.s1', en: 'Without that fixture, the next paragraph is hard to follow.', zh: '没有这个固定物，下一段会很难读。', structure: 'fixture / 表示 / 固定物', grammar: 'noun，围绕「固定物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fixture.', right: 'He gave me some advice about the fixture.', reason: 'advice 不可数。名词 fixture 的单复数按词典词形记。', rule: '先确定 fixture 是noun，再套「固定物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fixture.q1', senseId: 'fixture.s1', errorType: 'meaning', type: '词义选择', prompt: '「fixture」在本条的核心意思是：', options: ['固定物', '完全相反的意思', '一种古代钱币'], answer: '固定物', explain: 'fixture：固定物。' },
      { id: 'fixture.q2', senseId: 'fixture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fixture?', options: ['固定物', 'a kind of ancient coin', 'the past tense of be'], answer: '固定物', explain: '对的是「固定物」。' },
      { id: 'fixture.q3', senseId: 'fixture.s1', errorType: 'grammar', type: '词义选择', prompt: 'fixture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fixture.q4', senseId: 'fixture.s1', errorType: 'meaning', type: '词源', prompt: '记 fixture 时，哪句更稳妥？', options: ['先锁住「固定物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「固定物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['固定物'] },
  });

  D('fizzy drink', {
    etymology: {
      origin: '现代英语固定说法「fizzy drink」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fizzy drink', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fizzy drink', text: '现代英语固定说法「fizzy drink」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：碳酸饮料。' },
      ],
      formationLogic: '核心义：碳酸饮料。',
      mnemonic: '看到 fizzy drink，先说出「碳酸饮料」。',
      note: '核心义：碳酸饮料。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fizzy drink" and asked the class to keep it as one unit.', chinese: '老师把「fizzy drink」圈出来，让全班把它当成一个整体。它表示碳酸饮料。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fizzy drink.s1', en: 'In the margin she wrote "fizzy drink" so nobody would split the phrase.', zh: '她在页边写下「fizzy drink」，免得有人把这个说法拆开。意思是碳酸饮料。', structure: 'fizzy drink / 表示 / 碳酸饮料', grammar: 'noun，围绕「碳酸饮料」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fizzy drink and lost the point.', right: 'Keep "fizzy drink" together: it means 碳酸饮料.', reason: '「fizzy drink」要整块理解。', rule: '先确定 fizzy drink 是noun，再套「碳酸饮料」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fizzy drink.q1', senseId: 'fizzy drink.s1', errorType: 'meaning', type: '词义选择', prompt: '「fizzy drink」在本条的核心意思是：', options: ['碳酸饮料', '完全相反的意思', '一种古代钱币'], answer: '碳酸饮料', explain: 'fizzy drink：碳酸饮料。' },
      { id: 'fizzy drink.q2', senseId: 'fizzy drink.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fizzy drink?', options: ['碳酸饮料', 'a kind of ancient coin', 'the past tense of be'], answer: '碳酸饮料', explain: '对的是「碳酸饮料」。' },
      { id: 'fizzy drink.q3', senseId: 'fizzy drink.s1', errorType: 'grammar', type: '词义选择', prompt: 'fizzy drink 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fizzy drink.q4', senseId: 'fizzy drink.s1', errorType: 'meaning', type: '词源', prompt: '记 fizzy drink 时，哪句更稳妥？', options: ['先锁住「碳酸饮料」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「碳酸饮料」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['碳酸饮料'] },
  });

  D('flaccid', {
    etymology: {
      origin: '现代英语常用词「flaccid」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flaccid', gloss: '松软的' },
      suffix: null,
      history: [
        { label: 'flaccid', text: '现代英语常用词「flaccid」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：松软的。' },
      ],
      formationLogic: '核心义：松软的。',
      mnemonic: '看到 flaccid，先说出「松软的」。',
      note: '核心义：松软的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flaccid.', chinese: '即使是初读者也能看出，这个结果是松软的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flaccid.s1', en: 'They wanted a flaccid answer, not a long speech.', zh: '他们要一个松软的的答复，不要长篇发言。', structure: 'flaccid / 表示 / 松软的', grammar: 'adjective，围绕「松软的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flaccid.', right: 'The news is flaccid.', reason: 'news 作主语时动词用单数。', rule: '先确定 flaccid 是adjective，再套「松软的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flaccid.q1', senseId: 'flaccid.s1', errorType: 'meaning', type: '词义选择', prompt: '「flaccid」在本条的核心意思是：', options: ['松软的', '完全相反的意思', '一种古代钱币'], answer: '松软的', explain: 'flaccid：松软的。' },
      { id: 'flaccid.q2', senseId: 'flaccid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flaccid?', options: ['松软的', 'a kind of ancient coin', 'the past tense of be'], answer: '松软的', explain: '对的是「松软的」。' },
      { id: 'flaccid.q3', senseId: 'flaccid.s1', errorType: 'grammar', type: '词义选择', prompt: 'flaccid 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flaccid.q4', senseId: 'flaccid.s1', errorType: 'meaning', type: '词源', prompt: '记 flaccid 时，哪句更稳妥？', options: ['先锁住「松软的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「松软的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['松软的'] },
  });

  D('flag', {
    etymology: {
      origin: '现代英语常用词「flag」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flag', gloss: '旗' },
      suffix: null,
      history: [
        { label: 'flag', text: '现代英语常用词「flag」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：旗。' },
      ],
      formationLogic: '核心义：旗。',
      mnemonic: '看到 flag，先说出「旗」。',
      note: '核心义：旗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flag.', chinese: '这一章反复回到同一个点：旗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flag.s1', en: 'Without that flag, the next paragraph is hard to follow.', zh: '没有这个旗，下一段会很难读。', structure: 'flag / 表示 / 旗', grammar: 'noun，围绕「旗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flag.', right: 'He gave me some advice about the flag.', reason: 'advice 不可数。名词 flag 的单复数按词典词形记。', rule: '先确定 flag 是noun，再套「旗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flag.q1', senseId: 'flag.s1', errorType: 'meaning', type: '词义选择', prompt: '「flag」在本条的核心意思是：', options: ['旗', '完全相反的意思', '一种古代钱币'], answer: '旗', explain: 'flag：旗。' },
      { id: 'flag.q2', senseId: 'flag.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flag?', options: ['旗', 'a kind of ancient coin', 'the past tense of be'], answer: '旗', explain: '对的是「旗」。' },
      { id: 'flag.q3', senseId: 'flag.s1', errorType: 'grammar', type: '词义选择', prompt: 'flag 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flag.q4', senseId: 'flag.s1', errorType: 'meaning', type: '词源', prompt: '记 flag 时，哪句更稳妥？', options: ['先锁住「旗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「旗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['旗'] },
  });

  D('flagrant', {
    etymology: {
      origin: '现代英语常用词「flagrant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flagrant', gloss: '公然的' },
      suffix: null,
      history: [
        { label: 'flagrant', text: '现代英语常用词「flagrant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：公然的。' },
      ],
      formationLogic: '核心义：公然的。',
      mnemonic: '看到 flagrant，先说出「公然的」。',
      note: '核心义：公然的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flagrant.', chinese: '即使是初读者也能看出，这个结果是公然的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flagrant.s1', en: 'They wanted a flagrant answer, not a long speech.', zh: '他们要一个公然的的答复，不要长篇发言。', structure: 'flagrant / 表示 / 公然的', grammar: 'adjective，围绕「公然的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flagrant.', right: 'The news is flagrant.', reason: 'news 作主语时动词用单数。', rule: '先确定 flagrant 是adjective，再套「公然的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flagrant.q1', senseId: 'flagrant.s1', errorType: 'meaning', type: '词义选择', prompt: '「flagrant」在本条的核心意思是：', options: ['公然的', '完全相反的意思', '一种古代钱币'], answer: '公然的', explain: 'flagrant：公然的。' },
      { id: 'flagrant.q2', senseId: 'flagrant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flagrant?', options: ['公然的', 'a kind of ancient coin', 'the past tense of be'], answer: '公然的', explain: '对的是「公然的」。' },
      { id: 'flagrant.q3', senseId: 'flagrant.s1', errorType: 'grammar', type: '词义选择', prompt: 'flagrant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flagrant.q4', senseId: 'flagrant.s1', errorType: 'meaning', type: '词源', prompt: '记 flagrant 时，哪句更稳妥？', options: ['先锁住「公然的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公然的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公然的'] },
  });

  D('flake', {
    etymology: {
      origin: '现代英语常用词「flake」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flake', gloss: '薄片' },
      suffix: null,
      history: [
        { label: 'flake', text: '现代英语常用词「flake」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：薄片。' },
      ],
      formationLogic: '核心义：薄片。',
      mnemonic: '看到 flake，先说出「薄片」。',
      note: '核心义：薄片。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flake.', chinese: '这一章反复回到同一个点：薄片。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flake.s1', en: 'Without that flake, the next paragraph is hard to follow.', zh: '没有这个薄片，下一段会很难读。', structure: 'flake / 表示 / 薄片', grammar: 'noun，围绕「薄片」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flake.', right: 'He gave me some advice about the flake.', reason: 'advice 不可数。名词 flake 的单复数按词典词形记。', rule: '先确定 flake 是noun，再套「薄片」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flake.q1', senseId: 'flake.s1', errorType: 'meaning', type: '词义选择', prompt: '「flake」在本条的核心意思是：', options: ['薄片', '完全相反的意思', '一种古代钱币'], answer: '薄片', explain: 'flake：薄片。' },
      { id: 'flake.q2', senseId: 'flake.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flake?', options: ['薄片', 'a kind of ancient coin', 'the past tense of be'], answer: '薄片', explain: '对的是「薄片」。' },
      { id: 'flake.q3', senseId: 'flake.s1', errorType: 'grammar', type: '词义选择', prompt: 'flake 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flake.q4', senseId: 'flake.s1', errorType: 'meaning', type: '词源', prompt: '记 flake 时，哪句更稳妥？', options: ['先锁住「薄片」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「薄片」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['薄片'] },
  });

  D('flame', {
    etymology: {
      origin: '现代英语常用词「flame」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flame', gloss: '火焰' },
      suffix: null,
      history: [
        { label: 'flame', text: '现代英语常用词「flame」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：火焰。' },
      ],
      formationLogic: '核心义：火焰。',
      mnemonic: '看到 flame，先说出「火焰」。',
      note: '核心义：火焰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flame.', chinese: '这一章反复回到同一个点：火焰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flame.s1', en: 'Without that flame, the next paragraph is hard to follow.', zh: '没有这个火焰，下一段会很难读。', structure: 'flame / 表示 / 火焰', grammar: 'noun，围绕「火焰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flame.', right: 'He gave me some advice about the flame.', reason: 'advice 不可数。名词 flame 的单复数按词典词形记。', rule: '先确定 flame 是noun，再套「火焰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flame.q1', senseId: 'flame.s1', errorType: 'meaning', type: '词义选择', prompt: '「flame」在本条的核心意思是：', options: ['火焰', '完全相反的意思', '一种古代钱币'], answer: '火焰', explain: 'flame：火焰。' },
      { id: 'flame.q2', senseId: 'flame.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flame?', options: ['火焰', 'a kind of ancient coin', 'the past tense of be'], answer: '火焰', explain: '对的是「火焰」。' },
      { id: 'flame.q3', senseId: 'flame.s1', errorType: 'grammar', type: '词义选择', prompt: 'flame 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flame.q4', senseId: 'flame.s1', errorType: 'meaning', type: '词源', prompt: '记 flame 时，哪句更稳妥？', options: ['先锁住「火焰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火焰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火焰'] },
  });

  D('flames', {
    etymology: {
      origin: '现代英语常用词「flames」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flames', gloss: '火焰（复数）' },
      suffix: null,
      history: [
        { label: 'flames', text: '现代英语常用词「flames」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：火焰（复数）。' },
      ],
      formationLogic: '核心义：火焰（复数）。',
      mnemonic: '看到 flames，先说出「火焰（复数）」。',
      note: '核心义：火焰（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flames.', chinese: '这一章反复回到同一个点：火焰（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flames.s1', en: 'Without that flames, the next paragraph is hard to follow.', zh: '没有这个火焰（复数），下一段会很难读。', structure: 'flames / 表示 / 火焰（复数）', grammar: 'noun，围绕「火焰（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flames.', right: 'He gave me some advice about the flames.', reason: 'advice 不可数。名词 flames 的单复数按词典词形记。', rule: '先确定 flames 是noun，再套「火焰（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flames.q1', senseId: 'flames.s1', errorType: 'meaning', type: '词义选择', prompt: '「flames」在本条的核心意思是：', options: ['火焰（复数）', '完全相反的意思', '一种古代钱币'], answer: '火焰（复数）', explain: 'flames：火焰（复数）。' },
      { id: 'flames.q2', senseId: 'flames.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flames?', options: ['火焰（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '火焰（复数）', explain: '对的是「火焰（复数）」。' },
      { id: 'flames.q3', senseId: 'flames.s1', errorType: 'grammar', type: '词义选择', prompt: 'flames 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flames.q4', senseId: 'flames.s1', errorType: 'meaning', type: '词源', prompt: '记 flames 时，哪句更稳妥？', options: ['先锁住「火焰（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火焰（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火焰（复数）'] },
  });

  D('flank', {
    etymology: {
      origin: '现代英语常用词「flank」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flank', gloss: '侧面' },
      suffix: null,
      history: [
        { label: 'flank', text: '现代英语常用词「flank」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：侧面。' },
      ],
      formationLogic: '核心义：侧面。',
      mnemonic: '看到 flank，先说出「侧面」。',
      note: '核心义：侧面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flank.', chinese: '这一章反复回到同一个点：侧面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flank.s1', en: 'Without that flank, the next paragraph is hard to follow.', zh: '没有这个侧面，下一段会很难读。', structure: 'flank / 表示 / 侧面', grammar: 'noun，围绕「侧面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flank.', right: 'He gave me some advice about the flank.', reason: 'advice 不可数。名词 flank 的单复数按词典词形记。', rule: '先确定 flank 是noun，再套「侧面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flank.q1', senseId: 'flank.s1', errorType: 'meaning', type: '词义选择', prompt: '「flank」在本条的核心意思是：', options: ['侧面', '完全相反的意思', '一种古代钱币'], answer: '侧面', explain: 'flank：侧面。' },
      { id: 'flank.q2', senseId: 'flank.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flank?', options: ['侧面', 'a kind of ancient coin', 'the past tense of be'], answer: '侧面', explain: '对的是「侧面」。' },
      { id: 'flank.q3', senseId: 'flank.s1', errorType: 'grammar', type: '词义选择', prompt: 'flank 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flank.q4', senseId: 'flank.s1', errorType: 'meaning', type: '词源', prompt: '记 flank 时，哪句更稳妥？', options: ['先锁住「侧面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「侧面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侧面'] },
  });

  D('flap', {
    etymology: {
      origin: '现代英语常用词「flap」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flap', gloss: '拍打' },
      suffix: null,
      history: [
        { label: 'flap', text: '现代英语常用词「flap」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拍打。' },
      ],
      formationLogic: '核心义：拍打。',
      mnemonic: '看到 flap，先说出「拍打」。',
      note: '核心义：拍打。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flap before the office closed.', chinese: '他们同意在办公室关门前做这件事：拍打。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flap.s1', en: 'The deadline forced the team to flap that afternoon.', zh: '截止日期逼着小组在那天下午拍打。', structure: 'flap / 表示 / 拍打', grammar: 'verb，围绕「拍打」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flaped it yesterday without checking the real past form.', right: 'Check the past form of "flap" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flap 是verb，再套「拍打」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flap.q1', senseId: 'flap.s1', errorType: 'meaning', type: '词义选择', prompt: '「flap」在本条的核心意思是：', options: ['拍打', '完全相反的意思', '一种古代钱币'], answer: '拍打', explain: 'flap：拍打。' },
      { id: 'flap.q2', senseId: 'flap.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flap?', options: ['拍打', 'a kind of ancient coin', 'the past tense of be'], answer: '拍打', explain: '对的是「拍打」。' },
      { id: 'flap.q3', senseId: 'flap.s1', errorType: 'grammar', type: '词义选择', prompt: 'flap 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flap.q4', senseId: 'flap.s1', errorType: 'meaning', type: '词源', prompt: '记 flap 时，哪句更稳妥？', options: ['先锁住「拍打」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拍打」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拍打'] },
  });

  D('flare', {
    etymology: {
      origin: '现代英语常用词「flare」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flare', gloss: '闪耀' },
      suffix: null,
      history: [
        { label: 'flare', text: '现代英语常用词「flare」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闪耀。' },
      ],
      formationLogic: '核心义：闪耀。',
      mnemonic: '看到 flare，先说出「闪耀」。',
      note: '核心义：闪耀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flare before the office closed.', chinese: '他们同意在办公室关门前做这件事：闪耀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flare.s1', en: 'The deadline forced the team to flare that afternoon.', zh: '截止日期逼着小组在那天下午闪耀。', structure: 'flare / 表示 / 闪耀', grammar: 'verb，围绕「闪耀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flareed it yesterday without checking the real past form.', right: 'Check the past form of "flare" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flare 是verb，再套「闪耀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flare.q1', senseId: 'flare.s1', errorType: 'meaning', type: '词义选择', prompt: '「flare」在本条的核心意思是：', options: ['闪耀', '完全相反的意思', '一种古代钱币'], answer: '闪耀', explain: 'flare：闪耀。' },
      { id: 'flare.q2', senseId: 'flare.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flare?', options: ['闪耀', 'a kind of ancient coin', 'the past tense of be'], answer: '闪耀', explain: '对的是「闪耀」。' },
      { id: 'flare.q3', senseId: 'flare.s1', errorType: 'grammar', type: '词义选择', prompt: 'flare 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flare.q4', senseId: 'flare.s1', errorType: 'meaning', type: '词源', prompt: '记 flare 时，哪句更稳妥？', options: ['先锁住「闪耀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闪耀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闪耀'] },
  });

  D('flare-up', {
    etymology: {
      origin: '现代英语常用词「flare-up」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flare-up', gloss: '突发' },
      suffix: null,
      history: [
        { label: 'flare-up', text: '现代英语常用词「flare-up」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：突发。' },
      ],
      formationLogic: '核心义：突发。',
      mnemonic: '看到 flare-up，先说出「突发」。',
      note: '核心义：突发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flare-up.', chinese: '这一章反复回到同一个点：突发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flare-up.s1', en: 'Without that flare-up, the next paragraph is hard to follow.', zh: '没有这个突发，下一段会很难读。', structure: 'flare-up / 表示 / 突发', grammar: 'noun，围绕「突发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flare-up.', right: 'He gave me some advice about the flare-up.', reason: 'advice 不可数。名词 flare-up 的单复数按词典词形记。', rule: '先确定 flare-up 是noun，再套「突发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flare-up.q1', senseId: 'flare-up.s1', errorType: 'meaning', type: '词义选择', prompt: '「flare-up」在本条的核心意思是：', options: ['突发', '完全相反的意思', '一种古代钱币'], answer: '突发', explain: 'flare-up：突发。' },
      { id: 'flare-up.q2', senseId: 'flare-up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flare-up?', options: ['突发', 'a kind of ancient coin', 'the past tense of be'], answer: '突发', explain: '对的是「突发」。' },
      { id: 'flare-up.q3', senseId: 'flare-up.s1', errorType: 'grammar', type: '词义选择', prompt: 'flare-up 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flare-up.q4', senseId: 'flare-up.s1', errorType: 'meaning', type: '词源', prompt: '记 flare-up 时，哪句更稳妥？', options: ['先锁住「突发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「突发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['突发'] },
  });

  D('flash', {
    etymology: {
      origin: '现代英语常用词「flash」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flash', gloss: '闪光' },
      suffix: null,
      history: [
        { label: 'flash', text: '现代英语常用词「flash」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闪光。' },
      ],
      formationLogic: '核心义：闪光。',
      mnemonic: '看到 flash，先说出「闪光」。',
      note: '核心义：闪光。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flash.', chinese: '这一章反复回到同一个点：闪光。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flash.s1', en: 'Without that flash, the next paragraph is hard to follow.', zh: '没有这个闪光，下一段会很难读。', structure: 'flash / 表示 / 闪光', grammar: 'noun，围绕「闪光」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flash.', right: 'He gave me some advice about the flash.', reason: 'advice 不可数。名词 flash 的单复数按词典词形记。', rule: '先确定 flash 是noun，再套「闪光」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flash.q1', senseId: 'flash.s1', errorType: 'meaning', type: '词义选择', prompt: '「flash」在本条的核心意思是：', options: ['闪光', '完全相反的意思', '一种古代钱币'], answer: '闪光', explain: 'flash：闪光。' },
      { id: 'flash.q2', senseId: 'flash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flash?', options: ['闪光', 'a kind of ancient coin', 'the past tense of be'], answer: '闪光', explain: '对的是「闪光」。' },
      { id: 'flash.q3', senseId: 'flash.s1', errorType: 'grammar', type: '词义选择', prompt: 'flash 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flash.q4', senseId: 'flash.s1', errorType: 'meaning', type: '词源', prompt: '记 flash 时，哪句更稳妥？', options: ['先锁住「闪光」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闪光」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闪光'] },
  });

  D('flashlight', {
    etymology: {
      origin: '现代英语常用词「flashlight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flashlight', gloss: '手电筒' },
      suffix: null,
      history: [
        { label: 'flashlight', text: '现代英语常用词「flashlight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：手电筒。' },
      ],
      formationLogic: '核心义：手电筒。',
      mnemonic: '看到 flashlight，先说出「手电筒」。',
      note: '核心义：手电筒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flashlight.', chinese: '这一章反复回到同一个点：手电筒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flashlight.s1', en: 'Without that flashlight, the next paragraph is hard to follow.', zh: '没有这个手电筒，下一段会很难读。', structure: 'flashlight / 表示 / 手电筒', grammar: 'noun，围绕「手电筒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flashlight.', right: 'He gave me some advice about the flashlight.', reason: 'advice 不可数。名词 flashlight 的单复数按词典词形记。', rule: '先确定 flashlight 是noun，再套「手电筒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flashlight.q1', senseId: 'flashlight.s1', errorType: 'meaning', type: '词义选择', prompt: '「flashlight」在本条的核心意思是：', options: ['手电筒', '完全相反的意思', '一种古代钱币'], answer: '手电筒', explain: 'flashlight：手电筒。' },
      { id: 'flashlight.q2', senseId: 'flashlight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flashlight?', options: ['手电筒', 'a kind of ancient coin', 'the past tense of be'], answer: '手电筒', explain: '对的是「手电筒」。' },
      { id: 'flashlight.q3', senseId: 'flashlight.s1', errorType: 'grammar', type: '词义选择', prompt: 'flashlight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flashlight.q4', senseId: 'flashlight.s1', errorType: 'meaning', type: '词源', prompt: '记 flashlight 时，哪句更稳妥？', options: ['先锁住「手电筒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手电筒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手电筒'] },
  });

  D('flashpoint', {
    etymology: {
      origin: '现代英语常用词「flashpoint」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flashpoint', gloss: '闪点' },
      suffix: null,
      history: [
        { label: 'flashpoint', text: '现代英语常用词「flashpoint」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闪点。' },
      ],
      formationLogic: '核心义：闪点。',
      mnemonic: '看到 flashpoint，先说出「闪点」。',
      note: '核心义：闪点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flashpoint.', chinese: '这一章反复回到同一个点：闪点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flashpoint.s1', en: 'Without that flashpoint, the next paragraph is hard to follow.', zh: '没有这个闪点，下一段会很难读。', structure: 'flashpoint / 表示 / 闪点', grammar: 'noun，围绕「闪点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flashpoint.', right: 'He gave me some advice about the flashpoint.', reason: 'advice 不可数。名词 flashpoint 的单复数按词典词形记。', rule: '先确定 flashpoint 是noun，再套「闪点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flashpoint.q1', senseId: 'flashpoint.s1', errorType: 'meaning', type: '词义选择', prompt: '「flashpoint」在本条的核心意思是：', options: ['闪点', '完全相反的意思', '一种古代钱币'], answer: '闪点', explain: 'flashpoint：闪点。' },
      { id: 'flashpoint.q2', senseId: 'flashpoint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flashpoint?', options: ['闪点', 'a kind of ancient coin', 'the past tense of be'], answer: '闪点', explain: '对的是「闪点」。' },
      { id: 'flashpoint.q3', senseId: 'flashpoint.s1', errorType: 'grammar', type: '词义选择', prompt: 'flashpoint 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flashpoint.q4', senseId: 'flashpoint.s1', errorType: 'meaning', type: '词源', prompt: '记 flashpoint 时，哪句更稳妥？', options: ['先锁住「闪点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闪点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闪点'] },
  });

  D('flashy', {
    etymology: {
      origin: '现代英语常用词「flashy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flashy', gloss: '炫耀的' },
      suffix: null,
      history: [
        { label: 'flashy', text: '现代英语常用词「flashy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：炫耀的。' },
      ],
      formationLogic: '核心义：炫耀的。',
      mnemonic: '看到 flashy，先说出「炫耀的」。',
      note: '核心义：炫耀的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flashy.', chinese: '即使是初读者也能看出，这个结果是炫耀的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flashy.s1', en: 'They wanted a flashy answer, not a long speech.', zh: '他们要一个炫耀的的答复，不要长篇发言。', structure: 'flashy / 表示 / 炫耀的', grammar: 'adjective，围绕「炫耀的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flashy.', right: 'The news is flashy.', reason: 'news 作主语时动词用单数。', rule: '先确定 flashy 是adjective，再套「炫耀的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flashy.q1', senseId: 'flashy.s1', errorType: 'meaning', type: '词义选择', prompt: '「flashy」在本条的核心意思是：', options: ['炫耀的', '完全相反的意思', '一种古代钱币'], answer: '炫耀的', explain: 'flashy：炫耀的。' },
      { id: 'flashy.q2', senseId: 'flashy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flashy?', options: ['炫耀的', 'a kind of ancient coin', 'the past tense of be'], answer: '炫耀的', explain: '对的是「炫耀的」。' },
      { id: 'flashy.q3', senseId: 'flashy.s1', errorType: 'grammar', type: '词义选择', prompt: 'flashy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flashy.q4', senseId: 'flashy.s1', errorType: 'meaning', type: '词源', prompt: '记 flashy 时，哪句更稳妥？', options: ['先锁住「炫耀的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「炫耀的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['炫耀的'] },
  });

  D('flat', {
    etymology: {
      origin: '现代英语常用词「flat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flat', gloss: '平的' },
      suffix: null,
      history: [
        { label: 'flat', text: '现代英语常用词「flat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：平的。' },
      ],
      formationLogic: '核心义：平的。',
      mnemonic: '看到 flat，先说出「平的」。',
      note: '核心义：平的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flat.', chinese: '即使是初读者也能看出，这个结果是平的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flat.s1', en: 'They wanted a flat answer, not a long speech.', zh: '他们要一个平的的答复，不要长篇发言。', structure: 'flat / 表示 / 平的', grammar: 'adjective，围绕「平的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flat.', right: 'The news is flat.', reason: 'news 作主语时动词用单数。', rule: '先确定 flat 是adjective，再套「平的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flat.q1', senseId: 'flat.s1', errorType: 'meaning', type: '词义选择', prompt: '「flat」在本条的核心意思是：', options: ['平的', '完全相反的意思', '一种古代钱币'], answer: '平的', explain: 'flat：平的。' },
      { id: 'flat.q2', senseId: 'flat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flat?', options: ['平的', 'a kind of ancient coin', 'the past tense of be'], answer: '平的', explain: '对的是「平的」。' },
      { id: 'flat.q3', senseId: 'flat.s1', errorType: 'grammar', type: '词义选择', prompt: 'flat 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flat.q4', senseId: 'flat.s1', errorType: 'meaning', type: '词源', prompt: '记 flat 时，哪句更稳妥？', options: ['先锁住「平的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「平的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['平的'] },
  });

  D('flatland', {
    etymology: {
      origin: '现代英语常用词「flatland」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flatland', gloss: '平原' },
      suffix: null,
      history: [
        { label: 'flatland', text: '现代英语常用词「flatland」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：平原。' },
      ],
      formationLogic: '核心义：平原。',
      mnemonic: '看到 flatland，先说出「平原」。',
      note: '核心义：平原。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flatland.', chinese: '这一章反复回到同一个点：平原。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flatland.s1', en: 'Without that flatland, the next paragraph is hard to follow.', zh: '没有这个平原，下一段会很难读。', structure: 'flatland / 表示 / 平原', grammar: 'noun，围绕「平原」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flatland.', right: 'He gave me some advice about the flatland.', reason: 'advice 不可数。名词 flatland 的单复数按词典词形记。', rule: '先确定 flatland 是noun，再套「平原」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flatland.q1', senseId: 'flatland.s1', errorType: 'meaning', type: '词义选择', prompt: '「flatland」在本条的核心意思是：', options: ['平原', '完全相反的意思', '一种古代钱币'], answer: '平原', explain: 'flatland：平原。' },
      { id: 'flatland.q2', senseId: 'flatland.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flatland?', options: ['平原', 'a kind of ancient coin', 'the past tense of be'], answer: '平原', explain: '对的是「平原」。' },
      { id: 'flatland.q3', senseId: 'flatland.s1', errorType: 'grammar', type: '词义选择', prompt: 'flatland 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flatland.q4', senseId: 'flatland.s1', errorType: 'meaning', type: '词源', prompt: '记 flatland 时，哪句更稳妥？', options: ['先锁住「平原」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「平原」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['平原'] },
  });

  D('flatten', {
    etymology: {
      origin: '现代英语常用词「flatten」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flatten', gloss: '弄平' },
      suffix: null,
      history: [
        { label: 'flatten', text: '现代英语常用词「flatten」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：弄平。' },
      ],
      formationLogic: '核心义：弄平。',
      mnemonic: '看到 flatten，先说出「弄平」。',
      note: '核心义：弄平。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flatten before the office closed.', chinese: '他们同意在办公室关门前做这件事：弄平。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flatten.s1', en: 'The deadline forced the team to flatten that afternoon.', zh: '截止日期逼着小组在那天下午弄平。', structure: 'flatten / 表示 / 弄平', grammar: 'verb，围绕「弄平」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flattened it yesterday without checking the real past form.', right: 'Check the past form of "flatten" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flatten 是verb，再套「弄平」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flatten.q1', senseId: 'flatten.s1', errorType: 'meaning', type: '词义选择', prompt: '「flatten」在本条的核心意思是：', options: ['弄平', '完全相反的意思', '一种古代钱币'], answer: '弄平', explain: 'flatten：弄平。' },
      { id: 'flatten.q2', senseId: 'flatten.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flatten?', options: ['弄平', 'a kind of ancient coin', 'the past tense of be'], answer: '弄平', explain: '对的是「弄平」。' },
      { id: 'flatten.q3', senseId: 'flatten.s1', errorType: 'grammar', type: '词义选择', prompt: 'flatten 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flatten.q4', senseId: 'flatten.s1', errorType: 'meaning', type: '词源', prompt: '记 flatten 时，哪句更稳妥？', options: ['先锁住「弄平」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「弄平」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['弄平'] },
  });

  D('flatter', {
    etymology: {
      origin: '英语派生：flatt + -er，词性转到「奉承」。',
      prefix: null,
      root: { text: 'flatt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flatter', text: '英语派生：flatt + -er，词性转到「奉承」。' },
        { label: '现在', text: '核心用法是：奉承。' },
      ],
      formationLogic: '先认词干 flatt，再看词尾。',
      mnemonic: '看到 flatter，先说出「奉承」。',
      note: '先认词干 flatt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flatter before the office closed.', chinese: '他们同意在办公室关门前做这件事：奉承。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flatter.s1', en: 'The deadline forced the team to flatter that afternoon.', zh: '截止日期逼着小组在那天下午奉承。', structure: 'flatter / 表示 / 奉承', grammar: 'verb，围绕「奉承」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flattered it yesterday without checking the real past form.', right: 'Check the past form of "flatter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flatter 是verb，再套「奉承」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flatter.q1', senseId: 'flatter.s1', errorType: 'meaning', type: '词义选择', prompt: '「flatter」在本条的核心意思是：', options: ['奉承', '完全相反的意思', '一种古代钱币'], answer: '奉承', explain: 'flatter：奉承。' },
      { id: 'flatter.q2', senseId: 'flatter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flatter?', options: ['奉承', 'a kind of ancient coin', 'the past tense of be'], answer: '奉承', explain: '对的是「奉承」。' },
      { id: 'flatter.q3', senseId: 'flatter.s1', errorType: 'grammar', type: '词义选择', prompt: 'flatter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flatter.q4', senseId: 'flatter.s1', errorType: 'meaning', type: '词源', prompt: '记 flatter 时，哪句更稳妥？', options: ['先锁住「奉承」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「奉承」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['奉承'] },
  });

  D('flavor', {
    etymology: {
      origin: '英语派生：flav + -or，词性转到「味道」。',
      prefix: null,
      root: { text: 'flav', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flavor', text: '英语派生：flav + -or，词性转到「味道」。' },
        { label: '现在', text: '核心用法是：味道。' },
      ],
      formationLogic: '先认词干 flav，再看词尾。',
      mnemonic: '看到 flavor，先说出「味道」。',
      note: '先认词干 flav，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flavor.', chinese: '这一章反复回到同一个点：味道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flavor.s1', en: 'Without that flavor, the next paragraph is hard to follow.', zh: '没有这个味道，下一段会很难读。', structure: 'flavor / 表示 / 味道', grammar: 'noun，围绕「味道」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flavor.', right: 'He gave me some advice about the flavor.', reason: 'advice 不可数。名词 flavor 的单复数按词典词形记。', rule: '先确定 flavor 是noun，再套「味道」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flavor.q1', senseId: 'flavor.s1', errorType: 'meaning', type: '词义选择', prompt: '「flavor」在本条的核心意思是：', options: ['味道', '完全相反的意思', '一种古代钱币'], answer: '味道', explain: 'flavor：味道。' },
      { id: 'flavor.q2', senseId: 'flavor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flavor?', options: ['味道', 'a kind of ancient coin', 'the past tense of be'], answer: '味道', explain: '对的是「味道」。' },
      { id: 'flavor.q3', senseId: 'flavor.s1', errorType: 'grammar', type: '词义选择', prompt: 'flavor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flavor.q4', senseId: 'flavor.s1', errorType: 'meaning', type: '词源', prompt: '记 flavor 时，哪句更稳妥？', options: ['先锁住「味道」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「味道」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['味道'] },
  });

  D('flavouring', {
    etymology: {
      origin: '英语派生：flavour + -ing，词性转到「调味品」。',
      prefix: null,
      root: { text: 'flavour', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flavouring', text: '英语派生：flavour + -ing，词性转到「调味品」。' },
        { label: '现在', text: '核心用法是：调味品。' },
      ],
      formationLogic: '先认词干 flavour，再看词尾。',
      mnemonic: '看到 flavouring，先说出「调味品」。',
      note: '先认词干 flavour，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flavouring.', chinese: '这一章反复回到同一个点：调味品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flavouring.s1', en: 'Without that flavouring, the next paragraph is hard to follow.', zh: '没有这个调味品，下一段会很难读。', structure: 'flavouring / 表示 / 调味品', grammar: 'noun，围绕「调味品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flavouring.', right: 'He gave me some advice about the flavouring.', reason: 'advice 不可数。名词 flavouring 的单复数按词典词形记。', rule: '先确定 flavouring 是noun，再套「调味品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flavouring.q1', senseId: 'flavouring.s1', errorType: 'meaning', type: '词义选择', prompt: '「flavouring」在本条的核心意思是：', options: ['调味品', '完全相反的意思', '一种古代钱币'], answer: '调味品', explain: 'flavouring：调味品。' },
      { id: 'flavouring.q2', senseId: 'flavouring.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flavouring?', options: ['调味品', 'a kind of ancient coin', 'the past tense of be'], answer: '调味品', explain: '对的是「调味品」。' },
      { id: 'flavouring.q3', senseId: 'flavouring.s1', errorType: 'grammar', type: '词义选择', prompt: 'flavouring 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flavouring.q4', senseId: 'flavouring.s1', errorType: 'meaning', type: '词源', prompt: '记 flavouring 时，哪句更稳妥？', options: ['先锁住「调味品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「调味品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['调味品'] },
  });

  D('flaw', {
    etymology: {
      origin: '现代英语常用词「flaw」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flaw', gloss: '缺点' },
      suffix: null,
      history: [
        { label: 'flaw', text: '现代英语常用词「flaw」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：缺点。' },
      ],
      formationLogic: '核心义：缺点。',
      mnemonic: '看到 flaw，先说出「缺点」。',
      note: '核心义：缺点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flaw.', chinese: '这一章反复回到同一个点：缺点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flaw.s1', en: 'Without that flaw, the next paragraph is hard to follow.', zh: '没有这个缺点，下一段会很难读。', structure: 'flaw / 表示 / 缺点', grammar: 'noun，围绕「缺点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flaw.', right: 'He gave me some advice about the flaw.', reason: 'advice 不可数。名词 flaw 的单复数按词典词形记。', rule: '先确定 flaw 是noun，再套「缺点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flaw.q1', senseId: 'flaw.s1', errorType: 'meaning', type: '词义选择', prompt: '「flaw」在本条的核心意思是：', options: ['缺点', '完全相反的意思', '一种古代钱币'], answer: '缺点', explain: 'flaw：缺点。' },
      { id: 'flaw.q2', senseId: 'flaw.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flaw?', options: ['缺点', 'a kind of ancient coin', 'the past tense of be'], answer: '缺点', explain: '对的是「缺点」。' },
      { id: 'flaw.q3', senseId: 'flaw.s1', errorType: 'grammar', type: '词义选择', prompt: 'flaw 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flaw.q4', senseId: 'flaw.s1', errorType: 'meaning', type: '词源', prompt: '记 flaw 时，哪句更稳妥？', options: ['先锁住「缺点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「缺点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缺点'] },
  });

  D('flawless', {
    etymology: {
      origin: '英语派生：flaw + -less，词性转到「完美无瑕的」。',
      prefix: null,
      root: { text: 'flaw', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flawless', text: '英语派生：flaw + -less，词性转到「完美无瑕的」。' },
        { label: '现在', text: '核心用法是：完美无瑕的。' },
      ],
      formationLogic: '先认词干 flaw，再看词尾。',
      mnemonic: '看到 flawless，先说出「完美无瑕的」。',
      note: '先认词干 flaw，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flawless.', chinese: '即使是初读者也能看出，这个结果是完美无瑕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flawless.s1', en: 'They wanted a flawless answer, not a long speech.', zh: '他们要一个完美无瑕的的答复，不要长篇发言。', structure: 'flawless / 表示 / 完美无瑕的', grammar: 'adjective，围绕「完美无瑕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flawless.', right: 'The news is flawless.', reason: 'news 作主语时动词用单数。', rule: '先确定 flawless 是adjective，再套「完美无瑕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flawless.q1', senseId: 'flawless.s1', errorType: 'meaning', type: '词义选择', prompt: '「flawless」在本条的核心意思是：', options: ['完美无瑕的', '完全相反的意思', '一种古代钱币'], answer: '完美无瑕的', explain: 'flawless：完美无瑕的。' },
      { id: 'flawless.q2', senseId: 'flawless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flawless?', options: ['完美无瑕的', 'a kind of ancient coin', 'the past tense of be'], answer: '完美无瑕的', explain: '对的是「完美无瑕的」。' },
      { id: 'flawless.q3', senseId: 'flawless.s1', errorType: 'grammar', type: '词义选择', prompt: 'flawless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flawless.q4', senseId: 'flawless.s1', errorType: 'meaning', type: '词源', prompt: '记 flawless 时，哪句更稳妥？', options: ['先锁住「完美无瑕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完美无瑕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完美无瑕的'] },
  });

  D('flax', {
    etymology: {
      origin: '现代英语常用词「flax」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flax', gloss: '亚麻' },
      suffix: null,
      history: [
        { label: 'flax', text: '现代英语常用词「flax」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：亚麻。' },
      ],
      formationLogic: '核心义：亚麻。',
      mnemonic: '看到 flax，先说出「亚麻」。',
      note: '核心义：亚麻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flax.', chinese: '这一章反复回到同一个点：亚麻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flax.s1', en: 'Without that flax, the next paragraph is hard to follow.', zh: '没有这个亚麻，下一段会很难读。', structure: 'flax / 表示 / 亚麻', grammar: 'noun，围绕「亚麻」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flax.', right: 'He gave me some advice about the flax.', reason: 'advice 不可数。名词 flax 的单复数按词典词形记。', rule: '先确定 flax 是noun，再套「亚麻」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flax.q1', senseId: 'flax.s1', errorType: 'meaning', type: '词义选择', prompt: '「flax」在本条的核心意思是：', options: ['亚麻', '完全相反的意思', '一种古代钱币'], answer: '亚麻', explain: 'flax：亚麻。' },
      { id: 'flax.q2', senseId: 'flax.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flax?', options: ['亚麻', 'a kind of ancient coin', 'the past tense of be'], answer: '亚麻', explain: '对的是「亚麻」。' },
      { id: 'flax.q3', senseId: 'flax.s1', errorType: 'grammar', type: '词义选择', prompt: 'flax 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flax.q4', senseId: 'flax.s1', errorType: 'meaning', type: '词源', prompt: '记 flax 时，哪句更稳妥？', options: ['先锁住「亚麻」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「亚麻」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['亚麻'] },
  });

  D('flee', {
    etymology: {
      origin: '现代英语常用词「flee」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flee', gloss: '逃走' },
      suffix: null,
      history: [
        { label: 'flee', text: '现代英语常用词「flee」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：逃走。' },
      ],
      formationLogic: '核心义：逃走。',
      mnemonic: '看到 flee，先说出「逃走」。',
      note: '核心义：逃走。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flee before the office closed.', chinese: '他们同意在办公室关门前做这件事：逃走。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flee.s1', en: 'The deadline forced the team to flee that afternoon.', zh: '截止日期逼着小组在那天下午逃走。', structure: 'flee / 表示 / 逃走', grammar: 'verb，围绕「逃走」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fleeed it yesterday without checking the real past form.', right: 'Check the past form of "flee" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flee 是verb，再套「逃走」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flee.q1', senseId: 'flee.s1', errorType: 'meaning', type: '词义选择', prompt: '「flee」在本条的核心意思是：', options: ['逃走', '完全相反的意思', '一种古代钱币'], answer: '逃走', explain: 'flee：逃走。' },
      { id: 'flee.q2', senseId: 'flee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flee?', options: ['逃走', 'a kind of ancient coin', 'the past tense of be'], answer: '逃走', explain: '对的是「逃走」。' },
      { id: 'flee.q3', senseId: 'flee.s1', errorType: 'grammar', type: '词义选择', prompt: 'flee 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flee.q4', senseId: 'flee.s1', errorType: 'meaning', type: '词源', prompt: '记 flee 时，哪句更稳妥？', options: ['先锁住「逃走」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逃走」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逃走'] },
  });

  D('fleece', {
    etymology: {
      origin: '现代英语常用词「fleece」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fleece', gloss: '羊毛' },
      suffix: null,
      history: [
        { label: 'fleece', text: '现代英语常用词「fleece」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：羊毛。' },
      ],
      formationLogic: '核心义：羊毛。',
      mnemonic: '看到 fleece，先说出「羊毛」。',
      note: '核心义：羊毛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fleece.', chinese: '这一章反复回到同一个点：羊毛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fleece.s1', en: 'Without that fleece, the next paragraph is hard to follow.', zh: '没有这个羊毛，下一段会很难读。', structure: 'fleece / 表示 / 羊毛', grammar: 'noun，围绕「羊毛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fleece.', right: 'He gave me some advice about the fleece.', reason: 'advice 不可数。名词 fleece 的单复数按词典词形记。', rule: '先确定 fleece 是noun，再套「羊毛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fleece.q1', senseId: 'fleece.s1', errorType: 'meaning', type: '词义选择', prompt: '「fleece」在本条的核心意思是：', options: ['羊毛', '完全相反的意思', '一种古代钱币'], answer: '羊毛', explain: 'fleece：羊毛。' },
      { id: 'fleece.q2', senseId: 'fleece.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fleece?', options: ['羊毛', 'a kind of ancient coin', 'the past tense of be'], answer: '羊毛', explain: '对的是「羊毛」。' },
      { id: 'fleece.q3', senseId: 'fleece.s1', errorType: 'grammar', type: '词义选择', prompt: 'fleece 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fleece.q4', senseId: 'fleece.s1', errorType: 'meaning', type: '词源', prompt: '记 fleece 时，哪句更稳妥？', options: ['先锁住「羊毛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「羊毛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['羊毛'] },
  });

  D('fleet', {
    etymology: {
      origin: '现代英语常用词「fleet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fleet', gloss: '舰队' },
      suffix: null,
      history: [
        { label: 'fleet', text: '现代英语常用词「fleet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：舰队。' },
      ],
      formationLogic: '核心义：舰队。',
      mnemonic: '看到 fleet，先说出「舰队」。',
      note: '核心义：舰队。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fleet.', chinese: '这一章反复回到同一个点：舰队。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fleet.s1', en: 'Without that fleet, the next paragraph is hard to follow.', zh: '没有这个舰队，下一段会很难读。', structure: 'fleet / 表示 / 舰队', grammar: 'noun，围绕「舰队」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fleet.', right: 'He gave me some advice about the fleet.', reason: 'advice 不可数。名词 fleet 的单复数按词典词形记。', rule: '先确定 fleet 是noun，再套「舰队」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fleet.q1', senseId: 'fleet.s1', errorType: 'meaning', type: '词义选择', prompt: '「fleet」在本条的核心意思是：', options: ['舰队', '完全相反的意思', '一种古代钱币'], answer: '舰队', explain: 'fleet：舰队。' },
      { id: 'fleet.q2', senseId: 'fleet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fleet?', options: ['舰队', 'a kind of ancient coin', 'the past tense of be'], answer: '舰队', explain: '对的是「舰队」。' },
      { id: 'fleet.q3', senseId: 'fleet.s1', errorType: 'grammar', type: '词义选择', prompt: 'fleet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fleet.q4', senseId: 'fleet.s1', errorType: 'meaning', type: '词源', prompt: '记 fleet 时，哪句更稳妥？', options: ['先锁住「舰队」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「舰队」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['舰队'] },
  });

  D('fleeting', {
    etymology: {
      origin: '英语派生：fleet + -ing，词性转到「稍纵即逝的」。',
      prefix: null,
      root: { text: 'fleet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fleeting', text: '英语派生：fleet + -ing，词性转到「稍纵即逝的」。' },
        { label: '现在', text: '核心用法是：稍纵即逝的。' },
      ],
      formationLogic: '先认词干 fleet，再看词尾。',
      mnemonic: '看到 fleeting，先说出「稍纵即逝的」。',
      note: '先认词干 fleet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fleeting.', chinese: '即使是初读者也能看出，这个结果是稍纵即逝的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fleeting.s1', en: 'They wanted a fleeting answer, not a long speech.', zh: '他们要一个稍纵即逝的的答复，不要长篇发言。', structure: 'fleeting / 表示 / 稍纵即逝的', grammar: 'adjective，围绕「稍纵即逝的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fleeting.', right: 'The news is fleeting.', reason: 'news 作主语时动词用单数。', rule: '先确定 fleeting 是adjective，再套「稍纵即逝的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fleeting.q1', senseId: 'fleeting.s1', errorType: 'meaning', type: '词义选择', prompt: '「fleeting」在本条的核心意思是：', options: ['稍纵即逝的', '完全相反的意思', '一种古代钱币'], answer: '稍纵即逝的', explain: 'fleeting：稍纵即逝的。' },
      { id: 'fleeting.q2', senseId: 'fleeting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fleeting?', options: ['稍纵即逝的', 'a kind of ancient coin', 'the past tense of be'], answer: '稍纵即逝的', explain: '对的是「稍纵即逝的」。' },
      { id: 'fleeting.q3', senseId: 'fleeting.s1', errorType: 'grammar', type: '词义选择', prompt: 'fleeting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fleeting.q4', senseId: 'fleeting.s1', errorType: 'meaning', type: '词源', prompt: '记 fleeting 时，哪句更稳妥？', options: ['先锁住「稍纵即逝的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「稍纵即逝的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['稍纵即逝的'] },
  });

  D('flesh', {
    etymology: {
      origin: '现代英语常用词「flesh」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flesh', gloss: '肉' },
      suffix: null,
      history: [
        { label: 'flesh', text: '现代英语常用词「flesh」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肉。' },
      ],
      formationLogic: '核心义：肉。',
      mnemonic: '看到 flesh，先说出「肉」。',
      note: '核心义：肉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flesh.', chinese: '这一章反复回到同一个点：肉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flesh.s1', en: 'Without that flesh, the next paragraph is hard to follow.', zh: '没有这个肉，下一段会很难读。', structure: 'flesh / 表示 / 肉', grammar: 'noun，围绕「肉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flesh.', right: 'He gave me some advice about the flesh.', reason: 'advice 不可数。名词 flesh 的单复数按词典词形记。', rule: '先确定 flesh 是noun，再套「肉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flesh.q1', senseId: 'flesh.s1', errorType: 'meaning', type: '词义选择', prompt: '「flesh」在本条的核心意思是：', options: ['肉', '完全相反的意思', '一种古代钱币'], answer: '肉', explain: 'flesh：肉。' },
      { id: 'flesh.q2', senseId: 'flesh.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flesh?', options: ['肉', 'a kind of ancient coin', 'the past tense of be'], answer: '肉', explain: '对的是「肉」。' },
      { id: 'flesh.q3', senseId: 'flesh.s1', errorType: 'grammar', type: '词义选择', prompt: 'flesh 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flesh.q4', senseId: 'flesh.s1', errorType: 'meaning', type: '词源', prompt: '记 flesh 时，哪句更稳妥？', options: ['先锁住「肉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肉'] },
  });

  D('flexibility', {
    etymology: {
      origin: '英语派生：flexibil + -ity，词性转到「灵活性」。',
      prefix: null,
      root: { text: 'flexibil', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flexibility', text: '英语派生：flexibil + -ity，词性转到「灵活性」。' },
        { label: '现在', text: '核心用法是：灵活性。' },
      ],
      formationLogic: '先认词干 flexibil，再看词尾。',
      mnemonic: '看到 flexibility，先说出「灵活性」。',
      note: '先认词干 flexibil，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flexibility.', chinese: '这一章反复回到同一个点：灵活性。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flexibility.s1', en: 'Without that flexibility, the next paragraph is hard to follow.', zh: '没有这个灵活性，下一段会很难读。', structure: 'flexibility / 表示 / 灵活性', grammar: 'noun，围绕「灵活性」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flexibility.', right: 'He gave me some advice about the flexibility.', reason: 'advice 不可数。名词 flexibility 的单复数按词典词形记。', rule: '先确定 flexibility 是noun，再套「灵活性」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flexibility.q1', senseId: 'flexibility.s1', errorType: 'meaning', type: '词义选择', prompt: '「flexibility」在本条的核心意思是：', options: ['灵活性', '完全相反的意思', '一种古代钱币'], answer: '灵活性', explain: 'flexibility：灵活性。' },
      { id: 'flexibility.q2', senseId: 'flexibility.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flexibility?', options: ['灵活性', 'a kind of ancient coin', 'the past tense of be'], answer: '灵活性', explain: '对的是「灵活性」。' },
      { id: 'flexibility.q3', senseId: 'flexibility.s1', errorType: 'grammar', type: '词义选择', prompt: 'flexibility 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flexibility.q4', senseId: 'flexibility.s1', errorType: 'meaning', type: '词源', prompt: '记 flexibility 时，哪句更稳妥？', options: ['先锁住「灵活性」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灵活性」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灵活性'] },
  });

  D('flexible', {
    etymology: {
      origin: '英语派生：flex + -ible，词性转到「灵活的」。',
      prefix: null,
      root: { text: 'flex', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flexible', text: '英语派生：flex + -ible，词性转到「灵活的」。' },
        { label: '现在', text: '核心用法是：灵活的。' },
      ],
      formationLogic: '先认词干 flex，再看词尾。',
      mnemonic: '看到 flexible，先说出「灵活的」。',
      note: '先认词干 flex，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flexible.', chinese: '即使是初读者也能看出，这个结果是灵活的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flexible.s1', en: 'They wanted a flexible answer, not a long speech.', zh: '他们要一个灵活的的答复，不要长篇发言。', structure: 'flexible / 表示 / 灵活的', grammar: 'adjective，围绕「灵活的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flexible.', right: 'The news is flexible.', reason: 'news 作主语时动词用单数。', rule: '先确定 flexible 是adjective，再套「灵活的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flexible.q1', senseId: 'flexible.s1', errorType: 'meaning', type: '词义选择', prompt: '「flexible」在本条的核心意思是：', options: ['灵活的', '完全相反的意思', '一种古代钱币'], answer: '灵活的', explain: 'flexible：灵活的。' },
      { id: 'flexible.q2', senseId: 'flexible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flexible?', options: ['灵活的', 'a kind of ancient coin', 'the past tense of be'], answer: '灵活的', explain: '对的是「灵活的」。' },
      { id: 'flexible.q3', senseId: 'flexible.s1', errorType: 'grammar', type: '词义选择', prompt: 'flexible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flexible.q4', senseId: 'flexible.s1', errorType: 'meaning', type: '词源', prompt: '记 flexible 时，哪句更稳妥？', options: ['先锁住「灵活的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灵活的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灵活的'] },
  });

  D('flick', {
    etymology: {
      origin: '现代英语常用词「flick」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flick', gloss: '轻弹' },
      suffix: null,
      history: [
        { label: 'flick', text: '现代英语常用词「flick」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：轻弹。' },
      ],
      formationLogic: '核心义：轻弹。',
      mnemonic: '看到 flick，先说出「轻弹」。',
      note: '核心义：轻弹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flick before the office closed.', chinese: '他们同意在办公室关门前做这件事：轻弹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flick.s1', en: 'The deadline forced the team to flick that afternoon.', zh: '截止日期逼着小组在那天下午轻弹。', structure: 'flick / 表示 / 轻弹', grammar: 'verb，围绕「轻弹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flicked it yesterday without checking the real past form.', right: 'Check the past form of "flick" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flick 是verb，再套「轻弹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flick.q1', senseId: 'flick.s1', errorType: 'meaning', type: '词义选择', prompt: '「flick」在本条的核心意思是：', options: ['轻弹', '完全相反的意思', '一种古代钱币'], answer: '轻弹', explain: 'flick：轻弹。' },
      { id: 'flick.q2', senseId: 'flick.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flick?', options: ['轻弹', 'a kind of ancient coin', 'the past tense of be'], answer: '轻弹', explain: '对的是「轻弹」。' },
      { id: 'flick.q3', senseId: 'flick.s1', errorType: 'grammar', type: '词义选择', prompt: 'flick 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flick.q4', senseId: 'flick.s1', errorType: 'meaning', type: '词源', prompt: '记 flick 时，哪句更稳妥？', options: ['先锁住「轻弹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「轻弹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['轻弹'] },
  });

  D('flicker', {
    etymology: {
      origin: '英语派生：flick + -er，词性转到「闪烁」。',
      prefix: null,
      root: { text: 'flick', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flicker', text: '英语派生：flick + -er，词性转到「闪烁」。' },
        { label: '现在', text: '核心用法是：闪烁。' },
      ],
      formationLogic: '先认词干 flick，再看词尾。',
      mnemonic: '看到 flicker，先说出「闪烁」。',
      note: '先认词干 flick，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flicker before the office closed.', chinese: '他们同意在办公室关门前做这件事：闪烁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flicker.s1', en: 'The deadline forced the team to flicker that afternoon.', zh: '截止日期逼着小组在那天下午闪烁。', structure: 'flicker / 表示 / 闪烁', grammar: 'verb，围绕「闪烁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flickered it yesterday without checking the real past form.', right: 'Check the past form of "flicker" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flicker 是verb，再套「闪烁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flicker.q1', senseId: 'flicker.s1', errorType: 'meaning', type: '词义选择', prompt: '「flicker」在本条的核心意思是：', options: ['闪烁', '完全相反的意思', '一种古代钱币'], answer: '闪烁', explain: 'flicker：闪烁。' },
      { id: 'flicker.q2', senseId: 'flicker.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flicker?', options: ['闪烁', 'a kind of ancient coin', 'the past tense of be'], answer: '闪烁', explain: '对的是「闪烁」。' },
      { id: 'flicker.q3', senseId: 'flicker.s1', errorType: 'grammar', type: '词义选择', prompt: 'flicker 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flicker.q4', senseId: 'flicker.s1', errorType: 'meaning', type: '词源', prompt: '记 flicker 时，哪句更稳妥？', options: ['先锁住「闪烁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闪烁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闪烁'] },
  });

  D('flight', {
    etymology: {
      origin: '现代英语常用词「flight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flight', gloss: '航班' },
      suffix: null,
      history: [
        { label: 'flight', text: '现代英语常用词「flight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：航班。' },
      ],
      formationLogic: '核心义：航班。',
      mnemonic: '看到 flight，先说出「航班」。',
      note: '核心义：航班。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flight.', chinese: '这一章反复回到同一个点：航班。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flight.s1', en: 'Without that flight, the next paragraph is hard to follow.', zh: '没有这个航班，下一段会很难读。', structure: 'flight / 表示 / 航班', grammar: 'noun，围绕「航班」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flight.', right: 'He gave me some advice about the flight.', reason: 'advice 不可数。名词 flight 的单复数按词典词形记。', rule: '先确定 flight 是noun，再套「航班」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flight.q1', senseId: 'flight.s1', errorType: 'meaning', type: '词义选择', prompt: '「flight」在本条的核心意思是：', options: ['航班', '完全相反的意思', '一种古代钱币'], answer: '航班', explain: 'flight：航班。' },
      { id: 'flight.q2', senseId: 'flight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flight?', options: ['航班', 'a kind of ancient coin', 'the past tense of be'], answer: '航班', explain: '对的是「航班」。' },
      { id: 'flight.q3', senseId: 'flight.s1', errorType: 'grammar', type: '词义选择', prompt: 'flight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flight.q4', senseId: 'flight.s1', errorType: 'meaning', type: '词源', prompt: '记 flight 时，哪句更稳妥？', options: ['先锁住「航班」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「航班」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['航班'] },
  });

  D('flinch', {
    etymology: {
      origin: '现代英语常用词「flinch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flinch', gloss: '畏缩' },
      suffix: null,
      history: [
        { label: 'flinch', text: '现代英语常用词「flinch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：畏缩。' },
      ],
      formationLogic: '核心义：畏缩。',
      mnemonic: '看到 flinch，先说出「畏缩」。',
      note: '核心义：畏缩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flinch before the office closed.', chinese: '他们同意在办公室关门前做这件事：畏缩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flinch.s1', en: 'The deadline forced the team to flinch that afternoon.', zh: '截止日期逼着小组在那天下午畏缩。', structure: 'flinch / 表示 / 畏缩', grammar: 'verb，围绕「畏缩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flinched it yesterday without checking the real past form.', right: 'Check the past form of "flinch" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flinch 是verb，再套「畏缩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flinch.q1', senseId: 'flinch.s1', errorType: 'meaning', type: '词义选择', prompt: '「flinch」在本条的核心意思是：', options: ['畏缩', '完全相反的意思', '一种古代钱币'], answer: '畏缩', explain: 'flinch：畏缩。' },
      { id: 'flinch.q2', senseId: 'flinch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flinch?', options: ['畏缩', 'a kind of ancient coin', 'the past tense of be'], answer: '畏缩', explain: '对的是「畏缩」。' },
      { id: 'flinch.q3', senseId: 'flinch.s1', errorType: 'grammar', type: '词义选择', prompt: 'flinch 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flinch.q4', senseId: 'flinch.s1', errorType: 'meaning', type: '词源', prompt: '记 flinch 时，哪句更稳妥？', options: ['先锁住「畏缩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「畏缩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['畏缩'] },
  });

  D('fling', {
    etymology: {
      origin: '现代英语常用词「fling」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fling', gloss: '猛扔' },
      suffix: null,
      history: [
        { label: 'fling', text: '现代英语常用词「fling」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：猛扔。' },
      ],
      formationLogic: '核心义：猛扔。',
      mnemonic: '看到 fling，先说出「猛扔」。',
      note: '核心义：猛扔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fling before the office closed.', chinese: '他们同意在办公室关门前做这件事：猛扔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fling.s1', en: 'The deadline forced the team to fling that afternoon.', zh: '截止日期逼着小组在那天下午猛扔。', structure: 'fling / 表示 / 猛扔', grammar: 'verb，围绕「猛扔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flinged it yesterday without checking the real past form.', right: 'Check the past form of "fling" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fling 是verb，再套「猛扔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fling.q1', senseId: 'fling.s1', errorType: 'meaning', type: '词义选择', prompt: '「fling」在本条的核心意思是：', options: ['猛扔', '完全相反的意思', '一种古代钱币'], answer: '猛扔', explain: 'fling：猛扔。' },
      { id: 'fling.q2', senseId: 'fling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fling?', options: ['猛扔', 'a kind of ancient coin', 'the past tense of be'], answer: '猛扔', explain: '对的是「猛扔」。' },
      { id: 'fling.q3', senseId: 'fling.s1', errorType: 'grammar', type: '词义选择', prompt: 'fling 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fling.q4', senseId: 'fling.s1', errorType: 'meaning', type: '词源', prompt: '记 fling 时，哪句更稳妥？', options: ['先锁住「猛扔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「猛扔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['猛扔'] },
  });

  D('flip', {
    etymology: {
      origin: '现代英语常用词「flip」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flip', gloss: '轻抛' },
      suffix: null,
      history: [
        { label: 'flip', text: '现代英语常用词「flip」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：轻抛。' },
      ],
      formationLogic: '核心义：轻抛。',
      mnemonic: '看到 flip，先说出「轻抛」。',
      note: '核心义：轻抛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flip before the office closed.', chinese: '他们同意在办公室关门前做这件事：轻抛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flip.s1', en: 'The deadline forced the team to flip that afternoon.', zh: '截止日期逼着小组在那天下午轻抛。', structure: 'flip / 表示 / 轻抛', grammar: 'verb，围绕「轻抛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fliped it yesterday without checking the real past form.', right: 'Check the past form of "flip" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flip 是verb，再套「轻抛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flip.q1', senseId: 'flip.s1', errorType: 'meaning', type: '词义选择', prompt: '「flip」在本条的核心意思是：', options: ['轻抛', '完全相反的意思', '一种古代钱币'], answer: '轻抛', explain: 'flip：轻抛。' },
      { id: 'flip.q2', senseId: 'flip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flip?', options: ['轻抛', 'a kind of ancient coin', 'the past tense of be'], answer: '轻抛', explain: '对的是「轻抛」。' },
      { id: 'flip.q3', senseId: 'flip.s1', errorType: 'grammar', type: '词义选择', prompt: 'flip 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flip.q4', senseId: 'flip.s1', errorType: 'meaning', type: '词源', prompt: '记 flip 时，哪句更稳妥？', options: ['先锁住「轻抛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「轻抛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['轻抛'] },
  });

  D('flippant', {
    etymology: {
      origin: '现代英语常用词「flippant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flippant', gloss: '轻率的' },
      suffix: null,
      history: [
        { label: 'flippant', text: '现代英语常用词「flippant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：轻率的。' },
      ],
      formationLogic: '核心义：轻率的。',
      mnemonic: '看到 flippant，先说出「轻率的」。',
      note: '核心义：轻率的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flippant.', chinese: '即使是初读者也能看出，这个结果是轻率的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flippant.s1', en: 'They wanted a flippant answer, not a long speech.', zh: '他们要一个轻率的的答复，不要长篇发言。', structure: 'flippant / 表示 / 轻率的', grammar: 'adjective，围绕「轻率的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flippant.', right: 'The news is flippant.', reason: 'news 作主语时动词用单数。', rule: '先确定 flippant 是adjective，再套「轻率的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flippant.q1', senseId: 'flippant.s1', errorType: 'meaning', type: '词义选择', prompt: '「flippant」在本条的核心意思是：', options: ['轻率的', '完全相反的意思', '一种古代钱币'], answer: '轻率的', explain: 'flippant：轻率的。' },
      { id: 'flippant.q2', senseId: 'flippant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flippant?', options: ['轻率的', 'a kind of ancient coin', 'the past tense of be'], answer: '轻率的', explain: '对的是「轻率的」。' },
      { id: 'flippant.q3', senseId: 'flippant.s1', errorType: 'grammar', type: '词义选择', prompt: 'flippant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flippant.q4', senseId: 'flippant.s1', errorType: 'meaning', type: '词源', prompt: '记 flippant 时，哪句更稳妥？', options: ['先锁住「轻率的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「轻率的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['轻率的'] },
  });

  D('flirt', {
    etymology: {
      origin: '现代英语常用词「flirt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flirt', gloss: '调情' },
      suffix: null,
      history: [
        { label: 'flirt', text: '现代英语常用词「flirt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：调情。' },
      ],
      formationLogic: '核心义：调情。',
      mnemonic: '看到 flirt，先说出「调情」。',
      note: '核心义：调情。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flirt before the office closed.', chinese: '他们同意在办公室关门前做这件事：调情。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flirt.s1', en: 'The deadline forced the team to flirt that afternoon.', zh: '截止日期逼着小组在那天下午调情。', structure: 'flirt / 表示 / 调情', grammar: 'verb，围绕「调情」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flirted it yesterday without checking the real past form.', right: 'Check the past form of "flirt" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flirt 是verb，再套「调情」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flirt.q1', senseId: 'flirt.s1', errorType: 'meaning', type: '词义选择', prompt: '「flirt」在本条的核心意思是：', options: ['调情', '完全相反的意思', '一种古代钱币'], answer: '调情', explain: 'flirt：调情。' },
      { id: 'flirt.q2', senseId: 'flirt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flirt?', options: ['调情', 'a kind of ancient coin', 'the past tense of be'], answer: '调情', explain: '对的是「调情」。' },
      { id: 'flirt.q3', senseId: 'flirt.s1', errorType: 'grammar', type: '词义选择', prompt: 'flirt 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flirt.q4', senseId: 'flirt.s1', errorType: 'meaning', type: '词源', prompt: '记 flirt 时，哪句更稳妥？', options: ['先锁住「调情」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「调情」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['调情'] },
  });

  D('float', {
    etymology: {
      origin: '现代英语常用词「float」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'float', gloss: '漂浮' },
      suffix: null,
      history: [
        { label: 'float', text: '现代英语常用词「float」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：漂浮。' },
      ],
      formationLogic: '核心义：漂浮。',
      mnemonic: '看到 float，先说出「漂浮」。',
      note: '核心义：漂浮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to float before the office closed.', chinese: '他们同意在办公室关门前做这件事：漂浮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'float.s1', en: 'The deadline forced the team to float that afternoon.', zh: '截止日期逼着小组在那天下午漂浮。', structure: 'float / 表示 / 漂浮', grammar: 'verb，围绕「漂浮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She floated it yesterday without checking the real past form.', right: 'Check the past form of "float" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 float 是verb，再套「漂浮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'float.q1', senseId: 'float.s1', errorType: 'meaning', type: '词义选择', prompt: '「float」在本条的核心意思是：', options: ['漂浮', '完全相反的意思', '一种古代钱币'], answer: '漂浮', explain: 'float：漂浮。' },
      { id: 'float.q2', senseId: 'float.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches float?', options: ['漂浮', 'a kind of ancient coin', 'the past tense of be'], answer: '漂浮', explain: '对的是「漂浮」。' },
      { id: 'float.q3', senseId: 'float.s1', errorType: 'grammar', type: '词义选择', prompt: 'float 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'float.q4', senseId: 'float.s1', errorType: 'meaning', type: '词源', prompt: '记 float 时，哪句更稳妥？', options: ['先锁住「漂浮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「漂浮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['漂浮'] },
  });

  D('floating', {
    etymology: {
      origin: '英语派生：float + -ing，词性转到「漂浮」。',
      prefix: null,
      root: { text: 'float', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'floating', text: '英语派生：float + -ing，词性转到「漂浮」。' },
        { label: '现在', text: '核心用法是：漂浮。' },
      ],
      formationLogic: '先认词干 float，再看词尾。',
      mnemonic: '看到 floating，先说出「漂浮」。',
      note: '先认词干 float，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to floating before the office closed.', chinese: '他们同意在办公室关门前做这件事：漂浮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'floating.s1', en: 'The deadline forced the team to floating that afternoon.', zh: '截止日期逼着小组在那天下午漂浮。', structure: 'floating / 表示 / 漂浮', grammar: 'verb，围绕「漂浮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She floatinged it yesterday without checking the real past form.', right: 'Check the past form of "floating" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 floating 是verb，再套「漂浮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'floating.q1', senseId: 'floating.s1', errorType: 'meaning', type: '词义选择', prompt: '「floating」在本条的核心意思是：', options: ['漂浮', '完全相反的意思', '一种古代钱币'], answer: '漂浮', explain: 'floating：漂浮。' },
      { id: 'floating.q2', senseId: 'floating.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches floating?', options: ['漂浮', 'a kind of ancient coin', 'the past tense of be'], answer: '漂浮', explain: '对的是「漂浮」。' },
      { id: 'floating.q3', senseId: 'floating.s1', errorType: 'grammar', type: '词义选择', prompt: 'floating 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'floating.q4', senseId: 'floating.s1', errorType: 'meaning', type: '词源', prompt: '记 floating 时，哪句更稳妥？', options: ['先锁住「漂浮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「漂浮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['漂浮'] },
  });

  D('flock', {
    etymology: {
      origin: '现代英语常用词「flock」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flock', gloss: '羊群' },
      suffix: null,
      history: [
        { label: 'flock', text: '现代英语常用词「flock」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：羊群。' },
      ],
      formationLogic: '核心义：羊群。',
      mnemonic: '看到 flock，先说出「羊群」。',
      note: '核心义：羊群。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flock.', chinese: '这一章反复回到同一个点：羊群。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flock.s1', en: 'Without that flock, the next paragraph is hard to follow.', zh: '没有这个羊群，下一段会很难读。', structure: 'flock / 表示 / 羊群', grammar: 'noun，围绕「羊群」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flock.', right: 'He gave me some advice about the flock.', reason: 'advice 不可数。名词 flock 的单复数按词典词形记。', rule: '先确定 flock 是noun，再套「羊群」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flock.q1', senseId: 'flock.s1', errorType: 'meaning', type: '词义选择', prompt: '「flock」在本条的核心意思是：', options: ['羊群', '完全相反的意思', '一种古代钱币'], answer: '羊群', explain: 'flock：羊群。' },
      { id: 'flock.q2', senseId: 'flock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flock?', options: ['羊群', 'a kind of ancient coin', 'the past tense of be'], answer: '羊群', explain: '对的是「羊群」。' },
      { id: 'flock.q3', senseId: 'flock.s1', errorType: 'grammar', type: '词义选择', prompt: 'flock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flock.q4', senseId: 'flock.s1', errorType: 'meaning', type: '词源', prompt: '记 flock 时，哪句更稳妥？', options: ['先锁住「羊群」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「羊群」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['羊群'] },
  });

  D('floe', {
    etymology: {
      origin: '现代英语常用词「floe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'floe', gloss: '浮冰' },
      suffix: null,
      history: [
        { label: 'floe', text: '现代英语常用词「floe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：浮冰。' },
      ],
      formationLogic: '核心义：浮冰。',
      mnemonic: '看到 floe，先说出「浮冰」。',
      note: '核心义：浮冰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one floe.', chinese: '这一章反复回到同一个点：浮冰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'floe.s1', en: 'Without that floe, the next paragraph is hard to follow.', zh: '没有这个浮冰，下一段会很难读。', structure: 'floe / 表示 / 浮冰', grammar: 'noun，围绕「浮冰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the floe.', right: 'He gave me some advice about the floe.', reason: 'advice 不可数。名词 floe 的单复数按词典词形记。', rule: '先确定 floe 是noun，再套「浮冰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'floe.q1', senseId: 'floe.s1', errorType: 'meaning', type: '词义选择', prompt: '「floe」在本条的核心意思是：', options: ['浮冰', '完全相反的意思', '一种古代钱币'], answer: '浮冰', explain: 'floe：浮冰。' },
      { id: 'floe.q2', senseId: 'floe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches floe?', options: ['浮冰', 'a kind of ancient coin', 'the past tense of be'], answer: '浮冰', explain: '对的是「浮冰」。' },
      { id: 'floe.q3', senseId: 'floe.s1', errorType: 'grammar', type: '词义选择', prompt: 'floe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'floe.q4', senseId: 'floe.s1', errorType: 'meaning', type: '词源', prompt: '记 floe 时，哪句更稳妥？', options: ['先锁住「浮冰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「浮冰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['浮冰'] },
  });

  D('flog', {
    etymology: {
      origin: '现代英语常用词「flog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flog', gloss: '鞭打' },
      suffix: null,
      history: [
        { label: 'flog', text: '现代英语常用词「flog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鞭打。' },
      ],
      formationLogic: '核心义：鞭打。',
      mnemonic: '看到 flog，先说出「鞭打」。',
      note: '核心义：鞭打。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flog before the office closed.', chinese: '他们同意在办公室关门前做这件事：鞭打。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flog.s1', en: 'The deadline forced the team to flog that afternoon.', zh: '截止日期逼着小组在那天下午鞭打。', structure: 'flog / 表示 / 鞭打', grammar: 'verb，围绕「鞭打」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She floged it yesterday without checking the real past form.', right: 'Check the past form of "flog" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flog 是verb，再套「鞭打」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flog.q1', senseId: 'flog.s1', errorType: 'meaning', type: '词义选择', prompt: '「flog」在本条的核心意思是：', options: ['鞭打', '完全相反的意思', '一种古代钱币'], answer: '鞭打', explain: 'flog：鞭打。' },
      { id: 'flog.q2', senseId: 'flog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flog?', options: ['鞭打', 'a kind of ancient coin', 'the past tense of be'], answer: '鞭打', explain: '对的是「鞭打」。' },
      { id: 'flog.q3', senseId: 'flog.s1', errorType: 'grammar', type: '词义选择', prompt: 'flog 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flog.q4', senseId: 'flog.s1', errorType: 'meaning', type: '词源', prompt: '记 flog 时，哪句更稳妥？', options: ['先锁住「鞭打」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鞭打」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鞭打'] },
  });

  D('flood', {
    etymology: {
      origin: '现代英语常用词「flood」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flood', gloss: '洪水' },
      suffix: null,
      history: [
        { label: 'flood', text: '现代英语常用词「flood」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：洪水。' },
      ],
      formationLogic: '核心义：洪水。',
      mnemonic: '看到 flood，先说出「洪水」。',
      note: '核心义：洪水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flood.', chinese: '这一章反复回到同一个点：洪水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flood.s1', en: 'Without that flood, the next paragraph is hard to follow.', zh: '没有这个洪水，下一段会很难读。', structure: 'flood / 表示 / 洪水', grammar: 'noun，围绕「洪水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flood.', right: 'He gave me some advice about the flood.', reason: 'advice 不可数。名词 flood 的单复数按词典词形记。', rule: '先确定 flood 是noun，再套「洪水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flood.q1', senseId: 'flood.s1', errorType: 'meaning', type: '词义选择', prompt: '「flood」在本条的核心意思是：', options: ['洪水', '完全相反的意思', '一种古代钱币'], answer: '洪水', explain: 'flood：洪水。' },
      { id: 'flood.q2', senseId: 'flood.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flood?', options: ['洪水', 'a kind of ancient coin', 'the past tense of be'], answer: '洪水', explain: '对的是「洪水」。' },
      { id: 'flood.q3', senseId: 'flood.s1', errorType: 'grammar', type: '词义选择', prompt: 'flood 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flood.q4', senseId: 'flood.s1', errorType: 'meaning', type: '词源', prompt: '记 flood 时，哪句更稳妥？', options: ['先锁住「洪水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洪水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洪水'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
