/* data/words/cet/author_depth_f1.js
 * 手敲深度补丁：constitution–criterion（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('constitution', {
    etymology: {
      origin: 'constitute 的名词。构成，也指宪法。',
      prefix: null,
      root: { text: 'constitution', gloss: '宪法' },
      suffix: null,
      history: [
        { label: 'constitution', text: 'constitute 的名词。构成，也指宪法。' },
        { label: '现在', text: '核心用法是：宪法。' },
      ],
      formationLogic: '考试认现在的用法：宪法。',
      mnemonic: '看到 constitution，先说出「宪法」。',
      note: '考试认现在的用法：宪法。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one constitution.', chinese: '这一章反复回到同一个点：宪法。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constitution.s1', en: 'Without that constitution, the next paragraph is hard to follow.', zh: '没有这个宪法，下一段会很难读。', structure: 'constitution / 表示 / 宪法', grammar: 'noun，围绕「宪法」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the constitution.', right: 'He gave me some advice about the constitution.', reason: 'advice 不可数。名词 constitution 的单复数按词典词形记。', rule: '先确定 constitution 是noun，再套「宪法」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constitution.q1', senseId: 'constitution.s1', errorType: 'meaning', type: '词义选择', prompt: '「constitution」在本条的核心意思是：', options: ['宪法', '完全相反的意思', '一种古代钱币'], answer: '宪法', explain: 'constitution：宪法。' },
      { id: 'constitution.q2', senseId: 'constitution.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constitution?', options: ['宪法', 'a kind of ancient coin', 'the past tense of be'], answer: '宪法', explain: '对的是「宪法」。' },
      { id: 'constitution.q3', senseId: 'constitution.s1', errorType: 'grammar', type: '词义选择', prompt: 'constitution 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'constitution.q4', senseId: 'constitution.s1', errorType: 'meaning', type: '词源', prompt: '记 constitution 时，哪句更稳妥？', options: ['先锁住「宪法」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宪法」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宪法'] },
  });

  D('constrain', {
    etymology: {
      origin: '现代英语常用词「constrain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'constrain', gloss: '限制' },
      suffix: null,
      history: [
        { label: 'constrain', text: '现代英语常用词「constrain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：限制。' },
      ],
      formationLogic: '核心义：限制。',
      mnemonic: '看到 constrain，先说出「限制」。',
      note: '核心义：限制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to constrain before the office closed.', chinese: '他们同意在办公室关门前做这件事：限制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constrain.s1', en: 'The deadline forced the team to constrain that afternoon.', zh: '截止日期逼着小组在那天下午限制。', structure: 'constrain / 表示 / 限制', grammar: 'verb，围绕「限制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She constrained it yesterday without checking the real past form.', right: 'Check the past form of "constrain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 constrain 是verb，再套「限制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constrain.q1', senseId: 'constrain.s1', errorType: 'meaning', type: '词义选择', prompt: '「constrain」在本条的核心意思是：', options: ['限制', '完全相反的意思', '一种古代钱币'], answer: '限制', explain: 'constrain：限制。' },
      { id: 'constrain.q2', senseId: 'constrain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constrain?', options: ['限制', 'a kind of ancient coin', 'the past tense of be'], answer: '限制', explain: '对的是「限制」。' },
      { id: 'constrain.q3', senseId: 'constrain.s1', errorType: 'grammar', type: '词义选择', prompt: 'constrain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'constrain.q4', senseId: 'constrain.s1', errorType: 'meaning', type: '词源', prompt: '记 constrain 时，哪句更稳妥？', options: ['先锁住「限制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「限制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['限制'] },
  });

  D('construct', {
    etymology: {
      origin: '拉丁语 construere「堆到一起」。',
      prefix: null,
      root: { text: 'construct', gloss: '建造' },
      suffix: null,
      history: [
        { label: 'construct', text: '拉丁语 construere「堆到一起」。' },
        { label: '现在', text: '核心用法是：建造。' },
      ],
      formationLogic: '考试认现在的用法：建造。',
      mnemonic: '看到 construct，先说出「建造」。',
      note: '考试认现在的用法：建造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to construct before the office closed.', chinese: '他们同意在办公室关门前做这件事：建造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'construct.s1', en: 'The deadline forced the team to construct that afternoon.', zh: '截止日期逼着小组在那天下午建造。', structure: 'construct / 表示 / 建造', grammar: 'verb，围绕「建造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She constructed it yesterday without checking the real past form.', right: 'Check the past form of "construct" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 construct 是verb，再套「建造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'construct.q1', senseId: 'construct.s1', errorType: 'meaning', type: '词义选择', prompt: '「construct」在本条的核心意思是：', options: ['建造', '完全相反的意思', '一种古代钱币'], answer: '建造', explain: 'construct：建造。' },
      { id: 'construct.q2', senseId: 'construct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches construct?', options: ['建造', 'a kind of ancient coin', 'the past tense of be'], answer: '建造', explain: '对的是「建造」。' },
      { id: 'construct.q3', senseId: 'construct.s1', errorType: 'grammar', type: '词义选择', prompt: 'construct 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'construct.q4', senseId: 'construct.s1', errorType: 'meaning', type: '词源', prompt: '记 construct 时，哪句更稳妥？', options: ['先锁住「建造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「建造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建造'] },
  });

  D('construction', {
    etymology: {
      origin: '英语派生：construc + -tion，词性转到「建造」。',
      prefix: null,
      root: { text: 'construc', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'construction', text: '英语派生：construc + -tion，词性转到「建造」。' },
        { label: '现在', text: '核心用法是：建造。' },
      ],
      formationLogic: '先认词干 construc，再看词尾。',
      mnemonic: '看到 construction，先说出「建造」。',
      note: '先认词干 construc，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one construction.', chinese: '这一章反复回到同一个点：建造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'construction.s1', en: 'Without that construction, the next paragraph is hard to follow.', zh: '没有这个建造，下一段会很难读。', structure: 'construction / 表示 / 建造', grammar: 'noun，围绕「建造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the construction.', right: 'He gave me some advice about the construction.', reason: 'advice 不可数。名词 construction 的单复数按词典词形记。', rule: '先确定 construction 是noun，再套「建造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'construction.q1', senseId: 'construction.s1', errorType: 'meaning', type: '词义选择', prompt: '「construction」在本条的核心意思是：', options: ['建造', '完全相反的意思', '一种古代钱币'], answer: '建造', explain: 'construction：建造。' },
      { id: 'construction.q2', senseId: 'construction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches construction?', options: ['建造', 'a kind of ancient coin', 'the past tense of be'], answer: '建造', explain: '对的是「建造」。' },
      { id: 'construction.q3', senseId: 'construction.s1', errorType: 'grammar', type: '词义选择', prompt: 'construction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'construction.q4', senseId: 'construction.s1', errorType: 'meaning', type: '词源', prompt: '记 construction 时，哪句更稳妥？', options: ['先锁住「建造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「建造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建造'] },
  });

  D('constructive', {
    etymology: {
      origin: '英语派生：construct + -ive，词性转到「建设性的」。',
      prefix: null,
      root: { text: 'construct', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'constructive', text: '英语派生：construct + -ive，词性转到「建设性的」。' },
        { label: '现在', text: '核心用法是：建设性的。' },
      ],
      formationLogic: '先认词干 construct，再看词尾。',
      mnemonic: '看到 constructive，先说出「建设性的」。',
      note: '先认词干 construct，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was constructive.', chinese: '即使是初读者也能看出，这个结果是建设性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constructive.s1', en: 'They wanted a constructive answer, not a long speech.', zh: '他们要一个建设性的的答复，不要长篇发言。', structure: 'constructive / 表示 / 建设性的', grammar: 'adjective，围绕「建设性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are constructive.', right: 'The news is constructive.', reason: 'news 作主语时动词用单数。', rule: '先确定 constructive 是adjective，再套「建设性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constructive.q1', senseId: 'constructive.s1', errorType: 'meaning', type: '词义选择', prompt: '「constructive」在本条的核心意思是：', options: ['建设性的', '完全相反的意思', '一种古代钱币'], answer: '建设性的', explain: 'constructive：建设性的。' },
      { id: 'constructive.q2', senseId: 'constructive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constructive?', options: ['建设性的', 'a kind of ancient coin', 'the past tense of be'], answer: '建设性的', explain: '对的是「建设性的」。' },
      { id: 'constructive.q3', senseId: 'constructive.s1', errorType: 'grammar', type: '词义选择', prompt: 'constructive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'constructive.q4', senseId: 'constructive.s1', errorType: 'meaning', type: '词源', prompt: '记 constructive 时，哪句更稳妥？', options: ['先锁住「建设性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「建设性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['建设性的'] },
  });

  D('construe', {
    etymology: {
      origin: '现代英语常用词「construe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'construe', gloss: '解释' },
      suffix: null,
      history: [
        { label: 'construe', text: '现代英语常用词「construe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解释。' },
      ],
      formationLogic: '核心义：解释。',
      mnemonic: '看到 construe，先说出「解释」。',
      note: '核心义：解释。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to construe before the office closed.', chinese: '他们同意在办公室关门前做这件事：解释。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'construe.s1', en: 'The deadline forced the team to construe that afternoon.', zh: '截止日期逼着小组在那天下午解释。', structure: 'construe / 表示 / 解释', grammar: 'verb，围绕「解释」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She construeed it yesterday without checking the real past form.', right: 'Check the past form of "construe" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 construe 是verb，再套「解释」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'construe.q1', senseId: 'construe.s1', errorType: 'meaning', type: '词义选择', prompt: '「construe」在本条的核心意思是：', options: ['解释', '完全相反的意思', '一种古代钱币'], answer: '解释', explain: 'construe：解释。' },
      { id: 'construe.q2', senseId: 'construe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches construe?', options: ['解释', 'a kind of ancient coin', 'the past tense of be'], answer: '解释', explain: '对的是「解释」。' },
      { id: 'construe.q3', senseId: 'construe.s1', errorType: 'grammar', type: '词义选择', prompt: 'construe 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'construe.q4', senseId: 'construe.s1', errorType: 'meaning', type: '词源', prompt: '记 construe 时，哪句更稳妥？', options: ['先锁住「解释」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解释」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解释'] },
  });

  D('consulate', {
    etymology: {
      origin: '现代英语常用词「consulate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'consulate', gloss: '领事馆' },
      suffix: null,
      history: [
        { label: 'consulate', text: '现代英语常用词「consulate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：领事馆。' },
      ],
      formationLogic: '核心义：领事馆。',
      mnemonic: '看到 consulate，先说出「领事馆」。',
      note: '核心义：领事馆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consulate.', chinese: '这一章反复回到同一个点：领事馆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consulate.s1', en: 'Without that consulate, the next paragraph is hard to follow.', zh: '没有这个领事馆，下一段会很难读。', structure: 'consulate / 表示 / 领事馆', grammar: 'noun，围绕「领事馆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consulate.', right: 'He gave me some advice about the consulate.', reason: 'advice 不可数。名词 consulate 的单复数按词典词形记。', rule: '先确定 consulate 是noun，再套「领事馆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consulate.q1', senseId: 'consulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「consulate」在本条的核心意思是：', options: ['领事馆', '完全相反的意思', '一种古代钱币'], answer: '领事馆', explain: 'consulate：领事馆。' },
      { id: 'consulate.q2', senseId: 'consulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consulate?', options: ['领事馆', 'a kind of ancient coin', 'the past tense of be'], answer: '领事馆', explain: '对的是「领事馆」。' },
      { id: 'consulate.q3', senseId: 'consulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'consulate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consulate.q4', senseId: 'consulate.s1', errorType: 'meaning', type: '词源', prompt: '记 consulate 时，哪句更稳妥？', options: ['先锁住「领事馆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「领事馆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['领事馆'] },
  });

  D('consult', {
    etymology: {
      origin: '拉丁语 consultare「请教」。',
      prefix: null,
      root: { text: 'consult', gloss: '咨询' },
      suffix: null,
      history: [
        { label: 'consult', text: '拉丁语 consultare「请教」。' },
        { label: '现在', text: '核心用法是：咨询。' },
      ],
      formationLogic: '考试认现在的用法：咨询。',
      mnemonic: '看到 consult，先说出「咨询」。',
      note: '考试认现在的用法：咨询。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to consult before the office closed.', chinese: '他们同意在办公室关门前做这件事：咨询。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consult.s1', en: 'The deadline forced the team to consult that afternoon.', zh: '截止日期逼着小组在那天下午咨询。', structure: 'consult / 表示 / 咨询', grammar: 'verb，围绕「咨询」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She consulted it yesterday without checking the real past form.', right: 'Check the past form of "consult" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 consult 是verb，再套「咨询」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consult.q1', senseId: 'consult.s1', errorType: 'meaning', type: '词义选择', prompt: '「consult」在本条的核心意思是：', options: ['咨询', '完全相反的意思', '一种古代钱币'], answer: '咨询', explain: 'consult：咨询。' },
      { id: 'consult.q2', senseId: 'consult.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consult?', options: ['咨询', 'a kind of ancient coin', 'the past tense of be'], answer: '咨询', explain: '对的是「咨询」。' },
      { id: 'consult.q3', senseId: 'consult.s1', errorType: 'grammar', type: '词义选择', prompt: 'consult 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'consult.q4', senseId: 'consult.s1', errorType: 'meaning', type: '词源', prompt: '记 consult 时，哪句更稳妥？', options: ['先锁住「咨询」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咨询」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咨询'] },
  });

  D('consume', {
    etymology: {
      origin: '拉丁语 consumere「完全拿走、用掉」。',
      prefix: null,
      root: { text: 'consume', gloss: '消耗' },
      suffix: null,
      history: [
        { label: 'consume', text: '拉丁语 consumere「完全拿走、用掉」。' },
        { label: '现在', text: '核心用法是：消耗。' },
      ],
      formationLogic: '考试认现在的用法：消耗。',
      mnemonic: '看到 consume，先说出「消耗」。',
      note: '考试认现在的用法：消耗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to consume before the office closed.', chinese: '他们同意在办公室关门前做这件事：消耗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consume.s1', en: 'The deadline forced the team to consume that afternoon.', zh: '截止日期逼着小组在那天下午消耗。', structure: 'consume / 表示 / 消耗', grammar: 'verb，围绕「消耗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She consumeed it yesterday without checking the real past form.', right: 'Check the past form of "consume" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 consume 是verb，再套「消耗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consume.q1', senseId: 'consume.s1', errorType: 'meaning', type: '词义选择', prompt: '「consume」在本条的核心意思是：', options: ['消耗', '完全相反的意思', '一种古代钱币'], answer: '消耗', explain: 'consume：消耗。' },
      { id: 'consume.q2', senseId: 'consume.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consume?', options: ['消耗', 'a kind of ancient coin', 'the past tense of be'], answer: '消耗', explain: '对的是「消耗」。' },
      { id: 'consume.q3', senseId: 'consume.s1', errorType: 'grammar', type: '词义选择', prompt: 'consume 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'consume.q4', senseId: 'consume.s1', errorType: 'meaning', type: '词源', prompt: '记 consume 时，哪句更稳妥？', options: ['先锁住「消耗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消耗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消耗'] },
  });

  D('consumption', {
    etymology: {
      origin: '英语派生：consump + -tion，词性转到「消耗」。',
      prefix: null,
      root: { text: 'consump', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consumption', text: '英语派生：consump + -tion，词性转到「消耗」。' },
        { label: '现在', text: '核心用法是：消耗。' },
      ],
      formationLogic: '先认词干 consump，再看词尾。',
      mnemonic: '看到 consumption，先说出「消耗」。',
      note: '先认词干 consump，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consumption.', chinese: '这一章反复回到同一个点：消耗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consumption.s1', en: 'Without that consumption, the next paragraph is hard to follow.', zh: '没有这个消耗，下一段会很难读。', structure: 'consumption / 表示 / 消耗', grammar: 'noun，围绕「消耗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consumption.', right: 'He gave me some advice about the consumption.', reason: 'advice 不可数。名词 consumption 的单复数按词典词形记。', rule: '先确定 consumption 是noun，再套「消耗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consumption.q1', senseId: 'consumption.s1', errorType: 'meaning', type: '词义选择', prompt: '「consumption」在本条的核心意思是：', options: ['消耗', '完全相反的意思', '一种古代钱币'], answer: '消耗', explain: 'consumption：消耗。' },
      { id: 'consumption.q2', senseId: 'consumption.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consumption?', options: ['消耗', 'a kind of ancient coin', 'the past tense of be'], answer: '消耗', explain: '对的是「消耗」。' },
      { id: 'consumption.q3', senseId: 'consumption.s1', errorType: 'grammar', type: '词义选择', prompt: 'consumption 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consumption.q4', senseId: 'consumption.s1', errorType: 'meaning', type: '词源', prompt: '记 consumption 时，哪句更稳妥？', options: ['先锁住「消耗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消耗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消耗'] },
  });

  D('contact', {
    etymology: {
      origin: '拉丁语 contingere「碰到一起」，tangere「触摸」。',
      prefix: null,
      root: { text: 'contact', gloss: '接触' },
      suffix: null,
      history: [
        { label: 'contact', text: '拉丁语 contingere「碰到一起」，tangere「触摸」。' },
        { label: '现在', text: '核心用法是：接触。' },
      ],
      formationLogic: '考试认现在的用法：接触。',
      mnemonic: '看到 contact，先说出「接触」。',
      note: '考试认现在的用法：接触。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contact.', chinese: '这一章反复回到同一个点：接触。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contact.s1', en: 'Without that contact, the next paragraph is hard to follow.', zh: '没有这个接触，下一段会很难读。', structure: 'contact / 表示 / 接触', grammar: 'noun，围绕「接触」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contact.', right: 'He gave me some advice about the contact.', reason: 'advice 不可数。名词 contact 的单复数按词典词形记。', rule: '先确定 contact 是noun，再套「接触」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contact.q1', senseId: 'contact.s1', errorType: 'meaning', type: '词义选择', prompt: '「contact」在本条的核心意思是：', options: ['接触', '完全相反的意思', '一种古代钱币'], answer: '接触', explain: 'contact：接触。' },
      { id: 'contact.q2', senseId: 'contact.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contact?', options: ['接触', 'a kind of ancient coin', 'the past tense of be'], answer: '接触', explain: '对的是「接触」。' },
      { id: 'contact.q3', senseId: 'contact.s1', errorType: 'grammar', type: '词义选择', prompt: 'contact 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contact.q4', senseId: 'contact.s1', errorType: 'meaning', type: '词源', prompt: '记 contact 时，哪句更稳妥？', options: ['先锁住「接触」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「接触」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['接触'] },
  });

  D('contacts', {
    etymology: {
      origin: '现代英语常用词「contacts」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contacts', gloss: '人脉' },
      suffix: null,
      history: [
        { label: 'contacts', text: '现代英语常用词「contacts」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：人脉。' },
      ],
      formationLogic: '核心义：人脉。',
      mnemonic: '看到 contacts，先说出「人脉」。',
      note: '核心义：人脉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contacts.', chinese: '这一章反复回到同一个点：人脉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contacts.s1', en: 'Without that contacts, the next paragraph is hard to follow.', zh: '没有这个人脉，下一段会很难读。', structure: 'contacts / 表示 / 人脉', grammar: 'noun，围绕「人脉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contacts.', right: 'He gave me some advice about the contacts.', reason: 'advice 不可数。名词 contacts 的单复数按词典词形记。', rule: '先确定 contacts 是noun，再套「人脉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contacts.q1', senseId: 'contacts.s1', errorType: 'meaning', type: '词义选择', prompt: '「contacts」在本条的核心意思是：', options: ['人脉', '完全相反的意思', '一种古代钱币'], answer: '人脉', explain: 'contacts：人脉。' },
      { id: 'contacts.q2', senseId: 'contacts.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contacts?', options: ['人脉', 'a kind of ancient coin', 'the past tense of be'], answer: '人脉', explain: '对的是「人脉」。' },
      { id: 'contacts.q3', senseId: 'contacts.s1', errorType: 'grammar', type: '词义选择', prompt: 'contacts 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contacts.q4', senseId: 'contacts.s1', errorType: 'meaning', type: '词源', prompt: '记 contacts 时，哪句更稳妥？', options: ['先锁住「人脉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人脉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人脉'] },
  });

  D('contagious', {
    etymology: {
      origin: '英语派生：contagi + -ous，词性转到「传染的」。',
      prefix: null,
      root: { text: 'contagi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'contagious', text: '英语派生：contagi + -ous，词性转到「传染的」。' },
        { label: '现在', text: '核心用法是：传染的。' },
      ],
      formationLogic: '先认词干 contagi，再看词尾。',
      mnemonic: '看到 contagious，先说出「传染的」。',
      note: '先认词干 contagi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was contagious.', chinese: '即使是初读者也能看出，这个结果是传染的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contagious.s1', en: 'They wanted a contagious answer, not a long speech.', zh: '他们要一个传染的的答复，不要长篇发言。', structure: 'contagious / 表示 / 传染的', grammar: 'adjective，围绕「传染的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are contagious.', right: 'The news is contagious.', reason: 'news 作主语时动词用单数。', rule: '先确定 contagious 是adjective，再套「传染的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contagious.q1', senseId: 'contagious.s1', errorType: 'meaning', type: '词义选择', prompt: '「contagious」在本条的核心意思是：', options: ['传染的', '完全相反的意思', '一种古代钱币'], answer: '传染的', explain: 'contagious：传染的。' },
      { id: 'contagious.q2', senseId: 'contagious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contagious?', options: ['传染的', 'a kind of ancient coin', 'the past tense of be'], answer: '传染的', explain: '对的是「传染的」。' },
      { id: 'contagious.q3', senseId: 'contagious.s1', errorType: 'grammar', type: '词义选择', prompt: 'contagious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'contagious.q4', senseId: 'contagious.s1', errorType: 'meaning', type: '词源', prompt: '记 contagious 时，哪句更稳妥？', options: ['先锁住「传染的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「传染的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['传染的'] },
  });

  D('contain', {
    etymology: {
      origin: '拉丁语 continere「保持在里面」，tenere「拿住」。',
      prefix: null,
      root: { text: 'contain', gloss: '包含' },
      suffix: null,
      history: [
        { label: 'contain', text: '拉丁语 continere「保持在里面」，tenere「拿住」。' },
        { label: '现在', text: '核心用法是：包含。' },
      ],
      formationLogic: '考试认现在的用法：包含。',
      mnemonic: '看到 contain，先说出「包含」。',
      note: '考试认现在的用法：包含。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contain before the office closed.', chinese: '他们同意在办公室关门前做这件事：包含。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contain.s1', en: 'The deadline forced the team to contain that afternoon.', zh: '截止日期逼着小组在那天下午包含。', structure: 'contain / 表示 / 包含', grammar: 'verb，围绕「包含」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contained it yesterday without checking the real past form.', right: 'Check the past form of "contain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contain 是verb，再套「包含」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contain.q1', senseId: 'contain.s1', errorType: 'meaning', type: '词义选择', prompt: '「contain」在本条的核心意思是：', options: ['包含', '完全相反的意思', '一种古代钱币'], answer: '包含', explain: 'contain：包含。' },
      { id: 'contain.q2', senseId: 'contain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contain?', options: ['包含', 'a kind of ancient coin', 'the past tense of be'], answer: '包含', explain: '对的是「包含」。' },
      { id: 'contain.q3', senseId: 'contain.s1', errorType: 'grammar', type: '词义选择', prompt: 'contain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contain.q4', senseId: 'contain.s1', errorType: 'meaning', type: '词源', prompt: '记 contain 时，哪句更稳妥？', options: ['先锁住「包含」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「包含」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['包含'] },
  });

  D('container', {
    etymology: {
      origin: '英语派生：contain + -er，词性转到「容器」。',
      prefix: null,
      root: { text: 'contain', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'container', text: '英语派生：contain + -er，词性转到「容器」。' },
        { label: '现在', text: '核心用法是：容器。' },
      ],
      formationLogic: '先认词干 contain，再看词尾。',
      mnemonic: '看到 container，先说出「容器」。',
      note: '先认词干 contain，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one container.', chinese: '这一章反复回到同一个点：容器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'container.s1', en: 'Without that container, the next paragraph is hard to follow.', zh: '没有这个容器，下一段会很难读。', structure: 'container / 表示 / 容器', grammar: 'noun，围绕「容器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the container.', right: 'He gave me some advice about the container.', reason: 'advice 不可数。名词 container 的单复数按词典词形记。', rule: '先确定 container 是noun，再套「容器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'container.q1', senseId: 'container.s1', errorType: 'meaning', type: '词义选择', prompt: '「container」在本条的核心意思是：', options: ['容器', '完全相反的意思', '一种古代钱币'], answer: '容器', explain: 'container：容器。' },
      { id: 'container.q2', senseId: 'container.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches container?', options: ['容器', 'a kind of ancient coin', 'the past tense of be'], answer: '容器', explain: '对的是「容器」。' },
      { id: 'container.q3', senseId: 'container.s1', errorType: 'grammar', type: '词义选择', prompt: 'container 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'container.q4', senseId: 'container.s1', errorType: 'meaning', type: '词源', prompt: '记 container 时，哪句更稳妥？', options: ['先锁住「容器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「容器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['容器'] },
  });

  D('containing', {
    etymology: {
      origin: '英语派生：contain + -ing，词性转到「含有……的」。',
      prefix: null,
      root: { text: 'contain', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'containing', text: '英语派生：contain + -ing，词性转到「含有……的」。' },
        { label: '现在', text: '核心用法是：含有……的。' },
      ],
      formationLogic: '先认词干 contain，再看词尾。',
      mnemonic: '看到 containing，先说出「含有……的」。',
      note: '先认词干 contain，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was containing.', chinese: '即使是初读者也能看出，这个结果是含有……的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'containing.s1', en: 'They wanted a containing answer, not a long speech.', zh: '他们要一个含有……的的答复，不要长篇发言。', structure: 'containing / 表示 / 含有……的', grammar: 'adjective，围绕「含有……的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are containing.', right: 'The news is containing.', reason: 'news 作主语时动词用单数。', rule: '先确定 containing 是adjective，再套「含有……的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'containing.q1', senseId: 'containing.s1', errorType: 'meaning', type: '词义选择', prompt: '「containing」在本条的核心意思是：', options: ['含有……的', '完全相反的意思', '一种古代钱币'], answer: '含有……的', explain: 'containing：含有……的。' },
      { id: 'containing.q2', senseId: 'containing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches containing?', options: ['含有……的', 'a kind of ancient coin', 'the past tense of be'], answer: '含有……的', explain: '对的是「含有……的」。' },
      { id: 'containing.q3', senseId: 'containing.s1', errorType: 'grammar', type: '词义选择', prompt: 'containing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'containing.q4', senseId: 'containing.s1', errorType: 'meaning', type: '词源', prompt: '记 containing 时，哪句更稳妥？', options: ['先锁住「含有……的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「含有……的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['含有……的'] },
  });

  D('contaminate', {
    etymology: {
      origin: '现代英语常用词「contaminate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contaminate', gloss: '污染' },
      suffix: null,
      history: [
        { label: 'contaminate', text: '现代英语常用词「contaminate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：污染。' },
      ],
      formationLogic: '核心义：污染。',
      mnemonic: '看到 contaminate，先说出「污染」。',
      note: '核心义：污染。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contaminate before the office closed.', chinese: '他们同意在办公室关门前做这件事：污染。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contaminate.s1', en: 'The deadline forced the team to contaminate that afternoon.', zh: '截止日期逼着小组在那天下午污染。', structure: 'contaminate / 表示 / 污染', grammar: 'verb，围绕「污染」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contaminateed it yesterday without checking the real past form.', right: 'Check the past form of "contaminate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contaminate 是verb，再套「污染」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contaminate.q1', senseId: 'contaminate.s1', errorType: 'meaning', type: '词义选择', prompt: '「contaminate」在本条的核心意思是：', options: ['污染', '完全相反的意思', '一种古代钱币'], answer: '污染', explain: 'contaminate：污染。' },
      { id: 'contaminate.q2', senseId: 'contaminate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contaminate?', options: ['污染', 'a kind of ancient coin', 'the past tense of be'], answer: '污染', explain: '对的是「污染」。' },
      { id: 'contaminate.q3', senseId: 'contaminate.s1', errorType: 'grammar', type: '词义选择', prompt: 'contaminate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contaminate.q4', senseId: 'contaminate.s1', errorType: 'meaning', type: '词源', prompt: '记 contaminate 时，哪句更稳妥？', options: ['先锁住「污染」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「污染」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['污染'] },
  });

  D('contaminated', {
    etymology: {
      origin: '现代英语常用词「contaminated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contaminated', gloss: '被污染的' },
      suffix: null,
      history: [
        { label: 'contaminated', text: '现代英语常用词「contaminated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被污染的。' },
      ],
      formationLogic: '核心义：被污染的。',
      mnemonic: '看到 contaminated，先说出「被污染的」。',
      note: '核心义：被污染的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was contaminated.', chinese: '即使是初读者也能看出，这个结果是被污染的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contaminated.s1', en: 'They wanted a contaminated answer, not a long speech.', zh: '他们要一个被污染的的答复，不要长篇发言。', structure: 'contaminated / 表示 / 被污染的', grammar: 'adjective，围绕「被污染的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are contaminated.', right: 'The news is contaminated.', reason: 'news 作主语时动词用单数。', rule: '先确定 contaminated 是adjective，再套「被污染的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contaminated.q1', senseId: 'contaminated.s1', errorType: 'meaning', type: '词义选择', prompt: '「contaminated」在本条的核心意思是：', options: ['被污染的', '完全相反的意思', '一种古代钱币'], answer: '被污染的', explain: 'contaminated：被污染的。' },
      { id: 'contaminated.q2', senseId: 'contaminated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contaminated?', options: ['被污染的', 'a kind of ancient coin', 'the past tense of be'], answer: '被污染的', explain: '对的是「被污染的」。' },
      { id: 'contaminated.q3', senseId: 'contaminated.s1', errorType: 'grammar', type: '词义选择', prompt: 'contaminated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'contaminated.q4', senseId: 'contaminated.s1', errorType: 'meaning', type: '词源', prompt: '记 contaminated 时，哪句更稳妥？', options: ['先锁住「被污染的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被污染的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被污染的'] },
  });

  D('contemplate', {
    etymology: {
      origin: '现代英语常用词「contemplate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contemplate', gloss: '沉思' },
      suffix: null,
      history: [
        { label: 'contemplate', text: '现代英语常用词「contemplate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：沉思。' },
      ],
      formationLogic: '核心义：沉思。',
      mnemonic: '看到 contemplate，先说出「沉思」。',
      note: '核心义：沉思。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contemplate before the office closed.', chinese: '他们同意在办公室关门前做这件事：沉思。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contemplate.s1', en: 'The deadline forced the team to contemplate that afternoon.', zh: '截止日期逼着小组在那天下午沉思。', structure: 'contemplate / 表示 / 沉思', grammar: 'verb，围绕「沉思」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contemplateed it yesterday without checking the real past form.', right: 'Check the past form of "contemplate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contemplate 是verb，再套「沉思」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contemplate.q1', senseId: 'contemplate.s1', errorType: 'meaning', type: '词义选择', prompt: '「contemplate」在本条的核心意思是：', options: ['沉思', '完全相反的意思', '一种古代钱币'], answer: '沉思', explain: 'contemplate：沉思。' },
      { id: 'contemplate.q2', senseId: 'contemplate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contemplate?', options: ['沉思', 'a kind of ancient coin', 'the past tense of be'], answer: '沉思', explain: '对的是「沉思」。' },
      { id: 'contemplate.q3', senseId: 'contemplate.s1', errorType: 'grammar', type: '词义选择', prompt: 'contemplate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contemplate.q4', senseId: 'contemplate.s1', errorType: 'meaning', type: '词源', prompt: '记 contemplate 时，哪句更稳妥？', options: ['先锁住「沉思」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沉思」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沉思'] },
  });

  D('contemporary', {
    etymology: {
      origin: '拉丁语 contemporarius，tempus「时间」。同一时间的。',
      prefix: null,
      root: { text: 'contemporary', gloss: '当代的' },
      suffix: null,
      history: [
        { label: 'contemporary', text: '拉丁语 contemporarius，tempus「时间」。同一时间的。' },
        { label: '现在', text: '核心用法是：当代的。' },
      ],
      formationLogic: '考试认现在的用法：当代的。',
      mnemonic: '看到 contemporary，先说出「当代的」。',
      note: '考试认现在的用法：当代的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was contemporary.', chinese: '即使是初读者也能看出，这个结果是当代的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contemporary.s1', en: 'They wanted a contemporary answer, not a long speech.', zh: '他们要一个当代的的答复，不要长篇发言。', structure: 'contemporary / 表示 / 当代的', grammar: 'adjective，围绕「当代的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are contemporary.', right: 'The news is contemporary.', reason: 'news 作主语时动词用单数。', rule: '先确定 contemporary 是adjective，再套「当代的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contemporary.q1', senseId: 'contemporary.s1', errorType: 'meaning', type: '词义选择', prompt: '「contemporary」在本条的核心意思是：', options: ['当代的', '完全相反的意思', '一种古代钱币'], answer: '当代的', explain: 'contemporary：当代的。' },
      { id: 'contemporary.q2', senseId: 'contemporary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contemporary?', options: ['当代的', 'a kind of ancient coin', 'the past tense of be'], answer: '当代的', explain: '对的是「当代的」。' },
      { id: 'contemporary.q3', senseId: 'contemporary.s1', errorType: 'grammar', type: '词义选择', prompt: 'contemporary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'contemporary.q4', senseId: 'contemporary.s1', errorType: 'meaning', type: '词源', prompt: '记 contemporary 时，哪句更稳妥？', options: ['先锁住「当代的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「当代的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['当代的'] },
  });

  D('contempt', {
    etymology: {
      origin: '现代英语常用词「contempt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contempt', gloss: '轻蔑' },
      suffix: null,
      history: [
        { label: 'contempt', text: '现代英语常用词「contempt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：轻蔑。' },
      ],
      formationLogic: '核心义：轻蔑。',
      mnemonic: '看到 contempt，先说出「轻蔑」。',
      note: '核心义：轻蔑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contempt.', chinese: '这一章反复回到同一个点：轻蔑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contempt.s1', en: 'Without that contempt, the next paragraph is hard to follow.', zh: '没有这个轻蔑，下一段会很难读。', structure: 'contempt / 表示 / 轻蔑', grammar: 'noun，围绕「轻蔑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contempt.', right: 'He gave me some advice about the contempt.', reason: 'advice 不可数。名词 contempt 的单复数按词典词形记。', rule: '先确定 contempt 是noun，再套「轻蔑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contempt.q1', senseId: 'contempt.s1', errorType: 'meaning', type: '词义选择', prompt: '「contempt」在本条的核心意思是：', options: ['轻蔑', '完全相反的意思', '一种古代钱币'], answer: '轻蔑', explain: 'contempt：轻蔑。' },
      { id: 'contempt.q2', senseId: 'contempt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contempt?', options: ['轻蔑', 'a kind of ancient coin', 'the past tense of be'], answer: '轻蔑', explain: '对的是「轻蔑」。' },
      { id: 'contempt.q3', senseId: 'contempt.s1', errorType: 'grammar', type: '词义选择', prompt: 'contempt 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contempt.q4', senseId: 'contempt.s1', errorType: 'meaning', type: '词源', prompt: '记 contempt 时，哪句更稳妥？', options: ['先锁住「轻蔑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「轻蔑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['轻蔑'] },
  });

  D('contend', {
    etymology: {
      origin: '现代英语常用词「contend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contend', gloss: '争夺' },
      suffix: null,
      history: [
        { label: 'contend', text: '现代英语常用词「contend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：争夺。' },
      ],
      formationLogic: '核心义：争夺。',
      mnemonic: '看到 contend，先说出「争夺」。',
      note: '核心义：争夺。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contend before the office closed.', chinese: '他们同意在办公室关门前做这件事：争夺。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contend.s1', en: 'The deadline forced the team to contend that afternoon.', zh: '截止日期逼着小组在那天下午争夺。', structure: 'contend / 表示 / 争夺', grammar: 'verb，围绕「争夺」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contended it yesterday without checking the real past form.', right: 'Check the past form of "contend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contend 是verb，再套「争夺」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contend.q1', senseId: 'contend.s1', errorType: 'meaning', type: '词义选择', prompt: '「contend」在本条的核心意思是：', options: ['争夺', '完全相反的意思', '一种古代钱币'], answer: '争夺', explain: 'contend：争夺。' },
      { id: 'contend.q2', senseId: 'contend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contend?', options: ['争夺', 'a kind of ancient coin', 'the past tense of be'], answer: '争夺', explain: '对的是「争夺」。' },
      { id: 'contend.q3', senseId: 'contend.s1', errorType: 'grammar', type: '词义选择', prompt: 'contend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contend.q4', senseId: 'contend.s1', errorType: 'meaning', type: '词源', prompt: '记 contend 时，哪句更稳妥？', options: ['先锁住「争夺」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「争夺」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['争夺'] },
  });

  D('content', {
    etymology: {
      origin: '拉丁语 contentus「装在里面的、满足的」。',
      prefix: null,
      root: { text: 'content', gloss: '内容' },
      suffix: null,
      history: [
        { label: 'content', text: '拉丁语 contentus「装在里面的、满足的」。' },
        { label: '现在', text: '核心用法是：内容。' },
      ],
      formationLogic: '考试认现在的用法：内容。',
      mnemonic: '看到 content，先说出「内容」。',
      note: '考试认现在的用法：内容。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one content.', chinese: '这一章反复回到同一个点：内容。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'content.s1', en: 'Without that content, the next paragraph is hard to follow.', zh: '没有这个内容，下一段会很难读。', structure: 'content / 表示 / 内容', grammar: 'noun，围绕「内容」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the content.', right: 'He gave me some advice about the content.', reason: 'advice 不可数。名词 content 的单复数按词典词形记。', rule: '先确定 content 是noun，再套「内容」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'content.q1', senseId: 'content.s1', errorType: 'meaning', type: '词义选择', prompt: '「content」在本条的核心意思是：', options: ['内容', '完全相反的意思', '一种古代钱币'], answer: '内容', explain: 'content：内容。' },
      { id: 'content.q2', senseId: 'content.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches content?', options: ['内容', 'a kind of ancient coin', 'the past tense of be'], answer: '内容', explain: '对的是「内容」。' },
      { id: 'content.q3', senseId: 'content.s1', errorType: 'grammar', type: '词义选择', prompt: 'content 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'content.q4', senseId: 'content.s1', errorType: 'meaning', type: '词源', prompt: '记 content 时，哪句更稳妥？', options: ['先锁住「内容」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「内容」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['内容'] },
  });

  D('contest', {
    etymology: {
      origin: '拉丁语 contestari「叫来证人」。竞赛要分出结果。',
      prefix: null,
      root: { text: 'contest', gloss: '比赛' },
      suffix: null,
      history: [
        { label: 'contest', text: '拉丁语 contestari「叫来证人」。竞赛要分出结果。' },
        { label: '现在', text: '核心用法是：比赛。' },
      ],
      formationLogic: '考试认现在的用法：比赛。',
      mnemonic: '看到 contest，先说出「比赛」。',
      note: '考试认现在的用法：比赛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contest.', chinese: '这一章反复回到同一个点：比赛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contest.s1', en: 'Without that contest, the next paragraph is hard to follow.', zh: '没有这个比赛，下一段会很难读。', structure: 'contest / 表示 / 比赛', grammar: 'noun，围绕「比赛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contest.', right: 'He gave me some advice about the contest.', reason: 'advice 不可数。名词 contest 的单复数按词典词形记。', rule: '先确定 contest 是noun，再套「比赛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contest.q1', senseId: 'contest.s1', errorType: 'meaning', type: '词义选择', prompt: '「contest」在本条的核心意思是：', options: ['比赛', '完全相反的意思', '一种古代钱币'], answer: '比赛', explain: 'contest：比赛。' },
      { id: 'contest.q2', senseId: 'contest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contest?', options: ['比赛', 'a kind of ancient coin', 'the past tense of be'], answer: '比赛', explain: '对的是「比赛」。' },
      { id: 'contest.q3', senseId: 'contest.s1', errorType: 'grammar', type: '词义选择', prompt: 'contest 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contest.q4', senseId: 'contest.s1', errorType: 'meaning', type: '词源', prompt: '记 contest 时，哪句更稳妥？', options: ['先锁住「比赛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「比赛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['比赛'] },
  });

  D('context', {
    etymology: {
      origin: '拉丁语 contextus「织在一起」，texere「织」。上下文织在一起。',
      prefix: null,
      root: { text: 'context', gloss: '背景' },
      suffix: null,
      history: [
        { label: 'context', text: '拉丁语 contextus「织在一起」，texere「织」。上下文织在一起。' },
        { label: '现在', text: '核心用法是：背景。' },
      ],
      formationLogic: '考试认现在的用法：背景。',
      mnemonic: '看到 context，先说出「背景」。',
      note: '考试认现在的用法：背景。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one context.', chinese: '这一章反复回到同一个点：背景。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'context.s1', en: 'Without that context, the next paragraph is hard to follow.', zh: '没有这个背景，下一段会很难读。', structure: 'context / 表示 / 背景', grammar: 'noun，围绕「背景」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the context.', right: 'He gave me some advice about the context.', reason: 'advice 不可数。名词 context 的单复数按词典词形记。', rule: '先确定 context 是noun，再套「背景」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'context.q1', senseId: 'context.s1', errorType: 'meaning', type: '词义选择', prompt: '「context」在本条的核心意思是：', options: ['背景', '完全相反的意思', '一种古代钱币'], answer: '背景', explain: 'context：背景。' },
      { id: 'context.q2', senseId: 'context.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches context?', options: ['背景', 'a kind of ancient coin', 'the past tense of be'], answer: '背景', explain: '对的是「背景」。' },
      { id: 'context.q3', senseId: 'context.s1', errorType: 'grammar', type: '词义选择', prompt: 'context 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'context.q4', senseId: 'context.s1', errorType: 'meaning', type: '词源', prompt: '记 context 时，哪句更稳妥？', options: ['先锁住「背景」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「背景」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['背景'] },
  });

  D('continent', {
    etymology: {
      origin: '拉丁语 continere「连在一起的大地」。',
      prefix: null,
      root: { text: 'continent', gloss: '大陆' },
      suffix: null,
      history: [
        { label: 'continent', text: '拉丁语 continere「连在一起的大地」。' },
        { label: '现在', text: '核心用法是：大陆。' },
      ],
      formationLogic: '考试认现在的用法：大陆。',
      mnemonic: '看到 continent，先说出「大陆」。',
      note: '考试认现在的用法：大陆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one continent.', chinese: '这一章反复回到同一个点：大陆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'continent.s1', en: 'Without that continent, the next paragraph is hard to follow.', zh: '没有这个大陆，下一段会很难读。', structure: 'continent / 表示 / 大陆', grammar: 'noun，围绕「大陆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the continent.', right: 'He gave me some advice about the continent.', reason: 'advice 不可数。名词 continent 的单复数按词典词形记。', rule: '先确定 continent 是noun，再套「大陆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'continent.q1', senseId: 'continent.s1', errorType: 'meaning', type: '词义选择', prompt: '「continent」在本条的核心意思是：', options: ['大陆', '完全相反的意思', '一种古代钱币'], answer: '大陆', explain: 'continent：大陆。' },
      { id: 'continent.q2', senseId: 'continent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches continent?', options: ['大陆', 'a kind of ancient coin', 'the past tense of be'], answer: '大陆', explain: '对的是「大陆」。' },
      { id: 'continent.q3', senseId: 'continent.s1', errorType: 'grammar', type: '词义选择', prompt: 'continent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'continent.q4', senseId: 'continent.s1', errorType: 'meaning', type: '词源', prompt: '记 continent 时，哪句更稳妥？', options: ['先锁住「大陆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大陆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大陆'] },
  });

  D('continental', {
    etymology: {
      origin: '英语派生：continent + -al，词性转到「大陆的」。',
      prefix: null,
      root: { text: 'continent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'continental', text: '英语派生：continent + -al，词性转到「大陆的」。' },
        { label: '现在', text: '核心用法是：大陆的。' },
      ],
      formationLogic: '先认词干 continent，再看词尾。',
      mnemonic: '看到 continental，先说出「大陆的」。',
      note: '先认词干 continent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was continental.', chinese: '即使是初读者也能看出，这个结果是大陆的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'continental.s1', en: 'They wanted a continental answer, not a long speech.', zh: '他们要一个大陆的的答复，不要长篇发言。', structure: 'continental / 表示 / 大陆的', grammar: 'adjective，围绕「大陆的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are continental.', right: 'The news is continental.', reason: 'news 作主语时动词用单数。', rule: '先确定 continental 是adjective，再套「大陆的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'continental.q1', senseId: 'continental.s1', errorType: 'meaning', type: '词义选择', prompt: '「continental」在本条的核心意思是：', options: ['大陆的', '完全相反的意思', '一种古代钱币'], answer: '大陆的', explain: 'continental：大陆的。' },
      { id: 'continental.q2', senseId: 'continental.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches continental?', options: ['大陆的', 'a kind of ancient coin', 'the past tense of be'], answer: '大陆的', explain: '对的是「大陆的」。' },
      { id: 'continental.q3', senseId: 'continental.s1', errorType: 'grammar', type: '词义选择', prompt: 'continental 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'continental.q4', senseId: 'continental.s1', errorType: 'meaning', type: '词源', prompt: '记 continental 时，哪句更稳妥？', options: ['先锁住「大陆的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大陆的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大陆的'] },
  });

  D('contingent', {
    etymology: {
      origin: '现代英语常用词「contingent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contingent', gloss: '视情况而定的' },
      suffix: null,
      history: [
        { label: 'contingent', text: '现代英语常用词「contingent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：视情况而定的。' },
      ],
      formationLogic: '核心义：视情况而定的。',
      mnemonic: '看到 contingent，先说出「视情况而定的」。',
      note: '核心义：视情况而定的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was contingent.', chinese: '即使是初读者也能看出，这个结果是视情况而定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contingent.s1', en: 'They wanted a contingent answer, not a long speech.', zh: '他们要一个视情况而定的的答复，不要长篇发言。', structure: 'contingent / 表示 / 视情况而定的', grammar: 'adjective，围绕「视情况而定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are contingent.', right: 'The news is contingent.', reason: 'news 作主语时动词用单数。', rule: '先确定 contingent 是adjective，再套「视情况而定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contingent.q1', senseId: 'contingent.s1', errorType: 'meaning', type: '词义选择', prompt: '「contingent」在本条的核心意思是：', options: ['视情况而定的', '完全相反的意思', '一种古代钱币'], answer: '视情况而定的', explain: 'contingent：视情况而定的。' },
      { id: 'contingent.q2', senseId: 'contingent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contingent?', options: ['视情况而定的', 'a kind of ancient coin', 'the past tense of be'], answer: '视情况而定的', explain: '对的是「视情况而定的」。' },
      { id: 'contingent.q3', senseId: 'contingent.s1', errorType: 'grammar', type: '词义选择', prompt: 'contingent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'contingent.q4', senseId: 'contingent.s1', errorType: 'meaning', type: '词源', prompt: '记 contingent 时，哪句更稳妥？', options: ['先锁住「视情况而定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「视情况而定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['视情况而定的'] },
  });

  D('continual', {
    etymology: {
      origin: '英语派生：continu + -al，词性转到「持续不断的」。',
      prefix: null,
      root: { text: 'continu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'continual', text: '英语派生：continu + -al，词性转到「持续不断的」。' },
        { label: '现在', text: '核心用法是：持续不断的。' },
      ],
      formationLogic: '先认词干 continu，再看词尾。',
      mnemonic: '看到 continual，先说出「持续不断的」。',
      note: '先认词干 continu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was continual.', chinese: '即使是初读者也能看出，这个结果是持续不断的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'continual.s1', en: 'They wanted a continual answer, not a long speech.', zh: '他们要一个持续不断的的答复，不要长篇发言。', structure: 'continual / 表示 / 持续不断的', grammar: 'adjective，围绕「持续不断的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are continual.', right: 'The news is continual.', reason: 'news 作主语时动词用单数。', rule: '先确定 continual 是adjective，再套「持续不断的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'continual.q1', senseId: 'continual.s1', errorType: 'meaning', type: '词义选择', prompt: '「continual」在本条的核心意思是：', options: ['持续不断的', '完全相反的意思', '一种古代钱币'], answer: '持续不断的', explain: 'continual：持续不断的。' },
      { id: 'continual.q2', senseId: 'continual.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches continual?', options: ['持续不断的', 'a kind of ancient coin', 'the past tense of be'], answer: '持续不断的', explain: '对的是「持续不断的」。' },
      { id: 'continual.q3', senseId: 'continual.s1', errorType: 'grammar', type: '词义选择', prompt: 'continual 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'continual.q4', senseId: 'continual.s1', errorType: 'meaning', type: '词源', prompt: '记 continual 时，哪句更稳妥？', options: ['先锁住「持续不断的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「持续不断的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['持续不断的'] },
  });

  D('continue', {
    etymology: {
      origin: '拉丁语 continuare「连下去」。',
      prefix: null,
      root: { text: 'continue', gloss: '继续' },
      suffix: null,
      history: [
        { label: 'continue', text: '拉丁语 continuare「连下去」。' },
        { label: '现在', text: '核心用法是：继续。' },
      ],
      formationLogic: '考试认现在的用法：继续。',
      mnemonic: '看到 continue，先说出「继续」。',
      note: '考试认现在的用法：继续。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to continue before the office closed.', chinese: '他们同意在办公室关门前做这件事：继续。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'continue.s1', en: 'The deadline forced the team to continue that afternoon.', zh: '截止日期逼着小组在那天下午继续。', structure: 'continue / 表示 / 继续', grammar: 'verb，围绕「继续」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She continueed it yesterday without checking the real past form.', right: 'Check the past form of "continue" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 continue 是verb，再套「继续」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'continue.q1', senseId: 'continue.s1', errorType: 'meaning', type: '词义选择', prompt: '「continue」在本条的核心意思是：', options: ['继续', '完全相反的意思', '一种古代钱币'], answer: '继续', explain: 'continue：继续。' },
      { id: 'continue.q2', senseId: 'continue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches continue?', options: ['继续', 'a kind of ancient coin', 'the past tense of be'], answer: '继续', explain: '对的是「继续」。' },
      { id: 'continue.q3', senseId: 'continue.s1', errorType: 'grammar', type: '词义选择', prompt: 'continue 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'continue.q4', senseId: 'continue.s1', errorType: 'meaning', type: '词源', prompt: '记 continue 时，哪句更稳妥？', options: ['先锁住「继续」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「继续」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['继续'] },
  });

  D('continuing', {
    etymology: {
      origin: '英语派生：continu + -ing，词性转到「持续的」。',
      prefix: null,
      root: { text: 'continu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'continuing', text: '英语派生：continu + -ing，词性转到「持续的」。' },
        { label: '现在', text: '核心用法是：持续的。' },
      ],
      formationLogic: '先认词干 continu，再看词尾。',
      mnemonic: '看到 continuing，先说出「持续的」。',
      note: '先认词干 continu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was continuing.', chinese: '即使是初读者也能看出，这个结果是持续的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'continuing.s1', en: 'They wanted a continuing answer, not a long speech.', zh: '他们要一个持续的的答复，不要长篇发言。', structure: 'continuing / 表示 / 持续的', grammar: 'adjective，围绕「持续的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are continuing.', right: 'The news is continuing.', reason: 'news 作主语时动词用单数。', rule: '先确定 continuing 是adjective，再套「持续的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'continuing.q1', senseId: 'continuing.s1', errorType: 'meaning', type: '词义选择', prompt: '「continuing」在本条的核心意思是：', options: ['持续的', '完全相反的意思', '一种古代钱币'], answer: '持续的', explain: 'continuing：持续的。' },
      { id: 'continuing.q2', senseId: 'continuing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches continuing?', options: ['持续的', 'a kind of ancient coin', 'the past tense of be'], answer: '持续的', explain: '对的是「持续的」。' },
      { id: 'continuing.q3', senseId: 'continuing.s1', errorType: 'grammar', type: '词义选择', prompt: 'continuing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'continuing.q4', senseId: 'continuing.s1', errorType: 'meaning', type: '词源', prompt: '记 continuing 时，哪句更稳妥？', options: ['先锁住「持续的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「持续的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['持续的'] },
  });

  D('continuous', {
    etymology: {
      origin: '英语派生：continu + -ous，词性转到「连续的」。',
      prefix: null,
      root: { text: 'continu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'continuous', text: '英语派生：continu + -ous，词性转到「连续的」。' },
        { label: '现在', text: '核心用法是：连续的。' },
      ],
      formationLogic: '先认词干 continu，再看词尾。',
      mnemonic: '看到 continuous，先说出「连续的」。',
      note: '先认词干 continu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was continuous.', chinese: '即使是初读者也能看出，这个结果是连续的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'continuous.s1', en: 'They wanted a continuous answer, not a long speech.', zh: '他们要一个连续的的答复，不要长篇发言。', structure: 'continuous / 表示 / 连续的', grammar: 'adjective，围绕「连续的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are continuous.', right: 'The news is continuous.', reason: 'news 作主语时动词用单数。', rule: '先确定 continuous 是adjective，再套「连续的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'continuous.q1', senseId: 'continuous.s1', errorType: 'meaning', type: '词义选择', prompt: '「continuous」在本条的核心意思是：', options: ['连续的', '完全相反的意思', '一种古代钱币'], answer: '连续的', explain: 'continuous：连续的。' },
      { id: 'continuous.q2', senseId: 'continuous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches continuous?', options: ['连续的', 'a kind of ancient coin', 'the past tense of be'], answer: '连续的', explain: '对的是「连续的」。' },
      { id: 'continuous.q3', senseId: 'continuous.s1', errorType: 'grammar', type: '词义选择', prompt: 'continuous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'continuous.q4', senseId: 'continuous.s1', errorType: 'meaning', type: '词源', prompt: '记 continuous 时，哪句更稳妥？', options: ['先锁住「连续的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连续的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连续的'] },
  });

  D('contour', {
    etymology: {
      origin: '现代英语常用词「contour」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'contour', gloss: '轮廓' },
      suffix: null,
      history: [
        { label: 'contour', text: '现代英语常用词「contour」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：轮廓。' },
      ],
      formationLogic: '核心义：轮廓。',
      mnemonic: '看到 contour，先说出「轮廓」。',
      note: '核心义：轮廓。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contour.', chinese: '这一章反复回到同一个点：轮廓。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contour.s1', en: 'Without that contour, the next paragraph is hard to follow.', zh: '没有这个轮廓，下一段会很难读。', structure: 'contour / 表示 / 轮廓', grammar: 'noun，围绕「轮廓」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contour.', right: 'He gave me some advice about the contour.', reason: 'advice 不可数。名词 contour 的单复数按词典词形记。', rule: '先确定 contour 是noun，再套「轮廓」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contour.q1', senseId: 'contour.s1', errorType: 'meaning', type: '词义选择', prompt: '「contour」在本条的核心意思是：', options: ['轮廓', '完全相反的意思', '一种古代钱币'], answer: '轮廓', explain: 'contour：轮廓。' },
      { id: 'contour.q2', senseId: 'contour.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contour?', options: ['轮廓', 'a kind of ancient coin', 'the past tense of be'], answer: '轮廓', explain: '对的是「轮廓」。' },
      { id: 'contour.q3', senseId: 'contour.s1', errorType: 'grammar', type: '词义选择', prompt: 'contour 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contour.q4', senseId: 'contour.s1', errorType: 'meaning', type: '词源', prompt: '记 contour 时，哪句更稳妥？', options: ['先锁住「轮廓」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「轮廓」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['轮廓'] },
  });

  D('contraceptive', {
    etymology: {
      origin: '英语派生：contracept + -ive，词性转到「避孕用品」。',
      prefix: null,
      root: { text: 'contracept', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'contraceptive', text: '英语派生：contracept + -ive，词性转到「避孕用品」。' },
        { label: '现在', text: '核心用法是：避孕用品。' },
      ],
      formationLogic: '先认词干 contracept，再看词尾。',
      mnemonic: '看到 contraceptive，先说出「避孕用品」。',
      note: '先认词干 contracept，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contraceptive.', chinese: '这一章反复回到同一个点：避孕用品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contraceptive.s1', en: 'Without that contraceptive, the next paragraph is hard to follow.', zh: '没有这个避孕用品，下一段会很难读。', structure: 'contraceptive / 表示 / 避孕用品', grammar: 'noun，围绕「避孕用品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contraceptive.', right: 'He gave me some advice about the contraceptive.', reason: 'advice 不可数。名词 contraceptive 的单复数按词典词形记。', rule: '先确定 contraceptive 是noun，再套「避孕用品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contraceptive.q1', senseId: 'contraceptive.s1', errorType: 'meaning', type: '词义选择', prompt: '「contraceptive」在本条的核心意思是：', options: ['避孕用品', '完全相反的意思', '一种古代钱币'], answer: '避孕用品', explain: 'contraceptive：避孕用品。' },
      { id: 'contraceptive.q2', senseId: 'contraceptive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contraceptive?', options: ['避孕用品', 'a kind of ancient coin', 'the past tense of be'], answer: '避孕用品', explain: '对的是「避孕用品」。' },
      { id: 'contraceptive.q3', senseId: 'contraceptive.s1', errorType: 'grammar', type: '词义选择', prompt: 'contraceptive 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contraceptive.q4', senseId: 'contraceptive.s1', errorType: 'meaning', type: '词源', prompt: '记 contraceptive 时，哪句更稳妥？', options: ['先锁住「避孕用品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「避孕用品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['避孕用品'] },
  });

  D('contract', {
    etymology: {
      origin: '拉丁语 contrahere「拉到一起」。合同把双方拉到一起；收缩也是拉紧。',
      prefix: null,
      root: { text: 'contract', gloss: '合同' },
      suffix: null,
      history: [
        { label: 'contract', text: '拉丁语 contrahere「拉到一起」。合同把双方拉到一起；收缩也是拉紧。' },
        { label: '现在', text: '核心用法是：合同。' },
      ],
      formationLogic: '考试认现在的用法：合同。',
      mnemonic: '看到 contract，先说出「合同」。',
      note: '考试认现在的用法：合同。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contract.', chinese: '这一章反复回到同一个点：合同。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contract.s1', en: 'Without that contract, the next paragraph is hard to follow.', zh: '没有这个合同，下一段会很难读。', structure: 'contract / 表示 / 合同', grammar: 'noun，围绕「合同」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contract.', right: 'He gave me some advice about the contract.', reason: 'advice 不可数。名词 contract 的单复数按词典词形记。', rule: '先确定 contract 是noun，再套「合同」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contract.q1', senseId: 'contract.s1', errorType: 'meaning', type: '词义选择', prompt: '「contract」在本条的核心意思是：', options: ['合同', '完全相反的意思', '一种古代钱币'], answer: '合同', explain: 'contract：合同。' },
      { id: 'contract.q2', senseId: 'contract.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contract?', options: ['合同', 'a kind of ancient coin', 'the past tense of be'], answer: '合同', explain: '对的是「合同」。' },
      { id: 'contract.q3', senseId: 'contract.s1', errorType: 'grammar', type: '词义选择', prompt: 'contract 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contract.q4', senseId: 'contract.s1', errorType: 'meaning', type: '词源', prompt: '记 contract 时，哪句更稳妥？', options: ['先锁住「合同」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合同」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合同'] },
  });

  D('contradict', {
    etymology: {
      origin: '拉丁语 contradicere「对着说」。',
      prefix: null,
      root: { text: 'contradict', gloss: '反驳' },
      suffix: null,
      history: [
        { label: 'contradict', text: '拉丁语 contradicere「对着说」。' },
        { label: '现在', text: '核心用法是：反驳。' },
      ],
      formationLogic: '考试认现在的用法：反驳。',
      mnemonic: '看到 contradict，先说出「反驳」。',
      note: '考试认现在的用法：反驳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contradict before the office closed.', chinese: '他们同意在办公室关门前做这件事：反驳。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contradict.s1', en: 'The deadline forced the team to contradict that afternoon.', zh: '截止日期逼着小组在那天下午反驳。', structure: 'contradict / 表示 / 反驳', grammar: 'verb，围绕「反驳」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contradicted it yesterday without checking the real past form.', right: 'Check the past form of "contradict" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contradict 是verb，再套「反驳」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contradict.q1', senseId: 'contradict.s1', errorType: 'meaning', type: '词义选择', prompt: '「contradict」在本条的核心意思是：', options: ['反驳', '完全相反的意思', '一种古代钱币'], answer: '反驳', explain: 'contradict：反驳。' },
      { id: 'contradict.q2', senseId: 'contradict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contradict?', options: ['反驳', 'a kind of ancient coin', 'the past tense of be'], answer: '反驳', explain: '对的是「反驳」。' },
      { id: 'contradict.q3', senseId: 'contradict.s1', errorType: 'grammar', type: '词义选择', prompt: 'contradict 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contradict.q4', senseId: 'contradict.s1', errorType: 'meaning', type: '词源', prompt: '记 contradict 时，哪句更稳妥？', options: ['先锁住「反驳」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「反驳」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['反驳'] },
  });

  D('contradiction', {
    etymology: {
      origin: '英语派生：contradic + -tion，词性转到「矛盾」。',
      prefix: null,
      root: { text: 'contradic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'contradiction', text: '英语派生：contradic + -tion，词性转到「矛盾」。' },
        { label: '现在', text: '核心用法是：矛盾。' },
      ],
      formationLogic: '先认词干 contradic，再看词尾。',
      mnemonic: '看到 contradiction，先说出「矛盾」。',
      note: '先认词干 contradic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contradiction.', chinese: '这一章反复回到同一个点：矛盾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contradiction.s1', en: 'Without that contradiction, the next paragraph is hard to follow.', zh: '没有这个矛盾，下一段会很难读。', structure: 'contradiction / 表示 / 矛盾', grammar: 'noun，围绕「矛盾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contradiction.', right: 'He gave me some advice about the contradiction.', reason: 'advice 不可数。名词 contradiction 的单复数按词典词形记。', rule: '先确定 contradiction 是noun，再套「矛盾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contradiction.q1', senseId: 'contradiction.s1', errorType: 'meaning', type: '词义选择', prompt: '「contradiction」在本条的核心意思是：', options: ['矛盾', '完全相反的意思', '一种古代钱币'], answer: '矛盾', explain: 'contradiction：矛盾。' },
      { id: 'contradiction.q2', senseId: 'contradiction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contradiction?', options: ['矛盾', 'a kind of ancient coin', 'the past tense of be'], answer: '矛盾', explain: '对的是「矛盾」。' },
      { id: 'contradiction.q3', senseId: 'contradiction.s1', errorType: 'grammar', type: '词义选择', prompt: 'contradiction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contradiction.q4', senseId: 'contradiction.s1', errorType: 'meaning', type: '词源', prompt: '记 contradiction 时，哪句更稳妥？', options: ['先锁住「矛盾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「矛盾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['矛盾'] },
  });

  D('contrary', {
    etymology: {
      origin: '拉丁语 contrarius「对面的」。',
      prefix: null,
      root: { text: 'contrary', gloss: '相反的' },
      suffix: null,
      history: [
        { label: 'contrary', text: '拉丁语 contrarius「对面的」。' },
        { label: '现在', text: '核心用法是：相反的。' },
      ],
      formationLogic: '考试认现在的用法：相反的。',
      mnemonic: '看到 contrary，先说出「相反的」。',
      note: '考试认现在的用法：相反的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was contrary.', chinese: '即使是初读者也能看出，这个结果是相反的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contrary.s1', en: 'They wanted a contrary answer, not a long speech.', zh: '他们要一个相反的的答复，不要长篇发言。', structure: 'contrary / 表示 / 相反的', grammar: 'adjective，围绕「相反的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are contrary.', right: 'The news is contrary.', reason: 'news 作主语时动词用单数。', rule: '先确定 contrary 是adjective，再套「相反的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contrary.q1', senseId: 'contrary.s1', errorType: 'meaning', type: '词义选择', prompt: '「contrary」在本条的核心意思是：', options: ['相反的', '完全相反的意思', '一种古代钱币'], answer: '相反的', explain: 'contrary：相反的。' },
      { id: 'contrary.q2', senseId: 'contrary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contrary?', options: ['相反的', 'a kind of ancient coin', 'the past tense of be'], answer: '相反的', explain: '对的是「相反的」。' },
      { id: 'contrary.q3', senseId: 'contrary.s1', errorType: 'grammar', type: '词义选择', prompt: 'contrary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'contrary.q4', senseId: 'contrary.s1', errorType: 'meaning', type: '词源', prompt: '记 contrary 时，哪句更稳妥？', options: ['先锁住「相反的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相反的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相反的'] },
  });

  D('contrast', {
    etymology: {
      origin: '拉丁语 contra + stare「对着站」。',
      prefix: null,
      root: { text: 'contrast', gloss: '对比' },
      suffix: null,
      history: [
        { label: 'contrast', text: '拉丁语 contra + stare「对着站」。' },
        { label: '现在', text: '核心用法是：对比。' },
      ],
      formationLogic: '考试认现在的用法：对比。',
      mnemonic: '看到 contrast，先说出「对比」。',
      note: '考试认现在的用法：对比。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contrast.', chinese: '这一章反复回到同一个点：对比。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contrast.s1', en: 'Without that contrast, the next paragraph is hard to follow.', zh: '没有这个对比，下一段会很难读。', structure: 'contrast / 表示 / 对比', grammar: 'noun，围绕「对比」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contrast.', right: 'He gave me some advice about the contrast.', reason: 'advice 不可数。名词 contrast 的单复数按词典词形记。', rule: '先确定 contrast 是noun，再套「对比」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contrast.q1', senseId: 'contrast.s1', errorType: 'meaning', type: '词义选择', prompt: '「contrast」在本条的核心意思是：', options: ['对比', '完全相反的意思', '一种古代钱币'], answer: '对比', explain: 'contrast：对比。' },
      { id: 'contrast.q2', senseId: 'contrast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contrast?', options: ['对比', 'a kind of ancient coin', 'the past tense of be'], answer: '对比', explain: '对的是「对比」。' },
      { id: 'contrast.q3', senseId: 'contrast.s1', errorType: 'grammar', type: '词义选择', prompt: 'contrast 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contrast.q4', senseId: 'contrast.s1', errorType: 'meaning', type: '词源', prompt: '记 contrast 时，哪句更稳妥？', options: ['先锁住「对比」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「对比」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对比'] },
  });

  D('contribute', {
    etymology: {
      origin: '拉丁语 contribuere「分给一起」，tribuere「给予」。',
      prefix: null,
      root: { text: 'contribute', gloss: '贡献' },
      suffix: null,
      history: [
        { label: 'contribute', text: '拉丁语 contribuere「分给一起」，tribuere「给予」。' },
        { label: '现在', text: '核心用法是：贡献。' },
      ],
      formationLogic: '考试认现在的用法：贡献。',
      mnemonic: '看到 contribute，先说出「贡献」。',
      note: '考试认现在的用法：贡献。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contribute before the office closed.', chinese: '他们同意在办公室关门前做这件事：贡献。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contribute.s1', en: 'The deadline forced the team to contribute that afternoon.', zh: '截止日期逼着小组在那天下午贡献。', structure: 'contribute / 表示 / 贡献', grammar: 'verb，围绕「贡献」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contributeed it yesterday without checking the real past form.', right: 'Check the past form of "contribute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contribute 是verb，再套「贡献」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contribute.q1', senseId: 'contribute.s1', errorType: 'meaning', type: '词义选择', prompt: '「contribute」在本条的核心意思是：', options: ['贡献', '完全相反的意思', '一种古代钱币'], answer: '贡献', explain: 'contribute：贡献。' },
      { id: 'contribute.q2', senseId: 'contribute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contribute?', options: ['贡献', 'a kind of ancient coin', 'the past tense of be'], answer: '贡献', explain: '对的是「贡献」。' },
      { id: 'contribute.q3', senseId: 'contribute.s1', errorType: 'grammar', type: '词义选择', prompt: 'contribute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contribute.q4', senseId: 'contribute.s1', errorType: 'meaning', type: '词源', prompt: '记 contribute 时，哪句更稳妥？', options: ['先锁住「贡献」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贡献」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贡献'] },
  });

  D('contribution', {
    etymology: {
      origin: '英语派生：contribu + -tion，词性转到「贡献」。',
      prefix: null,
      root: { text: 'contribu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'contribution', text: '英语派生：contribu + -tion，词性转到「贡献」。' },
        { label: '现在', text: '核心用法是：贡献。' },
      ],
      formationLogic: '先认词干 contribu，再看词尾。',
      mnemonic: '看到 contribution，先说出「贡献」。',
      note: '先认词干 contribu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one contribution.', chinese: '这一章反复回到同一个点：贡献。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contribution.s1', en: 'Without that contribution, the next paragraph is hard to follow.', zh: '没有这个贡献，下一段会很难读。', structure: 'contribution / 表示 / 贡献', grammar: 'noun，围绕「贡献」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the contribution.', right: 'He gave me some advice about the contribution.', reason: 'advice 不可数。名词 contribution 的单复数按词典词形记。', rule: '先确定 contribution 是noun，再套「贡献」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contribution.q1', senseId: 'contribution.s1', errorType: 'meaning', type: '词义选择', prompt: '「contribution」在本条的核心意思是：', options: ['贡献', '完全相反的意思', '一种古代钱币'], answer: '贡献', explain: 'contribution：贡献。' },
      { id: 'contribution.q2', senseId: 'contribution.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contribution?', options: ['贡献', 'a kind of ancient coin', 'the past tense of be'], answer: '贡献', explain: '对的是「贡献」。' },
      { id: 'contribution.q3', senseId: 'contribution.s1', errorType: 'grammar', type: '词义选择', prompt: 'contribution 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'contribution.q4', senseId: 'contribution.s1', errorType: 'meaning', type: '词源', prompt: '记 contribution 时，哪句更稳妥？', options: ['先锁住「贡献」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贡献」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贡献'] },
  });

  D('contrive', {
    etymology: {
      origin: '英语派生：contr + -ive，词性转到「设法做到」。',
      prefix: null,
      root: { text: 'contr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'contrive', text: '英语派生：contr + -ive，词性转到「设法做到」。' },
        { label: '现在', text: '核心用法是：设法做到。' },
      ],
      formationLogic: '先认词干 contr，再看词尾。',
      mnemonic: '看到 contrive，先说出「设法做到」。',
      note: '先认词干 contr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to contrive before the office closed.', chinese: '他们同意在办公室关门前做这件事：设法做到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'contrive.s1', en: 'The deadline forced the team to contrive that afternoon.', zh: '截止日期逼着小组在那天下午设法做到。', structure: 'contrive / 表示 / 设法做到', grammar: 'verb，围绕「设法做到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She contriveed it yesterday without checking the real past form.', right: 'Check the past form of "contrive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 contrive 是verb，再套「设法做到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'contrive.q1', senseId: 'contrive.s1', errorType: 'meaning', type: '词义选择', prompt: '「contrive」在本条的核心意思是：', options: ['设法做到', '完全相反的意思', '一种古代钱币'], answer: '设法做到', explain: 'contrive：设法做到。' },
      { id: 'contrive.q2', senseId: 'contrive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches contrive?', options: ['设法做到', 'a kind of ancient coin', 'the past tense of be'], answer: '设法做到', explain: '对的是「设法做到」。' },
      { id: 'contrive.q3', senseId: 'contrive.s1', errorType: 'grammar', type: '词义选择', prompt: 'contrive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'contrive.q4', senseId: 'contrive.s1', errorType: 'meaning', type: '词源', prompt: '记 contrive 时，哪句更稳妥？', options: ['先锁住「设法做到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设法做到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设法做到'] },
  });

  D('control', {
    etymology: {
      origin: '拉丁语 contrarotulus「核对的卷宗」。',
      prefix: null,
      root: { text: 'control', gloss: '控制' },
      suffix: null,
      history: [
        { label: 'control', text: '拉丁语 contrarotulus「核对的卷宗」。' },
        { label: '现在', text: '核心用法是：控制。' },
      ],
      formationLogic: '考试认现在的用法：控制。',
      mnemonic: '看到 control，先说出「控制」。',
      note: '考试认现在的用法：控制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one control.', chinese: '这一章反复回到同一个点：控制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'control.s1', en: 'Without that control, the next paragraph is hard to follow.', zh: '没有这个控制，下一段会很难读。', structure: 'control / 表示 / 控制', grammar: 'noun，围绕「控制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the control.', right: 'He gave me some advice about the control.', reason: 'advice 不可数。名词 control 的单复数按词典词形记。', rule: '先确定 control 是noun，再套「控制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'control.q1', senseId: 'control.s1', errorType: 'meaning', type: '词义选择', prompt: '「control」在本条的核心意思是：', options: ['控制', '完全相反的意思', '一种古代钱币'], answer: '控制', explain: 'control：控制。' },
      { id: 'control.q2', senseId: 'control.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches control?', options: ['控制', 'a kind of ancient coin', 'the past tense of be'], answer: '控制', explain: '对的是「控制」。' },
      { id: 'control.q3', senseId: 'control.s1', errorType: 'grammar', type: '词义选择', prompt: 'control 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'control.q4', senseId: 'control.s1', errorType: 'meaning', type: '词源', prompt: '记 control 时，哪句更稳妥？', options: ['先锁住「控制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「控制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['控制'] },
  });

  D('controlling', {
    etymology: {
      origin: '英语派生：controll + -ing，词性转到「控制的」。',
      prefix: null,
      root: { text: 'controll', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'controlling', text: '英语派生：controll + -ing，词性转到「控制的」。' },
        { label: '现在', text: '核心用法是：控制的。' },
      ],
      formationLogic: '先认词干 controll，再看词尾。',
      mnemonic: '看到 controlling，先说出「控制的」。',
      note: '先认词干 controll，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was controlling.', chinese: '即使是初读者也能看出，这个结果是控制的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'controlling.s1', en: 'They wanted a controlling answer, not a long speech.', zh: '他们要一个控制的的答复，不要长篇发言。', structure: 'controlling / 表示 / 控制的', grammar: 'adjective，围绕「控制的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are controlling.', right: 'The news is controlling.', reason: 'news 作主语时动词用单数。', rule: '先确定 controlling 是adjective，再套「控制的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'controlling.q1', senseId: 'controlling.s1', errorType: 'meaning', type: '词义选择', prompt: '「controlling」在本条的核心意思是：', options: ['控制的', '完全相反的意思', '一种古代钱币'], answer: '控制的', explain: 'controlling：控制的。' },
      { id: 'controlling.q2', senseId: 'controlling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches controlling?', options: ['控制的', 'a kind of ancient coin', 'the past tense of be'], answer: '控制的', explain: '对的是「控制的」。' },
      { id: 'controlling.q3', senseId: 'controlling.s1', errorType: 'grammar', type: '词义选择', prompt: 'controlling 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'controlling.q4', senseId: 'controlling.s1', errorType: 'meaning', type: '词源', prompt: '记 controlling 时，哪句更稳妥？', options: ['先锁住「控制的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「控制的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['控制的'] },
  });

  D('controversy', {
    etymology: {
      origin: '拉丁语 controversia「对着转」。',
      prefix: null,
      root: { text: 'controversy', gloss: '争论' },
      suffix: null,
      history: [
        { label: 'controversy', text: '拉丁语 controversia「对着转」。' },
        { label: '现在', text: '核心用法是：争论。' },
      ],
      formationLogic: '考试认现在的用法：争论。',
      mnemonic: '看到 controversy，先说出「争论」。',
      note: '考试认现在的用法：争论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one controversy.', chinese: '这一章反复回到同一个点：争论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'controversy.s1', en: 'Without that controversy, the next paragraph is hard to follow.', zh: '没有这个争论，下一段会很难读。', structure: 'controversy / 表示 / 争论', grammar: 'noun，围绕「争论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the controversy.', right: 'He gave me some advice about the controversy.', reason: 'advice 不可数。名词 controversy 的单复数按词典词形记。', rule: '先确定 controversy 是noun，再套「争论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'controversy.q1', senseId: 'controversy.s1', errorType: 'meaning', type: '词义选择', prompt: '「controversy」在本条的核心意思是：', options: ['争论', '完全相反的意思', '一种古代钱币'], answer: '争论', explain: 'controversy：争论。' },
      { id: 'controversy.q2', senseId: 'controversy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches controversy?', options: ['争论', 'a kind of ancient coin', 'the past tense of be'], answer: '争论', explain: '对的是「争论」。' },
      { id: 'controversy.q3', senseId: 'controversy.s1', errorType: 'grammar', type: '词义选择', prompt: 'controversy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'controversy.q4', senseId: 'controversy.s1', errorType: 'meaning', type: '词源', prompt: '记 controversy 时，哪句更稳妥？', options: ['先锁住「争论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「争论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['争论'] },
  });

  D('conurbation', {
    etymology: {
      origin: '英语派生：conurba + -tion，词性转到「大都市圈」。',
      prefix: null,
      root: { text: 'conurba', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conurbation', text: '英语派生：conurba + -tion，词性转到「大都市圈」。' },
        { label: '现在', text: '核心用法是：大都市圈。' },
      ],
      formationLogic: '先认词干 conurba，再看词尾。',
      mnemonic: '看到 conurbation，先说出「大都市圈」。',
      note: '先认词干 conurba，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conurbation.', chinese: '这一章反复回到同一个点：大都市圈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conurbation.s1', en: 'Without that conurbation, the next paragraph is hard to follow.', zh: '没有这个大都市圈，下一段会很难读。', structure: 'conurbation / 表示 / 大都市圈', grammar: 'noun，围绕「大都市圈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conurbation.', right: 'He gave me some advice about the conurbation.', reason: 'advice 不可数。名词 conurbation 的单复数按词典词形记。', rule: '先确定 conurbation 是noun，再套「大都市圈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conurbation.q1', senseId: 'conurbation.s1', errorType: 'meaning', type: '词义选择', prompt: '「conurbation」在本条的核心意思是：', options: ['大都市圈', '完全相反的意思', '一种古代钱币'], answer: '大都市圈', explain: 'conurbation：大都市圈。' },
      { id: 'conurbation.q2', senseId: 'conurbation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conurbation?', options: ['大都市圈', 'a kind of ancient coin', 'the past tense of be'], answer: '大都市圈', explain: '对的是「大都市圈」。' },
      { id: 'conurbation.q3', senseId: 'conurbation.s1', errorType: 'grammar', type: '词义选择', prompt: 'conurbation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conurbation.q4', senseId: 'conurbation.s1', errorType: 'meaning', type: '词源', prompt: '记 conurbation 时，哪句更稳妥？', options: ['先锁住「大都市圈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大都市圈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大都市圈'] },
  });

  D('convene', {
    etymology: {
      origin: '现代英语常用词「convene」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'convene', gloss: '召集' },
      suffix: null,
      history: [
        { label: 'convene', text: '现代英语常用词「convene」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：召集。' },
      ],
      formationLogic: '核心义：召集。',
      mnemonic: '看到 convene，先说出「召集」。',
      note: '核心义：召集。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to convene before the office closed.', chinese: '他们同意在办公室关门前做这件事：召集。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convene.s1', en: 'The deadline forced the team to convene that afternoon.', zh: '截止日期逼着小组在那天下午召集。', structure: 'convene / 表示 / 召集', grammar: 'verb，围绕「召集」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conveneed it yesterday without checking the real past form.', right: 'Check the past form of "convene" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 convene 是verb，再套「召集」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convene.q1', senseId: 'convene.s1', errorType: 'meaning', type: '词义选择', prompt: '「convene」在本条的核心意思是：', options: ['召集', '完全相反的意思', '一种古代钱币'], answer: '召集', explain: 'convene：召集。' },
      { id: 'convene.q2', senseId: 'convene.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convene?', options: ['召集', 'a kind of ancient coin', 'the past tense of be'], answer: '召集', explain: '对的是「召集」。' },
      { id: 'convene.q3', senseId: 'convene.s1', errorType: 'grammar', type: '词义选择', prompt: 'convene 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'convene.q4', senseId: 'convene.s1', errorType: 'meaning', type: '词源', prompt: '记 convene 时，哪句更稳妥？', options: ['先锁住「召集」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「召集」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['召集'] },
  });

  D('convenient', {
    etymology: {
      origin: '拉丁语 convenire。合适手头，所以方便。',
      prefix: null,
      root: { text: 'convenient', gloss: '方便的' },
      suffix: null,
      history: [
        { label: 'convenient', text: '拉丁语 convenire。合适手头，所以方便。' },
        { label: '现在', text: '核心用法是：方便的。' },
      ],
      formationLogic: '考试认现在的用法：方便的。',
      mnemonic: '看到 convenient，先说出「方便的」。',
      note: '考试认现在的用法：方便的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was convenient.', chinese: '即使是初读者也能看出，这个结果是方便的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convenient.s1', en: 'They wanted a convenient answer, not a long speech.', zh: '他们要一个方便的的答复，不要长篇发言。', structure: 'convenient / 表示 / 方便的', grammar: 'adjective，围绕「方便的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are convenient.', right: 'The news is convenient.', reason: 'news 作主语时动词用单数。', rule: '先确定 convenient 是adjective，再套「方便的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convenient.q1', senseId: 'convenient.s1', errorType: 'meaning', type: '词义选择', prompt: '「convenient」在本条的核心意思是：', options: ['方便的', '完全相反的意思', '一种古代钱币'], answer: '方便的', explain: 'convenient：方便的。' },
      { id: 'convenient.q2', senseId: 'convenient.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convenient?', options: ['方便的', 'a kind of ancient coin', 'the past tense of be'], answer: '方便的', explain: '对的是「方便的」。' },
      { id: 'convenient.q3', senseId: 'convenient.s1', errorType: 'grammar', type: '词义选择', prompt: 'convenient 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'convenient.q4', senseId: 'convenient.s1', errorType: 'meaning', type: '词源', prompt: '记 convenient 时，哪句更稳妥？', options: ['先锁住「方便的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「方便的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['方便的'] },
  });

  D('convention', {
    etymology: {
      origin: '拉丁语 conventio「会到一起」。惯例是大家走到一起形成的。',
      prefix: null,
      root: { text: 'convention', gloss: '惯例' },
      suffix: null,
      history: [
        { label: 'convention', text: '拉丁语 conventio「会到一起」。惯例是大家走到一起形成的。' },
        { label: '现在', text: '核心用法是：惯例。' },
      ],
      formationLogic: '考试认现在的用法：惯例。',
      mnemonic: '看到 convention，先说出「惯例」。',
      note: '考试认现在的用法：惯例。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one convention.', chinese: '这一章反复回到同一个点：惯例。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convention.s1', en: 'Without that convention, the next paragraph is hard to follow.', zh: '没有这个惯例，下一段会很难读。', structure: 'convention / 表示 / 惯例', grammar: 'noun，围绕「惯例」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the convention.', right: 'He gave me some advice about the convention.', reason: 'advice 不可数。名词 convention 的单复数按词典词形记。', rule: '先确定 convention 是noun，再套「惯例」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convention.q1', senseId: 'convention.s1', errorType: 'meaning', type: '词义选择', prompt: '「convention」在本条的核心意思是：', options: ['惯例', '完全相反的意思', '一种古代钱币'], answer: '惯例', explain: 'convention：惯例。' },
      { id: 'convention.q2', senseId: 'convention.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convention?', options: ['惯例', 'a kind of ancient coin', 'the past tense of be'], answer: '惯例', explain: '对的是「惯例」。' },
      { id: 'convention.q3', senseId: 'convention.s1', errorType: 'grammar', type: '词义选择', prompt: 'convention 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'convention.q4', senseId: 'convention.s1', errorType: 'meaning', type: '词源', prompt: '记 convention 时，哪句更稳妥？', options: ['先锁住「惯例」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「惯例」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['惯例'] },
  });

  D('conventional', {
    etymology: {
      origin: '英语派生：convention + -al，词性转到「传统的」。',
      prefix: null,
      root: { text: 'convention', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conventional', text: '英语派生：convention + -al，词性转到「传统的」。' },
        { label: '现在', text: '核心用法是：传统的。' },
      ],
      formationLogic: '先认词干 convention，再看词尾。',
      mnemonic: '看到 conventional，先说出「传统的」。',
      note: '先认词干 convention，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conventional.', chinese: '即使是初读者也能看出，这个结果是传统的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conventional.s1', en: 'They wanted a conventional answer, not a long speech.', zh: '他们要一个传统的的答复，不要长篇发言。', structure: 'conventional / 表示 / 传统的', grammar: 'adjective，围绕「传统的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conventional.', right: 'The news is conventional.', reason: 'news 作主语时动词用单数。', rule: '先确定 conventional 是adjective，再套「传统的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conventional.q1', senseId: 'conventional.s1', errorType: 'meaning', type: '词义选择', prompt: '「conventional」在本条的核心意思是：', options: ['传统的', '完全相反的意思', '一种古代钱币'], answer: '传统的', explain: 'conventional：传统的。' },
      { id: 'conventional.q2', senseId: 'conventional.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conventional?', options: ['传统的', 'a kind of ancient coin', 'the past tense of be'], answer: '传统的', explain: '对的是「传统的」。' },
      { id: 'conventional.q3', senseId: 'conventional.s1', errorType: 'grammar', type: '词义选择', prompt: 'conventional 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conventional.q4', senseId: 'conventional.s1', errorType: 'meaning', type: '词源', prompt: '记 conventional 时，哪句更稳妥？', options: ['先锁住「传统的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「传统的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['传统的'] },
  });

  D('converge', {
    etymology: {
      origin: '现代英语常用词「converge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'converge', gloss: '汇聚' },
      suffix: null,
      history: [
        { label: 'converge', text: '现代英语常用词「converge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：汇聚。' },
      ],
      formationLogic: '核心义：汇聚。',
      mnemonic: '看到 converge，先说出「汇聚」。',
      note: '核心义：汇聚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to converge before the office closed.', chinese: '他们同意在办公室关门前做这件事：汇聚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'converge.s1', en: 'The deadline forced the team to converge that afternoon.', zh: '截止日期逼着小组在那天下午汇聚。', structure: 'converge / 表示 / 汇聚', grammar: 'verb，围绕「汇聚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She convergeed it yesterday without checking the real past form.', right: 'Check the past form of "converge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 converge 是verb，再套「汇聚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'converge.q1', senseId: 'converge.s1', errorType: 'meaning', type: '词义选择', prompt: '「converge」在本条的核心意思是：', options: ['汇聚', '完全相反的意思', '一种古代钱币'], answer: '汇聚', explain: 'converge：汇聚。' },
      { id: 'converge.q2', senseId: 'converge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches converge?', options: ['汇聚', 'a kind of ancient coin', 'the past tense of be'], answer: '汇聚', explain: '对的是「汇聚」。' },
      { id: 'converge.q3', senseId: 'converge.s1', errorType: 'grammar', type: '词义选择', prompt: 'converge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'converge.q4', senseId: 'converge.s1', errorType: 'meaning', type: '词源', prompt: '记 converge 时，哪句更稳妥？', options: ['先锁住「汇聚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「汇聚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['汇聚'] },
  });

  D('conversation', {
    etymology: {
      origin: '拉丁语 conversari「来往、交谈」。',
      prefix: null,
      root: { text: 'conversation', gloss: '交谈' },
      suffix: null,
      history: [
        { label: 'conversation', text: '拉丁语 conversari「来往、交谈」。' },
        { label: '现在', text: '核心用法是：交谈。' },
      ],
      formationLogic: '考试认现在的用法：交谈。',
      mnemonic: '看到 conversation，先说出「交谈」。',
      note: '考试认现在的用法：交谈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conversation.', chinese: '这一章反复回到同一个点：交谈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conversation.s1', en: 'Without that conversation, the next paragraph is hard to follow.', zh: '没有这个交谈，下一段会很难读。', structure: 'conversation / 表示 / 交谈', grammar: 'noun，围绕「交谈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conversation.', right: 'He gave me some advice about the conversation.', reason: 'advice 不可数。名词 conversation 的单复数按词典词形记。', rule: '先确定 conversation 是noun，再套「交谈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conversation.q1', senseId: 'conversation.s1', errorType: 'meaning', type: '词义选择', prompt: '「conversation」在本条的核心意思是：', options: ['交谈', '完全相反的意思', '一种古代钱币'], answer: '交谈', explain: 'conversation：交谈。' },
      { id: 'conversation.q2', senseId: 'conversation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conversation?', options: ['交谈', 'a kind of ancient coin', 'the past tense of be'], answer: '交谈', explain: '对的是「交谈」。' },
      { id: 'conversation.q3', senseId: 'conversation.s1', errorType: 'grammar', type: '词义选择', prompt: 'conversation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conversation.q4', senseId: 'conversation.s1', errorType: 'meaning', type: '词源', prompt: '记 conversation 时，哪句更稳妥？', options: ['先锁住「交谈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交谈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交谈'] },
  });

  D('converse', {
    etymology: {
      origin: '现代英语常用词「converse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'converse', gloss: '交谈' },
      suffix: null,
      history: [
        { label: 'converse', text: '现代英语常用词「converse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：交谈。' },
      ],
      formationLogic: '核心义：交谈。',
      mnemonic: '看到 converse，先说出「交谈」。',
      note: '核心义：交谈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to converse before the office closed.', chinese: '他们同意在办公室关门前做这件事：交谈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'converse.s1', en: 'The deadline forced the team to converse that afternoon.', zh: '截止日期逼着小组在那天下午交谈。', structure: 'converse / 表示 / 交谈', grammar: 'verb，围绕「交谈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She converseed it yesterday without checking the real past form.', right: 'Check the past form of "converse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 converse 是verb，再套「交谈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'converse.q1', senseId: 'converse.s1', errorType: 'meaning', type: '词义选择', prompt: '「converse」在本条的核心意思是：', options: ['交谈', '完全相反的意思', '一种古代钱币'], answer: '交谈', explain: 'converse：交谈。' },
      { id: 'converse.q2', senseId: 'converse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches converse?', options: ['交谈', 'a kind of ancient coin', 'the past tense of be'], answer: '交谈', explain: '对的是「交谈」。' },
      { id: 'converse.q3', senseId: 'converse.s1', errorType: 'grammar', type: '词义选择', prompt: 'converse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'converse.q4', senseId: 'converse.s1', errorType: 'meaning', type: '词源', prompt: '记 converse 时，哪句更稳妥？', options: ['先锁住「交谈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交谈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交谈'] },
  });

  D('convert', {
    etymology: {
      origin: '拉丁语 convertere「转过来」。',
      prefix: null,
      root: { text: 'convert', gloss: '转换' },
      suffix: null,
      history: [
        { label: 'convert', text: '拉丁语 convertere「转过来」。' },
        { label: '现在', text: '核心用法是：转换。' },
      ],
      formationLogic: '考试认现在的用法：转换。',
      mnemonic: '看到 convert，先说出「转换」。',
      note: '考试认现在的用法：转换。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to convert before the office closed.', chinese: '他们同意在办公室关门前做这件事：转换。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convert.s1', en: 'The deadline forced the team to convert that afternoon.', zh: '截止日期逼着小组在那天下午转换。', structure: 'convert / 表示 / 转换', grammar: 'verb，围绕「转换」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She converted it yesterday without checking the real past form.', right: 'Check the past form of "convert" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 convert 是verb，再套「转换」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convert.q1', senseId: 'convert.s1', errorType: 'meaning', type: '词义选择', prompt: '「convert」在本条的核心意思是：', options: ['转换', '完全相反的意思', '一种古代钱币'], answer: '转换', explain: 'convert：转换。' },
      { id: 'convert.q2', senseId: 'convert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convert?', options: ['转换', 'a kind of ancient coin', 'the past tense of be'], answer: '转换', explain: '对的是「转换」。' },
      { id: 'convert.q3', senseId: 'convert.s1', errorType: 'grammar', type: '词义选择', prompt: 'convert 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'convert.q4', senseId: 'convert.s1', errorType: 'meaning', type: '词源', prompt: '记 convert 时，哪句更稳妥？', options: ['先锁住「转换」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「转换」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['转换'] },
  });

  D('convey', {
    etymology: {
      origin: '现代英语常用词「convey」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'convey', gloss: '传达' },
      suffix: null,
      history: [
        { label: 'convey', text: '现代英语常用词「convey」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：传达。' },
      ],
      formationLogic: '核心义：传达。',
      mnemonic: '看到 convey，先说出「传达」。',
      note: '核心义：传达。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to convey before the office closed.', chinese: '他们同意在办公室关门前做这件事：传达。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convey.s1', en: 'The deadline forced the team to convey that afternoon.', zh: '截止日期逼着小组在那天下午传达。', structure: 'convey / 表示 / 传达', grammar: 'verb，围绕「传达」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conveyed it yesterday without checking the real past form.', right: 'Check the past form of "convey" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 convey 是verb，再套「传达」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convey.q1', senseId: 'convey.s1', errorType: 'meaning', type: '词义选择', prompt: '「convey」在本条的核心意思是：', options: ['传达', '完全相反的意思', '一种古代钱币'], answer: '传达', explain: 'convey：传达。' },
      { id: 'convey.q2', senseId: 'convey.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convey?', options: ['传达', 'a kind of ancient coin', 'the past tense of be'], answer: '传达', explain: '对的是「传达」。' },
      { id: 'convey.q3', senseId: 'convey.s1', errorType: 'grammar', type: '词义选择', prompt: 'convey 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'convey.q4', senseId: 'convey.s1', errorType: 'meaning', type: '词源', prompt: '记 convey 时，哪句更稳妥？', options: ['先锁住「传达」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「传达」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['传达'] },
  });

  D('convict', {
    etymology: {
      origin: '现代英语常用词「convict」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'convict', gloss: '判决有罪' },
      suffix: null,
      history: [
        { label: 'convict', text: '现代英语常用词「convict」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：判决有罪。' },
      ],
      formationLogic: '核心义：判决有罪。',
      mnemonic: '看到 convict，先说出「判决有罪」。',
      note: '核心义：判决有罪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to convict before the office closed.', chinese: '他们同意在办公室关门前做这件事：判决有罪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convict.s1', en: 'The deadline forced the team to convict that afternoon.', zh: '截止日期逼着小组在那天下午判决有罪。', structure: 'convict / 表示 / 判决有罪', grammar: 'verb，围绕「判决有罪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She convicted it yesterday without checking the real past form.', right: 'Check the past form of "convict" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 convict 是verb，再套「判决有罪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convict.q1', senseId: 'convict.s1', errorType: 'meaning', type: '词义选择', prompt: '「convict」在本条的核心意思是：', options: ['判决有罪', '完全相反的意思', '一种古代钱币'], answer: '判决有罪', explain: 'convict：判决有罪。' },
      { id: 'convict.q2', senseId: 'convict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convict?', options: ['判决有罪', 'a kind of ancient coin', 'the past tense of be'], answer: '判决有罪', explain: '对的是「判决有罪」。' },
      { id: 'convict.q3', senseId: 'convict.s1', errorType: 'grammar', type: '词义选择', prompt: 'convict 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'convict.q4', senseId: 'convict.s1', errorType: 'meaning', type: '词源', prompt: '记 convict 时，哪句更稳妥？', options: ['先锁住「判决有罪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「判决有罪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['判决有罪'] },
  });

  D('conviction', {
    etymology: {
      origin: '英语派生：convic + -tion，词性转到「定罪」。',
      prefix: null,
      root: { text: 'convic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conviction', text: '英语派生：convic + -tion，词性转到「定罪」。' },
        { label: '现在', text: '核心用法是：定罪。' },
      ],
      formationLogic: '先认词干 convic，再看词尾。',
      mnemonic: '看到 conviction，先说出「定罪」。',
      note: '先认词干 convic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conviction.', chinese: '这一章反复回到同一个点：定罪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conviction.s1', en: 'Without that conviction, the next paragraph is hard to follow.', zh: '没有这个定罪，下一段会很难读。', structure: 'conviction / 表示 / 定罪', grammar: 'noun，围绕「定罪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conviction.', right: 'He gave me some advice about the conviction.', reason: 'advice 不可数。名词 conviction 的单复数按词典词形记。', rule: '先确定 conviction 是noun，再套「定罪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conviction.q1', senseId: 'conviction.s1', errorType: 'meaning', type: '词义选择', prompt: '「conviction」在本条的核心意思是：', options: ['定罪', '完全相反的意思', '一种古代钱币'], answer: '定罪', explain: 'conviction：定罪。' },
      { id: 'conviction.q2', senseId: 'conviction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conviction?', options: ['定罪', 'a kind of ancient coin', 'the past tense of be'], answer: '定罪', explain: '对的是「定罪」。' },
      { id: 'conviction.q3', senseId: 'conviction.s1', errorType: 'grammar', type: '词义选择', prompt: 'conviction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conviction.q4', senseId: 'conviction.s1', errorType: 'meaning', type: '词源', prompt: '记 conviction 时，哪句更稳妥？', options: ['先锁住「定罪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「定罪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['定罪'] },
  });

  D('convince', {
    etymology: {
      origin: '拉丁语 convincere「完全战胜」。用道理战胜对方。',
      prefix: null,
      root: { text: 'convince', gloss: '使确信' },
      suffix: null,
      history: [
        { label: 'convince', text: '拉丁语 convincere「完全战胜」。用道理战胜对方。' },
        { label: '现在', text: '核心用法是：使确信。' },
      ],
      formationLogic: '考试认现在的用法：使确信。',
      mnemonic: '看到 convince，先说出「使确信」。',
      note: '考试认现在的用法：使确信。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to convince before the office closed.', chinese: '他们同意在办公室关门前做这件事：使确信。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convince.s1', en: 'The deadline forced the team to convince that afternoon.', zh: '截止日期逼着小组在那天下午使确信。', structure: 'convince / 表示 / 使确信', grammar: 'verb，围绕「使确信」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She convinceed it yesterday without checking the real past form.', right: 'Check the past form of "convince" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 convince 是verb，再套「使确信」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convince.q1', senseId: 'convince.s1', errorType: 'meaning', type: '词义选择', prompt: '「convince」在本条的核心意思是：', options: ['使确信', '完全相反的意思', '一种古代钱币'], answer: '使确信', explain: 'convince：使确信。' },
      { id: 'convince.q2', senseId: 'convince.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convince?', options: ['使确信', 'a kind of ancient coin', 'the past tense of be'], answer: '使确信', explain: '对的是「使确信」。' },
      { id: 'convince.q3', senseId: 'convince.s1', errorType: 'grammar', type: '词义选择', prompt: 'convince 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'convince.q4', senseId: 'convince.s1', errorType: 'meaning', type: '词源', prompt: '记 convince 时，哪句更稳妥？', options: ['先锁住「使确信」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使确信」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使确信'] },
  });

  D('convoy', {
    etymology: {
      origin: '现代英语常用词「convoy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'convoy', gloss: '护送队' },
      suffix: null,
      history: [
        { label: 'convoy', text: '现代英语常用词「convoy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：护送队。' },
      ],
      formationLogic: '核心义：护送队。',
      mnemonic: '看到 convoy，先说出「护送队」。',
      note: '核心义：护送队。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one convoy.', chinese: '这一章反复回到同一个点：护送队。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'convoy.s1', en: 'Without that convoy, the next paragraph is hard to follow.', zh: '没有这个护送队，下一段会很难读。', structure: 'convoy / 表示 / 护送队', grammar: 'noun，围绕「护送队」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the convoy.', right: 'He gave me some advice about the convoy.', reason: 'advice 不可数。名词 convoy 的单复数按词典词形记。', rule: '先确定 convoy 是noun，再套「护送队」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'convoy.q1', senseId: 'convoy.s1', errorType: 'meaning', type: '词义选择', prompt: '「convoy」在本条的核心意思是：', options: ['护送队', '完全相反的意思', '一种古代钱币'], answer: '护送队', explain: 'convoy：护送队。' },
      { id: 'convoy.q2', senseId: 'convoy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches convoy?', options: ['护送队', 'a kind of ancient coin', 'the past tense of be'], answer: '护送队', explain: '对的是「护送队」。' },
      { id: 'convoy.q3', senseId: 'convoy.s1', errorType: 'grammar', type: '词义选择', prompt: 'convoy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'convoy.q4', senseId: 'convoy.s1', errorType: 'meaning', type: '词源', prompt: '记 convoy 时，哪句更稳妥？', options: ['先锁住「护送队」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「护送队」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['护送队'] },
  });

  D('cook', {
    etymology: {
      origin: '拉丁语 coquere。',
      prefix: null,
      root: { text: 'cook', gloss: '烹调' },
      suffix: null,
      history: [
        { label: 'cook', text: '拉丁语 coquere。' },
        { label: '现在', text: '核心用法是：烹调。' },
      ],
      formationLogic: '考试认现在的用法：烹调。',
      mnemonic: '看到 cook，先说出「烹调」。',
      note: '考试认现在的用法：烹调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cook before the office closed.', chinese: '他们同意在办公室关门前做这件事：烹调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cook.s1', en: 'The deadline forced the team to cook that afternoon.', zh: '截止日期逼着小组在那天下午烹调。', structure: 'cook / 表示 / 烹调', grammar: 'verb，围绕「烹调」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cooked it yesterday without checking the real past form.', right: 'Check the past form of "cook" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cook 是verb，再套「烹调」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cook.q1', senseId: 'cook.s1', errorType: 'meaning', type: '词义选择', prompt: '「cook」在本条的核心意思是：', options: ['烹调', '完全相反的意思', '一种古代钱币'], answer: '烹调', explain: 'cook：烹调。' },
      { id: 'cook.q2', senseId: 'cook.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cook?', options: ['烹调', 'a kind of ancient coin', 'the past tense of be'], answer: '烹调', explain: '对的是「烹调」。' },
      { id: 'cook.q3', senseId: 'cook.s1', errorType: 'grammar', type: '词义选择', prompt: 'cook 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cook.q4', senseId: 'cook.s1', errorType: 'meaning', type: '词源', prompt: '记 cook 时，哪句更稳妥？', options: ['先锁住「烹调」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烹调」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烹调'] },
  });

  D('cooker', {
    etymology: {
      origin: '英语派生：cook + -er，词性转到「炉灶」。',
      prefix: null,
      root: { text: 'cook', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cooker', text: '英语派生：cook + -er，词性转到「炉灶」。' },
        { label: '现在', text: '核心用法是：炉灶。' },
      ],
      formationLogic: '先认词干 cook，再看词尾。',
      mnemonic: '看到 cooker，先说出「炉灶」。',
      note: '先认词干 cook，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cooker.', chinese: '这一章反复回到同一个点：炉灶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cooker.s1', en: 'Without that cooker, the next paragraph is hard to follow.', zh: '没有这个炉灶，下一段会很难读。', structure: 'cooker / 表示 / 炉灶', grammar: 'noun，围绕「炉灶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cooker.', right: 'He gave me some advice about the cooker.', reason: 'advice 不可数。名词 cooker 的单复数按词典词形记。', rule: '先确定 cooker 是noun，再套「炉灶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cooker.q1', senseId: 'cooker.s1', errorType: 'meaning', type: '词义选择', prompt: '「cooker」在本条的核心意思是：', options: ['炉灶', '完全相反的意思', '一种古代钱币'], answer: '炉灶', explain: 'cooker：炉灶。' },
      { id: 'cooker.q2', senseId: 'cooker.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cooker?', options: ['炉灶', 'a kind of ancient coin', 'the past tense of be'], answer: '炉灶', explain: '对的是「炉灶」。' },
      { id: 'cooker.q3', senseId: 'cooker.s1', errorType: 'grammar', type: '词义选择', prompt: 'cooker 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cooker.q4', senseId: 'cooker.s1', errorType: 'meaning', type: '词源', prompt: '记 cooker 时，哪句更稳妥？', options: ['先锁住「炉灶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「炉灶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['炉灶'] },
  });

  D('cookhouse', {
    etymology: {
      origin: '现代英语常用词「cookhouse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cookhouse', gloss: '厨房' },
      suffix: null,
      history: [
        { label: 'cookhouse', text: '现代英语常用词「cookhouse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：厨房。' },
      ],
      formationLogic: '核心义：厨房。',
      mnemonic: '看到 cookhouse，先说出「厨房」。',
      note: '核心义：厨房。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cookhouse.', chinese: '这一章反复回到同一个点：厨房。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cookhouse.s1', en: 'Without that cookhouse, the next paragraph is hard to follow.', zh: '没有这个厨房，下一段会很难读。', structure: 'cookhouse / 表示 / 厨房', grammar: 'noun，围绕「厨房」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cookhouse.', right: 'He gave me some advice about the cookhouse.', reason: 'advice 不可数。名词 cookhouse 的单复数按词典词形记。', rule: '先确定 cookhouse 是noun，再套「厨房」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cookhouse.q1', senseId: 'cookhouse.s1', errorType: 'meaning', type: '词义选择', prompt: '「cookhouse」在本条的核心意思是：', options: ['厨房', '完全相反的意思', '一种古代钱币'], answer: '厨房', explain: 'cookhouse：厨房。' },
      { id: 'cookhouse.q2', senseId: 'cookhouse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cookhouse?', options: ['厨房', 'a kind of ancient coin', 'the past tense of be'], answer: '厨房', explain: '对的是「厨房」。' },
      { id: 'cookhouse.q3', senseId: 'cookhouse.s1', errorType: 'grammar', type: '词义选择', prompt: 'cookhouse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cookhouse.q4', senseId: 'cookhouse.s1', errorType: 'meaning', type: '词源', prompt: '记 cookhouse 时，哪句更稳妥？', options: ['先锁住「厨房」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厨房」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厨房'] },
  });

  D('cookie', {
    etymology: {
      origin: '荷兰语 koekje「小蛋糕」。',
      prefix: null,
      root: { text: 'cookie', gloss: '曲奇饼干' },
      suffix: null,
      history: [
        { label: 'cookie', text: '荷兰语 koekje「小蛋糕」。' },
        { label: '现在', text: '核心用法是：曲奇饼干。' },
      ],
      formationLogic: '考试认现在的用法：曲奇饼干。',
      mnemonic: '看到 cookie，先说出「曲奇饼干」。',
      note: '考试认现在的用法：曲奇饼干。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cookie.', chinese: '这一章反复回到同一个点：曲奇饼干。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cookie.s1', en: 'Without that cookie, the next paragraph is hard to follow.', zh: '没有这个曲奇饼干，下一段会很难读。', structure: 'cookie / 表示 / 曲奇饼干', grammar: 'noun，围绕「曲奇饼干」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cookie.', right: 'He gave me some advice about the cookie.', reason: 'advice 不可数。名词 cookie 的单复数按词典词形记。', rule: '先确定 cookie 是noun，再套「曲奇饼干」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cookie.q1', senseId: 'cookie.s1', errorType: 'meaning', type: '词义选择', prompt: '「cookie」在本条的核心意思是：', options: ['曲奇饼干', '完全相反的意思', '一种古代钱币'], answer: '曲奇饼干', explain: 'cookie：曲奇饼干。' },
      { id: 'cookie.q2', senseId: 'cookie.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cookie?', options: ['曲奇饼干', 'a kind of ancient coin', 'the past tense of be'], answer: '曲奇饼干', explain: '对的是「曲奇饼干」。' },
      { id: 'cookie.q3', senseId: 'cookie.s1', errorType: 'grammar', type: '词义选择', prompt: 'cookie 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cookie.q4', senseId: 'cookie.s1', errorType: 'meaning', type: '词源', prompt: '记 cookie 时，哪句更稳妥？', options: ['先锁住「曲奇饼干」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「曲奇饼干」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['曲奇饼干'] },
  });

  D('cooking', {
    etymology: {
      origin: '英语派生：cook + -ing，词性转到「烹饪」。',
      prefix: null,
      root: { text: 'cook', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cooking', text: '英语派生：cook + -ing，词性转到「烹饪」。' },
        { label: '现在', text: '核心用法是：烹饪。' },
      ],
      formationLogic: '先认词干 cook，再看词尾。',
      mnemonic: '看到 cooking，先说出「烹饪」。',
      note: '先认词干 cook，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cooking.', chinese: '这一章反复回到同一个点：烹饪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cooking.s1', en: 'Without that cooking, the next paragraph is hard to follow.', zh: '没有这个烹饪，下一段会很难读。', structure: 'cooking / 表示 / 烹饪', grammar: 'noun，围绕「烹饪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cooking.', right: 'He gave me some advice about the cooking.', reason: 'advice 不可数。名词 cooking 的单复数按词典词形记。', rule: '先确定 cooking 是noun，再套「烹饪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cooking.q1', senseId: 'cooking.s1', errorType: 'meaning', type: '词义选择', prompt: '「cooking」在本条的核心意思是：', options: ['烹饪', '完全相反的意思', '一种古代钱币'], answer: '烹饪', explain: 'cooking：烹饪。' },
      { id: 'cooking.q2', senseId: 'cooking.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cooking?', options: ['烹饪', 'a kind of ancient coin', 'the past tense of be'], answer: '烹饪', explain: '对的是「烹饪」。' },
      { id: 'cooking.q3', senseId: 'cooking.s1', errorType: 'grammar', type: '词义选择', prompt: 'cooking 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cooking.q4', senseId: 'cooking.s1', errorType: 'meaning', type: '词源', prompt: '记 cooking 时，哪句更稳妥？', options: ['先锁住「烹饪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烹饪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烹饪'] },
  });

  D('cooks', {
    etymology: {
      origin: '现代英语常用词「cooks」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cooks', gloss: '厨师' },
      suffix: null,
      history: [
        { label: 'cooks', text: '现代英语常用词「cooks」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：厨师。' },
      ],
      formationLogic: '核心义：厨师。',
      mnemonic: '看到 cooks，先说出「厨师」。',
      note: '核心义：厨师。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cooks.', chinese: '这一章反复回到同一个点：厨师。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cooks.s1', en: 'Without that cooks, the next paragraph is hard to follow.', zh: '没有这个厨师，下一段会很难读。', structure: 'cooks / 表示 / 厨师', grammar: 'noun，围绕「厨师」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cooks.', right: 'He gave me some advice about the cooks.', reason: 'advice 不可数。名词 cooks 的单复数按词典词形记。', rule: '先确定 cooks 是noun，再套「厨师」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cooks.q1', senseId: 'cooks.s1', errorType: 'meaning', type: '词义选择', prompt: '「cooks」在本条的核心意思是：', options: ['厨师', '完全相反的意思', '一种古代钱币'], answer: '厨师', explain: 'cooks：厨师。' },
      { id: 'cooks.q2', senseId: 'cooks.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cooks?', options: ['厨师', 'a kind of ancient coin', 'the past tense of be'], answer: '厨师', explain: '对的是「厨师」。' },
      { id: 'cooks.q3', senseId: 'cooks.s1', errorType: 'grammar', type: '词义选择', prompt: 'cooks 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cooks.q4', senseId: 'cooks.s1', errorType: 'meaning', type: '词源', prompt: '记 cooks 时，哪句更稳妥？', options: ['先锁住「厨师」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厨师」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厨师'] },
  });

  D('cool', {
    etymology: {
      origin: '古英语 col。',
      prefix: null,
      root: { text: 'cool', gloss: '凉爽的' },
      suffix: null,
      history: [
        { label: 'cool', text: '古英语 col。' },
        { label: '现在', text: '核心用法是：凉爽的。' },
      ],
      formationLogic: '考试认现在的用法：凉爽的。',
      mnemonic: '看到 cool，先说出「凉爽的」。',
      note: '考试认现在的用法：凉爽的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cool.', chinese: '即使是初读者也能看出，这个结果是凉爽的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cool.s1', en: 'They wanted a cool answer, not a long speech.', zh: '他们要一个凉爽的的答复，不要长篇发言。', structure: 'cool / 表示 / 凉爽的', grammar: 'adjective，围绕「凉爽的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cool.', right: 'The news is cool.', reason: 'news 作主语时动词用单数。', rule: '先确定 cool 是adjective，再套「凉爽的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cool.q1', senseId: 'cool.s1', errorType: 'meaning', type: '词义选择', prompt: '「cool」在本条的核心意思是：', options: ['凉爽的', '完全相反的意思', '一种古代钱币'], answer: '凉爽的', explain: 'cool：凉爽的。' },
      { id: 'cool.q2', senseId: 'cool.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cool?', options: ['凉爽的', 'a kind of ancient coin', 'the past tense of be'], answer: '凉爽的', explain: '对的是「凉爽的」。' },
      { id: 'cool.q3', senseId: 'cool.s1', errorType: 'grammar', type: '词义选择', prompt: 'cool 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cool.q4', senseId: 'cool.s1', errorType: 'meaning', type: '词源', prompt: '记 cool 时，哪句更稳妥？', options: ['先锁住「凉爽的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凉爽的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凉爽的'] },
  });

  D('cooler', {
    etymology: {
      origin: '英语派生：cool + -er，词性转到「冷藏箱」。',
      prefix: null,
      root: { text: 'cool', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cooler', text: '英语派生：cool + -er，词性转到「冷藏箱」。' },
        { label: '现在', text: '核心用法是：冷藏箱。' },
      ],
      formationLogic: '先认词干 cool，再看词尾。',
      mnemonic: '看到 cooler，先说出「冷藏箱」。',
      note: '先认词干 cool，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cooler.', chinese: '这一章反复回到同一个点：冷藏箱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cooler.s1', en: 'Without that cooler, the next paragraph is hard to follow.', zh: '没有这个冷藏箱，下一段会很难读。', structure: 'cooler / 表示 / 冷藏箱', grammar: 'noun，围绕「冷藏箱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cooler.', right: 'He gave me some advice about the cooler.', reason: 'advice 不可数。名词 cooler 的单复数按词典词形记。', rule: '先确定 cooler 是noun，再套「冷藏箱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cooler.q1', senseId: 'cooler.s1', errorType: 'meaning', type: '词义选择', prompt: '「cooler」在本条的核心意思是：', options: ['冷藏箱', '完全相反的意思', '一种古代钱币'], answer: '冷藏箱', explain: 'cooler：冷藏箱。' },
      { id: 'cooler.q2', senseId: 'cooler.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cooler?', options: ['冷藏箱', 'a kind of ancient coin', 'the past tense of be'], answer: '冷藏箱', explain: '对的是「冷藏箱」。' },
      { id: 'cooler.q3', senseId: 'cooler.s1', errorType: 'grammar', type: '词义选择', prompt: 'cooler 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cooler.q4', senseId: 'cooler.s1', errorType: 'meaning', type: '词源', prompt: '记 cooler 时，哪句更稳妥？', options: ['先锁住「冷藏箱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冷藏箱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冷藏箱'] },
  });

  D('cooperate', {
    etymology: {
      origin: '拉丁语 co-「一起」+ operari「工作」。',
      prefix: null,
      root: { text: 'cooperate', gloss: '合作' },
      suffix: null,
      history: [
        { label: 'cooperate', text: '拉丁语 co-「一起」+ operari「工作」。' },
        { label: '现在', text: '核心用法是：合作。' },
      ],
      formationLogic: '考试认现在的用法：合作。',
      mnemonic: '看到 cooperate，先说出「合作」。',
      note: '考试认现在的用法：合作。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cooperate before the office closed.', chinese: '他们同意在办公室关门前做这件事：合作。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cooperate.s1', en: 'The deadline forced the team to cooperate that afternoon.', zh: '截止日期逼着小组在那天下午合作。', structure: 'cooperate / 表示 / 合作', grammar: 'verb，围绕「合作」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cooperateed it yesterday without checking the real past form.', right: 'Check the past form of "cooperate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cooperate 是verb，再套「合作」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cooperate.q1', senseId: 'cooperate.s1', errorType: 'meaning', type: '词义选择', prompt: '「cooperate」在本条的核心意思是：', options: ['合作', '完全相反的意思', '一种古代钱币'], answer: '合作', explain: 'cooperate：合作。' },
      { id: 'cooperate.q2', senseId: 'cooperate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cooperate?', options: ['合作', 'a kind of ancient coin', 'the past tense of be'], answer: '合作', explain: '对的是「合作」。' },
      { id: 'cooperate.q3', senseId: 'cooperate.s1', errorType: 'grammar', type: '词义选择', prompt: 'cooperate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cooperate.q4', senseId: 'cooperate.s1', errorType: 'meaning', type: '词源', prompt: '记 cooperate 时，哪句更稳妥？', options: ['先锁住「合作」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合作」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合作'] },
  });

  D('coordinate', {
    etymology: {
      origin: '现代英语常用词「coordinate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coordinate', gloss: '协调' },
      suffix: null,
      history: [
        { label: 'coordinate', text: '现代英语常用词「coordinate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：协调。' },
      ],
      formationLogic: '核心义：协调。',
      mnemonic: '看到 coordinate，先说出「协调」。',
      note: '核心义：协调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to coordinate before the office closed.', chinese: '他们同意在办公室关门前做这件事：协调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coordinate.s1', en: 'The deadline forced the team to coordinate that afternoon.', zh: '截止日期逼着小组在那天下午协调。', structure: 'coordinate / 表示 / 协调', grammar: 'verb，围绕「协调」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She coordinateed it yesterday without checking the real past form.', right: 'Check the past form of "coordinate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 coordinate 是verb，再套「协调」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coordinate.q1', senseId: 'coordinate.s1', errorType: 'meaning', type: '词义选择', prompt: '「coordinate」在本条的核心意思是：', options: ['协调', '完全相反的意思', '一种古代钱币'], answer: '协调', explain: 'coordinate：协调。' },
      { id: 'coordinate.q2', senseId: 'coordinate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coordinate?', options: ['协调', 'a kind of ancient coin', 'the past tense of be'], answer: '协调', explain: '对的是「协调」。' },
      { id: 'coordinate.q3', senseId: 'coordinate.s1', errorType: 'grammar', type: '词义选择', prompt: 'coordinate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'coordinate.q4', senseId: 'coordinate.s1', errorType: 'meaning', type: '词源', prompt: '记 coordinate 时，哪句更稳妥？', options: ['先锁住「协调」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「协调」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['协调'] },
  });

  D('coordinates', {
    etymology: {
      origin: '现代英语常用词「coordinates」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coordinates', gloss: '坐标' },
      suffix: null,
      history: [
        { label: 'coordinates', text: '现代英语常用词「coordinates」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：坐标。' },
      ],
      formationLogic: '核心义：坐标。',
      mnemonic: '看到 coordinates，先说出「坐标」。',
      note: '核心义：坐标。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coordinates.', chinese: '这一章反复回到同一个点：坐标。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coordinates.s1', en: 'Without that coordinates, the next paragraph is hard to follow.', zh: '没有这个坐标，下一段会很难读。', structure: 'coordinates / 表示 / 坐标', grammar: 'noun，围绕「坐标」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coordinates.', right: 'He gave me some advice about the coordinates.', reason: 'advice 不可数。名词 coordinates 的单复数按词典词形记。', rule: '先确定 coordinates 是noun，再套「坐标」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coordinates.q1', senseId: 'coordinates.s1', errorType: 'meaning', type: '词义选择', prompt: '「coordinates」在本条的核心意思是：', options: ['坐标', '完全相反的意思', '一种古代钱币'], answer: '坐标', explain: 'coordinates：坐标。' },
      { id: 'coordinates.q2', senseId: 'coordinates.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coordinates?', options: ['坐标', 'a kind of ancient coin', 'the past tense of be'], answer: '坐标', explain: '对的是「坐标」。' },
      { id: 'coordinates.q3', senseId: 'coordinates.s1', errorType: 'grammar', type: '词义选择', prompt: 'coordinates 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coordinates.q4', senseId: 'coordinates.s1', errorType: 'meaning', type: '词源', prompt: '记 coordinates 时，哪句更稳妥？', options: ['先锁住「坐标」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「坐标」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['坐标'] },
  });

  D('cop', {
    etymology: {
      origin: '现代英语常用词「cop」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cop', gloss: '警察' },
      suffix: null,
      history: [
        { label: 'cop', text: '现代英语常用词「cop」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：警察。' },
      ],
      formationLogic: '核心义：警察。',
      mnemonic: '看到 cop，先说出「警察」。',
      note: '核心义：警察。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cop.', chinese: '这一章反复回到同一个点：警察。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cop.s1', en: 'Without that cop, the next paragraph is hard to follow.', zh: '没有这个警察，下一段会很难读。', structure: 'cop / 表示 / 警察', grammar: 'noun，围绕「警察」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cop.', right: 'He gave me some advice about the cop.', reason: 'advice 不可数。名词 cop 的单复数按词典词形记。', rule: '先确定 cop 是noun，再套「警察」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cop.q1', senseId: 'cop.s1', errorType: 'meaning', type: '词义选择', prompt: '「cop」在本条的核心意思是：', options: ['警察', '完全相反的意思', '一种古代钱币'], answer: '警察', explain: 'cop：警察。' },
      { id: 'cop.q2', senseId: 'cop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cop?', options: ['警察', 'a kind of ancient coin', 'the past tense of be'], answer: '警察', explain: '对的是「警察」。' },
      { id: 'cop.q3', senseId: 'cop.s1', errorType: 'grammar', type: '词义选择', prompt: 'cop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cop.q4', senseId: 'cop.s1', errorType: 'meaning', type: '词源', prompt: '记 cop 时，哪句更稳妥？', options: ['先锁住「警察」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「警察」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['警察'] },
  });

  D('cope', {
    etymology: {
      origin: '古法语 couper「打、应付」。',
      prefix: null,
      root: { text: 'cope', gloss: '应对' },
      suffix: null,
      history: [
        { label: 'cope', text: '古法语 couper「打、应付」。' },
        { label: '现在', text: '核心用法是：应对。' },
      ],
      formationLogic: '考试认现在的用法：应对。',
      mnemonic: '看到 cope，先说出「应对」。',
      note: '考试认现在的用法：应对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cope before the office closed.', chinese: '他们同意在办公室关门前做这件事：应对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cope.s1', en: 'The deadline forced the team to cope that afternoon.', zh: '截止日期逼着小组在那天下午应对。', structure: 'cope / 表示 / 应对', grammar: 'verb，围绕「应对」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She copeed it yesterday without checking the real past form.', right: 'Check the past form of "cope" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cope 是verb，再套「应对」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cope.q1', senseId: 'cope.s1', errorType: 'meaning', type: '词义选择', prompt: '「cope」在本条的核心意思是：', options: ['应对', '完全相反的意思', '一种古代钱币'], answer: '应对', explain: 'cope：应对。' },
      { id: 'cope.q2', senseId: 'cope.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cope?', options: ['应对', 'a kind of ancient coin', 'the past tense of be'], answer: '应对', explain: '对的是「应对」。' },
      { id: 'cope.q3', senseId: 'cope.s1', errorType: 'grammar', type: '词义选择', prompt: 'cope 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cope.q4', senseId: 'cope.s1', errorType: 'meaning', type: '词源', prompt: '记 cope 时，哪句更稳妥？', options: ['先锁住「应对」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「应对」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['应对'] },
  });

  D('copper', {
    etymology: {
      origin: '拉丁语 Cyprium「塞浦路斯的金属」。铜从塞浦路斯来。',
      prefix: null,
      root: { text: 'copper', gloss: '铜' },
      suffix: null,
      history: [
        { label: 'copper', text: '拉丁语 Cyprium「塞浦路斯的金属」。铜从塞浦路斯来。' },
        { label: '现在', text: '核心用法是：铜。' },
      ],
      formationLogic: '考试认现在的用法：铜。',
      mnemonic: '看到 copper，先说出「铜」。',
      note: '考试认现在的用法：铜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one copper.', chinese: '这一章反复回到同一个点：铜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'copper.s1', en: 'Without that copper, the next paragraph is hard to follow.', zh: '没有这个铜，下一段会很难读。', structure: 'copper / 表示 / 铜', grammar: 'noun，围绕「铜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the copper.', right: 'He gave me some advice about the copper.', reason: 'advice 不可数。名词 copper 的单复数按词典词形记。', rule: '先确定 copper 是noun，再套「铜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'copper.q1', senseId: 'copper.s1', errorType: 'meaning', type: '词义选择', prompt: '「copper」在本条的核心意思是：', options: ['铜', '完全相反的意思', '一种古代钱币'], answer: '铜', explain: 'copper：铜。' },
      { id: 'copper.q2', senseId: 'copper.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches copper?', options: ['铜', 'a kind of ancient coin', 'the past tense of be'], answer: '铜', explain: '对的是「铜」。' },
      { id: 'copper.q3', senseId: 'copper.s1', errorType: 'grammar', type: '词义选择', prompt: 'copper 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'copper.q4', senseId: 'copper.s1', errorType: 'meaning', type: '词源', prompt: '记 copper 时，哪句更稳妥？', options: ['先锁住「铜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「铜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['铜'] },
  });

  D('copy', {
    etymology: {
      origin: '拉丁语 copia「丰富、复制本」。',
      prefix: null,
      root: { text: 'copy', gloss: '复制品' },
      suffix: null,
      history: [
        { label: 'copy', text: '拉丁语 copia「丰富、复制本」。' },
        { label: '现在', text: '核心用法是：复制品。' },
      ],
      formationLogic: '考试认现在的用法：复制品。',
      mnemonic: '看到 copy，先说出「复制品」。',
      note: '考试认现在的用法：复制品。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one copy.', chinese: '这一章反复回到同一个点：复制品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'copy.s1', en: 'Without that copy, the next paragraph is hard to follow.', zh: '没有这个复制品，下一段会很难读。', structure: 'copy / 表示 / 复制品', grammar: 'noun，围绕「复制品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the copy.', right: 'He gave me some advice about the copy.', reason: 'advice 不可数。名词 copy 的单复数按词典词形记。', rule: '先确定 copy 是noun，再套「复制品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'copy.q1', senseId: 'copy.s1', errorType: 'meaning', type: '词义选择', prompt: '「copy」在本条的核心意思是：', options: ['复制品', '完全相反的意思', '一种古代钱币'], answer: '复制品', explain: 'copy：复制品。' },
      { id: 'copy.q2', senseId: 'copy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches copy?', options: ['复制品', 'a kind of ancient coin', 'the past tense of be'], answer: '复制品', explain: '对的是「复制品」。' },
      { id: 'copy.q3', senseId: 'copy.s1', errorType: 'grammar', type: '词义选择', prompt: 'copy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'copy.q4', senseId: 'copy.s1', errorType: 'meaning', type: '词源', prompt: '记 copy 时，哪句更稳妥？', options: ['先锁住「复制品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复制品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复制品'] },
  });

  D('copy-edit', {
    etymology: {
      origin: '现代英语常用词「copy-edit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'copy-edit', gloss: '校对' },
      suffix: null,
      history: [
        { label: 'copy-edit', text: '现代英语常用词「copy-edit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：校对。' },
      ],
      formationLogic: '核心义：校对。',
      mnemonic: '看到 copy-edit，先说出「校对」。',
      note: '核心义：校对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to copy-edit before the office closed.', chinese: '他们同意在办公室关门前做这件事：校对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'copy-edit.s1', en: 'The deadline forced the team to copy-edit that afternoon.', zh: '截止日期逼着小组在那天下午校对。', structure: 'copy-edit / 表示 / 校对', grammar: 'verb，围绕「校对」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She copy-edited it yesterday without checking the real past form.', right: 'Check the past form of "copy-edit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 copy-edit 是verb，再套「校对」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'copy-edit.q1', senseId: 'copy-edit.s1', errorType: 'meaning', type: '词义选择', prompt: '「copy-edit」在本条的核心意思是：', options: ['校对', '完全相反的意思', '一种古代钱币'], answer: '校对', explain: 'copy-edit：校对。' },
      { id: 'copy-edit.q2', senseId: 'copy-edit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches copy-edit?', options: ['校对', 'a kind of ancient coin', 'the past tense of be'], answer: '校对', explain: '对的是「校对」。' },
      { id: 'copy-edit.q3', senseId: 'copy-edit.s1', errorType: 'grammar', type: '词义选择', prompt: 'copy-edit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'copy-edit.q4', senseId: 'copy-edit.s1', errorType: 'meaning', type: '词源', prompt: '记 copy-edit 时，哪句更稳妥？', options: ['先锁住「校对」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「校对」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['校对'] },
  });

  D('copyright', {
    etymology: {
      origin: '现代英语常用词「copyright」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'copyright', gloss: '版权' },
      suffix: null,
      history: [
        { label: 'copyright', text: '现代英语常用词「copyright」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：版权。' },
      ],
      formationLogic: '核心义：版权。',
      mnemonic: '看到 copyright，先说出「版权」。',
      note: '核心义：版权。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one copyright.', chinese: '这一章反复回到同一个点：版权。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'copyright.s1', en: 'Without that copyright, the next paragraph is hard to follow.', zh: '没有这个版权，下一段会很难读。', structure: 'copyright / 表示 / 版权', grammar: 'noun，围绕「版权」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the copyright.', right: 'He gave me some advice about the copyright.', reason: 'advice 不可数。名词 copyright 的单复数按词典词形记。', rule: '先确定 copyright 是noun，再套「版权」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'copyright.q1', senseId: 'copyright.s1', errorType: 'meaning', type: '词义选择', prompt: '「copyright」在本条的核心意思是：', options: ['版权', '完全相反的意思', '一种古代钱币'], answer: '版权', explain: 'copyright：版权。' },
      { id: 'copyright.q2', senseId: 'copyright.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches copyright?', options: ['版权', 'a kind of ancient coin', 'the past tense of be'], answer: '版权', explain: '对的是「版权」。' },
      { id: 'copyright.q3', senseId: 'copyright.s1', errorType: 'grammar', type: '词义选择', prompt: 'copyright 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'copyright.q4', senseId: 'copyright.s1', errorType: 'meaning', type: '词源', prompt: '记 copyright 时，哪句更稳妥？', options: ['先锁住「版权」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「版权」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['版权'] },
  });

  D('coral', {
    etymology: {
      origin: '英语派生：cor + -al，词性转到「珊瑚」。',
      prefix: null,
      root: { text: 'cor', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coral', text: '英语派生：cor + -al，词性转到「珊瑚」。' },
        { label: '现在', text: '核心用法是：珊瑚。' },
      ],
      formationLogic: '先认词干 cor，再看词尾。',
      mnemonic: '看到 coral，先说出「珊瑚」。',
      note: '先认词干 cor，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coral.', chinese: '这一章反复回到同一个点：珊瑚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coral.s1', en: 'Without that coral, the next paragraph is hard to follow.', zh: '没有这个珊瑚，下一段会很难读。', structure: 'coral / 表示 / 珊瑚', grammar: 'noun，围绕「珊瑚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coral.', right: 'He gave me some advice about the coral.', reason: 'advice 不可数。名词 coral 的单复数按词典词形记。', rule: '先确定 coral 是noun，再套「珊瑚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coral.q1', senseId: 'coral.s1', errorType: 'meaning', type: '词义选择', prompt: '「coral」在本条的核心意思是：', options: ['珊瑚', '完全相反的意思', '一种古代钱币'], answer: '珊瑚', explain: 'coral：珊瑚。' },
      { id: 'coral.q2', senseId: 'coral.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coral?', options: ['珊瑚', 'a kind of ancient coin', 'the past tense of be'], answer: '珊瑚', explain: '对的是「珊瑚」。' },
      { id: 'coral.q3', senseId: 'coral.s1', errorType: 'grammar', type: '词义选择', prompt: 'coral 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coral.q4', senseId: 'coral.s1', errorType: 'meaning', type: '词源', prompt: '记 coral 时，哪句更稳妥？', options: ['先锁住「珊瑚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「珊瑚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['珊瑚'] },
  });

  D('cord', {
    etymology: {
      origin: '希腊语 khordē「肠线、弦」。',
      prefix: null,
      root: { text: 'cord', gloss: '细绳' },
      suffix: null,
      history: [
        { label: 'cord', text: '希腊语 khordē「肠线、弦」。' },
        { label: '现在', text: '核心用法是：细绳。' },
      ],
      formationLogic: '考试认现在的用法：细绳。',
      mnemonic: '看到 cord，先说出「细绳」。',
      note: '考试认现在的用法：细绳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cord.', chinese: '这一章反复回到同一个点：细绳。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cord.s1', en: 'Without that cord, the next paragraph is hard to follow.', zh: '没有这个细绳，下一段会很难读。', structure: 'cord / 表示 / 细绳', grammar: 'noun，围绕「细绳」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cord.', right: 'He gave me some advice about the cord.', reason: 'advice 不可数。名词 cord 的单复数按词典词形记。', rule: '先确定 cord 是noun，再套「细绳」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cord.q1', senseId: 'cord.s1', errorType: 'meaning', type: '词义选择', prompt: '「cord」在本条的核心意思是：', options: ['细绳', '完全相反的意思', '一种古代钱币'], answer: '细绳', explain: 'cord：细绳。' },
      { id: 'cord.q2', senseId: 'cord.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cord?', options: ['细绳', 'a kind of ancient coin', 'the past tense of be'], answer: '细绳', explain: '对的是「细绳」。' },
      { id: 'cord.q3', senseId: 'cord.s1', errorType: 'grammar', type: '词义选择', prompt: 'cord 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cord.q4', senseId: 'cord.s1', errorType: 'meaning', type: '词源', prompt: '记 cord 时，哪句更稳妥？', options: ['先锁住「细绳」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「细绳」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['细绳'] },
  });

  D('cordial', {
    etymology: {
      origin: '英语派生：cordi + -al，词性转到「热诚的」。',
      prefix: null,
      root: { text: 'cordi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cordial', text: '英语派生：cordi + -al，词性转到「热诚的」。' },
        { label: '现在', text: '核心用法是：热诚的。' },
      ],
      formationLogic: '先认词干 cordi，再看词尾。',
      mnemonic: '看到 cordial，先说出「热诚的」。',
      note: '先认词干 cordi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cordial.', chinese: '即使是初读者也能看出，这个结果是热诚的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cordial.s1', en: 'They wanted a cordial answer, not a long speech.', zh: '他们要一个热诚的的答复，不要长篇发言。', structure: 'cordial / 表示 / 热诚的', grammar: 'adjective，围绕「热诚的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cordial.', right: 'The news is cordial.', reason: 'news 作主语时动词用单数。', rule: '先确定 cordial 是adjective，再套「热诚的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cordial.q1', senseId: 'cordial.s1', errorType: 'meaning', type: '词义选择', prompt: '「cordial」在本条的核心意思是：', options: ['热诚的', '完全相反的意思', '一种古代钱币'], answer: '热诚的', explain: 'cordial：热诚的。' },
      { id: 'cordial.q2', senseId: 'cordial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cordial?', options: ['热诚的', 'a kind of ancient coin', 'the past tense of be'], answer: '热诚的', explain: '对的是「热诚的」。' },
      { id: 'cordial.q3', senseId: 'cordial.s1', errorType: 'grammar', type: '词义选择', prompt: 'cordial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cordial.q4', senseId: 'cordial.s1', errorType: 'meaning', type: '词源', prompt: '记 cordial 时，哪句更稳妥？', options: ['先锁住「热诚的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热诚的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热诚的'] },
  });

  D('core', {
    etymology: {
      origin: '拉丁语 cor「心」。',
      prefix: null,
      root: { text: 'core', gloss: '核心' },
      suffix: null,
      history: [
        { label: 'core', text: '拉丁语 cor「心」。' },
        { label: '现在', text: '核心用法是：核心。' },
      ],
      formationLogic: '考试认现在的用法：核心。',
      mnemonic: '看到 core，先说出「核心」。',
      note: '考试认现在的用法：核心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one core.', chinese: '这一章反复回到同一个点：核心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'core.s1', en: 'Without that core, the next paragraph is hard to follow.', zh: '没有这个核心，下一段会很难读。', structure: 'core / 表示 / 核心', grammar: 'noun，围绕「核心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the core.', right: 'He gave me some advice about the core.', reason: 'advice 不可数。名词 core 的单复数按词典词形记。', rule: '先确定 core 是noun，再套「核心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'core.q1', senseId: 'core.s1', errorType: 'meaning', type: '词义选择', prompt: '「core」在本条的核心意思是：', options: ['核心', '完全相反的意思', '一种古代钱币'], answer: '核心', explain: 'core：核心。' },
      { id: 'core.q2', senseId: 'core.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches core?', options: ['核心', 'a kind of ancient coin', 'the past tense of be'], answer: '核心', explain: '对的是「核心」。' },
      { id: 'core.q3', senseId: 'core.s1', errorType: 'grammar', type: '词义选择', prompt: 'core 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'core.q4', senseId: 'core.s1', errorType: 'meaning', type: '词源', prompt: '记 core 时，哪句更稳妥？', options: ['先锁住「核心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「核心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['核心'] },
  });

  D('cork', {
    etymology: {
      origin: '现代英语常用词「cork」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cork', gloss: '软木' },
      suffix: null,
      history: [
        { label: 'cork', text: '现代英语常用词「cork」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：软木。' },
      ],
      formationLogic: '核心义：软木。',
      mnemonic: '看到 cork，先说出「软木」。',
      note: '核心义：软木。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cork.', chinese: '这一章反复回到同一个点：软木。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cork.s1', en: 'Without that cork, the next paragraph is hard to follow.', zh: '没有这个软木，下一段会很难读。', structure: 'cork / 表示 / 软木', grammar: 'noun，围绕「软木」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cork.', right: 'He gave me some advice about the cork.', reason: 'advice 不可数。名词 cork 的单复数按词典词形记。', rule: '先确定 cork 是noun，再套「软木」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cork.q1', senseId: 'cork.s1', errorType: 'meaning', type: '词义选择', prompt: '「cork」在本条的核心意思是：', options: ['软木', '完全相反的意思', '一种古代钱币'], answer: '软木', explain: 'cork：软木。' },
      { id: 'cork.q2', senseId: 'cork.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cork?', options: ['软木', 'a kind of ancient coin', 'the past tense of be'], answer: '软木', explain: '对的是「软木」。' },
      { id: 'cork.q3', senseId: 'cork.s1', errorType: 'grammar', type: '词义选择', prompt: 'cork 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cork.q4', senseId: 'cork.s1', errorType: 'meaning', type: '词源', prompt: '记 cork 时，哪句更稳妥？', options: ['先锁住「软木」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「软木」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['软木'] },
  });

  D('corn', {
    etymology: {
      origin: '古英语 corn「谷粒」。美国英语专指玉米。',
      prefix: null,
      root: { text: 'corn', gloss: '玉米' },
      suffix: null,
      history: [
        { label: 'corn', text: '古英语 corn「谷粒」。美国英语专指玉米。' },
        { label: '现在', text: '核心用法是：玉米。' },
      ],
      formationLogic: '考试认现在的用法：玉米。',
      mnemonic: '看到 corn，先说出「玉米」。',
      note: '考试认现在的用法：玉米。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corn.', chinese: '这一章反复回到同一个点：玉米。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corn.s1', en: 'Without that corn, the next paragraph is hard to follow.', zh: '没有这个玉米，下一段会很难读。', structure: 'corn / 表示 / 玉米', grammar: 'noun，围绕「玉米」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corn.', right: 'He gave me some advice about the corn.', reason: 'advice 不可数。名词 corn 的单复数按词典词形记。', rule: '先确定 corn 是noun，再套「玉米」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corn.q1', senseId: 'corn.s1', errorType: 'meaning', type: '词义选择', prompt: '「corn」在本条的核心意思是：', options: ['玉米', '完全相反的意思', '一种古代钱币'], answer: '玉米', explain: 'corn：玉米。' },
      { id: 'corn.q2', senseId: 'corn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corn?', options: ['玉米', 'a kind of ancient coin', 'the past tense of be'], answer: '玉米', explain: '对的是「玉米」。' },
      { id: 'corn.q3', senseId: 'corn.s1', errorType: 'grammar', type: '词义选择', prompt: 'corn 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corn.q4', senseId: 'corn.s1', errorType: 'meaning', type: '词源', prompt: '记 corn 时，哪句更稳妥？', options: ['先锁住「玉米」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「玉米」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['玉米'] },
  });

  D('corner', {
    etymology: {
      origin: '拉丁语 cornu「角」。',
      prefix: null,
      root: { text: 'corner', gloss: '角落' },
      suffix: null,
      history: [
        { label: 'corner', text: '拉丁语 cornu「角」。' },
        { label: '现在', text: '核心用法是：角落。' },
      ],
      formationLogic: '考试认现在的用法：角落。',
      mnemonic: '看到 corner，先说出「角落」。',
      note: '考试认现在的用法：角落。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corner.', chinese: '这一章反复回到同一个点：角落。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corner.s1', en: 'Without that corner, the next paragraph is hard to follow.', zh: '没有这个角落，下一段会很难读。', structure: 'corner / 表示 / 角落', grammar: 'noun，围绕「角落」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corner.', right: 'He gave me some advice about the corner.', reason: 'advice 不可数。名词 corner 的单复数按词典词形记。', rule: '先确定 corner 是noun，再套「角落」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corner.q1', senseId: 'corner.s1', errorType: 'meaning', type: '词义选择', prompt: '「corner」在本条的核心意思是：', options: ['角落', '完全相反的意思', '一种古代钱币'], answer: '角落', explain: 'corner：角落。' },
      { id: 'corner.q2', senseId: 'corner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corner?', options: ['角落', 'a kind of ancient coin', 'the past tense of be'], answer: '角落', explain: '对的是「角落」。' },
      { id: 'corner.q3', senseId: 'corner.s1', errorType: 'grammar', type: '词义选择', prompt: 'corner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corner.q4', senseId: 'corner.s1', errorType: 'meaning', type: '词源', prompt: '记 corner 时，哪句更稳妥？', options: ['先锁住「角落」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「角落」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['角落'] },
  });

  D('cornerstone', {
    etymology: {
      origin: '现代英语常用词「cornerstone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cornerstone', gloss: '基石' },
      suffix: null,
      history: [
        { label: 'cornerstone', text: '现代英语常用词「cornerstone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：基石。' },
      ],
      formationLogic: '核心义：基石。',
      mnemonic: '看到 cornerstone，先说出「基石」。',
      note: '核心义：基石。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cornerstone.', chinese: '这一章反复回到同一个点：基石。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cornerstone.s1', en: 'Without that cornerstone, the next paragraph is hard to follow.', zh: '没有这个基石，下一段会很难读。', structure: 'cornerstone / 表示 / 基石', grammar: 'noun，围绕「基石」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cornerstone.', right: 'He gave me some advice about the cornerstone.', reason: 'advice 不可数。名词 cornerstone 的单复数按词典词形记。', rule: '先确定 cornerstone 是noun，再套「基石」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cornerstone.q1', senseId: 'cornerstone.s1', errorType: 'meaning', type: '词义选择', prompt: '「cornerstone」在本条的核心意思是：', options: ['基石', '完全相反的意思', '一种古代钱币'], answer: '基石', explain: 'cornerstone：基石。' },
      { id: 'cornerstone.q2', senseId: 'cornerstone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cornerstone?', options: ['基石', 'a kind of ancient coin', 'the past tense of be'], answer: '基石', explain: '对的是「基石」。' },
      { id: 'cornerstone.q3', senseId: 'cornerstone.s1', errorType: 'grammar', type: '词义选择', prompt: 'cornerstone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cornerstone.q4', senseId: 'cornerstone.s1', errorType: 'meaning', type: '词源', prompt: '记 cornerstone 时，哪句更稳妥？', options: ['先锁住「基石」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「基石」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['基石'] },
  });

  D('corporal', {
    etymology: {
      origin: '英语派生：corpor + -al，词性转到「肉体的」。',
      prefix: null,
      root: { text: 'corpor', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'corporal', text: '英语派生：corpor + -al，词性转到「肉体的」。' },
        { label: '现在', text: '核心用法是：肉体的。' },
      ],
      formationLogic: '先认词干 corpor，再看词尾。',
      mnemonic: '看到 corporal，先说出「肉体的」。',
      note: '先认词干 corpor，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was corporal.', chinese: '即使是初读者也能看出，这个结果是肉体的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corporal.s1', en: 'They wanted a corporal answer, not a long speech.', zh: '他们要一个肉体的的答复，不要长篇发言。', structure: 'corporal / 表示 / 肉体的', grammar: 'adjective，围绕「肉体的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are corporal.', right: 'The news is corporal.', reason: 'news 作主语时动词用单数。', rule: '先确定 corporal 是adjective，再套「肉体的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corporal.q1', senseId: 'corporal.s1', errorType: 'meaning', type: '词义选择', prompt: '「corporal」在本条的核心意思是：', options: ['肉体的', '完全相反的意思', '一种古代钱币'], answer: '肉体的', explain: 'corporal：肉体的。' },
      { id: 'corporal.q2', senseId: 'corporal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corporal?', options: ['肉体的', 'a kind of ancient coin', 'the past tense of be'], answer: '肉体的', explain: '对的是「肉体的」。' },
      { id: 'corporal.q3', senseId: 'corporal.s1', errorType: 'grammar', type: '词义选择', prompt: 'corporal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'corporal.q4', senseId: 'corporal.s1', errorType: 'meaning', type: '词源', prompt: '记 corporal 时，哪句更稳妥？', options: ['先锁住「肉体的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肉体的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肉体的'] },
  });

  D('corporation', {
    etymology: {
      origin: '英语派生：corpora + -tion，词性转到「公司」。',
      prefix: null,
      root: { text: 'corpora', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'corporation', text: '英语派生：corpora + -tion，词性转到「公司」。' },
        { label: '现在', text: '核心用法是：公司。' },
      ],
      formationLogic: '先认词干 corpora，再看词尾。',
      mnemonic: '看到 corporation，先说出「公司」。',
      note: '先认词干 corpora，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corporation.', chinese: '这一章反复回到同一个点：公司。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corporation.s1', en: 'Without that corporation, the next paragraph is hard to follow.', zh: '没有这个公司，下一段会很难读。', structure: 'corporation / 表示 / 公司', grammar: 'noun，围绕「公司」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corporation.', right: 'He gave me some advice about the corporation.', reason: 'advice 不可数。名词 corporation 的单复数按词典词形记。', rule: '先确定 corporation 是noun，再套「公司」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corporation.q1', senseId: 'corporation.s1', errorType: 'meaning', type: '词义选择', prompt: '「corporation」在本条的核心意思是：', options: ['公司', '完全相反的意思', '一种古代钱币'], answer: '公司', explain: 'corporation：公司。' },
      { id: 'corporation.q2', senseId: 'corporation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corporation?', options: ['公司', 'a kind of ancient coin', 'the past tense of be'], answer: '公司', explain: '对的是「公司」。' },
      { id: 'corporation.q3', senseId: 'corporation.s1', errorType: 'grammar', type: '词义选择', prompt: 'corporation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corporation.q4', senseId: 'corporation.s1', errorType: 'meaning', type: '词源', prompt: '记 corporation 时，哪句更稳妥？', options: ['先锁住「公司」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公司」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公司'] },
  });

  D('corps', {
    etymology: {
      origin: '现代英语常用词「corps」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'corps', gloss: '军团' },
      suffix: null,
      history: [
        { label: 'corps', text: '现代英语常用词「corps」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：军团。' },
      ],
      formationLogic: '核心义：军团。',
      mnemonic: '看到 corps，先说出「军团」。',
      note: '核心义：军团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corps.', chinese: '这一章反复回到同一个点：军团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corps.s1', en: 'Without that corps, the next paragraph is hard to follow.', zh: '没有这个军团，下一段会很难读。', structure: 'corps / 表示 / 军团', grammar: 'noun，围绕「军团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corps.', right: 'He gave me some advice about the corps.', reason: 'advice 不可数。名词 corps 的单复数按词典词形记。', rule: '先确定 corps 是noun，再套「军团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corps.q1', senseId: 'corps.s1', errorType: 'meaning', type: '词义选择', prompt: '「corps」在本条的核心意思是：', options: ['军团', '完全相反的意思', '一种古代钱币'], answer: '军团', explain: 'corps：军团。' },
      { id: 'corps.q2', senseId: 'corps.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corps?', options: ['军团', 'a kind of ancient coin', 'the past tense of be'], answer: '军团', explain: '对的是「军团」。' },
      { id: 'corps.q3', senseId: 'corps.s1', errorType: 'grammar', type: '词义选择', prompt: 'corps 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corps.q4', senseId: 'corps.s1', errorType: 'meaning', type: '词源', prompt: '记 corps 时，哪句更稳妥？', options: ['先锁住「军团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「军团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['军团'] },
  });

  D('corpse', {
    etymology: {
      origin: '现代英语常用词「corpse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'corpse', gloss: '尸体' },
      suffix: null,
      history: [
        { label: 'corpse', text: '现代英语常用词「corpse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：尸体。' },
      ],
      formationLogic: '核心义：尸体。',
      mnemonic: '看到 corpse，先说出「尸体」。',
      note: '核心义：尸体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corpse.', chinese: '这一章反复回到同一个点：尸体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corpse.s1', en: 'Without that corpse, the next paragraph is hard to follow.', zh: '没有这个尸体，下一段会很难读。', structure: 'corpse / 表示 / 尸体', grammar: 'noun，围绕「尸体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corpse.', right: 'He gave me some advice about the corpse.', reason: 'advice 不可数。名词 corpse 的单复数按词典词形记。', rule: '先确定 corpse 是noun，再套「尸体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corpse.q1', senseId: 'corpse.s1', errorType: 'meaning', type: '词义选择', prompt: '「corpse」在本条的核心意思是：', options: ['尸体', '完全相反的意思', '一种古代钱币'], answer: '尸体', explain: 'corpse：尸体。' },
      { id: 'corpse.q2', senseId: 'corpse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corpse?', options: ['尸体', 'a kind of ancient coin', 'the past tense of be'], answer: '尸体', explain: '对的是「尸体」。' },
      { id: 'corpse.q3', senseId: 'corpse.s1', errorType: 'grammar', type: '词义选择', prompt: 'corpse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corpse.q4', senseId: 'corpse.s1', errorType: 'meaning', type: '词源', prompt: '记 corpse 时，哪句更稳妥？', options: ['先锁住「尸体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尸体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尸体'] },
  });

  D('correct', {
    etymology: {
      origin: '拉丁语 corrigere「使直」，regere「引导」。',
      prefix: null,
      root: { text: 'correct', gloss: '正确的' },
      suffix: null,
      history: [
        { label: 'correct', text: '拉丁语 corrigere「使直」，regere「引导」。' },
        { label: '现在', text: '核心用法是：正确的。' },
      ],
      formationLogic: '考试认现在的用法：正确的。',
      mnemonic: '看到 correct，先说出「正确的」。',
      note: '考试认现在的用法：正确的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was correct.', chinese: '即使是初读者也能看出，这个结果是正确的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'correct.s1', en: 'They wanted a correct answer, not a long speech.', zh: '他们要一个正确的的答复，不要长篇发言。', structure: 'correct / 表示 / 正确的', grammar: 'adjective，围绕「正确的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are correct.', right: 'The news is correct.', reason: 'news 作主语时动词用单数。', rule: '先确定 correct 是adjective，再套「正确的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'correct.q1', senseId: 'correct.s1', errorType: 'meaning', type: '词义选择', prompt: '「correct」在本条的核心意思是：', options: ['正确的', '完全相反的意思', '一种古代钱币'], answer: '正确的', explain: 'correct：正确的。' },
      { id: 'correct.q2', senseId: 'correct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches correct?', options: ['正确的', 'a kind of ancient coin', 'the past tense of be'], answer: '正确的', explain: '对的是「正确的」。' },
      { id: 'correct.q3', senseId: 'correct.s1', errorType: 'grammar', type: '词义选择', prompt: 'correct 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'correct.q4', senseId: 'correct.s1', errorType: 'meaning', type: '词源', prompt: '记 correct 时，哪句更稳妥？', options: ['先锁住「正确的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「正确的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['正确的'] },
  });

  D('correlate', {
    etymology: {
      origin: '现代英语常用词「correlate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'correlate', gloss: '相关联' },
      suffix: null,
      history: [
        { label: 'correlate', text: '现代英语常用词「correlate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：相关联。' },
      ],
      formationLogic: '核心义：相关联。',
      mnemonic: '看到 correlate，先说出「相关联」。',
      note: '核心义：相关联。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to correlate before the office closed.', chinese: '他们同意在办公室关门前做这件事：相关联。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'correlate.s1', en: 'The deadline forced the team to correlate that afternoon.', zh: '截止日期逼着小组在那天下午相关联。', structure: 'correlate / 表示 / 相关联', grammar: 'verb，围绕「相关联」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She correlateed it yesterday without checking the real past form.', right: 'Check the past form of "correlate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 correlate 是verb，再套「相关联」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'correlate.q1', senseId: 'correlate.s1', errorType: 'meaning', type: '词义选择', prompt: '「correlate」在本条的核心意思是：', options: ['相关联', '完全相反的意思', '一种古代钱币'], answer: '相关联', explain: 'correlate：相关联。' },
      { id: 'correlate.q2', senseId: 'correlate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches correlate?', options: ['相关联', 'a kind of ancient coin', 'the past tense of be'], answer: '相关联', explain: '对的是「相关联」。' },
      { id: 'correlate.q3', senseId: 'correlate.s1', errorType: 'grammar', type: '词义选择', prompt: 'correlate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'correlate.q4', senseId: 'correlate.s1', errorType: 'meaning', type: '词源', prompt: '记 correlate 时，哪句更稳妥？', options: ['先锁住「相关联」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相关联」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相关联'] },
  });

  D('correspond', {
    etymology: {
      origin: '拉丁语 correspondere「互相回应」。',
      prefix: null,
      root: { text: 'correspond', gloss: '相符' },
      suffix: null,
      history: [
        { label: 'correspond', text: '拉丁语 correspondere「互相回应」。' },
        { label: '现在', text: '核心用法是：相符。' },
      ],
      formationLogic: '考试认现在的用法：相符。',
      mnemonic: '看到 correspond，先说出「相符」。',
      note: '考试认现在的用法：相符。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to correspond before the office closed.', chinese: '他们同意在办公室关门前做这件事：相符。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'correspond.s1', en: 'The deadline forced the team to correspond that afternoon.', zh: '截止日期逼着小组在那天下午相符。', structure: 'correspond / 表示 / 相符', grammar: 'verb，围绕「相符」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She corresponded it yesterday without checking the real past form.', right: 'Check the past form of "correspond" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 correspond 是verb，再套「相符」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'correspond.q1', senseId: 'correspond.s1', errorType: 'meaning', type: '词义选择', prompt: '「correspond」在本条的核心意思是：', options: ['相符', '完全相反的意思', '一种古代钱币'], answer: '相符', explain: 'correspond：相符。' },
      { id: 'correspond.q2', senseId: 'correspond.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches correspond?', options: ['相符', 'a kind of ancient coin', 'the past tense of be'], answer: '相符', explain: '对的是「相符」。' },
      { id: 'correspond.q3', senseId: 'correspond.s1', errorType: 'grammar', type: '词义选择', prompt: 'correspond 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'correspond.q4', senseId: 'correspond.s1', errorType: 'meaning', type: '词源', prompt: '记 correspond 时，哪句更稳妥？', options: ['先锁住「相符」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相符」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相符'] },
  });

  D('corresponding', {
    etymology: {
      origin: '英语派生：correspond + -ing，词性转到「对应的」。',
      prefix: null,
      root: { text: 'correspond', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'corresponding', text: '英语派生：correspond + -ing，词性转到「对应的」。' },
        { label: '现在', text: '核心用法是：对应的。' },
      ],
      formationLogic: '先认词干 correspond，再看词尾。',
      mnemonic: '看到 corresponding，先说出「对应的」。',
      note: '先认词干 correspond，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was corresponding.', chinese: '即使是初读者也能看出，这个结果是对应的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corresponding.s1', en: 'They wanted a corresponding answer, not a long speech.', zh: '他们要一个对应的的答复，不要长篇发言。', structure: 'corresponding / 表示 / 对应的', grammar: 'adjective，围绕「对应的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are corresponding.', right: 'The news is corresponding.', reason: 'news 作主语时动词用单数。', rule: '先确定 corresponding 是adjective，再套「对应的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corresponding.q1', senseId: 'corresponding.s1', errorType: 'meaning', type: '词义选择', prompt: '「corresponding」在本条的核心意思是：', options: ['对应的', '完全相反的意思', '一种古代钱币'], answer: '对应的', explain: 'corresponding：对应的。' },
      { id: 'corresponding.q2', senseId: 'corresponding.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corresponding?', options: ['对应的', 'a kind of ancient coin', 'the past tense of be'], answer: '对应的', explain: '对的是「对应的」。' },
      { id: 'corresponding.q3', senseId: 'corresponding.s1', errorType: 'grammar', type: '词义选择', prompt: 'corresponding 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'corresponding.q4', senseId: 'corresponding.s1', errorType: 'meaning', type: '词源', prompt: '记 corresponding 时，哪句更稳妥？', options: ['先锁住「对应的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「对应的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对应的'] },
  });

  D('corridor', {
    etymology: {
      origin: '意大利语 corridore「跑廊」。',
      prefix: null,
      root: { text: 'corridor', gloss: '走廊' },
      suffix: null,
      history: [
        { label: 'corridor', text: '意大利语 corridore「跑廊」。' },
        { label: '现在', text: '核心用法是：走廊。' },
      ],
      formationLogic: '考试认现在的用法：走廊。',
      mnemonic: '看到 corridor，先说出「走廊」。',
      note: '考试认现在的用法：走廊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corridor.', chinese: '这一章反复回到同一个点：走廊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corridor.s1', en: 'Without that corridor, the next paragraph is hard to follow.', zh: '没有这个走廊，下一段会很难读。', structure: 'corridor / 表示 / 走廊', grammar: 'noun，围绕「走廊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corridor.', right: 'He gave me some advice about the corridor.', reason: 'advice 不可数。名词 corridor 的单复数按词典词形记。', rule: '先确定 corridor 是noun，再套「走廊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corridor.q1', senseId: 'corridor.s1', errorType: 'meaning', type: '词义选择', prompt: '「corridor」在本条的核心意思是：', options: ['走廊', '完全相反的意思', '一种古代钱币'], answer: '走廊', explain: 'corridor：走廊。' },
      { id: 'corridor.q2', senseId: 'corridor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corridor?', options: ['走廊', 'a kind of ancient coin', 'the past tense of be'], answer: '走廊', explain: '对的是「走廊」。' },
      { id: 'corridor.q3', senseId: 'corridor.s1', errorType: 'grammar', type: '词义选择', prompt: 'corridor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corridor.q4', senseId: 'corridor.s1', errorType: 'meaning', type: '词源', prompt: '记 corridor 时，哪句更稳妥？', options: ['先锁住「走廊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「走廊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['走廊'] },
  });

  D('corrode', {
    etymology: {
      origin: '现代英语常用词「corrode」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'corrode', gloss: '腐蚀' },
      suffix: null,
      history: [
        { label: 'corrode', text: '现代英语常用词「corrode」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：腐蚀。' },
      ],
      formationLogic: '核心义：腐蚀。',
      mnemonic: '看到 corrode，先说出「腐蚀」。',
      note: '核心义：腐蚀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to corrode before the office closed.', chinese: '他们同意在办公室关门前做这件事：腐蚀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corrode.s1', en: 'The deadline forced the team to corrode that afternoon.', zh: '截止日期逼着小组在那天下午腐蚀。', structure: 'corrode / 表示 / 腐蚀', grammar: 'verb，围绕「腐蚀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She corrodeed it yesterday without checking the real past form.', right: 'Check the past form of "corrode" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 corrode 是verb，再套「腐蚀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corrode.q1', senseId: 'corrode.s1', errorType: 'meaning', type: '词义选择', prompt: '「corrode」在本条的核心意思是：', options: ['腐蚀', '完全相反的意思', '一种古代钱币'], answer: '腐蚀', explain: 'corrode：腐蚀。' },
      { id: 'corrode.q2', senseId: 'corrode.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corrode?', options: ['腐蚀', 'a kind of ancient coin', 'the past tense of be'], answer: '腐蚀', explain: '对的是「腐蚀」。' },
      { id: 'corrode.q3', senseId: 'corrode.s1', errorType: 'grammar', type: '词义选择', prompt: 'corrode 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'corrode.q4', senseId: 'corrode.s1', errorType: 'meaning', type: '词源', prompt: '记 corrode 时，哪句更稳妥？', options: ['先锁住「腐蚀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐蚀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐蚀'] },
  });

  D('corrosion', {
    etymology: {
      origin: '英语派生：corro + -sion，词性转到「腐蚀」。',
      prefix: null,
      root: { text: 'corro', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'corrosion', text: '英语派生：corro + -sion，词性转到「腐蚀」。' },
        { label: '现在', text: '核心用法是：腐蚀。' },
      ],
      formationLogic: '先认词干 corro，再看词尾。',
      mnemonic: '看到 corrosion，先说出「腐蚀」。',
      note: '先认词干 corro，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corrosion.', chinese: '这一章反复回到同一个点：腐蚀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corrosion.s1', en: 'Without that corrosion, the next paragraph is hard to follow.', zh: '没有这个腐蚀，下一段会很难读。', structure: 'corrosion / 表示 / 腐蚀', grammar: 'noun，围绕「腐蚀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corrosion.', right: 'He gave me some advice about the corrosion.', reason: 'advice 不可数。名词 corrosion 的单复数按词典词形记。', rule: '先确定 corrosion 是noun，再套「腐蚀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corrosion.q1', senseId: 'corrosion.s1', errorType: 'meaning', type: '词义选择', prompt: '「corrosion」在本条的核心意思是：', options: ['腐蚀', '完全相反的意思', '一种古代钱币'], answer: '腐蚀', explain: 'corrosion：腐蚀。' },
      { id: 'corrosion.q2', senseId: 'corrosion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corrosion?', options: ['腐蚀', 'a kind of ancient coin', 'the past tense of be'], answer: '腐蚀', explain: '对的是「腐蚀」。' },
      { id: 'corrosion.q3', senseId: 'corrosion.s1', errorType: 'grammar', type: '词义选择', prompt: 'corrosion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corrosion.q4', senseId: 'corrosion.s1', errorType: 'meaning', type: '词源', prompt: '记 corrosion 时，哪句更稳妥？', options: ['先锁住「腐蚀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐蚀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐蚀'] },
  });

  D('corrosive', {
    etymology: {
      origin: '英语派生：corros + -ive，词性转到「腐蚀性的」。',
      prefix: null,
      root: { text: 'corros', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'corrosive', text: '英语派生：corros + -ive，词性转到「腐蚀性的」。' },
        { label: '现在', text: '核心用法是：腐蚀性的。' },
      ],
      formationLogic: '先认词干 corros，再看词尾。',
      mnemonic: '看到 corrosive，先说出「腐蚀性的」。',
      note: '先认词干 corros，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was corrosive.', chinese: '即使是初读者也能看出，这个结果是腐蚀性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corrosive.s1', en: 'They wanted a corrosive answer, not a long speech.', zh: '他们要一个腐蚀性的的答复，不要长篇发言。', structure: 'corrosive / 表示 / 腐蚀性的', grammar: 'adjective，围绕「腐蚀性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are corrosive.', right: 'The news is corrosive.', reason: 'news 作主语时动词用单数。', rule: '先确定 corrosive 是adjective，再套「腐蚀性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corrosive.q1', senseId: 'corrosive.s1', errorType: 'meaning', type: '词义选择', prompt: '「corrosive」在本条的核心意思是：', options: ['腐蚀性的', '完全相反的意思', '一种古代钱币'], answer: '腐蚀性的', explain: 'corrosive：腐蚀性的。' },
      { id: 'corrosive.q2', senseId: 'corrosive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corrosive?', options: ['腐蚀性的', 'a kind of ancient coin', 'the past tense of be'], answer: '腐蚀性的', explain: '对的是「腐蚀性的」。' },
      { id: 'corrosive.q3', senseId: 'corrosive.s1', errorType: 'grammar', type: '词义选择', prompt: 'corrosive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'corrosive.q4', senseId: 'corrosive.s1', errorType: 'meaning', type: '词源', prompt: '记 corrosive 时，哪句更稳妥？', options: ['先锁住「腐蚀性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐蚀性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐蚀性的'] },
  });

  D('corrupt', {
    etymology: {
      origin: '拉丁语 corrumpere「完全弄坏」。',
      prefix: null,
      root: { text: 'corrupt', gloss: '腐败的' },
      suffix: null,
      history: [
        { label: 'corrupt', text: '拉丁语 corrumpere「完全弄坏」。' },
        { label: '现在', text: '核心用法是：腐败的。' },
      ],
      formationLogic: '考试认现在的用法：腐败的。',
      mnemonic: '看到 corrupt，先说出「腐败的」。',
      note: '考试认现在的用法：腐败的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was corrupt.', chinese: '即使是初读者也能看出，这个结果是腐败的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corrupt.s1', en: 'They wanted a corrupt answer, not a long speech.', zh: '他们要一个腐败的的答复，不要长篇发言。', structure: 'corrupt / 表示 / 腐败的', grammar: 'adjective，围绕「腐败的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are corrupt.', right: 'The news is corrupt.', reason: 'news 作主语时动词用单数。', rule: '先确定 corrupt 是adjective，再套「腐败的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corrupt.q1', senseId: 'corrupt.s1', errorType: 'meaning', type: '词义选择', prompt: '「corrupt」在本条的核心意思是：', options: ['腐败的', '完全相反的意思', '一种古代钱币'], answer: '腐败的', explain: 'corrupt：腐败的。' },
      { id: 'corrupt.q2', senseId: 'corrupt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corrupt?', options: ['腐败的', 'a kind of ancient coin', 'the past tense of be'], answer: '腐败的', explain: '对的是「腐败的」。' },
      { id: 'corrupt.q3', senseId: 'corrupt.s1', errorType: 'grammar', type: '词义选择', prompt: 'corrupt 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'corrupt.q4', senseId: 'corrupt.s1', errorType: 'meaning', type: '词源', prompt: '记 corrupt 时，哪句更稳妥？', options: ['先锁住「腐败的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐败的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐败的'] },
  });

  D('corruption', {
    etymology: {
      origin: '英语派生：corrup + -tion，词性转到「腐败」。',
      prefix: null,
      root: { text: 'corrup', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'corruption', text: '英语派生：corrup + -tion，词性转到「腐败」。' },
        { label: '现在', text: '核心用法是：腐败。' },
      ],
      formationLogic: '先认词干 corrup，再看词尾。',
      mnemonic: '看到 corruption，先说出「腐败」。',
      note: '先认词干 corrup，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one corruption.', chinese: '这一章反复回到同一个点：腐败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'corruption.s1', en: 'Without that corruption, the next paragraph is hard to follow.', zh: '没有这个腐败，下一段会很难读。', structure: 'corruption / 表示 / 腐败', grammar: 'noun，围绕「腐败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the corruption.', right: 'He gave me some advice about the corruption.', reason: 'advice 不可数。名词 corruption 的单复数按词典词形记。', rule: '先确定 corruption 是noun，再套「腐败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'corruption.q1', senseId: 'corruption.s1', errorType: 'meaning', type: '词义选择', prompt: '「corruption」在本条的核心意思是：', options: ['腐败', '完全相反的意思', '一种古代钱币'], answer: '腐败', explain: 'corruption：腐败。' },
      { id: 'corruption.q2', senseId: 'corruption.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches corruption?', options: ['腐败', 'a kind of ancient coin', 'the past tense of be'], answer: '腐败', explain: '对的是「腐败」。' },
      { id: 'corruption.q3', senseId: 'corruption.s1', errorType: 'grammar', type: '词义选择', prompt: 'corruption 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'corruption.q4', senseId: 'corruption.s1', errorType: 'meaning', type: '词源', prompt: '记 corruption 时，哪句更稳妥？', options: ['先锁住「腐败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「腐败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['腐败'] },
  });

  D('cosmetic', {
    etymology: {
      origin: '英语派生：cosmet + -ic，词性转到「化妆品」。',
      prefix: null,
      root: { text: 'cosmet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cosmetic', text: '英语派生：cosmet + -ic，词性转到「化妆品」。' },
        { label: '现在', text: '核心用法是：化妆品。' },
      ],
      formationLogic: '先认词干 cosmet，再看词尾。',
      mnemonic: '看到 cosmetic，先说出「化妆品」。',
      note: '先认词干 cosmet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cosmetic.', chinese: '这一章反复回到同一个点：化妆品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cosmetic.s1', en: 'Without that cosmetic, the next paragraph is hard to follow.', zh: '没有这个化妆品，下一段会很难读。', structure: 'cosmetic / 表示 / 化妆品', grammar: 'noun，围绕「化妆品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cosmetic.', right: 'He gave me some advice about the cosmetic.', reason: 'advice 不可数。名词 cosmetic 的单复数按词典词形记。', rule: '先确定 cosmetic 是noun，再套「化妆品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cosmetic.q1', senseId: 'cosmetic.s1', errorType: 'meaning', type: '词义选择', prompt: '「cosmetic」在本条的核心意思是：', options: ['化妆品', '完全相反的意思', '一种古代钱币'], answer: '化妆品', explain: 'cosmetic：化妆品。' },
      { id: 'cosmetic.q2', senseId: 'cosmetic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cosmetic?', options: ['化妆品', 'a kind of ancient coin', 'the past tense of be'], answer: '化妆品', explain: '对的是「化妆品」。' },
      { id: 'cosmetic.q3', senseId: 'cosmetic.s1', errorType: 'grammar', type: '词义选择', prompt: 'cosmetic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cosmetic.q4', senseId: 'cosmetic.s1', errorType: 'meaning', type: '词源', prompt: '记 cosmetic 时，哪句更稳妥？', options: ['先锁住「化妆品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化妆品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化妆品'] },
  });

  D('cosmetics', {
    etymology: {
      origin: '现代英语常用词「cosmetics」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cosmetics', gloss: '化妆品（复数）' },
      suffix: null,
      history: [
        { label: 'cosmetics', text: '现代英语常用词「cosmetics」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：化妆品（复数）。' },
      ],
      formationLogic: '核心义：化妆品（复数）。',
      mnemonic: '看到 cosmetics，先说出「化妆品（复数）」。',
      note: '核心义：化妆品（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cosmetics.', chinese: '这一章反复回到同一个点：化妆品（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cosmetics.s1', en: 'Without that cosmetics, the next paragraph is hard to follow.', zh: '没有这个化妆品（复数），下一段会很难读。', structure: 'cosmetics / 表示 / 化妆品（复数）', grammar: 'noun，围绕「化妆品（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cosmetics.', right: 'He gave me some advice about the cosmetics.', reason: 'advice 不可数。名词 cosmetics 的单复数按词典词形记。', rule: '先确定 cosmetics 是noun，再套「化妆品（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cosmetics.q1', senseId: 'cosmetics.s1', errorType: 'meaning', type: '词义选择', prompt: '「cosmetics」在本条的核心意思是：', options: ['化妆品（复数）', '完全相反的意思', '一种古代钱币'], answer: '化妆品（复数）', explain: 'cosmetics：化妆品（复数）。' },
      { id: 'cosmetics.q2', senseId: 'cosmetics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cosmetics?', options: ['化妆品（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '化妆品（复数）', explain: '对的是「化妆品（复数）」。' },
      { id: 'cosmetics.q3', senseId: 'cosmetics.s1', errorType: 'grammar', type: '词义选择', prompt: 'cosmetics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cosmetics.q4', senseId: 'cosmetics.s1', errorType: 'meaning', type: '词源', prompt: '记 cosmetics 时，哪句更稳妥？', options: ['先锁住「化妆品（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化妆品（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化妆品（复数）'] },
  });

  D('cosmonaut', {
    etymology: {
      origin: '现代英语常用词「cosmonaut」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cosmonaut', gloss: '（俄国）宇航员' },
      suffix: null,
      history: [
        { label: 'cosmonaut', text: '现代英语常用词「cosmonaut」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（俄国）宇航员。' },
      ],
      formationLogic: '核心义：（俄国）宇航员。',
      mnemonic: '看到 cosmonaut，先说出「（俄国）宇航员」。',
      note: '核心义：（俄国）宇航员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cosmonaut.', chinese: '这一章反复回到同一个点：（俄国）宇航员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cosmonaut.s1', en: 'Without that cosmonaut, the next paragraph is hard to follow.', zh: '没有这个（俄国）宇航员，下一段会很难读。', structure: 'cosmonaut / 表示 / （俄国）宇航员', grammar: 'noun，围绕「（俄国）宇航员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cosmonaut.', right: 'He gave me some advice about the cosmonaut.', reason: 'advice 不可数。名词 cosmonaut 的单复数按词典词形记。', rule: '先确定 cosmonaut 是noun，再套「（俄国）宇航员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cosmonaut.q1', senseId: 'cosmonaut.s1', errorType: 'meaning', type: '词义选择', prompt: '「cosmonaut」在本条的核心意思是：', options: ['（俄国）宇航员', '完全相反的意思', '一种古代钱币'], answer: '（俄国）宇航员', explain: 'cosmonaut：（俄国）宇航员。' },
      { id: 'cosmonaut.q2', senseId: 'cosmonaut.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cosmonaut?', options: ['（俄国）宇航员', 'a kind of ancient coin', 'the past tense of be'], answer: '（俄国）宇航员', explain: '对的是「（俄国）宇航员」。' },
      { id: 'cosmonaut.q3', senseId: 'cosmonaut.s1', errorType: 'grammar', type: '词义选择', prompt: 'cosmonaut 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cosmonaut.q4', senseId: 'cosmonaut.s1', errorType: 'meaning', type: '词源', prompt: '记 cosmonaut 时，哪句更稳妥？', options: ['先锁住「（俄国）宇航员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（俄国）宇航员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（俄国）宇航员'] },
  });

  D('cosmopolitan', {
    etymology: {
      origin: '现代英语常用词「cosmopolitan」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cosmopolitan', gloss: '世界性的' },
      suffix: null,
      history: [
        { label: 'cosmopolitan', text: '现代英语常用词「cosmopolitan」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：世界性的。' },
      ],
      formationLogic: '核心义：世界性的。',
      mnemonic: '看到 cosmopolitan，先说出「世界性的」。',
      note: '核心义：世界性的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cosmopolitan.', chinese: '即使是初读者也能看出，这个结果是世界性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cosmopolitan.s1', en: 'They wanted a cosmopolitan answer, not a long speech.', zh: '他们要一个世界性的的答复，不要长篇发言。', structure: 'cosmopolitan / 表示 / 世界性的', grammar: 'adjective，围绕「世界性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cosmopolitan.', right: 'The news is cosmopolitan.', reason: 'news 作主语时动词用单数。', rule: '先确定 cosmopolitan 是adjective，再套「世界性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cosmopolitan.q1', senseId: 'cosmopolitan.s1', errorType: 'meaning', type: '词义选择', prompt: '「cosmopolitan」在本条的核心意思是：', options: ['世界性的', '完全相反的意思', '一种古代钱币'], answer: '世界性的', explain: 'cosmopolitan：世界性的。' },
      { id: 'cosmopolitan.q2', senseId: 'cosmopolitan.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cosmopolitan?', options: ['世界性的', 'a kind of ancient coin', 'the past tense of be'], answer: '世界性的', explain: '对的是「世界性的」。' },
      { id: 'cosmopolitan.q3', senseId: 'cosmopolitan.s1', errorType: 'grammar', type: '词义选择', prompt: 'cosmopolitan 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cosmopolitan.q4', senseId: 'cosmopolitan.s1', errorType: 'meaning', type: '词源', prompt: '记 cosmopolitan 时，哪句更稳妥？', options: ['先锁住「世界性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「世界性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['世界性的'] },
  });

  D('cosmos', {
    etymology: {
      origin: '现代英语常用词「cosmos」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cosmos', gloss: '宇宙' },
      suffix: null,
      history: [
        { label: 'cosmos', text: '现代英语常用词「cosmos」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：宇宙。' },
      ],
      formationLogic: '核心义：宇宙。',
      mnemonic: '看到 cosmos，先说出「宇宙」。',
      note: '核心义：宇宙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cosmos.', chinese: '这一章反复回到同一个点：宇宙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cosmos.s1', en: 'Without that cosmos, the next paragraph is hard to follow.', zh: '没有这个宇宙，下一段会很难读。', structure: 'cosmos / 表示 / 宇宙', grammar: 'noun，围绕「宇宙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cosmos.', right: 'He gave me some advice about the cosmos.', reason: 'advice 不可数。名词 cosmos 的单复数按词典词形记。', rule: '先确定 cosmos 是noun，再套「宇宙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cosmos.q1', senseId: 'cosmos.s1', errorType: 'meaning', type: '词义选择', prompt: '「cosmos」在本条的核心意思是：', options: ['宇宙', '完全相反的意思', '一种古代钱币'], answer: '宇宙', explain: 'cosmos：宇宙。' },
      { id: 'cosmos.q2', senseId: 'cosmos.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cosmos?', options: ['宇宙', 'a kind of ancient coin', 'the past tense of be'], answer: '宇宙', explain: '对的是「宇宙」。' },
      { id: 'cosmos.q3', senseId: 'cosmos.s1', errorType: 'grammar', type: '词义选择', prompt: 'cosmos 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cosmos.q4', senseId: 'cosmos.s1', errorType: 'meaning', type: '词源', prompt: '记 cosmos 时，哪句更稳妥？', options: ['先锁住「宇宙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宇宙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宇宙'] },
  });

  D('cost', {
    etymology: {
      origin: '拉丁语 constare「站定一个价」。',
      prefix: null,
      root: { text: 'cost', gloss: '费用' },
      suffix: null,
      history: [
        { label: 'cost', text: '拉丁语 constare「站定一个价」。' },
        { label: '现在', text: '核心用法是：费用。' },
      ],
      formationLogic: '考试认现在的用法：费用。',
      mnemonic: '看到 cost，先说出「费用」。',
      note: '考试认现在的用法：费用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cost.', chinese: '这一章反复回到同一个点：费用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cost.s1', en: 'Without that cost, the next paragraph is hard to follow.', zh: '没有这个费用，下一段会很难读。', structure: 'cost / 表示 / 费用', grammar: 'noun，围绕「费用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cost.', right: 'He gave me some advice about the cost.', reason: 'advice 不可数。名词 cost 的单复数按词典词形记。', rule: '先确定 cost 是noun，再套「费用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cost.q1', senseId: 'cost.s1', errorType: 'meaning', type: '词义选择', prompt: '「cost」在本条的核心意思是：', options: ['费用', '完全相反的意思', '一种古代钱币'], answer: '费用', explain: 'cost：费用。' },
      { id: 'cost.q2', senseId: 'cost.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cost?', options: ['费用', 'a kind of ancient coin', 'the past tense of be'], answer: '费用', explain: '对的是「费用」。' },
      { id: 'cost.q3', senseId: 'cost.s1', errorType: 'grammar', type: '词义选择', prompt: 'cost 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cost.q4', senseId: 'cost.s1', errorType: 'meaning', type: '词源', prompt: '记 cost 时，哪句更稳妥？', options: ['先锁住「费用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「费用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['费用'] },
  });

  D('costume', {
    etymology: {
      origin: '现代英语常用词「costume」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'costume', gloss: '服装' },
      suffix: null,
      history: [
        { label: 'costume', text: '现代英语常用词「costume」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：服装。' },
      ],
      formationLogic: '核心义：服装。',
      mnemonic: '看到 costume，先说出「服装」。',
      note: '核心义：服装。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one costume.', chinese: '这一章反复回到同一个点：服装。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'costume.s1', en: 'Without that costume, the next paragraph is hard to follow.', zh: '没有这个服装，下一段会很难读。', structure: 'costume / 表示 / 服装', grammar: 'noun，围绕「服装」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the costume.', right: 'He gave me some advice about the costume.', reason: 'advice 不可数。名词 costume 的单复数按词典词形记。', rule: '先确定 costume 是noun，再套「服装」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'costume.q1', senseId: 'costume.s1', errorType: 'meaning', type: '词义选择', prompt: '「costume」在本条的核心意思是：', options: ['服装', '完全相反的意思', '一种古代钱币'], answer: '服装', explain: 'costume：服装。' },
      { id: 'costume.q2', senseId: 'costume.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches costume?', options: ['服装', 'a kind of ancient coin', 'the past tense of be'], answer: '服装', explain: '对的是「服装」。' },
      { id: 'costume.q3', senseId: 'costume.s1', errorType: 'grammar', type: '词义选择', prompt: 'costume 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'costume.q4', senseId: 'costume.s1', errorType: 'meaning', type: '词源', prompt: '记 costume 时，哪句更稳妥？', options: ['先锁住「服装」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「服装」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['服装'] },
  });

  D('costumes', {
    etymology: {
      origin: '现代英语常用词「costumes」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'costumes', gloss: '服装' },
      suffix: null,
      history: [
        { label: 'costumes', text: '现代英语常用词「costumes」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：服装。' },
      ],
      formationLogic: '核心义：服装。',
      mnemonic: '看到 costumes，先说出「服装」。',
      note: '核心义：服装。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one costumes.', chinese: '这一章反复回到同一个点：服装。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'costumes.s1', en: 'Without that costumes, the next paragraph is hard to follow.', zh: '没有这个服装，下一段会很难读。', structure: 'costumes / 表示 / 服装', grammar: 'noun，围绕「服装」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the costumes.', right: 'He gave me some advice about the costumes.', reason: 'advice 不可数。名词 costumes 的单复数按词典词形记。', rule: '先确定 costumes 是noun，再套「服装」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'costumes.q1', senseId: 'costumes.s1', errorType: 'meaning', type: '词义选择', prompt: '「costumes」在本条的核心意思是：', options: ['服装', '完全相反的意思', '一种古代钱币'], answer: '服装', explain: 'costumes：服装。' },
      { id: 'costumes.q2', senseId: 'costumes.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches costumes?', options: ['服装', 'a kind of ancient coin', 'the past tense of be'], answer: '服装', explain: '对的是「服装」。' },
      { id: 'costumes.q3', senseId: 'costumes.s1', errorType: 'grammar', type: '词义选择', prompt: 'costumes 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'costumes.q4', senseId: 'costumes.s1', errorType: 'meaning', type: '词源', prompt: '记 costumes 时，哪句更稳妥？', options: ['先锁住「服装」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「服装」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['服装'] },
  });

  D('cottage', {
    etymology: {
      origin: '现代英语常用词「cottage」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cottage', gloss: '小屋' },
      suffix: null,
      history: [
        { label: 'cottage', text: '现代英语常用词「cottage」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小屋。' },
      ],
      formationLogic: '核心义：小屋。',
      mnemonic: '看到 cottage，先说出「小屋」。',
      note: '核心义：小屋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cottage.', chinese: '这一章反复回到同一个点：小屋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cottage.s1', en: 'Without that cottage, the next paragraph is hard to follow.', zh: '没有这个小屋，下一段会很难读。', structure: 'cottage / 表示 / 小屋', grammar: 'noun，围绕「小屋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cottage.', right: 'He gave me some advice about the cottage.', reason: 'advice 不可数。名词 cottage 的单复数按词典词形记。', rule: '先确定 cottage 是noun，再套「小屋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cottage.q1', senseId: 'cottage.s1', errorType: 'meaning', type: '词义选择', prompt: '「cottage」在本条的核心意思是：', options: ['小屋', '完全相反的意思', '一种古代钱币'], answer: '小屋', explain: 'cottage：小屋。' },
      { id: 'cottage.q2', senseId: 'cottage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cottage?', options: ['小屋', 'a kind of ancient coin', 'the past tense of be'], answer: '小屋', explain: '对的是「小屋」。' },
      { id: 'cottage.q3', senseId: 'cottage.s1', errorType: 'grammar', type: '词义选择', prompt: 'cottage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cottage.q4', senseId: 'cottage.s1', errorType: 'meaning', type: '词源', prompt: '记 cottage 时，哪句更稳妥？', options: ['先锁住「小屋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小屋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小屋'] },
  });

  D('cotton', {
    etymology: {
      origin: '阿拉伯语 qutn。',
      prefix: null,
      root: { text: 'cotton', gloss: '棉花' },
      suffix: null,
      history: [
        { label: 'cotton', text: '阿拉伯语 qutn。' },
        { label: '现在', text: '核心用法是：棉花。' },
      ],
      formationLogic: '考试认现在的用法：棉花。',
      mnemonic: '看到 cotton，先说出「棉花」。',
      note: '考试认现在的用法：棉花。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cotton.', chinese: '这一章反复回到同一个点：棉花。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cotton.s1', en: 'Without that cotton, the next paragraph is hard to follow.', zh: '没有这个棉花，下一段会很难读。', structure: 'cotton / 表示 / 棉花', grammar: 'noun，围绕「棉花」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cotton.', right: 'He gave me some advice about the cotton.', reason: 'advice 不可数。名词 cotton 的单复数按词典词形记。', rule: '先确定 cotton 是noun，再套「棉花」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cotton.q1', senseId: 'cotton.s1', errorType: 'meaning', type: '词义选择', prompt: '「cotton」在本条的核心意思是：', options: ['棉花', '完全相反的意思', '一种古代钱币'], answer: '棉花', explain: 'cotton：棉花。' },
      { id: 'cotton.q2', senseId: 'cotton.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cotton?', options: ['棉花', 'a kind of ancient coin', 'the past tense of be'], answer: '棉花', explain: '对的是「棉花」。' },
      { id: 'cotton.q3', senseId: 'cotton.s1', errorType: 'grammar', type: '词义选择', prompt: 'cotton 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cotton.q4', senseId: 'cotton.s1', errorType: 'meaning', type: '词源', prompt: '记 cotton 时，哪句更稳妥？', options: ['先锁住「棉花」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「棉花」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['棉花'] },
  });

  D('cottony', {
    etymology: {
      origin: '现代英语常用词「cottony」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cottony', gloss: '棉絮般的' },
      suffix: null,
      history: [
        { label: 'cottony', text: '现代英语常用词「cottony」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：棉絮般的。' },
      ],
      formationLogic: '核心义：棉絮般的。',
      mnemonic: '看到 cottony，先说出「棉絮般的」。',
      note: '核心义：棉絮般的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cottony.', chinese: '即使是初读者也能看出，这个结果是棉絮般的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cottony.s1', en: 'They wanted a cottony answer, not a long speech.', zh: '他们要一个棉絮般的的答复，不要长篇发言。', structure: 'cottony / 表示 / 棉絮般的', grammar: 'adjective，围绕「棉絮般的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cottony.', right: 'The news is cottony.', reason: 'news 作主语时动词用单数。', rule: '先确定 cottony 是adjective，再套「棉絮般的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cottony.q1', senseId: 'cottony.s1', errorType: 'meaning', type: '词义选择', prompt: '「cottony」在本条的核心意思是：', options: ['棉絮般的', '完全相反的意思', '一种古代钱币'], answer: '棉絮般的', explain: 'cottony：棉絮般的。' },
      { id: 'cottony.q2', senseId: 'cottony.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cottony?', options: ['棉絮般的', 'a kind of ancient coin', 'the past tense of be'], answer: '棉絮般的', explain: '对的是「棉絮般的」。' },
      { id: 'cottony.q3', senseId: 'cottony.s1', errorType: 'grammar', type: '词义选择', prompt: 'cottony 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cottony.q4', senseId: 'cottony.s1', errorType: 'meaning', type: '词源', prompt: '记 cottony 时，哪句更稳妥？', options: ['先锁住「棉絮般的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「棉絮般的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['棉絮般的'] },
  });

  D('couch', {
    etymology: {
      origin: '现代英语常用词「couch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'couch', gloss: '长沙发' },
      suffix: null,
      history: [
        { label: 'couch', text: '现代英语常用词「couch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：长沙发。' },
      ],
      formationLogic: '核心义：长沙发。',
      mnemonic: '看到 couch，先说出「长沙发」。',
      note: '核心义：长沙发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one couch.', chinese: '这一章反复回到同一个点：长沙发。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'couch.s1', en: 'Without that couch, the next paragraph is hard to follow.', zh: '没有这个长沙发，下一段会很难读。', structure: 'couch / 表示 / 长沙发', grammar: 'noun，围绕「长沙发」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the couch.', right: 'He gave me some advice about the couch.', reason: 'advice 不可数。名词 couch 的单复数按词典词形记。', rule: '先确定 couch 是noun，再套「长沙发」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'couch.q1', senseId: 'couch.s1', errorType: 'meaning', type: '词义选择', prompt: '「couch」在本条的核心意思是：', options: ['长沙发', '完全相反的意思', '一种古代钱币'], answer: '长沙发', explain: 'couch：长沙发。' },
      { id: 'couch.q2', senseId: 'couch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches couch?', options: ['长沙发', 'a kind of ancient coin', 'the past tense of be'], answer: '长沙发', explain: '对的是「长沙发」。' },
      { id: 'couch.q3', senseId: 'couch.s1', errorType: 'grammar', type: '词义选择', prompt: 'couch 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'couch.q4', senseId: 'couch.s1', errorType: 'meaning', type: '词源', prompt: '记 couch 时，哪句更稳妥？', options: ['先锁住「长沙发」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「长沙发」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['长沙发'] },
  });

  D('cough', {
    etymology: {
      origin: '拟声。',
      prefix: null,
      root: { text: 'cough', gloss: '咳嗽' },
      suffix: null,
      history: [
        { label: 'cough', text: '拟声。' },
        { label: '现在', text: '核心用法是：咳嗽。' },
      ],
      formationLogic: '考试认现在的用法：咳嗽。',
      mnemonic: '看到 cough，先说出「咳嗽」。',
      note: '考试认现在的用法：咳嗽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cough before the office closed.', chinese: '他们同意在办公室关门前做这件事：咳嗽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cough.s1', en: 'The deadline forced the team to cough that afternoon.', zh: '截止日期逼着小组在那天下午咳嗽。', structure: 'cough / 表示 / 咳嗽', grammar: 'verb，围绕「咳嗽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She coughed it yesterday without checking the real past form.', right: 'Check the past form of "cough" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cough 是verb，再套「咳嗽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cough.q1', senseId: 'cough.s1', errorType: 'meaning', type: '词义选择', prompt: '「cough」在本条的核心意思是：', options: ['咳嗽', '完全相反的意思', '一种古代钱币'], answer: '咳嗽', explain: 'cough：咳嗽。' },
      { id: 'cough.q2', senseId: 'cough.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cough?', options: ['咳嗽', 'a kind of ancient coin', 'the past tense of be'], answer: '咳嗽', explain: '对的是「咳嗽」。' },
      { id: 'cough.q3', senseId: 'cough.s1', errorType: 'grammar', type: '词义选择', prompt: 'cough 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cough.q4', senseId: 'cough.s1', errorType: 'meaning', type: '词源', prompt: '记 cough 时，哪句更稳妥？', options: ['先锁住「咳嗽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咳嗽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咳嗽'] },
  });

  D('could', {
    etymology: {
      origin: '现代英语常用词「could」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'could', gloss: '能' },
      suffix: null,
      history: [
        { label: 'could', text: '现代英语常用词「could」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：能。' },
      ],
      formationLogic: '核心义：能。',
      mnemonic: '看到 could，先说出「能」。',
      note: '核心义：能。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one could.', chinese: '这一章反复回到同一个点：能。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'could.s1', en: 'Without that could, the next paragraph is hard to follow.', zh: '没有这个能，下一段会很难读。', structure: 'could / 表示 / 能', grammar: 'modal verb，围绕「能」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the could.', right: 'He gave me some advice about the could.', reason: 'advice 不可数。名词 could 的单复数按词典词形记。', rule: '先确定 could 是modal verb，再套「能」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'could.q1', senseId: 'could.s1', errorType: 'meaning', type: '词义选择', prompt: '「could」在本条的核心意思是：', options: ['能', '完全相反的意思', '一种古代钱币'], answer: '能', explain: 'could：能。' },
      { id: 'could.q2', senseId: 'could.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches could?', options: ['能', 'a kind of ancient coin', 'the past tense of be'], answer: '能', explain: '对的是「能」。' },
      { id: 'could.q3', senseId: 'could.s1', errorType: 'grammar', type: '词义选择', prompt: 'could 的词性（本条）更接近：', options: ['modal verb', '只能作感叹词', '只能作数词'], answer: 'modal verb', explain: '本条按 modal verb 来用。' },
      { id: 'could.q4', senseId: 'could.s1', errorType: 'meaning', type: '词源', prompt: '记 could 时，哪句更稳妥？', options: ['先锁住「能」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「能」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['能'] },
  });

  D('could have', {
    etymology: {
      origin: '现代英语固定说法「could have」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'could have', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'could have', text: '现代英语固定说法「could have」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：本可以（却未）。' },
      ],
      formationLogic: '核心义：本可以（却未）。',
      mnemonic: '看到 could have，先说出「本可以（却未）」。',
      note: '核心义：本可以（却未）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "could have" and asked the class to keep it as one unit.', chinese: '老师把「could have」圈出来，让全班把它当成一个整体。它表示本可以（却未）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'could have.s1', en: 'In the margin she wrote "could have" so nobody would split the phrase.', zh: '她在页边写下「could have」，免得有人把这个说法拆开。意思是本可以（却未）。', structure: 'could have / 表示 / 本可以（却未）', grammar: 'modal verb，围绕「本可以（却未）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of could have and lost the point.', right: 'Keep "could have" together: it means 本可以（却未）.', reason: '「could have」要整块理解。', rule: '先确定 could have 是modal verb，再套「本可以（却未）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'could have.q1', senseId: 'could have.s1', errorType: 'meaning', type: '词义选择', prompt: '「could have」在本条的核心意思是：', options: ['本可以（却未）', '完全相反的意思', '一种古代钱币'], answer: '本可以（却未）', explain: 'could have：本可以（却未）。' },
      { id: 'could have.q2', senseId: 'could have.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches could have?', options: ['本可以（却未）', 'a kind of ancient coin', 'the past tense of be'], answer: '本可以（却未）', explain: '对的是「本可以（却未）」。' },
      { id: 'could have.q3', senseId: 'could have.s1', errorType: 'grammar', type: '词义选择', prompt: 'could have 的词性（本条）更接近：', options: ['modal verb', '只能作感叹词', '只能作数词'], answer: 'modal verb', explain: '本条按 modal verb 来用。' },
      { id: 'could have.q4', senseId: 'could have.s1', errorType: 'meaning', type: '词源', prompt: '记 could have 时，哪句更稳妥？', options: ['先锁住「本可以（却未）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「本可以（却未）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['本可以（却未）'] },
  });

  D('council', {
    etymology: {
      origin: '拉丁语 concilium「召集的会议」。',
      prefix: null,
      root: { text: 'council', gloss: '委员会' },
      suffix: null,
      history: [
        { label: 'council', text: '拉丁语 concilium「召集的会议」。' },
        { label: '现在', text: '核心用法是：委员会。' },
      ],
      formationLogic: '考试认现在的用法：委员会。',
      mnemonic: '看到 council，先说出「委员会」。',
      note: '考试认现在的用法：委员会。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one council.', chinese: '这一章反复回到同一个点：委员会。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'council.s1', en: 'Without that council, the next paragraph is hard to follow.', zh: '没有这个委员会，下一段会很难读。', structure: 'council / 表示 / 委员会', grammar: 'noun，围绕「委员会」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the council.', right: 'He gave me some advice about the council.', reason: 'advice 不可数。名词 council 的单复数按词典词形记。', rule: '先确定 council 是noun，再套「委员会」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'council.q1', senseId: 'council.s1', errorType: 'meaning', type: '词义选择', prompt: '「council」在本条的核心意思是：', options: ['委员会', '完全相反的意思', '一种古代钱币'], answer: '委员会', explain: 'council：委员会。' },
      { id: 'council.q2', senseId: 'council.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches council?', options: ['委员会', 'a kind of ancient coin', 'the past tense of be'], answer: '委员会', explain: '对的是「委员会」。' },
      { id: 'council.q3', senseId: 'council.s1', errorType: 'grammar', type: '词义选择', prompt: 'council 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'council.q4', senseId: 'council.s1', errorType: 'meaning', type: '词源', prompt: '记 council 时，哪句更稳妥？', options: ['先锁住「委员会」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「委员会」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['委员会'] },
  });

  D('counsel', {
    etymology: {
      origin: '拉丁语 consilium「商量、建议」。与 council 不同词。',
      prefix: null,
      root: { text: 'counsel', gloss: '劝告' },
      suffix: null,
      history: [
        { label: 'counsel', text: '拉丁语 consilium「商量、建议」。与 council 不同词。' },
        { label: '现在', text: '核心用法是：劝告。' },
      ],
      formationLogic: '考试认现在的用法：劝告。',
      mnemonic: '看到 counsel，先说出「劝告」。',
      note: '考试认现在的用法：劝告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one counsel.', chinese: '这一章反复回到同一个点：劝告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counsel.s1', en: 'Without that counsel, the next paragraph is hard to follow.', zh: '没有这个劝告，下一段会很难读。', structure: 'counsel / 表示 / 劝告', grammar: 'noun，围绕「劝告」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the counsel.', right: 'He gave me some advice about the counsel.', reason: 'advice 不可数。名词 counsel 的单复数按词典词形记。', rule: '先确定 counsel 是noun，再套「劝告」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counsel.q1', senseId: 'counsel.s1', errorType: 'meaning', type: '词义选择', prompt: '「counsel」在本条的核心意思是：', options: ['劝告', '完全相反的意思', '一种古代钱币'], answer: '劝告', explain: 'counsel：劝告。' },
      { id: 'counsel.q2', senseId: 'counsel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counsel?', options: ['劝告', 'a kind of ancient coin', 'the past tense of be'], answer: '劝告', explain: '对的是「劝告」。' },
      { id: 'counsel.q3', senseId: 'counsel.s1', errorType: 'grammar', type: '词义选择', prompt: 'counsel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'counsel.q4', senseId: 'counsel.s1', errorType: 'meaning', type: '词源', prompt: '记 counsel 时，哪句更稳妥？', options: ['先锁住「劝告」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「劝告」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['劝告'] },
  });

  D('counselling', {
    etymology: {
      origin: '英语派生：counsell + -ing，词性转到「心理咨询」。',
      prefix: null,
      root: { text: 'counsell', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'counselling', text: '英语派生：counsell + -ing，词性转到「心理咨询」。' },
        { label: '现在', text: '核心用法是：心理咨询。' },
      ],
      formationLogic: '先认词干 counsell，再看词尾。',
      mnemonic: '看到 counselling，先说出「心理咨询」。',
      note: '先认词干 counsell，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one counselling.', chinese: '这一章反复回到同一个点：心理咨询。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counselling.s1', en: 'Without that counselling, the next paragraph is hard to follow.', zh: '没有这个心理咨询，下一段会很难读。', structure: 'counselling / 表示 / 心理咨询', grammar: 'noun，围绕「心理咨询」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the counselling.', right: 'He gave me some advice about the counselling.', reason: 'advice 不可数。名词 counselling 的单复数按词典词形记。', rule: '先确定 counselling 是noun，再套「心理咨询」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counselling.q1', senseId: 'counselling.s1', errorType: 'meaning', type: '词义选择', prompt: '「counselling」在本条的核心意思是：', options: ['心理咨询', '完全相反的意思', '一种古代钱币'], answer: '心理咨询', explain: 'counselling：心理咨询。' },
      { id: 'counselling.q2', senseId: 'counselling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counselling?', options: ['心理咨询', 'a kind of ancient coin', 'the past tense of be'], answer: '心理咨询', explain: '对的是「心理咨询」。' },
      { id: 'counselling.q3', senseId: 'counselling.s1', errorType: 'grammar', type: '词义选择', prompt: 'counselling 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'counselling.q4', senseId: 'counselling.s1', errorType: 'meaning', type: '词源', prompt: '记 counselling 时，哪句更稳妥？', options: ['先锁住「心理咨询」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「心理咨询」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['心理咨询'] },
  });

  D('count', {
    etymology: {
      origin: '拉丁语 computare「计算」。伯爵是另一词 comes。',
      prefix: null,
      root: { text: 'count', gloss: '数' },
      suffix: null,
      history: [
        { label: 'count', text: '拉丁语 computare「计算」。伯爵是另一词 comes。' },
        { label: '现在', text: '核心用法是：数。' },
      ],
      formationLogic: '考试认现在的用法：数。',
      mnemonic: '看到 count，先说出「数」。',
      note: '考试认现在的用法：数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to count before the office closed.', chinese: '他们同意在办公室关门前做这件事：数。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'count.s1', en: 'The deadline forced the team to count that afternoon.', zh: '截止日期逼着小组在那天下午数。', structure: 'count / 表示 / 数', grammar: 'verb，围绕「数」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She counted it yesterday without checking the real past form.', right: 'Check the past form of "count" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 count 是verb，再套「数」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'count.q1', senseId: 'count.s1', errorType: 'meaning', type: '词义选择', prompt: '「count」在本条的核心意思是：', options: ['数', '完全相反的意思', '一种古代钱币'], answer: '数', explain: 'count：数。' },
      { id: 'count.q2', senseId: 'count.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches count?', options: ['数', 'a kind of ancient coin', 'the past tense of be'], answer: '数', explain: '对的是「数」。' },
      { id: 'count.q3', senseId: 'count.s1', errorType: 'grammar', type: '词义选择', prompt: 'count 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'count.q4', senseId: 'count.s1', errorType: 'meaning', type: '词源', prompt: '记 count 时，哪句更稳妥？', options: ['先锁住「数」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数'] },
  });

  D('count on', {
    etymology: {
      origin: '现代英语固定说法「count on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'count on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'count on', text: '现代英语固定说法「count on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：指望。' },
      ],
      formationLogic: '核心义：指望。',
      mnemonic: '看到 count on，先说出「指望」。',
      note: '核心义：指望。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "count on" and asked the class to keep it as one unit.', chinese: '老师把「count on」圈出来，让全班把它当成一个整体。它表示指望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'count on.s1', en: 'In the margin she wrote "count on" so nobody would split the phrase.', zh: '她在页边写下「count on」，免得有人把这个说法拆开。意思是指望。', structure: 'count on / 表示 / 指望', grammar: 'verb，围绕「指望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of count on and lost the point.', right: 'Keep "count on" together: it means 指望.', reason: '「count on」要整块理解。', rule: '先确定 count on 是verb，再套「指望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'count on.q1', senseId: 'count on.s1', errorType: 'meaning', type: '词义选择', prompt: '「count on」在本条的核心意思是：', options: ['指望', '完全相反的意思', '一种古代钱币'], answer: '指望', explain: 'count on：指望。' },
      { id: 'count on.q2', senseId: 'count on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches count on?', options: ['指望', 'a kind of ancient coin', 'the past tense of be'], answer: '指望', explain: '对的是「指望」。' },
      { id: 'count on.q3', senseId: 'count on.s1', errorType: 'grammar', type: '词义选择', prompt: 'count on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'count on.q4', senseId: 'count on.s1', errorType: 'meaning', type: '词源', prompt: '记 count on 时，哪句更稳妥？', options: ['先锁住「指望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指望'] },
  });

  D('countdown', {
    etymology: {
      origin: '现代英语常用词「countdown」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'countdown', gloss: '倒数' },
      suffix: null,
      history: [
        { label: 'countdown', text: '现代英语常用词「countdown」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：倒数。' },
      ],
      formationLogic: '核心义：倒数。',
      mnemonic: '看到 countdown，先说出「倒数」。',
      note: '核心义：倒数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one countdown.', chinese: '这一章反复回到同一个点：倒数。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'countdown.s1', en: 'Without that countdown, the next paragraph is hard to follow.', zh: '没有这个倒数，下一段会很难读。', structure: 'countdown / 表示 / 倒数', grammar: 'noun，围绕「倒数」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the countdown.', right: 'He gave me some advice about the countdown.', reason: 'advice 不可数。名词 countdown 的单复数按词典词形记。', rule: '先确定 countdown 是noun，再套「倒数」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'countdown.q1', senseId: 'countdown.s1', errorType: 'meaning', type: '词义选择', prompt: '「countdown」在本条的核心意思是：', options: ['倒数', '完全相反的意思', '一种古代钱币'], answer: '倒数', explain: 'countdown：倒数。' },
      { id: 'countdown.q2', senseId: 'countdown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches countdown?', options: ['倒数', 'a kind of ancient coin', 'the past tense of be'], answer: '倒数', explain: '对的是「倒数」。' },
      { id: 'countdown.q3', senseId: 'countdown.s1', errorType: 'grammar', type: '词义选择', prompt: 'countdown 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'countdown.q4', senseId: 'countdown.s1', errorType: 'meaning', type: '词源', prompt: '记 countdown 时，哪句更稳妥？', options: ['先锁住「倒数」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倒数」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倒数'] },
  });

  D('countenance', {
    etymology: {
      origin: '英语派生：counten + -ance，词性转到「面容」。',
      prefix: null,
      root: { text: 'counten', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'countenance', text: '英语派生：counten + -ance，词性转到「面容」。' },
        { label: '现在', text: '核心用法是：面容。' },
      ],
      formationLogic: '先认词干 counten，再看词尾。',
      mnemonic: '看到 countenance，先说出「面容」。',
      note: '先认词干 counten，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one countenance.', chinese: '这一章反复回到同一个点：面容。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'countenance.s1', en: 'Without that countenance, the next paragraph is hard to follow.', zh: '没有这个面容，下一段会很难读。', structure: 'countenance / 表示 / 面容', grammar: 'noun，围绕「面容」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the countenance.', right: 'He gave me some advice about the countenance.', reason: 'advice 不可数。名词 countenance 的单复数按词典词形记。', rule: '先确定 countenance 是noun，再套「面容」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'countenance.q1', senseId: 'countenance.s1', errorType: 'meaning', type: '词义选择', prompt: '「countenance」在本条的核心意思是：', options: ['面容', '完全相反的意思', '一种古代钱币'], answer: '面容', explain: 'countenance：面容。' },
      { id: 'countenance.q2', senseId: 'countenance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches countenance?', options: ['面容', 'a kind of ancient coin', 'the past tense of be'], answer: '面容', explain: '对的是「面容」。' },
      { id: 'countenance.q3', senseId: 'countenance.s1', errorType: 'grammar', type: '词义选择', prompt: 'countenance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'countenance.q4', senseId: 'countenance.s1', errorType: 'meaning', type: '词源', prompt: '记 countenance 时，哪句更稳妥？', options: ['先锁住「面容」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面容」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面容'] },
  });

  D('counter', {
    etymology: {
      origin: '拉丁语 contra「对着」。柜台是人对着人做交易的地方。',
      prefix: null,
      root: { text: 'counter', gloss: '柜台' },
      suffix: null,
      history: [
        { label: 'counter', text: '拉丁语 contra「对着」。柜台是人对着人做交易的地方。' },
        { label: '现在', text: '核心用法是：柜台。' },
      ],
      formationLogic: '考试认现在的用法：柜台。',
      mnemonic: '看到 counter，先说出「柜台」。',
      note: '考试认现在的用法：柜台。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one counter.', chinese: '这一章反复回到同一个点：柜台。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counter.s1', en: 'Without that counter, the next paragraph is hard to follow.', zh: '没有这个柜台，下一段会很难读。', structure: 'counter / 表示 / 柜台', grammar: 'noun，围绕「柜台」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the counter.', right: 'He gave me some advice about the counter.', reason: 'advice 不可数。名词 counter 的单复数按词典词形记。', rule: '先确定 counter 是noun，再套「柜台」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counter.q1', senseId: 'counter.s1', errorType: 'meaning', type: '词义选择', prompt: '「counter」在本条的核心意思是：', options: ['柜台', '完全相反的意思', '一种古代钱币'], answer: '柜台', explain: 'counter：柜台。' },
      { id: 'counter.q2', senseId: 'counter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counter?', options: ['柜台', 'a kind of ancient coin', 'the past tense of be'], answer: '柜台', explain: '对的是「柜台」。' },
      { id: 'counter.q3', senseId: 'counter.s1', errorType: 'grammar', type: '词义选择', prompt: 'counter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'counter.q4', senseId: 'counter.s1', errorType: 'meaning', type: '词源', prompt: '记 counter 时，哪句更稳妥？', options: ['先锁住「柜台」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「柜台」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['柜台'] },
  });

  D('counteract', {
    etymology: {
      origin: '现代英语常用词「counteract」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'counteract', gloss: '抵消' },
      suffix: null,
      history: [
        { label: 'counteract', text: '现代英语常用词「counteract」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：抵消。' },
      ],
      formationLogic: '核心义：抵消。',
      mnemonic: '看到 counteract，先说出「抵消」。',
      note: '核心义：抵消。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to counteract before the office closed.', chinese: '他们同意在办公室关门前做这件事：抵消。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counteract.s1', en: 'The deadline forced the team to counteract that afternoon.', zh: '截止日期逼着小组在那天下午抵消。', structure: 'counteract / 表示 / 抵消', grammar: 'verb，围绕「抵消」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She counteracted it yesterday without checking the real past form.', right: 'Check the past form of "counteract" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 counteract 是verb，再套「抵消」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counteract.q1', senseId: 'counteract.s1', errorType: 'meaning', type: '词义选择', prompt: '「counteract」在本条的核心意思是：', options: ['抵消', '完全相反的意思', '一种古代钱币'], answer: '抵消', explain: 'counteract：抵消。' },
      { id: 'counteract.q2', senseId: 'counteract.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counteract?', options: ['抵消', 'a kind of ancient coin', 'the past tense of be'], answer: '抵消', explain: '对的是「抵消」。' },
      { id: 'counteract.q3', senseId: 'counteract.s1', errorType: 'grammar', type: '词义选择', prompt: 'counteract 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'counteract.q4', senseId: 'counteract.s1', errorType: 'meaning', type: '词源', prompt: '记 counteract 时，哪句更稳妥？', options: ['先锁住「抵消」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抵消」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抵消'] },
  });

  D('counterbalance', {
    etymology: {
      origin: '英语派生：counterbal + -ance，词性转到「平衡物」。',
      prefix: null,
      root: { text: 'counterbal', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'counterbalance', text: '英语派生：counterbal + -ance，词性转到「平衡物」。' },
        { label: '现在', text: '核心用法是：平衡物。' },
      ],
      formationLogic: '先认词干 counterbal，再看词尾。',
      mnemonic: '看到 counterbalance，先说出「平衡物」。',
      note: '先认词干 counterbal，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one counterbalance.', chinese: '这一章反复回到同一个点：平衡物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counterbalance.s1', en: 'Without that counterbalance, the next paragraph is hard to follow.', zh: '没有这个平衡物，下一段会很难读。', structure: 'counterbalance / 表示 / 平衡物', grammar: 'noun，围绕「平衡物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the counterbalance.', right: 'He gave me some advice about the counterbalance.', reason: 'advice 不可数。名词 counterbalance 的单复数按词典词形记。', rule: '先确定 counterbalance 是noun，再套「平衡物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counterbalance.q1', senseId: 'counterbalance.s1', errorType: 'meaning', type: '词义选择', prompt: '「counterbalance」在本条的核心意思是：', options: ['平衡物', '完全相反的意思', '一种古代钱币'], answer: '平衡物', explain: 'counterbalance：平衡物。' },
      { id: 'counterbalance.q2', senseId: 'counterbalance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counterbalance?', options: ['平衡物', 'a kind of ancient coin', 'the past tense of be'], answer: '平衡物', explain: '对的是「平衡物」。' },
      { id: 'counterbalance.q3', senseId: 'counterbalance.s1', errorType: 'grammar', type: '词义选择', prompt: 'counterbalance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'counterbalance.q4', senseId: 'counterbalance.s1', errorType: 'meaning', type: '词源', prompt: '记 counterbalance 时，哪句更稳妥？', options: ['先锁住「平衡物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「平衡物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['平衡物'] },
  });

  D('counterclockwise', {
    etymology: {
      origin: '现代英语常用词「counterclockwise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'counterclockwise', gloss: '逆时针方向（的）' },
      suffix: null,
      history: [
        { label: 'counterclockwise', text: '现代英语常用词「counterclockwise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：逆时针方向（的）。' },
      ],
      formationLogic: '核心义：逆时针方向（的）。',
      mnemonic: '看到 counterclockwise，先说出「逆时针方向（的）」。',
      note: '核心义：逆时针方向（的）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule counterclockwise, and the class followed.', chinese: '她把规则讲清楚了（逆时针方向（的）），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counterclockwise.s1', en: 'He nodded counterclockwise and returned to the notes.', zh: '他逆时针方向（的）地点了点头，又回去看笔记。', structure: 'counterclockwise / 表示 / 逆时针方向（的）', grammar: 'adverb，围绕「逆时针方向（的）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very counterclockwisely in the meeting.', right: 'She spoke counterclockwise in the meeting.', reason: 'counterclockwise 已经是副词，不要再加 -ly。', rule: '先确定 counterclockwise 是adverb，再套「逆时针方向（的）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counterclockwise.q1', senseId: 'counterclockwise.s1', errorType: 'meaning', type: '词义选择', prompt: '「counterclockwise」在本条的核心意思是：', options: ['逆时针方向（的）', '完全相反的意思', '一种古代钱币'], answer: '逆时针方向（的）', explain: 'counterclockwise：逆时针方向（的）。' },
      { id: 'counterclockwise.q2', senseId: 'counterclockwise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counterclockwise?', options: ['逆时针方向（的）', 'a kind of ancient coin', 'the past tense of be'], answer: '逆时针方向（的）', explain: '对的是「逆时针方向（的）」。' },
      { id: 'counterclockwise.q3', senseId: 'counterclockwise.s1', errorType: 'grammar', type: '词义选择', prompt: 'counterclockwise 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'counterclockwise.q4', senseId: 'counterclockwise.s1', errorType: 'meaning', type: '词源', prompt: '记 counterclockwise 时，哪句更稳妥？', options: ['先锁住「逆时针方向（的）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逆时针方向（的）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逆时针方向（的）'] },
  });

  D('counterfeit', {
    etymology: {
      origin: '现代英语常用词「counterfeit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'counterfeit', gloss: '伪造的' },
      suffix: null,
      history: [
        { label: 'counterfeit', text: '现代英语常用词「counterfeit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：伪造的。' },
      ],
      formationLogic: '核心义：伪造的。',
      mnemonic: '看到 counterfeit，先说出「伪造的」。',
      note: '核心义：伪造的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was counterfeit.', chinese: '即使是初读者也能看出，这个结果是伪造的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counterfeit.s1', en: 'They wanted a counterfeit answer, not a long speech.', zh: '他们要一个伪造的的答复，不要长篇发言。', structure: 'counterfeit / 表示 / 伪造的', grammar: 'adjective，围绕「伪造的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are counterfeit.', right: 'The news is counterfeit.', reason: 'news 作主语时动词用单数。', rule: '先确定 counterfeit 是adjective，再套「伪造的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counterfeit.q1', senseId: 'counterfeit.s1', errorType: 'meaning', type: '词义选择', prompt: '「counterfeit」在本条的核心意思是：', options: ['伪造的', '完全相反的意思', '一种古代钱币'], answer: '伪造的', explain: 'counterfeit：伪造的。' },
      { id: 'counterfeit.q2', senseId: 'counterfeit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counterfeit?', options: ['伪造的', 'a kind of ancient coin', 'the past tense of be'], answer: '伪造的', explain: '对的是「伪造的」。' },
      { id: 'counterfeit.q3', senseId: 'counterfeit.s1', errorType: 'grammar', type: '词义选择', prompt: 'counterfeit 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'counterfeit.q4', senseId: 'counterfeit.s1', errorType: 'meaning', type: '词源', prompt: '记 counterfeit 时，哪句更稳妥？', options: ['先锁住「伪造的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「伪造的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伪造的'] },
  });

  D('counterpart', {
    etymology: {
      origin: '现代英语常用词「counterpart」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'counterpart', gloss: '对应的人（或物）' },
      suffix: null,
      history: [
        { label: 'counterpart', text: '现代英语常用词「counterpart」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：对应的人（或物）。' },
      ],
      formationLogic: '核心义：对应的人（或物）。',
      mnemonic: '看到 counterpart，先说出「对应的人（或物）」。',
      note: '核心义：对应的人（或物）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one counterpart.', chinese: '这一章反复回到同一个点：对应的人（或物）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'counterpart.s1', en: 'Without that counterpart, the next paragraph is hard to follow.', zh: '没有这个对应的人（或物），下一段会很难读。', structure: 'counterpart / 表示 / 对应的人（或物）', grammar: 'noun，围绕「对应的人（或物）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the counterpart.', right: 'He gave me some advice about the counterpart.', reason: 'advice 不可数。名词 counterpart 的单复数按词典词形记。', rule: '先确定 counterpart 是noun，再套「对应的人（或物）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'counterpart.q1', senseId: 'counterpart.s1', errorType: 'meaning', type: '词义选择', prompt: '「counterpart」在本条的核心意思是：', options: ['对应的人（或物）', '完全相反的意思', '一种古代钱币'], answer: '对应的人（或物）', explain: 'counterpart：对应的人（或物）。' },
      { id: 'counterpart.q2', senseId: 'counterpart.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches counterpart?', options: ['对应的人（或物）', 'a kind of ancient coin', 'the past tense of be'], answer: '对应的人（或物）', explain: '对的是「对应的人（或物）」。' },
      { id: 'counterpart.q3', senseId: 'counterpart.s1', errorType: 'grammar', type: '词义选择', prompt: 'counterpart 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'counterpart.q4', senseId: 'counterpart.s1', errorType: 'meaning', type: '词源', prompt: '记 counterpart 时，哪句更稳妥？', options: ['先锁住「对应的人（或物）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「对应的人（或物）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对应的人（或物）'] },
  });

  D('countless', {
    etymology: {
      origin: '英语派生：count + -less，词性转到「无数的」。',
      prefix: null,
      root: { text: 'count', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'countless', text: '英语派生：count + -less，词性转到「无数的」。' },
        { label: '现在', text: '核心用法是：无数的。' },
      ],
      formationLogic: '先认词干 count，再看词尾。',
      mnemonic: '看到 countless，先说出「无数的」。',
      note: '先认词干 count，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was countless.', chinese: '即使是初读者也能看出，这个结果是无数的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'countless.s1', en: 'They wanted a countless answer, not a long speech.', zh: '他们要一个无数的的答复，不要长篇发言。', structure: 'countless / 表示 / 无数的', grammar: 'adjective，围绕「无数的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are countless.', right: 'The news is countless.', reason: 'news 作主语时动词用单数。', rule: '先确定 countless 是adjective，再套「无数的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'countless.q1', senseId: 'countless.s1', errorType: 'meaning', type: '词义选择', prompt: '「countless」在本条的核心意思是：', options: ['无数的', '完全相反的意思', '一种古代钱币'], answer: '无数的', explain: 'countless：无数的。' },
      { id: 'countless.q2', senseId: 'countless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches countless?', options: ['无数的', 'a kind of ancient coin', 'the past tense of be'], answer: '无数的', explain: '对的是「无数的」。' },
      { id: 'countless.q3', senseId: 'countless.s1', errorType: 'grammar', type: '词义选择', prompt: 'countless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'countless.q4', senseId: 'countless.s1', errorType: 'meaning', type: '词源', prompt: '记 countless 时，哪句更稳妥？', options: ['先锁住「无数的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「无数的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['无数的'] },
  });

  D('country', {
    etymology: {
      origin: '拉丁语 contra 一系，经法语「对面的土地」。',
      prefix: null,
      root: { text: 'country', gloss: '国家' },
      suffix: null,
      history: [
        { label: 'country', text: '拉丁语 contra 一系，经法语「对面的土地」。' },
        { label: '现在', text: '核心用法是：国家。' },
      ],
      formationLogic: '考试认现在的用法：国家。',
      mnemonic: '看到 country，先说出「国家」。',
      note: '考试认现在的用法：国家。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one country.', chinese: '这一章反复回到同一个点：国家。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'country.s1', en: 'Without that country, the next paragraph is hard to follow.', zh: '没有这个国家，下一段会很难读。', structure: 'country / 表示 / 国家', grammar: 'noun，围绕「国家」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the country.', right: 'He gave me some advice about the country.', reason: 'advice 不可数。名词 country 的单复数按词典词形记。', rule: '先确定 country 是noun，再套「国家」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'country.q1', senseId: 'country.s1', errorType: 'meaning', type: '词义选择', prompt: '「country」在本条的核心意思是：', options: ['国家', '完全相反的意思', '一种古代钱币'], answer: '国家', explain: 'country：国家。' },
      { id: 'country.q2', senseId: 'country.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches country?', options: ['国家', 'a kind of ancient coin', 'the past tense of be'], answer: '国家', explain: '对的是「国家」。' },
      { id: 'country.q3', senseId: 'country.s1', errorType: 'grammar', type: '词义选择', prompt: 'country 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'country.q4', senseId: 'country.s1', errorType: 'meaning', type: '词源', prompt: '记 country 时，哪句更稳妥？', options: ['先锁住「国家」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「国家」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['国家'] },
  });

  D('countryside', {
    etymology: {
      origin: 'country + side。',
      prefix: null,
      root: { text: 'countryside', gloss: '乡村' },
      suffix: null,
      history: [
        { label: 'countryside', text: 'country + side。' },
        { label: '现在', text: '核心用法是：乡村。' },
      ],
      formationLogic: '考试认现在的用法：乡村。',
      mnemonic: '看到 countryside，先说出「乡村」。',
      note: '考试认现在的用法：乡村。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one countryside.', chinese: '这一章反复回到同一个点：乡村。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'countryside.s1', en: 'Without that countryside, the next paragraph is hard to follow.', zh: '没有这个乡村，下一段会很难读。', structure: 'countryside / 表示 / 乡村', grammar: 'noun，围绕「乡村」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the countryside.', right: 'He gave me some advice about the countryside.', reason: 'advice 不可数。名词 countryside 的单复数按词典词形记。', rule: '先确定 countryside 是noun，再套「乡村」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'countryside.q1', senseId: 'countryside.s1', errorType: 'meaning', type: '词义选择', prompt: '「countryside」在本条的核心意思是：', options: ['乡村', '完全相反的意思', '一种古代钱币'], answer: '乡村', explain: 'countryside：乡村。' },
      { id: 'countryside.q2', senseId: 'countryside.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches countryside?', options: ['乡村', 'a kind of ancient coin', 'the past tense of be'], answer: '乡村', explain: '对的是「乡村」。' },
      { id: 'countryside.q3', senseId: 'countryside.s1', errorType: 'grammar', type: '词义选择', prompt: 'countryside 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'countryside.q4', senseId: 'countryside.s1', errorType: 'meaning', type: '词源', prompt: '记 countryside 时，哪句更稳妥？', options: ['先锁住「乡村」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乡村」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乡村'] },
  });

  D('countrywide', {
    etymology: {
      origin: '现代英语常用词「countrywide」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'countrywide', gloss: '全国范围的' },
      suffix: null,
      history: [
        { label: 'countrywide', text: '现代英语常用词「countrywide」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：全国范围的。' },
      ],
      formationLogic: '核心义：全国范围的。',
      mnemonic: '看到 countrywide，先说出「全国范围的」。',
      note: '核心义：全国范围的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was countrywide.', chinese: '即使是初读者也能看出，这个结果是全国范围的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'countrywide.s1', en: 'They wanted a countrywide answer, not a long speech.', zh: '他们要一个全国范围的的答复，不要长篇发言。', structure: 'countrywide / 表示 / 全国范围的', grammar: 'adjective，围绕「全国范围的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are countrywide.', right: 'The news is countrywide.', reason: 'news 作主语时动词用单数。', rule: '先确定 countrywide 是adjective，再套「全国范围的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'countrywide.q1', senseId: 'countrywide.s1', errorType: 'meaning', type: '词义选择', prompt: '「countrywide」在本条的核心意思是：', options: ['全国范围的', '完全相反的意思', '一种古代钱币'], answer: '全国范围的', explain: 'countrywide：全国范围的。' },
      { id: 'countrywide.q2', senseId: 'countrywide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches countrywide?', options: ['全国范围的', 'a kind of ancient coin', 'the past tense of be'], answer: '全国范围的', explain: '对的是「全国范围的」。' },
      { id: 'countrywide.q3', senseId: 'countrywide.s1', errorType: 'grammar', type: '词义选择', prompt: 'countrywide 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'countrywide.q4', senseId: 'countrywide.s1', errorType: 'meaning', type: '词源', prompt: '记 countrywide 时，哪句更稳妥？', options: ['先锁住「全国范围的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全国范围的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全国范围的'] },
  });

  D('county', {
    etymology: {
      origin: '与 count「伯爵」同源。伯爵的辖地。',
      prefix: null,
      root: { text: 'county', gloss: '郡' },
      suffix: null,
      history: [
        { label: 'county', text: '与 count「伯爵」同源。伯爵的辖地。' },
        { label: '现在', text: '核心用法是：郡。' },
      ],
      formationLogic: '考试认现在的用法：郡。',
      mnemonic: '看到 county，先说出「郡」。',
      note: '考试认现在的用法：郡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one county.', chinese: '这一章反复回到同一个点：郡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'county.s1', en: 'Without that county, the next paragraph is hard to follow.', zh: '没有这个郡，下一段会很难读。', structure: 'county / 表示 / 郡', grammar: 'noun，围绕「郡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the county.', right: 'He gave me some advice about the county.', reason: 'advice 不可数。名词 county 的单复数按词典词形记。', rule: '先确定 county 是noun，再套「郡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'county.q1', senseId: 'county.s1', errorType: 'meaning', type: '词义选择', prompt: '「county」在本条的核心意思是：', options: ['郡', '完全相反的意思', '一种古代钱币'], answer: '郡', explain: 'county：郡。' },
      { id: 'county.q2', senseId: 'county.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches county?', options: ['郡', 'a kind of ancient coin', 'the past tense of be'], answer: '郡', explain: '对的是「郡」。' },
      { id: 'county.q3', senseId: 'county.s1', errorType: 'grammar', type: '词义选择', prompt: 'county 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'county.q4', senseId: 'county.s1', errorType: 'meaning', type: '词源', prompt: '记 county 时，哪句更稳妥？', options: ['先锁住「郡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「郡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['郡'] },
  });

  D('coup', {
    etymology: {
      origin: '现代英语常用词「coup」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coup', gloss: '政变' },
      suffix: null,
      history: [
        { label: 'coup', text: '现代英语常用词「coup」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：政变。' },
      ],
      formationLogic: '核心义：政变。',
      mnemonic: '看到 coup，先说出「政变」。',
      note: '核心义：政变。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coup.', chinese: '这一章反复回到同一个点：政变。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coup.s1', en: 'Without that coup, the next paragraph is hard to follow.', zh: '没有这个政变，下一段会很难读。', structure: 'coup / 表示 / 政变', grammar: 'noun，围绕「政变」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coup.', right: 'He gave me some advice about the coup.', reason: 'advice 不可数。名词 coup 的单复数按词典词形记。', rule: '先确定 coup 是noun，再套「政变」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coup.q1', senseId: 'coup.s1', errorType: 'meaning', type: '词义选择', prompt: '「coup」在本条的核心意思是：', options: ['政变', '完全相反的意思', '一种古代钱币'], answer: '政变', explain: 'coup：政变。' },
      { id: 'coup.q2', senseId: 'coup.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coup?', options: ['政变', 'a kind of ancient coin', 'the past tense of be'], answer: '政变', explain: '对的是「政变」。' },
      { id: 'coup.q3', senseId: 'coup.s1', errorType: 'grammar', type: '词义选择', prompt: 'coup 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coup.q4', senseId: 'coup.s1', errorType: 'meaning', type: '词源', prompt: '记 coup 时，哪句更稳妥？', options: ['先锁住「政变」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「政变」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['政变'] },
  });

  D('couple', {
    etymology: {
      origin: '拉丁语 copula「纽带」。',
      prefix: null,
      root: { text: 'couple', gloss: '一对' },
      suffix: null,
      history: [
        { label: 'couple', text: '拉丁语 copula「纽带」。' },
        { label: '现在', text: '核心用法是：一对。' },
      ],
      formationLogic: '考试认现在的用法：一对。',
      mnemonic: '看到 couple，先说出「一对」。',
      note: '考试认现在的用法：一对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one couple.', chinese: '这一章反复回到同一个点：一对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'couple.s1', en: 'Without that couple, the next paragraph is hard to follow.', zh: '没有这个一对，下一段会很难读。', structure: 'couple / 表示 / 一对', grammar: 'noun，围绕「一对」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the couple.', right: 'He gave me some advice about the couple.', reason: 'advice 不可数。名词 couple 的单复数按词典词形记。', rule: '先确定 couple 是noun，再套「一对」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'couple.q1', senseId: 'couple.s1', errorType: 'meaning', type: '词义选择', prompt: '「couple」在本条的核心意思是：', options: ['一对', '完全相反的意思', '一种古代钱币'], answer: '一对', explain: 'couple：一对。' },
      { id: 'couple.q2', senseId: 'couple.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches couple?', options: ['一对', 'a kind of ancient coin', 'the past tense of be'], answer: '一对', explain: '对的是「一对」。' },
      { id: 'couple.q3', senseId: 'couple.s1', errorType: 'grammar', type: '词义选择', prompt: 'couple 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'couple.q4', senseId: 'couple.s1', errorType: 'meaning', type: '词源', prompt: '记 couple 时，哪句更稳妥？', options: ['先锁住「一对」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一对」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一对'] },
  });

  D('coupon', {
    etymology: {
      origin: '现代英语常用词「coupon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coupon', gloss: '优惠券' },
      suffix: null,
      history: [
        { label: 'coupon', text: '现代英语常用词「coupon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：优惠券。' },
      ],
      formationLogic: '核心义：优惠券。',
      mnemonic: '看到 coupon，先说出「优惠券」。',
      note: '核心义：优惠券。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coupon.', chinese: '这一章反复回到同一个点：优惠券。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coupon.s1', en: 'Without that coupon, the next paragraph is hard to follow.', zh: '没有这个优惠券，下一段会很难读。', structure: 'coupon / 表示 / 优惠券', grammar: 'noun，围绕「优惠券」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coupon.', right: 'He gave me some advice about the coupon.', reason: 'advice 不可数。名词 coupon 的单复数按词典词形记。', rule: '先确定 coupon 是noun，再套「优惠券」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coupon.q1', senseId: 'coupon.s1', errorType: 'meaning', type: '词义选择', prompt: '「coupon」在本条的核心意思是：', options: ['优惠券', '完全相反的意思', '一种古代钱币'], answer: '优惠券', explain: 'coupon：优惠券。' },
      { id: 'coupon.q2', senseId: 'coupon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coupon?', options: ['优惠券', 'a kind of ancient coin', 'the past tense of be'], answer: '优惠券', explain: '对的是「优惠券」。' },
      { id: 'coupon.q3', senseId: 'coupon.s1', errorType: 'grammar', type: '词义选择', prompt: 'coupon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coupon.q4', senseId: 'coupon.s1', errorType: 'meaning', type: '词源', prompt: '记 coupon 时，哪句更稳妥？', options: ['先锁住「优惠券」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「优惠券」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['优惠券'] },
  });

  D('courage', {
    etymology: {
      origin: '拉丁语 cor「心」。心里有力量。',
      prefix: null,
      root: { text: 'courage', gloss: '勇气' },
      suffix: null,
      history: [
        { label: 'courage', text: '拉丁语 cor「心」。心里有力量。' },
        { label: '现在', text: '核心用法是：勇气。' },
      ],
      formationLogic: '考试认现在的用法：勇气。',
      mnemonic: '看到 courage，先说出「勇气」。',
      note: '考试认现在的用法：勇气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one courage.', chinese: '这一章反复回到同一个点：勇气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'courage.s1', en: 'Without that courage, the next paragraph is hard to follow.', zh: '没有这个勇气，下一段会很难读。', structure: 'courage / 表示 / 勇气', grammar: 'noun，围绕「勇气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the courage.', right: 'He gave me some advice about the courage.', reason: 'advice 不可数。名词 courage 的单复数按词典词形记。', rule: '先确定 courage 是noun，再套「勇气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'courage.q1', senseId: 'courage.s1', errorType: 'meaning', type: '词义选择', prompt: '「courage」在本条的核心意思是：', options: ['勇气', '完全相反的意思', '一种古代钱币'], answer: '勇气', explain: 'courage：勇气。' },
      { id: 'courage.q2', senseId: 'courage.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches courage?', options: ['勇气', 'a kind of ancient coin', 'the past tense of be'], answer: '勇气', explain: '对的是「勇气」。' },
      { id: 'courage.q3', senseId: 'courage.s1', errorType: 'grammar', type: '词义选择', prompt: 'courage 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'courage.q4', senseId: 'courage.s1', errorType: 'meaning', type: '词源', prompt: '记 courage 时，哪句更稳妥？', options: ['先锁住「勇气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勇气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勇气'] },
  });

  D('courageous', {
    etymology: {
      origin: '英语派生：courage + -ous，词性转到「勇敢的」。',
      prefix: null,
      root: { text: 'courage', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'courageous', text: '英语派生：courage + -ous，词性转到「勇敢的」。' },
        { label: '现在', text: '核心用法是：勇敢的。' },
      ],
      formationLogic: '先认词干 courage，再看词尾。',
      mnemonic: '看到 courageous，先说出「勇敢的」。',
      note: '先认词干 courage，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was courageous.', chinese: '即使是初读者也能看出，这个结果是勇敢的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'courageous.s1', en: 'They wanted a courageous answer, not a long speech.', zh: '他们要一个勇敢的的答复，不要长篇发言。', structure: 'courageous / 表示 / 勇敢的', grammar: 'adjective，围绕「勇敢的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are courageous.', right: 'The news is courageous.', reason: 'news 作主语时动词用单数。', rule: '先确定 courageous 是adjective，再套「勇敢的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'courageous.q1', senseId: 'courageous.s1', errorType: 'meaning', type: '词义选择', prompt: '「courageous」在本条的核心意思是：', options: ['勇敢的', '完全相反的意思', '一种古代钱币'], answer: '勇敢的', explain: 'courageous：勇敢的。' },
      { id: 'courageous.q2', senseId: 'courageous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches courageous?', options: ['勇敢的', 'a kind of ancient coin', 'the past tense of be'], answer: '勇敢的', explain: '对的是「勇敢的」。' },
      { id: 'courageous.q3', senseId: 'courageous.s1', errorType: 'grammar', type: '词义选择', prompt: 'courageous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'courageous.q4', senseId: 'courageous.s1', errorType: 'meaning', type: '词源', prompt: '记 courageous 时，哪句更稳妥？', options: ['先锁住「勇敢的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勇敢的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勇敢的'] },
  });

  D('course', {
    etymology: {
      origin: '拉丁语 cursus「跑」。课程、路线都是一条跑法。',
      prefix: null,
      root: { text: 'course', gloss: '课程' },
      suffix: null,
      history: [
        { label: 'course', text: '拉丁语 cursus「跑」。课程、路线都是一条跑法。' },
        { label: '现在', text: '核心用法是：课程。' },
      ],
      formationLogic: '考试认现在的用法：课程。',
      mnemonic: '看到 course，先说出「课程」。',
      note: '考试认现在的用法：课程。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one course.', chinese: '这一章反复回到同一个点：课程。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'course.s1', en: 'Without that course, the next paragraph is hard to follow.', zh: '没有这个课程，下一段会很难读。', structure: 'course / 表示 / 课程', grammar: 'noun，围绕「课程」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the course.', right: 'He gave me some advice about the course.', reason: 'advice 不可数。名词 course 的单复数按词典词形记。', rule: '先确定 course 是noun，再套「课程」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'course.q1', senseId: 'course.s1', errorType: 'meaning', type: '词义选择', prompt: '「course」在本条的核心意思是：', options: ['课程', '完全相反的意思', '一种古代钱币'], answer: '课程', explain: 'course：课程。' },
      { id: 'course.q2', senseId: 'course.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches course?', options: ['课程', 'a kind of ancient coin', 'the past tense of be'], answer: '课程', explain: '对的是「课程」。' },
      { id: 'course.q3', senseId: 'course.s1', errorType: 'grammar', type: '词义选择', prompt: 'course 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'course.q4', senseId: 'course.s1', errorType: 'meaning', type: '词源', prompt: '记 course 时，哪句更稳妥？', options: ['先锁住「课程」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「课程」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['课程'] },
  });

  D('coursebook', {
    etymology: {
      origin: '现代英语常用词「coursebook」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coursebook', gloss: '课本' },
      suffix: null,
      history: [
        { label: 'coursebook', text: '现代英语常用词「coursebook」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：课本。' },
      ],
      formationLogic: '核心义：课本。',
      mnemonic: '看到 coursebook，先说出「课本」。',
      note: '核心义：课本。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coursebook.', chinese: '这一章反复回到同一个点：课本。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coursebook.s1', en: 'Without that coursebook, the next paragraph is hard to follow.', zh: '没有这个课本，下一段会很难读。', structure: 'coursebook / 表示 / 课本', grammar: 'noun，围绕「课本」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coursebook.', right: 'He gave me some advice about the coursebook.', reason: 'advice 不可数。名词 coursebook 的单复数按词典词形记。', rule: '先确定 coursebook 是noun，再套「课本」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coursebook.q1', senseId: 'coursebook.s1', errorType: 'meaning', type: '词义选择', prompt: '「coursebook」在本条的核心意思是：', options: ['课本', '完全相反的意思', '一种古代钱币'], answer: '课本', explain: 'coursebook：课本。' },
      { id: 'coursebook.q2', senseId: 'coursebook.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coursebook?', options: ['课本', 'a kind of ancient coin', 'the past tense of be'], answer: '课本', explain: '对的是「课本」。' },
      { id: 'coursebook.q3', senseId: 'coursebook.s1', errorType: 'grammar', type: '词义选择', prompt: 'coursebook 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coursebook.q4', senseId: 'coursebook.s1', errorType: 'meaning', type: '词源', prompt: '记 coursebook 时，哪句更稳妥？', options: ['先锁住「课本」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「课本」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['课本'] },
  });

  D('court', {
    etymology: {
      origin: '拉丁语 cohors「围场」。法庭和宫廷都是围起来的场子。',
      prefix: null,
      root: { text: 'court', gloss: '法庭' },
      suffix: null,
      history: [
        { label: 'court', text: '拉丁语 cohors「围场」。法庭和宫廷都是围起来的场子。' },
        { label: '现在', text: '核心用法是：法庭。' },
      ],
      formationLogic: '考试认现在的用法：法庭。',
      mnemonic: '看到 court，先说出「法庭」。',
      note: '考试认现在的用法：法庭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one court.', chinese: '这一章反复回到同一个点：法庭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'court.s1', en: 'Without that court, the next paragraph is hard to follow.', zh: '没有这个法庭，下一段会很难读。', structure: 'court / 表示 / 法庭', grammar: 'noun，围绕「法庭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the court.', right: 'He gave me some advice about the court.', reason: 'advice 不可数。名词 court 的单复数按词典词形记。', rule: '先确定 court 是noun，再套「法庭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'court.q1', senseId: 'court.s1', errorType: 'meaning', type: '词义选择', prompt: '「court」在本条的核心意思是：', options: ['法庭', '完全相反的意思', '一种古代钱币'], answer: '法庭', explain: 'court：法庭。' },
      { id: 'court.q2', senseId: 'court.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches court?', options: ['法庭', 'a kind of ancient coin', 'the past tense of be'], answer: '法庭', explain: '对的是「法庭」。' },
      { id: 'court.q3', senseId: 'court.s1', errorType: 'grammar', type: '词义选择', prompt: 'court 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'court.q4', senseId: 'court.s1', errorType: 'meaning', type: '词源', prompt: '记 court 时，哪句更稳妥？', options: ['先锁住「法庭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「法庭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['法庭'] },
  });

  D('courteous', {
    etymology: {
      origin: '英语派生：courte + -ous，词性转到「有礼貌的」。',
      prefix: null,
      root: { text: 'courte', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'courteous', text: '英语派生：courte + -ous，词性转到「有礼貌的」。' },
        { label: '现在', text: '核心用法是：有礼貌的。' },
      ],
      formationLogic: '先认词干 courte，再看词尾。',
      mnemonic: '看到 courteous，先说出「有礼貌的」。',
      note: '先认词干 courte，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was courteous.', chinese: '即使是初读者也能看出，这个结果是有礼貌的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'courteous.s1', en: 'They wanted a courteous answer, not a long speech.', zh: '他们要一个有礼貌的的答复，不要长篇发言。', structure: 'courteous / 表示 / 有礼貌的', grammar: 'adjective，围绕「有礼貌的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are courteous.', right: 'The news is courteous.', reason: 'news 作主语时动词用单数。', rule: '先确定 courteous 是adjective，再套「有礼貌的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'courteous.q1', senseId: 'courteous.s1', errorType: 'meaning', type: '词义选择', prompt: '「courteous」在本条的核心意思是：', options: ['有礼貌的', '完全相反的意思', '一种古代钱币'], answer: '有礼貌的', explain: 'courteous：有礼貌的。' },
      { id: 'courteous.q2', senseId: 'courteous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches courteous?', options: ['有礼貌的', 'a kind of ancient coin', 'the past tense of be'], answer: '有礼貌的', explain: '对的是「有礼貌的」。' },
      { id: 'courteous.q3', senseId: 'courteous.s1', errorType: 'grammar', type: '词义选择', prompt: 'courteous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'courteous.q4', senseId: 'courteous.s1', errorType: 'meaning', type: '词源', prompt: '记 courteous 时，哪句更稳妥？', options: ['先锁住「有礼貌的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有礼貌的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有礼貌的'] },
  });

  D('courtesy', {
    etymology: {
      origin: '现代英语常用词「courtesy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'courtesy', gloss: '礼貌' },
      suffix: null,
      history: [
        { label: 'courtesy', text: '现代英语常用词「courtesy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：礼貌。' },
      ],
      formationLogic: '核心义：礼貌。',
      mnemonic: '看到 courtesy，先说出「礼貌」。',
      note: '核心义：礼貌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one courtesy.', chinese: '这一章反复回到同一个点：礼貌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'courtesy.s1', en: 'Without that courtesy, the next paragraph is hard to follow.', zh: '没有这个礼貌，下一段会很难读。', structure: 'courtesy / 表示 / 礼貌', grammar: 'noun，围绕「礼貌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the courtesy.', right: 'He gave me some advice about the courtesy.', reason: 'advice 不可数。名词 courtesy 的单复数按词典词形记。', rule: '先确定 courtesy 是noun，再套「礼貌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'courtesy.q1', senseId: 'courtesy.s1', errorType: 'meaning', type: '词义选择', prompt: '「courtesy」在本条的核心意思是：', options: ['礼貌', '完全相反的意思', '一种古代钱币'], answer: '礼貌', explain: 'courtesy：礼貌。' },
      { id: 'courtesy.q2', senseId: 'courtesy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches courtesy?', options: ['礼貌', 'a kind of ancient coin', 'the past tense of be'], answer: '礼貌', explain: '对的是「礼貌」。' },
      { id: 'courtesy.q3', senseId: 'courtesy.s1', errorType: 'grammar', type: '词义选择', prompt: 'courtesy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'courtesy.q4', senseId: 'courtesy.s1', errorType: 'meaning', type: '词源', prompt: '记 courtesy 时，哪句更稳妥？', options: ['先锁住「礼貌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「礼貌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['礼貌'] },
  });

  D('courtyard', {
    etymology: {
      origin: '现代英语常用词「courtyard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'courtyard', gloss: '庭院' },
      suffix: null,
      history: [
        { label: 'courtyard', text: '现代英语常用词「courtyard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：庭院。' },
      ],
      formationLogic: '核心义：庭院。',
      mnemonic: '看到 courtyard，先说出「庭院」。',
      note: '核心义：庭院。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one courtyard.', chinese: '这一章反复回到同一个点：庭院。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'courtyard.s1', en: 'Without that courtyard, the next paragraph is hard to follow.', zh: '没有这个庭院，下一段会很难读。', structure: 'courtyard / 表示 / 庭院', grammar: 'noun，围绕「庭院」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the courtyard.', right: 'He gave me some advice about the courtyard.', reason: 'advice 不可数。名词 courtyard 的单复数按词典词形记。', rule: '先确定 courtyard 是noun，再套「庭院」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'courtyard.q1', senseId: 'courtyard.s1', errorType: 'meaning', type: '词义选择', prompt: '「courtyard」在本条的核心意思是：', options: ['庭院', '完全相反的意思', '一种古代钱币'], answer: '庭院', explain: 'courtyard：庭院。' },
      { id: 'courtyard.q2', senseId: 'courtyard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches courtyard?', options: ['庭院', 'a kind of ancient coin', 'the past tense of be'], answer: '庭院', explain: '对的是「庭院」。' },
      { id: 'courtyard.q3', senseId: 'courtyard.s1', errorType: 'grammar', type: '词义选择', prompt: 'courtyard 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'courtyard.q4', senseId: 'courtyard.s1', errorType: 'meaning', type: '词源', prompt: '记 courtyard 时，哪句更稳妥？', options: ['先锁住「庭院」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「庭院」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['庭院'] },
  });

  D('cousin', {
    etymology: {
      origin: '拉丁语 consobrinus「表亲」。',
      prefix: null,
      root: { text: 'cousin', gloss: '堂（表）兄弟' },
      suffix: null,
      history: [
        { label: 'cousin', text: '拉丁语 consobrinus「表亲」。' },
        { label: '现在', text: '核心用法是：堂（表）兄弟。' },
      ],
      formationLogic: '考试认现在的用法：堂（表）兄弟。',
      mnemonic: '看到 cousin，先说出「堂（表）兄弟」。',
      note: '考试认现在的用法：堂（表）兄弟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cousin.', chinese: '这一章反复回到同一个点：堂（表）兄弟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cousin.s1', en: 'Without that cousin, the next paragraph is hard to follow.', zh: '没有这个堂（表）兄弟，下一段会很难读。', structure: 'cousin / 表示 / 堂（表）兄弟', grammar: 'noun，围绕「堂（表）兄弟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cousin.', right: 'He gave me some advice about the cousin.', reason: 'advice 不可数。名词 cousin 的单复数按词典词形记。', rule: '先确定 cousin 是noun，再套「堂（表）兄弟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cousin.q1', senseId: 'cousin.s1', errorType: 'meaning', type: '词义选择', prompt: '「cousin」在本条的核心意思是：', options: ['堂（表）兄弟', '完全相反的意思', '一种古代钱币'], answer: '堂（表）兄弟', explain: 'cousin：堂（表）兄弟。' },
      { id: 'cousin.q2', senseId: 'cousin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cousin?', options: ['堂（表）兄弟', 'a kind of ancient coin', 'the past tense of be'], answer: '堂（表）兄弟', explain: '对的是「堂（表）兄弟」。' },
      { id: 'cousin.q3', senseId: 'cousin.s1', errorType: 'grammar', type: '词义选择', prompt: 'cousin 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cousin.q4', senseId: 'cousin.s1', errorType: 'meaning', type: '词源', prompt: '记 cousin 时，哪句更稳妥？', options: ['先锁住「堂（表）兄弟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「堂（表）兄弟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['堂（表）兄弟'] },
  });

  D('covenant', {
    etymology: {
      origin: '现代英语常用词「covenant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'covenant', gloss: '契约' },
      suffix: null,
      history: [
        { label: 'covenant', text: '现代英语常用词「covenant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：契约。' },
      ],
      formationLogic: '核心义：契约。',
      mnemonic: '看到 covenant，先说出「契约」。',
      note: '核心义：契约。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one covenant.', chinese: '这一章反复回到同一个点：契约。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'covenant.s1', en: 'Without that covenant, the next paragraph is hard to follow.', zh: '没有这个契约，下一段会很难读。', structure: 'covenant / 表示 / 契约', grammar: 'noun，围绕「契约」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the covenant.', right: 'He gave me some advice about the covenant.', reason: 'advice 不可数。名词 covenant 的单复数按词典词形记。', rule: '先确定 covenant 是noun，再套「契约」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'covenant.q1', senseId: 'covenant.s1', errorType: 'meaning', type: '词义选择', prompt: '「covenant」在本条的核心意思是：', options: ['契约', '完全相反的意思', '一种古代钱币'], answer: '契约', explain: 'covenant：契约。' },
      { id: 'covenant.q2', senseId: 'covenant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches covenant?', options: ['契约', 'a kind of ancient coin', 'the past tense of be'], answer: '契约', explain: '对的是「契约」。' },
      { id: 'covenant.q3', senseId: 'covenant.s1', errorType: 'grammar', type: '词义选择', prompt: 'covenant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'covenant.q4', senseId: 'covenant.s1', errorType: 'meaning', type: '词源', prompt: '记 covenant 时，哪句更稳妥？', options: ['先锁住「契约」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「契约」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['契约'] },
  });

  D('cover', {
    etymology: {
      origin: '拉丁语 cooperire「完全盖住」。',
      prefix: null,
      root: { text: 'cover', gloss: '覆盖' },
      suffix: null,
      history: [
        { label: 'cover', text: '拉丁语 cooperire「完全盖住」。' },
        { label: '现在', text: '核心用法是：覆盖。' },
      ],
      formationLogic: '考试认现在的用法：覆盖。',
      mnemonic: '看到 cover，先说出「覆盖」。',
      note: '考试认现在的用法：覆盖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cover before the office closed.', chinese: '他们同意在办公室关门前做这件事：覆盖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cover.s1', en: 'The deadline forced the team to cover that afternoon.', zh: '截止日期逼着小组在那天下午覆盖。', structure: 'cover / 表示 / 覆盖', grammar: 'verb，围绕「覆盖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She covered it yesterday without checking the real past form.', right: 'Check the past form of "cover" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cover 是verb，再套「覆盖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cover.q1', senseId: 'cover.s1', errorType: 'meaning', type: '词义选择', prompt: '「cover」在本条的核心意思是：', options: ['覆盖', '完全相反的意思', '一种古代钱币'], answer: '覆盖', explain: 'cover：覆盖。' },
      { id: 'cover.q2', senseId: 'cover.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cover?', options: ['覆盖', 'a kind of ancient coin', 'the past tense of be'], answer: '覆盖', explain: '对的是「覆盖」。' },
      { id: 'cover.q3', senseId: 'cover.s1', errorType: 'grammar', type: '词义选择', prompt: 'cover 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cover.q4', senseId: 'cover.s1', errorType: 'meaning', type: '词源', prompt: '记 cover 时，哪句更稳妥？', options: ['先锁住「覆盖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「覆盖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['覆盖'] },
  });

  D('coverall', {
    etymology: {
      origin: '现代英语常用词「coverall」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coverall', gloss: '工装连体服' },
      suffix: null,
      history: [
        { label: 'coverall', text: '现代英语常用词「coverall」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：工装连体服。' },
      ],
      formationLogic: '核心义：工装连体服。',
      mnemonic: '看到 coverall，先说出「工装连体服」。',
      note: '核心义：工装连体服。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coverall.', chinese: '这一章反复回到同一个点：工装连体服。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coverall.s1', en: 'Without that coverall, the next paragraph is hard to follow.', zh: '没有这个工装连体服，下一段会很难读。', structure: 'coverall / 表示 / 工装连体服', grammar: 'noun，围绕「工装连体服」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coverall.', right: 'He gave me some advice about the coverall.', reason: 'advice 不可数。名词 coverall 的单复数按词典词形记。', rule: '先确定 coverall 是noun，再套「工装连体服」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coverall.q1', senseId: 'coverall.s1', errorType: 'meaning', type: '词义选择', prompt: '「coverall」在本条的核心意思是：', options: ['工装连体服', '完全相反的意思', '一种古代钱币'], answer: '工装连体服', explain: 'coverall：工装连体服。' },
      { id: 'coverall.q2', senseId: 'coverall.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coverall?', options: ['工装连体服', 'a kind of ancient coin', 'the past tense of be'], answer: '工装连体服', explain: '对的是「工装连体服」。' },
      { id: 'coverall.q3', senseId: 'coverall.s1', errorType: 'grammar', type: '词义选择', prompt: 'coverall 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coverall.q4', senseId: 'coverall.s1', errorType: 'meaning', type: '词源', prompt: '记 coverall 时，哪句更稳妥？', options: ['先锁住「工装连体服」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「工装连体服」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['工装连体服'] },
  });

  D('covering', {
    etymology: {
      origin: '英语派生：cover + -ing，词性转到「覆盖物」。',
      prefix: null,
      root: { text: 'cover', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'covering', text: '英语派生：cover + -ing，词性转到「覆盖物」。' },
        { label: '现在', text: '核心用法是：覆盖物。' },
      ],
      formationLogic: '先认词干 cover，再看词尾。',
      mnemonic: '看到 covering，先说出「覆盖物」。',
      note: '先认词干 cover，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one covering.', chinese: '这一章反复回到同一个点：覆盖物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'covering.s1', en: 'Without that covering, the next paragraph is hard to follow.', zh: '没有这个覆盖物，下一段会很难读。', structure: 'covering / 表示 / 覆盖物', grammar: 'noun，围绕「覆盖物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the covering.', right: 'He gave me some advice about the covering.', reason: 'advice 不可数。名词 covering 的单复数按词典词形记。', rule: '先确定 covering 是noun，再套「覆盖物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'covering.q1', senseId: 'covering.s1', errorType: 'meaning', type: '词义选择', prompt: '「covering」在本条的核心意思是：', options: ['覆盖物', '完全相反的意思', '一种古代钱币'], answer: '覆盖物', explain: 'covering：覆盖物。' },
      { id: 'covering.q2', senseId: 'covering.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches covering?', options: ['覆盖物', 'a kind of ancient coin', 'the past tense of be'], answer: '覆盖物', explain: '对的是「覆盖物」。' },
      { id: 'covering.q3', senseId: 'covering.s1', errorType: 'grammar', type: '词义选择', prompt: 'covering 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'covering.q4', senseId: 'covering.s1', errorType: 'meaning', type: '词源', prompt: '记 covering 时，哪句更稳妥？', options: ['先锁住「覆盖物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「覆盖物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['覆盖物'] },
  });

  D('covet', {
    etymology: {
      origin: '现代英语常用词「covet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'covet', gloss: '垂涎' },
      suffix: null,
      history: [
        { label: 'covet', text: '现代英语常用词「covet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：垂涎。' },
      ],
      formationLogic: '核心义：垂涎。',
      mnemonic: '看到 covet，先说出「垂涎」。',
      note: '核心义：垂涎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to covet before the office closed.', chinese: '他们同意在办公室关门前做这件事：垂涎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'covet.s1', en: 'The deadline forced the team to covet that afternoon.', zh: '截止日期逼着小组在那天下午垂涎。', structure: 'covet / 表示 / 垂涎', grammar: 'verb，围绕「垂涎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She coveted it yesterday without checking the real past form.', right: 'Check the past form of "covet" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 covet 是verb，再套「垂涎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'covet.q1', senseId: 'covet.s1', errorType: 'meaning', type: '词义选择', prompt: '「covet」在本条的核心意思是：', options: ['垂涎', '完全相反的意思', '一种古代钱币'], answer: '垂涎', explain: 'covet：垂涎。' },
      { id: 'covet.q2', senseId: 'covet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches covet?', options: ['垂涎', 'a kind of ancient coin', 'the past tense of be'], answer: '垂涎', explain: '对的是「垂涎」。' },
      { id: 'covet.q3', senseId: 'covet.s1', errorType: 'grammar', type: '词义选择', prompt: 'covet 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'covet.q4', senseId: 'covet.s1', errorType: 'meaning', type: '词源', prompt: '记 covet 时，哪句更稳妥？', options: ['先锁住「垂涎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「垂涎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['垂涎'] },
  });

  D('cow', {
    etymology: {
      origin: '古英语 cu。',
      prefix: null,
      root: { text: 'cow', gloss: '母牛' },
      suffix: null,
      history: [
        { label: 'cow', text: '古英语 cu。' },
        { label: '现在', text: '核心用法是：母牛。' },
      ],
      formationLogic: '考试认现在的用法：母牛。',
      mnemonic: '看到 cow，先说出「母牛」。',
      note: '考试认现在的用法：母牛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cow.', chinese: '这一章反复回到同一个点：母牛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cow.s1', en: 'Without that cow, the next paragraph is hard to follow.', zh: '没有这个母牛，下一段会很难读。', structure: 'cow / 表示 / 母牛', grammar: 'noun，围绕「母牛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cow.', right: 'He gave me some advice about the cow.', reason: 'advice 不可数。名词 cow 的单复数按词典词形记。', rule: '先确定 cow 是noun，再套「母牛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cow.q1', senseId: 'cow.s1', errorType: 'meaning', type: '词义选择', prompt: '「cow」在本条的核心意思是：', options: ['母牛', '完全相反的意思', '一种古代钱币'], answer: '母牛', explain: 'cow：母牛。' },
      { id: 'cow.q2', senseId: 'cow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cow?', options: ['母牛', 'a kind of ancient coin', 'the past tense of be'], answer: '母牛', explain: '对的是「母牛」。' },
      { id: 'cow.q3', senseId: 'cow.s1', errorType: 'grammar', type: '词义选择', prompt: 'cow 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cow.q4', senseId: 'cow.s1', errorType: 'meaning', type: '词源', prompt: '记 cow 时，哪句更稳妥？', options: ['先锁住「母牛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「母牛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['母牛'] },
  });

  D('coward', {
    etymology: {
      origin: '现代英语常用词「coward」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coward', gloss: '胆小鬼' },
      suffix: null,
      history: [
        { label: 'coward', text: '现代英语常用词「coward」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：胆小鬼。' },
      ],
      formationLogic: '核心义：胆小鬼。',
      mnemonic: '看到 coward，先说出「胆小鬼」。',
      note: '核心义：胆小鬼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coward.', chinese: '这一章反复回到同一个点：胆小鬼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coward.s1', en: 'Without that coward, the next paragraph is hard to follow.', zh: '没有这个胆小鬼，下一段会很难读。', structure: 'coward / 表示 / 胆小鬼', grammar: 'noun，围绕「胆小鬼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coward.', right: 'He gave me some advice about the coward.', reason: 'advice 不可数。名词 coward 的单复数按词典词形记。', rule: '先确定 coward 是noun，再套「胆小鬼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coward.q1', senseId: 'coward.s1', errorType: 'meaning', type: '词义选择', prompt: '「coward」在本条的核心意思是：', options: ['胆小鬼', '完全相反的意思', '一种古代钱币'], answer: '胆小鬼', explain: 'coward：胆小鬼。' },
      { id: 'coward.q2', senseId: 'coward.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coward?', options: ['胆小鬼', 'a kind of ancient coin', 'the past tense of be'], answer: '胆小鬼', explain: '对的是「胆小鬼」。' },
      { id: 'coward.q3', senseId: 'coward.s1', errorType: 'grammar', type: '词义选择', prompt: 'coward 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coward.q4', senseId: 'coward.s1', errorType: 'meaning', type: '词源', prompt: '记 coward 时，哪句更稳妥？', options: ['先锁住「胆小鬼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「胆小鬼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['胆小鬼'] },
  });

  D('cowardly', {
    etymology: {
      origin: '英语派生：coward + -ly，词性转到「胆小的」。',
      prefix: null,
      root: { text: 'coward', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cowardly', text: '英语派生：coward + -ly，词性转到「胆小的」。' },
        { label: '现在', text: '核心用法是：胆小的。' },
      ],
      formationLogic: '先认词干 coward，再看词尾。',
      mnemonic: '看到 cowardly，先说出「胆小的」。',
      note: '先认词干 coward，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cowardly.', chinese: '即使是初读者也能看出，这个结果是胆小的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cowardly.s1', en: 'They wanted a cowardly answer, not a long speech.', zh: '他们要一个胆小的的答复，不要长篇发言。', structure: 'cowardly / 表示 / 胆小的', grammar: 'adjective，围绕「胆小的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cowardly.', right: 'The news is cowardly.', reason: 'news 作主语时动词用单数。', rule: '先确定 cowardly 是adjective，再套「胆小的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cowardly.q1', senseId: 'cowardly.s1', errorType: 'meaning', type: '词义选择', prompt: '「cowardly」在本条的核心意思是：', options: ['胆小的', '完全相反的意思', '一种古代钱币'], answer: '胆小的', explain: 'cowardly：胆小的。' },
      { id: 'cowardly.q2', senseId: 'cowardly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cowardly?', options: ['胆小的', 'a kind of ancient coin', 'the past tense of be'], answer: '胆小的', explain: '对的是「胆小的」。' },
      { id: 'cowardly.q3', senseId: 'cowardly.s1', errorType: 'grammar', type: '词义选择', prompt: 'cowardly 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cowardly.q4', senseId: 'cowardly.s1', errorType: 'meaning', type: '词源', prompt: '记 cowardly 时，哪句更稳妥？', options: ['先锁住「胆小的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「胆小的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['胆小的'] },
  });

  D('cowboy', {
    etymology: {
      origin: '现代英语常用词「cowboy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cowboy', gloss: '牛仔' },
      suffix: null,
      history: [
        { label: 'cowboy', text: '现代英语常用词「cowboy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：牛仔。' },
      ],
      formationLogic: '核心义：牛仔。',
      mnemonic: '看到 cowboy，先说出「牛仔」。',
      note: '核心义：牛仔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cowboy.', chinese: '这一章反复回到同一个点：牛仔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cowboy.s1', en: 'Without that cowboy, the next paragraph is hard to follow.', zh: '没有这个牛仔，下一段会很难读。', structure: 'cowboy / 表示 / 牛仔', grammar: 'noun，围绕「牛仔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cowboy.', right: 'He gave me some advice about the cowboy.', reason: 'advice 不可数。名词 cowboy 的单复数按词典词形记。', rule: '先确定 cowboy 是noun，再套「牛仔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cowboy.q1', senseId: 'cowboy.s1', errorType: 'meaning', type: '词义选择', prompt: '「cowboy」在本条的核心意思是：', options: ['牛仔', '完全相反的意思', '一种古代钱币'], answer: '牛仔', explain: 'cowboy：牛仔。' },
      { id: 'cowboy.q2', senseId: 'cowboy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cowboy?', options: ['牛仔', 'a kind of ancient coin', 'the past tense of be'], answer: '牛仔', explain: '对的是「牛仔」。' },
      { id: 'cowboy.q3', senseId: 'cowboy.s1', errorType: 'grammar', type: '词义选择', prompt: 'cowboy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cowboy.q4', senseId: 'cowboy.s1', errorType: 'meaning', type: '词源', prompt: '记 cowboy 时，哪句更稳妥？', options: ['先锁住「牛仔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牛仔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牛仔'] },
  });

  D('coworker', {
    etymology: {
      origin: '英语派生：cowork + -er，词性转到「同事」。',
      prefix: null,
      root: { text: 'cowork', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coworker', text: '英语派生：cowork + -er，词性转到「同事」。' },
        { label: '现在', text: '核心用法是：同事。' },
      ],
      formationLogic: '先认词干 cowork，再看词尾。',
      mnemonic: '看到 coworker，先说出「同事」。',
      note: '先认词干 cowork，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coworker.', chinese: '这一章反复回到同一个点：同事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coworker.s1', en: 'Without that coworker, the next paragraph is hard to follow.', zh: '没有这个同事，下一段会很难读。', structure: 'coworker / 表示 / 同事', grammar: 'noun，围绕「同事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coworker.', right: 'He gave me some advice about the coworker.', reason: 'advice 不可数。名词 coworker 的单复数按词典词形记。', rule: '先确定 coworker 是noun，再套「同事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coworker.q1', senseId: 'coworker.s1', errorType: 'meaning', type: '词义选择', prompt: '「coworker」在本条的核心意思是：', options: ['同事', '完全相反的意思', '一种古代钱币'], answer: '同事', explain: 'coworker：同事。' },
      { id: 'coworker.q2', senseId: 'coworker.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coworker?', options: ['同事', 'a kind of ancient coin', 'the past tense of be'], answer: '同事', explain: '对的是「同事」。' },
      { id: 'coworker.q3', senseId: 'coworker.s1', errorType: 'grammar', type: '词义选择', prompt: 'coworker 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coworker.q4', senseId: 'coworker.s1', errorType: 'meaning', type: '词源', prompt: '记 coworker 时，哪句更稳妥？', options: ['先锁住「同事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同事'] },
  });

  D('cozy', {
    etymology: {
      origin: '现代英语常用词「cozy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cozy', gloss: '舒适的' },
      suffix: null,
      history: [
        { label: 'cozy', text: '现代英语常用词「cozy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：舒适的。' },
      ],
      formationLogic: '核心义：舒适的。',
      mnemonic: '看到 cozy，先说出「舒适的」。',
      note: '核心义：舒适的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cozy.', chinese: '即使是初读者也能看出，这个结果是舒适的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cozy.s1', en: 'They wanted a cozy answer, not a long speech.', zh: '他们要一个舒适的的答复，不要长篇发言。', structure: 'cozy / 表示 / 舒适的', grammar: 'adjective，围绕「舒适的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cozy.', right: 'The news is cozy.', reason: 'news 作主语时动词用单数。', rule: '先确定 cozy 是adjective，再套「舒适的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cozy.q1', senseId: 'cozy.s1', errorType: 'meaning', type: '词义选择', prompt: '「cozy」在本条的核心意思是：', options: ['舒适的', '完全相反的意思', '一种古代钱币'], answer: '舒适的', explain: 'cozy：舒适的。' },
      { id: 'cozy.q2', senseId: 'cozy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cozy?', options: ['舒适的', 'a kind of ancient coin', 'the past tense of be'], answer: '舒适的', explain: '对的是「舒适的」。' },
      { id: 'cozy.q3', senseId: 'cozy.s1', errorType: 'grammar', type: '词义选择', prompt: 'cozy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cozy.q4', senseId: 'cozy.s1', errorType: 'meaning', type: '词源', prompt: '记 cozy 时，哪句更稳妥？', options: ['先锁住「舒适的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「舒适的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['舒适的'] },
  });

  D('crab', {
    etymology: {
      origin: '现代英语常用词「crab」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crab', gloss: '蟹' },
      suffix: null,
      history: [
        { label: 'crab', text: '现代英语常用词「crab」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蟹。' },
      ],
      formationLogic: '核心义：蟹。',
      mnemonic: '看到 crab，先说出「蟹」。',
      note: '核心义：蟹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crab.', chinese: '这一章反复回到同一个点：蟹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crab.s1', en: 'Without that crab, the next paragraph is hard to follow.', zh: '没有这个蟹，下一段会很难读。', structure: 'crab / 表示 / 蟹', grammar: 'noun，围绕「蟹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crab.', right: 'He gave me some advice about the crab.', reason: 'advice 不可数。名词 crab 的单复数按词典词形记。', rule: '先确定 crab 是noun，再套「蟹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crab.q1', senseId: 'crab.s1', errorType: 'meaning', type: '词义选择', prompt: '「crab」在本条的核心意思是：', options: ['蟹', '完全相反的意思', '一种古代钱币'], answer: '蟹', explain: 'crab：蟹。' },
      { id: 'crab.q2', senseId: 'crab.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crab?', options: ['蟹', 'a kind of ancient coin', 'the past tense of be'], answer: '蟹', explain: '对的是「蟹」。' },
      { id: 'crab.q3', senseId: 'crab.s1', errorType: 'grammar', type: '词义选择', prompt: 'crab 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crab.q4', senseId: 'crab.s1', errorType: 'meaning', type: '词源', prompt: '记 crab 时，哪句更稳妥？', options: ['先锁住「蟹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蟹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蟹'] },
  });

  D('crack', {
    etymology: {
      origin: '古英语 cracian，拟声。',
      prefix: null,
      root: { text: 'crack', gloss: '裂缝' },
      suffix: null,
      history: [
        { label: 'crack', text: '古英语 cracian，拟声。' },
        { label: '现在', text: '核心用法是：裂缝。' },
      ],
      formationLogic: '考试认现在的用法：裂缝。',
      mnemonic: '看到 crack，先说出「裂缝」。',
      note: '考试认现在的用法：裂缝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crack.', chinese: '这一章反复回到同一个点：裂缝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crack.s1', en: 'Without that crack, the next paragraph is hard to follow.', zh: '没有这个裂缝，下一段会很难读。', structure: 'crack / 表示 / 裂缝', grammar: 'noun，围绕「裂缝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crack.', right: 'He gave me some advice about the crack.', reason: 'advice 不可数。名词 crack 的单复数按词典词形记。', rule: '先确定 crack 是noun，再套「裂缝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crack.q1', senseId: 'crack.s1', errorType: 'meaning', type: '词义选择', prompt: '「crack」在本条的核心意思是：', options: ['裂缝', '完全相反的意思', '一种古代钱币'], answer: '裂缝', explain: 'crack：裂缝。' },
      { id: 'crack.q2', senseId: 'crack.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crack?', options: ['裂缝', 'a kind of ancient coin', 'the past tense of be'], answer: '裂缝', explain: '对的是「裂缝」。' },
      { id: 'crack.q3', senseId: 'crack.s1', errorType: 'grammar', type: '词义选择', prompt: 'crack 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crack.q4', senseId: 'crack.s1', errorType: 'meaning', type: '词源', prompt: '记 crack 时，哪句更稳妥？', options: ['先锁住「裂缝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「裂缝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['裂缝'] },
  });

  D('crackdown', {
    etymology: {
      origin: '现代英语常用词「crackdown」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crackdown', gloss: '严厉打击' },
      suffix: null,
      history: [
        { label: 'crackdown', text: '现代英语常用词「crackdown」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：严厉打击。' },
      ],
      formationLogic: '核心义：严厉打击。',
      mnemonic: '看到 crackdown，先说出「严厉打击」。',
      note: '核心义：严厉打击。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crackdown.', chinese: '这一章反复回到同一个点：严厉打击。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crackdown.s1', en: 'Without that crackdown, the next paragraph is hard to follow.', zh: '没有这个严厉打击，下一段会很难读。', structure: 'crackdown / 表示 / 严厉打击', grammar: 'noun，围绕「严厉打击」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crackdown.', right: 'He gave me some advice about the crackdown.', reason: 'advice 不可数。名词 crackdown 的单复数按词典词形记。', rule: '先确定 crackdown 是noun，再套「严厉打击」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crackdown.q1', senseId: 'crackdown.s1', errorType: 'meaning', type: '词义选择', prompt: '「crackdown」在本条的核心意思是：', options: ['严厉打击', '完全相反的意思', '一种古代钱币'], answer: '严厉打击', explain: 'crackdown：严厉打击。' },
      { id: 'crackdown.q2', senseId: 'crackdown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crackdown?', options: ['严厉打击', 'a kind of ancient coin', 'the past tense of be'], answer: '严厉打击', explain: '对的是「严厉打击」。' },
      { id: 'crackdown.q3', senseId: 'crackdown.s1', errorType: 'grammar', type: '词义选择', prompt: 'crackdown 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crackdown.q4', senseId: 'crackdown.s1', errorType: 'meaning', type: '词源', prompt: '记 crackdown 时，哪句更稳妥？', options: ['先锁住「严厉打击」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「严厉打击」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['严厉打击'] },
  });

  D('cracker', {
    etymology: {
      origin: '英语派生：crack + -er，词性转到「薄脆饼干」。',
      prefix: null,
      root: { text: 'crack', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cracker', text: '英语派生：crack + -er，词性转到「薄脆饼干」。' },
        { label: '现在', text: '核心用法是：薄脆饼干。' },
      ],
      formationLogic: '先认词干 crack，再看词尾。',
      mnemonic: '看到 cracker，先说出「薄脆饼干」。',
      note: '先认词干 crack，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cracker.', chinese: '这一章反复回到同一个点：薄脆饼干。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cracker.s1', en: 'Without that cracker, the next paragraph is hard to follow.', zh: '没有这个薄脆饼干，下一段会很难读。', structure: 'cracker / 表示 / 薄脆饼干', grammar: 'noun，围绕「薄脆饼干」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cracker.', right: 'He gave me some advice about the cracker.', reason: 'advice 不可数。名词 cracker 的单复数按词典词形记。', rule: '先确定 cracker 是noun，再套「薄脆饼干」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cracker.q1', senseId: 'cracker.s1', errorType: 'meaning', type: '词义选择', prompt: '「cracker」在本条的核心意思是：', options: ['薄脆饼干', '完全相反的意思', '一种古代钱币'], answer: '薄脆饼干', explain: 'cracker：薄脆饼干。' },
      { id: 'cracker.q2', senseId: 'cracker.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cracker?', options: ['薄脆饼干', 'a kind of ancient coin', 'the past tense of be'], answer: '薄脆饼干', explain: '对的是「薄脆饼干」。' },
      { id: 'cracker.q3', senseId: 'cracker.s1', errorType: 'grammar', type: '词义选择', prompt: 'cracker 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cracker.q4', senseId: 'cracker.s1', errorType: 'meaning', type: '词源', prompt: '记 cracker 时，哪句更稳妥？', options: ['先锁住「薄脆饼干」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「薄脆饼干」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['薄脆饼干'] },
  });

  D('cradle', {
    etymology: {
      origin: '现代英语常用词「cradle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cradle', gloss: '摇篮' },
      suffix: null,
      history: [
        { label: 'cradle', text: '现代英语常用词「cradle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：摇篮。' },
      ],
      formationLogic: '核心义：摇篮。',
      mnemonic: '看到 cradle，先说出「摇篮」。',
      note: '核心义：摇篮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cradle.', chinese: '这一章反复回到同一个点：摇篮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cradle.s1', en: 'Without that cradle, the next paragraph is hard to follow.', zh: '没有这个摇篮，下一段会很难读。', structure: 'cradle / 表示 / 摇篮', grammar: 'noun，围绕「摇篮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cradle.', right: 'He gave me some advice about the cradle.', reason: 'advice 不可数。名词 cradle 的单复数按词典词形记。', rule: '先确定 cradle 是noun，再套「摇篮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cradle.q1', senseId: 'cradle.s1', errorType: 'meaning', type: '词义选择', prompt: '「cradle」在本条的核心意思是：', options: ['摇篮', '完全相反的意思', '一种古代钱币'], answer: '摇篮', explain: 'cradle：摇篮。' },
      { id: 'cradle.q2', senseId: 'cradle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cradle?', options: ['摇篮', 'a kind of ancient coin', 'the past tense of be'], answer: '摇篮', explain: '对的是「摇篮」。' },
      { id: 'cradle.q3', senseId: 'cradle.s1', errorType: 'grammar', type: '词义选择', prompt: 'cradle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cradle.q4', senseId: 'cradle.s1', errorType: 'meaning', type: '词源', prompt: '记 cradle 时，哪句更稳妥？', options: ['先锁住「摇篮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摇篮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摇篮'] },
  });

  D('craft', {
    etymology: {
      origin: '古英语 cræft「力量、技艺」。',
      prefix: null,
      root: { text: 'craft', gloss: '手艺' },
      suffix: null,
      history: [
        { label: 'craft', text: '古英语 cræft「力量、技艺」。' },
        { label: '现在', text: '核心用法是：手艺。' },
      ],
      formationLogic: '考试认现在的用法：手艺。',
      mnemonic: '看到 craft，先说出「手艺」。',
      note: '考试认现在的用法：手艺。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one craft.', chinese: '这一章反复回到同一个点：手艺。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'craft.s1', en: 'Without that craft, the next paragraph is hard to follow.', zh: '没有这个手艺，下一段会很难读。', structure: 'craft / 表示 / 手艺', grammar: 'noun，围绕「手艺」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the craft.', right: 'He gave me some advice about the craft.', reason: 'advice 不可数。名词 craft 的单复数按词典词形记。', rule: '先确定 craft 是noun，再套「手艺」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'craft.q1', senseId: 'craft.s1', errorType: 'meaning', type: '词义选择', prompt: '「craft」在本条的核心意思是：', options: ['手艺', '完全相反的意思', '一种古代钱币'], answer: '手艺', explain: 'craft：手艺。' },
      { id: 'craft.q2', senseId: 'craft.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches craft?', options: ['手艺', 'a kind of ancient coin', 'the past tense of be'], answer: '手艺', explain: '对的是「手艺」。' },
      { id: 'craft.q3', senseId: 'craft.s1', errorType: 'grammar', type: '词义选择', prompt: 'craft 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'craft.q4', senseId: 'craft.s1', errorType: 'meaning', type: '词源', prompt: '记 craft 时，哪句更稳妥？', options: ['先锁住「手艺」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手艺」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手艺'] },
  });

  D('craftsmanship', {
    etymology: {
      origin: '现代英语常用词「craftsmanship」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'craftsmanship', gloss: '手艺' },
      suffix: null,
      history: [
        { label: 'craftsmanship', text: '现代英语常用词「craftsmanship」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：手艺。' },
      ],
      formationLogic: '核心义：手艺。',
      mnemonic: '看到 craftsmanship，先说出「手艺」。',
      note: '核心义：手艺。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one craftsmanship.', chinese: '这一章反复回到同一个点：手艺。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'craftsmanship.s1', en: 'Without that craftsmanship, the next paragraph is hard to follow.', zh: '没有这个手艺，下一段会很难读。', structure: 'craftsmanship / 表示 / 手艺', grammar: 'noun，围绕「手艺」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the craftsmanship.', right: 'He gave me some advice about the craftsmanship.', reason: 'advice 不可数。名词 craftsmanship 的单复数按词典词形记。', rule: '先确定 craftsmanship 是noun，再套「手艺」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'craftsmanship.q1', senseId: 'craftsmanship.s1', errorType: 'meaning', type: '词义选择', prompt: '「craftsmanship」在本条的核心意思是：', options: ['手艺', '完全相反的意思', '一种古代钱币'], answer: '手艺', explain: 'craftsmanship：手艺。' },
      { id: 'craftsmanship.q2', senseId: 'craftsmanship.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches craftsmanship?', options: ['手艺', 'a kind of ancient coin', 'the past tense of be'], answer: '手艺', explain: '对的是「手艺」。' },
      { id: 'craftsmanship.q3', senseId: 'craftsmanship.s1', errorType: 'grammar', type: '词义选择', prompt: 'craftsmanship 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'craftsmanship.q4', senseId: 'craftsmanship.s1', errorType: 'meaning', type: '词源', prompt: '记 craftsmanship 时，哪句更稳妥？', options: ['先锁住「手艺」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手艺」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手艺'] },
  });

  D('cram', {
    etymology: {
      origin: '现代英语常用词「cram」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cram', gloss: '塞满' },
      suffix: null,
      history: [
        { label: 'cram', text: '现代英语常用词「cram」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：塞满。' },
      ],
      formationLogic: '核心义：塞满。',
      mnemonic: '看到 cram，先说出「塞满」。',
      note: '核心义：塞满。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cram before the office closed.', chinese: '他们同意在办公室关门前做这件事：塞满。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cram.s1', en: 'The deadline forced the team to cram that afternoon.', zh: '截止日期逼着小组在那天下午塞满。', structure: 'cram / 表示 / 塞满', grammar: 'verb，围绕「塞满」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cramed it yesterday without checking the real past form.', right: 'Check the past form of "cram" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cram 是verb，再套「塞满」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cram.q1', senseId: 'cram.s1', errorType: 'meaning', type: '词义选择', prompt: '「cram」在本条的核心意思是：', options: ['塞满', '完全相反的意思', '一种古代钱币'], answer: '塞满', explain: 'cram：塞满。' },
      { id: 'cram.q2', senseId: 'cram.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cram?', options: ['塞满', 'a kind of ancient coin', 'the past tense of be'], answer: '塞满', explain: '对的是「塞满」。' },
      { id: 'cram.q3', senseId: 'cram.s1', errorType: 'grammar', type: '词义选择', prompt: 'cram 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cram.q4', senseId: 'cram.s1', errorType: 'meaning', type: '词源', prompt: '记 cram 时，哪句更稳妥？', options: ['先锁住「塞满」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「塞满」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['塞满'] },
  });

  D('cramp', {
    etymology: {
      origin: '现代英语常用词「cramp」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cramp', gloss: '抽筋' },
      suffix: null,
      history: [
        { label: 'cramp', text: '现代英语常用词「cramp」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：抽筋。' },
      ],
      formationLogic: '核心义：抽筋。',
      mnemonic: '看到 cramp，先说出「抽筋」。',
      note: '核心义：抽筋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cramp.', chinese: '这一章反复回到同一个点：抽筋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cramp.s1', en: 'Without that cramp, the next paragraph is hard to follow.', zh: '没有这个抽筋，下一段会很难读。', structure: 'cramp / 表示 / 抽筋', grammar: 'noun，围绕「抽筋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cramp.', right: 'He gave me some advice about the cramp.', reason: 'advice 不可数。名词 cramp 的单复数按词典词形记。', rule: '先确定 cramp 是noun，再套「抽筋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cramp.q1', senseId: 'cramp.s1', errorType: 'meaning', type: '词义选择', prompt: '「cramp」在本条的核心意思是：', options: ['抽筋', '完全相反的意思', '一种古代钱币'], answer: '抽筋', explain: 'cramp：抽筋。' },
      { id: 'cramp.q2', senseId: 'cramp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cramp?', options: ['抽筋', 'a kind of ancient coin', 'the past tense of be'], answer: '抽筋', explain: '对的是「抽筋」。' },
      { id: 'cramp.q3', senseId: 'cramp.s1', errorType: 'grammar', type: '词义选择', prompt: 'cramp 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cramp.q4', senseId: 'cramp.s1', errorType: 'meaning', type: '词源', prompt: '记 cramp 时，哪句更稳妥？', options: ['先锁住「抽筋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抽筋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抽筋'] },
  });

  D('crane', {
    etymology: {
      origin: '现代英语常用词「crane」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crane', gloss: '起重机' },
      suffix: null,
      history: [
        { label: 'crane', text: '现代英语常用词「crane」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：起重机。' },
      ],
      formationLogic: '核心义：起重机。',
      mnemonic: '看到 crane，先说出「起重机」。',
      note: '核心义：起重机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crane.', chinese: '这一章反复回到同一个点：起重机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crane.s1', en: 'Without that crane, the next paragraph is hard to follow.', zh: '没有这个起重机，下一段会很难读。', structure: 'crane / 表示 / 起重机', grammar: 'noun，围绕「起重机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crane.', right: 'He gave me some advice about the crane.', reason: 'advice 不可数。名词 crane 的单复数按词典词形记。', rule: '先确定 crane 是noun，再套「起重机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crane.q1', senseId: 'crane.s1', errorType: 'meaning', type: '词义选择', prompt: '「crane」在本条的核心意思是：', options: ['起重机', '完全相反的意思', '一种古代钱币'], answer: '起重机', explain: 'crane：起重机。' },
      { id: 'crane.q2', senseId: 'crane.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crane?', options: ['起重机', 'a kind of ancient coin', 'the past tense of be'], answer: '起重机', explain: '对的是「起重机」。' },
      { id: 'crane.q3', senseId: 'crane.s1', errorType: 'grammar', type: '词义选择', prompt: 'crane 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crane.q4', senseId: 'crane.s1', errorType: 'meaning', type: '词源', prompt: '记 crane 时，哪句更稳妥？', options: ['先锁住「起重机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「起重机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['起重机'] },
  });

  D('cranial', {
    etymology: {
      origin: '英语派生：crani + -al，词性转到「颅的」。',
      prefix: null,
      root: { text: 'crani', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cranial', text: '英语派生：crani + -al，词性转到「颅的」。' },
        { label: '现在', text: '核心用法是：颅的。' },
      ],
      formationLogic: '先认词干 crani，再看词尾。',
      mnemonic: '看到 cranial，先说出「颅的」。',
      note: '先认词干 crani，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cranial.', chinese: '即使是初读者也能看出，这个结果是颅的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cranial.s1', en: 'They wanted a cranial answer, not a long speech.', zh: '他们要一个颅的的答复，不要长篇发言。', structure: 'cranial / 表示 / 颅的', grammar: 'adjective，围绕「颅的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cranial.', right: 'The news is cranial.', reason: 'news 作主语时动词用单数。', rule: '先确定 cranial 是adjective，再套「颅的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cranial.q1', senseId: 'cranial.s1', errorType: 'meaning', type: '词义选择', prompt: '「cranial」在本条的核心意思是：', options: ['颅的', '完全相反的意思', '一种古代钱币'], answer: '颅的', explain: 'cranial：颅的。' },
      { id: 'cranial.q2', senseId: 'cranial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cranial?', options: ['颅的', 'a kind of ancient coin', 'the past tense of be'], answer: '颅的', explain: '对的是「颅的」。' },
      { id: 'cranial.q3', senseId: 'cranial.s1', errorType: 'grammar', type: '词义选择', prompt: 'cranial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cranial.q4', senseId: 'cranial.s1', errorType: 'meaning', type: '词源', prompt: '记 cranial 时，哪句更稳妥？', options: ['先锁住「颅的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「颅的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['颅的'] },
  });

  D('cranium', {
    etymology: {
      origin: '现代英语常用词「cranium」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cranium', gloss: '头骨' },
      suffix: null,
      history: [
        { label: 'cranium', text: '现代英语常用词「cranium」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：头骨。' },
      ],
      formationLogic: '核心义：头骨。',
      mnemonic: '看到 cranium，先说出「头骨」。',
      note: '核心义：头骨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cranium.', chinese: '这一章反复回到同一个点：头骨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cranium.s1', en: 'Without that cranium, the next paragraph is hard to follow.', zh: '没有这个头骨，下一段会很难读。', structure: 'cranium / 表示 / 头骨', grammar: 'noun，围绕「头骨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cranium.', right: 'He gave me some advice about the cranium.', reason: 'advice 不可数。名词 cranium 的单复数按词典词形记。', rule: '先确定 cranium 是noun，再套「头骨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cranium.q1', senseId: 'cranium.s1', errorType: 'meaning', type: '词义选择', prompt: '「cranium」在本条的核心意思是：', options: ['头骨', '完全相反的意思', '一种古代钱币'], answer: '头骨', explain: 'cranium：头骨。' },
      { id: 'cranium.q2', senseId: 'cranium.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cranium?', options: ['头骨', 'a kind of ancient coin', 'the past tense of be'], answer: '头骨', explain: '对的是「头骨」。' },
      { id: 'cranium.q3', senseId: 'cranium.s1', errorType: 'grammar', type: '词义选择', prompt: 'cranium 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cranium.q4', senseId: 'cranium.s1', errorType: 'meaning', type: '词源', prompt: '记 cranium 时，哪句更稳妥？', options: ['先锁住「头骨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「头骨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['头骨'] },
  });

  D('crash', {
    etymology: {
      origin: '拟声。',
      prefix: null,
      root: { text: 'crash', gloss: '碰撞' },
      suffix: null,
      history: [
        { label: 'crash', text: '拟声。' },
        { label: '现在', text: '核心用法是：碰撞。' },
      ],
      formationLogic: '考试认现在的用法：碰撞。',
      mnemonic: '看到 crash，先说出「碰撞」。',
      note: '考试认现在的用法：碰撞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crash.', chinese: '这一章反复回到同一个点：碰撞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crash.s1', en: 'Without that crash, the next paragraph is hard to follow.', zh: '没有这个碰撞，下一段会很难读。', structure: 'crash / 表示 / 碰撞', grammar: 'noun，围绕「碰撞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crash.', right: 'He gave me some advice about the crash.', reason: 'advice 不可数。名词 crash 的单复数按词典词形记。', rule: '先确定 crash 是noun，再套「碰撞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crash.q1', senseId: 'crash.s1', errorType: 'meaning', type: '词义选择', prompt: '「crash」在本条的核心意思是：', options: ['碰撞', '完全相反的意思', '一种古代钱币'], answer: '碰撞', explain: 'crash：碰撞。' },
      { id: 'crash.q2', senseId: 'crash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crash?', options: ['碰撞', 'a kind of ancient coin', 'the past tense of be'], answer: '碰撞', explain: '对的是「碰撞」。' },
      { id: 'crash.q3', senseId: 'crash.s1', errorType: 'grammar', type: '词义选择', prompt: 'crash 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crash.q4', senseId: 'crash.s1', errorType: 'meaning', type: '词源', prompt: '记 crash 时，哪句更稳妥？', options: ['先锁住「碰撞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「碰撞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['碰撞'] },
  });

  D('crate', {
    etymology: {
      origin: '现代英语常用词「crate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crate', gloss: '板条箱' },
      suffix: null,
      history: [
        { label: 'crate', text: '现代英语常用词「crate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：板条箱。' },
      ],
      formationLogic: '核心义：板条箱。',
      mnemonic: '看到 crate，先说出「板条箱」。',
      note: '核心义：板条箱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crate.', chinese: '这一章反复回到同一个点：板条箱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crate.s1', en: 'Without that crate, the next paragraph is hard to follow.', zh: '没有这个板条箱，下一段会很难读。', structure: 'crate / 表示 / 板条箱', grammar: 'noun，围绕「板条箱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crate.', right: 'He gave me some advice about the crate.', reason: 'advice 不可数。名词 crate 的单复数按词典词形记。', rule: '先确定 crate 是noun，再套「板条箱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crate.q1', senseId: 'crate.s1', errorType: 'meaning', type: '词义选择', prompt: '「crate」在本条的核心意思是：', options: ['板条箱', '完全相反的意思', '一种古代钱币'], answer: '板条箱', explain: 'crate：板条箱。' },
      { id: 'crate.q2', senseId: 'crate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crate?', options: ['板条箱', 'a kind of ancient coin', 'the past tense of be'], answer: '板条箱', explain: '对的是「板条箱」。' },
      { id: 'crate.q3', senseId: 'crate.s1', errorType: 'grammar', type: '词义选择', prompt: 'crate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crate.q4', senseId: 'crate.s1', errorType: 'meaning', type: '词源', prompt: '记 crate 时，哪句更稳妥？', options: ['先锁住「板条箱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「板条箱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['板条箱'] },
  });

  D('crater', {
    etymology: {
      origin: '英语派生：crat + -er，词性转到「火山口」。',
      prefix: null,
      root: { text: 'crat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'crater', text: '英语派生：crat + -er，词性转到「火山口」。' },
        { label: '现在', text: '核心用法是：火山口。' },
      ],
      formationLogic: '先认词干 crat，再看词尾。',
      mnemonic: '看到 crater，先说出「火山口」。',
      note: '先认词干 crat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crater.', chinese: '这一章反复回到同一个点：火山口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crater.s1', en: 'Without that crater, the next paragraph is hard to follow.', zh: '没有这个火山口，下一段会很难读。', structure: 'crater / 表示 / 火山口', grammar: 'noun，围绕「火山口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crater.', right: 'He gave me some advice about the crater.', reason: 'advice 不可数。名词 crater 的单复数按词典词形记。', rule: '先确定 crater 是noun，再套「火山口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crater.q1', senseId: 'crater.s1', errorType: 'meaning', type: '词义选择', prompt: '「crater」在本条的核心意思是：', options: ['火山口', '完全相反的意思', '一种古代钱币'], answer: '火山口', explain: 'crater：火山口。' },
      { id: 'crater.q2', senseId: 'crater.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crater?', options: ['火山口', 'a kind of ancient coin', 'the past tense of be'], answer: '火山口', explain: '对的是「火山口」。' },
      { id: 'crater.q3', senseId: 'crater.s1', errorType: 'grammar', type: '词义选择', prompt: 'crater 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crater.q4', senseId: 'crater.s1', errorType: 'meaning', type: '词源', prompt: '记 crater 时，哪句更稳妥？', options: ['先锁住「火山口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「火山口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['火山口'] },
  });

  D('crave', {
    etymology: {
      origin: '现代英语常用词「crave」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crave', gloss: '渴望' },
      suffix: null,
      history: [
        { label: 'crave', text: '现代英语常用词「crave」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：渴望。' },
      ],
      formationLogic: '核心义：渴望。',
      mnemonic: '看到 crave，先说出「渴望」。',
      note: '核心义：渴望。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to crave before the office closed.', chinese: '他们同意在办公室关门前做这件事：渴望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crave.s1', en: 'The deadline forced the team to crave that afternoon.', zh: '截止日期逼着小组在那天下午渴望。', structure: 'crave / 表示 / 渴望', grammar: 'verb，围绕「渴望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She craveed it yesterday without checking the real past form.', right: 'Check the past form of "crave" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 crave 是verb，再套「渴望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crave.q1', senseId: 'crave.s1', errorType: 'meaning', type: '词义选择', prompt: '「crave」在本条的核心意思是：', options: ['渴望', '完全相反的意思', '一种古代钱币'], answer: '渴望', explain: 'crave：渴望。' },
      { id: 'crave.q2', senseId: 'crave.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crave?', options: ['渴望', 'a kind of ancient coin', 'the past tense of be'], answer: '渴望', explain: '对的是「渴望」。' },
      { id: 'crave.q3', senseId: 'crave.s1', errorType: 'grammar', type: '词义选择', prompt: 'crave 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'crave.q4', senseId: 'crave.s1', errorType: 'meaning', type: '词源', prompt: '记 crave 时，哪句更稳妥？', options: ['先锁住「渴望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「渴望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['渴望'] },
  });

  D('craving', {
    etymology: {
      origin: '英语派生：crav + -ing，词性转到「强烈渴望」。',
      prefix: null,
      root: { text: 'crav', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'craving', text: '英语派生：crav + -ing，词性转到「强烈渴望」。' },
        { label: '现在', text: '核心用法是：强烈渴望。' },
      ],
      formationLogic: '先认词干 crav，再看词尾。',
      mnemonic: '看到 craving，先说出「强烈渴望」。',
      note: '先认词干 crav，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one craving.', chinese: '这一章反复回到同一个点：强烈渴望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'craving.s1', en: 'Without that craving, the next paragraph is hard to follow.', zh: '没有这个强烈渴望，下一段会很难读。', structure: 'craving / 表示 / 强烈渴望', grammar: 'noun，围绕「强烈渴望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the craving.', right: 'He gave me some advice about the craving.', reason: 'advice 不可数。名词 craving 的单复数按词典词形记。', rule: '先确定 craving 是noun，再套「强烈渴望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'craving.q1', senseId: 'craving.s1', errorType: 'meaning', type: '词义选择', prompt: '「craving」在本条的核心意思是：', options: ['强烈渴望', '完全相反的意思', '一种古代钱币'], answer: '强烈渴望', explain: 'craving：强烈渴望。' },
      { id: 'craving.q2', senseId: 'craving.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches craving?', options: ['强烈渴望', 'a kind of ancient coin', 'the past tense of be'], answer: '强烈渴望', explain: '对的是「强烈渴望」。' },
      { id: 'craving.q3', senseId: 'craving.s1', errorType: 'grammar', type: '词义选择', prompt: 'craving 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'craving.q4', senseId: 'craving.s1', errorType: 'meaning', type: '词源', prompt: '记 craving 时，哪句更稳妥？', options: ['先锁住「强烈渴望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「强烈渴望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['强烈渴望'] },
  });

  D('crawl', {
    etymology: {
      origin: '现代英语常用词「crawl」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crawl', gloss: '爬' },
      suffix: null,
      history: [
        { label: 'crawl', text: '现代英语常用词「crawl」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：爬。' },
      ],
      formationLogic: '核心义：爬。',
      mnemonic: '看到 crawl，先说出「爬」。',
      note: '核心义：爬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to crawl before the office closed.', chinese: '他们同意在办公室关门前做这件事：爬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crawl.s1', en: 'The deadline forced the team to crawl that afternoon.', zh: '截止日期逼着小组在那天下午爬。', structure: 'crawl / 表示 / 爬', grammar: 'verb，围绕「爬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She crawled it yesterday without checking the real past form.', right: 'Check the past form of "crawl" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 crawl 是verb，再套「爬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crawl.q1', senseId: 'crawl.s1', errorType: 'meaning', type: '词义选择', prompt: '「crawl」在本条的核心意思是：', options: ['爬', '完全相反的意思', '一种古代钱币'], answer: '爬', explain: 'crawl：爬。' },
      { id: 'crawl.q2', senseId: 'crawl.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crawl?', options: ['爬', 'a kind of ancient coin', 'the past tense of be'], answer: '爬', explain: '对的是「爬」。' },
      { id: 'crawl.q3', senseId: 'crawl.s1', errorType: 'grammar', type: '词义选择', prompt: 'crawl 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'crawl.q4', senseId: 'crawl.s1', errorType: 'meaning', type: '词源', prompt: '记 crawl 时，哪句更稳妥？', options: ['先锁住「爬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爬'] },
  });

  D('crayon', {
    etymology: {
      origin: '现代英语常用词「crayon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crayon', gloss: '蜡笔' },
      suffix: null,
      history: [
        { label: 'crayon', text: '现代英语常用词「crayon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蜡笔。' },
      ],
      formationLogic: '核心义：蜡笔。',
      mnemonic: '看到 crayon，先说出「蜡笔」。',
      note: '核心义：蜡笔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crayon.', chinese: '这一章反复回到同一个点：蜡笔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crayon.s1', en: 'Without that crayon, the next paragraph is hard to follow.', zh: '没有这个蜡笔，下一段会很难读。', structure: 'crayon / 表示 / 蜡笔', grammar: 'noun，围绕「蜡笔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crayon.', right: 'He gave me some advice about the crayon.', reason: 'advice 不可数。名词 crayon 的单复数按词典词形记。', rule: '先确定 crayon 是noun，再套「蜡笔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crayon.q1', senseId: 'crayon.s1', errorType: 'meaning', type: '词义选择', prompt: '「crayon」在本条的核心意思是：', options: ['蜡笔', '完全相反的意思', '一种古代钱币'], answer: '蜡笔', explain: 'crayon：蜡笔。' },
      { id: 'crayon.q2', senseId: 'crayon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crayon?', options: ['蜡笔', 'a kind of ancient coin', 'the past tense of be'], answer: '蜡笔', explain: '对的是「蜡笔」。' },
      { id: 'crayon.q3', senseId: 'crayon.s1', errorType: 'grammar', type: '词义选择', prompt: 'crayon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crayon.q4', senseId: 'crayon.s1', errorType: 'meaning', type: '词源', prompt: '记 crayon 时，哪句更稳妥？', options: ['先锁住「蜡笔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蜡笔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蜡笔'] },
  });

  D('craze', {
    etymology: {
      origin: '现代英语常用词「craze」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'craze', gloss: '一时的狂热风尚' },
      suffix: null,
      history: [
        { label: 'craze', text: '现代英语常用词「craze」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一时的狂热风尚。' },
      ],
      formationLogic: '核心义：一时的狂热风尚。',
      mnemonic: '看到 craze，先说出「一时的狂热风尚」。',
      note: '核心义：一时的狂热风尚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one craze.', chinese: '这一章反复回到同一个点：一时的狂热风尚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'craze.s1', en: 'Without that craze, the next paragraph is hard to follow.', zh: '没有这个一时的狂热风尚，下一段会很难读。', structure: 'craze / 表示 / 一时的狂热风尚', grammar: 'noun，围绕「一时的狂热风尚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the craze.', right: 'He gave me some advice about the craze.', reason: 'advice 不可数。名词 craze 的单复数按词典词形记。', rule: '先确定 craze 是noun，再套「一时的狂热风尚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'craze.q1', senseId: 'craze.s1', errorType: 'meaning', type: '词义选择', prompt: '「craze」在本条的核心意思是：', options: ['一时的狂热风尚', '完全相反的意思', '一种古代钱币'], answer: '一时的狂热风尚', explain: 'craze：一时的狂热风尚。' },
      { id: 'craze.q2', senseId: 'craze.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches craze?', options: ['一时的狂热风尚', 'a kind of ancient coin', 'the past tense of be'], answer: '一时的狂热风尚', explain: '对的是「一时的狂热风尚」。' },
      { id: 'craze.q3', senseId: 'craze.s1', errorType: 'grammar', type: '词义选择', prompt: 'craze 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'craze.q4', senseId: 'craze.s1', errorType: 'meaning', type: '词源', prompt: '记 craze 时，哪句更稳妥？', options: ['先锁住「一时的狂热风尚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一时的狂热风尚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一时的狂热风尚'] },
  });

  D('crazy', {
    etymology: {
      origin: '来自 craze「裂开」。脑子裂了，所以疯。',
      prefix: null,
      root: { text: 'crazy', gloss: '疯狂的' },
      suffix: null,
      history: [
        { label: 'crazy', text: '来自 craze「裂开」。脑子裂了，所以疯。' },
        { label: '现在', text: '核心用法是：疯狂的。' },
      ],
      formationLogic: '考试认现在的用法：疯狂的。',
      mnemonic: '看到 crazy，先说出「疯狂的」。',
      note: '考试认现在的用法：疯狂的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crazy.', chinese: '即使是初读者也能看出，这个结果是疯狂的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crazy.s1', en: 'They wanted a crazy answer, not a long speech.', zh: '他们要一个疯狂的的答复，不要长篇发言。', structure: 'crazy / 表示 / 疯狂的', grammar: 'adjective，围绕「疯狂的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crazy.', right: 'The news is crazy.', reason: 'news 作主语时动词用单数。', rule: '先确定 crazy 是adjective，再套「疯狂的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crazy.q1', senseId: 'crazy.s1', errorType: 'meaning', type: '词义选择', prompt: '「crazy」在本条的核心意思是：', options: ['疯狂的', '完全相反的意思', '一种古代钱币'], answer: '疯狂的', explain: 'crazy：疯狂的。' },
      { id: 'crazy.q2', senseId: 'crazy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crazy?', options: ['疯狂的', 'a kind of ancient coin', 'the past tense of be'], answer: '疯狂的', explain: '对的是「疯狂的」。' },
      { id: 'crazy.q3', senseId: 'crazy.s1', errorType: 'grammar', type: '词义选择', prompt: 'crazy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crazy.q4', senseId: 'crazy.s1', errorType: 'meaning', type: '词源', prompt: '记 crazy 时，哪句更稳妥？', options: ['先锁住「疯狂的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「疯狂的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['疯狂的'] },
  });

  D('creak', {
    etymology: {
      origin: '现代英语常用词「creak」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'creak', gloss: '嘎吱声' },
      suffix: null,
      history: [
        { label: 'creak', text: '现代英语常用词「creak」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：嘎吱声。' },
      ],
      formationLogic: '核心义：嘎吱声。',
      mnemonic: '看到 creak，先说出「嘎吱声」。',
      note: '核心义：嘎吱声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one creak.', chinese: '这一章反复回到同一个点：嘎吱声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creak.s1', en: 'Without that creak, the next paragraph is hard to follow.', zh: '没有这个嘎吱声，下一段会很难读。', structure: 'creak / 表示 / 嘎吱声', grammar: 'noun，围绕「嘎吱声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the creak.', right: 'He gave me some advice about the creak.', reason: 'advice 不可数。名词 creak 的单复数按词典词形记。', rule: '先确定 creak 是noun，再套「嘎吱声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creak.q1', senseId: 'creak.s1', errorType: 'meaning', type: '词义选择', prompt: '「creak」在本条的核心意思是：', options: ['嘎吱声', '完全相反的意思', '一种古代钱币'], answer: '嘎吱声', explain: 'creak：嘎吱声。' },
      { id: 'creak.q2', senseId: 'creak.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creak?', options: ['嘎吱声', 'a kind of ancient coin', 'the past tense of be'], answer: '嘎吱声', explain: '对的是「嘎吱声」。' },
      { id: 'creak.q3', senseId: 'creak.s1', errorType: 'grammar', type: '词义选择', prompt: 'creak 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'creak.q4', senseId: 'creak.s1', errorType: 'meaning', type: '词源', prompt: '记 creak 时，哪句更稳妥？', options: ['先锁住「嘎吱声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嘎吱声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嘎吱声'] },
  });

  D('cream', {
    etymology: {
      origin: '拉丁语 cramum 一类，经法语。',
      prefix: null,
      root: { text: 'cream', gloss: '奶油' },
      suffix: null,
      history: [
        { label: 'cream', text: '拉丁语 cramum 一类，经法语。' },
        { label: '现在', text: '核心用法是：奶油。' },
      ],
      formationLogic: '考试认现在的用法：奶油。',
      mnemonic: '看到 cream，先说出「奶油」。',
      note: '考试认现在的用法：奶油。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cream.', chinese: '这一章反复回到同一个点：奶油。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cream.s1', en: 'Without that cream, the next paragraph is hard to follow.', zh: '没有这个奶油，下一段会很难读。', structure: 'cream / 表示 / 奶油', grammar: 'noun，围绕「奶油」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cream.', right: 'He gave me some advice about the cream.', reason: 'advice 不可数。名词 cream 的单复数按词典词形记。', rule: '先确定 cream 是noun，再套「奶油」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cream.q1', senseId: 'cream.s1', errorType: 'meaning', type: '词义选择', prompt: '「cream」在本条的核心意思是：', options: ['奶油', '完全相反的意思', '一种古代钱币'], answer: '奶油', explain: 'cream：奶油。' },
      { id: 'cream.q2', senseId: 'cream.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cream?', options: ['奶油', 'a kind of ancient coin', 'the past tense of be'], answer: '奶油', explain: '对的是「奶油」。' },
      { id: 'cream.q3', senseId: 'cream.s1', errorType: 'grammar', type: '词义选择', prompt: 'cream 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cream.q4', senseId: 'cream.s1', errorType: 'meaning', type: '词源', prompt: '记 cream 时，哪句更稳妥？', options: ['先锁住「奶油」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「奶油」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['奶油'] },
  });

  D('crease', {
    etymology: {
      origin: '现代英语常用词「crease」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crease', gloss: '折痕' },
      suffix: null,
      history: [
        { label: 'crease', text: '现代英语常用词「crease」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：折痕。' },
      ],
      formationLogic: '核心义：折痕。',
      mnemonic: '看到 crease，先说出「折痕」。',
      note: '核心义：折痕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crease.', chinese: '这一章反复回到同一个点：折痕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crease.s1', en: 'Without that crease, the next paragraph is hard to follow.', zh: '没有这个折痕，下一段会很难读。', structure: 'crease / 表示 / 折痕', grammar: 'noun，围绕「折痕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crease.', right: 'He gave me some advice about the crease.', reason: 'advice 不可数。名词 crease 的单复数按词典词形记。', rule: '先确定 crease 是noun，再套「折痕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crease.q1', senseId: 'crease.s1', errorType: 'meaning', type: '词义选择', prompt: '「crease」在本条的核心意思是：', options: ['折痕', '完全相反的意思', '一种古代钱币'], answer: '折痕', explain: 'crease：折痕。' },
      { id: 'crease.q2', senseId: 'crease.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crease?', options: ['折痕', 'a kind of ancient coin', 'the past tense of be'], answer: '折痕', explain: '对的是「折痕」。' },
      { id: 'crease.q3', senseId: 'crease.s1', errorType: 'grammar', type: '词义选择', prompt: 'crease 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crease.q4', senseId: 'crease.s1', errorType: 'meaning', type: '词源', prompt: '记 crease 时，哪句更稳妥？', options: ['先锁住「折痕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「折痕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['折痕'] },
  });

  D('create', {
    etymology: {
      origin: '拉丁语 creare「使生长、创造」。',
      prefix: null,
      root: { text: 'create', gloss: '创造' },
      suffix: null,
      history: [
        { label: 'create', text: '拉丁语 creare「使生长、创造」。' },
        { label: '现在', text: '核心用法是：创造。' },
      ],
      formationLogic: '考试认现在的用法：创造。',
      mnemonic: '看到 create，先说出「创造」。',
      note: '考试认现在的用法：创造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to create before the office closed.', chinese: '他们同意在办公室关门前做这件事：创造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'create.s1', en: 'The deadline forced the team to create that afternoon.', zh: '截止日期逼着小组在那天下午创造。', structure: 'create / 表示 / 创造', grammar: 'verb，围绕「创造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She createed it yesterday without checking the real past form.', right: 'Check the past form of "create" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 create 是verb，再套「创造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'create.q1', senseId: 'create.s1', errorType: 'meaning', type: '词义选择', prompt: '「create」在本条的核心意思是：', options: ['创造', '完全相反的意思', '一种古代钱币'], answer: '创造', explain: 'create：创造。' },
      { id: 'create.q2', senseId: 'create.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches create?', options: ['创造', 'a kind of ancient coin', 'the past tense of be'], answer: '创造', explain: '对的是「创造」。' },
      { id: 'create.q3', senseId: 'create.s1', errorType: 'grammar', type: '词义选择', prompt: 'create 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'create.q4', senseId: 'create.s1', errorType: 'meaning', type: '词源', prompt: '记 create 时，哪句更稳妥？', options: ['先锁住「创造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「创造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['创造'] },
  });

  D('creation', {
    etymology: {
      origin: '英语派生：crea + -tion，词性转到「创造」。',
      prefix: null,
      root: { text: 'crea', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'creation', text: '英语派生：crea + -tion，词性转到「创造」。' },
        { label: '现在', text: '核心用法是：创造。' },
      ],
      formationLogic: '先认词干 crea，再看词尾。',
      mnemonic: '看到 creation，先说出「创造」。',
      note: '先认词干 crea，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one creation.', chinese: '这一章反复回到同一个点：创造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creation.s1', en: 'Without that creation, the next paragraph is hard to follow.', zh: '没有这个创造，下一段会很难读。', structure: 'creation / 表示 / 创造', grammar: 'noun，围绕「创造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the creation.', right: 'He gave me some advice about the creation.', reason: 'advice 不可数。名词 creation 的单复数按词典词形记。', rule: '先确定 creation 是noun，再套「创造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creation.q1', senseId: 'creation.s1', errorType: 'meaning', type: '词义选择', prompt: '「creation」在本条的核心意思是：', options: ['创造', '完全相反的意思', '一种古代钱币'], answer: '创造', explain: 'creation：创造。' },
      { id: 'creation.q2', senseId: 'creation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creation?', options: ['创造', 'a kind of ancient coin', 'the past tense of be'], answer: '创造', explain: '对的是「创造」。' },
      { id: 'creation.q3', senseId: 'creation.s1', errorType: 'grammar', type: '词义选择', prompt: 'creation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'creation.q4', senseId: 'creation.s1', errorType: 'meaning', type: '词源', prompt: '记 creation 时，哪句更稳妥？', options: ['先锁住「创造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「创造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['创造'] },
  });

  D('creative', {
    etymology: {
      origin: '英语派生：creat + -ive，词性转到「有创造力的」。',
      prefix: null,
      root: { text: 'creat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'creative', text: '英语派生：creat + -ive，词性转到「有创造力的」。' },
        { label: '现在', text: '核心用法是：有创造力的。' },
      ],
      formationLogic: '先认词干 creat，再看词尾。',
      mnemonic: '看到 creative，先说出「有创造力的」。',
      note: '先认词干 creat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was creative.', chinese: '即使是初读者也能看出，这个结果是有创造力的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creative.s1', en: 'They wanted a creative answer, not a long speech.', zh: '他们要一个有创造力的的答复，不要长篇发言。', structure: 'creative / 表示 / 有创造力的', grammar: 'adjective，围绕「有创造力的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are creative.', right: 'The news is creative.', reason: 'news 作主语时动词用单数。', rule: '先确定 creative 是adjective，再套「有创造力的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creative.q1', senseId: 'creative.s1', errorType: 'meaning', type: '词义选择', prompt: '「creative」在本条的核心意思是：', options: ['有创造力的', '完全相反的意思', '一种古代钱币'], answer: '有创造力的', explain: 'creative：有创造力的。' },
      { id: 'creative.q2', senseId: 'creative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creative?', options: ['有创造力的', 'a kind of ancient coin', 'the past tense of be'], answer: '有创造力的', explain: '对的是「有创造力的」。' },
      { id: 'creative.q3', senseId: 'creative.s1', errorType: 'grammar', type: '词义选择', prompt: 'creative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'creative.q4', senseId: 'creative.s1', errorType: 'meaning', type: '词源', prompt: '记 creative 时，哪句更稳妥？', options: ['先锁住「有创造力的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有创造力的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有创造力的'] },
  });

  D('creator', {
    etymology: {
      origin: '英语派生：creat + -or，词性转到「创造者」。',
      prefix: null,
      root: { text: 'creat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'creator', text: '英语派生：creat + -or，词性转到「创造者」。' },
        { label: '现在', text: '核心用法是：创造者。' },
      ],
      formationLogic: '先认词干 creat，再看词尾。',
      mnemonic: '看到 creator，先说出「创造者」。',
      note: '先认词干 creat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one creator.', chinese: '这一章反复回到同一个点：创造者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creator.s1', en: 'Without that creator, the next paragraph is hard to follow.', zh: '没有这个创造者，下一段会很难读。', structure: 'creator / 表示 / 创造者', grammar: 'noun，围绕「创造者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the creator.', right: 'He gave me some advice about the creator.', reason: 'advice 不可数。名词 creator 的单复数按词典词形记。', rule: '先确定 creator 是noun，再套「创造者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creator.q1', senseId: 'creator.s1', errorType: 'meaning', type: '词义选择', prompt: '「creator」在本条的核心意思是：', options: ['创造者', '完全相反的意思', '一种古代钱币'], answer: '创造者', explain: 'creator：创造者。' },
      { id: 'creator.q2', senseId: 'creator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creator?', options: ['创造者', 'a kind of ancient coin', 'the past tense of be'], answer: '创造者', explain: '对的是「创造者」。' },
      { id: 'creator.q3', senseId: 'creator.s1', errorType: 'grammar', type: '词义选择', prompt: 'creator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'creator.q4', senseId: 'creator.s1', errorType: 'meaning', type: '词源', prompt: '记 creator 时，哪句更稳妥？', options: ['先锁住「创造者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「创造者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['创造者'] },
  });

  D('creature', {
    etymology: {
      origin: '拉丁语 creatura「被造出来的东西」。',
      prefix: null,
      root: { text: 'creature', gloss: '生物' },
      suffix: null,
      history: [
        { label: 'creature', text: '拉丁语 creatura「被造出来的东西」。' },
        { label: '现在', text: '核心用法是：生物。' },
      ],
      formationLogic: '考试认现在的用法：生物。',
      mnemonic: '看到 creature，先说出「生物」。',
      note: '考试认现在的用法：生物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one creature.', chinese: '这一章反复回到同一个点：生物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creature.s1', en: 'Without that creature, the next paragraph is hard to follow.', zh: '没有这个生物，下一段会很难读。', structure: 'creature / 表示 / 生物', grammar: 'noun，围绕「生物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the creature.', right: 'He gave me some advice about the creature.', reason: 'advice 不可数。名词 creature 的单复数按词典词形记。', rule: '先确定 creature 是noun，再套「生物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creature.q1', senseId: 'creature.s1', errorType: 'meaning', type: '词义选择', prompt: '「creature」在本条的核心意思是：', options: ['生物', '完全相反的意思', '一种古代钱币'], answer: '生物', explain: 'creature：生物。' },
      { id: 'creature.q2', senseId: 'creature.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creature?', options: ['生物', 'a kind of ancient coin', 'the past tense of be'], answer: '生物', explain: '对的是「生物」。' },
      { id: 'creature.q3', senseId: 'creature.s1', errorType: 'grammar', type: '词义选择', prompt: 'creature 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'creature.q4', senseId: 'creature.s1', errorType: 'meaning', type: '词源', prompt: '记 creature 时，哪句更稳妥？', options: ['先锁住「生物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「生物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['生物'] },
  });

  D('credential', {
    etymology: {
      origin: '英语派生：credenti + -al，词性转到「资格证书」。',
      prefix: null,
      root: { text: 'credenti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'credential', text: '英语派生：credenti + -al，词性转到「资格证书」。' },
        { label: '现在', text: '核心用法是：资格证书。' },
      ],
      formationLogic: '先认词干 credenti，再看词尾。',
      mnemonic: '看到 credential，先说出「资格证书」。',
      note: '先认词干 credenti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one credential.', chinese: '这一章反复回到同一个点：资格证书。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'credential.s1', en: 'Without that credential, the next paragraph is hard to follow.', zh: '没有这个资格证书，下一段会很难读。', structure: 'credential / 表示 / 资格证书', grammar: 'noun，围绕「资格证书」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the credential.', right: 'He gave me some advice about the credential.', reason: 'advice 不可数。名词 credential 的单复数按词典词形记。', rule: '先确定 credential 是noun，再套「资格证书」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'credential.q1', senseId: 'credential.s1', errorType: 'meaning', type: '词义选择', prompt: '「credential」在本条的核心意思是：', options: ['资格证书', '完全相反的意思', '一种古代钱币'], answer: '资格证书', explain: 'credential：资格证书。' },
      { id: 'credential.q2', senseId: 'credential.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches credential?', options: ['资格证书', 'a kind of ancient coin', 'the past tense of be'], answer: '资格证书', explain: '对的是「资格证书」。' },
      { id: 'credential.q3', senseId: 'credential.s1', errorType: 'grammar', type: '词义选择', prompt: 'credential 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'credential.q4', senseId: 'credential.s1', errorType: 'meaning', type: '词源', prompt: '记 credential 时，哪句更稳妥？', options: ['先锁住「资格证书」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「资格证书」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['资格证书'] },
  });

  D('credible', {
    etymology: {
      origin: '英语派生：cred + -ible，词性转到「可信的」。',
      prefix: null,
      root: { text: 'cred', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'credible', text: '英语派生：cred + -ible，词性转到「可信的」。' },
        { label: '现在', text: '核心用法是：可信的。' },
      ],
      formationLogic: '先认词干 cred，再看词尾。',
      mnemonic: '看到 credible，先说出「可信的」。',
      note: '先认词干 cred，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was credible.', chinese: '即使是初读者也能看出，这个结果是可信的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'credible.s1', en: 'They wanted a credible answer, not a long speech.', zh: '他们要一个可信的的答复，不要长篇发言。', structure: 'credible / 表示 / 可信的', grammar: 'adjective，围绕「可信的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are credible.', right: 'The news is credible.', reason: 'news 作主语时动词用单数。', rule: '先确定 credible 是adjective，再套「可信的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'credible.q1', senseId: 'credible.s1', errorType: 'meaning', type: '词义选择', prompt: '「credible」在本条的核心意思是：', options: ['可信的', '完全相反的意思', '一种古代钱币'], answer: '可信的', explain: 'credible：可信的。' },
      { id: 'credible.q2', senseId: 'credible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches credible?', options: ['可信的', 'a kind of ancient coin', 'the past tense of be'], answer: '可信的', explain: '对的是「可信的」。' },
      { id: 'credible.q3', senseId: 'credible.s1', errorType: 'grammar', type: '词义选择', prompt: 'credible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'credible.q4', senseId: 'credible.s1', errorType: 'meaning', type: '词源', prompt: '记 credible 时，哪句更稳妥？', options: ['先锁住「可信的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可信的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可信的'] },
  });

  D('credit', {
    etymology: {
      origin: '拉丁语 credere「相信」。信用是别人相信你会还。',
      prefix: null,
      root: { text: 'credit', gloss: '信贷' },
      suffix: null,
      history: [
        { label: 'credit', text: '拉丁语 credere「相信」。信用是别人相信你会还。' },
        { label: '现在', text: '核心用法是：信贷。' },
      ],
      formationLogic: '考试认现在的用法：信贷。',
      mnemonic: '看到 credit，先说出「信贷」。',
      note: '考试认现在的用法：信贷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one credit.', chinese: '这一章反复回到同一个点：信贷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'credit.s1', en: 'Without that credit, the next paragraph is hard to follow.', zh: '没有这个信贷，下一段会很难读。', structure: 'credit / 表示 / 信贷', grammar: 'noun，围绕「信贷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the credit.', right: 'He gave me some advice about the credit.', reason: 'advice 不可数。名词 credit 的单复数按词典词形记。', rule: '先确定 credit 是noun，再套「信贷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'credit.q1', senseId: 'credit.s1', errorType: 'meaning', type: '词义选择', prompt: '「credit」在本条的核心意思是：', options: ['信贷', '完全相反的意思', '一种古代钱币'], answer: '信贷', explain: 'credit：信贷。' },
      { id: 'credit.q2', senseId: 'credit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches credit?', options: ['信贷', 'a kind of ancient coin', 'the past tense of be'], answer: '信贷', explain: '对的是「信贷」。' },
      { id: 'credit.q3', senseId: 'credit.s1', errorType: 'grammar', type: '词义选择', prompt: 'credit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'credit.q4', senseId: 'credit.s1', errorType: 'meaning', type: '词源', prompt: '记 credit 时，哪句更稳妥？', options: ['先锁住「信贷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「信贷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['信贷'] },
  });

  D('creed', {
    etymology: {
      origin: '现代英语常用词「creed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'creed', gloss: '信条' },
      suffix: null,
      history: [
        { label: 'creed', text: '现代英语常用词「creed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：信条。' },
      ],
      formationLogic: '核心义：信条。',
      mnemonic: '看到 creed，先说出「信条」。',
      note: '核心义：信条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one creed.', chinese: '这一章反复回到同一个点：信条。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creed.s1', en: 'Without that creed, the next paragraph is hard to follow.', zh: '没有这个信条，下一段会很难读。', structure: 'creed / 表示 / 信条', grammar: 'noun，围绕「信条」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the creed.', right: 'He gave me some advice about the creed.', reason: 'advice 不可数。名词 creed 的单复数按词典词形记。', rule: '先确定 creed 是noun，再套「信条」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creed.q1', senseId: 'creed.s1', errorType: 'meaning', type: '词义选择', prompt: '「creed」在本条的核心意思是：', options: ['信条', '完全相反的意思', '一种古代钱币'], answer: '信条', explain: 'creed：信条。' },
      { id: 'creed.q2', senseId: 'creed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creed?', options: ['信条', 'a kind of ancient coin', 'the past tense of be'], answer: '信条', explain: '对的是「信条」。' },
      { id: 'creed.q3', senseId: 'creed.s1', errorType: 'grammar', type: '词义选择', prompt: 'creed 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'creed.q4', senseId: 'creed.s1', errorType: 'meaning', type: '词源', prompt: '记 creed 时，哪句更稳妥？', options: ['先锁住「信条」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「信条」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['信条'] },
  });

  D('creek', {
    etymology: {
      origin: '现代英语常用词「creek」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'creek', gloss: '小溪' },
      suffix: null,
      history: [
        { label: 'creek', text: '现代英语常用词「creek」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小溪。' },
      ],
      formationLogic: '核心义：小溪。',
      mnemonic: '看到 creek，先说出「小溪」。',
      note: '核心义：小溪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one creek.', chinese: '这一章反复回到同一个点：小溪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creek.s1', en: 'Without that creek, the next paragraph is hard to follow.', zh: '没有这个小溪，下一段会很难读。', structure: 'creek / 表示 / 小溪', grammar: 'noun，围绕「小溪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the creek.', right: 'He gave me some advice about the creek.', reason: 'advice 不可数。名词 creek 的单复数按词典词形记。', rule: '先确定 creek 是noun，再套「小溪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creek.q1', senseId: 'creek.s1', errorType: 'meaning', type: '词义选择', prompt: '「creek」在本条的核心意思是：', options: ['小溪', '完全相反的意思', '一种古代钱币'], answer: '小溪', explain: 'creek：小溪。' },
      { id: 'creek.q2', senseId: 'creek.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creek?', options: ['小溪', 'a kind of ancient coin', 'the past tense of be'], answer: '小溪', explain: '对的是「小溪」。' },
      { id: 'creek.q3', senseId: 'creek.s1', errorType: 'grammar', type: '词义选择', prompt: 'creek 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'creek.q4', senseId: 'creek.s1', errorType: 'meaning', type: '词源', prompt: '记 creek 时，哪句更稳妥？', options: ['先锁住「小溪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小溪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小溪'] },
  });

  D('creep', {
    etymology: {
      origin: '古英语 creopan。',
      prefix: null,
      root: { text: 'creep', gloss: '爬行' },
      suffix: null,
      history: [
        { label: 'creep', text: '古英语 creopan。' },
        { label: '现在', text: '核心用法是：爬行。' },
      ],
      formationLogic: '考试认现在的用法：爬行。',
      mnemonic: '看到 creep，先说出「爬行」。',
      note: '考试认现在的用法：爬行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to creep before the office closed.', chinese: '他们同意在办公室关门前做这件事：爬行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'creep.s1', en: 'The deadline forced the team to creep that afternoon.', zh: '截止日期逼着小组在那天下午爬行。', structure: 'creep / 表示 / 爬行', grammar: 'verb，围绕「爬行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She creeped it yesterday without checking the real past form.', right: 'Check the past form of "creep" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 creep 是verb，再套「爬行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'creep.q1', senseId: 'creep.s1', errorType: 'meaning', type: '词义选择', prompt: '「creep」在本条的核心意思是：', options: ['爬行', '完全相反的意思', '一种古代钱币'], answer: '爬行', explain: 'creep：爬行。' },
      { id: 'creep.q2', senseId: 'creep.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches creep?', options: ['爬行', 'a kind of ancient coin', 'the past tense of be'], answer: '爬行', explain: '对的是「爬行」。' },
      { id: 'creep.q3', senseId: 'creep.s1', errorType: 'grammar', type: '词义选择', prompt: 'creep 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'creep.q4', senseId: 'creep.s1', errorType: 'meaning', type: '词源', prompt: '记 creep 时，哪句更稳妥？', options: ['先锁住「爬行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爬行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爬行'] },
  });

  D('crest', {
    etymology: {
      origin: '现代英语常用词「crest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crest', gloss: '顶峰' },
      suffix: null,
      history: [
        { label: 'crest', text: '现代英语常用词「crest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：顶峰。' },
      ],
      formationLogic: '核心义：顶峰。',
      mnemonic: '看到 crest，先说出「顶峰」。',
      note: '核心义：顶峰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crest.', chinese: '这一章反复回到同一个点：顶峰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crest.s1', en: 'Without that crest, the next paragraph is hard to follow.', zh: '没有这个顶峰，下一段会很难读。', structure: 'crest / 表示 / 顶峰', grammar: 'noun，围绕「顶峰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crest.', right: 'He gave me some advice about the crest.', reason: 'advice 不可数。名词 crest 的单复数按词典词形记。', rule: '先确定 crest 是noun，再套「顶峰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crest.q1', senseId: 'crest.s1', errorType: 'meaning', type: '词义选择', prompt: '「crest」在本条的核心意思是：', options: ['顶峰', '完全相反的意思', '一种古代钱币'], answer: '顶峰', explain: 'crest：顶峰。' },
      { id: 'crest.q2', senseId: 'crest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crest?', options: ['顶峰', 'a kind of ancient coin', 'the past tense of be'], answer: '顶峰', explain: '对的是「顶峰」。' },
      { id: 'crest.q3', senseId: 'crest.s1', errorType: 'grammar', type: '词义选择', prompt: 'crest 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crest.q4', senseId: 'crest.s1', errorType: 'meaning', type: '词源', prompt: '记 crest 时，哪句更稳妥？', options: ['先锁住「顶峰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「顶峰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['顶峰'] },
  });

  D('crew', {
    etymology: {
      origin: '古法语 creue「增援的一伙人」。',
      prefix: null,
      root: { text: 'crew', gloss: '全体船员' },
      suffix: null,
      history: [
        { label: 'crew', text: '古法语 creue「增援的一伙人」。' },
        { label: '现在', text: '核心用法是：全体船员。' },
      ],
      formationLogic: '考试认现在的用法：全体船员。',
      mnemonic: '看到 crew，先说出「全体船员」。',
      note: '考试认现在的用法：全体船员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crew.', chinese: '这一章反复回到同一个点：全体船员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crew.s1', en: 'Without that crew, the next paragraph is hard to follow.', zh: '没有这个全体船员，下一段会很难读。', structure: 'crew / 表示 / 全体船员', grammar: 'noun，围绕「全体船员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crew.', right: 'He gave me some advice about the crew.', reason: 'advice 不可数。名词 crew 的单复数按词典词形记。', rule: '先确定 crew 是noun，再套「全体船员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crew.q1', senseId: 'crew.s1', errorType: 'meaning', type: '词义选择', prompt: '「crew」在本条的核心意思是：', options: ['全体船员', '完全相反的意思', '一种古代钱币'], answer: '全体船员', explain: 'crew：全体船员。' },
      { id: 'crew.q2', senseId: 'crew.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crew?', options: ['全体船员', 'a kind of ancient coin', 'the past tense of be'], answer: '全体船员', explain: '对的是「全体船员」。' },
      { id: 'crew.q3', senseId: 'crew.s1', errorType: 'grammar', type: '词义选择', prompt: 'crew 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crew.q4', senseId: 'crew.s1', errorType: 'meaning', type: '词源', prompt: '记 crew 时，哪句更稳妥？', options: ['先锁住「全体船员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全体船员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全体船员'] },
  });

  D('cricket', {
    etymology: {
      origin: '现代英语常用词「cricket」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cricket', gloss: '蟋蟀' },
      suffix: null,
      history: [
        { label: 'cricket', text: '现代英语常用词「cricket」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蟋蟀。' },
      ],
      formationLogic: '核心义：蟋蟀。',
      mnemonic: '看到 cricket，先说出「蟋蟀」。',
      note: '核心义：蟋蟀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cricket.', chinese: '这一章反复回到同一个点：蟋蟀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cricket.s1', en: 'Without that cricket, the next paragraph is hard to follow.', zh: '没有这个蟋蟀，下一段会很难读。', structure: 'cricket / 表示 / 蟋蟀', grammar: 'noun，围绕「蟋蟀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cricket.', right: 'He gave me some advice about the cricket.', reason: 'advice 不可数。名词 cricket 的单复数按词典词形记。', rule: '先确定 cricket 是noun，再套「蟋蟀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cricket.q1', senseId: 'cricket.s1', errorType: 'meaning', type: '词义选择', prompt: '「cricket」在本条的核心意思是：', options: ['蟋蟀', '完全相反的意思', '一种古代钱币'], answer: '蟋蟀', explain: 'cricket：蟋蟀。' },
      { id: 'cricket.q2', senseId: 'cricket.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cricket?', options: ['蟋蟀', 'a kind of ancient coin', 'the past tense of be'], answer: '蟋蟀', explain: '对的是「蟋蟀」。' },
      { id: 'cricket.q3', senseId: 'cricket.s1', errorType: 'grammar', type: '词义选择', prompt: 'cricket 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cricket.q4', senseId: 'cricket.s1', errorType: 'meaning', type: '词源', prompt: '记 cricket 时，哪句更稳妥？', options: ['先锁住「蟋蟀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蟋蟀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蟋蟀'] },
  });

  D('crime', {
    etymology: {
      origin: '拉丁语 crimen「指控、罪」。',
      prefix: null,
      root: { text: 'crime', gloss: '罪行' },
      suffix: null,
      history: [
        { label: 'crime', text: '拉丁语 crimen「指控、罪」。' },
        { label: '现在', text: '核心用法是：罪行。' },
      ],
      formationLogic: '考试认现在的用法：罪行。',
      mnemonic: '看到 crime，先说出「罪行」。',
      note: '考试认现在的用法：罪行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crime.', chinese: '这一章反复回到同一个点：罪行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crime.s1', en: 'Without that crime, the next paragraph is hard to follow.', zh: '没有这个罪行，下一段会很难读。', structure: 'crime / 表示 / 罪行', grammar: 'noun，围绕「罪行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crime.', right: 'He gave me some advice about the crime.', reason: 'advice 不可数。名词 crime 的单复数按词典词形记。', rule: '先确定 crime 是noun，再套「罪行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crime.q1', senseId: 'crime.s1', errorType: 'meaning', type: '词义选择', prompt: '「crime」在本条的核心意思是：', options: ['罪行', '完全相反的意思', '一种古代钱币'], answer: '罪行', explain: 'crime：罪行。' },
      { id: 'crime.q2', senseId: 'crime.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crime?', options: ['罪行', 'a kind of ancient coin', 'the past tense of be'], answer: '罪行', explain: '对的是「罪行」。' },
      { id: 'crime.q3', senseId: 'crime.s1', errorType: 'grammar', type: '词义选择', prompt: 'crime 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crime.q4', senseId: 'crime.s1', errorType: 'meaning', type: '词源', prompt: '记 crime 时，哪句更稳妥？', options: ['先锁住「罪行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「罪行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['罪行'] },
  });

  D('criminal', {
    etymology: {
      origin: 'crime + -al。',
      prefix: null,
      root: { text: 'criminal', gloss: '犯罪的' },
      suffix: null,
      history: [
        { label: 'criminal', text: 'crime + -al。' },
        { label: '现在', text: '核心用法是：犯罪的。' },
      ],
      formationLogic: '考试认现在的用法：犯罪的。',
      mnemonic: '看到 criminal，先说出「犯罪的」。',
      note: '考试认现在的用法：犯罪的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one criminal.', chinese: '这一章反复回到同一个点：犯罪的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'criminal.s1', en: 'Without that criminal, the next paragraph is hard to follow.', zh: '没有这个犯罪的，下一段会很难读。', structure: 'criminal / 表示 / 犯罪的', grammar: 'noun，围绕「犯罪的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the criminal.', right: 'He gave me some advice about the criminal.', reason: 'advice 不可数。名词 criminal 的单复数按词典词形记。', rule: '先确定 criminal 是noun，再套「犯罪的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'criminal.q1', senseId: 'criminal.s1', errorType: 'meaning', type: '词义选择', prompt: '「criminal」在本条的核心意思是：', options: ['犯罪的', '完全相反的意思', '一种古代钱币'], answer: '犯罪的', explain: 'criminal：犯罪的。' },
      { id: 'criminal.q2', senseId: 'criminal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches criminal?', options: ['犯罪的', 'a kind of ancient coin', 'the past tense of be'], answer: '犯罪的', explain: '对的是「犯罪的」。' },
      { id: 'criminal.q3', senseId: 'criminal.s1', errorType: 'grammar', type: '词义选择', prompt: 'criminal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'criminal.q4', senseId: 'criminal.s1', errorType: 'meaning', type: '词源', prompt: '记 criminal 时，哪句更稳妥？', options: ['先锁住「犯罪的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「犯罪的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['犯罪的'] },
  });

  D('crimson', {
    etymology: {
      origin: '现代英语常用词「crimson」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crimson', gloss: '深红色（的）' },
      suffix: null,
      history: [
        { label: 'crimson', text: '现代英语常用词「crimson」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：深红色（的）。' },
      ],
      formationLogic: '核心义：深红色（的）。',
      mnemonic: '看到 crimson，先说出「深红色（的）」。',
      note: '核心义：深红色（的）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crimson.', chinese: '这一章反复回到同一个点：深红色（的）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crimson.s1', en: 'Without that crimson, the next paragraph is hard to follow.', zh: '没有这个深红色（的），下一段会很难读。', structure: 'crimson / 表示 / 深红色（的）', grammar: 'noun，围绕「深红色（的）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crimson.', right: 'He gave me some advice about the crimson.', reason: 'advice 不可数。名词 crimson 的单复数按词典词形记。', rule: '先确定 crimson 是noun，再套「深红色（的）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crimson.q1', senseId: 'crimson.s1', errorType: 'meaning', type: '词义选择', prompt: '「crimson」在本条的核心意思是：', options: ['深红色（的）', '完全相反的意思', '一种古代钱币'], answer: '深红色（的）', explain: 'crimson：深红色（的）。' },
      { id: 'crimson.q2', senseId: 'crimson.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crimson?', options: ['深红色（的）', 'a kind of ancient coin', 'the past tense of be'], answer: '深红色（的）', explain: '对的是「深红色（的）」。' },
      { id: 'crimson.q3', senseId: 'crimson.s1', errorType: 'grammar', type: '词义选择', prompt: 'crimson 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crimson.q4', senseId: 'crimson.s1', errorType: 'meaning', type: '词源', prompt: '记 crimson 时，哪句更稳妥？', options: ['先锁住「深红色（的）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深红色（的）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深红色（的）'] },
  });

  D('cripple', {
    etymology: {
      origin: '现代英语常用词「cripple」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cripple', gloss: '使残废' },
      suffix: null,
      history: [
        { label: 'cripple', text: '现代英语常用词「cripple」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使残废。' },
      ],
      formationLogic: '核心义：使残废。',
      mnemonic: '看到 cripple，先说出「使残废」。',
      note: '核心义：使残废。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cripple before the office closed.', chinese: '他们同意在办公室关门前做这件事：使残废。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cripple.s1', en: 'The deadline forced the team to cripple that afternoon.', zh: '截止日期逼着小组在那天下午使残废。', structure: 'cripple / 表示 / 使残废', grammar: 'verb，围绕「使残废」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She crippleed it yesterday without checking the real past form.', right: 'Check the past form of "cripple" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cripple 是verb，再套「使残废」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cripple.q1', senseId: 'cripple.s1', errorType: 'meaning', type: '词义选择', prompt: '「cripple」在本条的核心意思是：', options: ['使残废', '完全相反的意思', '一种古代钱币'], answer: '使残废', explain: 'cripple：使残废。' },
      { id: 'cripple.q2', senseId: 'cripple.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cripple?', options: ['使残废', 'a kind of ancient coin', 'the past tense of be'], answer: '使残废', explain: '对的是「使残废」。' },
      { id: 'cripple.q3', senseId: 'cripple.s1', errorType: 'grammar', type: '词义选择', prompt: 'cripple 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cripple.q4', senseId: 'cripple.s1', errorType: 'meaning', type: '词源', prompt: '记 cripple 时，哪句更稳妥？', options: ['先锁住「使残废」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使残废」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使残废'] },
  });

  D('crippled', {
    etymology: {
      origin: '现代英语常用词「crippled」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crippled', gloss: '瘸的' },
      suffix: null,
      history: [
        { label: 'crippled', text: '现代英语常用词「crippled」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：瘸的。' },
      ],
      formationLogic: '核心义：瘸的。',
      mnemonic: '看到 crippled，先说出「瘸的」。',
      note: '核心义：瘸的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crippled.', chinese: '即使是初读者也能看出，这个结果是瘸的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crippled.s1', en: 'They wanted a crippled answer, not a long speech.', zh: '他们要一个瘸的的答复，不要长篇发言。', structure: 'crippled / 表示 / 瘸的', grammar: 'adjective，围绕「瘸的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crippled.', right: 'The news is crippled.', reason: 'news 作主语时动词用单数。', rule: '先确定 crippled 是adjective，再套「瘸的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crippled.q1', senseId: 'crippled.s1', errorType: 'meaning', type: '词义选择', prompt: '「crippled」在本条的核心意思是：', options: ['瘸的', '完全相反的意思', '一种古代钱币'], answer: '瘸的', explain: 'crippled：瘸的。' },
      { id: 'crippled.q2', senseId: 'crippled.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crippled?', options: ['瘸的', 'a kind of ancient coin', 'the past tense of be'], answer: '瘸的', explain: '对的是「瘸的」。' },
      { id: 'crippled.q3', senseId: 'crippled.s1', errorType: 'grammar', type: '词义选择', prompt: 'crippled 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crippled.q4', senseId: 'crippled.s1', errorType: 'meaning', type: '词源', prompt: '记 crippled 时，哪句更稳妥？', options: ['先锁住「瘸的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「瘸的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['瘸的'] },
  });

  D('crisis', {
    etymology: {
      origin: '希腊语 krisis「决定、转折」。',
      prefix: null,
      root: { text: 'crisis', gloss: '危机' },
      suffix: null,
      history: [
        { label: 'crisis', text: '希腊语 krisis「决定、转折」。' },
        { label: '现在', text: '核心用法是：危机。' },
      ],
      formationLogic: '考试认现在的用法：危机。',
      mnemonic: '看到 crisis，先说出「危机」。',
      note: '考试认现在的用法：危机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one crisis.', chinese: '这一章反复回到同一个点：危机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crisis.s1', en: 'Without that crisis, the next paragraph is hard to follow.', zh: '没有这个危机，下一段会很难读。', structure: 'crisis / 表示 / 危机', grammar: 'noun，围绕「危机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the crisis.', right: 'He gave me some advice about the crisis.', reason: 'advice 不可数。名词 crisis 的单复数按词典词形记。', rule: '先确定 crisis 是noun，再套「危机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crisis.q1', senseId: 'crisis.s1', errorType: 'meaning', type: '词义选择', prompt: '「crisis」在本条的核心意思是：', options: ['危机', '完全相反的意思', '一种古代钱币'], answer: '危机', explain: 'crisis：危机。' },
      { id: 'crisis.q2', senseId: 'crisis.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crisis?', options: ['危机', 'a kind of ancient coin', 'the past tense of be'], answer: '危机', explain: '对的是「危机」。' },
      { id: 'crisis.q3', senseId: 'crisis.s1', errorType: 'grammar', type: '词义选择', prompt: 'crisis 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'crisis.q4', senseId: 'crisis.s1', errorType: 'meaning', type: '词源', prompt: '记 crisis 时，哪句更稳妥？', options: ['先锁住「危机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「危机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['危机'] },
  });

  D('crisp', {
    etymology: {
      origin: '现代英语常用词「crisp」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'crisp', gloss: '脆的' },
      suffix: null,
      history: [
        { label: 'crisp', text: '现代英语常用词「crisp」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脆的。' },
      ],
      formationLogic: '核心义：脆的。',
      mnemonic: '看到 crisp，先说出「脆的」。',
      note: '核心义：脆的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was crisp.', chinese: '即使是初读者也能看出，这个结果是脆的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'crisp.s1', en: 'They wanted a crisp answer, not a long speech.', zh: '他们要一个脆的的答复，不要长篇发言。', structure: 'crisp / 表示 / 脆的', grammar: 'adjective，围绕「脆的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are crisp.', right: 'The news is crisp.', reason: 'news 作主语时动词用单数。', rule: '先确定 crisp 是adjective，再套「脆的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'crisp.q1', senseId: 'crisp.s1', errorType: 'meaning', type: '词义选择', prompt: '「crisp」在本条的核心意思是：', options: ['脆的', '完全相反的意思', '一种古代钱币'], answer: '脆的', explain: 'crisp：脆的。' },
      { id: 'crisp.q2', senseId: 'crisp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches crisp?', options: ['脆的', 'a kind of ancient coin', 'the past tense of be'], answer: '脆的', explain: '对的是「脆的」。' },
      { id: 'crisp.q3', senseId: 'crisp.s1', errorType: 'grammar', type: '词义选择', prompt: 'crisp 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'crisp.q4', senseId: 'crisp.s1', errorType: 'meaning', type: '词源', prompt: '记 crisp 时，哪句更稳妥？', options: ['先锁住「脆的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脆的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脆的'] },
  });

  D('criterion', {
    etymology: {
      origin: '现代英语常用词「criterion」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'criterion', gloss: '标准' },
      suffix: null,
      history: [
        { label: 'criterion', text: '现代英语常用词「criterion」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：标准。' },
      ],
      formationLogic: '核心义：标准。',
      mnemonic: '看到 criterion，先说出「标准」。',
      note: '核心义：标准。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one criterion.', chinese: '这一章反复回到同一个点：标准。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'criterion.s1', en: 'Without that criterion, the next paragraph is hard to follow.', zh: '没有这个标准，下一段会很难读。', structure: 'criterion / 表示 / 标准', grammar: 'noun，围绕「标准」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the criterion.', right: 'He gave me some advice about the criterion.', reason: 'advice 不可数。名词 criterion 的单复数按词典词形记。', rule: '先确定 criterion 是noun，再套「标准」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'criterion.q1', senseId: 'criterion.s1', errorType: 'meaning', type: '词义选择', prompt: '「criterion」在本条的核心意思是：', options: ['标准', '完全相反的意思', '一种古代钱币'], answer: '标准', explain: 'criterion：标准。' },
      { id: 'criterion.q2', senseId: 'criterion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches criterion?', options: ['标准', 'a kind of ancient coin', 'the past tense of be'], answer: '标准', explain: '对的是「标准」。' },
      { id: 'criterion.q3', senseId: 'criterion.s1', errorType: 'grammar', type: '词义选择', prompt: 'criterion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'criterion.q4', senseId: 'criterion.s1', errorType: 'meaning', type: '词源', prompt: '记 criterion 时，哪句更稳妥？', options: ['先锁住「标准」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「标准」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['标准'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
