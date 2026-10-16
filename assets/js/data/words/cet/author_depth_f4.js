/* data/words/cet/author_depth_f4.js
 * 手敲深度补丁：dimensions–downgrade（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('dimensions', {
    etymology: {
      origin: '现代英语常用词「dimensions」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dimensions', gloss: '尺寸' },
      suffix: null,
      history: [
        { label: 'dimensions', text: '现代英语常用词「dimensions」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：尺寸。' },
      ],
      formationLogic: '核心义：尺寸。',
      mnemonic: '看到 dimensions，先说出「尺寸」。',
      note: '核心义：尺寸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dimensions.', chinese: '这一章反复回到同一个点：尺寸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dimensions.s1', en: 'Without that dimensions, the next paragraph is hard to follow.', zh: '没有这个尺寸，下一段会很难读。', structure: 'dimensions / 表示 / 尺寸', grammar: 'noun，围绕「尺寸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dimensions.', right: 'He gave me some advice about the dimensions.', reason: 'advice 不可数。名词 dimensions 的单复数按词典词形记。', rule: '先确定 dimensions 是noun，再套「尺寸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dimensions.q1', senseId: 'dimensions.s1', errorType: 'meaning', type: '词义选择', prompt: '「dimensions」在本条的核心意思是：', options: ['尺寸', '完全相反的意思', '一种古代钱币'], answer: '尺寸', explain: 'dimensions：尺寸。' },
      { id: 'dimensions.q2', senseId: 'dimensions.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dimensions?', options: ['尺寸', 'a kind of ancient coin', 'the past tense of be'], answer: '尺寸', explain: '对的是「尺寸」。' },
      { id: 'dimensions.q3', senseId: 'dimensions.s1', errorType: 'grammar', type: '词义选择', prompt: 'dimensions 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dimensions.q4', senseId: 'dimensions.s1', errorType: 'meaning', type: '词源', prompt: '记 dimensions 时，哪句更稳妥？', options: ['先锁住「尺寸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尺寸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尺寸'] },
  });

  D('diminish', {
    etymology: {
      origin: '现代英语常用词「diminish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diminish', gloss: '减少' },
      suffix: null,
      history: [
        { label: 'diminish', text: '现代英语常用词「diminish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：减少。' },
      ],
      formationLogic: '核心义：减少。',
      mnemonic: '看到 diminish，先说出「减少」。',
      note: '核心义：减少。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to diminish before the office closed.', chinese: '他们同意在办公室关门前做这件事：减少。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diminish.s1', en: 'The deadline forced the team to diminish that afternoon.', zh: '截止日期逼着小组在那天下午减少。', structure: 'diminish / 表示 / 减少', grammar: 'verb，围绕「减少」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diminished it yesterday without checking the real past form.', right: 'Check the past form of "diminish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 diminish 是verb，再套「减少」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diminish.q1', senseId: 'diminish.s1', errorType: 'meaning', type: '词义选择', prompt: '「diminish」在本条的核心意思是：', options: ['减少', '完全相反的意思', '一种古代钱币'], answer: '减少', explain: 'diminish：减少。' },
      { id: 'diminish.q2', senseId: 'diminish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diminish?', options: ['减少', 'a kind of ancient coin', 'the past tense of be'], answer: '减少', explain: '对的是「减少」。' },
      { id: 'diminish.q3', senseId: 'diminish.s1', errorType: 'grammar', type: '词义选择', prompt: 'diminish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'diminish.q4', senseId: 'diminish.s1', errorType: 'meaning', type: '词源', prompt: '记 diminish 时，哪句更稳妥？', options: ['先锁住「减少」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「减少」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['减少'] },
  });

  D('dimness', {
    etymology: {
      origin: '英语派生：dim + -ness，词性转到「昏暗」。',
      prefix: null,
      root: { text: 'dim', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dimness', text: '英语派生：dim + -ness，词性转到「昏暗」。' },
        { label: '现在', text: '核心用法是：昏暗。' },
      ],
      formationLogic: '先认词干 dim，再看词尾。',
      mnemonic: '看到 dimness，先说出「昏暗」。',
      note: '先认词干 dim，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dimness.', chinese: '这一章反复回到同一个点：昏暗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dimness.s1', en: 'Without that dimness, the next paragraph is hard to follow.', zh: '没有这个昏暗，下一段会很难读。', structure: 'dimness / 表示 / 昏暗', grammar: 'noun，围绕「昏暗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dimness.', right: 'He gave me some advice about the dimness.', reason: 'advice 不可数。名词 dimness 的单复数按词典词形记。', rule: '先确定 dimness 是noun，再套「昏暗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dimness.q1', senseId: 'dimness.s1', errorType: 'meaning', type: '词义选择', prompt: '「dimness」在本条的核心意思是：', options: ['昏暗', '完全相反的意思', '一种古代钱币'], answer: '昏暗', explain: 'dimness：昏暗。' },
      { id: 'dimness.q2', senseId: 'dimness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dimness?', options: ['昏暗', 'a kind of ancient coin', 'the past tense of be'], answer: '昏暗', explain: '对的是「昏暗」。' },
      { id: 'dimness.q3', senseId: 'dimness.s1', errorType: 'grammar', type: '词义选择', prompt: 'dimness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dimness.q4', senseId: 'dimness.s1', errorType: 'meaning', type: '词源', prompt: '记 dimness 时，哪句更稳妥？', options: ['先锁住「昏暗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「昏暗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['昏暗'] },
  });

  D('din', {
    etymology: {
      origin: '现代英语常用词「din」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'din', gloss: '喧闹声' },
      suffix: null,
      history: [
        { label: 'din', text: '现代英语常用词「din」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：喧闹声。' },
      ],
      formationLogic: '核心义：喧闹声。',
      mnemonic: '看到 din，先说出「喧闹声」。',
      note: '核心义：喧闹声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one din.', chinese: '这一章反复回到同一个点：喧闹声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'din.s1', en: 'Without that din, the next paragraph is hard to follow.', zh: '没有这个喧闹声，下一段会很难读。', structure: 'din / 表示 / 喧闹声', grammar: 'noun，围绕「喧闹声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the din.', right: 'He gave me some advice about the din.', reason: 'advice 不可数。名词 din 的单复数按词典词形记。', rule: '先确定 din 是noun，再套「喧闹声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'din.q1', senseId: 'din.s1', errorType: 'meaning', type: '词义选择', prompt: '「din」在本条的核心意思是：', options: ['喧闹声', '完全相反的意思', '一种古代钱币'], answer: '喧闹声', explain: 'din：喧闹声。' },
      { id: 'din.q2', senseId: 'din.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches din?', options: ['喧闹声', 'a kind of ancient coin', 'the past tense of be'], answer: '喧闹声', explain: '对的是「喧闹声」。' },
      { id: 'din.q3', senseId: 'din.s1', errorType: 'grammar', type: '词义选择', prompt: 'din 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'din.q4', senseId: 'din.s1', errorType: 'meaning', type: '词源', prompt: '记 din 时，哪句更稳妥？', options: ['先锁住「喧闹声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喧闹声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喧闹声'] },
  });

  D('dine', {
    etymology: {
      origin: '古法语 disner。',
      prefix: null,
      root: { text: 'dine', gloss: '进餐' },
      suffix: null,
      history: [
        { label: 'dine', text: '古法语 disner。' },
        { label: '现在', text: '核心用法是：进餐。' },
      ],
      formationLogic: '考试认现在的用法：进餐。',
      mnemonic: '看到 dine，先说出「进餐」。',
      note: '考试认现在的用法：进餐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dine before the office closed.', chinese: '他们同意在办公室关门前做这件事：进餐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dine.s1', en: 'The deadline forced the team to dine that afternoon.', zh: '截止日期逼着小组在那天下午进餐。', structure: 'dine / 表示 / 进餐', grammar: 'verb，围绕「进餐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dineed it yesterday without checking the real past form.', right: 'Check the past form of "dine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dine 是verb，再套「进餐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dine.q1', senseId: 'dine.s1', errorType: 'meaning', type: '词义选择', prompt: '「dine」在本条的核心意思是：', options: ['进餐', '完全相反的意思', '一种古代钱币'], answer: '进餐', explain: 'dine：进餐。' },
      { id: 'dine.q2', senseId: 'dine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dine?', options: ['进餐', 'a kind of ancient coin', 'the past tense of be'], answer: '进餐', explain: '对的是「进餐」。' },
      { id: 'dine.q3', senseId: 'dine.s1', errorType: 'grammar', type: '词义选择', prompt: 'dine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dine.q4', senseId: 'dine.s1', errorType: 'meaning', type: '词源', prompt: '记 dine 时，哪句更稳妥？', options: ['先锁住「进餐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进餐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进餐'] },
  });

  D('diner', {
    etymology: {
      origin: '英语派生：din + -er，词性转到「（路边）小餐馆」。',
      prefix: null,
      root: { text: 'din', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'diner', text: '英语派生：din + -er，词性转到「（路边）小餐馆」。' },
        { label: '现在', text: '核心用法是：（路边）小餐馆。' },
      ],
      formationLogic: '先认词干 din，再看词尾。',
      mnemonic: '看到 diner，先说出「（路边）小餐馆」。',
      note: '先认词干 din，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diner.', chinese: '这一章反复回到同一个点：（路边）小餐馆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diner.s1', en: 'Without that diner, the next paragraph is hard to follow.', zh: '没有这个（路边）小餐馆，下一段会很难读。', structure: 'diner / 表示 / （路边）小餐馆', grammar: 'noun，围绕「（路边）小餐馆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diner.', right: 'He gave me some advice about the diner.', reason: 'advice 不可数。名词 diner 的单复数按词典词形记。', rule: '先确定 diner 是noun，再套「（路边）小餐馆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diner.q1', senseId: 'diner.s1', errorType: 'meaning', type: '词义选择', prompt: '「diner」在本条的核心意思是：', options: ['（路边）小餐馆', '完全相反的意思', '一种古代钱币'], answer: '（路边）小餐馆', explain: 'diner：（路边）小餐馆。' },
      { id: 'diner.q2', senseId: 'diner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diner?', options: ['（路边）小餐馆', 'a kind of ancient coin', 'the past tense of be'], answer: '（路边）小餐馆', explain: '对的是「（路边）小餐馆」。' },
      { id: 'diner.q3', senseId: 'diner.s1', errorType: 'grammar', type: '词义选择', prompt: 'diner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diner.q4', senseId: 'diner.s1', errorType: 'meaning', type: '词源', prompt: '记 diner 时，哪句更稳妥？', options: ['先锁住「（路边）小餐馆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（路边）小餐馆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（路边）小餐馆'] },
  });

  D('dinner', {
    etymology: {
      origin: '古法语 disner「正餐」。',
      prefix: null,
      root: { text: 'dinner', gloss: '正餐' },
      suffix: null,
      history: [
        { label: 'dinner', text: '古法语 disner「正餐」。' },
        { label: '现在', text: '核心用法是：正餐。' },
      ],
      formationLogic: '考试认现在的用法：正餐。',
      mnemonic: '看到 dinner，先说出「正餐」。',
      note: '考试认现在的用法：正餐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dinner.', chinese: '这一章反复回到同一个点：正餐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dinner.s1', en: 'Without that dinner, the next paragraph is hard to follow.', zh: '没有这个正餐，下一段会很难读。', structure: 'dinner / 表示 / 正餐', grammar: 'noun，围绕「正餐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dinner.', right: 'He gave me some advice about the dinner.', reason: 'advice 不可数。名词 dinner 的单复数按词典词形记。', rule: '先确定 dinner 是noun，再套「正餐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dinner.q1', senseId: 'dinner.s1', errorType: 'meaning', type: '词义选择', prompt: '「dinner」在本条的核心意思是：', options: ['正餐', '完全相反的意思', '一种古代钱币'], answer: '正餐', explain: 'dinner：正餐。' },
      { id: 'dinner.q2', senseId: 'dinner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dinner?', options: ['正餐', 'a kind of ancient coin', 'the past tense of be'], answer: '正餐', explain: '对的是「正餐」。' },
      { id: 'dinner.q3', senseId: 'dinner.s1', errorType: 'grammar', type: '词义选择', prompt: 'dinner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dinner.q4', senseId: 'dinner.s1', errorType: 'meaning', type: '词源', prompt: '记 dinner 时，哪句更稳妥？', options: ['先锁住「正餐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「正餐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['正餐'] },
  });

  D('dinosaur', {
    etymology: {
      origin: '现代英语常用词「dinosaur」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dinosaur', gloss: '恐龙' },
      suffix: null,
      history: [
        { label: 'dinosaur', text: '现代英语常用词「dinosaur」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：恐龙。' },
      ],
      formationLogic: '核心义：恐龙。',
      mnemonic: '看到 dinosaur，先说出「恐龙」。',
      note: '核心义：恐龙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dinosaur.', chinese: '这一章反复回到同一个点：恐龙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dinosaur.s1', en: 'Without that dinosaur, the next paragraph is hard to follow.', zh: '没有这个恐龙，下一段会很难读。', structure: 'dinosaur / 表示 / 恐龙', grammar: 'noun，围绕「恐龙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dinosaur.', right: 'He gave me some advice about the dinosaur.', reason: 'advice 不可数。名词 dinosaur 的单复数按词典词形记。', rule: '先确定 dinosaur 是noun，再套「恐龙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dinosaur.q1', senseId: 'dinosaur.s1', errorType: 'meaning', type: '词义选择', prompt: '「dinosaur」在本条的核心意思是：', options: ['恐龙', '完全相反的意思', '一种古代钱币'], answer: '恐龙', explain: 'dinosaur：恐龙。' },
      { id: 'dinosaur.q2', senseId: 'dinosaur.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dinosaur?', options: ['恐龙', 'a kind of ancient coin', 'the past tense of be'], answer: '恐龙', explain: '对的是「恐龙」。' },
      { id: 'dinosaur.q3', senseId: 'dinosaur.s1', errorType: 'grammar', type: '词义选择', prompt: 'dinosaur 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dinosaur.q4', senseId: 'dinosaur.s1', errorType: 'meaning', type: '词源', prompt: '记 dinosaur 时，哪句更稳妥？', options: ['先锁住「恐龙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「恐龙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['恐龙'] },
  });

  D('dioxide', {
    etymology: {
      origin: '现代英语常用词「dioxide」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dioxide', gloss: '二氧化物' },
      suffix: null,
      history: [
        { label: 'dioxide', text: '现代英语常用词「dioxide」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：二氧化物。' },
      ],
      formationLogic: '核心义：二氧化物。',
      mnemonic: '看到 dioxide，先说出「二氧化物」。',
      note: '核心义：二氧化物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dioxide.', chinese: '这一章反复回到同一个点：二氧化物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dioxide.s1', en: 'Without that dioxide, the next paragraph is hard to follow.', zh: '没有这个二氧化物，下一段会很难读。', structure: 'dioxide / 表示 / 二氧化物', grammar: 'noun，围绕「二氧化物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dioxide.', right: 'He gave me some advice about the dioxide.', reason: 'advice 不可数。名词 dioxide 的单复数按词典词形记。', rule: '先确定 dioxide 是noun，再套「二氧化物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dioxide.q1', senseId: 'dioxide.s1', errorType: 'meaning', type: '词义选择', prompt: '「dioxide」在本条的核心意思是：', options: ['二氧化物', '完全相反的意思', '一种古代钱币'], answer: '二氧化物', explain: 'dioxide：二氧化物。' },
      { id: 'dioxide.q2', senseId: 'dioxide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dioxide?', options: ['二氧化物', 'a kind of ancient coin', 'the past tense of be'], answer: '二氧化物', explain: '对的是「二氧化物」。' },
      { id: 'dioxide.q3', senseId: 'dioxide.s1', errorType: 'grammar', type: '词义选择', prompt: 'dioxide 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dioxide.q4', senseId: 'dioxide.s1', errorType: 'meaning', type: '词源', prompt: '记 dioxide 时，哪句更稳妥？', options: ['先锁住「二氧化物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「二氧化物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['二氧化物'] },
  });

  D('dip', {
    etymology: {
      origin: '古英语 dyppan。',
      prefix: null,
      root: { text: 'dip', gloss: '浸' },
      suffix: null,
      history: [
        { label: 'dip', text: '古英语 dyppan。' },
        { label: '现在', text: '核心用法是：浸。' },
      ],
      formationLogic: '考试认现在的用法：浸。',
      mnemonic: '看到 dip，先说出「浸」。',
      note: '考试认现在的用法：浸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dip before the office closed.', chinese: '他们同意在办公室关门前做这件事：浸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dip.s1', en: 'The deadline forced the team to dip that afternoon.', zh: '截止日期逼着小组在那天下午浸。', structure: 'dip / 表示 / 浸', grammar: 'verb，围绕「浸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diped it yesterday without checking the real past form.', right: 'Check the past form of "dip" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dip 是verb，再套「浸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dip.q1', senseId: 'dip.s1', errorType: 'meaning', type: '词义选择', prompt: '「dip」在本条的核心意思是：', options: ['浸', '完全相反的意思', '一种古代钱币'], answer: '浸', explain: 'dip：浸。' },
      { id: 'dip.q2', senseId: 'dip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dip?', options: ['浸', 'a kind of ancient coin', 'the past tense of be'], answer: '浸', explain: '对的是「浸」。' },
      { id: 'dip.q3', senseId: 'dip.s1', errorType: 'grammar', type: '词义选择', prompt: 'dip 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dip.q4', senseId: 'dip.s1', errorType: 'meaning', type: '词源', prompt: '记 dip 时，哪句更稳妥？', options: ['先锁住「浸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「浸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['浸'] },
  });

  D('diploma', {
    etymology: {
      origin: '现代英语常用词「diploma」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diploma', gloss: '文凭' },
      suffix: null,
      history: [
        { label: 'diploma', text: '现代英语常用词「diploma」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：文凭。' },
      ],
      formationLogic: '核心义：文凭。',
      mnemonic: '看到 diploma，先说出「文凭」。',
      note: '核心义：文凭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diploma.', chinese: '这一章反复回到同一个点：文凭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diploma.s1', en: 'Without that diploma, the next paragraph is hard to follow.', zh: '没有这个文凭，下一段会很难读。', structure: 'diploma / 表示 / 文凭', grammar: 'noun，围绕「文凭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diploma.', right: 'He gave me some advice about the diploma.', reason: 'advice 不可数。名词 diploma 的单复数按词典词形记。', rule: '先确定 diploma 是noun，再套「文凭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diploma.q1', senseId: 'diploma.s1', errorType: 'meaning', type: '词义选择', prompt: '「diploma」在本条的核心意思是：', options: ['文凭', '完全相反的意思', '一种古代钱币'], answer: '文凭', explain: 'diploma：文凭。' },
      { id: 'diploma.q2', senseId: 'diploma.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diploma?', options: ['文凭', 'a kind of ancient coin', 'the past tense of be'], answer: '文凭', explain: '对的是「文凭」。' },
      { id: 'diploma.q3', senseId: 'diploma.s1', errorType: 'grammar', type: '词义选择', prompt: 'diploma 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diploma.q4', senseId: 'diploma.s1', errorType: 'meaning', type: '词源', prompt: '记 diploma 时，哪句更稳妥？', options: ['先锁住「文凭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文凭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文凭'] },
  });

  D('diplomacy', {
    etymology: {
      origin: '现代英语常用词「diplomacy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diplomacy', gloss: '外交' },
      suffix: null,
      history: [
        { label: 'diplomacy', text: '现代英语常用词「diplomacy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：外交。' },
      ],
      formationLogic: '核心义：外交。',
      mnemonic: '看到 diplomacy，先说出「外交」。',
      note: '核心义：外交。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diplomacy.', chinese: '这一章反复回到同一个点：外交。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diplomacy.s1', en: 'Without that diplomacy, the next paragraph is hard to follow.', zh: '没有这个外交，下一段会很难读。', structure: 'diplomacy / 表示 / 外交', grammar: 'noun，围绕「外交」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diplomacy.', right: 'He gave me some advice about the diplomacy.', reason: 'advice 不可数。名词 diplomacy 的单复数按词典词形记。', rule: '先确定 diplomacy 是noun，再套「外交」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diplomacy.q1', senseId: 'diplomacy.s1', errorType: 'meaning', type: '词义选择', prompt: '「diplomacy」在本条的核心意思是：', options: ['外交', '完全相反的意思', '一种古代钱币'], answer: '外交', explain: 'diplomacy：外交。' },
      { id: 'diplomacy.q2', senseId: 'diplomacy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diplomacy?', options: ['外交', 'a kind of ancient coin', 'the past tense of be'], answer: '外交', explain: '对的是「外交」。' },
      { id: 'diplomacy.q3', senseId: 'diplomacy.s1', errorType: 'grammar', type: '词义选择', prompt: 'diplomacy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diplomacy.q4', senseId: 'diplomacy.s1', errorType: 'meaning', type: '词源', prompt: '记 diplomacy 时，哪句更稳妥？', options: ['先锁住「外交」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外交」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外交'] },
  });

  D('diplomat', {
    etymology: {
      origin: '法语 diplomate。外交官凭文书办事。',
      prefix: null,
      root: { text: 'diplomat', gloss: '外交官' },
      suffix: null,
      history: [
        { label: 'diplomat', text: '法语 diplomate。外交官凭文书办事。' },
        { label: '现在', text: '核心用法是：外交官。' },
      ],
      formationLogic: '考试认现在的用法：外交官。',
      mnemonic: '看到 diplomat，先说出「外交官」。',
      note: '考试认现在的用法：外交官。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diplomat.', chinese: '这一章反复回到同一个点：外交官。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diplomat.s1', en: 'Without that diplomat, the next paragraph is hard to follow.', zh: '没有这个外交官，下一段会很难读。', structure: 'diplomat / 表示 / 外交官', grammar: 'noun，围绕「外交官」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diplomat.', right: 'He gave me some advice about the diplomat.', reason: 'advice 不可数。名词 diplomat 的单复数按词典词形记。', rule: '先确定 diplomat 是noun，再套「外交官」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diplomat.q1', senseId: 'diplomat.s1', errorType: 'meaning', type: '词义选择', prompt: '「diplomat」在本条的核心意思是：', options: ['外交官', '完全相反的意思', '一种古代钱币'], answer: '外交官', explain: 'diplomat：外交官。' },
      { id: 'diplomat.q2', senseId: 'diplomat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diplomat?', options: ['外交官', 'a kind of ancient coin', 'the past tense of be'], answer: '外交官', explain: '对的是「外交官」。' },
      { id: 'diplomat.q3', senseId: 'diplomat.s1', errorType: 'grammar', type: '词义选择', prompt: 'diplomat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diplomat.q4', senseId: 'diplomat.s1', errorType: 'meaning', type: '词源', prompt: '记 diplomat 时，哪句更稳妥？', options: ['先锁住「外交官」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外交官」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外交官'] },
  });

  D('diplomatic', {
    etymology: {
      origin: '英语派生：diplomat + -ic，词性转到「外交的」。',
      prefix: null,
      root: { text: 'diplomat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'diplomatic', text: '英语派生：diplomat + -ic，词性转到「外交的」。' },
        { label: '现在', text: '核心用法是：外交的。' },
      ],
      formationLogic: '先认词干 diplomat，再看词尾。',
      mnemonic: '看到 diplomatic，先说出「外交的」。',
      note: '先认词干 diplomat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was diplomatic.', chinese: '即使是初读者也能看出，这个结果是外交的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diplomatic.s1', en: 'They wanted a diplomatic answer, not a long speech.', zh: '他们要一个外交的的答复，不要长篇发言。', structure: 'diplomatic / 表示 / 外交的', grammar: 'adjective，围绕「外交的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are diplomatic.', right: 'The news is diplomatic.', reason: 'news 作主语时动词用单数。', rule: '先确定 diplomatic 是adjective，再套「外交的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diplomatic.q1', senseId: 'diplomatic.s1', errorType: 'meaning', type: '词义选择', prompt: '「diplomatic」在本条的核心意思是：', options: ['外交的', '完全相反的意思', '一种古代钱币'], answer: '外交的', explain: 'diplomatic：外交的。' },
      { id: 'diplomatic.q2', senseId: 'diplomatic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diplomatic?', options: ['外交的', 'a kind of ancient coin', 'the past tense of be'], answer: '外交的', explain: '对的是「外交的」。' },
      { id: 'diplomatic.q3', senseId: 'diplomatic.s1', errorType: 'grammar', type: '词义选择', prompt: 'diplomatic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'diplomatic.q4', senseId: 'diplomatic.s1', errorType: 'meaning', type: '词源', prompt: '记 diplomatic 时，哪句更稳妥？', options: ['先锁住「外交的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外交的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外交的'] },
  });

  D('direct', {
    etymology: {
      origin: '拉丁语 dirigere「使直、引导」，regere。',
      prefix: null,
      root: { text: 'direct', gloss: '直接的' },
      suffix: null,
      history: [
        { label: 'direct', text: '拉丁语 dirigere「使直、引导」，regere。' },
        { label: '现在', text: '核心用法是：直接的。' },
      ],
      formationLogic: '考试认现在的用法：直接的。',
      mnemonic: '看到 direct，先说出「直接的」。',
      note: '考试认现在的用法：直接的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was direct.', chinese: '即使是初读者也能看出，这个结果是直接的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'direct.s1', en: 'They wanted a direct answer, not a long speech.', zh: '他们要一个直接的的答复，不要长篇发言。', structure: 'direct / 表示 / 直接的', grammar: 'adjective，围绕「直接的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are direct.', right: 'The news is direct.', reason: 'news 作主语时动词用单数。', rule: '先确定 direct 是adjective，再套「直接的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'direct.q1', senseId: 'direct.s1', errorType: 'meaning', type: '词义选择', prompt: '「direct」在本条的核心意思是：', options: ['直接的', '完全相反的意思', '一种古代钱币'], answer: '直接的', explain: 'direct：直接的。' },
      { id: 'direct.q2', senseId: 'direct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches direct?', options: ['直接的', 'a kind of ancient coin', 'the past tense of be'], answer: '直接的', explain: '对的是「直接的」。' },
      { id: 'direct.q3', senseId: 'direct.s1', errorType: 'grammar', type: '词义选择', prompt: 'direct 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'direct.q4', senseId: 'direct.s1', errorType: 'meaning', type: '词源', prompt: '记 direct 时，哪句更稳妥？', options: ['先锁住「直接的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「直接的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['直接的'] },
  });

  D('direction', {
    etymology: {
      origin: 'direct 的名词。',
      prefix: null,
      root: { text: 'direction', gloss: '方向' },
      suffix: null,
      history: [
        { label: 'direction', text: 'direct 的名词。' },
        { label: '现在', text: '核心用法是：方向。' },
      ],
      formationLogic: '考试认现在的用法：方向。',
      mnemonic: '看到 direction，先说出「方向」。',
      note: '考试认现在的用法：方向。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one direction.', chinese: '这一章反复回到同一个点：方向。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'direction.s1', en: 'Without that direction, the next paragraph is hard to follow.', zh: '没有这个方向，下一段会很难读。', structure: 'direction / 表示 / 方向', grammar: 'noun，围绕「方向」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the direction.', right: 'He gave me some advice about the direction.', reason: 'advice 不可数。名词 direction 的单复数按词典词形记。', rule: '先确定 direction 是noun，再套「方向」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'direction.q1', senseId: 'direction.s1', errorType: 'meaning', type: '词义选择', prompt: '「direction」在本条的核心意思是：', options: ['方向', '完全相反的意思', '一种古代钱币'], answer: '方向', explain: 'direction：方向。' },
      { id: 'direction.q2', senseId: 'direction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches direction?', options: ['方向', 'a kind of ancient coin', 'the past tense of be'], answer: '方向', explain: '对的是「方向」。' },
      { id: 'direction.q3', senseId: 'direction.s1', errorType: 'grammar', type: '词义选择', prompt: 'direction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'direction.q4', senseId: 'direction.s1', errorType: 'meaning', type: '词源', prompt: '记 direction 时，哪句更稳妥？', options: ['先锁住「方向」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「方向」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['方向'] },
  });

  D('directive', {
    etymology: {
      origin: '英语派生：direct + -ive，词性转到「指令」。',
      prefix: null,
      root: { text: 'direct', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'directive', text: '英语派生：direct + -ive，词性转到「指令」。' },
        { label: '现在', text: '核心用法是：指令。' },
      ],
      formationLogic: '先认词干 direct，再看词尾。',
      mnemonic: '看到 directive，先说出「指令」。',
      note: '先认词干 direct，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one directive.', chinese: '这一章反复回到同一个点：指令。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'directive.s1', en: 'Without that directive, the next paragraph is hard to follow.', zh: '没有这个指令，下一段会很难读。', structure: 'directive / 表示 / 指令', grammar: 'noun，围绕「指令」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the directive.', right: 'He gave me some advice about the directive.', reason: 'advice 不可数。名词 directive 的单复数按词典词形记。', rule: '先确定 directive 是noun，再套「指令」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'directive.q1', senseId: 'directive.s1', errorType: 'meaning', type: '词义选择', prompt: '「directive」在本条的核心意思是：', options: ['指令', '完全相反的意思', '一种古代钱币'], answer: '指令', explain: 'directive：指令。' },
      { id: 'directive.q2', senseId: 'directive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches directive?', options: ['指令', 'a kind of ancient coin', 'the past tense of be'], answer: '指令', explain: '对的是「指令」。' },
      { id: 'directive.q3', senseId: 'directive.s1', errorType: 'grammar', type: '词义选择', prompt: 'directive 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'directive.q4', senseId: 'directive.s1', errorType: 'meaning', type: '词源', prompt: '记 directive 时，哪句更稳妥？', options: ['先锁住「指令」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指令」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指令'] },
  });

  D('directly', {
    etymology: {
      origin: '英语派生：direct + -ly，词性转到「直接地」。',
      prefix: null,
      root: { text: 'direct', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'directly', text: '英语派生：direct + -ly，词性转到「直接地」。' },
        { label: '现在', text: '核心用法是：直接地。' },
      ],
      formationLogic: '先认词干 direct，再看词尾。',
      mnemonic: '看到 directly，先说出「直接地」。',
      note: '先认词干 direct，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule directly, and the class followed.', chinese: '她把规则讲清楚了（直接地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'directly.s1', en: 'He nodded directly and returned to the notes.', zh: '他直接地地点了点头，又回去看笔记。', structure: 'directly / 表示 / 直接地', grammar: 'adverb，围绕「直接地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very directlyly in the meeting.', right: 'She spoke directly in the meeting.', reason: 'directly 已经是副词，不要再加 -ly。', rule: '先确定 directly 是adverb，再套「直接地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'directly.q1', senseId: 'directly.s1', errorType: 'meaning', type: '词义选择', prompt: '「directly」在本条的核心意思是：', options: ['直接地', '完全相反的意思', '一种古代钱币'], answer: '直接地', explain: 'directly：直接地。' },
      { id: 'directly.q2', senseId: 'directly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches directly?', options: ['直接地', 'a kind of ancient coin', 'the past tense of be'], answer: '直接地', explain: '对的是「直接地」。' },
      { id: 'directly.q3', senseId: 'directly.s1', errorType: 'grammar', type: '词义选择', prompt: 'directly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'directly.q4', senseId: 'directly.s1', errorType: 'meaning', type: '词源', prompt: '记 directly 时，哪句更稳妥？', options: ['先锁住「直接地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「直接地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['直接地'] },
  });

  D('director', {
    etymology: {
      origin: 'direct + -or。',
      prefix: null,
      root: { text: 'director', gloss: '主任' },
      suffix: null,
      history: [
        { label: 'director', text: 'direct + -or。' },
        { label: '现在', text: '核心用法是：主任。' },
      ],
      formationLogic: '考试认现在的用法：主任。',
      mnemonic: '看到 director，先说出「主任」。',
      note: '考试认现在的用法：主任。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one director.', chinese: '这一章反复回到同一个点：主任。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'director.s1', en: 'Without that director, the next paragraph is hard to follow.', zh: '没有这个主任，下一段会很难读。', structure: 'director / 表示 / 主任', grammar: 'noun，围绕「主任」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the director.', right: 'He gave me some advice about the director.', reason: 'advice 不可数。名词 director 的单复数按词典词形记。', rule: '先确定 director 是noun，再套「主任」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'director.q1', senseId: 'director.s1', errorType: 'meaning', type: '词义选择', prompt: '「director」在本条的核心意思是：', options: ['主任', '完全相反的意思', '一种古代钱币'], answer: '主任', explain: 'director：主任。' },
      { id: 'director.q2', senseId: 'director.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches director?', options: ['主任', 'a kind of ancient coin', 'the past tense of be'], answer: '主任', explain: '对的是「主任」。' },
      { id: 'director.q3', senseId: 'director.s1', errorType: 'grammar', type: '词义选择', prompt: 'director 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'director.q4', senseId: 'director.s1', errorType: 'meaning', type: '词源', prompt: '记 director 时，哪句更稳妥？', options: ['先锁住「主任」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「主任」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['主任'] },
  });

  D('directory', {
    etymology: {
      origin: '现代英语常用词「directory」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'directory', gloss: '名录' },
      suffix: null,
      history: [
        { label: 'directory', text: '现代英语常用词「directory」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：名录。' },
      ],
      formationLogic: '核心义：名录。',
      mnemonic: '看到 directory，先说出「名录」。',
      note: '核心义：名录。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one directory.', chinese: '这一章反复回到同一个点：名录。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'directory.s1', en: 'Without that directory, the next paragraph is hard to follow.', zh: '没有这个名录，下一段会很难读。', structure: 'directory / 表示 / 名录', grammar: 'noun，围绕「名录」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the directory.', right: 'He gave me some advice about the directory.', reason: 'advice 不可数。名词 directory 的单复数按词典词形记。', rule: '先确定 directory 是noun，再套「名录」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'directory.q1', senseId: 'directory.s1', errorType: 'meaning', type: '词义选择', prompt: '「directory」在本条的核心意思是：', options: ['名录', '完全相反的意思', '一种古代钱币'], answer: '名录', explain: 'directory：名录。' },
      { id: 'directory.q2', senseId: 'directory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches directory?', options: ['名录', 'a kind of ancient coin', 'the past tense of be'], answer: '名录', explain: '对的是「名录」。' },
      { id: 'directory.q3', senseId: 'directory.s1', errorType: 'grammar', type: '词义选择', prompt: 'directory 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'directory.q4', senseId: 'directory.s1', errorType: 'meaning', type: '词源', prompt: '记 directory 时，哪句更稳妥？', options: ['先锁住「名录」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「名录」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['名录'] },
  });

  D('dirt', {
    etymology: {
      origin: '古诺斯语 drit。',
      prefix: null,
      root: { text: 'dirt', gloss: '污垢' },
      suffix: null,
      history: [
        { label: 'dirt', text: '古诺斯语 drit。' },
        { label: '现在', text: '核心用法是：污垢。' },
      ],
      formationLogic: '考试认现在的用法：污垢。',
      mnemonic: '看到 dirt，先说出「污垢」。',
      note: '考试认现在的用法：污垢。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dirt.', chinese: '这一章反复回到同一个点：污垢。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dirt.s1', en: 'Without that dirt, the next paragraph is hard to follow.', zh: '没有这个污垢，下一段会很难读。', structure: 'dirt / 表示 / 污垢', grammar: 'noun，围绕「污垢」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dirt.', right: 'He gave me some advice about the dirt.', reason: 'advice 不可数。名词 dirt 的单复数按词典词形记。', rule: '先确定 dirt 是noun，再套「污垢」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dirt.q1', senseId: 'dirt.s1', errorType: 'meaning', type: '词义选择', prompt: '「dirt」在本条的核心意思是：', options: ['污垢', '完全相反的意思', '一种古代钱币'], answer: '污垢', explain: 'dirt：污垢。' },
      { id: 'dirt.q2', senseId: 'dirt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dirt?', options: ['污垢', 'a kind of ancient coin', 'the past tense of be'], answer: '污垢', explain: '对的是「污垢」。' },
      { id: 'dirt.q3', senseId: 'dirt.s1', errorType: 'grammar', type: '词义选择', prompt: 'dirt 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dirt.q4', senseId: 'dirt.s1', errorType: 'meaning', type: '词源', prompt: '记 dirt 时，哪句更稳妥？', options: ['先锁住「污垢」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「污垢」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['污垢'] },
  });

  D('dirty', {
    etymology: {
      origin: 'dirt + -y。',
      prefix: null,
      root: { text: 'dirty', gloss: '脏的' },
      suffix: null,
      history: [
        { label: 'dirty', text: 'dirt + -y。' },
        { label: '现在', text: '核心用法是：脏的。' },
      ],
      formationLogic: '考试认现在的用法：脏的。',
      mnemonic: '看到 dirty，先说出「脏的」。',
      note: '考试认现在的用法：脏的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dirty.', chinese: '即使是初读者也能看出，这个结果是脏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dirty.s1', en: 'They wanted a dirty answer, not a long speech.', zh: '他们要一个脏的的答复，不要长篇发言。', structure: 'dirty / 表示 / 脏的', grammar: 'adjective，围绕「脏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dirty.', right: 'The news is dirty.', reason: 'news 作主语时动词用单数。', rule: '先确定 dirty 是adjective，再套「脏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dirty.q1', senseId: 'dirty.s1', errorType: 'meaning', type: '词义选择', prompt: '「dirty」在本条的核心意思是：', options: ['脏的', '完全相反的意思', '一种古代钱币'], answer: '脏的', explain: 'dirty：脏的。' },
      { id: 'dirty.q2', senseId: 'dirty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dirty?', options: ['脏的', 'a kind of ancient coin', 'the past tense of be'], answer: '脏的', explain: '对的是「脏的」。' },
      { id: 'dirty.q3', senseId: 'dirty.s1', errorType: 'grammar', type: '词义选择', prompt: 'dirty 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dirty.q4', senseId: 'dirty.s1', errorType: 'meaning', type: '词源', prompt: '记 dirty 时，哪句更稳妥？', options: ['先锁住「脏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脏的'] },
  });

  D('disability', {
    etymology: {
      origin: '英语派生：disabil + -ity，词性转到「残疾」。',
      prefix: null,
      root: { text: 'disabil', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disability', text: '英语派生：disabil + -ity，词性转到「残疾」。' },
        { label: '现在', text: '核心用法是：残疾。' },
      ],
      formationLogic: '先认词干 disabil，再看词尾。',
      mnemonic: '看到 disability，先说出「残疾」。',
      note: '先认词干 disabil，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disability.', chinese: '这一章反复回到同一个点：残疾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disability.s1', en: 'Without that disability, the next paragraph is hard to follow.', zh: '没有这个残疾，下一段会很难读。', structure: 'disability / 表示 / 残疾', grammar: 'noun，围绕「残疾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disability.', right: 'He gave me some advice about the disability.', reason: 'advice 不可数。名词 disability 的单复数按词典词形记。', rule: '先确定 disability 是noun，再套「残疾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disability.q1', senseId: 'disability.s1', errorType: 'meaning', type: '词义选择', prompt: '「disability」在本条的核心意思是：', options: ['残疾', '完全相反的意思', '一种古代钱币'], answer: '残疾', explain: 'disability：残疾。' },
      { id: 'disability.q2', senseId: 'disability.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disability?', options: ['残疾', 'a kind of ancient coin', 'the past tense of be'], answer: '残疾', explain: '对的是「残疾」。' },
      { id: 'disability.q3', senseId: 'disability.s1', errorType: 'grammar', type: '词义选择', prompt: 'disability 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disability.q4', senseId: 'disability.s1', errorType: 'meaning', type: '词源', prompt: '记 disability 时，哪句更稳妥？', options: ['先锁住「残疾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「残疾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['残疾'] },
  });

  D('disable', {
    etymology: {
      origin: '英语派生：dis + -able，词性转到「使伤残」。',
      prefix: null,
      root: { text: 'dis', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disable', text: '英语派生：dis + -able，词性转到「使伤残」。' },
        { label: '现在', text: '核心用法是：使伤残。' },
      ],
      formationLogic: '先认词干 dis，再看词尾。',
      mnemonic: '看到 disable，先说出「使伤残」。',
      note: '先认词干 dis，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disable before the office closed.', chinese: '他们同意在办公室关门前做这件事：使伤残。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disable.s1', en: 'The deadline forced the team to disable that afternoon.', zh: '截止日期逼着小组在那天下午使伤残。', structure: 'disable / 表示 / 使伤残', grammar: 'verb，围绕「使伤残」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disableed it yesterday without checking the real past form.', right: 'Check the past form of "disable" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disable 是verb，再套「使伤残」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disable.q1', senseId: 'disable.s1', errorType: 'meaning', type: '词义选择', prompt: '「disable」在本条的核心意思是：', options: ['使伤残', '完全相反的意思', '一种古代钱币'], answer: '使伤残', explain: 'disable：使伤残。' },
      { id: 'disable.q2', senseId: 'disable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disable?', options: ['使伤残', 'a kind of ancient coin', 'the past tense of be'], answer: '使伤残', explain: '对的是「使伤残」。' },
      { id: 'disable.q3', senseId: 'disable.s1', errorType: 'grammar', type: '词义选择', prompt: 'disable 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disable.q4', senseId: 'disable.s1', errorType: 'meaning', type: '词源', prompt: '记 disable 时，哪句更稳妥？', options: ['先锁住「使伤残」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使伤残」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使伤残'] },
  });

  D('disadvantage', {
    etymology: {
      origin: '现代英语常用词「disadvantage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disadvantage', gloss: '不利' },
      suffix: null,
      history: [
        { label: 'disadvantage', text: '现代英语常用词「disadvantage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不利。' },
      ],
      formationLogic: '核心义：不利。',
      mnemonic: '看到 disadvantage，先说出「不利」。',
      note: '核心义：不利。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disadvantage.', chinese: '这一章反复回到同一个点：不利。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disadvantage.s1', en: 'Without that disadvantage, the next paragraph is hard to follow.', zh: '没有这个不利，下一段会很难读。', structure: 'disadvantage / 表示 / 不利', grammar: 'noun，围绕「不利」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disadvantage.', right: 'He gave me some advice about the disadvantage.', reason: 'advice 不可数。名词 disadvantage 的单复数按词典词形记。', rule: '先确定 disadvantage 是noun，再套「不利」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disadvantage.q1', senseId: 'disadvantage.s1', errorType: 'meaning', type: '词义选择', prompt: '「disadvantage」在本条的核心意思是：', options: ['不利', '完全相反的意思', '一种古代钱币'], answer: '不利', explain: 'disadvantage：不利。' },
      { id: 'disadvantage.q2', senseId: 'disadvantage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disadvantage?', options: ['不利', 'a kind of ancient coin', 'the past tense of be'], answer: '不利', explain: '对的是「不利」。' },
      { id: 'disadvantage.q3', senseId: 'disadvantage.s1', errorType: 'grammar', type: '词义选择', prompt: 'disadvantage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disadvantage.q4', senseId: 'disadvantage.s1', errorType: 'meaning', type: '词源', prompt: '记 disadvantage 时，哪句更稳妥？', options: ['先锁住「不利」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不利」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不利'] },
  });

  D('disagree', {
    etymology: {
      origin: 'dis- + agree。',
      prefix: null,
      root: { text: 'disagree', gloss: '不同意' },
      suffix: null,
      history: [
        { label: 'disagree', text: 'dis- + agree。' },
        { label: '现在', text: '核心用法是：不同意。' },
      ],
      formationLogic: '考试认现在的用法：不同意。',
      mnemonic: '看到 disagree，先说出「不同意」。',
      note: '考试认现在的用法：不同意。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disagree before the office closed.', chinese: '他们同意在办公室关门前做这件事：不同意。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disagree.s1', en: 'The deadline forced the team to disagree that afternoon.', zh: '截止日期逼着小组在那天下午不同意。', structure: 'disagree / 表示 / 不同意', grammar: 'verb，围绕「不同意」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disagreeed it yesterday without checking the real past form.', right: 'Check the past form of "disagree" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disagree 是verb，再套「不同意」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disagree.q1', senseId: 'disagree.s1', errorType: 'meaning', type: '词义选择', prompt: '「disagree」在本条的核心意思是：', options: ['不同意', '完全相反的意思', '一种古代钱币'], answer: '不同意', explain: 'disagree：不同意。' },
      { id: 'disagree.q2', senseId: 'disagree.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disagree?', options: ['不同意', 'a kind of ancient coin', 'the past tense of be'], answer: '不同意', explain: '对的是「不同意」。' },
      { id: 'disagree.q3', senseId: 'disagree.s1', errorType: 'grammar', type: '词义选择', prompt: 'disagree 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disagree.q4', senseId: 'disagree.s1', errorType: 'meaning', type: '词源', prompt: '记 disagree 时，哪句更稳妥？', options: ['先锁住「不同意」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不同意」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不同意'] },
  });

  D('disagreement', {
    etymology: {
      origin: '英语派生：disagree + -ment，词性转到「分歧」。',
      prefix: null,
      root: { text: 'disagree', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disagreement', text: '英语派生：disagree + -ment，词性转到「分歧」。' },
        { label: '现在', text: '核心用法是：分歧。' },
      ],
      formationLogic: '先认词干 disagree，再看词尾。',
      mnemonic: '看到 disagreement，先说出「分歧」。',
      note: '先认词干 disagree，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disagreement.', chinese: '这一章反复回到同一个点：分歧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disagreement.s1', en: 'Without that disagreement, the next paragraph is hard to follow.', zh: '没有这个分歧，下一段会很难读。', structure: 'disagreement / 表示 / 分歧', grammar: 'noun，围绕「分歧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disagreement.', right: 'He gave me some advice about the disagreement.', reason: 'advice 不可数。名词 disagreement 的单复数按词典词形记。', rule: '先确定 disagreement 是noun，再套「分歧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disagreement.q1', senseId: 'disagreement.s1', errorType: 'meaning', type: '词义选择', prompt: '「disagreement」在本条的核心意思是：', options: ['分歧', '完全相反的意思', '一种古代钱币'], answer: '分歧', explain: 'disagreement：分歧。' },
      { id: 'disagreement.q2', senseId: 'disagreement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disagreement?', options: ['分歧', 'a kind of ancient coin', 'the past tense of be'], answer: '分歧', explain: '对的是「分歧」。' },
      { id: 'disagreement.q3', senseId: 'disagreement.s1', errorType: 'grammar', type: '词义选择', prompt: 'disagreement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disagreement.q4', senseId: 'disagreement.s1', errorType: 'meaning', type: '词源', prompt: '记 disagreement 时，哪句更稳妥？', options: ['先锁住「分歧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分歧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分歧'] },
  });

  D('disappear', {
    etymology: {
      origin: 'dis- + appear。',
      prefix: null,
      root: { text: 'disappear', gloss: '消失' },
      suffix: null,
      history: [
        { label: 'disappear', text: 'dis- + appear。' },
        { label: '现在', text: '核心用法是：消失。' },
      ],
      formationLogic: '考试认现在的用法：消失。',
      mnemonic: '看到 disappear，先说出「消失」。',
      note: '考试认现在的用法：消失。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disappear before the office closed.', chinese: '他们同意在办公室关门前做这件事：消失。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disappear.s1', en: 'The deadline forced the team to disappear that afternoon.', zh: '截止日期逼着小组在那天下午消失。', structure: 'disappear / 表示 / 消失', grammar: 'verb，围绕「消失」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disappeared it yesterday without checking the real past form.', right: 'Check the past form of "disappear" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disappear 是verb，再套「消失」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disappear.q1', senseId: 'disappear.s1', errorType: 'meaning', type: '词义选择', prompt: '「disappear」在本条的核心意思是：', options: ['消失', '完全相反的意思', '一种古代钱币'], answer: '消失', explain: 'disappear：消失。' },
      { id: 'disappear.q2', senseId: 'disappear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disappear?', options: ['消失', 'a kind of ancient coin', 'the past tense of be'], answer: '消失', explain: '对的是「消失」。' },
      { id: 'disappear.q3', senseId: 'disappear.s1', errorType: 'grammar', type: '词义选择', prompt: 'disappear 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disappear.q4', senseId: 'disappear.s1', errorType: 'meaning', type: '词源', prompt: '记 disappear 时，哪句更稳妥？', options: ['先锁住「消失」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消失」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消失'] },
  });

  D('disappoint', {
    etymology: {
      origin: 'dis- + appoint。没有被指派到期望的位置。',
      prefix: null,
      root: { text: 'disappoint', gloss: '使失望' },
      suffix: null,
      history: [
        { label: 'disappoint', text: 'dis- + appoint。没有被指派到期望的位置。' },
        { label: '现在', text: '核心用法是：使失望。' },
      ],
      formationLogic: '考试认现在的用法：使失望。',
      mnemonic: '看到 disappoint，先说出「使失望」。',
      note: '考试认现在的用法：使失望。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disappoint before the office closed.', chinese: '他们同意在办公室关门前做这件事：使失望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disappoint.s1', en: 'The deadline forced the team to disappoint that afternoon.', zh: '截止日期逼着小组在那天下午使失望。', structure: 'disappoint / 表示 / 使失望', grammar: 'verb，围绕「使失望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disappointed it yesterday without checking the real past form.', right: 'Check the past form of "disappoint" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disappoint 是verb，再套「使失望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disappoint.q1', senseId: 'disappoint.s1', errorType: 'meaning', type: '词义选择', prompt: '「disappoint」在本条的核心意思是：', options: ['使失望', '完全相反的意思', '一种古代钱币'], answer: '使失望', explain: 'disappoint：使失望。' },
      { id: 'disappoint.q2', senseId: 'disappoint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disappoint?', options: ['使失望', 'a kind of ancient coin', 'the past tense of be'], answer: '使失望', explain: '对的是「使失望」。' },
      { id: 'disappoint.q3', senseId: 'disappoint.s1', errorType: 'grammar', type: '词义选择', prompt: 'disappoint 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disappoint.q4', senseId: 'disappoint.s1', errorType: 'meaning', type: '词源', prompt: '记 disappoint 时，哪句更稳妥？', options: ['先锁住「使失望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使失望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使失望'] },
  });

  D('disapprove', {
    etymology: {
      origin: '现代英语常用词「disapprove」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disapprove', gloss: '不赞成' },
      suffix: null,
      history: [
        { label: 'disapprove', text: '现代英语常用词「disapprove」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不赞成。' },
      ],
      formationLogic: '核心义：不赞成。',
      mnemonic: '看到 disapprove，先说出「不赞成」。',
      note: '核心义：不赞成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disapprove before the office closed.', chinese: '他们同意在办公室关门前做这件事：不赞成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disapprove.s1', en: 'The deadline forced the team to disapprove that afternoon.', zh: '截止日期逼着小组在那天下午不赞成。', structure: 'disapprove / 表示 / 不赞成', grammar: 'verb，围绕「不赞成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disapproveed it yesterday without checking the real past form.', right: 'Check the past form of "disapprove" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disapprove 是verb，再套「不赞成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disapprove.q1', senseId: 'disapprove.s1', errorType: 'meaning', type: '词义选择', prompt: '「disapprove」在本条的核心意思是：', options: ['不赞成', '完全相反的意思', '一种古代钱币'], answer: '不赞成', explain: 'disapprove：不赞成。' },
      { id: 'disapprove.q2', senseId: 'disapprove.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disapprove?', options: ['不赞成', 'a kind of ancient coin', 'the past tense of be'], answer: '不赞成', explain: '对的是「不赞成」。' },
      { id: 'disapprove.q3', senseId: 'disapprove.s1', errorType: 'grammar', type: '词义选择', prompt: 'disapprove 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disapprove.q4', senseId: 'disapprove.s1', errorType: 'meaning', type: '词源', prompt: '记 disapprove 时，哪句更稳妥？', options: ['先锁住「不赞成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不赞成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不赞成'] },
  });

  D('disarm', {
    etymology: {
      origin: '现代英语常用词「disarm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disarm', gloss: '解除武装' },
      suffix: null,
      history: [
        { label: 'disarm', text: '现代英语常用词「disarm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解除武装。' },
      ],
      formationLogic: '核心义：解除武装。',
      mnemonic: '看到 disarm，先说出「解除武装」。',
      note: '核心义：解除武装。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disarm before the office closed.', chinese: '他们同意在办公室关门前做这件事：解除武装。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disarm.s1', en: 'The deadline forced the team to disarm that afternoon.', zh: '截止日期逼着小组在那天下午解除武装。', structure: 'disarm / 表示 / 解除武装', grammar: 'verb，围绕「解除武装」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disarmed it yesterday without checking the real past form.', right: 'Check the past form of "disarm" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disarm 是verb，再套「解除武装」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disarm.q1', senseId: 'disarm.s1', errorType: 'meaning', type: '词义选择', prompt: '「disarm」在本条的核心意思是：', options: ['解除武装', '完全相反的意思', '一种古代钱币'], answer: '解除武装', explain: 'disarm：解除武装。' },
      { id: 'disarm.q2', senseId: 'disarm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disarm?', options: ['解除武装', 'a kind of ancient coin', 'the past tense of be'], answer: '解除武装', explain: '对的是「解除武装」。' },
      { id: 'disarm.q3', senseId: 'disarm.s1', errorType: 'grammar', type: '词义选择', prompt: 'disarm 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disarm.q4', senseId: 'disarm.s1', errorType: 'meaning', type: '词源', prompt: '记 disarm 时，哪句更稳妥？', options: ['先锁住「解除武装」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解除武装」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解除武装'] },
  });

  D('disaster', {
    etymology: {
      origin: '意大利语 disastro「坏星」。星位不好。',
      prefix: null,
      root: { text: 'disaster', gloss: '灾难' },
      suffix: null,
      history: [
        { label: 'disaster', text: '意大利语 disastro「坏星」。星位不好。' },
        { label: '现在', text: '核心用法是：灾难。' },
      ],
      formationLogic: '考试认现在的用法：灾难。',
      mnemonic: '看到 disaster，先说出「灾难」。',
      note: '考试认现在的用法：灾难。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disaster.', chinese: '这一章反复回到同一个点：灾难。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disaster.s1', en: 'Without that disaster, the next paragraph is hard to follow.', zh: '没有这个灾难，下一段会很难读。', structure: 'disaster / 表示 / 灾难', grammar: 'noun，围绕「灾难」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disaster.', right: 'He gave me some advice about the disaster.', reason: 'advice 不可数。名词 disaster 的单复数按词典词形记。', rule: '先确定 disaster 是noun，再套「灾难」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disaster.q1', senseId: 'disaster.s1', errorType: 'meaning', type: '词义选择', prompt: '「disaster」在本条的核心意思是：', options: ['灾难', '完全相反的意思', '一种古代钱币'], answer: '灾难', explain: 'disaster：灾难。' },
      { id: 'disaster.q2', senseId: 'disaster.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disaster?', options: ['灾难', 'a kind of ancient coin', 'the past tense of be'], answer: '灾难', explain: '对的是「灾难」。' },
      { id: 'disaster.q3', senseId: 'disaster.s1', errorType: 'grammar', type: '词义选择', prompt: 'disaster 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disaster.q4', senseId: 'disaster.s1', errorType: 'meaning', type: '词源', prompt: '记 disaster 时，哪句更稳妥？', options: ['先锁住「灾难」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灾难」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灾难'] },
  });

  D('disastrous', {
    etymology: {
      origin: '英语派生：disastr + -ous，词性转到「灾难性的」。',
      prefix: null,
      root: { text: 'disastr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disastrous', text: '英语派生：disastr + -ous，词性转到「灾难性的」。' },
        { label: '现在', text: '核心用法是：灾难性的。' },
      ],
      formationLogic: '先认词干 disastr，再看词尾。',
      mnemonic: '看到 disastrous，先说出「灾难性的」。',
      note: '先认词干 disastr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was disastrous.', chinese: '即使是初读者也能看出，这个结果是灾难性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disastrous.s1', en: 'They wanted a disastrous answer, not a long speech.', zh: '他们要一个灾难性的的答复，不要长篇发言。', structure: 'disastrous / 表示 / 灾难性的', grammar: 'adjective，围绕「灾难性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are disastrous.', right: 'The news is disastrous.', reason: 'news 作主语时动词用单数。', rule: '先确定 disastrous 是adjective，再套「灾难性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disastrous.q1', senseId: 'disastrous.s1', errorType: 'meaning', type: '词义选择', prompt: '「disastrous」在本条的核心意思是：', options: ['灾难性的', '完全相反的意思', '一种古代钱币'], answer: '灾难性的', explain: 'disastrous：灾难性的。' },
      { id: 'disastrous.q2', senseId: 'disastrous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disastrous?', options: ['灾难性的', 'a kind of ancient coin', 'the past tense of be'], answer: '灾难性的', explain: '对的是「灾难性的」。' },
      { id: 'disastrous.q3', senseId: 'disastrous.s1', errorType: 'grammar', type: '词义选择', prompt: 'disastrous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'disastrous.q4', senseId: 'disastrous.s1', errorType: 'meaning', type: '词源', prompt: '记 disastrous 时，哪句更稳妥？', options: ['先锁住「灾难性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灾难性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灾难性的'] },
  });

  D('disband', {
    etymology: {
      origin: '现代英语常用词「disband」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disband', gloss: '解散' },
      suffix: null,
      history: [
        { label: 'disband', text: '现代英语常用词「disband」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解散。' },
      ],
      formationLogic: '核心义：解散。',
      mnemonic: '看到 disband，先说出「解散」。',
      note: '核心义：解散。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disband before the office closed.', chinese: '他们同意在办公室关门前做这件事：解散。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disband.s1', en: 'The deadline forced the team to disband that afternoon.', zh: '截止日期逼着小组在那天下午解散。', structure: 'disband / 表示 / 解散', grammar: 'verb，围绕「解散」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disbanded it yesterday without checking the real past form.', right: 'Check the past form of "disband" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disband 是verb，再套「解散」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disband.q1', senseId: 'disband.s1', errorType: 'meaning', type: '词义选择', prompt: '「disband」在本条的核心意思是：', options: ['解散', '完全相反的意思', '一种古代钱币'], answer: '解散', explain: 'disband：解散。' },
      { id: 'disband.q2', senseId: 'disband.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disband?', options: ['解散', 'a kind of ancient coin', 'the past tense of be'], answer: '解散', explain: '对的是「解散」。' },
      { id: 'disband.q3', senseId: 'disband.s1', errorType: 'grammar', type: '词义选择', prompt: 'disband 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disband.q4', senseId: 'disband.s1', errorType: 'meaning', type: '词源', prompt: '记 disband 时，哪句更稳妥？', options: ['先锁住「解散」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解散」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解散'] },
  });

  D('discard', {
    etymology: {
      origin: '现代英语常用词「discard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discard', gloss: '丢弃' },
      suffix: null,
      history: [
        { label: 'discard', text: '现代英语常用词「discard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：丢弃。' },
      ],
      formationLogic: '核心义：丢弃。',
      mnemonic: '看到 discard，先说出「丢弃」。',
      note: '核心义：丢弃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discard before the office closed.', chinese: '他们同意在办公室关门前做这件事：丢弃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discard.s1', en: 'The deadline forced the team to discard that afternoon.', zh: '截止日期逼着小组在那天下午丢弃。', structure: 'discard / 表示 / 丢弃', grammar: 'verb，围绕「丢弃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discarded it yesterday without checking the real past form.', right: 'Check the past form of "discard" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discard 是verb，再套「丢弃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discard.q1', senseId: 'discard.s1', errorType: 'meaning', type: '词义选择', prompt: '「discard」在本条的核心意思是：', options: ['丢弃', '完全相反的意思', '一种古代钱币'], answer: '丢弃', explain: 'discard：丢弃。' },
      { id: 'discard.q2', senseId: 'discard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discard?', options: ['丢弃', 'a kind of ancient coin', 'the past tense of be'], answer: '丢弃', explain: '对的是「丢弃」。' },
      { id: 'discard.q3', senseId: 'discard.s1', errorType: 'grammar', type: '词义选择', prompt: 'discard 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discard.q4', senseId: 'discard.s1', errorType: 'meaning', type: '词源', prompt: '记 discard 时，哪句更稳妥？', options: ['先锁住「丢弃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「丢弃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['丢弃'] },
  });

  D('discern', {
    etymology: {
      origin: '现代英语常用词「discern」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discern', gloss: '看出' },
      suffix: null,
      history: [
        { label: 'discern', text: '现代英语常用词「discern」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：看出。' },
      ],
      formationLogic: '核心义：看出。',
      mnemonic: '看到 discern，先说出「看出」。',
      note: '核心义：看出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discern before the office closed.', chinese: '他们同意在办公室关门前做这件事：看出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discern.s1', en: 'The deadline forced the team to discern that afternoon.', zh: '截止日期逼着小组在那天下午看出。', structure: 'discern / 表示 / 看出', grammar: 'verb，围绕「看出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discerned it yesterday without checking the real past form.', right: 'Check the past form of "discern" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discern 是verb，再套「看出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discern.q1', senseId: 'discern.s1', errorType: 'meaning', type: '词义选择', prompt: '「discern」在本条的核心意思是：', options: ['看出', '完全相反的意思', '一种古代钱币'], answer: '看出', explain: 'discern：看出。' },
      { id: 'discern.q2', senseId: 'discern.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discern?', options: ['看出', 'a kind of ancient coin', 'the past tense of be'], answer: '看出', explain: '对的是「看出」。' },
      { id: 'discern.q3', senseId: 'discern.s1', errorType: 'grammar', type: '词义选择', prompt: 'discern 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discern.q4', senseId: 'discern.s1', errorType: 'meaning', type: '词源', prompt: '记 discern 时，哪句更稳妥？', options: ['先锁住「看出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「看出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['看出'] },
  });

  D('discharge', {
    etymology: {
      origin: '现代英语常用词「discharge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discharge', gloss: '排放' },
      suffix: null,
      history: [
        { label: 'discharge', text: '现代英语常用词「discharge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：排放。' },
      ],
      formationLogic: '核心义：排放。',
      mnemonic: '看到 discharge，先说出「排放」。',
      note: '核心义：排放。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discharge before the office closed.', chinese: '他们同意在办公室关门前做这件事：排放。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discharge.s1', en: 'The deadline forced the team to discharge that afternoon.', zh: '截止日期逼着小组在那天下午排放。', structure: 'discharge / 表示 / 排放', grammar: 'verb，围绕「排放」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dischargeed it yesterday without checking the real past form.', right: 'Check the past form of "discharge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discharge 是verb，再套「排放」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discharge.q1', senseId: 'discharge.s1', errorType: 'meaning', type: '词义选择', prompt: '「discharge」在本条的核心意思是：', options: ['排放', '完全相反的意思', '一种古代钱币'], answer: '排放', explain: 'discharge：排放。' },
      { id: 'discharge.q2', senseId: 'discharge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discharge?', options: ['排放', 'a kind of ancient coin', 'the past tense of be'], answer: '排放', explain: '对的是「排放」。' },
      { id: 'discharge.q3', senseId: 'discharge.s1', errorType: 'grammar', type: '词义选择', prompt: 'discharge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discharge.q4', senseId: 'discharge.s1', errorType: 'meaning', type: '词源', prompt: '记 discharge 时，哪句更稳妥？', options: ['先锁住「排放」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「排放」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['排放'] },
  });

  D('discipline', {
    etymology: {
      origin: '拉丁语 disciplina「教学、训练」。',
      prefix: null,
      root: { text: 'discipline', gloss: '纪律' },
      suffix: null,
      history: [
        { label: 'discipline', text: '拉丁语 disciplina「教学、训练」。' },
        { label: '现在', text: '核心用法是：纪律。' },
      ],
      formationLogic: '考试认现在的用法：纪律。',
      mnemonic: '看到 discipline，先说出「纪律」。',
      note: '考试认现在的用法：纪律。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discipline.', chinese: '这一章反复回到同一个点：纪律。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discipline.s1', en: 'Without that discipline, the next paragraph is hard to follow.', zh: '没有这个纪律，下一段会很难读。', structure: 'discipline / 表示 / 纪律', grammar: 'noun，围绕「纪律」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discipline.', right: 'He gave me some advice about the discipline.', reason: 'advice 不可数。名词 discipline 的单复数按词典词形记。', rule: '先确定 discipline 是noun，再套「纪律」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discipline.q1', senseId: 'discipline.s1', errorType: 'meaning', type: '词义选择', prompt: '「discipline」在本条的核心意思是：', options: ['纪律', '完全相反的意思', '一种古代钱币'], answer: '纪律', explain: 'discipline：纪律。' },
      { id: 'discipline.q2', senseId: 'discipline.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discipline?', options: ['纪律', 'a kind of ancient coin', 'the past tense of be'], answer: '纪律', explain: '对的是「纪律」。' },
      { id: 'discipline.q3', senseId: 'discipline.s1', errorType: 'grammar', type: '词义选择', prompt: 'discipline 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discipline.q4', senseId: 'discipline.s1', errorType: 'meaning', type: '词源', prompt: '记 discipline 时，哪句更稳妥？', options: ['先锁住「纪律」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「纪律」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['纪律'] },
  });

  D('disclaim', {
    etymology: {
      origin: '现代英语常用词「disclaim」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disclaim', gloss: '否认' },
      suffix: null,
      history: [
        { label: 'disclaim', text: '现代英语常用词「disclaim」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：否认。' },
      ],
      formationLogic: '核心义：否认。',
      mnemonic: '看到 disclaim，先说出「否认」。',
      note: '核心义：否认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disclaim before the office closed.', chinese: '他们同意在办公室关门前做这件事：否认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disclaim.s1', en: 'The deadline forced the team to disclaim that afternoon.', zh: '截止日期逼着小组在那天下午否认。', structure: 'disclaim / 表示 / 否认', grammar: 'verb，围绕「否认」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disclaimed it yesterday without checking the real past form.', right: 'Check the past form of "disclaim" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disclaim 是verb，再套「否认」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disclaim.q1', senseId: 'disclaim.s1', errorType: 'meaning', type: '词义选择', prompt: '「disclaim」在本条的核心意思是：', options: ['否认', '完全相反的意思', '一种古代钱币'], answer: '否认', explain: 'disclaim：否认。' },
      { id: 'disclaim.q2', senseId: 'disclaim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disclaim?', options: ['否认', 'a kind of ancient coin', 'the past tense of be'], answer: '否认', explain: '对的是「否认」。' },
      { id: 'disclaim.q3', senseId: 'disclaim.s1', errorType: 'grammar', type: '词义选择', prompt: 'disclaim 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disclaim.q4', senseId: 'disclaim.s1', errorType: 'meaning', type: '词源', prompt: '记 disclaim 时，哪句更稳妥？', options: ['先锁住「否认」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「否认」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['否认'] },
  });

  D('disclose', {
    etymology: {
      origin: '拉丁语 dis- + claudere「打开关闭的东西」。',
      prefix: null,
      root: { text: 'disclose', gloss: '透露' },
      suffix: null,
      history: [
        { label: 'disclose', text: '拉丁语 dis- + claudere「打开关闭的东西」。' },
        { label: '现在', text: '核心用法是：透露。' },
      ],
      formationLogic: '考试认现在的用法：透露。',
      mnemonic: '看到 disclose，先说出「透露」。',
      note: '考试认现在的用法：透露。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disclose before the office closed.', chinese: '他们同意在办公室关门前做这件事：透露。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disclose.s1', en: 'The deadline forced the team to disclose that afternoon.', zh: '截止日期逼着小组在那天下午透露。', structure: 'disclose / 表示 / 透露', grammar: 'verb，围绕「透露」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discloseed it yesterday without checking the real past form.', right: 'Check the past form of "disclose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disclose 是verb，再套「透露」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disclose.q1', senseId: 'disclose.s1', errorType: 'meaning', type: '词义选择', prompt: '「disclose」在本条的核心意思是：', options: ['透露', '完全相反的意思', '一种古代钱币'], answer: '透露', explain: 'disclose：透露。' },
      { id: 'disclose.q2', senseId: 'disclose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disclose?', options: ['透露', 'a kind of ancient coin', 'the past tense of be'], answer: '透露', explain: '对的是「透露」。' },
      { id: 'disclose.q3', senseId: 'disclose.s1', errorType: 'grammar', type: '词义选择', prompt: 'disclose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disclose.q4', senseId: 'disclose.s1', errorType: 'meaning', type: '词源', prompt: '记 disclose 时，哪句更稳妥？', options: ['先锁住「透露」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「透露」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['透露'] },
  });

  D('disclosure', {
    etymology: {
      origin: '现代英语常用词「disclosure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disclosure', gloss: '透露' },
      suffix: null,
      history: [
        { label: 'disclosure', text: '现代英语常用词「disclosure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：透露。' },
      ],
      formationLogic: '核心义：透露。',
      mnemonic: '看到 disclosure，先说出「透露」。',
      note: '核心义：透露。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disclosure.', chinese: '这一章反复回到同一个点：透露。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disclosure.s1', en: 'Without that disclosure, the next paragraph is hard to follow.', zh: '没有这个透露，下一段会很难读。', structure: 'disclosure / 表示 / 透露', grammar: 'noun，围绕「透露」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disclosure.', right: 'He gave me some advice about the disclosure.', reason: 'advice 不可数。名词 disclosure 的单复数按词典词形记。', rule: '先确定 disclosure 是noun，再套「透露」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disclosure.q1', senseId: 'disclosure.s1', errorType: 'meaning', type: '词义选择', prompt: '「disclosure」在本条的核心意思是：', options: ['透露', '完全相反的意思', '一种古代钱币'], answer: '透露', explain: 'disclosure：透露。' },
      { id: 'disclosure.q2', senseId: 'disclosure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disclosure?', options: ['透露', 'a kind of ancient coin', 'the past tense of be'], answer: '透露', explain: '对的是「透露」。' },
      { id: 'disclosure.q3', senseId: 'disclosure.s1', errorType: 'grammar', type: '词义选择', prompt: 'disclosure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disclosure.q4', senseId: 'disclosure.s1', errorType: 'meaning', type: '词源', prompt: '记 disclosure 时，哪句更稳妥？', options: ['先锁住「透露」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「透露」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['透露'] },
  });

  D('disco', {
    etymology: {
      origin: '现代英语常用词「disco」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disco', gloss: '迪斯科舞厅' },
      suffix: null,
      history: [
        { label: 'disco', text: '现代英语常用词「disco」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：迪斯科舞厅。' },
      ],
      formationLogic: '核心义：迪斯科舞厅。',
      mnemonic: '看到 disco，先说出「迪斯科舞厅」。',
      note: '核心义：迪斯科舞厅。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disco.', chinese: '这一章反复回到同一个点：迪斯科舞厅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disco.s1', en: 'Without that disco, the next paragraph is hard to follow.', zh: '没有这个迪斯科舞厅，下一段会很难读。', structure: 'disco / 表示 / 迪斯科舞厅', grammar: 'noun，围绕「迪斯科舞厅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disco.', right: 'He gave me some advice about the disco.', reason: 'advice 不可数。名词 disco 的单复数按词典词形记。', rule: '先确定 disco 是noun，再套「迪斯科舞厅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disco.q1', senseId: 'disco.s1', errorType: 'meaning', type: '词义选择', prompt: '「disco」在本条的核心意思是：', options: ['迪斯科舞厅', '完全相反的意思', '一种古代钱币'], answer: '迪斯科舞厅', explain: 'disco：迪斯科舞厅。' },
      { id: 'disco.q2', senseId: 'disco.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disco?', options: ['迪斯科舞厅', 'a kind of ancient coin', 'the past tense of be'], answer: '迪斯科舞厅', explain: '对的是「迪斯科舞厅」。' },
      { id: 'disco.q3', senseId: 'disco.s1', errorType: 'grammar', type: '词义选择', prompt: 'disco 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disco.q4', senseId: 'disco.s1', errorType: 'meaning', type: '词源', prompt: '记 disco 时，哪句更稳妥？', options: ['先锁住「迪斯科舞厅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「迪斯科舞厅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['迪斯科舞厅'] },
  });

  D('discolour', {
    etymology: {
      origin: '现代英语常用词「discolour」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discolour', gloss: '褪色' },
      suffix: null,
      history: [
        { label: 'discolour', text: '现代英语常用词「discolour」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：褪色。' },
      ],
      formationLogic: '核心义：褪色。',
      mnemonic: '看到 discolour，先说出「褪色」。',
      note: '核心义：褪色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discolour before the office closed.', chinese: '他们同意在办公室关门前做这件事：褪色。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discolour.s1', en: 'The deadline forced the team to discolour that afternoon.', zh: '截止日期逼着小组在那天下午褪色。', structure: 'discolour / 表示 / 褪色', grammar: 'verb，围绕「褪色」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discoloured it yesterday without checking the real past form.', right: 'Check the past form of "discolour" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discolour 是verb，再套「褪色」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discolour.q1', senseId: 'discolour.s1', errorType: 'meaning', type: '词义选择', prompt: '「discolour」在本条的核心意思是：', options: ['褪色', '完全相反的意思', '一种古代钱币'], answer: '褪色', explain: 'discolour：褪色。' },
      { id: 'discolour.q2', senseId: 'discolour.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discolour?', options: ['褪色', 'a kind of ancient coin', 'the past tense of be'], answer: '褪色', explain: '对的是「褪色」。' },
      { id: 'discolour.q3', senseId: 'discolour.s1', errorType: 'grammar', type: '词义选择', prompt: 'discolour 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discolour.q4', senseId: 'discolour.s1', errorType: 'meaning', type: '词源', prompt: '记 discolour 时，哪句更稳妥？', options: ['先锁住「褪色」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「褪色」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['褪色'] },
  });

  D('discord', {
    etymology: {
      origin: '现代英语常用词「discord」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discord', gloss: '不和' },
      suffix: null,
      history: [
        { label: 'discord', text: '现代英语常用词「discord」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不和。' },
      ],
      formationLogic: '核心义：不和。',
      mnemonic: '看到 discord，先说出「不和」。',
      note: '核心义：不和。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discord.', chinese: '这一章反复回到同一个点：不和。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discord.s1', en: 'Without that discord, the next paragraph is hard to follow.', zh: '没有这个不和，下一段会很难读。', structure: 'discord / 表示 / 不和', grammar: 'noun，围绕「不和」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discord.', right: 'He gave me some advice about the discord.', reason: 'advice 不可数。名词 discord 的单复数按词典词形记。', rule: '先确定 discord 是noun，再套「不和」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discord.q1', senseId: 'discord.s1', errorType: 'meaning', type: '词义选择', prompt: '「discord」在本条的核心意思是：', options: ['不和', '完全相反的意思', '一种古代钱币'], answer: '不和', explain: 'discord：不和。' },
      { id: 'discord.q2', senseId: 'discord.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discord?', options: ['不和', 'a kind of ancient coin', 'the past tense of be'], answer: '不和', explain: '对的是「不和」。' },
      { id: 'discord.q3', senseId: 'discord.s1', errorType: 'grammar', type: '词义选择', prompt: 'discord 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discord.q4', senseId: 'discord.s1', errorType: 'meaning', type: '词源', prompt: '记 discord 时，哪句更稳妥？', options: ['先锁住「不和」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不和」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不和'] },
  });

  D('discount', {
    etymology: {
      origin: 'dis- + count。从总数里拿掉一部分。',
      prefix: null,
      root: { text: 'discount', gloss: '折扣' },
      suffix: null,
      history: [
        { label: 'discount', text: 'dis- + count。从总数里拿掉一部分。' },
        { label: '现在', text: '核心用法是：折扣。' },
      ],
      formationLogic: '考试认现在的用法：折扣。',
      mnemonic: '看到 discount，先说出「折扣」。',
      note: '考试认现在的用法：折扣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discount.', chinese: '这一章反复回到同一个点：折扣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discount.s1', en: 'Without that discount, the next paragraph is hard to follow.', zh: '没有这个折扣，下一段会很难读。', structure: 'discount / 表示 / 折扣', grammar: 'noun，围绕「折扣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discount.', right: 'He gave me some advice about the discount.', reason: 'advice 不可数。名词 discount 的单复数按词典词形记。', rule: '先确定 discount 是noun，再套「折扣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discount.q1', senseId: 'discount.s1', errorType: 'meaning', type: '词义选择', prompt: '「discount」在本条的核心意思是：', options: ['折扣', '完全相反的意思', '一种古代钱币'], answer: '折扣', explain: 'discount：折扣。' },
      { id: 'discount.q2', senseId: 'discount.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discount?', options: ['折扣', 'a kind of ancient coin', 'the past tense of be'], answer: '折扣', explain: '对的是「折扣」。' },
      { id: 'discount.q3', senseId: 'discount.s1', errorType: 'grammar', type: '词义选择', prompt: 'discount 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discount.q4', senseId: 'discount.s1', errorType: 'meaning', type: '词源', prompt: '记 discount 时，哪句更稳妥？', options: ['先锁住「折扣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「折扣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['折扣'] },
  });

  D('discounted', {
    etymology: {
      origin: '现代英语常用词「discounted」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discounted', gloss: '打折的' },
      suffix: null,
      history: [
        { label: 'discounted', text: '现代英语常用词「discounted」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：打折的。' },
      ],
      formationLogic: '核心义：打折的。',
      mnemonic: '看到 discounted，先说出「打折的」。',
      note: '核心义：打折的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was discounted.', chinese: '即使是初读者也能看出，这个结果是打折的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discounted.s1', en: 'They wanted a discounted answer, not a long speech.', zh: '他们要一个打折的的答复，不要长篇发言。', structure: 'discounted / 表示 / 打折的', grammar: 'adjective，围绕「打折的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are discounted.', right: 'The news is discounted.', reason: 'news 作主语时动词用单数。', rule: '先确定 discounted 是adjective，再套「打折的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discounted.q1', senseId: 'discounted.s1', errorType: 'meaning', type: '词义选择', prompt: '「discounted」在本条的核心意思是：', options: ['打折的', '完全相反的意思', '一种古代钱币'], answer: '打折的', explain: 'discounted：打折的。' },
      { id: 'discounted.q2', senseId: 'discounted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discounted?', options: ['打折的', 'a kind of ancient coin', 'the past tense of be'], answer: '打折的', explain: '对的是「打折的」。' },
      { id: 'discounted.q3', senseId: 'discounted.s1', errorType: 'grammar', type: '词义选择', prompt: 'discounted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'discounted.q4', senseId: 'discounted.s1', errorType: 'meaning', type: '词源', prompt: '记 discounted 时，哪句更稳妥？', options: ['先锁住「打折的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打折的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打折的'] },
  });

  D('discourage', {
    etymology: {
      origin: '现代英语常用词「discourage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discourage', gloss: '使泄气' },
      suffix: null,
      history: [
        { label: 'discourage', text: '现代英语常用词「discourage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使泄气。' },
      ],
      formationLogic: '核心义：使泄气。',
      mnemonic: '看到 discourage，先说出「使泄气」。',
      note: '核心义：使泄气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discourage before the office closed.', chinese: '他们同意在办公室关门前做这件事：使泄气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discourage.s1', en: 'The deadline forced the team to discourage that afternoon.', zh: '截止日期逼着小组在那天下午使泄气。', structure: 'discourage / 表示 / 使泄气', grammar: 'verb，围绕「使泄气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discourageed it yesterday without checking the real past form.', right: 'Check the past form of "discourage" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discourage 是verb，再套「使泄气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discourage.q1', senseId: 'discourage.s1', errorType: 'meaning', type: '词义选择', prompt: '「discourage」在本条的核心意思是：', options: ['使泄气', '完全相反的意思', '一种古代钱币'], answer: '使泄气', explain: 'discourage：使泄气。' },
      { id: 'discourage.q2', senseId: 'discourage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discourage?', options: ['使泄气', 'a kind of ancient coin', 'the past tense of be'], answer: '使泄气', explain: '对的是「使泄气」。' },
      { id: 'discourage.q3', senseId: 'discourage.s1', errorType: 'grammar', type: '词义选择', prompt: 'discourage 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discourage.q4', senseId: 'discourage.s1', errorType: 'meaning', type: '词源', prompt: '记 discourage 时，哪句更稳妥？', options: ['先锁住「使泄气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使泄气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使泄气'] },
  });

  D('discouragement', {
    etymology: {
      origin: '英语派生：discourage + -ment，词性转到「泄气」。',
      prefix: null,
      root: { text: 'discourage', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'discouragement', text: '英语派生：discourage + -ment，词性转到「泄气」。' },
        { label: '现在', text: '核心用法是：泄气。' },
      ],
      formationLogic: '先认词干 discourage，再看词尾。',
      mnemonic: '看到 discouragement，先说出「泄气」。',
      note: '先认词干 discourage，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discouragement.', chinese: '这一章反复回到同一个点：泄气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discouragement.s1', en: 'Without that discouragement, the next paragraph is hard to follow.', zh: '没有这个泄气，下一段会很难读。', structure: 'discouragement / 表示 / 泄气', grammar: 'noun，围绕「泄气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discouragement.', right: 'He gave me some advice about the discouragement.', reason: 'advice 不可数。名词 discouragement 的单复数按词典词形记。', rule: '先确定 discouragement 是noun，再套「泄气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discouragement.q1', senseId: 'discouragement.s1', errorType: 'meaning', type: '词义选择', prompt: '「discouragement」在本条的核心意思是：', options: ['泄气', '完全相反的意思', '一种古代钱币'], answer: '泄气', explain: 'discouragement：泄气。' },
      { id: 'discouragement.q2', senseId: 'discouragement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discouragement?', options: ['泄气', 'a kind of ancient coin', 'the past tense of be'], answer: '泄气', explain: '对的是「泄气」。' },
      { id: 'discouragement.q3', senseId: 'discouragement.s1', errorType: 'grammar', type: '词义选择', prompt: 'discouragement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discouragement.q4', senseId: 'discouragement.s1', errorType: 'meaning', type: '词源', prompt: '记 discouragement 时，哪句更稳妥？', options: ['先锁住「泄气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「泄气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['泄气'] },
  });

  D('discourse', {
    etymology: {
      origin: '现代英语常用词「discourse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discourse', gloss: '论述' },
      suffix: null,
      history: [
        { label: 'discourse', text: '现代英语常用词「discourse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：论述。' },
      ],
      formationLogic: '核心义：论述。',
      mnemonic: '看到 discourse，先说出「论述」。',
      note: '核心义：论述。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discourse.', chinese: '这一章反复回到同一个点：论述。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discourse.s1', en: 'Without that discourse, the next paragraph is hard to follow.', zh: '没有这个论述，下一段会很难读。', structure: 'discourse / 表示 / 论述', grammar: 'noun，围绕「论述」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discourse.', right: 'He gave me some advice about the discourse.', reason: 'advice 不可数。名词 discourse 的单复数按词典词形记。', rule: '先确定 discourse 是noun，再套「论述」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discourse.q1', senseId: 'discourse.s1', errorType: 'meaning', type: '词义选择', prompt: '「discourse」在本条的核心意思是：', options: ['论述', '完全相反的意思', '一种古代钱币'], answer: '论述', explain: 'discourse：论述。' },
      { id: 'discourse.q2', senseId: 'discourse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discourse?', options: ['论述', 'a kind of ancient coin', 'the past tense of be'], answer: '论述', explain: '对的是「论述」。' },
      { id: 'discourse.q3', senseId: 'discourse.s1', errorType: 'grammar', type: '词义选择', prompt: 'discourse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discourse.q4', senseId: 'discourse.s1', errorType: 'meaning', type: '词源', prompt: '记 discourse 时，哪句更稳妥？', options: ['先锁住「论述」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「论述」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['论述'] },
  });

  D('discourteous', {
    etymology: {
      origin: '英语派生：discourte + -ous，词性转到「无礼的」。',
      prefix: null,
      root: { text: 'discourte', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'discourteous', text: '英语派生：discourte + -ous，词性转到「无礼的」。' },
        { label: '现在', text: '核心用法是：无礼的。' },
      ],
      formationLogic: '先认词干 discourte，再看词尾。',
      mnemonic: '看到 discourteous，先说出「无礼的」。',
      note: '先认词干 discourte，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was discourteous.', chinese: '即使是初读者也能看出，这个结果是无礼的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discourteous.s1', en: 'They wanted a discourteous answer, not a long speech.', zh: '他们要一个无礼的的答复，不要长篇发言。', structure: 'discourteous / 表示 / 无礼的', grammar: 'adjective，围绕「无礼的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are discourteous.', right: 'The news is discourteous.', reason: 'news 作主语时动词用单数。', rule: '先确定 discourteous 是adjective，再套「无礼的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discourteous.q1', senseId: 'discourteous.s1', errorType: 'meaning', type: '词义选择', prompt: '「discourteous」在本条的核心意思是：', options: ['无礼的', '完全相反的意思', '一种古代钱币'], answer: '无礼的', explain: 'discourteous：无礼的。' },
      { id: 'discourteous.q2', senseId: 'discourteous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discourteous?', options: ['无礼的', 'a kind of ancient coin', 'the past tense of be'], answer: '无礼的', explain: '对的是「无礼的」。' },
      { id: 'discourteous.q3', senseId: 'discourteous.s1', errorType: 'grammar', type: '词义选择', prompt: 'discourteous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'discourteous.q4', senseId: 'discourteous.s1', errorType: 'meaning', type: '词源', prompt: '记 discourteous 时，哪句更稳妥？', options: ['先锁住「无礼的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「无礼的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['无礼的'] },
  });

  D('discover', {
    etymology: {
      origin: 'dis- + cover。把盖子拿开。',
      prefix: null,
      root: { text: 'discover', gloss: '发现' },
      suffix: null,
      history: [
        { label: 'discover', text: 'dis- + cover。把盖子拿开。' },
        { label: '现在', text: '核心用法是：发现。' },
      ],
      formationLogic: '考试认现在的用法：发现。',
      mnemonic: '看到 discover，先说出「发现」。',
      note: '考试认现在的用法：发现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discover before the office closed.', chinese: '他们同意在办公室关门前做这件事：发现。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discover.s1', en: 'The deadline forced the team to discover that afternoon.', zh: '截止日期逼着小组在那天下午发现。', structure: 'discover / 表示 / 发现', grammar: 'verb，围绕「发现」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discovered it yesterday without checking the real past form.', right: 'Check the past form of "discover" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discover 是verb，再套「发现」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discover.q1', senseId: 'discover.s1', errorType: 'meaning', type: '词义选择', prompt: '「discover」在本条的核心意思是：', options: ['发现', '完全相反的意思', '一种古代钱币'], answer: '发现', explain: 'discover：发现。' },
      { id: 'discover.q2', senseId: 'discover.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discover?', options: ['发现', 'a kind of ancient coin', 'the past tense of be'], answer: '发现', explain: '对的是「发现」。' },
      { id: 'discover.q3', senseId: 'discover.s1', errorType: 'grammar', type: '词义选择', prompt: 'discover 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discover.q4', senseId: 'discover.s1', errorType: 'meaning', type: '词源', prompt: '记 discover 时，哪句更稳妥？', options: ['先锁住「发现」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发现」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发现'] },
  });

  D('discovered', {
    etymology: {
      origin: '现代英语常用词「discovered」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discovered', gloss: '被发现的' },
      suffix: null,
      history: [
        { label: 'discovered', text: '现代英语常用词「discovered」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被发现的。' },
      ],
      formationLogic: '核心义：被发现的。',
      mnemonic: '看到 discovered，先说出「被发现的」。',
      note: '核心义：被发现的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was discovered.', chinese: '即使是初读者也能看出，这个结果是被发现的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discovered.s1', en: 'They wanted a discovered answer, not a long speech.', zh: '他们要一个被发现的的答复，不要长篇发言。', structure: 'discovered / 表示 / 被发现的', grammar: 'adjective，围绕「被发现的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are discovered.', right: 'The news is discovered.', reason: 'news 作主语时动词用单数。', rule: '先确定 discovered 是adjective，再套「被发现的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discovered.q1', senseId: 'discovered.s1', errorType: 'meaning', type: '词义选择', prompt: '「discovered」在本条的核心意思是：', options: ['被发现的', '完全相反的意思', '一种古代钱币'], answer: '被发现的', explain: 'discovered：被发现的。' },
      { id: 'discovered.q2', senseId: 'discovered.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discovered?', options: ['被发现的', 'a kind of ancient coin', 'the past tense of be'], answer: '被发现的', explain: '对的是「被发现的」。' },
      { id: 'discovered.q3', senseId: 'discovered.s1', errorType: 'grammar', type: '词义选择', prompt: 'discovered 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'discovered.q4', senseId: 'discovered.s1', errorType: 'meaning', type: '词源', prompt: '记 discovered 时，哪句更稳妥？', options: ['先锁住「被发现的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被发现的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被发现的'] },
  });

  D('discovery', {
    etymology: {
      origin: 'discover 的名词。',
      prefix: null,
      root: { text: 'discovery', gloss: '发现' },
      suffix: null,
      history: [
        { label: 'discovery', text: 'discover 的名词。' },
        { label: '现在', text: '核心用法是：发现。' },
      ],
      formationLogic: '考试认现在的用法：发现。',
      mnemonic: '看到 discovery，先说出「发现」。',
      note: '考试认现在的用法：发现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discovery.', chinese: '这一章反复回到同一个点：发现。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discovery.s1', en: 'Without that discovery, the next paragraph is hard to follow.', zh: '没有这个发现，下一段会很难读。', structure: 'discovery / 表示 / 发现', grammar: 'noun，围绕「发现」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discovery.', right: 'He gave me some advice about the discovery.', reason: 'advice 不可数。名词 discovery 的单复数按词典词形记。', rule: '先确定 discovery 是noun，再套「发现」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discovery.q1', senseId: 'discovery.s1', errorType: 'meaning', type: '词义选择', prompt: '「discovery」在本条的核心意思是：', options: ['发现', '完全相反的意思', '一种古代钱币'], answer: '发现', explain: 'discovery：发现。' },
      { id: 'discovery.q2', senseId: 'discovery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discovery?', options: ['发现', 'a kind of ancient coin', 'the past tense of be'], answer: '发现', explain: '对的是「发现」。' },
      { id: 'discovery.q3', senseId: 'discovery.s1', errorType: 'grammar', type: '词义选择', prompt: 'discovery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discovery.q4', senseId: 'discovery.s1', errorType: 'meaning', type: '词源', prompt: '记 discovery 时，哪句更稳妥？', options: ['先锁住「发现」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发现」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发现'] },
  });

  D('discredit', {
    etymology: {
      origin: '现代英语常用词「discredit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discredit', gloss: '使失去信誉' },
      suffix: null,
      history: [
        { label: 'discredit', text: '现代英语常用词「discredit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使失去信誉。' },
      ],
      formationLogic: '核心义：使失去信誉。',
      mnemonic: '看到 discredit，先说出「使失去信誉」。',
      note: '核心义：使失去信誉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discredit before the office closed.', chinese: '他们同意在办公室关门前做这件事：使失去信誉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discredit.s1', en: 'The deadline forced the team to discredit that afternoon.', zh: '截止日期逼着小组在那天下午使失去信誉。', structure: 'discredit / 表示 / 使失去信誉', grammar: 'verb，围绕「使失去信誉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discredited it yesterday without checking the real past form.', right: 'Check the past form of "discredit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discredit 是verb，再套「使失去信誉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discredit.q1', senseId: 'discredit.s1', errorType: 'meaning', type: '词义选择', prompt: '「discredit」在本条的核心意思是：', options: ['使失去信誉', '完全相反的意思', '一种古代钱币'], answer: '使失去信誉', explain: 'discredit：使失去信誉。' },
      { id: 'discredit.q2', senseId: 'discredit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discredit?', options: ['使失去信誉', 'a kind of ancient coin', 'the past tense of be'], answer: '使失去信誉', explain: '对的是「使失去信誉」。' },
      { id: 'discredit.q3', senseId: 'discredit.s1', errorType: 'grammar', type: '词义选择', prompt: 'discredit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discredit.q4', senseId: 'discredit.s1', errorType: 'meaning', type: '词源', prompt: '记 discredit 时，哪句更稳妥？', options: ['先锁住「使失去信誉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使失去信誉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使失去信誉'] },
  });

  D('discreet', {
    etymology: {
      origin: '现代英语常用词「discreet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discreet', gloss: '谨慎的' },
      suffix: null,
      history: [
        { label: 'discreet', text: '现代英语常用词「discreet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：谨慎的。' },
      ],
      formationLogic: '核心义：谨慎的。',
      mnemonic: '看到 discreet，先说出「谨慎的」。',
      note: '核心义：谨慎的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was discreet.', chinese: '即使是初读者也能看出，这个结果是谨慎的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discreet.s1', en: 'They wanted a discreet answer, not a long speech.', zh: '他们要一个谨慎的的答复，不要长篇发言。', structure: 'discreet / 表示 / 谨慎的', grammar: 'adjective，围绕「谨慎的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are discreet.', right: 'The news is discreet.', reason: 'news 作主语时动词用单数。', rule: '先确定 discreet 是adjective，再套「谨慎的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discreet.q1', senseId: 'discreet.s1', errorType: 'meaning', type: '词义选择', prompt: '「discreet」在本条的核心意思是：', options: ['谨慎的', '完全相反的意思', '一种古代钱币'], answer: '谨慎的', explain: 'discreet：谨慎的。' },
      { id: 'discreet.q2', senseId: 'discreet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discreet?', options: ['谨慎的', 'a kind of ancient coin', 'the past tense of be'], answer: '谨慎的', explain: '对的是「谨慎的」。' },
      { id: 'discreet.q3', senseId: 'discreet.s1', errorType: 'grammar', type: '词义选择', prompt: 'discreet 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'discreet.q4', senseId: 'discreet.s1', errorType: 'meaning', type: '词源', prompt: '记 discreet 时，哪句更稳妥？', options: ['先锁住「谨慎的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谨慎的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谨慎的'] },
  });

  D('discrepancy', {
    etymology: {
      origin: '现代英语常用词「discrepancy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discrepancy', gloss: '差异' },
      suffix: null,
      history: [
        { label: 'discrepancy', text: '现代英语常用词「discrepancy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：差异。' },
      ],
      formationLogic: '核心义：差异。',
      mnemonic: '看到 discrepancy，先说出「差异」。',
      note: '核心义：差异。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discrepancy.', chinese: '这一章反复回到同一个点：差异。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discrepancy.s1', en: 'Without that discrepancy, the next paragraph is hard to follow.', zh: '没有这个差异，下一段会很难读。', structure: 'discrepancy / 表示 / 差异', grammar: 'noun，围绕「差异」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discrepancy.', right: 'He gave me some advice about the discrepancy.', reason: 'advice 不可数。名词 discrepancy 的单复数按词典词形记。', rule: '先确定 discrepancy 是noun，再套「差异」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discrepancy.q1', senseId: 'discrepancy.s1', errorType: 'meaning', type: '词义选择', prompt: '「discrepancy」在本条的核心意思是：', options: ['差异', '完全相反的意思', '一种古代钱币'], answer: '差异', explain: 'discrepancy：差异。' },
      { id: 'discrepancy.q2', senseId: 'discrepancy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discrepancy?', options: ['差异', 'a kind of ancient coin', 'the past tense of be'], answer: '差异', explain: '对的是「差异」。' },
      { id: 'discrepancy.q3', senseId: 'discrepancy.s1', errorType: 'grammar', type: '词义选择', prompt: 'discrepancy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discrepancy.q4', senseId: 'discrepancy.s1', errorType: 'meaning', type: '词源', prompt: '记 discrepancy 时，哪句更稳妥？', options: ['先锁住「差异」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「差异」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['差异'] },
  });

  D('discretion', {
    etymology: {
      origin: '英语派生：discre + -tion，词性转到「谨慎」。',
      prefix: null,
      root: { text: 'discre', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'discretion', text: '英语派生：discre + -tion，词性转到「谨慎」。' },
        { label: '现在', text: '核心用法是：谨慎。' },
      ],
      formationLogic: '先认词干 discre，再看词尾。',
      mnemonic: '看到 discretion，先说出「谨慎」。',
      note: '先认词干 discre，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discretion.', chinese: '这一章反复回到同一个点：谨慎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discretion.s1', en: 'Without that discretion, the next paragraph is hard to follow.', zh: '没有这个谨慎，下一段会很难读。', structure: 'discretion / 表示 / 谨慎', grammar: 'noun，围绕「谨慎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discretion.', right: 'He gave me some advice about the discretion.', reason: 'advice 不可数。名词 discretion 的单复数按词典词形记。', rule: '先确定 discretion 是noun，再套「谨慎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discretion.q1', senseId: 'discretion.s1', errorType: 'meaning', type: '词义选择', prompt: '「discretion」在本条的核心意思是：', options: ['谨慎', '完全相反的意思', '一种古代钱币'], answer: '谨慎', explain: 'discretion：谨慎。' },
      { id: 'discretion.q2', senseId: 'discretion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discretion?', options: ['谨慎', 'a kind of ancient coin', 'the past tense of be'], answer: '谨慎', explain: '对的是「谨慎」。' },
      { id: 'discretion.q3', senseId: 'discretion.s1', errorType: 'grammar', type: '词义选择', prompt: 'discretion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discretion.q4', senseId: 'discretion.s1', errorType: 'meaning', type: '词源', prompt: '记 discretion 时，哪句更稳妥？', options: ['先锁住「谨慎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谨慎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谨慎'] },
  });

  D('discriminate', {
    etymology: {
      origin: '现代英语常用词「discriminate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'discriminate', gloss: '歧视' },
      suffix: null,
      history: [
        { label: 'discriminate', text: '现代英语常用词「discriminate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：歧视。' },
      ],
      formationLogic: '核心义：歧视。',
      mnemonic: '看到 discriminate，先说出「歧视」。',
      note: '核心义：歧视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discriminate before the office closed.', chinese: '他们同意在办公室关门前做这件事：歧视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discriminate.s1', en: 'The deadline forced the team to discriminate that afternoon.', zh: '截止日期逼着小组在那天下午歧视。', structure: 'discriminate / 表示 / 歧视', grammar: 'verb，围绕「歧视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discriminateed it yesterday without checking the real past form.', right: 'Check the past form of "discriminate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discriminate 是verb，再套「歧视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discriminate.q1', senseId: 'discriminate.s1', errorType: 'meaning', type: '词义选择', prompt: '「discriminate」在本条的核心意思是：', options: ['歧视', '完全相反的意思', '一种古代钱币'], answer: '歧视', explain: 'discriminate：歧视。' },
      { id: 'discriminate.q2', senseId: 'discriminate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discriminate?', options: ['歧视', 'a kind of ancient coin', 'the past tense of be'], answer: '歧视', explain: '对的是「歧视」。' },
      { id: 'discriminate.q3', senseId: 'discriminate.s1', errorType: 'grammar', type: '词义选择', prompt: 'discriminate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discriminate.q4', senseId: 'discriminate.s1', errorType: 'meaning', type: '词源', prompt: '记 discriminate 时，哪句更稳妥？', options: ['先锁住「歧视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「歧视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['歧视'] },
  });

  D('discuss', {
    etymology: {
      origin: '拉丁语 discutere「打碎来看」。',
      prefix: null,
      root: { text: 'discuss', gloss: '讨论' },
      suffix: null,
      history: [
        { label: 'discuss', text: '拉丁语 discutere「打碎来看」。' },
        { label: '现在', text: '核心用法是：讨论。' },
      ],
      formationLogic: '考试认现在的用法：讨论。',
      mnemonic: '看到 discuss，先说出「讨论」。',
      note: '考试认现在的用法：讨论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to discuss before the office closed.', chinese: '他们同意在办公室关门前做这件事：讨论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discuss.s1', en: 'The deadline forced the team to discuss that afternoon.', zh: '截止日期逼着小组在那天下午讨论。', structure: 'discuss / 表示 / 讨论', grammar: 'verb，围绕「讨论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She discussed it yesterday without checking the real past form.', right: 'Check the past form of "discuss" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 discuss 是verb，再套「讨论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discuss.q1', senseId: 'discuss.s1', errorType: 'meaning', type: '词义选择', prompt: '「discuss」在本条的核心意思是：', options: ['讨论', '完全相反的意思', '一种古代钱币'], answer: '讨论', explain: 'discuss：讨论。' },
      { id: 'discuss.q2', senseId: 'discuss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discuss?', options: ['讨论', 'a kind of ancient coin', 'the past tense of be'], answer: '讨论', explain: '对的是「讨论」。' },
      { id: 'discuss.q3', senseId: 'discuss.s1', errorType: 'grammar', type: '词义选择', prompt: 'discuss 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'discuss.q4', senseId: 'discuss.s1', errorType: 'meaning', type: '词源', prompt: '记 discuss 时，哪句更稳妥？', options: ['先锁住「讨论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「讨论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['讨论'] },
  });

  D('discussion', {
    etymology: {
      origin: 'discuss 的名词。',
      prefix: null,
      root: { text: 'discussion', gloss: '讨论' },
      suffix: null,
      history: [
        { label: 'discussion', text: 'discuss 的名词。' },
        { label: '现在', text: '核心用法是：讨论。' },
      ],
      formationLogic: '考试认现在的用法：讨论。',
      mnemonic: '看到 discussion，先说出「讨论」。',
      note: '考试认现在的用法：讨论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one discussion.', chinese: '这一章反复回到同一个点：讨论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'discussion.s1', en: 'Without that discussion, the next paragraph is hard to follow.', zh: '没有这个讨论，下一段会很难读。', structure: 'discussion / 表示 / 讨论', grammar: 'noun，围绕「讨论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the discussion.', right: 'He gave me some advice about the discussion.', reason: 'advice 不可数。名词 discussion 的单复数按词典词形记。', rule: '先确定 discussion 是noun，再套「讨论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'discussion.q1', senseId: 'discussion.s1', errorType: 'meaning', type: '词义选择', prompt: '「discussion」在本条的核心意思是：', options: ['讨论', '完全相反的意思', '一种古代钱币'], answer: '讨论', explain: 'discussion：讨论。' },
      { id: 'discussion.q2', senseId: 'discussion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches discussion?', options: ['讨论', 'a kind of ancient coin', 'the past tense of be'], answer: '讨论', explain: '对的是「讨论」。' },
      { id: 'discussion.q3', senseId: 'discussion.s1', errorType: 'grammar', type: '词义选择', prompt: 'discussion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'discussion.q4', senseId: 'discussion.s1', errorType: 'meaning', type: '词源', prompt: '记 discussion 时，哪句更稳妥？', options: ['先锁住「讨论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「讨论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['讨论'] },
  });

  D('disdain', {
    etymology: {
      origin: '现代英语常用词「disdain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disdain', gloss: '蔑视' },
      suffix: null,
      history: [
        { label: 'disdain', text: '现代英语常用词「disdain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蔑视。' },
      ],
      formationLogic: '核心义：蔑视。',
      mnemonic: '看到 disdain，先说出「蔑视」。',
      note: '核心义：蔑视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disdain.', chinese: '这一章反复回到同一个点：蔑视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disdain.s1', en: 'Without that disdain, the next paragraph is hard to follow.', zh: '没有这个蔑视，下一段会很难读。', structure: 'disdain / 表示 / 蔑视', grammar: 'noun，围绕「蔑视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disdain.', right: 'He gave me some advice about the disdain.', reason: 'advice 不可数。名词 disdain 的单复数按词典词形记。', rule: '先确定 disdain 是noun，再套「蔑视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disdain.q1', senseId: 'disdain.s1', errorType: 'meaning', type: '词义选择', prompt: '「disdain」在本条的核心意思是：', options: ['蔑视', '完全相反的意思', '一种古代钱币'], answer: '蔑视', explain: 'disdain：蔑视。' },
      { id: 'disdain.q2', senseId: 'disdain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disdain?', options: ['蔑视', 'a kind of ancient coin', 'the past tense of be'], answer: '蔑视', explain: '对的是「蔑视」。' },
      { id: 'disdain.q3', senseId: 'disdain.s1', errorType: 'grammar', type: '词义选择', prompt: 'disdain 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disdain.q4', senseId: 'disdain.s1', errorType: 'meaning', type: '词源', prompt: '记 disdain 时，哪句更稳妥？', options: ['先锁住「蔑视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蔑视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蔑视'] },
  });

  D('disease', {
    etymology: {
      origin: 'dis- + ease。不舒服。',
      prefix: null,
      root: { text: 'disease', gloss: '疾病' },
      suffix: null,
      history: [
        { label: 'disease', text: 'dis- + ease。不舒服。' },
        { label: '现在', text: '核心用法是：疾病。' },
      ],
      formationLogic: '考试认现在的用法：疾病。',
      mnemonic: '看到 disease，先说出「疾病」。',
      note: '考试认现在的用法：疾病。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disease.', chinese: '这一章反复回到同一个点：疾病。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disease.s1', en: 'Without that disease, the next paragraph is hard to follow.', zh: '没有这个疾病，下一段会很难读。', structure: 'disease / 表示 / 疾病', grammar: 'noun，围绕「疾病」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disease.', right: 'He gave me some advice about the disease.', reason: 'advice 不可数。名词 disease 的单复数按词典词形记。', rule: '先确定 disease 是noun，再套「疾病」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disease.q1', senseId: 'disease.s1', errorType: 'meaning', type: '词义选择', prompt: '「disease」在本条的核心意思是：', options: ['疾病', '完全相反的意思', '一种古代钱币'], answer: '疾病', explain: 'disease：疾病。' },
      { id: 'disease.q2', senseId: 'disease.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disease?', options: ['疾病', 'a kind of ancient coin', 'the past tense of be'], answer: '疾病', explain: '对的是「疾病」。' },
      { id: 'disease.q3', senseId: 'disease.s1', errorType: 'grammar', type: '词义选择', prompt: 'disease 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disease.q4', senseId: 'disease.s1', errorType: 'meaning', type: '词源', prompt: '记 disease 时，哪句更稳妥？', options: ['先锁住「疾病」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「疾病」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疾病'] },
  });

  D('disfigure', {
    etymology: {
      origin: '现代英语常用词「disfigure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disfigure', gloss: '毁容' },
      suffix: null,
      history: [
        { label: 'disfigure', text: '现代英语常用词「disfigure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：毁容。' },
      ],
      formationLogic: '核心义：毁容。',
      mnemonic: '看到 disfigure，先说出「毁容」。',
      note: '核心义：毁容。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disfigure before the office closed.', chinese: '他们同意在办公室关门前做这件事：毁容。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disfigure.s1', en: 'The deadline forced the team to disfigure that afternoon.', zh: '截止日期逼着小组在那天下午毁容。', structure: 'disfigure / 表示 / 毁容', grammar: 'verb，围绕「毁容」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disfigureed it yesterday without checking the real past form.', right: 'Check the past form of "disfigure" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disfigure 是verb，再套「毁容」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disfigure.q1', senseId: 'disfigure.s1', errorType: 'meaning', type: '词义选择', prompt: '「disfigure」在本条的核心意思是：', options: ['毁容', '完全相反的意思', '一种古代钱币'], answer: '毁容', explain: 'disfigure：毁容。' },
      { id: 'disfigure.q2', senseId: 'disfigure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disfigure?', options: ['毁容', 'a kind of ancient coin', 'the past tense of be'], answer: '毁容', explain: '对的是「毁容」。' },
      { id: 'disfigure.q3', senseId: 'disfigure.s1', errorType: 'grammar', type: '词义选择', prompt: 'disfigure 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disfigure.q4', senseId: 'disfigure.s1', errorType: 'meaning', type: '词源', prompt: '记 disfigure 时，哪句更稳妥？', options: ['先锁住「毁容」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「毁容」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毁容'] },
  });

  D('disgrace', {
    etymology: {
      origin: '现代英语常用词「disgrace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disgrace', gloss: '耻辱' },
      suffix: null,
      history: [
        { label: 'disgrace', text: '现代英语常用词「disgrace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：耻辱。' },
      ],
      formationLogic: '核心义：耻辱。',
      mnemonic: '看到 disgrace，先说出「耻辱」。',
      note: '核心义：耻辱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disgrace.', chinese: '这一章反复回到同一个点：耻辱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disgrace.s1', en: 'Without that disgrace, the next paragraph is hard to follow.', zh: '没有这个耻辱，下一段会很难读。', structure: 'disgrace / 表示 / 耻辱', grammar: 'noun，围绕「耻辱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disgrace.', right: 'He gave me some advice about the disgrace.', reason: 'advice 不可数。名词 disgrace 的单复数按词典词形记。', rule: '先确定 disgrace 是noun，再套「耻辱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disgrace.q1', senseId: 'disgrace.s1', errorType: 'meaning', type: '词义选择', prompt: '「disgrace」在本条的核心意思是：', options: ['耻辱', '完全相反的意思', '一种古代钱币'], answer: '耻辱', explain: 'disgrace：耻辱。' },
      { id: 'disgrace.q2', senseId: 'disgrace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disgrace?', options: ['耻辱', 'a kind of ancient coin', 'the past tense of be'], answer: '耻辱', explain: '对的是「耻辱」。' },
      { id: 'disgrace.q3', senseId: 'disgrace.s1', errorType: 'grammar', type: '词义选择', prompt: 'disgrace 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disgrace.q4', senseId: 'disgrace.s1', errorType: 'meaning', type: '词源', prompt: '记 disgrace 时，哪句更稳妥？', options: ['先锁住「耻辱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耻辱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耻辱'] },
  });

  D('disguise', {
    etymology: {
      origin: '现代英语常用词「disguise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disguise', gloss: '伪装' },
      suffix: null,
      history: [
        { label: 'disguise', text: '现代英语常用词「disguise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：伪装。' },
      ],
      formationLogic: '核心义：伪装。',
      mnemonic: '看到 disguise，先说出「伪装」。',
      note: '核心义：伪装。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disguise.', chinese: '这一章反复回到同一个点：伪装。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disguise.s1', en: 'Without that disguise, the next paragraph is hard to follow.', zh: '没有这个伪装，下一段会很难读。', structure: 'disguise / 表示 / 伪装', grammar: 'noun，围绕「伪装」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disguise.', right: 'He gave me some advice about the disguise.', reason: 'advice 不可数。名词 disguise 的单复数按词典词形记。', rule: '先确定 disguise 是noun，再套「伪装」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disguise.q1', senseId: 'disguise.s1', errorType: 'meaning', type: '词义选择', prompt: '「disguise」在本条的核心意思是：', options: ['伪装', '完全相反的意思', '一种古代钱币'], answer: '伪装', explain: 'disguise：伪装。' },
      { id: 'disguise.q2', senseId: 'disguise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disguise?', options: ['伪装', 'a kind of ancient coin', 'the past tense of be'], answer: '伪装', explain: '对的是「伪装」。' },
      { id: 'disguise.q3', senseId: 'disguise.s1', errorType: 'grammar', type: '词义选择', prompt: 'disguise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disguise.q4', senseId: 'disguise.s1', errorType: 'meaning', type: '词源', prompt: '记 disguise 时，哪句更稳妥？', options: ['先锁住「伪装」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「伪装」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伪装'] },
  });

  D('disgust', {
    etymology: {
      origin: 'dis- + gust「味道」。味道让人受不了。',
      prefix: null,
      root: { text: 'disgust', gloss: '厌恶' },
      suffix: null,
      history: [
        { label: 'disgust', text: 'dis- + gust「味道」。味道让人受不了。' },
        { label: '现在', text: '核心用法是：厌恶。' },
      ],
      formationLogic: '考试认现在的用法：厌恶。',
      mnemonic: '看到 disgust，先说出「厌恶」。',
      note: '考试认现在的用法：厌恶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disgust.', chinese: '这一章反复回到同一个点：厌恶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disgust.s1', en: 'Without that disgust, the next paragraph is hard to follow.', zh: '没有这个厌恶，下一段会很难读。', structure: 'disgust / 表示 / 厌恶', grammar: 'noun，围绕「厌恶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disgust.', right: 'He gave me some advice about the disgust.', reason: 'advice 不可数。名词 disgust 的单复数按词典词形记。', rule: '先确定 disgust 是noun，再套「厌恶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disgust.q1', senseId: 'disgust.s1', errorType: 'meaning', type: '词义选择', prompt: '「disgust」在本条的核心意思是：', options: ['厌恶', '完全相反的意思', '一种古代钱币'], answer: '厌恶', explain: 'disgust：厌恶。' },
      { id: 'disgust.q2', senseId: 'disgust.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disgust?', options: ['厌恶', 'a kind of ancient coin', 'the past tense of be'], answer: '厌恶', explain: '对的是「厌恶」。' },
      { id: 'disgust.q3', senseId: 'disgust.s1', errorType: 'grammar', type: '词义选择', prompt: 'disgust 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disgust.q4', senseId: 'disgust.s1', errorType: 'meaning', type: '词源', prompt: '记 disgust 时，哪句更稳妥？', options: ['先锁住「厌恶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厌恶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厌恶'] },
  });

  D('disgusting', {
    etymology: {
      origin: '英语派生：disgust + -ing，词性转到「令人作呕的」。',
      prefix: null,
      root: { text: 'disgust', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disgusting', text: '英语派生：disgust + -ing，词性转到「令人作呕的」。' },
        { label: '现在', text: '核心用法是：令人作呕的。' },
      ],
      formationLogic: '先认词干 disgust，再看词尾。',
      mnemonic: '看到 disgusting，先说出「令人作呕的」。',
      note: '先认词干 disgust，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was disgusting.', chinese: '即使是初读者也能看出，这个结果是令人作呕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disgusting.s1', en: 'They wanted a disgusting answer, not a long speech.', zh: '他们要一个令人作呕的的答复，不要长篇发言。', structure: 'disgusting / 表示 / 令人作呕的', grammar: 'adjective，围绕「令人作呕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are disgusting.', right: 'The news is disgusting.', reason: 'news 作主语时动词用单数。', rule: '先确定 disgusting 是adjective，再套「令人作呕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disgusting.q1', senseId: 'disgusting.s1', errorType: 'meaning', type: '词义选择', prompt: '「disgusting」在本条的核心意思是：', options: ['令人作呕的', '完全相反的意思', '一种古代钱币'], answer: '令人作呕的', explain: 'disgusting：令人作呕的。' },
      { id: 'disgusting.q2', senseId: 'disgusting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disgusting?', options: ['令人作呕的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人作呕的', explain: '对的是「令人作呕的」。' },
      { id: 'disgusting.q3', senseId: 'disgusting.s1', errorType: 'grammar', type: '词义选择', prompt: 'disgusting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'disgusting.q4', senseId: 'disgusting.s1', errorType: 'meaning', type: '词源', prompt: '记 disgusting 时，哪句更稳妥？', options: ['先锁住「令人作呕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「令人作呕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人作呕的'] },
  });

  D('dish', {
    etymology: {
      origin: '拉丁语 discus「盘」。',
      prefix: null,
      root: { text: 'dish', gloss: '盘子' },
      suffix: null,
      history: [
        { label: 'dish', text: '拉丁语 discus「盘」。' },
        { label: '现在', text: '核心用法是：盘子。' },
      ],
      formationLogic: '考试认现在的用法：盘子。',
      mnemonic: '看到 dish，先说出「盘子」。',
      note: '考试认现在的用法：盘子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dish.', chinese: '这一章反复回到同一个点：盘子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dish.s1', en: 'Without that dish, the next paragraph is hard to follow.', zh: '没有这个盘子，下一段会很难读。', structure: 'dish / 表示 / 盘子', grammar: 'noun，围绕「盘子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dish.', right: 'He gave me some advice about the dish.', reason: 'advice 不可数。名词 dish 的单复数按词典词形记。', rule: '先确定 dish 是noun，再套「盘子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dish.q1', senseId: 'dish.s1', errorType: 'meaning', type: '词义选择', prompt: '「dish」在本条的核心意思是：', options: ['盘子', '完全相反的意思', '一种古代钱币'], answer: '盘子', explain: 'dish：盘子。' },
      { id: 'dish.q2', senseId: 'dish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dish?', options: ['盘子', 'a kind of ancient coin', 'the past tense of be'], answer: '盘子', explain: '对的是「盘子」。' },
      { id: 'dish.q3', senseId: 'dish.s1', errorType: 'grammar', type: '词义选择', prompt: 'dish 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dish.q4', senseId: 'dish.s1', errorType: 'meaning', type: '词源', prompt: '记 dish 时，哪句更稳妥？', options: ['先锁住「盘子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「盘子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['盘子'] },
  });

  D('dish up', {
    etymology: {
      origin: '现代英语固定说法「dish up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dish up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dish up', text: '现代英语固定说法「dish up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：端上（饭菜）。' },
      ],
      formationLogic: '核心义：端上（饭菜）。',
      mnemonic: '看到 dish up，先说出「端上（饭菜）」。',
      note: '核心义：端上（饭菜）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dish up" and asked the class to keep it as one unit.', chinese: '老师把「dish up」圈出来，让全班把它当成一个整体。它表示端上（饭菜）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dish up.s1', en: 'In the margin she wrote "dish up" so nobody would split the phrase.', zh: '她在页边写下「dish up」，免得有人把这个说法拆开。意思是端上（饭菜）。', structure: 'dish up / 表示 / 端上（饭菜）', grammar: 'verb，围绕「端上（饭菜）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dish up and lost the point.', right: 'Keep "dish up" together: it means 端上（饭菜）.', reason: '「dish up」要整块理解。', rule: '先确定 dish up 是verb，再套「端上（饭菜）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dish up.q1', senseId: 'dish up.s1', errorType: 'meaning', type: '词义选择', prompt: '「dish up」在本条的核心意思是：', options: ['端上（饭菜）', '完全相反的意思', '一种古代钱币'], answer: '端上（饭菜）', explain: 'dish up：端上（饭菜）。' },
      { id: 'dish up.q2', senseId: 'dish up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dish up?', options: ['端上（饭菜）', 'a kind of ancient coin', 'the past tense of be'], answer: '端上（饭菜）', explain: '对的是「端上（饭菜）」。' },
      { id: 'dish up.q3', senseId: 'dish up.s1', errorType: 'grammar', type: '词义选择', prompt: 'dish up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dish up.q4', senseId: 'dish up.s1', errorType: 'meaning', type: '词源', prompt: '记 dish up 时，哪句更稳妥？', options: ['先锁住「端上（饭菜）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「端上（饭菜）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['端上（饭菜）'] },
  });

  D('dishearten', {
    etymology: {
      origin: '现代英语常用词「dishearten」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dishearten', gloss: '使灰心' },
      suffix: null,
      history: [
        { label: 'dishearten', text: '现代英语常用词「dishearten」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使灰心。' },
      ],
      formationLogic: '核心义：使灰心。',
      mnemonic: '看到 dishearten，先说出「使灰心」。',
      note: '核心义：使灰心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dishearten before the office closed.', chinese: '他们同意在办公室关门前做这件事：使灰心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dishearten.s1', en: 'The deadline forced the team to dishearten that afternoon.', zh: '截止日期逼着小组在那天下午使灰心。', structure: 'dishearten / 表示 / 使灰心', grammar: 'verb，围绕「使灰心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disheartened it yesterday without checking the real past form.', right: 'Check the past form of "dishearten" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dishearten 是verb，再套「使灰心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dishearten.q1', senseId: 'dishearten.s1', errorType: 'meaning', type: '词义选择', prompt: '「dishearten」在本条的核心意思是：', options: ['使灰心', '完全相反的意思', '一种古代钱币'], answer: '使灰心', explain: 'dishearten：使灰心。' },
      { id: 'dishearten.q2', senseId: 'dishearten.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dishearten?', options: ['使灰心', 'a kind of ancient coin', 'the past tense of be'], answer: '使灰心', explain: '对的是「使灰心」。' },
      { id: 'dishearten.q3', senseId: 'dishearten.s1', errorType: 'grammar', type: '词义选择', prompt: 'dishearten 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dishearten.q4', senseId: 'dishearten.s1', errorType: 'meaning', type: '词源', prompt: '记 dishearten 时，哪句更稳妥？', options: ['先锁住「使灰心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使灰心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使灰心'] },
  });

  D('dishonest', {
    etymology: {
      origin: '现代英语常用词「dishonest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dishonest', gloss: '不诚实的' },
      suffix: null,
      history: [
        { label: 'dishonest', text: '现代英语常用词「dishonest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不诚实的。' },
      ],
      formationLogic: '核心义：不诚实的。',
      mnemonic: '看到 dishonest，先说出「不诚实的」。',
      note: '核心义：不诚实的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dishonest.', chinese: '即使是初读者也能看出，这个结果是不诚实的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dishonest.s1', en: 'They wanted a dishonest answer, not a long speech.', zh: '他们要一个不诚实的的答复，不要长篇发言。', structure: 'dishonest / 表示 / 不诚实的', grammar: 'adjective，围绕「不诚实的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dishonest.', right: 'The news is dishonest.', reason: 'news 作主语时动词用单数。', rule: '先确定 dishonest 是adjective，再套「不诚实的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dishonest.q1', senseId: 'dishonest.s1', errorType: 'meaning', type: '词义选择', prompt: '「dishonest」在本条的核心意思是：', options: ['不诚实的', '完全相反的意思', '一种古代钱币'], answer: '不诚实的', explain: 'dishonest：不诚实的。' },
      { id: 'dishonest.q2', senseId: 'dishonest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dishonest?', options: ['不诚实的', 'a kind of ancient coin', 'the past tense of be'], answer: '不诚实的', explain: '对的是「不诚实的」。' },
      { id: 'dishonest.q3', senseId: 'dishonest.s1', errorType: 'grammar', type: '词义选择', prompt: 'dishonest 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dishonest.q4', senseId: 'dishonest.s1', errorType: 'meaning', type: '词源', prompt: '记 dishonest 时，哪句更稳妥？', options: ['先锁住「不诚实的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不诚实的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不诚实的'] },
  });

  D('disinformation', {
    etymology: {
      origin: '英语派生：disinforma + -tion，词性转到「虚假信息」。',
      prefix: null,
      root: { text: 'disinforma', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disinformation', text: '英语派生：disinforma + -tion，词性转到「虚假信息」。' },
        { label: '现在', text: '核心用法是：虚假信息。' },
      ],
      formationLogic: '先认词干 disinforma，再看词尾。',
      mnemonic: '看到 disinformation，先说出「虚假信息」。',
      note: '先认词干 disinforma，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disinformation.', chinese: '这一章反复回到同一个点：虚假信息。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disinformation.s1', en: 'Without that disinformation, the next paragraph is hard to follow.', zh: '没有这个虚假信息，下一段会很难读。', structure: 'disinformation / 表示 / 虚假信息', grammar: 'noun，围绕「虚假信息」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disinformation.', right: 'He gave me some advice about the disinformation.', reason: 'advice 不可数。名词 disinformation 的单复数按词典词形记。', rule: '先确定 disinformation 是noun，再套「虚假信息」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disinformation.q1', senseId: 'disinformation.s1', errorType: 'meaning', type: '词义选择', prompt: '「disinformation」在本条的核心意思是：', options: ['虚假信息', '完全相反的意思', '一种古代钱币'], answer: '虚假信息', explain: 'disinformation：虚假信息。' },
      { id: 'disinformation.q2', senseId: 'disinformation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disinformation?', options: ['虚假信息', 'a kind of ancient coin', 'the past tense of be'], answer: '虚假信息', explain: '对的是「虚假信息」。' },
      { id: 'disinformation.q3', senseId: 'disinformation.s1', errorType: 'grammar', type: '词义选择', prompt: 'disinformation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disinformation.q4', senseId: 'disinformation.s1', errorType: 'meaning', type: '词源', prompt: '记 disinformation 时，哪句更稳妥？', options: ['先锁住「虚假信息」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「虚假信息」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['虚假信息'] },
  });

  D('disintegrate', {
    etymology: {
      origin: '现代英语常用词「disintegrate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disintegrate', gloss: '分解' },
      suffix: null,
      history: [
        { label: 'disintegrate', text: '现代英语常用词「disintegrate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：分解。' },
      ],
      formationLogic: '核心义：分解。',
      mnemonic: '看到 disintegrate，先说出「分解」。',
      note: '核心义：分解。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disintegrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：分解。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disintegrate.s1', en: 'The deadline forced the team to disintegrate that afternoon.', zh: '截止日期逼着小组在那天下午分解。', structure: 'disintegrate / 表示 / 分解', grammar: 'verb，围绕「分解」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disintegrateed it yesterday without checking the real past form.', right: 'Check the past form of "disintegrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disintegrate 是verb，再套「分解」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disintegrate.q1', senseId: 'disintegrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「disintegrate」在本条的核心意思是：', options: ['分解', '完全相反的意思', '一种古代钱币'], answer: '分解', explain: 'disintegrate：分解。' },
      { id: 'disintegrate.q2', senseId: 'disintegrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disintegrate?', options: ['分解', 'a kind of ancient coin', 'the past tense of be'], answer: '分解', explain: '对的是「分解」。' },
      { id: 'disintegrate.q3', senseId: 'disintegrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'disintegrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disintegrate.q4', senseId: 'disintegrate.s1', errorType: 'meaning', type: '词源', prompt: '记 disintegrate 时，哪句更稳妥？', options: ['先锁住「分解」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分解」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分解'] },
  });

  D('disk', {
    etymology: {
      origin: '现代英语常用词「disk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disk', gloss: '磁盘' },
      suffix: null,
      history: [
        { label: 'disk', text: '现代英语常用词「disk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：磁盘。' },
      ],
      formationLogic: '核心义：磁盘。',
      mnemonic: '看到 disk，先说出「磁盘」。',
      note: '核心义：磁盘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disk.', chinese: '这一章反复回到同一个点：磁盘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disk.s1', en: 'Without that disk, the next paragraph is hard to follow.', zh: '没有这个磁盘，下一段会很难读。', structure: 'disk / 表示 / 磁盘', grammar: 'noun，围绕「磁盘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disk.', right: 'He gave me some advice about the disk.', reason: 'advice 不可数。名词 disk 的单复数按词典词形记。', rule: '先确定 disk 是noun，再套「磁盘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disk.q1', senseId: 'disk.s1', errorType: 'meaning', type: '词义选择', prompt: '「disk」在本条的核心意思是：', options: ['磁盘', '完全相反的意思', '一种古代钱币'], answer: '磁盘', explain: 'disk：磁盘。' },
      { id: 'disk.q2', senseId: 'disk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disk?', options: ['磁盘', 'a kind of ancient coin', 'the past tense of be'], answer: '磁盘', explain: '对的是「磁盘」。' },
      { id: 'disk.q3', senseId: 'disk.s1', errorType: 'grammar', type: '词义选择', prompt: 'disk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disk.q4', senseId: 'disk.s1', errorType: 'meaning', type: '词源', prompt: '记 disk 时，哪句更稳妥？', options: ['先锁住「磁盘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「磁盘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['磁盘'] },
  });

  D('dislike', {
    etymology: {
      origin: 'dis- + like。',
      prefix: null,
      root: { text: 'dislike', gloss: '不喜欢' },
      suffix: null,
      history: [
        { label: 'dislike', text: 'dis- + like。' },
        { label: '现在', text: '核心用法是：不喜欢。' },
      ],
      formationLogic: '考试认现在的用法：不喜欢。',
      mnemonic: '看到 dislike，先说出「不喜欢」。',
      note: '考试认现在的用法：不喜欢。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dislike.', chinese: '这一章反复回到同一个点：不喜欢。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dislike.s1', en: 'Without that dislike, the next paragraph is hard to follow.', zh: '没有这个不喜欢，下一段会很难读。', structure: 'dislike / 表示 / 不喜欢', grammar: 'noun，围绕「不喜欢」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dislike.', right: 'He gave me some advice about the dislike.', reason: 'advice 不可数。名词 dislike 的单复数按词典词形记。', rule: '先确定 dislike 是noun，再套「不喜欢」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dislike.q1', senseId: 'dislike.s1', errorType: 'meaning', type: '词义选择', prompt: '「dislike」在本条的核心意思是：', options: ['不喜欢', '完全相反的意思', '一种古代钱币'], answer: '不喜欢', explain: 'dislike：不喜欢。' },
      { id: 'dislike.q2', senseId: 'dislike.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dislike?', options: ['不喜欢', 'a kind of ancient coin', 'the past tense of be'], answer: '不喜欢', explain: '对的是「不喜欢」。' },
      { id: 'dislike.q3', senseId: 'dislike.s1', errorType: 'grammar', type: '词义选择', prompt: 'dislike 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dislike.q4', senseId: 'dislike.s1', errorType: 'meaning', type: '词源', prompt: '记 dislike 时，哪句更稳妥？', options: ['先锁住「不喜欢」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不喜欢」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不喜欢'] },
  });

  D('disloyal', {
    etymology: {
      origin: '英语派生：disloy + -al，词性转到「不忠的」。',
      prefix: null,
      root: { text: 'disloy', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disloyal', text: '英语派生：disloy + -al，词性转到「不忠的」。' },
        { label: '现在', text: '核心用法是：不忠的。' },
      ],
      formationLogic: '先认词干 disloy，再看词尾。',
      mnemonic: '看到 disloyal，先说出「不忠的」。',
      note: '先认词干 disloy，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was disloyal.', chinese: '即使是初读者也能看出，这个结果是不忠的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disloyal.s1', en: 'They wanted a disloyal answer, not a long speech.', zh: '他们要一个不忠的的答复，不要长篇发言。', structure: 'disloyal / 表示 / 不忠的', grammar: 'adjective，围绕「不忠的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are disloyal.', right: 'The news is disloyal.', reason: 'news 作主语时动词用单数。', rule: '先确定 disloyal 是adjective，再套「不忠的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disloyal.q1', senseId: 'disloyal.s1', errorType: 'meaning', type: '词义选择', prompt: '「disloyal」在本条的核心意思是：', options: ['不忠的', '完全相反的意思', '一种古代钱币'], answer: '不忠的', explain: 'disloyal：不忠的。' },
      { id: 'disloyal.q2', senseId: 'disloyal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disloyal?', options: ['不忠的', 'a kind of ancient coin', 'the past tense of be'], answer: '不忠的', explain: '对的是「不忠的」。' },
      { id: 'disloyal.q3', senseId: 'disloyal.s1', errorType: 'grammar', type: '词义选择', prompt: 'disloyal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'disloyal.q4', senseId: 'disloyal.s1', errorType: 'meaning', type: '词源', prompt: '记 disloyal 时，哪句更稳妥？', options: ['先锁住「不忠的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不忠的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不忠的'] },
  });

  D('dismal', {
    etymology: {
      origin: '英语派生：dism + -al，词性转到「阴郁的」。',
      prefix: null,
      root: { text: 'dism', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dismal', text: '英语派生：dism + -al，词性转到「阴郁的」。' },
        { label: '现在', text: '核心用法是：阴郁的。' },
      ],
      formationLogic: '先认词干 dism，再看词尾。',
      mnemonic: '看到 dismal，先说出「阴郁的」。',
      note: '先认词干 dism，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dismal.', chinese: '即使是初读者也能看出，这个结果是阴郁的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dismal.s1', en: 'They wanted a dismal answer, not a long speech.', zh: '他们要一个阴郁的的答复，不要长篇发言。', structure: 'dismal / 表示 / 阴郁的', grammar: 'adjective，围绕「阴郁的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dismal.', right: 'The news is dismal.', reason: 'news 作主语时动词用单数。', rule: '先确定 dismal 是adjective，再套「阴郁的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dismal.q1', senseId: 'dismal.s1', errorType: 'meaning', type: '词义选择', prompt: '「dismal」在本条的核心意思是：', options: ['阴郁的', '完全相反的意思', '一种古代钱币'], answer: '阴郁的', explain: 'dismal：阴郁的。' },
      { id: 'dismal.q2', senseId: 'dismal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dismal?', options: ['阴郁的', 'a kind of ancient coin', 'the past tense of be'], answer: '阴郁的', explain: '对的是「阴郁的」。' },
      { id: 'dismal.q3', senseId: 'dismal.s1', errorType: 'grammar', type: '词义选择', prompt: 'dismal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dismal.q4', senseId: 'dismal.s1', errorType: 'meaning', type: '词源', prompt: '记 dismal 时，哪句更稳妥？', options: ['先锁住「阴郁的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「阴郁的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['阴郁的'] },
  });

  D('dismantle', {
    etymology: {
      origin: '现代英语常用词「dismantle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dismantle', gloss: '拆除' },
      suffix: null,
      history: [
        { label: 'dismantle', text: '现代英语常用词「dismantle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拆除。' },
      ],
      formationLogic: '核心义：拆除。',
      mnemonic: '看到 dismantle，先说出「拆除」。',
      note: '核心义：拆除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dismantle before the office closed.', chinese: '他们同意在办公室关门前做这件事：拆除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dismantle.s1', en: 'The deadline forced the team to dismantle that afternoon.', zh: '截止日期逼着小组在那天下午拆除。', structure: 'dismantle / 表示 / 拆除', grammar: 'verb，围绕「拆除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dismantleed it yesterday without checking the real past form.', right: 'Check the past form of "dismantle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dismantle 是verb，再套「拆除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dismantle.q1', senseId: 'dismantle.s1', errorType: 'meaning', type: '词义选择', prompt: '「dismantle」在本条的核心意思是：', options: ['拆除', '完全相反的意思', '一种古代钱币'], answer: '拆除', explain: 'dismantle：拆除。' },
      { id: 'dismantle.q2', senseId: 'dismantle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dismantle?', options: ['拆除', 'a kind of ancient coin', 'the past tense of be'], answer: '拆除', explain: '对的是「拆除」。' },
      { id: 'dismantle.q3', senseId: 'dismantle.s1', errorType: 'grammar', type: '词义选择', prompt: 'dismantle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dismantle.q4', senseId: 'dismantle.s1', errorType: 'meaning', type: '词源', prompt: '记 dismantle 时，哪句更稳妥？', options: ['先锁住「拆除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拆除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拆除'] },
  });

  D('dismay', {
    etymology: {
      origin: '现代英语常用词「dismay」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dismay', gloss: '沮丧' },
      suffix: null,
      history: [
        { label: 'dismay', text: '现代英语常用词「dismay」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：沮丧。' },
      ],
      formationLogic: '核心义：沮丧。',
      mnemonic: '看到 dismay，先说出「沮丧」。',
      note: '核心义：沮丧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dismay.', chinese: '这一章反复回到同一个点：沮丧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dismay.s1', en: 'Without that dismay, the next paragraph is hard to follow.', zh: '没有这个沮丧，下一段会很难读。', structure: 'dismay / 表示 / 沮丧', grammar: 'noun，围绕「沮丧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dismay.', right: 'He gave me some advice about the dismay.', reason: 'advice 不可数。名词 dismay 的单复数按词典词形记。', rule: '先确定 dismay 是noun，再套「沮丧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dismay.q1', senseId: 'dismay.s1', errorType: 'meaning', type: '词义选择', prompt: '「dismay」在本条的核心意思是：', options: ['沮丧', '完全相反的意思', '一种古代钱币'], answer: '沮丧', explain: 'dismay：沮丧。' },
      { id: 'dismay.q2', senseId: 'dismay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dismay?', options: ['沮丧', 'a kind of ancient coin', 'the past tense of be'], answer: '沮丧', explain: '对的是「沮丧」。' },
      { id: 'dismay.q3', senseId: 'dismay.s1', errorType: 'grammar', type: '词义选择', prompt: 'dismay 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dismay.q4', senseId: 'dismay.s1', errorType: 'meaning', type: '词源', prompt: '记 dismay 时，哪句更稳妥？', options: ['先锁住「沮丧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沮丧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沮丧'] },
  });

  D('dismiss', {
    etymology: {
      origin: '拉丁语 dimittere「送走」。',
      prefix: null,
      root: { text: 'dismiss', gloss: '解雇' },
      suffix: null,
      history: [
        { label: 'dismiss', text: '拉丁语 dimittere「送走」。' },
        { label: '现在', text: '核心用法是：解雇。' },
      ],
      formationLogic: '考试认现在的用法：解雇。',
      mnemonic: '看到 dismiss，先说出「解雇」。',
      note: '考试认现在的用法：解雇。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dismiss before the office closed.', chinese: '他们同意在办公室关门前做这件事：解雇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dismiss.s1', en: 'The deadline forced the team to dismiss that afternoon.', zh: '截止日期逼着小组在那天下午解雇。', structure: 'dismiss / 表示 / 解雇', grammar: 'verb，围绕「解雇」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dismissed it yesterday without checking the real past form.', right: 'Check the past form of "dismiss" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dismiss 是verb，再套「解雇」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dismiss.q1', senseId: 'dismiss.s1', errorType: 'meaning', type: '词义选择', prompt: '「dismiss」在本条的核心意思是：', options: ['解雇', '完全相反的意思', '一种古代钱币'], answer: '解雇', explain: 'dismiss：解雇。' },
      { id: 'dismiss.q2', senseId: 'dismiss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dismiss?', options: ['解雇', 'a kind of ancient coin', 'the past tense of be'], answer: '解雇', explain: '对的是「解雇」。' },
      { id: 'dismiss.q3', senseId: 'dismiss.s1', errorType: 'grammar', type: '词义选择', prompt: 'dismiss 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dismiss.q4', senseId: 'dismiss.s1', errorType: 'meaning', type: '词源', prompt: '记 dismiss 时，哪句更稳妥？', options: ['先锁住「解雇」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解雇」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解雇'] },
  });

  D('dismissal', {
    etymology: {
      origin: '英语派生：dismiss + -al，词性转到「解雇」。',
      prefix: null,
      root: { text: 'dismiss', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dismissal', text: '英语派生：dismiss + -al，词性转到「解雇」。' },
        { label: '现在', text: '核心用法是：解雇。' },
      ],
      formationLogic: '先认词干 dismiss，再看词尾。',
      mnemonic: '看到 dismissal，先说出「解雇」。',
      note: '先认词干 dismiss，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dismissal.', chinese: '这一章反复回到同一个点：解雇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dismissal.s1', en: 'Without that dismissal, the next paragraph is hard to follow.', zh: '没有这个解雇，下一段会很难读。', structure: 'dismissal / 表示 / 解雇', grammar: 'noun，围绕「解雇」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dismissal.', right: 'He gave me some advice about the dismissal.', reason: 'advice 不可数。名词 dismissal 的单复数按词典词形记。', rule: '先确定 dismissal 是noun，再套「解雇」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dismissal.q1', senseId: 'dismissal.s1', errorType: 'meaning', type: '词义选择', prompt: '「dismissal」在本条的核心意思是：', options: ['解雇', '完全相反的意思', '一种古代钱币'], answer: '解雇', explain: 'dismissal：解雇。' },
      { id: 'dismissal.q2', senseId: 'dismissal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dismissal?', options: ['解雇', 'a kind of ancient coin', 'the past tense of be'], answer: '解雇', explain: '对的是「解雇」。' },
      { id: 'dismissal.q3', senseId: 'dismissal.s1', errorType: 'grammar', type: '词义选择', prompt: 'dismissal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dismissal.q4', senseId: 'dismissal.s1', errorType: 'meaning', type: '词源', prompt: '记 dismissal 时，哪句更稳妥？', options: ['先锁住「解雇」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解雇」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解雇'] },
  });

  D('dismissed', {
    etymology: {
      origin: '现代英语常用词「dismissed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dismissed', gloss: '被解雇的' },
      suffix: null,
      history: [
        { label: 'dismissed', text: '现代英语常用词「dismissed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被解雇的。' },
      ],
      formationLogic: '核心义：被解雇的。',
      mnemonic: '看到 dismissed，先说出「被解雇的」。',
      note: '核心义：被解雇的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dismissed.', chinese: '即使是初读者也能看出，这个结果是被解雇的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dismissed.s1', en: 'They wanted a dismissed answer, not a long speech.', zh: '他们要一个被解雇的的答复，不要长篇发言。', structure: 'dismissed / 表示 / 被解雇的', grammar: 'adjective，围绕「被解雇的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dismissed.', right: 'The news is dismissed.', reason: 'news 作主语时动词用单数。', rule: '先确定 dismissed 是adjective，再套「被解雇的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dismissed.q1', senseId: 'dismissed.s1', errorType: 'meaning', type: '词义选择', prompt: '「dismissed」在本条的核心意思是：', options: ['被解雇的', '完全相反的意思', '一种古代钱币'], answer: '被解雇的', explain: 'dismissed：被解雇的。' },
      { id: 'dismissed.q2', senseId: 'dismissed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dismissed?', options: ['被解雇的', 'a kind of ancient coin', 'the past tense of be'], answer: '被解雇的', explain: '对的是「被解雇的」。' },
      { id: 'dismissed.q3', senseId: 'dismissed.s1', errorType: 'grammar', type: '词义选择', prompt: 'dismissed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dismissed.q4', senseId: 'dismissed.s1', errorType: 'meaning', type: '词源', prompt: '记 dismissed 时，哪句更稳妥？', options: ['先锁住「被解雇的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被解雇的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被解雇的'] },
  });

  D('disobedient', {
    etymology: {
      origin: '现代英语常用词「disobedient」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disobedient', gloss: '不服从的' },
      suffix: null,
      history: [
        { label: 'disobedient', text: '现代英语常用词「disobedient」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不服从的。' },
      ],
      formationLogic: '核心义：不服从的。',
      mnemonic: '看到 disobedient，先说出「不服从的」。',
      note: '核心义：不服从的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was disobedient.', chinese: '即使是初读者也能看出，这个结果是不服从的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disobedient.s1', en: 'They wanted a disobedient answer, not a long speech.', zh: '他们要一个不服从的的答复，不要长篇发言。', structure: 'disobedient / 表示 / 不服从的', grammar: 'adjective，围绕「不服从的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are disobedient.', right: 'The news is disobedient.', reason: 'news 作主语时动词用单数。', rule: '先确定 disobedient 是adjective，再套「不服从的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disobedient.q1', senseId: 'disobedient.s1', errorType: 'meaning', type: '词义选择', prompt: '「disobedient」在本条的核心意思是：', options: ['不服从的', '完全相反的意思', '一种古代钱币'], answer: '不服从的', explain: 'disobedient：不服从的。' },
      { id: 'disobedient.q2', senseId: 'disobedient.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disobedient?', options: ['不服从的', 'a kind of ancient coin', 'the past tense of be'], answer: '不服从的', explain: '对的是「不服从的」。' },
      { id: 'disobedient.q3', senseId: 'disobedient.s1', errorType: 'grammar', type: '词义选择', prompt: 'disobedient 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'disobedient.q4', senseId: 'disobedient.s1', errorType: 'meaning', type: '词源', prompt: '记 disobedient 时，哪句更稳妥？', options: ['先锁住「不服从的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不服从的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不服从的'] },
  });

  D('disobey', {
    etymology: {
      origin: '现代英语常用词「disobey」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disobey', gloss: '不服从' },
      suffix: null,
      history: [
        { label: 'disobey', text: '现代英语常用词「disobey」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不服从。' },
      ],
      formationLogic: '核心义：不服从。',
      mnemonic: '看到 disobey，先说出「不服从」。',
      note: '核心义：不服从。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disobey before the office closed.', chinese: '他们同意在办公室关门前做这件事：不服从。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disobey.s1', en: 'The deadline forced the team to disobey that afternoon.', zh: '截止日期逼着小组在那天下午不服从。', structure: 'disobey / 表示 / 不服从', grammar: 'verb，围绕「不服从」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disobeyed it yesterday without checking the real past form.', right: 'Check the past form of "disobey" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disobey 是verb，再套「不服从」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disobey.q1', senseId: 'disobey.s1', errorType: 'meaning', type: '词义选择', prompt: '「disobey」在本条的核心意思是：', options: ['不服从', '完全相反的意思', '一种古代钱币'], answer: '不服从', explain: 'disobey：不服从。' },
      { id: 'disobey.q2', senseId: 'disobey.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disobey?', options: ['不服从', 'a kind of ancient coin', 'the past tense of be'], answer: '不服从', explain: '对的是「不服从」。' },
      { id: 'disobey.q3', senseId: 'disobey.s1', errorType: 'grammar', type: '词义选择', prompt: 'disobey 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disobey.q4', senseId: 'disobey.s1', errorType: 'meaning', type: '词源', prompt: '记 disobey 时，哪句更稳妥？', options: ['先锁住「不服从」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不服从」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不服从'] },
  });

  D('disorder', {
    etymology: {
      origin: '英语派生：disord + -er，词性转到「混乱」。',
      prefix: null,
      root: { text: 'disord', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disorder', text: '英语派生：disord + -er，词性转到「混乱」。' },
        { label: '现在', text: '核心用法是：混乱。' },
      ],
      formationLogic: '先认词干 disord，再看词尾。',
      mnemonic: '看到 disorder，先说出「混乱」。',
      note: '先认词干 disord，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disorder.', chinese: '这一章反复回到同一个点：混乱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disorder.s1', en: 'Without that disorder, the next paragraph is hard to follow.', zh: '没有这个混乱，下一段会很难读。', structure: 'disorder / 表示 / 混乱', grammar: 'noun，围绕「混乱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disorder.', right: 'He gave me some advice about the disorder.', reason: 'advice 不可数。名词 disorder 的单复数按词典词形记。', rule: '先确定 disorder 是noun，再套「混乱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disorder.q1', senseId: 'disorder.s1', errorType: 'meaning', type: '词义选择', prompt: '「disorder」在本条的核心意思是：', options: ['混乱', '完全相反的意思', '一种古代钱币'], answer: '混乱', explain: 'disorder：混乱。' },
      { id: 'disorder.q2', senseId: 'disorder.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disorder?', options: ['混乱', 'a kind of ancient coin', 'the past tense of be'], answer: '混乱', explain: '对的是「混乱」。' },
      { id: 'disorder.q3', senseId: 'disorder.s1', errorType: 'grammar', type: '词义选择', prompt: 'disorder 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disorder.q4', senseId: 'disorder.s1', errorType: 'meaning', type: '词源', prompt: '记 disorder 时，哪句更稳妥？', options: ['先锁住「混乱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「混乱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['混乱'] },
  });

  D('disparity', {
    etymology: {
      origin: '英语派生：dispar + -ity，词性转到「差距」。',
      prefix: null,
      root: { text: 'dispar', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disparity', text: '英语派生：dispar + -ity，词性转到「差距」。' },
        { label: '现在', text: '核心用法是：差距。' },
      ],
      formationLogic: '先认词干 dispar，再看词尾。',
      mnemonic: '看到 disparity，先说出「差距」。',
      note: '先认词干 dispar，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disparity.', chinese: '这一章反复回到同一个点：差距。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disparity.s1', en: 'Without that disparity, the next paragraph is hard to follow.', zh: '没有这个差距，下一段会很难读。', structure: 'disparity / 表示 / 差距', grammar: 'noun，围绕「差距」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disparity.', right: 'He gave me some advice about the disparity.', reason: 'advice 不可数。名词 disparity 的单复数按词典词形记。', rule: '先确定 disparity 是noun，再套「差距」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disparity.q1', senseId: 'disparity.s1', errorType: 'meaning', type: '词义选择', prompt: '「disparity」在本条的核心意思是：', options: ['差距', '完全相反的意思', '一种古代钱币'], answer: '差距', explain: 'disparity：差距。' },
      { id: 'disparity.q2', senseId: 'disparity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disparity?', options: ['差距', 'a kind of ancient coin', 'the past tense of be'], answer: '差距', explain: '对的是「差距」。' },
      { id: 'disparity.q3', senseId: 'disparity.s1', errorType: 'grammar', type: '词义选择', prompt: 'disparity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disparity.q4', senseId: 'disparity.s1', errorType: 'meaning', type: '词源', prompt: '记 disparity 时，哪句更稳妥？', options: ['先锁住「差距」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「差距」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['差距'] },
  });

  D('dispatch', {
    etymology: {
      origin: '现代英语常用词「dispatch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dispatch', gloss: '派遣' },
      suffix: null,
      history: [
        { label: 'dispatch', text: '现代英语常用词「dispatch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：派遣。' },
      ],
      formationLogic: '核心义：派遣。',
      mnemonic: '看到 dispatch，先说出「派遣」。',
      note: '核心义：派遣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dispatch before the office closed.', chinese: '他们同意在办公室关门前做这件事：派遣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dispatch.s1', en: 'The deadline forced the team to dispatch that afternoon.', zh: '截止日期逼着小组在那天下午派遣。', structure: 'dispatch / 表示 / 派遣', grammar: 'verb，围绕「派遣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dispatched it yesterday without checking the real past form.', right: 'Check the past form of "dispatch" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dispatch 是verb，再套「派遣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dispatch.q1', senseId: 'dispatch.s1', errorType: 'meaning', type: '词义选择', prompt: '「dispatch」在本条的核心意思是：', options: ['派遣', '完全相反的意思', '一种古代钱币'], answer: '派遣', explain: 'dispatch：派遣。' },
      { id: 'dispatch.q2', senseId: 'dispatch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dispatch?', options: ['派遣', 'a kind of ancient coin', 'the past tense of be'], answer: '派遣', explain: '对的是「派遣」。' },
      { id: 'dispatch.q3', senseId: 'dispatch.s1', errorType: 'grammar', type: '词义选择', prompt: 'dispatch 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dispatch.q4', senseId: 'dispatch.s1', errorType: 'meaning', type: '词源', prompt: '记 dispatch 时，哪句更稳妥？', options: ['先锁住「派遣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「派遣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['派遣'] },
  });

  D('dispense', {
    etymology: {
      origin: '现代英语常用词「dispense」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dispense', gloss: '分发' },
      suffix: null,
      history: [
        { label: 'dispense', text: '现代英语常用词「dispense」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：分发。' },
      ],
      formationLogic: '核心义：分发。',
      mnemonic: '看到 dispense，先说出「分发」。',
      note: '核心义：分发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dispense before the office closed.', chinese: '他们同意在办公室关门前做这件事：分发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dispense.s1', en: 'The deadline forced the team to dispense that afternoon.', zh: '截止日期逼着小组在那天下午分发。', structure: 'dispense / 表示 / 分发', grammar: 'verb，围绕「分发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dispenseed it yesterday without checking the real past form.', right: 'Check the past form of "dispense" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dispense 是verb，再套「分发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dispense.q1', senseId: 'dispense.s1', errorType: 'meaning', type: '词义选择', prompt: '「dispense」在本条的核心意思是：', options: ['分发', '完全相反的意思', '一种古代钱币'], answer: '分发', explain: 'dispense：分发。' },
      { id: 'dispense.q2', senseId: 'dispense.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dispense?', options: ['分发', 'a kind of ancient coin', 'the past tense of be'], answer: '分发', explain: '对的是「分发」。' },
      { id: 'dispense.q3', senseId: 'dispense.s1', errorType: 'grammar', type: '词义选择', prompt: 'dispense 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dispense.q4', senseId: 'dispense.s1', errorType: 'meaning', type: '词源', prompt: '记 dispense 时，哪句更稳妥？', options: ['先锁住「分发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分发'] },
  });

  D('dispense with', {
    etymology: {
      origin: '现代英语固定说法「dispense with」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dispense with', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dispense with', text: '现代英语固定说法「dispense with」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：免除。' },
      ],
      formationLogic: '核心义：免除。',
      mnemonic: '看到 dispense with，先说出「免除」。',
      note: '核心义：免除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dispense with" and asked the class to keep it as one unit.', chinese: '老师把「dispense with」圈出来，让全班把它当成一个整体。它表示免除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dispense with.s1', en: 'In the margin she wrote "dispense with" so nobody would split the phrase.', zh: '她在页边写下「dispense with」，免得有人把这个说法拆开。意思是免除。', structure: 'dispense with / 表示 / 免除', grammar: 'verb，围绕「免除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dispense with and lost the point.', right: 'Keep "dispense with" together: it means 免除.', reason: '「dispense with」要整块理解。', rule: '先确定 dispense with 是verb，再套「免除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dispense with.q1', senseId: 'dispense with.s1', errorType: 'meaning', type: '词义选择', prompt: '「dispense with」在本条的核心意思是：', options: ['免除', '完全相反的意思', '一种古代钱币'], answer: '免除', explain: 'dispense with：免除。' },
      { id: 'dispense with.q2', senseId: 'dispense with.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dispense with?', options: ['免除', 'a kind of ancient coin', 'the past tense of be'], answer: '免除', explain: '对的是「免除」。' },
      { id: 'dispense with.q3', senseId: 'dispense with.s1', errorType: 'grammar', type: '词义选择', prompt: 'dispense with 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dispense with.q4', senseId: 'dispense with.s1', errorType: 'meaning', type: '词源', prompt: '记 dispense with 时，哪句更稳妥？', options: ['先锁住「免除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「免除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['免除'] },
  });

  D('disperse', {
    etymology: {
      origin: '现代英语常用词「disperse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disperse', gloss: '分散' },
      suffix: null,
      history: [
        { label: 'disperse', text: '现代英语常用词「disperse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：分散。' },
      ],
      formationLogic: '核心义：分散。',
      mnemonic: '看到 disperse，先说出「分散」。',
      note: '核心义：分散。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disperse before the office closed.', chinese: '他们同意在办公室关门前做这件事：分散。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disperse.s1', en: 'The deadline forced the team to disperse that afternoon.', zh: '截止日期逼着小组在那天下午分散。', structure: 'disperse / 表示 / 分散', grammar: 'verb，围绕「分散」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disperseed it yesterday without checking the real past form.', right: 'Check the past form of "disperse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disperse 是verb，再套「分散」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disperse.q1', senseId: 'disperse.s1', errorType: 'meaning', type: '词义选择', prompt: '「disperse」在本条的核心意思是：', options: ['分散', '完全相反的意思', '一种古代钱币'], answer: '分散', explain: 'disperse：分散。' },
      { id: 'disperse.q2', senseId: 'disperse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disperse?', options: ['分散', 'a kind of ancient coin', 'the past tense of be'], answer: '分散', explain: '对的是「分散」。' },
      { id: 'disperse.q3', senseId: 'disperse.s1', errorType: 'grammar', type: '词义选择', prompt: 'disperse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disperse.q4', senseId: 'disperse.s1', errorType: 'meaning', type: '词源', prompt: '记 disperse 时，哪句更稳妥？', options: ['先锁住「分散」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分散」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分散'] },
  });

  D('displace', {
    etymology: {
      origin: '现代英语常用词「displace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'displace', gloss: '取代' },
      suffix: null,
      history: [
        { label: 'displace', text: '现代英语常用词「displace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：取代。' },
      ],
      formationLogic: '核心义：取代。',
      mnemonic: '看到 displace，先说出「取代」。',
      note: '核心义：取代。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to displace before the office closed.', chinese: '他们同意在办公室关门前做这件事：取代。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'displace.s1', en: 'The deadline forced the team to displace that afternoon.', zh: '截止日期逼着小组在那天下午取代。', structure: 'displace / 表示 / 取代', grammar: 'verb，围绕「取代」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She displaceed it yesterday without checking the real past form.', right: 'Check the past form of "displace" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 displace 是verb，再套「取代」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'displace.q1', senseId: 'displace.s1', errorType: 'meaning', type: '词义选择', prompt: '「displace」在本条的核心意思是：', options: ['取代', '完全相反的意思', '一种古代钱币'], answer: '取代', explain: 'displace：取代。' },
      { id: 'displace.q2', senseId: 'displace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches displace?', options: ['取代', 'a kind of ancient coin', 'the past tense of be'], answer: '取代', explain: '对的是「取代」。' },
      { id: 'displace.q3', senseId: 'displace.s1', errorType: 'grammar', type: '词义选择', prompt: 'displace 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'displace.q4', senseId: 'displace.s1', errorType: 'meaning', type: '词源', prompt: '记 displace 时，哪句更稳妥？', options: ['先锁住「取代」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「取代」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['取代'] },
  });

  D('display', {
    etymology: {
      origin: '拉丁语 displicare「展开」。',
      prefix: null,
      root: { text: 'display', gloss: '展示' },
      suffix: null,
      history: [
        { label: 'display', text: '拉丁语 displicare「展开」。' },
        { label: '现在', text: '核心用法是：展示。' },
      ],
      formationLogic: '考试认现在的用法：展示。',
      mnemonic: '看到 display，先说出「展示」。',
      note: '考试认现在的用法：展示。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one display.', chinese: '这一章反复回到同一个点：展示。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'display.s1', en: 'Without that display, the next paragraph is hard to follow.', zh: '没有这个展示，下一段会很难读。', structure: 'display / 表示 / 展示', grammar: 'noun，围绕「展示」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the display.', right: 'He gave me some advice about the display.', reason: 'advice 不可数。名词 display 的单复数按词典词形记。', rule: '先确定 display 是noun，再套「展示」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'display.q1', senseId: 'display.s1', errorType: 'meaning', type: '词义选择', prompt: '「display」在本条的核心意思是：', options: ['展示', '完全相反的意思', '一种古代钱币'], answer: '展示', explain: 'display：展示。' },
      { id: 'display.q2', senseId: 'display.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches display?', options: ['展示', 'a kind of ancient coin', 'the past tense of be'], answer: '展示', explain: '对的是「展示」。' },
      { id: 'display.q3', senseId: 'display.s1', errorType: 'grammar', type: '词义选择', prompt: 'display 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'display.q4', senseId: 'display.s1', errorType: 'meaning', type: '词源', prompt: '记 display 时，哪句更稳妥？', options: ['先锁住「展示」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「展示」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['展示'] },
  });

  D('display case', {
    etymology: {
      origin: '现代英语固定说法「display case」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'display case', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'display case', text: '现代英语固定说法「display case」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：陈列柜。' },
      ],
      formationLogic: '核心义：陈列柜。',
      mnemonic: '看到 display case，先说出「陈列柜」。',
      note: '核心义：陈列柜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "display case" and asked the class to keep it as one unit.', chinese: '老师把「display case」圈出来，让全班把它当成一个整体。它表示陈列柜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'display case.s1', en: 'In the margin she wrote "display case" so nobody would split the phrase.', zh: '她在页边写下「display case」，免得有人把这个说法拆开。意思是陈列柜。', structure: 'display case / 表示 / 陈列柜', grammar: 'noun，围绕「陈列柜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of display case and lost the point.', right: 'Keep "display case" together: it means 陈列柜.', reason: '「display case」要整块理解。', rule: '先确定 display case 是noun，再套「陈列柜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'display case.q1', senseId: 'display case.s1', errorType: 'meaning', type: '词义选择', prompt: '「display case」在本条的核心意思是：', options: ['陈列柜', '完全相反的意思', '一种古代钱币'], answer: '陈列柜', explain: 'display case：陈列柜。' },
      { id: 'display case.q2', senseId: 'display case.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches display case?', options: ['陈列柜', 'a kind of ancient coin', 'the past tense of be'], answer: '陈列柜', explain: '对的是「陈列柜」。' },
      { id: 'display case.q3', senseId: 'display case.s1', errorType: 'grammar', type: '词义选择', prompt: 'display case 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'display case.q4', senseId: 'display case.s1', errorType: 'meaning', type: '词源', prompt: '记 display case 时，哪句更稳妥？', options: ['先锁住「陈列柜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陈列柜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陈列柜'] },
  });

  D('dispose', {
    etymology: {
      origin: '现代英语常用词「dispose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dispose', gloss: '处理' },
      suffix: null,
      history: [
        { label: 'dispose', text: '现代英语常用词「dispose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：处理。' },
      ],
      formationLogic: '核心义：处理。',
      mnemonic: '看到 dispose，先说出「处理」。',
      note: '核心义：处理。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dispose before the office closed.', chinese: '他们同意在办公室关门前做这件事：处理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dispose.s1', en: 'The deadline forced the team to dispose that afternoon.', zh: '截止日期逼着小组在那天下午处理。', structure: 'dispose / 表示 / 处理', grammar: 'verb，围绕「处理」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disposeed it yesterday without checking the real past form.', right: 'Check the past form of "dispose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dispose 是verb，再套「处理」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dispose.q1', senseId: 'dispose.s1', errorType: 'meaning', type: '词义选择', prompt: '「dispose」在本条的核心意思是：', options: ['处理', '完全相反的意思', '一种古代钱币'], answer: '处理', explain: 'dispose：处理。' },
      { id: 'dispose.q2', senseId: 'dispose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dispose?', options: ['处理', 'a kind of ancient coin', 'the past tense of be'], answer: '处理', explain: '对的是「处理」。' },
      { id: 'dispose.q3', senseId: 'dispose.s1', errorType: 'grammar', type: '词义选择', prompt: 'dispose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dispose.q4', senseId: 'dispose.s1', errorType: 'meaning', type: '词源', prompt: '记 dispose 时，哪句更稳妥？', options: ['先锁住「处理」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「处理」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['处理'] },
  });

  D('dispose of', {
    etymology: {
      origin: '现代英语固定说法「dispose of」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dispose of', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dispose of', text: '现代英语固定说法「dispose of」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：处理掉。' },
      ],
      formationLogic: '核心义：处理掉。',
      mnemonic: '看到 dispose of，先说出「处理掉」。',
      note: '核心义：处理掉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dispose of" and asked the class to keep it as one unit.', chinese: '老师把「dispose of」圈出来，让全班把它当成一个整体。它表示处理掉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dispose of.s1', en: 'In the margin she wrote "dispose of" so nobody would split the phrase.', zh: '她在页边写下「dispose of」，免得有人把这个说法拆开。意思是处理掉。', structure: 'dispose of / 表示 / 处理掉', grammar: 'verb，围绕「处理掉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dispose of and lost the point.', right: 'Keep "dispose of" together: it means 处理掉.', reason: '「dispose of」要整块理解。', rule: '先确定 dispose of 是verb，再套「处理掉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dispose of.q1', senseId: 'dispose of.s1', errorType: 'meaning', type: '词义选择', prompt: '「dispose of」在本条的核心意思是：', options: ['处理掉', '完全相反的意思', '一种古代钱币'], answer: '处理掉', explain: 'dispose of：处理掉。' },
      { id: 'dispose of.q2', senseId: 'dispose of.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dispose of?', options: ['处理掉', 'a kind of ancient coin', 'the past tense of be'], answer: '处理掉', explain: '对的是「处理掉」。' },
      { id: 'dispose of.q3', senseId: 'dispose of.s1', errorType: 'grammar', type: '词义选择', prompt: 'dispose of 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dispose of.q4', senseId: 'dispose of.s1', errorType: 'meaning', type: '词源', prompt: '记 dispose of 时，哪句更稳妥？', options: ['先锁住「处理掉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「处理掉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['处理掉'] },
  });

  D('disposition', {
    etymology: {
      origin: '英语派生：disposi + -tion，词性转到「性情」。',
      prefix: null,
      root: { text: 'disposi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disposition', text: '英语派生：disposi + -tion，词性转到「性情」。' },
        { label: '现在', text: '核心用法是：性情。' },
      ],
      formationLogic: '先认词干 disposi，再看词尾。',
      mnemonic: '看到 disposition，先说出「性情」。',
      note: '先认词干 disposi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disposition.', chinese: '这一章反复回到同一个点：性情。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disposition.s1', en: 'Without that disposition, the next paragraph is hard to follow.', zh: '没有这个性情，下一段会很难读。', structure: 'disposition / 表示 / 性情', grammar: 'noun，围绕「性情」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disposition.', right: 'He gave me some advice about the disposition.', reason: 'advice 不可数。名词 disposition 的单复数按词典词形记。', rule: '先确定 disposition 是noun，再套「性情」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disposition.q1', senseId: 'disposition.s1', errorType: 'meaning', type: '词义选择', prompt: '「disposition」在本条的核心意思是：', options: ['性情', '完全相反的意思', '一种古代钱币'], answer: '性情', explain: 'disposition：性情。' },
      { id: 'disposition.q2', senseId: 'disposition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disposition?', options: ['性情', 'a kind of ancient coin', 'the past tense of be'], answer: '性情', explain: '对的是「性情」。' },
      { id: 'disposition.q3', senseId: 'disposition.s1', errorType: 'grammar', type: '词义选择', prompt: 'disposition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disposition.q4', senseId: 'disposition.s1', errorType: 'meaning', type: '词源', prompt: '记 disposition 时，哪句更稳妥？', options: ['先锁住「性情」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「性情」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['性情'] },
  });

  D('disprove', {
    etymology: {
      origin: '现代英语常用词「disprove」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disprove', gloss: '证明…是假的' },
      suffix: null,
      history: [
        { label: 'disprove', text: '现代英语常用词「disprove」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：证明…是假的。' },
      ],
      formationLogic: '核心义：证明…是假的。',
      mnemonic: '看到 disprove，先说出「证明…是假的」。',
      note: '核心义：证明…是假的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disprove before the office closed.', chinese: '他们同意在办公室关门前做这件事：证明…是假的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disprove.s1', en: 'The deadline forced the team to disprove that afternoon.', zh: '截止日期逼着小组在那天下午证明…是假的。', structure: 'disprove / 表示 / 证明…是假的', grammar: 'verb，围绕「证明…是假的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disproveed it yesterday without checking the real past form.', right: 'Check the past form of "disprove" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disprove 是verb，再套「证明…是假的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disprove.q1', senseId: 'disprove.s1', errorType: 'meaning', type: '词义选择', prompt: '「disprove」在本条的核心意思是：', options: ['证明…是假的', '完全相反的意思', '一种古代钱币'], answer: '证明…是假的', explain: 'disprove：证明…是假的。' },
      { id: 'disprove.q2', senseId: 'disprove.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disprove?', options: ['证明…是假的', 'a kind of ancient coin', 'the past tense of be'], answer: '证明…是假的', explain: '对的是「证明…是假的」。' },
      { id: 'disprove.q3', senseId: 'disprove.s1', errorType: 'grammar', type: '词义选择', prompt: 'disprove 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disprove.q4', senseId: 'disprove.s1', errorType: 'meaning', type: '词源', prompt: '记 disprove 时，哪句更稳妥？', options: ['先锁住「证明…是假的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「证明…是假的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['证明…是假的'] },
  });

  D('dispute', {
    etymology: {
      origin: '拉丁语 disputare「把想法拆开争论」。',
      prefix: null,
      root: { text: 'dispute', gloss: '争论' },
      suffix: null,
      history: [
        { label: 'dispute', text: '拉丁语 disputare「把想法拆开争论」。' },
        { label: '现在', text: '核心用法是：争论。' },
      ],
      formationLogic: '考试认现在的用法：争论。',
      mnemonic: '看到 dispute，先说出「争论」。',
      note: '考试认现在的用法：争论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dispute.', chinese: '这一章反复回到同一个点：争论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dispute.s1', en: 'Without that dispute, the next paragraph is hard to follow.', zh: '没有这个争论，下一段会很难读。', structure: 'dispute / 表示 / 争论', grammar: 'noun，围绕「争论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dispute.', right: 'He gave me some advice about the dispute.', reason: 'advice 不可数。名词 dispute 的单复数按词典词形记。', rule: '先确定 dispute 是noun，再套「争论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dispute.q1', senseId: 'dispute.s1', errorType: 'meaning', type: '词义选择', prompt: '「dispute」在本条的核心意思是：', options: ['争论', '完全相反的意思', '一种古代钱币'], answer: '争论', explain: 'dispute：争论。' },
      { id: 'dispute.q2', senseId: 'dispute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dispute?', options: ['争论', 'a kind of ancient coin', 'the past tense of be'], answer: '争论', explain: '对的是「争论」。' },
      { id: 'dispute.q3', senseId: 'dispute.s1', errorType: 'grammar', type: '词义选择', prompt: 'dispute 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dispute.q4', senseId: 'dispute.s1', errorType: 'meaning', type: '词源', prompt: '记 dispute 时，哪句更稳妥？', options: ['先锁住「争论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「争论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['争论'] },
  });

  D('disregard', {
    etymology: {
      origin: '现代英语常用词「disregard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disregard', gloss: '忽视' },
      suffix: null,
      history: [
        { label: 'disregard', text: '现代英语常用词「disregard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：忽视。' },
      ],
      formationLogic: '核心义：忽视。',
      mnemonic: '看到 disregard，先说出「忽视」。',
      note: '核心义：忽视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disregard before the office closed.', chinese: '他们同意在办公室关门前做这件事：忽视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disregard.s1', en: 'The deadline forced the team to disregard that afternoon.', zh: '截止日期逼着小组在那天下午忽视。', structure: 'disregard / 表示 / 忽视', grammar: 'verb，围绕「忽视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disregarded it yesterday without checking the real past form.', right: 'Check the past form of "disregard" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disregard 是verb，再套「忽视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disregard.q1', senseId: 'disregard.s1', errorType: 'meaning', type: '词义选择', prompt: '「disregard」在本条的核心意思是：', options: ['忽视', '完全相反的意思', '一种古代钱币'], answer: '忽视', explain: 'disregard：忽视。' },
      { id: 'disregard.q2', senseId: 'disregard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disregard?', options: ['忽视', 'a kind of ancient coin', 'the past tense of be'], answer: '忽视', explain: '对的是「忽视」。' },
      { id: 'disregard.q3', senseId: 'disregard.s1', errorType: 'grammar', type: '词义选择', prompt: 'disregard 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disregard.q4', senseId: 'disregard.s1', errorType: 'meaning', type: '词源', prompt: '记 disregard 时，哪句更稳妥？', options: ['先锁住「忽视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「忽视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['忽视'] },
  });

  D('disreputable', {
    etymology: {
      origin: '英语派生：disreput + -able，词性转到「声名狼藉的」。',
      prefix: null,
      root: { text: 'disreput', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disreputable', text: '英语派生：disreput + -able，词性转到「声名狼藉的」。' },
        { label: '现在', text: '核心用法是：声名狼藉的。' },
      ],
      formationLogic: '先认词干 disreput，再看词尾。',
      mnemonic: '看到 disreputable，先说出「声名狼藉的」。',
      note: '先认词干 disreput，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was disreputable.', chinese: '即使是初读者也能看出，这个结果是声名狼藉的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disreputable.s1', en: 'They wanted a disreputable answer, not a long speech.', zh: '他们要一个声名狼藉的的答复，不要长篇发言。', structure: 'disreputable / 表示 / 声名狼藉的', grammar: 'adjective，围绕「声名狼藉的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are disreputable.', right: 'The news is disreputable.', reason: 'news 作主语时动词用单数。', rule: '先确定 disreputable 是adjective，再套「声名狼藉的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disreputable.q1', senseId: 'disreputable.s1', errorType: 'meaning', type: '词义选择', prompt: '「disreputable」在本条的核心意思是：', options: ['声名狼藉的', '完全相反的意思', '一种古代钱币'], answer: '声名狼藉的', explain: 'disreputable：声名狼藉的。' },
      { id: 'disreputable.q2', senseId: 'disreputable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disreputable?', options: ['声名狼藉的', 'a kind of ancient coin', 'the past tense of be'], answer: '声名狼藉的', explain: '对的是「声名狼藉的」。' },
      { id: 'disreputable.q3', senseId: 'disreputable.s1', errorType: 'grammar', type: '词义选择', prompt: 'disreputable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'disreputable.q4', senseId: 'disreputable.s1', errorType: 'meaning', type: '词源', prompt: '记 disreputable 时，哪句更稳妥？', options: ['先锁住「声名狼藉的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「声名狼藉的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['声名狼藉的'] },
  });

  D('disrespect', {
    etymology: {
      origin: '现代英语常用词「disrespect」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disrespect', gloss: '不尊重' },
      suffix: null,
      history: [
        { label: 'disrespect', text: '现代英语常用词「disrespect」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不尊重。' },
      ],
      formationLogic: '核心义：不尊重。',
      mnemonic: '看到 disrespect，先说出「不尊重」。',
      note: '核心义：不尊重。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disrespect.', chinese: '这一章反复回到同一个点：不尊重。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disrespect.s1', en: 'Without that disrespect, the next paragraph is hard to follow.', zh: '没有这个不尊重，下一段会很难读。', structure: 'disrespect / 表示 / 不尊重', grammar: 'noun，围绕「不尊重」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disrespect.', right: 'He gave me some advice about the disrespect.', reason: 'advice 不可数。名词 disrespect 的单复数按词典词形记。', rule: '先确定 disrespect 是noun，再套「不尊重」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disrespect.q1', senseId: 'disrespect.s1', errorType: 'meaning', type: '词义选择', prompt: '「disrespect」在本条的核心意思是：', options: ['不尊重', '完全相反的意思', '一种古代钱币'], answer: '不尊重', explain: 'disrespect：不尊重。' },
      { id: 'disrespect.q2', senseId: 'disrespect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disrespect?', options: ['不尊重', 'a kind of ancient coin', 'the past tense of be'], answer: '不尊重', explain: '对的是「不尊重」。' },
      { id: 'disrespect.q3', senseId: 'disrespect.s1', errorType: 'grammar', type: '词义选择', prompt: 'disrespect 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disrespect.q4', senseId: 'disrespect.s1', errorType: 'meaning', type: '词源', prompt: '记 disrespect 时，哪句更稳妥？', options: ['先锁住「不尊重」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不尊重」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不尊重'] },
  });

  D('disrupt', {
    etymology: {
      origin: '现代英语常用词「disrupt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disrupt', gloss: '扰乱' },
      suffix: null,
      history: [
        { label: 'disrupt', text: '现代英语常用词「disrupt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：扰乱。' },
      ],
      formationLogic: '核心义：扰乱。',
      mnemonic: '看到 disrupt，先说出「扰乱」。',
      note: '核心义：扰乱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disrupt before the office closed.', chinese: '他们同意在办公室关门前做这件事：扰乱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disrupt.s1', en: 'The deadline forced the team to disrupt that afternoon.', zh: '截止日期逼着小组在那天下午扰乱。', structure: 'disrupt / 表示 / 扰乱', grammar: 'verb，围绕「扰乱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disrupted it yesterday without checking the real past form.', right: 'Check the past form of "disrupt" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disrupt 是verb，再套「扰乱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disrupt.q1', senseId: 'disrupt.s1', errorType: 'meaning', type: '词义选择', prompt: '「disrupt」在本条的核心意思是：', options: ['扰乱', '完全相反的意思', '一种古代钱币'], answer: '扰乱', explain: 'disrupt：扰乱。' },
      { id: 'disrupt.q2', senseId: 'disrupt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disrupt?', options: ['扰乱', 'a kind of ancient coin', 'the past tense of be'], answer: '扰乱', explain: '对的是「扰乱」。' },
      { id: 'disrupt.q3', senseId: 'disrupt.s1', errorType: 'grammar', type: '词义选择', prompt: 'disrupt 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disrupt.q4', senseId: 'disrupt.s1', errorType: 'meaning', type: '词源', prompt: '记 disrupt 时，哪句更稳妥？', options: ['先锁住「扰乱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扰乱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扰乱'] },
  });

  D('disseminate', {
    etymology: {
      origin: '现代英语常用词「disseminate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'disseminate', gloss: '散布' },
      suffix: null,
      history: [
        { label: 'disseminate', text: '现代英语常用词「disseminate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：散布。' },
      ],
      formationLogic: '核心义：散布。',
      mnemonic: '看到 disseminate，先说出「散布」。',
      note: '核心义：散布。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disseminate before the office closed.', chinese: '他们同意在办公室关门前做这件事：散布。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disseminate.s1', en: 'The deadline forced the team to disseminate that afternoon.', zh: '截止日期逼着小组在那天下午散布。', structure: 'disseminate / 表示 / 散布', grammar: 'verb，围绕「散布」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disseminateed it yesterday without checking the real past form.', right: 'Check the past form of "disseminate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disseminate 是verb，再套「散布」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disseminate.q1', senseId: 'disseminate.s1', errorType: 'meaning', type: '词义选择', prompt: '「disseminate」在本条的核心意思是：', options: ['散布', '完全相反的意思', '一种古代钱币'], answer: '散布', explain: 'disseminate：散布。' },
      { id: 'disseminate.q2', senseId: 'disseminate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disseminate?', options: ['散布', 'a kind of ancient coin', 'the past tense of be'], answer: '散布', explain: '对的是「散布」。' },
      { id: 'disseminate.q3', senseId: 'disseminate.s1', errorType: 'grammar', type: '词义选择', prompt: 'disseminate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disseminate.q4', senseId: 'disseminate.s1', errorType: 'meaning', type: '词源', prompt: '记 disseminate 时，哪句更稳妥？', options: ['先锁住「散布」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「散布」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['散布'] },
  });

  D('dissension', {
    etymology: {
      origin: '英语派生：dissen + -sion，词性转到「分歧」。',
      prefix: null,
      root: { text: 'dissen', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dissension', text: '英语派生：dissen + -sion，词性转到「分歧」。' },
        { label: '现在', text: '核心用法是：分歧。' },
      ],
      formationLogic: '先认词干 dissen，再看词尾。',
      mnemonic: '看到 dissension，先说出「分歧」。',
      note: '先认词干 dissen，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dissension.', chinese: '这一章反复回到同一个点：分歧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissension.s1', en: 'Without that dissension, the next paragraph is hard to follow.', zh: '没有这个分歧，下一段会很难读。', structure: 'dissension / 表示 / 分歧', grammar: 'noun，围绕「分歧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dissension.', right: 'He gave me some advice about the dissension.', reason: 'advice 不可数。名词 dissension 的单复数按词典词形记。', rule: '先确定 dissension 是noun，再套「分歧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissension.q1', senseId: 'dissension.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissension」在本条的核心意思是：', options: ['分歧', '完全相反的意思', '一种古代钱币'], answer: '分歧', explain: 'dissension：分歧。' },
      { id: 'dissension.q2', senseId: 'dissension.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissension?', options: ['分歧', 'a kind of ancient coin', 'the past tense of be'], answer: '分歧', explain: '对的是「分歧」。' },
      { id: 'dissension.q3', senseId: 'dissension.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissension 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dissension.q4', senseId: 'dissension.s1', errorType: 'meaning', type: '词源', prompt: '记 dissension 时，哪句更稳妥？', options: ['先锁住「分歧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分歧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分歧'] },
  });

  D('dissent', {
    etymology: {
      origin: '现代英语常用词「dissent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dissent', gloss: '异议' },
      suffix: null,
      history: [
        { label: 'dissent', text: '现代英语常用词「dissent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：异议。' },
      ],
      formationLogic: '核心义：异议。',
      mnemonic: '看到 dissent，先说出「异议」。',
      note: '核心义：异议。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dissent.', chinese: '这一章反复回到同一个点：异议。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissent.s1', en: 'Without that dissent, the next paragraph is hard to follow.', zh: '没有这个异议，下一段会很难读。', structure: 'dissent / 表示 / 异议', grammar: 'noun，围绕「异议」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dissent.', right: 'He gave me some advice about the dissent.', reason: 'advice 不可数。名词 dissent 的单复数按词典词形记。', rule: '先确定 dissent 是noun，再套「异议」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissent.q1', senseId: 'dissent.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissent」在本条的核心意思是：', options: ['异议', '完全相反的意思', '一种古代钱币'], answer: '异议', explain: 'dissent：异议。' },
      { id: 'dissent.q2', senseId: 'dissent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissent?', options: ['异议', 'a kind of ancient coin', 'the past tense of be'], answer: '异议', explain: '对的是「异议」。' },
      { id: 'dissent.q3', senseId: 'dissent.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dissent.q4', senseId: 'dissent.s1', errorType: 'meaning', type: '词源', prompt: '记 dissent 时，哪句更稳妥？', options: ['先锁住「异议」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「异议」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['异议'] },
  });

  D('dissenting', {
    etymology: {
      origin: '英语派生：dissent + -ing，词性转到「持异议的」。',
      prefix: null,
      root: { text: 'dissent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dissenting', text: '英语派生：dissent + -ing，词性转到「持异议的」。' },
        { label: '现在', text: '核心用法是：持异议的。' },
      ],
      formationLogic: '先认词干 dissent，再看词尾。',
      mnemonic: '看到 dissenting，先说出「持异议的」。',
      note: '先认词干 dissent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dissenting.', chinese: '即使是初读者也能看出，这个结果是持异议的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissenting.s1', en: 'They wanted a dissenting answer, not a long speech.', zh: '他们要一个持异议的的答复，不要长篇发言。', structure: 'dissenting / 表示 / 持异议的', grammar: 'adjective，围绕「持异议的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dissenting.', right: 'The news is dissenting.', reason: 'news 作主语时动词用单数。', rule: '先确定 dissenting 是adjective，再套「持异议的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissenting.q1', senseId: 'dissenting.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissenting」在本条的核心意思是：', options: ['持异议的', '完全相反的意思', '一种古代钱币'], answer: '持异议的', explain: 'dissenting：持异议的。' },
      { id: 'dissenting.q2', senseId: 'dissenting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissenting?', options: ['持异议的', 'a kind of ancient coin', 'the past tense of be'], answer: '持异议的', explain: '对的是「持异议的」。' },
      { id: 'dissenting.q3', senseId: 'dissenting.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissenting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dissenting.q4', senseId: 'dissenting.s1', errorType: 'meaning', type: '词源', prompt: '记 dissenting 时，哪句更稳妥？', options: ['先锁住「持异议的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「持异议的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['持异议的'] },
  });

  D('dissertation', {
    etymology: {
      origin: '英语派生：disserta + -tion，词性转到「学位论文」。',
      prefix: null,
      root: { text: 'disserta', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dissertation', text: '英语派生：disserta + -tion，词性转到「学位论文」。' },
        { label: '现在', text: '核心用法是：学位论文。' },
      ],
      formationLogic: '先认词干 disserta，再看词尾。',
      mnemonic: '看到 dissertation，先说出「学位论文」。',
      note: '先认词干 disserta，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dissertation.', chinese: '这一章反复回到同一个点：学位论文。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissertation.s1', en: 'Without that dissertation, the next paragraph is hard to follow.', zh: '没有这个学位论文，下一段会很难读。', structure: 'dissertation / 表示 / 学位论文', grammar: 'noun，围绕「学位论文」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dissertation.', right: 'He gave me some advice about the dissertation.', reason: 'advice 不可数。名词 dissertation 的单复数按词典词形记。', rule: '先确定 dissertation 是noun，再套「学位论文」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissertation.q1', senseId: 'dissertation.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissertation」在本条的核心意思是：', options: ['学位论文', '完全相反的意思', '一种古代钱币'], answer: '学位论文', explain: 'dissertation：学位论文。' },
      { id: 'dissertation.q2', senseId: 'dissertation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissertation?', options: ['学位论文', 'a kind of ancient coin', 'the past tense of be'], answer: '学位论文', explain: '对的是「学位论文」。' },
      { id: 'dissertation.q3', senseId: 'dissertation.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissertation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dissertation.q4', senseId: 'dissertation.s1', errorType: 'meaning', type: '词源', prompt: '记 dissertation 时，哪句更稳妥？', options: ['先锁住「学位论文」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「学位论文」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['学位论文'] },
  });

  D('dissident', {
    etymology: {
      origin: '现代英语常用词「dissident」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dissident', gloss: '持异见者' },
      suffix: null,
      history: [
        { label: 'dissident', text: '现代英语常用词「dissident」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：持异见者。' },
      ],
      formationLogic: '核心义：持异见者。',
      mnemonic: '看到 dissident，先说出「持异见者」。',
      note: '核心义：持异见者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dissident.', chinese: '这一章反复回到同一个点：持异见者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissident.s1', en: 'Without that dissident, the next paragraph is hard to follow.', zh: '没有这个持异见者，下一段会很难读。', structure: 'dissident / 表示 / 持异见者', grammar: 'noun，围绕「持异见者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dissident.', right: 'He gave me some advice about the dissident.', reason: 'advice 不可数。名词 dissident 的单复数按词典词形记。', rule: '先确定 dissident 是noun，再套「持异见者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissident.q1', senseId: 'dissident.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissident」在本条的核心意思是：', options: ['持异见者', '完全相反的意思', '一种古代钱币'], answer: '持异见者', explain: 'dissident：持异见者。' },
      { id: 'dissident.q2', senseId: 'dissident.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissident?', options: ['持异见者', 'a kind of ancient coin', 'the past tense of be'], answer: '持异见者', explain: '对的是「持异见者」。' },
      { id: 'dissident.q3', senseId: 'dissident.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissident 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dissident.q4', senseId: 'dissident.s1', errorType: 'meaning', type: '词源', prompt: '记 dissident 时，哪句更稳妥？', options: ['先锁住「持异见者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「持异见者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['持异见者'] },
  });

  D('dissolve', {
    etymology: {
      origin: '现代英语常用词「dissolve」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dissolve', gloss: '溶解' },
      suffix: null,
      history: [
        { label: 'dissolve', text: '现代英语常用词「dissolve」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：溶解。' },
      ],
      formationLogic: '核心义：溶解。',
      mnemonic: '看到 dissolve，先说出「溶解」。',
      note: '核心义：溶解。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dissolve before the office closed.', chinese: '他们同意在办公室关门前做这件事：溶解。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissolve.s1', en: 'The deadline forced the team to dissolve that afternoon.', zh: '截止日期逼着小组在那天下午溶解。', structure: 'dissolve / 表示 / 溶解', grammar: 'verb，围绕「溶解」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dissolveed it yesterday without checking the real past form.', right: 'Check the past form of "dissolve" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dissolve 是verb，再套「溶解」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissolve.q1', senseId: 'dissolve.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissolve」在本条的核心意思是：', options: ['溶解', '完全相反的意思', '一种古代钱币'], answer: '溶解', explain: 'dissolve：溶解。' },
      { id: 'dissolve.q2', senseId: 'dissolve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissolve?', options: ['溶解', 'a kind of ancient coin', 'the past tense of be'], answer: '溶解', explain: '对的是「溶解」。' },
      { id: 'dissolve.q3', senseId: 'dissolve.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissolve 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dissolve.q4', senseId: 'dissolve.s1', errorType: 'meaning', type: '词源', prompt: '记 dissolve 时，哪句更稳妥？', options: ['先锁住「溶解」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「溶解」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['溶解'] },
  });

  D('dissonance', {
    etymology: {
      origin: '英语派生：disson + -ance，词性转到「不和」。',
      prefix: null,
      root: { text: 'disson', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dissonance', text: '英语派生：disson + -ance，词性转到「不和」。' },
        { label: '现在', text: '核心用法是：不和。' },
      ],
      formationLogic: '先认词干 disson，再看词尾。',
      mnemonic: '看到 dissonance，先说出「不和」。',
      note: '先认词干 disson，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dissonance.', chinese: '这一章反复回到同一个点：不和。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissonance.s1', en: 'Without that dissonance, the next paragraph is hard to follow.', zh: '没有这个不和，下一段会很难读。', structure: 'dissonance / 表示 / 不和', grammar: 'noun，围绕「不和」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dissonance.', right: 'He gave me some advice about the dissonance.', reason: 'advice 不可数。名词 dissonance 的单复数按词典词形记。', rule: '先确定 dissonance 是noun，再套「不和」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissonance.q1', senseId: 'dissonance.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissonance」在本条的核心意思是：', options: ['不和', '完全相反的意思', '一种古代钱币'], answer: '不和', explain: 'dissonance：不和。' },
      { id: 'dissonance.q2', senseId: 'dissonance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissonance?', options: ['不和', 'a kind of ancient coin', 'the past tense of be'], answer: '不和', explain: '对的是「不和」。' },
      { id: 'dissonance.q3', senseId: 'dissonance.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissonance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dissonance.q4', senseId: 'dissonance.s1', errorType: 'meaning', type: '词源', prompt: '记 dissonance 时，哪句更稳妥？', options: ['先锁住「不和」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不和」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不和'] },
  });

  D('dissuade', {
    etymology: {
      origin: '现代英语常用词「dissuade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dissuade', gloss: '劝阻' },
      suffix: null,
      history: [
        { label: 'dissuade', text: '现代英语常用词「dissuade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：劝阻。' },
      ],
      formationLogic: '核心义：劝阻。',
      mnemonic: '看到 dissuade，先说出「劝阻」。',
      note: '核心义：劝阻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dissuade before the office closed.', chinese: '他们同意在办公室关门前做这件事：劝阻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dissuade.s1', en: 'The deadline forced the team to dissuade that afternoon.', zh: '截止日期逼着小组在那天下午劝阻。', structure: 'dissuade / 表示 / 劝阻', grammar: 'verb，围绕「劝阻」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dissuadeed it yesterday without checking the real past form.', right: 'Check the past form of "dissuade" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dissuade 是verb，再套「劝阻」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dissuade.q1', senseId: 'dissuade.s1', errorType: 'meaning', type: '词义选择', prompt: '「dissuade」在本条的核心意思是：', options: ['劝阻', '完全相反的意思', '一种古代钱币'], answer: '劝阻', explain: 'dissuade：劝阻。' },
      { id: 'dissuade.q2', senseId: 'dissuade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dissuade?', options: ['劝阻', 'a kind of ancient coin', 'the past tense of be'], answer: '劝阻', explain: '对的是「劝阻」。' },
      { id: 'dissuade.q3', senseId: 'dissuade.s1', errorType: 'grammar', type: '词义选择', prompt: 'dissuade 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dissuade.q4', senseId: 'dissuade.s1', errorType: 'meaning', type: '词源', prompt: '记 dissuade 时，哪句更稳妥？', options: ['先锁住「劝阻」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「劝阻」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['劝阻'] },
  });

  D('distance', {
    etymology: {
      origin: '拉丁语 distantia，stare「站」。站开的距离。',
      prefix: null,
      root: { text: 'distance', gloss: '距离' },
      suffix: null,
      history: [
        { label: 'distance', text: '拉丁语 distantia，stare「站」。站开的距离。' },
        { label: '现在', text: '核心用法是：距离。' },
      ],
      formationLogic: '考试认现在的用法：距离。',
      mnemonic: '看到 distance，先说出「距离」。',
      note: '考试认现在的用法：距离。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one distance.', chinese: '这一章反复回到同一个点：距离。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distance.s1', en: 'Without that distance, the next paragraph is hard to follow.', zh: '没有这个距离，下一段会很难读。', structure: 'distance / 表示 / 距离', grammar: 'noun，围绕「距离」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the distance.', right: 'He gave me some advice about the distance.', reason: 'advice 不可数。名词 distance 的单复数按词典词形记。', rule: '先确定 distance 是noun，再套「距离」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distance.q1', senseId: 'distance.s1', errorType: 'meaning', type: '词义选择', prompt: '「distance」在本条的核心意思是：', options: ['距离', '完全相反的意思', '一种古代钱币'], answer: '距离', explain: 'distance：距离。' },
      { id: 'distance.q2', senseId: 'distance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distance?', options: ['距离', 'a kind of ancient coin', 'the past tense of be'], answer: '距离', explain: '对的是「距离」。' },
      { id: 'distance.q3', senseId: 'distance.s1', errorType: 'grammar', type: '词义选择', prompt: 'distance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'distance.q4', senseId: 'distance.s1', errorType: 'meaning', type: '词源', prompt: '记 distance 时，哪句更稳妥？', options: ['先锁住「距离」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「距离」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['距离'] },
  });

  D('distant', {
    etymology: {
      origin: '拉丁语 distare「分开站」。',
      prefix: null,
      root: { text: 'distant', gloss: '遥远的' },
      suffix: null,
      history: [
        { label: 'distant', text: '拉丁语 distare「分开站」。' },
        { label: '现在', text: '核心用法是：遥远的。' },
      ],
      formationLogic: '考试认现在的用法：遥远的。',
      mnemonic: '看到 distant，先说出「遥远的」。',
      note: '考试认现在的用法：遥远的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distant.', chinese: '即使是初读者也能看出，这个结果是遥远的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distant.s1', en: 'They wanted a distant answer, not a long speech.', zh: '他们要一个遥远的的答复，不要长篇发言。', structure: 'distant / 表示 / 遥远的', grammar: 'adjective，围绕「遥远的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distant.', right: 'The news is distant.', reason: 'news 作主语时动词用单数。', rule: '先确定 distant 是adjective，再套「遥远的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distant.q1', senseId: 'distant.s1', errorType: 'meaning', type: '词义选择', prompt: '「distant」在本条的核心意思是：', options: ['遥远的', '完全相反的意思', '一种古代钱币'], answer: '遥远的', explain: 'distant：遥远的。' },
      { id: 'distant.q2', senseId: 'distant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distant?', options: ['遥远的', 'a kind of ancient coin', 'the past tense of be'], answer: '遥远的', explain: '对的是「遥远的」。' },
      { id: 'distant.q3', senseId: 'distant.s1', errorType: 'grammar', type: '词义选择', prompt: 'distant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distant.q4', senseId: 'distant.s1', errorType: 'meaning', type: '词源', prompt: '记 distant 时，哪句更稳妥？', options: ['先锁住「遥远的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「遥远的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['遥远的'] },
  });

  D('distil', {
    etymology: {
      origin: '现代英语常用词「distil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distil', gloss: '蒸馏' },
      suffix: null,
      history: [
        { label: 'distil', text: '现代英语常用词「distil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蒸馏。' },
      ],
      formationLogic: '核心义：蒸馏。',
      mnemonic: '看到 distil，先说出「蒸馏」。',
      note: '核心义：蒸馏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to distil before the office closed.', chinese: '他们同意在办公室关门前做这件事：蒸馏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distil.s1', en: 'The deadline forced the team to distil that afternoon.', zh: '截止日期逼着小组在那天下午蒸馏。', structure: 'distil / 表示 / 蒸馏', grammar: 'verb，围绕「蒸馏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She distiled it yesterday without checking the real past form.', right: 'Check the past form of "distil" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 distil 是verb，再套「蒸馏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distil.q1', senseId: 'distil.s1', errorType: 'meaning', type: '词义选择', prompt: '「distil」在本条的核心意思是：', options: ['蒸馏', '完全相反的意思', '一种古代钱币'], answer: '蒸馏', explain: 'distil：蒸馏。' },
      { id: 'distil.q2', senseId: 'distil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distil?', options: ['蒸馏', 'a kind of ancient coin', 'the past tense of be'], answer: '蒸馏', explain: '对的是「蒸馏」。' },
      { id: 'distil.q3', senseId: 'distil.s1', errorType: 'grammar', type: '词义选择', prompt: 'distil 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'distil.q4', senseId: 'distil.s1', errorType: 'meaning', type: '词源', prompt: '记 distil 时，哪句更稳妥？', options: ['先锁住「蒸馏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蒸馏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蒸馏'] },
  });

  D('distinct', {
    etymology: {
      origin: '拉丁语 distinguere「用刺做记号分开」。',
      prefix: null,
      root: { text: 'distinct', gloss: '明显的' },
      suffix: null,
      history: [
        { label: 'distinct', text: '拉丁语 distinguere「用刺做记号分开」。' },
        { label: '现在', text: '核心用法是：明显的。' },
      ],
      formationLogic: '考试认现在的用法：明显的。',
      mnemonic: '看到 distinct，先说出「明显的」。',
      note: '考试认现在的用法：明显的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distinct.', chinese: '即使是初读者也能看出，这个结果是明显的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distinct.s1', en: 'They wanted a distinct answer, not a long speech.', zh: '他们要一个明显的的答复，不要长篇发言。', structure: 'distinct / 表示 / 明显的', grammar: 'adjective，围绕「明显的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distinct.', right: 'The news is distinct.', reason: 'news 作主语时动词用单数。', rule: '先确定 distinct 是adjective，再套「明显的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distinct.q1', senseId: 'distinct.s1', errorType: 'meaning', type: '词义选择', prompt: '「distinct」在本条的核心意思是：', options: ['明显的', '完全相反的意思', '一种古代钱币'], answer: '明显的', explain: 'distinct：明显的。' },
      { id: 'distinct.q2', senseId: 'distinct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distinct?', options: ['明显的', 'a kind of ancient coin', 'the past tense of be'], answer: '明显的', explain: '对的是「明显的」。' },
      { id: 'distinct.q3', senseId: 'distinct.s1', errorType: 'grammar', type: '词义选择', prompt: 'distinct 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distinct.q4', senseId: 'distinct.s1', errorType: 'meaning', type: '词源', prompt: '记 distinct 时，哪句更稳妥？', options: ['先锁住「明显的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「明显的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['明显的'] },
  });

  D('distinctive', {
    etymology: {
      origin: '英语派生：distinct + -ive，词性转到「独特的」。',
      prefix: null,
      root: { text: 'distinct', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'distinctive', text: '英语派生：distinct + -ive，词性转到「独特的」。' },
        { label: '现在', text: '核心用法是：独特的。' },
      ],
      formationLogic: '先认词干 distinct，再看词尾。',
      mnemonic: '看到 distinctive，先说出「独特的」。',
      note: '先认词干 distinct，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distinctive.', chinese: '即使是初读者也能看出，这个结果是独特的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distinctive.s1', en: 'They wanted a distinctive answer, not a long speech.', zh: '他们要一个独特的的答复，不要长篇发言。', structure: 'distinctive / 表示 / 独特的', grammar: 'adjective，围绕「独特的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distinctive.', right: 'The news is distinctive.', reason: 'news 作主语时动词用单数。', rule: '先确定 distinctive 是adjective，再套「独特的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distinctive.q1', senseId: 'distinctive.s1', errorType: 'meaning', type: '词义选择', prompt: '「distinctive」在本条的核心意思是：', options: ['独特的', '完全相反的意思', '一种古代钱币'], answer: '独特的', explain: 'distinctive：独特的。' },
      { id: 'distinctive.q2', senseId: 'distinctive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distinctive?', options: ['独特的', 'a kind of ancient coin', 'the past tense of be'], answer: '独特的', explain: '对的是「独特的」。' },
      { id: 'distinctive.q3', senseId: 'distinctive.s1', errorType: 'grammar', type: '词义选择', prompt: 'distinctive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distinctive.q4', senseId: 'distinctive.s1', errorType: 'meaning', type: '词源', prompt: '记 distinctive 时，哪句更稳妥？', options: ['先锁住「独特的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「独特的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['独特的'] },
  });

  D('distinguish', {
    etymology: {
      origin: '拉丁语 distinguere。',
      prefix: null,
      root: { text: 'distinguish', gloss: '区分' },
      suffix: null,
      history: [
        { label: 'distinguish', text: '拉丁语 distinguere。' },
        { label: '现在', text: '核心用法是：区分。' },
      ],
      formationLogic: '考试认现在的用法：区分。',
      mnemonic: '看到 distinguish，先说出「区分」。',
      note: '考试认现在的用法：区分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to distinguish before the office closed.', chinese: '他们同意在办公室关门前做这件事：区分。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distinguish.s1', en: 'The deadline forced the team to distinguish that afternoon.', zh: '截止日期逼着小组在那天下午区分。', structure: 'distinguish / 表示 / 区分', grammar: 'verb，围绕「区分」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She distinguished it yesterday without checking the real past form.', right: 'Check the past form of "distinguish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 distinguish 是verb，再套「区分」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distinguish.q1', senseId: 'distinguish.s1', errorType: 'meaning', type: '词义选择', prompt: '「distinguish」在本条的核心意思是：', options: ['区分', '完全相反的意思', '一种古代钱币'], answer: '区分', explain: 'distinguish：区分。' },
      { id: 'distinguish.q2', senseId: 'distinguish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distinguish?', options: ['区分', 'a kind of ancient coin', 'the past tense of be'], answer: '区分', explain: '对的是「区分」。' },
      { id: 'distinguish.q3', senseId: 'distinguish.s1', errorType: 'grammar', type: '词义选择', prompt: 'distinguish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'distinguish.q4', senseId: 'distinguish.s1', errorType: 'meaning', type: '词源', prompt: '记 distinguish 时，哪句更稳妥？', options: ['先锁住「区分」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「区分」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['区分'] },
  });

  D('distinguished', {
    etymology: {
      origin: '现代英语常用词「distinguished」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distinguished', gloss: '杰出的' },
      suffix: null,
      history: [
        { label: 'distinguished', text: '现代英语常用词「distinguished」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：杰出的。' },
      ],
      formationLogic: '核心义：杰出的。',
      mnemonic: '看到 distinguished，先说出「杰出的」。',
      note: '核心义：杰出的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distinguished.', chinese: '即使是初读者也能看出，这个结果是杰出的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distinguished.s1', en: 'They wanted a distinguished answer, not a long speech.', zh: '他们要一个杰出的的答复，不要长篇发言。', structure: 'distinguished / 表示 / 杰出的', grammar: 'adjective，围绕「杰出的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distinguished.', right: 'The news is distinguished.', reason: 'news 作主语时动词用单数。', rule: '先确定 distinguished 是adjective，再套「杰出的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distinguished.q1', senseId: 'distinguished.s1', errorType: 'meaning', type: '词义选择', prompt: '「distinguished」在本条的核心意思是：', options: ['杰出的', '完全相反的意思', '一种古代钱币'], answer: '杰出的', explain: 'distinguished：杰出的。' },
      { id: 'distinguished.q2', senseId: 'distinguished.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distinguished?', options: ['杰出的', 'a kind of ancient coin', 'the past tense of be'], answer: '杰出的', explain: '对的是「杰出的」。' },
      { id: 'distinguished.q3', senseId: 'distinguished.s1', errorType: 'grammar', type: '词义选择', prompt: 'distinguished 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distinguished.q4', senseId: 'distinguished.s1', errorType: 'meaning', type: '词源', prompt: '记 distinguished 时，哪句更稳妥？', options: ['先锁住「杰出的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「杰出的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['杰出的'] },
  });

  D('distort', {
    etymology: {
      origin: '现代英语常用词「distort」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distort', gloss: '歪曲' },
      suffix: null,
      history: [
        { label: 'distort', text: '现代英语常用词「distort」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：歪曲。' },
      ],
      formationLogic: '核心义：歪曲。',
      mnemonic: '看到 distort，先说出「歪曲」。',
      note: '核心义：歪曲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to distort before the office closed.', chinese: '他们同意在办公室关门前做这件事：歪曲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distort.s1', en: 'The deadline forced the team to distort that afternoon.', zh: '截止日期逼着小组在那天下午歪曲。', structure: 'distort / 表示 / 歪曲', grammar: 'verb，围绕「歪曲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She distorted it yesterday without checking the real past form.', right: 'Check the past form of "distort" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 distort 是verb，再套「歪曲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distort.q1', senseId: 'distort.s1', errorType: 'meaning', type: '词义选择', prompt: '「distort」在本条的核心意思是：', options: ['歪曲', '完全相反的意思', '一种古代钱币'], answer: '歪曲', explain: 'distort：歪曲。' },
      { id: 'distort.q2', senseId: 'distort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distort?', options: ['歪曲', 'a kind of ancient coin', 'the past tense of be'], answer: '歪曲', explain: '对的是「歪曲」。' },
      { id: 'distort.q3', senseId: 'distort.s1', errorType: 'grammar', type: '词义选择', prompt: 'distort 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'distort.q4', senseId: 'distort.s1', errorType: 'meaning', type: '词源', prompt: '记 distort 时，哪句更稳妥？', options: ['先锁住「歪曲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「歪曲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['歪曲'] },
  });

  D('distract', {
    etymology: {
      origin: '现代英语常用词「distract」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distract', gloss: '使分心' },
      suffix: null,
      history: [
        { label: 'distract', text: '现代英语常用词「distract」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使分心。' },
      ],
      formationLogic: '核心义：使分心。',
      mnemonic: '看到 distract，先说出「使分心」。',
      note: '核心义：使分心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to distract before the office closed.', chinese: '他们同意在办公室关门前做这件事：使分心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distract.s1', en: 'The deadline forced the team to distract that afternoon.', zh: '截止日期逼着小组在那天下午使分心。', structure: 'distract / 表示 / 使分心', grammar: 'verb，围绕「使分心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She distracted it yesterday without checking the real past form.', right: 'Check the past form of "distract" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 distract 是verb，再套「使分心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distract.q1', senseId: 'distract.s1', errorType: 'meaning', type: '词义选择', prompt: '「distract」在本条的核心意思是：', options: ['使分心', '完全相反的意思', '一种古代钱币'], answer: '使分心', explain: 'distract：使分心。' },
      { id: 'distract.q2', senseId: 'distract.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distract?', options: ['使分心', 'a kind of ancient coin', 'the past tense of be'], answer: '使分心', explain: '对的是「使分心」。' },
      { id: 'distract.q3', senseId: 'distract.s1', errorType: 'grammar', type: '词义选择', prompt: 'distract 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'distract.q4', senseId: 'distract.s1', errorType: 'meaning', type: '词源', prompt: '记 distract 时，哪句更稳妥？', options: ['先锁住「使分心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使分心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使分心'] },
  });

  D('distracted', {
    etymology: {
      origin: '现代英语常用词「distracted」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distracted', gloss: '心不在焉的' },
      suffix: null,
      history: [
        { label: 'distracted', text: '现代英语常用词「distracted」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：心不在焉的。' },
      ],
      formationLogic: '核心义：心不在焉的。',
      mnemonic: '看到 distracted，先说出「心不在焉的」。',
      note: '核心义：心不在焉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distracted.', chinese: '即使是初读者也能看出，这个结果是心不在焉的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distracted.s1', en: 'They wanted a distracted answer, not a long speech.', zh: '他们要一个心不在焉的的答复，不要长篇发言。', structure: 'distracted / 表示 / 心不在焉的', grammar: 'adjective，围绕「心不在焉的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distracted.', right: 'The news is distracted.', reason: 'news 作主语时动词用单数。', rule: '先确定 distracted 是adjective，再套「心不在焉的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distracted.q1', senseId: 'distracted.s1', errorType: 'meaning', type: '词义选择', prompt: '「distracted」在本条的核心意思是：', options: ['心不在焉的', '完全相反的意思', '一种古代钱币'], answer: '心不在焉的', explain: 'distracted：心不在焉的。' },
      { id: 'distracted.q2', senseId: 'distracted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distracted?', options: ['心不在焉的', 'a kind of ancient coin', 'the past tense of be'], answer: '心不在焉的', explain: '对的是「心不在焉的」。' },
      { id: 'distracted.q3', senseId: 'distracted.s1', errorType: 'grammar', type: '词义选择', prompt: 'distracted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distracted.q4', senseId: 'distracted.s1', errorType: 'meaning', type: '词源', prompt: '记 distracted 时，哪句更稳妥？', options: ['先锁住「心不在焉的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「心不在焉的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['心不在焉的'] },
  });

  D('distraction', {
    etymology: {
      origin: '英语派生：distrac + -tion，词性转到「分心」。',
      prefix: null,
      root: { text: 'distrac', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'distraction', text: '英语派生：distrac + -tion，词性转到「分心」。' },
        { label: '现在', text: '核心用法是：分心。' },
      ],
      formationLogic: '先认词干 distrac，再看词尾。',
      mnemonic: '看到 distraction，先说出「分心」。',
      note: '先认词干 distrac，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one distraction.', chinese: '这一章反复回到同一个点：分心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distraction.s1', en: 'Without that distraction, the next paragraph is hard to follow.', zh: '没有这个分心，下一段会很难读。', structure: 'distraction / 表示 / 分心', grammar: 'noun，围绕「分心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the distraction.', right: 'He gave me some advice about the distraction.', reason: 'advice 不可数。名词 distraction 的单复数按词典词形记。', rule: '先确定 distraction 是noun，再套「分心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distraction.q1', senseId: 'distraction.s1', errorType: 'meaning', type: '词义选择', prompt: '「distraction」在本条的核心意思是：', options: ['分心', '完全相反的意思', '一种古代钱币'], answer: '分心', explain: 'distraction：分心。' },
      { id: 'distraction.q2', senseId: 'distraction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distraction?', options: ['分心', 'a kind of ancient coin', 'the past tense of be'], answer: '分心', explain: '对的是「分心」。' },
      { id: 'distraction.q3', senseId: 'distraction.s1', errorType: 'grammar', type: '词义选择', prompt: 'distraction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'distraction.q4', senseId: 'distraction.s1', errorType: 'meaning', type: '词源', prompt: '记 distraction 时，哪句更稳妥？', options: ['先锁住「分心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分心'] },
  });

  D('distress', {
    etymology: {
      origin: '现代英语常用词「distress」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distress', gloss: '痛苦' },
      suffix: null,
      history: [
        { label: 'distress', text: '现代英语常用词「distress」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：痛苦。' },
      ],
      formationLogic: '核心义：痛苦。',
      mnemonic: '看到 distress，先说出「痛苦」。',
      note: '核心义：痛苦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one distress.', chinese: '这一章反复回到同一个点：痛苦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distress.s1', en: 'Without that distress, the next paragraph is hard to follow.', zh: '没有这个痛苦，下一段会很难读。', structure: 'distress / 表示 / 痛苦', grammar: 'noun，围绕「痛苦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the distress.', right: 'He gave me some advice about the distress.', reason: 'advice 不可数。名词 distress 的单复数按词典词形记。', rule: '先确定 distress 是noun，再套「痛苦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distress.q1', senseId: 'distress.s1', errorType: 'meaning', type: '词义选择', prompt: '「distress」在本条的核心意思是：', options: ['痛苦', '完全相反的意思', '一种古代钱币'], answer: '痛苦', explain: 'distress：痛苦。' },
      { id: 'distress.q2', senseId: 'distress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distress?', options: ['痛苦', 'a kind of ancient coin', 'the past tense of be'], answer: '痛苦', explain: '对的是「痛苦」。' },
      { id: 'distress.q3', senseId: 'distress.s1', errorType: 'grammar', type: '词义选择', prompt: 'distress 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'distress.q4', senseId: 'distress.s1', errorType: 'meaning', type: '词源', prompt: '记 distress 时，哪句更稳妥？', options: ['先锁住「痛苦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「痛苦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['痛苦'] },
  });

  D('distressed', {
    etymology: {
      origin: '现代英语常用词「distressed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distressed', gloss: '痛苦的' },
      suffix: null,
      history: [
        { label: 'distressed', text: '现代英语常用词「distressed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：痛苦的。' },
      ],
      formationLogic: '核心义：痛苦的。',
      mnemonic: '看到 distressed，先说出「痛苦的」。',
      note: '核心义：痛苦的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distressed.', chinese: '即使是初读者也能看出，这个结果是痛苦的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distressed.s1', en: 'They wanted a distressed answer, not a long speech.', zh: '他们要一个痛苦的的答复，不要长篇发言。', structure: 'distressed / 表示 / 痛苦的', grammar: 'adjective，围绕「痛苦的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distressed.', right: 'The news is distressed.', reason: 'news 作主语时动词用单数。', rule: '先确定 distressed 是adjective，再套「痛苦的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distressed.q1', senseId: 'distressed.s1', errorType: 'meaning', type: '词义选择', prompt: '「distressed」在本条的核心意思是：', options: ['痛苦的', '完全相反的意思', '一种古代钱币'], answer: '痛苦的', explain: 'distressed：痛苦的。' },
      { id: 'distressed.q2', senseId: 'distressed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distressed?', options: ['痛苦的', 'a kind of ancient coin', 'the past tense of be'], answer: '痛苦的', explain: '对的是「痛苦的」。' },
      { id: 'distressed.q3', senseId: 'distressed.s1', errorType: 'grammar', type: '词义选择', prompt: 'distressed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distressed.q4', senseId: 'distressed.s1', errorType: 'meaning', type: '词源', prompt: '记 distressed 时，哪句更稳妥？', options: ['先锁住「痛苦的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「痛苦的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['痛苦的'] },
  });

  D('distribute', {
    etymology: {
      origin: '拉丁语 distribuere「分别给予」。',
      prefix: null,
      root: { text: 'distribute', gloss: '分发' },
      suffix: null,
      history: [
        { label: 'distribute', text: '拉丁语 distribuere「分别给予」。' },
        { label: '现在', text: '核心用法是：分发。' },
      ],
      formationLogic: '考试认现在的用法：分发。',
      mnemonic: '看到 distribute，先说出「分发」。',
      note: '考试认现在的用法：分发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to distribute before the office closed.', chinese: '他们同意在办公室关门前做这件事：分发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distribute.s1', en: 'The deadline forced the team to distribute that afternoon.', zh: '截止日期逼着小组在那天下午分发。', structure: 'distribute / 表示 / 分发', grammar: 'verb，围绕「分发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She distributeed it yesterday without checking the real past form.', right: 'Check the past form of "distribute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 distribute 是verb，再套「分发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distribute.q1', senseId: 'distribute.s1', errorType: 'meaning', type: '词义选择', prompt: '「distribute」在本条的核心意思是：', options: ['分发', '完全相反的意思', '一种古代钱币'], answer: '分发', explain: 'distribute：分发。' },
      { id: 'distribute.q2', senseId: 'distribute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distribute?', options: ['分发', 'a kind of ancient coin', 'the past tense of be'], answer: '分发', explain: '对的是「分发」。' },
      { id: 'distribute.q3', senseId: 'distribute.s1', errorType: 'grammar', type: '词义选择', prompt: 'distribute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'distribute.q4', senseId: 'distribute.s1', errorType: 'meaning', type: '词源', prompt: '记 distribute 时，哪句更稳妥？', options: ['先锁住「分发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分发'] },
  });

  D('district', {
    etymology: {
      origin: '拉丁语 districtus「被限制的区域」。',
      prefix: null,
      root: { text: 'district', gloss: '区' },
      suffix: null,
      history: [
        { label: 'district', text: '拉丁语 districtus「被限制的区域」。' },
        { label: '现在', text: '核心用法是：区。' },
      ],
      formationLogic: '考试认现在的用法：区。',
      mnemonic: '看到 district，先说出「区」。',
      note: '考试认现在的用法：区。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one district.', chinese: '这一章反复回到同一个点：区。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'district.s1', en: 'Without that district, the next paragraph is hard to follow.', zh: '没有这个区，下一段会很难读。', structure: 'district / 表示 / 区', grammar: 'noun，围绕「区」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the district.', right: 'He gave me some advice about the district.', reason: 'advice 不可数。名词 district 的单复数按词典词形记。', rule: '先确定 district 是noun，再套「区」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'district.q1', senseId: 'district.s1', errorType: 'meaning', type: '词义选择', prompt: '「district」在本条的核心意思是：', options: ['区', '完全相反的意思', '一种古代钱币'], answer: '区', explain: 'district：区。' },
      { id: 'district.q2', senseId: 'district.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches district?', options: ['区', 'a kind of ancient coin', 'the past tense of be'], answer: '区', explain: '对的是「区」。' },
      { id: 'district.q3', senseId: 'district.s1', errorType: 'grammar', type: '词义选择', prompt: 'district 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'district.q4', senseId: 'district.s1', errorType: 'meaning', type: '词源', prompt: '记 district 时，哪句更稳妥？', options: ['先锁住「区」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「区」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['区'] },
  });

  D('distrust', {
    etymology: {
      origin: '现代英语常用词「distrust」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'distrust', gloss: '不信任' },
      suffix: null,
      history: [
        { label: 'distrust', text: '现代英语常用词「distrust」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不信任。' },
      ],
      formationLogic: '核心义：不信任。',
      mnemonic: '看到 distrust，先说出「不信任」。',
      note: '核心义：不信任。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one distrust.', chinese: '这一章反复回到同一个点：不信任。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distrust.s1', en: 'Without that distrust, the next paragraph is hard to follow.', zh: '没有这个不信任，下一段会很难读。', structure: 'distrust / 表示 / 不信任', grammar: 'noun，围绕「不信任」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the distrust.', right: 'He gave me some advice about the distrust.', reason: 'advice 不可数。名词 distrust 的单复数按词典词形记。', rule: '先确定 distrust 是noun，再套「不信任」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distrust.q1', senseId: 'distrust.s1', errorType: 'meaning', type: '词义选择', prompt: '「distrust」在本条的核心意思是：', options: ['不信任', '完全相反的意思', '一种古代钱币'], answer: '不信任', explain: 'distrust：不信任。' },
      { id: 'distrust.q2', senseId: 'distrust.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distrust?', options: ['不信任', 'a kind of ancient coin', 'the past tense of be'], answer: '不信任', explain: '对的是「不信任」。' },
      { id: 'distrust.q3', senseId: 'distrust.s1', errorType: 'grammar', type: '词义选择', prompt: 'distrust 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'distrust.q4', senseId: 'distrust.s1', errorType: 'meaning', type: '词源', prompt: '记 distrust 时，哪句更稳妥？', options: ['先锁住「不信任」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不信任」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不信任'] },
  });

  D('distrustful', {
    etymology: {
      origin: '英语派生：distrust + -ful，词性转到「不信任的」。',
      prefix: null,
      root: { text: 'distrust', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'distrustful', text: '英语派生：distrust + -ful，词性转到「不信任的」。' },
        { label: '现在', text: '核心用法是：不信任的。' },
      ],
      formationLogic: '先认词干 distrust，再看词尾。',
      mnemonic: '看到 distrustful，先说出「不信任的」。',
      note: '先认词干 distrust，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was distrustful.', chinese: '即使是初读者也能看出，这个结果是不信任的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'distrustful.s1', en: 'They wanted a distrustful answer, not a long speech.', zh: '他们要一个不信任的的答复，不要长篇发言。', structure: 'distrustful / 表示 / 不信任的', grammar: 'adjective，围绕「不信任的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are distrustful.', right: 'The news is distrustful.', reason: 'news 作主语时动词用单数。', rule: '先确定 distrustful 是adjective，再套「不信任的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'distrustful.q1', senseId: 'distrustful.s1', errorType: 'meaning', type: '词义选择', prompt: '「distrustful」在本条的核心意思是：', options: ['不信任的', '完全相反的意思', '一种古代钱币'], answer: '不信任的', explain: 'distrustful：不信任的。' },
      { id: 'distrustful.q2', senseId: 'distrustful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches distrustful?', options: ['不信任的', 'a kind of ancient coin', 'the past tense of be'], answer: '不信任的', explain: '对的是「不信任的」。' },
      { id: 'distrustful.q3', senseId: 'distrustful.s1', errorType: 'grammar', type: '词义选择', prompt: 'distrustful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'distrustful.q4', senseId: 'distrustful.s1', errorType: 'meaning', type: '词源', prompt: '记 distrustful 时，哪句更稳妥？', options: ['先锁住「不信任的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不信任的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不信任的'] },
  });

  D('disturb', {
    etymology: {
      origin: '拉丁语 disturbare「弄乱」。',
      prefix: null,
      root: { text: 'disturb', gloss: '打扰' },
      suffix: null,
      history: [
        { label: 'disturb', text: '拉丁语 disturbare「弄乱」。' },
        { label: '现在', text: '核心用法是：打扰。' },
      ],
      formationLogic: '考试认现在的用法：打扰。',
      mnemonic: '看到 disturb，先说出「打扰」。',
      note: '考试认现在的用法：打扰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to disturb before the office closed.', chinese: '他们同意在办公室关门前做这件事：打扰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disturb.s1', en: 'The deadline forced the team to disturb that afternoon.', zh: '截止日期逼着小组在那天下午打扰。', structure: 'disturb / 表示 / 打扰', grammar: 'verb，围绕「打扰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She disturbed it yesterday without checking the real past form.', right: 'Check the past form of "disturb" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 disturb 是verb，再套「打扰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disturb.q1', senseId: 'disturb.s1', errorType: 'meaning', type: '词义选择', prompt: '「disturb」在本条的核心意思是：', options: ['打扰', '完全相反的意思', '一种古代钱币'], answer: '打扰', explain: 'disturb：打扰。' },
      { id: 'disturb.q2', senseId: 'disturb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disturb?', options: ['打扰', 'a kind of ancient coin', 'the past tense of be'], answer: '打扰', explain: '对的是「打扰」。' },
      { id: 'disturb.q3', senseId: 'disturb.s1', errorType: 'grammar', type: '词义选择', prompt: 'disturb 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'disturb.q4', senseId: 'disturb.s1', errorType: 'meaning', type: '词源', prompt: '记 disturb 时，哪句更稳妥？', options: ['先锁住「打扰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打扰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打扰'] },
  });

  D('disturbance', {
    etymology: {
      origin: '英语派生：disturb + -ance，词性转到「干扰」。',
      prefix: null,
      root: { text: 'disturb', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'disturbance', text: '英语派生：disturb + -ance，词性转到「干扰」。' },
        { label: '现在', text: '核心用法是：干扰。' },
      ],
      formationLogic: '先认词干 disturb，再看词尾。',
      mnemonic: '看到 disturbance，先说出「干扰」。',
      note: '先认词干 disturb，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one disturbance.', chinese: '这一章反复回到同一个点：干扰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'disturbance.s1', en: 'Without that disturbance, the next paragraph is hard to follow.', zh: '没有这个干扰，下一段会很难读。', structure: 'disturbance / 表示 / 干扰', grammar: 'noun，围绕「干扰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the disturbance.', right: 'He gave me some advice about the disturbance.', reason: 'advice 不可数。名词 disturbance 的单复数按词典词形记。', rule: '先确定 disturbance 是noun，再套「干扰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'disturbance.q1', senseId: 'disturbance.s1', errorType: 'meaning', type: '词义选择', prompt: '「disturbance」在本条的核心意思是：', options: ['干扰', '完全相反的意思', '一种古代钱币'], answer: '干扰', explain: 'disturbance：干扰。' },
      { id: 'disturbance.q2', senseId: 'disturbance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches disturbance?', options: ['干扰', 'a kind of ancient coin', 'the past tense of be'], answer: '干扰', explain: '对的是「干扰」。' },
      { id: 'disturbance.q3', senseId: 'disturbance.s1', errorType: 'grammar', type: '词义选择', prompt: 'disturbance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'disturbance.q4', senseId: 'disturbance.s1', errorType: 'meaning', type: '词源', prompt: '记 disturbance 时，哪句更稳妥？', options: ['先锁住「干扰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干扰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干扰'] },
  });

  D('ditch', {
    etymology: {
      origin: '现代英语常用词「ditch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ditch', gloss: '沟' },
      suffix: null,
      history: [
        { label: 'ditch', text: '现代英语常用词「ditch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：沟。' },
      ],
      formationLogic: '核心义：沟。',
      mnemonic: '看到 ditch，先说出「沟」。',
      note: '核心义：沟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ditch.', chinese: '这一章反复回到同一个点：沟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ditch.s1', en: 'Without that ditch, the next paragraph is hard to follow.', zh: '没有这个沟，下一段会很难读。', structure: 'ditch / 表示 / 沟', grammar: 'noun，围绕「沟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ditch.', right: 'He gave me some advice about the ditch.', reason: 'advice 不可数。名词 ditch 的单复数按词典词形记。', rule: '先确定 ditch 是noun，再套「沟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ditch.q1', senseId: 'ditch.s1', errorType: 'meaning', type: '词义选择', prompt: '「ditch」在本条的核心意思是：', options: ['沟', '完全相反的意思', '一种古代钱币'], answer: '沟', explain: 'ditch：沟。' },
      { id: 'ditch.q2', senseId: 'ditch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ditch?', options: ['沟', 'a kind of ancient coin', 'the past tense of be'], answer: '沟', explain: '对的是「沟」。' },
      { id: 'ditch.q3', senseId: 'ditch.s1', errorType: 'grammar', type: '词义选择', prompt: 'ditch 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ditch.q4', senseId: 'ditch.s1', errorType: 'meaning', type: '词源', prompt: '记 ditch 时，哪句更稳妥？', options: ['先锁住「沟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沟'] },
  });

  D('ditto', {
    etymology: {
      origin: '现代英语常用词「ditto」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ditto', gloss: '同上' },
      suffix: null,
      history: [
        { label: 'ditto', text: '现代英语常用词「ditto」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同上。' },
      ],
      formationLogic: '核心义：同上。',
      mnemonic: '看到 ditto，先说出「同上」。',
      note: '核心义：同上。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ditto.', chinese: '这一章反复回到同一个点：同上。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ditto.s1', en: 'Without that ditto, the next paragraph is hard to follow.', zh: '没有这个同上，下一段会很难读。', structure: 'ditto / 表示 / 同上', grammar: 'noun，围绕「同上」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ditto.', right: 'He gave me some advice about the ditto.', reason: 'advice 不可数。名词 ditto 的单复数按词典词形记。', rule: '先确定 ditto 是noun，再套「同上」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ditto.q1', senseId: 'ditto.s1', errorType: 'meaning', type: '词义选择', prompt: '「ditto」在本条的核心意思是：', options: ['同上', '完全相反的意思', '一种古代钱币'], answer: '同上', explain: 'ditto：同上。' },
      { id: 'ditto.q2', senseId: 'ditto.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ditto?', options: ['同上', 'a kind of ancient coin', 'the past tense of be'], answer: '同上', explain: '对的是「同上」。' },
      { id: 'ditto.q3', senseId: 'ditto.s1', errorType: 'grammar', type: '词义选择', prompt: 'ditto 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ditto.q4', senseId: 'ditto.s1', errorType: 'meaning', type: '词源', prompt: '记 ditto 时，哪句更稳妥？', options: ['先锁住「同上」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同上」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同上'] },
  });

  D('dive', {
    etymology: {
      origin: '古英语 dufan。',
      prefix: null,
      root: { text: 'dive', gloss: '跳水' },
      suffix: null,
      history: [
        { label: 'dive', text: '古英语 dufan。' },
        { label: '现在', text: '核心用法是：跳水。' },
      ],
      formationLogic: '考试认现在的用法：跳水。',
      mnemonic: '看到 dive，先说出「跳水」。',
      note: '考试认现在的用法：跳水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dive before the office closed.', chinese: '他们同意在办公室关门前做这件事：跳水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dive.s1', en: 'The deadline forced the team to dive that afternoon.', zh: '截止日期逼着小组在那天下午跳水。', structure: 'dive / 表示 / 跳水', grammar: 'verb，围绕「跳水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diveed it yesterday without checking the real past form.', right: 'Check the past form of "dive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dive 是verb，再套「跳水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dive.q1', senseId: 'dive.s1', errorType: 'meaning', type: '词义选择', prompt: '「dive」在本条的核心意思是：', options: ['跳水', '完全相反的意思', '一种古代钱币'], answer: '跳水', explain: 'dive：跳水。' },
      { id: 'dive.q2', senseId: 'dive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dive?', options: ['跳水', 'a kind of ancient coin', 'the past tense of be'], answer: '跳水', explain: '对的是「跳水」。' },
      { id: 'dive.q3', senseId: 'dive.s1', errorType: 'grammar', type: '词义选择', prompt: 'dive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dive.q4', senseId: 'dive.s1', errorType: 'meaning', type: '词源', prompt: '记 dive 时，哪句更稳妥？', options: ['先锁住「跳水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「跳水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['跳水'] },
  });

  D('diverge', {
    etymology: {
      origin: '现代英语常用词「diverge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diverge', gloss: '分歧' },
      suffix: null,
      history: [
        { label: 'diverge', text: '现代英语常用词「diverge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：分歧。' },
      ],
      formationLogic: '核心义：分歧。',
      mnemonic: '看到 diverge，先说出「分歧」。',
      note: '核心义：分歧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to diverge before the office closed.', chinese: '他们同意在办公室关门前做这件事：分歧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diverge.s1', en: 'The deadline forced the team to diverge that afternoon.', zh: '截止日期逼着小组在那天下午分歧。', structure: 'diverge / 表示 / 分歧', grammar: 'verb，围绕「分歧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She divergeed it yesterday without checking the real past form.', right: 'Check the past form of "diverge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 diverge 是verb，再套「分歧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diverge.q1', senseId: 'diverge.s1', errorType: 'meaning', type: '词义选择', prompt: '「diverge」在本条的核心意思是：', options: ['分歧', '完全相反的意思', '一种古代钱币'], answer: '分歧', explain: 'diverge：分歧。' },
      { id: 'diverge.q2', senseId: 'diverge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diverge?', options: ['分歧', 'a kind of ancient coin', 'the past tense of be'], answer: '分歧', explain: '对的是「分歧」。' },
      { id: 'diverge.q3', senseId: 'diverge.s1', errorType: 'grammar', type: '词义选择', prompt: 'diverge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'diverge.q4', senseId: 'diverge.s1', errorType: 'meaning', type: '词源', prompt: '记 diverge 时，哪句更稳妥？', options: ['先锁住「分歧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分歧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分歧'] },
  });

  D('diverse', {
    etymology: {
      origin: '拉丁语 diversus「转到不同方向」。',
      prefix: null,
      root: { text: 'diverse', gloss: '多样的' },
      suffix: null,
      history: [
        { label: 'diverse', text: '拉丁语 diversus「转到不同方向」。' },
        { label: '现在', text: '核心用法是：多样的。' },
      ],
      formationLogic: '考试认现在的用法：多样的。',
      mnemonic: '看到 diverse，先说出「多样的」。',
      note: '考试认现在的用法：多样的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was diverse.', chinese: '即使是初读者也能看出，这个结果是多样的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diverse.s1', en: 'They wanted a diverse answer, not a long speech.', zh: '他们要一个多样的的答复，不要长篇发言。', structure: 'diverse / 表示 / 多样的', grammar: 'adjective，围绕「多样的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are diverse.', right: 'The news is diverse.', reason: 'news 作主语时动词用单数。', rule: '先确定 diverse 是adjective，再套「多样的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diverse.q1', senseId: 'diverse.s1', errorType: 'meaning', type: '词义选择', prompt: '「diverse」在本条的核心意思是：', options: ['多样的', '完全相反的意思', '一种古代钱币'], answer: '多样的', explain: 'diverse：多样的。' },
      { id: 'diverse.q2', senseId: 'diverse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diverse?', options: ['多样的', 'a kind of ancient coin', 'the past tense of be'], answer: '多样的', explain: '对的是「多样的」。' },
      { id: 'diverse.q3', senseId: 'diverse.s1', errorType: 'grammar', type: '词义选择', prompt: 'diverse 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'diverse.q4', senseId: 'diverse.s1', errorType: 'meaning', type: '词源', prompt: '记 diverse 时，哪句更稳妥？', options: ['先锁住「多样的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「多样的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['多样的'] },
  });

  D('divert', {
    etymology: {
      origin: '现代英语常用词「divert」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'divert', gloss: '使转向' },
      suffix: null,
      history: [
        { label: 'divert', text: '现代英语常用词「divert」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使转向。' },
      ],
      formationLogic: '核心义：使转向。',
      mnemonic: '看到 divert，先说出「使转向」。',
      note: '核心义：使转向。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to divert before the office closed.', chinese: '他们同意在办公室关门前做这件事：使转向。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divert.s1', en: 'The deadline forced the team to divert that afternoon.', zh: '截止日期逼着小组在那天下午使转向。', structure: 'divert / 表示 / 使转向', grammar: 'verb，围绕「使转向」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diverted it yesterday without checking the real past form.', right: 'Check the past form of "divert" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 divert 是verb，再套「使转向」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divert.q1', senseId: 'divert.s1', errorType: 'meaning', type: '词义选择', prompt: '「divert」在本条的核心意思是：', options: ['使转向', '完全相反的意思', '一种古代钱币'], answer: '使转向', explain: 'divert：使转向。' },
      { id: 'divert.q2', senseId: 'divert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divert?', options: ['使转向', 'a kind of ancient coin', 'the past tense of be'], answer: '使转向', explain: '对的是「使转向」。' },
      { id: 'divert.q3', senseId: 'divert.s1', errorType: 'grammar', type: '词义选择', prompt: 'divert 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'divert.q4', senseId: 'divert.s1', errorType: 'meaning', type: '词源', prompt: '记 divert 时，哪句更稳妥？', options: ['先锁住「使转向」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使转向」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使转向'] },
  });

  D('divide', {
    etymology: {
      origin: '拉丁语 dividere「分开」。',
      prefix: null,
      root: { text: 'divide', gloss: '分开' },
      suffix: null,
      history: [
        { label: 'divide', text: '拉丁语 dividere「分开」。' },
        { label: '现在', text: '核心用法是：分开。' },
      ],
      formationLogic: '考试认现在的用法：分开。',
      mnemonic: '看到 divide，先说出「分开」。',
      note: '考试认现在的用法：分开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to divide before the office closed.', chinese: '他们同意在办公室关门前做这件事：分开。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divide.s1', en: 'The deadline forced the team to divide that afternoon.', zh: '截止日期逼着小组在那天下午分开。', structure: 'divide / 表示 / 分开', grammar: 'verb，围绕「分开」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She divideed it yesterday without checking the real past form.', right: 'Check the past form of "divide" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 divide 是verb，再套「分开」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divide.q1', senseId: 'divide.s1', errorType: 'meaning', type: '词义选择', prompt: '「divide」在本条的核心意思是：', options: ['分开', '完全相反的意思', '一种古代钱币'], answer: '分开', explain: 'divide：分开。' },
      { id: 'divide.q2', senseId: 'divide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divide?', options: ['分开', 'a kind of ancient coin', 'the past tense of be'], answer: '分开', explain: '对的是「分开」。' },
      { id: 'divide.q3', senseId: 'divide.s1', errorType: 'grammar', type: '词义选择', prompt: 'divide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'divide.q4', senseId: 'divide.s1', errorType: 'meaning', type: '词源', prompt: '记 divide 时，哪句更稳妥？', options: ['先锁住「分开」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分开」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分开'] },
  });

  D('divided by', {
    etymology: {
      origin: '现代英语固定说法「divided by」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'divided by', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'divided by', text: '现代英语固定说法「divided by」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：被…除。' },
      ],
      formationLogic: '核心义：被…除。',
      mnemonic: '看到 divided by，先说出「被…除」。',
      note: '核心义：被…除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "divided by" and asked the class to keep it as one unit.', chinese: '老师把「divided by」圈出来，让全班把它当成一个整体。它表示被…除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divided by.s1', en: 'In the margin she wrote "divided by" so nobody would split the phrase.', zh: '她在页边写下「divided by」，免得有人把这个说法拆开。意思是被…除。', structure: 'divided by / 表示 / 被…除', grammar: 'verb，围绕「被…除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of divided by and lost the point.', right: 'Keep "divided by" together: it means 被…除.', reason: '「divided by」要整块理解。', rule: '先确定 divided by 是verb，再套「被…除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divided by.q1', senseId: 'divided by.s1', errorType: 'meaning', type: '词义选择', prompt: '「divided by」在本条的核心意思是：', options: ['被…除', '完全相反的意思', '一种古代钱币'], answer: '被…除', explain: 'divided by：被…除。' },
      { id: 'divided by.q2', senseId: 'divided by.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divided by?', options: ['被…除', 'a kind of ancient coin', 'the past tense of be'], answer: '被…除', explain: '对的是「被…除」。' },
      { id: 'divided by.q3', senseId: 'divided by.s1', errorType: 'grammar', type: '词义选择', prompt: 'divided by 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'divided by.q4', senseId: 'divided by.s1', errorType: 'meaning', type: '词源', prompt: '记 divided by 时，哪句更稳妥？', options: ['先锁住「被…除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被…除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被…除'] },
  });

  D('dividend', {
    etymology: {
      origin: '现代英语常用词「dividend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dividend', gloss: '股息' },
      suffix: null,
      history: [
        { label: 'dividend', text: '现代英语常用词「dividend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：股息。' },
      ],
      formationLogic: '核心义：股息。',
      mnemonic: '看到 dividend，先说出「股息」。',
      note: '核心义：股息。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dividend.', chinese: '这一章反复回到同一个点：股息。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dividend.s1', en: 'Without that dividend, the next paragraph is hard to follow.', zh: '没有这个股息，下一段会很难读。', structure: 'dividend / 表示 / 股息', grammar: 'noun，围绕「股息」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dividend.', right: 'He gave me some advice about the dividend.', reason: 'advice 不可数。名词 dividend 的单复数按词典词形记。', rule: '先确定 dividend 是noun，再套「股息」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dividend.q1', senseId: 'dividend.s1', errorType: 'meaning', type: '词义选择', prompt: '「dividend」在本条的核心意思是：', options: ['股息', '完全相反的意思', '一种古代钱币'], answer: '股息', explain: 'dividend：股息。' },
      { id: 'dividend.q2', senseId: 'dividend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dividend?', options: ['股息', 'a kind of ancient coin', 'the past tense of be'], answer: '股息', explain: '对的是「股息」。' },
      { id: 'dividend.q3', senseId: 'dividend.s1', errorType: 'grammar', type: '词义选择', prompt: 'dividend 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dividend.q4', senseId: 'dividend.s1', errorType: 'meaning', type: '词源', prompt: '记 dividend 时，哪句更稳妥？', options: ['先锁住「股息」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「股息」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['股息'] },
  });

  D('divider', {
    etymology: {
      origin: '英语派生：divid + -er，词性转到「分隔物」。',
      prefix: null,
      root: { text: 'divid', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'divider', text: '英语派生：divid + -er，词性转到「分隔物」。' },
        { label: '现在', text: '核心用法是：分隔物。' },
      ],
      formationLogic: '先认词干 divid，再看词尾。',
      mnemonic: '看到 divider，先说出「分隔物」。',
      note: '先认词干 divid，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one divider.', chinese: '这一章反复回到同一个点：分隔物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divider.s1', en: 'Without that divider, the next paragraph is hard to follow.', zh: '没有这个分隔物，下一段会很难读。', structure: 'divider / 表示 / 分隔物', grammar: 'noun，围绕「分隔物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the divider.', right: 'He gave me some advice about the divider.', reason: 'advice 不可数。名词 divider 的单复数按词典词形记。', rule: '先确定 divider 是noun，再套「分隔物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divider.q1', senseId: 'divider.s1', errorType: 'meaning', type: '词义选择', prompt: '「divider」在本条的核心意思是：', options: ['分隔物', '完全相反的意思', '一种古代钱币'], answer: '分隔物', explain: 'divider：分隔物。' },
      { id: 'divider.q2', senseId: 'divider.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divider?', options: ['分隔物', 'a kind of ancient coin', 'the past tense of be'], answer: '分隔物', explain: '对的是「分隔物」。' },
      { id: 'divider.q3', senseId: 'divider.s1', errorType: 'grammar', type: '词义选择', prompt: 'divider 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'divider.q4', senseId: 'divider.s1', errorType: 'meaning', type: '词源', prompt: '记 divider 时，哪句更稳妥？', options: ['先锁住「分隔物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分隔物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分隔物'] },
  });

  D('divine', {
    etymology: {
      origin: '现代英语常用词「divine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'divine', gloss: '神的' },
      suffix: null,
      history: [
        { label: 'divine', text: '现代英语常用词「divine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：神的。' },
      ],
      formationLogic: '核心义：神的。',
      mnemonic: '看到 divine，先说出「神的」。',
      note: '核心义：神的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was divine.', chinese: '即使是初读者也能看出，这个结果是神的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divine.s1', en: 'They wanted a divine answer, not a long speech.', zh: '他们要一个神的的答复，不要长篇发言。', structure: 'divine / 表示 / 神的', grammar: 'adjective，围绕「神的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are divine.', right: 'The news is divine.', reason: 'news 作主语时动词用单数。', rule: '先确定 divine 是adjective，再套「神的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divine.q1', senseId: 'divine.s1', errorType: 'meaning', type: '词义选择', prompt: '「divine」在本条的核心意思是：', options: ['神的', '完全相反的意思', '一种古代钱币'], answer: '神的', explain: 'divine：神的。' },
      { id: 'divine.q2', senseId: 'divine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divine?', options: ['神的', 'a kind of ancient coin', 'the past tense of be'], answer: '神的', explain: '对的是「神的」。' },
      { id: 'divine.q3', senseId: 'divine.s1', errorType: 'grammar', type: '词义选择', prompt: 'divine 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'divine.q4', senseId: 'divine.s1', errorType: 'meaning', type: '词源', prompt: '记 divine 时，哪句更稳妥？', options: ['先锁住「神的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「神的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['神的'] },
  });

  D('divinity', {
    etymology: {
      origin: '英语派生：divin + -ity，词性转到「神」。',
      prefix: null,
      root: { text: 'divin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'divinity', text: '英语派生：divin + -ity，词性转到「神」。' },
        { label: '现在', text: '核心用法是：神。' },
      ],
      formationLogic: '先认词干 divin，再看词尾。',
      mnemonic: '看到 divinity，先说出「神」。',
      note: '先认词干 divin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one divinity.', chinese: '这一章反复回到同一个点：神。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divinity.s1', en: 'Without that divinity, the next paragraph is hard to follow.', zh: '没有这个神，下一段会很难读。', structure: 'divinity / 表示 / 神', grammar: 'noun，围绕「神」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the divinity.', right: 'He gave me some advice about the divinity.', reason: 'advice 不可数。名词 divinity 的单复数按词典词形记。', rule: '先确定 divinity 是noun，再套「神」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divinity.q1', senseId: 'divinity.s1', errorType: 'meaning', type: '词义选择', prompt: '「divinity」在本条的核心意思是：', options: ['神', '完全相反的意思', '一种古代钱币'], answer: '神', explain: 'divinity：神。' },
      { id: 'divinity.q2', senseId: 'divinity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divinity?', options: ['神', 'a kind of ancient coin', 'the past tense of be'], answer: '神', explain: '对的是「神」。' },
      { id: 'divinity.q3', senseId: 'divinity.s1', errorType: 'grammar', type: '词义选择', prompt: 'divinity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'divinity.q4', senseId: 'divinity.s1', errorType: 'meaning', type: '词源', prompt: '记 divinity 时，哪句更稳妥？', options: ['先锁住「神」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「神」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['神'] },
  });

  D('division', {
    etymology: {
      origin: 'divide 的名词。',
      prefix: null,
      root: { text: 'division', gloss: '分开' },
      suffix: null,
      history: [
        { label: 'division', text: 'divide 的名词。' },
        { label: '现在', text: '核心用法是：分开。' },
      ],
      formationLogic: '考试认现在的用法：分开。',
      mnemonic: '看到 division，先说出「分开」。',
      note: '考试认现在的用法：分开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one division.', chinese: '这一章反复回到同一个点：分开。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'division.s1', en: 'Without that division, the next paragraph is hard to follow.', zh: '没有这个分开，下一段会很难读。', structure: 'division / 表示 / 分开', grammar: 'noun，围绕「分开」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the division.', right: 'He gave me some advice about the division.', reason: 'advice 不可数。名词 division 的单复数按词典词形记。', rule: '先确定 division 是noun，再套「分开」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'division.q1', senseId: 'division.s1', errorType: 'meaning', type: '词义选择', prompt: '「division」在本条的核心意思是：', options: ['分开', '完全相反的意思', '一种古代钱币'], answer: '分开', explain: 'division：分开。' },
      { id: 'division.q2', senseId: 'division.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches division?', options: ['分开', 'a kind of ancient coin', 'the past tense of be'], answer: '分开', explain: '对的是「分开」。' },
      { id: 'division.q3', senseId: 'division.s1', errorType: 'grammar', type: '词义选择', prompt: 'division 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'division.q4', senseId: 'division.s1', errorType: 'meaning', type: '词源', prompt: '记 division 时，哪句更稳妥？', options: ['先锁住「分开」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分开」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分开'] },
  });

  D('divisor', {
    etymology: {
      origin: '英语派生：divis + -or，词性转到「除数」。',
      prefix: null,
      root: { text: 'divis', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'divisor', text: '英语派生：divis + -or，词性转到「除数」。' },
        { label: '现在', text: '核心用法是：除数。' },
      ],
      formationLogic: '先认词干 divis，再看词尾。',
      mnemonic: '看到 divisor，先说出「除数」。',
      note: '先认词干 divis，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one divisor.', chinese: '这一章反复回到同一个点：除数。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divisor.s1', en: 'Without that divisor, the next paragraph is hard to follow.', zh: '没有这个除数，下一段会很难读。', structure: 'divisor / 表示 / 除数', grammar: 'noun，围绕「除数」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the divisor.', right: 'He gave me some advice about the divisor.', reason: 'advice 不可数。名词 divisor 的单复数按词典词形记。', rule: '先确定 divisor 是noun，再套「除数」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divisor.q1', senseId: 'divisor.s1', errorType: 'meaning', type: '词义选择', prompt: '「divisor」在本条的核心意思是：', options: ['除数', '完全相反的意思', '一种古代钱币'], answer: '除数', explain: 'divisor：除数。' },
      { id: 'divisor.q2', senseId: 'divisor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divisor?', options: ['除数', 'a kind of ancient coin', 'the past tense of be'], answer: '除数', explain: '对的是「除数」。' },
      { id: 'divisor.q3', senseId: 'divisor.s1', errorType: 'grammar', type: '词义选择', prompt: 'divisor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'divisor.q4', senseId: 'divisor.s1', errorType: 'meaning', type: '词源', prompt: '记 divisor 时，哪句更稳妥？', options: ['先锁住「除数」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「除数」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['除数'] },
  });

  D('divorce', {
    etymology: {
      origin: '拉丁语 divortium「分开」。',
      prefix: null,
      root: { text: 'divorce', gloss: '离婚' },
      suffix: null,
      history: [
        { label: 'divorce', text: '拉丁语 divortium「分开」。' },
        { label: '现在', text: '核心用法是：离婚。' },
      ],
      formationLogic: '考试认现在的用法：离婚。',
      mnemonic: '看到 divorce，先说出「离婚」。',
      note: '考试认现在的用法：离婚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one divorce.', chinese: '这一章反复回到同一个点：离婚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divorce.s1', en: 'Without that divorce, the next paragraph is hard to follow.', zh: '没有这个离婚，下一段会很难读。', structure: 'divorce / 表示 / 离婚', grammar: 'noun，围绕「离婚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the divorce.', right: 'He gave me some advice about the divorce.', reason: 'advice 不可数。名词 divorce 的单复数按词典词形记。', rule: '先确定 divorce 是noun，再套「离婚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divorce.q1', senseId: 'divorce.s1', errorType: 'meaning', type: '词义选择', prompt: '「divorce」在本条的核心意思是：', options: ['离婚', '完全相反的意思', '一种古代钱币'], answer: '离婚', explain: 'divorce：离婚。' },
      { id: 'divorce.q2', senseId: 'divorce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divorce?', options: ['离婚', 'a kind of ancient coin', 'the past tense of be'], answer: '离婚', explain: '对的是「离婚」。' },
      { id: 'divorce.q3', senseId: 'divorce.s1', errorType: 'grammar', type: '词义选择', prompt: 'divorce 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'divorce.q4', senseId: 'divorce.s1', errorType: 'meaning', type: '词源', prompt: '记 divorce 时，哪句更稳妥？', options: ['先锁住「离婚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「离婚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['离婚'] },
  });

  D('divulge', {
    etymology: {
      origin: '现代英语常用词「divulge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'divulge', gloss: '泄露' },
      suffix: null,
      history: [
        { label: 'divulge', text: '现代英语常用词「divulge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：泄露。' },
      ],
      formationLogic: '核心义：泄露。',
      mnemonic: '看到 divulge，先说出「泄露」。',
      note: '核心义：泄露。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to divulge before the office closed.', chinese: '他们同意在办公室关门前做这件事：泄露。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'divulge.s1', en: 'The deadline forced the team to divulge that afternoon.', zh: '截止日期逼着小组在那天下午泄露。', structure: 'divulge / 表示 / 泄露', grammar: 'verb，围绕「泄露」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She divulgeed it yesterday without checking the real past form.', right: 'Check the past form of "divulge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 divulge 是verb，再套「泄露」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'divulge.q1', senseId: 'divulge.s1', errorType: 'meaning', type: '词义选择', prompt: '「divulge」在本条的核心意思是：', options: ['泄露', '完全相反的意思', '一种古代钱币'], answer: '泄露', explain: 'divulge：泄露。' },
      { id: 'divulge.q2', senseId: 'divulge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches divulge?', options: ['泄露', 'a kind of ancient coin', 'the past tense of be'], answer: '泄露', explain: '对的是「泄露」。' },
      { id: 'divulge.q3', senseId: 'divulge.s1', errorType: 'grammar', type: '词义选择', prompt: 'divulge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'divulge.q4', senseId: 'divulge.s1', errorType: 'meaning', type: '词源', prompt: '记 divulge 时，哪句更稳妥？', options: ['先锁住「泄露」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「泄露」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['泄露'] },
  });

  D('dizzy', {
    etymology: {
      origin: '现代英语常用词「dizzy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dizzy', gloss: '头晕的' },
      suffix: null,
      history: [
        { label: 'dizzy', text: '现代英语常用词「dizzy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：头晕的。' },
      ],
      formationLogic: '核心义：头晕的。',
      mnemonic: '看到 dizzy，先说出「头晕的」。',
      note: '核心义：头晕的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dizzy.', chinese: '即使是初读者也能看出，这个结果是头晕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dizzy.s1', en: 'They wanted a dizzy answer, not a long speech.', zh: '他们要一个头晕的的答复，不要长篇发言。', structure: 'dizzy / 表示 / 头晕的', grammar: 'adjective，围绕「头晕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dizzy.', right: 'The news is dizzy.', reason: 'news 作主语时动词用单数。', rule: '先确定 dizzy 是adjective，再套「头晕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dizzy.q1', senseId: 'dizzy.s1', errorType: 'meaning', type: '词义选择', prompt: '「dizzy」在本条的核心意思是：', options: ['头晕的', '完全相反的意思', '一种古代钱币'], answer: '头晕的', explain: 'dizzy：头晕的。' },
      { id: 'dizzy.q2', senseId: 'dizzy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dizzy?', options: ['头晕的', 'a kind of ancient coin', 'the past tense of be'], answer: '头晕的', explain: '对的是「头晕的」。' },
      { id: 'dizzy.q3', senseId: 'dizzy.s1', errorType: 'grammar', type: '词义选择', prompt: 'dizzy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dizzy.q4', senseId: 'dizzy.s1', errorType: 'meaning', type: '词源', prompt: '记 dizzy 时，哪句更稳妥？', options: ['先锁住「头晕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「头晕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['头晕的'] },
  });

  D('dj', {
    etymology: {
      origin: '现代英语常用词「dj」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dj', gloss: '流行音乐电台主持' },
      suffix: null,
      history: [
        { label: 'dj', text: '现代英语常用词「dj」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：流行音乐电台主持。' },
      ],
      formationLogic: '核心义：流行音乐电台主持。',
      mnemonic: '看到 dj，先说出「流行音乐电台主持」。',
      note: '核心义：流行音乐电台主持。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dj.', chinese: '这一章反复回到同一个点：流行音乐电台主持。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dj.s1', en: 'Without that dj, the next paragraph is hard to follow.', zh: '没有这个流行音乐电台主持，下一段会很难读。', structure: 'dj / 表示 / 流行音乐电台主持', grammar: 'noun，围绕「流行音乐电台主持」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dj.', right: 'He gave me some advice about the dj.', reason: 'advice 不可数。名词 dj 的单复数按词典词形记。', rule: '先确定 dj 是noun，再套「流行音乐电台主持」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dj.q1', senseId: 'dj.s1', errorType: 'meaning', type: '词义选择', prompt: '「dj」在本条的核心意思是：', options: ['流行音乐电台主持', '完全相反的意思', '一种古代钱币'], answer: '流行音乐电台主持', explain: 'dj：流行音乐电台主持。' },
      { id: 'dj.q2', senseId: 'dj.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dj?', options: ['流行音乐电台主持', 'a kind of ancient coin', 'the past tense of be'], answer: '流行音乐电台主持', explain: '对的是「流行音乐电台主持」。' },
      { id: 'dj.q3', senseId: 'dj.s1', errorType: 'grammar', type: '词义选择', prompt: 'dj 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dj.q4', senseId: 'dj.s1', errorType: 'meaning', type: '词源', prompt: '记 dj 时，哪句更稳妥？', options: ['先锁住「流行音乐电台主持」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流行音乐电台主持」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流行音乐电台主持'] },
  });

  D('do', {
    etymology: {
      origin: '古英语 don。',
      prefix: null,
      root: { text: 'do', gloss: '做' },
      suffix: null,
      history: [
        { label: 'do', text: '古英语 don。' },
        { label: '现在', text: '核心用法是：做。' },
      ],
      formationLogic: '考试认现在的用法：做。',
      mnemonic: '看到 do，先说出「做」。',
      note: '考试认现在的用法：做。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to do before the office closed.', chinese: '他们同意在办公室关门前做这件事：做。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'do.s1', en: 'The deadline forced the team to do that afternoon.', zh: '截止日期逼着小组在那天下午做。', structure: 'do / 表示 / 做', grammar: 'verb，围绕「做」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She doed it yesterday without checking the real past form.', right: 'Check the past form of "do" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 do 是verb，再套「做」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'do.q1', senseId: 'do.s1', errorType: 'meaning', type: '词义选择', prompt: '「do」在本条的核心意思是：', options: ['做', '完全相反的意思', '一种古代钱币'], answer: '做', explain: 'do：做。' },
      { id: 'do.q2', senseId: 'do.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches do?', options: ['做', 'a kind of ancient coin', 'the past tense of be'], answer: '做', explain: '对的是「做」。' },
      { id: 'do.q3', senseId: 'do.s1', errorType: 'grammar', type: '词义选择', prompt: 'do 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'do.q4', senseId: 'do.s1', errorType: 'meaning', type: '词源', prompt: '记 do 时，哪句更稳妥？', options: ['先锁住「做」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「做」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['做'] },
  });

  D('do not', {
    etymology: {
      origin: '现代英语固定说法「do not」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'do not', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'do not', text: '现代英语固定说法「do not」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：do 的否定形式。' },
      ],
      formationLogic: '核心义：do 的否定形式。',
      mnemonic: '看到 do not，先说出「do 的否定形式」。',
      note: '核心义：do 的否定形式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "do not" and asked the class to keep it as one unit.', chinese: '老师把「do not」圈出来，让全班把它当成一个整体。它表示do 的否定形式。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'do not.s1', en: 'In the margin she wrote "do not" so nobody would split the phrase.', zh: '她在页边写下「do not」，免得有人把这个说法拆开。意思是do 的否定形式。', structure: 'do not / 表示 / do 的否定形式', grammar: 'verb，围绕「do 的否定形式」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of do not and lost the point.', right: 'Keep "do not" together: it means do 的否定形式.', reason: '「do not」要整块理解。', rule: '先确定 do not 是verb，再套「do 的否定形式」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'do not.q1', senseId: 'do not.s1', errorType: 'meaning', type: '词义选择', prompt: '「do not」在本条的核心意思是：', options: ['do 的否定形式', '完全相反的意思', '一种古代钱币'], answer: 'do 的否定形式', explain: 'do not：do 的否定形式。' },
      { id: 'do not.q2', senseId: 'do not.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches do not?', options: ['do 的否定形式', 'a kind of ancient coin', 'the past tense of be'], answer: 'do 的否定形式', explain: '对的是「do 的否定形式」。' },
      { id: 'do not.q3', senseId: 'do not.s1', errorType: 'grammar', type: '词义选择', prompt: 'do not 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'do not.q4', senseId: 'do not.s1', errorType: 'meaning', type: '词源', prompt: '记 do not 时，哪句更稳妥？', options: ['先锁住「do 的否定形式」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「do 的否定形式」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['do 的否定形式'] },
  });

  D('do without', {
    etymology: {
      origin: '现代英语固定说法「do without」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'do without', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'do without', text: '现代英语固定说法「do without」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：没有…也行。' },
      ],
      formationLogic: '核心义：没有…也行。',
      mnemonic: '看到 do without，先说出「没有…也行」。',
      note: '核心义：没有…也行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "do without" and asked the class to keep it as one unit.', chinese: '老师把「do without」圈出来，让全班把它当成一个整体。它表示没有…也行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'do without.s1', en: 'In the margin she wrote "do without" so nobody would split the phrase.', zh: '她在页边写下「do without」，免得有人把这个说法拆开。意思是没有…也行。', structure: 'do without / 表示 / 没有…也行', grammar: 'verb，围绕「没有…也行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of do without and lost the point.', right: 'Keep "do without" together: it means 没有…也行.', reason: '「do without」要整块理解。', rule: '先确定 do without 是verb，再套「没有…也行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'do without.q1', senseId: 'do without.s1', errorType: 'meaning', type: '词义选择', prompt: '「do without」在本条的核心意思是：', options: ['没有…也行', '完全相反的意思', '一种古代钱币'], answer: '没有…也行', explain: 'do without：没有…也行。' },
      { id: 'do without.q2', senseId: 'do without.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches do without?', options: ['没有…也行', 'a kind of ancient coin', 'the past tense of be'], answer: '没有…也行', explain: '对的是「没有…也行」。' },
      { id: 'do without.q3', senseId: 'do without.s1', errorType: 'grammar', type: '词义选择', prompt: 'do without 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'do without.q4', senseId: 'do without.s1', errorType: 'meaning', type: '词源', prompt: '记 do without 时，哪句更稳妥？', options: ['先锁住「没有…也行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「没有…也行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['没有…也行'] },
  });

  D('docile', {
    etymology: {
      origin: '现代英语常用词「docile」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'docile', gloss: '温顺的' },
      suffix: null,
      history: [
        { label: 'docile', text: '现代英语常用词「docile」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：温顺的。' },
      ],
      formationLogic: '核心义：温顺的。',
      mnemonic: '看到 docile，先说出「温顺的」。',
      note: '核心义：温顺的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was docile.', chinese: '即使是初读者也能看出，这个结果是温顺的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'docile.s1', en: 'They wanted a docile answer, not a long speech.', zh: '他们要一个温顺的的答复，不要长篇发言。', structure: 'docile / 表示 / 温顺的', grammar: 'adjective，围绕「温顺的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are docile.', right: 'The news is docile.', reason: 'news 作主语时动词用单数。', rule: '先确定 docile 是adjective，再套「温顺的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'docile.q1', senseId: 'docile.s1', errorType: 'meaning', type: '词义选择', prompt: '「docile」在本条的核心意思是：', options: ['温顺的', '完全相反的意思', '一种古代钱币'], answer: '温顺的', explain: 'docile：温顺的。' },
      { id: 'docile.q2', senseId: 'docile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches docile?', options: ['温顺的', 'a kind of ancient coin', 'the past tense of be'], answer: '温顺的', explain: '对的是「温顺的」。' },
      { id: 'docile.q3', senseId: 'docile.s1', errorType: 'grammar', type: '词义选择', prompt: 'docile 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'docile.q4', senseId: 'docile.s1', errorType: 'meaning', type: '词源', prompt: '记 docile 时，哪句更稳妥？', options: ['先锁住「温顺的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「温顺的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['温顺的'] },
  });

  D('dock', {
    etymology: {
      origin: '现代英语常用词「dock」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dock', gloss: '码头' },
      suffix: null,
      history: [
        { label: 'dock', text: '现代英语常用词「dock」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：码头。' },
      ],
      formationLogic: '核心义：码头。',
      mnemonic: '看到 dock，先说出「码头」。',
      note: '核心义：码头。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dock.', chinese: '这一章反复回到同一个点：码头。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dock.s1', en: 'Without that dock, the next paragraph is hard to follow.', zh: '没有这个码头，下一段会很难读。', structure: 'dock / 表示 / 码头', grammar: 'noun，围绕「码头」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dock.', right: 'He gave me some advice about the dock.', reason: 'advice 不可数。名词 dock 的单复数按词典词形记。', rule: '先确定 dock 是noun，再套「码头」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dock.q1', senseId: 'dock.s1', errorType: 'meaning', type: '词义选择', prompt: '「dock」在本条的核心意思是：', options: ['码头', '完全相反的意思', '一种古代钱币'], answer: '码头', explain: 'dock：码头。' },
      { id: 'dock.q2', senseId: 'dock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dock?', options: ['码头', 'a kind of ancient coin', 'the past tense of be'], answer: '码头', explain: '对的是「码头」。' },
      { id: 'dock.q3', senseId: 'dock.s1', errorType: 'grammar', type: '词义选择', prompt: 'dock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dock.q4', senseId: 'dock.s1', errorType: 'meaning', type: '词源', prompt: '记 dock 时，哪句更稳妥？', options: ['先锁住「码头」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「码头」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['码头'] },
  });

  D('dockyard', {
    etymology: {
      origin: '现代英语常用词「dockyard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dockyard', gloss: '造船厂' },
      suffix: null,
      history: [
        { label: 'dockyard', text: '现代英语常用词「dockyard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：造船厂。' },
      ],
      formationLogic: '核心义：造船厂。',
      mnemonic: '看到 dockyard，先说出「造船厂」。',
      note: '核心义：造船厂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dockyard.', chinese: '这一章反复回到同一个点：造船厂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dockyard.s1', en: 'Without that dockyard, the next paragraph is hard to follow.', zh: '没有这个造船厂，下一段会很难读。', structure: 'dockyard / 表示 / 造船厂', grammar: 'noun，围绕「造船厂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dockyard.', right: 'He gave me some advice about the dockyard.', reason: 'advice 不可数。名词 dockyard 的单复数按词典词形记。', rule: '先确定 dockyard 是noun，再套「造船厂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dockyard.q1', senseId: 'dockyard.s1', errorType: 'meaning', type: '词义选择', prompt: '「dockyard」在本条的核心意思是：', options: ['造船厂', '完全相反的意思', '一种古代钱币'], answer: '造船厂', explain: 'dockyard：造船厂。' },
      { id: 'dockyard.q2', senseId: 'dockyard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dockyard?', options: ['造船厂', 'a kind of ancient coin', 'the past tense of be'], answer: '造船厂', explain: '对的是「造船厂」。' },
      { id: 'dockyard.q3', senseId: 'dockyard.s1', errorType: 'grammar', type: '词义选择', prompt: 'dockyard 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dockyard.q4', senseId: 'dockyard.s1', errorType: 'meaning', type: '词源', prompt: '记 dockyard 时，哪句更稳妥？', options: ['先锁住「造船厂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「造船厂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['造船厂'] },
  });

  D('doctor', {
    etymology: {
      origin: '拉丁语 doctor「教师」，docere「教」。',
      prefix: null,
      root: { text: 'doctor', gloss: '医生' },
      suffix: null,
      history: [
        { label: 'doctor', text: '拉丁语 doctor「教师」，docere「教」。' },
        { label: '现在', text: '核心用法是：医生。' },
      ],
      formationLogic: '考试认现在的用法：医生。',
      mnemonic: '看到 doctor，先说出「医生」。',
      note: '考试认现在的用法：医生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doctor.', chinese: '这一章反复回到同一个点：医生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doctor.s1', en: 'Without that doctor, the next paragraph is hard to follow.', zh: '没有这个医生，下一段会很难读。', structure: 'doctor / 表示 / 医生', grammar: 'noun，围绕「医生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doctor.', right: 'He gave me some advice about the doctor.', reason: 'advice 不可数。名词 doctor 的单复数按词典词形记。', rule: '先确定 doctor 是noun，再套「医生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doctor.q1', senseId: 'doctor.s1', errorType: 'meaning', type: '词义选择', prompt: '「doctor」在本条的核心意思是：', options: ['医生', '完全相反的意思', '一种古代钱币'], answer: '医生', explain: 'doctor：医生。' },
      { id: 'doctor.q2', senseId: 'doctor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doctor?', options: ['医生', 'a kind of ancient coin', 'the past tense of be'], answer: '医生', explain: '对的是「医生」。' },
      { id: 'doctor.q3', senseId: 'doctor.s1', errorType: 'grammar', type: '词义选择', prompt: 'doctor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doctor.q4', senseId: 'doctor.s1', errorType: 'meaning', type: '词源', prompt: '记 doctor 时，哪句更稳妥？', options: ['先锁住「医生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「医生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['医生'] },
  });

  D('doctrine', {
    etymology: {
      origin: '现代英语常用词「doctrine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doctrine', gloss: '教义' },
      suffix: null,
      history: [
        { label: 'doctrine', text: '现代英语常用词「doctrine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：教义。' },
      ],
      formationLogic: '核心义：教义。',
      mnemonic: '看到 doctrine，先说出「教义」。',
      note: '核心义：教义。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doctrine.', chinese: '这一章反复回到同一个点：教义。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doctrine.s1', en: 'Without that doctrine, the next paragraph is hard to follow.', zh: '没有这个教义，下一段会很难读。', structure: 'doctrine / 表示 / 教义', grammar: 'noun，围绕「教义」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doctrine.', right: 'He gave me some advice about the doctrine.', reason: 'advice 不可数。名词 doctrine 的单复数按词典词形记。', rule: '先确定 doctrine 是noun，再套「教义」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doctrine.q1', senseId: 'doctrine.s1', errorType: 'meaning', type: '词义选择', prompt: '「doctrine」在本条的核心意思是：', options: ['教义', '完全相反的意思', '一种古代钱币'], answer: '教义', explain: 'doctrine：教义。' },
      { id: 'doctrine.q2', senseId: 'doctrine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doctrine?', options: ['教义', 'a kind of ancient coin', 'the past tense of be'], answer: '教义', explain: '对的是「教义」。' },
      { id: 'doctrine.q3', senseId: 'doctrine.s1', errorType: 'grammar', type: '词义选择', prompt: 'doctrine 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doctrine.q4', senseId: 'doctrine.s1', errorType: 'meaning', type: '词源', prompt: '记 doctrine 时，哪句更稳妥？', options: ['先锁住「教义」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教义」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教义'] },
  });

  D('document', {
    etymology: {
      origin: '拉丁语 documentum「教训、文件」，docere。',
      prefix: null,
      root: { text: 'document', gloss: '文件' },
      suffix: null,
      history: [
        { label: 'document', text: '拉丁语 documentum「教训、文件」，docere。' },
        { label: '现在', text: '核心用法是：文件。' },
      ],
      formationLogic: '考试认现在的用法：文件。',
      mnemonic: '看到 document，先说出「文件」。',
      note: '考试认现在的用法：文件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one document.', chinese: '这一章反复回到同一个点：文件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'document.s1', en: 'Without that document, the next paragraph is hard to follow.', zh: '没有这个文件，下一段会很难读。', structure: 'document / 表示 / 文件', grammar: 'noun，围绕「文件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the document.', right: 'He gave me some advice about the document.', reason: 'advice 不可数。名词 document 的单复数按词典词形记。', rule: '先确定 document 是noun，再套「文件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'document.q1', senseId: 'document.s1', errorType: 'meaning', type: '词义选择', prompt: '「document」在本条的核心意思是：', options: ['文件', '完全相反的意思', '一种古代钱币'], answer: '文件', explain: 'document：文件。' },
      { id: 'document.q2', senseId: 'document.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches document?', options: ['文件', 'a kind of ancient coin', 'the past tense of be'], answer: '文件', explain: '对的是「文件」。' },
      { id: 'document.q3', senseId: 'document.s1', errorType: 'grammar', type: '词义选择', prompt: 'document 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'document.q4', senseId: 'document.s1', errorType: 'meaning', type: '词源', prompt: '记 document 时，哪句更稳妥？', options: ['先锁住「文件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文件'] },
  });

  D('documents', {
    etymology: {
      origin: '现代英语常用词「documents」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'documents', gloss: '文件' },
      suffix: null,
      history: [
        { label: 'documents', text: '现代英语常用词「documents」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：文件。' },
      ],
      formationLogic: '核心义：文件。',
      mnemonic: '看到 documents，先说出「文件」。',
      note: '核心义：文件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one documents.', chinese: '这一章反复回到同一个点：文件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'documents.s1', en: 'Without that documents, the next paragraph is hard to follow.', zh: '没有这个文件，下一段会很难读。', structure: 'documents / 表示 / 文件', grammar: 'noun，围绕「文件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the documents.', right: 'He gave me some advice about the documents.', reason: 'advice 不可数。名词 documents 的单复数按词典词形记。', rule: '先确定 documents 是noun，再套「文件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'documents.q1', senseId: 'documents.s1', errorType: 'meaning', type: '词义选择', prompt: '「documents」在本条的核心意思是：', options: ['文件', '完全相反的意思', '一种古代钱币'], answer: '文件', explain: 'documents：文件。' },
      { id: 'documents.q2', senseId: 'documents.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches documents?', options: ['文件', 'a kind of ancient coin', 'the past tense of be'], answer: '文件', explain: '对的是「文件」。' },
      { id: 'documents.q3', senseId: 'documents.s1', errorType: 'grammar', type: '词义选择', prompt: 'documents 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'documents.q4', senseId: 'documents.s1', errorType: 'meaning', type: '词源', prompt: '记 documents 时，哪句更稳妥？', options: ['先锁住「文件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文件'] },
  });

  D('dodge', {
    etymology: {
      origin: '现代英语常用词「dodge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dodge', gloss: '躲开' },
      suffix: null,
      history: [
        { label: 'dodge', text: '现代英语常用词「dodge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：躲开。' },
      ],
      formationLogic: '核心义：躲开。',
      mnemonic: '看到 dodge，先说出「躲开」。',
      note: '核心义：躲开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dodge before the office closed.', chinese: '他们同意在办公室关门前做这件事：躲开。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dodge.s1', en: 'The deadline forced the team to dodge that afternoon.', zh: '截止日期逼着小组在那天下午躲开。', structure: 'dodge / 表示 / 躲开', grammar: 'verb，围绕「躲开」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dodgeed it yesterday without checking the real past form.', right: 'Check the past form of "dodge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dodge 是verb，再套「躲开」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dodge.q1', senseId: 'dodge.s1', errorType: 'meaning', type: '词义选择', prompt: '「dodge」在本条的核心意思是：', options: ['躲开', '完全相反的意思', '一种古代钱币'], answer: '躲开', explain: 'dodge：躲开。' },
      { id: 'dodge.q2', senseId: 'dodge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dodge?', options: ['躲开', 'a kind of ancient coin', 'the past tense of be'], answer: '躲开', explain: '对的是「躲开」。' },
      { id: 'dodge.q3', senseId: 'dodge.s1', errorType: 'grammar', type: '词义选择', prompt: 'dodge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dodge.q4', senseId: 'dodge.s1', errorType: 'meaning', type: '词源', prompt: '记 dodge 时，哪句更稳妥？', options: ['先锁住「躲开」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「躲开」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['躲开'] },
  });

  D('doe', {
    etymology: {
      origin: '现代英语常用词「doe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doe', gloss: '母鹿' },
      suffix: null,
      history: [
        { label: 'doe', text: '现代英语常用词「doe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：母鹿。' },
      ],
      formationLogic: '核心义：母鹿。',
      mnemonic: '看到 doe，先说出「母鹿」。',
      note: '核心义：母鹿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doe.', chinese: '这一章反复回到同一个点：母鹿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doe.s1', en: 'Without that doe, the next paragraph is hard to follow.', zh: '没有这个母鹿，下一段会很难读。', structure: 'doe / 表示 / 母鹿', grammar: 'noun，围绕「母鹿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doe.', right: 'He gave me some advice about the doe.', reason: 'advice 不可数。名词 doe 的单复数按词典词形记。', rule: '先确定 doe 是noun，再套「母鹿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doe.q1', senseId: 'doe.s1', errorType: 'meaning', type: '词义选择', prompt: '「doe」在本条的核心意思是：', options: ['母鹿', '完全相反的意思', '一种古代钱币'], answer: '母鹿', explain: 'doe：母鹿。' },
      { id: 'doe.q2', senseId: 'doe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doe?', options: ['母鹿', 'a kind of ancient coin', 'the past tense of be'], answer: '母鹿', explain: '对的是「母鹿」。' },
      { id: 'doe.q3', senseId: 'doe.s1', errorType: 'grammar', type: '词义选择', prompt: 'doe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doe.q4', senseId: 'doe.s1', errorType: 'meaning', type: '词源', prompt: '记 doe 时，哪句更稳妥？', options: ['先锁住「母鹿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「母鹿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['母鹿'] },
  });

  D('doff', {
    etymology: {
      origin: '现代英语常用词「doff」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doff', gloss: '脱（帽）致敬' },
      suffix: null,
      history: [
        { label: 'doff', text: '现代英语常用词「doff」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脱（帽）致敬。' },
      ],
      formationLogic: '核心义：脱（帽）致敬。',
      mnemonic: '看到 doff，先说出「脱（帽）致敬」。',
      note: '核心义：脱（帽）致敬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to doff before the office closed.', chinese: '他们同意在办公室关门前做这件事：脱（帽）致敬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doff.s1', en: 'The deadline forced the team to doff that afternoon.', zh: '截止日期逼着小组在那天下午脱（帽）致敬。', structure: 'doff / 表示 / 脱（帽）致敬', grammar: 'verb，围绕「脱（帽）致敬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She doffed it yesterday without checking the real past form.', right: 'Check the past form of "doff" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 doff 是verb，再套「脱（帽）致敬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doff.q1', senseId: 'doff.s1', errorType: 'meaning', type: '词义选择', prompt: '「doff」在本条的核心意思是：', options: ['脱（帽）致敬', '完全相反的意思', '一种古代钱币'], answer: '脱（帽）致敬', explain: 'doff：脱（帽）致敬。' },
      { id: 'doff.q2', senseId: 'doff.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doff?', options: ['脱（帽）致敬', 'a kind of ancient coin', 'the past tense of be'], answer: '脱（帽）致敬', explain: '对的是「脱（帽）致敬」。' },
      { id: 'doff.q3', senseId: 'doff.s1', errorType: 'grammar', type: '词义选择', prompt: 'doff 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'doff.q4', senseId: 'doff.s1', errorType: 'meaning', type: '词源', prompt: '记 doff 时，哪句更稳妥？', options: ['先锁住「脱（帽）致敬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脱（帽）致敬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脱（帽）致敬'] },
  });

  D('dog', {
    etymology: {
      origin: '古英语 docga。',
      prefix: null,
      root: { text: 'dog', gloss: '狗' },
      suffix: null,
      history: [
        { label: 'dog', text: '古英语 docga。' },
        { label: '现在', text: '核心用法是：狗。' },
      ],
      formationLogic: '考试认现在的用法：狗。',
      mnemonic: '看到 dog，先说出「狗」。',
      note: '考试认现在的用法：狗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dog.', chinese: '这一章反复回到同一个点：狗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dog.s1', en: 'Without that dog, the next paragraph is hard to follow.', zh: '没有这个狗，下一段会很难读。', structure: 'dog / 表示 / 狗', grammar: 'noun，围绕「狗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dog.', right: 'He gave me some advice about the dog.', reason: 'advice 不可数。名词 dog 的单复数按词典词形记。', rule: '先确定 dog 是noun，再套「狗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dog.q1', senseId: 'dog.s1', errorType: 'meaning', type: '词义选择', prompt: '「dog」在本条的核心意思是：', options: ['狗', '完全相反的意思', '一种古代钱币'], answer: '狗', explain: 'dog：狗。' },
      { id: 'dog.q2', senseId: 'dog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dog?', options: ['狗', 'a kind of ancient coin', 'the past tense of be'], answer: '狗', explain: '对的是「狗」。' },
      { id: 'dog.q3', senseId: 'dog.s1', errorType: 'grammar', type: '词义选择', prompt: 'dog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dog.q4', senseId: 'dog.s1', errorType: 'meaning', type: '词源', prompt: '记 dog 时，哪句更稳妥？', options: ['先锁住「狗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狗'] },
  });

  D('dogged', {
    etymology: {
      origin: '现代英语常用词「dogged」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dogged', gloss: '顽强的' },
      suffix: null,
      history: [
        { label: 'dogged', text: '现代英语常用词「dogged」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：顽强的。' },
      ],
      formationLogic: '核心义：顽强的。',
      mnemonic: '看到 dogged，先说出「顽强的」。',
      note: '核心义：顽强的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dogged.', chinese: '即使是初读者也能看出，这个结果是顽强的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dogged.s1', en: 'They wanted a dogged answer, not a long speech.', zh: '他们要一个顽强的的答复，不要长篇发言。', structure: 'dogged / 表示 / 顽强的', grammar: 'adjective，围绕「顽强的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dogged.', right: 'The news is dogged.', reason: 'news 作主语时动词用单数。', rule: '先确定 dogged 是adjective，再套「顽强的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dogged.q1', senseId: 'dogged.s1', errorType: 'meaning', type: '词义选择', prompt: '「dogged」在本条的核心意思是：', options: ['顽强的', '完全相反的意思', '一种古代钱币'], answer: '顽强的', explain: 'dogged：顽强的。' },
      { id: 'dogged.q2', senseId: 'dogged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dogged?', options: ['顽强的', 'a kind of ancient coin', 'the past tense of be'], answer: '顽强的', explain: '对的是「顽强的」。' },
      { id: 'dogged.q3', senseId: 'dogged.s1', errorType: 'grammar', type: '词义选择', prompt: 'dogged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dogged.q4', senseId: 'dogged.s1', errorType: 'meaning', type: '词源', prompt: '记 dogged 时，哪句更稳妥？', options: ['先锁住「顽强的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「顽强的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['顽强的'] },
  });

  D('dogma', {
    etymology: {
      origin: '现代英语常用词「dogma」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dogma', gloss: '教条' },
      suffix: null,
      history: [
        { label: 'dogma', text: '现代英语常用词「dogma」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：教条。' },
      ],
      formationLogic: '核心义：教条。',
      mnemonic: '看到 dogma，先说出「教条」。',
      note: '核心义：教条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dogma.', chinese: '这一章反复回到同一个点：教条。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dogma.s1', en: 'Without that dogma, the next paragraph is hard to follow.', zh: '没有这个教条，下一段会很难读。', structure: 'dogma / 表示 / 教条', grammar: 'noun，围绕「教条」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dogma.', right: 'He gave me some advice about the dogma.', reason: 'advice 不可数。名词 dogma 的单复数按词典词形记。', rule: '先确定 dogma 是noun，再套「教条」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dogma.q1', senseId: 'dogma.s1', errorType: 'meaning', type: '词义选择', prompt: '「dogma」在本条的核心意思是：', options: ['教条', '完全相反的意思', '一种古代钱币'], answer: '教条', explain: 'dogma：教条。' },
      { id: 'dogma.q2', senseId: 'dogma.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dogma?', options: ['教条', 'a kind of ancient coin', 'the past tense of be'], answer: '教条', explain: '对的是「教条」。' },
      { id: 'dogma.q3', senseId: 'dogma.s1', errorType: 'grammar', type: '词义选择', prompt: 'dogma 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dogma.q4', senseId: 'dogma.s1', errorType: 'meaning', type: '词源', prompt: '记 dogma 时，哪句更稳妥？', options: ['先锁住「教条」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教条」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教条'] },
  });

  D('dole', {
    etymology: {
      origin: '现代英语常用词「dole」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dole', gloss: '失业救济金' },
      suffix: null,
      history: [
        { label: 'dole', text: '现代英语常用词「dole」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：失业救济金。' },
      ],
      formationLogic: '核心义：失业救济金。',
      mnemonic: '看到 dole，先说出「失业救济金」。',
      note: '核心义：失业救济金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dole.', chinese: '这一章反复回到同一个点：失业救济金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dole.s1', en: 'Without that dole, the next paragraph is hard to follow.', zh: '没有这个失业救济金，下一段会很难读。', structure: 'dole / 表示 / 失业救济金', grammar: 'noun，围绕「失业救济金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dole.', right: 'He gave me some advice about the dole.', reason: 'advice 不可数。名词 dole 的单复数按词典词形记。', rule: '先确定 dole 是noun，再套「失业救济金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dole.q1', senseId: 'dole.s1', errorType: 'meaning', type: '词义选择', prompt: '「dole」在本条的核心意思是：', options: ['失业救济金', '完全相反的意思', '一种古代钱币'], answer: '失业救济金', explain: 'dole：失业救济金。' },
      { id: 'dole.q2', senseId: 'dole.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dole?', options: ['失业救济金', 'a kind of ancient coin', 'the past tense of be'], answer: '失业救济金', explain: '对的是「失业救济金」。' },
      { id: 'dole.q3', senseId: 'dole.s1', errorType: 'grammar', type: '词义选择', prompt: 'dole 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dole.q4', senseId: 'dole.s1', errorType: 'meaning', type: '词源', prompt: '记 dole 时，哪句更稳妥？', options: ['先锁住「失业救济金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「失业救济金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['失业救济金'] },
  });

  D('doll', {
    etymology: {
      origin: '现代英语常用词「doll」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doll', gloss: '洋娃娃' },
      suffix: null,
      history: [
        { label: 'doll', text: '现代英语常用词「doll」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：洋娃娃。' },
      ],
      formationLogic: '核心义：洋娃娃。',
      mnemonic: '看到 doll，先说出「洋娃娃」。',
      note: '核心义：洋娃娃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doll.', chinese: '这一章反复回到同一个点：洋娃娃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doll.s1', en: 'Without that doll, the next paragraph is hard to follow.', zh: '没有这个洋娃娃，下一段会很难读。', structure: 'doll / 表示 / 洋娃娃', grammar: 'noun，围绕「洋娃娃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doll.', right: 'He gave me some advice about the doll.', reason: 'advice 不可数。名词 doll 的单复数按词典词形记。', rule: '先确定 doll 是noun，再套「洋娃娃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doll.q1', senseId: 'doll.s1', errorType: 'meaning', type: '词义选择', prompt: '「doll」在本条的核心意思是：', options: ['洋娃娃', '完全相反的意思', '一种古代钱币'], answer: '洋娃娃', explain: 'doll：洋娃娃。' },
      { id: 'doll.q2', senseId: 'doll.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doll?', options: ['洋娃娃', 'a kind of ancient coin', 'the past tense of be'], answer: '洋娃娃', explain: '对的是「洋娃娃」。' },
      { id: 'doll.q3', senseId: 'doll.s1', errorType: 'grammar', type: '词义选择', prompt: 'doll 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doll.q4', senseId: 'doll.s1', errorType: 'meaning', type: '词源', prompt: '记 doll 时，哪句更稳妥？', options: ['先锁住「洋娃娃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洋娃娃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洋娃娃'] },
  });

  D('dollar', {
    etymology: {
      origin: '德语 Taler，来自约阿希姆斯塔尔的银币。',
      prefix: null,
      root: { text: 'dollar', gloss: '美元' },
      suffix: null,
      history: [
        { label: 'dollar', text: '德语 Taler，来自约阿希姆斯塔尔的银币。' },
        { label: '现在', text: '核心用法是：美元。' },
      ],
      formationLogic: '考试认现在的用法：美元。',
      mnemonic: '看到 dollar，先说出「美元」。',
      note: '考试认现在的用法：美元。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dollar.', chinese: '这一章反复回到同一个点：美元。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dollar.s1', en: 'Without that dollar, the next paragraph is hard to follow.', zh: '没有这个美元，下一段会很难读。', structure: 'dollar / 表示 / 美元', grammar: 'noun，围绕「美元」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dollar.', right: 'He gave me some advice about the dollar.', reason: 'advice 不可数。名词 dollar 的单复数按词典词形记。', rule: '先确定 dollar 是noun，再套「美元」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dollar.q1', senseId: 'dollar.s1', errorType: 'meaning', type: '词义选择', prompt: '「dollar」在本条的核心意思是：', options: ['美元', '完全相反的意思', '一种古代钱币'], answer: '美元', explain: 'dollar：美元。' },
      { id: 'dollar.q2', senseId: 'dollar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dollar?', options: ['美元', 'a kind of ancient coin', 'the past tense of be'], answer: '美元', explain: '对的是「美元」。' },
      { id: 'dollar.q3', senseId: 'dollar.s1', errorType: 'grammar', type: '词义选择', prompt: 'dollar 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dollar.q4', senseId: 'dollar.s1', errorType: 'meaning', type: '词源', prompt: '记 dollar 时，哪句更稳妥？', options: ['先锁住「美元」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「美元」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['美元'] },
  });

  D('dolphin', {
    etymology: {
      origin: '现代英语常用词「dolphin」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dolphin', gloss: '海豚' },
      suffix: null,
      history: [
        { label: 'dolphin', text: '现代英语常用词「dolphin」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：海豚。' },
      ],
      formationLogic: '核心义：海豚。',
      mnemonic: '看到 dolphin，先说出「海豚」。',
      note: '核心义：海豚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dolphin.', chinese: '这一章反复回到同一个点：海豚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dolphin.s1', en: 'Without that dolphin, the next paragraph is hard to follow.', zh: '没有这个海豚，下一段会很难读。', structure: 'dolphin / 表示 / 海豚', grammar: 'noun，围绕「海豚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dolphin.', right: 'He gave me some advice about the dolphin.', reason: 'advice 不可数。名词 dolphin 的单复数按词典词形记。', rule: '先确定 dolphin 是noun，再套「海豚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dolphin.q1', senseId: 'dolphin.s1', errorType: 'meaning', type: '词义选择', prompt: '「dolphin」在本条的核心意思是：', options: ['海豚', '完全相反的意思', '一种古代钱币'], answer: '海豚', explain: 'dolphin：海豚。' },
      { id: 'dolphin.q2', senseId: 'dolphin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dolphin?', options: ['海豚', 'a kind of ancient coin', 'the past tense of be'], answer: '海豚', explain: '对的是「海豚」。' },
      { id: 'dolphin.q3', senseId: 'dolphin.s1', errorType: 'grammar', type: '词义选择', prompt: 'dolphin 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dolphin.q4', senseId: 'dolphin.s1', errorType: 'meaning', type: '词源', prompt: '记 dolphin 时，哪句更稳妥？', options: ['先锁住「海豚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「海豚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['海豚'] },
  });

  D('domain', {
    etymology: {
      origin: '现代英语常用词「domain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'domain', gloss: '领域' },
      suffix: null,
      history: [
        { label: 'domain', text: '现代英语常用词「domain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：领域。' },
      ],
      formationLogic: '核心义：领域。',
      mnemonic: '看到 domain，先说出「领域」。',
      note: '核心义：领域。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one domain.', chinese: '这一章反复回到同一个点：领域。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'domain.s1', en: 'Without that domain, the next paragraph is hard to follow.', zh: '没有这个领域，下一段会很难读。', structure: 'domain / 表示 / 领域', grammar: 'noun，围绕「领域」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the domain.', right: 'He gave me some advice about the domain.', reason: 'advice 不可数。名词 domain 的单复数按词典词形记。', rule: '先确定 domain 是noun，再套「领域」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'domain.q1', senseId: 'domain.s1', errorType: 'meaning', type: '词义选择', prompt: '「domain」在本条的核心意思是：', options: ['领域', '完全相反的意思', '一种古代钱币'], answer: '领域', explain: 'domain：领域。' },
      { id: 'domain.q2', senseId: 'domain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches domain?', options: ['领域', 'a kind of ancient coin', 'the past tense of be'], answer: '领域', explain: '对的是「领域」。' },
      { id: 'domain.q3', senseId: 'domain.s1', errorType: 'grammar', type: '词义选择', prompt: 'domain 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'domain.q4', senseId: 'domain.s1', errorType: 'meaning', type: '词源', prompt: '记 domain 时，哪句更稳妥？', options: ['先锁住「领域」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「领域」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['领域'] },
  });

  D('dome', {
    etymology: {
      origin: '现代英语常用词「dome」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dome', gloss: '穹顶' },
      suffix: null,
      history: [
        { label: 'dome', text: '现代英语常用词「dome」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：穹顶。' },
      ],
      formationLogic: '核心义：穹顶。',
      mnemonic: '看到 dome，先说出「穹顶」。',
      note: '核心义：穹顶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dome.', chinese: '这一章反复回到同一个点：穹顶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dome.s1', en: 'Without that dome, the next paragraph is hard to follow.', zh: '没有这个穹顶，下一段会很难读。', structure: 'dome / 表示 / 穹顶', grammar: 'noun，围绕「穹顶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dome.', right: 'He gave me some advice about the dome.', reason: 'advice 不可数。名词 dome 的单复数按词典词形记。', rule: '先确定 dome 是noun，再套「穹顶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dome.q1', senseId: 'dome.s1', errorType: 'meaning', type: '词义选择', prompt: '「dome」在本条的核心意思是：', options: ['穹顶', '完全相反的意思', '一种古代钱币'], answer: '穹顶', explain: 'dome：穹顶。' },
      { id: 'dome.q2', senseId: 'dome.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dome?', options: ['穹顶', 'a kind of ancient coin', 'the past tense of be'], answer: '穹顶', explain: '对的是「穹顶」。' },
      { id: 'dome.q3', senseId: 'dome.s1', errorType: 'grammar', type: '词义选择', prompt: 'dome 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dome.q4', senseId: 'dome.s1', errorType: 'meaning', type: '词源', prompt: '记 dome 时，哪句更稳妥？', options: ['先锁住「穹顶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「穹顶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['穹顶'] },
  });

  D('domestic', {
    etymology: {
      origin: '拉丁语 domesticus，domus「家」。',
      prefix: null,
      root: { text: 'domestic', gloss: '国内的' },
      suffix: null,
      history: [
        { label: 'domestic', text: '拉丁语 domesticus，domus「家」。' },
        { label: '现在', text: '核心用法是：国内的。' },
      ],
      formationLogic: '考试认现在的用法：国内的。',
      mnemonic: '看到 domestic，先说出「国内的」。',
      note: '考试认现在的用法：国内的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was domestic.', chinese: '即使是初读者也能看出，这个结果是国内的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'domestic.s1', en: 'They wanted a domestic answer, not a long speech.', zh: '他们要一个国内的的答复，不要长篇发言。', structure: 'domestic / 表示 / 国内的', grammar: 'adjective，围绕「国内的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are domestic.', right: 'The news is domestic.', reason: 'news 作主语时动词用单数。', rule: '先确定 domestic 是adjective，再套「国内的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'domestic.q1', senseId: 'domestic.s1', errorType: 'meaning', type: '词义选择', prompt: '「domestic」在本条的核心意思是：', options: ['国内的', '完全相反的意思', '一种古代钱币'], answer: '国内的', explain: 'domestic：国内的。' },
      { id: 'domestic.q2', senseId: 'domestic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches domestic?', options: ['国内的', 'a kind of ancient coin', 'the past tense of be'], answer: '国内的', explain: '对的是「国内的」。' },
      { id: 'domestic.q3', senseId: 'domestic.s1', errorType: 'grammar', type: '词义选择', prompt: 'domestic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'domestic.q4', senseId: 'domestic.s1', errorType: 'meaning', type: '词源', prompt: '记 domestic 时，哪句更稳妥？', options: ['先锁住「国内的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「国内的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['国内的'] },
  });

  D('domestic work', {
    etymology: {
      origin: '现代英语固定说法「domestic work」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'domestic work', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'domestic work', text: '现代英语固定说法「domestic work」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：家务。' },
      ],
      formationLogic: '核心义：家务。',
      mnemonic: '看到 domestic work，先说出「家务」。',
      note: '核心义：家务。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "domestic work" and asked the class to keep it as one unit.', chinese: '老师把「domestic work」圈出来，让全班把它当成一个整体。它表示家务。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'domestic work.s1', en: 'In the margin she wrote "domestic work" so nobody would split the phrase.', zh: '她在页边写下「domestic work」，免得有人把这个说法拆开。意思是家务。', structure: 'domestic work / 表示 / 家务', grammar: 'noun，围绕「家务」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of domestic work and lost the point.', right: 'Keep "domestic work" together: it means 家务.', reason: '「domestic work」要整块理解。', rule: '先确定 domestic work 是noun，再套「家务」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'domestic work.q1', senseId: 'domestic work.s1', errorType: 'meaning', type: '词义选择', prompt: '「domestic work」在本条的核心意思是：', options: ['家务', '完全相反的意思', '一种古代钱币'], answer: '家务', explain: 'domestic work：家务。' },
      { id: 'domestic work.q2', senseId: 'domestic work.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches domestic work?', options: ['家务', 'a kind of ancient coin', 'the past tense of be'], answer: '家务', explain: '对的是「家务」。' },
      { id: 'domestic work.q3', senseId: 'domestic work.s1', errorType: 'grammar', type: '词义选择', prompt: 'domestic work 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'domestic work.q4', senseId: 'domestic work.s1', errorType: 'meaning', type: '词源', prompt: '记 domestic work 时，哪句更稳妥？', options: ['先锁住「家务」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家务」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家务'] },
  });

  D('domesticated', {
    etymology: {
      origin: '现代英语常用词「domesticated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'domesticated', gloss: '驯化的' },
      suffix: null,
      history: [
        { label: 'domesticated', text: '现代英语常用词「domesticated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：驯化的。' },
      ],
      formationLogic: '核心义：驯化的。',
      mnemonic: '看到 domesticated，先说出「驯化的」。',
      note: '核心义：驯化的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was domesticated.', chinese: '即使是初读者也能看出，这个结果是驯化的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'domesticated.s1', en: 'They wanted a domesticated answer, not a long speech.', zh: '他们要一个驯化的的答复，不要长篇发言。', structure: 'domesticated / 表示 / 驯化的', grammar: 'adjective，围绕「驯化的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are domesticated.', right: 'The news is domesticated.', reason: 'news 作主语时动词用单数。', rule: '先确定 domesticated 是adjective，再套「驯化的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'domesticated.q1', senseId: 'domesticated.s1', errorType: 'meaning', type: '词义选择', prompt: '「domesticated」在本条的核心意思是：', options: ['驯化的', '完全相反的意思', '一种古代钱币'], answer: '驯化的', explain: 'domesticated：驯化的。' },
      { id: 'domesticated.q2', senseId: 'domesticated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches domesticated?', options: ['驯化的', 'a kind of ancient coin', 'the past tense of be'], answer: '驯化的', explain: '对的是「驯化的」。' },
      { id: 'domesticated.q3', senseId: 'domesticated.s1', errorType: 'grammar', type: '词义选择', prompt: 'domesticated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'domesticated.q4', senseId: 'domesticated.s1', errorType: 'meaning', type: '词源', prompt: '记 domesticated 时，哪句更稳妥？', options: ['先锁住「驯化的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驯化的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驯化的'] },
  });

  D('dominance', {
    etymology: {
      origin: '英语派生：domin + -ance，词性转到「支配地位」。',
      prefix: null,
      root: { text: 'domin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dominance', text: '英语派生：domin + -ance，词性转到「支配地位」。' },
        { label: '现在', text: '核心用法是：支配地位。' },
      ],
      formationLogic: '先认词干 domin，再看词尾。',
      mnemonic: '看到 dominance，先说出「支配地位」。',
      note: '先认词干 domin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dominance.', chinese: '这一章反复回到同一个点：支配地位。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dominance.s1', en: 'Without that dominance, the next paragraph is hard to follow.', zh: '没有这个支配地位，下一段会很难读。', structure: 'dominance / 表示 / 支配地位', grammar: 'noun，围绕「支配地位」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dominance.', right: 'He gave me some advice about the dominance.', reason: 'advice 不可数。名词 dominance 的单复数按词典词形记。', rule: '先确定 dominance 是noun，再套「支配地位」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dominance.q1', senseId: 'dominance.s1', errorType: 'meaning', type: '词义选择', prompt: '「dominance」在本条的核心意思是：', options: ['支配地位', '完全相反的意思', '一种古代钱币'], answer: '支配地位', explain: 'dominance：支配地位。' },
      { id: 'dominance.q2', senseId: 'dominance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dominance?', options: ['支配地位', 'a kind of ancient coin', 'the past tense of be'], answer: '支配地位', explain: '对的是「支配地位」。' },
      { id: 'dominance.q3', senseId: 'dominance.s1', errorType: 'grammar', type: '词义选择', prompt: 'dominance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dominance.q4', senseId: 'dominance.s1', errorType: 'meaning', type: '词源', prompt: '记 dominance 时，哪句更稳妥？', options: ['先锁住「支配地位」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「支配地位」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['支配地位'] },
  });

  D('dominate', {
    etymology: {
      origin: '现代英语常用词「dominate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dominate', gloss: '支配' },
      suffix: null,
      history: [
        { label: 'dominate', text: '现代英语常用词「dominate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：支配。' },
      ],
      formationLogic: '核心义：支配。',
      mnemonic: '看到 dominate，先说出「支配」。',
      note: '核心义：支配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dominate before the office closed.', chinese: '他们同意在办公室关门前做这件事：支配。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dominate.s1', en: 'The deadline forced the team to dominate that afternoon.', zh: '截止日期逼着小组在那天下午支配。', structure: 'dominate / 表示 / 支配', grammar: 'verb，围绕「支配」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dominateed it yesterday without checking the real past form.', right: 'Check the past form of "dominate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dominate 是verb，再套「支配」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dominate.q1', senseId: 'dominate.s1', errorType: 'meaning', type: '词义选择', prompt: '「dominate」在本条的核心意思是：', options: ['支配', '完全相反的意思', '一种古代钱币'], answer: '支配', explain: 'dominate：支配。' },
      { id: 'dominate.q2', senseId: 'dominate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dominate?', options: ['支配', 'a kind of ancient coin', 'the past tense of be'], answer: '支配', explain: '对的是「支配」。' },
      { id: 'dominate.q3', senseId: 'dominate.s1', errorType: 'grammar', type: '词义选择', prompt: 'dominate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dominate.q4', senseId: 'dominate.s1', errorType: 'meaning', type: '词源', prompt: '记 dominate 时，哪句更稳妥？', options: ['先锁住「支配」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「支配」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['支配'] },
  });

  D('dominion', {
    etymology: {
      origin: '现代英语常用词「dominion」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dominion', gloss: '统治权' },
      suffix: null,
      history: [
        { label: 'dominion', text: '现代英语常用词「dominion」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：统治权。' },
      ],
      formationLogic: '核心义：统治权。',
      mnemonic: '看到 dominion，先说出「统治权」。',
      note: '核心义：统治权。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dominion.', chinese: '这一章反复回到同一个点：统治权。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dominion.s1', en: 'Without that dominion, the next paragraph is hard to follow.', zh: '没有这个统治权，下一段会很难读。', structure: 'dominion / 表示 / 统治权', grammar: 'noun，围绕「统治权」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dominion.', right: 'He gave me some advice about the dominion.', reason: 'advice 不可数。名词 dominion 的单复数按词典词形记。', rule: '先确定 dominion 是noun，再套「统治权」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dominion.q1', senseId: 'dominion.s1', errorType: 'meaning', type: '词义选择', prompt: '「dominion」在本条的核心意思是：', options: ['统治权', '完全相反的意思', '一种古代钱币'], answer: '统治权', explain: 'dominion：统治权。' },
      { id: 'dominion.q2', senseId: 'dominion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dominion?', options: ['统治权', 'a kind of ancient coin', 'the past tense of be'], answer: '统治权', explain: '对的是「统治权」。' },
      { id: 'dominion.q3', senseId: 'dominion.s1', errorType: 'grammar', type: '词义选择', prompt: 'dominion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dominion.q4', senseId: 'dominion.s1', errorType: 'meaning', type: '词源', prompt: '记 dominion 时，哪句更稳妥？', options: ['先锁住「统治权」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「统治权」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['统治权'] },
  });

  D('don', {
    etymology: {
      origin: '现代英语常用词「don」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'don', gloss: '（英国大学的）导师' },
      suffix: null,
      history: [
        { label: 'don', text: '现代英语常用词「don」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（英国大学的）导师。' },
      ],
      formationLogic: '核心义：（英国大学的）导师。',
      mnemonic: '看到 don，先说出「（英国大学的）导师」。',
      note: '核心义：（英国大学的）导师。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one don.', chinese: '这一章反复回到同一个点：（英国大学的）导师。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'don.s1', en: 'Without that don, the next paragraph is hard to follow.', zh: '没有这个（英国大学的）导师，下一段会很难读。', structure: 'don / 表示 / （英国大学的）导师', grammar: 'noun，围绕「（英国大学的）导师」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the don.', right: 'He gave me some advice about the don.', reason: 'advice 不可数。名词 don 的单复数按词典词形记。', rule: '先确定 don 是noun，再套「（英国大学的）导师」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'don.q1', senseId: 'don.s1', errorType: 'meaning', type: '词义选择', prompt: '「don」在本条的核心意思是：', options: ['（英国大学的）导师', '完全相反的意思', '一种古代钱币'], answer: '（英国大学的）导师', explain: 'don：（英国大学的）导师。' },
      { id: 'don.q2', senseId: 'don.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches don?', options: ['（英国大学的）导师', 'a kind of ancient coin', 'the past tense of be'], answer: '（英国大学的）导师', explain: '对的是「（英国大学的）导师」。' },
      { id: 'don.q3', senseId: 'don.s1', errorType: 'grammar', type: '词义选择', prompt: 'don 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'don.q4', senseId: 'don.s1', errorType: 'meaning', type: '词源', prompt: '记 don 时，哪句更稳妥？', options: ['先锁住「（英国大学的）导师」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（英国大学的）导师」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（英国大学的）导师'] },
  });

  D('donate', {
    etymology: {
      origin: '拉丁语 donare「给予」，donum「礼物」。',
      prefix: null,
      root: { text: 'donate', gloss: '捐赠' },
      suffix: null,
      history: [
        { label: 'donate', text: '拉丁语 donare「给予」，donum「礼物」。' },
        { label: '现在', text: '核心用法是：捐赠。' },
      ],
      formationLogic: '考试认现在的用法：捐赠。',
      mnemonic: '看到 donate，先说出「捐赠」。',
      note: '考试认现在的用法：捐赠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to donate before the office closed.', chinese: '他们同意在办公室关门前做这件事：捐赠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'donate.s1', en: 'The deadline forced the team to donate that afternoon.', zh: '截止日期逼着小组在那天下午捐赠。', structure: 'donate / 表示 / 捐赠', grammar: 'verb，围绕「捐赠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She donateed it yesterday without checking the real past form.', right: 'Check the past form of "donate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 donate 是verb，再套「捐赠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'donate.q1', senseId: 'donate.s1', errorType: 'meaning', type: '词义选择', prompt: '「donate」在本条的核心意思是：', options: ['捐赠', '完全相反的意思', '一种古代钱币'], answer: '捐赠', explain: 'donate：捐赠。' },
      { id: 'donate.q2', senseId: 'donate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches donate?', options: ['捐赠', 'a kind of ancient coin', 'the past tense of be'], answer: '捐赠', explain: '对的是「捐赠」。' },
      { id: 'donate.q3', senseId: 'donate.s1', errorType: 'grammar', type: '词义选择', prompt: 'donate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'donate.q4', senseId: 'donate.s1', errorType: 'meaning', type: '词源', prompt: '记 donate 时，哪句更稳妥？', options: ['先锁住「捐赠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「捐赠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['捐赠'] },
  });

  D('donation', {
    etymology: {
      origin: '英语派生：dona + -tion，词性转到「捐赠」。',
      prefix: null,
      root: { text: 'dona', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'donation', text: '英语派生：dona + -tion，词性转到「捐赠」。' },
        { label: '现在', text: '核心用法是：捐赠。' },
      ],
      formationLogic: '先认词干 dona，再看词尾。',
      mnemonic: '看到 donation，先说出「捐赠」。',
      note: '先认词干 dona，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one donation.', chinese: '这一章反复回到同一个点：捐赠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'donation.s1', en: 'Without that donation, the next paragraph is hard to follow.', zh: '没有这个捐赠，下一段会很难读。', structure: 'donation / 表示 / 捐赠', grammar: 'noun，围绕「捐赠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the donation.', right: 'He gave me some advice about the donation.', reason: 'advice 不可数。名词 donation 的单复数按词典词形记。', rule: '先确定 donation 是noun，再套「捐赠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'donation.q1', senseId: 'donation.s1', errorType: 'meaning', type: '词义选择', prompt: '「donation」在本条的核心意思是：', options: ['捐赠', '完全相反的意思', '一种古代钱币'], answer: '捐赠', explain: 'donation：捐赠。' },
      { id: 'donation.q2', senseId: 'donation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches donation?', options: ['捐赠', 'a kind of ancient coin', 'the past tense of be'], answer: '捐赠', explain: '对的是「捐赠」。' },
      { id: 'donation.q3', senseId: 'donation.s1', errorType: 'grammar', type: '词义选择', prompt: 'donation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'donation.q4', senseId: 'donation.s1', errorType: 'meaning', type: '词源', prompt: '记 donation 时，哪句更稳妥？', options: ['先锁住「捐赠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「捐赠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['捐赠'] },
  });

  D('done', {
    etymology: {
      origin: '现代英语常用词「done」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'done', gloss: '完成的' },
      suffix: null,
      history: [
        { label: 'done', text: '现代英语常用词「done」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：完成的。' },
      ],
      formationLogic: '核心义：完成的。',
      mnemonic: '看到 done，先说出「完成的」。',
      note: '核心义：完成的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was done.', chinese: '即使是初读者也能看出，这个结果是完成的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'done.s1', en: 'They wanted a done answer, not a long speech.', zh: '他们要一个完成的的答复，不要长篇发言。', structure: 'done / 表示 / 完成的', grammar: 'adjective，围绕「完成的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are done.', right: 'The news is done.', reason: 'news 作主语时动词用单数。', rule: '先确定 done 是adjective，再套「完成的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'done.q1', senseId: 'done.s1', errorType: 'meaning', type: '词义选择', prompt: '「done」在本条的核心意思是：', options: ['完成的', '完全相反的意思', '一种古代钱币'], answer: '完成的', explain: 'done：完成的。' },
      { id: 'done.q2', senseId: 'done.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches done?', options: ['完成的', 'a kind of ancient coin', 'the past tense of be'], answer: '完成的', explain: '对的是「完成的」。' },
      { id: 'done.q3', senseId: 'done.s1', errorType: 'grammar', type: '词义选择', prompt: 'done 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'done.q4', senseId: 'done.s1', errorType: 'meaning', type: '词源', prompt: '记 done 时，哪句更稳妥？', options: ['先锁住「完成的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完成的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完成的'] },
  });

  D('donkey', {
    etymology: {
      origin: '英语词，可能来自 Duncan 的昵称。',
      prefix: null,
      root: { text: 'donkey', gloss: '驴' },
      suffix: null,
      history: [
        { label: 'donkey', text: '英语词，可能来自 Duncan 的昵称。' },
        { label: '现在', text: '核心用法是：驴。' },
      ],
      formationLogic: '考试认现在的用法：驴。',
      mnemonic: '看到 donkey，先说出「驴」。',
      note: '考试认现在的用法：驴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one donkey.', chinese: '这一章反复回到同一个点：驴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'donkey.s1', en: 'Without that donkey, the next paragraph is hard to follow.', zh: '没有这个驴，下一段会很难读。', structure: 'donkey / 表示 / 驴', grammar: 'noun，围绕「驴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the donkey.', right: 'He gave me some advice about the donkey.', reason: 'advice 不可数。名词 donkey 的单复数按词典词形记。', rule: '先确定 donkey 是noun，再套「驴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'donkey.q1', senseId: 'donkey.s1', errorType: 'meaning', type: '词义选择', prompt: '「donkey」在本条的核心意思是：', options: ['驴', '完全相反的意思', '一种古代钱币'], answer: '驴', explain: 'donkey：驴。' },
      { id: 'donkey.q2', senseId: 'donkey.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches donkey?', options: ['驴', 'a kind of ancient coin', 'the past tense of be'], answer: '驴', explain: '对的是「驴」。' },
      { id: 'donkey.q3', senseId: 'donkey.s1', errorType: 'grammar', type: '词义选择', prompt: 'donkey 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'donkey.q4', senseId: 'donkey.s1', errorType: 'meaning', type: '词源', prompt: '记 donkey 时，哪句更稳妥？', options: ['先锁住「驴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驴'] },
  });

  D('doom', {
    etymology: {
      origin: '现代英语常用词「doom」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doom', gloss: '厄运' },
      suffix: null,
      history: [
        { label: 'doom', text: '现代英语常用词「doom」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：厄运。' },
      ],
      formationLogic: '核心义：厄运。',
      mnemonic: '看到 doom，先说出「厄运」。',
      note: '核心义：厄运。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doom.', chinese: '这一章反复回到同一个点：厄运。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doom.s1', en: 'Without that doom, the next paragraph is hard to follow.', zh: '没有这个厄运，下一段会很难读。', structure: 'doom / 表示 / 厄运', grammar: 'noun，围绕「厄运」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doom.', right: 'He gave me some advice about the doom.', reason: 'advice 不可数。名词 doom 的单复数按词典词形记。', rule: '先确定 doom 是noun，再套「厄运」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doom.q1', senseId: 'doom.s1', errorType: 'meaning', type: '词义选择', prompt: '「doom」在本条的核心意思是：', options: ['厄运', '完全相反的意思', '一种古代钱币'], answer: '厄运', explain: 'doom：厄运。' },
      { id: 'doom.q2', senseId: 'doom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doom?', options: ['厄运', 'a kind of ancient coin', 'the past tense of be'], answer: '厄运', explain: '对的是「厄运」。' },
      { id: 'doom.q3', senseId: 'doom.s1', errorType: 'grammar', type: '词义选择', prompt: 'doom 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doom.q4', senseId: 'doom.s1', errorType: 'meaning', type: '词源', prompt: '记 doom 时，哪句更稳妥？', options: ['先锁住「厄运」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厄运」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厄运'] },
  });

  D('door', {
    etymology: {
      origin: '古英语 duru。',
      prefix: null,
      root: { text: 'door', gloss: '门' },
      suffix: null,
      history: [
        { label: 'door', text: '古英语 duru。' },
        { label: '现在', text: '核心用法是：门。' },
      ],
      formationLogic: '考试认现在的用法：门。',
      mnemonic: '看到 door，先说出「门」。',
      note: '考试认现在的用法：门。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one door.', chinese: '这一章反复回到同一个点：门。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'door.s1', en: 'Without that door, the next paragraph is hard to follow.', zh: '没有这个门，下一段会很难读。', structure: 'door / 表示 / 门', grammar: 'noun，围绕「门」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the door.', right: 'He gave me some advice about the door.', reason: 'advice 不可数。名词 door 的单复数按词典词形记。', rule: '先确定 door 是noun，再套「门」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'door.q1', senseId: 'door.s1', errorType: 'meaning', type: '词义选择', prompt: '「door」在本条的核心意思是：', options: ['门', '完全相反的意思', '一种古代钱币'], answer: '门', explain: 'door：门。' },
      { id: 'door.q2', senseId: 'door.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches door?', options: ['门', 'a kind of ancient coin', 'the past tense of be'], answer: '门', explain: '对的是「门」。' },
      { id: 'door.q3', senseId: 'door.s1', errorType: 'grammar', type: '词义选择', prompt: 'door 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'door.q4', senseId: 'door.s1', errorType: 'meaning', type: '词源', prompt: '记 door 时，哪句更稳妥？', options: ['先锁住「门」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「门」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['门'] },
  });

  D('doorstep', {
    etymology: {
      origin: '现代英语常用词「doorstep」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doorstep', gloss: '门槛' },
      suffix: null,
      history: [
        { label: 'doorstep', text: '现代英语常用词「doorstep」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：门槛。' },
      ],
      formationLogic: '核心义：门槛。',
      mnemonic: '看到 doorstep，先说出「门槛」。',
      note: '核心义：门槛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doorstep.', chinese: '这一章反复回到同一个点：门槛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doorstep.s1', en: 'Without that doorstep, the next paragraph is hard to follow.', zh: '没有这个门槛，下一段会很难读。', structure: 'doorstep / 表示 / 门槛', grammar: 'noun，围绕「门槛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doorstep.', right: 'He gave me some advice about the doorstep.', reason: 'advice 不可数。名词 doorstep 的单复数按词典词形记。', rule: '先确定 doorstep 是noun，再套「门槛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doorstep.q1', senseId: 'doorstep.s1', errorType: 'meaning', type: '词义选择', prompt: '「doorstep」在本条的核心意思是：', options: ['门槛', '完全相反的意思', '一种古代钱币'], answer: '门槛', explain: 'doorstep：门槛。' },
      { id: 'doorstep.q2', senseId: 'doorstep.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doorstep?', options: ['门槛', 'a kind of ancient coin', 'the past tense of be'], answer: '门槛', explain: '对的是「门槛」。' },
      { id: 'doorstep.q3', senseId: 'doorstep.s1', errorType: 'grammar', type: '词义选择', prompt: 'doorstep 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doorstep.q4', senseId: 'doorstep.s1', errorType: 'meaning', type: '词源', prompt: '记 doorstep 时，哪句更稳妥？', options: ['先锁住「门槛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「门槛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['门槛'] },
  });

  D('doorway', {
    etymology: {
      origin: '现代英语常用词「doorway」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doorway', gloss: '门口' },
      suffix: null,
      history: [
        { label: 'doorway', text: '现代英语常用词「doorway」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：门口。' },
      ],
      formationLogic: '核心义：门口。',
      mnemonic: '看到 doorway，先说出「门口」。',
      note: '核心义：门口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doorway.', chinese: '这一章反复回到同一个点：门口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doorway.s1', en: 'Without that doorway, the next paragraph is hard to follow.', zh: '没有这个门口，下一段会很难读。', structure: 'doorway / 表示 / 门口', grammar: 'noun，围绕「门口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doorway.', right: 'He gave me some advice about the doorway.', reason: 'advice 不可数。名词 doorway 的单复数按词典词形记。', rule: '先确定 doorway 是noun，再套「门口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doorway.q1', senseId: 'doorway.s1', errorType: 'meaning', type: '词义选择', prompt: '「doorway」在本条的核心意思是：', options: ['门口', '完全相反的意思', '一种古代钱币'], answer: '门口', explain: 'doorway：门口。' },
      { id: 'doorway.q2', senseId: 'doorway.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doorway?', options: ['门口', 'a kind of ancient coin', 'the past tense of be'], answer: '门口', explain: '对的是「门口」。' },
      { id: 'doorway.q3', senseId: 'doorway.s1', errorType: 'grammar', type: '词义选择', prompt: 'doorway 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doorway.q4', senseId: 'doorway.s1', errorType: 'meaning', type: '词源', prompt: '记 doorway 时，哪句更稳妥？', options: ['先锁住「门口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「门口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['门口'] },
  });

  D('dormant', {
    etymology: {
      origin: '现代英语常用词「dormant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dormant', gloss: '休眠的' },
      suffix: null,
      history: [
        { label: 'dormant', text: '现代英语常用词「dormant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：休眠的。' },
      ],
      formationLogic: '核心义：休眠的。',
      mnemonic: '看到 dormant，先说出「休眠的」。',
      note: '核心义：休眠的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dormant.', chinese: '即使是初读者也能看出，这个结果是休眠的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dormant.s1', en: 'They wanted a dormant answer, not a long speech.', zh: '他们要一个休眠的的答复，不要长篇发言。', structure: 'dormant / 表示 / 休眠的', grammar: 'adjective，围绕「休眠的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dormant.', right: 'The news is dormant.', reason: 'news 作主语时动词用单数。', rule: '先确定 dormant 是adjective，再套「休眠的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dormant.q1', senseId: 'dormant.s1', errorType: 'meaning', type: '词义选择', prompt: '「dormant」在本条的核心意思是：', options: ['休眠的', '完全相反的意思', '一种古代钱币'], answer: '休眠的', explain: 'dormant：休眠的。' },
      { id: 'dormant.q2', senseId: 'dormant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dormant?', options: ['休眠的', 'a kind of ancient coin', 'the past tense of be'], answer: '休眠的', explain: '对的是「休眠的」。' },
      { id: 'dormant.q3', senseId: 'dormant.s1', errorType: 'grammar', type: '词义选择', prompt: 'dormant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dormant.q4', senseId: 'dormant.s1', errorType: 'meaning', type: '词源', prompt: '记 dormant 时，哪句更稳妥？', options: ['先锁住「休眠的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「休眠的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['休眠的'] },
  });

  D('dormitory', {
    etymology: {
      origin: '拉丁语 dormitorium，dormire「睡觉」。',
      prefix: null,
      root: { text: 'dormitory', gloss: '宿舍' },
      suffix: null,
      history: [
        { label: 'dormitory', text: '拉丁语 dormitorium，dormire「睡觉」。' },
        { label: '现在', text: '核心用法是：宿舍。' },
      ],
      formationLogic: '考试认现在的用法：宿舍。',
      mnemonic: '看到 dormitory，先说出「宿舍」。',
      note: '考试认现在的用法：宿舍。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dormitory.', chinese: '这一章反复回到同一个点：宿舍。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dormitory.s1', en: 'Without that dormitory, the next paragraph is hard to follow.', zh: '没有这个宿舍，下一段会很难读。', structure: 'dormitory / 表示 / 宿舍', grammar: 'noun，围绕「宿舍」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dormitory.', right: 'He gave me some advice about the dormitory.', reason: 'advice 不可数。名词 dormitory 的单复数按词典词形记。', rule: '先确定 dormitory 是noun，再套「宿舍」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dormitory.q1', senseId: 'dormitory.s1', errorType: 'meaning', type: '词义选择', prompt: '「dormitory」在本条的核心意思是：', options: ['宿舍', '完全相反的意思', '一种古代钱币'], answer: '宿舍', explain: 'dormitory：宿舍。' },
      { id: 'dormitory.q2', senseId: 'dormitory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dormitory?', options: ['宿舍', 'a kind of ancient coin', 'the past tense of be'], answer: '宿舍', explain: '对的是「宿舍」。' },
      { id: 'dormitory.q3', senseId: 'dormitory.s1', errorType: 'grammar', type: '词义选择', prompt: 'dormitory 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dormitory.q4', senseId: 'dormitory.s1', errorType: 'meaning', type: '词源', prompt: '记 dormitory 时，哪句更稳妥？', options: ['先锁住「宿舍」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宿舍」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宿舍'] },
  });

  D('dose', {
    etymology: {
      origin: '希腊语 dosis「给予的一份」。',
      prefix: null,
      root: { text: 'dose', gloss: '剂量' },
      suffix: null,
      history: [
        { label: 'dose', text: '希腊语 dosis「给予的一份」。' },
        { label: '现在', text: '核心用法是：剂量。' },
      ],
      formationLogic: '考试认现在的用法：剂量。',
      mnemonic: '看到 dose，先说出「剂量」。',
      note: '考试认现在的用法：剂量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dose.', chinese: '这一章反复回到同一个点：剂量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dose.s1', en: 'Without that dose, the next paragraph is hard to follow.', zh: '没有这个剂量，下一段会很难读。', structure: 'dose / 表示 / 剂量', grammar: 'noun，围绕「剂量」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dose.', right: 'He gave me some advice about the dose.', reason: 'advice 不可数。名词 dose 的单复数按词典词形记。', rule: '先确定 dose 是noun，再套「剂量」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dose.q1', senseId: 'dose.s1', errorType: 'meaning', type: '词义选择', prompt: '「dose」在本条的核心意思是：', options: ['剂量', '完全相反的意思', '一种古代钱币'], answer: '剂量', explain: 'dose：剂量。' },
      { id: 'dose.q2', senseId: 'dose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dose?', options: ['剂量', 'a kind of ancient coin', 'the past tense of be'], answer: '剂量', explain: '对的是「剂量」。' },
      { id: 'dose.q3', senseId: 'dose.s1', errorType: 'grammar', type: '词义选择', prompt: 'dose 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dose.q4', senseId: 'dose.s1', errorType: 'meaning', type: '词源', prompt: '记 dose 时，哪句更稳妥？', options: ['先锁住「剂量」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「剂量」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['剂量'] },
  });

  D('dot', {
    etymology: {
      origin: '现代英语常用词「dot」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dot', gloss: '点' },
      suffix: null,
      history: [
        { label: 'dot', text: '现代英语常用词「dot」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：点。' },
      ],
      formationLogic: '核心义：点。',
      mnemonic: '看到 dot，先说出「点」。',
      note: '核心义：点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dot.', chinese: '这一章反复回到同一个点：点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dot.s1', en: 'Without that dot, the next paragraph is hard to follow.', zh: '没有这个点，下一段会很难读。', structure: 'dot / 表示 / 点', grammar: 'noun，围绕「点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dot.', right: 'He gave me some advice about the dot.', reason: 'advice 不可数。名词 dot 的单复数按词典词形记。', rule: '先确定 dot 是noun，再套「点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dot.q1', senseId: 'dot.s1', errorType: 'meaning', type: '词义选择', prompt: '「dot」在本条的核心意思是：', options: ['点', '完全相反的意思', '一种古代钱币'], answer: '点', explain: 'dot：点。' },
      { id: 'dot.q2', senseId: 'dot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dot?', options: ['点', 'a kind of ancient coin', 'the past tense of be'], answer: '点', explain: '对的是「点」。' },
      { id: 'dot.q3', senseId: 'dot.s1', errorType: 'grammar', type: '词义选择', prompt: 'dot 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dot.q4', senseId: 'dot.s1', errorType: 'meaning', type: '词源', prompt: '记 dot 时，哪句更稳妥？', options: ['先锁住「点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['点'] },
  });

  D('double', {
    etymology: {
      origin: '拉丁语 duplus「两倍」，duo「二」。',
      prefix: null,
      root: { text: 'double', gloss: '双倍的' },
      suffix: null,
      history: [
        { label: 'double', text: '拉丁语 duplus「两倍」，duo「二」。' },
        { label: '现在', text: '核心用法是：双倍的。' },
      ],
      formationLogic: '考试认现在的用法：双倍的。',
      mnemonic: '看到 double，先说出「双倍的」。',
      note: '考试认现在的用法：双倍的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was double.', chinese: '即使是初读者也能看出，这个结果是双倍的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'double.s1', en: 'They wanted a double answer, not a long speech.', zh: '他们要一个双倍的的答复，不要长篇发言。', structure: 'double / 表示 / 双倍的', grammar: 'adjective，围绕「双倍的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are double.', right: 'The news is double.', reason: 'news 作主语时动词用单数。', rule: '先确定 double 是adjective，再套「双倍的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'double.q1', senseId: 'double.s1', errorType: 'meaning', type: '词义选择', prompt: '「double」在本条的核心意思是：', options: ['双倍的', '完全相反的意思', '一种古代钱币'], answer: '双倍的', explain: 'double：双倍的。' },
      { id: 'double.q2', senseId: 'double.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches double?', options: ['双倍的', 'a kind of ancient coin', 'the past tense of be'], answer: '双倍的', explain: '对的是「双倍的」。' },
      { id: 'double.q3', senseId: 'double.s1', errorType: 'grammar', type: '词义选择', prompt: 'double 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'double.q4', senseId: 'double.s1', errorType: 'meaning', type: '词源', prompt: '记 double 时，哪句更稳妥？', options: ['先锁住「双倍的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「双倍的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['双倍的'] },
  });

  D('doubt', {
    etymology: {
      origin: '拉丁语 dubitare「在二之间摇摆」，duo。',
      prefix: null,
      root: { text: 'doubt', gloss: '怀疑' },
      suffix: null,
      history: [
        { label: 'doubt', text: '拉丁语 dubitare「在二之间摇摆」，duo。' },
        { label: '现在', text: '核心用法是：怀疑。' },
      ],
      formationLogic: '考试认现在的用法：怀疑。',
      mnemonic: '看到 doubt，先说出「怀疑」。',
      note: '考试认现在的用法：怀疑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one doubt.', chinese: '这一章反复回到同一个点：怀疑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doubt.s1', en: 'Without that doubt, the next paragraph is hard to follow.', zh: '没有这个怀疑，下一段会很难读。', structure: 'doubt / 表示 / 怀疑', grammar: 'noun，围绕「怀疑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the doubt.', right: 'He gave me some advice about the doubt.', reason: 'advice 不可数。名词 doubt 的单复数按词典词形记。', rule: '先确定 doubt 是noun，再套「怀疑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doubt.q1', senseId: 'doubt.s1', errorType: 'meaning', type: '词义选择', prompt: '「doubt」在本条的核心意思是：', options: ['怀疑', '完全相反的意思', '一种古代钱币'], answer: '怀疑', explain: 'doubt：怀疑。' },
      { id: 'doubt.q2', senseId: 'doubt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doubt?', options: ['怀疑', 'a kind of ancient coin', 'the past tense of be'], answer: '怀疑', explain: '对的是「怀疑」。' },
      { id: 'doubt.q3', senseId: 'doubt.s1', errorType: 'grammar', type: '词义选择', prompt: 'doubt 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'doubt.q4', senseId: 'doubt.s1', errorType: 'meaning', type: '词源', prompt: '记 doubt 时，哪句更稳妥？', options: ['先锁住「怀疑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怀疑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怀疑'] },
  });

  D('doubtful', {
    etymology: {
      origin: '英语派生：doubt + -ful，词性转到「怀疑的」。',
      prefix: null,
      root: { text: 'doubt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'doubtful', text: '英语派生：doubt + -ful，词性转到「怀疑的」。' },
        { label: '现在', text: '核心用法是：怀疑的。' },
      ],
      formationLogic: '先认词干 doubt，再看词尾。',
      mnemonic: '看到 doubtful，先说出「怀疑的」。',
      note: '先认词干 doubt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was doubtful.', chinese: '即使是初读者也能看出，这个结果是怀疑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doubtful.s1', en: 'They wanted a doubtful answer, not a long speech.', zh: '他们要一个怀疑的的答复，不要长篇发言。', structure: 'doubtful / 表示 / 怀疑的', grammar: 'adjective，围绕「怀疑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are doubtful.', right: 'The news is doubtful.', reason: 'news 作主语时动词用单数。', rule: '先确定 doubtful 是adjective，再套「怀疑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doubtful.q1', senseId: 'doubtful.s1', errorType: 'meaning', type: '词义选择', prompt: '「doubtful」在本条的核心意思是：', options: ['怀疑的', '完全相反的意思', '一种古代钱币'], answer: '怀疑的', explain: 'doubtful：怀疑的。' },
      { id: 'doubtful.q2', senseId: 'doubtful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doubtful?', options: ['怀疑的', 'a kind of ancient coin', 'the past tense of be'], answer: '怀疑的', explain: '对的是「怀疑的」。' },
      { id: 'doubtful.q3', senseId: 'doubtful.s1', errorType: 'grammar', type: '词义选择', prompt: 'doubtful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'doubtful.q4', senseId: 'doubtful.s1', errorType: 'meaning', type: '词源', prompt: '记 doubtful 时，哪句更稳妥？', options: ['先锁住「怀疑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怀疑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怀疑的'] },
  });

  D('doubting', {
    etymology: {
      origin: '英语派生：doubt + -ing，词性转到「怀疑的」。',
      prefix: null,
      root: { text: 'doubt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'doubting', text: '英语派生：doubt + -ing，词性转到「怀疑的」。' },
        { label: '现在', text: '核心用法是：怀疑的。' },
      ],
      formationLogic: '先认词干 doubt，再看词尾。',
      mnemonic: '看到 doubting，先说出「怀疑的」。',
      note: '先认词干 doubt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was doubting.', chinese: '即使是初读者也能看出，这个结果是怀疑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doubting.s1', en: 'They wanted a doubting answer, not a long speech.', zh: '他们要一个怀疑的的答复，不要长篇发言。', structure: 'doubting / 表示 / 怀疑的', grammar: 'adjective，围绕「怀疑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are doubting.', right: 'The news is doubting.', reason: 'news 作主语时动词用单数。', rule: '先确定 doubting 是adjective，再套「怀疑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doubting.q1', senseId: 'doubting.s1', errorType: 'meaning', type: '词义选择', prompt: '「doubting」在本条的核心意思是：', options: ['怀疑的', '完全相反的意思', '一种古代钱币'], answer: '怀疑的', explain: 'doubting：怀疑的。' },
      { id: 'doubting.q2', senseId: 'doubting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doubting?', options: ['怀疑的', 'a kind of ancient coin', 'the past tense of be'], answer: '怀疑的', explain: '对的是「怀疑的」。' },
      { id: 'doubting.q3', senseId: 'doubting.s1', errorType: 'grammar', type: '词义选择', prompt: 'doubting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'doubting.q4', senseId: 'doubting.s1', errorType: 'meaning', type: '词源', prompt: '记 doubting 时，哪句更稳妥？', options: ['先锁住「怀疑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怀疑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怀疑的'] },
  });

  D('dough', {
    etymology: {
      origin: '现代英语常用词「dough」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dough', gloss: '面团' },
      suffix: null,
      history: [
        { label: 'dough', text: '现代英语常用词「dough」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：面团。' },
      ],
      formationLogic: '核心义：面团。',
      mnemonic: '看到 dough，先说出「面团」。',
      note: '核心义：面团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dough.', chinese: '这一章反复回到同一个点：面团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dough.s1', en: 'Without that dough, the next paragraph is hard to follow.', zh: '没有这个面团，下一段会很难读。', structure: 'dough / 表示 / 面团', grammar: 'noun，围绕「面团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dough.', right: 'He gave me some advice about the dough.', reason: 'advice 不可数。名词 dough 的单复数按词典词形记。', rule: '先确定 dough 是noun，再套「面团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dough.q1', senseId: 'dough.s1', errorType: 'meaning', type: '词义选择', prompt: '「dough」在本条的核心意思是：', options: ['面团', '完全相反的意思', '一种古代钱币'], answer: '面团', explain: 'dough：面团。' },
      { id: 'dough.q2', senseId: 'dough.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dough?', options: ['面团', 'a kind of ancient coin', 'the past tense of be'], answer: '面团', explain: '对的是「面团」。' },
      { id: 'dough.q3', senseId: 'dough.s1', errorType: 'grammar', type: '词义选择', prompt: 'dough 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dough.q4', senseId: 'dough.s1', errorType: 'meaning', type: '词源', prompt: '记 dough 时，哪句更稳妥？', options: ['先锁住「面团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面团'] },
  });

  D('douse', {
    etymology: {
      origin: '现代英语常用词「douse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'douse', gloss: '浇灭' },
      suffix: null,
      history: [
        { label: 'douse', text: '现代英语常用词「douse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：浇灭。' },
      ],
      formationLogic: '核心义：浇灭。',
      mnemonic: '看到 douse，先说出「浇灭」。',
      note: '核心义：浇灭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to douse before the office closed.', chinese: '他们同意在办公室关门前做这件事：浇灭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'douse.s1', en: 'The deadline forced the team to douse that afternoon.', zh: '截止日期逼着小组在那天下午浇灭。', structure: 'douse / 表示 / 浇灭', grammar: 'verb，围绕「浇灭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She douseed it yesterday without checking the real past form.', right: 'Check the past form of "douse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 douse 是verb，再套「浇灭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'douse.q1', senseId: 'douse.s1', errorType: 'meaning', type: '词义选择', prompt: '「douse」在本条的核心意思是：', options: ['浇灭', '完全相反的意思', '一种古代钱币'], answer: '浇灭', explain: 'douse：浇灭。' },
      { id: 'douse.q2', senseId: 'douse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches douse?', options: ['浇灭', 'a kind of ancient coin', 'the past tense of be'], answer: '浇灭', explain: '对的是「浇灭」。' },
      { id: 'douse.q3', senseId: 'douse.s1', errorType: 'grammar', type: '词义选择', prompt: 'douse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'douse.q4', senseId: 'douse.s1', errorType: 'meaning', type: '词源', prompt: '记 douse 时，哪句更稳妥？', options: ['先锁住「浇灭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「浇灭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['浇灭'] },
  });

  D('dove', {
    etymology: {
      origin: '现代英语常用词「dove」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dove', gloss: '鸽子' },
      suffix: null,
      history: [
        { label: 'dove', text: '现代英语常用词「dove」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鸽子。' },
      ],
      formationLogic: '核心义：鸽子。',
      mnemonic: '看到 dove，先说出「鸽子」。',
      note: '核心义：鸽子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dove.', chinese: '这一章反复回到同一个点：鸽子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dove.s1', en: 'Without that dove, the next paragraph is hard to follow.', zh: '没有这个鸽子，下一段会很难读。', structure: 'dove / 表示 / 鸽子', grammar: 'noun，围绕「鸽子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dove.', right: 'He gave me some advice about the dove.', reason: 'advice 不可数。名词 dove 的单复数按词典词形记。', rule: '先确定 dove 是noun，再套「鸽子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dove.q1', senseId: 'dove.s1', errorType: 'meaning', type: '词义选择', prompt: '「dove」在本条的核心意思是：', options: ['鸽子', '完全相反的意思', '一种古代钱币'], answer: '鸽子', explain: 'dove：鸽子。' },
      { id: 'dove.q2', senseId: 'dove.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dove?', options: ['鸽子', 'a kind of ancient coin', 'the past tense of be'], answer: '鸽子', explain: '对的是「鸽子」。' },
      { id: 'dove.q3', senseId: 'dove.s1', errorType: 'grammar', type: '词义选择', prompt: 'dove 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dove.q4', senseId: 'dove.s1', errorType: 'meaning', type: '词源', prompt: '记 dove 时，哪句更稳妥？', options: ['先锁住「鸽子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鸽子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鸽子'] },
  });

  D('down', {
    etymology: {
      origin: '古英语 dune「从山上」。',
      prefix: null,
      root: { text: 'down', gloss: '向下' },
      suffix: null,
      history: [
        { label: 'down', text: '古英语 dune「从山上」。' },
        { label: '现在', text: '核心用法是：向下。' },
      ],
      formationLogic: '考试认现在的用法：向下。',
      mnemonic: '看到 down，先说出「向下」。',
      note: '考试认现在的用法：向下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule down, and the class followed.', chinese: '她把规则讲清楚了（向下），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'down.s1', en: 'He nodded down and returned to the notes.', zh: '他向下地点了点头，又回去看笔记。', structure: 'down / 表示 / 向下', grammar: 'adverb，围绕「向下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very downly in the meeting.', right: 'She spoke down in the meeting.', reason: 'down 已经是副词，不要再加 -ly。', rule: '先确定 down 是adverb，再套「向下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'down.q1', senseId: 'down.s1', errorType: 'meaning', type: '词义选择', prompt: '「down」在本条的核心意思是：', options: ['向下', '完全相反的意思', '一种古代钱币'], answer: '向下', explain: 'down：向下。' },
      { id: 'down.q2', senseId: 'down.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches down?', options: ['向下', 'a kind of ancient coin', 'the past tense of be'], answer: '向下', explain: '对的是「向下」。' },
      { id: 'down.q3', senseId: 'down.s1', errorType: 'grammar', type: '词义选择', prompt: 'down 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'down.q4', senseId: 'down.s1', errorType: 'meaning', type: '词源', prompt: '记 down 时，哪句更稳妥？', options: ['先锁住「向下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向下'] },
  });

  D('down payment', {
    etymology: {
      origin: '现代英语固定说法「down payment」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'down payment', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'down payment', text: '现代英语固定说法「down payment」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：首付款。' },
      ],
      formationLogic: '核心义：首付款。',
      mnemonic: '看到 down payment，先说出「首付款」。',
      note: '核心义：首付款。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "down payment" and asked the class to keep it as one unit.', chinese: '老师把「down payment」圈出来，让全班把它当成一个整体。它表示首付款。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'down payment.s1', en: 'In the margin she wrote "down payment" so nobody would split the phrase.', zh: '她在页边写下「down payment」，免得有人把这个说法拆开。意思是首付款。', structure: 'down payment / 表示 / 首付款', grammar: 'noun，围绕「首付款」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of down payment and lost the point.', right: 'Keep "down payment" together: it means 首付款.', reason: '「down payment」要整块理解。', rule: '先确定 down payment 是noun，再套「首付款」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'down payment.q1', senseId: 'down payment.s1', errorType: 'meaning', type: '词义选择', prompt: '「down payment」在本条的核心意思是：', options: ['首付款', '完全相反的意思', '一种古代钱币'], answer: '首付款', explain: 'down payment：首付款。' },
      { id: 'down payment.q2', senseId: 'down payment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches down payment?', options: ['首付款', 'a kind of ancient coin', 'the past tense of be'], answer: '首付款', explain: '对的是「首付款」。' },
      { id: 'down payment.q3', senseId: 'down payment.s1', errorType: 'grammar', type: '词义选择', prompt: 'down payment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'down payment.q4', senseId: 'down payment.s1', errorType: 'meaning', type: '词源', prompt: '记 down payment 时，哪句更稳妥？', options: ['先锁住「首付款」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「首付款」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['首付款'] },
  });

  D('downfall', {
    etymology: {
      origin: '现代英语常用词「downfall」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downfall', gloss: '垮台' },
      suffix: null,
      history: [
        { label: 'downfall', text: '现代英语常用词「downfall」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：垮台。' },
      ],
      formationLogic: '核心义：垮台。',
      mnemonic: '看到 downfall，先说出「垮台」。',
      note: '核心义：垮台。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one downfall.', chinese: '这一章反复回到同一个点：垮台。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downfall.s1', en: 'Without that downfall, the next paragraph is hard to follow.', zh: '没有这个垮台，下一段会很难读。', structure: 'downfall / 表示 / 垮台', grammar: 'noun，围绕「垮台」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the downfall.', right: 'He gave me some advice about the downfall.', reason: 'advice 不可数。名词 downfall 的单复数按词典词形记。', rule: '先确定 downfall 是noun，再套「垮台」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downfall.q1', senseId: 'downfall.s1', errorType: 'meaning', type: '词义选择', prompt: '「downfall」在本条的核心意思是：', options: ['垮台', '完全相反的意思', '一种古代钱币'], answer: '垮台', explain: 'downfall：垮台。' },
      { id: 'downfall.q2', senseId: 'downfall.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downfall?', options: ['垮台', 'a kind of ancient coin', 'the past tense of be'], answer: '垮台', explain: '对的是「垮台」。' },
      { id: 'downfall.q3', senseId: 'downfall.s1', errorType: 'grammar', type: '词义选择', prompt: 'downfall 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'downfall.q4', senseId: 'downfall.s1', errorType: 'meaning', type: '词源', prompt: '记 downfall 时，哪句更稳妥？', options: ['先锁住「垮台」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「垮台」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['垮台'] },
  });

  D('downgrade', {
    etymology: {
      origin: '现代英语常用词「downgrade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downgrade', gloss: '降级' },
      suffix: null,
      history: [
        { label: 'downgrade', text: '现代英语常用词「downgrade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：降级。' },
      ],
      formationLogic: '核心义：降级。',
      mnemonic: '看到 downgrade，先说出「降级」。',
      note: '核心义：降级。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to downgrade before the office closed.', chinese: '他们同意在办公室关门前做这件事：降级。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downgrade.s1', en: 'The deadline forced the team to downgrade that afternoon.', zh: '截止日期逼着小组在那天下午降级。', structure: 'downgrade / 表示 / 降级', grammar: 'verb，围绕「降级」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She downgradeed it yesterday without checking the real past form.', right: 'Check the past form of "downgrade" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 downgrade 是verb，再套「降级」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downgrade.q1', senseId: 'downgrade.s1', errorType: 'meaning', type: '词义选择', prompt: '「downgrade」在本条的核心意思是：', options: ['降级', '完全相反的意思', '一种古代钱币'], answer: '降级', explain: 'downgrade：降级。' },
      { id: 'downgrade.q2', senseId: 'downgrade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downgrade?', options: ['降级', 'a kind of ancient coin', 'the past tense of be'], answer: '降级', explain: '对的是「降级」。' },
      { id: 'downgrade.q3', senseId: 'downgrade.s1', errorType: 'grammar', type: '词义选择', prompt: 'downgrade 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'downgrade.q4', senseId: 'downgrade.s1', errorType: 'meaning', type: '词源', prompt: '记 downgrade 时，哪句更稳妥？', options: ['先锁住「降级」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「降级」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['降级'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
