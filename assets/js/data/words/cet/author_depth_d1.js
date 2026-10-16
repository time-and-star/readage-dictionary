/* data/words/cet/author_depth_d1.js
 * 手敲深度补丁：a–advisory（200）。不改释义正文，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写出处方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('a', {
    etymology: {
      origin: '古英语 an 的弱读。辅音前用 a，元音前用 an。',
      prefix: null,
      root: { text: 'a', gloss: '一（个）' },
      suffix: null,
      history: [
        { label: 'a', text: '古英语 an 的弱读。辅音前用 a，元音前用 an。' },
        { label: '现在', text: '核心用法是：一（个）。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：一（个）。',
      mnemonic: '看到 a，先说出「一（个）」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：一（个）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a" and asked what it does in the sentence.', chinese: '老师在「a」下面划了线，问它在句中起什么作用。它表示一（个）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a.s1', en: 'In the margin she wrote "a" so the reader would not miss that phrase.', zh: '她在页边写下「a」，免得读者漏掉这个说法。意思是一（个）。', structure: 'a / 在句中表示 / 一（个）', grammar: 'article 用法，围绕「一（个）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a word by word and lost the meaning.', right: 'He kept "a" as one phrase meaning 一（个）.', reason: '「a」是固定说法，拆开容易翻错。', rule: '先确定 a 是article，再套「一（个）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a.q1', senseId: 'a.s1', errorType: 'meaning', type: '词义选择', prompt: '「a」在本条的核心意思是：', options: ['一（个）', '完全相反的意思', '与本词无关的语法术语'], answer: '一（个）', explain: 'a：一（个）。' },
      { id: 'a.q2', senseId: 'a.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a?', options: ['一（个）', 'a kind of ancient coin', 'the past tense of be'], answer: '一（个）', explain: '对的是「一（个）」。' },
      { id: 'a.q3', senseId: 'a.s1', errorType: 'grammar', type: '词义选择', prompt: 'a 的词性（本条）更接近：', options: ['article', '只能作感叹词', '只能作数词'], answer: 'article', explain: '本条按 article 来用。' },
      { id: 'a.q4', senseId: 'a.s1', errorType: 'meaning', type: '词源', prompt: '记 a 时，下面哪句更稳妥？', options: ['先锁住「一（个）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「一（个）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一（个）'] },
  });

  D('a bit', {
    etymology: {
      origin: '现代英语固定说法「a bit」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a bit', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a bit', text: '现代英语固定说法「a bit」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：一点。' },
      ],
      formationLogic: '常见义：一点。',
      mnemonic: '看到 a bit，先说出「一点」，再放进一句自己的话。',
      note: '常见义：一点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a bit" and asked what it does in the sentence.', chinese: '老师在「a bit」下面划了线，问它在句中起什么作用。它表示一点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a bit.s1', en: 'In the margin she wrote "a bit" so the reader would not miss that phrase.', zh: '她在页边写下「a bit」，免得读者漏掉这个说法。意思是一点。', structure: 'a bit / 在句中表示 / 一点', grammar: 'adverb 用法，围绕「一点」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a bit word by word and lost the meaning.', right: 'He kept "a bit" as one phrase meaning 一点.', reason: '「a bit」是固定说法，拆开容易翻错。', rule: '先确定 a bit 是adverb，再套「一点」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a bit.q1', senseId: 'a bit.s1', errorType: 'meaning', type: '词义选择', prompt: '「a bit」在本条的核心意思是：', options: ['一点', '完全相反的意思', '与本词无关的语法术语'], answer: '一点', explain: 'a bit：一点。' },
      { id: 'a bit.q2', senseId: 'a bit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a bit?', options: ['一点', 'a kind of ancient coin', 'the past tense of be'], answer: '一点', explain: '对的是「一点」。' },
      { id: 'a bit.q3', senseId: 'a bit.s1', errorType: 'grammar', type: '词义选择', prompt: 'a bit 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'a bit.q4', senseId: 'a bit.s1', errorType: 'meaning', type: '词源', prompt: '记 a bit 时，下面哪句更稳妥？', options: ['先锁住「一点」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「一点」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一点'] },
  });

  D('a few', {
    etymology: {
      origin: '现代英语固定说法「a few」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a few', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a few', text: '现代英语固定说法「a few」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：几个。' },
      ],
      formationLogic: '常见义：几个。',
      mnemonic: '看到 a few，先说出「几个」，再放进一句自己的话。',
      note: '常见义：几个。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a few" and asked what it does in the sentence.', chinese: '老师在「a few」下面划了线，问它在句中起什么作用。它表示几个。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a few.s1', en: 'In the margin she wrote "a few" so the reader would not miss that phrase.', zh: '她在页边写下「a few」，免得读者漏掉这个说法。意思是几个。', structure: 'a few / 在句中表示 / 几个', grammar: 'determiner 用法，围绕「几个」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a few word by word and lost the meaning.', right: 'He kept "a few" as one phrase meaning 几个.', reason: '「a few」是固定说法，拆开容易翻错。', rule: '先确定 a few 是determiner，再套「几个」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a few.q1', senseId: 'a few.s1', errorType: 'meaning', type: '词义选择', prompt: '「a few」在本条的核心意思是：', options: ['几个', '完全相反的意思', '与本词无关的语法术语'], answer: '几个', explain: 'a few：几个。' },
      { id: 'a few.q2', senseId: 'a few.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a few?', options: ['几个', 'a kind of ancient coin', 'the past tense of be'], answer: '几个', explain: '对的是「几个」。' },
      { id: 'a few.q3', senseId: 'a few.s1', errorType: 'grammar', type: '词义选择', prompt: 'a few 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'a few.q4', senseId: 'a few.s1', errorType: 'meaning', type: '词源', prompt: '记 a few 时，下面哪句更稳妥？', options: ['先锁住「几个」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「几个」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['几个'] },
  });

  D('a great deal', {
    etymology: {
      origin: '现代英语固定说法「a great deal」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a great deal', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a great deal', text: '现代英语固定说法「a great deal」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：大量。' },
      ],
      formationLogic: '常见义：大量。',
      mnemonic: '看到 a great deal，先说出「大量」，再放进一句自己的话。',
      note: '常见义：大量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a great deal" and asked what it does in the sentence.', chinese: '老师在「a great deal」下面划了线，问它在句中起什么作用。它表示大量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a great deal.s1', en: 'In the margin she wrote "a great deal" so the reader would not miss that phrase.', zh: '她在页边写下「a great deal」，免得读者漏掉这个说法。意思是大量。', structure: 'a great deal / 在句中表示 / 大量', grammar: 'determiner 用法，围绕「大量」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a great deal word by word and lost the meaning.', right: 'He kept "a great deal" as one phrase meaning 大量.', reason: '「a great deal」是固定说法，拆开容易翻错。', rule: '先确定 a great deal 是determiner，再套「大量」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a great deal.q1', senseId: 'a great deal.s1', errorType: 'meaning', type: '词义选择', prompt: '「a great deal」在本条的核心意思是：', options: ['大量', '完全相反的意思', '与本词无关的语法术语'], answer: '大量', explain: 'a great deal：大量。' },
      { id: 'a great deal.q2', senseId: 'a great deal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a great deal?', options: ['大量', 'a kind of ancient coin', 'the past tense of be'], answer: '大量', explain: '对的是「大量」。' },
      { id: 'a great deal.q3', senseId: 'a great deal.s1', errorType: 'grammar', type: '词义选择', prompt: 'a great deal 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'a great deal.q4', senseId: 'a great deal.s1', errorType: 'meaning', type: '词源', prompt: '记 a great deal 时，下面哪句更稳妥？', options: ['先锁住「大量」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「大量」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大量'] },
  });

  D('a little', {
    etymology: {
      origin: '现代英语固定说法「a little」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a little', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a little', text: '现代英语固定说法「a little」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：一点。' },
      ],
      formationLogic: '常见义：一点。',
      mnemonic: '看到 a little，先说出「一点」，再放进一句自己的话。',
      note: '常见义：一点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a little" and asked what it does in the sentence.', chinese: '老师在「a little」下面划了线，问它在句中起什么作用。它表示一点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a little.s1', en: 'In the margin she wrote "a little" so the reader would not miss that phrase.', zh: '她在页边写下「a little」，免得读者漏掉这个说法。意思是一点。', structure: 'a little / 在句中表示 / 一点', grammar: 'determiner 用法，围绕「一点」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a little word by word and lost the meaning.', right: 'He kept "a little" as one phrase meaning 一点.', reason: '「a little」是固定说法，拆开容易翻错。', rule: '先确定 a little 是determiner，再套「一点」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a little.q1', senseId: 'a little.s1', errorType: 'meaning', type: '词义选择', prompt: '「a little」在本条的核心意思是：', options: ['一点', '完全相反的意思', '与本词无关的语法术语'], answer: '一点', explain: 'a little：一点。' },
      { id: 'a little.q2', senseId: 'a little.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a little?', options: ['一点', 'a kind of ancient coin', 'the past tense of be'], answer: '一点', explain: '对的是「一点」。' },
      { id: 'a little.q3', senseId: 'a little.s1', errorType: 'grammar', type: '词义选择', prompt: 'a little 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'a little.q4', senseId: 'a little.s1', errorType: 'meaning', type: '词源', prompt: '记 a little 时，下面哪句更稳妥？', options: ['先锁住「一点」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「一点」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一点'] },
  });

  D('a lot', {
    etymology: {
      origin: '现代英语固定说法「a lot」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a lot', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a lot', text: '现代英语固定说法「a lot」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：很多。' },
      ],
      formationLogic: '常见义：很多。',
      mnemonic: '看到 a lot，先说出「很多」，再放进一句自己的话。',
      note: '常见义：很多。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a lot" and asked what it does in the sentence.', chinese: '老师在「a lot」下面划了线，问它在句中起什么作用。它表示很多。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a lot.s1', en: 'In the margin she wrote "a lot" so the reader would not miss that phrase.', zh: '她在页边写下「a lot」，免得读者漏掉这个说法。意思是很多。', structure: 'a lot / 在句中表示 / 很多', grammar: 'determiner 用法，围绕「很多」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a lot word by word and lost the meaning.', right: 'He kept "a lot" as one phrase meaning 很多.', reason: '「a lot」是固定说法，拆开容易翻错。', rule: '先确定 a lot 是determiner，再套「很多」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a lot.q1', senseId: 'a lot.s1', errorType: 'meaning', type: '词义选择', prompt: '「a lot」在本条的核心意思是：', options: ['很多', '完全相反的意思', '与本词无关的语法术语'], answer: '很多', explain: 'a lot：很多。' },
      { id: 'a lot.q2', senseId: 'a lot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a lot?', options: ['很多', 'a kind of ancient coin', 'the past tense of be'], answer: '很多', explain: '对的是「很多」。' },
      { id: 'a lot.q3', senseId: 'a lot.s1', errorType: 'grammar', type: '词义选择', prompt: 'a lot 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'a lot.q4', senseId: 'a lot.s1', errorType: 'meaning', type: '词源', prompt: '记 a lot 时，下面哪句更稳妥？', options: ['先锁住「很多」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「很多」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['很多'] },
  });

  D('a lot of', {
    etymology: {
      origin: '现代英语固定说法「a lot of」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a lot of', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a lot of', text: '现代英语固定说法「a lot of」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：许多。' },
      ],
      formationLogic: '常见义：许多。',
      mnemonic: '看到 a lot of，先说出「许多」，再放进一句自己的话。',
      note: '常见义：许多。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a lot of" and asked what it does in the sentence.', chinese: '老师在「a lot of」下面划了线，问它在句中起什么作用。它表示许多。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a lot of.s1', en: 'In the margin she wrote "a lot of" so the reader would not miss that phrase.', zh: '她在页边写下「a lot of」，免得读者漏掉这个说法。意思是许多。', structure: 'a lot of / 在句中表示 / 许多', grammar: 'determiner 用法，围绕「许多」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a lot of word by word and lost the meaning.', right: 'He kept "a lot of" as one phrase meaning 许多.', reason: '「a lot of」是固定说法，拆开容易翻错。', rule: '先确定 a lot of 是determiner，再套「许多」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a lot of.q1', senseId: 'a lot of.s1', errorType: 'meaning', type: '词义选择', prompt: '「a lot of」在本条的核心意思是：', options: ['许多', '完全相反的意思', '与本词无关的语法术语'], answer: '许多', explain: 'a lot of：许多。' },
      { id: 'a lot of.q2', senseId: 'a lot of.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a lot of?', options: ['许多', 'a kind of ancient coin', 'the past tense of be'], answer: '许多', explain: '对的是「许多」。' },
      { id: 'a lot of.q3', senseId: 'a lot of.s1', errorType: 'grammar', type: '词义选择', prompt: 'a lot of 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'a lot of.q4', senseId: 'a lot of.s1', errorType: 'meaning', type: '词源', prompt: '记 a lot of 时，下面哪句更稳妥？', options: ['先锁住「许多」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「许多」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['许多'] },
  });

  D('a pittance', {
    etymology: {
      origin: '现代英语固定说法「a pittance」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'a pittance', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'a pittance', text: '现代英语固定说法「a pittance」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：少得可怜的报酬。' },
      ],
      formationLogic: '常见义：少得可怜的报酬。',
      mnemonic: '看到 a pittance，先说出「少得可怜的报酬」，再放进一句自己的话。',
      note: '常见义：少得可怜的报酬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "a pittance" and asked what it does in the sentence.', chinese: '老师在「a pittance」下面划了线，问它在句中起什么作用。它表示少得可怜的报酬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a pittance.s1', en: 'In the margin she wrote "a pittance" so the reader would not miss that phrase.', zh: '她在页边写下「a pittance」，免得读者漏掉这个说法。意思是少得可怜的报酬。', structure: 'a pittance / 在句中表示 / 少得可怜的报酬', grammar: 'noun 用法，围绕「少得可怜的报酬」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated a pittance word by word and lost the meaning.', right: 'He kept "a pittance" as one phrase meaning 少得可怜的报酬.', reason: '「a pittance」是固定说法，拆开容易翻错。', rule: '先确定 a pittance 是noun，再套「少得可怜的报酬」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a pittance.q1', senseId: 'a pittance.s1', errorType: 'meaning', type: '词义选择', prompt: '「a pittance」在本条的核心意思是：', options: ['少得可怜的报酬', '完全相反的意思', '与本词无关的语法术语'], answer: '少得可怜的报酬', explain: 'a pittance：少得可怜的报酬。' },
      { id: 'a pittance.q2', senseId: 'a pittance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a pittance?', options: ['少得可怜的报酬', 'a kind of ancient coin', 'the past tense of be'], answer: '少得可怜的报酬', explain: '对的是「少得可怜的报酬」。' },
      { id: 'a pittance.q3', senseId: 'a pittance.s1', errorType: 'grammar', type: '词义选择', prompt: 'a pittance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'a pittance.q4', senseId: 'a pittance.s1', errorType: 'meaning', type: '词源', prompt: '记 a pittance 时，下面哪句更稳妥？', options: ['先锁住「少得可怜的报酬」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「少得可怜的报酬」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['少得可怜的报酬'] },
  });

  D('a.m', {
    etymology: {
      origin: '现代英语常用词「a.m」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'a.m', gloss: '上午' },
      suffix: null,
      history: [
        { label: 'a.m', text: '现代英语常用词「a.m」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：上午。' },
      ],
      formationLogic: '核心义：上午。',
      mnemonic: '看到 a.m，先说出「上午」，再放进一句自己的话。',
      note: '核心义：上午。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one a.m.', chinese: '这一章反复回到同一个点：上午。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'a.m.s1', en: 'Without that a.m, the story would be hard to follow.', zh: '没有这个上午，故事会很难读下去。', structure: 'a.m / 在句中表示 / 上午', grammar: 'noun 用法，围绕「上午」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the a.m.', right: 'He gave me a lot of advice about the a.m.', reason: 'advice 不可数。名词 a.m 的单复数也要按词典词形来，不要自造。', rule: '先确定 a.m 是noun，再套「上午」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'a.m.q1', senseId: 'a.m.s1', errorType: 'meaning', type: '词义选择', prompt: '「a.m」在本条的核心意思是：', options: ['上午', '完全相反的意思', '与本词无关的语法术语'], answer: '上午', explain: 'a.m：上午。' },
      { id: 'a.m.q2', senseId: 'a.m.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches a.m?', options: ['上午', 'a kind of ancient coin', 'the past tense of be'], answer: '上午', explain: '对的是「上午」。' },
      { id: 'a.m.q3', senseId: 'a.m.s1', errorType: 'grammar', type: '词义选择', prompt: 'a.m 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'a.m.q4', senseId: 'a.m.s1', errorType: 'meaning', type: '词源', prompt: '记 a.m 时，下面哪句更稳妥？', options: ['先锁住「上午」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「上午」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上午'] },
  });

  D('abandoned', {
    etymology: {
      origin: '现代英语常用词「abandoned」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'abandoned', gloss: '被抛弃的' },
      suffix: null,
      history: [
        { label: 'abandoned', text: '现代英语常用词「abandoned」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：被抛弃的。' },
      ],
      formationLogic: '核心义：被抛弃的。',
      mnemonic: '看到 abandoned，先说出「被抛弃的」，再放进一句自己的话。',
      note: '核心义：被抛弃的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked abandoned even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得被抛弃的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abandoned.s1', en: 'They needed a abandoned answer, not a long speech.', zh: '他们要的是被抛弃的的答复，不是长篇发言。', structure: 'abandoned / 在句中表示 / 被抛弃的', grammar: 'adjective 用法，围绕「被抛弃的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are abandoned.', right: 'The news is abandoned.', reason: 'news 作主语时动词用单数。形容词 abandoned 放在系动词后面。', rule: '先确定 abandoned 是adjective，再套「被抛弃的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abandoned.q1', senseId: 'abandoned.s1', errorType: 'meaning', type: '词义选择', prompt: '「abandoned」在本条的核心意思是：', options: ['被抛弃的', '完全相反的意思', '与本词无关的语法术语'], answer: '被抛弃的', explain: 'abandoned：被抛弃的。' },
      { id: 'abandoned.q2', senseId: 'abandoned.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abandoned?', options: ['被抛弃的', 'a kind of ancient coin', 'the past tense of be'], answer: '被抛弃的', explain: '对的是「被抛弃的」。' },
      { id: 'abandoned.q3', senseId: 'abandoned.s1', errorType: 'grammar', type: '词义选择', prompt: 'abandoned 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'abandoned.q4', senseId: 'abandoned.s1', errorType: 'meaning', type: '词源', prompt: '记 abandoned 时，下面哪句更稳妥？', options: ['先锁住「被抛弃的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「被抛弃的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被抛弃的'] },
  });

  D('abbé', {
    etymology: {
      origin: '现代英语常用词「abbé」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'abbé', gloss: '（法国）修道院院长' },
      suffix: null,
      history: [
        { label: 'abbé', text: '现代英语常用词「abbé」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（法国）修道院院长。' },
      ],
      formationLogic: '核心义：（法国）修道院院长。',
      mnemonic: '看到 abbé，先说出「（法国）修道院院长」，再放进一句自己的话。',
      note: '核心义：（法国）修道院院长。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abbé.', chinese: '这一章反复回到同一个点：（法国）修道院院长。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abbé.s1', en: 'Without that abbé, the story would be hard to follow.', zh: '没有这个（法国）修道院院长，故事会很难读下去。', structure: 'abbé / 在句中表示 / （法国）修道院院长', grammar: 'noun 用法，围绕「（法国）修道院院长」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abbé.', right: 'He gave me a lot of advice about the abbé.', reason: 'advice 不可数。名词 abbé 的单复数也要按词典词形来，不要自造。', rule: '先确定 abbé 是noun，再套「（法国）修道院院长」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abbé.q1', senseId: 'abbé.s1', errorType: 'meaning', type: '词义选择', prompt: '「abbé」在本条的核心意思是：', options: ['（法国）修道院院长', '完全相反的意思', '与本词无关的语法术语'], answer: '（法国）修道院院长', explain: 'abbé：（法国）修道院院长。' },
      { id: 'abbé.q2', senseId: 'abbé.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abbé?', options: ['（法国）修道院院长', 'a kind of ancient coin', 'the past tense of be'], answer: '（法国）修道院院长', explain: '对的是「（法国）修道院院长」。' },
      { id: 'abbé.q3', senseId: 'abbé.s1', errorType: 'grammar', type: '词义选择', prompt: 'abbé 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abbé.q4', senseId: 'abbé.s1', errorType: 'meaning', type: '词源', prompt: '记 abbé 时，下面哪句更稳妥？', options: ['先锁住「（法国）修道院院长」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（法国）修道院院长」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（法国）修道院院长'] },
  });

  D('abbey', {
    etymology: {
      origin: '古法语 abbaie，来自晚期拉丁语 abbatia「院长辖下的修院」。',
      prefix: null,
      root: { text: 'abbey', gloss: '修道院' },
      suffix: null,
      history: [
        { label: 'abbey', text: '古法语 abbaie，来自晚期拉丁语 abbatia「院长辖下的修院」。' },
        { label: '现在', text: '核心用法是：修道院。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：修道院。',
      mnemonic: '看到 abbey，先说出「修道院」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：修道院。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abbey.', chinese: '这一章反复回到同一个点：修道院。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abbey.s1', en: 'Without that abbey, the story would be hard to follow.', zh: '没有这个修道院，故事会很难读下去。', structure: 'abbey / 在句中表示 / 修道院', grammar: 'noun 用法，围绕「修道院」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abbey.', right: 'He gave me a lot of advice about the abbey.', reason: 'advice 不可数。名词 abbey 的单复数也要按词典词形来，不要自造。', rule: '先确定 abbey 是noun，再套「修道院」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abbey.q1', senseId: 'abbey.s1', errorType: 'meaning', type: '词义选择', prompt: '「abbey」在本条的核心意思是：', options: ['修道院', '完全相反的意思', '与本词无关的语法术语'], answer: '修道院', explain: 'abbey：修道院。' },
      { id: 'abbey.q2', senseId: 'abbey.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abbey?', options: ['修道院', 'a kind of ancient coin', 'the past tense of be'], answer: '修道院', explain: '对的是「修道院」。' },
      { id: 'abbey.q3', senseId: 'abbey.s1', errorType: 'grammar', type: '词义选择', prompt: 'abbey 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abbey.q4', senseId: 'abbey.s1', errorType: 'meaning', type: '词源', prompt: '记 abbey 时，下面哪句更稳妥？', options: ['先锁住「修道院」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「修道院」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['修道院'] },
  });

  D('abbot', {
    etymology: {
      origin: '拉丁语 abbas，来自阿拉姆语 abba「父亲」。修院院长被称作父亲。',
      prefix: null,
      root: { text: 'abbot', gloss: '（男）修道院院长' },
      suffix: null,
      history: [
        { label: 'abbot', text: '拉丁语 abbas，来自阿拉姆语 abba「父亲」。修院院长被称作父亲。' },
        { label: '现在', text: '核心用法是：（男）修道院院长。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：（男）修道院院长。',
      mnemonic: '看到 abbot，先说出「（男）修道院院长」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：（男）修道院院长。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abbot.', chinese: '这一章反复回到同一个点：（男）修道院院长。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abbot.s1', en: 'Without that abbot, the story would be hard to follow.', zh: '没有这个（男）修道院院长，故事会很难读下去。', structure: 'abbot / 在句中表示 / （男）修道院院长', grammar: 'noun 用法，围绕「（男）修道院院长」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abbot.', right: 'He gave me a lot of advice about the abbot.', reason: 'advice 不可数。名词 abbot 的单复数也要按词典词形来，不要自造。', rule: '先确定 abbot 是noun，再套「（男）修道院院长」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abbot.q1', senseId: 'abbot.s1', errorType: 'meaning', type: '词义选择', prompt: '「abbot」在本条的核心意思是：', options: ['（男）修道院院长', '完全相反的意思', '与本词无关的语法术语'], answer: '（男）修道院院长', explain: 'abbot：（男）修道院院长。' },
      { id: 'abbot.q2', senseId: 'abbot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abbot?', options: ['（男）修道院院长', 'a kind of ancient coin', 'the past tense of be'], answer: '（男）修道院院长', explain: '对的是「（男）修道院院长」。' },
      { id: 'abbot.q3', senseId: 'abbot.s1', errorType: 'grammar', type: '词义选择', prompt: 'abbot 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abbot.q4', senseId: 'abbot.s1', errorType: 'meaning', type: '词源', prompt: '记 abbot 时，下面哪句更稳妥？', options: ['先锁住「（男）修道院院长」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（男）修道院院长」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（男）修道院院长'] },
  });

  D('abbreviate', {
    etymology: {
      origin: '拉丁语 abbreviare：ad-「向」+ brevis「短」。',
      prefix: null,
      root: { text: 'abbreviate', gloss: '缩写' },
      suffix: null,
      history: [
        { label: 'abbreviate', text: '拉丁语 abbreviare：ad-「向」+ brevis「短」。' },
        { label: '现在', text: '核心用法是：缩写。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：缩写。',
      mnemonic: '看到 abbreviate，先说出「缩写」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：缩写。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abbreviate before the office closed.', chinese: '小组得在办公室关门前完成这件事：缩写。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abbreviate.s1', en: 'Nobody wanted to abbreviate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abbreviate 是「缩写」。', structure: 'abbreviate / 在句中表示 / 缩写', grammar: 'verb 用法，围绕「缩写」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She abbreviateed the form yesterday without checking the real past form.', right: 'Look up the past form of "abbreviate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abbreviate 是verb，再套「缩写」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abbreviate.q1', senseId: 'abbreviate.s1', errorType: 'meaning', type: '词义选择', prompt: '「abbreviate」在本条的核心意思是：', options: ['缩写', '完全相反的意思', '与本词无关的语法术语'], answer: '缩写', explain: 'abbreviate：缩写。' },
      { id: 'abbreviate.q2', senseId: 'abbreviate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abbreviate?', options: ['缩写', 'a kind of ancient coin', 'the past tense of be'], answer: '缩写', explain: '对的是「缩写」。' },
      { id: 'abbreviate.q3', senseId: 'abbreviate.s1', errorType: 'grammar', type: '词义选择', prompt: 'abbreviate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abbreviate.q4', senseId: 'abbreviate.s1', errorType: 'meaning', type: '词源', prompt: '记 abbreviate 时，下面哪句更稳妥？', options: ['先锁住「缩写」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「缩写」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缩写'] },
  });

  D('abbreviation', {
    etymology: {
      origin: '来自 abbreviate，拉丁语 brevis「短」。',
      prefix: null,
      root: { text: 'abbreviation', gloss: '缩写' },
      suffix: null,
      history: [
        { label: 'abbreviation', text: '来自 abbreviate，拉丁语 brevis「短」。' },
        { label: '现在', text: '核心用法是：缩写。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：缩写。',
      mnemonic: '看到 abbreviation，先说出「缩写」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：缩写。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abbreviation.', chinese: '这一章反复回到同一个点：缩写。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abbreviation.s1', en: 'Without that abbreviation, the story would be hard to follow.', zh: '没有这个缩写，故事会很难读下去。', structure: 'abbreviation / 在句中表示 / 缩写', grammar: 'noun 用法，围绕「缩写」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abbreviation.', right: 'He gave me a lot of advice about the abbreviation.', reason: 'advice 不可数。名词 abbreviation 的单复数也要按词典词形来，不要自造。', rule: '先确定 abbreviation 是noun，再套「缩写」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abbreviation.q1', senseId: 'abbreviation.s1', errorType: 'meaning', type: '词义选择', prompt: '「abbreviation」在本条的核心意思是：', options: ['缩写', '完全相反的意思', '与本词无关的语法术语'], answer: '缩写', explain: 'abbreviation：缩写。' },
      { id: 'abbreviation.q2', senseId: 'abbreviation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abbreviation?', options: ['缩写', 'a kind of ancient coin', 'the past tense of be'], answer: '缩写', explain: '对的是「缩写」。' },
      { id: 'abbreviation.q3', senseId: 'abbreviation.s1', errorType: 'grammar', type: '词义选择', prompt: 'abbreviation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abbreviation.q4', senseId: 'abbreviation.s1', errorType: 'meaning', type: '词源', prompt: '记 abbreviation 时，下面哪句更稳妥？', options: ['先锁住「缩写」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「缩写」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缩写'] },
  });

  D('abdomen', {
    etymology: {
      origin: '拉丁语 abdomen「肚子」。',
      prefix: null,
      root: { text: 'abdomen', gloss: '腹' },
      suffix: null,
      history: [
        { label: 'abdomen', text: '拉丁语 abdomen「肚子」。' },
        { label: '现在', text: '核心用法是：腹。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：腹。',
      mnemonic: '看到 abdomen，先说出「腹」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：腹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abdomen.', chinese: '这一章反复回到同一个点：腹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abdomen.s1', en: 'Without that abdomen, the story would be hard to follow.', zh: '没有这个腹，故事会很难读下去。', structure: 'abdomen / 在句中表示 / 腹', grammar: 'noun 用法，围绕「腹」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abdomen.', right: 'He gave me a lot of advice about the abdomen.', reason: 'advice 不可数。名词 abdomen 的单复数也要按词典词形来，不要自造。', rule: '先确定 abdomen 是noun，再套「腹」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abdomen.q1', senseId: 'abdomen.s1', errorType: 'meaning', type: '词义选择', prompt: '「abdomen」在本条的核心意思是：', options: ['腹', '完全相反的意思', '与本词无关的语法术语'], answer: '腹', explain: 'abdomen：腹。' },
      { id: 'abdomen.q2', senseId: 'abdomen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abdomen?', options: ['腹', 'a kind of ancient coin', 'the past tense of be'], answer: '腹', explain: '对的是「腹」。' },
      { id: 'abdomen.q3', senseId: 'abdomen.s1', errorType: 'grammar', type: '词义选择', prompt: 'abdomen 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abdomen.q4', senseId: 'abdomen.s1', errorType: 'meaning', type: '词源', prompt: '记 abdomen 时，下面哪句更稳妥？', options: ['先锁住「腹」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「腹」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腹'] },
  });

  D('abduct', {
    etymology: {
      origin: '拉丁语 abducere：ab-「离开」+ ducere「带领」。把人带走。',
      prefix: null,
      root: { text: 'abduct', gloss: '绑架' },
      suffix: null,
      history: [
        { label: 'abduct', text: '拉丁语 abducere：ab-「离开」+ ducere「带领」。把人带走。' },
        { label: '现在', text: '核心用法是：绑架。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：绑架。',
      mnemonic: '看到 abduct，先说出「绑架」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：绑架。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abduct before the office closed.', chinese: '小组得在办公室关门前完成这件事：绑架。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abduct.s1', en: 'Nobody wanted to abduct, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abduct 是「绑架」。', structure: 'abduct / 在句中表示 / 绑架', grammar: 'verb 用法，围绕「绑架」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She abducted the form yesterday without checking the real past form.', right: 'Look up the past form of "abduct" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abduct 是verb，再套「绑架」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abduct.q1', senseId: 'abduct.s1', errorType: 'meaning', type: '词义选择', prompt: '「abduct」在本条的核心意思是：', options: ['绑架', '完全相反的意思', '与本词无关的语法术语'], answer: '绑架', explain: 'abduct：绑架。' },
      { id: 'abduct.q2', senseId: 'abduct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abduct?', options: ['绑架', 'a kind of ancient coin', 'the past tense of be'], answer: '绑架', explain: '对的是「绑架」。' },
      { id: 'abduct.q3', senseId: 'abduct.s1', errorType: 'grammar', type: '词义选择', prompt: 'abduct 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abduct.q4', senseId: 'abduct.s1', errorType: 'meaning', type: '词源', prompt: '记 abduct 时，下面哪句更稳妥？', options: ['先锁住「绑架」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「绑架」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绑架'] },
  });

  D('abide', {
    etymology: {
      origin: '古英语 abidan「停留、等待」，后有「遵守、忍受」。',
      prefix: null,
      root: { text: 'abide', gloss: '遵守' },
      suffix: null,
      history: [
        { label: 'abide', text: '古英语 abidan「停留、等待」，后有「遵守、忍受」。' },
        { label: '现在', text: '核心用法是：遵守。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：遵守。',
      mnemonic: '看到 abide，先说出「遵守」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：遵守。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abide before the office closed.', chinese: '小组得在办公室关门前完成这件事：遵守。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abide.s1', en: 'Nobody wanted to abide, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abide 是「遵守」。', structure: 'abide / 在句中表示 / 遵守', grammar: 'verb 用法，围绕「遵守」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She abideed the form yesterday without checking the real past form.', right: 'Look up the past form of "abide" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abide 是verb，再套「遵守」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abide.q1', senseId: 'abide.s1', errorType: 'meaning', type: '词义选择', prompt: '「abide」在本条的核心意思是：', options: ['遵守', '完全相反的意思', '与本词无关的语法术语'], answer: '遵守', explain: 'abide：遵守。' },
      { id: 'abide.q2', senseId: 'abide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abide?', options: ['遵守', 'a kind of ancient coin', 'the past tense of be'], answer: '遵守', explain: '对的是「遵守」。' },
      { id: 'abide.q3', senseId: 'abide.s1', errorType: 'grammar', type: '词义选择', prompt: 'abide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abide.q4', senseId: 'abide.s1', errorType: 'meaning', type: '词源', prompt: '记 abide 时，下面哪句更稳妥？', options: ['先锁住「遵守」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「遵守」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['遵守'] },
  });

  D('ability', {
    etymology: {
      origin: '拉丁语 habilitas，来自 habilis「容易拿得住、能干」，同 able。',
      prefix: null,
      root: { text: 'ability', gloss: '能力' },
      suffix: null,
      history: [
        { label: 'ability', text: '拉丁语 habilitas，来自 habilis「容易拿得住、能干」，同 able。' },
        { label: '现在', text: '核心用法是：能力。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：能力。',
      mnemonic: '看到 ability，先说出「能力」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：能力。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ability.', chinese: '这一章反复回到同一个点：能力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ability.s1', en: 'Without that ability, the story would be hard to follow.', zh: '没有这个能力，故事会很难读下去。', structure: 'ability / 在句中表示 / 能力', grammar: 'noun 用法，围绕「能力」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ability.', right: 'He gave me a lot of advice about the ability.', reason: 'advice 不可数。名词 ability 的单复数也要按词典词形来，不要自造。', rule: '先确定 ability 是noun，再套「能力」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ability.q1', senseId: 'ability.s1', errorType: 'meaning', type: '词义选择', prompt: '「ability」在本条的核心意思是：', options: ['能力', '完全相反的意思', '与本词无关的语法术语'], answer: '能力', explain: 'ability：能力。' },
      { id: 'ability.q2', senseId: 'ability.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ability?', options: ['能力', 'a kind of ancient coin', 'the past tense of be'], answer: '能力', explain: '对的是「能力」。' },
      { id: 'ability.q3', senseId: 'ability.s1', errorType: 'grammar', type: '词义选择', prompt: 'ability 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ability.q4', senseId: 'ability.s1', errorType: 'meaning', type: '词源', prompt: '记 ability 时，下面哪句更稳妥？', options: ['先锁住「能力」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「能力」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['能力'] },
  });

  D('abnormality', {
    etymology: {
      origin: '英语派生：abnormal 加上词尾，构成与「异常」相应的词类。',
      prefix: null,
      root: { text: 'abnormal', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abnormality', text: '英语派生：abnormal 加上词尾，构成与「异常」相应的词类。' },
        { label: '现在', text: '核心用法是：异常。' },
      ],
      formationLogic: '先认词干 abnormal，再看词尾决定词性。',
      mnemonic: '看到 abnormality，先说出「异常」，再放进一句自己的话。',
      note: '先认词干 abnormal，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abnormality.', chinese: '这一章反复回到同一个点：异常。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abnormality.s1', en: 'Without that abnormality, the story would be hard to follow.', zh: '没有这个异常，故事会很难读下去。', structure: 'abnormality / 在句中表示 / 异常', grammar: 'noun 用法，围绕「异常」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abnormality.', right: 'He gave me a lot of advice about the abnormality.', reason: 'advice 不可数。名词 abnormality 的单复数也要按词典词形来，不要自造。', rule: '先确定 abnormality 是noun，再套「异常」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abnormality.q1', senseId: 'abnormality.s1', errorType: 'meaning', type: '词义选择', prompt: '「abnormality」在本条的核心意思是：', options: ['异常', '完全相反的意思', '与本词无关的语法术语'], answer: '异常', explain: 'abnormality：异常。' },
      { id: 'abnormality.q2', senseId: 'abnormality.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abnormality?', options: ['异常', 'a kind of ancient coin', 'the past tense of be'], answer: '异常', explain: '对的是「异常」。' },
      { id: 'abnormality.q3', senseId: 'abnormality.s1', errorType: 'grammar', type: '词义选择', prompt: 'abnormality 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abnormality.q4', senseId: 'abnormality.s1', errorType: 'meaning', type: '词源', prompt: '记 abnormality 时，下面哪句更稳妥？', options: ['先锁住「异常」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「异常」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['异常'] },
  });

  D('abolish', {
    etymology: {
      origin: '拉丁语 abolere「取消、毁去」。',
      prefix: null,
      root: { text: 'abolish', gloss: '废除' },
      suffix: null,
      history: [
        { label: 'abolish', text: '拉丁语 abolere「取消、毁去」。' },
        { label: '现在', text: '核心用法是：废除。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：废除。',
      mnemonic: '看到 abolish，先说出「废除」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：废除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abolish before the office closed.', chinese: '小组得在办公室关门前完成这件事：废除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abolish.s1', en: 'Nobody wanted to abolish, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abolish 是「废除」。', structure: 'abolish / 在句中表示 / 废除', grammar: 'verb 用法，围绕「废除」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She abolished the form yesterday without checking the real past form.', right: 'Look up the past form of "abolish" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abolish 是verb，再套「废除」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abolish.q1', senseId: 'abolish.s1', errorType: 'meaning', type: '词义选择', prompt: '「abolish」在本条的核心意思是：', options: ['废除', '完全相反的意思', '与本词无关的语法术语'], answer: '废除', explain: 'abolish：废除。' },
      { id: 'abolish.q2', senseId: 'abolish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abolish?', options: ['废除', 'a kind of ancient coin', 'the past tense of be'], answer: '废除', explain: '对的是「废除」。' },
      { id: 'abolish.q3', senseId: 'abolish.s1', errorType: 'grammar', type: '词义选择', prompt: 'abolish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abolish.q4', senseId: 'abolish.s1', errorType: 'meaning', type: '词源', prompt: '记 abolish 时，下面哪句更稳妥？', options: ['先锁住「废除」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「废除」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['废除'] },
  });

  D('abolition', {
    etymology: {
      origin: '来自 abolish，拉丁语 abolere「取消」。',
      prefix: null,
      root: { text: 'abolition', gloss: '废除' },
      suffix: null,
      history: [
        { label: 'abolition', text: '来自 abolish，拉丁语 abolere「取消」。' },
        { label: '现在', text: '核心用法是：废除。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：废除。',
      mnemonic: '看到 abolition，先说出「废除」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：废除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abolition.', chinese: '这一章反复回到同一个点：废除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abolition.s1', en: 'Without that abolition, the story would be hard to follow.', zh: '没有这个废除，故事会很难读下去。', structure: 'abolition / 在句中表示 / 废除', grammar: 'noun 用法，围绕「废除」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abolition.', right: 'He gave me a lot of advice about the abolition.', reason: 'advice 不可数。名词 abolition 的单复数也要按词典词形来，不要自造。', rule: '先确定 abolition 是noun，再套「废除」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abolition.q1', senseId: 'abolition.s1', errorType: 'meaning', type: '词义选择', prompt: '「abolition」在本条的核心意思是：', options: ['废除', '完全相反的意思', '与本词无关的语法术语'], answer: '废除', explain: 'abolition：废除。' },
      { id: 'abolition.q2', senseId: 'abolition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abolition?', options: ['废除', 'a kind of ancient coin', 'the past tense of be'], answer: '废除', explain: '对的是「废除」。' },
      { id: 'abolition.q3', senseId: 'abolition.s1', errorType: 'grammar', type: '词义选择', prompt: 'abolition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abolition.q4', senseId: 'abolition.s1', errorType: 'meaning', type: '词源', prompt: '记 abolition 时，下面哪句更稳妥？', options: ['先锁住「废除」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「废除」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['废除'] },
  });

  D('aboriginal', {
    etymology: {
      origin: '英语派生：aborigin 加上词尾，构成与「土著的」相应的词类。',
      prefix: null,
      root: { text: 'aborigin', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'aboriginal', text: '英语派生：aborigin 加上词尾，构成与「土著的」相应的词类。' },
        { label: '现在', text: '核心用法是：土著的。' },
      ],
      formationLogic: '先认词干 aborigin，再看词尾决定词性。',
      mnemonic: '看到 aboriginal，先说出「土著的」，再放进一句自己的话。',
      note: '先认词干 aborigin，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aboriginal even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得土著的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aboriginal.s1', en: 'They needed a aboriginal answer, not a long speech.', zh: '他们要的是土著的的答复，不是长篇发言。', structure: 'aboriginal / 在句中表示 / 土著的', grammar: 'adjective 用法，围绕「土著的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aboriginal.', right: 'The news is aboriginal.', reason: 'news 作主语时动词用单数。形容词 aboriginal 放在系动词后面。', rule: '先确定 aboriginal 是adjective，再套「土著的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aboriginal.q1', senseId: 'aboriginal.s1', errorType: 'meaning', type: '词义选择', prompt: '「aboriginal」在本条的核心意思是：', options: ['土著的', '完全相反的意思', '与本词无关的语法术语'], answer: '土著的', explain: 'aboriginal：土著的。' },
      { id: 'aboriginal.q2', senseId: 'aboriginal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aboriginal?', options: ['土著的', 'a kind of ancient coin', 'the past tense of be'], answer: '土著的', explain: '对的是「土著的」。' },
      { id: 'aboriginal.q3', senseId: 'aboriginal.s1', errorType: 'grammar', type: '词义选择', prompt: 'aboriginal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aboriginal.q4', senseId: 'aboriginal.s1', errorType: 'meaning', type: '词源', prompt: '记 aboriginal 时，下面哪句更稳妥？', options: ['先锁住「土著的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「土著的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['土著的'] },
  });

  D('abort', {
    etymology: {
      origin: '拉丁语 aboriri「消失、流产」：ab-「离开」+ oriri「升起」。',
      prefix: null,
      root: { text: 'abort', gloss: '中止' },
      suffix: null,
      history: [
        { label: 'abort', text: '拉丁语 aboriri「消失、流产」：ab-「离开」+ oriri「升起」。' },
        { label: '现在', text: '核心用法是：中止。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：中止。',
      mnemonic: '看到 abort，先说出「中止」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：中止。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abort before the office closed.', chinese: '小组得在办公室关门前完成这件事：中止。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abort.s1', en: 'Nobody wanted to abort, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abort 是「中止」。', structure: 'abort / 在句中表示 / 中止', grammar: 'verb 用法，围绕「中止」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She aborted the form yesterday without checking the real past form.', right: 'Look up the past form of "abort" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abort 是verb，再套「中止」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abort.q1', senseId: 'abort.s1', errorType: 'meaning', type: '词义选择', prompt: '「abort」在本条的核心意思是：', options: ['中止', '完全相反的意思', '与本词无关的语法术语'], answer: '中止', explain: 'abort：中止。' },
      { id: 'abort.q2', senseId: 'abort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abort?', options: ['中止', 'a kind of ancient coin', 'the past tense of be'], answer: '中止', explain: '对的是「中止」。' },
      { id: 'abort.q3', senseId: 'abort.s1', errorType: 'grammar', type: '词义选择', prompt: 'abort 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abort.q4', senseId: 'abort.s1', errorType: 'meaning', type: '词源', prompt: '记 abort 时，下面哪句更稳妥？', options: ['先锁住「中止」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「中止」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['中止'] },
  });

  D('abortion', {
    etymology: {
      origin: '英语派生：abor 加上词尾，构成与「堕胎」相应的词类。',
      prefix: null,
      root: { text: 'abor', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abortion', text: '英语派生：abor 加上词尾，构成与「堕胎」相应的词类。' },
        { label: '现在', text: '核心用法是：堕胎。' },
      ],
      formationLogic: '先认词干 abor，再看词尾决定词性。',
      mnemonic: '看到 abortion，先说出「堕胎」，再放进一句自己的话。',
      note: '先认词干 abor，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abortion.', chinese: '这一章反复回到同一个点：堕胎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abortion.s1', en: 'Without that abortion, the story would be hard to follow.', zh: '没有这个堕胎，故事会很难读下去。', structure: 'abortion / 在句中表示 / 堕胎', grammar: 'noun 用法，围绕「堕胎」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abortion.', right: 'He gave me a lot of advice about the abortion.', reason: 'advice 不可数。名词 abortion 的单复数也要按词典词形来，不要自造。', rule: '先确定 abortion 是noun，再套「堕胎」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abortion.q1', senseId: 'abortion.s1', errorType: 'meaning', type: '词义选择', prompt: '「abortion」在本条的核心意思是：', options: ['堕胎', '完全相反的意思', '与本词无关的语法术语'], answer: '堕胎', explain: 'abortion：堕胎。' },
      { id: 'abortion.q2', senseId: 'abortion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abortion?', options: ['堕胎', 'a kind of ancient coin', 'the past tense of be'], answer: '堕胎', explain: '对的是「堕胎」。' },
      { id: 'abortion.q3', senseId: 'abortion.s1', errorType: 'grammar', type: '词义选择', prompt: 'abortion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abortion.q4', senseId: 'abortion.s1', errorType: 'meaning', type: '词源', prompt: '记 abortion 时，下面哪句更稳妥？', options: ['先锁住「堕胎」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「堕胎」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['堕胎'] },
  });

  D('about', {
    etymology: {
      origin: '古英语 onbutan「在外面」。后有「关于、大约」。',
      prefix: null,
      root: { text: 'about', gloss: '关于' },
      suffix: null,
      history: [
        { label: 'about', text: '古英语 onbutan「在外面」。后有「关于、大约」。' },
        { label: '现在', text: '核心用法是：关于。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：关于。',
      mnemonic: '看到 about，先说出「关于」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：关于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "about" and asked what it does in the sentence.', chinese: '老师在「about」下面划了线，问它在句中起什么作用。它表示关于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'about.s1', en: 'In the margin she wrote "about" so the reader would not miss that phrase.', zh: '她在页边写下「about」，免得读者漏掉这个说法。意思是关于。', structure: 'about / 在句中表示 / 关于', grammar: 'preposition 用法，围绕「关于」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated about word by word and lost the meaning.', right: 'He kept "about" as one phrase meaning 关于.', reason: '「about」是固定说法，拆开容易翻错。', rule: '先确定 about 是preposition，再套「关于」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'about.q1', senseId: 'about.s1', errorType: 'meaning', type: '词义选择', prompt: '「about」在本条的核心意思是：', options: ['关于', '完全相反的意思', '与本词无关的语法术语'], answer: '关于', explain: 'about：关于。' },
      { id: 'about.q2', senseId: 'about.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches about?', options: ['关于', 'a kind of ancient coin', 'the past tense of be'], answer: '关于', explain: '对的是「关于」。' },
      { id: 'about.q3', senseId: 'about.s1', errorType: 'grammar', type: '词义选择', prompt: 'about 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'about.q4', senseId: 'about.s1', errorType: 'meaning', type: '词源', prompt: '记 about 时，下面哪句更稳妥？', options: ['先锁住「关于」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「关于」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['关于'] },
  });

  D('above', {
    etymology: {
      origin: '古英语 abufan：a-「在」+ bufan「上方」。',
      prefix: null,
      root: { text: 'above', gloss: '在……之上' },
      suffix: null,
      history: [
        { label: 'above', text: '古英语 abufan：a-「在」+ bufan「上方」。' },
        { label: '现在', text: '核心用法是：在……之上。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：在……之上。',
      mnemonic: '看到 above，先说出「在……之上」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：在……之上。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "above" and asked what it does in the sentence.', chinese: '老师在「above」下面划了线，问它在句中起什么作用。它表示在……之上。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'above.s1', en: 'In the margin she wrote "above" so the reader would not miss that phrase.', zh: '她在页边写下「above」，免得读者漏掉这个说法。意思是在……之上。', structure: 'above / 在句中表示 / 在……之上', grammar: 'preposition 用法，围绕「在……之上」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated above word by word and lost the meaning.', right: 'He kept "above" as one phrase meaning 在……之上.', reason: '「above」是固定说法，拆开容易翻错。', rule: '先确定 above 是preposition，再套「在……之上」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'above.q1', senseId: 'above.s1', errorType: 'meaning', type: '词义选择', prompt: '「above」在本条的核心意思是：', options: ['在……之上', '完全相反的意思', '与本词无关的语法术语'], answer: '在……之上', explain: 'above：在……之上。' },
      { id: 'above.q2', senseId: 'above.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches above?', options: ['在……之上', 'a kind of ancient coin', 'the past tense of be'], answer: '在……之上', explain: '对的是「在……之上」。' },
      { id: 'above.q3', senseId: 'above.s1', errorType: 'grammar', type: '词义选择', prompt: 'above 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'above.q4', senseId: 'above.s1', errorType: 'meaning', type: '词源', prompt: '记 above 时，下面哪句更稳妥？', options: ['先锁住「在……之上」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在……之上」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在……之上'] },
  });

  D('abrasion', {
    etymology: {
      origin: '英语派生：abra 加上词尾，构成与「擦伤」相应的词类。',
      prefix: null,
      root: { text: 'abra', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abrasion', text: '英语派生：abra 加上词尾，构成与「擦伤」相应的词类。' },
        { label: '现在', text: '核心用法是：擦伤。' },
      ],
      formationLogic: '先认词干 abra，再看词尾决定词性。',
      mnemonic: '看到 abrasion，先说出「擦伤」，再放进一句自己的话。',
      note: '先认词干 abra，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abrasion.', chinese: '这一章反复回到同一个点：擦伤。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abrasion.s1', en: 'Without that abrasion, the story would be hard to follow.', zh: '没有这个擦伤，故事会很难读下去。', structure: 'abrasion / 在句中表示 / 擦伤', grammar: 'noun 用法，围绕「擦伤」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abrasion.', right: 'He gave me a lot of advice about the abrasion.', reason: 'advice 不可数。名词 abrasion 的单复数也要按词典词形来，不要自造。', rule: '先确定 abrasion 是noun，再套「擦伤」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abrasion.q1', senseId: 'abrasion.s1', errorType: 'meaning', type: '词义选择', prompt: '「abrasion」在本条的核心意思是：', options: ['擦伤', '完全相反的意思', '与本词无关的语法术语'], answer: '擦伤', explain: 'abrasion：擦伤。' },
      { id: 'abrasion.q2', senseId: 'abrasion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abrasion?', options: ['擦伤', 'a kind of ancient coin', 'the past tense of be'], answer: '擦伤', explain: '对的是「擦伤」。' },
      { id: 'abrasion.q3', senseId: 'abrasion.s1', errorType: 'grammar', type: '词义选择', prompt: 'abrasion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abrasion.q4', senseId: 'abrasion.s1', errorType: 'meaning', type: '词源', prompt: '记 abrasion 时，下面哪句更稳妥？', options: ['先锁住「擦伤」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「擦伤」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['擦伤'] },
  });

  D('abreast', {
    etymology: {
      origin: '现代英语常用词「abreast」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'abreast', gloss: '并排' },
      suffix: null,
      history: [
        { label: 'abreast', text: '现代英语常用词「abreast」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：并排。' },
      ],
      formationLogic: '核心义：并排。',
      mnemonic: '看到 abreast，先说出「并排」，再放进一句自己的话。',
      note: '核心义：并排。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule abreast, and the class finally followed it.', chinese: '她把规则讲得让人明白（并排），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abreast.s1', en: 'He nodded abreast and went back to his notes.', zh: '他并排地点了点头，又回去看笔记。', structure: 'abreast / 在句中表示 / 并排', grammar: 'adverb 用法，围绕「并排」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very abreastly.', right: 'She spoke abreast.', reason: 'abreast 已经是副词，不要再加 -ly。', rule: '先确定 abreast 是adverb，再套「并排」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abreast.q1', senseId: 'abreast.s1', errorType: 'meaning', type: '词义选择', prompt: '「abreast」在本条的核心意思是：', options: ['并排', '完全相反的意思', '与本词无关的语法术语'], answer: '并排', explain: 'abreast：并排。' },
      { id: 'abreast.q2', senseId: 'abreast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abreast?', options: ['并排', 'a kind of ancient coin', 'the past tense of be'], answer: '并排', explain: '对的是「并排」。' },
      { id: 'abreast.q3', senseId: 'abreast.s1', errorType: 'grammar', type: '词义选择', prompt: 'abreast 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'abreast.q4', senseId: 'abreast.s1', errorType: 'meaning', type: '词源', prompt: '记 abreast 时，下面哪句更稳妥？', options: ['先锁住「并排」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「并排」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['并排'] },
  });

  D('abrupt', {
    etymology: {
      origin: '拉丁语 abrumpere「突然折断」：ab- + rumpere「打破」。',
      prefix: null,
      root: { text: 'abrupt', gloss: '突然的' },
      suffix: null,
      history: [
        { label: 'abrupt', text: '拉丁语 abrumpere「突然折断」：ab- + rumpere「打破」。' },
        { label: '现在', text: '核心用法是：突然的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：突然的。',
      mnemonic: '看到 abrupt，先说出「突然的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：突然的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked abrupt even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得突然的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abrupt.s1', en: 'They needed a abrupt answer, not a long speech.', zh: '他们要的是突然的的答复，不是长篇发言。', structure: 'abrupt / 在句中表示 / 突然的', grammar: 'adjective 用法，围绕「突然的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are abrupt.', right: 'The news is abrupt.', reason: 'news 作主语时动词用单数。形容词 abrupt 放在系动词后面。', rule: '先确定 abrupt 是adjective，再套「突然的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abrupt.q1', senseId: 'abrupt.s1', errorType: 'meaning', type: '词义选择', prompt: '「abrupt」在本条的核心意思是：', options: ['突然的', '完全相反的意思', '与本词无关的语法术语'], answer: '突然的', explain: 'abrupt：突然的。' },
      { id: 'abrupt.q2', senseId: 'abrupt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abrupt?', options: ['突然的', 'a kind of ancient coin', 'the past tense of be'], answer: '突然的', explain: '对的是「突然的」。' },
      { id: 'abrupt.q3', senseId: 'abrupt.s1', errorType: 'grammar', type: '词义选择', prompt: 'abrupt 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'abrupt.q4', senseId: 'abrupt.s1', errorType: 'meaning', type: '词源', prompt: '记 abrupt 时，下面哪句更稳妥？', options: ['先锁住「突然的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「突然的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['突然的'] },
  });

  D('abruptly', {
    etymology: {
      origin: '英语派生：abrupt 加上词尾，构成与「突然地」相应的词类。',
      prefix: null,
      root: { text: 'abrupt', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abruptly', text: '英语派生：abrupt 加上词尾，构成与「突然地」相应的词类。' },
        { label: '现在', text: '核心用法是：突然地。' },
      ],
      formationLogic: '先认词干 abrupt，再看词尾决定词性。',
      mnemonic: '看到 abruptly，先说出「突然地」，再放进一句自己的话。',
      note: '先认词干 abrupt，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule abruptly, and the class finally followed it.', chinese: '她把规则讲得让人明白（突然地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abruptly.s1', en: 'He nodded abruptly and went back to his notes.', zh: '他突然地地点了点头，又回去看笔记。', structure: 'abruptly / 在句中表示 / 突然地', grammar: 'adverb 用法，围绕「突然地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very abruptlyly.', right: 'She spoke abruptly.', reason: 'abruptly 已经是副词，不要再加 -ly。', rule: '先确定 abruptly 是adverb，再套「突然地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abruptly.q1', senseId: 'abruptly.s1', errorType: 'meaning', type: '词义选择', prompt: '「abruptly」在本条的核心意思是：', options: ['突然地', '完全相反的意思', '与本词无关的语法术语'], answer: '突然地', explain: 'abruptly：突然地。' },
      { id: 'abruptly.q2', senseId: 'abruptly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abruptly?', options: ['突然地', 'a kind of ancient coin', 'the past tense of be'], answer: '突然地', explain: '对的是「突然地」。' },
      { id: 'abruptly.q3', senseId: 'abruptly.s1', errorType: 'grammar', type: '词义选择', prompt: 'abruptly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'abruptly.q4', senseId: 'abruptly.s1', errorType: 'meaning', type: '词源', prompt: '记 abruptly 时，下面哪句更稳妥？', options: ['先锁住「突然地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「突然地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['突然地'] },
  });

  D('abruptness', {
    etymology: {
      origin: '英语派生：abrupt 加上词尾，构成与「突然」相应的词类。',
      prefix: null,
      root: { text: 'abrupt', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abruptness', text: '英语派生：abrupt 加上词尾，构成与「突然」相应的词类。' },
        { label: '现在', text: '核心用法是：突然。' },
      ],
      formationLogic: '先认词干 abrupt，再看词尾决定词性。',
      mnemonic: '看到 abruptness，先说出「突然」，再放进一句自己的话。',
      note: '先认词干 abrupt，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abruptness.', chinese: '这一章反复回到同一个点：突然。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abruptness.s1', en: 'Without that abruptness, the story would be hard to follow.', zh: '没有这个突然，故事会很难读下去。', structure: 'abruptness / 在句中表示 / 突然', grammar: 'noun 用法，围绕「突然」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abruptness.', right: 'He gave me a lot of advice about the abruptness.', reason: 'advice 不可数。名词 abruptness 的单复数也要按词典词形来，不要自造。', rule: '先确定 abruptness 是noun，再套「突然」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abruptness.q1', senseId: 'abruptness.s1', errorType: 'meaning', type: '词义选择', prompt: '「abruptness」在本条的核心意思是：', options: ['突然', '完全相反的意思', '与本词无关的语法术语'], answer: '突然', explain: 'abruptness：突然。' },
      { id: 'abruptness.q2', senseId: 'abruptness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abruptness?', options: ['突然', 'a kind of ancient coin', 'the past tense of be'], answer: '突然', explain: '对的是「突然」。' },
      { id: 'abruptness.q3', senseId: 'abruptness.s1', errorType: 'grammar', type: '词义选择', prompt: 'abruptness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abruptness.q4', senseId: 'abruptness.s1', errorType: 'meaning', type: '词源', prompt: '记 abruptness 时，下面哪句更稳妥？', options: ['先锁住「突然」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「突然」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['突然'] },
  });

  D('absence', {
    etymology: {
      origin: '拉丁语 absentia，absent-「不在场」。',
      prefix: null,
      root: { text: 'absence', gloss: '缺席' },
      suffix: null,
      history: [
        { label: 'absence', text: '拉丁语 absentia，absent-「不在场」。' },
        { label: '现在', text: '核心用法是：缺席。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：缺席。',
      mnemonic: '看到 absence，先说出「缺席」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：缺席。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one absence.', chinese: '这一章反复回到同一个点：缺席。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absence.s1', en: 'Without that absence, the story would be hard to follow.', zh: '没有这个缺席，故事会很难读下去。', structure: 'absence / 在句中表示 / 缺席', grammar: 'noun 用法，围绕「缺席」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the absence.', right: 'He gave me a lot of advice about the absence.', reason: 'advice 不可数。名词 absence 的单复数也要按词典词形来，不要自造。', rule: '先确定 absence 是noun，再套「缺席」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absence.q1', senseId: 'absence.s1', errorType: 'meaning', type: '词义选择', prompt: '「absence」在本条的核心意思是：', options: ['缺席', '完全相反的意思', '与本词无关的语法术语'], answer: '缺席', explain: 'absence：缺席。' },
      { id: 'absence.q2', senseId: 'absence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absence?', options: ['缺席', 'a kind of ancient coin', 'the past tense of be'], answer: '缺席', explain: '对的是「缺席」。' },
      { id: 'absence.q3', senseId: 'absence.s1', errorType: 'grammar', type: '词义选择', prompt: 'absence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'absence.q4', senseId: 'absence.s1', errorType: 'meaning', type: '词源', prompt: '记 absence 时，下面哪句更稳妥？', options: ['先锁住「缺席」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「缺席」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缺席'] },
  });

  D('absent-minded', {
    etymology: {
      origin: '现代英语常用词「absent-minded」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'absent-minded', gloss: '心不在焉的' },
      suffix: null,
      history: [
        { label: 'absent-minded', text: '现代英语常用词「absent-minded」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：心不在焉的。' },
      ],
      formationLogic: '核心义：心不在焉的。',
      mnemonic: '看到 absent-minded，先说出「心不在焉的」，再放进一句自己的话。',
      note: '核心义：心不在焉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked absent-minded even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得心不在焉的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absent-minded.s1', en: 'They needed a absent-minded answer, not a long speech.', zh: '他们要的是心不在焉的的答复，不是长篇发言。', structure: 'absent-minded / 在句中表示 / 心不在焉的', grammar: 'adjective 用法，围绕「心不在焉的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are absent-minded.', right: 'The news is absent-minded.', reason: 'news 作主语时动词用单数。形容词 absent-minded 放在系动词后面。', rule: '先确定 absent-minded 是adjective，再套「心不在焉的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absent-minded.q1', senseId: 'absent-minded.s1', errorType: 'meaning', type: '词义选择', prompt: '「absent-minded」在本条的核心意思是：', options: ['心不在焉的', '完全相反的意思', '与本词无关的语法术语'], answer: '心不在焉的', explain: 'absent-minded：心不在焉的。' },
      { id: 'absent-minded.q2', senseId: 'absent-minded.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absent-minded?', options: ['心不在焉的', 'a kind of ancient coin', 'the past tense of be'], answer: '心不在焉的', explain: '对的是「心不在焉的」。' },
      { id: 'absent-minded.q3', senseId: 'absent-minded.s1', errorType: 'grammar', type: '词义选择', prompt: 'absent-minded 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'absent-minded.q4', senseId: 'absent-minded.s1', errorType: 'meaning', type: '词源', prompt: '记 absent-minded 时，下面哪句更稳妥？', options: ['先锁住「心不在焉的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「心不在焉的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['心不在焉的'] },
  });

  D('absolutely', {
    etymology: {
      origin: '英语派生：absolute 加上词尾，构成与「绝对地」相应的词类。',
      prefix: null,
      root: { text: 'absolute', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'absolutely', text: '英语派生：absolute 加上词尾，构成与「绝对地」相应的词类。' },
        { label: '现在', text: '核心用法是：绝对地。' },
      ],
      formationLogic: '先认词干 absolute，再看词尾决定词性。',
      mnemonic: '看到 absolutely，先说出「绝对地」，再放进一句自己的话。',
      note: '先认词干 absolute，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule absolutely, and the class finally followed it.', chinese: '她把规则讲得让人明白（绝对地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absolutely.s1', en: 'He nodded absolutely and went back to his notes.', zh: '他绝对地地点了点头，又回去看笔记。', structure: 'absolutely / 在句中表示 / 绝对地', grammar: 'adverb 用法，围绕「绝对地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very absolutelyly.', right: 'She spoke absolutely.', reason: 'absolutely 已经是副词，不要再加 -ly。', rule: '先确定 absolutely 是adverb，再套「绝对地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absolutely.q1', senseId: 'absolutely.s1', errorType: 'meaning', type: '词义选择', prompt: '「absolutely」在本条的核心意思是：', options: ['绝对地', '完全相反的意思', '与本词无关的语法术语'], answer: '绝对地', explain: 'absolutely：绝对地。' },
      { id: 'absolutely.q2', senseId: 'absolutely.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absolutely?', options: ['绝对地', 'a kind of ancient coin', 'the past tense of be'], answer: '绝对地', explain: '对的是「绝对地」。' },
      { id: 'absolutely.q3', senseId: 'absolutely.s1', errorType: 'grammar', type: '词义选择', prompt: 'absolutely 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'absolutely.q4', senseId: 'absolutely.s1', errorType: 'meaning', type: '词源', prompt: '记 absolutely 时，下面哪句更稳妥？', options: ['先锁住「绝对地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「绝对地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绝对地'] },
  });

  D('absorbent', {
    etymology: {
      origin: '现代英语常用词「absorbent」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'absorbent', gloss: '能吸收的' },
      suffix: null,
      history: [
        { label: 'absorbent', text: '现代英语常用词「absorbent」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：能吸收的。' },
      ],
      formationLogic: '核心义：能吸收的。',
      mnemonic: '看到 absorbent，先说出「能吸收的」，再放进一句自己的话。',
      note: '核心义：能吸收的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked absorbent even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得能吸收的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absorbent.s1', en: 'They needed a absorbent answer, not a long speech.', zh: '他们要的是能吸收的的答复，不是长篇发言。', structure: 'absorbent / 在句中表示 / 能吸收的', grammar: 'adjective 用法，围绕「能吸收的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are absorbent.', right: 'The news is absorbent.', reason: 'news 作主语时动词用单数。形容词 absorbent 放在系动词后面。', rule: '先确定 absorbent 是adjective，再套「能吸收的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absorbent.q1', senseId: 'absorbent.s1', errorType: 'meaning', type: '词义选择', prompt: '「absorbent」在本条的核心意思是：', options: ['能吸收的', '完全相反的意思', '与本词无关的语法术语'], answer: '能吸收的', explain: 'absorbent：能吸收的。' },
      { id: 'absorbent.q2', senseId: 'absorbent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absorbent?', options: ['能吸收的', 'a kind of ancient coin', 'the past tense of be'], answer: '能吸收的', explain: '对的是「能吸收的」。' },
      { id: 'absorbent.q3', senseId: 'absorbent.s1', errorType: 'grammar', type: '词义选择', prompt: 'absorbent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'absorbent.q4', senseId: 'absorbent.s1', errorType: 'meaning', type: '词源', prompt: '记 absorbent 时，下面哪句更稳妥？', options: ['先锁住「能吸收的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「能吸收的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['能吸收的'] },
  });

  D('absorption', {
    etymology: {
      origin: '英语派生：absorp 加上词尾，构成与「吸收」相应的词类。',
      prefix: null,
      root: { text: 'absorp', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'absorption', text: '英语派生：absorp 加上词尾，构成与「吸收」相应的词类。' },
        { label: '现在', text: '核心用法是：吸收。' },
      ],
      formationLogic: '先认词干 absorp，再看词尾决定词性。',
      mnemonic: '看到 absorption，先说出「吸收」，再放进一句自己的话。',
      note: '先认词干 absorp，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one absorption.', chinese: '这一章反复回到同一个点：吸收。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absorption.s1', en: 'Without that absorption, the story would be hard to follow.', zh: '没有这个吸收，故事会很难读下去。', structure: 'absorption / 在句中表示 / 吸收', grammar: 'noun 用法，围绕「吸收」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the absorption.', right: 'He gave me a lot of advice about the absorption.', reason: 'advice 不可数。名词 absorption 的单复数也要按词典词形来，不要自造。', rule: '先确定 absorption 是noun，再套「吸收」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absorption.q1', senseId: 'absorption.s1', errorType: 'meaning', type: '词义选择', prompt: '「absorption」在本条的核心意思是：', options: ['吸收', '完全相反的意思', '与本词无关的语法术语'], answer: '吸收', explain: 'absorption：吸收。' },
      { id: 'absorption.q2', senseId: 'absorption.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absorption?', options: ['吸收', 'a kind of ancient coin', 'the past tense of be'], answer: '吸收', explain: '对的是「吸收」。' },
      { id: 'absorption.q3', senseId: 'absorption.s1', errorType: 'grammar', type: '词义选择', prompt: 'absorption 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'absorption.q4', senseId: 'absorption.s1', errorType: 'meaning', type: '词源', prompt: '记 absorption 时，下面哪句更稳妥？', options: ['先锁住「吸收」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「吸收」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['吸收'] },
  });

  D('abstain', {
    etymology: {
      origin: '现代英语常用词「abstain」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'abstain', gloss: '戒除' },
      suffix: null,
      history: [
        { label: 'abstain', text: '现代英语常用词「abstain」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：戒除。' },
      ],
      formationLogic: '核心义：戒除。',
      mnemonic: '看到 abstain，先说出「戒除」，再放进一句自己的话。',
      note: '核心义：戒除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abstain before the office closed.', chinese: '小组得在办公室关门前完成这件事：戒除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abstain.s1', en: 'Nobody wanted to abstain, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abstain 是「戒除」。', structure: 'abstain / 在句中表示 / 戒除', grammar: 'verb 用法，围绕「戒除」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She abstained the form yesterday without checking the real past form.', right: 'Look up the past form of "abstain" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abstain 是verb，再套「戒除」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abstain.q1', senseId: 'abstain.s1', errorType: 'meaning', type: '词义选择', prompt: '「abstain」在本条的核心意思是：', options: ['戒除', '完全相反的意思', '与本词无关的语法术语'], answer: '戒除', explain: 'abstain：戒除。' },
      { id: 'abstain.q2', senseId: 'abstain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abstain?', options: ['戒除', 'a kind of ancient coin', 'the past tense of be'], answer: '戒除', explain: '对的是「戒除」。' },
      { id: 'abstain.q3', senseId: 'abstain.s1', errorType: 'grammar', type: '词义选择', prompt: 'abstain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abstain.q4', senseId: 'abstain.s1', errorType: 'meaning', type: '词源', prompt: '记 abstain 时，下面哪句更稳妥？', options: ['先锁住「戒除」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「戒除」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['戒除'] },
  });

  D('abstraction', {
    etymology: {
      origin: '英语派生：abstrac 加上词尾，构成与「抽象（概念）」相应的词类。',
      prefix: null,
      root: { text: 'abstrac', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abstraction', text: '英语派生：abstrac 加上词尾，构成与「抽象（概念）」相应的词类。' },
        { label: '现在', text: '核心用法是：抽象（概念）。' },
      ],
      formationLogic: '先认词干 abstrac，再看词尾决定词性。',
      mnemonic: '看到 abstraction，先说出「抽象（概念）」，再放进一句自己的话。',
      note: '先认词干 abstrac，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abstraction.', chinese: '这一章反复回到同一个点：抽象（概念）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abstraction.s1', en: 'Without that abstraction, the story would be hard to follow.', zh: '没有这个抽象（概念），故事会很难读下去。', structure: 'abstraction / 在句中表示 / 抽象（概念）', grammar: 'noun 用法，围绕「抽象（概念）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abstraction.', right: 'He gave me a lot of advice about the abstraction.', reason: 'advice 不可数。名词 abstraction 的单复数也要按词典词形来，不要自造。', rule: '先确定 abstraction 是noun，再套「抽象（概念）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abstraction.q1', senseId: 'abstraction.s1', errorType: 'meaning', type: '词义选择', prompt: '「abstraction」在本条的核心意思是：', options: ['抽象（概念）', '完全相反的意思', '与本词无关的语法术语'], answer: '抽象（概念）', explain: 'abstraction：抽象（概念）。' },
      { id: 'abstraction.q2', senseId: 'abstraction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abstraction?', options: ['抽象（概念）', 'a kind of ancient coin', 'the past tense of be'], answer: '抽象（概念）', explain: '对的是「抽象（概念）」。' },
      { id: 'abstraction.q3', senseId: 'abstraction.s1', errorType: 'grammar', type: '词义选择', prompt: 'abstraction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abstraction.q4', senseId: 'abstraction.s1', errorType: 'meaning', type: '词源', prompt: '记 abstraction 时，下面哪句更稳妥？', options: ['先锁住「抽象（概念）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「抽象（概念）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抽象（概念）'] },
  });

  D('absurd', {
    etymology: {
      origin: '拉丁语 absurdus「走调的、不合理的」，surdus「聋、沉闷」。',
      prefix: null,
      root: { text: 'absurd', gloss: '荒谬的' },
      suffix: null,
      history: [
        { label: 'absurd', text: '拉丁语 absurdus「走调的、不合理的」，surdus「聋、沉闷」。' },
        { label: '现在', text: '核心用法是：荒谬的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：荒谬的。',
      mnemonic: '看到 absurd，先说出「荒谬的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：荒谬的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked absurd even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得荒谬的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absurd.s1', en: 'They needed a absurd answer, not a long speech.', zh: '他们要的是荒谬的的答复，不是长篇发言。', structure: 'absurd / 在句中表示 / 荒谬的', grammar: 'adjective 用法，围绕「荒谬的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are absurd.', right: 'The news is absurd.', reason: 'news 作主语时动词用单数。形容词 absurd 放在系动词后面。', rule: '先确定 absurd 是adjective，再套「荒谬的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absurd.q1', senseId: 'absurd.s1', errorType: 'meaning', type: '词义选择', prompt: '「absurd」在本条的核心意思是：', options: ['荒谬的', '完全相反的意思', '与本词无关的语法术语'], answer: '荒谬的', explain: 'absurd：荒谬的。' },
      { id: 'absurd.q2', senseId: 'absurd.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absurd?', options: ['荒谬的', 'a kind of ancient coin', 'the past tense of be'], answer: '荒谬的', explain: '对的是「荒谬的」。' },
      { id: 'absurd.q3', senseId: 'absurd.s1', errorType: 'grammar', type: '词义选择', prompt: 'absurd 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'absurd.q4', senseId: 'absurd.s1', errorType: 'meaning', type: '词源', prompt: '记 absurd 时，下面哪句更稳妥？', options: ['先锁住「荒谬的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「荒谬的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['荒谬的'] },
  });

  D('absurdity', {
    etymology: {
      origin: '英语派生：absurd 加上词尾，构成与「荒谬」相应的词类。',
      prefix: null,
      root: { text: 'absurd', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'absurdity', text: '英语派生：absurd 加上词尾，构成与「荒谬」相应的词类。' },
        { label: '现在', text: '核心用法是：荒谬。' },
      ],
      formationLogic: '先认词干 absurd，再看词尾决定词性。',
      mnemonic: '看到 absurdity，先说出「荒谬」，再放进一句自己的话。',
      note: '先认词干 absurd，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one absurdity.', chinese: '这一章反复回到同一个点：荒谬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'absurdity.s1', en: 'Without that absurdity, the story would be hard to follow.', zh: '没有这个荒谬，故事会很难读下去。', structure: 'absurdity / 在句中表示 / 荒谬', grammar: 'noun 用法，围绕「荒谬」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the absurdity.', right: 'He gave me a lot of advice about the absurdity.', reason: 'advice 不可数。名词 absurdity 的单复数也要按词典词形来，不要自造。', rule: '先确定 absurdity 是noun，再套「荒谬」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'absurdity.q1', senseId: 'absurdity.s1', errorType: 'meaning', type: '词义选择', prompt: '「absurdity」在本条的核心意思是：', options: ['荒谬', '完全相反的意思', '与本词无关的语法术语'], answer: '荒谬', explain: 'absurdity：荒谬。' },
      { id: 'absurdity.q2', senseId: 'absurdity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches absurdity?', options: ['荒谬', 'a kind of ancient coin', 'the past tense of be'], answer: '荒谬', explain: '对的是「荒谬」。' },
      { id: 'absurdity.q3', senseId: 'absurdity.s1', errorType: 'grammar', type: '词义选择', prompt: 'absurdity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'absurdity.q4', senseId: 'absurdity.s1', errorType: 'meaning', type: '词源', prompt: '记 absurdity 时，下面哪句更稳妥？', options: ['先锁住「荒谬」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「荒谬」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['荒谬'] },
  });

  D('abundance', {
    etymology: {
      origin: '拉丁语 abundantia，abundare「溢出」。',
      prefix: null,
      root: { text: 'abundance', gloss: '丰富' },
      suffix: null,
      history: [
        { label: 'abundance', text: '拉丁语 abundantia，abundare「溢出」。' },
        { label: '现在', text: '核心用法是：丰富。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：丰富。',
      mnemonic: '看到 abundance，先说出「丰富」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：丰富。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abundance.', chinese: '这一章反复回到同一个点：丰富。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abundance.s1', en: 'Without that abundance, the story would be hard to follow.', zh: '没有这个丰富，故事会很难读下去。', structure: 'abundance / 在句中表示 / 丰富', grammar: 'noun 用法，围绕「丰富」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abundance.', right: 'He gave me a lot of advice about the abundance.', reason: 'advice 不可数。名词 abundance 的单复数也要按词典词形来，不要自造。', rule: '先确定 abundance 是noun，再套「丰富」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abundance.q1', senseId: 'abundance.s1', errorType: 'meaning', type: '词义选择', prompt: '「abundance」在本条的核心意思是：', options: ['丰富', '完全相反的意思', '与本词无关的语法术语'], answer: '丰富', explain: 'abundance：丰富。' },
      { id: 'abundance.q2', senseId: 'abundance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abundance?', options: ['丰富', 'a kind of ancient coin', 'the past tense of be'], answer: '丰富', explain: '对的是「丰富」。' },
      { id: 'abundance.q3', senseId: 'abundance.s1', errorType: 'grammar', type: '词义选择', prompt: 'abundance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abundance.q4', senseId: 'abundance.s1', errorType: 'meaning', type: '词源', prompt: '记 abundance 时，下面哪句更稳妥？', options: ['先锁住「丰富」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「丰富」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['丰富'] },
  });

  D('abundant', {
    etymology: {
      origin: '拉丁语 abundantem「溢出的」。',
      prefix: null,
      root: { text: 'abundant', gloss: '丰富的' },
      suffix: null,
      history: [
        { label: 'abundant', text: '拉丁语 abundantem「溢出的」。' },
        { label: '现在', text: '核心用法是：丰富的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：丰富的。',
      mnemonic: '看到 abundant，先说出「丰富的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：丰富的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked abundant even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得丰富的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abundant.s1', en: 'They needed a abundant answer, not a long speech.', zh: '他们要的是丰富的的答复，不是长篇发言。', structure: 'abundant / 在句中表示 / 丰富的', grammar: 'adjective 用法，围绕「丰富的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are abundant.', right: 'The news is abundant.', reason: 'news 作主语时动词用单数。形容词 abundant 放在系动词后面。', rule: '先确定 abundant 是adjective，再套「丰富的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abundant.q1', senseId: 'abundant.s1', errorType: 'meaning', type: '词义选择', prompt: '「abundant」在本条的核心意思是：', options: ['丰富的', '完全相反的意思', '与本词无关的语法术语'], answer: '丰富的', explain: 'abundant：丰富的。' },
      { id: 'abundant.q2', senseId: 'abundant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abundant?', options: ['丰富的', 'a kind of ancient coin', 'the past tense of be'], answer: '丰富的', explain: '对的是「丰富的」。' },
      { id: 'abundant.q3', senseId: 'abundant.s1', errorType: 'grammar', type: '词义选择', prompt: 'abundant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'abundant.q4', senseId: 'abundant.s1', errorType: 'meaning', type: '词源', prompt: '记 abundant 时，下面哪句更稳妥？', options: ['先锁住「丰富的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「丰富的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['丰富的'] },
  });

  D('abuse', {
    etymology: {
      origin: '拉丁语 abusus：ab-「偏离」+ uti「使用」。用歪了。',
      prefix: null,
      root: { text: 'abuse', gloss: '滥用' },
      suffix: null,
      history: [
        { label: 'abuse', text: '拉丁语 abusus：ab-「偏离」+ uti「使用」。用歪了。' },
        { label: '现在', text: '核心用法是：滥用。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：滥用。',
      mnemonic: '看到 abuse，先说出「滥用」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：滥用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to abuse before the office closed.', chinese: '小组得在办公室关门前完成这件事：滥用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abuse.s1', en: 'Nobody wanted to abuse, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 abuse 是「滥用」。', structure: 'abuse / 在句中表示 / 滥用', grammar: 'verb 用法，围绕「滥用」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She abuseed the form yesterday without checking the real past form.', right: 'Look up the past form of "abuse" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 abuse 是verb，再套「滥用」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abuse.q1', senseId: 'abuse.s1', errorType: 'meaning', type: '词义选择', prompt: '「abuse」在本条的核心意思是：', options: ['滥用', '完全相反的意思', '与本词无关的语法术语'], answer: '滥用', explain: 'abuse：滥用。' },
      { id: 'abuse.q2', senseId: 'abuse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abuse?', options: ['滥用', 'a kind of ancient coin', 'the past tense of be'], answer: '滥用', explain: '对的是「滥用」。' },
      { id: 'abuse.q3', senseId: 'abuse.s1', errorType: 'grammar', type: '词义选择', prompt: 'abuse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'abuse.q4', senseId: 'abuse.s1', errorType: 'meaning', type: '词源', prompt: '记 abuse 时，下面哪句更稳妥？', options: ['先锁住「滥用」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「滥用」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['滥用'] },
  });

  D('abusive', {
    etymology: {
      origin: '英语派生：abus 加上词尾，构成与「辱骂的」相应的词类。',
      prefix: null,
      root: { text: 'abus', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'abusive', text: '英语派生：abus 加上词尾，构成与「辱骂的」相应的词类。' },
        { label: '现在', text: '核心用法是：辱骂的。' },
      ],
      formationLogic: '先认词干 abus，再看词尾决定词性。',
      mnemonic: '看到 abusive，先说出「辱骂的」，再放进一句自己的话。',
      note: '先认词干 abus，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked abusive even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得辱骂的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abusive.s1', en: 'They needed a abusive answer, not a long speech.', zh: '他们要的是辱骂的的答复，不是长篇发言。', structure: 'abusive / 在句中表示 / 辱骂的', grammar: 'adjective 用法，围绕「辱骂的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are abusive.', right: 'The news is abusive.', reason: 'news 作主语时动词用单数。形容词 abusive 放在系动词后面。', rule: '先确定 abusive 是adjective，再套「辱骂的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abusive.q1', senseId: 'abusive.s1', errorType: 'meaning', type: '词义选择', prompt: '「abusive」在本条的核心意思是：', options: ['辱骂的', '完全相反的意思', '与本词无关的语法术语'], answer: '辱骂的', explain: 'abusive：辱骂的。' },
      { id: 'abusive.q2', senseId: 'abusive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abusive?', options: ['辱骂的', 'a kind of ancient coin', 'the past tense of be'], answer: '辱骂的', explain: '对的是「辱骂的」。' },
      { id: 'abusive.q3', senseId: 'abusive.s1', errorType: 'grammar', type: '词义选择', prompt: 'abusive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'abusive.q4', senseId: 'abusive.s1', errorType: 'meaning', type: '词源', prompt: '记 abusive 时，下面哪句更稳妥？', options: ['先锁住「辱骂的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「辱骂的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['辱骂的'] },
  });

  D('abyss', {
    etymology: {
      origin: '希腊语 abyssos「无底的」。',
      prefix: null,
      root: { text: 'abyss', gloss: '深渊' },
      suffix: null,
      history: [
        { label: 'abyss', text: '希腊语 abyssos「无底的」。' },
        { label: '现在', text: '核心用法是：深渊。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：深渊。',
      mnemonic: '看到 abyss，先说出「深渊」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：深渊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one abyss.', chinese: '这一章反复回到同一个点：深渊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'abyss.s1', en: 'Without that abyss, the story would be hard to follow.', zh: '没有这个深渊，故事会很难读下去。', structure: 'abyss / 在句中表示 / 深渊', grammar: 'noun 用法，围绕「深渊」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the abyss.', right: 'He gave me a lot of advice about the abyss.', reason: 'advice 不可数。名词 abyss 的单复数也要按词典词形来，不要自造。', rule: '先确定 abyss 是noun，再套「深渊」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'abyss.q1', senseId: 'abyss.s1', errorType: 'meaning', type: '词义选择', prompt: '「abyss」在本条的核心意思是：', options: ['深渊', '完全相反的意思', '与本词无关的语法术语'], answer: '深渊', explain: 'abyss：深渊。' },
      { id: 'abyss.q2', senseId: 'abyss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches abyss?', options: ['深渊', 'a kind of ancient coin', 'the past tense of be'], answer: '深渊', explain: '对的是「深渊」。' },
      { id: 'abyss.q3', senseId: 'abyss.s1', errorType: 'grammar', type: '词义选择', prompt: 'abyss 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'abyss.q4', senseId: 'abyss.s1', errorType: 'meaning', type: '词源', prompt: '记 abyss 时，下面哪句更稳妥？', options: ['先锁住「深渊」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「深渊」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深渊'] },
  });

  D('academic', {
    etymology: {
      origin: '希腊语 Akademeia，柏拉图讲学的园林名。',
      prefix: null,
      root: { text: 'academic', gloss: '学术的' },
      suffix: null,
      history: [
        { label: 'academic', text: '希腊语 Akademeia，柏拉图讲学的园林名。' },
        { label: '现在', text: '核心用法是：学术的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：学术的。',
      mnemonic: '看到 academic，先说出「学术的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：学术的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked academic even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得学术的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'academic.s1', en: 'They needed a academic answer, not a long speech.', zh: '他们要的是学术的的答复，不是长篇发言。', structure: 'academic / 在句中表示 / 学术的', grammar: 'adjective 用法，围绕「学术的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are academic.', right: 'The news is academic.', reason: 'news 作主语时动词用单数。形容词 academic 放在系动词后面。', rule: '先确定 academic 是adjective，再套「学术的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'academic.q1', senseId: 'academic.s1', errorType: 'meaning', type: '词义选择', prompt: '「academic」在本条的核心意思是：', options: ['学术的', '完全相反的意思', '与本词无关的语法术语'], answer: '学术的', explain: 'academic：学术的。' },
      { id: 'academic.q2', senseId: 'academic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches academic?', options: ['学术的', 'a kind of ancient coin', 'the past tense of be'], answer: '学术的', explain: '对的是「学术的」。' },
      { id: 'academic.q3', senseId: 'academic.s1', errorType: 'grammar', type: '词义选择', prompt: 'academic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'academic.q4', senseId: 'academic.s1', errorType: 'meaning', type: '词源', prompt: '记 academic 时，下面哪句更稳妥？', options: ['先锁住「学术的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「学术的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['学术的'] },
  });

  D('academy', {
    etymology: {
      origin: '希腊语 Akademeia。',
      prefix: null,
      root: { text: 'academy', gloss: '学院' },
      suffix: null,
      history: [
        { label: 'academy', text: '希腊语 Akademeia。' },
        { label: '现在', text: '核心用法是：学院。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：学院。',
      mnemonic: '看到 academy，先说出「学院」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：学院。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one academy.', chinese: '这一章反复回到同一个点：学院。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'academy.s1', en: 'Without that academy, the story would be hard to follow.', zh: '没有这个学院，故事会很难读下去。', structure: 'academy / 在句中表示 / 学院', grammar: 'noun 用法，围绕「学院」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the academy.', right: 'He gave me a lot of advice about the academy.', reason: 'advice 不可数。名词 academy 的单复数也要按词典词形来，不要自造。', rule: '先确定 academy 是noun，再套「学院」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'academy.q1', senseId: 'academy.s1', errorType: 'meaning', type: '词义选择', prompt: '「academy」在本条的核心意思是：', options: ['学院', '完全相反的意思', '与本词无关的语法术语'], answer: '学院', explain: 'academy：学院。' },
      { id: 'academy.q2', senseId: 'academy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches academy?', options: ['学院', 'a kind of ancient coin', 'the past tense of be'], answer: '学院', explain: '对的是「学院」。' },
      { id: 'academy.q3', senseId: 'academy.s1', errorType: 'grammar', type: '词义选择', prompt: 'academy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'academy.q4', senseId: 'academy.s1', errorType: 'meaning', type: '词源', prompt: '记 academy 时，下面哪句更稳妥？', options: ['先锁住「学院」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「学院」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['学院'] },
  });

  D('accelerate', {
    etymology: {
      origin: '拉丁语 accelerare：ad- + celer「快」。',
      prefix: null,
      root: { text: 'accelerate', gloss: '加速' },
      suffix: null,
      history: [
        { label: 'accelerate', text: '拉丁语 accelerare：ad- + celer「快」。' },
        { label: '现在', text: '核心用法是：加速。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：加速。',
      mnemonic: '看到 accelerate，先说出「加速」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：加速。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to accelerate before the office closed.', chinese: '小组得在办公室关门前完成这件事：加速。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accelerate.s1', en: 'Nobody wanted to accelerate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 accelerate 是「加速」。', structure: 'accelerate / 在句中表示 / 加速', grammar: 'verb 用法，围绕「加速」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She accelerateed the form yesterday without checking the real past form.', right: 'Look up the past form of "accelerate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 accelerate 是verb，再套「加速」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accelerate.q1', senseId: 'accelerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「accelerate」在本条的核心意思是：', options: ['加速', '完全相反的意思', '与本词无关的语法术语'], answer: '加速', explain: 'accelerate：加速。' },
      { id: 'accelerate.q2', senseId: 'accelerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accelerate?', options: ['加速', 'a kind of ancient coin', 'the past tense of be'], answer: '加速', explain: '对的是「加速」。' },
      { id: 'accelerate.q3', senseId: 'accelerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'accelerate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'accelerate.q4', senseId: 'accelerate.s1', errorType: 'meaning', type: '词源', prompt: '记 accelerate 时，下面哪句更稳妥？', options: ['先锁住「加速」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「加速」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加速'] },
  });

  D('acceleration', {
    etymology: {
      origin: '英语派生：accelera 加上词尾，构成与「加速」相应的词类。',
      prefix: null,
      root: { text: 'accelera', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acceleration', text: '英语派生：accelera 加上词尾，构成与「加速」相应的词类。' },
        { label: '现在', text: '核心用法是：加速。' },
      ],
      formationLogic: '先认词干 accelera，再看词尾决定词性。',
      mnemonic: '看到 acceleration，先说出「加速」，再放进一句自己的话。',
      note: '先认词干 accelera，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acceleration.', chinese: '这一章反复回到同一个点：加速。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acceleration.s1', en: 'Without that acceleration, the story would be hard to follow.', zh: '没有这个加速，故事会很难读下去。', structure: 'acceleration / 在句中表示 / 加速', grammar: 'noun 用法，围绕「加速」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acceleration.', right: 'He gave me a lot of advice about the acceleration.', reason: 'advice 不可数。名词 acceleration 的单复数也要按词典词形来，不要自造。', rule: '先确定 acceleration 是noun，再套「加速」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acceleration.q1', senseId: 'acceleration.s1', errorType: 'meaning', type: '词义选择', prompt: '「acceleration」在本条的核心意思是：', options: ['加速', '完全相反的意思', '与本词无关的语法术语'], answer: '加速', explain: 'acceleration：加速。' },
      { id: 'acceleration.q2', senseId: 'acceleration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acceleration?', options: ['加速', 'a kind of ancient coin', 'the past tense of be'], answer: '加速', explain: '对的是「加速」。' },
      { id: 'acceleration.q3', senseId: 'acceleration.s1', errorType: 'grammar', type: '词义选择', prompt: 'acceleration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acceleration.q4', senseId: 'acceleration.s1', errorType: 'meaning', type: '词源', prompt: '记 acceleration 时，下面哪句更稳妥？', options: ['先锁住「加速」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「加速」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加速'] },
  });

  D('accelerator', {
    etymology: {
      origin: '英语派生：accelerat 加上词尾，构成与「加速器」相应的词类。',
      prefix: null,
      root: { text: 'accelerat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accelerator', text: '英语派生：accelerat 加上词尾，构成与「加速器」相应的词类。' },
        { label: '现在', text: '核心用法是：加速器。' },
      ],
      formationLogic: '先认词干 accelerat，再看词尾决定词性。',
      mnemonic: '看到 accelerator，先说出「加速器」，再放进一句自己的话。',
      note: '先认词干 accelerat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accelerator.', chinese: '这一章反复回到同一个点：加速器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accelerator.s1', en: 'Without that accelerator, the story would be hard to follow.', zh: '没有这个加速器，故事会很难读下去。', structure: 'accelerator / 在句中表示 / 加速器', grammar: 'noun 用法，围绕「加速器」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accelerator.', right: 'He gave me a lot of advice about the accelerator.', reason: 'advice 不可数。名词 accelerator 的单复数也要按词典词形来，不要自造。', rule: '先确定 accelerator 是noun，再套「加速器」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accelerator.q1', senseId: 'accelerator.s1', errorType: 'meaning', type: '词义选择', prompt: '「accelerator」在本条的核心意思是：', options: ['加速器', '完全相反的意思', '与本词无关的语法术语'], answer: '加速器', explain: 'accelerator：加速器。' },
      { id: 'accelerator.q2', senseId: 'accelerator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accelerator?', options: ['加速器', 'a kind of ancient coin', 'the past tense of be'], answer: '加速器', explain: '对的是「加速器」。' },
      { id: 'accelerator.q3', senseId: 'accelerator.s1', errorType: 'grammar', type: '词义选择', prompt: 'accelerator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accelerator.q4', senseId: 'accelerator.s1', errorType: 'meaning', type: '词源', prompt: '记 accelerator 时，下面哪句更稳妥？', options: ['先锁住「加速器」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「加速器」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加速器'] },
  });

  D('accent', {
    etymology: {
      origin: '拉丁语 accentus「加上去的调子」，cantus「歌唱」。',
      prefix: null,
      root: { text: 'accent', gloss: '口音' },
      suffix: null,
      history: [
        { label: 'accent', text: '拉丁语 accentus「加上去的调子」，cantus「歌唱」。' },
        { label: '现在', text: '核心用法是：口音。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：口音。',
      mnemonic: '看到 accent，先说出「口音」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：口音。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accent.', chinese: '这一章反复回到同一个点：口音。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accent.s1', en: 'Without that accent, the story would be hard to follow.', zh: '没有这个口音，故事会很难读下去。', structure: 'accent / 在句中表示 / 口音', grammar: 'noun 用法，围绕「口音」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accent.', right: 'He gave me a lot of advice about the accent.', reason: 'advice 不可数。名词 accent 的单复数也要按词典词形来，不要自造。', rule: '先确定 accent 是noun，再套「口音」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accent.q1', senseId: 'accent.s1', errorType: 'meaning', type: '词义选择', prompt: '「accent」在本条的核心意思是：', options: ['口音', '完全相反的意思', '与本词无关的语法术语'], answer: '口音', explain: 'accent：口音。' },
      { id: 'accent.q2', senseId: 'accent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accent?', options: ['口音', 'a kind of ancient coin', 'the past tense of be'], answer: '口音', explain: '对的是「口音」。' },
      { id: 'accent.q3', senseId: 'accent.s1', errorType: 'grammar', type: '词义选择', prompt: 'accent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accent.q4', senseId: 'accent.s1', errorType: 'meaning', type: '词源', prompt: '记 accent 时，下面哪句更稳妥？', options: ['先锁住「口音」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「口音」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['口音'] },
  });

  D('acceptable', {
    etymology: {
      origin: '英语派生：accept 加上词尾，构成与「可接受的」相应的词类。',
      prefix: null,
      root: { text: 'accept', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acceptable', text: '英语派生：accept 加上词尾，构成与「可接受的」相应的词类。' },
        { label: '现在', text: '核心用法是：可接受的。' },
      ],
      formationLogic: '先认词干 accept，再看词尾决定词性。',
      mnemonic: '看到 acceptable，先说出「可接受的」，再放进一句自己的话。',
      note: '先认词干 accept，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acceptable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得可接受的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acceptable.s1', en: 'They needed a acceptable answer, not a long speech.', zh: '他们要的是可接受的的答复，不是长篇发言。', structure: 'acceptable / 在句中表示 / 可接受的', grammar: 'adjective 用法，围绕「可接受的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acceptable.', right: 'The news is acceptable.', reason: 'news 作主语时动词用单数。形容词 acceptable 放在系动词后面。', rule: '先确定 acceptable 是adjective，再套「可接受的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acceptable.q1', senseId: 'acceptable.s1', errorType: 'meaning', type: '词义选择', prompt: '「acceptable」在本条的核心意思是：', options: ['可接受的', '完全相反的意思', '与本词无关的语法术语'], answer: '可接受的', explain: 'acceptable：可接受的。' },
      { id: 'acceptable.q2', senseId: 'acceptable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acceptable?', options: ['可接受的', 'a kind of ancient coin', 'the past tense of be'], answer: '可接受的', explain: '对的是「可接受的」。' },
      { id: 'acceptable.q3', senseId: 'acceptable.s1', errorType: 'grammar', type: '词义选择', prompt: 'acceptable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acceptable.q4', senseId: 'acceptable.s1', errorType: 'meaning', type: '词源', prompt: '记 acceptable 时，下面哪句更稳妥？', options: ['先锁住「可接受的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「可接受的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可接受的'] },
  });

  D('accepted', {
    etymology: {
      origin: '现代英语常用词「accepted」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accepted', gloss: '公认的' },
      suffix: null,
      history: [
        { label: 'accepted', text: '现代英语常用词「accepted」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：公认的。' },
      ],
      formationLogic: '核心义：公认的。',
      mnemonic: '看到 accepted，先说出「公认的」，再放进一句自己的话。',
      note: '核心义：公认的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accepted even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得公认的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accepted.s1', en: 'They needed a accepted answer, not a long speech.', zh: '他们要的是公认的的答复，不是长篇发言。', structure: 'accepted / 在句中表示 / 公认的', grammar: 'adjective 用法，围绕「公认的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accepted.', right: 'The news is accepted.', reason: 'news 作主语时动词用单数。形容词 accepted 放在系动词后面。', rule: '先确定 accepted 是adjective，再套「公认的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accepted.q1', senseId: 'accepted.s1', errorType: 'meaning', type: '词义选择', prompt: '「accepted」在本条的核心意思是：', options: ['公认的', '完全相反的意思', '与本词无关的语法术语'], answer: '公认的', explain: 'accepted：公认的。' },
      { id: 'accepted.q2', senseId: 'accepted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accepted?', options: ['公认的', 'a kind of ancient coin', 'the past tense of be'], answer: '公认的', explain: '对的是「公认的」。' },
      { id: 'accepted.q3', senseId: 'accepted.s1', errorType: 'grammar', type: '词义选择', prompt: 'accepted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accepted.q4', senseId: 'accepted.s1', errorType: 'meaning', type: '词源', prompt: '记 accepted 时，下面哪句更稳妥？', options: ['先锁住「公认的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「公认的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公认的'] },
  });

  D('accessible', {
    etymology: {
      origin: '英语派生：access 加上词尾，构成与「可进入的」相应的词类。',
      prefix: null,
      root: { text: 'access', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accessible', text: '英语派生：access 加上词尾，构成与「可进入的」相应的词类。' },
        { label: '现在', text: '核心用法是：可进入的。' },
      ],
      formationLogic: '先认词干 access，再看词尾决定词性。',
      mnemonic: '看到 accessible，先说出「可进入的」，再放进一句自己的话。',
      note: '先认词干 access，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accessible even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得可进入的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accessible.s1', en: 'They needed a accessible answer, not a long speech.', zh: '他们要的是可进入的的答复，不是长篇发言。', structure: 'accessible / 在句中表示 / 可进入的', grammar: 'adjective 用法，围绕「可进入的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accessible.', right: 'The news is accessible.', reason: 'news 作主语时动词用单数。形容词 accessible 放在系动词后面。', rule: '先确定 accessible 是adjective，再套「可进入的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accessible.q1', senseId: 'accessible.s1', errorType: 'meaning', type: '词义选择', prompt: '「accessible」在本条的核心意思是：', options: ['可进入的', '完全相反的意思', '与本词无关的语法术语'], answer: '可进入的', explain: 'accessible：可进入的。' },
      { id: 'accessible.q2', senseId: 'accessible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accessible?', options: ['可进入的', 'a kind of ancient coin', 'the past tense of be'], answer: '可进入的', explain: '对的是「可进入的」。' },
      { id: 'accessible.q3', senseId: 'accessible.s1', errorType: 'grammar', type: '词义选择', prompt: 'accessible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accessible.q4', senseId: 'accessible.s1', errorType: 'meaning', type: '词源', prompt: '记 accessible 时，下面哪句更稳妥？', options: ['先锁住「可进入的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「可进入的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可进入的'] },
  });

  D('accessory', {
    etymology: {
      origin: '现代英语常用词「accessory」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accessory', gloss: '配件' },
      suffix: null,
      history: [
        { label: 'accessory', text: '现代英语常用词「accessory」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：配件。' },
      ],
      formationLogic: '核心义：配件。',
      mnemonic: '看到 accessory，先说出「配件」，再放进一句自己的话。',
      note: '核心义：配件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accessory.', chinese: '这一章反复回到同一个点：配件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accessory.s1', en: 'Without that accessory, the story would be hard to follow.', zh: '没有这个配件，故事会很难读下去。', structure: 'accessory / 在句中表示 / 配件', grammar: 'noun 用法，围绕「配件」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accessory.', right: 'He gave me a lot of advice about the accessory.', reason: 'advice 不可数。名词 accessory 的单复数也要按词典词形来，不要自造。', rule: '先确定 accessory 是noun，再套「配件」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accessory.q1', senseId: 'accessory.s1', errorType: 'meaning', type: '词义选择', prompt: '「accessory」在本条的核心意思是：', options: ['配件', '完全相反的意思', '与本词无关的语法术语'], answer: '配件', explain: 'accessory：配件。' },
      { id: 'accessory.q2', senseId: 'accessory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accessory?', options: ['配件', 'a kind of ancient coin', 'the past tense of be'], answer: '配件', explain: '对的是「配件」。' },
      { id: 'accessory.q3', senseId: 'accessory.s1', errorType: 'grammar', type: '词义选择', prompt: 'accessory 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accessory.q4', senseId: 'accessory.s1', errorType: 'meaning', type: '词源', prompt: '记 accessory 时，下面哪句更稳妥？', options: ['先锁住「配件」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「配件」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['配件'] },
  });

  D('accidental', {
    etymology: {
      origin: '英语派生：accident 加上词尾，构成与「意外的」相应的词类。',
      prefix: null,
      root: { text: 'accident', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accidental', text: '英语派生：accident 加上词尾，构成与「意外的」相应的词类。' },
        { label: '现在', text: '核心用法是：意外的。' },
      ],
      formationLogic: '先认词干 accident，再看词尾决定词性。',
      mnemonic: '看到 accidental，先说出「意外的」，再放进一句自己的话。',
      note: '先认词干 accident，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accidental even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得意外的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accidental.s1', en: 'They needed a accidental answer, not a long speech.', zh: '他们要的是意外的的答复，不是长篇发言。', structure: 'accidental / 在句中表示 / 意外的', grammar: 'adjective 用法，围绕「意外的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accidental.', right: 'The news is accidental.', reason: 'news 作主语时动词用单数。形容词 accidental 放在系动词后面。', rule: '先确定 accidental 是adjective，再套「意外的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accidental.q1', senseId: 'accidental.s1', errorType: 'meaning', type: '词义选择', prompt: '「accidental」在本条的核心意思是：', options: ['意外的', '完全相反的意思', '与本词无关的语法术语'], answer: '意外的', explain: 'accidental：意外的。' },
      { id: 'accidental.q2', senseId: 'accidental.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accidental?', options: ['意外的', 'a kind of ancient coin', 'the past tense of be'], answer: '意外的', explain: '对的是「意外的」。' },
      { id: 'accidental.q3', senseId: 'accidental.s1', errorType: 'grammar', type: '词义选择', prompt: 'accidental 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accidental.q4', senseId: 'accidental.s1', errorType: 'meaning', type: '词源', prompt: '记 accidental 时，下面哪句更稳妥？', options: ['先锁住「意外的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「意外的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['意外的'] },
  });

  D('accidentally', {
    etymology: {
      origin: '英语派生：accidental 加上词尾，构成与「意外地」相应的词类。',
      prefix: null,
      root: { text: 'accidental', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accidentally', text: '英语派生：accidental 加上词尾，构成与「意外地」相应的词类。' },
        { label: '现在', text: '核心用法是：意外地。' },
      ],
      formationLogic: '先认词干 accidental，再看词尾决定词性。',
      mnemonic: '看到 accidentally，先说出「意外地」，再放进一句自己的话。',
      note: '先认词干 accidental，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule accidentally, and the class finally followed it.', chinese: '她把规则讲得让人明白（意外地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accidentally.s1', en: 'He nodded accidentally and went back to his notes.', zh: '他意外地地点了点头，又回去看笔记。', structure: 'accidentally / 在句中表示 / 意外地', grammar: 'adverb 用法，围绕「意外地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very accidentallyly.', right: 'She spoke accidentally.', reason: 'accidentally 已经是副词，不要再加 -ly。', rule: '先确定 accidentally 是adverb，再套「意外地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accidentally.q1', senseId: 'accidentally.s1', errorType: 'meaning', type: '词义选择', prompt: '「accidentally」在本条的核心意思是：', options: ['意外地', '完全相反的意思', '与本词无关的语法术语'], answer: '意外地', explain: 'accidentally：意外地。' },
      { id: 'accidentally.q2', senseId: 'accidentally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accidentally?', options: ['意外地', 'a kind of ancient coin', 'the past tense of be'], answer: '意外地', explain: '对的是「意外地」。' },
      { id: 'accidentally.q3', senseId: 'accidentally.s1', errorType: 'grammar', type: '词义选择', prompt: 'accidentally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'accidentally.q4', senseId: 'accidentally.s1', errorType: 'meaning', type: '词源', prompt: '记 accidentally 时，下面哪句更稳妥？', options: ['先锁住「意外地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「意外地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['意外地'] },
  });

  D('acclaim', {
    etymology: {
      origin: '拉丁语 acclamare「向着呼喊」，clamare「喊」。',
      prefix: null,
      root: { text: 'acclaim', gloss: '称赞' },
      suffix: null,
      history: [
        { label: 'acclaim', text: '拉丁语 acclamare「向着呼喊」，clamare「喊」。' },
        { label: '现在', text: '核心用法是：称赞。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：称赞。',
      mnemonic: '看到 acclaim，先说出「称赞」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：称赞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to acclaim before the office closed.', chinese: '小组得在办公室关门前完成这件事：称赞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acclaim.s1', en: 'Nobody wanted to acclaim, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 acclaim 是「称赞」。', structure: 'acclaim / 在句中表示 / 称赞', grammar: 'verb 用法，围绕「称赞」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She acclaimed the form yesterday without checking the real past form.', right: 'Look up the past form of "acclaim" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 acclaim 是verb，再套「称赞」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acclaim.q1', senseId: 'acclaim.s1', errorType: 'meaning', type: '词义选择', prompt: '「acclaim」在本条的核心意思是：', options: ['称赞', '完全相反的意思', '与本词无关的语法术语'], answer: '称赞', explain: 'acclaim：称赞。' },
      { id: 'acclaim.q2', senseId: 'acclaim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acclaim?', options: ['称赞', 'a kind of ancient coin', 'the past tense of be'], answer: '称赞', explain: '对的是「称赞」。' },
      { id: 'acclaim.q3', senseId: 'acclaim.s1', errorType: 'grammar', type: '词义选择', prompt: 'acclaim 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'acclaim.q4', senseId: 'acclaim.s1', errorType: 'meaning', type: '词源', prompt: '记 acclaim 时，下面哪句更稳妥？', options: ['先锁住「称赞」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「称赞」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['称赞'] },
  });

  D('acclaimed', {
    etymology: {
      origin: '现代英语常用词「acclaimed」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'acclaimed', gloss: '受赞誉的' },
      suffix: null,
      history: [
        { label: 'acclaimed', text: '现代英语常用词「acclaimed」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：受赞誉的。' },
      ],
      formationLogic: '核心义：受赞誉的。',
      mnemonic: '看到 acclaimed，先说出「受赞誉的」，再放进一句自己的话。',
      note: '核心义：受赞誉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acclaimed even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得受赞誉的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acclaimed.s1', en: 'They needed a acclaimed answer, not a long speech.', zh: '他们要的是受赞誉的的答复，不是长篇发言。', structure: 'acclaimed / 在句中表示 / 受赞誉的', grammar: 'adjective 用法，围绕「受赞誉的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acclaimed.', right: 'The news is acclaimed.', reason: 'news 作主语时动词用单数。形容词 acclaimed 放在系动词后面。', rule: '先确定 acclaimed 是adjective，再套「受赞誉的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acclaimed.q1', senseId: 'acclaimed.s1', errorType: 'meaning', type: '词义选择', prompt: '「acclaimed」在本条的核心意思是：', options: ['受赞誉的', '完全相反的意思', '与本词无关的语法术语'], answer: '受赞誉的', explain: 'acclaimed：受赞誉的。' },
      { id: 'acclaimed.q2', senseId: 'acclaimed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acclaimed?', options: ['受赞誉的', 'a kind of ancient coin', 'the past tense of be'], answer: '受赞誉的', explain: '对的是「受赞誉的」。' },
      { id: 'acclaimed.q3', senseId: 'acclaimed.s1', errorType: 'grammar', type: '词义选择', prompt: 'acclaimed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acclaimed.q4', senseId: 'acclaimed.s1', errorType: 'meaning', type: '词源', prompt: '记 acclaimed 时，下面哪句更稳妥？', options: ['先锁住「受赞誉的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「受赞誉的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['受赞誉的'] },
  });

  D('acclimatization', {
    etymology: {
      origin: '英语派生：acclimat 加上词尾，构成与「适应（气候）」相应的词类。',
      prefix: null,
      root: { text: 'acclimat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acclimatization', text: '英语派生：acclimat 加上词尾，构成与「适应（气候）」相应的词类。' },
        { label: '现在', text: '核心用法是：适应（气候）。' },
      ],
      formationLogic: '先认词干 acclimat，再看词尾决定词性。',
      mnemonic: '看到 acclimatization，先说出「适应（气候）」，再放进一句自己的话。',
      note: '先认词干 acclimat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acclimatization.', chinese: '这一章反复回到同一个点：适应（气候）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acclimatization.s1', en: 'Without that acclimatization, the story would be hard to follow.', zh: '没有这个适应（气候），故事会很难读下去。', structure: 'acclimatization / 在句中表示 / 适应（气候）', grammar: 'noun 用法，围绕「适应（气候）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acclimatization.', right: 'He gave me a lot of advice about the acclimatization.', reason: 'advice 不可数。名词 acclimatization 的单复数也要按词典词形来，不要自造。', rule: '先确定 acclimatization 是noun，再套「适应（气候）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acclimatization.q1', senseId: 'acclimatization.s1', errorType: 'meaning', type: '词义选择', prompt: '「acclimatization」在本条的核心意思是：', options: ['适应（气候）', '完全相反的意思', '与本词无关的语法术语'], answer: '适应（气候）', explain: 'acclimatization：适应（气候）。' },
      { id: 'acclimatization.q2', senseId: 'acclimatization.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acclimatization?', options: ['适应（气候）', 'a kind of ancient coin', 'the past tense of be'], answer: '适应（气候）', explain: '对的是「适应（气候）」。' },
      { id: 'acclimatization.q3', senseId: 'acclimatization.s1', errorType: 'grammar', type: '词义选择', prompt: 'acclimatization 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acclimatization.q4', senseId: 'acclimatization.s1', errorType: 'meaning', type: '词源', prompt: '记 acclimatization 时，下面哪句更稳妥？', options: ['先锁住「适应（气候）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「适应（气候）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['适应（气候）'] },
  });

  D('accommodation', {
    etymology: {
      origin: '英语派生：accommoda 加上词尾，构成与「住处」相应的词类。',
      prefix: null,
      root: { text: 'accommoda', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accommodation', text: '英语派生：accommoda 加上词尾，构成与「住处」相应的词类。' },
        { label: '现在', text: '核心用法是：住处。' },
      ],
      formationLogic: '先认词干 accommoda，再看词尾决定词性。',
      mnemonic: '看到 accommodation，先说出「住处」，再放进一句自己的话。',
      note: '先认词干 accommoda，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accommodation.', chinese: '这一章反复回到同一个点：住处。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accommodation.s1', en: 'Without that accommodation, the story would be hard to follow.', zh: '没有这个住处，故事会很难读下去。', structure: 'accommodation / 在句中表示 / 住处', grammar: 'noun 用法，围绕「住处」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accommodation.', right: 'He gave me a lot of advice about the accommodation.', reason: 'advice 不可数。名词 accommodation 的单复数也要按词典词形来，不要自造。', rule: '先确定 accommodation 是noun，再套「住处」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accommodation.q1', senseId: 'accommodation.s1', errorType: 'meaning', type: '词义选择', prompt: '「accommodation」在本条的核心意思是：', options: ['住处', '完全相反的意思', '与本词无关的语法术语'], answer: '住处', explain: 'accommodation：住处。' },
      { id: 'accommodation.q2', senseId: 'accommodation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accommodation?', options: ['住处', 'a kind of ancient coin', 'the past tense of be'], answer: '住处', explain: '对的是「住处」。' },
      { id: 'accommodation.q3', senseId: 'accommodation.s1', errorType: 'grammar', type: '词义选择', prompt: 'accommodation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accommodation.q4', senseId: 'accommodation.s1', errorType: 'meaning', type: '词源', prompt: '记 accommodation 时，下面哪句更稳妥？', options: ['先锁住「住处」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「住处」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['住处'] },
  });

  D('accompaniment', {
    etymology: {
      origin: '英语派生：accompani 加上词尾，构成与「伴奏」相应的词类。',
      prefix: null,
      root: { text: 'accompani', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accompaniment', text: '英语派生：accompani 加上词尾，构成与「伴奏」相应的词类。' },
        { label: '现在', text: '核心用法是：伴奏。' },
      ],
      formationLogic: '先认词干 accompani，再看词尾决定词性。',
      mnemonic: '看到 accompaniment，先说出「伴奏」，再放进一句自己的话。',
      note: '先认词干 accompani，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accompaniment.', chinese: '这一章反复回到同一个点：伴奏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accompaniment.s1', en: 'Without that accompaniment, the story would be hard to follow.', zh: '没有这个伴奏，故事会很难读下去。', structure: 'accompaniment / 在句中表示 / 伴奏', grammar: 'noun 用法，围绕「伴奏」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accompaniment.', right: 'He gave me a lot of advice about the accompaniment.', reason: 'advice 不可数。名词 accompaniment 的单复数也要按词典词形来，不要自造。', rule: '先确定 accompaniment 是noun，再套「伴奏」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accompaniment.q1', senseId: 'accompaniment.s1', errorType: 'meaning', type: '词义选择', prompt: '「accompaniment」在本条的核心意思是：', options: ['伴奏', '完全相反的意思', '与本词无关的语法术语'], answer: '伴奏', explain: 'accompaniment：伴奏。' },
      { id: 'accompaniment.q2', senseId: 'accompaniment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accompaniment?', options: ['伴奏', 'a kind of ancient coin', 'the past tense of be'], answer: '伴奏', explain: '对的是「伴奏」。' },
      { id: 'accompaniment.q3', senseId: 'accompaniment.s1', errorType: 'grammar', type: '词义选择', prompt: 'accompaniment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accompaniment.q4', senseId: 'accompaniment.s1', errorType: 'meaning', type: '词源', prompt: '记 accompaniment 时，下面哪句更稳妥？', options: ['先锁住「伴奏」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「伴奏」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伴奏'] },
  });

  D('accompany', {
    etymology: {
      origin: '古法语 acompaignier「成为同伴」，compain「同伴」。',
      prefix: null,
      root: { text: 'accompany', gloss: '陪伴' },
      suffix: null,
      history: [
        { label: 'accompany', text: '古法语 acompaignier「成为同伴」，compain「同伴」。' },
        { label: '现在', text: '核心用法是：陪伴。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：陪伴。',
      mnemonic: '看到 accompany，先说出「陪伴」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：陪伴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to accompany before the office closed.', chinese: '小组得在办公室关门前完成这件事：陪伴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accompany.s1', en: 'Nobody wanted to accompany, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 accompany 是「陪伴」。', structure: 'accompany / 在句中表示 / 陪伴', grammar: 'verb 用法，围绕「陪伴」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She accompanyed the form yesterday without checking the real past form.', right: 'Look up the past form of "accompany" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 accompany 是verb，再套「陪伴」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accompany.q1', senseId: 'accompany.s1', errorType: 'meaning', type: '词义选择', prompt: '「accompany」在本条的核心意思是：', options: ['陪伴', '完全相反的意思', '与本词无关的语法术语'], answer: '陪伴', explain: 'accompany：陪伴。' },
      { id: 'accompany.q2', senseId: 'accompany.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accompany?', options: ['陪伴', 'a kind of ancient coin', 'the past tense of be'], answer: '陪伴', explain: '对的是「陪伴」。' },
      { id: 'accompany.q3', senseId: 'accompany.s1', errorType: 'grammar', type: '词义选择', prompt: 'accompany 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'accompany.q4', senseId: 'accompany.s1', errorType: 'meaning', type: '词源', prompt: '记 accompany 时，下面哪句更稳妥？', options: ['先锁住「陪伴」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「陪伴」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陪伴'] },
  });

  D('accomplish', {
    etymology: {
      origin: '拉丁语 complere「装满、完成」，前缀 ad-。',
      prefix: null,
      root: { text: 'accomplish', gloss: '完成' },
      suffix: null,
      history: [
        { label: 'accomplish', text: '拉丁语 complere「装满、完成」，前缀 ad-。' },
        { label: '现在', text: '核心用法是：完成。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：完成。',
      mnemonic: '看到 accomplish，先说出「完成」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：完成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to accomplish before the office closed.', chinese: '小组得在办公室关门前完成这件事：完成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accomplish.s1', en: 'Nobody wanted to accomplish, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 accomplish 是「完成」。', structure: 'accomplish / 在句中表示 / 完成', grammar: 'verb 用法，围绕「完成」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She accomplished the form yesterday without checking the real past form.', right: 'Look up the past form of "accomplish" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 accomplish 是verb，再套「完成」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accomplish.q1', senseId: 'accomplish.s1', errorType: 'meaning', type: '词义选择', prompt: '「accomplish」在本条的核心意思是：', options: ['完成', '完全相反的意思', '与本词无关的语法术语'], answer: '完成', explain: 'accomplish：完成。' },
      { id: 'accomplish.q2', senseId: 'accomplish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accomplish?', options: ['完成', 'a kind of ancient coin', 'the past tense of be'], answer: '完成', explain: '对的是「完成」。' },
      { id: 'accomplish.q3', senseId: 'accomplish.s1', errorType: 'grammar', type: '词义选择', prompt: 'accomplish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'accomplish.q4', senseId: 'accomplish.s1', errorType: 'meaning', type: '词源', prompt: '记 accomplish 时，下面哪句更稳妥？', options: ['先锁住「完成」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「完成」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完成'] },
  });

  D('accomplished', {
    etymology: {
      origin: '现代英语常用词「accomplished」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accomplished', gloss: '熟练的' },
      suffix: null,
      history: [
        { label: 'accomplished', text: '现代英语常用词「accomplished」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：熟练的。' },
      ],
      formationLogic: '核心义：熟练的。',
      mnemonic: '看到 accomplished，先说出「熟练的」，再放进一句自己的话。',
      note: '核心义：熟练的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accomplished even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得熟练的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accomplished.s1', en: 'They needed a accomplished answer, not a long speech.', zh: '他们要的是熟练的的答复，不是长篇发言。', structure: 'accomplished / 在句中表示 / 熟练的', grammar: 'adjective 用法，围绕「熟练的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accomplished.', right: 'The news is accomplished.', reason: 'news 作主语时动词用单数。形容词 accomplished 放在系动词后面。', rule: '先确定 accomplished 是adjective，再套「熟练的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accomplished.q1', senseId: 'accomplished.s1', errorType: 'meaning', type: '词义选择', prompt: '「accomplished」在本条的核心意思是：', options: ['熟练的', '完全相反的意思', '与本词无关的语法术语'], answer: '熟练的', explain: 'accomplished：熟练的。' },
      { id: 'accomplished.q2', senseId: 'accomplished.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accomplished?', options: ['熟练的', 'a kind of ancient coin', 'the past tense of be'], answer: '熟练的', explain: '对的是「熟练的」。' },
      { id: 'accomplished.q3', senseId: 'accomplished.s1', errorType: 'grammar', type: '词义选择', prompt: 'accomplished 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accomplished.q4', senseId: 'accomplished.s1', errorType: 'meaning', type: '词源', prompt: '记 accomplished 时，下面哪句更稳妥？', options: ['先锁住「熟练的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「熟练的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熟练的'] },
  });

  D('accomplishment', {
    etymology: {
      origin: '英语派生：accomplish 加上词尾，构成与「成就」相应的词类。',
      prefix: null,
      root: { text: 'accomplish', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accomplishment', text: '英语派生：accomplish 加上词尾，构成与「成就」相应的词类。' },
        { label: '现在', text: '核心用法是：成就。' },
      ],
      formationLogic: '先认词干 accomplish，再看词尾决定词性。',
      mnemonic: '看到 accomplishment，先说出「成就」，再放进一句自己的话。',
      note: '先认词干 accomplish，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accomplishment.', chinese: '这一章反复回到同一个点：成就。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accomplishment.s1', en: 'Without that accomplishment, the story would be hard to follow.', zh: '没有这个成就，故事会很难读下去。', structure: 'accomplishment / 在句中表示 / 成就', grammar: 'noun 用法，围绕「成就」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accomplishment.', right: 'He gave me a lot of advice about the accomplishment.', reason: 'advice 不可数。名词 accomplishment 的单复数也要按词典词形来，不要自造。', rule: '先确定 accomplishment 是noun，再套「成就」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accomplishment.q1', senseId: 'accomplishment.s1', errorType: 'meaning', type: '词义选择', prompt: '「accomplishment」在本条的核心意思是：', options: ['成就', '完全相反的意思', '与本词无关的语法术语'], answer: '成就', explain: 'accomplishment：成就。' },
      { id: 'accomplishment.q2', senseId: 'accomplishment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accomplishment?', options: ['成就', 'a kind of ancient coin', 'the past tense of be'], answer: '成就', explain: '对的是「成就」。' },
      { id: 'accomplishment.q3', senseId: 'accomplishment.s1', errorType: 'grammar', type: '词义选择', prompt: 'accomplishment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accomplishment.q4', senseId: 'accomplishment.s1', errorType: 'meaning', type: '词源', prompt: '记 accomplishment 时，下面哪句更稳妥？', options: ['先锁住「成就」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「成就」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['成就'] },
  });

  D('accord', {
    etymology: {
      origin: '拉丁语 ad + cor「心」。心在一处就是一致。',
      prefix: null,
      root: { text: 'accord', gloss: '一致' },
      suffix: null,
      history: [
        { label: 'accord', text: '拉丁语 ad + cor「心」。心在一处就是一致。' },
        { label: '现在', text: '核心用法是：一致。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：一致。',
      mnemonic: '看到 accord，先说出「一致」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：一致。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accord.', chinese: '这一章反复回到同一个点：一致。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accord.s1', en: 'Without that accord, the story would be hard to follow.', zh: '没有这个一致，故事会很难读下去。', structure: 'accord / 在句中表示 / 一致', grammar: 'noun 用法，围绕「一致」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accord.', right: 'He gave me a lot of advice about the accord.', reason: 'advice 不可数。名词 accord 的单复数也要按词典词形来，不要自造。', rule: '先确定 accord 是noun，再套「一致」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accord.q1', senseId: 'accord.s1', errorType: 'meaning', type: '词义选择', prompt: '「accord」在本条的核心意思是：', options: ['一致', '完全相反的意思', '与本词无关的语法术语'], answer: '一致', explain: 'accord：一致。' },
      { id: 'accord.q2', senseId: 'accord.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accord?', options: ['一致', 'a kind of ancient coin', 'the past tense of be'], answer: '一致', explain: '对的是「一致」。' },
      { id: 'accord.q3', senseId: 'accord.s1', errorType: 'grammar', type: '词义选择', prompt: 'accord 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accord.q4', senseId: 'accord.s1', errorType: 'meaning', type: '词源', prompt: '记 accord 时，下面哪句更稳妥？', options: ['先锁住「一致」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「一致」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一致'] },
  });

  D('accordance', {
    etymology: {
      origin: '英语派生：accord 加上词尾，构成与「依照」相应的词类。',
      prefix: null,
      root: { text: 'accord', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accordance', text: '英语派生：accord 加上词尾，构成与「依照」相应的词类。' },
        { label: '现在', text: '核心用法是：依照。' },
      ],
      formationLogic: '先认词干 accord，再看词尾决定词性。',
      mnemonic: '看到 accordance，先说出「依照」，再放进一句自己的话。',
      note: '先认词干 accord，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accordance.', chinese: '这一章反复回到同一个点：依照。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accordance.s1', en: 'Without that accordance, the story would be hard to follow.', zh: '没有这个依照，故事会很难读下去。', structure: 'accordance / 在句中表示 / 依照', grammar: 'noun 用法，围绕「依照」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accordance.', right: 'He gave me a lot of advice about the accordance.', reason: 'advice 不可数。名词 accordance 的单复数也要按词典词形来，不要自造。', rule: '先确定 accordance 是noun，再套「依照」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accordance.q1', senseId: 'accordance.s1', errorType: 'meaning', type: '词义选择', prompt: '「accordance」在本条的核心意思是：', options: ['依照', '完全相反的意思', '与本词无关的语法术语'], answer: '依照', explain: 'accordance：依照。' },
      { id: 'accordance.q2', senseId: 'accordance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accordance?', options: ['依照', 'a kind of ancient coin', 'the past tense of be'], answer: '依照', explain: '对的是「依照」。' },
      { id: 'accordance.q3', senseId: 'accordance.s1', errorType: 'grammar', type: '词义选择', prompt: 'accordance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accordance.q4', senseId: 'accordance.s1', errorType: 'meaning', type: '词源', prompt: '记 accordance 时，下面哪句更稳妥？', options: ['先锁住「依照」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「依照」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['依照'] },
  });

  D('according to', {
    etymology: {
      origin: '现代英语固定说法「according to」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'according to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'according to', text: '现代英语固定说法「according to」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：据……所说。' },
      ],
      formationLogic: '常见义：据……所说。',
      mnemonic: '看到 according to，先说出「据……所说」，再放进一句自己的话。',
      note: '常见义：据……所说。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "according to" and asked what it does in the sentence.', chinese: '老师在「according to」下面划了线，问它在句中起什么作用。它表示据……所说。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'according to.s1', en: 'In the margin she wrote "according to" so the reader would not miss that phrase.', zh: '她在页边写下「according to」，免得读者漏掉这个说法。意思是据……所说。', structure: 'according to / 在句中表示 / 据……所说', grammar: 'preposition 用法，围绕「据……所说」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated according to word by word and lost the meaning.', right: 'He kept "according to" as one phrase meaning 据……所说.', reason: '「according to」是固定说法，拆开容易翻错。', rule: '先确定 according to 是preposition，再套「据……所说」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'according to.q1', senseId: 'according to.s1', errorType: 'meaning', type: '词义选择', prompt: '「according to」在本条的核心意思是：', options: ['据……所说', '完全相反的意思', '与本词无关的语法术语'], answer: '据……所说', explain: 'according to：据……所说。' },
      { id: 'according to.q2', senseId: 'according to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches according to?', options: ['据……所说', 'a kind of ancient coin', 'the past tense of be'], answer: '据……所说', explain: '对的是「据……所说」。' },
      { id: 'according to.q3', senseId: 'according to.s1', errorType: 'grammar', type: '词义选择', prompt: 'according to 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'according to.q4', senseId: 'according to.s1', errorType: 'meaning', type: '词源', prompt: '记 according to 时，下面哪句更稳妥？', options: ['先锁住「据……所说」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「据……所说」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['据……所说'] },
  });

  D('accordingly', {
    etymology: {
      origin: '英语派生：according 加上词尾，构成与「因此」相应的词类。',
      prefix: null,
      root: { text: 'according', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accordingly', text: '英语派生：according 加上词尾，构成与「因此」相应的词类。' },
        { label: '现在', text: '核心用法是：因此。' },
      ],
      formationLogic: '先认词干 according，再看词尾决定词性。',
      mnemonic: '看到 accordingly，先说出「因此」，再放进一句自己的话。',
      note: '先认词干 according，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule accordingly, and the class finally followed it.', chinese: '她把规则讲得让人明白（因此），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accordingly.s1', en: 'He nodded accordingly and went back to his notes.', zh: '他因此地点了点头，又回去看笔记。', structure: 'accordingly / 在句中表示 / 因此', grammar: 'adverb 用法，围绕「因此」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very accordinglyly.', right: 'She spoke accordingly.', reason: 'accordingly 已经是副词，不要再加 -ly。', rule: '先确定 accordingly 是adverb，再套「因此」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accordingly.q1', senseId: 'accordingly.s1', errorType: 'meaning', type: '词义选择', prompt: '「accordingly」在本条的核心意思是：', options: ['因此', '完全相反的意思', '与本词无关的语法术语'], answer: '因此', explain: 'accordingly：因此。' },
      { id: 'accordingly.q2', senseId: 'accordingly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accordingly?', options: ['因此', 'a kind of ancient coin', 'the past tense of be'], answer: '因此', explain: '对的是「因此」。' },
      { id: 'accordingly.q3', senseId: 'accordingly.s1', errorType: 'grammar', type: '词义选择', prompt: 'accordingly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'accordingly.q4', senseId: 'accordingly.s1', errorType: 'meaning', type: '词源', prompt: '记 accordingly 时，下面哪句更稳妥？', options: ['先锁住「因此」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「因此」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['因此'] },
  });

  D('account', {
    etymology: {
      origin: '古法语 aconter「计算」，computare 一系。',
      prefix: null,
      root: { text: 'account', gloss: '账户' },
      suffix: null,
      history: [
        { label: 'account', text: '古法语 aconter「计算」，computare 一系。' },
        { label: '现在', text: '核心用法是：账户。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：账户。',
      mnemonic: '看到 account，先说出「账户」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：账户。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one account.', chinese: '这一章反复回到同一个点：账户。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'account.s1', en: 'Without that account, the story would be hard to follow.', zh: '没有这个账户，故事会很难读下去。', structure: 'account / 在句中表示 / 账户', grammar: 'noun 用法，围绕「账户」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the account.', right: 'He gave me a lot of advice about the account.', reason: 'advice 不可数。名词 account 的单复数也要按词典词形来，不要自造。', rule: '先确定 account 是noun，再套「账户」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'account.q1', senseId: 'account.s1', errorType: 'meaning', type: '词义选择', prompt: '「account」在本条的核心意思是：', options: ['账户', '完全相反的意思', '与本词无关的语法术语'], answer: '账户', explain: 'account：账户。' },
      { id: 'account.q2', senseId: 'account.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches account?', options: ['账户', 'a kind of ancient coin', 'the past tense of be'], answer: '账户', explain: '对的是「账户」。' },
      { id: 'account.q3', senseId: 'account.s1', errorType: 'grammar', type: '词义选择', prompt: 'account 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'account.q4', senseId: 'account.s1', errorType: 'meaning', type: '词源', prompt: '记 account 时，下面哪句更稳妥？', options: ['先锁住「账户」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「账户」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['账户'] },
  });

  D('accountability', {
    etymology: {
      origin: '英语派生：account 加上词尾，构成与「问责」相应的词类。',
      prefix: null,
      root: { text: 'account', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accountability', text: '英语派生：account 加上词尾，构成与「问责」相应的词类。' },
        { label: '现在', text: '核心用法是：问责。' },
      ],
      formationLogic: '先认词干 account，再看词尾决定词性。',
      mnemonic: '看到 accountability，先说出「问责」，再放进一句自己的话。',
      note: '先认词干 account，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accountability.', chinese: '这一章反复回到同一个点：问责。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accountability.s1', en: 'Without that accountability, the story would be hard to follow.', zh: '没有这个问责，故事会很难读下去。', structure: 'accountability / 在句中表示 / 问责', grammar: 'noun 用法，围绕「问责」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accountability.', right: 'He gave me a lot of advice about the accountability.', reason: 'advice 不可数。名词 accountability 的单复数也要按词典词形来，不要自造。', rule: '先确定 accountability 是noun，再套「问责」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accountability.q1', senseId: 'accountability.s1', errorType: 'meaning', type: '词义选择', prompt: '「accountability」在本条的核心意思是：', options: ['问责', '完全相反的意思', '与本词无关的语法术语'], answer: '问责', explain: 'accountability：问责。' },
      { id: 'accountability.q2', senseId: 'accountability.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accountability?', options: ['问责', 'a kind of ancient coin', 'the past tense of be'], answer: '问责', explain: '对的是「问责」。' },
      { id: 'accountability.q3', senseId: 'accountability.s1', errorType: 'grammar', type: '词义选择', prompt: 'accountability 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accountability.q4', senseId: 'accountability.s1', errorType: 'meaning', type: '词源', prompt: '记 accountability 时，下面哪句更稳妥？', options: ['先锁住「问责」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「问责」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['问责'] },
  });

  D('accountable', {
    etymology: {
      origin: '英语派生：account 加上词尾，构成与「负有责任的」相应的词类。',
      prefix: null,
      root: { text: 'account', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accountable', text: '英语派生：account 加上词尾，构成与「负有责任的」相应的词类。' },
        { label: '现在', text: '核心用法是：负有责任的。' },
      ],
      formationLogic: '先认词干 account，再看词尾决定词性。',
      mnemonic: '看到 accountable，先说出「负有责任的」，再放进一句自己的话。',
      note: '先认词干 account，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accountable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得负有责任的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accountable.s1', en: 'They needed a accountable answer, not a long speech.', zh: '他们要的是负有责任的的答复，不是长篇发言。', structure: 'accountable / 在句中表示 / 负有责任的', grammar: 'adjective 用法，围绕「负有责任的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accountable.', right: 'The news is accountable.', reason: 'news 作主语时动词用单数。形容词 accountable 放在系动词后面。', rule: '先确定 accountable 是adjective，再套「负有责任的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accountable.q1', senseId: 'accountable.s1', errorType: 'meaning', type: '词义选择', prompt: '「accountable」在本条的核心意思是：', options: ['负有责任的', '完全相反的意思', '与本词无关的语法术语'], answer: '负有责任的', explain: 'accountable：负有责任的。' },
      { id: 'accountable.q2', senseId: 'accountable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accountable?', options: ['负有责任的', 'a kind of ancient coin', 'the past tense of be'], answer: '负有责任的', explain: '对的是「负有责任的」。' },
      { id: 'accountable.q3', senseId: 'accountable.s1', errorType: 'grammar', type: '词义选择', prompt: 'accountable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accountable.q4', senseId: 'accountable.s1', errorType: 'meaning', type: '词源', prompt: '记 accountable 时，下面哪句更稳妥？', options: ['先锁住「负有责任的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「负有责任的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['负有责任的'] },
  });

  D('accountant', {
    etymology: {
      origin: '现代英语常用词「accountant」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accountant', gloss: '会计' },
      suffix: null,
      history: [
        { label: 'accountant', text: '现代英语常用词「accountant」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：会计。' },
      ],
      formationLogic: '核心义：会计。',
      mnemonic: '看到 accountant，先说出「会计」，再放进一句自己的话。',
      note: '核心义：会计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accountant.', chinese: '这一章反复回到同一个点：会计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accountant.s1', en: 'Without that accountant, the story would be hard to follow.', zh: '没有这个会计，故事会很难读下去。', structure: 'accountant / 在句中表示 / 会计', grammar: 'noun 用法，围绕「会计」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accountant.', right: 'He gave me a lot of advice about the accountant.', reason: 'advice 不可数。名词 accountant 的单复数也要按词典词形来，不要自造。', rule: '先确定 accountant 是noun，再套「会计」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accountant.q1', senseId: 'accountant.s1', errorType: 'meaning', type: '词义选择', prompt: '「accountant」在本条的核心意思是：', options: ['会计', '完全相反的意思', '与本词无关的语法术语'], answer: '会计', explain: 'accountant：会计。' },
      { id: 'accountant.q2', senseId: 'accountant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accountant?', options: ['会计', 'a kind of ancient coin', 'the past tense of be'], answer: '会计', explain: '对的是「会计」。' },
      { id: 'accountant.q3', senseId: 'accountant.s1', errorType: 'grammar', type: '词义选择', prompt: 'accountant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accountant.q4', senseId: 'accountant.s1', errorType: 'meaning', type: '词源', prompt: '记 accountant 时，下面哪句更稳妥？', options: ['先锁住「会计」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「会计」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['会计'] },
  });

  D('accounting', {
    etymology: {
      origin: '现代英语常用词「accounting」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accounting', gloss: '会计' },
      suffix: null,
      history: [
        { label: 'accounting', text: '现代英语常用词「accounting」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：会计。' },
      ],
      formationLogic: '核心义：会计。',
      mnemonic: '看到 accounting，先说出「会计」，再放进一句自己的话。',
      note: '核心义：会计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accounting.', chinese: '这一章反复回到同一个点：会计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accounting.s1', en: 'Without that accounting, the story would be hard to follow.', zh: '没有这个会计，故事会很难读下去。', structure: 'accounting / 在句中表示 / 会计', grammar: 'noun 用法，围绕「会计」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accounting.', right: 'He gave me a lot of advice about the accounting.', reason: 'advice 不可数。名词 accounting 的单复数也要按词典词形来，不要自造。', rule: '先确定 accounting 是noun，再套「会计」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accounting.q1', senseId: 'accounting.s1', errorType: 'meaning', type: '词义选择', prompt: '「accounting」在本条的核心意思是：', options: ['会计', '完全相反的意思', '与本词无关的语法术语'], answer: '会计', explain: 'accounting：会计。' },
      { id: 'accounting.q2', senseId: 'accounting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accounting?', options: ['会计', 'a kind of ancient coin', 'the past tense of be'], answer: '会计', explain: '对的是「会计」。' },
      { id: 'accounting.q3', senseId: 'accounting.s1', errorType: 'grammar', type: '词义选择', prompt: 'accounting 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accounting.q4', senseId: 'accounting.s1', errorType: 'meaning', type: '词源', prompt: '记 accounting 时，下面哪句更稳妥？', options: ['先锁住「会计」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「会计」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['会计'] },
  });

  D('accredit', {
    etymology: {
      origin: '现代英语常用词「accredit」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accredit', gloss: '认可' },
      suffix: null,
      history: [
        { label: 'accredit', text: '现代英语常用词「accredit」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：认可。' },
      ],
      formationLogic: '核心义：认可。',
      mnemonic: '看到 accredit，先说出「认可」，再放进一句自己的话。',
      note: '核心义：认可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to accredit before the office closed.', chinese: '小组得在办公室关门前完成这件事：认可。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accredit.s1', en: 'Nobody wanted to accredit, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 accredit 是「认可」。', structure: 'accredit / 在句中表示 / 认可', grammar: 'verb 用法，围绕「认可」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She accredited the form yesterday without checking the real past form.', right: 'Look up the past form of "accredit" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 accredit 是verb，再套「认可」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accredit.q1', senseId: 'accredit.s1', errorType: 'meaning', type: '词义选择', prompt: '「accredit」在本条的核心意思是：', options: ['认可', '完全相反的意思', '与本词无关的语法术语'], answer: '认可', explain: 'accredit：认可。' },
      { id: 'accredit.q2', senseId: 'accredit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accredit?', options: ['认可', 'a kind of ancient coin', 'the past tense of be'], answer: '认可', explain: '对的是「认可」。' },
      { id: 'accredit.q3', senseId: 'accredit.s1', errorType: 'grammar', type: '词义选择', prompt: 'accredit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'accredit.q4', senseId: 'accredit.s1', errorType: 'meaning', type: '词源', prompt: '记 accredit 时，下面哪句更稳妥？', options: ['先锁住「认可」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「认可」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['认可'] },
  });

  D('accumulate', {
    etymology: {
      origin: '拉丁语 accumulare「堆成堆」，cumulus「堆」。',
      prefix: null,
      root: { text: 'accumulate', gloss: '积累' },
      suffix: null,
      history: [
        { label: 'accumulate', text: '拉丁语 accumulare「堆成堆」，cumulus「堆」。' },
        { label: '现在', text: '核心用法是：积累。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：积累。',
      mnemonic: '看到 accumulate，先说出「积累」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：积累。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to accumulate before the office closed.', chinese: '小组得在办公室关门前完成这件事：积累。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accumulate.s1', en: 'Nobody wanted to accumulate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 accumulate 是「积累」。', structure: 'accumulate / 在句中表示 / 积累', grammar: 'verb 用法，围绕「积累」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She accumulateed the form yesterday without checking the real past form.', right: 'Look up the past form of "accumulate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 accumulate 是verb，再套「积累」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accumulate.q1', senseId: 'accumulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「accumulate」在本条的核心意思是：', options: ['积累', '完全相反的意思', '与本词无关的语法术语'], answer: '积累', explain: 'accumulate：积累。' },
      { id: 'accumulate.q2', senseId: 'accumulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accumulate?', options: ['积累', 'a kind of ancient coin', 'the past tense of be'], answer: '积累', explain: '对的是「积累」。' },
      { id: 'accumulate.q3', senseId: 'accumulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'accumulate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'accumulate.q4', senseId: 'accumulate.s1', errorType: 'meaning', type: '词源', prompt: '记 accumulate 时，下面哪句更稳妥？', options: ['先锁住「积累」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「积累」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['积累'] },
  });

  D('accumulation', {
    etymology: {
      origin: '英语派生：accumula 加上词尾，构成与「积累」相应的词类。',
      prefix: null,
      root: { text: 'accumula', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accumulation', text: '英语派生：accumula 加上词尾，构成与「积累」相应的词类。' },
        { label: '现在', text: '核心用法是：积累。' },
      ],
      formationLogic: '先认词干 accumula，再看词尾决定词性。',
      mnemonic: '看到 accumulation，先说出「积累」，再放进一句自己的话。',
      note: '先认词干 accumula，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accumulation.', chinese: '这一章反复回到同一个点：积累。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accumulation.s1', en: 'Without that accumulation, the story would be hard to follow.', zh: '没有这个积累，故事会很难读下去。', structure: 'accumulation / 在句中表示 / 积累', grammar: 'noun 用法，围绕「积累」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accumulation.', right: 'He gave me a lot of advice about the accumulation.', reason: 'advice 不可数。名词 accumulation 的单复数也要按词典词形来，不要自造。', rule: '先确定 accumulation 是noun，再套「积累」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accumulation.q1', senseId: 'accumulation.s1', errorType: 'meaning', type: '词义选择', prompt: '「accumulation」在本条的核心意思是：', options: ['积累', '完全相反的意思', '与本词无关的语法术语'], answer: '积累', explain: 'accumulation：积累。' },
      { id: 'accumulation.q2', senseId: 'accumulation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accumulation?', options: ['积累', 'a kind of ancient coin', 'the past tense of be'], answer: '积累', explain: '对的是「积累」。' },
      { id: 'accumulation.q3', senseId: 'accumulation.s1', errorType: 'grammar', type: '词义选择', prompt: 'accumulation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accumulation.q4', senseId: 'accumulation.s1', errorType: 'meaning', type: '词源', prompt: '记 accumulation 时，下面哪句更稳妥？', options: ['先锁住「积累」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「积累」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['积累'] },
  });

  D('accumulative', {
    etymology: {
      origin: '英语派生：accumulat 加上词尾，构成与「累积的」相应的词类。',
      prefix: null,
      root: { text: 'accumulat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accumulative', text: '英语派生：accumulat 加上词尾，构成与「累积的」相应的词类。' },
        { label: '现在', text: '核心用法是：累积的。' },
      ],
      formationLogic: '先认词干 accumulat，再看词尾决定词性。',
      mnemonic: '看到 accumulative，先说出「累积的」，再放进一句自己的话。',
      note: '先认词干 accumulat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accumulative even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得累积的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accumulative.s1', en: 'They needed a accumulative answer, not a long speech.', zh: '他们要的是累积的的答复，不是长篇发言。', structure: 'accumulative / 在句中表示 / 累积的', grammar: 'adjective 用法，围绕「累积的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accumulative.', right: 'The news is accumulative.', reason: 'news 作主语时动词用单数。形容词 accumulative 放在系动词后面。', rule: '先确定 accumulative 是adjective，再套「累积的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accumulative.q1', senseId: 'accumulative.s1', errorType: 'meaning', type: '词义选择', prompt: '「accumulative」在本条的核心意思是：', options: ['累积的', '完全相反的意思', '与本词无关的语法术语'], answer: '累积的', explain: 'accumulative：累积的。' },
      { id: 'accumulative.q2', senseId: 'accumulative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accumulative?', options: ['累积的', 'a kind of ancient coin', 'the past tense of be'], answer: '累积的', explain: '对的是「累积的」。' },
      { id: 'accumulative.q3', senseId: 'accumulative.s1', errorType: 'grammar', type: '词义选择', prompt: 'accumulative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accumulative.q4', senseId: 'accumulative.s1', errorType: 'meaning', type: '词源', prompt: '记 accumulative 时，下面哪句更稳妥？', options: ['先锁住「累积的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「累积的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['累积的'] },
  });

  D('accuracy', {
    etymology: {
      origin: '现代英语常用词「accuracy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accuracy', gloss: '准确' },
      suffix: null,
      history: [
        { label: 'accuracy', text: '现代英语常用词「accuracy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：准确。' },
      ],
      formationLogic: '核心义：准确。',
      mnemonic: '看到 accuracy，先说出「准确」，再放进一句自己的话。',
      note: '核心义：准确。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accuracy.', chinese: '这一章反复回到同一个点：准确。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accuracy.s1', en: 'Without that accuracy, the story would be hard to follow.', zh: '没有这个准确，故事会很难读下去。', structure: 'accuracy / 在句中表示 / 准确', grammar: 'noun 用法，围绕「准确」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accuracy.', right: 'He gave me a lot of advice about the accuracy.', reason: 'advice 不可数。名词 accuracy 的单复数也要按词典词形来，不要自造。', rule: '先确定 accuracy 是noun，再套「准确」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accuracy.q1', senseId: 'accuracy.s1', errorType: 'meaning', type: '词义选择', prompt: '「accuracy」在本条的核心意思是：', options: ['准确', '完全相反的意思', '与本词无关的语法术语'], answer: '准确', explain: 'accuracy：准确。' },
      { id: 'accuracy.q2', senseId: 'accuracy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accuracy?', options: ['准确', 'a kind of ancient coin', 'the past tense of be'], answer: '准确', explain: '对的是「准确」。' },
      { id: 'accuracy.q3', senseId: 'accuracy.s1', errorType: 'grammar', type: '词义选择', prompt: 'accuracy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accuracy.q4', senseId: 'accuracy.s1', errorType: 'meaning', type: '词源', prompt: '记 accuracy 时，下面哪句更稳妥？', options: ['先锁住「准确」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「准确」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['准确'] },
  });

  D('accurate', {
    etymology: {
      origin: '拉丁语 accuratus「仔细做成的」，cura「关心」。',
      prefix: null,
      root: { text: 'accurate', gloss: '准确的' },
      suffix: null,
      history: [
        { label: 'accurate', text: '拉丁语 accuratus「仔细做成的」，cura「关心」。' },
        { label: '现在', text: '核心用法是：准确的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：准确的。',
      mnemonic: '看到 accurate，先说出「准确的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：准确的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accurate even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得准确的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accurate.s1', en: 'They needed a accurate answer, not a long speech.', zh: '他们要的是准确的的答复，不是长篇发言。', structure: 'accurate / 在句中表示 / 准确的', grammar: 'adjective 用法，围绕「准确的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accurate.', right: 'The news is accurate.', reason: 'news 作主语时动词用单数。形容词 accurate 放在系动词后面。', rule: '先确定 accurate 是adjective，再套「准确的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accurate.q1', senseId: 'accurate.s1', errorType: 'meaning', type: '词义选择', prompt: '「accurate」在本条的核心意思是：', options: ['准确的', '完全相反的意思', '与本词无关的语法术语'], answer: '准确的', explain: 'accurate：准确的。' },
      { id: 'accurate.q2', senseId: 'accurate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accurate?', options: ['准确的', 'a kind of ancient coin', 'the past tense of be'], answer: '准确的', explain: '对的是「准确的」。' },
      { id: 'accurate.q3', senseId: 'accurate.s1', errorType: 'grammar', type: '词义选择', prompt: 'accurate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accurate.q4', senseId: 'accurate.s1', errorType: 'meaning', type: '词源', prompt: '记 accurate 时，下面哪句更稳妥？', options: ['先锁住「准确的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「准确的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['准确的'] },
  });

  D('accurately', {
    etymology: {
      origin: '英语派生：accurate 加上词尾，构成与「准确地」相应的词类。',
      prefix: null,
      root: { text: 'accurate', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accurately', text: '英语派生：accurate 加上词尾，构成与「准确地」相应的词类。' },
        { label: '现在', text: '核心用法是：准确地。' },
      ],
      formationLogic: '先认词干 accurate，再看词尾决定词性。',
      mnemonic: '看到 accurately，先说出「准确地」，再放进一句自己的话。',
      note: '先认词干 accurate，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule accurately, and the class finally followed it.', chinese: '她把规则讲得让人明白（准确地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accurately.s1', en: 'He nodded accurately and went back to his notes.', zh: '他准确地地点了点头，又回去看笔记。', structure: 'accurately / 在句中表示 / 准确地', grammar: 'adverb 用法，围绕「准确地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very accuratelyly.', right: 'She spoke accurately.', reason: 'accurately 已经是副词，不要再加 -ly。', rule: '先确定 accurately 是adverb，再套「准确地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accurately.q1', senseId: 'accurately.s1', errorType: 'meaning', type: '词义选择', prompt: '「accurately」在本条的核心意思是：', options: ['准确地', '完全相反的意思', '与本词无关的语法术语'], answer: '准确地', explain: 'accurately：准确地。' },
      { id: 'accurately.q2', senseId: 'accurately.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accurately?', options: ['准确地', 'a kind of ancient coin', 'the past tense of be'], answer: '准确地', explain: '对的是「准确地」。' },
      { id: 'accurately.q3', senseId: 'accurately.s1', errorType: 'grammar', type: '词义选择', prompt: 'accurately 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'accurately.q4', senseId: 'accurately.s1', errorType: 'meaning', type: '词源', prompt: '记 accurately 时，下面哪句更稳妥？', options: ['先锁住「准确地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「准确地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['准确地'] },
  });

  D('accusation', {
    etymology: {
      origin: '英语派生：accusa 加上词尾，构成与「指控」相应的词类。',
      prefix: null,
      root: { text: 'accusa', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accusation', text: '英语派生：accusa 加上词尾，构成与「指控」相应的词类。' },
        { label: '现在', text: '核心用法是：指控。' },
      ],
      formationLogic: '先认词干 accusa，再看词尾决定词性。',
      mnemonic: '看到 accusation，先说出「指控」，再放进一句自己的话。',
      note: '先认词干 accusa，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accusation.', chinese: '这一章反复回到同一个点：指控。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accusation.s1', en: 'Without that accusation, the story would be hard to follow.', zh: '没有这个指控，故事会很难读下去。', structure: 'accusation / 在句中表示 / 指控', grammar: 'noun 用法，围绕「指控」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accusation.', right: 'He gave me a lot of advice about the accusation.', reason: 'advice 不可数。名词 accusation 的单复数也要按词典词形来，不要自造。', rule: '先确定 accusation 是noun，再套「指控」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accusation.q1', senseId: 'accusation.s1', errorType: 'meaning', type: '词义选择', prompt: '「accusation」在本条的核心意思是：', options: ['指控', '完全相反的意思', '与本词无关的语法术语'], answer: '指控', explain: 'accusation：指控。' },
      { id: 'accusation.q2', senseId: 'accusation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accusation?', options: ['指控', 'a kind of ancient coin', 'the past tense of be'], answer: '指控', explain: '对的是「指控」。' },
      { id: 'accusation.q3', senseId: 'accusation.s1', errorType: 'grammar', type: '词义选择', prompt: 'accusation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accusation.q4', senseId: 'accusation.s1', errorType: 'meaning', type: '词源', prompt: '记 accusation 时，下面哪句更稳妥？', options: ['先锁住「指控」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「指控」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指控'] },
  });

  D('accusative', {
    etymology: {
      origin: '英语派生：accusat 加上词尾，构成与「（语法）宾格」相应的词类。',
      prefix: null,
      root: { text: 'accusat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accusative', text: '英语派生：accusat 加上词尾，构成与「（语法）宾格」相应的词类。' },
        { label: '现在', text: '核心用法是：（语法）宾格。' },
      ],
      formationLogic: '先认词干 accusat，再看词尾决定词性。',
      mnemonic: '看到 accusative，先说出「（语法）宾格」，再放进一句自己的话。',
      note: '先认词干 accusat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accusative.', chinese: '这一章反复回到同一个点：（语法）宾格。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accusative.s1', en: 'Without that accusative, the story would be hard to follow.', zh: '没有这个（语法）宾格，故事会很难读下去。', structure: 'accusative / 在句中表示 / （语法）宾格', grammar: 'noun 用法，围绕「（语法）宾格」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accusative.', right: 'He gave me a lot of advice about the accusative.', reason: 'advice 不可数。名词 accusative 的单复数也要按词典词形来，不要自造。', rule: '先确定 accusative 是noun，再套「（语法）宾格」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accusative.q1', senseId: 'accusative.s1', errorType: 'meaning', type: '词义选择', prompt: '「accusative」在本条的核心意思是：', options: ['（语法）宾格', '完全相反的意思', '与本词无关的语法术语'], answer: '（语法）宾格', explain: 'accusative：（语法）宾格。' },
      { id: 'accusative.q2', senseId: 'accusative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accusative?', options: ['（语法）宾格', 'a kind of ancient coin', 'the past tense of be'], answer: '（语法）宾格', explain: '对的是「（语法）宾格」。' },
      { id: 'accusative.q3', senseId: 'accusative.s1', errorType: 'grammar', type: '词义选择', prompt: 'accusative 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accusative.q4', senseId: 'accusative.s1', errorType: 'meaning', type: '词源', prompt: '记 accusative 时，下面哪句更稳妥？', options: ['先锁住「（语法）宾格」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（语法）宾格」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（语法）宾格'] },
  });

  D('accused', {
    etymology: {
      origin: '现代英语常用词「accused」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accused', gloss: '被告' },
      suffix: null,
      history: [
        { label: 'accused', text: '现代英语常用词「accused」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：被告。' },
      ],
      formationLogic: '核心义：被告。',
      mnemonic: '看到 accused，先说出「被告」，再放进一句自己的话。',
      note: '核心义：被告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accused.', chinese: '这一章反复回到同一个点：被告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accused.s1', en: 'Without that accused, the story would be hard to follow.', zh: '没有这个被告，故事会很难读下去。', structure: 'accused / 在句中表示 / 被告', grammar: 'noun 用法，围绕「被告」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accused.', right: 'He gave me a lot of advice about the accused.', reason: 'advice 不可数。名词 accused 的单复数也要按词典词形来，不要自造。', rule: '先确定 accused 是noun，再套「被告」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accused.q1', senseId: 'accused.s1', errorType: 'meaning', type: '词义选择', prompt: '「accused」在本条的核心意思是：', options: ['被告', '完全相反的意思', '与本词无关的语法术语'], answer: '被告', explain: 'accused：被告。' },
      { id: 'accused.q2', senseId: 'accused.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accused?', options: ['被告', 'a kind of ancient coin', 'the past tense of be'], answer: '被告', explain: '对的是「被告」。' },
      { id: 'accused.q3', senseId: 'accused.s1', errorType: 'grammar', type: '词义选择', prompt: 'accused 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accused.q4', senseId: 'accused.s1', errorType: 'meaning', type: '词源', prompt: '记 accused 时，下面哪句更稳妥？', options: ['先锁住「被告」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「被告」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被告'] },
  });

  D('accuser', {
    etymology: {
      origin: '英语派生：accus 加上词尾，构成与「控告者」相应的词类。',
      prefix: null,
      root: { text: 'accus', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'accuser', text: '英语派生：accus 加上词尾，构成与「控告者」相应的词类。' },
        { label: '现在', text: '核心用法是：控告者。' },
      ],
      formationLogic: '先认词干 accus，再看词尾决定词性。',
      mnemonic: '看到 accuser，先说出「控告者」，再放进一句自己的话。',
      note: '先认词干 accus，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one accuser.', chinese: '这一章反复回到同一个点：控告者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accuser.s1', en: 'Without that accuser, the story would be hard to follow.', zh: '没有这个控告者，故事会很难读下去。', structure: 'accuser / 在句中表示 / 控告者', grammar: 'noun 用法，围绕「控告者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the accuser.', right: 'He gave me a lot of advice about the accuser.', reason: 'advice 不可数。名词 accuser 的单复数也要按词典词形来，不要自造。', rule: '先确定 accuser 是noun，再套「控告者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accuser.q1', senseId: 'accuser.s1', errorType: 'meaning', type: '词义选择', prompt: '「accuser」在本条的核心意思是：', options: ['控告者', '完全相反的意思', '与本词无关的语法术语'], answer: '控告者', explain: 'accuser：控告者。' },
      { id: 'accuser.q2', senseId: 'accuser.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accuser?', options: ['控告者', 'a kind of ancient coin', 'the past tense of be'], answer: '控告者', explain: '对的是「控告者」。' },
      { id: 'accuser.q3', senseId: 'accuser.s1', errorType: 'grammar', type: '词义选择', prompt: 'accuser 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'accuser.q4', senseId: 'accuser.s1', errorType: 'meaning', type: '词源', prompt: '记 accuser 时，下面哪句更稳妥？', options: ['先锁住「控告者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「控告者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['控告者'] },
  });

  D('accustom', {
    etymology: {
      origin: '古法语 acostumer，costume「习惯」。',
      prefix: null,
      root: { text: 'accustom', gloss: '使习惯于' },
      suffix: null,
      history: [
        { label: 'accustom', text: '古法语 acostumer，costume「习惯」。' },
        { label: '现在', text: '核心用法是：使习惯于。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：使习惯于。',
      mnemonic: '看到 accustom，先说出「使习惯于」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：使习惯于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to accustom before the office closed.', chinese: '小组得在办公室关门前完成这件事：使习惯于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accustom.s1', en: 'Nobody wanted to accustom, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 accustom 是「使习惯于」。', structure: 'accustom / 在句中表示 / 使习惯于', grammar: 'verb 用法，围绕「使习惯于」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She accustomed the form yesterday without checking the real past form.', right: 'Look up the past form of "accustom" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 accustom 是verb，再套「使习惯于」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accustom.q1', senseId: 'accustom.s1', errorType: 'meaning', type: '词义选择', prompt: '「accustom」在本条的核心意思是：', options: ['使习惯于', '完全相反的意思', '与本词无关的语法术语'], answer: '使习惯于', explain: 'accustom：使习惯于。' },
      { id: 'accustom.q2', senseId: 'accustom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accustom?', options: ['使习惯于', 'a kind of ancient coin', 'the past tense of be'], answer: '使习惯于', explain: '对的是「使习惯于」。' },
      { id: 'accustom.q3', senseId: 'accustom.s1', errorType: 'grammar', type: '词义选择', prompt: 'accustom 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'accustom.q4', senseId: 'accustom.s1', errorType: 'meaning', type: '词源', prompt: '记 accustom 时，下面哪句更稳妥？', options: ['先锁住「使习惯于」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使习惯于」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使习惯于'] },
  });

  D('accustomed', {
    etymology: {
      origin: '现代英语常用词「accustomed」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'accustomed', gloss: '习惯于的' },
      suffix: null,
      history: [
        { label: 'accustomed', text: '现代英语常用词「accustomed」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：习惯于的。' },
      ],
      formationLogic: '核心义：习惯于的。',
      mnemonic: '看到 accustomed，先说出「习惯于的」，再放进一句自己的话。',
      note: '核心义：习惯于的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked accustomed even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得习惯于的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'accustomed.s1', en: 'They needed a accustomed answer, not a long speech.', zh: '他们要的是习惯于的的答复，不是长篇发言。', structure: 'accustomed / 在句中表示 / 习惯于的', grammar: 'adjective 用法，围绕「习惯于的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are accustomed.', right: 'The news is accustomed.', reason: 'news 作主语时动词用单数。形容词 accustomed 放在系动词后面。', rule: '先确定 accustomed 是adjective，再套「习惯于的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'accustomed.q1', senseId: 'accustomed.s1', errorType: 'meaning', type: '词义选择', prompt: '「accustomed」在本条的核心意思是：', options: ['习惯于的', '完全相反的意思', '与本词无关的语法术语'], answer: '习惯于的', explain: 'accustomed：习惯于的。' },
      { id: 'accustomed.q2', senseId: 'accustomed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches accustomed?', options: ['习惯于的', 'a kind of ancient coin', 'the past tense of be'], answer: '习惯于的', explain: '对的是「习惯于的」。' },
      { id: 'accustomed.q3', senseId: 'accustomed.s1', errorType: 'grammar', type: '词义选择', prompt: 'accustomed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'accustomed.q4', senseId: 'accustomed.s1', errorType: 'meaning', type: '词源', prompt: '记 accustomed 时，下面哪句更稳妥？', options: ['先锁住「习惯于的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「习惯于的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['习惯于的'] },
  });

  D('ace', {
    etymology: {
      origin: '现代英语常用词「ace」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ace', gloss: '（纸牌）A' },
      suffix: null,
      history: [
        { label: 'ace', text: '现代英语常用词「ace」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（纸牌）A。' },
      ],
      formationLogic: '核心义：（纸牌）A。',
      mnemonic: '看到 ace，先说出「（纸牌）A」，再放进一句自己的话。',
      note: '核心义：（纸牌）A。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ace.', chinese: '这一章反复回到同一个点：（纸牌）A。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ace.s1', en: 'Without that ace, the story would be hard to follow.', zh: '没有这个（纸牌）A，故事会很难读下去。', structure: 'ace / 在句中表示 / （纸牌）A', grammar: 'noun 用法，围绕「（纸牌）A」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ace.', right: 'He gave me a lot of advice about the ace.', reason: 'advice 不可数。名词 ace 的单复数也要按词典词形来，不要自造。', rule: '先确定 ace 是noun，再套「（纸牌）A」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ace.q1', senseId: 'ace.s1', errorType: 'meaning', type: '词义选择', prompt: '「ace」在本条的核心意思是：', options: ['（纸牌）A', '完全相反的意思', '与本词无关的语法术语'], answer: '（纸牌）A', explain: 'ace：（纸牌）A。' },
      { id: 'ace.q2', senseId: 'ace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ace?', options: ['（纸牌）A', 'a kind of ancient coin', 'the past tense of be'], answer: '（纸牌）A', explain: '对的是「（纸牌）A」。' },
      { id: 'ace.q3', senseId: 'ace.s1', errorType: 'grammar', type: '词义选择', prompt: 'ace 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ace.q4', senseId: 'ace.s1', errorType: 'meaning', type: '词源', prompt: '记 ace 时，下面哪句更稳妥？', options: ['先锁住「（纸牌）A」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（纸牌）A」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（纸牌）A'] },
  });

  D('ache', {
    etymology: {
      origin: '古英语 acan「疼」。',
      prefix: null,
      root: { text: 'ache', gloss: '疼痛' },
      suffix: null,
      history: [
        { label: 'ache', text: '古英语 acan「疼」。' },
        { label: '现在', text: '核心用法是：疼痛。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：疼痛。',
      mnemonic: '看到 ache，先说出「疼痛」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：疼痛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to ache before the office closed.', chinese: '小组得在办公室关门前完成这件事：疼痛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ache.s1', en: 'Nobody wanted to ache, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 ache 是「疼痛」。', structure: 'ache / 在句中表示 / 疼痛', grammar: 'verb 用法，围绕「疼痛」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She acheed the form yesterday without checking the real past form.', right: 'Look up the past form of "ache" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 ache 是verb，再套「疼痛」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ache.q1', senseId: 'ache.s1', errorType: 'meaning', type: '词义选择', prompt: '「ache」在本条的核心意思是：', options: ['疼痛', '完全相反的意思', '与本词无关的语法术语'], answer: '疼痛', explain: 'ache：疼痛。' },
      { id: 'ache.q2', senseId: 'ache.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ache?', options: ['疼痛', 'a kind of ancient coin', 'the past tense of be'], answer: '疼痛', explain: '对的是「疼痛」。' },
      { id: 'ache.q3', senseId: 'ache.s1', errorType: 'grammar', type: '词义选择', prompt: 'ache 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'ache.q4', senseId: 'ache.s1', errorType: 'meaning', type: '词源', prompt: '记 ache 时，下面哪句更稳妥？', options: ['先锁住「疼痛」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「疼痛」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疼痛'] },
  });

  D('achievable', {
    etymology: {
      origin: '英语派生：achiev 加上词尾，构成与「可实现的」相应的词类。',
      prefix: null,
      root: { text: 'achiev', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'achievable', text: '英语派生：achiev 加上词尾，构成与「可实现的」相应的词类。' },
        { label: '现在', text: '核心用法是：可实现的。' },
      ],
      formationLogic: '先认词干 achiev，再看词尾决定词性。',
      mnemonic: '看到 achievable，先说出「可实现的」，再放进一句自己的话。',
      note: '先认词干 achiev，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked achievable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得可实现的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'achievable.s1', en: 'They needed a achievable answer, not a long speech.', zh: '他们要的是可实现的的答复，不是长篇发言。', structure: 'achievable / 在句中表示 / 可实现的', grammar: 'adjective 用法，围绕「可实现的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are achievable.', right: 'The news is achievable.', reason: 'news 作主语时动词用单数。形容词 achievable 放在系动词后面。', rule: '先确定 achievable 是adjective，再套「可实现的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'achievable.q1', senseId: 'achievable.s1', errorType: 'meaning', type: '词义选择', prompt: '「achievable」在本条的核心意思是：', options: ['可实现的', '完全相反的意思', '与本词无关的语法术语'], answer: '可实现的', explain: 'achievable：可实现的。' },
      { id: 'achievable.q2', senseId: 'achievable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches achievable?', options: ['可实现的', 'a kind of ancient coin', 'the past tense of be'], answer: '可实现的', explain: '对的是「可实现的」。' },
      { id: 'achievable.q3', senseId: 'achievable.s1', errorType: 'grammar', type: '词义选择', prompt: 'achievable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'achievable.q4', senseId: 'achievable.s1', errorType: 'meaning', type: '词源', prompt: '记 achievable 时，下面哪句更稳妥？', options: ['先锁住「可实现的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「可实现的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可实现的'] },
  });

  D('achieved', {
    etymology: {
      origin: '现代英语常用词「achieved」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'achieved', gloss: '已实现的' },
      suffix: null,
      history: [
        { label: 'achieved', text: '现代英语常用词「achieved」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：已实现的。' },
      ],
      formationLogic: '核心义：已实现的。',
      mnemonic: '看到 achieved，先说出「已实现的」，再放进一句自己的话。',
      note: '核心义：已实现的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked achieved even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得已实现的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'achieved.s1', en: 'They needed a achieved answer, not a long speech.', zh: '他们要的是已实现的的答复，不是长篇发言。', structure: 'achieved / 在句中表示 / 已实现的', grammar: 'adjective 用法，围绕「已实现的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are achieved.', right: 'The news is achieved.', reason: 'news 作主语时动词用单数。形容词 achieved 放在系动词后面。', rule: '先确定 achieved 是adjective，再套「已实现的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'achieved.q1', senseId: 'achieved.s1', errorType: 'meaning', type: '词义选择', prompt: '「achieved」在本条的核心意思是：', options: ['已实现的', '完全相反的意思', '与本词无关的语法术语'], answer: '已实现的', explain: 'achieved：已实现的。' },
      { id: 'achieved.q2', senseId: 'achieved.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches achieved?', options: ['已实现的', 'a kind of ancient coin', 'the past tense of be'], answer: '已实现的', explain: '对的是「已实现的」。' },
      { id: 'achieved.q3', senseId: 'achieved.s1', errorType: 'grammar', type: '词义选择', prompt: 'achieved 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'achieved.q4', senseId: 'achieved.s1', errorType: 'meaning', type: '词源', prompt: '记 achieved 时，下面哪句更稳妥？', options: ['先锁住「已实现的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「已实现的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['已实现的'] },
  });

  D('achievement', {
    etymology: {
      origin: '英语派生：achieve 加上词尾，构成与「成就」相应的词类。',
      prefix: null,
      root: { text: 'achieve', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'achievement', text: '英语派生：achieve 加上词尾，构成与「成就」相应的词类。' },
        { label: '现在', text: '核心用法是：成就。' },
      ],
      formationLogic: '先认词干 achieve，再看词尾决定词性。',
      mnemonic: '看到 achievement，先说出「成就」，再放进一句自己的话。',
      note: '先认词干 achieve，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one achievement.', chinese: '这一章反复回到同一个点：成就。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'achievement.s1', en: 'Without that achievement, the story would be hard to follow.', zh: '没有这个成就，故事会很难读下去。', structure: 'achievement / 在句中表示 / 成就', grammar: 'noun 用法，围绕「成就」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the achievement.', right: 'He gave me a lot of advice about the achievement.', reason: 'advice 不可数。名词 achievement 的单复数也要按词典词形来，不要自造。', rule: '先确定 achievement 是noun，再套「成就」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'achievement.q1', senseId: 'achievement.s1', errorType: 'meaning', type: '词义选择', prompt: '「achievement」在本条的核心意思是：', options: ['成就', '完全相反的意思', '与本词无关的语法术语'], answer: '成就', explain: 'achievement：成就。' },
      { id: 'achievement.q2', senseId: 'achievement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches achievement?', options: ['成就', 'a kind of ancient coin', 'the past tense of be'], answer: '成就', explain: '对的是「成就」。' },
      { id: 'achievement.q3', senseId: 'achievement.s1', errorType: 'grammar', type: '词义选择', prompt: 'achievement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'achievement.q4', senseId: 'achievement.s1', errorType: 'meaning', type: '词源', prompt: '记 achievement 时，下面哪句更稳妥？', options: ['先锁住「成就」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「成就」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['成就'] },
  });

  D('aching', {
    etymology: {
      origin: '现代英语常用词「aching」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aching', gloss: '疼痛的' },
      suffix: null,
      history: [
        { label: 'aching', text: '现代英语常用词「aching」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：疼痛的。' },
      ],
      formationLogic: '核心义：疼痛的。',
      mnemonic: '看到 aching，先说出「疼痛的」，再放进一句自己的话。',
      note: '核心义：疼痛的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aching even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得疼痛的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aching.s1', en: 'They needed a aching answer, not a long speech.', zh: '他们要的是疼痛的的答复，不是长篇发言。', structure: 'aching / 在句中表示 / 疼痛的', grammar: 'adjective 用法，围绕「疼痛的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aching.', right: 'The news is aching.', reason: 'news 作主语时动词用单数。形容词 aching 放在系动词后面。', rule: '先确定 aching 是adjective，再套「疼痛的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aching.q1', senseId: 'aching.s1', errorType: 'meaning', type: '词义选择', prompt: '「aching」在本条的核心意思是：', options: ['疼痛的', '完全相反的意思', '与本词无关的语法术语'], answer: '疼痛的', explain: 'aching：疼痛的。' },
      { id: 'aching.q2', senseId: 'aching.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aching?', options: ['疼痛的', 'a kind of ancient coin', 'the past tense of be'], answer: '疼痛的', explain: '对的是「疼痛的」。' },
      { id: 'aching.q3', senseId: 'aching.s1', errorType: 'grammar', type: '词义选择', prompt: 'aching 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aching.q4', senseId: 'aching.s1', errorType: 'meaning', type: '词源', prompt: '记 aching 时，下面哪句更稳妥？', options: ['先锁住「疼痛的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「疼痛的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疼痛的'] },
  });

  D('acid', {
    etymology: {
      origin: '拉丁语 acidus「酸的」，acere「变酸」。',
      prefix: null,
      root: { text: 'acid', gloss: '酸' },
      suffix: null,
      history: [
        { label: 'acid', text: '拉丁语 acidus「酸的」，acere「变酸」。' },
        { label: '现在', text: '核心用法是：酸。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：酸。',
      mnemonic: '看到 acid，先说出「酸」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：酸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acid.', chinese: '这一章反复回到同一个点：酸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acid.s1', en: 'Without that acid, the story would be hard to follow.', zh: '没有这个酸，故事会很难读下去。', structure: 'acid / 在句中表示 / 酸', grammar: 'noun 用法，围绕「酸」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acid.', right: 'He gave me a lot of advice about the acid.', reason: 'advice 不可数。名词 acid 的单复数也要按词典词形来，不要自造。', rule: '先确定 acid 是noun，再套「酸」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acid.q1', senseId: 'acid.s1', errorType: 'meaning', type: '词义选择', prompt: '「acid」在本条的核心意思是：', options: ['酸', '完全相反的意思', '与本词无关的语法术语'], answer: '酸', explain: 'acid：酸。' },
      { id: 'acid.q2', senseId: 'acid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acid?', options: ['酸', 'a kind of ancient coin', 'the past tense of be'], answer: '酸', explain: '对的是「酸」。' },
      { id: 'acid.q3', senseId: 'acid.s1', errorType: 'grammar', type: '词义选择', prompt: 'acid 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acid.q4', senseId: 'acid.s1', errorType: 'meaning', type: '词源', prompt: '记 acid 时，下面哪句更稳妥？', options: ['先锁住「酸」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「酸」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酸'] },
  });

  D('acidic', {
    etymology: {
      origin: '英语派生：acid 加上词尾，构成与「酸性的」相应的词类。',
      prefix: null,
      root: { text: 'acid', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acidic', text: '英语派生：acid 加上词尾，构成与「酸性的」相应的词类。' },
        { label: '现在', text: '核心用法是：酸性的。' },
      ],
      formationLogic: '先认词干 acid，再看词尾决定词性。',
      mnemonic: '看到 acidic，先说出「酸性的」，再放进一句自己的话。',
      note: '先认词干 acid，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acidic even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得酸性的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acidic.s1', en: 'They needed a acidic answer, not a long speech.', zh: '他们要的是酸性的的答复，不是长篇发言。', structure: 'acidic / 在句中表示 / 酸性的', grammar: 'adjective 用法，围绕「酸性的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acidic.', right: 'The news is acidic.', reason: 'news 作主语时动词用单数。形容词 acidic 放在系动词后面。', rule: '先确定 acidic 是adjective，再套「酸性的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acidic.q1', senseId: 'acidic.s1', errorType: 'meaning', type: '词义选择', prompt: '「acidic」在本条的核心意思是：', options: ['酸性的', '完全相反的意思', '与本词无关的语法术语'], answer: '酸性的', explain: 'acidic：酸性的。' },
      { id: 'acidic.q2', senseId: 'acidic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acidic?', options: ['酸性的', 'a kind of ancient coin', 'the past tense of be'], answer: '酸性的', explain: '对的是「酸性的」。' },
      { id: 'acidic.q3', senseId: 'acidic.s1', errorType: 'grammar', type: '词义选择', prompt: 'acidic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acidic.q4', senseId: 'acidic.s1', errorType: 'meaning', type: '词源', prompt: '记 acidic 时，下面哪句更稳妥？', options: ['先锁住「酸性的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「酸性的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酸性的'] },
  });

  D('acidity', {
    etymology: {
      origin: '英语派生：acid 加上词尾，构成与「酸性」相应的词类。',
      prefix: null,
      root: { text: 'acid', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acidity', text: '英语派生：acid 加上词尾，构成与「酸性」相应的词类。' },
        { label: '现在', text: '核心用法是：酸性。' },
      ],
      formationLogic: '先认词干 acid，再看词尾决定词性。',
      mnemonic: '看到 acidity，先说出「酸性」，再放进一句自己的话。',
      note: '先认词干 acid，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acidity.', chinese: '这一章反复回到同一个点：酸性。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acidity.s1', en: 'Without that acidity, the story would be hard to follow.', zh: '没有这个酸性，故事会很难读下去。', structure: 'acidity / 在句中表示 / 酸性', grammar: 'noun 用法，围绕「酸性」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acidity.', right: 'He gave me a lot of advice about the acidity.', reason: 'advice 不可数。名词 acidity 的单复数也要按词典词形来，不要自造。', rule: '先确定 acidity 是noun，再套「酸性」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acidity.q1', senseId: 'acidity.s1', errorType: 'meaning', type: '词义选择', prompt: '「acidity」在本条的核心意思是：', options: ['酸性', '完全相反的意思', '与本词无关的语法术语'], answer: '酸性', explain: 'acidity：酸性。' },
      { id: 'acidity.q2', senseId: 'acidity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acidity?', options: ['酸性', 'a kind of ancient coin', 'the past tense of be'], answer: '酸性', explain: '对的是「酸性」。' },
      { id: 'acidity.q3', senseId: 'acidity.s1', errorType: 'grammar', type: '词义选择', prompt: 'acidity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acidity.q4', senseId: 'acidity.s1', errorType: 'meaning', type: '词源', prompt: '记 acidity 时，下面哪句更稳妥？', options: ['先锁住「酸性」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「酸性」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酸性'] },
  });

  D('acknowledge', {
    etymology: {
      origin: '中古英语：on + know + 动词性 -le 一类结构，承认自己知道。',
      prefix: null,
      root: { text: 'acknowledge', gloss: '承认' },
      suffix: null,
      history: [
        { label: 'acknowledge', text: '中古英语：on + know + 动词性 -le 一类结构，承认自己知道。' },
        { label: '现在', text: '核心用法是：承认。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：承认。',
      mnemonic: '看到 acknowledge，先说出「承认」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：承认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to acknowledge before the office closed.', chinese: '小组得在办公室关门前完成这件事：承认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acknowledge.s1', en: 'Nobody wanted to acknowledge, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 acknowledge 是「承认」。', structure: 'acknowledge / 在句中表示 / 承认', grammar: 'verb 用法，围绕「承认」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She acknowledgeed the form yesterday without checking the real past form.', right: 'Look up the past form of "acknowledge" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 acknowledge 是verb，再套「承认」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acknowledge.q1', senseId: 'acknowledge.s1', errorType: 'meaning', type: '词义选择', prompt: '「acknowledge」在本条的核心意思是：', options: ['承认', '完全相反的意思', '与本词无关的语法术语'], answer: '承认', explain: 'acknowledge：承认。' },
      { id: 'acknowledge.q2', senseId: 'acknowledge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acknowledge?', options: ['承认', 'a kind of ancient coin', 'the past tense of be'], answer: '承认', explain: '对的是「承认」。' },
      { id: 'acknowledge.q3', senseId: 'acknowledge.s1', errorType: 'grammar', type: '词义选择', prompt: 'acknowledge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'acknowledge.q4', senseId: 'acknowledge.s1', errorType: 'meaning', type: '词源', prompt: '记 acknowledge 时，下面哪句更稳妥？', options: ['先锁住「承认」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「承认」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['承认'] },
  });

  D('acknowledged', {
    etymology: {
      origin: '现代英语常用词「acknowledged」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'acknowledged', gloss: '公认的' },
      suffix: null,
      history: [
        { label: 'acknowledged', text: '现代英语常用词「acknowledged」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：公认的。' },
      ],
      formationLogic: '核心义：公认的。',
      mnemonic: '看到 acknowledged，先说出「公认的」，再放进一句自己的话。',
      note: '核心义：公认的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acknowledged even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得公认的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acknowledged.s1', en: 'They needed a acknowledged answer, not a long speech.', zh: '他们要的是公认的的答复，不是长篇发言。', structure: 'acknowledged / 在句中表示 / 公认的', grammar: 'adjective 用法，围绕「公认的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acknowledged.', right: 'The news is acknowledged.', reason: 'news 作主语时动词用单数。形容词 acknowledged 放在系动词后面。', rule: '先确定 acknowledged 是adjective，再套「公认的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acknowledged.q1', senseId: 'acknowledged.s1', errorType: 'meaning', type: '词义选择', prompt: '「acknowledged」在本条的核心意思是：', options: ['公认的', '完全相反的意思', '与本词无关的语法术语'], answer: '公认的', explain: 'acknowledged：公认的。' },
      { id: 'acknowledged.q2', senseId: 'acknowledged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acknowledged?', options: ['公认的', 'a kind of ancient coin', 'the past tense of be'], answer: '公认的', explain: '对的是「公认的」。' },
      { id: 'acknowledged.q3', senseId: 'acknowledged.s1', errorType: 'grammar', type: '词义选择', prompt: 'acknowledged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acknowledged.q4', senseId: 'acknowledged.s1', errorType: 'meaning', type: '词源', prompt: '记 acknowledged 时，下面哪句更稳妥？', options: ['先锁住「公认的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「公认的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公认的'] },
  });

  D('acknowledgement', {
    etymology: {
      origin: '英语派生：acknowledge 加上词尾，构成与「承认」相应的词类。',
      prefix: null,
      root: { text: 'acknowledge', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acknowledgement', text: '英语派生：acknowledge 加上词尾，构成与「承认」相应的词类。' },
        { label: '现在', text: '核心用法是：承认。' },
      ],
      formationLogic: '先认词干 acknowledge，再看词尾决定词性。',
      mnemonic: '看到 acknowledgement，先说出「承认」，再放进一句自己的话。',
      note: '先认词干 acknowledge，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acknowledgement.', chinese: '这一章反复回到同一个点：承认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acknowledgement.s1', en: 'Without that acknowledgement, the story would be hard to follow.', zh: '没有这个承认，故事会很难读下去。', structure: 'acknowledgement / 在句中表示 / 承认', grammar: 'noun 用法，围绕「承认」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acknowledgement.', right: 'He gave me a lot of advice about the acknowledgement.', reason: 'advice 不可数。名词 acknowledgement 的单复数也要按词典词形来，不要自造。', rule: '先确定 acknowledgement 是noun，再套「承认」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acknowledgement.q1', senseId: 'acknowledgement.s1', errorType: 'meaning', type: '词义选择', prompt: '「acknowledgement」在本条的核心意思是：', options: ['承认', '完全相反的意思', '与本词无关的语法术语'], answer: '承认', explain: 'acknowledgement：承认。' },
      { id: 'acknowledgement.q2', senseId: 'acknowledgement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acknowledgement?', options: ['承认', 'a kind of ancient coin', 'the past tense of be'], answer: '承认', explain: '对的是「承认」。' },
      { id: 'acknowledgement.q3', senseId: 'acknowledgement.s1', errorType: 'grammar', type: '词义选择', prompt: 'acknowledgement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acknowledgement.q4', senseId: 'acknowledgement.s1', errorType: 'meaning', type: '词源', prompt: '记 acknowledgement 时，下面哪句更稳妥？', options: ['先锁住「承认」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「承认」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['承认'] },
  });

  D('acorn', {
    etymology: {
      origin: '古英语 æcern「林地果实」，后来才专指橡子。',
      prefix: null,
      root: { text: 'acorn', gloss: '橡子' },
      suffix: null,
      history: [
        { label: 'acorn', text: '古英语 æcern「林地果实」，后来才专指橡子。' },
        { label: '现在', text: '核心用法是：橡子。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：橡子。',
      mnemonic: '看到 acorn，先说出「橡子」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：橡子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acorn.', chinese: '这一章反复回到同一个点：橡子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acorn.s1', en: 'Without that acorn, the story would be hard to follow.', zh: '没有这个橡子，故事会很难读下去。', structure: 'acorn / 在句中表示 / 橡子', grammar: 'noun 用法，围绕「橡子」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acorn.', right: 'He gave me a lot of advice about the acorn.', reason: 'advice 不可数。名词 acorn 的单复数也要按词典词形来，不要自造。', rule: '先确定 acorn 是noun，再套「橡子」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acorn.q1', senseId: 'acorn.s1', errorType: 'meaning', type: '词义选择', prompt: '「acorn」在本条的核心意思是：', options: ['橡子', '完全相反的意思', '与本词无关的语法术语'], answer: '橡子', explain: 'acorn：橡子。' },
      { id: 'acorn.q2', senseId: 'acorn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acorn?', options: ['橡子', 'a kind of ancient coin', 'the past tense of be'], answer: '橡子', explain: '对的是「橡子」。' },
      { id: 'acorn.q3', senseId: 'acorn.s1', errorType: 'grammar', type: '词义选择', prompt: 'acorn 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acorn.q4', senseId: 'acorn.s1', errorType: 'meaning', type: '词源', prompt: '记 acorn 时，下面哪句更稳妥？', options: ['先锁住「橡子」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「橡子」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['橡子'] },
  });

  D('acquaint', {
    etymology: {
      origin: '古法语 acointier，拉丁语 accognitare「使知道」。',
      prefix: null,
      root: { text: 'acquaint', gloss: '使熟悉' },
      suffix: null,
      history: [
        { label: 'acquaint', text: '古法语 acointier，拉丁语 accognitare「使知道」。' },
        { label: '现在', text: '核心用法是：使熟悉。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：使熟悉。',
      mnemonic: '看到 acquaint，先说出「使熟悉」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：使熟悉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to acquaint before the office closed.', chinese: '小组得在办公室关门前完成这件事：使熟悉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acquaint.s1', en: 'Nobody wanted to acquaint, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 acquaint 是「使熟悉」。', structure: 'acquaint / 在句中表示 / 使熟悉', grammar: 'verb 用法，围绕「使熟悉」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She acquainted the form yesterday without checking the real past form.', right: 'Look up the past form of "acquaint" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 acquaint 是verb，再套「使熟悉」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acquaint.q1', senseId: 'acquaint.s1', errorType: 'meaning', type: '词义选择', prompt: '「acquaint」在本条的核心意思是：', options: ['使熟悉', '完全相反的意思', '与本词无关的语法术语'], answer: '使熟悉', explain: 'acquaint：使熟悉。' },
      { id: 'acquaint.q2', senseId: 'acquaint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acquaint?', options: ['使熟悉', 'a kind of ancient coin', 'the past tense of be'], answer: '使熟悉', explain: '对的是「使熟悉」。' },
      { id: 'acquaint.q3', senseId: 'acquaint.s1', errorType: 'grammar', type: '词义选择', prompt: 'acquaint 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'acquaint.q4', senseId: 'acquaint.s1', errorType: 'meaning', type: '词源', prompt: '记 acquaint 时，下面哪句更稳妥？', options: ['先锁住「使熟悉」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使熟悉」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使熟悉'] },
  });

  D('acquaintance', {
    etymology: {
      origin: '英语派生：acquaint 加上词尾，构成与「相识」相应的词类。',
      prefix: null,
      root: { text: 'acquaint', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acquaintance', text: '英语派生：acquaint 加上词尾，构成与「相识」相应的词类。' },
        { label: '现在', text: '核心用法是：相识。' },
      ],
      formationLogic: '先认词干 acquaint，再看词尾决定词性。',
      mnemonic: '看到 acquaintance，先说出「相识」，再放进一句自己的话。',
      note: '先认词干 acquaint，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acquaintance.', chinese: '这一章反复回到同一个点：相识。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acquaintance.s1', en: 'Without that acquaintance, the story would be hard to follow.', zh: '没有这个相识，故事会很难读下去。', structure: 'acquaintance / 在句中表示 / 相识', grammar: 'noun 用法，围绕「相识」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acquaintance.', right: 'He gave me a lot of advice about the acquaintance.', reason: 'advice 不可数。名词 acquaintance 的单复数也要按词典词形来，不要自造。', rule: '先确定 acquaintance 是noun，再套「相识」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acquaintance.q1', senseId: 'acquaintance.s1', errorType: 'meaning', type: '词义选择', prompt: '「acquaintance」在本条的核心意思是：', options: ['相识', '完全相反的意思', '与本词无关的语法术语'], answer: '相识', explain: 'acquaintance：相识。' },
      { id: 'acquaintance.q2', senseId: 'acquaintance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acquaintance?', options: ['相识', 'a kind of ancient coin', 'the past tense of be'], answer: '相识', explain: '对的是「相识」。' },
      { id: 'acquaintance.q3', senseId: 'acquaintance.s1', errorType: 'grammar', type: '词义选择', prompt: 'acquaintance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acquaintance.q4', senseId: 'acquaintance.s1', errorType: 'meaning', type: '词源', prompt: '记 acquaintance 时，下面哪句更稳妥？', options: ['先锁住「相识」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「相识」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相识'] },
  });

  D('acquainted', {
    etymology: {
      origin: '现代英语常用词「acquainted」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'acquainted', gloss: '熟悉的' },
      suffix: null,
      history: [
        { label: 'acquainted', text: '现代英语常用词「acquainted」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：熟悉的。' },
      ],
      formationLogic: '核心义：熟悉的。',
      mnemonic: '看到 acquainted，先说出「熟悉的」，再放进一句自己的话。',
      note: '核心义：熟悉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acquainted even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得熟悉的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acquainted.s1', en: 'They needed a acquainted answer, not a long speech.', zh: '他们要的是熟悉的的答复，不是长篇发言。', structure: 'acquainted / 在句中表示 / 熟悉的', grammar: 'adjective 用法，围绕「熟悉的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acquainted.', right: 'The news is acquainted.', reason: 'news 作主语时动词用单数。形容词 acquainted 放在系动词后面。', rule: '先确定 acquainted 是adjective，再套「熟悉的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acquainted.q1', senseId: 'acquainted.s1', errorType: 'meaning', type: '词义选择', prompt: '「acquainted」在本条的核心意思是：', options: ['熟悉的', '完全相反的意思', '与本词无关的语法术语'], answer: '熟悉的', explain: 'acquainted：熟悉的。' },
      { id: 'acquainted.q2', senseId: 'acquainted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acquainted?', options: ['熟悉的', 'a kind of ancient coin', 'the past tense of be'], answer: '熟悉的', explain: '对的是「熟悉的」。' },
      { id: 'acquainted.q3', senseId: 'acquainted.s1', errorType: 'grammar', type: '词义选择', prompt: 'acquainted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acquainted.q4', senseId: 'acquainted.s1', errorType: 'meaning', type: '词源', prompt: '记 acquainted 时，下面哪句更稳妥？', options: ['先锁住「熟悉的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「熟悉的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熟悉的'] },
  });

  D('acquisition', {
    etymology: {
      origin: '英语派生：acquisi 加上词尾，构成与「获得」相应的词类。',
      prefix: null,
      root: { text: 'acquisi', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acquisition', text: '英语派生：acquisi 加上词尾，构成与「获得」相应的词类。' },
        { label: '现在', text: '核心用法是：获得。' },
      ],
      formationLogic: '先认词干 acquisi，再看词尾决定词性。',
      mnemonic: '看到 acquisition，先说出「获得」，再放进一句自己的话。',
      note: '先认词干 acquisi，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acquisition.', chinese: '这一章反复回到同一个点：获得。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acquisition.s1', en: 'Without that acquisition, the story would be hard to follow.', zh: '没有这个获得，故事会很难读下去。', structure: 'acquisition / 在句中表示 / 获得', grammar: 'noun 用法，围绕「获得」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acquisition.', right: 'He gave me a lot of advice about the acquisition.', reason: 'advice 不可数。名词 acquisition 的单复数也要按词典词形来，不要自造。', rule: '先确定 acquisition 是noun，再套「获得」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acquisition.q1', senseId: 'acquisition.s1', errorType: 'meaning', type: '词义选择', prompt: '「acquisition」在本条的核心意思是：', options: ['获得', '完全相反的意思', '与本词无关的语法术语'], answer: '获得', explain: 'acquisition：获得。' },
      { id: 'acquisition.q2', senseId: 'acquisition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acquisition?', options: ['获得', 'a kind of ancient coin', 'the past tense of be'], answer: '获得', explain: '对的是「获得」。' },
      { id: 'acquisition.q3', senseId: 'acquisition.s1', errorType: 'grammar', type: '词义选择', prompt: 'acquisition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acquisition.q4', senseId: 'acquisition.s1', errorType: 'meaning', type: '词源', prompt: '记 acquisition 时，下面哪句更稳妥？', options: ['先锁住「获得」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「获得」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['获得'] },
  });

  D('acre', {
    etymology: {
      origin: '古英语 æcer「田地」，与拉丁语 ager「田」同源。',
      prefix: null,
      root: { text: 'acre', gloss: '英亩' },
      suffix: null,
      history: [
        { label: 'acre', text: '古英语 æcer「田地」，与拉丁语 ager「田」同源。' },
        { label: '现在', text: '核心用法是：英亩。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：英亩。',
      mnemonic: '看到 acre，先说出「英亩」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：英亩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acre.', chinese: '这一章反复回到同一个点：英亩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acre.s1', en: 'Without that acre, the story would be hard to follow.', zh: '没有这个英亩，故事会很难读下去。', structure: 'acre / 在句中表示 / 英亩', grammar: 'noun 用法，围绕「英亩」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acre.', right: 'He gave me a lot of advice about the acre.', reason: 'advice 不可数。名词 acre 的单复数也要按词典词形来，不要自造。', rule: '先确定 acre 是noun，再套「英亩」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acre.q1', senseId: 'acre.s1', errorType: 'meaning', type: '词义选择', prompt: '「acre」在本条的核心意思是：', options: ['英亩', '完全相反的意思', '与本词无关的语法术语'], answer: '英亩', explain: 'acre：英亩。' },
      { id: 'acre.q2', senseId: 'acre.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acre?', options: ['英亩', 'a kind of ancient coin', 'the past tense of be'], answer: '英亩', explain: '对的是「英亩」。' },
      { id: 'acre.q3', senseId: 'acre.s1', errorType: 'grammar', type: '词义选择', prompt: 'acre 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acre.q4', senseId: 'acre.s1', errorType: 'meaning', type: '词源', prompt: '记 acre 时，下面哪句更稳妥？', options: ['先锁住「英亩」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「英亩」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['英亩'] },
  });

  D('acrid', {
    etymology: {
      origin: '现代英语常用词「acrid」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'acrid', gloss: '（气味）刺鼻的' },
      suffix: null,
      history: [
        { label: 'acrid', text: '现代英语常用词「acrid」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（气味）刺鼻的。' },
      ],
      formationLogic: '核心义：（气味）刺鼻的。',
      mnemonic: '看到 acrid，先说出「（气味）刺鼻的」，再放进一句自己的话。',
      note: '核心义：（气味）刺鼻的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acrid even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得（气味）刺鼻的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acrid.s1', en: 'They needed a acrid answer, not a long speech.', zh: '他们要的是（气味）刺鼻的的答复，不是长篇发言。', structure: 'acrid / 在句中表示 / （气味）刺鼻的', grammar: 'adjective 用法，围绕「（气味）刺鼻的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acrid.', right: 'The news is acrid.', reason: 'news 作主语时动词用单数。形容词 acrid 放在系动词后面。', rule: '先确定 acrid 是adjective，再套「（气味）刺鼻的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acrid.q1', senseId: 'acrid.s1', errorType: 'meaning', type: '词义选择', prompt: '「acrid」在本条的核心意思是：', options: ['（气味）刺鼻的', '完全相反的意思', '与本词无关的语法术语'], answer: '（气味）刺鼻的', explain: 'acrid：（气味）刺鼻的。' },
      { id: 'acrid.q2', senseId: 'acrid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acrid?', options: ['（气味）刺鼻的', 'a kind of ancient coin', 'the past tense of be'], answer: '（气味）刺鼻的', explain: '对的是「（气味）刺鼻的」。' },
      { id: 'acrid.q3', senseId: 'acrid.s1', errorType: 'grammar', type: '词义选择', prompt: 'acrid 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acrid.q4', senseId: 'acrid.s1', errorType: 'meaning', type: '词源', prompt: '记 acrid 时，下面哪句更稳妥？', options: ['先锁住「（气味）刺鼻的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（气味）刺鼻的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（气味）刺鼻的'] },
  });

  D('across', {
    etymology: {
      origin: '中古英语 a- + cros「十字、交叉」。从一边到另一边。',
      prefix: null,
      root: { text: 'across', gloss: '横过' },
      suffix: null,
      history: [
        { label: 'across', text: '中古英语 a- + cros「十字、交叉」。从一边到另一边。' },
        { label: '现在', text: '核心用法是：横过。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：横过。',
      mnemonic: '看到 across，先说出「横过」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：横过。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "across" and asked what it does in the sentence.', chinese: '老师在「across」下面划了线，问它在句中起什么作用。它表示横过。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'across.s1', en: 'In the margin she wrote "across" so the reader would not miss that phrase.', zh: '她在页边写下「across」，免得读者漏掉这个说法。意思是横过。', structure: 'across / 在句中表示 / 横过', grammar: 'preposition 用法，围绕「横过」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated across word by word and lost the meaning.', right: 'He kept "across" as one phrase meaning 横过.', reason: '「across」是固定说法，拆开容易翻错。', rule: '先确定 across 是preposition，再套「横过」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'across.q1', senseId: 'across.s1', errorType: 'meaning', type: '词义选择', prompt: '「across」在本条的核心意思是：', options: ['横过', '完全相反的意思', '与本词无关的语法术语'], answer: '横过', explain: 'across：横过。' },
      { id: 'across.q2', senseId: 'across.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches across?', options: ['横过', 'a kind of ancient coin', 'the past tense of be'], answer: '横过', explain: '对的是「横过」。' },
      { id: 'across.q3', senseId: 'across.s1', errorType: 'grammar', type: '词义选择', prompt: 'across 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'across.q4', senseId: 'across.s1', errorType: 'meaning', type: '词源', prompt: '记 across 时，下面哪句更稳妥？', options: ['先锁住「横过」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「横过」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['横过'] },
  });

  D('across from', {
    etymology: {
      origin: '现代英语固定说法「across from」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'across from', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'across from', text: '现代英语固定说法「across from」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：在……对面。' },
      ],
      formationLogic: '常见义：在……对面。',
      mnemonic: '看到 across from，先说出「在……对面」，再放进一句自己的话。',
      note: '常见义：在……对面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "across from" and asked what it does in the sentence.', chinese: '老师在「across from」下面划了线，问它在句中起什么作用。它表示在……对面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'across from.s1', en: 'In the margin she wrote "across from" so the reader would not miss that phrase.', zh: '她在页边写下「across from」，免得读者漏掉这个说法。意思是在……对面。', structure: 'across from / 在句中表示 / 在……对面', grammar: 'preposition 用法，围绕「在……对面」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated across from word by word and lost the meaning.', right: 'He kept "across from" as one phrase meaning 在……对面.', reason: '「across from」是固定说法，拆开容易翻错。', rule: '先确定 across from 是preposition，再套「在……对面」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'across from.q1', senseId: 'across from.s1', errorType: 'meaning', type: '词义选择', prompt: '「across from」在本条的核心意思是：', options: ['在……对面', '完全相反的意思', '与本词无关的语法术语'], answer: '在……对面', explain: 'across from：在……对面。' },
      { id: 'across from.q2', senseId: 'across from.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches across from?', options: ['在……对面', 'a kind of ancient coin', 'the past tense of be'], answer: '在……对面', explain: '对的是「在……对面」。' },
      { id: 'across from.q3', senseId: 'across from.s1', errorType: 'grammar', type: '词义选择', prompt: 'across from 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'across from.q4', senseId: 'across from.s1', errorType: 'meaning', type: '词源', prompt: '记 across from 时，下面哪句更稳妥？', options: ['先锁住「在……对面」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在……对面」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在……对面'] },
  });

  D('act', {
    etymology: {
      origin: '拉丁语 actus「做出来的事」，agere「做、驱动」。',
      prefix: null,
      root: { text: 'act', gloss: '行动' },
      suffix: null,
      history: [
        { label: 'act', text: '拉丁语 actus「做出来的事」，agere「做、驱动」。' },
        { label: '现在', text: '核心用法是：行动。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：行动。',
      mnemonic: '看到 act，先说出「行动」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：行动。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to act before the office closed.', chinese: '小组得在办公室关门前完成这件事：行动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'act.s1', en: 'Nobody wanted to act, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 act 是「行动」。', structure: 'act / 在句中表示 / 行动', grammar: 'verb 用法，围绕「行动」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She acted the form yesterday without checking the real past form.', right: 'Look up the past form of "act" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 act 是verb，再套「行动」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'act.q1', senseId: 'act.s1', errorType: 'meaning', type: '词义选择', prompt: '「act」在本条的核心意思是：', options: ['行动', '完全相反的意思', '与本词无关的语法术语'], answer: '行动', explain: 'act：行动。' },
      { id: 'act.q2', senseId: 'act.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches act?', options: ['行动', 'a kind of ancient coin', 'the past tense of be'], answer: '行动', explain: '对的是「行动」。' },
      { id: 'act.q3', senseId: 'act.s1', errorType: 'grammar', type: '词义选择', prompt: 'act 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'act.q4', senseId: 'act.s1', errorType: 'meaning', type: '词源', prompt: '记 act 时，下面哪句更稳妥？', options: ['先锁住「行动」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「行动」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['行动'] },
  });

  D('act for', {
    etymology: {
      origin: '现代英语固定说法「act for」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'act for', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'act for', text: '现代英语固定说法「act for」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：代理。' },
      ],
      formationLogic: '常见义：代理。',
      mnemonic: '看到 act for，先说出「代理」，再放进一句自己的话。',
      note: '常见义：代理。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "act for" and asked what it does in the sentence.', chinese: '老师在「act for」下面划了线，问它在句中起什么作用。它表示代理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'act for.s1', en: 'In the margin she wrote "act for" so the reader would not miss that phrase.', zh: '她在页边写下「act for」，免得读者漏掉这个说法。意思是代理。', structure: 'act for / 在句中表示 / 代理', grammar: 'verb 用法，围绕「代理」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated act for word by word and lost the meaning.', right: 'He kept "act for" as one phrase meaning 代理.', reason: '「act for」是固定说法，拆开容易翻错。', rule: '先确定 act for 是verb，再套「代理」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'act for.q1', senseId: 'act for.s1', errorType: 'meaning', type: '词义选择', prompt: '「act for」在本条的核心意思是：', options: ['代理', '完全相反的意思', '与本词无关的语法术语'], answer: '代理', explain: 'act for：代理。' },
      { id: 'act for.q2', senseId: 'act for.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches act for?', options: ['代理', 'a kind of ancient coin', 'the past tense of be'], answer: '代理', explain: '对的是「代理」。' },
      { id: 'act for.q3', senseId: 'act for.s1', errorType: 'grammar', type: '词义选择', prompt: 'act for 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'act for.q4', senseId: 'act for.s1', errorType: 'meaning', type: '词源', prompt: '记 act for 时，下面哪句更稳妥？', options: ['先锁住「代理」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「代理」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['代理'] },
  });

  D('act out', {
    etymology: {
      origin: '现代英语固定说法「act out」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'act out', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'act out', text: '现代英语固定说法「act out」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：表演出来。' },
      ],
      formationLogic: '常见义：表演出来。',
      mnemonic: '看到 act out，先说出「表演出来」，再放进一句自己的话。',
      note: '常见义：表演出来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "act out" and asked what it does in the sentence.', chinese: '老师在「act out」下面划了线，问它在句中起什么作用。它表示表演出来。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'act out.s1', en: 'In the margin she wrote "act out" so the reader would not miss that phrase.', zh: '她在页边写下「act out」，免得读者漏掉这个说法。意思是表演出来。', structure: 'act out / 在句中表示 / 表演出来', grammar: 'verb 用法，围绕「表演出来」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated act out word by word and lost the meaning.', right: 'He kept "act out" as one phrase meaning 表演出来.', reason: '「act out」是固定说法，拆开容易翻错。', rule: '先确定 act out 是verb，再套「表演出来」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'act out.q1', senseId: 'act out.s1', errorType: 'meaning', type: '词义选择', prompt: '「act out」在本条的核心意思是：', options: ['表演出来', '完全相反的意思', '与本词无关的语法术语'], answer: '表演出来', explain: 'act out：表演出来。' },
      { id: 'act out.q2', senseId: 'act out.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches act out?', options: ['表演出来', 'a kind of ancient coin', 'the past tense of be'], answer: '表演出来', explain: '对的是「表演出来」。' },
      { id: 'act out.q3', senseId: 'act out.s1', errorType: 'grammar', type: '词义选择', prompt: 'act out 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'act out.q4', senseId: 'act out.s1', errorType: 'meaning', type: '词源', prompt: '记 act out 时，下面哪句更稳妥？', options: ['先锁住「表演出来」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「表演出来」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['表演出来'] },
  });

  D('acting', {
    etymology: {
      origin: '现代英语常用词「acting」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'acting', gloss: '表演' },
      suffix: null,
      history: [
        { label: 'acting', text: '现代英语常用词「acting」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：表演。' },
      ],
      formationLogic: '核心义：表演。',
      mnemonic: '看到 acting，先说出「表演」，再放进一句自己的话。',
      note: '核心义：表演。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acting.', chinese: '这一章反复回到同一个点：表演。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acting.s1', en: 'Without that acting, the story would be hard to follow.', zh: '没有这个表演，故事会很难读下去。', structure: 'acting / 在句中表示 / 表演', grammar: 'noun 用法，围绕「表演」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acting.', right: 'He gave me a lot of advice about the acting.', reason: 'advice 不可数。名词 acting 的单复数也要按词典词形来，不要自造。', rule: '先确定 acting 是noun，再套「表演」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acting.q1', senseId: 'acting.s1', errorType: 'meaning', type: '词义选择', prompt: '「acting」在本条的核心意思是：', options: ['表演', '完全相反的意思', '与本词无关的语法术语'], answer: '表演', explain: 'acting：表演。' },
      { id: 'acting.q2', senseId: 'acting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acting?', options: ['表演', 'a kind of ancient coin', 'the past tense of be'], answer: '表演', explain: '对的是「表演」。' },
      { id: 'acting.q3', senseId: 'acting.s1', errorType: 'grammar', type: '词义选择', prompt: 'acting 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acting.q4', senseId: 'acting.s1', errorType: 'meaning', type: '词源', prompt: '记 acting 时，下面哪句更稳妥？', options: ['先锁住「表演」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「表演」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['表演'] },
  });

  D('action', {
    etymology: {
      origin: '拉丁语 actio，agere「做」。',
      prefix: null,
      root: { text: 'action', gloss: '行动' },
      suffix: null,
      history: [
        { label: 'action', text: '拉丁语 actio，agere「做」。' },
        { label: '现在', text: '核心用法是：行动。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：行动。',
      mnemonic: '看到 action，先说出「行动」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：行动。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one action.', chinese: '这一章反复回到同一个点：行动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'action.s1', en: 'Without that action, the story would be hard to follow.', zh: '没有这个行动，故事会很难读下去。', structure: 'action / 在句中表示 / 行动', grammar: 'noun 用法，围绕「行动」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the action.', right: 'He gave me a lot of advice about the action.', reason: 'advice 不可数。名词 action 的单复数也要按词典词形来，不要自造。', rule: '先确定 action 是noun，再套「行动」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'action.q1', senseId: 'action.s1', errorType: 'meaning', type: '词义选择', prompt: '「action」在本条的核心意思是：', options: ['行动', '完全相反的意思', '与本词无关的语法术语'], answer: '行动', explain: 'action：行动。' },
      { id: 'action.q2', senseId: 'action.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches action?', options: ['行动', 'a kind of ancient coin', 'the past tense of be'], answer: '行动', explain: '对的是「行动」。' },
      { id: 'action.q3', senseId: 'action.s1', errorType: 'grammar', type: '词义选择', prompt: 'action 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'action.q4', senseId: 'action.s1', errorType: 'meaning', type: '词源', prompt: '记 action 时，下面哪句更稳妥？', options: ['先锁住「行动」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「行动」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['行动'] },
  });

  D('activate', {
    etymology: {
      origin: '现代英语常用词「activate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'activate', gloss: '激活' },
      suffix: null,
      history: [
        { label: 'activate', text: '现代英语常用词「activate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：激活。' },
      ],
      formationLogic: '核心义：激活。',
      mnemonic: '看到 activate，先说出「激活」，再放进一句自己的话。',
      note: '核心义：激活。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to activate before the office closed.', chinese: '小组得在办公室关门前完成这件事：激活。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'activate.s1', en: 'Nobody wanted to activate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 activate 是「激活」。', structure: 'activate / 在句中表示 / 激活', grammar: 'verb 用法，围绕「激活」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She activateed the form yesterday without checking the real past form.', right: 'Look up the past form of "activate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 activate 是verb，再套「激活」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'activate.q1', senseId: 'activate.s1', errorType: 'meaning', type: '词义选择', prompt: '「activate」在本条的核心意思是：', options: ['激活', '完全相反的意思', '与本词无关的语法术语'], answer: '激活', explain: 'activate：激活。' },
      { id: 'activate.q2', senseId: 'activate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches activate?', options: ['激活', 'a kind of ancient coin', 'the past tense of be'], answer: '激活', explain: '对的是「激活」。' },
      { id: 'activate.q3', senseId: 'activate.s1', errorType: 'grammar', type: '词义选择', prompt: 'activate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'activate.q4', senseId: 'activate.s1', errorType: 'meaning', type: '词源', prompt: '记 activate 时，下面哪句更稳妥？', options: ['先锁住「激活」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「激活」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['激活'] },
  });

  D('activation', {
    etymology: {
      origin: '英语派生：activa 加上词尾，构成与「激活」相应的词类。',
      prefix: null,
      root: { text: 'activa', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'activation', text: '英语派生：activa 加上词尾，构成与「激活」相应的词类。' },
        { label: '现在', text: '核心用法是：激活。' },
      ],
      formationLogic: '先认词干 activa，再看词尾决定词性。',
      mnemonic: '看到 activation，先说出「激活」，再放进一句自己的话。',
      note: '先认词干 activa，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one activation.', chinese: '这一章反复回到同一个点：激活。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'activation.s1', en: 'Without that activation, the story would be hard to follow.', zh: '没有这个激活，故事会很难读下去。', structure: 'activation / 在句中表示 / 激活', grammar: 'noun 用法，围绕「激活」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the activation.', right: 'He gave me a lot of advice about the activation.', reason: 'advice 不可数。名词 activation 的单复数也要按词典词形来，不要自造。', rule: '先确定 activation 是noun，再套「激活」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'activation.q1', senseId: 'activation.s1', errorType: 'meaning', type: '词义选择', prompt: '「activation」在本条的核心意思是：', options: ['激活', '完全相反的意思', '与本词无关的语法术语'], answer: '激活', explain: 'activation：激活。' },
      { id: 'activation.q2', senseId: 'activation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches activation?', options: ['激活', 'a kind of ancient coin', 'the past tense of be'], answer: '激活', explain: '对的是「激活」。' },
      { id: 'activation.q3', senseId: 'activation.s1', errorType: 'grammar', type: '词义选择', prompt: 'activation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'activation.q4', senseId: 'activation.s1', errorType: 'meaning', type: '词源', prompt: '记 activation 时，下面哪句更稳妥？', options: ['先锁住「激活」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「激活」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['激活'] },
  });

  D('active', {
    etymology: {
      origin: '拉丁语 activus，agere「做」。',
      prefix: null,
      root: { text: 'active', gloss: '活跃的' },
      suffix: null,
      history: [
        { label: 'active', text: '拉丁语 activus，agere「做」。' },
        { label: '现在', text: '核心用法是：活跃的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：活跃的。',
      mnemonic: '看到 active，先说出「活跃的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：活跃的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked active even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得活跃的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'active.s1', en: 'They needed a active answer, not a long speech.', zh: '他们要的是活跃的的答复，不是长篇发言。', structure: 'active / 在句中表示 / 活跃的', grammar: 'adjective 用法，围绕「活跃的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are active.', right: 'The news is active.', reason: 'news 作主语时动词用单数。形容词 active 放在系动词后面。', rule: '先确定 active 是adjective，再套「活跃的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'active.q1', senseId: 'active.s1', errorType: 'meaning', type: '词义选择', prompt: '「active」在本条的核心意思是：', options: ['活跃的', '完全相反的意思', '与本词无关的语法术语'], answer: '活跃的', explain: 'active：活跃的。' },
      { id: 'active.q2', senseId: 'active.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches active?', options: ['活跃的', 'a kind of ancient coin', 'the past tense of be'], answer: '活跃的', explain: '对的是「活跃的」。' },
      { id: 'active.q3', senseId: 'active.s1', errorType: 'grammar', type: '词义选择', prompt: 'active 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'active.q4', senseId: 'active.s1', errorType: 'meaning', type: '词源', prompt: '记 active 时，下面哪句更稳妥？', options: ['先锁住「活跃的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「活跃的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['活跃的'] },
  });

  D('actively', {
    etymology: {
      origin: '英语派生：active 加上词尾，构成与「积极地」相应的词类。',
      prefix: null,
      root: { text: 'active', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'actively', text: '英语派生：active 加上词尾，构成与「积极地」相应的词类。' },
        { label: '现在', text: '核心用法是：积极地。' },
      ],
      formationLogic: '先认词干 active，再看词尾决定词性。',
      mnemonic: '看到 actively，先说出「积极地」，再放进一句自己的话。',
      note: '先认词干 active，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule actively, and the class finally followed it.', chinese: '她把规则讲得让人明白（积极地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'actively.s1', en: 'He nodded actively and went back to his notes.', zh: '他积极地地点了点头，又回去看笔记。', structure: 'actively / 在句中表示 / 积极地', grammar: 'adverb 用法，围绕「积极地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very activelyly.', right: 'She spoke actively.', reason: 'actively 已经是副词，不要再加 -ly。', rule: '先确定 actively 是adverb，再套「积极地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'actively.q1', senseId: 'actively.s1', errorType: 'meaning', type: '词义选择', prompt: '「actively」在本条的核心意思是：', options: ['积极地', '完全相反的意思', '与本词无关的语法术语'], answer: '积极地', explain: 'actively：积极地。' },
      { id: 'actively.q2', senseId: 'actively.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches actively?', options: ['积极地', 'a kind of ancient coin', 'the past tense of be'], answer: '积极地', explain: '对的是「积极地」。' },
      { id: 'actively.q3', senseId: 'actively.s1', errorType: 'grammar', type: '词义选择', prompt: 'actively 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'actively.q4', senseId: 'actively.s1', errorType: 'meaning', type: '词源', prompt: '记 actively 时，下面哪句更稳妥？', options: ['先锁住「积极地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「积极地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['积极地'] },
  });

  D('activist', {
    etymology: {
      origin: '英语派生：activ 加上词尾，构成与「积极分子」相应的词类。',
      prefix: null,
      root: { text: 'activ', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'activist', text: '英语派生：activ 加上词尾，构成与「积极分子」相应的词类。' },
        { label: '现在', text: '核心用法是：积极分子。' },
      ],
      formationLogic: '先认词干 activ，再看词尾决定词性。',
      mnemonic: '看到 activist，先说出「积极分子」，再放进一句自己的话。',
      note: '先认词干 activ，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one activist.', chinese: '这一章反复回到同一个点：积极分子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'activist.s1', en: 'Without that activist, the story would be hard to follow.', zh: '没有这个积极分子，故事会很难读下去。', structure: 'activist / 在句中表示 / 积极分子', grammar: 'noun 用法，围绕「积极分子」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the activist.', right: 'He gave me a lot of advice about the activist.', reason: 'advice 不可数。名词 activist 的单复数也要按词典词形来，不要自造。', rule: '先确定 activist 是noun，再套「积极分子」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'activist.q1', senseId: 'activist.s1', errorType: 'meaning', type: '词义选择', prompt: '「activist」在本条的核心意思是：', options: ['积极分子', '完全相反的意思', '与本词无关的语法术语'], answer: '积极分子', explain: 'activist：积极分子。' },
      { id: 'activist.q2', senseId: 'activist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches activist?', options: ['积极分子', 'a kind of ancient coin', 'the past tense of be'], answer: '积极分子', explain: '对的是「积极分子」。' },
      { id: 'activist.q3', senseId: 'activist.s1', errorType: 'grammar', type: '词义选择', prompt: 'activist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'activist.q4', senseId: 'activist.s1', errorType: 'meaning', type: '词源', prompt: '记 activist 时，下面哪句更稳妥？', options: ['先锁住「积极分子」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「积极分子」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['积极分子'] },
  });

  D('activity', {
    etymology: {
      origin: '英语派生：activ 加上词尾，构成与「活动」相应的词类。',
      prefix: null,
      root: { text: 'activ', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'activity', text: '英语派生：activ 加上词尾，构成与「活动」相应的词类。' },
        { label: '现在', text: '核心用法是：活动。' },
      ],
      formationLogic: '先认词干 activ，再看词尾决定词性。',
      mnemonic: '看到 activity，先说出「活动」，再放进一句自己的话。',
      note: '先认词干 activ，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one activity.', chinese: '这一章反复回到同一个点：活动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'activity.s1', en: 'Without that activity, the story would be hard to follow.', zh: '没有这个活动，故事会很难读下去。', structure: 'activity / 在句中表示 / 活动', grammar: 'noun 用法，围绕「活动」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the activity.', right: 'He gave me a lot of advice about the activity.', reason: 'advice 不可数。名词 activity 的单复数也要按词典词形来，不要自造。', rule: '先确定 activity 是noun，再套「活动」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'activity.q1', senseId: 'activity.s1', errorType: 'meaning', type: '词义选择', prompt: '「activity」在本条的核心意思是：', options: ['活动', '完全相反的意思', '与本词无关的语法术语'], answer: '活动', explain: 'activity：活动。' },
      { id: 'activity.q2', senseId: 'activity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches activity?', options: ['活动', 'a kind of ancient coin', 'the past tense of be'], answer: '活动', explain: '对的是「活动」。' },
      { id: 'activity.q3', senseId: 'activity.s1', errorType: 'grammar', type: '词义选择', prompt: 'activity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'activity.q4', senseId: 'activity.s1', errorType: 'meaning', type: '词源', prompt: '记 activity 时，下面哪句更稳妥？', options: ['先锁住「活动」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「活动」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['活动'] },
  });

  D('actor', {
    etymology: {
      origin: '拉丁语 actor「做事的人」。',
      prefix: null,
      root: { text: 'actor', gloss: '演员' },
      suffix: null,
      history: [
        { label: 'actor', text: '拉丁语 actor「做事的人」。' },
        { label: '现在', text: '核心用法是：演员。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：演员。',
      mnemonic: '看到 actor，先说出「演员」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：演员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one actor.', chinese: '这一章反复回到同一个点：演员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'actor.s1', en: 'Without that actor, the story would be hard to follow.', zh: '没有这个演员，故事会很难读下去。', structure: 'actor / 在句中表示 / 演员', grammar: 'noun 用法，围绕「演员」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the actor.', right: 'He gave me a lot of advice about the actor.', reason: 'advice 不可数。名词 actor 的单复数也要按词典词形来，不要自造。', rule: '先确定 actor 是noun，再套「演员」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'actor.q1', senseId: 'actor.s1', errorType: 'meaning', type: '词义选择', prompt: '「actor」在本条的核心意思是：', options: ['演员', '完全相反的意思', '与本词无关的语法术语'], answer: '演员', explain: 'actor：演员。' },
      { id: 'actor.q2', senseId: 'actor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches actor?', options: ['演员', 'a kind of ancient coin', 'the past tense of be'], answer: '演员', explain: '对的是「演员」。' },
      { id: 'actor.q3', senseId: 'actor.s1', errorType: 'grammar', type: '词义选择', prompt: 'actor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'actor.q4', senseId: 'actor.s1', errorType: 'meaning', type: '词源', prompt: '记 actor 时，下面哪句更稳妥？', options: ['先锁住「演员」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「演员」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['演员'] },
  });

  D('actress', {
    etymology: {
      origin: '现代英语常用词「actress」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'actress', gloss: '女演员' },
      suffix: null,
      history: [
        { label: 'actress', text: '现代英语常用词「actress」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：女演员。' },
      ],
      formationLogic: '核心义：女演员。',
      mnemonic: '看到 actress，先说出「女演员」，再放进一句自己的话。',
      note: '核心义：女演员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one actress.', chinese: '这一章反复回到同一个点：女演员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'actress.s1', en: 'Without that actress, the story would be hard to follow.', zh: '没有这个女演员，故事会很难读下去。', structure: 'actress / 在句中表示 / 女演员', grammar: 'noun 用法，围绕「女演员」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the actress.', right: 'He gave me a lot of advice about the actress.', reason: 'advice 不可数。名词 actress 的单复数也要按词典词形来，不要自造。', rule: '先确定 actress 是noun，再套「女演员」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'actress.q1', senseId: 'actress.s1', errorType: 'meaning', type: '词义选择', prompt: '「actress」在本条的核心意思是：', options: ['女演员', '完全相反的意思', '与本词无关的语法术语'], answer: '女演员', explain: 'actress：女演员。' },
      { id: 'actress.q2', senseId: 'actress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches actress?', options: ['女演员', 'a kind of ancient coin', 'the past tense of be'], answer: '女演员', explain: '对的是「女演员」。' },
      { id: 'actress.q3', senseId: 'actress.s1', errorType: 'grammar', type: '词义选择', prompt: 'actress 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'actress.q4', senseId: 'actress.s1', errorType: 'meaning', type: '词源', prompt: '记 actress 时，下面哪句更稳妥？', options: ['先锁住「女演员」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「女演员」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女演员'] },
  });

  D('actual', {
    etymology: {
      origin: '拉丁语 actualis「做出来的、现实的」。',
      prefix: null,
      root: { text: 'actual', gloss: '实际的' },
      suffix: null,
      history: [
        { label: 'actual', text: '拉丁语 actualis「做出来的、现实的」。' },
        { label: '现在', text: '核心用法是：实际的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：实际的。',
      mnemonic: '看到 actual，先说出「实际的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：实际的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked actual even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得实际的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'actual.s1', en: 'They needed a actual answer, not a long speech.', zh: '他们要的是实际的的答复，不是长篇发言。', structure: 'actual / 在句中表示 / 实际的', grammar: 'adjective 用法，围绕「实际的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are actual.', right: 'The news is actual.', reason: 'news 作主语时动词用单数。形容词 actual 放在系动词后面。', rule: '先确定 actual 是adjective，再套「实际的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'actual.q1', senseId: 'actual.s1', errorType: 'meaning', type: '词义选择', prompt: '「actual」在本条的核心意思是：', options: ['实际的', '完全相反的意思', '与本词无关的语法术语'], answer: '实际的', explain: 'actual：实际的。' },
      { id: 'actual.q2', senseId: 'actual.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches actual?', options: ['实际的', 'a kind of ancient coin', 'the past tense of be'], answer: '实际的', explain: '对的是「实际的」。' },
      { id: 'actual.q3', senseId: 'actual.s1', errorType: 'grammar', type: '词义选择', prompt: 'actual 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'actual.q4', senseId: 'actual.s1', errorType: 'meaning', type: '词源', prompt: '记 actual 时，下面哪句更稳妥？', options: ['先锁住「实际的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「实际的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['实际的'] },
  });

  D('actually', {
    etymology: {
      origin: '英语派生：actual 加上词尾，构成与「实际上」相应的词类。',
      prefix: null,
      root: { text: 'actual', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'actually', text: '英语派生：actual 加上词尾，构成与「实际上」相应的词类。' },
        { label: '现在', text: '核心用法是：实际上。' },
      ],
      formationLogic: '先认词干 actual，再看词尾决定词性。',
      mnemonic: '看到 actually，先说出「实际上」，再放进一句自己的话。',
      note: '先认词干 actual，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule actually, and the class finally followed it.', chinese: '她把规则讲得让人明白（实际上），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'actually.s1', en: 'He nodded actually and went back to his notes.', zh: '他实际上地点了点头，又回去看笔记。', structure: 'actually / 在句中表示 / 实际上', grammar: 'adverb 用法，围绕「实际上」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very actuallyly.', right: 'She spoke actually.', reason: 'actually 已经是副词，不要再加 -ly。', rule: '先确定 actually 是adverb，再套「实际上」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'actually.q1', senseId: 'actually.s1', errorType: 'meaning', type: '词义选择', prompt: '「actually」在本条的核心意思是：', options: ['实际上', '完全相反的意思', '与本词无关的语法术语'], answer: '实际上', explain: 'actually：实际上。' },
      { id: 'actually.q2', senseId: 'actually.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches actually?', options: ['实际上', 'a kind of ancient coin', 'the past tense of be'], answer: '实际上', explain: '对的是「实际上」。' },
      { id: 'actually.q3', senseId: 'actually.s1', errorType: 'grammar', type: '词义选择', prompt: 'actually 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'actually.q4', senseId: 'actually.s1', errorType: 'meaning', type: '词源', prompt: '记 actually 时，下面哪句更稳妥？', options: ['先锁住「实际上」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「实际上」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['实际上'] },
  });

  D('acupuncture', {
    etymology: {
      origin: '现代英语常用词「acupuncture」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'acupuncture', gloss: '针灸' },
      suffix: null,
      history: [
        { label: 'acupuncture', text: '现代英语常用词「acupuncture」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：针灸。' },
      ],
      formationLogic: '核心义：针灸。',
      mnemonic: '看到 acupuncture，先说出「针灸」，再放进一句自己的话。',
      note: '核心义：针灸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one acupuncture.', chinese: '这一章反复回到同一个点：针灸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acupuncture.s1', en: 'Without that acupuncture, the story would be hard to follow.', zh: '没有这个针灸，故事会很难读下去。', structure: 'acupuncture / 在句中表示 / 针灸', grammar: 'noun 用法，围绕「针灸」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the acupuncture.', right: 'He gave me a lot of advice about the acupuncture.', reason: 'advice 不可数。名词 acupuncture 的单复数也要按词典词形来，不要自造。', rule: '先确定 acupuncture 是noun，再套「针灸」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acupuncture.q1', senseId: 'acupuncture.s1', errorType: 'meaning', type: '词义选择', prompt: '「acupuncture」在本条的核心意思是：', options: ['针灸', '完全相反的意思', '与本词无关的语法术语'], answer: '针灸', explain: 'acupuncture：针灸。' },
      { id: 'acupuncture.q2', senseId: 'acupuncture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acupuncture?', options: ['针灸', 'a kind of ancient coin', 'the past tense of be'], answer: '针灸', explain: '对的是「针灸」。' },
      { id: 'acupuncture.q3', senseId: 'acupuncture.s1', errorType: 'grammar', type: '词义选择', prompt: 'acupuncture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'acupuncture.q4', senseId: 'acupuncture.s1', errorType: 'meaning', type: '词源', prompt: '记 acupuncture 时，下面哪句更稳妥？', options: ['先锁住「针灸」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「针灸」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['针灸'] },
  });

  D('acute', {
    etymology: {
      origin: '拉丁语 acutus「磨尖的」。',
      prefix: null,
      root: { text: 'acute', gloss: '严重的' },
      suffix: null,
      history: [
        { label: 'acute', text: '拉丁语 acutus「磨尖的」。' },
        { label: '现在', text: '核心用法是：严重的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：严重的。',
      mnemonic: '看到 acute，先说出「严重的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：严重的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked acute even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得严重的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acute.s1', en: 'They needed a acute answer, not a long speech.', zh: '他们要的是严重的的答复，不是长篇发言。', structure: 'acute / 在句中表示 / 严重的', grammar: 'adjective 用法，围绕「严重的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are acute.', right: 'The news is acute.', reason: 'news 作主语时动词用单数。形容词 acute 放在系动词后面。', rule: '先确定 acute 是adjective，再套「严重的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acute.q1', senseId: 'acute.s1', errorType: 'meaning', type: '词义选择', prompt: '「acute」在本条的核心意思是：', options: ['严重的', '完全相反的意思', '与本词无关的语法术语'], answer: '严重的', explain: 'acute：严重的。' },
      { id: 'acute.q2', senseId: 'acute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acute?', options: ['严重的', 'a kind of ancient coin', 'the past tense of be'], answer: '严重的', explain: '对的是「严重的」。' },
      { id: 'acute.q3', senseId: 'acute.s1', errorType: 'grammar', type: '词义选择', prompt: 'acute 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'acute.q4', senseId: 'acute.s1', errorType: 'meaning', type: '词源', prompt: '记 acute 时，下面哪句更稳妥？', options: ['先锁住「严重的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「严重的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['严重的'] },
  });

  D('acutely', {
    etymology: {
      origin: '英语派生：acute 加上词尾，构成与「极度地」相应的词类。',
      prefix: null,
      root: { text: 'acute', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'acutely', text: '英语派生：acute 加上词尾，构成与「极度地」相应的词类。' },
        { label: '现在', text: '核心用法是：极度地。' },
      ],
      formationLogic: '先认词干 acute，再看词尾决定词性。',
      mnemonic: '看到 acutely，先说出「极度地」，再放进一句自己的话。',
      note: '先认词干 acute，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule acutely, and the class finally followed it.', chinese: '她把规则讲得让人明白（极度地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'acutely.s1', en: 'He nodded acutely and went back to his notes.', zh: '他极度地地点了点头，又回去看笔记。', structure: 'acutely / 在句中表示 / 极度地', grammar: 'adverb 用法，围绕「极度地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very acutelyly.', right: 'She spoke acutely.', reason: 'acutely 已经是副词，不要再加 -ly。', rule: '先确定 acutely 是adverb，再套「极度地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'acutely.q1', senseId: 'acutely.s1', errorType: 'meaning', type: '词义选择', prompt: '「acutely」在本条的核心意思是：', options: ['极度地', '完全相反的意思', '与本词无关的语法术语'], answer: '极度地', explain: 'acutely：极度地。' },
      { id: 'acutely.q2', senseId: 'acutely.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches acutely?', options: ['极度地', 'a kind of ancient coin', 'the past tense of be'], answer: '极度地', explain: '对的是「极度地」。' },
      { id: 'acutely.q3', senseId: 'acutely.s1', errorType: 'grammar', type: '词义选择', prompt: 'acutely 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'acutely.q4', senseId: 'acutely.s1', errorType: 'meaning', type: '词源', prompt: '记 acutely 时，下面哪句更稳妥？', options: ['先锁住「极度地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「极度地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极度地'] },
  });

  D('adaptability', {
    etymology: {
      origin: '英语派生：adapt 加上词尾，构成与「适应能力」相应的词类。',
      prefix: null,
      root: { text: 'adapt', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adaptability', text: '英语派生：adapt 加上词尾，构成与「适应能力」相应的词类。' },
        { label: '现在', text: '核心用法是：适应能力。' },
      ],
      formationLogic: '先认词干 adapt，再看词尾决定词性。',
      mnemonic: '看到 adaptability，先说出「适应能力」，再放进一句自己的话。',
      note: '先认词干 adapt，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adaptability.', chinese: '这一章反复回到同一个点：适应能力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adaptability.s1', en: 'Without that adaptability, the story would be hard to follow.', zh: '没有这个适应能力，故事会很难读下去。', structure: 'adaptability / 在句中表示 / 适应能力', grammar: 'noun 用法，围绕「适应能力」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adaptability.', right: 'He gave me a lot of advice about the adaptability.', reason: 'advice 不可数。名词 adaptability 的单复数也要按词典词形来，不要自造。', rule: '先确定 adaptability 是noun，再套「适应能力」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adaptability.q1', senseId: 'adaptability.s1', errorType: 'meaning', type: '词义选择', prompt: '「adaptability」在本条的核心意思是：', options: ['适应能力', '完全相反的意思', '与本词无关的语法术语'], answer: '适应能力', explain: 'adaptability：适应能力。' },
      { id: 'adaptability.q2', senseId: 'adaptability.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adaptability?', options: ['适应能力', 'a kind of ancient coin', 'the past tense of be'], answer: '适应能力', explain: '对的是「适应能力」。' },
      { id: 'adaptability.q3', senseId: 'adaptability.s1', errorType: 'grammar', type: '词义选择', prompt: 'adaptability 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adaptability.q4', senseId: 'adaptability.s1', errorType: 'meaning', type: '词源', prompt: '记 adaptability 时，下面哪句更稳妥？', options: ['先锁住「适应能力」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「适应能力」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['适应能力'] },
  });

  D('adaptable', {
    etymology: {
      origin: '英语派生：adapt 加上词尾，构成与「能适应的」相应的词类。',
      prefix: null,
      root: { text: 'adapt', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adaptable', text: '英语派生：adapt 加上词尾，构成与「能适应的」相应的词类。' },
        { label: '现在', text: '核心用法是：能适应的。' },
      ],
      formationLogic: '先认词干 adapt，再看词尾决定词性。',
      mnemonic: '看到 adaptable，先说出「能适应的」，再放进一句自己的话。',
      note: '先认词干 adapt，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adaptable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得能适应的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adaptable.s1', en: 'They needed a adaptable answer, not a long speech.', zh: '他们要的是能适应的的答复，不是长篇发言。', structure: 'adaptable / 在句中表示 / 能适应的', grammar: 'adjective 用法，围绕「能适应的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adaptable.', right: 'The news is adaptable.', reason: 'news 作主语时动词用单数。形容词 adaptable 放在系动词后面。', rule: '先确定 adaptable 是adjective，再套「能适应的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adaptable.q1', senseId: 'adaptable.s1', errorType: 'meaning', type: '词义选择', prompt: '「adaptable」在本条的核心意思是：', options: ['能适应的', '完全相反的意思', '与本词无关的语法术语'], answer: '能适应的', explain: 'adaptable：能适应的。' },
      { id: 'adaptable.q2', senseId: 'adaptable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adaptable?', options: ['能适应的', 'a kind of ancient coin', 'the past tense of be'], answer: '能适应的', explain: '对的是「能适应的」。' },
      { id: 'adaptable.q3', senseId: 'adaptable.s1', errorType: 'grammar', type: '词义选择', prompt: 'adaptable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adaptable.q4', senseId: 'adaptable.s1', errorType: 'meaning', type: '词源', prompt: '记 adaptable 时，下面哪句更稳妥？', options: ['先锁住「能适应的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「能适应的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['能适应的'] },
  });

  D('adaptation', {
    etymology: {
      origin: '英语派生：adapta 加上词尾，构成与「适应」相应的词类。',
      prefix: null,
      root: { text: 'adapta', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adaptation', text: '英语派生：adapta 加上词尾，构成与「适应」相应的词类。' },
        { label: '现在', text: '核心用法是：适应。' },
      ],
      formationLogic: '先认词干 adapta，再看词尾决定词性。',
      mnemonic: '看到 adaptation，先说出「适应」，再放进一句自己的话。',
      note: '先认词干 adapta，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adaptation.', chinese: '这一章反复回到同一个点：适应。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adaptation.s1', en: 'Without that adaptation, the story would be hard to follow.', zh: '没有这个适应，故事会很难读下去。', structure: 'adaptation / 在句中表示 / 适应', grammar: 'noun 用法，围绕「适应」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adaptation.', right: 'He gave me a lot of advice about the adaptation.', reason: 'advice 不可数。名词 adaptation 的单复数也要按词典词形来，不要自造。', rule: '先确定 adaptation 是noun，再套「适应」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adaptation.q1', senseId: 'adaptation.s1', errorType: 'meaning', type: '词义选择', prompt: '「adaptation」在本条的核心意思是：', options: ['适应', '完全相反的意思', '与本词无关的语法术语'], answer: '适应', explain: 'adaptation：适应。' },
      { id: 'adaptation.q2', senseId: 'adaptation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adaptation?', options: ['适应', 'a kind of ancient coin', 'the past tense of be'], answer: '适应', explain: '对的是「适应」。' },
      { id: 'adaptation.q3', senseId: 'adaptation.s1', errorType: 'grammar', type: '词义选择', prompt: 'adaptation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adaptation.q4', senseId: 'adaptation.s1', errorType: 'meaning', type: '词源', prompt: '记 adaptation 时，下面哪句更稳妥？', options: ['先锁住「适应」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「适应」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['适应'] },
  });

  D('adapted', {
    etymology: {
      origin: '现代英语常用词「adapted」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adapted', gloss: '已适应的' },
      suffix: null,
      history: [
        { label: 'adapted', text: '现代英语常用词「adapted」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：已适应的。' },
      ],
      formationLogic: '核心义：已适应的。',
      mnemonic: '看到 adapted，先说出「已适应的」，再放进一句自己的话。',
      note: '核心义：已适应的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adapted even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得已适应的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adapted.s1', en: 'They needed a adapted answer, not a long speech.', zh: '他们要的是已适应的的答复，不是长篇发言。', structure: 'adapted / 在句中表示 / 已适应的', grammar: 'adjective 用法，围绕「已适应的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adapted.', right: 'The news is adapted.', reason: 'news 作主语时动词用单数。形容词 adapted 放在系动词后面。', rule: '先确定 adapted 是adjective，再套「已适应的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adapted.q1', senseId: 'adapted.s1', errorType: 'meaning', type: '词义选择', prompt: '「adapted」在本条的核心意思是：', options: ['已适应的', '完全相反的意思', '与本词无关的语法术语'], answer: '已适应的', explain: 'adapted：已适应的。' },
      { id: 'adapted.q2', senseId: 'adapted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adapted?', options: ['已适应的', 'a kind of ancient coin', 'the past tense of be'], answer: '已适应的', explain: '对的是「已适应的」。' },
      { id: 'adapted.q3', senseId: 'adapted.s1', errorType: 'grammar', type: '词义选择', prompt: 'adapted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adapted.q4', senseId: 'adapted.s1', errorType: 'meaning', type: '词源', prompt: '记 adapted 时，下面哪句更稳妥？', options: ['先锁住「已适应的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「已适应的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['已适应的'] },
  });

  D('adaptive', {
    etymology: {
      origin: '英语派生：adapt 加上词尾，构成与「自适应的」相应的词类。',
      prefix: null,
      root: { text: 'adapt', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adaptive', text: '英语派生：adapt 加上词尾，构成与「自适应的」相应的词类。' },
        { label: '现在', text: '核心用法是：自适应的。' },
      ],
      formationLogic: '先认词干 adapt，再看词尾决定词性。',
      mnemonic: '看到 adaptive，先说出「自适应的」，再放进一句自己的话。',
      note: '先认词干 adapt，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adaptive even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得自适应的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adaptive.s1', en: 'They needed a adaptive answer, not a long speech.', zh: '他们要的是自适应的的答复，不是长篇发言。', structure: 'adaptive / 在句中表示 / 自适应的', grammar: 'adjective 用法，围绕「自适应的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adaptive.', right: 'The news is adaptive.', reason: 'news 作主语时动词用单数。形容词 adaptive 放在系动词后面。', rule: '先确定 adaptive 是adjective，再套「自适应的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adaptive.q1', senseId: 'adaptive.s1', errorType: 'meaning', type: '词义选择', prompt: '「adaptive」在本条的核心意思是：', options: ['自适应的', '完全相反的意思', '与本词无关的语法术语'], answer: '自适应的', explain: 'adaptive：自适应的。' },
      { id: 'adaptive.q2', senseId: 'adaptive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adaptive?', options: ['自适应的', 'a kind of ancient coin', 'the past tense of be'], answer: '自适应的', explain: '对的是「自适应的」。' },
      { id: 'adaptive.q3', senseId: 'adaptive.s1', errorType: 'grammar', type: '词义选择', prompt: 'adaptive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adaptive.q4', senseId: 'adaptive.s1', errorType: 'meaning', type: '词源', prompt: '记 adaptive 时，下面哪句更稳妥？', options: ['先锁住「自适应的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「自适应的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自适应的'] },
  });

  D('add', {
    etymology: {
      origin: '拉丁语 addere：ad- + dare「给」。添上去。',
      prefix: null,
      root: { text: 'add', gloss: '增加' },
      suffix: null,
      history: [
        { label: 'add', text: '拉丁语 addere：ad- + dare「给」。添上去。' },
        { label: '现在', text: '核心用法是：增加。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：增加。',
      mnemonic: '看到 add，先说出「增加」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：增加。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to add before the office closed.', chinese: '小组得在办公室关门前完成这件事：增加。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'add.s1', en: 'Nobody wanted to add, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 add 是「增加」。', structure: 'add / 在句中表示 / 增加', grammar: 'verb 用法，围绕「增加」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She added the form yesterday without checking the real past form.', right: 'Look up the past form of "add" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 add 是verb，再套「增加」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'add.q1', senseId: 'add.s1', errorType: 'meaning', type: '词义选择', prompt: '「add」在本条的核心意思是：', options: ['增加', '完全相反的意思', '与本词无关的语法术语'], answer: '增加', explain: 'add：增加。' },
      { id: 'add.q2', senseId: 'add.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches add?', options: ['增加', 'a kind of ancient coin', 'the past tense of be'], answer: '增加', explain: '对的是「增加」。' },
      { id: 'add.q3', senseId: 'add.s1', errorType: 'grammar', type: '词义选择', prompt: 'add 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'add.q4', senseId: 'add.s1', errorType: 'meaning', type: '词源', prompt: '记 add 时，下面哪句更稳妥？', options: ['先锁住「增加」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「增加」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['增加'] },
  });

  D('add to', {
    etymology: {
      origin: '现代英语固定说法「add to」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'add to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'add to', text: '现代英语固定说法「add to」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：增加。' },
      ],
      formationLogic: '常见义：增加。',
      mnemonic: '看到 add to，先说出「增加」，再放进一句自己的话。',
      note: '常见义：增加。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "add to" and asked what it does in the sentence.', chinese: '老师在「add to」下面划了线，问它在句中起什么作用。它表示增加。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'add to.s1', en: 'In the margin she wrote "add to" so the reader would not miss that phrase.', zh: '她在页边写下「add to」，免得读者漏掉这个说法。意思是增加。', structure: 'add to / 在句中表示 / 增加', grammar: 'verb 用法，围绕「增加」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated add to word by word and lost the meaning.', right: 'He kept "add to" as one phrase meaning 增加.', reason: '「add to」是固定说法，拆开容易翻错。', rule: '先确定 add to 是verb，再套「增加」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'add to.q1', senseId: 'add to.s1', errorType: 'meaning', type: '词义选择', prompt: '「add to」在本条的核心意思是：', options: ['增加', '完全相反的意思', '与本词无关的语法术语'], answer: '增加', explain: 'add to：增加。' },
      { id: 'add to.q2', senseId: 'add to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches add to?', options: ['增加', 'a kind of ancient coin', 'the past tense of be'], answer: '增加', explain: '对的是「增加」。' },
      { id: 'add to.q3', senseId: 'add to.s1', errorType: 'grammar', type: '词义选择', prompt: 'add to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'add to.q4', senseId: 'add to.s1', errorType: 'meaning', type: '词源', prompt: '记 add to 时，下面哪句更稳妥？', options: ['先锁住「增加」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「增加」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['增加'] },
  });

  D('add up to', {
    etymology: {
      origin: '现代英语固定说法「add up to」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'add up to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'add up to', text: '现代英语固定说法「add up to」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：总计达。' },
      ],
      formationLogic: '常见义：总计达。',
      mnemonic: '看到 add up to，先说出「总计达」，再放进一句自己的话。',
      note: '常见义：总计达。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "add up to" and asked what it does in the sentence.', chinese: '老师在「add up to」下面划了线，问它在句中起什么作用。它表示总计达。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'add up to.s1', en: 'In the margin she wrote "add up to" so the reader would not miss that phrase.', zh: '她在页边写下「add up to」，免得读者漏掉这个说法。意思是总计达。', structure: 'add up to / 在句中表示 / 总计达', grammar: 'verb 用法，围绕「总计达」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated add up to word by word and lost the meaning.', right: 'He kept "add up to" as one phrase meaning 总计达.', reason: '「add up to」是固定说法，拆开容易翻错。', rule: '先确定 add up to 是verb，再套「总计达」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'add up to.q1', senseId: 'add up to.s1', errorType: 'meaning', type: '词义选择', prompt: '「add up to」在本条的核心意思是：', options: ['总计达', '完全相反的意思', '与本词无关的语法术语'], answer: '总计达', explain: 'add up to：总计达。' },
      { id: 'add up to.q2', senseId: 'add up to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches add up to?', options: ['总计达', 'a kind of ancient coin', 'the past tense of be'], answer: '总计达', explain: '对的是「总计达」。' },
      { id: 'add up to.q3', senseId: 'add up to.s1', errorType: 'grammar', type: '词义选择', prompt: 'add up to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'add up to.q4', senseId: 'add up to.s1', errorType: 'meaning', type: '词源', prompt: '记 add up to 时，下面哪句更稳妥？', options: ['先锁住「总计达」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「总计达」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总计达'] },
  });

  D('addict', {
    etymology: {
      origin: '现代英语常用词「addict」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'addict', gloss: '上瘾者' },
      suffix: null,
      history: [
        { label: 'addict', text: '现代英语常用词「addict」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：上瘾者。' },
      ],
      formationLogic: '核心义：上瘾者。',
      mnemonic: '看到 addict，先说出「上瘾者」，再放进一句自己的话。',
      note: '核心义：上瘾者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one addict.', chinese: '这一章反复回到同一个点：上瘾者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'addict.s1', en: 'Without that addict, the story would be hard to follow.', zh: '没有这个上瘾者，故事会很难读下去。', structure: 'addict / 在句中表示 / 上瘾者', grammar: 'noun 用法，围绕「上瘾者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the addict.', right: 'He gave me a lot of advice about the addict.', reason: 'advice 不可数。名词 addict 的单复数也要按词典词形来，不要自造。', rule: '先确定 addict 是noun，再套「上瘾者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'addict.q1', senseId: 'addict.s1', errorType: 'meaning', type: '词义选择', prompt: '「addict」在本条的核心意思是：', options: ['上瘾者', '完全相反的意思', '与本词无关的语法术语'], answer: '上瘾者', explain: 'addict：上瘾者。' },
      { id: 'addict.q2', senseId: 'addict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches addict?', options: ['上瘾者', 'a kind of ancient coin', 'the past tense of be'], answer: '上瘾者', explain: '对的是「上瘾者」。' },
      { id: 'addict.q3', senseId: 'addict.s1', errorType: 'grammar', type: '词义选择', prompt: 'addict 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'addict.q4', senseId: 'addict.s1', errorType: 'meaning', type: '词源', prompt: '记 addict 时，下面哪句更稳妥？', options: ['先锁住「上瘾者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「上瘾者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上瘾者'] },
  });

  D('addiction', {
    etymology: {
      origin: '英语派生：addic 加上词尾，构成与「成瘾」相应的词类。',
      prefix: null,
      root: { text: 'addic', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'addiction', text: '英语派生：addic 加上词尾，构成与「成瘾」相应的词类。' },
        { label: '现在', text: '核心用法是：成瘾。' },
      ],
      formationLogic: '先认词干 addic，再看词尾决定词性。',
      mnemonic: '看到 addiction，先说出「成瘾」，再放进一句自己的话。',
      note: '先认词干 addic，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one addiction.', chinese: '这一章反复回到同一个点：成瘾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'addiction.s1', en: 'Without that addiction, the story would be hard to follow.', zh: '没有这个成瘾，故事会很难读下去。', structure: 'addiction / 在句中表示 / 成瘾', grammar: 'noun 用法，围绕「成瘾」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the addiction.', right: 'He gave me a lot of advice about the addiction.', reason: 'advice 不可数。名词 addiction 的单复数也要按词典词形来，不要自造。', rule: '先确定 addiction 是noun，再套「成瘾」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'addiction.q1', senseId: 'addiction.s1', errorType: 'meaning', type: '词义选择', prompt: '「addiction」在本条的核心意思是：', options: ['成瘾', '完全相反的意思', '与本词无关的语法术语'], answer: '成瘾', explain: 'addiction：成瘾。' },
      { id: 'addiction.q2', senseId: 'addiction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches addiction?', options: ['成瘾', 'a kind of ancient coin', 'the past tense of be'], answer: '成瘾', explain: '对的是「成瘾」。' },
      { id: 'addiction.q3', senseId: 'addiction.s1', errorType: 'grammar', type: '词义选择', prompt: 'addiction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'addiction.q4', senseId: 'addiction.s1', errorType: 'meaning', type: '词源', prompt: '记 addiction 时，下面哪句更稳妥？', options: ['先锁住「成瘾」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「成瘾」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['成瘾'] },
  });

  D('addictive', {
    etymology: {
      origin: '英语派生：addict 加上词尾，构成与「使人上瘾的」相应的词类。',
      prefix: null,
      root: { text: 'addict', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'addictive', text: '英语派生：addict 加上词尾，构成与「使人上瘾的」相应的词类。' },
        { label: '现在', text: '核心用法是：使人上瘾的。' },
      ],
      formationLogic: '先认词干 addict，再看词尾决定词性。',
      mnemonic: '看到 addictive，先说出「使人上瘾的」，再放进一句自己的话。',
      note: '先认词干 addict，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked addictive even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得使人上瘾的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'addictive.s1', en: 'They needed a addictive answer, not a long speech.', zh: '他们要的是使人上瘾的的答复，不是长篇发言。', structure: 'addictive / 在句中表示 / 使人上瘾的', grammar: 'adjective 用法，围绕「使人上瘾的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are addictive.', right: 'The news is addictive.', reason: 'news 作主语时动词用单数。形容词 addictive 放在系动词后面。', rule: '先确定 addictive 是adjective，再套「使人上瘾的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'addictive.q1', senseId: 'addictive.s1', errorType: 'meaning', type: '词义选择', prompt: '「addictive」在本条的核心意思是：', options: ['使人上瘾的', '完全相反的意思', '与本词无关的语法术语'], answer: '使人上瘾的', explain: 'addictive：使人上瘾的。' },
      { id: 'addictive.q2', senseId: 'addictive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches addictive?', options: ['使人上瘾的', 'a kind of ancient coin', 'the past tense of be'], answer: '使人上瘾的', explain: '对的是「使人上瘾的」。' },
      { id: 'addictive.q3', senseId: 'addictive.s1', errorType: 'grammar', type: '词义选择', prompt: 'addictive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'addictive.q4', senseId: 'addictive.s1', errorType: 'meaning', type: '词源', prompt: '记 addictive 时，下面哪句更稳妥？', options: ['先锁住「使人上瘾的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使人上瘾的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使人上瘾的'] },
  });

  D('addition', {
    etymology: {
      origin: '英语派生：addi 加上词尾，构成与「加」相应的词类。',
      prefix: null,
      root: { text: 'addi', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'addition', text: '英语派生：addi 加上词尾，构成与「加」相应的词类。' },
        { label: '现在', text: '核心用法是：加。' },
      ],
      formationLogic: '先认词干 addi，再看词尾决定词性。',
      mnemonic: '看到 addition，先说出「加」，再放进一句自己的话。',
      note: '先认词干 addi，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one addition.', chinese: '这一章反复回到同一个点：加。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'addition.s1', en: 'Without that addition, the story would be hard to follow.', zh: '没有这个加，故事会很难读下去。', structure: 'addition / 在句中表示 / 加', grammar: 'noun 用法，围绕「加」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the addition.', right: 'He gave me a lot of advice about the addition.', reason: 'advice 不可数。名词 addition 的单复数也要按词典词形来，不要自造。', rule: '先确定 addition 是noun，再套「加」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'addition.q1', senseId: 'addition.s1', errorType: 'meaning', type: '词义选择', prompt: '「addition」在本条的核心意思是：', options: ['加', '完全相反的意思', '与本词无关的语法术语'], answer: '加', explain: 'addition：加。' },
      { id: 'addition.q2', senseId: 'addition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches addition?', options: ['加', 'a kind of ancient coin', 'the past tense of be'], answer: '加', explain: '对的是「加」。' },
      { id: 'addition.q3', senseId: 'addition.s1', errorType: 'grammar', type: '词义选择', prompt: 'addition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'addition.q4', senseId: 'addition.s1', errorType: 'meaning', type: '词源', prompt: '记 addition 时，下面哪句更稳妥？', options: ['先锁住「加」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「加」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加'] },
  });

  D('additional', {
    etymology: {
      origin: '英语派生：addition 加上词尾，构成与「额外的」相应的词类。',
      prefix: null,
      root: { text: 'addition', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'additional', text: '英语派生：addition 加上词尾，构成与「额外的」相应的词类。' },
        { label: '现在', text: '核心用法是：额外的。' },
      ],
      formationLogic: '先认词干 addition，再看词尾决定词性。',
      mnemonic: '看到 additional，先说出「额外的」，再放进一句自己的话。',
      note: '先认词干 addition，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked additional even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得额外的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'additional.s1', en: 'They needed a additional answer, not a long speech.', zh: '他们要的是额外的的答复，不是长篇发言。', structure: 'additional / 在句中表示 / 额外的', grammar: 'adjective 用法，围绕「额外的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are additional.', right: 'The news is additional.', reason: 'news 作主语时动词用单数。形容词 additional 放在系动词后面。', rule: '先确定 additional 是adjective，再套「额外的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'additional.q1', senseId: 'additional.s1', errorType: 'meaning', type: '词义选择', prompt: '「additional」在本条的核心意思是：', options: ['额外的', '完全相反的意思', '与本词无关的语法术语'], answer: '额外的', explain: 'additional：额外的。' },
      { id: 'additional.q2', senseId: 'additional.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches additional?', options: ['额外的', 'a kind of ancient coin', 'the past tense of be'], answer: '额外的', explain: '对的是「额外的」。' },
      { id: 'additional.q3', senseId: 'additional.s1', errorType: 'grammar', type: '词义选择', prompt: 'additional 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'additional.q4', senseId: 'additional.s1', errorType: 'meaning', type: '词源', prompt: '记 additional 时，下面哪句更稳妥？', options: ['先锁住「额外的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「额外的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['额外的'] },
  });

  D('additionally', {
    etymology: {
      origin: '英语派生：additional 加上词尾，构成与「此外」相应的词类。',
      prefix: null,
      root: { text: 'additional', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'additionally', text: '英语派生：additional 加上词尾，构成与「此外」相应的词类。' },
        { label: '现在', text: '核心用法是：此外。' },
      ],
      formationLogic: '先认词干 additional，再看词尾决定词性。',
      mnemonic: '看到 additionally，先说出「此外」，再放进一句自己的话。',
      note: '先认词干 additional，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule additionally, and the class finally followed it.', chinese: '她把规则讲得让人明白（此外），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'additionally.s1', en: 'He nodded additionally and went back to his notes.', zh: '他此外地点了点头，又回去看笔记。', structure: 'additionally / 在句中表示 / 此外', grammar: 'adverb 用法，围绕「此外」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very additionallyly.', right: 'She spoke additionally.', reason: 'additionally 已经是副词，不要再加 -ly。', rule: '先确定 additionally 是adverb，再套「此外」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'additionally.q1', senseId: 'additionally.s1', errorType: 'meaning', type: '词义选择', prompt: '「additionally」在本条的核心意思是：', options: ['此外', '完全相反的意思', '与本词无关的语法术语'], answer: '此外', explain: 'additionally：此外。' },
      { id: 'additionally.q2', senseId: 'additionally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches additionally?', options: ['此外', 'a kind of ancient coin', 'the past tense of be'], answer: '此外', explain: '对的是「此外」。' },
      { id: 'additionally.q3', senseId: 'additionally.s1', errorType: 'grammar', type: '词义选择', prompt: 'additionally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'additionally.q4', senseId: 'additionally.s1', errorType: 'meaning', type: '词源', prompt: '记 additionally 时，下面哪句更稳妥？', options: ['先锁住「此外」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「此外」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['此外'] },
  });

  D('additive', {
    etymology: {
      origin: '英语派生：addit 加上词尾，构成与「添加剂」相应的词类。',
      prefix: null,
      root: { text: 'addit', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'additive', text: '英语派生：addit 加上词尾，构成与「添加剂」相应的词类。' },
        { label: '现在', text: '核心用法是：添加剂。' },
      ],
      formationLogic: '先认词干 addit，再看词尾决定词性。',
      mnemonic: '看到 additive，先说出「添加剂」，再放进一句自己的话。',
      note: '先认词干 addit，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one additive.', chinese: '这一章反复回到同一个点：添加剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'additive.s1', en: 'Without that additive, the story would be hard to follow.', zh: '没有这个添加剂，故事会很难读下去。', structure: 'additive / 在句中表示 / 添加剂', grammar: 'noun 用法，围绕「添加剂」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the additive.', right: 'He gave me a lot of advice about the additive.', reason: 'advice 不可数。名词 additive 的单复数也要按词典词形来，不要自造。', rule: '先确定 additive 是noun，再套「添加剂」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'additive.q1', senseId: 'additive.s1', errorType: 'meaning', type: '词义选择', prompt: '「additive」在本条的核心意思是：', options: ['添加剂', '完全相反的意思', '与本词无关的语法术语'], answer: '添加剂', explain: 'additive：添加剂。' },
      { id: 'additive.q2', senseId: 'additive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches additive?', options: ['添加剂', 'a kind of ancient coin', 'the past tense of be'], answer: '添加剂', explain: '对的是「添加剂」。' },
      { id: 'additive.q3', senseId: 'additive.s1', errorType: 'grammar', type: '词义选择', prompt: 'additive 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'additive.q4', senseId: 'additive.s1', errorType: 'meaning', type: '词源', prompt: '记 additive 时，下面哪句更稳妥？', options: ['先锁住「添加剂」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「添加剂」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['添加剂'] },
  });

  D('address', {
    etymology: {
      origin: '古法语 adrecier「使直、对准」。后有「演说、地址」。',
      prefix: null,
      root: { text: 'address', gloss: '地址' },
      suffix: null,
      history: [
        { label: 'address', text: '古法语 adrecier「使直、对准」。后有「演说、地址」。' },
        { label: '现在', text: '核心用法是：地址。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：地址。',
      mnemonic: '看到 address，先说出「地址」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：地址。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one address.', chinese: '这一章反复回到同一个点：地址。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'address.s1', en: 'Without that address, the story would be hard to follow.', zh: '没有这个地址，故事会很难读下去。', structure: 'address / 在句中表示 / 地址', grammar: 'noun 用法，围绕「地址」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the address.', right: 'He gave me a lot of advice about the address.', reason: 'advice 不可数。名词 address 的单复数也要按词典词形来，不要自造。', rule: '先确定 address 是noun，再套「地址」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'address.q1', senseId: 'address.s1', errorType: 'meaning', type: '词义选择', prompt: '「address」在本条的核心意思是：', options: ['地址', '完全相反的意思', '与本词无关的语法术语'], answer: '地址', explain: 'address：地址。' },
      { id: 'address.q2', senseId: 'address.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches address?', options: ['地址', 'a kind of ancient coin', 'the past tense of be'], answer: '地址', explain: '对的是「地址」。' },
      { id: 'address.q3', senseId: 'address.s1', errorType: 'grammar', type: '词义选择', prompt: 'address 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'address.q4', senseId: 'address.s1', errorType: 'meaning', type: '词源', prompt: '记 address 时，下面哪句更稳妥？', options: ['先锁住「地址」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「地址」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地址'] },
  });

  D('adequate', {
    etymology: {
      origin: '拉丁语 adaequatus「使相等」，aequus「相等」。',
      prefix: null,
      root: { text: 'adequate', gloss: '足够的' },
      suffix: null,
      history: [
        { label: 'adequate', text: '拉丁语 adaequatus「使相等」，aequus「相等」。' },
        { label: '现在', text: '核心用法是：足够的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：足够的。',
      mnemonic: '看到 adequate，先说出「足够的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：足够的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adequate even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得足够的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adequate.s1', en: 'They needed a adequate answer, not a long speech.', zh: '他们要的是足够的的答复，不是长篇发言。', structure: 'adequate / 在句中表示 / 足够的', grammar: 'adjective 用法，围绕「足够的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adequate.', right: 'The news is adequate.', reason: 'news 作主语时动词用单数。形容词 adequate 放在系动词后面。', rule: '先确定 adequate 是adjective，再套「足够的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adequate.q1', senseId: 'adequate.s1', errorType: 'meaning', type: '词义选择', prompt: '「adequate」在本条的核心意思是：', options: ['足够的', '完全相反的意思', '与本词无关的语法术语'], answer: '足够的', explain: 'adequate：足够的。' },
      { id: 'adequate.q2', senseId: 'adequate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adequate?', options: ['足够的', 'a kind of ancient coin', 'the past tense of be'], answer: '足够的', explain: '对的是「足够的」。' },
      { id: 'adequate.q3', senseId: 'adequate.s1', errorType: 'grammar', type: '词义选择', prompt: 'adequate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adequate.q4', senseId: 'adequate.s1', errorType: 'meaning', type: '词源', prompt: '记 adequate 时，下面哪句更稳妥？', options: ['先锁住「足够的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「足够的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['足够的'] },
  });

  D('adequately', {
    etymology: {
      origin: '英语派生：adequate 加上词尾，构成与「足够地」相应的词类。',
      prefix: null,
      root: { text: 'adequate', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adequately', text: '英语派生：adequate 加上词尾，构成与「足够地」相应的词类。' },
        { label: '现在', text: '核心用法是：足够地。' },
      ],
      formationLogic: '先认词干 adequate，再看词尾决定词性。',
      mnemonic: '看到 adequately，先说出「足够地」，再放进一句自己的话。',
      note: '先认词干 adequate，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule adequately, and the class finally followed it.', chinese: '她把规则讲得让人明白（足够地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adequately.s1', en: 'He nodded adequately and went back to his notes.', zh: '他足够地地点了点头，又回去看笔记。', structure: 'adequately / 在句中表示 / 足够地', grammar: 'adverb 用法，围绕「足够地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very adequatelyly.', right: 'She spoke adequately.', reason: 'adequately 已经是副词，不要再加 -ly。', rule: '先确定 adequately 是adverb，再套「足够地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adequately.q1', senseId: 'adequately.s1', errorType: 'meaning', type: '词义选择', prompt: '「adequately」在本条的核心意思是：', options: ['足够地', '完全相反的意思', '与本词无关的语法术语'], answer: '足够地', explain: 'adequately：足够地。' },
      { id: 'adequately.q2', senseId: 'adequately.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adequately?', options: ['足够地', 'a kind of ancient coin', 'the past tense of be'], answer: '足够地', explain: '对的是「足够地」。' },
      { id: 'adequately.q3', senseId: 'adequately.s1', errorType: 'grammar', type: '词义选择', prompt: 'adequately 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'adequately.q4', senseId: 'adequately.s1', errorType: 'meaning', type: '词源', prompt: '记 adequately 时，下面哪句更稳妥？', options: ['先锁住「足够地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「足够地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['足够地'] },
  });

  D('adhere', {
    etymology: {
      origin: '拉丁语 adhaerere「粘住」，haerere「附着」。',
      prefix: null,
      root: { text: 'adhere', gloss: '坚持' },
      suffix: null,
      history: [
        { label: 'adhere', text: '拉丁语 adhaerere「粘住」，haerere「附着」。' },
        { label: '现在', text: '核心用法是：坚持。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：坚持。',
      mnemonic: '看到 adhere，先说出「坚持」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：坚持。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to adhere before the office closed.', chinese: '小组得在办公室关门前完成这件事：坚持。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adhere.s1', en: 'Nobody wanted to adhere, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 adhere 是「坚持」。', structure: 'adhere / 在句中表示 / 坚持', grammar: 'verb 用法，围绕「坚持」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She adhereed the form yesterday without checking the real past form.', right: 'Look up the past form of "adhere" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 adhere 是verb，再套「坚持」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adhere.q1', senseId: 'adhere.s1', errorType: 'meaning', type: '词义选择', prompt: '「adhere」在本条的核心意思是：', options: ['坚持', '完全相反的意思', '与本词无关的语法术语'], answer: '坚持', explain: 'adhere：坚持。' },
      { id: 'adhere.q2', senseId: 'adhere.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adhere?', options: ['坚持', 'a kind of ancient coin', 'the past tense of be'], answer: '坚持', explain: '对的是「坚持」。' },
      { id: 'adhere.q3', senseId: 'adhere.s1', errorType: 'grammar', type: '词义选择', prompt: 'adhere 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'adhere.q4', senseId: 'adhere.s1', errorType: 'meaning', type: '词源', prompt: '记 adhere 时，下面哪句更稳妥？', options: ['先锁住「坚持」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「坚持」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['坚持'] },
  });

  D('adherence', {
    etymology: {
      origin: '英语派生：adher 加上词尾，构成与「遵守」相应的词类。',
      prefix: null,
      root: { text: 'adher', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adherence', text: '英语派生：adher 加上词尾，构成与「遵守」相应的词类。' },
        { label: '现在', text: '核心用法是：遵守。' },
      ],
      formationLogic: '先认词干 adher，再看词尾决定词性。',
      mnemonic: '看到 adherence，先说出「遵守」，再放进一句自己的话。',
      note: '先认词干 adher，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adherence.', chinese: '这一章反复回到同一个点：遵守。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adherence.s1', en: 'Without that adherence, the story would be hard to follow.', zh: '没有这个遵守，故事会很难读下去。', structure: 'adherence / 在句中表示 / 遵守', grammar: 'noun 用法，围绕「遵守」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adherence.', right: 'He gave me a lot of advice about the adherence.', reason: 'advice 不可数。名词 adherence 的单复数也要按词典词形来，不要自造。', rule: '先确定 adherence 是noun，再套「遵守」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adherence.q1', senseId: 'adherence.s1', errorType: 'meaning', type: '词义选择', prompt: '「adherence」在本条的核心意思是：', options: ['遵守', '完全相反的意思', '与本词无关的语法术语'], answer: '遵守', explain: 'adherence：遵守。' },
      { id: 'adherence.q2', senseId: 'adherence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adherence?', options: ['遵守', 'a kind of ancient coin', 'the past tense of be'], answer: '遵守', explain: '对的是「遵守」。' },
      { id: 'adherence.q3', senseId: 'adherence.s1', errorType: 'grammar', type: '词义选择', prompt: 'adherence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adherence.q4', senseId: 'adherence.s1', errorType: 'meaning', type: '词源', prompt: '记 adherence 时，下面哪句更稳妥？', options: ['先锁住「遵守」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「遵守」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['遵守'] },
  });

  D('adhesion', {
    etymology: {
      origin: '英语派生：adhe 加上词尾，构成与「粘附」相应的词类。',
      prefix: null,
      root: { text: 'adhe', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adhesion', text: '英语派生：adhe 加上词尾，构成与「粘附」相应的词类。' },
        { label: '现在', text: '核心用法是：粘附。' },
      ],
      formationLogic: '先认词干 adhe，再看词尾决定词性。',
      mnemonic: '看到 adhesion，先说出「粘附」，再放进一句自己的话。',
      note: '先认词干 adhe，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adhesion.', chinese: '这一章反复回到同一个点：粘附。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adhesion.s1', en: 'Without that adhesion, the story would be hard to follow.', zh: '没有这个粘附，故事会很难读下去。', structure: 'adhesion / 在句中表示 / 粘附', grammar: 'noun 用法，围绕「粘附」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adhesion.', right: 'He gave me a lot of advice about the adhesion.', reason: 'advice 不可数。名词 adhesion 的单复数也要按词典词形来，不要自造。', rule: '先确定 adhesion 是noun，再套「粘附」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adhesion.q1', senseId: 'adhesion.s1', errorType: 'meaning', type: '词义选择', prompt: '「adhesion」在本条的核心意思是：', options: ['粘附', '完全相反的意思', '与本词无关的语法术语'], answer: '粘附', explain: 'adhesion：粘附。' },
      { id: 'adhesion.q2', senseId: 'adhesion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adhesion?', options: ['粘附', 'a kind of ancient coin', 'the past tense of be'], answer: '粘附', explain: '对的是「粘附」。' },
      { id: 'adhesion.q3', senseId: 'adhesion.s1', errorType: 'grammar', type: '词义选择', prompt: 'adhesion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adhesion.q4', senseId: 'adhesion.s1', errorType: 'meaning', type: '词源', prompt: '记 adhesion 时，下面哪句更稳妥？', options: ['先锁住「粘附」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「粘附」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粘附'] },
  });

  D('adhesive', {
    etymology: {
      origin: '英语派生：adhes 加上词尾，构成与「粘合剂」相应的词类。',
      prefix: null,
      root: { text: 'adhes', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adhesive', text: '英语派生：adhes 加上词尾，构成与「粘合剂」相应的词类。' },
        { label: '现在', text: '核心用法是：粘合剂。' },
      ],
      formationLogic: '先认词干 adhes，再看词尾决定词性。',
      mnemonic: '看到 adhesive，先说出「粘合剂」，再放进一句自己的话。',
      note: '先认词干 adhes，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adhesive.', chinese: '这一章反复回到同一个点：粘合剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adhesive.s1', en: 'Without that adhesive, the story would be hard to follow.', zh: '没有这个粘合剂，故事会很难读下去。', structure: 'adhesive / 在句中表示 / 粘合剂', grammar: 'noun 用法，围绕「粘合剂」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adhesive.', right: 'He gave me a lot of advice about the adhesive.', reason: 'advice 不可数。名词 adhesive 的单复数也要按词典词形来，不要自造。', rule: '先确定 adhesive 是noun，再套「粘合剂」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adhesive.q1', senseId: 'adhesive.s1', errorType: 'meaning', type: '词义选择', prompt: '「adhesive」在本条的核心意思是：', options: ['粘合剂', '完全相反的意思', '与本词无关的语法术语'], answer: '粘合剂', explain: 'adhesive：粘合剂。' },
      { id: 'adhesive.q2', senseId: 'adhesive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adhesive?', options: ['粘合剂', 'a kind of ancient coin', 'the past tense of be'], answer: '粘合剂', explain: '对的是「粘合剂」。' },
      { id: 'adhesive.q3', senseId: 'adhesive.s1', errorType: 'grammar', type: '词义选择', prompt: 'adhesive 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adhesive.q4', senseId: 'adhesive.s1', errorType: 'meaning', type: '词源', prompt: '记 adhesive 时，下面哪句更稳妥？', options: ['先锁住「粘合剂」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「粘合剂」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粘合剂'] },
  });

  D('adjacent', {
    etymology: {
      origin: '拉丁语 adjacere「躺在旁边」，jacere「扔、躺」。',
      prefix: null,
      root: { text: 'adjacent', gloss: '毗连的' },
      suffix: null,
      history: [
        { label: 'adjacent', text: '拉丁语 adjacere「躺在旁边」，jacere「扔、躺」。' },
        { label: '现在', text: '核心用法是：毗连的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：毗连的。',
      mnemonic: '看到 adjacent，先说出「毗连的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：毗连的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adjacent even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得毗连的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjacent.s1', en: 'They needed a adjacent answer, not a long speech.', zh: '他们要的是毗连的的答复，不是长篇发言。', structure: 'adjacent / 在句中表示 / 毗连的', grammar: 'adjective 用法，围绕「毗连的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adjacent.', right: 'The news is adjacent.', reason: 'news 作主语时动词用单数。形容词 adjacent 放在系动词后面。', rule: '先确定 adjacent 是adjective，再套「毗连的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjacent.q1', senseId: 'adjacent.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjacent」在本条的核心意思是：', options: ['毗连的', '完全相反的意思', '与本词无关的语法术语'], answer: '毗连的', explain: 'adjacent：毗连的。' },
      { id: 'adjacent.q2', senseId: 'adjacent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjacent?', options: ['毗连的', 'a kind of ancient coin', 'the past tense of be'], answer: '毗连的', explain: '对的是「毗连的」。' },
      { id: 'adjacent.q3', senseId: 'adjacent.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjacent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adjacent.q4', senseId: 'adjacent.s1', errorType: 'meaning', type: '词源', prompt: '记 adjacent 时，下面哪句更稳妥？', options: ['先锁住「毗连的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「毗连的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毗连的'] },
  });

  D('adjectival', {
    etymology: {
      origin: '英语派生：adjectiv 加上词尾，构成与「形容词的」相应的词类。',
      prefix: null,
      root: { text: 'adjectiv', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adjectival', text: '英语派生：adjectiv 加上词尾，构成与「形容词的」相应的词类。' },
        { label: '现在', text: '核心用法是：形容词的。' },
      ],
      formationLogic: '先认词干 adjectiv，再看词尾决定词性。',
      mnemonic: '看到 adjectival，先说出「形容词的」，再放进一句自己的话。',
      note: '先认词干 adjectiv，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adjectival even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得形容词的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjectival.s1', en: 'They needed a adjectival answer, not a long speech.', zh: '他们要的是形容词的的答复，不是长篇发言。', structure: 'adjectival / 在句中表示 / 形容词的', grammar: 'adjective 用法，围绕「形容词的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adjectival.', right: 'The news is adjectival.', reason: 'news 作主语时动词用单数。形容词 adjectival 放在系动词后面。', rule: '先确定 adjectival 是adjective，再套「形容词的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjectival.q1', senseId: 'adjectival.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjectival」在本条的核心意思是：', options: ['形容词的', '完全相反的意思', '与本词无关的语法术语'], answer: '形容词的', explain: 'adjectival：形容词的。' },
      { id: 'adjectival.q2', senseId: 'adjectival.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjectival?', options: ['形容词的', 'a kind of ancient coin', 'the past tense of be'], answer: '形容词的', explain: '对的是「形容词的」。' },
      { id: 'adjectival.q3', senseId: 'adjectival.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjectival 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adjectival.q4', senseId: 'adjectival.s1', errorType: 'meaning', type: '词源', prompt: '记 adjectival 时，下面哪句更稳妥？', options: ['先锁住「形容词的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「形容词的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['形容词的'] },
  });

  D('adjective', {
    etymology: {
      origin: '英语派生：adject 加上词尾，构成与「形容词」相应的词类。',
      prefix: null,
      root: { text: 'adject', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adjective', text: '英语派生：adject 加上词尾，构成与「形容词」相应的词类。' },
        { label: '现在', text: '核心用法是：形容词。' },
      ],
      formationLogic: '先认词干 adject，再看词尾决定词性。',
      mnemonic: '看到 adjective，先说出「形容词」，再放进一句自己的话。',
      note: '先认词干 adject，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adjective.', chinese: '这一章反复回到同一个点：形容词。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjective.s1', en: 'Without that adjective, the story would be hard to follow.', zh: '没有这个形容词，故事会很难读下去。', structure: 'adjective / 在句中表示 / 形容词', grammar: 'noun 用法，围绕「形容词」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adjective.', right: 'He gave me a lot of advice about the adjective.', reason: 'advice 不可数。名词 adjective 的单复数也要按词典词形来，不要自造。', rule: '先确定 adjective 是noun，再套「形容词」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjective.q1', senseId: 'adjective.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjective」在本条的核心意思是：', options: ['形容词', '完全相反的意思', '与本词无关的语法术语'], answer: '形容词', explain: 'adjective：形容词。' },
      { id: 'adjective.q2', senseId: 'adjective.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjective?', options: ['形容词', 'a kind of ancient coin', 'the past tense of be'], answer: '形容词', explain: '对的是「形容词」。' },
      { id: 'adjective.q3', senseId: 'adjective.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjective 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adjective.q4', senseId: 'adjective.s1', errorType: 'meaning', type: '词源', prompt: '记 adjective 时，下面哪句更稳妥？', options: ['先锁住「形容词」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「形容词」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['形容词'] },
  });

  D('adjoin', {
    etymology: {
      origin: '现代英语常用词「adjoin」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adjoin', gloss: '毗邻' },
      suffix: null,
      history: [
        { label: 'adjoin', text: '现代英语常用词「adjoin」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：毗邻。' },
      ],
      formationLogic: '核心义：毗邻。',
      mnemonic: '看到 adjoin，先说出「毗邻」，再放进一句自己的话。',
      note: '核心义：毗邻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to adjoin before the office closed.', chinese: '小组得在办公室关门前完成这件事：毗邻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjoin.s1', en: 'Nobody wanted to adjoin, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 adjoin 是「毗邻」。', structure: 'adjoin / 在句中表示 / 毗邻', grammar: 'verb 用法，围绕「毗邻」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She adjoined the form yesterday without checking the real past form.', right: 'Look up the past form of "adjoin" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 adjoin 是verb，再套「毗邻」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjoin.q1', senseId: 'adjoin.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjoin」在本条的核心意思是：', options: ['毗邻', '完全相反的意思', '与本词无关的语法术语'], answer: '毗邻', explain: 'adjoin：毗邻。' },
      { id: 'adjoin.q2', senseId: 'adjoin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjoin?', options: ['毗邻', 'a kind of ancient coin', 'the past tense of be'], answer: '毗邻', explain: '对的是「毗邻」。' },
      { id: 'adjoin.q3', senseId: 'adjoin.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjoin 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'adjoin.q4', senseId: 'adjoin.s1', errorType: 'meaning', type: '词源', prompt: '记 adjoin 时，下面哪句更稳妥？', options: ['先锁住「毗邻」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「毗邻」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毗邻'] },
  });

  D('adjudicate', {
    etymology: {
      origin: '现代英语常用词「adjudicate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adjudicate', gloss: '裁决' },
      suffix: null,
      history: [
        { label: 'adjudicate', text: '现代英语常用词「adjudicate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：裁决。' },
      ],
      formationLogic: '核心义：裁决。',
      mnemonic: '看到 adjudicate，先说出「裁决」，再放进一句自己的话。',
      note: '核心义：裁决。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to adjudicate before the office closed.', chinese: '小组得在办公室关门前完成这件事：裁决。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjudicate.s1', en: 'Nobody wanted to adjudicate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 adjudicate 是「裁决」。', structure: 'adjudicate / 在句中表示 / 裁决', grammar: 'verb 用法，围绕「裁决」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She adjudicateed the form yesterday without checking the real past form.', right: 'Look up the past form of "adjudicate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 adjudicate 是verb，再套「裁决」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjudicate.q1', senseId: 'adjudicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjudicate」在本条的核心意思是：', options: ['裁决', '完全相反的意思', '与本词无关的语法术语'], answer: '裁决', explain: 'adjudicate：裁决。' },
      { id: 'adjudicate.q2', senseId: 'adjudicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjudicate?', options: ['裁决', 'a kind of ancient coin', 'the past tense of be'], answer: '裁决', explain: '对的是「裁决」。' },
      { id: 'adjudicate.q3', senseId: 'adjudicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjudicate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'adjudicate.q4', senseId: 'adjudicate.s1', errorType: 'meaning', type: '词源', prompt: '记 adjudicate 时，下面哪句更稳妥？', options: ['先锁住「裁决」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「裁决」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['裁决'] },
  });

  D('adjudicator', {
    etymology: {
      origin: '英语派生：adjudicat 加上词尾，构成与「裁决人」相应的词类。',
      prefix: null,
      root: { text: 'adjudicat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adjudicator', text: '英语派生：adjudicat 加上词尾，构成与「裁决人」相应的词类。' },
        { label: '现在', text: '核心用法是：裁决人。' },
      ],
      formationLogic: '先认词干 adjudicat，再看词尾决定词性。',
      mnemonic: '看到 adjudicator，先说出「裁决人」，再放进一句自己的话。',
      note: '先认词干 adjudicat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adjudicator.', chinese: '这一章反复回到同一个点：裁决人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjudicator.s1', en: 'Without that adjudicator, the story would be hard to follow.', zh: '没有这个裁决人，故事会很难读下去。', structure: 'adjudicator / 在句中表示 / 裁决人', grammar: 'noun 用法，围绕「裁决人」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adjudicator.', right: 'He gave me a lot of advice about the adjudicator.', reason: 'advice 不可数。名词 adjudicator 的单复数也要按词典词形来，不要自造。', rule: '先确定 adjudicator 是noun，再套「裁决人」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjudicator.q1', senseId: 'adjudicator.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjudicator」在本条的核心意思是：', options: ['裁决人', '完全相反的意思', '与本词无关的语法术语'], answer: '裁决人', explain: 'adjudicator：裁决人。' },
      { id: 'adjudicator.q2', senseId: 'adjudicator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjudicator?', options: ['裁决人', 'a kind of ancient coin', 'the past tense of be'], answer: '裁决人', explain: '对的是「裁决人」。' },
      { id: 'adjudicator.q3', senseId: 'adjudicator.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjudicator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adjudicator.q4', senseId: 'adjudicator.s1', errorType: 'meaning', type: '词源', prompt: '记 adjudicator 时，下面哪句更稳妥？', options: ['先锁住「裁决人」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「裁决人」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['裁决人'] },
  });

  D('adjustable', {
    etymology: {
      origin: '英语派生：adjust 加上词尾，构成与「可调节的」相应的词类。',
      prefix: null,
      root: { text: 'adjust', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adjustable', text: '英语派生：adjust 加上词尾，构成与「可调节的」相应的词类。' },
        { label: '现在', text: '核心用法是：可调节的。' },
      ],
      formationLogic: '先认词干 adjust，再看词尾决定词性。',
      mnemonic: '看到 adjustable，先说出「可调节的」，再放进一句自己的话。',
      note: '先认词干 adjust，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adjustable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得可调节的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjustable.s1', en: 'They needed a adjustable answer, not a long speech.', zh: '他们要的是可调节的的答复，不是长篇发言。', structure: 'adjustable / 在句中表示 / 可调节的', grammar: 'adjective 用法，围绕「可调节的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adjustable.', right: 'The news is adjustable.', reason: 'news 作主语时动词用单数。形容词 adjustable 放在系动词后面。', rule: '先确定 adjustable 是adjective，再套「可调节的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjustable.q1', senseId: 'adjustable.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjustable」在本条的核心意思是：', options: ['可调节的', '完全相反的意思', '与本词无关的语法术语'], answer: '可调节的', explain: 'adjustable：可调节的。' },
      { id: 'adjustable.q2', senseId: 'adjustable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjustable?', options: ['可调节的', 'a kind of ancient coin', 'the past tense of be'], answer: '可调节的', explain: '对的是「可调节的」。' },
      { id: 'adjustable.q3', senseId: 'adjustable.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjustable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adjustable.q4', senseId: 'adjustable.s1', errorType: 'meaning', type: '词源', prompt: '记 adjustable 时，下面哪句更稳妥？', options: ['先锁住「可调节的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「可调节的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可调节的'] },
  });

  D('adjustment', {
    etymology: {
      origin: '英语派生：adjust 加上词尾，构成与「调整」相应的词类。',
      prefix: null,
      root: { text: 'adjust', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adjustment', text: '英语派生：adjust 加上词尾，构成与「调整」相应的词类。' },
        { label: '现在', text: '核心用法是：调整。' },
      ],
      formationLogic: '先认词干 adjust，再看词尾决定词性。',
      mnemonic: '看到 adjustment，先说出「调整」，再放进一句自己的话。',
      note: '先认词干 adjust，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adjustment.', chinese: '这一章反复回到同一个点：调整。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adjustment.s1', en: 'Without that adjustment, the story would be hard to follow.', zh: '没有这个调整，故事会很难读下去。', structure: 'adjustment / 在句中表示 / 调整', grammar: 'noun 用法，围绕「调整」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adjustment.', right: 'He gave me a lot of advice about the adjustment.', reason: 'advice 不可数。名词 adjustment 的单复数也要按词典词形来，不要自造。', rule: '先确定 adjustment 是noun，再套「调整」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adjustment.q1', senseId: 'adjustment.s1', errorType: 'meaning', type: '词义选择', prompt: '「adjustment」在本条的核心意思是：', options: ['调整', '完全相反的意思', '与本词无关的语法术语'], answer: '调整', explain: 'adjustment：调整。' },
      { id: 'adjustment.q2', senseId: 'adjustment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adjustment?', options: ['调整', 'a kind of ancient coin', 'the past tense of be'], answer: '调整', explain: '对的是「调整」。' },
      { id: 'adjustment.q3', senseId: 'adjustment.s1', errorType: 'grammar', type: '词义选择', prompt: 'adjustment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adjustment.q4', senseId: 'adjustment.s1', errorType: 'meaning', type: '词源', prompt: '记 adjustment 时，下面哪句更稳妥？', options: ['先锁住「调整」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「调整」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['调整'] },
  });

  D('administer', {
    etymology: {
      origin: '英语派生：administ 加上词尾，构成与「管理」相应的词类。',
      prefix: null,
      root: { text: 'administ', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'administer', text: '英语派生：administ 加上词尾，构成与「管理」相应的词类。' },
        { label: '现在', text: '核心用法是：管理。' },
      ],
      formationLogic: '先认词干 administ，再看词尾决定词性。',
      mnemonic: '看到 administer，先说出「管理」，再放进一句自己的话。',
      note: '先认词干 administ，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to administer before the office closed.', chinese: '小组得在办公室关门前完成这件事：管理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'administer.s1', en: 'Nobody wanted to administer, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 administer 是「管理」。', structure: 'administer / 在句中表示 / 管理', grammar: 'verb 用法，围绕「管理」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She administered the form yesterday without checking the real past form.', right: 'Look up the past form of "administer" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 administer 是verb，再套「管理」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'administer.q1', senseId: 'administer.s1', errorType: 'meaning', type: '词义选择', prompt: '「administer」在本条的核心意思是：', options: ['管理', '完全相反的意思', '与本词无关的语法术语'], answer: '管理', explain: 'administer：管理。' },
      { id: 'administer.q2', senseId: 'administer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches administer?', options: ['管理', 'a kind of ancient coin', 'the past tense of be'], answer: '管理', explain: '对的是「管理」。' },
      { id: 'administer.q3', senseId: 'administer.s1', errorType: 'grammar', type: '词义选择', prompt: 'administer 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'administer.q4', senseId: 'administer.s1', errorType: 'meaning', type: '词源', prompt: '记 administer 时，下面哪句更稳妥？', options: ['先锁住「管理」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「管理」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['管理'] },
  });

  D('administration', {
    etymology: {
      origin: '英语派生：administra 加上词尾，构成与「管理」相应的词类。',
      prefix: null,
      root: { text: 'administra', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'administration', text: '英语派生：administra 加上词尾，构成与「管理」相应的词类。' },
        { label: '现在', text: '核心用法是：管理。' },
      ],
      formationLogic: '先认词干 administra，再看词尾决定词性。',
      mnemonic: '看到 administration，先说出「管理」，再放进一句自己的话。',
      note: '先认词干 administra，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one administration.', chinese: '这一章反复回到同一个点：管理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'administration.s1', en: 'Without that administration, the story would be hard to follow.', zh: '没有这个管理，故事会很难读下去。', structure: 'administration / 在句中表示 / 管理', grammar: 'noun 用法，围绕「管理」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the administration.', right: 'He gave me a lot of advice about the administration.', reason: 'advice 不可数。名词 administration 的单复数也要按词典词形来，不要自造。', rule: '先确定 administration 是noun，再套「管理」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'administration.q1', senseId: 'administration.s1', errorType: 'meaning', type: '词义选择', prompt: '「administration」在本条的核心意思是：', options: ['管理', '完全相反的意思', '与本词无关的语法术语'], answer: '管理', explain: 'administration：管理。' },
      { id: 'administration.q2', senseId: 'administration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches administration?', options: ['管理', 'a kind of ancient coin', 'the past tense of be'], answer: '管理', explain: '对的是「管理」。' },
      { id: 'administration.q3', senseId: 'administration.s1', errorType: 'grammar', type: '词义选择', prompt: 'administration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'administration.q4', senseId: 'administration.s1', errorType: 'meaning', type: '词源', prompt: '记 administration 时，下面哪句更稳妥？', options: ['先锁住「管理」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「管理」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['管理'] },
  });

  D('administrative', {
    etymology: {
      origin: '英语派生：administrat 加上词尾，构成与「行政的」相应的词类。',
      prefix: null,
      root: { text: 'administrat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'administrative', text: '英语派生：administrat 加上词尾，构成与「行政的」相应的词类。' },
        { label: '现在', text: '核心用法是：行政的。' },
      ],
      formationLogic: '先认词干 administrat，再看词尾决定词性。',
      mnemonic: '看到 administrative，先说出「行政的」，再放进一句自己的话。',
      note: '先认词干 administrat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked administrative even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得行政的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'administrative.s1', en: 'They needed a administrative answer, not a long speech.', zh: '他们要的是行政的的答复，不是长篇发言。', structure: 'administrative / 在句中表示 / 行政的', grammar: 'adjective 用法，围绕「行政的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are administrative.', right: 'The news is administrative.', reason: 'news 作主语时动词用单数。形容词 administrative 放在系动词后面。', rule: '先确定 administrative 是adjective，再套「行政的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'administrative.q1', senseId: 'administrative.s1', errorType: 'meaning', type: '词义选择', prompt: '「administrative」在本条的核心意思是：', options: ['行政的', '完全相反的意思', '与本词无关的语法术语'], answer: '行政的', explain: 'administrative：行政的。' },
      { id: 'administrative.q2', senseId: 'administrative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches administrative?', options: ['行政的', 'a kind of ancient coin', 'the past tense of be'], answer: '行政的', explain: '对的是「行政的」。' },
      { id: 'administrative.q3', senseId: 'administrative.s1', errorType: 'grammar', type: '词义选择', prompt: 'administrative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'administrative.q4', senseId: 'administrative.s1', errorType: 'meaning', type: '词源', prompt: '记 administrative 时，下面哪句更稳妥？', options: ['先锁住「行政的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「行政的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['行政的'] },
  });

  D('administrator', {
    etymology: {
      origin: '英语派生：administrat 加上词尾，构成与「管理人员」相应的词类。',
      prefix: null,
      root: { text: 'administrat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'administrator', text: '英语派生：administrat 加上词尾，构成与「管理人员」相应的词类。' },
        { label: '现在', text: '核心用法是：管理人员。' },
      ],
      formationLogic: '先认词干 administrat，再看词尾决定词性。',
      mnemonic: '看到 administrator，先说出「管理人员」，再放进一句自己的话。',
      note: '先认词干 administrat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one administrator.', chinese: '这一章反复回到同一个点：管理人员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'administrator.s1', en: 'Without that administrator, the story would be hard to follow.', zh: '没有这个管理人员，故事会很难读下去。', structure: 'administrator / 在句中表示 / 管理人员', grammar: 'noun 用法，围绕「管理人员」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the administrator.', right: 'He gave me a lot of advice about the administrator.', reason: 'advice 不可数。名词 administrator 的单复数也要按词典词形来，不要自造。', rule: '先确定 administrator 是noun，再套「管理人员」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'administrator.q1', senseId: 'administrator.s1', errorType: 'meaning', type: '词义选择', prompt: '「administrator」在本条的核心意思是：', options: ['管理人员', '完全相反的意思', '与本词无关的语法术语'], answer: '管理人员', explain: 'administrator：管理人员。' },
      { id: 'administrator.q2', senseId: 'administrator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches administrator?', options: ['管理人员', 'a kind of ancient coin', 'the past tense of be'], answer: '管理人员', explain: '对的是「管理人员」。' },
      { id: 'administrator.q3', senseId: 'administrator.s1', errorType: 'grammar', type: '词义选择', prompt: 'administrator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'administrator.q4', senseId: 'administrator.s1', errorType: 'meaning', type: '词源', prompt: '记 administrator 时，下面哪句更稳妥？', options: ['先锁住「管理人员」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「管理人员」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['管理人员'] },
  });

  D('admiration', {
    etymology: {
      origin: '英语派生：admira 加上词尾，构成与「钦佩」相应的词类。',
      prefix: null,
      root: { text: 'admira', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'admiration', text: '英语派生：admira 加上词尾，构成与「钦佩」相应的词类。' },
        { label: '现在', text: '核心用法是：钦佩。' },
      ],
      formationLogic: '先认词干 admira，再看词尾决定词性。',
      mnemonic: '看到 admiration，先说出「钦佩」，再放进一句自己的话。',
      note: '先认词干 admira，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one admiration.', chinese: '这一章反复回到同一个点：钦佩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'admiration.s1', en: 'Without that admiration, the story would be hard to follow.', zh: '没有这个钦佩，故事会很难读下去。', structure: 'admiration / 在句中表示 / 钦佩', grammar: 'noun 用法，围绕「钦佩」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the admiration.', right: 'He gave me a lot of advice about the admiration.', reason: 'advice 不可数。名词 admiration 的单复数也要按词典词形来，不要自造。', rule: '先确定 admiration 是noun，再套「钦佩」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'admiration.q1', senseId: 'admiration.s1', errorType: 'meaning', type: '词义选择', prompt: '「admiration」在本条的核心意思是：', options: ['钦佩', '完全相反的意思', '与本词无关的语法术语'], answer: '钦佩', explain: 'admiration：钦佩。' },
      { id: 'admiration.q2', senseId: 'admiration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches admiration?', options: ['钦佩', 'a kind of ancient coin', 'the past tense of be'], answer: '钦佩', explain: '对的是「钦佩」。' },
      { id: 'admiration.q3', senseId: 'admiration.s1', errorType: 'grammar', type: '词义选择', prompt: 'admiration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'admiration.q4', senseId: 'admiration.s1', errorType: 'meaning', type: '词源', prompt: '记 admiration 时，下面哪句更稳妥？', options: ['先锁住「钦佩」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「钦佩」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['钦佩'] },
  });

  D('admire', {
    etymology: {
      origin: '拉丁语 admirari「感到惊奇」，mirari「惊叹」。',
      prefix: null,
      root: { text: 'admire', gloss: '钦佩' },
      suffix: null,
      history: [
        { label: 'admire', text: '拉丁语 admirari「感到惊奇」，mirari「惊叹」。' },
        { label: '现在', text: '核心用法是：钦佩。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：钦佩。',
      mnemonic: '看到 admire，先说出「钦佩」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：钦佩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to admire before the office closed.', chinese: '小组得在办公室关门前完成这件事：钦佩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'admire.s1', en: 'Nobody wanted to admire, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 admire 是「钦佩」。', structure: 'admire / 在句中表示 / 钦佩', grammar: 'verb 用法，围绕「钦佩」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She admireed the form yesterday without checking the real past form.', right: 'Look up the past form of "admire" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 admire 是verb，再套「钦佩」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'admire.q1', senseId: 'admire.s1', errorType: 'meaning', type: '词义选择', prompt: '「admire」在本条的核心意思是：', options: ['钦佩', '完全相反的意思', '与本词无关的语法术语'], answer: '钦佩', explain: 'admire：钦佩。' },
      { id: 'admire.q2', senseId: 'admire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches admire?', options: ['钦佩', 'a kind of ancient coin', 'the past tense of be'], answer: '钦佩', explain: '对的是「钦佩」。' },
      { id: 'admire.q3', senseId: 'admire.s1', errorType: 'grammar', type: '词义选择', prompt: 'admire 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'admire.q4', senseId: 'admire.s1', errorType: 'meaning', type: '词源', prompt: '记 admire 时，下面哪句更稳妥？', options: ['先锁住「钦佩」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「钦佩」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['钦佩'] },
  });

  D('admirer', {
    etymology: {
      origin: '英语派生：admir 加上词尾，构成与「仰慕者」相应的词类。',
      prefix: null,
      root: { text: 'admir', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'admirer', text: '英语派生：admir 加上词尾，构成与「仰慕者」相应的词类。' },
        { label: '现在', text: '核心用法是：仰慕者。' },
      ],
      formationLogic: '先认词干 admir，再看词尾决定词性。',
      mnemonic: '看到 admirer，先说出「仰慕者」，再放进一句自己的话。',
      note: '先认词干 admir，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one admirer.', chinese: '这一章反复回到同一个点：仰慕者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'admirer.s1', en: 'Without that admirer, the story would be hard to follow.', zh: '没有这个仰慕者，故事会很难读下去。', structure: 'admirer / 在句中表示 / 仰慕者', grammar: 'noun 用法，围绕「仰慕者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the admirer.', right: 'He gave me a lot of advice about the admirer.', reason: 'advice 不可数。名词 admirer 的单复数也要按词典词形来，不要自造。', rule: '先确定 admirer 是noun，再套「仰慕者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'admirer.q1', senseId: 'admirer.s1', errorType: 'meaning', type: '词义选择', prompt: '「admirer」在本条的核心意思是：', options: ['仰慕者', '完全相反的意思', '与本词无关的语法术语'], answer: '仰慕者', explain: 'admirer：仰慕者。' },
      { id: 'admirer.q2', senseId: 'admirer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches admirer?', options: ['仰慕者', 'a kind of ancient coin', 'the past tense of be'], answer: '仰慕者', explain: '对的是「仰慕者」。' },
      { id: 'admirer.q3', senseId: 'admirer.s1', errorType: 'grammar', type: '词义选择', prompt: 'admirer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'admirer.q4', senseId: 'admirer.s1', errorType: 'meaning', type: '词源', prompt: '记 admirer 时，下面哪句更稳妥？', options: ['先锁住「仰慕者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「仰慕者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仰慕者'] },
  });

  D('admission', {
    etymology: {
      origin: '英语派生：admis 加上词尾，构成与「承认」相应的词类。',
      prefix: null,
      root: { text: 'admis', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'admission', text: '英语派生：admis 加上词尾，构成与「承认」相应的词类。' },
        { label: '现在', text: '核心用法是：承认。' },
      ],
      formationLogic: '先认词干 admis，再看词尾决定词性。',
      mnemonic: '看到 admission，先说出「承认」，再放进一句自己的话。',
      note: '先认词干 admis，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one admission.', chinese: '这一章反复回到同一个点：承认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'admission.s1', en: 'Without that admission, the story would be hard to follow.', zh: '没有这个承认，故事会很难读下去。', structure: 'admission / 在句中表示 / 承认', grammar: 'noun 用法，围绕「承认」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the admission.', right: 'He gave me a lot of advice about the admission.', reason: 'advice 不可数。名词 admission 的单复数也要按词典词形来，不要自造。', rule: '先确定 admission 是noun，再套「承认」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'admission.q1', senseId: 'admission.s1', errorType: 'meaning', type: '词义选择', prompt: '「admission」在本条的核心意思是：', options: ['承认', '完全相反的意思', '与本词无关的语法术语'], answer: '承认', explain: 'admission：承认。' },
      { id: 'admission.q2', senseId: 'admission.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches admission?', options: ['承认', 'a kind of ancient coin', 'the past tense of be'], answer: '承认', explain: '对的是「承认」。' },
      { id: 'admission.q3', senseId: 'admission.s1', errorType: 'grammar', type: '词义选择', prompt: 'admission 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'admission.q4', senseId: 'admission.s1', errorType: 'meaning', type: '词源', prompt: '记 admission 时，下面哪句更稳妥？', options: ['先锁住「承认」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「承认」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['承认'] },
  });

  D('admit', {
    etymology: {
      origin: '拉丁语 admittere「允许进入」，mittere「送」。',
      prefix: null,
      root: { text: 'admit', gloss: '承认' },
      suffix: null,
      history: [
        { label: 'admit', text: '拉丁语 admittere「允许进入」，mittere「送」。' },
        { label: '现在', text: '核心用法是：承认。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：承认。',
      mnemonic: '看到 admit，先说出「承认」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：承认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to admit before the office closed.', chinese: '小组得在办公室关门前完成这件事：承认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'admit.s1', en: 'Nobody wanted to admit, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 admit 是「承认」。', structure: 'admit / 在句中表示 / 承认', grammar: 'verb 用法，围绕「承认」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She admited the form yesterday without checking the real past form.', right: 'Look up the past form of "admit" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 admit 是verb，再套「承认」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'admit.q1', senseId: 'admit.s1', errorType: 'meaning', type: '词义选择', prompt: '「admit」在本条的核心意思是：', options: ['承认', '完全相反的意思', '与本词无关的语法术语'], answer: '承认', explain: 'admit：承认。' },
      { id: 'admit.q2', senseId: 'admit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches admit?', options: ['承认', 'a kind of ancient coin', 'the past tense of be'], answer: '承认', explain: '对的是「承认」。' },
      { id: 'admit.q3', senseId: 'admit.s1', errorType: 'grammar', type: '词义选择', prompt: 'admit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'admit.q4', senseId: 'admit.s1', errorType: 'meaning', type: '词源', prompt: '记 admit 时，下面哪句更稳妥？', options: ['先锁住「承认」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「承认」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['承认'] },
  });

  D('adolescence', {
    etymology: {
      origin: '英语派生：adolesc 加上词尾，构成与「青春期」相应的词类。',
      prefix: null,
      root: { text: 'adolesc', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adolescence', text: '英语派生：adolesc 加上词尾，构成与「青春期」相应的词类。' },
        { label: '现在', text: '核心用法是：青春期。' },
      ],
      formationLogic: '先认词干 adolesc，再看词尾决定词性。',
      mnemonic: '看到 adolescence，先说出「青春期」，再放进一句自己的话。',
      note: '先认词干 adolesc，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adolescence.', chinese: '这一章反复回到同一个点：青春期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adolescence.s1', en: 'Without that adolescence, the story would be hard to follow.', zh: '没有这个青春期，故事会很难读下去。', structure: 'adolescence / 在句中表示 / 青春期', grammar: 'noun 用法，围绕「青春期」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adolescence.', right: 'He gave me a lot of advice about the adolescence.', reason: 'advice 不可数。名词 adolescence 的单复数也要按词典词形来，不要自造。', rule: '先确定 adolescence 是noun，再套「青春期」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adolescence.q1', senseId: 'adolescence.s1', errorType: 'meaning', type: '词义选择', prompt: '「adolescence」在本条的核心意思是：', options: ['青春期', '完全相反的意思', '与本词无关的语法术语'], answer: '青春期', explain: 'adolescence：青春期。' },
      { id: 'adolescence.q2', senseId: 'adolescence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adolescence?', options: ['青春期', 'a kind of ancient coin', 'the past tense of be'], answer: '青春期', explain: '对的是「青春期」。' },
      { id: 'adolescence.q3', senseId: 'adolescence.s1', errorType: 'grammar', type: '词义选择', prompt: 'adolescence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adolescence.q4', senseId: 'adolescence.s1', errorType: 'meaning', type: '词源', prompt: '记 adolescence 时，下面哪句更稳妥？', options: ['先锁住「青春期」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「青春期」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['青春期'] },
  });

  D('adolescent', {
    etymology: {
      origin: '拉丁语 adolescere「长大」，alere「喂养」。',
      prefix: null,
      root: { text: 'adolescent', gloss: '青少年' },
      suffix: null,
      history: [
        { label: 'adolescent', text: '拉丁语 adolescere「长大」，alere「喂养」。' },
        { label: '现在', text: '核心用法是：青少年。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：青少年。',
      mnemonic: '看到 adolescent，先说出「青少年」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：青少年。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adolescent.', chinese: '这一章反复回到同一个点：青少年。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adolescent.s1', en: 'Without that adolescent, the story would be hard to follow.', zh: '没有这个青少年，故事会很难读下去。', structure: 'adolescent / 在句中表示 / 青少年', grammar: 'noun 用法，围绕「青少年」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adolescent.', right: 'He gave me a lot of advice about the adolescent.', reason: 'advice 不可数。名词 adolescent 的单复数也要按词典词形来，不要自造。', rule: '先确定 adolescent 是noun，再套「青少年」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adolescent.q1', senseId: 'adolescent.s1', errorType: 'meaning', type: '词义选择', prompt: '「adolescent」在本条的核心意思是：', options: ['青少年', '完全相反的意思', '与本词无关的语法术语'], answer: '青少年', explain: 'adolescent：青少年。' },
      { id: 'adolescent.q2', senseId: 'adolescent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adolescent?', options: ['青少年', 'a kind of ancient coin', 'the past tense of be'], answer: '青少年', explain: '对的是「青少年」。' },
      { id: 'adolescent.q3', senseId: 'adolescent.s1', errorType: 'grammar', type: '词义选择', prompt: 'adolescent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adolescent.q4', senseId: 'adolescent.s1', errorType: 'meaning', type: '词源', prompt: '记 adolescent 时，下面哪句更稳妥？', options: ['先锁住「青少年」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「青少年」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['青少年'] },
  });

  D('adoption', {
    etymology: {
      origin: '英语派生：adop 加上词尾，构成与「收养」相应的词类。',
      prefix: null,
      root: { text: 'adop', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adoption', text: '英语派生：adop 加上词尾，构成与「收养」相应的词类。' },
        { label: '现在', text: '核心用法是：收养。' },
      ],
      formationLogic: '先认词干 adop，再看词尾决定词性。',
      mnemonic: '看到 adoption，先说出「收养」，再放进一句自己的话。',
      note: '先认词干 adop，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adoption.', chinese: '这一章反复回到同一个点：收养。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adoption.s1', en: 'Without that adoption, the story would be hard to follow.', zh: '没有这个收养，故事会很难读下去。', structure: 'adoption / 在句中表示 / 收养', grammar: 'noun 用法，围绕「收养」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adoption.', right: 'He gave me a lot of advice about the adoption.', reason: 'advice 不可数。名词 adoption 的单复数也要按词典词形来，不要自造。', rule: '先确定 adoption 是noun，再套「收养」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adoption.q1', senseId: 'adoption.s1', errorType: 'meaning', type: '词义选择', prompt: '「adoption」在本条的核心意思是：', options: ['收养', '完全相反的意思', '与本词无关的语法术语'], answer: '收养', explain: 'adoption：收养。' },
      { id: 'adoption.q2', senseId: 'adoption.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adoption?', options: ['收养', 'a kind of ancient coin', 'the past tense of be'], answer: '收养', explain: '对的是「收养」。' },
      { id: 'adoption.q3', senseId: 'adoption.s1', errorType: 'grammar', type: '词义选择', prompt: 'adoption 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adoption.q4', senseId: 'adoption.s1', errorType: 'meaning', type: '词源', prompt: '记 adoption 时，下面哪句更稳妥？', options: ['先锁住「收养」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「收养」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['收养'] },
  });

  D('adoptive', {
    etymology: {
      origin: '英语派生：adopt 加上词尾，构成与「收养的」相应的词类。',
      prefix: null,
      root: { text: 'adopt', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adoptive', text: '英语派生：adopt 加上词尾，构成与「收养的」相应的词类。' },
        { label: '现在', text: '核心用法是：收养的。' },
      ],
      formationLogic: '先认词干 adopt，再看词尾决定词性。',
      mnemonic: '看到 adoptive，先说出「收养的」，再放进一句自己的话。',
      note: '先认词干 adopt，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adoptive even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得收养的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adoptive.s1', en: 'They needed a adoptive answer, not a long speech.', zh: '他们要的是收养的的答复，不是长篇发言。', structure: 'adoptive / 在句中表示 / 收养的', grammar: 'adjective 用法，围绕「收养的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adoptive.', right: 'The news is adoptive.', reason: 'news 作主语时动词用单数。形容词 adoptive 放在系动词后面。', rule: '先确定 adoptive 是adjective，再套「收养的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adoptive.q1', senseId: 'adoptive.s1', errorType: 'meaning', type: '词义选择', prompt: '「adoptive」在本条的核心意思是：', options: ['收养的', '完全相反的意思', '与本词无关的语法术语'], answer: '收养的', explain: 'adoptive：收养的。' },
      { id: 'adoptive.q2', senseId: 'adoptive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adoptive?', options: ['收养的', 'a kind of ancient coin', 'the past tense of be'], answer: '收养的', explain: '对的是「收养的」。' },
      { id: 'adoptive.q3', senseId: 'adoptive.s1', errorType: 'grammar', type: '词义选择', prompt: 'adoptive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adoptive.q4', senseId: 'adoptive.s1', errorType: 'meaning', type: '词源', prompt: '记 adoptive 时，下面哪句更稳妥？', options: ['先锁住「收养的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「收养的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['收养的'] },
  });

  D('adorable', {
    etymology: {
      origin: '英语派生：ador 加上词尾，构成与「可爱的」相应的词类。',
      prefix: null,
      root: { text: 'ador', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adorable', text: '英语派生：ador 加上词尾，构成与「可爱的」相应的词类。' },
        { label: '现在', text: '核心用法是：可爱的。' },
      ],
      formationLogic: '先认词干 ador，再看词尾决定词性。',
      mnemonic: '看到 adorable，先说出「可爱的」，再放进一句自己的话。',
      note: '先认词干 ador，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adorable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得可爱的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adorable.s1', en: 'They needed a adorable answer, not a long speech.', zh: '他们要的是可爱的的答复，不是长篇发言。', structure: 'adorable / 在句中表示 / 可爱的', grammar: 'adjective 用法，围绕「可爱的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adorable.', right: 'The news is adorable.', reason: 'news 作主语时动词用单数。形容词 adorable 放在系动词后面。', rule: '先确定 adorable 是adjective，再套「可爱的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adorable.q1', senseId: 'adorable.s1', errorType: 'meaning', type: '词义选择', prompt: '「adorable」在本条的核心意思是：', options: ['可爱的', '完全相反的意思', '与本词无关的语法术语'], answer: '可爱的', explain: 'adorable：可爱的。' },
      { id: 'adorable.q2', senseId: 'adorable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adorable?', options: ['可爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '可爱的', explain: '对的是「可爱的」。' },
      { id: 'adorable.q3', senseId: 'adorable.s1', errorType: 'grammar', type: '词义选择', prompt: 'adorable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adorable.q4', senseId: 'adorable.s1', errorType: 'meaning', type: '词源', prompt: '记 adorable 时，下面哪句更稳妥？', options: ['先锁住「可爱的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「可爱的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可爱的'] },
  });

  D('adoration', {
    etymology: {
      origin: '英语派生：adora 加上词尾，构成与「崇拜」相应的词类。',
      prefix: null,
      root: { text: 'adora', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adoration', text: '英语派生：adora 加上词尾，构成与「崇拜」相应的词类。' },
        { label: '现在', text: '核心用法是：崇拜。' },
      ],
      formationLogic: '先认词干 adora，再看词尾决定词性。',
      mnemonic: '看到 adoration，先说出「崇拜」，再放进一句自己的话。',
      note: '先认词干 adora，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adoration.', chinese: '这一章反复回到同一个点：崇拜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adoration.s1', en: 'Without that adoration, the story would be hard to follow.', zh: '没有这个崇拜，故事会很难读下去。', structure: 'adoration / 在句中表示 / 崇拜', grammar: 'noun 用法，围绕「崇拜」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adoration.', right: 'He gave me a lot of advice about the adoration.', reason: 'advice 不可数。名词 adoration 的单复数也要按词典词形来，不要自造。', rule: '先确定 adoration 是noun，再套「崇拜」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adoration.q1', senseId: 'adoration.s1', errorType: 'meaning', type: '词义选择', prompt: '「adoration」在本条的核心意思是：', options: ['崇拜', '完全相反的意思', '与本词无关的语法术语'], answer: '崇拜', explain: 'adoration：崇拜。' },
      { id: 'adoration.q2', senseId: 'adoration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adoration?', options: ['崇拜', 'a kind of ancient coin', 'the past tense of be'], answer: '崇拜', explain: '对的是「崇拜」。' },
      { id: 'adoration.q3', senseId: 'adoration.s1', errorType: 'grammar', type: '词义选择', prompt: 'adoration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adoration.q4', senseId: 'adoration.s1', errorType: 'meaning', type: '词源', prompt: '记 adoration 时，下面哪句更稳妥？', options: ['先锁住「崇拜」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「崇拜」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['崇拜'] },
  });

  D('adore', {
    etymology: {
      origin: '现代英语常用词「adore」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adore', gloss: '深爱' },
      suffix: null,
      history: [
        { label: 'adore', text: '现代英语常用词「adore」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：深爱。' },
      ],
      formationLogic: '核心义：深爱。',
      mnemonic: '看到 adore，先说出「深爱」，再放进一句自己的话。',
      note: '核心义：深爱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to adore before the office closed.', chinese: '小组得在办公室关门前完成这件事：深爱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adore.s1', en: 'Nobody wanted to adore, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 adore 是「深爱」。', structure: 'adore / 在句中表示 / 深爱', grammar: 'verb 用法，围绕「深爱」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She adoreed the form yesterday without checking the real past form.', right: 'Look up the past form of "adore" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 adore 是verb，再套「深爱」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adore.q1', senseId: 'adore.s1', errorType: 'meaning', type: '词义选择', prompt: '「adore」在本条的核心意思是：', options: ['深爱', '完全相反的意思', '与本词无关的语法术语'], answer: '深爱', explain: 'adore：深爱。' },
      { id: 'adore.q2', senseId: 'adore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adore?', options: ['深爱', 'a kind of ancient coin', 'the past tense of be'], answer: '深爱', explain: '对的是「深爱」。' },
      { id: 'adore.q3', senseId: 'adore.s1', errorType: 'grammar', type: '词义选择', prompt: 'adore 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'adore.q4', senseId: 'adore.s1', errorType: 'meaning', type: '词源', prompt: '记 adore 时，下面哪句更稳妥？', options: ['先锁住「深爱」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「深爱」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深爱'] },
  });

  D('adorn', {
    etymology: {
      origin: '现代英语常用词「adorn」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adorn', gloss: '装饰' },
      suffix: null,
      history: [
        { label: 'adorn', text: '现代英语常用词「adorn」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：装饰。' },
      ],
      formationLogic: '核心义：装饰。',
      mnemonic: '看到 adorn，先说出「装饰」，再放进一句自己的话。',
      note: '核心义：装饰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to adorn before the office closed.', chinese: '小组得在办公室关门前完成这件事：装饰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adorn.s1', en: 'Nobody wanted to adorn, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 adorn 是「装饰」。', structure: 'adorn / 在句中表示 / 装饰', grammar: 'verb 用法，围绕「装饰」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She adorned the form yesterday without checking the real past form.', right: 'Look up the past form of "adorn" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 adorn 是verb，再套「装饰」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adorn.q1', senseId: 'adorn.s1', errorType: 'meaning', type: '词义选择', prompt: '「adorn」在本条的核心意思是：', options: ['装饰', '完全相反的意思', '与本词无关的语法术语'], answer: '装饰', explain: 'adorn：装饰。' },
      { id: 'adorn.q2', senseId: 'adorn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adorn?', options: ['装饰', 'a kind of ancient coin', 'the past tense of be'], answer: '装饰', explain: '对的是「装饰」。' },
      { id: 'adorn.q3', senseId: 'adorn.s1', errorType: 'grammar', type: '词义选择', prompt: 'adorn 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'adorn.q4', senseId: 'adorn.s1', errorType: 'meaning', type: '词源', prompt: '记 adorn 时，下面哪句更稳妥？', options: ['先锁住「装饰」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「装饰」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装饰'] },
  });

  D('adornment', {
    etymology: {
      origin: '英语派生：adorn 加上词尾，构成与「装饰」相应的词类。',
      prefix: null,
      root: { text: 'adorn', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adornment', text: '英语派生：adorn 加上词尾，构成与「装饰」相应的词类。' },
        { label: '现在', text: '核心用法是：装饰。' },
      ],
      formationLogic: '先认词干 adorn，再看词尾决定词性。',
      mnemonic: '看到 adornment，先说出「装饰」，再放进一句自己的话。',
      note: '先认词干 adorn，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adornment.', chinese: '这一章反复回到同一个点：装饰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adornment.s1', en: 'Without that adornment, the story would be hard to follow.', zh: '没有这个装饰，故事会很难读下去。', structure: 'adornment / 在句中表示 / 装饰', grammar: 'noun 用法，围绕「装饰」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adornment.', right: 'He gave me a lot of advice about the adornment.', reason: 'advice 不可数。名词 adornment 的单复数也要按词典词形来，不要自造。', rule: '先确定 adornment 是noun，再套「装饰」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adornment.q1', senseId: 'adornment.s1', errorType: 'meaning', type: '词义选择', prompt: '「adornment」在本条的核心意思是：', options: ['装饰', '完全相反的意思', '与本词无关的语法术语'], answer: '装饰', explain: 'adornment：装饰。' },
      { id: 'adornment.q2', senseId: 'adornment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adornment?', options: ['装饰', 'a kind of ancient coin', 'the past tense of be'], answer: '装饰', explain: '对的是「装饰」。' },
      { id: 'adornment.q3', senseId: 'adornment.s1', errorType: 'grammar', type: '词义选择', prompt: 'adornment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adornment.q4', senseId: 'adornment.s1', errorType: 'meaning', type: '词源', prompt: '记 adornment 时，下面哪句更稳妥？', options: ['先锁住「装饰」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「装饰」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装饰'] },
  });

  D('adult', {
    etymology: {
      origin: '拉丁语 adultus「已经长大」，adolescere。',
      prefix: null,
      root: { text: 'adult', gloss: '成年人' },
      suffix: null,
      history: [
        { label: 'adult', text: '拉丁语 adultus「已经长大」，adolescere。' },
        { label: '现在', text: '核心用法是：成年人。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：成年人。',
      mnemonic: '看到 adult，先说出「成年人」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：成年人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adult.', chinese: '这一章反复回到同一个点：成年人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adult.s1', en: 'Without that adult, the story would be hard to follow.', zh: '没有这个成年人，故事会很难读下去。', structure: 'adult / 在句中表示 / 成年人', grammar: 'noun 用法，围绕「成年人」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adult.', right: 'He gave me a lot of advice about the adult.', reason: 'advice 不可数。名词 adult 的单复数也要按词典词形来，不要自造。', rule: '先确定 adult 是noun，再套「成年人」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adult.q1', senseId: 'adult.s1', errorType: 'meaning', type: '词义选择', prompt: '「adult」在本条的核心意思是：', options: ['成年人', '完全相反的意思', '与本词无关的语法术语'], answer: '成年人', explain: 'adult：成年人。' },
      { id: 'adult.q2', senseId: 'adult.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adult?', options: ['成年人', 'a kind of ancient coin', 'the past tense of be'], answer: '成年人', explain: '对的是「成年人」。' },
      { id: 'adult.q3', senseId: 'adult.s1', errorType: 'grammar', type: '词义选择', prompt: 'adult 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adult.q4', senseId: 'adult.s1', errorType: 'meaning', type: '词源', prompt: '记 adult 时，下面哪句更稳妥？', options: ['先锁住「成年人」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「成年人」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['成年人'] },
  });

  D('adulthood', {
    etymology: {
      origin: '现代英语常用词「adulthood」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adulthood', gloss: '成年（期）' },
      suffix: null,
      history: [
        { label: 'adulthood', text: '现代英语常用词「adulthood」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：成年（期）。' },
      ],
      formationLogic: '核心义：成年（期）。',
      mnemonic: '看到 adulthood，先说出「成年（期）」，再放进一句自己的话。',
      note: '核心义：成年（期）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adulthood.', chinese: '这一章反复回到同一个点：成年（期）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adulthood.s1', en: 'Without that adulthood, the story would be hard to follow.', zh: '没有这个成年（期），故事会很难读下去。', structure: 'adulthood / 在句中表示 / 成年（期）', grammar: 'noun 用法，围绕「成年（期）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adulthood.', right: 'He gave me a lot of advice about the adulthood.', reason: 'advice 不可数。名词 adulthood 的单复数也要按词典词形来，不要自造。', rule: '先确定 adulthood 是noun，再套「成年（期）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adulthood.q1', senseId: 'adulthood.s1', errorType: 'meaning', type: '词义选择', prompt: '「adulthood」在本条的核心意思是：', options: ['成年（期）', '完全相反的意思', '与本词无关的语法术语'], answer: '成年（期）', explain: 'adulthood：成年（期）。' },
      { id: 'adulthood.q2', senseId: 'adulthood.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adulthood?', options: ['成年（期）', 'a kind of ancient coin', 'the past tense of be'], answer: '成年（期）', explain: '对的是「成年（期）」。' },
      { id: 'adulthood.q3', senseId: 'adulthood.s1', errorType: 'grammar', type: '词义选择', prompt: 'adulthood 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adulthood.q4', senseId: 'adulthood.s1', errorType: 'meaning', type: '词源', prompt: '记 adulthood 时，下面哪句更稳妥？', options: ['先锁住「成年（期）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「成年（期）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['成年（期）'] },
  });

  D('advance', {
    etymology: {
      origin: '拉丁语 abante「在前面」，后变法语 avancer。',
      prefix: null,
      root: { text: 'advance', gloss: '前进' },
      suffix: null,
      history: [
        { label: 'advance', text: '拉丁语 abante「在前面」，后变法语 avancer。' },
        { label: '现在', text: '核心用法是：前进。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：前进。',
      mnemonic: '看到 advance，先说出「前进」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：前进。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advance.', chinese: '这一章反复回到同一个点：前进。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advance.s1', en: 'Without that advance, the story would be hard to follow.', zh: '没有这个前进，故事会很难读下去。', structure: 'advance / 在句中表示 / 前进', grammar: 'noun 用法，围绕「前进」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advance.', right: 'He gave me a lot of advice about the advance.', reason: 'advice 不可数。名词 advance 的单复数也要按词典词形来，不要自造。', rule: '先确定 advance 是noun，再套「前进」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advance.q1', senseId: 'advance.s1', errorType: 'meaning', type: '词义选择', prompt: '「advance」在本条的核心意思是：', options: ['前进', '完全相反的意思', '与本词无关的语法术语'], answer: '前进', explain: 'advance：前进。' },
      { id: 'advance.q2', senseId: 'advance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advance?', options: ['前进', 'a kind of ancient coin', 'the past tense of be'], answer: '前进', explain: '对的是「前进」。' },
      { id: 'advance.q3', senseId: 'advance.s1', errorType: 'grammar', type: '词义选择', prompt: 'advance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advance.q4', senseId: 'advance.s1', errorType: 'meaning', type: '词源', prompt: '记 advance 时，下面哪句更稳妥？', options: ['先锁住「前进」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「前进」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前进'] },
  });

  D('advanced', {
    etymology: {
      origin: '现代英语常用词「advanced」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'advanced', gloss: '高级的' },
      suffix: null,
      history: [
        { label: 'advanced', text: '现代英语常用词「advanced」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：高级的。' },
      ],
      formationLogic: '核心义：高级的。',
      mnemonic: '看到 advanced，先说出「高级的」，再放进一句自己的话。',
      note: '核心义：高级的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked advanced even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得高级的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advanced.s1', en: 'They needed a advanced answer, not a long speech.', zh: '他们要的是高级的的答复，不是长篇发言。', structure: 'advanced / 在句中表示 / 高级的', grammar: 'adjective 用法，围绕「高级的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are advanced.', right: 'The news is advanced.', reason: 'news 作主语时动词用单数。形容词 advanced 放在系动词后面。', rule: '先确定 advanced 是adjective，再套「高级的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advanced.q1', senseId: 'advanced.s1', errorType: 'meaning', type: '词义选择', prompt: '「advanced」在本条的核心意思是：', options: ['高级的', '完全相反的意思', '与本词无关的语法术语'], answer: '高级的', explain: 'advanced：高级的。' },
      { id: 'advanced.q2', senseId: 'advanced.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advanced?', options: ['高级的', 'a kind of ancient coin', 'the past tense of be'], answer: '高级的', explain: '对的是「高级的」。' },
      { id: 'advanced.q3', senseId: 'advanced.s1', errorType: 'grammar', type: '词义选择', prompt: 'advanced 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'advanced.q4', senseId: 'advanced.s1', errorType: 'meaning', type: '词源', prompt: '记 advanced 时，下面哪句更稳妥？', options: ['先锁住「高级的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「高级的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高级的'] },
  });

  D('advancement', {
    etymology: {
      origin: '英语派生：advance 加上词尾，构成与「进步」相应的词类。',
      prefix: null,
      root: { text: 'advance', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'advancement', text: '英语派生：advance 加上词尾，构成与「进步」相应的词类。' },
        { label: '现在', text: '核心用法是：进步。' },
      ],
      formationLogic: '先认词干 advance，再看词尾决定词性。',
      mnemonic: '看到 advancement，先说出「进步」，再放进一句自己的话。',
      note: '先认词干 advance，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advancement.', chinese: '这一章反复回到同一个点：进步。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advancement.s1', en: 'Without that advancement, the story would be hard to follow.', zh: '没有这个进步，故事会很难读下去。', structure: 'advancement / 在句中表示 / 进步', grammar: 'noun 用法，围绕「进步」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advancement.', right: 'He gave me a lot of advice about the advancement.', reason: 'advice 不可数。名词 advancement 的单复数也要按词典词形来，不要自造。', rule: '先确定 advancement 是noun，再套「进步」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advancement.q1', senseId: 'advancement.s1', errorType: 'meaning', type: '词义选择', prompt: '「advancement」在本条的核心意思是：', options: ['进步', '完全相反的意思', '与本词无关的语法术语'], answer: '进步', explain: 'advancement：进步。' },
      { id: 'advancement.q2', senseId: 'advancement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advancement?', options: ['进步', 'a kind of ancient coin', 'the past tense of be'], answer: '进步', explain: '对的是「进步」。' },
      { id: 'advancement.q3', senseId: 'advancement.s1', errorType: 'grammar', type: '词义选择', prompt: 'advancement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advancement.q4', senseId: 'advancement.s1', errorType: 'meaning', type: '词源', prompt: '记 advancement 时，下面哪句更稳妥？', options: ['先锁住「进步」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「进步」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进步'] },
  });

  D('advantage', {
    etymology: {
      origin: '古法语 avantage「站在前面的位置」。',
      prefix: null,
      root: { text: 'advantage', gloss: '优势' },
      suffix: null,
      history: [
        { label: 'advantage', text: '古法语 avantage「站在前面的位置」。' },
        { label: '现在', text: '核心用法是：优势。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：优势。',
      mnemonic: '看到 advantage，先说出「优势」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：优势。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advantage.', chinese: '这一章反复回到同一个点：优势。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advantage.s1', en: 'Without that advantage, the story would be hard to follow.', zh: '没有这个优势，故事会很难读下去。', structure: 'advantage / 在句中表示 / 优势', grammar: 'noun 用法，围绕「优势」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advantage.', right: 'He gave me a lot of advice about the advantage.', reason: 'advice 不可数。名词 advantage 的单复数也要按词典词形来，不要自造。', rule: '先确定 advantage 是noun，再套「优势」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advantage.q1', senseId: 'advantage.s1', errorType: 'meaning', type: '词义选择', prompt: '「advantage」在本条的核心意思是：', options: ['优势', '完全相反的意思', '与本词无关的语法术语'], answer: '优势', explain: 'advantage：优势。' },
      { id: 'advantage.q2', senseId: 'advantage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advantage?', options: ['优势', 'a kind of ancient coin', 'the past tense of be'], answer: '优势', explain: '对的是「优势」。' },
      { id: 'advantage.q3', senseId: 'advantage.s1', errorType: 'grammar', type: '词义选择', prompt: 'advantage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advantage.q4', senseId: 'advantage.s1', errorType: 'meaning', type: '词源', prompt: '记 advantage 时，下面哪句更稳妥？', options: ['先锁住「优势」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「优势」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['优势'] },
  });

  D('advantageous', {
    etymology: {
      origin: '英语派生：advantage 加上词尾，构成与「有利的」相应的词类。',
      prefix: null,
      root: { text: 'advantage', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'advantageous', text: '英语派生：advantage 加上词尾，构成与「有利的」相应的词类。' },
        { label: '现在', text: '核心用法是：有利的。' },
      ],
      formationLogic: '先认词干 advantage，再看词尾决定词性。',
      mnemonic: '看到 advantageous，先说出「有利的」，再放进一句自己的话。',
      note: '先认词干 advantage，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked advantageous even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得有利的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advantageous.s1', en: 'They needed a advantageous answer, not a long speech.', zh: '他们要的是有利的的答复，不是长篇发言。', structure: 'advantageous / 在句中表示 / 有利的', grammar: 'adjective 用法，围绕「有利的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are advantageous.', right: 'The news is advantageous.', reason: 'news 作主语时动词用单数。形容词 advantageous 放在系动词后面。', rule: '先确定 advantageous 是adjective，再套「有利的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advantageous.q1', senseId: 'advantageous.s1', errorType: 'meaning', type: '词义选择', prompt: '「advantageous」在本条的核心意思是：', options: ['有利的', '完全相反的意思', '与本词无关的语法术语'], answer: '有利的', explain: 'advantageous：有利的。' },
      { id: 'advantageous.q2', senseId: 'advantageous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advantageous?', options: ['有利的', 'a kind of ancient coin', 'the past tense of be'], answer: '有利的', explain: '对的是「有利的」。' },
      { id: 'advantageous.q3', senseId: 'advantageous.s1', errorType: 'grammar', type: '词义选择', prompt: 'advantageous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'advantageous.q4', senseId: 'advantageous.s1', errorType: 'meaning', type: '词源', prompt: '记 advantageous 时，下面哪句更稳妥？', options: ['先锁住「有利的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「有利的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有利的'] },
  });

  D('advent', {
    etymology: {
      origin: '现代英语常用词「advent」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'advent', gloss: '（重要事物）出现' },
      suffix: null,
      history: [
        { label: 'advent', text: '现代英语常用词「advent」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（重要事物）出现。' },
      ],
      formationLogic: '核心义：（重要事物）出现。',
      mnemonic: '看到 advent，先说出「（重要事物）出现」，再放进一句自己的话。',
      note: '核心义：（重要事物）出现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advent.', chinese: '这一章反复回到同一个点：（重要事物）出现。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advent.s1', en: 'Without that advent, the story would be hard to follow.', zh: '没有这个（重要事物）出现，故事会很难读下去。', structure: 'advent / 在句中表示 / （重要事物）出现', grammar: 'noun 用法，围绕「（重要事物）出现」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advent.', right: 'He gave me a lot of advice about the advent.', reason: 'advice 不可数。名词 advent 的单复数也要按词典词形来，不要自造。', rule: '先确定 advent 是noun，再套「（重要事物）出现」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advent.q1', senseId: 'advent.s1', errorType: 'meaning', type: '词义选择', prompt: '「advent」在本条的核心意思是：', options: ['（重要事物）出现', '完全相反的意思', '与本词无关的语法术语'], answer: '（重要事物）出现', explain: 'advent：（重要事物）出现。' },
      { id: 'advent.q2', senseId: 'advent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advent?', options: ['（重要事物）出现', 'a kind of ancient coin', 'the past tense of be'], answer: '（重要事物）出现', explain: '对的是「（重要事物）出现」。' },
      { id: 'advent.q3', senseId: 'advent.s1', errorType: 'grammar', type: '词义选择', prompt: 'advent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advent.q4', senseId: 'advent.s1', errorType: 'meaning', type: '词源', prompt: '记 advent 时，下面哪句更稳妥？', options: ['先锁住「（重要事物）出现」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（重要事物）出现」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（重要事物）出现'] },
  });

  D('adventure', {
    etymology: {
      origin: '拉丁语 adventura「将要发生的事」，advenire「到来」。',
      prefix: null,
      root: { text: 'adventure', gloss: '冒险' },
      suffix: null,
      history: [
        { label: 'adventure', text: '拉丁语 adventura「将要发生的事」，advenire「到来」。' },
        { label: '现在', text: '核心用法是：冒险。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：冒险。',
      mnemonic: '看到 adventure，先说出「冒险」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：冒险。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adventure.', chinese: '这一章反复回到同一个点：冒险。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adventure.s1', en: 'Without that adventure, the story would be hard to follow.', zh: '没有这个冒险，故事会很难读下去。', structure: 'adventure / 在句中表示 / 冒险', grammar: 'noun 用法，围绕「冒险」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adventure.', right: 'He gave me a lot of advice about the adventure.', reason: 'advice 不可数。名词 adventure 的单复数也要按词典词形来，不要自造。', rule: '先确定 adventure 是noun，再套「冒险」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adventure.q1', senseId: 'adventure.s1', errorType: 'meaning', type: '词义选择', prompt: '「adventure」在本条的核心意思是：', options: ['冒险', '完全相反的意思', '与本词无关的语法术语'], answer: '冒险', explain: 'adventure：冒险。' },
      { id: 'adventure.q2', senseId: 'adventure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adventure?', options: ['冒险', 'a kind of ancient coin', 'the past tense of be'], answer: '冒险', explain: '对的是「冒险」。' },
      { id: 'adventure.q3', senseId: 'adventure.s1', errorType: 'grammar', type: '词义选择', prompt: 'adventure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adventure.q4', senseId: 'adventure.s1', errorType: 'meaning', type: '词源', prompt: '记 adventure 时，下面哪句更稳妥？', options: ['先锁住「冒险」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「冒险」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冒险'] },
  });

  D('adventurer', {
    etymology: {
      origin: '英语派生：adventur 加上词尾，构成与「冒险家」相应的词类。',
      prefix: null,
      root: { text: 'adventur', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adventurer', text: '英语派生：adventur 加上词尾，构成与「冒险家」相应的词类。' },
        { label: '现在', text: '核心用法是：冒险家。' },
      ],
      formationLogic: '先认词干 adventur，再看词尾决定词性。',
      mnemonic: '看到 adventurer，先说出「冒险家」，再放进一句自己的话。',
      note: '先认词干 adventur，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adventurer.', chinese: '这一章反复回到同一个点：冒险家。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adventurer.s1', en: 'Without that adventurer, the story would be hard to follow.', zh: '没有这个冒险家，故事会很难读下去。', structure: 'adventurer / 在句中表示 / 冒险家', grammar: 'noun 用法，围绕「冒险家」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adventurer.', right: 'He gave me a lot of advice about the adventurer.', reason: 'advice 不可数。名词 adventurer 的单复数也要按词典词形来，不要自造。', rule: '先确定 adventurer 是noun，再套「冒险家」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adventurer.q1', senseId: 'adventurer.s1', errorType: 'meaning', type: '词义选择', prompt: '「adventurer」在本条的核心意思是：', options: ['冒险家', '完全相反的意思', '与本词无关的语法术语'], answer: '冒险家', explain: 'adventurer：冒险家。' },
      { id: 'adventurer.q2', senseId: 'adventurer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adventurer?', options: ['冒险家', 'a kind of ancient coin', 'the past tense of be'], answer: '冒险家', explain: '对的是「冒险家」。' },
      { id: 'adventurer.q3', senseId: 'adventurer.s1', errorType: 'grammar', type: '词义选择', prompt: 'adventurer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adventurer.q4', senseId: 'adventurer.s1', errorType: 'meaning', type: '词源', prompt: '记 adventurer 时，下面哪句更稳妥？', options: ['先锁住「冒险家」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「冒险家」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冒险家'] },
  });

  D('adventurous', {
    etymology: {
      origin: '英语派生：adventur 加上词尾，构成与「爱冒险的」相应的词类。',
      prefix: null,
      root: { text: 'adventur', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adventurous', text: '英语派生：adventur 加上词尾，构成与「爱冒险的」相应的词类。' },
        { label: '现在', text: '核心用法是：爱冒险的。' },
      ],
      formationLogic: '先认词干 adventur，再看词尾决定词性。',
      mnemonic: '看到 adventurous，先说出「爱冒险的」，再放进一句自己的话。',
      note: '先认词干 adventur，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adventurous even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得爱冒险的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adventurous.s1', en: 'They needed a adventurous answer, not a long speech.', zh: '他们要的是爱冒险的的答复，不是长篇发言。', structure: 'adventurous / 在句中表示 / 爱冒险的', grammar: 'adjective 用法，围绕「爱冒险的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adventurous.', right: 'The news is adventurous.', reason: 'news 作主语时动词用单数。形容词 adventurous 放在系动词后面。', rule: '先确定 adventurous 是adjective，再套「爱冒险的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adventurous.q1', senseId: 'adventurous.s1', errorType: 'meaning', type: '词义选择', prompt: '「adventurous」在本条的核心意思是：', options: ['爱冒险的', '完全相反的意思', '与本词无关的语法术语'], answer: '爱冒险的', explain: 'adventurous：爱冒险的。' },
      { id: 'adventurous.q2', senseId: 'adventurous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adventurous?', options: ['爱冒险的', 'a kind of ancient coin', 'the past tense of be'], answer: '爱冒险的', explain: '对的是「爱冒险的」。' },
      { id: 'adventurous.q3', senseId: 'adventurous.s1', errorType: 'grammar', type: '词义选择', prompt: 'adventurous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adventurous.q4', senseId: 'adventurous.s1', errorType: 'meaning', type: '词源', prompt: '记 adventurous 时，下面哪句更稳妥？', options: ['先锁住「爱冒险的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「爱冒险的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爱冒险的'] },
  });

  D('adverb', {
    etymology: {
      origin: '现代英语常用词「adverb」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adverb', gloss: '副词' },
      suffix: null,
      history: [
        { label: 'adverb', text: '现代英语常用词「adverb」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：副词。' },
      ],
      formationLogic: '核心义：副词。',
      mnemonic: '看到 adverb，先说出「副词」，再放进一句自己的话。',
      note: '核心义：副词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adverb.', chinese: '这一章反复回到同一个点：副词。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adverb.s1', en: 'Without that adverb, the story would be hard to follow.', zh: '没有这个副词，故事会很难读下去。', structure: 'adverb / 在句中表示 / 副词', grammar: 'noun 用法，围绕「副词」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adverb.', right: 'He gave me a lot of advice about the adverb.', reason: 'advice 不可数。名词 adverb 的单复数也要按词典词形来，不要自造。', rule: '先确定 adverb 是noun，再套「副词」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adverb.q1', senseId: 'adverb.s1', errorType: 'meaning', type: '词义选择', prompt: '「adverb」在本条的核心意思是：', options: ['副词', '完全相反的意思', '与本词无关的语法术语'], answer: '副词', explain: 'adverb：副词。' },
      { id: 'adverb.q2', senseId: 'adverb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adverb?', options: ['副词', 'a kind of ancient coin', 'the past tense of be'], answer: '副词', explain: '对的是「副词」。' },
      { id: 'adverb.q3', senseId: 'adverb.s1', errorType: 'grammar', type: '词义选择', prompt: 'adverb 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adverb.q4', senseId: 'adverb.s1', errorType: 'meaning', type: '词源', prompt: '记 adverb 时，下面哪句更稳妥？', options: ['先锁住「副词」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「副词」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['副词'] },
  });

  D('adverbial', {
    etymology: {
      origin: '英语派生：adverbi 加上词尾，构成与「状语的」相应的词类。',
      prefix: null,
      root: { text: 'adverbi', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adverbial', text: '英语派生：adverbi 加上词尾，构成与「状语的」相应的词类。' },
        { label: '现在', text: '核心用法是：状语的。' },
      ],
      formationLogic: '先认词干 adverbi，再看词尾决定词性。',
      mnemonic: '看到 adverbial，先说出「状语的」，再放进一句自己的话。',
      note: '先认词干 adverbi，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adverbial even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得状语的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adverbial.s1', en: 'They needed a adverbial answer, not a long speech.', zh: '他们要的是状语的的答复，不是长篇发言。', structure: 'adverbial / 在句中表示 / 状语的', grammar: 'adjective 用法，围绕「状语的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adverbial.', right: 'The news is adverbial.', reason: 'news 作主语时动词用单数。形容词 adverbial 放在系动词后面。', rule: '先确定 adverbial 是adjective，再套「状语的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adverbial.q1', senseId: 'adverbial.s1', errorType: 'meaning', type: '词义选择', prompt: '「adverbial」在本条的核心意思是：', options: ['状语的', '完全相反的意思', '与本词无关的语法术语'], answer: '状语的', explain: 'adverbial：状语的。' },
      { id: 'adverbial.q2', senseId: 'adverbial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adverbial?', options: ['状语的', 'a kind of ancient coin', 'the past tense of be'], answer: '状语的', explain: '对的是「状语的」。' },
      { id: 'adverbial.q3', senseId: 'adverbial.s1', errorType: 'grammar', type: '词义选择', prompt: 'adverbial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adverbial.q4', senseId: 'adverbial.s1', errorType: 'meaning', type: '词源', prompt: '记 adverbial 时，下面哪句更稳妥？', options: ['先锁住「状语的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「状语的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['状语的'] },
  });

  D('adversary', {
    etymology: {
      origin: '现代英语常用词「adversary」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adversary', gloss: '对手' },
      suffix: null,
      history: [
        { label: 'adversary', text: '现代英语常用词「adversary」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：对手。' },
      ],
      formationLogic: '核心义：对手。',
      mnemonic: '看到 adversary，先说出「对手」，再放进一句自己的话。',
      note: '核心义：对手。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adversary.', chinese: '这一章反复回到同一个点：对手。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adversary.s1', en: 'Without that adversary, the story would be hard to follow.', zh: '没有这个对手，故事会很难读下去。', structure: 'adversary / 在句中表示 / 对手', grammar: 'noun 用法，围绕「对手」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adversary.', right: 'He gave me a lot of advice about the adversary.', reason: 'advice 不可数。名词 adversary 的单复数也要按词典词形来，不要自造。', rule: '先确定 adversary 是noun，再套「对手」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adversary.q1', senseId: 'adversary.s1', errorType: 'meaning', type: '词义选择', prompt: '「adversary」在本条的核心意思是：', options: ['对手', '完全相反的意思', '与本词无关的语法术语'], answer: '对手', explain: 'adversary：对手。' },
      { id: 'adversary.q2', senseId: 'adversary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adversary?', options: ['对手', 'a kind of ancient coin', 'the past tense of be'], answer: '对手', explain: '对的是「对手」。' },
      { id: 'adversary.q3', senseId: 'adversary.s1', errorType: 'grammar', type: '词义选择', prompt: 'adversary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adversary.q4', senseId: 'adversary.s1', errorType: 'meaning', type: '词源', prompt: '记 adversary 时，下面哪句更稳妥？', options: ['先锁住「对手」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「对手」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对手'] },
  });

  D('adverse', {
    etymology: {
      origin: '现代英语常用词「adverse」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'adverse', gloss: '不利的' },
      suffix: null,
      history: [
        { label: 'adverse', text: '现代英语常用词「adverse」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：不利的。' },
      ],
      formationLogic: '核心义：不利的。',
      mnemonic: '看到 adverse，先说出「不利的」，再放进一句自己的话。',
      note: '核心义：不利的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked adverse even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得不利的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adverse.s1', en: 'They needed a adverse answer, not a long speech.', zh: '他们要的是不利的的答复，不是长篇发言。', structure: 'adverse / 在句中表示 / 不利的', grammar: 'adjective 用法，围绕「不利的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are adverse.', right: 'The news is adverse.', reason: 'news 作主语时动词用单数。形容词 adverse 放在系动词后面。', rule: '先确定 adverse 是adjective，再套「不利的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adverse.q1', senseId: 'adverse.s1', errorType: 'meaning', type: '词义选择', prompt: '「adverse」在本条的核心意思是：', options: ['不利的', '完全相反的意思', '与本词无关的语法术语'], answer: '不利的', explain: 'adverse：不利的。' },
      { id: 'adverse.q2', senseId: 'adverse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adverse?', options: ['不利的', 'a kind of ancient coin', 'the past tense of be'], answer: '不利的', explain: '对的是「不利的」。' },
      { id: 'adverse.q3', senseId: 'adverse.s1', errorType: 'grammar', type: '词义选择', prompt: 'adverse 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'adverse.q4', senseId: 'adverse.s1', errorType: 'meaning', type: '词源', prompt: '记 adverse 时，下面哪句更稳妥？', options: ['先锁住「不利的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「不利的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不利的'] },
  });

  D('adversity', {
    etymology: {
      origin: '英语派生：advers 加上词尾，构成与「逆境」相应的词类。',
      prefix: null,
      root: { text: 'advers', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adversity', text: '英语派生：advers 加上词尾，构成与「逆境」相应的词类。' },
        { label: '现在', text: '核心用法是：逆境。' },
      ],
      formationLogic: '先认词干 advers，再看词尾决定词性。',
      mnemonic: '看到 adversity，先说出「逆境」，再放进一句自己的话。',
      note: '先认词干 advers，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adversity.', chinese: '这一章反复回到同一个点：逆境。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adversity.s1', en: 'Without that adversity, the story would be hard to follow.', zh: '没有这个逆境，故事会很难读下去。', structure: 'adversity / 在句中表示 / 逆境', grammar: 'noun 用法，围绕「逆境」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adversity.', right: 'He gave me a lot of advice about the adversity.', reason: 'advice 不可数。名词 adversity 的单复数也要按词典词形来，不要自造。', rule: '先确定 adversity 是noun，再套「逆境」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adversity.q1', senseId: 'adversity.s1', errorType: 'meaning', type: '词义选择', prompt: '「adversity」在本条的核心意思是：', options: ['逆境', '完全相反的意思', '与本词无关的语法术语'], answer: '逆境', explain: 'adversity：逆境。' },
      { id: 'adversity.q2', senseId: 'adversity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adversity?', options: ['逆境', 'a kind of ancient coin', 'the past tense of be'], answer: '逆境', explain: '对的是「逆境」。' },
      { id: 'adversity.q3', senseId: 'adversity.s1', errorType: 'grammar', type: '词义选择', prompt: 'adversity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adversity.q4', senseId: 'adversity.s1', errorType: 'meaning', type: '词源', prompt: '记 adversity 时，下面哪句更稳妥？', options: ['先锁住「逆境」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「逆境」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逆境'] },
  });

  D('advertise', {
    etymology: {
      origin: '拉丁语 advertere「把注意力转过去」。',
      prefix: null,
      root: { text: 'advertise', gloss: '做广告' },
      suffix: null,
      history: [
        { label: 'advertise', text: '拉丁语 advertere「把注意力转过去」。' },
        { label: '现在', text: '核心用法是：做广告。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：做广告。',
      mnemonic: '看到 advertise，先说出「做广告」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：做广告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to advertise before the office closed.', chinese: '小组得在办公室关门前完成这件事：做广告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advertise.s1', en: 'Nobody wanted to advertise, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 advertise 是「做广告」。', structure: 'advertise / 在句中表示 / 做广告', grammar: 'verb 用法，围绕「做广告」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She advertiseed the form yesterday without checking the real past form.', right: 'Look up the past form of "advertise" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 advertise 是verb，再套「做广告」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advertise.q1', senseId: 'advertise.s1', errorType: 'meaning', type: '词义选择', prompt: '「advertise」在本条的核心意思是：', options: ['做广告', '完全相反的意思', '与本词无关的语法术语'], answer: '做广告', explain: 'advertise：做广告。' },
      { id: 'advertise.q2', senseId: 'advertise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advertise?', options: ['做广告', 'a kind of ancient coin', 'the past tense of be'], answer: '做广告', explain: '对的是「做广告」。' },
      { id: 'advertise.q3', senseId: 'advertise.s1', errorType: 'grammar', type: '词义选择', prompt: 'advertise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'advertise.q4', senseId: 'advertise.s1', errorType: 'meaning', type: '词源', prompt: '记 advertise 时，下面哪句更稳妥？', options: ['先锁住「做广告」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「做广告」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['做广告'] },
  });

  D('advertisement', {
    etymology: {
      origin: '英语派生：advertise 加上词尾，构成与「广告」相应的词类。',
      prefix: null,
      root: { text: 'advertise', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'advertisement', text: '英语派生：advertise 加上词尾，构成与「广告」相应的词类。' },
        { label: '现在', text: '核心用法是：广告。' },
      ],
      formationLogic: '先认词干 advertise，再看词尾决定词性。',
      mnemonic: '看到 advertisement，先说出「广告」，再放进一句自己的话。',
      note: '先认词干 advertise，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advertisement.', chinese: '这一章反复回到同一个点：广告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advertisement.s1', en: 'Without that advertisement, the story would be hard to follow.', zh: '没有这个广告，故事会很难读下去。', structure: 'advertisement / 在句中表示 / 广告', grammar: 'noun 用法，围绕「广告」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advertisement.', right: 'He gave me a lot of advice about the advertisement.', reason: 'advice 不可数。名词 advertisement 的单复数也要按词典词形来，不要自造。', rule: '先确定 advertisement 是noun，再套「广告」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advertisement.q1', senseId: 'advertisement.s1', errorType: 'meaning', type: '词义选择', prompt: '「advertisement」在本条的核心意思是：', options: ['广告', '完全相反的意思', '与本词无关的语法术语'], answer: '广告', explain: 'advertisement：广告。' },
      { id: 'advertisement.q2', senseId: 'advertisement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advertisement?', options: ['广告', 'a kind of ancient coin', 'the past tense of be'], answer: '广告', explain: '对的是「广告」。' },
      { id: 'advertisement.q3', senseId: 'advertisement.s1', errorType: 'grammar', type: '词义选择', prompt: 'advertisement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advertisement.q4', senseId: 'advertisement.s1', errorType: 'meaning', type: '词源', prompt: '记 advertisement 时，下面哪句更稳妥？', options: ['先锁住「广告」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「广告」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['广告'] },
  });

  D('advertising', {
    etymology: {
      origin: '现代英语常用词「advertising」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'advertising', gloss: '广告业' },
      suffix: null,
      history: [
        { label: 'advertising', text: '现代英语常用词「advertising」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：广告业。' },
      ],
      formationLogic: '核心义：广告业。',
      mnemonic: '看到 advertising，先说出「广告业」，再放进一句自己的话。',
      note: '核心义：广告业。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advertising.', chinese: '这一章反复回到同一个点：广告业。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advertising.s1', en: 'Without that advertising, the story would be hard to follow.', zh: '没有这个广告业，故事会很难读下去。', structure: 'advertising / 在句中表示 / 广告业', grammar: 'noun 用法，围绕「广告业」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advertising.', right: 'He gave me a lot of advice about the advertising.', reason: 'advice 不可数。名词 advertising 的单复数也要按词典词形来，不要自造。', rule: '先确定 advertising 是noun，再套「广告业」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advertising.q1', senseId: 'advertising.s1', errorType: 'meaning', type: '词义选择', prompt: '「advertising」在本条的核心意思是：', options: ['广告业', '完全相反的意思', '与本词无关的语法术语'], answer: '广告业', explain: 'advertising：广告业。' },
      { id: 'advertising.q2', senseId: 'advertising.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advertising?', options: ['广告业', 'a kind of ancient coin', 'the past tense of be'], answer: '广告业', explain: '对的是「广告业」。' },
      { id: 'advertising.q3', senseId: 'advertising.s1', errorType: 'grammar', type: '词义选择', prompt: 'advertising 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advertising.q4', senseId: 'advertising.s1', errorType: 'meaning', type: '词源', prompt: '记 advertising 时，下面哪句更稳妥？', options: ['先锁住「广告业」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「广告业」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['广告业'] },
  });

  D('advice', {
    etymology: {
      origin: '古法语 avis「看法」，拉丁语 visum「所看见的」。',
      prefix: null,
      root: { text: 'advice', gloss: '建议' },
      suffix: null,
      history: [
        { label: 'advice', text: '古法语 avis「看法」，拉丁语 visum「所看见的」。' },
        { label: '现在', text: '核心用法是：建议。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：建议。',
      mnemonic: '看到 advice，先说出「建议」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：建议。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advice.', chinese: '这一章反复回到同一个点：建议。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advice.s1', en: 'Without that advice, the story would be hard to follow.', zh: '没有这个建议，故事会很难读下去。', structure: 'advice / 在句中表示 / 建议', grammar: 'noun 用法，围绕「建议」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advice.', right: 'He gave me a lot of advice about the advice.', reason: 'advice 不可数。名词 advice 的单复数也要按词典词形来，不要自造。', rule: '先确定 advice 是noun，再套「建议」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advice.q1', senseId: 'advice.s1', errorType: 'meaning', type: '词义选择', prompt: '「advice」在本条的核心意思是：', options: ['建议', '完全相反的意思', '与本词无关的语法术语'], answer: '建议', explain: 'advice：建议。' },
      { id: 'advice.q2', senseId: 'advice.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advice?', options: ['建议', 'a kind of ancient coin', 'the past tense of be'], answer: '建议', explain: '对的是「建议」。' },
      { id: 'advice.q3', senseId: 'advice.s1', errorType: 'grammar', type: '词义选择', prompt: 'advice 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advice.q4', senseId: 'advice.s1', errorType: 'meaning', type: '词源', prompt: '记 advice 时，下面哪句更稳妥？', options: ['先锁住「建议」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「建议」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建议'] },
  });

  D('advisable', {
    etymology: {
      origin: '英语派生：advis 加上词尾，构成与「明智的」相应的词类。',
      prefix: null,
      root: { text: 'advis', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'advisable', text: '英语派生：advis 加上词尾，构成与「明智的」相应的词类。' },
        { label: '现在', text: '核心用法是：明智的。' },
      ],
      formationLogic: '先认词干 advis，再看词尾决定词性。',
      mnemonic: '看到 advisable，先说出「明智的」，再放进一句自己的话。',
      note: '先认词干 advis，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked advisable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得明智的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advisable.s1', en: 'They needed a advisable answer, not a long speech.', zh: '他们要的是明智的的答复，不是长篇发言。', structure: 'advisable / 在句中表示 / 明智的', grammar: 'adjective 用法，围绕「明智的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are advisable.', right: 'The news is advisable.', reason: 'news 作主语时动词用单数。形容词 advisable 放在系动词后面。', rule: '先确定 advisable 是adjective，再套「明智的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advisable.q1', senseId: 'advisable.s1', errorType: 'meaning', type: '词义选择', prompt: '「advisable」在本条的核心意思是：', options: ['明智的', '完全相反的意思', '与本词无关的语法术语'], answer: '明智的', explain: 'advisable：明智的。' },
      { id: 'advisable.q2', senseId: 'advisable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advisable?', options: ['明智的', 'a kind of ancient coin', 'the past tense of be'], answer: '明智的', explain: '对的是「明智的」。' },
      { id: 'advisable.q3', senseId: 'advisable.s1', errorType: 'grammar', type: '词义选择', prompt: 'advisable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'advisable.q4', senseId: 'advisable.s1', errorType: 'meaning', type: '词源', prompt: '记 advisable 时，下面哪句更稳妥？', options: ['先锁住「明智的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「明智的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['明智的'] },
  });

  D('advise', {
    etymology: {
      origin: '与 advice 同源，avis「意见」。',
      prefix: null,
      root: { text: 'advise', gloss: '建议' },
      suffix: null,
      history: [
        { label: 'advise', text: '与 advice 同源，avis「意见」。' },
        { label: '现在', text: '核心用法是：建议。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：建议。',
      mnemonic: '看到 advise，先说出「建议」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：建议。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to advise before the office closed.', chinese: '小组得在办公室关门前完成这件事：建议。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advise.s1', en: 'Nobody wanted to advise, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 advise 是「建议」。', structure: 'advise / 在句中表示 / 建议', grammar: 'verb 用法，围绕「建议」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She adviseed the form yesterday without checking the real past form.', right: 'Look up the past form of "advise" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 advise 是verb，再套「建议」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advise.q1', senseId: 'advise.s1', errorType: 'meaning', type: '词义选择', prompt: '「advise」在本条的核心意思是：', options: ['建议', '完全相反的意思', '与本词无关的语法术语'], answer: '建议', explain: 'advise：建议。' },
      { id: 'advise.q2', senseId: 'advise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advise?', options: ['建议', 'a kind of ancient coin', 'the past tense of be'], answer: '建议', explain: '对的是「建议」。' },
      { id: 'advise.q3', senseId: 'advise.s1', errorType: 'grammar', type: '词义选择', prompt: 'advise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'advise.q4', senseId: 'advise.s1', errorType: 'meaning', type: '词源', prompt: '记 advise 时，下面哪句更稳妥？', options: ['先锁住「建议」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「建议」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建议'] },
  });

  D('adviser', {
    etymology: {
      origin: '英语派生：advis 加上词尾，构成与「顾问」相应的词类。',
      prefix: null,
      root: { text: 'advis', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'adviser', text: '英语派生：advis 加上词尾，构成与「顾问」相应的词类。' },
        { label: '现在', text: '核心用法是：顾问。' },
      ],
      formationLogic: '先认词干 advis，再看词尾决定词性。',
      mnemonic: '看到 adviser，先说出「顾问」，再放进一句自己的话。',
      note: '先认词干 advis，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one adviser.', chinese: '这一章反复回到同一个点：顾问。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'adviser.s1', en: 'Without that adviser, the story would be hard to follow.', zh: '没有这个顾问，故事会很难读下去。', structure: 'adviser / 在句中表示 / 顾问', grammar: 'noun 用法，围绕「顾问」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the adviser.', right: 'He gave me a lot of advice about the adviser.', reason: 'advice 不可数。名词 adviser 的单复数也要按词典词形来，不要自造。', rule: '先确定 adviser 是noun，再套「顾问」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'adviser.q1', senseId: 'adviser.s1', errorType: 'meaning', type: '词义选择', prompt: '「adviser」在本条的核心意思是：', options: ['顾问', '完全相反的意思', '与本词无关的语法术语'], answer: '顾问', explain: 'adviser：顾问。' },
      { id: 'adviser.q2', senseId: 'adviser.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches adviser?', options: ['顾问', 'a kind of ancient coin', 'the past tense of be'], answer: '顾问', explain: '对的是「顾问」。' },
      { id: 'adviser.q3', senseId: 'adviser.s1', errorType: 'grammar', type: '词义选择', prompt: 'adviser 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'adviser.q4', senseId: 'adviser.s1', errorType: 'meaning', type: '词源', prompt: '记 adviser 时，下面哪句更稳妥？', options: ['先锁住「顾问」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「顾问」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['顾问'] },
  });

  D('advisory', {
    etymology: {
      origin: '现代英语常用词「advisory」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'advisory', gloss: '通告' },
      suffix: null,
      history: [
        { label: 'advisory', text: '现代英语常用词「advisory」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：通告。' },
      ],
      formationLogic: '核心义：通告。',
      mnemonic: '看到 advisory，先说出「通告」，再放进一句自己的话。',
      note: '核心义：通告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advisory.', chinese: '这一章反复回到同一个点：通告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advisory.s1', en: 'Without that advisory, the story would be hard to follow.', zh: '没有这个通告，故事会很难读下去。', structure: 'advisory / 在句中表示 / 通告', grammar: 'noun 用法，围绕「通告」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advisory.', right: 'He gave me a lot of advice about the advisory.', reason: 'advice 不可数。名词 advisory 的单复数也要按词典词形来，不要自造。', rule: '先确定 advisory 是noun，再套「通告」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advisory.q1', senseId: 'advisory.s1', errorType: 'meaning', type: '词义选择', prompt: '「advisory」在本条的核心意思是：', options: ['通告', '完全相反的意思', '与本词无关的语法术语'], answer: '通告', explain: 'advisory：通告。' },
      { id: 'advisory.q2', senseId: 'advisory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advisory?', options: ['通告', 'a kind of ancient coin', 'the past tense of be'], answer: '通告', explain: '对的是「通告」。' },
      { id: 'advisory.q3', senseId: 'advisory.s1', errorType: 'grammar', type: '词义选择', prompt: 'advisory 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advisory.q4', senseId: 'advisory.s1', errorType: 'meaning', type: '词源', prompt: '记 advisory 时，下面哪句更稳妥？', options: ['先锁住「通告」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「通告」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['通告'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
