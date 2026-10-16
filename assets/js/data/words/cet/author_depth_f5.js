/* data/words/cet/author_depth_f5.js
 * 手敲深度补丁：download–ember（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('download', {
    etymology: {
      origin: '现代英语常用词「download」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'download', gloss: '下载' },
      suffix: null,
      history: [
        { label: 'download', text: '现代英语常用词「download」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：下载。' },
      ],
      formationLogic: '核心义：下载。',
      mnemonic: '看到 download，先说出「下载」。',
      note: '核心义：下载。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to download before the office closed.', chinese: '他们同意在办公室关门前做这件事：下载。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'download.s1', en: 'The deadline forced the team to download that afternoon.', zh: '截止日期逼着小组在那天下午下载。', structure: 'download / 表示 / 下载', grammar: 'verb，围绕「下载」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She downloaded it yesterday without checking the real past form.', right: 'Check the past form of "download" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 download 是verb，再套「下载」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'download.q1', senseId: 'download.s1', errorType: 'meaning', type: '词义选择', prompt: '「download」在本条的核心意思是：', options: ['下载', '完全相反的意思', '一种古代钱币'], answer: '下载', explain: 'download：下载。' },
      { id: 'download.q2', senseId: 'download.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches download?', options: ['下载', 'a kind of ancient coin', 'the past tense of be'], answer: '下载', explain: '对的是「下载」。' },
      { id: 'download.q3', senseId: 'download.s1', errorType: 'grammar', type: '词义选择', prompt: 'download 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'download.q4', senseId: 'download.s1', errorType: 'meaning', type: '词源', prompt: '记 download 时，哪句更稳妥？', options: ['先锁住「下载」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下载」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下载'] },
  });

  D('downpour', {
    etymology: {
      origin: '现代英语常用词「downpour」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downpour', gloss: '倾盆大雨' },
      suffix: null,
      history: [
        { label: 'downpour', text: '现代英语常用词「downpour」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：倾盆大雨。' },
      ],
      formationLogic: '核心义：倾盆大雨。',
      mnemonic: '看到 downpour，先说出「倾盆大雨」。',
      note: '核心义：倾盆大雨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one downpour.', chinese: '这一章反复回到同一个点：倾盆大雨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downpour.s1', en: 'Without that downpour, the next paragraph is hard to follow.', zh: '没有这个倾盆大雨，下一段会很难读。', structure: 'downpour / 表示 / 倾盆大雨', grammar: 'noun，围绕「倾盆大雨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the downpour.', right: 'He gave me some advice about the downpour.', reason: 'advice 不可数。名词 downpour 的单复数按词典词形记。', rule: '先确定 downpour 是noun，再套「倾盆大雨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downpour.q1', senseId: 'downpour.s1', errorType: 'meaning', type: '词义选择', prompt: '「downpour」在本条的核心意思是：', options: ['倾盆大雨', '完全相反的意思', '一种古代钱币'], answer: '倾盆大雨', explain: 'downpour：倾盆大雨。' },
      { id: 'downpour.q2', senseId: 'downpour.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downpour?', options: ['倾盆大雨', 'a kind of ancient coin', 'the past tense of be'], answer: '倾盆大雨', explain: '对的是「倾盆大雨」。' },
      { id: 'downpour.q3', senseId: 'downpour.s1', errorType: 'grammar', type: '词义选择', prompt: 'downpour 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'downpour.q4', senseId: 'downpour.s1', errorType: 'meaning', type: '词源', prompt: '记 downpour 时，哪句更稳妥？', options: ['先锁住「倾盆大雨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倾盆大雨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倾盆大雨'] },
  });

  D('downside', {
    etymology: {
      origin: '现代英语常用词「downside」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downside', gloss: '不利方面' },
      suffix: null,
      history: [
        { label: 'downside', text: '现代英语常用词「downside」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不利方面。' },
      ],
      formationLogic: '核心义：不利方面。',
      mnemonic: '看到 downside，先说出「不利方面」。',
      note: '核心义：不利方面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one downside.', chinese: '这一章反复回到同一个点：不利方面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downside.s1', en: 'Without that downside, the next paragraph is hard to follow.', zh: '没有这个不利方面，下一段会很难读。', structure: 'downside / 表示 / 不利方面', grammar: 'noun，围绕「不利方面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the downside.', right: 'He gave me some advice about the downside.', reason: 'advice 不可数。名词 downside 的单复数按词典词形记。', rule: '先确定 downside 是noun，再套「不利方面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downside.q1', senseId: 'downside.s1', errorType: 'meaning', type: '词义选择', prompt: '「downside」在本条的核心意思是：', options: ['不利方面', '完全相反的意思', '一种古代钱币'], answer: '不利方面', explain: 'downside：不利方面。' },
      { id: 'downside.q2', senseId: 'downside.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downside?', options: ['不利方面', 'a kind of ancient coin', 'the past tense of be'], answer: '不利方面', explain: '对的是「不利方面」。' },
      { id: 'downside.q3', senseId: 'downside.s1', errorType: 'grammar', type: '词义选择', prompt: 'downside 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'downside.q4', senseId: 'downside.s1', errorType: 'meaning', type: '词源', prompt: '记 downside 时，哪句更稳妥？', options: ['先锁住「不利方面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不利方面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不利方面'] },
  });

  D('downstairs', {
    etymology: {
      origin: '现代英语常用词「downstairs」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downstairs', gloss: '楼下' },
      suffix: null,
      history: [
        { label: 'downstairs', text: '现代英语常用词「downstairs」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：楼下。' },
      ],
      formationLogic: '核心义：楼下。',
      mnemonic: '看到 downstairs，先说出「楼下」。',
      note: '核心义：楼下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule downstairs, and the class followed.', chinese: '她把规则讲清楚了（楼下），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downstairs.s1', en: 'He nodded downstairs and returned to the notes.', zh: '他楼下地点了点头，又回去看笔记。', structure: 'downstairs / 表示 / 楼下', grammar: 'adverb，围绕「楼下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very downstairsly in the meeting.', right: 'She spoke downstairs in the meeting.', reason: 'downstairs 已经是副词，不要再加 -ly。', rule: '先确定 downstairs 是adverb，再套「楼下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downstairs.q1', senseId: 'downstairs.s1', errorType: 'meaning', type: '词义选择', prompt: '「downstairs」在本条的核心意思是：', options: ['楼下', '完全相反的意思', '一种古代钱币'], answer: '楼下', explain: 'downstairs：楼下。' },
      { id: 'downstairs.q2', senseId: 'downstairs.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downstairs?', options: ['楼下', 'a kind of ancient coin', 'the past tense of be'], answer: '楼下', explain: '对的是「楼下」。' },
      { id: 'downstairs.q3', senseId: 'downstairs.s1', errorType: 'grammar', type: '词义选择', prompt: 'downstairs 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'downstairs.q4', senseId: 'downstairs.s1', errorType: 'meaning', type: '词源', prompt: '记 downstairs 时，哪句更稳妥？', options: ['先锁住「楼下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「楼下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['楼下'] },
  });

  D('downtown', {
    etymology: {
      origin: '现代英语常用词「downtown」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downtown', gloss: '市中心' },
      suffix: null,
      history: [
        { label: 'downtown', text: '现代英语常用词「downtown」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：市中心。' },
      ],
      formationLogic: '核心义：市中心。',
      mnemonic: '看到 downtown，先说出「市中心」。',
      note: '核心义：市中心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one downtown.', chinese: '这一章反复回到同一个点：市中心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downtown.s1', en: 'Without that downtown, the next paragraph is hard to follow.', zh: '没有这个市中心，下一段会很难读。', structure: 'downtown / 表示 / 市中心', grammar: 'noun，围绕「市中心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the downtown.', right: 'He gave me some advice about the downtown.', reason: 'advice 不可数。名词 downtown 的单复数按词典词形记。', rule: '先确定 downtown 是noun，再套「市中心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downtown.q1', senseId: 'downtown.s1', errorType: 'meaning', type: '词义选择', prompt: '「downtown」在本条的核心意思是：', options: ['市中心', '完全相反的意思', '一种古代钱币'], answer: '市中心', explain: 'downtown：市中心。' },
      { id: 'downtown.q2', senseId: 'downtown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downtown?', options: ['市中心', 'a kind of ancient coin', 'the past tense of be'], answer: '市中心', explain: '对的是「市中心」。' },
      { id: 'downtown.q3', senseId: 'downtown.s1', errorType: 'grammar', type: '词义选择', prompt: 'downtown 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'downtown.q4', senseId: 'downtown.s1', errorType: 'meaning', type: '词源', prompt: '记 downtown 时，哪句更稳妥？', options: ['先锁住「市中心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「市中心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['市中心'] },
  });

  D('downturn', {
    etymology: {
      origin: '现代英语常用词「downturn」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downturn', gloss: '（经济）下滑' },
      suffix: null,
      history: [
        { label: 'downturn', text: '现代英语常用词「downturn」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（经济）下滑。' },
      ],
      formationLogic: '核心义：（经济）下滑。',
      mnemonic: '看到 downturn，先说出「（经济）下滑」。',
      note: '核心义：（经济）下滑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one downturn.', chinese: '这一章反复回到同一个点：（经济）下滑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downturn.s1', en: 'Without that downturn, the next paragraph is hard to follow.', zh: '没有这个（经济）下滑，下一段会很难读。', structure: 'downturn / 表示 / （经济）下滑', grammar: 'noun，围绕「（经济）下滑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the downturn.', right: 'He gave me some advice about the downturn.', reason: 'advice 不可数。名词 downturn 的单复数按词典词形记。', rule: '先确定 downturn 是noun，再套「（经济）下滑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downturn.q1', senseId: 'downturn.s1', errorType: 'meaning', type: '词义选择', prompt: '「downturn」在本条的核心意思是：', options: ['（经济）下滑', '完全相反的意思', '一种古代钱币'], answer: '（经济）下滑', explain: 'downturn：（经济）下滑。' },
      { id: 'downturn.q2', senseId: 'downturn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downturn?', options: ['（经济）下滑', 'a kind of ancient coin', 'the past tense of be'], answer: '（经济）下滑', explain: '对的是「（经济）下滑」。' },
      { id: 'downturn.q3', senseId: 'downturn.s1', errorType: 'grammar', type: '词义选择', prompt: 'downturn 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'downturn.q4', senseId: 'downturn.s1', errorType: 'meaning', type: '词源', prompt: '记 downturn 时，哪句更稳妥？', options: ['先锁住「（经济）下滑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（经济）下滑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（经济）下滑'] },
  });

  D('downward', {
    etymology: {
      origin: '现代英语常用词「downward」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downward', gloss: '向下的' },
      suffix: null,
      history: [
        { label: 'downward', text: '现代英语常用词「downward」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向下的。' },
      ],
      formationLogic: '核心义：向下的。',
      mnemonic: '看到 downward，先说出「向下的」。',
      note: '核心义：向下的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was downward.', chinese: '即使是初读者也能看出，这个结果是向下的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downward.s1', en: 'They wanted a downward answer, not a long speech.', zh: '他们要一个向下的的答复，不要长篇发言。', structure: 'downward / 表示 / 向下的', grammar: 'adjective，围绕「向下的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are downward.', right: 'The news is downward.', reason: 'news 作主语时动词用单数。', rule: '先确定 downward 是adjective，再套「向下的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downward.q1', senseId: 'downward.s1', errorType: 'meaning', type: '词义选择', prompt: '「downward」在本条的核心意思是：', options: ['向下的', '完全相反的意思', '一种古代钱币'], answer: '向下的', explain: 'downward：向下的。' },
      { id: 'downward.q2', senseId: 'downward.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downward?', options: ['向下的', 'a kind of ancient coin', 'the past tense of be'], answer: '向下的', explain: '对的是「向下的」。' },
      { id: 'downward.q3', senseId: 'downward.s1', errorType: 'grammar', type: '词义选择', prompt: 'downward 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'downward.q4', senseId: 'downward.s1', errorType: 'meaning', type: '词源', prompt: '记 downward 时，哪句更稳妥？', options: ['先锁住「向下的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向下的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向下的'] },
  });

  D('downwards', {
    etymology: {
      origin: '现代英语常用词「downwards」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'downwards', gloss: '向下' },
      suffix: null,
      history: [
        { label: 'downwards', text: '现代英语常用词「downwards」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向下。' },
      ],
      formationLogic: '核心义：向下。',
      mnemonic: '看到 downwards，先说出「向下」。',
      note: '核心义：向下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule downwards, and the class followed.', chinese: '她把规则讲清楚了（向下），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'downwards.s1', en: 'He nodded downwards and returned to the notes.', zh: '他向下地点了点头，又回去看笔记。', structure: 'downwards / 表示 / 向下', grammar: 'adverb，围绕「向下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very downwardsly in the meeting.', right: 'She spoke downwards in the meeting.', reason: 'downwards 已经是副词，不要再加 -ly。', rule: '先确定 downwards 是adverb，再套「向下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'downwards.q1', senseId: 'downwards.s1', errorType: 'meaning', type: '词义选择', prompt: '「downwards」在本条的核心意思是：', options: ['向下', '完全相反的意思', '一种古代钱币'], answer: '向下', explain: 'downwards：向下。' },
      { id: 'downwards.q2', senseId: 'downwards.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches downwards?', options: ['向下', 'a kind of ancient coin', 'the past tense of be'], answer: '向下', explain: '对的是「向下」。' },
      { id: 'downwards.q3', senseId: 'downwards.s1', errorType: 'grammar', type: '词义选择', prompt: 'downwards 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'downwards.q4', senseId: 'downwards.s1', errorType: 'meaning', type: '词源', prompt: '记 downwards 时，哪句更稳妥？', options: ['先锁住「向下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向下'] },
  });

  D('doze', {
    etymology: {
      origin: '现代英语常用词「doze」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'doze', gloss: '打盹' },
      suffix: null,
      history: [
        { label: 'doze', text: '现代英语常用词「doze」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：打盹。' },
      ],
      formationLogic: '核心义：打盹。',
      mnemonic: '看到 doze，先说出「打盹」。',
      note: '核心义：打盹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to doze before the office closed.', chinese: '他们同意在办公室关门前做这件事：打盹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'doze.s1', en: 'The deadline forced the team to doze that afternoon.', zh: '截止日期逼着小组在那天下午打盹。', structure: 'doze / 表示 / 打盹', grammar: 'verb，围绕「打盹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dozeed it yesterday without checking the real past form.', right: 'Check the past form of "doze" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 doze 是verb，再套「打盹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'doze.q1', senseId: 'doze.s1', errorType: 'meaning', type: '词义选择', prompt: '「doze」在本条的核心意思是：', options: ['打盹', '完全相反的意思', '一种古代钱币'], answer: '打盹', explain: 'doze：打盹。' },
      { id: 'doze.q2', senseId: 'doze.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches doze?', options: ['打盹', 'a kind of ancient coin', 'the past tense of be'], answer: '打盹', explain: '对的是「打盹」。' },
      { id: 'doze.q3', senseId: 'doze.s1', errorType: 'grammar', type: '词义选择', prompt: 'doze 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'doze.q4', senseId: 'doze.s1', errorType: 'meaning', type: '词源', prompt: '记 doze 时，哪句更稳妥？', options: ['先锁住「打盹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打盹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打盹'] },
  });

  D('dozen', {
    etymology: {
      origin: '法语 douzaine，douze「十二」。',
      prefix: null,
      root: { text: 'dozen', gloss: '一打' },
      suffix: null,
      history: [
        { label: 'dozen', text: '法语 douzaine，douze「十二」。' },
        { label: '现在', text: '核心用法是：一打。' },
      ],
      formationLogic: '考试认现在的用法：一打。',
      mnemonic: '看到 dozen，先说出「一打」。',
      note: '考试认现在的用法：一打。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dozen.', chinese: '这一章反复回到同一个点：一打。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dozen.s1', en: 'Without that dozen, the next paragraph is hard to follow.', zh: '没有这个一打，下一段会很难读。', structure: 'dozen / 表示 / 一打', grammar: 'noun，围绕「一打」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dozen.', right: 'He gave me some advice about the dozen.', reason: 'advice 不可数。名词 dozen 的单复数按词典词形记。', rule: '先确定 dozen 是noun，再套「一打」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dozen.q1', senseId: 'dozen.s1', errorType: 'meaning', type: '词义选择', prompt: '「dozen」在本条的核心意思是：', options: ['一打', '完全相反的意思', '一种古代钱币'], answer: '一打', explain: 'dozen：一打。' },
      { id: 'dozen.q2', senseId: 'dozen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dozen?', options: ['一打', 'a kind of ancient coin', 'the past tense of be'], answer: '一打', explain: '对的是「一打」。' },
      { id: 'dozen.q3', senseId: 'dozen.s1', errorType: 'grammar', type: '词义选择', prompt: 'dozen 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dozen.q4', senseId: 'dozen.s1', errorType: 'meaning', type: '词源', prompt: '记 dozen 时，哪句更稳妥？', options: ['先锁住「一打」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一打」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一打'] },
  });

  D('draft', {
    etymology: {
      origin: '与 draw 同源。拉出来的草稿，也指穿堂风。',
      prefix: null,
      root: { text: 'draft', gloss: '草稿' },
      suffix: null,
      history: [
        { label: 'draft', text: '与 draw 同源。拉出来的草稿，也指穿堂风。' },
        { label: '现在', text: '核心用法是：草稿。' },
      ],
      formationLogic: '考试认现在的用法：草稿。',
      mnemonic: '看到 draft，先说出「草稿」。',
      note: '考试认现在的用法：草稿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one draft.', chinese: '这一章反复回到同一个点：草稿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'draft.s1', en: 'Without that draft, the next paragraph is hard to follow.', zh: '没有这个草稿，下一段会很难读。', structure: 'draft / 表示 / 草稿', grammar: 'noun，围绕「草稿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the draft.', right: 'He gave me some advice about the draft.', reason: 'advice 不可数。名词 draft 的单复数按词典词形记。', rule: '先确定 draft 是noun，再套「草稿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'draft.q1', senseId: 'draft.s1', errorType: 'meaning', type: '词义选择', prompt: '「draft」在本条的核心意思是：', options: ['草稿', '完全相反的意思', '一种古代钱币'], answer: '草稿', explain: 'draft：草稿。' },
      { id: 'draft.q2', senseId: 'draft.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches draft?', options: ['草稿', 'a kind of ancient coin', 'the past tense of be'], answer: '草稿', explain: '对的是「草稿」。' },
      { id: 'draft.q3', senseId: 'draft.s1', errorType: 'grammar', type: '词义选择', prompt: 'draft 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'draft.q4', senseId: 'draft.s1', errorType: 'meaning', type: '词源', prompt: '记 draft 时，哪句更稳妥？', options: ['先锁住「草稿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「草稿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['草稿'] },
  });

  D('drag', {
    etymology: {
      origin: '古诺斯语 draga「拉」。',
      prefix: null,
      root: { text: 'drag', gloss: '拖' },
      suffix: null,
      history: [
        { label: 'drag', text: '古诺斯语 draga「拉」。' },
        { label: '现在', text: '核心用法是：拖。' },
      ],
      formationLogic: '考试认现在的用法：拖。',
      mnemonic: '看到 drag，先说出「拖」。',
      note: '考试认现在的用法：拖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drag before the office closed.', chinese: '他们同意在办公室关门前做这件事：拖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drag.s1', en: 'The deadline forced the team to drag that afternoon.', zh: '截止日期逼着小组在那天下午拖。', structure: 'drag / 表示 / 拖', grammar: 'verb，围绕「拖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She draged it yesterday without checking the real past form.', right: 'Check the past form of "drag" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drag 是verb，再套「拖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drag.q1', senseId: 'drag.s1', errorType: 'meaning', type: '词义选择', prompt: '「drag」在本条的核心意思是：', options: ['拖', '完全相反的意思', '一种古代钱币'], answer: '拖', explain: 'drag：拖。' },
      { id: 'drag.q2', senseId: 'drag.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drag?', options: ['拖', 'a kind of ancient coin', 'the past tense of be'], answer: '拖', explain: '对的是「拖」。' },
      { id: 'drag.q3', senseId: 'drag.s1', errorType: 'grammar', type: '词义选择', prompt: 'drag 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drag.q4', senseId: 'drag.s1', errorType: 'meaning', type: '词源', prompt: '记 drag 时，哪句更稳妥？', options: ['先锁住「拖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拖'] },
  });

  D('dragon', {
    etymology: {
      origin: '希腊语 drakon「蛇、龙」。',
      prefix: null,
      root: { text: 'dragon', gloss: '龙' },
      suffix: null,
      history: [
        { label: 'dragon', text: '希腊语 drakon「蛇、龙」。' },
        { label: '现在', text: '核心用法是：龙。' },
      ],
      formationLogic: '考试认现在的用法：龙。',
      mnemonic: '看到 dragon，先说出「龙」。',
      note: '考试认现在的用法：龙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dragon.', chinese: '这一章反复回到同一个点：龙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dragon.s1', en: 'Without that dragon, the next paragraph is hard to follow.', zh: '没有这个龙，下一段会很难读。', structure: 'dragon / 表示 / 龙', grammar: 'noun，围绕「龙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dragon.', right: 'He gave me some advice about the dragon.', reason: 'advice 不可数。名词 dragon 的单复数按词典词形记。', rule: '先确定 dragon 是noun，再套「龙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dragon.q1', senseId: 'dragon.s1', errorType: 'meaning', type: '词义选择', prompt: '「dragon」在本条的核心意思是：', options: ['龙', '完全相反的意思', '一种古代钱币'], answer: '龙', explain: 'dragon：龙。' },
      { id: 'dragon.q2', senseId: 'dragon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dragon?', options: ['龙', 'a kind of ancient coin', 'the past tense of be'], answer: '龙', explain: '对的是「龙」。' },
      { id: 'dragon.q3', senseId: 'dragon.s1', errorType: 'grammar', type: '词义选择', prompt: 'dragon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dragon.q4', senseId: 'dragon.s1', errorType: 'meaning', type: '词源', prompt: '记 dragon 时，哪句更稳妥？', options: ['先锁住「龙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「龙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['龙'] },
  });

  D('drain', {
    etymology: {
      origin: '古英语 dreahnian。',
      prefix: null,
      root: { text: 'drain', gloss: '排水' },
      suffix: null,
      history: [
        { label: 'drain', text: '古英语 dreahnian。' },
        { label: '现在', text: '核心用法是：排水。' },
      ],
      formationLogic: '考试认现在的用法：排水。',
      mnemonic: '看到 drain，先说出「排水」。',
      note: '考试认现在的用法：排水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drain before the office closed.', chinese: '他们同意在办公室关门前做这件事：排水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drain.s1', en: 'The deadline forced the team to drain that afternoon.', zh: '截止日期逼着小组在那天下午排水。', structure: 'drain / 表示 / 排水', grammar: 'verb，围绕「排水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drained it yesterday without checking the real past form.', right: 'Check the past form of "drain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drain 是verb，再套「排水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drain.q1', senseId: 'drain.s1', errorType: 'meaning', type: '词义选择', prompt: '「drain」在本条的核心意思是：', options: ['排水', '完全相反的意思', '一种古代钱币'], answer: '排水', explain: 'drain：排水。' },
      { id: 'drain.q2', senseId: 'drain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drain?', options: ['排水', 'a kind of ancient coin', 'the past tense of be'], answer: '排水', explain: '对的是「排水」。' },
      { id: 'drain.q3', senseId: 'drain.s1', errorType: 'grammar', type: '词义选择', prompt: 'drain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drain.q4', senseId: 'drain.s1', errorType: 'meaning', type: '词源', prompt: '记 drain 时，哪句更稳妥？', options: ['先锁住「排水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「排水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['排水'] },
  });

  D('drainage area', {
    etymology: {
      origin: '现代英语固定说法「drainage area」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'drainage area', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'drainage area', text: '现代英语固定说法「drainage area」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：排水区。' },
      ],
      formationLogic: '核心义：排水区。',
      mnemonic: '看到 drainage area，先说出「排水区」。',
      note: '核心义：排水区。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "drainage area" and asked the class to keep it as one unit.', chinese: '老师把「drainage area」圈出来，让全班把它当成一个整体。它表示排水区。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drainage area.s1', en: 'In the margin she wrote "drainage area" so nobody would split the phrase.', zh: '她在页边写下「drainage area」，免得有人把这个说法拆开。意思是排水区。', structure: 'drainage area / 表示 / 排水区', grammar: 'noun，围绕「排水区」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of drainage area and lost the point.', right: 'Keep "drainage area" together: it means 排水区.', reason: '「drainage area」要整块理解。', rule: '先确定 drainage area 是noun，再套「排水区」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drainage area.q1', senseId: 'drainage area.s1', errorType: 'meaning', type: '词义选择', prompt: '「drainage area」在本条的核心意思是：', options: ['排水区', '完全相反的意思', '一种古代钱币'], answer: '排水区', explain: 'drainage area：排水区。' },
      { id: 'drainage area.q2', senseId: 'drainage area.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drainage area?', options: ['排水区', 'a kind of ancient coin', 'the past tense of be'], answer: '排水区', explain: '对的是「排水区」。' },
      { id: 'drainage area.q3', senseId: 'drainage area.s1', errorType: 'grammar', type: '词义选择', prompt: 'drainage area 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drainage area.q4', senseId: 'drainage area.s1', errorType: 'meaning', type: '词源', prompt: '记 drainage area 时，哪句更稳妥？', options: ['先锁住「排水区」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「排水区」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['排水区'] },
  });

  D('dram', {
    etymology: {
      origin: '现代英语常用词「dram」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dram', gloss: '打兰' },
      suffix: null,
      history: [
        { label: 'dram', text: '现代英语常用词「dram」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：打兰。' },
      ],
      formationLogic: '核心义：打兰。',
      mnemonic: '看到 dram，先说出「打兰」。',
      note: '核心义：打兰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dram.', chinese: '这一章反复回到同一个点：打兰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dram.s1', en: 'Without that dram, the next paragraph is hard to follow.', zh: '没有这个打兰，下一段会很难读。', structure: 'dram / 表示 / 打兰', grammar: 'noun，围绕「打兰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dram.', right: 'He gave me some advice about the dram.', reason: 'advice 不可数。名词 dram 的单复数按词典词形记。', rule: '先确定 dram 是noun，再套「打兰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dram.q1', senseId: 'dram.s1', errorType: 'meaning', type: '词义选择', prompt: '「dram」在本条的核心意思是：', options: ['打兰', '完全相反的意思', '一种古代钱币'], answer: '打兰', explain: 'dram：打兰。' },
      { id: 'dram.q2', senseId: 'dram.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dram?', options: ['打兰', 'a kind of ancient coin', 'the past tense of be'], answer: '打兰', explain: '对的是「打兰」。' },
      { id: 'dram.q3', senseId: 'dram.s1', errorType: 'grammar', type: '词义选择', prompt: 'dram 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dram.q4', senseId: 'dram.s1', errorType: 'meaning', type: '词源', prompt: '记 dram 时，哪句更稳妥？', options: ['先锁住「打兰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打兰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打兰'] },
  });

  D('drama', {
    etymology: {
      origin: '希腊语 drama「做出来的事」。',
      prefix: null,
      root: { text: 'drama', gloss: '戏剧' },
      suffix: null,
      history: [
        { label: 'drama', text: '希腊语 drama「做出来的事」。' },
        { label: '现在', text: '核心用法是：戏剧。' },
      ],
      formationLogic: '考试认现在的用法：戏剧。',
      mnemonic: '看到 drama，先说出「戏剧」。',
      note: '考试认现在的用法：戏剧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drama.', chinese: '这一章反复回到同一个点：戏剧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drama.s1', en: 'Without that drama, the next paragraph is hard to follow.', zh: '没有这个戏剧，下一段会很难读。', structure: 'drama / 表示 / 戏剧', grammar: 'noun，围绕「戏剧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drama.', right: 'He gave me some advice about the drama.', reason: 'advice 不可数。名词 drama 的单复数按词典词形记。', rule: '先确定 drama 是noun，再套「戏剧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drama.q1', senseId: 'drama.s1', errorType: 'meaning', type: '词义选择', prompt: '「drama」在本条的核心意思是：', options: ['戏剧', '完全相反的意思', '一种古代钱币'], answer: '戏剧', explain: 'drama：戏剧。' },
      { id: 'drama.q2', senseId: 'drama.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drama?', options: ['戏剧', 'a kind of ancient coin', 'the past tense of be'], answer: '戏剧', explain: '对的是「戏剧」。' },
      { id: 'drama.q3', senseId: 'drama.s1', errorType: 'grammar', type: '词义选择', prompt: 'drama 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drama.q4', senseId: 'drama.s1', errorType: 'meaning', type: '词源', prompt: '记 drama 时，哪句更稳妥？', options: ['先锁住「戏剧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「戏剧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['戏剧'] },
  });

  D('drape', {
    etymology: {
      origin: '现代英语常用词「drape」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drape', gloss: '（松散地）悬挂' },
      suffix: null,
      history: [
        { label: 'drape', text: '现代英语常用词「drape」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（松散地）悬挂。' },
      ],
      formationLogic: '核心义：（松散地）悬挂。',
      mnemonic: '看到 drape，先说出「（松散地）悬挂」。',
      note: '核心义：（松散地）悬挂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drape before the office closed.', chinese: '他们同意在办公室关门前做这件事：（松散地）悬挂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drape.s1', en: 'The deadline forced the team to drape that afternoon.', zh: '截止日期逼着小组在那天下午（松散地）悬挂。', structure: 'drape / 表示 / （松散地）悬挂', grammar: 'verb，围绕「（松散地）悬挂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drapeed it yesterday without checking the real past form.', right: 'Check the past form of "drape" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drape 是verb，再套「（松散地）悬挂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drape.q1', senseId: 'drape.s1', errorType: 'meaning', type: '词义选择', prompt: '「drape」在本条的核心意思是：', options: ['（松散地）悬挂', '完全相反的意思', '一种古代钱币'], answer: '（松散地）悬挂', explain: 'drape：（松散地）悬挂。' },
      { id: 'drape.q2', senseId: 'drape.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drape?', options: ['（松散地）悬挂', 'a kind of ancient coin', 'the past tense of be'], answer: '（松散地）悬挂', explain: '对的是「（松散地）悬挂」。' },
      { id: 'drape.q3', senseId: 'drape.s1', errorType: 'grammar', type: '词义选择', prompt: 'drape 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drape.q4', senseId: 'drape.s1', errorType: 'meaning', type: '词源', prompt: '记 drape 时，哪句更稳妥？', options: ['先锁住「（松散地）悬挂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（松散地）悬挂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（松散地）悬挂'] },
  });

  D('drastic', {
    etymology: {
      origin: '英语派生：drast + -ic，词性转到「激烈的」。',
      prefix: null,
      root: { text: 'drast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'drastic', text: '英语派生：drast + -ic，词性转到「激烈的」。' },
        { label: '现在', text: '核心用法是：激烈的。' },
      ],
      formationLogic: '先认词干 drast，再看词尾。',
      mnemonic: '看到 drastic，先说出「激烈的」。',
      note: '先认词干 drast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was drastic.', chinese: '即使是初读者也能看出，这个结果是激烈的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drastic.s1', en: 'They wanted a drastic answer, not a long speech.', zh: '他们要一个激烈的的答复，不要长篇发言。', structure: 'drastic / 表示 / 激烈的', grammar: 'adjective，围绕「激烈的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are drastic.', right: 'The news is drastic.', reason: 'news 作主语时动词用单数。', rule: '先确定 drastic 是adjective，再套「激烈的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drastic.q1', senseId: 'drastic.s1', errorType: 'meaning', type: '词义选择', prompt: '「drastic」在本条的核心意思是：', options: ['激烈的', '完全相反的意思', '一种古代钱币'], answer: '激烈的', explain: 'drastic：激烈的。' },
      { id: 'drastic.q2', senseId: 'drastic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drastic?', options: ['激烈的', 'a kind of ancient coin', 'the past tense of be'], answer: '激烈的', explain: '对的是「激烈的」。' },
      { id: 'drastic.q3', senseId: 'drastic.s1', errorType: 'grammar', type: '词义选择', prompt: 'drastic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'drastic.q4', senseId: 'drastic.s1', errorType: 'meaning', type: '词源', prompt: '记 drastic 时，哪句更稳妥？', options: ['先锁住「激烈的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「激烈的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['激烈的'] },
  });

  D('draw', {
    etymology: {
      origin: '古英语 dragan「拉」。画画是把线条拉出来。',
      prefix: null,
      root: { text: 'draw', gloss: '画' },
      suffix: null,
      history: [
        { label: 'draw', text: '古英语 dragan「拉」。画画是把线条拉出来。' },
        { label: '现在', text: '核心用法是：画。' },
      ],
      formationLogic: '考试认现在的用法：画。',
      mnemonic: '看到 draw，先说出「画」。',
      note: '考试认现在的用法：画。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to draw before the office closed.', chinese: '他们同意在办公室关门前做这件事：画。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'draw.s1', en: 'The deadline forced the team to draw that afternoon.', zh: '截止日期逼着小组在那天下午画。', structure: 'draw / 表示 / 画', grammar: 'verb，围绕「画」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drawed it yesterday without checking the real past form.', right: 'Check the past form of "draw" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 draw 是verb，再套「画」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'draw.q1', senseId: 'draw.s1', errorType: 'meaning', type: '词义选择', prompt: '「draw」在本条的核心意思是：', options: ['画', '完全相反的意思', '一种古代钱币'], answer: '画', explain: 'draw：画。' },
      { id: 'draw.q2', senseId: 'draw.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches draw?', options: ['画', 'a kind of ancient coin', 'the past tense of be'], answer: '画', explain: '对的是「画」。' },
      { id: 'draw.q3', senseId: 'draw.s1', errorType: 'grammar', type: '词义选择', prompt: 'draw 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'draw.q4', senseId: 'draw.s1', errorType: 'meaning', type: '词源', prompt: '记 draw 时，哪句更稳妥？', options: ['先锁住「画」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「画」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['画'] },
  });

  D('draw in', {
    etymology: {
      origin: '现代英语固定说法「draw in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'draw in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'draw in', text: '现代英语固定说法「draw in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：吸入。' },
      ],
      formationLogic: '核心义：吸入。',
      mnemonic: '看到 draw in，先说出「吸入」。',
      note: '核心义：吸入。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "draw in" and asked the class to keep it as one unit.', chinese: '老师把「draw in」圈出来，让全班把它当成一个整体。它表示吸入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'draw in.s1', en: 'In the margin she wrote "draw in" so nobody would split the phrase.', zh: '她在页边写下「draw in」，免得有人把这个说法拆开。意思是吸入。', structure: 'draw in / 表示 / 吸入', grammar: 'verb，围绕「吸入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of draw in and lost the point.', right: 'Keep "draw in" together: it means 吸入.', reason: '「draw in」要整块理解。', rule: '先确定 draw in 是verb，再套「吸入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'draw in.q1', senseId: 'draw in.s1', errorType: 'meaning', type: '词义选择', prompt: '「draw in」在本条的核心意思是：', options: ['吸入', '完全相反的意思', '一种古代钱币'], answer: '吸入', explain: 'draw in：吸入。' },
      { id: 'draw in.q2', senseId: 'draw in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches draw in?', options: ['吸入', 'a kind of ancient coin', 'the past tense of be'], answer: '吸入', explain: '对的是「吸入」。' },
      { id: 'draw in.q3', senseId: 'draw in.s1', errorType: 'grammar', type: '词义选择', prompt: 'draw in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'draw in.q4', senseId: 'draw in.s1', errorType: 'meaning', type: '词源', prompt: '记 draw in 时，哪句更稳妥？', options: ['先锁住「吸入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「吸入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['吸入'] },
  });

  D('draw out', {
    etymology: {
      origin: '现代英语固定说法「draw out」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'draw out', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'draw out', text: '现代英语固定说法「draw out」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：引出。' },
      ],
      formationLogic: '核心义：引出。',
      mnemonic: '看到 draw out，先说出「引出」。',
      note: '核心义：引出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "draw out" and asked the class to keep it as one unit.', chinese: '老师把「draw out」圈出来，让全班把它当成一个整体。它表示引出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'draw out.s1', en: 'In the margin she wrote "draw out" so nobody would split the phrase.', zh: '她在页边写下「draw out」，免得有人把这个说法拆开。意思是引出。', structure: 'draw out / 表示 / 引出', grammar: 'verb，围绕「引出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of draw out and lost the point.', right: 'Keep "draw out" together: it means 引出.', reason: '「draw out」要整块理解。', rule: '先确定 draw out 是verb，再套「引出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'draw out.q1', senseId: 'draw out.s1', errorType: 'meaning', type: '词义选择', prompt: '「draw out」在本条的核心意思是：', options: ['引出', '完全相反的意思', '一种古代钱币'], answer: '引出', explain: 'draw out：引出。' },
      { id: 'draw out.q2', senseId: 'draw out.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches draw out?', options: ['引出', 'a kind of ancient coin', 'the past tense of be'], answer: '引出', explain: '对的是「引出」。' },
      { id: 'draw out.q3', senseId: 'draw out.s1', errorType: 'grammar', type: '词义选择', prompt: 'draw out 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'draw out.q4', senseId: 'draw out.s1', errorType: 'meaning', type: '词源', prompt: '记 draw out 时，哪句更稳妥？', options: ['先锁住「引出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「引出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['引出'] },
  });

  D('draw up', {
    etymology: {
      origin: '现代英语固定说法「draw up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'draw up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'draw up', text: '现代英语固定说法「draw up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：起草。' },
      ],
      formationLogic: '核心义：起草。',
      mnemonic: '看到 draw up，先说出「起草」。',
      note: '核心义：起草。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "draw up" and asked the class to keep it as one unit.', chinese: '老师把「draw up」圈出来，让全班把它当成一个整体。它表示起草。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'draw up.s1', en: 'In the margin she wrote "draw up" so nobody would split the phrase.', zh: '她在页边写下「draw up」，免得有人把这个说法拆开。意思是起草。', structure: 'draw up / 表示 / 起草', grammar: 'verb，围绕「起草」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of draw up and lost the point.', right: 'Keep "draw up" together: it means 起草.', reason: '「draw up」要整块理解。', rule: '先确定 draw up 是verb，再套「起草」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'draw up.q1', senseId: 'draw up.s1', errorType: 'meaning', type: '词义选择', prompt: '「draw up」在本条的核心意思是：', options: ['起草', '完全相反的意思', '一种古代钱币'], answer: '起草', explain: 'draw up：起草。' },
      { id: 'draw up.q2', senseId: 'draw up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches draw up?', options: ['起草', 'a kind of ancient coin', 'the past tense of be'], answer: '起草', explain: '对的是「起草」。' },
      { id: 'draw up.q3', senseId: 'draw up.s1', errorType: 'grammar', type: '词义选择', prompt: 'draw up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'draw up.q4', senseId: 'draw up.s1', errorType: 'meaning', type: '词源', prompt: '记 draw up 时，哪句更稳妥？', options: ['先锁住「起草」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「起草」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['起草'] },
  });

  D('drawback', {
    etymology: {
      origin: '现代英语常用词「drawback」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drawback', gloss: '缺点' },
      suffix: null,
      history: [
        { label: 'drawback', text: '现代英语常用词「drawback」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：缺点。' },
      ],
      formationLogic: '核心义：缺点。',
      mnemonic: '看到 drawback，先说出「缺点」。',
      note: '核心义：缺点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drawback.', chinese: '这一章反复回到同一个点：缺点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drawback.s1', en: 'Without that drawback, the next paragraph is hard to follow.', zh: '没有这个缺点，下一段会很难读。', structure: 'drawback / 表示 / 缺点', grammar: 'noun，围绕「缺点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drawback.', right: 'He gave me some advice about the drawback.', reason: 'advice 不可数。名词 drawback 的单复数按词典词形记。', rule: '先确定 drawback 是noun，再套「缺点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drawback.q1', senseId: 'drawback.s1', errorType: 'meaning', type: '词义选择', prompt: '「drawback」在本条的核心意思是：', options: ['缺点', '完全相反的意思', '一种古代钱币'], answer: '缺点', explain: 'drawback：缺点。' },
      { id: 'drawback.q2', senseId: 'drawback.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drawback?', options: ['缺点', 'a kind of ancient coin', 'the past tense of be'], answer: '缺点', explain: '对的是「缺点」。' },
      { id: 'drawback.q3', senseId: 'drawback.s1', errorType: 'grammar', type: '词义选择', prompt: 'drawback 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drawback.q4', senseId: 'drawback.s1', errorType: 'meaning', type: '词源', prompt: '记 drawback 时，哪句更稳妥？', options: ['先锁住「缺点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「缺点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缺点'] },
  });

  D('drawer', {
    etymology: {
      origin: 'draw + -er。拉开的抽屉。',
      prefix: null,
      root: { text: 'drawer', gloss: '抽屉' },
      suffix: null,
      history: [
        { label: 'drawer', text: 'draw + -er。拉开的抽屉。' },
        { label: '现在', text: '核心用法是：抽屉。' },
      ],
      formationLogic: '考试认现在的用法：抽屉。',
      mnemonic: '看到 drawer，先说出「抽屉」。',
      note: '考试认现在的用法：抽屉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drawer.', chinese: '这一章反复回到同一个点：抽屉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drawer.s1', en: 'Without that drawer, the next paragraph is hard to follow.', zh: '没有这个抽屉，下一段会很难读。', structure: 'drawer / 表示 / 抽屉', grammar: 'noun，围绕「抽屉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drawer.', right: 'He gave me some advice about the drawer.', reason: 'advice 不可数。名词 drawer 的单复数按词典词形记。', rule: '先确定 drawer 是noun，再套「抽屉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drawer.q1', senseId: 'drawer.s1', errorType: 'meaning', type: '词义选择', prompt: '「drawer」在本条的核心意思是：', options: ['抽屉', '完全相反的意思', '一种古代钱币'], answer: '抽屉', explain: 'drawer：抽屉。' },
      { id: 'drawer.q2', senseId: 'drawer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drawer?', options: ['抽屉', 'a kind of ancient coin', 'the past tense of be'], answer: '抽屉', explain: '对的是「抽屉」。' },
      { id: 'drawer.q3', senseId: 'drawer.s1', errorType: 'grammar', type: '词义选择', prompt: 'drawer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drawer.q4', senseId: 'drawer.s1', errorType: 'meaning', type: '词源', prompt: '记 drawer 时，哪句更稳妥？', options: ['先锁住「抽屉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抽屉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抽屉'] },
  });

  D('drawing', {
    etymology: {
      origin: '英语派生：draw + -ing，词性转到「图画」。',
      prefix: null,
      root: { text: 'draw', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'drawing', text: '英语派生：draw + -ing，词性转到「图画」。' },
        { label: '现在', text: '核心用法是：图画。' },
      ],
      formationLogic: '先认词干 draw，再看词尾。',
      mnemonic: '看到 drawing，先说出「图画」。',
      note: '先认词干 draw，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drawing.', chinese: '这一章反复回到同一个点：图画。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drawing.s1', en: 'Without that drawing, the next paragraph is hard to follow.', zh: '没有这个图画，下一段会很难读。', structure: 'drawing / 表示 / 图画', grammar: 'noun，围绕「图画」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drawing.', right: 'He gave me some advice about the drawing.', reason: 'advice 不可数。名词 drawing 的单复数按词典词形记。', rule: '先确定 drawing 是noun，再套「图画」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drawing.q1', senseId: 'drawing.s1', errorType: 'meaning', type: '词义选择', prompt: '「drawing」在本条的核心意思是：', options: ['图画', '完全相反的意思', '一种古代钱币'], answer: '图画', explain: 'drawing：图画。' },
      { id: 'drawing.q2', senseId: 'drawing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drawing?', options: ['图画', 'a kind of ancient coin', 'the past tense of be'], answer: '图画', explain: '对的是「图画」。' },
      { id: 'drawing.q3', senseId: 'drawing.s1', errorType: 'grammar', type: '词义选择', prompt: 'drawing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drawing.q4', senseId: 'drawing.s1', errorType: 'meaning', type: '词源', prompt: '记 drawing 时，哪句更稳妥？', options: ['先锁住「图画」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「图画」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['图画'] },
  });

  D('dread', {
    etymology: {
      origin: '现代英语常用词「dread」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dread', gloss: '惧怕' },
      suffix: null,
      history: [
        { label: 'dread', text: '现代英语常用词「dread」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：惧怕。' },
      ],
      formationLogic: '核心义：惧怕。',
      mnemonic: '看到 dread，先说出「惧怕」。',
      note: '核心义：惧怕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dread before the office closed.', chinese: '他们同意在办公室关门前做这件事：惧怕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dread.s1', en: 'The deadline forced the team to dread that afternoon.', zh: '截止日期逼着小组在那天下午惧怕。', structure: 'dread / 表示 / 惧怕', grammar: 'verb，围绕「惧怕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dreaded it yesterday without checking the real past form.', right: 'Check the past form of "dread" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dread 是verb，再套「惧怕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dread.q1', senseId: 'dread.s1', errorType: 'meaning', type: '词义选择', prompt: '「dread」在本条的核心意思是：', options: ['惧怕', '完全相反的意思', '一种古代钱币'], answer: '惧怕', explain: 'dread：惧怕。' },
      { id: 'dread.q2', senseId: 'dread.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dread?', options: ['惧怕', 'a kind of ancient coin', 'the past tense of be'], answer: '惧怕', explain: '对的是「惧怕」。' },
      { id: 'dread.q3', senseId: 'dread.s1', errorType: 'grammar', type: '词义选择', prompt: 'dread 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dread.q4', senseId: 'dread.s1', errorType: 'meaning', type: '词源', prompt: '记 dread 时，哪句更稳妥？', options: ['先锁住「惧怕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「惧怕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['惧怕'] },
  });

  D('dreadful', {
    etymology: {
      origin: '英语派生：dread + -ful，词性转到「极糟的」。',
      prefix: null,
      root: { text: 'dread', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dreadful', text: '英语派生：dread + -ful，词性转到「极糟的」。' },
        { label: '现在', text: '核心用法是：极糟的。' },
      ],
      formationLogic: '先认词干 dread，再看词尾。',
      mnemonic: '看到 dreadful，先说出「极糟的」。',
      note: '先认词干 dread，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dreadful.', chinese: '即使是初读者也能看出，这个结果是极糟的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dreadful.s1', en: 'They wanted a dreadful answer, not a long speech.', zh: '他们要一个极糟的的答复，不要长篇发言。', structure: 'dreadful / 表示 / 极糟的', grammar: 'adjective，围绕「极糟的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dreadful.', right: 'The news is dreadful.', reason: 'news 作主语时动词用单数。', rule: '先确定 dreadful 是adjective，再套「极糟的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dreadful.q1', senseId: 'dreadful.s1', errorType: 'meaning', type: '词义选择', prompt: '「dreadful」在本条的核心意思是：', options: ['极糟的', '完全相反的意思', '一种古代钱币'], answer: '极糟的', explain: 'dreadful：极糟的。' },
      { id: 'dreadful.q2', senseId: 'dreadful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dreadful?', options: ['极糟的', 'a kind of ancient coin', 'the past tense of be'], answer: '极糟的', explain: '对的是「极糟的」。' },
      { id: 'dreadful.q3', senseId: 'dreadful.s1', errorType: 'grammar', type: '词义选择', prompt: 'dreadful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dreadful.q4', senseId: 'dreadful.s1', errorType: 'meaning', type: '词源', prompt: '记 dreadful 时，哪句更稳妥？', options: ['先锁住「极糟的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「极糟的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极糟的'] },
  });

  D('dream', {
    etymology: {
      origin: '古英语 dream。',
      prefix: null,
      root: { text: 'dream', gloss: '梦' },
      suffix: null,
      history: [
        { label: 'dream', text: '古英语 dream。' },
        { label: '现在', text: '核心用法是：梦。' },
      ],
      formationLogic: '考试认现在的用法：梦。',
      mnemonic: '看到 dream，先说出「梦」。',
      note: '考试认现在的用法：梦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dream.', chinese: '这一章反复回到同一个点：梦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dream.s1', en: 'Without that dream, the next paragraph is hard to follow.', zh: '没有这个梦，下一段会很难读。', structure: 'dream / 表示 / 梦', grammar: 'noun，围绕「梦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dream.', right: 'He gave me some advice about the dream.', reason: 'advice 不可数。名词 dream 的单复数按词典词形记。', rule: '先确定 dream 是noun，再套「梦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dream.q1', senseId: 'dream.s1', errorType: 'meaning', type: '词义选择', prompt: '「dream」在本条的核心意思是：', options: ['梦', '完全相反的意思', '一种古代钱币'], answer: '梦', explain: 'dream：梦。' },
      { id: 'dream.q2', senseId: 'dream.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dream?', options: ['梦', 'a kind of ancient coin', 'the past tense of be'], answer: '梦', explain: '对的是「梦」。' },
      { id: 'dream.q3', senseId: 'dream.s1', errorType: 'grammar', type: '词义选择', prompt: 'dream 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dream.q4', senseId: 'dream.s1', errorType: 'meaning', type: '词源', prompt: '记 dream 时，哪句更稳妥？', options: ['先锁住「梦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「梦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['梦'] },
  });

  D('dream up', {
    etymology: {
      origin: '现代英语固定说法「dream up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dream up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dream up', text: '现代英语固定说法「dream up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：凭空想出。' },
      ],
      formationLogic: '核心义：凭空想出。',
      mnemonic: '看到 dream up，先说出「凭空想出」。',
      note: '核心义：凭空想出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dream up" and asked the class to keep it as one unit.', chinese: '老师把「dream up」圈出来，让全班把它当成一个整体。它表示凭空想出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dream up.s1', en: 'In the margin she wrote "dream up" so nobody would split the phrase.', zh: '她在页边写下「dream up」，免得有人把这个说法拆开。意思是凭空想出。', structure: 'dream up / 表示 / 凭空想出', grammar: 'verb，围绕「凭空想出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dream up and lost the point.', right: 'Keep "dream up" together: it means 凭空想出.', reason: '「dream up」要整块理解。', rule: '先确定 dream up 是verb，再套「凭空想出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dream up.q1', senseId: 'dream up.s1', errorType: 'meaning', type: '词义选择', prompt: '「dream up」在本条的核心意思是：', options: ['凭空想出', '完全相反的意思', '一种古代钱币'], answer: '凭空想出', explain: 'dream up：凭空想出。' },
      { id: 'dream up.q2', senseId: 'dream up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dream up?', options: ['凭空想出', 'a kind of ancient coin', 'the past tense of be'], answer: '凭空想出', explain: '对的是「凭空想出」。' },
      { id: 'dream up.q3', senseId: 'dream up.s1', errorType: 'grammar', type: '词义选择', prompt: 'dream up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dream up.q4', senseId: 'dream up.s1', errorType: 'meaning', type: '词源', prompt: '记 dream up 时，哪句更稳妥？', options: ['先锁住「凭空想出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凭空想出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凭空想出'] },
  });

  D('drench', {
    etymology: {
      origin: '现代英语常用词「drench」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drench', gloss: '使湿透' },
      suffix: null,
      history: [
        { label: 'drench', text: '现代英语常用词「drench」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使湿透。' },
      ],
      formationLogic: '核心义：使湿透。',
      mnemonic: '看到 drench，先说出「使湿透」。',
      note: '核心义：使湿透。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drench before the office closed.', chinese: '他们同意在办公室关门前做这件事：使湿透。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drench.s1', en: 'The deadline forced the team to drench that afternoon.', zh: '截止日期逼着小组在那天下午使湿透。', structure: 'drench / 表示 / 使湿透', grammar: 'verb，围绕「使湿透」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drenched it yesterday without checking the real past form.', right: 'Check the past form of "drench" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drench 是verb，再套「使湿透」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drench.q1', senseId: 'drench.s1', errorType: 'meaning', type: '词义选择', prompt: '「drench」在本条的核心意思是：', options: ['使湿透', '完全相反的意思', '一种古代钱币'], answer: '使湿透', explain: 'drench：使湿透。' },
      { id: 'drench.q2', senseId: 'drench.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drench?', options: ['使湿透', 'a kind of ancient coin', 'the past tense of be'], answer: '使湿透', explain: '对的是「使湿透」。' },
      { id: 'drench.q3', senseId: 'drench.s1', errorType: 'grammar', type: '词义选择', prompt: 'drench 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drench.q4', senseId: 'drench.s1', errorType: 'meaning', type: '词源', prompt: '记 drench 时，哪句更稳妥？', options: ['先锁住「使湿透」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使湿透」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使湿透'] },
  });

  D('dress', {
    etymology: {
      origin: '古法语 dresser「使直、准备」。',
      prefix: null,
      root: { text: 'dress', gloss: '连衣裙' },
      suffix: null,
      history: [
        { label: 'dress', text: '古法语 dresser「使直、准备」。' },
        { label: '现在', text: '核心用法是：连衣裙。' },
      ],
      formationLogic: '考试认现在的用法：连衣裙。',
      mnemonic: '看到 dress，先说出「连衣裙」。',
      note: '考试认现在的用法：连衣裙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dress.', chinese: '这一章反复回到同一个点：连衣裙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dress.s1', en: 'Without that dress, the next paragraph is hard to follow.', zh: '没有这个连衣裙，下一段会很难读。', structure: 'dress / 表示 / 连衣裙', grammar: 'noun，围绕「连衣裙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dress.', right: 'He gave me some advice about the dress.', reason: 'advice 不可数。名词 dress 的单复数按词典词形记。', rule: '先确定 dress 是noun，再套「连衣裙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dress.q1', senseId: 'dress.s1', errorType: 'meaning', type: '词义选择', prompt: '「dress」在本条的核心意思是：', options: ['连衣裙', '完全相反的意思', '一种古代钱币'], answer: '连衣裙', explain: 'dress：连衣裙。' },
      { id: 'dress.q2', senseId: 'dress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dress?', options: ['连衣裙', 'a kind of ancient coin', 'the past tense of be'], answer: '连衣裙', explain: '对的是「连衣裙」。' },
      { id: 'dress.q3', senseId: 'dress.s1', errorType: 'grammar', type: '词义选择', prompt: 'dress 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dress.q4', senseId: 'dress.s1', errorType: 'meaning', type: '词源', prompt: '记 dress 时，哪句更稳妥？', options: ['先锁住「连衣裙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连衣裙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连衣裙'] },
  });

  D('dress in', {
    etymology: {
      origin: '现代英语固定说法「dress in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dress in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dress in', text: '现代英语固定说法「dress in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：穿着。' },
      ],
      formationLogic: '核心义：穿着。',
      mnemonic: '看到 dress in，先说出「穿着」。',
      note: '核心义：穿着。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dress in" and asked the class to keep it as one unit.', chinese: '老师把「dress in」圈出来，让全班把它当成一个整体。它表示穿着。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dress in.s1', en: 'In the margin she wrote "dress in" so nobody would split the phrase.', zh: '她在页边写下「dress in」，免得有人把这个说法拆开。意思是穿着。', structure: 'dress in / 表示 / 穿着', grammar: 'verb，围绕「穿着」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dress in and lost the point.', right: 'Keep "dress in" together: it means 穿着.', reason: '「dress in」要整块理解。', rule: '先确定 dress in 是verb，再套「穿着」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dress in.q1', senseId: 'dress in.s1', errorType: 'meaning', type: '词义选择', prompt: '「dress in」在本条的核心意思是：', options: ['穿着', '完全相反的意思', '一种古代钱币'], answer: '穿着', explain: 'dress in：穿着。' },
      { id: 'dress in.q2', senseId: 'dress in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dress in?', options: ['穿着', 'a kind of ancient coin', 'the past tense of be'], answer: '穿着', explain: '对的是「穿着」。' },
      { id: 'dress in.q3', senseId: 'dress in.s1', errorType: 'grammar', type: '词义选择', prompt: 'dress in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dress in.q4', senseId: 'dress in.s1', errorType: 'meaning', type: '词源', prompt: '记 dress in 时，哪句更稳妥？', options: ['先锁住「穿着」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「穿着」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['穿着'] },
  });

  D('dressing', {
    etymology: {
      origin: '英语派生：dress + -ing，词性转到「调味汁」。',
      prefix: null,
      root: { text: 'dress', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dressing', text: '英语派生：dress + -ing，词性转到「调味汁」。' },
        { label: '现在', text: '核心用法是：调味汁。' },
      ],
      formationLogic: '先认词干 dress，再看词尾。',
      mnemonic: '看到 dressing，先说出「调味汁」。',
      note: '先认词干 dress，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dressing.', chinese: '这一章反复回到同一个点：调味汁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dressing.s1', en: 'Without that dressing, the next paragraph is hard to follow.', zh: '没有这个调味汁，下一段会很难读。', structure: 'dressing / 表示 / 调味汁', grammar: 'noun，围绕「调味汁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dressing.', right: 'He gave me some advice about the dressing.', reason: 'advice 不可数。名词 dressing 的单复数按词典词形记。', rule: '先确定 dressing 是noun，再套「调味汁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dressing.q1', senseId: 'dressing.s1', errorType: 'meaning', type: '词义选择', prompt: '「dressing」在本条的核心意思是：', options: ['调味汁', '完全相反的意思', '一种古代钱币'], answer: '调味汁', explain: 'dressing：调味汁。' },
      { id: 'dressing.q2', senseId: 'dressing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dressing?', options: ['调味汁', 'a kind of ancient coin', 'the past tense of be'], answer: '调味汁', explain: '对的是「调味汁」。' },
      { id: 'dressing.q3', senseId: 'dressing.s1', errorType: 'grammar', type: '词义选择', prompt: 'dressing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dressing.q4', senseId: 'dressing.s1', errorType: 'meaning', type: '词源', prompt: '记 dressing 时，哪句更稳妥？', options: ['先锁住「调味汁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「调味汁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['调味汁'] },
  });

  D('dressmaker', {
    etymology: {
      origin: '英语派生：dressmak + -er，词性转到「裁缝」。',
      prefix: null,
      root: { text: 'dressmak', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dressmaker', text: '英语派生：dressmak + -er，词性转到「裁缝」。' },
        { label: '现在', text: '核心用法是：裁缝。' },
      ],
      formationLogic: '先认词干 dressmak，再看词尾。',
      mnemonic: '看到 dressmaker，先说出「裁缝」。',
      note: '先认词干 dressmak，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dressmaker.', chinese: '这一章反复回到同一个点：裁缝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dressmaker.s1', en: 'Without that dressmaker, the next paragraph is hard to follow.', zh: '没有这个裁缝，下一段会很难读。', structure: 'dressmaker / 表示 / 裁缝', grammar: 'noun，围绕「裁缝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dressmaker.', right: 'He gave me some advice about the dressmaker.', reason: 'advice 不可数。名词 dressmaker 的单复数按词典词形记。', rule: '先确定 dressmaker 是noun，再套「裁缝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dressmaker.q1', senseId: 'dressmaker.s1', errorType: 'meaning', type: '词义选择', prompt: '「dressmaker」在本条的核心意思是：', options: ['裁缝', '完全相反的意思', '一种古代钱币'], answer: '裁缝', explain: 'dressmaker：裁缝。' },
      { id: 'dressmaker.q2', senseId: 'dressmaker.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dressmaker?', options: ['裁缝', 'a kind of ancient coin', 'the past tense of be'], answer: '裁缝', explain: '对的是「裁缝」。' },
      { id: 'dressmaker.q3', senseId: 'dressmaker.s1', errorType: 'grammar', type: '词义选择', prompt: 'dressmaker 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dressmaker.q4', senseId: 'dressmaker.s1', errorType: 'meaning', type: '词源', prompt: '记 dressmaker 时，哪句更稳妥？', options: ['先锁住「裁缝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「裁缝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['裁缝'] },
  });

  D('dribble', {
    etymology: {
      origin: '现代英语常用词「dribble」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dribble', gloss: '淌下' },
      suffix: null,
      history: [
        { label: 'dribble', text: '现代英语常用词「dribble」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：淌下。' },
      ],
      formationLogic: '核心义：淌下。',
      mnemonic: '看到 dribble，先说出「淌下」。',
      note: '核心义：淌下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dribble before the office closed.', chinese: '他们同意在办公室关门前做这件事：淌下。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dribble.s1', en: 'The deadline forced the team to dribble that afternoon.', zh: '截止日期逼着小组在那天下午淌下。', structure: 'dribble / 表示 / 淌下', grammar: 'verb，围绕「淌下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dribbleed it yesterday without checking the real past form.', right: 'Check the past form of "dribble" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dribble 是verb，再套「淌下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dribble.q1', senseId: 'dribble.s1', errorType: 'meaning', type: '词义选择', prompt: '「dribble」在本条的核心意思是：', options: ['淌下', '完全相反的意思', '一种古代钱币'], answer: '淌下', explain: 'dribble：淌下。' },
      { id: 'dribble.q2', senseId: 'dribble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dribble?', options: ['淌下', 'a kind of ancient coin', 'the past tense of be'], answer: '淌下', explain: '对的是「淌下」。' },
      { id: 'dribble.q3', senseId: 'dribble.s1', errorType: 'grammar', type: '词义选择', prompt: 'dribble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dribble.q4', senseId: 'dribble.s1', errorType: 'meaning', type: '词源', prompt: '记 dribble 时，哪句更稳妥？', options: ['先锁住「淌下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「淌下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['淌下'] },
  });

  D('drift', {
    etymology: {
      origin: '与 drive 同源。被推着走。',
      prefix: null,
      root: { text: 'drift', gloss: '漂流' },
      suffix: null,
      history: [
        { label: 'drift', text: '与 drive 同源。被推着走。' },
        { label: '现在', text: '核心用法是：漂流。' },
      ],
      formationLogic: '考试认现在的用法：漂流。',
      mnemonic: '看到 drift，先说出「漂流」。',
      note: '考试认现在的用法：漂流。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drift before the office closed.', chinese: '他们同意在办公室关门前做这件事：漂流。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drift.s1', en: 'The deadline forced the team to drift that afternoon.', zh: '截止日期逼着小组在那天下午漂流。', structure: 'drift / 表示 / 漂流', grammar: 'verb，围绕「漂流」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drifted it yesterday without checking the real past form.', right: 'Check the past form of "drift" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drift 是verb，再套「漂流」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drift.q1', senseId: 'drift.s1', errorType: 'meaning', type: '词义选择', prompt: '「drift」在本条的核心意思是：', options: ['漂流', '完全相反的意思', '一种古代钱币'], answer: '漂流', explain: 'drift：漂流。' },
      { id: 'drift.q2', senseId: 'drift.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drift?', options: ['漂流', 'a kind of ancient coin', 'the past tense of be'], answer: '漂流', explain: '对的是「漂流」。' },
      { id: 'drift.q3', senseId: 'drift.s1', errorType: 'grammar', type: '词义选择', prompt: 'drift 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drift.q4', senseId: 'drift.s1', errorType: 'meaning', type: '词源', prompt: '记 drift 时，哪句更稳妥？', options: ['先锁住「漂流」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「漂流」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['漂流'] },
  });

  D('drifter', {
    etymology: {
      origin: '英语派生：drift + -er，词性转到「漂泊者」。',
      prefix: null,
      root: { text: 'drift', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'drifter', text: '英语派生：drift + -er，词性转到「漂泊者」。' },
        { label: '现在', text: '核心用法是：漂泊者。' },
      ],
      formationLogic: '先认词干 drift，再看词尾。',
      mnemonic: '看到 drifter，先说出「漂泊者」。',
      note: '先认词干 drift，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drifter.', chinese: '这一章反复回到同一个点：漂泊者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drifter.s1', en: 'Without that drifter, the next paragraph is hard to follow.', zh: '没有这个漂泊者，下一段会很难读。', structure: 'drifter / 表示 / 漂泊者', grammar: 'noun，围绕「漂泊者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drifter.', right: 'He gave me some advice about the drifter.', reason: 'advice 不可数。名词 drifter 的单复数按词典词形记。', rule: '先确定 drifter 是noun，再套「漂泊者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drifter.q1', senseId: 'drifter.s1', errorType: 'meaning', type: '词义选择', prompt: '「drifter」在本条的核心意思是：', options: ['漂泊者', '完全相反的意思', '一种古代钱币'], answer: '漂泊者', explain: 'drifter：漂泊者。' },
      { id: 'drifter.q2', senseId: 'drifter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drifter?', options: ['漂泊者', 'a kind of ancient coin', 'the past tense of be'], answer: '漂泊者', explain: '对的是「漂泊者」。' },
      { id: 'drifter.q3', senseId: 'drifter.s1', errorType: 'grammar', type: '词义选择', prompt: 'drifter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drifter.q4', senseId: 'drifter.s1', errorType: 'meaning', type: '词源', prompt: '记 drifter 时，哪句更稳妥？', options: ['先锁住「漂泊者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「漂泊者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['漂泊者'] },
  });

  D('drill', {
    etymology: {
      origin: '荷兰语 drillen「钻孔、操练」。',
      prefix: null,
      root: { text: 'drill', gloss: '钻' },
      suffix: null,
      history: [
        { label: 'drill', text: '荷兰语 drillen「钻孔、操练」。' },
        { label: '现在', text: '核心用法是：钻。' },
      ],
      formationLogic: '考试认现在的用法：钻。',
      mnemonic: '看到 drill，先说出「钻」。',
      note: '考试认现在的用法：钻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drill.', chinese: '这一章反复回到同一个点：钻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drill.s1', en: 'Without that drill, the next paragraph is hard to follow.', zh: '没有这个钻，下一段会很难读。', structure: 'drill / 表示 / 钻', grammar: 'noun，围绕「钻」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drill.', right: 'He gave me some advice about the drill.', reason: 'advice 不可数。名词 drill 的单复数按词典词形记。', rule: '先确定 drill 是noun，再套「钻」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drill.q1', senseId: 'drill.s1', errorType: 'meaning', type: '词义选择', prompt: '「drill」在本条的核心意思是：', options: ['钻', '完全相反的意思', '一种古代钱币'], answer: '钻', explain: 'drill：钻。' },
      { id: 'drill.q2', senseId: 'drill.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drill?', options: ['钻', 'a kind of ancient coin', 'the past tense of be'], answer: '钻', explain: '对的是「钻」。' },
      { id: 'drill.q3', senseId: 'drill.s1', errorType: 'grammar', type: '词义选择', prompt: 'drill 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drill.q4', senseId: 'drill.s1', errorType: 'meaning', type: '词源', prompt: '记 drill 时，哪句更稳妥？', options: ['先锁住「钻」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「钻」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['钻'] },
  });

  D('drink', {
    etymology: {
      origin: '古英语 drincan。',
      prefix: null,
      root: { text: 'drink', gloss: '喝' },
      suffix: null,
      history: [
        { label: 'drink', text: '古英语 drincan。' },
        { label: '现在', text: '核心用法是：喝。' },
      ],
      formationLogic: '考试认现在的用法：喝。',
      mnemonic: '看到 drink，先说出「喝」。',
      note: '考试认现在的用法：喝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drink before the office closed.', chinese: '他们同意在办公室关门前做这件事：喝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drink.s1', en: 'The deadline forced the team to drink that afternoon.', zh: '截止日期逼着小组在那天下午喝。', structure: 'drink / 表示 / 喝', grammar: 'verb，围绕「喝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drinked it yesterday without checking the real past form.', right: 'Check the past form of "drink" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drink 是verb，再套「喝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drink.q1', senseId: 'drink.s1', errorType: 'meaning', type: '词义选择', prompt: '「drink」在本条的核心意思是：', options: ['喝', '完全相反的意思', '一种古代钱币'], answer: '喝', explain: 'drink：喝。' },
      { id: 'drink.q2', senseId: 'drink.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drink?', options: ['喝', 'a kind of ancient coin', 'the past tense of be'], answer: '喝', explain: '对的是「喝」。' },
      { id: 'drink.q3', senseId: 'drink.s1', errorType: 'grammar', type: '词义选择', prompt: 'drink 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drink.q4', senseId: 'drink.s1', errorType: 'meaning', type: '词源', prompt: '记 drink 时，哪句更稳妥？', options: ['先锁住「喝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喝'] },
  });

  D('drinks', {
    etymology: {
      origin: '现代英语常用词「drinks」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drinks', gloss: '饮料' },
      suffix: null,
      history: [
        { label: 'drinks', text: '现代英语常用词「drinks」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：饮料。' },
      ],
      formationLogic: '核心义：饮料。',
      mnemonic: '看到 drinks，先说出「饮料」。',
      note: '核心义：饮料。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drinks.', chinese: '这一章反复回到同一个点：饮料。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drinks.s1', en: 'Without that drinks, the next paragraph is hard to follow.', zh: '没有这个饮料，下一段会很难读。', structure: 'drinks / 表示 / 饮料', grammar: 'noun，围绕「饮料」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drinks.', right: 'He gave me some advice about the drinks.', reason: 'advice 不可数。名词 drinks 的单复数按词典词形记。', rule: '先确定 drinks 是noun，再套「饮料」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drinks.q1', senseId: 'drinks.s1', errorType: 'meaning', type: '词义选择', prompt: '「drinks」在本条的核心意思是：', options: ['饮料', '完全相反的意思', '一种古代钱币'], answer: '饮料', explain: 'drinks：饮料。' },
      { id: 'drinks.q2', senseId: 'drinks.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drinks?', options: ['饮料', 'a kind of ancient coin', 'the past tense of be'], answer: '饮料', explain: '对的是「饮料」。' },
      { id: 'drinks.q3', senseId: 'drinks.s1', errorType: 'grammar', type: '词义选择', prompt: 'drinks 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drinks.q4', senseId: 'drinks.s1', errorType: 'meaning', type: '词源', prompt: '记 drinks 时，哪句更稳妥？', options: ['先锁住「饮料」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「饮料」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['饮料'] },
  });

  D('drip', {
    etymology: {
      origin: '现代英语常用词「drip」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drip', gloss: '滴' },
      suffix: null,
      history: [
        { label: 'drip', text: '现代英语常用词「drip」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：滴。' },
      ],
      formationLogic: '核心义：滴。',
      mnemonic: '看到 drip，先说出「滴」。',
      note: '核心义：滴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drip before the office closed.', chinese: '他们同意在办公室关门前做这件事：滴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drip.s1', en: 'The deadline forced the team to drip that afternoon.', zh: '截止日期逼着小组在那天下午滴。', structure: 'drip / 表示 / 滴', grammar: 'verb，围绕「滴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She driped it yesterday without checking the real past form.', right: 'Check the past form of "drip" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drip 是verb，再套「滴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drip.q1', senseId: 'drip.s1', errorType: 'meaning', type: '词义选择', prompt: '「drip」在本条的核心意思是：', options: ['滴', '完全相反的意思', '一种古代钱币'], answer: '滴', explain: 'drip：滴。' },
      { id: 'drip.q2', senseId: 'drip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drip?', options: ['滴', 'a kind of ancient coin', 'the past tense of be'], answer: '滴', explain: '对的是「滴」。' },
      { id: 'drip.q3', senseId: 'drip.s1', errorType: 'grammar', type: '词义选择', prompt: 'drip 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drip.q4', senseId: 'drip.s1', errorType: 'meaning', type: '词源', prompt: '记 drip 时，哪句更稳妥？', options: ['先锁住「滴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「滴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['滴'] },
  });

  D('drive', {
    etymology: {
      origin: '古英语 drifan「驱赶」。',
      prefix: null,
      root: { text: 'drive', gloss: '驾驶' },
      suffix: null,
      history: [
        { label: 'drive', text: '古英语 drifan「驱赶」。' },
        { label: '现在', text: '核心用法是：驾驶。' },
      ],
      formationLogic: '考试认现在的用法：驾驶。',
      mnemonic: '看到 drive，先说出「驾驶」。',
      note: '考试认现在的用法：驾驶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drive before the office closed.', chinese: '他们同意在办公室关门前做这件事：驾驶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drive.s1', en: 'The deadline forced the team to drive that afternoon.', zh: '截止日期逼着小组在那天下午驾驶。', structure: 'drive / 表示 / 驾驶', grammar: 'verb，围绕「驾驶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She driveed it yesterday without checking the real past form.', right: 'Check the past form of "drive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drive 是verb，再套「驾驶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drive.q1', senseId: 'drive.s1', errorType: 'meaning', type: '词义选择', prompt: '「drive」在本条的核心意思是：', options: ['驾驶', '完全相反的意思', '一种古代钱币'], answer: '驾驶', explain: 'drive：驾驶。' },
      { id: 'drive.q2', senseId: 'drive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drive?', options: ['驾驶', 'a kind of ancient coin', 'the past tense of be'], answer: '驾驶', explain: '对的是「驾驶」。' },
      { id: 'drive.q3', senseId: 'drive.s1', errorType: 'grammar', type: '词义选择', prompt: 'drive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drive.q4', senseId: 'drive.s1', errorType: 'meaning', type: '词源', prompt: '记 drive 时，哪句更稳妥？', options: ['先锁住「驾驶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驾驶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驾驶'] },
  });

  D('drive back', {
    etymology: {
      origin: '现代英语固定说法「drive back」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'drive back', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'drive back', text: '现代英语固定说法「drive back」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：击退。' },
      ],
      formationLogic: '核心义：击退。',
      mnemonic: '看到 drive back，先说出「击退」。',
      note: '核心义：击退。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "drive back" and asked the class to keep it as one unit.', chinese: '老师把「drive back」圈出来，让全班把它当成一个整体。它表示击退。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drive back.s1', en: 'In the margin she wrote "drive back" so nobody would split the phrase.', zh: '她在页边写下「drive back」，免得有人把这个说法拆开。意思是击退。', structure: 'drive back / 表示 / 击退', grammar: 'verb，围绕「击退」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of drive back and lost the point.', right: 'Keep "drive back" together: it means 击退.', reason: '「drive back」要整块理解。', rule: '先确定 drive back 是verb，再套「击退」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drive back.q1', senseId: 'drive back.s1', errorType: 'meaning', type: '词义选择', prompt: '「drive back」在本条的核心意思是：', options: ['击退', '完全相反的意思', '一种古代钱币'], answer: '击退', explain: 'drive back：击退。' },
      { id: 'drive back.q2', senseId: 'drive back.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drive back?', options: ['击退', 'a kind of ancient coin', 'the past tense of be'], answer: '击退', explain: '对的是「击退」。' },
      { id: 'drive back.q3', senseId: 'drive back.s1', errorType: 'grammar', type: '词义选择', prompt: 'drive back 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drive back.q4', senseId: 'drive back.s1', errorType: 'meaning', type: '词源', prompt: '记 drive back 时，哪句更稳妥？', options: ['先锁住「击退」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「击退」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['击退'] },
  });

  D('driver', {
    etymology: {
      origin: '英语派生：driv + -er，词性转到「司机」。',
      prefix: null,
      root: { text: 'driv', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'driver', text: '英语派生：driv + -er，词性转到「司机」。' },
        { label: '现在', text: '核心用法是：司机。' },
      ],
      formationLogic: '先认词干 driv，再看词尾。',
      mnemonic: '看到 driver，先说出「司机」。',
      note: '先认词干 driv，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one driver.', chinese: '这一章反复回到同一个点：司机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'driver.s1', en: 'Without that driver, the next paragraph is hard to follow.', zh: '没有这个司机，下一段会很难读。', structure: 'driver / 表示 / 司机', grammar: 'noun，围绕「司机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the driver.', right: 'He gave me some advice about the driver.', reason: 'advice 不可数。名词 driver 的单复数按词典词形记。', rule: '先确定 driver 是noun，再套「司机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'driver.q1', senseId: 'driver.s1', errorType: 'meaning', type: '词义选择', prompt: '「driver」在本条的核心意思是：', options: ['司机', '完全相反的意思', '一种古代钱币'], answer: '司机', explain: 'driver：司机。' },
      { id: 'driver.q2', senseId: 'driver.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches driver?', options: ['司机', 'a kind of ancient coin', 'the past tense of be'], answer: '司机', explain: '对的是「司机」。' },
      { id: 'driver.q3', senseId: 'driver.s1', errorType: 'grammar', type: '词义选择', prompt: 'driver 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'driver.q4', senseId: 'driver.s1', errorType: 'meaning', type: '词源', prompt: '记 driver 时，哪句更稳妥？', options: ['先锁住「司机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「司机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['司机'] },
  });

  D('drizzle', {
    etymology: {
      origin: '现代英语常用词「drizzle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drizzle', gloss: '毛毛雨' },
      suffix: null,
      history: [
        { label: 'drizzle', text: '现代英语常用词「drizzle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：毛毛雨。' },
      ],
      formationLogic: '核心义：毛毛雨。',
      mnemonic: '看到 drizzle，先说出「毛毛雨」。',
      note: '核心义：毛毛雨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drizzle.', chinese: '这一章反复回到同一个点：毛毛雨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drizzle.s1', en: 'Without that drizzle, the next paragraph is hard to follow.', zh: '没有这个毛毛雨，下一段会很难读。', structure: 'drizzle / 表示 / 毛毛雨', grammar: 'noun，围绕「毛毛雨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drizzle.', right: 'He gave me some advice about the drizzle.', reason: 'advice 不可数。名词 drizzle 的单复数按词典词形记。', rule: '先确定 drizzle 是noun，再套「毛毛雨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drizzle.q1', senseId: 'drizzle.s1', errorType: 'meaning', type: '词义选择', prompt: '「drizzle」在本条的核心意思是：', options: ['毛毛雨', '完全相反的意思', '一种古代钱币'], answer: '毛毛雨', explain: 'drizzle：毛毛雨。' },
      { id: 'drizzle.q2', senseId: 'drizzle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drizzle?', options: ['毛毛雨', 'a kind of ancient coin', 'the past tense of be'], answer: '毛毛雨', explain: '对的是「毛毛雨」。' },
      { id: 'drizzle.q3', senseId: 'drizzle.s1', errorType: 'grammar', type: '词义选择', prompt: 'drizzle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drizzle.q4', senseId: 'drizzle.s1', errorType: 'meaning', type: '词源', prompt: '记 drizzle 时，哪句更稳妥？', options: ['先锁住「毛毛雨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「毛毛雨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毛毛雨'] },
  });

  D('drone', {
    etymology: {
      origin: '现代英语常用词「drone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drone', gloss: '嗡嗡声' },
      suffix: null,
      history: [
        { label: 'drone', text: '现代英语常用词「drone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：嗡嗡声。' },
      ],
      formationLogic: '核心义：嗡嗡声。',
      mnemonic: '看到 drone，先说出「嗡嗡声」。',
      note: '核心义：嗡嗡声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drone.', chinese: '这一章反复回到同一个点：嗡嗡声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drone.s1', en: 'Without that drone, the next paragraph is hard to follow.', zh: '没有这个嗡嗡声，下一段会很难读。', structure: 'drone / 表示 / 嗡嗡声', grammar: 'noun，围绕「嗡嗡声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drone.', right: 'He gave me some advice about the drone.', reason: 'advice 不可数。名词 drone 的单复数按词典词形记。', rule: '先确定 drone 是noun，再套「嗡嗡声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drone.q1', senseId: 'drone.s1', errorType: 'meaning', type: '词义选择', prompt: '「drone」在本条的核心意思是：', options: ['嗡嗡声', '完全相反的意思', '一种古代钱币'], answer: '嗡嗡声', explain: 'drone：嗡嗡声。' },
      { id: 'drone.q2', senseId: 'drone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drone?', options: ['嗡嗡声', 'a kind of ancient coin', 'the past tense of be'], answer: '嗡嗡声', explain: '对的是「嗡嗡声」。' },
      { id: 'drone.q3', senseId: 'drone.s1', errorType: 'grammar', type: '词义选择', prompt: 'drone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drone.q4', senseId: 'drone.s1', errorType: 'meaning', type: '词源', prompt: '记 drone 时，哪句更稳妥？', options: ['先锁住「嗡嗡声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嗡嗡声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嗡嗡声'] },
  });

  D('drop', {
    etymology: {
      origin: '古英语 dropa。',
      prefix: null,
      root: { text: 'drop', gloss: '落下' },
      suffix: null,
      history: [
        { label: 'drop', text: '古英语 dropa。' },
        { label: '现在', text: '核心用法是：落下。' },
      ],
      formationLogic: '考试认现在的用法：落下。',
      mnemonic: '看到 drop，先说出「落下」。',
      note: '考试认现在的用法：落下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drop before the office closed.', chinese: '他们同意在办公室关门前做这件事：落下。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drop.s1', en: 'The deadline forced the team to drop that afternoon.', zh: '截止日期逼着小组在那天下午落下。', structure: 'drop / 表示 / 落下', grammar: 'verb，围绕「落下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She droped it yesterday without checking the real past form.', right: 'Check the past form of "drop" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drop 是verb，再套「落下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drop.q1', senseId: 'drop.s1', errorType: 'meaning', type: '词义选择', prompt: '「drop」在本条的核心意思是：', options: ['落下', '完全相反的意思', '一种古代钱币'], answer: '落下', explain: 'drop：落下。' },
      { id: 'drop.q2', senseId: 'drop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drop?', options: ['落下', 'a kind of ancient coin', 'the past tense of be'], answer: '落下', explain: '对的是「落下」。' },
      { id: 'drop.q3', senseId: 'drop.s1', errorType: 'grammar', type: '词义选择', prompt: 'drop 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drop.q4', senseId: 'drop.s1', errorType: 'meaning', type: '词源', prompt: '记 drop 时，哪句更稳妥？', options: ['先锁住「落下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「落下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['落下'] },
  });

  D('dropout', {
    etymology: {
      origin: '现代英语常用词「dropout」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dropout', gloss: '辍学者' },
      suffix: null,
      history: [
        { label: 'dropout', text: '现代英语常用词「dropout」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：辍学者。' },
      ],
      formationLogic: '核心义：辍学者。',
      mnemonic: '看到 dropout，先说出「辍学者」。',
      note: '核心义：辍学者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dropout.', chinese: '这一章反复回到同一个点：辍学者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dropout.s1', en: 'Without that dropout, the next paragraph is hard to follow.', zh: '没有这个辍学者，下一段会很难读。', structure: 'dropout / 表示 / 辍学者', grammar: 'noun，围绕「辍学者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dropout.', right: 'He gave me some advice about the dropout.', reason: 'advice 不可数。名词 dropout 的单复数按词典词形记。', rule: '先确定 dropout 是noun，再套「辍学者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dropout.q1', senseId: 'dropout.s1', errorType: 'meaning', type: '词义选择', prompt: '「dropout」在本条的核心意思是：', options: ['辍学者', '完全相反的意思', '一种古代钱币'], answer: '辍学者', explain: 'dropout：辍学者。' },
      { id: 'dropout.q2', senseId: 'dropout.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dropout?', options: ['辍学者', 'a kind of ancient coin', 'the past tense of be'], answer: '辍学者', explain: '对的是「辍学者」。' },
      { id: 'dropout.q3', senseId: 'dropout.s1', errorType: 'grammar', type: '词义选择', prompt: 'dropout 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dropout.q4', senseId: 'dropout.s1', errorType: 'meaning', type: '词源', prompt: '记 dropout 时，哪句更稳妥？', options: ['先锁住「辍学者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「辍学者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['辍学者'] },
  });

  D('drought', {
    etymology: {
      origin: '古英语 drugath「干燥」。',
      prefix: null,
      root: { text: 'drought', gloss: '干旱' },
      suffix: null,
      history: [
        { label: 'drought', text: '古英语 drugath「干燥」。' },
        { label: '现在', text: '核心用法是：干旱。' },
      ],
      formationLogic: '考试认现在的用法：干旱。',
      mnemonic: '看到 drought，先说出「干旱」。',
      note: '考试认现在的用法：干旱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drought.', chinese: '这一章反复回到同一个点：干旱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drought.s1', en: 'Without that drought, the next paragraph is hard to follow.', zh: '没有这个干旱，下一段会很难读。', structure: 'drought / 表示 / 干旱', grammar: 'noun，围绕「干旱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drought.', right: 'He gave me some advice about the drought.', reason: 'advice 不可数。名词 drought 的单复数按词典词形记。', rule: '先确定 drought 是noun，再套「干旱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drought.q1', senseId: 'drought.s1', errorType: 'meaning', type: '词义选择', prompt: '「drought」在本条的核心意思是：', options: ['干旱', '完全相反的意思', '一种古代钱币'], answer: '干旱', explain: 'drought：干旱。' },
      { id: 'drought.q2', senseId: 'drought.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drought?', options: ['干旱', 'a kind of ancient coin', 'the past tense of be'], answer: '干旱', explain: '对的是「干旱」。' },
      { id: 'drought.q3', senseId: 'drought.s1', errorType: 'grammar', type: '词义选择', prompt: 'drought 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drought.q4', senseId: 'drought.s1', errorType: 'meaning', type: '词源', prompt: '记 drought 时，哪句更稳妥？', options: ['先锁住「干旱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干旱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干旱'] },
  });

  D('drown', {
    etymology: {
      origin: '中古英语 drounen。',
      prefix: null,
      root: { text: 'drown', gloss: '淹死' },
      suffix: null,
      history: [
        { label: 'drown', text: '中古英语 drounen。' },
        { label: '现在', text: '核心用法是：淹死。' },
      ],
      formationLogic: '考试认现在的用法：淹死。',
      mnemonic: '看到 drown，先说出「淹死」。',
      note: '考试认现在的用法：淹死。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drown before the office closed.', chinese: '他们同意在办公室关门前做这件事：淹死。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drown.s1', en: 'The deadline forced the team to drown that afternoon.', zh: '截止日期逼着小组在那天下午淹死。', structure: 'drown / 表示 / 淹死', grammar: 'verb，围绕「淹死」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drowned it yesterday without checking the real past form.', right: 'Check the past form of "drown" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drown 是verb，再套「淹死」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drown.q1', senseId: 'drown.s1', errorType: 'meaning', type: '词义选择', prompt: '「drown」在本条的核心意思是：', options: ['淹死', '完全相反的意思', '一种古代钱币'], answer: '淹死', explain: 'drown：淹死。' },
      { id: 'drown.q2', senseId: 'drown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drown?', options: ['淹死', 'a kind of ancient coin', 'the past tense of be'], answer: '淹死', explain: '对的是「淹死」。' },
      { id: 'drown.q3', senseId: 'drown.s1', errorType: 'grammar', type: '词义选择', prompt: 'drown 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drown.q4', senseId: 'drown.s1', errorType: 'meaning', type: '词源', prompt: '记 drown 时，哪句更稳妥？', options: ['先锁住「淹死」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「淹死」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['淹死'] },
  });

  D('drudge', {
    etymology: {
      origin: '现代英语常用词「drudge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drudge', gloss: '做苦工' },
      suffix: null,
      history: [
        { label: 'drudge', text: '现代英语常用词「drudge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：做苦工。' },
      ],
      formationLogic: '核心义：做苦工。',
      mnemonic: '看到 drudge，先说出「做苦工」。',
      note: '核心义：做苦工。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to drudge before the office closed.', chinese: '他们同意在办公室关门前做这件事：做苦工。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drudge.s1', en: 'The deadline forced the team to drudge that afternoon.', zh: '截止日期逼着小组在那天下午做苦工。', structure: 'drudge / 表示 / 做苦工', grammar: 'verb，围绕「做苦工」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She drudgeed it yesterday without checking the real past form.', right: 'Check the past form of "drudge" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 drudge 是verb，再套「做苦工」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drudge.q1', senseId: 'drudge.s1', errorType: 'meaning', type: '词义选择', prompt: '「drudge」在本条的核心意思是：', options: ['做苦工', '完全相反的意思', '一种古代钱币'], answer: '做苦工', explain: 'drudge：做苦工。' },
      { id: 'drudge.q2', senseId: 'drudge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drudge?', options: ['做苦工', 'a kind of ancient coin', 'the past tense of be'], answer: '做苦工', explain: '对的是「做苦工」。' },
      { id: 'drudge.q3', senseId: 'drudge.s1', errorType: 'grammar', type: '词义选择', prompt: 'drudge 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'drudge.q4', senseId: 'drudge.s1', errorType: 'meaning', type: '词源', prompt: '记 drudge 时，哪句更稳妥？', options: ['先锁住「做苦工」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「做苦工」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['做苦工'] },
  });

  D('drudgery', {
    etymology: {
      origin: '现代英语常用词「drudgery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drudgery', gloss: '苦差事' },
      suffix: null,
      history: [
        { label: 'drudgery', text: '现代英语常用词「drudgery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：苦差事。' },
      ],
      formationLogic: '核心义：苦差事。',
      mnemonic: '看到 drudgery，先说出「苦差事」。',
      note: '核心义：苦差事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drudgery.', chinese: '这一章反复回到同一个点：苦差事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drudgery.s1', en: 'Without that drudgery, the next paragraph is hard to follow.', zh: '没有这个苦差事，下一段会很难读。', structure: 'drudgery / 表示 / 苦差事', grammar: 'noun，围绕「苦差事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drudgery.', right: 'He gave me some advice about the drudgery.', reason: 'advice 不可数。名词 drudgery 的单复数按词典词形记。', rule: '先确定 drudgery 是noun，再套「苦差事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drudgery.q1', senseId: 'drudgery.s1', errorType: 'meaning', type: '词义选择', prompt: '「drudgery」在本条的核心意思是：', options: ['苦差事', '完全相反的意思', '一种古代钱币'], answer: '苦差事', explain: 'drudgery：苦差事。' },
      { id: 'drudgery.q2', senseId: 'drudgery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drudgery?', options: ['苦差事', 'a kind of ancient coin', 'the past tense of be'], answer: '苦差事', explain: '对的是「苦差事」。' },
      { id: 'drudgery.q3', senseId: 'drudgery.s1', errorType: 'grammar', type: '词义选择', prompt: 'drudgery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drudgery.q4', senseId: 'drudgery.s1', errorType: 'meaning', type: '词源', prompt: '记 drudgery 时，哪句更稳妥？', options: ['先锁住「苦差事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「苦差事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['苦差事'] },
  });

  D('drug', {
    etymology: {
      origin: '古法语 drogue。',
      prefix: null,
      root: { text: 'drug', gloss: '药物' },
      suffix: null,
      history: [
        { label: 'drug', text: '古法语 drogue。' },
        { label: '现在', text: '核心用法是：药物。' },
      ],
      formationLogic: '考试认现在的用法：药物。',
      mnemonic: '看到 drug，先说出「药物」。',
      note: '考试认现在的用法：药物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drug.', chinese: '这一章反复回到同一个点：药物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drug.s1', en: 'Without that drug, the next paragraph is hard to follow.', zh: '没有这个药物，下一段会很难读。', structure: 'drug / 表示 / 药物', grammar: 'noun，围绕「药物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drug.', right: 'He gave me some advice about the drug.', reason: 'advice 不可数。名词 drug 的单复数按词典词形记。', rule: '先确定 drug 是noun，再套「药物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drug.q1', senseId: 'drug.s1', errorType: 'meaning', type: '词义选择', prompt: '「drug」在本条的核心意思是：', options: ['药物', '完全相反的意思', '一种古代钱币'], answer: '药物', explain: 'drug：药物。' },
      { id: 'drug.q2', senseId: 'drug.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drug?', options: ['药物', 'a kind of ancient coin', 'the past tense of be'], answer: '药物', explain: '对的是「药物」。' },
      { id: 'drug.q3', senseId: 'drug.s1', errorType: 'grammar', type: '词义选择', prompt: 'drug 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drug.q4', senseId: 'drug.s1', errorType: 'meaning', type: '词源', prompt: '记 drug 时，哪句更稳妥？', options: ['先锁住「药物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「药物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['药物'] },
  });

  D('drugstore', {
    etymology: {
      origin: '现代英语常用词「drugstore」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drugstore', gloss: '药房' },
      suffix: null,
      history: [
        { label: 'drugstore', text: '现代英语常用词「drugstore」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：药房。' },
      ],
      formationLogic: '核心义：药房。',
      mnemonic: '看到 drugstore，先说出「药房」。',
      note: '核心义：药房。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drugstore.', chinese: '这一章反复回到同一个点：药房。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drugstore.s1', en: 'Without that drugstore, the next paragraph is hard to follow.', zh: '没有这个药房，下一段会很难读。', structure: 'drugstore / 表示 / 药房', grammar: 'noun，围绕「药房」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drugstore.', right: 'He gave me some advice about the drugstore.', reason: 'advice 不可数。名词 drugstore 的单复数按词典词形记。', rule: '先确定 drugstore 是noun，再套「药房」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drugstore.q1', senseId: 'drugstore.s1', errorType: 'meaning', type: '词义选择', prompt: '「drugstore」在本条的核心意思是：', options: ['药房', '完全相反的意思', '一种古代钱币'], answer: '药房', explain: 'drugstore：药房。' },
      { id: 'drugstore.q2', senseId: 'drugstore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drugstore?', options: ['药房', 'a kind of ancient coin', 'the past tense of be'], answer: '药房', explain: '对的是「药房」。' },
      { id: 'drugstore.q3', senseId: 'drugstore.s1', errorType: 'grammar', type: '词义选择', prompt: 'drugstore 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drugstore.q4', senseId: 'drugstore.s1', errorType: 'meaning', type: '词源', prompt: '记 drugstore 时，哪句更稳妥？', options: ['先锁住「药房」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「药房」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['药房'] },
  });

  D('drum', {
    etymology: {
      origin: '中古荷兰语 tromme，拟声。',
      prefix: null,
      root: { text: 'drum', gloss: '鼓' },
      suffix: null,
      history: [
        { label: 'drum', text: '中古荷兰语 tromme，拟声。' },
        { label: '现在', text: '核心用法是：鼓。' },
      ],
      formationLogic: '考试认现在的用法：鼓。',
      mnemonic: '看到 drum，先说出「鼓」。',
      note: '考试认现在的用法：鼓。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drum.', chinese: '这一章反复回到同一个点：鼓。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drum.s1', en: 'Without that drum, the next paragraph is hard to follow.', zh: '没有这个鼓，下一段会很难读。', structure: 'drum / 表示 / 鼓', grammar: 'noun，围绕「鼓」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drum.', right: 'He gave me some advice about the drum.', reason: 'advice 不可数。名词 drum 的单复数按词典词形记。', rule: '先确定 drum 是noun，再套「鼓」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drum.q1', senseId: 'drum.s1', errorType: 'meaning', type: '词义选择', prompt: '「drum」在本条的核心意思是：', options: ['鼓', '完全相反的意思', '一种古代钱币'], answer: '鼓', explain: 'drum：鼓。' },
      { id: 'drum.q2', senseId: 'drum.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drum?', options: ['鼓', 'a kind of ancient coin', 'the past tense of be'], answer: '鼓', explain: '对的是「鼓」。' },
      { id: 'drum.q3', senseId: 'drum.s1', errorType: 'grammar', type: '词义选择', prompt: 'drum 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drum.q4', senseId: 'drum.s1', errorType: 'meaning', type: '词源', prompt: '记 drum 时，哪句更稳妥？', options: ['先锁住「鼓」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鼓」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鼓'] },
  });

  D('drumstick', {
    etymology: {
      origin: '现代英语常用词「drumstick」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drumstick', gloss: '鼓槌' },
      suffix: null,
      history: [
        { label: 'drumstick', text: '现代英语常用词「drumstick」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鼓槌。' },
      ],
      formationLogic: '核心义：鼓槌。',
      mnemonic: '看到 drumstick，先说出「鼓槌」。',
      note: '核心义：鼓槌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drumstick.', chinese: '这一章反复回到同一个点：鼓槌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drumstick.s1', en: 'Without that drumstick, the next paragraph is hard to follow.', zh: '没有这个鼓槌，下一段会很难读。', structure: 'drumstick / 表示 / 鼓槌', grammar: 'noun，围绕「鼓槌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drumstick.', right: 'He gave me some advice about the drumstick.', reason: 'advice 不可数。名词 drumstick 的单复数按词典词形记。', rule: '先确定 drumstick 是noun，再套「鼓槌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drumstick.q1', senseId: 'drumstick.s1', errorType: 'meaning', type: '词义选择', prompt: '「drumstick」在本条的核心意思是：', options: ['鼓槌', '完全相反的意思', '一种古代钱币'], answer: '鼓槌', explain: 'drumstick：鼓槌。' },
      { id: 'drumstick.q2', senseId: 'drumstick.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drumstick?', options: ['鼓槌', 'a kind of ancient coin', 'the past tense of be'], answer: '鼓槌', explain: '对的是「鼓槌」。' },
      { id: 'drumstick.q3', senseId: 'drumstick.s1', errorType: 'grammar', type: '词义选择', prompt: 'drumstick 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drumstick.q4', senseId: 'drumstick.s1', errorType: 'meaning', type: '词源', prompt: '记 drumstick 时，哪句更稳妥？', options: ['先锁住「鼓槌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鼓槌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鼓槌'] },
  });

  D('drunk', {
    etymology: {
      origin: 'drink 的过去分词，也指喝醉。',
      prefix: null,
      root: { text: 'drunk', gloss: '醉的' },
      suffix: null,
      history: [
        { label: 'drunk', text: 'drink 的过去分词，也指喝醉。' },
        { label: '现在', text: '核心用法是：醉的。' },
      ],
      formationLogic: '考试认现在的用法：醉的。',
      mnemonic: '看到 drunk，先说出「醉的」。',
      note: '考试认现在的用法：醉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was drunk.', chinese: '即使是初读者也能看出，这个结果是醉的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drunk.s1', en: 'They wanted a drunk answer, not a long speech.', zh: '他们要一个醉的的答复，不要长篇发言。', structure: 'drunk / 表示 / 醉的', grammar: 'adjective，围绕「醉的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are drunk.', right: 'The news is drunk.', reason: 'news 作主语时动词用单数。', rule: '先确定 drunk 是adjective，再套「醉的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drunk.q1', senseId: 'drunk.s1', errorType: 'meaning', type: '词义选择', prompt: '「drunk」在本条的核心意思是：', options: ['醉的', '完全相反的意思', '一种古代钱币'], answer: '醉的', explain: 'drunk：醉的。' },
      { id: 'drunk.q2', senseId: 'drunk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drunk?', options: ['醉的', 'a kind of ancient coin', 'the past tense of be'], answer: '醉的', explain: '对的是「醉的」。' },
      { id: 'drunk.q3', senseId: 'drunk.s1', errorType: 'grammar', type: '词义选择', prompt: 'drunk 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'drunk.q4', senseId: 'drunk.s1', errorType: 'meaning', type: '词源', prompt: '记 drunk 时，哪句更稳妥？', options: ['先锁住「醉的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「醉的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['醉的'] },
  });

  D('drunkard', {
    etymology: {
      origin: '现代英语常用词「drunkard」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'drunkard', gloss: '酒鬼' },
      suffix: null,
      history: [
        { label: 'drunkard', text: '现代英语常用词「drunkard」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：酒鬼。' },
      ],
      formationLogic: '核心义：酒鬼。',
      mnemonic: '看到 drunkard，先说出「酒鬼」。',
      note: '核心义：酒鬼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one drunkard.', chinese: '这一章反复回到同一个点：酒鬼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'drunkard.s1', en: 'Without that drunkard, the next paragraph is hard to follow.', zh: '没有这个酒鬼，下一段会很难读。', structure: 'drunkard / 表示 / 酒鬼', grammar: 'noun，围绕「酒鬼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the drunkard.', right: 'He gave me some advice about the drunkard.', reason: 'advice 不可数。名词 drunkard 的单复数按词典词形记。', rule: '先确定 drunkard 是noun，再套「酒鬼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'drunkard.q1', senseId: 'drunkard.s1', errorType: 'meaning', type: '词义选择', prompt: '「drunkard」在本条的核心意思是：', options: ['酒鬼', '完全相反的意思', '一种古代钱币'], answer: '酒鬼', explain: 'drunkard：酒鬼。' },
      { id: 'drunkard.q2', senseId: 'drunkard.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches drunkard?', options: ['酒鬼', 'a kind of ancient coin', 'the past tense of be'], answer: '酒鬼', explain: '对的是「酒鬼」。' },
      { id: 'drunkard.q3', senseId: 'drunkard.s1', errorType: 'grammar', type: '词义选择', prompt: 'drunkard 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'drunkard.q4', senseId: 'drunkard.s1', errorType: 'meaning', type: '词源', prompt: '记 drunkard 时，哪句更稳妥？', options: ['先锁住「酒鬼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「酒鬼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酒鬼'] },
  });

  D('dry', {
    etymology: {
      origin: '古英语 dryge。',
      prefix: null,
      root: { text: 'dry', gloss: '干的' },
      suffix: null,
      history: [
        { label: 'dry', text: '古英语 dryge。' },
        { label: '现在', text: '核心用法是：干的。' },
      ],
      formationLogic: '考试认现在的用法：干的。',
      mnemonic: '看到 dry，先说出「干的」。',
      note: '考试认现在的用法：干的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dry.', chinese: '即使是初读者也能看出，这个结果是干的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dry.s1', en: 'They wanted a dry answer, not a long speech.', zh: '他们要一个干的的答复，不要长篇发言。', structure: 'dry / 表示 / 干的', grammar: 'adjective，围绕「干的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dry.', right: 'The news is dry.', reason: 'news 作主语时动词用单数。', rule: '先确定 dry 是adjective，再套「干的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dry.q1', senseId: 'dry.s1', errorType: 'meaning', type: '词义选择', prompt: '「dry」在本条的核心意思是：', options: ['干的', '完全相反的意思', '一种古代钱币'], answer: '干的', explain: 'dry：干的。' },
      { id: 'dry.q2', senseId: 'dry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dry?', options: ['干的', 'a kind of ancient coin', 'the past tense of be'], answer: '干的', explain: '对的是「干的」。' },
      { id: 'dry.q3', senseId: 'dry.s1', errorType: 'grammar', type: '词义选择', prompt: 'dry 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dry.q4', senseId: 'dry.s1', errorType: 'meaning', type: '词源', prompt: '记 dry 时，哪句更稳妥？', options: ['先锁住「干的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干的'] },
  });

  D('dry spell', {
    etymology: {
      origin: '现代英语固定说法「dry spell」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'dry spell', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'dry spell', text: '现代英语固定说法「dry spell」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：干旱期。' },
      ],
      formationLogic: '核心义：干旱期。',
      mnemonic: '看到 dry spell，先说出「干旱期」。',
      note: '核心义：干旱期。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "dry spell" and asked the class to keep it as one unit.', chinese: '老师把「dry spell」圈出来，让全班把它当成一个整体。它表示干旱期。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dry spell.s1', en: 'In the margin she wrote "dry spell" so nobody would split the phrase.', zh: '她在页边写下「dry spell」，免得有人把这个说法拆开。意思是干旱期。', structure: 'dry spell / 表示 / 干旱期', grammar: 'noun，围绕「干旱期」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of dry spell and lost the point.', right: 'Keep "dry spell" together: it means 干旱期.', reason: '「dry spell」要整块理解。', rule: '先确定 dry spell 是noun，再套「干旱期」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dry spell.q1', senseId: 'dry spell.s1', errorType: 'meaning', type: '词义选择', prompt: '「dry spell」在本条的核心意思是：', options: ['干旱期', '完全相反的意思', '一种古代钱币'], answer: '干旱期', explain: 'dry spell：干旱期。' },
      { id: 'dry spell.q2', senseId: 'dry spell.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dry spell?', options: ['干旱期', 'a kind of ancient coin', 'the past tense of be'], answer: '干旱期', explain: '对的是「干旱期」。' },
      { id: 'dry spell.q3', senseId: 'dry spell.s1', errorType: 'grammar', type: '词义选择', prompt: 'dry spell 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dry spell.q4', senseId: 'dry spell.s1', errorType: 'meaning', type: '词源', prompt: '记 dry spell 时，哪句更稳妥？', options: ['先锁住「干旱期」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干旱期」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干旱期'] },
  });

  D('dual', {
    etymology: {
      origin: '拉丁语 dualis，duo「二」。',
      prefix: null,
      root: { text: 'dual', gloss: '双的' },
      suffix: null,
      history: [
        { label: 'dual', text: '拉丁语 dualis，duo「二」。' },
        { label: '现在', text: '核心用法是：双的。' },
      ],
      formationLogic: '考试认现在的用法：双的。',
      mnemonic: '看到 dual，先说出「双的」。',
      note: '考试认现在的用法：双的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dual.', chinese: '即使是初读者也能看出，这个结果是双的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dual.s1', en: 'They wanted a dual answer, not a long speech.', zh: '他们要一个双的的答复，不要长篇发言。', structure: 'dual / 表示 / 双的', grammar: 'adjective，围绕「双的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dual.', right: 'The news is dual.', reason: 'news 作主语时动词用单数。', rule: '先确定 dual 是adjective，再套「双的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dual.q1', senseId: 'dual.s1', errorType: 'meaning', type: '词义选择', prompt: '「dual」在本条的核心意思是：', options: ['双的', '完全相反的意思', '一种古代钱币'], answer: '双的', explain: 'dual：双的。' },
      { id: 'dual.q2', senseId: 'dual.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dual?', options: ['双的', 'a kind of ancient coin', 'the past tense of be'], answer: '双的', explain: '对的是「双的」。' },
      { id: 'dual.q3', senseId: 'dual.s1', errorType: 'grammar', type: '词义选择', prompt: 'dual 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dual.q4', senseId: 'dual.s1', errorType: 'meaning', type: '词源', prompt: '记 dual 时，哪句更稳妥？', options: ['先锁住「双的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「双的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['双的'] },
  });

  D('dub', {
    etymology: {
      origin: '现代英语常用词「dub」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dub', gloss: '给…配音' },
      suffix: null,
      history: [
        { label: 'dub', text: '现代英语常用词「dub」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：给…配音。' },
      ],
      formationLogic: '核心义：给…配音。',
      mnemonic: '看到 dub，先说出「给…配音」。',
      note: '核心义：给…配音。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dub before the office closed.', chinese: '他们同意在办公室关门前做这件事：给…配音。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dub.s1', en: 'The deadline forced the team to dub that afternoon.', zh: '截止日期逼着小组在那天下午给…配音。', structure: 'dub / 表示 / 给…配音', grammar: 'verb，围绕「给…配音」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dubed it yesterday without checking the real past form.', right: 'Check the past form of "dub" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dub 是verb，再套「给…配音」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dub.q1', senseId: 'dub.s1', errorType: 'meaning', type: '词义选择', prompt: '「dub」在本条的核心意思是：', options: ['给…配音', '完全相反的意思', '一种古代钱币'], answer: '给…配音', explain: 'dub：给…配音。' },
      { id: 'dub.q2', senseId: 'dub.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dub?', options: ['给…配音', 'a kind of ancient coin', 'the past tense of be'], answer: '给…配音', explain: '对的是「给…配音」。' },
      { id: 'dub.q3', senseId: 'dub.s1', errorType: 'grammar', type: '词义选择', prompt: 'dub 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dub.q4', senseId: 'dub.s1', errorType: 'meaning', type: '词源', prompt: '记 dub 时，哪句更稳妥？', options: ['先锁住「给…配音」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「给…配音」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['给…配音'] },
  });

  D('dubious', {
    etymology: {
      origin: '英语派生：dubi + -ous，词性转到「可疑的」。',
      prefix: null,
      root: { text: 'dubi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dubious', text: '英语派生：dubi + -ous，词性转到「可疑的」。' },
        { label: '现在', text: '核心用法是：可疑的。' },
      ],
      formationLogic: '先认词干 dubi，再看词尾。',
      mnemonic: '看到 dubious，先说出「可疑的」。',
      note: '先认词干 dubi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dubious.', chinese: '即使是初读者也能看出，这个结果是可疑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dubious.s1', en: 'They wanted a dubious answer, not a long speech.', zh: '他们要一个可疑的的答复，不要长篇发言。', structure: 'dubious / 表示 / 可疑的', grammar: 'adjective，围绕「可疑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dubious.', right: 'The news is dubious.', reason: 'news 作主语时动词用单数。', rule: '先确定 dubious 是adjective，再套「可疑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dubious.q1', senseId: 'dubious.s1', errorType: 'meaning', type: '词义选择', prompt: '「dubious」在本条的核心意思是：', options: ['可疑的', '完全相反的意思', '一种古代钱币'], answer: '可疑的', explain: 'dubious：可疑的。' },
      { id: 'dubious.q2', senseId: 'dubious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dubious?', options: ['可疑的', 'a kind of ancient coin', 'the past tense of be'], answer: '可疑的', explain: '对的是「可疑的」。' },
      { id: 'dubious.q3', senseId: 'dubious.s1', errorType: 'grammar', type: '词义选择', prompt: 'dubious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dubious.q4', senseId: 'dubious.s1', errorType: 'meaning', type: '词源', prompt: '记 dubious 时，哪句更稳妥？', options: ['先锁住「可疑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可疑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可疑的'] },
  });

  D('duck', {
    etymology: {
      origin: '鸟是古英语 duce「潜水者」。躲避是另一动词。',
      prefix: null,
      root: { text: 'duck', gloss: '鸭子' },
      suffix: null,
      history: [
        { label: 'duck', text: '鸟是古英语 duce「潜水者」。躲避是另一动词。' },
        { label: '现在', text: '核心用法是：鸭子。' },
      ],
      formationLogic: '考试认现在的用法：鸭子。',
      mnemonic: '看到 duck，先说出「鸭子」。',
      note: '考试认现在的用法：鸭子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one duck.', chinese: '这一章反复回到同一个点：鸭子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duck.s1', en: 'Without that duck, the next paragraph is hard to follow.', zh: '没有这个鸭子，下一段会很难读。', structure: 'duck / 表示 / 鸭子', grammar: 'noun，围绕「鸭子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the duck.', right: 'He gave me some advice about the duck.', reason: 'advice 不可数。名词 duck 的单复数按词典词形记。', rule: '先确定 duck 是noun，再套「鸭子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duck.q1', senseId: 'duck.s1', errorType: 'meaning', type: '词义选择', prompt: '「duck」在本条的核心意思是：', options: ['鸭子', '完全相反的意思', '一种古代钱币'], answer: '鸭子', explain: 'duck：鸭子。' },
      { id: 'duck.q2', senseId: 'duck.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duck?', options: ['鸭子', 'a kind of ancient coin', 'the past tense of be'], answer: '鸭子', explain: '对的是「鸭子」。' },
      { id: 'duck.q3', senseId: 'duck.s1', errorType: 'grammar', type: '词义选择', prompt: 'duck 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'duck.q4', senseId: 'duck.s1', errorType: 'meaning', type: '词源', prompt: '记 duck 时，哪句更稳妥？', options: ['先锁住「鸭子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鸭子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鸭子'] },
  });

  D('duct', {
    etymology: {
      origin: '现代英语常用词「duct」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'duct', gloss: '导管' },
      suffix: null,
      history: [
        { label: 'duct', text: '现代英语常用词「duct」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：导管。' },
      ],
      formationLogic: '核心义：导管。',
      mnemonic: '看到 duct，先说出「导管」。',
      note: '核心义：导管。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one duct.', chinese: '这一章反复回到同一个点：导管。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duct.s1', en: 'Without that duct, the next paragraph is hard to follow.', zh: '没有这个导管，下一段会很难读。', structure: 'duct / 表示 / 导管', grammar: 'noun，围绕「导管」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the duct.', right: 'He gave me some advice about the duct.', reason: 'advice 不可数。名词 duct 的单复数按词典词形记。', rule: '先确定 duct 是noun，再套「导管」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duct.q1', senseId: 'duct.s1', errorType: 'meaning', type: '词义选择', prompt: '「duct」在本条的核心意思是：', options: ['导管', '完全相反的意思', '一种古代钱币'], answer: '导管', explain: 'duct：导管。' },
      { id: 'duct.q2', senseId: 'duct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duct?', options: ['导管', 'a kind of ancient coin', 'the past tense of be'], answer: '导管', explain: '对的是「导管」。' },
      { id: 'duct.q3', senseId: 'duct.s1', errorType: 'grammar', type: '词义选择', prompt: 'duct 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'duct.q4', senseId: 'duct.s1', errorType: 'meaning', type: '词源', prompt: '记 duct 时，哪句更稳妥？', options: ['先锁住「导管」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「导管」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['导管'] },
  });

  D('dud', {
    etymology: {
      origin: '现代英语常用词「dud」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dud', gloss: '哑弹' },
      suffix: null,
      history: [
        { label: 'dud', text: '现代英语常用词「dud」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：哑弹。' },
      ],
      formationLogic: '核心义：哑弹。',
      mnemonic: '看到 dud，先说出「哑弹」。',
      note: '核心义：哑弹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dud.', chinese: '这一章反复回到同一个点：哑弹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dud.s1', en: 'Without that dud, the next paragraph is hard to follow.', zh: '没有这个哑弹，下一段会很难读。', structure: 'dud / 表示 / 哑弹', grammar: 'noun，围绕「哑弹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dud.', right: 'He gave me some advice about the dud.', reason: 'advice 不可数。名词 dud 的单复数按词典词形记。', rule: '先确定 dud 是noun，再套「哑弹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dud.q1', senseId: 'dud.s1', errorType: 'meaning', type: '词义选择', prompt: '「dud」在本条的核心意思是：', options: ['哑弹', '完全相反的意思', '一种古代钱币'], answer: '哑弹', explain: 'dud：哑弹。' },
      { id: 'dud.q2', senseId: 'dud.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dud?', options: ['哑弹', 'a kind of ancient coin', 'the past tense of be'], answer: '哑弹', explain: '对的是「哑弹」。' },
      { id: 'dud.q3', senseId: 'dud.s1', errorType: 'grammar', type: '词义选择', prompt: 'dud 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dud.q4', senseId: 'dud.s1', errorType: 'meaning', type: '词源', prompt: '记 dud 时，哪句更稳妥？', options: ['先锁住「哑弹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哑弹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哑弹'] },
  });

  D('due', {
    etymology: {
      origin: '拉丁语 debere「欠」。到期该给的。',
      prefix: null,
      root: { text: 'due', gloss: '预定的' },
      suffix: null,
      history: [
        { label: 'due', text: '拉丁语 debere「欠」。到期该给的。' },
        { label: '现在', text: '核心用法是：预定的。' },
      ],
      formationLogic: '考试认现在的用法：预定的。',
      mnemonic: '看到 due，先说出「预定的」。',
      note: '考试认现在的用法：预定的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was due.', chinese: '即使是初读者也能看出，这个结果是预定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'due.s1', en: 'They wanted a due answer, not a long speech.', zh: '他们要一个预定的的答复，不要长篇发言。', structure: 'due / 表示 / 预定的', grammar: 'adjective，围绕「预定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are due.', right: 'The news is due.', reason: 'news 作主语时动词用单数。', rule: '先确定 due 是adjective，再套「预定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'due.q1', senseId: 'due.s1', errorType: 'meaning', type: '词义选择', prompt: '「due」在本条的核心意思是：', options: ['预定的', '完全相反的意思', '一种古代钱币'], answer: '预定的', explain: 'due：预定的。' },
      { id: 'due.q2', senseId: 'due.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches due?', options: ['预定的', 'a kind of ancient coin', 'the past tense of be'], answer: '预定的', explain: '对的是「预定的」。' },
      { id: 'due.q3', senseId: 'due.s1', errorType: 'grammar', type: '词义选择', prompt: 'due 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'due.q4', senseId: 'due.s1', errorType: 'meaning', type: '词源', prompt: '记 due 时，哪句更稳妥？', options: ['先锁住「预定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「预定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['预定的'] },
  });

  D('duel', {
    etymology: {
      origin: '现代英语常用词「duel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'duel', gloss: '决斗' },
      suffix: null,
      history: [
        { label: 'duel', text: '现代英语常用词「duel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：决斗。' },
      ],
      formationLogic: '核心义：决斗。',
      mnemonic: '看到 duel，先说出「决斗」。',
      note: '核心义：决斗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one duel.', chinese: '这一章反复回到同一个点：决斗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duel.s1', en: 'Without that duel, the next paragraph is hard to follow.', zh: '没有这个决斗，下一段会很难读。', structure: 'duel / 表示 / 决斗', grammar: 'noun，围绕「决斗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the duel.', right: 'He gave me some advice about the duel.', reason: 'advice 不可数。名词 duel 的单复数按词典词形记。', rule: '先确定 duel 是noun，再套「决斗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duel.q1', senseId: 'duel.s1', errorType: 'meaning', type: '词义选择', prompt: '「duel」在本条的核心意思是：', options: ['决斗', '完全相反的意思', '一种古代钱币'], answer: '决斗', explain: 'duel：决斗。' },
      { id: 'duel.q2', senseId: 'duel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duel?', options: ['决斗', 'a kind of ancient coin', 'the past tense of be'], answer: '决斗', explain: '对的是「决斗」。' },
      { id: 'duel.q3', senseId: 'duel.s1', errorType: 'grammar', type: '词义选择', prompt: 'duel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'duel.q4', senseId: 'duel.s1', errorType: 'meaning', type: '词源', prompt: '记 duel 时，哪句更稳妥？', options: ['先锁住「决斗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「决斗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['决斗'] },
  });

  D('dull', {
    etymology: {
      origin: '古英语 dol「笨的」。',
      prefix: null,
      root: { text: 'dull', gloss: '枯燥的' },
      suffix: null,
      history: [
        { label: 'dull', text: '古英语 dol「笨的」。' },
        { label: '现在', text: '核心用法是：枯燥的。' },
      ],
      formationLogic: '考试认现在的用法：枯燥的。',
      mnemonic: '看到 dull，先说出「枯燥的」。',
      note: '考试认现在的用法：枯燥的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dull.', chinese: '即使是初读者也能看出，这个结果是枯燥的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dull.s1', en: 'They wanted a dull answer, not a long speech.', zh: '他们要一个枯燥的的答复，不要长篇发言。', structure: 'dull / 表示 / 枯燥的', grammar: 'adjective，围绕「枯燥的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dull.', right: 'The news is dull.', reason: 'news 作主语时动词用单数。', rule: '先确定 dull 是adjective，再套「枯燥的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dull.q1', senseId: 'dull.s1', errorType: 'meaning', type: '词义选择', prompt: '「dull」在本条的核心意思是：', options: ['枯燥的', '完全相反的意思', '一种古代钱币'], answer: '枯燥的', explain: 'dull：枯燥的。' },
      { id: 'dull.q2', senseId: 'dull.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dull?', options: ['枯燥的', 'a kind of ancient coin', 'the past tense of be'], answer: '枯燥的', explain: '对的是「枯燥的」。' },
      { id: 'dull.q3', senseId: 'dull.s1', errorType: 'grammar', type: '词义选择', prompt: 'dull 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dull.q4', senseId: 'dull.s1', errorType: 'meaning', type: '词源', prompt: '记 dull 时，哪句更稳妥？', options: ['先锁住「枯燥的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「枯燥的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['枯燥的'] },
  });

  D('dumb', {
    etymology: {
      origin: '现代英语常用词「dumb」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dumb', gloss: '哑的' },
      suffix: null,
      history: [
        { label: 'dumb', text: '现代英语常用词「dumb」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：哑的。' },
      ],
      formationLogic: '核心义：哑的。',
      mnemonic: '看到 dumb，先说出「哑的」。',
      note: '核心义：哑的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dumb.', chinese: '即使是初读者也能看出，这个结果是哑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dumb.s1', en: 'They wanted a dumb answer, not a long speech.', zh: '他们要一个哑的的答复，不要长篇发言。', structure: 'dumb / 表示 / 哑的', grammar: 'adjective，围绕「哑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dumb.', right: 'The news is dumb.', reason: 'news 作主语时动词用单数。', rule: '先确定 dumb 是adjective，再套「哑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dumb.q1', senseId: 'dumb.s1', errorType: 'meaning', type: '词义选择', prompt: '「dumb」在本条的核心意思是：', options: ['哑的', '完全相反的意思', '一种古代钱币'], answer: '哑的', explain: 'dumb：哑的。' },
      { id: 'dumb.q2', senseId: 'dumb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dumb?', options: ['哑的', 'a kind of ancient coin', 'the past tense of be'], answer: '哑的', explain: '对的是「哑的」。' },
      { id: 'dumb.q3', senseId: 'dumb.s1', errorType: 'grammar', type: '词义选择', prompt: 'dumb 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dumb.q4', senseId: 'dumb.s1', errorType: 'meaning', type: '词源', prompt: '记 dumb 时，哪句更稳妥？', options: ['先锁住「哑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哑的'] },
  });

  D('dummy', {
    etymology: {
      origin: '现代英语常用词「dummy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dummy', gloss: '仿制品' },
      suffix: null,
      history: [
        { label: 'dummy', text: '现代英语常用词「dummy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：仿制品。' },
      ],
      formationLogic: '核心义：仿制品。',
      mnemonic: '看到 dummy，先说出「仿制品」。',
      note: '核心义：仿制品。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dummy.', chinese: '这一章反复回到同一个点：仿制品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dummy.s1', en: 'Without that dummy, the next paragraph is hard to follow.', zh: '没有这个仿制品，下一段会很难读。', structure: 'dummy / 表示 / 仿制品', grammar: 'noun，围绕「仿制品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dummy.', right: 'He gave me some advice about the dummy.', reason: 'advice 不可数。名词 dummy 的单复数按词典词形记。', rule: '先确定 dummy 是noun，再套「仿制品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dummy.q1', senseId: 'dummy.s1', errorType: 'meaning', type: '词义选择', prompt: '「dummy」在本条的核心意思是：', options: ['仿制品', '完全相反的意思', '一种古代钱币'], answer: '仿制品', explain: 'dummy：仿制品。' },
      { id: 'dummy.q2', senseId: 'dummy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dummy?', options: ['仿制品', 'a kind of ancient coin', 'the past tense of be'], answer: '仿制品', explain: '对的是「仿制品」。' },
      { id: 'dummy.q3', senseId: 'dummy.s1', errorType: 'grammar', type: '词义选择', prompt: 'dummy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dummy.q4', senseId: 'dummy.s1', errorType: 'meaning', type: '词源', prompt: '记 dummy 时，哪句更稳妥？', options: ['先锁住「仿制品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「仿制品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仿制品'] },
  });

  D('dump', {
    etymology: {
      origin: '可能拟声，扔下。',
      prefix: null,
      root: { text: 'dump', gloss: '倾倒' },
      suffix: null,
      history: [
        { label: 'dump', text: '可能拟声，扔下。' },
        { label: '现在', text: '核心用法是：倾倒。' },
      ],
      formationLogic: '考试认现在的用法：倾倒。',
      mnemonic: '看到 dump，先说出「倾倒」。',
      note: '考试认现在的用法：倾倒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dump before the office closed.', chinese: '他们同意在办公室关门前做这件事：倾倒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dump.s1', en: 'The deadline forced the team to dump that afternoon.', zh: '截止日期逼着小组在那天下午倾倒。', structure: 'dump / 表示 / 倾倒', grammar: 'verb，围绕「倾倒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dumped it yesterday without checking the real past form.', right: 'Check the past form of "dump" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dump 是verb，再套「倾倒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dump.q1', senseId: 'dump.s1', errorType: 'meaning', type: '词义选择', prompt: '「dump」在本条的核心意思是：', options: ['倾倒', '完全相反的意思', '一种古代钱币'], answer: '倾倒', explain: 'dump：倾倒。' },
      { id: 'dump.q2', senseId: 'dump.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dump?', options: ['倾倒', 'a kind of ancient coin', 'the past tense of be'], answer: '倾倒', explain: '对的是「倾倒」。' },
      { id: 'dump.q3', senseId: 'dump.s1', errorType: 'grammar', type: '词义选择', prompt: 'dump 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dump.q4', senseId: 'dump.s1', errorType: 'meaning', type: '词源', prompt: '记 dump 时，哪句更稳妥？', options: ['先锁住「倾倒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倾倒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倾倒'] },
  });

  D('duo', {
    etymology: {
      origin: '现代英语常用词「duo」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'duo', gloss: '二人组合' },
      suffix: null,
      history: [
        { label: 'duo', text: '现代英语常用词「duo」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：二人组合。' },
      ],
      formationLogic: '核心义：二人组合。',
      mnemonic: '看到 duo，先说出「二人组合」。',
      note: '核心义：二人组合。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one duo.', chinese: '这一章反复回到同一个点：二人组合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duo.s1', en: 'Without that duo, the next paragraph is hard to follow.', zh: '没有这个二人组合，下一段会很难读。', structure: 'duo / 表示 / 二人组合', grammar: 'noun，围绕「二人组合」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the duo.', right: 'He gave me some advice about the duo.', reason: 'advice 不可数。名词 duo 的单复数按词典词形记。', rule: '先确定 duo 是noun，再套「二人组合」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duo.q1', senseId: 'duo.s1', errorType: 'meaning', type: '词义选择', prompt: '「duo」在本条的核心意思是：', options: ['二人组合', '完全相反的意思', '一种古代钱币'], answer: '二人组合', explain: 'duo：二人组合。' },
      { id: 'duo.q2', senseId: 'duo.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duo?', options: ['二人组合', 'a kind of ancient coin', 'the past tense of be'], answer: '二人组合', explain: '对的是「二人组合」。' },
      { id: 'duo.q3', senseId: 'duo.s1', errorType: 'grammar', type: '词义选择', prompt: 'duo 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'duo.q4', senseId: 'duo.s1', errorType: 'meaning', type: '词源', prompt: '记 duo 时，哪句更稳妥？', options: ['先锁住「二人组合」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「二人组合」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['二人组合'] },
  });

  D('dupe', {
    etymology: {
      origin: '现代英语常用词「dupe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dupe', gloss: '愚弄' },
      suffix: null,
      history: [
        { label: 'dupe', text: '现代英语常用词「dupe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：愚弄。' },
      ],
      formationLogic: '核心义：愚弄。',
      mnemonic: '看到 dupe，先说出「愚弄」。',
      note: '核心义：愚弄。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dupe.', chinese: '这一章反复回到同一个点：愚弄。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dupe.s1', en: 'Without that dupe, the next paragraph is hard to follow.', zh: '没有这个愚弄，下一段会很难读。', structure: 'dupe / 表示 / 愚弄', grammar: 'noun，围绕「愚弄」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dupe.', right: 'He gave me some advice about the dupe.', reason: 'advice 不可数。名词 dupe 的单复数按词典词形记。', rule: '先确定 dupe 是noun，再套「愚弄」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dupe.q1', senseId: 'dupe.s1', errorType: 'meaning', type: '词义选择', prompt: '「dupe」在本条的核心意思是：', options: ['愚弄', '完全相反的意思', '一种古代钱币'], answer: '愚弄', explain: 'dupe：愚弄。' },
      { id: 'dupe.q2', senseId: 'dupe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dupe?', options: ['愚弄', 'a kind of ancient coin', 'the past tense of be'], answer: '愚弄', explain: '对的是「愚弄」。' },
      { id: 'dupe.q3', senseId: 'dupe.s1', errorType: 'grammar', type: '词义选择', prompt: 'dupe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dupe.q4', senseId: 'dupe.s1', errorType: 'meaning', type: '词源', prompt: '记 dupe 时，哪句更稳妥？', options: ['先锁住「愚弄」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愚弄」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愚弄'] },
  });

  D('duplicate', {
    etymology: {
      origin: '现代英语常用词「duplicate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'duplicate', gloss: '复制' },
      suffix: null,
      history: [
        { label: 'duplicate', text: '现代英语常用词「duplicate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：复制。' },
      ],
      formationLogic: '核心义：复制。',
      mnemonic: '看到 duplicate，先说出「复制」。',
      note: '核心义：复制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to duplicate before the office closed.', chinese: '他们同意在办公室关门前做这件事：复制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duplicate.s1', en: 'The deadline forced the team to duplicate that afternoon.', zh: '截止日期逼着小组在那天下午复制。', structure: 'duplicate / 表示 / 复制', grammar: 'verb，围绕「复制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She duplicateed it yesterday without checking the real past form.', right: 'Check the past form of "duplicate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 duplicate 是verb，再套「复制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duplicate.q1', senseId: 'duplicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「duplicate」在本条的核心意思是：', options: ['复制', '完全相反的意思', '一种古代钱币'], answer: '复制', explain: 'duplicate：复制。' },
      { id: 'duplicate.q2', senseId: 'duplicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duplicate?', options: ['复制', 'a kind of ancient coin', 'the past tense of be'], answer: '复制', explain: '对的是「复制」。' },
      { id: 'duplicate.q3', senseId: 'duplicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'duplicate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'duplicate.q4', senseId: 'duplicate.s1', errorType: 'meaning', type: '词源', prompt: '记 duplicate 时，哪句更稳妥？', options: ['先锁住「复制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复制'] },
  });

  D('durability', {
    etymology: {
      origin: '英语派生：durabil + -ity，词性转到「耐用性」。',
      prefix: null,
      root: { text: 'durabil', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'durability', text: '英语派生：durabil + -ity，词性转到「耐用性」。' },
        { label: '现在', text: '核心用法是：耐用性。' },
      ],
      formationLogic: '先认词干 durabil，再看词尾。',
      mnemonic: '看到 durability，先说出「耐用性」。',
      note: '先认词干 durabil，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one durability.', chinese: '这一章反复回到同一个点：耐用性。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'durability.s1', en: 'Without that durability, the next paragraph is hard to follow.', zh: '没有这个耐用性，下一段会很难读。', structure: 'durability / 表示 / 耐用性', grammar: 'noun，围绕「耐用性」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the durability.', right: 'He gave me some advice about the durability.', reason: 'advice 不可数。名词 durability 的单复数按词典词形记。', rule: '先确定 durability 是noun，再套「耐用性」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'durability.q1', senseId: 'durability.s1', errorType: 'meaning', type: '词义选择', prompt: '「durability」在本条的核心意思是：', options: ['耐用性', '完全相反的意思', '一种古代钱币'], answer: '耐用性', explain: 'durability：耐用性。' },
      { id: 'durability.q2', senseId: 'durability.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches durability?', options: ['耐用性', 'a kind of ancient coin', 'the past tense of be'], answer: '耐用性', explain: '对的是「耐用性」。' },
      { id: 'durability.q3', senseId: 'durability.s1', errorType: 'grammar', type: '词义选择', prompt: 'durability 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'durability.q4', senseId: 'durability.s1', errorType: 'meaning', type: '词源', prompt: '记 durability 时，哪句更稳妥？', options: ['先锁住「耐用性」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耐用性」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耐用性'] },
  });

  D('durable', {
    etymology: {
      origin: '英语派生：dur + -able，词性转到「耐用的」。',
      prefix: null,
      root: { text: 'dur', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'durable', text: '英语派生：dur + -able，词性转到「耐用的」。' },
        { label: '现在', text: '核心用法是：耐用的。' },
      ],
      formationLogic: '先认词干 dur，再看词尾。',
      mnemonic: '看到 durable，先说出「耐用的」。',
      note: '先认词干 dur，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was durable.', chinese: '即使是初读者也能看出，这个结果是耐用的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'durable.s1', en: 'They wanted a durable answer, not a long speech.', zh: '他们要一个耐用的的答复，不要长篇发言。', structure: 'durable / 表示 / 耐用的', grammar: 'adjective，围绕「耐用的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are durable.', right: 'The news is durable.', reason: 'news 作主语时动词用单数。', rule: '先确定 durable 是adjective，再套「耐用的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'durable.q1', senseId: 'durable.s1', errorType: 'meaning', type: '词义选择', prompt: '「durable」在本条的核心意思是：', options: ['耐用的', '完全相反的意思', '一种古代钱币'], answer: '耐用的', explain: 'durable：耐用的。' },
      { id: 'durable.q2', senseId: 'durable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches durable?', options: ['耐用的', 'a kind of ancient coin', 'the past tense of be'], answer: '耐用的', explain: '对的是「耐用的」。' },
      { id: 'durable.q3', senseId: 'durable.s1', errorType: 'grammar', type: '词义选择', prompt: 'durable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'durable.q4', senseId: 'durable.s1', errorType: 'meaning', type: '词源', prompt: '记 durable 时，哪句更稳妥？', options: ['先锁住「耐用的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耐用的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耐用的'] },
  });

  D('duration', {
    etymology: {
      origin: '英语派生：dura + -tion，词性转到「持续时间」。',
      prefix: null,
      root: { text: 'dura', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'duration', text: '英语派生：dura + -tion，词性转到「持续时间」。' },
        { label: '现在', text: '核心用法是：持续时间。' },
      ],
      formationLogic: '先认词干 dura，再看词尾。',
      mnemonic: '看到 duration，先说出「持续时间」。',
      note: '先认词干 dura，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one duration.', chinese: '这一章反复回到同一个点：持续时间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duration.s1', en: 'Without that duration, the next paragraph is hard to follow.', zh: '没有这个持续时间，下一段会很难读。', structure: 'duration / 表示 / 持续时间', grammar: 'noun，围绕「持续时间」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the duration.', right: 'He gave me some advice about the duration.', reason: 'advice 不可数。名词 duration 的单复数按词典词形记。', rule: '先确定 duration 是noun，再套「持续时间」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duration.q1', senseId: 'duration.s1', errorType: 'meaning', type: '词义选择', prompt: '「duration」在本条的核心意思是：', options: ['持续时间', '完全相反的意思', '一种古代钱币'], answer: '持续时间', explain: 'duration：持续时间。' },
      { id: 'duration.q2', senseId: 'duration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duration?', options: ['持续时间', 'a kind of ancient coin', 'the past tense of be'], answer: '持续时间', explain: '对的是「持续时间」。' },
      { id: 'duration.q3', senseId: 'duration.s1', errorType: 'grammar', type: '词义选择', prompt: 'duration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'duration.q4', senseId: 'duration.s1', errorType: 'meaning', type: '词源', prompt: '记 duration 时，哪句更稳妥？', options: ['先锁住「持续时间」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「持续时间」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['持续时间'] },
  });

  D('during', {
    etymology: {
      origin: '拉丁语 durare「持续」。',
      prefix: null,
      root: { text: 'during', gloss: '在…期间' },
      suffix: null,
      history: [
        { label: 'during', text: '拉丁语 durare「持续」。' },
        { label: '现在', text: '核心用法是：在…期间。' },
      ],
      formationLogic: '考试认现在的用法：在…期间。',
      mnemonic: '看到 during，先说出「在…期间」。',
      note: '考试认现在的用法：在…期间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "during" and asked the class to keep it as one unit.', chinese: '老师把「during」圈出来，让全班把它当成一个整体。它表示在…期间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'during.s1', en: 'In the margin she wrote "during" so nobody would split the phrase.', zh: '她在页边写下「during」，免得有人把这个说法拆开。意思是在…期间。', structure: 'during / 表示 / 在…期间', grammar: 'preposition，围绕「在…期间」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of during and lost the point.', right: 'Keep "during" together: it means 在…期间.', reason: '「during」要整块理解。', rule: '先确定 during 是preposition，再套「在…期间」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'during.q1', senseId: 'during.s1', errorType: 'meaning', type: '词义选择', prompt: '「during」在本条的核心意思是：', options: ['在…期间', '完全相反的意思', '一种古代钱币'], answer: '在…期间', explain: 'during：在…期间。' },
      { id: 'during.q2', senseId: 'during.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches during?', options: ['在…期间', 'a kind of ancient coin', 'the past tense of be'], answer: '在…期间', explain: '对的是「在…期间」。' },
      { id: 'during.q3', senseId: 'during.s1', errorType: 'grammar', type: '词义选择', prompt: 'during 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'during.q4', senseId: 'during.s1', errorType: 'meaning', type: '词源', prompt: '记 during 时，哪句更稳妥？', options: ['先锁住「在…期间」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「在…期间」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在…期间'] },
  });

  D('dusk', {
    etymology: {
      origin: '现代英语常用词「dusk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dusk', gloss: '黄昏' },
      suffix: null,
      history: [
        { label: 'dusk', text: '现代英语常用词「dusk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：黄昏。' },
      ],
      formationLogic: '核心义：黄昏。',
      mnemonic: '看到 dusk，先说出「黄昏」。',
      note: '核心义：黄昏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dusk.', chinese: '这一章反复回到同一个点：黄昏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dusk.s1', en: 'Without that dusk, the next paragraph is hard to follow.', zh: '没有这个黄昏，下一段会很难读。', structure: 'dusk / 表示 / 黄昏', grammar: 'noun，围绕「黄昏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dusk.', right: 'He gave me some advice about the dusk.', reason: 'advice 不可数。名词 dusk 的单复数按词典词形记。', rule: '先确定 dusk 是noun，再套「黄昏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dusk.q1', senseId: 'dusk.s1', errorType: 'meaning', type: '词义选择', prompt: '「dusk」在本条的核心意思是：', options: ['黄昏', '完全相反的意思', '一种古代钱币'], answer: '黄昏', explain: 'dusk：黄昏。' },
      { id: 'dusk.q2', senseId: 'dusk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dusk?', options: ['黄昏', 'a kind of ancient coin', 'the past tense of be'], answer: '黄昏', explain: '对的是「黄昏」。' },
      { id: 'dusk.q3', senseId: 'dusk.s1', errorType: 'grammar', type: '词义选择', prompt: 'dusk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dusk.q4', senseId: 'dusk.s1', errorType: 'meaning', type: '词源', prompt: '记 dusk 时，哪句更稳妥？', options: ['先锁住「黄昏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黄昏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黄昏'] },
  });

  D('dust', {
    etymology: {
      origin: '古英语 dust。',
      prefix: null,
      root: { text: 'dust', gloss: '灰尘' },
      suffix: null,
      history: [
        { label: 'dust', text: '古英语 dust。' },
        { label: '现在', text: '核心用法是：灰尘。' },
      ],
      formationLogic: '考试认现在的用法：灰尘。',
      mnemonic: '看到 dust，先说出「灰尘」。',
      note: '考试认现在的用法：灰尘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dust.', chinese: '这一章反复回到同一个点：灰尘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dust.s1', en: 'Without that dust, the next paragraph is hard to follow.', zh: '没有这个灰尘，下一段会很难读。', structure: 'dust / 表示 / 灰尘', grammar: 'noun，围绕「灰尘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dust.', right: 'He gave me some advice about the dust.', reason: 'advice 不可数。名词 dust 的单复数按词典词形记。', rule: '先确定 dust 是noun，再套「灰尘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dust.q1', senseId: 'dust.s1', errorType: 'meaning', type: '词义选择', prompt: '「dust」在本条的核心意思是：', options: ['灰尘', '完全相反的意思', '一种古代钱币'], answer: '灰尘', explain: 'dust：灰尘。' },
      { id: 'dust.q2', senseId: 'dust.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dust?', options: ['灰尘', 'a kind of ancient coin', 'the past tense of be'], answer: '灰尘', explain: '对的是「灰尘」。' },
      { id: 'dust.q3', senseId: 'dust.s1', errorType: 'grammar', type: '词义选择', prompt: 'dust 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dust.q4', senseId: 'dust.s1', errorType: 'meaning', type: '词源', prompt: '记 dust 时，哪句更稳妥？', options: ['先锁住「灰尘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灰尘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灰尘'] },
  });

  D('duty', {
    etymology: {
      origin: '与 due 同源。该做的事。',
      prefix: null,
      root: { text: 'duty', gloss: '责任' },
      suffix: null,
      history: [
        { label: 'duty', text: '与 due 同源。该做的事。' },
        { label: '现在', text: '核心用法是：责任。' },
      ],
      formationLogic: '考试认现在的用法：责任。',
      mnemonic: '看到 duty，先说出「责任」。',
      note: '考试认现在的用法：责任。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one duty.', chinese: '这一章反复回到同一个点：责任。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'duty.s1', en: 'Without that duty, the next paragraph is hard to follow.', zh: '没有这个责任，下一段会很难读。', structure: 'duty / 表示 / 责任', grammar: 'noun，围绕「责任」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the duty.', right: 'He gave me some advice about the duty.', reason: 'advice 不可数。名词 duty 的单复数按词典词形记。', rule: '先确定 duty 是noun，再套「责任」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'duty.q1', senseId: 'duty.s1', errorType: 'meaning', type: '词义选择', prompt: '「duty」在本条的核心意思是：', options: ['责任', '完全相反的意思', '一种古代钱币'], answer: '责任', explain: 'duty：责任。' },
      { id: 'duty.q2', senseId: 'duty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches duty?', options: ['责任', 'a kind of ancient coin', 'the past tense of be'], answer: '责任', explain: '对的是「责任」。' },
      { id: 'duty.q3', senseId: 'duty.s1', errorType: 'grammar', type: '词义选择', prompt: 'duty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'duty.q4', senseId: 'duty.s1', errorType: 'meaning', type: '词源', prompt: '记 duty 时，哪句更稳妥？', options: ['先锁住「责任」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「责任」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['责任'] },
  });

  D('dwarf', {
    etymology: {
      origin: '现代英语常用词「dwarf」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dwarf', gloss: '侏儒' },
      suffix: null,
      history: [
        { label: 'dwarf', text: '现代英语常用词「dwarf」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：侏儒。' },
      ],
      formationLogic: '核心义：侏儒。',
      mnemonic: '看到 dwarf，先说出「侏儒」。',
      note: '核心义：侏儒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dwarf.', chinese: '这一章反复回到同一个点：侏儒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dwarf.s1', en: 'Without that dwarf, the next paragraph is hard to follow.', zh: '没有这个侏儒，下一段会很难读。', structure: 'dwarf / 表示 / 侏儒', grammar: 'noun，围绕「侏儒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dwarf.', right: 'He gave me some advice about the dwarf.', reason: 'advice 不可数。名词 dwarf 的单复数按词典词形记。', rule: '先确定 dwarf 是noun，再套「侏儒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dwarf.q1', senseId: 'dwarf.s1', errorType: 'meaning', type: '词义选择', prompt: '「dwarf」在本条的核心意思是：', options: ['侏儒', '完全相反的意思', '一种古代钱币'], answer: '侏儒', explain: 'dwarf：侏儒。' },
      { id: 'dwarf.q2', senseId: 'dwarf.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dwarf?', options: ['侏儒', 'a kind of ancient coin', 'the past tense of be'], answer: '侏儒', explain: '对的是「侏儒」。' },
      { id: 'dwarf.q3', senseId: 'dwarf.s1', errorType: 'grammar', type: '词义选择', prompt: 'dwarf 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dwarf.q4', senseId: 'dwarf.s1', errorType: 'meaning', type: '词源', prompt: '记 dwarf 时，哪句更稳妥？', options: ['先锁住「侏儒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「侏儒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侏儒'] },
  });

  D('dwell', {
    etymology: {
      origin: '现代英语常用词「dwell」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dwell', gloss: '居住' },
      suffix: null,
      history: [
        { label: 'dwell', text: '现代英语常用词「dwell」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：居住。' },
      ],
      formationLogic: '核心义：居住。',
      mnemonic: '看到 dwell，先说出「居住」。',
      note: '核心义：居住。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dwell before the office closed.', chinese: '他们同意在办公室关门前做这件事：居住。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dwell.s1', en: 'The deadline forced the team to dwell that afternoon.', zh: '截止日期逼着小组在那天下午居住。', structure: 'dwell / 表示 / 居住', grammar: 'verb，围绕「居住」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dwelled it yesterday without checking the real past form.', right: 'Check the past form of "dwell" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dwell 是verb，再套「居住」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dwell.q1', senseId: 'dwell.s1', errorType: 'meaning', type: '词义选择', prompt: '「dwell」在本条的核心意思是：', options: ['居住', '完全相反的意思', '一种古代钱币'], answer: '居住', explain: 'dwell：居住。' },
      { id: 'dwell.q2', senseId: 'dwell.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dwell?', options: ['居住', 'a kind of ancient coin', 'the past tense of be'], answer: '居住', explain: '对的是「居住」。' },
      { id: 'dwell.q3', senseId: 'dwell.s1', errorType: 'grammar', type: '词义选择', prompt: 'dwell 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dwell.q4', senseId: 'dwell.s1', errorType: 'meaning', type: '词源', prompt: '记 dwell 时，哪句更稳妥？', options: ['先锁住「居住」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「居住」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['居住'] },
  });

  D('dwelling', {
    etymology: {
      origin: '英语派生：dwell + -ing，词性转到「住宅」。',
      prefix: null,
      root: { text: 'dwell', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dwelling', text: '英语派生：dwell + -ing，词性转到「住宅」。' },
        { label: '现在', text: '核心用法是：住宅。' },
      ],
      formationLogic: '先认词干 dwell，再看词尾。',
      mnemonic: '看到 dwelling，先说出「住宅」。',
      note: '先认词干 dwell，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dwelling.', chinese: '这一章反复回到同一个点：住宅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dwelling.s1', en: 'Without that dwelling, the next paragraph is hard to follow.', zh: '没有这个住宅，下一段会很难读。', structure: 'dwelling / 表示 / 住宅', grammar: 'noun，围绕「住宅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dwelling.', right: 'He gave me some advice about the dwelling.', reason: 'advice 不可数。名词 dwelling 的单复数按词典词形记。', rule: '先确定 dwelling 是noun，再套「住宅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dwelling.q1', senseId: 'dwelling.s1', errorType: 'meaning', type: '词义选择', prompt: '「dwelling」在本条的核心意思是：', options: ['住宅', '完全相反的意思', '一种古代钱币'], answer: '住宅', explain: 'dwelling：住宅。' },
      { id: 'dwelling.q2', senseId: 'dwelling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dwelling?', options: ['住宅', 'a kind of ancient coin', 'the past tense of be'], answer: '住宅', explain: '对的是「住宅」。' },
      { id: 'dwelling.q3', senseId: 'dwelling.s1', errorType: 'grammar', type: '词义选择', prompt: 'dwelling 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dwelling.q4', senseId: 'dwelling.s1', errorType: 'meaning', type: '词源', prompt: '记 dwelling 时，哪句更稳妥？', options: ['先锁住「住宅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「住宅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['住宅'] },
  });

  D('dye', {
    etymology: {
      origin: '现代英语常用词「dye」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dye', gloss: '染料' },
      suffix: null,
      history: [
        { label: 'dye', text: '现代英语常用词「dye」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：染料。' },
      ],
      formationLogic: '核心义：染料。',
      mnemonic: '看到 dye，先说出「染料」。',
      note: '核心义：染料。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dye.', chinese: '这一章反复回到同一个点：染料。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dye.s1', en: 'Without that dye, the next paragraph is hard to follow.', zh: '没有这个染料，下一段会很难读。', structure: 'dye / 表示 / 染料', grammar: 'noun，围绕「染料」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dye.', right: 'He gave me some advice about the dye.', reason: 'advice 不可数。名词 dye 的单复数按词典词形记。', rule: '先确定 dye 是noun，再套「染料」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dye.q1', senseId: 'dye.s1', errorType: 'meaning', type: '词义选择', prompt: '「dye」在本条的核心意思是：', options: ['染料', '完全相反的意思', '一种古代钱币'], answer: '染料', explain: 'dye：染料。' },
      { id: 'dye.q2', senseId: 'dye.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dye?', options: ['染料', 'a kind of ancient coin', 'the past tense of be'], answer: '染料', explain: '对的是「染料」。' },
      { id: 'dye.q3', senseId: 'dye.s1', errorType: 'grammar', type: '词义选择', prompt: 'dye 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dye.q4', senseId: 'dye.s1', errorType: 'meaning', type: '词源', prompt: '记 dye 时，哪句更稳妥？', options: ['先锁住「染料」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「染料」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['染料'] },
  });

  D('dynamic', {
    etymology: {
      origin: '希腊语 dynamikos，dynamis「力量」。',
      prefix: null,
      root: { text: 'dynamic', gloss: '动态的' },
      suffix: null,
      history: [
        { label: 'dynamic', text: '希腊语 dynamikos，dynamis「力量」。' },
        { label: '现在', text: '核心用法是：动态的。' },
      ],
      formationLogic: '考试认现在的用法：动态的。',
      mnemonic: '看到 dynamic，先说出「动态的」。',
      note: '考试认现在的用法：动态的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dynamic.', chinese: '即使是初读者也能看出，这个结果是动态的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dynamic.s1', en: 'They wanted a dynamic answer, not a long speech.', zh: '他们要一个动态的的答复，不要长篇发言。', structure: 'dynamic / 表示 / 动态的', grammar: 'adjective，围绕「动态的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dynamic.', right: 'The news is dynamic.', reason: 'news 作主语时动词用单数。', rule: '先确定 dynamic 是adjective，再套「动态的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dynamic.q1', senseId: 'dynamic.s1', errorType: 'meaning', type: '词义选择', prompt: '「dynamic」在本条的核心意思是：', options: ['动态的', '完全相反的意思', '一种古代钱币'], answer: '动态的', explain: 'dynamic：动态的。' },
      { id: 'dynamic.q2', senseId: 'dynamic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dynamic?', options: ['动态的', 'a kind of ancient coin', 'the past tense of be'], answer: '动态的', explain: '对的是「动态的」。' },
      { id: 'dynamic.q3', senseId: 'dynamic.s1', errorType: 'grammar', type: '词义选择', prompt: 'dynamic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dynamic.q4', senseId: 'dynamic.s1', errorType: 'meaning', type: '词源', prompt: '记 dynamic 时，哪句更稳妥？', options: ['先锁住「动态的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「动态的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['动态的'] },
  });

  D('dynamics', {
    etymology: {
      origin: '现代英语常用词「dynamics」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dynamics', gloss: '动力学' },
      suffix: null,
      history: [
        { label: 'dynamics', text: '现代英语常用词「dynamics」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：动力学。' },
      ],
      formationLogic: '核心义：动力学。',
      mnemonic: '看到 dynamics，先说出「动力学」。',
      note: '核心义：动力学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dynamics.', chinese: '这一章反复回到同一个点：动力学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dynamics.s1', en: 'Without that dynamics, the next paragraph is hard to follow.', zh: '没有这个动力学，下一段会很难读。', structure: 'dynamics / 表示 / 动力学', grammar: 'noun，围绕「动力学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dynamics.', right: 'He gave me some advice about the dynamics.', reason: 'advice 不可数。名词 dynamics 的单复数按词典词形记。', rule: '先确定 dynamics 是noun，再套「动力学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dynamics.q1', senseId: 'dynamics.s1', errorType: 'meaning', type: '词义选择', prompt: '「dynamics」在本条的核心意思是：', options: ['动力学', '完全相反的意思', '一种古代钱币'], answer: '动力学', explain: 'dynamics：动力学。' },
      { id: 'dynamics.q2', senseId: 'dynamics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dynamics?', options: ['动力学', 'a kind of ancient coin', 'the past tense of be'], answer: '动力学', explain: '对的是「动力学」。' },
      { id: 'dynamics.q3', senseId: 'dynamics.s1', errorType: 'grammar', type: '词义选择', prompt: 'dynamics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dynamics.q4', senseId: 'dynamics.s1', errorType: 'meaning', type: '词源', prompt: '记 dynamics 时，哪句更稳妥？', options: ['先锁住「动力学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「动力学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['动力学'] },
  });

  D('dynasty', {
    etymology: {
      origin: '现代英语常用词「dynasty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dynasty', gloss: '王朝' },
      suffix: null,
      history: [
        { label: 'dynasty', text: '现代英语常用词「dynasty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：王朝。' },
      ],
      formationLogic: '核心义：王朝。',
      mnemonic: '看到 dynasty，先说出「王朝」。',
      note: '核心义：王朝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dynasty.', chinese: '这一章反复回到同一个点：王朝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dynasty.s1', en: 'Without that dynasty, the next paragraph is hard to follow.', zh: '没有这个王朝，下一段会很难读。', structure: 'dynasty / 表示 / 王朝', grammar: 'noun，围绕「王朝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dynasty.', right: 'He gave me some advice about the dynasty.', reason: 'advice 不可数。名词 dynasty 的单复数按词典词形记。', rule: '先确定 dynasty 是noun，再套「王朝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dynasty.q1', senseId: 'dynasty.s1', errorType: 'meaning', type: '词义选择', prompt: '「dynasty」在本条的核心意思是：', options: ['王朝', '完全相反的意思', '一种古代钱币'], answer: '王朝', explain: 'dynasty：王朝。' },
      { id: 'dynasty.q2', senseId: 'dynasty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dynasty?', options: ['王朝', 'a kind of ancient coin', 'the past tense of be'], answer: '王朝', explain: '对的是「王朝」。' },
      { id: 'dynasty.q3', senseId: 'dynasty.s1', errorType: 'grammar', type: '词义选择', prompt: 'dynasty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dynasty.q4', senseId: 'dynasty.s1', errorType: 'meaning', type: '词源', prompt: '记 dynasty 时，哪句更稳妥？', options: ['先锁住「王朝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「王朝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['王朝'] },
  });

  D('each', {
    etymology: {
      origin: '现代英语常用词「each」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'each', gloss: '每个' },
      suffix: null,
      history: [
        { label: 'each', text: '现代英语常用词「each」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：每个。' },
      ],
      formationLogic: '核心义：每个。',
      mnemonic: '看到 each，先说出「每个」。',
      note: '核心义：每个。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "each" and asked the class to keep it as one unit.', chinese: '老师把「each」圈出来，让全班把它当成一个整体。它表示每个。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'each.s1', en: 'In the margin she wrote "each" so nobody would split the phrase.', zh: '她在页边写下「each」，免得有人把这个说法拆开。意思是每个。', structure: 'each / 表示 / 每个', grammar: 'determiner，围绕「每个」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of each and lost the point.', right: 'Keep "each" together: it means 每个.', reason: '「each」要整块理解。', rule: '先确定 each 是determiner，再套「每个」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'each.q1', senseId: 'each.s1', errorType: 'meaning', type: '词义选择', prompt: '「each」在本条的核心意思是：', options: ['每个', '完全相反的意思', '一种古代钱币'], answer: '每个', explain: 'each：每个。' },
      { id: 'each.q2', senseId: 'each.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches each?', options: ['每个', 'a kind of ancient coin', 'the past tense of be'], answer: '每个', explain: '对的是「每个」。' },
      { id: 'each.q3', senseId: 'each.s1', errorType: 'grammar', type: '词义选择', prompt: 'each 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'each.q4', senseId: 'each.s1', errorType: 'meaning', type: '词源', prompt: '记 each 时，哪句更稳妥？', options: ['先锁住「每个」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「每个」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['每个'] },
  });

  D('eager', {
    etymology: {
      origin: '英语派生：eag + -er，词性转到「渴望的」。',
      prefix: null,
      root: { text: 'eag', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eager', text: '英语派生：eag + -er，词性转到「渴望的」。' },
        { label: '现在', text: '核心用法是：渴望的。' },
      ],
      formationLogic: '先认词干 eag，再看词尾。',
      mnemonic: '看到 eager，先说出「渴望的」。',
      note: '先认词干 eag，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eager.', chinese: '即使是初读者也能看出，这个结果是渴望的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eager.s1', en: 'They wanted a eager answer, not a long speech.', zh: '他们要一个渴望的的答复，不要长篇发言。', structure: 'eager / 表示 / 渴望的', grammar: 'adjective，围绕「渴望的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eager.', right: 'The news is eager.', reason: 'news 作主语时动词用单数。', rule: '先确定 eager 是adjective，再套「渴望的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eager.q1', senseId: 'eager.s1', errorType: 'meaning', type: '词义选择', prompt: '「eager」在本条的核心意思是：', options: ['渴望的', '完全相反的意思', '一种古代钱币'], answer: '渴望的', explain: 'eager：渴望的。' },
      { id: 'eager.q2', senseId: 'eager.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eager?', options: ['渴望的', 'a kind of ancient coin', 'the past tense of be'], answer: '渴望的', explain: '对的是「渴望的」。' },
      { id: 'eager.q3', senseId: 'eager.s1', errorType: 'grammar', type: '词义选择', prompt: 'eager 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eager.q4', senseId: 'eager.s1', errorType: 'meaning', type: '词源', prompt: '记 eager 时，哪句更稳妥？', options: ['先锁住「渴望的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「渴望的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['渴望的'] },
  });

  D('eagerness', {
    etymology: {
      origin: '英语派生：eager + -ness，词性转到「渴望」。',
      prefix: null,
      root: { text: 'eager', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eagerness', text: '英语派生：eager + -ness，词性转到「渴望」。' },
        { label: '现在', text: '核心用法是：渴望。' },
      ],
      formationLogic: '先认词干 eager，再看词尾。',
      mnemonic: '看到 eagerness，先说出「渴望」。',
      note: '先认词干 eager，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eagerness.', chinese: '这一章反复回到同一个点：渴望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eagerness.s1', en: 'Without that eagerness, the next paragraph is hard to follow.', zh: '没有这个渴望，下一段会很难读。', structure: 'eagerness / 表示 / 渴望', grammar: 'noun，围绕「渴望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eagerness.', right: 'He gave me some advice about the eagerness.', reason: 'advice 不可数。名词 eagerness 的单复数按词典词形记。', rule: '先确定 eagerness 是noun，再套「渴望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eagerness.q1', senseId: 'eagerness.s1', errorType: 'meaning', type: '词义选择', prompt: '「eagerness」在本条的核心意思是：', options: ['渴望', '完全相反的意思', '一种古代钱币'], answer: '渴望', explain: 'eagerness：渴望。' },
      { id: 'eagerness.q2', senseId: 'eagerness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eagerness?', options: ['渴望', 'a kind of ancient coin', 'the past tense of be'], answer: '渴望', explain: '对的是「渴望」。' },
      { id: 'eagerness.q3', senseId: 'eagerness.s1', errorType: 'grammar', type: '词义选择', prompt: 'eagerness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eagerness.q4', senseId: 'eagerness.s1', errorType: 'meaning', type: '词源', prompt: '记 eagerness 时，哪句更稳妥？', options: ['先锁住「渴望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「渴望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['渴望'] },
  });

  D('eagle', {
    etymology: {
      origin: '现代英语常用词「eagle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eagle', gloss: '鹰' },
      suffix: null,
      history: [
        { label: 'eagle', text: '现代英语常用词「eagle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鹰。' },
      ],
      formationLogic: '核心义：鹰。',
      mnemonic: '看到 eagle，先说出「鹰」。',
      note: '核心义：鹰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eagle.', chinese: '这一章反复回到同一个点：鹰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eagle.s1', en: 'Without that eagle, the next paragraph is hard to follow.', zh: '没有这个鹰，下一段会很难读。', structure: 'eagle / 表示 / 鹰', grammar: 'noun，围绕「鹰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eagle.', right: 'He gave me some advice about the eagle.', reason: 'advice 不可数。名词 eagle 的单复数按词典词形记。', rule: '先确定 eagle 是noun，再套「鹰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eagle.q1', senseId: 'eagle.s1', errorType: 'meaning', type: '词义选择', prompt: '「eagle」在本条的核心意思是：', options: ['鹰', '完全相反的意思', '一种古代钱币'], answer: '鹰', explain: 'eagle：鹰。' },
      { id: 'eagle.q2', senseId: 'eagle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eagle?', options: ['鹰', 'a kind of ancient coin', 'the past tense of be'], answer: '鹰', explain: '对的是「鹰」。' },
      { id: 'eagle.q3', senseId: 'eagle.s1', errorType: 'grammar', type: '词义选择', prompt: 'eagle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eagle.q4', senseId: 'eagle.s1', errorType: 'meaning', type: '词源', prompt: '记 eagle 时，哪句更稳妥？', options: ['先锁住「鹰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鹰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鹰'] },
  });

  D('ear', {
    etymology: {
      origin: '现代英语常用词「ear」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ear', gloss: '耳朵' },
      suffix: null,
      history: [
        { label: 'ear', text: '现代英语常用词「ear」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：耳朵。' },
      ],
      formationLogic: '核心义：耳朵。',
      mnemonic: '看到 ear，先说出「耳朵」。',
      note: '核心义：耳朵。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ear.', chinese: '这一章反复回到同一个点：耳朵。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ear.s1', en: 'Without that ear, the next paragraph is hard to follow.', zh: '没有这个耳朵，下一段会很难读。', structure: 'ear / 表示 / 耳朵', grammar: 'noun，围绕「耳朵」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ear.', right: 'He gave me some advice about the ear.', reason: 'advice 不可数。名词 ear 的单复数按词典词形记。', rule: '先确定 ear 是noun，再套「耳朵」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ear.q1', senseId: 'ear.s1', errorType: 'meaning', type: '词义选择', prompt: '「ear」在本条的核心意思是：', options: ['耳朵', '完全相反的意思', '一种古代钱币'], answer: '耳朵', explain: 'ear：耳朵。' },
      { id: 'ear.q2', senseId: 'ear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ear?', options: ['耳朵', 'a kind of ancient coin', 'the past tense of be'], answer: '耳朵', explain: '对的是「耳朵」。' },
      { id: 'ear.q3', senseId: 'ear.s1', errorType: 'grammar', type: '词义选择', prompt: 'ear 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ear.q4', senseId: 'ear.s1', errorType: 'meaning', type: '词源', prompt: '记 ear 时，哪句更稳妥？', options: ['先锁住「耳朵」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耳朵」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耳朵'] },
  });

  D('earlier', {
    etymology: {
      origin: '英语派生：earli + -er，词性转到「更早的」。',
      prefix: null,
      root: { text: 'earli', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'earlier', text: '英语派生：earli + -er，词性转到「更早的」。' },
        { label: '现在', text: '核心用法是：更早的。' },
      ],
      formationLogic: '先认词干 earli，再看词尾。',
      mnemonic: '看到 earlier，先说出「更早的」。',
      note: '先认词干 earli，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was earlier.', chinese: '即使是初读者也能看出，这个结果是更早的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earlier.s1', en: 'They wanted a earlier answer, not a long speech.', zh: '他们要一个更早的的答复，不要长篇发言。', structure: 'earlier / 表示 / 更早的', grammar: 'adjective，围绕「更早的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are earlier.', right: 'The news is earlier.', reason: 'news 作主语时动词用单数。', rule: '先确定 earlier 是adjective，再套「更早的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earlier.q1', senseId: 'earlier.s1', errorType: 'meaning', type: '词义选择', prompt: '「earlier」在本条的核心意思是：', options: ['更早的', '完全相反的意思', '一种古代钱币'], answer: '更早的', explain: 'earlier：更早的。' },
      { id: 'earlier.q2', senseId: 'earlier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earlier?', options: ['更早的', 'a kind of ancient coin', 'the past tense of be'], answer: '更早的', explain: '对的是「更早的」。' },
      { id: 'earlier.q3', senseId: 'earlier.s1', errorType: 'grammar', type: '词义选择', prompt: 'earlier 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'earlier.q4', senseId: 'earlier.s1', errorType: 'meaning', type: '词源', prompt: '记 earlier 时，哪句更稳妥？', options: ['先锁住「更早的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「更早的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['更早的'] },
  });

  D('earliest', {
    etymology: {
      origin: '现代英语常用词「earliest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earliest', gloss: '最早的' },
      suffix: null,
      history: [
        { label: 'earliest', text: '现代英语常用词「earliest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：最早的。' },
      ],
      formationLogic: '核心义：最早的。',
      mnemonic: '看到 earliest，先说出「最早的」。',
      note: '核心义：最早的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was earliest.', chinese: '即使是初读者也能看出，这个结果是最早的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earliest.s1', en: 'They wanted a earliest answer, not a long speech.', zh: '他们要一个最早的的答复，不要长篇发言。', structure: 'earliest / 表示 / 最早的', grammar: 'adjective，围绕「最早的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are earliest.', right: 'The news is earliest.', reason: 'news 作主语时动词用单数。', rule: '先确定 earliest 是adjective，再套「最早的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earliest.q1', senseId: 'earliest.s1', errorType: 'meaning', type: '词义选择', prompt: '「earliest」在本条的核心意思是：', options: ['最早的', '完全相反的意思', '一种古代钱币'], answer: '最早的', explain: 'earliest：最早的。' },
      { id: 'earliest.q2', senseId: 'earliest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earliest?', options: ['最早的', 'a kind of ancient coin', 'the past tense of be'], answer: '最早的', explain: '对的是「最早的」。' },
      { id: 'earliest.q3', senseId: 'earliest.s1', errorType: 'grammar', type: '词义选择', prompt: 'earliest 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'earliest.q4', senseId: 'earliest.s1', errorType: 'meaning', type: '词源', prompt: '记 earliest 时，哪句更稳妥？', options: ['先锁住「最早的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最早的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最早的'] },
  });

  D('early', {
    etymology: {
      origin: '英语派生：ear + -ly，词性转到「早的」。',
      prefix: null,
      root: { text: 'ear', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'early', text: '英语派生：ear + -ly，词性转到「早的」。' },
        { label: '现在', text: '核心用法是：早的。' },
      ],
      formationLogic: '先认词干 ear，再看词尾。',
      mnemonic: '看到 early，先说出「早的」。',
      note: '先认词干 ear，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was early.', chinese: '即使是初读者也能看出，这个结果是早的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'early.s1', en: 'They wanted a early answer, not a long speech.', zh: '他们要一个早的的答复，不要长篇发言。', structure: 'early / 表示 / 早的', grammar: 'adjective，围绕「早的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are early.', right: 'The news is early.', reason: 'news 作主语时动词用单数。', rule: '先确定 early 是adjective，再套「早的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'early.q1', senseId: 'early.s1', errorType: 'meaning', type: '词义选择', prompt: '「early」在本条的核心意思是：', options: ['早的', '完全相反的意思', '一种古代钱币'], answer: '早的', explain: 'early：早的。' },
      { id: 'early.q2', senseId: 'early.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches early?', options: ['早的', 'a kind of ancient coin', 'the past tense of be'], answer: '早的', explain: '对的是「早的」。' },
      { id: 'early.q3', senseId: 'early.s1', errorType: 'grammar', type: '词义选择', prompt: 'early 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'early.q4', senseId: 'early.s1', errorType: 'meaning', type: '词源', prompt: '记 early 时，哪句更稳妥？', options: ['先锁住「早的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「早的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['早的'] },
  });

  D('earn', {
    etymology: {
      origin: '现代英语常用词「earn」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earn', gloss: '赚' },
      suffix: null,
      history: [
        { label: 'earn', text: '现代英语常用词「earn」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赚。' },
      ],
      formationLogic: '核心义：赚。',
      mnemonic: '看到 earn，先说出「赚」。',
      note: '核心义：赚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to earn before the office closed.', chinese: '他们同意在办公室关门前做这件事：赚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earn.s1', en: 'The deadline forced the team to earn that afternoon.', zh: '截止日期逼着小组在那天下午赚。', structure: 'earn / 表示 / 赚', grammar: 'verb，围绕「赚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She earned it yesterday without checking the real past form.', right: 'Check the past form of "earn" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 earn 是verb，再套「赚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earn.q1', senseId: 'earn.s1', errorType: 'meaning', type: '词义选择', prompt: '「earn」在本条的核心意思是：', options: ['赚', '完全相反的意思', '一种古代钱币'], answer: '赚', explain: 'earn：赚。' },
      { id: 'earn.q2', senseId: 'earn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earn?', options: ['赚', 'a kind of ancient coin', 'the past tense of be'], answer: '赚', explain: '对的是「赚」。' },
      { id: 'earn.q3', senseId: 'earn.s1', errorType: 'grammar', type: '词义选择', prompt: 'earn 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'earn.q4', senseId: 'earn.s1', errorType: 'meaning', type: '词源', prompt: '记 earn 时，哪句更稳妥？', options: ['先锁住「赚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赚'] },
  });

  D('earnest', {
    etymology: {
      origin: '现代英语常用词「earnest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earnest', gloss: '认真的' },
      suffix: null,
      history: [
        { label: 'earnest', text: '现代英语常用词「earnest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：认真的。' },
      ],
      formationLogic: '核心义：认真的。',
      mnemonic: '看到 earnest，先说出「认真的」。',
      note: '核心义：认真的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was earnest.', chinese: '即使是初读者也能看出，这个结果是认真的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earnest.s1', en: 'They wanted a earnest answer, not a long speech.', zh: '他们要一个认真的的答复，不要长篇发言。', structure: 'earnest / 表示 / 认真的', grammar: 'adjective，围绕「认真的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are earnest.', right: 'The news is earnest.', reason: 'news 作主语时动词用单数。', rule: '先确定 earnest 是adjective，再套「认真的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earnest.q1', senseId: 'earnest.s1', errorType: 'meaning', type: '词义选择', prompt: '「earnest」在本条的核心意思是：', options: ['认真的', '完全相反的意思', '一种古代钱币'], answer: '认真的', explain: 'earnest：认真的。' },
      { id: 'earnest.q2', senseId: 'earnest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earnest?', options: ['认真的', 'a kind of ancient coin', 'the past tense of be'], answer: '认真的', explain: '对的是「认真的」。' },
      { id: 'earnest.q3', senseId: 'earnest.s1', errorType: 'grammar', type: '词义选择', prompt: 'earnest 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'earnest.q4', senseId: 'earnest.s1', errorType: 'meaning', type: '词源', prompt: '记 earnest 时，哪句更稳妥？', options: ['先锁住「认真的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「认真的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['认真的'] },
  });

  D('earnings', {
    etymology: {
      origin: '现代英语常用词「earnings」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earnings', gloss: '收入' },
      suffix: null,
      history: [
        { label: 'earnings', text: '现代英语常用词「earnings」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：收入。' },
      ],
      formationLogic: '核心义：收入。',
      mnemonic: '看到 earnings，先说出「收入」。',
      note: '核心义：收入。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one earnings.', chinese: '这一章反复回到同一个点：收入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earnings.s1', en: 'Without that earnings, the next paragraph is hard to follow.', zh: '没有这个收入，下一段会很难读。', structure: 'earnings / 表示 / 收入', grammar: 'noun，围绕「收入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the earnings.', right: 'He gave me some advice about the earnings.', reason: 'advice 不可数。名词 earnings 的单复数按词典词形记。', rule: '先确定 earnings 是noun，再套「收入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earnings.q1', senseId: 'earnings.s1', errorType: 'meaning', type: '词义选择', prompt: '「earnings」在本条的核心意思是：', options: ['收入', '完全相反的意思', '一种古代钱币'], answer: '收入', explain: 'earnings：收入。' },
      { id: 'earnings.q2', senseId: 'earnings.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earnings?', options: ['收入', 'a kind of ancient coin', 'the past tense of be'], answer: '收入', explain: '对的是「收入」。' },
      { id: 'earnings.q3', senseId: 'earnings.s1', errorType: 'grammar', type: '词义选择', prompt: 'earnings 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'earnings.q4', senseId: 'earnings.s1', errorType: 'meaning', type: '词源', prompt: '记 earnings 时，哪句更稳妥？', options: ['先锁住「收入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「收入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['收入'] },
  });

  D('earth', {
    etymology: {
      origin: '现代英语常用词「earth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earth', gloss: '地球' },
      suffix: null,
      history: [
        { label: 'earth', text: '现代英语常用词「earth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地球。' },
      ],
      formationLogic: '核心义：地球。',
      mnemonic: '看到 earth，先说出「地球」。',
      note: '核心义：地球。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one earth.', chinese: '这一章反复回到同一个点：地球。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earth.s1', en: 'Without that earth, the next paragraph is hard to follow.', zh: '没有这个地球，下一段会很难读。', structure: 'earth / 表示 / 地球', grammar: 'noun，围绕「地球」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the earth.', right: 'He gave me some advice about the earth.', reason: 'advice 不可数。名词 earth 的单复数按词典词形记。', rule: '先确定 earth 是noun，再套「地球」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earth.q1', senseId: 'earth.s1', errorType: 'meaning', type: '词义选择', prompt: '「earth」在本条的核心意思是：', options: ['地球', '完全相反的意思', '一种古代钱币'], answer: '地球', explain: 'earth：地球。' },
      { id: 'earth.q2', senseId: 'earth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earth?', options: ['地球', 'a kind of ancient coin', 'the past tense of be'], answer: '地球', explain: '对的是「地球」。' },
      { id: 'earth.q3', senseId: 'earth.s1', errorType: 'grammar', type: '词义选择', prompt: 'earth 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'earth.q4', senseId: 'earth.s1', errorType: 'meaning', type: '词源', prompt: '记 earth 时，哪句更稳妥？', options: ['先锁住「地球」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地球」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地球'] },
  });

  D('earthenware', {
    etymology: {
      origin: '现代英语常用词「earthenware」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earthenware', gloss: '陶器' },
      suffix: null,
      history: [
        { label: 'earthenware', text: '现代英语常用词「earthenware」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：陶器。' },
      ],
      formationLogic: '核心义：陶器。',
      mnemonic: '看到 earthenware，先说出「陶器」。',
      note: '核心义：陶器。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one earthenware.', chinese: '这一章反复回到同一个点：陶器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earthenware.s1', en: 'Without that earthenware, the next paragraph is hard to follow.', zh: '没有这个陶器，下一段会很难读。', structure: 'earthenware / 表示 / 陶器', grammar: 'noun，围绕「陶器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the earthenware.', right: 'He gave me some advice about the earthenware.', reason: 'advice 不可数。名词 earthenware 的单复数按词典词形记。', rule: '先确定 earthenware 是noun，再套「陶器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earthenware.q1', senseId: 'earthenware.s1', errorType: 'meaning', type: '词义选择', prompt: '「earthenware」在本条的核心意思是：', options: ['陶器', '完全相反的意思', '一种古代钱币'], answer: '陶器', explain: 'earthenware：陶器。' },
      { id: 'earthenware.q2', senseId: 'earthenware.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earthenware?', options: ['陶器', 'a kind of ancient coin', 'the past tense of be'], answer: '陶器', explain: '对的是「陶器」。' },
      { id: 'earthenware.q3', senseId: 'earthenware.s1', errorType: 'grammar', type: '词义选择', prompt: 'earthenware 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'earthenware.q4', senseId: 'earthenware.s1', errorType: 'meaning', type: '词源', prompt: '记 earthenware 时，哪句更稳妥？', options: ['先锁住「陶器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陶器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陶器'] },
  });

  D('earthquake', {
    etymology: {
      origin: '现代英语常用词「earthquake」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'earthquake', gloss: '地震' },
      suffix: null,
      history: [
        { label: 'earthquake', text: '现代英语常用词「earthquake」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地震。' },
      ],
      formationLogic: '核心义：地震。',
      mnemonic: '看到 earthquake，先说出「地震」。',
      note: '核心义：地震。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one earthquake.', chinese: '这一章反复回到同一个点：地震。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'earthquake.s1', en: 'Without that earthquake, the next paragraph is hard to follow.', zh: '没有这个地震，下一段会很难读。', structure: 'earthquake / 表示 / 地震', grammar: 'noun，围绕「地震」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the earthquake.', right: 'He gave me some advice about the earthquake.', reason: 'advice 不可数。名词 earthquake 的单复数按词典词形记。', rule: '先确定 earthquake 是noun，再套「地震」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'earthquake.q1', senseId: 'earthquake.s1', errorType: 'meaning', type: '词义选择', prompt: '「earthquake」在本条的核心意思是：', options: ['地震', '完全相反的意思', '一种古代钱币'], answer: '地震', explain: 'earthquake：地震。' },
      { id: 'earthquake.q2', senseId: 'earthquake.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches earthquake?', options: ['地震', 'a kind of ancient coin', 'the past tense of be'], answer: '地震', explain: '对的是「地震」。' },
      { id: 'earthquake.q3', senseId: 'earthquake.s1', errorType: 'grammar', type: '词义选择', prompt: 'earthquake 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'earthquake.q4', senseId: 'earthquake.s1', errorType: 'meaning', type: '词源', prompt: '记 earthquake 时，哪句更稳妥？', options: ['先锁住「地震」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地震」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地震'] },
  });

  D('ease', {
    etymology: {
      origin: '现代英语常用词「ease」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ease', gloss: '容易' },
      suffix: null,
      history: [
        { label: 'ease', text: '现代英语常用词「ease」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：容易。' },
      ],
      formationLogic: '核心义：容易。',
      mnemonic: '看到 ease，先说出「容易」。',
      note: '核心义：容易。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ease.', chinese: '这一章反复回到同一个点：容易。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ease.s1', en: 'Without that ease, the next paragraph is hard to follow.', zh: '没有这个容易，下一段会很难读。', structure: 'ease / 表示 / 容易', grammar: 'noun，围绕「容易」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ease.', right: 'He gave me some advice about the ease.', reason: 'advice 不可数。名词 ease 的单复数按词典词形记。', rule: '先确定 ease 是noun，再套「容易」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ease.q1', senseId: 'ease.s1', errorType: 'meaning', type: '词义选择', prompt: '「ease」在本条的核心意思是：', options: ['容易', '完全相反的意思', '一种古代钱币'], answer: '容易', explain: 'ease：容易。' },
      { id: 'ease.q2', senseId: 'ease.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ease?', options: ['容易', 'a kind of ancient coin', 'the past tense of be'], answer: '容易', explain: '对的是「容易」。' },
      { id: 'ease.q3', senseId: 'ease.s1', errorType: 'grammar', type: '词义选择', prompt: 'ease 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ease.q4', senseId: 'ease.s1', errorType: 'meaning', type: '词源', prompt: '记 ease 时，哪句更稳妥？', options: ['先锁住「容易」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「容易」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['容易'] },
  });

  D('east', {
    etymology: {
      origin: '现代英语常用词「east」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'east', gloss: '东方' },
      suffix: null,
      history: [
        { label: 'east', text: '现代英语常用词「east」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：东方。' },
      ],
      formationLogic: '核心义：东方。',
      mnemonic: '看到 east，先说出「东方」。',
      note: '核心义：东方。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one east.', chinese: '这一章反复回到同一个点：东方。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'east.s1', en: 'Without that east, the next paragraph is hard to follow.', zh: '没有这个东方，下一段会很难读。', structure: 'east / 表示 / 东方', grammar: 'noun，围绕「东方」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the east.', right: 'He gave me some advice about the east.', reason: 'advice 不可数。名词 east 的单复数按词典词形记。', rule: '先确定 east 是noun，再套「东方」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'east.q1', senseId: 'east.s1', errorType: 'meaning', type: '词义选择', prompt: '「east」在本条的核心意思是：', options: ['东方', '完全相反的意思', '一种古代钱币'], answer: '东方', explain: 'east：东方。' },
      { id: 'east.q2', senseId: 'east.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches east?', options: ['东方', 'a kind of ancient coin', 'the past tense of be'], answer: '东方', explain: '对的是「东方」。' },
      { id: 'east.q3', senseId: 'east.s1', errorType: 'grammar', type: '词义选择', prompt: 'east 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'east.q4', senseId: 'east.s1', errorType: 'meaning', type: '词源', prompt: '记 east 时，哪句更稳妥？', options: ['先锁住「东方」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「东方」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['东方'] },
  });

  D('Easter', {
    etymology: {
      origin: '英语派生：East + -er，词性转到「复活节」。',
      prefix: null,
      root: { text: 'East', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'Easter', text: '英语派生：East + -er，词性转到「复活节」。' },
        { label: '现在', text: '核心用法是：复活节。' },
      ],
      formationLogic: '先认词干 East，再看词尾。',
      mnemonic: '看到 Easter，先说出「复活节」。',
      note: '先认词干 East，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one Easter.', chinese: '这一章反复回到同一个点：复活节。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Easter.s1', en: 'Without that Easter, the next paragraph is hard to follow.', zh: '没有这个复活节，下一段会很难读。', structure: 'Easter / 表示 / 复活节', grammar: 'noun，围绕「复活节」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the Easter.', right: 'He gave me some advice about the Easter.', reason: 'advice 不可数。名词 Easter 的单复数按词典词形记。', rule: '先确定 Easter 是noun，再套「复活节」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Easter.q1', senseId: 'Easter.s1', errorType: 'meaning', type: '词义选择', prompt: '「Easter」在本条的核心意思是：', options: ['复活节', '完全相反的意思', '一种古代钱币'], answer: '复活节', explain: 'Easter：复活节。' },
      { id: 'Easter.q2', senseId: 'Easter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Easter?', options: ['复活节', 'a kind of ancient coin', 'the past tense of be'], answer: '复活节', explain: '对的是「复活节」。' },
      { id: 'Easter.q3', senseId: 'Easter.s1', errorType: 'grammar', type: '词义选择', prompt: 'Easter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'Easter.q4', senseId: 'Easter.s1', errorType: 'meaning', type: '词源', prompt: '记 Easter 时，哪句更稳妥？', options: ['先锁住「复活节」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复活节」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复活节'] },
  });

  D('eastern', {
    etymology: {
      origin: '现代英语常用词「eastern」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eastern', gloss: '东方的' },
      suffix: null,
      history: [
        { label: 'eastern', text: '现代英语常用词「eastern」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：东方的。' },
      ],
      formationLogic: '核心义：东方的。',
      mnemonic: '看到 eastern，先说出「东方的」。',
      note: '核心义：东方的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eastern.', chinese: '即使是初读者也能看出，这个结果是东方的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eastern.s1', en: 'They wanted a eastern answer, not a long speech.', zh: '他们要一个东方的的答复，不要长篇发言。', structure: 'eastern / 表示 / 东方的', grammar: 'adjective，围绕「东方的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eastern.', right: 'The news is eastern.', reason: 'news 作主语时动词用单数。', rule: '先确定 eastern 是adjective，再套「东方的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eastern.q1', senseId: 'eastern.s1', errorType: 'meaning', type: '词义选择', prompt: '「eastern」在本条的核心意思是：', options: ['东方的', '完全相反的意思', '一种古代钱币'], answer: '东方的', explain: 'eastern：东方的。' },
      { id: 'eastern.q2', senseId: 'eastern.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eastern?', options: ['东方的', 'a kind of ancient coin', 'the past tense of be'], answer: '东方的', explain: '对的是「东方的」。' },
      { id: 'eastern.q3', senseId: 'eastern.s1', errorType: 'grammar', type: '词义选择', prompt: 'eastern 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eastern.q4', senseId: 'eastern.s1', errorType: 'meaning', type: '词源', prompt: '记 eastern 时，哪句更稳妥？', options: ['先锁住「东方的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「东方的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['东方的'] },
  });

  D('eastward', {
    etymology: {
      origin: '现代英语常用词「eastward」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eastward', gloss: '向东的' },
      suffix: null,
      history: [
        { label: 'eastward', text: '现代英语常用词「eastward」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向东的。' },
      ],
      formationLogic: '核心义：向东的。',
      mnemonic: '看到 eastward，先说出「向东的」。',
      note: '核心义：向东的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule eastward, and the class followed.', chinese: '她把规则讲清楚了（向东的），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eastward.s1', en: 'He nodded eastward and returned to the notes.', zh: '他向东的地点了点头，又回去看笔记。', structure: 'eastward / 表示 / 向东的', grammar: 'adverb，围绕「向东的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very eastwardly in the meeting.', right: 'She spoke eastward in the meeting.', reason: 'eastward 已经是副词，不要再加 -ly。', rule: '先确定 eastward 是adverb，再套「向东的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eastward.q1', senseId: 'eastward.s1', errorType: 'meaning', type: '词义选择', prompt: '「eastward」在本条的核心意思是：', options: ['向东的', '完全相反的意思', '一种古代钱币'], answer: '向东的', explain: 'eastward：向东的。' },
      { id: 'eastward.q2', senseId: 'eastward.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eastward?', options: ['向东的', 'a kind of ancient coin', 'the past tense of be'], answer: '向东的', explain: '对的是「向东的」。' },
      { id: 'eastward.q3', senseId: 'eastward.s1', errorType: 'grammar', type: '词义选择', prompt: 'eastward 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'eastward.q4', senseId: 'eastward.s1', errorType: 'meaning', type: '词源', prompt: '记 eastward 时，哪句更稳妥？', options: ['先锁住「向东的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向东的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向东的'] },
  });

  D('eastwards', {
    etymology: {
      origin: '现代英语常用词「eastwards」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eastwards', gloss: '向东' },
      suffix: null,
      history: [
        { label: 'eastwards', text: '现代英语常用词「eastwards」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：向东。' },
      ],
      formationLogic: '核心义：向东。',
      mnemonic: '看到 eastwards，先说出「向东」。',
      note: '核心义：向东。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule eastwards, and the class followed.', chinese: '她把规则讲清楚了（向东），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eastwards.s1', en: 'He nodded eastwards and returned to the notes.', zh: '他向东地点了点头，又回去看笔记。', structure: 'eastwards / 表示 / 向东', grammar: 'adverb，围绕「向东」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very eastwardsly in the meeting.', right: 'She spoke eastwards in the meeting.', reason: 'eastwards 已经是副词，不要再加 -ly。', rule: '先确定 eastwards 是adverb，再套「向东」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eastwards.q1', senseId: 'eastwards.s1', errorType: 'meaning', type: '词义选择', prompt: '「eastwards」在本条的核心意思是：', options: ['向东', '完全相反的意思', '一种古代钱币'], answer: '向东', explain: 'eastwards：向东。' },
      { id: 'eastwards.q2', senseId: 'eastwards.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eastwards?', options: ['向东', 'a kind of ancient coin', 'the past tense of be'], answer: '向东', explain: '对的是「向东」。' },
      { id: 'eastwards.q3', senseId: 'eastwards.s1', errorType: 'grammar', type: '词义选择', prompt: 'eastwards 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'eastwards.q4', senseId: 'eastwards.s1', errorType: 'meaning', type: '词源', prompt: '记 eastwards 时，哪句更稳妥？', options: ['先锁住「向东」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「向东」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['向东'] },
  });

  D('easy', {
    etymology: {
      origin: '现代英语常用词「easy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'easy', gloss: '容易的' },
      suffix: null,
      history: [
        { label: 'easy', text: '现代英语常用词「easy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：容易的。' },
      ],
      formationLogic: '核心义：容易的。',
      mnemonic: '看到 easy，先说出「容易的」。',
      note: '核心义：容易的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was easy.', chinese: '即使是初读者也能看出，这个结果是容易的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'easy.s1', en: 'They wanted a easy answer, not a long speech.', zh: '他们要一个容易的的答复，不要长篇发言。', structure: 'easy / 表示 / 容易的', grammar: 'adjective，围绕「容易的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are easy.', right: 'The news is easy.', reason: 'news 作主语时动词用单数。', rule: '先确定 easy 是adjective，再套「容易的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'easy.q1', senseId: 'easy.s1', errorType: 'meaning', type: '词义选择', prompt: '「easy」在本条的核心意思是：', options: ['容易的', '完全相反的意思', '一种古代钱币'], answer: '容易的', explain: 'easy：容易的。' },
      { id: 'easy.q2', senseId: 'easy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches easy?', options: ['容易的', 'a kind of ancient coin', 'the past tense of be'], answer: '容易的', explain: '对的是「容易的」。' },
      { id: 'easy.q3', senseId: 'easy.s1', errorType: 'grammar', type: '词义选择', prompt: 'easy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'easy.q4', senseId: 'easy.s1', errorType: 'meaning', type: '词源', prompt: '记 easy 时，哪句更稳妥？', options: ['先锁住「容易的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「容易的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['容易的'] },
  });

  D('easy task', {
    etymology: {
      origin: '现代英语固定说法「easy task」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'easy task', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'easy task', text: '现代英语固定说法「easy task」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：容易的事。' },
      ],
      formationLogic: '核心义：容易的事。',
      mnemonic: '看到 easy task，先说出「容易的事」。',
      note: '核心义：容易的事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "easy task" and asked the class to keep it as one unit.', chinese: '老师把「easy task」圈出来，让全班把它当成一个整体。它表示容易的事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'easy task.s1', en: 'In the margin she wrote "easy task" so nobody would split the phrase.', zh: '她在页边写下「easy task」，免得有人把这个说法拆开。意思是容易的事。', structure: 'easy task / 表示 / 容易的事', grammar: 'noun，围绕「容易的事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of easy task and lost the point.', right: 'Keep "easy task" together: it means 容易的事.', reason: '「easy task」要整块理解。', rule: '先确定 easy task 是noun，再套「容易的事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'easy task.q1', senseId: 'easy task.s1', errorType: 'meaning', type: '词义选择', prompt: '「easy task」在本条的核心意思是：', options: ['容易的事', '完全相反的意思', '一种古代钱币'], answer: '容易的事', explain: 'easy task：容易的事。' },
      { id: 'easy task.q2', senseId: 'easy task.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches easy task?', options: ['容易的事', 'a kind of ancient coin', 'the past tense of be'], answer: '容易的事', explain: '对的是「容易的事」。' },
      { id: 'easy task.q3', senseId: 'easy task.s1', errorType: 'grammar', type: '词义选择', prompt: 'easy task 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'easy task.q4', senseId: 'easy task.s1', errorType: 'meaning', type: '词源', prompt: '记 easy task 时，哪句更稳妥？', options: ['先锁住「容易的事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「容易的事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['容易的事'] },
  });

  D('easy-going', {
    etymology: {
      origin: '英语派生：easy-go + -ing，词性转到「随和的」。',
      prefix: null,
      root: { text: 'easy-go', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'easy-going', text: '英语派生：easy-go + -ing，词性转到「随和的」。' },
        { label: '现在', text: '核心用法是：随和的。' },
      ],
      formationLogic: '先认词干 easy-go，再看词尾。',
      mnemonic: '看到 easy-going，先说出「随和的」。',
      note: '先认词干 easy-go，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was easy-going.', chinese: '即使是初读者也能看出，这个结果是随和的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'easy-going.s1', en: 'They wanted a easy-going answer, not a long speech.', zh: '他们要一个随和的的答复，不要长篇发言。', structure: 'easy-going / 表示 / 随和的', grammar: 'adjective，围绕「随和的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are easy-going.', right: 'The news is easy-going.', reason: 'news 作主语时动词用单数。', rule: '先确定 easy-going 是adjective，再套「随和的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'easy-going.q1', senseId: 'easy-going.s1', errorType: 'meaning', type: '词义选择', prompt: '「easy-going」在本条的核心意思是：', options: ['随和的', '完全相反的意思', '一种古代钱币'], answer: '随和的', explain: 'easy-going：随和的。' },
      { id: 'easy-going.q2', senseId: 'easy-going.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches easy-going?', options: ['随和的', 'a kind of ancient coin', 'the past tense of be'], answer: '随和的', explain: '对的是「随和的」。' },
      { id: 'easy-going.q3', senseId: 'easy-going.s1', errorType: 'grammar', type: '词义选择', prompt: 'easy-going 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'easy-going.q4', senseId: 'easy-going.s1', errorType: 'meaning', type: '词源', prompt: '记 easy-going 时，哪句更稳妥？', options: ['先锁住「随和的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「随和的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['随和的'] },
  });

  D('eat', {
    etymology: {
      origin: '现代英语常用词「eat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eat', gloss: '吃' },
      suffix: null,
      history: [
        { label: 'eat', text: '现代英语常用词「eat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：吃。' },
      ],
      formationLogic: '核心义：吃。',
      mnemonic: '看到 eat，先说出「吃」。',
      note: '核心义：吃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to eat before the office closed.', chinese: '他们同意在办公室关门前做这件事：吃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eat.s1', en: 'The deadline forced the team to eat that afternoon.', zh: '截止日期逼着小组在那天下午吃。', structure: 'eat / 表示 / 吃', grammar: 'verb，围绕「吃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She eated it yesterday without checking the real past form.', right: 'Check the past form of "eat" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 eat 是verb，再套「吃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eat.q1', senseId: 'eat.s1', errorType: 'meaning', type: '词义选择', prompt: '「eat」在本条的核心意思是：', options: ['吃', '完全相反的意思', '一种古代钱币'], answer: '吃', explain: 'eat：吃。' },
      { id: 'eat.q2', senseId: 'eat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eat?', options: ['吃', 'a kind of ancient coin', 'the past tense of be'], answer: '吃', explain: '对的是「吃」。' },
      { id: 'eat.q3', senseId: 'eat.s1', errorType: 'grammar', type: '词义选择', prompt: 'eat 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eat.q4', senseId: 'eat.s1', errorType: 'meaning', type: '词源', prompt: '记 eat 时，哪句更稳妥？', options: ['先锁住「吃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「吃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['吃'] },
  });

  D('eat away', {
    etymology: {
      origin: '现代英语固定说法「eat away」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'eat away', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'eat away', text: '现代英语固定说法「eat away」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：侵蚀。' },
      ],
      formationLogic: '核心义：侵蚀。',
      mnemonic: '看到 eat away，先说出「侵蚀」。',
      note: '核心义：侵蚀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "eat away" and asked the class to keep it as one unit.', chinese: '老师把「eat away」圈出来，让全班把它当成一个整体。它表示侵蚀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eat away.s1', en: 'In the margin she wrote "eat away" so nobody would split the phrase.', zh: '她在页边写下「eat away」，免得有人把这个说法拆开。意思是侵蚀。', structure: 'eat away / 表示 / 侵蚀', grammar: 'verb，围绕「侵蚀」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of eat away and lost the point.', right: 'Keep "eat away" together: it means 侵蚀.', reason: '「eat away」要整块理解。', rule: '先确定 eat away 是verb，再套「侵蚀」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eat away.q1', senseId: 'eat away.s1', errorType: 'meaning', type: '词义选择', prompt: '「eat away」在本条的核心意思是：', options: ['侵蚀', '完全相反的意思', '一种古代钱币'], answer: '侵蚀', explain: 'eat away：侵蚀。' },
      { id: 'eat away.q2', senseId: 'eat away.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eat away?', options: ['侵蚀', 'a kind of ancient coin', 'the past tense of be'], answer: '侵蚀', explain: '对的是「侵蚀」。' },
      { id: 'eat away.q3', senseId: 'eat away.s1', errorType: 'grammar', type: '词义选择', prompt: 'eat away 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eat away.q4', senseId: 'eat away.s1', errorType: 'meaning', type: '词源', prompt: '记 eat away 时，哪句更稳妥？', options: ['先锁住「侵蚀」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「侵蚀」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侵蚀'] },
  });

  D('eat outdoors', {
    etymology: {
      origin: '现代英语固定说法「eat outdoors」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'eat outdoors', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'eat outdoors', text: '现代英语固定说法「eat outdoors」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：在户外吃。' },
      ],
      formationLogic: '核心义：在户外吃。',
      mnemonic: '看到 eat outdoors，先说出「在户外吃」。',
      note: '核心义：在户外吃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "eat outdoors" and asked the class to keep it as one unit.', chinese: '老师把「eat outdoors」圈出来，让全班把它当成一个整体。它表示在户外吃。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eat outdoors.s1', en: 'In the margin she wrote "eat outdoors" so nobody would split the phrase.', zh: '她在页边写下「eat outdoors」，免得有人把这个说法拆开。意思是在户外吃。', structure: 'eat outdoors / 表示 / 在户外吃', grammar: 'verb，围绕「在户外吃」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of eat outdoors and lost the point.', right: 'Keep "eat outdoors" together: it means 在户外吃.', reason: '「eat outdoors」要整块理解。', rule: '先确定 eat outdoors 是verb，再套「在户外吃」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eat outdoors.q1', senseId: 'eat outdoors.s1', errorType: 'meaning', type: '词义选择', prompt: '「eat outdoors」在本条的核心意思是：', options: ['在户外吃', '完全相反的意思', '一种古代钱币'], answer: '在户外吃', explain: 'eat outdoors：在户外吃。' },
      { id: 'eat outdoors.q2', senseId: 'eat outdoors.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eat outdoors?', options: ['在户外吃', 'a kind of ancient coin', 'the past tense of be'], answer: '在户外吃', explain: '对的是「在户外吃」。' },
      { id: 'eat outdoors.q3', senseId: 'eat outdoors.s1', errorType: 'grammar', type: '词义选择', prompt: 'eat outdoors 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eat outdoors.q4', senseId: 'eat outdoors.s1', errorType: 'meaning', type: '词源', prompt: '记 eat outdoors 时，哪句更稳妥？', options: ['先锁住「在户外吃」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「在户外吃」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在户外吃'] },
  });

  D('eatable', {
    etymology: {
      origin: '英语派生：eat + -able，词性转到「可吃的」。',
      prefix: null,
      root: { text: 'eat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eatable', text: '英语派生：eat + -able，词性转到「可吃的」。' },
        { label: '现在', text: '核心用法是：可吃的。' },
      ],
      formationLogic: '先认词干 eat，再看词尾。',
      mnemonic: '看到 eatable，先说出「可吃的」。',
      note: '先认词干 eat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eatable.', chinese: '即使是初读者也能看出，这个结果是可吃的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eatable.s1', en: 'They wanted a eatable answer, not a long speech.', zh: '他们要一个可吃的的答复，不要长篇发言。', structure: 'eatable / 表示 / 可吃的', grammar: 'adjective，围绕「可吃的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eatable.', right: 'The news is eatable.', reason: 'news 作主语时动词用单数。', rule: '先确定 eatable 是adjective，再套「可吃的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eatable.q1', senseId: 'eatable.s1', errorType: 'meaning', type: '词义选择', prompt: '「eatable」在本条的核心意思是：', options: ['可吃的', '完全相反的意思', '一种古代钱币'], answer: '可吃的', explain: 'eatable：可吃的。' },
      { id: 'eatable.q2', senseId: 'eatable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eatable?', options: ['可吃的', 'a kind of ancient coin', 'the past tense of be'], answer: '可吃的', explain: '对的是「可吃的」。' },
      { id: 'eatable.q3', senseId: 'eatable.s1', errorType: 'grammar', type: '词义选择', prompt: 'eatable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eatable.q4', senseId: 'eatable.s1', errorType: 'meaning', type: '词源', prompt: '记 eatable 时，哪句更稳妥？', options: ['先锁住「可吃的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可吃的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可吃的'] },
  });

  D('eatery', {
    etymology: {
      origin: '现代英语常用词「eatery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eatery', gloss: '小餐馆' },
      suffix: null,
      history: [
        { label: 'eatery', text: '现代英语常用词「eatery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小餐馆。' },
      ],
      formationLogic: '核心义：小餐馆。',
      mnemonic: '看到 eatery，先说出「小餐馆」。',
      note: '核心义：小餐馆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eatery.', chinese: '这一章反复回到同一个点：小餐馆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eatery.s1', en: 'Without that eatery, the next paragraph is hard to follow.', zh: '没有这个小餐馆，下一段会很难读。', structure: 'eatery / 表示 / 小餐馆', grammar: 'noun，围绕「小餐馆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eatery.', right: 'He gave me some advice about the eatery.', reason: 'advice 不可数。名词 eatery 的单复数按词典词形记。', rule: '先确定 eatery 是noun，再套「小餐馆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eatery.q1', senseId: 'eatery.s1', errorType: 'meaning', type: '词义选择', prompt: '「eatery」在本条的核心意思是：', options: ['小餐馆', '完全相反的意思', '一种古代钱币'], answer: '小餐馆', explain: 'eatery：小餐馆。' },
      { id: 'eatery.q2', senseId: 'eatery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eatery?', options: ['小餐馆', 'a kind of ancient coin', 'the past tense of be'], answer: '小餐馆', explain: '对的是「小餐馆」。' },
      { id: 'eatery.q3', senseId: 'eatery.s1', errorType: 'grammar', type: '词义选择', prompt: 'eatery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eatery.q4', senseId: 'eatery.s1', errorType: 'meaning', type: '词源', prompt: '记 eatery 时，哪句更稳妥？', options: ['先锁住「小餐馆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小餐馆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小餐馆'] },
  });

  D('eavesdrop', {
    etymology: {
      origin: '现代英语常用词「eavesdrop」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eavesdrop', gloss: '偷听' },
      suffix: null,
      history: [
        { label: 'eavesdrop', text: '现代英语常用词「eavesdrop」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：偷听。' },
      ],
      formationLogic: '核心义：偷听。',
      mnemonic: '看到 eavesdrop，先说出「偷听」。',
      note: '核心义：偷听。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to eavesdrop before the office closed.', chinese: '他们同意在办公室关门前做这件事：偷听。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eavesdrop.s1', en: 'The deadline forced the team to eavesdrop that afternoon.', zh: '截止日期逼着小组在那天下午偷听。', structure: 'eavesdrop / 表示 / 偷听', grammar: 'verb，围绕「偷听」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She eavesdroped it yesterday without checking the real past form.', right: 'Check the past form of "eavesdrop" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 eavesdrop 是verb，再套「偷听」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eavesdrop.q1', senseId: 'eavesdrop.s1', errorType: 'meaning', type: '词义选择', prompt: '「eavesdrop」在本条的核心意思是：', options: ['偷听', '完全相反的意思', '一种古代钱币'], answer: '偷听', explain: 'eavesdrop：偷听。' },
      { id: 'eavesdrop.q2', senseId: 'eavesdrop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eavesdrop?', options: ['偷听', 'a kind of ancient coin', 'the past tense of be'], answer: '偷听', explain: '对的是「偷听」。' },
      { id: 'eavesdrop.q3', senseId: 'eavesdrop.s1', errorType: 'grammar', type: '词义选择', prompt: 'eavesdrop 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eavesdrop.q4', senseId: 'eavesdrop.s1', errorType: 'meaning', type: '词源', prompt: '记 eavesdrop 时，哪句更稳妥？', options: ['先锁住「偷听」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「偷听」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['偷听'] },
  });

  D('ebb', {
    etymology: {
      origin: '现代英语常用词「ebb」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ebb', gloss: '退潮' },
      suffix: null,
      history: [
        { label: 'ebb', text: '现代英语常用词「ebb」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：退潮。' },
      ],
      formationLogic: '核心义：退潮。',
      mnemonic: '看到 ebb，先说出「退潮」。',
      note: '核心义：退潮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ebb.', chinese: '这一章反复回到同一个点：退潮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ebb.s1', en: 'Without that ebb, the next paragraph is hard to follow.', zh: '没有这个退潮，下一段会很难读。', structure: 'ebb / 表示 / 退潮', grammar: 'noun，围绕「退潮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ebb.', right: 'He gave me some advice about the ebb.', reason: 'advice 不可数。名词 ebb 的单复数按词典词形记。', rule: '先确定 ebb 是noun，再套「退潮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ebb.q1', senseId: 'ebb.s1', errorType: 'meaning', type: '词义选择', prompt: '「ebb」在本条的核心意思是：', options: ['退潮', '完全相反的意思', '一种古代钱币'], answer: '退潮', explain: 'ebb：退潮。' },
      { id: 'ebb.q2', senseId: 'ebb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ebb?', options: ['退潮', 'a kind of ancient coin', 'the past tense of be'], answer: '退潮', explain: '对的是「退潮」。' },
      { id: 'ebb.q3', senseId: 'ebb.s1', errorType: 'grammar', type: '词义选择', prompt: 'ebb 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ebb.q4', senseId: 'ebb.s1', errorType: 'meaning', type: '词源', prompt: '记 ebb 时，哪句更稳妥？', options: ['先锁住「退潮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「退潮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['退潮'] },
  });

  D('ebony', {
    etymology: {
      origin: '现代英语常用词「ebony」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ebony', gloss: '乌木' },
      suffix: null,
      history: [
        { label: 'ebony', text: '现代英语常用词「ebony」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：乌木。' },
      ],
      formationLogic: '核心义：乌木。',
      mnemonic: '看到 ebony，先说出「乌木」。',
      note: '核心义：乌木。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ebony.', chinese: '这一章反复回到同一个点：乌木。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ebony.s1', en: 'Without that ebony, the next paragraph is hard to follow.', zh: '没有这个乌木，下一段会很难读。', structure: 'ebony / 表示 / 乌木', grammar: 'noun，围绕「乌木」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ebony.', right: 'He gave me some advice about the ebony.', reason: 'advice 不可数。名词 ebony 的单复数按词典词形记。', rule: '先确定 ebony 是noun，再套「乌木」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ebony.q1', senseId: 'ebony.s1', errorType: 'meaning', type: '词义选择', prompt: '「ebony」在本条的核心意思是：', options: ['乌木', '完全相反的意思', '一种古代钱币'], answer: '乌木', explain: 'ebony：乌木。' },
      { id: 'ebony.q2', senseId: 'ebony.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ebony?', options: ['乌木', 'a kind of ancient coin', 'the past tense of be'], answer: '乌木', explain: '对的是「乌木」。' },
      { id: 'ebony.q3', senseId: 'ebony.s1', errorType: 'grammar', type: '词义选择', prompt: 'ebony 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ebony.q4', senseId: 'ebony.s1', errorType: 'meaning', type: '词源', prompt: '记 ebony 时，哪句更稳妥？', options: ['先锁住「乌木」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「乌木」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['乌木'] },
  });

  D('eccentric', {
    etymology: {
      origin: '英语派生：eccentr + -ic，词性转到「古怪的」。',
      prefix: null,
      root: { text: 'eccentr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eccentric', text: '英语派生：eccentr + -ic，词性转到「古怪的」。' },
        { label: '现在', text: '核心用法是：古怪的。' },
      ],
      formationLogic: '先认词干 eccentr，再看词尾。',
      mnemonic: '看到 eccentric，先说出「古怪的」。',
      note: '先认词干 eccentr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eccentric.', chinese: '即使是初读者也能看出，这个结果是古怪的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eccentric.s1', en: 'They wanted a eccentric answer, not a long speech.', zh: '他们要一个古怪的的答复，不要长篇发言。', structure: 'eccentric / 表示 / 古怪的', grammar: 'adjective，围绕「古怪的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eccentric.', right: 'The news is eccentric.', reason: 'news 作主语时动词用单数。', rule: '先确定 eccentric 是adjective，再套「古怪的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eccentric.q1', senseId: 'eccentric.s1', errorType: 'meaning', type: '词义选择', prompt: '「eccentric」在本条的核心意思是：', options: ['古怪的', '完全相反的意思', '一种古代钱币'], answer: '古怪的', explain: 'eccentric：古怪的。' },
      { id: 'eccentric.q2', senseId: 'eccentric.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eccentric?', options: ['古怪的', 'a kind of ancient coin', 'the past tense of be'], answer: '古怪的', explain: '对的是「古怪的」。' },
      { id: 'eccentric.q3', senseId: 'eccentric.s1', errorType: 'grammar', type: '词义选择', prompt: 'eccentric 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eccentric.q4', senseId: 'eccentric.s1', errorType: 'meaning', type: '词源', prompt: '记 eccentric 时，哪句更稳妥？', options: ['先锁住「古怪的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「古怪的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['古怪的'] },
  });

  D('echo', {
    etymology: {
      origin: '现代英语常用词「echo」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'echo', gloss: '回声' },
      suffix: null,
      history: [
        { label: 'echo', text: '现代英语常用词「echo」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：回声。' },
      ],
      formationLogic: '核心义：回声。',
      mnemonic: '看到 echo，先说出「回声」。',
      note: '核心义：回声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one echo.', chinese: '这一章反复回到同一个点：回声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'echo.s1', en: 'Without that echo, the next paragraph is hard to follow.', zh: '没有这个回声，下一段会很难读。', structure: 'echo / 表示 / 回声', grammar: 'noun，围绕「回声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the echo.', right: 'He gave me some advice about the echo.', reason: 'advice 不可数。名词 echo 的单复数按词典词形记。', rule: '先确定 echo 是noun，再套「回声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'echo.q1', senseId: 'echo.s1', errorType: 'meaning', type: '词义选择', prompt: '「echo」在本条的核心意思是：', options: ['回声', '完全相反的意思', '一种古代钱币'], answer: '回声', explain: 'echo：回声。' },
      { id: 'echo.q2', senseId: 'echo.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches echo?', options: ['回声', 'a kind of ancient coin', 'the past tense of be'], answer: '回声', explain: '对的是「回声」。' },
      { id: 'echo.q3', senseId: 'echo.s1', errorType: 'grammar', type: '词义选择', prompt: 'echo 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'echo.q4', senseId: 'echo.s1', errorType: 'meaning', type: '词源', prompt: '记 echo 时，哪句更稳妥？', options: ['先锁住「回声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「回声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['回声'] },
  });

  D('eclipse', {
    etymology: {
      origin: '现代英语常用词「eclipse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eclipse', gloss: '日食' },
      suffix: null,
      history: [
        { label: 'eclipse', text: '现代英语常用词「eclipse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：日食。' },
      ],
      formationLogic: '核心义：日食。',
      mnemonic: '看到 eclipse，先说出「日食」。',
      note: '核心义：日食。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eclipse.', chinese: '这一章反复回到同一个点：日食。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eclipse.s1', en: 'Without that eclipse, the next paragraph is hard to follow.', zh: '没有这个日食，下一段会很难读。', structure: 'eclipse / 表示 / 日食', grammar: 'noun，围绕「日食」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eclipse.', right: 'He gave me some advice about the eclipse.', reason: 'advice 不可数。名词 eclipse 的单复数按词典词形记。', rule: '先确定 eclipse 是noun，再套「日食」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eclipse.q1', senseId: 'eclipse.s1', errorType: 'meaning', type: '词义选择', prompt: '「eclipse」在本条的核心意思是：', options: ['日食', '完全相反的意思', '一种古代钱币'], answer: '日食', explain: 'eclipse：日食。' },
      { id: 'eclipse.q2', senseId: 'eclipse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eclipse?', options: ['日食', 'a kind of ancient coin', 'the past tense of be'], answer: '日食', explain: '对的是「日食」。' },
      { id: 'eclipse.q3', senseId: 'eclipse.s1', errorType: 'grammar', type: '词义选择', prompt: 'eclipse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eclipse.q4', senseId: 'eclipse.s1', errorType: 'meaning', type: '词源', prompt: '记 eclipse 时，哪句更稳妥？', options: ['先锁住「日食」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「日食」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['日食'] },
  });

  D('eco-friendly', {
    etymology: {
      origin: '英语派生：eco-friend + -ly，词性转到「环保的」。',
      prefix: null,
      root: { text: 'eco-friend', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eco-friendly', text: '英语派生：eco-friend + -ly，词性转到「环保的」。' },
        { label: '现在', text: '核心用法是：环保的。' },
      ],
      formationLogic: '先认词干 eco-friend，再看词尾。',
      mnemonic: '看到 eco-friendly，先说出「环保的」。',
      note: '先认词干 eco-friend，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eco-friendly.', chinese: '即使是初读者也能看出，这个结果是环保的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eco-friendly.s1', en: 'They wanted a eco-friendly answer, not a long speech.', zh: '他们要一个环保的的答复，不要长篇发言。', structure: 'eco-friendly / 表示 / 环保的', grammar: 'adjective，围绕「环保的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eco-friendly.', right: 'The news is eco-friendly.', reason: 'news 作主语时动词用单数。', rule: '先确定 eco-friendly 是adjective，再套「环保的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eco-friendly.q1', senseId: 'eco-friendly.s1', errorType: 'meaning', type: '词义选择', prompt: '「eco-friendly」在本条的核心意思是：', options: ['环保的', '完全相反的意思', '一种古代钱币'], answer: '环保的', explain: 'eco-friendly：环保的。' },
      { id: 'eco-friendly.q2', senseId: 'eco-friendly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eco-friendly?', options: ['环保的', 'a kind of ancient coin', 'the past tense of be'], answer: '环保的', explain: '对的是「环保的」。' },
      { id: 'eco-friendly.q3', senseId: 'eco-friendly.s1', errorType: 'grammar', type: '词义选择', prompt: 'eco-friendly 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eco-friendly.q4', senseId: 'eco-friendly.s1', errorType: 'meaning', type: '词源', prompt: '记 eco-friendly 时，哪句更稳妥？', options: ['先锁住「环保的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「环保的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['环保的'] },
  });

  D('ecology', {
    etymology: {
      origin: '现代英语常用词「ecology」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ecology', gloss: '生态学' },
      suffix: null,
      history: [
        { label: 'ecology', text: '现代英语常用词「ecology」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：生态学。' },
      ],
      formationLogic: '核心义：生态学。',
      mnemonic: '看到 ecology，先说出「生态学」。',
      note: '核心义：生态学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ecology.', chinese: '这一章反复回到同一个点：生态学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ecology.s1', en: 'Without that ecology, the next paragraph is hard to follow.', zh: '没有这个生态学，下一段会很难读。', structure: 'ecology / 表示 / 生态学', grammar: 'noun，围绕「生态学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ecology.', right: 'He gave me some advice about the ecology.', reason: 'advice 不可数。名词 ecology 的单复数按词典词形记。', rule: '先确定 ecology 是noun，再套「生态学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ecology.q1', senseId: 'ecology.s1', errorType: 'meaning', type: '词义选择', prompt: '「ecology」在本条的核心意思是：', options: ['生态学', '完全相反的意思', '一种古代钱币'], answer: '生态学', explain: 'ecology：生态学。' },
      { id: 'ecology.q2', senseId: 'ecology.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ecology?', options: ['生态学', 'a kind of ancient coin', 'the past tense of be'], answer: '生态学', explain: '对的是「生态学」。' },
      { id: 'ecology.q3', senseId: 'ecology.s1', errorType: 'grammar', type: '词义选择', prompt: 'ecology 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ecology.q4', senseId: 'ecology.s1', errorType: 'meaning', type: '词源', prompt: '记 ecology 时，哪句更稳妥？', options: ['先锁住「生态学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「生态学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['生态学'] },
  });

  D('economics', {
    etymology: {
      origin: '现代英语常用词「economics」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'economics', gloss: '经济学' },
      suffix: null,
      history: [
        { label: 'economics', text: '现代英语常用词「economics」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：经济学。' },
      ],
      formationLogic: '核心义：经济学。',
      mnemonic: '看到 economics，先说出「经济学」。',
      note: '核心义：经济学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one economics.', chinese: '这一章反复回到同一个点：经济学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'economics.s1', en: 'Without that economics, the next paragraph is hard to follow.', zh: '没有这个经济学，下一段会很难读。', structure: 'economics / 表示 / 经济学', grammar: 'noun，围绕「经济学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the economics.', right: 'He gave me some advice about the economics.', reason: 'advice 不可数。名词 economics 的单复数按词典词形记。', rule: '先确定 economics 是noun，再套「经济学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'economics.q1', senseId: 'economics.s1', errorType: 'meaning', type: '词义选择', prompt: '「economics」在本条的核心意思是：', options: ['经济学', '完全相反的意思', '一种古代钱币'], answer: '经济学', explain: 'economics：经济学。' },
      { id: 'economics.q2', senseId: 'economics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches economics?', options: ['经济学', 'a kind of ancient coin', 'the past tense of be'], answer: '经济学', explain: '对的是「经济学」。' },
      { id: 'economics.q3', senseId: 'economics.s1', errorType: 'grammar', type: '词义选择', prompt: 'economics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'economics.q4', senseId: 'economics.s1', errorType: 'meaning', type: '词源', prompt: '记 economics 时，哪句更稳妥？', options: ['先锁住「经济学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经济学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经济学'] },
  });

  D('economize', {
    etymology: {
      origin: '现代英语常用词「economize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'economize', gloss: '节约' },
      suffix: null,
      history: [
        { label: 'economize', text: '现代英语常用词「economize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：节约。' },
      ],
      formationLogic: '核心义：节约。',
      mnemonic: '看到 economize，先说出「节约」。',
      note: '核心义：节约。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to economize before the office closed.', chinese: '他们同意在办公室关门前做这件事：节约。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'economize.s1', en: 'The deadline forced the team to economize that afternoon.', zh: '截止日期逼着小组在那天下午节约。', structure: 'economize / 表示 / 节约', grammar: 'verb，围绕「节约」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She economizeed it yesterday without checking the real past form.', right: 'Check the past form of "economize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 economize 是verb，再套「节约」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'economize.q1', senseId: 'economize.s1', errorType: 'meaning', type: '词义选择', prompt: '「economize」在本条的核心意思是：', options: ['节约', '完全相反的意思', '一种古代钱币'], answer: '节约', explain: 'economize：节约。' },
      { id: 'economize.q2', senseId: 'economize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches economize?', options: ['节约', 'a kind of ancient coin', 'the past tense of be'], answer: '节约', explain: '对的是「节约」。' },
      { id: 'economize.q3', senseId: 'economize.s1', errorType: 'grammar', type: '词义选择', prompt: 'economize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'economize.q4', senseId: 'economize.s1', errorType: 'meaning', type: '词源', prompt: '记 economize 时，哪句更稳妥？', options: ['先锁住「节约」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「节约」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['节约'] },
  });

  D('economy', {
    etymology: {
      origin: '现代英语常用词「economy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'economy', gloss: '经济' },
      suffix: null,
      history: [
        { label: 'economy', text: '现代英语常用词「economy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：经济。' },
      ],
      formationLogic: '核心义：经济。',
      mnemonic: '看到 economy，先说出「经济」。',
      note: '核心义：经济。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one economy.', chinese: '这一章反复回到同一个点：经济。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'economy.s1', en: 'Without that economy, the next paragraph is hard to follow.', zh: '没有这个经济，下一段会很难读。', structure: 'economy / 表示 / 经济', grammar: 'noun，围绕「经济」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the economy.', right: 'He gave me some advice about the economy.', reason: 'advice 不可数。名词 economy 的单复数按词典词形记。', rule: '先确定 economy 是noun，再套「经济」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'economy.q1', senseId: 'economy.s1', errorType: 'meaning', type: '词义选择', prompt: '「economy」在本条的核心意思是：', options: ['经济', '完全相反的意思', '一种古代钱币'], answer: '经济', explain: 'economy：经济。' },
      { id: 'economy.q2', senseId: 'economy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches economy?', options: ['经济', 'a kind of ancient coin', 'the past tense of be'], answer: '经济', explain: '对的是「经济」。' },
      { id: 'economy.q3', senseId: 'economy.s1', errorType: 'grammar', type: '词义选择', prompt: 'economy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'economy.q4', senseId: 'economy.s1', errorType: 'meaning', type: '词源', prompt: '记 economy 时，哪句更稳妥？', options: ['先锁住「经济」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经济」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经济'] },
  });

  D('ecosystem', {
    etymology: {
      origin: '现代英语常用词「ecosystem」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ecosystem', gloss: '生态系统' },
      suffix: null,
      history: [
        { label: 'ecosystem', text: '现代英语常用词「ecosystem」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：生态系统。' },
      ],
      formationLogic: '核心义：生态系统。',
      mnemonic: '看到 ecosystem，先说出「生态系统」。',
      note: '核心义：生态系统。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ecosystem.', chinese: '这一章反复回到同一个点：生态系统。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ecosystem.s1', en: 'Without that ecosystem, the next paragraph is hard to follow.', zh: '没有这个生态系统，下一段会很难读。', structure: 'ecosystem / 表示 / 生态系统', grammar: 'noun，围绕「生态系统」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ecosystem.', right: 'He gave me some advice about the ecosystem.', reason: 'advice 不可数。名词 ecosystem 的单复数按词典词形记。', rule: '先确定 ecosystem 是noun，再套「生态系统」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ecosystem.q1', senseId: 'ecosystem.s1', errorType: 'meaning', type: '词义选择', prompt: '「ecosystem」在本条的核心意思是：', options: ['生态系统', '完全相反的意思', '一种古代钱币'], answer: '生态系统', explain: 'ecosystem：生态系统。' },
      { id: 'ecosystem.q2', senseId: 'ecosystem.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ecosystem?', options: ['生态系统', 'a kind of ancient coin', 'the past tense of be'], answer: '生态系统', explain: '对的是「生态系统」。' },
      { id: 'ecosystem.q3', senseId: 'ecosystem.s1', errorType: 'grammar', type: '词义选择', prompt: 'ecosystem 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ecosystem.q4', senseId: 'ecosystem.s1', errorType: 'meaning', type: '词源', prompt: '记 ecosystem 时，哪句更稳妥？', options: ['先锁住「生态系统」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「生态系统」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['生态系统'] },
  });

  D('edge', {
    etymology: {
      origin: '现代英语常用词「edge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'edge', gloss: '边缘' },
      suffix: null,
      history: [
        { label: 'edge', text: '现代英语常用词「edge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：边缘。' },
      ],
      formationLogic: '核心义：边缘。',
      mnemonic: '看到 edge，先说出「边缘」。',
      note: '核心义：边缘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one edge.', chinese: '这一章反复回到同一个点：边缘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'edge.s1', en: 'Without that edge, the next paragraph is hard to follow.', zh: '没有这个边缘，下一段会很难读。', structure: 'edge / 表示 / 边缘', grammar: 'noun，围绕「边缘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the edge.', right: 'He gave me some advice about the edge.', reason: 'advice 不可数。名词 edge 的单复数按词典词形记。', rule: '先确定 edge 是noun，再套「边缘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'edge.q1', senseId: 'edge.s1', errorType: 'meaning', type: '词义选择', prompt: '「edge」在本条的核心意思是：', options: ['边缘', '完全相反的意思', '一种古代钱币'], answer: '边缘', explain: 'edge：边缘。' },
      { id: 'edge.q2', senseId: 'edge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches edge?', options: ['边缘', 'a kind of ancient coin', 'the past tense of be'], answer: '边缘', explain: '对的是「边缘」。' },
      { id: 'edge.q3', senseId: 'edge.s1', errorType: 'grammar', type: '词义选择', prompt: 'edge 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'edge.q4', senseId: 'edge.s1', errorType: 'meaning', type: '词源', prompt: '记 edge 时，哪句更稳妥？', options: ['先锁住「边缘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「边缘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['边缘'] },
  });

  D('edible', {
    etymology: {
      origin: '现代英语常用词「edible」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'edible', gloss: '可食用的' },
      suffix: null,
      history: [
        { label: 'edible', text: '现代英语常用词「edible」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：可食用的。' },
      ],
      formationLogic: '核心义：可食用的。',
      mnemonic: '看到 edible，先说出「可食用的」。',
      note: '核心义：可食用的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was edible.', chinese: '即使是初读者也能看出，这个结果是可食用的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'edible.s1', en: 'They wanted a edible answer, not a long speech.', zh: '他们要一个可食用的的答复，不要长篇发言。', structure: 'edible / 表示 / 可食用的', grammar: 'adjective，围绕「可食用的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are edible.', right: 'The news is edible.', reason: 'news 作主语时动词用单数。', rule: '先确定 edible 是adjective，再套「可食用的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'edible.q1', senseId: 'edible.s1', errorType: 'meaning', type: '词义选择', prompt: '「edible」在本条的核心意思是：', options: ['可食用的', '完全相反的意思', '一种古代钱币'], answer: '可食用的', explain: 'edible：可食用的。' },
      { id: 'edible.q2', senseId: 'edible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches edible?', options: ['可食用的', 'a kind of ancient coin', 'the past tense of be'], answer: '可食用的', explain: '对的是「可食用的」。' },
      { id: 'edible.q3', senseId: 'edible.s1', errorType: 'grammar', type: '词义选择', prompt: 'edible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'edible.q4', senseId: 'edible.s1', errorType: 'meaning', type: '词源', prompt: '记 edible 时，哪句更稳妥？', options: ['先锁住「可食用的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可食用的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可食用的'] },
  });

  D('edit', {
    etymology: {
      origin: '现代英语常用词「edit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'edit', gloss: '编辑' },
      suffix: null,
      history: [
        { label: 'edit', text: '现代英语常用词「edit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：编辑。' },
      ],
      formationLogic: '核心义：编辑。',
      mnemonic: '看到 edit，先说出「编辑」。',
      note: '核心义：编辑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to edit before the office closed.', chinese: '他们同意在办公室关门前做这件事：编辑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'edit.s1', en: 'The deadline forced the team to edit that afternoon.', zh: '截止日期逼着小组在那天下午编辑。', structure: 'edit / 表示 / 编辑', grammar: 'verb，围绕「编辑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She edited it yesterday without checking the real past form.', right: 'Check the past form of "edit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 edit 是verb，再套「编辑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'edit.q1', senseId: 'edit.s1', errorType: 'meaning', type: '词义选择', prompt: '「edit」在本条的核心意思是：', options: ['编辑', '完全相反的意思', '一种古代钱币'], answer: '编辑', explain: 'edit：编辑。' },
      { id: 'edit.q2', senseId: 'edit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches edit?', options: ['编辑', 'a kind of ancient coin', 'the past tense of be'], answer: '编辑', explain: '对的是「编辑」。' },
      { id: 'edit.q3', senseId: 'edit.s1', errorType: 'grammar', type: '词义选择', prompt: 'edit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'edit.q4', senseId: 'edit.s1', errorType: 'meaning', type: '词源', prompt: '记 edit 时，哪句更稳妥？', options: ['先锁住「编辑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「编辑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['编辑'] },
  });

  D('edition', {
    etymology: {
      origin: '英语派生：edi + -tion，词性转到「版本」。',
      prefix: null,
      root: { text: 'edi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'edition', text: '英语派生：edi + -tion，词性转到「版本」。' },
        { label: '现在', text: '核心用法是：版本。' },
      ],
      formationLogic: '先认词干 edi，再看词尾。',
      mnemonic: '看到 edition，先说出「版本」。',
      note: '先认词干 edi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one edition.', chinese: '这一章反复回到同一个点：版本。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'edition.s1', en: 'Without that edition, the next paragraph is hard to follow.', zh: '没有这个版本，下一段会很难读。', structure: 'edition / 表示 / 版本', grammar: 'noun，围绕「版本」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the edition.', right: 'He gave me some advice about the edition.', reason: 'advice 不可数。名词 edition 的单复数按词典词形记。', rule: '先确定 edition 是noun，再套「版本」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'edition.q1', senseId: 'edition.s1', errorType: 'meaning', type: '词义选择', prompt: '「edition」在本条的核心意思是：', options: ['版本', '完全相反的意思', '一种古代钱币'], answer: '版本', explain: 'edition：版本。' },
      { id: 'edition.q2', senseId: 'edition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches edition?', options: ['版本', 'a kind of ancient coin', 'the past tense of be'], answer: '版本', explain: '对的是「版本」。' },
      { id: 'edition.q3', senseId: 'edition.s1', errorType: 'grammar', type: '词义选择', prompt: 'edition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'edition.q4', senseId: 'edition.s1', errorType: 'meaning', type: '词源', prompt: '记 edition 时，哪句更稳妥？', options: ['先锁住「版本」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「版本」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['版本'] },
  });

  D('editorial', {
    etymology: {
      origin: '英语派生：editori + -al，词性转到「社论」。',
      prefix: null,
      root: { text: 'editori', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'editorial', text: '英语派生：editori + -al，词性转到「社论」。' },
        { label: '现在', text: '核心用法是：社论。' },
      ],
      formationLogic: '先认词干 editori，再看词尾。',
      mnemonic: '看到 editorial，先说出「社论」。',
      note: '先认词干 editori，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one editorial.', chinese: '这一章反复回到同一个点：社论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'editorial.s1', en: 'Without that editorial, the next paragraph is hard to follow.', zh: '没有这个社论，下一段会很难读。', structure: 'editorial / 表示 / 社论', grammar: 'noun，围绕「社论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the editorial.', right: 'He gave me some advice about the editorial.', reason: 'advice 不可数。名词 editorial 的单复数按词典词形记。', rule: '先确定 editorial 是noun，再套「社论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'editorial.q1', senseId: 'editorial.s1', errorType: 'meaning', type: '词义选择', prompt: '「editorial」在本条的核心意思是：', options: ['社论', '完全相反的意思', '一种古代钱币'], answer: '社论', explain: 'editorial：社论。' },
      { id: 'editorial.q2', senseId: 'editorial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches editorial?', options: ['社论', 'a kind of ancient coin', 'the past tense of be'], answer: '社论', explain: '对的是「社论」。' },
      { id: 'editorial.q3', senseId: 'editorial.s1', errorType: 'grammar', type: '词义选择', prompt: 'editorial 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'editorial.q4', senseId: 'editorial.s1', errorType: 'meaning', type: '词源', prompt: '记 editorial 时，哪句更稳妥？', options: ['先锁住「社论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「社论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['社论'] },
  });

  D('educate', {
    etymology: {
      origin: '现代英语常用词「educate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'educate', gloss: '教育' },
      suffix: null,
      history: [
        { label: 'educate', text: '现代英语常用词「educate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：教育。' },
      ],
      formationLogic: '核心义：教育。',
      mnemonic: '看到 educate，先说出「教育」。',
      note: '核心义：教育。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to educate before the office closed.', chinese: '他们同意在办公室关门前做这件事：教育。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'educate.s1', en: 'The deadline forced the team to educate that afternoon.', zh: '截止日期逼着小组在那天下午教育。', structure: 'educate / 表示 / 教育', grammar: 'verb，围绕「教育」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She educateed it yesterday without checking the real past form.', right: 'Check the past form of "educate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 educate 是verb，再套「教育」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'educate.q1', senseId: 'educate.s1', errorType: 'meaning', type: '词义选择', prompt: '「educate」在本条的核心意思是：', options: ['教育', '完全相反的意思', '一种古代钱币'], answer: '教育', explain: 'educate：教育。' },
      { id: 'educate.q2', senseId: 'educate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches educate?', options: ['教育', 'a kind of ancient coin', 'the past tense of be'], answer: '教育', explain: '对的是「教育」。' },
      { id: 'educate.q3', senseId: 'educate.s1', errorType: 'grammar', type: '词义选择', prompt: 'educate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'educate.q4', senseId: 'educate.s1', errorType: 'meaning', type: '词源', prompt: '记 educate 时，哪句更稳妥？', options: ['先锁住「教育」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教育」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教育'] },
  });

  D('educational', {
    etymology: {
      origin: '英语派生：education + -al，词性转到「教育的」。',
      prefix: null,
      root: { text: 'education', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'educational', text: '英语派生：education + -al，词性转到「教育的」。' },
        { label: '现在', text: '核心用法是：教育的。' },
      ],
      formationLogic: '先认词干 education，再看词尾。',
      mnemonic: '看到 educational，先说出「教育的」。',
      note: '先认词干 education，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was educational.', chinese: '即使是初读者也能看出，这个结果是教育的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'educational.s1', en: 'They wanted a educational answer, not a long speech.', zh: '他们要一个教育的的答复，不要长篇发言。', structure: 'educational / 表示 / 教育的', grammar: 'adjective，围绕「教育的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are educational.', right: 'The news is educational.', reason: 'news 作主语时动词用单数。', rule: '先确定 educational 是adjective，再套「教育的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'educational.q1', senseId: 'educational.s1', errorType: 'meaning', type: '词义选择', prompt: '「educational」在本条的核心意思是：', options: ['教育的', '完全相反的意思', '一种古代钱币'], answer: '教育的', explain: 'educational：教育的。' },
      { id: 'educational.q2', senseId: 'educational.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches educational?', options: ['教育的', 'a kind of ancient coin', 'the past tense of be'], answer: '教育的', explain: '对的是「教育的」。' },
      { id: 'educational.q3', senseId: 'educational.s1', errorType: 'grammar', type: '词义选择', prompt: 'educational 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'educational.q4', senseId: 'educational.s1', errorType: 'meaning', type: '词源', prompt: '记 educational 时，哪句更稳妥？', options: ['先锁住「教育的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教育的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教育的'] },
  });

  D('eerie', {
    etymology: {
      origin: '现代英语常用词「eerie」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eerie', gloss: '怪异的' },
      suffix: null,
      history: [
        { label: 'eerie', text: '现代英语常用词「eerie」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：怪异的。' },
      ],
      formationLogic: '核心义：怪异的。',
      mnemonic: '看到 eerie，先说出「怪异的」。',
      note: '核心义：怪异的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eerie.', chinese: '即使是初读者也能看出，这个结果是怪异的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eerie.s1', en: 'They wanted a eerie answer, not a long speech.', zh: '他们要一个怪异的的答复，不要长篇发言。', structure: 'eerie / 表示 / 怪异的', grammar: 'adjective，围绕「怪异的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eerie.', right: 'The news is eerie.', reason: 'news 作主语时动词用单数。', rule: '先确定 eerie 是adjective，再套「怪异的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eerie.q1', senseId: 'eerie.s1', errorType: 'meaning', type: '词义选择', prompt: '「eerie」在本条的核心意思是：', options: ['怪异的', '完全相反的意思', '一种古代钱币'], answer: '怪异的', explain: 'eerie：怪异的。' },
      { id: 'eerie.q2', senseId: 'eerie.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eerie?', options: ['怪异的', 'a kind of ancient coin', 'the past tense of be'], answer: '怪异的', explain: '对的是「怪异的」。' },
      { id: 'eerie.q3', senseId: 'eerie.s1', errorType: 'grammar', type: '词义选择', prompt: 'eerie 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eerie.q4', senseId: 'eerie.s1', errorType: 'meaning', type: '词源', prompt: '记 eerie 时，哪句更稳妥？', options: ['先锁住「怪异的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「怪异的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['怪异的'] },
  });

  D('efficiency', {
    etymology: {
      origin: '现代英语常用词「efficiency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'efficiency', gloss: '效率' },
      suffix: null,
      history: [
        { label: 'efficiency', text: '现代英语常用词「efficiency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：效率。' },
      ],
      formationLogic: '核心义：效率。',
      mnemonic: '看到 efficiency，先说出「效率」。',
      note: '核心义：效率。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one efficiency.', chinese: '这一章反复回到同一个点：效率。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'efficiency.s1', en: 'Without that efficiency, the next paragraph is hard to follow.', zh: '没有这个效率，下一段会很难读。', structure: 'efficiency / 表示 / 效率', grammar: 'noun，围绕「效率」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the efficiency.', right: 'He gave me some advice about the efficiency.', reason: 'advice 不可数。名词 efficiency 的单复数按词典词形记。', rule: '先确定 efficiency 是noun，再套「效率」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'efficiency.q1', senseId: 'efficiency.s1', errorType: 'meaning', type: '词义选择', prompt: '「efficiency」在本条的核心意思是：', options: ['效率', '完全相反的意思', '一种古代钱币'], answer: '效率', explain: 'efficiency：效率。' },
      { id: 'efficiency.q2', senseId: 'efficiency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches efficiency?', options: ['效率', 'a kind of ancient coin', 'the past tense of be'], answer: '效率', explain: '对的是「效率」。' },
      { id: 'efficiency.q3', senseId: 'efficiency.s1', errorType: 'grammar', type: '词义选择', prompt: 'efficiency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'efficiency.q4', senseId: 'efficiency.s1', errorType: 'meaning', type: '词源', prompt: '记 efficiency 时，哪句更稳妥？', options: ['先锁住「效率」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「效率」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['效率'] },
  });

  D('effort', {
    etymology: {
      origin: '现代英语常用词「effort」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'effort', gloss: '努力' },
      suffix: null,
      history: [
        { label: 'effort', text: '现代英语常用词「effort」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：努力。' },
      ],
      formationLogic: '核心义：努力。',
      mnemonic: '看到 effort，先说出「努力」。',
      note: '核心义：努力。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one effort.', chinese: '这一章反复回到同一个点：努力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'effort.s1', en: 'Without that effort, the next paragraph is hard to follow.', zh: '没有这个努力，下一段会很难读。', structure: 'effort / 表示 / 努力', grammar: 'noun，围绕「努力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the effort.', right: 'He gave me some advice about the effort.', reason: 'advice 不可数。名词 effort 的单复数按词典词形记。', rule: '先确定 effort 是noun，再套「努力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'effort.q1', senseId: 'effort.s1', errorType: 'meaning', type: '词义选择', prompt: '「effort」在本条的核心意思是：', options: ['努力', '完全相反的意思', '一种古代钱币'], answer: '努力', explain: 'effort：努力。' },
      { id: 'effort.q2', senseId: 'effort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches effort?', options: ['努力', 'a kind of ancient coin', 'the past tense of be'], answer: '努力', explain: '对的是「努力」。' },
      { id: 'effort.q3', senseId: 'effort.s1', errorType: 'grammar', type: '词义选择', prompt: 'effort 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'effort.q4', senseId: 'effort.s1', errorType: 'meaning', type: '词源', prompt: '记 effort 时，哪句更稳妥？', options: ['先锁住「努力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「努力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['努力'] },
  });

  D('effortless', {
    etymology: {
      origin: '英语派生：effort + -less，词性转到「不费力的」。',
      prefix: null,
      root: { text: 'effort', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'effortless', text: '英语派生：effort + -less，词性转到「不费力的」。' },
        { label: '现在', text: '核心用法是：不费力的。' },
      ],
      formationLogic: '先认词干 effort，再看词尾。',
      mnemonic: '看到 effortless，先说出「不费力的」。',
      note: '先认词干 effort，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was effortless.', chinese: '即使是初读者也能看出，这个结果是不费力的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'effortless.s1', en: 'They wanted a effortless answer, not a long speech.', zh: '他们要一个不费力的的答复，不要长篇发言。', structure: 'effortless / 表示 / 不费力的', grammar: 'adjective，围绕「不费力的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are effortless.', right: 'The news is effortless.', reason: 'news 作主语时动词用单数。', rule: '先确定 effortless 是adjective，再套「不费力的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'effortless.q1', senseId: 'effortless.s1', errorType: 'meaning', type: '词义选择', prompt: '「effortless」在本条的核心意思是：', options: ['不费力的', '完全相反的意思', '一种古代钱币'], answer: '不费力的', explain: 'effortless：不费力的。' },
      { id: 'effortless.q2', senseId: 'effortless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches effortless?', options: ['不费力的', 'a kind of ancient coin', 'the past tense of be'], answer: '不费力的', explain: '对的是「不费力的」。' },
      { id: 'effortless.q3', senseId: 'effortless.s1', errorType: 'grammar', type: '词义选择', prompt: 'effortless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'effortless.q4', senseId: 'effortless.s1', errorType: 'meaning', type: '词源', prompt: '记 effortless 时，哪句更稳妥？', options: ['先锁住「不费力的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不费力的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不费力的'] },
  });

  D('egg', {
    etymology: {
      origin: '现代英语常用词「egg」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'egg', gloss: '蛋' },
      suffix: null,
      history: [
        { label: 'egg', text: '现代英语常用词「egg」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蛋。' },
      ],
      formationLogic: '核心义：蛋。',
      mnemonic: '看到 egg，先说出「蛋」。',
      note: '核心义：蛋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one egg.', chinese: '这一章反复回到同一个点：蛋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'egg.s1', en: 'Without that egg, the next paragraph is hard to follow.', zh: '没有这个蛋，下一段会很难读。', structure: 'egg / 表示 / 蛋', grammar: 'noun，围绕「蛋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the egg.', right: 'He gave me some advice about the egg.', reason: 'advice 不可数。名词 egg 的单复数按词典词形记。', rule: '先确定 egg 是noun，再套「蛋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'egg.q1', senseId: 'egg.s1', errorType: 'meaning', type: '词义选择', prompt: '「egg」在本条的核心意思是：', options: ['蛋', '完全相反的意思', '一种古代钱币'], answer: '蛋', explain: 'egg：蛋。' },
      { id: 'egg.q2', senseId: 'egg.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches egg?', options: ['蛋', 'a kind of ancient coin', 'the past tense of be'], answer: '蛋', explain: '对的是「蛋」。' },
      { id: 'egg.q3', senseId: 'egg.s1', errorType: 'grammar', type: '词义选择', prompt: 'egg 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'egg.q4', senseId: 'egg.s1', errorType: 'meaning', type: '词源', prompt: '记 egg 时，哪句更稳妥？', options: ['先锁住「蛋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蛋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蛋'] },
  });

  D('egg shape', {
    etymology: {
      origin: '现代英语固定说法「egg shape」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'egg shape', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'egg shape', text: '现代英语固定说法「egg shape」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：蛋形。' },
      ],
      formationLogic: '核心义：蛋形。',
      mnemonic: '看到 egg shape，先说出「蛋形」。',
      note: '核心义：蛋形。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "egg shape" and asked the class to keep it as one unit.', chinese: '老师把「egg shape」圈出来，让全班把它当成一个整体。它表示蛋形。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'egg shape.s1', en: 'In the margin she wrote "egg shape" so nobody would split the phrase.', zh: '她在页边写下「egg shape」，免得有人把这个说法拆开。意思是蛋形。', structure: 'egg shape / 表示 / 蛋形', grammar: 'noun，围绕「蛋形」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of egg shape and lost the point.', right: 'Keep "egg shape" together: it means 蛋形.', reason: '「egg shape」要整块理解。', rule: '先确定 egg shape 是noun，再套「蛋形」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'egg shape.q1', senseId: 'egg shape.s1', errorType: 'meaning', type: '词义选择', prompt: '「egg shape」在本条的核心意思是：', options: ['蛋形', '完全相反的意思', '一种古代钱币'], answer: '蛋形', explain: 'egg shape：蛋形。' },
      { id: 'egg shape.q2', senseId: 'egg shape.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches egg shape?', options: ['蛋形', 'a kind of ancient coin', 'the past tense of be'], answer: '蛋形', explain: '对的是「蛋形」。' },
      { id: 'egg shape.q3', senseId: 'egg shape.s1', errorType: 'grammar', type: '词义选择', prompt: 'egg shape 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'egg shape.q4', senseId: 'egg shape.s1', errorType: 'meaning', type: '词源', prompt: '记 egg shape 时，哪句更稳妥？', options: ['先锁住「蛋形」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蛋形」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蛋形'] },
  });

  D('egg-shaped', {
    etymology: {
      origin: '现代英语常用词「egg-shaped」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'egg-shaped', gloss: '蛋形的' },
      suffix: null,
      history: [
        { label: 'egg-shaped', text: '现代英语常用词「egg-shaped」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：蛋形的。' },
      ],
      formationLogic: '核心义：蛋形的。',
      mnemonic: '看到 egg-shaped，先说出「蛋形的」。',
      note: '核心义：蛋形的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was egg-shaped.', chinese: '即使是初读者也能看出，这个结果是蛋形的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'egg-shaped.s1', en: 'They wanted a egg-shaped answer, not a long speech.', zh: '他们要一个蛋形的的答复，不要长篇发言。', structure: 'egg-shaped / 表示 / 蛋形的', grammar: 'adjective，围绕「蛋形的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are egg-shaped.', right: 'The news is egg-shaped.', reason: 'news 作主语时动词用单数。', rule: '先确定 egg-shaped 是adjective，再套「蛋形的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'egg-shaped.q1', senseId: 'egg-shaped.s1', errorType: 'meaning', type: '词义选择', prompt: '「egg-shaped」在本条的核心意思是：', options: ['蛋形的', '完全相反的意思', '一种古代钱币'], answer: '蛋形的', explain: 'egg-shaped：蛋形的。' },
      { id: 'egg-shaped.q2', senseId: 'egg-shaped.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches egg-shaped?', options: ['蛋形的', 'a kind of ancient coin', 'the past tense of be'], answer: '蛋形的', explain: '对的是「蛋形的」。' },
      { id: 'egg-shaped.q3', senseId: 'egg-shaped.s1', errorType: 'grammar', type: '词义选择', prompt: 'egg-shaped 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'egg-shaped.q4', senseId: 'egg-shaped.s1', errorType: 'meaning', type: '词源', prompt: '记 egg-shaped 时，哪句更稳妥？', options: ['先锁住「蛋形的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「蛋形的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蛋形的'] },
  });

  D('eggplant', {
    etymology: {
      origin: '现代英语常用词「eggplant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eggplant', gloss: '茄子' },
      suffix: null,
      history: [
        { label: 'eggplant', text: '现代英语常用词「eggplant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：茄子。' },
      ],
      formationLogic: '核心义：茄子。',
      mnemonic: '看到 eggplant，先说出「茄子」。',
      note: '核心义：茄子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eggplant.', chinese: '这一章反复回到同一个点：茄子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eggplant.s1', en: 'Without that eggplant, the next paragraph is hard to follow.', zh: '没有这个茄子，下一段会很难读。', structure: 'eggplant / 表示 / 茄子', grammar: 'noun，围绕「茄子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eggplant.', right: 'He gave me some advice about the eggplant.', reason: 'advice 不可数。名词 eggplant 的单复数按词典词形记。', rule: '先确定 eggplant 是noun，再套「茄子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eggplant.q1', senseId: 'eggplant.s1', errorType: 'meaning', type: '词义选择', prompt: '「eggplant」在本条的核心意思是：', options: ['茄子', '完全相反的意思', '一种古代钱币'], answer: '茄子', explain: 'eggplant：茄子。' },
      { id: 'eggplant.q2', senseId: 'eggplant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eggplant?', options: ['茄子', 'a kind of ancient coin', 'the past tense of be'], answer: '茄子', explain: '对的是「茄子」。' },
      { id: 'eggplant.q3', senseId: 'eggplant.s1', errorType: 'grammar', type: '词义选择', prompt: 'eggplant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eggplant.q4', senseId: 'eggplant.s1', errorType: 'meaning', type: '词源', prompt: '记 eggplant 时，哪句更稳妥？', options: ['先锁住「茄子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「茄子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['茄子'] },
  });

  D('ego', {
    etymology: {
      origin: '现代英语常用词「ego」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ego', gloss: '自我' },
      suffix: null,
      history: [
        { label: 'ego', text: '现代英语常用词「ego」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：自我。' },
      ],
      formationLogic: '核心义：自我。',
      mnemonic: '看到 ego，先说出「自我」。',
      note: '核心义：自我。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ego.', chinese: '这一章反复回到同一个点：自我。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ego.s1', en: 'Without that ego, the next paragraph is hard to follow.', zh: '没有这个自我，下一段会很难读。', structure: 'ego / 表示 / 自我', grammar: 'noun，围绕「自我」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ego.', right: 'He gave me some advice about the ego.', reason: 'advice 不可数。名词 ego 的单复数按词典词形记。', rule: '先确定 ego 是noun，再套「自我」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ego.q1', senseId: 'ego.s1', errorType: 'meaning', type: '词义选择', prompt: '「ego」在本条的核心意思是：', options: ['自我', '完全相反的意思', '一种古代钱币'], answer: '自我', explain: 'ego：自我。' },
      { id: 'ego.q2', senseId: 'ego.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ego?', options: ['自我', 'a kind of ancient coin', 'the past tense of be'], answer: '自我', explain: '对的是「自我」。' },
      { id: 'ego.q3', senseId: 'ego.s1', errorType: 'grammar', type: '词义选择', prompt: 'ego 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ego.q4', senseId: 'ego.s1', errorType: 'meaning', type: '词源', prompt: '记 ego 时，哪句更稳妥？', options: ['先锁住「自我」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自我」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自我'] },
  });

  D('eight', {
    etymology: {
      origin: '现代英语常用词「eight」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eight', gloss: '八' },
      suffix: null,
      history: [
        { label: 'eight', text: '现代英语常用词「eight」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：八。' },
      ],
      formationLogic: '核心义：八。',
      mnemonic: '看到 eight，先说出「八」。',
      note: '核心义：八。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eight.', chinese: '这一章反复回到同一个点：八。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eight.s1', en: 'Without that eight, the next paragraph is hard to follow.', zh: '没有这个八，下一段会很难读。', structure: 'eight / 表示 / 八', grammar: 'number，围绕「八」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eight.', right: 'He gave me some advice about the eight.', reason: 'advice 不可数。名词 eight 的单复数按词典词形记。', rule: '先确定 eight 是number，再套「八」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eight.q1', senseId: 'eight.s1', errorType: 'meaning', type: '词义选择', prompt: '「eight」在本条的核心意思是：', options: ['八', '完全相反的意思', '一种古代钱币'], answer: '八', explain: 'eight：八。' },
      { id: 'eight.q2', senseId: 'eight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eight?', options: ['八', 'a kind of ancient coin', 'the past tense of be'], answer: '八', explain: '对的是「八」。' },
      { id: 'eight.q3', senseId: 'eight.s1', errorType: 'grammar', type: '词义选择', prompt: 'eight 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eight.q4', senseId: 'eight.s1', errorType: 'meaning', type: '词源', prompt: '记 eight 时，哪句更稳妥？', options: ['先锁住「八」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「八」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['八'] },
  });

  D('eighteen', {
    etymology: {
      origin: '现代英语常用词「eighteen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eighteen', gloss: '十八' },
      suffix: null,
      history: [
        { label: 'eighteen', text: '现代英语常用词「eighteen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：十八。' },
      ],
      formationLogic: '核心义：十八。',
      mnemonic: '看到 eighteen，先说出「十八」。',
      note: '核心义：十八。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eighteen.', chinese: '这一章反复回到同一个点：十八。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eighteen.s1', en: 'Without that eighteen, the next paragraph is hard to follow.', zh: '没有这个十八，下一段会很难读。', structure: 'eighteen / 表示 / 十八', grammar: 'number，围绕「十八」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eighteen.', right: 'He gave me some advice about the eighteen.', reason: 'advice 不可数。名词 eighteen 的单复数按词典词形记。', rule: '先确定 eighteen 是number，再套「十八」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eighteen.q1', senseId: 'eighteen.s1', errorType: 'meaning', type: '词义选择', prompt: '「eighteen」在本条的核心意思是：', options: ['十八', '完全相反的意思', '一种古代钱币'], answer: '十八', explain: 'eighteen：十八。' },
      { id: 'eighteen.q2', senseId: 'eighteen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eighteen?', options: ['十八', 'a kind of ancient coin', 'the past tense of be'], answer: '十八', explain: '对的是「十八」。' },
      { id: 'eighteen.q3', senseId: 'eighteen.s1', errorType: 'grammar', type: '词义选择', prompt: 'eighteen 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eighteen.q4', senseId: 'eighteen.s1', errorType: 'meaning', type: '词源', prompt: '记 eighteen 时，哪句更稳妥？', options: ['先锁住「十八」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十八」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十八'] },
  });

  D('eighteenth', {
    etymology: {
      origin: '现代英语常用词「eighteenth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eighteenth', gloss: '第十八' },
      suffix: null,
      history: [
        { label: 'eighteenth', text: '现代英语常用词「eighteenth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第十八。' },
      ],
      formationLogic: '核心义：第十八。',
      mnemonic: '看到 eighteenth，先说出「第十八」。',
      note: '核心义：第十八。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eighteenth.', chinese: '这一章反复回到同一个点：第十八。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eighteenth.s1', en: 'Without that eighteenth, the next paragraph is hard to follow.', zh: '没有这个第十八，下一段会很难读。', structure: 'eighteenth / 表示 / 第十八', grammar: 'number，围绕「第十八」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eighteenth.', right: 'He gave me some advice about the eighteenth.', reason: 'advice 不可数。名词 eighteenth 的单复数按词典词形记。', rule: '先确定 eighteenth 是number，再套「第十八」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eighteenth.q1', senseId: 'eighteenth.s1', errorType: 'meaning', type: '词义选择', prompt: '「eighteenth」在本条的核心意思是：', options: ['第十八', '完全相反的意思', '一种古代钱币'], answer: '第十八', explain: 'eighteenth：第十八。' },
      { id: 'eighteenth.q2', senseId: 'eighteenth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eighteenth?', options: ['第十八', 'a kind of ancient coin', 'the past tense of be'], answer: '第十八', explain: '对的是「第十八」。' },
      { id: 'eighteenth.q3', senseId: 'eighteenth.s1', errorType: 'grammar', type: '词义选择', prompt: 'eighteenth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eighteenth.q4', senseId: 'eighteenth.s1', errorType: 'meaning', type: '词源', prompt: '记 eighteenth 时，哪句更稳妥？', options: ['先锁住「第十八」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第十八」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第十八'] },
  });

  D('eighth', {
    etymology: {
      origin: '现代英语常用词「eighth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eighth', gloss: '第八' },
      suffix: null,
      history: [
        { label: 'eighth', text: '现代英语常用词「eighth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第八。' },
      ],
      formationLogic: '核心义：第八。',
      mnemonic: '看到 eighth，先说出「第八」。',
      note: '核心义：第八。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eighth.', chinese: '这一章反复回到同一个点：第八。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eighth.s1', en: 'Without that eighth, the next paragraph is hard to follow.', zh: '没有这个第八，下一段会很难读。', structure: 'eighth / 表示 / 第八', grammar: 'number，围绕「第八」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eighth.', right: 'He gave me some advice about the eighth.', reason: 'advice 不可数。名词 eighth 的单复数按词典词形记。', rule: '先确定 eighth 是number，再套「第八」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eighth.q1', senseId: 'eighth.s1', errorType: 'meaning', type: '词义选择', prompt: '「eighth」在本条的核心意思是：', options: ['第八', '完全相反的意思', '一种古代钱币'], answer: '第八', explain: 'eighth：第八。' },
      { id: 'eighth.q2', senseId: 'eighth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eighth?', options: ['第八', 'a kind of ancient coin', 'the past tense of be'], answer: '第八', explain: '对的是「第八」。' },
      { id: 'eighth.q3', senseId: 'eighth.s1', errorType: 'grammar', type: '词义选择', prompt: 'eighth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eighth.q4', senseId: 'eighth.s1', errorType: 'meaning', type: '词源', prompt: '记 eighth 时，哪句更稳妥？', options: ['先锁住「第八」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第八」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第八'] },
  });

  D('eighthly', {
    etymology: {
      origin: '英语派生：eighth + -ly，词性转到「第八」。',
      prefix: null,
      root: { text: 'eighth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eighthly', text: '英语派生：eighth + -ly，词性转到「第八」。' },
        { label: '现在', text: '核心用法是：第八。' },
      ],
      formationLogic: '先认词干 eighth，再看词尾。',
      mnemonic: '看到 eighthly，先说出「第八」。',
      note: '先认词干 eighth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule eighthly, and the class followed.', chinese: '她把规则讲清楚了（第八），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eighthly.s1', en: 'He nodded eighthly and returned to the notes.', zh: '他第八地点了点头，又回去看笔记。', structure: 'eighthly / 表示 / 第八', grammar: 'adverb，围绕「第八」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very eighthlyly in the meeting.', right: 'She spoke eighthly in the meeting.', reason: 'eighthly 已经是副词，不要再加 -ly。', rule: '先确定 eighthly 是adverb，再套「第八」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eighthly.q1', senseId: 'eighthly.s1', errorType: 'meaning', type: '词义选择', prompt: '「eighthly」在本条的核心意思是：', options: ['第八', '完全相反的意思', '一种古代钱币'], answer: '第八', explain: 'eighthly：第八。' },
      { id: 'eighthly.q2', senseId: 'eighthly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eighthly?', options: ['第八', 'a kind of ancient coin', 'the past tense of be'], answer: '第八', explain: '对的是「第八」。' },
      { id: 'eighthly.q3', senseId: 'eighthly.s1', errorType: 'grammar', type: '词义选择', prompt: 'eighthly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'eighthly.q4', senseId: 'eighthly.s1', errorType: 'meaning', type: '词源', prompt: '记 eighthly 时，哪句更稳妥？', options: ['先锁住「第八」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第八」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第八'] },
  });

  D('eightieth', {
    etymology: {
      origin: '现代英语常用词「eightieth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eightieth', gloss: '第八十' },
      suffix: null,
      history: [
        { label: 'eightieth', text: '现代英语常用词「eightieth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第八十。' },
      ],
      formationLogic: '核心义：第八十。',
      mnemonic: '看到 eightieth，先说出「第八十」。',
      note: '核心义：第八十。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eightieth.', chinese: '这一章反复回到同一个点：第八十。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eightieth.s1', en: 'Without that eightieth, the next paragraph is hard to follow.', zh: '没有这个第八十，下一段会很难读。', structure: 'eightieth / 表示 / 第八十', grammar: 'number，围绕「第八十」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eightieth.', right: 'He gave me some advice about the eightieth.', reason: 'advice 不可数。名词 eightieth 的单复数按词典词形记。', rule: '先确定 eightieth 是number，再套「第八十」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eightieth.q1', senseId: 'eightieth.s1', errorType: 'meaning', type: '词义选择', prompt: '「eightieth」在本条的核心意思是：', options: ['第八十', '完全相反的意思', '一种古代钱币'], answer: '第八十', explain: 'eightieth：第八十。' },
      { id: 'eightieth.q2', senseId: 'eightieth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eightieth?', options: ['第八十', 'a kind of ancient coin', 'the past tense of be'], answer: '第八十', explain: '对的是「第八十」。' },
      { id: 'eightieth.q3', senseId: 'eightieth.s1', errorType: 'grammar', type: '词义选择', prompt: 'eightieth 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eightieth.q4', senseId: 'eightieth.s1', errorType: 'meaning', type: '词源', prompt: '记 eightieth 时，哪句更稳妥？', options: ['先锁住「第八十」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第八十」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第八十'] },
  });

  D('eighty', {
    etymology: {
      origin: '现代英语常用词「eighty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eighty', gloss: '八十' },
      suffix: null,
      history: [
        { label: 'eighty', text: '现代英语常用词「eighty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：八十。' },
      ],
      formationLogic: '核心义：八十。',
      mnemonic: '看到 eighty，先说出「八十」。',
      note: '核心义：八十。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eighty.', chinese: '这一章反复回到同一个点：八十。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eighty.s1', en: 'Without that eighty, the next paragraph is hard to follow.', zh: '没有这个八十，下一段会很难读。', structure: 'eighty / 表示 / 八十', grammar: 'number，围绕「八十」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eighty.', right: 'He gave me some advice about the eighty.', reason: 'advice 不可数。名词 eighty 的单复数按词典词形记。', rule: '先确定 eighty 是number，再套「八十」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eighty.q1', senseId: 'eighty.s1', errorType: 'meaning', type: '词义选择', prompt: '「eighty」在本条的核心意思是：', options: ['八十', '完全相反的意思', '一种古代钱币'], answer: '八十', explain: 'eighty：八十。' },
      { id: 'eighty.q2', senseId: 'eighty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eighty?', options: ['八十', 'a kind of ancient coin', 'the past tense of be'], answer: '八十', explain: '对的是「八十」。' },
      { id: 'eighty.q3', senseId: 'eighty.s1', errorType: 'grammar', type: '词义选择', prompt: 'eighty 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eighty.q4', senseId: 'eighty.s1', errorType: 'meaning', type: '词源', prompt: '记 eighty 时，哪句更稳妥？', options: ['先锁住「八十」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「八十」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['八十'] },
  });

  D('either', {
    etymology: {
      origin: '英语派生：eith + -er，词性转到「两者之一」。',
      prefix: null,
      root: { text: 'eith', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'either', text: '英语派生：eith + -er，词性转到「两者之一」。' },
        { label: '现在', text: '核心用法是：两者之一。' },
      ],
      formationLogic: '先认词干 eith，再看词尾。',
      mnemonic: '看到 either，先说出「两者之一」。',
      note: '先认词干 eith，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "either" and asked the class to keep it as one unit.', chinese: '老师把「either」圈出来，让全班把它当成一个整体。它表示两者之一。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'either.s1', en: 'In the margin she wrote "either" so nobody would split the phrase.', zh: '她在页边写下「either」，免得有人把这个说法拆开。意思是两者之一。', structure: 'either / 表示 / 两者之一', grammar: 'determiner，围绕「两者之一」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of either and lost the point.', right: 'Keep "either" together: it means 两者之一.', reason: '「either」要整块理解。', rule: '先确定 either 是determiner，再套「两者之一」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'either.q1', senseId: 'either.s1', errorType: 'meaning', type: '词义选择', prompt: '「either」在本条的核心意思是：', options: ['两者之一', '完全相反的意思', '一种古代钱币'], answer: '两者之一', explain: 'either：两者之一。' },
      { id: 'either.q2', senseId: 'either.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches either?', options: ['两者之一', 'a kind of ancient coin', 'the past tense of be'], answer: '两者之一', explain: '对的是「两者之一」。' },
      { id: 'either.q3', senseId: 'either.s1', errorType: 'grammar', type: '词义选择', prompt: 'either 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'either.q4', senseId: 'either.s1', errorType: 'meaning', type: '词源', prompt: '记 either 时，哪句更稳妥？', options: ['先锁住「两者之一」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「两者之一」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['两者之一'] },
  });

  D('eject', {
    etymology: {
      origin: '现代英语常用词「eject」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eject', gloss: '驱逐' },
      suffix: null,
      history: [
        { label: 'eject', text: '现代英语常用词「eject」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：驱逐。' },
      ],
      formationLogic: '核心义：驱逐。',
      mnemonic: '看到 eject，先说出「驱逐」。',
      note: '核心义：驱逐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to eject before the office closed.', chinese: '他们同意在办公室关门前做这件事：驱逐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eject.s1', en: 'The deadline forced the team to eject that afternoon.', zh: '截止日期逼着小组在那天下午驱逐。', structure: 'eject / 表示 / 驱逐', grammar: 'verb，围绕「驱逐」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She ejected it yesterday without checking the real past form.', right: 'Check the past form of "eject" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 eject 是verb，再套「驱逐」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eject.q1', senseId: 'eject.s1', errorType: 'meaning', type: '词义选择', prompt: '「eject」在本条的核心意思是：', options: ['驱逐', '完全相反的意思', '一种古代钱币'], answer: '驱逐', explain: 'eject：驱逐。' },
      { id: 'eject.q2', senseId: 'eject.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eject?', options: ['驱逐', 'a kind of ancient coin', 'the past tense of be'], answer: '驱逐', explain: '对的是「驱逐」。' },
      { id: 'eject.q3', senseId: 'eject.s1', errorType: 'grammar', type: '词义选择', prompt: 'eject 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eject.q4', senseId: 'eject.s1', errorType: 'meaning', type: '词源', prompt: '记 eject 时，哪句更稳妥？', options: ['先锁住「驱逐」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驱逐」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驱逐'] },
  });

  D('elaborate', {
    etymology: {
      origin: '现代英语常用词「elaborate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elaborate', gloss: '精心制作的' },
      suffix: null,
      history: [
        { label: 'elaborate', text: '现代英语常用词「elaborate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：精心制作的。' },
      ],
      formationLogic: '核心义：精心制作的。',
      mnemonic: '看到 elaborate，先说出「精心制作的」。',
      note: '核心义：精心制作的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elaborate.', chinese: '即使是初读者也能看出，这个结果是精心制作的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elaborate.s1', en: 'They wanted a elaborate answer, not a long speech.', zh: '他们要一个精心制作的的答复，不要长篇发言。', structure: 'elaborate / 表示 / 精心制作的', grammar: 'adjective，围绕「精心制作的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elaborate.', right: 'The news is elaborate.', reason: 'news 作主语时动词用单数。', rule: '先确定 elaborate 是adjective，再套「精心制作的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elaborate.q1', senseId: 'elaborate.s1', errorType: 'meaning', type: '词义选择', prompt: '「elaborate」在本条的核心意思是：', options: ['精心制作的', '完全相反的意思', '一种古代钱币'], answer: '精心制作的', explain: 'elaborate：精心制作的。' },
      { id: 'elaborate.q2', senseId: 'elaborate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elaborate?', options: ['精心制作的', 'a kind of ancient coin', 'the past tense of be'], answer: '精心制作的', explain: '对的是「精心制作的」。' },
      { id: 'elaborate.q3', senseId: 'elaborate.s1', errorType: 'grammar', type: '词义选择', prompt: 'elaborate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elaborate.q4', senseId: 'elaborate.s1', errorType: 'meaning', type: '词源', prompt: '记 elaborate 时，哪句更稳妥？', options: ['先锁住「精心制作的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精心制作的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精心制作的'] },
  });

  D('elapse', {
    etymology: {
      origin: '现代英语常用词「elapse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elapse', gloss: '（时间）流逝' },
      suffix: null,
      history: [
        { label: 'elapse', text: '现代英语常用词「elapse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（时间）流逝。' },
      ],
      formationLogic: '核心义：（时间）流逝。',
      mnemonic: '看到 elapse，先说出「（时间）流逝」。',
      note: '核心义：（时间）流逝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to elapse before the office closed.', chinese: '他们同意在办公室关门前做这件事：（时间）流逝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elapse.s1', en: 'The deadline forced the team to elapse that afternoon.', zh: '截止日期逼着小组在那天下午（时间）流逝。', structure: 'elapse / 表示 / （时间）流逝', grammar: 'verb，围绕「（时间）流逝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She elapseed it yesterday without checking the real past form.', right: 'Check the past form of "elapse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 elapse 是verb，再套「（时间）流逝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elapse.q1', senseId: 'elapse.s1', errorType: 'meaning', type: '词义选择', prompt: '「elapse」在本条的核心意思是：', options: ['（时间）流逝', '完全相反的意思', '一种古代钱币'], answer: '（时间）流逝', explain: 'elapse：（时间）流逝。' },
      { id: 'elapse.q2', senseId: 'elapse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elapse?', options: ['（时间）流逝', 'a kind of ancient coin', 'the past tense of be'], answer: '（时间）流逝', explain: '对的是「（时间）流逝」。' },
      { id: 'elapse.q3', senseId: 'elapse.s1', errorType: 'grammar', type: '词义选择', prompt: 'elapse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'elapse.q4', senseId: 'elapse.s1', errorType: 'meaning', type: '词源', prompt: '记 elapse 时，哪句更稳妥？', options: ['先锁住「（时间）流逝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（时间）流逝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（时间）流逝'] },
  });

  D('elastic', {
    etymology: {
      origin: '英语派生：elast + -ic，词性转到「有弹性的」。',
      prefix: null,
      root: { text: 'elast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elastic', text: '英语派生：elast + -ic，词性转到「有弹性的」。' },
        { label: '现在', text: '核心用法是：有弹性的。' },
      ],
      formationLogic: '先认词干 elast，再看词尾。',
      mnemonic: '看到 elastic，先说出「有弹性的」。',
      note: '先认词干 elast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elastic.', chinese: '即使是初读者也能看出，这个结果是有弹性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elastic.s1', en: 'They wanted a elastic answer, not a long speech.', zh: '他们要一个有弹性的的答复，不要长篇发言。', structure: 'elastic / 表示 / 有弹性的', grammar: 'adjective，围绕「有弹性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elastic.', right: 'The news is elastic.', reason: 'news 作主语时动词用单数。', rule: '先确定 elastic 是adjective，再套「有弹性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elastic.q1', senseId: 'elastic.s1', errorType: 'meaning', type: '词义选择', prompt: '「elastic」在本条的核心意思是：', options: ['有弹性的', '完全相反的意思', '一种古代钱币'], answer: '有弹性的', explain: 'elastic：有弹性的。' },
      { id: 'elastic.q2', senseId: 'elastic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elastic?', options: ['有弹性的', 'a kind of ancient coin', 'the past tense of be'], answer: '有弹性的', explain: '对的是「有弹性的」。' },
      { id: 'elastic.q3', senseId: 'elastic.s1', errorType: 'grammar', type: '词义选择', prompt: 'elastic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elastic.q4', senseId: 'elastic.s1', errorType: 'meaning', type: '词源', prompt: '记 elastic 时，哪句更稳妥？', options: ['先锁住「有弹性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有弹性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有弹性的'] },
  });

  D('elasticity', {
    etymology: {
      origin: '英语派生：elastic + -ity，词性转到「弹性」。',
      prefix: null,
      root: { text: 'elastic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elasticity', text: '英语派生：elastic + -ity，词性转到「弹性」。' },
        { label: '现在', text: '核心用法是：弹性。' },
      ],
      formationLogic: '先认词干 elastic，再看词尾。',
      mnemonic: '看到 elasticity，先说出「弹性」。',
      note: '先认词干 elastic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elasticity.', chinese: '这一章反复回到同一个点：弹性。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elasticity.s1', en: 'Without that elasticity, the next paragraph is hard to follow.', zh: '没有这个弹性，下一段会很难读。', structure: 'elasticity / 表示 / 弹性', grammar: 'noun，围绕「弹性」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elasticity.', right: 'He gave me some advice about the elasticity.', reason: 'advice 不可数。名词 elasticity 的单复数按词典词形记。', rule: '先确定 elasticity 是noun，再套「弹性」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elasticity.q1', senseId: 'elasticity.s1', errorType: 'meaning', type: '词义选择', prompt: '「elasticity」在本条的核心意思是：', options: ['弹性', '完全相反的意思', '一种古代钱币'], answer: '弹性', explain: 'elasticity：弹性。' },
      { id: 'elasticity.q2', senseId: 'elasticity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elasticity?', options: ['弹性', 'a kind of ancient coin', 'the past tense of be'], answer: '弹性', explain: '对的是「弹性」。' },
      { id: 'elasticity.q3', senseId: 'elasticity.s1', errorType: 'grammar', type: '词义选择', prompt: 'elasticity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elasticity.q4', senseId: 'elasticity.s1', errorType: 'meaning', type: '词源', prompt: '记 elasticity 时，哪句更稳妥？', options: ['先锁住「弹性」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「弹性」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['弹性'] },
  });

  D('elbow', {
    etymology: {
      origin: '现代英语常用词「elbow」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elbow', gloss: '肘' },
      suffix: null,
      history: [
        { label: 'elbow', text: '现代英语常用词「elbow」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肘。' },
      ],
      formationLogic: '核心义：肘。',
      mnemonic: '看到 elbow，先说出「肘」。',
      note: '核心义：肘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elbow.', chinese: '这一章反复回到同一个点：肘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elbow.s1', en: 'Without that elbow, the next paragraph is hard to follow.', zh: '没有这个肘，下一段会很难读。', structure: 'elbow / 表示 / 肘', grammar: 'noun，围绕「肘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elbow.', right: 'He gave me some advice about the elbow.', reason: 'advice 不可数。名词 elbow 的单复数按词典词形记。', rule: '先确定 elbow 是noun，再套「肘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elbow.q1', senseId: 'elbow.s1', errorType: 'meaning', type: '词义选择', prompt: '「elbow」在本条的核心意思是：', options: ['肘', '完全相反的意思', '一种古代钱币'], answer: '肘', explain: 'elbow：肘。' },
      { id: 'elbow.q2', senseId: 'elbow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elbow?', options: ['肘', 'a kind of ancient coin', 'the past tense of be'], answer: '肘', explain: '对的是「肘」。' },
      { id: 'elbow.q3', senseId: 'elbow.s1', errorType: 'grammar', type: '词义选择', prompt: 'elbow 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elbow.q4', senseId: 'elbow.s1', errorType: 'meaning', type: '词源', prompt: '记 elbow 时，哪句更稳妥？', options: ['先锁住「肘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肘'] },
  });

  D('elder', {
    etymology: {
      origin: '英语派生：eld + -er，词性转到「年长的」。',
      prefix: null,
      root: { text: 'eld', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elder', text: '英语派生：eld + -er，词性转到「年长的」。' },
        { label: '现在', text: '核心用法是：年长的。' },
      ],
      formationLogic: '先认词干 eld，再看词尾。',
      mnemonic: '看到 elder，先说出「年长的」。',
      note: '先认词干 eld，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elder.', chinese: '即使是初读者也能看出，这个结果是年长的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elder.s1', en: 'They wanted a elder answer, not a long speech.', zh: '他们要一个年长的的答复，不要长篇发言。', structure: 'elder / 表示 / 年长的', grammar: 'adjective，围绕「年长的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elder.', right: 'The news is elder.', reason: 'news 作主语时动词用单数。', rule: '先确定 elder 是adjective，再套「年长的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elder.q1', senseId: 'elder.s1', errorType: 'meaning', type: '词义选择', prompt: '「elder」在本条的核心意思是：', options: ['年长的', '完全相反的意思', '一种古代钱币'], answer: '年长的', explain: 'elder：年长的。' },
      { id: 'elder.q2', senseId: 'elder.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elder?', options: ['年长的', 'a kind of ancient coin', 'the past tense of be'], answer: '年长的', explain: '对的是「年长的」。' },
      { id: 'elder.q3', senseId: 'elder.s1', errorType: 'grammar', type: '词义选择', prompt: 'elder 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elder.q4', senseId: 'elder.s1', errorType: 'meaning', type: '词源', prompt: '记 elder 时，哪句更稳妥？', options: ['先锁住「年长的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「年长的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['年长的'] },
  });

  D('elderly', {
    etymology: {
      origin: '英语派生：elder + -ly，词性转到「上了年纪的」。',
      prefix: null,
      root: { text: 'elder', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elderly', text: '英语派生：elder + -ly，词性转到「上了年纪的」。' },
        { label: '现在', text: '核心用法是：上了年纪的。' },
      ],
      formationLogic: '先认词干 elder，再看词尾。',
      mnemonic: '看到 elderly，先说出「上了年纪的」。',
      note: '先认词干 elder，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elderly.', chinese: '即使是初读者也能看出，这个结果是上了年纪的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elderly.s1', en: 'They wanted a elderly answer, not a long speech.', zh: '他们要一个上了年纪的的答复，不要长篇发言。', structure: 'elderly / 表示 / 上了年纪的', grammar: 'adjective，围绕「上了年纪的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elderly.', right: 'The news is elderly.', reason: 'news 作主语时动词用单数。', rule: '先确定 elderly 是adjective，再套「上了年纪的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elderly.q1', senseId: 'elderly.s1', errorType: 'meaning', type: '词义选择', prompt: '「elderly」在本条的核心意思是：', options: ['上了年纪的', '完全相反的意思', '一种古代钱币'], answer: '上了年纪的', explain: 'elderly：上了年纪的。' },
      { id: 'elderly.q2', senseId: 'elderly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elderly?', options: ['上了年纪的', 'a kind of ancient coin', 'the past tense of be'], answer: '上了年纪的', explain: '对的是「上了年纪的」。' },
      { id: 'elderly.q3', senseId: 'elderly.s1', errorType: 'grammar', type: '词义选择', prompt: 'elderly 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elderly.q4', senseId: 'elderly.s1', errorType: 'meaning', type: '词源', prompt: '记 elderly 时，哪句更稳妥？', options: ['先锁住「上了年纪的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「上了年纪的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上了年纪的'] },
  });

  D('elect', {
    etymology: {
      origin: '现代英语常用词「elect」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elect', gloss: '选举' },
      suffix: null,
      history: [
        { label: 'elect', text: '现代英语常用词「elect」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：选举。' },
      ],
      formationLogic: '核心义：选举。',
      mnemonic: '看到 elect，先说出「选举」。',
      note: '核心义：选举。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to elect before the office closed.', chinese: '他们同意在办公室关门前做这件事：选举。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elect.s1', en: 'The deadline forced the team to elect that afternoon.', zh: '截止日期逼着小组在那天下午选举。', structure: 'elect / 表示 / 选举', grammar: 'verb，围绕「选举」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She elected it yesterday without checking the real past form.', right: 'Check the past form of "elect" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 elect 是verb，再套「选举」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elect.q1', senseId: 'elect.s1', errorType: 'meaning', type: '词义选择', prompt: '「elect」在本条的核心意思是：', options: ['选举', '完全相反的意思', '一种古代钱币'], answer: '选举', explain: 'elect：选举。' },
      { id: 'elect.q2', senseId: 'elect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elect?', options: ['选举', 'a kind of ancient coin', 'the past tense of be'], answer: '选举', explain: '对的是「选举」。' },
      { id: 'elect.q3', senseId: 'elect.s1', errorType: 'grammar', type: '词义选择', prompt: 'elect 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'elect.q4', senseId: 'elect.s1', errorType: 'meaning', type: '词源', prompt: '记 elect 时，哪句更稳妥？', options: ['先锁住「选举」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「选举」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['选举'] },
  });

  D('electoral', {
    etymology: {
      origin: '英语派生：elector + -al，词性转到「选举的」。',
      prefix: null,
      root: { text: 'elector', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'electoral', text: '英语派生：elector + -al，词性转到「选举的」。' },
        { label: '现在', text: '核心用法是：选举的。' },
      ],
      formationLogic: '先认词干 elector，再看词尾。',
      mnemonic: '看到 electoral，先说出「选举的」。',
      note: '先认词干 elector，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was electoral.', chinese: '即使是初读者也能看出，这个结果是选举的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'electoral.s1', en: 'They wanted a electoral answer, not a long speech.', zh: '他们要一个选举的的答复，不要长篇发言。', structure: 'electoral / 表示 / 选举的', grammar: 'adjective，围绕「选举的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are electoral.', right: 'The news is electoral.', reason: 'news 作主语时动词用单数。', rule: '先确定 electoral 是adjective，再套「选举的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'electoral.q1', senseId: 'electoral.s1', errorType: 'meaning', type: '词义选择', prompt: '「electoral」在本条的核心意思是：', options: ['选举的', '完全相反的意思', '一种古代钱币'], answer: '选举的', explain: 'electoral：选举的。' },
      { id: 'electoral.q2', senseId: 'electoral.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches electoral?', options: ['选举的', 'a kind of ancient coin', 'the past tense of be'], answer: '选举的', explain: '对的是「选举的」。' },
      { id: 'electoral.q3', senseId: 'electoral.s1', errorType: 'grammar', type: '词义选择', prompt: 'electoral 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'electoral.q4', senseId: 'electoral.s1', errorType: 'meaning', type: '词源', prompt: '记 electoral 时，哪句更稳妥？', options: ['先锁住「选举的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「选举的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['选举的'] },
  });

  D('electricity', {
    etymology: {
      origin: '英语派生：electric + -ity，词性转到「电」。',
      prefix: null,
      root: { text: 'electric', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'electricity', text: '英语派生：electric + -ity，词性转到「电」。' },
        { label: '现在', text: '核心用法是：电。' },
      ],
      formationLogic: '先认词干 electric，再看词尾。',
      mnemonic: '看到 electricity，先说出「电」。',
      note: '先认词干 electric，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one electricity.', chinese: '这一章反复回到同一个点：电。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'electricity.s1', en: 'Without that electricity, the next paragraph is hard to follow.', zh: '没有这个电，下一段会很难读。', structure: 'electricity / 表示 / 电', grammar: 'noun，围绕「电」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the electricity.', right: 'He gave me some advice about the electricity.', reason: 'advice 不可数。名词 electricity 的单复数按词典词形记。', rule: '先确定 electricity 是noun，再套「电」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'electricity.q1', senseId: 'electricity.s1', errorType: 'meaning', type: '词义选择', prompt: '「electricity」在本条的核心意思是：', options: ['电', '完全相反的意思', '一种古代钱币'], answer: '电', explain: 'electricity：电。' },
      { id: 'electricity.q2', senseId: 'electricity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches electricity?', options: ['电', 'a kind of ancient coin', 'the past tense of be'], answer: '电', explain: '对的是「电」。' },
      { id: 'electricity.q3', senseId: 'electricity.s1', errorType: 'grammar', type: '词义选择', prompt: 'electricity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'electricity.q4', senseId: 'electricity.s1', errorType: 'meaning', type: '词源', prompt: '记 electricity 时，哪句更稳妥？', options: ['先锁住「电」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电'] },
  });

  D('electron', {
    etymology: {
      origin: '现代英语常用词「electron」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'electron', gloss: '电子' },
      suffix: null,
      history: [
        { label: 'electron', text: '现代英语常用词「electron」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：电子。' },
      ],
      formationLogic: '核心义：电子。',
      mnemonic: '看到 electron，先说出「电子」。',
      note: '核心义：电子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one electron.', chinese: '这一章反复回到同一个点：电子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'electron.s1', en: 'Without that electron, the next paragraph is hard to follow.', zh: '没有这个电子，下一段会很难读。', structure: 'electron / 表示 / 电子', grammar: 'noun，围绕「电子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the electron.', right: 'He gave me some advice about the electron.', reason: 'advice 不可数。名词 electron 的单复数按词典词形记。', rule: '先确定 electron 是noun，再套「电子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'electron.q1', senseId: 'electron.s1', errorType: 'meaning', type: '词义选择', prompt: '「electron」在本条的核心意思是：', options: ['电子', '完全相反的意思', '一种古代钱币'], answer: '电子', explain: 'electron：电子。' },
      { id: 'electron.q2', senseId: 'electron.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches electron?', options: ['电子', 'a kind of ancient coin', 'the past tense of be'], answer: '电子', explain: '对的是「电子」。' },
      { id: 'electron.q3', senseId: 'electron.s1', errorType: 'grammar', type: '词义选择', prompt: 'electron 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'electron.q4', senseId: 'electron.s1', errorType: 'meaning', type: '词源', prompt: '记 electron 时，哪句更稳妥？', options: ['先锁住「电子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电子'] },
  });

  D('elegance', {
    etymology: {
      origin: '英语派生：eleg + -ance，词性转到「优雅」。',
      prefix: null,
      root: { text: 'eleg', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elegance', text: '英语派生：eleg + -ance，词性转到「优雅」。' },
        { label: '现在', text: '核心用法是：优雅。' },
      ],
      formationLogic: '先认词干 eleg，再看词尾。',
      mnemonic: '看到 elegance，先说出「优雅」。',
      note: '先认词干 eleg，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elegance.', chinese: '这一章反复回到同一个点：优雅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elegance.s1', en: 'Without that elegance, the next paragraph is hard to follow.', zh: '没有这个优雅，下一段会很难读。', structure: 'elegance / 表示 / 优雅', grammar: 'noun，围绕「优雅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elegance.', right: 'He gave me some advice about the elegance.', reason: 'advice 不可数。名词 elegance 的单复数按词典词形记。', rule: '先确定 elegance 是noun，再套「优雅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elegance.q1', senseId: 'elegance.s1', errorType: 'meaning', type: '词义选择', prompt: '「elegance」在本条的核心意思是：', options: ['优雅', '完全相反的意思', '一种古代钱币'], answer: '优雅', explain: 'elegance：优雅。' },
      { id: 'elegance.q2', senseId: 'elegance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elegance?', options: ['优雅', 'a kind of ancient coin', 'the past tense of be'], answer: '优雅', explain: '对的是「优雅」。' },
      { id: 'elegance.q3', senseId: 'elegance.s1', errorType: 'grammar', type: '词义选择', prompt: 'elegance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elegance.q4', senseId: 'elegance.s1', errorType: 'meaning', type: '词源', prompt: '记 elegance 时，哪句更稳妥？', options: ['先锁住「优雅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「优雅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['优雅'] },
  });

  D('elegant', {
    etymology: {
      origin: '现代英语常用词「elegant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elegant', gloss: '优雅的' },
      suffix: null,
      history: [
        { label: 'elegant', text: '现代英语常用词「elegant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：优雅的。' },
      ],
      formationLogic: '核心义：优雅的。',
      mnemonic: '看到 elegant，先说出「优雅的」。',
      note: '核心义：优雅的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elegant.', chinese: '即使是初读者也能看出，这个结果是优雅的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elegant.s1', en: 'They wanted a elegant answer, not a long speech.', zh: '他们要一个优雅的的答复，不要长篇发言。', structure: 'elegant / 表示 / 优雅的', grammar: 'adjective，围绕「优雅的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elegant.', right: 'The news is elegant.', reason: 'news 作主语时动词用单数。', rule: '先确定 elegant 是adjective，再套「优雅的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elegant.q1', senseId: 'elegant.s1', errorType: 'meaning', type: '词义选择', prompt: '「elegant」在本条的核心意思是：', options: ['优雅的', '完全相反的意思', '一种古代钱币'], answer: '优雅的', explain: 'elegant：优雅的。' },
      { id: 'elegant.q2', senseId: 'elegant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elegant?', options: ['优雅的', 'a kind of ancient coin', 'the past tense of be'], answer: '优雅的', explain: '对的是「优雅的」。' },
      { id: 'elegant.q3', senseId: 'elegant.s1', errorType: 'grammar', type: '词义选择', prompt: 'elegant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elegant.q4', senseId: 'elegant.s1', errorType: 'meaning', type: '词源', prompt: '记 elegant 时，哪句更稳妥？', options: ['先锁住「优雅的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「优雅的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['优雅的'] },
  });

  D('element', {
    etymology: {
      origin: '英语派生：ele + -ment，词性转到「要素」。',
      prefix: null,
      root: { text: 'ele', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'element', text: '英语派生：ele + -ment，词性转到「要素」。' },
        { label: '现在', text: '核心用法是：要素。' },
      ],
      formationLogic: '先认词干 ele，再看词尾。',
      mnemonic: '看到 element，先说出「要素」。',
      note: '先认词干 ele，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one element.', chinese: '这一章反复回到同一个点：要素。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'element.s1', en: 'Without that element, the next paragraph is hard to follow.', zh: '没有这个要素，下一段会很难读。', structure: 'element / 表示 / 要素', grammar: 'noun，围绕「要素」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the element.', right: 'He gave me some advice about the element.', reason: 'advice 不可数。名词 element 的单复数按词典词形记。', rule: '先确定 element 是noun，再套「要素」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'element.q1', senseId: 'element.s1', errorType: 'meaning', type: '词义选择', prompt: '「element」在本条的核心意思是：', options: ['要素', '完全相反的意思', '一种古代钱币'], answer: '要素', explain: 'element：要素。' },
      { id: 'element.q2', senseId: 'element.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches element?', options: ['要素', 'a kind of ancient coin', 'the past tense of be'], answer: '要素', explain: '对的是「要素」。' },
      { id: 'element.q3', senseId: 'element.s1', errorType: 'grammar', type: '词义选择', prompt: 'element 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'element.q4', senseId: 'element.s1', errorType: 'meaning', type: '词源', prompt: '记 element 时，哪句更稳妥？', options: ['先锁住「要素」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「要素」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['要素'] },
  });

  D('elementary', {
    etymology: {
      origin: '现代英语常用词「elementary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elementary', gloss: '基本的' },
      suffix: null,
      history: [
        { label: 'elementary', text: '现代英语常用词「elementary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：基本的。' },
      ],
      formationLogic: '核心义：基本的。',
      mnemonic: '看到 elementary，先说出「基本的」。',
      note: '核心义：基本的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elementary.', chinese: '即使是初读者也能看出，这个结果是基本的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elementary.s1', en: 'They wanted a elementary answer, not a long speech.', zh: '他们要一个基本的的答复，不要长篇发言。', structure: 'elementary / 表示 / 基本的', grammar: 'adjective，围绕「基本的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elementary.', right: 'The news is elementary.', reason: 'news 作主语时动词用单数。', rule: '先确定 elementary 是adjective，再套「基本的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elementary.q1', senseId: 'elementary.s1', errorType: 'meaning', type: '词义选择', prompt: '「elementary」在本条的核心意思是：', options: ['基本的', '完全相反的意思', '一种古代钱币'], answer: '基本的', explain: 'elementary：基本的。' },
      { id: 'elementary.q2', senseId: 'elementary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elementary?', options: ['基本的', 'a kind of ancient coin', 'the past tense of be'], answer: '基本的', explain: '对的是「基本的」。' },
      { id: 'elementary.q3', senseId: 'elementary.s1', errorType: 'grammar', type: '词义选择', prompt: 'elementary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elementary.q4', senseId: 'elementary.s1', errorType: 'meaning', type: '词源', prompt: '记 elementary 时，哪句更稳妥？', options: ['先锁住「基本的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「基本的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['基本的'] },
  });

  D('elephant', {
    etymology: {
      origin: '现代英语常用词「elephant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elephant', gloss: '象' },
      suffix: null,
      history: [
        { label: 'elephant', text: '现代英语常用词「elephant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：象。' },
      ],
      formationLogic: '核心义：象。',
      mnemonic: '看到 elephant，先说出「象」。',
      note: '核心义：象。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elephant.', chinese: '这一章反复回到同一个点：象。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elephant.s1', en: 'Without that elephant, the next paragraph is hard to follow.', zh: '没有这个象，下一段会很难读。', structure: 'elephant / 表示 / 象', grammar: 'noun，围绕「象」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elephant.', right: 'He gave me some advice about the elephant.', reason: 'advice 不可数。名词 elephant 的单复数按词典词形记。', rule: '先确定 elephant 是noun，再套「象」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elephant.q1', senseId: 'elephant.s1', errorType: 'meaning', type: '词义选择', prompt: '「elephant」在本条的核心意思是：', options: ['象', '完全相反的意思', '一种古代钱币'], answer: '象', explain: 'elephant：象。' },
      { id: 'elephant.q2', senseId: 'elephant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elephant?', options: ['象', 'a kind of ancient coin', 'the past tense of be'], answer: '象', explain: '对的是「象」。' },
      { id: 'elephant.q3', senseId: 'elephant.s1', errorType: 'grammar', type: '词义选择', prompt: 'elephant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elephant.q4', senseId: 'elephant.s1', errorType: 'meaning', type: '词源', prompt: '记 elephant 时，哪句更稳妥？', options: ['先锁住「象」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「象」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['象'] },
  });

  D('elevate', {
    etymology: {
      origin: '现代英语常用词「elevate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elevate', gloss: '提升' },
      suffix: null,
      history: [
        { label: 'elevate', text: '现代英语常用词「elevate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：提升。' },
      ],
      formationLogic: '核心义：提升。',
      mnemonic: '看到 elevate，先说出「提升」。',
      note: '核心义：提升。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to elevate before the office closed.', chinese: '他们同意在办公室关门前做这件事：提升。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elevate.s1', en: 'The deadline forced the team to elevate that afternoon.', zh: '截止日期逼着小组在那天下午提升。', structure: 'elevate / 表示 / 提升', grammar: 'verb，围绕「提升」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She elevateed it yesterday without checking the real past form.', right: 'Check the past form of "elevate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 elevate 是verb，再套「提升」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elevate.q1', senseId: 'elevate.s1', errorType: 'meaning', type: '词义选择', prompt: '「elevate」在本条的核心意思是：', options: ['提升', '完全相反的意思', '一种古代钱币'], answer: '提升', explain: 'elevate：提升。' },
      { id: 'elevate.q2', senseId: 'elevate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elevate?', options: ['提升', 'a kind of ancient coin', 'the past tense of be'], answer: '提升', explain: '对的是「提升」。' },
      { id: 'elevate.q3', senseId: 'elevate.s1', errorType: 'grammar', type: '词义选择', prompt: 'elevate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'elevate.q4', senseId: 'elevate.s1', errorType: 'meaning', type: '词源', prompt: '记 elevate 时，哪句更稳妥？', options: ['先锁住「提升」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「提升」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['提升'] },
  });

  D('elevated', {
    etymology: {
      origin: '现代英语常用词「elevated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elevated', gloss: '升高的' },
      suffix: null,
      history: [
        { label: 'elevated', text: '现代英语常用词「elevated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：升高的。' },
      ],
      formationLogic: '核心义：升高的。',
      mnemonic: '看到 elevated，先说出「升高的」。',
      note: '核心义：升高的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elevated.', chinese: '即使是初读者也能看出，这个结果是升高的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elevated.s1', en: 'They wanted a elevated answer, not a long speech.', zh: '他们要一个升高的的答复，不要长篇发言。', structure: 'elevated / 表示 / 升高的', grammar: 'adjective，围绕「升高的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elevated.', right: 'The news is elevated.', reason: 'news 作主语时动词用单数。', rule: '先确定 elevated 是adjective，再套「升高的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elevated.q1', senseId: 'elevated.s1', errorType: 'meaning', type: '词义选择', prompt: '「elevated」在本条的核心意思是：', options: ['升高的', '完全相反的意思', '一种古代钱币'], answer: '升高的', explain: 'elevated：升高的。' },
      { id: 'elevated.q2', senseId: 'elevated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elevated?', options: ['升高的', 'a kind of ancient coin', 'the past tense of be'], answer: '升高的', explain: '对的是「升高的」。' },
      { id: 'elevated.q3', senseId: 'elevated.s1', errorType: 'grammar', type: '词义选择', prompt: 'elevated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elevated.q4', senseId: 'elevated.s1', errorType: 'meaning', type: '词源', prompt: '记 elevated 时，哪句更稳妥？', options: ['先锁住「升高的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「升高的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['升高的'] },
  });

  D('elevator', {
    etymology: {
      origin: '英语派生：elevat + -or，词性转到「电梯」。',
      prefix: null,
      root: { text: 'elevat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elevator', text: '英语派生：elevat + -or，词性转到「电梯」。' },
        { label: '现在', text: '核心用法是：电梯。' },
      ],
      formationLogic: '先认词干 elevat，再看词尾。',
      mnemonic: '看到 elevator，先说出「电梯」。',
      note: '先认词干 elevat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elevator.', chinese: '这一章反复回到同一个点：电梯。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elevator.s1', en: 'Without that elevator, the next paragraph is hard to follow.', zh: '没有这个电梯，下一段会很难读。', structure: 'elevator / 表示 / 电梯', grammar: 'noun，围绕「电梯」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elevator.', right: 'He gave me some advice about the elevator.', reason: 'advice 不可数。名词 elevator 的单复数按词典词形记。', rule: '先确定 elevator 是noun，再套「电梯」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elevator.q1', senseId: 'elevator.s1', errorType: 'meaning', type: '词义选择', prompt: '「elevator」在本条的核心意思是：', options: ['电梯', '完全相反的意思', '一种古代钱币'], answer: '电梯', explain: 'elevator：电梯。' },
      { id: 'elevator.q2', senseId: 'elevator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elevator?', options: ['电梯', 'a kind of ancient coin', 'the past tense of be'], answer: '电梯', explain: '对的是「电梯」。' },
      { id: 'elevator.q3', senseId: 'elevator.s1', errorType: 'grammar', type: '词义选择', prompt: 'elevator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elevator.q4', senseId: 'elevator.s1', errorType: 'meaning', type: '词源', prompt: '记 elevator 时，哪句更稳妥？', options: ['先锁住「电梯」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电梯」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电梯'] },
  });

  D('eleven', {
    etymology: {
      origin: '现代英语常用词「eleven」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eleven', gloss: '十一' },
      suffix: null,
      history: [
        { label: 'eleven', text: '现代英语常用词「eleven」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：十一。' },
      ],
      formationLogic: '核心义：十一。',
      mnemonic: '看到 eleven，先说出「十一」。',
      note: '核心义：十一。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eleven.', chinese: '这一章反复回到同一个点：十一。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eleven.s1', en: 'Without that eleven, the next paragraph is hard to follow.', zh: '没有这个十一，下一段会很难读。', structure: 'eleven / 表示 / 十一', grammar: 'number，围绕「十一」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eleven.', right: 'He gave me some advice about the eleven.', reason: 'advice 不可数。名词 eleven 的单复数按词典词形记。', rule: '先确定 eleven 是number，再套「十一」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eleven.q1', senseId: 'eleven.s1', errorType: 'meaning', type: '词义选择', prompt: '「eleven」在本条的核心意思是：', options: ['十一', '完全相反的意思', '一种古代钱币'], answer: '十一', explain: 'eleven：十一。' },
      { id: 'eleven.q2', senseId: 'eleven.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eleven?', options: ['十一', 'a kind of ancient coin', 'the past tense of be'], answer: '十一', explain: '对的是「十一」。' },
      { id: 'eleven.q3', senseId: 'eleven.s1', errorType: 'grammar', type: '词义选择', prompt: 'eleven 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eleven.q4', senseId: 'eleven.s1', errorType: 'meaning', type: '词源', prompt: '记 eleven 时，哪句更稳妥？', options: ['先锁住「十一」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「十一」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['十一'] },
  });

  D('eleventh', {
    etymology: {
      origin: '现代英语常用词「eleventh」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eleventh', gloss: '第十一' },
      suffix: null,
      history: [
        { label: 'eleventh', text: '现代英语常用词「eleventh」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：第十一。' },
      ],
      formationLogic: '核心义：第十一。',
      mnemonic: '看到 eleventh，先说出「第十一」。',
      note: '核心义：第十一。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eleventh.', chinese: '这一章反复回到同一个点：第十一。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eleventh.s1', en: 'Without that eleventh, the next paragraph is hard to follow.', zh: '没有这个第十一，下一段会很难读。', structure: 'eleventh / 表示 / 第十一', grammar: 'number，围绕「第十一」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eleventh.', right: 'He gave me some advice about the eleventh.', reason: 'advice 不可数。名词 eleventh 的单复数按词典词形记。', rule: '先确定 eleventh 是number，再套「第十一」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eleventh.q1', senseId: 'eleventh.s1', errorType: 'meaning', type: '词义选择', prompt: '「eleventh」在本条的核心意思是：', options: ['第十一', '完全相反的意思', '一种古代钱币'], answer: '第十一', explain: 'eleventh：第十一。' },
      { id: 'eleventh.q2', senseId: 'eleventh.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eleventh?', options: ['第十一', 'a kind of ancient coin', 'the past tense of be'], answer: '第十一', explain: '对的是「第十一」。' },
      { id: 'eleventh.q3', senseId: 'eleventh.s1', errorType: 'grammar', type: '词义选择', prompt: 'eleventh 的词性（本条）更接近：', options: ['number', '只能作感叹词', '只能作数词'], answer: 'number', explain: '本条按 number 来用。' },
      { id: 'eleventh.q4', senseId: 'eleventh.s1', errorType: 'meaning', type: '词源', prompt: '记 eleventh 时，哪句更稳妥？', options: ['先锁住「第十一」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「第十一」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['第十一'] },
  });

  D('elf', {
    etymology: {
      origin: '现代英语常用词「elf」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elf', gloss: '小精灵' },
      suffix: null,
      history: [
        { label: 'elf', text: '现代英语常用词「elf」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小精灵。' },
      ],
      formationLogic: '核心义：小精灵。',
      mnemonic: '看到 elf，先说出「小精灵」。',
      note: '核心义：小精灵。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elf.', chinese: '这一章反复回到同一个点：小精灵。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elf.s1', en: 'Without that elf, the next paragraph is hard to follow.', zh: '没有这个小精灵，下一段会很难读。', structure: 'elf / 表示 / 小精灵', grammar: 'noun，围绕「小精灵」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elf.', right: 'He gave me some advice about the elf.', reason: 'advice 不可数。名词 elf 的单复数按词典词形记。', rule: '先确定 elf 是noun，再套「小精灵」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elf.q1', senseId: 'elf.s1', errorType: 'meaning', type: '词义选择', prompt: '「elf」在本条的核心意思是：', options: ['小精灵', '完全相反的意思', '一种古代钱币'], answer: '小精灵', explain: 'elf：小精灵。' },
      { id: 'elf.q2', senseId: 'elf.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elf?', options: ['小精灵', 'a kind of ancient coin', 'the past tense of be'], answer: '小精灵', explain: '对的是「小精灵」。' },
      { id: 'elf.q3', senseId: 'elf.s1', errorType: 'grammar', type: '词义选择', prompt: 'elf 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elf.q4', senseId: 'elf.s1', errorType: 'meaning', type: '词源', prompt: '记 elf 时，哪句更稳妥？', options: ['先锁住「小精灵」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小精灵」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小精灵'] },
  });

  D('elicit', {
    etymology: {
      origin: '现代英语常用词「elicit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elicit', gloss: '引出' },
      suffix: null,
      history: [
        { label: 'elicit', text: '现代英语常用词「elicit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：引出。' },
      ],
      formationLogic: '核心义：引出。',
      mnemonic: '看到 elicit，先说出「引出」。',
      note: '核心义：引出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to elicit before the office closed.', chinese: '他们同意在办公室关门前做这件事：引出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elicit.s1', en: 'The deadline forced the team to elicit that afternoon.', zh: '截止日期逼着小组在那天下午引出。', structure: 'elicit / 表示 / 引出', grammar: 'verb，围绕「引出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She elicited it yesterday without checking the real past form.', right: 'Check the past form of "elicit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 elicit 是verb，再套「引出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elicit.q1', senseId: 'elicit.s1', errorType: 'meaning', type: '词义选择', prompt: '「elicit」在本条的核心意思是：', options: ['引出', '完全相反的意思', '一种古代钱币'], answer: '引出', explain: 'elicit：引出。' },
      { id: 'elicit.q2', senseId: 'elicit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elicit?', options: ['引出', 'a kind of ancient coin', 'the past tense of be'], answer: '引出', explain: '对的是「引出」。' },
      { id: 'elicit.q3', senseId: 'elicit.s1', errorType: 'grammar', type: '词义选择', prompt: 'elicit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'elicit.q4', senseId: 'elicit.s1', errorType: 'meaning', type: '词源', prompt: '记 elicit 时，哪句更稳妥？', options: ['先锁住「引出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「引出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['引出'] },
  });

  D('eligible', {
    etymology: {
      origin: '英语派生：elig + -ible，词性转到「有资格的」。',
      prefix: null,
      root: { text: 'elig', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eligible', text: '英语派生：elig + -ible，词性转到「有资格的」。' },
        { label: '现在', text: '核心用法是：有资格的。' },
      ],
      formationLogic: '先认词干 elig，再看词尾。',
      mnemonic: '看到 eligible，先说出「有资格的」。',
      note: '先认词干 elig，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eligible.', chinese: '即使是初读者也能看出，这个结果是有资格的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eligible.s1', en: 'They wanted a eligible answer, not a long speech.', zh: '他们要一个有资格的的答复，不要长篇发言。', structure: 'eligible / 表示 / 有资格的', grammar: 'adjective，围绕「有资格的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eligible.', right: 'The news is eligible.', reason: 'news 作主语时动词用单数。', rule: '先确定 eligible 是adjective，再套「有资格的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eligible.q1', senseId: 'eligible.s1', errorType: 'meaning', type: '词义选择', prompt: '「eligible」在本条的核心意思是：', options: ['有资格的', '完全相反的意思', '一种古代钱币'], answer: '有资格的', explain: 'eligible：有资格的。' },
      { id: 'eligible.q2', senseId: 'eligible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eligible?', options: ['有资格的', 'a kind of ancient coin', 'the past tense of be'], answer: '有资格的', explain: '对的是「有资格的」。' },
      { id: 'eligible.q3', senseId: 'eligible.s1', errorType: 'grammar', type: '词义选择', prompt: 'eligible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eligible.q4', senseId: 'eligible.s1', errorType: 'meaning', type: '词源', prompt: '记 eligible 时，哪句更稳妥？', options: ['先锁住「有资格的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有资格的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有资格的'] },
  });

  D('eliminate', {
    etymology: {
      origin: '现代英语常用词「eliminate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eliminate', gloss: '消除' },
      suffix: null,
      history: [
        { label: 'eliminate', text: '现代英语常用词「eliminate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：消除。' },
      ],
      formationLogic: '核心义：消除。',
      mnemonic: '看到 eliminate，先说出「消除」。',
      note: '核心义：消除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to eliminate before the office closed.', chinese: '他们同意在办公室关门前做这件事：消除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eliminate.s1', en: 'The deadline forced the team to eliminate that afternoon.', zh: '截止日期逼着小组在那天下午消除。', structure: 'eliminate / 表示 / 消除', grammar: 'verb，围绕「消除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She eliminateed it yesterday without checking the real past form.', right: 'Check the past form of "eliminate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 eliminate 是verb，再套「消除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eliminate.q1', senseId: 'eliminate.s1', errorType: 'meaning', type: '词义选择', prompt: '「eliminate」在本条的核心意思是：', options: ['消除', '完全相反的意思', '一种古代钱币'], answer: '消除', explain: 'eliminate：消除。' },
      { id: 'eliminate.q2', senseId: 'eliminate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eliminate?', options: ['消除', 'a kind of ancient coin', 'the past tense of be'], answer: '消除', explain: '对的是「消除」。' },
      { id: 'eliminate.q3', senseId: 'eliminate.s1', errorType: 'grammar', type: '词义选择', prompt: 'eliminate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'eliminate.q4', senseId: 'eliminate.s1', errorType: 'meaning', type: '词源', prompt: '记 eliminate 时，哪句更稳妥？', options: ['先锁住「消除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消除'] },
  });

  D('elite', {
    etymology: {
      origin: '现代英语常用词「elite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elite', gloss: '精英' },
      suffix: null,
      history: [
        { label: 'elite', text: '现代英语常用词「elite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：精英。' },
      ],
      formationLogic: '核心义：精英。',
      mnemonic: '看到 elite，先说出「精英」。',
      note: '核心义：精英。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elite.', chinese: '这一章反复回到同一个点：精英。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elite.s1', en: 'Without that elite, the next paragraph is hard to follow.', zh: '没有这个精英，下一段会很难读。', structure: 'elite / 表示 / 精英', grammar: 'noun，围绕「精英」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elite.', right: 'He gave me some advice about the elite.', reason: 'advice 不可数。名词 elite 的单复数按词典词形记。', rule: '先确定 elite 是noun，再套「精英」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elite.q1', senseId: 'elite.s1', errorType: 'meaning', type: '词义选择', prompt: '「elite」在本条的核心意思是：', options: ['精英', '完全相反的意思', '一种古代钱币'], answer: '精英', explain: 'elite：精英。' },
      { id: 'elite.q2', senseId: 'elite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elite?', options: ['精英', 'a kind of ancient coin', 'the past tense of be'], answer: '精英', explain: '对的是「精英」。' },
      { id: 'elite.q3', senseId: 'elite.s1', errorType: 'grammar', type: '词义选择', prompt: 'elite 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elite.q4', senseId: 'elite.s1', errorType: 'meaning', type: '词源', prompt: '记 elite 时，哪句更稳妥？', options: ['先锁住「精英」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精英」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精英'] },
  });

  D('elitist', {
    etymology: {
      origin: '英语派生：elit + -ist，词性转到「精英主义者」。',
      prefix: null,
      root: { text: 'elit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elitist', text: '英语派生：elit + -ist，词性转到「精英主义者」。' },
        { label: '现在', text: '核心用法是：精英主义者。' },
      ],
      formationLogic: '先认词干 elit，再看词尾。',
      mnemonic: '看到 elitist，先说出「精英主义者」。',
      note: '先认词干 elit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one elitist.', chinese: '这一章反复回到同一个点：精英主义者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elitist.s1', en: 'Without that elitist, the next paragraph is hard to follow.', zh: '没有这个精英主义者，下一段会很难读。', structure: 'elitist / 表示 / 精英主义者', grammar: 'noun，围绕「精英主义者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the elitist.', right: 'He gave me some advice about the elitist.', reason: 'advice 不可数。名词 elitist 的单复数按词典词形记。', rule: '先确定 elitist 是noun，再套「精英主义者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elitist.q1', senseId: 'elitist.s1', errorType: 'meaning', type: '词义选择', prompt: '「elitist」在本条的核心意思是：', options: ['精英主义者', '完全相反的意思', '一种古代钱币'], answer: '精英主义者', explain: 'elitist：精英主义者。' },
      { id: 'elitist.q2', senseId: 'elitist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elitist?', options: ['精英主义者', 'a kind of ancient coin', 'the past tense of be'], answer: '精英主义者', explain: '对的是「精英主义者」。' },
      { id: 'elitist.q3', senseId: 'elitist.s1', errorType: 'grammar', type: '词义选择', prompt: 'elitist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'elitist.q4', senseId: 'elitist.s1', errorType: 'meaning', type: '词源', prompt: '记 elitist 时，哪句更稳妥？', options: ['先锁住「精英主义者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精英主义者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精英主义者'] },
  });

  D('ellipse', {
    etymology: {
      origin: '现代英语常用词「ellipse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ellipse', gloss: '椭圆' },
      suffix: null,
      history: [
        { label: 'ellipse', text: '现代英语常用词「ellipse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：椭圆。' },
      ],
      formationLogic: '核心义：椭圆。',
      mnemonic: '看到 ellipse，先说出「椭圆」。',
      note: '核心义：椭圆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ellipse.', chinese: '这一章反复回到同一个点：椭圆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ellipse.s1', en: 'Without that ellipse, the next paragraph is hard to follow.', zh: '没有这个椭圆，下一段会很难读。', structure: 'ellipse / 表示 / 椭圆', grammar: 'noun，围绕「椭圆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ellipse.', right: 'He gave me some advice about the ellipse.', reason: 'advice 不可数。名词 ellipse 的单复数按词典词形记。', rule: '先确定 ellipse 是noun，再套「椭圆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ellipse.q1', senseId: 'ellipse.s1', errorType: 'meaning', type: '词义选择', prompt: '「ellipse」在本条的核心意思是：', options: ['椭圆', '完全相反的意思', '一种古代钱币'], answer: '椭圆', explain: 'ellipse：椭圆。' },
      { id: 'ellipse.q2', senseId: 'ellipse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ellipse?', options: ['椭圆', 'a kind of ancient coin', 'the past tense of be'], answer: '椭圆', explain: '对的是「椭圆」。' },
      { id: 'ellipse.q3', senseId: 'ellipse.s1', errorType: 'grammar', type: '词义选择', prompt: 'ellipse 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ellipse.q4', senseId: 'ellipse.s1', errorType: 'meaning', type: '词源', prompt: '记 ellipse 时，哪句更稳妥？', options: ['先锁住「椭圆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「椭圆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['椭圆'] },
  });

  D('elliptical', {
    etymology: {
      origin: '英语派生：elliptic + -al，词性转到「椭圆的」。',
      prefix: null,
      root: { text: 'elliptic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elliptical', text: '英语派生：elliptic + -al，词性转到「椭圆的」。' },
        { label: '现在', text: '核心用法是：椭圆的。' },
      ],
      formationLogic: '先认词干 elliptic，再看词尾。',
      mnemonic: '看到 elliptical，先说出「椭圆的」。',
      note: '先认词干 elliptic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elliptical.', chinese: '即使是初读者也能看出，这个结果是椭圆的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elliptical.s1', en: 'They wanted a elliptical answer, not a long speech.', zh: '他们要一个椭圆的的答复，不要长篇发言。', structure: 'elliptical / 表示 / 椭圆的', grammar: 'adjective，围绕「椭圆的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elliptical.', right: 'The news is elliptical.', reason: 'news 作主语时动词用单数。', rule: '先确定 elliptical 是adjective，再套「椭圆的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elliptical.q1', senseId: 'elliptical.s1', errorType: 'meaning', type: '词义选择', prompt: '「elliptical」在本条的核心意思是：', options: ['椭圆的', '完全相反的意思', '一种古代钱币'], answer: '椭圆的', explain: 'elliptical：椭圆的。' },
      { id: 'elliptical.q2', senseId: 'elliptical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elliptical?', options: ['椭圆的', 'a kind of ancient coin', 'the past tense of be'], answer: '椭圆的', explain: '对的是「椭圆的」。' },
      { id: 'elliptical.q3', senseId: 'elliptical.s1', errorType: 'grammar', type: '词义选择', prompt: 'elliptical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elliptical.q4', senseId: 'elliptical.s1', errorType: 'meaning', type: '词源', prompt: '记 elliptical 时，哪句更稳妥？', options: ['先锁住「椭圆的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「椭圆的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['椭圆的'] },
  });

  D('eloquence', {
    etymology: {
      origin: '英语派生：eloqu + -ence，词性转到「雄辩」。',
      prefix: null,
      root: { text: 'eloqu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'eloquence', text: '英语派生：eloqu + -ence，词性转到「雄辩」。' },
        { label: '现在', text: '核心用法是：雄辩。' },
      ],
      formationLogic: '先认词干 eloqu，再看词尾。',
      mnemonic: '看到 eloquence，先说出「雄辩」。',
      note: '先认词干 eloqu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one eloquence.', chinese: '这一章反复回到同一个点：雄辩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eloquence.s1', en: 'Without that eloquence, the next paragraph is hard to follow.', zh: '没有这个雄辩，下一段会很难读。', structure: 'eloquence / 表示 / 雄辩', grammar: 'noun，围绕「雄辩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the eloquence.', right: 'He gave me some advice about the eloquence.', reason: 'advice 不可数。名词 eloquence 的单复数按词典词形记。', rule: '先确定 eloquence 是noun，再套「雄辩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eloquence.q1', senseId: 'eloquence.s1', errorType: 'meaning', type: '词义选择', prompt: '「eloquence」在本条的核心意思是：', options: ['雄辩', '完全相反的意思', '一种古代钱币'], answer: '雄辩', explain: 'eloquence：雄辩。' },
      { id: 'eloquence.q2', senseId: 'eloquence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eloquence?', options: ['雄辩', 'a kind of ancient coin', 'the past tense of be'], answer: '雄辩', explain: '对的是「雄辩」。' },
      { id: 'eloquence.q3', senseId: 'eloquence.s1', errorType: 'grammar', type: '词义选择', prompt: 'eloquence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'eloquence.q4', senseId: 'eloquence.s1', errorType: 'meaning', type: '词源', prompt: '记 eloquence 时，哪句更稳妥？', options: ['先锁住「雄辩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雄辩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雄辩'] },
  });

  D('eloquent', {
    etymology: {
      origin: '现代英语常用词「eloquent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'eloquent', gloss: '雄辩的' },
      suffix: null,
      history: [
        { label: 'eloquent', text: '现代英语常用词「eloquent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：雄辩的。' },
      ],
      formationLogic: '核心义：雄辩的。',
      mnemonic: '看到 eloquent，先说出「雄辩的」。',
      note: '核心义：雄辩的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was eloquent.', chinese: '即使是初读者也能看出，这个结果是雄辩的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'eloquent.s1', en: 'They wanted a eloquent answer, not a long speech.', zh: '他们要一个雄辩的的答复，不要长篇发言。', structure: 'eloquent / 表示 / 雄辩的', grammar: 'adjective，围绕「雄辩的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are eloquent.', right: 'The news is eloquent.', reason: 'news 作主语时动词用单数。', rule: '先确定 eloquent 是adjective，再套「雄辩的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'eloquent.q1', senseId: 'eloquent.s1', errorType: 'meaning', type: '词义选择', prompt: '「eloquent」在本条的核心意思是：', options: ['雄辩的', '完全相反的意思', '一种古代钱币'], answer: '雄辩的', explain: 'eloquent：雄辩的。' },
      { id: 'eloquent.q2', senseId: 'eloquent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches eloquent?', options: ['雄辩的', 'a kind of ancient coin', 'the past tense of be'], answer: '雄辩的', explain: '对的是「雄辩的」。' },
      { id: 'eloquent.q3', senseId: 'eloquent.s1', errorType: 'grammar', type: '词义选择', prompt: 'eloquent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'eloquent.q4', senseId: 'eloquent.s1', errorType: 'meaning', type: '词源', prompt: '记 eloquent 时，哪句更稳妥？', options: ['先锁住「雄辩的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雄辩的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雄辩的'] },
  });

  D('else', {
    etymology: {
      origin: '现代英语常用词「else」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'else', gloss: '其他' },
      suffix: null,
      history: [
        { label: 'else', text: '现代英语常用词「else」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：其他。' },
      ],
      formationLogic: '核心义：其他。',
      mnemonic: '看到 else，先说出「其他」。',
      note: '核心义：其他。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule else, and the class followed.', chinese: '她把规则讲清楚了（其他），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'else.s1', en: 'He nodded else and returned to the notes.', zh: '他其他地点了点头，又回去看笔记。', structure: 'else / 表示 / 其他', grammar: 'adverb，围绕「其他」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very elsely in the meeting.', right: 'She spoke else in the meeting.', reason: 'else 已经是副词，不要再加 -ly。', rule: '先确定 else 是adverb，再套「其他」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'else.q1', senseId: 'else.s1', errorType: 'meaning', type: '词义选择', prompt: '「else」在本条的核心意思是：', options: ['其他', '完全相反的意思', '一种古代钱币'], answer: '其他', explain: 'else：其他。' },
      { id: 'else.q2', senseId: 'else.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches else?', options: ['其他', 'a kind of ancient coin', 'the past tense of be'], answer: '其他', explain: '对的是「其他」。' },
      { id: 'else.q3', senseId: 'else.s1', errorType: 'grammar', type: '词义选择', prompt: 'else 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'else.q4', senseId: 'else.s1', errorType: 'meaning', type: '词源', prompt: '记 else 时，哪句更稳妥？', options: ['先锁住「其他」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「其他」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['其他'] },
  });

  D('elsewhere', {
    etymology: {
      origin: '现代英语常用词「elsewhere」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'elsewhere', gloss: '在别处' },
      suffix: null,
      history: [
        { label: 'elsewhere', text: '现代英语常用词「elsewhere」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：在别处。' },
      ],
      formationLogic: '核心义：在别处。',
      mnemonic: '看到 elsewhere，先说出「在别处」。',
      note: '核心义：在别处。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule elsewhere, and the class followed.', chinese: '她把规则讲清楚了（在别处），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elsewhere.s1', en: 'He nodded elsewhere and returned to the notes.', zh: '他在别处地点了点头，又回去看笔记。', structure: 'elsewhere / 表示 / 在别处', grammar: 'adverb，围绕「在别处」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very elsewherely in the meeting.', right: 'She spoke elsewhere in the meeting.', reason: 'elsewhere 已经是副词，不要再加 -ly。', rule: '先确定 elsewhere 是adverb，再套「在别处」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elsewhere.q1', senseId: 'elsewhere.s1', errorType: 'meaning', type: '词义选择', prompt: '「elsewhere」在本条的核心意思是：', options: ['在别处', '完全相反的意思', '一种古代钱币'], answer: '在别处', explain: 'elsewhere：在别处。' },
      { id: 'elsewhere.q2', senseId: 'elsewhere.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elsewhere?', options: ['在别处', 'a kind of ancient coin', 'the past tense of be'], answer: '在别处', explain: '对的是「在别处」。' },
      { id: 'elsewhere.q3', senseId: 'elsewhere.s1', errorType: 'grammar', type: '词义选择', prompt: 'elsewhere 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'elsewhere.q4', senseId: 'elsewhere.s1', errorType: 'meaning', type: '词源', prompt: '记 elsewhere 时，哪句更稳妥？', options: ['先锁住「在别处」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「在别处」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在别处'] },
  });

  D('elusive', {
    etymology: {
      origin: '英语派生：elus + -ive，词性转到「难捉摸的」。',
      prefix: null,
      root: { text: 'elus', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'elusive', text: '英语派生：elus + -ive，词性转到「难捉摸的」。' },
        { label: '现在', text: '核心用法是：难捉摸的。' },
      ],
      formationLogic: '先认词干 elus，再看词尾。',
      mnemonic: '看到 elusive，先说出「难捉摸的」。',
      note: '先认词干 elus，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was elusive.', chinese: '即使是初读者也能看出，这个结果是难捉摸的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'elusive.s1', en: 'They wanted a elusive answer, not a long speech.', zh: '他们要一个难捉摸的的答复，不要长篇发言。', structure: 'elusive / 表示 / 难捉摸的', grammar: 'adjective，围绕「难捉摸的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are elusive.', right: 'The news is elusive.', reason: 'news 作主语时动词用单数。', rule: '先确定 elusive 是adjective，再套「难捉摸的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'elusive.q1', senseId: 'elusive.s1', errorType: 'meaning', type: '词义选择', prompt: '「elusive」在本条的核心意思是：', options: ['难捉摸的', '完全相反的意思', '一种古代钱币'], answer: '难捉摸的', explain: 'elusive：难捉摸的。' },
      { id: 'elusive.q2', senseId: 'elusive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches elusive?', options: ['难捉摸的', 'a kind of ancient coin', 'the past tense of be'], answer: '难捉摸的', explain: '对的是「难捉摸的」。' },
      { id: 'elusive.q3', senseId: 'elusive.s1', errorType: 'grammar', type: '词义选择', prompt: 'elusive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'elusive.q4', senseId: 'elusive.s1', errorType: 'meaning', type: '词源', prompt: '记 elusive 时，哪句更稳妥？', options: ['先锁住「难捉摸的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「难捉摸的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['难捉摸的'] },
  });

  D('email', {
    etymology: {
      origin: '现代英语常用词「email」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'email', gloss: '电子邮件' },
      suffix: null,
      history: [
        { label: 'email', text: '现代英语常用词「email」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：电子邮件。' },
      ],
      formationLogic: '核心义：电子邮件。',
      mnemonic: '看到 email，先说出「电子邮件」。',
      note: '核心义：电子邮件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one email.', chinese: '这一章反复回到同一个点：电子邮件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'email.s1', en: 'Without that email, the next paragraph is hard to follow.', zh: '没有这个电子邮件，下一段会很难读。', structure: 'email / 表示 / 电子邮件', grammar: 'noun，围绕「电子邮件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the email.', right: 'He gave me some advice about the email.', reason: 'advice 不可数。名词 email 的单复数按词典词形记。', rule: '先确定 email 是noun，再套「电子邮件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'email.q1', senseId: 'email.s1', errorType: 'meaning', type: '词义选择', prompt: '「email」在本条的核心意思是：', options: ['电子邮件', '完全相反的意思', '一种古代钱币'], answer: '电子邮件', explain: 'email：电子邮件。' },
      { id: 'email.q2', senseId: 'email.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches email?', options: ['电子邮件', 'a kind of ancient coin', 'the past tense of be'], answer: '电子邮件', explain: '对的是「电子邮件」。' },
      { id: 'email.q3', senseId: 'email.s1', errorType: 'grammar', type: '词义选择', prompt: 'email 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'email.q4', senseId: 'email.s1', errorType: 'meaning', type: '词源', prompt: '记 email 时，哪句更稳妥？', options: ['先锁住「电子邮件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电子邮件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电子邮件'] },
  });

  D('emancipate', {
    etymology: {
      origin: '现代英语常用词「emancipate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'emancipate', gloss: '解放' },
      suffix: null,
      history: [
        { label: 'emancipate', text: '现代英语常用词「emancipate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解放。' },
      ],
      formationLogic: '核心义：解放。',
      mnemonic: '看到 emancipate，先说出「解放」。',
      note: '核心义：解放。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to emancipate before the office closed.', chinese: '他们同意在办公室关门前做这件事：解放。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'emancipate.s1', en: 'The deadline forced the team to emancipate that afternoon.', zh: '截止日期逼着小组在那天下午解放。', structure: 'emancipate / 表示 / 解放', grammar: 'verb，围绕「解放」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She emancipateed it yesterday without checking the real past form.', right: 'Check the past form of "emancipate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 emancipate 是verb，再套「解放」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'emancipate.q1', senseId: 'emancipate.s1', errorType: 'meaning', type: '词义选择', prompt: '「emancipate」在本条的核心意思是：', options: ['解放', '完全相反的意思', '一种古代钱币'], answer: '解放', explain: 'emancipate：解放。' },
      { id: 'emancipate.q2', senseId: 'emancipate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches emancipate?', options: ['解放', 'a kind of ancient coin', 'the past tense of be'], answer: '解放', explain: '对的是「解放」。' },
      { id: 'emancipate.q3', senseId: 'emancipate.s1', errorType: 'grammar', type: '词义选择', prompt: 'emancipate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'emancipate.q4', senseId: 'emancipate.s1', errorType: 'meaning', type: '词源', prompt: '记 emancipate 时，哪句更稳妥？', options: ['先锁住「解放」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解放」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解放'] },
  });

  D('embargo', {
    etymology: {
      origin: '现代英语常用词「embargo」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embargo', gloss: '禁运' },
      suffix: null,
      history: [
        { label: 'embargo', text: '现代英语常用词「embargo」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：禁运。' },
      ],
      formationLogic: '核心义：禁运。',
      mnemonic: '看到 embargo，先说出「禁运」。',
      note: '核心义：禁运。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one embargo.', chinese: '这一章反复回到同一个点：禁运。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embargo.s1', en: 'Without that embargo, the next paragraph is hard to follow.', zh: '没有这个禁运，下一段会很难读。', structure: 'embargo / 表示 / 禁运', grammar: 'noun，围绕「禁运」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the embargo.', right: 'He gave me some advice about the embargo.', reason: 'advice 不可数。名词 embargo 的单复数按词典词形记。', rule: '先确定 embargo 是noun，再套「禁运」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embargo.q1', senseId: 'embargo.s1', errorType: 'meaning', type: '词义选择', prompt: '「embargo」在本条的核心意思是：', options: ['禁运', '完全相反的意思', '一种古代钱币'], answer: '禁运', explain: 'embargo：禁运。' },
      { id: 'embargo.q2', senseId: 'embargo.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embargo?', options: ['禁运', 'a kind of ancient coin', 'the past tense of be'], answer: '禁运', explain: '对的是「禁运」。' },
      { id: 'embargo.q3', senseId: 'embargo.s1', errorType: 'grammar', type: '词义选择', prompt: 'embargo 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'embargo.q4', senseId: 'embargo.s1', errorType: 'meaning', type: '词源', prompt: '记 embargo 时，哪句更稳妥？', options: ['先锁住「禁运」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「禁运」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['禁运'] },
  });

  D('embark', {
    etymology: {
      origin: '现代英语常用词「embark」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embark', gloss: '上船' },
      suffix: null,
      history: [
        { label: 'embark', text: '现代英语常用词「embark」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：上船。' },
      ],
      formationLogic: '核心义：上船。',
      mnemonic: '看到 embark，先说出「上船」。',
      note: '核心义：上船。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to embark before the office closed.', chinese: '他们同意在办公室关门前做这件事：上船。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embark.s1', en: 'The deadline forced the team to embark that afternoon.', zh: '截止日期逼着小组在那天下午上船。', structure: 'embark / 表示 / 上船', grammar: 'verb，围绕「上船」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She embarked it yesterday without checking the real past form.', right: 'Check the past form of "embark" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 embark 是verb，再套「上船」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embark.q1', senseId: 'embark.s1', errorType: 'meaning', type: '词义选择', prompt: '「embark」在本条的核心意思是：', options: ['上船', '完全相反的意思', '一种古代钱币'], answer: '上船', explain: 'embark：上船。' },
      { id: 'embark.q2', senseId: 'embark.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embark?', options: ['上船', 'a kind of ancient coin', 'the past tense of be'], answer: '上船', explain: '对的是「上船」。' },
      { id: 'embark.q3', senseId: 'embark.s1', errorType: 'grammar', type: '词义选择', prompt: 'embark 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'embark.q4', senseId: 'embark.s1', errorType: 'meaning', type: '词源', prompt: '记 embark 时，哪句更稳妥？', options: ['先锁住「上船」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「上船」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上船'] },
  });

  D('embarrass', {
    etymology: {
      origin: '现代英语常用词「embarrass」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embarrass', gloss: '使尴尬' },
      suffix: null,
      history: [
        { label: 'embarrass', text: '现代英语常用词「embarrass」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使尴尬。' },
      ],
      formationLogic: '核心义：使尴尬。',
      mnemonic: '看到 embarrass，先说出「使尴尬」。',
      note: '核心义：使尴尬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to embarrass before the office closed.', chinese: '他们同意在办公室关门前做这件事：使尴尬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embarrass.s1', en: 'The deadline forced the team to embarrass that afternoon.', zh: '截止日期逼着小组在那天下午使尴尬。', structure: 'embarrass / 表示 / 使尴尬', grammar: 'verb，围绕「使尴尬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She embarrassed it yesterday without checking the real past form.', right: 'Check the past form of "embarrass" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 embarrass 是verb，再套「使尴尬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embarrass.q1', senseId: 'embarrass.s1', errorType: 'meaning', type: '词义选择', prompt: '「embarrass」在本条的核心意思是：', options: ['使尴尬', '完全相反的意思', '一种古代钱币'], answer: '使尴尬', explain: 'embarrass：使尴尬。' },
      { id: 'embarrass.q2', senseId: 'embarrass.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embarrass?', options: ['使尴尬', 'a kind of ancient coin', 'the past tense of be'], answer: '使尴尬', explain: '对的是「使尴尬」。' },
      { id: 'embarrass.q3', senseId: 'embarrass.s1', errorType: 'grammar', type: '词义选择', prompt: 'embarrass 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'embarrass.q4', senseId: 'embarrass.s1', errorType: 'meaning', type: '词源', prompt: '记 embarrass 时，哪句更稳妥？', options: ['先锁住「使尴尬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使尴尬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使尴尬'] },
  });

  D('embarrassed', {
    etymology: {
      origin: '现代英语常用词「embarrassed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embarrassed', gloss: '尴尬的' },
      suffix: null,
      history: [
        { label: 'embarrassed', text: '现代英语常用词「embarrassed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：尴尬的。' },
      ],
      formationLogic: '核心义：尴尬的。',
      mnemonic: '看到 embarrassed，先说出「尴尬的」。',
      note: '核心义：尴尬的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was embarrassed.', chinese: '即使是初读者也能看出，这个结果是尴尬的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embarrassed.s1', en: 'They wanted a embarrassed answer, not a long speech.', zh: '他们要一个尴尬的的答复，不要长篇发言。', structure: 'embarrassed / 表示 / 尴尬的', grammar: 'adjective，围绕「尴尬的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are embarrassed.', right: 'The news is embarrassed.', reason: 'news 作主语时动词用单数。', rule: '先确定 embarrassed 是adjective，再套「尴尬的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embarrassed.q1', senseId: 'embarrassed.s1', errorType: 'meaning', type: '词义选择', prompt: '「embarrassed」在本条的核心意思是：', options: ['尴尬的', '完全相反的意思', '一种古代钱币'], answer: '尴尬的', explain: 'embarrassed：尴尬的。' },
      { id: 'embarrassed.q2', senseId: 'embarrassed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embarrassed?', options: ['尴尬的', 'a kind of ancient coin', 'the past tense of be'], answer: '尴尬的', explain: '对的是「尴尬的」。' },
      { id: 'embarrassed.q3', senseId: 'embarrassed.s1', errorType: 'grammar', type: '词义选择', prompt: 'embarrassed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'embarrassed.q4', senseId: 'embarrassed.s1', errorType: 'meaning', type: '词源', prompt: '记 embarrassed 时，哪句更稳妥？', options: ['先锁住「尴尬的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尴尬的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尴尬的'] },
  });

  D('embarrassing', {
    etymology: {
      origin: '英语派生：embarrass + -ing，词性转到「令人尴尬的」。',
      prefix: null,
      root: { text: 'embarrass', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'embarrassing', text: '英语派生：embarrass + -ing，词性转到「令人尴尬的」。' },
        { label: '现在', text: '核心用法是：令人尴尬的。' },
      ],
      formationLogic: '先认词干 embarrass，再看词尾。',
      mnemonic: '看到 embarrassing，先说出「令人尴尬的」。',
      note: '先认词干 embarrass，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was embarrassing.', chinese: '即使是初读者也能看出，这个结果是令人尴尬的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embarrassing.s1', en: 'They wanted a embarrassing answer, not a long speech.', zh: '他们要一个令人尴尬的的答复，不要长篇发言。', structure: 'embarrassing / 表示 / 令人尴尬的', grammar: 'adjective，围绕「令人尴尬的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are embarrassing.', right: 'The news is embarrassing.', reason: 'news 作主语时动词用单数。', rule: '先确定 embarrassing 是adjective，再套「令人尴尬的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embarrassing.q1', senseId: 'embarrassing.s1', errorType: 'meaning', type: '词义选择', prompt: '「embarrassing」在本条的核心意思是：', options: ['令人尴尬的', '完全相反的意思', '一种古代钱币'], answer: '令人尴尬的', explain: 'embarrassing：令人尴尬的。' },
      { id: 'embarrassing.q2', senseId: 'embarrassing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embarrassing?', options: ['令人尴尬的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人尴尬的', explain: '对的是「令人尴尬的」。' },
      { id: 'embarrassing.q3', senseId: 'embarrassing.s1', errorType: 'grammar', type: '词义选择', prompt: 'embarrassing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'embarrassing.q4', senseId: 'embarrassing.s1', errorType: 'meaning', type: '词源', prompt: '记 embarrassing 时，哪句更稳妥？', options: ['先锁住「令人尴尬的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「令人尴尬的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人尴尬的'] },
  });

  D('embassy', {
    etymology: {
      origin: '现代英语常用词「embassy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embassy', gloss: '大使馆' },
      suffix: null,
      history: [
        { label: 'embassy', text: '现代英语常用词「embassy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大使馆。' },
      ],
      formationLogic: '核心义：大使馆。',
      mnemonic: '看到 embassy，先说出「大使馆」。',
      note: '核心义：大使馆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one embassy.', chinese: '这一章反复回到同一个点：大使馆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embassy.s1', en: 'Without that embassy, the next paragraph is hard to follow.', zh: '没有这个大使馆，下一段会很难读。', structure: 'embassy / 表示 / 大使馆', grammar: 'noun，围绕「大使馆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the embassy.', right: 'He gave me some advice about the embassy.', reason: 'advice 不可数。名词 embassy 的单复数按词典词形记。', rule: '先确定 embassy 是noun，再套「大使馆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embassy.q1', senseId: 'embassy.s1', errorType: 'meaning', type: '词义选择', prompt: '「embassy」在本条的核心意思是：', options: ['大使馆', '完全相反的意思', '一种古代钱币'], answer: '大使馆', explain: 'embassy：大使馆。' },
      { id: 'embassy.q2', senseId: 'embassy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embassy?', options: ['大使馆', 'a kind of ancient coin', 'the past tense of be'], answer: '大使馆', explain: '对的是「大使馆」。' },
      { id: 'embassy.q3', senseId: 'embassy.s1', errorType: 'grammar', type: '词义选择', prompt: 'embassy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'embassy.q4', senseId: 'embassy.s1', errorType: 'meaning', type: '词源', prompt: '记 embassy 时，哪句更稳妥？', options: ['先锁住「大使馆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大使馆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大使馆'] },
  });

  D('embed', {
    etymology: {
      origin: '现代英语常用词「embed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'embed', gloss: '嵌入' },
      suffix: null,
      history: [
        { label: 'embed', text: '现代英语常用词「embed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：嵌入。' },
      ],
      formationLogic: '核心义：嵌入。',
      mnemonic: '看到 embed，先说出「嵌入」。',
      note: '核心义：嵌入。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to embed before the office closed.', chinese: '他们同意在办公室关门前做这件事：嵌入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embed.s1', en: 'The deadline forced the team to embed that afternoon.', zh: '截止日期逼着小组在那天下午嵌入。', structure: 'embed / 表示 / 嵌入', grammar: 'verb，围绕「嵌入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She embeded it yesterday without checking the real past form.', right: 'Check the past form of "embed" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 embed 是verb，再套「嵌入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embed.q1', senseId: 'embed.s1', errorType: 'meaning', type: '词义选择', prompt: '「embed」在本条的核心意思是：', options: ['嵌入', '完全相反的意思', '一种古代钱币'], answer: '嵌入', explain: 'embed：嵌入。' },
      { id: 'embed.q2', senseId: 'embed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embed?', options: ['嵌入', 'a kind of ancient coin', 'the past tense of be'], answer: '嵌入', explain: '对的是「嵌入」。' },
      { id: 'embed.q3', senseId: 'embed.s1', errorType: 'grammar', type: '词义选择', prompt: 'embed 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'embed.q4', senseId: 'embed.s1', errorType: 'meaning', type: '词源', prompt: '记 embed 时，哪句更稳妥？', options: ['先锁住「嵌入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嵌入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嵌入'] },
  });

  D('embellishment', {
    etymology: {
      origin: '英语派生：embellish + -ment，词性转到「装饰」。',
      prefix: null,
      root: { text: 'embellish', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'embellishment', text: '英语派生：embellish + -ment，词性转到「装饰」。' },
        { label: '现在', text: '核心用法是：装饰。' },
      ],
      formationLogic: '先认词干 embellish，再看词尾。',
      mnemonic: '看到 embellishment，先说出「装饰」。',
      note: '先认词干 embellish，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one embellishment.', chinese: '这一章反复回到同一个点：装饰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'embellishment.s1', en: 'Without that embellishment, the next paragraph is hard to follow.', zh: '没有这个装饰，下一段会很难读。', structure: 'embellishment / 表示 / 装饰', grammar: 'noun，围绕「装饰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the embellishment.', right: 'He gave me some advice about the embellishment.', reason: 'advice 不可数。名词 embellishment 的单复数按词典词形记。', rule: '先确定 embellishment 是noun，再套「装饰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'embellishment.q1', senseId: 'embellishment.s1', errorType: 'meaning', type: '词义选择', prompt: '「embellishment」在本条的核心意思是：', options: ['装饰', '完全相反的意思', '一种古代钱币'], answer: '装饰', explain: 'embellishment：装饰。' },
      { id: 'embellishment.q2', senseId: 'embellishment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches embellishment?', options: ['装饰', 'a kind of ancient coin', 'the past tense of be'], answer: '装饰', explain: '对的是「装饰」。' },
      { id: 'embellishment.q3', senseId: 'embellishment.s1', errorType: 'grammar', type: '词义选择', prompt: 'embellishment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'embellishment.q4', senseId: 'embellishment.s1', errorType: 'meaning', type: '词源', prompt: '记 embellishment 时，哪句更稳妥？', options: ['先锁住「装饰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装饰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装饰'] },
  });

  D('ember', {
    etymology: {
      origin: '英语派生：emb + -er，词性转到「余烬」。',
      prefix: null,
      root: { text: 'emb', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ember', text: '英语派生：emb + -er，词性转到「余烬」。' },
        { label: '现在', text: '核心用法是：余烬。' },
      ],
      formationLogic: '先认词干 emb，再看词尾。',
      mnemonic: '看到 ember，先说出「余烬」。',
      note: '先认词干 emb，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ember.', chinese: '这一章反复回到同一个点：余烬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ember.s1', en: 'Without that ember, the next paragraph is hard to follow.', zh: '没有这个余烬，下一段会很难读。', structure: 'ember / 表示 / 余烬', grammar: 'noun，围绕「余烬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ember.', right: 'He gave me some advice about the ember.', reason: 'advice 不可数。名词 ember 的单复数按词典词形记。', rule: '先确定 ember 是noun，再套「余烬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ember.q1', senseId: 'ember.s1', errorType: 'meaning', type: '词义选择', prompt: '「ember」在本条的核心意思是：', options: ['余烬', '完全相反的意思', '一种古代钱币'], answer: '余烬', explain: 'ember：余烬。' },
      { id: 'ember.q2', senseId: 'ember.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ember?', options: ['余烬', 'a kind of ancient coin', 'the past tense of be'], answer: '余烬', explain: '对的是「余烬」。' },
      { id: 'ember.q3', senseId: 'ember.s1', errorType: 'grammar', type: '词义选择', prompt: 'ember 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ember.q4', senseId: 'ember.s1', errorType: 'meaning', type: '词源', prompt: '记 ember 时，哪句更稳妥？', options: ['先锁住「余烬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「余烬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['余烬'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
