/* data/words/cet/author_depth_f2.js
 * 手敲深度补丁：criticize–defeatism（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('criticize', {
    etymology: {
      origin: '现代英语常用词「criticize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'criticize', gloss: '批评' },
      suffix: null,
      history: [
        { label: 'criticize', text: '现代英语常用词「criticize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：批评。' },
      ],
      formationLogic: '核心义：批评。',
      mnemonic: '看到 criticize，先说出「批评」。',
      note: '核心义：批评。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to criticize before the office closed.', chinese: '他们同意在办公室关门前做这件事：批评。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'criticize.s1', en: 'The deadline forced the team to criticize that afternoon.', zh: '截止日期逼着小组在那天下午批评。', structure: 'criticize / 表示 / 批评', grammar: 'verb，围绕「批评」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She criticizeed it yesterday without checking the real past form.', right: 'Check the past form of "criticize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 criticize 是verb，再套「批评」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'criticize.q1', senseId: 'criticize.s1', errorType: 'meaning', type: '词义选择', prompt: '「criticize」在本条的核心意思是：', options: ['批评', '完全相反的意思', '一种古代钱币'], answer: '批评', explain: 'criticize：批评。' },
      { id: 'criticize.q2', senseId: 'criticize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches criticize?', options: ['批评', 'a kind of ancient coin', 'the past tense of be'], answer: '批评', explain: '对的是「批评」。' },
      { id: 'criticize.q3', senseId: 'criticize.s1', errorType: 'grammar', type: '词义选择', prompt: 'criticize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'criticize.q4', senseId: 'criticize.s1', errorType: 'meaning', type: '词源', prompt: '记 criticize 时，哪句更稳妥？', options: ['先锁住「批评」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「批评」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['批评'] },
  });

  D('critique', {
    etymology: {
      origin: '现代英语常用词「critique」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'critique', gloss: '评论' },
      suffix: null,
      history: [
        { label: 'critique', text: '现代英语常用词「critique」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：评论。' },
      ],
      formationLogic: '核心义：评论。',
      mnemonic: '看到 critique，先说出「评论」。',
      note: '核心义：评论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one critique.', chinese: '这一章反复回到同一个点：评论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'critique.s1', en: 'Without that critique, the next paragraph is hard to follow.', zh: '没有这个评论，下一段会很难读。', structure: 'critique / 表示 / 评论', grammar: 'noun，围绕「评论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the critique.', right: 'He gave me some advice about the critique.', reason: 'advice 不可数。名词 critique 的单复数按词典词形记。', rule: '先确定 critique 是noun，再套「评论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'critique.q1', senseId: 'critique.s1', errorType: 'meaning', type: '词义选择', prompt: '「critique」在本条的核心意思是：', options: ['评论', '完全相反的意思', '一种古代钱币'], answer: '评论', explain: 'critique：评论。' },
      { id: 'critique.q2', senseId: 'critique.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches critique?', options: ['评论', 'a kind of ancient coin', 'the past tense of be'], answer: '评论', explain: '对的是「评论」。' },
      { id: 'critique.q3', senseId: 'critique.s1', errorType: 'grammar', type: '词义选择', prompt: 'critique 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'critique.q4', senseId: 'critique.s1', errorType: 'meaning', type: '词源', prompt: '记 critique 时，哪句更稳妥？', options: ['先锁住「评论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「评论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['评论'] },
  });

  D('crochet', {
    etymology: {
      origin: '现代英语常用词「crochet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crochet', gloss: '钩针编织' },
      suffix: null,
      history: [
        { label: 'crochet', text: '现代英语常用词「crochet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：钩针编织。' },
      ],
      formationLogic: '核心义：钩针编织。',
      mnemonic: '看到 crochet，先说出「钩针编织」。',
      note: '核心义：钩针编织。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crochet.', chinese: '这一章反复回到同一个点：钩针编织。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crochet.s1', en: 'Without that crochet, the next paragraph is hard to follow.', zh: '没有这个钩针编织，下一段会很难读。', structure: 'crochet / 表示 / 钩针编织', grammar: 'noun，围绕「钩针编织」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crochet.', right: 'He gave me some advice about the crochet.', reason: 'advice 不可数。名词 crochet 的单复数按词典词形记。', rule: '先确定 crochet 是noun，再套「钩针编织」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crochet.q1', senseId: 'crochet.s1', errorType: 'meaning', type: '词义选择', prompt: '「crochet」在本条的核心意思是：', options: ['钩针编织', '完全相反的意思', '一种古代钱币'], answer: '钩针编织', explain: 'crochet：钩针编织。' },
      { id: 'crochet.q2', senseId: 'crochet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crochet?', options: ['钩针编织', 'a kind of ancient coin', 'the past tense of be'], answer: '钩针编织', explain: '对的是「钩针编织」。' },
      { id: 'crochet.q3', senseId: 'crochet.s1', errorType: 'grammar', type: '词义选择', prompt: 'crochet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crochet.q4', senseId: 'crochet.s1', errorType: 'meaning', type: '词源', prompt: '记 crochet 时，哪句更稳妥？', options: ['先锁住「钩针编织」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「钩针编织」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['钩针编织'] },
  });

  D('crockery', {
    etymology: {
      origin: '现代英语常用词「crockery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crockery', gloss: '陶器' },
      suffix: null,
      history: [
        { label: 'crockery', text: '现代英语常用词「crockery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：陶器。' },
      ],
      formationLogic: '核心义：陶器。',
      mnemonic: '看到 crockery，先说出「陶器」。',
      note: '核心义：陶器。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crockery.', chinese: '这一章反复回到同一个点：陶器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crockery.s1', en: 'Without that crockery, the next paragraph is hard to follow.', zh: '没有这个陶器，下一段会很难读。', structure: 'crockery / 表示 / 陶器', grammar: 'noun，围绕「陶器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crockery.', right: 'He gave me some advice about the crockery.', reason: 'advice 不可数。名词 crockery 的单复数按词典词形记。', rule: '先确定 crockery 是noun，再套「陶器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crockery.q1', senseId: 'crockery.s1', errorType: 'meaning', type: '词义选择', prompt: '「crockery」在本条的核心意思是：', options: ['陶器', '完全相反的意思', '一种古代钱币'], answer: '陶器', explain: 'crockery：陶器。' },
      { id: 'crockery.q2', senseId: 'crockery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crockery?', options: ['陶器', 'a kind of ancient coin', 'the past tense of be'], answer: '陶器', explain: '对的是「陶器」。' },
      { id: 'crockery.q3', senseId: 'crockery.s1', errorType: 'grammar', type: '词义选择', prompt: 'crockery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crockery.q4', senseId: 'crockery.s1', errorType: 'meaning', type: '词源', prompt: '记 crockery 时，哪句更稳妥？', options: ['先锁住「陶器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陶器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陶器'] },
  });

  D('crocodile', {
    etymology: {
      origin: '现代英语常用词「crocodile」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crocodile', gloss: '鳄鱼' },
      suffix: null,
      history: [
        { label: 'crocodile', text: '现代英语常用词「crocodile」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鳄鱼。' },
      ],
      formationLogic: '核心义：鳄鱼。',
      mnemonic: '看到 crocodile，先说出「鳄鱼」。',
      note: '核心义：鳄鱼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crocodile.', chinese: '这一章反复回到同一个点：鳄鱼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crocodile.s1', en: 'Without that crocodile, the next paragraph is hard to follow.', zh: '没有这个鳄鱼，下一段会很难读。', structure: 'crocodile / 表示 / 鳄鱼', grammar: 'noun，围绕「鳄鱼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crocodile.', right: 'He gave me some advice about the crocodile.', reason: 'advice 不可数。名词 crocodile 的单复数按词典词形记。', rule: '先确定 crocodile 是noun，再套「鳄鱼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crocodile.q1', senseId: 'crocodile.s1', errorType: 'meaning', type: '词义选择', prompt: '「crocodile」在本条的核心意思是：', options: ['鳄鱼', '完全相反的意思', '一种古代钱币'], answer: '鳄鱼', explain: 'crocodile：鳄鱼。' },
      { id: 'crocodile.q2', senseId: 'crocodile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crocodile?', options: ['鳄鱼', 'a kind of ancient coin', 'the past tense of be'], answer: '鳄鱼', explain: '对的是「鳄鱼」。' },
      { id: 'crocodile.q3', senseId: 'crocodile.s1', errorType: 'grammar', type: '词义选择', prompt: 'crocodile 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crocodile.q4', senseId: 'crocodile.s1', errorType: 'meaning', type: '词源', prompt: '记 crocodile 时，哪句更稳妥？', options: ['先锁住「鳄鱼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鳄鱼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鳄鱼'] },
  });

  D('crooked', {
    etymology: {
      origin: '现代英语常用词「crooked」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crooked', gloss: '弯曲的' },
      suffix: null,
      history: [
        { label: 'crooked', text: '现代英语常用词「crooked」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：弯曲的。' },
      ],
      formationLogic: '核心义：弯曲的。',
      mnemonic: '看到 crooked，先说出「弯曲的」。',
      note: '核心义：弯曲的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crooked.', chinese: '即使是初读者也能看出，这个结果是弯曲的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crooked.s1', en: 'They wanted a crooked answer, not a long speech.', zh: '他们要一个弯曲的的答复，不要长篇发言。', structure: 'crooked / 表示 / 弯曲的', grammar: 'adjective，围绕「弯曲的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crooked.', right: 'The news is crooked.', reason: 'news 作主语时动词用单数。', rule: '先确定 crooked 是adjective，再套「弯曲的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crooked.q1', senseId: 'crooked.s1', errorType: 'meaning', type: '词义选择', prompt: '「crooked」在本条的核心意思是：', options: ['弯曲的', '完全相反的意思', '一种古代钱币'], answer: '弯曲的', explain: 'crooked：弯曲的。' },
      { id: 'crooked.q2', senseId: 'crooked.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crooked?', options: ['弯曲的', 'a kind of ancient coin', 'the past tense of be'], answer: '弯曲的', explain: '对的是「弯曲的」。' },
      { id: 'crooked.q3', senseId: 'crooked.s1', errorType: 'grammar', type: '词义选择', prompt: 'crooked 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crooked.q4', senseId: 'crooked.s1', errorType: 'meaning', type: '词源', prompt: '记 crooked 时，哪句更稳妥？', options: ['先锁住「弯曲的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「弯曲的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['弯曲的'] },
  });

  D('crop', {
    etymology: {
      origin: '古英语 cropp「顶、收成」。',
      prefix: null,
      root: { text: 'crop', gloss: '庄稼' },
      suffix: null,
      history: [
        { label: 'crop', text: '古英语 cropp「顶、收成」。' },
        { label: '现在', text: '核心用法是：庄稼。' },
      ],
      formationLogic: '考试认现在的用法：庄稼。',
      mnemonic: '看到 crop，先说出「庄稼」。',
      note: '考试认现在的用法：庄稼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crop.', chinese: '这一章反复回到同一个点：庄稼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crop.s1', en: 'Without that crop, the next paragraph is hard to follow.', zh: '没有这个庄稼，下一段会很难读。', structure: 'crop / 表示 / 庄稼', grammar: 'noun，围绕「庄稼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crop.', right: 'He gave me some advice about the crop.', reason: 'advice 不可数。名词 crop 的单复数按词典词形记。', rule: '先确定 crop 是noun，再套「庄稼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crop.q1', senseId: 'crop.s1', errorType: 'meaning', type: '词义选择', prompt: '「crop」在本条的核心意思是：', options: ['庄稼', '完全相反的意思', '一种古代钱币'], answer: '庄稼', explain: 'crop：庄稼。' },
      { id: 'crop.q2', senseId: 'crop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crop?', options: ['庄稼', 'a kind of ancient coin', 'the past tense of be'], answer: '庄稼', explain: '对的是「庄稼」。' },
      { id: 'crop.q3', senseId: 'crop.s1', errorType: 'grammar', type: '词义选择', prompt: 'crop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crop.q4', senseId: 'crop.s1', errorType: 'meaning', type: '词源', prompt: '记 crop 时，哪句更稳妥？', options: ['先锁住「庄稼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「庄稼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['庄稼'] },
  });

  D('crops', {
    etymology: {
      origin: '现代英语常用词「crops」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crops', gloss: '农作物' },
      suffix: null,
      history: [
        { label: 'crops', text: '现代英语常用词「crops」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：农作物。' },
      ],
      formationLogic: '核心义：农作物。',
      mnemonic: '看到 crops，先说出「农作物」。',
      note: '核心义：农作物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crops.', chinese: '这一章反复回到同一个点：农作物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crops.s1', en: 'Without that crops, the next paragraph is hard to follow.', zh: '没有这个农作物，下一段会很难读。', structure: 'crops / 表示 / 农作物', grammar: 'noun，围绕「农作物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crops.', right: 'He gave me some advice about the crops.', reason: 'advice 不可数。名词 crops 的单复数按词典词形记。', rule: '先确定 crops 是noun，再套「农作物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crops.q1', senseId: 'crops.s1', errorType: 'meaning', type: '词义选择', prompt: '「crops」在本条的核心意思是：', options: ['农作物', '完全相反的意思', '一种古代钱币'], answer: '农作物', explain: 'crops：农作物。' },
      { id: 'crops.q2', senseId: 'crops.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crops?', options: ['农作物', 'a kind of ancient coin', 'the past tense of be'], answer: '农作物', explain: '对的是「农作物」。' },
      { id: 'crops.q3', senseId: 'crops.s1', errorType: 'grammar', type: '词义选择', prompt: 'crops 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crops.q4', senseId: 'crops.s1', errorType: 'meaning', type: '词源', prompt: '记 crops 时，哪句更稳妥？', options: ['先锁住「农作物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「农作物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['农作物'] },
  });

  D('cross', {
    etymology: {
      origin: '拉丁语 crux。',
      prefix: null,
      root: { text: 'cross', gloss: '十字' },
      suffix: null,
      history: [
        { label: 'cross', text: '拉丁语 crux。' },
        { label: '现在', text: '核心用法是：十字。' },
      ],
      formationLogic: '考试认现在的用法：十字。',
      mnemonic: '看到 cross，先说出「十字」。',
      note: '考试认现在的用法：十字。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cross.', chinese: '这一章反复回到同一个点：十字。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cross.s1', en: 'Without that cross, the next paragraph is hard to follow.', zh: '没有这个十字，下一段会很难读。', structure: 'cross / 表示 / 十字', grammar: 'noun，围绕「十字」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cross.', right: 'He gave me some advice about the cross.', reason: 'advice 不可数。名词 cross 的单复数按词典词形记。', rule: '先确定 cross 是noun，再套「十字」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cross.q1', senseId: 'cross.s1', errorType: 'meaning', type: '词义选择', prompt: '「cross」在本条的核心意思是：', options: ['十字', '完全相反的意思', '一种古代钱币'], answer: '十字', explain: 'cross：十字。' },
      { id: 'cross.q2', senseId: 'cross.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cross?', options: ['十字', 'a kind of ancient coin', 'the past tense of be'], answer: '十字', explain: '对的是「十字」。' },
      { id: 'cross.q3', senseId: 'cross.s1', errorType: 'grammar', type: '词义选择', prompt: 'cross 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cross.q4', senseId: 'cross.s1', errorType: 'meaning', type: '词源', prompt: '记 cross 时，哪句更稳妥？', options: ['先锁住「十字」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十字」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十字'] },
  });

  D('cross-examine', {
    etymology: {
      origin: '现代英语常用词「cross-examine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cross-examine', gloss: '盘问' },
      suffix: null,
      history: [
        { label: 'cross-examine', text: '现代英语常用词「cross-examine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：盘问。' },
      ],
      formationLogic: '核心义：盘问。',
      mnemonic: '看到 cross-examine，先说出「盘问」。',
      note: '核心义：盘问。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cross-examine before the office closed.', chinese: '他们同意在办公室关门前做这件事：盘问。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cross-examine.s1', en: 'The deadline forced the team to cross-examine that afternoon.', zh: '截止日期逼着小组在那天下午盘问。', structure: 'cross-examine / 表示 / 盘问', grammar: 'verb，围绕「盘问」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cross-examineed it yesterday without checking the real past form.', right: 'Check the past form of "cross-examine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cross-examine 是verb，再套「盘问」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cross-examine.q1', senseId: 'cross-examine.s1', errorType: 'meaning', type: '词义选择', prompt: '「cross-examine」在本条的核心意思是：', options: ['盘问', '完全相反的意思', '一种古代钱币'], answer: '盘问', explain: 'cross-examine：盘问。' },
      { id: 'cross-examine.q2', senseId: 'cross-examine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cross-examine?', options: ['盘问', 'a kind of ancient coin', 'the past tense of be'], answer: '盘问', explain: '对的是「盘问」。' },
      { id: 'cross-examine.q3', senseId: 'cross-examine.s1', errorType: 'grammar', type: '词义选择', prompt: 'cross-examine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cross-examine.q4', senseId: 'cross-examine.s1', errorType: 'meaning', type: '词源', prompt: '记 cross-examine 时，哪句更稳妥？', options: ['先锁住「盘问」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「盘问」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['盘问'] },
  });

  D('crossbreed', {
    etymology: {
      origin: '现代英语常用词「crossbreed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crossbreed', gloss: '杂交品种' },
      suffix: null,
      history: [
        { label: 'crossbreed', text: '现代英语常用词「crossbreed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：杂交品种。' },
      ],
      formationLogic: '核心义：杂交品种。',
      mnemonic: '看到 crossbreed，先说出「杂交品种」。',
      note: '核心义：杂交品种。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crossbreed.', chinese: '这一章反复回到同一个点：杂交品种。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crossbreed.s1', en: 'Without that crossbreed, the next paragraph is hard to follow.', zh: '没有这个杂交品种，下一段会很难读。', structure: 'crossbreed / 表示 / 杂交品种', grammar: 'noun，围绕「杂交品种」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crossbreed.', right: 'He gave me some advice about the crossbreed.', reason: 'advice 不可数。名词 crossbreed 的单复数按词典词形记。', rule: '先确定 crossbreed 是noun，再套「杂交品种」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crossbreed.q1', senseId: 'crossbreed.s1', errorType: 'meaning', type: '词义选择', prompt: '「crossbreed」在本条的核心意思是：', options: ['杂交品种', '完全相反的意思', '一种古代钱币'], answer: '杂交品种', explain: 'crossbreed：杂交品种。' },
      { id: 'crossbreed.q2', senseId: 'crossbreed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crossbreed?', options: ['杂交品种', 'a kind of ancient coin', 'the past tense of be'], answer: '杂交品种', explain: '对的是「杂交品种」。' },
      { id: 'crossbreed.q3', senseId: 'crossbreed.s1', errorType: 'grammar', type: '词义选择', prompt: 'crossbreed 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crossbreed.q4', senseId: 'crossbreed.s1', errorType: 'meaning', type: '词源', prompt: '记 crossbreed 时，哪句更稳妥？', options: ['先锁住「杂交品种」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「杂交品种」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['杂交品种'] },
  });

  D('crossing', {
    etymology: {
      origin: '英语派生：cross + -ing，词性转到「人行横道」。',
      prefix: null,
      root: { text: 'cross', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'crossing', text: '英语派生：cross + -ing，词性转到「人行横道」。' },
        { label: '现在', text: '核心用法是：人行横道。' },
      ],
      formationLogic: '先认词干 cross，再看词尾。',
      mnemonic: '看到 crossing，先说出「人行横道」。',
      note: '先认词干 cross，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crossing.', chinese: '这一章反复回到同一个点：人行横道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crossing.s1', en: 'Without that crossing, the next paragraph is hard to follow.', zh: '没有这个人行横道，下一段会很难读。', structure: 'crossing / 表示 / 人行横道', grammar: 'noun，围绕「人行横道」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crossing.', right: 'He gave me some advice about the crossing.', reason: 'advice 不可数。名词 crossing 的单复数按词典词形记。', rule: '先确定 crossing 是noun，再套「人行横道」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crossing.q1', senseId: 'crossing.s1', errorType: 'meaning', type: '词义选择', prompt: '「crossing」在本条的核心意思是：', options: ['人行横道', '完全相反的意思', '一种古代钱币'], answer: '人行横道', explain: 'crossing：人行横道。' },
      { id: 'crossing.q2', senseId: 'crossing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crossing?', options: ['人行横道', 'a kind of ancient coin', 'the past tense of be'], answer: '人行横道', explain: '对的是「人行横道」。' },
      { id: 'crossing.q3', senseId: 'crossing.s1', errorType: 'grammar', type: '词义选择', prompt: 'crossing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crossing.q4', senseId: 'crossing.s1', errorType: 'meaning', type: '词源', prompt: '记 crossing 时，哪句更稳妥？', options: ['先锁住「人行横道」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人行横道」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人行横道'] },
  });

  D('crossroads', {
    etymology: {
      origin: '现代英语常用词「crossroads」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crossroads', gloss: '十字路口' },
      suffix: null,
      history: [
        { label: 'crossroads', text: '现代英语常用词「crossroads」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：十字路口。' },
      ],
      formationLogic: '核心义：十字路口。',
      mnemonic: '看到 crossroads，先说出「十字路口」。',
      note: '核心义：十字路口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crossroads.', chinese: '这一章反复回到同一个点：十字路口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crossroads.s1', en: 'Without that crossroads, the next paragraph is hard to follow.', zh: '没有这个十字路口，下一段会很难读。', structure: 'crossroads / 表示 / 十字路口', grammar: 'noun，围绕「十字路口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crossroads.', right: 'He gave me some advice about the crossroads.', reason: 'advice 不可数。名词 crossroads 的单复数按词典词形记。', rule: '先确定 crossroads 是noun，再套「十字路口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crossroads.q1', senseId: 'crossroads.s1', errorType: 'meaning', type: '词义选择', prompt: '「crossroads」在本条的核心意思是：', options: ['十字路口', '完全相反的意思', '一种古代钱币'], answer: '十字路口', explain: 'crossroads：十字路口。' },
      { id: 'crossroads.q2', senseId: 'crossroads.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crossroads?', options: ['十字路口', 'a kind of ancient coin', 'the past tense of be'], answer: '十字路口', explain: '对的是「十字路口」。' },
      { id: 'crossroads.q3', senseId: 'crossroads.s1', errorType: 'grammar', type: '词义选择', prompt: 'crossroads 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crossroads.q4', senseId: 'crossroads.s1', errorType: 'meaning', type: '词源', prompt: '记 crossroads 时，哪句更稳妥？', options: ['先锁住「十字路口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十字路口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十字路口'] },
  });

  D('crouch', {
    etymology: {
      origin: '现代英语常用词「crouch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crouch', gloss: '蹲' },
      suffix: null,
      history: [
        { label: 'crouch', text: '现代英语常用词「crouch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蹲。' },
      ],
      formationLogic: '核心义：蹲。',
      mnemonic: '看到 crouch，先说出「蹲」。',
      note: '核心义：蹲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to crouch before the office closed.', chinese: '他们同意在办公室关门前做这件事：蹲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crouch.s1', en: 'The deadline forced the team to crouch that afternoon.', zh: '截止日期逼着小组在那天下午蹲。', structure: 'crouch / 表示 / 蹲', grammar: 'verb，围绕「蹲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She crouched it yesterday without checking the real past form.', right: 'Check the past form of "crouch" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 crouch 是verb，再套「蹲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crouch.q1', senseId: 'crouch.s1', errorType: 'meaning', type: '词义选择', prompt: '「crouch」在本条的核心意思是：', options: ['蹲', '完全相反的意思', '一种古代钱币'], answer: '蹲', explain: 'crouch：蹲。' },
      { id: 'crouch.q2', senseId: 'crouch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crouch?', options: ['蹲', 'a kind of ancient coin', 'the past tense of be'], answer: '蹲', explain: '对的是「蹲」。' },
      { id: 'crouch.q3', senseId: 'crouch.s1', errorType: 'grammar', type: '词义选择', prompt: 'crouch 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'crouch.q4', senseId: 'crouch.s1', errorType: 'meaning', type: '词源', prompt: '记 crouch 时，哪句更稳妥？', options: ['先锁住「蹲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蹲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蹲'] },
  });

  D('crow', {
    etymology: {
      origin: '现代英语常用词「crow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crow', gloss: '乌鸦' },
      suffix: null,
      history: [
        { label: 'crow', text: '现代英语常用词「crow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：乌鸦。' },
      ],
      formationLogic: '核心义：乌鸦。',
      mnemonic: '看到 crow，先说出「乌鸦」。',
      note: '核心义：乌鸦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crow.', chinese: '这一章反复回到同一个点：乌鸦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crow.s1', en: 'Without that crow, the next paragraph is hard to follow.', zh: '没有这个乌鸦，下一段会很难读。', structure: 'crow / 表示 / 乌鸦', grammar: 'noun，围绕「乌鸦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crow.', right: 'He gave me some advice about the crow.', reason: 'advice 不可数。名词 crow 的单复数按词典词形记。', rule: '先确定 crow 是noun，再套「乌鸦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crow.q1', senseId: 'crow.s1', errorType: 'meaning', type: '词义选择', prompt: '「crow」在本条的核心意思是：', options: ['乌鸦', '完全相反的意思', '一种古代钱币'], answer: '乌鸦', explain: 'crow：乌鸦。' },
      { id: 'crow.q2', senseId: 'crow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crow?', options: ['乌鸦', 'a kind of ancient coin', 'the past tense of be'], answer: '乌鸦', explain: '对的是「乌鸦」。' },
      { id: 'crow.q3', senseId: 'crow.s1', errorType: 'grammar', type: '词义选择', prompt: 'crow 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crow.q4', senseId: 'crow.s1', errorType: 'meaning', type: '词源', prompt: '记 crow 时，哪句更稳妥？', options: ['先锁住「乌鸦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乌鸦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乌鸦'] },
  });

  D('crowbar', {
    etymology: {
      origin: '现代英语常用词「crowbar」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crowbar', gloss: '撬棍' },
      suffix: null,
      history: [
        { label: 'crowbar', text: '现代英语常用词「crowbar」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：撬棍。' },
      ],
      formationLogic: '核心义：撬棍。',
      mnemonic: '看到 crowbar，先说出「撬棍」。',
      note: '核心义：撬棍。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crowbar.', chinese: '这一章反复回到同一个点：撬棍。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crowbar.s1', en: 'Without that crowbar, the next paragraph is hard to follow.', zh: '没有这个撬棍，下一段会很难读。', structure: 'crowbar / 表示 / 撬棍', grammar: 'noun，围绕「撬棍」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crowbar.', right: 'He gave me some advice about the crowbar.', reason: 'advice 不可数。名词 crowbar 的单复数按词典词形记。', rule: '先确定 crowbar 是noun，再套「撬棍」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crowbar.q1', senseId: 'crowbar.s1', errorType: 'meaning', type: '词义选择', prompt: '「crowbar」在本条的核心意思是：', options: ['撬棍', '完全相反的意思', '一种古代钱币'], answer: '撬棍', explain: 'crowbar：撬棍。' },
      { id: 'crowbar.q2', senseId: 'crowbar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crowbar?', options: ['撬棍', 'a kind of ancient coin', 'the past tense of be'], answer: '撬棍', explain: '对的是「撬棍」。' },
      { id: 'crowbar.q3', senseId: 'crowbar.s1', errorType: 'grammar', type: '词义选择', prompt: 'crowbar 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crowbar.q4', senseId: 'crowbar.s1', errorType: 'meaning', type: '词源', prompt: '记 crowbar 时，哪句更稳妥？', options: ['先锁住「撬棍」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「撬棍」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['撬棍'] },
  });

  D('crowd', {
    etymology: {
      origin: '古英语 crudan「推挤」。',
      prefix: null,
      root: { text: 'crowd', gloss: '人群' },
      suffix: null,
      history: [
        { label: 'crowd', text: '古英语 crudan「推挤」。' },
        { label: '现在', text: '核心用法是：人群。' },
      ],
      formationLogic: '考试认现在的用法：人群。',
      mnemonic: '看到 crowd，先说出「人群」。',
      note: '考试认现在的用法：人群。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crowd.', chinese: '这一章反复回到同一个点：人群。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crowd.s1', en: 'Without that crowd, the next paragraph is hard to follow.', zh: '没有这个人群，下一段会很难读。', structure: 'crowd / 表示 / 人群', grammar: 'noun，围绕「人群」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crowd.', right: 'He gave me some advice about the crowd.', reason: 'advice 不可数。名词 crowd 的单复数按词典词形记。', rule: '先确定 crowd 是noun，再套「人群」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crowd.q1', senseId: 'crowd.s1', errorType: 'meaning', type: '词义选择', prompt: '「crowd」在本条的核心意思是：', options: ['人群', '完全相反的意思', '一种古代钱币'], answer: '人群', explain: 'crowd：人群。' },
      { id: 'crowd.q2', senseId: 'crowd.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crowd?', options: ['人群', 'a kind of ancient coin', 'the past tense of be'], answer: '人群', explain: '对的是「人群」。' },
      { id: 'crowd.q3', senseId: 'crowd.s1', errorType: 'grammar', type: '词义选择', prompt: 'crowd 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crowd.q4', senseId: 'crowd.s1', errorType: 'meaning', type: '词源', prompt: '记 crowd 时，哪句更稳妥？', options: ['先锁住「人群」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人群」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人群'] },
  });

  D('crowded', {
    etymology: {
      origin: '现代英语常用词「crowded」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crowded', gloss: '拥挤的' },
      suffix: null,
      history: [
        { label: 'crowded', text: '现代英语常用词「crowded」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拥挤的。' },
      ],
      formationLogic: '核心义：拥挤的。',
      mnemonic: '看到 crowded，先说出「拥挤的」。',
      note: '核心义：拥挤的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crowded.', chinese: '即使是初读者也能看出，这个结果是拥挤的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crowded.s1', en: 'They wanted a crowded answer, not a long speech.', zh: '他们要一个拥挤的的答复，不要长篇发言。', structure: 'crowded / 表示 / 拥挤的', grammar: 'adjective，围绕「拥挤的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crowded.', right: 'The news is crowded.', reason: 'news 作主语时动词用单数。', rule: '先确定 crowded 是adjective，再套「拥挤的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crowded.q1', senseId: 'crowded.s1', errorType: 'meaning', type: '词义选择', prompt: '「crowded」在本条的核心意思是：', options: ['拥挤的', '完全相反的意思', '一种古代钱币'], answer: '拥挤的', explain: 'crowded：拥挤的。' },
      { id: 'crowded.q2', senseId: 'crowded.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crowded?', options: ['拥挤的', 'a kind of ancient coin', 'the past tense of be'], answer: '拥挤的', explain: '对的是「拥挤的」。' },
      { id: 'crowded.q3', senseId: 'crowded.s1', errorType: 'grammar', type: '词义选择', prompt: 'crowded 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crowded.q4', senseId: 'crowded.s1', errorType: 'meaning', type: '词源', prompt: '记 crowded 时，哪句更稳妥？', options: ['先锁住「拥挤的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拥挤的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拥挤的'] },
  });

  D('crown', {
    etymology: {
      origin: '拉丁语 corona「花环、王冠」。',
      prefix: null,
      root: { text: 'crown', gloss: '王冠' },
      suffix: null,
      history: [
        { label: 'crown', text: '拉丁语 corona「花环、王冠」。' },
        { label: '现在', text: '核心用法是：王冠。' },
      ],
      formationLogic: '考试认现在的用法：王冠。',
      mnemonic: '看到 crown，先说出「王冠」。',
      note: '考试认现在的用法：王冠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crown.', chinese: '这一章反复回到同一个点：王冠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crown.s1', en: 'Without that crown, the next paragraph is hard to follow.', zh: '没有这个王冠，下一段会很难读。', structure: 'crown / 表示 / 王冠', grammar: 'noun，围绕「王冠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crown.', right: 'He gave me some advice about the crown.', reason: 'advice 不可数。名词 crown 的单复数按词典词形记。', rule: '先确定 crown 是noun，再套「王冠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crown.q1', senseId: 'crown.s1', errorType: 'meaning', type: '词义选择', prompt: '「crown」在本条的核心意思是：', options: ['王冠', '完全相反的意思', '一种古代钱币'], answer: '王冠', explain: 'crown：王冠。' },
      { id: 'crown.q2', senseId: 'crown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crown?', options: ['王冠', 'a kind of ancient coin', 'the past tense of be'], answer: '王冠', explain: '对的是「王冠」。' },
      { id: 'crown.q3', senseId: 'crown.s1', errorType: 'grammar', type: '词义选择', prompt: 'crown 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crown.q4', senseId: 'crown.s1', errorType: 'meaning', type: '词源', prompt: '记 crown 时，哪句更稳妥？', options: ['先锁住「王冠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「王冠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['王冠'] },
  });

  D('crucial', {
    etymology: {
      origin: '拉丁语 crux「十字、关口」。到了十字路口，所以关键。',
      prefix: null,
      root: { text: 'crucial', gloss: '关键的' },
      suffix: null,
      history: [
        { label: 'crucial', text: '拉丁语 crux「十字、关口」。到了十字路口，所以关键。' },
        { label: '现在', text: '核心用法是：关键的。' },
      ],
      formationLogic: '考试认现在的用法：关键的。',
      mnemonic: '看到 crucial，先说出「关键的」。',
      note: '考试认现在的用法：关键的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crucial.', chinese: '即使是初读者也能看出，这个结果是关键的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crucial.s1', en: 'They wanted a crucial answer, not a long speech.', zh: '他们要一个关键的的答复，不要长篇发言。', structure: 'crucial / 表示 / 关键的', grammar: 'adjective，围绕「关键的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crucial.', right: 'The news is crucial.', reason: 'news 作主语时动词用单数。', rule: '先确定 crucial 是adjective，再套「关键的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crucial.q1', senseId: 'crucial.s1', errorType: 'meaning', type: '词义选择', prompt: '「crucial」在本条的核心意思是：', options: ['关键的', '完全相反的意思', '一种古代钱币'], answer: '关键的', explain: 'crucial：关键的。' },
      { id: 'crucial.q2', senseId: 'crucial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crucial?', options: ['关键的', 'a kind of ancient coin', 'the past tense of be'], answer: '关键的', explain: '对的是「关键的」。' },
      { id: 'crucial.q3', senseId: 'crucial.s1', errorType: 'grammar', type: '词义选择', prompt: 'crucial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crucial.q4', senseId: 'crucial.s1', errorType: 'meaning', type: '词源', prompt: '记 crucial 时，哪句更稳妥？', options: ['先锁住「关键的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「关键的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['关键的'] },
  });

  D('crude', {
    etymology: {
      origin: '现代英语常用词「crude」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crude', gloss: '天然的' },
      suffix: null,
      history: [
        { label: 'crude', text: '现代英语常用词「crude」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：天然的。' },
      ],
      formationLogic: '核心义：天然的。',
      mnemonic: '看到 crude，先说出「天然的」。',
      note: '核心义：天然的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crude.', chinese: '即使是初读者也能看出，这个结果是天然的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crude.s1', en: 'They wanted a crude answer, not a long speech.', zh: '他们要一个天然的的答复，不要长篇发言。', structure: 'crude / 表示 / 天然的', grammar: 'adjective，围绕「天然的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crude.', right: 'The news is crude.', reason: 'news 作主语时动词用单数。', rule: '先确定 crude 是adjective，再套「天然的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crude.q1', senseId: 'crude.s1', errorType: 'meaning', type: '词义选择', prompt: '「crude」在本条的核心意思是：', options: ['天然的', '完全相反的意思', '一种古代钱币'], answer: '天然的', explain: 'crude：天然的。' },
      { id: 'crude.q2', senseId: 'crude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crude?', options: ['天然的', 'a kind of ancient coin', 'the past tense of be'], answer: '天然的', explain: '对的是「天然的」。' },
      { id: 'crude.q3', senseId: 'crude.s1', errorType: 'grammar', type: '词义选择', prompt: 'crude 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crude.q4', senseId: 'crude.s1', errorType: 'meaning', type: '词源', prompt: '记 crude 时，哪句更稳妥？', options: ['先锁住「天然的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「天然的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['天然的'] },
  });

  D('cruel', {
    etymology: {
      origin: '拉丁语 crudelis。',
      prefix: null,
      root: { text: 'cruel', gloss: '残酷的' },
      suffix: null,
      history: [
        { label: 'cruel', text: '拉丁语 crudelis。' },
        { label: '现在', text: '核心用法是：残酷的。' },
      ],
      formationLogic: '考试认现在的用法：残酷的。',
      mnemonic: '看到 cruel，先说出「残酷的」。',
      note: '考试认现在的用法：残酷的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cruel.', chinese: '即使是初读者也能看出，这个结果是残酷的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cruel.s1', en: 'They wanted a cruel answer, not a long speech.', zh: '他们要一个残酷的的答复，不要长篇发言。', structure: 'cruel / 表示 / 残酷的', grammar: 'adjective，围绕「残酷的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cruel.', right: 'The news is cruel.', reason: 'news 作主语时动词用单数。', rule: '先确定 cruel 是adjective，再套「残酷的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cruel.q1', senseId: 'cruel.s1', errorType: 'meaning', type: '词义选择', prompt: '「cruel」在本条的核心意思是：', options: ['残酷的', '完全相反的意思', '一种古代钱币'], answer: '残酷的', explain: 'cruel：残酷的。' },
      { id: 'cruel.q2', senseId: 'cruel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cruel?', options: ['残酷的', 'a kind of ancient coin', 'the past tense of be'], answer: '残酷的', explain: '对的是「残酷的」。' },
      { id: 'cruel.q3', senseId: 'cruel.s1', errorType: 'grammar', type: '词义选择', prompt: 'cruel 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cruel.q4', senseId: 'cruel.s1', errorType: 'meaning', type: '词源', prompt: '记 cruel 时，哪句更稳妥？', options: ['先锁住「残酷的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「残酷的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['残酷的'] },
  });

  D('cruelty-free', {
    etymology: {
      origin: '现代英语常用词「cruelty-free」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cruelty-free', gloss: '非动物实验的' },
      suffix: null,
      history: [
        { label: 'cruelty-free', text: '现代英语常用词「cruelty-free」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：非动物实验的。' },
      ],
      formationLogic: '核心义：非动物实验的。',
      mnemonic: '看到 cruelty-free，先说出「非动物实验的」。',
      note: '核心义：非动物实验的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cruelty-free.', chinese: '即使是初读者也能看出，这个结果是非动物实验的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cruelty-free.s1', en: 'They wanted a cruelty-free answer, not a long speech.', zh: '他们要一个非动物实验的的答复，不要长篇发言。', structure: 'cruelty-free / 表示 / 非动物实验的', grammar: 'adjective，围绕「非动物实验的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cruelty-free.', right: 'The news is cruelty-free.', reason: 'news 作主语时动词用单数。', rule: '先确定 cruelty-free 是adjective，再套「非动物实验的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cruelty-free.q1', senseId: 'cruelty-free.s1', errorType: 'meaning', type: '词义选择', prompt: '「cruelty-free」在本条的核心意思是：', options: ['非动物实验的', '完全相反的意思', '一种古代钱币'], answer: '非动物实验的', explain: 'cruelty-free：非动物实验的。' },
      { id: 'cruelty-free.q2', senseId: 'cruelty-free.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cruelty-free?', options: ['非动物实验的', 'a kind of ancient coin', 'the past tense of be'], answer: '非动物实验的', explain: '对的是「非动物实验的」。' },
      { id: 'cruelty-free.q3', senseId: 'cruelty-free.s1', errorType: 'grammar', type: '词义选择', prompt: 'cruelty-free 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cruelty-free.q4', senseId: 'cruelty-free.s1', errorType: 'meaning', type: '词源', prompt: '记 cruelty-free 时，哪句更稳妥？', options: ['先锁住「非动物实验的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「非动物实验的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['非动物实验的'] },
  });

  D('cruise', {
    etymology: {
      origin: '现代英语常用词「cruise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cruise', gloss: '航游' },
      suffix: null,
      history: [
        { label: 'cruise', text: '现代英语常用词「cruise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：航游。' },
      ],
      formationLogic: '核心义：航游。',
      mnemonic: '看到 cruise，先说出「航游」。',
      note: '核心义：航游。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cruise.', chinese: '这一章反复回到同一个点：航游。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cruise.s1', en: 'Without that cruise, the next paragraph is hard to follow.', zh: '没有这个航游，下一段会很难读。', structure: 'cruise / 表示 / 航游', grammar: 'noun，围绕「航游」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cruise.', right: 'He gave me some advice about the cruise.', reason: 'advice 不可数。名词 cruise 的单复数按词典词形记。', rule: '先确定 cruise 是noun，再套「航游」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cruise.q1', senseId: 'cruise.s1', errorType: 'meaning', type: '词义选择', prompt: '「cruise」在本条的核心意思是：', options: ['航游', '完全相反的意思', '一种古代钱币'], answer: '航游', explain: 'cruise：航游。' },
      { id: 'cruise.q2', senseId: 'cruise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cruise?', options: ['航游', 'a kind of ancient coin', 'the past tense of be'], answer: '航游', explain: '对的是「航游」。' },
      { id: 'cruise.q3', senseId: 'cruise.s1', errorType: 'grammar', type: '词义选择', prompt: 'cruise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cruise.q4', senseId: 'cruise.s1', errorType: 'meaning', type: '词源', prompt: '记 cruise 时，哪句更稳妥？', options: ['先锁住「航游」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「航游」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['航游'] },
  });

  D('crumble', {
    etymology: {
      origin: '现代英语常用词「crumble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crumble', gloss: '弄碎' },
      suffix: null,
      history: [
        { label: 'crumble', text: '现代英语常用词「crumble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：弄碎。' },
      ],
      formationLogic: '核心义：弄碎。',
      mnemonic: '看到 crumble，先说出「弄碎」。',
      note: '核心义：弄碎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to crumble before the office closed.', chinese: '他们同意在办公室关门前做这件事：弄碎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crumble.s1', en: 'The deadline forced the team to crumble that afternoon.', zh: '截止日期逼着小组在那天下午弄碎。', structure: 'crumble / 表示 / 弄碎', grammar: 'verb，围绕「弄碎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She crumbleed it yesterday without checking the real past form.', right: 'Check the past form of "crumble" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 crumble 是verb，再套「弄碎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crumble.q1', senseId: 'crumble.s1', errorType: 'meaning', type: '词义选择', prompt: '「crumble」在本条的核心意思是：', options: ['弄碎', '完全相反的意思', '一种古代钱币'], answer: '弄碎', explain: 'crumble：弄碎。' },
      { id: 'crumble.q2', senseId: 'crumble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crumble?', options: ['弄碎', 'a kind of ancient coin', 'the past tense of be'], answer: '弄碎', explain: '对的是「弄碎」。' },
      { id: 'crumble.q3', senseId: 'crumble.s1', errorType: 'grammar', type: '词义选择', prompt: 'crumble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'crumble.q4', senseId: 'crumble.s1', errorType: 'meaning', type: '词源', prompt: '记 crumble 时，哪句更稳妥？', options: ['先锁住「弄碎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「弄碎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['弄碎'] },
  });

  D('crunch', {
    etymology: {
      origin: '现代英语常用词「crunch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crunch', gloss: '嘎吱声' },
      suffix: null,
      history: [
        { label: 'crunch', text: '现代英语常用词「crunch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：嘎吱声。' },
      ],
      formationLogic: '核心义：嘎吱声。',
      mnemonic: '看到 crunch，先说出「嘎吱声」。',
      note: '核心义：嘎吱声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crunch.', chinese: '这一章反复回到同一个点：嘎吱声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crunch.s1', en: 'Without that crunch, the next paragraph is hard to follow.', zh: '没有这个嘎吱声，下一段会很难读。', structure: 'crunch / 表示 / 嘎吱声', grammar: 'noun，围绕「嘎吱声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crunch.', right: 'He gave me some advice about the crunch.', reason: 'advice 不可数。名词 crunch 的单复数按词典词形记。', rule: '先确定 crunch 是noun，再套「嘎吱声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crunch.q1', senseId: 'crunch.s1', errorType: 'meaning', type: '词义选择', prompt: '「crunch」在本条的核心意思是：', options: ['嘎吱声', '完全相反的意思', '一种古代钱币'], answer: '嘎吱声', explain: 'crunch：嘎吱声。' },
      { id: 'crunch.q2', senseId: 'crunch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crunch?', options: ['嘎吱声', 'a kind of ancient coin', 'the past tense of be'], answer: '嘎吱声', explain: '对的是「嘎吱声」。' },
      { id: 'crunch.q3', senseId: 'crunch.s1', errorType: 'grammar', type: '词义选择', prompt: 'crunch 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crunch.q4', senseId: 'crunch.s1', errorType: 'meaning', type: '词源', prompt: '记 crunch 时，哪句更稳妥？', options: ['先锁住「嘎吱声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嘎吱声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嘎吱声'] },
  });

  D('crunchy', {
    etymology: {
      origin: '现代英语常用词「crunchy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crunchy', gloss: '嘎吱脆的' },
      suffix: null,
      history: [
        { label: 'crunchy', text: '现代英语常用词「crunchy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：嘎吱脆的。' },
      ],
      formationLogic: '核心义：嘎吱脆的。',
      mnemonic: '看到 crunchy，先说出「嘎吱脆的」。',
      note: '核心义：嘎吱脆的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crunchy.', chinese: '即使是初读者也能看出，这个结果是嘎吱脆的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crunchy.s1', en: 'They wanted a crunchy answer, not a long speech.', zh: '他们要一个嘎吱脆的的答复，不要长篇发言。', structure: 'crunchy / 表示 / 嘎吱脆的', grammar: 'adjective，围绕「嘎吱脆的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crunchy.', right: 'The news is crunchy.', reason: 'news 作主语时动词用单数。', rule: '先确定 crunchy 是adjective，再套「嘎吱脆的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crunchy.q1', senseId: 'crunchy.s1', errorType: 'meaning', type: '词义选择', prompt: '「crunchy」在本条的核心意思是：', options: ['嘎吱脆的', '完全相反的意思', '一种古代钱币'], answer: '嘎吱脆的', explain: 'crunchy：嘎吱脆的。' },
      { id: 'crunchy.q2', senseId: 'crunchy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crunchy?', options: ['嘎吱脆的', 'a kind of ancient coin', 'the past tense of be'], answer: '嘎吱脆的', explain: '对的是「嘎吱脆的」。' },
      { id: 'crunchy.q3', senseId: 'crunchy.s1', errorType: 'grammar', type: '词义选择', prompt: 'crunchy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crunchy.q4', senseId: 'crunchy.s1', errorType: 'meaning', type: '词源', prompt: '记 crunchy 时，哪句更稳妥？', options: ['先锁住「嘎吱脆的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嘎吱脆的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嘎吱脆的'] },
  });

  D('crush', {
    etymology: {
      origin: '古法语 cruisi「打碎」。',
      prefix: null,
      root: { text: 'crush', gloss: '压碎' },
      suffix: null,
      history: [
        { label: 'crush', text: '古法语 cruisi「打碎」。' },
        { label: '现在', text: '核心用法是：压碎。' },
      ],
      formationLogic: '考试认现在的用法：压碎。',
      mnemonic: '看到 crush，先说出「压碎」。',
      note: '考试认现在的用法：压碎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to crush before the office closed.', chinese: '他们同意在办公室关门前做这件事：压碎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crush.s1', en: 'The deadline forced the team to crush that afternoon.', zh: '截止日期逼着小组在那天下午压碎。', structure: 'crush / 表示 / 压碎', grammar: 'verb，围绕「压碎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She crushed it yesterday without checking the real past form.', right: 'Check the past form of "crush" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 crush 是verb，再套「压碎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crush.q1', senseId: 'crush.s1', errorType: 'meaning', type: '词义选择', prompt: '「crush」在本条的核心意思是：', options: ['压碎', '完全相反的意思', '一种古代钱币'], answer: '压碎', explain: 'crush：压碎。' },
      { id: 'crush.q2', senseId: 'crush.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crush?', options: ['压碎', 'a kind of ancient coin', 'the past tense of be'], answer: '压碎', explain: '对的是「压碎」。' },
      { id: 'crush.q3', senseId: 'crush.s1', errorType: 'grammar', type: '词义选择', prompt: 'crush 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'crush.q4', senseId: 'crush.s1', errorType: 'meaning', type: '词源', prompt: '记 crush 时，哪句更稳妥？', options: ['先锁住「压碎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「压碎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['压碎'] },
  });

  D('crust', {
    etymology: {
      origin: '现代英语常用词「crust」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crust', gloss: '（面包）皮' },
      suffix: null,
      history: [
        { label: 'crust', text: '现代英语常用词「crust」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（面包）皮。' },
      ],
      formationLogic: '核心义：（面包）皮。',
      mnemonic: '看到 crust，先说出「（面包）皮」。',
      note: '核心义：（面包）皮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crust.', chinese: '这一章反复回到同一个点：（面包）皮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crust.s1', en: 'Without that crust, the next paragraph is hard to follow.', zh: '没有这个（面包）皮，下一段会很难读。', structure: 'crust / 表示 / （面包）皮', grammar: 'noun，围绕「（面包）皮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crust.', right: 'He gave me some advice about the crust.', reason: 'advice 不可数。名词 crust 的单复数按词典词形记。', rule: '先确定 crust 是noun，再套「（面包）皮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crust.q1', senseId: 'crust.s1', errorType: 'meaning', type: '词义选择', prompt: '「crust」在本条的核心意思是：', options: ['（面包）皮', '完全相反的意思', '一种古代钱币'], answer: '（面包）皮', explain: 'crust：（面包）皮。' },
      { id: 'crust.q2', senseId: 'crust.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crust?', options: ['（面包）皮', 'a kind of ancient coin', 'the past tense of be'], answer: '（面包）皮', explain: '对的是「（面包）皮」。' },
      { id: 'crust.q3', senseId: 'crust.s1', errorType: 'grammar', type: '词义选择', prompt: 'crust 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crust.q4', senseId: 'crust.s1', errorType: 'meaning', type: '词源', prompt: '记 crust 时，哪句更稳妥？', options: ['先锁住「（面包）皮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（面包）皮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（面包）皮'] },
  });

  D('cry', {
    etymology: {
      origin: '拉丁语 quiritare「呼喊」。',
      prefix: null,
      root: { text: 'cry', gloss: '哭' },
      suffix: null,
      history: [
        { label: 'cry', text: '拉丁语 quiritare「呼喊」。' },
        { label: '现在', text: '核心用法是：哭。' },
      ],
      formationLogic: '考试认现在的用法：哭。',
      mnemonic: '看到 cry，先说出「哭」。',
      note: '考试认现在的用法：哭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cry before the office closed.', chinese: '他们同意在办公室关门前做这件事：哭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cry.s1', en: 'The deadline forced the team to cry that afternoon.', zh: '截止日期逼着小组在那天下午哭。', structure: 'cry / 表示 / 哭', grammar: 'verb，围绕「哭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cryed it yesterday without checking the real past form.', right: 'Check the past form of "cry" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cry 是verb，再套「哭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cry.q1', senseId: 'cry.s1', errorType: 'meaning', type: '词义选择', prompt: '「cry」在本条的核心意思是：', options: ['哭', '完全相反的意思', '一种古代钱币'], answer: '哭', explain: 'cry：哭。' },
      { id: 'cry.q2', senseId: 'cry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cry?', options: ['哭', 'a kind of ancient coin', 'the past tense of be'], answer: '哭', explain: '对的是「哭」。' },
      { id: 'cry.q3', senseId: 'cry.s1', errorType: 'grammar', type: '词义选择', prompt: 'cry 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cry.q4', senseId: 'cry.s1', errorType: 'meaning', type: '词源', prompt: '记 cry 时，哪句更稳妥？', options: ['先锁住「哭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哭'] },
  });

  D('cry out', {
    etymology: {
      origin: '现代英语固定说法「cry out」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cry out', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cry out', text: '现代英语固定说法「cry out」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：大叫。' },
      ],
      formationLogic: '核心义：大叫。',
      mnemonic: '看到 cry out，先说出「大叫」。',
      note: '核心义：大叫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cry out" and asked the class to keep it as one unit.', chinese: '老师把「cry out」圈出来，让全班把它当成一个整体。它表示大叫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cry out.s1', en: 'In the margin she wrote "cry out" so nobody would split the phrase.', zh: '她在页边写下「cry out」，免得有人把这个说法拆开。意思是大叫。', structure: 'cry out / 表示 / 大叫', grammar: 'verb，围绕「大叫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cry out and lost the point.', right: 'Keep "cry out" together: it means 大叫.', reason: '「cry out」要整块理解。', rule: '先确定 cry out 是verb，再套「大叫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cry out.q1', senseId: 'cry out.s1', errorType: 'meaning', type: '词义选择', prompt: '「cry out」在本条的核心意思是：', options: ['大叫', '完全相反的意思', '一种古代钱币'], answer: '大叫', explain: 'cry out：大叫。' },
      { id: 'cry out.q2', senseId: 'cry out.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cry out?', options: ['大叫', 'a kind of ancient coin', 'the past tense of be'], answer: '大叫', explain: '对的是「大叫」。' },
      { id: 'cry out.q3', senseId: 'cry out.s1', errorType: 'grammar', type: '词义选择', prompt: 'cry out 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cry out.q4', senseId: 'cry out.s1', errorType: 'meaning', type: '词源', prompt: '记 cry out 时，哪句更稳妥？', options: ['先锁住「大叫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大叫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大叫'] },
  });

  D('crystal', {
    etymology: {
      origin: '英语派生：cryst + -al，词性转到「水晶」。',
      prefix: null,
      root: { text: 'cryst', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'crystal', text: '英语派生：cryst + -al，词性转到「水晶」。' },
        { label: '现在', text: '核心用法是：水晶。' },
      ],
      formationLogic: '先认词干 cryst，再看词尾。',
      mnemonic: '看到 crystal，先说出「水晶」。',
      note: '先认词干 cryst，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crystal.', chinese: '这一章反复回到同一个点：水晶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crystal.s1', en: 'Without that crystal, the next paragraph is hard to follow.', zh: '没有这个水晶，下一段会很难读。', structure: 'crystal / 表示 / 水晶', grammar: 'noun，围绕「水晶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crystal.', right: 'He gave me some advice about the crystal.', reason: 'advice 不可数。名词 crystal 的单复数按词典词形记。', rule: '先确定 crystal 是noun，再套「水晶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crystal.q1', senseId: 'crystal.s1', errorType: 'meaning', type: '词义选择', prompt: '「crystal」在本条的核心意思是：', options: ['水晶', '完全相反的意思', '一种古代钱币'], answer: '水晶', explain: 'crystal：水晶。' },
      { id: 'crystal.q2', senseId: 'crystal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crystal?', options: ['水晶', 'a kind of ancient coin', 'the past tense of be'], answer: '水晶', explain: '对的是「水晶」。' },
      { id: 'crystal.q3', senseId: 'crystal.s1', errorType: 'grammar', type: '词义选择', prompt: 'crystal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crystal.q4', senseId: 'crystal.s1', errorType: 'meaning', type: '词源', prompt: '记 crystal 时，哪句更稳妥？', options: ['先锁住「水晶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「水晶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['水晶'] },
  });

  D('cub', {
    etymology: {
      origin: '现代英语常用词「cub」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cub', gloss: '幼兽' },
      suffix: null,
      history: [
        { label: 'cub', text: '现代英语常用词「cub」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：幼兽。' },
      ],
      formationLogic: '核心义：幼兽。',
      mnemonic: '看到 cub，先说出「幼兽」。',
      note: '核心义：幼兽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cub.', chinese: '这一章反复回到同一个点：幼兽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cub.s1', en: 'Without that cub, the next paragraph is hard to follow.', zh: '没有这个幼兽，下一段会很难读。', structure: 'cub / 表示 / 幼兽', grammar: 'noun，围绕「幼兽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cub.', right: 'He gave me some advice about the cub.', reason: 'advice 不可数。名词 cub 的单复数按词典词形记。', rule: '先确定 cub 是noun，再套「幼兽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cub.q1', senseId: 'cub.s1', errorType: 'meaning', type: '词义选择', prompt: '「cub」在本条的核心意思是：', options: ['幼兽', '完全相反的意思', '一种古代钱币'], answer: '幼兽', explain: 'cub：幼兽。' },
      { id: 'cub.q2', senseId: 'cub.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cub?', options: ['幼兽', 'a kind of ancient coin', 'the past tense of be'], answer: '幼兽', explain: '对的是「幼兽」。' },
      { id: 'cub.q3', senseId: 'cub.s1', errorType: 'grammar', type: '词义选择', prompt: 'cub 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cub.q4', senseId: 'cub.s1', errorType: 'meaning', type: '词源', prompt: '记 cub 时，哪句更稳妥？', options: ['先锁住「幼兽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「幼兽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['幼兽'] },
  });

  D('cube', {
    etymology: {
      origin: '现代英语常用词「cube」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cube', gloss: '立方体' },
      suffix: null,
      history: [
        { label: 'cube', text: '现代英语常用词「cube」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：立方体。' },
      ],
      formationLogic: '核心义：立方体。',
      mnemonic: '看到 cube，先说出「立方体」。',
      note: '核心义：立方体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cube.', chinese: '这一章反复回到同一个点：立方体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cube.s1', en: 'Without that cube, the next paragraph is hard to follow.', zh: '没有这个立方体，下一段会很难读。', structure: 'cube / 表示 / 立方体', grammar: 'noun，围绕「立方体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cube.', right: 'He gave me some advice about the cube.', reason: 'advice 不可数。名词 cube 的单复数按词典词形记。', rule: '先确定 cube 是noun，再套「立方体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cube.q1', senseId: 'cube.s1', errorType: 'meaning', type: '词义选择', prompt: '「cube」在本条的核心意思是：', options: ['立方体', '完全相反的意思', '一种古代钱币'], answer: '立方体', explain: 'cube：立方体。' },
      { id: 'cube.q2', senseId: 'cube.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cube?', options: ['立方体', 'a kind of ancient coin', 'the past tense of be'], answer: '立方体', explain: '对的是「立方体」。' },
      { id: 'cube.q3', senseId: 'cube.s1', errorType: 'grammar', type: '词义选择', prompt: 'cube 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cube.q4', senseId: 'cube.s1', errorType: 'meaning', type: '词源', prompt: '记 cube 时，哪句更稳妥？', options: ['先锁住「立方体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「立方体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['立方体'] },
  });

  D('cucumber', {
    etymology: {
      origin: '英语派生：cucumb + -er，词性转到「黄瓜」。',
      prefix: null,
      root: { text: 'cucumb', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cucumber', text: '英语派生：cucumb + -er，词性转到「黄瓜」。' },
        { label: '现在', text: '核心用法是：黄瓜。' },
      ],
      formationLogic: '先认词干 cucumb，再看词尾。',
      mnemonic: '看到 cucumber，先说出「黄瓜」。',
      note: '先认词干 cucumb，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cucumber.', chinese: '这一章反复回到同一个点：黄瓜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cucumber.s1', en: 'Without that cucumber, the next paragraph is hard to follow.', zh: '没有这个黄瓜，下一段会很难读。', structure: 'cucumber / 表示 / 黄瓜', grammar: 'noun，围绕「黄瓜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cucumber.', right: 'He gave me some advice about the cucumber.', reason: 'advice 不可数。名词 cucumber 的单复数按词典词形记。', rule: '先确定 cucumber 是noun，再套「黄瓜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cucumber.q1', senseId: 'cucumber.s1', errorType: 'meaning', type: '词义选择', prompt: '「cucumber」在本条的核心意思是：', options: ['黄瓜', '完全相反的意思', '一种古代钱币'], answer: '黄瓜', explain: 'cucumber：黄瓜。' },
      { id: 'cucumber.q2', senseId: 'cucumber.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cucumber?', options: ['黄瓜', 'a kind of ancient coin', 'the past tense of be'], answer: '黄瓜', explain: '对的是「黄瓜」。' },
      { id: 'cucumber.q3', senseId: 'cucumber.s1', errorType: 'grammar', type: '词义选择', prompt: 'cucumber 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cucumber.q4', senseId: 'cucumber.s1', errorType: 'meaning', type: '词源', prompt: '记 cucumber 时，哪句更稳妥？', options: ['先锁住「黄瓜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黄瓜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黄瓜'] },
  });

  D('cuddle', {
    etymology: {
      origin: '现代英语常用词「cuddle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cuddle', gloss: '拥抱' },
      suffix: null,
      history: [
        { label: 'cuddle', text: '现代英语常用词「cuddle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拥抱。' },
      ],
      formationLogic: '核心义：拥抱。',
      mnemonic: '看到 cuddle，先说出「拥抱」。',
      note: '核心义：拥抱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cuddle before the office closed.', chinese: '他们同意在办公室关门前做这件事：拥抱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cuddle.s1', en: 'The deadline forced the team to cuddle that afternoon.', zh: '截止日期逼着小组在那天下午拥抱。', structure: 'cuddle / 表示 / 拥抱', grammar: 'verb，围绕「拥抱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cuddleed it yesterday without checking the real past form.', right: 'Check the past form of "cuddle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cuddle 是verb，再套「拥抱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cuddle.q1', senseId: 'cuddle.s1', errorType: 'meaning', type: '词义选择', prompt: '「cuddle」在本条的核心意思是：', options: ['拥抱', '完全相反的意思', '一种古代钱币'], answer: '拥抱', explain: 'cuddle：拥抱。' },
      { id: 'cuddle.q2', senseId: 'cuddle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cuddle?', options: ['拥抱', 'a kind of ancient coin', 'the past tense of be'], answer: '拥抱', explain: '对的是「拥抱」。' },
      { id: 'cuddle.q3', senseId: 'cuddle.s1', errorType: 'grammar', type: '词义选择', prompt: 'cuddle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cuddle.q4', senseId: 'cuddle.s1', errorType: 'meaning', type: '词源', prompt: '记 cuddle 时，哪句更稳妥？', options: ['先锁住「拥抱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拥抱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拥抱'] },
  });

  D('cue', {
    etymology: {
      origin: '现代英语常用词「cue」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cue', gloss: '提示' },
      suffix: null,
      history: [
        { label: 'cue', text: '现代英语常用词「cue」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：提示。' },
      ],
      formationLogic: '核心义：提示。',
      mnemonic: '看到 cue，先说出「提示」。',
      note: '核心义：提示。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cue.', chinese: '这一章反复回到同一个点：提示。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cue.s1', en: 'Without that cue, the next paragraph is hard to follow.', zh: '没有这个提示，下一段会很难读。', structure: 'cue / 表示 / 提示', grammar: 'noun，围绕「提示」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cue.', right: 'He gave me some advice about the cue.', reason: 'advice 不可数。名词 cue 的单复数按词典词形记。', rule: '先确定 cue 是noun，再套「提示」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cue.q1', senseId: 'cue.s1', errorType: 'meaning', type: '词义选择', prompt: '「cue」在本条的核心意思是：', options: ['提示', '完全相反的意思', '一种古代钱币'], answer: '提示', explain: 'cue：提示。' },
      { id: 'cue.q2', senseId: 'cue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cue?', options: ['提示', 'a kind of ancient coin', 'the past tense of be'], answer: '提示', explain: '对的是「提示」。' },
      { id: 'cue.q3', senseId: 'cue.s1', errorType: 'grammar', type: '词义选择', prompt: 'cue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cue.q4', senseId: 'cue.s1', errorType: 'meaning', type: '词源', prompt: '记 cue 时，哪句更稳妥？', options: ['先锁住「提示」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「提示」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['提示'] },
  });

  D('cuff', {
    etymology: {
      origin: '现代英语常用词「cuff」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cuff', gloss: '袖口' },
      suffix: null,
      history: [
        { label: 'cuff', text: '现代英语常用词「cuff」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：袖口。' },
      ],
      formationLogic: '核心义：袖口。',
      mnemonic: '看到 cuff，先说出「袖口」。',
      note: '核心义：袖口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cuff.', chinese: '这一章反复回到同一个点：袖口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cuff.s1', en: 'Without that cuff, the next paragraph is hard to follow.', zh: '没有这个袖口，下一段会很难读。', structure: 'cuff / 表示 / 袖口', grammar: 'noun，围绕「袖口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cuff.', right: 'He gave me some advice about the cuff.', reason: 'advice 不可数。名词 cuff 的单复数按词典词形记。', rule: '先确定 cuff 是noun，再套「袖口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cuff.q1', senseId: 'cuff.s1', errorType: 'meaning', type: '词义选择', prompt: '「cuff」在本条的核心意思是：', options: ['袖口', '完全相反的意思', '一种古代钱币'], answer: '袖口', explain: 'cuff：袖口。' },
      { id: 'cuff.q2', senseId: 'cuff.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cuff?', options: ['袖口', 'a kind of ancient coin', 'the past tense of be'], answer: '袖口', explain: '对的是「袖口」。' },
      { id: 'cuff.q3', senseId: 'cuff.s1', errorType: 'grammar', type: '词义选择', prompt: 'cuff 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cuff.q4', senseId: 'cuff.s1', errorType: 'meaning', type: '词源', prompt: '记 cuff 时，哪句更稳妥？', options: ['先锁住「袖口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「袖口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['袖口'] },
  });

  D('cuisine', {
    etymology: {
      origin: '现代英语常用词「cuisine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cuisine', gloss: '烹饪法' },
      suffix: null,
      history: [
        { label: 'cuisine', text: '现代英语常用词「cuisine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：烹饪法。' },
      ],
      formationLogic: '核心义：烹饪法。',
      mnemonic: '看到 cuisine，先说出「烹饪法」。',
      note: '核心义：烹饪法。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cuisine.', chinese: '这一章反复回到同一个点：烹饪法。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cuisine.s1', en: 'Without that cuisine, the next paragraph is hard to follow.', zh: '没有这个烹饪法，下一段会很难读。', structure: 'cuisine / 表示 / 烹饪法', grammar: 'noun，围绕「烹饪法」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cuisine.', right: 'He gave me some advice about the cuisine.', reason: 'advice 不可数。名词 cuisine 的单复数按词典词形记。', rule: '先确定 cuisine 是noun，再套「烹饪法」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cuisine.q1', senseId: 'cuisine.s1', errorType: 'meaning', type: '词义选择', prompt: '「cuisine」在本条的核心意思是：', options: ['烹饪法', '完全相反的意思', '一种古代钱币'], answer: '烹饪法', explain: 'cuisine：烹饪法。' },
      { id: 'cuisine.q2', senseId: 'cuisine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cuisine?', options: ['烹饪法', 'a kind of ancient coin', 'the past tense of be'], answer: '烹饪法', explain: '对的是「烹饪法」。' },
      { id: 'cuisine.q3', senseId: 'cuisine.s1', errorType: 'grammar', type: '词义选择', prompt: 'cuisine 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cuisine.q4', senseId: 'cuisine.s1', errorType: 'meaning', type: '词源', prompt: '记 cuisine 时，哪句更稳妥？', options: ['先锁住「烹饪法」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烹饪法」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烹饪法'] },
  });

  D('culminate', {
    etymology: {
      origin: '现代英语常用词「culminate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'culminate', gloss: '达到顶点' },
      suffix: null,
      history: [
        { label: 'culminate', text: '现代英语常用词「culminate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：达到顶点。' },
      ],
      formationLogic: '核心义：达到顶点。',
      mnemonic: '看到 culminate，先说出「达到顶点」。',
      note: '核心义：达到顶点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to culminate before the office closed.', chinese: '他们同意在办公室关门前做这件事：达到顶点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'culminate.s1', en: 'The deadline forced the team to culminate that afternoon.', zh: '截止日期逼着小组在那天下午达到顶点。', structure: 'culminate / 表示 / 达到顶点', grammar: 'verb，围绕「达到顶点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She culminateed it yesterday without checking the real past form.', right: 'Check the past form of "culminate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 culminate 是verb，再套「达到顶点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'culminate.q1', senseId: 'culminate.s1', errorType: 'meaning', type: '词义选择', prompt: '「culminate」在本条的核心意思是：', options: ['达到顶点', '完全相反的意思', '一种古代钱币'], answer: '达到顶点', explain: 'culminate：达到顶点。' },
      { id: 'culminate.q2', senseId: 'culminate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches culminate?', options: ['达到顶点', 'a kind of ancient coin', 'the past tense of be'], answer: '达到顶点', explain: '对的是「达到顶点」。' },
      { id: 'culminate.q3', senseId: 'culminate.s1', errorType: 'grammar', type: '词义选择', prompt: 'culminate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'culminate.q4', senseId: 'culminate.s1', errorType: 'meaning', type: '词源', prompt: '记 culminate 时，哪句更稳妥？', options: ['先锁住「达到顶点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「达到顶点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['达到顶点'] },
  });

  D('culpability', {
    etymology: {
      origin: '英语派生：culpabil + -ity，词性转到「罪责」。',
      prefix: null,
      root: { text: 'culpabil', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'culpability', text: '英语派生：culpabil + -ity，词性转到「罪责」。' },
        { label: '现在', text: '核心用法是：罪责。' },
      ],
      formationLogic: '先认词干 culpabil，再看词尾。',
      mnemonic: '看到 culpability，先说出「罪责」。',
      note: '先认词干 culpabil，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one culpability.', chinese: '这一章反复回到同一个点：罪责。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'culpability.s1', en: 'Without that culpability, the next paragraph is hard to follow.', zh: '没有这个罪责，下一段会很难读。', structure: 'culpability / 表示 / 罪责', grammar: 'noun，围绕「罪责」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the culpability.', right: 'He gave me some advice about the culpability.', reason: 'advice 不可数。名词 culpability 的单复数按词典词形记。', rule: '先确定 culpability 是noun，再套「罪责」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'culpability.q1', senseId: 'culpability.s1', errorType: 'meaning', type: '词义选择', prompt: '「culpability」在本条的核心意思是：', options: ['罪责', '完全相反的意思', '一种古代钱币'], answer: '罪责', explain: 'culpability：罪责。' },
      { id: 'culpability.q2', senseId: 'culpability.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches culpability?', options: ['罪责', 'a kind of ancient coin', 'the past tense of be'], answer: '罪责', explain: '对的是「罪责」。' },
      { id: 'culpability.q3', senseId: 'culpability.s1', errorType: 'grammar', type: '词义选择', prompt: 'culpability 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'culpability.q4', senseId: 'culpability.s1', errorType: 'meaning', type: '词源', prompt: '记 culpability 时，哪句更稳妥？', options: ['先锁住「罪责」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「罪责」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['罪责'] },
  });

  D('cult', {
    etymology: {
      origin: '现代英语常用词「cult」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cult', gloss: '异教' },
      suffix: null,
      history: [
        { label: 'cult', text: '现代英语常用词「cult」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：异教。' },
      ],
      formationLogic: '核心义：异教。',
      mnemonic: '看到 cult，先说出「异教」。',
      note: '核心义：异教。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cult.', chinese: '这一章反复回到同一个点：异教。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cult.s1', en: 'Without that cult, the next paragraph is hard to follow.', zh: '没有这个异教，下一段会很难读。', structure: 'cult / 表示 / 异教', grammar: 'noun，围绕「异教」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cult.', right: 'He gave me some advice about the cult.', reason: 'advice 不可数。名词 cult 的单复数按词典词形记。', rule: '先确定 cult 是noun，再套「异教」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cult.q1', senseId: 'cult.s1', errorType: 'meaning', type: '词义选择', prompt: '「cult」在本条的核心意思是：', options: ['异教', '完全相反的意思', '一种古代钱币'], answer: '异教', explain: 'cult：异教。' },
      { id: 'cult.q2', senseId: 'cult.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cult?', options: ['异教', 'a kind of ancient coin', 'the past tense of be'], answer: '异教', explain: '对的是「异教」。' },
      { id: 'cult.q3', senseId: 'cult.s1', errorType: 'grammar', type: '词义选择', prompt: 'cult 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cult.q4', senseId: 'cult.s1', errorType: 'meaning', type: '词源', prompt: '记 cult 时，哪句更稳妥？', options: ['先锁住「异教」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「异教」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['异教'] },
  });

  D('cultivate', {
    etymology: {
      origin: '现代英语常用词「cultivate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cultivate', gloss: '耕作' },
      suffix: null,
      history: [
        { label: 'cultivate', text: '现代英语常用词「cultivate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：耕作。' },
      ],
      formationLogic: '核心义：耕作。',
      mnemonic: '看到 cultivate，先说出「耕作」。',
      note: '核心义：耕作。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cultivate before the office closed.', chinese: '他们同意在办公室关门前做这件事：耕作。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cultivate.s1', en: 'The deadline forced the team to cultivate that afternoon.', zh: '截止日期逼着小组在那天下午耕作。', structure: 'cultivate / 表示 / 耕作', grammar: 'verb，围绕「耕作」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cultivateed it yesterday without checking the real past form.', right: 'Check the past form of "cultivate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cultivate 是verb，再套「耕作」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cultivate.q1', senseId: 'cultivate.s1', errorType: 'meaning', type: '词义选择', prompt: '「cultivate」在本条的核心意思是：', options: ['耕作', '完全相反的意思', '一种古代钱币'], answer: '耕作', explain: 'cultivate：耕作。' },
      { id: 'cultivate.q2', senseId: 'cultivate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cultivate?', options: ['耕作', 'a kind of ancient coin', 'the past tense of be'], answer: '耕作', explain: '对的是「耕作」。' },
      { id: 'cultivate.q3', senseId: 'cultivate.s1', errorType: 'grammar', type: '词义选择', prompt: 'cultivate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cultivate.q4', senseId: 'cultivate.s1', errorType: 'meaning', type: '词源', prompt: '记 cultivate 时，哪句更稳妥？', options: ['先锁住「耕作」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耕作」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耕作'] },
  });

  D('cultural', {
    etymology: {
      origin: '英语派生：cultur + -al，词性转到「文化的」。',
      prefix: null,
      root: { text: 'cultur', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cultural', text: '英语派生：cultur + -al，词性转到「文化的」。' },
        { label: '现在', text: '核心用法是：文化的。' },
      ],
      formationLogic: '先认词干 cultur，再看词尾。',
      mnemonic: '看到 cultural，先说出「文化的」。',
      note: '先认词干 cultur，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cultural.', chinese: '即使是初读者也能看出，这个结果是文化的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cultural.s1', en: 'They wanted a cultural answer, not a long speech.', zh: '他们要一个文化的的答复，不要长篇发言。', structure: 'cultural / 表示 / 文化的', grammar: 'adjective，围绕「文化的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cultural.', right: 'The news is cultural.', reason: 'news 作主语时动词用单数。', rule: '先确定 cultural 是adjective，再套「文化的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cultural.q1', senseId: 'cultural.s1', errorType: 'meaning', type: '词义选择', prompt: '「cultural」在本条的核心意思是：', options: ['文化的', '完全相反的意思', '一种古代钱币'], answer: '文化的', explain: 'cultural：文化的。' },
      { id: 'cultural.q2', senseId: 'cultural.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cultural?', options: ['文化的', 'a kind of ancient coin', 'the past tense of be'], answer: '文化的', explain: '对的是「文化的」。' },
      { id: 'cultural.q3', senseId: 'cultural.s1', errorType: 'grammar', type: '词义选择', prompt: 'cultural 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cultural.q4', senseId: 'cultural.s1', errorType: 'meaning', type: '词源', prompt: '记 cultural 时，哪句更稳妥？', options: ['先锁住「文化的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文化的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文化的'] },
  });

  D('culture', {
    etymology: {
      origin: '拉丁语 cultura「耕种」。耕种心灵，所以文化。',
      prefix: null,
      root: { text: 'culture', gloss: '文化' },
      suffix: null,
      history: [
        { label: 'culture', text: '拉丁语 cultura「耕种」。耕种心灵，所以文化。' },
        { label: '现在', text: '核心用法是：文化。' },
      ],
      formationLogic: '考试认现在的用法：文化。',
      mnemonic: '看到 culture，先说出「文化」。',
      note: '考试认现在的用法：文化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one culture.', chinese: '这一章反复回到同一个点：文化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'culture.s1', en: 'Without that culture, the next paragraph is hard to follow.', zh: '没有这个文化，下一段会很难读。', structure: 'culture / 表示 / 文化', grammar: 'noun，围绕「文化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the culture.', right: 'He gave me some advice about the culture.', reason: 'advice 不可数。名词 culture 的单复数按词典词形记。', rule: '先确定 culture 是noun，再套「文化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'culture.q1', senseId: 'culture.s1', errorType: 'meaning', type: '词义选择', prompt: '「culture」在本条的核心意思是：', options: ['文化', '完全相反的意思', '一种古代钱币'], answer: '文化', explain: 'culture：文化。' },
      { id: 'culture.q2', senseId: 'culture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches culture?', options: ['文化', 'a kind of ancient coin', 'the past tense of be'], answer: '文化', explain: '对的是「文化」。' },
      { id: 'culture.q3', senseId: 'culture.s1', errorType: 'grammar', type: '词义选择', prompt: 'culture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'culture.q4', senseId: 'culture.s1', errorType: 'meaning', type: '词源', prompt: '记 culture 时，哪句更稳妥？', options: ['先锁住「文化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文化'] },
  });

  D('cumulative', {
    etymology: {
      origin: '英语派生：cumulat + -ive，词性转到「累积的」。',
      prefix: null,
      root: { text: 'cumulat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cumulative', text: '英语派生：cumulat + -ive，词性转到「累积的」。' },
        { label: '现在', text: '核心用法是：累积的。' },
      ],
      formationLogic: '先认词干 cumulat，再看词尾。',
      mnemonic: '看到 cumulative，先说出「累积的」。',
      note: '先认词干 cumulat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cumulative.', chinese: '即使是初读者也能看出，这个结果是累积的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cumulative.s1', en: 'They wanted a cumulative answer, not a long speech.', zh: '他们要一个累积的的答复，不要长篇发言。', structure: 'cumulative / 表示 / 累积的', grammar: 'adjective，围绕「累积的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cumulative.', right: 'The news is cumulative.', reason: 'news 作主语时动词用单数。', rule: '先确定 cumulative 是adjective，再套「累积的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cumulative.q1', senseId: 'cumulative.s1', errorType: 'meaning', type: '词义选择', prompt: '「cumulative」在本条的核心意思是：', options: ['累积的', '完全相反的意思', '一种古代钱币'], answer: '累积的', explain: 'cumulative：累积的。' },
      { id: 'cumulative.q2', senseId: 'cumulative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cumulative?', options: ['累积的', 'a kind of ancient coin', 'the past tense of be'], answer: '累积的', explain: '对的是「累积的」。' },
      { id: 'cumulative.q3', senseId: 'cumulative.s1', errorType: 'grammar', type: '词义选择', prompt: 'cumulative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cumulative.q4', senseId: 'cumulative.s1', errorType: 'meaning', type: '词源', prompt: '记 cumulative 时，哪句更稳妥？', options: ['先锁住「累积的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「累积的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['累积的'] },
  });

  D('cunning', {
    etymology: {
      origin: '英语派生：cunn + -ing，词性转到「狡猾的」。',
      prefix: null,
      root: { text: 'cunn', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cunning', text: '英语派生：cunn + -ing，词性转到「狡猾的」。' },
        { label: '现在', text: '核心用法是：狡猾的。' },
      ],
      formationLogic: '先认词干 cunn，再看词尾。',
      mnemonic: '看到 cunning，先说出「狡猾的」。',
      note: '先认词干 cunn，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cunning.', chinese: '即使是初读者也能看出，这个结果是狡猾的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cunning.s1', en: 'They wanted a cunning answer, not a long speech.', zh: '他们要一个狡猾的的答复，不要长篇发言。', structure: 'cunning / 表示 / 狡猾的', grammar: 'adjective，围绕「狡猾的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cunning.', right: 'The news is cunning.', reason: 'news 作主语时动词用单数。', rule: '先确定 cunning 是adjective，再套「狡猾的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cunning.q1', senseId: 'cunning.s1', errorType: 'meaning', type: '词义选择', prompt: '「cunning」在本条的核心意思是：', options: ['狡猾的', '完全相反的意思', '一种古代钱币'], answer: '狡猾的', explain: 'cunning：狡猾的。' },
      { id: 'cunning.q2', senseId: 'cunning.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cunning?', options: ['狡猾的', 'a kind of ancient coin', 'the past tense of be'], answer: '狡猾的', explain: '对的是「狡猾的」。' },
      { id: 'cunning.q3', senseId: 'cunning.s1', errorType: 'grammar', type: '词义选择', prompt: 'cunning 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cunning.q4', senseId: 'cunning.s1', errorType: 'meaning', type: '词源', prompt: '记 cunning 时，哪句更稳妥？', options: ['先锁住「狡猾的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狡猾的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狡猾的'] },
  });

  D('cunning person', {
    etymology: {
      origin: '现代英语固定说法「cunning person」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cunning person', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cunning person', text: '现代英语固定说法「cunning person」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：狡猾的人。' },
      ],
      formationLogic: '核心义：狡猾的人。',
      mnemonic: '看到 cunning person，先说出「狡猾的人」。',
      note: '核心义：狡猾的人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cunning person" and asked the class to keep it as one unit.', chinese: '老师把「cunning person」圈出来，让全班把它当成一个整体。它表示狡猾的人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cunning person.s1', en: 'In the margin she wrote "cunning person" so nobody would split the phrase.', zh: '她在页边写下「cunning person」，免得有人把这个说法拆开。意思是狡猾的人。', structure: 'cunning person / 表示 / 狡猾的人', grammar: 'noun，围绕「狡猾的人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cunning person and lost the point.', right: 'Keep "cunning person" together: it means 狡猾的人.', reason: '「cunning person」要整块理解。', rule: '先确定 cunning person 是noun，再套「狡猾的人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cunning person.q1', senseId: 'cunning person.s1', errorType: 'meaning', type: '词义选择', prompt: '「cunning person」在本条的核心意思是：', options: ['狡猾的人', '完全相反的意思', '一种古代钱币'], answer: '狡猾的人', explain: 'cunning person：狡猾的人。' },
      { id: 'cunning person.q2', senseId: 'cunning person.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cunning person?', options: ['狡猾的人', 'a kind of ancient coin', 'the past tense of be'], answer: '狡猾的人', explain: '对的是「狡猾的人」。' },
      { id: 'cunning person.q3', senseId: 'cunning person.s1', errorType: 'grammar', type: '词义选择', prompt: 'cunning person 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cunning person.q4', senseId: 'cunning person.s1', errorType: 'meaning', type: '词源', prompt: '记 cunning person 时，哪句更稳妥？', options: ['先锁住「狡猾的人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狡猾的人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狡猾的人'] },
  });

  D('cup', {
    etymology: {
      origin: '拉丁语 cuppa。',
      prefix: null,
      root: { text: 'cup', gloss: '杯子' },
      suffix: null,
      history: [
        { label: 'cup', text: '拉丁语 cuppa。' },
        { label: '现在', text: '核心用法是：杯子。' },
      ],
      formationLogic: '考试认现在的用法：杯子。',
      mnemonic: '看到 cup，先说出「杯子」。',
      note: '考试认现在的用法：杯子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cup.', chinese: '这一章反复回到同一个点：杯子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cup.s1', en: 'Without that cup, the next paragraph is hard to follow.', zh: '没有这个杯子，下一段会很难读。', structure: 'cup / 表示 / 杯子', grammar: 'noun，围绕「杯子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cup.', right: 'He gave me some advice about the cup.', reason: 'advice 不可数。名词 cup 的单复数按词典词形记。', rule: '先确定 cup 是noun，再套「杯子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cup.q1', senseId: 'cup.s1', errorType: 'meaning', type: '词义选择', prompt: '「cup」在本条的核心意思是：', options: ['杯子', '完全相反的意思', '一种古代钱币'], answer: '杯子', explain: 'cup：杯子。' },
      { id: 'cup.q2', senseId: 'cup.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cup?', options: ['杯子', 'a kind of ancient coin', 'the past tense of be'], answer: '杯子', explain: '对的是「杯子」。' },
      { id: 'cup.q3', senseId: 'cup.s1', errorType: 'grammar', type: '词义选择', prompt: 'cup 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cup.q4', senseId: 'cup.s1', errorType: 'meaning', type: '词源', prompt: '记 cup 时，哪句更稳妥？', options: ['先锁住「杯子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「杯子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['杯子'] },
  });

  D('cupboard', {
    etymology: {
      origin: '现代英语常用词「cupboard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cupboard', gloss: '橱柜' },
      suffix: null,
      history: [
        { label: 'cupboard', text: '现代英语常用词「cupboard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：橱柜。' },
      ],
      formationLogic: '核心义：橱柜。',
      mnemonic: '看到 cupboard，先说出「橱柜」。',
      note: '核心义：橱柜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cupboard.', chinese: '这一章反复回到同一个点：橱柜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cupboard.s1', en: 'Without that cupboard, the next paragraph is hard to follow.', zh: '没有这个橱柜，下一段会很难读。', structure: 'cupboard / 表示 / 橱柜', grammar: 'noun，围绕「橱柜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cupboard.', right: 'He gave me some advice about the cupboard.', reason: 'advice 不可数。名词 cupboard 的单复数按词典词形记。', rule: '先确定 cupboard 是noun，再套「橱柜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cupboard.q1', senseId: 'cupboard.s1', errorType: 'meaning', type: '词义选择', prompt: '「cupboard」在本条的核心意思是：', options: ['橱柜', '完全相反的意思', '一种古代钱币'], answer: '橱柜', explain: 'cupboard：橱柜。' },
      { id: 'cupboard.q2', senseId: 'cupboard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cupboard?', options: ['橱柜', 'a kind of ancient coin', 'the past tense of be'], answer: '橱柜', explain: '对的是「橱柜」。' },
      { id: 'cupboard.q3', senseId: 'cupboard.s1', errorType: 'grammar', type: '词义选择', prompt: 'cupboard 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cupboard.q4', senseId: 'cupboard.s1', errorType: 'meaning', type: '词源', prompt: '记 cupboard 时，哪句更稳妥？', options: ['先锁住「橱柜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「橱柜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['橱柜'] },
  });

  D('curb', {
    etymology: {
      origin: '现代英语常用词「curb」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'curb', gloss: '控制' },
      suffix: null,
      history: [
        { label: 'curb', text: '现代英语常用词「curb」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：控制。' },
      ],
      formationLogic: '核心义：控制。',
      mnemonic: '看到 curb，先说出「控制」。',
      note: '核心义：控制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to curb before the office closed.', chinese: '他们同意在办公室关门前做这件事：控制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curb.s1', en: 'The deadline forced the team to curb that afternoon.', zh: '截止日期逼着小组在那天下午控制。', structure: 'curb / 表示 / 控制', grammar: 'verb，围绕「控制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She curbed it yesterday without checking the real past form.', right: 'Check the past form of "curb" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 curb 是verb，再套「控制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curb.q1', senseId: 'curb.s1', errorType: 'meaning', type: '词义选择', prompt: '「curb」在本条的核心意思是：', options: ['控制', '完全相反的意思', '一种古代钱币'], answer: '控制', explain: 'curb：控制。' },
      { id: 'curb.q2', senseId: 'curb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curb?', options: ['控制', 'a kind of ancient coin', 'the past tense of be'], answer: '控制', explain: '对的是「控制」。' },
      { id: 'curb.q3', senseId: 'curb.s1', errorType: 'grammar', type: '词义选择', prompt: 'curb 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'curb.q4', senseId: 'curb.s1', errorType: 'meaning', type: '词源', prompt: '记 curb 时，哪句更稳妥？', options: ['先锁住「控制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「控制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['控制'] },
  });

  D('curd', {
    etymology: {
      origin: '现代英语常用词「curd」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'curd', gloss: '凝乳' },
      suffix: null,
      history: [
        { label: 'curd', text: '现代英语常用词「curd」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：凝乳。' },
      ],
      formationLogic: '核心义：凝乳。',
      mnemonic: '看到 curd，先说出「凝乳」。',
      note: '核心义：凝乳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curd.', chinese: '这一章反复回到同一个点：凝乳。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curd.s1', en: 'Without that curd, the next paragraph is hard to follow.', zh: '没有这个凝乳，下一段会很难读。', structure: 'curd / 表示 / 凝乳', grammar: 'noun，围绕「凝乳」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curd.', right: 'He gave me some advice about the curd.', reason: 'advice 不可数。名词 curd 的单复数按词典词形记。', rule: '先确定 curd 是noun，再套「凝乳」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curd.q1', senseId: 'curd.s1', errorType: 'meaning', type: '词义选择', prompt: '「curd」在本条的核心意思是：', options: ['凝乳', '完全相反的意思', '一种古代钱币'], answer: '凝乳', explain: 'curd：凝乳。' },
      { id: 'curd.q2', senseId: 'curd.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curd?', options: ['凝乳', 'a kind of ancient coin', 'the past tense of be'], answer: '凝乳', explain: '对的是「凝乳」。' },
      { id: 'curd.q3', senseId: 'curd.s1', errorType: 'grammar', type: '词义选择', prompt: 'curd 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curd.q4', senseId: 'curd.s1', errorType: 'meaning', type: '词源', prompt: '记 curd 时，哪句更稳妥？', options: ['先锁住「凝乳」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凝乳」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凝乳'] },
  });

  D('cure', {
    etymology: {
      origin: '拉丁语 cura「关心、医治」。',
      prefix: null,
      root: { text: 'cure', gloss: '治愈' },
      suffix: null,
      history: [
        { label: 'cure', text: '拉丁语 cura「关心、医治」。' },
        { label: '现在', text: '核心用法是：治愈。' },
      ],
      formationLogic: '考试认现在的用法：治愈。',
      mnemonic: '看到 cure，先说出「治愈」。',
      note: '考试认现在的用法：治愈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cure before the office closed.', chinese: '他们同意在办公室关门前做这件事：治愈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cure.s1', en: 'The deadline forced the team to cure that afternoon.', zh: '截止日期逼着小组在那天下午治愈。', structure: 'cure / 表示 / 治愈', grammar: 'verb，围绕「治愈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cureed it yesterday without checking the real past form.', right: 'Check the past form of "cure" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cure 是verb，再套「治愈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cure.q1', senseId: 'cure.s1', errorType: 'meaning', type: '词义选择', prompt: '「cure」在本条的核心意思是：', options: ['治愈', '完全相反的意思', '一种古代钱币'], answer: '治愈', explain: 'cure：治愈。' },
      { id: 'cure.q2', senseId: 'cure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cure?', options: ['治愈', 'a kind of ancient coin', 'the past tense of be'], answer: '治愈', explain: '对的是「治愈」。' },
      { id: 'cure.q3', senseId: 'cure.s1', errorType: 'grammar', type: '词义选择', prompt: 'cure 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cure.q4', senseId: 'cure.s1', errorType: 'meaning', type: '词源', prompt: '记 cure 时，哪句更稳妥？', options: ['先锁住「治愈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「治愈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['治愈'] },
  });

  D('curfew', {
    etymology: {
      origin: '现代英语常用词「curfew」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'curfew', gloss: '宵禁' },
      suffix: null,
      history: [
        { label: 'curfew', text: '现代英语常用词「curfew」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：宵禁。' },
      ],
      formationLogic: '核心义：宵禁。',
      mnemonic: '看到 curfew，先说出「宵禁」。',
      note: '核心义：宵禁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curfew.', chinese: '这一章反复回到同一个点：宵禁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curfew.s1', en: 'Without that curfew, the next paragraph is hard to follow.', zh: '没有这个宵禁，下一段会很难读。', structure: 'curfew / 表示 / 宵禁', grammar: 'noun，围绕「宵禁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curfew.', right: 'He gave me some advice about the curfew.', reason: 'advice 不可数。名词 curfew 的单复数按词典词形记。', rule: '先确定 curfew 是noun，再套「宵禁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curfew.q1', senseId: 'curfew.s1', errorType: 'meaning', type: '词义选择', prompt: '「curfew」在本条的核心意思是：', options: ['宵禁', '完全相反的意思', '一种古代钱币'], answer: '宵禁', explain: 'curfew：宵禁。' },
      { id: 'curfew.q2', senseId: 'curfew.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curfew?', options: ['宵禁', 'a kind of ancient coin', 'the past tense of be'], answer: '宵禁', explain: '对的是「宵禁」。' },
      { id: 'curfew.q3', senseId: 'curfew.s1', errorType: 'grammar', type: '词义选择', prompt: 'curfew 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curfew.q4', senseId: 'curfew.s1', errorType: 'meaning', type: '词源', prompt: '记 curfew 时，哪句更稳妥？', options: ['先锁住「宵禁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宵禁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宵禁'] },
  });

  D('curiosity', {
    etymology: {
      origin: '英语派生：curios + -ity，词性转到「好奇心」。',
      prefix: null,
      root: { text: 'curios', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'curiosity', text: '英语派生：curios + -ity，词性转到「好奇心」。' },
        { label: '现在', text: '核心用法是：好奇心。' },
      ],
      formationLogic: '先认词干 curios，再看词尾。',
      mnemonic: '看到 curiosity，先说出「好奇心」。',
      note: '先认词干 curios，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curiosity.', chinese: '这一章反复回到同一个点：好奇心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curiosity.s1', en: 'Without that curiosity, the next paragraph is hard to follow.', zh: '没有这个好奇心，下一段会很难读。', structure: 'curiosity / 表示 / 好奇心', grammar: 'noun，围绕「好奇心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curiosity.', right: 'He gave me some advice about the curiosity.', reason: 'advice 不可数。名词 curiosity 的单复数按词典词形记。', rule: '先确定 curiosity 是noun，再套「好奇心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curiosity.q1', senseId: 'curiosity.s1', errorType: 'meaning', type: '词义选择', prompt: '「curiosity」在本条的核心意思是：', options: ['好奇心', '完全相反的意思', '一种古代钱币'], answer: '好奇心', explain: 'curiosity：好奇心。' },
      { id: 'curiosity.q2', senseId: 'curiosity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curiosity?', options: ['好奇心', 'a kind of ancient coin', 'the past tense of be'], answer: '好奇心', explain: '对的是「好奇心」。' },
      { id: 'curiosity.q3', senseId: 'curiosity.s1', errorType: 'grammar', type: '词义选择', prompt: 'curiosity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curiosity.q4', senseId: 'curiosity.s1', errorType: 'meaning', type: '词源', prompt: '记 curiosity 时，哪句更稳妥？', options: ['先锁住「好奇心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好奇心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好奇心'] },
  });

  D('curious', {
    etymology: {
      origin: '拉丁语 curiosus「关心的、想知道的」。',
      prefix: null,
      root: { text: 'curious', gloss: '好奇的' },
      suffix: null,
      history: [
        { label: 'curious', text: '拉丁语 curiosus「关心的、想知道的」。' },
        { label: '现在', text: '核心用法是：好奇的。' },
      ],
      formationLogic: '考试认现在的用法：好奇的。',
      mnemonic: '看到 curious，先说出「好奇的」。',
      note: '考试认现在的用法：好奇的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was curious.', chinese: '即使是初读者也能看出，这个结果是好奇的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curious.s1', en: 'They wanted a curious answer, not a long speech.', zh: '他们要一个好奇的的答复，不要长篇发言。', structure: 'curious / 表示 / 好奇的', grammar: 'adjective，围绕「好奇的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are curious.', right: 'The news is curious.', reason: 'news 作主语时动词用单数。', rule: '先确定 curious 是adjective，再套「好奇的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curious.q1', senseId: 'curious.s1', errorType: 'meaning', type: '词义选择', prompt: '「curious」在本条的核心意思是：', options: ['好奇的', '完全相反的意思', '一种古代钱币'], answer: '好奇的', explain: 'curious：好奇的。' },
      { id: 'curious.q2', senseId: 'curious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curious?', options: ['好奇的', 'a kind of ancient coin', 'the past tense of be'], answer: '好奇的', explain: '对的是「好奇的」。' },
      { id: 'curious.q3', senseId: 'curious.s1', errorType: 'grammar', type: '词义选择', prompt: 'curious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'curious.q4', senseId: 'curious.s1', errorType: 'meaning', type: '词源', prompt: '记 curious 时，哪句更稳妥？', options: ['先锁住「好奇的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「好奇的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好奇的'] },
  });

  D('curl', {
    etymology: {
      origin: '与 crull「卷」同源。',
      prefix: null,
      root: { text: 'curl', gloss: '卷' },
      suffix: null,
      history: [
        { label: 'curl', text: '与 crull「卷」同源。' },
        { label: '现在', text: '核心用法是：卷。' },
      ],
      formationLogic: '考试认现在的用法：卷。',
      mnemonic: '看到 curl，先说出「卷」。',
      note: '考试认现在的用法：卷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to curl before the office closed.', chinese: '他们同意在办公室关门前做这件事：卷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curl.s1', en: 'The deadline forced the team to curl that afternoon.', zh: '截止日期逼着小组在那天下午卷。', structure: 'curl / 表示 / 卷', grammar: 'verb，围绕「卷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She curled it yesterday without checking the real past form.', right: 'Check the past form of "curl" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 curl 是verb，再套「卷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curl.q1', senseId: 'curl.s1', errorType: 'meaning', type: '词义选择', prompt: '「curl」在本条的核心意思是：', options: ['卷', '完全相反的意思', '一种古代钱币'], answer: '卷', explain: 'curl：卷。' },
      { id: 'curl.q2', senseId: 'curl.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curl?', options: ['卷', 'a kind of ancient coin', 'the past tense of be'], answer: '卷', explain: '对的是「卷」。' },
      { id: 'curl.q3', senseId: 'curl.s1', errorType: 'grammar', type: '词义选择', prompt: 'curl 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'curl.q4', senseId: 'curl.s1', errorType: 'meaning', type: '词源', prompt: '记 curl 时，哪句更稳妥？', options: ['先锁住「卷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「卷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['卷'] },
  });

  D('curl up', {
    etymology: {
      origin: '现代英语固定说法「curl up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'curl up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'curl up', text: '现代英语固定说法「curl up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：蜷缩。' },
      ],
      formationLogic: '核心义：蜷缩。',
      mnemonic: '看到 curl up，先说出「蜷缩」。',
      note: '核心义：蜷缩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "curl up" and asked the class to keep it as one unit.', chinese: '老师把「curl up」圈出来，让全班把它当成一个整体。它表示蜷缩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curl up.s1', en: 'In the margin she wrote "curl up" so nobody would split the phrase.', zh: '她在页边写下「curl up」，免得有人把这个说法拆开。意思是蜷缩。', structure: 'curl up / 表示 / 蜷缩', grammar: 'verb，围绕「蜷缩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of curl up and lost the point.', right: 'Keep "curl up" together: it means 蜷缩.', reason: '「curl up」要整块理解。', rule: '先确定 curl up 是verb，再套「蜷缩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curl up.q1', senseId: 'curl up.s1', errorType: 'meaning', type: '词义选择', prompt: '「curl up」在本条的核心意思是：', options: ['蜷缩', '完全相反的意思', '一种古代钱币'], answer: '蜷缩', explain: 'curl up：蜷缩。' },
      { id: 'curl up.q2', senseId: 'curl up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curl up?', options: ['蜷缩', 'a kind of ancient coin', 'the past tense of be'], answer: '蜷缩', explain: '对的是「蜷缩」。' },
      { id: 'curl up.q3', senseId: 'curl up.s1', errorType: 'grammar', type: '词义选择', prompt: 'curl up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'curl up.q4', senseId: 'curl up.s1', errorType: 'meaning', type: '词源', prompt: '记 curl up 时，哪句更稳妥？', options: ['先锁住「蜷缩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蜷缩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蜷缩'] },
  });

  D('currency', {
    etymology: {
      origin: '拉丁语 currere「跑」。在市面上跑的就是货币。',
      prefix: null,
      root: { text: 'currency', gloss: '货币' },
      suffix: null,
      history: [
        { label: 'currency', text: '拉丁语 currere「跑」。在市面上跑的就是货币。' },
        { label: '现在', text: '核心用法是：货币。' },
      ],
      formationLogic: '考试认现在的用法：货币。',
      mnemonic: '看到 currency，先说出「货币」。',
      note: '考试认现在的用法：货币。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one currency.', chinese: '这一章反复回到同一个点：货币。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'currency.s1', en: 'Without that currency, the next paragraph is hard to follow.', zh: '没有这个货币，下一段会很难读。', structure: 'currency / 表示 / 货币', grammar: 'noun，围绕「货币」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the currency.', right: 'He gave me some advice about the currency.', reason: 'advice 不可数。名词 currency 的单复数按词典词形记。', rule: '先确定 currency 是noun，再套「货币」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'currency.q1', senseId: 'currency.s1', errorType: 'meaning', type: '词义选择', prompt: '「currency」在本条的核心意思是：', options: ['货币', '完全相反的意思', '一种古代钱币'], answer: '货币', explain: 'currency：货币。' },
      { id: 'currency.q2', senseId: 'currency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches currency?', options: ['货币', 'a kind of ancient coin', 'the past tense of be'], answer: '货币', explain: '对的是「货币」。' },
      { id: 'currency.q3', senseId: 'currency.s1', errorType: 'grammar', type: '词义选择', prompt: 'currency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'currency.q4', senseId: 'currency.s1', errorType: 'meaning', type: '词源', prompt: '记 currency 时，哪句更稳妥？', options: ['先锁住「货币」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「货币」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['货币'] },
  });

  D('current', {
    etymology: {
      origin: '拉丁语 currere「跑」。正在跑的，所以当前、水流。',
      prefix: null,
      root: { text: 'current', gloss: '当前的' },
      suffix: null,
      history: [
        { label: 'current', text: '拉丁语 currere「跑」。正在跑的，所以当前、水流。' },
        { label: '现在', text: '核心用法是：当前的。' },
      ],
      formationLogic: '考试认现在的用法：当前的。',
      mnemonic: '看到 current，先说出「当前的」。',
      note: '考试认现在的用法：当前的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was current.', chinese: '即使是初读者也能看出，这个结果是当前的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'current.s1', en: 'They wanted a current answer, not a long speech.', zh: '他们要一个当前的的答复，不要长篇发言。', structure: 'current / 表示 / 当前的', grammar: 'adjective，围绕「当前的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are current.', right: 'The news is current.', reason: 'news 作主语时动词用单数。', rule: '先确定 current 是adjective，再套「当前的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'current.q1', senseId: 'current.s1', errorType: 'meaning', type: '词义选择', prompt: '「current」在本条的核心意思是：', options: ['当前的', '完全相反的意思', '一种古代钱币'], answer: '当前的', explain: 'current：当前的。' },
      { id: 'current.q2', senseId: 'current.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches current?', options: ['当前的', 'a kind of ancient coin', 'the past tense of be'], answer: '当前的', explain: '对的是「当前的」。' },
      { id: 'current.q3', senseId: 'current.s1', errorType: 'grammar', type: '词义选择', prompt: 'current 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'current.q4', senseId: 'current.s1', errorType: 'meaning', type: '词源', prompt: '记 current 时，哪句更稳妥？', options: ['先锁住「当前的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「当前的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['当前的'] },
  });

  D('currently', {
    etymology: {
      origin: '英语派生：current + -ly，词性转到「当前」。',
      prefix: null,
      root: { text: 'current', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'currently', text: '英语派生：current + -ly，词性转到「当前」。' },
        { label: '现在', text: '核心用法是：当前。' },
      ],
      formationLogic: '先认词干 current，再看词尾。',
      mnemonic: '看到 currently，先说出「当前」。',
      note: '先认词干 current，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule currently, and the class followed.', chinese: '她把规则讲清楚了（当前），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'currently.s1', en: 'He nodded currently and returned to the notes.', zh: '他当前地点了点头，又回去看笔记。', structure: 'currently / 表示 / 当前', grammar: 'adverb，围绕「当前」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very currentlyly in the meeting.', right: 'She spoke currently in the meeting.', reason: 'currently 已经是副词，不要再加 -ly。', rule: '先确定 currently 是adverb，再套「当前」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'currently.q1', senseId: 'currently.s1', errorType: 'meaning', type: '词义选择', prompt: '「currently」在本条的核心意思是：', options: ['当前', '完全相反的意思', '一种古代钱币'], answer: '当前', explain: 'currently：当前。' },
      { id: 'currently.q2', senseId: 'currently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches currently?', options: ['当前', 'a kind of ancient coin', 'the past tense of be'], answer: '当前', explain: '对的是「当前」。' },
      { id: 'currently.q3', senseId: 'currently.s1', errorType: 'grammar', type: '词义选择', prompt: 'currently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'currently.q4', senseId: 'currently.s1', errorType: 'meaning', type: '词源', prompt: '记 currently 时，哪句更稳妥？', options: ['先锁住「当前」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「当前」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['当前'] },
  });

  D('curriculum', {
    etymology: {
      origin: '拉丁语 curriculum「跑道」。课程表是一条学习跑道。',
      prefix: null,
      root: { text: 'curriculum', gloss: '课程' },
      suffix: null,
      history: [
        { label: 'curriculum', text: '拉丁语 curriculum「跑道」。课程表是一条学习跑道。' },
        { label: '现在', text: '核心用法是：课程。' },
      ],
      formationLogic: '考试认现在的用法：课程。',
      mnemonic: '看到 curriculum，先说出「课程」。',
      note: '考试认现在的用法：课程。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curriculum.', chinese: '这一章反复回到同一个点：课程。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curriculum.s1', en: 'Without that curriculum, the next paragraph is hard to follow.', zh: '没有这个课程，下一段会很难读。', structure: 'curriculum / 表示 / 课程', grammar: 'noun，围绕「课程」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curriculum.', right: 'He gave me some advice about the curriculum.', reason: 'advice 不可数。名词 curriculum 的单复数按词典词形记。', rule: '先确定 curriculum 是noun，再套「课程」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curriculum.q1', senseId: 'curriculum.s1', errorType: 'meaning', type: '词义选择', prompt: '「curriculum」在本条的核心意思是：', options: ['课程', '完全相反的意思', '一种古代钱币'], answer: '课程', explain: 'curriculum：课程。' },
      { id: 'curriculum.q2', senseId: 'curriculum.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curriculum?', options: ['课程', 'a kind of ancient coin', 'the past tense of be'], answer: '课程', explain: '对的是「课程」。' },
      { id: 'curriculum.q3', senseId: 'curriculum.s1', errorType: 'grammar', type: '词义选择', prompt: 'curriculum 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curriculum.q4', senseId: 'curriculum.s1', errorType: 'meaning', type: '词源', prompt: '记 curriculum 时，哪句更稳妥？', options: ['先锁住「课程」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「课程」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['课程'] },
  });

  D('curriculum vitae', {
    etymology: {
      origin: '现代英语固定说法「curriculum vitae」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'curriculum vitae', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'curriculum vitae', text: '现代英语固定说法「curriculum vitae」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：简历（正式）。' },
      ],
      formationLogic: '核心义：简历（正式）。',
      mnemonic: '看到 curriculum vitae，先说出「简历（正式）」。',
      note: '核心义：简历（正式）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "curriculum vitae" and asked the class to keep it as one unit.', chinese: '老师把「curriculum vitae」圈出来，让全班把它当成一个整体。它表示简历（正式）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curriculum vitae.s1', en: 'In the margin she wrote "curriculum vitae" so nobody would split the phrase.', zh: '她在页边写下「curriculum vitae」，免得有人把这个说法拆开。意思是简历（正式）。', structure: 'curriculum vitae / 表示 / 简历（正式）', grammar: 'noun，围绕「简历（正式）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of curriculum vitae and lost the point.', right: 'Keep "curriculum vitae" together: it means 简历（正式）.', reason: '「curriculum vitae」要整块理解。', rule: '先确定 curriculum vitae 是noun，再套「简历（正式）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curriculum vitae.q1', senseId: 'curriculum vitae.s1', errorType: 'meaning', type: '词义选择', prompt: '「curriculum vitae」在本条的核心意思是：', options: ['简历（正式）', '完全相反的意思', '一种古代钱币'], answer: '简历（正式）', explain: 'curriculum vitae：简历（正式）。' },
      { id: 'curriculum vitae.q2', senseId: 'curriculum vitae.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curriculum vitae?', options: ['简历（正式）', 'a kind of ancient coin', 'the past tense of be'], answer: '简历（正式）', explain: '对的是「简历（正式）」。' },
      { id: 'curriculum vitae.q3', senseId: 'curriculum vitae.s1', errorType: 'grammar', type: '词义选择', prompt: 'curriculum vitae 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curriculum vitae.q4', senseId: 'curriculum vitae.s1', errorType: 'meaning', type: '词源', prompt: '记 curriculum vitae 时，哪句更稳妥？', options: ['先锁住「简历（正式）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「简历（正式）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['简历（正式）'] },
  });

  D('curse', {
    etymology: {
      origin: '现代英语常用词「curse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'curse', gloss: '诅咒' },
      suffix: null,
      history: [
        { label: 'curse', text: '现代英语常用词「curse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：诅咒。' },
      ],
      formationLogic: '核心义：诅咒。',
      mnemonic: '看到 curse，先说出「诅咒」。',
      note: '核心义：诅咒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curse.', chinese: '这一章反复回到同一个点：诅咒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curse.s1', en: 'Without that curse, the next paragraph is hard to follow.', zh: '没有这个诅咒，下一段会很难读。', structure: 'curse / 表示 / 诅咒', grammar: 'noun，围绕「诅咒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curse.', right: 'He gave me some advice about the curse.', reason: 'advice 不可数。名词 curse 的单复数按词典词形记。', rule: '先确定 curse 是noun，再套「诅咒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curse.q1', senseId: 'curse.s1', errorType: 'meaning', type: '词义选择', prompt: '「curse」在本条的核心意思是：', options: ['诅咒', '完全相反的意思', '一种古代钱币'], answer: '诅咒', explain: 'curse：诅咒。' },
      { id: 'curse.q2', senseId: 'curse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curse?', options: ['诅咒', 'a kind of ancient coin', 'the past tense of be'], answer: '诅咒', explain: '对的是「诅咒」。' },
      { id: 'curse.q3', senseId: 'curse.s1', errorType: 'grammar', type: '词义选择', prompt: 'curse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curse.q4', senseId: 'curse.s1', errorType: 'meaning', type: '词源', prompt: '记 curse 时，哪句更稳妥？', options: ['先锁住「诅咒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「诅咒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诅咒'] },
  });

  D('cursed', {
    etymology: {
      origin: '现代英语常用词「cursed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cursed', gloss: '该死的' },
      suffix: null,
      history: [
        { label: 'cursed', text: '现代英语常用词「cursed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：该死的。' },
      ],
      formationLogic: '核心义：该死的。',
      mnemonic: '看到 cursed，先说出「该死的」。',
      note: '核心义：该死的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cursed.', chinese: '即使是初读者也能看出，这个结果是该死的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cursed.s1', en: 'They wanted a cursed answer, not a long speech.', zh: '他们要一个该死的的答复，不要长篇发言。', structure: 'cursed / 表示 / 该死的', grammar: 'adjective，围绕「该死的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cursed.', right: 'The news is cursed.', reason: 'news 作主语时动词用单数。', rule: '先确定 cursed 是adjective，再套「该死的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cursed.q1', senseId: 'cursed.s1', errorType: 'meaning', type: '词义选择', prompt: '「cursed」在本条的核心意思是：', options: ['该死的', '完全相反的意思', '一种古代钱币'], answer: '该死的', explain: 'cursed：该死的。' },
      { id: 'cursed.q2', senseId: 'cursed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cursed?', options: ['该死的', 'a kind of ancient coin', 'the past tense of be'], answer: '该死的', explain: '对的是「该死的」。' },
      { id: 'cursed.q3', senseId: 'cursed.s1', errorType: 'grammar', type: '词义选择', prompt: 'cursed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cursed.q4', senseId: 'cursed.s1', errorType: 'meaning', type: '词源', prompt: '记 cursed 时，哪句更稳妥？', options: ['先锁住「该死的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「该死的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['该死的'] },
  });

  D('cursory', {
    etymology: {
      origin: '现代英语常用词「cursory」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cursory', gloss: '粗略的' },
      suffix: null,
      history: [
        { label: 'cursory', text: '现代英语常用词「cursory」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：粗略的。' },
      ],
      formationLogic: '核心义：粗略的。',
      mnemonic: '看到 cursory，先说出「粗略的」。',
      note: '核心义：粗略的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cursory.', chinese: '即使是初读者也能看出，这个结果是粗略的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cursory.s1', en: 'They wanted a cursory answer, not a long speech.', zh: '他们要一个粗略的的答复，不要长篇发言。', structure: 'cursory / 表示 / 粗略的', grammar: 'adjective，围绕「粗略的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cursory.', right: 'The news is cursory.', reason: 'news 作主语时动词用单数。', rule: '先确定 cursory 是adjective，再套「粗略的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cursory.q1', senseId: 'cursory.s1', errorType: 'meaning', type: '词义选择', prompt: '「cursory」在本条的核心意思是：', options: ['粗略的', '完全相反的意思', '一种古代钱币'], answer: '粗略的', explain: 'cursory：粗略的。' },
      { id: 'cursory.q2', senseId: 'cursory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cursory?', options: ['粗略的', 'a kind of ancient coin', 'the past tense of be'], answer: '粗略的', explain: '对的是「粗略的」。' },
      { id: 'cursory.q3', senseId: 'cursory.s1', errorType: 'grammar', type: '词义选择', prompt: 'cursory 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cursory.q4', senseId: 'cursory.s1', errorType: 'meaning', type: '词源', prompt: '记 cursory 时，哪句更稳妥？', options: ['先锁住「粗略的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「粗略的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粗略的'] },
  });

  D('curt', {
    etymology: {
      origin: '现代英语常用词「curt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'curt', gloss: '简短生硬的' },
      suffix: null,
      history: [
        { label: 'curt', text: '现代英语常用词「curt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：简短生硬的。' },
      ],
      formationLogic: '核心义：简短生硬的。',
      mnemonic: '看到 curt，先说出「简短生硬的」。',
      note: '核心义：简短生硬的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was curt.', chinese: '即使是初读者也能看出，这个结果是简短生硬的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curt.s1', en: 'They wanted a curt answer, not a long speech.', zh: '他们要一个简短生硬的的答复，不要长篇发言。', structure: 'curt / 表示 / 简短生硬的', grammar: 'adjective，围绕「简短生硬的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are curt.', right: 'The news is curt.', reason: 'news 作主语时动词用单数。', rule: '先确定 curt 是adjective，再套「简短生硬的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curt.q1', senseId: 'curt.s1', errorType: 'meaning', type: '词义选择', prompt: '「curt」在本条的核心意思是：', options: ['简短生硬的', '完全相反的意思', '一种古代钱币'], answer: '简短生硬的', explain: 'curt：简短生硬的。' },
      { id: 'curt.q2', senseId: 'curt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curt?', options: ['简短生硬的', 'a kind of ancient coin', 'the past tense of be'], answer: '简短生硬的', explain: '对的是「简短生硬的」。' },
      { id: 'curt.q3', senseId: 'curt.s1', errorType: 'grammar', type: '词义选择', prompt: 'curt 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'curt.q4', senseId: 'curt.s1', errorType: 'meaning', type: '词源', prompt: '记 curt 时，哪句更稳妥？', options: ['先锁住「简短生硬的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「简短生硬的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['简短生硬的'] },
  });

  D('curtail', {
    etymology: {
      origin: '现代英语常用词「curtail」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'curtail', gloss: '缩减' },
      suffix: null,
      history: [
        { label: 'curtail', text: '现代英语常用词「curtail」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：缩减。' },
      ],
      formationLogic: '核心义：缩减。',
      mnemonic: '看到 curtail，先说出「缩减」。',
      note: '核心义：缩减。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to curtail before the office closed.', chinese: '他们同意在办公室关门前做这件事：缩减。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curtail.s1', en: 'The deadline forced the team to curtail that afternoon.', zh: '截止日期逼着小组在那天下午缩减。', structure: 'curtail / 表示 / 缩减', grammar: 'verb，围绕「缩减」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She curtailed it yesterday without checking the real past form.', right: 'Check the past form of "curtail" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 curtail 是verb，再套「缩减」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curtail.q1', senseId: 'curtail.s1', errorType: 'meaning', type: '词义选择', prompt: '「curtail」在本条的核心意思是：', options: ['缩减', '完全相反的意思', '一种古代钱币'], answer: '缩减', explain: 'curtail：缩减。' },
      { id: 'curtail.q2', senseId: 'curtail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curtail?', options: ['缩减', 'a kind of ancient coin', 'the past tense of be'], answer: '缩减', explain: '对的是「缩减」。' },
      { id: 'curtail.q3', senseId: 'curtail.s1', errorType: 'grammar', type: '词义选择', prompt: 'curtail 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'curtail.q4', senseId: 'curtail.s1', errorType: 'meaning', type: '词源', prompt: '记 curtail 时，哪句更稳妥？', options: ['先锁住「缩减」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「缩减」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缩减'] },
  });

  D('curtain', {
    etymology: {
      origin: '拉丁语 cortina。',
      prefix: null,
      root: { text: 'curtain', gloss: '窗帘' },
      suffix: null,
      history: [
        { label: 'curtain', text: '拉丁语 cortina。' },
        { label: '现在', text: '核心用法是：窗帘。' },
      ],
      formationLogic: '考试认现在的用法：窗帘。',
      mnemonic: '看到 curtain，先说出「窗帘」。',
      note: '考试认现在的用法：窗帘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curtain.', chinese: '这一章反复回到同一个点：窗帘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curtain.s1', en: 'Without that curtain, the next paragraph is hard to follow.', zh: '没有这个窗帘，下一段会很难读。', structure: 'curtain / 表示 / 窗帘', grammar: 'noun，围绕「窗帘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curtain.', right: 'He gave me some advice about the curtain.', reason: 'advice 不可数。名词 curtain 的单复数按词典词形记。', rule: '先确定 curtain 是noun，再套「窗帘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curtain.q1', senseId: 'curtain.s1', errorType: 'meaning', type: '词义选择', prompt: '「curtain」在本条的核心意思是：', options: ['窗帘', '完全相反的意思', '一种古代钱币'], answer: '窗帘', explain: 'curtain：窗帘。' },
      { id: 'curtain.q2', senseId: 'curtain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curtain?', options: ['窗帘', 'a kind of ancient coin', 'the past tense of be'], answer: '窗帘', explain: '对的是「窗帘」。' },
      { id: 'curtain.q3', senseId: 'curtain.s1', errorType: 'grammar', type: '词义选择', prompt: 'curtain 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curtain.q4', senseId: 'curtain.s1', errorType: 'meaning', type: '词源', prompt: '记 curtain 时，哪句更稳妥？', options: ['先锁住「窗帘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「窗帘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['窗帘'] },
  });

  D('curtly', {
    etymology: {
      origin: '英语派生：curt + -ly，词性转到「简短生硬地」。',
      prefix: null,
      root: { text: 'curt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'curtly', text: '英语派生：curt + -ly，词性转到「简短生硬地」。' },
        { label: '现在', text: '核心用法是：简短生硬地。' },
      ],
      formationLogic: '先认词干 curt，再看词尾。',
      mnemonic: '看到 curtly，先说出「简短生硬地」。',
      note: '先认词干 curt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule curtly, and the class followed.', chinese: '她把规则讲清楚了（简短生硬地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curtly.s1', en: 'He nodded curtly and returned to the notes.', zh: '他简短生硬地地点了点头，又回去看笔记。', structure: 'curtly / 表示 / 简短生硬地', grammar: 'adverb，围绕「简短生硬地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very curtlyly in the meeting.', right: 'She spoke curtly in the meeting.', reason: 'curtly 已经是副词，不要再加 -ly。', rule: '先确定 curtly 是adverb，再套「简短生硬地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curtly.q1', senseId: 'curtly.s1', errorType: 'meaning', type: '词义选择', prompt: '「curtly」在本条的核心意思是：', options: ['简短生硬地', '完全相反的意思', '一种古代钱币'], answer: '简短生硬地', explain: 'curtly：简短生硬地。' },
      { id: 'curtly.q2', senseId: 'curtly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curtly?', options: ['简短生硬地', 'a kind of ancient coin', 'the past tense of be'], answer: '简短生硬地', explain: '对的是「简短生硬地」。' },
      { id: 'curtly.q3', senseId: 'curtly.s1', errorType: 'grammar', type: '词义选择', prompt: 'curtly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'curtly.q4', senseId: 'curtly.s1', errorType: 'meaning', type: '词源', prompt: '记 curtly 时，哪句更稳妥？', options: ['先锁住「简短生硬地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「简短生硬地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['简短生硬地'] },
  });

  D('curtness', {
    etymology: {
      origin: '英语派生：curt + -ness，词性转到「生硬」。',
      prefix: null,
      root: { text: 'curt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'curtness', text: '英语派生：curt + -ness，词性转到「生硬」。' },
        { label: '现在', text: '核心用法是：生硬。' },
      ],
      formationLogic: '先认词干 curt，再看词尾。',
      mnemonic: '看到 curtness，先说出「生硬」。',
      note: '先认词干 curt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curtness.', chinese: '这一章反复回到同一个点：生硬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curtness.s1', en: 'Without that curtness, the next paragraph is hard to follow.', zh: '没有这个生硬，下一段会很难读。', structure: 'curtness / 表示 / 生硬', grammar: 'noun，围绕「生硬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curtness.', right: 'He gave me some advice about the curtness.', reason: 'advice 不可数。名词 curtness 的单复数按词典词形记。', rule: '先确定 curtness 是noun，再套「生硬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curtness.q1', senseId: 'curtness.s1', errorType: 'meaning', type: '词义选择', prompt: '「curtness」在本条的核心意思是：', options: ['生硬', '完全相反的意思', '一种古代钱币'], answer: '生硬', explain: 'curtness：生硬。' },
      { id: 'curtness.q2', senseId: 'curtness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curtness?', options: ['生硬', 'a kind of ancient coin', 'the past tense of be'], answer: '生硬', explain: '对的是「生硬」。' },
      { id: 'curtness.q3', senseId: 'curtness.s1', errorType: 'grammar', type: '词义选择', prompt: 'curtness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curtness.q4', senseId: 'curtness.s1', errorType: 'meaning', type: '词源', prompt: '记 curtness 时，哪句更稳妥？', options: ['先锁住「生硬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「生硬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['生硬'] },
  });

  D('curve', {
    etymology: {
      origin: '拉丁语 curvus「弯的」。',
      prefix: null,
      root: { text: 'curve', gloss: '曲线' },
      suffix: null,
      history: [
        { label: 'curve', text: '拉丁语 curvus「弯的」。' },
        { label: '现在', text: '核心用法是：曲线。' },
      ],
      formationLogic: '考试认现在的用法：曲线。',
      mnemonic: '看到 curve，先说出「曲线」。',
      note: '考试认现在的用法：曲线。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one curve.', chinese: '这一章反复回到同一个点：曲线。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'curve.s1', en: 'Without that curve, the next paragraph is hard to follow.', zh: '没有这个曲线，下一段会很难读。', structure: 'curve / 表示 / 曲线', grammar: 'noun，围绕「曲线」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the curve.', right: 'He gave me some advice about the curve.', reason: 'advice 不可数。名词 curve 的单复数按词典词形记。', rule: '先确定 curve 是noun，再套「曲线」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'curve.q1', senseId: 'curve.s1', errorType: 'meaning', type: '词义选择', prompt: '「curve」在本条的核心意思是：', options: ['曲线', '完全相反的意思', '一种古代钱币'], answer: '曲线', explain: 'curve：曲线。' },
      { id: 'curve.q2', senseId: 'curve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches curve?', options: ['曲线', 'a kind of ancient coin', 'the past tense of be'], answer: '曲线', explain: '对的是「曲线」。' },
      { id: 'curve.q3', senseId: 'curve.s1', errorType: 'grammar', type: '词义选择', prompt: 'curve 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'curve.q4', senseId: 'curve.s1', errorType: 'meaning', type: '词源', prompt: '记 curve 时，哪句更稳妥？', options: ['先锁住「曲线」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「曲线」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['曲线'] },
  });

  D('cushion', {
    etymology: {
      origin: '拉丁语 coxinus 一类「垫子」。',
      prefix: null,
      root: { text: 'cushion', gloss: '垫子' },
      suffix: null,
      history: [
        { label: 'cushion', text: '拉丁语 coxinus 一类「垫子」。' },
        { label: '现在', text: '核心用法是：垫子。' },
      ],
      formationLogic: '考试认现在的用法：垫子。',
      mnemonic: '看到 cushion，先说出「垫子」。',
      note: '考试认现在的用法：垫子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cushion.', chinese: '这一章反复回到同一个点：垫子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cushion.s1', en: 'Without that cushion, the next paragraph is hard to follow.', zh: '没有这个垫子，下一段会很难读。', structure: 'cushion / 表示 / 垫子', grammar: 'noun，围绕「垫子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cushion.', right: 'He gave me some advice about the cushion.', reason: 'advice 不可数。名词 cushion 的单复数按词典词形记。', rule: '先确定 cushion 是noun，再套「垫子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cushion.q1', senseId: 'cushion.s1', errorType: 'meaning', type: '词义选择', prompt: '「cushion」在本条的核心意思是：', options: ['垫子', '完全相反的意思', '一种古代钱币'], answer: '垫子', explain: 'cushion：垫子。' },
      { id: 'cushion.q2', senseId: 'cushion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cushion?', options: ['垫子', 'a kind of ancient coin', 'the past tense of be'], answer: '垫子', explain: '对的是「垫子」。' },
      { id: 'cushion.q3', senseId: 'cushion.s1', errorType: 'grammar', type: '词义选择', prompt: 'cushion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cushion.q4', senseId: 'cushion.s1', errorType: 'meaning', type: '词源', prompt: '记 cushion 时，哪句更稳妥？', options: ['先锁住「垫子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「垫子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['垫子'] },
  });

  D('cuss', {
    etymology: {
      origin: '现代英语常用词「cuss」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cuss', gloss: '咒骂' },
      suffix: null,
      history: [
        { label: 'cuss', text: '现代英语常用词「cuss」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：咒骂。' },
      ],
      formationLogic: '核心义：咒骂。',
      mnemonic: '看到 cuss，先说出「咒骂」。',
      note: '核心义：咒骂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cuss.', chinese: '这一章反复回到同一个点：咒骂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cuss.s1', en: 'Without that cuss, the next paragraph is hard to follow.', zh: '没有这个咒骂，下一段会很难读。', structure: 'cuss / 表示 / 咒骂', grammar: 'noun，围绕「咒骂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cuss.', right: 'He gave me some advice about the cuss.', reason: 'advice 不可数。名词 cuss 的单复数按词典词形记。', rule: '先确定 cuss 是noun，再套「咒骂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cuss.q1', senseId: 'cuss.s1', errorType: 'meaning', type: '词义选择', prompt: '「cuss」在本条的核心意思是：', options: ['咒骂', '完全相反的意思', '一种古代钱币'], answer: '咒骂', explain: 'cuss：咒骂。' },
      { id: 'cuss.q2', senseId: 'cuss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cuss?', options: ['咒骂', 'a kind of ancient coin', 'the past tense of be'], answer: '咒骂', explain: '对的是「咒骂」。' },
      { id: 'cuss.q3', senseId: 'cuss.s1', errorType: 'grammar', type: '词义选择', prompt: 'cuss 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cuss.q4', senseId: 'cuss.s1', errorType: 'meaning', type: '词源', prompt: '记 cuss 时，哪句更稳妥？', options: ['先锁住「咒骂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咒骂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咒骂'] },
  });

  D('custody', {
    etymology: {
      origin: '现代英语常用词「custody」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'custody', gloss: '监护权' },
      suffix: null,
      history: [
        { label: 'custody', text: '现代英语常用词「custody」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：监护权。' },
      ],
      formationLogic: '核心义：监护权。',
      mnemonic: '看到 custody，先说出「监护权」。',
      note: '核心义：监护权。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one custody.', chinese: '这一章反复回到同一个点：监护权。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'custody.s1', en: 'Without that custody, the next paragraph is hard to follow.', zh: '没有这个监护权，下一段会很难读。', structure: 'custody / 表示 / 监护权', grammar: 'noun，围绕「监护权」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the custody.', right: 'He gave me some advice about the custody.', reason: 'advice 不可数。名词 custody 的单复数按词典词形记。', rule: '先确定 custody 是noun，再套「监护权」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'custody.q1', senseId: 'custody.s1', errorType: 'meaning', type: '词义选择', prompt: '「custody」在本条的核心意思是：', options: ['监护权', '完全相反的意思', '一种古代钱币'], answer: '监护权', explain: 'custody：监护权。' },
      { id: 'custody.q2', senseId: 'custody.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches custody?', options: ['监护权', 'a kind of ancient coin', 'the past tense of be'], answer: '监护权', explain: '对的是「监护权」。' },
      { id: 'custody.q3', senseId: 'custody.s1', errorType: 'grammar', type: '词义选择', prompt: 'custody 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'custody.q4', senseId: 'custody.s1', errorType: 'meaning', type: '词源', prompt: '记 custody 时，哪句更稳妥？', options: ['先锁住「监护权」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「监护权」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['监护权'] },
  });

  D('custom', {
    etymology: {
      origin: '拉丁语 consuetudo「习惯」。',
      prefix: null,
      root: { text: 'custom', gloss: '风俗' },
      suffix: null,
      history: [
        { label: 'custom', text: '拉丁语 consuetudo「习惯」。' },
        { label: '现在', text: '核心用法是：风俗。' },
      ],
      formationLogic: '考试认现在的用法：风俗。',
      mnemonic: '看到 custom，先说出「风俗」。',
      note: '考试认现在的用法：风俗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one custom.', chinese: '这一章反复回到同一个点：风俗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'custom.s1', en: 'Without that custom, the next paragraph is hard to follow.', zh: '没有这个风俗，下一段会很难读。', structure: 'custom / 表示 / 风俗', grammar: 'noun，围绕「风俗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the custom.', right: 'He gave me some advice about the custom.', reason: 'advice 不可数。名词 custom 的单复数按词典词形记。', rule: '先确定 custom 是noun，再套「风俗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'custom.q1', senseId: 'custom.s1', errorType: 'meaning', type: '词义选择', prompt: '「custom」在本条的核心意思是：', options: ['风俗', '完全相反的意思', '一种古代钱币'], answer: '风俗', explain: 'custom：风俗。' },
      { id: 'custom.q2', senseId: 'custom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches custom?', options: ['风俗', 'a kind of ancient coin', 'the past tense of be'], answer: '风俗', explain: '对的是「风俗」。' },
      { id: 'custom.q3', senseId: 'custom.s1', errorType: 'grammar', type: '词义选择', prompt: 'custom 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'custom.q4', senseId: 'custom.s1', errorType: 'meaning', type: '词源', prompt: '记 custom 时，哪句更稳妥？', options: ['先锁住「风俗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「风俗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['风俗'] },
  });

  D('customary', {
    etymology: {
      origin: '现代英语常用词「customary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'customary', gloss: '习惯上的' },
      suffix: null,
      history: [
        { label: 'customary', text: '现代英语常用词「customary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：习惯上的。' },
      ],
      formationLogic: '核心义：习惯上的。',
      mnemonic: '看到 customary，先说出「习惯上的」。',
      note: '核心义：习惯上的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was customary.', chinese: '即使是初读者也能看出，这个结果是习惯上的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'customary.s1', en: 'They wanted a customary answer, not a long speech.', zh: '他们要一个习惯上的的答复，不要长篇发言。', structure: 'customary / 表示 / 习惯上的', grammar: 'adjective，围绕「习惯上的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are customary.', right: 'The news is customary.', reason: 'news 作主语时动词用单数。', rule: '先确定 customary 是adjective，再套「习惯上的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'customary.q1', senseId: 'customary.s1', errorType: 'meaning', type: '词义选择', prompt: '「customary」在本条的核心意思是：', options: ['习惯上的', '完全相反的意思', '一种古代钱币'], answer: '习惯上的', explain: 'customary：习惯上的。' },
      { id: 'customary.q2', senseId: 'customary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches customary?', options: ['习惯上的', 'a kind of ancient coin', 'the past tense of be'], answer: '习惯上的', explain: '对的是「习惯上的」。' },
      { id: 'customary.q3', senseId: 'customary.s1', errorType: 'grammar', type: '词义选择', prompt: 'customary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'customary.q4', senseId: 'customary.s1', errorType: 'meaning', type: '词源', prompt: '记 customary 时，哪句更稳妥？', options: ['先锁住「习惯上的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「习惯上的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['习惯上的'] },
  });

  D('customer', {
    etymology: {
      origin: 'custom + -er。有买东西习惯的人。',
      prefix: null,
      root: { text: 'customer', gloss: '顾客' },
      suffix: null,
      history: [
        { label: 'customer', text: 'custom + -er。有买东西习惯的人。' },
        { label: '现在', text: '核心用法是：顾客。' },
      ],
      formationLogic: '考试认现在的用法：顾客。',
      mnemonic: '看到 customer，先说出「顾客」。',
      note: '考试认现在的用法：顾客。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one customer.', chinese: '这一章反复回到同一个点：顾客。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'customer.s1', en: 'Without that customer, the next paragraph is hard to follow.', zh: '没有这个顾客，下一段会很难读。', structure: 'customer / 表示 / 顾客', grammar: 'noun，围绕「顾客」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the customer.', right: 'He gave me some advice about the customer.', reason: 'advice 不可数。名词 customer 的单复数按词典词形记。', rule: '先确定 customer 是noun，再套「顾客」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'customer.q1', senseId: 'customer.s1', errorType: 'meaning', type: '词义选择', prompt: '「customer」在本条的核心意思是：', options: ['顾客', '完全相反的意思', '一种古代钱币'], answer: '顾客', explain: 'customer：顾客。' },
      { id: 'customer.q2', senseId: 'customer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches customer?', options: ['顾客', 'a kind of ancient coin', 'the past tense of be'], answer: '顾客', explain: '对的是「顾客」。' },
      { id: 'customer.q3', senseId: 'customer.s1', errorType: 'grammar', type: '词义选择', prompt: 'customer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'customer.q4', senseId: 'customer.s1', errorType: 'meaning', type: '词源', prompt: '记 customer 时，哪句更稳妥？', options: ['先锁住「顾客」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「顾客」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['顾客'] },
  });

  D('customize', {
    etymology: {
      origin: '现代英语常用词「customize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'customize', gloss: '定制' },
      suffix: null,
      history: [
        { label: 'customize', text: '现代英语常用词「customize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：定制。' },
      ],
      formationLogic: '核心义：定制。',
      mnemonic: '看到 customize，先说出「定制」。',
      note: '核心义：定制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to customize before the office closed.', chinese: '他们同意在办公室关门前做这件事：定制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'customize.s1', en: 'The deadline forced the team to customize that afternoon.', zh: '截止日期逼着小组在那天下午定制。', structure: 'customize / 表示 / 定制', grammar: 'verb，围绕「定制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She customizeed it yesterday without checking the real past form.', right: 'Check the past form of "customize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 customize 是verb，再套「定制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'customize.q1', senseId: 'customize.s1', errorType: 'meaning', type: '词义选择', prompt: '「customize」在本条的核心意思是：', options: ['定制', '完全相反的意思', '一种古代钱币'], answer: '定制', explain: 'customize：定制。' },
      { id: 'customize.q2', senseId: 'customize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches customize?', options: ['定制', 'a kind of ancient coin', 'the past tense of be'], answer: '定制', explain: '对的是「定制」。' },
      { id: 'customize.q3', senseId: 'customize.s1', errorType: 'grammar', type: '词义选择', prompt: 'customize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'customize.q4', senseId: 'customize.s1', errorType: 'meaning', type: '词源', prompt: '记 customize 时，哪句更稳妥？', options: ['先锁住「定制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「定制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['定制'] },
  });

  D('customs', {
    etymology: {
      origin: '现代英语常用词「customs」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'customs', gloss: '海关' },
      suffix: null,
      history: [
        { label: 'customs', text: '现代英语常用词「customs」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：海关。' },
      ],
      formationLogic: '核心义：海关。',
      mnemonic: '看到 customs，先说出「海关」。',
      note: '核心义：海关。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one customs.', chinese: '这一章反复回到同一个点：海关。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'customs.s1', en: 'Without that customs, the next paragraph is hard to follow.', zh: '没有这个海关，下一段会很难读。', structure: 'customs / 表示 / 海关', grammar: 'noun，围绕「海关」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the customs.', right: 'He gave me some advice about the customs.', reason: 'advice 不可数。名词 customs 的单复数按词典词形记。', rule: '先确定 customs 是noun，再套「海关」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'customs.q1', senseId: 'customs.s1', errorType: 'meaning', type: '词义选择', prompt: '「customs」在本条的核心意思是：', options: ['海关', '完全相反的意思', '一种古代钱币'], answer: '海关', explain: 'customs：海关。' },
      { id: 'customs.q2', senseId: 'customs.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches customs?', options: ['海关', 'a kind of ancient coin', 'the past tense of be'], answer: '海关', explain: '对的是「海关」。' },
      { id: 'customs.q3', senseId: 'customs.s1', errorType: 'grammar', type: '词义选择', prompt: 'customs 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'customs.q4', senseId: 'customs.s1', errorType: 'meaning', type: '词源', prompt: '记 customs 时，哪句更稳妥？', options: ['先锁住「海关」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「海关」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['海关'] },
  });

  D('cut', {
    etymology: {
      origin: '中古英语 cutten。',
      prefix: null,
      root: { text: 'cut', gloss: '切' },
      suffix: null,
      history: [
        { label: 'cut', text: '中古英语 cutten。' },
        { label: '现在', text: '核心用法是：切。' },
      ],
      formationLogic: '考试认现在的用法：切。',
      mnemonic: '看到 cut，先说出「切」。',
      note: '考试认现在的用法：切。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cut before the office closed.', chinese: '他们同意在办公室关门前做这件事：切。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cut.s1', en: 'The deadline forced the team to cut that afternoon.', zh: '截止日期逼着小组在那天下午切。', structure: 'cut / 表示 / 切', grammar: 'verb，围绕「切」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cuted it yesterday without checking the real past form.', right: 'Check the past form of "cut" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cut 是verb，再套「切」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cut.q1', senseId: 'cut.s1', errorType: 'meaning', type: '词义选择', prompt: '「cut」在本条的核心意思是：', options: ['切', '完全相反的意思', '一种古代钱币'], answer: '切', explain: 'cut：切。' },
      { id: 'cut.q2', senseId: 'cut.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cut?', options: ['切', 'a kind of ancient coin', 'the past tense of be'], answer: '切', explain: '对的是「切」。' },
      { id: 'cut.q3', senseId: 'cut.s1', errorType: 'grammar', type: '词义选择', prompt: 'cut 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cut.q4', senseId: 'cut.s1', errorType: 'meaning', type: '词源', prompt: '记 cut 时，哪句更稳妥？', options: ['先锁住「切」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「切」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['切'] },
  });

  D('cut down', {
    etymology: {
      origin: '现代英语固定说法「cut down」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cut down', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cut down', text: '现代英语固定说法「cut down」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：砍倒。' },
      ],
      formationLogic: '核心义：砍倒。',
      mnemonic: '看到 cut down，先说出「砍倒」。',
      note: '核心义：砍倒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cut down" and asked the class to keep it as one unit.', chinese: '老师把「cut down」圈出来，让全班把它当成一个整体。它表示砍倒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cut down.s1', en: 'In the margin she wrote "cut down" so nobody would split the phrase.', zh: '她在页边写下「cut down」，免得有人把这个说法拆开。意思是砍倒。', structure: 'cut down / 表示 / 砍倒', grammar: 'verb，围绕「砍倒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cut down and lost the point.', right: 'Keep "cut down" together: it means 砍倒.', reason: '「cut down」要整块理解。', rule: '先确定 cut down 是verb，再套「砍倒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cut down.q1', senseId: 'cut down.s1', errorType: 'meaning', type: '词义选择', prompt: '「cut down」在本条的核心意思是：', options: ['砍倒', '完全相反的意思', '一种古代钱币'], answer: '砍倒', explain: 'cut down：砍倒。' },
      { id: 'cut down.q2', senseId: 'cut down.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cut down?', options: ['砍倒', 'a kind of ancient coin', 'the past tense of be'], answer: '砍倒', explain: '对的是「砍倒」。' },
      { id: 'cut down.q3', senseId: 'cut down.s1', errorType: 'grammar', type: '词义选择', prompt: 'cut down 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cut down.q4', senseId: 'cut down.s1', errorType: 'meaning', type: '词源', prompt: '记 cut down 时，哪句更稳妥？', options: ['先锁住「砍倒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「砍倒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['砍倒'] },
  });

  D('cut in', {
    etymology: {
      origin: '现代英语固定说法「cut in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cut in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cut in', text: '现代英语固定说法「cut in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：插嘴。' },
      ],
      formationLogic: '核心义：插嘴。',
      mnemonic: '看到 cut in，先说出「插嘴」。',
      note: '核心义：插嘴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cut in" and asked the class to keep it as one unit.', chinese: '老师把「cut in」圈出来，让全班把它当成一个整体。它表示插嘴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cut in.s1', en: 'In the margin she wrote "cut in" so nobody would split the phrase.', zh: '她在页边写下「cut in」，免得有人把这个说法拆开。意思是插嘴。', structure: 'cut in / 表示 / 插嘴', grammar: 'verb，围绕「插嘴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cut in and lost the point.', right: 'Keep "cut in" together: it means 插嘴.', reason: '「cut in」要整块理解。', rule: '先确定 cut in 是verb，再套「插嘴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cut in.q1', senseId: 'cut in.s1', errorType: 'meaning', type: '词义选择', prompt: '「cut in」在本条的核心意思是：', options: ['插嘴', '完全相反的意思', '一种古代钱币'], answer: '插嘴', explain: 'cut in：插嘴。' },
      { id: 'cut in.q2', senseId: 'cut in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cut in?', options: ['插嘴', 'a kind of ancient coin', 'the past tense of be'], answer: '插嘴', explain: '对的是「插嘴」。' },
      { id: 'cut in.q3', senseId: 'cut in.s1', errorType: 'grammar', type: '词义选择', prompt: 'cut in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cut in.q4', senseId: 'cut in.s1', errorType: 'meaning', type: '词源', prompt: '记 cut in 时，哪句更稳妥？', options: ['先锁住「插嘴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「插嘴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['插嘴'] },
  });

  D('cut off', {
    etymology: {
      origin: '现代英语固定说法「cut off」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cut off', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cut off', text: '现代英语固定说法「cut off」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：切断。' },
      ],
      formationLogic: '核心义：切断。',
      mnemonic: '看到 cut off，先说出「切断」。',
      note: '核心义：切断。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cut off" and asked the class to keep it as one unit.', chinese: '老师把「cut off」圈出来，让全班把它当成一个整体。它表示切断。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cut off.s1', en: 'In the margin she wrote "cut off" so nobody would split the phrase.', zh: '她在页边写下「cut off」，免得有人把这个说法拆开。意思是切断。', structure: 'cut off / 表示 / 切断', grammar: 'verb，围绕「切断」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cut off and lost the point.', right: 'Keep "cut off" together: it means 切断.', reason: '「cut off」要整块理解。', rule: '先确定 cut off 是verb，再套「切断」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cut off.q1', senseId: 'cut off.s1', errorType: 'meaning', type: '词义选择', prompt: '「cut off」在本条的核心意思是：', options: ['切断', '完全相反的意思', '一种古代钱币'], answer: '切断', explain: 'cut off：切断。' },
      { id: 'cut off.q2', senseId: 'cut off.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cut off?', options: ['切断', 'a kind of ancient coin', 'the past tense of be'], answer: '切断', explain: '对的是「切断」。' },
      { id: 'cut off.q3', senseId: 'cut off.s1', errorType: 'grammar', type: '词义选择', prompt: 'cut off 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cut off.q4', senseId: 'cut off.s1', errorType: 'meaning', type: '词源', prompt: '记 cut off 时，哪句更稳妥？', options: ['先锁住「切断」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「切断」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['切断'] },
  });

  D('cut through', {
    etymology: {
      origin: '现代英语固定说法「cut through」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cut through', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cut through', text: '现代英语固定说法「cut through」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：切开。' },
      ],
      formationLogic: '核心义：切开。',
      mnemonic: '看到 cut through，先说出「切开」。',
      note: '核心义：切开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cut through" and asked the class to keep it as one unit.', chinese: '老师把「cut through」圈出来，让全班把它当成一个整体。它表示切开。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cut through.s1', en: 'In the margin she wrote "cut through" so nobody would split the phrase.', zh: '她在页边写下「cut through」，免得有人把这个说法拆开。意思是切开。', structure: 'cut through / 表示 / 切开', grammar: 'verb，围绕「切开」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cut through and lost the point.', right: 'Keep "cut through" together: it means 切开.', reason: '「cut through」要整块理解。', rule: '先确定 cut through 是verb，再套「切开」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cut through.q1', senseId: 'cut through.s1', errorType: 'meaning', type: '词义选择', prompt: '「cut through」在本条的核心意思是：', options: ['切开', '完全相反的意思', '一种古代钱币'], answer: '切开', explain: 'cut through：切开。' },
      { id: 'cut through.q2', senseId: 'cut through.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cut through?', options: ['切开', 'a kind of ancient coin', 'the past tense of be'], answer: '切开', explain: '对的是「切开」。' },
      { id: 'cut through.q3', senseId: 'cut through.s1', errorType: 'grammar', type: '词义选择', prompt: 'cut through 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cut through.q4', senseId: 'cut through.s1', errorType: 'meaning', type: '词源', prompt: '记 cut through 时，哪句更稳妥？', options: ['先锁住「切开」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「切开」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['切开'] },
  });

  D('cut-off', {
    etymology: {
      origin: '现代英语常用词「cut-off」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cut-off', gloss: '截止' },
      suffix: null,
      history: [
        { label: 'cut-off', text: '现代英语常用词「cut-off」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：截止。' },
      ],
      formationLogic: '核心义：截止。',
      mnemonic: '看到 cut-off，先说出「截止」。',
      note: '核心义：截止。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cut-off.', chinese: '这一章反复回到同一个点：截止。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cut-off.s1', en: 'Without that cut-off, the next paragraph is hard to follow.', zh: '没有这个截止，下一段会很难读。', structure: 'cut-off / 表示 / 截止', grammar: 'noun，围绕「截止」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cut-off.', right: 'He gave me some advice about the cut-off.', reason: 'advice 不可数。名词 cut-off 的单复数按词典词形记。', rule: '先确定 cut-off 是noun，再套「截止」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cut-off.q1', senseId: 'cut-off.s1', errorType: 'meaning', type: '词义选择', prompt: '「cut-off」在本条的核心意思是：', options: ['截止', '完全相反的意思', '一种古代钱币'], answer: '截止', explain: 'cut-off：截止。' },
      { id: 'cut-off.q2', senseId: 'cut-off.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cut-off?', options: ['截止', 'a kind of ancient coin', 'the past tense of be'], answer: '截止', explain: '对的是「截止」。' },
      { id: 'cut-off.q3', senseId: 'cut-off.s1', errorType: 'grammar', type: '词义选择', prompt: 'cut-off 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cut-off.q4', senseId: 'cut-off.s1', errorType: 'meaning', type: '词源', prompt: '记 cut-off 时，哪句更稳妥？', options: ['先锁住「截止」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「截止」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['截止'] },
  });

  D('cute', {
    etymology: {
      origin: '现代英语常用词「cute」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cute', gloss: '可爱的' },
      suffix: null,
      history: [
        { label: 'cute', text: '现代英语常用词「cute」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：可爱的。' },
      ],
      formationLogic: '核心义：可爱的。',
      mnemonic: '看到 cute，先说出「可爱的」。',
      note: '核心义：可爱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cute.', chinese: '即使是初读者也能看出，这个结果是可爱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cute.s1', en: 'They wanted a cute answer, not a long speech.', zh: '他们要一个可爱的的答复，不要长篇发言。', structure: 'cute / 表示 / 可爱的', grammar: 'adjective，围绕「可爱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cute.', right: 'The news is cute.', reason: 'news 作主语时动词用单数。', rule: '先确定 cute 是adjective，再套「可爱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cute.q1', senseId: 'cute.s1', errorType: 'meaning', type: '词义选择', prompt: '「cute」在本条的核心意思是：', options: ['可爱的', '完全相反的意思', '一种古代钱币'], answer: '可爱的', explain: 'cute：可爱的。' },
      { id: 'cute.q2', senseId: 'cute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cute?', options: ['可爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '可爱的', explain: '对的是「可爱的」。' },
      { id: 'cute.q3', senseId: 'cute.s1', errorType: 'grammar', type: '词义选择', prompt: 'cute 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cute.q4', senseId: 'cute.s1', errorType: 'meaning', type: '词源', prompt: '记 cute 时，哪句更稳妥？', options: ['先锁住「可爱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可爱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可爱的'] },
  });

  D('cutlery', {
    etymology: {
      origin: '现代英语常用词「cutlery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cutlery', gloss: '餐具' },
      suffix: null,
      history: [
        { label: 'cutlery', text: '现代英语常用词「cutlery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：餐具。' },
      ],
      formationLogic: '核心义：餐具。',
      mnemonic: '看到 cutlery，先说出「餐具」。',
      note: '核心义：餐具。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cutlery.', chinese: '这一章反复回到同一个点：餐具。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cutlery.s1', en: 'Without that cutlery, the next paragraph is hard to follow.', zh: '没有这个餐具，下一段会很难读。', structure: 'cutlery / 表示 / 餐具', grammar: 'noun，围绕「餐具」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cutlery.', right: 'He gave me some advice about the cutlery.', reason: 'advice 不可数。名词 cutlery 的单复数按词典词形记。', rule: '先确定 cutlery 是noun，再套「餐具」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cutlery.q1', senseId: 'cutlery.s1', errorType: 'meaning', type: '词义选择', prompt: '「cutlery」在本条的核心意思是：', options: ['餐具', '完全相反的意思', '一种古代钱币'], answer: '餐具', explain: 'cutlery：餐具。' },
      { id: 'cutlery.q2', senseId: 'cutlery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cutlery?', options: ['餐具', 'a kind of ancient coin', 'the past tense of be'], answer: '餐具', explain: '对的是「餐具」。' },
      { id: 'cutlery.q3', senseId: 'cutlery.s1', errorType: 'grammar', type: '词义选择', prompt: 'cutlery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cutlery.q4', senseId: 'cutlery.s1', errorType: 'meaning', type: '词源', prompt: '记 cutlery 时，哪句更稳妥？', options: ['先锁住「餐具」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「餐具」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['餐具'] },
  });

  D('cutlet', {
    etymology: {
      origin: '现代英语常用词「cutlet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cutlet', gloss: '肉排' },
      suffix: null,
      history: [
        { label: 'cutlet', text: '现代英语常用词「cutlet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肉排。' },
      ],
      formationLogic: '核心义：肉排。',
      mnemonic: '看到 cutlet，先说出「肉排」。',
      note: '核心义：肉排。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cutlet.', chinese: '这一章反复回到同一个点：肉排。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cutlet.s1', en: 'Without that cutlet, the next paragraph is hard to follow.', zh: '没有这个肉排，下一段会很难读。', structure: 'cutlet / 表示 / 肉排', grammar: 'noun，围绕「肉排」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cutlet.', right: 'He gave me some advice about the cutlet.', reason: 'advice 不可数。名词 cutlet 的单复数按词典词形记。', rule: '先确定 cutlet 是noun，再套「肉排」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cutlet.q1', senseId: 'cutlet.s1', errorType: 'meaning', type: '词义选择', prompt: '「cutlet」在本条的核心意思是：', options: ['肉排', '完全相反的意思', '一种古代钱币'], answer: '肉排', explain: 'cutlet：肉排。' },
      { id: 'cutlet.q2', senseId: 'cutlet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cutlet?', options: ['肉排', 'a kind of ancient coin', 'the past tense of be'], answer: '肉排', explain: '对的是「肉排」。' },
      { id: 'cutlet.q3', senseId: 'cutlet.s1', errorType: 'grammar', type: '词义选择', prompt: 'cutlet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cutlet.q4', senseId: 'cutlet.s1', errorType: 'meaning', type: '词源', prompt: '记 cutlet 时，哪句更稳妥？', options: ['先锁住「肉排」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肉排」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肉排'] },
  });

  D('cutter', {
    etymology: {
      origin: '英语派生：cutt + -er，词性转到「刀具」。',
      prefix: null,
      root: { text: 'cutt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cutter', text: '英语派生：cutt + -er，词性转到「刀具」。' },
        { label: '现在', text: '核心用法是：刀具。' },
      ],
      formationLogic: '先认词干 cutt，再看词尾。',
      mnemonic: '看到 cutter，先说出「刀具」。',
      note: '先认词干 cutt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cutter.', chinese: '这一章反复回到同一个点：刀具。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cutter.s1', en: 'Without that cutter, the next paragraph is hard to follow.', zh: '没有这个刀具，下一段会很难读。', structure: 'cutter / 表示 / 刀具', grammar: 'noun，围绕「刀具」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cutter.', right: 'He gave me some advice about the cutter.', reason: 'advice 不可数。名词 cutter 的单复数按词典词形记。', rule: '先确定 cutter 是noun，再套「刀具」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cutter.q1', senseId: 'cutter.s1', errorType: 'meaning', type: '词义选择', prompt: '「cutter」在本条的核心意思是：', options: ['刀具', '完全相反的意思', '一种古代钱币'], answer: '刀具', explain: 'cutter：刀具。' },
      { id: 'cutter.q2', senseId: 'cutter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cutter?', options: ['刀具', 'a kind of ancient coin', 'the past tense of be'], answer: '刀具', explain: '对的是「刀具」。' },
      { id: 'cutter.q3', senseId: 'cutter.s1', errorType: 'grammar', type: '词义选择', prompt: 'cutter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cutter.q4', senseId: 'cutter.s1', errorType: 'meaning', type: '词源', prompt: '记 cutter 时，哪句更稳妥？', options: ['先锁住「刀具」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「刀具」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['刀具'] },
  });

  D('cutters', {
    etymology: {
      origin: '现代英语常用词「cutters」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cutters', gloss: '剪线钳' },
      suffix: null,
      history: [
        { label: 'cutters', text: '现代英语常用词「cutters」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：剪线钳。' },
      ],
      formationLogic: '核心义：剪线钳。',
      mnemonic: '看到 cutters，先说出「剪线钳」。',
      note: '核心义：剪线钳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cutters.', chinese: '这一章反复回到同一个点：剪线钳。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cutters.s1', en: 'Without that cutters, the next paragraph is hard to follow.', zh: '没有这个剪线钳，下一段会很难读。', structure: 'cutters / 表示 / 剪线钳', grammar: 'noun，围绕「剪线钳」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cutters.', right: 'He gave me some advice about the cutters.', reason: 'advice 不可数。名词 cutters 的单复数按词典词形记。', rule: '先确定 cutters 是noun，再套「剪线钳」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cutters.q1', senseId: 'cutters.s1', errorType: 'meaning', type: '词义选择', prompt: '「cutters」在本条的核心意思是：', options: ['剪线钳', '完全相反的意思', '一种古代钱币'], answer: '剪线钳', explain: 'cutters：剪线钳。' },
      { id: 'cutters.q2', senseId: 'cutters.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cutters?', options: ['剪线钳', 'a kind of ancient coin', 'the past tense of be'], answer: '剪线钳', explain: '对的是「剪线钳」。' },
      { id: 'cutters.q3', senseId: 'cutters.s1', errorType: 'grammar', type: '词义选择', prompt: 'cutters 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cutters.q4', senseId: 'cutters.s1', errorType: 'meaning', type: '词源', prompt: '记 cutters 时，哪句更稳妥？', options: ['先锁住「剪线钳」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「剪线钳」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['剪线钳'] },
  });

  D('cv', {
    etymology: {
      origin: '现代英语常用词「cv」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cv', gloss: '简历' },
      suffix: null,
      history: [
        { label: 'cv', text: '现代英语常用词「cv」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：简历。' },
      ],
      formationLogic: '核心义：简历。',
      mnemonic: '看到 cv，先说出「简历」。',
      note: '核心义：简历。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cv.', chinese: '这一章反复回到同一个点：简历。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cv.s1', en: 'Without that cv, the next paragraph is hard to follow.', zh: '没有这个简历，下一段会很难读。', structure: 'cv / 表示 / 简历', grammar: 'noun，围绕「简历」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cv.', right: 'He gave me some advice about the cv.', reason: 'advice 不可数。名词 cv 的单复数按词典词形记。', rule: '先确定 cv 是noun，再套「简历」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cv.q1', senseId: 'cv.s1', errorType: 'meaning', type: '词义选择', prompt: '「cv」在本条的核心意思是：', options: ['简历', '完全相反的意思', '一种古代钱币'], answer: '简历', explain: 'cv：简历。' },
      { id: 'cv.q2', senseId: 'cv.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cv?', options: ['简历', 'a kind of ancient coin', 'the past tense of be'], answer: '简历', explain: '对的是「简历」。' },
      { id: 'cv.q3', senseId: 'cv.s1', errorType: 'grammar', type: '词义选择', prompt: 'cv 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cv.q4', senseId: 'cv.s1', errorType: 'meaning', type: '词源', prompt: '记 cv 时，哪句更稳妥？', options: ['先锁住「简历」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「简历」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['简历'] },
  });

  D('cyberspace', {
    etymology: {
      origin: '现代英语常用词「cyberspace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cyberspace', gloss: '网络空间' },
      suffix: null,
      history: [
        { label: 'cyberspace', text: '现代英语常用词「cyberspace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：网络空间。' },
      ],
      formationLogic: '核心义：网络空间。',
      mnemonic: '看到 cyberspace，先说出「网络空间」。',
      note: '核心义：网络空间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cyberspace.', chinese: '这一章反复回到同一个点：网络空间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cyberspace.s1', en: 'Without that cyberspace, the next paragraph is hard to follow.', zh: '没有这个网络空间，下一段会很难读。', structure: 'cyberspace / 表示 / 网络空间', grammar: 'noun，围绕「网络空间」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cyberspace.', right: 'He gave me some advice about the cyberspace.', reason: 'advice 不可数。名词 cyberspace 的单复数按词典词形记。', rule: '先确定 cyberspace 是noun，再套「网络空间」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cyberspace.q1', senseId: 'cyberspace.s1', errorType: 'meaning', type: '词义选择', prompt: '「cyberspace」在本条的核心意思是：', options: ['网络空间', '完全相反的意思', '一种古代钱币'], answer: '网络空间', explain: 'cyberspace：网络空间。' },
      { id: 'cyberspace.q2', senseId: 'cyberspace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cyberspace?', options: ['网络空间', 'a kind of ancient coin', 'the past tense of be'], answer: '网络空间', explain: '对的是「网络空间」。' },
      { id: 'cyberspace.q3', senseId: 'cyberspace.s1', errorType: 'grammar', type: '词义选择', prompt: 'cyberspace 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cyberspace.q4', senseId: 'cyberspace.s1', errorType: 'meaning', type: '词源', prompt: '记 cyberspace 时，哪句更稳妥？', options: ['先锁住「网络空间」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「网络空间」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['网络空间'] },
  });

  D('cycle', {
    etymology: {
      origin: '希腊语 kyklos「圆、轮」。',
      prefix: null,
      root: { text: 'cycle', gloss: '循环' },
      suffix: null,
      history: [
        { label: 'cycle', text: '希腊语 kyklos「圆、轮」。' },
        { label: '现在', text: '核心用法是：循环。' },
      ],
      formationLogic: '考试认现在的用法：循环。',
      mnemonic: '看到 cycle，先说出「循环」。',
      note: '考试认现在的用法：循环。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cycle.', chinese: '这一章反复回到同一个点：循环。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cycle.s1', en: 'Without that cycle, the next paragraph is hard to follow.', zh: '没有这个循环，下一段会很难读。', structure: 'cycle / 表示 / 循环', grammar: 'noun，围绕「循环」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cycle.', right: 'He gave me some advice about the cycle.', reason: 'advice 不可数。名词 cycle 的单复数按词典词形记。', rule: '先确定 cycle 是noun，再套「循环」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cycle.q1', senseId: 'cycle.s1', errorType: 'meaning', type: '词义选择', prompt: '「cycle」在本条的核心意思是：', options: ['循环', '完全相反的意思', '一种古代钱币'], answer: '循环', explain: 'cycle：循环。' },
      { id: 'cycle.q2', senseId: 'cycle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cycle?', options: ['循环', 'a kind of ancient coin', 'the past tense of be'], answer: '循环', explain: '对的是「循环」。' },
      { id: 'cycle.q3', senseId: 'cycle.s1', errorType: 'grammar', type: '词义选择', prompt: 'cycle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cycle.q4', senseId: 'cycle.s1', errorType: 'meaning', type: '词源', prompt: '记 cycle 时，哪句更稳妥？', options: ['先锁住「循环」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「循环」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['循环'] },
  });

  D('cyclone', {
    etymology: {
      origin: '现代英语常用词「cyclone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cyclone', gloss: '气旋' },
      suffix: null,
      history: [
        { label: 'cyclone', text: '现代英语常用词「cyclone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：气旋。' },
      ],
      formationLogic: '核心义：气旋。',
      mnemonic: '看到 cyclone，先说出「气旋」。',
      note: '核心义：气旋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cyclone.', chinese: '这一章反复回到同一个点：气旋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cyclone.s1', en: 'Without that cyclone, the next paragraph is hard to follow.', zh: '没有这个气旋，下一段会很难读。', structure: 'cyclone / 表示 / 气旋', grammar: 'noun，围绕「气旋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cyclone.', right: 'He gave me some advice about the cyclone.', reason: 'advice 不可数。名词 cyclone 的单复数按词典词形记。', rule: '先确定 cyclone 是noun，再套「气旋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cyclone.q1', senseId: 'cyclone.s1', errorType: 'meaning', type: '词义选择', prompt: '「cyclone」在本条的核心意思是：', options: ['气旋', '完全相反的意思', '一种古代钱币'], answer: '气旋', explain: 'cyclone：气旋。' },
      { id: 'cyclone.q2', senseId: 'cyclone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cyclone?', options: ['气旋', 'a kind of ancient coin', 'the past tense of be'], answer: '气旋', explain: '对的是「气旋」。' },
      { id: 'cyclone.q3', senseId: 'cyclone.s1', errorType: 'grammar', type: '词义选择', prompt: 'cyclone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cyclone.q4', senseId: 'cyclone.s1', errorType: 'meaning', type: '词源', prompt: '记 cyclone 时，哪句更稳妥？', options: ['先锁住「气旋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「气旋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['气旋'] },
  });

  D('cylinder', {
    etymology: {
      origin: '英语派生：cylind + -er，词性转到「圆柱」。',
      prefix: null,
      root: { text: 'cylind', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cylinder', text: '英语派生：cylind + -er，词性转到「圆柱」。' },
        { label: '现在', text: '核心用法是：圆柱。' },
      ],
      formationLogic: '先认词干 cylind，再看词尾。',
      mnemonic: '看到 cylinder，先说出「圆柱」。',
      note: '先认词干 cylind，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cylinder.', chinese: '这一章反复回到同一个点：圆柱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cylinder.s1', en: 'Without that cylinder, the next paragraph is hard to follow.', zh: '没有这个圆柱，下一段会很难读。', structure: 'cylinder / 表示 / 圆柱', grammar: 'noun，围绕「圆柱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cylinder.', right: 'He gave me some advice about the cylinder.', reason: 'advice 不可数。名词 cylinder 的单复数按词典词形记。', rule: '先确定 cylinder 是noun，再套「圆柱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cylinder.q1', senseId: 'cylinder.s1', errorType: 'meaning', type: '词义选择', prompt: '「cylinder」在本条的核心意思是：', options: ['圆柱', '完全相反的意思', '一种古代钱币'], answer: '圆柱', explain: 'cylinder：圆柱。' },
      { id: 'cylinder.q2', senseId: 'cylinder.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cylinder?', options: ['圆柱', 'a kind of ancient coin', 'the past tense of be'], answer: '圆柱', explain: '对的是「圆柱」。' },
      { id: 'cylinder.q3', senseId: 'cylinder.s1', errorType: 'grammar', type: '词义选择', prompt: 'cylinder 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cylinder.q4', senseId: 'cylinder.s1', errorType: 'meaning', type: '词源', prompt: '记 cylinder 时，哪句更稳妥？', options: ['先锁住「圆柱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「圆柱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['圆柱'] },
  });

  D('cynical', {
    etymology: {
      origin: '英语派生：cynic + -al，词性转到「愤世嫉俗的」。',
      prefix: null,
      root: { text: 'cynic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cynical', text: '英语派生：cynic + -al，词性转到「愤世嫉俗的」。' },
        { label: '现在', text: '核心用法是：愤世嫉俗的。' },
      ],
      formationLogic: '先认词干 cynic，再看词尾。',
      mnemonic: '看到 cynical，先说出「愤世嫉俗的」。',
      note: '先认词干 cynic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cynical.', chinese: '即使是初读者也能看出，这个结果是愤世嫉俗的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cynical.s1', en: 'They wanted a cynical answer, not a long speech.', zh: '他们要一个愤世嫉俗的的答复，不要长篇发言。', structure: 'cynical / 表示 / 愤世嫉俗的', grammar: 'adjective，围绕「愤世嫉俗的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cynical.', right: 'The news is cynical.', reason: 'news 作主语时动词用单数。', rule: '先确定 cynical 是adjective，再套「愤世嫉俗的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cynical.q1', senseId: 'cynical.s1', errorType: 'meaning', type: '词义选择', prompt: '「cynical」在本条的核心意思是：', options: ['愤世嫉俗的', '完全相反的意思', '一种古代钱币'], answer: '愤世嫉俗的', explain: 'cynical：愤世嫉俗的。' },
      { id: 'cynical.q2', senseId: 'cynical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cynical?', options: ['愤世嫉俗的', 'a kind of ancient coin', 'the past tense of be'], answer: '愤世嫉俗的', explain: '对的是「愤世嫉俗的」。' },
      { id: 'cynical.q3', senseId: 'cynical.s1', errorType: 'grammar', type: '词义选择', prompt: 'cynical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cynical.q4', senseId: 'cynical.s1', errorType: 'meaning', type: '词源', prompt: '记 cynical 时，哪句更稳妥？', options: ['先锁住「愤世嫉俗的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愤世嫉俗的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愤世嫉俗的'] },
  });

  D('cynicism', {
    etymology: {
      origin: '英语派生：cynic + -ism，词性转到「愤世嫉俗」。',
      prefix: null,
      root: { text: 'cynic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cynicism', text: '英语派生：cynic + -ism，词性转到「愤世嫉俗」。' },
        { label: '现在', text: '核心用法是：愤世嫉俗。' },
      ],
      formationLogic: '先认词干 cynic，再看词尾。',
      mnemonic: '看到 cynicism，先说出「愤世嫉俗」。',
      note: '先认词干 cynic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cynicism.', chinese: '这一章反复回到同一个点：愤世嫉俗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cynicism.s1', en: 'Without that cynicism, the next paragraph is hard to follow.', zh: '没有这个愤世嫉俗，下一段会很难读。', structure: 'cynicism / 表示 / 愤世嫉俗', grammar: 'noun，围绕「愤世嫉俗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cynicism.', right: 'He gave me some advice about the cynicism.', reason: 'advice 不可数。名词 cynicism 的单复数按词典词形记。', rule: '先确定 cynicism 是noun，再套「愤世嫉俗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cynicism.q1', senseId: 'cynicism.s1', errorType: 'meaning', type: '词义选择', prompt: '「cynicism」在本条的核心意思是：', options: ['愤世嫉俗', '完全相反的意思', '一种古代钱币'], answer: '愤世嫉俗', explain: 'cynicism：愤世嫉俗。' },
      { id: 'cynicism.q2', senseId: 'cynicism.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cynicism?', options: ['愤世嫉俗', 'a kind of ancient coin', 'the past tense of be'], answer: '愤世嫉俗', explain: '对的是「愤世嫉俗」。' },
      { id: 'cynicism.q3', senseId: 'cynicism.s1', errorType: 'grammar', type: '词义选择', prompt: 'cynicism 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cynicism.q4', senseId: 'cynicism.s1', errorType: 'meaning', type: '词源', prompt: '记 cynicism 时，哪句更稳妥？', options: ['先锁住「愤世嫉俗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愤世嫉俗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愤世嫉俗'] },
  });

  D('dab', {
    etymology: {
      origin: '现代英语常用词「dab」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dab', gloss: '少量' },
      suffix: null,
      history: [
        { label: 'dab', text: '现代英语常用词「dab」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：少量。' },
      ],
      formationLogic: '核心义：少量。',
      mnemonic: '看到 dab，先说出「少量」。',
      note: '核心义：少量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dab.', chinese: '这一章反复回到同一个点：少量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dab.s1', en: 'Without that dab, the next paragraph is hard to follow.', zh: '没有这个少量，下一段会很难读。', structure: 'dab / 表示 / 少量', grammar: 'noun，围绕「少量」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dab.', right: 'He gave me some advice about the dab.', reason: 'advice 不可数。名词 dab 的单复数按词典词形记。', rule: '先确定 dab 是noun，再套「少量」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dab.q1', senseId: 'dab.s1', errorType: 'meaning', type: '词义选择', prompt: '「dab」在本条的核心意思是：', options: ['少量', '完全相反的意思', '一种古代钱币'], answer: '少量', explain: 'dab：少量。' },
      { id: 'dab.q2', senseId: 'dab.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dab?', options: ['少量', 'a kind of ancient coin', 'the past tense of be'], answer: '少量', explain: '对的是「少量」。' },
      { id: 'dab.q3', senseId: 'dab.s1', errorType: 'grammar', type: '词义选择', prompt: 'dab 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dab.q4', senseId: 'dab.s1', errorType: 'meaning', type: '词源', prompt: '记 dab 时，哪句更稳妥？', options: ['先锁住「少量」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「少量」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['少量'] },
  });

  D('dad', {
    etymology: {
      origin: '现代英语常用词「dad」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dad', gloss: '爸爸' },
      suffix: null,
      history: [
        { label: 'dad', text: '现代英语常用词「dad」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：爸爸。' },
      ],
      formationLogic: '核心义：爸爸。',
      mnemonic: '看到 dad，先说出「爸爸」。',
      note: '核心义：爸爸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dad.', chinese: '这一章反复回到同一个点：爸爸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dad.s1', en: 'Without that dad, the next paragraph is hard to follow.', zh: '没有这个爸爸，下一段会很难读。', structure: 'dad / 表示 / 爸爸', grammar: 'noun，围绕「爸爸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dad.', right: 'He gave me some advice about the dad.', reason: 'advice 不可数。名词 dad 的单复数按词典词形记。', rule: '先确定 dad 是noun，再套「爸爸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dad.q1', senseId: 'dad.s1', errorType: 'meaning', type: '词义选择', prompt: '「dad」在本条的核心意思是：', options: ['爸爸', '完全相反的意思', '一种古代钱币'], answer: '爸爸', explain: 'dad：爸爸。' },
      { id: 'dad.q2', senseId: 'dad.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dad?', options: ['爸爸', 'a kind of ancient coin', 'the past tense of be'], answer: '爸爸', explain: '对的是「爸爸」。' },
      { id: 'dad.q3', senseId: 'dad.s1', errorType: 'grammar', type: '词义选择', prompt: 'dad 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dad.q4', senseId: 'dad.s1', errorType: 'meaning', type: '词源', prompt: '记 dad 时，哪句更稳妥？', options: ['先锁住「爸爸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爸爸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爸爸'] },
  });

  D('daily', {
    etymology: {
      origin: 'day + -ly。',
      prefix: null,
      root: { text: 'daily', gloss: '每日的' },
      suffix: null,
      history: [
        { label: 'daily', text: 'day + -ly。' },
        { label: '现在', text: '核心用法是：每日的。' },
      ],
      formationLogic: '考试认现在的用法：每日的。',
      mnemonic: '看到 daily，先说出「每日的」。',
      note: '考试认现在的用法：每日的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was daily.', chinese: '即使是初读者也能看出，这个结果是每日的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daily.s1', en: 'They wanted a daily answer, not a long speech.', zh: '他们要一个每日的的答复，不要长篇发言。', structure: 'daily / 表示 / 每日的', grammar: 'adjective，围绕「每日的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are daily.', right: 'The news is daily.', reason: 'news 作主语时动词用单数。', rule: '先确定 daily 是adjective，再套「每日的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daily.q1', senseId: 'daily.s1', errorType: 'meaning', type: '词义选择', prompt: '「daily」在本条的核心意思是：', options: ['每日的', '完全相反的意思', '一种古代钱币'], answer: '每日的', explain: 'daily：每日的。' },
      { id: 'daily.q2', senseId: 'daily.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daily?', options: ['每日的', 'a kind of ancient coin', 'the past tense of be'], answer: '每日的', explain: '对的是「每日的」。' },
      { id: 'daily.q3', senseId: 'daily.s1', errorType: 'grammar', type: '词义选择', prompt: 'daily 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'daily.q4', senseId: 'daily.s1', errorType: 'meaning', type: '词源', prompt: '记 daily 时，哪句更稳妥？', options: ['先锁住「每日的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每日的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每日的'] },
  });

  D('dairy', {
    etymology: {
      origin: '现代英语常用词「dairy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dairy', gloss: '乳制品' },
      suffix: null,
      history: [
        { label: 'dairy', text: '现代英语常用词「dairy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：乳制品。' },
      ],
      formationLogic: '核心义：乳制品。',
      mnemonic: '看到 dairy，先说出「乳制品」。',
      note: '核心义：乳制品。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dairy.', chinese: '这一章反复回到同一个点：乳制品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dairy.s1', en: 'Without that dairy, the next paragraph is hard to follow.', zh: '没有这个乳制品，下一段会很难读。', structure: 'dairy / 表示 / 乳制品', grammar: 'noun，围绕「乳制品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dairy.', right: 'He gave me some advice about the dairy.', reason: 'advice 不可数。名词 dairy 的单复数按词典词形记。', rule: '先确定 dairy 是noun，再套「乳制品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dairy.q1', senseId: 'dairy.s1', errorType: 'meaning', type: '词义选择', prompt: '「dairy」在本条的核心意思是：', options: ['乳制品', '完全相反的意思', '一种古代钱币'], answer: '乳制品', explain: 'dairy：乳制品。' },
      { id: 'dairy.q2', senseId: 'dairy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dairy?', options: ['乳制品', 'a kind of ancient coin', 'the past tense of be'], answer: '乳制品', explain: '对的是「乳制品」。' },
      { id: 'dairy.q3', senseId: 'dairy.s1', errorType: 'grammar', type: '词义选择', prompt: 'dairy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dairy.q4', senseId: 'dairy.s1', errorType: 'meaning', type: '词源', prompt: '记 dairy 时，哪句更稳妥？', options: ['先锁住「乳制品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乳制品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乳制品'] },
  });

  D('dais', {
    etymology: {
      origin: '现代英语常用词「dais」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dais', gloss: '讲台' },
      suffix: null,
      history: [
        { label: 'dais', text: '现代英语常用词「dais」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：讲台。' },
      ],
      formationLogic: '核心义：讲台。',
      mnemonic: '看到 dais，先说出「讲台」。',
      note: '核心义：讲台。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dais.', chinese: '这一章反复回到同一个点：讲台。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dais.s1', en: 'Without that dais, the next paragraph is hard to follow.', zh: '没有这个讲台，下一段会很难读。', structure: 'dais / 表示 / 讲台', grammar: 'noun，围绕「讲台」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dais.', right: 'He gave me some advice about the dais.', reason: 'advice 不可数。名词 dais 的单复数按词典词形记。', rule: '先确定 dais 是noun，再套「讲台」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dais.q1', senseId: 'dais.s1', errorType: 'meaning', type: '词义选择', prompt: '「dais」在本条的核心意思是：', options: ['讲台', '完全相反的意思', '一种古代钱币'], answer: '讲台', explain: 'dais：讲台。' },
      { id: 'dais.q2', senseId: 'dais.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dais?', options: ['讲台', 'a kind of ancient coin', 'the past tense of be'], answer: '讲台', explain: '对的是「讲台」。' },
      { id: 'dais.q3', senseId: 'dais.s1', errorType: 'grammar', type: '词义选择', prompt: 'dais 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dais.q4', senseId: 'dais.s1', errorType: 'meaning', type: '词源', prompt: '记 dais 时，哪句更稳妥？', options: ['先锁住「讲台」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「讲台」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['讲台'] },
  });

  D('dale', {
    etymology: {
      origin: '现代英语常用词「dale」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dale', gloss: '（北英）溪谷' },
      suffix: null,
      history: [
        { label: 'dale', text: '现代英语常用词「dale」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（北英）溪谷。' },
      ],
      formationLogic: '核心义：（北英）溪谷。',
      mnemonic: '看到 dale，先说出「（北英）溪谷」。',
      note: '核心义：（北英）溪谷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dale.', chinese: '这一章反复回到同一个点：（北英）溪谷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dale.s1', en: 'Without that dale, the next paragraph is hard to follow.', zh: '没有这个（北英）溪谷，下一段会很难读。', structure: 'dale / 表示 / （北英）溪谷', grammar: 'noun，围绕「（北英）溪谷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dale.', right: 'He gave me some advice about the dale.', reason: 'advice 不可数。名词 dale 的单复数按词典词形记。', rule: '先确定 dale 是noun，再套「（北英）溪谷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dale.q1', senseId: 'dale.s1', errorType: 'meaning', type: '词义选择', prompt: '「dale」在本条的核心意思是：', options: ['（北英）溪谷', '完全相反的意思', '一种古代钱币'], answer: '（北英）溪谷', explain: 'dale：（北英）溪谷。' },
      { id: 'dale.q2', senseId: 'dale.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dale?', options: ['（北英）溪谷', 'a kind of ancient coin', 'the past tense of be'], answer: '（北英）溪谷', explain: '对的是「（北英）溪谷」。' },
      { id: 'dale.q3', senseId: 'dale.s1', errorType: 'grammar', type: '词义选择', prompt: 'dale 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dale.q4', senseId: 'dale.s1', errorType: 'meaning', type: '词源', prompt: '记 dale 时，哪句更稳妥？', options: ['先锁住「（北英）溪谷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（北英）溪谷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（北英）溪谷'] },
  });

  D('dally', {
    etymology: {
      origin: '英语派生：dal + -ly，词性转到「闲混」。',
      prefix: null,
      root: { text: 'dal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dally', text: '英语派生：dal + -ly，词性转到「闲混」。' },
        { label: '现在', text: '核心用法是：闲混。' },
      ],
      formationLogic: '先认词干 dal，再看词尾。',
      mnemonic: '看到 dally，先说出「闲混」。',
      note: '先认词干 dal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dally before the office closed.', chinese: '他们同意在办公室关门前做这件事：闲混。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dally.s1', en: 'The deadline forced the team to dally that afternoon.', zh: '截止日期逼着小组在那天下午闲混。', structure: 'dally / 表示 / 闲混', grammar: 'verb，围绕「闲混」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dallyed it yesterday without checking the real past form.', right: 'Check the past form of "dally" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dally 是verb，再套「闲混」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dally.q1', senseId: 'dally.s1', errorType: 'meaning', type: '词义选择', prompt: '「dally」在本条的核心意思是：', options: ['闲混', '完全相反的意思', '一种古代钱币'], answer: '闲混', explain: 'dally：闲混。' },
      { id: 'dally.q2', senseId: 'dally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dally?', options: ['闲混', 'a kind of ancient coin', 'the past tense of be'], answer: '闲混', explain: '对的是「闲混」。' },
      { id: 'dally.q3', senseId: 'dally.s1', errorType: 'grammar', type: '词义选择', prompt: 'dally 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dally.q4', senseId: 'dally.s1', errorType: 'meaning', type: '词源', prompt: '记 dally 时，哪句更稳妥？', options: ['先锁住「闲混」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闲混」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闲混'] },
  });

  D('dam', {
    etymology: {
      origin: '现代英语常用词「dam」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dam', gloss: '水坝' },
      suffix: null,
      history: [
        { label: 'dam', text: '现代英语常用词「dam」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：水坝。' },
      ],
      formationLogic: '核心义：水坝。',
      mnemonic: '看到 dam，先说出「水坝」。',
      note: '核心义：水坝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dam.', chinese: '这一章反复回到同一个点：水坝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dam.s1', en: 'Without that dam, the next paragraph is hard to follow.', zh: '没有这个水坝，下一段会很难读。', structure: 'dam / 表示 / 水坝', grammar: 'noun，围绕「水坝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dam.', right: 'He gave me some advice about the dam.', reason: 'advice 不可数。名词 dam 的单复数按词典词形记。', rule: '先确定 dam 是noun，再套「水坝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dam.q1', senseId: 'dam.s1', errorType: 'meaning', type: '词义选择', prompt: '「dam」在本条的核心意思是：', options: ['水坝', '完全相反的意思', '一种古代钱币'], answer: '水坝', explain: 'dam：水坝。' },
      { id: 'dam.q2', senseId: 'dam.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dam?', options: ['水坝', 'a kind of ancient coin', 'the past tense of be'], answer: '水坝', explain: '对的是「水坝」。' },
      { id: 'dam.q3', senseId: 'dam.s1', errorType: 'grammar', type: '词义选择', prompt: 'dam 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dam.q4', senseId: 'dam.s1', errorType: 'meaning', type: '词源', prompt: '记 dam 时，哪句更稳妥？', options: ['先锁住「水坝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「水坝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['水坝'] },
  });

  D('damage', {
    etymology: {
      origin: '拉丁语 damnum「损失」。',
      prefix: null,
      root: { text: 'damage', gloss: '损坏' },
      suffix: null,
      history: [
        { label: 'damage', text: '拉丁语 damnum「损失」。' },
        { label: '现在', text: '核心用法是：损坏。' },
      ],
      formationLogic: '考试认现在的用法：损坏。',
      mnemonic: '看到 damage，先说出「损坏」。',
      note: '考试认现在的用法：损坏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one damage.', chinese: '这一章反复回到同一个点：损坏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'damage.s1', en: 'Without that damage, the next paragraph is hard to follow.', zh: '没有这个损坏，下一段会很难读。', structure: 'damage / 表示 / 损坏', grammar: 'noun，围绕「损坏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the damage.', right: 'He gave me some advice about the damage.', reason: 'advice 不可数。名词 damage 的单复数按词典词形记。', rule: '先确定 damage 是noun，再套「损坏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'damage.q1', senseId: 'damage.s1', errorType: 'meaning', type: '词义选择', prompt: '「damage」在本条的核心意思是：', options: ['损坏', '完全相反的意思', '一种古代钱币'], answer: '损坏', explain: 'damage：损坏。' },
      { id: 'damage.q2', senseId: 'damage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches damage?', options: ['损坏', 'a kind of ancient coin', 'the past tense of be'], answer: '损坏', explain: '对的是「损坏」。' },
      { id: 'damage.q3', senseId: 'damage.s1', errorType: 'grammar', type: '词义选择', prompt: 'damage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'damage.q4', senseId: 'damage.s1', errorType: 'meaning', type: '词源', prompt: '记 damage 时，哪句更稳妥？', options: ['先锁住「损坏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「损坏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['损坏'] },
  });

  D('damaged', {
    etymology: {
      origin: '现代英语常用词「damaged」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'damaged', gloss: '损坏的' },
      suffix: null,
      history: [
        { label: 'damaged', text: '现代英语常用词「damaged」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：损坏的。' },
      ],
      formationLogic: '核心义：损坏的。',
      mnemonic: '看到 damaged，先说出「损坏的」。',
      note: '核心义：损坏的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was damaged.', chinese: '即使是初读者也能看出，这个结果是损坏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'damaged.s1', en: 'They wanted a damaged answer, not a long speech.', zh: '他们要一个损坏的的答复，不要长篇发言。', structure: 'damaged / 表示 / 损坏的', grammar: 'adjective，围绕「损坏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are damaged.', right: 'The news is damaged.', reason: 'news 作主语时动词用单数。', rule: '先确定 damaged 是adjective，再套「损坏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'damaged.q1', senseId: 'damaged.s1', errorType: 'meaning', type: '词义选择', prompt: '「damaged」在本条的核心意思是：', options: ['损坏的', '完全相反的意思', '一种古代钱币'], answer: '损坏的', explain: 'damaged：损坏的。' },
      { id: 'damaged.q2', senseId: 'damaged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches damaged?', options: ['损坏的', 'a kind of ancient coin', 'the past tense of be'], answer: '损坏的', explain: '对的是「损坏的」。' },
      { id: 'damaged.q3', senseId: 'damaged.s1', errorType: 'grammar', type: '词义选择', prompt: 'damaged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'damaged.q4', senseId: 'damaged.s1', errorType: 'meaning', type: '词源', prompt: '记 damaged 时，哪句更稳妥？', options: ['先锁住「损坏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「损坏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['损坏的'] },
  });

  D('dame', {
    etymology: {
      origin: '现代英语常用词「dame」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dame', gloss: '夫人' },
      suffix: null,
      history: [
        { label: 'dame', text: '现代英语常用词「dame」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：夫人。' },
      ],
      formationLogic: '核心义：夫人。',
      mnemonic: '看到 dame，先说出「夫人」。',
      note: '核心义：夫人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dame.', chinese: '这一章反复回到同一个点：夫人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dame.s1', en: 'Without that dame, the next paragraph is hard to follow.', zh: '没有这个夫人，下一段会很难读。', structure: 'dame / 表示 / 夫人', grammar: 'noun，围绕「夫人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dame.', right: 'He gave me some advice about the dame.', reason: 'advice 不可数。名词 dame 的单复数按词典词形记。', rule: '先确定 dame 是noun，再套「夫人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dame.q1', senseId: 'dame.s1', errorType: 'meaning', type: '词义选择', prompt: '「dame」在本条的核心意思是：', options: ['夫人', '完全相反的意思', '一种古代钱币'], answer: '夫人', explain: 'dame：夫人。' },
      { id: 'dame.q2', senseId: 'dame.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dame?', options: ['夫人', 'a kind of ancient coin', 'the past tense of be'], answer: '夫人', explain: '对的是「夫人」。' },
      { id: 'dame.q3', senseId: 'dame.s1', errorType: 'grammar', type: '词义选择', prompt: 'dame 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dame.q4', senseId: 'dame.s1', errorType: 'meaning', type: '词源', prompt: '记 dame 时，哪句更稳妥？', options: ['先锁住「夫人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「夫人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['夫人'] },
  });

  D('damn', {
    etymology: {
      origin: '现代英语常用词「damn」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'damn', gloss: '诅咒' },
      suffix: null,
      history: [
        { label: 'damn', text: '现代英语常用词「damn」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：诅咒。' },
      ],
      formationLogic: '核心义：诅咒。',
      mnemonic: '看到 damn，先说出「诅咒」。',
      note: '核心义：诅咒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to damn before the office closed.', chinese: '他们同意在办公室关门前做这件事：诅咒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'damn.s1', en: 'The deadline forced the team to damn that afternoon.', zh: '截止日期逼着小组在那天下午诅咒。', structure: 'damn / 表示 / 诅咒', grammar: 'verb，围绕「诅咒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She damned it yesterday without checking the real past form.', right: 'Check the past form of "damn" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 damn 是verb，再套「诅咒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'damn.q1', senseId: 'damn.s1', errorType: 'meaning', type: '词义选择', prompt: '「damn」在本条的核心意思是：', options: ['诅咒', '完全相反的意思', '一种古代钱币'], answer: '诅咒', explain: 'damn：诅咒。' },
      { id: 'damn.q2', senseId: 'damn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches damn?', options: ['诅咒', 'a kind of ancient coin', 'the past tense of be'], answer: '诅咒', explain: '对的是「诅咒」。' },
      { id: 'damn.q3', senseId: 'damn.s1', errorType: 'grammar', type: '词义选择', prompt: 'damn 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'damn.q4', senseId: 'damn.s1', errorType: 'meaning', type: '词源', prompt: '记 damn 时，哪句更稳妥？', options: ['先锁住「诅咒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「诅咒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诅咒'] },
  });

  D('damp', {
    etymology: {
      origin: '日耳曼语「蒸汽、湿」。',
      prefix: null,
      root: { text: 'damp', gloss: '潮湿的' },
      suffix: null,
      history: [
        { label: 'damp', text: '日耳曼语「蒸汽、湿」。' },
        { label: '现在', text: '核心用法是：潮湿的。' },
      ],
      formationLogic: '考试认现在的用法：潮湿的。',
      mnemonic: '看到 damp，先说出「潮湿的」。',
      note: '考试认现在的用法：潮湿的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was damp.', chinese: '即使是初读者也能看出，这个结果是潮湿的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'damp.s1', en: 'They wanted a damp answer, not a long speech.', zh: '他们要一个潮湿的的答复，不要长篇发言。', structure: 'damp / 表示 / 潮湿的', grammar: 'adjective，围绕「潮湿的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are damp.', right: 'The news is damp.', reason: 'news 作主语时动词用单数。', rule: '先确定 damp 是adjective，再套「潮湿的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'damp.q1', senseId: 'damp.s1', errorType: 'meaning', type: '词义选择', prompt: '「damp」在本条的核心意思是：', options: ['潮湿的', '完全相反的意思', '一种古代钱币'], answer: '潮湿的', explain: 'damp：潮湿的。' },
      { id: 'damp.q2', senseId: 'damp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches damp?', options: ['潮湿的', 'a kind of ancient coin', 'the past tense of be'], answer: '潮湿的', explain: '对的是「潮湿的」。' },
      { id: 'damp.q3', senseId: 'damp.s1', errorType: 'grammar', type: '词义选择', prompt: 'damp 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'damp.q4', senseId: 'damp.s1', errorType: 'meaning', type: '词源', prompt: '记 damp 时，哪句更稳妥？', options: ['先锁住「潮湿的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「潮湿的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['潮湿的'] },
  });

  D('dampen', {
    etymology: {
      origin: '现代英语常用词「dampen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dampen', gloss: '使潮湿' },
      suffix: null,
      history: [
        { label: 'dampen', text: '现代英语常用词「dampen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使潮湿。' },
      ],
      formationLogic: '核心义：使潮湿。',
      mnemonic: '看到 dampen，先说出「使潮湿」。',
      note: '核心义：使潮湿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dampen before the office closed.', chinese: '他们同意在办公室关门前做这件事：使潮湿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dampen.s1', en: 'The deadline forced the team to dampen that afternoon.', zh: '截止日期逼着小组在那天下午使潮湿。', structure: 'dampen / 表示 / 使潮湿', grammar: 'verb，围绕「使潮湿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dampened it yesterday without checking the real past form.', right: 'Check the past form of "dampen" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dampen 是verb，再套「使潮湿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dampen.q1', senseId: 'dampen.s1', errorType: 'meaning', type: '词义选择', prompt: '「dampen」在本条的核心意思是：', options: ['使潮湿', '完全相反的意思', '一种古代钱币'], answer: '使潮湿', explain: 'dampen：使潮湿。' },
      { id: 'dampen.q2', senseId: 'dampen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dampen?', options: ['使潮湿', 'a kind of ancient coin', 'the past tense of be'], answer: '使潮湿', explain: '对的是「使潮湿」。' },
      { id: 'dampen.q3', senseId: 'dampen.s1', errorType: 'grammar', type: '词义选择', prompt: 'dampen 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dampen.q4', senseId: 'dampen.s1', errorType: 'meaning', type: '词源', prompt: '记 dampen 时，哪句更稳妥？', options: ['先锁住「使潮湿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使潮湿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使潮湿'] },
  });

  D('damper', {
    etymology: {
      origin: '英语派生：damp + -er，词性转到「阻尼器」。',
      prefix: null,
      root: { text: 'damp', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'damper', text: '英语派生：damp + -er，词性转到「阻尼器」。' },
        { label: '现在', text: '核心用法是：阻尼器。' },
      ],
      formationLogic: '先认词干 damp，再看词尾。',
      mnemonic: '看到 damper，先说出「阻尼器」。',
      note: '先认词干 damp，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one damper.', chinese: '这一章反复回到同一个点：阻尼器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'damper.s1', en: 'Without that damper, the next paragraph is hard to follow.', zh: '没有这个阻尼器，下一段会很难读。', structure: 'damper / 表示 / 阻尼器', grammar: 'noun，围绕「阻尼器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the damper.', right: 'He gave me some advice about the damper.', reason: 'advice 不可数。名词 damper 的单复数按词典词形记。', rule: '先确定 damper 是noun，再套「阻尼器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'damper.q1', senseId: 'damper.s1', errorType: 'meaning', type: '词义选择', prompt: '「damper」在本条的核心意思是：', options: ['阻尼器', '完全相反的意思', '一种古代钱币'], answer: '阻尼器', explain: 'damper：阻尼器。' },
      { id: 'damper.q2', senseId: 'damper.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches damper?', options: ['阻尼器', 'a kind of ancient coin', 'the past tense of be'], answer: '阻尼器', explain: '对的是「阻尼器」。' },
      { id: 'damper.q3', senseId: 'damper.s1', errorType: 'grammar', type: '词义选择', prompt: 'damper 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'damper.q4', senseId: 'damper.s1', errorType: 'meaning', type: '词源', prompt: '记 damper 时，哪句更稳妥？', options: ['先锁住「阻尼器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「阻尼器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['阻尼器'] },
  });

  D('dance', {
    etymology: {
      origin: '古法语 danser。',
      prefix: null,
      root: { text: 'dance', gloss: '舞蹈' },
      suffix: null,
      history: [
        { label: 'dance', text: '古法语 danser。' },
        { label: '现在', text: '核心用法是：舞蹈。' },
      ],
      formationLogic: '考试认现在的用法：舞蹈。',
      mnemonic: '看到 dance，先说出「舞蹈」。',
      note: '考试认现在的用法：舞蹈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dance.', chinese: '这一章反复回到同一个点：舞蹈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dance.s1', en: 'Without that dance, the next paragraph is hard to follow.', zh: '没有这个舞蹈，下一段会很难读。', structure: 'dance / 表示 / 舞蹈', grammar: 'noun，围绕「舞蹈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dance.', right: 'He gave me some advice about the dance.', reason: 'advice 不可数。名词 dance 的单复数按词典词形记。', rule: '先确定 dance 是noun，再套「舞蹈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dance.q1', senseId: 'dance.s1', errorType: 'meaning', type: '词义选择', prompt: '「dance」在本条的核心意思是：', options: ['舞蹈', '完全相反的意思', '一种古代钱币'], answer: '舞蹈', explain: 'dance：舞蹈。' },
      { id: 'dance.q2', senseId: 'dance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dance?', options: ['舞蹈', 'a kind of ancient coin', 'the past tense of be'], answer: '舞蹈', explain: '对的是「舞蹈」。' },
      { id: 'dance.q3', senseId: 'dance.s1', errorType: 'grammar', type: '词义选择', prompt: 'dance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dance.q4', senseId: 'dance.s1', errorType: 'meaning', type: '词源', prompt: '记 dance 时，哪句更稳妥？', options: ['先锁住「舞蹈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「舞蹈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['舞蹈'] },
  });

  D('danger', {
    etymology: {
      origin: '古法语 dangier，拉丁语 dominium「统治权」。落在别人权力下，所以危险。',
      prefix: null,
      root: { text: 'danger', gloss: '危险' },
      suffix: null,
      history: [
        { label: 'danger', text: '古法语 dangier，拉丁语 dominium「统治权」。落在别人权力下，所以危险。' },
        { label: '现在', text: '核心用法是：危险。' },
      ],
      formationLogic: '考试认现在的用法：危险。',
      mnemonic: '看到 danger，先说出「危险」。',
      note: '考试认现在的用法：危险。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one danger.', chinese: '这一章反复回到同一个点：危险。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'danger.s1', en: 'Without that danger, the next paragraph is hard to follow.', zh: '没有这个危险，下一段会很难读。', structure: 'danger / 表示 / 危险', grammar: 'noun，围绕「危险」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the danger.', right: 'He gave me some advice about the danger.', reason: 'advice 不可数。名词 danger 的单复数按词典词形记。', rule: '先确定 danger 是noun，再套「危险」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'danger.q1', senseId: 'danger.s1', errorType: 'meaning', type: '词义选择', prompt: '「danger」在本条的核心意思是：', options: ['危险', '完全相反的意思', '一种古代钱币'], answer: '危险', explain: 'danger：危险。' },
      { id: 'danger.q2', senseId: 'danger.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches danger?', options: ['危险', 'a kind of ancient coin', 'the past tense of be'], answer: '危险', explain: '对的是「危险」。' },
      { id: 'danger.q3', senseId: 'danger.s1', errorType: 'grammar', type: '词义选择', prompt: 'danger 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'danger.q4', senseId: 'danger.s1', errorType: 'meaning', type: '词源', prompt: '记 danger 时，哪句更稳妥？', options: ['先锁住「危险」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「危险」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['危险'] },
  });

  D('dangle', {
    etymology: {
      origin: '现代英语常用词「dangle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dangle', gloss: '悬挂' },
      suffix: null,
      history: [
        { label: 'dangle', text: '现代英语常用词「dangle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：悬挂。' },
      ],
      formationLogic: '核心义：悬挂。',
      mnemonic: '看到 dangle，先说出「悬挂」。',
      note: '核心义：悬挂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dangle before the office closed.', chinese: '他们同意在办公室关门前做这件事：悬挂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dangle.s1', en: 'The deadline forced the team to dangle that afternoon.', zh: '截止日期逼着小组在那天下午悬挂。', structure: 'dangle / 表示 / 悬挂', grammar: 'verb，围绕「悬挂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dangleed it yesterday without checking the real past form.', right: 'Check the past form of "dangle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dangle 是verb，再套「悬挂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dangle.q1', senseId: 'dangle.s1', errorType: 'meaning', type: '词义选择', prompt: '「dangle」在本条的核心意思是：', options: ['悬挂', '完全相反的意思', '一种古代钱币'], answer: '悬挂', explain: 'dangle：悬挂。' },
      { id: 'dangle.q2', senseId: 'dangle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dangle?', options: ['悬挂', 'a kind of ancient coin', 'the past tense of be'], answer: '悬挂', explain: '对的是「悬挂」。' },
      { id: 'dangle.q3', senseId: 'dangle.s1', errorType: 'grammar', type: '词义选择', prompt: 'dangle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dangle.q4', senseId: 'dangle.s1', errorType: 'meaning', type: '词源', prompt: '记 dangle 时，哪句更稳妥？', options: ['先锁住「悬挂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「悬挂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['悬挂'] },
  });

  D('dare', {
    etymology: {
      origin: '古英语 durran。',
      prefix: null,
      root: { text: 'dare', gloss: '敢' },
      suffix: null,
      history: [
        { label: 'dare', text: '古英语 durran。' },
        { label: '现在', text: '核心用法是：敢。' },
      ],
      formationLogic: '考试认现在的用法：敢。',
      mnemonic: '看到 dare，先说出「敢」。',
      note: '考试认现在的用法：敢。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dare before the office closed.', chinese: '他们同意在办公室关门前做这件事：敢。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dare.s1', en: 'The deadline forced the team to dare that afternoon.', zh: '截止日期逼着小组在那天下午敢。', structure: 'dare / 表示 / 敢', grammar: 'verb，围绕「敢」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dareed it yesterday without checking the real past form.', right: 'Check the past form of "dare" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dare 是verb，再套「敢」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dare.q1', senseId: 'dare.s1', errorType: 'meaning', type: '词义选择', prompt: '「dare」在本条的核心意思是：', options: ['敢', '完全相反的意思', '一种古代钱币'], answer: '敢', explain: 'dare：敢。' },
      { id: 'dare.q2', senseId: 'dare.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dare?', options: ['敢', 'a kind of ancient coin', 'the past tense of be'], answer: '敢', explain: '对的是「敢」。' },
      { id: 'dare.q3', senseId: 'dare.s1', errorType: 'grammar', type: '词义选择', prompt: 'dare 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dare.q4', senseId: 'dare.s1', errorType: 'meaning', type: '词源', prompt: '记 dare 时，哪句更稳妥？', options: ['先锁住「敢」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「敢」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['敢'] },
  });

  D('dark', {
    etymology: {
      origin: '古英语 deorc。',
      prefix: null,
      root: { text: 'dark', gloss: '黑暗的' },
      suffix: null,
      history: [
        { label: 'dark', text: '古英语 deorc。' },
        { label: '现在', text: '核心用法是：黑暗的。' },
      ],
      formationLogic: '考试认现在的用法：黑暗的。',
      mnemonic: '看到 dark，先说出「黑暗的」。',
      note: '考试认现在的用法：黑暗的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dark.', chinese: '即使是初读者也能看出，这个结果是黑暗的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dark.s1', en: 'They wanted a dark answer, not a long speech.', zh: '他们要一个黑暗的的答复，不要长篇发言。', structure: 'dark / 表示 / 黑暗的', grammar: 'adjective，围绕「黑暗的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dark.', right: 'The news is dark.', reason: 'news 作主语时动词用单数。', rule: '先确定 dark 是adjective，再套「黑暗的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dark.q1', senseId: 'dark.s1', errorType: 'meaning', type: '词义选择', prompt: '「dark」在本条的核心意思是：', options: ['黑暗的', '完全相反的意思', '一种古代钱币'], answer: '黑暗的', explain: 'dark：黑暗的。' },
      { id: 'dark.q2', senseId: 'dark.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dark?', options: ['黑暗的', 'a kind of ancient coin', 'the past tense of be'], answer: '黑暗的', explain: '对的是「黑暗的」。' },
      { id: 'dark.q3', senseId: 'dark.s1', errorType: 'grammar', type: '词义选择', prompt: 'dark 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dark.q4', senseId: 'dark.s1', errorType: 'meaning', type: '词源', prompt: '记 dark 时，哪句更稳妥？', options: ['先锁住「黑暗的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黑暗的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黑暗的'] },
  });

  D('dark blue', {
    etymology: {
      origin: '现代英语固定说法「dark blue」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dark blue', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dark blue', text: '现代英语固定说法「dark blue」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：深蓝色（的）。' },
      ],
      formationLogic: '核心义：深蓝色（的）。',
      mnemonic: '看到 dark blue，先说出「深蓝色（的）」。',
      note: '核心义：深蓝色（的）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dark blue" and asked the class to keep it as one unit.', chinese: '老师把「dark blue」圈出来，让全班把它当成一个整体。它表示深蓝色（的）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dark blue.s1', en: 'In the margin she wrote "dark blue" so nobody would split the phrase.', zh: '她在页边写下「dark blue」，免得有人把这个说法拆开。意思是深蓝色（的）。', structure: 'dark blue / 表示 / 深蓝色（的）', grammar: 'noun，围绕「深蓝色（的）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dark blue and lost the point.', right: 'Keep "dark blue" together: it means 深蓝色（的）.', reason: '「dark blue」要整块理解。', rule: '先确定 dark blue 是noun，再套「深蓝色（的）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dark blue.q1', senseId: 'dark blue.s1', errorType: 'meaning', type: '词义选择', prompt: '「dark blue」在本条的核心意思是：', options: ['深蓝色（的）', '完全相反的意思', '一种古代钱币'], answer: '深蓝色（的）', explain: 'dark blue：深蓝色（的）。' },
      { id: 'dark blue.q2', senseId: 'dark blue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dark blue?', options: ['深蓝色（的）', 'a kind of ancient coin', 'the past tense of be'], answer: '深蓝色（的）', explain: '对的是「深蓝色（的）」。' },
      { id: 'dark blue.q3', senseId: 'dark blue.s1', errorType: 'grammar', type: '词义选择', prompt: 'dark blue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dark blue.q4', senseId: 'dark blue.s1', errorType: 'meaning', type: '词源', prompt: '记 dark blue 时，哪句更稳妥？', options: ['先锁住「深蓝色（的）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深蓝色（的）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深蓝色（的）'] },
  });

  D('darken', {
    etymology: {
      origin: '现代英语常用词「darken」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'darken', gloss: '变暗' },
      suffix: null,
      history: [
        { label: 'darken', text: '现代英语常用词「darken」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：变暗。' },
      ],
      formationLogic: '核心义：变暗。',
      mnemonic: '看到 darken，先说出「变暗」。',
      note: '核心义：变暗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to darken before the office closed.', chinese: '他们同意在办公室关门前做这件事：变暗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'darken.s1', en: 'The deadline forced the team to darken that afternoon.', zh: '截止日期逼着小组在那天下午变暗。', structure: 'darken / 表示 / 变暗', grammar: 'verb，围绕「变暗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She darkened it yesterday without checking the real past form.', right: 'Check the past form of "darken" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 darken 是verb，再套「变暗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'darken.q1', senseId: 'darken.s1', errorType: 'meaning', type: '词义选择', prompt: '「darken」在本条的核心意思是：', options: ['变暗', '完全相反的意思', '一种古代钱币'], answer: '变暗', explain: 'darken：变暗。' },
      { id: 'darken.q2', senseId: 'darken.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches darken?', options: ['变暗', 'a kind of ancient coin', 'the past tense of be'], answer: '变暗', explain: '对的是「变暗」。' },
      { id: 'darken.q3', senseId: 'darken.s1', errorType: 'grammar', type: '词义选择', prompt: 'darken 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'darken.q4', senseId: 'darken.s1', errorType: 'meaning', type: '词源', prompt: '记 darken 时，哪句更稳妥？', options: ['先锁住「变暗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「变暗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['变暗'] },
  });

  D('darkness', {
    etymology: {
      origin: '英语派生：dark + -ness，词性转到「黑暗」。',
      prefix: null,
      root: { text: 'dark', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'darkness', text: '英语派生：dark + -ness，词性转到「黑暗」。' },
        { label: '现在', text: '核心用法是：黑暗。' },
      ],
      formationLogic: '先认词干 dark，再看词尾。',
      mnemonic: '看到 darkness，先说出「黑暗」。',
      note: '先认词干 dark，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one darkness.', chinese: '这一章反复回到同一个点：黑暗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'darkness.s1', en: 'Without that darkness, the next paragraph is hard to follow.', zh: '没有这个黑暗，下一段会很难读。', structure: 'darkness / 表示 / 黑暗', grammar: 'noun，围绕「黑暗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the darkness.', right: 'He gave me some advice about the darkness.', reason: 'advice 不可数。名词 darkness 的单复数按词典词形记。', rule: '先确定 darkness 是noun，再套「黑暗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'darkness.q1', senseId: 'darkness.s1', errorType: 'meaning', type: '词义选择', prompt: '「darkness」在本条的核心意思是：', options: ['黑暗', '完全相反的意思', '一种古代钱币'], answer: '黑暗', explain: 'darkness：黑暗。' },
      { id: 'darkness.q2', senseId: 'darkness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches darkness?', options: ['黑暗', 'a kind of ancient coin', 'the past tense of be'], answer: '黑暗', explain: '对的是「黑暗」。' },
      { id: 'darkness.q3', senseId: 'darkness.s1', errorType: 'grammar', type: '词义选择', prompt: 'darkness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'darkness.q4', senseId: 'darkness.s1', errorType: 'meaning', type: '词源', prompt: '记 darkness 时，哪句更稳妥？', options: ['先锁住「黑暗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黑暗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黑暗'] },
  });

  D('darling', {
    etymology: {
      origin: '英语派生：darl + -ing，词性转到「亲爱的」。',
      prefix: null,
      root: { text: 'darl', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'darling', text: '英语派生：darl + -ing，词性转到「亲爱的」。' },
        { label: '现在', text: '核心用法是：亲爱的。' },
      ],
      formationLogic: '先认词干 darl，再看词尾。',
      mnemonic: '看到 darling，先说出「亲爱的」。',
      note: '先认词干 darl，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one darling.', chinese: '这一章反复回到同一个点：亲爱的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'darling.s1', en: 'Without that darling, the next paragraph is hard to follow.', zh: '没有这个亲爱的，下一段会很难读。', structure: 'darling / 表示 / 亲爱的', grammar: 'noun，围绕「亲爱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the darling.', right: 'He gave me some advice about the darling.', reason: 'advice 不可数。名词 darling 的单复数按词典词形记。', rule: '先确定 darling 是noun，再套「亲爱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'darling.q1', senseId: 'darling.s1', errorType: 'meaning', type: '词义选择', prompt: '「darling」在本条的核心意思是：', options: ['亲爱的', '完全相反的意思', '一种古代钱币'], answer: '亲爱的', explain: 'darling：亲爱的。' },
      { id: 'darling.q2', senseId: 'darling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches darling?', options: ['亲爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '亲爱的', explain: '对的是「亲爱的」。' },
      { id: 'darling.q3', senseId: 'darling.s1', errorType: 'grammar', type: '词义选择', prompt: 'darling 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'darling.q4', senseId: 'darling.s1', errorType: 'meaning', type: '词源', prompt: '记 darling 时，哪句更稳妥？', options: ['先锁住「亲爱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「亲爱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['亲爱的'] },
  });

  D('dart', {
    etymology: {
      origin: '现代英语常用词「dart」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dart', gloss: '飞镖' },
      suffix: null,
      history: [
        { label: 'dart', text: '现代英语常用词「dart」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：飞镖。' },
      ],
      formationLogic: '核心义：飞镖。',
      mnemonic: '看到 dart，先说出「飞镖」。',
      note: '核心义：飞镖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dart.', chinese: '这一章反复回到同一个点：飞镖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dart.s1', en: 'Without that dart, the next paragraph is hard to follow.', zh: '没有这个飞镖，下一段会很难读。', structure: 'dart / 表示 / 飞镖', grammar: 'noun，围绕「飞镖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dart.', right: 'He gave me some advice about the dart.', reason: 'advice 不可数。名词 dart 的单复数按词典词形记。', rule: '先确定 dart 是noun，再套「飞镖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dart.q1', senseId: 'dart.s1', errorType: 'meaning', type: '词义选择', prompt: '「dart」在本条的核心意思是：', options: ['飞镖', '完全相反的意思', '一种古代钱币'], answer: '飞镖', explain: 'dart：飞镖。' },
      { id: 'dart.q2', senseId: 'dart.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dart?', options: ['飞镖', 'a kind of ancient coin', 'the past tense of be'], answer: '飞镖', explain: '对的是「飞镖」。' },
      { id: 'dart.q3', senseId: 'dart.s1', errorType: 'grammar', type: '词义选择', prompt: 'dart 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dart.q4', senseId: 'dart.s1', errorType: 'meaning', type: '词源', prompt: '记 dart 时，哪句更稳妥？', options: ['先锁住「飞镖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「飞镖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['飞镖'] },
  });

  D('dash', {
    etymology: {
      origin: '现代英语常用词「dash」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dash', gloss: '猛冲' },
      suffix: null,
      history: [
        { label: 'dash', text: '现代英语常用词「dash」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：猛冲。' },
      ],
      formationLogic: '核心义：猛冲。',
      mnemonic: '看到 dash，先说出「猛冲」。',
      note: '核心义：猛冲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dash.', chinese: '这一章反复回到同一个点：猛冲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dash.s1', en: 'Without that dash, the next paragraph is hard to follow.', zh: '没有这个猛冲，下一段会很难读。', structure: 'dash / 表示 / 猛冲', grammar: 'noun，围绕「猛冲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dash.', right: 'He gave me some advice about the dash.', reason: 'advice 不可数。名词 dash 的单复数按词典词形记。', rule: '先确定 dash 是noun，再套「猛冲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dash.q1', senseId: 'dash.s1', errorType: 'meaning', type: '词义选择', prompt: '「dash」在本条的核心意思是：', options: ['猛冲', '完全相反的意思', '一种古代钱币'], answer: '猛冲', explain: 'dash：猛冲。' },
      { id: 'dash.q2', senseId: 'dash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dash?', options: ['猛冲', 'a kind of ancient coin', 'the past tense of be'], answer: '猛冲', explain: '对的是「猛冲」。' },
      { id: 'dash.q3', senseId: 'dash.s1', errorType: 'grammar', type: '词义选择', prompt: 'dash 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dash.q4', senseId: 'dash.s1', errorType: 'meaning', type: '词源', prompt: '记 dash 时，哪句更稳妥？', options: ['先锁住「猛冲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「猛冲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['猛冲'] },
  });

  D('dashboard', {
    etymology: {
      origin: '现代英语常用词「dashboard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dashboard', gloss: '仪表盘' },
      suffix: null,
      history: [
        { label: 'dashboard', text: '现代英语常用词「dashboard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：仪表盘。' },
      ],
      formationLogic: '核心义：仪表盘。',
      mnemonic: '看到 dashboard，先说出「仪表盘」。',
      note: '核心义：仪表盘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dashboard.', chinese: '这一章反复回到同一个点：仪表盘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dashboard.s1', en: 'Without that dashboard, the next paragraph is hard to follow.', zh: '没有这个仪表盘，下一段会很难读。', structure: 'dashboard / 表示 / 仪表盘', grammar: 'noun，围绕「仪表盘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dashboard.', right: 'He gave me some advice about the dashboard.', reason: 'advice 不可数。名词 dashboard 的单复数按词典词形记。', rule: '先确定 dashboard 是noun，再套「仪表盘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dashboard.q1', senseId: 'dashboard.s1', errorType: 'meaning', type: '词义选择', prompt: '「dashboard」在本条的核心意思是：', options: ['仪表盘', '完全相反的意思', '一种古代钱币'], answer: '仪表盘', explain: 'dashboard：仪表盘。' },
      { id: 'dashboard.q2', senseId: 'dashboard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dashboard?', options: ['仪表盘', 'a kind of ancient coin', 'the past tense of be'], answer: '仪表盘', explain: '对的是「仪表盘」。' },
      { id: 'dashboard.q3', senseId: 'dashboard.s1', errorType: 'grammar', type: '词义选择', prompt: 'dashboard 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dashboard.q4', senseId: 'dashboard.s1', errorType: 'meaning', type: '词源', prompt: '记 dashboard 时，哪句更稳妥？', options: ['先锁住「仪表盘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「仪表盘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仪表盘'] },
  });

  D('data', {
    etymology: {
      origin: '拉丁语 datum「给出的东西」的复数。',
      prefix: null,
      root: { text: 'data', gloss: '数据' },
      suffix: null,
      history: [
        { label: 'data', text: '拉丁语 datum「给出的东西」的复数。' },
        { label: '现在', text: '核心用法是：数据。' },
      ],
      formationLogic: '考试认现在的用法：数据。',
      mnemonic: '看到 data，先说出「数据」。',
      note: '考试认现在的用法：数据。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one data.', chinese: '这一章反复回到同一个点：数据。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'data.s1', en: 'Without that data, the next paragraph is hard to follow.', zh: '没有这个数据，下一段会很难读。', structure: 'data / 表示 / 数据', grammar: 'noun，围绕「数据」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the data.', right: 'He gave me some advice about the data.', reason: 'advice 不可数。名词 data 的单复数按词典词形记。', rule: '先确定 data 是noun，再套「数据」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'data.q1', senseId: 'data.s1', errorType: 'meaning', type: '词义选择', prompt: '「data」在本条的核心意思是：', options: ['数据', '完全相反的意思', '一种古代钱币'], answer: '数据', explain: 'data：数据。' },
      { id: 'data.q2', senseId: 'data.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches data?', options: ['数据', 'a kind of ancient coin', 'the past tense of be'], answer: '数据', explain: '对的是「数据」。' },
      { id: 'data.q3', senseId: 'data.s1', errorType: 'grammar', type: '词义选择', prompt: 'data 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'data.q4', senseId: 'data.s1', errorType: 'meaning', type: '词源', prompt: '记 data 时，哪句更稳妥？', options: ['先锁住「数据」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数据」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数据'] },
  });

  D('database', {
    etymology: {
      origin: '现代英语常用词「database」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'database', gloss: '数据库' },
      suffix: null,
      history: [
        { label: 'database', text: '现代英语常用词「database」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：数据库。' },
      ],
      formationLogic: '核心义：数据库。',
      mnemonic: '看到 database，先说出「数据库」。',
      note: '核心义：数据库。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one database.', chinese: '这一章反复回到同一个点：数据库。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'database.s1', en: 'Without that database, the next paragraph is hard to follow.', zh: '没有这个数据库，下一段会很难读。', structure: 'database / 表示 / 数据库', grammar: 'noun，围绕「数据库」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the database.', right: 'He gave me some advice about the database.', reason: 'advice 不可数。名词 database 的单复数按词典词形记。', rule: '先确定 database 是noun，再套「数据库」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'database.q1', senseId: 'database.s1', errorType: 'meaning', type: '词义选择', prompt: '「database」在本条的核心意思是：', options: ['数据库', '完全相反的意思', '一种古代钱币'], answer: '数据库', explain: 'database：数据库。' },
      { id: 'database.q2', senseId: 'database.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches database?', options: ['数据库', 'a kind of ancient coin', 'the past tense of be'], answer: '数据库', explain: '对的是「数据库」。' },
      { id: 'database.q3', senseId: 'database.s1', errorType: 'grammar', type: '词义选择', prompt: 'database 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'database.q4', senseId: 'database.s1', errorType: 'meaning', type: '词源', prompt: '记 database 时，哪句更稳妥？', options: ['先锁住「数据库」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数据库」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数据库'] },
  });

  D('datagram', {
    etymology: {
      origin: '现代英语常用词「datagram」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'datagram', gloss: '数据报' },
      suffix: null,
      history: [
        { label: 'datagram', text: '现代英语常用词「datagram」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：数据报。' },
      ],
      formationLogic: '核心义：数据报。',
      mnemonic: '看到 datagram，先说出「数据报」。',
      note: '核心义：数据报。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one datagram.', chinese: '这一章反复回到同一个点：数据报。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'datagram.s1', en: 'Without that datagram, the next paragraph is hard to follow.', zh: '没有这个数据报，下一段会很难读。', structure: 'datagram / 表示 / 数据报', grammar: 'noun，围绕「数据报」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the datagram.', right: 'He gave me some advice about the datagram.', reason: 'advice 不可数。名词 datagram 的单复数按词典词形记。', rule: '先确定 datagram 是noun，再套「数据报」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'datagram.q1', senseId: 'datagram.s1', errorType: 'meaning', type: '词义选择', prompt: '「datagram」在本条的核心意思是：', options: ['数据报', '完全相反的意思', '一种古代钱币'], answer: '数据报', explain: 'datagram：数据报。' },
      { id: 'datagram.q2', senseId: 'datagram.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches datagram?', options: ['数据报', 'a kind of ancient coin', 'the past tense of be'], answer: '数据报', explain: '对的是「数据报」。' },
      { id: 'datagram.q3', senseId: 'datagram.s1', errorType: 'grammar', type: '词义选择', prompt: 'datagram 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'datagram.q4', senseId: 'datagram.s1', errorType: 'meaning', type: '词源', prompt: '记 datagram 时，哪句更稳妥？', options: ['先锁住「数据报」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数据报」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数据报'] },
  });

  D('date', {
    etymology: {
      origin: '拉丁语 datum「给出（信件的日期）」。枣子是另一词，希腊语 daktylos「手指」。',
      prefix: null,
      root: { text: 'date', gloss: '日期' },
      suffix: null,
      history: [
        { label: 'date', text: '拉丁语 datum「给出（信件的日期）」。枣子是另一词，希腊语 daktylos「手指」。' },
        { label: '现在', text: '核心用法是：日期。' },
      ],
      formationLogic: '考试认现在的用法：日期。',
      mnemonic: '看到 date，先说出「日期」。',
      note: '考试认现在的用法：日期。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one date.', chinese: '这一章反复回到同一个点：日期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'date.s1', en: 'Without that date, the next paragraph is hard to follow.', zh: '没有这个日期，下一段会很难读。', structure: 'date / 表示 / 日期', grammar: 'noun，围绕「日期」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the date.', right: 'He gave me some advice about the date.', reason: 'advice 不可数。名词 date 的单复数按词典词形记。', rule: '先确定 date 是noun，再套「日期」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'date.q1', senseId: 'date.s1', errorType: 'meaning', type: '词义选择', prompt: '「date」在本条的核心意思是：', options: ['日期', '完全相反的意思', '一种古代钱币'], answer: '日期', explain: 'date：日期。' },
      { id: 'date.q2', senseId: 'date.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches date?', options: ['日期', 'a kind of ancient coin', 'the past tense of be'], answer: '日期', explain: '对的是「日期」。' },
      { id: 'date.q3', senseId: 'date.s1', errorType: 'grammar', type: '词义选择', prompt: 'date 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'date.q4', senseId: 'date.s1', errorType: 'meaning', type: '词源', prompt: '记 date 时，哪句更稳妥？', options: ['先锁住「日期」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「日期」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['日期'] },
  });

  D('dated', {
    etymology: {
      origin: '现代英语常用词「dated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dated', gloss: '过时的' },
      suffix: null,
      history: [
        { label: 'dated', text: '现代英语常用词「dated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：过时的。' },
      ],
      formationLogic: '核心义：过时的。',
      mnemonic: '看到 dated，先说出「过时的」。',
      note: '核心义：过时的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dated.', chinese: '即使是初读者也能看出，这个结果是过时的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dated.s1', en: 'They wanted a dated answer, not a long speech.', zh: '他们要一个过时的的答复，不要长篇发言。', structure: 'dated / 表示 / 过时的', grammar: 'adjective，围绕「过时的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dated.', right: 'The news is dated.', reason: 'news 作主语时动词用单数。', rule: '先确定 dated 是adjective，再套「过时的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dated.q1', senseId: 'dated.s1', errorType: 'meaning', type: '词义选择', prompt: '「dated」在本条的核心意思是：', options: ['过时的', '完全相反的意思', '一种古代钱币'], answer: '过时的', explain: 'dated：过时的。' },
      { id: 'dated.q2', senseId: 'dated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dated?', options: ['过时的', 'a kind of ancient coin', 'the past tense of be'], answer: '过时的', explain: '对的是「过时的」。' },
      { id: 'dated.q3', senseId: 'dated.s1', errorType: 'grammar', type: '词义选择', prompt: 'dated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dated.q4', senseId: 'dated.s1', errorType: 'meaning', type: '词源', prompt: '记 dated 时，哪句更稳妥？', options: ['先锁住「过时的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「过时的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过时的'] },
  });

  D('daughter', {
    etymology: {
      origin: '古英语 dohtor。',
      prefix: null,
      root: { text: 'daughter', gloss: '女儿' },
      suffix: null,
      history: [
        { label: 'daughter', text: '古英语 dohtor。' },
        { label: '现在', text: '核心用法是：女儿。' },
      ],
      formationLogic: '考试认现在的用法：女儿。',
      mnemonic: '看到 daughter，先说出「女儿」。',
      note: '考试认现在的用法：女儿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daughter.', chinese: '这一章反复回到同一个点：女儿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daughter.s1', en: 'Without that daughter, the next paragraph is hard to follow.', zh: '没有这个女儿，下一段会很难读。', structure: 'daughter / 表示 / 女儿', grammar: 'noun，围绕「女儿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daughter.', right: 'He gave me some advice about the daughter.', reason: 'advice 不可数。名词 daughter 的单复数按词典词形记。', rule: '先确定 daughter 是noun，再套「女儿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daughter.q1', senseId: 'daughter.s1', errorType: 'meaning', type: '词义选择', prompt: '「daughter」在本条的核心意思是：', options: ['女儿', '完全相反的意思', '一种古代钱币'], answer: '女儿', explain: 'daughter：女儿。' },
      { id: 'daughter.q2', senseId: 'daughter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daughter?', options: ['女儿', 'a kind of ancient coin', 'the past tense of be'], answer: '女儿', explain: '对的是「女儿」。' },
      { id: 'daughter.q3', senseId: 'daughter.s1', errorType: 'grammar', type: '词义选择', prompt: 'daughter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daughter.q4', senseId: 'daughter.s1', errorType: 'meaning', type: '词源', prompt: '记 daughter 时，哪句更稳妥？', options: ['先锁住「女儿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女儿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女儿'] },
  });

  D('daunt', {
    etymology: {
      origin: '现代英语常用词「daunt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daunt', gloss: '使胆怯' },
      suffix: null,
      history: [
        { label: 'daunt', text: '现代英语常用词「daunt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使胆怯。' },
      ],
      formationLogic: '核心义：使胆怯。',
      mnemonic: '看到 daunt，先说出「使胆怯」。',
      note: '核心义：使胆怯。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to daunt before the office closed.', chinese: '他们同意在办公室关门前做这件事：使胆怯。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daunt.s1', en: 'The deadline forced the team to daunt that afternoon.', zh: '截止日期逼着小组在那天下午使胆怯。', structure: 'daunt / 表示 / 使胆怯', grammar: 'verb，围绕「使胆怯」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She daunted it yesterday without checking the real past form.', right: 'Check the past form of "daunt" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 daunt 是verb，再套「使胆怯」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daunt.q1', senseId: 'daunt.s1', errorType: 'meaning', type: '词义选择', prompt: '「daunt」在本条的核心意思是：', options: ['使胆怯', '完全相反的意思', '一种古代钱币'], answer: '使胆怯', explain: 'daunt：使胆怯。' },
      { id: 'daunt.q2', senseId: 'daunt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daunt?', options: ['使胆怯', 'a kind of ancient coin', 'the past tense of be'], answer: '使胆怯', explain: '对的是「使胆怯」。' },
      { id: 'daunt.q3', senseId: 'daunt.s1', errorType: 'grammar', type: '词义选择', prompt: 'daunt 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'daunt.q4', senseId: 'daunt.s1', errorType: 'meaning', type: '词源', prompt: '记 daunt 时，哪句更稳妥？', options: ['先锁住「使胆怯」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使胆怯」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使胆怯'] },
  });

  D('daunting', {
    etymology: {
      origin: '英语派生：daunt + -ing，词性转到「令人望而生畏的」。',
      prefix: null,
      root: { text: 'daunt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'daunting', text: '英语派生：daunt + -ing，词性转到「令人望而生畏的」。' },
        { label: '现在', text: '核心用法是：令人望而生畏的。' },
      ],
      formationLogic: '先认词干 daunt，再看词尾。',
      mnemonic: '看到 daunting，先说出「令人望而生畏的」。',
      note: '先认词干 daunt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was daunting.', chinese: '即使是初读者也能看出，这个结果是令人望而生畏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daunting.s1', en: 'They wanted a daunting answer, not a long speech.', zh: '他们要一个令人望而生畏的的答复，不要长篇发言。', structure: 'daunting / 表示 / 令人望而生畏的', grammar: 'adjective，围绕「令人望而生畏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are daunting.', right: 'The news is daunting.', reason: 'news 作主语时动词用单数。', rule: '先确定 daunting 是adjective，再套「令人望而生畏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daunting.q1', senseId: 'daunting.s1', errorType: 'meaning', type: '词义选择', prompt: '「daunting」在本条的核心意思是：', options: ['令人望而生畏的', '完全相反的意思', '一种古代钱币'], answer: '令人望而生畏的', explain: 'daunting：令人望而生畏的。' },
      { id: 'daunting.q2', senseId: 'daunting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daunting?', options: ['令人望而生畏的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人望而生畏的', explain: '对的是「令人望而生畏的」。' },
      { id: 'daunting.q3', senseId: 'daunting.s1', errorType: 'grammar', type: '词义选择', prompt: 'daunting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'daunting.q4', senseId: 'daunting.s1', errorType: 'meaning', type: '词源', prompt: '记 daunting 时，哪句更稳妥？', options: ['先锁住「令人望而生畏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「令人望而生畏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人望而生畏的'] },
  });

  D('dawn', {
    etymology: {
      origin: '古英语 dagian「变白天」。',
      prefix: null,
      root: { text: 'dawn', gloss: '黎明' },
      suffix: null,
      history: [
        { label: 'dawn', text: '古英语 dagian「变白天」。' },
        { label: '现在', text: '核心用法是：黎明。' },
      ],
      formationLogic: '考试认现在的用法：黎明。',
      mnemonic: '看到 dawn，先说出「黎明」。',
      note: '考试认现在的用法：黎明。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dawn.', chinese: '这一章反复回到同一个点：黎明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dawn.s1', en: 'Without that dawn, the next paragraph is hard to follow.', zh: '没有这个黎明，下一段会很难读。', structure: 'dawn / 表示 / 黎明', grammar: 'noun，围绕「黎明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dawn.', right: 'He gave me some advice about the dawn.', reason: 'advice 不可数。名词 dawn 的单复数按词典词形记。', rule: '先确定 dawn 是noun，再套「黎明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dawn.q1', senseId: 'dawn.s1', errorType: 'meaning', type: '词义选择', prompt: '「dawn」在本条的核心意思是：', options: ['黎明', '完全相反的意思', '一种古代钱币'], answer: '黎明', explain: 'dawn：黎明。' },
      { id: 'dawn.q2', senseId: 'dawn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dawn?', options: ['黎明', 'a kind of ancient coin', 'the past tense of be'], answer: '黎明', explain: '对的是「黎明」。' },
      { id: 'dawn.q3', senseId: 'dawn.s1', errorType: 'grammar', type: '词义选择', prompt: 'dawn 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dawn.q4', senseId: 'dawn.s1', errorType: 'meaning', type: '词源', prompt: '记 dawn 时，哪句更稳妥？', options: ['先锁住「黎明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黎明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黎明'] },
  });

  D('day', {
    etymology: {
      origin: '古英语 dæg。',
      prefix: null,
      root: { text: 'day', gloss: '天' },
      suffix: null,
      history: [
        { label: 'day', text: '古英语 dæg。' },
        { label: '现在', text: '核心用法是：天。' },
      ],
      formationLogic: '考试认现在的用法：天。',
      mnemonic: '看到 day，先说出「天」。',
      note: '考试认现在的用法：天。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one day.', chinese: '这一章反复回到同一个点：天。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'day.s1', en: 'Without that day, the next paragraph is hard to follow.', zh: '没有这个天，下一段会很难读。', structure: 'day / 表示 / 天', grammar: 'noun，围绕「天」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the day.', right: 'He gave me some advice about the day.', reason: 'advice 不可数。名词 day 的单复数按词典词形记。', rule: '先确定 day 是noun，再套「天」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'day.q1', senseId: 'day.s1', errorType: 'meaning', type: '词义选择', prompt: '「day」在本条的核心意思是：', options: ['天', '完全相反的意思', '一种古代钱币'], answer: '天', explain: 'day：天。' },
      { id: 'day.q2', senseId: 'day.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches day?', options: ['天', 'a kind of ancient coin', 'the past tense of be'], answer: '天', explain: '对的是「天」。' },
      { id: 'day.q3', senseId: 'day.s1', errorType: 'grammar', type: '词义选择', prompt: 'day 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'day.q4', senseId: 'day.s1', errorType: 'meaning', type: '词源', prompt: '记 day 时，哪句更稳妥？', options: ['先锁住「天」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「天」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['天'] },
  });

  D('day before', {
    etymology: {
      origin: '现代英语固定说法「day before」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'day before', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'day before', text: '现代英语固定说法「day before」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：（特定日子的）前一天。' },
      ],
      formationLogic: '核心义：（特定日子的）前一天。',
      mnemonic: '看到 day before，先说出「（特定日子的）前一天」。',
      note: '核心义：（特定日子的）前一天。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "day before" and asked the class to keep it as one unit.', chinese: '老师把「day before」圈出来，让全班把它当成一个整体。它表示（特定日子的）前一天。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'day before.s1', en: 'In the margin she wrote "day before" so nobody would split the phrase.', zh: '她在页边写下「day before」，免得有人把这个说法拆开。意思是（特定日子的）前一天。', structure: 'day before / 表示 / （特定日子的）前一天', grammar: 'noun，围绕「（特定日子的）前一天」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of day before and lost the point.', right: 'Keep "day before" together: it means （特定日子的）前一天.', reason: '「day before」要整块理解。', rule: '先确定 day before 是noun，再套「（特定日子的）前一天」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'day before.q1', senseId: 'day before.s1', errorType: 'meaning', type: '词义选择', prompt: '「day before」在本条的核心意思是：', options: ['（特定日子的）前一天', '完全相反的意思', '一种古代钱币'], answer: '（特定日子的）前一天', explain: 'day before：（特定日子的）前一天。' },
      { id: 'day before.q2', senseId: 'day before.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches day before?', options: ['（特定日子的）前一天', 'a kind of ancient coin', 'the past tense of be'], answer: '（特定日子的）前一天', explain: '对的是「（特定日子的）前一天」。' },
      { id: 'day before.q3', senseId: 'day before.s1', errorType: 'grammar', type: '词义选择', prompt: 'day before 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'day before.q4', senseId: 'day before.s1', errorType: 'meaning', type: '词源', prompt: '记 day before 时，哪句更稳妥？', options: ['先锁住「（特定日子的）前一天」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（特定日子的）前一天」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（特定日子的）前一天'] },
  });

  D('daybook', {
    etymology: {
      origin: '现代英语常用词「daybook」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daybook', gloss: '流水账' },
      suffix: null,
      history: [
        { label: 'daybook', text: '现代英语常用词「daybook」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：流水账。' },
      ],
      formationLogic: '核心义：流水账。',
      mnemonic: '看到 daybook，先说出「流水账」。',
      note: '核心义：流水账。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daybook.', chinese: '这一章反复回到同一个点：流水账。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daybook.s1', en: 'Without that daybook, the next paragraph is hard to follow.', zh: '没有这个流水账，下一段会很难读。', structure: 'daybook / 表示 / 流水账', grammar: 'noun，围绕「流水账」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daybook.', right: 'He gave me some advice about the daybook.', reason: 'advice 不可数。名词 daybook 的单复数按词典词形记。', rule: '先确定 daybook 是noun，再套「流水账」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daybook.q1', senseId: 'daybook.s1', errorType: 'meaning', type: '词义选择', prompt: '「daybook」在本条的核心意思是：', options: ['流水账', '完全相反的意思', '一种古代钱币'], answer: '流水账', explain: 'daybook：流水账。' },
      { id: 'daybook.q2', senseId: 'daybook.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daybook?', options: ['流水账', 'a kind of ancient coin', 'the past tense of be'], answer: '流水账', explain: '对的是「流水账」。' },
      { id: 'daybook.q3', senseId: 'daybook.s1', errorType: 'grammar', type: '词义选择', prompt: 'daybook 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daybook.q4', senseId: 'daybook.s1', errorType: 'meaning', type: '词源', prompt: '记 daybook 时，哪句更稳妥？', options: ['先锁住「流水账」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流水账」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流水账'] },
  });

  D('daybreak', {
    etymology: {
      origin: '现代英语常用词「daybreak」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daybreak', gloss: '黎明' },
      suffix: null,
      history: [
        { label: 'daybreak', text: '现代英语常用词「daybreak」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：黎明。' },
      ],
      formationLogic: '核心义：黎明。',
      mnemonic: '看到 daybreak，先说出「黎明」。',
      note: '核心义：黎明。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daybreak.', chinese: '这一章反复回到同一个点：黎明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daybreak.s1', en: 'Without that daybreak, the next paragraph is hard to follow.', zh: '没有这个黎明，下一段会很难读。', structure: 'daybreak / 表示 / 黎明', grammar: 'noun，围绕「黎明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daybreak.', right: 'He gave me some advice about the daybreak.', reason: 'advice 不可数。名词 daybreak 的单复数按词典词形记。', rule: '先确定 daybreak 是noun，再套「黎明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daybreak.q1', senseId: 'daybreak.s1', errorType: 'meaning', type: '词义选择', prompt: '「daybreak」在本条的核心意思是：', options: ['黎明', '完全相反的意思', '一种古代钱币'], answer: '黎明', explain: 'daybreak：黎明。' },
      { id: 'daybreak.q2', senseId: 'daybreak.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daybreak?', options: ['黎明', 'a kind of ancient coin', 'the past tense of be'], answer: '黎明', explain: '对的是「黎明」。' },
      { id: 'daybreak.q3', senseId: 'daybreak.s1', errorType: 'grammar', type: '词义选择', prompt: 'daybreak 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daybreak.q4', senseId: 'daybreak.s1', errorType: 'meaning', type: '词源', prompt: '记 daybreak 时，哪句更稳妥？', options: ['先锁住「黎明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黎明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黎明'] },
  });

  D('daydream', {
    etymology: {
      origin: '现代英语常用词「daydream」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daydream', gloss: '白日梦' },
      suffix: null,
      history: [
        { label: 'daydream', text: '现代英语常用词「daydream」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：白日梦。' },
      ],
      formationLogic: '核心义：白日梦。',
      mnemonic: '看到 daydream，先说出「白日梦」。',
      note: '核心义：白日梦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daydream.', chinese: '这一章反复回到同一个点：白日梦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daydream.s1', en: 'Without that daydream, the next paragraph is hard to follow.', zh: '没有这个白日梦，下一段会很难读。', structure: 'daydream / 表示 / 白日梦', grammar: 'noun，围绕「白日梦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daydream.', right: 'He gave me some advice about the daydream.', reason: 'advice 不可数。名词 daydream 的单复数按词典词形记。', rule: '先确定 daydream 是noun，再套「白日梦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daydream.q1', senseId: 'daydream.s1', errorType: 'meaning', type: '词义选择', prompt: '「daydream」在本条的核心意思是：', options: ['白日梦', '完全相反的意思', '一种古代钱币'], answer: '白日梦', explain: 'daydream：白日梦。' },
      { id: 'daydream.q2', senseId: 'daydream.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daydream?', options: ['白日梦', 'a kind of ancient coin', 'the past tense of be'], answer: '白日梦', explain: '对的是「白日梦」。' },
      { id: 'daydream.q3', senseId: 'daydream.s1', errorType: 'grammar', type: '词义选择', prompt: 'daydream 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daydream.q4', senseId: 'daydream.s1', errorType: 'meaning', type: '词源', prompt: '记 daydream 时，哪句更稳妥？', options: ['先锁住「白日梦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「白日梦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['白日梦'] },
  });

  D('daylight', {
    etymology: {
      origin: '现代英语常用词「daylight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daylight', gloss: '日光' },
      suffix: null,
      history: [
        { label: 'daylight', text: '现代英语常用词「daylight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：日光。' },
      ],
      formationLogic: '核心义：日光。',
      mnemonic: '看到 daylight，先说出「日光」。',
      note: '核心义：日光。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daylight.', chinese: '这一章反复回到同一个点：日光。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daylight.s1', en: 'Without that daylight, the next paragraph is hard to follow.', zh: '没有这个日光，下一段会很难读。', structure: 'daylight / 表示 / 日光', grammar: 'noun，围绕「日光」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daylight.', right: 'He gave me some advice about the daylight.', reason: 'advice 不可数。名词 daylight 的单复数按词典词形记。', rule: '先确定 daylight 是noun，再套「日光」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daylight.q1', senseId: 'daylight.s1', errorType: 'meaning', type: '词义选择', prompt: '「daylight」在本条的核心意思是：', options: ['日光', '完全相反的意思', '一种古代钱币'], answer: '日光', explain: 'daylight：日光。' },
      { id: 'daylight.q2', senseId: 'daylight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daylight?', options: ['日光', 'a kind of ancient coin', 'the past tense of be'], answer: '日光', explain: '对的是「日光」。' },
      { id: 'daylight.q3', senseId: 'daylight.s1', errorType: 'grammar', type: '词义选择', prompt: 'daylight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daylight.q4', senseId: 'daylight.s1', errorType: 'meaning', type: '词源', prompt: '记 daylight 时，哪句更稳妥？', options: ['先锁住「日光」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「日光」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['日光'] },
  });

  D('daytime', {
    etymology: {
      origin: '现代英语常用词「daytime」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daytime', gloss: '白天' },
      suffix: null,
      history: [
        { label: 'daytime', text: '现代英语常用词「daytime」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：白天。' },
      ],
      formationLogic: '核心义：白天。',
      mnemonic: '看到 daytime，先说出「白天」。',
      note: '核心义：白天。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daytime.', chinese: '这一章反复回到同一个点：白天。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daytime.s1', en: 'Without that daytime, the next paragraph is hard to follow.', zh: '没有这个白天，下一段会很难读。', structure: 'daytime / 表示 / 白天', grammar: 'noun，围绕「白天」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daytime.', right: 'He gave me some advice about the daytime.', reason: 'advice 不可数。名词 daytime 的单复数按词典词形记。', rule: '先确定 daytime 是noun，再套「白天」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daytime.q1', senseId: 'daytime.s1', errorType: 'meaning', type: '词义选择', prompt: '「daytime」在本条的核心意思是：', options: ['白天', '完全相反的意思', '一种古代钱币'], answer: '白天', explain: 'daytime：白天。' },
      { id: 'daytime.q2', senseId: 'daytime.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daytime?', options: ['白天', 'a kind of ancient coin', 'the past tense of be'], answer: '白天', explain: '对的是「白天」。' },
      { id: 'daytime.q3', senseId: 'daytime.s1', errorType: 'grammar', type: '词义选择', prompt: 'daytime 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daytime.q4', senseId: 'daytime.s1', errorType: 'meaning', type: '词源', prompt: '记 daytime 时，哪句更稳妥？', options: ['先锁住「白天」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「白天」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['白天'] },
  });

  D('daze', {
    etymology: {
      origin: '现代英语常用词「daze」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'daze', gloss: '使茫然' },
      suffix: null,
      history: [
        { label: 'daze', text: '现代英语常用词「daze」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使茫然。' },
      ],
      formationLogic: '核心义：使茫然。',
      mnemonic: '看到 daze，先说出「使茫然」。',
      note: '核心义：使茫然。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one daze.', chinese: '这一章反复回到同一个点：使茫然。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'daze.s1', en: 'Without that daze, the next paragraph is hard to follow.', zh: '没有这个使茫然，下一段会很难读。', structure: 'daze / 表示 / 使茫然', grammar: 'noun，围绕「使茫然」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the daze.', right: 'He gave me some advice about the daze.', reason: 'advice 不可数。名词 daze 的单复数按词典词形记。', rule: '先确定 daze 是noun，再套「使茫然」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'daze.q1', senseId: 'daze.s1', errorType: 'meaning', type: '词义选择', prompt: '「daze」在本条的核心意思是：', options: ['使茫然', '完全相反的意思', '一种古代钱币'], answer: '使茫然', explain: 'daze：使茫然。' },
      { id: 'daze.q2', senseId: 'daze.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches daze?', options: ['使茫然', 'a kind of ancient coin', 'the past tense of be'], answer: '使茫然', explain: '对的是「使茫然」。' },
      { id: 'daze.q3', senseId: 'daze.s1', errorType: 'grammar', type: '词义选择', prompt: 'daze 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'daze.q4', senseId: 'daze.s1', errorType: 'meaning', type: '词源', prompt: '记 daze 时，哪句更稳妥？', options: ['先锁住「使茫然」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使茫然」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使茫然'] },
  });

  D('dazed', {
    etymology: {
      origin: '现代英语常用词「dazed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dazed', gloss: '（被打）发懵的' },
      suffix: null,
      history: [
        { label: 'dazed', text: '现代英语常用词「dazed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（被打）发懵的。' },
      ],
      formationLogic: '核心义：（被打）发懵的。',
      mnemonic: '看到 dazed，先说出「（被打）发懵的」。',
      note: '核心义：（被打）发懵的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dazed.', chinese: '即使是初读者也能看出，这个结果是（被打）发懵的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dazed.s1', en: 'They wanted a dazed answer, not a long speech.', zh: '他们要一个（被打）发懵的的答复，不要长篇发言。', structure: 'dazed / 表示 / （被打）发懵的', grammar: 'adjective，围绕「（被打）发懵的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dazed.', right: 'The news is dazed.', reason: 'news 作主语时动词用单数。', rule: '先确定 dazed 是adjective，再套「（被打）发懵的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dazed.q1', senseId: 'dazed.s1', errorType: 'meaning', type: '词义选择', prompt: '「dazed」在本条的核心意思是：', options: ['（被打）发懵的', '完全相反的意思', '一种古代钱币'], answer: '（被打）发懵的', explain: 'dazed：（被打）发懵的。' },
      { id: 'dazed.q2', senseId: 'dazed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dazed?', options: ['（被打）发懵的', 'a kind of ancient coin', 'the past tense of be'], answer: '（被打）发懵的', explain: '对的是「（被打）发懵的」。' },
      { id: 'dazed.q3', senseId: 'dazed.s1', errorType: 'grammar', type: '词义选择', prompt: 'dazed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dazed.q4', senseId: 'dazed.s1', errorType: 'meaning', type: '词源', prompt: '记 dazed 时，哪句更稳妥？', options: ['先锁住「（被打）发懵的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（被打）发懵的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（被打）发懵的'] },
  });

  D('dazzle', {
    etymology: {
      origin: '现代英语常用词「dazzle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dazzle', gloss: '使目眩' },
      suffix: null,
      history: [
        { label: 'dazzle', text: '现代英语常用词「dazzle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使目眩。' },
      ],
      formationLogic: '核心义：使目眩。',
      mnemonic: '看到 dazzle，先说出「使目眩」。',
      note: '核心义：使目眩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dazzle before the office closed.', chinese: '他们同意在办公室关门前做这件事：使目眩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dazzle.s1', en: 'The deadline forced the team to dazzle that afternoon.', zh: '截止日期逼着小组在那天下午使目眩。', structure: 'dazzle / 表示 / 使目眩', grammar: 'verb，围绕「使目眩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dazzleed it yesterday without checking the real past form.', right: 'Check the past form of "dazzle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dazzle 是verb，再套「使目眩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dazzle.q1', senseId: 'dazzle.s1', errorType: 'meaning', type: '词义选择', prompt: '「dazzle」在本条的核心意思是：', options: ['使目眩', '完全相反的意思', '一种古代钱币'], answer: '使目眩', explain: 'dazzle：使目眩。' },
      { id: 'dazzle.q2', senseId: 'dazzle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dazzle?', options: ['使目眩', 'a kind of ancient coin', 'the past tense of be'], answer: '使目眩', explain: '对的是「使目眩」。' },
      { id: 'dazzle.q3', senseId: 'dazzle.s1', errorType: 'grammar', type: '词义选择', prompt: 'dazzle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dazzle.q4', senseId: 'dazzle.s1', errorType: 'meaning', type: '词源', prompt: '记 dazzle 时，哪句更稳妥？', options: ['先锁住「使目眩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使目眩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使目眩'] },
  });

  D('dazzling', {
    etymology: {
      origin: '英语派生：dazzl + -ing，词性转到「耀眼的」。',
      prefix: null,
      root: { text: 'dazzl', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dazzling', text: '英语派生：dazzl + -ing，词性转到「耀眼的」。' },
        { label: '现在', text: '核心用法是：耀眼的。' },
      ],
      formationLogic: '先认词干 dazzl，再看词尾。',
      mnemonic: '看到 dazzling，先说出「耀眼的」。',
      note: '先认词干 dazzl，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dazzling.', chinese: '即使是初读者也能看出，这个结果是耀眼的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dazzling.s1', en: 'They wanted a dazzling answer, not a long speech.', zh: '他们要一个耀眼的的答复，不要长篇发言。', structure: 'dazzling / 表示 / 耀眼的', grammar: 'adjective，围绕「耀眼的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dazzling.', right: 'The news is dazzling.', reason: 'news 作主语时动词用单数。', rule: '先确定 dazzling 是adjective，再套「耀眼的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dazzling.q1', senseId: 'dazzling.s1', errorType: 'meaning', type: '词义选择', prompt: '「dazzling」在本条的核心意思是：', options: ['耀眼的', '完全相反的意思', '一种古代钱币'], answer: '耀眼的', explain: 'dazzling：耀眼的。' },
      { id: 'dazzling.q2', senseId: 'dazzling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dazzling?', options: ['耀眼的', 'a kind of ancient coin', 'the past tense of be'], answer: '耀眼的', explain: '对的是「耀眼的」。' },
      { id: 'dazzling.q3', senseId: 'dazzling.s1', errorType: 'grammar', type: '词义选择', prompt: 'dazzling 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dazzling.q4', senseId: 'dazzling.s1', errorType: 'meaning', type: '词源', prompt: '记 dazzling 时，哪句更稳妥？', options: ['先锁住「耀眼的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耀眼的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耀眼的'] },
  });

  D('deactivate', {
    etymology: {
      origin: '现代英语常用词「deactivate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deactivate', gloss: '使停用' },
      suffix: null,
      history: [
        { label: 'deactivate', text: '现代英语常用词「deactivate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使停用。' },
      ],
      formationLogic: '核心义：使停用。',
      mnemonic: '看到 deactivate，先说出「使停用」。',
      note: '核心义：使停用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deactivate before the office closed.', chinese: '他们同意在办公室关门前做这件事：使停用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deactivate.s1', en: 'The deadline forced the team to deactivate that afternoon.', zh: '截止日期逼着小组在那天下午使停用。', structure: 'deactivate / 表示 / 使停用', grammar: 'verb，围绕「使停用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deactivateed it yesterday without checking the real past form.', right: 'Check the past form of "deactivate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deactivate 是verb，再套「使停用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deactivate.q1', senseId: 'deactivate.s1', errorType: 'meaning', type: '词义选择', prompt: '「deactivate」在本条的核心意思是：', options: ['使停用', '完全相反的意思', '一种古代钱币'], answer: '使停用', explain: 'deactivate：使停用。' },
      { id: 'deactivate.q2', senseId: 'deactivate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deactivate?', options: ['使停用', 'a kind of ancient coin', 'the past tense of be'], answer: '使停用', explain: '对的是「使停用」。' },
      { id: 'deactivate.q3', senseId: 'deactivate.s1', errorType: 'grammar', type: '词义选择', prompt: 'deactivate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deactivate.q4', senseId: 'deactivate.s1', errorType: 'meaning', type: '词源', prompt: '记 deactivate 时，哪句更稳妥？', options: ['先锁住「使停用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使停用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使停用'] },
  });

  D('dead', {
    etymology: {
      origin: '古英语 dead。',
      prefix: null,
      root: { text: 'dead', gloss: '死的' },
      suffix: null,
      history: [
        { label: 'dead', text: '古英语 dead。' },
        { label: '现在', text: '核心用法是：死的。' },
      ],
      formationLogic: '考试认现在的用法：死的。',
      mnemonic: '看到 dead，先说出「死的」。',
      note: '考试认现在的用法：死的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dead.', chinese: '即使是初读者也能看出，这个结果是死的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dead.s1', en: 'They wanted a dead answer, not a long speech.', zh: '他们要一个死的的答复，不要长篇发言。', structure: 'dead / 表示 / 死的', grammar: 'adjective，围绕「死的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dead.', right: 'The news is dead.', reason: 'news 作主语时动词用单数。', rule: '先确定 dead 是adjective，再套「死的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dead.q1', senseId: 'dead.s1', errorType: 'meaning', type: '词义选择', prompt: '「dead」在本条的核心意思是：', options: ['死的', '完全相反的意思', '一种古代钱币'], answer: '死的', explain: 'dead：死的。' },
      { id: 'dead.q2', senseId: 'dead.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dead?', options: ['死的', 'a kind of ancient coin', 'the past tense of be'], answer: '死的', explain: '对的是「死的」。' },
      { id: 'dead.q3', senseId: 'dead.s1', errorType: 'grammar', type: '词义选择', prompt: 'dead 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dead.q4', senseId: 'dead.s1', errorType: 'meaning', type: '词源', prompt: '记 dead 时，哪句更稳妥？', options: ['先锁住「死的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「死的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['死的'] },
  });

  D('deaden', {
    etymology: {
      origin: '现代英语常用词「deaden」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deaden', gloss: '使麻木' },
      suffix: null,
      history: [
        { label: 'deaden', text: '现代英语常用词「deaden」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使麻木。' },
      ],
      formationLogic: '核心义：使麻木。',
      mnemonic: '看到 deaden，先说出「使麻木」。',
      note: '核心义：使麻木。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deaden before the office closed.', chinese: '他们同意在办公室关门前做这件事：使麻木。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deaden.s1', en: 'The deadline forced the team to deaden that afternoon.', zh: '截止日期逼着小组在那天下午使麻木。', structure: 'deaden / 表示 / 使麻木', grammar: 'verb，围绕「使麻木」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deadened it yesterday without checking the real past form.', right: 'Check the past form of "deaden" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deaden 是verb，再套「使麻木」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deaden.q1', senseId: 'deaden.s1', errorType: 'meaning', type: '词义选择', prompt: '「deaden」在本条的核心意思是：', options: ['使麻木', '完全相反的意思', '一种古代钱币'], answer: '使麻木', explain: 'deaden：使麻木。' },
      { id: 'deaden.q2', senseId: 'deaden.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deaden?', options: ['使麻木', 'a kind of ancient coin', 'the past tense of be'], answer: '使麻木', explain: '对的是「使麻木」。' },
      { id: 'deaden.q3', senseId: 'deaden.s1', errorType: 'grammar', type: '词义选择', prompt: 'deaden 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deaden.q4', senseId: 'deaden.s1', errorType: 'meaning', type: '词源', prompt: '记 deaden 时，哪句更稳妥？', options: ['先锁住「使麻木」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使麻木」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使麻木'] },
  });

  D('deadline', {
    etymology: {
      origin: '现代英语常用词「deadline」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deadline', gloss: '截止日期' },
      suffix: null,
      history: [
        { label: 'deadline', text: '现代英语常用词「deadline」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：截止日期。' },
      ],
      formationLogic: '核心义：截止日期。',
      mnemonic: '看到 deadline，先说出「截止日期」。',
      note: '核心义：截止日期。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deadline.', chinese: '这一章反复回到同一个点：截止日期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deadline.s1', en: 'Without that deadline, the next paragraph is hard to follow.', zh: '没有这个截止日期，下一段会很难读。', structure: 'deadline / 表示 / 截止日期', grammar: 'noun，围绕「截止日期」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deadline.', right: 'He gave me some advice about the deadline.', reason: 'advice 不可数。名词 deadline 的单复数按词典词形记。', rule: '先确定 deadline 是noun，再套「截止日期」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deadline.q1', senseId: 'deadline.s1', errorType: 'meaning', type: '词义选择', prompt: '「deadline」在本条的核心意思是：', options: ['截止日期', '完全相反的意思', '一种古代钱币'], answer: '截止日期', explain: 'deadline：截止日期。' },
      { id: 'deadline.q2', senseId: 'deadline.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deadline?', options: ['截止日期', 'a kind of ancient coin', 'the past tense of be'], answer: '截止日期', explain: '对的是「截止日期」。' },
      { id: 'deadline.q3', senseId: 'deadline.s1', errorType: 'grammar', type: '词义选择', prompt: 'deadline 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deadline.q4', senseId: 'deadline.s1', errorType: 'meaning', type: '词源', prompt: '记 deadline 时，哪句更稳妥？', options: ['先锁住「截止日期」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「截止日期」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['截止日期'] },
  });

  D('deadlock', {
    etymology: {
      origin: '现代英语常用词「deadlock」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deadlock', gloss: '僵局' },
      suffix: null,
      history: [
        { label: 'deadlock', text: '现代英语常用词「deadlock」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：僵局。' },
      ],
      formationLogic: '核心义：僵局。',
      mnemonic: '看到 deadlock，先说出「僵局」。',
      note: '核心义：僵局。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deadlock.', chinese: '这一章反复回到同一个点：僵局。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deadlock.s1', en: 'Without that deadlock, the next paragraph is hard to follow.', zh: '没有这个僵局，下一段会很难读。', structure: 'deadlock / 表示 / 僵局', grammar: 'noun，围绕「僵局」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deadlock.', right: 'He gave me some advice about the deadlock.', reason: 'advice 不可数。名词 deadlock 的单复数按词典词形记。', rule: '先确定 deadlock 是noun，再套「僵局」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deadlock.q1', senseId: 'deadlock.s1', errorType: 'meaning', type: '词义选择', prompt: '「deadlock」在本条的核心意思是：', options: ['僵局', '完全相反的意思', '一种古代钱币'], answer: '僵局', explain: 'deadlock：僵局。' },
      { id: 'deadlock.q2', senseId: 'deadlock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deadlock?', options: ['僵局', 'a kind of ancient coin', 'the past tense of be'], answer: '僵局', explain: '对的是「僵局」。' },
      { id: 'deadlock.q3', senseId: 'deadlock.s1', errorType: 'grammar', type: '词义选择', prompt: 'deadlock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deadlock.q4', senseId: 'deadlock.s1', errorType: 'meaning', type: '词源', prompt: '记 deadlock 时，哪句更稳妥？', options: ['先锁住「僵局」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「僵局」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['僵局'] },
  });

  D('deadly', {
    etymology: {
      origin: '英语派生：dead + -ly，词性转到「致命的」。',
      prefix: null,
      root: { text: 'dead', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deadly', text: '英语派生：dead + -ly，词性转到「致命的」。' },
        { label: '现在', text: '核心用法是：致命的。' },
      ],
      formationLogic: '先认词干 dead，再看词尾。',
      mnemonic: '看到 deadly，先说出「致命的」。',
      note: '先认词干 dead，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deadly.', chinese: '即使是初读者也能看出，这个结果是致命的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deadly.s1', en: 'They wanted a deadly answer, not a long speech.', zh: '他们要一个致命的的答复，不要长篇发言。', structure: 'deadly / 表示 / 致命的', grammar: 'adjective，围绕「致命的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deadly.', right: 'The news is deadly.', reason: 'news 作主语时动词用单数。', rule: '先确定 deadly 是adjective，再套「致命的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deadly.q1', senseId: 'deadly.s1', errorType: 'meaning', type: '词义选择', prompt: '「deadly」在本条的核心意思是：', options: ['致命的', '完全相反的意思', '一种古代钱币'], answer: '致命的', explain: 'deadly：致命的。' },
      { id: 'deadly.q2', senseId: 'deadly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deadly?', options: ['致命的', 'a kind of ancient coin', 'the past tense of be'], answer: '致命的', explain: '对的是「致命的」。' },
      { id: 'deadly.q3', senseId: 'deadly.s1', errorType: 'grammar', type: '词义选择', prompt: 'deadly 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deadly.q4', senseId: 'deadly.s1', errorType: 'meaning', type: '词源', prompt: '记 deadly 时，哪句更稳妥？', options: ['先锁住「致命的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「致命的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['致命的'] },
  });

  D('deaf', {
    etymology: {
      origin: '古英语 deaf。',
      prefix: null,
      root: { text: 'deaf', gloss: '聋的' },
      suffix: null,
      history: [
        { label: 'deaf', text: '古英语 deaf。' },
        { label: '现在', text: '核心用法是：聋的。' },
      ],
      formationLogic: '考试认现在的用法：聋的。',
      mnemonic: '看到 deaf，先说出「聋的」。',
      note: '考试认现在的用法：聋的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deaf.', chinese: '即使是初读者也能看出，这个结果是聋的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deaf.s1', en: 'They wanted a deaf answer, not a long speech.', zh: '他们要一个聋的的答复，不要长篇发言。', structure: 'deaf / 表示 / 聋的', grammar: 'adjective，围绕「聋的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deaf.', right: 'The news is deaf.', reason: 'news 作主语时动词用单数。', rule: '先确定 deaf 是adjective，再套「聋的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deaf.q1', senseId: 'deaf.s1', errorType: 'meaning', type: '词义选择', prompt: '「deaf」在本条的核心意思是：', options: ['聋的', '完全相反的意思', '一种古代钱币'], answer: '聋的', explain: 'deaf：聋的。' },
      { id: 'deaf.q2', senseId: 'deaf.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deaf?', options: ['聋的', 'a kind of ancient coin', 'the past tense of be'], answer: '聋的', explain: '对的是「聋的」。' },
      { id: 'deaf.q3', senseId: 'deaf.s1', errorType: 'grammar', type: '词义选择', prompt: 'deaf 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deaf.q4', senseId: 'deaf.s1', errorType: 'meaning', type: '词源', prompt: '记 deaf 时，哪句更稳妥？', options: ['先锁住「聋的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聋的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聋的'] },
  });

  D('deal', {
    etymology: {
      origin: '古英语 dæl「一份」。',
      prefix: null,
      root: { text: 'deal', gloss: '交易' },
      suffix: null,
      history: [
        { label: 'deal', text: '古英语 dæl「一份」。' },
        { label: '现在', text: '核心用法是：交易。' },
      ],
      formationLogic: '考试认现在的用法：交易。',
      mnemonic: '看到 deal，先说出「交易」。',
      note: '考试认现在的用法：交易。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deal.', chinese: '这一章反复回到同一个点：交易。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deal.s1', en: 'Without that deal, the next paragraph is hard to follow.', zh: '没有这个交易，下一段会很难读。', structure: 'deal / 表示 / 交易', grammar: 'noun，围绕「交易」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deal.', right: 'He gave me some advice about the deal.', reason: 'advice 不可数。名词 deal 的单复数按词典词形记。', rule: '先确定 deal 是noun，再套「交易」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deal.q1', senseId: 'deal.s1', errorType: 'meaning', type: '词义选择', prompt: '「deal」在本条的核心意思是：', options: ['交易', '完全相反的意思', '一种古代钱币'], answer: '交易', explain: 'deal：交易。' },
      { id: 'deal.q2', senseId: 'deal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deal?', options: ['交易', 'a kind of ancient coin', 'the past tense of be'], answer: '交易', explain: '对的是「交易」。' },
      { id: 'deal.q3', senseId: 'deal.s1', errorType: 'grammar', type: '词义选择', prompt: 'deal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deal.q4', senseId: 'deal.s1', errorType: 'meaning', type: '词源', prompt: '记 deal 时，哪句更稳妥？', options: ['先锁住「交易」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交易」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交易'] },
  });

  D('deal with', {
    etymology: {
      origin: '现代英语固定说法「deal with」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'deal with', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'deal with', text: '现代英语固定说法「deal with」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：处理。' },
      ],
      formationLogic: '核心义：处理。',
      mnemonic: '看到 deal with，先说出「处理」。',
      note: '核心义：处理。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "deal with" and asked the class to keep it as one unit.', chinese: '老师把「deal with」圈出来，让全班把它当成一个整体。它表示处理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deal with.s1', en: 'In the margin she wrote "deal with" so nobody would split the phrase.', zh: '她在页边写下「deal with」，免得有人把这个说法拆开。意思是处理。', structure: 'deal with / 表示 / 处理', grammar: 'verb，围绕「处理」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of deal with and lost the point.', right: 'Keep "deal with" together: it means 处理.', reason: '「deal with」要整块理解。', rule: '先确定 deal with 是verb，再套「处理」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deal with.q1', senseId: 'deal with.s1', errorType: 'meaning', type: '词义选择', prompt: '「deal with」在本条的核心意思是：', options: ['处理', '完全相反的意思', '一种古代钱币'], answer: '处理', explain: 'deal with：处理。' },
      { id: 'deal with.q2', senseId: 'deal with.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deal with?', options: ['处理', 'a kind of ancient coin', 'the past tense of be'], answer: '处理', explain: '对的是「处理」。' },
      { id: 'deal with.q3', senseId: 'deal with.s1', errorType: 'grammar', type: '词义选择', prompt: 'deal with 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deal with.q4', senseId: 'deal with.s1', errorType: 'meaning', type: '词源', prompt: '记 deal with 时，哪句更稳妥？', options: ['先锁住「处理」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「处理」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['处理'] },
  });

  D('dealer', {
    etymology: {
      origin: '英语派生：deal + -er，词性转到「商人」。',
      prefix: null,
      root: { text: 'deal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dealer', text: '英语派生：deal + -er，词性转到「商人」。' },
        { label: '现在', text: '核心用法是：商人。' },
      ],
      formationLogic: '先认词干 deal，再看词尾。',
      mnemonic: '看到 dealer，先说出「商人」。',
      note: '先认词干 deal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dealer.', chinese: '这一章反复回到同一个点：商人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dealer.s1', en: 'Without that dealer, the next paragraph is hard to follow.', zh: '没有这个商人，下一段会很难读。', structure: 'dealer / 表示 / 商人', grammar: 'noun，围绕「商人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dealer.', right: 'He gave me some advice about the dealer.', reason: 'advice 不可数。名词 dealer 的单复数按词典词形记。', rule: '先确定 dealer 是noun，再套「商人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dealer.q1', senseId: 'dealer.s1', errorType: 'meaning', type: '词义选择', prompt: '「dealer」在本条的核心意思是：', options: ['商人', '完全相反的意思', '一种古代钱币'], answer: '商人', explain: 'dealer：商人。' },
      { id: 'dealer.q2', senseId: 'dealer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dealer?', options: ['商人', 'a kind of ancient coin', 'the past tense of be'], answer: '商人', explain: '对的是「商人」。' },
      { id: 'dealer.q3', senseId: 'dealer.s1', errorType: 'grammar', type: '词义选择', prompt: 'dealer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dealer.q4', senseId: 'dealer.s1', errorType: 'meaning', type: '词源', prompt: '记 dealer 时，哪句更稳妥？', options: ['先锁住「商人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「商人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['商人'] },
  });

  D('dealings', {
    etymology: {
      origin: '现代英语常用词「dealings」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dealings', gloss: '交往' },
      suffix: null,
      history: [
        { label: 'dealings', text: '现代英语常用词「dealings」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：交往。' },
      ],
      formationLogic: '核心义：交往。',
      mnemonic: '看到 dealings，先说出「交往」。',
      note: '核心义：交往。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dealings.', chinese: '这一章反复回到同一个点：交往。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dealings.s1', en: 'Without that dealings, the next paragraph is hard to follow.', zh: '没有这个交往，下一段会很难读。', structure: 'dealings / 表示 / 交往', grammar: 'noun，围绕「交往」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dealings.', right: 'He gave me some advice about the dealings.', reason: 'advice 不可数。名词 dealings 的单复数按词典词形记。', rule: '先确定 dealings 是noun，再套「交往」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dealings.q1', senseId: 'dealings.s1', errorType: 'meaning', type: '词义选择', prompt: '「dealings」在本条的核心意思是：', options: ['交往', '完全相反的意思', '一种古代钱币'], answer: '交往', explain: 'dealings：交往。' },
      { id: 'dealings.q2', senseId: 'dealings.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dealings?', options: ['交往', 'a kind of ancient coin', 'the past tense of be'], answer: '交往', explain: '对的是「交往」。' },
      { id: 'dealings.q3', senseId: 'dealings.s1', errorType: 'grammar', type: '词义选择', prompt: 'dealings 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dealings.q4', senseId: 'dealings.s1', errorType: 'meaning', type: '词源', prompt: '记 dealings 时，哪句更稳妥？', options: ['先锁住「交往」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交往」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交往'] },
  });

  D('dean', {
    etymology: {
      origin: '现代英语常用词「dean」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dean', gloss: '院长' },
      suffix: null,
      history: [
        { label: 'dean', text: '现代英语常用词「dean」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：院长。' },
      ],
      formationLogic: '核心义：院长。',
      mnemonic: '看到 dean，先说出「院长」。',
      note: '核心义：院长。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dean.', chinese: '这一章反复回到同一个点：院长。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dean.s1', en: 'Without that dean, the next paragraph is hard to follow.', zh: '没有这个院长，下一段会很难读。', structure: 'dean / 表示 / 院长', grammar: 'noun，围绕「院长」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dean.', right: 'He gave me some advice about the dean.', reason: 'advice 不可数。名词 dean 的单复数按词典词形记。', rule: '先确定 dean 是noun，再套「院长」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dean.q1', senseId: 'dean.s1', errorType: 'meaning', type: '词义选择', prompt: '「dean」在本条的核心意思是：', options: ['院长', '完全相反的意思', '一种古代钱币'], answer: '院长', explain: 'dean：院长。' },
      { id: 'dean.q2', senseId: 'dean.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dean?', options: ['院长', 'a kind of ancient coin', 'the past tense of be'], answer: '院长', explain: '对的是「院长」。' },
      { id: 'dean.q3', senseId: 'dean.s1', errorType: 'grammar', type: '词义选择', prompt: 'dean 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dean.q4', senseId: 'dean.s1', errorType: 'meaning', type: '词源', prompt: '记 dean 时，哪句更稳妥？', options: ['先锁住「院长」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「院长」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['院长'] },
  });

  D('dear', {
    etymology: {
      origin: '古英语 deore「珍贵」。',
      prefix: null,
      root: { text: 'dear', gloss: '亲爱的' },
      suffix: null,
      history: [
        { label: 'dear', text: '古英语 deore「珍贵」。' },
        { label: '现在', text: '核心用法是：亲爱的。' },
      ],
      formationLogic: '考试认现在的用法：亲爱的。',
      mnemonic: '看到 dear，先说出「亲爱的」。',
      note: '考试认现在的用法：亲爱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dear.', chinese: '即使是初读者也能看出，这个结果是亲爱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dear.s1', en: 'They wanted a dear answer, not a long speech.', zh: '他们要一个亲爱的的答复，不要长篇发言。', structure: 'dear / 表示 / 亲爱的', grammar: 'adjective，围绕「亲爱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dear.', right: 'The news is dear.', reason: 'news 作主语时动词用单数。', rule: '先确定 dear 是adjective，再套「亲爱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dear.q1', senseId: 'dear.s1', errorType: 'meaning', type: '词义选择', prompt: '「dear」在本条的核心意思是：', options: ['亲爱的', '完全相反的意思', '一种古代钱币'], answer: '亲爱的', explain: 'dear：亲爱的。' },
      { id: 'dear.q2', senseId: 'dear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dear?', options: ['亲爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '亲爱的', explain: '对的是「亲爱的」。' },
      { id: 'dear.q3', senseId: 'dear.s1', errorType: 'grammar', type: '词义选择', prompt: 'dear 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dear.q4', senseId: 'dear.s1', errorType: 'meaning', type: '词源', prompt: '记 dear 时，哪句更稳妥？', options: ['先锁住「亲爱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「亲爱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['亲爱的'] },
  });

  D('death', {
    etymology: {
      origin: '古英语 deaþ。',
      prefix: null,
      root: { text: 'death', gloss: '死亡' },
      suffix: null,
      history: [
        { label: 'death', text: '古英语 deaþ。' },
        { label: '现在', text: '核心用法是：死亡。' },
      ],
      formationLogic: '考试认现在的用法：死亡。',
      mnemonic: '看到 death，先说出「死亡」。',
      note: '考试认现在的用法：死亡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one death.', chinese: '这一章反复回到同一个点：死亡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'death.s1', en: 'Without that death, the next paragraph is hard to follow.', zh: '没有这个死亡，下一段会很难读。', structure: 'death / 表示 / 死亡', grammar: 'noun，围绕「死亡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the death.', right: 'He gave me some advice about the death.', reason: 'advice 不可数。名词 death 的单复数按词典词形记。', rule: '先确定 death 是noun，再套「死亡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'death.q1', senseId: 'death.s1', errorType: 'meaning', type: '词义选择', prompt: '「death」在本条的核心意思是：', options: ['死亡', '完全相反的意思', '一种古代钱币'], answer: '死亡', explain: 'death：死亡。' },
      { id: 'death.q2', senseId: 'death.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches death?', options: ['死亡', 'a kind of ancient coin', 'the past tense of be'], answer: '死亡', explain: '对的是「死亡」。' },
      { id: 'death.q3', senseId: 'death.s1', errorType: 'grammar', type: '词义选择', prompt: 'death 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'death.q4', senseId: 'death.s1', errorType: 'meaning', type: '词源', prompt: '记 death 时，哪句更稳妥？', options: ['先锁住「死亡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「死亡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['死亡'] },
  });

  D('debase', {
    etymology: {
      origin: '现代英语常用词「debase」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'debase', gloss: '使贬值' },
      suffix: null,
      history: [
        { label: 'debase', text: '现代英语常用词「debase」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使贬值。' },
      ],
      formationLogic: '核心义：使贬值。',
      mnemonic: '看到 debase，先说出「使贬值」。',
      note: '核心义：使贬值。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to debase before the office closed.', chinese: '他们同意在办公室关门前做这件事：使贬值。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'debase.s1', en: 'The deadline forced the team to debase that afternoon.', zh: '截止日期逼着小组在那天下午使贬值。', structure: 'debase / 表示 / 使贬值', grammar: 'verb，围绕「使贬值」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She debaseed it yesterday without checking the real past form.', right: 'Check the past form of "debase" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 debase 是verb，再套「使贬值」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'debase.q1', senseId: 'debase.s1', errorType: 'meaning', type: '词义选择', prompt: '「debase」在本条的核心意思是：', options: ['使贬值', '完全相反的意思', '一种古代钱币'], answer: '使贬值', explain: 'debase：使贬值。' },
      { id: 'debase.q2', senseId: 'debase.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches debase?', options: ['使贬值', 'a kind of ancient coin', 'the past tense of be'], answer: '使贬值', explain: '对的是「使贬值」。' },
      { id: 'debase.q3', senseId: 'debase.s1', errorType: 'grammar', type: '词义选择', prompt: 'debase 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'debase.q4', senseId: 'debase.s1', errorType: 'meaning', type: '词源', prompt: '记 debase 时，哪句更稳妥？', options: ['先锁住「使贬值」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使贬值」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使贬值'] },
  });

  D('debate', {
    etymology: {
      origin: '拉丁语 debattuere「打下去」。用话来打。',
      prefix: null,
      root: { text: 'debate', gloss: '辩论' },
      suffix: null,
      history: [
        { label: 'debate', text: '拉丁语 debattuere「打下去」。用话来打。' },
        { label: '现在', text: '核心用法是：辩论。' },
      ],
      formationLogic: '考试认现在的用法：辩论。',
      mnemonic: '看到 debate，先说出「辩论」。',
      note: '考试认现在的用法：辩论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one debate.', chinese: '这一章反复回到同一个点：辩论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'debate.s1', en: 'Without that debate, the next paragraph is hard to follow.', zh: '没有这个辩论，下一段会很难读。', structure: 'debate / 表示 / 辩论', grammar: 'noun，围绕「辩论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the debate.', right: 'He gave me some advice about the debate.', reason: 'advice 不可数。名词 debate 的单复数按词典词形记。', rule: '先确定 debate 是noun，再套「辩论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'debate.q1', senseId: 'debate.s1', errorType: 'meaning', type: '词义选择', prompt: '「debate」在本条的核心意思是：', options: ['辩论', '完全相反的意思', '一种古代钱币'], answer: '辩论', explain: 'debate：辩论。' },
      { id: 'debate.q2', senseId: 'debate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches debate?', options: ['辩论', 'a kind of ancient coin', 'the past tense of be'], answer: '辩论', explain: '对的是「辩论」。' },
      { id: 'debate.q3', senseId: 'debate.s1', errorType: 'grammar', type: '词义选择', prompt: 'debate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'debate.q4', senseId: 'debate.s1', errorType: 'meaning', type: '词源', prompt: '记 debate 时，哪句更稳妥？', options: ['先锁住「辩论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「辩论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['辩论'] },
  });

  D('debris', {
    etymology: {
      origin: '现代英语常用词「debris」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'debris', gloss: '碎片' },
      suffix: null,
      history: [
        { label: 'debris', text: '现代英语常用词「debris」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：碎片。' },
      ],
      formationLogic: '核心义：碎片。',
      mnemonic: '看到 debris，先说出「碎片」。',
      note: '核心义：碎片。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one debris.', chinese: '这一章反复回到同一个点：碎片。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'debris.s1', en: 'Without that debris, the next paragraph is hard to follow.', zh: '没有这个碎片，下一段会很难读。', structure: 'debris / 表示 / 碎片', grammar: 'noun，围绕「碎片」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the debris.', right: 'He gave me some advice about the debris.', reason: 'advice 不可数。名词 debris 的单复数按词典词形记。', rule: '先确定 debris 是noun，再套「碎片」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'debris.q1', senseId: 'debris.s1', errorType: 'meaning', type: '词义选择', prompt: '「debris」在本条的核心意思是：', options: ['碎片', '完全相反的意思', '一种古代钱币'], answer: '碎片', explain: 'debris：碎片。' },
      { id: 'debris.q2', senseId: 'debris.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches debris?', options: ['碎片', 'a kind of ancient coin', 'the past tense of be'], answer: '碎片', explain: '对的是「碎片」。' },
      { id: 'debris.q3', senseId: 'debris.s1', errorType: 'grammar', type: '词义选择', prompt: 'debris 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'debris.q4', senseId: 'debris.s1', errorType: 'meaning', type: '词源', prompt: '记 debris 时，哪句更稳妥？', options: ['先锁住「碎片」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「碎片」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['碎片'] },
  });

  D('debt', {
    etymology: {
      origin: '拉丁语 debitum「欠下的」。',
      prefix: null,
      root: { text: 'debt', gloss: '债务' },
      suffix: null,
      history: [
        { label: 'debt', text: '拉丁语 debitum「欠下的」。' },
        { label: '现在', text: '核心用法是：债务。' },
      ],
      formationLogic: '考试认现在的用法：债务。',
      mnemonic: '看到 debt，先说出「债务」。',
      note: '考试认现在的用法：债务。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one debt.', chinese: '这一章反复回到同一个点：债务。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'debt.s1', en: 'Without that debt, the next paragraph is hard to follow.', zh: '没有这个债务，下一段会很难读。', structure: 'debt / 表示 / 债务', grammar: 'noun，围绕「债务」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the debt.', right: 'He gave me some advice about the debt.', reason: 'advice 不可数。名词 debt 的单复数按词典词形记。', rule: '先确定 debt 是noun，再套「债务」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'debt.q1', senseId: 'debt.s1', errorType: 'meaning', type: '词义选择', prompt: '「debt」在本条的核心意思是：', options: ['债务', '完全相反的意思', '一种古代钱币'], answer: '债务', explain: 'debt：债务。' },
      { id: 'debt.q2', senseId: 'debt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches debt?', options: ['债务', 'a kind of ancient coin', 'the past tense of be'], answer: '债务', explain: '对的是「债务」。' },
      { id: 'debt.q3', senseId: 'debt.s1', errorType: 'grammar', type: '词义选择', prompt: 'debt 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'debt.q4', senseId: 'debt.s1', errorType: 'meaning', type: '词源', prompt: '记 debt 时，哪句更稳妥？', options: ['先锁住「债务」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「债务」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['债务'] },
  });

  D('debut', {
    etymology: {
      origin: '现代英语常用词「debut」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'debut', gloss: '首次登台' },
      suffix: null,
      history: [
        { label: 'debut', text: '现代英语常用词「debut」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：首次登台。' },
      ],
      formationLogic: '核心义：首次登台。',
      mnemonic: '看到 debut，先说出「首次登台」。',
      note: '核心义：首次登台。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one debut.', chinese: '这一章反复回到同一个点：首次登台。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'debut.s1', en: 'Without that debut, the next paragraph is hard to follow.', zh: '没有这个首次登台，下一段会很难读。', structure: 'debut / 表示 / 首次登台', grammar: 'noun，围绕「首次登台」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the debut.', right: 'He gave me some advice about the debut.', reason: 'advice 不可数。名词 debut 的单复数按词典词形记。', rule: '先确定 debut 是noun，再套「首次登台」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'debut.q1', senseId: 'debut.s1', errorType: 'meaning', type: '词义选择', prompt: '「debut」在本条的核心意思是：', options: ['首次登台', '完全相反的意思', '一种古代钱币'], answer: '首次登台', explain: 'debut：首次登台。' },
      { id: 'debut.q2', senseId: 'debut.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches debut?', options: ['首次登台', 'a kind of ancient coin', 'the past tense of be'], answer: '首次登台', explain: '对的是「首次登台」。' },
      { id: 'debut.q3', senseId: 'debut.s1', errorType: 'grammar', type: '词义选择', prompt: 'debut 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'debut.q4', senseId: 'debut.s1', errorType: 'meaning', type: '词源', prompt: '记 debut 时，哪句更稳妥？', options: ['先锁住「首次登台」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「首次登台」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['首次登台'] },
  });

  D('decade', {
    etymology: {
      origin: '希腊语 dekas「十」。',
      prefix: null,
      root: { text: 'decade', gloss: '十年' },
      suffix: null,
      history: [
        { label: 'decade', text: '希腊语 dekas「十」。' },
        { label: '现在', text: '核心用法是：十年。' },
      ],
      formationLogic: '考试认现在的用法：十年。',
      mnemonic: '看到 decade，先说出「十年」。',
      note: '考试认现在的用法：十年。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decade.', chinese: '这一章反复回到同一个点：十年。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decade.s1', en: 'Without that decade, the next paragraph is hard to follow.', zh: '没有这个十年，下一段会很难读。', structure: 'decade / 表示 / 十年', grammar: 'noun，围绕「十年」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decade.', right: 'He gave me some advice about the decade.', reason: 'advice 不可数。名词 decade 的单复数按词典词形记。', rule: '先确定 decade 是noun，再套「十年」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decade.q1', senseId: 'decade.s1', errorType: 'meaning', type: '词义选择', prompt: '「decade」在本条的核心意思是：', options: ['十年', '完全相反的意思', '一种古代钱币'], answer: '十年', explain: 'decade：十年。' },
      { id: 'decade.q2', senseId: 'decade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decade?', options: ['十年', 'a kind of ancient coin', 'the past tense of be'], answer: '十年', explain: '对的是「十年」。' },
      { id: 'decade.q3', senseId: 'decade.s1', errorType: 'grammar', type: '词义选择', prompt: 'decade 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decade.q4', senseId: 'decade.s1', errorType: 'meaning', type: '词源', prompt: '记 decade 时，哪句更稳妥？', options: ['先锁住「十年」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十年」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十年'] },
  });

  D('decant', {
    etymology: {
      origin: '现代英语常用词「decant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'decant', gloss: '倾倒' },
      suffix: null,
      history: [
        { label: 'decant', text: '现代英语常用词「decant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：倾倒。' },
      ],
      formationLogic: '核心义：倾倒。',
      mnemonic: '看到 decant，先说出「倾倒」。',
      note: '核心义：倾倒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decant before the office closed.', chinese: '他们同意在办公室关门前做这件事：倾倒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decant.s1', en: 'The deadline forced the team to decant that afternoon.', zh: '截止日期逼着小组在那天下午倾倒。', structure: 'decant / 表示 / 倾倒', grammar: 'verb，围绕「倾倒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She decanted it yesterday without checking the real past form.', right: 'Check the past form of "decant" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decant 是verb，再套「倾倒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decant.q1', senseId: 'decant.s1', errorType: 'meaning', type: '词义选择', prompt: '「decant」在本条的核心意思是：', options: ['倾倒', '完全相反的意思', '一种古代钱币'], answer: '倾倒', explain: 'decant：倾倒。' },
      { id: 'decant.q2', senseId: 'decant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decant?', options: ['倾倒', 'a kind of ancient coin', 'the past tense of be'], answer: '倾倒', explain: '对的是「倾倒」。' },
      { id: 'decant.q3', senseId: 'decant.s1', errorType: 'grammar', type: '词义选择', prompt: 'decant 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decant.q4', senseId: 'decant.s1', errorType: 'meaning', type: '词源', prompt: '记 decant 时，哪句更稳妥？', options: ['先锁住「倾倒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倾倒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倾倒'] },
  });

  D('decay', {
    etymology: {
      origin: '拉丁语 decadere「落下」。',
      prefix: null,
      root: { text: 'decay', gloss: '腐烂' },
      suffix: null,
      history: [
        { label: 'decay', text: '拉丁语 decadere「落下」。' },
        { label: '现在', text: '核心用法是：腐烂。' },
      ],
      formationLogic: '考试认现在的用法：腐烂。',
      mnemonic: '看到 decay，先说出「腐烂」。',
      note: '考试认现在的用法：腐烂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decay.', chinese: '这一章反复回到同一个点：腐烂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decay.s1', en: 'Without that decay, the next paragraph is hard to follow.', zh: '没有这个腐烂，下一段会很难读。', structure: 'decay / 表示 / 腐烂', grammar: 'noun，围绕「腐烂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decay.', right: 'He gave me some advice about the decay.', reason: 'advice 不可数。名词 decay 的单复数按词典词形记。', rule: '先确定 decay 是noun，再套「腐烂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decay.q1', senseId: 'decay.s1', errorType: 'meaning', type: '词义选择', prompt: '「decay」在本条的核心意思是：', options: ['腐烂', '完全相反的意思', '一种古代钱币'], answer: '腐烂', explain: 'decay：腐烂。' },
      { id: 'decay.q2', senseId: 'decay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decay?', options: ['腐烂', 'a kind of ancient coin', 'the past tense of be'], answer: '腐烂', explain: '对的是「腐烂」。' },
      { id: 'decay.q3', senseId: 'decay.s1', errorType: 'grammar', type: '词义选择', prompt: 'decay 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decay.q4', senseId: 'decay.s1', errorType: 'meaning', type: '词源', prompt: '记 decay 时，哪句更稳妥？', options: ['先锁住「腐烂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐烂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐烂'] },
  });

  D('deceased', {
    etymology: {
      origin: '现代英语常用词「deceased」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deceased', gloss: '已故的' },
      suffix: null,
      history: [
        { label: 'deceased', text: '现代英语常用词「deceased」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：已故的。' },
      ],
      formationLogic: '核心义：已故的。',
      mnemonic: '看到 deceased，先说出「已故的」。',
      note: '核心义：已故的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deceased.', chinese: '即使是初读者也能看出，这个结果是已故的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deceased.s1', en: 'They wanted a deceased answer, not a long speech.', zh: '他们要一个已故的的答复，不要长篇发言。', structure: 'deceased / 表示 / 已故的', grammar: 'adjective，围绕「已故的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deceased.', right: 'The news is deceased.', reason: 'news 作主语时动词用单数。', rule: '先确定 deceased 是adjective，再套「已故的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deceased.q1', senseId: 'deceased.s1', errorType: 'meaning', type: '词义选择', prompt: '「deceased」在本条的核心意思是：', options: ['已故的', '完全相反的意思', '一种古代钱币'], answer: '已故的', explain: 'deceased：已故的。' },
      { id: 'deceased.q2', senseId: 'deceased.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deceased?', options: ['已故的', 'a kind of ancient coin', 'the past tense of be'], answer: '已故的', explain: '对的是「已故的」。' },
      { id: 'deceased.q3', senseId: 'deceased.s1', errorType: 'grammar', type: '词义选择', prompt: 'deceased 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deceased.q4', senseId: 'deceased.s1', errorType: 'meaning', type: '词源', prompt: '记 deceased 时，哪句更稳妥？', options: ['先锁住「已故的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「已故的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['已故的'] },
  });

  D('deceive', {
    etymology: {
      origin: '英语派生：dece + -ive，词性转到「欺骗」。',
      prefix: null,
      root: { text: 'dece', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deceive', text: '英语派生：dece + -ive，词性转到「欺骗」。' },
        { label: '现在', text: '核心用法是：欺骗。' },
      ],
      formationLogic: '先认词干 dece，再看词尾。',
      mnemonic: '看到 deceive，先说出「欺骗」。',
      note: '先认词干 dece，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deceive before the office closed.', chinese: '他们同意在办公室关门前做这件事：欺骗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deceive.s1', en: 'The deadline forced the team to deceive that afternoon.', zh: '截止日期逼着小组在那天下午欺骗。', structure: 'deceive / 表示 / 欺骗', grammar: 'verb，围绕「欺骗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deceiveed it yesterday without checking the real past form.', right: 'Check the past form of "deceive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deceive 是verb，再套「欺骗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deceive.q1', senseId: 'deceive.s1', errorType: 'meaning', type: '词义选择', prompt: '「deceive」在本条的核心意思是：', options: ['欺骗', '完全相反的意思', '一种古代钱币'], answer: '欺骗', explain: 'deceive：欺骗。' },
      { id: 'deceive.q2', senseId: 'deceive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deceive?', options: ['欺骗', 'a kind of ancient coin', 'the past tense of be'], answer: '欺骗', explain: '对的是「欺骗」。' },
      { id: 'deceive.q3', senseId: 'deceive.s1', errorType: 'grammar', type: '词义选择', prompt: 'deceive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deceive.q4', senseId: 'deceive.s1', errorType: 'meaning', type: '词源', prompt: '记 deceive 时，哪句更稳妥？', options: ['先锁住「欺骗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欺骗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欺骗'] },
  });

  D('decelerate', {
    etymology: {
      origin: '现代英语常用词「decelerate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'decelerate', gloss: '减速' },
      suffix: null,
      history: [
        { label: 'decelerate', text: '现代英语常用词「decelerate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：减速。' },
      ],
      formationLogic: '核心义：减速。',
      mnemonic: '看到 decelerate，先说出「减速」。',
      note: '核心义：减速。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decelerate before the office closed.', chinese: '他们同意在办公室关门前做这件事：减速。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decelerate.s1', en: 'The deadline forced the team to decelerate that afternoon.', zh: '截止日期逼着小组在那天下午减速。', structure: 'decelerate / 表示 / 减速', grammar: 'verb，围绕「减速」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She decelerateed it yesterday without checking the real past form.', right: 'Check the past form of "decelerate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decelerate 是verb，再套「减速」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decelerate.q1', senseId: 'decelerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「decelerate」在本条的核心意思是：', options: ['减速', '完全相反的意思', '一种古代钱币'], answer: '减速', explain: 'decelerate：减速。' },
      { id: 'decelerate.q2', senseId: 'decelerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decelerate?', options: ['减速', 'a kind of ancient coin', 'the past tense of be'], answer: '减速', explain: '对的是「减速」。' },
      { id: 'decelerate.q3', senseId: 'decelerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'decelerate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decelerate.q4', senseId: 'decelerate.s1', errorType: 'meaning', type: '词源', prompt: '记 decelerate 时，哪句更稳妥？', options: ['先锁住「减速」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「减速」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['减速'] },
  });

  D('December', {
    etymology: {
      origin: '英语派生：Decemb + -er，词性转到「十二月」。',
      prefix: null,
      root: { text: 'Decemb', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'December', text: '英语派生：Decemb + -er，词性转到「十二月」。' },
        { label: '现在', text: '核心用法是：十二月。' },
      ],
      formationLogic: '先认词干 Decemb，再看词尾。',
      mnemonic: '看到 December，先说出「十二月」。',
      note: '先认词干 Decemb，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one December.', chinese: '这一章反复回到同一个点：十二月。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'December.s1', en: 'Without that December, the next paragraph is hard to follow.', zh: '没有这个十二月，下一段会很难读。', structure: 'December / 表示 / 十二月', grammar: 'noun，围绕「十二月」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the December.', right: 'He gave me some advice about the December.', reason: 'advice 不可数。名词 December 的单复数按词典词形记。', rule: '先确定 December 是noun，再套「十二月」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'December.q1', senseId: 'December.s1', errorType: 'meaning', type: '词义选择', prompt: '「December」在本条的核心意思是：', options: ['十二月', '完全相反的意思', '一种古代钱币'], answer: '十二月', explain: 'December：十二月。' },
      { id: 'December.q2', senseId: 'December.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches December?', options: ['十二月', 'a kind of ancient coin', 'the past tense of be'], answer: '十二月', explain: '对的是「十二月」。' },
      { id: 'December.q3', senseId: 'December.s1', errorType: 'grammar', type: '词义选择', prompt: 'December 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'December.q4', senseId: 'December.s1', errorType: 'meaning', type: '词源', prompt: '记 December 时，哪句更稳妥？', options: ['先锁住「十二月」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十二月」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十二月'] },
  });

  D('decency', {
    etymology: {
      origin: '现代英语常用词「decency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'decency', gloss: '得体' },
      suffix: null,
      history: [
        { label: 'decency', text: '现代英语常用词「decency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：得体。' },
      ],
      formationLogic: '核心义：得体。',
      mnemonic: '看到 decency，先说出「得体」。',
      note: '核心义：得体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decency.', chinese: '这一章反复回到同一个点：得体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decency.s1', en: 'Without that decency, the next paragraph is hard to follow.', zh: '没有这个得体，下一段会很难读。', structure: 'decency / 表示 / 得体', grammar: 'noun，围绕「得体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decency.', right: 'He gave me some advice about the decency.', reason: 'advice 不可数。名词 decency 的单复数按词典词形记。', rule: '先确定 decency 是noun，再套「得体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decency.q1', senseId: 'decency.s1', errorType: 'meaning', type: '词义选择', prompt: '「decency」在本条的核心意思是：', options: ['得体', '完全相反的意思', '一种古代钱币'], answer: '得体', explain: 'decency：得体。' },
      { id: 'decency.q2', senseId: 'decency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decency?', options: ['得体', 'a kind of ancient coin', 'the past tense of be'], answer: '得体', explain: '对的是「得体」。' },
      { id: 'decency.q3', senseId: 'decency.s1', errorType: 'grammar', type: '词义选择', prompt: 'decency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decency.q4', senseId: 'decency.s1', errorType: 'meaning', type: '词源', prompt: '记 decency 时，哪句更稳妥？', options: ['先锁住「得体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「得体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['得体'] },
  });

  D('decent', {
    etymology: {
      origin: '现代英语常用词「decent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'decent', gloss: '像样的' },
      suffix: null,
      history: [
        { label: 'decent', text: '现代英语常用词「decent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：像样的。' },
      ],
      formationLogic: '核心义：像样的。',
      mnemonic: '看到 decent，先说出「像样的」。',
      note: '核心义：像样的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was decent.', chinese: '即使是初读者也能看出，这个结果是像样的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decent.s1', en: 'They wanted a decent answer, not a long speech.', zh: '他们要一个像样的的答复，不要长篇发言。', structure: 'decent / 表示 / 像样的', grammar: 'adjective，围绕「像样的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are decent.', right: 'The news is decent.', reason: 'news 作主语时动词用单数。', rule: '先确定 decent 是adjective，再套「像样的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decent.q1', senseId: 'decent.s1', errorType: 'meaning', type: '词义选择', prompt: '「decent」在本条的核心意思是：', options: ['像样的', '完全相反的意思', '一种古代钱币'], answer: '像样的', explain: 'decent：像样的。' },
      { id: 'decent.q2', senseId: 'decent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decent?', options: ['像样的', 'a kind of ancient coin', 'the past tense of be'], answer: '像样的', explain: '对的是「像样的」。' },
      { id: 'decent.q3', senseId: 'decent.s1', errorType: 'grammar', type: '词义选择', prompt: 'decent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'decent.q4', senseId: 'decent.s1', errorType: 'meaning', type: '词源', prompt: '记 decent 时，哪句更稳妥？', options: ['先锁住「像样的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「像样的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['像样的'] },
  });

  D('deception', {
    etymology: {
      origin: '英语派生：decep + -tion，词性转到「欺骗」。',
      prefix: null,
      root: { text: 'decep', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deception', text: '英语派生：decep + -tion，词性转到「欺骗」。' },
        { label: '现在', text: '核心用法是：欺骗。' },
      ],
      formationLogic: '先认词干 decep，再看词尾。',
      mnemonic: '看到 deception，先说出「欺骗」。',
      note: '先认词干 decep，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deception.', chinese: '这一章反复回到同一个点：欺骗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deception.s1', en: 'Without that deception, the next paragraph is hard to follow.', zh: '没有这个欺骗，下一段会很难读。', structure: 'deception / 表示 / 欺骗', grammar: 'noun，围绕「欺骗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deception.', right: 'He gave me some advice about the deception.', reason: 'advice 不可数。名词 deception 的单复数按词典词形记。', rule: '先确定 deception 是noun，再套「欺骗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deception.q1', senseId: 'deception.s1', errorType: 'meaning', type: '词义选择', prompt: '「deception」在本条的核心意思是：', options: ['欺骗', '完全相反的意思', '一种古代钱币'], answer: '欺骗', explain: 'deception：欺骗。' },
      { id: 'deception.q2', senseId: 'deception.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deception?', options: ['欺骗', 'a kind of ancient coin', 'the past tense of be'], answer: '欺骗', explain: '对的是「欺骗」。' },
      { id: 'deception.q3', senseId: 'deception.s1', errorType: 'grammar', type: '词义选择', prompt: 'deception 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deception.q4', senseId: 'deception.s1', errorType: 'meaning', type: '词源', prompt: '记 deception 时，哪句更稳妥？', options: ['先锁住「欺骗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欺骗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欺骗'] },
  });

  D('decide', {
    etymology: {
      origin: '拉丁语 decidere「切下去」，caedere「切」。',
      prefix: null,
      root: { text: 'decide', gloss: '决定' },
      suffix: null,
      history: [
        { label: 'decide', text: '拉丁语 decidere「切下去」，caedere「切」。' },
        { label: '现在', text: '核心用法是：决定。' },
      ],
      formationLogic: '考试认现在的用法：决定。',
      mnemonic: '看到 decide，先说出「决定」。',
      note: '考试认现在的用法：决定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decide before the office closed.', chinese: '他们同意在办公室关门前做这件事：决定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decide.s1', en: 'The deadline forced the team to decide that afternoon.', zh: '截止日期逼着小组在那天下午决定。', structure: 'decide / 表示 / 决定', grammar: 'verb，围绕「决定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She decideed it yesterday without checking the real past form.', right: 'Check the past form of "decide" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decide 是verb，再套「决定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decide.q1', senseId: 'decide.s1', errorType: 'meaning', type: '词义选择', prompt: '「decide」在本条的核心意思是：', options: ['决定', '完全相反的意思', '一种古代钱币'], answer: '决定', explain: 'decide：决定。' },
      { id: 'decide.q2', senseId: 'decide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decide?', options: ['决定', 'a kind of ancient coin', 'the past tense of be'], answer: '决定', explain: '对的是「决定」。' },
      { id: 'decide.q3', senseId: 'decide.s1', errorType: 'grammar', type: '词义选择', prompt: 'decide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decide.q4', senseId: 'decide.s1', errorType: 'meaning', type: '词源', prompt: '记 decide 时，哪句更稳妥？', options: ['先锁住「决定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「决定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['决定'] },
  });

  D('decimal', {
    etymology: {
      origin: '英语派生：decim + -al，词性转到「小数」。',
      prefix: null,
      root: { text: 'decim', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'decimal', text: '英语派生：decim + -al，词性转到「小数」。' },
        { label: '现在', text: '核心用法是：小数。' },
      ],
      formationLogic: '先认词干 decim，再看词尾。',
      mnemonic: '看到 decimal，先说出「小数」。',
      note: '先认词干 decim，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decimal.', chinese: '这一章反复回到同一个点：小数。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decimal.s1', en: 'Without that decimal, the next paragraph is hard to follow.', zh: '没有这个小数，下一段会很难读。', structure: 'decimal / 表示 / 小数', grammar: 'noun，围绕「小数」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decimal.', right: 'He gave me some advice about the decimal.', reason: 'advice 不可数。名词 decimal 的单复数按词典词形记。', rule: '先确定 decimal 是noun，再套「小数」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decimal.q1', senseId: 'decimal.s1', errorType: 'meaning', type: '词义选择', prompt: '「decimal」在本条的核心意思是：', options: ['小数', '完全相反的意思', '一种古代钱币'], answer: '小数', explain: 'decimal：小数。' },
      { id: 'decimal.q2', senseId: 'decimal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decimal?', options: ['小数', 'a kind of ancient coin', 'the past tense of be'], answer: '小数', explain: '对的是「小数」。' },
      { id: 'decimal.q3', senseId: 'decimal.s1', errorType: 'grammar', type: '词义选择', prompt: 'decimal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decimal.q4', senseId: 'decimal.s1', errorType: 'meaning', type: '词源', prompt: '记 decimal 时，哪句更稳妥？', options: ['先锁住「小数」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小数」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小数'] },
  });

  D('decision', {
    etymology: {
      origin: 'decide 的名词。',
      prefix: null,
      root: { text: 'decision', gloss: '决定' },
      suffix: null,
      history: [
        { label: 'decision', text: 'decide 的名词。' },
        { label: '现在', text: '核心用法是：决定。' },
      ],
      formationLogic: '考试认现在的用法：决定。',
      mnemonic: '看到 decision，先说出「决定」。',
      note: '考试认现在的用法：决定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decision.', chinese: '这一章反复回到同一个点：决定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decision.s1', en: 'Without that decision, the next paragraph is hard to follow.', zh: '没有这个决定，下一段会很难读。', structure: 'decision / 表示 / 决定', grammar: 'noun，围绕「决定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decision.', right: 'He gave me some advice about the decision.', reason: 'advice 不可数。名词 decision 的单复数按词典词形记。', rule: '先确定 decision 是noun，再套「决定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decision.q1', senseId: 'decision.s1', errorType: 'meaning', type: '词义选择', prompt: '「decision」在本条的核心意思是：', options: ['决定', '完全相反的意思', '一种古代钱币'], answer: '决定', explain: 'decision：决定。' },
      { id: 'decision.q2', senseId: 'decision.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decision?', options: ['决定', 'a kind of ancient coin', 'the past tense of be'], answer: '决定', explain: '对的是「决定」。' },
      { id: 'decision.q3', senseId: 'decision.s1', errorType: 'grammar', type: '词义选择', prompt: 'decision 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decision.q4', senseId: 'decision.s1', errorType: 'meaning', type: '词源', prompt: '记 decision 时，哪句更稳妥？', options: ['先锁住「决定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「决定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['决定'] },
  });

  D('decisive', {
    etymology: {
      origin: '英语派生：decis + -ive，词性转到「决定性的」。',
      prefix: null,
      root: { text: 'decis', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'decisive', text: '英语派生：decis + -ive，词性转到「决定性的」。' },
        { label: '现在', text: '核心用法是：决定性的。' },
      ],
      formationLogic: '先认词干 decis，再看词尾。',
      mnemonic: '看到 decisive，先说出「决定性的」。',
      note: '先认词干 decis，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was decisive.', chinese: '即使是初读者也能看出，这个结果是决定性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decisive.s1', en: 'They wanted a decisive answer, not a long speech.', zh: '他们要一个决定性的的答复，不要长篇发言。', structure: 'decisive / 表示 / 决定性的', grammar: 'adjective，围绕「决定性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are decisive.', right: 'The news is decisive.', reason: 'news 作主语时动词用单数。', rule: '先确定 decisive 是adjective，再套「决定性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decisive.q1', senseId: 'decisive.s1', errorType: 'meaning', type: '词义选择', prompt: '「decisive」在本条的核心意思是：', options: ['决定性的', '完全相反的意思', '一种古代钱币'], answer: '决定性的', explain: 'decisive：决定性的。' },
      { id: 'decisive.q2', senseId: 'decisive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decisive?', options: ['决定性的', 'a kind of ancient coin', 'the past tense of be'], answer: '决定性的', explain: '对的是「决定性的」。' },
      { id: 'decisive.q3', senseId: 'decisive.s1', errorType: 'grammar', type: '词义选择', prompt: 'decisive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'decisive.q4', senseId: 'decisive.s1', errorType: 'meaning', type: '词源', prompt: '记 decisive 时，哪句更稳妥？', options: ['先锁住「决定性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「决定性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['决定性的'] },
  });

  D('deck', {
    etymology: {
      origin: '中古荷兰语 dec「覆盖、甲板」。',
      prefix: null,
      root: { text: 'deck', gloss: '甲板' },
      suffix: null,
      history: [
        { label: 'deck', text: '中古荷兰语 dec「覆盖、甲板」。' },
        { label: '现在', text: '核心用法是：甲板。' },
      ],
      formationLogic: '考试认现在的用法：甲板。',
      mnemonic: '看到 deck，先说出「甲板」。',
      note: '考试认现在的用法：甲板。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deck.', chinese: '这一章反复回到同一个点：甲板。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deck.s1', en: 'Without that deck, the next paragraph is hard to follow.', zh: '没有这个甲板，下一段会很难读。', structure: 'deck / 表示 / 甲板', grammar: 'noun，围绕「甲板」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deck.', right: 'He gave me some advice about the deck.', reason: 'advice 不可数。名词 deck 的单复数按词典词形记。', rule: '先确定 deck 是noun，再套「甲板」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deck.q1', senseId: 'deck.s1', errorType: 'meaning', type: '词义选择', prompt: '「deck」在本条的核心意思是：', options: ['甲板', '完全相反的意思', '一种古代钱币'], answer: '甲板', explain: 'deck：甲板。' },
      { id: 'deck.q2', senseId: 'deck.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deck?', options: ['甲板', 'a kind of ancient coin', 'the past tense of be'], answer: '甲板', explain: '对的是「甲板」。' },
      { id: 'deck.q3', senseId: 'deck.s1', errorType: 'grammar', type: '词义选择', prompt: 'deck 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deck.q4', senseId: 'deck.s1', errorType: 'meaning', type: '词源', prompt: '记 deck 时，哪句更稳妥？', options: ['先锁住「甲板」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「甲板」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['甲板'] },
  });

  D('declaim', {
    etymology: {
      origin: '现代英语常用词「declaim」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'declaim', gloss: '朗诵' },
      suffix: null,
      history: [
        { label: 'declaim', text: '现代英语常用词「declaim」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：朗诵。' },
      ],
      formationLogic: '核心义：朗诵。',
      mnemonic: '看到 declaim，先说出「朗诵」。',
      note: '核心义：朗诵。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to declaim before the office closed.', chinese: '他们同意在办公室关门前做这件事：朗诵。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'declaim.s1', en: 'The deadline forced the team to declaim that afternoon.', zh: '截止日期逼着小组在那天下午朗诵。', structure: 'declaim / 表示 / 朗诵', grammar: 'verb，围绕「朗诵」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She declaimed it yesterday without checking the real past form.', right: 'Check the past form of "declaim" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 declaim 是verb，再套「朗诵」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'declaim.q1', senseId: 'declaim.s1', errorType: 'meaning', type: '词义选择', prompt: '「declaim」在本条的核心意思是：', options: ['朗诵', '完全相反的意思', '一种古代钱币'], answer: '朗诵', explain: 'declaim：朗诵。' },
      { id: 'declaim.q2', senseId: 'declaim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches declaim?', options: ['朗诵', 'a kind of ancient coin', 'the past tense of be'], answer: '朗诵', explain: '对的是「朗诵」。' },
      { id: 'declaim.q3', senseId: 'declaim.s1', errorType: 'grammar', type: '词义选择', prompt: 'declaim 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'declaim.q4', senseId: 'declaim.s1', errorType: 'meaning', type: '词源', prompt: '记 declaim 时，哪句更稳妥？', options: ['先锁住「朗诵」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「朗诵」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['朗诵'] },
  });

  D('declaration', {
    etymology: {
      origin: '英语派生：declara + -tion，词性转到「声明」。',
      prefix: null,
      root: { text: 'declara', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'declaration', text: '英语派生：declara + -tion，词性转到「声明」。' },
        { label: '现在', text: '核心用法是：声明。' },
      ],
      formationLogic: '先认词干 declara，再看词尾。',
      mnemonic: '看到 declaration，先说出「声明」。',
      note: '先认词干 declara，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one declaration.', chinese: '这一章反复回到同一个点：声明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'declaration.s1', en: 'Without that declaration, the next paragraph is hard to follow.', zh: '没有这个声明，下一段会很难读。', structure: 'declaration / 表示 / 声明', grammar: 'noun，围绕「声明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the declaration.', right: 'He gave me some advice about the declaration.', reason: 'advice 不可数。名词 declaration 的单复数按词典词形记。', rule: '先确定 declaration 是noun，再套「声明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'declaration.q1', senseId: 'declaration.s1', errorType: 'meaning', type: '词义选择', prompt: '「declaration」在本条的核心意思是：', options: ['声明', '完全相反的意思', '一种古代钱币'], answer: '声明', explain: 'declaration：声明。' },
      { id: 'declaration.q2', senseId: 'declaration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches declaration?', options: ['声明', 'a kind of ancient coin', 'the past tense of be'], answer: '声明', explain: '对的是「声明」。' },
      { id: 'declaration.q3', senseId: 'declaration.s1', errorType: 'grammar', type: '词义选择', prompt: 'declaration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'declaration.q4', senseId: 'declaration.s1', errorType: 'meaning', type: '词源', prompt: '记 declaration 时，哪句更稳妥？', options: ['先锁住「声明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「声明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['声明'] },
  });

  D('declare', {
    etymology: {
      origin: '拉丁语 declarare「说清楚」，clarus。',
      prefix: null,
      root: { text: 'declare', gloss: '宣布' },
      suffix: null,
      history: [
        { label: 'declare', text: '拉丁语 declarare「说清楚」，clarus。' },
        { label: '现在', text: '核心用法是：宣布。' },
      ],
      formationLogic: '考试认现在的用法：宣布。',
      mnemonic: '看到 declare，先说出「宣布」。',
      note: '考试认现在的用法：宣布。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to declare before the office closed.', chinese: '他们同意在办公室关门前做这件事：宣布。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'declare.s1', en: 'The deadline forced the team to declare that afternoon.', zh: '截止日期逼着小组在那天下午宣布。', structure: 'declare / 表示 / 宣布', grammar: 'verb，围绕「宣布」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She declareed it yesterday without checking the real past form.', right: 'Check the past form of "declare" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 declare 是verb，再套「宣布」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'declare.q1', senseId: 'declare.s1', errorType: 'meaning', type: '词义选择', prompt: '「declare」在本条的核心意思是：', options: ['宣布', '完全相反的意思', '一种古代钱币'], answer: '宣布', explain: 'declare：宣布。' },
      { id: 'declare.q2', senseId: 'declare.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches declare?', options: ['宣布', 'a kind of ancient coin', 'the past tense of be'], answer: '宣布', explain: '对的是「宣布」。' },
      { id: 'declare.q3', senseId: 'declare.s1', errorType: 'grammar', type: '词义选择', prompt: 'declare 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'declare.q4', senseId: 'declare.s1', errorType: 'meaning', type: '词源', prompt: '记 declare 时，哪句更稳妥？', options: ['先锁住「宣布」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宣布」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宣布'] },
  });

  D('decline', {
    etymology: {
      origin: '拉丁语 declinare「弯下去」。拒绝是把头偏开。',
      prefix: null,
      root: { text: 'decline', gloss: '下降' },
      suffix: null,
      history: [
        { label: 'decline', text: '拉丁语 declinare「弯下去」。拒绝是把头偏开。' },
        { label: '现在', text: '核心用法是：下降。' },
      ],
      formationLogic: '考试认现在的用法：下降。',
      mnemonic: '看到 decline，先说出「下降」。',
      note: '考试认现在的用法：下降。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decline before the office closed.', chinese: '他们同意在办公室关门前做这件事：下降。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decline.s1', en: 'The deadline forced the team to decline that afternoon.', zh: '截止日期逼着小组在那天下午下降。', structure: 'decline / 表示 / 下降', grammar: 'verb，围绕「下降」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She declineed it yesterday without checking the real past form.', right: 'Check the past form of "decline" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decline 是verb，再套「下降」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decline.q1', senseId: 'decline.s1', errorType: 'meaning', type: '词义选择', prompt: '「decline」在本条的核心意思是：', options: ['下降', '完全相反的意思', '一种古代钱币'], answer: '下降', explain: 'decline：下降。' },
      { id: 'decline.q2', senseId: 'decline.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decline?', options: ['下降', 'a kind of ancient coin', 'the past tense of be'], answer: '下降', explain: '对的是「下降」。' },
      { id: 'decline.q3', senseId: 'decline.s1', errorType: 'grammar', type: '词义选择', prompt: 'decline 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decline.q4', senseId: 'decline.s1', errorType: 'meaning', type: '词源', prompt: '记 decline 时，哪句更稳妥？', options: ['先锁住「下降」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下降」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下降'] },
  });

  D('declining', {
    etymology: {
      origin: '英语派生：declin + -ing，词性转到「下降中的」。',
      prefix: null,
      root: { text: 'declin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'declining', text: '英语派生：declin + -ing，词性转到「下降中的」。' },
        { label: '现在', text: '核心用法是：下降中的。' },
      ],
      formationLogic: '先认词干 declin，再看词尾。',
      mnemonic: '看到 declining，先说出「下降中的」。',
      note: '先认词干 declin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was declining.', chinese: '即使是初读者也能看出，这个结果是下降中的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'declining.s1', en: 'They wanted a declining answer, not a long speech.', zh: '他们要一个下降中的的答复，不要长篇发言。', structure: 'declining / 表示 / 下降中的', grammar: 'adjective，围绕「下降中的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are declining.', right: 'The news is declining.', reason: 'news 作主语时动词用单数。', rule: '先确定 declining 是adjective，再套「下降中的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'declining.q1', senseId: 'declining.s1', errorType: 'meaning', type: '词义选择', prompt: '「declining」在本条的核心意思是：', options: ['下降中的', '完全相反的意思', '一种古代钱币'], answer: '下降中的', explain: 'declining：下降中的。' },
      { id: 'declining.q2', senseId: 'declining.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches declining?', options: ['下降中的', 'a kind of ancient coin', 'the past tense of be'], answer: '下降中的', explain: '对的是「下降中的」。' },
      { id: 'declining.q3', senseId: 'declining.s1', errorType: 'grammar', type: '词义选择', prompt: 'declining 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'declining.q4', senseId: 'declining.s1', errorType: 'meaning', type: '词源', prompt: '记 declining 时，哪句更稳妥？', options: ['先锁住「下降中的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下降中的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下降中的'] },
  });

  D('decompose', {
    etymology: {
      origin: '现代英语常用词「decompose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'decompose', gloss: '腐烂' },
      suffix: null,
      history: [
        { label: 'decompose', text: '现代英语常用词「decompose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：腐烂。' },
      ],
      formationLogic: '核心义：腐烂。',
      mnemonic: '看到 decompose，先说出「腐烂」。',
      note: '核心义：腐烂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decompose before the office closed.', chinese: '他们同意在办公室关门前做这件事：腐烂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decompose.s1', en: 'The deadline forced the team to decompose that afternoon.', zh: '截止日期逼着小组在那天下午腐烂。', structure: 'decompose / 表示 / 腐烂', grammar: 'verb，围绕「腐烂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She decomposeed it yesterday without checking the real past form.', right: 'Check the past form of "decompose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decompose 是verb，再套「腐烂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decompose.q1', senseId: 'decompose.s1', errorType: 'meaning', type: '词义选择', prompt: '「decompose」在本条的核心意思是：', options: ['腐烂', '完全相反的意思', '一种古代钱币'], answer: '腐烂', explain: 'decompose：腐烂。' },
      { id: 'decompose.q2', senseId: 'decompose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decompose?', options: ['腐烂', 'a kind of ancient coin', 'the past tense of be'], answer: '腐烂', explain: '对的是「腐烂」。' },
      { id: 'decompose.q3', senseId: 'decompose.s1', errorType: 'grammar', type: '词义选择', prompt: 'decompose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decompose.q4', senseId: 'decompose.s1', errorType: 'meaning', type: '词源', prompt: '记 decompose 时，哪句更稳妥？', options: ['先锁住「腐烂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐烂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐烂'] },
  });

  D('decorate', {
    etymology: {
      origin: '拉丁语 decorare，decus「装饰、体面」。',
      prefix: null,
      root: { text: 'decorate', gloss: '装饰' },
      suffix: null,
      history: [
        { label: 'decorate', text: '拉丁语 decorare，decus「装饰、体面」。' },
        { label: '现在', text: '核心用法是：装饰。' },
      ],
      formationLogic: '考试认现在的用法：装饰。',
      mnemonic: '看到 decorate，先说出「装饰」。',
      note: '考试认现在的用法：装饰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decorate before the office closed.', chinese: '他们同意在办公室关门前做这件事：装饰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decorate.s1', en: 'The deadline forced the team to decorate that afternoon.', zh: '截止日期逼着小组在那天下午装饰。', structure: 'decorate / 表示 / 装饰', grammar: 'verb，围绕「装饰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She decorateed it yesterday without checking the real past form.', right: 'Check the past form of "decorate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decorate 是verb，再套「装饰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decorate.q1', senseId: 'decorate.s1', errorType: 'meaning', type: '词义选择', prompt: '「decorate」在本条的核心意思是：', options: ['装饰', '完全相反的意思', '一种古代钱币'], answer: '装饰', explain: 'decorate：装饰。' },
      { id: 'decorate.q2', senseId: 'decorate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decorate?', options: ['装饰', 'a kind of ancient coin', 'the past tense of be'], answer: '装饰', explain: '对的是「装饰」。' },
      { id: 'decorate.q3', senseId: 'decorate.s1', errorType: 'grammar', type: '词义选择', prompt: 'decorate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decorate.q4', senseId: 'decorate.s1', errorType: 'meaning', type: '词源', prompt: '记 decorate 时，哪句更稳妥？', options: ['先锁住「装饰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装饰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装饰'] },
  });

  D('decoration', {
    etymology: {
      origin: '英语派生：decora + -tion，词性转到「装饰」。',
      prefix: null,
      root: { text: 'decora', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'decoration', text: '英语派生：decora + -tion，词性转到「装饰」。' },
        { label: '现在', text: '核心用法是：装饰。' },
      ],
      formationLogic: '先认词干 decora，再看词尾。',
      mnemonic: '看到 decoration，先说出「装饰」。',
      note: '先认词干 decora，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decoration.', chinese: '这一章反复回到同一个点：装饰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decoration.s1', en: 'Without that decoration, the next paragraph is hard to follow.', zh: '没有这个装饰，下一段会很难读。', structure: 'decoration / 表示 / 装饰', grammar: 'noun，围绕「装饰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decoration.', right: 'He gave me some advice about the decoration.', reason: 'advice 不可数。名词 decoration 的单复数按词典词形记。', rule: '先确定 decoration 是noun，再套「装饰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decoration.q1', senseId: 'decoration.s1', errorType: 'meaning', type: '词义选择', prompt: '「decoration」在本条的核心意思是：', options: ['装饰', '完全相反的意思', '一种古代钱币'], answer: '装饰', explain: 'decoration：装饰。' },
      { id: 'decoration.q2', senseId: 'decoration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decoration?', options: ['装饰', 'a kind of ancient coin', 'the past tense of be'], answer: '装饰', explain: '对的是「装饰」。' },
      { id: 'decoration.q3', senseId: 'decoration.s1', errorType: 'grammar', type: '词义选择', prompt: 'decoration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decoration.q4', senseId: 'decoration.s1', errorType: 'meaning', type: '词源', prompt: '记 decoration 时，哪句更稳妥？', options: ['先锁住「装饰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装饰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装饰'] },
  });

  D('decrease', {
    etymology: {
      origin: '拉丁语 decrescere「变少」，crescere「生长」。',
      prefix: null,
      root: { text: 'decrease', gloss: '减少' },
      suffix: null,
      history: [
        { label: 'decrease', text: '拉丁语 decrescere「变少」，crescere「生长」。' },
        { label: '现在', text: '核心用法是：减少。' },
      ],
      formationLogic: '考试认现在的用法：减少。',
      mnemonic: '看到 decrease，先说出「减少」。',
      note: '考试认现在的用法：减少。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to decrease before the office closed.', chinese: '他们同意在办公室关门前做这件事：减少。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decrease.s1', en: 'The deadline forced the team to decrease that afternoon.', zh: '截止日期逼着小组在那天下午减少。', structure: 'decrease / 表示 / 减少', grammar: 'verb，围绕「减少」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She decreaseed it yesterday without checking the real past form.', right: 'Check the past form of "decrease" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 decrease 是verb，再套「减少」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decrease.q1', senseId: 'decrease.s1', errorType: 'meaning', type: '词义选择', prompt: '「decrease」在本条的核心意思是：', options: ['减少', '完全相反的意思', '一种古代钱币'], answer: '减少', explain: 'decrease：减少。' },
      { id: 'decrease.q2', senseId: 'decrease.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decrease?', options: ['减少', 'a kind of ancient coin', 'the past tense of be'], answer: '减少', explain: '对的是「减少」。' },
      { id: 'decrease.q3', senseId: 'decrease.s1', errorType: 'grammar', type: '词义选择', prompt: 'decrease 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'decrease.q4', senseId: 'decrease.s1', errorType: 'meaning', type: '词源', prompt: '记 decrease 时，哪句更稳妥？', options: ['先锁住「减少」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「减少」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['减少'] },
  });

  D('decree', {
    etymology: {
      origin: '现代英语常用词「decree」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'decree', gloss: '法令' },
      suffix: null,
      history: [
        { label: 'decree', text: '现代英语常用词「decree」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：法令。' },
      ],
      formationLogic: '核心义：法令。',
      mnemonic: '看到 decree，先说出「法令」。',
      note: '核心义：法令。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one decree.', chinese: '这一章反复回到同一个点：法令。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'decree.s1', en: 'Without that decree, the next paragraph is hard to follow.', zh: '没有这个法令，下一段会很难读。', structure: 'decree / 表示 / 法令', grammar: 'noun，围绕「法令」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the decree.', right: 'He gave me some advice about the decree.', reason: 'advice 不可数。名词 decree 的单复数按词典词形记。', rule: '先确定 decree 是noun，再套「法令」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'decree.q1', senseId: 'decree.s1', errorType: 'meaning', type: '词义选择', prompt: '「decree」在本条的核心意思是：', options: ['法令', '完全相反的意思', '一种古代钱币'], answer: '法令', explain: 'decree：法令。' },
      { id: 'decree.q2', senseId: 'decree.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches decree?', options: ['法令', 'a kind of ancient coin', 'the past tense of be'], answer: '法令', explain: '对的是「法令」。' },
      { id: 'decree.q3', senseId: 'decree.s1', errorType: 'grammar', type: '词义选择', prompt: 'decree 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'decree.q4', senseId: 'decree.s1', errorType: 'meaning', type: '词源', prompt: '记 decree 时，哪句更稳妥？', options: ['先锁住「法令」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「法令」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['法令'] },
  });

  D('dedicate', {
    etymology: {
      origin: '拉丁语 dedicare「宣布交给」。',
      prefix: null,
      root: { text: 'dedicate', gloss: '致力于' },
      suffix: null,
      history: [
        { label: 'dedicate', text: '拉丁语 dedicare「宣布交给」。' },
        { label: '现在', text: '核心用法是：致力于。' },
      ],
      formationLogic: '考试认现在的用法：致力于。',
      mnemonic: '看到 dedicate，先说出「致力于」。',
      note: '考试认现在的用法：致力于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dedicate before the office closed.', chinese: '他们同意在办公室关门前做这件事：致力于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dedicate.s1', en: 'The deadline forced the team to dedicate that afternoon.', zh: '截止日期逼着小组在那天下午致力于。', structure: 'dedicate / 表示 / 致力于', grammar: 'verb，围绕「致力于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dedicateed it yesterday without checking the real past form.', right: 'Check the past form of "dedicate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dedicate 是verb，再套「致力于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dedicate.q1', senseId: 'dedicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「dedicate」在本条的核心意思是：', options: ['致力于', '完全相反的意思', '一种古代钱币'], answer: '致力于', explain: 'dedicate：致力于。' },
      { id: 'dedicate.q2', senseId: 'dedicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dedicate?', options: ['致力于', 'a kind of ancient coin', 'the past tense of be'], answer: '致力于', explain: '对的是「致力于」。' },
      { id: 'dedicate.q3', senseId: 'dedicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'dedicate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dedicate.q4', senseId: 'dedicate.s1', errorType: 'meaning', type: '词源', prompt: '记 dedicate 时，哪句更稳妥？', options: ['先锁住「致力于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「致力于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['致力于'] },
  });

  D('deduce', {
    etymology: {
      origin: '现代英语常用词「deduce」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deduce', gloss: '推断' },
      suffix: null,
      history: [
        { label: 'deduce', text: '现代英语常用词「deduce」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：推断。' },
      ],
      formationLogic: '核心义：推断。',
      mnemonic: '看到 deduce，先说出「推断」。',
      note: '核心义：推断。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deduce before the office closed.', chinese: '他们同意在办公室关门前做这件事：推断。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deduce.s1', en: 'The deadline forced the team to deduce that afternoon.', zh: '截止日期逼着小组在那天下午推断。', structure: 'deduce / 表示 / 推断', grammar: 'verb，围绕「推断」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deduceed it yesterday without checking the real past form.', right: 'Check the past form of "deduce" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deduce 是verb，再套「推断」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deduce.q1', senseId: 'deduce.s1', errorType: 'meaning', type: '词义选择', prompt: '「deduce」在本条的核心意思是：', options: ['推断', '完全相反的意思', '一种古代钱币'], answer: '推断', explain: 'deduce：推断。' },
      { id: 'deduce.q2', senseId: 'deduce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deduce?', options: ['推断', 'a kind of ancient coin', 'the past tense of be'], answer: '推断', explain: '对的是「推断」。' },
      { id: 'deduce.q3', senseId: 'deduce.s1', errorType: 'grammar', type: '词义选择', prompt: 'deduce 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deduce.q4', senseId: 'deduce.s1', errorType: 'meaning', type: '词源', prompt: '记 deduce 时，哪句更稳妥？', options: ['先锁住「推断」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「推断」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['推断'] },
  });

  D('deduct', {
    etymology: {
      origin: '现代英语常用词「deduct」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deduct', gloss: '扣除' },
      suffix: null,
      history: [
        { label: 'deduct', text: '现代英语常用词「deduct」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：扣除。' },
      ],
      formationLogic: '核心义：扣除。',
      mnemonic: '看到 deduct，先说出「扣除」。',
      note: '核心义：扣除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deduct before the office closed.', chinese: '他们同意在办公室关门前做这件事：扣除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deduct.s1', en: 'The deadline forced the team to deduct that afternoon.', zh: '截止日期逼着小组在那天下午扣除。', structure: 'deduct / 表示 / 扣除', grammar: 'verb，围绕「扣除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deducted it yesterday without checking the real past form.', right: 'Check the past form of "deduct" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deduct 是verb，再套「扣除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deduct.q1', senseId: 'deduct.s1', errorType: 'meaning', type: '词义选择', prompt: '「deduct」在本条的核心意思是：', options: ['扣除', '完全相反的意思', '一种古代钱币'], answer: '扣除', explain: 'deduct：扣除。' },
      { id: 'deduct.q2', senseId: 'deduct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deduct?', options: ['扣除', 'a kind of ancient coin', 'the past tense of be'], answer: '扣除', explain: '对的是「扣除」。' },
      { id: 'deduct.q3', senseId: 'deduct.s1', errorType: 'grammar', type: '词义选择', prompt: 'deduct 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deduct.q4', senseId: 'deduct.s1', errorType: 'meaning', type: '词源', prompt: '记 deduct 时，哪句更稳妥？', options: ['先锁住「扣除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扣除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扣除'] },
  });

  D('deed', {
    etymology: {
      origin: '古英语 dæd「做出来的事」。',
      prefix: null,
      root: { text: 'deed', gloss: '行为' },
      suffix: null,
      history: [
        { label: 'deed', text: '古英语 dæd「做出来的事」。' },
        { label: '现在', text: '核心用法是：行为。' },
      ],
      formationLogic: '考试认现在的用法：行为。',
      mnemonic: '看到 deed，先说出「行为」。',
      note: '考试认现在的用法：行为。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deed.', chinese: '这一章反复回到同一个点：行为。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deed.s1', en: 'Without that deed, the next paragraph is hard to follow.', zh: '没有这个行为，下一段会很难读。', structure: 'deed / 表示 / 行为', grammar: 'noun，围绕「行为」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deed.', right: 'He gave me some advice about the deed.', reason: 'advice 不可数。名词 deed 的单复数按词典词形记。', rule: '先确定 deed 是noun，再套「行为」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deed.q1', senseId: 'deed.s1', errorType: 'meaning', type: '词义选择', prompt: '「deed」在本条的核心意思是：', options: ['行为', '完全相反的意思', '一种古代钱币'], answer: '行为', explain: 'deed：行为。' },
      { id: 'deed.q2', senseId: 'deed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deed?', options: ['行为', 'a kind of ancient coin', 'the past tense of be'], answer: '行为', explain: '对的是「行为」。' },
      { id: 'deed.q3', senseId: 'deed.s1', errorType: 'grammar', type: '词义选择', prompt: 'deed 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deed.q4', senseId: 'deed.s1', errorType: 'meaning', type: '词源', prompt: '记 deed 时，哪句更稳妥？', options: ['先锁住「行为」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「行为」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['行为'] },
  });

  D('deem', {
    etymology: {
      origin: '现代英语常用词「deem」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deem', gloss: '认为' },
      suffix: null,
      history: [
        { label: 'deem', text: '现代英语常用词「deem」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：认为。' },
      ],
      formationLogic: '核心义：认为。',
      mnemonic: '看到 deem，先说出「认为」。',
      note: '核心义：认为。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deem before the office closed.', chinese: '他们同意在办公室关门前做这件事：认为。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deem.s1', en: 'The deadline forced the team to deem that afternoon.', zh: '截止日期逼着小组在那天下午认为。', structure: 'deem / 表示 / 认为', grammar: 'verb，围绕「认为」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deemed it yesterday without checking the real past form.', right: 'Check the past form of "deem" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deem 是verb，再套「认为」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deem.q1', senseId: 'deem.s1', errorType: 'meaning', type: '词义选择', prompt: '「deem」在本条的核心意思是：', options: ['认为', '完全相反的意思', '一种古代钱币'], answer: '认为', explain: 'deem：认为。' },
      { id: 'deem.q2', senseId: 'deem.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deem?', options: ['认为', 'a kind of ancient coin', 'the past tense of be'], answer: '认为', explain: '对的是「认为」。' },
      { id: 'deem.q3', senseId: 'deem.s1', errorType: 'grammar', type: '词义选择', prompt: 'deem 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deem.q4', senseId: 'deem.s1', errorType: 'meaning', type: '词源', prompt: '记 deem 时，哪句更稳妥？', options: ['先锁住「认为」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「认为」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['认为'] },
  });

  D('deep', {
    etymology: {
      origin: '古英语 deop。',
      prefix: null,
      root: { text: 'deep', gloss: '深的' },
      suffix: null,
      history: [
        { label: 'deep', text: '古英语 deop。' },
        { label: '现在', text: '核心用法是：深的。' },
      ],
      formationLogic: '考试认现在的用法：深的。',
      mnemonic: '看到 deep，先说出「深的」。',
      note: '考试认现在的用法：深的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deep.', chinese: '即使是初读者也能看出，这个结果是深的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deep.s1', en: 'They wanted a deep answer, not a long speech.', zh: '他们要一个深的的答复，不要长篇发言。', structure: 'deep / 表示 / 深的', grammar: 'adjective，围绕「深的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deep.', right: 'The news is deep.', reason: 'news 作主语时动词用单数。', rule: '先确定 deep 是adjective，再套「深的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deep.q1', senseId: 'deep.s1', errorType: 'meaning', type: '词义选择', prompt: '「deep」在本条的核心意思是：', options: ['深的', '完全相反的意思', '一种古代钱币'], answer: '深的', explain: 'deep：深的。' },
      { id: 'deep.q2', senseId: 'deep.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deep?', options: ['深的', 'a kind of ancient coin', 'the past tense of be'], answer: '深的', explain: '对的是「深的」。' },
      { id: 'deep.q3', senseId: 'deep.s1', errorType: 'grammar', type: '词义选择', prompt: 'deep 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deep.q4', senseId: 'deep.s1', errorType: 'meaning', type: '词源', prompt: '记 deep 时，哪句更稳妥？', options: ['先锁住「深的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深的'] },
  });

  D('deepness', {
    etymology: {
      origin: '英语派生：deep + -ness，词性转到「深」。',
      prefix: null,
      root: { text: 'deep', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deepness', text: '英语派生：deep + -ness，词性转到「深」。' },
        { label: '现在', text: '核心用法是：深。' },
      ],
      formationLogic: '先认词干 deep，再看词尾。',
      mnemonic: '看到 deepness，先说出「深」。',
      note: '先认词干 deep，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deepness.', chinese: '这一章反复回到同一个点：深。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deepness.s1', en: 'Without that deepness, the next paragraph is hard to follow.', zh: '没有这个深，下一段会很难读。', structure: 'deepness / 表示 / 深', grammar: 'noun，围绕「深」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deepness.', right: 'He gave me some advice about the deepness.', reason: 'advice 不可数。名词 deepness 的单复数按词典词形记。', rule: '先确定 deepness 是noun，再套「深」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deepness.q1', senseId: 'deepness.s1', errorType: 'meaning', type: '词义选择', prompt: '「deepness」在本条的核心意思是：', options: ['深', '完全相反的意思', '一种古代钱币'], answer: '深', explain: 'deepness：深。' },
      { id: 'deepness.q2', senseId: 'deepness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deepness?', options: ['深', 'a kind of ancient coin', 'the past tense of be'], answer: '深', explain: '对的是「深」。' },
      { id: 'deepness.q3', senseId: 'deepness.s1', errorType: 'grammar', type: '词义选择', prompt: 'deepness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deepness.q4', senseId: 'deepness.s1', errorType: 'meaning', type: '词源', prompt: '记 deepness 时，哪句更稳妥？', options: ['先锁住「深」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深'] },
  });

  D('deer', {
    etymology: {
      origin: '现代英语常用词「deer」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deer', gloss: '鹿' },
      suffix: null,
      history: [
        { label: 'deer', text: '现代英语常用词「deer」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鹿。' },
      ],
      formationLogic: '核心义：鹿。',
      mnemonic: '看到 deer，先说出「鹿」。',
      note: '核心义：鹿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deer.', chinese: '这一章反复回到同一个点：鹿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deer.s1', en: 'Without that deer, the next paragraph is hard to follow.', zh: '没有这个鹿，下一段会很难读。', structure: 'deer / 表示 / 鹿', grammar: 'noun，围绕「鹿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deer.', right: 'He gave me some advice about the deer.', reason: 'advice 不可数。名词 deer 的单复数按词典词形记。', rule: '先确定 deer 是noun，再套「鹿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deer.q1', senseId: 'deer.s1', errorType: 'meaning', type: '词义选择', prompt: '「deer」在本条的核心意思是：', options: ['鹿', '完全相反的意思', '一种古代钱币'], answer: '鹿', explain: 'deer：鹿。' },
      { id: 'deer.q2', senseId: 'deer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deer?', options: ['鹿', 'a kind of ancient coin', 'the past tense of be'], answer: '鹿', explain: '对的是「鹿」。' },
      { id: 'deer.q3', senseId: 'deer.s1', errorType: 'grammar', type: '词义选择', prompt: 'deer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deer.q4', senseId: 'deer.s1', errorType: 'meaning', type: '词源', prompt: '记 deer 时，哪句更稳妥？', options: ['先锁住「鹿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鹿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鹿'] },
  });

  D('default', {
    etymology: {
      origin: '现代英语常用词「default」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'default', gloss: '默认' },
      suffix: null,
      history: [
        { label: 'default', text: '现代英语常用词「default」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：默认。' },
      ],
      formationLogic: '核心义：默认。',
      mnemonic: '看到 default，先说出「默认」。',
      note: '核心义：默认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one default.', chinese: '这一章反复回到同一个点：默认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'default.s1', en: 'Without that default, the next paragraph is hard to follow.', zh: '没有这个默认，下一段会很难读。', structure: 'default / 表示 / 默认', grammar: 'noun，围绕「默认」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the default.', right: 'He gave me some advice about the default.', reason: 'advice 不可数。名词 default 的单复数按词典词形记。', rule: '先确定 default 是noun，再套「默认」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'default.q1', senseId: 'default.s1', errorType: 'meaning', type: '词义选择', prompt: '「default」在本条的核心意思是：', options: ['默认', '完全相反的意思', '一种古代钱币'], answer: '默认', explain: 'default：默认。' },
      { id: 'default.q2', senseId: 'default.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches default?', options: ['默认', 'a kind of ancient coin', 'the past tense of be'], answer: '默认', explain: '对的是「默认」。' },
      { id: 'default.q3', senseId: 'default.s1', errorType: 'grammar', type: '词义选择', prompt: 'default 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'default.q4', senseId: 'default.s1', errorType: 'meaning', type: '词源', prompt: '记 default 时，哪句更稳妥？', options: ['先锁住「默认」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「默认」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['默认'] },
  });

  D('defeat', {
    etymology: {
      origin: '拉丁语 disfacere「拆掉」。把对方拆掉。',
      prefix: null,
      root: { text: 'defeat', gloss: '击败' },
      suffix: null,
      history: [
        { label: 'defeat', text: '拉丁语 disfacere「拆掉」。把对方拆掉。' },
        { label: '现在', text: '核心用法是：击败。' },
      ],
      formationLogic: '考试认现在的用法：击败。',
      mnemonic: '看到 defeat，先说出「击败」。',
      note: '考试认现在的用法：击败。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one defeat.', chinese: '这一章反复回到同一个点：击败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defeat.s1', en: 'Without that defeat, the next paragraph is hard to follow.', zh: '没有这个击败，下一段会很难读。', structure: 'defeat / 表示 / 击败', grammar: 'noun，围绕「击败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the defeat.', right: 'He gave me some advice about the defeat.', reason: 'advice 不可数。名词 defeat 的单复数按词典词形记。', rule: '先确定 defeat 是noun，再套「击败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defeat.q1', senseId: 'defeat.s1', errorType: 'meaning', type: '词义选择', prompt: '「defeat」在本条的核心意思是：', options: ['击败', '完全相反的意思', '一种古代钱币'], answer: '击败', explain: 'defeat：击败。' },
      { id: 'defeat.q2', senseId: 'defeat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defeat?', options: ['击败', 'a kind of ancient coin', 'the past tense of be'], answer: '击败', explain: '对的是「击败」。' },
      { id: 'defeat.q3', senseId: 'defeat.s1', errorType: 'grammar', type: '词义选择', prompt: 'defeat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'defeat.q4', senseId: 'defeat.s1', errorType: 'meaning', type: '词源', prompt: '记 defeat 时，哪句更稳妥？', options: ['先锁住「击败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「击败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['击败'] },
  });

  D('defeatism', {
    etymology: {
      origin: '英语派生：defeat + -ism，词性转到「失败主义」。',
      prefix: null,
      root: { text: 'defeat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'defeatism', text: '英语派生：defeat + -ism，词性转到「失败主义」。' },
        { label: '现在', text: '核心用法是：失败主义。' },
      ],
      formationLogic: '先认词干 defeat，再看词尾。',
      mnemonic: '看到 defeatism，先说出「失败主义」。',
      note: '先认词干 defeat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one defeatism.', chinese: '这一章反复回到同一个点：失败主义。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defeatism.s1', en: 'Without that defeatism, the next paragraph is hard to follow.', zh: '没有这个失败主义，下一段会很难读。', structure: 'defeatism / 表示 / 失败主义', grammar: 'noun，围绕「失败主义」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the defeatism.', right: 'He gave me some advice about the defeatism.', reason: 'advice 不可数。名词 defeatism 的单复数按词典词形记。', rule: '先确定 defeatism 是noun，再套「失败主义」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defeatism.q1', senseId: 'defeatism.s1', errorType: 'meaning', type: '词义选择', prompt: '「defeatism」在本条的核心意思是：', options: ['失败主义', '完全相反的意思', '一种古代钱币'], answer: '失败主义', explain: 'defeatism：失败主义。' },
      { id: 'defeatism.q2', senseId: 'defeatism.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defeatism?', options: ['失败主义', 'a kind of ancient coin', 'the past tense of be'], answer: '失败主义', explain: '对的是「失败主义」。' },
      { id: 'defeatism.q3', senseId: 'defeatism.s1', errorType: 'grammar', type: '词义选择', prompt: 'defeatism 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'defeatism.q4', senseId: 'defeatism.s1', errorType: 'meaning', type: '词源', prompt: '记 defeatism 时，哪句更稳妥？', options: ['先锁住「失败主义」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「失败主义」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['失败主义'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
