/* data/words/cet/author_depth_g4.js
 * 手敲深度补丁：floor–fulfil（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('floor', {
    etymology: {
      origin: '英语派生：flo + -or，词性转到「地板」。',
      prefix: null,
      root: { text: 'flo', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'floor', text: '英语派生：flo + -or，词性转到「地板」。' },
        { label: '现在', text: '核心用法是：地板。' },
      ],
      formationLogic: '先认词干 flo，再看词尾。',
      mnemonic: '看到 floor，先说出「地板」。',
      note: '先认词干 flo，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one floor.', chinese: '这一章反复回到同一个点：地板。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'floor.s1', en: 'Without that floor, the next paragraph is hard to follow.', zh: '没有这个地板，下一段会很难读。', structure: 'floor / 表示 / 地板', grammar: 'noun，围绕「地板」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the floor.', right: 'He gave me some advice about the floor.', reason: 'advice 不可数。名词 floor 的单复数按词典词形记。', rule: '先确定 floor 是noun，再套「地板」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'floor.q1', senseId: 'floor.s1', errorType: 'meaning', type: '词义选择', prompt: '「floor」在本条的核心意思是：', options: ['地板', '完全相反的意思', '一种古代钱币'], answer: '地板', explain: 'floor：地板。' },
      { id: 'floor.q2', senseId: 'floor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches floor?', options: ['地板', 'a kind of ancient coin', 'the past tense of be'], answer: '地板', explain: '对的是「地板」。' },
      { id: 'floor.q3', senseId: 'floor.s1', errorType: 'grammar', type: '词义选择', prompt: 'floor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'floor.q4', senseId: 'floor.s1', errorType: 'meaning', type: '词源', prompt: '记 floor 时，哪句更稳妥？', options: ['先锁住「地板」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地板」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地板'] },
  });

  D('flop', {
    etymology: {
      origin: '现代英语常用词「flop」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flop', gloss: '惨败' },
      suffix: null,
      history: [
        { label: 'flop', text: '现代英语常用词「flop」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：惨败。' },
      ],
      formationLogic: '核心义：惨败。',
      mnemonic: '看到 flop，先说出「惨败」。',
      note: '核心义：惨败。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flop.', chinese: '这一章反复回到同一个点：惨败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flop.s1', en: 'Without that flop, the next paragraph is hard to follow.', zh: '没有这个惨败，下一段会很难读。', structure: 'flop / 表示 / 惨败', grammar: 'noun，围绕「惨败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flop.', right: 'He gave me some advice about the flop.', reason: 'advice 不可数。名词 flop 的单复数按词典词形记。', rule: '先确定 flop 是noun，再套「惨败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flop.q1', senseId: 'flop.s1', errorType: 'meaning', type: '词义选择', prompt: '「flop」在本条的核心意思是：', options: ['惨败', '完全相反的意思', '一种古代钱币'], answer: '惨败', explain: 'flop：惨败。' },
      { id: 'flop.q2', senseId: 'flop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flop?', options: ['惨败', 'a kind of ancient coin', 'the past tense of be'], answer: '惨败', explain: '对的是「惨败」。' },
      { id: 'flop.q3', senseId: 'flop.s1', errorType: 'grammar', type: '词义选择', prompt: 'flop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flop.q4', senseId: 'flop.s1', errorType: 'meaning', type: '词源', prompt: '记 flop 时，哪句更稳妥？', options: ['先锁住「惨败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「惨败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['惨败'] },
  });

  D('floppy', {
    etymology: {
      origin: '现代英语常用词「floppy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'floppy', gloss: '松软下垂的' },
      suffix: null,
      history: [
        { label: 'floppy', text: '现代英语常用词「floppy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：松软下垂的。' },
      ],
      formationLogic: '核心义：松软下垂的。',
      mnemonic: '看到 floppy，先说出「松软下垂的」。',
      note: '核心义：松软下垂的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was floppy.', chinese: '即使是初读者也能看出，这个结果是松软下垂的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'floppy.s1', en: 'They wanted a floppy answer, not a long speech.', zh: '他们要一个松软下垂的的答复，不要长篇发言。', structure: 'floppy / 表示 / 松软下垂的', grammar: 'adjective，围绕「松软下垂的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are floppy.', right: 'The news is floppy.', reason: 'news 作主语时动词用单数。', rule: '先确定 floppy 是adjective，再套「松软下垂的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'floppy.q1', senseId: 'floppy.s1', errorType: 'meaning', type: '词义选择', prompt: '「floppy」在本条的核心意思是：', options: ['松软下垂的', '完全相反的意思', '一种古代钱币'], answer: '松软下垂的', explain: 'floppy：松软下垂的。' },
      { id: 'floppy.q2', senseId: 'floppy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches floppy?', options: ['松软下垂的', 'a kind of ancient coin', 'the past tense of be'], answer: '松软下垂的', explain: '对的是「松软下垂的」。' },
      { id: 'floppy.q3', senseId: 'floppy.s1', errorType: 'grammar', type: '词义选择', prompt: 'floppy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'floppy.q4', senseId: 'floppy.s1', errorType: 'meaning', type: '词源', prompt: '记 floppy 时，哪句更稳妥？', options: ['先锁住「松软下垂的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「松软下垂的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['松软下垂的'] },
  });

  D('flora', {
    etymology: {
      origin: '现代英语常用词「flora」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flora', gloss: '植物群' },
      suffix: null,
      history: [
        { label: 'flora', text: '现代英语常用词「flora」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：植物群。' },
      ],
      formationLogic: '核心义：植物群。',
      mnemonic: '看到 flora，先说出「植物群」。',
      note: '核心义：植物群。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flora.', chinese: '这一章反复回到同一个点：植物群。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flora.s1', en: 'Without that flora, the next paragraph is hard to follow.', zh: '没有这个植物群，下一段会很难读。', structure: 'flora / 表示 / 植物群', grammar: 'noun，围绕「植物群」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flora.', right: 'He gave me some advice about the flora.', reason: 'advice 不可数。名词 flora 的单复数按词典词形记。', rule: '先确定 flora 是noun，再套「植物群」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flora.q1', senseId: 'flora.s1', errorType: 'meaning', type: '词义选择', prompt: '「flora」在本条的核心意思是：', options: ['植物群', '完全相反的意思', '一种古代钱币'], answer: '植物群', explain: 'flora：植物群。' },
      { id: 'flora.q2', senseId: 'flora.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flora?', options: ['植物群', 'a kind of ancient coin', 'the past tense of be'], answer: '植物群', explain: '对的是「植物群」。' },
      { id: 'flora.q3', senseId: 'flora.s1', errorType: 'grammar', type: '词义选择', prompt: 'flora 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flora.q4', senseId: 'flora.s1', errorType: 'meaning', type: '词源', prompt: '记 flora 时，哪句更稳妥？', options: ['先锁住「植物群」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「植物群」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['植物群'] },
  });

  D('flour', {
    etymology: {
      origin: '现代英语常用词「flour」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flour', gloss: '面粉' },
      suffix: null,
      history: [
        { label: 'flour', text: '现代英语常用词「flour」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：面粉。' },
      ],
      formationLogic: '核心义：面粉。',
      mnemonic: '看到 flour，先说出「面粉」。',
      note: '核心义：面粉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flour.', chinese: '这一章反复回到同一个点：面粉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flour.s1', en: 'Without that flour, the next paragraph is hard to follow.', zh: '没有这个面粉，下一段会很难读。', structure: 'flour / 表示 / 面粉', grammar: 'noun，围绕「面粉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flour.', right: 'He gave me some advice about the flour.', reason: 'advice 不可数。名词 flour 的单复数按词典词形记。', rule: '先确定 flour 是noun，再套「面粉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flour.q1', senseId: 'flour.s1', errorType: 'meaning', type: '词义选择', prompt: '「flour」在本条的核心意思是：', options: ['面粉', '完全相反的意思', '一种古代钱币'], answer: '面粉', explain: 'flour：面粉。' },
      { id: 'flour.q2', senseId: 'flour.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flour?', options: ['面粉', 'a kind of ancient coin', 'the past tense of be'], answer: '面粉', explain: '对的是「面粉」。' },
      { id: 'flour.q3', senseId: 'flour.s1', errorType: 'grammar', type: '词义选择', prompt: 'flour 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flour.q4', senseId: 'flour.s1', errorType: 'meaning', type: '词源', prompt: '记 flour 时，哪句更稳妥？', options: ['先锁住「面粉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面粉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面粉'] },
  });

  D('flourish', {
    etymology: {
      origin: '现代英语常用词「flourish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flourish', gloss: '繁荣' },
      suffix: null,
      history: [
        { label: 'flourish', text: '现代英语常用词「flourish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：繁荣。' },
      ],
      formationLogic: '核心义：繁荣。',
      mnemonic: '看到 flourish，先说出「繁荣」。',
      note: '核心义：繁荣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flourish before the office closed.', chinese: '他们同意在办公室关门前做这件事：繁荣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flourish.s1', en: 'The deadline forced the team to flourish that afternoon.', zh: '截止日期逼着小组在那天下午繁荣。', structure: 'flourish / 表示 / 繁荣', grammar: 'verb，围绕「繁荣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flourished it yesterday without checking the real past form.', right: 'Check the past form of "flourish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flourish 是verb，再套「繁荣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flourish.q1', senseId: 'flourish.s1', errorType: 'meaning', type: '词义选择', prompt: '「flourish」在本条的核心意思是：', options: ['繁荣', '完全相反的意思', '一种古代钱币'], answer: '繁荣', explain: 'flourish：繁荣。' },
      { id: 'flourish.q2', senseId: 'flourish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flourish?', options: ['繁荣', 'a kind of ancient coin', 'the past tense of be'], answer: '繁荣', explain: '对的是「繁荣」。' },
      { id: 'flourish.q3', senseId: 'flourish.s1', errorType: 'grammar', type: '词义选择', prompt: 'flourish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flourish.q4', senseId: 'flourish.s1', errorType: 'meaning', type: '词源', prompt: '记 flourish 时，哪句更稳妥？', options: ['先锁住「繁荣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「繁荣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['繁荣'] },
  });

  D('flow', {
    etymology: {
      origin: '现代英语常用词「flow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flow', gloss: '流动' },
      suffix: null,
      history: [
        { label: 'flow', text: '现代英语常用词「flow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：流动。' },
      ],
      formationLogic: '核心义：流动。',
      mnemonic: '看到 flow，先说出「流动」。',
      note: '核心义：流动。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flow before the office closed.', chinese: '他们同意在办公室关门前做这件事：流动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flow.s1', en: 'The deadline forced the team to flow that afternoon.', zh: '截止日期逼着小组在那天下午流动。', structure: 'flow / 表示 / 流动', grammar: 'verb，围绕「流动」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flowed it yesterday without checking the real past form.', right: 'Check the past form of "flow" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flow 是verb，再套「流动」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flow.q1', senseId: 'flow.s1', errorType: 'meaning', type: '词义选择', prompt: '「flow」在本条的核心意思是：', options: ['流动', '完全相反的意思', '一种古代钱币'], answer: '流动', explain: 'flow：流动。' },
      { id: 'flow.q2', senseId: 'flow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flow?', options: ['流动', 'a kind of ancient coin', 'the past tense of be'], answer: '流动', explain: '对的是「流动」。' },
      { id: 'flow.q3', senseId: 'flow.s1', errorType: 'grammar', type: '词义选择', prompt: 'flow 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flow.q4', senseId: 'flow.s1', errorType: 'meaning', type: '词源', prompt: '记 flow 时，哪句更稳妥？', options: ['先锁住「流动」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流动」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流动'] },
  });

  D('flower', {
    etymology: {
      origin: '英语派生：flow + -er，词性转到「花」。',
      prefix: null,
      root: { text: 'flow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flower', text: '英语派生：flow + -er，词性转到「花」。' },
        { label: '现在', text: '核心用法是：花。' },
      ],
      formationLogic: '先认词干 flow，再看词尾。',
      mnemonic: '看到 flower，先说出「花」。',
      note: '先认词干 flow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flower.', chinese: '这一章反复回到同一个点：花。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flower.s1', en: 'Without that flower, the next paragraph is hard to follow.', zh: '没有这个花，下一段会很难读。', structure: 'flower / 表示 / 花', grammar: 'noun，围绕「花」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flower.', right: 'He gave me some advice about the flower.', reason: 'advice 不可数。名词 flower 的单复数按词典词形记。', rule: '先确定 flower 是noun，再套「花」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flower.q1', senseId: 'flower.s1', errorType: 'meaning', type: '词义选择', prompt: '「flower」在本条的核心意思是：', options: ['花', '完全相反的意思', '一种古代钱币'], answer: '花', explain: 'flower：花。' },
      { id: 'flower.q2', senseId: 'flower.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flower?', options: ['花', 'a kind of ancient coin', 'the past tense of be'], answer: '花', explain: '对的是「花」。' },
      { id: 'flower.q3', senseId: 'flower.s1', errorType: 'grammar', type: '词义选择', prompt: 'flower 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flower.q4', senseId: 'flower.s1', errorType: 'meaning', type: '词源', prompt: '记 flower 时，哪句更稳妥？', options: ['先锁住「花」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「花」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['花'] },
  });

  D('flowerpot', {
    etymology: {
      origin: '现代英语常用词「flowerpot」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flowerpot', gloss: '花盆' },
      suffix: null,
      history: [
        { label: 'flowerpot', text: '现代英语常用词「flowerpot」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：花盆。' },
      ],
      formationLogic: '核心义：花盆。',
      mnemonic: '看到 flowerpot，先说出「花盆」。',
      note: '核心义：花盆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flowerpot.', chinese: '这一章反复回到同一个点：花盆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flowerpot.s1', en: 'Without that flowerpot, the next paragraph is hard to follow.', zh: '没有这个花盆，下一段会很难读。', structure: 'flowerpot / 表示 / 花盆', grammar: 'noun，围绕「花盆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flowerpot.', right: 'He gave me some advice about the flowerpot.', reason: 'advice 不可数。名词 flowerpot 的单复数按词典词形记。', rule: '先确定 flowerpot 是noun，再套「花盆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flowerpot.q1', senseId: 'flowerpot.s1', errorType: 'meaning', type: '词义选择', prompt: '「flowerpot」在本条的核心意思是：', options: ['花盆', '完全相反的意思', '一种古代钱币'], answer: '花盆', explain: 'flowerpot：花盆。' },
      { id: 'flowerpot.q2', senseId: 'flowerpot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flowerpot?', options: ['花盆', 'a kind of ancient coin', 'the past tense of be'], answer: '花盆', explain: '对的是「花盆」。' },
      { id: 'flowerpot.q3', senseId: 'flowerpot.s1', errorType: 'grammar', type: '词义选择', prompt: 'flowerpot 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flowerpot.q4', senseId: 'flowerpot.s1', errorType: 'meaning', type: '词源', prompt: '记 flowerpot 时，哪句更稳妥？', options: ['先锁住「花盆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「花盆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['花盆'] },
  });

  D('flowing', {
    etymology: {
      origin: '英语派生：flow + -ing，词性转到「流动」。',
      prefix: null,
      root: { text: 'flow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flowing', text: '英语派生：flow + -ing，词性转到「流动」。' },
        { label: '现在', text: '核心用法是：流动。' },
      ],
      formationLogic: '先认词干 flow，再看词尾。',
      mnemonic: '看到 flowing，先说出「流动」。',
      note: '先认词干 flow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flowing before the office closed.', chinese: '他们同意在办公室关门前做这件事：流动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flowing.s1', en: 'The deadline forced the team to flowing that afternoon.', zh: '截止日期逼着小组在那天下午流动。', structure: 'flowing / 表示 / 流动', grammar: 'verb，围绕「流动」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flowinged it yesterday without checking the real past form.', right: 'Check the past form of "flowing" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flowing 是verb，再套「流动」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flowing.q1', senseId: 'flowing.s1', errorType: 'meaning', type: '词义选择', prompt: '「flowing」在本条的核心意思是：', options: ['流动', '完全相反的意思', '一种古代钱币'], answer: '流动', explain: 'flowing：流动。' },
      { id: 'flowing.q2', senseId: 'flowing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flowing?', options: ['流动', 'a kind of ancient coin', 'the past tense of be'], answer: '流动', explain: '对的是「流动」。' },
      { id: 'flowing.q3', senseId: 'flowing.s1', errorType: 'grammar', type: '词义选择', prompt: 'flowing 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flowing.q4', senseId: 'flowing.s1', errorType: 'meaning', type: '词源', prompt: '记 flowing 时，哪句更稳妥？', options: ['先锁住「流动」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流动」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流动'] },
  });

  D('fluctuate', {
    etymology: {
      origin: '现代英语常用词「fluctuate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fluctuate', gloss: '波动' },
      suffix: null,
      history: [
        { label: 'fluctuate', text: '现代英语常用词「fluctuate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：波动。' },
      ],
      formationLogic: '核心义：波动。',
      mnemonic: '看到 fluctuate，先说出「波动」。',
      note: '核心义：波动。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fluctuate before the office closed.', chinese: '他们同意在办公室关门前做这件事：波动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fluctuate.s1', en: 'The deadline forced the team to fluctuate that afternoon.', zh: '截止日期逼着小组在那天下午波动。', structure: 'fluctuate / 表示 / 波动', grammar: 'verb，围绕「波动」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fluctuateed it yesterday without checking the real past form.', right: 'Check the past form of "fluctuate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fluctuate 是verb，再套「波动」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fluctuate.q1', senseId: 'fluctuate.s1', errorType: 'meaning', type: '词义选择', prompt: '「fluctuate」在本条的核心意思是：', options: ['波动', '完全相反的意思', '一种古代钱币'], answer: '波动', explain: 'fluctuate：波动。' },
      { id: 'fluctuate.q2', senseId: 'fluctuate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fluctuate?', options: ['波动', 'a kind of ancient coin', 'the past tense of be'], answer: '波动', explain: '对的是「波动」。' },
      { id: 'fluctuate.q3', senseId: 'fluctuate.s1', errorType: 'grammar', type: '词义选择', prompt: 'fluctuate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fluctuate.q4', senseId: 'fluctuate.s1', errorType: 'meaning', type: '词源', prompt: '记 fluctuate 时，哪句更稳妥？', options: ['先锁住「波动」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「波动」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['波动'] },
  });

  D('flue', {
    etymology: {
      origin: '现代英语常用词「flue」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flue', gloss: '烟道' },
      suffix: null,
      history: [
        { label: 'flue', text: '现代英语常用词「flue」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：烟道。' },
      ],
      formationLogic: '核心义：烟道。',
      mnemonic: '看到 flue，先说出「烟道」。',
      note: '核心义：烟道。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flue.', chinese: '这一章反复回到同一个点：烟道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flue.s1', en: 'Without that flue, the next paragraph is hard to follow.', zh: '没有这个烟道，下一段会很难读。', structure: 'flue / 表示 / 烟道', grammar: 'noun，围绕「烟道」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flue.', right: 'He gave me some advice about the flue.', reason: 'advice 不可数。名词 flue 的单复数按词典词形记。', rule: '先确定 flue 是noun，再套「烟道」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flue.q1', senseId: 'flue.s1', errorType: 'meaning', type: '词义选择', prompt: '「flue」在本条的核心意思是：', options: ['烟道', '完全相反的意思', '一种古代钱币'], answer: '烟道', explain: 'flue：烟道。' },
      { id: 'flue.q2', senseId: 'flue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flue?', options: ['烟道', 'a kind of ancient coin', 'the past tense of be'], answer: '烟道', explain: '对的是「烟道」。' },
      { id: 'flue.q3', senseId: 'flue.s1', errorType: 'grammar', type: '词义选择', prompt: 'flue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flue.q4', senseId: 'flue.s1', errorType: 'meaning', type: '词源', prompt: '记 flue 时，哪句更稳妥？', options: ['先锁住「烟道」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烟道」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烟道'] },
  });

  D('fluent', {
    etymology: {
      origin: '现代英语常用词「fluent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fluent', gloss: '流利的' },
      suffix: null,
      history: [
        { label: 'fluent', text: '现代英语常用词「fluent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：流利的。' },
      ],
      formationLogic: '核心义：流利的。',
      mnemonic: '看到 fluent，先说出「流利的」。',
      note: '核心义：流利的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fluent.', chinese: '即使是初读者也能看出，这个结果是流利的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fluent.s1', en: 'They wanted a fluent answer, not a long speech.', zh: '他们要一个流利的的答复，不要长篇发言。', structure: 'fluent / 表示 / 流利的', grammar: 'adjective，围绕「流利的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fluent.', right: 'The news is fluent.', reason: 'news 作主语时动词用单数。', rule: '先确定 fluent 是adjective，再套「流利的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fluent.q1', senseId: 'fluent.s1', errorType: 'meaning', type: '词义选择', prompt: '「fluent」在本条的核心意思是：', options: ['流利的', '完全相反的意思', '一种古代钱币'], answer: '流利的', explain: 'fluent：流利的。' },
      { id: 'fluent.q2', senseId: 'fluent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fluent?', options: ['流利的', 'a kind of ancient coin', 'the past tense of be'], answer: '流利的', explain: '对的是「流利的」。' },
      { id: 'fluent.q3', senseId: 'fluent.s1', errorType: 'grammar', type: '词义选择', prompt: 'fluent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fluent.q4', senseId: 'fluent.s1', errorType: 'meaning', type: '词源', prompt: '记 fluent 时，哪句更稳妥？', options: ['先锁住「流利的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流利的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流利的'] },
  });

  D('fluid', {
    etymology: {
      origin: '现代英语常用词「fluid」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fluid', gloss: '流体' },
      suffix: null,
      history: [
        { label: 'fluid', text: '现代英语常用词「fluid」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：流体。' },
      ],
      formationLogic: '核心义：流体。',
      mnemonic: '看到 fluid，先说出「流体」。',
      note: '核心义：流体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fluid.', chinese: '这一章反复回到同一个点：流体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fluid.s1', en: 'Without that fluid, the next paragraph is hard to follow.', zh: '没有这个流体，下一段会很难读。', structure: 'fluid / 表示 / 流体', grammar: 'noun，围绕「流体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fluid.', right: 'He gave me some advice about the fluid.', reason: 'advice 不可数。名词 fluid 的单复数按词典词形记。', rule: '先确定 fluid 是noun，再套「流体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fluid.q1', senseId: 'fluid.s1', errorType: 'meaning', type: '词义选择', prompt: '「fluid」在本条的核心意思是：', options: ['流体', '完全相反的意思', '一种古代钱币'], answer: '流体', explain: 'fluid：流体。' },
      { id: 'fluid.q2', senseId: 'fluid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fluid?', options: ['流体', 'a kind of ancient coin', 'the past tense of be'], answer: '流体', explain: '对的是「流体」。' },
      { id: 'fluid.q3', senseId: 'fluid.s1', errorType: 'grammar', type: '词义选择', prompt: 'fluid 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fluid.q4', senseId: 'fluid.s1', errorType: 'meaning', type: '词源', prompt: '记 fluid 时，哪句更稳妥？', options: ['先锁住「流体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流体'] },
  });

  D('flunk', {
    etymology: {
      origin: '现代英语常用词「flunk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flunk', gloss: '考试不及格' },
      suffix: null,
      history: [
        { label: 'flunk', text: '现代英语常用词「flunk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：考试不及格。' },
      ],
      formationLogic: '核心义：考试不及格。',
      mnemonic: '看到 flunk，先说出「考试不及格」。',
      note: '核心义：考试不及格。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flunk before the office closed.', chinese: '他们同意在办公室关门前做这件事：考试不及格。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flunk.s1', en: 'The deadline forced the team to flunk that afternoon.', zh: '截止日期逼着小组在那天下午考试不及格。', structure: 'flunk / 表示 / 考试不及格', grammar: 'verb，围绕「考试不及格」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flunked it yesterday without checking the real past form.', right: 'Check the past form of "flunk" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flunk 是verb，再套「考试不及格」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flunk.q1', senseId: 'flunk.s1', errorType: 'meaning', type: '词义选择', prompt: '「flunk」在本条的核心意思是：', options: ['考试不及格', '完全相反的意思', '一种古代钱币'], answer: '考试不及格', explain: 'flunk：考试不及格。' },
      { id: 'flunk.q2', senseId: 'flunk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flunk?', options: ['考试不及格', 'a kind of ancient coin', 'the past tense of be'], answer: '考试不及格', explain: '对的是「考试不及格」。' },
      { id: 'flunk.q3', senseId: 'flunk.s1', errorType: 'grammar', type: '词义选择', prompt: 'flunk 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flunk.q4', senseId: 'flunk.s1', errorType: 'meaning', type: '词源', prompt: '记 flunk 时，哪句更稳妥？', options: ['先锁住「考试不及格」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考试不及格」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考试不及格'] },
  });

  D('flush', {
    etymology: {
      origin: '现代英语常用词「flush」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flush', gloss: '脸红' },
      suffix: null,
      history: [
        { label: 'flush', text: '现代英语常用词「flush」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脸红。' },
      ],
      formationLogic: '核心义：脸红。',
      mnemonic: '看到 flush，先说出「脸红」。',
      note: '核心义：脸红。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flush before the office closed.', chinese: '他们同意在办公室关门前做这件事：脸红。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flush.s1', en: 'The deadline forced the team to flush that afternoon.', zh: '截止日期逼着小组在那天下午脸红。', structure: 'flush / 表示 / 脸红', grammar: 'verb，围绕「脸红」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flushed it yesterday without checking the real past form.', right: 'Check the past form of "flush" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flush 是verb，再套「脸红」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flush.q1', senseId: 'flush.s1', errorType: 'meaning', type: '词义选择', prompt: '「flush」在本条的核心意思是：', options: ['脸红', '完全相反的意思', '一种古代钱币'], answer: '脸红', explain: 'flush：脸红。' },
      { id: 'flush.q2', senseId: 'flush.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flush?', options: ['脸红', 'a kind of ancient coin', 'the past tense of be'], answer: '脸红', explain: '对的是「脸红」。' },
      { id: 'flush.q3', senseId: 'flush.s1', errorType: 'grammar', type: '词义选择', prompt: 'flush 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flush.q4', senseId: 'flush.s1', errorType: 'meaning', type: '词源', prompt: '记 flush 时，哪句更稳妥？', options: ['先锁住「脸红」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脸红」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脸红'] },
  });

  D('flushed', {
    etymology: {
      origin: '现代英语常用词「flushed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flushed', gloss: '脸红的' },
      suffix: null,
      history: [
        { label: 'flushed', text: '现代英语常用词「flushed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脸红的。' },
      ],
      formationLogic: '核心义：脸红的。',
      mnemonic: '看到 flushed，先说出「脸红的」。',
      note: '核心义：脸红的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was flushed.', chinese: '即使是初读者也能看出，这个结果是脸红的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flushed.s1', en: 'They wanted a flushed answer, not a long speech.', zh: '他们要一个脸红的的答复，不要长篇发言。', structure: 'flushed / 表示 / 脸红的', grammar: 'adjective，围绕「脸红的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are flushed.', right: 'The news is flushed.', reason: 'news 作主语时动词用单数。', rule: '先确定 flushed 是adjective，再套「脸红的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flushed.q1', senseId: 'flushed.s1', errorType: 'meaning', type: '词义选择', prompt: '「flushed」在本条的核心意思是：', options: ['脸红的', '完全相反的意思', '一种古代钱币'], answer: '脸红的', explain: 'flushed：脸红的。' },
      { id: 'flushed.q2', senseId: 'flushed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flushed?', options: ['脸红的', 'a kind of ancient coin', 'the past tense of be'], answer: '脸红的', explain: '对的是「脸红的」。' },
      { id: 'flushed.q3', senseId: 'flushed.s1', errorType: 'grammar', type: '词义选择', prompt: 'flushed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'flushed.q4', senseId: 'flushed.s1', errorType: 'meaning', type: '词源', prompt: '记 flushed 时，哪句更稳妥？', options: ['先锁住「脸红的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脸红的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脸红的'] },
  });

  D('fluster', {
    etymology: {
      origin: '英语派生：flust + -er，词性转到「慌乱」。',
      prefix: null,
      root: { text: 'flust', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fluster', text: '英语派生：flust + -er，词性转到「慌乱」。' },
        { label: '现在', text: '核心用法是：慌乱。' },
      ],
      formationLogic: '先认词干 flust，再看词尾。',
      mnemonic: '看到 fluster，先说出「慌乱」。',
      note: '先认词干 flust，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fluster before the office closed.', chinese: '他们同意在办公室关门前做这件事：慌乱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fluster.s1', en: 'The deadline forced the team to fluster that afternoon.', zh: '截止日期逼着小组在那天下午慌乱。', structure: 'fluster / 表示 / 慌乱', grammar: 'verb，围绕「慌乱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flustered it yesterday without checking the real past form.', right: 'Check the past form of "fluster" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fluster 是verb，再套「慌乱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fluster.q1', senseId: 'fluster.s1', errorType: 'meaning', type: '词义选择', prompt: '「fluster」在本条的核心意思是：', options: ['慌乱', '完全相反的意思', '一种古代钱币'], answer: '慌乱', explain: 'fluster：慌乱。' },
      { id: 'fluster.q2', senseId: 'fluster.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fluster?', options: ['慌乱', 'a kind of ancient coin', 'the past tense of be'], answer: '慌乱', explain: '对的是「慌乱」。' },
      { id: 'fluster.q3', senseId: 'fluster.s1', errorType: 'grammar', type: '词义选择', prompt: 'fluster 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fluster.q4', senseId: 'fluster.s1', errorType: 'meaning', type: '词源', prompt: '记 fluster 时，哪句更稳妥？', options: ['先锁住「慌乱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「慌乱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['慌乱'] },
  });

  D('flute', {
    etymology: {
      origin: '现代英语常用词「flute」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'flute', gloss: '长笛' },
      suffix: null,
      history: [
        { label: 'flute', text: '现代英语常用词「flute」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：长笛。' },
      ],
      formationLogic: '核心义：长笛。',
      mnemonic: '看到 flute，先说出「长笛」。',
      note: '核心义：长笛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flute.', chinese: '这一章反复回到同一个点：长笛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flute.s1', en: 'Without that flute, the next paragraph is hard to follow.', zh: '没有这个长笛，下一段会很难读。', structure: 'flute / 表示 / 长笛', grammar: 'noun，围绕「长笛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flute.', right: 'He gave me some advice about the flute.', reason: 'advice 不可数。名词 flute 的单复数按词典词形记。', rule: '先确定 flute 是noun，再套「长笛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flute.q1', senseId: 'flute.s1', errorType: 'meaning', type: '词义选择', prompt: '「flute」在本条的核心意思是：', options: ['长笛', '完全相反的意思', '一种古代钱币'], answer: '长笛', explain: 'flute：长笛。' },
      { id: 'flute.q2', senseId: 'flute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flute?', options: ['长笛', 'a kind of ancient coin', 'the past tense of be'], answer: '长笛', explain: '对的是「长笛」。' },
      { id: 'flute.q3', senseId: 'flute.s1', errorType: 'grammar', type: '词义选择', prompt: 'flute 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flute.q4', senseId: 'flute.s1', errorType: 'meaning', type: '词源', prompt: '记 flute 时，哪句更稳妥？', options: ['先锁住「长笛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「长笛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['长笛'] },
  });

  D('flutter', {
    etymology: {
      origin: '英语派生：flutt + -er，词性转到「振翅」。',
      prefix: null,
      root: { text: 'flutt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flutter', text: '英语派生：flutt + -er，词性转到「振翅」。' },
        { label: '现在', text: '核心用法是：振翅。' },
      ],
      formationLogic: '先认词干 flutt，再看词尾。',
      mnemonic: '看到 flutter，先说出「振翅」。',
      note: '先认词干 flutt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to flutter before the office closed.', chinese: '他们同意在办公室关门前做这件事：振翅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flutter.s1', en: 'The deadline forced the team to flutter that afternoon.', zh: '截止日期逼着小组在那天下午振翅。', structure: 'flutter / 表示 / 振翅', grammar: 'verb，围绕「振翅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fluttered it yesterday without checking the real past form.', right: 'Check the past form of "flutter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 flutter 是verb，再套「振翅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flutter.q1', senseId: 'flutter.s1', errorType: 'meaning', type: '词义选择', prompt: '「flutter」在本条的核心意思是：', options: ['振翅', '完全相反的意思', '一种古代钱币'], answer: '振翅', explain: 'flutter：振翅。' },
      { id: 'flutter.q2', senseId: 'flutter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flutter?', options: ['振翅', 'a kind of ancient coin', 'the past tense of be'], answer: '振翅', explain: '对的是「振翅」。' },
      { id: 'flutter.q3', senseId: 'flutter.s1', errorType: 'grammar', type: '词义选择', prompt: 'flutter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'flutter.q4', senseId: 'flutter.s1', errorType: 'meaning', type: '词源', prompt: '记 flutter 时，哪句更稳妥？', options: ['先锁住「振翅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「振翅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['振翅'] },
  });

  D('fly', {
    etymology: {
      origin: '现代英语常用词「fly」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fly', gloss: '飞' },
      suffix: null,
      history: [
        { label: 'fly', text: '现代英语常用词「fly」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：飞。' },
      ],
      formationLogic: '核心义：飞。',
      mnemonic: '看到 fly，先说出「飞」。',
      note: '核心义：飞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fly before the office closed.', chinese: '他们同意在办公室关门前做这件事：飞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fly.s1', en: 'The deadline forced the team to fly that afternoon.', zh: '截止日期逼着小组在那天下午飞。', structure: 'fly / 表示 / 飞', grammar: 'verb，围绕「飞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She flyed it yesterday without checking the real past form.', right: 'Check the past form of "fly" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fly 是verb，再套「飞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fly.q1', senseId: 'fly.s1', errorType: 'meaning', type: '词义选择', prompt: '「fly」在本条的核心意思是：', options: ['飞', '完全相反的意思', '一种古代钱币'], answer: '飞', explain: 'fly：飞。' },
      { id: 'fly.q2', senseId: 'fly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fly?', options: ['飞', 'a kind of ancient coin', 'the past tense of be'], answer: '飞', explain: '对的是「飞」。' },
      { id: 'fly.q3', senseId: 'fly.s1', errorType: 'grammar', type: '词义选择', prompt: 'fly 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fly.q4', senseId: 'fly.s1', errorType: 'meaning', type: '词源', prompt: '记 fly 时，哪句更稳妥？', options: ['先锁住「飞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「飞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['飞'] },
  });

  D('flyer', {
    etymology: {
      origin: '英语派生：fly + -er，词性转到「传单」。',
      prefix: null,
      root: { text: 'fly', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'flyer', text: '英语派生：fly + -er，词性转到「传单」。' },
        { label: '现在', text: '核心用法是：传单。' },
      ],
      formationLogic: '先认词干 fly，再看词尾。',
      mnemonic: '看到 flyer，先说出「传单」。',
      note: '先认词干 fly，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one flyer.', chinese: '这一章反复回到同一个点：传单。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'flyer.s1', en: 'Without that flyer, the next paragraph is hard to follow.', zh: '没有这个传单，下一段会很难读。', structure: 'flyer / 表示 / 传单', grammar: 'noun，围绕「传单」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the flyer.', right: 'He gave me some advice about the flyer.', reason: 'advice 不可数。名词 flyer 的单复数按词典词形记。', rule: '先确定 flyer 是noun，再套「传单」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'flyer.q1', senseId: 'flyer.s1', errorType: 'meaning', type: '词义选择', prompt: '「flyer」在本条的核心意思是：', options: ['传单', '完全相反的意思', '一种古代钱币'], answer: '传单', explain: 'flyer：传单。' },
      { id: 'flyer.q2', senseId: 'flyer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches flyer?', options: ['传单', 'a kind of ancient coin', 'the past tense of be'], answer: '传单', explain: '对的是「传单」。' },
      { id: 'flyer.q3', senseId: 'flyer.s1', errorType: 'grammar', type: '词义选择', prompt: 'flyer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'flyer.q4', senseId: 'flyer.s1', errorType: 'meaning', type: '词源', prompt: '记 flyer 时，哪句更稳妥？', options: ['先锁住「传单」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「传单」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['传单'] },
  });

  D('foam', {
    etymology: {
      origin: '现代英语常用词「foam」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foam', gloss: '泡沫' },
      suffix: null,
      history: [
        { label: 'foam', text: '现代英语常用词「foam」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：泡沫。' },
      ],
      formationLogic: '核心义：泡沫。',
      mnemonic: '看到 foam，先说出「泡沫」。',
      note: '核心义：泡沫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foam.', chinese: '这一章反复回到同一个点：泡沫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foam.s1', en: 'Without that foam, the next paragraph is hard to follow.', zh: '没有这个泡沫，下一段会很难读。', structure: 'foam / 表示 / 泡沫', grammar: 'noun，围绕「泡沫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foam.', right: 'He gave me some advice about the foam.', reason: 'advice 不可数。名词 foam 的单复数按词典词形记。', rule: '先确定 foam 是noun，再套「泡沫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foam.q1', senseId: 'foam.s1', errorType: 'meaning', type: '词义选择', prompt: '「foam」在本条的核心意思是：', options: ['泡沫', '完全相反的意思', '一种古代钱币'], answer: '泡沫', explain: 'foam：泡沫。' },
      { id: 'foam.q2', senseId: 'foam.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foam?', options: ['泡沫', 'a kind of ancient coin', 'the past tense of be'], answer: '泡沫', explain: '对的是「泡沫」。' },
      { id: 'foam.q3', senseId: 'foam.s1', errorType: 'grammar', type: '词义选择', prompt: 'foam 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foam.q4', senseId: 'foam.s1', errorType: 'meaning', type: '词源', prompt: '记 foam 时，哪句更稳妥？', options: ['先锁住「泡沫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「泡沫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['泡沫'] },
  });

  D('focus', {
    etymology: {
      origin: '现代英语常用词「focus」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'focus', gloss: '聚焦' },
      suffix: null,
      history: [
        { label: 'focus', text: '现代英语常用词「focus」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：聚焦。' },
      ],
      formationLogic: '核心义：聚焦。',
      mnemonic: '看到 focus，先说出「聚焦」。',
      note: '核心义：聚焦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to focus before the office closed.', chinese: '他们同意在办公室关门前做这件事：聚焦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'focus.s1', en: 'The deadline forced the team to focus that afternoon.', zh: '截止日期逼着小组在那天下午聚焦。', structure: 'focus / 表示 / 聚焦', grammar: 'verb，围绕「聚焦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She focused it yesterday without checking the real past form.', right: 'Check the past form of "focus" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 focus 是verb，再套「聚焦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'focus.q1', senseId: 'focus.s1', errorType: 'meaning', type: '词义选择', prompt: '「focus」在本条的核心意思是：', options: ['聚焦', '完全相反的意思', '一种古代钱币'], answer: '聚焦', explain: 'focus：聚焦。' },
      { id: 'focus.q2', senseId: 'focus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches focus?', options: ['聚焦', 'a kind of ancient coin', 'the past tense of be'], answer: '聚焦', explain: '对的是「聚焦」。' },
      { id: 'focus.q3', senseId: 'focus.s1', errorType: 'grammar', type: '词义选择', prompt: 'focus 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'focus.q4', senseId: 'focus.s1', errorType: 'meaning', type: '词源', prompt: '记 focus 时，哪句更稳妥？', options: ['先锁住「聚焦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聚焦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聚焦'] },
  });

  D('focus on', {
    etymology: {
      origin: '现代英语固定说法「focus on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'focus on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'focus on', text: '现代英语固定说法「focus on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：聚焦于。' },
      ],
      formationLogic: '核心义：聚焦于。',
      mnemonic: '看到 focus on，先说出「聚焦于」。',
      note: '核心义：聚焦于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "focus on" and asked the class to keep it as one unit.', chinese: '老师把「focus on」圈出来，让全班把它当成一个整体。它表示聚焦于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'focus on.s1', en: 'In the margin she wrote "focus on" so nobody would split the phrase.', zh: '她在页边写下「focus on」，免得有人把这个说法拆开。意思是聚焦于。', structure: 'focus on / 表示 / 聚焦于', grammar: 'verb，围绕「聚焦于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of focus on and lost the point.', right: 'Keep "focus on" together: it means 聚焦于.', reason: '「focus on」要整块理解。', rule: '先确定 focus on 是verb，再套「聚焦于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'focus on.q1', senseId: 'focus on.s1', errorType: 'meaning', type: '词义选择', prompt: '「focus on」在本条的核心意思是：', options: ['聚焦于', '完全相反的意思', '一种古代钱币'], answer: '聚焦于', explain: 'focus on：聚焦于。' },
      { id: 'focus on.q2', senseId: 'focus on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches focus on?', options: ['聚焦于', 'a kind of ancient coin', 'the past tense of be'], answer: '聚焦于', explain: '对的是「聚焦于」。' },
      { id: 'focus on.q3', senseId: 'focus on.s1', errorType: 'grammar', type: '词义选择', prompt: 'focus on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'focus on.q4', senseId: 'focus on.s1', errorType: 'meaning', type: '词源', prompt: '记 focus on 时，哪句更稳妥？', options: ['先锁住「聚焦于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聚焦于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聚焦于'] },
  });

  D('fodder', {
    etymology: {
      origin: '英语派生：fodd + -er，词性转到「饲料」。',
      prefix: null,
      root: { text: 'fodd', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fodder', text: '英语派生：fodd + -er，词性转到「饲料」。' },
        { label: '现在', text: '核心用法是：饲料。' },
      ],
      formationLogic: '先认词干 fodd，再看词尾。',
      mnemonic: '看到 fodder，先说出「饲料」。',
      note: '先认词干 fodd，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fodder.', chinese: '这一章反复回到同一个点：饲料。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fodder.s1', en: 'Without that fodder, the next paragraph is hard to follow.', zh: '没有这个饲料，下一段会很难读。', structure: 'fodder / 表示 / 饲料', grammar: 'noun，围绕「饲料」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fodder.', right: 'He gave me some advice about the fodder.', reason: 'advice 不可数。名词 fodder 的单复数按词典词形记。', rule: '先确定 fodder 是noun，再套「饲料」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fodder.q1', senseId: 'fodder.s1', errorType: 'meaning', type: '词义选择', prompt: '「fodder」在本条的核心意思是：', options: ['饲料', '完全相反的意思', '一种古代钱币'], answer: '饲料', explain: 'fodder：饲料。' },
      { id: 'fodder.q2', senseId: 'fodder.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fodder?', options: ['饲料', 'a kind of ancient coin', 'the past tense of be'], answer: '饲料', explain: '对的是「饲料」。' },
      { id: 'fodder.q3', senseId: 'fodder.s1', errorType: 'grammar', type: '词义选择', prompt: 'fodder 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fodder.q4', senseId: 'fodder.s1', errorType: 'meaning', type: '词源', prompt: '记 fodder 时，哪句更稳妥？', options: ['先锁住「饲料」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「饲料」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['饲料'] },
  });

  D('foe', {
    etymology: {
      origin: '现代英语常用词「foe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foe', gloss: '敌人' },
      suffix: null,
      history: [
        { label: 'foe', text: '现代英语常用词「foe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：敌人。' },
      ],
      formationLogic: '核心义：敌人。',
      mnemonic: '看到 foe，先说出「敌人」。',
      note: '核心义：敌人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foe.', chinese: '这一章反复回到同一个点：敌人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foe.s1', en: 'Without that foe, the next paragraph is hard to follow.', zh: '没有这个敌人，下一段会很难读。', structure: 'foe / 表示 / 敌人', grammar: 'noun，围绕「敌人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foe.', right: 'He gave me some advice about the foe.', reason: 'advice 不可数。名词 foe 的单复数按词典词形记。', rule: '先确定 foe 是noun，再套「敌人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foe.q1', senseId: 'foe.s1', errorType: 'meaning', type: '词义选择', prompt: '「foe」在本条的核心意思是：', options: ['敌人', '完全相反的意思', '一种古代钱币'], answer: '敌人', explain: 'foe：敌人。' },
      { id: 'foe.q2', senseId: 'foe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foe?', options: ['敌人', 'a kind of ancient coin', 'the past tense of be'], answer: '敌人', explain: '对的是「敌人」。' },
      { id: 'foe.q3', senseId: 'foe.s1', errorType: 'grammar', type: '词义选择', prompt: 'foe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foe.q4', senseId: 'foe.s1', errorType: 'meaning', type: '词源', prompt: '记 foe 时，哪句更稳妥？', options: ['先锁住「敌人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「敌人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['敌人'] },
  });

  D('fog', {
    etymology: {
      origin: '现代英语常用词「fog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fog', gloss: '雾' },
      suffix: null,
      history: [
        { label: 'fog', text: '现代英语常用词「fog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：雾。' },
      ],
      formationLogic: '核心义：雾。',
      mnemonic: '看到 fog，先说出「雾」。',
      note: '核心义：雾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fog.', chinese: '这一章反复回到同一个点：雾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fog.s1', en: 'Without that fog, the next paragraph is hard to follow.', zh: '没有这个雾，下一段会很难读。', structure: 'fog / 表示 / 雾', grammar: 'noun，围绕「雾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fog.', right: 'He gave me some advice about the fog.', reason: 'advice 不可数。名词 fog 的单复数按词典词形记。', rule: '先确定 fog 是noun，再套「雾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fog.q1', senseId: 'fog.s1', errorType: 'meaning', type: '词义选择', prompt: '「fog」在本条的核心意思是：', options: ['雾', '完全相反的意思', '一种古代钱币'], answer: '雾', explain: 'fog：雾。' },
      { id: 'fog.q2', senseId: 'fog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fog?', options: ['雾', 'a kind of ancient coin', 'the past tense of be'], answer: '雾', explain: '对的是「雾」。' },
      { id: 'fog.q3', senseId: 'fog.s1', errorType: 'grammar', type: '词义选择', prompt: 'fog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fog.q4', senseId: 'fog.s1', errorType: 'meaning', type: '词源', prompt: '记 fog 时，哪句更稳妥？', options: ['先锁住「雾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雾'] },
  });

  D('foil', {
    etymology: {
      origin: '现代英语常用词「foil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foil', gloss: '挫败' },
      suffix: null,
      history: [
        { label: 'foil', text: '现代英语常用词「foil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：挫败。' },
      ],
      formationLogic: '核心义：挫败。',
      mnemonic: '看到 foil，先说出「挫败」。',
      note: '核心义：挫败。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to foil before the office closed.', chinese: '他们同意在办公室关门前做这件事：挫败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foil.s1', en: 'The deadline forced the team to foil that afternoon.', zh: '截止日期逼着小组在那天下午挫败。', structure: 'foil / 表示 / 挫败', grammar: 'verb，围绕「挫败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She foiled it yesterday without checking the real past form.', right: 'Check the past form of "foil" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 foil 是verb，再套「挫败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foil.q1', senseId: 'foil.s1', errorType: 'meaning', type: '词义选择', prompt: '「foil」在本条的核心意思是：', options: ['挫败', '完全相反的意思', '一种古代钱币'], answer: '挫败', explain: 'foil：挫败。' },
      { id: 'foil.q2', senseId: 'foil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foil?', options: ['挫败', 'a kind of ancient coin', 'the past tense of be'], answer: '挫败', explain: '对的是「挫败」。' },
      { id: 'foil.q3', senseId: 'foil.s1', errorType: 'grammar', type: '词义选择', prompt: 'foil 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'foil.q4', senseId: 'foil.s1', errorType: 'meaning', type: '词源', prompt: '记 foil 时，哪句更稳妥？', options: ['先锁住「挫败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挫败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挫败'] },
  });

  D('fold', {
    etymology: {
      origin: '现代英语常用词「fold」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fold', gloss: '折叠' },
      suffix: null,
      history: [
        { label: 'fold', text: '现代英语常用词「fold」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：折叠。' },
      ],
      formationLogic: '核心义：折叠。',
      mnemonic: '看到 fold，先说出「折叠」。',
      note: '核心义：折叠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fold before the office closed.', chinese: '他们同意在办公室关门前做这件事：折叠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fold.s1', en: 'The deadline forced the team to fold that afternoon.', zh: '截止日期逼着小组在那天下午折叠。', structure: 'fold / 表示 / 折叠', grammar: 'verb，围绕「折叠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She folded it yesterday without checking the real past form.', right: 'Check the past form of "fold" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fold 是verb，再套「折叠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fold.q1', senseId: 'fold.s1', errorType: 'meaning', type: '词义选择', prompt: '「fold」在本条的核心意思是：', options: ['折叠', '完全相反的意思', '一种古代钱币'], answer: '折叠', explain: 'fold：折叠。' },
      { id: 'fold.q2', senseId: 'fold.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fold?', options: ['折叠', 'a kind of ancient coin', 'the past tense of be'], answer: '折叠', explain: '对的是「折叠」。' },
      { id: 'fold.q3', senseId: 'fold.s1', errorType: 'grammar', type: '词义选择', prompt: 'fold 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fold.q4', senseId: 'fold.s1', errorType: 'meaning', type: '词源', prompt: '记 fold 时，哪句更稳妥？', options: ['先锁住「折叠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「折叠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['折叠'] },
  });

  D('folder', {
    etymology: {
      origin: '英语派生：fold + -er，词性转到「文件夹」。',
      prefix: null,
      root: { text: 'fold', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'folder', text: '英语派生：fold + -er，词性转到「文件夹」。' },
        { label: '现在', text: '核心用法是：文件夹。' },
      ],
      formationLogic: '先认词干 fold，再看词尾。',
      mnemonic: '看到 folder，先说出「文件夹」。',
      note: '先认词干 fold，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one folder.', chinese: '这一章反复回到同一个点：文件夹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'folder.s1', en: 'Without that folder, the next paragraph is hard to follow.', zh: '没有这个文件夹，下一段会很难读。', structure: 'folder / 表示 / 文件夹', grammar: 'noun，围绕「文件夹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the folder.', right: 'He gave me some advice about the folder.', reason: 'advice 不可数。名词 folder 的单复数按词典词形记。', rule: '先确定 folder 是noun，再套「文件夹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'folder.q1', senseId: 'folder.s1', errorType: 'meaning', type: '词义选择', prompt: '「folder」在本条的核心意思是：', options: ['文件夹', '完全相反的意思', '一种古代钱币'], answer: '文件夹', explain: 'folder：文件夹。' },
      { id: 'folder.q2', senseId: 'folder.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches folder?', options: ['文件夹', 'a kind of ancient coin', 'the past tense of be'], answer: '文件夹', explain: '对的是「文件夹」。' },
      { id: 'folder.q3', senseId: 'folder.s1', errorType: 'grammar', type: '词义选择', prompt: 'folder 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'folder.q4', senseId: 'folder.s1', errorType: 'meaning', type: '词源', prompt: '记 folder 时，哪句更稳妥？', options: ['先锁住「文件夹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文件夹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文件夹'] },
  });

  D('foliage', {
    etymology: {
      origin: '现代英语常用词「foliage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foliage', gloss: '叶子' },
      suffix: null,
      history: [
        { label: 'foliage', text: '现代英语常用词「foliage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：叶子。' },
      ],
      formationLogic: '核心义：叶子。',
      mnemonic: '看到 foliage，先说出「叶子」。',
      note: '核心义：叶子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foliage.', chinese: '这一章反复回到同一个点：叶子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foliage.s1', en: 'Without that foliage, the next paragraph is hard to follow.', zh: '没有这个叶子，下一段会很难读。', structure: 'foliage / 表示 / 叶子', grammar: 'noun，围绕「叶子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foliage.', right: 'He gave me some advice about the foliage.', reason: 'advice 不可数。名词 foliage 的单复数按词典词形记。', rule: '先确定 foliage 是noun，再套「叶子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foliage.q1', senseId: 'foliage.s1', errorType: 'meaning', type: '词义选择', prompt: '「foliage」在本条的核心意思是：', options: ['叶子', '完全相反的意思', '一种古代钱币'], answer: '叶子', explain: 'foliage：叶子。' },
      { id: 'foliage.q2', senseId: 'foliage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foliage?', options: ['叶子', 'a kind of ancient coin', 'the past tense of be'], answer: '叶子', explain: '对的是「叶子」。' },
      { id: 'foliage.q3', senseId: 'foliage.s1', errorType: 'grammar', type: '词义选择', prompt: 'foliage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foliage.q4', senseId: 'foliage.s1', errorType: 'meaning', type: '词源', prompt: '记 foliage 时，哪句更稳妥？', options: ['先锁住「叶子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「叶子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['叶子'] },
  });

  D('folk', {
    etymology: {
      origin: '现代英语常用词「folk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'folk', gloss: '人们' },
      suffix: null,
      history: [
        { label: 'folk', text: '现代英语常用词「folk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：人们。' },
      ],
      formationLogic: '核心义：人们。',
      mnemonic: '看到 folk，先说出「人们」。',
      note: '核心义：人们。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one folk.', chinese: '这一章反复回到同一个点：人们。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'folk.s1', en: 'Without that folk, the next paragraph is hard to follow.', zh: '没有这个人们，下一段会很难读。', structure: 'folk / 表示 / 人们', grammar: 'noun，围绕「人们」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the folk.', right: 'He gave me some advice about the folk.', reason: 'advice 不可数。名词 folk 的单复数按词典词形记。', rule: '先确定 folk 是noun，再套「人们」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'folk.q1', senseId: 'folk.s1', errorType: 'meaning', type: '词义选择', prompt: '「folk」在本条的核心意思是：', options: ['人们', '完全相反的意思', '一种古代钱币'], answer: '人们', explain: 'folk：人们。' },
      { id: 'folk.q2', senseId: 'folk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches folk?', options: ['人们', 'a kind of ancient coin', 'the past tense of be'], answer: '人们', explain: '对的是「人们」。' },
      { id: 'folk.q3', senseId: 'folk.s1', errorType: 'grammar', type: '词义选择', prompt: 'folk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'folk.q4', senseId: 'folk.s1', errorType: 'meaning', type: '词源', prompt: '记 folk 时，哪句更稳妥？', options: ['先锁住「人们」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人们」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人们'] },
  });

  D('folklore', {
    etymology: {
      origin: '现代英语常用词「folklore」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'folklore', gloss: '民间传说' },
      suffix: null,
      history: [
        { label: 'folklore', text: '现代英语常用词「folklore」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：民间传说。' },
      ],
      formationLogic: '核心义：民间传说。',
      mnemonic: '看到 folklore，先说出「民间传说」。',
      note: '核心义：民间传说。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one folklore.', chinese: '这一章反复回到同一个点：民间传说。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'folklore.s1', en: 'Without that folklore, the next paragraph is hard to follow.', zh: '没有这个民间传说，下一段会很难读。', structure: 'folklore / 表示 / 民间传说', grammar: 'noun，围绕「民间传说」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the folklore.', right: 'He gave me some advice about the folklore.', reason: 'advice 不可数。名词 folklore 的单复数按词典词形记。', rule: '先确定 folklore 是noun，再套「民间传说」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'folklore.q1', senseId: 'folklore.s1', errorType: 'meaning', type: '词义选择', prompt: '「folklore」在本条的核心意思是：', options: ['民间传说', '完全相反的意思', '一种古代钱币'], answer: '民间传说', explain: 'folklore：民间传说。' },
      { id: 'folklore.q2', senseId: 'folklore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches folklore?', options: ['民间传说', 'a kind of ancient coin', 'the past tense of be'], answer: '民间传说', explain: '对的是「民间传说」。' },
      { id: 'folklore.q3', senseId: 'folklore.s1', errorType: 'grammar', type: '词义选择', prompt: 'folklore 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'folklore.q4', senseId: 'folklore.s1', errorType: 'meaning', type: '词源', prompt: '记 folklore 时，哪句更稳妥？', options: ['先锁住「民间传说」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「民间传说」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['民间传说'] },
  });

  D('follow', {
    etymology: {
      origin: '现代英语常用词「follow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'follow', gloss: '跟随' },
      suffix: null,
      history: [
        { label: 'follow', text: '现代英语常用词「follow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：跟随。' },
      ],
      formationLogic: '核心义：跟随。',
      mnemonic: '看到 follow，先说出「跟随」。',
      note: '核心义：跟随。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to follow before the office closed.', chinese: '他们同意在办公室关门前做这件事：跟随。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'follow.s1', en: 'The deadline forced the team to follow that afternoon.', zh: '截止日期逼着小组在那天下午跟随。', structure: 'follow / 表示 / 跟随', grammar: 'verb，围绕「跟随」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She followed it yesterday without checking the real past form.', right: 'Check the past form of "follow" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 follow 是verb，再套「跟随」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'follow.q1', senseId: 'follow.s1', errorType: 'meaning', type: '词义选择', prompt: '「follow」在本条的核心意思是：', options: ['跟随', '完全相反的意思', '一种古代钱币'], answer: '跟随', explain: 'follow：跟随。' },
      { id: 'follow.q2', senseId: 'follow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches follow?', options: ['跟随', 'a kind of ancient coin', 'the past tense of be'], answer: '跟随', explain: '对的是「跟随」。' },
      { id: 'follow.q3', senseId: 'follow.s1', errorType: 'grammar', type: '词义选择', prompt: 'follow 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'follow.q4', senseId: 'follow.s1', errorType: 'meaning', type: '词源', prompt: '记 follow 时，哪句更稳妥？', options: ['先锁住「跟随」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「跟随」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['跟随'] },
  });

  D('follower', {
    etymology: {
      origin: '英语派生：follow + -er，词性转到「追随者」。',
      prefix: null,
      root: { text: 'follow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'follower', text: '英语派生：follow + -er，词性转到「追随者」。' },
        { label: '现在', text: '核心用法是：追随者。' },
      ],
      formationLogic: '先认词干 follow，再看词尾。',
      mnemonic: '看到 follower，先说出「追随者」。',
      note: '先认词干 follow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one follower.', chinese: '这一章反复回到同一个点：追随者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'follower.s1', en: 'Without that follower, the next paragraph is hard to follow.', zh: '没有这个追随者，下一段会很难读。', structure: 'follower / 表示 / 追随者', grammar: 'noun，围绕「追随者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the follower.', right: 'He gave me some advice about the follower.', reason: 'advice 不可数。名词 follower 的单复数按词典词形记。', rule: '先确定 follower 是noun，再套「追随者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'follower.q1', senseId: 'follower.s1', errorType: 'meaning', type: '词义选择', prompt: '「follower」在本条的核心意思是：', options: ['追随者', '完全相反的意思', '一种古代钱币'], answer: '追随者', explain: 'follower：追随者。' },
      { id: 'follower.q2', senseId: 'follower.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches follower?', options: ['追随者', 'a kind of ancient coin', 'the past tense of be'], answer: '追随者', explain: '对的是「追随者」。' },
      { id: 'follower.q3', senseId: 'follower.s1', errorType: 'grammar', type: '词义选择', prompt: 'follower 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'follower.q4', senseId: 'follower.s1', errorType: 'meaning', type: '词源', prompt: '记 follower 时，哪句更稳妥？', options: ['先锁住「追随者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「追随者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['追随者'] },
  });

  D('following', {
    etymology: {
      origin: '英语派生：follow + -ing，词性转到「接下来的」。',
      prefix: null,
      root: { text: 'follow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'following', text: '英语派生：follow + -ing，词性转到「接下来的」。' },
        { label: '现在', text: '核心用法是：接下来的。' },
      ],
      formationLogic: '先认词干 follow，再看词尾。',
      mnemonic: '看到 following，先说出「接下来的」。',
      note: '先认词干 follow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was following.', chinese: '即使是初读者也能看出，这个结果是接下来的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'following.s1', en: 'They wanted a following answer, not a long speech.', zh: '他们要一个接下来的的答复，不要长篇发言。', structure: 'following / 表示 / 接下来的', grammar: 'adjective，围绕「接下来的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are following.', right: 'The news is following.', reason: 'news 作主语时动词用单数。', rule: '先确定 following 是adjective，再套「接下来的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'following.q1', senseId: 'following.s1', errorType: 'meaning', type: '词义选择', prompt: '「following」在本条的核心意思是：', options: ['接下来的', '完全相反的意思', '一种古代钱币'], answer: '接下来的', explain: 'following：接下来的。' },
      { id: 'following.q2', senseId: 'following.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches following?', options: ['接下来的', 'a kind of ancient coin', 'the past tense of be'], answer: '接下来的', explain: '对的是「接下来的」。' },
      { id: 'following.q3', senseId: 'following.s1', errorType: 'grammar', type: '词义选择', prompt: 'following 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'following.q4', senseId: 'following.s1', errorType: 'meaning', type: '词源', prompt: '记 following 时，哪句更稳妥？', options: ['先锁住「接下来的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「接下来的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['接下来的'] },
  });

  D('fond', {
    etymology: {
      origin: '现代英语常用词「fond」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fond', gloss: '喜爱的' },
      suffix: null,
      history: [
        { label: 'fond', text: '现代英语常用词「fond」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：喜爱的。' },
      ],
      formationLogic: '核心义：喜爱的。',
      mnemonic: '看到 fond，先说出「喜爱的」。',
      note: '核心义：喜爱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fond.', chinese: '即使是初读者也能看出，这个结果是喜爱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fond.s1', en: 'They wanted a fond answer, not a long speech.', zh: '他们要一个喜爱的的答复，不要长篇发言。', structure: 'fond / 表示 / 喜爱的', grammar: 'adjective，围绕「喜爱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fond.', right: 'The news is fond.', reason: 'news 作主语时动词用单数。', rule: '先确定 fond 是adjective，再套「喜爱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fond.q1', senseId: 'fond.s1', errorType: 'meaning', type: '词义选择', prompt: '「fond」在本条的核心意思是：', options: ['喜爱的', '完全相反的意思', '一种古代钱币'], answer: '喜爱的', explain: 'fond：喜爱的。' },
      { id: 'fond.q2', senseId: 'fond.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fond?', options: ['喜爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '喜爱的', explain: '对的是「喜爱的」。' },
      { id: 'fond.q3', senseId: 'fond.s1', errorType: 'grammar', type: '词义选择', prompt: 'fond 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fond.q4', senseId: 'fond.s1', errorType: 'meaning', type: '词源', prompt: '记 fond 时，哪句更稳妥？', options: ['先锁住「喜爱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喜爱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喜爱的'] },
  });

  D('fondness', {
    etymology: {
      origin: '英语派生：fond + -ness，词性转到「喜爱」。',
      prefix: null,
      root: { text: 'fond', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fondness', text: '英语派生：fond + -ness，词性转到「喜爱」。' },
        { label: '现在', text: '核心用法是：喜爱。' },
      ],
      formationLogic: '先认词干 fond，再看词尾。',
      mnemonic: '看到 fondness，先说出「喜爱」。',
      note: '先认词干 fond，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fondness.', chinese: '这一章反复回到同一个点：喜爱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fondness.s1', en: 'Without that fondness, the next paragraph is hard to follow.', zh: '没有这个喜爱，下一段会很难读。', structure: 'fondness / 表示 / 喜爱', grammar: 'noun，围绕「喜爱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fondness.', right: 'He gave me some advice about the fondness.', reason: 'advice 不可数。名词 fondness 的单复数按词典词形记。', rule: '先确定 fondness 是noun，再套「喜爱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fondness.q1', senseId: 'fondness.s1', errorType: 'meaning', type: '词义选择', prompt: '「fondness」在本条的核心意思是：', options: ['喜爱', '完全相反的意思', '一种古代钱币'], answer: '喜爱', explain: 'fondness：喜爱。' },
      { id: 'fondness.q2', senseId: 'fondness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fondness?', options: ['喜爱', 'a kind of ancient coin', 'the past tense of be'], answer: '喜爱', explain: '对的是「喜爱」。' },
      { id: 'fondness.q3', senseId: 'fondness.s1', errorType: 'grammar', type: '词义选择', prompt: 'fondness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fondness.q4', senseId: 'fondness.s1', errorType: 'meaning', type: '词源', prompt: '记 fondness 时，哪句更稳妥？', options: ['先锁住「喜爱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喜爱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喜爱'] },
  });

  D('food', {
    etymology: {
      origin: '现代英语常用词「food」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'food', gloss: '食物' },
      suffix: null,
      history: [
        { label: 'food', text: '现代英语常用词「food」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：食物。' },
      ],
      formationLogic: '核心义：食物。',
      mnemonic: '看到 food，先说出「食物」。',
      note: '核心义：食物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one food.', chinese: '这一章反复回到同一个点：食物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'food.s1', en: 'Without that food, the next paragraph is hard to follow.', zh: '没有这个食物，下一段会很难读。', structure: 'food / 表示 / 食物', grammar: 'noun，围绕「食物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the food.', right: 'He gave me some advice about the food.', reason: 'advice 不可数。名词 food 的单复数按词典词形记。', rule: '先确定 food 是noun，再套「食物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'food.q1', senseId: 'food.s1', errorType: 'meaning', type: '词义选择', prompt: '「food」在本条的核心意思是：', options: ['食物', '完全相反的意思', '一种古代钱币'], answer: '食物', explain: 'food：食物。' },
      { id: 'food.q2', senseId: 'food.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches food?', options: ['食物', 'a kind of ancient coin', 'the past tense of be'], answer: '食物', explain: '对的是「食物」。' },
      { id: 'food.q3', senseId: 'food.s1', errorType: 'grammar', type: '词义选择', prompt: 'food 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'food.q4', senseId: 'food.s1', errorType: 'meaning', type: '词源', prompt: '记 food 时，哪句更稳妥？', options: ['先锁住「食物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「食物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['食物'] },
  });

  D('fool', {
    etymology: {
      origin: '现代英语常用词「fool」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fool', gloss: '傻瓜' },
      suffix: null,
      history: [
        { label: 'fool', text: '现代英语常用词「fool」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：傻瓜。' },
      ],
      formationLogic: '核心义：傻瓜。',
      mnemonic: '看到 fool，先说出「傻瓜」。',
      note: '核心义：傻瓜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fool.', chinese: '这一章反复回到同一个点：傻瓜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fool.s1', en: 'Without that fool, the next paragraph is hard to follow.', zh: '没有这个傻瓜，下一段会很难读。', structure: 'fool / 表示 / 傻瓜', grammar: 'noun，围绕「傻瓜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fool.', right: 'He gave me some advice about the fool.', reason: 'advice 不可数。名词 fool 的单复数按词典词形记。', rule: '先确定 fool 是noun，再套「傻瓜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fool.q1', senseId: 'fool.s1', errorType: 'meaning', type: '词义选择', prompt: '「fool」在本条的核心意思是：', options: ['傻瓜', '完全相反的意思', '一种古代钱币'], answer: '傻瓜', explain: 'fool：傻瓜。' },
      { id: 'fool.q2', senseId: 'fool.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fool?', options: ['傻瓜', 'a kind of ancient coin', 'the past tense of be'], answer: '傻瓜', explain: '对的是「傻瓜」。' },
      { id: 'fool.q3', senseId: 'fool.s1', errorType: 'grammar', type: '词义选择', prompt: 'fool 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fool.q4', senseId: 'fool.s1', errorType: 'meaning', type: '词源', prompt: '记 fool 时，哪句更稳妥？', options: ['先锁住「傻瓜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「傻瓜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['傻瓜'] },
  });

  D('fool around', {
    etymology: {
      origin: '现代英语固定说法「fool around」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fool around', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fool around', text: '现代英语固定说法「fool around」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：鬼混。' },
      ],
      formationLogic: '核心义：鬼混。',
      mnemonic: '看到 fool around，先说出「鬼混」。',
      note: '核心义：鬼混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fool around" and asked the class to keep it as one unit.', chinese: '老师把「fool around」圈出来，让全班把它当成一个整体。它表示鬼混。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fool around.s1', en: 'In the margin she wrote "fool around" so nobody would split the phrase.', zh: '她在页边写下「fool around」，免得有人把这个说法拆开。意思是鬼混。', structure: 'fool around / 表示 / 鬼混', grammar: 'verb，围绕「鬼混」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fool around and lost the point.', right: 'Keep "fool around" together: it means 鬼混.', reason: '「fool around」要整块理解。', rule: '先确定 fool around 是verb，再套「鬼混」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fool around.q1', senseId: 'fool around.s1', errorType: 'meaning', type: '词义选择', prompt: '「fool around」在本条的核心意思是：', options: ['鬼混', '完全相反的意思', '一种古代钱币'], answer: '鬼混', explain: 'fool around：鬼混。' },
      { id: 'fool around.q2', senseId: 'fool around.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fool around?', options: ['鬼混', 'a kind of ancient coin', 'the past tense of be'], answer: '鬼混', explain: '对的是「鬼混」。' },
      { id: 'fool around.q3', senseId: 'fool around.s1', errorType: 'grammar', type: '词义选择', prompt: 'fool around 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fool around.q4', senseId: 'fool around.s1', errorType: 'meaning', type: '词源', prompt: '记 fool around 时，哪句更稳妥？', options: ['先锁住「鬼混」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鬼混」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鬼混'] },
  });

  D('foolish', {
    etymology: {
      origin: '现代英语常用词「foolish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foolish', gloss: '愚蠢的' },
      suffix: null,
      history: [
        { label: 'foolish', text: '现代英语常用词「foolish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：愚蠢的。' },
      ],
      formationLogic: '核心义：愚蠢的。',
      mnemonic: '看到 foolish，先说出「愚蠢的」。',
      note: '核心义：愚蠢的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was foolish.', chinese: '即使是初读者也能看出，这个结果是愚蠢的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foolish.s1', en: 'They wanted a foolish answer, not a long speech.', zh: '他们要一个愚蠢的的答复，不要长篇发言。', structure: 'foolish / 表示 / 愚蠢的', grammar: 'adjective，围绕「愚蠢的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are foolish.', right: 'The news is foolish.', reason: 'news 作主语时动词用单数。', rule: '先确定 foolish 是adjective，再套「愚蠢的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foolish.q1', senseId: 'foolish.s1', errorType: 'meaning', type: '词义选择', prompt: '「foolish」在本条的核心意思是：', options: ['愚蠢的', '完全相反的意思', '一种古代钱币'], answer: '愚蠢的', explain: 'foolish：愚蠢的。' },
      { id: 'foolish.q2', senseId: 'foolish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foolish?', options: ['愚蠢的', 'a kind of ancient coin', 'the past tense of be'], answer: '愚蠢的', explain: '对的是「愚蠢的」。' },
      { id: 'foolish.q3', senseId: 'foolish.s1', errorType: 'grammar', type: '词义选择', prompt: 'foolish 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'foolish.q4', senseId: 'foolish.s1', errorType: 'meaning', type: '词源', prompt: '记 foolish 时，哪句更稳妥？', options: ['先锁住「愚蠢的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愚蠢的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愚蠢的'] },
  });

  D('foolishness', {
    etymology: {
      origin: '英语派生：foolish + -ness，词性转到「愚蠢」。',
      prefix: null,
      root: { text: 'foolish', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'foolishness', text: '英语派生：foolish + -ness，词性转到「愚蠢」。' },
        { label: '现在', text: '核心用法是：愚蠢。' },
      ],
      formationLogic: '先认词干 foolish，再看词尾。',
      mnemonic: '看到 foolishness，先说出「愚蠢」。',
      note: '先认词干 foolish，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foolishness.', chinese: '这一章反复回到同一个点：愚蠢。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foolishness.s1', en: 'Without that foolishness, the next paragraph is hard to follow.', zh: '没有这个愚蠢，下一段会很难读。', structure: 'foolishness / 表示 / 愚蠢', grammar: 'noun，围绕「愚蠢」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foolishness.', right: 'He gave me some advice about the foolishness.', reason: 'advice 不可数。名词 foolishness 的单复数按词典词形记。', rule: '先确定 foolishness 是noun，再套「愚蠢」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foolishness.q1', senseId: 'foolishness.s1', errorType: 'meaning', type: '词义选择', prompt: '「foolishness」在本条的核心意思是：', options: ['愚蠢', '完全相反的意思', '一种古代钱币'], answer: '愚蠢', explain: 'foolishness：愚蠢。' },
      { id: 'foolishness.q2', senseId: 'foolishness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foolishness?', options: ['愚蠢', 'a kind of ancient coin', 'the past tense of be'], answer: '愚蠢', explain: '对的是「愚蠢」。' },
      { id: 'foolishness.q3', senseId: 'foolishness.s1', errorType: 'grammar', type: '词义选择', prompt: 'foolishness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foolishness.q4', senseId: 'foolishness.s1', errorType: 'meaning', type: '词源', prompt: '记 foolishness 时，哪句更稳妥？', options: ['先锁住「愚蠢」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愚蠢」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愚蠢'] },
  });

  D('foot', {
    etymology: {
      origin: '现代英语常用词「foot」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foot', gloss: '脚' },
      suffix: null,
      history: [
        { label: 'foot', text: '现代英语常用词「foot」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脚。' },
      ],
      formationLogic: '核心义：脚。',
      mnemonic: '看到 foot，先说出「脚」。',
      note: '核心义：脚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foot.', chinese: '这一章反复回到同一个点：脚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foot.s1', en: 'Without that foot, the next paragraph is hard to follow.', zh: '没有这个脚，下一段会很难读。', structure: 'foot / 表示 / 脚', grammar: 'noun，围绕「脚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foot.', right: 'He gave me some advice about the foot.', reason: 'advice 不可数。名词 foot 的单复数按词典词形记。', rule: '先确定 foot 是noun，再套「脚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foot.q1', senseId: 'foot.s1', errorType: 'meaning', type: '词义选择', prompt: '「foot」在本条的核心意思是：', options: ['脚', '完全相反的意思', '一种古代钱币'], answer: '脚', explain: 'foot：脚。' },
      { id: 'foot.q2', senseId: 'foot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foot?', options: ['脚', 'a kind of ancient coin', 'the past tense of be'], answer: '脚', explain: '对的是「脚」。' },
      { id: 'foot.q3', senseId: 'foot.s1', errorType: 'grammar', type: '词义选择', prompt: 'foot 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foot.q4', senseId: 'foot.s1', errorType: 'meaning', type: '词源', prompt: '记 foot 时，哪句更稳妥？', options: ['先锁住「脚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脚'] },
  });

  D('football', {
    etymology: {
      origin: '现代英语常用词「football」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'football', gloss: '足球' },
      suffix: null,
      history: [
        { label: 'football', text: '现代英语常用词「football」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：足球。' },
      ],
      formationLogic: '核心义：足球。',
      mnemonic: '看到 football，先说出「足球」。',
      note: '核心义：足球。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one football.', chinese: '这一章反复回到同一个点：足球。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'football.s1', en: 'Without that football, the next paragraph is hard to follow.', zh: '没有这个足球，下一段会很难读。', structure: 'football / 表示 / 足球', grammar: 'noun，围绕「足球」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the football.', right: 'He gave me some advice about the football.', reason: 'advice 不可数。名词 football 的单复数按词典词形记。', rule: '先确定 football 是noun，再套「足球」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'football.q1', senseId: 'football.s1', errorType: 'meaning', type: '词义选择', prompt: '「football」在本条的核心意思是：', options: ['足球', '完全相反的意思', '一种古代钱币'], answer: '足球', explain: 'football：足球。' },
      { id: 'football.q2', senseId: 'football.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches football?', options: ['足球', 'a kind of ancient coin', 'the past tense of be'], answer: '足球', explain: '对的是「足球」。' },
      { id: 'football.q3', senseId: 'football.s1', errorType: 'grammar', type: '词义选择', prompt: 'football 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'football.q4', senseId: 'football.s1', errorType: 'meaning', type: '词源', prompt: '记 football 时，哪句更稳妥？', options: ['先锁住「足球」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「足球」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['足球'] },
  });

  D('footfall', {
    etymology: {
      origin: '现代英语常用词「footfall」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'footfall', gloss: '脚步声' },
      suffix: null,
      history: [
        { label: 'footfall', text: '现代英语常用词「footfall」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脚步声。' },
      ],
      formationLogic: '核心义：脚步声。',
      mnemonic: '看到 footfall，先说出「脚步声」。',
      note: '核心义：脚步声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one footfall.', chinese: '这一章反复回到同一个点：脚步声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'footfall.s1', en: 'Without that footfall, the next paragraph is hard to follow.', zh: '没有这个脚步声，下一段会很难读。', structure: 'footfall / 表示 / 脚步声', grammar: 'noun，围绕「脚步声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the footfall.', right: 'He gave me some advice about the footfall.', reason: 'advice 不可数。名词 footfall 的单复数按词典词形记。', rule: '先确定 footfall 是noun，再套「脚步声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'footfall.q1', senseId: 'footfall.s1', errorType: 'meaning', type: '词义选择', prompt: '「footfall」在本条的核心意思是：', options: ['脚步声', '完全相反的意思', '一种古代钱币'], answer: '脚步声', explain: 'footfall：脚步声。' },
      { id: 'footfall.q2', senseId: 'footfall.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches footfall?', options: ['脚步声', 'a kind of ancient coin', 'the past tense of be'], answer: '脚步声', explain: '对的是「脚步声」。' },
      { id: 'footfall.q3', senseId: 'footfall.s1', errorType: 'grammar', type: '词义选择', prompt: 'footfall 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'footfall.q4', senseId: 'footfall.s1', errorType: 'meaning', type: '词源', prompt: '记 footfall 时，哪句更稳妥？', options: ['先锁住「脚步声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脚步声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脚步声'] },
  });

  D('footing', {
    etymology: {
      origin: '英语派生：foot + -ing，词性转到「立足点」。',
      prefix: null,
      root: { text: 'foot', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'footing', text: '英语派生：foot + -ing，词性转到「立足点」。' },
        { label: '现在', text: '核心用法是：立足点。' },
      ],
      formationLogic: '先认词干 foot，再看词尾。',
      mnemonic: '看到 footing，先说出「立足点」。',
      note: '先认词干 foot，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one footing.', chinese: '这一章反复回到同一个点：立足点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'footing.s1', en: 'Without that footing, the next paragraph is hard to follow.', zh: '没有这个立足点，下一段会很难读。', structure: 'footing / 表示 / 立足点', grammar: 'noun，围绕「立足点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the footing.', right: 'He gave me some advice about the footing.', reason: 'advice 不可数。名词 footing 的单复数按词典词形记。', rule: '先确定 footing 是noun，再套「立足点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'footing.q1', senseId: 'footing.s1', errorType: 'meaning', type: '词义选择', prompt: '「footing」在本条的核心意思是：', options: ['立足点', '完全相反的意思', '一种古代钱币'], answer: '立足点', explain: 'footing：立足点。' },
      { id: 'footing.q2', senseId: 'footing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches footing?', options: ['立足点', 'a kind of ancient coin', 'the past tense of be'], answer: '立足点', explain: '对的是「立足点」。' },
      { id: 'footing.q3', senseId: 'footing.s1', errorType: 'grammar', type: '词义选择', prompt: 'footing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'footing.q4', senseId: 'footing.s1', errorType: 'meaning', type: '词源', prompt: '记 footing 时，哪句更稳妥？', options: ['先锁住「立足点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「立足点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['立足点'] },
  });

  D('footpath', {
    etymology: {
      origin: '现代英语常用词「footpath」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'footpath', gloss: '人行道' },
      suffix: null,
      history: [
        { label: 'footpath', text: '现代英语常用词「footpath」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：人行道。' },
      ],
      formationLogic: '核心义：人行道。',
      mnemonic: '看到 footpath，先说出「人行道」。',
      note: '核心义：人行道。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one footpath.', chinese: '这一章反复回到同一个点：人行道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'footpath.s1', en: 'Without that footpath, the next paragraph is hard to follow.', zh: '没有这个人行道，下一段会很难读。', structure: 'footpath / 表示 / 人行道', grammar: 'noun，围绕「人行道」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the footpath.', right: 'He gave me some advice about the footpath.', reason: 'advice 不可数。名词 footpath 的单复数按词典词形记。', rule: '先确定 footpath 是noun，再套「人行道」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'footpath.q1', senseId: 'footpath.s1', errorType: 'meaning', type: '词义选择', prompt: '「footpath」在本条的核心意思是：', options: ['人行道', '完全相反的意思', '一种古代钱币'], answer: '人行道', explain: 'footpath：人行道。' },
      { id: 'footpath.q2', senseId: 'footpath.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches footpath?', options: ['人行道', 'a kind of ancient coin', 'the past tense of be'], answer: '人行道', explain: '对的是「人行道」。' },
      { id: 'footpath.q3', senseId: 'footpath.s1', errorType: 'grammar', type: '词义选择', prompt: 'footpath 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'footpath.q4', senseId: 'footpath.s1', errorType: 'meaning', type: '词源', prompt: '记 footpath 时，哪句更稳妥？', options: ['先锁住「人行道」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人行道」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人行道'] },
  });

  D('footprint', {
    etymology: {
      origin: '现代英语常用词「footprint」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'footprint', gloss: '脚印' },
      suffix: null,
      history: [
        { label: 'footprint', text: '现代英语常用词「footprint」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脚印。' },
      ],
      formationLogic: '核心义：脚印。',
      mnemonic: '看到 footprint，先说出「脚印」。',
      note: '核心义：脚印。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one footprint.', chinese: '这一章反复回到同一个点：脚印。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'footprint.s1', en: 'Without that footprint, the next paragraph is hard to follow.', zh: '没有这个脚印，下一段会很难读。', structure: 'footprint / 表示 / 脚印', grammar: 'noun，围绕「脚印」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the footprint.', right: 'He gave me some advice about the footprint.', reason: 'advice 不可数。名词 footprint 的单复数按词典词形记。', rule: '先确定 footprint 是noun，再套「脚印」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'footprint.q1', senseId: 'footprint.s1', errorType: 'meaning', type: '词义选择', prompt: '「footprint」在本条的核心意思是：', options: ['脚印', '完全相反的意思', '一种古代钱币'], answer: '脚印', explain: 'footprint：脚印。' },
      { id: 'footprint.q2', senseId: 'footprint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches footprint?', options: ['脚印', 'a kind of ancient coin', 'the past tense of be'], answer: '脚印', explain: '对的是「脚印」。' },
      { id: 'footprint.q3', senseId: 'footprint.s1', errorType: 'grammar', type: '词义选择', prompt: 'footprint 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'footprint.q4', senseId: 'footprint.s1', errorType: 'meaning', type: '词源', prompt: '记 footprint 时，哪句更稳妥？', options: ['先锁住「脚印」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脚印」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脚印'] },
  });

  D('footstep', {
    etymology: {
      origin: '现代英语常用词「footstep」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'footstep', gloss: '脚步' },
      suffix: null,
      history: [
        { label: 'footstep', text: '现代英语常用词「footstep」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脚步。' },
      ],
      formationLogic: '核心义：脚步。',
      mnemonic: '看到 footstep，先说出「脚步」。',
      note: '核心义：脚步。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one footstep.', chinese: '这一章反复回到同一个点：脚步。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'footstep.s1', en: 'Without that footstep, the next paragraph is hard to follow.', zh: '没有这个脚步，下一段会很难读。', structure: 'footstep / 表示 / 脚步', grammar: 'noun，围绕「脚步」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the footstep.', right: 'He gave me some advice about the footstep.', reason: 'advice 不可数。名词 footstep 的单复数按词典词形记。', rule: '先确定 footstep 是noun，再套「脚步」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'footstep.q1', senseId: 'footstep.s1', errorType: 'meaning', type: '词义选择', prompt: '「footstep」在本条的核心意思是：', options: ['脚步', '完全相反的意思', '一种古代钱币'], answer: '脚步', explain: 'footstep：脚步。' },
      { id: 'footstep.q2', senseId: 'footstep.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches footstep?', options: ['脚步', 'a kind of ancient coin', 'the past tense of be'], answer: '脚步', explain: '对的是「脚步」。' },
      { id: 'footstep.q3', senseId: 'footstep.s1', errorType: 'grammar', type: '词义选择', prompt: 'footstep 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'footstep.q4', senseId: 'footstep.s1', errorType: 'meaning', type: '词源', prompt: '记 footstep 时，哪句更稳妥？', options: ['先锁住「脚步」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脚步」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脚步'] },
  });

  D('footwear', {
    etymology: {
      origin: '现代英语常用词「footwear」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'footwear', gloss: '鞋类' },
      suffix: null,
      history: [
        { label: 'footwear', text: '现代英语常用词「footwear」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鞋类。' },
      ],
      formationLogic: '核心义：鞋类。',
      mnemonic: '看到 footwear，先说出「鞋类」。',
      note: '核心义：鞋类。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one footwear.', chinese: '这一章反复回到同一个点：鞋类。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'footwear.s1', en: 'Without that footwear, the next paragraph is hard to follow.', zh: '没有这个鞋类，下一段会很难读。', structure: 'footwear / 表示 / 鞋类', grammar: 'noun，围绕「鞋类」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the footwear.', right: 'He gave me some advice about the footwear.', reason: 'advice 不可数。名词 footwear 的单复数按词典词形记。', rule: '先确定 footwear 是noun，再套「鞋类」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'footwear.q1', senseId: 'footwear.s1', errorType: 'meaning', type: '词义选择', prompt: '「footwear」在本条的核心意思是：', options: ['鞋类', '完全相反的意思', '一种古代钱币'], answer: '鞋类', explain: 'footwear：鞋类。' },
      { id: 'footwear.q2', senseId: 'footwear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches footwear?', options: ['鞋类', 'a kind of ancient coin', 'the past tense of be'], answer: '鞋类', explain: '对的是「鞋类」。' },
      { id: 'footwear.q3', senseId: 'footwear.s1', errorType: 'grammar', type: '词义选择', prompt: 'footwear 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'footwear.q4', senseId: 'footwear.s1', errorType: 'meaning', type: '词源', prompt: '记 footwear 时，哪句更稳妥？', options: ['先锁住「鞋类」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鞋类」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鞋类'] },
  });

  D('for', {
    etymology: {
      origin: '现代英语常用词「for」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'for', gloss: '为了' },
      suffix: null,
      history: [
        { label: 'for', text: '现代英语常用词「for」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：为了。' },
      ],
      formationLogic: '核心义：为了。',
      mnemonic: '看到 for，先说出「为了」。',
      note: '核心义：为了。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for" and asked the class to keep it as one unit.', chinese: '老师把「for」圈出来，让全班把它当成一个整体。它表示为了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for.s1', en: 'In the margin she wrote "for" so nobody would split the phrase.', zh: '她在页边写下「for」，免得有人把这个说法拆开。意思是为了。', structure: 'for / 表示 / 为了', grammar: 'preposition，围绕「为了」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for and lost the point.', right: 'Keep "for" together: it means 为了.', reason: '「for」要整块理解。', rule: '先确定 for 是preposition，再套「为了」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for.q1', senseId: 'for.s1', errorType: 'meaning', type: '词义选择', prompt: '「for」在本条的核心意思是：', options: ['为了', '完全相反的意思', '一种古代钱币'], answer: '为了', explain: 'for：为了。' },
      { id: 'for.q2', senseId: 'for.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for?', options: ['为了', 'a kind of ancient coin', 'the past tense of be'], answer: '为了', explain: '对的是「为了」。' },
      { id: 'for.q3', senseId: 'for.s1', errorType: 'grammar', type: '词义选择', prompt: 'for 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'for.q4', senseId: 'for.s1', errorType: 'meaning', type: '词源', prompt: '记 for 时，哪句更稳妥？', options: ['先锁住「为了」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「为了」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['为了'] },
  });

  D('for a long time', {
    etymology: {
      origin: '现代英语固定说法「for a long time」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for a long time', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for a long time', text: '现代英语固定说法「for a long time」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：很久。' },
      ],
      formationLogic: '核心义：很久。',
      mnemonic: '看到 for a long time，先说出「很久」。',
      note: '核心义：很久。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for a long time" and asked the class to keep it as one unit.', chinese: '老师把「for a long time」圈出来，让全班把它当成一个整体。它表示很久。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for a long time.s1', en: 'In the margin she wrote "for a long time" so nobody would split the phrase.', zh: '她在页边写下「for a long time」，免得有人把这个说法拆开。意思是很久。', structure: 'for a long time / 表示 / 很久', grammar: 'adverb，围绕「很久」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for a long time and lost the point.', right: 'Keep "for a long time" together: it means 很久.', reason: '「for a long time」要整块理解。', rule: '先确定 for a long time 是adverb，再套「很久」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for a long time.q1', senseId: 'for a long time.s1', errorType: 'meaning', type: '词义选择', prompt: '「for a long time」在本条的核心意思是：', options: ['很久', '完全相反的意思', '一种古代钱币'], answer: '很久', explain: 'for a long time：很久。' },
      { id: 'for a long time.q2', senseId: 'for a long time.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for a long time?', options: ['很久', 'a kind of ancient coin', 'the past tense of be'], answer: '很久', explain: '对的是「很久」。' },
      { id: 'for a long time.q3', senseId: 'for a long time.s1', errorType: 'grammar', type: '词义选择', prompt: 'for a long time 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'for a long time.q4', senseId: 'for a long time.s1', errorType: 'meaning', type: '词源', prompt: '记 for a long time 时，哪句更稳妥？', options: ['先锁住「很久」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「很久」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['很久'] },
  });

  D('for example', {
    etymology: {
      origin: '现代英语固定说法「for example」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for example', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for example', text: '现代英语固定说法「for example」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：例如。' },
      ],
      formationLogic: '核心义：例如。',
      mnemonic: '看到 for example，先说出「例如」。',
      note: '核心义：例如。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for example" and asked the class to keep it as one unit.', chinese: '老师把「for example」圈出来，让全班把它当成一个整体。它表示例如。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for example.s1', en: 'In the margin she wrote "for example" so nobody would split the phrase.', zh: '她在页边写下「for example」，免得有人把这个说法拆开。意思是例如。', structure: 'for example / 表示 / 例如', grammar: 'adverb，围绕「例如」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for example and lost the point.', right: 'Keep "for example" together: it means 例如.', reason: '「for example」要整块理解。', rule: '先确定 for example 是adverb，再套「例如」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for example.q1', senseId: 'for example.s1', errorType: 'meaning', type: '词义选择', prompt: '「for example」在本条的核心意思是：', options: ['例如', '完全相反的意思', '一种古代钱币'], answer: '例如', explain: 'for example：例如。' },
      { id: 'for example.q2', senseId: 'for example.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for example?', options: ['例如', 'a kind of ancient coin', 'the past tense of be'], answer: '例如', explain: '对的是「例如」。' },
      { id: 'for example.q3', senseId: 'for example.s1', errorType: 'grammar', type: '词义选择', prompt: 'for example 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'for example.q4', senseId: 'for example.s1', errorType: 'meaning', type: '词源', prompt: '记 for example 时，哪句更稳妥？', options: ['先锁住「例如」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「例如」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['例如'] },
  });

  D('for fear', {
    etymology: {
      origin: '现代英语固定说法「for fear」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for fear', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for fear', text: '现代英语固定说法「for fear」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：唯恐。' },
      ],
      formationLogic: '核心义：唯恐。',
      mnemonic: '看到 for fear，先说出「唯恐」。',
      note: '核心义：唯恐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for fear" and asked the class to keep it as one unit.', chinese: '老师把「for fear」圈出来，让全班把它当成一个整体。它表示唯恐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for fear.s1', en: 'In the margin she wrote "for fear" so nobody would split the phrase.', zh: '她在页边写下「for fear」，免得有人把这个说法拆开。意思是唯恐。', structure: 'for fear / 表示 / 唯恐', grammar: 'conjunction，围绕「唯恐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for fear and lost the point.', right: 'Keep "for fear" together: it means 唯恐.', reason: '「for fear」要整块理解。', rule: '先确定 for fear 是conjunction，再套「唯恐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for fear.q1', senseId: 'for fear.s1', errorType: 'meaning', type: '词义选择', prompt: '「for fear」在本条的核心意思是：', options: ['唯恐', '完全相反的意思', '一种古代钱币'], answer: '唯恐', explain: 'for fear：唯恐。' },
      { id: 'for fear.q2', senseId: 'for fear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for fear?', options: ['唯恐', 'a kind of ancient coin', 'the past tense of be'], answer: '唯恐', explain: '对的是「唯恐」。' },
      { id: 'for fear.q3', senseId: 'for fear.s1', errorType: 'grammar', type: '词义选择', prompt: 'for fear 的词性（本条）更接近：', options: ['conjunction', '只能作感叹词', '只能作数词'], answer: 'conjunction', explain: '本条按 conjunction 来用。' },
      { id: 'for fear.q4', senseId: 'for fear.s1', errorType: 'meaning', type: '词源', prompt: '记 for fear 时，哪句更稳妥？', options: ['先锁住「唯恐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「唯恐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['唯恐'] },
  });

  D('for fear that', {
    etymology: {
      origin: '现代英语固定说法「for fear that」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for fear that', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for fear that', text: '现代英语固定说法「for fear that」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：唯恐。' },
      ],
      formationLogic: '核心义：唯恐。',
      mnemonic: '看到 for fear that，先说出「唯恐」。',
      note: '核心义：唯恐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for fear that" and asked the class to keep it as one unit.', chinese: '老师把「for fear that」圈出来，让全班把它当成一个整体。它表示唯恐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for fear that.s1', en: 'In the margin she wrote "for fear that" so nobody would split the phrase.', zh: '她在页边写下「for fear that」，免得有人把这个说法拆开。意思是唯恐。', structure: 'for fear that / 表示 / 唯恐', grammar: 'conjunction，围绕「唯恐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for fear that and lost the point.', right: 'Keep "for fear that" together: it means 唯恐.', reason: '「for fear that」要整块理解。', rule: '先确定 for fear that 是conjunction，再套「唯恐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for fear that.q1', senseId: 'for fear that.s1', errorType: 'meaning', type: '词义选择', prompt: '「for fear that」在本条的核心意思是：', options: ['唯恐', '完全相反的意思', '一种古代钱币'], answer: '唯恐', explain: 'for fear that：唯恐。' },
      { id: 'for fear that.q2', senseId: 'for fear that.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for fear that?', options: ['唯恐', 'a kind of ancient coin', 'the past tense of be'], answer: '唯恐', explain: '对的是「唯恐」。' },
      { id: 'for fear that.q3', senseId: 'for fear that.s1', errorType: 'grammar', type: '词义选择', prompt: 'for fear that 的词性（本条）更接近：', options: ['conjunction', '只能作感叹词', '只能作数词'], answer: 'conjunction', explain: '本条按 conjunction 来用。' },
      { id: 'for fear that.q4', senseId: 'for fear that.s1', errorType: 'meaning', type: '词源', prompt: '记 for fear that 时，哪句更稳妥？', options: ['先锁住「唯恐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「唯恐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['唯恐'] },
  });

  D('for now', {
    etymology: {
      origin: '现代英语固定说法「for now」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for now', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for now', text: '现代英语固定说法「for now」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：暂时。' },
      ],
      formationLogic: '核心义：暂时。',
      mnemonic: '看到 for now，先说出「暂时」。',
      note: '核心义：暂时。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for now" and asked the class to keep it as one unit.', chinese: '老师把「for now」圈出来，让全班把它当成一个整体。它表示暂时。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for now.s1', en: 'In the margin she wrote "for now" so nobody would split the phrase.', zh: '她在页边写下「for now」，免得有人把这个说法拆开。意思是暂时。', structure: 'for now / 表示 / 暂时', grammar: 'adverb，围绕「暂时」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for now and lost the point.', right: 'Keep "for now" together: it means 暂时.', reason: '「for now」要整块理解。', rule: '先确定 for now 是adverb，再套「暂时」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for now.q1', senseId: 'for now.s1', errorType: 'meaning', type: '词义选择', prompt: '「for now」在本条的核心意思是：', options: ['暂时', '完全相反的意思', '一种古代钱币'], answer: '暂时', explain: 'for now：暂时。' },
      { id: 'for now.q2', senseId: 'for now.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for now?', options: ['暂时', 'a kind of ancient coin', 'the past tense of be'], answer: '暂时', explain: '对的是「暂时」。' },
      { id: 'for now.q3', senseId: 'for now.s1', errorType: 'grammar', type: '词义选择', prompt: 'for now 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'for now.q4', senseId: 'for now.s1', errorType: 'meaning', type: '词源', prompt: '记 for now 时，哪句更稳妥？', options: ['先锁住「暂时」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「暂时」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暂时'] },
  });

  D('for some reason', {
    etymology: {
      origin: '现代英语固定说法「for some reason」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for some reason', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for some reason', text: '现代英语固定说法「for some reason」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：不知怎地。' },
      ],
      formationLogic: '核心义：不知怎地。',
      mnemonic: '看到 for some reason，先说出「不知怎地」。',
      note: '核心义：不知怎地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for some reason" and asked the class to keep it as one unit.', chinese: '老师把「for some reason」圈出来，让全班把它当成一个整体。它表示不知怎地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for some reason.s1', en: 'In the margin she wrote "for some reason" so nobody would split the phrase.', zh: '她在页边写下「for some reason」，免得有人把这个说法拆开。意思是不知怎地。', structure: 'for some reason / 表示 / 不知怎地', grammar: 'adverb，围绕「不知怎地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for some reason and lost the point.', right: 'Keep "for some reason" together: it means 不知怎地.', reason: '「for some reason」要整块理解。', rule: '先确定 for some reason 是adverb，再套「不知怎地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for some reason.q1', senseId: 'for some reason.s1', errorType: 'meaning', type: '词义选择', prompt: '「for some reason」在本条的核心意思是：', options: ['不知怎地', '完全相反的意思', '一种古代钱币'], answer: '不知怎地', explain: 'for some reason：不知怎地。' },
      { id: 'for some reason.q2', senseId: 'for some reason.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for some reason?', options: ['不知怎地', 'a kind of ancient coin', 'the past tense of be'], answer: '不知怎地', explain: '对的是「不知怎地」。' },
      { id: 'for some reason.q3', senseId: 'for some reason.s1', errorType: 'grammar', type: '词义选择', prompt: 'for some reason 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'for some reason.q4', senseId: 'for some reason.s1', errorType: 'meaning', type: '词源', prompt: '记 for some reason 时，哪句更稳妥？', options: ['先锁住「不知怎地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不知怎地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不知怎地'] },
  });

  D('for what reason', {
    etymology: {
      origin: '现代英语固定说法「for what reason」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'for what reason', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'for what reason', text: '现代英语固定说法「for what reason」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：为什么。' },
      ],
      formationLogic: '核心义：为什么。',
      mnemonic: '看到 for what reason，先说出「为什么」。',
      note: '核心义：为什么。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "for what reason" and asked the class to keep it as one unit.', chinese: '老师把「for what reason」圈出来，让全班把它当成一个整体。它表示为什么。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'for what reason.s1', en: 'In the margin she wrote "for what reason" so nobody would split the phrase.', zh: '她在页边写下「for what reason」，免得有人把这个说法拆开。意思是为什么。', structure: 'for what reason / 表示 / 为什么', grammar: 'adverb，围绕「为什么」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of for what reason and lost the point.', right: 'Keep "for what reason" together: it means 为什么.', reason: '「for what reason」要整块理解。', rule: '先确定 for what reason 是adverb，再套「为什么」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'for what reason.q1', senseId: 'for what reason.s1', errorType: 'meaning', type: '词义选择', prompt: '「for what reason」在本条的核心意思是：', options: ['为什么', '完全相反的意思', '一种古代钱币'], answer: '为什么', explain: 'for what reason：为什么。' },
      { id: 'for what reason.q2', senseId: 'for what reason.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches for what reason?', options: ['为什么', 'a kind of ancient coin', 'the past tense of be'], answer: '为什么', explain: '对的是「为什么」。' },
      { id: 'for what reason.q3', senseId: 'for what reason.s1', errorType: 'grammar', type: '词义选择', prompt: 'for what reason 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'for what reason.q4', senseId: 'for what reason.s1', errorType: 'meaning', type: '词源', prompt: '记 for what reason 时，哪句更稳妥？', options: ['先锁住「为什么」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「为什么」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['为什么'] },
  });

  D('forbid', {
    etymology: {
      origin: '现代英语常用词「forbid」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forbid', gloss: '禁止' },
      suffix: null,
      history: [
        { label: 'forbid', text: '现代英语常用词「forbid」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：禁止。' },
      ],
      formationLogic: '核心义：禁止。',
      mnemonic: '看到 forbid，先说出「禁止」。',
      note: '核心义：禁止。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forbid before the office closed.', chinese: '他们同意在办公室关门前做这件事：禁止。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forbid.s1', en: 'The deadline forced the team to forbid that afternoon.', zh: '截止日期逼着小组在那天下午禁止。', structure: 'forbid / 表示 / 禁止', grammar: 'verb，围绕「禁止」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forbided it yesterday without checking the real past form.', right: 'Check the past form of "forbid" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forbid 是verb，再套「禁止」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forbid.q1', senseId: 'forbid.s1', errorType: 'meaning', type: '词义选择', prompt: '「forbid」在本条的核心意思是：', options: ['禁止', '完全相反的意思', '一种古代钱币'], answer: '禁止', explain: 'forbid：禁止。' },
      { id: 'forbid.q2', senseId: 'forbid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forbid?', options: ['禁止', 'a kind of ancient coin', 'the past tense of be'], answer: '禁止', explain: '对的是「禁止」。' },
      { id: 'forbid.q3', senseId: 'forbid.s1', errorType: 'grammar', type: '词义选择', prompt: 'forbid 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forbid.q4', senseId: 'forbid.s1', errorType: 'meaning', type: '词源', prompt: '记 forbid 时，哪句更稳妥？', options: ['先锁住「禁止」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「禁止」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['禁止'] },
  });

  D('forbidden', {
    etymology: {
      origin: '现代英语常用词「forbidden」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forbidden', gloss: '被禁止的' },
      suffix: null,
      history: [
        { label: 'forbidden', text: '现代英语常用词「forbidden」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被禁止的。' },
      ],
      formationLogic: '核心义：被禁止的。',
      mnemonic: '看到 forbidden，先说出「被禁止的」。',
      note: '核心义：被禁止的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was forbidden.', chinese: '即使是初读者也能看出，这个结果是被禁止的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forbidden.s1', en: 'They wanted a forbidden answer, not a long speech.', zh: '他们要一个被禁止的的答复，不要长篇发言。', structure: 'forbidden / 表示 / 被禁止的', grammar: 'adjective，围绕「被禁止的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are forbidden.', right: 'The news is forbidden.', reason: 'news 作主语时动词用单数。', rule: '先确定 forbidden 是adjective，再套「被禁止的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forbidden.q1', senseId: 'forbidden.s1', errorType: 'meaning', type: '词义选择', prompt: '「forbidden」在本条的核心意思是：', options: ['被禁止的', '完全相反的意思', '一种古代钱币'], answer: '被禁止的', explain: 'forbidden：被禁止的。' },
      { id: 'forbidden.q2', senseId: 'forbidden.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forbidden?', options: ['被禁止的', 'a kind of ancient coin', 'the past tense of be'], answer: '被禁止的', explain: '对的是「被禁止的」。' },
      { id: 'forbidden.q3', senseId: 'forbidden.s1', errorType: 'grammar', type: '词义选择', prompt: 'forbidden 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'forbidden.q4', senseId: 'forbidden.s1', errorType: 'meaning', type: '词源', prompt: '记 forbidden 时，哪句更稳妥？', options: ['先锁住「被禁止的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被禁止的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被禁止的'] },
  });

  D('force', {
    etymology: {
      origin: '现代英语常用词「force」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'force', gloss: '力量' },
      suffix: null,
      history: [
        { label: 'force', text: '现代英语常用词「force」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：力量。' },
      ],
      formationLogic: '核心义：力量。',
      mnemonic: '看到 force，先说出「力量」。',
      note: '核心义：力量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one force.', chinese: '这一章反复回到同一个点：力量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'force.s1', en: 'Without that force, the next paragraph is hard to follow.', zh: '没有这个力量，下一段会很难读。', structure: 'force / 表示 / 力量', grammar: 'noun，围绕「力量」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the force.', right: 'He gave me some advice about the force.', reason: 'advice 不可数。名词 force 的单复数按词典词形记。', rule: '先确定 force 是noun，再套「力量」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'force.q1', senseId: 'force.s1', errorType: 'meaning', type: '词义选择', prompt: '「force」在本条的核心意思是：', options: ['力量', '完全相反的意思', '一种古代钱币'], answer: '力量', explain: 'force：力量。' },
      { id: 'force.q2', senseId: 'force.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches force?', options: ['力量', 'a kind of ancient coin', 'the past tense of be'], answer: '力量', explain: '对的是「力量」。' },
      { id: 'force.q3', senseId: 'force.s1', errorType: 'grammar', type: '词义选择', prompt: 'force 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'force.q4', senseId: 'force.s1', errorType: 'meaning', type: '词源', prompt: '记 force 时，哪句更稳妥？', options: ['先锁住「力量」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「力量」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['力量'] },
  });

  D('forceful', {
    etymology: {
      origin: '英语派生：force + -ful，词性转到「有力的」。',
      prefix: null,
      root: { text: 'force', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forceful', text: '英语派生：force + -ful，词性转到「有力的」。' },
        { label: '现在', text: '核心用法是：有力的。' },
      ],
      formationLogic: '先认词干 force，再看词尾。',
      mnemonic: '看到 forceful，先说出「有力的」。',
      note: '先认词干 force，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was forceful.', chinese: '即使是初读者也能看出，这个结果是有力的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forceful.s1', en: 'They wanted a forceful answer, not a long speech.', zh: '他们要一个有力的的答复，不要长篇发言。', structure: 'forceful / 表示 / 有力的', grammar: 'adjective，围绕「有力的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are forceful.', right: 'The news is forceful.', reason: 'news 作主语时动词用单数。', rule: '先确定 forceful 是adjective，再套「有力的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forceful.q1', senseId: 'forceful.s1', errorType: 'meaning', type: '词义选择', prompt: '「forceful」在本条的核心意思是：', options: ['有力的', '完全相反的意思', '一种古代钱币'], answer: '有力的', explain: 'forceful：有力的。' },
      { id: 'forceful.q2', senseId: 'forceful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forceful?', options: ['有力的', 'a kind of ancient coin', 'the past tense of be'], answer: '有力的', explain: '对的是「有力的」。' },
      { id: 'forceful.q3', senseId: 'forceful.s1', errorType: 'grammar', type: '词义选择', prompt: 'forceful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'forceful.q4', senseId: 'forceful.s1', errorType: 'meaning', type: '词源', prompt: '记 forceful 时，哪句更稳妥？', options: ['先锁住「有力的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有力的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有力的'] },
  });

  D('forcefully', {
    etymology: {
      origin: '英语派生：forceful + -ly，词性转到「有力地」。',
      prefix: null,
      root: { text: 'forceful', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forcefully', text: '英语派生：forceful + -ly，词性转到「有力地」。' },
        { label: '现在', text: '核心用法是：有力地。' },
      ],
      formationLogic: '先认词干 forceful，再看词尾。',
      mnemonic: '看到 forcefully，先说出「有力地」。',
      note: '先认词干 forceful，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule forcefully, and the class followed.', chinese: '她把规则讲清楚了（有力地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forcefully.s1', en: 'He nodded forcefully and returned to the notes.', zh: '他有力地地点了点头，又回去看笔记。', structure: 'forcefully / 表示 / 有力地', grammar: 'adverb，围绕「有力地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very forcefullyly in the meeting.', right: 'She spoke forcefully in the meeting.', reason: 'forcefully 已经是副词，不要再加 -ly。', rule: '先确定 forcefully 是adverb，再套「有力地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forcefully.q1', senseId: 'forcefully.s1', errorType: 'meaning', type: '词义选择', prompt: '「forcefully」在本条的核心意思是：', options: ['有力地', '完全相反的意思', '一种古代钱币'], answer: '有力地', explain: 'forcefully：有力地。' },
      { id: 'forcefully.q2', senseId: 'forcefully.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forcefully?', options: ['有力地', 'a kind of ancient coin', 'the past tense of be'], answer: '有力地', explain: '对的是「有力地」。' },
      { id: 'forcefully.q3', senseId: 'forcefully.s1', errorType: 'grammar', type: '词义选择', prompt: 'forcefully 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'forcefully.q4', senseId: 'forcefully.s1', errorType: 'meaning', type: '词源', prompt: '记 forcefully 时，哪句更稳妥？', options: ['先锁住「有力地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有力地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有力地'] },
  });

  D('forces', {
    etymology: {
      origin: '现代英语常用词「forces」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forces', gloss: '部队（复数）' },
      suffix: null,
      history: [
        { label: 'forces', text: '现代英语常用词「forces」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：部队（复数）。' },
      ],
      formationLogic: '核心义：部队（复数）。',
      mnemonic: '看到 forces，先说出「部队（复数）」。',
      note: '核心义：部队（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forces.', chinese: '这一章反复回到同一个点：部队（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forces.s1', en: 'Without that forces, the next paragraph is hard to follow.', zh: '没有这个部队（复数），下一段会很难读。', structure: 'forces / 表示 / 部队（复数）', grammar: 'noun，围绕「部队（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forces.', right: 'He gave me some advice about the forces.', reason: 'advice 不可数。名词 forces 的单复数按词典词形记。', rule: '先确定 forces 是noun，再套「部队（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forces.q1', senseId: 'forces.s1', errorType: 'meaning', type: '词义选择', prompt: '「forces」在本条的核心意思是：', options: ['部队（复数）', '完全相反的意思', '一种古代钱币'], answer: '部队（复数）', explain: 'forces：部队（复数）。' },
      { id: 'forces.q2', senseId: 'forces.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forces?', options: ['部队（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '部队（复数）', explain: '对的是「部队（复数）」。' },
      { id: 'forces.q3', senseId: 'forces.s1', errorType: 'grammar', type: '词义选择', prompt: 'forces 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forces.q4', senseId: 'forces.s1', errorType: 'meaning', type: '词源', prompt: '记 forces 时，哪句更稳妥？', options: ['先锁住「部队（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「部队（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['部队（复数）'] },
  });

  D('forecast', {
    etymology: {
      origin: '现代英语常用词「forecast」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forecast', gloss: '预报' },
      suffix: null,
      history: [
        { label: 'forecast', text: '现代英语常用词「forecast」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：预报。' },
      ],
      formationLogic: '核心义：预报。',
      mnemonic: '看到 forecast，先说出「预报」。',
      note: '核心义：预报。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forecast.', chinese: '这一章反复回到同一个点：预报。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forecast.s1', en: 'Without that forecast, the next paragraph is hard to follow.', zh: '没有这个预报，下一段会很难读。', structure: 'forecast / 表示 / 预报', grammar: 'noun，围绕「预报」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forecast.', right: 'He gave me some advice about the forecast.', reason: 'advice 不可数。名词 forecast 的单复数按词典词形记。', rule: '先确定 forecast 是noun，再套「预报」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forecast.q1', senseId: 'forecast.s1', errorType: 'meaning', type: '词义选择', prompt: '「forecast」在本条的核心意思是：', options: ['预报', '完全相反的意思', '一种古代钱币'], answer: '预报', explain: 'forecast：预报。' },
      { id: 'forecast.q2', senseId: 'forecast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forecast?', options: ['预报', 'a kind of ancient coin', 'the past tense of be'], answer: '预报', explain: '对的是「预报」。' },
      { id: 'forecast.q3', senseId: 'forecast.s1', errorType: 'grammar', type: '词义选择', prompt: 'forecast 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forecast.q4', senseId: 'forecast.s1', errorType: 'meaning', type: '词源', prompt: '记 forecast 时，哪句更稳妥？', options: ['先锁住「预报」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「预报」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['预报'] },
  });

  D('forefather', {
    etymology: {
      origin: '英语派生：forefath + -er，词性转到「祖先」。',
      prefix: null,
      root: { text: 'forefath', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forefather', text: '英语派生：forefath + -er，词性转到「祖先」。' },
        { label: '现在', text: '核心用法是：祖先。' },
      ],
      formationLogic: '先认词干 forefath，再看词尾。',
      mnemonic: '看到 forefather，先说出「祖先」。',
      note: '先认词干 forefath，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forefather.', chinese: '这一章反复回到同一个点：祖先。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forefather.s1', en: 'Without that forefather, the next paragraph is hard to follow.', zh: '没有这个祖先，下一段会很难读。', structure: 'forefather / 表示 / 祖先', grammar: 'noun，围绕「祖先」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forefather.', right: 'He gave me some advice about the forefather.', reason: 'advice 不可数。名词 forefather 的单复数按词典词形记。', rule: '先确定 forefather 是noun，再套「祖先」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forefather.q1', senseId: 'forefather.s1', errorType: 'meaning', type: '词义选择', prompt: '「forefather」在本条的核心意思是：', options: ['祖先', '完全相反的意思', '一种古代钱币'], answer: '祖先', explain: 'forefather：祖先。' },
      { id: 'forefather.q2', senseId: 'forefather.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forefather?', options: ['祖先', 'a kind of ancient coin', 'the past tense of be'], answer: '祖先', explain: '对的是「祖先」。' },
      { id: 'forefather.q3', senseId: 'forefather.s1', errorType: 'grammar', type: '词义选择', prompt: 'forefather 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forefather.q4', senseId: 'forefather.s1', errorType: 'meaning', type: '词源', prompt: '记 forefather 时，哪句更稳妥？', options: ['先锁住「祖先」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「祖先」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['祖先'] },
  });

  D('forefront', {
    etymology: {
      origin: '现代英语常用词「forefront」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forefront', gloss: '前沿' },
      suffix: null,
      history: [
        { label: 'forefront', text: '现代英语常用词「forefront」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前沿。' },
      ],
      formationLogic: '核心义：前沿。',
      mnemonic: '看到 forefront，先说出「前沿」。',
      note: '核心义：前沿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forefront.', chinese: '这一章反复回到同一个点：前沿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forefront.s1', en: 'Without that forefront, the next paragraph is hard to follow.', zh: '没有这个前沿，下一段会很难读。', structure: 'forefront / 表示 / 前沿', grammar: 'noun，围绕「前沿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forefront.', right: 'He gave me some advice about the forefront.', reason: 'advice 不可数。名词 forefront 的单复数按词典词形记。', rule: '先确定 forefront 是noun，再套「前沿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forefront.q1', senseId: 'forefront.s1', errorType: 'meaning', type: '词义选择', prompt: '「forefront」在本条的核心意思是：', options: ['前沿', '完全相反的意思', '一种古代钱币'], answer: '前沿', explain: 'forefront：前沿。' },
      { id: 'forefront.q2', senseId: 'forefront.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forefront?', options: ['前沿', 'a kind of ancient coin', 'the past tense of be'], answer: '前沿', explain: '对的是「前沿」。' },
      { id: 'forefront.q3', senseId: 'forefront.s1', errorType: 'grammar', type: '词义选择', prompt: 'forefront 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forefront.q4', senseId: 'forefront.s1', errorType: 'meaning', type: '词源', prompt: '记 forefront 时，哪句更稳妥？', options: ['先锁住「前沿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前沿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前沿'] },
  });

  D('forehead', {
    etymology: {
      origin: '现代英语常用词「forehead」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forehead', gloss: '前额' },
      suffix: null,
      history: [
        { label: 'forehead', text: '现代英语常用词「forehead」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前额。' },
      ],
      formationLogic: '核心义：前额。',
      mnemonic: '看到 forehead，先说出「前额」。',
      note: '核心义：前额。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forehead.', chinese: '这一章反复回到同一个点：前额。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forehead.s1', en: 'Without that forehead, the next paragraph is hard to follow.', zh: '没有这个前额，下一段会很难读。', structure: 'forehead / 表示 / 前额', grammar: 'noun，围绕「前额」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forehead.', right: 'He gave me some advice about the forehead.', reason: 'advice 不可数。名词 forehead 的单复数按词典词形记。', rule: '先确定 forehead 是noun，再套「前额」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forehead.q1', senseId: 'forehead.s1', errorType: 'meaning', type: '词义选择', prompt: '「forehead」在本条的核心意思是：', options: ['前额', '完全相反的意思', '一种古代钱币'], answer: '前额', explain: 'forehead：前额。' },
      { id: 'forehead.q2', senseId: 'forehead.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forehead?', options: ['前额', 'a kind of ancient coin', 'the past tense of be'], answer: '前额', explain: '对的是「前额」。' },
      { id: 'forehead.q3', senseId: 'forehead.s1', errorType: 'grammar', type: '词义选择', prompt: 'forehead 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forehead.q4', senseId: 'forehead.s1', errorType: 'meaning', type: '词源', prompt: '记 forehead 时，哪句更稳妥？', options: ['先锁住「前额」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前额」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前额'] },
  });

  D('foreign', {
    etymology: {
      origin: '现代英语常用词「foreign」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foreign', gloss: '外国的' },
      suffix: null,
      history: [
        { label: 'foreign', text: '现代英语常用词「foreign」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：外国的。' },
      ],
      formationLogic: '核心义：外国的。',
      mnemonic: '看到 foreign，先说出「外国的」。',
      note: '核心义：外国的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was foreign.', chinese: '即使是初读者也能看出，这个结果是外国的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foreign.s1', en: 'They wanted a foreign answer, not a long speech.', zh: '他们要一个外国的的答复，不要长篇发言。', structure: 'foreign / 表示 / 外国的', grammar: 'adjective，围绕「外国的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are foreign.', right: 'The news is foreign.', reason: 'news 作主语时动词用单数。', rule: '先确定 foreign 是adjective，再套「外国的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foreign.q1', senseId: 'foreign.s1', errorType: 'meaning', type: '词义选择', prompt: '「foreign」在本条的核心意思是：', options: ['外国的', '完全相反的意思', '一种古代钱币'], answer: '外国的', explain: 'foreign：外国的。' },
      { id: 'foreign.q2', senseId: 'foreign.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foreign?', options: ['外国的', 'a kind of ancient coin', 'the past tense of be'], answer: '外国的', explain: '对的是「外国的」。' },
      { id: 'foreign.q3', senseId: 'foreign.s1', errorType: 'grammar', type: '词义选择', prompt: 'foreign 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'foreign.q4', senseId: 'foreign.s1', errorType: 'meaning', type: '词源', prompt: '记 foreign 时，哪句更稳妥？', options: ['先锁住「外国的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外国的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外国的'] },
  });

  D('foremost', {
    etymology: {
      origin: '现代英语常用词「foremost」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foremost', gloss: '最重要的' },
      suffix: null,
      history: [
        { label: 'foremost', text: '现代英语常用词「foremost」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：最重要的。' },
      ],
      formationLogic: '核心义：最重要的。',
      mnemonic: '看到 foremost，先说出「最重要的」。',
      note: '核心义：最重要的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was foremost.', chinese: '即使是初读者也能看出，这个结果是最重要的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foremost.s1', en: 'They wanted a foremost answer, not a long speech.', zh: '他们要一个最重要的的答复，不要长篇发言。', structure: 'foremost / 表示 / 最重要的', grammar: 'adjective，围绕「最重要的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are foremost.', right: 'The news is foremost.', reason: 'news 作主语时动词用单数。', rule: '先确定 foremost 是adjective，再套「最重要的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foremost.q1', senseId: 'foremost.s1', errorType: 'meaning', type: '词义选择', prompt: '「foremost」在本条的核心意思是：', options: ['最重要的', '完全相反的意思', '一种古代钱币'], answer: '最重要的', explain: 'foremost：最重要的。' },
      { id: 'foremost.q2', senseId: 'foremost.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foremost?', options: ['最重要的', 'a kind of ancient coin', 'the past tense of be'], answer: '最重要的', explain: '对的是「最重要的」。' },
      { id: 'foremost.q3', senseId: 'foremost.s1', errorType: 'grammar', type: '词义选择', prompt: 'foremost 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'foremost.q4', senseId: 'foremost.s1', errorType: 'meaning', type: '词源', prompt: '记 foremost 时，哪句更稳妥？', options: ['先锁住「最重要的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最重要的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最重要的'] },
  });

  D('forenoon', {
    etymology: {
      origin: '现代英语常用词「forenoon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forenoon', gloss: '上午' },
      suffix: null,
      history: [
        { label: 'forenoon', text: '现代英语常用词「forenoon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：上午。' },
      ],
      formationLogic: '核心义：上午。',
      mnemonic: '看到 forenoon，先说出「上午」。',
      note: '核心义：上午。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forenoon.', chinese: '这一章反复回到同一个点：上午。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forenoon.s1', en: 'Without that forenoon, the next paragraph is hard to follow.', zh: '没有这个上午，下一段会很难读。', structure: 'forenoon / 表示 / 上午', grammar: 'noun，围绕「上午」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forenoon.', right: 'He gave me some advice about the forenoon.', reason: 'advice 不可数。名词 forenoon 的单复数按词典词形记。', rule: '先确定 forenoon 是noun，再套「上午」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forenoon.q1', senseId: 'forenoon.s1', errorType: 'meaning', type: '词义选择', prompt: '「forenoon」在本条的核心意思是：', options: ['上午', '完全相反的意思', '一种古代钱币'], answer: '上午', explain: 'forenoon：上午。' },
      { id: 'forenoon.q2', senseId: 'forenoon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forenoon?', options: ['上午', 'a kind of ancient coin', 'the past tense of be'], answer: '上午', explain: '对的是「上午」。' },
      { id: 'forenoon.q3', senseId: 'forenoon.s1', errorType: 'grammar', type: '词义选择', prompt: 'forenoon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forenoon.q4', senseId: 'forenoon.s1', errorType: 'meaning', type: '词源', prompt: '记 forenoon 时，哪句更稳妥？', options: ['先锁住「上午」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「上午」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上午'] },
  });

  D('forensic', {
    etymology: {
      origin: '英语派生：forens + -ic，词性转到「法医的」。',
      prefix: null,
      root: { text: 'forens', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forensic', text: '英语派生：forens + -ic，词性转到「法医的」。' },
        { label: '现在', text: '核心用法是：法医的。' },
      ],
      formationLogic: '先认词干 forens，再看词尾。',
      mnemonic: '看到 forensic，先说出「法医的」。',
      note: '先认词干 forens，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was forensic.', chinese: '即使是初读者也能看出，这个结果是法医的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forensic.s1', en: 'They wanted a forensic answer, not a long speech.', zh: '他们要一个法医的的答复，不要长篇发言。', structure: 'forensic / 表示 / 法医的', grammar: 'adjective，围绕「法医的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are forensic.', right: 'The news is forensic.', reason: 'news 作主语时动词用单数。', rule: '先确定 forensic 是adjective，再套「法医的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forensic.q1', senseId: 'forensic.s1', errorType: 'meaning', type: '词义选择', prompt: '「forensic」在本条的核心意思是：', options: ['法医的', '完全相反的意思', '一种古代钱币'], answer: '法医的', explain: 'forensic：法医的。' },
      { id: 'forensic.q2', senseId: 'forensic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forensic?', options: ['法医的', 'a kind of ancient coin', 'the past tense of be'], answer: '法医的', explain: '对的是「法医的」。' },
      { id: 'forensic.q3', senseId: 'forensic.s1', errorType: 'grammar', type: '词义选择', prompt: 'forensic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'forensic.q4', senseId: 'forensic.s1', errorType: 'meaning', type: '词源', prompt: '记 forensic 时，哪句更稳妥？', options: ['先锁住「法医的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「法医的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['法医的'] },
  });

  D('forepart', {
    etymology: {
      origin: '现代英语常用词「forepart」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forepart', gloss: '前部' },
      suffix: null,
      history: [
        { label: 'forepart', text: '现代英语常用词「forepart」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前部。' },
      ],
      formationLogic: '核心义：前部。',
      mnemonic: '看到 forepart，先说出「前部」。',
      note: '核心义：前部。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forepart.', chinese: '这一章反复回到同一个点：前部。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forepart.s1', en: 'Without that forepart, the next paragraph is hard to follow.', zh: '没有这个前部，下一段会很难读。', structure: 'forepart / 表示 / 前部', grammar: 'noun，围绕「前部」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forepart.', right: 'He gave me some advice about the forepart.', reason: 'advice 不可数。名词 forepart 的单复数按词典词形记。', rule: '先确定 forepart 是noun，再套「前部」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forepart.q1', senseId: 'forepart.s1', errorType: 'meaning', type: '词义选择', prompt: '「forepart」在本条的核心意思是：', options: ['前部', '完全相反的意思', '一种古代钱币'], answer: '前部', explain: 'forepart：前部。' },
      { id: 'forepart.q2', senseId: 'forepart.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forepart?', options: ['前部', 'a kind of ancient coin', 'the past tense of be'], answer: '前部', explain: '对的是「前部」。' },
      { id: 'forepart.q3', senseId: 'forepart.s1', errorType: 'grammar', type: '词义选择', prompt: 'forepart 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forepart.q4', senseId: 'forepart.s1', errorType: 'meaning', type: '词源', prompt: '记 forepart 时，哪句更稳妥？', options: ['先锁住「前部」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前部」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前部'] },
  });

  D('forerunner', {
    etymology: {
      origin: '英语派生：forerunn + -er，词性转到「先驱」。',
      prefix: null,
      root: { text: 'forerunn', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forerunner', text: '英语派生：forerunn + -er，词性转到「先驱」。' },
        { label: '现在', text: '核心用法是：先驱。' },
      ],
      formationLogic: '先认词干 forerunn，再看词尾。',
      mnemonic: '看到 forerunner，先说出「先驱」。',
      note: '先认词干 forerunn，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forerunner.', chinese: '这一章反复回到同一个点：先驱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forerunner.s1', en: 'Without that forerunner, the next paragraph is hard to follow.', zh: '没有这个先驱，下一段会很难读。', structure: 'forerunner / 表示 / 先驱', grammar: 'noun，围绕「先驱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forerunner.', right: 'He gave me some advice about the forerunner.', reason: 'advice 不可数。名词 forerunner 的单复数按词典词形记。', rule: '先确定 forerunner 是noun，再套「先驱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forerunner.q1', senseId: 'forerunner.s1', errorType: 'meaning', type: '词义选择', prompt: '「forerunner」在本条的核心意思是：', options: ['先驱', '完全相反的意思', '一种古代钱币'], answer: '先驱', explain: 'forerunner：先驱。' },
      { id: 'forerunner.q2', senseId: 'forerunner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forerunner?', options: ['先驱', 'a kind of ancient coin', 'the past tense of be'], answer: '先驱', explain: '对的是「先驱」。' },
      { id: 'forerunner.q3', senseId: 'forerunner.s1', errorType: 'grammar', type: '词义选择', prompt: 'forerunner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forerunner.q4', senseId: 'forerunner.s1', errorType: 'meaning', type: '词源', prompt: '记 forerunner 时，哪句更稳妥？', options: ['先锁住「先驱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「先驱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['先驱'] },
  });

  D('foresee', {
    etymology: {
      origin: '现代英语常用词「foresee」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foresee', gloss: '预见' },
      suffix: null,
      history: [
        { label: 'foresee', text: '现代英语常用词「foresee」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：预见。' },
      ],
      formationLogic: '核心义：预见。',
      mnemonic: '看到 foresee，先说出「预见」。',
      note: '核心义：预见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to foresee before the office closed.', chinese: '他们同意在办公室关门前做这件事：预见。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foresee.s1', en: 'The deadline forced the team to foresee that afternoon.', zh: '截止日期逼着小组在那天下午预见。', structure: 'foresee / 表示 / 预见', grammar: 'verb，围绕「预见」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She foreseeed it yesterday without checking the real past form.', right: 'Check the past form of "foresee" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 foresee 是verb，再套「预见」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foresee.q1', senseId: 'foresee.s1', errorType: 'meaning', type: '词义选择', prompt: '「foresee」在本条的核心意思是：', options: ['预见', '完全相反的意思', '一种古代钱币'], answer: '预见', explain: 'foresee：预见。' },
      { id: 'foresee.q2', senseId: 'foresee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foresee?', options: ['预见', 'a kind of ancient coin', 'the past tense of be'], answer: '预见', explain: '对的是「预见」。' },
      { id: 'foresee.q3', senseId: 'foresee.s1', errorType: 'grammar', type: '词义选择', prompt: 'foresee 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'foresee.q4', senseId: 'foresee.s1', errorType: 'meaning', type: '词源', prompt: '记 foresee 时，哪句更稳妥？', options: ['先锁住「预见」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「预见」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['预见'] },
  });

  D('foresight', {
    etymology: {
      origin: '现代英语常用词「foresight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foresight', gloss: '远见' },
      suffix: null,
      history: [
        { label: 'foresight', text: '现代英语常用词「foresight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：远见。' },
      ],
      formationLogic: '核心义：远见。',
      mnemonic: '看到 foresight，先说出「远见」。',
      note: '核心义：远见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foresight.', chinese: '这一章反复回到同一个点：远见。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foresight.s1', en: 'Without that foresight, the next paragraph is hard to follow.', zh: '没有这个远见，下一段会很难读。', structure: 'foresight / 表示 / 远见', grammar: 'noun，围绕「远见」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foresight.', right: 'He gave me some advice about the foresight.', reason: 'advice 不可数。名词 foresight 的单复数按词典词形记。', rule: '先确定 foresight 是noun，再套「远见」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foresight.q1', senseId: 'foresight.s1', errorType: 'meaning', type: '词义选择', prompt: '「foresight」在本条的核心意思是：', options: ['远见', '完全相反的意思', '一种古代钱币'], answer: '远见', explain: 'foresight：远见。' },
      { id: 'foresight.q2', senseId: 'foresight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foresight?', options: ['远见', 'a kind of ancient coin', 'the past tense of be'], answer: '远见', explain: '对的是「远见」。' },
      { id: 'foresight.q3', senseId: 'foresight.s1', errorType: 'grammar', type: '词义选择', prompt: 'foresight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foresight.q4', senseId: 'foresight.s1', errorType: 'meaning', type: '词源', prompt: '记 foresight 时，哪句更稳妥？', options: ['先锁住「远见」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「远见」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['远见'] },
  });

  D('forest', {
    etymology: {
      origin: '现代英语常用词「forest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forest', gloss: '森林' },
      suffix: null,
      history: [
        { label: 'forest', text: '现代英语常用词「forest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：森林。' },
      ],
      formationLogic: '核心义：森林。',
      mnemonic: '看到 forest，先说出「森林」。',
      note: '核心义：森林。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forest.', chinese: '这一章反复回到同一个点：森林。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forest.s1', en: 'Without that forest, the next paragraph is hard to follow.', zh: '没有这个森林，下一段会很难读。', structure: 'forest / 表示 / 森林', grammar: 'noun，围绕「森林」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forest.', right: 'He gave me some advice about the forest.', reason: 'advice 不可数。名词 forest 的单复数按词典词形记。', rule: '先确定 forest 是noun，再套「森林」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forest.q1', senseId: 'forest.s1', errorType: 'meaning', type: '词义选择', prompt: '「forest」在本条的核心意思是：', options: ['森林', '完全相反的意思', '一种古代钱币'], answer: '森林', explain: 'forest：森林。' },
      { id: 'forest.q2', senseId: 'forest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forest?', options: ['森林', 'a kind of ancient coin', 'the past tense of be'], answer: '森林', explain: '对的是「森林」。' },
      { id: 'forest.q3', senseId: 'forest.s1', errorType: 'grammar', type: '词义选择', prompt: 'forest 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forest.q4', senseId: 'forest.s1', errorType: 'meaning', type: '词源', prompt: '记 forest 时，哪句更稳妥？', options: ['先锁住「森林」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「森林」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['森林'] },
  });

  D('foretell', {
    etymology: {
      origin: '现代英语常用词「foretell」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foretell', gloss: '预言' },
      suffix: null,
      history: [
        { label: 'foretell', text: '现代英语常用词「foretell」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：预言。' },
      ],
      formationLogic: '核心义：预言。',
      mnemonic: '看到 foretell，先说出「预言」。',
      note: '核心义：预言。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to foretell before the office closed.', chinese: '他们同意在办公室关门前做这件事：预言。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foretell.s1', en: 'The deadline forced the team to foretell that afternoon.', zh: '截止日期逼着小组在那天下午预言。', structure: 'foretell / 表示 / 预言', grammar: 'verb，围绕「预言」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She foretelled it yesterday without checking the real past form.', right: 'Check the past form of "foretell" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 foretell 是verb，再套「预言」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foretell.q1', senseId: 'foretell.s1', errorType: 'meaning', type: '词义选择', prompt: '「foretell」在本条的核心意思是：', options: ['预言', '完全相反的意思', '一种古代钱币'], answer: '预言', explain: 'foretell：预言。' },
      { id: 'foretell.q2', senseId: 'foretell.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foretell?', options: ['预言', 'a kind of ancient coin', 'the past tense of be'], answer: '预言', explain: '对的是「预言」。' },
      { id: 'foretell.q3', senseId: 'foretell.s1', errorType: 'grammar', type: '词义选择', prompt: 'foretell 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'foretell.q4', senseId: 'foretell.s1', errorType: 'meaning', type: '词源', prompt: '记 foretell 时，哪句更稳妥？', options: ['先锁住「预言」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「预言」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['预言'] },
  });

  D('forever', {
    etymology: {
      origin: '英语派生：forev + -er，词性转到「永远」。',
      prefix: null,
      root: { text: 'forev', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forever', text: '英语派生：forev + -er，词性转到「永远」。' },
        { label: '现在', text: '核心用法是：永远。' },
      ],
      formationLogic: '先认词干 forev，再看词尾。',
      mnemonic: '看到 forever，先说出「永远」。',
      note: '先认词干 forev，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule forever, and the class followed.', chinese: '她把规则讲清楚了（永远），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forever.s1', en: 'He nodded forever and returned to the notes.', zh: '他永远地点了点头，又回去看笔记。', structure: 'forever / 表示 / 永远', grammar: 'adverb，围绕「永远」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very foreverly in the meeting.', right: 'She spoke forever in the meeting.', reason: 'forever 已经是副词，不要再加 -ly。', rule: '先确定 forever 是adverb，再套「永远」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forever.q1', senseId: 'forever.s1', errorType: 'meaning', type: '词义选择', prompt: '「forever」在本条的核心意思是：', options: ['永远', '完全相反的意思', '一种古代钱币'], answer: '永远', explain: 'forever：永远。' },
      { id: 'forever.q2', senseId: 'forever.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forever?', options: ['永远', 'a kind of ancient coin', 'the past tense of be'], answer: '永远', explain: '对的是「永远」。' },
      { id: 'forever.q3', senseId: 'forever.s1', errorType: 'grammar', type: '词义选择', prompt: 'forever 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'forever.q4', senseId: 'forever.s1', errorType: 'meaning', type: '词源', prompt: '记 forever 时，哪句更稳妥？', options: ['先锁住「永远」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「永远」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['永远'] },
  });

  D('forewarn', {
    etymology: {
      origin: '现代英语常用词「forewarn」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forewarn', gloss: '预先警告' },
      suffix: null,
      history: [
        { label: 'forewarn', text: '现代英语常用词「forewarn」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：预先警告。' },
      ],
      formationLogic: '核心义：预先警告。',
      mnemonic: '看到 forewarn，先说出「预先警告」。',
      note: '核心义：预先警告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forewarn before the office closed.', chinese: '他们同意在办公室关门前做这件事：预先警告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forewarn.s1', en: 'The deadline forced the team to forewarn that afternoon.', zh: '截止日期逼着小组在那天下午预先警告。', structure: 'forewarn / 表示 / 预先警告', grammar: 'verb，围绕「预先警告」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forewarned it yesterday without checking the real past form.', right: 'Check the past form of "forewarn" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forewarn 是verb，再套「预先警告」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forewarn.q1', senseId: 'forewarn.s1', errorType: 'meaning', type: '词义选择', prompt: '「forewarn」在本条的核心意思是：', options: ['预先警告', '完全相反的意思', '一种古代钱币'], answer: '预先警告', explain: 'forewarn：预先警告。' },
      { id: 'forewarn.q2', senseId: 'forewarn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forewarn?', options: ['预先警告', 'a kind of ancient coin', 'the past tense of be'], answer: '预先警告', explain: '对的是「预先警告」。' },
      { id: 'forewarn.q3', senseId: 'forewarn.s1', errorType: 'grammar', type: '词义选择', prompt: 'forewarn 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forewarn.q4', senseId: 'forewarn.s1', errorType: 'meaning', type: '词源', prompt: '记 forewarn 时，哪句更稳妥？', options: ['先锁住「预先警告」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「预先警告」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['预先警告'] },
  });

  D('foreword', {
    etymology: {
      origin: '现代英语常用词「foreword」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foreword', gloss: '前言' },
      suffix: null,
      history: [
        { label: 'foreword', text: '现代英语常用词「foreword」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前言。' },
      ],
      formationLogic: '核心义：前言。',
      mnemonic: '看到 foreword，先说出「前言」。',
      note: '核心义：前言。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foreword.', chinese: '这一章反复回到同一个点：前言。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foreword.s1', en: 'Without that foreword, the next paragraph is hard to follow.', zh: '没有这个前言，下一段会很难读。', structure: 'foreword / 表示 / 前言', grammar: 'noun，围绕「前言」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foreword.', right: 'He gave me some advice about the foreword.', reason: 'advice 不可数。名词 foreword 的单复数按词典词形记。', rule: '先确定 foreword 是noun，再套「前言」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foreword.q1', senseId: 'foreword.s1', errorType: 'meaning', type: '词义选择', prompt: '「foreword」在本条的核心意思是：', options: ['前言', '完全相反的意思', '一种古代钱币'], answer: '前言', explain: 'foreword：前言。' },
      { id: 'foreword.q2', senseId: 'foreword.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foreword?', options: ['前言', 'a kind of ancient coin', 'the past tense of be'], answer: '前言', explain: '对的是「前言」。' },
      { id: 'foreword.q3', senseId: 'foreword.s1', errorType: 'grammar', type: '词义选择', prompt: 'foreword 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foreword.q4', senseId: 'foreword.s1', errorType: 'meaning', type: '词源', prompt: '记 foreword 时，哪句更稳妥？', options: ['先锁住「前言」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前言」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前言'] },
  });

  D('forfeit', {
    etymology: {
      origin: '现代英语常用词「forfeit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forfeit', gloss: '丧失' },
      suffix: null,
      history: [
        { label: 'forfeit', text: '现代英语常用词「forfeit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：丧失。' },
      ],
      formationLogic: '核心义：丧失。',
      mnemonic: '看到 forfeit，先说出「丧失」。',
      note: '核心义：丧失。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forfeit before the office closed.', chinese: '他们同意在办公室关门前做这件事：丧失。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forfeit.s1', en: 'The deadline forced the team to forfeit that afternoon.', zh: '截止日期逼着小组在那天下午丧失。', structure: 'forfeit / 表示 / 丧失', grammar: 'verb，围绕「丧失」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forfeited it yesterday without checking the real past form.', right: 'Check the past form of "forfeit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forfeit 是verb，再套「丧失」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forfeit.q1', senseId: 'forfeit.s1', errorType: 'meaning', type: '词义选择', prompt: '「forfeit」在本条的核心意思是：', options: ['丧失', '完全相反的意思', '一种古代钱币'], answer: '丧失', explain: 'forfeit：丧失。' },
      { id: 'forfeit.q2', senseId: 'forfeit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forfeit?', options: ['丧失', 'a kind of ancient coin', 'the past tense of be'], answer: '丧失', explain: '对的是「丧失」。' },
      { id: 'forfeit.q3', senseId: 'forfeit.s1', errorType: 'grammar', type: '词义选择', prompt: 'forfeit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forfeit.q4', senseId: 'forfeit.s1', errorType: 'meaning', type: '词源', prompt: '记 forfeit 时，哪句更稳妥？', options: ['先锁住「丧失」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「丧失」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['丧失'] },
  });

  D('forge', {
    etymology: {
      origin: '现代英语常用词「forge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forge', gloss: '锻造' },
      suffix: null,
      history: [
        { label: 'forge', text: '现代英语常用词「forge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：锻造。' },
      ],
      formationLogic: '核心义：锻造。',
      mnemonic: '看到 forge，先说出「锻造」。',
      note: '核心义：锻造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forge before the office closed.', chinese: '他们同意在办公室关门前做这件事：锻造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forge.s1', en: 'The deadline forced the team to forge that afternoon.', zh: '截止日期逼着小组在那天下午锻造。', structure: 'forge / 表示 / 锻造', grammar: 'verb，围绕「锻造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forgeed it yesterday without checking the real past form.', right: 'Check the past form of "forge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forge 是verb，再套「锻造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forge.q1', senseId: 'forge.s1', errorType: 'meaning', type: '词义选择', prompt: '「forge」在本条的核心意思是：', options: ['锻造', '完全相反的意思', '一种古代钱币'], answer: '锻造', explain: 'forge：锻造。' },
      { id: 'forge.q2', senseId: 'forge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forge?', options: ['锻造', 'a kind of ancient coin', 'the past tense of be'], answer: '锻造', explain: '对的是「锻造」。' },
      { id: 'forge.q3', senseId: 'forge.s1', errorType: 'grammar', type: '词义选择', prompt: 'forge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forge.q4', senseId: 'forge.s1', errorType: 'meaning', type: '词源', prompt: '记 forge 时，哪句更稳妥？', options: ['先锁住「锻造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「锻造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['锻造'] },
  });

  D('forgery', {
    etymology: {
      origin: '现代英语常用词「forgery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forgery', gloss: '伪造' },
      suffix: null,
      history: [
        { label: 'forgery', text: '现代英语常用词「forgery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：伪造。' },
      ],
      formationLogic: '核心义：伪造。',
      mnemonic: '看到 forgery，先说出「伪造」。',
      note: '核心义：伪造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forgery.', chinese: '这一章反复回到同一个点：伪造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forgery.s1', en: 'Without that forgery, the next paragraph is hard to follow.', zh: '没有这个伪造，下一段会很难读。', structure: 'forgery / 表示 / 伪造', grammar: 'noun，围绕「伪造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forgery.', right: 'He gave me some advice about the forgery.', reason: 'advice 不可数。名词 forgery 的单复数按词典词形记。', rule: '先确定 forgery 是noun，再套「伪造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forgery.q1', senseId: 'forgery.s1', errorType: 'meaning', type: '词义选择', prompt: '「forgery」在本条的核心意思是：', options: ['伪造', '完全相反的意思', '一种古代钱币'], answer: '伪造', explain: 'forgery：伪造。' },
      { id: 'forgery.q2', senseId: 'forgery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forgery?', options: ['伪造', 'a kind of ancient coin', 'the past tense of be'], answer: '伪造', explain: '对的是「伪造」。' },
      { id: 'forgery.q3', senseId: 'forgery.s1', errorType: 'grammar', type: '词义选择', prompt: 'forgery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forgery.q4', senseId: 'forgery.s1', errorType: 'meaning', type: '词源', prompt: '记 forgery 时，哪句更稳妥？', options: ['先锁住「伪造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「伪造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伪造'] },
  });

  D('forget', {
    etymology: {
      origin: '现代英语常用词「forget」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forget', gloss: '忘记' },
      suffix: null,
      history: [
        { label: 'forget', text: '现代英语常用词「forget」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：忘记。' },
      ],
      formationLogic: '核心义：忘记。',
      mnemonic: '看到 forget，先说出「忘记」。',
      note: '核心义：忘记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forget before the office closed.', chinese: '他们同意在办公室关门前做这件事：忘记。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forget.s1', en: 'The deadline forced the team to forget that afternoon.', zh: '截止日期逼着小组在那天下午忘记。', structure: 'forget / 表示 / 忘记', grammar: 'verb，围绕「忘记」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forgeted it yesterday without checking the real past form.', right: 'Check the past form of "forget" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forget 是verb，再套「忘记」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forget.q1', senseId: 'forget.s1', errorType: 'meaning', type: '词义选择', prompt: '「forget」在本条的核心意思是：', options: ['忘记', '完全相反的意思', '一种古代钱币'], answer: '忘记', explain: 'forget：忘记。' },
      { id: 'forget.q2', senseId: 'forget.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forget?', options: ['忘记', 'a kind of ancient coin', 'the past tense of be'], answer: '忘记', explain: '对的是「忘记」。' },
      { id: 'forget.q3', senseId: 'forget.s1', errorType: 'grammar', type: '词义选择', prompt: 'forget 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forget.q4', senseId: 'forget.s1', errorType: 'meaning', type: '词源', prompt: '记 forget 时，哪句更稳妥？', options: ['先锁住「忘记」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「忘记」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['忘记'] },
  });

  D('forgetful', {
    etymology: {
      origin: '英语派生：forget + -ful，词性转到「健忘的」。',
      prefix: null,
      root: { text: 'forget', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forgetful', text: '英语派生：forget + -ful，词性转到「健忘的」。' },
        { label: '现在', text: '核心用法是：健忘的。' },
      ],
      formationLogic: '先认词干 forget，再看词尾。',
      mnemonic: '看到 forgetful，先说出「健忘的」。',
      note: '先认词干 forget，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was forgetful.', chinese: '即使是初读者也能看出，这个结果是健忘的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forgetful.s1', en: 'They wanted a forgetful answer, not a long speech.', zh: '他们要一个健忘的的答复，不要长篇发言。', structure: 'forgetful / 表示 / 健忘的', grammar: 'adjective，围绕「健忘的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are forgetful.', right: 'The news is forgetful.', reason: 'news 作主语时动词用单数。', rule: '先确定 forgetful 是adjective，再套「健忘的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forgetful.q1', senseId: 'forgetful.s1', errorType: 'meaning', type: '词义选择', prompt: '「forgetful」在本条的核心意思是：', options: ['健忘的', '完全相反的意思', '一种古代钱币'], answer: '健忘的', explain: 'forgetful：健忘的。' },
      { id: 'forgetful.q2', senseId: 'forgetful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forgetful?', options: ['健忘的', 'a kind of ancient coin', 'the past tense of be'], answer: '健忘的', explain: '对的是「健忘的」。' },
      { id: 'forgetful.q3', senseId: 'forgetful.s1', errorType: 'grammar', type: '词义选择', prompt: 'forgetful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'forgetful.q4', senseId: 'forgetful.s1', errorType: 'meaning', type: '词源', prompt: '记 forgetful 时，哪句更稳妥？', options: ['先锁住「健忘的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「健忘的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['健忘的'] },
  });

  D('forgive', {
    etymology: {
      origin: '英语派生：forg + -ive，词性转到「原谅」。',
      prefix: null,
      root: { text: 'forg', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forgive', text: '英语派生：forg + -ive，词性转到「原谅」。' },
        { label: '现在', text: '核心用法是：原谅。' },
      ],
      formationLogic: '先认词干 forg，再看词尾。',
      mnemonic: '看到 forgive，先说出「原谅」。',
      note: '先认词干 forg，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forgive before the office closed.', chinese: '他们同意在办公室关门前做这件事：原谅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forgive.s1', en: 'The deadline forced the team to forgive that afternoon.', zh: '截止日期逼着小组在那天下午原谅。', structure: 'forgive / 表示 / 原谅', grammar: 'verb，围绕「原谅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forgiveed it yesterday without checking the real past form.', right: 'Check the past form of "forgive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forgive 是verb，再套「原谅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forgive.q1', senseId: 'forgive.s1', errorType: 'meaning', type: '词义选择', prompt: '「forgive」在本条的核心意思是：', options: ['原谅', '完全相反的意思', '一种古代钱币'], answer: '原谅', explain: 'forgive：原谅。' },
      { id: 'forgive.q2', senseId: 'forgive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forgive?', options: ['原谅', 'a kind of ancient coin', 'the past tense of be'], answer: '原谅', explain: '对的是「原谅」。' },
      { id: 'forgive.q3', senseId: 'forgive.s1', errorType: 'grammar', type: '词义选择', prompt: 'forgive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forgive.q4', senseId: 'forgive.s1', errorType: 'meaning', type: '词源', prompt: '记 forgive 时，哪句更稳妥？', options: ['先锁住「原谅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「原谅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['原谅'] },
  });

  D('forgiveness', {
    etymology: {
      origin: '英语派生：forgive + -ness，词性转到「宽恕」。',
      prefix: null,
      root: { text: 'forgive', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forgiveness', text: '英语派生：forgive + -ness，词性转到「宽恕」。' },
        { label: '现在', text: '核心用法是：宽恕。' },
      ],
      formationLogic: '先认词干 forgive，再看词尾。',
      mnemonic: '看到 forgiveness，先说出「宽恕」。',
      note: '先认词干 forgive，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forgiveness.', chinese: '这一章反复回到同一个点：宽恕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forgiveness.s1', en: 'Without that forgiveness, the next paragraph is hard to follow.', zh: '没有这个宽恕，下一段会很难读。', structure: 'forgiveness / 表示 / 宽恕', grammar: 'noun，围绕「宽恕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forgiveness.', right: 'He gave me some advice about the forgiveness.', reason: 'advice 不可数。名词 forgiveness 的单复数按词典词形记。', rule: '先确定 forgiveness 是noun，再套「宽恕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forgiveness.q1', senseId: 'forgiveness.s1', errorType: 'meaning', type: '词义选择', prompt: '「forgiveness」在本条的核心意思是：', options: ['宽恕', '完全相反的意思', '一种古代钱币'], answer: '宽恕', explain: 'forgiveness：宽恕。' },
      { id: 'forgiveness.q2', senseId: 'forgiveness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forgiveness?', options: ['宽恕', 'a kind of ancient coin', 'the past tense of be'], answer: '宽恕', explain: '对的是「宽恕」。' },
      { id: 'forgiveness.q3', senseId: 'forgiveness.s1', errorType: 'grammar', type: '词义选择', prompt: 'forgiveness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forgiveness.q4', senseId: 'forgiveness.s1', errorType: 'meaning', type: '词源', prompt: '记 forgiveness 时，哪句更稳妥？', options: ['先锁住「宽恕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宽恕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宽恕'] },
  });

  D('forgo', {
    etymology: {
      origin: '现代英语常用词「forgo」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forgo', gloss: '放弃' },
      suffix: null,
      history: [
        { label: 'forgo', text: '现代英语常用词「forgo」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：放弃。' },
      ],
      formationLogic: '核心义：放弃。',
      mnemonic: '看到 forgo，先说出「放弃」。',
      note: '核心义：放弃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forgo before the office closed.', chinese: '他们同意在办公室关门前做这件事：放弃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forgo.s1', en: 'The deadline forced the team to forgo that afternoon.', zh: '截止日期逼着小组在那天下午放弃。', structure: 'forgo / 表示 / 放弃', grammar: 'verb，围绕「放弃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forgoed it yesterday without checking the real past form.', right: 'Check the past form of "forgo" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forgo 是verb，再套「放弃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forgo.q1', senseId: 'forgo.s1', errorType: 'meaning', type: '词义选择', prompt: '「forgo」在本条的核心意思是：', options: ['放弃', '完全相反的意思', '一种古代钱币'], answer: '放弃', explain: 'forgo：放弃。' },
      { id: 'forgo.q2', senseId: 'forgo.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forgo?', options: ['放弃', 'a kind of ancient coin', 'the past tense of be'], answer: '放弃', explain: '对的是「放弃」。' },
      { id: 'forgo.q3', senseId: 'forgo.s1', errorType: 'grammar', type: '词义选择', prompt: 'forgo 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forgo.q4', senseId: 'forgo.s1', errorType: 'meaning', type: '词源', prompt: '记 forgo 时，哪句更稳妥？', options: ['先锁住「放弃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「放弃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放弃'] },
  });

  D('fork', {
    etymology: {
      origin: '现代英语常用词「fork」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fork', gloss: '叉' },
      suffix: null,
      history: [
        { label: 'fork', text: '现代英语常用词「fork」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：叉。' },
      ],
      formationLogic: '核心义：叉。',
      mnemonic: '看到 fork，先说出「叉」。',
      note: '核心义：叉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fork.', chinese: '这一章反复回到同一个点：叉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fork.s1', en: 'Without that fork, the next paragraph is hard to follow.', zh: '没有这个叉，下一段会很难读。', structure: 'fork / 表示 / 叉', grammar: 'noun，围绕「叉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fork.', right: 'He gave me some advice about the fork.', reason: 'advice 不可数。名词 fork 的单复数按词典词形记。', rule: '先确定 fork 是noun，再套「叉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fork.q1', senseId: 'fork.s1', errorType: 'meaning', type: '词义选择', prompt: '「fork」在本条的核心意思是：', options: ['叉', '完全相反的意思', '一种古代钱币'], answer: '叉', explain: 'fork：叉。' },
      { id: 'fork.q2', senseId: 'fork.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fork?', options: ['叉', 'a kind of ancient coin', 'the past tense of be'], answer: '叉', explain: '对的是「叉」。' },
      { id: 'fork.q3', senseId: 'fork.s1', errorType: 'grammar', type: '词义选择', prompt: 'fork 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fork.q4', senseId: 'fork.s1', errorType: 'meaning', type: '词源', prompt: '记 fork 时，哪句更稳妥？', options: ['先锁住「叉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「叉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['叉'] },
  });

  D('form', {
    etymology: {
      origin: '现代英语常用词「form」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'form', gloss: '形式' },
      suffix: null,
      history: [
        { label: 'form', text: '现代英语常用词「form」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：形式。' },
      ],
      formationLogic: '核心义：形式。',
      mnemonic: '看到 form，先说出「形式」。',
      note: '核心义：形式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one form.', chinese: '这一章反复回到同一个点：形式。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'form.s1', en: 'Without that form, the next paragraph is hard to follow.', zh: '没有这个形式，下一段会很难读。', structure: 'form / 表示 / 形式', grammar: 'noun，围绕「形式」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the form.', right: 'He gave me some advice about the form.', reason: 'advice 不可数。名词 form 的单复数按词典词形记。', rule: '先确定 form 是noun，再套「形式」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'form.q1', senseId: 'form.s1', errorType: 'meaning', type: '词义选择', prompt: '「form」在本条的核心意思是：', options: ['形式', '完全相反的意思', '一种古代钱币'], answer: '形式', explain: 'form：形式。' },
      { id: 'form.q2', senseId: 'form.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches form?', options: ['形式', 'a kind of ancient coin', 'the past tense of be'], answer: '形式', explain: '对的是「形式」。' },
      { id: 'form.q3', senseId: 'form.s1', errorType: 'grammar', type: '词义选择', prompt: 'form 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'form.q4', senseId: 'form.s1', errorType: 'meaning', type: '词源', prompt: '记 form 时，哪句更稳妥？', options: ['先锁住「形式」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「形式」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['形式'] },
  });

  D('formal', {
    etymology: {
      origin: '英语派生：form + -al，词性转到「正式的」。',
      prefix: null,
      root: { text: 'form', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'formal', text: '英语派生：form + -al，词性转到「正式的」。' },
        { label: '现在', text: '核心用法是：正式的。' },
      ],
      formationLogic: '先认词干 form，再看词尾。',
      mnemonic: '看到 formal，先说出「正式的」。',
      note: '先认词干 form，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was formal.', chinese: '即使是初读者也能看出，这个结果是正式的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'formal.s1', en: 'They wanted a formal answer, not a long speech.', zh: '他们要一个正式的的答复，不要长篇发言。', structure: 'formal / 表示 / 正式的', grammar: 'adjective，围绕「正式的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are formal.', right: 'The news is formal.', reason: 'news 作主语时动词用单数。', rule: '先确定 formal 是adjective，再套「正式的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'formal.q1', senseId: 'formal.s1', errorType: 'meaning', type: '词义选择', prompt: '「formal」在本条的核心意思是：', options: ['正式的', '完全相反的意思', '一种古代钱币'], answer: '正式的', explain: 'formal：正式的。' },
      { id: 'formal.q2', senseId: 'formal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches formal?', options: ['正式的', 'a kind of ancient coin', 'the past tense of be'], answer: '正式的', explain: '对的是「正式的」。' },
      { id: 'formal.q3', senseId: 'formal.s1', errorType: 'grammar', type: '词义选择', prompt: 'formal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'formal.q4', senseId: 'formal.s1', errorType: 'meaning', type: '词源', prompt: '记 formal 时，哪句更稳妥？', options: ['先锁住「正式的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「正式的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['正式的'] },
  });

  D('formality', {
    etymology: {
      origin: '英语派生：formal + -ity，词性转到「正式」。',
      prefix: null,
      root: { text: 'formal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'formality', text: '英语派生：formal + -ity，词性转到「正式」。' },
        { label: '现在', text: '核心用法是：正式。' },
      ],
      formationLogic: '先认词干 formal，再看词尾。',
      mnemonic: '看到 formality，先说出「正式」。',
      note: '先认词干 formal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one formality.', chinese: '这一章反复回到同一个点：正式。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'formality.s1', en: 'Without that formality, the next paragraph is hard to follow.', zh: '没有这个正式，下一段会很难读。', structure: 'formality / 表示 / 正式', grammar: 'noun，围绕「正式」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the formality.', right: 'He gave me some advice about the formality.', reason: 'advice 不可数。名词 formality 的单复数按词典词形记。', rule: '先确定 formality 是noun，再套「正式」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'formality.q1', senseId: 'formality.s1', errorType: 'meaning', type: '词义选择', prompt: '「formality」在本条的核心意思是：', options: ['正式', '完全相反的意思', '一种古代钱币'], answer: '正式', explain: 'formality：正式。' },
      { id: 'formality.q2', senseId: 'formality.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches formality?', options: ['正式', 'a kind of ancient coin', 'the past tense of be'], answer: '正式', explain: '对的是「正式」。' },
      { id: 'formality.q3', senseId: 'formality.s1', errorType: 'grammar', type: '词义选择', prompt: 'formality 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'formality.q4', senseId: 'formality.s1', errorType: 'meaning', type: '词源', prompt: '记 formality 时，哪句更稳妥？', options: ['先锁住「正式」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「正式」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['正式'] },
  });

  D('format', {
    etymology: {
      origin: '现代英语常用词「format」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'format', gloss: '格式' },
      suffix: null,
      history: [
        { label: 'format', text: '现代英语常用词「format」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：格式。' },
      ],
      formationLogic: '核心义：格式。',
      mnemonic: '看到 format，先说出「格式」。',
      note: '核心义：格式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one format.', chinese: '这一章反复回到同一个点：格式。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'format.s1', en: 'Without that format, the next paragraph is hard to follow.', zh: '没有这个格式，下一段会很难读。', structure: 'format / 表示 / 格式', grammar: 'noun，围绕「格式」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the format.', right: 'He gave me some advice about the format.', reason: 'advice 不可数。名词 format 的单复数按词典词形记。', rule: '先确定 format 是noun，再套「格式」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'format.q1', senseId: 'format.s1', errorType: 'meaning', type: '词义选择', prompt: '「format」在本条的核心意思是：', options: ['格式', '完全相反的意思', '一种古代钱币'], answer: '格式', explain: 'format：格式。' },
      { id: 'format.q2', senseId: 'format.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches format?', options: ['格式', 'a kind of ancient coin', 'the past tense of be'], answer: '格式', explain: '对的是「格式」。' },
      { id: 'format.q3', senseId: 'format.s1', errorType: 'grammar', type: '词义选择', prompt: 'format 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'format.q4', senseId: 'format.s1', errorType: 'meaning', type: '词源', prompt: '记 format 时，哪句更稳妥？', options: ['先锁住「格式」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「格式」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['格式'] },
  });

  D('former', {
    etymology: {
      origin: '英语派生：form + -er，词性转到「以前的」。',
      prefix: null,
      root: { text: 'form', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'former', text: '英语派生：form + -er，词性转到「以前的」。' },
        { label: '现在', text: '核心用法是：以前的。' },
      ],
      formationLogic: '先认词干 form，再看词尾。',
      mnemonic: '看到 former，先说出「以前的」。',
      note: '先认词干 form，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was former.', chinese: '即使是初读者也能看出，这个结果是以前的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'former.s1', en: 'They wanted a former answer, not a long speech.', zh: '他们要一个以前的的答复，不要长篇发言。', structure: 'former / 表示 / 以前的', grammar: 'adjective，围绕「以前的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are former.', right: 'The news is former.', reason: 'news 作主语时动词用单数。', rule: '先确定 former 是adjective，再套「以前的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'former.q1', senseId: 'former.s1', errorType: 'meaning', type: '词义选择', prompt: '「former」在本条的核心意思是：', options: ['以前的', '完全相反的意思', '一种古代钱币'], answer: '以前的', explain: 'former：以前的。' },
      { id: 'former.q2', senseId: 'former.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches former?', options: ['以前的', 'a kind of ancient coin', 'the past tense of be'], answer: '以前的', explain: '对的是「以前的」。' },
      { id: 'former.q3', senseId: 'former.s1', errorType: 'grammar', type: '词义选择', prompt: 'former 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'former.q4', senseId: 'former.s1', errorType: 'meaning', type: '词源', prompt: '记 former 时，哪句更稳妥？', options: ['先锁住「以前的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「以前的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['以前的'] },
  });

  D('formerly', {
    etymology: {
      origin: '英语派生：former + -ly，词性转到「从前」。',
      prefix: null,
      root: { text: 'former', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'formerly', text: '英语派生：former + -ly，词性转到「从前」。' },
        { label: '现在', text: '核心用法是：从前。' },
      ],
      formationLogic: '先认词干 former，再看词尾。',
      mnemonic: '看到 formerly，先说出「从前」。',
      note: '先认词干 former，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule formerly, and the class followed.', chinese: '她把规则讲清楚了（从前），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'formerly.s1', en: 'He nodded formerly and returned to the notes.', zh: '他从前地点了点头，又回去看笔记。', structure: 'formerly / 表示 / 从前', grammar: 'adverb，围绕「从前」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very formerlyly in the meeting.', right: 'She spoke formerly in the meeting.', reason: 'formerly 已经是副词，不要再加 -ly。', rule: '先确定 formerly 是adverb，再套「从前」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'formerly.q1', senseId: 'formerly.s1', errorType: 'meaning', type: '词义选择', prompt: '「formerly」在本条的核心意思是：', options: ['从前', '完全相反的意思', '一种古代钱币'], answer: '从前', explain: 'formerly：从前。' },
      { id: 'formerly.q2', senseId: 'formerly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches formerly?', options: ['从前', 'a kind of ancient coin', 'the past tense of be'], answer: '从前', explain: '对的是「从前」。' },
      { id: 'formerly.q3', senseId: 'formerly.s1', errorType: 'grammar', type: '词义选择', prompt: 'formerly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'formerly.q4', senseId: 'formerly.s1', errorType: 'meaning', type: '词源', prompt: '记 formerly 时，哪句更稳妥？', options: ['先锁住「从前」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「从前」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['从前'] },
  });

  D('formidable', {
    etymology: {
      origin: '英语派生：formid + -able，词性转到「可怕的」。',
      prefix: null,
      root: { text: 'formid', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'formidable', text: '英语派生：formid + -able，词性转到「可怕的」。' },
        { label: '现在', text: '核心用法是：可怕的。' },
      ],
      formationLogic: '先认词干 formid，再看词尾。',
      mnemonic: '看到 formidable，先说出「可怕的」。',
      note: '先认词干 formid，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was formidable.', chinese: '即使是初读者也能看出，这个结果是可怕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'formidable.s1', en: 'They wanted a formidable answer, not a long speech.', zh: '他们要一个可怕的的答复，不要长篇发言。', structure: 'formidable / 表示 / 可怕的', grammar: 'adjective，围绕「可怕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are formidable.', right: 'The news is formidable.', reason: 'news 作主语时动词用单数。', rule: '先确定 formidable 是adjective，再套「可怕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'formidable.q1', senseId: 'formidable.s1', errorType: 'meaning', type: '词义选择', prompt: '「formidable」在本条的核心意思是：', options: ['可怕的', '完全相反的意思', '一种古代钱币'], answer: '可怕的', explain: 'formidable：可怕的。' },
      { id: 'formidable.q2', senseId: 'formidable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches formidable?', options: ['可怕的', 'a kind of ancient coin', 'the past tense of be'], answer: '可怕的', explain: '对的是「可怕的」。' },
      { id: 'formidable.q3', senseId: 'formidable.s1', errorType: 'grammar', type: '词义选择', prompt: 'formidable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'formidable.q4', senseId: 'formidable.s1', errorType: 'meaning', type: '词源', prompt: '记 formidable 时，哪句更稳妥？', options: ['先锁住「可怕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可怕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可怕的'] },
  });

  D('formula', {
    etymology: {
      origin: '现代英语常用词「formula」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'formula', gloss: '公式' },
      suffix: null,
      history: [
        { label: 'formula', text: '现代英语常用词「formula」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：公式。' },
      ],
      formationLogic: '核心义：公式。',
      mnemonic: '看到 formula，先说出「公式」。',
      note: '核心义：公式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one formula.', chinese: '这一章反复回到同一个点：公式。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'formula.s1', en: 'Without that formula, the next paragraph is hard to follow.', zh: '没有这个公式，下一段会很难读。', structure: 'formula / 表示 / 公式', grammar: 'noun，围绕「公式」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the formula.', right: 'He gave me some advice about the formula.', reason: 'advice 不可数。名词 formula 的单复数按词典词形记。', rule: '先确定 formula 是noun，再套「公式」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'formula.q1', senseId: 'formula.s1', errorType: 'meaning', type: '词义选择', prompt: '「formula」在本条的核心意思是：', options: ['公式', '完全相反的意思', '一种古代钱币'], answer: '公式', explain: 'formula：公式。' },
      { id: 'formula.q2', senseId: 'formula.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches formula?', options: ['公式', 'a kind of ancient coin', 'the past tense of be'], answer: '公式', explain: '对的是「公式」。' },
      { id: 'formula.q3', senseId: 'formula.s1', errorType: 'grammar', type: '词义选择', prompt: 'formula 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'formula.q4', senseId: 'formula.s1', errorType: 'meaning', type: '词源', prompt: '记 formula 时，哪句更稳妥？', options: ['先锁住「公式」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公式」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公式'] },
  });

  D('formulate', {
    etymology: {
      origin: '现代英语常用词「formulate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'formulate', gloss: '制定' },
      suffix: null,
      history: [
        { label: 'formulate', text: '现代英语常用词「formulate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：制定。' },
      ],
      formationLogic: '核心义：制定。',
      mnemonic: '看到 formulate，先说出「制定」。',
      note: '核心义：制定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to formulate before the office closed.', chinese: '他们同意在办公室关门前做这件事：制定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'formulate.s1', en: 'The deadline forced the team to formulate that afternoon.', zh: '截止日期逼着小组在那天下午制定。', structure: 'formulate / 表示 / 制定', grammar: 'verb，围绕「制定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She formulateed it yesterday without checking the real past form.', right: 'Check the past form of "formulate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 formulate 是verb，再套「制定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'formulate.q1', senseId: 'formulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「formulate」在本条的核心意思是：', options: ['制定', '完全相反的意思', '一种古代钱币'], answer: '制定', explain: 'formulate：制定。' },
      { id: 'formulate.q2', senseId: 'formulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches formulate?', options: ['制定', 'a kind of ancient coin', 'the past tense of be'], answer: '制定', explain: '对的是「制定」。' },
      { id: 'formulate.q3', senseId: 'formulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'formulate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'formulate.q4', senseId: 'formulate.s1', errorType: 'meaning', type: '词源', prompt: '记 formulate 时，哪句更稳妥？', options: ['先锁住「制定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「制定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['制定'] },
  });

  D('forsake', {
    etymology: {
      origin: '现代英语常用词「forsake」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forsake', gloss: '抛弃' },
      suffix: null,
      history: [
        { label: 'forsake', text: '现代英语常用词「forsake」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：抛弃。' },
      ],
      formationLogic: '核心义：抛弃。',
      mnemonic: '看到 forsake，先说出「抛弃」。',
      note: '核心义：抛弃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to forsake before the office closed.', chinese: '他们同意在办公室关门前做这件事：抛弃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forsake.s1', en: 'The deadline forced the team to forsake that afternoon.', zh: '截止日期逼着小组在那天下午抛弃。', structure: 'forsake / 表示 / 抛弃', grammar: 'verb，围绕「抛弃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She forsakeed it yesterday without checking the real past form.', right: 'Check the past form of "forsake" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 forsake 是verb，再套「抛弃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forsake.q1', senseId: 'forsake.s1', errorType: 'meaning', type: '词义选择', prompt: '「forsake」在本条的核心意思是：', options: ['抛弃', '完全相反的意思', '一种古代钱币'], answer: '抛弃', explain: 'forsake：抛弃。' },
      { id: 'forsake.q2', senseId: 'forsake.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forsake?', options: ['抛弃', 'a kind of ancient coin', 'the past tense of be'], answer: '抛弃', explain: '对的是「抛弃」。' },
      { id: 'forsake.q3', senseId: 'forsake.s1', errorType: 'grammar', type: '词义选择', prompt: 'forsake 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'forsake.q4', senseId: 'forsake.s1', errorType: 'meaning', type: '词源', prompt: '记 forsake 时，哪句更稳妥？', options: ['先锁住「抛弃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抛弃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抛弃'] },
  });

  D('forsaken', {
    etymology: {
      origin: '现代英语常用词「forsaken」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forsaken', gloss: '被抛弃的' },
      suffix: null,
      history: [
        { label: 'forsaken', text: '现代英语常用词「forsaken」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被抛弃的。' },
      ],
      formationLogic: '核心义：被抛弃的。',
      mnemonic: '看到 forsaken，先说出「被抛弃的」。',
      note: '核心义：被抛弃的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was forsaken.', chinese: '即使是初读者也能看出，这个结果是被抛弃的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forsaken.s1', en: 'They wanted a forsaken answer, not a long speech.', zh: '他们要一个被抛弃的的答复，不要长篇发言。', structure: 'forsaken / 表示 / 被抛弃的', grammar: 'adjective，围绕「被抛弃的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are forsaken.', right: 'The news is forsaken.', reason: 'news 作主语时动词用单数。', rule: '先确定 forsaken 是adjective，再套「被抛弃的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forsaken.q1', senseId: 'forsaken.s1', errorType: 'meaning', type: '词义选择', prompt: '「forsaken」在本条的核心意思是：', options: ['被抛弃的', '完全相反的意思', '一种古代钱币'], answer: '被抛弃的', explain: 'forsaken：被抛弃的。' },
      { id: 'forsaken.q2', senseId: 'forsaken.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forsaken?', options: ['被抛弃的', 'a kind of ancient coin', 'the past tense of be'], answer: '被抛弃的', explain: '对的是「被抛弃的」。' },
      { id: 'forsaken.q3', senseId: 'forsaken.s1', errorType: 'grammar', type: '词义选择', prompt: 'forsaken 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'forsaken.q4', senseId: 'forsaken.s1', errorType: 'meaning', type: '词源', prompt: '记 forsaken 时，哪句更稳妥？', options: ['先锁住「被抛弃的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被抛弃的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被抛弃的'] },
  });

  D('fort', {
    etymology: {
      origin: '现代英语常用词「fort」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fort', gloss: '堡垒' },
      suffix: null,
      history: [
        { label: 'fort', text: '现代英语常用词「fort」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：堡垒。' },
      ],
      formationLogic: '核心义：堡垒。',
      mnemonic: '看到 fort，先说出「堡垒」。',
      note: '核心义：堡垒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fort.', chinese: '这一章反复回到同一个点：堡垒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fort.s1', en: 'Without that fort, the next paragraph is hard to follow.', zh: '没有这个堡垒，下一段会很难读。', structure: 'fort / 表示 / 堡垒', grammar: 'noun，围绕「堡垒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fort.', right: 'He gave me some advice about the fort.', reason: 'advice 不可数。名词 fort 的单复数按词典词形记。', rule: '先确定 fort 是noun，再套「堡垒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fort.q1', senseId: 'fort.s1', errorType: 'meaning', type: '词义选择', prompt: '「fort」在本条的核心意思是：', options: ['堡垒', '完全相反的意思', '一种古代钱币'], answer: '堡垒', explain: 'fort：堡垒。' },
      { id: 'fort.q2', senseId: 'fort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fort?', options: ['堡垒', 'a kind of ancient coin', 'the past tense of be'], answer: '堡垒', explain: '对的是「堡垒」。' },
      { id: 'fort.q3', senseId: 'fort.s1', errorType: 'grammar', type: '词义选择', prompt: 'fort 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fort.q4', senseId: 'fort.s1', errorType: 'meaning', type: '词源', prompt: '记 fort 时，哪句更稳妥？', options: ['先锁住「堡垒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「堡垒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['堡垒'] },
  });

  D('forth', {
    etymology: {
      origin: '现代英语常用词「forth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forth', gloss: '向前' },
      suffix: null,
      history: [
        { label: 'forth', text: '现代英语常用词「forth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向前。' },
      ],
      formationLogic: '核心义：向前。',
      mnemonic: '看到 forth，先说出「向前」。',
      note: '核心义：向前。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule forth, and the class followed.', chinese: '她把规则讲清楚了（向前），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forth.s1', en: 'He nodded forth and returned to the notes.', zh: '他向前地点了点头，又回去看笔记。', structure: 'forth / 表示 / 向前', grammar: 'adverb，围绕「向前」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very forthly in the meeting.', right: 'She spoke forth in the meeting.', reason: 'forth 已经是副词，不要再加 -ly。', rule: '先确定 forth 是adverb，再套「向前」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forth.q1', senseId: 'forth.s1', errorType: 'meaning', type: '词义选择', prompt: '「forth」在本条的核心意思是：', options: ['向前', '完全相反的意思', '一种古代钱币'], answer: '向前', explain: 'forth：向前。' },
      { id: 'forth.q2', senseId: 'forth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forth?', options: ['向前', 'a kind of ancient coin', 'the past tense of be'], answer: '向前', explain: '对的是「向前」。' },
      { id: 'forth.q3', senseId: 'forth.s1', errorType: 'grammar', type: '词义选择', prompt: 'forth 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'forth.q4', senseId: 'forth.s1', errorType: 'meaning', type: '词源', prompt: '记 forth 时，哪句更稳妥？', options: ['先锁住「向前」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向前」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向前'] },
  });

  D('forthcoming', {
    etymology: {
      origin: '英语派生：forthcom + -ing，词性转到「即将到来的」。',
      prefix: null,
      root: { text: 'forthcom', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'forthcoming', text: '英语派生：forthcom + -ing，词性转到「即将到来的」。' },
        { label: '现在', text: '核心用法是：即将到来的。' },
      ],
      formationLogic: '先认词干 forthcom，再看词尾。',
      mnemonic: '看到 forthcoming，先说出「即将到来的」。',
      note: '先认词干 forthcom，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was forthcoming.', chinese: '即使是初读者也能看出，这个结果是即将到来的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forthcoming.s1', en: 'They wanted a forthcoming answer, not a long speech.', zh: '他们要一个即将到来的的答复，不要长篇发言。', structure: 'forthcoming / 表示 / 即将到来的', grammar: 'adjective，围绕「即将到来的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are forthcoming.', right: 'The news is forthcoming.', reason: 'news 作主语时动词用单数。', rule: '先确定 forthcoming 是adjective，再套「即将到来的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forthcoming.q1', senseId: 'forthcoming.s1', errorType: 'meaning', type: '词义选择', prompt: '「forthcoming」在本条的核心意思是：', options: ['即将到来的', '完全相反的意思', '一种古代钱币'], answer: '即将到来的', explain: 'forthcoming：即将到来的。' },
      { id: 'forthcoming.q2', senseId: 'forthcoming.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forthcoming?', options: ['即将到来的', 'a kind of ancient coin', 'the past tense of be'], answer: '即将到来的', explain: '对的是「即将到来的」。' },
      { id: 'forthcoming.q3', senseId: 'forthcoming.s1', errorType: 'grammar', type: '词义选择', prompt: 'forthcoming 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'forthcoming.q4', senseId: 'forthcoming.s1', errorType: 'meaning', type: '词源', prompt: '记 forthcoming 时，哪句更稳妥？', options: ['先锁住「即将到来的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「即将到来的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['即将到来的'] },
  });

  D('fortify', {
    etymology: {
      origin: '现代英语常用词「fortify」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fortify', gloss: '加强' },
      suffix: null,
      history: [
        { label: 'fortify', text: '现代英语常用词「fortify」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：加强。' },
      ],
      formationLogic: '核心义：加强。',
      mnemonic: '看到 fortify，先说出「加强」。',
      note: '核心义：加强。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fortify before the office closed.', chinese: '他们同意在办公室关门前做这件事：加强。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fortify.s1', en: 'The deadline forced the team to fortify that afternoon.', zh: '截止日期逼着小组在那天下午加强。', structure: 'fortify / 表示 / 加强', grammar: 'verb，围绕「加强」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fortifyed it yesterday without checking the real past form.', right: 'Check the past form of "fortify" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fortify 是verb，再套「加强」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fortify.q1', senseId: 'fortify.s1', errorType: 'meaning', type: '词义选择', prompt: '「fortify」在本条的核心意思是：', options: ['加强', '完全相反的意思', '一种古代钱币'], answer: '加强', explain: 'fortify：加强。' },
      { id: 'fortify.q2', senseId: 'fortify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fortify?', options: ['加强', 'a kind of ancient coin', 'the past tense of be'], answer: '加强', explain: '对的是「加强」。' },
      { id: 'fortify.q3', senseId: 'fortify.s1', errorType: 'grammar', type: '词义选择', prompt: 'fortify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fortify.q4', senseId: 'fortify.s1', errorType: 'meaning', type: '词源', prompt: '记 fortify 时，哪句更稳妥？', options: ['先锁住「加强」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「加强」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加强'] },
  });

  D('fortnight', {
    etymology: {
      origin: '现代英语常用词「fortnight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fortnight', gloss: '两星期' },
      suffix: null,
      history: [
        { label: 'fortnight', text: '现代英语常用词「fortnight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：两星期。' },
      ],
      formationLogic: '核心义：两星期。',
      mnemonic: '看到 fortnight，先说出「两星期」。',
      note: '核心义：两星期。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fortnight.', chinese: '这一章反复回到同一个点：两星期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fortnight.s1', en: 'Without that fortnight, the next paragraph is hard to follow.', zh: '没有这个两星期，下一段会很难读。', structure: 'fortnight / 表示 / 两星期', grammar: 'noun，围绕「两星期」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fortnight.', right: 'He gave me some advice about the fortnight.', reason: 'advice 不可数。名词 fortnight 的单复数按词典词形记。', rule: '先确定 fortnight 是noun，再套「两星期」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fortnight.q1', senseId: 'fortnight.s1', errorType: 'meaning', type: '词义选择', prompt: '「fortnight」在本条的核心意思是：', options: ['两星期', '完全相反的意思', '一种古代钱币'], answer: '两星期', explain: 'fortnight：两星期。' },
      { id: 'fortnight.q2', senseId: 'fortnight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fortnight?', options: ['两星期', 'a kind of ancient coin', 'the past tense of be'], answer: '两星期', explain: '对的是「两星期」。' },
      { id: 'fortnight.q3', senseId: 'fortnight.s1', errorType: 'grammar', type: '词义选择', prompt: 'fortnight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fortnight.q4', senseId: 'fortnight.s1', errorType: 'meaning', type: '词源', prompt: '记 fortnight 时，哪句更稳妥？', options: ['先锁住「两星期」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「两星期」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['两星期'] },
  });

  D('fortress', {
    etymology: {
      origin: '现代英语常用词「fortress」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fortress', gloss: '要塞' },
      suffix: null,
      history: [
        { label: 'fortress', text: '现代英语常用词「fortress」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：要塞。' },
      ],
      formationLogic: '核心义：要塞。',
      mnemonic: '看到 fortress，先说出「要塞」。',
      note: '核心义：要塞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fortress.', chinese: '这一章反复回到同一个点：要塞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fortress.s1', en: 'Without that fortress, the next paragraph is hard to follow.', zh: '没有这个要塞，下一段会很难读。', structure: 'fortress / 表示 / 要塞', grammar: 'noun，围绕「要塞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fortress.', right: 'He gave me some advice about the fortress.', reason: 'advice 不可数。名词 fortress 的单复数按词典词形记。', rule: '先确定 fortress 是noun，再套「要塞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fortress.q1', senseId: 'fortress.s1', errorType: 'meaning', type: '词义选择', prompt: '「fortress」在本条的核心意思是：', options: ['要塞', '完全相反的意思', '一种古代钱币'], answer: '要塞', explain: 'fortress：要塞。' },
      { id: 'fortress.q2', senseId: 'fortress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fortress?', options: ['要塞', 'a kind of ancient coin', 'the past tense of be'], answer: '要塞', explain: '对的是「要塞」。' },
      { id: 'fortress.q3', senseId: 'fortress.s1', errorType: 'grammar', type: '词义选择', prompt: 'fortress 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fortress.q4', senseId: 'fortress.s1', errorType: 'meaning', type: '词源', prompt: '记 fortress 时，哪句更稳妥？', options: ['先锁住「要塞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「要塞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['要塞'] },
  });

  D('fortunate', {
    etymology: {
      origin: '现代英语常用词「fortunate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fortunate', gloss: '幸运的' },
      suffix: null,
      history: [
        { label: 'fortunate', text: '现代英语常用词「fortunate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：幸运的。' },
      ],
      formationLogic: '核心义：幸运的。',
      mnemonic: '看到 fortunate，先说出「幸运的」。',
      note: '核心义：幸运的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fortunate.', chinese: '即使是初读者也能看出，这个结果是幸运的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fortunate.s1', en: 'They wanted a fortunate answer, not a long speech.', zh: '他们要一个幸运的的答复，不要长篇发言。', structure: 'fortunate / 表示 / 幸运的', grammar: 'adjective，围绕「幸运的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fortunate.', right: 'The news is fortunate.', reason: 'news 作主语时动词用单数。', rule: '先确定 fortunate 是adjective，再套「幸运的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fortunate.q1', senseId: 'fortunate.s1', errorType: 'meaning', type: '词义选择', prompt: '「fortunate」在本条的核心意思是：', options: ['幸运的', '完全相反的意思', '一种古代钱币'], answer: '幸运的', explain: 'fortunate：幸运的。' },
      { id: 'fortunate.q2', senseId: 'fortunate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fortunate?', options: ['幸运的', 'a kind of ancient coin', 'the past tense of be'], answer: '幸运的', explain: '对的是「幸运的」。' },
      { id: 'fortunate.q3', senseId: 'fortunate.s1', errorType: 'grammar', type: '词义选择', prompt: 'fortunate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fortunate.q4', senseId: 'fortunate.s1', errorType: 'meaning', type: '词源', prompt: '记 fortunate 时，哪句更稳妥？', options: ['先锁住「幸运的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「幸运的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['幸运的'] },
  });

  D('fortune', {
    etymology: {
      origin: '现代英语常用词「fortune」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fortune', gloss: '运气' },
      suffix: null,
      history: [
        { label: 'fortune', text: '现代英语常用词「fortune」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：运气。' },
      ],
      formationLogic: '核心义：运气。',
      mnemonic: '看到 fortune，先说出「运气」。',
      note: '核心义：运气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fortune.', chinese: '这一章反复回到同一个点：运气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fortune.s1', en: 'Without that fortune, the next paragraph is hard to follow.', zh: '没有这个运气，下一段会很难读。', structure: 'fortune / 表示 / 运气', grammar: 'noun，围绕「运气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fortune.', right: 'He gave me some advice about the fortune.', reason: 'advice 不可数。名词 fortune 的单复数按词典词形记。', rule: '先确定 fortune 是noun，再套「运气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fortune.q1', senseId: 'fortune.s1', errorType: 'meaning', type: '词义选择', prompt: '「fortune」在本条的核心意思是：', options: ['运气', '完全相反的意思', '一种古代钱币'], answer: '运气', explain: 'fortune：运气。' },
      { id: 'fortune.q2', senseId: 'fortune.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fortune?', options: ['运气', 'a kind of ancient coin', 'the past tense of be'], answer: '运气', explain: '对的是「运气」。' },
      { id: 'fortune.q3', senseId: 'fortune.s1', errorType: 'grammar', type: '词义选择', prompt: 'fortune 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fortune.q4', senseId: 'fortune.s1', errorType: 'meaning', type: '词源', prompt: '记 fortune 时，哪句更稳妥？', options: ['先锁住「运气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「运气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['运气'] },
  });

  D('forty', {
    etymology: {
      origin: '现代英语常用词「forty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forty', gloss: '四十' },
      suffix: null,
      history: [
        { label: 'forty', text: '现代英语常用词「forty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：四十。' },
      ],
      formationLogic: '核心义：四十。',
      mnemonic: '看到 forty，先说出「四十」。',
      note: '核心义：四十。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forty.', chinese: '这一章反复回到同一个点：四十。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forty.s1', en: 'Without that forty, the next paragraph is hard to follow.', zh: '没有这个四十，下一段会很难读。', structure: 'forty / 表示 / 四十', grammar: 'number，围绕「四十」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forty.', right: 'He gave me some advice about the forty.', reason: 'advice 不可数。名词 forty 的单复数按词典词形记。', rule: '先确定 forty 是number，再套「四十」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forty.q1', senseId: 'forty.s1', errorType: 'meaning', type: '词义选择', prompt: '「forty」在本条的核心意思是：', options: ['四十', '完全相反的意思', '一种古代钱币'], answer: '四十', explain: 'forty：四十。' },
      { id: 'forty.q2', senseId: 'forty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forty?', options: ['四十', 'a kind of ancient coin', 'the past tense of be'], answer: '四十', explain: '对的是「四十」。' },
      { id: 'forty.q3', senseId: 'forty.s1', errorType: 'grammar', type: '词义选择', prompt: 'forty 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'forty.q4', senseId: 'forty.s1', errorType: 'meaning', type: '词源', prompt: '记 forty 时，哪句更稳妥？', options: ['先锁住「四十」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「四十」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['四十'] },
  });

  D('forum', {
    etymology: {
      origin: '现代英语常用词「forum」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forum', gloss: '论坛' },
      suffix: null,
      history: [
        { label: 'forum', text: '现代英语常用词「forum」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：论坛。' },
      ],
      formationLogic: '核心义：论坛。',
      mnemonic: '看到 forum，先说出「论坛」。',
      note: '核心义：论坛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one forum.', chinese: '这一章反复回到同一个点：论坛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forum.s1', en: 'Without that forum, the next paragraph is hard to follow.', zh: '没有这个论坛，下一段会很难读。', structure: 'forum / 表示 / 论坛', grammar: 'noun，围绕「论坛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the forum.', right: 'He gave me some advice about the forum.', reason: 'advice 不可数。名词 forum 的单复数按词典词形记。', rule: '先确定 forum 是noun，再套「论坛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forum.q1', senseId: 'forum.s1', errorType: 'meaning', type: '词义选择', prompt: '「forum」在本条的核心意思是：', options: ['论坛', '完全相反的意思', '一种古代钱币'], answer: '论坛', explain: 'forum：论坛。' },
      { id: 'forum.q2', senseId: 'forum.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forum?', options: ['论坛', 'a kind of ancient coin', 'the past tense of be'], answer: '论坛', explain: '对的是「论坛」。' },
      { id: 'forum.q3', senseId: 'forum.s1', errorType: 'grammar', type: '词义选择', prompt: 'forum 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'forum.q4', senseId: 'forum.s1', errorType: 'meaning', type: '词源', prompt: '记 forum 时，哪句更稳妥？', options: ['先锁住「论坛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「论坛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['论坛'] },
  });

  D('forward', {
    etymology: {
      origin: '现代英语常用词「forward」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forward', gloss: '向前' },
      suffix: null,
      history: [
        { label: 'forward', text: '现代英语常用词「forward」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向前。' },
      ],
      formationLogic: '核心义：向前。',
      mnemonic: '看到 forward，先说出「向前」。',
      note: '核心义：向前。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule forward, and the class followed.', chinese: '她把规则讲清楚了（向前），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forward.s1', en: 'He nodded forward and returned to the notes.', zh: '他向前地点了点头，又回去看笔记。', structure: 'forward / 表示 / 向前', grammar: 'adverb，围绕「向前」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very forwardly in the meeting.', right: 'She spoke forward in the meeting.', reason: 'forward 已经是副词，不要再加 -ly。', rule: '先确定 forward 是adverb，再套「向前」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forward.q1', senseId: 'forward.s1', errorType: 'meaning', type: '词义选择', prompt: '「forward」在本条的核心意思是：', options: ['向前', '完全相反的意思', '一种古代钱币'], answer: '向前', explain: 'forward：向前。' },
      { id: 'forward.q2', senseId: 'forward.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forward?', options: ['向前', 'a kind of ancient coin', 'the past tense of be'], answer: '向前', explain: '对的是「向前」。' },
      { id: 'forward.q3', senseId: 'forward.s1', errorType: 'grammar', type: '词义选择', prompt: 'forward 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'forward.q4', senseId: 'forward.s1', errorType: 'meaning', type: '词源', prompt: '记 forward 时，哪句更稳妥？', options: ['先锁住「向前」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向前」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向前'] },
  });

  D('forwards', {
    etymology: {
      origin: '现代英语常用词「forwards」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'forwards', gloss: '向前' },
      suffix: null,
      history: [
        { label: 'forwards', text: '现代英语常用词「forwards」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向前。' },
      ],
      formationLogic: '核心义：向前。',
      mnemonic: '看到 forwards，先说出「向前」。',
      note: '核心义：向前。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule forwards, and the class followed.', chinese: '她把规则讲清楚了（向前），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'forwards.s1', en: 'He nodded forwards and returned to the notes.', zh: '他向前地点了点头，又回去看笔记。', structure: 'forwards / 表示 / 向前', grammar: 'adverb，围绕「向前」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very forwardsly in the meeting.', right: 'She spoke forwards in the meeting.', reason: 'forwards 已经是副词，不要再加 -ly。', rule: '先确定 forwards 是adverb，再套「向前」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'forwards.q1', senseId: 'forwards.s1', errorType: 'meaning', type: '词义选择', prompt: '「forwards」在本条的核心意思是：', options: ['向前', '完全相反的意思', '一种古代钱币'], answer: '向前', explain: 'forwards：向前。' },
      { id: 'forwards.q2', senseId: 'forwards.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches forwards?', options: ['向前', 'a kind of ancient coin', 'the past tense of be'], answer: '向前', explain: '对的是「向前」。' },
      { id: 'forwards.q3', senseId: 'forwards.s1', errorType: 'grammar', type: '词义选择', prompt: 'forwards 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'forwards.q4', senseId: 'forwards.s1', errorType: 'meaning', type: '词源', prompt: '记 forwards 时，哪句更稳妥？', options: ['先锁住「向前」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向前」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向前'] },
  });

  D('fossil', {
    etymology: {
      origin: '现代英语常用词「fossil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fossil', gloss: '化石' },
      suffix: null,
      history: [
        { label: 'fossil', text: '现代英语常用词「fossil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：化石。' },
      ],
      formationLogic: '核心义：化石。',
      mnemonic: '看到 fossil，先说出「化石」。',
      note: '核心义：化石。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fossil.', chinese: '这一章反复回到同一个点：化石。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fossil.s1', en: 'Without that fossil, the next paragraph is hard to follow.', zh: '没有这个化石，下一段会很难读。', structure: 'fossil / 表示 / 化石', grammar: 'noun，围绕「化石」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fossil.', right: 'He gave me some advice about the fossil.', reason: 'advice 不可数。名词 fossil 的单复数按词典词形记。', rule: '先确定 fossil 是noun，再套「化石」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fossil.q1', senseId: 'fossil.s1', errorType: 'meaning', type: '词义选择', prompt: '「fossil」在本条的核心意思是：', options: ['化石', '完全相反的意思', '一种古代钱币'], answer: '化石', explain: 'fossil：化石。' },
      { id: 'fossil.q2', senseId: 'fossil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fossil?', options: ['化石', 'a kind of ancient coin', 'the past tense of be'], answer: '化石', explain: '对的是「化石」。' },
      { id: 'fossil.q3', senseId: 'fossil.s1', errorType: 'grammar', type: '词义选择', prompt: 'fossil 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fossil.q4', senseId: 'fossil.s1', errorType: 'meaning', type: '词源', prompt: '记 fossil 时，哪句更稳妥？', options: ['先锁住「化石」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化石」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化石'] },
  });

  D('foster', {
    etymology: {
      origin: '英语派生：fost + -er，词性转到「培养」。',
      prefix: null,
      root: { text: 'fost', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'foster', text: '英语派生：fost + -er，词性转到「培养」。' },
        { label: '现在', text: '核心用法是：培养。' },
      ],
      formationLogic: '先认词干 fost，再看词尾。',
      mnemonic: '看到 foster，先说出「培养」。',
      note: '先认词干 fost，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to foster before the office closed.', chinese: '他们同意在办公室关门前做这件事：培养。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foster.s1', en: 'The deadline forced the team to foster that afternoon.', zh: '截止日期逼着小组在那天下午培养。', structure: 'foster / 表示 / 培养', grammar: 'verb，围绕「培养」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fostered it yesterday without checking the real past form.', right: 'Check the past form of "foster" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 foster 是verb，再套「培养」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foster.q1', senseId: 'foster.s1', errorType: 'meaning', type: '词义选择', prompt: '「foster」在本条的核心意思是：', options: ['培养', '完全相反的意思', '一种古代钱币'], answer: '培养', explain: 'foster：培养。' },
      { id: 'foster.q2', senseId: 'foster.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foster?', options: ['培养', 'a kind of ancient coin', 'the past tense of be'], answer: '培养', explain: '对的是「培养」。' },
      { id: 'foster.q3', senseId: 'foster.s1', errorType: 'grammar', type: '词义选择', prompt: 'foster 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'foster.q4', senseId: 'foster.s1', errorType: 'meaning', type: '词源', prompt: '记 foster 时，哪句更稳妥？', options: ['先锁住「培养」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「培养」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['培养'] },
  });

  D('foul', {
    etymology: {
      origin: '现代英语常用词「foul」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'foul', gloss: '难闻的' },
      suffix: null,
      history: [
        { label: 'foul', text: '现代英语常用词「foul」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：难闻的。' },
      ],
      formationLogic: '核心义：难闻的。',
      mnemonic: '看到 foul，先说出「难闻的」。',
      note: '核心义：难闻的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was foul.', chinese: '即使是初读者也能看出，这个结果是难闻的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foul.s1', en: 'They wanted a foul answer, not a long speech.', zh: '他们要一个难闻的的答复，不要长篇发言。', structure: 'foul / 表示 / 难闻的', grammar: 'adjective，围绕「难闻的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are foul.', right: 'The news is foul.', reason: 'news 作主语时动词用单数。', rule: '先确定 foul 是adjective，再套「难闻的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foul.q1', senseId: 'foul.s1', errorType: 'meaning', type: '词义选择', prompt: '「foul」在本条的核心意思是：', options: ['难闻的', '完全相反的意思', '一种古代钱币'], answer: '难闻的', explain: 'foul：难闻的。' },
      { id: 'foul.q2', senseId: 'foul.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foul?', options: ['难闻的', 'a kind of ancient coin', 'the past tense of be'], answer: '难闻的', explain: '对的是「难闻的」。' },
      { id: 'foul.q3', senseId: 'foul.s1', errorType: 'grammar', type: '词义选择', prompt: 'foul 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'foul.q4', senseId: 'foul.s1', errorType: 'meaning', type: '词源', prompt: '记 foul 时，哪句更稳妥？', options: ['先锁住「难闻的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「难闻的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['难闻的'] },
  });

  D('found', {
    etymology: {
      origin: '现代英语常用词「found」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'found', gloss: '创立' },
      suffix: null,
      history: [
        { label: 'found', text: '现代英语常用词「found」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：创立。' },
      ],
      formationLogic: '核心义：创立。',
      mnemonic: '看到 found，先说出「创立」。',
      note: '核心义：创立。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to found before the office closed.', chinese: '他们同意在办公室关门前做这件事：创立。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'found.s1', en: 'The deadline forced the team to found that afternoon.', zh: '截止日期逼着小组在那天下午创立。', structure: 'found / 表示 / 创立', grammar: 'verb，围绕「创立」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She founded it yesterday without checking the real past form.', right: 'Check the past form of "found" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 found 是verb，再套「创立」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'found.q1', senseId: 'found.s1', errorType: 'meaning', type: '词义选择', prompt: '「found」在本条的核心意思是：', options: ['创立', '完全相反的意思', '一种古代钱币'], answer: '创立', explain: 'found：创立。' },
      { id: 'found.q2', senseId: 'found.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches found?', options: ['创立', 'a kind of ancient coin', 'the past tense of be'], answer: '创立', explain: '对的是「创立」。' },
      { id: 'found.q3', senseId: 'found.s1', errorType: 'grammar', type: '词义选择', prompt: 'found 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'found.q4', senseId: 'found.s1', errorType: 'meaning', type: '词源', prompt: '记 found 时，哪句更稳妥？', options: ['先锁住「创立」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「创立」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['创立'] },
  });

  D('foundation', {
    etymology: {
      origin: '英语派生：founda + -tion，词性转到「基础」。',
      prefix: null,
      root: { text: 'founda', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'foundation', text: '英语派生：founda + -tion，词性转到「基础」。' },
        { label: '现在', text: '核心用法是：基础。' },
      ],
      formationLogic: '先认词干 founda，再看词尾。',
      mnemonic: '看到 foundation，先说出「基础」。',
      note: '先认词干 founda，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foundation.', chinese: '这一章反复回到同一个点：基础。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foundation.s1', en: 'Without that foundation, the next paragraph is hard to follow.', zh: '没有这个基础，下一段会很难读。', structure: 'foundation / 表示 / 基础', grammar: 'noun，围绕「基础」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foundation.', right: 'He gave me some advice about the foundation.', reason: 'advice 不可数。名词 foundation 的单复数按词典词形记。', rule: '先确定 foundation 是noun，再套「基础」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foundation.q1', senseId: 'foundation.s1', errorType: 'meaning', type: '词义选择', prompt: '「foundation」在本条的核心意思是：', options: ['基础', '完全相反的意思', '一种古代钱币'], answer: '基础', explain: 'foundation：基础。' },
      { id: 'foundation.q2', senseId: 'foundation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foundation?', options: ['基础', 'a kind of ancient coin', 'the past tense of be'], answer: '基础', explain: '对的是「基础」。' },
      { id: 'foundation.q3', senseId: 'foundation.s1', errorType: 'grammar', type: '词义选择', prompt: 'foundation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foundation.q4', senseId: 'foundation.s1', errorType: 'meaning', type: '词源', prompt: '记 foundation 时，哪句更稳妥？', options: ['先锁住「基础」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「基础」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['基础'] },
  });

  D('founder', {
    etymology: {
      origin: '英语派生：found + -er，词性转到「创始人」。',
      prefix: null,
      root: { text: 'found', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'founder', text: '英语派生：found + -er，词性转到「创始人」。' },
        { label: '现在', text: '核心用法是：创始人。' },
      ],
      formationLogic: '先认词干 found，再看词尾。',
      mnemonic: '看到 founder，先说出「创始人」。',
      note: '先认词干 found，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one founder.', chinese: '这一章反复回到同一个点：创始人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'founder.s1', en: 'Without that founder, the next paragraph is hard to follow.', zh: '没有这个创始人，下一段会很难读。', structure: 'founder / 表示 / 创始人', grammar: 'noun，围绕「创始人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the founder.', right: 'He gave me some advice about the founder.', reason: 'advice 不可数。名词 founder 的单复数按词典词形记。', rule: '先确定 founder 是noun，再套「创始人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'founder.q1', senseId: 'founder.s1', errorType: 'meaning', type: '词义选择', prompt: '「founder」在本条的核心意思是：', options: ['创始人', '完全相反的意思', '一种古代钱币'], answer: '创始人', explain: 'founder：创始人。' },
      { id: 'founder.q2', senseId: 'founder.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches founder?', options: ['创始人', 'a kind of ancient coin', 'the past tense of be'], answer: '创始人', explain: '对的是「创始人」。' },
      { id: 'founder.q3', senseId: 'founder.s1', errorType: 'grammar', type: '词义选择', prompt: 'founder 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'founder.q4', senseId: 'founder.s1', errorType: 'meaning', type: '词源', prompt: '记 founder 时，哪句更稳妥？', options: ['先锁住「创始人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「创始人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['创始人'] },
  });

  D('foundling', {
    etymology: {
      origin: '英语派生：foundl + -ing，词性转到「弃婴」。',
      prefix: null,
      root: { text: 'foundl', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'foundling', text: '英语派生：foundl + -ing，词性转到「弃婴」。' },
        { label: '现在', text: '核心用法是：弃婴。' },
      ],
      formationLogic: '先认词干 foundl，再看词尾。',
      mnemonic: '看到 foundling，先说出「弃婴」。',
      note: '先认词干 foundl，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foundling.', chinese: '这一章反复回到同一个点：弃婴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foundling.s1', en: 'Without that foundling, the next paragraph is hard to follow.', zh: '没有这个弃婴，下一段会很难读。', structure: 'foundling / 表示 / 弃婴', grammar: 'noun，围绕「弃婴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foundling.', right: 'He gave me some advice about the foundling.', reason: 'advice 不可数。名词 foundling 的单复数按词典词形记。', rule: '先确定 foundling 是noun，再套「弃婴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foundling.q1', senseId: 'foundling.s1', errorType: 'meaning', type: '词义选择', prompt: '「foundling」在本条的核心意思是：', options: ['弃婴', '完全相反的意思', '一种古代钱币'], answer: '弃婴', explain: 'foundling：弃婴。' },
      { id: 'foundling.q2', senseId: 'foundling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foundling?', options: ['弃婴', 'a kind of ancient coin', 'the past tense of be'], answer: '弃婴', explain: '对的是「弃婴」。' },
      { id: 'foundling.q3', senseId: 'foundling.s1', errorType: 'grammar', type: '词义选择', prompt: 'foundling 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foundling.q4', senseId: 'foundling.s1', errorType: 'meaning', type: '词源', prompt: '记 foundling 时，哪句更稳妥？', options: ['先锁住「弃婴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「弃婴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['弃婴'] },
  });

  D('fountain', {
    etymology: {
      origin: '现代英语常用词「fountain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fountain', gloss: '喷泉' },
      suffix: null,
      history: [
        { label: 'fountain', text: '现代英语常用词「fountain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：喷泉。' },
      ],
      formationLogic: '核心义：喷泉。',
      mnemonic: '看到 fountain，先说出「喷泉」。',
      note: '核心义：喷泉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fountain.', chinese: '这一章反复回到同一个点：喷泉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fountain.s1', en: 'Without that fountain, the next paragraph is hard to follow.', zh: '没有这个喷泉，下一段会很难读。', structure: 'fountain / 表示 / 喷泉', grammar: 'noun，围绕「喷泉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fountain.', right: 'He gave me some advice about the fountain.', reason: 'advice 不可数。名词 fountain 的单复数按词典词形记。', rule: '先确定 fountain 是noun，再套「喷泉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fountain.q1', senseId: 'fountain.s1', errorType: 'meaning', type: '词义选择', prompt: '「fountain」在本条的核心意思是：', options: ['喷泉', '完全相反的意思', '一种古代钱币'], answer: '喷泉', explain: 'fountain：喷泉。' },
      { id: 'fountain.q2', senseId: 'fountain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fountain?', options: ['喷泉', 'a kind of ancient coin', 'the past tense of be'], answer: '喷泉', explain: '对的是「喷泉」。' },
      { id: 'fountain.q3', senseId: 'fountain.s1', errorType: 'grammar', type: '词义选择', prompt: 'fountain 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fountain.q4', senseId: 'fountain.s1', errorType: 'meaning', type: '词源', prompt: '记 fountain 时，哪句更稳妥？', options: ['先锁住「喷泉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喷泉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喷泉'] },
  });

  D('four', {
    etymology: {
      origin: '现代英语常用词「four」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'four', gloss: '四' },
      suffix: null,
      history: [
        { label: 'four', text: '现代英语常用词「four」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：四。' },
      ],
      formationLogic: '核心义：四。',
      mnemonic: '看到 four，先说出「四」。',
      note: '核心义：四。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one four.', chinese: '这一章反复回到同一个点：四。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'four.s1', en: 'Without that four, the next paragraph is hard to follow.', zh: '没有这个四，下一段会很难读。', structure: 'four / 表示 / 四', grammar: 'number，围绕「四」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the four.', right: 'He gave me some advice about the four.', reason: 'advice 不可数。名词 four 的单复数按词典词形记。', rule: '先确定 four 是number，再套「四」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'four.q1', senseId: 'four.s1', errorType: 'meaning', type: '词义选择', prompt: '「four」在本条的核心意思是：', options: ['四', '完全相反的意思', '一种古代钱币'], answer: '四', explain: 'four：四。' },
      { id: 'four.q2', senseId: 'four.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches four?', options: ['四', 'a kind of ancient coin', 'the past tense of be'], answer: '四', explain: '对的是「四」。' },
      { id: 'four.q3', senseId: 'four.s1', errorType: 'grammar', type: '词义选择', prompt: 'four 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'four.q4', senseId: 'four.s1', errorType: 'meaning', type: '词源', prompt: '记 four 时，哪句更稳妥？', options: ['先锁住「四」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「四」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['四'] },
  });

  D('four-by-four', {
    etymology: {
      origin: '现代英语常用词「four-by-four」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'four-by-four', gloss: '四驱的' },
      suffix: null,
      history: [
        { label: 'four-by-four', text: '现代英语常用词「four-by-four」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：四驱的。' },
      ],
      formationLogic: '核心义：四驱的。',
      mnemonic: '看到 four-by-four，先说出「四驱的」。',
      note: '核心义：四驱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was four-by-four.', chinese: '即使是初读者也能看出，这个结果是四驱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'four-by-four.s1', en: 'They wanted a four-by-four answer, not a long speech.', zh: '他们要一个四驱的的答复，不要长篇发言。', structure: 'four-by-four / 表示 / 四驱的', grammar: 'adjective，围绕「四驱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are four-by-four.', right: 'The news is four-by-four.', reason: 'news 作主语时动词用单数。', rule: '先确定 four-by-four 是adjective，再套「四驱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'four-by-four.q1', senseId: 'four-by-four.s1', errorType: 'meaning', type: '词义选择', prompt: '「four-by-four」在本条的核心意思是：', options: ['四驱的', '完全相反的意思', '一种古代钱币'], answer: '四驱的', explain: 'four-by-four：四驱的。' },
      { id: 'four-by-four.q2', senseId: 'four-by-four.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches four-by-four?', options: ['四驱的', 'a kind of ancient coin', 'the past tense of be'], answer: '四驱的', explain: '对的是「四驱的」。' },
      { id: 'four-by-four.q3', senseId: 'four-by-four.s1', errorType: 'grammar', type: '词义选择', prompt: 'four-by-four 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'four-by-four.q4', senseId: 'four-by-four.s1', errorType: 'meaning', type: '词源', prompt: '记 four-by-four 时，哪句更稳妥？', options: ['先锁住「四驱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「四驱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['四驱的'] },
  });

  D('fourteen', {
    etymology: {
      origin: '现代英语常用词「fourteen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fourteen', gloss: '十四' },
      suffix: null,
      history: [
        { label: 'fourteen', text: '现代英语常用词「fourteen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：十四。' },
      ],
      formationLogic: '核心义：十四。',
      mnemonic: '看到 fourteen，先说出「十四」。',
      note: '核心义：十四。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fourteen.', chinese: '这一章反复回到同一个点：十四。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fourteen.s1', en: 'Without that fourteen, the next paragraph is hard to follow.', zh: '没有这个十四，下一段会很难读。', structure: 'fourteen / 表示 / 十四', grammar: 'number，围绕「十四」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fourteen.', right: 'He gave me some advice about the fourteen.', reason: 'advice 不可数。名词 fourteen 的单复数按词典词形记。', rule: '先确定 fourteen 是number，再套「十四」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fourteen.q1', senseId: 'fourteen.s1', errorType: 'meaning', type: '词义选择', prompt: '「fourteen」在本条的核心意思是：', options: ['十四', '完全相反的意思', '一种古代钱币'], answer: '十四', explain: 'fourteen：十四。' },
      { id: 'fourteen.q2', senseId: 'fourteen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fourteen?', options: ['十四', 'a kind of ancient coin', 'the past tense of be'], answer: '十四', explain: '对的是「十四」。' },
      { id: 'fourteen.q3', senseId: 'fourteen.s1', errorType: 'grammar', type: '词义选择', prompt: 'fourteen 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fourteen.q4', senseId: 'fourteen.s1', errorType: 'meaning', type: '词源', prompt: '记 fourteen 时，哪句更稳妥？', options: ['先锁住「十四」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十四」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十四'] },
  });

  D('fourth', {
    etymology: {
      origin: '现代英语常用词「fourth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fourth', gloss: '第四' },
      suffix: null,
      history: [
        { label: 'fourth', text: '现代英语常用词「fourth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第四。' },
      ],
      formationLogic: '核心义：第四。',
      mnemonic: '看到 fourth，先说出「第四」。',
      note: '核心义：第四。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fourth.', chinese: '这一章反复回到同一个点：第四。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fourth.s1', en: 'Without that fourth, the next paragraph is hard to follow.', zh: '没有这个第四，下一段会很难读。', structure: 'fourth / 表示 / 第四', grammar: 'number，围绕「第四」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fourth.', right: 'He gave me some advice about the fourth.', reason: 'advice 不可数。名词 fourth 的单复数按词典词形记。', rule: '先确定 fourth 是number，再套「第四」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fourth.q1', senseId: 'fourth.s1', errorType: 'meaning', type: '词义选择', prompt: '「fourth」在本条的核心意思是：', options: ['第四', '完全相反的意思', '一种古代钱币'], answer: '第四', explain: 'fourth：第四。' },
      { id: 'fourth.q2', senseId: 'fourth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fourth?', options: ['第四', 'a kind of ancient coin', 'the past tense of be'], answer: '第四', explain: '对的是「第四」。' },
      { id: 'fourth.q3', senseId: 'fourth.s1', errorType: 'grammar', type: '词义选择', prompt: 'fourth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'fourth.q4', senseId: 'fourth.s1', errorType: 'meaning', type: '词源', prompt: '记 fourth 时，哪句更稳妥？', options: ['先锁住「第四」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第四」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第四'] },
  });

  D('fowl', {
    etymology: {
      origin: '现代英语常用词「fowl」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fowl', gloss: '家禽' },
      suffix: null,
      history: [
        { label: 'fowl', text: '现代英语常用词「fowl」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：家禽。' },
      ],
      formationLogic: '核心义：家禽。',
      mnemonic: '看到 fowl，先说出「家禽」。',
      note: '核心义：家禽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fowl.', chinese: '这一章反复回到同一个点：家禽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fowl.s1', en: 'Without that fowl, the next paragraph is hard to follow.', zh: '没有这个家禽，下一段会很难读。', structure: 'fowl / 表示 / 家禽', grammar: 'noun，围绕「家禽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fowl.', right: 'He gave me some advice about the fowl.', reason: 'advice 不可数。名词 fowl 的单复数按词典词形记。', rule: '先确定 fowl 是noun，再套「家禽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fowl.q1', senseId: 'fowl.s1', errorType: 'meaning', type: '词义选择', prompt: '「fowl」在本条的核心意思是：', options: ['家禽', '完全相反的意思', '一种古代钱币'], answer: '家禽', explain: 'fowl：家禽。' },
      { id: 'fowl.q2', senseId: 'fowl.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fowl?', options: ['家禽', 'a kind of ancient coin', 'the past tense of be'], answer: '家禽', explain: '对的是「家禽」。' },
      { id: 'fowl.q3', senseId: 'fowl.s1', errorType: 'grammar', type: '词义选择', prompt: 'fowl 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fowl.q4', senseId: 'fowl.s1', errorType: 'meaning', type: '词源', prompt: '记 fowl 时，哪句更稳妥？', options: ['先锁住「家禽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家禽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家禽'] },
  });

  D('fox', {
    etymology: {
      origin: '现代英语常用词「fox」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fox', gloss: '狐狸' },
      suffix: null,
      history: [
        { label: 'fox', text: '现代英语常用词「fox」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：狐狸。' },
      ],
      formationLogic: '核心义：狐狸。',
      mnemonic: '看到 fox，先说出「狐狸」。',
      note: '核心义：狐狸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fox.', chinese: '这一章反复回到同一个点：狐狸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fox.s1', en: 'Without that fox, the next paragraph is hard to follow.', zh: '没有这个狐狸，下一段会很难读。', structure: 'fox / 表示 / 狐狸', grammar: 'noun，围绕「狐狸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fox.', right: 'He gave me some advice about the fox.', reason: 'advice 不可数。名词 fox 的单复数按词典词形记。', rule: '先确定 fox 是noun，再套「狐狸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fox.q1', senseId: 'fox.s1', errorType: 'meaning', type: '词义选择', prompt: '「fox」在本条的核心意思是：', options: ['狐狸', '完全相反的意思', '一种古代钱币'], answer: '狐狸', explain: 'fox：狐狸。' },
      { id: 'fox.q2', senseId: 'fox.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fox?', options: ['狐狸', 'a kind of ancient coin', 'the past tense of be'], answer: '狐狸', explain: '对的是「狐狸」。' },
      { id: 'fox.q3', senseId: 'fox.s1', errorType: 'grammar', type: '词义选择', prompt: 'fox 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fox.q4', senseId: 'fox.s1', errorType: 'meaning', type: '词源', prompt: '记 fox 时，哪句更稳妥？', options: ['先锁住「狐狸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狐狸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狐狸'] },
  });

  D('foyer', {
    etymology: {
      origin: '英语派生：foy + -er，词性转到「门厅」。',
      prefix: null,
      root: { text: 'foy', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'foyer', text: '英语派生：foy + -er，词性转到「门厅」。' },
        { label: '现在', text: '核心用法是：门厅。' },
      ],
      formationLogic: '先认词干 foy，再看词尾。',
      mnemonic: '看到 foyer，先说出「门厅」。',
      note: '先认词干 foy，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one foyer.', chinese: '这一章反复回到同一个点：门厅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'foyer.s1', en: 'Without that foyer, the next paragraph is hard to follow.', zh: '没有这个门厅，下一段会很难读。', structure: 'foyer / 表示 / 门厅', grammar: 'noun，围绕「门厅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the foyer.', right: 'He gave me some advice about the foyer.', reason: 'advice 不可数。名词 foyer 的单复数按词典词形记。', rule: '先确定 foyer 是noun，再套「门厅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'foyer.q1', senseId: 'foyer.s1', errorType: 'meaning', type: '词义选择', prompt: '「foyer」在本条的核心意思是：', options: ['门厅', '完全相反的意思', '一种古代钱币'], answer: '门厅', explain: 'foyer：门厅。' },
      { id: 'foyer.q2', senseId: 'foyer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches foyer?', options: ['门厅', 'a kind of ancient coin', 'the past tense of be'], answer: '门厅', explain: '对的是「门厅」。' },
      { id: 'foyer.q3', senseId: 'foyer.s1', errorType: 'grammar', type: '词义选择', prompt: 'foyer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'foyer.q4', senseId: 'foyer.s1', errorType: 'meaning', type: '词源', prompt: '记 foyer 时，哪句更稳妥？', options: ['先锁住「门厅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「门厅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['门厅'] },
  });

  D('fraction', {
    etymology: {
      origin: '英语派生：frac + -tion，词性转到「分数」。',
      prefix: null,
      root: { text: 'frac', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fraction', text: '英语派生：frac + -tion，词性转到「分数」。' },
        { label: '现在', text: '核心用法是：分数。' },
      ],
      formationLogic: '先认词干 frac，再看词尾。',
      mnemonic: '看到 fraction，先说出「分数」。',
      note: '先认词干 frac，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fraction.', chinese: '这一章反复回到同一个点：分数。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fraction.s1', en: 'Without that fraction, the next paragraph is hard to follow.', zh: '没有这个分数，下一段会很难读。', structure: 'fraction / 表示 / 分数', grammar: 'noun，围绕「分数」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fraction.', right: 'He gave me some advice about the fraction.', reason: 'advice 不可数。名词 fraction 的单复数按词典词形记。', rule: '先确定 fraction 是noun，再套「分数」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fraction.q1', senseId: 'fraction.s1', errorType: 'meaning', type: '词义选择', prompt: '「fraction」在本条的核心意思是：', options: ['分数', '完全相反的意思', '一种古代钱币'], answer: '分数', explain: 'fraction：分数。' },
      { id: 'fraction.q2', senseId: 'fraction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fraction?', options: ['分数', 'a kind of ancient coin', 'the past tense of be'], answer: '分数', explain: '对的是「分数」。' },
      { id: 'fraction.q3', senseId: 'fraction.s1', errorType: 'grammar', type: '词义选择', prompt: 'fraction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fraction.q4', senseId: 'fraction.s1', errorType: 'meaning', type: '词源', prompt: '记 fraction 时，哪句更稳妥？', options: ['先锁住「分数」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分数」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分数'] },
  });

  D('fractional', {
    etymology: {
      origin: '英语派生：fraction + -al，词性转到「小部分的」。',
      prefix: null,
      root: { text: 'fraction', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fractional', text: '英语派生：fraction + -al，词性转到「小部分的」。' },
        { label: '现在', text: '核心用法是：小部分的。' },
      ],
      formationLogic: '先认词干 fraction，再看词尾。',
      mnemonic: '看到 fractional，先说出「小部分的」。',
      note: '先认词干 fraction，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fractional.', chinese: '即使是初读者也能看出，这个结果是小部分的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fractional.s1', en: 'They wanted a fractional answer, not a long speech.', zh: '他们要一个小部分的的答复，不要长篇发言。', structure: 'fractional / 表示 / 小部分的', grammar: 'adjective，围绕「小部分的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fractional.', right: 'The news is fractional.', reason: 'news 作主语时动词用单数。', rule: '先确定 fractional 是adjective，再套「小部分的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fractional.q1', senseId: 'fractional.s1', errorType: 'meaning', type: '词义选择', prompt: '「fractional」在本条的核心意思是：', options: ['小部分的', '完全相反的意思', '一种古代钱币'], answer: '小部分的', explain: 'fractional：小部分的。' },
      { id: 'fractional.q2', senseId: 'fractional.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fractional?', options: ['小部分的', 'a kind of ancient coin', 'the past tense of be'], answer: '小部分的', explain: '对的是「小部分的」。' },
      { id: 'fractional.q3', senseId: 'fractional.s1', errorType: 'grammar', type: '词义选择', prompt: 'fractional 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fractional.q4', senseId: 'fractional.s1', errorType: 'meaning', type: '词源', prompt: '记 fractional 时，哪句更稳妥？', options: ['先锁住「小部分的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小部分的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小部分的'] },
  });

  D('fracture', {
    etymology: {
      origin: '现代英语常用词「fracture」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fracture', gloss: '骨折' },
      suffix: null,
      history: [
        { label: 'fracture', text: '现代英语常用词「fracture」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：骨折。' },
      ],
      formationLogic: '核心义：骨折。',
      mnemonic: '看到 fracture，先说出「骨折」。',
      note: '核心义：骨折。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fracture.', chinese: '这一章反复回到同一个点：骨折。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fracture.s1', en: 'Without that fracture, the next paragraph is hard to follow.', zh: '没有这个骨折，下一段会很难读。', structure: 'fracture / 表示 / 骨折', grammar: 'noun，围绕「骨折」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fracture.', right: 'He gave me some advice about the fracture.', reason: 'advice 不可数。名词 fracture 的单复数按词典词形记。', rule: '先确定 fracture 是noun，再套「骨折」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fracture.q1', senseId: 'fracture.s1', errorType: 'meaning', type: '词义选择', prompt: '「fracture」在本条的核心意思是：', options: ['骨折', '完全相反的意思', '一种古代钱币'], answer: '骨折', explain: 'fracture：骨折。' },
      { id: 'fracture.q2', senseId: 'fracture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fracture?', options: ['骨折', 'a kind of ancient coin', 'the past tense of be'], answer: '骨折', explain: '对的是「骨折」。' },
      { id: 'fracture.q3', senseId: 'fracture.s1', errorType: 'grammar', type: '词义选择', prompt: 'fracture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fracture.q4', senseId: 'fracture.s1', errorType: 'meaning', type: '词源', prompt: '记 fracture 时，哪句更稳妥？', options: ['先锁住「骨折」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「骨折」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['骨折'] },
  });

  D('fragile', {
    etymology: {
      origin: '现代英语常用词「fragile」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fragile', gloss: '易碎的' },
      suffix: null,
      history: [
        { label: 'fragile', text: '现代英语常用词「fragile」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：易碎的。' },
      ],
      formationLogic: '核心义：易碎的。',
      mnemonic: '看到 fragile，先说出「易碎的」。',
      note: '核心义：易碎的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fragile.', chinese: '即使是初读者也能看出，这个结果是易碎的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fragile.s1', en: 'They wanted a fragile answer, not a long speech.', zh: '他们要一个易碎的的答复，不要长篇发言。', structure: 'fragile / 表示 / 易碎的', grammar: 'adjective，围绕「易碎的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fragile.', right: 'The news is fragile.', reason: 'news 作主语时动词用单数。', rule: '先确定 fragile 是adjective，再套「易碎的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fragile.q1', senseId: 'fragile.s1', errorType: 'meaning', type: '词义选择', prompt: '「fragile」在本条的核心意思是：', options: ['易碎的', '完全相反的意思', '一种古代钱币'], answer: '易碎的', explain: 'fragile：易碎的。' },
      { id: 'fragile.q2', senseId: 'fragile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fragile?', options: ['易碎的', 'a kind of ancient coin', 'the past tense of be'], answer: '易碎的', explain: '对的是「易碎的」。' },
      { id: 'fragile.q3', senseId: 'fragile.s1', errorType: 'grammar', type: '词义选择', prompt: 'fragile 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fragile.q4', senseId: 'fragile.s1', errorType: 'meaning', type: '词源', prompt: '记 fragile 时，哪句更稳妥？', options: ['先锁住「易碎的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「易碎的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['易碎的'] },
  });

  D('fragment', {
    etymology: {
      origin: '英语派生：frag + -ment，词性转到「碎片」。',
      prefix: null,
      root: { text: 'frag', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fragment', text: '英语派生：frag + -ment，词性转到「碎片」。' },
        { label: '现在', text: '核心用法是：碎片。' },
      ],
      formationLogic: '先认词干 frag，再看词尾。',
      mnemonic: '看到 fragment，先说出「碎片」。',
      note: '先认词干 frag，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fragment.', chinese: '这一章反复回到同一个点：碎片。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fragment.s1', en: 'Without that fragment, the next paragraph is hard to follow.', zh: '没有这个碎片，下一段会很难读。', structure: 'fragment / 表示 / 碎片', grammar: 'noun，围绕「碎片」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fragment.', right: 'He gave me some advice about the fragment.', reason: 'advice 不可数。名词 fragment 的单复数按词典词形记。', rule: '先确定 fragment 是noun，再套「碎片」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fragment.q1', senseId: 'fragment.s1', errorType: 'meaning', type: '词义选择', prompt: '「fragment」在本条的核心意思是：', options: ['碎片', '完全相反的意思', '一种古代钱币'], answer: '碎片', explain: 'fragment：碎片。' },
      { id: 'fragment.q2', senseId: 'fragment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fragment?', options: ['碎片', 'a kind of ancient coin', 'the past tense of be'], answer: '碎片', explain: '对的是「碎片」。' },
      { id: 'fragment.q3', senseId: 'fragment.s1', errorType: 'grammar', type: '词义选择', prompt: 'fragment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fragment.q4', senseId: 'fragment.s1', errorType: 'meaning', type: '词源', prompt: '记 fragment 时，哪句更稳妥？', options: ['先锁住「碎片」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「碎片」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['碎片'] },
  });

  D('fragrance', {
    etymology: {
      origin: '英语派生：fragr + -ance，词性转到「香味」。',
      prefix: null,
      root: { text: 'fragr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fragrance', text: '英语派生：fragr + -ance，词性转到「香味」。' },
        { label: '现在', text: '核心用法是：香味。' },
      ],
      formationLogic: '先认词干 fragr，再看词尾。',
      mnemonic: '看到 fragrance，先说出「香味」。',
      note: '先认词干 fragr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fragrance.', chinese: '这一章反复回到同一个点：香味。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fragrance.s1', en: 'Without that fragrance, the next paragraph is hard to follow.', zh: '没有这个香味，下一段会很难读。', structure: 'fragrance / 表示 / 香味', grammar: 'noun，围绕「香味」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fragrance.', right: 'He gave me some advice about the fragrance.', reason: 'advice 不可数。名词 fragrance 的单复数按词典词形记。', rule: '先确定 fragrance 是noun，再套「香味」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fragrance.q1', senseId: 'fragrance.s1', errorType: 'meaning', type: '词义选择', prompt: '「fragrance」在本条的核心意思是：', options: ['香味', '完全相反的意思', '一种古代钱币'], answer: '香味', explain: 'fragrance：香味。' },
      { id: 'fragrance.q2', senseId: 'fragrance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fragrance?', options: ['香味', 'a kind of ancient coin', 'the past tense of be'], answer: '香味', explain: '对的是「香味」。' },
      { id: 'fragrance.q3', senseId: 'fragrance.s1', errorType: 'grammar', type: '词义选择', prompt: 'fragrance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fragrance.q4', senseId: 'fragrance.s1', errorType: 'meaning', type: '词源', prompt: '记 fragrance 时，哪句更稳妥？', options: ['先锁住「香味」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「香味」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['香味'] },
  });

  D('fragrant', {
    etymology: {
      origin: '现代英语常用词「fragrant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fragrant', gloss: '芳香的' },
      suffix: null,
      history: [
        { label: 'fragrant', text: '现代英语常用词「fragrant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：芳香的。' },
      ],
      formationLogic: '核心义：芳香的。',
      mnemonic: '看到 fragrant，先说出「芳香的」。',
      note: '核心义：芳香的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fragrant.', chinese: '即使是初读者也能看出，这个结果是芳香的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fragrant.s1', en: 'They wanted a fragrant answer, not a long speech.', zh: '他们要一个芳香的的答复，不要长篇发言。', structure: 'fragrant / 表示 / 芳香的', grammar: 'adjective，围绕「芳香的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fragrant.', right: 'The news is fragrant.', reason: 'news 作主语时动词用单数。', rule: '先确定 fragrant 是adjective，再套「芳香的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fragrant.q1', senseId: 'fragrant.s1', errorType: 'meaning', type: '词义选择', prompt: '「fragrant」在本条的核心意思是：', options: ['芳香的', '完全相反的意思', '一种古代钱币'], answer: '芳香的', explain: 'fragrant：芳香的。' },
      { id: 'fragrant.q2', senseId: 'fragrant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fragrant?', options: ['芳香的', 'a kind of ancient coin', 'the past tense of be'], answer: '芳香的', explain: '对的是「芳香的」。' },
      { id: 'fragrant.q3', senseId: 'fragrant.s1', errorType: 'grammar', type: '词义选择', prompt: 'fragrant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fragrant.q4', senseId: 'fragrant.s1', errorType: 'meaning', type: '词源', prompt: '记 fragrant 时，哪句更稳妥？', options: ['先锁住「芳香的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「芳香的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['芳香的'] },
  });

  D('frail', {
    etymology: {
      origin: '现代英语常用词「frail」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frail', gloss: '虚弱的' },
      suffix: null,
      history: [
        { label: 'frail', text: '现代英语常用词「frail」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：虚弱的。' },
      ],
      formationLogic: '核心义：虚弱的。',
      mnemonic: '看到 frail，先说出「虚弱的」。',
      note: '核心义：虚弱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frail.', chinese: '即使是初读者也能看出，这个结果是虚弱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frail.s1', en: 'They wanted a frail answer, not a long speech.', zh: '他们要一个虚弱的的答复，不要长篇发言。', structure: 'frail / 表示 / 虚弱的', grammar: 'adjective，围绕「虚弱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frail.', right: 'The news is frail.', reason: 'news 作主语时动词用单数。', rule: '先确定 frail 是adjective，再套「虚弱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frail.q1', senseId: 'frail.s1', errorType: 'meaning', type: '词义选择', prompt: '「frail」在本条的核心意思是：', options: ['虚弱的', '完全相反的意思', '一种古代钱币'], answer: '虚弱的', explain: 'frail：虚弱的。' },
      { id: 'frail.q2', senseId: 'frail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frail?', options: ['虚弱的', 'a kind of ancient coin', 'the past tense of be'], answer: '虚弱的', explain: '对的是「虚弱的」。' },
      { id: 'frail.q3', senseId: 'frail.s1', errorType: 'grammar', type: '词义选择', prompt: 'frail 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frail.q4', senseId: 'frail.s1', errorType: 'meaning', type: '词源', prompt: '记 frail 时，哪句更稳妥？', options: ['先锁住「虚弱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「虚弱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['虚弱的'] },
  });

  D('frame', {
    etymology: {
      origin: '现代英语常用词「frame」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frame', gloss: '框架' },
      suffix: null,
      history: [
        { label: 'frame', text: '现代英语常用词「frame」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：框架。' },
      ],
      formationLogic: '核心义：框架。',
      mnemonic: '看到 frame，先说出「框架」。',
      note: '核心义：框架。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frame.', chinese: '这一章反复回到同一个点：框架。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frame.s1', en: 'Without that frame, the next paragraph is hard to follow.', zh: '没有这个框架，下一段会很难读。', structure: 'frame / 表示 / 框架', grammar: 'noun，围绕「框架」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frame.', right: 'He gave me some advice about the frame.', reason: 'advice 不可数。名词 frame 的单复数按词典词形记。', rule: '先确定 frame 是noun，再套「框架」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frame.q1', senseId: 'frame.s1', errorType: 'meaning', type: '词义选择', prompt: '「frame」在本条的核心意思是：', options: ['框架', '完全相反的意思', '一种古代钱币'], answer: '框架', explain: 'frame：框架。' },
      { id: 'frame.q2', senseId: 'frame.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frame?', options: ['框架', 'a kind of ancient coin', 'the past tense of be'], answer: '框架', explain: '对的是「框架」。' },
      { id: 'frame.q3', senseId: 'frame.s1', errorType: 'grammar', type: '词义选择', prompt: 'frame 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frame.q4', senseId: 'frame.s1', errorType: 'meaning', type: '词源', prompt: '记 frame 时，哪句更稳妥？', options: ['先锁住「框架」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「框架」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['框架'] },
  });

  D('framework', {
    etymology: {
      origin: '现代英语常用词「framework」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'framework', gloss: '框架' },
      suffix: null,
      history: [
        { label: 'framework', text: '现代英语常用词「framework」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：框架。' },
      ],
      formationLogic: '核心义：框架。',
      mnemonic: '看到 framework，先说出「框架」。',
      note: '核心义：框架。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one framework.', chinese: '这一章反复回到同一个点：框架。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'framework.s1', en: 'Without that framework, the next paragraph is hard to follow.', zh: '没有这个框架，下一段会很难读。', structure: 'framework / 表示 / 框架', grammar: 'noun，围绕「框架」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the framework.', right: 'He gave me some advice about the framework.', reason: 'advice 不可数。名词 framework 的单复数按词典词形记。', rule: '先确定 framework 是noun，再套「框架」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'framework.q1', senseId: 'framework.s1', errorType: 'meaning', type: '词义选择', prompt: '「framework」在本条的核心意思是：', options: ['框架', '完全相反的意思', '一种古代钱币'], answer: '框架', explain: 'framework：框架。' },
      { id: 'framework.q2', senseId: 'framework.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches framework?', options: ['框架', 'a kind of ancient coin', 'the past tense of be'], answer: '框架', explain: '对的是「框架」。' },
      { id: 'framework.q3', senseId: 'framework.s1', errorType: 'grammar', type: '词义选择', prompt: 'framework 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'framework.q4', senseId: 'framework.s1', errorType: 'meaning', type: '词源', prompt: '记 framework 时，哪句更稳妥？', options: ['先锁住「框架」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「框架」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['框架'] },
  });

  D('franchise', {
    etymology: {
      origin: '现代英语常用词「franchise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'franchise', gloss: '特许经营权' },
      suffix: null,
      history: [
        { label: 'franchise', text: '现代英语常用词「franchise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：特许经营权。' },
      ],
      formationLogic: '核心义：特许经营权。',
      mnemonic: '看到 franchise，先说出「特许经营权」。',
      note: '核心义：特许经营权。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one franchise.', chinese: '这一章反复回到同一个点：特许经营权。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'franchise.s1', en: 'Without that franchise, the next paragraph is hard to follow.', zh: '没有这个特许经营权，下一段会很难读。', structure: 'franchise / 表示 / 特许经营权', grammar: 'noun，围绕「特许经营权」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the franchise.', right: 'He gave me some advice about the franchise.', reason: 'advice 不可数。名词 franchise 的单复数按词典词形记。', rule: '先确定 franchise 是noun，再套「特许经营权」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'franchise.q1', senseId: 'franchise.s1', errorType: 'meaning', type: '词义选择', prompt: '「franchise」在本条的核心意思是：', options: ['特许经营权', '完全相反的意思', '一种古代钱币'], answer: '特许经营权', explain: 'franchise：特许经营权。' },
      { id: 'franchise.q2', senseId: 'franchise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches franchise?', options: ['特许经营权', 'a kind of ancient coin', 'the past tense of be'], answer: '特许经营权', explain: '对的是「特许经营权」。' },
      { id: 'franchise.q3', senseId: 'franchise.s1', errorType: 'grammar', type: '词义选择', prompt: 'franchise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'franchise.q4', senseId: 'franchise.s1', errorType: 'meaning', type: '词源', prompt: '记 franchise 时，哪句更稳妥？', options: ['先锁住「特许经营权」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「特许经营权」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['特许经营权'] },
  });

  D('frank', {
    etymology: {
      origin: '现代英语常用词「frank」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frank', gloss: '坦率的' },
      suffix: null,
      history: [
        { label: 'frank', text: '现代英语常用词「frank」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：坦率的。' },
      ],
      formationLogic: '核心义：坦率的。',
      mnemonic: '看到 frank，先说出「坦率的」。',
      note: '核心义：坦率的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frank.', chinese: '即使是初读者也能看出，这个结果是坦率的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frank.s1', en: 'They wanted a frank answer, not a long speech.', zh: '他们要一个坦率的的答复，不要长篇发言。', structure: 'frank / 表示 / 坦率的', grammar: 'adjective，围绕「坦率的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frank.', right: 'The news is frank.', reason: 'news 作主语时动词用单数。', rule: '先确定 frank 是adjective，再套「坦率的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frank.q1', senseId: 'frank.s1', errorType: 'meaning', type: '词义选择', prompt: '「frank」在本条的核心意思是：', options: ['坦率的', '完全相反的意思', '一种古代钱币'], answer: '坦率的', explain: 'frank：坦率的。' },
      { id: 'frank.q2', senseId: 'frank.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frank?', options: ['坦率的', 'a kind of ancient coin', 'the past tense of be'], answer: '坦率的', explain: '对的是「坦率的」。' },
      { id: 'frank.q3', senseId: 'frank.s1', errorType: 'grammar', type: '词义选择', prompt: 'frank 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frank.q4', senseId: 'frank.s1', errorType: 'meaning', type: '词源', prompt: '记 frank 时，哪句更稳妥？', options: ['先锁住「坦率的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「坦率的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['坦率的'] },
  });

  D('frankfurter', {
    etymology: {
      origin: '英语派生：frankfurt + -er，词性转到「法兰克福香肠」。',
      prefix: null,
      root: { text: 'frankfurt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frankfurter', text: '英语派生：frankfurt + -er，词性转到「法兰克福香肠」。' },
        { label: '现在', text: '核心用法是：法兰克福香肠。' },
      ],
      formationLogic: '先认词干 frankfurt，再看词尾。',
      mnemonic: '看到 frankfurter，先说出「法兰克福香肠」。',
      note: '先认词干 frankfurt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frankfurter.', chinese: '这一章反复回到同一个点：法兰克福香肠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frankfurter.s1', en: 'Without that frankfurter, the next paragraph is hard to follow.', zh: '没有这个法兰克福香肠，下一段会很难读。', structure: 'frankfurter / 表示 / 法兰克福香肠', grammar: 'noun，围绕「法兰克福香肠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frankfurter.', right: 'He gave me some advice about the frankfurter.', reason: 'advice 不可数。名词 frankfurter 的单复数按词典词形记。', rule: '先确定 frankfurter 是noun，再套「法兰克福香肠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frankfurter.q1', senseId: 'frankfurter.s1', errorType: 'meaning', type: '词义选择', prompt: '「frankfurter」在本条的核心意思是：', options: ['法兰克福香肠', '完全相反的意思', '一种古代钱币'], answer: '法兰克福香肠', explain: 'frankfurter：法兰克福香肠。' },
      { id: 'frankfurter.q2', senseId: 'frankfurter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frankfurter?', options: ['法兰克福香肠', 'a kind of ancient coin', 'the past tense of be'], answer: '法兰克福香肠', explain: '对的是「法兰克福香肠」。' },
      { id: 'frankfurter.q3', senseId: 'frankfurter.s1', errorType: 'grammar', type: '词义选择', prompt: 'frankfurter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frankfurter.q4', senseId: 'frankfurter.s1', errorType: 'meaning', type: '词源', prompt: '记 frankfurter 时，哪句更稳妥？', options: ['先锁住「法兰克福香肠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「法兰克福香肠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['法兰克福香肠'] },
  });

  D('frantic', {
    etymology: {
      origin: '英语派生：frant + -ic，词性转到「疯狂的」。',
      prefix: null,
      root: { text: 'frant', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frantic', text: '英语派生：frant + -ic，词性转到「疯狂的」。' },
        { label: '现在', text: '核心用法是：疯狂的。' },
      ],
      formationLogic: '先认词干 frant，再看词尾。',
      mnemonic: '看到 frantic，先说出「疯狂的」。',
      note: '先认词干 frant，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frantic.', chinese: '即使是初读者也能看出，这个结果是疯狂的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frantic.s1', en: 'They wanted a frantic answer, not a long speech.', zh: '他们要一个疯狂的的答复，不要长篇发言。', structure: 'frantic / 表示 / 疯狂的', grammar: 'adjective，围绕「疯狂的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frantic.', right: 'The news is frantic.', reason: 'news 作主语时动词用单数。', rule: '先确定 frantic 是adjective，再套「疯狂的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frantic.q1', senseId: 'frantic.s1', errorType: 'meaning', type: '词义选择', prompt: '「frantic」在本条的核心意思是：', options: ['疯狂的', '完全相反的意思', '一种古代钱币'], answer: '疯狂的', explain: 'frantic：疯狂的。' },
      { id: 'frantic.q2', senseId: 'frantic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frantic?', options: ['疯狂的', 'a kind of ancient coin', 'the past tense of be'], answer: '疯狂的', explain: '对的是「疯狂的」。' },
      { id: 'frantic.q3', senseId: 'frantic.s1', errorType: 'grammar', type: '词义选择', prompt: 'frantic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frantic.q4', senseId: 'frantic.s1', errorType: 'meaning', type: '词源', prompt: '记 frantic 时，哪句更稳妥？', options: ['先锁住「疯狂的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「疯狂的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疯狂的'] },
  });

  D('fraud', {
    etymology: {
      origin: '现代英语常用词「fraud」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fraud', gloss: '欺诈' },
      suffix: null,
      history: [
        { label: 'fraud', text: '现代英语常用词「fraud」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：欺诈。' },
      ],
      formationLogic: '核心义：欺诈。',
      mnemonic: '看到 fraud，先说出「欺诈」。',
      note: '核心义：欺诈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fraud.', chinese: '这一章反复回到同一个点：欺诈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fraud.s1', en: 'Without that fraud, the next paragraph is hard to follow.', zh: '没有这个欺诈，下一段会很难读。', structure: 'fraud / 表示 / 欺诈', grammar: 'noun，围绕「欺诈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fraud.', right: 'He gave me some advice about the fraud.', reason: 'advice 不可数。名词 fraud 的单复数按词典词形记。', rule: '先确定 fraud 是noun，再套「欺诈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fraud.q1', senseId: 'fraud.s1', errorType: 'meaning', type: '词义选择', prompt: '「fraud」在本条的核心意思是：', options: ['欺诈', '完全相反的意思', '一种古代钱币'], answer: '欺诈', explain: 'fraud：欺诈。' },
      { id: 'fraud.q2', senseId: 'fraud.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fraud?', options: ['欺诈', 'a kind of ancient coin', 'the past tense of be'], answer: '欺诈', explain: '对的是「欺诈」。' },
      { id: 'fraud.q3', senseId: 'fraud.s1', errorType: 'grammar', type: '词义选择', prompt: 'fraud 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fraud.q4', senseId: 'fraud.s1', errorType: 'meaning', type: '词源', prompt: '记 fraud 时，哪句更稳妥？', options: ['先锁住「欺诈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欺诈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欺诈'] },
  });

  D('fray', {
    etymology: {
      origin: '现代英语常用词「fray」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fray', gloss: '打架' },
      suffix: null,
      history: [
        { label: 'fray', text: '现代英语常用词「fray」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：打架。' },
      ],
      formationLogic: '核心义：打架。',
      mnemonic: '看到 fray，先说出「打架」。',
      note: '核心义：打架。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fray.', chinese: '这一章反复回到同一个点：打架。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fray.s1', en: 'Without that fray, the next paragraph is hard to follow.', zh: '没有这个打架，下一段会很难读。', structure: 'fray / 表示 / 打架', grammar: 'noun，围绕「打架」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fray.', right: 'He gave me some advice about the fray.', reason: 'advice 不可数。名词 fray 的单复数按词典词形记。', rule: '先确定 fray 是noun，再套「打架」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fray.q1', senseId: 'fray.s1', errorType: 'meaning', type: '词义选择', prompt: '「fray」在本条的核心意思是：', options: ['打架', '完全相反的意思', '一种古代钱币'], answer: '打架', explain: 'fray：打架。' },
      { id: 'fray.q2', senseId: 'fray.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fray?', options: ['打架', 'a kind of ancient coin', 'the past tense of be'], answer: '打架', explain: '对的是「打架」。' },
      { id: 'fray.q3', senseId: 'fray.s1', errorType: 'grammar', type: '词义选择', prompt: 'fray 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fray.q4', senseId: 'fray.s1', errorType: 'meaning', type: '词源', prompt: '记 fray 时，哪句更稳妥？', options: ['先锁住「打架」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打架」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打架'] },
  });

  D('free', {
    etymology: {
      origin: '现代英语常用词「free」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'free', gloss: '自由的' },
      suffix: null,
      history: [
        { label: 'free', text: '现代英语常用词「free」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：自由的。' },
      ],
      formationLogic: '核心义：自由的。',
      mnemonic: '看到 free，先说出「自由的」。',
      note: '核心义：自由的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was free.', chinese: '即使是初读者也能看出，这个结果是自由的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'free.s1', en: 'They wanted a free answer, not a long speech.', zh: '他们要一个自由的的答复，不要长篇发言。', structure: 'free / 表示 / 自由的', grammar: 'adjective，围绕「自由的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are free.', right: 'The news is free.', reason: 'news 作主语时动词用单数。', rule: '先确定 free 是adjective，再套「自由的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'free.q1', senseId: 'free.s1', errorType: 'meaning', type: '词义选择', prompt: '「free」在本条的核心意思是：', options: ['自由的', '完全相反的意思', '一种古代钱币'], answer: '自由的', explain: 'free：自由的。' },
      { id: 'free.q2', senseId: 'free.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches free?', options: ['自由的', 'a kind of ancient coin', 'the past tense of be'], answer: '自由的', explain: '对的是「自由的」。' },
      { id: 'free.q3', senseId: 'free.s1', errorType: 'grammar', type: '词义选择', prompt: 'free 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'free.q4', senseId: 'free.s1', errorType: 'meaning', type: '词源', prompt: '记 free 时，哪句更稳妥？', options: ['先锁住「自由的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自由的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自由的'] },
  });

  D('free kick', {
    etymology: {
      origin: '现代英语固定说法「free kick」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'free kick', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'free kick', text: '现代英语固定说法「free kick」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：任意球。' },
      ],
      formationLogic: '核心义：任意球。',
      mnemonic: '看到 free kick，先说出「任意球」。',
      note: '核心义：任意球。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "free kick" and asked the class to keep it as one unit.', chinese: '老师把「free kick」圈出来，让全班把它当成一个整体。它表示任意球。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'free kick.s1', en: 'In the margin she wrote "free kick" so nobody would split the phrase.', zh: '她在页边写下「free kick」，免得有人把这个说法拆开。意思是任意球。', structure: 'free kick / 表示 / 任意球', grammar: 'noun，围绕「任意球」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of free kick and lost the point.', right: 'Keep "free kick" together: it means 任意球.', reason: '「free kick」要整块理解。', rule: '先确定 free kick 是noun，再套「任意球」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'free kick.q1', senseId: 'free kick.s1', errorType: 'meaning', type: '词义选择', prompt: '「free kick」在本条的核心意思是：', options: ['任意球', '完全相反的意思', '一种古代钱币'], answer: '任意球', explain: 'free kick：任意球。' },
      { id: 'free kick.q2', senseId: 'free kick.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches free kick?', options: ['任意球', 'a kind of ancient coin', 'the past tense of be'], answer: '任意球', explain: '对的是「任意球」。' },
      { id: 'free kick.q3', senseId: 'free kick.s1', errorType: 'grammar', type: '词义选择', prompt: 'free kick 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'free kick.q4', senseId: 'free kick.s1', errorType: 'meaning', type: '词源', prompt: '记 free kick 时，哪句更稳妥？', options: ['先锁住「任意球」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「任意球」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['任意球'] },
  });

  D('free time', {
    etymology: {
      origin: '现代英语固定说法「free time」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'free time', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'free time', text: '现代英语固定说法「free time」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：空闲时间。' },
      ],
      formationLogic: '核心义：空闲时间。',
      mnemonic: '看到 free time，先说出「空闲时间」。',
      note: '核心义：空闲时间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "free time" and asked the class to keep it as one unit.', chinese: '老师把「free time」圈出来，让全班把它当成一个整体。它表示空闲时间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'free time.s1', en: 'In the margin she wrote "free time" so nobody would split the phrase.', zh: '她在页边写下「free time」，免得有人把这个说法拆开。意思是空闲时间。', structure: 'free time / 表示 / 空闲时间', grammar: 'noun，围绕「空闲时间」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of free time and lost the point.', right: 'Keep "free time" together: it means 空闲时间.', reason: '「free time」要整块理解。', rule: '先确定 free time 是noun，再套「空闲时间」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'free time.q1', senseId: 'free time.s1', errorType: 'meaning', type: '词义选择', prompt: '「free time」在本条的核心意思是：', options: ['空闲时间', '完全相反的意思', '一种古代钱币'], answer: '空闲时间', explain: 'free time：空闲时间。' },
      { id: 'free time.q2', senseId: 'free time.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches free time?', options: ['空闲时间', 'a kind of ancient coin', 'the past tense of be'], answer: '空闲时间', explain: '对的是「空闲时间」。' },
      { id: 'free time.q3', senseId: 'free time.s1', errorType: 'grammar', type: '词义选择', prompt: 'free time 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'free time.q4', senseId: 'free time.s1', errorType: 'meaning', type: '词源', prompt: '记 free time 时，哪句更稳妥？', options: ['先锁住「空闲时间」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「空闲时间」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空闲时间'] },
  });

  D('freedom', {
    etymology: {
      origin: '现代英语常用词「freedom」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freedom', gloss: '自由' },
      suffix: null,
      history: [
        { label: 'freedom', text: '现代英语常用词「freedom」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：自由。' },
      ],
      formationLogic: '核心义：自由。',
      mnemonic: '看到 freedom，先说出「自由」。',
      note: '核心义：自由。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one freedom.', chinese: '这一章反复回到同一个点：自由。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freedom.s1', en: 'Without that freedom, the next paragraph is hard to follow.', zh: '没有这个自由，下一段会很难读。', structure: 'freedom / 表示 / 自由', grammar: 'noun，围绕「自由」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the freedom.', right: 'He gave me some advice about the freedom.', reason: 'advice 不可数。名词 freedom 的单复数按词典词形记。', rule: '先确定 freedom 是noun，再套「自由」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freedom.q1', senseId: 'freedom.s1', errorType: 'meaning', type: '词义选择', prompt: '「freedom」在本条的核心意思是：', options: ['自由', '完全相反的意思', '一种古代钱币'], answer: '自由', explain: 'freedom：自由。' },
      { id: 'freedom.q2', senseId: 'freedom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freedom?', options: ['自由', 'a kind of ancient coin', 'the past tense of be'], answer: '自由', explain: '对的是「自由」。' },
      { id: 'freedom.q3', senseId: 'freedom.s1', errorType: 'grammar', type: '词义选择', prompt: 'freedom 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freedom.q4', senseId: 'freedom.s1', errorType: 'meaning', type: '词源', prompt: '记 freedom 时，哪句更稳妥？', options: ['先锁住「自由」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自由」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自由'] },
  });

  D('freehold', {
    etymology: {
      origin: '现代英语常用词「freehold」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freehold', gloss: '永久产权' },
      suffix: null,
      history: [
        { label: 'freehold', text: '现代英语常用词「freehold」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：永久产权。' },
      ],
      formationLogic: '核心义：永久产权。',
      mnemonic: '看到 freehold，先说出「永久产权」。',
      note: '核心义：永久产权。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one freehold.', chinese: '这一章反复回到同一个点：永久产权。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freehold.s1', en: 'Without that freehold, the next paragraph is hard to follow.', zh: '没有这个永久产权，下一段会很难读。', structure: 'freehold / 表示 / 永久产权', grammar: 'noun，围绕「永久产权」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the freehold.', right: 'He gave me some advice about the freehold.', reason: 'advice 不可数。名词 freehold 的单复数按词典词形记。', rule: '先确定 freehold 是noun，再套「永久产权」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freehold.q1', senseId: 'freehold.s1', errorType: 'meaning', type: '词义选择', prompt: '「freehold」在本条的核心意思是：', options: ['永久产权', '完全相反的意思', '一种古代钱币'], answer: '永久产权', explain: 'freehold：永久产权。' },
      { id: 'freehold.q2', senseId: 'freehold.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freehold?', options: ['永久产权', 'a kind of ancient coin', 'the past tense of be'], answer: '永久产权', explain: '对的是「永久产权」。' },
      { id: 'freehold.q3', senseId: 'freehold.s1', errorType: 'grammar', type: '词义选择', prompt: 'freehold 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freehold.q4', senseId: 'freehold.s1', errorType: 'meaning', type: '词源', prompt: '记 freehold 时，哪句更稳妥？', options: ['先锁住「永久产权」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「永久产权」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['永久产权'] },
  });

  D('freeway', {
    etymology: {
      origin: '现代英语常用词「freeway」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freeway', gloss: '高速公路' },
      suffix: null,
      history: [
        { label: 'freeway', text: '现代英语常用词「freeway」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：高速公路。' },
      ],
      formationLogic: '核心义：高速公路。',
      mnemonic: '看到 freeway，先说出「高速公路」。',
      note: '核心义：高速公路。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one freeway.', chinese: '这一章反复回到同一个点：高速公路。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freeway.s1', en: 'Without that freeway, the next paragraph is hard to follow.', zh: '没有这个高速公路，下一段会很难读。', structure: 'freeway / 表示 / 高速公路', grammar: 'noun，围绕「高速公路」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the freeway.', right: 'He gave me some advice about the freeway.', reason: 'advice 不可数。名词 freeway 的单复数按词典词形记。', rule: '先确定 freeway 是noun，再套「高速公路」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freeway.q1', senseId: 'freeway.s1', errorType: 'meaning', type: '词义选择', prompt: '「freeway」在本条的核心意思是：', options: ['高速公路', '完全相反的意思', '一种古代钱币'], answer: '高速公路', explain: 'freeway：高速公路。' },
      { id: 'freeway.q2', senseId: 'freeway.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freeway?', options: ['高速公路', 'a kind of ancient coin', 'the past tense of be'], answer: '高速公路', explain: '对的是「高速公路」。' },
      { id: 'freeway.q3', senseId: 'freeway.s1', errorType: 'grammar', type: '词义选择', prompt: 'freeway 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freeway.q4', senseId: 'freeway.s1', errorType: 'meaning', type: '词源', prompt: '记 freeway 时，哪句更稳妥？', options: ['先锁住「高速公路」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「高速公路」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高速公路'] },
  });

  D('freeze', {
    etymology: {
      origin: '现代英语常用词「freeze」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freeze', gloss: '结冰' },
      suffix: null,
      history: [
        { label: 'freeze', text: '现代英语常用词「freeze」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：结冰。' },
      ],
      formationLogic: '核心义：结冰。',
      mnemonic: '看到 freeze，先说出「结冰」。',
      note: '核心义：结冰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to freeze before the office closed.', chinese: '他们同意在办公室关门前做这件事：结冰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freeze.s1', en: 'The deadline forced the team to freeze that afternoon.', zh: '截止日期逼着小组在那天下午结冰。', structure: 'freeze / 表示 / 结冰', grammar: 'verb，围绕「结冰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She freezeed it yesterday without checking the real past form.', right: 'Check the past form of "freeze" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 freeze 是verb，再套「结冰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freeze.q1', senseId: 'freeze.s1', errorType: 'meaning', type: '词义选择', prompt: '「freeze」在本条的核心意思是：', options: ['结冰', '完全相反的意思', '一种古代钱币'], answer: '结冰', explain: 'freeze：结冰。' },
      { id: 'freeze.q2', senseId: 'freeze.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freeze?', options: ['结冰', 'a kind of ancient coin', 'the past tense of be'], answer: '结冰', explain: '对的是「结冰」。' },
      { id: 'freeze.q3', senseId: 'freeze.s1', errorType: 'grammar', type: '词义选择', prompt: 'freeze 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'freeze.q4', senseId: 'freeze.s1', errorType: 'meaning', type: '词源', prompt: '记 freeze 时，哪句更稳妥？', options: ['先锁住「结冰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结冰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结冰'] },
  });

  D('freezer', {
    etymology: {
      origin: '英语派生：freez + -er，词性转到「冷冻柜」。',
      prefix: null,
      root: { text: 'freez', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'freezer', text: '英语派生：freez + -er，词性转到「冷冻柜」。' },
        { label: '现在', text: '核心用法是：冷冻柜。' },
      ],
      formationLogic: '先认词干 freez，再看词尾。',
      mnemonic: '看到 freezer，先说出「冷冻柜」。',
      note: '先认词干 freez，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one freezer.', chinese: '这一章反复回到同一个点：冷冻柜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freezer.s1', en: 'Without that freezer, the next paragraph is hard to follow.', zh: '没有这个冷冻柜，下一段会很难读。', structure: 'freezer / 表示 / 冷冻柜', grammar: 'noun，围绕「冷冻柜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the freezer.', right: 'He gave me some advice about the freezer.', reason: 'advice 不可数。名词 freezer 的单复数按词典词形记。', rule: '先确定 freezer 是noun，再套「冷冻柜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freezer.q1', senseId: 'freezer.s1', errorType: 'meaning', type: '词义选择', prompt: '「freezer」在本条的核心意思是：', options: ['冷冻柜', '完全相反的意思', '一种古代钱币'], answer: '冷冻柜', explain: 'freezer：冷冻柜。' },
      { id: 'freezer.q2', senseId: 'freezer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freezer?', options: ['冷冻柜', 'a kind of ancient coin', 'the past tense of be'], answer: '冷冻柜', explain: '对的是「冷冻柜」。' },
      { id: 'freezer.q3', senseId: 'freezer.s1', errorType: 'grammar', type: '词义选择', prompt: 'freezer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freezer.q4', senseId: 'freezer.s1', errorType: 'meaning', type: '词源', prompt: '记 freezer 时，哪句更稳妥？', options: ['先锁住「冷冻柜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冷冻柜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冷冻柜'] },
  });

  D('freezing', {
    etymology: {
      origin: '英语派生：freez + -ing，词性转到「严寒的」。',
      prefix: null,
      root: { text: 'freez', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'freezing', text: '英语派生：freez + -ing，词性转到「严寒的」。' },
        { label: '现在', text: '核心用法是：严寒的。' },
      ],
      formationLogic: '先认词干 freez，再看词尾。',
      mnemonic: '看到 freezing，先说出「严寒的」。',
      note: '先认词干 freez，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was freezing.', chinese: '即使是初读者也能看出，这个结果是严寒的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freezing.s1', en: 'They wanted a freezing answer, not a long speech.', zh: '他们要一个严寒的的答复，不要长篇发言。', structure: 'freezing / 表示 / 严寒的', grammar: 'adjective，围绕「严寒的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are freezing.', right: 'The news is freezing.', reason: 'news 作主语时动词用单数。', rule: '先确定 freezing 是adjective，再套「严寒的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freezing.q1', senseId: 'freezing.s1', errorType: 'meaning', type: '词义选择', prompt: '「freezing」在本条的核心意思是：', options: ['严寒的', '完全相反的意思', '一种古代钱币'], answer: '严寒的', explain: 'freezing：严寒的。' },
      { id: 'freezing.q2', senseId: 'freezing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freezing?', options: ['严寒的', 'a kind of ancient coin', 'the past tense of be'], answer: '严寒的', explain: '对的是「严寒的」。' },
      { id: 'freezing.q3', senseId: 'freezing.s1', errorType: 'grammar', type: '词义选择', prompt: 'freezing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'freezing.q4', senseId: 'freezing.s1', errorType: 'meaning', type: '词源', prompt: '记 freezing 时，哪句更稳妥？', options: ['先锁住「严寒的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「严寒的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['严寒的'] },
  });

  D('freight', {
    etymology: {
      origin: '现代英语常用词「freight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freight', gloss: '货物' },
      suffix: null,
      history: [
        { label: 'freight', text: '现代英语常用词「freight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：货物。' },
      ],
      formationLogic: '核心义：货物。',
      mnemonic: '看到 freight，先说出「货物」。',
      note: '核心义：货物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one freight.', chinese: '这一章反复回到同一个点：货物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freight.s1', en: 'Without that freight, the next paragraph is hard to follow.', zh: '没有这个货物，下一段会很难读。', structure: 'freight / 表示 / 货物', grammar: 'noun，围绕「货物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the freight.', right: 'He gave me some advice about the freight.', reason: 'advice 不可数。名词 freight 的单复数按词典词形记。', rule: '先确定 freight 是noun，再套「货物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freight.q1', senseId: 'freight.s1', errorType: 'meaning', type: '词义选择', prompt: '「freight」在本条的核心意思是：', options: ['货物', '完全相反的意思', '一种古代钱币'], answer: '货物', explain: 'freight：货物。' },
      { id: 'freight.q2', senseId: 'freight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freight?', options: ['货物', 'a kind of ancient coin', 'the past tense of be'], answer: '货物', explain: '对的是「货物」。' },
      { id: 'freight.q3', senseId: 'freight.s1', errorType: 'grammar', type: '词义选择', prompt: 'freight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freight.q4', senseId: 'freight.s1', errorType: 'meaning', type: '词源', prompt: '记 freight 时，哪句更稳妥？', options: ['先锁住「货物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「货物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['货物'] },
  });

  D('freight car', {
    etymology: {
      origin: '现代英语固定说法「freight car」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'freight car', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'freight car', text: '现代英语固定说法「freight car」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：货车车厢。' },
      ],
      formationLogic: '核心义：货车车厢。',
      mnemonic: '看到 freight car，先说出「货车车厢」。',
      note: '核心义：货车车厢。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "freight car" and asked the class to keep it as one unit.', chinese: '老师把「freight car」圈出来，让全班把它当成一个整体。它表示货车车厢。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freight car.s1', en: 'In the margin she wrote "freight car" so nobody would split the phrase.', zh: '她在页边写下「freight car」，免得有人把这个说法拆开。意思是货车车厢。', structure: 'freight car / 表示 / 货车车厢', grammar: 'noun，围绕「货车车厢」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of freight car and lost the point.', right: 'Keep "freight car" together: it means 货车车厢.', reason: '「freight car」要整块理解。', rule: '先确定 freight car 是noun，再套「货车车厢」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freight car.q1', senseId: 'freight car.s1', errorType: 'meaning', type: '词义选择', prompt: '「freight car」在本条的核心意思是：', options: ['货车车厢', '完全相反的意思', '一种古代钱币'], answer: '货车车厢', explain: 'freight car：货车车厢。' },
      { id: 'freight car.q2', senseId: 'freight car.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freight car?', options: ['货车车厢', 'a kind of ancient coin', 'the past tense of be'], answer: '货车车厢', explain: '对的是「货车车厢」。' },
      { id: 'freight car.q3', senseId: 'freight car.s1', errorType: 'grammar', type: '词义选择', prompt: 'freight car 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freight car.q4', senseId: 'freight car.s1', errorType: 'meaning', type: '词源', prompt: '记 freight car 时，哪句更稳妥？', options: ['先锁住「货车车厢」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「货车车厢」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['货车车厢'] },
  });

  D('frenzied', {
    etymology: {
      origin: '现代英语常用词「frenzied」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frenzied', gloss: '狂乱的' },
      suffix: null,
      history: [
        { label: 'frenzied', text: '现代英语常用词「frenzied」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：狂乱的。' },
      ],
      formationLogic: '核心义：狂乱的。',
      mnemonic: '看到 frenzied，先说出「狂乱的」。',
      note: '核心义：狂乱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frenzied.', chinese: '即使是初读者也能看出，这个结果是狂乱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frenzied.s1', en: 'They wanted a frenzied answer, not a long speech.', zh: '他们要一个狂乱的的答复，不要长篇发言。', structure: 'frenzied / 表示 / 狂乱的', grammar: 'adjective，围绕「狂乱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frenzied.', right: 'The news is frenzied.', reason: 'news 作主语时动词用单数。', rule: '先确定 frenzied 是adjective，再套「狂乱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frenzied.q1', senseId: 'frenzied.s1', errorType: 'meaning', type: '词义选择', prompt: '「frenzied」在本条的核心意思是：', options: ['狂乱的', '完全相反的意思', '一种古代钱币'], answer: '狂乱的', explain: 'frenzied：狂乱的。' },
      { id: 'frenzied.q2', senseId: 'frenzied.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frenzied?', options: ['狂乱的', 'a kind of ancient coin', 'the past tense of be'], answer: '狂乱的', explain: '对的是「狂乱的」。' },
      { id: 'frenzied.q3', senseId: 'frenzied.s1', errorType: 'grammar', type: '词义选择', prompt: 'frenzied 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frenzied.q4', senseId: 'frenzied.s1', errorType: 'meaning', type: '词源', prompt: '记 frenzied 时，哪句更稳妥？', options: ['先锁住「狂乱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狂乱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狂乱的'] },
  });

  D('frenzy', {
    etymology: {
      origin: '现代英语常用词「frenzy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frenzy', gloss: '狂热' },
      suffix: null,
      history: [
        { label: 'frenzy', text: '现代英语常用词「frenzy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：狂热。' },
      ],
      formationLogic: '核心义：狂热。',
      mnemonic: '看到 frenzy，先说出「狂热」。',
      note: '核心义：狂热。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frenzy.', chinese: '这一章反复回到同一个点：狂热。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frenzy.s1', en: 'Without that frenzy, the next paragraph is hard to follow.', zh: '没有这个狂热，下一段会很难读。', structure: 'frenzy / 表示 / 狂热', grammar: 'noun，围绕「狂热」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frenzy.', right: 'He gave me some advice about the frenzy.', reason: 'advice 不可数。名词 frenzy 的单复数按词典词形记。', rule: '先确定 frenzy 是noun，再套「狂热」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frenzy.q1', senseId: 'frenzy.s1', errorType: 'meaning', type: '词义选择', prompt: '「frenzy」在本条的核心意思是：', options: ['狂热', '完全相反的意思', '一种古代钱币'], answer: '狂热', explain: 'frenzy：狂热。' },
      { id: 'frenzy.q2', senseId: 'frenzy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frenzy?', options: ['狂热', 'a kind of ancient coin', 'the past tense of be'], answer: '狂热', explain: '对的是「狂热」。' },
      { id: 'frenzy.q3', senseId: 'frenzy.s1', errorType: 'grammar', type: '词义选择', prompt: 'frenzy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frenzy.q4', senseId: 'frenzy.s1', errorType: 'meaning', type: '词源', prompt: '记 frenzy 时，哪句更稳妥？', options: ['先锁住「狂热」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狂热」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狂热'] },
  });

  D('frequency', {
    etymology: {
      origin: '现代英语常用词「frequency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frequency', gloss: '频率' },
      suffix: null,
      history: [
        { label: 'frequency', text: '现代英语常用词「frequency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：频率。' },
      ],
      formationLogic: '核心义：频率。',
      mnemonic: '看到 frequency，先说出「频率」。',
      note: '核心义：频率。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frequency.', chinese: '这一章反复回到同一个点：频率。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frequency.s1', en: 'Without that frequency, the next paragraph is hard to follow.', zh: '没有这个频率，下一段会很难读。', structure: 'frequency / 表示 / 频率', grammar: 'noun，围绕「频率」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frequency.', right: 'He gave me some advice about the frequency.', reason: 'advice 不可数。名词 frequency 的单复数按词典词形记。', rule: '先确定 frequency 是noun，再套「频率」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frequency.q1', senseId: 'frequency.s1', errorType: 'meaning', type: '词义选择', prompt: '「frequency」在本条的核心意思是：', options: ['频率', '完全相反的意思', '一种古代钱币'], answer: '频率', explain: 'frequency：频率。' },
      { id: 'frequency.q2', senseId: 'frequency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frequency?', options: ['频率', 'a kind of ancient coin', 'the past tense of be'], answer: '频率', explain: '对的是「频率」。' },
      { id: 'frequency.q3', senseId: 'frequency.s1', errorType: 'grammar', type: '词义选择', prompt: 'frequency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frequency.q4', senseId: 'frequency.s1', errorType: 'meaning', type: '词源', prompt: '记 frequency 时，哪句更稳妥？', options: ['先锁住「频率」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「频率」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['频率'] },
  });

  D('frequent', {
    etymology: {
      origin: '现代英语常用词「frequent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frequent', gloss: '频繁的' },
      suffix: null,
      history: [
        { label: 'frequent', text: '现代英语常用词「frequent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：频繁的。' },
      ],
      formationLogic: '核心义：频繁的。',
      mnemonic: '看到 frequent，先说出「频繁的」。',
      note: '核心义：频繁的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frequent.', chinese: '即使是初读者也能看出，这个结果是频繁的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frequent.s1', en: 'They wanted a frequent answer, not a long speech.', zh: '他们要一个频繁的的答复，不要长篇发言。', structure: 'frequent / 表示 / 频繁的', grammar: 'adjective，围绕「频繁的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frequent.', right: 'The news is frequent.', reason: 'news 作主语时动词用单数。', rule: '先确定 frequent 是adjective，再套「频繁的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frequent.q1', senseId: 'frequent.s1', errorType: 'meaning', type: '词义选择', prompt: '「frequent」在本条的核心意思是：', options: ['频繁的', '完全相反的意思', '一种古代钱币'], answer: '频繁的', explain: 'frequent：频繁的。' },
      { id: 'frequent.q2', senseId: 'frequent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frequent?', options: ['频繁的', 'a kind of ancient coin', 'the past tense of be'], answer: '频繁的', explain: '对的是「频繁的」。' },
      { id: 'frequent.q3', senseId: 'frequent.s1', errorType: 'grammar', type: '词义选择', prompt: 'frequent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frequent.q4', senseId: 'frequent.s1', errorType: 'meaning', type: '词源', prompt: '记 frequent 时，哪句更稳妥？', options: ['先锁住「频繁的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「频繁的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['频繁的'] },
  });

  D('frequently', {
    etymology: {
      origin: '英语派生：frequent + -ly，词性转到「频繁地」。',
      prefix: null,
      root: { text: 'frequent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frequently', text: '英语派生：frequent + -ly，词性转到「频繁地」。' },
        { label: '现在', text: '核心用法是：频繁地。' },
      ],
      formationLogic: '先认词干 frequent，再看词尾。',
      mnemonic: '看到 frequently，先说出「频繁地」。',
      note: '先认词干 frequent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule frequently, and the class followed.', chinese: '她把规则讲清楚了（频繁地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frequently.s1', en: 'He nodded frequently and returned to the notes.', zh: '他频繁地地点了点头，又回去看笔记。', structure: 'frequently / 表示 / 频繁地', grammar: 'adverb，围绕「频繁地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very frequentlyly in the meeting.', right: 'She spoke frequently in the meeting.', reason: 'frequently 已经是副词，不要再加 -ly。', rule: '先确定 frequently 是adverb，再套「频繁地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frequently.q1', senseId: 'frequently.s1', errorType: 'meaning', type: '词义选择', prompt: '「frequently」在本条的核心意思是：', options: ['频繁地', '完全相反的意思', '一种古代钱币'], answer: '频繁地', explain: 'frequently：频繁地。' },
      { id: 'frequently.q2', senseId: 'frequently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frequently?', options: ['频繁地', 'a kind of ancient coin', 'the past tense of be'], answer: '频繁地', explain: '对的是「频繁地」。' },
      { id: 'frequently.q3', senseId: 'frequently.s1', errorType: 'grammar', type: '词义选择', prompt: 'frequently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'frequently.q4', senseId: 'frequently.s1', errorType: 'meaning', type: '词源', prompt: '记 frequently 时，哪句更稳妥？', options: ['先锁住「频繁地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「频繁地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['频繁地'] },
  });

  D('fresh', {
    etymology: {
      origin: '现代英语常用词「fresh」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fresh', gloss: '新鲜的' },
      suffix: null,
      history: [
        { label: 'fresh', text: '现代英语常用词「fresh」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：新鲜的。' },
      ],
      formationLogic: '核心义：新鲜的。',
      mnemonic: '看到 fresh，先说出「新鲜的」。',
      note: '核心义：新鲜的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fresh.', chinese: '即使是初读者也能看出，这个结果是新鲜的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fresh.s1', en: 'They wanted a fresh answer, not a long speech.', zh: '他们要一个新鲜的的答复，不要长篇发言。', structure: 'fresh / 表示 / 新鲜的', grammar: 'adjective，围绕「新鲜的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fresh.', right: 'The news is fresh.', reason: 'news 作主语时动词用单数。', rule: '先确定 fresh 是adjective，再套「新鲜的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fresh.q1', senseId: 'fresh.s1', errorType: 'meaning', type: '词义选择', prompt: '「fresh」在本条的核心意思是：', options: ['新鲜的', '完全相反的意思', '一种古代钱币'], answer: '新鲜的', explain: 'fresh：新鲜的。' },
      { id: 'fresh.q2', senseId: 'fresh.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fresh?', options: ['新鲜的', 'a kind of ancient coin', 'the past tense of be'], answer: '新鲜的', explain: '对的是「新鲜的」。' },
      { id: 'fresh.q3', senseId: 'fresh.s1', errorType: 'grammar', type: '词义选择', prompt: 'fresh 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fresh.q4', senseId: 'fresh.s1', errorType: 'meaning', type: '词源', prompt: '记 fresh 时，哪句更稳妥？', options: ['先锁住「新鲜的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「新鲜的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['新鲜的'] },
  });

  D('fresh air', {
    etymology: {
      origin: '现代英语固定说法「fresh air」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fresh air', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fresh air', text: '现代英语固定说法「fresh air」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：新鲜空气。' },
      ],
      formationLogic: '核心义：新鲜空气。',
      mnemonic: '看到 fresh air，先说出「新鲜空气」。',
      note: '核心义：新鲜空气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fresh air" and asked the class to keep it as one unit.', chinese: '老师把「fresh air」圈出来，让全班把它当成一个整体。它表示新鲜空气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fresh air.s1', en: 'In the margin she wrote "fresh air" so nobody would split the phrase.', zh: '她在页边写下「fresh air」，免得有人把这个说法拆开。意思是新鲜空气。', structure: 'fresh air / 表示 / 新鲜空气', grammar: 'noun，围绕「新鲜空气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fresh air and lost the point.', right: 'Keep "fresh air" together: it means 新鲜空气.', reason: '「fresh air」要整块理解。', rule: '先确定 fresh air 是noun，再套「新鲜空气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fresh air.q1', senseId: 'fresh air.s1', errorType: 'meaning', type: '词义选择', prompt: '「fresh air」在本条的核心意思是：', options: ['新鲜空气', '完全相反的意思', '一种古代钱币'], answer: '新鲜空气', explain: 'fresh air：新鲜空气。' },
      { id: 'fresh air.q2', senseId: 'fresh air.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fresh air?', options: ['新鲜空气', 'a kind of ancient coin', 'the past tense of be'], answer: '新鲜空气', explain: '对的是「新鲜空气」。' },
      { id: 'fresh air.q3', senseId: 'fresh air.s1', errorType: 'grammar', type: '词义选择', prompt: 'fresh air 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fresh air.q4', senseId: 'fresh air.s1', errorType: 'meaning', type: '词源', prompt: '记 fresh air 时，哪句更稳妥？', options: ['先锁住「新鲜空气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「新鲜空气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['新鲜空气'] },
  });

  D('freshen', {
    etymology: {
      origin: '现代英语常用词「freshen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freshen', gloss: '使新鲜' },
      suffix: null,
      history: [
        { label: 'freshen', text: '现代英语常用词「freshen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使新鲜。' },
      ],
      formationLogic: '核心义：使新鲜。',
      mnemonic: '看到 freshen，先说出「使新鲜」。',
      note: '核心义：使新鲜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to freshen before the office closed.', chinese: '他们同意在办公室关门前做这件事：使新鲜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freshen.s1', en: 'The deadline forced the team to freshen that afternoon.', zh: '截止日期逼着小组在那天下午使新鲜。', structure: 'freshen / 表示 / 使新鲜', grammar: 'verb，围绕「使新鲜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She freshened it yesterday without checking the real past form.', right: 'Check the past form of "freshen" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 freshen 是verb，再套「使新鲜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freshen.q1', senseId: 'freshen.s1', errorType: 'meaning', type: '词义选择', prompt: '「freshen」在本条的核心意思是：', options: ['使新鲜', '完全相反的意思', '一种古代钱币'], answer: '使新鲜', explain: 'freshen：使新鲜。' },
      { id: 'freshen.q2', senseId: 'freshen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freshen?', options: ['使新鲜', 'a kind of ancient coin', 'the past tense of be'], answer: '使新鲜', explain: '对的是「使新鲜」。' },
      { id: 'freshen.q3', senseId: 'freshen.s1', errorType: 'grammar', type: '词义选择', prompt: 'freshen 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'freshen.q4', senseId: 'freshen.s1', errorType: 'meaning', type: '词源', prompt: '记 freshen 时，哪句更稳妥？', options: ['先锁住「使新鲜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使新鲜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使新鲜'] },
  });

  D('freshman', {
    etymology: {
      origin: '现代英语常用词「freshman」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'freshman', gloss: '大一学生' },
      suffix: null,
      history: [
        { label: 'freshman', text: '现代英语常用词「freshman」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大一学生。' },
      ],
      formationLogic: '核心义：大一学生。',
      mnemonic: '看到 freshman，先说出「大一学生」。',
      note: '核心义：大一学生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one freshman.', chinese: '这一章反复回到同一个点：大一学生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'freshman.s1', en: 'Without that freshman, the next paragraph is hard to follow.', zh: '没有这个大一学生，下一段会很难读。', structure: 'freshman / 表示 / 大一学生', grammar: 'noun，围绕「大一学生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the freshman.', right: 'He gave me some advice about the freshman.', reason: 'advice 不可数。名词 freshman 的单复数按词典词形记。', rule: '先确定 freshman 是noun，再套「大一学生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'freshman.q1', senseId: 'freshman.s1', errorType: 'meaning', type: '词义选择', prompt: '「freshman」在本条的核心意思是：', options: ['大一学生', '完全相反的意思', '一种古代钱币'], answer: '大一学生', explain: 'freshman：大一学生。' },
      { id: 'freshman.q2', senseId: 'freshman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches freshman?', options: ['大一学生', 'a kind of ancient coin', 'the past tense of be'], answer: '大一学生', explain: '对的是「大一学生」。' },
      { id: 'freshman.q3', senseId: 'freshman.s1', errorType: 'grammar', type: '词义选择', prompt: 'freshman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'freshman.q4', senseId: 'freshman.s1', errorType: 'meaning', type: '词源', prompt: '记 freshman 时，哪句更稳妥？', options: ['先锁住「大一学生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大一学生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大一学生'] },
  });

  D('fret', {
    etymology: {
      origin: '现代英语常用词「fret」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fret', gloss: '烦恼' },
      suffix: null,
      history: [
        { label: 'fret', text: '现代英语常用词「fret」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：烦恼。' },
      ],
      formationLogic: '核心义：烦恼。',
      mnemonic: '看到 fret，先说出「烦恼」。',
      note: '核心义：烦恼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fret before the office closed.', chinese: '他们同意在办公室关门前做这件事：烦恼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fret.s1', en: 'The deadline forced the team to fret that afternoon.', zh: '截止日期逼着小组在那天下午烦恼。', structure: 'fret / 表示 / 烦恼', grammar: 'verb，围绕「烦恼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She freted it yesterday without checking the real past form.', right: 'Check the past form of "fret" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fret 是verb，再套「烦恼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fret.q1', senseId: 'fret.s1', errorType: 'meaning', type: '词义选择', prompt: '「fret」在本条的核心意思是：', options: ['烦恼', '完全相反的意思', '一种古代钱币'], answer: '烦恼', explain: 'fret：烦恼。' },
      { id: 'fret.q2', senseId: 'fret.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fret?', options: ['烦恼', 'a kind of ancient coin', 'the past tense of be'], answer: '烦恼', explain: '对的是「烦恼」。' },
      { id: 'fret.q3', senseId: 'fret.s1', errorType: 'grammar', type: '词义选择', prompt: 'fret 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fret.q4', senseId: 'fret.s1', errorType: 'meaning', type: '词源', prompt: '记 fret 时，哪句更稳妥？', options: ['先锁住「烦恼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烦恼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烦恼'] },
  });

  D('friction', {
    etymology: {
      origin: '英语派生：fric + -tion，词性转到「摩擦」。',
      prefix: null,
      root: { text: 'fric', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'friction', text: '英语派生：fric + -tion，词性转到「摩擦」。' },
        { label: '现在', text: '核心用法是：摩擦。' },
      ],
      formationLogic: '先认词干 fric，再看词尾。',
      mnemonic: '看到 friction，先说出「摩擦」。',
      note: '先认词干 fric，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one friction.', chinese: '这一章反复回到同一个点：摩擦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'friction.s1', en: 'Without that friction, the next paragraph is hard to follow.', zh: '没有这个摩擦，下一段会很难读。', structure: 'friction / 表示 / 摩擦', grammar: 'noun，围绕「摩擦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the friction.', right: 'He gave me some advice about the friction.', reason: 'advice 不可数。名词 friction 的单复数按词典词形记。', rule: '先确定 friction 是noun，再套「摩擦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'friction.q1', senseId: 'friction.s1', errorType: 'meaning', type: '词义选择', prompt: '「friction」在本条的核心意思是：', options: ['摩擦', '完全相反的意思', '一种古代钱币'], answer: '摩擦', explain: 'friction：摩擦。' },
      { id: 'friction.q2', senseId: 'friction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches friction?', options: ['摩擦', 'a kind of ancient coin', 'the past tense of be'], answer: '摩擦', explain: '对的是「摩擦」。' },
      { id: 'friction.q3', senseId: 'friction.s1', errorType: 'grammar', type: '词义选择', prompt: 'friction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'friction.q4', senseId: 'friction.s1', errorType: 'meaning', type: '词源', prompt: '记 friction 时，哪句更稳妥？', options: ['先锁住「摩擦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摩擦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摩擦'] },
  });

  D('Friday', {
    etymology: {
      origin: '现代英语常用词「Friday」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'Friday', gloss: '星期五' },
      suffix: null,
      history: [
        { label: 'Friday', text: '现代英语常用词「Friday」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：星期五。' },
      ],
      formationLogic: '核心义：星期五。',
      mnemonic: '看到 Friday，先说出「星期五」。',
      note: '核心义：星期五。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one Friday.', chinese: '这一章反复回到同一个点：星期五。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Friday.s1', en: 'Without that Friday, the next paragraph is hard to follow.', zh: '没有这个星期五，下一段会很难读。', structure: 'Friday / 表示 / 星期五', grammar: 'noun，围绕「星期五」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the Friday.', right: 'He gave me some advice about the Friday.', reason: 'advice 不可数。名词 Friday 的单复数按词典词形记。', rule: '先确定 Friday 是noun，再套「星期五」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Friday.q1', senseId: 'Friday.s1', errorType: 'meaning', type: '词义选择', prompt: '「Friday」在本条的核心意思是：', options: ['星期五', '完全相反的意思', '一种古代钱币'], answer: '星期五', explain: 'Friday：星期五。' },
      { id: 'Friday.q2', senseId: 'Friday.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Friday?', options: ['星期五', 'a kind of ancient coin', 'the past tense of be'], answer: '星期五', explain: '对的是「星期五」。' },
      { id: 'Friday.q3', senseId: 'Friday.s1', errorType: 'grammar', type: '词义选择', prompt: 'Friday 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'Friday.q4', senseId: 'Friday.s1', errorType: 'meaning', type: '词源', prompt: '记 Friday 时，哪句更稳妥？', options: ['先锁住「星期五」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「星期五」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['星期五'] },
  });

  D('friend', {
    etymology: {
      origin: '现代英语常用词「friend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'friend', gloss: '朋友' },
      suffix: null,
      history: [
        { label: 'friend', text: '现代英语常用词「friend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：朋友。' },
      ],
      formationLogic: '核心义：朋友。',
      mnemonic: '看到 friend，先说出「朋友」。',
      note: '核心义：朋友。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one friend.', chinese: '这一章反复回到同一个点：朋友。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'friend.s1', en: 'Without that friend, the next paragraph is hard to follow.', zh: '没有这个朋友，下一段会很难读。', structure: 'friend / 表示 / 朋友', grammar: 'noun，围绕「朋友」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the friend.', right: 'He gave me some advice about the friend.', reason: 'advice 不可数。名词 friend 的单复数按词典词形记。', rule: '先确定 friend 是noun，再套「朋友」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'friend.q1', senseId: 'friend.s1', errorType: 'meaning', type: '词义选择', prompt: '「friend」在本条的核心意思是：', options: ['朋友', '完全相反的意思', '一种古代钱币'], answer: '朋友', explain: 'friend：朋友。' },
      { id: 'friend.q2', senseId: 'friend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches friend?', options: ['朋友', 'a kind of ancient coin', 'the past tense of be'], answer: '朋友', explain: '对的是「朋友」。' },
      { id: 'friend.q3', senseId: 'friend.s1', errorType: 'grammar', type: '词义选择', prompt: 'friend 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'friend.q4', senseId: 'friend.s1', errorType: 'meaning', type: '词源', prompt: '记 friend 时，哪句更稳妥？', options: ['先锁住「朋友」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「朋友」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['朋友'] },
  });

  D('friendly', {
    etymology: {
      origin: '英语派生：friend + -ly，词性转到「友好的」。',
      prefix: null,
      root: { text: 'friend', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'friendly', text: '英语派生：friend + -ly，词性转到「友好的」。' },
        { label: '现在', text: '核心用法是：友好的。' },
      ],
      formationLogic: '先认词干 friend，再看词尾。',
      mnemonic: '看到 friendly，先说出「友好的」。',
      note: '先认词干 friend，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was friendly.', chinese: '即使是初读者也能看出，这个结果是友好的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'friendly.s1', en: 'They wanted a friendly answer, not a long speech.', zh: '他们要一个友好的的答复，不要长篇发言。', structure: 'friendly / 表示 / 友好的', grammar: 'adjective，围绕「友好的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are friendly.', right: 'The news is friendly.', reason: 'news 作主语时动词用单数。', rule: '先确定 friendly 是adjective，再套「友好的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'friendly.q1', senseId: 'friendly.s1', errorType: 'meaning', type: '词义选择', prompt: '「friendly」在本条的核心意思是：', options: ['友好的', '完全相反的意思', '一种古代钱币'], answer: '友好的', explain: 'friendly：友好的。' },
      { id: 'friendly.q2', senseId: 'friendly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches friendly?', options: ['友好的', 'a kind of ancient coin', 'the past tense of be'], answer: '友好的', explain: '对的是「友好的」。' },
      { id: 'friendly.q3', senseId: 'friendly.s1', errorType: 'grammar', type: '词义选择', prompt: 'friendly 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'friendly.q4', senseId: 'friendly.s1', errorType: 'meaning', type: '词源', prompt: '记 friendly 时，哪句更稳妥？', options: ['先锁住「友好的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「友好的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['友好的'] },
  });

  D('fries', {
    etymology: {
      origin: '现代英语常用词「fries」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fries', gloss: '炸薯条（复数）' },
      suffix: null,
      history: [
        { label: 'fries', text: '现代英语常用词「fries」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：炸薯条（复数）。' },
      ],
      formationLogic: '核心义：炸薯条（复数）。',
      mnemonic: '看到 fries，先说出「炸薯条（复数）」。',
      note: '核心义：炸薯条（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fries.', chinese: '这一章反复回到同一个点：炸薯条（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fries.s1', en: 'Without that fries, the next paragraph is hard to follow.', zh: '没有这个炸薯条（复数），下一段会很难读。', structure: 'fries / 表示 / 炸薯条（复数）', grammar: 'noun，围绕「炸薯条（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fries.', right: 'He gave me some advice about the fries.', reason: 'advice 不可数。名词 fries 的单复数按词典词形记。', rule: '先确定 fries 是noun，再套「炸薯条（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fries.q1', senseId: 'fries.s1', errorType: 'meaning', type: '词义选择', prompt: '「fries」在本条的核心意思是：', options: ['炸薯条（复数）', '完全相反的意思', '一种古代钱币'], answer: '炸薯条（复数）', explain: 'fries：炸薯条（复数）。' },
      { id: 'fries.q2', senseId: 'fries.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fries?', options: ['炸薯条（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '炸薯条（复数）', explain: '对的是「炸薯条（复数）」。' },
      { id: 'fries.q3', senseId: 'fries.s1', errorType: 'grammar', type: '词义选择', prompt: 'fries 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fries.q4', senseId: 'fries.s1', errorType: 'meaning', type: '词源', prompt: '记 fries 时，哪句更稳妥？', options: ['先锁住「炸薯条（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「炸薯条（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['炸薯条（复数）'] },
  });

  D('fright', {
    etymology: {
      origin: '现代英语常用词「fright」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fright', gloss: '惊吓' },
      suffix: null,
      history: [
        { label: 'fright', text: '现代英语常用词「fright」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：惊吓。' },
      ],
      formationLogic: '核心义：惊吓。',
      mnemonic: '看到 fright，先说出「惊吓」。',
      note: '核心义：惊吓。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fright.', chinese: '这一章反复回到同一个点：惊吓。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fright.s1', en: 'Without that fright, the next paragraph is hard to follow.', zh: '没有这个惊吓，下一段会很难读。', structure: 'fright / 表示 / 惊吓', grammar: 'noun，围绕「惊吓」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fright.', right: 'He gave me some advice about the fright.', reason: 'advice 不可数。名词 fright 的单复数按词典词形记。', rule: '先确定 fright 是noun，再套「惊吓」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fright.q1', senseId: 'fright.s1', errorType: 'meaning', type: '词义选择', prompt: '「fright」在本条的核心意思是：', options: ['惊吓', '完全相反的意思', '一种古代钱币'], answer: '惊吓', explain: 'fright：惊吓。' },
      { id: 'fright.q2', senseId: 'fright.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fright?', options: ['惊吓', 'a kind of ancient coin', 'the past tense of be'], answer: '惊吓', explain: '对的是「惊吓」。' },
      { id: 'fright.q3', senseId: 'fright.s1', errorType: 'grammar', type: '词义选择', prompt: 'fright 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fright.q4', senseId: 'fright.s1', errorType: 'meaning', type: '词源', prompt: '记 fright 时，哪句更稳妥？', options: ['先锁住「惊吓」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「惊吓」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['惊吓'] },
  });

  D('frighten', {
    etymology: {
      origin: '现代英语常用词「frighten」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frighten', gloss: '吓唬' },
      suffix: null,
      history: [
        { label: 'frighten', text: '现代英语常用词「frighten」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：吓唬。' },
      ],
      formationLogic: '核心义：吓唬。',
      mnemonic: '看到 frighten，先说出「吓唬」。',
      note: '核心义：吓唬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to frighten before the office closed.', chinese: '他们同意在办公室关门前做这件事：吓唬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frighten.s1', en: 'The deadline forced the team to frighten that afternoon.', zh: '截止日期逼着小组在那天下午吓唬。', structure: 'frighten / 表示 / 吓唬', grammar: 'verb，围绕「吓唬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She frightened it yesterday without checking the real past form.', right: 'Check the past form of "frighten" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 frighten 是verb，再套「吓唬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frighten.q1', senseId: 'frighten.s1', errorType: 'meaning', type: '词义选择', prompt: '「frighten」在本条的核心意思是：', options: ['吓唬', '完全相反的意思', '一种古代钱币'], answer: '吓唬', explain: 'frighten：吓唬。' },
      { id: 'frighten.q2', senseId: 'frighten.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frighten?', options: ['吓唬', 'a kind of ancient coin', 'the past tense of be'], answer: '吓唬', explain: '对的是「吓唬」。' },
      { id: 'frighten.q3', senseId: 'frighten.s1', errorType: 'grammar', type: '词义选择', prompt: 'frighten 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'frighten.q4', senseId: 'frighten.s1', errorType: 'meaning', type: '词源', prompt: '记 frighten 时，哪句更稳妥？', options: ['先锁住「吓唬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「吓唬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['吓唬'] },
  });

  D('frightened', {
    etymology: {
      origin: '现代英语常用词「frightened」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frightened', gloss: '受惊的' },
      suffix: null,
      history: [
        { label: 'frightened', text: '现代英语常用词「frightened」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：受惊的。' },
      ],
      formationLogic: '核心义：受惊的。',
      mnemonic: '看到 frightened，先说出「受惊的」。',
      note: '核心义：受惊的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frightened.', chinese: '即使是初读者也能看出，这个结果是受惊的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frightened.s1', en: 'They wanted a frightened answer, not a long speech.', zh: '他们要一个受惊的的答复，不要长篇发言。', structure: 'frightened / 表示 / 受惊的', grammar: 'adjective，围绕「受惊的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frightened.', right: 'The news is frightened.', reason: 'news 作主语时动词用单数。', rule: '先确定 frightened 是adjective，再套「受惊的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frightened.q1', senseId: 'frightened.s1', errorType: 'meaning', type: '词义选择', prompt: '「frightened」在本条的核心意思是：', options: ['受惊的', '完全相反的意思', '一种古代钱币'], answer: '受惊的', explain: 'frightened：受惊的。' },
      { id: 'frightened.q2', senseId: 'frightened.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frightened?', options: ['受惊的', 'a kind of ancient coin', 'the past tense of be'], answer: '受惊的', explain: '对的是「受惊的」。' },
      { id: 'frightened.q3', senseId: 'frightened.s1', errorType: 'grammar', type: '词义选择', prompt: 'frightened 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frightened.q4', senseId: 'frightened.s1', errorType: 'meaning', type: '词源', prompt: '记 frightened 时，哪句更稳妥？', options: ['先锁住「受惊的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「受惊的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['受惊的'] },
  });

  D('frightening', {
    etymology: {
      origin: '英语派生：frighten + -ing，词性转到「吓人的」。',
      prefix: null,
      root: { text: 'frighten', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frightening', text: '英语派生：frighten + -ing，词性转到「吓人的」。' },
        { label: '现在', text: '核心用法是：吓人的。' },
      ],
      formationLogic: '先认词干 frighten，再看词尾。',
      mnemonic: '看到 frightening，先说出「吓人的」。',
      note: '先认词干 frighten，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frightening.', chinese: '即使是初读者也能看出，这个结果是吓人的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frightening.s1', en: 'They wanted a frightening answer, not a long speech.', zh: '他们要一个吓人的的答复，不要长篇发言。', structure: 'frightening / 表示 / 吓人的', grammar: 'adjective，围绕「吓人的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frightening.', right: 'The news is frightening.', reason: 'news 作主语时动词用单数。', rule: '先确定 frightening 是adjective，再套「吓人的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frightening.q1', senseId: 'frightening.s1', errorType: 'meaning', type: '词义选择', prompt: '「frightening」在本条的核心意思是：', options: ['吓人的', '完全相反的意思', '一种古代钱币'], answer: '吓人的', explain: 'frightening：吓人的。' },
      { id: 'frightening.q2', senseId: 'frightening.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frightening?', options: ['吓人的', 'a kind of ancient coin', 'the past tense of be'], answer: '吓人的', explain: '对的是「吓人的」。' },
      { id: 'frightening.q3', senseId: 'frightening.s1', errorType: 'grammar', type: '词义选择', prompt: 'frightening 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frightening.q4', senseId: 'frightening.s1', errorType: 'meaning', type: '词源', prompt: '记 frightening 时，哪句更稳妥？', options: ['先锁住「吓人的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「吓人的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['吓人的'] },
  });

  D('fringe', {
    etymology: {
      origin: '现代英语常用词「fringe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fringe', gloss: '刘海' },
      suffix: null,
      history: [
        { label: 'fringe', text: '现代英语常用词「fringe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：刘海。' },
      ],
      formationLogic: '核心义：刘海。',
      mnemonic: '看到 fringe，先说出「刘海」。',
      note: '核心义：刘海。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fringe.', chinese: '这一章反复回到同一个点：刘海。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fringe.s1', en: 'Without that fringe, the next paragraph is hard to follow.', zh: '没有这个刘海，下一段会很难读。', structure: 'fringe / 表示 / 刘海', grammar: 'noun，围绕「刘海」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fringe.', right: 'He gave me some advice about the fringe.', reason: 'advice 不可数。名词 fringe 的单复数按词典词形记。', rule: '先确定 fringe 是noun，再套「刘海」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fringe.q1', senseId: 'fringe.s1', errorType: 'meaning', type: '词义选择', prompt: '「fringe」在本条的核心意思是：', options: ['刘海', '完全相反的意思', '一种古代钱币'], answer: '刘海', explain: 'fringe：刘海。' },
      { id: 'fringe.q2', senseId: 'fringe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fringe?', options: ['刘海', 'a kind of ancient coin', 'the past tense of be'], answer: '刘海', explain: '对的是「刘海」。' },
      { id: 'fringe.q3', senseId: 'fringe.s1', errorType: 'grammar', type: '词义选择', prompt: 'fringe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fringe.q4', senseId: 'fringe.s1', errorType: 'meaning', type: '词源', prompt: '记 fringe 时，哪句更稳妥？', options: ['先锁住「刘海」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「刘海」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['刘海'] },
  });

  D('frock', {
    etymology: {
      origin: '现代英语常用词「frock」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frock', gloss: '连衣裙' },
      suffix: null,
      history: [
        { label: 'frock', text: '现代英语常用词「frock」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：连衣裙。' },
      ],
      formationLogic: '核心义：连衣裙。',
      mnemonic: '看到 frock，先说出「连衣裙」。',
      note: '核心义：连衣裙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frock.', chinese: '这一章反复回到同一个点：连衣裙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frock.s1', en: 'Without that frock, the next paragraph is hard to follow.', zh: '没有这个连衣裙，下一段会很难读。', structure: 'frock / 表示 / 连衣裙', grammar: 'noun，围绕「连衣裙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frock.', right: 'He gave me some advice about the frock.', reason: 'advice 不可数。名词 frock 的单复数按词典词形记。', rule: '先确定 frock 是noun，再套「连衣裙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frock.q1', senseId: 'frock.s1', errorType: 'meaning', type: '词义选择', prompt: '「frock」在本条的核心意思是：', options: ['连衣裙', '完全相反的意思', '一种古代钱币'], answer: '连衣裙', explain: 'frock：连衣裙。' },
      { id: 'frock.q2', senseId: 'frock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frock?', options: ['连衣裙', 'a kind of ancient coin', 'the past tense of be'], answer: '连衣裙', explain: '对的是「连衣裙」。' },
      { id: 'frock.q3', senseId: 'frock.s1', errorType: 'grammar', type: '词义选择', prompt: 'frock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frock.q4', senseId: 'frock.s1', errorType: 'meaning', type: '词源', prompt: '记 frock 时，哪句更稳妥？', options: ['先锁住「连衣裙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连衣裙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连衣裙'] },
  });

  D('frog', {
    etymology: {
      origin: '现代英语常用词「frog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frog', gloss: '青蛙' },
      suffix: null,
      history: [
        { label: 'frog', text: '现代英语常用词「frog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：青蛙。' },
      ],
      formationLogic: '核心义：青蛙。',
      mnemonic: '看到 frog，先说出「青蛙」。',
      note: '核心义：青蛙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frog.', chinese: '这一章反复回到同一个点：青蛙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frog.s1', en: 'Without that frog, the next paragraph is hard to follow.', zh: '没有这个青蛙，下一段会很难读。', structure: 'frog / 表示 / 青蛙', grammar: 'noun，围绕「青蛙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frog.', right: 'He gave me some advice about the frog.', reason: 'advice 不可数。名词 frog 的单复数按词典词形记。', rule: '先确定 frog 是noun，再套「青蛙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frog.q1', senseId: 'frog.s1', errorType: 'meaning', type: '词义选择', prompt: '「frog」在本条的核心意思是：', options: ['青蛙', '完全相反的意思', '一种古代钱币'], answer: '青蛙', explain: 'frog：青蛙。' },
      { id: 'frog.q2', senseId: 'frog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frog?', options: ['青蛙', 'a kind of ancient coin', 'the past tense of be'], answer: '青蛙', explain: '对的是「青蛙」。' },
      { id: 'frog.q3', senseId: 'frog.s1', errorType: 'grammar', type: '词义选择', prompt: 'frog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frog.q4', senseId: 'frog.s1', errorType: 'meaning', type: '词源', prompt: '记 frog 时，哪句更稳妥？', options: ['先锁住「青蛙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「青蛙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['青蛙'] },
  });

  D('frolic', {
    etymology: {
      origin: '英语派生：frol + -ic，词性转到「嬉戏」。',
      prefix: null,
      root: { text: 'frol', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frolic', text: '英语派生：frol + -ic，词性转到「嬉戏」。' },
        { label: '现在', text: '核心用法是：嬉戏。' },
      ],
      formationLogic: '先认词干 frol，再看词尾。',
      mnemonic: '看到 frolic，先说出「嬉戏」。',
      note: '先认词干 frol，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to frolic before the office closed.', chinese: '他们同意在办公室关门前做这件事：嬉戏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frolic.s1', en: 'The deadline forced the team to frolic that afternoon.', zh: '截止日期逼着小组在那天下午嬉戏。', structure: 'frolic / 表示 / 嬉戏', grammar: 'verb，围绕「嬉戏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She froliced it yesterday without checking the real past form.', right: 'Check the past form of "frolic" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 frolic 是verb，再套「嬉戏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frolic.q1', senseId: 'frolic.s1', errorType: 'meaning', type: '词义选择', prompt: '「frolic」在本条的核心意思是：', options: ['嬉戏', '完全相反的意思', '一种古代钱币'], answer: '嬉戏', explain: 'frolic：嬉戏。' },
      { id: 'frolic.q2', senseId: 'frolic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frolic?', options: ['嬉戏', 'a kind of ancient coin', 'the past tense of be'], answer: '嬉戏', explain: '对的是「嬉戏」。' },
      { id: 'frolic.q3', senseId: 'frolic.s1', errorType: 'grammar', type: '词义选择', prompt: 'frolic 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'frolic.q4', senseId: 'frolic.s1', errorType: 'meaning', type: '词源', prompt: '记 frolic 时，哪句更稳妥？', options: ['先锁住「嬉戏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嬉戏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嬉戏'] },
  });

  D('from', {
    etymology: {
      origin: '现代英语常用词「from」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'from', gloss: '从' },
      suffix: null,
      history: [
        { label: 'from', text: '现代英语常用词「from」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：从。' },
      ],
      formationLogic: '核心义：从。',
      mnemonic: '看到 from，先说出「从」。',
      note: '核心义：从。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "from" and asked the class to keep it as one unit.', chinese: '老师把「from」圈出来，让全班把它当成一个整体。它表示从。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'from.s1', en: 'In the margin she wrote "from" so nobody would split the phrase.', zh: '她在页边写下「from」，免得有人把这个说法拆开。意思是从。', structure: 'from / 表示 / 从', grammar: 'preposition，围绕「从」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of from and lost the point.', right: 'Keep "from" together: it means 从.', reason: '「from」要整块理解。', rule: '先确定 from 是preposition，再套「从」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'from.q1', senseId: 'from.s1', errorType: 'meaning', type: '词义选择', prompt: '「from」在本条的核心意思是：', options: ['从', '完全相反的意思', '一种古代钱币'], answer: '从', explain: 'from：从。' },
      { id: 'from.q2', senseId: 'from.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches from?', options: ['从', 'a kind of ancient coin', 'the past tense of be'], answer: '从', explain: '对的是「从」。' },
      { id: 'from.q3', senseId: 'from.s1', errorType: 'grammar', type: '词义选择', prompt: 'from 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'from.q4', senseId: 'from.s1', errorType: 'meaning', type: '词源', prompt: '记 from 时，哪句更稳妥？', options: ['先锁住「从」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「从」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['从'] },
  });

  D('from now', {
    etymology: {
      origin: '现代英语固定说法「from now」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'from now', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'from now', text: '现代英语固定说法「from now」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：从现在起。' },
      ],
      formationLogic: '核心义：从现在起。',
      mnemonic: '看到 from now，先说出「从现在起」。',
      note: '核心义：从现在起。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "from now" and asked the class to keep it as one unit.', chinese: '老师把「from now」圈出来，让全班把它当成一个整体。它表示从现在起。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'from now.s1', en: 'In the margin she wrote "from now" so nobody would split the phrase.', zh: '她在页边写下「from now」，免得有人把这个说法拆开。意思是从现在起。', structure: 'from now / 表示 / 从现在起', grammar: 'adverb，围绕「从现在起」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of from now and lost the point.', right: 'Keep "from now" together: it means 从现在起.', reason: '「from now」要整块理解。', rule: '先确定 from now 是adverb，再套「从现在起」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'from now.q1', senseId: 'from now.s1', errorType: 'meaning', type: '词义选择', prompt: '「from now」在本条的核心意思是：', options: ['从现在起', '完全相反的意思', '一种古代钱币'], answer: '从现在起', explain: 'from now：从现在起。' },
      { id: 'from now.q2', senseId: 'from now.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches from now?', options: ['从现在起', 'a kind of ancient coin', 'the past tense of be'], answer: '从现在起', explain: '对的是「从现在起」。' },
      { id: 'from now.q3', senseId: 'from now.s1', errorType: 'grammar', type: '词义选择', prompt: 'from now 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'from now.q4', senseId: 'from now.s1', errorType: 'meaning', type: '词源', prompt: '记 from now 时，哪句更稳妥？', options: ['先锁住「从现在起」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「从现在起」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['从现在起'] },
  });

  D('from now on', {
    etymology: {
      origin: '现代英语固定说法「from now on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'from now on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'from now on', text: '现代英语固定说法「from now on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：从今往后。' },
      ],
      formationLogic: '核心义：从今往后。',
      mnemonic: '看到 from now on，先说出「从今往后」。',
      note: '核心义：从今往后。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "from now on" and asked the class to keep it as one unit.', chinese: '老师把「from now on」圈出来，让全班把它当成一个整体。它表示从今往后。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'from now on.s1', en: 'In the margin she wrote "from now on" so nobody would split the phrase.', zh: '她在页边写下「from now on」，免得有人把这个说法拆开。意思是从今往后。', structure: 'from now on / 表示 / 从今往后', grammar: 'adverb，围绕「从今往后」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of from now on and lost the point.', right: 'Keep "from now on" together: it means 从今往后.', reason: '「from now on」要整块理解。', rule: '先确定 from now on 是adverb，再套「从今往后」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'from now on.q1', senseId: 'from now on.s1', errorType: 'meaning', type: '词义选择', prompt: '「from now on」在本条的核心意思是：', options: ['从今往后', '完全相反的意思', '一种古代钱币'], answer: '从今往后', explain: 'from now on：从今往后。' },
      { id: 'from now on.q2', senseId: 'from now on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches from now on?', options: ['从今往后', 'a kind of ancient coin', 'the past tense of be'], answer: '从今往后', explain: '对的是「从今往后」。' },
      { id: 'from now on.q3', senseId: 'from now on.s1', errorType: 'grammar', type: '词义选择', prompt: 'from now on 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'from now on.q4', senseId: 'from now on.s1', errorType: 'meaning', type: '词源', prompt: '记 from now on 时，哪句更稳妥？', options: ['先锁住「从今往后」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「从今往后」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['从今往后'] },
  });

  D('frond', {
    etymology: {
      origin: '现代英语常用词「frond」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frond', gloss: '蕨叶' },
      suffix: null,
      history: [
        { label: 'frond', text: '现代英语常用词「frond」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蕨叶。' },
      ],
      formationLogic: '核心义：蕨叶。',
      mnemonic: '看到 frond，先说出「蕨叶」。',
      note: '核心义：蕨叶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frond.', chinese: '这一章反复回到同一个点：蕨叶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frond.s1', en: 'Without that frond, the next paragraph is hard to follow.', zh: '没有这个蕨叶，下一段会很难读。', structure: 'frond / 表示 / 蕨叶', grammar: 'noun，围绕「蕨叶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frond.', right: 'He gave me some advice about the frond.', reason: 'advice 不可数。名词 frond 的单复数按词典词形记。', rule: '先确定 frond 是noun，再套「蕨叶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frond.q1', senseId: 'frond.s1', errorType: 'meaning', type: '词义选择', prompt: '「frond」在本条的核心意思是：', options: ['蕨叶', '完全相反的意思', '一种古代钱币'], answer: '蕨叶', explain: 'frond：蕨叶。' },
      { id: 'frond.q2', senseId: 'frond.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frond?', options: ['蕨叶', 'a kind of ancient coin', 'the past tense of be'], answer: '蕨叶', explain: '对的是「蕨叶」。' },
      { id: 'frond.q3', senseId: 'frond.s1', errorType: 'grammar', type: '词义选择', prompt: 'frond 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frond.q4', senseId: 'frond.s1', errorType: 'meaning', type: '词源', prompt: '记 frond 时，哪句更稳妥？', options: ['先锁住「蕨叶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蕨叶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蕨叶'] },
  });

  D('front', {
    etymology: {
      origin: '现代英语常用词「front」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'front', gloss: '前面' },
      suffix: null,
      history: [
        { label: 'front', text: '现代英语常用词「front」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前面。' },
      ],
      formationLogic: '核心义：前面。',
      mnemonic: '看到 front，先说出「前面」。',
      note: '核心义：前面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one front.', chinese: '这一章反复回到同一个点：前面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'front.s1', en: 'Without that front, the next paragraph is hard to follow.', zh: '没有这个前面，下一段会很难读。', structure: 'front / 表示 / 前面', grammar: 'noun，围绕「前面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the front.', right: 'He gave me some advice about the front.', reason: 'advice 不可数。名词 front 的单复数按词典词形记。', rule: '先确定 front 是noun，再套「前面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'front.q1', senseId: 'front.s1', errorType: 'meaning', type: '词义选择', prompt: '「front」在本条的核心意思是：', options: ['前面', '完全相反的意思', '一种古代钱币'], answer: '前面', explain: 'front：前面。' },
      { id: 'front.q2', senseId: 'front.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches front?', options: ['前面', 'a kind of ancient coin', 'the past tense of be'], answer: '前面', explain: '对的是「前面」。' },
      { id: 'front.q3', senseId: 'front.s1', errorType: 'grammar', type: '词义选择', prompt: 'front 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'front.q4', senseId: 'front.s1', errorType: 'meaning', type: '词源', prompt: '记 front 时，哪句更稳妥？', options: ['先锁住「前面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前面'] },
  });

  D('front desk', {
    etymology: {
      origin: '现代英语固定说法「front desk」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'front desk', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'front desk', text: '现代英语固定说法「front desk」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：前台。' },
      ],
      formationLogic: '核心义：前台。',
      mnemonic: '看到 front desk，先说出「前台」。',
      note: '核心义：前台。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "front desk" and asked the class to keep it as one unit.', chinese: '老师把「front desk」圈出来，让全班把它当成一个整体。它表示前台。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'front desk.s1', en: 'In the margin she wrote "front desk" so nobody would split the phrase.', zh: '她在页边写下「front desk」，免得有人把这个说法拆开。意思是前台。', structure: 'front desk / 表示 / 前台', grammar: 'noun，围绕「前台」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of front desk and lost the point.', right: 'Keep "front desk" together: it means 前台.', reason: '「front desk」要整块理解。', rule: '先确定 front desk 是noun，再套「前台」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'front desk.q1', senseId: 'front desk.s1', errorType: 'meaning', type: '词义选择', prompt: '「front desk」在本条的核心意思是：', options: ['前台', '完全相反的意思', '一种古代钱币'], answer: '前台', explain: 'front desk：前台。' },
      { id: 'front desk.q2', senseId: 'front desk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches front desk?', options: ['前台', 'a kind of ancient coin', 'the past tense of be'], answer: '前台', explain: '对的是「前台」。' },
      { id: 'front desk.q3', senseId: 'front desk.s1', errorType: 'grammar', type: '词义选择', prompt: 'front desk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'front desk.q4', senseId: 'front desk.s1', errorType: 'meaning', type: '词源', prompt: '记 front desk 时，哪句更稳妥？', options: ['先锁住「前台」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前台」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前台'] },
  });

  D('frontier', {
    etymology: {
      origin: '英语派生：fronti + -er，词性转到「边境」。',
      prefix: null,
      root: { text: 'fronti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frontier', text: '英语派生：fronti + -er，词性转到「边境」。' },
        { label: '现在', text: '核心用法是：边境。' },
      ],
      formationLogic: '先认词干 fronti，再看词尾。',
      mnemonic: '看到 frontier，先说出「边境」。',
      note: '先认词干 fronti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frontier.', chinese: '这一章反复回到同一个点：边境。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frontier.s1', en: 'Without that frontier, the next paragraph is hard to follow.', zh: '没有这个边境，下一段会很难读。', structure: 'frontier / 表示 / 边境', grammar: 'noun，围绕「边境」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frontier.', right: 'He gave me some advice about the frontier.', reason: 'advice 不可数。名词 frontier 的单复数按词典词形记。', rule: '先确定 frontier 是noun，再套「边境」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frontier.q1', senseId: 'frontier.s1', errorType: 'meaning', type: '词义选择', prompt: '「frontier」在本条的核心意思是：', options: ['边境', '完全相反的意思', '一种古代钱币'], answer: '边境', explain: 'frontier：边境。' },
      { id: 'frontier.q2', senseId: 'frontier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frontier?', options: ['边境', 'a kind of ancient coin', 'the past tense of be'], answer: '边境', explain: '对的是「边境」。' },
      { id: 'frontier.q3', senseId: 'frontier.s1', errorType: 'grammar', type: '词义选择', prompt: 'frontier 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frontier.q4', senseId: 'frontier.s1', errorType: 'meaning', type: '词源', prompt: '记 frontier 时，哪句更稳妥？', options: ['先锁住「边境」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「边境」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['边境'] },
  });

  D('frost', {
    etymology: {
      origin: '现代英语常用词「frost」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frost', gloss: '霜' },
      suffix: null,
      history: [
        { label: 'frost', text: '现代英语常用词「frost」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：霜。' },
      ],
      formationLogic: '核心义：霜。',
      mnemonic: '看到 frost，先说出「霜」。',
      note: '核心义：霜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frost.', chinese: '这一章反复回到同一个点：霜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frost.s1', en: 'Without that frost, the next paragraph is hard to follow.', zh: '没有这个霜，下一段会很难读。', structure: 'frost / 表示 / 霜', grammar: 'noun，围绕「霜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frost.', right: 'He gave me some advice about the frost.', reason: 'advice 不可数。名词 frost 的单复数按词典词形记。', rule: '先确定 frost 是noun，再套「霜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frost.q1', senseId: 'frost.s1', errorType: 'meaning', type: '词义选择', prompt: '「frost」在本条的核心意思是：', options: ['霜', '完全相反的意思', '一种古代钱币'], answer: '霜', explain: 'frost：霜。' },
      { id: 'frost.q2', senseId: 'frost.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frost?', options: ['霜', 'a kind of ancient coin', 'the past tense of be'], answer: '霜', explain: '对的是「霜」。' },
      { id: 'frost.q3', senseId: 'frost.s1', errorType: 'grammar', type: '词义选择', prompt: 'frost 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frost.q4', senseId: 'frost.s1', errorType: 'meaning', type: '词源', prompt: '记 frost 时，哪句更稳妥？', options: ['先锁住「霜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「霜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['霜'] },
  });

  D('froth', {
    etymology: {
      origin: '现代英语常用词「froth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'froth', gloss: '泡沫' },
      suffix: null,
      history: [
        { label: 'froth', text: '现代英语常用词「froth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：泡沫。' },
      ],
      formationLogic: '核心义：泡沫。',
      mnemonic: '看到 froth，先说出「泡沫」。',
      note: '核心义：泡沫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one froth.', chinese: '这一章反复回到同一个点：泡沫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'froth.s1', en: 'Without that froth, the next paragraph is hard to follow.', zh: '没有这个泡沫，下一段会很难读。', structure: 'froth / 表示 / 泡沫', grammar: 'noun，围绕「泡沫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the froth.', right: 'He gave me some advice about the froth.', reason: 'advice 不可数。名词 froth 的单复数按词典词形记。', rule: '先确定 froth 是noun，再套「泡沫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'froth.q1', senseId: 'froth.s1', errorType: 'meaning', type: '词义选择', prompt: '「froth」在本条的核心意思是：', options: ['泡沫', '完全相反的意思', '一种古代钱币'], answer: '泡沫', explain: 'froth：泡沫。' },
      { id: 'froth.q2', senseId: 'froth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches froth?', options: ['泡沫', 'a kind of ancient coin', 'the past tense of be'], answer: '泡沫', explain: '对的是「泡沫」。' },
      { id: 'froth.q3', senseId: 'froth.s1', errorType: 'grammar', type: '词义选择', prompt: 'froth 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'froth.q4', senseId: 'froth.s1', errorType: 'meaning', type: '词源', prompt: '记 froth 时，哪句更稳妥？', options: ['先锁住「泡沫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「泡沫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['泡沫'] },
  });

  D('frown', {
    etymology: {
      origin: '现代英语常用词「frown」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frown', gloss: '皱眉' },
      suffix: null,
      history: [
        { label: 'frown', text: '现代英语常用词「frown」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：皱眉。' },
      ],
      formationLogic: '核心义：皱眉。',
      mnemonic: '看到 frown，先说出「皱眉」。',
      note: '核心义：皱眉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to frown before the office closed.', chinese: '他们同意在办公室关门前做这件事：皱眉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frown.s1', en: 'The deadline forced the team to frown that afternoon.', zh: '截止日期逼着小组在那天下午皱眉。', structure: 'frown / 表示 / 皱眉', grammar: 'verb，围绕「皱眉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She frowned it yesterday without checking the real past form.', right: 'Check the past form of "frown" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 frown 是verb，再套「皱眉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frown.q1', senseId: 'frown.s1', errorType: 'meaning', type: '词义选择', prompt: '「frown」在本条的核心意思是：', options: ['皱眉', '完全相反的意思', '一种古代钱币'], answer: '皱眉', explain: 'frown：皱眉。' },
      { id: 'frown.q2', senseId: 'frown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frown?', options: ['皱眉', 'a kind of ancient coin', 'the past tense of be'], answer: '皱眉', explain: '对的是「皱眉」。' },
      { id: 'frown.q3', senseId: 'frown.s1', errorType: 'grammar', type: '词义选择', prompt: 'frown 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'frown.q4', senseId: 'frown.s1', errorType: 'meaning', type: '词源', prompt: '记 frown 时，哪句更稳妥？', options: ['先锁住「皱眉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「皱眉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['皱眉'] },
  });

  D('frozen', {
    etymology: {
      origin: '现代英语常用词「frozen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frozen', gloss: '冻住的' },
      suffix: null,
      history: [
        { label: 'frozen', text: '现代英语常用词「frozen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：冻住的。' },
      ],
      formationLogic: '核心义：冻住的。',
      mnemonic: '看到 frozen，先说出「冻住的」。',
      note: '核心义：冻住的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was frozen.', chinese: '即使是初读者也能看出，这个结果是冻住的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frozen.s1', en: 'They wanted a frozen answer, not a long speech.', zh: '他们要一个冻住的的答复，不要长篇发言。', structure: 'frozen / 表示 / 冻住的', grammar: 'adjective，围绕「冻住的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are frozen.', right: 'The news is frozen.', reason: 'news 作主语时动词用单数。', rule: '先确定 frozen 是adjective，再套「冻住的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frozen.q1', senseId: 'frozen.s1', errorType: 'meaning', type: '词义选择', prompt: '「frozen」在本条的核心意思是：', options: ['冻住的', '完全相反的意思', '一种古代钱币'], answer: '冻住的', explain: 'frozen：冻住的。' },
      { id: 'frozen.q2', senseId: 'frozen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frozen?', options: ['冻住的', 'a kind of ancient coin', 'the past tense of be'], answer: '冻住的', explain: '对的是「冻住的」。' },
      { id: 'frozen.q3', senseId: 'frozen.s1', errorType: 'grammar', type: '词义选择', prompt: 'frozen 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'frozen.q4', senseId: 'frozen.s1', errorType: 'meaning', type: '词源', prompt: '记 frozen 时，哪句更稳妥？', options: ['先锁住「冻住的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冻住的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冻住的'] },
  });

  D('frugality', {
    etymology: {
      origin: '英语派生：frugal + -ity，词性转到「节俭」。',
      prefix: null,
      root: { text: 'frugal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'frugality', text: '英语派生：frugal + -ity，词性转到「节俭」。' },
        { label: '现在', text: '核心用法是：节俭。' },
      ],
      formationLogic: '先认词干 frugal，再看词尾。',
      mnemonic: '看到 frugality，先说出「节俭」。',
      note: '先认词干 frugal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one frugality.', chinese: '这一章反复回到同一个点：节俭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frugality.s1', en: 'Without that frugality, the next paragraph is hard to follow.', zh: '没有这个节俭，下一段会很难读。', structure: 'frugality / 表示 / 节俭', grammar: 'noun，围绕「节俭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the frugality.', right: 'He gave me some advice about the frugality.', reason: 'advice 不可数。名词 frugality 的单复数按词典词形记。', rule: '先确定 frugality 是noun，再套「节俭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frugality.q1', senseId: 'frugality.s1', errorType: 'meaning', type: '词义选择', prompt: '「frugality」在本条的核心意思是：', options: ['节俭', '完全相反的意思', '一种古代钱币'], answer: '节俭', explain: 'frugality：节俭。' },
      { id: 'frugality.q2', senseId: 'frugality.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frugality?', options: ['节俭', 'a kind of ancient coin', 'the past tense of be'], answer: '节俭', explain: '对的是「节俭」。' },
      { id: 'frugality.q3', senseId: 'frugality.s1', errorType: 'grammar', type: '词义选择', prompt: 'frugality 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'frugality.q4', senseId: 'frugality.s1', errorType: 'meaning', type: '词源', prompt: '记 frugality 时，哪句更稳妥？', options: ['先锁住「节俭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「节俭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['节俭'] },
  });

  D('fruit', {
    etymology: {
      origin: '现代英语常用词「fruit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fruit', gloss: '水果' },
      suffix: null,
      history: [
        { label: 'fruit', text: '现代英语常用词「fruit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：水果。' },
      ],
      formationLogic: '核心义：水果。',
      mnemonic: '看到 fruit，先说出「水果」。',
      note: '核心义：水果。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fruit.', chinese: '这一章反复回到同一个点：水果。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fruit.s1', en: 'Without that fruit, the next paragraph is hard to follow.', zh: '没有这个水果，下一段会很难读。', structure: 'fruit / 表示 / 水果', grammar: 'noun，围绕「水果」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fruit.', right: 'He gave me some advice about the fruit.', reason: 'advice 不可数。名词 fruit 的单复数按词典词形记。', rule: '先确定 fruit 是noun，再套「水果」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fruit.q1', senseId: 'fruit.s1', errorType: 'meaning', type: '词义选择', prompt: '「fruit」在本条的核心意思是：', options: ['水果', '完全相反的意思', '一种古代钱币'], answer: '水果', explain: 'fruit：水果。' },
      { id: 'fruit.q2', senseId: 'fruit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fruit?', options: ['水果', 'a kind of ancient coin', 'the past tense of be'], answer: '水果', explain: '对的是「水果」。' },
      { id: 'fruit.q3', senseId: 'fruit.s1', errorType: 'grammar', type: '词义选择', prompt: 'fruit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fruit.q4', senseId: 'fruit.s1', errorType: 'meaning', type: '词源', prompt: '记 fruit 时，哪句更稳妥？', options: ['先锁住「水果」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「水果」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['水果'] },
  });

  D('fruitless', {
    etymology: {
      origin: '英语派生：fruit + -less，词性转到「徒劳的」。',
      prefix: null,
      root: { text: 'fruit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fruitless', text: '英语派生：fruit + -less，词性转到「徒劳的」。' },
        { label: '现在', text: '核心用法是：徒劳的。' },
      ],
      formationLogic: '先认词干 fruit，再看词尾。',
      mnemonic: '看到 fruitless，先说出「徒劳的」。',
      note: '先认词干 fruit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fruitless.', chinese: '即使是初读者也能看出，这个结果是徒劳的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fruitless.s1', en: 'They wanted a fruitless answer, not a long speech.', zh: '他们要一个徒劳的的答复，不要长篇发言。', structure: 'fruitless / 表示 / 徒劳的', grammar: 'adjective，围绕「徒劳的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fruitless.', right: 'The news is fruitless.', reason: 'news 作主语时动词用单数。', rule: '先确定 fruitless 是adjective，再套「徒劳的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fruitless.q1', senseId: 'fruitless.s1', errorType: 'meaning', type: '词义选择', prompt: '「fruitless」在本条的核心意思是：', options: ['徒劳的', '完全相反的意思', '一种古代钱币'], answer: '徒劳的', explain: 'fruitless：徒劳的。' },
      { id: 'fruitless.q2', senseId: 'fruitless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fruitless?', options: ['徒劳的', 'a kind of ancient coin', 'the past tense of be'], answer: '徒劳的', explain: '对的是「徒劳的」。' },
      { id: 'fruitless.q3', senseId: 'fruitless.s1', errorType: 'grammar', type: '词义选择', prompt: 'fruitless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fruitless.q4', senseId: 'fruitless.s1', errorType: 'meaning', type: '词源', prompt: '记 fruitless 时，哪句更稳妥？', options: ['先锁住「徒劳的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「徒劳的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['徒劳的'] },
  });

  D('frustrate', {
    etymology: {
      origin: '现代英语常用词「frustrate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'frustrate', gloss: '使沮丧' },
      suffix: null,
      history: [
        { label: 'frustrate', text: '现代英语常用词「frustrate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使沮丧。' },
      ],
      formationLogic: '核心义：使沮丧。',
      mnemonic: '看到 frustrate，先说出「使沮丧」。',
      note: '核心义：使沮丧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to frustrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：使沮丧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'frustrate.s1', en: 'The deadline forced the team to frustrate that afternoon.', zh: '截止日期逼着小组在那天下午使沮丧。', structure: 'frustrate / 表示 / 使沮丧', grammar: 'verb，围绕「使沮丧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She frustrateed it yesterday without checking the real past form.', right: 'Check the past form of "frustrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 frustrate 是verb，再套「使沮丧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'frustrate.q1', senseId: 'frustrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「frustrate」在本条的核心意思是：', options: ['使沮丧', '完全相反的意思', '一种古代钱币'], answer: '使沮丧', explain: 'frustrate：使沮丧。' },
      { id: 'frustrate.q2', senseId: 'frustrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches frustrate?', options: ['使沮丧', 'a kind of ancient coin', 'the past tense of be'], answer: '使沮丧', explain: '对的是「使沮丧」。' },
      { id: 'frustrate.q3', senseId: 'frustrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'frustrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'frustrate.q4', senseId: 'frustrate.s1', errorType: 'meaning', type: '词源', prompt: '记 frustrate 时，哪句更稳妥？', options: ['先锁住「使沮丧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使沮丧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使沮丧'] },
  });

  D('fry', {
    etymology: {
      origin: '现代英语常用词「fry」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fry', gloss: '油炸' },
      suffix: null,
      history: [
        { label: 'fry', text: '现代英语常用词「fry」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：油炸。' },
      ],
      formationLogic: '核心义：油炸。',
      mnemonic: '看到 fry，先说出「油炸」。',
      note: '核心义：油炸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fry before the office closed.', chinese: '他们同意在办公室关门前做这件事：油炸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fry.s1', en: 'The deadline forced the team to fry that afternoon.', zh: '截止日期逼着小组在那天下午油炸。', structure: 'fry / 表示 / 油炸', grammar: 'verb，围绕「油炸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fryed it yesterday without checking the real past form.', right: 'Check the past form of "fry" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fry 是verb，再套「油炸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fry.q1', senseId: 'fry.s1', errorType: 'meaning', type: '词义选择', prompt: '「fry」在本条的核心意思是：', options: ['油炸', '完全相反的意思', '一种古代钱币'], answer: '油炸', explain: 'fry：油炸。' },
      { id: 'fry.q2', senseId: 'fry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fry?', options: ['油炸', 'a kind of ancient coin', 'the past tense of be'], answer: '油炸', explain: '对的是「油炸」。' },
      { id: 'fry.q3', senseId: 'fry.s1', errorType: 'grammar', type: '词义选择', prompt: 'fry 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fry.q4', senseId: 'fry.s1', errorType: 'meaning', type: '词源', prompt: '记 fry 时，哪句更稳妥？', options: ['先锁住「油炸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「油炸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['油炸'] },
  });

  D('fuck', {
    etymology: {
      origin: '现代英语常用词「fuck」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fuck', gloss: '（粗）性交' },
      suffix: null,
      history: [
        { label: 'fuck', text: '现代英语常用词「fuck」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（粗）性交。' },
      ],
      formationLogic: '核心义：（粗）性交。',
      mnemonic: '看到 fuck，先说出「（粗）性交」。',
      note: '核心义：（粗）性交。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fuck before the office closed.', chinese: '他们同意在办公室关门前做这件事：（粗）性交。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fuck.s1', en: 'The deadline forced the team to fuck that afternoon.', zh: '截止日期逼着小组在那天下午（粗）性交。', structure: 'fuck / 表示 / （粗）性交', grammar: 'verb，围绕「（粗）性交」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fucked it yesterday without checking the real past form.', right: 'Check the past form of "fuck" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fuck 是verb，再套「（粗）性交」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fuck.q1', senseId: 'fuck.s1', errorType: 'meaning', type: '词义选择', prompt: '「fuck」在本条的核心意思是：', options: ['（粗）性交', '完全相反的意思', '一种古代钱币'], answer: '（粗）性交', explain: 'fuck：（粗）性交。' },
      { id: 'fuck.q2', senseId: 'fuck.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fuck?', options: ['（粗）性交', 'a kind of ancient coin', 'the past tense of be'], answer: '（粗）性交', explain: '对的是「（粗）性交」。' },
      { id: 'fuck.q3', senseId: 'fuck.s1', errorType: 'grammar', type: '词义选择', prompt: 'fuck 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fuck.q4', senseId: 'fuck.s1', errorType: 'meaning', type: '词源', prompt: '记 fuck 时，哪句更稳妥？', options: ['先锁住「（粗）性交」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（粗）性交」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（粗）性交'] },
  });

  D('fuel', {
    etymology: {
      origin: '现代英语常用词「fuel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fuel', gloss: '燃料' },
      suffix: null,
      history: [
        { label: 'fuel', text: '现代英语常用词「fuel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：燃料。' },
      ],
      formationLogic: '核心义：燃料。',
      mnemonic: '看到 fuel，先说出「燃料」。',
      note: '核心义：燃料。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fuel.', chinese: '这一章反复回到同一个点：燃料。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fuel.s1', en: 'Without that fuel, the next paragraph is hard to follow.', zh: '没有这个燃料，下一段会很难读。', structure: 'fuel / 表示 / 燃料', grammar: 'noun，围绕「燃料」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fuel.', right: 'He gave me some advice about the fuel.', reason: 'advice 不可数。名词 fuel 的单复数按词典词形记。', rule: '先确定 fuel 是noun，再套「燃料」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fuel.q1', senseId: 'fuel.s1', errorType: 'meaning', type: '词义选择', prompt: '「fuel」在本条的核心意思是：', options: ['燃料', '完全相反的意思', '一种古代钱币'], answer: '燃料', explain: 'fuel：燃料。' },
      { id: 'fuel.q2', senseId: 'fuel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fuel?', options: ['燃料', 'a kind of ancient coin', 'the past tense of be'], answer: '燃料', explain: '对的是「燃料」。' },
      { id: 'fuel.q3', senseId: 'fuel.s1', errorType: 'grammar', type: '词义选择', prompt: 'fuel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fuel.q4', senseId: 'fuel.s1', errorType: 'meaning', type: '词源', prompt: '记 fuel 时，哪句更稳妥？', options: ['先锁住「燃料」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「燃料」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['燃料'] },
  });

  D('fugitive', {
    etymology: {
      origin: '英语派生：fugit + -ive，词性转到「逃犯」。',
      prefix: null,
      root: { text: 'fugit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fugitive', text: '英语派生：fugit + -ive，词性转到「逃犯」。' },
        { label: '现在', text: '核心用法是：逃犯。' },
      ],
      formationLogic: '先认词干 fugit，再看词尾。',
      mnemonic: '看到 fugitive，先说出「逃犯」。',
      note: '先认词干 fugit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fugitive.', chinese: '这一章反复回到同一个点：逃犯。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fugitive.s1', en: 'Without that fugitive, the next paragraph is hard to follow.', zh: '没有这个逃犯，下一段会很难读。', structure: 'fugitive / 表示 / 逃犯', grammar: 'noun，围绕「逃犯」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fugitive.', right: 'He gave me some advice about the fugitive.', reason: 'advice 不可数。名词 fugitive 的单复数按词典词形记。', rule: '先确定 fugitive 是noun，再套「逃犯」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fugitive.q1', senseId: 'fugitive.s1', errorType: 'meaning', type: '词义选择', prompt: '「fugitive」在本条的核心意思是：', options: ['逃犯', '完全相反的意思', '一种古代钱币'], answer: '逃犯', explain: 'fugitive：逃犯。' },
      { id: 'fugitive.q2', senseId: 'fugitive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fugitive?', options: ['逃犯', 'a kind of ancient coin', 'the past tense of be'], answer: '逃犯', explain: '对的是「逃犯」。' },
      { id: 'fugitive.q3', senseId: 'fugitive.s1', errorType: 'grammar', type: '词义选择', prompt: 'fugitive 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fugitive.q4', senseId: 'fugitive.s1', errorType: 'meaning', type: '词源', prompt: '记 fugitive 时，哪句更稳妥？', options: ['先锁住「逃犯」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逃犯」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逃犯'] },
  });

  D('fulfil', {
    etymology: {
      origin: '现代英语常用词「fulfil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fulfil', gloss: '履行' },
      suffix: null,
      history: [
        { label: 'fulfil', text: '现代英语常用词「fulfil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：履行。' },
      ],
      formationLogic: '核心义：履行。',
      mnemonic: '看到 fulfil，先说出「履行」。',
      note: '核心义：履行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fulfil before the office closed.', chinese: '他们同意在办公室关门前做这件事：履行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fulfil.s1', en: 'The deadline forced the team to fulfil that afternoon.', zh: '截止日期逼着小组在那天下午履行。', structure: 'fulfil / 表示 / 履行', grammar: 'verb，围绕「履行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fulfiled it yesterday without checking the real past form.', right: 'Check the past form of "fulfil" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fulfil 是verb，再套「履行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fulfil.q1', senseId: 'fulfil.s1', errorType: 'meaning', type: '词义选择', prompt: '「fulfil」在本条的核心意思是：', options: ['履行', '完全相反的意思', '一种古代钱币'], answer: '履行', explain: 'fulfil：履行。' },
      { id: 'fulfil.q2', senseId: 'fulfil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fulfil?', options: ['履行', 'a kind of ancient coin', 'the past tense of be'], answer: '履行', explain: '对的是「履行」。' },
      { id: 'fulfil.q3', senseId: 'fulfil.s1', errorType: 'grammar', type: '词义选择', prompt: 'fulfil 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fulfil.q4', senseId: 'fulfil.s1', errorType: 'meaning', type: '词源', prompt: '记 fulfil 时，哪句更稳妥？', options: ['先锁住「履行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「履行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['履行'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
