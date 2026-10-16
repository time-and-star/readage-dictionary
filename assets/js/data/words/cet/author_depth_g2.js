/* data/words/cet/author_depth_g2.js
 * 手敲深度补丁：everywhere–farmer（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('everywhere', {
    etymology: {
      origin: '现代英语常用词「everywhere」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'everywhere', gloss: '到处' },
      suffix: null,
      history: [
        { label: 'everywhere', text: '现代英语常用词「everywhere」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：到处。' },
      ],
      formationLogic: '核心义：到处。',
      mnemonic: '看到 everywhere，先说出「到处」。',
      note: '核心义：到处。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule everywhere, and the class followed.', chinese: '她把规则讲清楚了（到处），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'everywhere.s1', en: 'He nodded everywhere and returned to the notes.', zh: '他到处地点了点头，又回去看笔记。', structure: 'everywhere / 表示 / 到处', grammar: 'adverb，围绕「到处」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very everywherely in the meeting.', right: 'She spoke everywhere in the meeting.', reason: 'everywhere 已经是副词，不要再加 -ly。', rule: '先确定 everywhere 是adverb，再套「到处」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'everywhere.q1', senseId: 'everywhere.s1', errorType: 'meaning', type: '词义选择', prompt: '「everywhere」在本条的核心意思是：', options: ['到处', '完全相反的意思', '一种古代钱币'], answer: '到处', explain: 'everywhere：到处。' },
      { id: 'everywhere.q2', senseId: 'everywhere.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches everywhere?', options: ['到处', 'a kind of ancient coin', 'the past tense of be'], answer: '到处', explain: '对的是「到处」。' },
      { id: 'everywhere.q3', senseId: 'everywhere.s1', errorType: 'grammar', type: '词义选择', prompt: 'everywhere 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'everywhere.q4', senseId: 'everywhere.s1', errorType: 'meaning', type: '词源', prompt: '记 everywhere 时，哪句更稳妥？', options: ['先锁住「到处」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「到处」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['到处'] },
  });

  D('evict', {
    etymology: {
      origin: '现代英语常用词「evict」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evict', gloss: '驱逐（房客）' },
      suffix: null,
      history: [
        { label: 'evict', text: '现代英语常用词「evict」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：驱逐（房客）。' },
      ],
      formationLogic: '核心义：驱逐（房客）。',
      mnemonic: '看到 evict，先说出「驱逐（房客）」。',
      note: '核心义：驱逐（房客）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evict before the office closed.', chinese: '他们同意在办公室关门前做这件事：驱逐（房客）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evict.s1', en: 'The deadline forced the team to evict that afternoon.', zh: '截止日期逼着小组在那天下午驱逐（房客）。', structure: 'evict / 表示 / 驱逐（房客）', grammar: 'verb，围绕「驱逐（房客）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evicted it yesterday without checking the real past form.', right: 'Check the past form of "evict" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evict 是verb，再套「驱逐（房客）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evict.q1', senseId: 'evict.s1', errorType: 'meaning', type: '词义选择', prompt: '「evict」在本条的核心意思是：', options: ['驱逐（房客）', '完全相反的意思', '一种古代钱币'], answer: '驱逐（房客）', explain: 'evict：驱逐（房客）。' },
      { id: 'evict.q2', senseId: 'evict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evict?', options: ['驱逐（房客）', 'a kind of ancient coin', 'the past tense of be'], answer: '驱逐（房客）', explain: '对的是「驱逐（房客）」。' },
      { id: 'evict.q3', senseId: 'evict.s1', errorType: 'grammar', type: '词义选择', prompt: 'evict 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evict.q4', senseId: 'evict.s1', errorType: 'meaning', type: '词源', prompt: '记 evict 时，哪句更稳妥？', options: ['先锁住「驱逐（房客）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驱逐（房客）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驱逐（房客）'] },
  });

  D('evidence', {
    etymology: {
      origin: '英语派生：evid + -ence，词性转到「证据」。',
      prefix: null,
      root: { text: 'evid', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'evidence', text: '英语派生：evid + -ence，词性转到「证据」。' },
        { label: '现在', text: '核心用法是：证据。' },
      ],
      formationLogic: '先认词干 evid，再看词尾。',
      mnemonic: '看到 evidence，先说出「证据」。',
      note: '先认词干 evid，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one evidence.', chinese: '这一章反复回到同一个点：证据。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evidence.s1', en: 'Without that evidence, the next paragraph is hard to follow.', zh: '没有这个证据，下一段会很难读。', structure: 'evidence / 表示 / 证据', grammar: 'noun，围绕「证据」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the evidence.', right: 'He gave me some advice about the evidence.', reason: 'advice 不可数。名词 evidence 的单复数按词典词形记。', rule: '先确定 evidence 是noun，再套「证据」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evidence.q1', senseId: 'evidence.s1', errorType: 'meaning', type: '词义选择', prompt: '「evidence」在本条的核心意思是：', options: ['证据', '完全相反的意思', '一种古代钱币'], answer: '证据', explain: 'evidence：证据。' },
      { id: 'evidence.q2', senseId: 'evidence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evidence?', options: ['证据', 'a kind of ancient coin', 'the past tense of be'], answer: '证据', explain: '对的是「证据」。' },
      { id: 'evidence.q3', senseId: 'evidence.s1', errorType: 'grammar', type: '词义选择', prompt: 'evidence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'evidence.q4', senseId: 'evidence.s1', errorType: 'meaning', type: '词源', prompt: '记 evidence 时，哪句更稳妥？', options: ['先锁住「证据」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「证据」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['证据'] },
  });

  D('evident', {
    etymology: {
      origin: '现代英语常用词「evident」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evident', gloss: '明显的' },
      suffix: null,
      history: [
        { label: 'evident', text: '现代英语常用词「evident」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：明显的。' },
      ],
      formationLogic: '核心义：明显的。',
      mnemonic: '看到 evident，先说出「明显的」。',
      note: '核心义：明显的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was evident.', chinese: '即使是初读者也能看出，这个结果是明显的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evident.s1', en: 'They wanted a evident answer, not a long speech.', zh: '他们要一个明显的的答复，不要长篇发言。', structure: 'evident / 表示 / 明显的', grammar: 'adjective，围绕「明显的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are evident.', right: 'The news is evident.', reason: 'news 作主语时动词用单数。', rule: '先确定 evident 是adjective，再套「明显的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evident.q1', senseId: 'evident.s1', errorType: 'meaning', type: '词义选择', prompt: '「evident」在本条的核心意思是：', options: ['明显的', '完全相反的意思', '一种古代钱币'], answer: '明显的', explain: 'evident：明显的。' },
      { id: 'evident.q2', senseId: 'evident.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evident?', options: ['明显的', 'a kind of ancient coin', 'the past tense of be'], answer: '明显的', explain: '对的是「明显的」。' },
      { id: 'evident.q3', senseId: 'evident.s1', errorType: 'grammar', type: '词义选择', prompt: 'evident 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'evident.q4', senseId: 'evident.s1', errorType: 'meaning', type: '词源', prompt: '记 evident 时，哪句更稳妥？', options: ['先锁住「明显的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「明显的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['明显的'] },
  });

  D('evil', {
    etymology: {
      origin: '现代英语常用词「evil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evil', gloss: '邪恶的' },
      suffix: null,
      history: [
        { label: 'evil', text: '现代英语常用词「evil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：邪恶的。' },
      ],
      formationLogic: '核心义：邪恶的。',
      mnemonic: '看到 evil，先说出「邪恶的」。',
      note: '核心义：邪恶的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was evil.', chinese: '即使是初读者也能看出，这个结果是邪恶的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evil.s1', en: 'They wanted a evil answer, not a long speech.', zh: '他们要一个邪恶的的答复，不要长篇发言。', structure: 'evil / 表示 / 邪恶的', grammar: 'adjective，围绕「邪恶的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are evil.', right: 'The news is evil.', reason: 'news 作主语时动词用单数。', rule: '先确定 evil 是adjective，再套「邪恶的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evil.q1', senseId: 'evil.s1', errorType: 'meaning', type: '词义选择', prompt: '「evil」在本条的核心意思是：', options: ['邪恶的', '完全相反的意思', '一种古代钱币'], answer: '邪恶的', explain: 'evil：邪恶的。' },
      { id: 'evil.q2', senseId: 'evil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evil?', options: ['邪恶的', 'a kind of ancient coin', 'the past tense of be'], answer: '邪恶的', explain: '对的是「邪恶的」。' },
      { id: 'evil.q3', senseId: 'evil.s1', errorType: 'grammar', type: '词义选择', prompt: 'evil 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'evil.q4', senseId: 'evil.s1', errorType: 'meaning', type: '词源', prompt: '记 evil 时，哪句更稳妥？', options: ['先锁住「邪恶的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「邪恶的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['邪恶的'] },
  });

  D('evocative', {
    etymology: {
      origin: '英语派生：evocat + -ive，词性转到「唤起记忆的」。',
      prefix: null,
      root: { text: 'evocat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'evocative', text: '英语派生：evocat + -ive，词性转到「唤起记忆的」。' },
        { label: '现在', text: '核心用法是：唤起记忆的。' },
      ],
      formationLogic: '先认词干 evocat，再看词尾。',
      mnemonic: '看到 evocative，先说出「唤起记忆的」。',
      note: '先认词干 evocat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was evocative.', chinese: '即使是初读者也能看出，这个结果是唤起记忆的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evocative.s1', en: 'They wanted a evocative answer, not a long speech.', zh: '他们要一个唤起记忆的的答复，不要长篇发言。', structure: 'evocative / 表示 / 唤起记忆的', grammar: 'adjective，围绕「唤起记忆的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are evocative.', right: 'The news is evocative.', reason: 'news 作主语时动词用单数。', rule: '先确定 evocative 是adjective，再套「唤起记忆的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evocative.q1', senseId: 'evocative.s1', errorType: 'meaning', type: '词义选择', prompt: '「evocative」在本条的核心意思是：', options: ['唤起记忆的', '完全相反的意思', '一种古代钱币'], answer: '唤起记忆的', explain: 'evocative：唤起记忆的。' },
      { id: 'evocative.q2', senseId: 'evocative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evocative?', options: ['唤起记忆的', 'a kind of ancient coin', 'the past tense of be'], answer: '唤起记忆的', explain: '对的是「唤起记忆的」。' },
      { id: 'evocative.q3', senseId: 'evocative.s1', errorType: 'grammar', type: '词义选择', prompt: 'evocative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'evocative.q4', senseId: 'evocative.s1', errorType: 'meaning', type: '词源', prompt: '记 evocative 时，哪句更稳妥？', options: ['先锁住「唤起记忆的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「唤起记忆的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['唤起记忆的'] },
  });

  D('evoke', {
    etymology: {
      origin: '现代英语常用词「evoke」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evoke', gloss: '唤起' },
      suffix: null,
      history: [
        { label: 'evoke', text: '现代英语常用词「evoke」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：唤起。' },
      ],
      formationLogic: '核心义：唤起。',
      mnemonic: '看到 evoke，先说出「唤起」。',
      note: '核心义：唤起。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evoke before the office closed.', chinese: '他们同意在办公室关门前做这件事：唤起。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evoke.s1', en: 'The deadline forced the team to evoke that afternoon.', zh: '截止日期逼着小组在那天下午唤起。', structure: 'evoke / 表示 / 唤起', grammar: 'verb，围绕「唤起」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evokeed it yesterday without checking the real past form.', right: 'Check the past form of "evoke" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evoke 是verb，再套「唤起」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evoke.q1', senseId: 'evoke.s1', errorType: 'meaning', type: '词义选择', prompt: '「evoke」在本条的核心意思是：', options: ['唤起', '完全相反的意思', '一种古代钱币'], answer: '唤起', explain: 'evoke：唤起。' },
      { id: 'evoke.q2', senseId: 'evoke.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evoke?', options: ['唤起', 'a kind of ancient coin', 'the past tense of be'], answer: '唤起', explain: '对的是「唤起」。' },
      { id: 'evoke.q3', senseId: 'evoke.s1', errorType: 'grammar', type: '词义选择', prompt: 'evoke 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evoke.q4', senseId: 'evoke.s1', errorType: 'meaning', type: '词源', prompt: '记 evoke 时，哪句更稳妥？', options: ['先锁住「唤起」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「唤起」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['唤起'] },
  });

  D('evolve', {
    etymology: {
      origin: '现代英语常用词「evolve」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'evolve', gloss: '进化' },
      suffix: null,
      history: [
        { label: 'evolve', text: '现代英语常用词「evolve」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：进化。' },
      ],
      formationLogic: '核心义：进化。',
      mnemonic: '看到 evolve，先说出「进化」。',
      note: '核心义：进化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to evolve before the office closed.', chinese: '他们同意在办公室关门前做这件事：进化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'evolve.s1', en: 'The deadline forced the team to evolve that afternoon.', zh: '截止日期逼着小组在那天下午进化。', structure: 'evolve / 表示 / 进化', grammar: 'verb，围绕「进化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She evolveed it yesterday without checking the real past form.', right: 'Check the past form of "evolve" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 evolve 是verb，再套「进化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'evolve.q1', senseId: 'evolve.s1', errorType: 'meaning', type: '词义选择', prompt: '「evolve」在本条的核心意思是：', options: ['进化', '完全相反的意思', '一种古代钱币'], answer: '进化', explain: 'evolve：进化。' },
      { id: 'evolve.q2', senseId: 'evolve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches evolve?', options: ['进化', 'a kind of ancient coin', 'the past tense of be'], answer: '进化', explain: '对的是「进化」。' },
      { id: 'evolve.q3', senseId: 'evolve.s1', errorType: 'grammar', type: '词义选择', prompt: 'evolve 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'evolve.q4', senseId: 'evolve.s1', errorType: 'meaning', type: '词源', prompt: '记 evolve 时，哪句更稳妥？', options: ['先锁住「进化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进化'] },
  });

  D('ewe', {
    etymology: {
      origin: '现代英语常用词「ewe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ewe', gloss: '母羊' },
      suffix: null,
      history: [
        { label: 'ewe', text: '现代英语常用词「ewe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：母羊。' },
      ],
      formationLogic: '核心义：母羊。',
      mnemonic: '看到 ewe，先说出「母羊」。',
      note: '核心义：母羊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ewe.', chinese: '这一章反复回到同一个点：母羊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ewe.s1', en: 'Without that ewe, the next paragraph is hard to follow.', zh: '没有这个母羊，下一段会很难读。', structure: 'ewe / 表示 / 母羊', grammar: 'noun，围绕「母羊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ewe.', right: 'He gave me some advice about the ewe.', reason: 'advice 不可数。名词 ewe 的单复数按词典词形记。', rule: '先确定 ewe 是noun，再套「母羊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ewe.q1', senseId: 'ewe.s1', errorType: 'meaning', type: '词义选择', prompt: '「ewe」在本条的核心意思是：', options: ['母羊', '完全相反的意思', '一种古代钱币'], answer: '母羊', explain: 'ewe：母羊。' },
      { id: 'ewe.q2', senseId: 'ewe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ewe?', options: ['母羊', 'a kind of ancient coin', 'the past tense of be'], answer: '母羊', explain: '对的是「母羊」。' },
      { id: 'ewe.q3', senseId: 'ewe.s1', errorType: 'grammar', type: '词义选择', prompt: 'ewe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ewe.q4', senseId: 'ewe.s1', errorType: 'meaning', type: '词源', prompt: '记 ewe 时，哪句更稳妥？', options: ['先锁住「母羊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「母羊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['母羊'] },
  });

  D('ex', {
    etymology: {
      origin: '现代英语常用词「ex」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ex', gloss: '前任' },
      suffix: null,
      history: [
        { label: 'ex', text: '现代英语常用词「ex」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：前任。' },
      ],
      formationLogic: '核心义：前任。',
      mnemonic: '看到 ex，先说出「前任」。',
      note: '核心义：前任。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ex.', chinese: '这一章反复回到同一个点：前任。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ex.s1', en: 'Without that ex, the next paragraph is hard to follow.', zh: '没有这个前任，下一段会很难读。', structure: 'ex / 表示 / 前任', grammar: 'noun，围绕「前任」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ex.', right: 'He gave me some advice about the ex.', reason: 'advice 不可数。名词 ex 的单复数按词典词形记。', rule: '先确定 ex 是noun，再套「前任」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ex.q1', senseId: 'ex.s1', errorType: 'meaning', type: '词义选择', prompt: '「ex」在本条的核心意思是：', options: ['前任', '完全相反的意思', '一种古代钱币'], answer: '前任', explain: 'ex：前任。' },
      { id: 'ex.q2', senseId: 'ex.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ex?', options: ['前任', 'a kind of ancient coin', 'the past tense of be'], answer: '前任', explain: '对的是「前任」。' },
      { id: 'ex.q3', senseId: 'ex.s1', errorType: 'grammar', type: '词义选择', prompt: 'ex 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ex.q4', senseId: 'ex.s1', errorType: 'meaning', type: '词源', prompt: '记 ex 时，哪句更稳妥？', options: ['先锁住「前任」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「前任」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['前任'] },
  });

  D('ex-soldier', {
    etymology: {
      origin: '英语派生：ex-soldi + -er，词性转到「退伍军人」。',
      prefix: null,
      root: { text: 'ex-soldi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ex-soldier', text: '英语派生：ex-soldi + -er，词性转到「退伍军人」。' },
        { label: '现在', text: '核心用法是：退伍军人。' },
      ],
      formationLogic: '先认词干 ex-soldi，再看词尾。',
      mnemonic: '看到 ex-soldier，先说出「退伍军人」。',
      note: '先认词干 ex-soldi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ex-soldier.', chinese: '这一章反复回到同一个点：退伍军人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ex-soldier.s1', en: 'Without that ex-soldier, the next paragraph is hard to follow.', zh: '没有这个退伍军人，下一段会很难读。', structure: 'ex-soldier / 表示 / 退伍军人', grammar: 'noun，围绕「退伍军人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ex-soldier.', right: 'He gave me some advice about the ex-soldier.', reason: 'advice 不可数。名词 ex-soldier 的单复数按词典词形记。', rule: '先确定 ex-soldier 是noun，再套「退伍军人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ex-soldier.q1', senseId: 'ex-soldier.s1', errorType: 'meaning', type: '词义选择', prompt: '「ex-soldier」在本条的核心意思是：', options: ['退伍军人', '完全相反的意思', '一种古代钱币'], answer: '退伍军人', explain: 'ex-soldier：退伍军人。' },
      { id: 'ex-soldier.q2', senseId: 'ex-soldier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ex-soldier?', options: ['退伍军人', 'a kind of ancient coin', 'the past tense of be'], answer: '退伍军人', explain: '对的是「退伍军人」。' },
      { id: 'ex-soldier.q3', senseId: 'ex-soldier.s1', errorType: 'grammar', type: '词义选择', prompt: 'ex-soldier 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ex-soldier.q4', senseId: 'ex-soldier.s1', errorType: 'meaning', type: '词源', prompt: '记 ex-soldier 时，哪句更稳妥？', options: ['先锁住「退伍军人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「退伍军人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['退伍军人'] },
  });

  D('exact', {
    etymology: {
      origin: '现代英语常用词「exact」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exact', gloss: '精确的' },
      suffix: null,
      history: [
        { label: 'exact', text: '现代英语常用词「exact」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：精确的。' },
      ],
      formationLogic: '核心义：精确的。',
      mnemonic: '看到 exact，先说出「精确的」。',
      note: '核心义：精确的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exact.', chinese: '即使是初读者也能看出，这个结果是精确的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exact.s1', en: 'They wanted a exact answer, not a long speech.', zh: '他们要一个精确的的答复，不要长篇发言。', structure: 'exact / 表示 / 精确的', grammar: 'adjective，围绕「精确的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exact.', right: 'The news is exact.', reason: 'news 作主语时动词用单数。', rule: '先确定 exact 是adjective，再套「精确的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exact.q1', senseId: 'exact.s1', errorType: 'meaning', type: '词义选择', prompt: '「exact」在本条的核心意思是：', options: ['精确的', '完全相反的意思', '一种古代钱币'], answer: '精确的', explain: 'exact：精确的。' },
      { id: 'exact.q2', senseId: 'exact.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exact?', options: ['精确的', 'a kind of ancient coin', 'the past tense of be'], answer: '精确的', explain: '对的是「精确的」。' },
      { id: 'exact.q3', senseId: 'exact.s1', errorType: 'grammar', type: '词义选择', prompt: 'exact 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exact.q4', senseId: 'exact.s1', errorType: 'meaning', type: '词源', prompt: '记 exact 时，哪句更稳妥？', options: ['先锁住「精确的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精确的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精确的'] },
  });

  D('exactly', {
    etymology: {
      origin: '英语派生：exact + -ly，词性转到「确切地」。',
      prefix: null,
      root: { text: 'exact', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exactly', text: '英语派生：exact + -ly，词性转到「确切地」。' },
        { label: '现在', text: '核心用法是：确切地。' },
      ],
      formationLogic: '先认词干 exact，再看词尾。',
      mnemonic: '看到 exactly，先说出「确切地」。',
      note: '先认词干 exact，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule exactly, and the class followed.', chinese: '她把规则讲清楚了（确切地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exactly.s1', en: 'He nodded exactly and returned to the notes.', zh: '他确切地地点了点头，又回去看笔记。', structure: 'exactly / 表示 / 确切地', grammar: 'adverb，围绕「确切地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very exactlyly in the meeting.', right: 'She spoke exactly in the meeting.', reason: 'exactly 已经是副词，不要再加 -ly。', rule: '先确定 exactly 是adverb，再套「确切地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exactly.q1', senseId: 'exactly.s1', errorType: 'meaning', type: '词义选择', prompt: '「exactly」在本条的核心意思是：', options: ['确切地', '完全相反的意思', '一种古代钱币'], answer: '确切地', explain: 'exactly：确切地。' },
      { id: 'exactly.q2', senseId: 'exactly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exactly?', options: ['确切地', 'a kind of ancient coin', 'the past tense of be'], answer: '确切地', explain: '对的是「确切地」。' },
      { id: 'exactly.q3', senseId: 'exactly.s1', errorType: 'grammar', type: '词义选择', prompt: 'exactly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'exactly.q4', senseId: 'exactly.s1', errorType: 'meaning', type: '词源', prompt: '记 exactly 时，哪句更稳妥？', options: ['先锁住「确切地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「确切地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['确切地'] },
  });

  D('exactness', {
    etymology: {
      origin: '英语派生：exact + -ness，词性转到「精确」。',
      prefix: null,
      root: { text: 'exact', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exactness', text: '英语派生：exact + -ness，词性转到「精确」。' },
        { label: '现在', text: '核心用法是：精确。' },
      ],
      formationLogic: '先认词干 exact，再看词尾。',
      mnemonic: '看到 exactness，先说出「精确」。',
      note: '先认词干 exact，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exactness.', chinese: '这一章反复回到同一个点：精确。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exactness.s1', en: 'Without that exactness, the next paragraph is hard to follow.', zh: '没有这个精确，下一段会很难读。', structure: 'exactness / 表示 / 精确', grammar: 'noun，围绕「精确」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exactness.', right: 'He gave me some advice about the exactness.', reason: 'advice 不可数。名词 exactness 的单复数按词典词形记。', rule: '先确定 exactness 是noun，再套「精确」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exactness.q1', senseId: 'exactness.s1', errorType: 'meaning', type: '词义选择', prompt: '「exactness」在本条的核心意思是：', options: ['精确', '完全相反的意思', '一种古代钱币'], answer: '精确', explain: 'exactness：精确。' },
      { id: 'exactness.q2', senseId: 'exactness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exactness?', options: ['精确', 'a kind of ancient coin', 'the past tense of be'], answer: '精确', explain: '对的是「精确」。' },
      { id: 'exactness.q3', senseId: 'exactness.s1', errorType: 'grammar', type: '词义选择', prompt: 'exactness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exactness.q4', senseId: 'exactness.s1', errorType: 'meaning', type: '词源', prompt: '记 exactness 时，哪句更稳妥？', options: ['先锁住「精确」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精确」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精确'] },
  });

  D('exaggerate', {
    etymology: {
      origin: '现代英语常用词「exaggerate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exaggerate', gloss: '夸大' },
      suffix: null,
      history: [
        { label: 'exaggerate', text: '现代英语常用词「exaggerate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：夸大。' },
      ],
      formationLogic: '核心义：夸大。',
      mnemonic: '看到 exaggerate，先说出「夸大」。',
      note: '核心义：夸大。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exaggerate before the office closed.', chinese: '他们同意在办公室关门前做这件事：夸大。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exaggerate.s1', en: 'The deadline forced the team to exaggerate that afternoon.', zh: '截止日期逼着小组在那天下午夸大。', structure: 'exaggerate / 表示 / 夸大', grammar: 'verb，围绕「夸大」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exaggerateed it yesterday without checking the real past form.', right: 'Check the past form of "exaggerate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exaggerate 是verb，再套「夸大」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exaggerate.q1', senseId: 'exaggerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「exaggerate」在本条的核心意思是：', options: ['夸大', '完全相反的意思', '一种古代钱币'], answer: '夸大', explain: 'exaggerate：夸大。' },
      { id: 'exaggerate.q2', senseId: 'exaggerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exaggerate?', options: ['夸大', 'a kind of ancient coin', 'the past tense of be'], answer: '夸大', explain: '对的是「夸大」。' },
      { id: 'exaggerate.q3', senseId: 'exaggerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'exaggerate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exaggerate.q4', senseId: 'exaggerate.s1', errorType: 'meaning', type: '词源', prompt: '记 exaggerate 时，哪句更稳妥？', options: ['先锁住「夸大」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「夸大」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['夸大'] },
  });

  D('exaggerated', {
    etymology: {
      origin: '现代英语常用词「exaggerated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exaggerated', gloss: '夸张的' },
      suffix: null,
      history: [
        { label: 'exaggerated', text: '现代英语常用词「exaggerated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：夸张的。' },
      ],
      formationLogic: '核心义：夸张的。',
      mnemonic: '看到 exaggerated，先说出「夸张的」。',
      note: '核心义：夸张的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exaggerated.', chinese: '即使是初读者也能看出，这个结果是夸张的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exaggerated.s1', en: 'They wanted a exaggerated answer, not a long speech.', zh: '他们要一个夸张的的答复，不要长篇发言。', structure: 'exaggerated / 表示 / 夸张的', grammar: 'adjective，围绕「夸张的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exaggerated.', right: 'The news is exaggerated.', reason: 'news 作主语时动词用单数。', rule: '先确定 exaggerated 是adjective，再套「夸张的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exaggerated.q1', senseId: 'exaggerated.s1', errorType: 'meaning', type: '词义选择', prompt: '「exaggerated」在本条的核心意思是：', options: ['夸张的', '完全相反的意思', '一种古代钱币'], answer: '夸张的', explain: 'exaggerated：夸张的。' },
      { id: 'exaggerated.q2', senseId: 'exaggerated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exaggerated?', options: ['夸张的', 'a kind of ancient coin', 'the past tense of be'], answer: '夸张的', explain: '对的是「夸张的」。' },
      { id: 'exaggerated.q3', senseId: 'exaggerated.s1', errorType: 'grammar', type: '词义选择', prompt: 'exaggerated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exaggerated.q4', senseId: 'exaggerated.s1', errorType: 'meaning', type: '词源', prompt: '记 exaggerated 时，哪句更稳妥？', options: ['先锁住「夸张的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「夸张的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['夸张的'] },
  });

  D('exalted', {
    etymology: {
      origin: '现代英语常用词「exalted」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exalted', gloss: '崇高的' },
      suffix: null,
      history: [
        { label: 'exalted', text: '现代英语常用词「exalted」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：崇高的。' },
      ],
      formationLogic: '核心义：崇高的。',
      mnemonic: '看到 exalted，先说出「崇高的」。',
      note: '核心义：崇高的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exalted.', chinese: '即使是初读者也能看出，这个结果是崇高的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exalted.s1', en: 'They wanted a exalted answer, not a long speech.', zh: '他们要一个崇高的的答复，不要长篇发言。', structure: 'exalted / 表示 / 崇高的', grammar: 'adjective，围绕「崇高的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exalted.', right: 'The news is exalted.', reason: 'news 作主语时动词用单数。', rule: '先确定 exalted 是adjective，再套「崇高的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exalted.q1', senseId: 'exalted.s1', errorType: 'meaning', type: '词义选择', prompt: '「exalted」在本条的核心意思是：', options: ['崇高的', '完全相反的意思', '一种古代钱币'], answer: '崇高的', explain: 'exalted：崇高的。' },
      { id: 'exalted.q2', senseId: 'exalted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exalted?', options: ['崇高的', 'a kind of ancient coin', 'the past tense of be'], answer: '崇高的', explain: '对的是「崇高的」。' },
      { id: 'exalted.q3', senseId: 'exalted.s1', errorType: 'grammar', type: '词义选择', prompt: 'exalted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exalted.q4', senseId: 'exalted.s1', errorType: 'meaning', type: '词源', prompt: '记 exalted 时，哪句更稳妥？', options: ['先锁住「崇高的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「崇高的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['崇高的'] },
  });

  D('exam', {
    etymology: {
      origin: '现代英语常用词「exam」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exam', gloss: '考试' },
      suffix: null,
      history: [
        { label: 'exam', text: '现代英语常用词「exam」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：考试。' },
      ],
      formationLogic: '核心义：考试。',
      mnemonic: '看到 exam，先说出「考试」。',
      note: '核心义：考试。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exam.', chinese: '这一章反复回到同一个点：考试。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exam.s1', en: 'Without that exam, the next paragraph is hard to follow.', zh: '没有这个考试，下一段会很难读。', structure: 'exam / 表示 / 考试', grammar: 'noun，围绕「考试」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exam.', right: 'He gave me some advice about the exam.', reason: 'advice 不可数。名词 exam 的单复数按词典词形记。', rule: '先确定 exam 是noun，再套「考试」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exam.q1', senseId: 'exam.s1', errorType: 'meaning', type: '词义选择', prompt: '「exam」在本条的核心意思是：', options: ['考试', '完全相反的意思', '一种古代钱币'], answer: '考试', explain: 'exam：考试。' },
      { id: 'exam.q2', senseId: 'exam.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exam?', options: ['考试', 'a kind of ancient coin', 'the past tense of be'], answer: '考试', explain: '对的是「考试」。' },
      { id: 'exam.q3', senseId: 'exam.s1', errorType: 'grammar', type: '词义选择', prompt: 'exam 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exam.q4', senseId: 'exam.s1', errorType: 'meaning', type: '词源', prompt: '记 exam 时，哪句更稳妥？', options: ['先锁住「考试」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考试」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考试'] },
  });

  D('examination', {
    etymology: {
      origin: '英语派生：examina + -tion，词性转到「考试」。',
      prefix: null,
      root: { text: 'examina', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'examination', text: '英语派生：examina + -tion，词性转到「考试」。' },
        { label: '现在', text: '核心用法是：考试。' },
      ],
      formationLogic: '先认词干 examina，再看词尾。',
      mnemonic: '看到 examination，先说出「考试」。',
      note: '先认词干 examina，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one examination.', chinese: '这一章反复回到同一个点：考试。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'examination.s1', en: 'Without that examination, the next paragraph is hard to follow.', zh: '没有这个考试，下一段会很难读。', structure: 'examination / 表示 / 考试', grammar: 'noun，围绕「考试」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the examination.', right: 'He gave me some advice about the examination.', reason: 'advice 不可数。名词 examination 的单复数按词典词形记。', rule: '先确定 examination 是noun，再套「考试」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'examination.q1', senseId: 'examination.s1', errorType: 'meaning', type: '词义选择', prompt: '「examination」在本条的核心意思是：', options: ['考试', '完全相反的意思', '一种古代钱币'], answer: '考试', explain: 'examination：考试。' },
      { id: 'examination.q2', senseId: 'examination.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches examination?', options: ['考试', 'a kind of ancient coin', 'the past tense of be'], answer: '考试', explain: '对的是「考试」。' },
      { id: 'examination.q3', senseId: 'examination.s1', errorType: 'grammar', type: '词义选择', prompt: 'examination 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'examination.q4', senseId: 'examination.s1', errorType: 'meaning', type: '词源', prompt: '记 examination 时，哪句更稳妥？', options: ['先锁住「考试」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考试」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考试'] },
  });

  D('examine', {
    etymology: {
      origin: '现代英语常用词「examine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'examine', gloss: '检查' },
      suffix: null,
      history: [
        { label: 'examine', text: '现代英语常用词「examine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：检查。' },
      ],
      formationLogic: '核心义：检查。',
      mnemonic: '看到 examine，先说出「检查」。',
      note: '核心义：检查。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to examine before the office closed.', chinese: '他们同意在办公室关门前做这件事：检查。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'examine.s1', en: 'The deadline forced the team to examine that afternoon.', zh: '截止日期逼着小组在那天下午检查。', structure: 'examine / 表示 / 检查', grammar: 'verb，围绕「检查」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She examineed it yesterday without checking the real past form.', right: 'Check the past form of "examine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 examine 是verb，再套「检查」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'examine.q1', senseId: 'examine.s1', errorType: 'meaning', type: '词义选择', prompt: '「examine」在本条的核心意思是：', options: ['检查', '完全相反的意思', '一种古代钱币'], answer: '检查', explain: 'examine：检查。' },
      { id: 'examine.q2', senseId: 'examine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches examine?', options: ['检查', 'a kind of ancient coin', 'the past tense of be'], answer: '检查', explain: '对的是「检查」。' },
      { id: 'examine.q3', senseId: 'examine.s1', errorType: 'grammar', type: '词义选择', prompt: 'examine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'examine.q4', senseId: 'examine.s1', errorType: 'meaning', type: '词源', prompt: '记 examine 时，哪句更稳妥？', options: ['先锁住「检查」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「检查」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['检查'] },
  });

  D('examinee', {
    etymology: {
      origin: '现代英语常用词「examinee」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'examinee', gloss: '考生' },
      suffix: null,
      history: [
        { label: 'examinee', text: '现代英语常用词「examinee」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：考生。' },
      ],
      formationLogic: '核心义：考生。',
      mnemonic: '看到 examinee，先说出「考生」。',
      note: '核心义：考生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one examinee.', chinese: '这一章反复回到同一个点：考生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'examinee.s1', en: 'Without that examinee, the next paragraph is hard to follow.', zh: '没有这个考生，下一段会很难读。', structure: 'examinee / 表示 / 考生', grammar: 'noun，围绕「考生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the examinee.', right: 'He gave me some advice about the examinee.', reason: 'advice 不可数。名词 examinee 的单复数按词典词形记。', rule: '先确定 examinee 是noun，再套「考生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'examinee.q1', senseId: 'examinee.s1', errorType: 'meaning', type: '词义选择', prompt: '「examinee」在本条的核心意思是：', options: ['考生', '完全相反的意思', '一种古代钱币'], answer: '考生', explain: 'examinee：考生。' },
      { id: 'examinee.q2', senseId: 'examinee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches examinee?', options: ['考生', 'a kind of ancient coin', 'the past tense of be'], answer: '考生', explain: '对的是「考生」。' },
      { id: 'examinee.q3', senseId: 'examinee.s1', errorType: 'grammar', type: '词义选择', prompt: 'examinee 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'examinee.q4', senseId: 'examinee.s1', errorType: 'meaning', type: '词源', prompt: '记 examinee 时，哪句更稳妥？', options: ['先锁住「考生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考生'] },
  });

  D('examiner', {
    etymology: {
      origin: '英语派生：examin + -er，词性转到「考官」。',
      prefix: null,
      root: { text: 'examin', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'examiner', text: '英语派生：examin + -er，词性转到「考官」。' },
        { label: '现在', text: '核心用法是：考官。' },
      ],
      formationLogic: '先认词干 examin，再看词尾。',
      mnemonic: '看到 examiner，先说出「考官」。',
      note: '先认词干 examin，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one examiner.', chinese: '这一章反复回到同一个点：考官。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'examiner.s1', en: 'Without that examiner, the next paragraph is hard to follow.', zh: '没有这个考官，下一段会很难读。', structure: 'examiner / 表示 / 考官', grammar: 'noun，围绕「考官」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the examiner.', right: 'He gave me some advice about the examiner.', reason: 'advice 不可数。名词 examiner 的单复数按词典词形记。', rule: '先确定 examiner 是noun，再套「考官」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'examiner.q1', senseId: 'examiner.s1', errorType: 'meaning', type: '词义选择', prompt: '「examiner」在本条的核心意思是：', options: ['考官', '完全相反的意思', '一种古代钱币'], answer: '考官', explain: 'examiner：考官。' },
      { id: 'examiner.q2', senseId: 'examiner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches examiner?', options: ['考官', 'a kind of ancient coin', 'the past tense of be'], answer: '考官', explain: '对的是「考官」。' },
      { id: 'examiner.q3', senseId: 'examiner.s1', errorType: 'grammar', type: '词义选择', prompt: 'examiner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'examiner.q4', senseId: 'examiner.s1', errorType: 'meaning', type: '词源', prompt: '记 examiner 时，哪句更稳妥？', options: ['先锁住「考官」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考官」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考官'] },
  });

  D('example', {
    etymology: {
      origin: '现代英语常用词「example」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'example', gloss: '例子' },
      suffix: null,
      history: [
        { label: 'example', text: '现代英语常用词「example」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：例子。' },
      ],
      formationLogic: '核心义：例子。',
      mnemonic: '看到 example，先说出「例子」。',
      note: '核心义：例子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one example.', chinese: '这一章反复回到同一个点：例子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'example.s1', en: 'Without that example, the next paragraph is hard to follow.', zh: '没有这个例子，下一段会很难读。', structure: 'example / 表示 / 例子', grammar: 'noun，围绕「例子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the example.', right: 'He gave me some advice about the example.', reason: 'advice 不可数。名词 example 的单复数按词典词形记。', rule: '先确定 example 是noun，再套「例子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'example.q1', senseId: 'example.s1', errorType: 'meaning', type: '词义选择', prompt: '「example」在本条的核心意思是：', options: ['例子', '完全相反的意思', '一种古代钱币'], answer: '例子', explain: 'example：例子。' },
      { id: 'example.q2', senseId: 'example.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches example?', options: ['例子', 'a kind of ancient coin', 'the past tense of be'], answer: '例子', explain: '对的是「例子」。' },
      { id: 'example.q3', senseId: 'example.s1', errorType: 'grammar', type: '词义选择', prompt: 'example 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'example.q4', senseId: 'example.s1', errorType: 'meaning', type: '词源', prompt: '记 example 时，哪句更稳妥？', options: ['先锁住「例子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「例子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['例子'] },
  });

  D('excavate', {
    etymology: {
      origin: '现代英语常用词「excavate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excavate', gloss: '挖掘' },
      suffix: null,
      history: [
        { label: 'excavate', text: '现代英语常用词「excavate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：挖掘。' },
      ],
      formationLogic: '核心义：挖掘。',
      mnemonic: '看到 excavate，先说出「挖掘」。',
      note: '核心义：挖掘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to excavate before the office closed.', chinese: '他们同意在办公室关门前做这件事：挖掘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excavate.s1', en: 'The deadline forced the team to excavate that afternoon.', zh: '截止日期逼着小组在那天下午挖掘。', structure: 'excavate / 表示 / 挖掘', grammar: 'verb，围绕「挖掘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She excavateed it yesterday without checking the real past form.', right: 'Check the past form of "excavate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 excavate 是verb，再套「挖掘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excavate.q1', senseId: 'excavate.s1', errorType: 'meaning', type: '词义选择', prompt: '「excavate」在本条的核心意思是：', options: ['挖掘', '完全相反的意思', '一种古代钱币'], answer: '挖掘', explain: 'excavate：挖掘。' },
      { id: 'excavate.q2', senseId: 'excavate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excavate?', options: ['挖掘', 'a kind of ancient coin', 'the past tense of be'], answer: '挖掘', explain: '对的是「挖掘」。' },
      { id: 'excavate.q3', senseId: 'excavate.s1', errorType: 'grammar', type: '词义选择', prompt: 'excavate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'excavate.q4', senseId: 'excavate.s1', errorType: 'meaning', type: '词源', prompt: '记 excavate 时，哪句更稳妥？', options: ['先锁住「挖掘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挖掘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挖掘'] },
  });

  D('exceed', {
    etymology: {
      origin: '现代英语常用词「exceed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exceed', gloss: '超过' },
      suffix: null,
      history: [
        { label: 'exceed', text: '现代英语常用词「exceed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：超过。' },
      ],
      formationLogic: '核心义：超过。',
      mnemonic: '看到 exceed，先说出「超过」。',
      note: '核心义：超过。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exceed before the office closed.', chinese: '他们同意在办公室关门前做这件事：超过。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exceed.s1', en: 'The deadline forced the team to exceed that afternoon.', zh: '截止日期逼着小组在那天下午超过。', structure: 'exceed / 表示 / 超过', grammar: 'verb，围绕「超过」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exceeded it yesterday without checking the real past form.', right: 'Check the past form of "exceed" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exceed 是verb，再套「超过」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exceed.q1', senseId: 'exceed.s1', errorType: 'meaning', type: '词义选择', prompt: '「exceed」在本条的核心意思是：', options: ['超过', '完全相反的意思', '一种古代钱币'], answer: '超过', explain: 'exceed：超过。' },
      { id: 'exceed.q2', senseId: 'exceed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exceed?', options: ['超过', 'a kind of ancient coin', 'the past tense of be'], answer: '超过', explain: '对的是「超过」。' },
      { id: 'exceed.q3', senseId: 'exceed.s1', errorType: 'grammar', type: '词义选择', prompt: 'exceed 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exceed.q4', senseId: 'exceed.s1', errorType: 'meaning', type: '词源', prompt: '记 exceed 时，哪句更稳妥？', options: ['先锁住「超过」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「超过」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['超过'] },
  });

  D('excel', {
    etymology: {
      origin: '现代英语常用词「excel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excel', gloss: '擅长' },
      suffix: null,
      history: [
        { label: 'excel', text: '现代英语常用词「excel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：擅长。' },
      ],
      formationLogic: '核心义：擅长。',
      mnemonic: '看到 excel，先说出「擅长」。',
      note: '核心义：擅长。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to excel before the office closed.', chinese: '他们同意在办公室关门前做这件事：擅长。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excel.s1', en: 'The deadline forced the team to excel that afternoon.', zh: '截止日期逼着小组在那天下午擅长。', structure: 'excel / 表示 / 擅长', grammar: 'verb，围绕「擅长」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exceled it yesterday without checking the real past form.', right: 'Check the past form of "excel" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 excel 是verb，再套「擅长」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excel.q1', senseId: 'excel.s1', errorType: 'meaning', type: '词义选择', prompt: '「excel」在本条的核心意思是：', options: ['擅长', '完全相反的意思', '一种古代钱币'], answer: '擅长', explain: 'excel：擅长。' },
      { id: 'excel.q2', senseId: 'excel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excel?', options: ['擅长', 'a kind of ancient coin', 'the past tense of be'], answer: '擅长', explain: '对的是「擅长」。' },
      { id: 'excel.q3', senseId: 'excel.s1', errorType: 'grammar', type: '词义选择', prompt: 'excel 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'excel.q4', senseId: 'excel.s1', errorType: 'meaning', type: '词源', prompt: '记 excel 时，哪句更稳妥？', options: ['先锁住「擅长」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「擅长」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['擅长'] },
  });

  D('excellent', {
    etymology: {
      origin: '现代英语常用词「excellent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excellent', gloss: '极好的' },
      suffix: null,
      history: [
        { label: 'excellent', text: '现代英语常用词「excellent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：极好的。' },
      ],
      formationLogic: '核心义：极好的。',
      mnemonic: '看到 excellent，先说出「极好的」。',
      note: '核心义：极好的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was excellent.', chinese: '即使是初读者也能看出，这个结果是极好的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excellent.s1', en: 'They wanted a excellent answer, not a long speech.', zh: '他们要一个极好的的答复，不要长篇发言。', structure: 'excellent / 表示 / 极好的', grammar: 'adjective，围绕「极好的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are excellent.', right: 'The news is excellent.', reason: 'news 作主语时动词用单数。', rule: '先确定 excellent 是adjective，再套「极好的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excellent.q1', senseId: 'excellent.s1', errorType: 'meaning', type: '词义选择', prompt: '「excellent」在本条的核心意思是：', options: ['极好的', '完全相反的意思', '一种古代钱币'], answer: '极好的', explain: 'excellent：极好的。' },
      { id: 'excellent.q2', senseId: 'excellent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excellent?', options: ['极好的', 'a kind of ancient coin', 'the past tense of be'], answer: '极好的', explain: '对的是「极好的」。' },
      { id: 'excellent.q3', senseId: 'excellent.s1', errorType: 'grammar', type: '词义选择', prompt: 'excellent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'excellent.q4', senseId: 'excellent.s1', errorType: 'meaning', type: '词源', prompt: '记 excellent 时，哪句更稳妥？', options: ['先锁住「极好的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极好的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极好的'] },
  });

  D('except if', {
    etymology: {
      origin: '现代英语固定说法「except if」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'except if', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'except if', text: '现代英语固定说法「except if」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：除非。' },
      ],
      formationLogic: '核心义：除非。',
      mnemonic: '看到 except if，先说出「除非」。',
      note: '核心义：除非。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "except if" and asked the class to keep it as one unit.', chinese: '老师把「except if」圈出来，让全班把它当成一个整体。它表示除非。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'except if.s1', en: 'In the margin she wrote "except if" so nobody would split the phrase.', zh: '她在页边写下「except if」，免得有人把这个说法拆开。意思是除非。', structure: 'except if / 表示 / 除非', grammar: 'conjunction，围绕「除非」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of except if and lost the point.', right: 'Keep "except if" together: it means 除非.', reason: '「except if」要整块理解。', rule: '先确定 except if 是conjunction，再套「除非」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'except if.q1', senseId: 'except if.s1', errorType: 'meaning', type: '词义选择', prompt: '「except if」在本条的核心意思是：', options: ['除非', '完全相反的意思', '一种古代钱币'], answer: '除非', explain: 'except if：除非。' },
      { id: 'except if.q2', senseId: 'except if.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches except if?', options: ['除非', 'a kind of ancient coin', 'the past tense of be'], answer: '除非', explain: '对的是「除非」。' },
      { id: 'except if.q3', senseId: 'except if.s1', errorType: 'grammar', type: '词义选择', prompt: 'except if 的词性（本条）更接近：', options: ['conjunction', '只能作感叹词', '只能作数词'], answer: 'conjunction', explain: '本条按 conjunction 来用。' },
      { id: 'except if.q4', senseId: 'except if.s1', errorType: 'meaning', type: '词源', prompt: '记 except if 时，哪句更稳妥？', options: ['先锁住「除非」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「除非」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['除非'] },
  });

  D('except when', {
    etymology: {
      origin: '现代英语固定说法「except when」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'except when', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'except when', text: '现代英语固定说法「except when」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：除…时候外。' },
      ],
      formationLogic: '核心义：除…时候外。',
      mnemonic: '看到 except when，先说出「除…时候外」。',
      note: '核心义：除…时候外。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "except when" and asked the class to keep it as one unit.', chinese: '老师把「except when」圈出来，让全班把它当成一个整体。它表示除…时候外。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'except when.s1', en: 'In the margin she wrote "except when" so nobody would split the phrase.', zh: '她在页边写下「except when」，免得有人把这个说法拆开。意思是除…时候外。', structure: 'except when / 表示 / 除…时候外', grammar: 'conjunction，围绕「除…时候外」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of except when and lost the point.', right: 'Keep "except when" together: it means 除…时候外.', reason: '「except when」要整块理解。', rule: '先确定 except when 是conjunction，再套「除…时候外」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'except when.q1', senseId: 'except when.s1', errorType: 'meaning', type: '词义选择', prompt: '「except when」在本条的核心意思是：', options: ['除…时候外', '完全相反的意思', '一种古代钱币'], answer: '除…时候外', explain: 'except when：除…时候外。' },
      { id: 'except when.q2', senseId: 'except when.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches except when?', options: ['除…时候外', 'a kind of ancient coin', 'the past tense of be'], answer: '除…时候外', explain: '对的是「除…时候外」。' },
      { id: 'except when.q3', senseId: 'except when.s1', errorType: 'grammar', type: '词义选择', prompt: 'except when 的词性（本条）更接近：', options: ['conjunction', '只能作感叹词', '只能作数词'], answer: 'conjunction', explain: '本条按 conjunction 来用。' },
      { id: 'except when.q4', senseId: 'except when.s1', errorType: 'meaning', type: '词源', prompt: '记 except when 时，哪句更稳妥？', options: ['先锁住「除…时候外」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「除…时候外」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['除…时候外'] },
  });

  D('exception', {
    etymology: {
      origin: '英语派生：excep + -tion，词性转到「例外」。',
      prefix: null,
      root: { text: 'excep', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exception', text: '英语派生：excep + -tion，词性转到「例外」。' },
        { label: '现在', text: '核心用法是：例外。' },
      ],
      formationLogic: '先认词干 excep，再看词尾。',
      mnemonic: '看到 exception，先说出「例外」。',
      note: '先认词干 excep，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exception.', chinese: '这一章反复回到同一个点：例外。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exception.s1', en: 'Without that exception, the next paragraph is hard to follow.', zh: '没有这个例外，下一段会很难读。', structure: 'exception / 表示 / 例外', grammar: 'noun，围绕「例外」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exception.', right: 'He gave me some advice about the exception.', reason: 'advice 不可数。名词 exception 的单复数按词典词形记。', rule: '先确定 exception 是noun，再套「例外」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exception.q1', senseId: 'exception.s1', errorType: 'meaning', type: '词义选择', prompt: '「exception」在本条的核心意思是：', options: ['例外', '完全相反的意思', '一种古代钱币'], answer: '例外', explain: 'exception：例外。' },
      { id: 'exception.q2', senseId: 'exception.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exception?', options: ['例外', 'a kind of ancient coin', 'the past tense of be'], answer: '例外', explain: '对的是「例外」。' },
      { id: 'exception.q3', senseId: 'exception.s1', errorType: 'grammar', type: '词义选择', prompt: 'exception 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exception.q4', senseId: 'exception.s1', errorType: 'meaning', type: '词源', prompt: '记 exception 时，哪句更稳妥？', options: ['先锁住「例外」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「例外」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['例外'] },
  });

  D('exceptional', {
    etymology: {
      origin: '英语派生：exception + -al，词性转到「卓越的」。',
      prefix: null,
      root: { text: 'exception', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exceptional', text: '英语派生：exception + -al，词性转到「卓越的」。' },
        { label: '现在', text: '核心用法是：卓越的。' },
      ],
      formationLogic: '先认词干 exception，再看词尾。',
      mnemonic: '看到 exceptional，先说出「卓越的」。',
      note: '先认词干 exception，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exceptional.', chinese: '即使是初读者也能看出，这个结果是卓越的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exceptional.s1', en: 'They wanted a exceptional answer, not a long speech.', zh: '他们要一个卓越的的答复，不要长篇发言。', structure: 'exceptional / 表示 / 卓越的', grammar: 'adjective，围绕「卓越的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exceptional.', right: 'The news is exceptional.', reason: 'news 作主语时动词用单数。', rule: '先确定 exceptional 是adjective，再套「卓越的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exceptional.q1', senseId: 'exceptional.s1', errorType: 'meaning', type: '词义选择', prompt: '「exceptional」在本条的核心意思是：', options: ['卓越的', '完全相反的意思', '一种古代钱币'], answer: '卓越的', explain: 'exceptional：卓越的。' },
      { id: 'exceptional.q2', senseId: 'exceptional.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exceptional?', options: ['卓越的', 'a kind of ancient coin', 'the past tense of be'], answer: '卓越的', explain: '对的是「卓越的」。' },
      { id: 'exceptional.q3', senseId: 'exceptional.s1', errorType: 'grammar', type: '词义选择', prompt: 'exceptional 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exceptional.q4', senseId: 'exceptional.s1', errorType: 'meaning', type: '词源', prompt: '记 exceptional 时，哪句更稳妥？', options: ['先锁住「卓越的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「卓越的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['卓越的'] },
  });

  D('excerpt', {
    etymology: {
      origin: '现代英语常用词「excerpt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excerpt', gloss: '摘录' },
      suffix: null,
      history: [
        { label: 'excerpt', text: '现代英语常用词「excerpt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：摘录。' },
      ],
      formationLogic: '核心义：摘录。',
      mnemonic: '看到 excerpt，先说出「摘录」。',
      note: '核心义：摘录。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one excerpt.', chinese: '这一章反复回到同一个点：摘录。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excerpt.s1', en: 'Without that excerpt, the next paragraph is hard to follow.', zh: '没有这个摘录，下一段会很难读。', structure: 'excerpt / 表示 / 摘录', grammar: 'noun，围绕「摘录」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the excerpt.', right: 'He gave me some advice about the excerpt.', reason: 'advice 不可数。名词 excerpt 的单复数按词典词形记。', rule: '先确定 excerpt 是noun，再套「摘录」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excerpt.q1', senseId: 'excerpt.s1', errorType: 'meaning', type: '词义选择', prompt: '「excerpt」在本条的核心意思是：', options: ['摘录', '完全相反的意思', '一种古代钱币'], answer: '摘录', explain: 'excerpt：摘录。' },
      { id: 'excerpt.q2', senseId: 'excerpt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excerpt?', options: ['摘录', 'a kind of ancient coin', 'the past tense of be'], answer: '摘录', explain: '对的是「摘录」。' },
      { id: 'excerpt.q3', senseId: 'excerpt.s1', errorType: 'grammar', type: '词义选择', prompt: 'excerpt 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'excerpt.q4', senseId: 'excerpt.s1', errorType: 'meaning', type: '词源', prompt: '记 excerpt 时，哪句更稳妥？', options: ['先锁住「摘录」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摘录」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摘录'] },
  });

  D('excess', {
    etymology: {
      origin: '现代英语常用词「excess」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excess', gloss: '过量' },
      suffix: null,
      history: [
        { label: 'excess', text: '现代英语常用词「excess」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：过量。' },
      ],
      formationLogic: '核心义：过量。',
      mnemonic: '看到 excess，先说出「过量」。',
      note: '核心义：过量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one excess.', chinese: '这一章反复回到同一个点：过量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excess.s1', en: 'Without that excess, the next paragraph is hard to follow.', zh: '没有这个过量，下一段会很难读。', structure: 'excess / 表示 / 过量', grammar: 'noun，围绕「过量」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the excess.', right: 'He gave me some advice about the excess.', reason: 'advice 不可数。名词 excess 的单复数按词典词形记。', rule: '先确定 excess 是noun，再套「过量」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excess.q1', senseId: 'excess.s1', errorType: 'meaning', type: '词义选择', prompt: '「excess」在本条的核心意思是：', options: ['过量', '完全相反的意思', '一种古代钱币'], answer: '过量', explain: 'excess：过量。' },
      { id: 'excess.q2', senseId: 'excess.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excess?', options: ['过量', 'a kind of ancient coin', 'the past tense of be'], answer: '过量', explain: '对的是「过量」。' },
      { id: 'excess.q3', senseId: 'excess.s1', errorType: 'grammar', type: '词义选择', prompt: 'excess 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'excess.q4', senseId: 'excess.s1', errorType: 'meaning', type: '词源', prompt: '记 excess 时，哪句更稳妥？', options: ['先锁住「过量」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「过量」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过量'] },
  });

  D('excessive', {
    etymology: {
      origin: '英语派生：excess + -ive，词性转到「过多的」。',
      prefix: null,
      root: { text: 'excess', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'excessive', text: '英语派生：excess + -ive，词性转到「过多的」。' },
        { label: '现在', text: '核心用法是：过多的。' },
      ],
      formationLogic: '先认词干 excess，再看词尾。',
      mnemonic: '看到 excessive，先说出「过多的」。',
      note: '先认词干 excess，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was excessive.', chinese: '即使是初读者也能看出，这个结果是过多的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excessive.s1', en: 'They wanted a excessive answer, not a long speech.', zh: '他们要一个过多的的答复，不要长篇发言。', structure: 'excessive / 表示 / 过多的', grammar: 'adjective，围绕「过多的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are excessive.', right: 'The news is excessive.', reason: 'news 作主语时动词用单数。', rule: '先确定 excessive 是adjective，再套「过多的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excessive.q1', senseId: 'excessive.s1', errorType: 'meaning', type: '词义选择', prompt: '「excessive」在本条的核心意思是：', options: ['过多的', '完全相反的意思', '一种古代钱币'], answer: '过多的', explain: 'excessive：过多的。' },
      { id: 'excessive.q2', senseId: 'excessive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excessive?', options: ['过多的', 'a kind of ancient coin', 'the past tense of be'], answer: '过多的', explain: '对的是「过多的」。' },
      { id: 'excessive.q3', senseId: 'excessive.s1', errorType: 'grammar', type: '词义选择', prompt: 'excessive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'excessive.q4', senseId: 'excessive.s1', errorType: 'meaning', type: '词源', prompt: '记 excessive 时，哪句更稳妥？', options: ['先锁住「过多的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「过多的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过多的'] },
  });

  D('excessively', {
    etymology: {
      origin: '英语派生：excessive + -ly，词性转到「过度地」。',
      prefix: null,
      root: { text: 'excessive', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'excessively', text: '英语派生：excessive + -ly，词性转到「过度地」。' },
        { label: '现在', text: '核心用法是：过度地。' },
      ],
      formationLogic: '先认词干 excessive，再看词尾。',
      mnemonic: '看到 excessively，先说出「过度地」。',
      note: '先认词干 excessive，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule excessively, and the class followed.', chinese: '她把规则讲清楚了（过度地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excessively.s1', en: 'He nodded excessively and returned to the notes.', zh: '他过度地地点了点头，又回去看笔记。', structure: 'excessively / 表示 / 过度地', grammar: 'adverb，围绕「过度地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very excessivelyly in the meeting.', right: 'She spoke excessively in the meeting.', reason: 'excessively 已经是副词，不要再加 -ly。', rule: '先确定 excessively 是adverb，再套「过度地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excessively.q1', senseId: 'excessively.s1', errorType: 'meaning', type: '词义选择', prompt: '「excessively」在本条的核心意思是：', options: ['过度地', '完全相反的意思', '一种古代钱币'], answer: '过度地', explain: 'excessively：过度地。' },
      { id: 'excessively.q2', senseId: 'excessively.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excessively?', options: ['过度地', 'a kind of ancient coin', 'the past tense of be'], answer: '过度地', explain: '对的是「过度地」。' },
      { id: 'excessively.q3', senseId: 'excessively.s1', errorType: 'grammar', type: '词义选择', prompt: 'excessively 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'excessively.q4', senseId: 'excessively.s1', errorType: 'meaning', type: '词源', prompt: '记 excessively 时，哪句更稳妥？', options: ['先锁住「过度地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「过度地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过度地'] },
  });

  D('exchange', {
    etymology: {
      origin: '现代英语常用词「exchange」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exchange', gloss: '交换' },
      suffix: null,
      history: [
        { label: 'exchange', text: '现代英语常用词「exchange」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：交换。' },
      ],
      formationLogic: '核心义：交换。',
      mnemonic: '看到 exchange，先说出「交换」。',
      note: '核心义：交换。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exchange before the office closed.', chinese: '他们同意在办公室关门前做这件事：交换。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exchange.s1', en: 'The deadline forced the team to exchange that afternoon.', zh: '截止日期逼着小组在那天下午交换。', structure: 'exchange / 表示 / 交换', grammar: 'verb，围绕「交换」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exchangeed it yesterday without checking the real past form.', right: 'Check the past form of "exchange" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exchange 是verb，再套「交换」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exchange.q1', senseId: 'exchange.s1', errorType: 'meaning', type: '词义选择', prompt: '「exchange」在本条的核心意思是：', options: ['交换', '完全相反的意思', '一种古代钱币'], answer: '交换', explain: 'exchange：交换。' },
      { id: 'exchange.q2', senseId: 'exchange.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exchange?', options: ['交换', 'a kind of ancient coin', 'the past tense of be'], answer: '交换', explain: '对的是「交换」。' },
      { id: 'exchange.q3', senseId: 'exchange.s1', errorType: 'grammar', type: '词义选择', prompt: 'exchange 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exchange.q4', senseId: 'exchange.s1', errorType: 'meaning', type: '词源', prompt: '记 exchange 时，哪句更稳妥？', options: ['先锁住「交换」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交换」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交换'] },
  });

  D('exchequer', {
    etymology: {
      origin: '英语派生：exchequ + -er，词性转到「国库」。',
      prefix: null,
      root: { text: 'exchequ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exchequer', text: '英语派生：exchequ + -er，词性转到「国库」。' },
        { label: '现在', text: '核心用法是：国库。' },
      ],
      formationLogic: '先认词干 exchequ，再看词尾。',
      mnemonic: '看到 exchequer，先说出「国库」。',
      note: '先认词干 exchequ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exchequer.', chinese: '这一章反复回到同一个点：国库。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exchequer.s1', en: 'Without that exchequer, the next paragraph is hard to follow.', zh: '没有这个国库，下一段会很难读。', structure: 'exchequer / 表示 / 国库', grammar: 'noun，围绕「国库」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exchequer.', right: 'He gave me some advice about the exchequer.', reason: 'advice 不可数。名词 exchequer 的单复数按词典词形记。', rule: '先确定 exchequer 是noun，再套「国库」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exchequer.q1', senseId: 'exchequer.s1', errorType: 'meaning', type: '词义选择', prompt: '「exchequer」在本条的核心意思是：', options: ['国库', '完全相反的意思', '一种古代钱币'], answer: '国库', explain: 'exchequer：国库。' },
      { id: 'exchequer.q2', senseId: 'exchequer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exchequer?', options: ['国库', 'a kind of ancient coin', 'the past tense of be'], answer: '国库', explain: '对的是「国库」。' },
      { id: 'exchequer.q3', senseId: 'exchequer.s1', errorType: 'grammar', type: '词义选择', prompt: 'exchequer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exchequer.q4', senseId: 'exchequer.s1', errorType: 'meaning', type: '词源', prompt: '记 exchequer 时，哪句更稳妥？', options: ['先锁住「国库」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「国库」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['国库'] },
  });

  D('excite', {
    etymology: {
      origin: '现代英语常用词「excite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excite', gloss: '使兴奋' },
      suffix: null,
      history: [
        { label: 'excite', text: '现代英语常用词「excite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使兴奋。' },
      ],
      formationLogic: '核心义：使兴奋。',
      mnemonic: '看到 excite，先说出「使兴奋」。',
      note: '核心义：使兴奋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to excite before the office closed.', chinese: '他们同意在办公室关门前做这件事：使兴奋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excite.s1', en: 'The deadline forced the team to excite that afternoon.', zh: '截止日期逼着小组在那天下午使兴奋。', structure: 'excite / 表示 / 使兴奋', grammar: 'verb，围绕「使兴奋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exciteed it yesterday without checking the real past form.', right: 'Check the past form of "excite" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 excite 是verb，再套「使兴奋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excite.q1', senseId: 'excite.s1', errorType: 'meaning', type: '词义选择', prompt: '「excite」在本条的核心意思是：', options: ['使兴奋', '完全相反的意思', '一种古代钱币'], answer: '使兴奋', explain: 'excite：使兴奋。' },
      { id: 'excite.q2', senseId: 'excite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excite?', options: ['使兴奋', 'a kind of ancient coin', 'the past tense of be'], answer: '使兴奋', explain: '对的是「使兴奋」。' },
      { id: 'excite.q3', senseId: 'excite.s1', errorType: 'grammar', type: '词义选择', prompt: 'excite 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'excite.q4', senseId: 'excite.s1', errorType: 'meaning', type: '词源', prompt: '记 excite 时，哪句更稳妥？', options: ['先锁住「使兴奋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使兴奋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使兴奋'] },
  });

  D('excitement', {
    etymology: {
      origin: '英语派生：excite + -ment，词性转到「兴奋」。',
      prefix: null,
      root: { text: 'excite', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'excitement', text: '英语派生：excite + -ment，词性转到「兴奋」。' },
        { label: '现在', text: '核心用法是：兴奋。' },
      ],
      formationLogic: '先认词干 excite，再看词尾。',
      mnemonic: '看到 excitement，先说出「兴奋」。',
      note: '先认词干 excite，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one excitement.', chinese: '这一章反复回到同一个点：兴奋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excitement.s1', en: 'Without that excitement, the next paragraph is hard to follow.', zh: '没有这个兴奋，下一段会很难读。', structure: 'excitement / 表示 / 兴奋', grammar: 'noun，围绕「兴奋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the excitement.', right: 'He gave me some advice about the excitement.', reason: 'advice 不可数。名词 excitement 的单复数按词典词形记。', rule: '先确定 excitement 是noun，再套「兴奋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excitement.q1', senseId: 'excitement.s1', errorType: 'meaning', type: '词义选择', prompt: '「excitement」在本条的核心意思是：', options: ['兴奋', '完全相反的意思', '一种古代钱币'], answer: '兴奋', explain: 'excitement：兴奋。' },
      { id: 'excitement.q2', senseId: 'excitement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excitement?', options: ['兴奋', 'a kind of ancient coin', 'the past tense of be'], answer: '兴奋', explain: '对的是「兴奋」。' },
      { id: 'excitement.q3', senseId: 'excitement.s1', errorType: 'grammar', type: '词义选择', prompt: 'excitement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'excitement.q4', senseId: 'excitement.s1', errorType: 'meaning', type: '词源', prompt: '记 excitement 时，哪句更稳妥？', options: ['先锁住「兴奋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「兴奋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['兴奋'] },
  });

  D('exclaim', {
    etymology: {
      origin: '现代英语常用词「exclaim」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exclaim', gloss: '呼喊' },
      suffix: null,
      history: [
        { label: 'exclaim', text: '现代英语常用词「exclaim」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：呼喊。' },
      ],
      formationLogic: '核心义：呼喊。',
      mnemonic: '看到 exclaim，先说出「呼喊」。',
      note: '核心义：呼喊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exclaim before the office closed.', chinese: '他们同意在办公室关门前做这件事：呼喊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exclaim.s1', en: 'The deadline forced the team to exclaim that afternoon.', zh: '截止日期逼着小组在那天下午呼喊。', structure: 'exclaim / 表示 / 呼喊', grammar: 'verb，围绕「呼喊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exclaimed it yesterday without checking the real past form.', right: 'Check the past form of "exclaim" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exclaim 是verb，再套「呼喊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exclaim.q1', senseId: 'exclaim.s1', errorType: 'meaning', type: '词义选择', prompt: '「exclaim」在本条的核心意思是：', options: ['呼喊', '完全相反的意思', '一种古代钱币'], answer: '呼喊', explain: 'exclaim：呼喊。' },
      { id: 'exclaim.q2', senseId: 'exclaim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exclaim?', options: ['呼喊', 'a kind of ancient coin', 'the past tense of be'], answer: '呼喊', explain: '对的是「呼喊」。' },
      { id: 'exclaim.q3', senseId: 'exclaim.s1', errorType: 'grammar', type: '词义选择', prompt: 'exclaim 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exclaim.q4', senseId: 'exclaim.s1', errorType: 'meaning', type: '词源', prompt: '记 exclaim 时，哪句更稳妥？', options: ['先锁住「呼喊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「呼喊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['呼喊'] },
  });

  D('exclude', {
    etymology: {
      origin: '现代英语常用词「exclude」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exclude', gloss: '排除' },
      suffix: null,
      history: [
        { label: 'exclude', text: '现代英语常用词「exclude」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：排除。' },
      ],
      formationLogic: '核心义：排除。',
      mnemonic: '看到 exclude，先说出「排除」。',
      note: '核心义：排除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exclude before the office closed.', chinese: '他们同意在办公室关门前做这件事：排除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exclude.s1', en: 'The deadline forced the team to exclude that afternoon.', zh: '截止日期逼着小组在那天下午排除。', structure: 'exclude / 表示 / 排除', grammar: 'verb，围绕「排除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She excludeed it yesterday without checking the real past form.', right: 'Check the past form of "exclude" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exclude 是verb，再套「排除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exclude.q1', senseId: 'exclude.s1', errorType: 'meaning', type: '词义选择', prompt: '「exclude」在本条的核心意思是：', options: ['排除', '完全相反的意思', '一种古代钱币'], answer: '排除', explain: 'exclude：排除。' },
      { id: 'exclude.q2', senseId: 'exclude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exclude?', options: ['排除', 'a kind of ancient coin', 'the past tense of be'], answer: '排除', explain: '对的是「排除」。' },
      { id: 'exclude.q3', senseId: 'exclude.s1', errorType: 'grammar', type: '词义选择', prompt: 'exclude 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exclude.q4', senseId: 'exclude.s1', errorType: 'meaning', type: '词源', prompt: '记 exclude 时，哪句更稳妥？', options: ['先锁住「排除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「排除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['排除'] },
  });

  D('excluded', {
    etymology: {
      origin: '现代英语常用词「excluded」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excluded', gloss: '被排除的' },
      suffix: null,
      history: [
        { label: 'excluded', text: '现代英语常用词「excluded」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被排除的。' },
      ],
      formationLogic: '核心义：被排除的。',
      mnemonic: '看到 excluded，先说出「被排除的」。',
      note: '核心义：被排除的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was excluded.', chinese: '即使是初读者也能看出，这个结果是被排除的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excluded.s1', en: 'They wanted a excluded answer, not a long speech.', zh: '他们要一个被排除的的答复，不要长篇发言。', structure: 'excluded / 表示 / 被排除的', grammar: 'adjective，围绕「被排除的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are excluded.', right: 'The news is excluded.', reason: 'news 作主语时动词用单数。', rule: '先确定 excluded 是adjective，再套「被排除的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excluded.q1', senseId: 'excluded.s1', errorType: 'meaning', type: '词义选择', prompt: '「excluded」在本条的核心意思是：', options: ['被排除的', '完全相反的意思', '一种古代钱币'], answer: '被排除的', explain: 'excluded：被排除的。' },
      { id: 'excluded.q2', senseId: 'excluded.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excluded?', options: ['被排除的', 'a kind of ancient coin', 'the past tense of be'], answer: '被排除的', explain: '对的是「被排除的」。' },
      { id: 'excluded.q3', senseId: 'excluded.s1', errorType: 'grammar', type: '词义选择', prompt: 'excluded 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'excluded.q4', senseId: 'excluded.s1', errorType: 'meaning', type: '词源', prompt: '记 excluded 时，哪句更稳妥？', options: ['先锁住「被排除的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被排除的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被排除的'] },
  });

  D('exclusion', {
    etymology: {
      origin: '英语派生：exclu + -sion，词性转到「排除」。',
      prefix: null,
      root: { text: 'exclu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exclusion', text: '英语派生：exclu + -sion，词性转到「排除」。' },
        { label: '现在', text: '核心用法是：排除。' },
      ],
      formationLogic: '先认词干 exclu，再看词尾。',
      mnemonic: '看到 exclusion，先说出「排除」。',
      note: '先认词干 exclu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exclusion.', chinese: '这一章反复回到同一个点：排除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exclusion.s1', en: 'Without that exclusion, the next paragraph is hard to follow.', zh: '没有这个排除，下一段会很难读。', structure: 'exclusion / 表示 / 排除', grammar: 'noun，围绕「排除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exclusion.', right: 'He gave me some advice about the exclusion.', reason: 'advice 不可数。名词 exclusion 的单复数按词典词形记。', rule: '先确定 exclusion 是noun，再套「排除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exclusion.q1', senseId: 'exclusion.s1', errorType: 'meaning', type: '词义选择', prompt: '「exclusion」在本条的核心意思是：', options: ['排除', '完全相反的意思', '一种古代钱币'], answer: '排除', explain: 'exclusion：排除。' },
      { id: 'exclusion.q2', senseId: 'exclusion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exclusion?', options: ['排除', 'a kind of ancient coin', 'the past tense of be'], answer: '排除', explain: '对的是「排除」。' },
      { id: 'exclusion.q3', senseId: 'exclusion.s1', errorType: 'grammar', type: '词义选择', prompt: 'exclusion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exclusion.q4', senseId: 'exclusion.s1', errorType: 'meaning', type: '词源', prompt: '记 exclusion 时，哪句更稳妥？', options: ['先锁住「排除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「排除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['排除'] },
  });

  D('exclusive', {
    etymology: {
      origin: '英语派生：exclus + -ive，词性转到「独家的」。',
      prefix: null,
      root: { text: 'exclus', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exclusive', text: '英语派生：exclus + -ive，词性转到「独家的」。' },
        { label: '现在', text: '核心用法是：独家的。' },
      ],
      formationLogic: '先认词干 exclus，再看词尾。',
      mnemonic: '看到 exclusive，先说出「独家的」。',
      note: '先认词干 exclus，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exclusive.', chinese: '即使是初读者也能看出，这个结果是独家的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exclusive.s1', en: 'They wanted a exclusive answer, not a long speech.', zh: '他们要一个独家的的答复，不要长篇发言。', structure: 'exclusive / 表示 / 独家的', grammar: 'adjective，围绕「独家的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exclusive.', right: 'The news is exclusive.', reason: 'news 作主语时动词用单数。', rule: '先确定 exclusive 是adjective，再套「独家的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exclusive.q1', senseId: 'exclusive.s1', errorType: 'meaning', type: '词义选择', prompt: '「exclusive」在本条的核心意思是：', options: ['独家的', '完全相反的意思', '一种古代钱币'], answer: '独家的', explain: 'exclusive：独家的。' },
      { id: 'exclusive.q2', senseId: 'exclusive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exclusive?', options: ['独家的', 'a kind of ancient coin', 'the past tense of be'], answer: '独家的', explain: '对的是「独家的」。' },
      { id: 'exclusive.q3', senseId: 'exclusive.s1', errorType: 'grammar', type: '词义选择', prompt: 'exclusive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exclusive.q4', senseId: 'exclusive.s1', errorType: 'meaning', type: '词源', prompt: '记 exclusive 时，哪句更稳妥？', options: ['先锁住「独家的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「独家的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['独家的'] },
  });

  D('excrement', {
    etymology: {
      origin: '英语派生：excre + -ment，词性转到「粪便」。',
      prefix: null,
      root: { text: 'excre', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'excrement', text: '英语派生：excre + -ment，词性转到「粪便」。' },
        { label: '现在', text: '核心用法是：粪便。' },
      ],
      formationLogic: '先认词干 excre，再看词尾。',
      mnemonic: '看到 excrement，先说出「粪便」。',
      note: '先认词干 excre，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one excrement.', chinese: '这一章反复回到同一个点：粪便。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excrement.s1', en: 'Without that excrement, the next paragraph is hard to follow.', zh: '没有这个粪便，下一段会很难读。', structure: 'excrement / 表示 / 粪便', grammar: 'noun，围绕「粪便」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the excrement.', right: 'He gave me some advice about the excrement.', reason: 'advice 不可数。名词 excrement 的单复数按词典词形记。', rule: '先确定 excrement 是noun，再套「粪便」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excrement.q1', senseId: 'excrement.s1', errorType: 'meaning', type: '词义选择', prompt: '「excrement」在本条的核心意思是：', options: ['粪便', '完全相反的意思', '一种古代钱币'], answer: '粪便', explain: 'excrement：粪便。' },
      { id: 'excrement.q2', senseId: 'excrement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excrement?', options: ['粪便', 'a kind of ancient coin', 'the past tense of be'], answer: '粪便', explain: '对的是「粪便」。' },
      { id: 'excrement.q3', senseId: 'excrement.s1', errorType: 'grammar', type: '词义选择', prompt: 'excrement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'excrement.q4', senseId: 'excrement.s1', errorType: 'meaning', type: '词源', prompt: '记 excrement 时，哪句更稳妥？', options: ['先锁住「粪便」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「粪便」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粪便'] },
  });

  D('excursion', {
    etymology: {
      origin: '英语派生：excur + -sion，词性转到「远足」。',
      prefix: null,
      root: { text: 'excur', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'excursion', text: '英语派生：excur + -sion，词性转到「远足」。' },
        { label: '现在', text: '核心用法是：远足。' },
      ],
      formationLogic: '先认词干 excur，再看词尾。',
      mnemonic: '看到 excursion，先说出「远足」。',
      note: '先认词干 excur，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one excursion.', chinese: '这一章反复回到同一个点：远足。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excursion.s1', en: 'Without that excursion, the next paragraph is hard to follow.', zh: '没有这个远足，下一段会很难读。', structure: 'excursion / 表示 / 远足', grammar: 'noun，围绕「远足」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the excursion.', right: 'He gave me some advice about the excursion.', reason: 'advice 不可数。名词 excursion 的单复数按词典词形记。', rule: '先确定 excursion 是noun，再套「远足」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excursion.q1', senseId: 'excursion.s1', errorType: 'meaning', type: '词义选择', prompt: '「excursion」在本条的核心意思是：', options: ['远足', '完全相反的意思', '一种古代钱币'], answer: '远足', explain: 'excursion：远足。' },
      { id: 'excursion.q2', senseId: 'excursion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excursion?', options: ['远足', 'a kind of ancient coin', 'the past tense of be'], answer: '远足', explain: '对的是「远足」。' },
      { id: 'excursion.q3', senseId: 'excursion.s1', errorType: 'grammar', type: '词义选择', prompt: 'excursion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'excursion.q4', senseId: 'excursion.s1', errorType: 'meaning', type: '词源', prompt: '记 excursion 时，哪句更稳妥？', options: ['先锁住「远足」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「远足」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['远足'] },
  });

  D('excuse', {
    etymology: {
      origin: '现代英语常用词「excuse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'excuse', gloss: '借口' },
      suffix: null,
      history: [
        { label: 'excuse', text: '现代英语常用词「excuse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：借口。' },
      ],
      formationLogic: '核心义：借口。',
      mnemonic: '看到 excuse，先说出「借口」。',
      note: '核心义：借口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one excuse.', chinese: '这一章反复回到同一个点：借口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excuse.s1', en: 'Without that excuse, the next paragraph is hard to follow.', zh: '没有这个借口，下一段会很难读。', structure: 'excuse / 表示 / 借口', grammar: 'noun，围绕「借口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the excuse.', right: 'He gave me some advice about the excuse.', reason: 'advice 不可数。名词 excuse 的单复数按词典词形记。', rule: '先确定 excuse 是noun，再套「借口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excuse.q1', senseId: 'excuse.s1', errorType: 'meaning', type: '词义选择', prompt: '「excuse」在本条的核心意思是：', options: ['借口', '完全相反的意思', '一种古代钱币'], answer: '借口', explain: 'excuse：借口。' },
      { id: 'excuse.q2', senseId: 'excuse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excuse?', options: ['借口', 'a kind of ancient coin', 'the past tense of be'], answer: '借口', explain: '对的是「借口」。' },
      { id: 'excuse.q3', senseId: 'excuse.s1', errorType: 'grammar', type: '词义选择', prompt: 'excuse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'excuse.q4', senseId: 'excuse.s1', errorType: 'meaning', type: '词源', prompt: '记 excuse 时，哪句更稳妥？', options: ['先锁住「借口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「借口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['借口'] },
  });

  D('excuse me', {
    etymology: {
      origin: '现代英语固定说法「excuse me」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'excuse me', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'excuse me', text: '现代英语固定说法「excuse me」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：对不起。' },
      ],
      formationLogic: '核心义：对不起。',
      mnemonic: '看到 excuse me，先说出「对不起」。',
      note: '核心义：对不起。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "excuse me" and asked the class to keep it as one unit.', chinese: '老师把「excuse me」圈出来，让全班把它当成一个整体。它表示对不起。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'excuse me.s1', en: 'In the margin she wrote "excuse me" so nobody would split the phrase.', zh: '她在页边写下「excuse me」，免得有人把这个说法拆开。意思是对不起。', structure: 'excuse me / 表示 / 对不起', grammar: 'interjection，围绕「对不起」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of excuse me and lost the point.', right: 'Keep "excuse me" together: it means 对不起.', reason: '「excuse me」要整块理解。', rule: '先确定 excuse me 是interjection，再套「对不起」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'excuse me.q1', senseId: 'excuse me.s1', errorType: 'meaning', type: '词义选择', prompt: '「excuse me」在本条的核心意思是：', options: ['对不起', '完全相反的意思', '一种古代钱币'], answer: '对不起', explain: 'excuse me：对不起。' },
      { id: 'excuse me.q2', senseId: 'excuse me.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches excuse me?', options: ['对不起', 'a kind of ancient coin', 'the past tense of be'], answer: '对不起', explain: '对的是「对不起」。' },
      { id: 'excuse me.q3', senseId: 'excuse me.s1', errorType: 'grammar', type: '词义选择', prompt: 'excuse me 的词性（本条）更接近：', options: ['interjection', '只能作感叹词', '只能作数词'], answer: 'interjection', explain: '本条按 interjection 来用。' },
      { id: 'excuse me.q4', senseId: 'excuse me.s1', errorType: 'meaning', type: '词源', prompt: '记 excuse me 时，哪句更稳妥？', options: ['先锁住「对不起」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「对不起」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对不起'] },
  });

  D('execute', {
    etymology: {
      origin: '现代英语常用词「execute」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'execute', gloss: '执行' },
      suffix: null,
      history: [
        { label: 'execute', text: '现代英语常用词「execute」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：执行。' },
      ],
      formationLogic: '核心义：执行。',
      mnemonic: '看到 execute，先说出「执行」。',
      note: '核心义：执行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to execute before the office closed.', chinese: '他们同意在办公室关门前做这件事：执行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'execute.s1', en: 'The deadline forced the team to execute that afternoon.', zh: '截止日期逼着小组在那天下午执行。', structure: 'execute / 表示 / 执行', grammar: 'verb，围绕「执行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She executeed it yesterday without checking the real past form.', right: 'Check the past form of "execute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 execute 是verb，再套「执行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'execute.q1', senseId: 'execute.s1', errorType: 'meaning', type: '词义选择', prompt: '「execute」在本条的核心意思是：', options: ['执行', '完全相反的意思', '一种古代钱币'], answer: '执行', explain: 'execute：执行。' },
      { id: 'execute.q2', senseId: 'execute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches execute?', options: ['执行', 'a kind of ancient coin', 'the past tense of be'], answer: '执行', explain: '对的是「执行」。' },
      { id: 'execute.q3', senseId: 'execute.s1', errorType: 'grammar', type: '词义选择', prompt: 'execute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'execute.q4', senseId: 'execute.s1', errorType: 'meaning', type: '词源', prompt: '记 execute 时，哪句更稳妥？', options: ['先锁住「执行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「执行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['执行'] },
  });

  D('executive', {
    etymology: {
      origin: '英语派生：execut + -ive，词性转到「主管」。',
      prefix: null,
      root: { text: 'execut', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'executive', text: '英语派生：execut + -ive，词性转到「主管」。' },
        { label: '现在', text: '核心用法是：主管。' },
      ],
      formationLogic: '先认词干 execut，再看词尾。',
      mnemonic: '看到 executive，先说出「主管」。',
      note: '先认词干 execut，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one executive.', chinese: '这一章反复回到同一个点：主管。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'executive.s1', en: 'Without that executive, the next paragraph is hard to follow.', zh: '没有这个主管，下一段会很难读。', structure: 'executive / 表示 / 主管', grammar: 'noun，围绕「主管」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the executive.', right: 'He gave me some advice about the executive.', reason: 'advice 不可数。名词 executive 的单复数按词典词形记。', rule: '先确定 executive 是noun，再套「主管」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'executive.q1', senseId: 'executive.s1', errorType: 'meaning', type: '词义选择', prompt: '「executive」在本条的核心意思是：', options: ['主管', '完全相反的意思', '一种古代钱币'], answer: '主管', explain: 'executive：主管。' },
      { id: 'executive.q2', senseId: 'executive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches executive?', options: ['主管', 'a kind of ancient coin', 'the past tense of be'], answer: '主管', explain: '对的是「主管」。' },
      { id: 'executive.q3', senseId: 'executive.s1', errorType: 'grammar', type: '词义选择', prompt: 'executive 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'executive.q4', senseId: 'executive.s1', errorType: 'meaning', type: '词源', prompt: '记 executive 时，哪句更稳妥？', options: ['先锁住「主管」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「主管」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['主管'] },
  });

  D('exempt', {
    etymology: {
      origin: '现代英语常用词「exempt」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exempt', gloss: '免除' },
      suffix: null,
      history: [
        { label: 'exempt', text: '现代英语常用词「exempt」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：免除。' },
      ],
      formationLogic: '核心义：免除。',
      mnemonic: '看到 exempt，先说出「免除」。',
      note: '核心义：免除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exempt before the office closed.', chinese: '他们同意在办公室关门前做这件事：免除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exempt.s1', en: 'The deadline forced the team to exempt that afternoon.', zh: '截止日期逼着小组在那天下午免除。', structure: 'exempt / 表示 / 免除', grammar: 'verb，围绕「免除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exempted it yesterday without checking the real past form.', right: 'Check the past form of "exempt" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exempt 是verb，再套「免除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exempt.q1', senseId: 'exempt.s1', errorType: 'meaning', type: '词义选择', prompt: '「exempt」在本条的核心意思是：', options: ['免除', '完全相反的意思', '一种古代钱币'], answer: '免除', explain: 'exempt：免除。' },
      { id: 'exempt.q2', senseId: 'exempt.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exempt?', options: ['免除', 'a kind of ancient coin', 'the past tense of be'], answer: '免除', explain: '对的是「免除」。' },
      { id: 'exempt.q3', senseId: 'exempt.s1', errorType: 'grammar', type: '词义选择', prompt: 'exempt 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exempt.q4', senseId: 'exempt.s1', errorType: 'meaning', type: '词源', prompt: '记 exempt 时，哪句更稳妥？', options: ['先锁住「免除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「免除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['免除'] },
  });

  D('exercise', {
    etymology: {
      origin: '现代英语常用词「exercise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exercise', gloss: '锻炼' },
      suffix: null,
      history: [
        { label: 'exercise', text: '现代英语常用词「exercise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：锻炼。' },
      ],
      formationLogic: '核心义：锻炼。',
      mnemonic: '看到 exercise，先说出「锻炼」。',
      note: '核心义：锻炼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exercise.', chinese: '这一章反复回到同一个点：锻炼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exercise.s1', en: 'Without that exercise, the next paragraph is hard to follow.', zh: '没有这个锻炼，下一段会很难读。', structure: 'exercise / 表示 / 锻炼', grammar: 'noun，围绕「锻炼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exercise.', right: 'He gave me some advice about the exercise.', reason: 'advice 不可数。名词 exercise 的单复数按词典词形记。', rule: '先确定 exercise 是noun，再套「锻炼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exercise.q1', senseId: 'exercise.s1', errorType: 'meaning', type: '词义选择', prompt: '「exercise」在本条的核心意思是：', options: ['锻炼', '完全相反的意思', '一种古代钱币'], answer: '锻炼', explain: 'exercise：锻炼。' },
      { id: 'exercise.q2', senseId: 'exercise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exercise?', options: ['锻炼', 'a kind of ancient coin', 'the past tense of be'], answer: '锻炼', explain: '对的是「锻炼」。' },
      { id: 'exercise.q3', senseId: 'exercise.s1', errorType: 'grammar', type: '词义选择', prompt: 'exercise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exercise.q4', senseId: 'exercise.s1', errorType: 'meaning', type: '词源', prompt: '记 exercise 时，哪句更稳妥？', options: ['先锁住「锻炼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「锻炼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['锻炼'] },
  });

  D('exert', {
    etymology: {
      origin: '现代英语常用词「exert」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exert', gloss: '施加' },
      suffix: null,
      history: [
        { label: 'exert', text: '现代英语常用词「exert」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：施加。' },
      ],
      formationLogic: '核心义：施加。',
      mnemonic: '看到 exert，先说出「施加」。',
      note: '核心义：施加。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exert before the office closed.', chinese: '他们同意在办公室关门前做这件事：施加。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exert.s1', en: 'The deadline forced the team to exert that afternoon.', zh: '截止日期逼着小组在那天下午施加。', structure: 'exert / 表示 / 施加', grammar: 'verb，围绕「施加」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exerted it yesterday without checking the real past form.', right: 'Check the past form of "exert" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exert 是verb，再套「施加」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exert.q1', senseId: 'exert.s1', errorType: 'meaning', type: '词义选择', prompt: '「exert」在本条的核心意思是：', options: ['施加', '完全相反的意思', '一种古代钱币'], answer: '施加', explain: 'exert：施加。' },
      { id: 'exert.q2', senseId: 'exert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exert?', options: ['施加', 'a kind of ancient coin', 'the past tense of be'], answer: '施加', explain: '对的是「施加」。' },
      { id: 'exert.q3', senseId: 'exert.s1', errorType: 'grammar', type: '词义选择', prompt: 'exert 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exert.q4', senseId: 'exert.s1', errorType: 'meaning', type: '词源', prompt: '记 exert 时，哪句更稳妥？', options: ['先锁住「施加」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「施加」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['施加'] },
  });

  D('exhale', {
    etymology: {
      origin: '现代英语常用词「exhale」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exhale', gloss: '呼气' },
      suffix: null,
      history: [
        { label: 'exhale', text: '现代英语常用词「exhale」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：呼气。' },
      ],
      formationLogic: '核心义：呼气。',
      mnemonic: '看到 exhale，先说出「呼气」。',
      note: '核心义：呼气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exhale before the office closed.', chinese: '他们同意在办公室关门前做这件事：呼气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhale.s1', en: 'The deadline forced the team to exhale that afternoon.', zh: '截止日期逼着小组在那天下午呼气。', structure: 'exhale / 表示 / 呼气', grammar: 'verb，围绕「呼气」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exhaleed it yesterday without checking the real past form.', right: 'Check the past form of "exhale" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exhale 是verb，再套「呼气」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhale.q1', senseId: 'exhale.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhale」在本条的核心意思是：', options: ['呼气', '完全相反的意思', '一种古代钱币'], answer: '呼气', explain: 'exhale：呼气。' },
      { id: 'exhale.q2', senseId: 'exhale.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhale?', options: ['呼气', 'a kind of ancient coin', 'the past tense of be'], answer: '呼气', explain: '对的是「呼气」。' },
      { id: 'exhale.q3', senseId: 'exhale.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhale 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exhale.q4', senseId: 'exhale.s1', errorType: 'meaning', type: '词源', prompt: '记 exhale 时，哪句更稳妥？', options: ['先锁住「呼气」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「呼气」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['呼气'] },
  });

  D('exhaust', {
    etymology: {
      origin: '现代英语常用词「exhaust」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exhaust', gloss: '使精疲力竭' },
      suffix: null,
      history: [
        { label: 'exhaust', text: '现代英语常用词「exhaust」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使精疲力竭。' },
      ],
      formationLogic: '核心义：使精疲力竭。',
      mnemonic: '看到 exhaust，先说出「使精疲力竭」。',
      note: '核心义：使精疲力竭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exhaust before the office closed.', chinese: '他们同意在办公室关门前做这件事：使精疲力竭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhaust.s1', en: 'The deadline forced the team to exhaust that afternoon.', zh: '截止日期逼着小组在那天下午使精疲力竭。', structure: 'exhaust / 表示 / 使精疲力竭', grammar: 'verb，围绕「使精疲力竭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exhausted it yesterday without checking the real past form.', right: 'Check the past form of "exhaust" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exhaust 是verb，再套「使精疲力竭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhaust.q1', senseId: 'exhaust.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhaust」在本条的核心意思是：', options: ['使精疲力竭', '完全相反的意思', '一种古代钱币'], answer: '使精疲力竭', explain: 'exhaust：使精疲力竭。' },
      { id: 'exhaust.q2', senseId: 'exhaust.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhaust?', options: ['使精疲力竭', 'a kind of ancient coin', 'the past tense of be'], answer: '使精疲力竭', explain: '对的是「使精疲力竭」。' },
      { id: 'exhaust.q3', senseId: 'exhaust.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhaust 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exhaust.q4', senseId: 'exhaust.s1', errorType: 'meaning', type: '词源', prompt: '记 exhaust 时，哪句更稳妥？', options: ['先锁住「使精疲力竭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使精疲力竭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使精疲力竭'] },
  });

  D('exhausted', {
    etymology: {
      origin: '现代英语常用词「exhausted」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exhausted', gloss: '筋疲力尽的' },
      suffix: null,
      history: [
        { label: 'exhausted', text: '现代英语常用词「exhausted」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：筋疲力尽的。' },
      ],
      formationLogic: '核心义：筋疲力尽的。',
      mnemonic: '看到 exhausted，先说出「筋疲力尽的」。',
      note: '核心义：筋疲力尽的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exhausted.', chinese: '即使是初读者也能看出，这个结果是筋疲力尽的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhausted.s1', en: 'They wanted a exhausted answer, not a long speech.', zh: '他们要一个筋疲力尽的的答复，不要长篇发言。', structure: 'exhausted / 表示 / 筋疲力尽的', grammar: 'adjective，围绕「筋疲力尽的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exhausted.', right: 'The news is exhausted.', reason: 'news 作主语时动词用单数。', rule: '先确定 exhausted 是adjective，再套「筋疲力尽的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhausted.q1', senseId: 'exhausted.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhausted」在本条的核心意思是：', options: ['筋疲力尽的', '完全相反的意思', '一种古代钱币'], answer: '筋疲力尽的', explain: 'exhausted：筋疲力尽的。' },
      { id: 'exhausted.q2', senseId: 'exhausted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhausted?', options: ['筋疲力尽的', 'a kind of ancient coin', 'the past tense of be'], answer: '筋疲力尽的', explain: '对的是「筋疲力尽的」。' },
      { id: 'exhausted.q3', senseId: 'exhausted.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhausted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exhausted.q4', senseId: 'exhausted.s1', errorType: 'meaning', type: '词源', prompt: '记 exhausted 时，哪句更稳妥？', options: ['先锁住「筋疲力尽的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「筋疲力尽的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['筋疲力尽的'] },
  });

  D('exhausting', {
    etymology: {
      origin: '英语派生：exhaust + -ing，词性转到「令人疲惫的」。',
      prefix: null,
      root: { text: 'exhaust', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exhausting', text: '英语派生：exhaust + -ing，词性转到「令人疲惫的」。' },
        { label: '现在', text: '核心用法是：令人疲惫的。' },
      ],
      formationLogic: '先认词干 exhaust，再看词尾。',
      mnemonic: '看到 exhausting，先说出「令人疲惫的」。',
      note: '先认词干 exhaust，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exhausting.', chinese: '即使是初读者也能看出，这个结果是令人疲惫的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhausting.s1', en: 'They wanted a exhausting answer, not a long speech.', zh: '他们要一个令人疲惫的的答复，不要长篇发言。', structure: 'exhausting / 表示 / 令人疲惫的', grammar: 'adjective，围绕「令人疲惫的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exhausting.', right: 'The news is exhausting.', reason: 'news 作主语时动词用单数。', rule: '先确定 exhausting 是adjective，再套「令人疲惫的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhausting.q1', senseId: 'exhausting.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhausting」在本条的核心意思是：', options: ['令人疲惫的', '完全相反的意思', '一种古代钱币'], answer: '令人疲惫的', explain: 'exhausting：令人疲惫的。' },
      { id: 'exhausting.q2', senseId: 'exhausting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhausting?', options: ['令人疲惫的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人疲惫的', explain: '对的是「令人疲惫的」。' },
      { id: 'exhausting.q3', senseId: 'exhausting.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhausting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exhausting.q4', senseId: 'exhausting.s1', errorType: 'meaning', type: '词源', prompt: '记 exhausting 时，哪句更稳妥？', options: ['先锁住「令人疲惫的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「令人疲惫的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人疲惫的'] },
  });

  D('exhaustion', {
    etymology: {
      origin: '英语派生：exhaus + -tion，词性转到「耗尽」。',
      prefix: null,
      root: { text: 'exhaus', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exhaustion', text: '英语派生：exhaus + -tion，词性转到「耗尽」。' },
        { label: '现在', text: '核心用法是：耗尽。' },
      ],
      formationLogic: '先认词干 exhaus，再看词尾。',
      mnemonic: '看到 exhaustion，先说出「耗尽」。',
      note: '先认词干 exhaus，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exhaustion.', chinese: '这一章反复回到同一个点：耗尽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhaustion.s1', en: 'Without that exhaustion, the next paragraph is hard to follow.', zh: '没有这个耗尽，下一段会很难读。', structure: 'exhaustion / 表示 / 耗尽', grammar: 'noun，围绕「耗尽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exhaustion.', right: 'He gave me some advice about the exhaustion.', reason: 'advice 不可数。名词 exhaustion 的单复数按词典词形记。', rule: '先确定 exhaustion 是noun，再套「耗尽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhaustion.q1', senseId: 'exhaustion.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhaustion」在本条的核心意思是：', options: ['耗尽', '完全相反的意思', '一种古代钱币'], answer: '耗尽', explain: 'exhaustion：耗尽。' },
      { id: 'exhaustion.q2', senseId: 'exhaustion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhaustion?', options: ['耗尽', 'a kind of ancient coin', 'the past tense of be'], answer: '耗尽', explain: '对的是「耗尽」。' },
      { id: 'exhaustion.q3', senseId: 'exhaustion.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhaustion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exhaustion.q4', senseId: 'exhaustion.s1', errorType: 'meaning', type: '词源', prompt: '记 exhaustion 时，哪句更稳妥？', options: ['先锁住「耗尽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耗尽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耗尽'] },
  });

  D('exhibit', {
    etymology: {
      origin: '现代英语常用词「exhibit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exhibit', gloss: '展出' },
      suffix: null,
      history: [
        { label: 'exhibit', text: '现代英语常用词「exhibit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：展出。' },
      ],
      formationLogic: '核心义：展出。',
      mnemonic: '看到 exhibit，先说出「展出」。',
      note: '核心义：展出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exhibit before the office closed.', chinese: '他们同意在办公室关门前做这件事：展出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhibit.s1', en: 'The deadline forced the team to exhibit that afternoon.', zh: '截止日期逼着小组在那天下午展出。', structure: 'exhibit / 表示 / 展出', grammar: 'verb，围绕「展出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exhibited it yesterday without checking the real past form.', right: 'Check the past form of "exhibit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exhibit 是verb，再套「展出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhibit.q1', senseId: 'exhibit.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhibit」在本条的核心意思是：', options: ['展出', '完全相反的意思', '一种古代钱币'], answer: '展出', explain: 'exhibit：展出。' },
      { id: 'exhibit.q2', senseId: 'exhibit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhibit?', options: ['展出', 'a kind of ancient coin', 'the past tense of be'], answer: '展出', explain: '对的是「展出」。' },
      { id: 'exhibit.q3', senseId: 'exhibit.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhibit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exhibit.q4', senseId: 'exhibit.s1', errorType: 'meaning', type: '词源', prompt: '记 exhibit 时，哪句更稳妥？', options: ['先锁住「展出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「展出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['展出'] },
  });

  D('exhibition', {
    etymology: {
      origin: '英语派生：exhibi + -tion，词性转到「展览」。',
      prefix: null,
      root: { text: 'exhibi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exhibition', text: '英语派生：exhibi + -tion，词性转到「展览」。' },
        { label: '现在', text: '核心用法是：展览。' },
      ],
      formationLogic: '先认词干 exhibi，再看词尾。',
      mnemonic: '看到 exhibition，先说出「展览」。',
      note: '先认词干 exhibi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exhibition.', chinese: '这一章反复回到同一个点：展览。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exhibition.s1', en: 'Without that exhibition, the next paragraph is hard to follow.', zh: '没有这个展览，下一段会很难读。', structure: 'exhibition / 表示 / 展览', grammar: 'noun，围绕「展览」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exhibition.', right: 'He gave me some advice about the exhibition.', reason: 'advice 不可数。名词 exhibition 的单复数按词典词形记。', rule: '先确定 exhibition 是noun，再套「展览」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exhibition.q1', senseId: 'exhibition.s1', errorType: 'meaning', type: '词义选择', prompt: '「exhibition」在本条的核心意思是：', options: ['展览', '完全相反的意思', '一种古代钱币'], answer: '展览', explain: 'exhibition：展览。' },
      { id: 'exhibition.q2', senseId: 'exhibition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exhibition?', options: ['展览', 'a kind of ancient coin', 'the past tense of be'], answer: '展览', explain: '对的是「展览」。' },
      { id: 'exhibition.q3', senseId: 'exhibition.s1', errorType: 'grammar', type: '词义选择', prompt: 'exhibition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exhibition.q4', senseId: 'exhibition.s1', errorType: 'meaning', type: '词源', prompt: '记 exhibition 时，哪句更稳妥？', options: ['先锁住「展览」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「展览」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['展览'] },
  });

  D('exile', {
    etymology: {
      origin: '现代英语常用词「exile」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exile', gloss: '流放' },
      suffix: null,
      history: [
        { label: 'exile', text: '现代英语常用词「exile」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：流放。' },
      ],
      formationLogic: '核心义：流放。',
      mnemonic: '看到 exile，先说出「流放」。',
      note: '核心义：流放。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exile.', chinese: '这一章反复回到同一个点：流放。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exile.s1', en: 'Without that exile, the next paragraph is hard to follow.', zh: '没有这个流放，下一段会很难读。', structure: 'exile / 表示 / 流放', grammar: 'noun，围绕「流放」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exile.', right: 'He gave me some advice about the exile.', reason: 'advice 不可数。名词 exile 的单复数按词典词形记。', rule: '先确定 exile 是noun，再套「流放」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exile.q1', senseId: 'exile.s1', errorType: 'meaning', type: '词义选择', prompt: '「exile」在本条的核心意思是：', options: ['流放', '完全相反的意思', '一种古代钱币'], answer: '流放', explain: 'exile：流放。' },
      { id: 'exile.q2', senseId: 'exile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exile?', options: ['流放', 'a kind of ancient coin', 'the past tense of be'], answer: '流放', explain: '对的是「流放」。' },
      { id: 'exile.q3', senseId: 'exile.s1', errorType: 'grammar', type: '词义选择', prompt: 'exile 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exile.q4', senseId: 'exile.s1', errorType: 'meaning', type: '词源', prompt: '记 exile 时，哪句更稳妥？', options: ['先锁住「流放」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流放」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流放'] },
  });

  D('exist', {
    etymology: {
      origin: '现代英语常用词「exist」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exist', gloss: '存在' },
      suffix: null,
      history: [
        { label: 'exist', text: '现代英语常用词「exist」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：存在。' },
      ],
      formationLogic: '核心义：存在。',
      mnemonic: '看到 exist，先说出「存在」。',
      note: '核心义：存在。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exist before the office closed.', chinese: '他们同意在办公室关门前做这件事：存在。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exist.s1', en: 'The deadline forced the team to exist that afternoon.', zh: '截止日期逼着小组在那天下午存在。', structure: 'exist / 表示 / 存在', grammar: 'verb，围绕「存在」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She existed it yesterday without checking the real past form.', right: 'Check the past form of "exist" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exist 是verb，再套「存在」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exist.q1', senseId: 'exist.s1', errorType: 'meaning', type: '词义选择', prompt: '「exist」在本条的核心意思是：', options: ['存在', '完全相反的意思', '一种古代钱币'], answer: '存在', explain: 'exist：存在。' },
      { id: 'exist.q2', senseId: 'exist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exist?', options: ['存在', 'a kind of ancient coin', 'the past tense of be'], answer: '存在', explain: '对的是「存在」。' },
      { id: 'exist.q3', senseId: 'exist.s1', errorType: 'grammar', type: '词义选择', prompt: 'exist 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exist.q4', senseId: 'exist.s1', errorType: 'meaning', type: '词源', prompt: '记 exist 时，哪句更稳妥？', options: ['先锁住「存在」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「存在」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['存在'] },
  });

  D('existence', {
    etymology: {
      origin: '英语派生：exist + -ence，词性转到「存在」。',
      prefix: null,
      root: { text: 'exist', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'existence', text: '英语派生：exist + -ence，词性转到「存在」。' },
        { label: '现在', text: '核心用法是：存在。' },
      ],
      formationLogic: '先认词干 exist，再看词尾。',
      mnemonic: '看到 existence，先说出「存在」。',
      note: '先认词干 exist，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one existence.', chinese: '这一章反复回到同一个点：存在。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'existence.s1', en: 'Without that existence, the next paragraph is hard to follow.', zh: '没有这个存在，下一段会很难读。', structure: 'existence / 表示 / 存在', grammar: 'noun，围绕「存在」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the existence.', right: 'He gave me some advice about the existence.', reason: 'advice 不可数。名词 existence 的单复数按词典词形记。', rule: '先确定 existence 是noun，再套「存在」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'existence.q1', senseId: 'existence.s1', errorType: 'meaning', type: '词义选择', prompt: '「existence」在本条的核心意思是：', options: ['存在', '完全相反的意思', '一种古代钱币'], answer: '存在', explain: 'existence：存在。' },
      { id: 'existence.q2', senseId: 'existence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches existence?', options: ['存在', 'a kind of ancient coin', 'the past tense of be'], answer: '存在', explain: '对的是「存在」。' },
      { id: 'existence.q3', senseId: 'existence.s1', errorType: 'grammar', type: '词义选择', prompt: 'existence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'existence.q4', senseId: 'existence.s1', errorType: 'meaning', type: '词源', prompt: '记 existence 时，哪句更稳妥？', options: ['先锁住「存在」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「存在」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['存在'] },
  });

  D('exit', {
    etymology: {
      origin: '现代英语常用词「exit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exit', gloss: '出口' },
      suffix: null,
      history: [
        { label: 'exit', text: '现代英语常用词「exit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：出口。' },
      ],
      formationLogic: '核心义：出口。',
      mnemonic: '看到 exit，先说出「出口」。',
      note: '核心义：出口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exit.', chinese: '这一章反复回到同一个点：出口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exit.s1', en: 'Without that exit, the next paragraph is hard to follow.', zh: '没有这个出口，下一段会很难读。', structure: 'exit / 表示 / 出口', grammar: 'noun，围绕「出口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exit.', right: 'He gave me some advice about the exit.', reason: 'advice 不可数。名词 exit 的单复数按词典词形记。', rule: '先确定 exit 是noun，再套「出口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exit.q1', senseId: 'exit.s1', errorType: 'meaning', type: '词义选择', prompt: '「exit」在本条的核心意思是：', options: ['出口', '完全相反的意思', '一种古代钱币'], answer: '出口', explain: 'exit：出口。' },
      { id: 'exit.q2', senseId: 'exit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exit?', options: ['出口', 'a kind of ancient coin', 'the past tense of be'], answer: '出口', explain: '对的是「出口」。' },
      { id: 'exit.q3', senseId: 'exit.s1', errorType: 'grammar', type: '词义选择', prompt: 'exit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exit.q4', senseId: 'exit.s1', errorType: 'meaning', type: '词源', prompt: '记 exit 时，哪句更稳妥？', options: ['先锁住「出口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「出口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['出口'] },
  });

  D('exotic', {
    etymology: {
      origin: '英语派生：exot + -ic，词性转到「异国的」。',
      prefix: null,
      root: { text: 'exot', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exotic', text: '英语派生：exot + -ic，词性转到「异国的」。' },
        { label: '现在', text: '核心用法是：异国的。' },
      ],
      formationLogic: '先认词干 exot，再看词尾。',
      mnemonic: '看到 exotic，先说出「异国的」。',
      note: '先认词干 exot，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exotic.', chinese: '即使是初读者也能看出，这个结果是异国的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exotic.s1', en: 'They wanted a exotic answer, not a long speech.', zh: '他们要一个异国的的答复，不要长篇发言。', structure: 'exotic / 表示 / 异国的', grammar: 'adjective，围绕「异国的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exotic.', right: 'The news is exotic.', reason: 'news 作主语时动词用单数。', rule: '先确定 exotic 是adjective，再套「异国的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exotic.q1', senseId: 'exotic.s1', errorType: 'meaning', type: '词义选择', prompt: '「exotic」在本条的核心意思是：', options: ['异国的', '完全相反的意思', '一种古代钱币'], answer: '异国的', explain: 'exotic：异国的。' },
      { id: 'exotic.q2', senseId: 'exotic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exotic?', options: ['异国的', 'a kind of ancient coin', 'the past tense of be'], answer: '异国的', explain: '对的是「异国的」。' },
      { id: 'exotic.q3', senseId: 'exotic.s1', errorType: 'grammar', type: '词义选择', prompt: 'exotic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exotic.q4', senseId: 'exotic.s1', errorType: 'meaning', type: '词源', prompt: '记 exotic 时，哪句更稳妥？', options: ['先锁住「异国的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「异国的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['异国的'] },
  });

  D('expand', {
    etymology: {
      origin: '现代英语常用词「expand」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expand', gloss: '扩大' },
      suffix: null,
      history: [
        { label: 'expand', text: '现代英语常用词「expand」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：扩大。' },
      ],
      formationLogic: '核心义：扩大。',
      mnemonic: '看到 expand，先说出「扩大」。',
      note: '核心义：扩大。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expand before the office closed.', chinese: '他们同意在办公室关门前做这件事：扩大。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expand.s1', en: 'The deadline forced the team to expand that afternoon.', zh: '截止日期逼着小组在那天下午扩大。', structure: 'expand / 表示 / 扩大', grammar: 'verb，围绕「扩大」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expanded it yesterday without checking the real past form.', right: 'Check the past form of "expand" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expand 是verb，再套「扩大」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expand.q1', senseId: 'expand.s1', errorType: 'meaning', type: '词义选择', prompt: '「expand」在本条的核心意思是：', options: ['扩大', '完全相反的意思', '一种古代钱币'], answer: '扩大', explain: 'expand：扩大。' },
      { id: 'expand.q2', senseId: 'expand.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expand?', options: ['扩大', 'a kind of ancient coin', 'the past tense of be'], answer: '扩大', explain: '对的是「扩大」。' },
      { id: 'expand.q3', senseId: 'expand.s1', errorType: 'grammar', type: '词义选择', prompt: 'expand 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expand.q4', senseId: 'expand.s1', errorType: 'meaning', type: '词源', prompt: '记 expand 时，哪句更稳妥？', options: ['先锁住「扩大」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扩大」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扩大'] },
  });

  D('expanse', {
    etymology: {
      origin: '现代英语常用词「expanse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expanse', gloss: '宽阔' },
      suffix: null,
      history: [
        { label: 'expanse', text: '现代英语常用词「expanse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：宽阔。' },
      ],
      formationLogic: '核心义：宽阔。',
      mnemonic: '看到 expanse，先说出「宽阔」。',
      note: '核心义：宽阔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expanse.', chinese: '这一章反复回到同一个点：宽阔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expanse.s1', en: 'Without that expanse, the next paragraph is hard to follow.', zh: '没有这个宽阔，下一段会很难读。', structure: 'expanse / 表示 / 宽阔', grammar: 'noun，围绕「宽阔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expanse.', right: 'He gave me some advice about the expanse.', reason: 'advice 不可数。名词 expanse 的单复数按词典词形记。', rule: '先确定 expanse 是noun，再套「宽阔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expanse.q1', senseId: 'expanse.s1', errorType: 'meaning', type: '词义选择', prompt: '「expanse」在本条的核心意思是：', options: ['宽阔', '完全相反的意思', '一种古代钱币'], answer: '宽阔', explain: 'expanse：宽阔。' },
      { id: 'expanse.q2', senseId: 'expanse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expanse?', options: ['宽阔', 'a kind of ancient coin', 'the past tense of be'], answer: '宽阔', explain: '对的是「宽阔」。' },
      { id: 'expanse.q3', senseId: 'expanse.s1', errorType: 'grammar', type: '词义选择', prompt: 'expanse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expanse.q4', senseId: 'expanse.s1', errorType: 'meaning', type: '词源', prompt: '记 expanse 时，哪句更稳妥？', options: ['先锁住「宽阔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宽阔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宽阔'] },
  });

  D('expansion', {
    etymology: {
      origin: '英语派生：expan + -sion，词性转到「扩张」。',
      prefix: null,
      root: { text: 'expan', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expansion', text: '英语派生：expan + -sion，词性转到「扩张」。' },
        { label: '现在', text: '核心用法是：扩张。' },
      ],
      formationLogic: '先认词干 expan，再看词尾。',
      mnemonic: '看到 expansion，先说出「扩张」。',
      note: '先认词干 expan，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expansion.', chinese: '这一章反复回到同一个点：扩张。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expansion.s1', en: 'Without that expansion, the next paragraph is hard to follow.', zh: '没有这个扩张，下一段会很难读。', structure: 'expansion / 表示 / 扩张', grammar: 'noun，围绕「扩张」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expansion.', right: 'He gave me some advice about the expansion.', reason: 'advice 不可数。名词 expansion 的单复数按词典词形记。', rule: '先确定 expansion 是noun，再套「扩张」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expansion.q1', senseId: 'expansion.s1', errorType: 'meaning', type: '词义选择', prompt: '「expansion」在本条的核心意思是：', options: ['扩张', '完全相反的意思', '一种古代钱币'], answer: '扩张', explain: 'expansion：扩张。' },
      { id: 'expansion.q2', senseId: 'expansion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expansion?', options: ['扩张', 'a kind of ancient coin', 'the past tense of be'], answer: '扩张', explain: '对的是「扩张」。' },
      { id: 'expansion.q3', senseId: 'expansion.s1', errorType: 'grammar', type: '词义选择', prompt: 'expansion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expansion.q4', senseId: 'expansion.s1', errorType: 'meaning', type: '词源', prompt: '记 expansion 时，哪句更稳妥？', options: ['先锁住「扩张」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扩张」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扩张'] },
  });

  D('expect', {
    etymology: {
      origin: '现代英语常用词「expect」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expect', gloss: '期待' },
      suffix: null,
      history: [
        { label: 'expect', text: '现代英语常用词「expect」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：期待。' },
      ],
      formationLogic: '核心义：期待。',
      mnemonic: '看到 expect，先说出「期待」。',
      note: '核心义：期待。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expect before the office closed.', chinese: '他们同意在办公室关门前做这件事：期待。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expect.s1', en: 'The deadline forced the team to expect that afternoon.', zh: '截止日期逼着小组在那天下午期待。', structure: 'expect / 表示 / 期待', grammar: 'verb，围绕「期待」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expected it yesterday without checking the real past form.', right: 'Check the past form of "expect" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expect 是verb，再套「期待」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expect.q1', senseId: 'expect.s1', errorType: 'meaning', type: '词义选择', prompt: '「expect」在本条的核心意思是：', options: ['期待', '完全相反的意思', '一种古代钱币'], answer: '期待', explain: 'expect：期待。' },
      { id: 'expect.q2', senseId: 'expect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expect?', options: ['期待', 'a kind of ancient coin', 'the past tense of be'], answer: '期待', explain: '对的是「期待」。' },
      { id: 'expect.q3', senseId: 'expect.s1', errorType: 'grammar', type: '词义选择', prompt: 'expect 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expect.q4', senseId: 'expect.s1', errorType: 'meaning', type: '词源', prompt: '记 expect 时，哪句更稳妥？', options: ['先锁住「期待」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「期待」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['期待'] },
  });

  D('expectation', {
    etymology: {
      origin: '英语派生：expecta + -tion，词性转到「期待」。',
      prefix: null,
      root: { text: 'expecta', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expectation', text: '英语派生：expecta + -tion，词性转到「期待」。' },
        { label: '现在', text: '核心用法是：期待。' },
      ],
      formationLogic: '先认词干 expecta，再看词尾。',
      mnemonic: '看到 expectation，先说出「期待」。',
      note: '先认词干 expecta，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expectation.', chinese: '这一章反复回到同一个点：期待。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expectation.s1', en: 'Without that expectation, the next paragraph is hard to follow.', zh: '没有这个期待，下一段会很难读。', structure: 'expectation / 表示 / 期待', grammar: 'noun，围绕「期待」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expectation.', right: 'He gave me some advice about the expectation.', reason: 'advice 不可数。名词 expectation 的单复数按词典词形记。', rule: '先确定 expectation 是noun，再套「期待」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expectation.q1', senseId: 'expectation.s1', errorType: 'meaning', type: '词义选择', prompt: '「expectation」在本条的核心意思是：', options: ['期待', '完全相反的意思', '一种古代钱币'], answer: '期待', explain: 'expectation：期待。' },
      { id: 'expectation.q2', senseId: 'expectation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expectation?', options: ['期待', 'a kind of ancient coin', 'the past tense of be'], answer: '期待', explain: '对的是「期待」。' },
      { id: 'expectation.q3', senseId: 'expectation.s1', errorType: 'grammar', type: '词义选择', prompt: 'expectation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expectation.q4', senseId: 'expectation.s1', errorType: 'meaning', type: '词源', prompt: '记 expectation 时，哪句更稳妥？', options: ['先锁住「期待」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「期待」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['期待'] },
  });

  D('expected', {
    etymology: {
      origin: '现代英语常用词「expected」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expected', gloss: '预期的' },
      suffix: null,
      history: [
        { label: 'expected', text: '现代英语常用词「expected」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：预期的。' },
      ],
      formationLogic: '核心义：预期的。',
      mnemonic: '看到 expected，先说出「预期的」。',
      note: '核心义：预期的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was expected.', chinese: '即使是初读者也能看出，这个结果是预期的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expected.s1', en: 'They wanted a expected answer, not a long speech.', zh: '他们要一个预期的的答复，不要长篇发言。', structure: 'expected / 表示 / 预期的', grammar: 'adjective，围绕「预期的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are expected.', right: 'The news is expected.', reason: 'news 作主语时动词用单数。', rule: '先确定 expected 是adjective，再套「预期的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expected.q1', senseId: 'expected.s1', errorType: 'meaning', type: '词义选择', prompt: '「expected」在本条的核心意思是：', options: ['预期的', '完全相反的意思', '一种古代钱币'], answer: '预期的', explain: 'expected：预期的。' },
      { id: 'expected.q2', senseId: 'expected.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expected?', options: ['预期的', 'a kind of ancient coin', 'the past tense of be'], answer: '预期的', explain: '对的是「预期的」。' },
      { id: 'expected.q3', senseId: 'expected.s1', errorType: 'grammar', type: '词义选择', prompt: 'expected 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'expected.q4', senseId: 'expected.s1', errorType: 'meaning', type: '词源', prompt: '记 expected 时，哪句更稳妥？', options: ['先锁住「预期的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「预期的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['预期的'] },
  });

  D('expecting', {
    etymology: {
      origin: '英语派生：expect + -ing，词性转到「怀孕的」。',
      prefix: null,
      root: { text: 'expect', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expecting', text: '英语派生：expect + -ing，词性转到「怀孕的」。' },
        { label: '现在', text: '核心用法是：怀孕的。' },
      ],
      formationLogic: '先认词干 expect，再看词尾。',
      mnemonic: '看到 expecting，先说出「怀孕的」。',
      note: '先认词干 expect，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was expecting.', chinese: '即使是初读者也能看出，这个结果是怀孕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expecting.s1', en: 'They wanted a expecting answer, not a long speech.', zh: '他们要一个怀孕的的答复，不要长篇发言。', structure: 'expecting / 表示 / 怀孕的', grammar: 'adjective，围绕「怀孕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are expecting.', right: 'The news is expecting.', reason: 'news 作主语时动词用单数。', rule: '先确定 expecting 是adjective，再套「怀孕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expecting.q1', senseId: 'expecting.s1', errorType: 'meaning', type: '词义选择', prompt: '「expecting」在本条的核心意思是：', options: ['怀孕的', '完全相反的意思', '一种古代钱币'], answer: '怀孕的', explain: 'expecting：怀孕的。' },
      { id: 'expecting.q2', senseId: 'expecting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expecting?', options: ['怀孕的', 'a kind of ancient coin', 'the past tense of be'], answer: '怀孕的', explain: '对的是「怀孕的」。' },
      { id: 'expecting.q3', senseId: 'expecting.s1', errorType: 'grammar', type: '词义选择', prompt: 'expecting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'expecting.q4', senseId: 'expecting.s1', errorType: 'meaning', type: '词源', prompt: '记 expecting 时，哪句更稳妥？', options: ['先锁住「怀孕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怀孕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怀孕的'] },
  });

  D('expectorate', {
    etymology: {
      origin: '现代英语常用词「expectorate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expectorate', gloss: '咳出（痰）' },
      suffix: null,
      history: [
        { label: 'expectorate', text: '现代英语常用词「expectorate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：咳出（痰）。' },
      ],
      formationLogic: '核心义：咳出（痰）。',
      mnemonic: '看到 expectorate，先说出「咳出（痰）」。',
      note: '核心义：咳出（痰）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expectorate before the office closed.', chinese: '他们同意在办公室关门前做这件事：咳出（痰）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expectorate.s1', en: 'The deadline forced the team to expectorate that afternoon.', zh: '截止日期逼着小组在那天下午咳出（痰）。', structure: 'expectorate / 表示 / 咳出（痰）', grammar: 'verb，围绕「咳出（痰）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expectorateed it yesterday without checking the real past form.', right: 'Check the past form of "expectorate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expectorate 是verb，再套「咳出（痰）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expectorate.q1', senseId: 'expectorate.s1', errorType: 'meaning', type: '词义选择', prompt: '「expectorate」在本条的核心意思是：', options: ['咳出（痰）', '完全相反的意思', '一种古代钱币'], answer: '咳出（痰）', explain: 'expectorate：咳出（痰）。' },
      { id: 'expectorate.q2', senseId: 'expectorate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expectorate?', options: ['咳出（痰）', 'a kind of ancient coin', 'the past tense of be'], answer: '咳出（痰）', explain: '对的是「咳出（痰）」。' },
      { id: 'expectorate.q3', senseId: 'expectorate.s1', errorType: 'grammar', type: '词义选择', prompt: 'expectorate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expectorate.q4', senseId: 'expectorate.s1', errorType: 'meaning', type: '词源', prompt: '记 expectorate 时，哪句更稳妥？', options: ['先锁住「咳出（痰）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咳出（痰）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咳出（痰）'] },
  });

  D('expedition', {
    etymology: {
      origin: '英语派生：expedi + -tion，词性转到「远征」。',
      prefix: null,
      root: { text: 'expedi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expedition', text: '英语派生：expedi + -tion，词性转到「远征」。' },
        { label: '现在', text: '核心用法是：远征。' },
      ],
      formationLogic: '先认词干 expedi，再看词尾。',
      mnemonic: '看到 expedition，先说出「远征」。',
      note: '先认词干 expedi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expedition.', chinese: '这一章反复回到同一个点：远征。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expedition.s1', en: 'Without that expedition, the next paragraph is hard to follow.', zh: '没有这个远征，下一段会很难读。', structure: 'expedition / 表示 / 远征', grammar: 'noun，围绕「远征」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expedition.', right: 'He gave me some advice about the expedition.', reason: 'advice 不可数。名词 expedition 的单复数按词典词形记。', rule: '先确定 expedition 是noun，再套「远征」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expedition.q1', senseId: 'expedition.s1', errorType: 'meaning', type: '词义选择', prompt: '「expedition」在本条的核心意思是：', options: ['远征', '完全相反的意思', '一种古代钱币'], answer: '远征', explain: 'expedition：远征。' },
      { id: 'expedition.q2', senseId: 'expedition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expedition?', options: ['远征', 'a kind of ancient coin', 'the past tense of be'], answer: '远征', explain: '对的是「远征」。' },
      { id: 'expedition.q3', senseId: 'expedition.s1', errorType: 'grammar', type: '词义选择', prompt: 'expedition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expedition.q4', senseId: 'expedition.s1', errorType: 'meaning', type: '词源', prompt: '记 expedition 时，哪句更稳妥？', options: ['先锁住「远征」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「远征」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['远征'] },
  });

  D('expel', {
    etymology: {
      origin: '现代英语常用词「expel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expel', gloss: '驱逐' },
      suffix: null,
      history: [
        { label: 'expel', text: '现代英语常用词「expel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：驱逐。' },
      ],
      formationLogic: '核心义：驱逐。',
      mnemonic: '看到 expel，先说出「驱逐」。',
      note: '核心义：驱逐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expel before the office closed.', chinese: '他们同意在办公室关门前做这件事：驱逐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expel.s1', en: 'The deadline forced the team to expel that afternoon.', zh: '截止日期逼着小组在那天下午驱逐。', structure: 'expel / 表示 / 驱逐', grammar: 'verb，围绕「驱逐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expeled it yesterday without checking the real past form.', right: 'Check the past form of "expel" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expel 是verb，再套「驱逐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expel.q1', senseId: 'expel.s1', errorType: 'meaning', type: '词义选择', prompt: '「expel」在本条的核心意思是：', options: ['驱逐', '完全相反的意思', '一种古代钱币'], answer: '驱逐', explain: 'expel：驱逐。' },
      { id: 'expel.q2', senseId: 'expel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expel?', options: ['驱逐', 'a kind of ancient coin', 'the past tense of be'], answer: '驱逐', explain: '对的是「驱逐」。' },
      { id: 'expel.q3', senseId: 'expel.s1', errorType: 'grammar', type: '词义选择', prompt: 'expel 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expel.q4', senseId: 'expel.s1', errorType: 'meaning', type: '词源', prompt: '记 expel 时，哪句更稳妥？', options: ['先锁住「驱逐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驱逐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驱逐'] },
  });

  D('expend', {
    etymology: {
      origin: '现代英语常用词「expend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expend', gloss: '花费' },
      suffix: null,
      history: [
        { label: 'expend', text: '现代英语常用词「expend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：花费。' },
      ],
      formationLogic: '核心义：花费。',
      mnemonic: '看到 expend，先说出「花费」。',
      note: '核心义：花费。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expend before the office closed.', chinese: '他们同意在办公室关门前做这件事：花费。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expend.s1', en: 'The deadline forced the team to expend that afternoon.', zh: '截止日期逼着小组在那天下午花费。', structure: 'expend / 表示 / 花费', grammar: 'verb，围绕「花费」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expended it yesterday without checking the real past form.', right: 'Check the past form of "expend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expend 是verb，再套「花费」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expend.q1', senseId: 'expend.s1', errorType: 'meaning', type: '词义选择', prompt: '「expend」在本条的核心意思是：', options: ['花费', '完全相反的意思', '一种古代钱币'], answer: '花费', explain: 'expend：花费。' },
      { id: 'expend.q2', senseId: 'expend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expend?', options: ['花费', 'a kind of ancient coin', 'the past tense of be'], answer: '花费', explain: '对的是「花费」。' },
      { id: 'expend.q3', senseId: 'expend.s1', errorType: 'grammar', type: '词义选择', prompt: 'expend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expend.q4', senseId: 'expend.s1', errorType: 'meaning', type: '词源', prompt: '记 expend 时，哪句更稳妥？', options: ['先锁住「花费」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「花费」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['花费'] },
  });

  D('expenditure', {
    etymology: {
      origin: '现代英语常用词「expenditure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expenditure', gloss: '支出' },
      suffix: null,
      history: [
        { label: 'expenditure', text: '现代英语常用词「expenditure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：支出。' },
      ],
      formationLogic: '核心义：支出。',
      mnemonic: '看到 expenditure，先说出「支出」。',
      note: '核心义：支出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expenditure.', chinese: '这一章反复回到同一个点：支出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expenditure.s1', en: 'Without that expenditure, the next paragraph is hard to follow.', zh: '没有这个支出，下一段会很难读。', structure: 'expenditure / 表示 / 支出', grammar: 'noun，围绕「支出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expenditure.', right: 'He gave me some advice about the expenditure.', reason: 'advice 不可数。名词 expenditure 的单复数按词典词形记。', rule: '先确定 expenditure 是noun，再套「支出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expenditure.q1', senseId: 'expenditure.s1', errorType: 'meaning', type: '词义选择', prompt: '「expenditure」在本条的核心意思是：', options: ['支出', '完全相反的意思', '一种古代钱币'], answer: '支出', explain: 'expenditure：支出。' },
      { id: 'expenditure.q2', senseId: 'expenditure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expenditure?', options: ['支出', 'a kind of ancient coin', 'the past tense of be'], answer: '支出', explain: '对的是「支出」。' },
      { id: 'expenditure.q3', senseId: 'expenditure.s1', errorType: 'grammar', type: '词义选择', prompt: 'expenditure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expenditure.q4', senseId: 'expenditure.s1', errorType: 'meaning', type: '词源', prompt: '记 expenditure 时，哪句更稳妥？', options: ['先锁住「支出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「支出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['支出'] },
  });

  D('expense', {
    etymology: {
      origin: '现代英语常用词「expense」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expense', gloss: '费用' },
      suffix: null,
      history: [
        { label: 'expense', text: '现代英语常用词「expense」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：费用。' },
      ],
      formationLogic: '核心义：费用。',
      mnemonic: '看到 expense，先说出「费用」。',
      note: '核心义：费用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expense.', chinese: '这一章反复回到同一个点：费用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expense.s1', en: 'Without that expense, the next paragraph is hard to follow.', zh: '没有这个费用，下一段会很难读。', structure: 'expense / 表示 / 费用', grammar: 'noun，围绕「费用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expense.', right: 'He gave me some advice about the expense.', reason: 'advice 不可数。名词 expense 的单复数按词典词形记。', rule: '先确定 expense 是noun，再套「费用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expense.q1', senseId: 'expense.s1', errorType: 'meaning', type: '词义选择', prompt: '「expense」在本条的核心意思是：', options: ['费用', '完全相反的意思', '一种古代钱币'], answer: '费用', explain: 'expense：费用。' },
      { id: 'expense.q2', senseId: 'expense.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expense?', options: ['费用', 'a kind of ancient coin', 'the past tense of be'], answer: '费用', explain: '对的是「费用」。' },
      { id: 'expense.q3', senseId: 'expense.s1', errorType: 'grammar', type: '词义选择', prompt: 'expense 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expense.q4', senseId: 'expense.s1', errorType: 'meaning', type: '词源', prompt: '记 expense 时，哪句更稳妥？', options: ['先锁住「费用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「费用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['费用'] },
  });

  D('expenses', {
    etymology: {
      origin: '现代英语常用词「expenses」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expenses', gloss: '开销' },
      suffix: null,
      history: [
        { label: 'expenses', text: '现代英语常用词「expenses」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：开销。' },
      ],
      formationLogic: '核心义：开销。',
      mnemonic: '看到 expenses，先说出「开销」。',
      note: '核心义：开销。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expenses.', chinese: '这一章反复回到同一个点：开销。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expenses.s1', en: 'Without that expenses, the next paragraph is hard to follow.', zh: '没有这个开销，下一段会很难读。', structure: 'expenses / 表示 / 开销', grammar: 'noun，围绕「开销」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expenses.', right: 'He gave me some advice about the expenses.', reason: 'advice 不可数。名词 expenses 的单复数按词典词形记。', rule: '先确定 expenses 是noun，再套「开销」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expenses.q1', senseId: 'expenses.s1', errorType: 'meaning', type: '词义选择', prompt: '「expenses」在本条的核心意思是：', options: ['开销', '完全相反的意思', '一种古代钱币'], answer: '开销', explain: 'expenses：开销。' },
      { id: 'expenses.q2', senseId: 'expenses.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expenses?', options: ['开销', 'a kind of ancient coin', 'the past tense of be'], answer: '开销', explain: '对的是「开销」。' },
      { id: 'expenses.q3', senseId: 'expenses.s1', errorType: 'grammar', type: '词义选择', prompt: 'expenses 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expenses.q4', senseId: 'expenses.s1', errorType: 'meaning', type: '词源', prompt: '记 expenses 时，哪句更稳妥？', options: ['先锁住「开销」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「开销」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['开销'] },
  });

  D('expensive', {
    etymology: {
      origin: '英语派生：expens + -ive，词性转到「昂贵的」。',
      prefix: null,
      root: { text: 'expens', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expensive', text: '英语派生：expens + -ive，词性转到「昂贵的」。' },
        { label: '现在', text: '核心用法是：昂贵的。' },
      ],
      formationLogic: '先认词干 expens，再看词尾。',
      mnemonic: '看到 expensive，先说出「昂贵的」。',
      note: '先认词干 expens，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was expensive.', chinese: '即使是初读者也能看出，这个结果是昂贵的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expensive.s1', en: 'They wanted a expensive answer, not a long speech.', zh: '他们要一个昂贵的的答复，不要长篇发言。', structure: 'expensive / 表示 / 昂贵的', grammar: 'adjective，围绕「昂贵的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are expensive.', right: 'The news is expensive.', reason: 'news 作主语时动词用单数。', rule: '先确定 expensive 是adjective，再套「昂贵的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expensive.q1', senseId: 'expensive.s1', errorType: 'meaning', type: '词义选择', prompt: '「expensive」在本条的核心意思是：', options: ['昂贵的', '完全相反的意思', '一种古代钱币'], answer: '昂贵的', explain: 'expensive：昂贵的。' },
      { id: 'expensive.q2', senseId: 'expensive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expensive?', options: ['昂贵的', 'a kind of ancient coin', 'the past tense of be'], answer: '昂贵的', explain: '对的是「昂贵的」。' },
      { id: 'expensive.q3', senseId: 'expensive.s1', errorType: 'grammar', type: '词义选择', prompt: 'expensive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'expensive.q4', senseId: 'expensive.s1', errorType: 'meaning', type: '词源', prompt: '记 expensive 时，哪句更稳妥？', options: ['先锁住「昂贵的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「昂贵的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['昂贵的'] },
  });

  D('experience', {
    etymology: {
      origin: '英语派生：experi + -ence，词性转到「经验」。',
      prefix: null,
      root: { text: 'experi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'experience', text: '英语派生：experi + -ence，词性转到「经验」。' },
        { label: '现在', text: '核心用法是：经验。' },
      ],
      formationLogic: '先认词干 experi，再看词尾。',
      mnemonic: '看到 experience，先说出「经验」。',
      note: '先认词干 experi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one experience.', chinese: '这一章反复回到同一个点：经验。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'experience.s1', en: 'Without that experience, the next paragraph is hard to follow.', zh: '没有这个经验，下一段会很难读。', structure: 'experience / 表示 / 经验', grammar: 'noun，围绕「经验」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the experience.', right: 'He gave me some advice about the experience.', reason: 'advice 不可数。名词 experience 的单复数按词典词形记。', rule: '先确定 experience 是noun，再套「经验」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'experience.q1', senseId: 'experience.s1', errorType: 'meaning', type: '词义选择', prompt: '「experience」在本条的核心意思是：', options: ['经验', '完全相反的意思', '一种古代钱币'], answer: '经验', explain: 'experience：经验。' },
      { id: 'experience.q2', senseId: 'experience.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches experience?', options: ['经验', 'a kind of ancient coin', 'the past tense of be'], answer: '经验', explain: '对的是「经验」。' },
      { id: 'experience.q3', senseId: 'experience.s1', errorType: 'grammar', type: '词义选择', prompt: 'experience 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'experience.q4', senseId: 'experience.s1', errorType: 'meaning', type: '词源', prompt: '记 experience 时，哪句更稳妥？', options: ['先锁住「经验」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经验」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经验'] },
  });

  D('experienced', {
    etymology: {
      origin: '现代英语常用词「experienced」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'experienced', gloss: '有经验的' },
      suffix: null,
      history: [
        { label: 'experienced', text: '现代英语常用词「experienced」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：有经验的。' },
      ],
      formationLogic: '核心义：有经验的。',
      mnemonic: '看到 experienced，先说出「有经验的」。',
      note: '核心义：有经验的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was experienced.', chinese: '即使是初读者也能看出，这个结果是有经验的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'experienced.s1', en: 'They wanted a experienced answer, not a long speech.', zh: '他们要一个有经验的的答复，不要长篇发言。', structure: 'experienced / 表示 / 有经验的', grammar: 'adjective，围绕「有经验的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are experienced.', right: 'The news is experienced.', reason: 'news 作主语时动词用单数。', rule: '先确定 experienced 是adjective，再套「有经验的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'experienced.q1', senseId: 'experienced.s1', errorType: 'meaning', type: '词义选择', prompt: '「experienced」在本条的核心意思是：', options: ['有经验的', '完全相反的意思', '一种古代钱币'], answer: '有经验的', explain: 'experienced：有经验的。' },
      { id: 'experienced.q2', senseId: 'experienced.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches experienced?', options: ['有经验的', 'a kind of ancient coin', 'the past tense of be'], answer: '有经验的', explain: '对的是「有经验的」。' },
      { id: 'experienced.q3', senseId: 'experienced.s1', errorType: 'grammar', type: '词义选择', prompt: 'experienced 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'experienced.q4', senseId: 'experienced.s1', errorType: 'meaning', type: '词源', prompt: '记 experienced 时，哪句更稳妥？', options: ['先锁住「有经验的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有经验的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有经验的'] },
  });

  D('experiment', {
    etymology: {
      origin: '英语派生：experi + -ment，词性转到「实验」。',
      prefix: null,
      root: { text: 'experi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'experiment', text: '英语派生：experi + -ment，词性转到「实验」。' },
        { label: '现在', text: '核心用法是：实验。' },
      ],
      formationLogic: '先认词干 experi，再看词尾。',
      mnemonic: '看到 experiment，先说出「实验」。',
      note: '先认词干 experi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one experiment.', chinese: '这一章反复回到同一个点：实验。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'experiment.s1', en: 'Without that experiment, the next paragraph is hard to follow.', zh: '没有这个实验，下一段会很难读。', structure: 'experiment / 表示 / 实验', grammar: 'noun，围绕「实验」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the experiment.', right: 'He gave me some advice about the experiment.', reason: 'advice 不可数。名词 experiment 的单复数按词典词形记。', rule: '先确定 experiment 是noun，再套「实验」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'experiment.q1', senseId: 'experiment.s1', errorType: 'meaning', type: '词义选择', prompt: '「experiment」在本条的核心意思是：', options: ['实验', '完全相反的意思', '一种古代钱币'], answer: '实验', explain: 'experiment：实验。' },
      { id: 'experiment.q2', senseId: 'experiment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches experiment?', options: ['实验', 'a kind of ancient coin', 'the past tense of be'], answer: '实验', explain: '对的是「实验」。' },
      { id: 'experiment.q3', senseId: 'experiment.s1', errorType: 'grammar', type: '词义选择', prompt: 'experiment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'experiment.q4', senseId: 'experiment.s1', errorType: 'meaning', type: '词源', prompt: '记 experiment 时，哪句更稳妥？', options: ['先锁住「实验」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「实验」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['实验'] },
  });

  D('experimental', {
    etymology: {
      origin: '英语派生：experiment + -al，词性转到「实验的」。',
      prefix: null,
      root: { text: 'experiment', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'experimental', text: '英语派生：experiment + -al，词性转到「实验的」。' },
        { label: '现在', text: '核心用法是：实验的。' },
      ],
      formationLogic: '先认词干 experiment，再看词尾。',
      mnemonic: '看到 experimental，先说出「实验的」。',
      note: '先认词干 experiment，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was experimental.', chinese: '即使是初读者也能看出，这个结果是实验的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'experimental.s1', en: 'They wanted a experimental answer, not a long speech.', zh: '他们要一个实验的的答复，不要长篇发言。', structure: 'experimental / 表示 / 实验的', grammar: 'adjective，围绕「实验的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are experimental.', right: 'The news is experimental.', reason: 'news 作主语时动词用单数。', rule: '先确定 experimental 是adjective，再套「实验的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'experimental.q1', senseId: 'experimental.s1', errorType: 'meaning', type: '词义选择', prompt: '「experimental」在本条的核心意思是：', options: ['实验的', '完全相反的意思', '一种古代钱币'], answer: '实验的', explain: 'experimental：实验的。' },
      { id: 'experimental.q2', senseId: 'experimental.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches experimental?', options: ['实验的', 'a kind of ancient coin', 'the past tense of be'], answer: '实验的', explain: '对的是「实验的」。' },
      { id: 'experimental.q3', senseId: 'experimental.s1', errorType: 'grammar', type: '词义选择', prompt: 'experimental 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'experimental.q4', senseId: 'experimental.s1', errorType: 'meaning', type: '词源', prompt: '记 experimental 时，哪句更稳妥？', options: ['先锁住「实验的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「实验的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['实验的'] },
  });

  D('expert', {
    etymology: {
      origin: '现代英语常用词「expert」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expert', gloss: '专家' },
      suffix: null,
      history: [
        { label: 'expert', text: '现代英语常用词「expert」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：专家。' },
      ],
      formationLogic: '核心义：专家。',
      mnemonic: '看到 expert，先说出「专家」。',
      note: '核心义：专家。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expert.', chinese: '这一章反复回到同一个点：专家。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expert.s1', en: 'Without that expert, the next paragraph is hard to follow.', zh: '没有这个专家，下一段会很难读。', structure: 'expert / 表示 / 专家', grammar: 'noun，围绕「专家」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expert.', right: 'He gave me some advice about the expert.', reason: 'advice 不可数。名词 expert 的单复数按词典词形记。', rule: '先确定 expert 是noun，再套「专家」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expert.q1', senseId: 'expert.s1', errorType: 'meaning', type: '词义选择', prompt: '「expert」在本条的核心意思是：', options: ['专家', '完全相反的意思', '一种古代钱币'], answer: '专家', explain: 'expert：专家。' },
      { id: 'expert.q2', senseId: 'expert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expert?', options: ['专家', 'a kind of ancient coin', 'the past tense of be'], answer: '专家', explain: '对的是「专家」。' },
      { id: 'expert.q3', senseId: 'expert.s1', errorType: 'grammar', type: '词义选择', prompt: 'expert 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expert.q4', senseId: 'expert.s1', errorType: 'meaning', type: '词源', prompt: '记 expert 时，哪句更稳妥？', options: ['先锁住「专家」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「专家」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['专家'] },
  });

  D('expertise', {
    etymology: {
      origin: '现代英语常用词「expertise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expertise', gloss: '专业知识' },
      suffix: null,
      history: [
        { label: 'expertise', text: '现代英语常用词「expertise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：专业知识。' },
      ],
      formationLogic: '核心义：专业知识。',
      mnemonic: '看到 expertise，先说出「专业知识」。',
      note: '核心义：专业知识。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expertise.', chinese: '这一章反复回到同一个点：专业知识。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expertise.s1', en: 'Without that expertise, the next paragraph is hard to follow.', zh: '没有这个专业知识，下一段会很难读。', structure: 'expertise / 表示 / 专业知识', grammar: 'noun，围绕「专业知识」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expertise.', right: 'He gave me some advice about the expertise.', reason: 'advice 不可数。名词 expertise 的单复数按词典词形记。', rule: '先确定 expertise 是noun，再套「专业知识」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expertise.q1', senseId: 'expertise.s1', errorType: 'meaning', type: '词义选择', prompt: '「expertise」在本条的核心意思是：', options: ['专业知识', '完全相反的意思', '一种古代钱币'], answer: '专业知识', explain: 'expertise：专业知识。' },
      { id: 'expertise.q2', senseId: 'expertise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expertise?', options: ['专业知识', 'a kind of ancient coin', 'the past tense of be'], answer: '专业知识', explain: '对的是「专业知识」。' },
      { id: 'expertise.q3', senseId: 'expertise.s1', errorType: 'grammar', type: '词义选择', prompt: 'expertise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expertise.q4', senseId: 'expertise.s1', errorType: 'meaning', type: '词源', prompt: '记 expertise 时，哪句更稳妥？', options: ['先锁住「专业知识」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「专业知识」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['专业知识'] },
  });

  D('expire', {
    etymology: {
      origin: '现代英语常用词「expire」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expire', gloss: '到期' },
      suffix: null,
      history: [
        { label: 'expire', text: '现代英语常用词「expire」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：到期。' },
      ],
      formationLogic: '核心义：到期。',
      mnemonic: '看到 expire，先说出「到期」。',
      note: '核心义：到期。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expire before the office closed.', chinese: '他们同意在办公室关门前做这件事：到期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expire.s1', en: 'The deadline forced the team to expire that afternoon.', zh: '截止日期逼着小组在那天下午到期。', structure: 'expire / 表示 / 到期', grammar: 'verb，围绕「到期」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expireed it yesterday without checking the real past form.', right: 'Check the past form of "expire" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expire 是verb，再套「到期」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expire.q1', senseId: 'expire.s1', errorType: 'meaning', type: '词义选择', prompt: '「expire」在本条的核心意思是：', options: ['到期', '完全相反的意思', '一种古代钱币'], answer: '到期', explain: 'expire：到期。' },
      { id: 'expire.q2', senseId: 'expire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expire?', options: ['到期', 'a kind of ancient coin', 'the past tense of be'], answer: '到期', explain: '对的是「到期」。' },
      { id: 'expire.q3', senseId: 'expire.s1', errorType: 'grammar', type: '词义选择', prompt: 'expire 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expire.q4', senseId: 'expire.s1', errorType: 'meaning', type: '词源', prompt: '记 expire 时，哪句更稳妥？', options: ['先锁住「到期」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「到期」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['到期'] },
  });

  D('explain', {
    etymology: {
      origin: '现代英语常用词「explain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'explain', gloss: '解释' },
      suffix: null,
      history: [
        { label: 'explain', text: '现代英语常用词「explain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解释。' },
      ],
      formationLogic: '核心义：解释。',
      mnemonic: '看到 explain，先说出「解释」。',
      note: '核心义：解释。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to explain before the office closed.', chinese: '他们同意在办公室关门前做这件事：解释。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explain.s1', en: 'The deadline forced the team to explain that afternoon.', zh: '截止日期逼着小组在那天下午解释。', structure: 'explain / 表示 / 解释', grammar: 'verb，围绕「解释」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She explained it yesterday without checking the real past form.', right: 'Check the past form of "explain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 explain 是verb，再套「解释」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explain.q1', senseId: 'explain.s1', errorType: 'meaning', type: '词义选择', prompt: '「explain」在本条的核心意思是：', options: ['解释', '完全相反的意思', '一种古代钱币'], answer: '解释', explain: 'explain：解释。' },
      { id: 'explain.q2', senseId: 'explain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explain?', options: ['解释', 'a kind of ancient coin', 'the past tense of be'], answer: '解释', explain: '对的是「解释」。' },
      { id: 'explain.q3', senseId: 'explain.s1', errorType: 'grammar', type: '词义选择', prompt: 'explain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'explain.q4', senseId: 'explain.s1', errorType: 'meaning', type: '词源', prompt: '记 explain 时，哪句更稳妥？', options: ['先锁住「解释」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解释」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解释'] },
  });

  D('explanation', {
    etymology: {
      origin: '英语派生：explana + -tion，词性转到「解释」。',
      prefix: null,
      root: { text: 'explana', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'explanation', text: '英语派生：explana + -tion，词性转到「解释」。' },
        { label: '现在', text: '核心用法是：解释。' },
      ],
      formationLogic: '先认词干 explana，再看词尾。',
      mnemonic: '看到 explanation，先说出「解释」。',
      note: '先认词干 explana，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one explanation.', chinese: '这一章反复回到同一个点：解释。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explanation.s1', en: 'Without that explanation, the next paragraph is hard to follow.', zh: '没有这个解释，下一段会很难读。', structure: 'explanation / 表示 / 解释', grammar: 'noun，围绕「解释」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the explanation.', right: 'He gave me some advice about the explanation.', reason: 'advice 不可数。名词 explanation 的单复数按词典词形记。', rule: '先确定 explanation 是noun，再套「解释」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explanation.q1', senseId: 'explanation.s1', errorType: 'meaning', type: '词义选择', prompt: '「explanation」在本条的核心意思是：', options: ['解释', '完全相反的意思', '一种古代钱币'], answer: '解释', explain: 'explanation：解释。' },
      { id: 'explanation.q2', senseId: 'explanation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explanation?', options: ['解释', 'a kind of ancient coin', 'the past tense of be'], answer: '解释', explain: '对的是「解释」。' },
      { id: 'explanation.q3', senseId: 'explanation.s1', errorType: 'grammar', type: '词义选择', prompt: 'explanation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'explanation.q4', senseId: 'explanation.s1', errorType: 'meaning', type: '词源', prompt: '记 explanation 时，哪句更稳妥？', options: ['先锁住「解释」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解释」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解释'] },
  });

  D('explicit', {
    etymology: {
      origin: '现代英语常用词「explicit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'explicit', gloss: '明确的' },
      suffix: null,
      history: [
        { label: 'explicit', text: '现代英语常用词「explicit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：明确的。' },
      ],
      formationLogic: '核心义：明确的。',
      mnemonic: '看到 explicit，先说出「明确的」。',
      note: '核心义：明确的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was explicit.', chinese: '即使是初读者也能看出，这个结果是明确的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explicit.s1', en: 'They wanted a explicit answer, not a long speech.', zh: '他们要一个明确的的答复，不要长篇发言。', structure: 'explicit / 表示 / 明确的', grammar: 'adjective，围绕「明确的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are explicit.', right: 'The news is explicit.', reason: 'news 作主语时动词用单数。', rule: '先确定 explicit 是adjective，再套「明确的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explicit.q1', senseId: 'explicit.s1', errorType: 'meaning', type: '词义选择', prompt: '「explicit」在本条的核心意思是：', options: ['明确的', '完全相反的意思', '一种古代钱币'], answer: '明确的', explain: 'explicit：明确的。' },
      { id: 'explicit.q2', senseId: 'explicit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explicit?', options: ['明确的', 'a kind of ancient coin', 'the past tense of be'], answer: '明确的', explain: '对的是「明确的」。' },
      { id: 'explicit.q3', senseId: 'explicit.s1', errorType: 'grammar', type: '词义选择', prompt: 'explicit 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'explicit.q4', senseId: 'explicit.s1', errorType: 'meaning', type: '词源', prompt: '记 explicit 时，哪句更稳妥？', options: ['先锁住「明确的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「明确的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['明确的'] },
  });

  D('explode', {
    etymology: {
      origin: '现代英语常用词「explode」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'explode', gloss: '爆炸' },
      suffix: null,
      history: [
        { label: 'explode', text: '现代英语常用词「explode」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：爆炸。' },
      ],
      formationLogic: '核心义：爆炸。',
      mnemonic: '看到 explode，先说出「爆炸」。',
      note: '核心义：爆炸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to explode before the office closed.', chinese: '他们同意在办公室关门前做这件事：爆炸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explode.s1', en: 'The deadline forced the team to explode that afternoon.', zh: '截止日期逼着小组在那天下午爆炸。', structure: 'explode / 表示 / 爆炸', grammar: 'verb，围绕「爆炸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She explodeed it yesterday without checking the real past form.', right: 'Check the past form of "explode" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 explode 是verb，再套「爆炸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explode.q1', senseId: 'explode.s1', errorType: 'meaning', type: '词义选择', prompt: '「explode」在本条的核心意思是：', options: ['爆炸', '完全相反的意思', '一种古代钱币'], answer: '爆炸', explain: 'explode：爆炸。' },
      { id: 'explode.q2', senseId: 'explode.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explode?', options: ['爆炸', 'a kind of ancient coin', 'the past tense of be'], answer: '爆炸', explain: '对的是「爆炸」。' },
      { id: 'explode.q3', senseId: 'explode.s1', errorType: 'grammar', type: '词义选择', prompt: 'explode 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'explode.q4', senseId: 'explode.s1', errorType: 'meaning', type: '词源', prompt: '记 explode 时，哪句更稳妥？', options: ['先锁住「爆炸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爆炸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爆炸'] },
  });

  D('exploit', {
    etymology: {
      origin: '现代英语常用词「exploit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exploit', gloss: '利用' },
      suffix: null,
      history: [
        { label: 'exploit', text: '现代英语常用词「exploit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：利用。' },
      ],
      formationLogic: '核心义：利用。',
      mnemonic: '看到 exploit，先说出「利用」。',
      note: '核心义：利用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exploit before the office closed.', chinese: '他们同意在办公室关门前做这件事：利用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exploit.s1', en: 'The deadline forced the team to exploit that afternoon.', zh: '截止日期逼着小组在那天下午利用。', structure: 'exploit / 表示 / 利用', grammar: 'verb，围绕「利用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exploited it yesterday without checking the real past form.', right: 'Check the past form of "exploit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exploit 是verb，再套「利用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exploit.q1', senseId: 'exploit.s1', errorType: 'meaning', type: '词义选择', prompt: '「exploit」在本条的核心意思是：', options: ['利用', '完全相反的意思', '一种古代钱币'], answer: '利用', explain: 'exploit：利用。' },
      { id: 'exploit.q2', senseId: 'exploit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exploit?', options: ['利用', 'a kind of ancient coin', 'the past tense of be'], answer: '利用', explain: '对的是「利用」。' },
      { id: 'exploit.q3', senseId: 'exploit.s1', errorType: 'grammar', type: '词义选择', prompt: 'exploit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exploit.q4', senseId: 'exploit.s1', errorType: 'meaning', type: '词源', prompt: '记 exploit 时，哪句更稳妥？', options: ['先锁住「利用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「利用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['利用'] },
  });

  D('exploiter', {
    etymology: {
      origin: '英语派生：exploit + -er，词性转到「剥削者」。',
      prefix: null,
      root: { text: 'exploit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exploiter', text: '英语派生：exploit + -er，词性转到「剥削者」。' },
        { label: '现在', text: '核心用法是：剥削者。' },
      ],
      formationLogic: '先认词干 exploit，再看词尾。',
      mnemonic: '看到 exploiter，先说出「剥削者」。',
      note: '先认词干 exploit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exploiter.', chinese: '这一章反复回到同一个点：剥削者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exploiter.s1', en: 'Without that exploiter, the next paragraph is hard to follow.', zh: '没有这个剥削者，下一段会很难读。', structure: 'exploiter / 表示 / 剥削者', grammar: 'noun，围绕「剥削者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exploiter.', right: 'He gave me some advice about the exploiter.', reason: 'advice 不可数。名词 exploiter 的单复数按词典词形记。', rule: '先确定 exploiter 是noun，再套「剥削者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exploiter.q1', senseId: 'exploiter.s1', errorType: 'meaning', type: '词义选择', prompt: '「exploiter」在本条的核心意思是：', options: ['剥削者', '完全相反的意思', '一种古代钱币'], answer: '剥削者', explain: 'exploiter：剥削者。' },
      { id: 'exploiter.q2', senseId: 'exploiter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exploiter?', options: ['剥削者', 'a kind of ancient coin', 'the past tense of be'], answer: '剥削者', explain: '对的是「剥削者」。' },
      { id: 'exploiter.q3', senseId: 'exploiter.s1', errorType: 'grammar', type: '词义选择', prompt: 'exploiter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exploiter.q4', senseId: 'exploiter.s1', errorType: 'meaning', type: '词源', prompt: '记 exploiter 时，哪句更稳妥？', options: ['先锁住「剥削者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「剥削者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['剥削者'] },
  });

  D('explore', {
    etymology: {
      origin: '现代英语常用词「explore」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'explore', gloss: '探索' },
      suffix: null,
      history: [
        { label: 'explore', text: '现代英语常用词「explore」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：探索。' },
      ],
      formationLogic: '核心义：探索。',
      mnemonic: '看到 explore，先说出「探索」。',
      note: '核心义：探索。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to explore before the office closed.', chinese: '他们同意在办公室关门前做这件事：探索。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explore.s1', en: 'The deadline forced the team to explore that afternoon.', zh: '截止日期逼着小组在那天下午探索。', structure: 'explore / 表示 / 探索', grammar: 'verb，围绕「探索」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exploreed it yesterday without checking the real past form.', right: 'Check the past form of "explore" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 explore 是verb，再套「探索」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explore.q1', senseId: 'explore.s1', errorType: 'meaning', type: '词义选择', prompt: '「explore」在本条的核心意思是：', options: ['探索', '完全相反的意思', '一种古代钱币'], answer: '探索', explain: 'explore：探索。' },
      { id: 'explore.q2', senseId: 'explore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explore?', options: ['探索', 'a kind of ancient coin', 'the past tense of be'], answer: '探索', explain: '对的是「探索」。' },
      { id: 'explore.q3', senseId: 'explore.s1', errorType: 'grammar', type: '词义选择', prompt: 'explore 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'explore.q4', senseId: 'explore.s1', errorType: 'meaning', type: '词源', prompt: '记 explore 时，哪句更稳妥？', options: ['先锁住「探索」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「探索」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['探索'] },
  });

  D('explorer', {
    etymology: {
      origin: '英语派生：explor + -er，词性转到「探险家」。',
      prefix: null,
      root: { text: 'explor', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'explorer', text: '英语派生：explor + -er，词性转到「探险家」。' },
        { label: '现在', text: '核心用法是：探险家。' },
      ],
      formationLogic: '先认词干 explor，再看词尾。',
      mnemonic: '看到 explorer，先说出「探险家」。',
      note: '先认词干 explor，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one explorer.', chinese: '这一章反复回到同一个点：探险家。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explorer.s1', en: 'Without that explorer, the next paragraph is hard to follow.', zh: '没有这个探险家，下一段会很难读。', structure: 'explorer / 表示 / 探险家', grammar: 'noun，围绕「探险家」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the explorer.', right: 'He gave me some advice about the explorer.', reason: 'advice 不可数。名词 explorer 的单复数按词典词形记。', rule: '先确定 explorer 是noun，再套「探险家」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explorer.q1', senseId: 'explorer.s1', errorType: 'meaning', type: '词义选择', prompt: '「explorer」在本条的核心意思是：', options: ['探险家', '完全相反的意思', '一种古代钱币'], answer: '探险家', explain: 'explorer：探险家。' },
      { id: 'explorer.q2', senseId: 'explorer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explorer?', options: ['探险家', 'a kind of ancient coin', 'the past tense of be'], answer: '探险家', explain: '对的是「探险家」。' },
      { id: 'explorer.q3', senseId: 'explorer.s1', errorType: 'grammar', type: '词义选择', prompt: 'explorer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'explorer.q4', senseId: 'explorer.s1', errorType: 'meaning', type: '词源', prompt: '记 explorer 时，哪句更稳妥？', options: ['先锁住「探险家」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「探险家」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['探险家'] },
  });

  D('explosion', {
    etymology: {
      origin: '英语派生：explo + -sion，词性转到「爆炸」。',
      prefix: null,
      root: { text: 'explo', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'explosion', text: '英语派生：explo + -sion，词性转到「爆炸」。' },
        { label: '现在', text: '核心用法是：爆炸。' },
      ],
      formationLogic: '先认词干 explo，再看词尾。',
      mnemonic: '看到 explosion，先说出「爆炸」。',
      note: '先认词干 explo，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one explosion.', chinese: '这一章反复回到同一个点：爆炸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explosion.s1', en: 'Without that explosion, the next paragraph is hard to follow.', zh: '没有这个爆炸，下一段会很难读。', structure: 'explosion / 表示 / 爆炸', grammar: 'noun，围绕「爆炸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the explosion.', right: 'He gave me some advice about the explosion.', reason: 'advice 不可数。名词 explosion 的单复数按词典词形记。', rule: '先确定 explosion 是noun，再套「爆炸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explosion.q1', senseId: 'explosion.s1', errorType: 'meaning', type: '词义选择', prompt: '「explosion」在本条的核心意思是：', options: ['爆炸', '完全相反的意思', '一种古代钱币'], answer: '爆炸', explain: 'explosion：爆炸。' },
      { id: 'explosion.q2', senseId: 'explosion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explosion?', options: ['爆炸', 'a kind of ancient coin', 'the past tense of be'], answer: '爆炸', explain: '对的是「爆炸」。' },
      { id: 'explosion.q3', senseId: 'explosion.s1', errorType: 'grammar', type: '词义选择', prompt: 'explosion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'explosion.q4', senseId: 'explosion.s1', errorType: 'meaning', type: '词源', prompt: '记 explosion 时，哪句更稳妥？', options: ['先锁住「爆炸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爆炸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爆炸'] },
  });

  D('explosive', {
    etymology: {
      origin: '英语派生：explos + -ive，词性转到「爆炸的」。',
      prefix: null,
      root: { text: 'explos', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'explosive', text: '英语派生：explos + -ive，词性转到「爆炸的」。' },
        { label: '现在', text: '核心用法是：爆炸的。' },
      ],
      formationLogic: '先认词干 explos，再看词尾。',
      mnemonic: '看到 explosive，先说出「爆炸的」。',
      note: '先认词干 explos，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was explosive.', chinese: '即使是初读者也能看出，这个结果是爆炸的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'explosive.s1', en: 'They wanted a explosive answer, not a long speech.', zh: '他们要一个爆炸的的答复，不要长篇发言。', structure: 'explosive / 表示 / 爆炸的', grammar: 'adjective，围绕「爆炸的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are explosive.', right: 'The news is explosive.', reason: 'news 作主语时动词用单数。', rule: '先确定 explosive 是adjective，再套「爆炸的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'explosive.q1', senseId: 'explosive.s1', errorType: 'meaning', type: '词义选择', prompt: '「explosive」在本条的核心意思是：', options: ['爆炸的', '完全相反的意思', '一种古代钱币'], answer: '爆炸的', explain: 'explosive：爆炸的。' },
      { id: 'explosive.q2', senseId: 'explosive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches explosive?', options: ['爆炸的', 'a kind of ancient coin', 'the past tense of be'], answer: '爆炸的', explain: '对的是「爆炸的」。' },
      { id: 'explosive.q3', senseId: 'explosive.s1', errorType: 'grammar', type: '词义选择', prompt: 'explosive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'explosive.q4', senseId: 'explosive.s1', errorType: 'meaning', type: '词源', prompt: '记 explosive 时，哪句更稳妥？', options: ['先锁住「爆炸的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爆炸的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爆炸的'] },
  });

  D('exponent', {
    etymology: {
      origin: '现代英语常用词「exponent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exponent', gloss: '倡导者' },
      suffix: null,
      history: [
        { label: 'exponent', text: '现代英语常用词「exponent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：倡导者。' },
      ],
      formationLogic: '核心义：倡导者。',
      mnemonic: '看到 exponent，先说出「倡导者」。',
      note: '核心义：倡导者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exponent.', chinese: '这一章反复回到同一个点：倡导者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exponent.s1', en: 'Without that exponent, the next paragraph is hard to follow.', zh: '没有这个倡导者，下一段会很难读。', structure: 'exponent / 表示 / 倡导者', grammar: 'noun，围绕「倡导者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exponent.', right: 'He gave me some advice about the exponent.', reason: 'advice 不可数。名词 exponent 的单复数按词典词形记。', rule: '先确定 exponent 是noun，再套「倡导者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exponent.q1', senseId: 'exponent.s1', errorType: 'meaning', type: '词义选择', prompt: '「exponent」在本条的核心意思是：', options: ['倡导者', '完全相反的意思', '一种古代钱币'], answer: '倡导者', explain: 'exponent：倡导者。' },
      { id: 'exponent.q2', senseId: 'exponent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exponent?', options: ['倡导者', 'a kind of ancient coin', 'the past tense of be'], answer: '倡导者', explain: '对的是「倡导者」。' },
      { id: 'exponent.q3', senseId: 'exponent.s1', errorType: 'grammar', type: '词义选择', prompt: 'exponent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exponent.q4', senseId: 'exponent.s1', errorType: 'meaning', type: '词源', prompt: '记 exponent 时，哪句更稳妥？', options: ['先锁住「倡导者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倡导者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倡导者'] },
  });

  D('export', {
    etymology: {
      origin: '现代英语常用词「export」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'export', gloss: '出口' },
      suffix: null,
      history: [
        { label: 'export', text: '现代英语常用词「export」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：出口。' },
      ],
      formationLogic: '核心义：出口。',
      mnemonic: '看到 export，先说出「出口」。',
      note: '核心义：出口。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to export before the office closed.', chinese: '他们同意在办公室关门前做这件事：出口。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'export.s1', en: 'The deadline forced the team to export that afternoon.', zh: '截止日期逼着小组在那天下午出口。', structure: 'export / 表示 / 出口', grammar: 'verb，围绕「出口」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exported it yesterday without checking the real past form.', right: 'Check the past form of "export" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 export 是verb，再套「出口」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'export.q1', senseId: 'export.s1', errorType: 'meaning', type: '词义选择', prompt: '「export」在本条的核心意思是：', options: ['出口', '完全相反的意思', '一种古代钱币'], answer: '出口', explain: 'export：出口。' },
      { id: 'export.q2', senseId: 'export.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches export?', options: ['出口', 'a kind of ancient coin', 'the past tense of be'], answer: '出口', explain: '对的是「出口」。' },
      { id: 'export.q3', senseId: 'export.s1', errorType: 'grammar', type: '词义选择', prompt: 'export 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'export.q4', senseId: 'export.s1', errorType: 'meaning', type: '词源', prompt: '记 export 时，哪句更稳妥？', options: ['先锁住「出口」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「出口」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['出口'] },
  });

  D('expose', {
    etymology: {
      origin: '现代英语常用词「expose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expose', gloss: '暴露' },
      suffix: null,
      history: [
        { label: 'expose', text: '现代英语常用词「expose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：暴露。' },
      ],
      formationLogic: '核心义：暴露。',
      mnemonic: '看到 expose，先说出「暴露」。',
      note: '核心义：暴露。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to expose before the office closed.', chinese: '他们同意在办公室关门前做这件事：暴露。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expose.s1', en: 'The deadline forced the team to expose that afternoon.', zh: '截止日期逼着小组在那天下午暴露。', structure: 'expose / 表示 / 暴露', grammar: 'verb，围绕「暴露」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exposeed it yesterday without checking the real past form.', right: 'Check the past form of "expose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 expose 是verb，再套「暴露」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expose.q1', senseId: 'expose.s1', errorType: 'meaning', type: '词义选择', prompt: '「expose」在本条的核心意思是：', options: ['暴露', '完全相反的意思', '一种古代钱币'], answer: '暴露', explain: 'expose：暴露。' },
      { id: 'expose.q2', senseId: 'expose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expose?', options: ['暴露', 'a kind of ancient coin', 'the past tense of be'], answer: '暴露', explain: '对的是「暴露」。' },
      { id: 'expose.q3', senseId: 'expose.s1', errorType: 'grammar', type: '词义选择', prompt: 'expose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'expose.q4', senseId: 'expose.s1', errorType: 'meaning', type: '词源', prompt: '记 expose 时，哪句更稳妥？', options: ['先锁住「暴露」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「暴露」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暴露'] },
  });

  D('exposed', {
    etymology: {
      origin: '现代英语常用词「exposed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exposed', gloss: '暴露的' },
      suffix: null,
      history: [
        { label: 'exposed', text: '现代英语常用词「exposed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：暴露的。' },
      ],
      formationLogic: '核心义：暴露的。',
      mnemonic: '看到 exposed，先说出「暴露的」。',
      note: '核心义：暴露的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exposed.', chinese: '即使是初读者也能看出，这个结果是暴露的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exposed.s1', en: 'They wanted a exposed answer, not a long speech.', zh: '他们要一个暴露的的答复，不要长篇发言。', structure: 'exposed / 表示 / 暴露的', grammar: 'adjective，围绕「暴露的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exposed.', right: 'The news is exposed.', reason: 'news 作主语时动词用单数。', rule: '先确定 exposed 是adjective，再套「暴露的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exposed.q1', senseId: 'exposed.s1', errorType: 'meaning', type: '词义选择', prompt: '「exposed」在本条的核心意思是：', options: ['暴露的', '完全相反的意思', '一种古代钱币'], answer: '暴露的', explain: 'exposed：暴露的。' },
      { id: 'exposed.q2', senseId: 'exposed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exposed?', options: ['暴露的', 'a kind of ancient coin', 'the past tense of be'], answer: '暴露的', explain: '对的是「暴露的」。' },
      { id: 'exposed.q3', senseId: 'exposed.s1', errorType: 'grammar', type: '词义选择', prompt: 'exposed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exposed.q4', senseId: 'exposed.s1', errorType: 'meaning', type: '词源', prompt: '记 exposed 时，哪句更稳妥？', options: ['先锁住「暴露的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「暴露的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暴露的'] },
  });

  D('exposition', {
    etymology: {
      origin: '英语派生：exposi + -tion，词性转到「阐述」。',
      prefix: null,
      root: { text: 'exposi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exposition', text: '英语派生：exposi + -tion，词性转到「阐述」。' },
        { label: '现在', text: '核心用法是：阐述。' },
      ],
      formationLogic: '先认词干 exposi，再看词尾。',
      mnemonic: '看到 exposition，先说出「阐述」。',
      note: '先认词干 exposi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exposition.', chinese: '这一章反复回到同一个点：阐述。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exposition.s1', en: 'Without that exposition, the next paragraph is hard to follow.', zh: '没有这个阐述，下一段会很难读。', structure: 'exposition / 表示 / 阐述', grammar: 'noun，围绕「阐述」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exposition.', right: 'He gave me some advice about the exposition.', reason: 'advice 不可数。名词 exposition 的单复数按词典词形记。', rule: '先确定 exposition 是noun，再套「阐述」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exposition.q1', senseId: 'exposition.s1', errorType: 'meaning', type: '词义选择', prompt: '「exposition」在本条的核心意思是：', options: ['阐述', '完全相反的意思', '一种古代钱币'], answer: '阐述', explain: 'exposition：阐述。' },
      { id: 'exposition.q2', senseId: 'exposition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exposition?', options: ['阐述', 'a kind of ancient coin', 'the past tense of be'], answer: '阐述', explain: '对的是「阐述」。' },
      { id: 'exposition.q3', senseId: 'exposition.s1', errorType: 'grammar', type: '词义选择', prompt: 'exposition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exposition.q4', senseId: 'exposition.s1', errorType: 'meaning', type: '词源', prompt: '记 exposition 时，哪句更稳妥？', options: ['先锁住「阐述」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「阐述」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['阐述'] },
  });

  D('exposure', {
    etymology: {
      origin: '现代英语常用词「exposure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exposure', gloss: '暴露' },
      suffix: null,
      history: [
        { label: 'exposure', text: '现代英语常用词「exposure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：暴露。' },
      ],
      formationLogic: '核心义：暴露。',
      mnemonic: '看到 exposure，先说出「暴露」。',
      note: '核心义：暴露。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one exposure.', chinese: '这一章反复回到同一个点：暴露。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exposure.s1', en: 'Without that exposure, the next paragraph is hard to follow.', zh: '没有这个暴露，下一段会很难读。', structure: 'exposure / 表示 / 暴露', grammar: 'noun，围绕「暴露」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the exposure.', right: 'He gave me some advice about the exposure.', reason: 'advice 不可数。名词 exposure 的单复数按词典词形记。', rule: '先确定 exposure 是noun，再套「暴露」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exposure.q1', senseId: 'exposure.s1', errorType: 'meaning', type: '词义选择', prompt: '「exposure」在本条的核心意思是：', options: ['暴露', '完全相反的意思', '一种古代钱币'], answer: '暴露', explain: 'exposure：暴露。' },
      { id: 'exposure.q2', senseId: 'exposure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exposure?', options: ['暴露', 'a kind of ancient coin', 'the past tense of be'], answer: '暴露', explain: '对的是「暴露」。' },
      { id: 'exposure.q3', senseId: 'exposure.s1', errorType: 'grammar', type: '词义选择', prompt: 'exposure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'exposure.q4', senseId: 'exposure.s1', errorType: 'meaning', type: '词源', prompt: '记 exposure 时，哪句更稳妥？', options: ['先锁住「暴露」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「暴露」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暴露'] },
  });

  D('express', {
    etymology: {
      origin: '现代英语常用词「express」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'express', gloss: '表达' },
      suffix: null,
      history: [
        { label: 'express', text: '现代英语常用词「express」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：表达。' },
      ],
      formationLogic: '核心义：表达。',
      mnemonic: '看到 express，先说出「表达」。',
      note: '核心义：表达。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to express before the office closed.', chinese: '他们同意在办公室关门前做这件事：表达。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'express.s1', en: 'The deadline forced the team to express that afternoon.', zh: '截止日期逼着小组在那天下午表达。', structure: 'express / 表示 / 表达', grammar: 'verb，围绕「表达」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She expressed it yesterday without checking the real past form.', right: 'Check the past form of "express" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 express 是verb，再套「表达」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'express.q1', senseId: 'express.s1', errorType: 'meaning', type: '词义选择', prompt: '「express」在本条的核心意思是：', options: ['表达', '完全相反的意思', '一种古代钱币'], answer: '表达', explain: 'express：表达。' },
      { id: 'express.q2', senseId: 'express.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches express?', options: ['表达', 'a kind of ancient coin', 'the past tense of be'], answer: '表达', explain: '对的是「表达」。' },
      { id: 'express.q3', senseId: 'express.s1', errorType: 'grammar', type: '词义选择', prompt: 'express 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'express.q4', senseId: 'express.s1', errorType: 'meaning', type: '词源', prompt: '记 express 时，哪句更稳妥？', options: ['先锁住「表达」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「表达」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['表达'] },
  });

  D('expression', {
    etymology: {
      origin: '英语派生：expres + -sion，词性转到「表达」。',
      prefix: null,
      root: { text: 'expres', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expression', text: '英语派生：expres + -sion，词性转到「表达」。' },
        { label: '现在', text: '核心用法是：表达。' },
      ],
      formationLogic: '先认词干 expres，再看词尾。',
      mnemonic: '看到 expression，先说出「表达」。',
      note: '先认词干 expres，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expression.', chinese: '这一章反复回到同一个点：表达。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expression.s1', en: 'Without that expression, the next paragraph is hard to follow.', zh: '没有这个表达，下一段会很难读。', structure: 'expression / 表示 / 表达', grammar: 'noun，围绕「表达」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expression.', right: 'He gave me some advice about the expression.', reason: 'advice 不可数。名词 expression 的单复数按词典词形记。', rule: '先确定 expression 是noun，再套「表达」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expression.q1', senseId: 'expression.s1', errorType: 'meaning', type: '词义选择', prompt: '「expression」在本条的核心意思是：', options: ['表达', '完全相反的意思', '一种古代钱币'], answer: '表达', explain: 'expression：表达。' },
      { id: 'expression.q2', senseId: 'expression.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expression?', options: ['表达', 'a kind of ancient coin', 'the past tense of be'], answer: '表达', explain: '对的是「表达」。' },
      { id: 'expression.q3', senseId: 'expression.s1', errorType: 'grammar', type: '词义选择', prompt: 'expression 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expression.q4', senseId: 'expression.s1', errorType: 'meaning', type: '词源', prompt: '记 expression 时，哪句更稳妥？', options: ['先锁住「表达」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「表达」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['表达'] },
  });

  D('expressive', {
    etymology: {
      origin: '英语派生：express + -ive，词性转到「富于表现力的」。',
      prefix: null,
      root: { text: 'express', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'expressive', text: '英语派生：express + -ive，词性转到「富于表现力的」。' },
        { label: '现在', text: '核心用法是：富于表现力的。' },
      ],
      formationLogic: '先认词干 express，再看词尾。',
      mnemonic: '看到 expressive，先说出「富于表现力的」。',
      note: '先认词干 express，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was expressive.', chinese: '即使是初读者也能看出，这个结果是富于表现力的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expressive.s1', en: 'They wanted a expressive answer, not a long speech.', zh: '他们要一个富于表现力的的答复，不要长篇发言。', structure: 'expressive / 表示 / 富于表现力的', grammar: 'adjective，围绕「富于表现力的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are expressive.', right: 'The news is expressive.', reason: 'news 作主语时动词用单数。', rule: '先确定 expressive 是adjective，再套「富于表现力的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expressive.q1', senseId: 'expressive.s1', errorType: 'meaning', type: '词义选择', prompt: '「expressive」在本条的核心意思是：', options: ['富于表现力的', '完全相反的意思', '一种古代钱币'], answer: '富于表现力的', explain: 'expressive：富于表现力的。' },
      { id: 'expressive.q2', senseId: 'expressive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expressive?', options: ['富于表现力的', 'a kind of ancient coin', 'the past tense of be'], answer: '富于表现力的', explain: '对的是「富于表现力的」。' },
      { id: 'expressive.q3', senseId: 'expressive.s1', errorType: 'grammar', type: '词义选择', prompt: 'expressive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'expressive.q4', senseId: 'expressive.s1', errorType: 'meaning', type: '词源', prompt: '记 expressive 时，哪句更稳妥？', options: ['先锁住「富于表现力的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「富于表现力的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['富于表现力的'] },
  });

  D('expressway', {
    etymology: {
      origin: '现代英语常用词「expressway」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'expressway', gloss: '高速公路' },
      suffix: null,
      history: [
        { label: 'expressway', text: '现代英语常用词「expressway」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：高速公路。' },
      ],
      formationLogic: '核心义：高速公路。',
      mnemonic: '看到 expressway，先说出「高速公路」。',
      note: '核心义：高速公路。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one expressway.', chinese: '这一章反复回到同一个点：高速公路。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'expressway.s1', en: 'Without that expressway, the next paragraph is hard to follow.', zh: '没有这个高速公路，下一段会很难读。', structure: 'expressway / 表示 / 高速公路', grammar: 'noun，围绕「高速公路」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the expressway.', right: 'He gave me some advice about the expressway.', reason: 'advice 不可数。名词 expressway 的单复数按词典词形记。', rule: '先确定 expressway 是noun，再套「高速公路」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'expressway.q1', senseId: 'expressway.s1', errorType: 'meaning', type: '词义选择', prompt: '「expressway」在本条的核心意思是：', options: ['高速公路', '完全相反的意思', '一种古代钱币'], answer: '高速公路', explain: 'expressway：高速公路。' },
      { id: 'expressway.q2', senseId: 'expressway.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches expressway?', options: ['高速公路', 'a kind of ancient coin', 'the past tense of be'], answer: '高速公路', explain: '对的是「高速公路」。' },
      { id: 'expressway.q3', senseId: 'expressway.s1', errorType: 'grammar', type: '词义选择', prompt: 'expressway 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'expressway.q4', senseId: 'expressway.s1', errorType: 'meaning', type: '词源', prompt: '记 expressway 时，哪句更稳妥？', options: ['先锁住「高速公路」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「高速公路」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高速公路'] },
  });

  D('exquisite', {
    etymology: {
      origin: '现代英语常用词「exquisite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exquisite', gloss: '精美的' },
      suffix: null,
      history: [
        { label: 'exquisite', text: '现代英语常用词「exquisite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：精美的。' },
      ],
      formationLogic: '核心义：精美的。',
      mnemonic: '看到 exquisite，先说出「精美的」。',
      note: '核心义：精美的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exquisite.', chinese: '即使是初读者也能看出，这个结果是精美的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exquisite.s1', en: 'They wanted a exquisite answer, not a long speech.', zh: '他们要一个精美的的答复，不要长篇发言。', structure: 'exquisite / 表示 / 精美的', grammar: 'adjective，围绕「精美的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exquisite.', right: 'The news is exquisite.', reason: 'news 作主语时动词用单数。', rule: '先确定 exquisite 是adjective，再套「精美的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exquisite.q1', senseId: 'exquisite.s1', errorType: 'meaning', type: '词义选择', prompt: '「exquisite」在本条的核心意思是：', options: ['精美的', '完全相反的意思', '一种古代钱币'], answer: '精美的', explain: 'exquisite：精美的。' },
      { id: 'exquisite.q2', senseId: 'exquisite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exquisite?', options: ['精美的', 'a kind of ancient coin', 'the past tense of be'], answer: '精美的', explain: '对的是「精美的」。' },
      { id: 'exquisite.q3', senseId: 'exquisite.s1', errorType: 'grammar', type: '词义选择', prompt: 'exquisite 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exquisite.q4', senseId: 'exquisite.s1', errorType: 'meaning', type: '词源', prompt: '记 exquisite 时，哪句更稳妥？', options: ['先锁住「精美的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精美的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精美的'] },
  });

  D('extend', {
    etymology: {
      origin: '现代英语常用词「extend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extend', gloss: '延伸' },
      suffix: null,
      history: [
        { label: 'extend', text: '现代英语常用词「extend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：延伸。' },
      ],
      formationLogic: '核心义：延伸。',
      mnemonic: '看到 extend，先说出「延伸」。',
      note: '核心义：延伸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to extend before the office closed.', chinese: '他们同意在办公室关门前做这件事：延伸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extend.s1', en: 'The deadline forced the team to extend that afternoon.', zh: '截止日期逼着小组在那天下午延伸。', structure: 'extend / 表示 / 延伸', grammar: 'verb，围绕「延伸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She extended it yesterday without checking the real past form.', right: 'Check the past form of "extend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 extend 是verb，再套「延伸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extend.q1', senseId: 'extend.s1', errorType: 'meaning', type: '词义选择', prompt: '「extend」在本条的核心意思是：', options: ['延伸', '完全相反的意思', '一种古代钱币'], answer: '延伸', explain: 'extend：延伸。' },
      { id: 'extend.q2', senseId: 'extend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extend?', options: ['延伸', 'a kind of ancient coin', 'the past tense of be'], answer: '延伸', explain: '对的是「延伸」。' },
      { id: 'extend.q3', senseId: 'extend.s1', errorType: 'grammar', type: '词义选择', prompt: 'extend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'extend.q4', senseId: 'extend.s1', errorType: 'meaning', type: '词源', prompt: '记 extend 时，哪句更稳妥？', options: ['先锁住「延伸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「延伸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['延伸'] },
  });

  D('extended', {
    etymology: {
      origin: '现代英语常用词「extended」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extended', gloss: '延长了的' },
      suffix: null,
      history: [
        { label: 'extended', text: '现代英语常用词「extended」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：延长了的。' },
      ],
      formationLogic: '核心义：延长了的。',
      mnemonic: '看到 extended，先说出「延长了的」。',
      note: '核心义：延长了的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extended.', chinese: '即使是初读者也能看出，这个结果是延长了的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extended.s1', en: 'They wanted a extended answer, not a long speech.', zh: '他们要一个延长了的的答复，不要长篇发言。', structure: 'extended / 表示 / 延长了的', grammar: 'adjective，围绕「延长了的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extended.', right: 'The news is extended.', reason: 'news 作主语时动词用单数。', rule: '先确定 extended 是adjective，再套「延长了的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extended.q1', senseId: 'extended.s1', errorType: 'meaning', type: '词义选择', prompt: '「extended」在本条的核心意思是：', options: ['延长了的', '完全相反的意思', '一种古代钱币'], answer: '延长了的', explain: 'extended：延长了的。' },
      { id: 'extended.q2', senseId: 'extended.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extended?', options: ['延长了的', 'a kind of ancient coin', 'the past tense of be'], answer: '延长了的', explain: '对的是「延长了的」。' },
      { id: 'extended.q3', senseId: 'extended.s1', errorType: 'grammar', type: '词义选择', prompt: 'extended 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extended.q4', senseId: 'extended.s1', errorType: 'meaning', type: '词源', prompt: '记 extended 时，哪句更稳妥？', options: ['先锁住「延长了的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「延长了的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['延长了的'] },
  });

  D('extension', {
    etymology: {
      origin: '英语派生：exten + -sion，词性转到「延长」。',
      prefix: null,
      root: { text: 'exten', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'extension', text: '英语派生：exten + -sion，词性转到「延长」。' },
        { label: '现在', text: '核心用法是：延长。' },
      ],
      formationLogic: '先认词干 exten，再看词尾。',
      mnemonic: '看到 extension，先说出「延长」。',
      note: '先认词干 exten，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one extension.', chinese: '这一章反复回到同一个点：延长。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extension.s1', en: 'Without that extension, the next paragraph is hard to follow.', zh: '没有这个延长，下一段会很难读。', structure: 'extension / 表示 / 延长', grammar: 'noun，围绕「延长」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the extension.', right: 'He gave me some advice about the extension.', reason: 'advice 不可数。名词 extension 的单复数按词典词形记。', rule: '先确定 extension 是noun，再套「延长」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extension.q1', senseId: 'extension.s1', errorType: 'meaning', type: '词义选择', prompt: '「extension」在本条的核心意思是：', options: ['延长', '完全相反的意思', '一种古代钱币'], answer: '延长', explain: 'extension：延长。' },
      { id: 'extension.q2', senseId: 'extension.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extension?', options: ['延长', 'a kind of ancient coin', 'the past tense of be'], answer: '延长', explain: '对的是「延长」。' },
      { id: 'extension.q3', senseId: 'extension.s1', errorType: 'grammar', type: '词义选择', prompt: 'extension 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extension.q4', senseId: 'extension.s1', errorType: 'meaning', type: '词源', prompt: '记 extension 时，哪句更稳妥？', options: ['先锁住「延长」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「延长」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['延长'] },
  });

  D('extensive', {
    etymology: {
      origin: '英语派生：extens + -ive，词性转到「广泛的」。',
      prefix: null,
      root: { text: 'extens', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'extensive', text: '英语派生：extens + -ive，词性转到「广泛的」。' },
        { label: '现在', text: '核心用法是：广泛的。' },
      ],
      formationLogic: '先认词干 extens，再看词尾。',
      mnemonic: '看到 extensive，先说出「广泛的」。',
      note: '先认词干 extens，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extensive.', chinese: '即使是初读者也能看出，这个结果是广泛的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extensive.s1', en: 'They wanted a extensive answer, not a long speech.', zh: '他们要一个广泛的的答复，不要长篇发言。', structure: 'extensive / 表示 / 广泛的', grammar: 'adjective，围绕「广泛的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extensive.', right: 'The news is extensive.', reason: 'news 作主语时动词用单数。', rule: '先确定 extensive 是adjective，再套「广泛的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extensive.q1', senseId: 'extensive.s1', errorType: 'meaning', type: '词义选择', prompt: '「extensive」在本条的核心意思是：', options: ['广泛的', '完全相反的意思', '一种古代钱币'], answer: '广泛的', explain: 'extensive：广泛的。' },
      { id: 'extensive.q2', senseId: 'extensive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extensive?', options: ['广泛的', 'a kind of ancient coin', 'the past tense of be'], answer: '广泛的', explain: '对的是「广泛的」。' },
      { id: 'extensive.q3', senseId: 'extensive.s1', errorType: 'grammar', type: '词义选择', prompt: 'extensive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extensive.q4', senseId: 'extensive.s1', errorType: 'meaning', type: '词源', prompt: '记 extensive 时，哪句更稳妥？', options: ['先锁住「广泛的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「广泛的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['广泛的'] },
  });

  D('extent', {
    etymology: {
      origin: '现代英语常用词「extent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extent', gloss: '程度' },
      suffix: null,
      history: [
        { label: 'extent', text: '现代英语常用词「extent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：程度。' },
      ],
      formationLogic: '核心义：程度。',
      mnemonic: '看到 extent，先说出「程度」。',
      note: '核心义：程度。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one extent.', chinese: '这一章反复回到同一个点：程度。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extent.s1', en: 'Without that extent, the next paragraph is hard to follow.', zh: '没有这个程度，下一段会很难读。', structure: 'extent / 表示 / 程度', grammar: 'noun，围绕「程度」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the extent.', right: 'He gave me some advice about the extent.', reason: 'advice 不可数。名词 extent 的单复数按词典词形记。', rule: '先确定 extent 是noun，再套「程度」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extent.q1', senseId: 'extent.s1', errorType: 'meaning', type: '词义选择', prompt: '「extent」在本条的核心意思是：', options: ['程度', '完全相反的意思', '一种古代钱币'], answer: '程度', explain: 'extent：程度。' },
      { id: 'extent.q2', senseId: 'extent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extent?', options: ['程度', 'a kind of ancient coin', 'the past tense of be'], answer: '程度', explain: '对的是「程度」。' },
      { id: 'extent.q3', senseId: 'extent.s1', errorType: 'grammar', type: '词义选择', prompt: 'extent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extent.q4', senseId: 'extent.s1', errorType: 'meaning', type: '词源', prompt: '记 extent 时，哪句更稳妥？', options: ['先锁住「程度」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「程度」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['程度'] },
  });

  D('exterior', {
    etymology: {
      origin: '英语派生：exteri + -or，词性转到「外部的」。',
      prefix: null,
      root: { text: 'exteri', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'exterior', text: '英语派生：exteri + -or，词性转到「外部的」。' },
        { label: '现在', text: '核心用法是：外部的。' },
      ],
      formationLogic: '先认词干 exteri，再看词尾。',
      mnemonic: '看到 exterior，先说出「外部的」。',
      note: '先认词干 exteri，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was exterior.', chinese: '即使是初读者也能看出，这个结果是外部的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exterior.s1', en: 'They wanted a exterior answer, not a long speech.', zh: '他们要一个外部的的答复，不要长篇发言。', structure: 'exterior / 表示 / 外部的', grammar: 'adjective，围绕「外部的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are exterior.', right: 'The news is exterior.', reason: 'news 作主语时动词用单数。', rule: '先确定 exterior 是adjective，再套「外部的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exterior.q1', senseId: 'exterior.s1', errorType: 'meaning', type: '词义选择', prompt: '「exterior」在本条的核心意思是：', options: ['外部的', '完全相反的意思', '一种古代钱币'], answer: '外部的', explain: 'exterior：外部的。' },
      { id: 'exterior.q2', senseId: 'exterior.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exterior?', options: ['外部的', 'a kind of ancient coin', 'the past tense of be'], answer: '外部的', explain: '对的是「外部的」。' },
      { id: 'exterior.q3', senseId: 'exterior.s1', errorType: 'grammar', type: '词义选择', prompt: 'exterior 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'exterior.q4', senseId: 'exterior.s1', errorType: 'meaning', type: '词源', prompt: '记 exterior 时，哪句更稳妥？', options: ['先锁住「外部的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外部的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外部的'] },
  });

  D('external', {
    etymology: {
      origin: '英语派生：extern + -al，词性转到「外部的」。',
      prefix: null,
      root: { text: 'extern', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'external', text: '英语派生：extern + -al，词性转到「外部的」。' },
        { label: '现在', text: '核心用法是：外部的。' },
      ],
      formationLogic: '先认词干 extern，再看词尾。',
      mnemonic: '看到 external，先说出「外部的」。',
      note: '先认词干 extern，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was external.', chinese: '即使是初读者也能看出，这个结果是外部的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'external.s1', en: 'They wanted a external answer, not a long speech.', zh: '他们要一个外部的的答复，不要长篇发言。', structure: 'external / 表示 / 外部的', grammar: 'adjective，围绕「外部的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are external.', right: 'The news is external.', reason: 'news 作主语时动词用单数。', rule: '先确定 external 是adjective，再套「外部的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'external.q1', senseId: 'external.s1', errorType: 'meaning', type: '词义选择', prompt: '「external」在本条的核心意思是：', options: ['外部的', '完全相反的意思', '一种古代钱币'], answer: '外部的', explain: 'external：外部的。' },
      { id: 'external.q2', senseId: 'external.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches external?', options: ['外部的', 'a kind of ancient coin', 'the past tense of be'], answer: '外部的', explain: '对的是「外部的」。' },
      { id: 'external.q3', senseId: 'external.s1', errorType: 'grammar', type: '词义选择', prompt: 'external 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'external.q4', senseId: 'external.s1', errorType: 'meaning', type: '词源', prompt: '记 external 时，哪句更稳妥？', options: ['先锁住「外部的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外部的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外部的'] },
  });

  D('extinct', {
    etymology: {
      origin: '现代英语常用词「extinct」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extinct', gloss: '灭绝的' },
      suffix: null,
      history: [
        { label: 'extinct', text: '现代英语常用词「extinct」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：灭绝的。' },
      ],
      formationLogic: '核心义：灭绝的。',
      mnemonic: '看到 extinct，先说出「灭绝的」。',
      note: '核心义：灭绝的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extinct.', chinese: '即使是初读者也能看出，这个结果是灭绝的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extinct.s1', en: 'They wanted a extinct answer, not a long speech.', zh: '他们要一个灭绝的的答复，不要长篇发言。', structure: 'extinct / 表示 / 灭绝的', grammar: 'adjective，围绕「灭绝的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extinct.', right: 'The news is extinct.', reason: 'news 作主语时动词用单数。', rule: '先确定 extinct 是adjective，再套「灭绝的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extinct.q1', senseId: 'extinct.s1', errorType: 'meaning', type: '词义选择', prompt: '「extinct」在本条的核心意思是：', options: ['灭绝的', '完全相反的意思', '一种古代钱币'], answer: '灭绝的', explain: 'extinct：灭绝的。' },
      { id: 'extinct.q2', senseId: 'extinct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extinct?', options: ['灭绝的', 'a kind of ancient coin', 'the past tense of be'], answer: '灭绝的', explain: '对的是「灭绝的」。' },
      { id: 'extinct.q3', senseId: 'extinct.s1', errorType: 'grammar', type: '词义选择', prompt: 'extinct 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extinct.q4', senseId: 'extinct.s1', errorType: 'meaning', type: '词源', prompt: '记 extinct 时，哪句更稳妥？', options: ['先锁住「灭绝的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灭绝的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灭绝的'] },
  });

  D('extinguish', {
    etymology: {
      origin: '现代英语常用词「extinguish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extinguish', gloss: '熄灭' },
      suffix: null,
      history: [
        { label: 'extinguish', text: '现代英语常用词「extinguish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：熄灭。' },
      ],
      formationLogic: '核心义：熄灭。',
      mnemonic: '看到 extinguish，先说出「熄灭」。',
      note: '核心义：熄灭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to extinguish before the office closed.', chinese: '他们同意在办公室关门前做这件事：熄灭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extinguish.s1', en: 'The deadline forced the team to extinguish that afternoon.', zh: '截止日期逼着小组在那天下午熄灭。', structure: 'extinguish / 表示 / 熄灭', grammar: 'verb，围绕「熄灭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She extinguished it yesterday without checking the real past form.', right: 'Check the past form of "extinguish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 extinguish 是verb，再套「熄灭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extinguish.q1', senseId: 'extinguish.s1', errorType: 'meaning', type: '词义选择', prompt: '「extinguish」在本条的核心意思是：', options: ['熄灭', '完全相反的意思', '一种古代钱币'], answer: '熄灭', explain: 'extinguish：熄灭。' },
      { id: 'extinguish.q2', senseId: 'extinguish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extinguish?', options: ['熄灭', 'a kind of ancient coin', 'the past tense of be'], answer: '熄灭', explain: '对的是「熄灭」。' },
      { id: 'extinguish.q3', senseId: 'extinguish.s1', errorType: 'grammar', type: '词义选择', prompt: 'extinguish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'extinguish.q4', senseId: 'extinguish.s1', errorType: 'meaning', type: '词源', prompt: '记 extinguish 时，哪句更稳妥？', options: ['先锁住「熄灭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「熄灭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熄灭'] },
  });

  D('extinguished', {
    etymology: {
      origin: '现代英语常用词「extinguished」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extinguished', gloss: '熄灭了的' },
      suffix: null,
      history: [
        { label: 'extinguished', text: '现代英语常用词「extinguished」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：熄灭了的。' },
      ],
      formationLogic: '核心义：熄灭了的。',
      mnemonic: '看到 extinguished，先说出「熄灭了的」。',
      note: '核心义：熄灭了的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extinguished.', chinese: '即使是初读者也能看出，这个结果是熄灭了的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extinguished.s1', en: 'They wanted a extinguished answer, not a long speech.', zh: '他们要一个熄灭了的的答复，不要长篇发言。', structure: 'extinguished / 表示 / 熄灭了的', grammar: 'adjective，围绕「熄灭了的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extinguished.', right: 'The news is extinguished.', reason: 'news 作主语时动词用单数。', rule: '先确定 extinguished 是adjective，再套「熄灭了的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extinguished.q1', senseId: 'extinguished.s1', errorType: 'meaning', type: '词义选择', prompt: '「extinguished」在本条的核心意思是：', options: ['熄灭了的', '完全相反的意思', '一种古代钱币'], answer: '熄灭了的', explain: 'extinguished：熄灭了的。' },
      { id: 'extinguished.q2', senseId: 'extinguished.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extinguished?', options: ['熄灭了的', 'a kind of ancient coin', 'the past tense of be'], answer: '熄灭了的', explain: '对的是「熄灭了的」。' },
      { id: 'extinguished.q3', senseId: 'extinguished.s1', errorType: 'grammar', type: '词义选择', prompt: 'extinguished 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extinguished.q4', senseId: 'extinguished.s1', errorType: 'meaning', type: '词源', prompt: '记 extinguished 时，哪句更稳妥？', options: ['先锁住「熄灭了的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「熄灭了的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熄灭了的'] },
  });

  D('extort', {
    etymology: {
      origin: '现代英语常用词「extort」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extort', gloss: '勒索' },
      suffix: null,
      history: [
        { label: 'extort', text: '现代英语常用词「extort」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：勒索。' },
      ],
      formationLogic: '核心义：勒索。',
      mnemonic: '看到 extort，先说出「勒索」。',
      note: '核心义：勒索。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to extort before the office closed.', chinese: '他们同意在办公室关门前做这件事：勒索。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extort.s1', en: 'The deadline forced the team to extort that afternoon.', zh: '截止日期逼着小组在那天下午勒索。', structure: 'extort / 表示 / 勒索', grammar: 'verb，围绕「勒索」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She extorted it yesterday without checking the real past form.', right: 'Check the past form of "extort" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 extort 是verb，再套「勒索」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extort.q1', senseId: 'extort.s1', errorType: 'meaning', type: '词义选择', prompt: '「extort」在本条的核心意思是：', options: ['勒索', '完全相反的意思', '一种古代钱币'], answer: '勒索', explain: 'extort：勒索。' },
      { id: 'extort.q2', senseId: 'extort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extort?', options: ['勒索', 'a kind of ancient coin', 'the past tense of be'], answer: '勒索', explain: '对的是「勒索」。' },
      { id: 'extort.q3', senseId: 'extort.s1', errorType: 'grammar', type: '词义选择', prompt: 'extort 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'extort.q4', senseId: 'extort.s1', errorType: 'meaning', type: '词源', prompt: '记 extort 时，哪句更稳妥？', options: ['先锁住「勒索」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勒索」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勒索'] },
  });

  D('extra', {
    etymology: {
      origin: '现代英语常用词「extra」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extra', gloss: '额外的' },
      suffix: null,
      history: [
        { label: 'extra', text: '现代英语常用词「extra」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：额外的。' },
      ],
      formationLogic: '核心义：额外的。',
      mnemonic: '看到 extra，先说出「额外的」。',
      note: '核心义：额外的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extra.', chinese: '即使是初读者也能看出，这个结果是额外的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extra.s1', en: 'They wanted a extra answer, not a long speech.', zh: '他们要一个额外的的答复，不要长篇发言。', structure: 'extra / 表示 / 额外的', grammar: 'adjective，围绕「额外的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extra.', right: 'The news is extra.', reason: 'news 作主语时动词用单数。', rule: '先确定 extra 是adjective，再套「额外的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extra.q1', senseId: 'extra.s1', errorType: 'meaning', type: '词义选择', prompt: '「extra」在本条的核心意思是：', options: ['额外的', '完全相反的意思', '一种古代钱币'], answer: '额外的', explain: 'extra：额外的。' },
      { id: 'extra.q2', senseId: 'extra.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extra?', options: ['额外的', 'a kind of ancient coin', 'the past tense of be'], answer: '额外的', explain: '对的是「额外的」。' },
      { id: 'extra.q3', senseId: 'extra.s1', errorType: 'grammar', type: '词义选择', prompt: 'extra 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extra.q4', senseId: 'extra.s1', errorType: 'meaning', type: '词源', prompt: '记 extra 时，哪句更稳妥？', options: ['先锁住「额外的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「额外的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['额外的'] },
  });

  D('extra hours', {
    etymology: {
      origin: '现代英语固定说法「extra hours」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'extra hours', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'extra hours', text: '现代英语固定说法「extra hours」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：加班时间。' },
      ],
      formationLogic: '核心义：加班时间。',
      mnemonic: '看到 extra hours，先说出「加班时间」。',
      note: '核心义：加班时间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "extra hours" and asked the class to keep it as one unit.', chinese: '老师把「extra hours」圈出来，让全班把它当成一个整体。它表示加班时间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extra hours.s1', en: 'In the margin she wrote "extra hours" so nobody would split the phrase.', zh: '她在页边写下「extra hours」，免得有人把这个说法拆开。意思是加班时间。', structure: 'extra hours / 表示 / 加班时间', grammar: 'noun，围绕「加班时间」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of extra hours and lost the point.', right: 'Keep "extra hours" together: it means 加班时间.', reason: '「extra hours」要整块理解。', rule: '先确定 extra hours 是noun，再套「加班时间」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extra hours.q1', senseId: 'extra hours.s1', errorType: 'meaning', type: '词义选择', prompt: '「extra hours」在本条的核心意思是：', options: ['加班时间', '完全相反的意思', '一种古代钱币'], answer: '加班时间', explain: 'extra hours：加班时间。' },
      { id: 'extra hours.q2', senseId: 'extra hours.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extra hours?', options: ['加班时间', 'a kind of ancient coin', 'the past tense of be'], answer: '加班时间', explain: '对的是「加班时间」。' },
      { id: 'extra hours.q3', senseId: 'extra hours.s1', errorType: 'grammar', type: '词义选择', prompt: 'extra hours 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extra hours.q4', senseId: 'extra hours.s1', errorType: 'meaning', type: '词源', prompt: '记 extra hours 时，哪句更稳妥？', options: ['先锁住「加班时间」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「加班时间」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加班时间'] },
  });

  D('extra pay', {
    etymology: {
      origin: '现代英语固定说法「extra pay」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'extra pay', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'extra pay', text: '现代英语固定说法「extra pay」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：额外报酬。' },
      ],
      formationLogic: '核心义：额外报酬。',
      mnemonic: '看到 extra pay，先说出「额外报酬」。',
      note: '核心义：额外报酬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "extra pay" and asked the class to keep it as one unit.', chinese: '老师把「extra pay」圈出来，让全班把它当成一个整体。它表示额外报酬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extra pay.s1', en: 'In the margin she wrote "extra pay" so nobody would split the phrase.', zh: '她在页边写下「extra pay」，免得有人把这个说法拆开。意思是额外报酬。', structure: 'extra pay / 表示 / 额外报酬', grammar: 'noun，围绕「额外报酬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of extra pay and lost the point.', right: 'Keep "extra pay" together: it means 额外报酬.', reason: '「extra pay」要整块理解。', rule: '先确定 extra pay 是noun，再套「额外报酬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extra pay.q1', senseId: 'extra pay.s1', errorType: 'meaning', type: '词义选择', prompt: '「extra pay」在本条的核心意思是：', options: ['额外报酬', '完全相反的意思', '一种古代钱币'], answer: '额外报酬', explain: 'extra pay：额外报酬。' },
      { id: 'extra pay.q2', senseId: 'extra pay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extra pay?', options: ['额外报酬', 'a kind of ancient coin', 'the past tense of be'], answer: '额外报酬', explain: '对的是「额外报酬」。' },
      { id: 'extra pay.q3', senseId: 'extra pay.s1', errorType: 'grammar', type: '词义选择', prompt: 'extra pay 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extra pay.q4', senseId: 'extra pay.s1', errorType: 'meaning', type: '词源', prompt: '记 extra pay 时，哪句更稳妥？', options: ['先锁住「额外报酬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「额外报酬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['额外报酬'] },
  });

  D('extra time', {
    etymology: {
      origin: '现代英语固定说法「extra time」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'extra time', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'extra time', text: '现代英语固定说法「extra time」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：加时。' },
      ],
      formationLogic: '核心义：加时。',
      mnemonic: '看到 extra time，先说出「加时」。',
      note: '核心义：加时。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "extra time" and asked the class to keep it as one unit.', chinese: '老师把「extra time」圈出来，让全班把它当成一个整体。它表示加时。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extra time.s1', en: 'In the margin she wrote "extra time" so nobody would split the phrase.', zh: '她在页边写下「extra time」，免得有人把这个说法拆开。意思是加时。', structure: 'extra time / 表示 / 加时', grammar: 'noun，围绕「加时」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of extra time and lost the point.', right: 'Keep "extra time" together: it means 加时.', reason: '「extra time」要整块理解。', rule: '先确定 extra time 是noun，再套「加时」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extra time.q1', senseId: 'extra time.s1', errorType: 'meaning', type: '词义选择', prompt: '「extra time」在本条的核心意思是：', options: ['加时', '完全相反的意思', '一种古代钱币'], answer: '加时', explain: 'extra time：加时。' },
      { id: 'extra time.q2', senseId: 'extra time.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extra time?', options: ['加时', 'a kind of ancient coin', 'the past tense of be'], answer: '加时', explain: '对的是「加时」。' },
      { id: 'extra time.q3', senseId: 'extra time.s1', errorType: 'grammar', type: '词义选择', prompt: 'extra time 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extra time.q4', senseId: 'extra time.s1', errorType: 'meaning', type: '词源', prompt: '记 extra time 时，哪句更稳妥？', options: ['先锁住「加时」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「加时」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加时'] },
  });

  D('extract', {
    etymology: {
      origin: '现代英语常用词「extract」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extract', gloss: '提取' },
      suffix: null,
      history: [
        { label: 'extract', text: '现代英语常用词「extract」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：提取。' },
      ],
      formationLogic: '核心义：提取。',
      mnemonic: '看到 extract，先说出「提取」。',
      note: '核心义：提取。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to extract before the office closed.', chinese: '他们同意在办公室关门前做这件事：提取。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extract.s1', en: 'The deadline forced the team to extract that afternoon.', zh: '截止日期逼着小组在那天下午提取。', structure: 'extract / 表示 / 提取', grammar: 'verb，围绕「提取」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She extracted it yesterday without checking the real past form.', right: 'Check the past form of "extract" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 extract 是verb，再套「提取」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extract.q1', senseId: 'extract.s1', errorType: 'meaning', type: '词义选择', prompt: '「extract」在本条的核心意思是：', options: ['提取', '完全相反的意思', '一种古代钱币'], answer: '提取', explain: 'extract：提取。' },
      { id: 'extract.q2', senseId: 'extract.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extract?', options: ['提取', 'a kind of ancient coin', 'the past tense of be'], answer: '提取', explain: '对的是「提取」。' },
      { id: 'extract.q3', senseId: 'extract.s1', errorType: 'grammar', type: '词义选择', prompt: 'extract 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'extract.q4', senseId: 'extract.s1', errorType: 'meaning', type: '词源', prompt: '记 extract 时，哪句更稳妥？', options: ['先锁住「提取」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「提取」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['提取'] },
  });

  D('extraordinary', {
    etymology: {
      origin: '现代英语常用词「extraordinary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extraordinary', gloss: '非凡的' },
      suffix: null,
      history: [
        { label: 'extraordinary', text: '现代英语常用词「extraordinary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：非凡的。' },
      ],
      formationLogic: '核心义：非凡的。',
      mnemonic: '看到 extraordinary，先说出「非凡的」。',
      note: '核心义：非凡的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extraordinary.', chinese: '即使是初读者也能看出，这个结果是非凡的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extraordinary.s1', en: 'They wanted a extraordinary answer, not a long speech.', zh: '他们要一个非凡的的答复，不要长篇发言。', structure: 'extraordinary / 表示 / 非凡的', grammar: 'adjective，围绕「非凡的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extraordinary.', right: 'The news is extraordinary.', reason: 'news 作主语时动词用单数。', rule: '先确定 extraordinary 是adjective，再套「非凡的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extraordinary.q1', senseId: 'extraordinary.s1', errorType: 'meaning', type: '词义选择', prompt: '「extraordinary」在本条的核心意思是：', options: ['非凡的', '完全相反的意思', '一种古代钱币'], answer: '非凡的', explain: 'extraordinary：非凡的。' },
      { id: 'extraordinary.q2', senseId: 'extraordinary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extraordinary?', options: ['非凡的', 'a kind of ancient coin', 'the past tense of be'], answer: '非凡的', explain: '对的是「非凡的」。' },
      { id: 'extraordinary.q3', senseId: 'extraordinary.s1', errorType: 'grammar', type: '词义选择', prompt: 'extraordinary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extraordinary.q4', senseId: 'extraordinary.s1', errorType: 'meaning', type: '词源', prompt: '记 extraordinary 时，哪句更稳妥？', options: ['先锁住「非凡的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「非凡的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['非凡的'] },
  });

  D('extravagant', {
    etymology: {
      origin: '现代英语常用词「extravagant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extravagant', gloss: '奢侈的' },
      suffix: null,
      history: [
        { label: 'extravagant', text: '现代英语常用词「extravagant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：奢侈的。' },
      ],
      formationLogic: '核心义：奢侈的。',
      mnemonic: '看到 extravagant，先说出「奢侈的」。',
      note: '核心义：奢侈的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extravagant.', chinese: '即使是初读者也能看出，这个结果是奢侈的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extravagant.s1', en: 'They wanted a extravagant answer, not a long speech.', zh: '他们要一个奢侈的的答复，不要长篇发言。', structure: 'extravagant / 表示 / 奢侈的', grammar: 'adjective，围绕「奢侈的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extravagant.', right: 'The news is extravagant.', reason: 'news 作主语时动词用单数。', rule: '先确定 extravagant 是adjective，再套「奢侈的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extravagant.q1', senseId: 'extravagant.s1', errorType: 'meaning', type: '词义选择', prompt: '「extravagant」在本条的核心意思是：', options: ['奢侈的', '完全相反的意思', '一种古代钱币'], answer: '奢侈的', explain: 'extravagant：奢侈的。' },
      { id: 'extravagant.q2', senseId: 'extravagant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extravagant?', options: ['奢侈的', 'a kind of ancient coin', 'the past tense of be'], answer: '奢侈的', explain: '对的是「奢侈的」。' },
      { id: 'extravagant.q3', senseId: 'extravagant.s1', errorType: 'grammar', type: '词义选择', prompt: 'extravagant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extravagant.q4', senseId: 'extravagant.s1', errorType: 'meaning', type: '词源', prompt: '记 extravagant 时，哪句更稳妥？', options: ['先锁住「奢侈的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「奢侈的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['奢侈的'] },
  });

  D('extreme', {
    etymology: {
      origin: '现代英语常用词「extreme」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extreme', gloss: '极度的' },
      suffix: null,
      history: [
        { label: 'extreme', text: '现代英语常用词「extreme」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：极度的。' },
      ],
      formationLogic: '核心义：极度的。',
      mnemonic: '看到 extreme，先说出「极度的」。',
      note: '核心义：极度的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was extreme.', chinese: '即使是初读者也能看出，这个结果是极度的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extreme.s1', en: 'They wanted a extreme answer, not a long speech.', zh: '他们要一个极度的的答复，不要长篇发言。', structure: 'extreme / 表示 / 极度的', grammar: 'adjective，围绕「极度的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are extreme.', right: 'The news is extreme.', reason: 'news 作主语时动词用单数。', rule: '先确定 extreme 是adjective，再套「极度的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extreme.q1', senseId: 'extreme.s1', errorType: 'meaning', type: '词义选择', prompt: '「extreme」在本条的核心意思是：', options: ['极度的', '完全相反的意思', '一种古代钱币'], answer: '极度的', explain: 'extreme：极度的。' },
      { id: 'extreme.q2', senseId: 'extreme.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extreme?', options: ['极度的', 'a kind of ancient coin', 'the past tense of be'], answer: '极度的', explain: '对的是「极度的」。' },
      { id: 'extreme.q3', senseId: 'extreme.s1', errorType: 'grammar', type: '词义选择', prompt: 'extreme 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'extreme.q4', senseId: 'extreme.s1', errorType: 'meaning', type: '词源', prompt: '记 extreme 时，哪句更稳妥？', options: ['先锁住「极度的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极度的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极度的'] },
  });

  D('extremely', {
    etymology: {
      origin: '英语派生：extreme + -ly，词性转到「极其」。',
      prefix: null,
      root: { text: 'extreme', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'extremely', text: '英语派生：extreme + -ly，词性转到「极其」。' },
        { label: '现在', text: '核心用法是：极其。' },
      ],
      formationLogic: '先认词干 extreme，再看词尾。',
      mnemonic: '看到 extremely，先说出「极其」。',
      note: '先认词干 extreme，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule extremely, and the class followed.', chinese: '她把规则讲清楚了（极其），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extremely.s1', en: 'He nodded extremely and returned to the notes.', zh: '他极其地点了点头，又回去看笔记。', structure: 'extremely / 表示 / 极其', grammar: 'adverb，围绕「极其」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very extremelyly in the meeting.', right: 'She spoke extremely in the meeting.', reason: 'extremely 已经是副词，不要再加 -ly。', rule: '先确定 extremely 是adverb，再套「极其」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extremely.q1', senseId: 'extremely.s1', errorType: 'meaning', type: '词义选择', prompt: '「extremely」在本条的核心意思是：', options: ['极其', '完全相反的意思', '一种古代钱币'], answer: '极其', explain: 'extremely：极其。' },
      { id: 'extremely.q2', senseId: 'extremely.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extremely?', options: ['极其', 'a kind of ancient coin', 'the past tense of be'], answer: '极其', explain: '对的是「极其」。' },
      { id: 'extremely.q3', senseId: 'extremely.s1', errorType: 'grammar', type: '词义选择', prompt: 'extremely 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'extremely.q4', senseId: 'extremely.s1', errorType: 'meaning', type: '词源', prompt: '记 extremely 时，哪句更稳妥？', options: ['先锁住「极其」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极其」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极其'] },
  });

  D('extremist', {
    etymology: {
      origin: '英语派生：extrem + -ist，词性转到「极端分子」。',
      prefix: null,
      root: { text: 'extrem', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'extremist', text: '英语派生：extrem + -ist，词性转到「极端分子」。' },
        { label: '现在', text: '核心用法是：极端分子。' },
      ],
      formationLogic: '先认词干 extrem，再看词尾。',
      mnemonic: '看到 extremist，先说出「极端分子」。',
      note: '先认词干 extrem，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one extremist.', chinese: '这一章反复回到同一个点：极端分子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extremist.s1', en: 'Without that extremist, the next paragraph is hard to follow.', zh: '没有这个极端分子，下一段会很难读。', structure: 'extremist / 表示 / 极端分子', grammar: 'noun，围绕「极端分子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the extremist.', right: 'He gave me some advice about the extremist.', reason: 'advice 不可数。名词 extremist 的单复数按词典词形记。', rule: '先确定 extremist 是noun，再套「极端分子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extremist.q1', senseId: 'extremist.s1', errorType: 'meaning', type: '词义选择', prompt: '「extremist」在本条的核心意思是：', options: ['极端分子', '完全相反的意思', '一种古代钱币'], answer: '极端分子', explain: 'extremist：极端分子。' },
      { id: 'extremist.q2', senseId: 'extremist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extremist?', options: ['极端分子', 'a kind of ancient coin', 'the past tense of be'], answer: '极端分子', explain: '对的是「极端分子」。' },
      { id: 'extremist.q3', senseId: 'extremist.s1', errorType: 'grammar', type: '词义选择', prompt: 'extremist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extremist.q4', senseId: 'extremist.s1', errorType: 'meaning', type: '词源', prompt: '记 extremist 时，哪句更稳妥？', options: ['先锁住「极端分子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极端分子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极端分子'] },
  });

  D('extremity', {
    etymology: {
      origin: '英语派生：extrem + -ity，词性转到「末端」。',
      prefix: null,
      root: { text: 'extrem', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'extremity', text: '英语派生：extrem + -ity，词性转到「末端」。' },
        { label: '现在', text: '核心用法是：末端。' },
      ],
      formationLogic: '先认词干 extrem，再看词尾。',
      mnemonic: '看到 extremity，先说出「末端」。',
      note: '先认词干 extrem，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one extremity.', chinese: '这一章反复回到同一个点：末端。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extremity.s1', en: 'Without that extremity, the next paragraph is hard to follow.', zh: '没有这个末端，下一段会很难读。', structure: 'extremity / 表示 / 末端', grammar: 'noun，围绕「末端」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the extremity.', right: 'He gave me some advice about the extremity.', reason: 'advice 不可数。名词 extremity 的单复数按词典词形记。', rule: '先确定 extremity 是noun，再套「末端」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extremity.q1', senseId: 'extremity.s1', errorType: 'meaning', type: '词义选择', prompt: '「extremity」在本条的核心意思是：', options: ['末端', '完全相反的意思', '一种古代钱币'], answer: '末端', explain: 'extremity：末端。' },
      { id: 'extremity.q2', senseId: 'extremity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extremity?', options: ['末端', 'a kind of ancient coin', 'the past tense of be'], answer: '末端', explain: '对的是「末端」。' },
      { id: 'extremity.q3', senseId: 'extremity.s1', errorType: 'grammar', type: '词义选择', prompt: 'extremity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extremity.q4', senseId: 'extremity.s1', errorType: 'meaning', type: '词源', prompt: '记 extremity 时，哪句更稳妥？', options: ['先锁住「末端」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「末端」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['末端'] },
  });

  D('extrovert', {
    etymology: {
      origin: '现代英语常用词「extrovert」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'extrovert', gloss: '外向者' },
      suffix: null,
      history: [
        { label: 'extrovert', text: '现代英语常用词「extrovert」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：外向者。' },
      ],
      formationLogic: '核心义：外向者。',
      mnemonic: '看到 extrovert，先说出「外向者」。',
      note: '核心义：外向者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one extrovert.', chinese: '这一章反复回到同一个点：外向者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'extrovert.s1', en: 'Without that extrovert, the next paragraph is hard to follow.', zh: '没有这个外向者，下一段会很难读。', structure: 'extrovert / 表示 / 外向者', grammar: 'noun，围绕「外向者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the extrovert.', right: 'He gave me some advice about the extrovert.', reason: 'advice 不可数。名词 extrovert 的单复数按词典词形记。', rule: '先确定 extrovert 是noun，再套「外向者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'extrovert.q1', senseId: 'extrovert.s1', errorType: 'meaning', type: '词义选择', prompt: '「extrovert」在本条的核心意思是：', options: ['外向者', '完全相反的意思', '一种古代钱币'], answer: '外向者', explain: 'extrovert：外向者。' },
      { id: 'extrovert.q2', senseId: 'extrovert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches extrovert?', options: ['外向者', 'a kind of ancient coin', 'the past tense of be'], answer: '外向者', explain: '对的是「外向者」。' },
      { id: 'extrovert.q3', senseId: 'extrovert.s1', errorType: 'grammar', type: '词义选择', prompt: 'extrovert 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'extrovert.q4', senseId: 'extrovert.s1', errorType: 'meaning', type: '词源', prompt: '记 extrovert 时，哪句更稳妥？', options: ['先锁住「外向者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外向者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外向者'] },
  });

  D('exult', {
    etymology: {
      origin: '现代英语常用词「exult」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'exult', gloss: '欢腾' },
      suffix: null,
      history: [
        { label: 'exult', text: '现代英语常用词「exult」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：欢腾。' },
      ],
      formationLogic: '核心义：欢腾。',
      mnemonic: '看到 exult，先说出「欢腾」。',
      note: '核心义：欢腾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to exult before the office closed.', chinese: '他们同意在办公室关门前做这件事：欢腾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'exult.s1', en: 'The deadline forced the team to exult that afternoon.', zh: '截止日期逼着小组在那天下午欢腾。', structure: 'exult / 表示 / 欢腾', grammar: 'verb，围绕「欢腾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She exulted it yesterday without checking the real past form.', right: 'Check the past form of "exult" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 exult 是verb，再套「欢腾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'exult.q1', senseId: 'exult.s1', errorType: 'meaning', type: '词义选择', prompt: '「exult」在本条的核心意思是：', options: ['欢腾', '完全相反的意思', '一种古代钱币'], answer: '欢腾', explain: 'exult：欢腾。' },
      { id: 'exult.q2', senseId: 'exult.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches exult?', options: ['欢腾', 'a kind of ancient coin', 'the past tense of be'], answer: '欢腾', explain: '对的是「欢腾」。' },
      { id: 'exult.q3', senseId: 'exult.s1', errorType: 'grammar', type: '词义选择', prompt: 'exult 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'exult.q4', senseId: 'exult.s1', errorType: 'meaning', type: '词源', prompt: '记 exult 时，哪句更稳妥？', options: ['先锁住「欢腾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欢腾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欢腾'] },
  });

  D('eye', {
    etymology: {
      origin: '现代英语常用词「eye」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eye', gloss: '眼睛' },
      suffix: null,
      history: [
        { label: 'eye', text: '现代英语常用词「eye」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：眼睛。' },
      ],
      formationLogic: '核心义：眼睛。',
      mnemonic: '看到 eye，先说出「眼睛」。',
      note: '核心义：眼睛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eye.', chinese: '这一章反复回到同一个点：眼睛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eye.s1', en: 'Without that eye, the next paragraph is hard to follow.', zh: '没有这个眼睛，下一段会很难读。', structure: 'eye / 表示 / 眼睛', grammar: 'noun，围绕「眼睛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eye.', right: 'He gave me some advice about the eye.', reason: 'advice 不可数。名词 eye 的单复数按词典词形记。', rule: '先确定 eye 是noun，再套「眼睛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eye.q1', senseId: 'eye.s1', errorType: 'meaning', type: '词义选择', prompt: '「eye」在本条的核心意思是：', options: ['眼睛', '完全相反的意思', '一种古代钱币'], answer: '眼睛', explain: 'eye：眼睛。' },
      { id: 'eye.q2', senseId: 'eye.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eye?', options: ['眼睛', 'a kind of ancient coin', 'the past tense of be'], answer: '眼睛', explain: '对的是「眼睛」。' },
      { id: 'eye.q3', senseId: 'eye.s1', errorType: 'grammar', type: '词义选择', prompt: 'eye 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eye.q4', senseId: 'eye.s1', errorType: 'meaning', type: '词源', prompt: '记 eye 时，哪句更稳妥？', options: ['先锁住「眼睛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「眼睛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['眼睛'] },
  });

  D('eyebrow', {
    etymology: {
      origin: '现代英语常用词「eyebrow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eyebrow', gloss: '眉毛' },
      suffix: null,
      history: [
        { label: 'eyebrow', text: '现代英语常用词「eyebrow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：眉毛。' },
      ],
      formationLogic: '核心义：眉毛。',
      mnemonic: '看到 eyebrow，先说出「眉毛」。',
      note: '核心义：眉毛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eyebrow.', chinese: '这一章反复回到同一个点：眉毛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eyebrow.s1', en: 'Without that eyebrow, the next paragraph is hard to follow.', zh: '没有这个眉毛，下一段会很难读。', structure: 'eyebrow / 表示 / 眉毛', grammar: 'noun，围绕「眉毛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eyebrow.', right: 'He gave me some advice about the eyebrow.', reason: 'advice 不可数。名词 eyebrow 的单复数按词典词形记。', rule: '先确定 eyebrow 是noun，再套「眉毛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eyebrow.q1', senseId: 'eyebrow.s1', errorType: 'meaning', type: '词义选择', prompt: '「eyebrow」在本条的核心意思是：', options: ['眉毛', '完全相反的意思', '一种古代钱币'], answer: '眉毛', explain: 'eyebrow：眉毛。' },
      { id: 'eyebrow.q2', senseId: 'eyebrow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eyebrow?', options: ['眉毛', 'a kind of ancient coin', 'the past tense of be'], answer: '眉毛', explain: '对的是「眉毛」。' },
      { id: 'eyebrow.q3', senseId: 'eyebrow.s1', errorType: 'grammar', type: '词义选择', prompt: 'eyebrow 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eyebrow.q4', senseId: 'eyebrow.s1', errorType: 'meaning', type: '词源', prompt: '记 eyebrow 时，哪句更稳妥？', options: ['先锁住「眉毛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「眉毛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['眉毛'] },
  });

  D('eyelash', {
    etymology: {
      origin: '现代英语常用词「eyelash」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eyelash', gloss: '睫毛' },
      suffix: null,
      history: [
        { label: 'eyelash', text: '现代英语常用词「eyelash」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：睫毛。' },
      ],
      formationLogic: '核心义：睫毛。',
      mnemonic: '看到 eyelash，先说出「睫毛」。',
      note: '核心义：睫毛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eyelash.', chinese: '这一章反复回到同一个点：睫毛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eyelash.s1', en: 'Without that eyelash, the next paragraph is hard to follow.', zh: '没有这个睫毛，下一段会很难读。', structure: 'eyelash / 表示 / 睫毛', grammar: 'noun，围绕「睫毛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eyelash.', right: 'He gave me some advice about the eyelash.', reason: 'advice 不可数。名词 eyelash 的单复数按词典词形记。', rule: '先确定 eyelash 是noun，再套「睫毛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eyelash.q1', senseId: 'eyelash.s1', errorType: 'meaning', type: '词义选择', prompt: '「eyelash」在本条的核心意思是：', options: ['睫毛', '完全相反的意思', '一种古代钱币'], answer: '睫毛', explain: 'eyelash：睫毛。' },
      { id: 'eyelash.q2', senseId: 'eyelash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eyelash?', options: ['睫毛', 'a kind of ancient coin', 'the past tense of be'], answer: '睫毛', explain: '对的是「睫毛」。' },
      { id: 'eyelash.q3', senseId: 'eyelash.s1', errorType: 'grammar', type: '词义选择', prompt: 'eyelash 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eyelash.q4', senseId: 'eyelash.s1', errorType: 'meaning', type: '词源', prompt: '记 eyelash 时，哪句更稳妥？', options: ['先锁住「睫毛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「睫毛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['睫毛'] },
  });

  D('eyelid', {
    etymology: {
      origin: '现代英语常用词「eyelid」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eyelid', gloss: '眼睑' },
      suffix: null,
      history: [
        { label: 'eyelid', text: '现代英语常用词「eyelid」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：眼睑。' },
      ],
      formationLogic: '核心义：眼睑。',
      mnemonic: '看到 eyelid，先说出「眼睑」。',
      note: '核心义：眼睑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eyelid.', chinese: '这一章反复回到同一个点：眼睑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eyelid.s1', en: 'Without that eyelid, the next paragraph is hard to follow.', zh: '没有这个眼睑，下一段会很难读。', structure: 'eyelid / 表示 / 眼睑', grammar: 'noun，围绕「眼睑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eyelid.', right: 'He gave me some advice about the eyelid.', reason: 'advice 不可数。名词 eyelid 的单复数按词典词形记。', rule: '先确定 eyelid 是noun，再套「眼睑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eyelid.q1', senseId: 'eyelid.s1', errorType: 'meaning', type: '词义选择', prompt: '「eyelid」在本条的核心意思是：', options: ['眼睑', '完全相反的意思', '一种古代钱币'], answer: '眼睑', explain: 'eyelid：眼睑。' },
      { id: 'eyelid.q2', senseId: 'eyelid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eyelid?', options: ['眼睑', 'a kind of ancient coin', 'the past tense of be'], answer: '眼睑', explain: '对的是「眼睑」。' },
      { id: 'eyelid.q3', senseId: 'eyelid.s1', errorType: 'grammar', type: '词义选择', prompt: 'eyelid 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eyelid.q4', senseId: 'eyelid.s1', errorType: 'meaning', type: '词源', prompt: '记 eyelid 时，哪句更稳妥？', options: ['先锁住「眼睑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「眼睑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['眼睑'] },
  });

  D('eyesight', {
    etymology: {
      origin: '现代英语常用词「eyesight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eyesight', gloss: '视力' },
      suffix: null,
      history: [
        { label: 'eyesight', text: '现代英语常用词「eyesight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：视力。' },
      ],
      formationLogic: '核心义：视力。',
      mnemonic: '看到 eyesight，先说出「视力」。',
      note: '核心义：视力。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eyesight.', chinese: '这一章反复回到同一个点：视力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eyesight.s1', en: 'Without that eyesight, the next paragraph is hard to follow.', zh: '没有这个视力，下一段会很难读。', structure: 'eyesight / 表示 / 视力', grammar: 'noun，围绕「视力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eyesight.', right: 'He gave me some advice about the eyesight.', reason: 'advice 不可数。名词 eyesight 的单复数按词典词形记。', rule: '先确定 eyesight 是noun，再套「视力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eyesight.q1', senseId: 'eyesight.s1', errorType: 'meaning', type: '词义选择', prompt: '「eyesight」在本条的核心意思是：', options: ['视力', '完全相反的意思', '一种古代钱币'], answer: '视力', explain: 'eyesight：视力。' },
      { id: 'eyesight.q2', senseId: 'eyesight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eyesight?', options: ['视力', 'a kind of ancient coin', 'the past tense of be'], answer: '视力', explain: '对的是「视力」。' },
      { id: 'eyesight.q3', senseId: 'eyesight.s1', errorType: 'grammar', type: '词义选择', prompt: 'eyesight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eyesight.q4', senseId: 'eyesight.s1', errorType: 'meaning', type: '词源', prompt: '记 eyesight 时，哪句更稳妥？', options: ['先锁住「视力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「视力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['视力'] },
  });

  D('fable', {
    etymology: {
      origin: '现代英语常用词「fable」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fable', gloss: '寓言' },
      suffix: null,
      history: [
        { label: 'fable', text: '现代英语常用词「fable」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：寓言。' },
      ],
      formationLogic: '核心义：寓言。',
      mnemonic: '看到 fable，先说出「寓言」。',
      note: '核心义：寓言。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fable.', chinese: '这一章反复回到同一个点：寓言。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fable.s1', en: 'Without that fable, the next paragraph is hard to follow.', zh: '没有这个寓言，下一段会很难读。', structure: 'fable / 表示 / 寓言', grammar: 'noun，围绕「寓言」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fable.', right: 'He gave me some advice about the fable.', reason: 'advice 不可数。名词 fable 的单复数按词典词形记。', rule: '先确定 fable 是noun，再套「寓言」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fable.q1', senseId: 'fable.s1', errorType: 'meaning', type: '词义选择', prompt: '「fable」在本条的核心意思是：', options: ['寓言', '完全相反的意思', '一种古代钱币'], answer: '寓言', explain: 'fable：寓言。' },
      { id: 'fable.q2', senseId: 'fable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fable?', options: ['寓言', 'a kind of ancient coin', 'the past tense of be'], answer: '寓言', explain: '对的是「寓言」。' },
      { id: 'fable.q3', senseId: 'fable.s1', errorType: 'grammar', type: '词义选择', prompt: 'fable 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fable.q4', senseId: 'fable.s1', errorType: 'meaning', type: '词源', prompt: '记 fable 时，哪句更稳妥？', options: ['先锁住「寓言」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「寓言」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['寓言'] },
  });

  D('fabric', {
    etymology: {
      origin: '英语派生：fabr + -ic，词性转到「织物」。',
      prefix: null,
      root: { text: 'fabr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fabric', text: '英语派生：fabr + -ic，词性转到「织物」。' },
        { label: '现在', text: '核心用法是：织物。' },
      ],
      formationLogic: '先认词干 fabr，再看词尾。',
      mnemonic: '看到 fabric，先说出「织物」。',
      note: '先认词干 fabr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fabric.', chinese: '这一章反复回到同一个点：织物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fabric.s1', en: 'Without that fabric, the next paragraph is hard to follow.', zh: '没有这个织物，下一段会很难读。', structure: 'fabric / 表示 / 织物', grammar: 'noun，围绕「织物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fabric.', right: 'He gave me some advice about the fabric.', reason: 'advice 不可数。名词 fabric 的单复数按词典词形记。', rule: '先确定 fabric 是noun，再套「织物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fabric.q1', senseId: 'fabric.s1', errorType: 'meaning', type: '词义选择', prompt: '「fabric」在本条的核心意思是：', options: ['织物', '完全相反的意思', '一种古代钱币'], answer: '织物', explain: 'fabric：织物。' },
      { id: 'fabric.q2', senseId: 'fabric.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fabric?', options: ['织物', 'a kind of ancient coin', 'the past tense of be'], answer: '织物', explain: '对的是「织物」。' },
      { id: 'fabric.q3', senseId: 'fabric.s1', errorType: 'grammar', type: '词义选择', prompt: 'fabric 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fabric.q4', senseId: 'fabric.s1', errorType: 'meaning', type: '词源', prompt: '记 fabric 时，哪句更稳妥？', options: ['先锁住「织物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「织物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['织物'] },
  });

  D('fabricate', {
    etymology: {
      origin: '现代英语常用词「fabricate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fabricate', gloss: '捏造' },
      suffix: null,
      history: [
        { label: 'fabricate', text: '现代英语常用词「fabricate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：捏造。' },
      ],
      formationLogic: '核心义：捏造。',
      mnemonic: '看到 fabricate，先说出「捏造」。',
      note: '核心义：捏造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fabricate before the office closed.', chinese: '他们同意在办公室关门前做这件事：捏造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fabricate.s1', en: 'The deadline forced the team to fabricate that afternoon.', zh: '截止日期逼着小组在那天下午捏造。', structure: 'fabricate / 表示 / 捏造', grammar: 'verb，围绕「捏造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fabricateed it yesterday without checking the real past form.', right: 'Check the past form of "fabricate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fabricate 是verb，再套「捏造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fabricate.q1', senseId: 'fabricate.s1', errorType: 'meaning', type: '词义选择', prompt: '「fabricate」在本条的核心意思是：', options: ['捏造', '完全相反的意思', '一种古代钱币'], answer: '捏造', explain: 'fabricate：捏造。' },
      { id: 'fabricate.q2', senseId: 'fabricate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fabricate?', options: ['捏造', 'a kind of ancient coin', 'the past tense of be'], answer: '捏造', explain: '对的是「捏造」。' },
      { id: 'fabricate.q3', senseId: 'fabricate.s1', errorType: 'grammar', type: '词义选择', prompt: 'fabricate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fabricate.q4', senseId: 'fabricate.s1', errorType: 'meaning', type: '词源', prompt: '记 fabricate 时，哪句更稳妥？', options: ['先锁住「捏造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「捏造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['捏造'] },
  });

  D('fabulous', {
    etymology: {
      origin: '英语派生：fabul + -ous，词性转到「极好的」。',
      prefix: null,
      root: { text: 'fabul', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fabulous', text: '英语派生：fabul + -ous，词性转到「极好的」。' },
        { label: '现在', text: '核心用法是：极好的。' },
      ],
      formationLogic: '先认词干 fabul，再看词尾。',
      mnemonic: '看到 fabulous，先说出「极好的」。',
      note: '先认词干 fabul，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fabulous.', chinese: '即使是初读者也能看出，这个结果是极好的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fabulous.s1', en: 'They wanted a fabulous answer, not a long speech.', zh: '他们要一个极好的的答复，不要长篇发言。', structure: 'fabulous / 表示 / 极好的', grammar: 'adjective，围绕「极好的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fabulous.', right: 'The news is fabulous.', reason: 'news 作主语时动词用单数。', rule: '先确定 fabulous 是adjective，再套「极好的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fabulous.q1', senseId: 'fabulous.s1', errorType: 'meaning', type: '词义选择', prompt: '「fabulous」在本条的核心意思是：', options: ['极好的', '完全相反的意思', '一种古代钱币'], answer: '极好的', explain: 'fabulous：极好的。' },
      { id: 'fabulous.q2', senseId: 'fabulous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fabulous?', options: ['极好的', 'a kind of ancient coin', 'the past tense of be'], answer: '极好的', explain: '对的是「极好的」。' },
      { id: 'fabulous.q3', senseId: 'fabulous.s1', errorType: 'grammar', type: '词义选择', prompt: 'fabulous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fabulous.q4', senseId: 'fabulous.s1', errorType: 'meaning', type: '词源', prompt: '记 fabulous 时，哪句更稳妥？', options: ['先锁住「极好的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极好的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极好的'] },
  });

  D('facade', {
    etymology: {
      origin: '现代英语常用词「facade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'facade', gloss: '门面' },
      suffix: null,
      history: [
        { label: 'facade', text: '现代英语常用词「facade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：门面。' },
      ],
      formationLogic: '核心义：门面。',
      mnemonic: '看到 facade，先说出「门面」。',
      note: '核心义：门面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one facade.', chinese: '这一章反复回到同一个点：门面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'facade.s1', en: 'Without that facade, the next paragraph is hard to follow.', zh: '没有这个门面，下一段会很难读。', structure: 'facade / 表示 / 门面', grammar: 'noun，围绕「门面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the facade.', right: 'He gave me some advice about the facade.', reason: 'advice 不可数。名词 facade 的单复数按词典词形记。', rule: '先确定 facade 是noun，再套「门面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'facade.q1', senseId: 'facade.s1', errorType: 'meaning', type: '词义选择', prompt: '「facade」在本条的核心意思是：', options: ['门面', '完全相反的意思', '一种古代钱币'], answer: '门面', explain: 'facade：门面。' },
      { id: 'facade.q2', senseId: 'facade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches facade?', options: ['门面', 'a kind of ancient coin', 'the past tense of be'], answer: '门面', explain: '对的是「门面」。' },
      { id: 'facade.q3', senseId: 'facade.s1', errorType: 'grammar', type: '词义选择', prompt: 'facade 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'facade.q4', senseId: 'facade.s1', errorType: 'meaning', type: '词源', prompt: '记 facade 时，哪句更稳妥？', options: ['先锁住「门面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「门面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['门面'] },
  });

  D('face', {
    etymology: {
      origin: '现代英语常用词「face」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'face', gloss: '脸' },
      suffix: null,
      history: [
        { label: 'face', text: '现代英语常用词「face」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脸。' },
      ],
      formationLogic: '核心义：脸。',
      mnemonic: '看到 face，先说出「脸」。',
      note: '核心义：脸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one face.', chinese: '这一章反复回到同一个点：脸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'face.s1', en: 'Without that face, the next paragraph is hard to follow.', zh: '没有这个脸，下一段会很难读。', structure: 'face / 表示 / 脸', grammar: 'noun，围绕「脸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the face.', right: 'He gave me some advice about the face.', reason: 'advice 不可数。名词 face 的单复数按词典词形记。', rule: '先确定 face 是noun，再套「脸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'face.q1', senseId: 'face.s1', errorType: 'meaning', type: '词义选择', prompt: '「face」在本条的核心意思是：', options: ['脸', '完全相反的意思', '一种古代钱币'], answer: '脸', explain: 'face：脸。' },
      { id: 'face.q2', senseId: 'face.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches face?', options: ['脸', 'a kind of ancient coin', 'the past tense of be'], answer: '脸', explain: '对的是「脸」。' },
      { id: 'face.q3', senseId: 'face.s1', errorType: 'grammar', type: '词义选择', prompt: 'face 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'face.q4', senseId: 'face.s1', errorType: 'meaning', type: '词源', prompt: '记 face 时，哪句更稳妥？', options: ['先锁住「脸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脸'] },
  });

  D('face-down', {
    etymology: {
      origin: '现代英语常用词「face-down」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'face-down', gloss: '脸朝下的' },
      suffix: null,
      history: [
        { label: 'face-down', text: '现代英语常用词「face-down」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脸朝下的。' },
      ],
      formationLogic: '核心义：脸朝下的。',
      mnemonic: '看到 face-down，先说出「脸朝下的」。',
      note: '核心义：脸朝下的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was face-down.', chinese: '即使是初读者也能看出，这个结果是脸朝下的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'face-down.s1', en: 'They wanted a face-down answer, not a long speech.', zh: '他们要一个脸朝下的的答复，不要长篇发言。', structure: 'face-down / 表示 / 脸朝下的', grammar: 'adjective，围绕「脸朝下的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are face-down.', right: 'The news is face-down.', reason: 'news 作主语时动词用单数。', rule: '先确定 face-down 是adjective，再套「脸朝下的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'face-down.q1', senseId: 'face-down.s1', errorType: 'meaning', type: '词义选择', prompt: '「face-down」在本条的核心意思是：', options: ['脸朝下的', '完全相反的意思', '一种古代钱币'], answer: '脸朝下的', explain: 'face-down：脸朝下的。' },
      { id: 'face-down.q2', senseId: 'face-down.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches face-down?', options: ['脸朝下的', 'a kind of ancient coin', 'the past tense of be'], answer: '脸朝下的', explain: '对的是「脸朝下的」。' },
      { id: 'face-down.q3', senseId: 'face-down.s1', errorType: 'grammar', type: '词义选择', prompt: 'face-down 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'face-down.q4', senseId: 'face-down.s1', errorType: 'meaning', type: '词源', prompt: '记 face-down 时，哪句更稳妥？', options: ['先锁住「脸朝下的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脸朝下的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脸朝下的'] },
  });

  D('facet', {
    etymology: {
      origin: '现代英语常用词「facet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'facet', gloss: '方面' },
      suffix: null,
      history: [
        { label: 'facet', text: '现代英语常用词「facet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：方面。' },
      ],
      formationLogic: '核心义：方面。',
      mnemonic: '看到 facet，先说出「方面」。',
      note: '核心义：方面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one facet.', chinese: '这一章反复回到同一个点：方面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'facet.s1', en: 'Without that facet, the next paragraph is hard to follow.', zh: '没有这个方面，下一段会很难读。', structure: 'facet / 表示 / 方面', grammar: 'noun，围绕「方面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the facet.', right: 'He gave me some advice about the facet.', reason: 'advice 不可数。名词 facet 的单复数按词典词形记。', rule: '先确定 facet 是noun，再套「方面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'facet.q1', senseId: 'facet.s1', errorType: 'meaning', type: '词义选择', prompt: '「facet」在本条的核心意思是：', options: ['方面', '完全相反的意思', '一种古代钱币'], answer: '方面', explain: 'facet：方面。' },
      { id: 'facet.q2', senseId: 'facet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches facet?', options: ['方面', 'a kind of ancient coin', 'the past tense of be'], answer: '方面', explain: '对的是「方面」。' },
      { id: 'facet.q3', senseId: 'facet.s1', errorType: 'grammar', type: '词义选择', prompt: 'facet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'facet.q4', senseId: 'facet.s1', errorType: 'meaning', type: '词源', prompt: '记 facet 时，哪句更稳妥？', options: ['先锁住「方面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「方面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['方面'] },
  });

  D('facilitate', {
    etymology: {
      origin: '现代英语常用词「facilitate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'facilitate', gloss: '促进' },
      suffix: null,
      history: [
        { label: 'facilitate', text: '现代英语常用词「facilitate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：促进。' },
      ],
      formationLogic: '核心义：促进。',
      mnemonic: '看到 facilitate，先说出「促进」。',
      note: '核心义：促进。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to facilitate before the office closed.', chinese: '他们同意在办公室关门前做这件事：促进。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'facilitate.s1', en: 'The deadline forced the team to facilitate that afternoon.', zh: '截止日期逼着小组在那天下午促进。', structure: 'facilitate / 表示 / 促进', grammar: 'verb，围绕「促进」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She facilitateed it yesterday without checking the real past form.', right: 'Check the past form of "facilitate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 facilitate 是verb，再套「促进」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'facilitate.q1', senseId: 'facilitate.s1', errorType: 'meaning', type: '词义选择', prompt: '「facilitate」在本条的核心意思是：', options: ['促进', '完全相反的意思', '一种古代钱币'], answer: '促进', explain: 'facilitate：促进。' },
      { id: 'facilitate.q2', senseId: 'facilitate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches facilitate?', options: ['促进', 'a kind of ancient coin', 'the past tense of be'], answer: '促进', explain: '对的是「促进」。' },
      { id: 'facilitate.q3', senseId: 'facilitate.s1', errorType: 'grammar', type: '词义选择', prompt: 'facilitate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'facilitate.q4', senseId: 'facilitate.s1', errorType: 'meaning', type: '词源', prompt: '记 facilitate 时，哪句更稳妥？', options: ['先锁住「促进」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「促进」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['促进'] },
  });

  D('facilities', {
    etymology: {
      origin: '现代英语常用词「facilities」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'facilities', gloss: '设施' },
      suffix: null,
      history: [
        { label: 'facilities', text: '现代英语常用词「facilities」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：设施。' },
      ],
      formationLogic: '核心义：设施。',
      mnemonic: '看到 facilities，先说出「设施」。',
      note: '核心义：设施。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one facilities.', chinese: '这一章反复回到同一个点：设施。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'facilities.s1', en: 'Without that facilities, the next paragraph is hard to follow.', zh: '没有这个设施，下一段会很难读。', structure: 'facilities / 表示 / 设施', grammar: 'noun，围绕「设施」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the facilities.', right: 'He gave me some advice about the facilities.', reason: 'advice 不可数。名词 facilities 的单复数按词典词形记。', rule: '先确定 facilities 是noun，再套「设施」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'facilities.q1', senseId: 'facilities.s1', errorType: 'meaning', type: '词义选择', prompt: '「facilities」在本条的核心意思是：', options: ['设施', '完全相反的意思', '一种古代钱币'], answer: '设施', explain: 'facilities：设施。' },
      { id: 'facilities.q2', senseId: 'facilities.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches facilities?', options: ['设施', 'a kind of ancient coin', 'the past tense of be'], answer: '设施', explain: '对的是「设施」。' },
      { id: 'facilities.q3', senseId: 'facilities.s1', errorType: 'grammar', type: '词义选择', prompt: 'facilities 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'facilities.q4', senseId: 'facilities.s1', errorType: 'meaning', type: '词源', prompt: '记 facilities 时，哪句更稳妥？', options: ['先锁住「设施」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设施」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设施'] },
  });

  D('facility', {
    etymology: {
      origin: '英语派生：facil + -ity，词性转到「设施」。',
      prefix: null,
      root: { text: 'facil', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'facility', text: '英语派生：facil + -ity，词性转到「设施」。' },
        { label: '现在', text: '核心用法是：设施。' },
      ],
      formationLogic: '先认词干 facil，再看词尾。',
      mnemonic: '看到 facility，先说出「设施」。',
      note: '先认词干 facil，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one facility.', chinese: '这一章反复回到同一个点：设施。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'facility.s1', en: 'Without that facility, the next paragraph is hard to follow.', zh: '没有这个设施，下一段会很难读。', structure: 'facility / 表示 / 设施', grammar: 'noun，围绕「设施」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the facility.', right: 'He gave me some advice about the facility.', reason: 'advice 不可数。名词 facility 的单复数按词典词形记。', rule: '先确定 facility 是noun，再套「设施」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'facility.q1', senseId: 'facility.s1', errorType: 'meaning', type: '词义选择', prompt: '「facility」在本条的核心意思是：', options: ['设施', '完全相反的意思', '一种古代钱币'], answer: '设施', explain: 'facility：设施。' },
      { id: 'facility.q2', senseId: 'facility.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches facility?', options: ['设施', 'a kind of ancient coin', 'the past tense of be'], answer: '设施', explain: '对的是「设施」。' },
      { id: 'facility.q3', senseId: 'facility.s1', errorType: 'grammar', type: '词义选择', prompt: 'facility 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'facility.q4', senseId: 'facility.s1', errorType: 'meaning', type: '词源', prompt: '记 facility 时，哪句更稳妥？', options: ['先锁住「设施」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设施」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设施'] },
  });

  D('facing', {
    etymology: {
      origin: '英语派生：fac + -ing，词性转到「面对」。',
      prefix: null,
      root: { text: 'fac', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'facing', text: '英语派生：fac + -ing，词性转到「面对」。' },
        { label: '现在', text: '核心用法是：面对。' },
      ],
      formationLogic: '先认词干 fac，再看词尾。',
      mnemonic: '看到 facing，先说出「面对」。',
      note: '先认词干 fac，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to facing before the office closed.', chinese: '他们同意在办公室关门前做这件事：面对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'facing.s1', en: 'The deadline forced the team to facing that afternoon.', zh: '截止日期逼着小组在那天下午面对。', structure: 'facing / 表示 / 面对', grammar: 'verb，围绕「面对」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She facinged it yesterday without checking the real past form.', right: 'Check the past form of "facing" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 facing 是verb，再套「面对」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'facing.q1', senseId: 'facing.s1', errorType: 'meaning', type: '词义选择', prompt: '「facing」在本条的核心意思是：', options: ['面对', '完全相反的意思', '一种古代钱币'], answer: '面对', explain: 'facing：面对。' },
      { id: 'facing.q2', senseId: 'facing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches facing?', options: ['面对', 'a kind of ancient coin', 'the past tense of be'], answer: '面对', explain: '对的是「面对」。' },
      { id: 'facing.q3', senseId: 'facing.s1', errorType: 'grammar', type: '词义选择', prompt: 'facing 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'facing.q4', senseId: 'facing.s1', errorType: 'meaning', type: '词源', prompt: '记 facing 时，哪句更稳妥？', options: ['先锁住「面对」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面对」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面对'] },
  });

  D('fact', {
    etymology: {
      origin: '现代英语常用词「fact」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fact', gloss: '事实' },
      suffix: null,
      history: [
        { label: 'fact', text: '现代英语常用词「fact」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：事实。' },
      ],
      formationLogic: '核心义：事实。',
      mnemonic: '看到 fact，先说出「事实」。',
      note: '核心义：事实。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fact.', chinese: '这一章反复回到同一个点：事实。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fact.s1', en: 'Without that fact, the next paragraph is hard to follow.', zh: '没有这个事实，下一段会很难读。', structure: 'fact / 表示 / 事实', grammar: 'noun，围绕「事实」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fact.', right: 'He gave me some advice about the fact.', reason: 'advice 不可数。名词 fact 的单复数按词典词形记。', rule: '先确定 fact 是noun，再套「事实」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fact.q1', senseId: 'fact.s1', errorType: 'meaning', type: '词义选择', prompt: '「fact」在本条的核心意思是：', options: ['事实', '完全相反的意思', '一种古代钱币'], answer: '事实', explain: 'fact：事实。' },
      { id: 'fact.q2', senseId: 'fact.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fact?', options: ['事实', 'a kind of ancient coin', 'the past tense of be'], answer: '事实', explain: '对的是「事实」。' },
      { id: 'fact.q3', senseId: 'fact.s1', errorType: 'grammar', type: '词义选择', prompt: 'fact 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fact.q4', senseId: 'fact.s1', errorType: 'meaning', type: '词源', prompt: '记 fact 时，哪句更稳妥？', options: ['先锁住「事实」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「事实」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['事实'] },
  });

  D('faction', {
    etymology: {
      origin: '英语派生：fac + -tion，词性转到「派系」。',
      prefix: null,
      root: { text: 'fac', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'faction', text: '英语派生：fac + -tion，词性转到「派系」。' },
        { label: '现在', text: '核心用法是：派系。' },
      ],
      formationLogic: '先认词干 fac，再看词尾。',
      mnemonic: '看到 faction，先说出「派系」。',
      note: '先认词干 fac，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one faction.', chinese: '这一章反复回到同一个点：派系。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faction.s1', en: 'Without that faction, the next paragraph is hard to follow.', zh: '没有这个派系，下一段会很难读。', structure: 'faction / 表示 / 派系', grammar: 'noun，围绕「派系」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the faction.', right: 'He gave me some advice about the faction.', reason: 'advice 不可数。名词 faction 的单复数按词典词形记。', rule: '先确定 faction 是noun，再套「派系」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faction.q1', senseId: 'faction.s1', errorType: 'meaning', type: '词义选择', prompt: '「faction」在本条的核心意思是：', options: ['派系', '完全相反的意思', '一种古代钱币'], answer: '派系', explain: 'faction：派系。' },
      { id: 'faction.q2', senseId: 'faction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faction?', options: ['派系', 'a kind of ancient coin', 'the past tense of be'], answer: '派系', explain: '对的是「派系」。' },
      { id: 'faction.q3', senseId: 'faction.s1', errorType: 'grammar', type: '词义选择', prompt: 'faction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'faction.q4', senseId: 'faction.s1', errorType: 'meaning', type: '词源', prompt: '记 faction 时，哪句更稳妥？', options: ['先锁住「派系」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「派系」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['派系'] },
  });

  D('factor', {
    etymology: {
      origin: '英语派生：fact + -or，词性转到「因素」。',
      prefix: null,
      root: { text: 'fact', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'factor', text: '英语派生：fact + -or，词性转到「因素」。' },
        { label: '现在', text: '核心用法是：因素。' },
      ],
      formationLogic: '先认词干 fact，再看词尾。',
      mnemonic: '看到 factor，先说出「因素」。',
      note: '先认词干 fact，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one factor.', chinese: '这一章反复回到同一个点：因素。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'factor.s1', en: 'Without that factor, the next paragraph is hard to follow.', zh: '没有这个因素，下一段会很难读。', structure: 'factor / 表示 / 因素', grammar: 'noun，围绕「因素」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the factor.', right: 'He gave me some advice about the factor.', reason: 'advice 不可数。名词 factor 的单复数按词典词形记。', rule: '先确定 factor 是noun，再套「因素」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'factor.q1', senseId: 'factor.s1', errorType: 'meaning', type: '词义选择', prompt: '「factor」在本条的核心意思是：', options: ['因素', '完全相反的意思', '一种古代钱币'], answer: '因素', explain: 'factor：因素。' },
      { id: 'factor.q2', senseId: 'factor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches factor?', options: ['因素', 'a kind of ancient coin', 'the past tense of be'], answer: '因素', explain: '对的是「因素」。' },
      { id: 'factor.q3', senseId: 'factor.s1', errorType: 'grammar', type: '词义选择', prompt: 'factor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'factor.q4', senseId: 'factor.s1', errorType: 'meaning', type: '词源', prompt: '记 factor 时，哪句更稳妥？', options: ['先锁住「因素」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「因素」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['因素'] },
  });

  D('factory', {
    etymology: {
      origin: '现代英语常用词「factory」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'factory', gloss: '工厂' },
      suffix: null,
      history: [
        { label: 'factory', text: '现代英语常用词「factory」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：工厂。' },
      ],
      formationLogic: '核心义：工厂。',
      mnemonic: '看到 factory，先说出「工厂」。',
      note: '核心义：工厂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one factory.', chinese: '这一章反复回到同一个点：工厂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'factory.s1', en: 'Without that factory, the next paragraph is hard to follow.', zh: '没有这个工厂，下一段会很难读。', structure: 'factory / 表示 / 工厂', grammar: 'noun，围绕「工厂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the factory.', right: 'He gave me some advice about the factory.', reason: 'advice 不可数。名词 factory 的单复数按词典词形记。', rule: '先确定 factory 是noun，再套「工厂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'factory.q1', senseId: 'factory.s1', errorType: 'meaning', type: '词义选择', prompt: '「factory」在本条的核心意思是：', options: ['工厂', '完全相反的意思', '一种古代钱币'], answer: '工厂', explain: 'factory：工厂。' },
      { id: 'factory.q2', senseId: 'factory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches factory?', options: ['工厂', 'a kind of ancient coin', 'the past tense of be'], answer: '工厂', explain: '对的是「工厂」。' },
      { id: 'factory.q3', senseId: 'factory.s1', errorType: 'grammar', type: '词义选择', prompt: 'factory 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'factory.q4', senseId: 'factory.s1', errorType: 'meaning', type: '词源', prompt: '记 factory 时，哪句更稳妥？', options: ['先锁住「工厂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「工厂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['工厂'] },
  });

  D('faculty', {
    etymology: {
      origin: '现代英语常用词「faculty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'faculty', gloss: '才能' },
      suffix: null,
      history: [
        { label: 'faculty', text: '现代英语常用词「faculty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：才能。' },
      ],
      formationLogic: '核心义：才能。',
      mnemonic: '看到 faculty，先说出「才能」。',
      note: '核心义：才能。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one faculty.', chinese: '这一章反复回到同一个点：才能。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faculty.s1', en: 'Without that faculty, the next paragraph is hard to follow.', zh: '没有这个才能，下一段会很难读。', structure: 'faculty / 表示 / 才能', grammar: 'noun，围绕「才能」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the faculty.', right: 'He gave me some advice about the faculty.', reason: 'advice 不可数。名词 faculty 的单复数按词典词形记。', rule: '先确定 faculty 是noun，再套「才能」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faculty.q1', senseId: 'faculty.s1', errorType: 'meaning', type: '词义选择', prompt: '「faculty」在本条的核心意思是：', options: ['才能', '完全相反的意思', '一种古代钱币'], answer: '才能', explain: 'faculty：才能。' },
      { id: 'faculty.q2', senseId: 'faculty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faculty?', options: ['才能', 'a kind of ancient coin', 'the past tense of be'], answer: '才能', explain: '对的是「才能」。' },
      { id: 'faculty.q3', senseId: 'faculty.s1', errorType: 'grammar', type: '词义选择', prompt: 'faculty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'faculty.q4', senseId: 'faculty.s1', errorType: 'meaning', type: '词源', prompt: '记 faculty 时，哪句更稳妥？', options: ['先锁住「才能」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「才能」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['才能'] },
  });

  D('fad', {
    etymology: {
      origin: '现代英语常用词「fad」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fad', gloss: '一时风尚' },
      suffix: null,
      history: [
        { label: 'fad', text: '现代英语常用词「fad」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一时风尚。' },
      ],
      formationLogic: '核心义：一时风尚。',
      mnemonic: '看到 fad，先说出「一时风尚」。',
      note: '核心义：一时风尚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fad.', chinese: '这一章反复回到同一个点：一时风尚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fad.s1', en: 'Without that fad, the next paragraph is hard to follow.', zh: '没有这个一时风尚，下一段会很难读。', structure: 'fad / 表示 / 一时风尚', grammar: 'noun，围绕「一时风尚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fad.', right: 'He gave me some advice about the fad.', reason: 'advice 不可数。名词 fad 的单复数按词典词形记。', rule: '先确定 fad 是noun，再套「一时风尚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fad.q1', senseId: 'fad.s1', errorType: 'meaning', type: '词义选择', prompt: '「fad」在本条的核心意思是：', options: ['一时风尚', '完全相反的意思', '一种古代钱币'], answer: '一时风尚', explain: 'fad：一时风尚。' },
      { id: 'fad.q2', senseId: 'fad.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fad?', options: ['一时风尚', 'a kind of ancient coin', 'the past tense of be'], answer: '一时风尚', explain: '对的是「一时风尚」。' },
      { id: 'fad.q3', senseId: 'fad.s1', errorType: 'grammar', type: '词义选择', prompt: 'fad 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fad.q4', senseId: 'fad.s1', errorType: 'meaning', type: '词源', prompt: '记 fad 时，哪句更稳妥？', options: ['先锁住「一时风尚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一时风尚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一时风尚'] },
  });

  D('fade', {
    etymology: {
      origin: '现代英语常用词「fade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fade', gloss: '褪色' },
      suffix: null,
      history: [
        { label: 'fade', text: '现代英语常用词「fade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：褪色。' },
      ],
      formationLogic: '核心义：褪色。',
      mnemonic: '看到 fade，先说出「褪色」。',
      note: '核心义：褪色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fade before the office closed.', chinese: '他们同意在办公室关门前做这件事：褪色。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fade.s1', en: 'The deadline forced the team to fade that afternoon.', zh: '截止日期逼着小组在那天下午褪色。', structure: 'fade / 表示 / 褪色', grammar: 'verb，围绕「褪色」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fadeed it yesterday without checking the real past form.', right: 'Check the past form of "fade" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fade 是verb，再套「褪色」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fade.q1', senseId: 'fade.s1', errorType: 'meaning', type: '词义选择', prompt: '「fade」在本条的核心意思是：', options: ['褪色', '完全相反的意思', '一种古代钱币'], answer: '褪色', explain: 'fade：褪色。' },
      { id: 'fade.q2', senseId: 'fade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fade?', options: ['褪色', 'a kind of ancient coin', 'the past tense of be'], answer: '褪色', explain: '对的是「褪色」。' },
      { id: 'fade.q3', senseId: 'fade.s1', errorType: 'grammar', type: '词义选择', prompt: 'fade 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fade.q4', senseId: 'fade.s1', errorType: 'meaning', type: '词源', prompt: '记 fade 时，哪句更稳妥？', options: ['先锁住「褪色」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「褪色」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['褪色'] },
  });

  D('fail', {
    etymology: {
      origin: '现代英语常用词「fail」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fail', gloss: '失败' },
      suffix: null,
      history: [
        { label: 'fail', text: '现代英语常用词「fail」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：失败。' },
      ],
      formationLogic: '核心义：失败。',
      mnemonic: '看到 fail，先说出「失败」。',
      note: '核心义：失败。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fail before the office closed.', chinese: '他们同意在办公室关门前做这件事：失败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fail.s1', en: 'The deadline forced the team to fail that afternoon.', zh: '截止日期逼着小组在那天下午失败。', structure: 'fail / 表示 / 失败', grammar: 'verb，围绕「失败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She failed it yesterday without checking the real past form.', right: 'Check the past form of "fail" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fail 是verb，再套「失败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fail.q1', senseId: 'fail.s1', errorType: 'meaning', type: '词义选择', prompt: '「fail」在本条的核心意思是：', options: ['失败', '完全相反的意思', '一种古代钱币'], answer: '失败', explain: 'fail：失败。' },
      { id: 'fail.q2', senseId: 'fail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fail?', options: ['失败', 'a kind of ancient coin', 'the past tense of be'], answer: '失败', explain: '对的是「失败」。' },
      { id: 'fail.q3', senseId: 'fail.s1', errorType: 'grammar', type: '词义选择', prompt: 'fail 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fail.q4', senseId: 'fail.s1', errorType: 'meaning', type: '词源', prompt: '记 fail 时，哪句更稳妥？', options: ['先锁住「失败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「失败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['失败'] },
  });

  D('failure', {
    etymology: {
      origin: '现代英语常用词「failure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'failure', gloss: '失败' },
      suffix: null,
      history: [
        { label: 'failure', text: '现代英语常用词「failure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：失败。' },
      ],
      formationLogic: '核心义：失败。',
      mnemonic: '看到 failure，先说出「失败」。',
      note: '核心义：失败。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one failure.', chinese: '这一章反复回到同一个点：失败。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'failure.s1', en: 'Without that failure, the next paragraph is hard to follow.', zh: '没有这个失败，下一段会很难读。', structure: 'failure / 表示 / 失败', grammar: 'noun，围绕「失败」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the failure.', right: 'He gave me some advice about the failure.', reason: 'advice 不可数。名词 failure 的单复数按词典词形记。', rule: '先确定 failure 是noun，再套「失败」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'failure.q1', senseId: 'failure.s1', errorType: 'meaning', type: '词义选择', prompt: '「failure」在本条的核心意思是：', options: ['失败', '完全相反的意思', '一种古代钱币'], answer: '失败', explain: 'failure：失败。' },
      { id: 'failure.q2', senseId: 'failure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches failure?', options: ['失败', 'a kind of ancient coin', 'the past tense of be'], answer: '失败', explain: '对的是「失败」。' },
      { id: 'failure.q3', senseId: 'failure.s1', errorType: 'grammar', type: '词义选择', prompt: 'failure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'failure.q4', senseId: 'failure.s1', errorType: 'meaning', type: '词源', prompt: '记 failure 时，哪句更稳妥？', options: ['先锁住「失败」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「失败」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['失败'] },
  });

  D('faint', {
    etymology: {
      origin: '现代英语常用词「faint」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'faint', gloss: '微弱的' },
      suffix: null,
      history: [
        { label: 'faint', text: '现代英语常用词「faint」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：微弱的。' },
      ],
      formationLogic: '核心义：微弱的。',
      mnemonic: '看到 faint，先说出「微弱的」。',
      note: '核心义：微弱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was faint.', chinese: '即使是初读者也能看出，这个结果是微弱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faint.s1', en: 'They wanted a faint answer, not a long speech.', zh: '他们要一个微弱的的答复，不要长篇发言。', structure: 'faint / 表示 / 微弱的', grammar: 'adjective，围绕「微弱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are faint.', right: 'The news is faint.', reason: 'news 作主语时动词用单数。', rule: '先确定 faint 是adjective，再套「微弱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faint.q1', senseId: 'faint.s1', errorType: 'meaning', type: '词义选择', prompt: '「faint」在本条的核心意思是：', options: ['微弱的', '完全相反的意思', '一种古代钱币'], answer: '微弱的', explain: 'faint：微弱的。' },
      { id: 'faint.q2', senseId: 'faint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faint?', options: ['微弱的', 'a kind of ancient coin', 'the past tense of be'], answer: '微弱的', explain: '对的是「微弱的」。' },
      { id: 'faint.q3', senseId: 'faint.s1', errorType: 'grammar', type: '词义选择', prompt: 'faint 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'faint.q4', senseId: 'faint.s1', errorType: 'meaning', type: '词源', prompt: '记 faint 时，哪句更稳妥？', options: ['先锁住「微弱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「微弱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['微弱的'] },
  });

  D('fair', {
    etymology: {
      origin: '现代英语常用词「fair」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fair', gloss: '公平的' },
      suffix: null,
      history: [
        { label: 'fair', text: '现代英语常用词「fair」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：公平的。' },
      ],
      formationLogic: '核心义：公平的。',
      mnemonic: '看到 fair，先说出「公平的」。',
      note: '核心义：公平的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fair.', chinese: '即使是初读者也能看出，这个结果是公平的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fair.s1', en: 'They wanted a fair answer, not a long speech.', zh: '他们要一个公平的的答复，不要长篇发言。', structure: 'fair / 表示 / 公平的', grammar: 'adjective，围绕「公平的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fair.', right: 'The news is fair.', reason: 'news 作主语时动词用单数。', rule: '先确定 fair 是adjective，再套「公平的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fair.q1', senseId: 'fair.s1', errorType: 'meaning', type: '词义选择', prompt: '「fair」在本条的核心意思是：', options: ['公平的', '完全相反的意思', '一种古代钱币'], answer: '公平的', explain: 'fair：公平的。' },
      { id: 'fair.q2', senseId: 'fair.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fair?', options: ['公平的', 'a kind of ancient coin', 'the past tense of be'], answer: '公平的', explain: '对的是「公平的」。' },
      { id: 'fair.q3', senseId: 'fair.s1', errorType: 'grammar', type: '词义选择', prompt: 'fair 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fair.q4', senseId: 'fair.s1', errorType: 'meaning', type: '词源', prompt: '记 fair 时，哪句更稳妥？', options: ['先锁住「公平的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公平的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公平的'] },
  });

  D('fair-skinned', {
    etymology: {
      origin: '现代英语常用词「fair-skinned」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fair-skinned', gloss: '白皮肤的' },
      suffix: null,
      history: [
        { label: 'fair-skinned', text: '现代英语常用词「fair-skinned」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：白皮肤的。' },
      ],
      formationLogic: '核心义：白皮肤的。',
      mnemonic: '看到 fair-skinned，先说出「白皮肤的」。',
      note: '核心义：白皮肤的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fair-skinned.', chinese: '即使是初读者也能看出，这个结果是白皮肤的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fair-skinned.s1', en: 'They wanted a fair-skinned answer, not a long speech.', zh: '他们要一个白皮肤的的答复，不要长篇发言。', structure: 'fair-skinned / 表示 / 白皮肤的', grammar: 'adjective，围绕「白皮肤的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fair-skinned.', right: 'The news is fair-skinned.', reason: 'news 作主语时动词用单数。', rule: '先确定 fair-skinned 是adjective，再套「白皮肤的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fair-skinned.q1', senseId: 'fair-skinned.s1', errorType: 'meaning', type: '词义选择', prompt: '「fair-skinned」在本条的核心意思是：', options: ['白皮肤的', '完全相反的意思', '一种古代钱币'], answer: '白皮肤的', explain: 'fair-skinned：白皮肤的。' },
      { id: 'fair-skinned.q2', senseId: 'fair-skinned.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fair-skinned?', options: ['白皮肤的', 'a kind of ancient coin', 'the past tense of be'], answer: '白皮肤的', explain: '对的是「白皮肤的」。' },
      { id: 'fair-skinned.q3', senseId: 'fair-skinned.s1', errorType: 'grammar', type: '词义选择', prompt: 'fair-skinned 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fair-skinned.q4', senseId: 'fair-skinned.s1', errorType: 'meaning', type: '词源', prompt: '记 fair-skinned 时，哪句更稳妥？', options: ['先锁住「白皮肤的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「白皮肤的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['白皮肤的'] },
  });

  D('fairly', {
    etymology: {
      origin: '英语派生：fair + -ly，词性转到「相当」。',
      prefix: null,
      root: { text: 'fair', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fairly', text: '英语派生：fair + -ly，词性转到「相当」。' },
        { label: '现在', text: '核心用法是：相当。' },
      ],
      formationLogic: '先认词干 fair，再看词尾。',
      mnemonic: '看到 fairly，先说出「相当」。',
      note: '先认词干 fair，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule fairly, and the class followed.', chinese: '她把规则讲清楚了（相当），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fairly.s1', en: 'He nodded fairly and returned to the notes.', zh: '他相当地点了点头，又回去看笔记。', structure: 'fairly / 表示 / 相当', grammar: 'adverb，围绕「相当」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very fairlyly in the meeting.', right: 'She spoke fairly in the meeting.', reason: 'fairly 已经是副词，不要再加 -ly。', rule: '先确定 fairly 是adverb，再套「相当」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fairly.q1', senseId: 'fairly.s1', errorType: 'meaning', type: '词义选择', prompt: '「fairly」在本条的核心意思是：', options: ['相当', '完全相反的意思', '一种古代钱币'], answer: '相当', explain: 'fairly：相当。' },
      { id: 'fairly.q2', senseId: 'fairly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fairly?', options: ['相当', 'a kind of ancient coin', 'the past tense of be'], answer: '相当', explain: '对的是「相当」。' },
      { id: 'fairly.q3', senseId: 'fairly.s1', errorType: 'grammar', type: '词义选择', prompt: 'fairly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'fairly.q4', senseId: 'fairly.s1', errorType: 'meaning', type: '词源', prompt: '记 fairly 时，哪句更稳妥？', options: ['先锁住「相当」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相当」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相当'] },
  });

  D('fairness', {
    etymology: {
      origin: '英语派生：fair + -ness，词性转到「公平」。',
      prefix: null,
      root: { text: 'fair', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fairness', text: '英语派生：fair + -ness，词性转到「公平」。' },
        { label: '现在', text: '核心用法是：公平。' },
      ],
      formationLogic: '先认词干 fair，再看词尾。',
      mnemonic: '看到 fairness，先说出「公平」。',
      note: '先认词干 fair，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fairness.', chinese: '这一章反复回到同一个点：公平。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fairness.s1', en: 'Without that fairness, the next paragraph is hard to follow.', zh: '没有这个公平，下一段会很难读。', structure: 'fairness / 表示 / 公平', grammar: 'noun，围绕「公平」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fairness.', right: 'He gave me some advice about the fairness.', reason: 'advice 不可数。名词 fairness 的单复数按词典词形记。', rule: '先确定 fairness 是noun，再套「公平」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fairness.q1', senseId: 'fairness.s1', errorType: 'meaning', type: '词义选择', prompt: '「fairness」在本条的核心意思是：', options: ['公平', '完全相反的意思', '一种古代钱币'], answer: '公平', explain: 'fairness：公平。' },
      { id: 'fairness.q2', senseId: 'fairness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fairness?', options: ['公平', 'a kind of ancient coin', 'the past tense of be'], answer: '公平', explain: '对的是「公平」。' },
      { id: 'fairness.q3', senseId: 'fairness.s1', errorType: 'grammar', type: '词义选择', prompt: 'fairness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fairness.q4', senseId: 'fairness.s1', errorType: 'meaning', type: '词源', prompt: '记 fairness 时，哪句更稳妥？', options: ['先锁住「公平」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公平」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公平'] },
  });

  D('fairy', {
    etymology: {
      origin: '现代英语常用词「fairy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fairy', gloss: '仙女' },
      suffix: null,
      history: [
        { label: 'fairy', text: '现代英语常用词「fairy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：仙女。' },
      ],
      formationLogic: '核心义：仙女。',
      mnemonic: '看到 fairy，先说出「仙女」。',
      note: '核心义：仙女。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fairy.', chinese: '这一章反复回到同一个点：仙女。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fairy.s1', en: 'Without that fairy, the next paragraph is hard to follow.', zh: '没有这个仙女，下一段会很难读。', structure: 'fairy / 表示 / 仙女', grammar: 'noun，围绕「仙女」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fairy.', right: 'He gave me some advice about the fairy.', reason: 'advice 不可数。名词 fairy 的单复数按词典词形记。', rule: '先确定 fairy 是noun，再套「仙女」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fairy.q1', senseId: 'fairy.s1', errorType: 'meaning', type: '词义选择', prompt: '「fairy」在本条的核心意思是：', options: ['仙女', '完全相反的意思', '一种古代钱币'], answer: '仙女', explain: 'fairy：仙女。' },
      { id: 'fairy.q2', senseId: 'fairy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fairy?', options: ['仙女', 'a kind of ancient coin', 'the past tense of be'], answer: '仙女', explain: '对的是「仙女」。' },
      { id: 'fairy.q3', senseId: 'fairy.s1', errorType: 'grammar', type: '词义选择', prompt: 'fairy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fairy.q4', senseId: 'fairy.s1', errorType: 'meaning', type: '词源', prompt: '记 fairy 时，哪句更稳妥？', options: ['先锁住「仙女」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「仙女」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仙女'] },
  });

  D('faith', {
    etymology: {
      origin: '现代英语常用词「faith」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'faith', gloss: '信任' },
      suffix: null,
      history: [
        { label: 'faith', text: '现代英语常用词「faith」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：信任。' },
      ],
      formationLogic: '核心义：信任。',
      mnemonic: '看到 faith，先说出「信任」。',
      note: '核心义：信任。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one faith.', chinese: '这一章反复回到同一个点：信任。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faith.s1', en: 'Without that faith, the next paragraph is hard to follow.', zh: '没有这个信任，下一段会很难读。', structure: 'faith / 表示 / 信任', grammar: 'noun，围绕「信任」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the faith.', right: 'He gave me some advice about the faith.', reason: 'advice 不可数。名词 faith 的单复数按词典词形记。', rule: '先确定 faith 是noun，再套「信任」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faith.q1', senseId: 'faith.s1', errorType: 'meaning', type: '词义选择', prompt: '「faith」在本条的核心意思是：', options: ['信任', '完全相反的意思', '一种古代钱币'], answer: '信任', explain: 'faith：信任。' },
      { id: 'faith.q2', senseId: 'faith.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faith?', options: ['信任', 'a kind of ancient coin', 'the past tense of be'], answer: '信任', explain: '对的是「信任」。' },
      { id: 'faith.q3', senseId: 'faith.s1', errorType: 'grammar', type: '词义选择', prompt: 'faith 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'faith.q4', senseId: 'faith.s1', errorType: 'meaning', type: '词源', prompt: '记 faith 时，哪句更稳妥？', options: ['先锁住「信任」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「信任」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['信任'] },
  });

  D('faithful', {
    etymology: {
      origin: '英语派生：faith + -ful，词性转到「忠实的」。',
      prefix: null,
      root: { text: 'faith', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'faithful', text: '英语派生：faith + -ful，词性转到「忠实的」。' },
        { label: '现在', text: '核心用法是：忠实的。' },
      ],
      formationLogic: '先认词干 faith，再看词尾。',
      mnemonic: '看到 faithful，先说出「忠实的」。',
      note: '先认词干 faith，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was faithful.', chinese: '即使是初读者也能看出，这个结果是忠实的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'faithful.s1', en: 'They wanted a faithful answer, not a long speech.', zh: '他们要一个忠实的的答复，不要长篇发言。', structure: 'faithful / 表示 / 忠实的', grammar: 'adjective，围绕「忠实的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are faithful.', right: 'The news is faithful.', reason: 'news 作主语时动词用单数。', rule: '先确定 faithful 是adjective，再套「忠实的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'faithful.q1', senseId: 'faithful.s1', errorType: 'meaning', type: '词义选择', prompt: '「faithful」在本条的核心意思是：', options: ['忠实的', '完全相反的意思', '一种古代钱币'], answer: '忠实的', explain: 'faithful：忠实的。' },
      { id: 'faithful.q2', senseId: 'faithful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches faithful?', options: ['忠实的', 'a kind of ancient coin', 'the past tense of be'], answer: '忠实的', explain: '对的是「忠实的」。' },
      { id: 'faithful.q3', senseId: 'faithful.s1', errorType: 'grammar', type: '词义选择', prompt: 'faithful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'faithful.q4', senseId: 'faithful.s1', errorType: 'meaning', type: '词源', prompt: '记 faithful 时，哪句更稳妥？', options: ['先锁住「忠实的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「忠实的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['忠实的'] },
  });

  D('fake', {
    etymology: {
      origin: '现代英语常用词「fake」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fake', gloss: '假的' },
      suffix: null,
      history: [
        { label: 'fake', text: '现代英语常用词「fake」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：假的。' },
      ],
      formationLogic: '核心义：假的。',
      mnemonic: '看到 fake，先说出「假的」。',
      note: '核心义：假的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fake.', chinese: '即使是初读者也能看出，这个结果是假的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fake.s1', en: 'They wanted a fake answer, not a long speech.', zh: '他们要一个假的的答复，不要长篇发言。', structure: 'fake / 表示 / 假的', grammar: 'adjective，围绕「假的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fake.', right: 'The news is fake.', reason: 'news 作主语时动词用单数。', rule: '先确定 fake 是adjective，再套「假的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fake.q1', senseId: 'fake.s1', errorType: 'meaning', type: '词义选择', prompt: '「fake」在本条的核心意思是：', options: ['假的', '完全相反的意思', '一种古代钱币'], answer: '假的', explain: 'fake：假的。' },
      { id: 'fake.q2', senseId: 'fake.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fake?', options: ['假的', 'a kind of ancient coin', 'the past tense of be'], answer: '假的', explain: '对的是「假的」。' },
      { id: 'fake.q3', senseId: 'fake.s1', errorType: 'grammar', type: '词义选择', prompt: 'fake 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fake.q4', senseId: 'fake.s1', errorType: 'meaning', type: '词源', prompt: '记 fake 时，哪句更稳妥？', options: ['先锁住「假的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「假的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['假的'] },
  });

  D('falcon', {
    etymology: {
      origin: '现代英语常用词「falcon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'falcon', gloss: '猎鹰' },
      suffix: null,
      history: [
        { label: 'falcon', text: '现代英语常用词「falcon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：猎鹰。' },
      ],
      formationLogic: '核心义：猎鹰。',
      mnemonic: '看到 falcon，先说出「猎鹰」。',
      note: '核心义：猎鹰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one falcon.', chinese: '这一章反复回到同一个点：猎鹰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'falcon.s1', en: 'Without that falcon, the next paragraph is hard to follow.', zh: '没有这个猎鹰，下一段会很难读。', structure: 'falcon / 表示 / 猎鹰', grammar: 'noun，围绕「猎鹰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the falcon.', right: 'He gave me some advice about the falcon.', reason: 'advice 不可数。名词 falcon 的单复数按词典词形记。', rule: '先确定 falcon 是noun，再套「猎鹰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'falcon.q1', senseId: 'falcon.s1', errorType: 'meaning', type: '词义选择', prompt: '「falcon」在本条的核心意思是：', options: ['猎鹰', '完全相反的意思', '一种古代钱币'], answer: '猎鹰', explain: 'falcon：猎鹰。' },
      { id: 'falcon.q2', senseId: 'falcon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches falcon?', options: ['猎鹰', 'a kind of ancient coin', 'the past tense of be'], answer: '猎鹰', explain: '对的是「猎鹰」。' },
      { id: 'falcon.q3', senseId: 'falcon.s1', errorType: 'grammar', type: '词义选择', prompt: 'falcon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'falcon.q4', senseId: 'falcon.s1', errorType: 'meaning', type: '词源', prompt: '记 falcon 时，哪句更稳妥？', options: ['先锁住「猎鹰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「猎鹰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['猎鹰'] },
  });

  D('fall', {
    etymology: {
      origin: '现代英语常用词「fall」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fall', gloss: '落下' },
      suffix: null,
      history: [
        { label: 'fall', text: '现代英语常用词「fall」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：落下。' },
      ],
      formationLogic: '核心义：落下。',
      mnemonic: '看到 fall，先说出「落下」。',
      note: '核心义：落下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to fall before the office closed.', chinese: '他们同意在办公室关门前做这件事：落下。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fall.s1', en: 'The deadline forced the team to fall that afternoon.', zh: '截止日期逼着小组在那天下午落下。', structure: 'fall / 表示 / 落下', grammar: 'verb，围绕「落下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She falled it yesterday without checking the real past form.', right: 'Check the past form of "fall" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 fall 是verb，再套「落下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fall.q1', senseId: 'fall.s1', errorType: 'meaning', type: '词义选择', prompt: '「fall」在本条的核心意思是：', options: ['落下', '完全相反的意思', '一种古代钱币'], answer: '落下', explain: 'fall：落下。' },
      { id: 'fall.q2', senseId: 'fall.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fall?', options: ['落下', 'a kind of ancient coin', 'the past tense of be'], answer: '落下', explain: '对的是「落下」。' },
      { id: 'fall.q3', senseId: 'fall.s1', errorType: 'grammar', type: '词义选择', prompt: 'fall 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fall.q4', senseId: 'fall.s1', errorType: 'meaning', type: '词源', prompt: '记 fall 时，哪句更稳妥？', options: ['先锁住「落下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「落下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['落下'] },
  });

  D('fall back', {
    etymology: {
      origin: '现代英语固定说法「fall back」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fall back', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fall back', text: '现代英语固定说法「fall back」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：退却。' },
      ],
      formationLogic: '核心义：退却。',
      mnemonic: '看到 fall back，先说出「退却」。',
      note: '核心义：退却。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fall back" and asked the class to keep it as one unit.', chinese: '老师把「fall back」圈出来，让全班把它当成一个整体。它表示退却。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fall back.s1', en: 'In the margin she wrote "fall back" so nobody would split the phrase.', zh: '她在页边写下「fall back」，免得有人把这个说法拆开。意思是退却。', structure: 'fall back / 表示 / 退却', grammar: 'verb，围绕「退却」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fall back and lost the point.', right: 'Keep "fall back" together: it means 退却.', reason: '「fall back」要整块理解。', rule: '先确定 fall back 是verb，再套「退却」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fall back.q1', senseId: 'fall back.s1', errorType: 'meaning', type: '词义选择', prompt: '「fall back」在本条的核心意思是：', options: ['退却', '完全相反的意思', '一种古代钱币'], answer: '退却', explain: 'fall back：退却。' },
      { id: 'fall back.q2', senseId: 'fall back.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fall back?', options: ['退却', 'a kind of ancient coin', 'the past tense of be'], answer: '退却', explain: '对的是「退却」。' },
      { id: 'fall back.q3', senseId: 'fall back.s1', errorType: 'grammar', type: '词义选择', prompt: 'fall back 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fall back.q4', senseId: 'fall back.s1', errorType: 'meaning', type: '词源', prompt: '记 fall back 时，哪句更稳妥？', options: ['先锁住「退却」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「退却」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['退却'] },
  });

  D('fall back on', {
    etymology: {
      origin: '现代英语固定说法「fall back on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fall back on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fall back on', text: '现代英语固定说法「fall back on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：求助于。' },
      ],
      formationLogic: '核心义：求助于。',
      mnemonic: '看到 fall back on，先说出「求助于」。',
      note: '核心义：求助于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fall back on" and asked the class to keep it as one unit.', chinese: '老师把「fall back on」圈出来，让全班把它当成一个整体。它表示求助于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fall back on.s1', en: 'In the margin she wrote "fall back on" so nobody would split the phrase.', zh: '她在页边写下「fall back on」，免得有人把这个说法拆开。意思是求助于。', structure: 'fall back on / 表示 / 求助于', grammar: 'verb，围绕「求助于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fall back on and lost the point.', right: 'Keep "fall back on" together: it means 求助于.', reason: '「fall back on」要整块理解。', rule: '先确定 fall back on 是verb，再套「求助于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fall back on.q1', senseId: 'fall back on.s1', errorType: 'meaning', type: '词义选择', prompt: '「fall back on」在本条的核心意思是：', options: ['求助于', '完全相反的意思', '一种古代钱币'], answer: '求助于', explain: 'fall back on：求助于。' },
      { id: 'fall back on.q2', senseId: 'fall back on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fall back on?', options: ['求助于', 'a kind of ancient coin', 'the past tense of be'], answer: '求助于', explain: '对的是「求助于」。' },
      { id: 'fall back on.q3', senseId: 'fall back on.s1', errorType: 'grammar', type: '词义选择', prompt: 'fall back on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fall back on.q4', senseId: 'fall back on.s1', errorType: 'meaning', type: '词源', prompt: '记 fall back on 时，哪句更稳妥？', options: ['先锁住「求助于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「求助于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['求助于'] },
  });

  D('fall behind', {
    etymology: {
      origin: '现代英语固定说法「fall behind」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fall behind', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fall behind', text: '现代英语固定说法「fall behind」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：落后。' },
      ],
      formationLogic: '核心义：落后。',
      mnemonic: '看到 fall behind，先说出「落后」。',
      note: '核心义：落后。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fall behind" and asked the class to keep it as one unit.', chinese: '老师把「fall behind」圈出来，让全班把它当成一个整体。它表示落后。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fall behind.s1', en: 'In the margin she wrote "fall behind" so nobody would split the phrase.', zh: '她在页边写下「fall behind」，免得有人把这个说法拆开。意思是落后。', structure: 'fall behind / 表示 / 落后', grammar: 'verb，围绕「落后」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fall behind and lost the point.', right: 'Keep "fall behind" together: it means 落后.', reason: '「fall behind」要整块理解。', rule: '先确定 fall behind 是verb，再套「落后」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fall behind.q1', senseId: 'fall behind.s1', errorType: 'meaning', type: '词义选择', prompt: '「fall behind」在本条的核心意思是：', options: ['落后', '完全相反的意思', '一种古代钱币'], answer: '落后', explain: 'fall behind：落后。' },
      { id: 'fall behind.q2', senseId: 'fall behind.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fall behind?', options: ['落后', 'a kind of ancient coin', 'the past tense of be'], answer: '落后', explain: '对的是「落后」。' },
      { id: 'fall behind.q3', senseId: 'fall behind.s1', errorType: 'grammar', type: '词义选择', prompt: 'fall behind 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fall behind.q4', senseId: 'fall behind.s1', errorType: 'meaning', type: '词源', prompt: '记 fall behind 时，哪句更稳妥？', options: ['先锁住「落后」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「落后」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['落后'] },
  });

  D('fall due', {
    etymology: {
      origin: '现代英语固定说法「fall due」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'fall due', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'fall due', text: '现代英语固定说法「fall due」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：到期。' },
      ],
      formationLogic: '核心义：到期。',
      mnemonic: '看到 fall due，先说出「到期」。',
      note: '核心义：到期。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "fall due" and asked the class to keep it as one unit.', chinese: '老师把「fall due」圈出来，让全班把它当成一个整体。它表示到期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fall due.s1', en: 'In the margin she wrote "fall due" so nobody would split the phrase.', zh: '她在页边写下「fall due」，免得有人把这个说法拆开。意思是到期。', structure: 'fall due / 表示 / 到期', grammar: 'verb，围绕「到期」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of fall due and lost the point.', right: 'Keep "fall due" together: it means 到期.', reason: '「fall due」要整块理解。', rule: '先确定 fall due 是verb，再套「到期」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fall due.q1', senseId: 'fall due.s1', errorType: 'meaning', type: '词义选择', prompt: '「fall due」在本条的核心意思是：', options: ['到期', '完全相反的意思', '一种古代钱币'], answer: '到期', explain: 'fall due：到期。' },
      { id: 'fall due.q2', senseId: 'fall due.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fall due?', options: ['到期', 'a kind of ancient coin', 'the past tense of be'], answer: '到期', explain: '对的是「到期」。' },
      { id: 'fall due.q3', senseId: 'fall due.s1', errorType: 'grammar', type: '词义选择', prompt: 'fall due 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'fall due.q4', senseId: 'fall due.s1', errorType: 'meaning', type: '词源', prompt: '记 fall due 时，哪句更稳妥？', options: ['先锁住「到期」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「到期」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['到期'] },
  });

  D('fallacy', {
    etymology: {
      origin: '现代英语常用词「fallacy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fallacy', gloss: '谬论' },
      suffix: null,
      history: [
        { label: 'fallacy', text: '现代英语常用词「fallacy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：谬论。' },
      ],
      formationLogic: '核心义：谬论。',
      mnemonic: '看到 fallacy，先说出「谬论」。',
      note: '核心义：谬论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fallacy.', chinese: '这一章反复回到同一个点：谬论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fallacy.s1', en: 'Without that fallacy, the next paragraph is hard to follow.', zh: '没有这个谬论，下一段会很难读。', structure: 'fallacy / 表示 / 谬论', grammar: 'noun，围绕「谬论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fallacy.', right: 'He gave me some advice about the fallacy.', reason: 'advice 不可数。名词 fallacy 的单复数按词典词形记。', rule: '先确定 fallacy 是noun，再套「谬论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fallacy.q1', senseId: 'fallacy.s1', errorType: 'meaning', type: '词义选择', prompt: '「fallacy」在本条的核心意思是：', options: ['谬论', '完全相反的意思', '一种古代钱币'], answer: '谬论', explain: 'fallacy：谬论。' },
      { id: 'fallacy.q2', senseId: 'fallacy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fallacy?', options: ['谬论', 'a kind of ancient coin', 'the past tense of be'], answer: '谬论', explain: '对的是「谬论」。' },
      { id: 'fallacy.q3', senseId: 'fallacy.s1', errorType: 'grammar', type: '词义选择', prompt: 'fallacy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fallacy.q4', senseId: 'fallacy.s1', errorType: 'meaning', type: '词源', prompt: '记 fallacy 时，哪句更稳妥？', options: ['先锁住「谬论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谬论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谬论'] },
  });

  D('falling', {
    etymology: {
      origin: '英语派生：fall + -ing，词性转到「掉落」。',
      prefix: null,
      root: { text: 'fall', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'falling', text: '英语派生：fall + -ing，词性转到「掉落」。' },
        { label: '现在', text: '核心用法是：掉落。' },
      ],
      formationLogic: '先认词干 fall，再看词尾。',
      mnemonic: '看到 falling，先说出「掉落」。',
      note: '先认词干 fall，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to falling before the office closed.', chinese: '他们同意在办公室关门前做这件事：掉落。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'falling.s1', en: 'The deadline forced the team to falling that afternoon.', zh: '截止日期逼着小组在那天下午掉落。', structure: 'falling / 表示 / 掉落', grammar: 'verb，围绕「掉落」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She fallinged it yesterday without checking the real past form.', right: 'Check the past form of "falling" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 falling 是verb，再套「掉落」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'falling.q1', senseId: 'falling.s1', errorType: 'meaning', type: '词义选择', prompt: '「falling」在本条的核心意思是：', options: ['掉落', '完全相反的意思', '一种古代钱币'], answer: '掉落', explain: 'falling：掉落。' },
      { id: 'falling.q2', senseId: 'falling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches falling?', options: ['掉落', 'a kind of ancient coin', 'the past tense of be'], answer: '掉落', explain: '对的是「掉落」。' },
      { id: 'falling.q3', senseId: 'falling.s1', errorType: 'grammar', type: '词义选择', prompt: 'falling 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'falling.q4', senseId: 'falling.s1', errorType: 'meaning', type: '词源', prompt: '记 falling 时，哪句更稳妥？', options: ['先锁住「掉落」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「掉落」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['掉落'] },
  });

  D('false', {
    etymology: {
      origin: '现代英语常用词「false」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'false', gloss: '错误的' },
      suffix: null,
      history: [
        { label: 'false', text: '现代英语常用词「false」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：错误的。' },
      ],
      formationLogic: '核心义：错误的。',
      mnemonic: '看到 false，先说出「错误的」。',
      note: '核心义：错误的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was false.', chinese: '即使是初读者也能看出，这个结果是错误的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'false.s1', en: 'They wanted a false answer, not a long speech.', zh: '他们要一个错误的的答复，不要长篇发言。', structure: 'false / 表示 / 错误的', grammar: 'adjective，围绕「错误的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are false.', right: 'The news is false.', reason: 'news 作主语时动词用单数。', rule: '先确定 false 是adjective，再套「错误的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'false.q1', senseId: 'false.s1', errorType: 'meaning', type: '词义选择', prompt: '「false」在本条的核心意思是：', options: ['错误的', '完全相反的意思', '一种古代钱币'], answer: '错误的', explain: 'false：错误的。' },
      { id: 'false.q2', senseId: 'false.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches false?', options: ['错误的', 'a kind of ancient coin', 'the past tense of be'], answer: '错误的', explain: '对的是「错误的」。' },
      { id: 'false.q3', senseId: 'false.s1', errorType: 'grammar', type: '词义选择', prompt: 'false 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'false.q4', senseId: 'false.s1', errorType: 'meaning', type: '词源', prompt: '记 false 时，哪句更稳妥？', options: ['先锁住「错误的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「错误的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['错误的'] },
  });

  D('falsehood', {
    etymology: {
      origin: '现代英语常用词「falsehood」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'falsehood', gloss: '谎言' },
      suffix: null,
      history: [
        { label: 'falsehood', text: '现代英语常用词「falsehood」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：谎言。' },
      ],
      formationLogic: '核心义：谎言。',
      mnemonic: '看到 falsehood，先说出「谎言」。',
      note: '核心义：谎言。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one falsehood.', chinese: '这一章反复回到同一个点：谎言。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'falsehood.s1', en: 'Without that falsehood, the next paragraph is hard to follow.', zh: '没有这个谎言，下一段会很难读。', structure: 'falsehood / 表示 / 谎言', grammar: 'noun，围绕「谎言」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the falsehood.', right: 'He gave me some advice about the falsehood.', reason: 'advice 不可数。名词 falsehood 的单复数按词典词形记。', rule: '先确定 falsehood 是noun，再套「谎言」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'falsehood.q1', senseId: 'falsehood.s1', errorType: 'meaning', type: '词义选择', prompt: '「falsehood」在本条的核心意思是：', options: ['谎言', '完全相反的意思', '一种古代钱币'], answer: '谎言', explain: 'falsehood：谎言。' },
      { id: 'falsehood.q2', senseId: 'falsehood.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches falsehood?', options: ['谎言', 'a kind of ancient coin', 'the past tense of be'], answer: '谎言', explain: '对的是「谎言」。' },
      { id: 'falsehood.q3', senseId: 'falsehood.s1', errorType: 'grammar', type: '词义选择', prompt: 'falsehood 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'falsehood.q4', senseId: 'falsehood.s1', errorType: 'meaning', type: '词源', prompt: '记 falsehood 时，哪句更稳妥？', options: ['先锁住「谎言」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谎言」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谎言'] },
  });

  D('falsify', {
    etymology: {
      origin: '现代英语常用词「falsify」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'falsify', gloss: '伪造' },
      suffix: null,
      history: [
        { label: 'falsify', text: '现代英语常用词「falsify」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：伪造。' },
      ],
      formationLogic: '核心义：伪造。',
      mnemonic: '看到 falsify，先说出「伪造」。',
      note: '核心义：伪造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to falsify before the office closed.', chinese: '他们同意在办公室关门前做这件事：伪造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'falsify.s1', en: 'The deadline forced the team to falsify that afternoon.', zh: '截止日期逼着小组在那天下午伪造。', structure: 'falsify / 表示 / 伪造', grammar: 'verb，围绕「伪造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She falsifyed it yesterday without checking the real past form.', right: 'Check the past form of "falsify" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 falsify 是verb，再套「伪造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'falsify.q1', senseId: 'falsify.s1', errorType: 'meaning', type: '词义选择', prompt: '「falsify」在本条的核心意思是：', options: ['伪造', '完全相反的意思', '一种古代钱币'], answer: '伪造', explain: 'falsify：伪造。' },
      { id: 'falsify.q2', senseId: 'falsify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches falsify?', options: ['伪造', 'a kind of ancient coin', 'the past tense of be'], answer: '伪造', explain: '对的是「伪造」。' },
      { id: 'falsify.q3', senseId: 'falsify.s1', errorType: 'grammar', type: '词义选择', prompt: 'falsify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'falsify.q4', senseId: 'falsify.s1', errorType: 'meaning', type: '词源', prompt: '记 falsify 时，哪句更稳妥？', options: ['先锁住「伪造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「伪造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伪造'] },
  });

  D('falter', {
    etymology: {
      origin: '英语派生：falt + -er，词性转到「踌躇」。',
      prefix: null,
      root: { text: 'falt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'falter', text: '英语派生：falt + -er，词性转到「踌躇」。' },
        { label: '现在', text: '核心用法是：踌躇。' },
      ],
      formationLogic: '先认词干 falt，再看词尾。',
      mnemonic: '看到 falter，先说出「踌躇」。',
      note: '先认词干 falt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to falter before the office closed.', chinese: '他们同意在办公室关门前做这件事：踌躇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'falter.s1', en: 'The deadline forced the team to falter that afternoon.', zh: '截止日期逼着小组在那天下午踌躇。', structure: 'falter / 表示 / 踌躇', grammar: 'verb，围绕「踌躇」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She faltered it yesterday without checking the real past form.', right: 'Check the past form of "falter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 falter 是verb，再套「踌躇」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'falter.q1', senseId: 'falter.s1', errorType: 'meaning', type: '词义选择', prompt: '「falter」在本条的核心意思是：', options: ['踌躇', '完全相反的意思', '一种古代钱币'], answer: '踌躇', explain: 'falter：踌躇。' },
      { id: 'falter.q2', senseId: 'falter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches falter?', options: ['踌躇', 'a kind of ancient coin', 'the past tense of be'], answer: '踌躇', explain: '对的是「踌躇」。' },
      { id: 'falter.q3', senseId: 'falter.s1', errorType: 'grammar', type: '词义选择', prompt: 'falter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'falter.q4', senseId: 'falter.s1', errorType: 'meaning', type: '词源', prompt: '记 falter 时，哪句更稳妥？', options: ['先锁住「踌躇」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「踌躇」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['踌躇'] },
  });

  D('fame', {
    etymology: {
      origin: '现代英语常用词「fame」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fame', gloss: '名声' },
      suffix: null,
      history: [
        { label: 'fame', text: '现代英语常用词「fame」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：名声。' },
      ],
      formationLogic: '核心义：名声。',
      mnemonic: '看到 fame，先说出「名声」。',
      note: '核心义：名声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fame.', chinese: '这一章反复回到同一个点：名声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fame.s1', en: 'Without that fame, the next paragraph is hard to follow.', zh: '没有这个名声，下一段会很难读。', structure: 'fame / 表示 / 名声', grammar: 'noun，围绕「名声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fame.', right: 'He gave me some advice about the fame.', reason: 'advice 不可数。名词 fame 的单复数按词典词形记。', rule: '先确定 fame 是noun，再套「名声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fame.q1', senseId: 'fame.s1', errorType: 'meaning', type: '词义选择', prompt: '「fame」在本条的核心意思是：', options: ['名声', '完全相反的意思', '一种古代钱币'], answer: '名声', explain: 'fame：名声。' },
      { id: 'fame.q2', senseId: 'fame.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fame?', options: ['名声', 'a kind of ancient coin', 'the past tense of be'], answer: '名声', explain: '对的是「名声」。' },
      { id: 'fame.q3', senseId: 'fame.s1', errorType: 'grammar', type: '词义选择', prompt: 'fame 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fame.q4', senseId: 'fame.s1', errorType: 'meaning', type: '词源', prompt: '记 fame 时，哪句更稳妥？', options: ['先锁住「名声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「名声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['名声'] },
  });

  D('familiar', {
    etymology: {
      origin: '现代英语常用词「familiar」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'familiar', gloss: '熟悉的' },
      suffix: null,
      history: [
        { label: 'familiar', text: '现代英语常用词「familiar」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：熟悉的。' },
      ],
      formationLogic: '核心义：熟悉的。',
      mnemonic: '看到 familiar，先说出「熟悉的」。',
      note: '核心义：熟悉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was familiar.', chinese: '即使是初读者也能看出，这个结果是熟悉的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'familiar.s1', en: 'They wanted a familiar answer, not a long speech.', zh: '他们要一个熟悉的的答复，不要长篇发言。', structure: 'familiar / 表示 / 熟悉的', grammar: 'adjective，围绕「熟悉的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are familiar.', right: 'The news is familiar.', reason: 'news 作主语时动词用单数。', rule: '先确定 familiar 是adjective，再套「熟悉的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'familiar.q1', senseId: 'familiar.s1', errorType: 'meaning', type: '词义选择', prompt: '「familiar」在本条的核心意思是：', options: ['熟悉的', '完全相反的意思', '一种古代钱币'], answer: '熟悉的', explain: 'familiar：熟悉的。' },
      { id: 'familiar.q2', senseId: 'familiar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches familiar?', options: ['熟悉的', 'a kind of ancient coin', 'the past tense of be'], answer: '熟悉的', explain: '对的是「熟悉的」。' },
      { id: 'familiar.q3', senseId: 'familiar.s1', errorType: 'grammar', type: '词义选择', prompt: 'familiar 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'familiar.q4', senseId: 'familiar.s1', errorType: 'meaning', type: '词源', prompt: '记 familiar 时，哪句更稳妥？', options: ['先锁住「熟悉的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「熟悉的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熟悉的'] },
  });

  D('familiarity', {
    etymology: {
      origin: '英语派生：familiar + -ity，词性转到「熟悉」。',
      prefix: null,
      root: { text: 'familiar', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'familiarity', text: '英语派生：familiar + -ity，词性转到「熟悉」。' },
        { label: '现在', text: '核心用法是：熟悉。' },
      ],
      formationLogic: '先认词干 familiar，再看词尾。',
      mnemonic: '看到 familiarity，先说出「熟悉」。',
      note: '先认词干 familiar，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one familiarity.', chinese: '这一章反复回到同一个点：熟悉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'familiarity.s1', en: 'Without that familiarity, the next paragraph is hard to follow.', zh: '没有这个熟悉，下一段会很难读。', structure: 'familiarity / 表示 / 熟悉', grammar: 'noun，围绕「熟悉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the familiarity.', right: 'He gave me some advice about the familiarity.', reason: 'advice 不可数。名词 familiarity 的单复数按词典词形记。', rule: '先确定 familiarity 是noun，再套「熟悉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'familiarity.q1', senseId: 'familiarity.s1', errorType: 'meaning', type: '词义选择', prompt: '「familiarity」在本条的核心意思是：', options: ['熟悉', '完全相反的意思', '一种古代钱币'], answer: '熟悉', explain: 'familiarity：熟悉。' },
      { id: 'familiarity.q2', senseId: 'familiarity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches familiarity?', options: ['熟悉', 'a kind of ancient coin', 'the past tense of be'], answer: '熟悉', explain: '对的是「熟悉」。' },
      { id: 'familiarity.q3', senseId: 'familiarity.s1', errorType: 'grammar', type: '词义选择', prompt: 'familiarity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'familiarity.q4', senseId: 'familiarity.s1', errorType: 'meaning', type: '词源', prompt: '记 familiarity 时，哪句更稳妥？', options: ['先锁住「熟悉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「熟悉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熟悉'] },
  });

  D('familiarize', {
    etymology: {
      origin: '现代英语常用词「familiarize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'familiarize', gloss: '使熟悉' },
      suffix: null,
      history: [
        { label: 'familiarize', text: '现代英语常用词「familiarize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使熟悉。' },
      ],
      formationLogic: '核心义：使熟悉。',
      mnemonic: '看到 familiarize，先说出「使熟悉」。',
      note: '核心义：使熟悉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to familiarize before the office closed.', chinese: '他们同意在办公室关门前做这件事：使熟悉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'familiarize.s1', en: 'The deadline forced the team to familiarize that afternoon.', zh: '截止日期逼着小组在那天下午使熟悉。', structure: 'familiarize / 表示 / 使熟悉', grammar: 'verb，围绕「使熟悉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She familiarizeed it yesterday without checking the real past form.', right: 'Check the past form of "familiarize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 familiarize 是verb，再套「使熟悉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'familiarize.q1', senseId: 'familiarize.s1', errorType: 'meaning', type: '词义选择', prompt: '「familiarize」在本条的核心意思是：', options: ['使熟悉', '完全相反的意思', '一种古代钱币'], answer: '使熟悉', explain: 'familiarize：使熟悉。' },
      { id: 'familiarize.q2', senseId: 'familiarize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches familiarize?', options: ['使熟悉', 'a kind of ancient coin', 'the past tense of be'], answer: '使熟悉', explain: '对的是「使熟悉」。' },
      { id: 'familiarize.q3', senseId: 'familiarize.s1', errorType: 'grammar', type: '词义选择', prompt: 'familiarize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'familiarize.q4', senseId: 'familiarize.s1', errorType: 'meaning', type: '词源', prompt: '记 familiarize 时，哪句更稳妥？', options: ['先锁住「使熟悉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使熟悉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使熟悉'] },
  });

  D('family', {
    etymology: {
      origin: '英语派生：fami + -ly，词性转到「家庭」。',
      prefix: null,
      root: { text: 'fami', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'family', text: '英语派生：fami + -ly，词性转到「家庭」。' },
        { label: '现在', text: '核心用法是：家庭。' },
      ],
      formationLogic: '先认词干 fami，再看词尾。',
      mnemonic: '看到 family，先说出「家庭」。',
      note: '先认词干 fami，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one family.', chinese: '这一章反复回到同一个点：家庭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'family.s1', en: 'Without that family, the next paragraph is hard to follow.', zh: '没有这个家庭，下一段会很难读。', structure: 'family / 表示 / 家庭', grammar: 'noun，围绕「家庭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the family.', right: 'He gave me some advice about the family.', reason: 'advice 不可数。名词 family 的单复数按词典词形记。', rule: '先确定 family 是noun，再套「家庭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'family.q1', senseId: 'family.s1', errorType: 'meaning', type: '词义选择', prompt: '「family」在本条的核心意思是：', options: ['家庭', '完全相反的意思', '一种古代钱币'], answer: '家庭', explain: 'family：家庭。' },
      { id: 'family.q2', senseId: 'family.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches family?', options: ['家庭', 'a kind of ancient coin', 'the past tense of be'], answer: '家庭', explain: '对的是「家庭」。' },
      { id: 'family.q3', senseId: 'family.s1', errorType: 'grammar', type: '词义选择', prompt: 'family 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'family.q4', senseId: 'family.s1', errorType: 'meaning', type: '词源', prompt: '记 family 时，哪句更稳妥？', options: ['先锁住「家庭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家庭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家庭'] },
  });

  D('family name', {
    etymology: {
      origin: '现代英语固定说法「family name」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'family name', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'family name', text: '现代英语固定说法「family name」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：姓。' },
      ],
      formationLogic: '核心义：姓。',
      mnemonic: '看到 family name，先说出「姓」。',
      note: '核心义：姓。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "family name" and asked the class to keep it as one unit.', chinese: '老师把「family name」圈出来，让全班把它当成一个整体。它表示姓。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'family name.s1', en: 'In the margin she wrote "family name" so nobody would split the phrase.', zh: '她在页边写下「family name」，免得有人把这个说法拆开。意思是姓。', structure: 'family name / 表示 / 姓', grammar: 'noun，围绕「姓」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of family name and lost the point.', right: 'Keep "family name" together: it means 姓.', reason: '「family name」要整块理解。', rule: '先确定 family name 是noun，再套「姓」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'family name.q1', senseId: 'family name.s1', errorType: 'meaning', type: '词义选择', prompt: '「family name」在本条的核心意思是：', options: ['姓', '完全相反的意思', '一种古代钱币'], answer: '姓', explain: 'family name：姓。' },
      { id: 'family name.q2', senseId: 'family name.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches family name?', options: ['姓', 'a kind of ancient coin', 'the past tense of be'], answer: '姓', explain: '对的是「姓」。' },
      { id: 'family name.q3', senseId: 'family name.s1', errorType: 'grammar', type: '词义选择', prompt: 'family name 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'family name.q4', senseId: 'family name.s1', errorType: 'meaning', type: '词源', prompt: '记 family name 时，哪句更稳妥？', options: ['先锁住「姓」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「姓」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['姓'] },
  });

  D('famine', {
    etymology: {
      origin: '现代英语常用词「famine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'famine', gloss: '饥荒' },
      suffix: null,
      history: [
        { label: 'famine', text: '现代英语常用词「famine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：饥荒。' },
      ],
      formationLogic: '核心义：饥荒。',
      mnemonic: '看到 famine，先说出「饥荒」。',
      note: '核心义：饥荒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one famine.', chinese: '这一章反复回到同一个点：饥荒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'famine.s1', en: 'Without that famine, the next paragraph is hard to follow.', zh: '没有这个饥荒，下一段会很难读。', structure: 'famine / 表示 / 饥荒', grammar: 'noun，围绕「饥荒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the famine.', right: 'He gave me some advice about the famine.', reason: 'advice 不可数。名词 famine 的单复数按词典词形记。', rule: '先确定 famine 是noun，再套「饥荒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'famine.q1', senseId: 'famine.s1', errorType: 'meaning', type: '词义选择', prompt: '「famine」在本条的核心意思是：', options: ['饥荒', '完全相反的意思', '一种古代钱币'], answer: '饥荒', explain: 'famine：饥荒。' },
      { id: 'famine.q2', senseId: 'famine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches famine?', options: ['饥荒', 'a kind of ancient coin', 'the past tense of be'], answer: '饥荒', explain: '对的是「饥荒」。' },
      { id: 'famine.q3', senseId: 'famine.s1', errorType: 'grammar', type: '词义选择', prompt: 'famine 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'famine.q4', senseId: 'famine.s1', errorType: 'meaning', type: '词源', prompt: '记 famine 时，哪句更稳妥？', options: ['先锁住「饥荒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「饥荒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['饥荒'] },
  });

  D('famous', {
    etymology: {
      origin: '英语派生：fam + -ous，词性转到「著名的」。',
      prefix: null,
      root: { text: 'fam', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'famous', text: '英语派生：fam + -ous，词性转到「著名的」。' },
        { label: '现在', text: '核心用法是：著名的。' },
      ],
      formationLogic: '先认词干 fam，再看词尾。',
      mnemonic: '看到 famous，先说出「著名的」。',
      note: '先认词干 fam，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was famous.', chinese: '即使是初读者也能看出，这个结果是著名的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'famous.s1', en: 'They wanted a famous answer, not a long speech.', zh: '他们要一个著名的的答复，不要长篇发言。', structure: 'famous / 表示 / 著名的', grammar: 'adjective，围绕「著名的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are famous.', right: 'The news is famous.', reason: 'news 作主语时动词用单数。', rule: '先确定 famous 是adjective，再套「著名的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'famous.q1', senseId: 'famous.s1', errorType: 'meaning', type: '词义选择', prompt: '「famous」在本条的核心意思是：', options: ['著名的', '完全相反的意思', '一种古代钱币'], answer: '著名的', explain: 'famous：著名的。' },
      { id: 'famous.q2', senseId: 'famous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches famous?', options: ['著名的', 'a kind of ancient coin', 'the past tense of be'], answer: '著名的', explain: '对的是「著名的」。' },
      { id: 'famous.q3', senseId: 'famous.s1', errorType: 'grammar', type: '词义选择', prompt: 'famous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'famous.q4', senseId: 'famous.s1', errorType: 'meaning', type: '词源', prompt: '记 famous 时，哪句更稳妥？', options: ['先锁住「著名的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「著名的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['著名的'] },
  });

  D('fan', {
    etymology: {
      origin: '现代英语常用词「fan」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fan', gloss: '风扇' },
      suffix: null,
      history: [
        { label: 'fan', text: '现代英语常用词「fan」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：风扇。' },
      ],
      formationLogic: '核心义：风扇。',
      mnemonic: '看到 fan，先说出「风扇」。',
      note: '核心义：风扇。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fan.', chinese: '这一章反复回到同一个点：风扇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fan.s1', en: 'Without that fan, the next paragraph is hard to follow.', zh: '没有这个风扇，下一段会很难读。', structure: 'fan / 表示 / 风扇', grammar: 'noun，围绕「风扇」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fan.', right: 'He gave me some advice about the fan.', reason: 'advice 不可数。名词 fan 的单复数按词典词形记。', rule: '先确定 fan 是noun，再套「风扇」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fan.q1', senseId: 'fan.s1', errorType: 'meaning', type: '词义选择', prompt: '「fan」在本条的核心意思是：', options: ['风扇', '完全相反的意思', '一种古代钱币'], answer: '风扇', explain: 'fan：风扇。' },
      { id: 'fan.q2', senseId: 'fan.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fan?', options: ['风扇', 'a kind of ancient coin', 'the past tense of be'], answer: '风扇', explain: '对的是「风扇」。' },
      { id: 'fan.q3', senseId: 'fan.s1', errorType: 'grammar', type: '词义选择', prompt: 'fan 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fan.q4', senseId: 'fan.s1', errorType: 'meaning', type: '词源', prompt: '记 fan 时，哪句更稳妥？', options: ['先锁住「风扇」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「风扇」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['风扇'] },
  });

  D('fanaticism', {
    etymology: {
      origin: '英语派生：fanatic + -ism，词性转到「狂热」。',
      prefix: null,
      root: { text: 'fanatic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fanaticism', text: '英语派生：fanatic + -ism，词性转到「狂热」。' },
        { label: '现在', text: '核心用法是：狂热。' },
      ],
      formationLogic: '先认词干 fanatic，再看词尾。',
      mnemonic: '看到 fanaticism，先说出「狂热」。',
      note: '先认词干 fanatic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fanaticism.', chinese: '这一章反复回到同一个点：狂热。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fanaticism.s1', en: 'Without that fanaticism, the next paragraph is hard to follow.', zh: '没有这个狂热，下一段会很难读。', structure: 'fanaticism / 表示 / 狂热', grammar: 'noun，围绕「狂热」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fanaticism.', right: 'He gave me some advice about the fanaticism.', reason: 'advice 不可数。名词 fanaticism 的单复数按词典词形记。', rule: '先确定 fanaticism 是noun，再套「狂热」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fanaticism.q1', senseId: 'fanaticism.s1', errorType: 'meaning', type: '词义选择', prompt: '「fanaticism」在本条的核心意思是：', options: ['狂热', '完全相反的意思', '一种古代钱币'], answer: '狂热', explain: 'fanaticism：狂热。' },
      { id: 'fanaticism.q2', senseId: 'fanaticism.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fanaticism?', options: ['狂热', 'a kind of ancient coin', 'the past tense of be'], answer: '狂热', explain: '对的是「狂热」。' },
      { id: 'fanaticism.q3', senseId: 'fanaticism.s1', errorType: 'grammar', type: '词义选择', prompt: 'fanaticism 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fanaticism.q4', senseId: 'fanaticism.s1', errorType: 'meaning', type: '词源', prompt: '记 fanaticism 时，哪句更稳妥？', options: ['先锁住「狂热」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狂热」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狂热'] },
  });

  D('fancy', {
    etymology: {
      origin: '现代英语常用词「fancy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fancy', gloss: '花哨的' },
      suffix: null,
      history: [
        { label: 'fancy', text: '现代英语常用词「fancy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：花哨的。' },
      ],
      formationLogic: '核心义：花哨的。',
      mnemonic: '看到 fancy，先说出「花哨的」。',
      note: '核心义：花哨的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fancy.', chinese: '即使是初读者也能看出，这个结果是花哨的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fancy.s1', en: 'They wanted a fancy answer, not a long speech.', zh: '他们要一个花哨的的答复，不要长篇发言。', structure: 'fancy / 表示 / 花哨的', grammar: 'adjective，围绕「花哨的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fancy.', right: 'The news is fancy.', reason: 'news 作主语时动词用单数。', rule: '先确定 fancy 是adjective，再套「花哨的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fancy.q1', senseId: 'fancy.s1', errorType: 'meaning', type: '词义选择', prompt: '「fancy」在本条的核心意思是：', options: ['花哨的', '完全相反的意思', '一种古代钱币'], answer: '花哨的', explain: 'fancy：花哨的。' },
      { id: 'fancy.q2', senseId: 'fancy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fancy?', options: ['花哨的', 'a kind of ancient coin', 'the past tense of be'], answer: '花哨的', explain: '对的是「花哨的」。' },
      { id: 'fancy.q3', senseId: 'fancy.s1', errorType: 'grammar', type: '词义选择', prompt: 'fancy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fancy.q4', senseId: 'fancy.s1', errorType: 'meaning', type: '词源', prompt: '记 fancy 时，哪句更稳妥？', options: ['先锁住「花哨的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「花哨的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['花哨的'] },
  });

  D('fantastic', {
    etymology: {
      origin: '英语派生：fantast + -ic，词性转到「极好的」。',
      prefix: null,
      root: { text: 'fantast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'fantastic', text: '英语派生：fantast + -ic，词性转到「极好的」。' },
        { label: '现在', text: '核心用法是：极好的。' },
      ],
      formationLogic: '先认词干 fantast，再看词尾。',
      mnemonic: '看到 fantastic，先说出「极好的」。',
      note: '先认词干 fantast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was fantastic.', chinese: '即使是初读者也能看出，这个结果是极好的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fantastic.s1', en: 'They wanted a fantastic answer, not a long speech.', zh: '他们要一个极好的的答复，不要长篇发言。', structure: 'fantastic / 表示 / 极好的', grammar: 'adjective，围绕「极好的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are fantastic.', right: 'The news is fantastic.', reason: 'news 作主语时动词用单数。', rule: '先确定 fantastic 是adjective，再套「极好的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fantastic.q1', senseId: 'fantastic.s1', errorType: 'meaning', type: '词义选择', prompt: '「fantastic」在本条的核心意思是：', options: ['极好的', '完全相反的意思', '一种古代钱币'], answer: '极好的', explain: 'fantastic：极好的。' },
      { id: 'fantastic.q2', senseId: 'fantastic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fantastic?', options: ['极好的', 'a kind of ancient coin', 'the past tense of be'], answer: '极好的', explain: '对的是「极好的」。' },
      { id: 'fantastic.q3', senseId: 'fantastic.s1', errorType: 'grammar', type: '词义选择', prompt: 'fantastic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'fantastic.q4', senseId: 'fantastic.s1', errorType: 'meaning', type: '词源', prompt: '记 fantastic 时，哪句更稳妥？', options: ['先锁住「极好的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极好的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极好的'] },
  });

  D('fantasy', {
    etymology: {
      origin: '现代英语常用词「fantasy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fantasy', gloss: '幻想' },
      suffix: null,
      history: [
        { label: 'fantasy', text: '现代英语常用词「fantasy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：幻想。' },
      ],
      formationLogic: '核心义：幻想。',
      mnemonic: '看到 fantasy，先说出「幻想」。',
      note: '核心义：幻想。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fantasy.', chinese: '这一章反复回到同一个点：幻想。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fantasy.s1', en: 'Without that fantasy, the next paragraph is hard to follow.', zh: '没有这个幻想，下一段会很难读。', structure: 'fantasy / 表示 / 幻想', grammar: 'noun，围绕「幻想」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fantasy.', right: 'He gave me some advice about the fantasy.', reason: 'advice 不可数。名词 fantasy 的单复数按词典词形记。', rule: '先确定 fantasy 是noun，再套「幻想」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fantasy.q1', senseId: 'fantasy.s1', errorType: 'meaning', type: '词义选择', prompt: '「fantasy」在本条的核心意思是：', options: ['幻想', '完全相反的意思', '一种古代钱币'], answer: '幻想', explain: 'fantasy：幻想。' },
      { id: 'fantasy.q2', senseId: 'fantasy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fantasy?', options: ['幻想', 'a kind of ancient coin', 'the past tense of be'], answer: '幻想', explain: '对的是「幻想」。' },
      { id: 'fantasy.q3', senseId: 'fantasy.s1', errorType: 'grammar', type: '词义选择', prompt: 'fantasy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fantasy.q4', senseId: 'fantasy.s1', errorType: 'meaning', type: '词源', prompt: '记 fantasy 时，哪句更稳妥？', options: ['先锁住「幻想」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「幻想」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['幻想'] },
  });

  D('far', {
    etymology: {
      origin: '现代英语常用词「far」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'far', gloss: '远' },
      suffix: null,
      history: [
        { label: 'far', text: '现代英语常用词「far」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：远。' },
      ],
      formationLogic: '核心义：远。',
      mnemonic: '看到 far，先说出「远」。',
      note: '核心义：远。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule far, and the class followed.', chinese: '她把规则讲清楚了（远），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'far.s1', en: 'He nodded far and returned to the notes.', zh: '他远地点了点头，又回去看笔记。', structure: 'far / 表示 / 远', grammar: 'adverb，围绕「远」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very farly in the meeting.', right: 'She spoke far in the meeting.', reason: 'far 已经是副词，不要再加 -ly。', rule: '先确定 far 是adverb，再套「远」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'far.q1', senseId: 'far.s1', errorType: 'meaning', type: '词义选择', prompt: '「far」在本条的核心意思是：', options: ['远', '完全相反的意思', '一种古代钱币'], answer: '远', explain: 'far：远。' },
      { id: 'far.q2', senseId: 'far.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches far?', options: ['远', 'a kind of ancient coin', 'the past tense of be'], answer: '远', explain: '对的是「远」。' },
      { id: 'far.q3', senseId: 'far.s1', errorType: 'grammar', type: '词义选择', prompt: 'far 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'far.q4', senseId: 'far.s1', errorType: 'meaning', type: '词源', prompt: '记 far 时，哪句更稳妥？', options: ['先锁住「远」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「远」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['远'] },
  });

  D('far from', {
    etymology: {
      origin: '现代英语固定说法「far from」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'far from', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'far from', text: '现代英语固定说法「far from」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：远非。' },
      ],
      formationLogic: '核心义：远非。',
      mnemonic: '看到 far from，先说出「远非」。',
      note: '核心义：远非。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "far from" and asked the class to keep it as one unit.', chinese: '老师把「far from」圈出来，让全班把它当成一个整体。它表示远非。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'far from.s1', en: 'In the margin she wrote "far from" so nobody would split the phrase.', zh: '她在页边写下「far from」，免得有人把这个说法拆开。意思是远非。', structure: 'far from / 表示 / 远非', grammar: 'adverb，围绕「远非」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of far from and lost the point.', right: 'Keep "far from" together: it means 远非.', reason: '「far from」要整块理解。', rule: '先确定 far from 是adverb，再套「远非」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'far from.q1', senseId: 'far from.s1', errorType: 'meaning', type: '词义选择', prompt: '「far from」在本条的核心意思是：', options: ['远非', '完全相反的意思', '一种古代钱币'], answer: '远非', explain: 'far from：远非。' },
      { id: 'far from.q2', senseId: 'far from.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches far from?', options: ['远非', 'a kind of ancient coin', 'the past tense of be'], answer: '远非', explain: '对的是「远非」。' },
      { id: 'far from.q3', senseId: 'far from.s1', errorType: 'grammar', type: '词义选择', prompt: 'far from 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'far from.q4', senseId: 'far from.s1', errorType: 'meaning', type: '词源', prompt: '记 far from 时，哪句更稳妥？', options: ['先锁住「远非」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「远非」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['远非'] },
  });

  D('far-reaching', {
    etymology: {
      origin: '英语派生：far-reach + -ing，词性转到「深远的」。',
      prefix: null,
      root: { text: 'far-reach', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'far-reaching', text: '英语派生：far-reach + -ing，词性转到「深远的」。' },
        { label: '现在', text: '核心用法是：深远的。' },
      ],
      formationLogic: '先认词干 far-reach，再看词尾。',
      mnemonic: '看到 far-reaching，先说出「深远的」。',
      note: '先认词干 far-reach，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was far-reaching.', chinese: '即使是初读者也能看出，这个结果是深远的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'far-reaching.s1', en: 'They wanted a far-reaching answer, not a long speech.', zh: '他们要一个深远的的答复，不要长篇发言。', structure: 'far-reaching / 表示 / 深远的', grammar: 'adjective，围绕「深远的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are far-reaching.', right: 'The news is far-reaching.', reason: 'news 作主语时动词用单数。', rule: '先确定 far-reaching 是adjective，再套「深远的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'far-reaching.q1', senseId: 'far-reaching.s1', errorType: 'meaning', type: '词义选择', prompt: '「far-reaching」在本条的核心意思是：', options: ['深远的', '完全相反的意思', '一种古代钱币'], answer: '深远的', explain: 'far-reaching：深远的。' },
      { id: 'far-reaching.q2', senseId: 'far-reaching.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches far-reaching?', options: ['深远的', 'a kind of ancient coin', 'the past tense of be'], answer: '深远的', explain: '对的是「深远的」。' },
      { id: 'far-reaching.q3', senseId: 'far-reaching.s1', errorType: 'grammar', type: '词义选择', prompt: 'far-reaching 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'far-reaching.q4', senseId: 'far-reaching.s1', errorType: 'meaning', type: '词源', prompt: '记 far-reaching 时，哪句更稳妥？', options: ['先锁住「深远的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深远的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深远的'] },
  });

  D('farce', {
    etymology: {
      origin: '现代英语常用词「farce」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'farce', gloss: '闹剧' },
      suffix: null,
      history: [
        { label: 'farce', text: '现代英语常用词「farce」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：闹剧。' },
      ],
      formationLogic: '核心义：闹剧。',
      mnemonic: '看到 farce，先说出「闹剧」。',
      note: '核心义：闹剧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one farce.', chinese: '这一章反复回到同一个点：闹剧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'farce.s1', en: 'Without that farce, the next paragraph is hard to follow.', zh: '没有这个闹剧，下一段会很难读。', structure: 'farce / 表示 / 闹剧', grammar: 'noun，围绕「闹剧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the farce.', right: 'He gave me some advice about the farce.', reason: 'advice 不可数。名词 farce 的单复数按词典词形记。', rule: '先确定 farce 是noun，再套「闹剧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'farce.q1', senseId: 'farce.s1', errorType: 'meaning', type: '词义选择', prompt: '「farce」在本条的核心意思是：', options: ['闹剧', '完全相反的意思', '一种古代钱币'], answer: '闹剧', explain: 'farce：闹剧。' },
      { id: 'farce.q2', senseId: 'farce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches farce?', options: ['闹剧', 'a kind of ancient coin', 'the past tense of be'], answer: '闹剧', explain: '对的是「闹剧」。' },
      { id: 'farce.q3', senseId: 'farce.s1', errorType: 'grammar', type: '词义选择', prompt: 'farce 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'farce.q4', senseId: 'farce.s1', errorType: 'meaning', type: '词源', prompt: '记 farce 时，哪句更稳妥？', options: ['先锁住「闹剧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「闹剧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['闹剧'] },
  });

  D('fare', {
    etymology: {
      origin: '现代英语常用词「fare」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'fare', gloss: '车费' },
      suffix: null,
      history: [
        { label: 'fare', text: '现代英语常用词「fare」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：车费。' },
      ],
      formationLogic: '核心义：车费。',
      mnemonic: '看到 fare，先说出「车费」。',
      note: '核心义：车费。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one fare.', chinese: '这一章反复回到同一个点：车费。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'fare.s1', en: 'Without that fare, the next paragraph is hard to follow.', zh: '没有这个车费，下一段会很难读。', structure: 'fare / 表示 / 车费', grammar: 'noun，围绕「车费」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the fare.', right: 'He gave me some advice about the fare.', reason: 'advice 不可数。名词 fare 的单复数按词典词形记。', rule: '先确定 fare 是noun，再套「车费」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'fare.q1', senseId: 'fare.s1', errorType: 'meaning', type: '词义选择', prompt: '「fare」在本条的核心意思是：', options: ['车费', '完全相反的意思', '一种古代钱币'], answer: '车费', explain: 'fare：车费。' },
      { id: 'fare.q2', senseId: 'fare.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches fare?', options: ['车费', 'a kind of ancient coin', 'the past tense of be'], answer: '车费', explain: '对的是「车费」。' },
      { id: 'fare.q3', senseId: 'fare.s1', errorType: 'grammar', type: '词义选择', prompt: 'fare 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'fare.q4', senseId: 'fare.s1', errorType: 'meaning', type: '词源', prompt: '记 fare 时，哪句更稳妥？', options: ['先锁住「车费」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「车费」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['车费'] },
  });

  D('farewell', {
    etymology: {
      origin: '现代英语常用词「farewell」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'farewell', gloss: '告别' },
      suffix: null,
      history: [
        { label: 'farewell', text: '现代英语常用词「farewell」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：告别。' },
      ],
      formationLogic: '核心义：告别。',
      mnemonic: '看到 farewell，先说出「告别」。',
      note: '核心义：告别。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one farewell.', chinese: '这一章反复回到同一个点：告别。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'farewell.s1', en: 'Without that farewell, the next paragraph is hard to follow.', zh: '没有这个告别，下一段会很难读。', structure: 'farewell / 表示 / 告别', grammar: 'noun，围绕「告别」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the farewell.', right: 'He gave me some advice about the farewell.', reason: 'advice 不可数。名词 farewell 的单复数按词典词形记。', rule: '先确定 farewell 是noun，再套「告别」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'farewell.q1', senseId: 'farewell.s1', errorType: 'meaning', type: '词义选择', prompt: '「farewell」在本条的核心意思是：', options: ['告别', '完全相反的意思', '一种古代钱币'], answer: '告别', explain: 'farewell：告别。' },
      { id: 'farewell.q2', senseId: 'farewell.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches farewell?', options: ['告别', 'a kind of ancient coin', 'the past tense of be'], answer: '告别', explain: '对的是「告别」。' },
      { id: 'farewell.q3', senseId: 'farewell.s1', errorType: 'grammar', type: '词义选择', prompt: 'farewell 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'farewell.q4', senseId: 'farewell.s1', errorType: 'meaning', type: '词源', prompt: '记 farewell 时，哪句更稳妥？', options: ['先锁住「告别」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「告别」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['告别'] },
  });

  D('farm', {
    etymology: {
      origin: '现代英语常用词「farm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'farm', gloss: '农场' },
      suffix: null,
      history: [
        { label: 'farm', text: '现代英语常用词「farm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：农场。' },
      ],
      formationLogic: '核心义：农场。',
      mnemonic: '看到 farm，先说出「农场」。',
      note: '核心义：农场。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one farm.', chinese: '这一章反复回到同一个点：农场。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'farm.s1', en: 'Without that farm, the next paragraph is hard to follow.', zh: '没有这个农场，下一段会很难读。', structure: 'farm / 表示 / 农场', grammar: 'noun，围绕「农场」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the farm.', right: 'He gave me some advice about the farm.', reason: 'advice 不可数。名词 farm 的单复数按词典词形记。', rule: '先确定 farm 是noun，再套「农场」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'farm.q1', senseId: 'farm.s1', errorType: 'meaning', type: '词义选择', prompt: '「farm」在本条的核心意思是：', options: ['农场', '完全相反的意思', '一种古代钱币'], answer: '农场', explain: 'farm：农场。' },
      { id: 'farm.q2', senseId: 'farm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches farm?', options: ['农场', 'a kind of ancient coin', 'the past tense of be'], answer: '农场', explain: '对的是「农场」。' },
      { id: 'farm.q3', senseId: 'farm.s1', errorType: 'grammar', type: '词义选择', prompt: 'farm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'farm.q4', senseId: 'farm.s1', errorType: 'meaning', type: '词源', prompt: '记 farm 时，哪句更稳妥？', options: ['先锁住「农场」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「农场」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['农场'] },
  });

  D('farmer', {
    etymology: {
      origin: '英语派生：farm + -er，词性转到「农民」。',
      prefix: null,
      root: { text: 'farm', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'farmer', text: '英语派生：farm + -er，词性转到「农民」。' },
        { label: '现在', text: '核心用法是：农民。' },
      ],
      formationLogic: '先认词干 farm，再看词尾。',
      mnemonic: '看到 farmer，先说出「农民」。',
      note: '先认词干 farm，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one farmer.', chinese: '这一章反复回到同一个点：农民。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'farmer.s1', en: 'Without that farmer, the next paragraph is hard to follow.', zh: '没有这个农民，下一段会很难读。', structure: 'farmer / 表示 / 农民', grammar: 'noun，围绕「农民」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the farmer.', right: 'He gave me some advice about the farmer.', reason: 'advice 不可数。名词 farmer 的单复数按词典词形记。', rule: '先确定 farmer 是noun，再套「农民」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'farmer.q1', senseId: 'farmer.s1', errorType: 'meaning', type: '词义选择', prompt: '「farmer」在本条的核心意思是：', options: ['农民', '完全相反的意思', '一种古代钱币'], answer: '农民', explain: 'farmer：农民。' },
      { id: 'farmer.q2', senseId: 'farmer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches farmer?', options: ['农民', 'a kind of ancient coin', 'the past tense of be'], answer: '农民', explain: '对的是「农民」。' },
      { id: 'farmer.q3', senseId: 'farmer.s1', errorType: 'grammar', type: '词义选择', prompt: 'farmer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'farmer.q4', senseId: 'farmer.s1', errorType: 'meaning', type: '词源', prompt: '记 farmer 时，哪句更稳妥？', options: ['先锁住「农民」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「农民」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['农民'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
