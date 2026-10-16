/* data/words/cet/author_depth_g1.js
 * 手敲深度补丁：embitter–everything（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('embitter', {
    etymology: {
      origin: '英语派生：embitt + -er，词性转到「使痛苦」。',
      prefix: null,
      root: { text: 'embitt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'embitter', text: '英语派生：embitt + -er，词性转到「使痛苦」。' },
        { label: '现在', text: '核心用法是：使痛苦。' },
      ],
      formationLogic: '先认词干 embitt，再看词尾。',
      mnemonic: '看到 embitter，先说出「使痛苦」。',
      note: '先认词干 embitt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to embitter before the office closed.', chinese: '他们同意在办公室关门前做这件事：使痛苦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embitter.s1', en: 'The deadline forced the team to embitter that afternoon.', zh: '截止日期逼着小组在那天下午使痛苦。', structure: 'embitter / 表示 / 使痛苦', grammar: 'verb，围绕「使痛苦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She embittered it yesterday without checking the real past form.', right: 'Check the past form of "embitter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 embitter 是verb，再套「使痛苦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embitter.q1', senseId: 'embitter.s1', errorType: 'meaning', type: '词义选择', prompt: '「embitter」在本条的核心意思是：', options: ['使痛苦', '完全相反的意思', '一种古代钱币'], answer: '使痛苦', explain: 'embitter：使痛苦。' },
      { id: 'embitter.q2', senseId: 'embitter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embitter?', options: ['使痛苦', 'a kind of ancient coin', 'the past tense of be'], answer: '使痛苦', explain: '对的是「使痛苦」。' },
      { id: 'embitter.q3', senseId: 'embitter.s1', errorType: 'grammar', type: '词义选择', prompt: 'embitter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'embitter.q4', senseId: 'embitter.s1', errorType: 'meaning', type: '词源', prompt: '记 embitter 时，哪句更稳妥？', options: ['先锁住「使痛苦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使痛苦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使痛苦'] },
  });

  D('emblem', {
    etymology: {
      origin: '现代英语常用词「emblem」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emblem', gloss: '徽章' },
      suffix: null,
      history: [
        { label: 'emblem', text: '现代英语常用词「emblem」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：徽章。' },
      ],
      formationLogic: '核心义：徽章。',
      mnemonic: '看到 emblem，先说出「徽章」。',
      note: '核心义：徽章。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emblem.', chinese: '这一章反复回到同一个点：徽章。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emblem.s1', en: 'Without that emblem, the next paragraph is hard to follow.', zh: '没有这个徽章，下一段会很难读。', structure: 'emblem / 表示 / 徽章', grammar: 'noun，围绕「徽章」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emblem.', right: 'He gave me some advice about the emblem.', reason: 'advice 不可数。名词 emblem 的单复数按词典词形记。', rule: '先确定 emblem 是noun，再套「徽章」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emblem.q1', senseId: 'emblem.s1', errorType: 'meaning', type: '词义选择', prompt: '「emblem」在本条的核心意思是：', options: ['徽章', '完全相反的意思', '一种古代钱币'], answer: '徽章', explain: 'emblem：徽章。' },
      { id: 'emblem.q2', senseId: 'emblem.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emblem?', options: ['徽章', 'a kind of ancient coin', 'the past tense of be'], answer: '徽章', explain: '对的是「徽章」。' },
      { id: 'emblem.q3', senseId: 'emblem.s1', errorType: 'grammar', type: '词义选择', prompt: 'emblem 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emblem.q4', senseId: 'emblem.s1', errorType: 'meaning', type: '词源', prompt: '记 emblem 时，哪句更稳妥？', options: ['先锁住「徽章」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「徽章」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['徽章'] },
  });

  D('embody', {
    etymology: {
      origin: '现代英语常用词「embody」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embody', gloss: '体现' },
      suffix: null,
      history: [
        { label: 'embody', text: '现代英语常用词「embody」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：体现。' },
      ],
      formationLogic: '核心义：体现。',
      mnemonic: '看到 embody，先说出「体现」。',
      note: '核心义：体现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to embody before the office closed.', chinese: '他们同意在办公室关门前做这件事：体现。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embody.s1', en: 'The deadline forced the team to embody that afternoon.', zh: '截止日期逼着小组在那天下午体现。', structure: 'embody / 表示 / 体现', grammar: 'verb，围绕「体现」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She embodyed it yesterday without checking the real past form.', right: 'Check the past form of "embody" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 embody 是verb，再套「体现」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embody.q1', senseId: 'embody.s1', errorType: 'meaning', type: '词义选择', prompt: '「embody」在本条的核心意思是：', options: ['体现', '完全相反的意思', '一种古代钱币'], answer: '体现', explain: 'embody：体现。' },
      { id: 'embody.q2', senseId: 'embody.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embody?', options: ['体现', 'a kind of ancient coin', 'the past tense of be'], answer: '体现', explain: '对的是「体现」。' },
      { id: 'embody.q3', senseId: 'embody.s1', errorType: 'grammar', type: '词义选择', prompt: 'embody 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'embody.q4', senseId: 'embody.s1', errorType: 'meaning', type: '词源', prompt: '记 embody 时，哪句更稳妥？', options: ['先锁住「体现」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「体现」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['体现'] },
  });

  D('embrace', {
    etymology: {
      origin: '现代英语常用词「embrace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embrace', gloss: '拥抱' },
      suffix: null,
      history: [
        { label: 'embrace', text: '现代英语常用词「embrace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拥抱。' },
      ],
      formationLogic: '核心义：拥抱。',
      mnemonic: '看到 embrace，先说出「拥抱」。',
      note: '核心义：拥抱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to embrace before the office closed.', chinese: '他们同意在办公室关门前做这件事：拥抱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embrace.s1', en: 'The deadline forced the team to embrace that afternoon.', zh: '截止日期逼着小组在那天下午拥抱。', structure: 'embrace / 表示 / 拥抱', grammar: 'verb，围绕「拥抱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She embraceed it yesterday without checking the real past form.', right: 'Check the past form of "embrace" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 embrace 是verb，再套「拥抱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embrace.q1', senseId: 'embrace.s1', errorType: 'meaning', type: '词义选择', prompt: '「embrace」在本条的核心意思是：', options: ['拥抱', '完全相反的意思', '一种古代钱币'], answer: '拥抱', explain: 'embrace：拥抱。' },
      { id: 'embrace.q2', senseId: 'embrace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embrace?', options: ['拥抱', 'a kind of ancient coin', 'the past tense of be'], answer: '拥抱', explain: '对的是「拥抱」。' },
      { id: 'embrace.q3', senseId: 'embrace.s1', errorType: 'grammar', type: '词义选择', prompt: 'embrace 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'embrace.q4', senseId: 'embrace.s1', errorType: 'meaning', type: '词源', prompt: '记 embrace 时，哪句更稳妥？', options: ['先锁住「拥抱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拥抱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拥抱'] },
  });

  D('embroidery', {
    etymology: {
      origin: '现代英语常用词「embroidery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embroidery', gloss: '刺绣' },
      suffix: null,
      history: [
        { label: 'embroidery', text: '现代英语常用词「embroidery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：刺绣。' },
      ],
      formationLogic: '核心义：刺绣。',
      mnemonic: '看到 embroidery，先说出「刺绣」。',
      note: '核心义：刺绣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one embroidery.', chinese: '这一章反复回到同一个点：刺绣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embroidery.s1', en: 'Without that embroidery, the next paragraph is hard to follow.', zh: '没有这个刺绣，下一段会很难读。', structure: 'embroidery / 表示 / 刺绣', grammar: 'noun，围绕「刺绣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the embroidery.', right: 'He gave me some advice about the embroidery.', reason: 'advice 不可数。名词 embroidery 的单复数按词典词形记。', rule: '先确定 embroidery 是noun，再套「刺绣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embroidery.q1', senseId: 'embroidery.s1', errorType: 'meaning', type: '词义选择', prompt: '「embroidery」在本条的核心意思是：', options: ['刺绣', '完全相反的意思', '一种古代钱币'], answer: '刺绣', explain: 'embroidery：刺绣。' },
      { id: 'embroidery.q2', senseId: 'embroidery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embroidery?', options: ['刺绣', 'a kind of ancient coin', 'the past tense of be'], answer: '刺绣', explain: '对的是「刺绣」。' },
      { id: 'embroidery.q3', senseId: 'embroidery.s1', errorType: 'grammar', type: '词义选择', prompt: 'embroidery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'embroidery.q4', senseId: 'embroidery.s1', errorType: 'meaning', type: '词源', prompt: '记 embroidery 时，哪句更稳妥？', options: ['先锁住「刺绣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「刺绣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['刺绣'] },
  });

  D('emerald', {
    etymology: {
      origin: '现代英语常用词「emerald」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emerald', gloss: '绿宝石' },
      suffix: null,
      history: [
        { label: 'emerald', text: '现代英语常用词「emerald」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：绿宝石。' },
      ],
      formationLogic: '核心义：绿宝石。',
      mnemonic: '看到 emerald，先说出「绿宝石」。',
      note: '核心义：绿宝石。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emerald.', chinese: '这一章反复回到同一个点：绿宝石。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emerald.s1', en: 'Without that emerald, the next paragraph is hard to follow.', zh: '没有这个绿宝石，下一段会很难读。', structure: 'emerald / 表示 / 绿宝石', grammar: 'noun，围绕「绿宝石」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emerald.', right: 'He gave me some advice about the emerald.', reason: 'advice 不可数。名词 emerald 的单复数按词典词形记。', rule: '先确定 emerald 是noun，再套「绿宝石」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emerald.q1', senseId: 'emerald.s1', errorType: 'meaning', type: '词义选择', prompt: '「emerald」在本条的核心意思是：', options: ['绿宝石', '完全相反的意思', '一种古代钱币'], answer: '绿宝石', explain: 'emerald：绿宝石。' },
      { id: 'emerald.q2', senseId: 'emerald.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emerald?', options: ['绿宝石', 'a kind of ancient coin', 'the past tense of be'], answer: '绿宝石', explain: '对的是「绿宝石」。' },
      { id: 'emerald.q3', senseId: 'emerald.s1', errorType: 'grammar', type: '词义选择', prompt: 'emerald 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emerald.q4', senseId: 'emerald.s1', errorType: 'meaning', type: '词源', prompt: '记 emerald 时，哪句更稳妥？', options: ['先锁住「绿宝石」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「绿宝石」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绿宝石'] },
  });

  D('emerge', {
    etymology: {
      origin: '现代英语常用词「emerge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emerge', gloss: '出现' },
      suffix: null,
      history: [
        { label: 'emerge', text: '现代英语常用词「emerge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：出现。' },
      ],
      formationLogic: '核心义：出现。',
      mnemonic: '看到 emerge，先说出「出现」。',
      note: '核心义：出现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to emerge before the office closed.', chinese: '他们同意在办公室关门前做这件事：出现。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emerge.s1', en: 'The deadline forced the team to emerge that afternoon.', zh: '截止日期逼着小组在那天下午出现。', structure: 'emerge / 表示 / 出现', grammar: 'verb，围绕「出现」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She emergeed it yesterday without checking the real past form.', right: 'Check the past form of "emerge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 emerge 是verb，再套「出现」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emerge.q1', senseId: 'emerge.s1', errorType: 'meaning', type: '词义选择', prompt: '「emerge」在本条的核心意思是：', options: ['出现', '完全相反的意思', '一种古代钱币'], answer: '出现', explain: 'emerge：出现。' },
      { id: 'emerge.q2', senseId: 'emerge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emerge?', options: ['出现', 'a kind of ancient coin', 'the past tense of be'], answer: '出现', explain: '对的是「出现」。' },
      { id: 'emerge.q3', senseId: 'emerge.s1', errorType: 'grammar', type: '词义选择', prompt: 'emerge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'emerge.q4', senseId: 'emerge.s1', errorType: 'meaning', type: '词源', prompt: '记 emerge 时，哪句更稳妥？', options: ['先锁住「出现」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「出现」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['出现'] },
  });

  D('emergency', {
    etymology: {
      origin: '现代英语常用词「emergency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emergency', gloss: '紧急情况' },
      suffix: null,
      history: [
        { label: 'emergency', text: '现代英语常用词「emergency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：紧急情况。' },
      ],
      formationLogic: '核心义：紧急情况。',
      mnemonic: '看到 emergency，先说出「紧急情况」。',
      note: '核心义：紧急情况。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emergency.', chinese: '这一章反复回到同一个点：紧急情况。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emergency.s1', en: 'Without that emergency, the next paragraph is hard to follow.', zh: '没有这个紧急情况，下一段会很难读。', structure: 'emergency / 表示 / 紧急情况', grammar: 'noun，围绕「紧急情况」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emergency.', right: 'He gave me some advice about the emergency.', reason: 'advice 不可数。名词 emergency 的单复数按词典词形记。', rule: '先确定 emergency 是noun，再套「紧急情况」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emergency.q1', senseId: 'emergency.s1', errorType: 'meaning', type: '词义选择', prompt: '「emergency」在本条的核心意思是：', options: ['紧急情况', '完全相反的意思', '一种古代钱币'], answer: '紧急情况', explain: 'emergency：紧急情况。' },
      { id: 'emergency.q2', senseId: 'emergency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emergency?', options: ['紧急情况', 'a kind of ancient coin', 'the past tense of be'], answer: '紧急情况', explain: '对的是「紧急情况」。' },
      { id: 'emergency.q3', senseId: 'emergency.s1', errorType: 'grammar', type: '词义选择', prompt: 'emergency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emergency.q4', senseId: 'emergency.s1', errorType: 'meaning', type: '词源', prompt: '记 emergency 时，哪句更稳妥？', options: ['先锁住「紧急情况」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「紧急情况」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['紧急情况'] },
  });

  D('emigration', {
    etymology: {
      origin: '英语派生：emigra + -tion，词性转到「移民出境」。',
      prefix: null,
      root: { text: 'emigra', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'emigration', text: '英语派生：emigra + -tion，词性转到「移民出境」。' },
        { label: '现在', text: '核心用法是：移民出境。' },
      ],
      formationLogic: '先认词干 emigra，再看词尾。',
      mnemonic: '看到 emigration，先说出「移民出境」。',
      note: '先认词干 emigra，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emigration.', chinese: '这一章反复回到同一个点：移民出境。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emigration.s1', en: 'Without that emigration, the next paragraph is hard to follow.', zh: '没有这个移民出境，下一段会很难读。', structure: 'emigration / 表示 / 移民出境', grammar: 'noun，围绕「移民出境」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emigration.', right: 'He gave me some advice about the emigration.', reason: 'advice 不可数。名词 emigration 的单复数按词典词形记。', rule: '先确定 emigration 是noun，再套「移民出境」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emigration.q1', senseId: 'emigration.s1', errorType: 'meaning', type: '词义选择', prompt: '「emigration」在本条的核心意思是：', options: ['移民出境', '完全相反的意思', '一种古代钱币'], answer: '移民出境', explain: 'emigration：移民出境。' },
      { id: 'emigration.q2', senseId: 'emigration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emigration?', options: ['移民出境', 'a kind of ancient coin', 'the past tense of be'], answer: '移民出境', explain: '对的是「移民出境」。' },
      { id: 'emigration.q3', senseId: 'emigration.s1', errorType: 'grammar', type: '词义选择', prompt: 'emigration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emigration.q4', senseId: 'emigration.s1', errorType: 'meaning', type: '词源', prompt: '记 emigration 时，哪句更稳妥？', options: ['先锁住「移民出境」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「移民出境」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['移民出境'] },
  });

  D('eminent', {
    etymology: {
      origin: '现代英语常用词「eminent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eminent', gloss: '著名的' },
      suffix: null,
      history: [
        { label: 'eminent', text: '现代英语常用词「eminent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：著名的。' },
      ],
      formationLogic: '核心义：著名的。',
      mnemonic: '看到 eminent，先说出「著名的」。',
      note: '核心义：著名的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eminent.', chinese: '即使是初读者也能看出，这个结果是著名的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eminent.s1', en: 'They wanted a eminent answer, not a long speech.', zh: '他们要一个著名的的答复，不要长篇发言。', structure: 'eminent / 表示 / 著名的', grammar: 'adjective，围绕「著名的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eminent.', right: 'The news is eminent.', reason: 'news 作主语时动词用单数。', rule: '先确定 eminent 是adjective，再套「著名的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eminent.q1', senseId: 'eminent.s1', errorType: 'meaning', type: '词义选择', prompt: '「eminent」在本条的核心意思是：', options: ['著名的', '完全相反的意思', '一种古代钱币'], answer: '著名的', explain: 'eminent：著名的。' },
      { id: 'eminent.q2', senseId: 'eminent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eminent?', options: ['著名的', 'a kind of ancient coin', 'the past tense of be'], answer: '著名的', explain: '对的是「著名的」。' },
      { id: 'eminent.q3', senseId: 'eminent.s1', errorType: 'grammar', type: '词义选择', prompt: 'eminent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eminent.q4', senseId: 'eminent.s1', errorType: 'meaning', type: '词源', prompt: '记 eminent 时，哪句更稳妥？', options: ['先锁住「著名的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「著名的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['著名的'] },
  });

  D('emissary', {
    etymology: {
      origin: '现代英语常用词「emissary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emissary', gloss: '密使' },
      suffix: null,
      history: [
        { label: 'emissary', text: '现代英语常用词「emissary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：密使。' },
      ],
      formationLogic: '核心义：密使。',
      mnemonic: '看到 emissary，先说出「密使」。',
      note: '核心义：密使。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emissary.', chinese: '这一章反复回到同一个点：密使。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emissary.s1', en: 'Without that emissary, the next paragraph is hard to follow.', zh: '没有这个密使，下一段会很难读。', structure: 'emissary / 表示 / 密使', grammar: 'noun，围绕「密使」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emissary.', right: 'He gave me some advice about the emissary.', reason: 'advice 不可数。名词 emissary 的单复数按词典词形记。', rule: '先确定 emissary 是noun，再套「密使」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emissary.q1', senseId: 'emissary.s1', errorType: 'meaning', type: '词义选择', prompt: '「emissary」在本条的核心意思是：', options: ['密使', '完全相反的意思', '一种古代钱币'], answer: '密使', explain: 'emissary：密使。' },
      { id: 'emissary.q2', senseId: 'emissary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emissary?', options: ['密使', 'a kind of ancient coin', 'the past tense of be'], answer: '密使', explain: '对的是「密使」。' },
      { id: 'emissary.q3', senseId: 'emissary.s1', errorType: 'grammar', type: '词义选择', prompt: 'emissary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emissary.q4', senseId: 'emissary.s1', errorType: 'meaning', type: '词源', prompt: '记 emissary 时，哪句更稳妥？', options: ['先锁住「密使」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「密使」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['密使'] },
  });

  D('emission', {
    etymology: {
      origin: '英语派生：emis + -sion，词性转到「排放」。',
      prefix: null,
      root: { text: 'emis', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'emission', text: '英语派生：emis + -sion，词性转到「排放」。' },
        { label: '现在', text: '核心用法是：排放。' },
      ],
      formationLogic: '先认词干 emis，再看词尾。',
      mnemonic: '看到 emission，先说出「排放」。',
      note: '先认词干 emis，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emission.', chinese: '这一章反复回到同一个点：排放。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emission.s1', en: 'Without that emission, the next paragraph is hard to follow.', zh: '没有这个排放，下一段会很难读。', structure: 'emission / 表示 / 排放', grammar: 'noun，围绕「排放」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emission.', right: 'He gave me some advice about the emission.', reason: 'advice 不可数。名词 emission 的单复数按词典词形记。', rule: '先确定 emission 是noun，再套「排放」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emission.q1', senseId: 'emission.s1', errorType: 'meaning', type: '词义选择', prompt: '「emission」在本条的核心意思是：', options: ['排放', '完全相反的意思', '一种古代钱币'], answer: '排放', explain: 'emission：排放。' },
      { id: 'emission.q2', senseId: 'emission.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emission?', options: ['排放', 'a kind of ancient coin', 'the past tense of be'], answer: '排放', explain: '对的是「排放」。' },
      { id: 'emission.q3', senseId: 'emission.s1', errorType: 'grammar', type: '词义选择', prompt: 'emission 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emission.q4', senseId: 'emission.s1', errorType: 'meaning', type: '词源', prompt: '记 emission 时，哪句更稳妥？', options: ['先锁住「排放」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「排放」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['排放'] },
  });

  D('emit', {
    etymology: {
      origin: '现代英语常用词「emit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emit', gloss: '发出' },
      suffix: null,
      history: [
        { label: 'emit', text: '现代英语常用词「emit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：发出。' },
      ],
      formationLogic: '核心义：发出。',
      mnemonic: '看到 emit，先说出「发出」。',
      note: '核心义：发出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to emit before the office closed.', chinese: '他们同意在办公室关门前做这件事：发出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emit.s1', en: 'The deadline forced the team to emit that afternoon.', zh: '截止日期逼着小组在那天下午发出。', structure: 'emit / 表示 / 发出', grammar: 'verb，围绕「发出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She emited it yesterday without checking the real past form.', right: 'Check the past form of "emit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 emit 是verb，再套「发出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emit.q1', senseId: 'emit.s1', errorType: 'meaning', type: '词义选择', prompt: '「emit」在本条的核心意思是：', options: ['发出', '完全相反的意思', '一种古代钱币'], answer: '发出', explain: 'emit：发出。' },
      { id: 'emit.q2', senseId: 'emit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emit?', options: ['发出', 'a kind of ancient coin', 'the past tense of be'], answer: '发出', explain: '对的是「发出」。' },
      { id: 'emit.q3', senseId: 'emit.s1', errorType: 'grammar', type: '词义选择', prompt: 'emit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'emit.q4', senseId: 'emit.s1', errorType: 'meaning', type: '词源', prompt: '记 emit 时，哪句更稳妥？', options: ['先锁住「发出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发出'] },
  });

  D('emotion', {
    etymology: {
      origin: '英语派生：emo + -tion，词性转到「情感」。',
      prefix: null,
      root: { text: 'emo', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'emotion', text: '英语派生：emo + -tion，词性转到「情感」。' },
        { label: '现在', text: '核心用法是：情感。' },
      ],
      formationLogic: '先认词干 emo，再看词尾。',
      mnemonic: '看到 emotion，先说出「情感」。',
      note: '先认词干 emo，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emotion.', chinese: '这一章反复回到同一个点：情感。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emotion.s1', en: 'Without that emotion, the next paragraph is hard to follow.', zh: '没有这个情感，下一段会很难读。', structure: 'emotion / 表示 / 情感', grammar: 'noun，围绕「情感」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emotion.', right: 'He gave me some advice about the emotion.', reason: 'advice 不可数。名词 emotion 的单复数按词典词形记。', rule: '先确定 emotion 是noun，再套「情感」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emotion.q1', senseId: 'emotion.s1', errorType: 'meaning', type: '词义选择', prompt: '「emotion」在本条的核心意思是：', options: ['情感', '完全相反的意思', '一种古代钱币'], answer: '情感', explain: 'emotion：情感。' },
      { id: 'emotion.q2', senseId: 'emotion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emotion?', options: ['情感', 'a kind of ancient coin', 'the past tense of be'], answer: '情感', explain: '对的是「情感」。' },
      { id: 'emotion.q3', senseId: 'emotion.s1', errorType: 'grammar', type: '词义选择', prompt: 'emotion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emotion.q4', senseId: 'emotion.s1', errorType: 'meaning', type: '词源', prompt: '记 emotion 时，哪句更稳妥？', options: ['先锁住「情感」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「情感」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['情感'] },
  });

  D('empathize', {
    etymology: {
      origin: '现代英语常用词「empathize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'empathize', gloss: '产生共鸣' },
      suffix: null,
      history: [
        { label: 'empathize', text: '现代英语常用词「empathize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：产生共鸣。' },
      ],
      formationLogic: '核心义：产生共鸣。',
      mnemonic: '看到 empathize，先说出「产生共鸣」。',
      note: '核心义：产生共鸣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to empathize before the office closed.', chinese: '他们同意在办公室关门前做这件事：产生共鸣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'empathize.s1', en: 'The deadline forced the team to empathize that afternoon.', zh: '截止日期逼着小组在那天下午产生共鸣。', structure: 'empathize / 表示 / 产生共鸣', grammar: 'verb，围绕「产生共鸣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She empathizeed it yesterday without checking the real past form.', right: 'Check the past form of "empathize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 empathize 是verb，再套「产生共鸣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'empathize.q1', senseId: 'empathize.s1', errorType: 'meaning', type: '词义选择', prompt: '「empathize」在本条的核心意思是：', options: ['产生共鸣', '完全相反的意思', '一种古代钱币'], answer: '产生共鸣', explain: 'empathize：产生共鸣。' },
      { id: 'empathize.q2', senseId: 'empathize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches empathize?', options: ['产生共鸣', 'a kind of ancient coin', 'the past tense of be'], answer: '产生共鸣', explain: '对的是「产生共鸣」。' },
      { id: 'empathize.q3', senseId: 'empathize.s1', errorType: 'grammar', type: '词义选择', prompt: 'empathize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'empathize.q4', senseId: 'empathize.s1', errorType: 'meaning', type: '词源', prompt: '记 empathize 时，哪句更稳妥？', options: ['先锁住「产生共鸣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「产生共鸣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['产生共鸣'] },
  });

  D('emperor', {
    etymology: {
      origin: '英语派生：emper + -or，词性转到「皇帝」。',
      prefix: null,
      root: { text: 'emper', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'emperor', text: '英语派生：emper + -or，词性转到「皇帝」。' },
        { label: '现在', text: '核心用法是：皇帝。' },
      ],
      formationLogic: '先认词干 emper，再看词尾。',
      mnemonic: '看到 emperor，先说出「皇帝」。',
      note: '先认词干 emper，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emperor.', chinese: '这一章反复回到同一个点：皇帝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emperor.s1', en: 'Without that emperor, the next paragraph is hard to follow.', zh: '没有这个皇帝，下一段会很难读。', structure: 'emperor / 表示 / 皇帝', grammar: 'noun，围绕「皇帝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emperor.', right: 'He gave me some advice about the emperor.', reason: 'advice 不可数。名词 emperor 的单复数按词典词形记。', rule: '先确定 emperor 是noun，再套「皇帝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emperor.q1', senseId: 'emperor.s1', errorType: 'meaning', type: '词义选择', prompt: '「emperor」在本条的核心意思是：', options: ['皇帝', '完全相反的意思', '一种古代钱币'], answer: '皇帝', explain: 'emperor：皇帝。' },
      { id: 'emperor.q2', senseId: 'emperor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emperor?', options: ['皇帝', 'a kind of ancient coin', 'the past tense of be'], answer: '皇帝', explain: '对的是「皇帝」。' },
      { id: 'emperor.q3', senseId: 'emperor.s1', errorType: 'grammar', type: '词义选择', prompt: 'emperor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emperor.q4', senseId: 'emperor.s1', errorType: 'meaning', type: '词源', prompt: '记 emperor 时，哪句更稳妥？', options: ['先锁住「皇帝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「皇帝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['皇帝'] },
  });

  D('emphasis', {
    etymology: {
      origin: '现代英语常用词「emphasis」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emphasis', gloss: '强调' },
      suffix: null,
      history: [
        { label: 'emphasis', text: '现代英语常用词「emphasis」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：强调。' },
      ],
      formationLogic: '核心义：强调。',
      mnemonic: '看到 emphasis，先说出「强调」。',
      note: '核心义：强调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emphasis.', chinese: '这一章反复回到同一个点：强调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emphasis.s1', en: 'Without that emphasis, the next paragraph is hard to follow.', zh: '没有这个强调，下一段会很难读。', structure: 'emphasis / 表示 / 强调', grammar: 'noun，围绕「强调」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emphasis.', right: 'He gave me some advice about the emphasis.', reason: 'advice 不可数。名词 emphasis 的单复数按词典词形记。', rule: '先确定 emphasis 是noun，再套「强调」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emphasis.q1', senseId: 'emphasis.s1', errorType: 'meaning', type: '词义选择', prompt: '「emphasis」在本条的核心意思是：', options: ['强调', '完全相反的意思', '一种古代钱币'], answer: '强调', explain: 'emphasis：强调。' },
      { id: 'emphasis.q2', senseId: 'emphasis.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emphasis?', options: ['强调', 'a kind of ancient coin', 'the past tense of be'], answer: '强调', explain: '对的是「强调」。' },
      { id: 'emphasis.q3', senseId: 'emphasis.s1', errorType: 'grammar', type: '词义选择', prompt: 'emphasis 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emphasis.q4', senseId: 'emphasis.s1', errorType: 'meaning', type: '词源', prompt: '记 emphasis 时，哪句更稳妥？', options: ['先锁住「强调」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「强调」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['强调'] },
  });

  D('emphasize', {
    etymology: {
      origin: '现代英语常用词「emphasize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emphasize', gloss: '强调' },
      suffix: null,
      history: [
        { label: 'emphasize', text: '现代英语常用词「emphasize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：强调。' },
      ],
      formationLogic: '核心义：强调。',
      mnemonic: '看到 emphasize，先说出「强调」。',
      note: '核心义：强调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to emphasize before the office closed.', chinese: '他们同意在办公室关门前做这件事：强调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emphasize.s1', en: 'The deadline forced the team to emphasize that afternoon.', zh: '截止日期逼着小组在那天下午强调。', structure: 'emphasize / 表示 / 强调', grammar: 'verb，围绕「强调」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She emphasizeed it yesterday without checking the real past form.', right: 'Check the past form of "emphasize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 emphasize 是verb，再套「强调」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emphasize.q1', senseId: 'emphasize.s1', errorType: 'meaning', type: '词义选择', prompt: '「emphasize」在本条的核心意思是：', options: ['强调', '完全相反的意思', '一种古代钱币'], answer: '强调', explain: 'emphasize：强调。' },
      { id: 'emphasize.q2', senseId: 'emphasize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emphasize?', options: ['强调', 'a kind of ancient coin', 'the past tense of be'], answer: '强调', explain: '对的是「强调」。' },
      { id: 'emphasize.q3', senseId: 'emphasize.s1', errorType: 'grammar', type: '词义选择', prompt: 'emphasize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'emphasize.q4', senseId: 'emphasize.s1', errorType: 'meaning', type: '词源', prompt: '记 emphasize 时，哪句更稳妥？', options: ['先锁住「强调」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「强调」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['强调'] },
  });

  D('empire', {
    etymology: {
      origin: '现代英语常用词「empire」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'empire', gloss: '帝国' },
      suffix: null,
      history: [
        { label: 'empire', text: '现代英语常用词「empire」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：帝国。' },
      ],
      formationLogic: '核心义：帝国。',
      mnemonic: '看到 empire，先说出「帝国」。',
      note: '核心义：帝国。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one empire.', chinese: '这一章反复回到同一个点：帝国。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'empire.s1', en: 'Without that empire, the next paragraph is hard to follow.', zh: '没有这个帝国，下一段会很难读。', structure: 'empire / 表示 / 帝国', grammar: 'noun，围绕「帝国」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the empire.', right: 'He gave me some advice about the empire.', reason: 'advice 不可数。名词 empire 的单复数按词典词形记。', rule: '先确定 empire 是noun，再套「帝国」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'empire.q1', senseId: 'empire.s1', errorType: 'meaning', type: '词义选择', prompt: '「empire」在本条的核心意思是：', options: ['帝国', '完全相反的意思', '一种古代钱币'], answer: '帝国', explain: 'empire：帝国。' },
      { id: 'empire.q2', senseId: 'empire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches empire?', options: ['帝国', 'a kind of ancient coin', 'the past tense of be'], answer: '帝国', explain: '对的是「帝国」。' },
      { id: 'empire.q3', senseId: 'empire.s1', errorType: 'grammar', type: '词义选择', prompt: 'empire 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'empire.q4', senseId: 'empire.s1', errorType: 'meaning', type: '词源', prompt: '记 empire 时，哪句更稳妥？', options: ['先锁住「帝国」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「帝国」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['帝国'] },
  });

  D('empirical', {
    etymology: {
      origin: '英语派生：empiric + -al，词性转到「经验的」。',
      prefix: null,
      root: { text: 'empiric', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'empirical', text: '英语派生：empiric + -al，词性转到「经验的」。' },
        { label: '现在', text: '核心用法是：经验的。' },
      ],
      formationLogic: '先认词干 empiric，再看词尾。',
      mnemonic: '看到 empirical，先说出「经验的」。',
      note: '先认词干 empiric，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was empirical.', chinese: '即使是初读者也能看出，这个结果是经验的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'empirical.s1', en: 'They wanted a empirical answer, not a long speech.', zh: '他们要一个经验的的答复，不要长篇发言。', structure: 'empirical / 表示 / 经验的', grammar: 'adjective，围绕「经验的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are empirical.', right: 'The news is empirical.', reason: 'news 作主语时动词用单数。', rule: '先确定 empirical 是adjective，再套「经验的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'empirical.q1', senseId: 'empirical.s1', errorType: 'meaning', type: '词义选择', prompt: '「empirical」在本条的核心意思是：', options: ['经验的', '完全相反的意思', '一种古代钱币'], answer: '经验的', explain: 'empirical：经验的。' },
      { id: 'empirical.q2', senseId: 'empirical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches empirical?', options: ['经验的', 'a kind of ancient coin', 'the past tense of be'], answer: '经验的', explain: '对的是「经验的」。' },
      { id: 'empirical.q3', senseId: 'empirical.s1', errorType: 'grammar', type: '词义选择', prompt: 'empirical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'empirical.q4', senseId: 'empirical.s1', errorType: 'meaning', type: '词源', prompt: '记 empirical 时，哪句更稳妥？', options: ['先锁住「经验的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经验的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经验的'] },
  });

  D('employ', {
    etymology: {
      origin: '现代英语常用词「employ」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'employ', gloss: '雇用' },
      suffix: null,
      history: [
        { label: 'employ', text: '现代英语常用词「employ」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：雇用。' },
      ],
      formationLogic: '核心义：雇用。',
      mnemonic: '看到 employ，先说出「雇用」。',
      note: '核心义：雇用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to employ before the office closed.', chinese: '他们同意在办公室关门前做这件事：雇用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'employ.s1', en: 'The deadline forced the team to employ that afternoon.', zh: '截止日期逼着小组在那天下午雇用。', structure: 'employ / 表示 / 雇用', grammar: 'verb，围绕「雇用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She employed it yesterday without checking the real past form.', right: 'Check the past form of "employ" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 employ 是verb，再套「雇用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'employ.q1', senseId: 'employ.s1', errorType: 'meaning', type: '词义选择', prompt: '「employ」在本条的核心意思是：', options: ['雇用', '完全相反的意思', '一种古代钱币'], answer: '雇用', explain: 'employ：雇用。' },
      { id: 'employ.q2', senseId: 'employ.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches employ?', options: ['雇用', 'a kind of ancient coin', 'the past tense of be'], answer: '雇用', explain: '对的是「雇用」。' },
      { id: 'employ.q3', senseId: 'employ.s1', errorType: 'grammar', type: '词义选择', prompt: 'employ 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'employ.q4', senseId: 'employ.s1', errorType: 'meaning', type: '词源', prompt: '记 employ 时，哪句更稳妥？', options: ['先锁住「雇用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雇用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雇用'] },
  });

  D('employees', {
    etymology: {
      origin: '现代英语常用词「employees」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'employees', gloss: '雇员（复数）' },
      suffix: null,
      history: [
        { label: 'employees', text: '现代英语常用词「employees」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：雇员（复数）。' },
      ],
      formationLogic: '核心义：雇员（复数）。',
      mnemonic: '看到 employees，先说出「雇员（复数）」。',
      note: '核心义：雇员（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one employees.', chinese: '这一章反复回到同一个点：雇员（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'employees.s1', en: 'Without that employees, the next paragraph is hard to follow.', zh: '没有这个雇员（复数），下一段会很难读。', structure: 'employees / 表示 / 雇员（复数）', grammar: 'noun，围绕「雇员（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the employees.', right: 'He gave me some advice about the employees.', reason: 'advice 不可数。名词 employees 的单复数按词典词形记。', rule: '先确定 employees 是noun，再套「雇员（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'employees.q1', senseId: 'employees.s1', errorType: 'meaning', type: '词义选择', prompt: '「employees」在本条的核心意思是：', options: ['雇员（复数）', '完全相反的意思', '一种古代钱币'], answer: '雇员（复数）', explain: 'employees：雇员（复数）。' },
      { id: 'employees.q2', senseId: 'employees.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches employees?', options: ['雇员（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '雇员（复数）', explain: '对的是「雇员（复数）」。' },
      { id: 'employees.q3', senseId: 'employees.s1', errorType: 'grammar', type: '词义选择', prompt: 'employees 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'employees.q4', senseId: 'employees.s1', errorType: 'meaning', type: '词源', prompt: '记 employees 时，哪句更稳妥？', options: ['先锁住「雇员（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雇员（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雇员（复数）'] },
  });

  D('employer', {
    etymology: {
      origin: '英语派生：employ + -er，词性转到「雇主」。',
      prefix: null,
      root: { text: 'employ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'employer', text: '英语派生：employ + -er，词性转到「雇主」。' },
        { label: '现在', text: '核心用法是：雇主。' },
      ],
      formationLogic: '先认词干 employ，再看词尾。',
      mnemonic: '看到 employer，先说出「雇主」。',
      note: '先认词干 employ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one employer.', chinese: '这一章反复回到同一个点：雇主。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'employer.s1', en: 'Without that employer, the next paragraph is hard to follow.', zh: '没有这个雇主，下一段会很难读。', structure: 'employer / 表示 / 雇主', grammar: 'noun，围绕「雇主」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the employer.', right: 'He gave me some advice about the employer.', reason: 'advice 不可数。名词 employer 的单复数按词典词形记。', rule: '先确定 employer 是noun，再套「雇主」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'employer.q1', senseId: 'employer.s1', errorType: 'meaning', type: '词义选择', prompt: '「employer」在本条的核心意思是：', options: ['雇主', '完全相反的意思', '一种古代钱币'], answer: '雇主', explain: 'employer：雇主。' },
      { id: 'employer.q2', senseId: 'employer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches employer?', options: ['雇主', 'a kind of ancient coin', 'the past tense of be'], answer: '雇主', explain: '对的是「雇主」。' },
      { id: 'employer.q3', senseId: 'employer.s1', errorType: 'grammar', type: '词义选择', prompt: 'employer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'employer.q4', senseId: 'employer.s1', errorType: 'meaning', type: '词源', prompt: '记 employer 时，哪句更稳妥？', options: ['先锁住「雇主」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雇主」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雇主'] },
  });

  D('employment', {
    etymology: {
      origin: '英语派生：employ + -ment，词性转到「就业」。',
      prefix: null,
      root: { text: 'employ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'employment', text: '英语派生：employ + -ment，词性转到「就业」。' },
        { label: '现在', text: '核心用法是：就业。' },
      ],
      formationLogic: '先认词干 employ，再看词尾。',
      mnemonic: '看到 employment，先说出「就业」。',
      note: '先认词干 employ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one employment.', chinese: '这一章反复回到同一个点：就业。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'employment.s1', en: 'Without that employment, the next paragraph is hard to follow.', zh: '没有这个就业，下一段会很难读。', structure: 'employment / 表示 / 就业', grammar: 'noun，围绕「就业」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the employment.', right: 'He gave me some advice about the employment.', reason: 'advice 不可数。名词 employment 的单复数按词典词形记。', rule: '先确定 employment 是noun，再套「就业」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'employment.q1', senseId: 'employment.s1', errorType: 'meaning', type: '词义选择', prompt: '「employment」在本条的核心意思是：', options: ['就业', '完全相反的意思', '一种古代钱币'], answer: '就业', explain: 'employment：就业。' },
      { id: 'employment.q2', senseId: 'employment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches employment?', options: ['就业', 'a kind of ancient coin', 'the past tense of be'], answer: '就业', explain: '对的是「就业」。' },
      { id: 'employment.q3', senseId: 'employment.s1', errorType: 'grammar', type: '词义选择', prompt: 'employment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'employment.q4', senseId: 'employment.s1', errorType: 'meaning', type: '词源', prompt: '记 employment 时，哪句更稳妥？', options: ['先锁住「就业」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「就业」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['就业'] },
  });

  D('emptiness', {
    etymology: {
      origin: '英语派生：empti + -ness，词性转到「空虚」。',
      prefix: null,
      root: { text: 'empti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'emptiness', text: '英语派生：empti + -ness，词性转到「空虚」。' },
        { label: '现在', text: '核心用法是：空虚。' },
      ],
      formationLogic: '先认词干 empti，再看词尾。',
      mnemonic: '看到 emptiness，先说出「空虚」。',
      note: '先认词干 empti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one emptiness.', chinese: '这一章反复回到同一个点：空虚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emptiness.s1', en: 'Without that emptiness, the next paragraph is hard to follow.', zh: '没有这个空虚，下一段会很难读。', structure: 'emptiness / 表示 / 空虚', grammar: 'noun，围绕「空虚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the emptiness.', right: 'He gave me some advice about the emptiness.', reason: 'advice 不可数。名词 emptiness 的单复数按词典词形记。', rule: '先确定 emptiness 是noun，再套「空虚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emptiness.q1', senseId: 'emptiness.s1', errorType: 'meaning', type: '词义选择', prompt: '「emptiness」在本条的核心意思是：', options: ['空虚', '完全相反的意思', '一种古代钱币'], answer: '空虚', explain: 'emptiness：空虚。' },
      { id: 'emptiness.q2', senseId: 'emptiness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emptiness?', options: ['空虚', 'a kind of ancient coin', 'the past tense of be'], answer: '空虚', explain: '对的是「空虚」。' },
      { id: 'emptiness.q3', senseId: 'emptiness.s1', errorType: 'grammar', type: '词义选择', prompt: 'emptiness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'emptiness.q4', senseId: 'emptiness.s1', errorType: 'meaning', type: '词源', prompt: '记 emptiness 时，哪句更稳妥？', options: ['先锁住「空虚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「空虚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空虚'] },
  });

  D('empty', {
    etymology: {
      origin: '现代英语常用词「empty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'empty', gloss: '空的' },
      suffix: null,
      history: [
        { label: 'empty', text: '现代英语常用词「empty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：空的。' },
      ],
      formationLogic: '核心义：空的。',
      mnemonic: '看到 empty，先说出「空的」。',
      note: '核心义：空的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was empty.', chinese: '即使是初读者也能看出，这个结果是空的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'empty.s1', en: 'They wanted a empty answer, not a long speech.', zh: '他们要一个空的的答复，不要长篇发言。', structure: 'empty / 表示 / 空的', grammar: 'adjective，围绕「空的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are empty.', right: 'The news is empty.', reason: 'news 作主语时动词用单数。', rule: '先确定 empty 是adjective，再套「空的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'empty.q1', senseId: 'empty.s1', errorType: 'meaning', type: '词义选择', prompt: '「empty」在本条的核心意思是：', options: ['空的', '完全相反的意思', '一种古代钱币'], answer: '空的', explain: 'empty：空的。' },
      { id: 'empty.q2', senseId: 'empty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches empty?', options: ['空的', 'a kind of ancient coin', 'the past tense of be'], answer: '空的', explain: '对的是「空的」。' },
      { id: 'empty.q3', senseId: 'empty.s1', errorType: 'grammar', type: '词义选择', prompt: 'empty 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'empty.q4', senseId: 'empty.s1', errorType: 'meaning', type: '词源', prompt: '记 empty 时，哪句更稳妥？', options: ['先锁住「空的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「空的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空的'] },
  });

  D('emulate', {
    etymology: {
      origin: '现代英语常用词「emulate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emulate', gloss: '效仿' },
      suffix: null,
      history: [
        { label: 'emulate', text: '现代英语常用词「emulate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：效仿。' },
      ],
      formationLogic: '核心义：效仿。',
      mnemonic: '看到 emulate，先说出「效仿」。',
      note: '核心义：效仿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to emulate before the office closed.', chinese: '他们同意在办公室关门前做这件事：效仿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emulate.s1', en: 'The deadline forced the team to emulate that afternoon.', zh: '截止日期逼着小组在那天下午效仿。', structure: 'emulate / 表示 / 效仿', grammar: 'verb，围绕「效仿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She emulateed it yesterday without checking the real past form.', right: 'Check the past form of "emulate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 emulate 是verb，再套「效仿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emulate.q1', senseId: 'emulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「emulate」在本条的核心意思是：', options: ['效仿', '完全相反的意思', '一种古代钱币'], answer: '效仿', explain: 'emulate：效仿。' },
      { id: 'emulate.q2', senseId: 'emulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emulate?', options: ['效仿', 'a kind of ancient coin', 'the past tense of be'], answer: '效仿', explain: '对的是「效仿」。' },
      { id: 'emulate.q3', senseId: 'emulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'emulate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'emulate.q4', senseId: 'emulate.s1', errorType: 'meaning', type: '词源', prompt: '记 emulate 时，哪句更稳妥？', options: ['先锁住「效仿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「效仿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['效仿'] },
  });

  D('enable', {
    etymology: {
      origin: '现代英语常用词「enable」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enable', gloss: '使能够' },
      suffix: null,
      history: [
        { label: 'enable', text: '现代英语常用词「enable」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使能够。' },
      ],
      formationLogic: '核心义：使能够。',
      mnemonic: '看到 enable，先说出「使能够」。',
      note: '核心义：使能够。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enable before the office closed.', chinese: '他们同意在办公室关门前做这件事：使能够。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enable.s1', en: 'The deadline forced the team to enable that afternoon.', zh: '截止日期逼着小组在那天下午使能够。', structure: 'enable / 表示 / 使能够', grammar: 'verb，围绕「使能够」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enableed it yesterday without checking the real past form.', right: 'Check the past form of "enable" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enable 是verb，再套「使能够」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enable.q1', senseId: 'enable.s1', errorType: 'meaning', type: '词义选择', prompt: '「enable」在本条的核心意思是：', options: ['使能够', '完全相反的意思', '一种古代钱币'], answer: '使能够', explain: 'enable：使能够。' },
      { id: 'enable.q2', senseId: 'enable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enable?', options: ['使能够', 'a kind of ancient coin', 'the past tense of be'], answer: '使能够', explain: '对的是「使能够」。' },
      { id: 'enable.q3', senseId: 'enable.s1', errorType: 'grammar', type: '词义选择', prompt: 'enable 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enable.q4', senseId: 'enable.s1', errorType: 'meaning', type: '词源', prompt: '记 enable 时，哪句更稳妥？', options: ['先锁住「使能够」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使能够」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使能够'] },
  });

  D('enact', {
    etymology: {
      origin: '现代英语常用词「enact」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enact', gloss: '制定（法律）' },
      suffix: null,
      history: [
        { label: 'enact', text: '现代英语常用词「enact」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：制定（法律）。' },
      ],
      formationLogic: '核心义：制定（法律）。',
      mnemonic: '看到 enact，先说出「制定（法律）」。',
      note: '核心义：制定（法律）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enact before the office closed.', chinese: '他们同意在办公室关门前做这件事：制定（法律）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enact.s1', en: 'The deadline forced the team to enact that afternoon.', zh: '截止日期逼着小组在那天下午制定（法律）。', structure: 'enact / 表示 / 制定（法律）', grammar: 'verb，围绕「制定（法律）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enacted it yesterday without checking the real past form.', right: 'Check the past form of "enact" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enact 是verb，再套「制定（法律）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enact.q1', senseId: 'enact.s1', errorType: 'meaning', type: '词义选择', prompt: '「enact」在本条的核心意思是：', options: ['制定（法律）', '完全相反的意思', '一种古代钱币'], answer: '制定（法律）', explain: 'enact：制定（法律）。' },
      { id: 'enact.q2', senseId: 'enact.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enact?', options: ['制定（法律）', 'a kind of ancient coin', 'the past tense of be'], answer: '制定（法律）', explain: '对的是「制定（法律）」。' },
      { id: 'enact.q3', senseId: 'enact.s1', errorType: 'grammar', type: '词义选择', prompt: 'enact 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enact.q4', senseId: 'enact.s1', errorType: 'meaning', type: '词源', prompt: '记 enact 时，哪句更稳妥？', options: ['先锁住「制定（法律）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「制定（法律）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['制定（法律）'] },
  });

  D('enactment', {
    etymology: {
      origin: '英语派生：enact + -ment，词性转到「颁布」。',
      prefix: null,
      root: { text: 'enact', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enactment', text: '英语派生：enact + -ment，词性转到「颁布」。' },
        { label: '现在', text: '核心用法是：颁布。' },
      ],
      formationLogic: '先认词干 enact，再看词尾。',
      mnemonic: '看到 enactment，先说出「颁布」。',
      note: '先认词干 enact，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enactment.', chinese: '这一章反复回到同一个点：颁布。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enactment.s1', en: 'Without that enactment, the next paragraph is hard to follow.', zh: '没有这个颁布，下一段会很难读。', structure: 'enactment / 表示 / 颁布', grammar: 'noun，围绕「颁布」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enactment.', right: 'He gave me some advice about the enactment.', reason: 'advice 不可数。名词 enactment 的单复数按词典词形记。', rule: '先确定 enactment 是noun，再套「颁布」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enactment.q1', senseId: 'enactment.s1', errorType: 'meaning', type: '词义选择', prompt: '「enactment」在本条的核心意思是：', options: ['颁布', '完全相反的意思', '一种古代钱币'], answer: '颁布', explain: 'enactment：颁布。' },
      { id: 'enactment.q2', senseId: 'enactment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enactment?', options: ['颁布', 'a kind of ancient coin', 'the past tense of be'], answer: '颁布', explain: '对的是「颁布」。' },
      { id: 'enactment.q3', senseId: 'enactment.s1', errorType: 'grammar', type: '词义选择', prompt: 'enactment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enactment.q4', senseId: 'enactment.s1', errorType: 'meaning', type: '词源', prompt: '记 enactment 时，哪句更稳妥？', options: ['先锁住「颁布」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「颁布」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['颁布'] },
  });

  D('enchantress', {
    etymology: {
      origin: '现代英语常用词「enchantress」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enchantress', gloss: '女巫' },
      suffix: null,
      history: [
        { label: 'enchantress', text: '现代英语常用词「enchantress」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：女巫。' },
      ],
      formationLogic: '核心义：女巫。',
      mnemonic: '看到 enchantress，先说出「女巫」。',
      note: '核心义：女巫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enchantress.', chinese: '这一章反复回到同一个点：女巫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enchantress.s1', en: 'Without that enchantress, the next paragraph is hard to follow.', zh: '没有这个女巫，下一段会很难读。', structure: 'enchantress / 表示 / 女巫', grammar: 'noun，围绕「女巫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enchantress.', right: 'He gave me some advice about the enchantress.', reason: 'advice 不可数。名词 enchantress 的单复数按词典词形记。', rule: '先确定 enchantress 是noun，再套「女巫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enchantress.q1', senseId: 'enchantress.s1', errorType: 'meaning', type: '词义选择', prompt: '「enchantress」在本条的核心意思是：', options: ['女巫', '完全相反的意思', '一种古代钱币'], answer: '女巫', explain: 'enchantress：女巫。' },
      { id: 'enchantress.q2', senseId: 'enchantress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enchantress?', options: ['女巫', 'a kind of ancient coin', 'the past tense of be'], answer: '女巫', explain: '对的是「女巫」。' },
      { id: 'enchantress.q3', senseId: 'enchantress.s1', errorType: 'grammar', type: '词义选择', prompt: 'enchantress 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enchantress.q4', senseId: 'enchantress.s1', errorType: 'meaning', type: '词源', prompt: '记 enchantress 时，哪句更稳妥？', options: ['先锁住「女巫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「女巫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['女巫'] },
  });

  D('encircle', {
    etymology: {
      origin: '现代英语常用词「encircle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'encircle', gloss: '包围' },
      suffix: null,
      history: [
        { label: 'encircle', text: '现代英语常用词「encircle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：包围。' },
      ],
      formationLogic: '核心义：包围。',
      mnemonic: '看到 encircle，先说出「包围」。',
      note: '核心义：包围。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to encircle before the office closed.', chinese: '他们同意在办公室关门前做这件事：包围。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encircle.s1', en: 'The deadline forced the team to encircle that afternoon.', zh: '截止日期逼着小组在那天下午包围。', structure: 'encircle / 表示 / 包围', grammar: 'verb，围绕「包围」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She encircleed it yesterday without checking the real past form.', right: 'Check the past form of "encircle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 encircle 是verb，再套「包围」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encircle.q1', senseId: 'encircle.s1', errorType: 'meaning', type: '词义选择', prompt: '「encircle」在本条的核心意思是：', options: ['包围', '完全相反的意思', '一种古代钱币'], answer: '包围', explain: 'encircle：包围。' },
      { id: 'encircle.q2', senseId: 'encircle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encircle?', options: ['包围', 'a kind of ancient coin', 'the past tense of be'], answer: '包围', explain: '对的是「包围」。' },
      { id: 'encircle.q3', senseId: 'encircle.s1', errorType: 'grammar', type: '词义选择', prompt: 'encircle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'encircle.q4', senseId: 'encircle.s1', errorType: 'meaning', type: '词源', prompt: '记 encircle 时，哪句更稳妥？', options: ['先锁住「包围」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「包围」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['包围'] },
  });

  D('encirclement', {
    etymology: {
      origin: '英语派生：encircle + -ment，词性转到「包围」。',
      prefix: null,
      root: { text: 'encircle', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'encirclement', text: '英语派生：encircle + -ment，词性转到「包围」。' },
        { label: '现在', text: '核心用法是：包围。' },
      ],
      formationLogic: '先认词干 encircle，再看词尾。',
      mnemonic: '看到 encirclement，先说出「包围」。',
      note: '先认词干 encircle，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one encirclement.', chinese: '这一章反复回到同一个点：包围。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encirclement.s1', en: 'Without that encirclement, the next paragraph is hard to follow.', zh: '没有这个包围，下一段会很难读。', structure: 'encirclement / 表示 / 包围', grammar: 'noun，围绕「包围」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the encirclement.', right: 'He gave me some advice about the encirclement.', reason: 'advice 不可数。名词 encirclement 的单复数按词典词形记。', rule: '先确定 encirclement 是noun，再套「包围」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encirclement.q1', senseId: 'encirclement.s1', errorType: 'meaning', type: '词义选择', prompt: '「encirclement」在本条的核心意思是：', options: ['包围', '完全相反的意思', '一种古代钱币'], answer: '包围', explain: 'encirclement：包围。' },
      { id: 'encirclement.q2', senseId: 'encirclement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encirclement?', options: ['包围', 'a kind of ancient coin', 'the past tense of be'], answer: '包围', explain: '对的是「包围」。' },
      { id: 'encirclement.q3', senseId: 'encirclement.s1', errorType: 'grammar', type: '词义选择', prompt: 'encirclement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'encirclement.q4', senseId: 'encirclement.s1', errorType: 'meaning', type: '词源', prompt: '记 encirclement 时，哪句更稳妥？', options: ['先锁住「包围」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「包围」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['包围'] },
  });

  D('enclose', {
    etymology: {
      origin: '现代英语常用词「enclose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enclose', gloss: '围住' },
      suffix: null,
      history: [
        { label: 'enclose', text: '现代英语常用词「enclose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：围住。' },
      ],
      formationLogic: '核心义：围住。',
      mnemonic: '看到 enclose，先说出「围住」。',
      note: '核心义：围住。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enclose before the office closed.', chinese: '他们同意在办公室关门前做这件事：围住。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enclose.s1', en: 'The deadline forced the team to enclose that afternoon.', zh: '截止日期逼着小组在那天下午围住。', structure: 'enclose / 表示 / 围住', grammar: 'verb，围绕「围住」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She encloseed it yesterday without checking the real past form.', right: 'Check the past form of "enclose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enclose 是verb，再套「围住」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enclose.q1', senseId: 'enclose.s1', errorType: 'meaning', type: '词义选择', prompt: '「enclose」在本条的核心意思是：', options: ['围住', '完全相反的意思', '一种古代钱币'], answer: '围住', explain: 'enclose：围住。' },
      { id: 'enclose.q2', senseId: 'enclose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enclose?', options: ['围住', 'a kind of ancient coin', 'the past tense of be'], answer: '围住', explain: '对的是「围住」。' },
      { id: 'enclose.q3', senseId: 'enclose.s1', errorType: 'grammar', type: '词义选择', prompt: 'enclose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enclose.q4', senseId: 'enclose.s1', errorType: 'meaning', type: '词源', prompt: '记 enclose 时，哪句更稳妥？', options: ['先锁住「围住」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「围住」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['围住'] },
  });

  D('enclosure', {
    etymology: {
      origin: '现代英语常用词「enclosure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enclosure', gloss: '围地' },
      suffix: null,
      history: [
        { label: 'enclosure', text: '现代英语常用词「enclosure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：围地。' },
      ],
      formationLogic: '核心义：围地。',
      mnemonic: '看到 enclosure，先说出「围地」。',
      note: '核心义：围地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enclosure.', chinese: '这一章反复回到同一个点：围地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enclosure.s1', en: 'Without that enclosure, the next paragraph is hard to follow.', zh: '没有这个围地，下一段会很难读。', structure: 'enclosure / 表示 / 围地', grammar: 'noun，围绕「围地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enclosure.', right: 'He gave me some advice about the enclosure.', reason: 'advice 不可数。名词 enclosure 的单复数按词典词形记。', rule: '先确定 enclosure 是noun，再套「围地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enclosure.q1', senseId: 'enclosure.s1', errorType: 'meaning', type: '词义选择', prompt: '「enclosure」在本条的核心意思是：', options: ['围地', '完全相反的意思', '一种古代钱币'], answer: '围地', explain: 'enclosure：围地。' },
      { id: 'enclosure.q2', senseId: 'enclosure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enclosure?', options: ['围地', 'a kind of ancient coin', 'the past tense of be'], answer: '围地', explain: '对的是「围地」。' },
      { id: 'enclosure.q3', senseId: 'enclosure.s1', errorType: 'grammar', type: '词义选择', prompt: 'enclosure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enclosure.q4', senseId: 'enclosure.s1', errorType: 'meaning', type: '词源', prompt: '记 enclosure 时，哪句更稳妥？', options: ['先锁住「围地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「围地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['围地'] },
  });

  D('encode', {
    etymology: {
      origin: '现代英语常用词「encode」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'encode', gloss: '编码' },
      suffix: null,
      history: [
        { label: 'encode', text: '现代英语常用词「encode」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：编码。' },
      ],
      formationLogic: '核心义：编码。',
      mnemonic: '看到 encode，先说出「编码」。',
      note: '核心义：编码。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to encode before the office closed.', chinese: '他们同意在办公室关门前做这件事：编码。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encode.s1', en: 'The deadline forced the team to encode that afternoon.', zh: '截止日期逼着小组在那天下午编码。', structure: 'encode / 表示 / 编码', grammar: 'verb，围绕「编码」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She encodeed it yesterday without checking the real past form.', right: 'Check the past form of "encode" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 encode 是verb，再套「编码」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encode.q1', senseId: 'encode.s1', errorType: 'meaning', type: '词义选择', prompt: '「encode」在本条的核心意思是：', options: ['编码', '完全相反的意思', '一种古代钱币'], answer: '编码', explain: 'encode：编码。' },
      { id: 'encode.q2', senseId: 'encode.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encode?', options: ['编码', 'a kind of ancient coin', 'the past tense of be'], answer: '编码', explain: '对的是「编码」。' },
      { id: 'encode.q3', senseId: 'encode.s1', errorType: 'grammar', type: '词义选择', prompt: 'encode 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'encode.q4', senseId: 'encode.s1', errorType: 'meaning', type: '词源', prompt: '记 encode 时，哪句更稳妥？', options: ['先锁住「编码」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「编码」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['编码'] },
  });

  D('encounter', {
    etymology: {
      origin: '英语派生：encount + -er，词性转到「遇到」。',
      prefix: null,
      root: { text: 'encount', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'encounter', text: '英语派生：encount + -er，词性转到「遇到」。' },
        { label: '现在', text: '核心用法是：遇到。' },
      ],
      formationLogic: '先认词干 encount，再看词尾。',
      mnemonic: '看到 encounter，先说出「遇到」。',
      note: '先认词干 encount，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to encounter before the office closed.', chinese: '他们同意在办公室关门前做这件事：遇到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encounter.s1', en: 'The deadline forced the team to encounter that afternoon.', zh: '截止日期逼着小组在那天下午遇到。', structure: 'encounter / 表示 / 遇到', grammar: 'verb，围绕「遇到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She encountered it yesterday without checking the real past form.', right: 'Check the past form of "encounter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 encounter 是verb，再套「遇到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encounter.q1', senseId: 'encounter.s1', errorType: 'meaning', type: '词义选择', prompt: '「encounter」在本条的核心意思是：', options: ['遇到', '完全相反的意思', '一种古代钱币'], answer: '遇到', explain: 'encounter：遇到。' },
      { id: 'encounter.q2', senseId: 'encounter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encounter?', options: ['遇到', 'a kind of ancient coin', 'the past tense of be'], answer: '遇到', explain: '对的是「遇到」。' },
      { id: 'encounter.q3', senseId: 'encounter.s1', errorType: 'grammar', type: '词义选择', prompt: 'encounter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'encounter.q4', senseId: 'encounter.s1', errorType: 'meaning', type: '词源', prompt: '记 encounter 时，哪句更稳妥？', options: ['先锁住「遇到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「遇到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['遇到'] },
  });

  D('encourage', {
    etymology: {
      origin: '现代英语常用词「encourage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'encourage', gloss: '鼓励' },
      suffix: null,
      history: [
        { label: 'encourage', text: '现代英语常用词「encourage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鼓励。' },
      ],
      formationLogic: '核心义：鼓励。',
      mnemonic: '看到 encourage，先说出「鼓励」。',
      note: '核心义：鼓励。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to encourage before the office closed.', chinese: '他们同意在办公室关门前做这件事：鼓励。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encourage.s1', en: 'The deadline forced the team to encourage that afternoon.', zh: '截止日期逼着小组在那天下午鼓励。', structure: 'encourage / 表示 / 鼓励', grammar: 'verb，围绕「鼓励」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She encourageed it yesterday without checking the real past form.', right: 'Check the past form of "encourage" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 encourage 是verb，再套「鼓励」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encourage.q1', senseId: 'encourage.s1', errorType: 'meaning', type: '词义选择', prompt: '「encourage」在本条的核心意思是：', options: ['鼓励', '完全相反的意思', '一种古代钱币'], answer: '鼓励', explain: 'encourage：鼓励。' },
      { id: 'encourage.q2', senseId: 'encourage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encourage?', options: ['鼓励', 'a kind of ancient coin', 'the past tense of be'], answer: '鼓励', explain: '对的是「鼓励」。' },
      { id: 'encourage.q3', senseId: 'encourage.s1', errorType: 'grammar', type: '词义选择', prompt: 'encourage 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'encourage.q4', senseId: 'encourage.s1', errorType: 'meaning', type: '词源', prompt: '记 encourage 时，哪句更稳妥？', options: ['先锁住「鼓励」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鼓励」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鼓励'] },
  });

  D('encroach', {
    etymology: {
      origin: '现代英语常用词「encroach」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'encroach', gloss: '侵犯' },
      suffix: null,
      history: [
        { label: 'encroach', text: '现代英语常用词「encroach」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：侵犯。' },
      ],
      formationLogic: '核心义：侵犯。',
      mnemonic: '看到 encroach，先说出「侵犯」。',
      note: '核心义：侵犯。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to encroach before the office closed.', chinese: '他们同意在办公室关门前做这件事：侵犯。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encroach.s1', en: 'The deadline forced the team to encroach that afternoon.', zh: '截止日期逼着小组在那天下午侵犯。', structure: 'encroach / 表示 / 侵犯', grammar: 'verb，围绕「侵犯」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She encroached it yesterday without checking the real past form.', right: 'Check the past form of "encroach" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 encroach 是verb，再套「侵犯」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encroach.q1', senseId: 'encroach.s1', errorType: 'meaning', type: '词义选择', prompt: '「encroach」在本条的核心意思是：', options: ['侵犯', '完全相反的意思', '一种古代钱币'], answer: '侵犯', explain: 'encroach：侵犯。' },
      { id: 'encroach.q2', senseId: 'encroach.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encroach?', options: ['侵犯', 'a kind of ancient coin', 'the past tense of be'], answer: '侵犯', explain: '对的是「侵犯」。' },
      { id: 'encroach.q3', senseId: 'encroach.s1', errorType: 'grammar', type: '词义选择', prompt: 'encroach 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'encroach.q4', senseId: 'encroach.s1', errorType: 'meaning', type: '词源', prompt: '记 encroach 时，哪句更稳妥？', options: ['先锁住「侵犯」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「侵犯」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侵犯'] },
  });

  D('encyclopedia', {
    etymology: {
      origin: '现代英语常用词「encyclopedia」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'encyclopedia', gloss: '百科全书' },
      suffix: null,
      history: [
        { label: 'encyclopedia', text: '现代英语常用词「encyclopedia」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：百科全书。' },
      ],
      formationLogic: '核心义：百科全书。',
      mnemonic: '看到 encyclopedia，先说出「百科全书」。',
      note: '核心义：百科全书。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one encyclopedia.', chinese: '这一章反复回到同一个点：百科全书。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'encyclopedia.s1', en: 'Without that encyclopedia, the next paragraph is hard to follow.', zh: '没有这个百科全书，下一段会很难读。', structure: 'encyclopedia / 表示 / 百科全书', grammar: 'noun，围绕「百科全书」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the encyclopedia.', right: 'He gave me some advice about the encyclopedia.', reason: 'advice 不可数。名词 encyclopedia 的单复数按词典词形记。', rule: '先确定 encyclopedia 是noun，再套「百科全书」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'encyclopedia.q1', senseId: 'encyclopedia.s1', errorType: 'meaning', type: '词义选择', prompt: '「encyclopedia」在本条的核心意思是：', options: ['百科全书', '完全相反的意思', '一种古代钱币'], answer: '百科全书', explain: 'encyclopedia：百科全书。' },
      { id: 'encyclopedia.q2', senseId: 'encyclopedia.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches encyclopedia?', options: ['百科全书', 'a kind of ancient coin', 'the past tense of be'], answer: '百科全书', explain: '对的是「百科全书」。' },
      { id: 'encyclopedia.q3', senseId: 'encyclopedia.s1', errorType: 'grammar', type: '词义选择', prompt: 'encyclopedia 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'encyclopedia.q4', senseId: 'encyclopedia.s1', errorType: 'meaning', type: '词源', prompt: '记 encyclopedia 时，哪句更稳妥？', options: ['先锁住「百科全书」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「百科全书」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['百科全书'] },
  });

  D('end', {
    etymology: {
      origin: '现代英语常用词「end」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'end', gloss: '末尾' },
      suffix: null,
      history: [
        { label: 'end', text: '现代英语常用词「end」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：末尾。' },
      ],
      formationLogic: '核心义：末尾。',
      mnemonic: '看到 end，先说出「末尾」。',
      note: '核心义：末尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one end.', chinese: '这一章反复回到同一个点：末尾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'end.s1', en: 'Without that end, the next paragraph is hard to follow.', zh: '没有这个末尾，下一段会很难读。', structure: 'end / 表示 / 末尾', grammar: 'noun，围绕「末尾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the end.', right: 'He gave me some advice about the end.', reason: 'advice 不可数。名词 end 的单复数按词典词形记。', rule: '先确定 end 是noun，再套「末尾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'end.q1', senseId: 'end.s1', errorType: 'meaning', type: '词义选择', prompt: '「end」在本条的核心意思是：', options: ['末尾', '完全相反的意思', '一种古代钱币'], answer: '末尾', explain: 'end：末尾。' },
      { id: 'end.q2', senseId: 'end.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches end?', options: ['末尾', 'a kind of ancient coin', 'the past tense of be'], answer: '末尾', explain: '对的是「末尾」。' },
      { id: 'end.q3', senseId: 'end.s1', errorType: 'grammar', type: '词义选择', prompt: 'end 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'end.q4', senseId: 'end.s1', errorType: 'meaning', type: '词源', prompt: '记 end 时，哪句更稳妥？', options: ['先锁住「末尾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「末尾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['末尾'] },
  });

  D('end up', {
    etymology: {
      origin: '现代英语固定说法「end up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'end up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'end up', text: '现代英语固定说法「end up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：以…告终。' },
      ],
      formationLogic: '核心义：以…告终。',
      mnemonic: '看到 end up，先说出「以…告终」。',
      note: '核心义：以…告终。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "end up" and asked the class to keep it as one unit.', chinese: '老师把「end up」圈出来，让全班把它当成一个整体。它表示以…告终。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'end up.s1', en: 'In the margin she wrote "end up" so nobody would split the phrase.', zh: '她在页边写下「end up」，免得有人把这个说法拆开。意思是以…告终。', structure: 'end up / 表示 / 以…告终', grammar: 'verb，围绕「以…告终」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of end up and lost the point.', right: 'Keep "end up" together: it means 以…告终.', reason: '「end up」要整块理解。', rule: '先确定 end up 是verb，再套「以…告终」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'end up.q1', senseId: 'end up.s1', errorType: 'meaning', type: '词义选择', prompt: '「end up」在本条的核心意思是：', options: ['以…告终', '完全相反的意思', '一种古代钱币'], answer: '以…告终', explain: 'end up：以…告终。' },
      { id: 'end up.q2', senseId: 'end up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches end up?', options: ['以…告终', 'a kind of ancient coin', 'the past tense of be'], answer: '以…告终', explain: '对的是「以…告终」。' },
      { id: 'end up.q3', senseId: 'end up.s1', errorType: 'grammar', type: '词义选择', prompt: 'end up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'end up.q4', senseId: 'end up.s1', errorType: 'meaning', type: '词源', prompt: '记 end up 时，哪句更稳妥？', options: ['先锁住「以…告终」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「以…告终」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['以…告终'] },
  });

  D('endanger', {
    etymology: {
      origin: '英语派生：endang + -er，词性转到「危及」。',
      prefix: null,
      root: { text: 'endang', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'endanger', text: '英语派生：endang + -er，词性转到「危及」。' },
        { label: '现在', text: '核心用法是：危及。' },
      ],
      formationLogic: '先认词干 endang，再看词尾。',
      mnemonic: '看到 endanger，先说出「危及」。',
      note: '先认词干 endang，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to endanger before the office closed.', chinese: '他们同意在办公室关门前做这件事：危及。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endanger.s1', en: 'The deadline forced the team to endanger that afternoon.', zh: '截止日期逼着小组在那天下午危及。', structure: 'endanger / 表示 / 危及', grammar: 'verb，围绕「危及」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She endangered it yesterday without checking the real past form.', right: 'Check the past form of "endanger" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 endanger 是verb，再套「危及」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endanger.q1', senseId: 'endanger.s1', errorType: 'meaning', type: '词义选择', prompt: '「endanger」在本条的核心意思是：', options: ['危及', '完全相反的意思', '一种古代钱币'], answer: '危及', explain: 'endanger：危及。' },
      { id: 'endanger.q2', senseId: 'endanger.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endanger?', options: ['危及', 'a kind of ancient coin', 'the past tense of be'], answer: '危及', explain: '对的是「危及」。' },
      { id: 'endanger.q3', senseId: 'endanger.s1', errorType: 'grammar', type: '词义选择', prompt: 'endanger 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'endanger.q4', senseId: 'endanger.s1', errorType: 'meaning', type: '词源', prompt: '记 endanger 时，哪句更稳妥？', options: ['先锁住「危及」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「危及」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['危及'] },
  });

  D('endeavor', {
    etymology: {
      origin: '英语派生：endeav + -or，词性转到「努力」。',
      prefix: null,
      root: { text: 'endeav', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'endeavor', text: '英语派生：endeav + -or，词性转到「努力」。' },
        { label: '现在', text: '核心用法是：努力。' },
      ],
      formationLogic: '先认词干 endeav，再看词尾。',
      mnemonic: '看到 endeavor，先说出「努力」。',
      note: '先认词干 endeav，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one endeavor.', chinese: '这一章反复回到同一个点：努力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endeavor.s1', en: 'Without that endeavor, the next paragraph is hard to follow.', zh: '没有这个努力，下一段会很难读。', structure: 'endeavor / 表示 / 努力', grammar: 'noun，围绕「努力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the endeavor.', right: 'He gave me some advice about the endeavor.', reason: 'advice 不可数。名词 endeavor 的单复数按词典词形记。', rule: '先确定 endeavor 是noun，再套「努力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endeavor.q1', senseId: 'endeavor.s1', errorType: 'meaning', type: '词义选择', prompt: '「endeavor」在本条的核心意思是：', options: ['努力', '完全相反的意思', '一种古代钱币'], answer: '努力', explain: 'endeavor：努力。' },
      { id: 'endeavor.q2', senseId: 'endeavor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endeavor?', options: ['努力', 'a kind of ancient coin', 'the past tense of be'], answer: '努力', explain: '对的是「努力」。' },
      { id: 'endeavor.q3', senseId: 'endeavor.s1', errorType: 'grammar', type: '词义选择', prompt: 'endeavor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'endeavor.q4', senseId: 'endeavor.s1', errorType: 'meaning', type: '词源', prompt: '记 endeavor 时，哪句更稳妥？', options: ['先锁住「努力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「努力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['努力'] },
  });

  D('ending', {
    etymology: {
      origin: '英语派生：end + -ing，词性转到「结尾」。',
      prefix: null,
      root: { text: 'end', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ending', text: '英语派生：end + -ing，词性转到「结尾」。' },
        { label: '现在', text: '核心用法是：结尾。' },
      ],
      formationLogic: '先认词干 end，再看词尾。',
      mnemonic: '看到 ending，先说出「结尾」。',
      note: '先认词干 end，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ending.', chinese: '这一章反复回到同一个点：结尾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ending.s1', en: 'Without that ending, the next paragraph is hard to follow.', zh: '没有这个结尾，下一段会很难读。', structure: 'ending / 表示 / 结尾', grammar: 'noun，围绕「结尾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ending.', right: 'He gave me some advice about the ending.', reason: 'advice 不可数。名词 ending 的单复数按词典词形记。', rule: '先确定 ending 是noun，再套「结尾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ending.q1', senseId: 'ending.s1', errorType: 'meaning', type: '词义选择', prompt: '「ending」在本条的核心意思是：', options: ['结尾', '完全相反的意思', '一种古代钱币'], answer: '结尾', explain: 'ending：结尾。' },
      { id: 'ending.q2', senseId: 'ending.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ending?', options: ['结尾', 'a kind of ancient coin', 'the past tense of be'], answer: '结尾', explain: '对的是「结尾」。' },
      { id: 'ending.q3', senseId: 'ending.s1', errorType: 'grammar', type: '词义选择', prompt: 'ending 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ending.q4', senseId: 'ending.s1', errorType: 'meaning', type: '词源', prompt: '记 ending 时，哪句更稳妥？', options: ['先锁住「结尾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结尾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结尾'] },
  });

  D('endless', {
    etymology: {
      origin: '英语派生：end + -less，词性转到「无尽的」。',
      prefix: null,
      root: { text: 'end', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'endless', text: '英语派生：end + -less，词性转到「无尽的」。' },
        { label: '现在', text: '核心用法是：无尽的。' },
      ],
      formationLogic: '先认词干 end，再看词尾。',
      mnemonic: '看到 endless，先说出「无尽的」。',
      note: '先认词干 end，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was endless.', chinese: '即使是初读者也能看出，这个结果是无尽的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endless.s1', en: 'They wanted a endless answer, not a long speech.', zh: '他们要一个无尽的的答复，不要长篇发言。', structure: 'endless / 表示 / 无尽的', grammar: 'adjective，围绕「无尽的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are endless.', right: 'The news is endless.', reason: 'news 作主语时动词用单数。', rule: '先确定 endless 是adjective，再套「无尽的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endless.q1', senseId: 'endless.s1', errorType: 'meaning', type: '词义选择', prompt: '「endless」在本条的核心意思是：', options: ['无尽的', '完全相反的意思', '一种古代钱币'], answer: '无尽的', explain: 'endless：无尽的。' },
      { id: 'endless.q2', senseId: 'endless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endless?', options: ['无尽的', 'a kind of ancient coin', 'the past tense of be'], answer: '无尽的', explain: '对的是「无尽的」。' },
      { id: 'endless.q3', senseId: 'endless.s1', errorType: 'grammar', type: '词义选择', prompt: 'endless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'endless.q4', senseId: 'endless.s1', errorType: 'meaning', type: '词源', prompt: '记 endless 时，哪句更稳妥？', options: ['先锁住「无尽的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「无尽的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['无尽的'] },
  });

  D('endorse', {
    etymology: {
      origin: '现代英语常用词「endorse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'endorse', gloss: '认可' },
      suffix: null,
      history: [
        { label: 'endorse', text: '现代英语常用词「endorse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：认可。' },
      ],
      formationLogic: '核心义：认可。',
      mnemonic: '看到 endorse，先说出「认可」。',
      note: '核心义：认可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to endorse before the office closed.', chinese: '他们同意在办公室关门前做这件事：认可。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endorse.s1', en: 'The deadline forced the team to endorse that afternoon.', zh: '截止日期逼着小组在那天下午认可。', structure: 'endorse / 表示 / 认可', grammar: 'verb，围绕「认可」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She endorseed it yesterday without checking the real past form.', right: 'Check the past form of "endorse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 endorse 是verb，再套「认可」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endorse.q1', senseId: 'endorse.s1', errorType: 'meaning', type: '词义选择', prompt: '「endorse」在本条的核心意思是：', options: ['认可', '完全相反的意思', '一种古代钱币'], answer: '认可', explain: 'endorse：认可。' },
      { id: 'endorse.q2', senseId: 'endorse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endorse?', options: ['认可', 'a kind of ancient coin', 'the past tense of be'], answer: '认可', explain: '对的是「认可」。' },
      { id: 'endorse.q3', senseId: 'endorse.s1', errorType: 'grammar', type: '词义选择', prompt: 'endorse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'endorse.q4', senseId: 'endorse.s1', errorType: 'meaning', type: '词源', prompt: '记 endorse 时，哪句更稳妥？', options: ['先锁住「认可」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「认可」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['认可'] },
  });

  D('endow', {
    etymology: {
      origin: '现代英语常用词「endow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'endow', gloss: '捐赠' },
      suffix: null,
      history: [
        { label: 'endow', text: '现代英语常用词「endow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：捐赠。' },
      ],
      formationLogic: '核心义：捐赠。',
      mnemonic: '看到 endow，先说出「捐赠」。',
      note: '核心义：捐赠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to endow before the office closed.', chinese: '他们同意在办公室关门前做这件事：捐赠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endow.s1', en: 'The deadline forced the team to endow that afternoon.', zh: '截止日期逼着小组在那天下午捐赠。', structure: 'endow / 表示 / 捐赠', grammar: 'verb，围绕「捐赠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She endowed it yesterday without checking the real past form.', right: 'Check the past form of "endow" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 endow 是verb，再套「捐赠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endow.q1', senseId: 'endow.s1', errorType: 'meaning', type: '词义选择', prompt: '「endow」在本条的核心意思是：', options: ['捐赠', '完全相反的意思', '一种古代钱币'], answer: '捐赠', explain: 'endow：捐赠。' },
      { id: 'endow.q2', senseId: 'endow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endow?', options: ['捐赠', 'a kind of ancient coin', 'the past tense of be'], answer: '捐赠', explain: '对的是「捐赠」。' },
      { id: 'endow.q3', senseId: 'endow.s1', errorType: 'grammar', type: '词义选择', prompt: 'endow 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'endow.q4', senseId: 'endow.s1', errorType: 'meaning', type: '词源', prompt: '记 endow 时，哪句更稳妥？', options: ['先锁住「捐赠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「捐赠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['捐赠'] },
  });

  D('endurance', {
    etymology: {
      origin: '英语派生：endur + -ance，词性转到「忍耐力」。',
      prefix: null,
      root: { text: 'endur', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'endurance', text: '英语派生：endur + -ance，词性转到「忍耐力」。' },
        { label: '现在', text: '核心用法是：忍耐力。' },
      ],
      formationLogic: '先认词干 endur，再看词尾。',
      mnemonic: '看到 endurance，先说出「忍耐力」。',
      note: '先认词干 endur，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one endurance.', chinese: '这一章反复回到同一个点：忍耐力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endurance.s1', en: 'Without that endurance, the next paragraph is hard to follow.', zh: '没有这个忍耐力，下一段会很难读。', structure: 'endurance / 表示 / 忍耐力', grammar: 'noun，围绕「忍耐力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the endurance.', right: 'He gave me some advice about the endurance.', reason: 'advice 不可数。名词 endurance 的单复数按词典词形记。', rule: '先确定 endurance 是noun，再套「忍耐力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endurance.q1', senseId: 'endurance.s1', errorType: 'meaning', type: '词义选择', prompt: '「endurance」在本条的核心意思是：', options: ['忍耐力', '完全相反的意思', '一种古代钱币'], answer: '忍耐力', explain: 'endurance：忍耐力。' },
      { id: 'endurance.q2', senseId: 'endurance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endurance?', options: ['忍耐力', 'a kind of ancient coin', 'the past tense of be'], answer: '忍耐力', explain: '对的是「忍耐力」。' },
      { id: 'endurance.q3', senseId: 'endurance.s1', errorType: 'grammar', type: '词义选择', prompt: 'endurance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'endurance.q4', senseId: 'endurance.s1', errorType: 'meaning', type: '词源', prompt: '记 endurance 时，哪句更稳妥？', options: ['先锁住「忍耐力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「忍耐力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['忍耐力'] },
  });

  D('endure', {
    etymology: {
      origin: '现代英语常用词「endure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'endure', gloss: '忍受' },
      suffix: null,
      history: [
        { label: 'endure', text: '现代英语常用词「endure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：忍受。' },
      ],
      formationLogic: '核心义：忍受。',
      mnemonic: '看到 endure，先说出「忍受」。',
      note: '核心义：忍受。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to endure before the office closed.', chinese: '他们同意在办公室关门前做这件事：忍受。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'endure.s1', en: 'The deadline forced the team to endure that afternoon.', zh: '截止日期逼着小组在那天下午忍受。', structure: 'endure / 表示 / 忍受', grammar: 'verb，围绕「忍受」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She endureed it yesterday without checking the real past form.', right: 'Check the past form of "endure" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 endure 是verb，再套「忍受」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'endure.q1', senseId: 'endure.s1', errorType: 'meaning', type: '词义选择', prompt: '「endure」在本条的核心意思是：', options: ['忍受', '完全相反的意思', '一种古代钱币'], answer: '忍受', explain: 'endure：忍受。' },
      { id: 'endure.q2', senseId: 'endure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches endure?', options: ['忍受', 'a kind of ancient coin', 'the past tense of be'], answer: '忍受', explain: '对的是「忍受」。' },
      { id: 'endure.q3', senseId: 'endure.s1', errorType: 'grammar', type: '词义选择', prompt: 'endure 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'endure.q4', senseId: 'endure.s1', errorType: 'meaning', type: '词源', prompt: '记 endure 时，哪句更稳妥？', options: ['先锁住「忍受」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「忍受」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['忍受'] },
  });

  D('enduring', {
    etymology: {
      origin: '英语派生：endur + -ing，词性转到「持久的」。',
      prefix: null,
      root: { text: 'endur', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enduring', text: '英语派生：endur + -ing，词性转到「持久的」。' },
        { label: '现在', text: '核心用法是：持久的。' },
      ],
      formationLogic: '先认词干 endur，再看词尾。',
      mnemonic: '看到 enduring，先说出「持久的」。',
      note: '先认词干 endur，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was enduring.', chinese: '即使是初读者也能看出，这个结果是持久的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enduring.s1', en: 'They wanted a enduring answer, not a long speech.', zh: '他们要一个持久的的答复，不要长篇发言。', structure: 'enduring / 表示 / 持久的', grammar: 'adjective，围绕「持久的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are enduring.', right: 'The news is enduring.', reason: 'news 作主语时动词用单数。', rule: '先确定 enduring 是adjective，再套「持久的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enduring.q1', senseId: 'enduring.s1', errorType: 'meaning', type: '词义选择', prompt: '「enduring」在本条的核心意思是：', options: ['持久的', '完全相反的意思', '一种古代钱币'], answer: '持久的', explain: 'enduring：持久的。' },
      { id: 'enduring.q2', senseId: 'enduring.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enduring?', options: ['持久的', 'a kind of ancient coin', 'the past tense of be'], answer: '持久的', explain: '对的是「持久的」。' },
      { id: 'enduring.q3', senseId: 'enduring.s1', errorType: 'grammar', type: '词义选择', prompt: 'enduring 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'enduring.q4', senseId: 'enduring.s1', errorType: 'meaning', type: '词源', prompt: '记 enduring 时，哪句更稳妥？', options: ['先锁住「持久的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「持久的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['持久的'] },
  });

  D('enemy', {
    etymology: {
      origin: '现代英语常用词「enemy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enemy', gloss: '敌人' },
      suffix: null,
      history: [
        { label: 'enemy', text: '现代英语常用词「enemy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：敌人。' },
      ],
      formationLogic: '核心义：敌人。',
      mnemonic: '看到 enemy，先说出「敌人」。',
      note: '核心义：敌人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enemy.', chinese: '这一章反复回到同一个点：敌人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enemy.s1', en: 'Without that enemy, the next paragraph is hard to follow.', zh: '没有这个敌人，下一段会很难读。', structure: 'enemy / 表示 / 敌人', grammar: 'noun，围绕「敌人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enemy.', right: 'He gave me some advice about the enemy.', reason: 'advice 不可数。名词 enemy 的单复数按词典词形记。', rule: '先确定 enemy 是noun，再套「敌人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enemy.q1', senseId: 'enemy.s1', errorType: 'meaning', type: '词义选择', prompt: '「enemy」在本条的核心意思是：', options: ['敌人', '完全相反的意思', '一种古代钱币'], answer: '敌人', explain: 'enemy：敌人。' },
      { id: 'enemy.q2', senseId: 'enemy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enemy?', options: ['敌人', 'a kind of ancient coin', 'the past tense of be'], answer: '敌人', explain: '对的是「敌人」。' },
      { id: 'enemy.q3', senseId: 'enemy.s1', errorType: 'grammar', type: '词义选择', prompt: 'enemy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enemy.q4', senseId: 'enemy.s1', errorType: 'meaning', type: '词源', prompt: '记 enemy 时，哪句更稳妥？', options: ['先锁住「敌人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「敌人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['敌人'] },
  });

  D('energetic', {
    etymology: {
      origin: '英语派生：energet + -ic，词性转到「精力充沛的」。',
      prefix: null,
      root: { text: 'energet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'energetic', text: '英语派生：energet + -ic，词性转到「精力充沛的」。' },
        { label: '现在', text: '核心用法是：精力充沛的。' },
      ],
      formationLogic: '先认词干 energet，再看词尾。',
      mnemonic: '看到 energetic，先说出「精力充沛的」。',
      note: '先认词干 energet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was energetic.', chinese: '即使是初读者也能看出，这个结果是精力充沛的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'energetic.s1', en: 'They wanted a energetic answer, not a long speech.', zh: '他们要一个精力充沛的的答复，不要长篇发言。', structure: 'energetic / 表示 / 精力充沛的', grammar: 'adjective，围绕「精力充沛的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are energetic.', right: 'The news is energetic.', reason: 'news 作主语时动词用单数。', rule: '先确定 energetic 是adjective，再套「精力充沛的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'energetic.q1', senseId: 'energetic.s1', errorType: 'meaning', type: '词义选择', prompt: '「energetic」在本条的核心意思是：', options: ['精力充沛的', '完全相反的意思', '一种古代钱币'], answer: '精力充沛的', explain: 'energetic：精力充沛的。' },
      { id: 'energetic.q2', senseId: 'energetic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches energetic?', options: ['精力充沛的', 'a kind of ancient coin', 'the past tense of be'], answer: '精力充沛的', explain: '对的是「精力充沛的」。' },
      { id: 'energetic.q3', senseId: 'energetic.s1', errorType: 'grammar', type: '词义选择', prompt: 'energetic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'energetic.q4', senseId: 'energetic.s1', errorType: 'meaning', type: '词源', prompt: '记 energetic 时，哪句更稳妥？', options: ['先锁住「精力充沛的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精力充沛的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精力充沛的'] },
  });

  D('energy', {
    etymology: {
      origin: '现代英语常用词「energy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'energy', gloss: '能量' },
      suffix: null,
      history: [
        { label: 'energy', text: '现代英语常用词「energy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：能量。' },
      ],
      formationLogic: '核心义：能量。',
      mnemonic: '看到 energy，先说出「能量」。',
      note: '核心义：能量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one energy.', chinese: '这一章反复回到同一个点：能量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'energy.s1', en: 'Without that energy, the next paragraph is hard to follow.', zh: '没有这个能量，下一段会很难读。', structure: 'energy / 表示 / 能量', grammar: 'noun，围绕「能量」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the energy.', right: 'He gave me some advice about the energy.', reason: 'advice 不可数。名词 energy 的单复数按词典词形记。', rule: '先确定 energy 是noun，再套「能量」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'energy.q1', senseId: 'energy.s1', errorType: 'meaning', type: '词义选择', prompt: '「energy」在本条的核心意思是：', options: ['能量', '完全相反的意思', '一种古代钱币'], answer: '能量', explain: 'energy：能量。' },
      { id: 'energy.q2', senseId: 'energy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches energy?', options: ['能量', 'a kind of ancient coin', 'the past tense of be'], answer: '能量', explain: '对的是「能量」。' },
      { id: 'energy.q3', senseId: 'energy.s1', errorType: 'grammar', type: '词义选择', prompt: 'energy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'energy.q4', senseId: 'energy.s1', errorType: 'meaning', type: '词源', prompt: '记 energy 时，哪句更稳妥？', options: ['先锁住「能量」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「能量」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['能量'] },
  });

  D('enforce', {
    etymology: {
      origin: '现代英语常用词「enforce」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enforce', gloss: '执行' },
      suffix: null,
      history: [
        { label: 'enforce', text: '现代英语常用词「enforce」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：执行。' },
      ],
      formationLogic: '核心义：执行。',
      mnemonic: '看到 enforce，先说出「执行」。',
      note: '核心义：执行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enforce before the office closed.', chinese: '他们同意在办公室关门前做这件事：执行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enforce.s1', en: 'The deadline forced the team to enforce that afternoon.', zh: '截止日期逼着小组在那天下午执行。', structure: 'enforce / 表示 / 执行', grammar: 'verb，围绕「执行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enforceed it yesterday without checking the real past form.', right: 'Check the past form of "enforce" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enforce 是verb，再套「执行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enforce.q1', senseId: 'enforce.s1', errorType: 'meaning', type: '词义选择', prompt: '「enforce」在本条的核心意思是：', options: ['执行', '完全相反的意思', '一种古代钱币'], answer: '执行', explain: 'enforce：执行。' },
      { id: 'enforce.q2', senseId: 'enforce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enforce?', options: ['执行', 'a kind of ancient coin', 'the past tense of be'], answer: '执行', explain: '对的是「执行」。' },
      { id: 'enforce.q3', senseId: 'enforce.s1', errorType: 'grammar', type: '词义选择', prompt: 'enforce 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enforce.q4', senseId: 'enforce.s1', errorType: 'meaning', type: '词源', prompt: '记 enforce 时，哪句更稳妥？', options: ['先锁住「执行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「执行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['执行'] },
  });

  D('engage', {
    etymology: {
      origin: '现代英语常用词「engage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'engage', gloss: '从事' },
      suffix: null,
      history: [
        { label: 'engage', text: '现代英语常用词「engage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：从事。' },
      ],
      formationLogic: '核心义：从事。',
      mnemonic: '看到 engage，先说出「从事」。',
      note: '核心义：从事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to engage before the office closed.', chinese: '他们同意在办公室关门前做这件事：从事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engage.s1', en: 'The deadline forced the team to engage that afternoon.', zh: '截止日期逼着小组在那天下午从事。', structure: 'engage / 表示 / 从事', grammar: 'verb，围绕「从事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She engageed it yesterday without checking the real past form.', right: 'Check the past form of "engage" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 engage 是verb，再套「从事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engage.q1', senseId: 'engage.s1', errorType: 'meaning', type: '词义选择', prompt: '「engage」在本条的核心意思是：', options: ['从事', '完全相反的意思', '一种古代钱币'], answer: '从事', explain: 'engage：从事。' },
      { id: 'engage.q2', senseId: 'engage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engage?', options: ['从事', 'a kind of ancient coin', 'the past tense of be'], answer: '从事', explain: '对的是「从事」。' },
      { id: 'engage.q3', senseId: 'engage.s1', errorType: 'grammar', type: '词义选择', prompt: 'engage 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'engage.q4', senseId: 'engage.s1', errorType: 'meaning', type: '词源', prompt: '记 engage 时，哪句更稳妥？', options: ['先锁住「从事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「从事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['从事'] },
  });

  D('engine', {
    etymology: {
      origin: '现代英语常用词「engine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'engine', gloss: '发动机' },
      suffix: null,
      history: [
        { label: 'engine', text: '现代英语常用词「engine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：发动机。' },
      ],
      formationLogic: '核心义：发动机。',
      mnemonic: '看到 engine，先说出「发动机」。',
      note: '核心义：发动机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one engine.', chinese: '这一章反复回到同一个点：发动机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engine.s1', en: 'Without that engine, the next paragraph is hard to follow.', zh: '没有这个发动机，下一段会很难读。', structure: 'engine / 表示 / 发动机', grammar: 'noun，围绕「发动机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the engine.', right: 'He gave me some advice about the engine.', reason: 'advice 不可数。名词 engine 的单复数按词典词形记。', rule: '先确定 engine 是noun，再套「发动机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engine.q1', senseId: 'engine.s1', errorType: 'meaning', type: '词义选择', prompt: '「engine」在本条的核心意思是：', options: ['发动机', '完全相反的意思', '一种古代钱币'], answer: '发动机', explain: 'engine：发动机。' },
      { id: 'engine.q2', senseId: 'engine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engine?', options: ['发动机', 'a kind of ancient coin', 'the past tense of be'], answer: '发动机', explain: '对的是「发动机」。' },
      { id: 'engine.q3', senseId: 'engine.s1', errorType: 'grammar', type: '词义选择', prompt: 'engine 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'engine.q4', senseId: 'engine.s1', errorType: 'meaning', type: '词源', prompt: '记 engine 时，哪句更稳妥？', options: ['先锁住「发动机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发动机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发动机'] },
  });

  D('engineer', {
    etymology: {
      origin: '英语派生：engine + -er，词性转到「工程师」。',
      prefix: null,
      root: { text: 'engine', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'engineer', text: '英语派生：engine + -er，词性转到「工程师」。' },
        { label: '现在', text: '核心用法是：工程师。' },
      ],
      formationLogic: '先认词干 engine，再看词尾。',
      mnemonic: '看到 engineer，先说出「工程师」。',
      note: '先认词干 engine，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one engineer.', chinese: '这一章反复回到同一个点：工程师。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engineer.s1', en: 'Without that engineer, the next paragraph is hard to follow.', zh: '没有这个工程师，下一段会很难读。', structure: 'engineer / 表示 / 工程师', grammar: 'noun，围绕「工程师」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the engineer.', right: 'He gave me some advice about the engineer.', reason: 'advice 不可数。名词 engineer 的单复数按词典词形记。', rule: '先确定 engineer 是noun，再套「工程师」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engineer.q1', senseId: 'engineer.s1', errorType: 'meaning', type: '词义选择', prompt: '「engineer」在本条的核心意思是：', options: ['工程师', '完全相反的意思', '一种古代钱币'], answer: '工程师', explain: 'engineer：工程师。' },
      { id: 'engineer.q2', senseId: 'engineer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engineer?', options: ['工程师', 'a kind of ancient coin', 'the past tense of be'], answer: '工程师', explain: '对的是「工程师」。' },
      { id: 'engineer.q3', senseId: 'engineer.s1', errorType: 'grammar', type: '词义选择', prompt: 'engineer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'engineer.q4', senseId: 'engineer.s1', errorType: 'meaning', type: '词源', prompt: '记 engineer 时，哪句更稳妥？', options: ['先锁住「工程师」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「工程师」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['工程师'] },
  });

  D('engineering', {
    etymology: {
      origin: '英语派生：engineer + -ing，词性转到「工程学」。',
      prefix: null,
      root: { text: 'engineer', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'engineering', text: '英语派生：engineer + -ing，词性转到「工程学」。' },
        { label: '现在', text: '核心用法是：工程学。' },
      ],
      formationLogic: '先认词干 engineer，再看词尾。',
      mnemonic: '看到 engineering，先说出「工程学」。',
      note: '先认词干 engineer，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one engineering.', chinese: '这一章反复回到同一个点：工程学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engineering.s1', en: 'Without that engineering, the next paragraph is hard to follow.', zh: '没有这个工程学，下一段会很难读。', structure: 'engineering / 表示 / 工程学', grammar: 'noun，围绕「工程学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the engineering.', right: 'He gave me some advice about the engineering.', reason: 'advice 不可数。名词 engineering 的单复数按词典词形记。', rule: '先确定 engineering 是noun，再套「工程学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engineering.q1', senseId: 'engineering.s1', errorType: 'meaning', type: '词义选择', prompt: '「engineering」在本条的核心意思是：', options: ['工程学', '完全相反的意思', '一种古代钱币'], answer: '工程学', explain: 'engineering：工程学。' },
      { id: 'engineering.q2', senseId: 'engineering.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engineering?', options: ['工程学', 'a kind of ancient coin', 'the past tense of be'], answer: '工程学', explain: '对的是「工程学」。' },
      { id: 'engineering.q3', senseId: 'engineering.s1', errorType: 'grammar', type: '词义选择', prompt: 'engineering 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'engineering.q4', senseId: 'engineering.s1', errorType: 'meaning', type: '词源', prompt: '记 engineering 时，哪句更稳妥？', options: ['先锁住「工程学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「工程学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['工程学'] },
  });

  D('engross', {
    etymology: {
      origin: '现代英语常用词「engross」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'engross', gloss: '使全神贯注' },
      suffix: null,
      history: [
        { label: 'engross', text: '现代英语常用词「engross」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使全神贯注。' },
      ],
      formationLogic: '核心义：使全神贯注。',
      mnemonic: '看到 engross，先说出「使全神贯注」。',
      note: '核心义：使全神贯注。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to engross before the office closed.', chinese: '他们同意在办公室关门前做这件事：使全神贯注。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engross.s1', en: 'The deadline forced the team to engross that afternoon.', zh: '截止日期逼着小组在那天下午使全神贯注。', structure: 'engross / 表示 / 使全神贯注', grammar: 'verb，围绕「使全神贯注」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She engrossed it yesterday without checking the real past form.', right: 'Check the past form of "engross" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 engross 是verb，再套「使全神贯注」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engross.q1', senseId: 'engross.s1', errorType: 'meaning', type: '词义选择', prompt: '「engross」在本条的核心意思是：', options: ['使全神贯注', '完全相反的意思', '一种古代钱币'], answer: '使全神贯注', explain: 'engross：使全神贯注。' },
      { id: 'engross.q2', senseId: 'engross.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engross?', options: ['使全神贯注', 'a kind of ancient coin', 'the past tense of be'], answer: '使全神贯注', explain: '对的是「使全神贯注」。' },
      { id: 'engross.q3', senseId: 'engross.s1', errorType: 'grammar', type: '词义选择', prompt: 'engross 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'engross.q4', senseId: 'engross.s1', errorType: 'meaning', type: '词源', prompt: '记 engross 时，哪句更稳妥？', options: ['先锁住「使全神贯注」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使全神贯注」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使全神贯注'] },
  });

  D('engrossment', {
    etymology: {
      origin: '英语派生：engross + -ment，词性转到「全神贯注」。',
      prefix: null,
      root: { text: 'engross', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'engrossment', text: '英语派生：engross + -ment，词性转到「全神贯注」。' },
        { label: '现在', text: '核心用法是：全神贯注。' },
      ],
      formationLogic: '先认词干 engross，再看词尾。',
      mnemonic: '看到 engrossment，先说出「全神贯注」。',
      note: '先认词干 engross，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one engrossment.', chinese: '这一章反复回到同一个点：全神贯注。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engrossment.s1', en: 'Without that engrossment, the next paragraph is hard to follow.', zh: '没有这个全神贯注，下一段会很难读。', structure: 'engrossment / 表示 / 全神贯注', grammar: 'noun，围绕「全神贯注」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the engrossment.', right: 'He gave me some advice about the engrossment.', reason: 'advice 不可数。名词 engrossment 的单复数按词典词形记。', rule: '先确定 engrossment 是noun，再套「全神贯注」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engrossment.q1', senseId: 'engrossment.s1', errorType: 'meaning', type: '词义选择', prompt: '「engrossment」在本条的核心意思是：', options: ['全神贯注', '完全相反的意思', '一种古代钱币'], answer: '全神贯注', explain: 'engrossment：全神贯注。' },
      { id: 'engrossment.q2', senseId: 'engrossment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engrossment?', options: ['全神贯注', 'a kind of ancient coin', 'the past tense of be'], answer: '全神贯注', explain: '对的是「全神贯注」。' },
      { id: 'engrossment.q3', senseId: 'engrossment.s1', errorType: 'grammar', type: '词义选择', prompt: 'engrossment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'engrossment.q4', senseId: 'engrossment.s1', errorType: 'meaning', type: '词源', prompt: '记 engrossment 时，哪句更稳妥？', options: ['先锁住「全神贯注」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全神贯注」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全神贯注'] },
  });

  D('engulf', {
    etymology: {
      origin: '现代英语常用词「engulf」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'engulf', gloss: '吞没' },
      suffix: null,
      history: [
        { label: 'engulf', text: '现代英语常用词「engulf」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：吞没。' },
      ],
      formationLogic: '核心义：吞没。',
      mnemonic: '看到 engulf，先说出「吞没」。',
      note: '核心义：吞没。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to engulf before the office closed.', chinese: '他们同意在办公室关门前做这件事：吞没。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'engulf.s1', en: 'The deadline forced the team to engulf that afternoon.', zh: '截止日期逼着小组在那天下午吞没。', structure: 'engulf / 表示 / 吞没', grammar: 'verb，围绕「吞没」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She engulfed it yesterday without checking the real past form.', right: 'Check the past form of "engulf" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 engulf 是verb，再套「吞没」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'engulf.q1', senseId: 'engulf.s1', errorType: 'meaning', type: '词义选择', prompt: '「engulf」在本条的核心意思是：', options: ['吞没', '完全相反的意思', '一种古代钱币'], answer: '吞没', explain: 'engulf：吞没。' },
      { id: 'engulf.q2', senseId: 'engulf.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches engulf?', options: ['吞没', 'a kind of ancient coin', 'the past tense of be'], answer: '吞没', explain: '对的是「吞没」。' },
      { id: 'engulf.q3', senseId: 'engulf.s1', errorType: 'grammar', type: '词义选择', prompt: 'engulf 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'engulf.q4', senseId: 'engulf.s1', errorType: 'meaning', type: '词源', prompt: '记 engulf 时，哪句更稳妥？', options: ['先锁住「吞没」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「吞没」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['吞没'] },
  });

  D('enhance', {
    etymology: {
      origin: '英语派生：enh + -ance，词性转到「提高」。',
      prefix: null,
      root: { text: 'enh', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enhance', text: '英语派生：enh + -ance，词性转到「提高」。' },
        { label: '现在', text: '核心用法是：提高。' },
      ],
      formationLogic: '先认词干 enh，再看词尾。',
      mnemonic: '看到 enhance，先说出「提高」。',
      note: '先认词干 enh，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enhance before the office closed.', chinese: '他们同意在办公室关门前做这件事：提高。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enhance.s1', en: 'The deadline forced the team to enhance that afternoon.', zh: '截止日期逼着小组在那天下午提高。', structure: 'enhance / 表示 / 提高', grammar: 'verb，围绕「提高」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enhanceed it yesterday without checking the real past form.', right: 'Check the past form of "enhance" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enhance 是verb，再套「提高」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enhance.q1', senseId: 'enhance.s1', errorType: 'meaning', type: '词义选择', prompt: '「enhance」在本条的核心意思是：', options: ['提高', '完全相反的意思', '一种古代钱币'], answer: '提高', explain: 'enhance：提高。' },
      { id: 'enhance.q2', senseId: 'enhance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enhance?', options: ['提高', 'a kind of ancient coin', 'the past tense of be'], answer: '提高', explain: '对的是「提高」。' },
      { id: 'enhance.q3', senseId: 'enhance.s1', errorType: 'grammar', type: '词义选择', prompt: 'enhance 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enhance.q4', senseId: 'enhance.s1', errorType: 'meaning', type: '词源', prompt: '记 enhance 时，哪句更稳妥？', options: ['先锁住「提高」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「提高」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['提高'] },
  });

  D('enigma', {
    etymology: {
      origin: '现代英语常用词「enigma」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enigma', gloss: '谜' },
      suffix: null,
      history: [
        { label: 'enigma', text: '现代英语常用词「enigma」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：谜。' },
      ],
      formationLogic: '核心义：谜。',
      mnemonic: '看到 enigma，先说出「谜」。',
      note: '核心义：谜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enigma.', chinese: '这一章反复回到同一个点：谜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enigma.s1', en: 'Without that enigma, the next paragraph is hard to follow.', zh: '没有这个谜，下一段会很难读。', structure: 'enigma / 表示 / 谜', grammar: 'noun，围绕「谜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enigma.', right: 'He gave me some advice about the enigma.', reason: 'advice 不可数。名词 enigma 的单复数按词典词形记。', rule: '先确定 enigma 是noun，再套「谜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enigma.q1', senseId: 'enigma.s1', errorType: 'meaning', type: '词义选择', prompt: '「enigma」在本条的核心意思是：', options: ['谜', '完全相反的意思', '一种古代钱币'], answer: '谜', explain: 'enigma：谜。' },
      { id: 'enigma.q2', senseId: 'enigma.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enigma?', options: ['谜', 'a kind of ancient coin', 'the past tense of be'], answer: '谜', explain: '对的是「谜」。' },
      { id: 'enigma.q3', senseId: 'enigma.s1', errorType: 'grammar', type: '词义选择', prompt: 'enigma 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enigma.q4', senseId: 'enigma.s1', errorType: 'meaning', type: '词源', prompt: '记 enigma 时，哪句更稳妥？', options: ['先锁住「谜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谜'] },
  });

  D('enjoy', {
    etymology: {
      origin: '现代英语常用词「enjoy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enjoy', gloss: '享受' },
      suffix: null,
      history: [
        { label: 'enjoy', text: '现代英语常用词「enjoy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：享受。' },
      ],
      formationLogic: '核心义：享受。',
      mnemonic: '看到 enjoy，先说出「享受」。',
      note: '核心义：享受。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enjoy before the office closed.', chinese: '他们同意在办公室关门前做这件事：享受。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enjoy.s1', en: 'The deadline forced the team to enjoy that afternoon.', zh: '截止日期逼着小组在那天下午享受。', structure: 'enjoy / 表示 / 享受', grammar: 'verb，围绕「享受」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enjoyed it yesterday without checking the real past form.', right: 'Check the past form of "enjoy" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enjoy 是verb，再套「享受」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enjoy.q1', senseId: 'enjoy.s1', errorType: 'meaning', type: '词义选择', prompt: '「enjoy」在本条的核心意思是：', options: ['享受', '完全相反的意思', '一种古代钱币'], answer: '享受', explain: 'enjoy：享受。' },
      { id: 'enjoy.q2', senseId: 'enjoy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enjoy?', options: ['享受', 'a kind of ancient coin', 'the past tense of be'], answer: '享受', explain: '对的是「享受」。' },
      { id: 'enjoy.q3', senseId: 'enjoy.s1', errorType: 'grammar', type: '词义选择', prompt: 'enjoy 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enjoy.q4', senseId: 'enjoy.s1', errorType: 'meaning', type: '词源', prompt: '记 enjoy 时，哪句更稳妥？', options: ['先锁住「享受」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「享受」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['享受'] },
  });

  D('enjoyable', {
    etymology: {
      origin: '英语派生：enjoy + -able，词性转到「愉快的」。',
      prefix: null,
      root: { text: 'enjoy', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enjoyable', text: '英语派生：enjoy + -able，词性转到「愉快的」。' },
        { label: '现在', text: '核心用法是：愉快的。' },
      ],
      formationLogic: '先认词干 enjoy，再看词尾。',
      mnemonic: '看到 enjoyable，先说出「愉快的」。',
      note: '先认词干 enjoy，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was enjoyable.', chinese: '即使是初读者也能看出，这个结果是愉快的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enjoyable.s1', en: 'They wanted a enjoyable answer, not a long speech.', zh: '他们要一个愉快的的答复，不要长篇发言。', structure: 'enjoyable / 表示 / 愉快的', grammar: 'adjective，围绕「愉快的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are enjoyable.', right: 'The news is enjoyable.', reason: 'news 作主语时动词用单数。', rule: '先确定 enjoyable 是adjective，再套「愉快的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enjoyable.q1', senseId: 'enjoyable.s1', errorType: 'meaning', type: '词义选择', prompt: '「enjoyable」在本条的核心意思是：', options: ['愉快的', '完全相反的意思', '一种古代钱币'], answer: '愉快的', explain: 'enjoyable：愉快的。' },
      { id: 'enjoyable.q2', senseId: 'enjoyable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enjoyable?', options: ['愉快的', 'a kind of ancient coin', 'the past tense of be'], answer: '愉快的', explain: '对的是「愉快的」。' },
      { id: 'enjoyable.q3', senseId: 'enjoyable.s1', errorType: 'grammar', type: '词义选择', prompt: 'enjoyable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'enjoyable.q4', senseId: 'enjoyable.s1', errorType: 'meaning', type: '词源', prompt: '记 enjoyable 时，哪句更稳妥？', options: ['先锁住「愉快的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愉快的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愉快的'] },
  });

  D('enjoyment', {
    etymology: {
      origin: '英语派生：enjoy + -ment，词性转到「乐趣」。',
      prefix: null,
      root: { text: 'enjoy', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enjoyment', text: '英语派生：enjoy + -ment，词性转到「乐趣」。' },
        { label: '现在', text: '核心用法是：乐趣。' },
      ],
      formationLogic: '先认词干 enjoy，再看词尾。',
      mnemonic: '看到 enjoyment，先说出「乐趣」。',
      note: '先认词干 enjoy，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enjoyment.', chinese: '这一章反复回到同一个点：乐趣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enjoyment.s1', en: 'Without that enjoyment, the next paragraph is hard to follow.', zh: '没有这个乐趣，下一段会很难读。', structure: 'enjoyment / 表示 / 乐趣', grammar: 'noun，围绕「乐趣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enjoyment.', right: 'He gave me some advice about the enjoyment.', reason: 'advice 不可数。名词 enjoyment 的单复数按词典词形记。', rule: '先确定 enjoyment 是noun，再套「乐趣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enjoyment.q1', senseId: 'enjoyment.s1', errorType: 'meaning', type: '词义选择', prompt: '「enjoyment」在本条的核心意思是：', options: ['乐趣', '完全相反的意思', '一种古代钱币'], answer: '乐趣', explain: 'enjoyment：乐趣。' },
      { id: 'enjoyment.q2', senseId: 'enjoyment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enjoyment?', options: ['乐趣', 'a kind of ancient coin', 'the past tense of be'], answer: '乐趣', explain: '对的是「乐趣」。' },
      { id: 'enjoyment.q3', senseId: 'enjoyment.s1', errorType: 'grammar', type: '词义选择', prompt: 'enjoyment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enjoyment.q4', senseId: 'enjoyment.s1', errorType: 'meaning', type: '词源', prompt: '记 enjoyment 时，哪句更稳妥？', options: ['先锁住「乐趣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乐趣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乐趣'] },
  });

  D('enlarge', {
    etymology: {
      origin: '现代英语常用词「enlarge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enlarge', gloss: '扩大' },
      suffix: null,
      history: [
        { label: 'enlarge', text: '现代英语常用词「enlarge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：扩大。' },
      ],
      formationLogic: '核心义：扩大。',
      mnemonic: '看到 enlarge，先说出「扩大」。',
      note: '核心义：扩大。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enlarge before the office closed.', chinese: '他们同意在办公室关门前做这件事：扩大。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enlarge.s1', en: 'The deadline forced the team to enlarge that afternoon.', zh: '截止日期逼着小组在那天下午扩大。', structure: 'enlarge / 表示 / 扩大', grammar: 'verb，围绕「扩大」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enlargeed it yesterday without checking the real past form.', right: 'Check the past form of "enlarge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enlarge 是verb，再套「扩大」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enlarge.q1', senseId: 'enlarge.s1', errorType: 'meaning', type: '词义选择', prompt: '「enlarge」在本条的核心意思是：', options: ['扩大', '完全相反的意思', '一种古代钱币'], answer: '扩大', explain: 'enlarge：扩大。' },
      { id: 'enlarge.q2', senseId: 'enlarge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enlarge?', options: ['扩大', 'a kind of ancient coin', 'the past tense of be'], answer: '扩大', explain: '对的是「扩大」。' },
      { id: 'enlarge.q3', senseId: 'enlarge.s1', errorType: 'grammar', type: '词义选择', prompt: 'enlarge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enlarge.q4', senseId: 'enlarge.s1', errorType: 'meaning', type: '词源', prompt: '记 enlarge 时，哪句更稳妥？', options: ['先锁住「扩大」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扩大」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扩大'] },
  });

  D('enlighten', {
    etymology: {
      origin: '现代英语常用词「enlighten」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enlighten', gloss: '启发' },
      suffix: null,
      history: [
        { label: 'enlighten', text: '现代英语常用词「enlighten」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：启发。' },
      ],
      formationLogic: '核心义：启发。',
      mnemonic: '看到 enlighten，先说出「启发」。',
      note: '核心义：启发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enlighten before the office closed.', chinese: '他们同意在办公室关门前做这件事：启发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enlighten.s1', en: 'The deadline forced the team to enlighten that afternoon.', zh: '截止日期逼着小组在那天下午启发。', structure: 'enlighten / 表示 / 启发', grammar: 'verb，围绕「启发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enlightened it yesterday without checking the real past form.', right: 'Check the past form of "enlighten" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enlighten 是verb，再套「启发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enlighten.q1', senseId: 'enlighten.s1', errorType: 'meaning', type: '词义选择', prompt: '「enlighten」在本条的核心意思是：', options: ['启发', '完全相反的意思', '一种古代钱币'], answer: '启发', explain: 'enlighten：启发。' },
      { id: 'enlighten.q2', senseId: 'enlighten.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enlighten?', options: ['启发', 'a kind of ancient coin', 'the past tense of be'], answer: '启发', explain: '对的是「启发」。' },
      { id: 'enlighten.q3', senseId: 'enlighten.s1', errorType: 'grammar', type: '词义选择', prompt: 'enlighten 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enlighten.q4', senseId: 'enlighten.s1', errorType: 'meaning', type: '词源', prompt: '记 enlighten 时，哪句更稳妥？', options: ['先锁住「启发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「启发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['启发'] },
  });

  D('enlist', {
    etymology: {
      origin: '英语派生：enl + -ist，词性转到「参军」。',
      prefix: null,
      root: { text: 'enl', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enlist', text: '英语派生：enl + -ist，词性转到「参军」。' },
        { label: '现在', text: '核心用法是：参军。' },
      ],
      formationLogic: '先认词干 enl，再看词尾。',
      mnemonic: '看到 enlist，先说出「参军」。',
      note: '先认词干 enl，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enlist before the office closed.', chinese: '他们同意在办公室关门前做这件事：参军。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enlist.s1', en: 'The deadline forced the team to enlist that afternoon.', zh: '截止日期逼着小组在那天下午参军。', structure: 'enlist / 表示 / 参军', grammar: 'verb，围绕「参军」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enlisted it yesterday without checking the real past form.', right: 'Check the past form of "enlist" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enlist 是verb，再套「参军」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enlist.q1', senseId: 'enlist.s1', errorType: 'meaning', type: '词义选择', prompt: '「enlist」在本条的核心意思是：', options: ['参军', '完全相反的意思', '一种古代钱币'], answer: '参军', explain: 'enlist：参军。' },
      { id: 'enlist.q2', senseId: 'enlist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enlist?', options: ['参军', 'a kind of ancient coin', 'the past tense of be'], answer: '参军', explain: '对的是「参军」。' },
      { id: 'enlist.q3', senseId: 'enlist.s1', errorType: 'grammar', type: '词义选择', prompt: 'enlist 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enlist.q4', senseId: 'enlist.s1', errorType: 'meaning', type: '词源', prompt: '记 enlist 时，哪句更稳妥？', options: ['先锁住「参军」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「参军」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['参军'] },
  });

  D('enliven', {
    etymology: {
      origin: '现代英语常用词「enliven」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enliven', gloss: '使活跃' },
      suffix: null,
      history: [
        { label: 'enliven', text: '现代英语常用词「enliven」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使活跃。' },
      ],
      formationLogic: '核心义：使活跃。',
      mnemonic: '看到 enliven，先说出「使活跃」。',
      note: '核心义：使活跃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enliven before the office closed.', chinese: '他们同意在办公室关门前做这件事：使活跃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enliven.s1', en: 'The deadline forced the team to enliven that afternoon.', zh: '截止日期逼着小组在那天下午使活跃。', structure: 'enliven / 表示 / 使活跃', grammar: 'verb，围绕「使活跃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enlivened it yesterday without checking the real past form.', right: 'Check the past form of "enliven" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enliven 是verb，再套「使活跃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enliven.q1', senseId: 'enliven.s1', errorType: 'meaning', type: '词义选择', prompt: '「enliven」在本条的核心意思是：', options: ['使活跃', '完全相反的意思', '一种古代钱币'], answer: '使活跃', explain: 'enliven：使活跃。' },
      { id: 'enliven.q2', senseId: 'enliven.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enliven?', options: ['使活跃', 'a kind of ancient coin', 'the past tense of be'], answer: '使活跃', explain: '对的是「使活跃」。' },
      { id: 'enliven.q3', senseId: 'enliven.s1', errorType: 'grammar', type: '词义选择', prompt: 'enliven 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enliven.q4', senseId: 'enliven.s1', errorType: 'meaning', type: '词源', prompt: '记 enliven 时，哪句更稳妥？', options: ['先锁住「使活跃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使活跃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使活跃'] },
  });

  D('ennoble', {
    etymology: {
      origin: '现代英语常用词「ennoble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ennoble', gloss: '使高贵' },
      suffix: null,
      history: [
        { label: 'ennoble', text: '现代英语常用词「ennoble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使高贵。' },
      ],
      formationLogic: '核心义：使高贵。',
      mnemonic: '看到 ennoble，先说出「使高贵」。',
      note: '核心义：使高贵。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to ennoble before the office closed.', chinese: '他们同意在办公室关门前做这件事：使高贵。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ennoble.s1', en: 'The deadline forced the team to ennoble that afternoon.', zh: '截止日期逼着小组在那天下午使高贵。', structure: 'ennoble / 表示 / 使高贵', grammar: 'verb，围绕「使高贵」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She ennobleed it yesterday without checking the real past form.', right: 'Check the past form of "ennoble" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 ennoble 是verb，再套「使高贵」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ennoble.q1', senseId: 'ennoble.s1', errorType: 'meaning', type: '词义选择', prompt: '「ennoble」在本条的核心意思是：', options: ['使高贵', '完全相反的意思', '一种古代钱币'], answer: '使高贵', explain: 'ennoble：使高贵。' },
      { id: 'ennoble.q2', senseId: 'ennoble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ennoble?', options: ['使高贵', 'a kind of ancient coin', 'the past tense of be'], answer: '使高贵', explain: '对的是「使高贵」。' },
      { id: 'ennoble.q3', senseId: 'ennoble.s1', errorType: 'grammar', type: '词义选择', prompt: 'ennoble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'ennoble.q4', senseId: 'ennoble.s1', errorType: 'meaning', type: '词源', prompt: '记 ennoble 时，哪句更稳妥？', options: ['先锁住「使高贵」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使高贵」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使高贵'] },
  });

  D('enormous', {
    etymology: {
      origin: '英语派生：enorm + -ous，词性转到「巨大的」。',
      prefix: null,
      root: { text: 'enorm', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enormous', text: '英语派生：enorm + -ous，词性转到「巨大的」。' },
        { label: '现在', text: '核心用法是：巨大的。' },
      ],
      formationLogic: '先认词干 enorm，再看词尾。',
      mnemonic: '看到 enormous，先说出「巨大的」。',
      note: '先认词干 enorm，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was enormous.', chinese: '即使是初读者也能看出，这个结果是巨大的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enormous.s1', en: 'They wanted a enormous answer, not a long speech.', zh: '他们要一个巨大的的答复，不要长篇发言。', structure: 'enormous / 表示 / 巨大的', grammar: 'adjective，围绕「巨大的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are enormous.', right: 'The news is enormous.', reason: 'news 作主语时动词用单数。', rule: '先确定 enormous 是adjective，再套「巨大的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enormous.q1', senseId: 'enormous.s1', errorType: 'meaning', type: '词义选择', prompt: '「enormous」在本条的核心意思是：', options: ['巨大的', '完全相反的意思', '一种古代钱币'], answer: '巨大的', explain: 'enormous：巨大的。' },
      { id: 'enormous.q2', senseId: 'enormous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enormous?', options: ['巨大的', 'a kind of ancient coin', 'the past tense of be'], answer: '巨大的', explain: '对的是「巨大的」。' },
      { id: 'enormous.q3', senseId: 'enormous.s1', errorType: 'grammar', type: '词义选择', prompt: 'enormous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'enormous.q4', senseId: 'enormous.s1', errorType: 'meaning', type: '词源', prompt: '记 enormous 时，哪句更稳妥？', options: ['先锁住「巨大的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「巨大的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['巨大的'] },
  });

  D('enough', {
    etymology: {
      origin: '现代英语常用词「enough」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enough', gloss: '足够的' },
      suffix: null,
      history: [
        { label: 'enough', text: '现代英语常用词「enough」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：足够的。' },
      ],
      formationLogic: '核心义：足够的。',
      mnemonic: '看到 enough，先说出「足够的」。',
      note: '核心义：足够的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "enough" and asked the class to keep it as one unit.', chinese: '老师把「enough」圈出来，让全班把它当成一个整体。它表示足够的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enough.s1', en: 'In the margin she wrote "enough" so nobody would split the phrase.', zh: '她在页边写下「enough」，免得有人把这个说法拆开。意思是足够的。', structure: 'enough / 表示 / 足够的', grammar: 'determiner，围绕「足够的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of enough and lost the point.', right: 'Keep "enough" together: it means 足够的.', reason: '「enough」要整块理解。', rule: '先确定 enough 是determiner，再套「足够的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enough.q1', senseId: 'enough.s1', errorType: 'meaning', type: '词义选择', prompt: '「enough」在本条的核心意思是：', options: ['足够的', '完全相反的意思', '一种古代钱币'], answer: '足够的', explain: 'enough：足够的。' },
      { id: 'enough.q2', senseId: 'enough.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enough?', options: ['足够的', 'a kind of ancient coin', 'the past tense of be'], answer: '足够的', explain: '对的是「足够的」。' },
      { id: 'enough.q3', senseId: 'enough.s1', errorType: 'grammar', type: '词义选择', prompt: 'enough 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'enough.q4', senseId: 'enough.s1', errorType: 'meaning', type: '词源', prompt: '记 enough 时，哪句更稳妥？', options: ['先锁住「足够的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「足够的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['足够的'] },
  });

  D('enquire', {
    etymology: {
      origin: '现代英语常用词「enquire」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enquire', gloss: '询问' },
      suffix: null,
      history: [
        { label: 'enquire', text: '现代英语常用词「enquire」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：询问。' },
      ],
      formationLogic: '核心义：询问。',
      mnemonic: '看到 enquire，先说出「询问」。',
      note: '核心义：询问。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enquire before the office closed.', chinese: '他们同意在办公室关门前做这件事：询问。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enquire.s1', en: 'The deadline forced the team to enquire that afternoon.', zh: '截止日期逼着小组在那天下午询问。', structure: 'enquire / 表示 / 询问', grammar: 'verb，围绕「询问」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enquireed it yesterday without checking the real past form.', right: 'Check the past form of "enquire" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enquire 是verb，再套「询问」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enquire.q1', senseId: 'enquire.s1', errorType: 'meaning', type: '词义选择', prompt: '「enquire」在本条的核心意思是：', options: ['询问', '完全相反的意思', '一种古代钱币'], answer: '询问', explain: 'enquire：询问。' },
      { id: 'enquire.q2', senseId: 'enquire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enquire?', options: ['询问', 'a kind of ancient coin', 'the past tense of be'], answer: '询问', explain: '对的是「询问」。' },
      { id: 'enquire.q3', senseId: 'enquire.s1', errorType: 'grammar', type: '词义选择', prompt: 'enquire 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enquire.q4', senseId: 'enquire.s1', errorType: 'meaning', type: '词源', prompt: '记 enquire 时，哪句更稳妥？', options: ['先锁住「询问」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「询问」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['询问'] },
  });

  D('enrich', {
    etymology: {
      origin: '现代英语常用词「enrich」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enrich', gloss: '使丰富' },
      suffix: null,
      history: [
        { label: 'enrich', text: '现代英语常用词「enrich」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使丰富。' },
      ],
      formationLogic: '核心义：使丰富。',
      mnemonic: '看到 enrich，先说出「使丰富」。',
      note: '核心义：使丰富。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enrich before the office closed.', chinese: '他们同意在办公室关门前做这件事：使丰富。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enrich.s1', en: 'The deadline forced the team to enrich that afternoon.', zh: '截止日期逼着小组在那天下午使丰富。', structure: 'enrich / 表示 / 使丰富', grammar: 'verb，围绕「使丰富」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enriched it yesterday without checking the real past form.', right: 'Check the past form of "enrich" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enrich 是verb，再套「使丰富」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enrich.q1', senseId: 'enrich.s1', errorType: 'meaning', type: '词义选择', prompt: '「enrich」在本条的核心意思是：', options: ['使丰富', '完全相反的意思', '一种古代钱币'], answer: '使丰富', explain: 'enrich：使丰富。' },
      { id: 'enrich.q2', senseId: 'enrich.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enrich?', options: ['使丰富', 'a kind of ancient coin', 'the past tense of be'], answer: '使丰富', explain: '对的是「使丰富」。' },
      { id: 'enrich.q3', senseId: 'enrich.s1', errorType: 'grammar', type: '词义选择', prompt: 'enrich 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enrich.q4', senseId: 'enrich.s1', errorType: 'meaning', type: '词源', prompt: '记 enrich 时，哪句更稳妥？', options: ['先锁住「使丰富」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使丰富」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使丰富'] },
  });

  D('enrol', {
    etymology: {
      origin: '现代英语常用词「enrol」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enrol', gloss: '注册' },
      suffix: null,
      history: [
        { label: 'enrol', text: '现代英语常用词「enrol」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：注册。' },
      ],
      formationLogic: '核心义：注册。',
      mnemonic: '看到 enrol，先说出「注册」。',
      note: '核心义：注册。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enrol before the office closed.', chinese: '他们同意在办公室关门前做这件事：注册。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enrol.s1', en: 'The deadline forced the team to enrol that afternoon.', zh: '截止日期逼着小组在那天下午注册。', structure: 'enrol / 表示 / 注册', grammar: 'verb，围绕「注册」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enroled it yesterday without checking the real past form.', right: 'Check the past form of "enrol" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enrol 是verb，再套「注册」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enrol.q1', senseId: 'enrol.s1', errorType: 'meaning', type: '词义选择', prompt: '「enrol」在本条的核心意思是：', options: ['注册', '完全相反的意思', '一种古代钱币'], answer: '注册', explain: 'enrol：注册。' },
      { id: 'enrol.q2', senseId: 'enrol.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enrol?', options: ['注册', 'a kind of ancient coin', 'the past tense of be'], answer: '注册', explain: '对的是「注册」。' },
      { id: 'enrol.q3', senseId: 'enrol.s1', errorType: 'grammar', type: '词义选择', prompt: 'enrol 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enrol.q4', senseId: 'enrol.s1', errorType: 'meaning', type: '词源', prompt: '记 enrol 时，哪句更稳妥？', options: ['先锁住「注册」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「注册」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['注册'] },
  });

  D('enrolment', {
    etymology: {
      origin: '英语派生：enrol + -ment，词性转到「入学」。',
      prefix: null,
      root: { text: 'enrol', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enrolment', text: '英语派生：enrol + -ment，词性转到「入学」。' },
        { label: '现在', text: '核心用法是：入学。' },
      ],
      formationLogic: '先认词干 enrol，再看词尾。',
      mnemonic: '看到 enrolment，先说出「入学」。',
      note: '先认词干 enrol，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enrolment.', chinese: '这一章反复回到同一个点：入学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enrolment.s1', en: 'Without that enrolment, the next paragraph is hard to follow.', zh: '没有这个入学，下一段会很难读。', structure: 'enrolment / 表示 / 入学', grammar: 'noun，围绕「入学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enrolment.', right: 'He gave me some advice about the enrolment.', reason: 'advice 不可数。名词 enrolment 的单复数按词典词形记。', rule: '先确定 enrolment 是noun，再套「入学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enrolment.q1', senseId: 'enrolment.s1', errorType: 'meaning', type: '词义选择', prompt: '「enrolment」在本条的核心意思是：', options: ['入学', '完全相反的意思', '一种古代钱币'], answer: '入学', explain: 'enrolment：入学。' },
      { id: 'enrolment.q2', senseId: 'enrolment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enrolment?', options: ['入学', 'a kind of ancient coin', 'the past tense of be'], answer: '入学', explain: '对的是「入学」。' },
      { id: 'enrolment.q3', senseId: 'enrolment.s1', errorType: 'grammar', type: '词义选择', prompt: 'enrolment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enrolment.q4', senseId: 'enrolment.s1', errorType: 'meaning', type: '词源', prompt: '记 enrolment 时，哪句更稳妥？', options: ['先锁住「入学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「入学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['入学'] },
  });

  D('ensemble', {
    etymology: {
      origin: '现代英语常用词「ensemble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ensemble', gloss: '合奏团' },
      suffix: null,
      history: [
        { label: 'ensemble', text: '现代英语常用词「ensemble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：合奏团。' },
      ],
      formationLogic: '核心义：合奏团。',
      mnemonic: '看到 ensemble，先说出「合奏团」。',
      note: '核心义：合奏团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ensemble.', chinese: '这一章反复回到同一个点：合奏团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ensemble.s1', en: 'Without that ensemble, the next paragraph is hard to follow.', zh: '没有这个合奏团，下一段会很难读。', structure: 'ensemble / 表示 / 合奏团', grammar: 'noun，围绕「合奏团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ensemble.', right: 'He gave me some advice about the ensemble.', reason: 'advice 不可数。名词 ensemble 的单复数按词典词形记。', rule: '先确定 ensemble 是noun，再套「合奏团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ensemble.q1', senseId: 'ensemble.s1', errorType: 'meaning', type: '词义选择', prompt: '「ensemble」在本条的核心意思是：', options: ['合奏团', '完全相反的意思', '一种古代钱币'], answer: '合奏团', explain: 'ensemble：合奏团。' },
      { id: 'ensemble.q2', senseId: 'ensemble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ensemble?', options: ['合奏团', 'a kind of ancient coin', 'the past tense of be'], answer: '合奏团', explain: '对的是「合奏团」。' },
      { id: 'ensemble.q3', senseId: 'ensemble.s1', errorType: 'grammar', type: '词义选择', prompt: 'ensemble 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ensemble.q4', senseId: 'ensemble.s1', errorType: 'meaning', type: '词源', prompt: '记 ensemble 时，哪句更稳妥？', options: ['先锁住「合奏团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合奏团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合奏团'] },
  });

  D('ensign', {
    etymology: {
      origin: '现代英语常用词「ensign」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ensign', gloss: '军旗' },
      suffix: null,
      history: [
        { label: 'ensign', text: '现代英语常用词「ensign」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：军旗。' },
      ],
      formationLogic: '核心义：军旗。',
      mnemonic: '看到 ensign，先说出「军旗」。',
      note: '核心义：军旗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ensign.', chinese: '这一章反复回到同一个点：军旗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ensign.s1', en: 'Without that ensign, the next paragraph is hard to follow.', zh: '没有这个军旗，下一段会很难读。', structure: 'ensign / 表示 / 军旗', grammar: 'noun，围绕「军旗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ensign.', right: 'He gave me some advice about the ensign.', reason: 'advice 不可数。名词 ensign 的单复数按词典词形记。', rule: '先确定 ensign 是noun，再套「军旗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ensign.q1', senseId: 'ensign.s1', errorType: 'meaning', type: '词义选择', prompt: '「ensign」在本条的核心意思是：', options: ['军旗', '完全相反的意思', '一种古代钱币'], answer: '军旗', explain: 'ensign：军旗。' },
      { id: 'ensign.q2', senseId: 'ensign.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ensign?', options: ['军旗', 'a kind of ancient coin', 'the past tense of be'], answer: '军旗', explain: '对的是「军旗」。' },
      { id: 'ensign.q3', senseId: 'ensign.s1', errorType: 'grammar', type: '词义选择', prompt: 'ensign 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ensign.q4', senseId: 'ensign.s1', errorType: 'meaning', type: '词源', prompt: '记 ensign 时，哪句更稳妥？', options: ['先锁住「军旗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「军旗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['军旗'] },
  });

  D('ensue', {
    etymology: {
      origin: '现代英语常用词「ensue」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ensue', gloss: '接着发生' },
      suffix: null,
      history: [
        { label: 'ensue', text: '现代英语常用词「ensue」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：接着发生。' },
      ],
      formationLogic: '核心义：接着发生。',
      mnemonic: '看到 ensue，先说出「接着发生」。',
      note: '核心义：接着发生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to ensue before the office closed.', chinese: '他们同意在办公室关门前做这件事：接着发生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ensue.s1', en: 'The deadline forced the team to ensue that afternoon.', zh: '截止日期逼着小组在那天下午接着发生。', structure: 'ensue / 表示 / 接着发生', grammar: 'verb，围绕「接着发生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She ensueed it yesterday without checking the real past form.', right: 'Check the past form of "ensue" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 ensue 是verb，再套「接着发生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ensue.q1', senseId: 'ensue.s1', errorType: 'meaning', type: '词义选择', prompt: '「ensue」在本条的核心意思是：', options: ['接着发生', '完全相反的意思', '一种古代钱币'], answer: '接着发生', explain: 'ensue：接着发生。' },
      { id: 'ensue.q2', senseId: 'ensue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ensue?', options: ['接着发生', 'a kind of ancient coin', 'the past tense of be'], answer: '接着发生', explain: '对的是「接着发生」。' },
      { id: 'ensue.q3', senseId: 'ensue.s1', errorType: 'grammar', type: '词义选择', prompt: 'ensue 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'ensue.q4', senseId: 'ensue.s1', errorType: 'meaning', type: '词源', prompt: '记 ensue 时，哪句更稳妥？', options: ['先锁住「接着发生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「接着发生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['接着发生'] },
  });

  D('ensuing', {
    etymology: {
      origin: '英语派生：ensu + -ing，词性转到「接下来的」。',
      prefix: null,
      root: { text: 'ensu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ensuing', text: '英语派生：ensu + -ing，词性转到「接下来的」。' },
        { label: '现在', text: '核心用法是：接下来的。' },
      ],
      formationLogic: '先认词干 ensu，再看词尾。',
      mnemonic: '看到 ensuing，先说出「接下来的」。',
      note: '先认词干 ensu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was ensuing.', chinese: '即使是初读者也能看出，这个结果是接下来的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ensuing.s1', en: 'They wanted a ensuing answer, not a long speech.', zh: '他们要一个接下来的的答复，不要长篇发言。', structure: 'ensuing / 表示 / 接下来的', grammar: 'adjective，围绕「接下来的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ensuing.', right: 'The news is ensuing.', reason: 'news 作主语时动词用单数。', rule: '先确定 ensuing 是adjective，再套「接下来的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ensuing.q1', senseId: 'ensuing.s1', errorType: 'meaning', type: '词义选择', prompt: '「ensuing」在本条的核心意思是：', options: ['接下来的', '完全相反的意思', '一种古代钱币'], answer: '接下来的', explain: 'ensuing：接下来的。' },
      { id: 'ensuing.q2', senseId: 'ensuing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ensuing?', options: ['接下来的', 'a kind of ancient coin', 'the past tense of be'], answer: '接下来的', explain: '对的是「接下来的」。' },
      { id: 'ensuing.q3', senseId: 'ensuing.s1', errorType: 'grammar', type: '词义选择', prompt: 'ensuing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ensuing.q4', senseId: 'ensuing.s1', errorType: 'meaning', type: '词源', prompt: '记 ensuing 时，哪句更稳妥？', options: ['先锁住「接下来的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「接下来的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['接下来的'] },
  });

  D('entail', {
    etymology: {
      origin: '现代英语常用词「entail」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entail', gloss: '需要' },
      suffix: null,
      history: [
        { label: 'entail', text: '现代英语常用词「entail」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：需要。' },
      ],
      formationLogic: '核心义：需要。',
      mnemonic: '看到 entail，先说出「需要」。',
      note: '核心义：需要。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entail before the office closed.', chinese: '他们同意在办公室关门前做这件事：需要。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entail.s1', en: 'The deadline forced the team to entail that afternoon.', zh: '截止日期逼着小组在那天下午需要。', structure: 'entail / 表示 / 需要', grammar: 'verb，围绕「需要」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entailed it yesterday without checking the real past form.', right: 'Check the past form of "entail" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entail 是verb，再套「需要」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entail.q1', senseId: 'entail.s1', errorType: 'meaning', type: '词义选择', prompt: '「entail」在本条的核心意思是：', options: ['需要', '完全相反的意思', '一种古代钱币'], answer: '需要', explain: 'entail：需要。' },
      { id: 'entail.q2', senseId: 'entail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entail?', options: ['需要', 'a kind of ancient coin', 'the past tense of be'], answer: '需要', explain: '对的是「需要」。' },
      { id: 'entail.q3', senseId: 'entail.s1', errorType: 'grammar', type: '词义选择', prompt: 'entail 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entail.q4', senseId: 'entail.s1', errorType: 'meaning', type: '词源', prompt: '记 entail 时，哪句更稳妥？', options: ['先锁住「需要」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「需要」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['需要'] },
  });

  D('entangle', {
    etymology: {
      origin: '现代英语常用词「entangle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entangle', gloss: '使纠缠' },
      suffix: null,
      history: [
        { label: 'entangle', text: '现代英语常用词「entangle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使纠缠。' },
      ],
      formationLogic: '核心义：使纠缠。',
      mnemonic: '看到 entangle，先说出「使纠缠」。',
      note: '核心义：使纠缠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entangle before the office closed.', chinese: '他们同意在办公室关门前做这件事：使纠缠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entangle.s1', en: 'The deadline forced the team to entangle that afternoon.', zh: '截止日期逼着小组在那天下午使纠缠。', structure: 'entangle / 表示 / 使纠缠', grammar: 'verb，围绕「使纠缠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entangleed it yesterday without checking the real past form.', right: 'Check the past form of "entangle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entangle 是verb，再套「使纠缠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entangle.q1', senseId: 'entangle.s1', errorType: 'meaning', type: '词义选择', prompt: '「entangle」在本条的核心意思是：', options: ['使纠缠', '完全相反的意思', '一种古代钱币'], answer: '使纠缠', explain: 'entangle：使纠缠。' },
      { id: 'entangle.q2', senseId: 'entangle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entangle?', options: ['使纠缠', 'a kind of ancient coin', 'the past tense of be'], answer: '使纠缠', explain: '对的是「使纠缠」。' },
      { id: 'entangle.q3', senseId: 'entangle.s1', errorType: 'grammar', type: '词义选择', prompt: 'entangle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entangle.q4', senseId: 'entangle.s1', errorType: 'meaning', type: '词源', prompt: '记 entangle 时，哪句更稳妥？', options: ['先锁住「使纠缠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使纠缠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使纠缠'] },
  });

  D('enter', {
    etymology: {
      origin: '英语派生：ent + -er，词性转到「进入」。',
      prefix: null,
      root: { text: 'ent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enter', text: '英语派生：ent + -er，词性转到「进入」。' },
        { label: '现在', text: '核心用法是：进入。' },
      ],
      formationLogic: '先认词干 ent，再看词尾。',
      mnemonic: '看到 enter，先说出「进入」。',
      note: '先认词干 ent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enter before the office closed.', chinese: '他们同意在办公室关门前做这件事：进入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enter.s1', en: 'The deadline forced the team to enter that afternoon.', zh: '截止日期逼着小组在那天下午进入。', structure: 'enter / 表示 / 进入', grammar: 'verb，围绕「进入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entered it yesterday without checking the real past form.', right: 'Check the past form of "enter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enter 是verb，再套「进入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enter.q1', senseId: 'enter.s1', errorType: 'meaning', type: '词义选择', prompt: '「enter」在本条的核心意思是：', options: ['进入', '完全相反的意思', '一种古代钱币'], answer: '进入', explain: 'enter：进入。' },
      { id: 'enter.q2', senseId: 'enter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enter?', options: ['进入', 'a kind of ancient coin', 'the past tense of be'], answer: '进入', explain: '对的是「进入」。' },
      { id: 'enter.q3', senseId: 'enter.s1', errorType: 'grammar', type: '词义选择', prompt: 'enter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enter.q4', senseId: 'enter.s1', errorType: 'meaning', type: '词源', prompt: '记 enter 时，哪句更稳妥？', options: ['先锁住「进入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进入'] },
  });

  D('enterprise', {
    etymology: {
      origin: '现代英语常用词「enterprise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enterprise', gloss: '企业' },
      suffix: null,
      history: [
        { label: 'enterprise', text: '现代英语常用词「enterprise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：企业。' },
      ],
      formationLogic: '核心义：企业。',
      mnemonic: '看到 enterprise，先说出「企业」。',
      note: '核心义：企业。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enterprise.', chinese: '这一章反复回到同一个点：企业。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enterprise.s1', en: 'Without that enterprise, the next paragraph is hard to follow.', zh: '没有这个企业，下一段会很难读。', structure: 'enterprise / 表示 / 企业', grammar: 'noun，围绕「企业」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enterprise.', right: 'He gave me some advice about the enterprise.', reason: 'advice 不可数。名词 enterprise 的单复数按词典词形记。', rule: '先确定 enterprise 是noun，再套「企业」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enterprise.q1', senseId: 'enterprise.s1', errorType: 'meaning', type: '词义选择', prompt: '「enterprise」在本条的核心意思是：', options: ['企业', '完全相反的意思', '一种古代钱币'], answer: '企业', explain: 'enterprise：企业。' },
      { id: 'enterprise.q2', senseId: 'enterprise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enterprise?', options: ['企业', 'a kind of ancient coin', 'the past tense of be'], answer: '企业', explain: '对的是「企业」。' },
      { id: 'enterprise.q3', senseId: 'enterprise.s1', errorType: 'grammar', type: '词义选择', prompt: 'enterprise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enterprise.q4', senseId: 'enterprise.s1', errorType: 'meaning', type: '词源', prompt: '记 enterprise 时，哪句更稳妥？', options: ['先锁住「企业」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「企业」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['企业'] },
  });

  D('entertain', {
    etymology: {
      origin: '现代英语常用词「entertain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entertain', gloss: '招待' },
      suffix: null,
      history: [
        { label: 'entertain', text: '现代英语常用词「entertain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：招待。' },
      ],
      formationLogic: '核心义：招待。',
      mnemonic: '看到 entertain，先说出「招待」。',
      note: '核心义：招待。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entertain before the office closed.', chinese: '他们同意在办公室关门前做这件事：招待。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entertain.s1', en: 'The deadline forced the team to entertain that afternoon.', zh: '截止日期逼着小组在那天下午招待。', structure: 'entertain / 表示 / 招待', grammar: 'verb，围绕「招待」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entertained it yesterday without checking the real past form.', right: 'Check the past form of "entertain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entertain 是verb，再套「招待」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entertain.q1', senseId: 'entertain.s1', errorType: 'meaning', type: '词义选择', prompt: '「entertain」在本条的核心意思是：', options: ['招待', '完全相反的意思', '一种古代钱币'], answer: '招待', explain: 'entertain：招待。' },
      { id: 'entertain.q2', senseId: 'entertain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entertain?', options: ['招待', 'a kind of ancient coin', 'the past tense of be'], answer: '招待', explain: '对的是「招待」。' },
      { id: 'entertain.q3', senseId: 'entertain.s1', errorType: 'grammar', type: '词义选择', prompt: 'entertain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entertain.q4', senseId: 'entertain.s1', errorType: 'meaning', type: '词源', prompt: '记 entertain 时，哪句更稳妥？', options: ['先锁住「招待」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「招待」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['招待'] },
  });

  D('enthrone', {
    etymology: {
      origin: '现代英语常用词「enthrone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enthrone', gloss: '使登基' },
      suffix: null,
      history: [
        { label: 'enthrone', text: '现代英语常用词「enthrone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使登基。' },
      ],
      formationLogic: '核心义：使登基。',
      mnemonic: '看到 enthrone，先说出「使登基」。',
      note: '核心义：使登基。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enthrone before the office closed.', chinese: '他们同意在办公室关门前做这件事：使登基。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enthrone.s1', en: 'The deadline forced the team to enthrone that afternoon.', zh: '截止日期逼着小组在那天下午使登基。', structure: 'enthrone / 表示 / 使登基', grammar: 'verb，围绕「使登基」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enthroneed it yesterday without checking the real past form.', right: 'Check the past form of "enthrone" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enthrone 是verb，再套「使登基」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enthrone.q1', senseId: 'enthrone.s1', errorType: 'meaning', type: '词义选择', prompt: '「enthrone」在本条的核心意思是：', options: ['使登基', '完全相反的意思', '一种古代钱币'], answer: '使登基', explain: 'enthrone：使登基。' },
      { id: 'enthrone.q2', senseId: 'enthrone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enthrone?', options: ['使登基', 'a kind of ancient coin', 'the past tense of be'], answer: '使登基', explain: '对的是「使登基」。' },
      { id: 'enthrone.q3', senseId: 'enthrone.s1', errorType: 'grammar', type: '词义选择', prompt: 'enthrone 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enthrone.q4', senseId: 'enthrone.s1', errorType: 'meaning', type: '词源', prompt: '记 enthrone 时，哪句更稳妥？', options: ['先锁住「使登基」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使登基」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使登基'] },
  });

  D('enthusiasm', {
    etymology: {
      origin: '现代英语常用词「enthusiasm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enthusiasm', gloss: '热情' },
      suffix: null,
      history: [
        { label: 'enthusiasm', text: '现代英语常用词「enthusiasm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：热情。' },
      ],
      formationLogic: '核心义：热情。',
      mnemonic: '看到 enthusiasm，先说出「热情」。',
      note: '核心义：热情。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enthusiasm.', chinese: '这一章反复回到同一个点：热情。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enthusiasm.s1', en: 'Without that enthusiasm, the next paragraph is hard to follow.', zh: '没有这个热情，下一段会很难读。', structure: 'enthusiasm / 表示 / 热情', grammar: 'noun，围绕「热情」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enthusiasm.', right: 'He gave me some advice about the enthusiasm.', reason: 'advice 不可数。名词 enthusiasm 的单复数按词典词形记。', rule: '先确定 enthusiasm 是noun，再套「热情」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enthusiasm.q1', senseId: 'enthusiasm.s1', errorType: 'meaning', type: '词义选择', prompt: '「enthusiasm」在本条的核心意思是：', options: ['热情', '完全相反的意思', '一种古代钱币'], answer: '热情', explain: 'enthusiasm：热情。' },
      { id: 'enthusiasm.q2', senseId: 'enthusiasm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enthusiasm?', options: ['热情', 'a kind of ancient coin', 'the past tense of be'], answer: '热情', explain: '对的是「热情」。' },
      { id: 'enthusiasm.q3', senseId: 'enthusiasm.s1', errorType: 'grammar', type: '词义选择', prompt: 'enthusiasm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enthusiasm.q4', senseId: 'enthusiasm.s1', errorType: 'meaning', type: '词源', prompt: '记 enthusiasm 时，哪句更稳妥？', options: ['先锁住「热情」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热情」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热情'] },
  });

  D('enthusiast', {
    etymology: {
      origin: '现代英语常用词「enthusiast」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enthusiast', gloss: '热心人' },
      suffix: null,
      history: [
        { label: 'enthusiast', text: '现代英语常用词「enthusiast」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：热心人。' },
      ],
      formationLogic: '核心义：热心人。',
      mnemonic: '看到 enthusiast，先说出「热心人」。',
      note: '核心义：热心人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one enthusiast.', chinese: '这一章反复回到同一个点：热心人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enthusiast.s1', en: 'Without that enthusiast, the next paragraph is hard to follow.', zh: '没有这个热心人，下一段会很难读。', structure: 'enthusiast / 表示 / 热心人', grammar: 'noun，围绕「热心人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the enthusiast.', right: 'He gave me some advice about the enthusiast.', reason: 'advice 不可数。名词 enthusiast 的单复数按词典词形记。', rule: '先确定 enthusiast 是noun，再套「热心人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enthusiast.q1', senseId: 'enthusiast.s1', errorType: 'meaning', type: '词义选择', prompt: '「enthusiast」在本条的核心意思是：', options: ['热心人', '完全相反的意思', '一种古代钱币'], answer: '热心人', explain: 'enthusiast：热心人。' },
      { id: 'enthusiast.q2', senseId: 'enthusiast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enthusiast?', options: ['热心人', 'a kind of ancient coin', 'the past tense of be'], answer: '热心人', explain: '对的是「热心人」。' },
      { id: 'enthusiast.q3', senseId: 'enthusiast.s1', errorType: 'grammar', type: '词义选择', prompt: 'enthusiast 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'enthusiast.q4', senseId: 'enthusiast.s1', errorType: 'meaning', type: '词源', prompt: '记 enthusiast 时，哪句更稳妥？', options: ['先锁住「热心人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热心人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热心人'] },
  });

  D('enthusiastic', {
    etymology: {
      origin: '英语派生：enthusiast + -ic，词性转到「热情的」。',
      prefix: null,
      root: { text: 'enthusiast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'enthusiastic', text: '英语派生：enthusiast + -ic，词性转到「热情的」。' },
        { label: '现在', text: '核心用法是：热情的。' },
      ],
      formationLogic: '先认词干 enthusiast，再看词尾。',
      mnemonic: '看到 enthusiastic，先说出「热情的」。',
      note: '先认词干 enthusiast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was enthusiastic.', chinese: '即使是初读者也能看出，这个结果是热情的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enthusiastic.s1', en: 'They wanted a enthusiastic answer, not a long speech.', zh: '他们要一个热情的的答复，不要长篇发言。', structure: 'enthusiastic / 表示 / 热情的', grammar: 'adjective，围绕「热情的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are enthusiastic.', right: 'The news is enthusiastic.', reason: 'news 作主语时动词用单数。', rule: '先确定 enthusiastic 是adjective，再套「热情的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enthusiastic.q1', senseId: 'enthusiastic.s1', errorType: 'meaning', type: '词义选择', prompt: '「enthusiastic」在本条的核心意思是：', options: ['热情的', '完全相反的意思', '一种古代钱币'], answer: '热情的', explain: 'enthusiastic：热情的。' },
      { id: 'enthusiastic.q2', senseId: 'enthusiastic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enthusiastic?', options: ['热情的', 'a kind of ancient coin', 'the past tense of be'], answer: '热情的', explain: '对的是「热情的」。' },
      { id: 'enthusiastic.q3', senseId: 'enthusiastic.s1', errorType: 'grammar', type: '词义选择', prompt: 'enthusiastic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'enthusiastic.q4', senseId: 'enthusiastic.s1', errorType: 'meaning', type: '词源', prompt: '记 enthusiastic 时，哪句更稳妥？', options: ['先锁住「热情的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热情的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热情的'] },
  });

  D('entice', {
    etymology: {
      origin: '现代英语常用词「entice」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entice', gloss: '诱使' },
      suffix: null,
      history: [
        { label: 'entice', text: '现代英语常用词「entice」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：诱使。' },
      ],
      formationLogic: '核心义：诱使。',
      mnemonic: '看到 entice，先说出「诱使」。',
      note: '核心义：诱使。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entice before the office closed.', chinese: '他们同意在办公室关门前做这件事：诱使。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entice.s1', en: 'The deadline forced the team to entice that afternoon.', zh: '截止日期逼着小组在那天下午诱使。', structure: 'entice / 表示 / 诱使', grammar: 'verb，围绕「诱使」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enticeed it yesterday without checking the real past form.', right: 'Check the past form of "entice" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entice 是verb，再套「诱使」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entice.q1', senseId: 'entice.s1', errorType: 'meaning', type: '词义选择', prompt: '「entice」在本条的核心意思是：', options: ['诱使', '完全相反的意思', '一种古代钱币'], answer: '诱使', explain: 'entice：诱使。' },
      { id: 'entice.q2', senseId: 'entice.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entice?', options: ['诱使', 'a kind of ancient coin', 'the past tense of be'], answer: '诱使', explain: '对的是「诱使」。' },
      { id: 'entice.q3', senseId: 'entice.s1', errorType: 'grammar', type: '词义选择', prompt: 'entice 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entice.q4', senseId: 'entice.s1', errorType: 'meaning', type: '词源', prompt: '记 entice 时，哪句更稳妥？', options: ['先锁住「诱使」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「诱使」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诱使'] },
  });

  D('entire', {
    etymology: {
      origin: '现代英语常用词「entire」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entire', gloss: '全部的' },
      suffix: null,
      history: [
        { label: 'entire', text: '现代英语常用词「entire」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：全部的。' },
      ],
      formationLogic: '核心义：全部的。',
      mnemonic: '看到 entire，先说出「全部的」。',
      note: '核心义：全部的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was entire.', chinese: '即使是初读者也能看出，这个结果是全部的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entire.s1', en: 'They wanted a entire answer, not a long speech.', zh: '他们要一个全部的的答复，不要长篇发言。', structure: 'entire / 表示 / 全部的', grammar: 'adjective，围绕「全部的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are entire.', right: 'The news is entire.', reason: 'news 作主语时动词用单数。', rule: '先确定 entire 是adjective，再套「全部的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entire.q1', senseId: 'entire.s1', errorType: 'meaning', type: '词义选择', prompt: '「entire」在本条的核心意思是：', options: ['全部的', '完全相反的意思', '一种古代钱币'], answer: '全部的', explain: 'entire：全部的。' },
      { id: 'entire.q2', senseId: 'entire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entire?', options: ['全部的', 'a kind of ancient coin', 'the past tense of be'], answer: '全部的', explain: '对的是「全部的」。' },
      { id: 'entire.q3', senseId: 'entire.s1', errorType: 'grammar', type: '词义选择', prompt: 'entire 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'entire.q4', senseId: 'entire.s1', errorType: 'meaning', type: '词源', prompt: '记 entire 时，哪句更稳妥？', options: ['先锁住「全部的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全部的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全部的'] },
  });

  D('entirely', {
    etymology: {
      origin: '英语派生：entire + -ly，词性转到「完全地」。',
      prefix: null,
      root: { text: 'entire', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'entirely', text: '英语派生：entire + -ly，词性转到「完全地」。' },
        { label: '现在', text: '核心用法是：完全地。' },
      ],
      formationLogic: '先认词干 entire，再看词尾。',
      mnemonic: '看到 entirely，先说出「完全地」。',
      note: '先认词干 entire，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule entirely, and the class followed.', chinese: '她把规则讲清楚了（完全地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entirely.s1', en: 'He nodded entirely and returned to the notes.', zh: '他完全地地点了点头，又回去看笔记。', structure: 'entirely / 表示 / 完全地', grammar: 'adverb，围绕「完全地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very entirelyly in the meeting.', right: 'She spoke entirely in the meeting.', reason: 'entirely 已经是副词，不要再加 -ly。', rule: '先确定 entirely 是adverb，再套「完全地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entirely.q1', senseId: 'entirely.s1', errorType: 'meaning', type: '词义选择', prompt: '「entirely」在本条的核心意思是：', options: ['完全地', '完全相反的意思', '一种古代钱币'], answer: '完全地', explain: 'entirely：完全地。' },
      { id: 'entirely.q2', senseId: 'entirely.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entirely?', options: ['完全地', 'a kind of ancient coin', 'the past tense of be'], answer: '完全地', explain: '对的是「完全地」。' },
      { id: 'entirely.q3', senseId: 'entirely.s1', errorType: 'grammar', type: '词义选择', prompt: 'entirely 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'entirely.q4', senseId: 'entirely.s1', errorType: 'meaning', type: '词源', prompt: '记 entirely 时，哪句更稳妥？', options: ['先锁住「完全地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完全地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完全地'] },
  });

  D('entirety', {
    etymology: {
      origin: '现代英语常用词「entirety」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entirety', gloss: '全部' },
      suffix: null,
      history: [
        { label: 'entirety', text: '现代英语常用词「entirety」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：全部。' },
      ],
      formationLogic: '核心义：全部。',
      mnemonic: '看到 entirety，先说出「全部」。',
      note: '核心义：全部。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entirety.', chinese: '这一章反复回到同一个点：全部。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entirety.s1', en: 'Without that entirety, the next paragraph is hard to follow.', zh: '没有这个全部，下一段会很难读。', structure: 'entirety / 表示 / 全部', grammar: 'noun，围绕「全部」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entirety.', right: 'He gave me some advice about the entirety.', reason: 'advice 不可数。名词 entirety 的单复数按词典词形记。', rule: '先确定 entirety 是noun，再套「全部」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entirety.q1', senseId: 'entirety.s1', errorType: 'meaning', type: '词义选择', prompt: '「entirety」在本条的核心意思是：', options: ['全部', '完全相反的意思', '一种古代钱币'], answer: '全部', explain: 'entirety：全部。' },
      { id: 'entirety.q2', senseId: 'entirety.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entirety?', options: ['全部', 'a kind of ancient coin', 'the past tense of be'], answer: '全部', explain: '对的是「全部」。' },
      { id: 'entirety.q3', senseId: 'entirety.s1', errorType: 'grammar', type: '词义选择', prompt: 'entirety 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entirety.q4', senseId: 'entirety.s1', errorType: 'meaning', type: '词源', prompt: '记 entirety 时，哪句更稳妥？', options: ['先锁住「全部」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全部」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全部'] },
  });

  D('entitle', {
    etymology: {
      origin: '现代英语常用词「entitle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entitle', gloss: '使有权' },
      suffix: null,
      history: [
        { label: 'entitle', text: '现代英语常用词「entitle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使有权。' },
      ],
      formationLogic: '核心义：使有权。',
      mnemonic: '看到 entitle，先说出「使有权」。',
      note: '核心义：使有权。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entitle before the office closed.', chinese: '他们同意在办公室关门前做这件事：使有权。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entitle.s1', en: 'The deadline forced the team to entitle that afternoon.', zh: '截止日期逼着小组在那天下午使有权。', structure: 'entitle / 表示 / 使有权', grammar: 'verb，围绕「使有权」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entitleed it yesterday without checking the real past form.', right: 'Check the past form of "entitle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entitle 是verb，再套「使有权」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entitle.q1', senseId: 'entitle.s1', errorType: 'meaning', type: '词义选择', prompt: '「entitle」在本条的核心意思是：', options: ['使有权', '完全相反的意思', '一种古代钱币'], answer: '使有权', explain: 'entitle：使有权。' },
      { id: 'entitle.q2', senseId: 'entitle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entitle?', options: ['使有权', 'a kind of ancient coin', 'the past tense of be'], answer: '使有权', explain: '对的是「使有权」。' },
      { id: 'entitle.q3', senseId: 'entitle.s1', errorType: 'grammar', type: '词义选择', prompt: 'entitle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entitle.q4', senseId: 'entitle.s1', errorType: 'meaning', type: '词源', prompt: '记 entitle 时，哪句更稳妥？', options: ['先锁住「使有权」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使有权」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使有权'] },
  });

  D('entitled', {
    etymology: {
      origin: '现代英语常用词「entitled」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entitled', gloss: '有资格的' },
      suffix: null,
      history: [
        { label: 'entitled', text: '现代英语常用词「entitled」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：有资格的。' },
      ],
      formationLogic: '核心义：有资格的。',
      mnemonic: '看到 entitled，先说出「有资格的」。',
      note: '核心义：有资格的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was entitled.', chinese: '即使是初读者也能看出，这个结果是有资格的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entitled.s1', en: 'They wanted a entitled answer, not a long speech.', zh: '他们要一个有资格的的答复，不要长篇发言。', structure: 'entitled / 表示 / 有资格的', grammar: 'adjective，围绕「有资格的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are entitled.', right: 'The news is entitled.', reason: 'news 作主语时动词用单数。', rule: '先确定 entitled 是adjective，再套「有资格的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entitled.q1', senseId: 'entitled.s1', errorType: 'meaning', type: '词义选择', prompt: '「entitled」在本条的核心意思是：', options: ['有资格的', '完全相反的意思', '一种古代钱币'], answer: '有资格的', explain: 'entitled：有资格的。' },
      { id: 'entitled.q2', senseId: 'entitled.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entitled?', options: ['有资格的', 'a kind of ancient coin', 'the past tense of be'], answer: '有资格的', explain: '对的是「有资格的」。' },
      { id: 'entitled.q3', senseId: 'entitled.s1', errorType: 'grammar', type: '词义选择', prompt: 'entitled 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'entitled.q4', senseId: 'entitled.s1', errorType: 'meaning', type: '词源', prompt: '记 entitled 时，哪句更稳妥？', options: ['先锁住「有资格的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有资格的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有资格的'] },
  });

  D('entitlement', {
    etymology: {
      origin: '英语派生：entitle + -ment，词性转到「权利」。',
      prefix: null,
      root: { text: 'entitle', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'entitlement', text: '英语派生：entitle + -ment，词性转到「权利」。' },
        { label: '现在', text: '核心用法是：权利。' },
      ],
      formationLogic: '先认词干 entitle，再看词尾。',
      mnemonic: '看到 entitlement，先说出「权利」。',
      note: '先认词干 entitle，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entitlement.', chinese: '这一章反复回到同一个点：权利。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entitlement.s1', en: 'Without that entitlement, the next paragraph is hard to follow.', zh: '没有这个权利，下一段会很难读。', structure: 'entitlement / 表示 / 权利', grammar: 'noun，围绕「权利」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entitlement.', right: 'He gave me some advice about the entitlement.', reason: 'advice 不可数。名词 entitlement 的单复数按词典词形记。', rule: '先确定 entitlement 是noun，再套「权利」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entitlement.q1', senseId: 'entitlement.s1', errorType: 'meaning', type: '词义选择', prompt: '「entitlement」在本条的核心意思是：', options: ['权利', '完全相反的意思', '一种古代钱币'], answer: '权利', explain: 'entitlement：权利。' },
      { id: 'entitlement.q2', senseId: 'entitlement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entitlement?', options: ['权利', 'a kind of ancient coin', 'the past tense of be'], answer: '权利', explain: '对的是「权利」。' },
      { id: 'entitlement.q3', senseId: 'entitlement.s1', errorType: 'grammar', type: '词义选择', prompt: 'entitlement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entitlement.q4', senseId: 'entitlement.s1', errorType: 'meaning', type: '词源', prompt: '记 entitlement 时，哪句更稳妥？', options: ['先锁住「权利」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「权利」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['权利'] },
  });

  D('entity', {
    etymology: {
      origin: '英语派生：ent + -ity，词性转到「实体」。',
      prefix: null,
      root: { text: 'ent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'entity', text: '英语派生：ent + -ity，词性转到「实体」。' },
        { label: '现在', text: '核心用法是：实体。' },
      ],
      formationLogic: '先认词干 ent，再看词尾。',
      mnemonic: '看到 entity，先说出「实体」。',
      note: '先认词干 ent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entity.', chinese: '这一章反复回到同一个点：实体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entity.s1', en: 'Without that entity, the next paragraph is hard to follow.', zh: '没有这个实体，下一段会很难读。', structure: 'entity / 表示 / 实体', grammar: 'noun，围绕「实体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entity.', right: 'He gave me some advice about the entity.', reason: 'advice 不可数。名词 entity 的单复数按词典词形记。', rule: '先确定 entity 是noun，再套「实体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entity.q1', senseId: 'entity.s1', errorType: 'meaning', type: '词义选择', prompt: '「entity」在本条的核心意思是：', options: ['实体', '完全相反的意思', '一种古代钱币'], answer: '实体', explain: 'entity：实体。' },
      { id: 'entity.q2', senseId: 'entity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entity?', options: ['实体', 'a kind of ancient coin', 'the past tense of be'], answer: '实体', explain: '对的是「实体」。' },
      { id: 'entity.q3', senseId: 'entity.s1', errorType: 'grammar', type: '词义选择', prompt: 'entity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entity.q4', senseId: 'entity.s1', errorType: 'meaning', type: '词源', prompt: '记 entity 时，哪句更稳妥？', options: ['先锁住「实体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「实体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['实体'] },
  });

  D('entrails', {
    etymology: {
      origin: '现代英语常用词「entrails」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entrails', gloss: '内脏' },
      suffix: null,
      history: [
        { label: 'entrails', text: '现代英语常用词「entrails」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：内脏。' },
      ],
      formationLogic: '核心义：内脏。',
      mnemonic: '看到 entrails，先说出「内脏」。',
      note: '核心义：内脏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entrails.', chinese: '这一章反复回到同一个点：内脏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entrails.s1', en: 'Without that entrails, the next paragraph is hard to follow.', zh: '没有这个内脏，下一段会很难读。', structure: 'entrails / 表示 / 内脏', grammar: 'noun，围绕「内脏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entrails.', right: 'He gave me some advice about the entrails.', reason: 'advice 不可数。名词 entrails 的单复数按词典词形记。', rule: '先确定 entrails 是noun，再套「内脏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entrails.q1', senseId: 'entrails.s1', errorType: 'meaning', type: '词义选择', prompt: '「entrails」在本条的核心意思是：', options: ['内脏', '完全相反的意思', '一种古代钱币'], answer: '内脏', explain: 'entrails：内脏。' },
      { id: 'entrails.q2', senseId: 'entrails.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entrails?', options: ['内脏', 'a kind of ancient coin', 'the past tense of be'], answer: '内脏', explain: '对的是「内脏」。' },
      { id: 'entrails.q3', senseId: 'entrails.s1', errorType: 'grammar', type: '词义选择', prompt: 'entrails 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entrails.q4', senseId: 'entrails.s1', errorType: 'meaning', type: '词源', prompt: '记 entrails 时，哪句更稳妥？', options: ['先锁住「内脏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「内脏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['内脏'] },
  });

  D('entrance', {
    etymology: {
      origin: '英语派生：entr + -ance，词性转到「入口」。',
      prefix: null,
      root: { text: 'entr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'entrance', text: '英语派生：entr + -ance，词性转到「入口」。' },
        { label: '现在', text: '核心用法是：入口。' },
      ],
      formationLogic: '先认词干 entr，再看词尾。',
      mnemonic: '看到 entrance，先说出「入口」。',
      note: '先认词干 entr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entrance.', chinese: '这一章反复回到同一个点：入口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entrance.s1', en: 'Without that entrance, the next paragraph is hard to follow.', zh: '没有这个入口，下一段会很难读。', structure: 'entrance / 表示 / 入口', grammar: 'noun，围绕「入口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entrance.', right: 'He gave me some advice about the entrance.', reason: 'advice 不可数。名词 entrance 的单复数按词典词形记。', rule: '先确定 entrance 是noun，再套「入口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entrance.q1', senseId: 'entrance.s1', errorType: 'meaning', type: '词义选择', prompt: '「entrance」在本条的核心意思是：', options: ['入口', '完全相反的意思', '一种古代钱币'], answer: '入口', explain: 'entrance：入口。' },
      { id: 'entrance.q2', senseId: 'entrance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entrance?', options: ['入口', 'a kind of ancient coin', 'the past tense of be'], answer: '入口', explain: '对的是「入口」。' },
      { id: 'entrance.q3', senseId: 'entrance.s1', errorType: 'grammar', type: '词义选择', prompt: 'entrance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entrance.q4', senseId: 'entrance.s1', errorType: 'meaning', type: '词源', prompt: '记 entrance 时，哪句更稳妥？', options: ['先锁住「入口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「入口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['入口'] },
  });

  D('entrench', {
    etymology: {
      origin: '现代英语常用词「entrench」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entrench', gloss: '使根深蒂固' },
      suffix: null,
      history: [
        { label: 'entrench', text: '现代英语常用词「entrench」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使根深蒂固。' },
      ],
      formationLogic: '核心义：使根深蒂固。',
      mnemonic: '看到 entrench，先说出「使根深蒂固」。',
      note: '核心义：使根深蒂固。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entrench before the office closed.', chinese: '他们同意在办公室关门前做这件事：使根深蒂固。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entrench.s1', en: 'The deadline forced the team to entrench that afternoon.', zh: '截止日期逼着小组在那天下午使根深蒂固。', structure: 'entrench / 表示 / 使根深蒂固', grammar: 'verb，围绕「使根深蒂固」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entrenched it yesterday without checking the real past form.', right: 'Check the past form of "entrench" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entrench 是verb，再套「使根深蒂固」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entrench.q1', senseId: 'entrench.s1', errorType: 'meaning', type: '词义选择', prompt: '「entrench」在本条的核心意思是：', options: ['使根深蒂固', '完全相反的意思', '一种古代钱币'], answer: '使根深蒂固', explain: 'entrench：使根深蒂固。' },
      { id: 'entrench.q2', senseId: 'entrench.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entrench?', options: ['使根深蒂固', 'a kind of ancient coin', 'the past tense of be'], answer: '使根深蒂固', explain: '对的是「使根深蒂固」。' },
      { id: 'entrench.q3', senseId: 'entrench.s1', errorType: 'grammar', type: '词义选择', prompt: 'entrench 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entrench.q4', senseId: 'entrench.s1', errorType: 'meaning', type: '词源', prompt: '记 entrench 时，哪句更稳妥？', options: ['先锁住「使根深蒂固」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使根深蒂固」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使根深蒂固'] },
  });

  D('entrepreneur', {
    etymology: {
      origin: '现代英语常用词「entrepreneur」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entrepreneur', gloss: '企业家' },
      suffix: null,
      history: [
        { label: 'entrepreneur', text: '现代英语常用词「entrepreneur」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：企业家。' },
      ],
      formationLogic: '核心义：企业家。',
      mnemonic: '看到 entrepreneur，先说出「企业家」。',
      note: '核心义：企业家。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entrepreneur.', chinese: '这一章反复回到同一个点：企业家。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entrepreneur.s1', en: 'Without that entrepreneur, the next paragraph is hard to follow.', zh: '没有这个企业家，下一段会很难读。', structure: 'entrepreneur / 表示 / 企业家', grammar: 'noun，围绕「企业家」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entrepreneur.', right: 'He gave me some advice about the entrepreneur.', reason: 'advice 不可数。名词 entrepreneur 的单复数按词典词形记。', rule: '先确定 entrepreneur 是noun，再套「企业家」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entrepreneur.q1', senseId: 'entrepreneur.s1', errorType: 'meaning', type: '词义选择', prompt: '「entrepreneur」在本条的核心意思是：', options: ['企业家', '完全相反的意思', '一种古代钱币'], answer: '企业家', explain: 'entrepreneur：企业家。' },
      { id: 'entrepreneur.q2', senseId: 'entrepreneur.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entrepreneur?', options: ['企业家', 'a kind of ancient coin', 'the past tense of be'], answer: '企业家', explain: '对的是「企业家」。' },
      { id: 'entrepreneur.q3', senseId: 'entrepreneur.s1', errorType: 'grammar', type: '词义选择', prompt: 'entrepreneur 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entrepreneur.q4', senseId: 'entrepreneur.s1', errorType: 'meaning', type: '词源', prompt: '记 entrepreneur 时，哪句更稳妥？', options: ['先锁住「企业家」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「企业家」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['企业家'] },
  });

  D('entrust', {
    etymology: {
      origin: '现代英语常用词「entrust」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entrust', gloss: '委托' },
      suffix: null,
      history: [
        { label: 'entrust', text: '现代英语常用词「entrust」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：委托。' },
      ],
      formationLogic: '核心义：委托。',
      mnemonic: '看到 entrust，先说出「委托」。',
      note: '核心义：委托。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to entrust before the office closed.', chinese: '他们同意在办公室关门前做这件事：委托。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entrust.s1', en: 'The deadline forced the team to entrust that afternoon.', zh: '截止日期逼着小组在那天下午委托。', structure: 'entrust / 表示 / 委托', grammar: 'verb，围绕「委托」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She entrusted it yesterday without checking the real past form.', right: 'Check the past form of "entrust" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 entrust 是verb，再套「委托」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entrust.q1', senseId: 'entrust.s1', errorType: 'meaning', type: '词义选择', prompt: '「entrust」在本条的核心意思是：', options: ['委托', '完全相反的意思', '一种古代钱币'], answer: '委托', explain: 'entrust：委托。' },
      { id: 'entrust.q2', senseId: 'entrust.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entrust?', options: ['委托', 'a kind of ancient coin', 'the past tense of be'], answer: '委托', explain: '对的是「委托」。' },
      { id: 'entrust.q3', senseId: 'entrust.s1', errorType: 'grammar', type: '词义选择', prompt: 'entrust 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'entrust.q4', senseId: 'entrust.s1', errorType: 'meaning', type: '词源', prompt: '记 entrust 时，哪句更稳妥？', options: ['先锁住「委托」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「委托」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['委托'] },
  });

  D('entry', {
    etymology: {
      origin: '现代英语常用词「entry」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'entry', gloss: '进入' },
      suffix: null,
      history: [
        { label: 'entry', text: '现代英语常用词「entry」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：进入。' },
      ],
      formationLogic: '核心义：进入。',
      mnemonic: '看到 entry，先说出「进入」。',
      note: '核心义：进入。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one entry.', chinese: '这一章反复回到同一个点：进入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'entry.s1', en: 'Without that entry, the next paragraph is hard to follow.', zh: '没有这个进入，下一段会很难读。', structure: 'entry / 表示 / 进入', grammar: 'noun，围绕「进入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the entry.', right: 'He gave me some advice about the entry.', reason: 'advice 不可数。名词 entry 的单复数按词典词形记。', rule: '先确定 entry 是noun，再套「进入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'entry.q1', senseId: 'entry.s1', errorType: 'meaning', type: '词义选择', prompt: '「entry」在本条的核心意思是：', options: ['进入', '完全相反的意思', '一种古代钱币'], answer: '进入', explain: 'entry：进入。' },
      { id: 'entry.q2', senseId: 'entry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches entry?', options: ['进入', 'a kind of ancient coin', 'the past tense of be'], answer: '进入', explain: '对的是「进入」。' },
      { id: 'entry.q3', senseId: 'entry.s1', errorType: 'grammar', type: '词义选择', prompt: 'entry 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'entry.q4', senseId: 'entry.s1', errorType: 'meaning', type: '词源', prompt: '记 entry 时，哪句更稳妥？', options: ['先锁住「进入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进入'] },
  });

  D('enumerate', {
    etymology: {
      origin: '现代英语常用词「enumerate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'enumerate', gloss: '列举' },
      suffix: null,
      history: [
        { label: 'enumerate', text: '现代英语常用词「enumerate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：列举。' },
      ],
      formationLogic: '核心义：列举。',
      mnemonic: '看到 enumerate，先说出「列举」。',
      note: '核心义：列举。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to enumerate before the office closed.', chinese: '他们同意在办公室关门前做这件事：列举。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'enumerate.s1', en: 'The deadline forced the team to enumerate that afternoon.', zh: '截止日期逼着小组在那天下午列举。', structure: 'enumerate / 表示 / 列举', grammar: 'verb，围绕「列举」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enumerateed it yesterday without checking the real past form.', right: 'Check the past form of "enumerate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 enumerate 是verb，再套「列举」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'enumerate.q1', senseId: 'enumerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「enumerate」在本条的核心意思是：', options: ['列举', '完全相反的意思', '一种古代钱币'], answer: '列举', explain: 'enumerate：列举。' },
      { id: 'enumerate.q2', senseId: 'enumerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches enumerate?', options: ['列举', 'a kind of ancient coin', 'the past tense of be'], answer: '列举', explain: '对的是「列举」。' },
      { id: 'enumerate.q3', senseId: 'enumerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'enumerate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'enumerate.q4', senseId: 'enumerate.s1', errorType: 'meaning', type: '词源', prompt: '记 enumerate 时，哪句更稳妥？', options: ['先锁住「列举」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「列举」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['列举'] },
  });

  D('envelop', {
    etymology: {
      origin: '现代英语常用词「envelop」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'envelop', gloss: '包住' },
      suffix: null,
      history: [
        { label: 'envelop', text: '现代英语常用词「envelop」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：包住。' },
      ],
      formationLogic: '核心义：包住。',
      mnemonic: '看到 envelop，先说出「包住」。',
      note: '核心义：包住。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to envelop before the office closed.', chinese: '他们同意在办公室关门前做这件事：包住。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'envelop.s1', en: 'The deadline forced the team to envelop that afternoon.', zh: '截止日期逼着小组在那天下午包住。', structure: 'envelop / 表示 / 包住', grammar: 'verb，围绕「包住」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She enveloped it yesterday without checking the real past form.', right: 'Check the past form of "envelop" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 envelop 是verb，再套「包住」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'envelop.q1', senseId: 'envelop.s1', errorType: 'meaning', type: '词义选择', prompt: '「envelop」在本条的核心意思是：', options: ['包住', '完全相反的意思', '一种古代钱币'], answer: '包住', explain: 'envelop：包住。' },
      { id: 'envelop.q2', senseId: 'envelop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches envelop?', options: ['包住', 'a kind of ancient coin', 'the past tense of be'], answer: '包住', explain: '对的是「包住」。' },
      { id: 'envelop.q3', senseId: 'envelop.s1', errorType: 'grammar', type: '词义选择', prompt: 'envelop 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'envelop.q4', senseId: 'envelop.s1', errorType: 'meaning', type: '词源', prompt: '记 envelop 时，哪句更稳妥？', options: ['先锁住「包住」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「包住」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['包住'] },
  });

  D('envelope', {
    etymology: {
      origin: '现代英语常用词「envelope」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'envelope', gloss: '信封' },
      suffix: null,
      history: [
        { label: 'envelope', text: '现代英语常用词「envelope」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：信封。' },
      ],
      formationLogic: '核心义：信封。',
      mnemonic: '看到 envelope，先说出「信封」。',
      note: '核心义：信封。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one envelope.', chinese: '这一章反复回到同一个点：信封。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'envelope.s1', en: 'Without that envelope, the next paragraph is hard to follow.', zh: '没有这个信封，下一段会很难读。', structure: 'envelope / 表示 / 信封', grammar: 'noun，围绕「信封」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the envelope.', right: 'He gave me some advice about the envelope.', reason: 'advice 不可数。名词 envelope 的单复数按词典词形记。', rule: '先确定 envelope 是noun，再套「信封」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'envelope.q1', senseId: 'envelope.s1', errorType: 'meaning', type: '词义选择', prompt: '「envelope」在本条的核心意思是：', options: ['信封', '完全相反的意思', '一种古代钱币'], answer: '信封', explain: 'envelope：信封。' },
      { id: 'envelope.q2', senseId: 'envelope.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches envelope?', options: ['信封', 'a kind of ancient coin', 'the past tense of be'], answer: '信封', explain: '对的是「信封」。' },
      { id: 'envelope.q3', senseId: 'envelope.s1', errorType: 'grammar', type: '词义选择', prompt: 'envelope 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'envelope.q4', senseId: 'envelope.s1', errorType: 'meaning', type: '词源', prompt: '记 envelope 时，哪句更稳妥？', options: ['先锁住「信封」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「信封」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['信封'] },
  });

  D('envious', {
    etymology: {
      origin: '英语派生：envi + -ous，词性转到「羡慕的」。',
      prefix: null,
      root: { text: 'envi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'envious', text: '英语派生：envi + -ous，词性转到「羡慕的」。' },
        { label: '现在', text: '核心用法是：羡慕的。' },
      ],
      formationLogic: '先认词干 envi，再看词尾。',
      mnemonic: '看到 envious，先说出「羡慕的」。',
      note: '先认词干 envi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was envious.', chinese: '即使是初读者也能看出，这个结果是羡慕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'envious.s1', en: 'They wanted a envious answer, not a long speech.', zh: '他们要一个羡慕的的答复，不要长篇发言。', structure: 'envious / 表示 / 羡慕的', grammar: 'adjective，围绕「羡慕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are envious.', right: 'The news is envious.', reason: 'news 作主语时动词用单数。', rule: '先确定 envious 是adjective，再套「羡慕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'envious.q1', senseId: 'envious.s1', errorType: 'meaning', type: '词义选择', prompt: '「envious」在本条的核心意思是：', options: ['羡慕的', '完全相反的意思', '一种古代钱币'], answer: '羡慕的', explain: 'envious：羡慕的。' },
      { id: 'envious.q2', senseId: 'envious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches envious?', options: ['羡慕的', 'a kind of ancient coin', 'the past tense of be'], answer: '羡慕的', explain: '对的是「羡慕的」。' },
      { id: 'envious.q3', senseId: 'envious.s1', errorType: 'grammar', type: '词义选择', prompt: 'envious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'envious.q4', senseId: 'envious.s1', errorType: 'meaning', type: '词源', prompt: '记 envious 时，哪句更稳妥？', options: ['先锁住「羡慕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「羡慕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['羡慕的'] },
  });

  D('environment', {
    etymology: {
      origin: '英语派生：environ + -ment，词性转到「环境」。',
      prefix: null,
      root: { text: 'environ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'environment', text: '英语派生：environ + -ment，词性转到「环境」。' },
        { label: '现在', text: '核心用法是：环境。' },
      ],
      formationLogic: '先认词干 environ，再看词尾。',
      mnemonic: '看到 environment，先说出「环境」。',
      note: '先认词干 environ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one environment.', chinese: '这一章反复回到同一个点：环境。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'environment.s1', en: 'Without that environment, the next paragraph is hard to follow.', zh: '没有这个环境，下一段会很难读。', structure: 'environment / 表示 / 环境', grammar: 'noun，围绕「环境」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the environment.', right: 'He gave me some advice about the environment.', reason: 'advice 不可数。名词 environment 的单复数按词典词形记。', rule: '先确定 environment 是noun，再套「环境」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'environment.q1', senseId: 'environment.s1', errorType: 'meaning', type: '词义选择', prompt: '「environment」在本条的核心意思是：', options: ['环境', '完全相反的意思', '一种古代钱币'], answer: '环境', explain: 'environment：环境。' },
      { id: 'environment.q2', senseId: 'environment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches environment?', options: ['环境', 'a kind of ancient coin', 'the past tense of be'], answer: '环境', explain: '对的是「环境」。' },
      { id: 'environment.q3', senseId: 'environment.s1', errorType: 'grammar', type: '词义选择', prompt: 'environment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'environment.q4', senseId: 'environment.s1', errorType: 'meaning', type: '词源', prompt: '记 environment 时，哪句更稳妥？', options: ['先锁住「环境」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「环境」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['环境'] },
  });

  D('envisage', {
    etymology: {
      origin: '现代英语常用词「envisage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'envisage', gloss: '设想' },
      suffix: null,
      history: [
        { label: 'envisage', text: '现代英语常用词「envisage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：设想。' },
      ],
      formationLogic: '核心义：设想。',
      mnemonic: '看到 envisage，先说出「设想」。',
      note: '核心义：设想。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to envisage before the office closed.', chinese: '他们同意在办公室关门前做这件事：设想。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'envisage.s1', en: 'The deadline forced the team to envisage that afternoon.', zh: '截止日期逼着小组在那天下午设想。', structure: 'envisage / 表示 / 设想', grammar: 'verb，围绕「设想」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She envisageed it yesterday without checking the real past form.', right: 'Check the past form of "envisage" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 envisage 是verb，再套「设想」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'envisage.q1', senseId: 'envisage.s1', errorType: 'meaning', type: '词义选择', prompt: '「envisage」在本条的核心意思是：', options: ['设想', '完全相反的意思', '一种古代钱币'], answer: '设想', explain: 'envisage：设想。' },
      { id: 'envisage.q2', senseId: 'envisage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches envisage?', options: ['设想', 'a kind of ancient coin', 'the past tense of be'], answer: '设想', explain: '对的是「设想」。' },
      { id: 'envisage.q3', senseId: 'envisage.s1', errorType: 'grammar', type: '词义选择', prompt: 'envisage 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'envisage.q4', senseId: 'envisage.s1', errorType: 'meaning', type: '词源', prompt: '记 envisage 时，哪句更稳妥？', options: ['先锁住「设想」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设想」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设想'] },
  });

  D('envoy', {
    etymology: {
      origin: '现代英语常用词「envoy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'envoy', gloss: '使者' },
      suffix: null,
      history: [
        { label: 'envoy', text: '现代英语常用词「envoy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使者。' },
      ],
      formationLogic: '核心义：使者。',
      mnemonic: '看到 envoy，先说出「使者」。',
      note: '核心义：使者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one envoy.', chinese: '这一章反复回到同一个点：使者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'envoy.s1', en: 'Without that envoy, the next paragraph is hard to follow.', zh: '没有这个使者，下一段会很难读。', structure: 'envoy / 表示 / 使者', grammar: 'noun，围绕「使者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the envoy.', right: 'He gave me some advice about the envoy.', reason: 'advice 不可数。名词 envoy 的单复数按词典词形记。', rule: '先确定 envoy 是noun，再套「使者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'envoy.q1', senseId: 'envoy.s1', errorType: 'meaning', type: '词义选择', prompt: '「envoy」在本条的核心意思是：', options: ['使者', '完全相反的意思', '一种古代钱币'], answer: '使者', explain: 'envoy：使者。' },
      { id: 'envoy.q2', senseId: 'envoy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches envoy?', options: ['使者', 'a kind of ancient coin', 'the past tense of be'], answer: '使者', explain: '对的是「使者」。' },
      { id: 'envoy.q3', senseId: 'envoy.s1', errorType: 'grammar', type: '词义选择', prompt: 'envoy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'envoy.q4', senseId: 'envoy.s1', errorType: 'meaning', type: '词源', prompt: '记 envoy 时，哪句更稳妥？', options: ['先锁住「使者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使者'] },
  });

  D('envy', {
    etymology: {
      origin: '现代英语常用词「envy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'envy', gloss: '羡慕' },
      suffix: null,
      history: [
        { label: 'envy', text: '现代英语常用词「envy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：羡慕。' },
      ],
      formationLogic: '核心义：羡慕。',
      mnemonic: '看到 envy，先说出「羡慕」。',
      note: '核心义：羡慕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to envy before the office closed.', chinese: '他们同意在办公室关门前做这件事：羡慕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'envy.s1', en: 'The deadline forced the team to envy that afternoon.', zh: '截止日期逼着小组在那天下午羡慕。', structure: 'envy / 表示 / 羡慕', grammar: 'verb，围绕「羡慕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She envyed it yesterday without checking the real past form.', right: 'Check the past form of "envy" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 envy 是verb，再套「羡慕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'envy.q1', senseId: 'envy.s1', errorType: 'meaning', type: '词义选择', prompt: '「envy」在本条的核心意思是：', options: ['羡慕', '完全相反的意思', '一种古代钱币'], answer: '羡慕', explain: 'envy：羡慕。' },
      { id: 'envy.q2', senseId: 'envy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches envy?', options: ['羡慕', 'a kind of ancient coin', 'the past tense of be'], answer: '羡慕', explain: '对的是「羡慕」。' },
      { id: 'envy.q3', senseId: 'envy.s1', errorType: 'grammar', type: '词义选择', prompt: 'envy 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'envy.q4', senseId: 'envy.s1', errorType: 'meaning', type: '词源', prompt: '记 envy 时，哪句更稳妥？', options: ['先锁住「羡慕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「羡慕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['羡慕'] },
  });

  D('epic', {
    etymology: {
      origin: '现代英语常用词「epic」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'epic', gloss: '史诗' },
      suffix: null,
      history: [
        { label: 'epic', text: '现代英语常用词「epic」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：史诗。' },
      ],
      formationLogic: '核心义：史诗。',
      mnemonic: '看到 epic，先说出「史诗」。',
      note: '核心义：史诗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one epic.', chinese: '这一章反复回到同一个点：史诗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'epic.s1', en: 'Without that epic, the next paragraph is hard to follow.', zh: '没有这个史诗，下一段会很难读。', structure: 'epic / 表示 / 史诗', grammar: 'noun，围绕「史诗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the epic.', right: 'He gave me some advice about the epic.', reason: 'advice 不可数。名词 epic 的单复数按词典词形记。', rule: '先确定 epic 是noun，再套「史诗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'epic.q1', senseId: 'epic.s1', errorType: 'meaning', type: '词义选择', prompt: '「epic」在本条的核心意思是：', options: ['史诗', '完全相反的意思', '一种古代钱币'], answer: '史诗', explain: 'epic：史诗。' },
      { id: 'epic.q2', senseId: 'epic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches epic?', options: ['史诗', 'a kind of ancient coin', 'the past tense of be'], answer: '史诗', explain: '对的是「史诗」。' },
      { id: 'epic.q3', senseId: 'epic.s1', errorType: 'grammar', type: '词义选择', prompt: 'epic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'epic.q4', senseId: 'epic.s1', errorType: 'meaning', type: '词源', prompt: '记 epic 时，哪句更稳妥？', options: ['先锁住「史诗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「史诗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['史诗'] },
  });

  D('epidemic', {
    etymology: {
      origin: '英语派生：epidem + -ic，词性转到「流行病」。',
      prefix: null,
      root: { text: 'epidem', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'epidemic', text: '英语派生：epidem + -ic，词性转到「流行病」。' },
        { label: '现在', text: '核心用法是：流行病。' },
      ],
      formationLogic: '先认词干 epidem，再看词尾。',
      mnemonic: '看到 epidemic，先说出「流行病」。',
      note: '先认词干 epidem，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one epidemic.', chinese: '这一章反复回到同一个点：流行病。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'epidemic.s1', en: 'Without that epidemic, the next paragraph is hard to follow.', zh: '没有这个流行病，下一段会很难读。', structure: 'epidemic / 表示 / 流行病', grammar: 'noun，围绕「流行病」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the epidemic.', right: 'He gave me some advice about the epidemic.', reason: 'advice 不可数。名词 epidemic 的单复数按词典词形记。', rule: '先确定 epidemic 是noun，再套「流行病」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'epidemic.q1', senseId: 'epidemic.s1', errorType: 'meaning', type: '词义选择', prompt: '「epidemic」在本条的核心意思是：', options: ['流行病', '完全相反的意思', '一种古代钱币'], answer: '流行病', explain: 'epidemic：流行病。' },
      { id: 'epidemic.q2', senseId: 'epidemic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches epidemic?', options: ['流行病', 'a kind of ancient coin', 'the past tense of be'], answer: '流行病', explain: '对的是「流行病」。' },
      { id: 'epidemic.q3', senseId: 'epidemic.s1', errorType: 'grammar', type: '词义选择', prompt: 'epidemic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'epidemic.q4', senseId: 'epidemic.s1', errorType: 'meaning', type: '词源', prompt: '记 epidemic 时，哪句更稳妥？', options: ['先锁住「流行病」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流行病」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流行病'] },
  });

  D('episode', {
    etymology: {
      origin: '现代英语常用词「episode」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'episode', gloss: '（电视剧、广播的）一集' },
      suffix: null,
      history: [
        { label: 'episode', text: '现代英语常用词「episode」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（电视剧、广播的）一集。' },
      ],
      formationLogic: '核心义：（电视剧、广播的）一集。',
      mnemonic: '看到 episode，先说出「（电视剧、广播的）一集」。',
      note: '核心义：（电视剧、广播的）一集。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one episode.', chinese: '这一章反复回到同一个点：（电视剧、广播的）一集。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'episode.s1', en: 'Without that episode, the next paragraph is hard to follow.', zh: '没有这个（电视剧、广播的）一集，下一段会很难读。', structure: 'episode / 表示 / （电视剧、广播的）一集', grammar: 'noun，围绕「（电视剧、广播的）一集」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the episode.', right: 'He gave me some advice about the episode.', reason: 'advice 不可数。名词 episode 的单复数按词典词形记。', rule: '先确定 episode 是noun，再套「（电视剧、广播的）一集」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'episode.q1', senseId: 'episode.s1', errorType: 'meaning', type: '词义选择', prompt: '「episode」在本条的核心意思是：', options: ['（电视剧、广播的）一集', '完全相反的意思', '一种古代钱币'], answer: '（电视剧、广播的）一集', explain: 'episode：（电视剧、广播的）一集。' },
      { id: 'episode.q2', senseId: 'episode.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches episode?', options: ['（电视剧、广播的）一集', 'a kind of ancient coin', 'the past tense of be'], answer: '（电视剧、广播的）一集', explain: '对的是「（电视剧、广播的）一集」。' },
      { id: 'episode.q3', senseId: 'episode.s1', errorType: 'grammar', type: '词义选择', prompt: 'episode 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'episode.q4', senseId: 'episode.s1', errorType: 'meaning', type: '词源', prompt: '记 episode 时，哪句更稳妥？', options: ['先锁住「（电视剧、广播的）一集」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（电视剧、广播的）一集」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（电视剧、广播的）一集'] },
  });

  D('epoch', {
    etymology: {
      origin: '现代英语常用词「epoch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'epoch', gloss: '时代' },
      suffix: null,
      history: [
        { label: 'epoch', text: '现代英语常用词「epoch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：时代。' },
      ],
      formationLogic: '核心义：时代。',
      mnemonic: '看到 epoch，先说出「时代」。',
      note: '核心义：时代。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one epoch.', chinese: '这一章反复回到同一个点：时代。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'epoch.s1', en: 'Without that epoch, the next paragraph is hard to follow.', zh: '没有这个时代，下一段会很难读。', structure: 'epoch / 表示 / 时代', grammar: 'noun，围绕「时代」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the epoch.', right: 'He gave me some advice about the epoch.', reason: 'advice 不可数。名词 epoch 的单复数按词典词形记。', rule: '先确定 epoch 是noun，再套「时代」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'epoch.q1', senseId: 'epoch.s1', errorType: 'meaning', type: '词义选择', prompt: '「epoch」在本条的核心意思是：', options: ['时代', '完全相反的意思', '一种古代钱币'], answer: '时代', explain: 'epoch：时代。' },
      { id: 'epoch.q2', senseId: 'epoch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches epoch?', options: ['时代', 'a kind of ancient coin', 'the past tense of be'], answer: '时代', explain: '对的是「时代」。' },
      { id: 'epoch.q3', senseId: 'epoch.s1', errorType: 'grammar', type: '词义选择', prompt: 'epoch 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'epoch.q4', senseId: 'epoch.s1', errorType: 'meaning', type: '词源', prompt: '记 epoch 时，哪句更稳妥？', options: ['先锁住「时代」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「时代」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['时代'] },
  });

  D('equal', {
    etymology: {
      origin: '英语派生：equ + -al，词性转到「相等的」。',
      prefix: null,
      root: { text: 'equ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'equal', text: '英语派生：equ + -al，词性转到「相等的」。' },
        { label: '现在', text: '核心用法是：相等的。' },
      ],
      formationLogic: '先认词干 equ，再看词尾。',
      mnemonic: '看到 equal，先说出「相等的」。',
      note: '先认词干 equ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was equal.', chinese: '即使是初读者也能看出，这个结果是相等的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equal.s1', en: 'They wanted a equal answer, not a long speech.', zh: '他们要一个相等的的答复，不要长篇发言。', structure: 'equal / 表示 / 相等的', grammar: 'adjective，围绕「相等的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are equal.', right: 'The news is equal.', reason: 'news 作主语时动词用单数。', rule: '先确定 equal 是adjective，再套「相等的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equal.q1', senseId: 'equal.s1', errorType: 'meaning', type: '词义选择', prompt: '「equal」在本条的核心意思是：', options: ['相等的', '完全相反的意思', '一种古代钱币'], answer: '相等的', explain: 'equal：相等的。' },
      { id: 'equal.q2', senseId: 'equal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equal?', options: ['相等的', 'a kind of ancient coin', 'the past tense of be'], answer: '相等的', explain: '对的是「相等的」。' },
      { id: 'equal.q3', senseId: 'equal.s1', errorType: 'grammar', type: '词义选择', prompt: 'equal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'equal.q4', senseId: 'equal.s1', errorType: 'meaning', type: '词源', prompt: '记 equal 时，哪句更稳妥？', options: ['先锁住「相等的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相等的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相等的'] },
  });

  D('equalize', {
    etymology: {
      origin: '现代英语常用词「equalize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'equalize', gloss: '使均等' },
      suffix: null,
      history: [
        { label: 'equalize', text: '现代英语常用词「equalize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使均等。' },
      ],
      formationLogic: '核心义：使均等。',
      mnemonic: '看到 equalize，先说出「使均等」。',
      note: '核心义：使均等。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to equalize before the office closed.', chinese: '他们同意在办公室关门前做这件事：使均等。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equalize.s1', en: 'The deadline forced the team to equalize that afternoon.', zh: '截止日期逼着小组在那天下午使均等。', structure: 'equalize / 表示 / 使均等', grammar: 'verb，围绕「使均等」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She equalizeed it yesterday without checking the real past form.', right: 'Check the past form of "equalize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 equalize 是verb，再套「使均等」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equalize.q1', senseId: 'equalize.s1', errorType: 'meaning', type: '词义选择', prompt: '「equalize」在本条的核心意思是：', options: ['使均等', '完全相反的意思', '一种古代钱币'], answer: '使均等', explain: 'equalize：使均等。' },
      { id: 'equalize.q2', senseId: 'equalize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equalize?', options: ['使均等', 'a kind of ancient coin', 'the past tense of be'], answer: '使均等', explain: '对的是「使均等」。' },
      { id: 'equalize.q3', senseId: 'equalize.s1', errorType: 'grammar', type: '词义选择', prompt: 'equalize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'equalize.q4', senseId: 'equalize.s1', errorType: 'meaning', type: '词源', prompt: '记 equalize 时，哪句更稳妥？', options: ['先锁住「使均等」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使均等」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使均等'] },
  });

  D('equally', {
    etymology: {
      origin: '英语派生：equal + -ly，词性转到「同样地」。',
      prefix: null,
      root: { text: 'equal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'equally', text: '英语派生：equal + -ly，词性转到「同样地」。' },
        { label: '现在', text: '核心用法是：同样地。' },
      ],
      formationLogic: '先认词干 equal，再看词尾。',
      mnemonic: '看到 equally，先说出「同样地」。',
      note: '先认词干 equal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule equally, and the class followed.', chinese: '她把规则讲清楚了（同样地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equally.s1', en: 'He nodded equally and returned to the notes.', zh: '他同样地地点了点头，又回去看笔记。', structure: 'equally / 表示 / 同样地', grammar: 'adverb，围绕「同样地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very equallyly in the meeting.', right: 'She spoke equally in the meeting.', reason: 'equally 已经是副词，不要再加 -ly。', rule: '先确定 equally 是adverb，再套「同样地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equally.q1', senseId: 'equally.s1', errorType: 'meaning', type: '词义选择', prompt: '「equally」在本条的核心意思是：', options: ['同样地', '完全相反的意思', '一种古代钱币'], answer: '同样地', explain: 'equally：同样地。' },
      { id: 'equally.q2', senseId: 'equally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equally?', options: ['同样地', 'a kind of ancient coin', 'the past tense of be'], answer: '同样地', explain: '对的是「同样地」。' },
      { id: 'equally.q3', senseId: 'equally.s1', errorType: 'grammar', type: '词义选择', prompt: 'equally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'equally.q4', senseId: 'equally.s1', errorType: 'meaning', type: '词源', prompt: '记 equally 时，哪句更稳妥？', options: ['先锁住「同样地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同样地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同样地'] },
  });

  D('equate', {
    etymology: {
      origin: '现代英语常用词「equate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'equate', gloss: '等同于' },
      suffix: null,
      history: [
        { label: 'equate', text: '现代英语常用词「equate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：等同于。' },
      ],
      formationLogic: '核心义：等同于。',
      mnemonic: '看到 equate，先说出「等同于」。',
      note: '核心义：等同于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to equate before the office closed.', chinese: '他们同意在办公室关门前做这件事：等同于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equate.s1', en: 'The deadline forced the team to equate that afternoon.', zh: '截止日期逼着小组在那天下午等同于。', structure: 'equate / 表示 / 等同于', grammar: 'verb，围绕「等同于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She equateed it yesterday without checking the real past form.', right: 'Check the past form of "equate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 equate 是verb，再套「等同于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equate.q1', senseId: 'equate.s1', errorType: 'meaning', type: '词义选择', prompt: '「equate」在本条的核心意思是：', options: ['等同于', '完全相反的意思', '一种古代钱币'], answer: '等同于', explain: 'equate：等同于。' },
      { id: 'equate.q2', senseId: 'equate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equate?', options: ['等同于', 'a kind of ancient coin', 'the past tense of be'], answer: '等同于', explain: '对的是「等同于」。' },
      { id: 'equate.q3', senseId: 'equate.s1', errorType: 'grammar', type: '词义选择', prompt: 'equate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'equate.q4', senseId: 'equate.s1', errorType: 'meaning', type: '词源', prompt: '记 equate 时，哪句更稳妥？', options: ['先锁住「等同于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「等同于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['等同于'] },
  });

  D('equation', {
    etymology: {
      origin: '英语派生：equa + -tion，词性转到「等式」。',
      prefix: null,
      root: { text: 'equa', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'equation', text: '英语派生：equa + -tion，词性转到「等式」。' },
        { label: '现在', text: '核心用法是：等式。' },
      ],
      formationLogic: '先认词干 equa，再看词尾。',
      mnemonic: '看到 equation，先说出「等式」。',
      note: '先认词干 equa，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one equation.', chinese: '这一章反复回到同一个点：等式。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equation.s1', en: 'Without that equation, the next paragraph is hard to follow.', zh: '没有这个等式，下一段会很难读。', structure: 'equation / 表示 / 等式', grammar: 'noun，围绕「等式」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the equation.', right: 'He gave me some advice about the equation.', reason: 'advice 不可数。名词 equation 的单复数按词典词形记。', rule: '先确定 equation 是noun，再套「等式」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equation.q1', senseId: 'equation.s1', errorType: 'meaning', type: '词义选择', prompt: '「equation」在本条的核心意思是：', options: ['等式', '完全相反的意思', '一种古代钱币'], answer: '等式', explain: 'equation：等式。' },
      { id: 'equation.q2', senseId: 'equation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equation?', options: ['等式', 'a kind of ancient coin', 'the past tense of be'], answer: '等式', explain: '对的是「等式」。' },
      { id: 'equation.q3', senseId: 'equation.s1', errorType: 'grammar', type: '词义选择', prompt: 'equation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'equation.q4', senseId: 'equation.s1', errorType: 'meaning', type: '词源', prompt: '记 equation 时，哪句更稳妥？', options: ['先锁住「等式」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「等式」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['等式'] },
  });

  D('equator', {
    etymology: {
      origin: '英语派生：equat + -or，词性转到「赤道」。',
      prefix: null,
      root: { text: 'equat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'equator', text: '英语派生：equat + -or，词性转到「赤道」。' },
        { label: '现在', text: '核心用法是：赤道。' },
      ],
      formationLogic: '先认词干 equat，再看词尾。',
      mnemonic: '看到 equator，先说出「赤道」。',
      note: '先认词干 equat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one equator.', chinese: '这一章反复回到同一个点：赤道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equator.s1', en: 'Without that equator, the next paragraph is hard to follow.', zh: '没有这个赤道，下一段会很难读。', structure: 'equator / 表示 / 赤道', grammar: 'noun，围绕「赤道」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the equator.', right: 'He gave me some advice about the equator.', reason: 'advice 不可数。名词 equator 的单复数按词典词形记。', rule: '先确定 equator 是noun，再套「赤道」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equator.q1', senseId: 'equator.s1', errorType: 'meaning', type: '词义选择', prompt: '「equator」在本条的核心意思是：', options: ['赤道', '完全相反的意思', '一种古代钱币'], answer: '赤道', explain: 'equator：赤道。' },
      { id: 'equator.q2', senseId: 'equator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equator?', options: ['赤道', 'a kind of ancient coin', 'the past tense of be'], answer: '赤道', explain: '对的是「赤道」。' },
      { id: 'equator.q3', senseId: 'equator.s1', errorType: 'grammar', type: '词义选择', prompt: 'equator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'equator.q4', senseId: 'equator.s1', errorType: 'meaning', type: '词源', prompt: '记 equator 时，哪句更稳妥？', options: ['先锁住「赤道」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赤道」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赤道'] },
  });

  D('equip', {
    etymology: {
      origin: '现代英语常用词「equip」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'equip', gloss: '装备' },
      suffix: null,
      history: [
        { label: 'equip', text: '现代英语常用词「equip」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：装备。' },
      ],
      formationLogic: '核心义：装备。',
      mnemonic: '看到 equip，先说出「装备」。',
      note: '核心义：装备。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to equip before the office closed.', chinese: '他们同意在办公室关门前做这件事：装备。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equip.s1', en: 'The deadline forced the team to equip that afternoon.', zh: '截止日期逼着小组在那天下午装备。', structure: 'equip / 表示 / 装备', grammar: 'verb，围绕「装备」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She equiped it yesterday without checking the real past form.', right: 'Check the past form of "equip" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 equip 是verb，再套「装备」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equip.q1', senseId: 'equip.s1', errorType: 'meaning', type: '词义选择', prompt: '「equip」在本条的核心意思是：', options: ['装备', '完全相反的意思', '一种古代钱币'], answer: '装备', explain: 'equip：装备。' },
      { id: 'equip.q2', senseId: 'equip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equip?', options: ['装备', 'a kind of ancient coin', 'the past tense of be'], answer: '装备', explain: '对的是「装备」。' },
      { id: 'equip.q3', senseId: 'equip.s1', errorType: 'grammar', type: '词义选择', prompt: 'equip 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'equip.q4', senseId: 'equip.s1', errorType: 'meaning', type: '词源', prompt: '记 equip 时，哪句更稳妥？', options: ['先锁住「装备」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装备」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装备'] },
  });

  D('equipment', {
    etymology: {
      origin: '英语派生：equip + -ment，词性转到「设备」。',
      prefix: null,
      root: { text: 'equip', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'equipment', text: '英语派生：equip + -ment，词性转到「设备」。' },
        { label: '现在', text: '核心用法是：设备。' },
      ],
      formationLogic: '先认词干 equip，再看词尾。',
      mnemonic: '看到 equipment，先说出「设备」。',
      note: '先认词干 equip，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one equipment.', chinese: '这一章反复回到同一个点：设备。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equipment.s1', en: 'Without that equipment, the next paragraph is hard to follow.', zh: '没有这个设备，下一段会很难读。', structure: 'equipment / 表示 / 设备', grammar: 'noun，围绕「设备」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the equipment.', right: 'He gave me some advice about the equipment.', reason: 'advice 不可数。名词 equipment 的单复数按词典词形记。', rule: '先确定 equipment 是noun，再套「设备」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equipment.q1', senseId: 'equipment.s1', errorType: 'meaning', type: '词义选择', prompt: '「equipment」在本条的核心意思是：', options: ['设备', '完全相反的意思', '一种古代钱币'], answer: '设备', explain: 'equipment：设备。' },
      { id: 'equipment.q2', senseId: 'equipment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equipment?', options: ['设备', 'a kind of ancient coin', 'the past tense of be'], answer: '设备', explain: '对的是「设备」。' },
      { id: 'equipment.q3', senseId: 'equipment.s1', errorType: 'grammar', type: '词义选择', prompt: 'equipment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'equipment.q4', senseId: 'equipment.s1', errorType: 'meaning', type: '词源', prompt: '记 equipment 时，哪句更稳妥？', options: ['先锁住「设备」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设备」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设备'] },
  });

  D('equipped', {
    etymology: {
      origin: '现代英语常用词「equipped」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'equipped', gloss: '配备的' },
      suffix: null,
      history: [
        { label: 'equipped', text: '现代英语常用词「equipped」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：配备的。' },
      ],
      formationLogic: '核心义：配备的。',
      mnemonic: '看到 equipped，先说出「配备的」。',
      note: '核心义：配备的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was equipped.', chinese: '即使是初读者也能看出，这个结果是配备的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equipped.s1', en: 'They wanted a equipped answer, not a long speech.', zh: '他们要一个配备的的答复，不要长篇发言。', structure: 'equipped / 表示 / 配备的', grammar: 'adjective，围绕「配备的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are equipped.', right: 'The news is equipped.', reason: 'news 作主语时动词用单数。', rule: '先确定 equipped 是adjective，再套「配备的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equipped.q1', senseId: 'equipped.s1', errorType: 'meaning', type: '词义选择', prompt: '「equipped」在本条的核心意思是：', options: ['配备的', '完全相反的意思', '一种古代钱币'], answer: '配备的', explain: 'equipped：配备的。' },
      { id: 'equipped.q2', senseId: 'equipped.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equipped?', options: ['配备的', 'a kind of ancient coin', 'the past tense of be'], answer: '配备的', explain: '对的是「配备的」。' },
      { id: 'equipped.q3', senseId: 'equipped.s1', errorType: 'grammar', type: '词义选择', prompt: 'equipped 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'equipped.q4', senseId: 'equipped.s1', errorType: 'meaning', type: '词源', prompt: '记 equipped 时，哪句更稳妥？', options: ['先锁住「配备的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「配备的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['配备的'] },
  });

  D('equity', {
    etymology: {
      origin: '英语派生：equ + -ity，词性转到「公平」。',
      prefix: null,
      root: { text: 'equ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'equity', text: '英语派生：equ + -ity，词性转到「公平」。' },
        { label: '现在', text: '核心用法是：公平。' },
      ],
      formationLogic: '先认词干 equ，再看词尾。',
      mnemonic: '看到 equity，先说出「公平」。',
      note: '先认词干 equ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one equity.', chinese: '这一章反复回到同一个点：公平。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equity.s1', en: 'Without that equity, the next paragraph is hard to follow.', zh: '没有这个公平，下一段会很难读。', structure: 'equity / 表示 / 公平', grammar: 'noun，围绕「公平」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the equity.', right: 'He gave me some advice about the equity.', reason: 'advice 不可数。名词 equity 的单复数按词典词形记。', rule: '先确定 equity 是noun，再套「公平」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equity.q1', senseId: 'equity.s1', errorType: 'meaning', type: '词义选择', prompt: '「equity」在本条的核心意思是：', options: ['公平', '完全相反的意思', '一种古代钱币'], answer: '公平', explain: 'equity：公平。' },
      { id: 'equity.q2', senseId: 'equity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equity?', options: ['公平', 'a kind of ancient coin', 'the past tense of be'], answer: '公平', explain: '对的是「公平」。' },
      { id: 'equity.q3', senseId: 'equity.s1', errorType: 'grammar', type: '词义选择', prompt: 'equity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'equity.q4', senseId: 'equity.s1', errorType: 'meaning', type: '词源', prompt: '记 equity 时，哪句更稳妥？', options: ['先锁住「公平」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公平」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公平'] },
  });

  D('equivalent', {
    etymology: {
      origin: '现代英语常用词「equivalent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'equivalent', gloss: '相等的' },
      suffix: null,
      history: [
        { label: 'equivalent', text: '现代英语常用词「equivalent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：相等的。' },
      ],
      formationLogic: '核心义：相等的。',
      mnemonic: '看到 equivalent，先说出「相等的」。',
      note: '核心义：相等的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was equivalent.', chinese: '即使是初读者也能看出，这个结果是相等的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equivalent.s1', en: 'They wanted a equivalent answer, not a long speech.', zh: '他们要一个相等的的答复，不要长篇发言。', structure: 'equivalent / 表示 / 相等的', grammar: 'adjective，围绕「相等的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are equivalent.', right: 'The news is equivalent.', reason: 'news 作主语时动词用单数。', rule: '先确定 equivalent 是adjective，再套「相等的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equivalent.q1', senseId: 'equivalent.s1', errorType: 'meaning', type: '词义选择', prompt: '「equivalent」在本条的核心意思是：', options: ['相等的', '完全相反的意思', '一种古代钱币'], answer: '相等的', explain: 'equivalent：相等的。' },
      { id: 'equivalent.q2', senseId: 'equivalent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equivalent?', options: ['相等的', 'a kind of ancient coin', 'the past tense of be'], answer: '相等的', explain: '对的是「相等的」。' },
      { id: 'equivalent.q3', senseId: 'equivalent.s1', errorType: 'grammar', type: '词义选择', prompt: 'equivalent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'equivalent.q4', senseId: 'equivalent.s1', errorType: 'meaning', type: '词源', prompt: '记 equivalent 时，哪句更稳妥？', options: ['先锁住「相等的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相等的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相等的'] },
  });

  D('equivocate', {
    etymology: {
      origin: '现代英语常用词「equivocate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'equivocate', gloss: '含糊其辞' },
      suffix: null,
      history: [
        { label: 'equivocate', text: '现代英语常用词「equivocate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：含糊其辞。' },
      ],
      formationLogic: '核心义：含糊其辞。',
      mnemonic: '看到 equivocate，先说出「含糊其辞」。',
      note: '核心义：含糊其辞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to equivocate before the office closed.', chinese: '他们同意在办公室关门前做这件事：含糊其辞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'equivocate.s1', en: 'The deadline forced the team to equivocate that afternoon.', zh: '截止日期逼着小组在那天下午含糊其辞。', structure: 'equivocate / 表示 / 含糊其辞', grammar: 'verb，围绕「含糊其辞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She equivocateed it yesterday without checking the real past form.', right: 'Check the past form of "equivocate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 equivocate 是verb，再套「含糊其辞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'equivocate.q1', senseId: 'equivocate.s1', errorType: 'meaning', type: '词义选择', prompt: '「equivocate」在本条的核心意思是：', options: ['含糊其辞', '完全相反的意思', '一种古代钱币'], answer: '含糊其辞', explain: 'equivocate：含糊其辞。' },
      { id: 'equivocate.q2', senseId: 'equivocate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches equivocate?', options: ['含糊其辞', 'a kind of ancient coin', 'the past tense of be'], answer: '含糊其辞', explain: '对的是「含糊其辞」。' },
      { id: 'equivocate.q3', senseId: 'equivocate.s1', errorType: 'grammar', type: '词义选择', prompt: 'equivocate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'equivocate.q4', senseId: 'equivocate.s1', errorType: 'meaning', type: '词源', prompt: '记 equivocate 时，哪句更稳妥？', options: ['先锁住「含糊其辞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「含糊其辞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['含糊其辞'] },
  });

  D('er', {
    etymology: {
      origin: '现代英语常用词「er」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'er', gloss: '呃' },
      suffix: null,
      history: [
        { label: 'er', text: '现代英语常用词「er」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：呃。' },
      ],
      formationLogic: '核心义：呃。',
      mnemonic: '看到 er，先说出「呃」。',
      note: '核心义：呃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one er.', chinese: '这一章反复回到同一个点：呃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'er.s1', en: 'Without that er, the next paragraph is hard to follow.', zh: '没有这个呃，下一段会很难读。', structure: 'er / 表示 / 呃', grammar: 'interjection，围绕「呃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the er.', right: 'He gave me some advice about the er.', reason: 'advice 不可数。名词 er 的单复数按词典词形记。', rule: '先确定 er 是interjection，再套「呃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'er.q1', senseId: 'er.s1', errorType: 'meaning', type: '词义选择', prompt: '「er」在本条的核心意思是：', options: ['呃', '完全相反的意思', '一种古代钱币'], answer: '呃', explain: 'er：呃。' },
      { id: 'er.q2', senseId: 'er.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches er?', options: ['呃', 'a kind of ancient coin', 'the past tense of be'], answer: '呃', explain: '对的是「呃」。' },
      { id: 'er.q3', senseId: 'er.s1', errorType: 'grammar', type: '词义选择', prompt: 'er 的词性（本条）更接近：', options: ['interjection', '只能作感叹词', '只能作数词'], answer: 'interjection', explain: '本条按 interjection 来用。' },
      { id: 'er.q4', senseId: 'er.s1', errorType: 'meaning', type: '词源', prompt: '记 er 时，哪句更稳妥？', options: ['先锁住「呃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「呃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['呃'] },
  });

  D('era', {
    etymology: {
      origin: '现代英语常用词「era」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'era', gloss: '时代' },
      suffix: null,
      history: [
        { label: 'era', text: '现代英语常用词「era」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：时代。' },
      ],
      formationLogic: '核心义：时代。',
      mnemonic: '看到 era，先说出「时代」。',
      note: '核心义：时代。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one era.', chinese: '这一章反复回到同一个点：时代。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'era.s1', en: 'Without that era, the next paragraph is hard to follow.', zh: '没有这个时代，下一段会很难读。', structure: 'era / 表示 / 时代', grammar: 'noun，围绕「时代」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the era.', right: 'He gave me some advice about the era.', reason: 'advice 不可数。名词 era 的单复数按词典词形记。', rule: '先确定 era 是noun，再套「时代」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'era.q1', senseId: 'era.s1', errorType: 'meaning', type: '词义选择', prompt: '「era」在本条的核心意思是：', options: ['时代', '完全相反的意思', '一种古代钱币'], answer: '时代', explain: 'era：时代。' },
      { id: 'era.q2', senseId: 'era.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches era?', options: ['时代', 'a kind of ancient coin', 'the past tense of be'], answer: '时代', explain: '对的是「时代」。' },
      { id: 'era.q3', senseId: 'era.s1', errorType: 'grammar', type: '词义选择', prompt: 'era 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'era.q4', senseId: 'era.s1', errorType: 'meaning', type: '词源', prompt: '记 era 时，哪句更稳妥？', options: ['先锁住「时代」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「时代」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['时代'] },
  });

  D('eradicate', {
    etymology: {
      origin: '现代英语常用词「eradicate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eradicate', gloss: '根除' },
      suffix: null,
      history: [
        { label: 'eradicate', text: '现代英语常用词「eradicate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：根除。' },
      ],
      formationLogic: '核心义：根除。',
      mnemonic: '看到 eradicate，先说出「根除」。',
      note: '核心义：根除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to eradicate before the office closed.', chinese: '他们同意在办公室关门前做这件事：根除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eradicate.s1', en: 'The deadline forced the team to eradicate that afternoon.', zh: '截止日期逼着小组在那天下午根除。', structure: 'eradicate / 表示 / 根除', grammar: 'verb，围绕「根除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She eradicateed it yesterday without checking the real past form.', right: 'Check the past form of "eradicate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 eradicate 是verb，再套「根除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eradicate.q1', senseId: 'eradicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「eradicate」在本条的核心意思是：', options: ['根除', '完全相反的意思', '一种古代钱币'], answer: '根除', explain: 'eradicate：根除。' },
      { id: 'eradicate.q2', senseId: 'eradicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eradicate?', options: ['根除', 'a kind of ancient coin', 'the past tense of be'], answer: '根除', explain: '对的是「根除」。' },
      { id: 'eradicate.q3', senseId: 'eradicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'eradicate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eradicate.q4', senseId: 'eradicate.s1', errorType: 'meaning', type: '词源', prompt: '记 eradicate 时，哪句更稳妥？', options: ['先锁住「根除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「根除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['根除'] },
  });

  D('erase', {
    etymology: {
      origin: '现代英语常用词「erase」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'erase', gloss: '擦掉' },
      suffix: null,
      history: [
        { label: 'erase', text: '现代英语常用词「erase」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：擦掉。' },
      ],
      formationLogic: '核心义：擦掉。',
      mnemonic: '看到 erase，先说出「擦掉」。',
      note: '核心义：擦掉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to erase before the office closed.', chinese: '他们同意在办公室关门前做这件事：擦掉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'erase.s1', en: 'The deadline forced the team to erase that afternoon.', zh: '截止日期逼着小组在那天下午擦掉。', structure: 'erase / 表示 / 擦掉', grammar: 'verb，围绕「擦掉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She eraseed it yesterday without checking the real past form.', right: 'Check the past form of "erase" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 erase 是verb，再套「擦掉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'erase.q1', senseId: 'erase.s1', errorType: 'meaning', type: '词义选择', prompt: '「erase」在本条的核心意思是：', options: ['擦掉', '完全相反的意思', '一种古代钱币'], answer: '擦掉', explain: 'erase：擦掉。' },
      { id: 'erase.q2', senseId: 'erase.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches erase?', options: ['擦掉', 'a kind of ancient coin', 'the past tense of be'], answer: '擦掉', explain: '对的是「擦掉」。' },
      { id: 'erase.q3', senseId: 'erase.s1', errorType: 'grammar', type: '词义选择', prompt: 'erase 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'erase.q4', senseId: 'erase.s1', errorType: 'meaning', type: '词源', prompt: '记 erase 时，哪句更稳妥？', options: ['先锁住「擦掉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「擦掉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['擦掉'] },
  });

  D('eraser', {
    etymology: {
      origin: '英语派生：eras + -er，词性转到「橡皮擦」。',
      prefix: null,
      root: { text: 'eras', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eraser', text: '英语派生：eras + -er，词性转到「橡皮擦」。' },
        { label: '现在', text: '核心用法是：橡皮擦。' },
      ],
      formationLogic: '先认词干 eras，再看词尾。',
      mnemonic: '看到 eraser，先说出「橡皮擦」。',
      note: '先认词干 eras，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eraser.', chinese: '这一章反复回到同一个点：橡皮擦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eraser.s1', en: 'Without that eraser, the next paragraph is hard to follow.', zh: '没有这个橡皮擦，下一段会很难读。', structure: 'eraser / 表示 / 橡皮擦', grammar: 'noun，围绕「橡皮擦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eraser.', right: 'He gave me some advice about the eraser.', reason: 'advice 不可数。名词 eraser 的单复数按词典词形记。', rule: '先确定 eraser 是noun，再套「橡皮擦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eraser.q1', senseId: 'eraser.s1', errorType: 'meaning', type: '词义选择', prompt: '「eraser」在本条的核心意思是：', options: ['橡皮擦', '完全相反的意思', '一种古代钱币'], answer: '橡皮擦', explain: 'eraser：橡皮擦。' },
      { id: 'eraser.q2', senseId: 'eraser.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eraser?', options: ['橡皮擦', 'a kind of ancient coin', 'the past tense of be'], answer: '橡皮擦', explain: '对的是「橡皮擦」。' },
      { id: 'eraser.q3', senseId: 'eraser.s1', errorType: 'grammar', type: '词义选择', prompt: 'eraser 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eraser.q4', senseId: 'eraser.s1', errorType: 'meaning', type: '词源', prompt: '记 eraser 时，哪句更稳妥？', options: ['先锁住「橡皮擦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「橡皮擦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['橡皮擦'] },
  });

  D('erect', {
    etymology: {
      origin: '现代英语常用词「erect」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'erect', gloss: '竖立的' },
      suffix: null,
      history: [
        { label: 'erect', text: '现代英语常用词「erect」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：竖立的。' },
      ],
      formationLogic: '核心义：竖立的。',
      mnemonic: '看到 erect，先说出「竖立的」。',
      note: '核心义：竖立的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was erect.', chinese: '即使是初读者也能看出，这个结果是竖立的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'erect.s1', en: 'They wanted a erect answer, not a long speech.', zh: '他们要一个竖立的的答复，不要长篇发言。', structure: 'erect / 表示 / 竖立的', grammar: 'adjective，围绕「竖立的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are erect.', right: 'The news is erect.', reason: 'news 作主语时动词用单数。', rule: '先确定 erect 是adjective，再套「竖立的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'erect.q1', senseId: 'erect.s1', errorType: 'meaning', type: '词义选择', prompt: '「erect」在本条的核心意思是：', options: ['竖立的', '完全相反的意思', '一种古代钱币'], answer: '竖立的', explain: 'erect：竖立的。' },
      { id: 'erect.q2', senseId: 'erect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches erect?', options: ['竖立的', 'a kind of ancient coin', 'the past tense of be'], answer: '竖立的', explain: '对的是「竖立的」。' },
      { id: 'erect.q3', senseId: 'erect.s1', errorType: 'grammar', type: '词义选择', prompt: 'erect 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'erect.q4', senseId: 'erect.s1', errorType: 'meaning', type: '词源', prompt: '记 erect 时，哪句更稳妥？', options: ['先锁住「竖立的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「竖立的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['竖立的'] },
  });

  D('erode', {
    etymology: {
      origin: '现代英语常用词「erode」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'erode', gloss: '侵蚀' },
      suffix: null,
      history: [
        { label: 'erode', text: '现代英语常用词「erode」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：侵蚀。' },
      ],
      formationLogic: '核心义：侵蚀。',
      mnemonic: '看到 erode，先说出「侵蚀」。',
      note: '核心义：侵蚀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to erode before the office closed.', chinese: '他们同意在办公室关门前做这件事：侵蚀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'erode.s1', en: 'The deadline forced the team to erode that afternoon.', zh: '截止日期逼着小组在那天下午侵蚀。', structure: 'erode / 表示 / 侵蚀', grammar: 'verb，围绕「侵蚀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She erodeed it yesterday without checking the real past form.', right: 'Check the past form of "erode" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 erode 是verb，再套「侵蚀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'erode.q1', senseId: 'erode.s1', errorType: 'meaning', type: '词义选择', prompt: '「erode」在本条的核心意思是：', options: ['侵蚀', '完全相反的意思', '一种古代钱币'], answer: '侵蚀', explain: 'erode：侵蚀。' },
      { id: 'erode.q2', senseId: 'erode.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches erode?', options: ['侵蚀', 'a kind of ancient coin', 'the past tense of be'], answer: '侵蚀', explain: '对的是「侵蚀」。' },
      { id: 'erode.q3', senseId: 'erode.s1', errorType: 'grammar', type: '词义选择', prompt: 'erode 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'erode.q4', senseId: 'erode.s1', errorType: 'meaning', type: '词源', prompt: '记 erode 时，哪句更稳妥？', options: ['先锁住「侵蚀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「侵蚀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侵蚀'] },
  });

  D('err', {
    etymology: {
      origin: '现代英语常用词「err」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'err', gloss: '犯错' },
      suffix: null,
      history: [
        { label: 'err', text: '现代英语常用词「err」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：犯错。' },
      ],
      formationLogic: '核心义：犯错。',
      mnemonic: '看到 err，先说出「犯错」。',
      note: '核心义：犯错。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to err before the office closed.', chinese: '他们同意在办公室关门前做这件事：犯错。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'err.s1', en: 'The deadline forced the team to err that afternoon.', zh: '截止日期逼着小组在那天下午犯错。', structure: 'err / 表示 / 犯错', grammar: 'verb，围绕「犯错」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She erred it yesterday without checking the real past form.', right: 'Check the past form of "err" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 err 是verb，再套「犯错」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'err.q1', senseId: 'err.s1', errorType: 'meaning', type: '词义选择', prompt: '「err」在本条的核心意思是：', options: ['犯错', '完全相反的意思', '一种古代钱币'], answer: '犯错', explain: 'err：犯错。' },
      { id: 'err.q2', senseId: 'err.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches err?', options: ['犯错', 'a kind of ancient coin', 'the past tense of be'], answer: '犯错', explain: '对的是「犯错」。' },
      { id: 'err.q3', senseId: 'err.s1', errorType: 'grammar', type: '词义选择', prompt: 'err 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'err.q4', senseId: 'err.s1', errorType: 'meaning', type: '词源', prompt: '记 err 时，哪句更稳妥？', options: ['先锁住「犯错」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「犯错」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['犯错'] },
  });

  D('errand', {
    etymology: {
      origin: '现代英语常用词「errand」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'errand', gloss: '差事' },
      suffix: null,
      history: [
        { label: 'errand', text: '现代英语常用词「errand」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：差事。' },
      ],
      formationLogic: '核心义：差事。',
      mnemonic: '看到 errand，先说出「差事」。',
      note: '核心义：差事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one errand.', chinese: '这一章反复回到同一个点：差事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'errand.s1', en: 'Without that errand, the next paragraph is hard to follow.', zh: '没有这个差事，下一段会很难读。', structure: 'errand / 表示 / 差事', grammar: 'noun，围绕「差事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the errand.', right: 'He gave me some advice about the errand.', reason: 'advice 不可数。名词 errand 的单复数按词典词形记。', rule: '先确定 errand 是noun，再套「差事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'errand.q1', senseId: 'errand.s1', errorType: 'meaning', type: '词义选择', prompt: '「errand」在本条的核心意思是：', options: ['差事', '完全相反的意思', '一种古代钱币'], answer: '差事', explain: 'errand：差事。' },
      { id: 'errand.q2', senseId: 'errand.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches errand?', options: ['差事', 'a kind of ancient coin', 'the past tense of be'], answer: '差事', explain: '对的是「差事」。' },
      { id: 'errand.q3', senseId: 'errand.s1', errorType: 'grammar', type: '词义选择', prompt: 'errand 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'errand.q4', senseId: 'errand.s1', errorType: 'meaning', type: '词源', prompt: '记 errand 时，哪句更稳妥？', options: ['先锁住「差事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「差事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['差事'] },
  });

  D('erratic', {
    etymology: {
      origin: '英语派生：errat + -ic，词性转到「不稳定的」。',
      prefix: null,
      root: { text: 'errat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'erratic', text: '英语派生：errat + -ic，词性转到「不稳定的」。' },
        { label: '现在', text: '核心用法是：不稳定的。' },
      ],
      formationLogic: '先认词干 errat，再看词尾。',
      mnemonic: '看到 erratic，先说出「不稳定的」。',
      note: '先认词干 errat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was erratic.', chinese: '即使是初读者也能看出，这个结果是不稳定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'erratic.s1', en: 'They wanted a erratic answer, not a long speech.', zh: '他们要一个不稳定的的答复，不要长篇发言。', structure: 'erratic / 表示 / 不稳定的', grammar: 'adjective，围绕「不稳定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are erratic.', right: 'The news is erratic.', reason: 'news 作主语时动词用单数。', rule: '先确定 erratic 是adjective，再套「不稳定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'erratic.q1', senseId: 'erratic.s1', errorType: 'meaning', type: '词义选择', prompt: '「erratic」在本条的核心意思是：', options: ['不稳定的', '完全相反的意思', '一种古代钱币'], answer: '不稳定的', explain: 'erratic：不稳定的。' },
      { id: 'erratic.q2', senseId: 'erratic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches erratic?', options: ['不稳定的', 'a kind of ancient coin', 'the past tense of be'], answer: '不稳定的', explain: '对的是「不稳定的」。' },
      { id: 'erratic.q3', senseId: 'erratic.s1', errorType: 'grammar', type: '词义选择', prompt: 'erratic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'erratic.q4', senseId: 'erratic.s1', errorType: 'meaning', type: '词源', prompt: '记 erratic 时，哪句更稳妥？', options: ['先锁住「不稳定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不稳定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不稳定的'] },
  });

  D('error', {
    etymology: {
      origin: '英语派生：err + -or，词性转到「错误」。',
      prefix: null,
      root: { text: 'err', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'error', text: '英语派生：err + -or，词性转到「错误」。' },
        { label: '现在', text: '核心用法是：错误。' },
      ],
      formationLogic: '先认词干 err，再看词尾。',
      mnemonic: '看到 error，先说出「错误」。',
      note: '先认词干 err，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one error.', chinese: '这一章反复回到同一个点：错误。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'error.s1', en: 'Without that error, the next paragraph is hard to follow.', zh: '没有这个错误，下一段会很难读。', structure: 'error / 表示 / 错误', grammar: 'noun，围绕「错误」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the error.', right: 'He gave me some advice about the error.', reason: 'advice 不可数。名词 error 的单复数按词典词形记。', rule: '先确定 error 是noun，再套「错误」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'error.q1', senseId: 'error.s1', errorType: 'meaning', type: '词义选择', prompt: '「error」在本条的核心意思是：', options: ['错误', '完全相反的意思', '一种古代钱币'], answer: '错误', explain: 'error：错误。' },
      { id: 'error.q2', senseId: 'error.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches error?', options: ['错误', 'a kind of ancient coin', 'the past tense of be'], answer: '错误', explain: '对的是「错误」。' },
      { id: 'error.q3', senseId: 'error.s1', errorType: 'grammar', type: '词义选择', prompt: 'error 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'error.q4', senseId: 'error.s1', errorType: 'meaning', type: '词源', prompt: '记 error 时，哪句更稳妥？', options: ['先锁住「错误」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「错误」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['错误'] },
  });

  D('erupt', {
    etymology: {
      origin: '现代英语常用词「erupt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'erupt', gloss: '（火山）喷发' },
      suffix: null,
      history: [
        { label: 'erupt', text: '现代英语常用词「erupt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（火山）喷发。' },
      ],
      formationLogic: '核心义：（火山）喷发。',
      mnemonic: '看到 erupt，先说出「（火山）喷发」。',
      note: '核心义：（火山）喷发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to erupt before the office closed.', chinese: '他们同意在办公室关门前做这件事：（火山）喷发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'erupt.s1', en: 'The deadline forced the team to erupt that afternoon.', zh: '截止日期逼着小组在那天下午（火山）喷发。', structure: 'erupt / 表示 / （火山）喷发', grammar: 'verb，围绕「（火山）喷发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She erupted it yesterday without checking the real past form.', right: 'Check the past form of "erupt" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 erupt 是verb，再套「（火山）喷发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'erupt.q1', senseId: 'erupt.s1', errorType: 'meaning', type: '词义选择', prompt: '「erupt」在本条的核心意思是：', options: ['（火山）喷发', '完全相反的意思', '一种古代钱币'], answer: '（火山）喷发', explain: 'erupt：（火山）喷发。' },
      { id: 'erupt.q2', senseId: 'erupt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches erupt?', options: ['（火山）喷发', 'a kind of ancient coin', 'the past tense of be'], answer: '（火山）喷发', explain: '对的是「（火山）喷发」。' },
      { id: 'erupt.q3', senseId: 'erupt.s1', errorType: 'grammar', type: '词义选择', prompt: 'erupt 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'erupt.q4', senseId: 'erupt.s1', errorType: 'meaning', type: '词源', prompt: '记 erupt 时，哪句更稳妥？', options: ['先锁住「（火山）喷发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（火山）喷发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（火山）喷发'] },
  });

  D('eruption', {
    etymology: {
      origin: '英语派生：erup + -tion，词性转到「爆发」。',
      prefix: null,
      root: { text: 'erup', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eruption', text: '英语派生：erup + -tion，词性转到「爆发」。' },
        { label: '现在', text: '核心用法是：爆发。' },
      ],
      formationLogic: '先认词干 erup，再看词尾。',
      mnemonic: '看到 eruption，先说出「爆发」。',
      note: '先认词干 erup，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eruption.', chinese: '这一章反复回到同一个点：爆发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eruption.s1', en: 'Without that eruption, the next paragraph is hard to follow.', zh: '没有这个爆发，下一段会很难读。', structure: 'eruption / 表示 / 爆发', grammar: 'noun，围绕「爆发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eruption.', right: 'He gave me some advice about the eruption.', reason: 'advice 不可数。名词 eruption 的单复数按词典词形记。', rule: '先确定 eruption 是noun，再套「爆发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eruption.q1', senseId: 'eruption.s1', errorType: 'meaning', type: '词义选择', prompt: '「eruption」在本条的核心意思是：', options: ['爆发', '完全相反的意思', '一种古代钱币'], answer: '爆发', explain: 'eruption：爆发。' },
      { id: 'eruption.q2', senseId: 'eruption.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eruption?', options: ['爆发', 'a kind of ancient coin', 'the past tense of be'], answer: '爆发', explain: '对的是「爆发」。' },
      { id: 'eruption.q3', senseId: 'eruption.s1', errorType: 'grammar', type: '词义选择', prompt: 'eruption 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eruption.q4', senseId: 'eruption.s1', errorType: 'meaning', type: '词源', prompt: '记 eruption 时，哪句更稳妥？', options: ['先锁住「爆发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爆发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爆发'] },
  });

  D('escalate', {
    etymology: {
      origin: '现代英语常用词「escalate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'escalate', gloss: '升级' },
      suffix: null,
      history: [
        { label: 'escalate', text: '现代英语常用词「escalate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：升级。' },
      ],
      formationLogic: '核心义：升级。',
      mnemonic: '看到 escalate，先说出「升级」。',
      note: '核心义：升级。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to escalate before the office closed.', chinese: '他们同意在办公室关门前做这件事：升级。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'escalate.s1', en: 'The deadline forced the team to escalate that afternoon.', zh: '截止日期逼着小组在那天下午升级。', structure: 'escalate / 表示 / 升级', grammar: 'verb，围绕「升级」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She escalateed it yesterday without checking the real past form.', right: 'Check the past form of "escalate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 escalate 是verb，再套「升级」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'escalate.q1', senseId: 'escalate.s1', errorType: 'meaning', type: '词义选择', prompt: '「escalate」在本条的核心意思是：', options: ['升级', '完全相反的意思', '一种古代钱币'], answer: '升级', explain: 'escalate：升级。' },
      { id: 'escalate.q2', senseId: 'escalate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches escalate?', options: ['升级', 'a kind of ancient coin', 'the past tense of be'], answer: '升级', explain: '对的是「升级」。' },
      { id: 'escalate.q3', senseId: 'escalate.s1', errorType: 'grammar', type: '词义选择', prompt: 'escalate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'escalate.q4', senseId: 'escalate.s1', errorType: 'meaning', type: '词源', prompt: '记 escalate 时，哪句更稳妥？', options: ['先锁住「升级」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「升级」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['升级'] },
  });

  D('escalation', {
    etymology: {
      origin: '英语派生：escala + -tion，词性转到「升级」。',
      prefix: null,
      root: { text: 'escala', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'escalation', text: '英语派生：escala + -tion，词性转到「升级」。' },
        { label: '现在', text: '核心用法是：升级。' },
      ],
      formationLogic: '先认词干 escala，再看词尾。',
      mnemonic: '看到 escalation，先说出「升级」。',
      note: '先认词干 escala，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one escalation.', chinese: '这一章反复回到同一个点：升级。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'escalation.s1', en: 'Without that escalation, the next paragraph is hard to follow.', zh: '没有这个升级，下一段会很难读。', structure: 'escalation / 表示 / 升级', grammar: 'noun，围绕「升级」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the escalation.', right: 'He gave me some advice about the escalation.', reason: 'advice 不可数。名词 escalation 的单复数按词典词形记。', rule: '先确定 escalation 是noun，再套「升级」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'escalation.q1', senseId: 'escalation.s1', errorType: 'meaning', type: '词义选择', prompt: '「escalation」在本条的核心意思是：', options: ['升级', '完全相反的意思', '一种古代钱币'], answer: '升级', explain: 'escalation：升级。' },
      { id: 'escalation.q2', senseId: 'escalation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches escalation?', options: ['升级', 'a kind of ancient coin', 'the past tense of be'], answer: '升级', explain: '对的是「升级」。' },
      { id: 'escalation.q3', senseId: 'escalation.s1', errorType: 'grammar', type: '词义选择', prompt: 'escalation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'escalation.q4', senseId: 'escalation.s1', errorType: 'meaning', type: '词源', prompt: '记 escalation 时，哪句更稳妥？', options: ['先锁住「升级」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「升级」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['升级'] },
  });

  D('escape', {
    etymology: {
      origin: '现代英语常用词「escape」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'escape', gloss: '逃跑' },
      suffix: null,
      history: [
        { label: 'escape', text: '现代英语常用词「escape」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：逃跑。' },
      ],
      formationLogic: '核心义：逃跑。',
      mnemonic: '看到 escape，先说出「逃跑」。',
      note: '核心义：逃跑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to escape before the office closed.', chinese: '他们同意在办公室关门前做这件事：逃跑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'escape.s1', en: 'The deadline forced the team to escape that afternoon.', zh: '截止日期逼着小组在那天下午逃跑。', structure: 'escape / 表示 / 逃跑', grammar: 'verb，围绕「逃跑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She escapeed it yesterday without checking the real past form.', right: 'Check the past form of "escape" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 escape 是verb，再套「逃跑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'escape.q1', senseId: 'escape.s1', errorType: 'meaning', type: '词义选择', prompt: '「escape」在本条的核心意思是：', options: ['逃跑', '完全相反的意思', '一种古代钱币'], answer: '逃跑', explain: 'escape：逃跑。' },
      { id: 'escape.q2', senseId: 'escape.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches escape?', options: ['逃跑', 'a kind of ancient coin', 'the past tense of be'], answer: '逃跑', explain: '对的是「逃跑」。' },
      { id: 'escape.q3', senseId: 'escape.s1', errorType: 'grammar', type: '词义选择', prompt: 'escape 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'escape.q4', senseId: 'escape.s1', errorType: 'meaning', type: '词源', prompt: '记 escape 时，哪句更稳妥？', options: ['先锁住「逃跑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逃跑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逃跑'] },
  });

  D('escort', {
    etymology: {
      origin: '现代英语常用词「escort」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'escort', gloss: '护送者' },
      suffix: null,
      history: [
        { label: 'escort', text: '现代英语常用词「escort」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：护送者。' },
      ],
      formationLogic: '核心义：护送者。',
      mnemonic: '看到 escort，先说出「护送者」。',
      note: '核心义：护送者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one escort.', chinese: '这一章反复回到同一个点：护送者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'escort.s1', en: 'Without that escort, the next paragraph is hard to follow.', zh: '没有这个护送者，下一段会很难读。', structure: 'escort / 表示 / 护送者', grammar: 'noun，围绕「护送者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the escort.', right: 'He gave me some advice about the escort.', reason: 'advice 不可数。名词 escort 的单复数按词典词形记。', rule: '先确定 escort 是noun，再套「护送者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'escort.q1', senseId: 'escort.s1', errorType: 'meaning', type: '词义选择', prompt: '「escort」在本条的核心意思是：', options: ['护送者', '完全相反的意思', '一种古代钱币'], answer: '护送者', explain: 'escort：护送者。' },
      { id: 'escort.q2', senseId: 'escort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches escort?', options: ['护送者', 'a kind of ancient coin', 'the past tense of be'], answer: '护送者', explain: '对的是「护送者」。' },
      { id: 'escort.q3', senseId: 'escort.s1', errorType: 'grammar', type: '词义选择', prompt: 'escort 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'escort.q4', senseId: 'escort.s1', errorType: 'meaning', type: '词源', prompt: '记 escort 时，哪句更稳妥？', options: ['先锁住「护送者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「护送者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['护送者'] },
  });

  D('especial', {
    etymology: {
      origin: '英语派生：especi + -al，词性转到「特别的」。',
      prefix: null,
      root: { text: 'especi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'especial', text: '英语派生：especi + -al，词性转到「特别的」。' },
        { label: '现在', text: '核心用法是：特别的。' },
      ],
      formationLogic: '先认词干 especi，再看词尾。',
      mnemonic: '看到 especial，先说出「特别的」。',
      note: '先认词干 especi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was especial.', chinese: '即使是初读者也能看出，这个结果是特别的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'especial.s1', en: 'They wanted a especial answer, not a long speech.', zh: '他们要一个特别的的答复，不要长篇发言。', structure: 'especial / 表示 / 特别的', grammar: 'adjective，围绕「特别的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are especial.', right: 'The news is especial.', reason: 'news 作主语时动词用单数。', rule: '先确定 especial 是adjective，再套「特别的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'especial.q1', senseId: 'especial.s1', errorType: 'meaning', type: '词义选择', prompt: '「especial」在本条的核心意思是：', options: ['特别的', '完全相反的意思', '一种古代钱币'], answer: '特别的', explain: 'especial：特别的。' },
      { id: 'especial.q2', senseId: 'especial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches especial?', options: ['特别的', 'a kind of ancient coin', 'the past tense of be'], answer: '特别的', explain: '对的是「特别的」。' },
      { id: 'especial.q3', senseId: 'especial.s1', errorType: 'grammar', type: '词义选择', prompt: 'especial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'especial.q4', senseId: 'especial.s1', errorType: 'meaning', type: '词源', prompt: '记 especial 时，哪句更稳妥？', options: ['先锁住「特别的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「特别的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['特别的'] },
  });

  D('especially', {
    etymology: {
      origin: '英语派生：especial + -ly，词性转到「尤其」。',
      prefix: null,
      root: { text: 'especial', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'especially', text: '英语派生：especial + -ly，词性转到「尤其」。' },
        { label: '现在', text: '核心用法是：尤其。' },
      ],
      formationLogic: '先认词干 especial，再看词尾。',
      mnemonic: '看到 especially，先说出「尤其」。',
      note: '先认词干 especial，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule especially, and the class followed.', chinese: '她把规则讲清楚了（尤其），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'especially.s1', en: 'He nodded especially and returned to the notes.', zh: '他尤其地点了点头，又回去看笔记。', structure: 'especially / 表示 / 尤其', grammar: 'adverb，围绕「尤其」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very especiallyly in the meeting.', right: 'She spoke especially in the meeting.', reason: 'especially 已经是副词，不要再加 -ly。', rule: '先确定 especially 是adverb，再套「尤其」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'especially.q1', senseId: 'especially.s1', errorType: 'meaning', type: '词义选择', prompt: '「especially」在本条的核心意思是：', options: ['尤其', '完全相反的意思', '一种古代钱币'], answer: '尤其', explain: 'especially：尤其。' },
      { id: 'especially.q2', senseId: 'especially.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches especially?', options: ['尤其', 'a kind of ancient coin', 'the past tense of be'], answer: '尤其', explain: '对的是「尤其」。' },
      { id: 'especially.q3', senseId: 'especially.s1', errorType: 'grammar', type: '词义选择', prompt: 'especially 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'especially.q4', senseId: 'especially.s1', errorType: 'meaning', type: '词源', prompt: '记 especially 时，哪句更稳妥？', options: ['先锁住「尤其」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尤其」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尤其'] },
  });

  D('essay', {
    etymology: {
      origin: '现代英语常用词「essay」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'essay', gloss: '文章' },
      suffix: null,
      history: [
        { label: 'essay', text: '现代英语常用词「essay」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：文章。' },
      ],
      formationLogic: '核心义：文章。',
      mnemonic: '看到 essay，先说出「文章」。',
      note: '核心义：文章。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one essay.', chinese: '这一章反复回到同一个点：文章。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'essay.s1', en: 'Without that essay, the next paragraph is hard to follow.', zh: '没有这个文章，下一段会很难读。', structure: 'essay / 表示 / 文章', grammar: 'noun，围绕「文章」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the essay.', right: 'He gave me some advice about the essay.', reason: 'advice 不可数。名词 essay 的单复数按词典词形记。', rule: '先确定 essay 是noun，再套「文章」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'essay.q1', senseId: 'essay.s1', errorType: 'meaning', type: '词义选择', prompt: '「essay」在本条的核心意思是：', options: ['文章', '完全相反的意思', '一种古代钱币'], answer: '文章', explain: 'essay：文章。' },
      { id: 'essay.q2', senseId: 'essay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches essay?', options: ['文章', 'a kind of ancient coin', 'the past tense of be'], answer: '文章', explain: '对的是「文章」。' },
      { id: 'essay.q3', senseId: 'essay.s1', errorType: 'grammar', type: '词义选择', prompt: 'essay 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'essay.q4', senseId: 'essay.s1', errorType: 'meaning', type: '词源', prompt: '记 essay 时，哪句更稳妥？', options: ['先锁住「文章」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文章」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文章'] },
  });

  D('essence', {
    etymology: {
      origin: '英语派生：ess + -ence，词性转到「本质」。',
      prefix: null,
      root: { text: 'ess', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'essence', text: '英语派生：ess + -ence，词性转到「本质」。' },
        { label: '现在', text: '核心用法是：本质。' },
      ],
      formationLogic: '先认词干 ess，再看词尾。',
      mnemonic: '看到 essence，先说出「本质」。',
      note: '先认词干 ess，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one essence.', chinese: '这一章反复回到同一个点：本质。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'essence.s1', en: 'Without that essence, the next paragraph is hard to follow.', zh: '没有这个本质，下一段会很难读。', structure: 'essence / 表示 / 本质', grammar: 'noun，围绕「本质」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the essence.', right: 'He gave me some advice about the essence.', reason: 'advice 不可数。名词 essence 的单复数按词典词形记。', rule: '先确定 essence 是noun，再套「本质」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'essence.q1', senseId: 'essence.s1', errorType: 'meaning', type: '词义选择', prompt: '「essence」在本条的核心意思是：', options: ['本质', '完全相反的意思', '一种古代钱币'], answer: '本质', explain: 'essence：本质。' },
      { id: 'essence.q2', senseId: 'essence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches essence?', options: ['本质', 'a kind of ancient coin', 'the past tense of be'], answer: '本质', explain: '对的是「本质」。' },
      { id: 'essence.q3', senseId: 'essence.s1', errorType: 'grammar', type: '词义选择', prompt: 'essence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'essence.q4', senseId: 'essence.s1', errorType: 'meaning', type: '词源', prompt: '记 essence 时，哪句更稳妥？', options: ['先锁住「本质」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「本质」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['本质'] },
  });

  D('essential', {
    etymology: {
      origin: '英语派生：essenti + -al，词性转到「必要的」。',
      prefix: null,
      root: { text: 'essenti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'essential', text: '英语派生：essenti + -al，词性转到「必要的」。' },
        { label: '现在', text: '核心用法是：必要的。' },
      ],
      formationLogic: '先认词干 essenti，再看词尾。',
      mnemonic: '看到 essential，先说出「必要的」。',
      note: '先认词干 essenti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was essential.', chinese: '即使是初读者也能看出，这个结果是必要的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'essential.s1', en: 'They wanted a essential answer, not a long speech.', zh: '他们要一个必要的的答复，不要长篇发言。', structure: 'essential / 表示 / 必要的', grammar: 'adjective，围绕「必要的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are essential.', right: 'The news is essential.', reason: 'news 作主语时动词用单数。', rule: '先确定 essential 是adjective，再套「必要的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'essential.q1', senseId: 'essential.s1', errorType: 'meaning', type: '词义选择', prompt: '「essential」在本条的核心意思是：', options: ['必要的', '完全相反的意思', '一种古代钱币'], answer: '必要的', explain: 'essential：必要的。' },
      { id: 'essential.q2', senseId: 'essential.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches essential?', options: ['必要的', 'a kind of ancient coin', 'the past tense of be'], answer: '必要的', explain: '对的是「必要的」。' },
      { id: 'essential.q3', senseId: 'essential.s1', errorType: 'grammar', type: '词义选择', prompt: 'essential 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'essential.q4', senseId: 'essential.s1', errorType: 'meaning', type: '词源', prompt: '记 essential 时，哪句更稳妥？', options: ['先锁住「必要的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「必要的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['必要的'] },
  });

  D('essentials', {
    etymology: {
      origin: '现代英语常用词「essentials」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'essentials', gloss: '必需品' },
      suffix: null,
      history: [
        { label: 'essentials', text: '现代英语常用词「essentials」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：必需品。' },
      ],
      formationLogic: '核心义：必需品。',
      mnemonic: '看到 essentials，先说出「必需品」。',
      note: '核心义：必需品。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one essentials.', chinese: '这一章反复回到同一个点：必需品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'essentials.s1', en: 'Without that essentials, the next paragraph is hard to follow.', zh: '没有这个必需品，下一段会很难读。', structure: 'essentials / 表示 / 必需品', grammar: 'noun，围绕「必需品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the essentials.', right: 'He gave me some advice about the essentials.', reason: 'advice 不可数。名词 essentials 的单复数按词典词形记。', rule: '先确定 essentials 是noun，再套「必需品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'essentials.q1', senseId: 'essentials.s1', errorType: 'meaning', type: '词义选择', prompt: '「essentials」在本条的核心意思是：', options: ['必需品', '完全相反的意思', '一种古代钱币'], answer: '必需品', explain: 'essentials：必需品。' },
      { id: 'essentials.q2', senseId: 'essentials.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches essentials?', options: ['必需品', 'a kind of ancient coin', 'the past tense of be'], answer: '必需品', explain: '对的是「必需品」。' },
      { id: 'essentials.q3', senseId: 'essentials.s1', errorType: 'grammar', type: '词义选择', prompt: 'essentials 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'essentials.q4', senseId: 'essentials.s1', errorType: 'meaning', type: '词源', prompt: '记 essentials 时，哪句更稳妥？', options: ['先锁住「必需品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「必需品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['必需品'] },
  });

  D('est', {
    etymology: {
      origin: '现代英语常用词「est」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'est', gloss: '最高级后缀 -est' },
      suffix: null,
      history: [
        { label: 'est', text: '现代英语常用词「est」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：最高级后缀 -est。' },
      ],
      formationLogic: '核心义：最高级后缀 -est。',
      mnemonic: '看到 est，先说出「最高级后缀 -est」。',
      note: '核心义：最高级后缀 -est。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one est.', chinese: '这一章反复回到同一个点：最高级后缀 -est。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'est.s1', en: 'Without that est, the next paragraph is hard to follow.', zh: '没有这个最高级后缀 -est，下一段会很难读。', structure: 'est / 表示 / 最高级后缀 -est', grammar: 'suffix，围绕「最高级后缀 -est」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the est.', right: 'He gave me some advice about the est.', reason: 'advice 不可数。名词 est 的单复数按词典词形记。', rule: '先确定 est 是suffix，再套「最高级后缀 -est」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'est.q1', senseId: 'est.s1', errorType: 'meaning', type: '词义选择', prompt: '「est」在本条的核心意思是：', options: ['最高级后缀 -est', '完全相反的意思', '一种古代钱币'], answer: '最高级后缀 -est', explain: 'est：最高级后缀 -est。' },
      { id: 'est.q2', senseId: 'est.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches est?', options: ['最高级后缀 -est', 'a kind of ancient coin', 'the past tense of be'], answer: '最高级后缀 -est', explain: '对的是「最高级后缀 -est」。' },
      { id: 'est.q3', senseId: 'est.s1', errorType: 'grammar', type: '词义选择', prompt: 'est 的词性（本条）更接近：', options: ['suffix', '只能作感叹词', '只能作数词'], answer: 'suffix', explain: '本条按 suffix 来用。' },
      { id: 'est.q4', senseId: 'est.s1', errorType: 'meaning', type: '词源', prompt: '记 est 时，哪句更稳妥？', options: ['先锁住「最高级后缀 -est」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最高级后缀 -est」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最高级后缀 -est'] },
  });

  D('establish', {
    etymology: {
      origin: '现代英语常用词「establish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'establish', gloss: '建立' },
      suffix: null,
      history: [
        { label: 'establish', text: '现代英语常用词「establish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：建立。' },
      ],
      formationLogic: '核心义：建立。',
      mnemonic: '看到 establish，先说出「建立」。',
      note: '核心义：建立。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to establish before the office closed.', chinese: '他们同意在办公室关门前做这件事：建立。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'establish.s1', en: 'The deadline forced the team to establish that afternoon.', zh: '截止日期逼着小组在那天下午建立。', structure: 'establish / 表示 / 建立', grammar: 'verb，围绕「建立」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She established it yesterday without checking the real past form.', right: 'Check the past form of "establish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 establish 是verb，再套「建立」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'establish.q1', senseId: 'establish.s1', errorType: 'meaning', type: '词义选择', prompt: '「establish」在本条的核心意思是：', options: ['建立', '完全相反的意思', '一种古代钱币'], answer: '建立', explain: 'establish：建立。' },
      { id: 'establish.q2', senseId: 'establish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches establish?', options: ['建立', 'a kind of ancient coin', 'the past tense of be'], answer: '建立', explain: '对的是「建立」。' },
      { id: 'establish.q3', senseId: 'establish.s1', errorType: 'grammar', type: '词义选择', prompt: 'establish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'establish.q4', senseId: 'establish.s1', errorType: 'meaning', type: '词源', prompt: '记 establish 时，哪句更稳妥？', options: ['先锁住「建立」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「建立」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建立'] },
  });

  D('established', {
    etymology: {
      origin: '现代英语常用词「established」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'established', gloss: '已确立的' },
      suffix: null,
      history: [
        { label: 'established', text: '现代英语常用词「established」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：已确立的。' },
      ],
      formationLogic: '核心义：已确立的。',
      mnemonic: '看到 established，先说出「已确立的」。',
      note: '核心义：已确立的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was established.', chinese: '即使是初读者也能看出，这个结果是已确立的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'established.s1', en: 'They wanted a established answer, not a long speech.', zh: '他们要一个已确立的的答复，不要长篇发言。', structure: 'established / 表示 / 已确立的', grammar: 'adjective，围绕「已确立的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are established.', right: 'The news is established.', reason: 'news 作主语时动词用单数。', rule: '先确定 established 是adjective，再套「已确立的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'established.q1', senseId: 'established.s1', errorType: 'meaning', type: '词义选择', prompt: '「established」在本条的核心意思是：', options: ['已确立的', '完全相反的意思', '一种古代钱币'], answer: '已确立的', explain: 'established：已确立的。' },
      { id: 'established.q2', senseId: 'established.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches established?', options: ['已确立的', 'a kind of ancient coin', 'the past tense of be'], answer: '已确立的', explain: '对的是「已确立的」。' },
      { id: 'established.q3', senseId: 'established.s1', errorType: 'grammar', type: '词义选择', prompt: 'established 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'established.q4', senseId: 'established.s1', errorType: 'meaning', type: '词源', prompt: '记 established 时，哪句更稳妥？', options: ['先锁住「已确立的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「已确立的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['已确立的'] },
  });

  D('establishment', {
    etymology: {
      origin: '英语派生：establish + -ment，词性转到「建立」。',
      prefix: null,
      root: { text: 'establish', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'establishment', text: '英语派生：establish + -ment，词性转到「建立」。' },
        { label: '现在', text: '核心用法是：建立。' },
      ],
      formationLogic: '先认词干 establish，再看词尾。',
      mnemonic: '看到 establishment，先说出「建立」。',
      note: '先认词干 establish，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one establishment.', chinese: '这一章反复回到同一个点：建立。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'establishment.s1', en: 'Without that establishment, the next paragraph is hard to follow.', zh: '没有这个建立，下一段会很难读。', structure: 'establishment / 表示 / 建立', grammar: 'noun，围绕「建立」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the establishment.', right: 'He gave me some advice about the establishment.', reason: 'advice 不可数。名词 establishment 的单复数按词典词形记。', rule: '先确定 establishment 是noun，再套「建立」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'establishment.q1', senseId: 'establishment.s1', errorType: 'meaning', type: '词义选择', prompt: '「establishment」在本条的核心意思是：', options: ['建立', '完全相反的意思', '一种古代钱币'], answer: '建立', explain: 'establishment：建立。' },
      { id: 'establishment.q2', senseId: 'establishment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches establishment?', options: ['建立', 'a kind of ancient coin', 'the past tense of be'], answer: '建立', explain: '对的是「建立」。' },
      { id: 'establishment.q3', senseId: 'establishment.s1', errorType: 'grammar', type: '词义选择', prompt: 'establishment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'establishment.q4', senseId: 'establishment.s1', errorType: 'meaning', type: '词源', prompt: '记 establishment 时，哪句更稳妥？', options: ['先锁住「建立」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「建立」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建立'] },
  });

  D('estate', {
    etymology: {
      origin: '现代英语常用词「estate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'estate', gloss: '地产' },
      suffix: null,
      history: [
        { label: 'estate', text: '现代英语常用词「estate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地产。' },
      ],
      formationLogic: '核心义：地产。',
      mnemonic: '看到 estate，先说出「地产」。',
      note: '核心义：地产。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one estate.', chinese: '这一章反复回到同一个点：地产。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'estate.s1', en: 'Without that estate, the next paragraph is hard to follow.', zh: '没有这个地产，下一段会很难读。', structure: 'estate / 表示 / 地产', grammar: 'noun，围绕「地产」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the estate.', right: 'He gave me some advice about the estate.', reason: 'advice 不可数。名词 estate 的单复数按词典词形记。', rule: '先确定 estate 是noun，再套「地产」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'estate.q1', senseId: 'estate.s1', errorType: 'meaning', type: '词义选择', prompt: '「estate」在本条的核心意思是：', options: ['地产', '完全相反的意思', '一种古代钱币'], answer: '地产', explain: 'estate：地产。' },
      { id: 'estate.q2', senseId: 'estate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches estate?', options: ['地产', 'a kind of ancient coin', 'the past tense of be'], answer: '地产', explain: '对的是「地产」。' },
      { id: 'estate.q3', senseId: 'estate.s1', errorType: 'grammar', type: '词义选择', prompt: 'estate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'estate.q4', senseId: 'estate.s1', errorType: 'meaning', type: '词源', prompt: '记 estate 时，哪句更稳妥？', options: ['先锁住「地产」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地产」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地产'] },
  });

  D('estate car', {
    etymology: {
      origin: '现代英语固定说法「estate car」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'estate car', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'estate car', text: '现代英语固定说法「estate car」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：旅行车。' },
      ],
      formationLogic: '核心义：旅行车。',
      mnemonic: '看到 estate car，先说出「旅行车」。',
      note: '核心义：旅行车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "estate car" and asked the class to keep it as one unit.', chinese: '老师把「estate car」圈出来，让全班把它当成一个整体。它表示旅行车。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'estate car.s1', en: 'In the margin she wrote "estate car" so nobody would split the phrase.', zh: '她在页边写下「estate car」，免得有人把这个说法拆开。意思是旅行车。', structure: 'estate car / 表示 / 旅行车', grammar: 'noun，围绕「旅行车」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of estate car and lost the point.', right: 'Keep "estate car" together: it means 旅行车.', reason: '「estate car」要整块理解。', rule: '先确定 estate car 是noun，再套「旅行车」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'estate car.q1', senseId: 'estate car.s1', errorType: 'meaning', type: '词义选择', prompt: '「estate car」在本条的核心意思是：', options: ['旅行车', '完全相反的意思', '一种古代钱币'], answer: '旅行车', explain: 'estate car：旅行车。' },
      { id: 'estate car.q2', senseId: 'estate car.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches estate car?', options: ['旅行车', 'a kind of ancient coin', 'the past tense of be'], answer: '旅行车', explain: '对的是「旅行车」。' },
      { id: 'estate car.q3', senseId: 'estate car.s1', errorType: 'grammar', type: '词义选择', prompt: 'estate car 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'estate car.q4', senseId: 'estate car.s1', errorType: 'meaning', type: '词源', prompt: '记 estate car 时，哪句更稳妥？', options: ['先锁住「旅行车」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「旅行车」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['旅行车'] },
  });

  D('esteem', {
    etymology: {
      origin: '现代英语常用词「esteem」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'esteem', gloss: '尊重' },
      suffix: null,
      history: [
        { label: 'esteem', text: '现代英语常用词「esteem」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：尊重。' },
      ],
      formationLogic: '核心义：尊重。',
      mnemonic: '看到 esteem，先说出「尊重」。',
      note: '核心义：尊重。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one esteem.', chinese: '这一章反复回到同一个点：尊重。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'esteem.s1', en: 'Without that esteem, the next paragraph is hard to follow.', zh: '没有这个尊重，下一段会很难读。', structure: 'esteem / 表示 / 尊重', grammar: 'noun，围绕「尊重」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the esteem.', right: 'He gave me some advice about the esteem.', reason: 'advice 不可数。名词 esteem 的单复数按词典词形记。', rule: '先确定 esteem 是noun，再套「尊重」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'esteem.q1', senseId: 'esteem.s1', errorType: 'meaning', type: '词义选择', prompt: '「esteem」在本条的核心意思是：', options: ['尊重', '完全相反的意思', '一种古代钱币'], answer: '尊重', explain: 'esteem：尊重。' },
      { id: 'esteem.q2', senseId: 'esteem.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches esteem?', options: ['尊重', 'a kind of ancient coin', 'the past tense of be'], answer: '尊重', explain: '对的是「尊重」。' },
      { id: 'esteem.q3', senseId: 'esteem.s1', errorType: 'grammar', type: '词义选择', prompt: 'esteem 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'esteem.q4', senseId: 'esteem.s1', errorType: 'meaning', type: '词源', prompt: '记 esteem 时，哪句更稳妥？', options: ['先锁住「尊重」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尊重」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尊重'] },
  });

  D('esthetic', {
    etymology: {
      origin: '英语派生：esthet + -ic，词性转到「审美的」。',
      prefix: null,
      root: { text: 'esthet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'esthetic', text: '英语派生：esthet + -ic，词性转到「审美的」。' },
        { label: '现在', text: '核心用法是：审美的。' },
      ],
      formationLogic: '先认词干 esthet，再看词尾。',
      mnemonic: '看到 esthetic，先说出「审美的」。',
      note: '先认词干 esthet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was esthetic.', chinese: '即使是初读者也能看出，这个结果是审美的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'esthetic.s1', en: 'They wanted a esthetic answer, not a long speech.', zh: '他们要一个审美的的答复，不要长篇发言。', structure: 'esthetic / 表示 / 审美的', grammar: 'adjective，围绕「审美的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are esthetic.', right: 'The news is esthetic.', reason: 'news 作主语时动词用单数。', rule: '先确定 esthetic 是adjective，再套「审美的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'esthetic.q1', senseId: 'esthetic.s1', errorType: 'meaning', type: '词义选择', prompt: '「esthetic」在本条的核心意思是：', options: ['审美的', '完全相反的意思', '一种古代钱币'], answer: '审美的', explain: 'esthetic：审美的。' },
      { id: 'esthetic.q2', senseId: 'esthetic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches esthetic?', options: ['审美的', 'a kind of ancient coin', 'the past tense of be'], answer: '审美的', explain: '对的是「审美的」。' },
      { id: 'esthetic.q3', senseId: 'esthetic.s1', errorType: 'grammar', type: '词义选择', prompt: 'esthetic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'esthetic.q4', senseId: 'esthetic.s1', errorType: 'meaning', type: '词源', prompt: '记 esthetic 时，哪句更稳妥？', options: ['先锁住「审美的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「审美的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['审美的'] },
  });

  D('estimate', {
    etymology: {
      origin: '现代英语常用词「estimate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'estimate', gloss: '估计' },
      suffix: null,
      history: [
        { label: 'estimate', text: '现代英语常用词「estimate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：估计。' },
      ],
      formationLogic: '核心义：估计。',
      mnemonic: '看到 estimate，先说出「估计」。',
      note: '核心义：估计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to estimate before the office closed.', chinese: '他们同意在办公室关门前做这件事：估计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'estimate.s1', en: 'The deadline forced the team to estimate that afternoon.', zh: '截止日期逼着小组在那天下午估计。', structure: 'estimate / 表示 / 估计', grammar: 'verb，围绕「估计」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She estimateed it yesterday without checking the real past form.', right: 'Check the past form of "estimate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 estimate 是verb，再套「估计」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'estimate.q1', senseId: 'estimate.s1', errorType: 'meaning', type: '词义选择', prompt: '「estimate」在本条的核心意思是：', options: ['估计', '完全相反的意思', '一种古代钱币'], answer: '估计', explain: 'estimate：估计。' },
      { id: 'estimate.q2', senseId: 'estimate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches estimate?', options: ['估计', 'a kind of ancient coin', 'the past tense of be'], answer: '估计', explain: '对的是「估计」。' },
      { id: 'estimate.q3', senseId: 'estimate.s1', errorType: 'grammar', type: '词义选择', prompt: 'estimate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'estimate.q4', senseId: 'estimate.s1', errorType: 'meaning', type: '词源', prompt: '记 estimate 时，哪句更稳妥？', options: ['先锁住「估计」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「估计」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['估计'] },
  });

  D('estimated', {
    etymology: {
      origin: '现代英语常用词「estimated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'estimated', gloss: '估计的' },
      suffix: null,
      history: [
        { label: 'estimated', text: '现代英语常用词「estimated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：估计的。' },
      ],
      formationLogic: '核心义：估计的。',
      mnemonic: '看到 estimated，先说出「估计的」。',
      note: '核心义：估计的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was estimated.', chinese: '即使是初读者也能看出，这个结果是估计的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'estimated.s1', en: 'They wanted a estimated answer, not a long speech.', zh: '他们要一个估计的的答复，不要长篇发言。', structure: 'estimated / 表示 / 估计的', grammar: 'adjective，围绕「估计的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are estimated.', right: 'The news is estimated.', reason: 'news 作主语时动词用单数。', rule: '先确定 estimated 是adjective，再套「估计的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'estimated.q1', senseId: 'estimated.s1', errorType: 'meaning', type: '词义选择', prompt: '「estimated」在本条的核心意思是：', options: ['估计的', '完全相反的意思', '一种古代钱币'], answer: '估计的', explain: 'estimated：估计的。' },
      { id: 'estimated.q2', senseId: 'estimated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches estimated?', options: ['估计的', 'a kind of ancient coin', 'the past tense of be'], answer: '估计的', explain: '对的是「估计的」。' },
      { id: 'estimated.q3', senseId: 'estimated.s1', errorType: 'grammar', type: '词义选择', prompt: 'estimated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'estimated.q4', senseId: 'estimated.s1', errorType: 'meaning', type: '词源', prompt: '记 estimated 时，哪句更稳妥？', options: ['先锁住「估计的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「估计的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['估计的'] },
  });

  D('estimation', {
    etymology: {
      origin: '英语派生：estima + -tion，词性转到「估计」。',
      prefix: null,
      root: { text: 'estima', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'estimation', text: '英语派生：estima + -tion，词性转到「估计」。' },
        { label: '现在', text: '核心用法是：估计。' },
      ],
      formationLogic: '先认词干 estima，再看词尾。',
      mnemonic: '看到 estimation，先说出「估计」。',
      note: '先认词干 estima，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one estimation.', chinese: '这一章反复回到同一个点：估计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'estimation.s1', en: 'Without that estimation, the next paragraph is hard to follow.', zh: '没有这个估计，下一段会很难读。', structure: 'estimation / 表示 / 估计', grammar: 'noun，围绕「估计」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the estimation.', right: 'He gave me some advice about the estimation.', reason: 'advice 不可数。名词 estimation 的单复数按词典词形记。', rule: '先确定 estimation 是noun，再套「估计」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'estimation.q1', senseId: 'estimation.s1', errorType: 'meaning', type: '词义选择', prompt: '「estimation」在本条的核心意思是：', options: ['估计', '完全相反的意思', '一种古代钱币'], answer: '估计', explain: 'estimation：估计。' },
      { id: 'estimation.q2', senseId: 'estimation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches estimation?', options: ['估计', 'a kind of ancient coin', 'the past tense of be'], answer: '估计', explain: '对的是「估计」。' },
      { id: 'estimation.q3', senseId: 'estimation.s1', errorType: 'grammar', type: '词义选择', prompt: 'estimation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'estimation.q4', senseId: 'estimation.s1', errorType: 'meaning', type: '词源', prompt: '记 estimation 时，哪句更稳妥？', options: ['先锁住「估计」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「估计」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['估计'] },
  });

  D('eternal', {
    etymology: {
      origin: '英语派生：etern + -al，词性转到「永恒的」。',
      prefix: null,
      root: { text: 'etern', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eternal', text: '英语派生：etern + -al，词性转到「永恒的」。' },
        { label: '现在', text: '核心用法是：永恒的。' },
      ],
      formationLogic: '先认词干 etern，再看词尾。',
      mnemonic: '看到 eternal，先说出「永恒的」。',
      note: '先认词干 etern，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eternal.', chinese: '即使是初读者也能看出，这个结果是永恒的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eternal.s1', en: 'They wanted a eternal answer, not a long speech.', zh: '他们要一个永恒的的答复，不要长篇发言。', structure: 'eternal / 表示 / 永恒的', grammar: 'adjective，围绕「永恒的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eternal.', right: 'The news is eternal.', reason: 'news 作主语时动词用单数。', rule: '先确定 eternal 是adjective，再套「永恒的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eternal.q1', senseId: 'eternal.s1', errorType: 'meaning', type: '词义选择', prompt: '「eternal」在本条的核心意思是：', options: ['永恒的', '完全相反的意思', '一种古代钱币'], answer: '永恒的', explain: 'eternal：永恒的。' },
      { id: 'eternal.q2', senseId: 'eternal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eternal?', options: ['永恒的', 'a kind of ancient coin', 'the past tense of be'], answer: '永恒的', explain: '对的是「永恒的」。' },
      { id: 'eternal.q3', senseId: 'eternal.s1', errorType: 'grammar', type: '词义选择', prompt: 'eternal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eternal.q4', senseId: 'eternal.s1', errorType: 'meaning', type: '词源', prompt: '记 eternal 时，哪句更稳妥？', options: ['先锁住「永恒的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「永恒的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['永恒的'] },
  });

  D('eternally', {
    etymology: {
      origin: '英语派生：eternal + -ly，词性转到「永远地」。',
      prefix: null,
      root: { text: 'eternal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eternally', text: '英语派生：eternal + -ly，词性转到「永远地」。' },
        { label: '现在', text: '核心用法是：永远地。' },
      ],
      formationLogic: '先认词干 eternal，再看词尾。',
      mnemonic: '看到 eternally，先说出「永远地」。',
      note: '先认词干 eternal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule eternally, and the class followed.', chinese: '她把规则讲清楚了（永远地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eternally.s1', en: 'He nodded eternally and returned to the notes.', zh: '他永远地地点了点头，又回去看笔记。', structure: 'eternally / 表示 / 永远地', grammar: 'adverb，围绕「永远地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very eternallyly in the meeting.', right: 'She spoke eternally in the meeting.', reason: 'eternally 已经是副词，不要再加 -ly。', rule: '先确定 eternally 是adverb，再套「永远地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eternally.q1', senseId: 'eternally.s1', errorType: 'meaning', type: '词义选择', prompt: '「eternally」在本条的核心意思是：', options: ['永远地', '完全相反的意思', '一种古代钱币'], answer: '永远地', explain: 'eternally：永远地。' },
      { id: 'eternally.q2', senseId: 'eternally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eternally?', options: ['永远地', 'a kind of ancient coin', 'the past tense of be'], answer: '永远地', explain: '对的是「永远地」。' },
      { id: 'eternally.q3', senseId: 'eternally.s1', errorType: 'grammar', type: '词义选择', prompt: 'eternally 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'eternally.q4', senseId: 'eternally.s1', errorType: 'meaning', type: '词源', prompt: '记 eternally 时，哪句更稳妥？', options: ['先锁住「永远地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「永远地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['永远地'] },
  });

  D('eternity', {
    etymology: {
      origin: '英语派生：etern + -ity，词性转到「永恒」。',
      prefix: null,
      root: { text: 'etern', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eternity', text: '英语派生：etern + -ity，词性转到「永恒」。' },
        { label: '现在', text: '核心用法是：永恒。' },
      ],
      formationLogic: '先认词干 etern，再看词尾。',
      mnemonic: '看到 eternity，先说出「永恒」。',
      note: '先认词干 etern，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eternity.', chinese: '这一章反复回到同一个点：永恒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eternity.s1', en: 'Without that eternity, the next paragraph is hard to follow.', zh: '没有这个永恒，下一段会很难读。', structure: 'eternity / 表示 / 永恒', grammar: 'noun，围绕「永恒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eternity.', right: 'He gave me some advice about the eternity.', reason: 'advice 不可数。名词 eternity 的单复数按词典词形记。', rule: '先确定 eternity 是noun，再套「永恒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eternity.q1', senseId: 'eternity.s1', errorType: 'meaning', type: '词义选择', prompt: '「eternity」在本条的核心意思是：', options: ['永恒', '完全相反的意思', '一种古代钱币'], answer: '永恒', explain: 'eternity：永恒。' },
      { id: 'eternity.q2', senseId: 'eternity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eternity?', options: ['永恒', 'a kind of ancient coin', 'the past tense of be'], answer: '永恒', explain: '对的是「永恒」。' },
      { id: 'eternity.q3', senseId: 'eternity.s1', errorType: 'grammar', type: '词义选择', prompt: 'eternity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eternity.q4', senseId: 'eternity.s1', errorType: 'meaning', type: '词源', prompt: '记 eternity 时，哪句更稳妥？', options: ['先锁住「永恒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「永恒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['永恒'] },
  });

  D('ethanol', {
    etymology: {
      origin: '现代英语常用词「ethanol」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ethanol', gloss: '乙醇' },
      suffix: null,
      history: [
        { label: 'ethanol', text: '现代英语常用词「ethanol」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：乙醇。' },
      ],
      formationLogic: '核心义：乙醇。',
      mnemonic: '看到 ethanol，先说出「乙醇」。',
      note: '核心义：乙醇。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ethanol.', chinese: '这一章反复回到同一个点：乙醇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethanol.s1', en: 'Without that ethanol, the next paragraph is hard to follow.', zh: '没有这个乙醇，下一段会很难读。', structure: 'ethanol / 表示 / 乙醇', grammar: 'noun，围绕「乙醇」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ethanol.', right: 'He gave me some advice about the ethanol.', reason: 'advice 不可数。名词 ethanol 的单复数按词典词形记。', rule: '先确定 ethanol 是noun，再套「乙醇」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethanol.q1', senseId: 'ethanol.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethanol」在本条的核心意思是：', options: ['乙醇', '完全相反的意思', '一种古代钱币'], answer: '乙醇', explain: 'ethanol：乙醇。' },
      { id: 'ethanol.q2', senseId: 'ethanol.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethanol?', options: ['乙醇', 'a kind of ancient coin', 'the past tense of be'], answer: '乙醇', explain: '对的是「乙醇」。' },
      { id: 'ethanol.q3', senseId: 'ethanol.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethanol 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ethanol.q4', senseId: 'ethanol.s1', errorType: 'meaning', type: '词源', prompt: '记 ethanol 时，哪句更稳妥？', options: ['先锁住「乙醇」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乙醇」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乙醇'] },
  });

  D('ethic', {
    etymology: {
      origin: '英语派生：eth + -ic，词性转到「道德准则」。',
      prefix: null,
      root: { text: 'eth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ethic', text: '英语派生：eth + -ic，词性转到「道德准则」。' },
        { label: '现在', text: '核心用法是：道德准则。' },
      ],
      formationLogic: '先认词干 eth，再看词尾。',
      mnemonic: '看到 ethic，先说出「道德准则」。',
      note: '先认词干 eth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ethic.', chinese: '这一章反复回到同一个点：道德准则。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethic.s1', en: 'Without that ethic, the next paragraph is hard to follow.', zh: '没有这个道德准则，下一段会很难读。', structure: 'ethic / 表示 / 道德准则', grammar: 'noun，围绕「道德准则」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ethic.', right: 'He gave me some advice about the ethic.', reason: 'advice 不可数。名词 ethic 的单复数按词典词形记。', rule: '先确定 ethic 是noun，再套「道德准则」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethic.q1', senseId: 'ethic.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethic」在本条的核心意思是：', options: ['道德准则', '完全相反的意思', '一种古代钱币'], answer: '道德准则', explain: 'ethic：道德准则。' },
      { id: 'ethic.q2', senseId: 'ethic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethic?', options: ['道德准则', 'a kind of ancient coin', 'the past tense of be'], answer: '道德准则', explain: '对的是「道德准则」。' },
      { id: 'ethic.q3', senseId: 'ethic.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ethic.q4', senseId: 'ethic.s1', errorType: 'meaning', type: '词源', prompt: '记 ethic 时，哪句更稳妥？', options: ['先锁住「道德准则」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「道德准则」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['道德准则'] },
  });

  D('ethical', {
    etymology: {
      origin: '英语派生：ethic + -al，词性转到「道德的」。',
      prefix: null,
      root: { text: 'ethic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ethical', text: '英语派生：ethic + -al，词性转到「道德的」。' },
        { label: '现在', text: '核心用法是：道德的。' },
      ],
      formationLogic: '先认词干 ethic，再看词尾。',
      mnemonic: '看到 ethical，先说出「道德的」。',
      note: '先认词干 ethic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was ethical.', chinese: '即使是初读者也能看出，这个结果是道德的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethical.s1', en: 'They wanted a ethical answer, not a long speech.', zh: '他们要一个道德的的答复，不要长篇发言。', structure: 'ethical / 表示 / 道德的', grammar: 'adjective，围绕「道德的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ethical.', right: 'The news is ethical.', reason: 'news 作主语时动词用单数。', rule: '先确定 ethical 是adjective，再套「道德的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethical.q1', senseId: 'ethical.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethical」在本条的核心意思是：', options: ['道德的', '完全相反的意思', '一种古代钱币'], answer: '道德的', explain: 'ethical：道德的。' },
      { id: 'ethical.q2', senseId: 'ethical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethical?', options: ['道德的', 'a kind of ancient coin', 'the past tense of be'], answer: '道德的', explain: '对的是「道德的」。' },
      { id: 'ethical.q3', senseId: 'ethical.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ethical.q4', senseId: 'ethical.s1', errorType: 'meaning', type: '词源', prompt: '记 ethical 时，哪句更稳妥？', options: ['先锁住「道德的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「道德的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['道德的'] },
  });

  D('ethics', {
    etymology: {
      origin: '现代英语常用词「ethics」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ethics', gloss: '伦理学' },
      suffix: null,
      history: [
        { label: 'ethics', text: '现代英语常用词「ethics」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：伦理学。' },
      ],
      formationLogic: '核心义：伦理学。',
      mnemonic: '看到 ethics，先说出「伦理学」。',
      note: '核心义：伦理学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ethics.', chinese: '这一章反复回到同一个点：伦理学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethics.s1', en: 'Without that ethics, the next paragraph is hard to follow.', zh: '没有这个伦理学，下一段会很难读。', structure: 'ethics / 表示 / 伦理学', grammar: 'noun，围绕「伦理学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ethics.', right: 'He gave me some advice about the ethics.', reason: 'advice 不可数。名词 ethics 的单复数按词典词形记。', rule: '先确定 ethics 是noun，再套「伦理学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethics.q1', senseId: 'ethics.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethics」在本条的核心意思是：', options: ['伦理学', '完全相反的意思', '一种古代钱币'], answer: '伦理学', explain: 'ethics：伦理学。' },
      { id: 'ethics.q2', senseId: 'ethics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethics?', options: ['伦理学', 'a kind of ancient coin', 'the past tense of be'], answer: '伦理学', explain: '对的是「伦理学」。' },
      { id: 'ethics.q3', senseId: 'ethics.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ethics.q4', senseId: 'ethics.s1', errorType: 'meaning', type: '词源', prompt: '记 ethics 时，哪句更稳妥？', options: ['先锁住「伦理学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「伦理学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伦理学'] },
  });

  D('ethnic', {
    etymology: {
      origin: '英语派生：ethn + -ic，词性转到「民族的」。',
      prefix: null,
      root: { text: 'ethn', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ethnic', text: '英语派生：ethn + -ic，词性转到「民族的」。' },
        { label: '现在', text: '核心用法是：民族的。' },
      ],
      formationLogic: '先认词干 ethn，再看词尾。',
      mnemonic: '看到 ethnic，先说出「民族的」。',
      note: '先认词干 ethn，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was ethnic.', chinese: '即使是初读者也能看出，这个结果是民族的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethnic.s1', en: 'They wanted a ethnic answer, not a long speech.', zh: '他们要一个民族的的答复，不要长篇发言。', structure: 'ethnic / 表示 / 民族的', grammar: 'adjective，围绕「民族的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ethnic.', right: 'The news is ethnic.', reason: 'news 作主语时动词用单数。', rule: '先确定 ethnic 是adjective，再套「民族的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethnic.q1', senseId: 'ethnic.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethnic」在本条的核心意思是：', options: ['民族的', '完全相反的意思', '一种古代钱币'], answer: '民族的', explain: 'ethnic：民族的。' },
      { id: 'ethnic.q2', senseId: 'ethnic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethnic?', options: ['民族的', 'a kind of ancient coin', 'the past tense of be'], answer: '民族的', explain: '对的是「民族的」。' },
      { id: 'ethnic.q3', senseId: 'ethnic.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethnic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ethnic.q4', senseId: 'ethnic.s1', errorType: 'meaning', type: '词源', prompt: '记 ethnic 时，哪句更稳妥？', options: ['先锁住「民族的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「民族的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['民族的'] },
  });

  D('ethnic group', {
    etymology: {
      origin: '现代英语固定说法「ethnic group」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'ethnic group', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'ethnic group', text: '现代英语固定说法「ethnic group」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：少数民族。' },
      ],
      formationLogic: '核心义：少数民族。',
      mnemonic: '看到 ethnic group，先说出「少数民族」。',
      note: '核心义：少数民族。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "ethnic group" and asked the class to keep it as one unit.', chinese: '老师把「ethnic group」圈出来，让全班把它当成一个整体。它表示少数民族。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethnic group.s1', en: 'In the margin she wrote "ethnic group" so nobody would split the phrase.', zh: '她在页边写下「ethnic group」，免得有人把这个说法拆开。意思是少数民族。', structure: 'ethnic group / 表示 / 少数民族', grammar: 'noun，围绕「少数民族」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of ethnic group and lost the point.', right: 'Keep "ethnic group" together: it means 少数民族.', reason: '「ethnic group」要整块理解。', rule: '先确定 ethnic group 是noun，再套「少数民族」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethnic group.q1', senseId: 'ethnic group.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethnic group」在本条的核心意思是：', options: ['少数民族', '完全相反的意思', '一种古代钱币'], answer: '少数民族', explain: 'ethnic group：少数民族。' },
      { id: 'ethnic group.q2', senseId: 'ethnic group.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethnic group?', options: ['少数民族', 'a kind of ancient coin', 'the past tense of be'], answer: '少数民族', explain: '对的是「少数民族」。' },
      { id: 'ethnic group.q3', senseId: 'ethnic group.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethnic group 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ethnic group.q4', senseId: 'ethnic group.s1', errorType: 'meaning', type: '词源', prompt: '记 ethnic group 时，哪句更稳妥？', options: ['先锁住「少数民族」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「少数民族」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['少数民族'] },
  });

  D('ethnicity', {
    etymology: {
      origin: '英语派生：ethnic + -ity，词性转到「种族」。',
      prefix: null,
      root: { text: 'ethnic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ethnicity', text: '英语派生：ethnic + -ity，词性转到「种族」。' },
        { label: '现在', text: '核心用法是：种族。' },
      ],
      formationLogic: '先认词干 ethnic，再看词尾。',
      mnemonic: '看到 ethnicity，先说出「种族」。',
      note: '先认词干 ethnic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ethnicity.', chinese: '这一章反复回到同一个点：种族。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ethnicity.s1', en: 'Without that ethnicity, the next paragraph is hard to follow.', zh: '没有这个种族，下一段会很难读。', structure: 'ethnicity / 表示 / 种族', grammar: 'noun，围绕「种族」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ethnicity.', right: 'He gave me some advice about the ethnicity.', reason: 'advice 不可数。名词 ethnicity 的单复数按词典词形记。', rule: '先确定 ethnicity 是noun，再套「种族」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ethnicity.q1', senseId: 'ethnicity.s1', errorType: 'meaning', type: '词义选择', prompt: '「ethnicity」在本条的核心意思是：', options: ['种族', '完全相反的意思', '一种古代钱币'], answer: '种族', explain: 'ethnicity：种族。' },
      { id: 'ethnicity.q2', senseId: 'ethnicity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ethnicity?', options: ['种族', 'a kind of ancient coin', 'the past tense of be'], answer: '种族', explain: '对的是「种族」。' },
      { id: 'ethnicity.q3', senseId: 'ethnicity.s1', errorType: 'grammar', type: '词义选择', prompt: 'ethnicity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ethnicity.q4', senseId: 'ethnicity.s1', errorType: 'meaning', type: '词源', prompt: '记 ethnicity 时，哪句更稳妥？', options: ['先锁住「种族」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「种族」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['种族'] },
  });

  D('etiquette', {
    etymology: {
      origin: '现代英语常用词「etiquette」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'etiquette', gloss: '礼节' },
      suffix: null,
      history: [
        { label: 'etiquette', text: '现代英语常用词「etiquette」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：礼节。' },
      ],
      formationLogic: '核心义：礼节。',
      mnemonic: '看到 etiquette，先说出「礼节」。',
      note: '核心义：礼节。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one etiquette.', chinese: '这一章反复回到同一个点：礼节。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'etiquette.s1', en: 'Without that etiquette, the next paragraph is hard to follow.', zh: '没有这个礼节，下一段会很难读。', structure: 'etiquette / 表示 / 礼节', grammar: 'noun，围绕「礼节」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the etiquette.', right: 'He gave me some advice about the etiquette.', reason: 'advice 不可数。名词 etiquette 的单复数按词典词形记。', rule: '先确定 etiquette 是noun，再套「礼节」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'etiquette.q1', senseId: 'etiquette.s1', errorType: 'meaning', type: '词义选择', prompt: '「etiquette」在本条的核心意思是：', options: ['礼节', '完全相反的意思', '一种古代钱币'], answer: '礼节', explain: 'etiquette：礼节。' },
      { id: 'etiquette.q2', senseId: 'etiquette.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches etiquette?', options: ['礼节', 'a kind of ancient coin', 'the past tense of be'], answer: '礼节', explain: '对的是「礼节」。' },
      { id: 'etiquette.q3', senseId: 'etiquette.s1', errorType: 'grammar', type: '词义选择', prompt: 'etiquette 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'etiquette.q4', senseId: 'etiquette.s1', errorType: 'meaning', type: '词源', prompt: '记 etiquette 时，哪句更稳妥？', options: ['先锁住「礼节」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「礼节」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['礼节'] },
  });

  D('euro', {
    etymology: {
      origin: '现代英语常用词「euro」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'euro', gloss: '欧元' },
      suffix: null,
      history: [
        { label: 'euro', text: '现代英语常用词「euro」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：欧元。' },
      ],
      formationLogic: '核心义：欧元。',
      mnemonic: '看到 euro，先说出「欧元」。',
      note: '核心义：欧元。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one euro.', chinese: '这一章反复回到同一个点：欧元。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'euro.s1', en: 'Without that euro, the next paragraph is hard to follow.', zh: '没有这个欧元，下一段会很难读。', structure: 'euro / 表示 / 欧元', grammar: 'noun，围绕「欧元」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the euro.', right: 'He gave me some advice about the euro.', reason: 'advice 不可数。名词 euro 的单复数按词典词形记。', rule: '先确定 euro 是noun，再套「欧元」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'euro.q1', senseId: 'euro.s1', errorType: 'meaning', type: '词义选择', prompt: '「euro」在本条的核心意思是：', options: ['欧元', '完全相反的意思', '一种古代钱币'], answer: '欧元', explain: 'euro：欧元。' },
      { id: 'euro.q2', senseId: 'euro.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches euro?', options: ['欧元', 'a kind of ancient coin', 'the past tense of be'], answer: '欧元', explain: '对的是「欧元」。' },
      { id: 'euro.q3', senseId: 'euro.s1', errorType: 'grammar', type: '词义选择', prompt: 'euro 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'euro.q4', senseId: 'euro.s1', errorType: 'meaning', type: '词源', prompt: '记 euro 时，哪句更稳妥？', options: ['先锁住「欧元」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欧元」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欧元'] },
  });

  D('Europe', {
    etymology: {
      origin: '现代英语常用词「Europe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'Europe', gloss: '欧洲' },
      suffix: null,
      history: [
        { label: 'Europe', text: '现代英语常用词「Europe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：欧洲。' },
      ],
      formationLogic: '核心义：欧洲。',
      mnemonic: '看到 Europe，先说出「欧洲」。',
      note: '核心义：欧洲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one Europe.', chinese: '这一章反复回到同一个点：欧洲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Europe.s1', en: 'Without that Europe, the next paragraph is hard to follow.', zh: '没有这个欧洲，下一段会很难读。', structure: 'Europe / 表示 / 欧洲', grammar: 'noun，围绕「欧洲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the Europe.', right: 'He gave me some advice about the Europe.', reason: 'advice 不可数。名词 Europe 的单复数按词典词形记。', rule: '先确定 Europe 是noun，再套「欧洲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Europe.q1', senseId: 'Europe.s1', errorType: 'meaning', type: '词义选择', prompt: '「Europe」在本条的核心意思是：', options: ['欧洲', '完全相反的意思', '一种古代钱币'], answer: '欧洲', explain: 'Europe：欧洲。' },
      { id: 'Europe.q2', senseId: 'Europe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Europe?', options: ['欧洲', 'a kind of ancient coin', 'the past tense of be'], answer: '欧洲', explain: '对的是「欧洲」。' },
      { id: 'Europe.q3', senseId: 'Europe.s1', errorType: 'grammar', type: '词义选择', prompt: 'Europe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'Europe.q4', senseId: 'Europe.s1', errorType: 'meaning', type: '词源', prompt: '记 Europe 时，哪句更稳妥？', options: ['先锁住「欧洲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欧洲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欧洲'] },
  });

  D('evacuate', {
    etymology: {
      origin: '现代英语常用词「evacuate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evacuate', gloss: '疏散' },
      suffix: null,
      history: [
        { label: 'evacuate', text: '现代英语常用词「evacuate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：疏散。' },
      ],
      formationLogic: '核心义：疏散。',
      mnemonic: '看到 evacuate，先说出「疏散」。',
      note: '核心义：疏散。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evacuate before the office closed.', chinese: '他们同意在办公室关门前做这件事：疏散。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evacuate.s1', en: 'The deadline forced the team to evacuate that afternoon.', zh: '截止日期逼着小组在那天下午疏散。', structure: 'evacuate / 表示 / 疏散', grammar: 'verb，围绕「疏散」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evacuateed it yesterday without checking the real past form.', right: 'Check the past form of "evacuate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evacuate 是verb，再套「疏散」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evacuate.q1', senseId: 'evacuate.s1', errorType: 'meaning', type: '词义选择', prompt: '「evacuate」在本条的核心意思是：', options: ['疏散', '完全相反的意思', '一种古代钱币'], answer: '疏散', explain: 'evacuate：疏散。' },
      { id: 'evacuate.q2', senseId: 'evacuate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evacuate?', options: ['疏散', 'a kind of ancient coin', 'the past tense of be'], answer: '疏散', explain: '对的是「疏散」。' },
      { id: 'evacuate.q3', senseId: 'evacuate.s1', errorType: 'grammar', type: '词义选择', prompt: 'evacuate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evacuate.q4', senseId: 'evacuate.s1', errorType: 'meaning', type: '词源', prompt: '记 evacuate 时，哪句更稳妥？', options: ['先锁住「疏散」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「疏散」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疏散'] },
  });

  D('evade', {
    etymology: {
      origin: '现代英语常用词「evade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evade', gloss: '逃避' },
      suffix: null,
      history: [
        { label: 'evade', text: '现代英语常用词「evade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：逃避。' },
      ],
      formationLogic: '核心义：逃避。',
      mnemonic: '看到 evade，先说出「逃避」。',
      note: '核心义：逃避。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evade before the office closed.', chinese: '他们同意在办公室关门前做这件事：逃避。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evade.s1', en: 'The deadline forced the team to evade that afternoon.', zh: '截止日期逼着小组在那天下午逃避。', structure: 'evade / 表示 / 逃避', grammar: 'verb，围绕「逃避」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evadeed it yesterday without checking the real past form.', right: 'Check the past form of "evade" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evade 是verb，再套「逃避」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evade.q1', senseId: 'evade.s1', errorType: 'meaning', type: '词义选择', prompt: '「evade」在本条的核心意思是：', options: ['逃避', '完全相反的意思', '一种古代钱币'], answer: '逃避', explain: 'evade：逃避。' },
      { id: 'evade.q2', senseId: 'evade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evade?', options: ['逃避', 'a kind of ancient coin', 'the past tense of be'], answer: '逃避', explain: '对的是「逃避」。' },
      { id: 'evade.q3', senseId: 'evade.s1', errorType: 'grammar', type: '词义选择', prompt: 'evade 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evade.q4', senseId: 'evade.s1', errorType: 'meaning', type: '词源', prompt: '记 evade 时，哪句更稳妥？', options: ['先锁住「逃避」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逃避」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逃避'] },
  });

  D('evaluate', {
    etymology: {
      origin: '现代英语常用词「evaluate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evaluate', gloss: '评价' },
      suffix: null,
      history: [
        { label: 'evaluate', text: '现代英语常用词「evaluate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：评价。' },
      ],
      formationLogic: '核心义：评价。',
      mnemonic: '看到 evaluate，先说出「评价」。',
      note: '核心义：评价。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evaluate before the office closed.', chinese: '他们同意在办公室关门前做这件事：评价。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evaluate.s1', en: 'The deadline forced the team to evaluate that afternoon.', zh: '截止日期逼着小组在那天下午评价。', structure: 'evaluate / 表示 / 评价', grammar: 'verb，围绕「评价」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evaluateed it yesterday without checking the real past form.', right: 'Check the past form of "evaluate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evaluate 是verb，再套「评价」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evaluate.q1', senseId: 'evaluate.s1', errorType: 'meaning', type: '词义选择', prompt: '「evaluate」在本条的核心意思是：', options: ['评价', '完全相反的意思', '一种古代钱币'], answer: '评价', explain: 'evaluate：评价。' },
      { id: 'evaluate.q2', senseId: 'evaluate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evaluate?', options: ['评价', 'a kind of ancient coin', 'the past tense of be'], answer: '评价', explain: '对的是「评价」。' },
      { id: 'evaluate.q3', senseId: 'evaluate.s1', errorType: 'grammar', type: '词义选择', prompt: 'evaluate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evaluate.q4', senseId: 'evaluate.s1', errorType: 'meaning', type: '词源', prompt: '记 evaluate 时，哪句更稳妥？', options: ['先锁住「评价」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「评价」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['评价'] },
  });

  D('evangelical', {
    etymology: {
      origin: '英语派生：evangelic + -al，词性转到「福音派的」。',
      prefix: null,
      root: { text: 'evangelic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'evangelical', text: '英语派生：evangelic + -al，词性转到「福音派的」。' },
        { label: '现在', text: '核心用法是：福音派的。' },
      ],
      formationLogic: '先认词干 evangelic，再看词尾。',
      mnemonic: '看到 evangelical，先说出「福音派的」。',
      note: '先认词干 evangelic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was evangelical.', chinese: '即使是初读者也能看出，这个结果是福音派的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evangelical.s1', en: 'They wanted a evangelical answer, not a long speech.', zh: '他们要一个福音派的的答复，不要长篇发言。', structure: 'evangelical / 表示 / 福音派的', grammar: 'adjective，围绕「福音派的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are evangelical.', right: 'The news is evangelical.', reason: 'news 作主语时动词用单数。', rule: '先确定 evangelical 是adjective，再套「福音派的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evangelical.q1', senseId: 'evangelical.s1', errorType: 'meaning', type: '词义选择', prompt: '「evangelical」在本条的核心意思是：', options: ['福音派的', '完全相反的意思', '一种古代钱币'], answer: '福音派的', explain: 'evangelical：福音派的。' },
      { id: 'evangelical.q2', senseId: 'evangelical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evangelical?', options: ['福音派的', 'a kind of ancient coin', 'the past tense of be'], answer: '福音派的', explain: '对的是「福音派的」。' },
      { id: 'evangelical.q3', senseId: 'evangelical.s1', errorType: 'grammar', type: '词义选择', prompt: 'evangelical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'evangelical.q4', senseId: 'evangelical.s1', errorType: 'meaning', type: '词源', prompt: '记 evangelical 时，哪句更稳妥？', options: ['先锁住「福音派的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「福音派的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['福音派的'] },
  });

  D('evangelist', {
    etymology: {
      origin: '英语派生：evangel + -ist，词性转到「福音传道者」。',
      prefix: null,
      root: { text: 'evangel', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'evangelist', text: '英语派生：evangel + -ist，词性转到「福音传道者」。' },
        { label: '现在', text: '核心用法是：福音传道者。' },
      ],
      formationLogic: '先认词干 evangel，再看词尾。',
      mnemonic: '看到 evangelist，先说出「福音传道者」。',
      note: '先认词干 evangel，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one evangelist.', chinese: '这一章反复回到同一个点：福音传道者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evangelist.s1', en: 'Without that evangelist, the next paragraph is hard to follow.', zh: '没有这个福音传道者，下一段会很难读。', structure: 'evangelist / 表示 / 福音传道者', grammar: 'noun，围绕「福音传道者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the evangelist.', right: 'He gave me some advice about the evangelist.', reason: 'advice 不可数。名词 evangelist 的单复数按词典词形记。', rule: '先确定 evangelist 是noun，再套「福音传道者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evangelist.q1', senseId: 'evangelist.s1', errorType: 'meaning', type: '词义选择', prompt: '「evangelist」在本条的核心意思是：', options: ['福音传道者', '完全相反的意思', '一种古代钱币'], answer: '福音传道者', explain: 'evangelist：福音传道者。' },
      { id: 'evangelist.q2', senseId: 'evangelist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evangelist?', options: ['福音传道者', 'a kind of ancient coin', 'the past tense of be'], answer: '福音传道者', explain: '对的是「福音传道者」。' },
      { id: 'evangelist.q3', senseId: 'evangelist.s1', errorType: 'grammar', type: '词义选择', prompt: 'evangelist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'evangelist.q4', senseId: 'evangelist.s1', errorType: 'meaning', type: '词源', prompt: '记 evangelist 时，哪句更稳妥？', options: ['先锁住「福音传道者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「福音传道者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['福音传道者'] },
  });

  D('evaporate', {
    etymology: {
      origin: '现代英语常用词「evaporate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evaporate', gloss: '蒸发' },
      suffix: null,
      history: [
        { label: 'evaporate', text: '现代英语常用词「evaporate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蒸发。' },
      ],
      formationLogic: '核心义：蒸发。',
      mnemonic: '看到 evaporate，先说出「蒸发」。',
      note: '核心义：蒸发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evaporate before the office closed.', chinese: '他们同意在办公室关门前做这件事：蒸发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evaporate.s1', en: 'The deadline forced the team to evaporate that afternoon.', zh: '截止日期逼着小组在那天下午蒸发。', structure: 'evaporate / 表示 / 蒸发', grammar: 'verb，围绕「蒸发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evaporateed it yesterday without checking the real past form.', right: 'Check the past form of "evaporate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evaporate 是verb，再套「蒸发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evaporate.q1', senseId: 'evaporate.s1', errorType: 'meaning', type: '词义选择', prompt: '「evaporate」在本条的核心意思是：', options: ['蒸发', '完全相反的意思', '一种古代钱币'], answer: '蒸发', explain: 'evaporate：蒸发。' },
      { id: 'evaporate.q2', senseId: 'evaporate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evaporate?', options: ['蒸发', 'a kind of ancient coin', 'the past tense of be'], answer: '蒸发', explain: '对的是「蒸发」。' },
      { id: 'evaporate.q3', senseId: 'evaporate.s1', errorType: 'grammar', type: '词义选择', prompt: 'evaporate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evaporate.q4', senseId: 'evaporate.s1', errorType: 'meaning', type: '词源', prompt: '记 evaporate 时，哪句更稳妥？', options: ['先锁住「蒸发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蒸发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蒸发'] },
  });

  D('evaporative', {
    etymology: {
      origin: '英语派生：evaporat + -ive，词性转到「蒸发的」。',
      prefix: null,
      root: { text: 'evaporat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'evaporative', text: '英语派生：evaporat + -ive，词性转到「蒸发的」。' },
        { label: '现在', text: '核心用法是：蒸发的。' },
      ],
      formationLogic: '先认词干 evaporat，再看词尾。',
      mnemonic: '看到 evaporative，先说出「蒸发的」。',
      note: '先认词干 evaporat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was evaporative.', chinese: '即使是初读者也能看出，这个结果是蒸发的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evaporative.s1', en: 'They wanted a evaporative answer, not a long speech.', zh: '他们要一个蒸发的的答复，不要长篇发言。', structure: 'evaporative / 表示 / 蒸发的', grammar: 'adjective，围绕「蒸发的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are evaporative.', right: 'The news is evaporative.', reason: 'news 作主语时动词用单数。', rule: '先确定 evaporative 是adjective，再套「蒸发的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evaporative.q1', senseId: 'evaporative.s1', errorType: 'meaning', type: '词义选择', prompt: '「evaporative」在本条的核心意思是：', options: ['蒸发的', '完全相反的意思', '一种古代钱币'], answer: '蒸发的', explain: 'evaporative：蒸发的。' },
      { id: 'evaporative.q2', senseId: 'evaporative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evaporative?', options: ['蒸发的', 'a kind of ancient coin', 'the past tense of be'], answer: '蒸发的', explain: '对的是「蒸发的」。' },
      { id: 'evaporative.q3', senseId: 'evaporative.s1', errorType: 'grammar', type: '词义选择', prompt: 'evaporative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'evaporative.q4', senseId: 'evaporative.s1', errorType: 'meaning', type: '词源', prompt: '记 evaporative 时，哪句更稳妥？', options: ['先锁住「蒸发的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蒸发的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蒸发的'] },
  });

  D('eve', {
    etymology: {
      origin: '现代英语常用词「eve」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eve', gloss: '前夕' },
      suffix: null,
      history: [
        { label: 'eve', text: '现代英语常用词「eve」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前夕。' },
      ],
      formationLogic: '核心义：前夕。',
      mnemonic: '看到 eve，先说出「前夕」。',
      note: '核心义：前夕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eve.', chinese: '这一章反复回到同一个点：前夕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eve.s1', en: 'Without that eve, the next paragraph is hard to follow.', zh: '没有这个前夕，下一段会很难读。', structure: 'eve / 表示 / 前夕', grammar: 'noun，围绕「前夕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eve.', right: 'He gave me some advice about the eve.', reason: 'advice 不可数。名词 eve 的单复数按词典词形记。', rule: '先确定 eve 是noun，再套「前夕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eve.q1', senseId: 'eve.s1', errorType: 'meaning', type: '词义选择', prompt: '「eve」在本条的核心意思是：', options: ['前夕', '完全相反的意思', '一种古代钱币'], answer: '前夕', explain: 'eve：前夕。' },
      { id: 'eve.q2', senseId: 'eve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eve?', options: ['前夕', 'a kind of ancient coin', 'the past tense of be'], answer: '前夕', explain: '对的是「前夕」。' },
      { id: 'eve.q3', senseId: 'eve.s1', errorType: 'grammar', type: '词义选择', prompt: 'eve 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eve.q4', senseId: 'eve.s1', errorType: 'meaning', type: '词源', prompt: '记 eve 时，哪句更稳妥？', options: ['先锁住「前夕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前夕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前夕'] },
  });

  D('even', {
    etymology: {
      origin: '现代英语常用词「even」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'even', gloss: '甚至' },
      suffix: null,
      history: [
        { label: 'even', text: '现代英语常用词「even」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：甚至。' },
      ],
      formationLogic: '核心义：甚至。',
      mnemonic: '看到 even，先说出「甚至」。',
      note: '核心义：甚至。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule even, and the class followed.', chinese: '她把规则讲清楚了（甚至），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'even.s1', en: 'He nodded even and returned to the notes.', zh: '他甚至地点了点头，又回去看笔记。', structure: 'even / 表示 / 甚至', grammar: 'adverb，围绕「甚至」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very evenly in the meeting.', right: 'She spoke even in the meeting.', reason: 'even 已经是副词，不要再加 -ly。', rule: '先确定 even 是adverb，再套「甚至」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'even.q1', senseId: 'even.s1', errorType: 'meaning', type: '词义选择', prompt: '「even」在本条的核心意思是：', options: ['甚至', '完全相反的意思', '一种古代钱币'], answer: '甚至', explain: 'even：甚至。' },
      { id: 'even.q2', senseId: 'even.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches even?', options: ['甚至', 'a kind of ancient coin', 'the past tense of be'], answer: '甚至', explain: '对的是「甚至」。' },
      { id: 'even.q3', senseId: 'even.s1', errorType: 'grammar', type: '词义选择', prompt: 'even 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'even.q4', senseId: 'even.s1', errorType: 'meaning', type: '词源', prompt: '记 even 时，哪句更稳妥？', options: ['先锁住「甚至」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「甚至」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['甚至'] },
  });

  D('even so', {
    etymology: {
      origin: '现代英语固定说法「even so」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'even so', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'even so', text: '现代英语固定说法「even so」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：即便如此。' },
      ],
      formationLogic: '核心义：即便如此。',
      mnemonic: '看到 even so，先说出「即便如此」。',
      note: '核心义：即便如此。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "even so" and asked the class to keep it as one unit.', chinese: '老师把「even so」圈出来，让全班把它当成一个整体。它表示即便如此。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'even so.s1', en: 'In the margin she wrote "even so" so nobody would split the phrase.', zh: '她在页边写下「even so」，免得有人把这个说法拆开。意思是即便如此。', structure: 'even so / 表示 / 即便如此', grammar: 'adverb，围绕「即便如此」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of even so and lost the point.', right: 'Keep "even so" together: it means 即便如此.', reason: '「even so」要整块理解。', rule: '先确定 even so 是adverb，再套「即便如此」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'even so.q1', senseId: 'even so.s1', errorType: 'meaning', type: '词义选择', prompt: '「even so」在本条的核心意思是：', options: ['即便如此', '完全相反的意思', '一种古代钱币'], answer: '即便如此', explain: 'even so：即便如此。' },
      { id: 'even so.q2', senseId: 'even so.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches even so?', options: ['即便如此', 'a kind of ancient coin', 'the past tense of be'], answer: '即便如此', explain: '对的是「即便如此」。' },
      { id: 'even so.q3', senseId: 'even so.s1', errorType: 'grammar', type: '词义选择', prompt: 'even so 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'even so.q4', senseId: 'even so.s1', errorType: 'meaning', type: '词源', prompt: '记 even so 时，哪句更稳妥？', options: ['先锁住「即便如此」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「即便如此」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['即便如此'] },
  });

  D('evening', {
    etymology: {
      origin: '英语派生：even + -ing，词性转到「傍晚」。',
      prefix: null,
      root: { text: 'even', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'evening', text: '英语派生：even + -ing，词性转到「傍晚」。' },
        { label: '现在', text: '核心用法是：傍晚。' },
      ],
      formationLogic: '先认词干 even，再看词尾。',
      mnemonic: '看到 evening，先说出「傍晚」。',
      note: '先认词干 even，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one evening.', chinese: '这一章反复回到同一个点：傍晚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evening.s1', en: 'Without that evening, the next paragraph is hard to follow.', zh: '没有这个傍晚，下一段会很难读。', structure: 'evening / 表示 / 傍晚', grammar: 'noun，围绕「傍晚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the evening.', right: 'He gave me some advice about the evening.', reason: 'advice 不可数。名词 evening 的单复数按词典词形记。', rule: '先确定 evening 是noun，再套「傍晚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evening.q1', senseId: 'evening.s1', errorType: 'meaning', type: '词义选择', prompt: '「evening」在本条的核心意思是：', options: ['傍晚', '完全相反的意思', '一种古代钱币'], answer: '傍晚', explain: 'evening：傍晚。' },
      { id: 'evening.q2', senseId: 'evening.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evening?', options: ['傍晚', 'a kind of ancient coin', 'the past tense of be'], answer: '傍晚', explain: '对的是「傍晚」。' },
      { id: 'evening.q3', senseId: 'evening.s1', errorType: 'grammar', type: '词义选择', prompt: 'evening 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'evening.q4', senseId: 'evening.s1', errorType: 'meaning', type: '词源', prompt: '记 evening 时，哪句更稳妥？', options: ['先锁住「傍晚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「傍晚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['傍晚'] },
  });

  D('evening meal', {
    etymology: {
      origin: '现代英语固定说法「evening meal」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'evening meal', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'evening meal', text: '现代英语固定说法「evening meal」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：晚餐。' },
      ],
      formationLogic: '核心义：晚餐。',
      mnemonic: '看到 evening meal，先说出「晚餐」。',
      note: '核心义：晚餐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "evening meal" and asked the class to keep it as one unit.', chinese: '老师把「evening meal」圈出来，让全班把它当成一个整体。它表示晚餐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evening meal.s1', en: 'In the margin she wrote "evening meal" so nobody would split the phrase.', zh: '她在页边写下「evening meal」，免得有人把这个说法拆开。意思是晚餐。', structure: 'evening meal / 表示 / 晚餐', grammar: 'noun，围绕「晚餐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of evening meal and lost the point.', right: 'Keep "evening meal" together: it means 晚餐.', reason: '「evening meal」要整块理解。', rule: '先确定 evening meal 是noun，再套「晚餐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evening meal.q1', senseId: 'evening meal.s1', errorType: 'meaning', type: '词义选择', prompt: '「evening meal」在本条的核心意思是：', options: ['晚餐', '完全相反的意思', '一种古代钱币'], answer: '晚餐', explain: 'evening meal：晚餐。' },
      { id: 'evening meal.q2', senseId: 'evening meal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evening meal?', options: ['晚餐', 'a kind of ancient coin', 'the past tense of be'], answer: '晚餐', explain: '对的是「晚餐」。' },
      { id: 'evening meal.q3', senseId: 'evening meal.s1', errorType: 'grammar', type: '词义选择', prompt: 'evening meal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'evening meal.q4', senseId: 'evening meal.s1', errorType: 'meaning', type: '词源', prompt: '记 evening meal 时，哪句更稳妥？', options: ['先锁住「晚餐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「晚餐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['晚餐'] },
  });

  D('event', {
    etymology: {
      origin: '现代英语常用词「event」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'event', gloss: '事件' },
      suffix: null,
      history: [
        { label: 'event', text: '现代英语常用词「event」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：事件。' },
      ],
      formationLogic: '核心义：事件。',
      mnemonic: '看到 event，先说出「事件」。',
      note: '核心义：事件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one event.', chinese: '这一章反复回到同一个点：事件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'event.s1', en: 'Without that event, the next paragraph is hard to follow.', zh: '没有这个事件，下一段会很难读。', structure: 'event / 表示 / 事件', grammar: 'noun，围绕「事件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the event.', right: 'He gave me some advice about the event.', reason: 'advice 不可数。名词 event 的单复数按词典词形记。', rule: '先确定 event 是noun，再套「事件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'event.q1', senseId: 'event.s1', errorType: 'meaning', type: '词义选择', prompt: '「event」在本条的核心意思是：', options: ['事件', '完全相反的意思', '一种古代钱币'], answer: '事件', explain: 'event：事件。' },
      { id: 'event.q2', senseId: 'event.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches event?', options: ['事件', 'a kind of ancient coin', 'the past tense of be'], answer: '事件', explain: '对的是「事件」。' },
      { id: 'event.q3', senseId: 'event.s1', errorType: 'grammar', type: '词义选择', prompt: 'event 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'event.q4', senseId: 'event.s1', errorType: 'meaning', type: '词源', prompt: '记 event 时，哪句更稳妥？', options: ['先锁住「事件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「事件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['事件'] },
  });

  D('eventual', {
    etymology: {
      origin: '英语派生：eventu + -al，词性转到「最终的」。',
      prefix: null,
      root: { text: 'eventu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eventual', text: '英语派生：eventu + -al，词性转到「最终的」。' },
        { label: '现在', text: '核心用法是：最终的。' },
      ],
      formationLogic: '先认词干 eventu，再看词尾。',
      mnemonic: '看到 eventual，先说出「最终的」。',
      note: '先认词干 eventu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eventual.', chinese: '即使是初读者也能看出，这个结果是最终的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eventual.s1', en: 'They wanted a eventual answer, not a long speech.', zh: '他们要一个最终的的答复，不要长篇发言。', structure: 'eventual / 表示 / 最终的', grammar: 'adjective，围绕「最终的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eventual.', right: 'The news is eventual.', reason: 'news 作主语时动词用单数。', rule: '先确定 eventual 是adjective，再套「最终的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eventual.q1', senseId: 'eventual.s1', errorType: 'meaning', type: '词义选择', prompt: '「eventual」在本条的核心意思是：', options: ['最终的', '完全相反的意思', '一种古代钱币'], answer: '最终的', explain: 'eventual：最终的。' },
      { id: 'eventual.q2', senseId: 'eventual.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eventual?', options: ['最终的', 'a kind of ancient coin', 'the past tense of be'], answer: '最终的', explain: '对的是「最终的」。' },
      { id: 'eventual.q3', senseId: 'eventual.s1', errorType: 'grammar', type: '词义选择', prompt: 'eventual 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eventual.q4', senseId: 'eventual.s1', errorType: 'meaning', type: '词源', prompt: '记 eventual 时，哪句更稳妥？', options: ['先锁住「最终的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最终的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最终的'] },
  });

  D('eventually', {
    etymology: {
      origin: '英语派生：eventual + -ly，词性转到「最终」。',
      prefix: null,
      root: { text: 'eventual', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eventually', text: '英语派生：eventual + -ly，词性转到「最终」。' },
        { label: '现在', text: '核心用法是：最终。' },
      ],
      formationLogic: '先认词干 eventual，再看词尾。',
      mnemonic: '看到 eventually，先说出「最终」。',
      note: '先认词干 eventual，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule eventually, and the class followed.', chinese: '她把规则讲清楚了（最终），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eventually.s1', en: 'He nodded eventually and returned to the notes.', zh: '他最终地点了点头，又回去看笔记。', structure: 'eventually / 表示 / 最终', grammar: 'adverb，围绕「最终」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very eventuallyly in the meeting.', right: 'She spoke eventually in the meeting.', reason: 'eventually 已经是副词，不要再加 -ly。', rule: '先确定 eventually 是adverb，再套「最终」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eventually.q1', senseId: 'eventually.s1', errorType: 'meaning', type: '词义选择', prompt: '「eventually」在本条的核心意思是：', options: ['最终', '完全相反的意思', '一种古代钱币'], answer: '最终', explain: 'eventually：最终。' },
      { id: 'eventually.q2', senseId: 'eventually.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eventually?', options: ['最终', 'a kind of ancient coin', 'the past tense of be'], answer: '最终', explain: '对的是「最终」。' },
      { id: 'eventually.q3', senseId: 'eventually.s1', errorType: 'grammar', type: '词义选择', prompt: 'eventually 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'eventually.q4', senseId: 'eventually.s1', errorType: 'meaning', type: '词源', prompt: '记 eventually 时，哪句更稳妥？', options: ['先锁住「最终」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最终」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最终'] },
  });

  D('ever', {
    etymology: {
      origin: '现代英语常用词「ever」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ever', gloss: '曾经' },
      suffix: null,
      history: [
        { label: 'ever', text: '现代英语常用词「ever」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：曾经。' },
      ],
      formationLogic: '核心义：曾经。',
      mnemonic: '看到 ever，先说出「曾经」。',
      note: '核心义：曾经。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule ever, and the class followed.', chinese: '她把规则讲清楚了（曾经），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ever.s1', en: 'He nodded ever and returned to the notes.', zh: '他曾经地点了点头，又回去看笔记。', structure: 'ever / 表示 / 曾经', grammar: 'adverb，围绕「曾经」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very everly in the meeting.', right: 'She spoke ever in the meeting.', reason: 'ever 已经是副词，不要再加 -ly。', rule: '先确定 ever 是adverb，再套「曾经」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ever.q1', senseId: 'ever.s1', errorType: 'meaning', type: '词义选择', prompt: '「ever」在本条的核心意思是：', options: ['曾经', '完全相反的意思', '一种古代钱币'], answer: '曾经', explain: 'ever：曾经。' },
      { id: 'ever.q2', senseId: 'ever.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ever?', options: ['曾经', 'a kind of ancient coin', 'the past tense of be'], answer: '曾经', explain: '对的是「曾经」。' },
      { id: 'ever.q3', senseId: 'ever.s1', errorType: 'grammar', type: '词义选择', prompt: 'ever 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'ever.q4', senseId: 'ever.s1', errorType: 'meaning', type: '词源', prompt: '记 ever 时，哪句更稳妥？', options: ['先锁住「曾经」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「曾经」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['曾经'] },
  });

  D('evergreen', {
    etymology: {
      origin: '现代英语常用词「evergreen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evergreen', gloss: '常绿的' },
      suffix: null,
      history: [
        { label: 'evergreen', text: '现代英语常用词「evergreen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：常绿的。' },
      ],
      formationLogic: '核心义：常绿的。',
      mnemonic: '看到 evergreen，先说出「常绿的」。',
      note: '核心义：常绿的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was evergreen.', chinese: '即使是初读者也能看出，这个结果是常绿的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evergreen.s1', en: 'They wanted a evergreen answer, not a long speech.', zh: '他们要一个常绿的的答复，不要长篇发言。', structure: 'evergreen / 表示 / 常绿的', grammar: 'adjective，围绕「常绿的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are evergreen.', right: 'The news is evergreen.', reason: 'news 作主语时动词用单数。', rule: '先确定 evergreen 是adjective，再套「常绿的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evergreen.q1', senseId: 'evergreen.s1', errorType: 'meaning', type: '词义选择', prompt: '「evergreen」在本条的核心意思是：', options: ['常绿的', '完全相反的意思', '一种古代钱币'], answer: '常绿的', explain: 'evergreen：常绿的。' },
      { id: 'evergreen.q2', senseId: 'evergreen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evergreen?', options: ['常绿的', 'a kind of ancient coin', 'the past tense of be'], answer: '常绿的', explain: '对的是「常绿的」。' },
      { id: 'evergreen.q3', senseId: 'evergreen.s1', errorType: 'grammar', type: '词义选择', prompt: 'evergreen 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'evergreen.q4', senseId: 'evergreen.s1', errorType: 'meaning', type: '词源', prompt: '记 evergreen 时，哪句更稳妥？', options: ['先锁住「常绿的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「常绿的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['常绿的'] },
  });

  D('everlasting', {
    etymology: {
      origin: '英语派生：everlast + -ing，词性转到「永恒的」。',
      prefix: null,
      root: { text: 'everlast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'everlasting', text: '英语派生：everlast + -ing，词性转到「永恒的」。' },
        { label: '现在', text: '核心用法是：永恒的。' },
      ],
      formationLogic: '先认词干 everlast，再看词尾。',
      mnemonic: '看到 everlasting，先说出「永恒的」。',
      note: '先认词干 everlast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was everlasting.', chinese: '即使是初读者也能看出，这个结果是永恒的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'everlasting.s1', en: 'They wanted a everlasting answer, not a long speech.', zh: '他们要一个永恒的的答复，不要长篇发言。', structure: 'everlasting / 表示 / 永恒的', grammar: 'adjective，围绕「永恒的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are everlasting.', right: 'The news is everlasting.', reason: 'news 作主语时动词用单数。', rule: '先确定 everlasting 是adjective，再套「永恒的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'everlasting.q1', senseId: 'everlasting.s1', errorType: 'meaning', type: '词义选择', prompt: '「everlasting」在本条的核心意思是：', options: ['永恒的', '完全相反的意思', '一种古代钱币'], answer: '永恒的', explain: 'everlasting：永恒的。' },
      { id: 'everlasting.q2', senseId: 'everlasting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches everlasting?', options: ['永恒的', 'a kind of ancient coin', 'the past tense of be'], answer: '永恒的', explain: '对的是「永恒的」。' },
      { id: 'everlasting.q3', senseId: 'everlasting.s1', errorType: 'grammar', type: '词义选择', prompt: 'everlasting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'everlasting.q4', senseId: 'everlasting.s1', errorType: 'meaning', type: '词源', prompt: '记 everlasting 时，哪句更稳妥？', options: ['先锁住「永恒的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「永恒的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['永恒的'] },
  });

  D('every', {
    etymology: {
      origin: '现代英语常用词「every」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'every', gloss: '每个' },
      suffix: null,
      history: [
        { label: 'every', text: '现代英语常用词「every」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：每个。' },
      ],
      formationLogic: '核心义：每个。',
      mnemonic: '看到 every，先说出「每个」。',
      note: '核心义：每个。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "every" and asked the class to keep it as one unit.', chinese: '老师把「every」圈出来，让全班把它当成一个整体。它表示每个。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'every.s1', en: 'In the margin she wrote "every" so nobody would split the phrase.', zh: '她在页边写下「every」，免得有人把这个说法拆开。意思是每个。', structure: 'every / 表示 / 每个', grammar: 'determiner，围绕「每个」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of every and lost the point.', right: 'Keep "every" together: it means 每个.', reason: '「every」要整块理解。', rule: '先确定 every 是determiner，再套「每个」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'every.q1', senseId: 'every.s1', errorType: 'meaning', type: '词义选择', prompt: '「every」在本条的核心意思是：', options: ['每个', '完全相反的意思', '一种古代钱币'], answer: '每个', explain: 'every：每个。' },
      { id: 'every.q2', senseId: 'every.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches every?', options: ['每个', 'a kind of ancient coin', 'the past tense of be'], answer: '每个', explain: '对的是「每个」。' },
      { id: 'every.q3', senseId: 'every.s1', errorType: 'grammar', type: '词义选择', prompt: 'every 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'every.q4', senseId: 'every.s1', errorType: 'meaning', type: '词源', prompt: '记 every 时，哪句更稳妥？', options: ['先锁住「每个」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每个」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每个'] },
  });

  D('every day', {
    etymology: {
      origin: '现代英语固定说法「every day」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'every day', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'every day', text: '现代英语固定说法「every day」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：每天。' },
      ],
      formationLogic: '核心义：每天。',
      mnemonic: '看到 every day，先说出「每天」。',
      note: '核心义：每天。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "every day" and asked the class to keep it as one unit.', chinese: '老师把「every day」圈出来，让全班把它当成一个整体。它表示每天。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'every day.s1', en: 'In the margin she wrote "every day" so nobody would split the phrase.', zh: '她在页边写下「every day」，免得有人把这个说法拆开。意思是每天。', structure: 'every day / 表示 / 每天', grammar: 'adverb，围绕「每天」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of every day and lost the point.', right: 'Keep "every day" together: it means 每天.', reason: '「every day」要整块理解。', rule: '先确定 every day 是adverb，再套「每天」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'every day.q1', senseId: 'every day.s1', errorType: 'meaning', type: '词义选择', prompt: '「every day」在本条的核心意思是：', options: ['每天', '完全相反的意思', '一种古代钱币'], answer: '每天', explain: 'every day：每天。' },
      { id: 'every day.q2', senseId: 'every day.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches every day?', options: ['每天', 'a kind of ancient coin', 'the past tense of be'], answer: '每天', explain: '对的是「每天」。' },
      { id: 'every day.q3', senseId: 'every day.s1', errorType: 'grammar', type: '词义选择', prompt: 'every day 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'every day.q4', senseId: 'every day.s1', errorType: 'meaning', type: '词源', prompt: '记 every day 时，哪句更稳妥？', options: ['先锁住「每天」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每天」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每天'] },
  });

  D('everybody', {
    etymology: {
      origin: '现代英语常用词「everybody」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'everybody', gloss: '每个人' },
      suffix: null,
      history: [
        { label: 'everybody', text: '现代英语常用词「everybody」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：每个人。' },
      ],
      formationLogic: '核心义：每个人。',
      mnemonic: '看到 everybody，先说出「每个人」。',
      note: '核心义：每个人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "everybody" and asked the class to keep it as one unit.', chinese: '老师把「everybody」圈出来，让全班把它当成一个整体。它表示每个人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'everybody.s1', en: 'In the margin she wrote "everybody" so nobody would split the phrase.', zh: '她在页边写下「everybody」，免得有人把这个说法拆开。意思是每个人。', structure: 'everybody / 表示 / 每个人', grammar: 'pronoun，围绕「每个人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of everybody and lost the point.', right: 'Keep "everybody" together: it means 每个人.', reason: '「everybody」要整块理解。', rule: '先确定 everybody 是pronoun，再套「每个人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'everybody.q1', senseId: 'everybody.s1', errorType: 'meaning', type: '词义选择', prompt: '「everybody」在本条的核心意思是：', options: ['每个人', '完全相反的意思', '一种古代钱币'], answer: '每个人', explain: 'everybody：每个人。' },
      { id: 'everybody.q2', senseId: 'everybody.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches everybody?', options: ['每个人', 'a kind of ancient coin', 'the past tense of be'], answer: '每个人', explain: '对的是「每个人」。' },
      { id: 'everybody.q3', senseId: 'everybody.s1', errorType: 'grammar', type: '词义选择', prompt: 'everybody 的词性（本条）更接近：', options: ['pronoun', '只能作感叹词', '只能作数词'], answer: 'pronoun', explain: '本条按 pronoun 来用。' },
      { id: 'everybody.q4', senseId: 'everybody.s1', errorType: 'meaning', type: '词源', prompt: '记 everybody 时，哪句更稳妥？', options: ['先锁住「每个人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每个人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每个人'] },
  });

  D('everyday', {
    etymology: {
      origin: '现代英语常用词「everyday」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'everyday', gloss: '日常的' },
      suffix: null,
      history: [
        { label: 'everyday', text: '现代英语常用词「everyday」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：日常的。' },
      ],
      formationLogic: '核心义：日常的。',
      mnemonic: '看到 everyday，先说出「日常的」。',
      note: '核心义：日常的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was everyday.', chinese: '即使是初读者也能看出，这个结果是日常的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'everyday.s1', en: 'They wanted a everyday answer, not a long speech.', zh: '他们要一个日常的的答复，不要长篇发言。', structure: 'everyday / 表示 / 日常的', grammar: 'adjective，围绕「日常的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are everyday.', right: 'The news is everyday.', reason: 'news 作主语时动词用单数。', rule: '先确定 everyday 是adjective，再套「日常的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'everyday.q1', senseId: 'everyday.s1', errorType: 'meaning', type: '词义选择', prompt: '「everyday」在本条的核心意思是：', options: ['日常的', '完全相反的意思', '一种古代钱币'], answer: '日常的', explain: 'everyday：日常的。' },
      { id: 'everyday.q2', senseId: 'everyday.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches everyday?', options: ['日常的', 'a kind of ancient coin', 'the past tense of be'], answer: '日常的', explain: '对的是「日常的」。' },
      { id: 'everyday.q3', senseId: 'everyday.s1', errorType: 'grammar', type: '词义选择', prompt: 'everyday 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'everyday.q4', senseId: 'everyday.s1', errorType: 'meaning', type: '词源', prompt: '记 everyday 时，哪句更稳妥？', options: ['先锁住「日常的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「日常的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['日常的'] },
  });

  D('everyone', {
    etymology: {
      origin: '现代英语常用词「everyone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'everyone', gloss: '每个人' },
      suffix: null,
      history: [
        { label: 'everyone', text: '现代英语常用词「everyone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：每个人。' },
      ],
      formationLogic: '核心义：每个人。',
      mnemonic: '看到 everyone，先说出「每个人」。',
      note: '核心义：每个人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "everyone" and asked the class to keep it as one unit.', chinese: '老师把「everyone」圈出来，让全班把它当成一个整体。它表示每个人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'everyone.s1', en: 'In the margin she wrote "everyone" so nobody would split the phrase.', zh: '她在页边写下「everyone」，免得有人把这个说法拆开。意思是每个人。', structure: 'everyone / 表示 / 每个人', grammar: 'pronoun，围绕「每个人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of everyone and lost the point.', right: 'Keep "everyone" together: it means 每个人.', reason: '「everyone」要整块理解。', rule: '先确定 everyone 是pronoun，再套「每个人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'everyone.q1', senseId: 'everyone.s1', errorType: 'meaning', type: '词义选择', prompt: '「everyone」在本条的核心意思是：', options: ['每个人', '完全相反的意思', '一种古代钱币'], answer: '每个人', explain: 'everyone：每个人。' },
      { id: 'everyone.q2', senseId: 'everyone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches everyone?', options: ['每个人', 'a kind of ancient coin', 'the past tense of be'], answer: '每个人', explain: '对的是「每个人」。' },
      { id: 'everyone.q3', senseId: 'everyone.s1', errorType: 'grammar', type: '词义选择', prompt: 'everyone 的词性（本条）更接近：', options: ['pronoun', '只能作感叹词', '只能作数词'], answer: 'pronoun', explain: '本条按 pronoun 来用。' },
      { id: 'everyone.q4', senseId: 'everyone.s1', errorType: 'meaning', type: '词源', prompt: '记 everyone 时，哪句更稳妥？', options: ['先锁住「每个人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每个人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每个人'] },
  });

  D('everything', {
    etymology: {
      origin: '英语派生：everyth + -ing，词性转到「每件事」。',
      prefix: null,
      root: { text: 'everyth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'everything', text: '英语派生：everyth + -ing，词性转到「每件事」。' },
        { label: '现在', text: '核心用法是：每件事。' },
      ],
      formationLogic: '先认词干 everyth，再看词尾。',
      mnemonic: '看到 everything，先说出「每件事」。',
      note: '先认词干 everyth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "everything" and asked the class to keep it as one unit.', chinese: '老师把「everything」圈出来，让全班把它当成一个整体。它表示每件事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'everything.s1', en: 'In the margin she wrote "everything" so nobody would split the phrase.', zh: '她在页边写下「everything」，免得有人把这个说法拆开。意思是每件事。', structure: 'everything / 表示 / 每件事', grammar: 'pronoun，围绕「每件事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of everything and lost the point.', right: 'Keep "everything" together: it means 每件事.', reason: '「everything」要整块理解。', rule: '先确定 everything 是pronoun，再套「每件事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'everything.q1', senseId: 'everything.s1', errorType: 'meaning', type: '词义选择', prompt: '「everything」在本条的核心意思是：', options: ['每件事', '完全相反的意思', '一种古代钱币'], answer: '每件事', explain: 'everything：每件事。' },
      { id: 'everything.q2', senseId: 'everything.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches everything?', options: ['每件事', 'a kind of ancient coin', 'the past tense of be'], answer: '每件事', explain: '对的是「每件事」。' },
      { id: 'everything.q3', senseId: 'everything.s1', errorType: 'grammar', type: '词义选择', prompt: 'everything 的词性（本条）更接近：', options: ['pronoun', '只能作感叹词', '只能作数词'], answer: 'pronoun', explain: '本条按 pronoun 来用。' },
      { id: 'everything.q4', senseId: 'everything.s1', errorType: 'meaning', type: '词源', prompt: '记 everything 时，哪句更稳妥？', options: ['先锁住「每件事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每件事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每件事'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
