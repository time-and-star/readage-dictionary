/* data/words/cet/author_depth_f3.js
 * 手敲深度补丁：defect–dimension（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('defect', {
    etymology: {
      origin: '现代英语常用词「defect」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'defect', gloss: '缺陷' },
      suffix: null,
      history: [
        { label: 'defect', text: '现代英语常用词「defect」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：缺陷。' },
      ],
      formationLogic: '核心义：缺陷。',
      mnemonic: '看到 defect，先说出「缺陷」。',
      note: '核心义：缺陷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one defect.', chinese: '这一章反复回到同一个点：缺陷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defect.s1', en: 'Without that defect, the next paragraph is hard to follow.', zh: '没有这个缺陷，下一段会很难读。', structure: 'defect / 表示 / 缺陷', grammar: 'noun，围绕「缺陷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the defect.', right: 'He gave me some advice about the defect.', reason: 'advice 不可数。名词 defect 的单复数按词典词形记。', rule: '先确定 defect 是noun，再套「缺陷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defect.q1', senseId: 'defect.s1', errorType: 'meaning', type: '词义选择', prompt: '「defect」在本条的核心意思是：', options: ['缺陷', '完全相反的意思', '一种古代钱币'], answer: '缺陷', explain: 'defect：缺陷。' },
      { id: 'defect.q2', senseId: 'defect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defect?', options: ['缺陷', 'a kind of ancient coin', 'the past tense of be'], answer: '缺陷', explain: '对的是「缺陷」。' },
      { id: 'defect.q3', senseId: 'defect.s1', errorType: 'grammar', type: '词义选择', prompt: 'defect 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'defect.q4', senseId: 'defect.s1', errorType: 'meaning', type: '词源', prompt: '记 defect 时，哪句更稳妥？', options: ['先锁住「缺陷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「缺陷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缺陷'] },
  });

  D('defence', {
    etymology: {
      origin: '拉丁语 defendere。英国拼写。',
      prefix: null,
      root: { text: 'defence', gloss: '防御' },
      suffix: null,
      history: [
        { label: 'defence', text: '拉丁语 defendere。英国拼写。' },
        { label: '现在', text: '核心用法是：防御。' },
      ],
      formationLogic: '考试认现在的用法：防御。',
      mnemonic: '看到 defence，先说出「防御」。',
      note: '考试认现在的用法：防御。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one defence.', chinese: '这一章反复回到同一个点：防御。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defence.s1', en: 'Without that defence, the next paragraph is hard to follow.', zh: '没有这个防御，下一段会很难读。', structure: 'defence / 表示 / 防御', grammar: 'noun，围绕「防御」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the defence.', right: 'He gave me some advice about the defence.', reason: 'advice 不可数。名词 defence 的单复数按词典词形记。', rule: '先确定 defence 是noun，再套「防御」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defence.q1', senseId: 'defence.s1', errorType: 'meaning', type: '词义选择', prompt: '「defence」在本条的核心意思是：', options: ['防御', '完全相反的意思', '一种古代钱币'], answer: '防御', explain: 'defence：防御。' },
      { id: 'defence.q2', senseId: 'defence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defence?', options: ['防御', 'a kind of ancient coin', 'the past tense of be'], answer: '防御', explain: '对的是「防御」。' },
      { id: 'defence.q3', senseId: 'defence.s1', errorType: 'grammar', type: '词义选择', prompt: 'defence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'defence.q4', senseId: 'defence.s1', errorType: 'meaning', type: '词源', prompt: '记 defence 时，哪句更稳妥？', options: ['先锁住「防御」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「防御」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['防御'] },
  });

  D('defenceless', {
    etymology: {
      origin: '英语派生：defence + -less，词性转到「无防御的」。',
      prefix: null,
      root: { text: 'defence', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'defenceless', text: '英语派生：defence + -less，词性转到「无防御的」。' },
        { label: '现在', text: '核心用法是：无防御的。' },
      ],
      formationLogic: '先认词干 defence，再看词尾。',
      mnemonic: '看到 defenceless，先说出「无防御的」。',
      note: '先认词干 defence，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was defenceless.', chinese: '即使是初读者也能看出，这个结果是无防御的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defenceless.s1', en: 'They wanted a defenceless answer, not a long speech.', zh: '他们要一个无防御的的答复，不要长篇发言。', structure: 'defenceless / 表示 / 无防御的', grammar: 'adjective，围绕「无防御的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are defenceless.', right: 'The news is defenceless.', reason: 'news 作主语时动词用单数。', rule: '先确定 defenceless 是adjective，再套「无防御的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defenceless.q1', senseId: 'defenceless.s1', errorType: 'meaning', type: '词义选择', prompt: '「defenceless」在本条的核心意思是：', options: ['无防御的', '完全相反的意思', '一种古代钱币'], answer: '无防御的', explain: 'defenceless：无防御的。' },
      { id: 'defenceless.q2', senseId: 'defenceless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defenceless?', options: ['无防御的', 'a kind of ancient coin', 'the past tense of be'], answer: '无防御的', explain: '对的是「无防御的」。' },
      { id: 'defenceless.q3', senseId: 'defenceless.s1', errorType: 'grammar', type: '词义选择', prompt: 'defenceless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'defenceless.q4', senseId: 'defenceless.s1', errorType: 'meaning', type: '词源', prompt: '记 defenceless 时，哪句更稳妥？', options: ['先锁住「无防御的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「无防御的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['无防御的'] },
  });

  D('defend', {
    etymology: {
      origin: '拉丁语 defendere「挡开」。',
      prefix: null,
      root: { text: 'defend', gloss: '保卫' },
      suffix: null,
      history: [
        { label: 'defend', text: '拉丁语 defendere「挡开」。' },
        { label: '现在', text: '核心用法是：保卫。' },
      ],
      formationLogic: '考试认现在的用法：保卫。',
      mnemonic: '看到 defend，先说出「保卫」。',
      note: '考试认现在的用法：保卫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to defend before the office closed.', chinese: '他们同意在办公室关门前做这件事：保卫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defend.s1', en: 'The deadline forced the team to defend that afternoon.', zh: '截止日期逼着小组在那天下午保卫。', structure: 'defend / 表示 / 保卫', grammar: 'verb，围绕「保卫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She defended it yesterday without checking the real past form.', right: 'Check the past form of "defend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 defend 是verb，再套「保卫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defend.q1', senseId: 'defend.s1', errorType: 'meaning', type: '词义选择', prompt: '「defend」在本条的核心意思是：', options: ['保卫', '完全相反的意思', '一种古代钱币'], answer: '保卫', explain: 'defend：保卫。' },
      { id: 'defend.q2', senseId: 'defend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defend?', options: ['保卫', 'a kind of ancient coin', 'the past tense of be'], answer: '保卫', explain: '对的是「保卫」。' },
      { id: 'defend.q3', senseId: 'defend.s1', errorType: 'grammar', type: '词义选择', prompt: 'defend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'defend.q4', senseId: 'defend.s1', errorType: 'meaning', type: '词源', prompt: '记 defend 时，哪句更稳妥？', options: ['先锁住「保卫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「保卫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['保卫'] },
  });

  D('defendant', {
    etymology: {
      origin: '现代英语常用词「defendant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'defendant', gloss: '被告' },
      suffix: null,
      history: [
        { label: 'defendant', text: '现代英语常用词「defendant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被告。' },
      ],
      formationLogic: '核心义：被告。',
      mnemonic: '看到 defendant，先说出「被告」。',
      note: '核心义：被告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one defendant.', chinese: '这一章反复回到同一个点：被告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defendant.s1', en: 'Without that defendant, the next paragraph is hard to follow.', zh: '没有这个被告，下一段会很难读。', structure: 'defendant / 表示 / 被告', grammar: 'noun，围绕「被告」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the defendant.', right: 'He gave me some advice about the defendant.', reason: 'advice 不可数。名词 defendant 的单复数按词典词形记。', rule: '先确定 defendant 是noun，再套「被告」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defendant.q1', senseId: 'defendant.s1', errorType: 'meaning', type: '词义选择', prompt: '「defendant」在本条的核心意思是：', options: ['被告', '完全相反的意思', '一种古代钱币'], answer: '被告', explain: 'defendant：被告。' },
      { id: 'defendant.q2', senseId: 'defendant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defendant?', options: ['被告', 'a kind of ancient coin', 'the past tense of be'], answer: '被告', explain: '对的是「被告」。' },
      { id: 'defendant.q3', senseId: 'defendant.s1', errorType: 'grammar', type: '词义选择', prompt: 'defendant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'defendant.q4', senseId: 'defendant.s1', errorType: 'meaning', type: '词源', prompt: '记 defendant 时，哪句更稳妥？', options: ['先锁住「被告」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被告」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被告'] },
  });

  D('defer', {
    etymology: {
      origin: '英语派生：def + -er，词性转到「推迟」。',
      prefix: null,
      root: { text: 'def', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'defer', text: '英语派生：def + -er，词性转到「推迟」。' },
        { label: '现在', text: '核心用法是：推迟。' },
      ],
      formationLogic: '先认词干 def，再看词尾。',
      mnemonic: '看到 defer，先说出「推迟」。',
      note: '先认词干 def，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to defer before the office closed.', chinese: '他们同意在办公室关门前做这件事：推迟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defer.s1', en: 'The deadline forced the team to defer that afternoon.', zh: '截止日期逼着小组在那天下午推迟。', structure: 'defer / 表示 / 推迟', grammar: 'verb，围绕「推迟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She defered it yesterday without checking the real past form.', right: 'Check the past form of "defer" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 defer 是verb，再套「推迟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defer.q1', senseId: 'defer.s1', errorType: 'meaning', type: '词义选择', prompt: '「defer」在本条的核心意思是：', options: ['推迟', '完全相反的意思', '一种古代钱币'], answer: '推迟', explain: 'defer：推迟。' },
      { id: 'defer.q2', senseId: 'defer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defer?', options: ['推迟', 'a kind of ancient coin', 'the past tense of be'], answer: '推迟', explain: '对的是「推迟」。' },
      { id: 'defer.q3', senseId: 'defer.s1', errorType: 'grammar', type: '词义选择', prompt: 'defer 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'defer.q4', senseId: 'defer.s1', errorType: 'meaning', type: '词源', prompt: '记 defer 时，哪句更稳妥？', options: ['先锁住「推迟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「推迟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['推迟'] },
  });

  D('deficient', {
    etymology: {
      origin: '现代英语常用词「deficient」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deficient', gloss: '缺乏的' },
      suffix: null,
      history: [
        { label: 'deficient', text: '现代英语常用词「deficient」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：缺乏的。' },
      ],
      formationLogic: '核心义：缺乏的。',
      mnemonic: '看到 deficient，先说出「缺乏的」。',
      note: '核心义：缺乏的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deficient.', chinese: '即使是初读者也能看出，这个结果是缺乏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deficient.s1', en: 'They wanted a deficient answer, not a long speech.', zh: '他们要一个缺乏的的答复，不要长篇发言。', structure: 'deficient / 表示 / 缺乏的', grammar: 'adjective，围绕「缺乏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deficient.', right: 'The news is deficient.', reason: 'news 作主语时动词用单数。', rule: '先确定 deficient 是adjective，再套「缺乏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deficient.q1', senseId: 'deficient.s1', errorType: 'meaning', type: '词义选择', prompt: '「deficient」在本条的核心意思是：', options: ['缺乏的', '完全相反的意思', '一种古代钱币'], answer: '缺乏的', explain: 'deficient：缺乏的。' },
      { id: 'deficient.q2', senseId: 'deficient.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deficient?', options: ['缺乏的', 'a kind of ancient coin', 'the past tense of be'], answer: '缺乏的', explain: '对的是「缺乏的」。' },
      { id: 'deficient.q3', senseId: 'deficient.s1', errorType: 'grammar', type: '词义选择', prompt: 'deficient 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deficient.q4', senseId: 'deficient.s1', errorType: 'meaning', type: '词源', prompt: '记 deficient 时，哪句更稳妥？', options: ['先锁住「缺乏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「缺乏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['缺乏的'] },
  });

  D('deficit', {
    etymology: {
      origin: '现代英语常用词「deficit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deficit', gloss: '赤字' },
      suffix: null,
      history: [
        { label: 'deficit', text: '现代英语常用词「deficit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赤字。' },
      ],
      formationLogic: '核心义：赤字。',
      mnemonic: '看到 deficit，先说出「赤字」。',
      note: '核心义：赤字。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deficit.', chinese: '这一章反复回到同一个点：赤字。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deficit.s1', en: 'Without that deficit, the next paragraph is hard to follow.', zh: '没有这个赤字，下一段会很难读。', structure: 'deficit / 表示 / 赤字', grammar: 'noun，围绕「赤字」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deficit.', right: 'He gave me some advice about the deficit.', reason: 'advice 不可数。名词 deficit 的单复数按词典词形记。', rule: '先确定 deficit 是noun，再套「赤字」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deficit.q1', senseId: 'deficit.s1', errorType: 'meaning', type: '词义选择', prompt: '「deficit」在本条的核心意思是：', options: ['赤字', '完全相反的意思', '一种古代钱币'], answer: '赤字', explain: 'deficit：赤字。' },
      { id: 'deficit.q2', senseId: 'deficit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deficit?', options: ['赤字', 'a kind of ancient coin', 'the past tense of be'], answer: '赤字', explain: '对的是「赤字」。' },
      { id: 'deficit.q3', senseId: 'deficit.s1', errorType: 'grammar', type: '词义选择', prompt: 'deficit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deficit.q4', senseId: 'deficit.s1', errorType: 'meaning', type: '词源', prompt: '记 deficit 时，哪句更稳妥？', options: ['先锁住「赤字」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赤字」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赤字'] },
  });

  D('define', {
    etymology: {
      origin: '拉丁语 definire「划定界限」，finis「边界」。',
      prefix: null,
      root: { text: 'define', gloss: '定义' },
      suffix: null,
      history: [
        { label: 'define', text: '拉丁语 definire「划定界限」，finis「边界」。' },
        { label: '现在', text: '核心用法是：定义。' },
      ],
      formationLogic: '考试认现在的用法：定义。',
      mnemonic: '看到 define，先说出「定义」。',
      note: '考试认现在的用法：定义。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to define before the office closed.', chinese: '他们同意在办公室关门前做这件事：定义。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'define.s1', en: 'The deadline forced the team to define that afternoon.', zh: '截止日期逼着小组在那天下午定义。', structure: 'define / 表示 / 定义', grammar: 'verb，围绕「定义」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She defineed it yesterday without checking the real past form.', right: 'Check the past form of "define" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 define 是verb，再套「定义」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'define.q1', senseId: 'define.s1', errorType: 'meaning', type: '词义选择', prompt: '「define」在本条的核心意思是：', options: ['定义', '完全相反的意思', '一种古代钱币'], answer: '定义', explain: 'define：定义。' },
      { id: 'define.q2', senseId: 'define.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches define?', options: ['定义', 'a kind of ancient coin', 'the past tense of be'], answer: '定义', explain: '对的是「定义」。' },
      { id: 'define.q3', senseId: 'define.s1', errorType: 'grammar', type: '词义选择', prompt: 'define 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'define.q4', senseId: 'define.s1', errorType: 'meaning', type: '词源', prompt: '记 define 时，哪句更稳妥？', options: ['先锁住「定义」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「定义」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['定义'] },
  });

  D('definite', {
    etymology: {
      origin: '拉丁语 definitus「已划界的」。',
      prefix: null,
      root: { text: 'definite', gloss: '确定的' },
      suffix: null,
      history: [
        { label: 'definite', text: '拉丁语 definitus「已划界的」。' },
        { label: '现在', text: '核心用法是：确定的。' },
      ],
      formationLogic: '考试认现在的用法：确定的。',
      mnemonic: '看到 definite，先说出「确定的」。',
      note: '考试认现在的用法：确定的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was definite.', chinese: '即使是初读者也能看出，这个结果是确定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'definite.s1', en: 'They wanted a definite answer, not a long speech.', zh: '他们要一个确定的的答复，不要长篇发言。', structure: 'definite / 表示 / 确定的', grammar: 'adjective，围绕「确定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are definite.', right: 'The news is definite.', reason: 'news 作主语时动词用单数。', rule: '先确定 definite 是adjective，再套「确定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'definite.q1', senseId: 'definite.s1', errorType: 'meaning', type: '词义选择', prompt: '「definite」在本条的核心意思是：', options: ['确定的', '完全相反的意思', '一种古代钱币'], answer: '确定的', explain: 'definite：确定的。' },
      { id: 'definite.q2', senseId: 'definite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches definite?', options: ['确定的', 'a kind of ancient coin', 'the past tense of be'], answer: '确定的', explain: '对的是「确定的」。' },
      { id: 'definite.q3', senseId: 'definite.s1', errorType: 'grammar', type: '词义选择', prompt: 'definite 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'definite.q4', senseId: 'definite.s1', errorType: 'meaning', type: '词源', prompt: '记 definite 时，哪句更稳妥？', options: ['先锁住「确定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「确定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['确定的'] },
  });

  D('definitely', {
    etymology: {
      origin: '英语派生：definite + -ly，词性转到「肯定」。',
      prefix: null,
      root: { text: 'definite', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'definitely', text: '英语派生：definite + -ly，词性转到「肯定」。' },
        { label: '现在', text: '核心用法是：肯定。' },
      ],
      formationLogic: '先认词干 definite，再看词尾。',
      mnemonic: '看到 definitely，先说出「肯定」。',
      note: '先认词干 definite，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule definitely, and the class followed.', chinese: '她把规则讲清楚了（肯定），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'definitely.s1', en: 'He nodded definitely and returned to the notes.', zh: '他肯定地点了点头，又回去看笔记。', structure: 'definitely / 表示 / 肯定', grammar: 'adverb，围绕「肯定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very definitelyly in the meeting.', right: 'She spoke definitely in the meeting.', reason: 'definitely 已经是副词，不要再加 -ly。', rule: '先确定 definitely 是adverb，再套「肯定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'definitely.q1', senseId: 'definitely.s1', errorType: 'meaning', type: '词义选择', prompt: '「definitely」在本条的核心意思是：', options: ['肯定', '完全相反的意思', '一种古代钱币'], answer: '肯定', explain: 'definitely：肯定。' },
      { id: 'definitely.q2', senseId: 'definitely.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches definitely?', options: ['肯定', 'a kind of ancient coin', 'the past tense of be'], answer: '肯定', explain: '对的是「肯定」。' },
      { id: 'definitely.q3', senseId: 'definitely.s1', errorType: 'grammar', type: '词义选择', prompt: 'definitely 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'definitely.q4', senseId: 'definitely.s1', errorType: 'meaning', type: '词源', prompt: '记 definitely 时，哪句更稳妥？', options: ['先锁住「肯定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肯定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肯定'] },
  });

  D('deflated', {
    etymology: {
      origin: '现代英语常用词「deflated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deflated', gloss: '泄了气的' },
      suffix: null,
      history: [
        { label: 'deflated', text: '现代英语常用词「deflated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：泄了气的。' },
      ],
      formationLogic: '核心义：泄了气的。',
      mnemonic: '看到 deflated，先说出「泄了气的」。',
      note: '核心义：泄了气的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deflated.', chinese: '即使是初读者也能看出，这个结果是泄了气的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deflated.s1', en: 'They wanted a deflated answer, not a long speech.', zh: '他们要一个泄了气的的答复，不要长篇发言。', structure: 'deflated / 表示 / 泄了气的', grammar: 'adjective，围绕「泄了气的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deflated.', right: 'The news is deflated.', reason: 'news 作主语时动词用单数。', rule: '先确定 deflated 是adjective，再套「泄了气的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deflated.q1', senseId: 'deflated.s1', errorType: 'meaning', type: '词义选择', prompt: '「deflated」在本条的核心意思是：', options: ['泄了气的', '完全相反的意思', '一种古代钱币'], answer: '泄了气的', explain: 'deflated：泄了气的。' },
      { id: 'deflated.q2', senseId: 'deflated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deflated?', options: ['泄了气的', 'a kind of ancient coin', 'the past tense of be'], answer: '泄了气的', explain: '对的是「泄了气的」。' },
      { id: 'deflated.q3', senseId: 'deflated.s1', errorType: 'grammar', type: '词义选择', prompt: 'deflated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deflated.q4', senseId: 'deflated.s1', errorType: 'meaning', type: '词源', prompt: '记 deflated 时，哪句更稳妥？', options: ['先锁住「泄了气的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「泄了气的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['泄了气的'] },
  });

  D('deform', {
    etymology: {
      origin: '现代英语常用词「deform」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deform', gloss: '使变形' },
      suffix: null,
      history: [
        { label: 'deform', text: '现代英语常用词「deform」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使变形。' },
      ],
      formationLogic: '核心义：使变形。',
      mnemonic: '看到 deform，先说出「使变形」。',
      note: '核心义：使变形。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deform before the office closed.', chinese: '他们同意在办公室关门前做这件事：使变形。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deform.s1', en: 'The deadline forced the team to deform that afternoon.', zh: '截止日期逼着小组在那天下午使变形。', structure: 'deform / 表示 / 使变形', grammar: 'verb，围绕「使变形」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deformed it yesterday without checking the real past form.', right: 'Check the past form of "deform" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deform 是verb，再套「使变形」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deform.q1', senseId: 'deform.s1', errorType: 'meaning', type: '词义选择', prompt: '「deform」在本条的核心意思是：', options: ['使变形', '完全相反的意思', '一种古代钱币'], answer: '使变形', explain: 'deform：使变形。' },
      { id: 'deform.q2', senseId: 'deform.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deform?', options: ['使变形', 'a kind of ancient coin', 'the past tense of be'], answer: '使变形', explain: '对的是「使变形」。' },
      { id: 'deform.q3', senseId: 'deform.s1', errorType: 'grammar', type: '词义选择', prompt: 'deform 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deform.q4', senseId: 'deform.s1', errorType: 'meaning', type: '词源', prompt: '记 deform 时，哪句更稳妥？', options: ['先锁住「使变形」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使变形」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使变形'] },
  });

  D('deft', {
    etymology: {
      origin: '现代英语常用词「deft」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deft', gloss: '灵巧的' },
      suffix: null,
      history: [
        { label: 'deft', text: '现代英语常用词「deft」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：灵巧的。' },
      ],
      formationLogic: '核心义：灵巧的。',
      mnemonic: '看到 deft，先说出「灵巧的」。',
      note: '核心义：灵巧的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deft.', chinese: '即使是初读者也能看出，这个结果是灵巧的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deft.s1', en: 'They wanted a deft answer, not a long speech.', zh: '他们要一个灵巧的的答复，不要长篇发言。', structure: 'deft / 表示 / 灵巧的', grammar: 'adjective，围绕「灵巧的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deft.', right: 'The news is deft.', reason: 'news 作主语时动词用单数。', rule: '先确定 deft 是adjective，再套「灵巧的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deft.q1', senseId: 'deft.s1', errorType: 'meaning', type: '词义选择', prompt: '「deft」在本条的核心意思是：', options: ['灵巧的', '完全相反的意思', '一种古代钱币'], answer: '灵巧的', explain: 'deft：灵巧的。' },
      { id: 'deft.q2', senseId: 'deft.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deft?', options: ['灵巧的', 'a kind of ancient coin', 'the past tense of be'], answer: '灵巧的', explain: '对的是「灵巧的」。' },
      { id: 'deft.q3', senseId: 'deft.s1', errorType: 'grammar', type: '词义选择', prompt: 'deft 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deft.q4', senseId: 'deft.s1', errorType: 'meaning', type: '词源', prompt: '记 deft 时，哪句更稳妥？', options: ['先锁住「灵巧的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灵巧的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灵巧的'] },
  });

  D('defy', {
    etymology: {
      origin: '现代英语常用词「defy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'defy', gloss: '违抗' },
      suffix: null,
      history: [
        { label: 'defy', text: '现代英语常用词「defy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：违抗。' },
      ],
      formationLogic: '核心义：违抗。',
      mnemonic: '看到 defy，先说出「违抗」。',
      note: '核心义：违抗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to defy before the office closed.', chinese: '他们同意在办公室关门前做这件事：违抗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'defy.s1', en: 'The deadline forced the team to defy that afternoon.', zh: '截止日期逼着小组在那天下午违抗。', structure: 'defy / 表示 / 违抗', grammar: 'verb，围绕「违抗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She defyed it yesterday without checking the real past form.', right: 'Check the past form of "defy" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 defy 是verb，再套「违抗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'defy.q1', senseId: 'defy.s1', errorType: 'meaning', type: '词义选择', prompt: '「defy」在本条的核心意思是：', options: ['违抗', '完全相反的意思', '一种古代钱币'], answer: '违抗', explain: 'defy：违抗。' },
      { id: 'defy.q2', senseId: 'defy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches defy?', options: ['违抗', 'a kind of ancient coin', 'the past tense of be'], answer: '违抗', explain: '对的是「违抗」。' },
      { id: 'defy.q3', senseId: 'defy.s1', errorType: 'grammar', type: '词义选择', prompt: 'defy 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'defy.q4', senseId: 'defy.s1', errorType: 'meaning', type: '词源', prompt: '记 defy 时，哪句更稳妥？', options: ['先锁住「违抗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「违抗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['违抗'] },
  });

  D('degenerate', {
    etymology: {
      origin: '现代英语常用词「degenerate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'degenerate', gloss: '退化' },
      suffix: null,
      history: [
        { label: 'degenerate', text: '现代英语常用词「degenerate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：退化。' },
      ],
      formationLogic: '核心义：退化。',
      mnemonic: '看到 degenerate，先说出「退化」。',
      note: '核心义：退化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to degenerate before the office closed.', chinese: '他们同意在办公室关门前做这件事：退化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'degenerate.s1', en: 'The deadline forced the team to degenerate that afternoon.', zh: '截止日期逼着小组在那天下午退化。', structure: 'degenerate / 表示 / 退化', grammar: 'verb，围绕「退化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She degenerateed it yesterday without checking the real past form.', right: 'Check the past form of "degenerate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 degenerate 是verb，再套「退化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'degenerate.q1', senseId: 'degenerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「degenerate」在本条的核心意思是：', options: ['退化', '完全相反的意思', '一种古代钱币'], answer: '退化', explain: 'degenerate：退化。' },
      { id: 'degenerate.q2', senseId: 'degenerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches degenerate?', options: ['退化', 'a kind of ancient coin', 'the past tense of be'], answer: '退化', explain: '对的是「退化」。' },
      { id: 'degenerate.q3', senseId: 'degenerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'degenerate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'degenerate.q4', senseId: 'degenerate.s1', errorType: 'meaning', type: '词源', prompt: '记 degenerate 时，哪句更稳妥？', options: ['先锁住「退化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「退化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['退化'] },
  });

  D('degrade', {
    etymology: {
      origin: '现代英语常用词「degrade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'degrade', gloss: '贬低' },
      suffix: null,
      history: [
        { label: 'degrade', text: '现代英语常用词「degrade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：贬低。' },
      ],
      formationLogic: '核心义：贬低。',
      mnemonic: '看到 degrade，先说出「贬低」。',
      note: '核心义：贬低。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to degrade before the office closed.', chinese: '他们同意在办公室关门前做这件事：贬低。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'degrade.s1', en: 'The deadline forced the team to degrade that afternoon.', zh: '截止日期逼着小组在那天下午贬低。', structure: 'degrade / 表示 / 贬低', grammar: 'verb，围绕「贬低」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She degradeed it yesterday without checking the real past form.', right: 'Check the past form of "degrade" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 degrade 是verb，再套「贬低」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'degrade.q1', senseId: 'degrade.s1', errorType: 'meaning', type: '词义选择', prompt: '「degrade」在本条的核心意思是：', options: ['贬低', '完全相反的意思', '一种古代钱币'], answer: '贬低', explain: 'degrade：贬低。' },
      { id: 'degrade.q2', senseId: 'degrade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches degrade?', options: ['贬低', 'a kind of ancient coin', 'the past tense of be'], answer: '贬低', explain: '对的是「贬低」。' },
      { id: 'degrade.q3', senseId: 'degrade.s1', errorType: 'grammar', type: '词义选择', prompt: 'degrade 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'degrade.q4', senseId: 'degrade.s1', errorType: 'meaning', type: '词源', prompt: '记 degrade 时，哪句更稳妥？', options: ['先锁住「贬低」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贬低」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贬低'] },
  });

  D('degree', {
    etymology: {
      origin: '拉丁语 gradus「步、级」。',
      prefix: null,
      root: { text: 'degree', gloss: '程度' },
      suffix: null,
      history: [
        { label: 'degree', text: '拉丁语 gradus「步、级」。' },
        { label: '现在', text: '核心用法是：程度。' },
      ],
      formationLogic: '考试认现在的用法：程度。',
      mnemonic: '看到 degree，先说出「程度」。',
      note: '考试认现在的用法：程度。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one degree.', chinese: '这一章反复回到同一个点：程度。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'degree.s1', en: 'Without that degree, the next paragraph is hard to follow.', zh: '没有这个程度，下一段会很难读。', structure: 'degree / 表示 / 程度', grammar: 'noun，围绕「程度」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the degree.', right: 'He gave me some advice about the degree.', reason: 'advice 不可数。名词 degree 的单复数按词典词形记。', rule: '先确定 degree 是noun，再套「程度」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'degree.q1', senseId: 'degree.s1', errorType: 'meaning', type: '词义选择', prompt: '「degree」在本条的核心意思是：', options: ['程度', '完全相反的意思', '一种古代钱币'], answer: '程度', explain: 'degree：程度。' },
      { id: 'degree.q2', senseId: 'degree.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches degree?', options: ['程度', 'a kind of ancient coin', 'the past tense of be'], answer: '程度', explain: '对的是「程度」。' },
      { id: 'degree.q3', senseId: 'degree.s1', errorType: 'grammar', type: '词义选择', prompt: 'degree 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'degree.q4', senseId: 'degree.s1', errorType: 'meaning', type: '词源', prompt: '记 degree 时，哪句更稳妥？', options: ['先锁住「程度」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「程度」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['程度'] },
  });

  D('dehydrate', {
    etymology: {
      origin: '现代英语常用词「dehydrate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dehydrate', gloss: '脱水' },
      suffix: null,
      history: [
        { label: 'dehydrate', text: '现代英语常用词「dehydrate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：脱水。' },
      ],
      formationLogic: '核心义：脱水。',
      mnemonic: '看到 dehydrate，先说出「脱水」。',
      note: '核心义：脱水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dehydrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：脱水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dehydrate.s1', en: 'The deadline forced the team to dehydrate that afternoon.', zh: '截止日期逼着小组在那天下午脱水。', structure: 'dehydrate / 表示 / 脱水', grammar: 'verb，围绕「脱水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dehydrateed it yesterday without checking the real past form.', right: 'Check the past form of "dehydrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dehydrate 是verb，再套「脱水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dehydrate.q1', senseId: 'dehydrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「dehydrate」在本条的核心意思是：', options: ['脱水', '完全相反的意思', '一种古代钱币'], answer: '脱水', explain: 'dehydrate：脱水。' },
      { id: 'dehydrate.q2', senseId: 'dehydrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dehydrate?', options: ['脱水', 'a kind of ancient coin', 'the past tense of be'], answer: '脱水', explain: '对的是「脱水」。' },
      { id: 'dehydrate.q3', senseId: 'dehydrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'dehydrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dehydrate.q4', senseId: 'dehydrate.s1', errorType: 'meaning', type: '词源', prompt: '记 dehydrate 时，哪句更稳妥？', options: ['先锁住「脱水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脱水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脱水'] },
  });

  D('deity', {
    etymology: {
      origin: '现代英语常用词「deity」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deity', gloss: '神' },
      suffix: null,
      history: [
        { label: 'deity', text: '现代英语常用词「deity」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：神。' },
      ],
      formationLogic: '核心义：神。',
      mnemonic: '看到 deity，先说出「神」。',
      note: '核心义：神。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deity.', chinese: '这一章反复回到同一个点：神。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deity.s1', en: 'Without that deity, the next paragraph is hard to follow.', zh: '没有这个神，下一段会很难读。', structure: 'deity / 表示 / 神', grammar: 'noun，围绕「神」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deity.', right: 'He gave me some advice about the deity.', reason: 'advice 不可数。名词 deity 的单复数按词典词形记。', rule: '先确定 deity 是noun，再套「神」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deity.q1', senseId: 'deity.s1', errorType: 'meaning', type: '词义选择', prompt: '「deity」在本条的核心意思是：', options: ['神', '完全相反的意思', '一种古代钱币'], answer: '神', explain: 'deity：神。' },
      { id: 'deity.q2', senseId: 'deity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deity?', options: ['神', 'a kind of ancient coin', 'the past tense of be'], answer: '神', explain: '对的是「神」。' },
      { id: 'deity.q3', senseId: 'deity.s1', errorType: 'grammar', type: '词义选择', prompt: 'deity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deity.q4', senseId: 'deity.s1', errorType: 'meaning', type: '词源', prompt: '记 deity 时，哪句更稳妥？', options: ['先锁住「神」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「神」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['神'] },
  });

  D('delay', {
    etymology: {
      origin: '古法语 delaiier。',
      prefix: null,
      root: { text: 'delay', gloss: '延误' },
      suffix: null,
      history: [
        { label: 'delay', text: '古法语 delaiier。' },
        { label: '现在', text: '核心用法是：延误。' },
      ],
      formationLogic: '考试认现在的用法：延误。',
      mnemonic: '看到 delay，先说出「延误」。',
      note: '考试认现在的用法：延误。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delay.', chinese: '这一章反复回到同一个点：延误。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delay.s1', en: 'Without that delay, the next paragraph is hard to follow.', zh: '没有这个延误，下一段会很难读。', structure: 'delay / 表示 / 延误', grammar: 'noun，围绕「延误」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delay.', right: 'He gave me some advice about the delay.', reason: 'advice 不可数。名词 delay 的单复数按词典词形记。', rule: '先确定 delay 是noun，再套「延误」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delay.q1', senseId: 'delay.s1', errorType: 'meaning', type: '词义选择', prompt: '「delay」在本条的核心意思是：', options: ['延误', '完全相反的意思', '一种古代钱币'], answer: '延误', explain: 'delay：延误。' },
      { id: 'delay.q2', senseId: 'delay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delay?', options: ['延误', 'a kind of ancient coin', 'the past tense of be'], answer: '延误', explain: '对的是「延误」。' },
      { id: 'delay.q3', senseId: 'delay.s1', errorType: 'grammar', type: '词义选择', prompt: 'delay 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delay.q4', senseId: 'delay.s1', errorType: 'meaning', type: '词源', prompt: '记 delay 时，哪句更稳妥？', options: ['先锁住「延误」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「延误」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['延误'] },
  });

  D('delayed', {
    etymology: {
      origin: '现代英语常用词「delayed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delayed', gloss: '延误的' },
      suffix: null,
      history: [
        { label: 'delayed', text: '现代英语常用词「delayed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：延误的。' },
      ],
      formationLogic: '核心义：延误的。',
      mnemonic: '看到 delayed，先说出「延误的」。',
      note: '核心义：延误的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was delayed.', chinese: '即使是初读者也能看出，这个结果是延误的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delayed.s1', en: 'They wanted a delayed answer, not a long speech.', zh: '他们要一个延误的的答复，不要长篇发言。', structure: 'delayed / 表示 / 延误的', grammar: 'adjective，围绕「延误的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are delayed.', right: 'The news is delayed.', reason: 'news 作主语时动词用单数。', rule: '先确定 delayed 是adjective，再套「延误的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delayed.q1', senseId: 'delayed.s1', errorType: 'meaning', type: '词义选择', prompt: '「delayed」在本条的核心意思是：', options: ['延误的', '完全相反的意思', '一种古代钱币'], answer: '延误的', explain: 'delayed：延误的。' },
      { id: 'delayed.q2', senseId: 'delayed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delayed?', options: ['延误的', 'a kind of ancient coin', 'the past tense of be'], answer: '延误的', explain: '对的是「延误的」。' },
      { id: 'delayed.q3', senseId: 'delayed.s1', errorType: 'grammar', type: '词义选择', prompt: 'delayed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'delayed.q4', senseId: 'delayed.s1', errorType: 'meaning', type: '词源', prompt: '记 delayed 时，哪句更稳妥？', options: ['先锁住「延误的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「延误的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['延误的'] },
  });

  D('delegate', {
    etymology: {
      origin: '现代英语常用词「delegate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delegate', gloss: '代表' },
      suffix: null,
      history: [
        { label: 'delegate', text: '现代英语常用词「delegate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：代表。' },
      ],
      formationLogic: '核心义：代表。',
      mnemonic: '看到 delegate，先说出「代表」。',
      note: '核心义：代表。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delegate.', chinese: '这一章反复回到同一个点：代表。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delegate.s1', en: 'Without that delegate, the next paragraph is hard to follow.', zh: '没有这个代表，下一段会很难读。', structure: 'delegate / 表示 / 代表', grammar: 'noun，围绕「代表」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delegate.', right: 'He gave me some advice about the delegate.', reason: 'advice 不可数。名词 delegate 的单复数按词典词形记。', rule: '先确定 delegate 是noun，再套「代表」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delegate.q1', senseId: 'delegate.s1', errorType: 'meaning', type: '词义选择', prompt: '「delegate」在本条的核心意思是：', options: ['代表', '完全相反的意思', '一种古代钱币'], answer: '代表', explain: 'delegate：代表。' },
      { id: 'delegate.q2', senseId: 'delegate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delegate?', options: ['代表', 'a kind of ancient coin', 'the past tense of be'], answer: '代表', explain: '对的是「代表」。' },
      { id: 'delegate.q3', senseId: 'delegate.s1', errorType: 'grammar', type: '词义选择', prompt: 'delegate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delegate.q4', senseId: 'delegate.s1', errorType: 'meaning', type: '词源', prompt: '记 delegate 时，哪句更稳妥？', options: ['先锁住「代表」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「代表」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['代表'] },
  });

  D('delegation', {
    etymology: {
      origin: '英语派生：delega + -tion，词性转到「委派」。',
      prefix: null,
      root: { text: 'delega', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'delegation', text: '英语派生：delega + -tion，词性转到「委派」。' },
        { label: '现在', text: '核心用法是：委派。' },
      ],
      formationLogic: '先认词干 delega，再看词尾。',
      mnemonic: '看到 delegation，先说出「委派」。',
      note: '先认词干 delega，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delegation.', chinese: '这一章反复回到同一个点：委派。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delegation.s1', en: 'Without that delegation, the next paragraph is hard to follow.', zh: '没有这个委派，下一段会很难读。', structure: 'delegation / 表示 / 委派', grammar: 'noun，围绕「委派」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delegation.', right: 'He gave me some advice about the delegation.', reason: 'advice 不可数。名词 delegation 的单复数按词典词形记。', rule: '先确定 delegation 是noun，再套「委派」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delegation.q1', senseId: 'delegation.s1', errorType: 'meaning', type: '词义选择', prompt: '「delegation」在本条的核心意思是：', options: ['委派', '完全相反的意思', '一种古代钱币'], answer: '委派', explain: 'delegation：委派。' },
      { id: 'delegation.q2', senseId: 'delegation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delegation?', options: ['委派', 'a kind of ancient coin', 'the past tense of be'], answer: '委派', explain: '对的是「委派」。' },
      { id: 'delegation.q3', senseId: 'delegation.s1', errorType: 'grammar', type: '词义选择', prompt: 'delegation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delegation.q4', senseId: 'delegation.s1', errorType: 'meaning', type: '词源', prompt: '记 delegation 时，哪句更稳妥？', options: ['先锁住「委派」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「委派」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['委派'] },
  });

  D('delete', {
    etymology: {
      origin: '拉丁语 delere「抹去」。',
      prefix: null,
      root: { text: 'delete', gloss: '删除' },
      suffix: null,
      history: [
        { label: 'delete', text: '拉丁语 delere「抹去」。' },
        { label: '现在', text: '核心用法是：删除。' },
      ],
      formationLogic: '考试认现在的用法：删除。',
      mnemonic: '看到 delete，先说出「删除」。',
      note: '考试认现在的用法：删除。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to delete before the office closed.', chinese: '他们同意在办公室关门前做这件事：删除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delete.s1', en: 'The deadline forced the team to delete that afternoon.', zh: '截止日期逼着小组在那天下午删除。', structure: 'delete / 表示 / 删除', grammar: 'verb，围绕「删除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deleteed it yesterday without checking the real past form.', right: 'Check the past form of "delete" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 delete 是verb，再套「删除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delete.q1', senseId: 'delete.s1', errorType: 'meaning', type: '词义选择', prompt: '「delete」在本条的核心意思是：', options: ['删除', '完全相反的意思', '一种古代钱币'], answer: '删除', explain: 'delete：删除。' },
      { id: 'delete.q2', senseId: 'delete.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delete?', options: ['删除', 'a kind of ancient coin', 'the past tense of be'], answer: '删除', explain: '对的是「删除」。' },
      { id: 'delete.q3', senseId: 'delete.s1', errorType: 'grammar', type: '词义选择', prompt: 'delete 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'delete.q4', senseId: 'delete.s1', errorType: 'meaning', type: '词源', prompt: '记 delete 时，哪句更稳妥？', options: ['先锁住「删除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「删除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['删除'] },
  });

  D('deliberate', {
    etymology: {
      origin: '拉丁语 deliberare「仔细称量」，libra「秤」。',
      prefix: null,
      root: { text: 'deliberate', gloss: '故意的' },
      suffix: null,
      history: [
        { label: 'deliberate', text: '拉丁语 deliberare「仔细称量」，libra「秤」。' },
        { label: '现在', text: '核心用法是：故意的。' },
      ],
      formationLogic: '考试认现在的用法：故意的。',
      mnemonic: '看到 deliberate，先说出「故意的」。',
      note: '考试认现在的用法：故意的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deliberate.', chinese: '即使是初读者也能看出，这个结果是故意的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deliberate.s1', en: 'They wanted a deliberate answer, not a long speech.', zh: '他们要一个故意的的答复，不要长篇发言。', structure: 'deliberate / 表示 / 故意的', grammar: 'adjective，围绕「故意的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deliberate.', right: 'The news is deliberate.', reason: 'news 作主语时动词用单数。', rule: '先确定 deliberate 是adjective，再套「故意的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deliberate.q1', senseId: 'deliberate.s1', errorType: 'meaning', type: '词义选择', prompt: '「deliberate」在本条的核心意思是：', options: ['故意的', '完全相反的意思', '一种古代钱币'], answer: '故意的', explain: 'deliberate：故意的。' },
      { id: 'deliberate.q2', senseId: 'deliberate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deliberate?', options: ['故意的', 'a kind of ancient coin', 'the past tense of be'], answer: '故意的', explain: '对的是「故意的」。' },
      { id: 'deliberate.q3', senseId: 'deliberate.s1', errorType: 'grammar', type: '词义选择', prompt: 'deliberate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deliberate.q4', senseId: 'deliberate.s1', errorType: 'meaning', type: '词源', prompt: '记 deliberate 时，哪句更稳妥？', options: ['先锁住「故意的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「故意的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['故意的'] },
  });

  D('delicacy', {
    etymology: {
      origin: '现代英语常用词「delicacy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delicacy', gloss: '精美' },
      suffix: null,
      history: [
        { label: 'delicacy', text: '现代英语常用词「delicacy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：精美。' },
      ],
      formationLogic: '核心义：精美。',
      mnemonic: '看到 delicacy，先说出「精美」。',
      note: '核心义：精美。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delicacy.', chinese: '这一章反复回到同一个点：精美。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delicacy.s1', en: 'Without that delicacy, the next paragraph is hard to follow.', zh: '没有这个精美，下一段会很难读。', structure: 'delicacy / 表示 / 精美', grammar: 'noun，围绕「精美」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delicacy.', right: 'He gave me some advice about the delicacy.', reason: 'advice 不可数。名词 delicacy 的单复数按词典词形记。', rule: '先确定 delicacy 是noun，再套「精美」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delicacy.q1', senseId: 'delicacy.s1', errorType: 'meaning', type: '词义选择', prompt: '「delicacy」在本条的核心意思是：', options: ['精美', '完全相反的意思', '一种古代钱币'], answer: '精美', explain: 'delicacy：精美。' },
      { id: 'delicacy.q2', senseId: 'delicacy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delicacy?', options: ['精美', 'a kind of ancient coin', 'the past tense of be'], answer: '精美', explain: '对的是「精美」。' },
      { id: 'delicacy.q3', senseId: 'delicacy.s1', errorType: 'grammar', type: '词义选择', prompt: 'delicacy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delicacy.q4', senseId: 'delicacy.s1', errorType: 'meaning', type: '词源', prompt: '记 delicacy 时，哪句更稳妥？', options: ['先锁住「精美」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精美」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精美'] },
  });

  D('delicate', {
    etymology: {
      origin: '拉丁语 delicatus「令人愉快的、娇弱的」。',
      prefix: null,
      root: { text: 'delicate', gloss: '精致的' },
      suffix: null,
      history: [
        { label: 'delicate', text: '拉丁语 delicatus「令人愉快的、娇弱的」。' },
        { label: '现在', text: '核心用法是：精致的。' },
      ],
      formationLogic: '考试认现在的用法：精致的。',
      mnemonic: '看到 delicate，先说出「精致的」。',
      note: '考试认现在的用法：精致的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was delicate.', chinese: '即使是初读者也能看出，这个结果是精致的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delicate.s1', en: 'They wanted a delicate answer, not a long speech.', zh: '他们要一个精致的的答复，不要长篇发言。', structure: 'delicate / 表示 / 精致的', grammar: 'adjective，围绕「精致的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are delicate.', right: 'The news is delicate.', reason: 'news 作主语时动词用单数。', rule: '先确定 delicate 是adjective，再套「精致的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delicate.q1', senseId: 'delicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「delicate」在本条的核心意思是：', options: ['精致的', '完全相反的意思', '一种古代钱币'], answer: '精致的', explain: 'delicate：精致的。' },
      { id: 'delicate.q2', senseId: 'delicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delicate?', options: ['精致的', 'a kind of ancient coin', 'the past tense of be'], answer: '精致的', explain: '对的是「精致的」。' },
      { id: 'delicate.q3', senseId: 'delicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'delicate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'delicate.q4', senseId: 'delicate.s1', errorType: 'meaning', type: '词源', prompt: '记 delicate 时，哪句更稳妥？', options: ['先锁住「精致的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精致的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精致的'] },
  });

  D('delicatessen', {
    etymology: {
      origin: '现代英语常用词「delicatessen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delicatessen', gloss: '熟食店' },
      suffix: null,
      history: [
        { label: 'delicatessen', text: '现代英语常用词「delicatessen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：熟食店。' },
      ],
      formationLogic: '核心义：熟食店。',
      mnemonic: '看到 delicatessen，先说出「熟食店」。',
      note: '核心义：熟食店。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delicatessen.', chinese: '这一章反复回到同一个点：熟食店。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delicatessen.s1', en: 'Without that delicatessen, the next paragraph is hard to follow.', zh: '没有这个熟食店，下一段会很难读。', structure: 'delicatessen / 表示 / 熟食店', grammar: 'noun，围绕「熟食店」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delicatessen.', right: 'He gave me some advice about the delicatessen.', reason: 'advice 不可数。名词 delicatessen 的单复数按词典词形记。', rule: '先确定 delicatessen 是noun，再套「熟食店」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delicatessen.q1', senseId: 'delicatessen.s1', errorType: 'meaning', type: '词义选择', prompt: '「delicatessen」在本条的核心意思是：', options: ['熟食店', '完全相反的意思', '一种古代钱币'], answer: '熟食店', explain: 'delicatessen：熟食店。' },
      { id: 'delicatessen.q2', senseId: 'delicatessen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delicatessen?', options: ['熟食店', 'a kind of ancient coin', 'the past tense of be'], answer: '熟食店', explain: '对的是「熟食店」。' },
      { id: 'delicatessen.q3', senseId: 'delicatessen.s1', errorType: 'grammar', type: '词义选择', prompt: 'delicatessen 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delicatessen.q4', senseId: 'delicatessen.s1', errorType: 'meaning', type: '词源', prompt: '记 delicatessen 时，哪句更稳妥？', options: ['先锁住「熟食店」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「熟食店」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['熟食店'] },
  });

  D('delicious', {
    etymology: {
      origin: '英语派生：delici + -ous，词性转到「美味的」。',
      prefix: null,
      root: { text: 'delici', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'delicious', text: '英语派生：delici + -ous，词性转到「美味的」。' },
        { label: '现在', text: '核心用法是：美味的。' },
      ],
      formationLogic: '先认词干 delici，再看词尾。',
      mnemonic: '看到 delicious，先说出「美味的」。',
      note: '先认词干 delici，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was delicious.', chinese: '即使是初读者也能看出，这个结果是美味的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delicious.s1', en: 'They wanted a delicious answer, not a long speech.', zh: '他们要一个美味的的答复，不要长篇发言。', structure: 'delicious / 表示 / 美味的', grammar: 'adjective，围绕「美味的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are delicious.', right: 'The news is delicious.', reason: 'news 作主语时动词用单数。', rule: '先确定 delicious 是adjective，再套「美味的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delicious.q1', senseId: 'delicious.s1', errorType: 'meaning', type: '词义选择', prompt: '「delicious」在本条的核心意思是：', options: ['美味的', '完全相反的意思', '一种古代钱币'], answer: '美味的', explain: 'delicious：美味的。' },
      { id: 'delicious.q2', senseId: 'delicious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delicious?', options: ['美味的', 'a kind of ancient coin', 'the past tense of be'], answer: '美味的', explain: '对的是「美味的」。' },
      { id: 'delicious.q3', senseId: 'delicious.s1', errorType: 'grammar', type: '词义选择', prompt: 'delicious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'delicious.q4', senseId: 'delicious.s1', errorType: 'meaning', type: '词源', prompt: '记 delicious 时，哪句更稳妥？', options: ['先锁住「美味的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「美味的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['美味的'] },
  });

  D('delight', {
    etymology: {
      origin: '拉丁语 delectare「使愉快」。',
      prefix: null,
      root: { text: 'delight', gloss: '高兴' },
      suffix: null,
      history: [
        { label: 'delight', text: '拉丁语 delectare「使愉快」。' },
        { label: '现在', text: '核心用法是：高兴。' },
      ],
      formationLogic: '考试认现在的用法：高兴。',
      mnemonic: '看到 delight，先说出「高兴」。',
      note: '考试认现在的用法：高兴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delight.', chinese: '这一章反复回到同一个点：高兴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delight.s1', en: 'Without that delight, the next paragraph is hard to follow.', zh: '没有这个高兴，下一段会很难读。', structure: 'delight / 表示 / 高兴', grammar: 'noun，围绕「高兴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delight.', right: 'He gave me some advice about the delight.', reason: 'advice 不可数。名词 delight 的单复数按词典词形记。', rule: '先确定 delight 是noun，再套「高兴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delight.q1', senseId: 'delight.s1', errorType: 'meaning', type: '词义选择', prompt: '「delight」在本条的核心意思是：', options: ['高兴', '完全相反的意思', '一种古代钱币'], answer: '高兴', explain: 'delight：高兴。' },
      { id: 'delight.q2', senseId: 'delight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delight?', options: ['高兴', 'a kind of ancient coin', 'the past tense of be'], answer: '高兴', explain: '对的是「高兴」。' },
      { id: 'delight.q3', senseId: 'delight.s1', errorType: 'grammar', type: '词义选择', prompt: 'delight 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delight.q4', senseId: 'delight.s1', errorType: 'meaning', type: '词源', prompt: '记 delight 时，哪句更稳妥？', options: ['先锁住「高兴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「高兴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高兴'] },
  });

  D('delimit', {
    etymology: {
      origin: '现代英语常用词「delimit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delimit', gloss: '划定界限' },
      suffix: null,
      history: [
        { label: 'delimit', text: '现代英语常用词「delimit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：划定界限。' },
      ],
      formationLogic: '核心义：划定界限。',
      mnemonic: '看到 delimit，先说出「划定界限」。',
      note: '核心义：划定界限。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to delimit before the office closed.', chinese: '他们同意在办公室关门前做这件事：划定界限。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delimit.s1', en: 'The deadline forced the team to delimit that afternoon.', zh: '截止日期逼着小组在那天下午划定界限。', structure: 'delimit / 表示 / 划定界限', grammar: 'verb，围绕「划定界限」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She delimited it yesterday without checking the real past form.', right: 'Check the past form of "delimit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 delimit 是verb，再套「划定界限」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delimit.q1', senseId: 'delimit.s1', errorType: 'meaning', type: '词义选择', prompt: '「delimit」在本条的核心意思是：', options: ['划定界限', '完全相反的意思', '一种古代钱币'], answer: '划定界限', explain: 'delimit：划定界限。' },
      { id: 'delimit.q2', senseId: 'delimit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delimit?', options: ['划定界限', 'a kind of ancient coin', 'the past tense of be'], answer: '划定界限', explain: '对的是「划定界限」。' },
      { id: 'delimit.q3', senseId: 'delimit.s1', errorType: 'grammar', type: '词义选择', prompt: 'delimit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'delimit.q4', senseId: 'delimit.s1', errorType: 'meaning', type: '词源', prompt: '记 delimit 时，哪句更稳妥？', options: ['先锁住「划定界限」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「划定界限」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['划定界限'] },
  });

  D('deliver', {
    etymology: {
      origin: '拉丁语 deliberare 之外，常用来源是 de + liberare「使自由、交出」。',
      prefix: null,
      root: { text: 'deliver', gloss: '递送' },
      suffix: null,
      history: [
        { label: 'deliver', text: '拉丁语 deliberare 之外，常用来源是 de + liberare「使自由、交出」。' },
        { label: '现在', text: '核心用法是：递送。' },
      ],
      formationLogic: '考试认现在的用法：递送。',
      mnemonic: '看到 deliver，先说出「递送」。',
      note: '考试认现在的用法：递送。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deliver before the office closed.', chinese: '他们同意在办公室关门前做这件事：递送。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deliver.s1', en: 'The deadline forced the team to deliver that afternoon.', zh: '截止日期逼着小组在那天下午递送。', structure: 'deliver / 表示 / 递送', grammar: 'verb，围绕「递送」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She delivered it yesterday without checking the real past form.', right: 'Check the past form of "deliver" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deliver 是verb，再套「递送」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deliver.q1', senseId: 'deliver.s1', errorType: 'meaning', type: '词义选择', prompt: '「deliver」在本条的核心意思是：', options: ['递送', '完全相反的意思', '一种古代钱币'], answer: '递送', explain: 'deliver：递送。' },
      { id: 'deliver.q2', senseId: 'deliver.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deliver?', options: ['递送', 'a kind of ancient coin', 'the past tense of be'], answer: '递送', explain: '对的是「递送」。' },
      { id: 'deliver.q3', senseId: 'deliver.s1', errorType: 'grammar', type: '词义选择', prompt: 'deliver 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deliver.q4', senseId: 'deliver.s1', errorType: 'meaning', type: '词源', prompt: '记 deliver 时，哪句更稳妥？', options: ['先锁住「递送」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「递送」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['递送'] },
  });

  D('deliverance', {
    etymology: {
      origin: '英语派生：deliver + -ance，词性转到「解救」。',
      prefix: null,
      root: { text: 'deliver', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deliverance', text: '英语派生：deliver + -ance，词性转到「解救」。' },
        { label: '现在', text: '核心用法是：解救。' },
      ],
      formationLogic: '先认词干 deliver，再看词尾。',
      mnemonic: '看到 deliverance，先说出「解救」。',
      note: '先认词干 deliver，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deliverance.', chinese: '这一章反复回到同一个点：解救。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deliverance.s1', en: 'Without that deliverance, the next paragraph is hard to follow.', zh: '没有这个解救，下一段会很难读。', structure: 'deliverance / 表示 / 解救', grammar: 'noun，围绕「解救」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deliverance.', right: 'He gave me some advice about the deliverance.', reason: 'advice 不可数。名词 deliverance 的单复数按词典词形记。', rule: '先确定 deliverance 是noun，再套「解救」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deliverance.q1', senseId: 'deliverance.s1', errorType: 'meaning', type: '词义选择', prompt: '「deliverance」在本条的核心意思是：', options: ['解救', '完全相反的意思', '一种古代钱币'], answer: '解救', explain: 'deliverance：解救。' },
      { id: 'deliverance.q2', senseId: 'deliverance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deliverance?', options: ['解救', 'a kind of ancient coin', 'the past tense of be'], answer: '解救', explain: '对的是「解救」。' },
      { id: 'deliverance.q3', senseId: 'deliverance.s1', errorType: 'grammar', type: '词义选择', prompt: 'deliverance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deliverance.q4', senseId: 'deliverance.s1', errorType: 'meaning', type: '词源', prompt: '记 deliverance 时，哪句更稳妥？', options: ['先锁住「解救」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解救」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解救'] },
  });

  D('delivery', {
    etymology: {
      origin: '现代英语常用词「delivery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delivery', gloss: '递送' },
      suffix: null,
      history: [
        { label: 'delivery', text: '现代英语常用词「delivery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：递送。' },
      ],
      formationLogic: '核心义：递送。',
      mnemonic: '看到 delivery，先说出「递送」。',
      note: '核心义：递送。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delivery.', chinese: '这一章反复回到同一个点：递送。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delivery.s1', en: 'Without that delivery, the next paragraph is hard to follow.', zh: '没有这个递送，下一段会很难读。', structure: 'delivery / 表示 / 递送', grammar: 'noun，围绕「递送」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delivery.', right: 'He gave me some advice about the delivery.', reason: 'advice 不可数。名词 delivery 的单复数按词典词形记。', rule: '先确定 delivery 是noun，再套「递送」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delivery.q1', senseId: 'delivery.s1', errorType: 'meaning', type: '词义选择', prompt: '「delivery」在本条的核心意思是：', options: ['递送', '完全相反的意思', '一种古代钱币'], answer: '递送', explain: 'delivery：递送。' },
      { id: 'delivery.q2', senseId: 'delivery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delivery?', options: ['递送', 'a kind of ancient coin', 'the past tense of be'], answer: '递送', explain: '对的是「递送」。' },
      { id: 'delivery.q3', senseId: 'delivery.s1', errorType: 'grammar', type: '词义选择', prompt: 'delivery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delivery.q4', senseId: 'delivery.s1', errorType: 'meaning', type: '词源', prompt: '记 delivery 时，哪句更稳妥？', options: ['先锁住「递送」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「递送」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['递送'] },
  });

  D('delude', {
    etymology: {
      origin: '现代英语常用词「delude」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'delude', gloss: '欺骗' },
      suffix: null,
      history: [
        { label: 'delude', text: '现代英语常用词「delude」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：欺骗。' },
      ],
      formationLogic: '核心义：欺骗。',
      mnemonic: '看到 delude，先说出「欺骗」。',
      note: '核心义：欺骗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to delude before the office closed.', chinese: '他们同意在办公室关门前做这件事：欺骗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delude.s1', en: 'The deadline forced the team to delude that afternoon.', zh: '截止日期逼着小组在那天下午欺骗。', structure: 'delude / 表示 / 欺骗', grammar: 'verb，围绕「欺骗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deludeed it yesterday without checking the real past form.', right: 'Check the past form of "delude" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 delude 是verb，再套「欺骗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delude.q1', senseId: 'delude.s1', errorType: 'meaning', type: '词义选择', prompt: '「delude」在本条的核心意思是：', options: ['欺骗', '完全相反的意思', '一种古代钱币'], answer: '欺骗', explain: 'delude：欺骗。' },
      { id: 'delude.q2', senseId: 'delude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delude?', options: ['欺骗', 'a kind of ancient coin', 'the past tense of be'], answer: '欺骗', explain: '对的是「欺骗」。' },
      { id: 'delude.q3', senseId: 'delude.s1', errorType: 'grammar', type: '词义选择', prompt: 'delude 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'delude.q4', senseId: 'delude.s1', errorType: 'meaning', type: '词源', prompt: '记 delude 时，哪句更稳妥？', options: ['先锁住「欺骗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欺骗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欺骗'] },
  });

  D('deluge', {
    etymology: {
      origin: '现代英语常用词「deluge」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deluge', gloss: '洪水' },
      suffix: null,
      history: [
        { label: 'deluge', text: '现代英语常用词「deluge」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：洪水。' },
      ],
      formationLogic: '核心义：洪水。',
      mnemonic: '看到 deluge，先说出「洪水」。',
      note: '核心义：洪水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deluge.', chinese: '这一章反复回到同一个点：洪水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deluge.s1', en: 'Without that deluge, the next paragraph is hard to follow.', zh: '没有这个洪水，下一段会很难读。', structure: 'deluge / 表示 / 洪水', grammar: 'noun，围绕「洪水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deluge.', right: 'He gave me some advice about the deluge.', reason: 'advice 不可数。名词 deluge 的单复数按词典词形记。', rule: '先确定 deluge 是noun，再套「洪水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deluge.q1', senseId: 'deluge.s1', errorType: 'meaning', type: '词义选择', prompt: '「deluge」在本条的核心意思是：', options: ['洪水', '完全相反的意思', '一种古代钱币'], answer: '洪水', explain: 'deluge：洪水。' },
      { id: 'deluge.q2', senseId: 'deluge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deluge?', options: ['洪水', 'a kind of ancient coin', 'the past tense of be'], answer: '洪水', explain: '对的是「洪水」。' },
      { id: 'deluge.q3', senseId: 'deluge.s1', errorType: 'grammar', type: '词义选择', prompt: 'deluge 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deluge.q4', senseId: 'deluge.s1', errorType: 'meaning', type: '词源', prompt: '记 deluge 时，哪句更稳妥？', options: ['先锁住「洪水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洪水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洪水'] },
  });

  D('delusion', {
    etymology: {
      origin: '英语派生：delu + -sion，词性转到「错觉」。',
      prefix: null,
      root: { text: 'delu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'delusion', text: '英语派生：delu + -sion，词性转到「错觉」。' },
        { label: '现在', text: '核心用法是：错觉。' },
      ],
      formationLogic: '先认词干 delu，再看词尾。',
      mnemonic: '看到 delusion，先说出「错觉」。',
      note: '先认词干 delu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one delusion.', chinese: '这一章反复回到同一个点：错觉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'delusion.s1', en: 'Without that delusion, the next paragraph is hard to follow.', zh: '没有这个错觉，下一段会很难读。', structure: 'delusion / 表示 / 错觉', grammar: 'noun，围绕「错觉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the delusion.', right: 'He gave me some advice about the delusion.', reason: 'advice 不可数。名词 delusion 的单复数按词典词形记。', rule: '先确定 delusion 是noun，再套「错觉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'delusion.q1', senseId: 'delusion.s1', errorType: 'meaning', type: '词义选择', prompt: '「delusion」在本条的核心意思是：', options: ['错觉', '完全相反的意思', '一种古代钱币'], answer: '错觉', explain: 'delusion：错觉。' },
      { id: 'delusion.q2', senseId: 'delusion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches delusion?', options: ['错觉', 'a kind of ancient coin', 'the past tense of be'], answer: '错觉', explain: '对的是「错觉」。' },
      { id: 'delusion.q3', senseId: 'delusion.s1', errorType: 'grammar', type: '词义选择', prompt: 'delusion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'delusion.q4', senseId: 'delusion.s1', errorType: 'meaning', type: '词源', prompt: '记 delusion 时，哪句更稳妥？', options: ['先锁住「错觉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「错觉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['错觉'] },
  });

  D('deluxe', {
    etymology: {
      origin: '现代英语常用词「deluxe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deluxe', gloss: '豪华的' },
      suffix: null,
      history: [
        { label: 'deluxe', text: '现代英语常用词「deluxe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：豪华的。' },
      ],
      formationLogic: '核心义：豪华的。',
      mnemonic: '看到 deluxe，先说出「豪华的」。',
      note: '核心义：豪华的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deluxe.', chinese: '即使是初读者也能看出，这个结果是豪华的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deluxe.s1', en: 'They wanted a deluxe answer, not a long speech.', zh: '他们要一个豪华的的答复，不要长篇发言。', structure: 'deluxe / 表示 / 豪华的', grammar: 'adjective，围绕「豪华的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deluxe.', right: 'The news is deluxe.', reason: 'news 作主语时动词用单数。', rule: '先确定 deluxe 是adjective，再套「豪华的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deluxe.q1', senseId: 'deluxe.s1', errorType: 'meaning', type: '词义选择', prompt: '「deluxe」在本条的核心意思是：', options: ['豪华的', '完全相反的意思', '一种古代钱币'], answer: '豪华的', explain: 'deluxe：豪华的。' },
      { id: 'deluxe.q2', senseId: 'deluxe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deluxe?', options: ['豪华的', 'a kind of ancient coin', 'the past tense of be'], answer: '豪华的', explain: '对的是「豪华的」。' },
      { id: 'deluxe.q3', senseId: 'deluxe.s1', errorType: 'grammar', type: '词义选择', prompt: 'deluxe 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deluxe.q4', senseId: 'deluxe.s1', errorType: 'meaning', type: '词源', prompt: '记 deluxe 时，哪句更稳妥？', options: ['先锁住「豪华的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「豪华的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['豪华的'] },
  });

  D('demand', {
    etymology: {
      origin: '拉丁语 demandare「交托、要求」。',
      prefix: null,
      root: { text: 'demand', gloss: '要求' },
      suffix: null,
      history: [
        { label: 'demand', text: '拉丁语 demandare「交托、要求」。' },
        { label: '现在', text: '核心用法是：要求。' },
      ],
      formationLogic: '考试认现在的用法：要求。',
      mnemonic: '看到 demand，先说出「要求」。',
      note: '考试认现在的用法：要求。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one demand.', chinese: '这一章反复回到同一个点：要求。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demand.s1', en: 'Without that demand, the next paragraph is hard to follow.', zh: '没有这个要求，下一段会很难读。', structure: 'demand / 表示 / 要求', grammar: 'noun，围绕「要求」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the demand.', right: 'He gave me some advice about the demand.', reason: 'advice 不可数。名词 demand 的单复数按词典词形记。', rule: '先确定 demand 是noun，再套「要求」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demand.q1', senseId: 'demand.s1', errorType: 'meaning', type: '词义选择', prompt: '「demand」在本条的核心意思是：', options: ['要求', '完全相反的意思', '一种古代钱币'], answer: '要求', explain: 'demand：要求。' },
      { id: 'demand.q2', senseId: 'demand.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demand?', options: ['要求', 'a kind of ancient coin', 'the past tense of be'], answer: '要求', explain: '对的是「要求」。' },
      { id: 'demand.q3', senseId: 'demand.s1', errorType: 'grammar', type: '词义选择', prompt: 'demand 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'demand.q4', senseId: 'demand.s1', errorType: 'meaning', type: '词源', prompt: '记 demand 时，哪句更稳妥？', options: ['先锁住「要求」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「要求」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['要求'] },
  });

  D('demanding', {
    etymology: {
      origin: '英语派生：demand + -ing，词性转到「费力的」。',
      prefix: null,
      root: { text: 'demand', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'demanding', text: '英语派生：demand + -ing，词性转到「费力的」。' },
        { label: '现在', text: '核心用法是：费力的。' },
      ],
      formationLogic: '先认词干 demand，再看词尾。',
      mnemonic: '看到 demanding，先说出「费力的」。',
      note: '先认词干 demand，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was demanding.', chinese: '即使是初读者也能看出，这个结果是费力的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demanding.s1', en: 'They wanted a demanding answer, not a long speech.', zh: '他们要一个费力的的答复，不要长篇发言。', structure: 'demanding / 表示 / 费力的', grammar: 'adjective，围绕「费力的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are demanding.', right: 'The news is demanding.', reason: 'news 作主语时动词用单数。', rule: '先确定 demanding 是adjective，再套「费力的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demanding.q1', senseId: 'demanding.s1', errorType: 'meaning', type: '词义选择', prompt: '「demanding」在本条的核心意思是：', options: ['费力的', '完全相反的意思', '一种古代钱币'], answer: '费力的', explain: 'demanding：费力的。' },
      { id: 'demanding.q2', senseId: 'demanding.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demanding?', options: ['费力的', 'a kind of ancient coin', 'the past tense of be'], answer: '费力的', explain: '对的是「费力的」。' },
      { id: 'demanding.q3', senseId: 'demanding.s1', errorType: 'grammar', type: '词义选择', prompt: 'demanding 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'demanding.q4', senseId: 'demanding.s1', errorType: 'meaning', type: '词源', prompt: '记 demanding 时，哪句更稳妥？', options: ['先锁住「费力的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「费力的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['费力的'] },
  });

  D('demean', {
    etymology: {
      origin: '现代英语常用词「demean」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demean', gloss: '贬低' },
      suffix: null,
      history: [
        { label: 'demean', text: '现代英语常用词「demean」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：贬低。' },
      ],
      formationLogic: '核心义：贬低。',
      mnemonic: '看到 demean，先说出「贬低」。',
      note: '核心义：贬低。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to demean before the office closed.', chinese: '他们同意在办公室关门前做这件事：贬低。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demean.s1', en: 'The deadline forced the team to demean that afternoon.', zh: '截止日期逼着小组在那天下午贬低。', structure: 'demean / 表示 / 贬低', grammar: 'verb，围绕「贬低」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She demeaned it yesterday without checking the real past form.', right: 'Check the past form of "demean" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 demean 是verb，再套「贬低」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demean.q1', senseId: 'demean.s1', errorType: 'meaning', type: '词义选择', prompt: '「demean」在本条的核心意思是：', options: ['贬低', '完全相反的意思', '一种古代钱币'], answer: '贬低', explain: 'demean：贬低。' },
      { id: 'demean.q2', senseId: 'demean.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demean?', options: ['贬低', 'a kind of ancient coin', 'the past tense of be'], answer: '贬低', explain: '对的是「贬低」。' },
      { id: 'demean.q3', senseId: 'demean.s1', errorType: 'grammar', type: '词义选择', prompt: 'demean 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'demean.q4', senseId: 'demean.s1', errorType: 'meaning', type: '词源', prompt: '记 demean 时，哪句更稳妥？', options: ['先锁住「贬低」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贬低」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贬低'] },
  });

  D('demeanor', {
    etymology: {
      origin: '英语派生：demean + -or，词性转到「举止」。',
      prefix: null,
      root: { text: 'demean', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'demeanor', text: '英语派生：demean + -or，词性转到「举止」。' },
        { label: '现在', text: '核心用法是：举止。' },
      ],
      formationLogic: '先认词干 demean，再看词尾。',
      mnemonic: '看到 demeanor，先说出「举止」。',
      note: '先认词干 demean，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one demeanor.', chinese: '这一章反复回到同一个点：举止。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demeanor.s1', en: 'Without that demeanor, the next paragraph is hard to follow.', zh: '没有这个举止，下一段会很难读。', structure: 'demeanor / 表示 / 举止', grammar: 'noun，围绕「举止」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the demeanor.', right: 'He gave me some advice about the demeanor.', reason: 'advice 不可数。名词 demeanor 的单复数按词典词形记。', rule: '先确定 demeanor 是noun，再套「举止」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demeanor.q1', senseId: 'demeanor.s1', errorType: 'meaning', type: '词义选择', prompt: '「demeanor」在本条的核心意思是：', options: ['举止', '完全相反的意思', '一种古代钱币'], answer: '举止', explain: 'demeanor：举止。' },
      { id: 'demeanor.q2', senseId: 'demeanor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demeanor?', options: ['举止', 'a kind of ancient coin', 'the past tense of be'], answer: '举止', explain: '对的是「举止」。' },
      { id: 'demeanor.q3', senseId: 'demeanor.s1', errorType: 'grammar', type: '词义选择', prompt: 'demeanor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'demeanor.q4', senseId: 'demeanor.s1', errorType: 'meaning', type: '词源', prompt: '记 demeanor 时，哪句更稳妥？', options: ['先锁住「举止」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「举止」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['举止'] },
  });

  D('demilitarise', {
    etymology: {
      origin: '现代英语常用词「demilitarise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demilitarise', gloss: '使非军事化' },
      suffix: null,
      history: [
        { label: 'demilitarise', text: '现代英语常用词「demilitarise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使非军事化。' },
      ],
      formationLogic: '核心义：使非军事化。',
      mnemonic: '看到 demilitarise，先说出「使非军事化」。',
      note: '核心义：使非军事化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to demilitarise before the office closed.', chinese: '他们同意在办公室关门前做这件事：使非军事化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demilitarise.s1', en: 'The deadline forced the team to demilitarise that afternoon.', zh: '截止日期逼着小组在那天下午使非军事化。', structure: 'demilitarise / 表示 / 使非军事化', grammar: 'verb，围绕「使非军事化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She demilitariseed it yesterday without checking the real past form.', right: 'Check the past form of "demilitarise" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 demilitarise 是verb，再套「使非军事化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demilitarise.q1', senseId: 'demilitarise.s1', errorType: 'meaning', type: '词义选择', prompt: '「demilitarise」在本条的核心意思是：', options: ['使非军事化', '完全相反的意思', '一种古代钱币'], answer: '使非军事化', explain: 'demilitarise：使非军事化。' },
      { id: 'demilitarise.q2', senseId: 'demilitarise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demilitarise?', options: ['使非军事化', 'a kind of ancient coin', 'the past tense of be'], answer: '使非军事化', explain: '对的是「使非军事化」。' },
      { id: 'demilitarise.q3', senseId: 'demilitarise.s1', errorType: 'grammar', type: '词义选择', prompt: 'demilitarise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'demilitarise.q4', senseId: 'demilitarise.s1', errorType: 'meaning', type: '词源', prompt: '记 demilitarise 时，哪句更稳妥？', options: ['先锁住「使非军事化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使非军事化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使非军事化'] },
  });

  D('demise', {
    etymology: {
      origin: '现代英语常用词「demise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demise', gloss: '终结' },
      suffix: null,
      history: [
        { label: 'demise', text: '现代英语常用词「demise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：终结。' },
      ],
      formationLogic: '核心义：终结。',
      mnemonic: '看到 demise，先说出「终结」。',
      note: '核心义：终结。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one demise.', chinese: '这一章反复回到同一个点：终结。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demise.s1', en: 'Without that demise, the next paragraph is hard to follow.', zh: '没有这个终结，下一段会很难读。', structure: 'demise / 表示 / 终结', grammar: 'noun，围绕「终结」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the demise.', right: 'He gave me some advice about the demise.', reason: 'advice 不可数。名词 demise 的单复数按词典词形记。', rule: '先确定 demise 是noun，再套「终结」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demise.q1', senseId: 'demise.s1', errorType: 'meaning', type: '词义选择', prompt: '「demise」在本条的核心意思是：', options: ['终结', '完全相反的意思', '一种古代钱币'], answer: '终结', explain: 'demise：终结。' },
      { id: 'demise.q2', senseId: 'demise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demise?', options: ['终结', 'a kind of ancient coin', 'the past tense of be'], answer: '终结', explain: '对的是「终结」。' },
      { id: 'demise.q3', senseId: 'demise.s1', errorType: 'grammar', type: '词义选择', prompt: 'demise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'demise.q4', senseId: 'demise.s1', errorType: 'meaning', type: '词源', prompt: '记 demise 时，哪句更稳妥？', options: ['先锁住「终结」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「终结」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['终结'] },
  });

  D('demobilise', {
    etymology: {
      origin: '现代英语常用词「demobilise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demobilise', gloss: '复员' },
      suffix: null,
      history: [
        { label: 'demobilise', text: '现代英语常用词「demobilise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：复员。' },
      ],
      formationLogic: '核心义：复员。',
      mnemonic: '看到 demobilise，先说出「复员」。',
      note: '核心义：复员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to demobilise before the office closed.', chinese: '他们同意在办公室关门前做这件事：复员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demobilise.s1', en: 'The deadline forced the team to demobilise that afternoon.', zh: '截止日期逼着小组在那天下午复员。', structure: 'demobilise / 表示 / 复员', grammar: 'verb，围绕「复员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She demobiliseed it yesterday without checking the real past form.', right: 'Check the past form of "demobilise" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 demobilise 是verb，再套「复员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demobilise.q1', senseId: 'demobilise.s1', errorType: 'meaning', type: '词义选择', prompt: '「demobilise」在本条的核心意思是：', options: ['复员', '完全相反的意思', '一种古代钱币'], answer: '复员', explain: 'demobilise：复员。' },
      { id: 'demobilise.q2', senseId: 'demobilise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demobilise?', options: ['复员', 'a kind of ancient coin', 'the past tense of be'], answer: '复员', explain: '对的是「复员」。' },
      { id: 'demobilise.q3', senseId: 'demobilise.s1', errorType: 'grammar', type: '词义选择', prompt: 'demobilise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'demobilise.q4', senseId: 'demobilise.s1', errorType: 'meaning', type: '词源', prompt: '记 demobilise 时，哪句更稳妥？', options: ['先锁住「复员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复员'] },
  });

  D('democracy', {
    etymology: {
      origin: '希腊语 demokratia：demos「人民」+ kratos「力量」。',
      prefix: null,
      root: { text: 'democracy', gloss: '民主' },
      suffix: null,
      history: [
        { label: 'democracy', text: '希腊语 demokratia：demos「人民」+ kratos「力量」。' },
        { label: '现在', text: '核心用法是：民主。' },
      ],
      formationLogic: '考试认现在的用法：民主。',
      mnemonic: '看到 democracy，先说出「民主」。',
      note: '考试认现在的用法：民主。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one democracy.', chinese: '这一章反复回到同一个点：民主。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'democracy.s1', en: 'Without that democracy, the next paragraph is hard to follow.', zh: '没有这个民主，下一段会很难读。', structure: 'democracy / 表示 / 民主', grammar: 'noun，围绕「民主」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the democracy.', right: 'He gave me some advice about the democracy.', reason: 'advice 不可数。名词 democracy 的单复数按词典词形记。', rule: '先确定 democracy 是noun，再套「民主」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'democracy.q1', senseId: 'democracy.s1', errorType: 'meaning', type: '词义选择', prompt: '「democracy」在本条的核心意思是：', options: ['民主', '完全相反的意思', '一种古代钱币'], answer: '民主', explain: 'democracy：民主。' },
      { id: 'democracy.q2', senseId: 'democracy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches democracy?', options: ['民主', 'a kind of ancient coin', 'the past tense of be'], answer: '民主', explain: '对的是「民主」。' },
      { id: 'democracy.q3', senseId: 'democracy.s1', errorType: 'grammar', type: '词义选择', prompt: 'democracy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'democracy.q4', senseId: 'democracy.s1', errorType: 'meaning', type: '词源', prompt: '记 democracy 时，哪句更稳妥？', options: ['先锁住「民主」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「民主」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['民主'] },
  });

  D('demographic', {
    etymology: {
      origin: '英语派生：demograph + -ic，词性转到「人口统计的」。',
      prefix: null,
      root: { text: 'demograph', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'demographic', text: '英语派生：demograph + -ic，词性转到「人口统计的」。' },
        { label: '现在', text: '核心用法是：人口统计的。' },
      ],
      formationLogic: '先认词干 demograph，再看词尾。',
      mnemonic: '看到 demographic，先说出「人口统计的」。',
      note: '先认词干 demograph，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was demographic.', chinese: '即使是初读者也能看出，这个结果是人口统计的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demographic.s1', en: 'They wanted a demographic answer, not a long speech.', zh: '他们要一个人口统计的的答复，不要长篇发言。', structure: 'demographic / 表示 / 人口统计的', grammar: 'adjective，围绕「人口统计的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are demographic.', right: 'The news is demographic.', reason: 'news 作主语时动词用单数。', rule: '先确定 demographic 是adjective，再套「人口统计的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demographic.q1', senseId: 'demographic.s1', errorType: 'meaning', type: '词义选择', prompt: '「demographic」在本条的核心意思是：', options: ['人口统计的', '完全相反的意思', '一种古代钱币'], answer: '人口统计的', explain: 'demographic：人口统计的。' },
      { id: 'demographic.q2', senseId: 'demographic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demographic?', options: ['人口统计的', 'a kind of ancient coin', 'the past tense of be'], answer: '人口统计的', explain: '对的是「人口统计的」。' },
      { id: 'demographic.q3', senseId: 'demographic.s1', errorType: 'grammar', type: '词义选择', prompt: 'demographic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'demographic.q4', senseId: 'demographic.s1', errorType: 'meaning', type: '词源', prompt: '记 demographic 时，哪句更稳妥？', options: ['先锁住「人口统计的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人口统计的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人口统计的'] },
  });

  D('demolish', {
    etymology: {
      origin: '现代英语常用词「demolish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demolish', gloss: '拆毁' },
      suffix: null,
      history: [
        { label: 'demolish', text: '现代英语常用词「demolish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拆毁。' },
      ],
      formationLogic: '核心义：拆毁。',
      mnemonic: '看到 demolish，先说出「拆毁」。',
      note: '核心义：拆毁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to demolish before the office closed.', chinese: '他们同意在办公室关门前做这件事：拆毁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demolish.s1', en: 'The deadline forced the team to demolish that afternoon.', zh: '截止日期逼着小组在那天下午拆毁。', structure: 'demolish / 表示 / 拆毁', grammar: 'verb，围绕「拆毁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She demolished it yesterday without checking the real past form.', right: 'Check the past form of "demolish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 demolish 是verb，再套「拆毁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demolish.q1', senseId: 'demolish.s1', errorType: 'meaning', type: '词义选择', prompt: '「demolish」在本条的核心意思是：', options: ['拆毁', '完全相反的意思', '一种古代钱币'], answer: '拆毁', explain: 'demolish：拆毁。' },
      { id: 'demolish.q2', senseId: 'demolish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demolish?', options: ['拆毁', 'a kind of ancient coin', 'the past tense of be'], answer: '拆毁', explain: '对的是「拆毁」。' },
      { id: 'demolish.q3', senseId: 'demolish.s1', errorType: 'grammar', type: '词义选择', prompt: 'demolish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'demolish.q4', senseId: 'demolish.s1', errorType: 'meaning', type: '词源', prompt: '记 demolish 时，哪句更稳妥？', options: ['先锁住「拆毁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拆毁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拆毁'] },
  });

  D('demon', {
    etymology: {
      origin: '现代英语常用词「demon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demon', gloss: '恶魔' },
      suffix: null,
      history: [
        { label: 'demon', text: '现代英语常用词「demon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：恶魔。' },
      ],
      formationLogic: '核心义：恶魔。',
      mnemonic: '看到 demon，先说出「恶魔」。',
      note: '核心义：恶魔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one demon.', chinese: '这一章反复回到同一个点：恶魔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demon.s1', en: 'Without that demon, the next paragraph is hard to follow.', zh: '没有这个恶魔，下一段会很难读。', structure: 'demon / 表示 / 恶魔', grammar: 'noun，围绕「恶魔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the demon.', right: 'He gave me some advice about the demon.', reason: 'advice 不可数。名词 demon 的单复数按词典词形记。', rule: '先确定 demon 是noun，再套「恶魔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demon.q1', senseId: 'demon.s1', errorType: 'meaning', type: '词义选择', prompt: '「demon」在本条的核心意思是：', options: ['恶魔', '完全相反的意思', '一种古代钱币'], answer: '恶魔', explain: 'demon：恶魔。' },
      { id: 'demon.q2', senseId: 'demon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demon?', options: ['恶魔', 'a kind of ancient coin', 'the past tense of be'], answer: '恶魔', explain: '对的是「恶魔」。' },
      { id: 'demon.q3', senseId: 'demon.s1', errorType: 'grammar', type: '词义选择', prompt: 'demon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'demon.q4', senseId: 'demon.s1', errorType: 'meaning', type: '词源', prompt: '记 demon 时，哪句更稳妥？', options: ['先锁住「恶魔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「恶魔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['恶魔'] },
  });

  D('demonstrate', {
    etymology: {
      origin: '拉丁语 demonstrare「完全指出」。',
      prefix: null,
      root: { text: 'demonstrate', gloss: '证明' },
      suffix: null,
      history: [
        { label: 'demonstrate', text: '拉丁语 demonstrare「完全指出」。' },
        { label: '现在', text: '核心用法是：证明。' },
      ],
      formationLogic: '考试认现在的用法：证明。',
      mnemonic: '看到 demonstrate，先说出「证明」。',
      note: '考试认现在的用法：证明。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to demonstrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：证明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demonstrate.s1', en: 'The deadline forced the team to demonstrate that afternoon.', zh: '截止日期逼着小组在那天下午证明。', structure: 'demonstrate / 表示 / 证明', grammar: 'verb，围绕「证明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She demonstrateed it yesterday without checking the real past form.', right: 'Check the past form of "demonstrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 demonstrate 是verb，再套「证明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demonstrate.q1', senseId: 'demonstrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「demonstrate」在本条的核心意思是：', options: ['证明', '完全相反的意思', '一种古代钱币'], answer: '证明', explain: 'demonstrate：证明。' },
      { id: 'demonstrate.q2', senseId: 'demonstrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demonstrate?', options: ['证明', 'a kind of ancient coin', 'the past tense of be'], answer: '证明', explain: '对的是「证明」。' },
      { id: 'demonstrate.q3', senseId: 'demonstrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'demonstrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'demonstrate.q4', senseId: 'demonstrate.s1', errorType: 'meaning', type: '词源', prompt: '记 demonstrate 时，哪句更稳妥？', options: ['先锁住「证明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「证明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['证明'] },
  });

  D('demonstration', {
    etymology: {
      origin: '英语派生：demonstra + -tion，词性转到「示范」。',
      prefix: null,
      root: { text: 'demonstra', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'demonstration', text: '英语派生：demonstra + -tion，词性转到「示范」。' },
        { label: '现在', text: '核心用法是：示范。' },
      ],
      formationLogic: '先认词干 demonstra，再看词尾。',
      mnemonic: '看到 demonstration，先说出「示范」。',
      note: '先认词干 demonstra，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one demonstration.', chinese: '这一章反复回到同一个点：示范。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demonstration.s1', en: 'Without that demonstration, the next paragraph is hard to follow.', zh: '没有这个示范，下一段会很难读。', structure: 'demonstration / 表示 / 示范', grammar: 'noun，围绕「示范」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the demonstration.', right: 'He gave me some advice about the demonstration.', reason: 'advice 不可数。名词 demonstration 的单复数按词典词形记。', rule: '先确定 demonstration 是noun，再套「示范」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demonstration.q1', senseId: 'demonstration.s1', errorType: 'meaning', type: '词义选择', prompt: '「demonstration」在本条的核心意思是：', options: ['示范', '完全相反的意思', '一种古代钱币'], answer: '示范', explain: 'demonstration：示范。' },
      { id: 'demonstration.q2', senseId: 'demonstration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demonstration?', options: ['示范', 'a kind of ancient coin', 'the past tense of be'], answer: '示范', explain: '对的是「示范」。' },
      { id: 'demonstration.q3', senseId: 'demonstration.s1', errorType: 'grammar', type: '词义选择', prompt: 'demonstration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'demonstration.q4', senseId: 'demonstration.s1', errorType: 'meaning', type: '词源', prompt: '记 demonstration 时，哪句更稳妥？', options: ['先锁住「示范」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「示范」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['示范'] },
  });

  D('demote', {
    etymology: {
      origin: '现代英语常用词「demote」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'demote', gloss: '降职' },
      suffix: null,
      history: [
        { label: 'demote', text: '现代英语常用词「demote」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：降职。' },
      ],
      formationLogic: '核心义：降职。',
      mnemonic: '看到 demote，先说出「降职」。',
      note: '核心义：降职。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to demote before the office closed.', chinese: '他们同意在办公室关门前做这件事：降职。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'demote.s1', en: 'The deadline forced the team to demote that afternoon.', zh: '截止日期逼着小组在那天下午降职。', structure: 'demote / 表示 / 降职', grammar: 'verb，围绕「降职」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She demoteed it yesterday without checking the real past form.', right: 'Check the past form of "demote" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 demote 是verb，再套「降职」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'demote.q1', senseId: 'demote.s1', errorType: 'meaning', type: '词义选择', prompt: '「demote」在本条的核心意思是：', options: ['降职', '完全相反的意思', '一种古代钱币'], answer: '降职', explain: 'demote：降职。' },
      { id: 'demote.q2', senseId: 'demote.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches demote?', options: ['降职', 'a kind of ancient coin', 'the past tense of be'], answer: '降职', explain: '对的是「降职」。' },
      { id: 'demote.q3', senseId: 'demote.s1', errorType: 'grammar', type: '词义选择', prompt: 'demote 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'demote.q4', senseId: 'demote.s1', errorType: 'meaning', type: '词源', prompt: '记 demote 时，哪句更稳妥？', options: ['先锁住「降职」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「降职」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['降职'] },
  });

  D('den', {
    etymology: {
      origin: '现代英语常用词「den」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'den', gloss: '兽穴' },
      suffix: null,
      history: [
        { label: 'den', text: '现代英语常用词「den」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：兽穴。' },
      ],
      formationLogic: '核心义：兽穴。',
      mnemonic: '看到 den，先说出「兽穴」。',
      note: '核心义：兽穴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one den.', chinese: '这一章反复回到同一个点：兽穴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'den.s1', en: 'Without that den, the next paragraph is hard to follow.', zh: '没有这个兽穴，下一段会很难读。', structure: 'den / 表示 / 兽穴', grammar: 'noun，围绕「兽穴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the den.', right: 'He gave me some advice about the den.', reason: 'advice 不可数。名词 den 的单复数按词典词形记。', rule: '先确定 den 是noun，再套「兽穴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'den.q1', senseId: 'den.s1', errorType: 'meaning', type: '词义选择', prompt: '「den」在本条的核心意思是：', options: ['兽穴', '完全相反的意思', '一种古代钱币'], answer: '兽穴', explain: 'den：兽穴。' },
      { id: 'den.q2', senseId: 'den.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches den?', options: ['兽穴', 'a kind of ancient coin', 'the past tense of be'], answer: '兽穴', explain: '对的是「兽穴」。' },
      { id: 'den.q3', senseId: 'den.s1', errorType: 'grammar', type: '词义选择', prompt: 'den 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'den.q4', senseId: 'den.s1', errorType: 'meaning', type: '词源', prompt: '记 den 时，哪句更稳妥？', options: ['先锁住「兽穴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「兽穴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['兽穴'] },
  });

  D('denim', {
    etymology: {
      origin: '现代英语常用词「denim」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'denim', gloss: '牛仔布' },
      suffix: null,
      history: [
        { label: 'denim', text: '现代英语常用词「denim」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：牛仔布。' },
      ],
      formationLogic: '核心义：牛仔布。',
      mnemonic: '看到 denim，先说出「牛仔布」。',
      note: '核心义：牛仔布。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one denim.', chinese: '这一章反复回到同一个点：牛仔布。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'denim.s1', en: 'Without that denim, the next paragraph is hard to follow.', zh: '没有这个牛仔布，下一段会很难读。', structure: 'denim / 表示 / 牛仔布', grammar: 'noun，围绕「牛仔布」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the denim.', right: 'He gave me some advice about the denim.', reason: 'advice 不可数。名词 denim 的单复数按词典词形记。', rule: '先确定 denim 是noun，再套「牛仔布」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'denim.q1', senseId: 'denim.s1', errorType: 'meaning', type: '词义选择', prompt: '「denim」在本条的核心意思是：', options: ['牛仔布', '完全相反的意思', '一种古代钱币'], answer: '牛仔布', explain: 'denim：牛仔布。' },
      { id: 'denim.q2', senseId: 'denim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches denim?', options: ['牛仔布', 'a kind of ancient coin', 'the past tense of be'], answer: '牛仔布', explain: '对的是「牛仔布」。' },
      { id: 'denim.q3', senseId: 'denim.s1', errorType: 'grammar', type: '词义选择', prompt: 'denim 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'denim.q4', senseId: 'denim.s1', errorType: 'meaning', type: '词源', prompt: '记 denim 时，哪句更稳妥？', options: ['先锁住「牛仔布」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牛仔布」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牛仔布'] },
  });

  D('denims', {
    etymology: {
      origin: '现代英语常用词「denims」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'denims', gloss: '牛仔裤（复数）' },
      suffix: null,
      history: [
        { label: 'denims', text: '现代英语常用词「denims」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：牛仔裤（复数）。' },
      ],
      formationLogic: '核心义：牛仔裤（复数）。',
      mnemonic: '看到 denims，先说出「牛仔裤（复数）」。',
      note: '核心义：牛仔裤（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one denims.', chinese: '这一章反复回到同一个点：牛仔裤（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'denims.s1', en: 'Without that denims, the next paragraph is hard to follow.', zh: '没有这个牛仔裤（复数），下一段会很难读。', structure: 'denims / 表示 / 牛仔裤（复数）', grammar: 'noun，围绕「牛仔裤（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the denims.', right: 'He gave me some advice about the denims.', reason: 'advice 不可数。名词 denims 的单复数按词典词形记。', rule: '先确定 denims 是noun，再套「牛仔裤（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'denims.q1', senseId: 'denims.s1', errorType: 'meaning', type: '词义选择', prompt: '「denims」在本条的核心意思是：', options: ['牛仔裤（复数）', '完全相反的意思', '一种古代钱币'], answer: '牛仔裤（复数）', explain: 'denims：牛仔裤（复数）。' },
      { id: 'denims.q2', senseId: 'denims.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches denims?', options: ['牛仔裤（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '牛仔裤（复数）', explain: '对的是「牛仔裤（复数）」。' },
      { id: 'denims.q3', senseId: 'denims.s1', errorType: 'grammar', type: '词义选择', prompt: 'denims 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'denims.q4', senseId: 'denims.s1', errorType: 'meaning', type: '词源', prompt: '记 denims 时，哪句更稳妥？', options: ['先锁住「牛仔裤（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牛仔裤（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牛仔裤（复数）'] },
  });

  D('denomination', {
    etymology: {
      origin: '英语派生：denomina + -tion，词性转到「面额」。',
      prefix: null,
      root: { text: 'denomina', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'denomination', text: '英语派生：denomina + -tion，词性转到「面额」。' },
        { label: '现在', text: '核心用法是：面额。' },
      ],
      formationLogic: '先认词干 denomina，再看词尾。',
      mnemonic: '看到 denomination，先说出「面额」。',
      note: '先认词干 denomina，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one denomination.', chinese: '这一章反复回到同一个点：面额。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'denomination.s1', en: 'Without that denomination, the next paragraph is hard to follow.', zh: '没有这个面额，下一段会很难读。', structure: 'denomination / 表示 / 面额', grammar: 'noun，围绕「面额」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the denomination.', right: 'He gave me some advice about the denomination.', reason: 'advice 不可数。名词 denomination 的单复数按词典词形记。', rule: '先确定 denomination 是noun，再套「面额」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'denomination.q1', senseId: 'denomination.s1', errorType: 'meaning', type: '词义选择', prompt: '「denomination」在本条的核心意思是：', options: ['面额', '完全相反的意思', '一种古代钱币'], answer: '面额', explain: 'denomination：面额。' },
      { id: 'denomination.q2', senseId: 'denomination.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches denomination?', options: ['面额', 'a kind of ancient coin', 'the past tense of be'], answer: '面额', explain: '对的是「面额」。' },
      { id: 'denomination.q3', senseId: 'denomination.s1', errorType: 'grammar', type: '词义选择', prompt: 'denomination 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'denomination.q4', senseId: 'denomination.s1', errorType: 'meaning', type: '词源', prompt: '记 denomination 时，哪句更稳妥？', options: ['先锁住「面额」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面额」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面额'] },
  });

  D('denote', {
    etymology: {
      origin: '现代英语常用词「denote」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'denote', gloss: '表示' },
      suffix: null,
      history: [
        { label: 'denote', text: '现代英语常用词「denote」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：表示。' },
      ],
      formationLogic: '核心义：表示。',
      mnemonic: '看到 denote，先说出「表示」。',
      note: '核心义：表示。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to denote before the office closed.', chinese: '他们同意在办公室关门前做这件事：表示。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'denote.s1', en: 'The deadline forced the team to denote that afternoon.', zh: '截止日期逼着小组在那天下午表示。', structure: 'denote / 表示 / 表示', grammar: 'verb，围绕「表示」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She denoteed it yesterday without checking the real past form.', right: 'Check the past form of "denote" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 denote 是verb，再套「表示」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'denote.q1', senseId: 'denote.s1', errorType: 'meaning', type: '词义选择', prompt: '「denote」在本条的核心意思是：', options: ['表示', '完全相反的意思', '一种古代钱币'], answer: '表示', explain: 'denote：表示。' },
      { id: 'denote.q2', senseId: 'denote.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches denote?', options: ['表示', 'a kind of ancient coin', 'the past tense of be'], answer: '表示', explain: '对的是「表示」。' },
      { id: 'denote.q3', senseId: 'denote.s1', errorType: 'grammar', type: '词义选择', prompt: 'denote 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'denote.q4', senseId: 'denote.s1', errorType: 'meaning', type: '词源', prompt: '记 denote 时，哪句更稳妥？', options: ['先锁住「表示」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「表示」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['表示'] },
  });

  D('denounce', {
    etymology: {
      origin: '现代英语常用词「denounce」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'denounce', gloss: '谴责' },
      suffix: null,
      history: [
        { label: 'denounce', text: '现代英语常用词「denounce」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：谴责。' },
      ],
      formationLogic: '核心义：谴责。',
      mnemonic: '看到 denounce，先说出「谴责」。',
      note: '核心义：谴责。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to denounce before the office closed.', chinese: '他们同意在办公室关门前做这件事：谴责。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'denounce.s1', en: 'The deadline forced the team to denounce that afternoon.', zh: '截止日期逼着小组在那天下午谴责。', structure: 'denounce / 表示 / 谴责', grammar: 'verb，围绕「谴责」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She denounceed it yesterday without checking the real past form.', right: 'Check the past form of "denounce" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 denounce 是verb，再套「谴责」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'denounce.q1', senseId: 'denounce.s1', errorType: 'meaning', type: '词义选择', prompt: '「denounce」在本条的核心意思是：', options: ['谴责', '完全相反的意思', '一种古代钱币'], answer: '谴责', explain: 'denounce：谴责。' },
      { id: 'denounce.q2', senseId: 'denounce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches denounce?', options: ['谴责', 'a kind of ancient coin', 'the past tense of be'], answer: '谴责', explain: '对的是「谴责」。' },
      { id: 'denounce.q3', senseId: 'denounce.s1', errorType: 'grammar', type: '词义选择', prompt: 'denounce 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'denounce.q4', senseId: 'denounce.s1', errorType: 'meaning', type: '词源', prompt: '记 denounce 时，哪句更稳妥？', options: ['先锁住「谴责」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谴责」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谴责'] },
  });

  D('dense', {
    etymology: {
      origin: '拉丁语 densus「厚的」。',
      prefix: null,
      root: { text: 'dense', gloss: '密集的' },
      suffix: null,
      history: [
        { label: 'dense', text: '拉丁语 densus「厚的」。' },
        { label: '现在', text: '核心用法是：密集的。' },
      ],
      formationLogic: '考试认现在的用法：密集的。',
      mnemonic: '看到 dense，先说出「密集的」。',
      note: '考试认现在的用法：密集的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dense.', chinese: '即使是初读者也能看出，这个结果是密集的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dense.s1', en: 'They wanted a dense answer, not a long speech.', zh: '他们要一个密集的的答复，不要长篇发言。', structure: 'dense / 表示 / 密集的', grammar: 'adjective，围绕「密集的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dense.', right: 'The news is dense.', reason: 'news 作主语时动词用单数。', rule: '先确定 dense 是adjective，再套「密集的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dense.q1', senseId: 'dense.s1', errorType: 'meaning', type: '词义选择', prompt: '「dense」在本条的核心意思是：', options: ['密集的', '完全相反的意思', '一种古代钱币'], answer: '密集的', explain: 'dense：密集的。' },
      { id: 'dense.q2', senseId: 'dense.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dense?', options: ['密集的', 'a kind of ancient coin', 'the past tense of be'], answer: '密集的', explain: '对的是「密集的」。' },
      { id: 'dense.q3', senseId: 'dense.s1', errorType: 'grammar', type: '词义选择', prompt: 'dense 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dense.q4', senseId: 'dense.s1', errorType: 'meaning', type: '词源', prompt: '记 dense 时，哪句更稳妥？', options: ['先锁住「密集的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「密集的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['密集的'] },
  });

  D('dent', {
    etymology: {
      origin: '现代英语常用词「dent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dent', gloss: '凹痕' },
      suffix: null,
      history: [
        { label: 'dent', text: '现代英语常用词「dent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：凹痕。' },
      ],
      formationLogic: '核心义：凹痕。',
      mnemonic: '看到 dent，先说出「凹痕」。',
      note: '核心义：凹痕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dent.', chinese: '这一章反复回到同一个点：凹痕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dent.s1', en: 'Without that dent, the next paragraph is hard to follow.', zh: '没有这个凹痕，下一段会很难读。', structure: 'dent / 表示 / 凹痕', grammar: 'noun，围绕「凹痕」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dent.', right: 'He gave me some advice about the dent.', reason: 'advice 不可数。名词 dent 的单复数按词典词形记。', rule: '先确定 dent 是noun，再套「凹痕」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dent.q1', senseId: 'dent.s1', errorType: 'meaning', type: '词义选择', prompt: '「dent」在本条的核心意思是：', options: ['凹痕', '完全相反的意思', '一种古代钱币'], answer: '凹痕', explain: 'dent：凹痕。' },
      { id: 'dent.q2', senseId: 'dent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dent?', options: ['凹痕', 'a kind of ancient coin', 'the past tense of be'], answer: '凹痕', explain: '对的是「凹痕」。' },
      { id: 'dent.q3', senseId: 'dent.s1', errorType: 'grammar', type: '词义选择', prompt: 'dent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dent.q4', senseId: 'dent.s1', errorType: 'meaning', type: '词源', prompt: '记 dent 时，哪句更稳妥？', options: ['先锁住「凹痕」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凹痕」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凹痕'] },
  });

  D('dental', {
    etymology: {
      origin: '英语派生：dent + -al，词性转到「牙的」。',
      prefix: null,
      root: { text: 'dent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dental', text: '英语派生：dent + -al，词性转到「牙的」。' },
        { label: '现在', text: '核心用法是：牙的。' },
      ],
      formationLogic: '先认词干 dent，再看词尾。',
      mnemonic: '看到 dental，先说出「牙的」。',
      note: '先认词干 dent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dental.', chinese: '即使是初读者也能看出，这个结果是牙的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dental.s1', en: 'They wanted a dental answer, not a long speech.', zh: '他们要一个牙的的答复，不要长篇发言。', structure: 'dental / 表示 / 牙的', grammar: 'adjective，围绕「牙的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dental.', right: 'The news is dental.', reason: 'news 作主语时动词用单数。', rule: '先确定 dental 是adjective，再套「牙的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dental.q1', senseId: 'dental.s1', errorType: 'meaning', type: '词义选择', prompt: '「dental」在本条的核心意思是：', options: ['牙的', '完全相反的意思', '一种古代钱币'], answer: '牙的', explain: 'dental：牙的。' },
      { id: 'dental.q2', senseId: 'dental.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dental?', options: ['牙的', 'a kind of ancient coin', 'the past tense of be'], answer: '牙的', explain: '对的是「牙的」。' },
      { id: 'dental.q3', senseId: 'dental.s1', errorType: 'grammar', type: '词义选择', prompt: 'dental 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dental.q4', senseId: 'dental.s1', errorType: 'meaning', type: '词源', prompt: '记 dental 时，哪句更稳妥？', options: ['先锁住「牙的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牙的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牙的'] },
  });

  D('dentist', {
    etymology: {
      origin: '拉丁语 dens「牙齿」+ -ist。',
      prefix: null,
      root: { text: 'dentist', gloss: '牙医' },
      suffix: null,
      history: [
        { label: 'dentist', text: '拉丁语 dens「牙齿」+ -ist。' },
        { label: '现在', text: '核心用法是：牙医。' },
      ],
      formationLogic: '考试认现在的用法：牙医。',
      mnemonic: '看到 dentist，先说出「牙医」。',
      note: '考试认现在的用法：牙医。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dentist.', chinese: '这一章反复回到同一个点：牙医。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dentist.s1', en: 'Without that dentist, the next paragraph is hard to follow.', zh: '没有这个牙医，下一段会很难读。', structure: 'dentist / 表示 / 牙医', grammar: 'noun，围绕「牙医」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dentist.', right: 'He gave me some advice about the dentist.', reason: 'advice 不可数。名词 dentist 的单复数按词典词形记。', rule: '先确定 dentist 是noun，再套「牙医」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dentist.q1', senseId: 'dentist.s1', errorType: 'meaning', type: '词义选择', prompt: '「dentist」在本条的核心意思是：', options: ['牙医', '完全相反的意思', '一种古代钱币'], answer: '牙医', explain: 'dentist：牙医。' },
      { id: 'dentist.q2', senseId: 'dentist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dentist?', options: ['牙医', 'a kind of ancient coin', 'the past tense of be'], answer: '牙医', explain: '对的是「牙医」。' },
      { id: 'dentist.q3', senseId: 'dentist.s1', errorType: 'grammar', type: '词义选择', prompt: 'dentist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dentist.q4', senseId: 'dentist.s1', errorType: 'meaning', type: '词源', prompt: '记 dentist 时，哪句更稳妥？', options: ['先锁住「牙医」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牙医」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牙医'] },
  });

  D('deny', {
    etymology: {
      origin: '拉丁语 denegare「说不」。',
      prefix: null,
      root: { text: 'deny', gloss: '否认' },
      suffix: null,
      history: [
        { label: 'deny', text: '拉丁语 denegare「说不」。' },
        { label: '现在', text: '核心用法是：否认。' },
      ],
      formationLogic: '考试认现在的用法：否认。',
      mnemonic: '看到 deny，先说出「否认」。',
      note: '考试认现在的用法：否认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deny before the office closed.', chinese: '他们同意在办公室关门前做这件事：否认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deny.s1', en: 'The deadline forced the team to deny that afternoon.', zh: '截止日期逼着小组在那天下午否认。', structure: 'deny / 表示 / 否认', grammar: 'verb，围绕「否认」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She denyed it yesterday without checking the real past form.', right: 'Check the past form of "deny" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deny 是verb，再套「否认」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deny.q1', senseId: 'deny.s1', errorType: 'meaning', type: '词义选择', prompt: '「deny」在本条的核心意思是：', options: ['否认', '完全相反的意思', '一种古代钱币'], answer: '否认', explain: 'deny：否认。' },
      { id: 'deny.q2', senseId: 'deny.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deny?', options: ['否认', 'a kind of ancient coin', 'the past tense of be'], answer: '否认', explain: '对的是「否认」。' },
      { id: 'deny.q3', senseId: 'deny.s1', errorType: 'grammar', type: '词义选择', prompt: 'deny 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deny.q4', senseId: 'deny.s1', errorType: 'meaning', type: '词源', prompt: '记 deny 时，哪句更稳妥？', options: ['先锁住「否认」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「否认」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['否认'] },
  });

  D('depart', {
    etymology: {
      origin: '拉丁语 dispartire「分开」。',
      prefix: null,
      root: { text: 'depart', gloss: '离开' },
      suffix: null,
      history: [
        { label: 'depart', text: '拉丁语 dispartire「分开」。' },
        { label: '现在', text: '核心用法是：离开。' },
      ],
      formationLogic: '考试认现在的用法：离开。',
      mnemonic: '看到 depart，先说出「离开」。',
      note: '考试认现在的用法：离开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to depart before the office closed.', chinese: '他们同意在办公室关门前做这件事：离开。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depart.s1', en: 'The deadline forced the team to depart that afternoon.', zh: '截止日期逼着小组在那天下午离开。', structure: 'depart / 表示 / 离开', grammar: 'verb，围绕「离开」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She departed it yesterday without checking the real past form.', right: 'Check the past form of "depart" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 depart 是verb，再套「离开」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depart.q1', senseId: 'depart.s1', errorType: 'meaning', type: '词义选择', prompt: '「depart」在本条的核心意思是：', options: ['离开', '完全相反的意思', '一种古代钱币'], answer: '离开', explain: 'depart：离开。' },
      { id: 'depart.q2', senseId: 'depart.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depart?', options: ['离开', 'a kind of ancient coin', 'the past tense of be'], answer: '离开', explain: '对的是「离开」。' },
      { id: 'depart.q3', senseId: 'depart.s1', errorType: 'grammar', type: '词义选择', prompt: 'depart 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depart.q4', senseId: 'depart.s1', errorType: 'meaning', type: '词源', prompt: '记 depart 时，哪句更稳妥？', options: ['先锁住「离开」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「离开」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['离开'] },
  });

  D('departing', {
    etymology: {
      origin: '英语派生：depart + -ing，词性转到「离开的」。',
      prefix: null,
      root: { text: 'depart', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'departing', text: '英语派生：depart + -ing，词性转到「离开的」。' },
        { label: '现在', text: '核心用法是：离开的。' },
      ],
      formationLogic: '先认词干 depart，再看词尾。',
      mnemonic: '看到 departing，先说出「离开的」。',
      note: '先认词干 depart，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was departing.', chinese: '即使是初读者也能看出，这个结果是离开的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'departing.s1', en: 'They wanted a departing answer, not a long speech.', zh: '他们要一个离开的的答复，不要长篇发言。', structure: 'departing / 表示 / 离开的', grammar: 'adjective，围绕「离开的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are departing.', right: 'The news is departing.', reason: 'news 作主语时动词用单数。', rule: '先确定 departing 是adjective，再套「离开的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'departing.q1', senseId: 'departing.s1', errorType: 'meaning', type: '词义选择', prompt: '「departing」在本条的核心意思是：', options: ['离开的', '完全相反的意思', '一种古代钱币'], answer: '离开的', explain: 'departing：离开的。' },
      { id: 'departing.q2', senseId: 'departing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches departing?', options: ['离开的', 'a kind of ancient coin', 'the past tense of be'], answer: '离开的', explain: '对的是「离开的」。' },
      { id: 'departing.q3', senseId: 'departing.s1', errorType: 'grammar', type: '词义选择', prompt: 'departing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'departing.q4', senseId: 'departing.s1', errorType: 'meaning', type: '词源', prompt: '记 departing 时，哪句更稳妥？', options: ['先锁住「离开的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「离开的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['离开的'] },
  });

  D('department', {
    etymology: {
      origin: 'depart 的名词。分出去的一块。',
      prefix: null,
      root: { text: 'department', gloss: '部门' },
      suffix: null,
      history: [
        { label: 'department', text: 'depart 的名词。分出去的一块。' },
        { label: '现在', text: '核心用法是：部门。' },
      ],
      formationLogic: '考试认现在的用法：部门。',
      mnemonic: '看到 department，先说出「部门」。',
      note: '考试认现在的用法：部门。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one department.', chinese: '这一章反复回到同一个点：部门。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'department.s1', en: 'Without that department, the next paragraph is hard to follow.', zh: '没有这个部门，下一段会很难读。', structure: 'department / 表示 / 部门', grammar: 'noun，围绕「部门」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the department.', right: 'He gave me some advice about the department.', reason: 'advice 不可数。名词 department 的单复数按词典词形记。', rule: '先确定 department 是noun，再套「部门」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'department.q1', senseId: 'department.s1', errorType: 'meaning', type: '词义选择', prompt: '「department」在本条的核心意思是：', options: ['部门', '完全相反的意思', '一种古代钱币'], answer: '部门', explain: 'department：部门。' },
      { id: 'department.q2', senseId: 'department.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches department?', options: ['部门', 'a kind of ancient coin', 'the past tense of be'], answer: '部门', explain: '对的是「部门」。' },
      { id: 'department.q3', senseId: 'department.s1', errorType: 'grammar', type: '词义选择', prompt: 'department 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'department.q4', senseId: 'department.s1', errorType: 'meaning', type: '词源', prompt: '记 department 时，哪句更稳妥？', options: ['先锁住「部门」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「部门」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['部门'] },
  });

  D('departure', {
    etymology: {
      origin: '现代英语常用词「departure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'departure', gloss: '离开' },
      suffix: null,
      history: [
        { label: 'departure', text: '现代英语常用词「departure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：离开。' },
      ],
      formationLogic: '核心义：离开。',
      mnemonic: '看到 departure，先说出「离开」。',
      note: '核心义：离开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one departure.', chinese: '这一章反复回到同一个点：离开。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'departure.s1', en: 'Without that departure, the next paragraph is hard to follow.', zh: '没有这个离开，下一段会很难读。', structure: 'departure / 表示 / 离开', grammar: 'noun，围绕「离开」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the departure.', right: 'He gave me some advice about the departure.', reason: 'advice 不可数。名词 departure 的单复数按词典词形记。', rule: '先确定 departure 是noun，再套「离开」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'departure.q1', senseId: 'departure.s1', errorType: 'meaning', type: '词义选择', prompt: '「departure」在本条的核心意思是：', options: ['离开', '完全相反的意思', '一种古代钱币'], answer: '离开', explain: 'departure：离开。' },
      { id: 'departure.q2', senseId: 'departure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches departure?', options: ['离开', 'a kind of ancient coin', 'the past tense of be'], answer: '离开', explain: '对的是「离开」。' },
      { id: 'departure.q3', senseId: 'departure.s1', errorType: 'grammar', type: '词义选择', prompt: 'departure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'departure.q4', senseId: 'departure.s1', errorType: 'meaning', type: '词源', prompt: '记 departure 时，哪句更稳妥？', options: ['先锁住「离开」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「离开」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['离开'] },
  });

  D('depend', {
    etymology: {
      origin: '拉丁语 dependere「挂在下面」。靠着某物挂着。',
      prefix: null,
      root: { text: 'depend', gloss: '依靠' },
      suffix: null,
      history: [
        { label: 'depend', text: '拉丁语 dependere「挂在下面」。靠着某物挂着。' },
        { label: '现在', text: '核心用法是：依靠。' },
      ],
      formationLogic: '考试认现在的用法：依靠。',
      mnemonic: '看到 depend，先说出「依靠」。',
      note: '考试认现在的用法：依靠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to depend before the office closed.', chinese: '他们同意在办公室关门前做这件事：依靠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depend.s1', en: 'The deadline forced the team to depend that afternoon.', zh: '截止日期逼着小组在那天下午依靠。', structure: 'depend / 表示 / 依靠', grammar: 'verb，围绕「依靠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She depended it yesterday without checking the real past form.', right: 'Check the past form of "depend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 depend 是verb，再套「依靠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depend.q1', senseId: 'depend.s1', errorType: 'meaning', type: '词义选择', prompt: '「depend」在本条的核心意思是：', options: ['依靠', '完全相反的意思', '一种古代钱币'], answer: '依靠', explain: 'depend：依靠。' },
      { id: 'depend.q2', senseId: 'depend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depend?', options: ['依靠', 'a kind of ancient coin', 'the past tense of be'], answer: '依靠', explain: '对的是「依靠」。' },
      { id: 'depend.q3', senseId: 'depend.s1', errorType: 'grammar', type: '词义选择', prompt: 'depend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depend.q4', senseId: 'depend.s1', errorType: 'meaning', type: '词源', prompt: '记 depend 时，哪句更稳妥？', options: ['先锁住「依靠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「依靠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['依靠'] },
  });

  D('depend on', {
    etymology: {
      origin: '现代英语固定说法「depend on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'depend on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'depend on', text: '现代英语固定说法「depend on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：依靠。' },
      ],
      formationLogic: '核心义：依靠。',
      mnemonic: '看到 depend on，先说出「依靠」。',
      note: '核心义：依靠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "depend on" and asked the class to keep it as one unit.', chinese: '老师把「depend on」圈出来，让全班把它当成一个整体。它表示依靠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depend on.s1', en: 'In the margin she wrote "depend on" so nobody would split the phrase.', zh: '她在页边写下「depend on」，免得有人把这个说法拆开。意思是依靠。', structure: 'depend on / 表示 / 依靠', grammar: 'verb，围绕「依靠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of depend on and lost the point.', right: 'Keep "depend on" together: it means 依靠.', reason: '「depend on」要整块理解。', rule: '先确定 depend on 是verb，再套「依靠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depend on.q1', senseId: 'depend on.s1', errorType: 'meaning', type: '词义选择', prompt: '「depend on」在本条的核心意思是：', options: ['依靠', '完全相反的意思', '一种古代钱币'], answer: '依靠', explain: 'depend on：依靠。' },
      { id: 'depend on.q2', senseId: 'depend on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depend on?', options: ['依靠', 'a kind of ancient coin', 'the past tense of be'], answer: '依靠', explain: '对的是「依靠」。' },
      { id: 'depend on.q3', senseId: 'depend on.s1', errorType: 'grammar', type: '词义选择', prompt: 'depend on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depend on.q4', senseId: 'depend on.s1', errorType: 'meaning', type: '词源', prompt: '记 depend on 时，哪句更稳妥？', options: ['先锁住「依靠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「依靠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['依靠'] },
  });

  D('dependable', {
    etymology: {
      origin: '英语派生：depend + -able，词性转到「可靠的」。',
      prefix: null,
      root: { text: 'depend', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'dependable', text: '英语派生：depend + -able，词性转到「可靠的」。' },
        { label: '现在', text: '核心用法是：可靠的。' },
      ],
      formationLogic: '先认词干 depend，再看词尾。',
      mnemonic: '看到 dependable，先说出「可靠的」。',
      note: '先认词干 depend，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dependable.', chinese: '即使是初读者也能看出，这个结果是可靠的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dependable.s1', en: 'They wanted a dependable answer, not a long speech.', zh: '他们要一个可靠的的答复，不要长篇发言。', structure: 'dependable / 表示 / 可靠的', grammar: 'adjective，围绕「可靠的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dependable.', right: 'The news is dependable.', reason: 'news 作主语时动词用单数。', rule: '先确定 dependable 是adjective，再套「可靠的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dependable.q1', senseId: 'dependable.s1', errorType: 'meaning', type: '词义选择', prompt: '「dependable」在本条的核心意思是：', options: ['可靠的', '完全相反的意思', '一种古代钱币'], answer: '可靠的', explain: 'dependable：可靠的。' },
      { id: 'dependable.q2', senseId: 'dependable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dependable?', options: ['可靠的', 'a kind of ancient coin', 'the past tense of be'], answer: '可靠的', explain: '对的是「可靠的」。' },
      { id: 'dependable.q3', senseId: 'dependable.s1', errorType: 'grammar', type: '词义选择', prompt: 'dependable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dependable.q4', senseId: 'dependable.s1', errorType: 'meaning', type: '词源', prompt: '记 dependable 时，哪句更稳妥？', options: ['先锁住「可靠的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可靠的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可靠的'] },
  });

  D('dependant', {
    etymology: {
      origin: '现代英语常用词「dependant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dependant', gloss: '受抚养者' },
      suffix: null,
      history: [
        { label: 'dependant', text: '现代英语常用词「dependant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：受抚养者。' },
      ],
      formationLogic: '核心义：受抚养者。',
      mnemonic: '看到 dependant，先说出「受抚养者」。',
      note: '核心义：受抚养者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dependant.', chinese: '这一章反复回到同一个点：受抚养者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dependant.s1', en: 'Without that dependant, the next paragraph is hard to follow.', zh: '没有这个受抚养者，下一段会很难读。', structure: 'dependant / 表示 / 受抚养者', grammar: 'noun，围绕「受抚养者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dependant.', right: 'He gave me some advice about the dependant.', reason: 'advice 不可数。名词 dependant 的单复数按词典词形记。', rule: '先确定 dependant 是noun，再套「受抚养者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dependant.q1', senseId: 'dependant.s1', errorType: 'meaning', type: '词义选择', prompt: '「dependant」在本条的核心意思是：', options: ['受抚养者', '完全相反的意思', '一种古代钱币'], answer: '受抚养者', explain: 'dependant：受抚养者。' },
      { id: 'dependant.q2', senseId: 'dependant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dependant?', options: ['受抚养者', 'a kind of ancient coin', 'the past tense of be'], answer: '受抚养者', explain: '对的是「受抚养者」。' },
      { id: 'dependant.q3', senseId: 'dependant.s1', errorType: 'grammar', type: '词义选择', prompt: 'dependant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dependant.q4', senseId: 'dependant.s1', errorType: 'meaning', type: '词源', prompt: '记 dependant 时，哪句更稳妥？', options: ['先锁住「受抚养者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「受抚养者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['受抚养者'] },
  });

  D('dependency', {
    etymology: {
      origin: '现代英语常用词「dependency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dependency', gloss: '依赖' },
      suffix: null,
      history: [
        { label: 'dependency', text: '现代英语常用词「dependency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：依赖。' },
      ],
      formationLogic: '核心义：依赖。',
      mnemonic: '看到 dependency，先说出「依赖」。',
      note: '核心义：依赖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dependency.', chinese: '这一章反复回到同一个点：依赖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dependency.s1', en: 'Without that dependency, the next paragraph is hard to follow.', zh: '没有这个依赖，下一段会很难读。', structure: 'dependency / 表示 / 依赖', grammar: 'noun，围绕「依赖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dependency.', right: 'He gave me some advice about the dependency.', reason: 'advice 不可数。名词 dependency 的单复数按词典词形记。', rule: '先确定 dependency 是noun，再套「依赖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dependency.q1', senseId: 'dependency.s1', errorType: 'meaning', type: '词义选择', prompt: '「dependency」在本条的核心意思是：', options: ['依赖', '完全相反的意思', '一种古代钱币'], answer: '依赖', explain: 'dependency：依赖。' },
      { id: 'dependency.q2', senseId: 'dependency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dependency?', options: ['依赖', 'a kind of ancient coin', 'the past tense of be'], answer: '依赖', explain: '对的是「依赖」。' },
      { id: 'dependency.q3', senseId: 'dependency.s1', errorType: 'grammar', type: '词义选择', prompt: 'dependency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dependency.q4', senseId: 'dependency.s1', errorType: 'meaning', type: '词源', prompt: '记 dependency 时，哪句更稳妥？', options: ['先锁住「依赖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「依赖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['依赖'] },
  });

  D('depict', {
    etymology: {
      origin: '现代英语常用词「depict」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'depict', gloss: '描绘' },
      suffix: null,
      history: [
        { label: 'depict', text: '现代英语常用词「depict」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：描绘。' },
      ],
      formationLogic: '核心义：描绘。',
      mnemonic: '看到 depict，先说出「描绘」。',
      note: '核心义：描绘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to depict before the office closed.', chinese: '他们同意在办公室关门前做这件事：描绘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depict.s1', en: 'The deadline forced the team to depict that afternoon.', zh: '截止日期逼着小组在那天下午描绘。', structure: 'depict / 表示 / 描绘', grammar: 'verb，围绕「描绘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She depicted it yesterday without checking the real past form.', right: 'Check the past form of "depict" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 depict 是verb，再套「描绘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depict.q1', senseId: 'depict.s1', errorType: 'meaning', type: '词义选择', prompt: '「depict」在本条的核心意思是：', options: ['描绘', '完全相反的意思', '一种古代钱币'], answer: '描绘', explain: 'depict：描绘。' },
      { id: 'depict.q2', senseId: 'depict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depict?', options: ['描绘', 'a kind of ancient coin', 'the past tense of be'], answer: '描绘', explain: '对的是「描绘」。' },
      { id: 'depict.q3', senseId: 'depict.s1', errorType: 'grammar', type: '词义选择', prompt: 'depict 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depict.q4', senseId: 'depict.s1', errorType: 'meaning', type: '词源', prompt: '记 depict 时，哪句更稳妥？', options: ['先锁住「描绘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「描绘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['描绘'] },
  });

  D('deplete', {
    etymology: {
      origin: '现代英语常用词「deplete」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deplete', gloss: '耗尽' },
      suffix: null,
      history: [
        { label: 'deplete', text: '现代英语常用词「deplete」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：耗尽。' },
      ],
      formationLogic: '核心义：耗尽。',
      mnemonic: '看到 deplete，先说出「耗尽」。',
      note: '核心义：耗尽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deplete before the office closed.', chinese: '他们同意在办公室关门前做这件事：耗尽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deplete.s1', en: 'The deadline forced the team to deplete that afternoon.', zh: '截止日期逼着小组在那天下午耗尽。', structure: 'deplete / 表示 / 耗尽', grammar: 'verb，围绕「耗尽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She depleteed it yesterday without checking the real past form.', right: 'Check the past form of "deplete" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deplete 是verb，再套「耗尽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deplete.q1', senseId: 'deplete.s1', errorType: 'meaning', type: '词义选择', prompt: '「deplete」在本条的核心意思是：', options: ['耗尽', '完全相反的意思', '一种古代钱币'], answer: '耗尽', explain: 'deplete：耗尽。' },
      { id: 'deplete.q2', senseId: 'deplete.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deplete?', options: ['耗尽', 'a kind of ancient coin', 'the past tense of be'], answer: '耗尽', explain: '对的是「耗尽」。' },
      { id: 'deplete.q3', senseId: 'deplete.s1', errorType: 'grammar', type: '词义选择', prompt: 'deplete 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deplete.q4', senseId: 'deplete.s1', errorType: 'meaning', type: '词源', prompt: '记 deplete 时，哪句更稳妥？', options: ['先锁住「耗尽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「耗尽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['耗尽'] },
  });

  D('deplore', {
    etymology: {
      origin: '现代英语常用词「deplore」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deplore', gloss: '谴责' },
      suffix: null,
      history: [
        { label: 'deplore', text: '现代英语常用词「deplore」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：谴责。' },
      ],
      formationLogic: '核心义：谴责。',
      mnemonic: '看到 deplore，先说出「谴责」。',
      note: '核心义：谴责。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deplore before the office closed.', chinese: '他们同意在办公室关门前做这件事：谴责。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deplore.s1', en: 'The deadline forced the team to deplore that afternoon.', zh: '截止日期逼着小组在那天下午谴责。', structure: 'deplore / 表示 / 谴责', grammar: 'verb，围绕「谴责」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deploreed it yesterday without checking the real past form.', right: 'Check the past form of "deplore" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deplore 是verb，再套「谴责」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deplore.q1', senseId: 'deplore.s1', errorType: 'meaning', type: '词义选择', prompt: '「deplore」在本条的核心意思是：', options: ['谴责', '完全相反的意思', '一种古代钱币'], answer: '谴责', explain: 'deplore：谴责。' },
      { id: 'deplore.q2', senseId: 'deplore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deplore?', options: ['谴责', 'a kind of ancient coin', 'the past tense of be'], answer: '谴责', explain: '对的是「谴责」。' },
      { id: 'deplore.q3', senseId: 'deplore.s1', errorType: 'grammar', type: '词义选择', prompt: 'deplore 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deplore.q4', senseId: 'deplore.s1', errorType: 'meaning', type: '词源', prompt: '记 deplore 时，哪句更稳妥？', options: ['先锁住「谴责」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谴责」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谴责'] },
  });

  D('deploy', {
    etymology: {
      origin: '现代英语常用词「deploy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deploy', gloss: '部署' },
      suffix: null,
      history: [
        { label: 'deploy', text: '现代英语常用词「deploy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：部署。' },
      ],
      formationLogic: '核心义：部署。',
      mnemonic: '看到 deploy，先说出「部署」。',
      note: '核心义：部署。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deploy before the office closed.', chinese: '他们同意在办公室关门前做这件事：部署。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deploy.s1', en: 'The deadline forced the team to deploy that afternoon.', zh: '截止日期逼着小组在那天下午部署。', structure: 'deploy / 表示 / 部署', grammar: 'verb，围绕「部署」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deployed it yesterday without checking the real past form.', right: 'Check the past form of "deploy" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deploy 是verb，再套「部署」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deploy.q1', senseId: 'deploy.s1', errorType: 'meaning', type: '词义选择', prompt: '「deploy」在本条的核心意思是：', options: ['部署', '完全相反的意思', '一种古代钱币'], answer: '部署', explain: 'deploy：部署。' },
      { id: 'deploy.q2', senseId: 'deploy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deploy?', options: ['部署', 'a kind of ancient coin', 'the past tense of be'], answer: '部署', explain: '对的是「部署」。' },
      { id: 'deploy.q3', senseId: 'deploy.s1', errorType: 'grammar', type: '词义选择', prompt: 'deploy 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deploy.q4', senseId: 'deploy.s1', errorType: 'meaning', type: '词源', prompt: '记 deploy 时，哪句更稳妥？', options: ['先锁住「部署」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「部署」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['部署'] },
  });

  D('deport', {
    etymology: {
      origin: '现代英语常用词「deport」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deport', gloss: '驱逐出境' },
      suffix: null,
      history: [
        { label: 'deport', text: '现代英语常用词「deport」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：驱逐出境。' },
      ],
      formationLogic: '核心义：驱逐出境。',
      mnemonic: '看到 deport，先说出「驱逐出境」。',
      note: '核心义：驱逐出境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deport before the office closed.', chinese: '他们同意在办公室关门前做这件事：驱逐出境。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deport.s1', en: 'The deadline forced the team to deport that afternoon.', zh: '截止日期逼着小组在那天下午驱逐出境。', structure: 'deport / 表示 / 驱逐出境', grammar: 'verb，围绕「驱逐出境」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deported it yesterday without checking the real past form.', right: 'Check the past form of "deport" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deport 是verb，再套「驱逐出境」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deport.q1', senseId: 'deport.s1', errorType: 'meaning', type: '词义选择', prompt: '「deport」在本条的核心意思是：', options: ['驱逐出境', '完全相反的意思', '一种古代钱币'], answer: '驱逐出境', explain: 'deport：驱逐出境。' },
      { id: 'deport.q2', senseId: 'deport.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deport?', options: ['驱逐出境', 'a kind of ancient coin', 'the past tense of be'], answer: '驱逐出境', explain: '对的是「驱逐出境」。' },
      { id: 'deport.q3', senseId: 'deport.s1', errorType: 'grammar', type: '词义选择', prompt: 'deport 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deport.q4', senseId: 'deport.s1', errorType: 'meaning', type: '词源', prompt: '记 deport 时，哪句更稳妥？', options: ['先锁住「驱逐出境」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「驱逐出境」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['驱逐出境'] },
  });

  D('depose', {
    etymology: {
      origin: '现代英语常用词「depose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'depose', gloss: '罢黜' },
      suffix: null,
      history: [
        { label: 'depose', text: '现代英语常用词「depose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：罢黜。' },
      ],
      formationLogic: '核心义：罢黜。',
      mnemonic: '看到 depose，先说出「罢黜」。',
      note: '核心义：罢黜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to depose before the office closed.', chinese: '他们同意在办公室关门前做这件事：罢黜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depose.s1', en: 'The deadline forced the team to depose that afternoon.', zh: '截止日期逼着小组在那天下午罢黜。', structure: 'depose / 表示 / 罢黜', grammar: 'verb，围绕「罢黜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deposeed it yesterday without checking the real past form.', right: 'Check the past form of "depose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 depose 是verb，再套「罢黜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depose.q1', senseId: 'depose.s1', errorType: 'meaning', type: '词义选择', prompt: '「depose」在本条的核心意思是：', options: ['罢黜', '完全相反的意思', '一种古代钱币'], answer: '罢黜', explain: 'depose：罢黜。' },
      { id: 'depose.q2', senseId: 'depose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depose?', options: ['罢黜', 'a kind of ancient coin', 'the past tense of be'], answer: '罢黜', explain: '对的是「罢黜」。' },
      { id: 'depose.q3', senseId: 'depose.s1', errorType: 'grammar', type: '词义选择', prompt: 'depose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depose.q4', senseId: 'depose.s1', errorType: 'meaning', type: '词源', prompt: '记 depose 时，哪句更稳妥？', options: ['先锁住「罢黜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「罢黜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['罢黜'] },
  });

  D('deposit', {
    etymology: {
      origin: '拉丁语 deponere「放下」。',
      prefix: null,
      root: { text: 'deposit', gloss: '存款' },
      suffix: null,
      history: [
        { label: 'deposit', text: '拉丁语 deponere「放下」。' },
        { label: '现在', text: '核心用法是：存款。' },
      ],
      formationLogic: '考试认现在的用法：存款。',
      mnemonic: '看到 deposit，先说出「存款」。',
      note: '考试认现在的用法：存款。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deposit.', chinese: '这一章反复回到同一个点：存款。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deposit.s1', en: 'Without that deposit, the next paragraph is hard to follow.', zh: '没有这个存款，下一段会很难读。', structure: 'deposit / 表示 / 存款', grammar: 'noun，围绕「存款」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deposit.', right: 'He gave me some advice about the deposit.', reason: 'advice 不可数。名词 deposit 的单复数按词典词形记。', rule: '先确定 deposit 是noun，再套「存款」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deposit.q1', senseId: 'deposit.s1', errorType: 'meaning', type: '词义选择', prompt: '「deposit」在本条的核心意思是：', options: ['存款', '完全相反的意思', '一种古代钱币'], answer: '存款', explain: 'deposit：存款。' },
      { id: 'deposit.q2', senseId: 'deposit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deposit?', options: ['存款', 'a kind of ancient coin', 'the past tense of be'], answer: '存款', explain: '对的是「存款」。' },
      { id: 'deposit.q3', senseId: 'deposit.s1', errorType: 'grammar', type: '词义选择', prompt: 'deposit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deposit.q4', senseId: 'deposit.s1', errorType: 'meaning', type: '词源', prompt: '记 deposit 时，哪句更稳妥？', options: ['先锁住「存款」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「存款」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['存款'] },
  });

  D('depot', {
    etymology: {
      origin: '现代英语常用词「depot」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'depot', gloss: '仓库' },
      suffix: null,
      history: [
        { label: 'depot', text: '现代英语常用词「depot」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：仓库。' },
      ],
      formationLogic: '核心义：仓库。',
      mnemonic: '看到 depot，先说出「仓库」。',
      note: '核心义：仓库。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one depot.', chinese: '这一章反复回到同一个点：仓库。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depot.s1', en: 'Without that depot, the next paragraph is hard to follow.', zh: '没有这个仓库，下一段会很难读。', structure: 'depot / 表示 / 仓库', grammar: 'noun，围绕「仓库」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the depot.', right: 'He gave me some advice about the depot.', reason: 'advice 不可数。名词 depot 的单复数按词典词形记。', rule: '先确定 depot 是noun，再套「仓库」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depot.q1', senseId: 'depot.s1', errorType: 'meaning', type: '词义选择', prompt: '「depot」在本条的核心意思是：', options: ['仓库', '完全相反的意思', '一种古代钱币'], answer: '仓库', explain: 'depot：仓库。' },
      { id: 'depot.q2', senseId: 'depot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depot?', options: ['仓库', 'a kind of ancient coin', 'the past tense of be'], answer: '仓库', explain: '对的是「仓库」。' },
      { id: 'depot.q3', senseId: 'depot.s1', errorType: 'grammar', type: '词义选择', prompt: 'depot 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'depot.q4', senseId: 'depot.s1', errorType: 'meaning', type: '词源', prompt: '记 depot 时，哪句更稳妥？', options: ['先锁住「仓库」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「仓库」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仓库'] },
  });

  D('depreciate', {
    etymology: {
      origin: '现代英语常用词「depreciate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'depreciate', gloss: '贬值' },
      suffix: null,
      history: [
        { label: 'depreciate', text: '现代英语常用词「depreciate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：贬值。' },
      ],
      formationLogic: '核心义：贬值。',
      mnemonic: '看到 depreciate，先说出「贬值」。',
      note: '核心义：贬值。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to depreciate before the office closed.', chinese: '他们同意在办公室关门前做这件事：贬值。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depreciate.s1', en: 'The deadline forced the team to depreciate that afternoon.', zh: '截止日期逼着小组在那天下午贬值。', structure: 'depreciate / 表示 / 贬值', grammar: 'verb，围绕「贬值」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She depreciateed it yesterday without checking the real past form.', right: 'Check the past form of "depreciate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 depreciate 是verb，再套「贬值」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depreciate.q1', senseId: 'depreciate.s1', errorType: 'meaning', type: '词义选择', prompt: '「depreciate」在本条的核心意思是：', options: ['贬值', '完全相反的意思', '一种古代钱币'], answer: '贬值', explain: 'depreciate：贬值。' },
      { id: 'depreciate.q2', senseId: 'depreciate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depreciate?', options: ['贬值', 'a kind of ancient coin', 'the past tense of be'], answer: '贬值', explain: '对的是「贬值」。' },
      { id: 'depreciate.q3', senseId: 'depreciate.s1', errorType: 'grammar', type: '词义选择', prompt: 'depreciate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depreciate.q4', senseId: 'depreciate.s1', errorType: 'meaning', type: '词源', prompt: '记 depreciate 时，哪句更稳妥？', options: ['先锁住「贬值」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贬值」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贬值'] },
  });

  D('depress', {
    etymology: {
      origin: '拉丁语 deprimere「向下压」。',
      prefix: null,
      root: { text: 'depress', gloss: '使沮丧' },
      suffix: null,
      history: [
        { label: 'depress', text: '拉丁语 deprimere「向下压」。' },
        { label: '现在', text: '核心用法是：使沮丧。' },
      ],
      formationLogic: '考试认现在的用法：使沮丧。',
      mnemonic: '看到 depress，先说出「使沮丧」。',
      note: '考试认现在的用法：使沮丧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to depress before the office closed.', chinese: '他们同意在办公室关门前做这件事：使沮丧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depress.s1', en: 'The deadline forced the team to depress that afternoon.', zh: '截止日期逼着小组在那天下午使沮丧。', structure: 'depress / 表示 / 使沮丧', grammar: 'verb，围绕「使沮丧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She depressed it yesterday without checking the real past form.', right: 'Check the past form of "depress" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 depress 是verb，再套「使沮丧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depress.q1', senseId: 'depress.s1', errorType: 'meaning', type: '词义选择', prompt: '「depress」在本条的核心意思是：', options: ['使沮丧', '完全相反的意思', '一种古代钱币'], answer: '使沮丧', explain: 'depress：使沮丧。' },
      { id: 'depress.q2', senseId: 'depress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depress?', options: ['使沮丧', 'a kind of ancient coin', 'the past tense of be'], answer: '使沮丧', explain: '对的是「使沮丧」。' },
      { id: 'depress.q3', senseId: 'depress.s1', errorType: 'grammar', type: '词义选择', prompt: 'depress 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'depress.q4', senseId: 'depress.s1', errorType: 'meaning', type: '词源', prompt: '记 depress 时，哪句更稳妥？', options: ['先锁住「使沮丧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使沮丧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使沮丧'] },
  });

  D('depressed', {
    etymology: {
      origin: '现代英语常用词「depressed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'depressed', gloss: '沮丧的' },
      suffix: null,
      history: [
        { label: 'depressed', text: '现代英语常用词「depressed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：沮丧的。' },
      ],
      formationLogic: '核心义：沮丧的。',
      mnemonic: '看到 depressed，先说出「沮丧的」。',
      note: '核心义：沮丧的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was depressed.', chinese: '即使是初读者也能看出，这个结果是沮丧的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depressed.s1', en: 'They wanted a depressed answer, not a long speech.', zh: '他们要一个沮丧的的答复，不要长篇发言。', structure: 'depressed / 表示 / 沮丧的', grammar: 'adjective，围绕「沮丧的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are depressed.', right: 'The news is depressed.', reason: 'news 作主语时动词用单数。', rule: '先确定 depressed 是adjective，再套「沮丧的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depressed.q1', senseId: 'depressed.s1', errorType: 'meaning', type: '词义选择', prompt: '「depressed」在本条的核心意思是：', options: ['沮丧的', '完全相反的意思', '一种古代钱币'], answer: '沮丧的', explain: 'depressed：沮丧的。' },
      { id: 'depressed.q2', senseId: 'depressed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depressed?', options: ['沮丧的', 'a kind of ancient coin', 'the past tense of be'], answer: '沮丧的', explain: '对的是「沮丧的」。' },
      { id: 'depressed.q3', senseId: 'depressed.s1', errorType: 'grammar', type: '词义选择', prompt: 'depressed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'depressed.q4', senseId: 'depressed.s1', errorType: 'meaning', type: '词源', prompt: '记 depressed 时，哪句更稳妥？', options: ['先锁住「沮丧的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沮丧的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沮丧的'] },
  });

  D('deprive', {
    etymology: {
      origin: '英语派生：depr + -ive，词性转到「剥夺」。',
      prefix: null,
      root: { text: 'depr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deprive', text: '英语派生：depr + -ive，词性转到「剥夺」。' },
        { label: '现在', text: '核心用法是：剥夺。' },
      ],
      formationLogic: '先认词干 depr，再看词尾。',
      mnemonic: '看到 deprive，先说出「剥夺」。',
      note: '先认词干 depr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deprive before the office closed.', chinese: '他们同意在办公室关门前做这件事：剥夺。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deprive.s1', en: 'The deadline forced the team to deprive that afternoon.', zh: '截止日期逼着小组在那天下午剥夺。', structure: 'deprive / 表示 / 剥夺', grammar: 'verb，围绕「剥夺」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She depriveed it yesterday without checking the real past form.', right: 'Check the past form of "deprive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deprive 是verb，再套「剥夺」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deprive.q1', senseId: 'deprive.s1', errorType: 'meaning', type: '词义选择', prompt: '「deprive」在本条的核心意思是：', options: ['剥夺', '完全相反的意思', '一种古代钱币'], answer: '剥夺', explain: 'deprive：剥夺。' },
      { id: 'deprive.q2', senseId: 'deprive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deprive?', options: ['剥夺', 'a kind of ancient coin', 'the past tense of be'], answer: '剥夺', explain: '对的是「剥夺」。' },
      { id: 'deprive.q3', senseId: 'deprive.s1', errorType: 'grammar', type: '词义选择', prompt: 'deprive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deprive.q4', senseId: 'deprive.s1', errorType: 'meaning', type: '词源', prompt: '记 deprive 时，哪句更稳妥？', options: ['先锁住「剥夺」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「剥夺」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['剥夺'] },
  });

  D('depth', {
    etymology: {
      origin: 'deep + -th。',
      prefix: null,
      root: { text: 'depth', gloss: '深度' },
      suffix: null,
      history: [
        { label: 'depth', text: 'deep + -th。' },
        { label: '现在', text: '核心用法是：深度。' },
      ],
      formationLogic: '考试认现在的用法：深度。',
      mnemonic: '看到 depth，先说出「深度」。',
      note: '考试认现在的用法：深度。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one depth.', chinese: '这一章反复回到同一个点：深度。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'depth.s1', en: 'Without that depth, the next paragraph is hard to follow.', zh: '没有这个深度，下一段会很难读。', structure: 'depth / 表示 / 深度', grammar: 'noun，围绕「深度」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the depth.', right: 'He gave me some advice about the depth.', reason: 'advice 不可数。名词 depth 的单复数按词典词形记。', rule: '先确定 depth 是noun，再套「深度」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'depth.q1', senseId: 'depth.s1', errorType: 'meaning', type: '词义选择', prompt: '「depth」在本条的核心意思是：', options: ['深度', '完全相反的意思', '一种古代钱币'], answer: '深度', explain: 'depth：深度。' },
      { id: 'depth.q2', senseId: 'depth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches depth?', options: ['深度', 'a kind of ancient coin', 'the past tense of be'], answer: '深度', explain: '对的是「深度」。' },
      { id: 'depth.q3', senseId: 'depth.s1', errorType: 'grammar', type: '词义选择', prompt: 'depth 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'depth.q4', senseId: 'depth.s1', errorType: 'meaning', type: '词源', prompt: '记 depth 时，哪句更稳妥？', options: ['先锁住「深度」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深度」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深度'] },
  });

  D('deputy', {
    etymology: {
      origin: '现代英语常用词「deputy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deputy', gloss: '副手' },
      suffix: null,
      history: [
        { label: 'deputy', text: '现代英语常用词「deputy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：副手。' },
      ],
      formationLogic: '核心义：副手。',
      mnemonic: '看到 deputy，先说出「副手」。',
      note: '核心义：副手。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deputy.', chinese: '这一章反复回到同一个点：副手。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deputy.s1', en: 'Without that deputy, the next paragraph is hard to follow.', zh: '没有这个副手，下一段会很难读。', structure: 'deputy / 表示 / 副手', grammar: 'noun，围绕「副手」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deputy.', right: 'He gave me some advice about the deputy.', reason: 'advice 不可数。名词 deputy 的单复数按词典词形记。', rule: '先确定 deputy 是noun，再套「副手」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deputy.q1', senseId: 'deputy.s1', errorType: 'meaning', type: '词义选择', prompt: '「deputy」在本条的核心意思是：', options: ['副手', '完全相反的意思', '一种古代钱币'], answer: '副手', explain: 'deputy：副手。' },
      { id: 'deputy.q2', senseId: 'deputy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deputy?', options: ['副手', 'a kind of ancient coin', 'the past tense of be'], answer: '副手', explain: '对的是「副手」。' },
      { id: 'deputy.q3', senseId: 'deputy.s1', errorType: 'grammar', type: '词义选择', prompt: 'deputy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deputy.q4', senseId: 'deputy.s1', errorType: 'meaning', type: '词源', prompt: '记 deputy 时，哪句更稳妥？', options: ['先锁住「副手」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「副手」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['副手'] },
  });

  D('derail', {
    etymology: {
      origin: '现代英语常用词「derail」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'derail', gloss: '使脱轨' },
      suffix: null,
      history: [
        { label: 'derail', text: '现代英语常用词「derail」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使脱轨。' },
      ],
      formationLogic: '核心义：使脱轨。',
      mnemonic: '看到 derail，先说出「使脱轨」。',
      note: '核心义：使脱轨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to derail before the office closed.', chinese: '他们同意在办公室关门前做这件事：使脱轨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'derail.s1', en: 'The deadline forced the team to derail that afternoon.', zh: '截止日期逼着小组在那天下午使脱轨。', structure: 'derail / 表示 / 使脱轨', grammar: 'verb，围绕「使脱轨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She derailed it yesterday without checking the real past form.', right: 'Check the past form of "derail" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 derail 是verb，再套「使脱轨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'derail.q1', senseId: 'derail.s1', errorType: 'meaning', type: '词义选择', prompt: '「derail」在本条的核心意思是：', options: ['使脱轨', '完全相反的意思', '一种古代钱币'], answer: '使脱轨', explain: 'derail：使脱轨。' },
      { id: 'derail.q2', senseId: 'derail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches derail?', options: ['使脱轨', 'a kind of ancient coin', 'the past tense of be'], answer: '使脱轨', explain: '对的是「使脱轨」。' },
      { id: 'derail.q3', senseId: 'derail.s1', errorType: 'grammar', type: '词义选择', prompt: 'derail 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'derail.q4', senseId: 'derail.s1', errorType: 'meaning', type: '词源', prompt: '记 derail 时，哪句更稳妥？', options: ['先锁住「使脱轨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使脱轨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使脱轨'] },
  });

  D('deranged', {
    etymology: {
      origin: '现代英语常用词「deranged」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deranged', gloss: '精神错乱的' },
      suffix: null,
      history: [
        { label: 'deranged', text: '现代英语常用词「deranged」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：精神错乱的。' },
      ],
      formationLogic: '核心义：精神错乱的。',
      mnemonic: '看到 deranged，先说出「精神错乱的」。',
      note: '核心义：精神错乱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deranged.', chinese: '即使是初读者也能看出，这个结果是精神错乱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deranged.s1', en: 'They wanted a deranged answer, not a long speech.', zh: '他们要一个精神错乱的的答复，不要长篇发言。', structure: 'deranged / 表示 / 精神错乱的', grammar: 'adjective，围绕「精神错乱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deranged.', right: 'The news is deranged.', reason: 'news 作主语时动词用单数。', rule: '先确定 deranged 是adjective，再套「精神错乱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deranged.q1', senseId: 'deranged.s1', errorType: 'meaning', type: '词义选择', prompt: '「deranged」在本条的核心意思是：', options: ['精神错乱的', '完全相反的意思', '一种古代钱币'], answer: '精神错乱的', explain: 'deranged：精神错乱的。' },
      { id: 'deranged.q2', senseId: 'deranged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deranged?', options: ['精神错乱的', 'a kind of ancient coin', 'the past tense of be'], answer: '精神错乱的', explain: '对的是「精神错乱的」。' },
      { id: 'deranged.q3', senseId: 'deranged.s1', errorType: 'grammar', type: '词义选择', prompt: 'deranged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deranged.q4', senseId: 'deranged.s1', errorType: 'meaning', type: '词源', prompt: '记 deranged 时，哪句更稳妥？', options: ['先锁住「精神错乱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「精神错乱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['精神错乱的'] },
  });

  D('deregulate', {
    etymology: {
      origin: '现代英语常用词「deregulate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deregulate', gloss: '放松管制' },
      suffix: null,
      history: [
        { label: 'deregulate', text: '现代英语常用词「deregulate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：放松管制。' },
      ],
      formationLogic: '核心义：放松管制。',
      mnemonic: '看到 deregulate，先说出「放松管制」。',
      note: '核心义：放松管制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deregulate before the office closed.', chinese: '他们同意在办公室关门前做这件事：放松管制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deregulate.s1', en: 'The deadline forced the team to deregulate that afternoon.', zh: '截止日期逼着小组在那天下午放松管制。', structure: 'deregulate / 表示 / 放松管制', grammar: 'verb，围绕「放松管制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deregulateed it yesterday without checking the real past form.', right: 'Check the past form of "deregulate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deregulate 是verb，再套「放松管制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deregulate.q1', senseId: 'deregulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「deregulate」在本条的核心意思是：', options: ['放松管制', '完全相反的意思', '一种古代钱币'], answer: '放松管制', explain: 'deregulate：放松管制。' },
      { id: 'deregulate.q2', senseId: 'deregulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deregulate?', options: ['放松管制', 'a kind of ancient coin', 'the past tense of be'], answer: '放松管制', explain: '对的是「放松管制」。' },
      { id: 'deregulate.q3', senseId: 'deregulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'deregulate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deregulate.q4', senseId: 'deregulate.s1', errorType: 'meaning', type: '词源', prompt: '记 deregulate 时，哪句更稳妥？', options: ['先锁住「放松管制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「放松管制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放松管制'] },
  });

  D('deride', {
    etymology: {
      origin: '现代英语常用词「deride」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deride', gloss: '嘲笑' },
      suffix: null,
      history: [
        { label: 'deride', text: '现代英语常用词「deride」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：嘲笑。' },
      ],
      formationLogic: '核心义：嘲笑。',
      mnemonic: '看到 deride，先说出「嘲笑」。',
      note: '核心义：嘲笑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deride before the office closed.', chinese: '他们同意在办公室关门前做这件事：嘲笑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deride.s1', en: 'The deadline forced the team to deride that afternoon.', zh: '截止日期逼着小组在那天下午嘲笑。', structure: 'deride / 表示 / 嘲笑', grammar: 'verb，围绕「嘲笑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She derideed it yesterday without checking the real past form.', right: 'Check the past form of "deride" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deride 是verb，再套「嘲笑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deride.q1', senseId: 'deride.s1', errorType: 'meaning', type: '词义选择', prompt: '「deride」在本条的核心意思是：', options: ['嘲笑', '完全相反的意思', '一种古代钱币'], answer: '嘲笑', explain: 'deride：嘲笑。' },
      { id: 'deride.q2', senseId: 'deride.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deride?', options: ['嘲笑', 'a kind of ancient coin', 'the past tense of be'], answer: '嘲笑', explain: '对的是「嘲笑」。' },
      { id: 'deride.q3', senseId: 'deride.s1', errorType: 'grammar', type: '词义选择', prompt: 'deride 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deride.q4', senseId: 'deride.s1', errorType: 'meaning', type: '词源', prompt: '记 deride 时，哪句更稳妥？', options: ['先锁住「嘲笑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「嘲笑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['嘲笑'] },
  });

  D('derivative', {
    etymology: {
      origin: '英语派生：derivat + -ive，词性转到「派生物」。',
      prefix: null,
      root: { text: 'derivat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'derivative', text: '英语派生：derivat + -ive，词性转到「派生物」。' },
        { label: '现在', text: '核心用法是：派生物。' },
      ],
      formationLogic: '先认词干 derivat，再看词尾。',
      mnemonic: '看到 derivative，先说出「派生物」。',
      note: '先认词干 derivat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one derivative.', chinese: '这一章反复回到同一个点：派生物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'derivative.s1', en: 'Without that derivative, the next paragraph is hard to follow.', zh: '没有这个派生物，下一段会很难读。', structure: 'derivative / 表示 / 派生物', grammar: 'noun，围绕「派生物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the derivative.', right: 'He gave me some advice about the derivative.', reason: 'advice 不可数。名词 derivative 的单复数按词典词形记。', rule: '先确定 derivative 是noun，再套「派生物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'derivative.q1', senseId: 'derivative.s1', errorType: 'meaning', type: '词义选择', prompt: '「derivative」在本条的核心意思是：', options: ['派生物', '完全相反的意思', '一种古代钱币'], answer: '派生物', explain: 'derivative：派生物。' },
      { id: 'derivative.q2', senseId: 'derivative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches derivative?', options: ['派生物', 'a kind of ancient coin', 'the past tense of be'], answer: '派生物', explain: '对的是「派生物」。' },
      { id: 'derivative.q3', senseId: 'derivative.s1', errorType: 'grammar', type: '词义选择', prompt: 'derivative 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'derivative.q4', senseId: 'derivative.s1', errorType: 'meaning', type: '词源', prompt: '记 derivative 时，哪句更稳妥？', options: ['先锁住「派生物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「派生物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['派生物'] },
  });

  D('derive', {
    etymology: {
      origin: '拉丁语 derivare「引水」。从源头引出来。',
      prefix: null,
      root: { text: 'derive', gloss: '得到' },
      suffix: null,
      history: [
        { label: 'derive', text: '拉丁语 derivare「引水」。从源头引出来。' },
        { label: '现在', text: '核心用法是：得到。' },
      ],
      formationLogic: '考试认现在的用法：得到。',
      mnemonic: '看到 derive，先说出「得到」。',
      note: '考试认现在的用法：得到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to derive before the office closed.', chinese: '他们同意在办公室关门前做这件事：得到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'derive.s1', en: 'The deadline forced the team to derive that afternoon.', zh: '截止日期逼着小组在那天下午得到。', structure: 'derive / 表示 / 得到', grammar: 'verb，围绕「得到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deriveed it yesterday without checking the real past form.', right: 'Check the past form of "derive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 derive 是verb，再套「得到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'derive.q1', senseId: 'derive.s1', errorType: 'meaning', type: '词义选择', prompt: '「derive」在本条的核心意思是：', options: ['得到', '完全相反的意思', '一种古代钱币'], answer: '得到', explain: 'derive：得到。' },
      { id: 'derive.q2', senseId: 'derive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches derive?', options: ['得到', 'a kind of ancient coin', 'the past tense of be'], answer: '得到', explain: '对的是「得到」。' },
      { id: 'derive.q3', senseId: 'derive.s1', errorType: 'grammar', type: '词义选择', prompt: 'derive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'derive.q4', senseId: 'derive.s1', errorType: 'meaning', type: '词源', prompt: '记 derive 时，哪句更稳妥？', options: ['先锁住「得到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「得到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['得到'] },
  });

  D('descend', {
    etymology: {
      origin: '现代英语常用词「descend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'descend', gloss: '下降' },
      suffix: null,
      history: [
        { label: 'descend', text: '现代英语常用词「descend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：下降。' },
      ],
      formationLogic: '核心义：下降。',
      mnemonic: '看到 descend，先说出「下降」。',
      note: '核心义：下降。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to descend before the office closed.', chinese: '他们同意在办公室关门前做这件事：下降。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'descend.s1', en: 'The deadline forced the team to descend that afternoon.', zh: '截止日期逼着小组在那天下午下降。', structure: 'descend / 表示 / 下降', grammar: 'verb，围绕「下降」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She descended it yesterday without checking the real past form.', right: 'Check the past form of "descend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 descend 是verb，再套「下降」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'descend.q1', senseId: 'descend.s1', errorType: 'meaning', type: '词义选择', prompt: '「descend」在本条的核心意思是：', options: ['下降', '完全相反的意思', '一种古代钱币'], answer: '下降', explain: 'descend：下降。' },
      { id: 'descend.q2', senseId: 'descend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches descend?', options: ['下降', 'a kind of ancient coin', 'the past tense of be'], answer: '下降', explain: '对的是「下降」。' },
      { id: 'descend.q3', senseId: 'descend.s1', errorType: 'grammar', type: '词义选择', prompt: 'descend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'descend.q4', senseId: 'descend.s1', errorType: 'meaning', type: '词源', prompt: '记 descend 时，哪句更稳妥？', options: ['先锁住「下降」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下降」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下降'] },
  });

  D('descendant', {
    etymology: {
      origin: '现代英语常用词「descendant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'descendant', gloss: '后代' },
      suffix: null,
      history: [
        { label: 'descendant', text: '现代英语常用词「descendant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：后代。' },
      ],
      formationLogic: '核心义：后代。',
      mnemonic: '看到 descendant，先说出「后代」。',
      note: '核心义：后代。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one descendant.', chinese: '这一章反复回到同一个点：后代。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'descendant.s1', en: 'Without that descendant, the next paragraph is hard to follow.', zh: '没有这个后代，下一段会很难读。', structure: 'descendant / 表示 / 后代', grammar: 'noun，围绕「后代」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the descendant.', right: 'He gave me some advice about the descendant.', reason: 'advice 不可数。名词 descendant 的单复数按词典词形记。', rule: '先确定 descendant 是noun，再套「后代」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'descendant.q1', senseId: 'descendant.s1', errorType: 'meaning', type: '词义选择', prompt: '「descendant」在本条的核心意思是：', options: ['后代', '完全相反的意思', '一种古代钱币'], answer: '后代', explain: 'descendant：后代。' },
      { id: 'descendant.q2', senseId: 'descendant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches descendant?', options: ['后代', 'a kind of ancient coin', 'the past tense of be'], answer: '后代', explain: '对的是「后代」。' },
      { id: 'descendant.q3', senseId: 'descendant.s1', errorType: 'grammar', type: '词义选择', prompt: 'descendant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'descendant.q4', senseId: 'descendant.s1', errorType: 'meaning', type: '词源', prompt: '记 descendant 时，哪句更稳妥？', options: ['先锁住「后代」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「后代」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['后代'] },
  });

  D('descent', {
    etymology: {
      origin: '现代英语常用词「descent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'descent', gloss: '下降' },
      suffix: null,
      history: [
        { label: 'descent', text: '现代英语常用词「descent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：下降。' },
      ],
      formationLogic: '核心义：下降。',
      mnemonic: '看到 descent，先说出「下降」。',
      note: '核心义：下降。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one descent.', chinese: '这一章反复回到同一个点：下降。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'descent.s1', en: 'Without that descent, the next paragraph is hard to follow.', zh: '没有这个下降，下一段会很难读。', structure: 'descent / 表示 / 下降', grammar: 'noun，围绕「下降」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the descent.', right: 'He gave me some advice about the descent.', reason: 'advice 不可数。名词 descent 的单复数按词典词形记。', rule: '先确定 descent 是noun，再套「下降」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'descent.q1', senseId: 'descent.s1', errorType: 'meaning', type: '词义选择', prompt: '「descent」在本条的核心意思是：', options: ['下降', '完全相反的意思', '一种古代钱币'], answer: '下降', explain: 'descent：下降。' },
      { id: 'descent.q2', senseId: 'descent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches descent?', options: ['下降', 'a kind of ancient coin', 'the past tense of be'], answer: '下降', explain: '对的是「下降」。' },
      { id: 'descent.q3', senseId: 'descent.s1', errorType: 'grammar', type: '词义选择', prompt: 'descent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'descent.q4', senseId: 'descent.s1', errorType: 'meaning', type: '词源', prompt: '记 descent 时，哪句更稳妥？', options: ['先锁住「下降」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下降」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下降'] },
  });

  D('describe', {
    etymology: {
      origin: '拉丁语 describere「写下来」，scribere「写」。',
      prefix: null,
      root: { text: 'describe', gloss: '描述' },
      suffix: null,
      history: [
        { label: 'describe', text: '拉丁语 describere「写下来」，scribere「写」。' },
        { label: '现在', text: '核心用法是：描述。' },
      ],
      formationLogic: '考试认现在的用法：描述。',
      mnemonic: '看到 describe，先说出「描述」。',
      note: '考试认现在的用法：描述。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to describe before the office closed.', chinese: '他们同意在办公室关门前做这件事：描述。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'describe.s1', en: 'The deadline forced the team to describe that afternoon.', zh: '截止日期逼着小组在那天下午描述。', structure: 'describe / 表示 / 描述', grammar: 'verb，围绕「描述」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She describeed it yesterday without checking the real past form.', right: 'Check the past form of "describe" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 describe 是verb，再套「描述」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'describe.q1', senseId: 'describe.s1', errorType: 'meaning', type: '词义选择', prompt: '「describe」在本条的核心意思是：', options: ['描述', '完全相反的意思', '一种古代钱币'], answer: '描述', explain: 'describe：描述。' },
      { id: 'describe.q2', senseId: 'describe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches describe?', options: ['描述', 'a kind of ancient coin', 'the past tense of be'], answer: '描述', explain: '对的是「描述」。' },
      { id: 'describe.q3', senseId: 'describe.s1', errorType: 'grammar', type: '词义选择', prompt: 'describe 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'describe.q4', senseId: 'describe.s1', errorType: 'meaning', type: '词源', prompt: '记 describe 时，哪句更稳妥？', options: ['先锁住「描述」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「描述」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['描述'] },
  });

  D('description', {
    etymology: {
      origin: 'describe 的名词。',
      prefix: null,
      root: { text: 'description', gloss: '描述' },
      suffix: null,
      history: [
        { label: 'description', text: 'describe 的名词。' },
        { label: '现在', text: '核心用法是：描述。' },
      ],
      formationLogic: '考试认现在的用法：描述。',
      mnemonic: '看到 description，先说出「描述」。',
      note: '考试认现在的用法：描述。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one description.', chinese: '这一章反复回到同一个点：描述。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'description.s1', en: 'Without that description, the next paragraph is hard to follow.', zh: '没有这个描述，下一段会很难读。', structure: 'description / 表示 / 描述', grammar: 'noun，围绕「描述」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the description.', right: 'He gave me some advice about the description.', reason: 'advice 不可数。名词 description 的单复数按词典词形记。', rule: '先确定 description 是noun，再套「描述」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'description.q1', senseId: 'description.s1', errorType: 'meaning', type: '词义选择', prompt: '「description」在本条的核心意思是：', options: ['描述', '完全相反的意思', '一种古代钱币'], answer: '描述', explain: 'description：描述。' },
      { id: 'description.q2', senseId: 'description.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches description?', options: ['描述', 'a kind of ancient coin', 'the past tense of be'], answer: '描述', explain: '对的是「描述」。' },
      { id: 'description.q3', senseId: 'description.s1', errorType: 'grammar', type: '词义选择', prompt: 'description 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'description.q4', senseId: 'description.s1', errorType: 'meaning', type: '词源', prompt: '记 description 时，哪句更稳妥？', options: ['先锁住「描述」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「描述」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['描述'] },
  });

  D('desecrate', {
    etymology: {
      origin: '现代英语常用词「desecrate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'desecrate', gloss: '亵渎' },
      suffix: null,
      history: [
        { label: 'desecrate', text: '现代英语常用词「desecrate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：亵渎。' },
      ],
      formationLogic: '核心义：亵渎。',
      mnemonic: '看到 desecrate，先说出「亵渎」。',
      note: '核心义：亵渎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to desecrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：亵渎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desecrate.s1', en: 'The deadline forced the team to desecrate that afternoon.', zh: '截止日期逼着小组在那天下午亵渎。', structure: 'desecrate / 表示 / 亵渎', grammar: 'verb，围绕「亵渎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She desecrateed it yesterday without checking the real past form.', right: 'Check the past form of "desecrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 desecrate 是verb，再套「亵渎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desecrate.q1', senseId: 'desecrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「desecrate」在本条的核心意思是：', options: ['亵渎', '完全相反的意思', '一种古代钱币'], answer: '亵渎', explain: 'desecrate：亵渎。' },
      { id: 'desecrate.q2', senseId: 'desecrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desecrate?', options: ['亵渎', 'a kind of ancient coin', 'the past tense of be'], answer: '亵渎', explain: '对的是「亵渎」。' },
      { id: 'desecrate.q3', senseId: 'desecrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'desecrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'desecrate.q4', senseId: 'desecrate.s1', errorType: 'meaning', type: '词源', prompt: '记 desecrate 时，哪句更稳妥？', options: ['先锁住「亵渎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「亵渎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['亵渎'] },
  });

  D('desert', {
    etymology: {
      origin: '拉丁语 deserere「离开」。沙漠是被离开的地方。甜点 dessert 不同词。',
      prefix: null,
      root: { text: 'desert', gloss: '沙漠' },
      suffix: null,
      history: [
        { label: 'desert', text: '拉丁语 deserere「离开」。沙漠是被离开的地方。甜点 dessert 不同词。' },
        { label: '现在', text: '核心用法是：沙漠。' },
      ],
      formationLogic: '考试认现在的用法：沙漠。',
      mnemonic: '看到 desert，先说出「沙漠」。',
      note: '考试认现在的用法：沙漠。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one desert.', chinese: '这一章反复回到同一个点：沙漠。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desert.s1', en: 'Without that desert, the next paragraph is hard to follow.', zh: '没有这个沙漠，下一段会很难读。', structure: 'desert / 表示 / 沙漠', grammar: 'noun，围绕「沙漠」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the desert.', right: 'He gave me some advice about the desert.', reason: 'advice 不可数。名词 desert 的单复数按词典词形记。', rule: '先确定 desert 是noun，再套「沙漠」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desert.q1', senseId: 'desert.s1', errorType: 'meaning', type: '词义选择', prompt: '「desert」在本条的核心意思是：', options: ['沙漠', '完全相反的意思', '一种古代钱币'], answer: '沙漠', explain: 'desert：沙漠。' },
      { id: 'desert.q2', senseId: 'desert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desert?', options: ['沙漠', 'a kind of ancient coin', 'the past tense of be'], answer: '沙漠', explain: '对的是「沙漠」。' },
      { id: 'desert.q3', senseId: 'desert.s1', errorType: 'grammar', type: '词义选择', prompt: 'desert 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'desert.q4', senseId: 'desert.s1', errorType: 'meaning', type: '词源', prompt: '记 desert 时，哪句更稳妥？', options: ['先锁住「沙漠」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沙漠」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沙漠'] },
  });

  D('deserted', {
    etymology: {
      origin: '现代英语常用词「deserted」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deserted', gloss: '被抛弃的' },
      suffix: null,
      history: [
        { label: 'deserted', text: '现代英语常用词「deserted」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被抛弃的。' },
      ],
      formationLogic: '核心义：被抛弃的。',
      mnemonic: '看到 deserted，先说出「被抛弃的」。',
      note: '核心义：被抛弃的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deserted.', chinese: '即使是初读者也能看出，这个结果是被抛弃的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deserted.s1', en: 'They wanted a deserted answer, not a long speech.', zh: '他们要一个被抛弃的的答复，不要长篇发言。', structure: 'deserted / 表示 / 被抛弃的', grammar: 'adjective，围绕「被抛弃的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deserted.', right: 'The news is deserted.', reason: 'news 作主语时动词用单数。', rule: '先确定 deserted 是adjective，再套「被抛弃的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deserted.q1', senseId: 'deserted.s1', errorType: 'meaning', type: '词义选择', prompt: '「deserted」在本条的核心意思是：', options: ['被抛弃的', '完全相反的意思', '一种古代钱币'], answer: '被抛弃的', explain: 'deserted：被抛弃的。' },
      { id: 'deserted.q2', senseId: 'deserted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deserted?', options: ['被抛弃的', 'a kind of ancient coin', 'the past tense of be'], answer: '被抛弃的', explain: '对的是「被抛弃的」。' },
      { id: 'deserted.q3', senseId: 'deserted.s1', errorType: 'grammar', type: '词义选择', prompt: 'deserted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deserted.q4', senseId: 'deserted.s1', errorType: 'meaning', type: '词源', prompt: '记 deserted 时，哪句更稳妥？', options: ['先锁住「被抛弃的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被抛弃的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被抛弃的'] },
  });

  D('deserve', {
    etymology: {
      origin: '拉丁语 deservire「热心服务」。服务到值得。',
      prefix: null,
      root: { text: 'deserve', gloss: '应得' },
      suffix: null,
      history: [
        { label: 'deserve', text: '拉丁语 deservire「热心服务」。服务到值得。' },
        { label: '现在', text: '核心用法是：应得。' },
      ],
      formationLogic: '考试认现在的用法：应得。',
      mnemonic: '看到 deserve，先说出「应得」。',
      note: '考试认现在的用法：应得。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deserve before the office closed.', chinese: '他们同意在办公室关门前做这件事：应得。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deserve.s1', en: 'The deadline forced the team to deserve that afternoon.', zh: '截止日期逼着小组在那天下午应得。', structure: 'deserve / 表示 / 应得', grammar: 'verb，围绕「应得」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deserveed it yesterday without checking the real past form.', right: 'Check the past form of "deserve" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deserve 是verb，再套「应得」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deserve.q1', senseId: 'deserve.s1', errorType: 'meaning', type: '词义选择', prompt: '「deserve」在本条的核心意思是：', options: ['应得', '完全相反的意思', '一种古代钱币'], answer: '应得', explain: 'deserve：应得。' },
      { id: 'deserve.q2', senseId: 'deserve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deserve?', options: ['应得', 'a kind of ancient coin', 'the past tense of be'], answer: '应得', explain: '对的是「应得」。' },
      { id: 'deserve.q3', senseId: 'deserve.s1', errorType: 'grammar', type: '词义选择', prompt: 'deserve 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deserve.q4', senseId: 'deserve.s1', errorType: 'meaning', type: '词源', prompt: '记 deserve 时，哪句更稳妥？', options: ['先锁住「应得」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「应得」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['应得'] },
  });

  D('deserving', {
    etymology: {
      origin: '英语派生：deserv + -ing，词性转到「应得的」。',
      prefix: null,
      root: { text: 'deserv', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deserving', text: '英语派生：deserv + -ing，词性转到「应得的」。' },
        { label: '现在', text: '核心用法是：应得的。' },
      ],
      formationLogic: '先认词干 deserv，再看词尾。',
      mnemonic: '看到 deserving，先说出「应得的」。',
      note: '先认词干 deserv，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was deserving.', chinese: '即使是初读者也能看出，这个结果是应得的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deserving.s1', en: 'They wanted a deserving answer, not a long speech.', zh: '他们要一个应得的的答复，不要长篇发言。', structure: 'deserving / 表示 / 应得的', grammar: 'adjective，围绕「应得的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are deserving.', right: 'The news is deserving.', reason: 'news 作主语时动词用单数。', rule: '先确定 deserving 是adjective，再套「应得的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deserving.q1', senseId: 'deserving.s1', errorType: 'meaning', type: '词义选择', prompt: '「deserving」在本条的核心意思是：', options: ['应得的', '完全相反的意思', '一种古代钱币'], answer: '应得的', explain: 'deserving：应得的。' },
      { id: 'deserving.q2', senseId: 'deserving.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deserving?', options: ['应得的', 'a kind of ancient coin', 'the past tense of be'], answer: '应得的', explain: '对的是「应得的」。' },
      { id: 'deserving.q3', senseId: 'deserving.s1', errorType: 'grammar', type: '词义选择', prompt: 'deserving 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'deserving.q4', senseId: 'deserving.s1', errorType: 'meaning', type: '词源', prompt: '记 deserving 时，哪句更稳妥？', options: ['先锁住「应得的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「应得的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['应得的'] },
  });

  D('desiccant', {
    etymology: {
      origin: '现代英语常用词「desiccant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'desiccant', gloss: '干燥剂' },
      suffix: null,
      history: [
        { label: 'desiccant', text: '现代英语常用词「desiccant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：干燥剂。' },
      ],
      formationLogic: '核心义：干燥剂。',
      mnemonic: '看到 desiccant，先说出「干燥剂」。',
      note: '核心义：干燥剂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one desiccant.', chinese: '这一章反复回到同一个点：干燥剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desiccant.s1', en: 'Without that desiccant, the next paragraph is hard to follow.', zh: '没有这个干燥剂，下一段会很难读。', structure: 'desiccant / 表示 / 干燥剂', grammar: 'noun，围绕「干燥剂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the desiccant.', right: 'He gave me some advice about the desiccant.', reason: 'advice 不可数。名词 desiccant 的单复数按词典词形记。', rule: '先确定 desiccant 是noun，再套「干燥剂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desiccant.q1', senseId: 'desiccant.s1', errorType: 'meaning', type: '词义选择', prompt: '「desiccant」在本条的核心意思是：', options: ['干燥剂', '完全相反的意思', '一种古代钱币'], answer: '干燥剂', explain: 'desiccant：干燥剂。' },
      { id: 'desiccant.q2', senseId: 'desiccant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desiccant?', options: ['干燥剂', 'a kind of ancient coin', 'the past tense of be'], answer: '干燥剂', explain: '对的是「干燥剂」。' },
      { id: 'desiccant.q3', senseId: 'desiccant.s1', errorType: 'grammar', type: '词义选择', prompt: 'desiccant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'desiccant.q4', senseId: 'desiccant.s1', errorType: 'meaning', type: '词源', prompt: '记 desiccant 时，哪句更稳妥？', options: ['先锁住「干燥剂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干燥剂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干燥剂'] },
  });

  D('design', {
    etymology: {
      origin: '拉丁语 designare「标出来」。',
      prefix: null,
      root: { text: 'design', gloss: '设计' },
      suffix: null,
      history: [
        { label: 'design', text: '拉丁语 designare「标出来」。' },
        { label: '现在', text: '核心用法是：设计。' },
      ],
      formationLogic: '考试认现在的用法：设计。',
      mnemonic: '看到 design，先说出「设计」。',
      note: '考试认现在的用法：设计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one design.', chinese: '这一章反复回到同一个点：设计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'design.s1', en: 'Without that design, the next paragraph is hard to follow.', zh: '没有这个设计，下一段会很难读。', structure: 'design / 表示 / 设计', grammar: 'noun，围绕「设计」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the design.', right: 'He gave me some advice about the design.', reason: 'advice 不可数。名词 design 的单复数按词典词形记。', rule: '先确定 design 是noun，再套「设计」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'design.q1', senseId: 'design.s1', errorType: 'meaning', type: '词义选择', prompt: '「design」在本条的核心意思是：', options: ['设计', '完全相反的意思', '一种古代钱币'], answer: '设计', explain: 'design：设计。' },
      { id: 'design.q2', senseId: 'design.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches design?', options: ['设计', 'a kind of ancient coin', 'the past tense of be'], answer: '设计', explain: '对的是「设计」。' },
      { id: 'design.q3', senseId: 'design.s1', errorType: 'grammar', type: '词义选择', prompt: 'design 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'design.q4', senseId: 'design.s1', errorType: 'meaning', type: '词源', prompt: '记 design 时，哪句更稳妥？', options: ['先锁住「设计」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设计」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设计'] },
  });

  D('designate', {
    etymology: {
      origin: '现代英语常用词「designate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'designate', gloss: '指定' },
      suffix: null,
      history: [
        { label: 'designate', text: '现代英语常用词「designate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：指定。' },
      ],
      formationLogic: '核心义：指定。',
      mnemonic: '看到 designate，先说出「指定」。',
      note: '核心义：指定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to designate before the office closed.', chinese: '他们同意在办公室关门前做这件事：指定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'designate.s1', en: 'The deadline forced the team to designate that afternoon.', zh: '截止日期逼着小组在那天下午指定。', structure: 'designate / 表示 / 指定', grammar: 'verb，围绕「指定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She designateed it yesterday without checking the real past form.', right: 'Check the past form of "designate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 designate 是verb，再套「指定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'designate.q1', senseId: 'designate.s1', errorType: 'meaning', type: '词义选择', prompt: '「designate」在本条的核心意思是：', options: ['指定', '完全相反的意思', '一种古代钱币'], answer: '指定', explain: 'designate：指定。' },
      { id: 'designate.q2', senseId: 'designate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches designate?', options: ['指定', 'a kind of ancient coin', 'the past tense of be'], answer: '指定', explain: '对的是「指定」。' },
      { id: 'designate.q3', senseId: 'designate.s1', errorType: 'grammar', type: '词义选择', prompt: 'designate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'designate.q4', senseId: 'designate.s1', errorType: 'meaning', type: '词源', prompt: '记 designate 时，哪句更稳妥？', options: ['先锁住「指定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指定'] },
  });

  D('desirable', {
    etymology: {
      origin: '英语派生：desir + -able，词性转到「令人向往的」。',
      prefix: null,
      root: { text: 'desir', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'desirable', text: '英语派生：desir + -able，词性转到「令人向往的」。' },
        { label: '现在', text: '核心用法是：令人向往的。' },
      ],
      formationLogic: '先认词干 desir，再看词尾。',
      mnemonic: '看到 desirable，先说出「令人向往的」。',
      note: '先认词干 desir，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was desirable.', chinese: '即使是初读者也能看出，这个结果是令人向往的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desirable.s1', en: 'They wanted a desirable answer, not a long speech.', zh: '他们要一个令人向往的的答复，不要长篇发言。', structure: 'desirable / 表示 / 令人向往的', grammar: 'adjective，围绕「令人向往的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are desirable.', right: 'The news is desirable.', reason: 'news 作主语时动词用单数。', rule: '先确定 desirable 是adjective，再套「令人向往的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desirable.q1', senseId: 'desirable.s1', errorType: 'meaning', type: '词义选择', prompt: '「desirable」在本条的核心意思是：', options: ['令人向往的', '完全相反的意思', '一种古代钱币'], answer: '令人向往的', explain: 'desirable：令人向往的。' },
      { id: 'desirable.q2', senseId: 'desirable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desirable?', options: ['令人向往的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人向往的', explain: '对的是「令人向往的」。' },
      { id: 'desirable.q3', senseId: 'desirable.s1', errorType: 'grammar', type: '词义选择', prompt: 'desirable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'desirable.q4', senseId: 'desirable.s1', errorType: 'meaning', type: '词源', prompt: '记 desirable 时，哪句更稳妥？', options: ['先锁住「令人向往的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「令人向往的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人向往的'] },
  });

  D('desire', {
    etymology: {
      origin: '拉丁语 desiderare「盼望」。',
      prefix: null,
      root: { text: 'desire', gloss: '愿望' },
      suffix: null,
      history: [
        { label: 'desire', text: '拉丁语 desiderare「盼望」。' },
        { label: '现在', text: '核心用法是：愿望。' },
      ],
      formationLogic: '考试认现在的用法：愿望。',
      mnemonic: '看到 desire，先说出「愿望」。',
      note: '考试认现在的用法：愿望。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one desire.', chinese: '这一章反复回到同一个点：愿望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desire.s1', en: 'Without that desire, the next paragraph is hard to follow.', zh: '没有这个愿望，下一段会很难读。', structure: 'desire / 表示 / 愿望', grammar: 'noun，围绕「愿望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the desire.', right: 'He gave me some advice about the desire.', reason: 'advice 不可数。名词 desire 的单复数按词典词形记。', rule: '先确定 desire 是noun，再套「愿望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desire.q1', senseId: 'desire.s1', errorType: 'meaning', type: '词义选择', prompt: '「desire」在本条的核心意思是：', options: ['愿望', '完全相反的意思', '一种古代钱币'], answer: '愿望', explain: 'desire：愿望。' },
      { id: 'desire.q2', senseId: 'desire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desire?', options: ['愿望', 'a kind of ancient coin', 'the past tense of be'], answer: '愿望', explain: '对的是「愿望」。' },
      { id: 'desire.q3', senseId: 'desire.s1', errorType: 'grammar', type: '词义选择', prompt: 'desire 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'desire.q4', senseId: 'desire.s1', errorType: 'meaning', type: '词源', prompt: '记 desire 时，哪句更稳妥？', options: ['先锁住「愿望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「愿望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['愿望'] },
  });

  D('desk', {
    etymology: {
      origin: '拉丁语 discus「圆盘」。书桌来自写字台。',
      prefix: null,
      root: { text: 'desk', gloss: '书桌' },
      suffix: null,
      history: [
        { label: 'desk', text: '拉丁语 discus「圆盘」。书桌来自写字台。' },
        { label: '现在', text: '核心用法是：书桌。' },
      ],
      formationLogic: '考试认现在的用法：书桌。',
      mnemonic: '看到 desk，先说出「书桌」。',
      note: '考试认现在的用法：书桌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one desk.', chinese: '这一章反复回到同一个点：书桌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desk.s1', en: 'Without that desk, the next paragraph is hard to follow.', zh: '没有这个书桌，下一段会很难读。', structure: 'desk / 表示 / 书桌', grammar: 'noun，围绕「书桌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the desk.', right: 'He gave me some advice about the desk.', reason: 'advice 不可数。名词 desk 的单复数按词典词形记。', rule: '先确定 desk 是noun，再套「书桌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desk.q1', senseId: 'desk.s1', errorType: 'meaning', type: '词义选择', prompt: '「desk」在本条的核心意思是：', options: ['书桌', '完全相反的意思', '一种古代钱币'], answer: '书桌', explain: 'desk：书桌。' },
      { id: 'desk.q2', senseId: 'desk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desk?', options: ['书桌', 'a kind of ancient coin', 'the past tense of be'], answer: '书桌', explain: '对的是「书桌」。' },
      { id: 'desk.q3', senseId: 'desk.s1', errorType: 'grammar', type: '词义选择', prompt: 'desk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'desk.q4', senseId: 'desk.s1', errorType: 'meaning', type: '词源', prompt: '记 desk 时，哪句更稳妥？', options: ['先锁住「书桌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「书桌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['书桌'] },
  });

  D('desktop', {
    etymology: {
      origin: '现代英语常用词「desktop」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'desktop', gloss: '桌面' },
      suffix: null,
      history: [
        { label: 'desktop', text: '现代英语常用词「desktop」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：桌面。' },
      ],
      formationLogic: '核心义：桌面。',
      mnemonic: '看到 desktop，先说出「桌面」。',
      note: '核心义：桌面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one desktop.', chinese: '这一章反复回到同一个点：桌面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desktop.s1', en: 'Without that desktop, the next paragraph is hard to follow.', zh: '没有这个桌面，下一段会很难读。', structure: 'desktop / 表示 / 桌面', grammar: 'noun，围绕「桌面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the desktop.', right: 'He gave me some advice about the desktop.', reason: 'advice 不可数。名词 desktop 的单复数按词典词形记。', rule: '先确定 desktop 是noun，再套「桌面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desktop.q1', senseId: 'desktop.s1', errorType: 'meaning', type: '词义选择', prompt: '「desktop」在本条的核心意思是：', options: ['桌面', '完全相反的意思', '一种古代钱币'], answer: '桌面', explain: 'desktop：桌面。' },
      { id: 'desktop.q2', senseId: 'desktop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desktop?', options: ['桌面', 'a kind of ancient coin', 'the past tense of be'], answer: '桌面', explain: '对的是「桌面」。' },
      { id: 'desktop.q3', senseId: 'desktop.s1', errorType: 'grammar', type: '词义选择', prompt: 'desktop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'desktop.q4', senseId: 'desktop.s1', errorType: 'meaning', type: '词源', prompt: '记 desktop 时，哪句更稳妥？', options: ['先锁住「桌面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「桌面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['桌面'] },
  });

  D('desolate', {
    etymology: {
      origin: '现代英语常用词「desolate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'desolate', gloss: '荒凉的' },
      suffix: null,
      history: [
        { label: 'desolate', text: '现代英语常用词「desolate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：荒凉的。' },
      ],
      formationLogic: '核心义：荒凉的。',
      mnemonic: '看到 desolate，先说出「荒凉的」。',
      note: '核心义：荒凉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was desolate.', chinese: '即使是初读者也能看出，这个结果是荒凉的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desolate.s1', en: 'They wanted a desolate answer, not a long speech.', zh: '他们要一个荒凉的的答复，不要长篇发言。', structure: 'desolate / 表示 / 荒凉的', grammar: 'adjective，围绕「荒凉的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are desolate.', right: 'The news is desolate.', reason: 'news 作主语时动词用单数。', rule: '先确定 desolate 是adjective，再套「荒凉的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desolate.q1', senseId: 'desolate.s1', errorType: 'meaning', type: '词义选择', prompt: '「desolate」在本条的核心意思是：', options: ['荒凉的', '完全相反的意思', '一种古代钱币'], answer: '荒凉的', explain: 'desolate：荒凉的。' },
      { id: 'desolate.q2', senseId: 'desolate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desolate?', options: ['荒凉的', 'a kind of ancient coin', 'the past tense of be'], answer: '荒凉的', explain: '对的是「荒凉的」。' },
      { id: 'desolate.q3', senseId: 'desolate.s1', errorType: 'grammar', type: '词义选择', prompt: 'desolate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'desolate.q4', senseId: 'desolate.s1', errorType: 'meaning', type: '词源', prompt: '记 desolate 时，哪句更稳妥？', options: ['先锁住「荒凉的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「荒凉的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['荒凉的'] },
  });

  D('despair', {
    etymology: {
      origin: '拉丁语 desperare「没有希望」，sperare「希望」。',
      prefix: null,
      root: { text: 'despair', gloss: '绝望' },
      suffix: null,
      history: [
        { label: 'despair', text: '拉丁语 desperare「没有希望」，sperare「希望」。' },
        { label: '现在', text: '核心用法是：绝望。' },
      ],
      formationLogic: '考试认现在的用法：绝望。',
      mnemonic: '看到 despair，先说出「绝望」。',
      note: '考试认现在的用法：绝望。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one despair.', chinese: '这一章反复回到同一个点：绝望。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'despair.s1', en: 'Without that despair, the next paragraph is hard to follow.', zh: '没有这个绝望，下一段会很难读。', structure: 'despair / 表示 / 绝望', grammar: 'noun，围绕「绝望」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the despair.', right: 'He gave me some advice about the despair.', reason: 'advice 不可数。名词 despair 的单复数按词典词形记。', rule: '先确定 despair 是noun，再套「绝望」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'despair.q1', senseId: 'despair.s1', errorType: 'meaning', type: '词义选择', prompt: '「despair」在本条的核心意思是：', options: ['绝望', '完全相反的意思', '一种古代钱币'], answer: '绝望', explain: 'despair：绝望。' },
      { id: 'despair.q2', senseId: 'despair.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches despair?', options: ['绝望', 'a kind of ancient coin', 'the past tense of be'], answer: '绝望', explain: '对的是「绝望」。' },
      { id: 'despair.q3', senseId: 'despair.s1', errorType: 'grammar', type: '词义选择', prompt: 'despair 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'despair.q4', senseId: 'despair.s1', errorType: 'meaning', type: '词源', prompt: '记 despair 时，哪句更稳妥？', options: ['先锁住「绝望」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「绝望」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绝望'] },
  });

  D('despatch', {
    etymology: {
      origin: '现代英语常用词「despatch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'despatch', gloss: '派遣' },
      suffix: null,
      history: [
        { label: 'despatch', text: '现代英语常用词「despatch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：派遣。' },
      ],
      formationLogic: '核心义：派遣。',
      mnemonic: '看到 despatch，先说出「派遣」。',
      note: '核心义：派遣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one despatch.', chinese: '这一章反复回到同一个点：派遣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'despatch.s1', en: 'Without that despatch, the next paragraph is hard to follow.', zh: '没有这个派遣，下一段会很难读。', structure: 'despatch / 表示 / 派遣', grammar: 'noun，围绕「派遣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the despatch.', right: 'He gave me some advice about the despatch.', reason: 'advice 不可数。名词 despatch 的单复数按词典词形记。', rule: '先确定 despatch 是noun，再套「派遣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'despatch.q1', senseId: 'despatch.s1', errorType: 'meaning', type: '词义选择', prompt: '「despatch」在本条的核心意思是：', options: ['派遣', '完全相反的意思', '一种古代钱币'], answer: '派遣', explain: 'despatch：派遣。' },
      { id: 'despatch.q2', senseId: 'despatch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches despatch?', options: ['派遣', 'a kind of ancient coin', 'the past tense of be'], answer: '派遣', explain: '对的是「派遣」。' },
      { id: 'despatch.q3', senseId: 'despatch.s1', errorType: 'grammar', type: '词义选择', prompt: 'despatch 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'despatch.q4', senseId: 'despatch.s1', errorType: 'meaning', type: '词源', prompt: '记 despatch 时，哪句更稳妥？', options: ['先锁住「派遣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「派遣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['派遣'] },
  });

  D('desperate', {
    etymology: {
      origin: '拉丁语 desperatus。',
      prefix: null,
      root: { text: 'desperate', gloss: '绝望的' },
      suffix: null,
      history: [
        { label: 'desperate', text: '拉丁语 desperatus。' },
        { label: '现在', text: '核心用法是：绝望的。' },
      ],
      formationLogic: '考试认现在的用法：绝望的。',
      mnemonic: '看到 desperate，先说出「绝望的」。',
      note: '考试认现在的用法：绝望的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was desperate.', chinese: '即使是初读者也能看出，这个结果是绝望的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'desperate.s1', en: 'They wanted a desperate answer, not a long speech.', zh: '他们要一个绝望的的答复，不要长篇发言。', structure: 'desperate / 表示 / 绝望的', grammar: 'adjective，围绕「绝望的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are desperate.', right: 'The news is desperate.', reason: 'news 作主语时动词用单数。', rule: '先确定 desperate 是adjective，再套「绝望的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'desperate.q1', senseId: 'desperate.s1', errorType: 'meaning', type: '词义选择', prompt: '「desperate」在本条的核心意思是：', options: ['绝望的', '完全相反的意思', '一种古代钱币'], answer: '绝望的', explain: 'desperate：绝望的。' },
      { id: 'desperate.q2', senseId: 'desperate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches desperate?', options: ['绝望的', 'a kind of ancient coin', 'the past tense of be'], answer: '绝望的', explain: '对的是「绝望的」。' },
      { id: 'desperate.q3', senseId: 'desperate.s1', errorType: 'grammar', type: '词义选择', prompt: 'desperate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'desperate.q4', senseId: 'desperate.s1', errorType: 'meaning', type: '词源', prompt: '记 desperate 时，哪句更稳妥？', options: ['先锁住「绝望的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「绝望的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['绝望的'] },
  });

  D('despise', {
    etymology: {
      origin: '现代英语常用词「despise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'despise', gloss: '鄙视' },
      suffix: null,
      history: [
        { label: 'despise', text: '现代英语常用词「despise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鄙视。' },
      ],
      formationLogic: '核心义：鄙视。',
      mnemonic: '看到 despise，先说出「鄙视」。',
      note: '核心义：鄙视。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to despise before the office closed.', chinese: '他们同意在办公室关门前做这件事：鄙视。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'despise.s1', en: 'The deadline forced the team to despise that afternoon.', zh: '截止日期逼着小组在那天下午鄙视。', structure: 'despise / 表示 / 鄙视', grammar: 'verb，围绕「鄙视」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She despiseed it yesterday without checking the real past form.', right: 'Check the past form of "despise" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 despise 是verb，再套「鄙视」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'despise.q1', senseId: 'despise.s1', errorType: 'meaning', type: '词义选择', prompt: '「despise」在本条的核心意思是：', options: ['鄙视', '完全相反的意思', '一种古代钱币'], answer: '鄙视', explain: 'despise：鄙视。' },
      { id: 'despise.q2', senseId: 'despise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches despise?', options: ['鄙视', 'a kind of ancient coin', 'the past tense of be'], answer: '鄙视', explain: '对的是「鄙视」。' },
      { id: 'despise.q3', senseId: 'despise.s1', errorType: 'grammar', type: '词义选择', prompt: 'despise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'despise.q4', senseId: 'despise.s1', errorType: 'meaning', type: '词源', prompt: '记 despise 时，哪句更稳妥？', options: ['先锁住「鄙视」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鄙视」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鄙视'] },
  });

  D('despite', {
    etymology: {
      origin: '拉丁语 despectus「看不起」。in despite of 后来变成尽管。',
      prefix: null,
      root: { text: 'despite', gloss: '尽管' },
      suffix: null,
      history: [
        { label: 'despite', text: '拉丁语 despectus「看不起」。in despite of 后来变成尽管。' },
        { label: '现在', text: '核心用法是：尽管。' },
      ],
      formationLogic: '考试认现在的用法：尽管。',
      mnemonic: '看到 despite，先说出「尽管」。',
      note: '考试认现在的用法：尽管。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "despite" and asked the class to keep it as one unit.', chinese: '老师把「despite」圈出来，让全班把它当成一个整体。它表示尽管。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'despite.s1', en: 'In the margin she wrote "despite" so nobody would split the phrase.', zh: '她在页边写下「despite」，免得有人把这个说法拆开。意思是尽管。', structure: 'despite / 表示 / 尽管', grammar: 'preposition，围绕「尽管」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of despite and lost the point.', right: 'Keep "despite" together: it means 尽管.', reason: '「despite」要整块理解。', rule: '先确定 despite 是preposition，再套「尽管」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'despite.q1', senseId: 'despite.s1', errorType: 'meaning', type: '词义选择', prompt: '「despite」在本条的核心意思是：', options: ['尽管', '完全相反的意思', '一种古代钱币'], answer: '尽管', explain: 'despite：尽管。' },
      { id: 'despite.q2', senseId: 'despite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches despite?', options: ['尽管', 'a kind of ancient coin', 'the past tense of be'], answer: '尽管', explain: '对的是「尽管」。' },
      { id: 'despite.q3', senseId: 'despite.s1', errorType: 'grammar', type: '词义选择', prompt: 'despite 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'despite.q4', senseId: 'despite.s1', errorType: 'meaning', type: '词源', prompt: '记 despite 时，哪句更稳妥？', options: ['先锁住「尽管」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尽管」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尽管'] },
  });

  D('dessert', {
    etymology: {
      origin: '法语 desservir「撤席」。正餐后上的甜食。不是 desert。',
      prefix: null,
      root: { text: 'dessert', gloss: '甜点' },
      suffix: null,
      history: [
        { label: 'dessert', text: '法语 desservir「撤席」。正餐后上的甜食。不是 desert。' },
        { label: '现在', text: '核心用法是：甜点。' },
      ],
      formationLogic: '考试认现在的用法：甜点。',
      mnemonic: '看到 dessert，先说出「甜点」。',
      note: '考试认现在的用法：甜点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dessert.', chinese: '这一章反复回到同一个点：甜点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dessert.s1', en: 'Without that dessert, the next paragraph is hard to follow.', zh: '没有这个甜点，下一段会很难读。', structure: 'dessert / 表示 / 甜点', grammar: 'noun，围绕「甜点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dessert.', right: 'He gave me some advice about the dessert.', reason: 'advice 不可数。名词 dessert 的单复数按词典词形记。', rule: '先确定 dessert 是noun，再套「甜点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dessert.q1', senseId: 'dessert.s1', errorType: 'meaning', type: '词义选择', prompt: '「dessert」在本条的核心意思是：', options: ['甜点', '完全相反的意思', '一种古代钱币'], answer: '甜点', explain: 'dessert：甜点。' },
      { id: 'dessert.q2', senseId: 'dessert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dessert?', options: ['甜点', 'a kind of ancient coin', 'the past tense of be'], answer: '甜点', explain: '对的是「甜点」。' },
      { id: 'dessert.q3', senseId: 'dessert.s1', errorType: 'grammar', type: '词义选择', prompt: 'dessert 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dessert.q4', senseId: 'dessert.s1', errorType: 'meaning', type: '词源', prompt: '记 dessert 时，哪句更稳妥？', options: ['先锁住「甜点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「甜点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['甜点'] },
  });

  D('destination', {
    etymology: {
      origin: '拉丁语 destinare「固定目的地」。',
      prefix: null,
      root: { text: 'destination', gloss: '目的地' },
      suffix: null,
      history: [
        { label: 'destination', text: '拉丁语 destinare「固定目的地」。' },
        { label: '现在', text: '核心用法是：目的地。' },
      ],
      formationLogic: '考试认现在的用法：目的地。',
      mnemonic: '看到 destination，先说出「目的地」。',
      note: '考试认现在的用法：目的地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one destination.', chinese: '这一章反复回到同一个点：目的地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'destination.s1', en: 'Without that destination, the next paragraph is hard to follow.', zh: '没有这个目的地，下一段会很难读。', structure: 'destination / 表示 / 目的地', grammar: 'noun，围绕「目的地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the destination.', right: 'He gave me some advice about the destination.', reason: 'advice 不可数。名词 destination 的单复数按词典词形记。', rule: '先确定 destination 是noun，再套「目的地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'destination.q1', senseId: 'destination.s1', errorType: 'meaning', type: '词义选择', prompt: '「destination」在本条的核心意思是：', options: ['目的地', '完全相反的意思', '一种古代钱币'], answer: '目的地', explain: 'destination：目的地。' },
      { id: 'destination.q2', senseId: 'destination.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches destination?', options: ['目的地', 'a kind of ancient coin', 'the past tense of be'], answer: '目的地', explain: '对的是「目的地」。' },
      { id: 'destination.q3', senseId: 'destination.s1', errorType: 'grammar', type: '词义选择', prompt: 'destination 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'destination.q4', senseId: 'destination.s1', errorType: 'meaning', type: '词源', prompt: '记 destination 时，哪句更稳妥？', options: ['先锁住「目的地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「目的地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['目的地'] },
  });

  D('destine', {
    etymology: {
      origin: '现代英语常用词「destine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'destine', gloss: '注定' },
      suffix: null,
      history: [
        { label: 'destine', text: '现代英语常用词「destine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：注定。' },
      ],
      formationLogic: '核心义：注定。',
      mnemonic: '看到 destine，先说出「注定」。',
      note: '核心义：注定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to destine before the office closed.', chinese: '他们同意在办公室关门前做这件事：注定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'destine.s1', en: 'The deadline forced the team to destine that afternoon.', zh: '截止日期逼着小组在那天下午注定。', structure: 'destine / 表示 / 注定', grammar: 'verb，围绕「注定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She destineed it yesterday without checking the real past form.', right: 'Check the past form of "destine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 destine 是verb，再套「注定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'destine.q1', senseId: 'destine.s1', errorType: 'meaning', type: '词义选择', prompt: '「destine」在本条的核心意思是：', options: ['注定', '完全相反的意思', '一种古代钱币'], answer: '注定', explain: 'destine：注定。' },
      { id: 'destine.q2', senseId: 'destine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches destine?', options: ['注定', 'a kind of ancient coin', 'the past tense of be'], answer: '注定', explain: '对的是「注定」。' },
      { id: 'destine.q3', senseId: 'destine.s1', errorType: 'grammar', type: '词义选择', prompt: 'destine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'destine.q4', senseId: 'destine.s1', errorType: 'meaning', type: '词源', prompt: '记 destine 时，哪句更稳妥？', options: ['先锁住「注定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「注定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['注定'] },
  });

  D('destiny', {
    etymology: {
      origin: '现代英语常用词「destiny」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'destiny', gloss: '命运' },
      suffix: null,
      history: [
        { label: 'destiny', text: '现代英语常用词「destiny」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：命运。' },
      ],
      formationLogic: '核心义：命运。',
      mnemonic: '看到 destiny，先说出「命运」。',
      note: '核心义：命运。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one destiny.', chinese: '这一章反复回到同一个点：命运。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'destiny.s1', en: 'Without that destiny, the next paragraph is hard to follow.', zh: '没有这个命运，下一段会很难读。', structure: 'destiny / 表示 / 命运', grammar: 'noun，围绕「命运」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the destiny.', right: 'He gave me some advice about the destiny.', reason: 'advice 不可数。名词 destiny 的单复数按词典词形记。', rule: '先确定 destiny 是noun，再套「命运」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'destiny.q1', senseId: 'destiny.s1', errorType: 'meaning', type: '词义选择', prompt: '「destiny」在本条的核心意思是：', options: ['命运', '完全相反的意思', '一种古代钱币'], answer: '命运', explain: 'destiny：命运。' },
      { id: 'destiny.q2', senseId: 'destiny.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches destiny?', options: ['命运', 'a kind of ancient coin', 'the past tense of be'], answer: '命运', explain: '对的是「命运」。' },
      { id: 'destiny.q3', senseId: 'destiny.s1', errorType: 'grammar', type: '词义选择', prompt: 'destiny 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'destiny.q4', senseId: 'destiny.s1', errorType: 'meaning', type: '词源', prompt: '记 destiny 时，哪句更稳妥？', options: ['先锁住「命运」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「命运」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['命运'] },
  });

  D('destroy', {
    etymology: {
      origin: '拉丁语 destruere「拆掉结构」。',
      prefix: null,
      root: { text: 'destroy', gloss: '摧毁' },
      suffix: null,
      history: [
        { label: 'destroy', text: '拉丁语 destruere「拆掉结构」。' },
        { label: '现在', text: '核心用法是：摧毁。' },
      ],
      formationLogic: '考试认现在的用法：摧毁。',
      mnemonic: '看到 destroy，先说出「摧毁」。',
      note: '考试认现在的用法：摧毁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to destroy before the office closed.', chinese: '他们同意在办公室关门前做这件事：摧毁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'destroy.s1', en: 'The deadline forced the team to destroy that afternoon.', zh: '截止日期逼着小组在那天下午摧毁。', structure: 'destroy / 表示 / 摧毁', grammar: 'verb，围绕「摧毁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She destroyed it yesterday without checking the real past form.', right: 'Check the past form of "destroy" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 destroy 是verb，再套「摧毁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'destroy.q1', senseId: 'destroy.s1', errorType: 'meaning', type: '词义选择', prompt: '「destroy」在本条的核心意思是：', options: ['摧毁', '完全相反的意思', '一种古代钱币'], answer: '摧毁', explain: 'destroy：摧毁。' },
      { id: 'destroy.q2', senseId: 'destroy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches destroy?', options: ['摧毁', 'a kind of ancient coin', 'the past tense of be'], answer: '摧毁', explain: '对的是「摧毁」。' },
      { id: 'destroy.q3', senseId: 'destroy.s1', errorType: 'grammar', type: '词义选择', prompt: 'destroy 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'destroy.q4', senseId: 'destroy.s1', errorType: 'meaning', type: '词源', prompt: '记 destroy 时，哪句更稳妥？', options: ['先锁住「摧毁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摧毁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摧毁'] },
  });

  D('destruction', {
    etymology: {
      origin: 'destroy 的名词。',
      prefix: null,
      root: { text: 'destruction', gloss: '毁灭' },
      suffix: null,
      history: [
        { label: 'destruction', text: 'destroy 的名词。' },
        { label: '现在', text: '核心用法是：毁灭。' },
      ],
      formationLogic: '考试认现在的用法：毁灭。',
      mnemonic: '看到 destruction，先说出「毁灭」。',
      note: '考试认现在的用法：毁灭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one destruction.', chinese: '这一章反复回到同一个点：毁灭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'destruction.s1', en: 'Without that destruction, the next paragraph is hard to follow.', zh: '没有这个毁灭，下一段会很难读。', structure: 'destruction / 表示 / 毁灭', grammar: 'noun，围绕「毁灭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the destruction.', right: 'He gave me some advice about the destruction.', reason: 'advice 不可数。名词 destruction 的单复数按词典词形记。', rule: '先确定 destruction 是noun，再套「毁灭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'destruction.q1', senseId: 'destruction.s1', errorType: 'meaning', type: '词义选择', prompt: '「destruction」在本条的核心意思是：', options: ['毁灭', '完全相反的意思', '一种古代钱币'], answer: '毁灭', explain: 'destruction：毁灭。' },
      { id: 'destruction.q2', senseId: 'destruction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches destruction?', options: ['毁灭', 'a kind of ancient coin', 'the past tense of be'], answer: '毁灭', explain: '对的是「毁灭」。' },
      { id: 'destruction.q3', senseId: 'destruction.s1', errorType: 'grammar', type: '词义选择', prompt: 'destruction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'destruction.q4', senseId: 'destruction.s1', errorType: 'meaning', type: '词源', prompt: '记 destruction 时，哪句更稳妥？', options: ['先锁住「毁灭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「毁灭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毁灭'] },
  });

  D('detach', {
    etymology: {
      origin: '现代英语常用词「detach」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'detach', gloss: '拆下' },
      suffix: null,
      history: [
        { label: 'detach', text: '现代英语常用词「detach」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拆下。' },
      ],
      formationLogic: '核心义：拆下。',
      mnemonic: '看到 detach，先说出「拆下」。',
      note: '核心义：拆下。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to detach before the office closed.', chinese: '他们同意在办公室关门前做这件事：拆下。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detach.s1', en: 'The deadline forced the team to detach that afternoon.', zh: '截止日期逼着小组在那天下午拆下。', structure: 'detach / 表示 / 拆下', grammar: 'verb，围绕「拆下」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She detached it yesterday without checking the real past form.', right: 'Check the past form of "detach" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 detach 是verb，再套「拆下」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detach.q1', senseId: 'detach.s1', errorType: 'meaning', type: '词义选择', prompt: '「detach」在本条的核心意思是：', options: ['拆下', '完全相反的意思', '一种古代钱币'], answer: '拆下', explain: 'detach：拆下。' },
      { id: 'detach.q2', senseId: 'detach.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detach?', options: ['拆下', 'a kind of ancient coin', 'the past tense of be'], answer: '拆下', explain: '对的是「拆下」。' },
      { id: 'detach.q3', senseId: 'detach.s1', errorType: 'grammar', type: '词义选择', prompt: 'detach 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'detach.q4', senseId: 'detach.s1', errorType: 'meaning', type: '词源', prompt: '记 detach 时，哪句更稳妥？', options: ['先锁住「拆下」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拆下」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拆下'] },
  });

  D('detail', {
    etymology: {
      origin: '法语 détail，tailler「切」。切成小块。',
      prefix: null,
      root: { text: 'detail', gloss: '细节' },
      suffix: null,
      history: [
        { label: 'detail', text: '法语 détail，tailler「切」。切成小块。' },
        { label: '现在', text: '核心用法是：细节。' },
      ],
      formationLogic: '考试认现在的用法：细节。',
      mnemonic: '看到 detail，先说出「细节」。',
      note: '考试认现在的用法：细节。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detail.', chinese: '这一章反复回到同一个点：细节。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detail.s1', en: 'Without that detail, the next paragraph is hard to follow.', zh: '没有这个细节，下一段会很难读。', structure: 'detail / 表示 / 细节', grammar: 'noun，围绕「细节」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detail.', right: 'He gave me some advice about the detail.', reason: 'advice 不可数。名词 detail 的单复数按词典词形记。', rule: '先确定 detail 是noun，再套「细节」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detail.q1', senseId: 'detail.s1', errorType: 'meaning', type: '词义选择', prompt: '「detail」在本条的核心意思是：', options: ['细节', '完全相反的意思', '一种古代钱币'], answer: '细节', explain: 'detail：细节。' },
      { id: 'detail.q2', senseId: 'detail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detail?', options: ['细节', 'a kind of ancient coin', 'the past tense of be'], answer: '细节', explain: '对的是「细节」。' },
      { id: 'detail.q3', senseId: 'detail.s1', errorType: 'grammar', type: '词义选择', prompt: 'detail 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detail.q4', senseId: 'detail.s1', errorType: 'meaning', type: '词源', prompt: '记 detail 时，哪句更稳妥？', options: ['先锁住「细节」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「细节」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['细节'] },
  });

  D('detailed', {
    etymology: {
      origin: '现代英语常用词「detailed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'detailed', gloss: '详细的' },
      suffix: null,
      history: [
        { label: 'detailed', text: '现代英语常用词「detailed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：详细的。' },
      ],
      formationLogic: '核心义：详细的。',
      mnemonic: '看到 detailed，先说出「详细的」。',
      note: '核心义：详细的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was detailed.', chinese: '即使是初读者也能看出，这个结果是详细的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detailed.s1', en: 'They wanted a detailed answer, not a long speech.', zh: '他们要一个详细的的答复，不要长篇发言。', structure: 'detailed / 表示 / 详细的', grammar: 'adjective，围绕「详细的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are detailed.', right: 'The news is detailed.', reason: 'news 作主语时动词用单数。', rule: '先确定 detailed 是adjective，再套「详细的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detailed.q1', senseId: 'detailed.s1', errorType: 'meaning', type: '词义选择', prompt: '「detailed」在本条的核心意思是：', options: ['详细的', '完全相反的意思', '一种古代钱币'], answer: '详细的', explain: 'detailed：详细的。' },
      { id: 'detailed.q2', senseId: 'detailed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detailed?', options: ['详细的', 'a kind of ancient coin', 'the past tense of be'], answer: '详细的', explain: '对的是「详细的」。' },
      { id: 'detailed.q3', senseId: 'detailed.s1', errorType: 'grammar', type: '词义选择', prompt: 'detailed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'detailed.q4', senseId: 'detailed.s1', errorType: 'meaning', type: '词源', prompt: '记 detailed 时，哪句更稳妥？', options: ['先锁住「详细的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「详细的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['详细的'] },
  });

  D('detain', {
    etymology: {
      origin: '现代英语常用词「detain」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'detain', gloss: '拘留' },
      suffix: null,
      history: [
        { label: 'detain', text: '现代英语常用词「detain」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：拘留。' },
      ],
      formationLogic: '核心义：拘留。',
      mnemonic: '看到 detain，先说出「拘留」。',
      note: '核心义：拘留。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to detain before the office closed.', chinese: '他们同意在办公室关门前做这件事：拘留。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detain.s1', en: 'The deadline forced the team to detain that afternoon.', zh: '截止日期逼着小组在那天下午拘留。', structure: 'detain / 表示 / 拘留', grammar: 'verb，围绕「拘留」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She detained it yesterday without checking the real past form.', right: 'Check the past form of "detain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 detain 是verb，再套「拘留」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detain.q1', senseId: 'detain.s1', errorType: 'meaning', type: '词义选择', prompt: '「detain」在本条的核心意思是：', options: ['拘留', '完全相反的意思', '一种古代钱币'], answer: '拘留', explain: 'detain：拘留。' },
      { id: 'detain.q2', senseId: 'detain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detain?', options: ['拘留', 'a kind of ancient coin', 'the past tense of be'], answer: '拘留', explain: '对的是「拘留」。' },
      { id: 'detain.q3', senseId: 'detain.s1', errorType: 'grammar', type: '词义选择', prompt: 'detain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'detain.q4', senseId: 'detain.s1', errorType: 'meaning', type: '词源', prompt: '记 detain 时，哪句更稳妥？', options: ['先锁住「拘留」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拘留」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拘留'] },
  });

  D('detect', {
    etymology: {
      origin: '拉丁语 detegere「揭开盖子」，tegere「盖」。',
      prefix: null,
      root: { text: 'detect', gloss: '察觉' },
      suffix: null,
      history: [
        { label: 'detect', text: '拉丁语 detegere「揭开盖子」，tegere「盖」。' },
        { label: '现在', text: '核心用法是：察觉。' },
      ],
      formationLogic: '考试认现在的用法：察觉。',
      mnemonic: '看到 detect，先说出「察觉」。',
      note: '考试认现在的用法：察觉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to detect before the office closed.', chinese: '他们同意在办公室关门前做这件事：察觉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detect.s1', en: 'The deadline forced the team to detect that afternoon.', zh: '截止日期逼着小组在那天下午察觉。', structure: 'detect / 表示 / 察觉', grammar: 'verb，围绕「察觉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She detected it yesterday without checking the real past form.', right: 'Check the past form of "detect" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 detect 是verb，再套「察觉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detect.q1', senseId: 'detect.s1', errorType: 'meaning', type: '词义选择', prompt: '「detect」在本条的核心意思是：', options: ['察觉', '完全相反的意思', '一种古代钱币'], answer: '察觉', explain: 'detect：察觉。' },
      { id: 'detect.q2', senseId: 'detect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detect?', options: ['察觉', 'a kind of ancient coin', 'the past tense of be'], answer: '察觉', explain: '对的是「察觉」。' },
      { id: 'detect.q3', senseId: 'detect.s1', errorType: 'grammar', type: '词义选择', prompt: 'detect 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'detect.q4', senseId: 'detect.s1', errorType: 'meaning', type: '词源', prompt: '记 detect 时，哪句更稳妥？', options: ['先锁住「察觉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「察觉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['察觉'] },
  });

  D('detective', {
    etymology: {
      origin: '英语派生：detect + -ive，词性转到「侦探」。',
      prefix: null,
      root: { text: 'detect', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'detective', text: '英语派生：detect + -ive，词性转到「侦探」。' },
        { label: '现在', text: '核心用法是：侦探。' },
      ],
      formationLogic: '先认词干 detect，再看词尾。',
      mnemonic: '看到 detective，先说出「侦探」。',
      note: '先认词干 detect，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detective.', chinese: '这一章反复回到同一个点：侦探。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detective.s1', en: 'Without that detective, the next paragraph is hard to follow.', zh: '没有这个侦探，下一段会很难读。', structure: 'detective / 表示 / 侦探', grammar: 'noun，围绕「侦探」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detective.', right: 'He gave me some advice about the detective.', reason: 'advice 不可数。名词 detective 的单复数按词典词形记。', rule: '先确定 detective 是noun，再套「侦探」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detective.q1', senseId: 'detective.s1', errorType: 'meaning', type: '词义选择', prompt: '「detective」在本条的核心意思是：', options: ['侦探', '完全相反的意思', '一种古代钱币'], answer: '侦探', explain: 'detective：侦探。' },
      { id: 'detective.q2', senseId: 'detective.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detective?', options: ['侦探', 'a kind of ancient coin', 'the past tense of be'], answer: '侦探', explain: '对的是「侦探」。' },
      { id: 'detective.q3', senseId: 'detective.s1', errorType: 'grammar', type: '词义选择', prompt: 'detective 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detective.q4', senseId: 'detective.s1', errorType: 'meaning', type: '词源', prompt: '记 detective 时，哪句更稳妥？', options: ['先锁住「侦探」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「侦探」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侦探'] },
  });

  D('detector', {
    etymology: {
      origin: '英语派生：detect + -or，词性转到「探测器」。',
      prefix: null,
      root: { text: 'detect', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'detector', text: '英语派生：detect + -or，词性转到「探测器」。' },
        { label: '现在', text: '核心用法是：探测器。' },
      ],
      formationLogic: '先认词干 detect，再看词尾。',
      mnemonic: '看到 detector，先说出「探测器」。',
      note: '先认词干 detect，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detector.', chinese: '这一章反复回到同一个点：探测器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detector.s1', en: 'Without that detector, the next paragraph is hard to follow.', zh: '没有这个探测器，下一段会很难读。', structure: 'detector / 表示 / 探测器', grammar: 'noun，围绕「探测器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detector.', right: 'He gave me some advice about the detector.', reason: 'advice 不可数。名词 detector 的单复数按词典词形记。', rule: '先确定 detector 是noun，再套「探测器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detector.q1', senseId: 'detector.s1', errorType: 'meaning', type: '词义选择', prompt: '「detector」在本条的核心意思是：', options: ['探测器', '完全相反的意思', '一种古代钱币'], answer: '探测器', explain: 'detector：探测器。' },
      { id: 'detector.q2', senseId: 'detector.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detector?', options: ['探测器', 'a kind of ancient coin', 'the past tense of be'], answer: '探测器', explain: '对的是「探测器」。' },
      { id: 'detector.q3', senseId: 'detector.s1', errorType: 'grammar', type: '词义选择', prompt: 'detector 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detector.q4', senseId: 'detector.s1', errorType: 'meaning', type: '词源', prompt: '记 detector 时，哪句更稳妥？', options: ['先锁住「探测器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「探测器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['探测器'] },
  });

  D('detention', {
    etymology: {
      origin: '英语派生：deten + -tion，词性转到「拘留」。',
      prefix: null,
      root: { text: 'deten', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'detention', text: '英语派生：deten + -tion，词性转到「拘留」。' },
        { label: '现在', text: '核心用法是：拘留。' },
      ],
      formationLogic: '先认词干 deten，再看词尾。',
      mnemonic: '看到 detention，先说出「拘留」。',
      note: '先认词干 deten，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detention.', chinese: '这一章反复回到同一个点：拘留。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detention.s1', en: 'Without that detention, the next paragraph is hard to follow.', zh: '没有这个拘留，下一段会很难读。', structure: 'detention / 表示 / 拘留', grammar: 'noun，围绕「拘留」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detention.', right: 'He gave me some advice about the detention.', reason: 'advice 不可数。名词 detention 的单复数按词典词形记。', rule: '先确定 detention 是noun，再套「拘留」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detention.q1', senseId: 'detention.s1', errorType: 'meaning', type: '词义选择', prompt: '「detention」在本条的核心意思是：', options: ['拘留', '完全相反的意思', '一种古代钱币'], answer: '拘留', explain: 'detention：拘留。' },
      { id: 'detention.q2', senseId: 'detention.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detention?', options: ['拘留', 'a kind of ancient coin', 'the past tense of be'], answer: '拘留', explain: '对的是「拘留」。' },
      { id: 'detention.q3', senseId: 'detention.s1', errorType: 'grammar', type: '词义选择', prompt: 'detention 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detention.q4', senseId: 'detention.s1', errorType: 'meaning', type: '词源', prompt: '记 detention 时，哪句更稳妥？', options: ['先锁住「拘留」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拘留」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拘留'] },
  });

  D('deter', {
    etymology: {
      origin: '英语派生：det + -er，词性转到「阻止」。',
      prefix: null,
      root: { text: 'det', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deter', text: '英语派生：det + -er，词性转到「阻止」。' },
        { label: '现在', text: '核心用法是：阻止。' },
      ],
      formationLogic: '先认词干 det，再看词尾。',
      mnemonic: '看到 deter，先说出「阻止」。',
      note: '先认词干 det，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deter before the office closed.', chinese: '他们同意在办公室关门前做这件事：阻止。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deter.s1', en: 'The deadline forced the team to deter that afternoon.', zh: '截止日期逼着小组在那天下午阻止。', structure: 'deter / 表示 / 阻止', grammar: 'verb，围绕「阻止」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She detered it yesterday without checking the real past form.', right: 'Check the past form of "deter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deter 是verb，再套「阻止」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deter.q1', senseId: 'deter.s1', errorType: 'meaning', type: '词义选择', prompt: '「deter」在本条的核心意思是：', options: ['阻止', '完全相反的意思', '一种古代钱币'], answer: '阻止', explain: 'deter：阻止。' },
      { id: 'deter.q2', senseId: 'deter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deter?', options: ['阻止', 'a kind of ancient coin', 'the past tense of be'], answer: '阻止', explain: '对的是「阻止」。' },
      { id: 'deter.q3', senseId: 'deter.s1', errorType: 'grammar', type: '词义选择', prompt: 'deter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deter.q4', senseId: 'deter.s1', errorType: 'meaning', type: '词源', prompt: '记 deter 时，哪句更稳妥？', options: ['先锁住「阻止」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「阻止」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['阻止'] },
  });

  D('detergent', {
    etymology: {
      origin: '现代英语常用词「detergent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'detergent', gloss: '洗涤剂' },
      suffix: null,
      history: [
        { label: 'detergent', text: '现代英语常用词「detergent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：洗涤剂。' },
      ],
      formationLogic: '核心义：洗涤剂。',
      mnemonic: '看到 detergent，先说出「洗涤剂」。',
      note: '核心义：洗涤剂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detergent.', chinese: '这一章反复回到同一个点：洗涤剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detergent.s1', en: 'Without that detergent, the next paragraph is hard to follow.', zh: '没有这个洗涤剂，下一段会很难读。', structure: 'detergent / 表示 / 洗涤剂', grammar: 'noun，围绕「洗涤剂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detergent.', right: 'He gave me some advice about the detergent.', reason: 'advice 不可数。名词 detergent 的单复数按词典词形记。', rule: '先确定 detergent 是noun，再套「洗涤剂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detergent.q1', senseId: 'detergent.s1', errorType: 'meaning', type: '词义选择', prompt: '「detergent」在本条的核心意思是：', options: ['洗涤剂', '完全相反的意思', '一种古代钱币'], answer: '洗涤剂', explain: 'detergent：洗涤剂。' },
      { id: 'detergent.q2', senseId: 'detergent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detergent?', options: ['洗涤剂', 'a kind of ancient coin', 'the past tense of be'], answer: '洗涤剂', explain: '对的是「洗涤剂」。' },
      { id: 'detergent.q3', senseId: 'detergent.s1', errorType: 'grammar', type: '词义选择', prompt: 'detergent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detergent.q4', senseId: 'detergent.s1', errorType: 'meaning', type: '词源', prompt: '记 detergent 时，哪句更稳妥？', options: ['先锁住「洗涤剂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洗涤剂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洗涤剂'] },
  });

  D('deteriorate', {
    etymology: {
      origin: '现代英语常用词「deteriorate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deteriorate', gloss: '恶化' },
      suffix: null,
      history: [
        { label: 'deteriorate', text: '现代英语常用词「deteriorate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：恶化。' },
      ],
      formationLogic: '核心义：恶化。',
      mnemonic: '看到 deteriorate，先说出「恶化」。',
      note: '核心义：恶化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deteriorate before the office closed.', chinese: '他们同意在办公室关门前做这件事：恶化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deteriorate.s1', en: 'The deadline forced the team to deteriorate that afternoon.', zh: '截止日期逼着小组在那天下午恶化。', structure: 'deteriorate / 表示 / 恶化', grammar: 'verb，围绕「恶化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deteriorateed it yesterday without checking the real past form.', right: 'Check the past form of "deteriorate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deteriorate 是verb，再套「恶化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deteriorate.q1', senseId: 'deteriorate.s1', errorType: 'meaning', type: '词义选择', prompt: '「deteriorate」在本条的核心意思是：', options: ['恶化', '完全相反的意思', '一种古代钱币'], answer: '恶化', explain: 'deteriorate：恶化。' },
      { id: 'deteriorate.q2', senseId: 'deteriorate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deteriorate?', options: ['恶化', 'a kind of ancient coin', 'the past tense of be'], answer: '恶化', explain: '对的是「恶化」。' },
      { id: 'deteriorate.q3', senseId: 'deteriorate.s1', errorType: 'grammar', type: '词义选择', prompt: 'deteriorate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deteriorate.q4', senseId: 'deteriorate.s1', errorType: 'meaning', type: '词源', prompt: '记 deteriorate 时，哪句更稳妥？', options: ['先锁住「恶化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「恶化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['恶化'] },
  });

  D('deterioration', {
    etymology: {
      origin: '英语派生：deteriora + -tion，词性转到「恶化」。',
      prefix: null,
      root: { text: 'deteriora', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'deterioration', text: '英语派生：deteriora + -tion，词性转到「恶化」。' },
        { label: '现在', text: '核心用法是：恶化。' },
      ],
      formationLogic: '先认词干 deteriora，再看词尾。',
      mnemonic: '看到 deterioration，先说出「恶化」。',
      note: '先认词干 deteriora，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one deterioration.', chinese: '这一章反复回到同一个点：恶化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deterioration.s1', en: 'Without that deterioration, the next paragraph is hard to follow.', zh: '没有这个恶化，下一段会很难读。', structure: 'deterioration / 表示 / 恶化', grammar: 'noun，围绕「恶化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the deterioration.', right: 'He gave me some advice about the deterioration.', reason: 'advice 不可数。名词 deterioration 的单复数按词典词形记。', rule: '先确定 deterioration 是noun，再套「恶化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deterioration.q1', senseId: 'deterioration.s1', errorType: 'meaning', type: '词义选择', prompt: '「deterioration」在本条的核心意思是：', options: ['恶化', '完全相反的意思', '一种古代钱币'], answer: '恶化', explain: 'deterioration：恶化。' },
      { id: 'deterioration.q2', senseId: 'deterioration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deterioration?', options: ['恶化', 'a kind of ancient coin', 'the past tense of be'], answer: '恶化', explain: '对的是「恶化」。' },
      { id: 'deterioration.q3', senseId: 'deterioration.s1', errorType: 'grammar', type: '词义选择', prompt: 'deterioration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'deterioration.q4', senseId: 'deterioration.s1', errorType: 'meaning', type: '词源', prompt: '记 deterioration 时，哪句更稳妥？', options: ['先锁住「恶化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「恶化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['恶化'] },
  });

  D('determination', {
    etymology: {
      origin: '英语派生：determina + -tion，词性转到「决心」。',
      prefix: null,
      root: { text: 'determina', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'determination', text: '英语派生：determina + -tion，词性转到「决心」。' },
        { label: '现在', text: '核心用法是：决心。' },
      ],
      formationLogic: '先认词干 determina，再看词尾。',
      mnemonic: '看到 determination，先说出「决心」。',
      note: '先认词干 determina，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one determination.', chinese: '这一章反复回到同一个点：决心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'determination.s1', en: 'Without that determination, the next paragraph is hard to follow.', zh: '没有这个决心，下一段会很难读。', structure: 'determination / 表示 / 决心', grammar: 'noun，围绕「决心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the determination.', right: 'He gave me some advice about the determination.', reason: 'advice 不可数。名词 determination 的单复数按词典词形记。', rule: '先确定 determination 是noun，再套「决心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'determination.q1', senseId: 'determination.s1', errorType: 'meaning', type: '词义选择', prompt: '「determination」在本条的核心意思是：', options: ['决心', '完全相反的意思', '一种古代钱币'], answer: '决心', explain: 'determination：决心。' },
      { id: 'determination.q2', senseId: 'determination.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches determination?', options: ['决心', 'a kind of ancient coin', 'the past tense of be'], answer: '决心', explain: '对的是「决心」。' },
      { id: 'determination.q3', senseId: 'determination.s1', errorType: 'grammar', type: '词义选择', prompt: 'determination 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'determination.q4', senseId: 'determination.s1', errorType: 'meaning', type: '词源', prompt: '记 determination 时，哪句更稳妥？', options: ['先锁住「决心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「决心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['决心'] },
  });

  D('determine', {
    etymology: {
      origin: '拉丁语 determinare「划定界限」。',
      prefix: null,
      root: { text: 'determine', gloss: '决定' },
      suffix: null,
      history: [
        { label: 'determine', text: '拉丁语 determinare「划定界限」。' },
        { label: '现在', text: '核心用法是：决定。' },
      ],
      formationLogic: '考试认现在的用法：决定。',
      mnemonic: '看到 determine，先说出「决定」。',
      note: '考试认现在的用法：决定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to determine before the office closed.', chinese: '他们同意在办公室关门前做这件事：决定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'determine.s1', en: 'The deadline forced the team to determine that afternoon.', zh: '截止日期逼着小组在那天下午决定。', structure: 'determine / 表示 / 决定', grammar: 'verb，围绕「决定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She determineed it yesterday without checking the real past form.', right: 'Check the past form of "determine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 determine 是verb，再套「决定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'determine.q1', senseId: 'determine.s1', errorType: 'meaning', type: '词义选择', prompt: '「determine」在本条的核心意思是：', options: ['决定', '完全相反的意思', '一种古代钱币'], answer: '决定', explain: 'determine：决定。' },
      { id: 'determine.q2', senseId: 'determine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches determine?', options: ['决定', 'a kind of ancient coin', 'the past tense of be'], answer: '决定', explain: '对的是「决定」。' },
      { id: 'determine.q3', senseId: 'determine.s1', errorType: 'grammar', type: '词义选择', prompt: 'determine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'determine.q4', senseId: 'determine.s1', errorType: 'meaning', type: '词源', prompt: '记 determine 时，哪句更稳妥？', options: ['先锁住「决定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「决定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['决定'] },
  });

  D('determined', {
    etymology: {
      origin: '现代英语常用词「determined」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'determined', gloss: '坚决的' },
      suffix: null,
      history: [
        { label: 'determined', text: '现代英语常用词「determined」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：坚决的。' },
      ],
      formationLogic: '核心义：坚决的。',
      mnemonic: '看到 determined，先说出「坚决的」。',
      note: '核心义：坚决的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was determined.', chinese: '即使是初读者也能看出，这个结果是坚决的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'determined.s1', en: 'They wanted a determined answer, not a long speech.', zh: '他们要一个坚决的的答复，不要长篇发言。', structure: 'determined / 表示 / 坚决的', grammar: 'adjective，围绕「坚决的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are determined.', right: 'The news is determined.', reason: 'news 作主语时动词用单数。', rule: '先确定 determined 是adjective，再套「坚决的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'determined.q1', senseId: 'determined.s1', errorType: 'meaning', type: '词义选择', prompt: '「determined」在本条的核心意思是：', options: ['坚决的', '完全相反的意思', '一种古代钱币'], answer: '坚决的', explain: 'determined：坚决的。' },
      { id: 'determined.q2', senseId: 'determined.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches determined?', options: ['坚决的', 'a kind of ancient coin', 'the past tense of be'], answer: '坚决的', explain: '对的是「坚决的」。' },
      { id: 'determined.q3', senseId: 'determined.s1', errorType: 'grammar', type: '词义选择', prompt: 'determined 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'determined.q4', senseId: 'determined.s1', errorType: 'meaning', type: '词源', prompt: '记 determined 时，哪句更稳妥？', options: ['先锁住「坚决的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「坚决的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['坚决的'] },
  });

  D('detest', {
    etymology: {
      origin: '现代英语常用词「detest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'detest', gloss: '厌恶' },
      suffix: null,
      history: [
        { label: 'detest', text: '现代英语常用词「detest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：厌恶。' },
      ],
      formationLogic: '核心义：厌恶。',
      mnemonic: '看到 detest，先说出「厌恶」。',
      note: '核心义：厌恶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to detest before the office closed.', chinese: '他们同意在办公室关门前做这件事：厌恶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detest.s1', en: 'The deadline forced the team to detest that afternoon.', zh: '截止日期逼着小组在那天下午厌恶。', structure: 'detest / 表示 / 厌恶', grammar: 'verb，围绕「厌恶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She detested it yesterday without checking the real past form.', right: 'Check the past form of "detest" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 detest 是verb，再套「厌恶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detest.q1', senseId: 'detest.s1', errorType: 'meaning', type: '词义选择', prompt: '「detest」在本条的核心意思是：', options: ['厌恶', '完全相反的意思', '一种古代钱币'], answer: '厌恶', explain: 'detest：厌恶。' },
      { id: 'detest.q2', senseId: 'detest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detest?', options: ['厌恶', 'a kind of ancient coin', 'the past tense of be'], answer: '厌恶', explain: '对的是「厌恶」。' },
      { id: 'detest.q3', senseId: 'detest.s1', errorType: 'grammar', type: '词义选择', prompt: 'detest 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'detest.q4', senseId: 'detest.s1', errorType: 'meaning', type: '词源', prompt: '记 detest 时，哪句更稳妥？', options: ['先锁住「厌恶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厌恶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厌恶'] },
  });

  D('detonator', {
    etymology: {
      origin: '英语派生：detonat + -or，词性转到「雷管」。',
      prefix: null,
      root: { text: 'detonat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'detonator', text: '英语派生：detonat + -or，词性转到「雷管」。' },
        { label: '现在', text: '核心用法是：雷管。' },
      ],
      formationLogic: '先认词干 detonat，再看词尾。',
      mnemonic: '看到 detonator，先说出「雷管」。',
      note: '先认词干 detonat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detonator.', chinese: '这一章反复回到同一个点：雷管。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detonator.s1', en: 'Without that detonator, the next paragraph is hard to follow.', zh: '没有这个雷管，下一段会很难读。', structure: 'detonator / 表示 / 雷管', grammar: 'noun，围绕「雷管」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detonator.', right: 'He gave me some advice about the detonator.', reason: 'advice 不可数。名词 detonator 的单复数按词典词形记。', rule: '先确定 detonator 是noun，再套「雷管」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detonator.q1', senseId: 'detonator.s1', errorType: 'meaning', type: '词义选择', prompt: '「detonator」在本条的核心意思是：', options: ['雷管', '完全相反的意思', '一种古代钱币'], answer: '雷管', explain: 'detonator：雷管。' },
      { id: 'detonator.q2', senseId: 'detonator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detonator?', options: ['雷管', 'a kind of ancient coin', 'the past tense of be'], answer: '雷管', explain: '对的是「雷管」。' },
      { id: 'detonator.q3', senseId: 'detonator.s1', errorType: 'grammar', type: '词义选择', prompt: 'detonator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detonator.q4', senseId: 'detonator.s1', errorType: 'meaning', type: '词源', prompt: '记 detonator 时，哪句更稳妥？', options: ['先锁住「雷管」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雷管」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雷管'] },
  });

  D('detriment', {
    etymology: {
      origin: '英语派生：detri + -ment，词性转到「损害」。',
      prefix: null,
      root: { text: 'detri', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'detriment', text: '英语派生：detri + -ment，词性转到「损害」。' },
        { label: '现在', text: '核心用法是：损害。' },
      ],
      formationLogic: '先认词干 detri，再看词尾。',
      mnemonic: '看到 detriment，先说出「损害」。',
      note: '先认词干 detri，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one detriment.', chinese: '这一章反复回到同一个点：损害。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'detriment.s1', en: 'Without that detriment, the next paragraph is hard to follow.', zh: '没有这个损害，下一段会很难读。', structure: 'detriment / 表示 / 损害', grammar: 'noun，围绕「损害」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the detriment.', right: 'He gave me some advice about the detriment.', reason: 'advice 不可数。名词 detriment 的单复数按词典词形记。', rule: '先确定 detriment 是noun，再套「损害」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'detriment.q1', senseId: 'detriment.s1', errorType: 'meaning', type: '词义选择', prompt: '「detriment」在本条的核心意思是：', options: ['损害', '完全相反的意思', '一种古代钱币'], answer: '损害', explain: 'detriment：损害。' },
      { id: 'detriment.q2', senseId: 'detriment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches detriment?', options: ['损害', 'a kind of ancient coin', 'the past tense of be'], answer: '损害', explain: '对的是「损害」。' },
      { id: 'detriment.q3', senseId: 'detriment.s1', errorType: 'grammar', type: '词义选择', prompt: 'detriment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'detriment.q4', senseId: 'detriment.s1', errorType: 'meaning', type: '词源', prompt: '记 detriment 时，哪句更稳妥？', options: ['先锁住「损害」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「损害」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['损害'] },
  });

  D('devalue', {
    etymology: {
      origin: '现代英语常用词「devalue」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devalue', gloss: '贬值' },
      suffix: null,
      history: [
        { label: 'devalue', text: '现代英语常用词「devalue」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：贬值。' },
      ],
      formationLogic: '核心义：贬值。',
      mnemonic: '看到 devalue，先说出「贬值」。',
      note: '核心义：贬值。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to devalue before the office closed.', chinese: '他们同意在办公室关门前做这件事：贬值。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devalue.s1', en: 'The deadline forced the team to devalue that afternoon.', zh: '截止日期逼着小组在那天下午贬值。', structure: 'devalue / 表示 / 贬值', grammar: 'verb，围绕「贬值」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She devalueed it yesterday without checking the real past form.', right: 'Check the past form of "devalue" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 devalue 是verb，再套「贬值」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devalue.q1', senseId: 'devalue.s1', errorType: 'meaning', type: '词义选择', prompt: '「devalue」在本条的核心意思是：', options: ['贬值', '完全相反的意思', '一种古代钱币'], answer: '贬值', explain: 'devalue：贬值。' },
      { id: 'devalue.q2', senseId: 'devalue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devalue?', options: ['贬值', 'a kind of ancient coin', 'the past tense of be'], answer: '贬值', explain: '对的是「贬值」。' },
      { id: 'devalue.q3', senseId: 'devalue.s1', errorType: 'grammar', type: '词义选择', prompt: 'devalue 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'devalue.q4', senseId: 'devalue.s1', errorType: 'meaning', type: '词源', prompt: '记 devalue 时，哪句更稳妥？', options: ['先锁住「贬值」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「贬值」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贬值'] },
  });

  D('devastate', {
    etymology: {
      origin: '现代英语常用词「devastate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devastate', gloss: '摧毁' },
      suffix: null,
      history: [
        { label: 'devastate', text: '现代英语常用词「devastate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：摧毁。' },
      ],
      formationLogic: '核心义：摧毁。',
      mnemonic: '看到 devastate，先说出「摧毁」。',
      note: '核心义：摧毁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to devastate before the office closed.', chinese: '他们同意在办公室关门前做这件事：摧毁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devastate.s1', en: 'The deadline forced the team to devastate that afternoon.', zh: '截止日期逼着小组在那天下午摧毁。', structure: 'devastate / 表示 / 摧毁', grammar: 'verb，围绕「摧毁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She devastateed it yesterday without checking the real past form.', right: 'Check the past form of "devastate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 devastate 是verb，再套「摧毁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devastate.q1', senseId: 'devastate.s1', errorType: 'meaning', type: '词义选择', prompt: '「devastate」在本条的核心意思是：', options: ['摧毁', '完全相反的意思', '一种古代钱币'], answer: '摧毁', explain: 'devastate：摧毁。' },
      { id: 'devastate.q2', senseId: 'devastate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devastate?', options: ['摧毁', 'a kind of ancient coin', 'the past tense of be'], answer: '摧毁', explain: '对的是「摧毁」。' },
      { id: 'devastate.q3', senseId: 'devastate.s1', errorType: 'grammar', type: '词义选择', prompt: 'devastate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'devastate.q4', senseId: 'devastate.s1', errorType: 'meaning', type: '词源', prompt: '记 devastate 时，哪句更稳妥？', options: ['先锁住「摧毁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摧毁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摧毁'] },
  });

  D('devastating', {
    etymology: {
      origin: '英语派生：devastat + -ing，词性转到「毁灭性的」。',
      prefix: null,
      root: { text: 'devastat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'devastating', text: '英语派生：devastat + -ing，词性转到「毁灭性的」。' },
        { label: '现在', text: '核心用法是：毁灭性的。' },
      ],
      formationLogic: '先认词干 devastat，再看词尾。',
      mnemonic: '看到 devastating，先说出「毁灭性的」。',
      note: '先认词干 devastat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was devastating.', chinese: '即使是初读者也能看出，这个结果是毁灭性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devastating.s1', en: 'They wanted a devastating answer, not a long speech.', zh: '他们要一个毁灭性的的答复，不要长篇发言。', structure: 'devastating / 表示 / 毁灭性的', grammar: 'adjective，围绕「毁灭性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are devastating.', right: 'The news is devastating.', reason: 'news 作主语时动词用单数。', rule: '先确定 devastating 是adjective，再套「毁灭性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devastating.q1', senseId: 'devastating.s1', errorType: 'meaning', type: '词义选择', prompt: '「devastating」在本条的核心意思是：', options: ['毁灭性的', '完全相反的意思', '一种古代钱币'], answer: '毁灭性的', explain: 'devastating：毁灭性的。' },
      { id: 'devastating.q2', senseId: 'devastating.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devastating?', options: ['毁灭性的', 'a kind of ancient coin', 'the past tense of be'], answer: '毁灭性的', explain: '对的是「毁灭性的」。' },
      { id: 'devastating.q3', senseId: 'devastating.s1', errorType: 'grammar', type: '词义选择', prompt: 'devastating 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'devastating.q4', senseId: 'devastating.s1', errorType: 'meaning', type: '词源', prompt: '记 devastating 时，哪句更稳妥？', options: ['先锁住「毁灭性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「毁灭性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['毁灭性的'] },
  });

  D('devastation', {
    etymology: {
      origin: '英语派生：devasta + -tion，词性转到「破坏」。',
      prefix: null,
      root: { text: 'devasta', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'devastation', text: '英语派生：devasta + -tion，词性转到「破坏」。' },
        { label: '现在', text: '核心用法是：破坏。' },
      ],
      formationLogic: '先认词干 devasta，再看词尾。',
      mnemonic: '看到 devastation，先说出「破坏」。',
      note: '先认词干 devasta，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one devastation.', chinese: '这一章反复回到同一个点：破坏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devastation.s1', en: 'Without that devastation, the next paragraph is hard to follow.', zh: '没有这个破坏，下一段会很难读。', structure: 'devastation / 表示 / 破坏', grammar: 'noun，围绕「破坏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the devastation.', right: 'He gave me some advice about the devastation.', reason: 'advice 不可数。名词 devastation 的单复数按词典词形记。', rule: '先确定 devastation 是noun，再套「破坏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devastation.q1', senseId: 'devastation.s1', errorType: 'meaning', type: '词义选择', prompt: '「devastation」在本条的核心意思是：', options: ['破坏', '完全相反的意思', '一种古代钱币'], answer: '破坏', explain: 'devastation：破坏。' },
      { id: 'devastation.q2', senseId: 'devastation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devastation?', options: ['破坏', 'a kind of ancient coin', 'the past tense of be'], answer: '破坏', explain: '对的是「破坏」。' },
      { id: 'devastation.q3', senseId: 'devastation.s1', errorType: 'grammar', type: '词义选择', prompt: 'devastation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'devastation.q4', senseId: 'devastation.s1', errorType: 'meaning', type: '词源', prompt: '记 devastation 时，哪句更稳妥？', options: ['先锁住「破坏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「破坏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['破坏'] },
  });

  D('develop', {
    etymology: {
      origin: '古法语 desveloper「打开包裹」。',
      prefix: null,
      root: { text: 'develop', gloss: '发展' },
      suffix: null,
      history: [
        { label: 'develop', text: '古法语 desveloper「打开包裹」。' },
        { label: '现在', text: '核心用法是：发展。' },
      ],
      formationLogic: '考试认现在的用法：发展。',
      mnemonic: '看到 develop，先说出「发展」。',
      note: '考试认现在的用法：发展。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to develop before the office closed.', chinese: '他们同意在办公室关门前做这件事：发展。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'develop.s1', en: 'The deadline forced the team to develop that afternoon.', zh: '截止日期逼着小组在那天下午发展。', structure: 'develop / 表示 / 发展', grammar: 'verb，围绕「发展」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She developed it yesterday without checking the real past form.', right: 'Check the past form of "develop" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 develop 是verb，再套「发展」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'develop.q1', senseId: 'develop.s1', errorType: 'meaning', type: '词义选择', prompt: '「develop」在本条的核心意思是：', options: ['发展', '完全相反的意思', '一种古代钱币'], answer: '发展', explain: 'develop：发展。' },
      { id: 'develop.q2', senseId: 'develop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches develop?', options: ['发展', 'a kind of ancient coin', 'the past tense of be'], answer: '发展', explain: '对的是「发展」。' },
      { id: 'develop.q3', senseId: 'develop.s1', errorType: 'grammar', type: '词义选择', prompt: 'develop 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'develop.q4', senseId: 'develop.s1', errorType: 'meaning', type: '词源', prompt: '记 develop 时，哪句更稳妥？', options: ['先锁住「发展」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发展」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发展'] },
  });

  D('developing', {
    etymology: {
      origin: '英语派生：develop + -ing，词性转到「发展中的」。',
      prefix: null,
      root: { text: 'develop', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'developing', text: '英语派生：develop + -ing，词性转到「发展中的」。' },
        { label: '现在', text: '核心用法是：发展中的。' },
      ],
      formationLogic: '先认词干 develop，再看词尾。',
      mnemonic: '看到 developing，先说出「发展中的」。',
      note: '先认词干 develop，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was developing.', chinese: '即使是初读者也能看出，这个结果是发展中的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'developing.s1', en: 'They wanted a developing answer, not a long speech.', zh: '他们要一个发展中的的答复，不要长篇发言。', structure: 'developing / 表示 / 发展中的', grammar: 'adjective，围绕「发展中的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are developing.', right: 'The news is developing.', reason: 'news 作主语时动词用单数。', rule: '先确定 developing 是adjective，再套「发展中的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'developing.q1', senseId: 'developing.s1', errorType: 'meaning', type: '词义选择', prompt: '「developing」在本条的核心意思是：', options: ['发展中的', '完全相反的意思', '一种古代钱币'], answer: '发展中的', explain: 'developing：发展中的。' },
      { id: 'developing.q2', senseId: 'developing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches developing?', options: ['发展中的', 'a kind of ancient coin', 'the past tense of be'], answer: '发展中的', explain: '对的是「发展中的」。' },
      { id: 'developing.q3', senseId: 'developing.s1', errorType: 'grammar', type: '词义选择', prompt: 'developing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'developing.q4', senseId: 'developing.s1', errorType: 'meaning', type: '词源', prompt: '记 developing 时，哪句更稳妥？', options: ['先锁住「发展中的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发展中的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发展中的'] },
  });

  D('development', {
    etymology: {
      origin: '英语派生：develop + -ment，词性转到「发展」。',
      prefix: null,
      root: { text: 'develop', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'development', text: '英语派生：develop + -ment，词性转到「发展」。' },
        { label: '现在', text: '核心用法是：发展。' },
      ],
      formationLogic: '先认词干 develop，再看词尾。',
      mnemonic: '看到 development，先说出「发展」。',
      note: '先认词干 develop，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one development.', chinese: '这一章反复回到同一个点：发展。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'development.s1', en: 'Without that development, the next paragraph is hard to follow.', zh: '没有这个发展，下一段会很难读。', structure: 'development / 表示 / 发展', grammar: 'noun，围绕「发展」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the development.', right: 'He gave me some advice about the development.', reason: 'advice 不可数。名词 development 的单复数按词典词形记。', rule: '先确定 development 是noun，再套「发展」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'development.q1', senseId: 'development.s1', errorType: 'meaning', type: '词义选择', prompt: '「development」在本条的核心意思是：', options: ['发展', '完全相反的意思', '一种古代钱币'], answer: '发展', explain: 'development：发展。' },
      { id: 'development.q2', senseId: 'development.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches development?', options: ['发展', 'a kind of ancient coin', 'the past tense of be'], answer: '发展', explain: '对的是「发展」。' },
      { id: 'development.q3', senseId: 'development.s1', errorType: 'grammar', type: '词义选择', prompt: 'development 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'development.q4', senseId: 'development.s1', errorType: 'meaning', type: '词源', prompt: '记 development 时，哪句更稳妥？', options: ['先锁住「发展」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「发展」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['发展'] },
  });

  D('deviate', {
    etymology: {
      origin: '现代英语常用词「deviate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'deviate', gloss: '偏离' },
      suffix: null,
      history: [
        { label: 'deviate', text: '现代英语常用词「deviate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：偏离。' },
      ],
      formationLogic: '核心义：偏离。',
      mnemonic: '看到 deviate，先说出「偏离」。',
      note: '核心义：偏离。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to deviate before the office closed.', chinese: '他们同意在办公室关门前做这件事：偏离。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'deviate.s1', en: 'The deadline forced the team to deviate that afternoon.', zh: '截止日期逼着小组在那天下午偏离。', structure: 'deviate / 表示 / 偏离', grammar: 'verb，围绕「偏离」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deviateed it yesterday without checking the real past form.', right: 'Check the past form of "deviate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 deviate 是verb，再套「偏离」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'deviate.q1', senseId: 'deviate.s1', errorType: 'meaning', type: '词义选择', prompt: '「deviate」在本条的核心意思是：', options: ['偏离', '完全相反的意思', '一种古代钱币'], answer: '偏离', explain: 'deviate：偏离。' },
      { id: 'deviate.q2', senseId: 'deviate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches deviate?', options: ['偏离', 'a kind of ancient coin', 'the past tense of be'], answer: '偏离', explain: '对的是「偏离」。' },
      { id: 'deviate.q3', senseId: 'deviate.s1', errorType: 'grammar', type: '词义选择', prompt: 'deviate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'deviate.q4', senseId: 'deviate.s1', errorType: 'meaning', type: '词源', prompt: '记 deviate 时，哪句更稳妥？', options: ['先锁住「偏离」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「偏离」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['偏离'] },
  });

  D('device', {
    etymology: {
      origin: '拉丁语 divisus 一系「分开、设计」。',
      prefix: null,
      root: { text: 'device', gloss: '装置' },
      suffix: null,
      history: [
        { label: 'device', text: '拉丁语 divisus 一系「分开、设计」。' },
        { label: '现在', text: '核心用法是：装置。' },
      ],
      formationLogic: '考试认现在的用法：装置。',
      mnemonic: '看到 device，先说出「装置」。',
      note: '考试认现在的用法：装置。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one device.', chinese: '这一章反复回到同一个点：装置。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'device.s1', en: 'Without that device, the next paragraph is hard to follow.', zh: '没有这个装置，下一段会很难读。', structure: 'device / 表示 / 装置', grammar: 'noun，围绕「装置」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the device.', right: 'He gave me some advice about the device.', reason: 'advice 不可数。名词 device 的单复数按词典词形记。', rule: '先确定 device 是noun，再套「装置」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'device.q1', senseId: 'device.s1', errorType: 'meaning', type: '词义选择', prompt: '「device」在本条的核心意思是：', options: ['装置', '完全相反的意思', '一种古代钱币'], answer: '装置', explain: 'device：装置。' },
      { id: 'device.q2', senseId: 'device.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches device?', options: ['装置', 'a kind of ancient coin', 'the past tense of be'], answer: '装置', explain: '对的是「装置」。' },
      { id: 'device.q3', senseId: 'device.s1', errorType: 'grammar', type: '词义选择', prompt: 'device 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'device.q4', senseId: 'device.s1', errorType: 'meaning', type: '词源', prompt: '记 device 时，哪句更稳妥？', options: ['先锁住「装置」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「装置」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['装置'] },
  });

  D('devil', {
    etymology: {
      origin: '现代英语常用词「devil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devil', gloss: '魔鬼' },
      suffix: null,
      history: [
        { label: 'devil', text: '现代英语常用词「devil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：魔鬼。' },
      ],
      formationLogic: '核心义：魔鬼。',
      mnemonic: '看到 devil，先说出「魔鬼」。',
      note: '核心义：魔鬼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one devil.', chinese: '这一章反复回到同一个点：魔鬼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devil.s1', en: 'Without that devil, the next paragraph is hard to follow.', zh: '没有这个魔鬼，下一段会很难读。', structure: 'devil / 表示 / 魔鬼', grammar: 'noun，围绕「魔鬼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the devil.', right: 'He gave me some advice about the devil.', reason: 'advice 不可数。名词 devil 的单复数按词典词形记。', rule: '先确定 devil 是noun，再套「魔鬼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devil.q1', senseId: 'devil.s1', errorType: 'meaning', type: '词义选择', prompt: '「devil」在本条的核心意思是：', options: ['魔鬼', '完全相反的意思', '一种古代钱币'], answer: '魔鬼', explain: 'devil：魔鬼。' },
      { id: 'devil.q2', senseId: 'devil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devil?', options: ['魔鬼', 'a kind of ancient coin', 'the past tense of be'], answer: '魔鬼', explain: '对的是「魔鬼」。' },
      { id: 'devil.q3', senseId: 'devil.s1', errorType: 'grammar', type: '词义选择', prompt: 'devil 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'devil.q4', senseId: 'devil.s1', errorType: 'meaning', type: '词源', prompt: '记 devil 时，哪句更稳妥？', options: ['先锁住「魔鬼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「魔鬼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['魔鬼'] },
  });

  D('devise', {
    etymology: {
      origin: '现代英语常用词「devise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devise', gloss: '设计' },
      suffix: null,
      history: [
        { label: 'devise', text: '现代英语常用词「devise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：设计。' },
      ],
      formationLogic: '核心义：设计。',
      mnemonic: '看到 devise，先说出「设计」。',
      note: '核心义：设计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to devise before the office closed.', chinese: '他们同意在办公室关门前做这件事：设计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devise.s1', en: 'The deadline forced the team to devise that afternoon.', zh: '截止日期逼着小组在那天下午设计。', structure: 'devise / 表示 / 设计', grammar: 'verb，围绕「设计」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She deviseed it yesterday without checking the real past form.', right: 'Check the past form of "devise" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 devise 是verb，再套「设计」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devise.q1', senseId: 'devise.s1', errorType: 'meaning', type: '词义选择', prompt: '「devise」在本条的核心意思是：', options: ['设计', '完全相反的意思', '一种古代钱币'], answer: '设计', explain: 'devise：设计。' },
      { id: 'devise.q2', senseId: 'devise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devise?', options: ['设计', 'a kind of ancient coin', 'the past tense of be'], answer: '设计', explain: '对的是「设计」。' },
      { id: 'devise.q3', senseId: 'devise.s1', errorType: 'grammar', type: '词义选择', prompt: 'devise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'devise.q4', senseId: 'devise.s1', errorType: 'meaning', type: '词源', prompt: '记 devise 时，哪句更稳妥？', options: ['先锁住「设计」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「设计」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['设计'] },
  });

  D('devoid', {
    etymology: {
      origin: '现代英语常用词「devoid」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devoid', gloss: '没有…的' },
      suffix: null,
      history: [
        { label: 'devoid', text: '现代英语常用词「devoid」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：没有…的。' },
      ],
      formationLogic: '核心义：没有…的。',
      mnemonic: '看到 devoid，先说出「没有…的」。',
      note: '核心义：没有…的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was devoid.', chinese: '即使是初读者也能看出，这个结果是没有…的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devoid.s1', en: 'They wanted a devoid answer, not a long speech.', zh: '他们要一个没有…的的答复，不要长篇发言。', structure: 'devoid / 表示 / 没有…的', grammar: 'adjective，围绕「没有…的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are devoid.', right: 'The news is devoid.', reason: 'news 作主语时动词用单数。', rule: '先确定 devoid 是adjective，再套「没有…的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devoid.q1', senseId: 'devoid.s1', errorType: 'meaning', type: '词义选择', prompt: '「devoid」在本条的核心意思是：', options: ['没有…的', '完全相反的意思', '一种古代钱币'], answer: '没有…的', explain: 'devoid：没有…的。' },
      { id: 'devoid.q2', senseId: 'devoid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devoid?', options: ['没有…的', 'a kind of ancient coin', 'the past tense of be'], answer: '没有…的', explain: '对的是「没有…的」。' },
      { id: 'devoid.q3', senseId: 'devoid.s1', errorType: 'grammar', type: '词义选择', prompt: 'devoid 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'devoid.q4', senseId: 'devoid.s1', errorType: 'meaning', type: '词源', prompt: '记 devoid 时，哪句更稳妥？', options: ['先锁住「没有…的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「没有…的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['没有…的'] },
  });

  D('devote', {
    etymology: {
      origin: '拉丁语 devovere「郑重许下」。',
      prefix: null,
      root: { text: 'devote', gloss: '献身' },
      suffix: null,
      history: [
        { label: 'devote', text: '拉丁语 devovere「郑重许下」。' },
        { label: '现在', text: '核心用法是：献身。' },
      ],
      formationLogic: '考试认现在的用法：献身。',
      mnemonic: '看到 devote，先说出「献身」。',
      note: '考试认现在的用法：献身。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to devote before the office closed.', chinese: '他们同意在办公室关门前做这件事：献身。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devote.s1', en: 'The deadline forced the team to devote that afternoon.', zh: '截止日期逼着小组在那天下午献身。', structure: 'devote / 表示 / 献身', grammar: 'verb，围绕「献身」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She devoteed it yesterday without checking the real past form.', right: 'Check the past form of "devote" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 devote 是verb，再套「献身」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devote.q1', senseId: 'devote.s1', errorType: 'meaning', type: '词义选择', prompt: '「devote」在本条的核心意思是：', options: ['献身', '完全相反的意思', '一种古代钱币'], answer: '献身', explain: 'devote：献身。' },
      { id: 'devote.q2', senseId: 'devote.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devote?', options: ['献身', 'a kind of ancient coin', 'the past tense of be'], answer: '献身', explain: '对的是「献身」。' },
      { id: 'devote.q3', senseId: 'devote.s1', errorType: 'grammar', type: '词义选择', prompt: 'devote 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'devote.q4', senseId: 'devote.s1', errorType: 'meaning', type: '词源', prompt: '记 devote 时，哪句更稳妥？', options: ['先锁住「献身」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「献身」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['献身'] },
  });

  D('devoted', {
    etymology: {
      origin: '现代英语常用词「devoted」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devoted', gloss: '挚爱的' },
      suffix: null,
      history: [
        { label: 'devoted', text: '现代英语常用词「devoted」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：挚爱的。' },
      ],
      formationLogic: '核心义：挚爱的。',
      mnemonic: '看到 devoted，先说出「挚爱的」。',
      note: '核心义：挚爱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was devoted.', chinese: '即使是初读者也能看出，这个结果是挚爱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devoted.s1', en: 'They wanted a devoted answer, not a long speech.', zh: '他们要一个挚爱的的答复，不要长篇发言。', structure: 'devoted / 表示 / 挚爱的', grammar: 'adjective，围绕「挚爱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are devoted.', right: 'The news is devoted.', reason: 'news 作主语时动词用单数。', rule: '先确定 devoted 是adjective，再套「挚爱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devoted.q1', senseId: 'devoted.s1', errorType: 'meaning', type: '词义选择', prompt: '「devoted」在本条的核心意思是：', options: ['挚爱的', '完全相反的意思', '一种古代钱币'], answer: '挚爱的', explain: 'devoted：挚爱的。' },
      { id: 'devoted.q2', senseId: 'devoted.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devoted?', options: ['挚爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '挚爱的', explain: '对的是「挚爱的」。' },
      { id: 'devoted.q3', senseId: 'devoted.s1', errorType: 'grammar', type: '词义选择', prompt: 'devoted 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'devoted.q4', senseId: 'devoted.s1', errorType: 'meaning', type: '词源', prompt: '记 devoted 时，哪句更稳妥？', options: ['先锁住「挚爱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挚爱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挚爱的'] },
  });

  D('devotion', {
    etymology: {
      origin: '英语派生：devo + -tion，词性转到「热爱」。',
      prefix: null,
      root: { text: 'devo', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'devotion', text: '英语派生：devo + -tion，词性转到「热爱」。' },
        { label: '现在', text: '核心用法是：热爱。' },
      ],
      formationLogic: '先认词干 devo，再看词尾。',
      mnemonic: '看到 devotion，先说出「热爱」。',
      note: '先认词干 devo，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one devotion.', chinese: '这一章反复回到同一个点：热爱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devotion.s1', en: 'Without that devotion, the next paragraph is hard to follow.', zh: '没有这个热爱，下一段会很难读。', structure: 'devotion / 表示 / 热爱', grammar: 'noun，围绕「热爱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the devotion.', right: 'He gave me some advice about the devotion.', reason: 'advice 不可数。名词 devotion 的单复数按词典词形记。', rule: '先确定 devotion 是noun，再套「热爱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devotion.q1', senseId: 'devotion.s1', errorType: 'meaning', type: '词义选择', prompt: '「devotion」在本条的核心意思是：', options: ['热爱', '完全相反的意思', '一种古代钱币'], answer: '热爱', explain: 'devotion：热爱。' },
      { id: 'devotion.q2', senseId: 'devotion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devotion?', options: ['热爱', 'a kind of ancient coin', 'the past tense of be'], answer: '热爱', explain: '对的是「热爱」。' },
      { id: 'devotion.q3', senseId: 'devotion.s1', errorType: 'grammar', type: '词义选择', prompt: 'devotion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'devotion.q4', senseId: 'devotion.s1', errorType: 'meaning', type: '词源', prompt: '记 devotion 时，哪句更稳妥？', options: ['先锁住「热爱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「热爱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['热爱'] },
  });

  D('devour', {
    etymology: {
      origin: '现代英语常用词「devour」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'devour', gloss: '狼吞虎咽' },
      suffix: null,
      history: [
        { label: 'devour', text: '现代英语常用词「devour」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：狼吞虎咽。' },
      ],
      formationLogic: '核心义：狼吞虎咽。',
      mnemonic: '看到 devour，先说出「狼吞虎咽」。',
      note: '核心义：狼吞虎咽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to devour before the office closed.', chinese: '他们同意在办公室关门前做这件事：狼吞虎咽。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'devour.s1', en: 'The deadline forced the team to devour that afternoon.', zh: '截止日期逼着小组在那天下午狼吞虎咽。', structure: 'devour / 表示 / 狼吞虎咽', grammar: 'verb，围绕「狼吞虎咽」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She devoured it yesterday without checking the real past form.', right: 'Check the past form of "devour" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 devour 是verb，再套「狼吞虎咽」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'devour.q1', senseId: 'devour.s1', errorType: 'meaning', type: '词义选择', prompt: '「devour」在本条的核心意思是：', options: ['狼吞虎咽', '完全相反的意思', '一种古代钱币'], answer: '狼吞虎咽', explain: 'devour：狼吞虎咽。' },
      { id: 'devour.q2', senseId: 'devour.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches devour?', options: ['狼吞虎咽', 'a kind of ancient coin', 'the past tense of be'], answer: '狼吞虎咽', explain: '对的是「狼吞虎咽」。' },
      { id: 'devour.q3', senseId: 'devour.s1', errorType: 'grammar', type: '词义选择', prompt: 'devour 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'devour.q4', senseId: 'devour.s1', errorType: 'meaning', type: '词源', prompt: '记 devour 时，哪句更稳妥？', options: ['先锁住「狼吞虎咽」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「狼吞虎咽」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['狼吞虎咽'] },
  });

  D('dew', {
    etymology: {
      origin: '现代英语常用词「dew」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dew', gloss: '露水' },
      suffix: null,
      history: [
        { label: 'dew', text: '现代英语常用词「dew」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：露水。' },
      ],
      formationLogic: '核心义：露水。',
      mnemonic: '看到 dew，先说出「露水」。',
      note: '核心义：露水。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dew.', chinese: '这一章反复回到同一个点：露水。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dew.s1', en: 'Without that dew, the next paragraph is hard to follow.', zh: '没有这个露水，下一段会很难读。', structure: 'dew / 表示 / 露水', grammar: 'noun，围绕「露水」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dew.', right: 'He gave me some advice about the dew.', reason: 'advice 不可数。名词 dew 的单复数按词典词形记。', rule: '先确定 dew 是noun，再套「露水」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dew.q1', senseId: 'dew.s1', errorType: 'meaning', type: '词义选择', prompt: '「dew」在本条的核心意思是：', options: ['露水', '完全相反的意思', '一种古代钱币'], answer: '露水', explain: 'dew：露水。' },
      { id: 'dew.q2', senseId: 'dew.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dew?', options: ['露水', 'a kind of ancient coin', 'the past tense of be'], answer: '露水', explain: '对的是「露水」。' },
      { id: 'dew.q3', senseId: 'dew.s1', errorType: 'grammar', type: '词义选择', prompt: 'dew 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dew.q4', senseId: 'dew.s1', errorType: 'meaning', type: '词源', prompt: '记 dew 时，哪句更稳妥？', options: ['先锁住「露水」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「露水」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['露水'] },
  });

  D('diabetes', {
    etymology: {
      origin: '现代英语常用词「diabetes」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diabetes', gloss: '糖尿病' },
      suffix: null,
      history: [
        { label: 'diabetes', text: '现代英语常用词「diabetes」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：糖尿病。' },
      ],
      formationLogic: '核心义：糖尿病。',
      mnemonic: '看到 diabetes，先说出「糖尿病」。',
      note: '核心义：糖尿病。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diabetes.', chinese: '这一章反复回到同一个点：糖尿病。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diabetes.s1', en: 'Without that diabetes, the next paragraph is hard to follow.', zh: '没有这个糖尿病，下一段会很难读。', structure: 'diabetes / 表示 / 糖尿病', grammar: 'noun，围绕「糖尿病」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diabetes.', right: 'He gave me some advice about the diabetes.', reason: 'advice 不可数。名词 diabetes 的单复数按词典词形记。', rule: '先确定 diabetes 是noun，再套「糖尿病」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diabetes.q1', senseId: 'diabetes.s1', errorType: 'meaning', type: '词义选择', prompt: '「diabetes」在本条的核心意思是：', options: ['糖尿病', '完全相反的意思', '一种古代钱币'], answer: '糖尿病', explain: 'diabetes：糖尿病。' },
      { id: 'diabetes.q2', senseId: 'diabetes.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diabetes?', options: ['糖尿病', 'a kind of ancient coin', 'the past tense of be'], answer: '糖尿病', explain: '对的是「糖尿病」。' },
      { id: 'diabetes.q3', senseId: 'diabetes.s1', errorType: 'grammar', type: '词义选择', prompt: 'diabetes 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diabetes.q4', senseId: 'diabetes.s1', errorType: 'meaning', type: '词源', prompt: '记 diabetes 时，哪句更稳妥？', options: ['先锁住「糖尿病」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「糖尿病」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['糖尿病'] },
  });

  D('diagnose', {
    etymology: {
      origin: '现代英语常用词「diagnose」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diagnose', gloss: '诊断' },
      suffix: null,
      history: [
        { label: 'diagnose', text: '现代英语常用词「diagnose」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：诊断。' },
      ],
      formationLogic: '核心义：诊断。',
      mnemonic: '看到 diagnose，先说出「诊断」。',
      note: '核心义：诊断。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to diagnose before the office closed.', chinese: '他们同意在办公室关门前做这件事：诊断。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diagnose.s1', en: 'The deadline forced the team to diagnose that afternoon.', zh: '截止日期逼着小组在那天下午诊断。', structure: 'diagnose / 表示 / 诊断', grammar: 'verb，围绕「诊断」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diagnoseed it yesterday without checking the real past form.', right: 'Check the past form of "diagnose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 diagnose 是verb，再套「诊断」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diagnose.q1', senseId: 'diagnose.s1', errorType: 'meaning', type: '词义选择', prompt: '「diagnose」在本条的核心意思是：', options: ['诊断', '完全相反的意思', '一种古代钱币'], answer: '诊断', explain: 'diagnose：诊断。' },
      { id: 'diagnose.q2', senseId: 'diagnose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diagnose?', options: ['诊断', 'a kind of ancient coin', 'the past tense of be'], answer: '诊断', explain: '对的是「诊断」。' },
      { id: 'diagnose.q3', senseId: 'diagnose.s1', errorType: 'grammar', type: '词义选择', prompt: 'diagnose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'diagnose.q4', senseId: 'diagnose.s1', errorType: 'meaning', type: '词源', prompt: '记 diagnose 时，哪句更稳妥？', options: ['先锁住「诊断」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「诊断」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诊断'] },
  });

  D('diagram', {
    etymology: {
      origin: '希腊语 diagramma「用线画出的图」。',
      prefix: null,
      root: { text: 'diagram', gloss: '图表' },
      suffix: null,
      history: [
        { label: 'diagram', text: '希腊语 diagramma「用线画出的图」。' },
        { label: '现在', text: '核心用法是：图表。' },
      ],
      formationLogic: '考试认现在的用法：图表。',
      mnemonic: '看到 diagram，先说出「图表」。',
      note: '考试认现在的用法：图表。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diagram.', chinese: '这一章反复回到同一个点：图表。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diagram.s1', en: 'Without that diagram, the next paragraph is hard to follow.', zh: '没有这个图表，下一段会很难读。', structure: 'diagram / 表示 / 图表', grammar: 'noun，围绕「图表」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diagram.', right: 'He gave me some advice about the diagram.', reason: 'advice 不可数。名词 diagram 的单复数按词典词形记。', rule: '先确定 diagram 是noun，再套「图表」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diagram.q1', senseId: 'diagram.s1', errorType: 'meaning', type: '词义选择', prompt: '「diagram」在本条的核心意思是：', options: ['图表', '完全相反的意思', '一种古代钱币'], answer: '图表', explain: 'diagram：图表。' },
      { id: 'diagram.q2', senseId: 'diagram.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diagram?', options: ['图表', 'a kind of ancient coin', 'the past tense of be'], answer: '图表', explain: '对的是「图表」。' },
      { id: 'diagram.q3', senseId: 'diagram.s1', errorType: 'grammar', type: '词义选择', prompt: 'diagram 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diagram.q4', senseId: 'diagram.s1', errorType: 'meaning', type: '词源', prompt: '记 diagram 时，哪句更稳妥？', options: ['先锁住「图表」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「图表」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['图表'] },
  });

  D('dial', {
    etymology: {
      origin: '拉丁语 dialis「关于天的」。日晷的盘。',
      prefix: null,
      root: { text: 'dial', gloss: '表盘' },
      suffix: null,
      history: [
        { label: 'dial', text: '拉丁语 dialis「关于天的」。日晷的盘。' },
        { label: '现在', text: '核心用法是：表盘。' },
      ],
      formationLogic: '考试认现在的用法：表盘。',
      mnemonic: '看到 dial，先说出「表盘」。',
      note: '考试认现在的用法：表盘。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dial.', chinese: '这一章反复回到同一个点：表盘。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dial.s1', en: 'Without that dial, the next paragraph is hard to follow.', zh: '没有这个表盘，下一段会很难读。', structure: 'dial / 表示 / 表盘', grammar: 'noun，围绕「表盘」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dial.', right: 'He gave me some advice about the dial.', reason: 'advice 不可数。名词 dial 的单复数按词典词形记。', rule: '先确定 dial 是noun，再套「表盘」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dial.q1', senseId: 'dial.s1', errorType: 'meaning', type: '词义选择', prompt: '「dial」在本条的核心意思是：', options: ['表盘', '完全相反的意思', '一种古代钱币'], answer: '表盘', explain: 'dial：表盘。' },
      { id: 'dial.q2', senseId: 'dial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dial?', options: ['表盘', 'a kind of ancient coin', 'the past tense of be'], answer: '表盘', explain: '对的是「表盘」。' },
      { id: 'dial.q3', senseId: 'dial.s1', errorType: 'grammar', type: '词义选择', prompt: 'dial 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dial.q4', senseId: 'dial.s1', errorType: 'meaning', type: '词源', prompt: '记 dial 时，哪句更稳妥？', options: ['先锁住「表盘」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「表盘」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['表盘'] },
  });

  D('dialect', {
    etymology: {
      origin: '希腊语 dialektos「谈话方式」。',
      prefix: null,
      root: { text: 'dialect', gloss: '方言' },
      suffix: null,
      history: [
        { label: 'dialect', text: '希腊语 dialektos「谈话方式」。' },
        { label: '现在', text: '核心用法是：方言。' },
      ],
      formationLogic: '考试认现在的用法：方言。',
      mnemonic: '看到 dialect，先说出「方言」。',
      note: '考试认现在的用法：方言。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dialect.', chinese: '这一章反复回到同一个点：方言。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dialect.s1', en: 'Without that dialect, the next paragraph is hard to follow.', zh: '没有这个方言，下一段会很难读。', structure: 'dialect / 表示 / 方言', grammar: 'noun，围绕「方言」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dialect.', right: 'He gave me some advice about the dialect.', reason: 'advice 不可数。名词 dialect 的单复数按词典词形记。', rule: '先确定 dialect 是noun，再套「方言」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dialect.q1', senseId: 'dialect.s1', errorType: 'meaning', type: '词义选择', prompt: '「dialect」在本条的核心意思是：', options: ['方言', '完全相反的意思', '一种古代钱币'], answer: '方言', explain: 'dialect：方言。' },
      { id: 'dialect.q2', senseId: 'dialect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dialect?', options: ['方言', 'a kind of ancient coin', 'the past tense of be'], answer: '方言', explain: '对的是「方言」。' },
      { id: 'dialect.q3', senseId: 'dialect.s1', errorType: 'grammar', type: '词义选择', prompt: 'dialect 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dialect.q4', senseId: 'dialect.s1', errorType: 'meaning', type: '词源', prompt: '记 dialect 时，哪句更稳妥？', options: ['先锁住「方言」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「方言」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['方言'] },
  });

  D('dialog', {
    etymology: {
      origin: '现代英语常用词「dialog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dialog', gloss: '对话' },
      suffix: null,
      history: [
        { label: 'dialog', text: '现代英语常用词「dialog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：对话。' },
      ],
      formationLogic: '核心义：对话。',
      mnemonic: '看到 dialog，先说出「对话」。',
      note: '核心义：对话。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dialog.', chinese: '这一章反复回到同一个点：对话。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dialog.s1', en: 'Without that dialog, the next paragraph is hard to follow.', zh: '没有这个对话，下一段会很难读。', structure: 'dialog / 表示 / 对话', grammar: 'noun，围绕「对话」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dialog.', right: 'He gave me some advice about the dialog.', reason: 'advice 不可数。名词 dialog 的单复数按词典词形记。', rule: '先确定 dialog 是noun，再套「对话」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dialog.q1', senseId: 'dialog.s1', errorType: 'meaning', type: '词义选择', prompt: '「dialog」在本条的核心意思是：', options: ['对话', '完全相反的意思', '一种古代钱币'], answer: '对话', explain: 'dialog：对话。' },
      { id: 'dialog.q2', senseId: 'dialog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dialog?', options: ['对话', 'a kind of ancient coin', 'the past tense of be'], answer: '对话', explain: '对的是「对话」。' },
      { id: 'dialog.q3', senseId: 'dialog.s1', errorType: 'grammar', type: '词义选择', prompt: 'dialog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dialog.q4', senseId: 'dialog.s1', errorType: 'meaning', type: '词源', prompt: '记 dialog 时，哪句更稳妥？', options: ['先锁住「对话」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「对话」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对话'] },
  });

  D('diameter', {
    etymology: {
      origin: '英语派生：diamet + -er，词性转到「直径」。',
      prefix: null,
      root: { text: 'diamet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'diameter', text: '英语派生：diamet + -er，词性转到「直径」。' },
        { label: '现在', text: '核心用法是：直径。' },
      ],
      formationLogic: '先认词干 diamet，再看词尾。',
      mnemonic: '看到 diameter，先说出「直径」。',
      note: '先认词干 diamet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diameter.', chinese: '这一章反复回到同一个点：直径。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diameter.s1', en: 'Without that diameter, the next paragraph is hard to follow.', zh: '没有这个直径，下一段会很难读。', structure: 'diameter / 表示 / 直径', grammar: 'noun，围绕「直径」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diameter.', right: 'He gave me some advice about the diameter.', reason: 'advice 不可数。名词 diameter 的单复数按词典词形记。', rule: '先确定 diameter 是noun，再套「直径」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diameter.q1', senseId: 'diameter.s1', errorType: 'meaning', type: '词义选择', prompt: '「diameter」在本条的核心意思是：', options: ['直径', '完全相反的意思', '一种古代钱币'], answer: '直径', explain: 'diameter：直径。' },
      { id: 'diameter.q2', senseId: 'diameter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diameter?', options: ['直径', 'a kind of ancient coin', 'the past tense of be'], answer: '直径', explain: '对的是「直径」。' },
      { id: 'diameter.q3', senseId: 'diameter.s1', errorType: 'grammar', type: '词义选择', prompt: 'diameter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diameter.q4', senseId: 'diameter.s1', errorType: 'meaning', type: '词源', prompt: '记 diameter 时，哪句更稳妥？', options: ['先锁住「直径」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「直径」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['直径'] },
  });

  D('diamond', {
    etymology: {
      origin: '希腊语 adamas「不可征服的」，经法语。',
      prefix: null,
      root: { text: 'diamond', gloss: '钻石' },
      suffix: null,
      history: [
        { label: 'diamond', text: '希腊语 adamas「不可征服的」，经法语。' },
        { label: '现在', text: '核心用法是：钻石。' },
      ],
      formationLogic: '考试认现在的用法：钻石。',
      mnemonic: '看到 diamond，先说出「钻石」。',
      note: '考试认现在的用法：钻石。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diamond.', chinese: '这一章反复回到同一个点：钻石。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diamond.s1', en: 'Without that diamond, the next paragraph is hard to follow.', zh: '没有这个钻石，下一段会很难读。', structure: 'diamond / 表示 / 钻石', grammar: 'noun，围绕「钻石」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diamond.', right: 'He gave me some advice about the diamond.', reason: 'advice 不可数。名词 diamond 的单复数按词典词形记。', rule: '先确定 diamond 是noun，再套「钻石」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diamond.q1', senseId: 'diamond.s1', errorType: 'meaning', type: '词义选择', prompt: '「diamond」在本条的核心意思是：', options: ['钻石', '完全相反的意思', '一种古代钱币'], answer: '钻石', explain: 'diamond：钻石。' },
      { id: 'diamond.q2', senseId: 'diamond.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diamond?', options: ['钻石', 'a kind of ancient coin', 'the past tense of be'], answer: '钻石', explain: '对的是「钻石」。' },
      { id: 'diamond.q3', senseId: 'diamond.s1', errorType: 'grammar', type: '词义选择', prompt: 'diamond 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diamond.q4', senseId: 'diamond.s1', errorType: 'meaning', type: '词源', prompt: '记 diamond 时，哪句更稳妥？', options: ['先锁住「钻石」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「钻石」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['钻石'] },
  });

  D('diary', {
    etymology: {
      origin: '拉丁语 diarium，dies「天」。按天写。',
      prefix: null,
      root: { text: 'diary', gloss: '日记' },
      suffix: null,
      history: [
        { label: 'diary', text: '拉丁语 diarium，dies「天」。按天写。' },
        { label: '现在', text: '核心用法是：日记。' },
      ],
      formationLogic: '考试认现在的用法：日记。',
      mnemonic: '看到 diary，先说出「日记」。',
      note: '考试认现在的用法：日记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diary.', chinese: '这一章反复回到同一个点：日记。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diary.s1', en: 'Without that diary, the next paragraph is hard to follow.', zh: '没有这个日记，下一段会很难读。', structure: 'diary / 表示 / 日记', grammar: 'noun，围绕「日记」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diary.', right: 'He gave me some advice about the diary.', reason: 'advice 不可数。名词 diary 的单复数按词典词形记。', rule: '先确定 diary 是noun，再套「日记」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diary.q1', senseId: 'diary.s1', errorType: 'meaning', type: '词义选择', prompt: '「diary」在本条的核心意思是：', options: ['日记', '完全相反的意思', '一种古代钱币'], answer: '日记', explain: 'diary：日记。' },
      { id: 'diary.q2', senseId: 'diary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diary?', options: ['日记', 'a kind of ancient coin', 'the past tense of be'], answer: '日记', explain: '对的是「日记」。' },
      { id: 'diary.q3', senseId: 'diary.s1', errorType: 'grammar', type: '词义选择', prompt: 'diary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diary.q4', senseId: 'diary.s1', errorType: 'meaning', type: '词源', prompt: '记 diary 时，哪句更稳妥？', options: ['先锁住「日记」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「日记」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['日记'] },
  });

  D('dice', {
    etymology: {
      origin: '现代英语常用词「dice」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dice', gloss: '骰子' },
      suffix: null,
      history: [
        { label: 'dice', text: '现代英语常用词「dice」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：骰子。' },
      ],
      formationLogic: '核心义：骰子。',
      mnemonic: '看到 dice，先说出「骰子」。',
      note: '核心义：骰子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dice.', chinese: '这一章反复回到同一个点：骰子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dice.s1', en: 'Without that dice, the next paragraph is hard to follow.', zh: '没有这个骰子，下一段会很难读。', structure: 'dice / 表示 / 骰子', grammar: 'noun，围绕「骰子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dice.', right: 'He gave me some advice about the dice.', reason: 'advice 不可数。名词 dice 的单复数按词典词形记。', rule: '先确定 dice 是noun，再套「骰子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dice.q1', senseId: 'dice.s1', errorType: 'meaning', type: '词义选择', prompt: '「dice」在本条的核心意思是：', options: ['骰子', '完全相反的意思', '一种古代钱币'], answer: '骰子', explain: 'dice：骰子。' },
      { id: 'dice.q2', senseId: 'dice.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dice?', options: ['骰子', 'a kind of ancient coin', 'the past tense of be'], answer: '骰子', explain: '对的是「骰子」。' },
      { id: 'dice.q3', senseId: 'dice.s1', errorType: 'grammar', type: '词义选择', prompt: 'dice 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dice.q4', senseId: 'dice.s1', errorType: 'meaning', type: '词源', prompt: '记 dice 时，哪句更稳妥？', options: ['先锁住「骰子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「骰子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['骰子'] },
  });

  D('dictate', {
    etymology: {
      origin: '拉丁语 dictare「反复说」，dicere「说」。',
      prefix: null,
      root: { text: 'dictate', gloss: '口述' },
      suffix: null,
      history: [
        { label: 'dictate', text: '拉丁语 dictare「反复说」，dicere「说」。' },
        { label: '现在', text: '核心用法是：口述。' },
      ],
      formationLogic: '考试认现在的用法：口述。',
      mnemonic: '看到 dictate，先说出「口述」。',
      note: '考试认现在的用法：口述。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dictate before the office closed.', chinese: '他们同意在办公室关门前做这件事：口述。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dictate.s1', en: 'The deadline forced the team to dictate that afternoon.', zh: '截止日期逼着小组在那天下午口述。', structure: 'dictate / 表示 / 口述', grammar: 'verb，围绕「口述」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dictateed it yesterday without checking the real past form.', right: 'Check the past form of "dictate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dictate 是verb，再套「口述」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dictate.q1', senseId: 'dictate.s1', errorType: 'meaning', type: '词义选择', prompt: '「dictate」在本条的核心意思是：', options: ['口述', '完全相反的意思', '一种古代钱币'], answer: '口述', explain: 'dictate：口述。' },
      { id: 'dictate.q2', senseId: 'dictate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dictate?', options: ['口述', 'a kind of ancient coin', 'the past tense of be'], answer: '口述', explain: '对的是「口述」。' },
      { id: 'dictate.q3', senseId: 'dictate.s1', errorType: 'grammar', type: '词义选择', prompt: 'dictate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dictate.q4', senseId: 'dictate.s1', errorType: 'meaning', type: '词源', prompt: '记 dictate 时，哪句更稳妥？', options: ['先锁住「口述」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「口述」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['口述'] },
  });

  D('dictionary', {
    etymology: {
      origin: '拉丁语 dictionarium，dictio「说法」。',
      prefix: null,
      root: { text: 'dictionary', gloss: '词典' },
      suffix: null,
      history: [
        { label: 'dictionary', text: '拉丁语 dictionarium，dictio「说法」。' },
        { label: '现在', text: '核心用法是：词典。' },
      ],
      formationLogic: '考试认现在的用法：词典。',
      mnemonic: '看到 dictionary，先说出「词典」。',
      note: '考试认现在的用法：词典。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dictionary.', chinese: '这一章反复回到同一个点：词典。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dictionary.s1', en: 'Without that dictionary, the next paragraph is hard to follow.', zh: '没有这个词典，下一段会很难读。', structure: 'dictionary / 表示 / 词典', grammar: 'noun，围绕「词典」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dictionary.', right: 'He gave me some advice about the dictionary.', reason: 'advice 不可数。名词 dictionary 的单复数按词典词形记。', rule: '先确定 dictionary 是noun，再套「词典」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dictionary.q1', senseId: 'dictionary.s1', errorType: 'meaning', type: '词义选择', prompt: '「dictionary」在本条的核心意思是：', options: ['词典', '完全相反的意思', '一种古代钱币'], answer: '词典', explain: 'dictionary：词典。' },
      { id: 'dictionary.q2', senseId: 'dictionary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dictionary?', options: ['词典', 'a kind of ancient coin', 'the past tense of be'], answer: '词典', explain: '对的是「词典」。' },
      { id: 'dictionary.q3', senseId: 'dictionary.s1', errorType: 'grammar', type: '词义选择', prompt: 'dictionary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dictionary.q4', senseId: 'dictionary.s1', errorType: 'meaning', type: '词源', prompt: '记 dictionary 时，哪句更稳妥？', options: ['先锁住「词典」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「词典」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['词典'] },
  });

  D('die', {
    etymology: {
      origin: '死是古诺斯语 deyja。骰子是拉丁语 datum。',
      prefix: null,
      root: { text: 'die', gloss: '死' },
      suffix: null,
      history: [
        { label: 'die', text: '死是古诺斯语 deyja。骰子是拉丁语 datum。' },
        { label: '现在', text: '核心用法是：死。' },
      ],
      formationLogic: '考试认现在的用法：死。',
      mnemonic: '看到 die，先说出「死」。',
      note: '考试认现在的用法：死。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to die before the office closed.', chinese: '他们同意在办公室关门前做这件事：死。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'die.s1', en: 'The deadline forced the team to die that afternoon.', zh: '截止日期逼着小组在那天下午死。', structure: 'die / 表示 / 死', grammar: 'verb，围绕「死」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She dieed it yesterday without checking the real past form.', right: 'Check the past form of "die" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 die 是verb，再套「死」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'die.q1', senseId: 'die.s1', errorType: 'meaning', type: '词义选择', prompt: '「die」在本条的核心意思是：', options: ['死', '完全相反的意思', '一种古代钱币'], answer: '死', explain: 'die：死。' },
      { id: 'die.q2', senseId: 'die.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches die?', options: ['死', 'a kind of ancient coin', 'the past tense of be'], answer: '死', explain: '对的是「死」。' },
      { id: 'die.q3', senseId: 'die.s1', errorType: 'grammar', type: '词义选择', prompt: 'die 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'die.q4', senseId: 'die.s1', errorType: 'meaning', type: '词源', prompt: '记 die 时，哪句更稳妥？', options: ['先锁住「死」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「死」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['死'] },
  });

  D('die away', {
    etymology: {
      origin: '现代英语固定说法「die away」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'die away', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'die away', text: '现代英语固定说法「die away」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：（声音、光）渐弱消失。' },
      ],
      formationLogic: '核心义：（声音、光）渐弱消失。',
      mnemonic: '看到 die away，先说出「（声音、光）渐弱消失」。',
      note: '核心义：（声音、光）渐弱消失。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "die away" and asked the class to keep it as one unit.', chinese: '老师把「die away」圈出来，让全班把它当成一个整体。它表示（声音、光）渐弱消失。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'die away.s1', en: 'In the margin she wrote "die away" so nobody would split the phrase.', zh: '她在页边写下「die away」，免得有人把这个说法拆开。意思是（声音、光）渐弱消失。', structure: 'die away / 表示 / （声音、光）渐弱消失', grammar: 'verb，围绕「（声音、光）渐弱消失」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of die away and lost the point.', right: 'Keep "die away" together: it means （声音、光）渐弱消失.', reason: '「die away」要整块理解。', rule: '先确定 die away 是verb，再套「（声音、光）渐弱消失」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'die away.q1', senseId: 'die away.s1', errorType: 'meaning', type: '词义选择', prompt: '「die away」在本条的核心意思是：', options: ['（声音、光）渐弱消失', '完全相反的意思', '一种古代钱币'], answer: '（声音、光）渐弱消失', explain: 'die away：（声音、光）渐弱消失。' },
      { id: 'die away.q2', senseId: 'die away.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches die away?', options: ['（声音、光）渐弱消失', 'a kind of ancient coin', 'the past tense of be'], answer: '（声音、光）渐弱消失', explain: '对的是「（声音、光）渐弱消失」。' },
      { id: 'die away.q3', senseId: 'die away.s1', errorType: 'grammar', type: '词义选择', prompt: 'die away 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'die away.q4', senseId: 'die away.s1', errorType: 'meaning', type: '词源', prompt: '记 die away 时，哪句更稳妥？', options: ['先锁住「（声音、光）渐弱消失」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（声音、光）渐弱消失」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（声音、光）渐弱消失'] },
  });

  D('die out', {
    etymology: {
      origin: '现代英语固定说法「die out」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'die out', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'die out', text: '现代英语固定说法「die out」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：灭绝。' },
      ],
      formationLogic: '核心义：灭绝。',
      mnemonic: '看到 die out，先说出「灭绝」。',
      note: '核心义：灭绝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "die out" and asked the class to keep it as one unit.', chinese: '老师把「die out」圈出来，让全班把它当成一个整体。它表示灭绝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'die out.s1', en: 'In the margin she wrote "die out" so nobody would split the phrase.', zh: '她在页边写下「die out」，免得有人把这个说法拆开。意思是灭绝。', structure: 'die out / 表示 / 灭绝', grammar: 'verb，围绕「灭绝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of die out and lost the point.', right: 'Keep "die out" together: it means 灭绝.', reason: '「die out」要整块理解。', rule: '先确定 die out 是verb，再套「灭绝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'die out.q1', senseId: 'die out.s1', errorType: 'meaning', type: '词义选择', prompt: '「die out」在本条的核心意思是：', options: ['灭绝', '完全相反的意思', '一种古代钱币'], answer: '灭绝', explain: 'die out：灭绝。' },
      { id: 'die out.q2', senseId: 'die out.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches die out?', options: ['灭绝', 'a kind of ancient coin', 'the past tense of be'], answer: '灭绝', explain: '对的是「灭绝」。' },
      { id: 'die out.q3', senseId: 'die out.s1', errorType: 'grammar', type: '词义选择', prompt: 'die out 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'die out.q4', senseId: 'die out.s1', errorType: 'meaning', type: '词源', prompt: '记 die out 时，哪句更稳妥？', options: ['先锁住「灭绝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「灭绝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['灭绝'] },
  });

  D('diesel', {
    etymology: {
      origin: '现代英语常用词「diesel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diesel', gloss: '柴油' },
      suffix: null,
      history: [
        { label: 'diesel', text: '现代英语常用词「diesel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：柴油。' },
      ],
      formationLogic: '核心义：柴油。',
      mnemonic: '看到 diesel，先说出「柴油」。',
      note: '核心义：柴油。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diesel.', chinese: '这一章反复回到同一个点：柴油。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diesel.s1', en: 'Without that diesel, the next paragraph is hard to follow.', zh: '没有这个柴油，下一段会很难读。', structure: 'diesel / 表示 / 柴油', grammar: 'noun，围绕「柴油」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diesel.', right: 'He gave me some advice about the diesel.', reason: 'advice 不可数。名词 diesel 的单复数按词典词形记。', rule: '先确定 diesel 是noun，再套「柴油」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diesel.q1', senseId: 'diesel.s1', errorType: 'meaning', type: '词义选择', prompt: '「diesel」在本条的核心意思是：', options: ['柴油', '完全相反的意思', '一种古代钱币'], answer: '柴油', explain: 'diesel：柴油。' },
      { id: 'diesel.q2', senseId: 'diesel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diesel?', options: ['柴油', 'a kind of ancient coin', 'the past tense of be'], answer: '柴油', explain: '对的是「柴油」。' },
      { id: 'diesel.q3', senseId: 'diesel.s1', errorType: 'grammar', type: '词义选择', prompt: 'diesel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diesel.q4', senseId: 'diesel.s1', errorType: 'meaning', type: '词源', prompt: '记 diesel 时，哪句更稳妥？', options: ['先锁住「柴油」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「柴油」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['柴油'] },
  });

  D('diet', {
    etymology: {
      origin: '希腊语 diaita「生活方式」。',
      prefix: null,
      root: { text: 'diet', gloss: '饮食' },
      suffix: null,
      history: [
        { label: 'diet', text: '希腊语 diaita「生活方式」。' },
        { label: '现在', text: '核心用法是：饮食。' },
      ],
      formationLogic: '考试认现在的用法：饮食。',
      mnemonic: '看到 diet，先说出「饮食」。',
      note: '考试认现在的用法：饮食。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diet.', chinese: '这一章反复回到同一个点：饮食。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diet.s1', en: 'Without that diet, the next paragraph is hard to follow.', zh: '没有这个饮食，下一段会很难读。', structure: 'diet / 表示 / 饮食', grammar: 'noun，围绕「饮食」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diet.', right: 'He gave me some advice about the diet.', reason: 'advice 不可数。名词 diet 的单复数按词典词形记。', rule: '先确定 diet 是noun，再套「饮食」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diet.q1', senseId: 'diet.s1', errorType: 'meaning', type: '词义选择', prompt: '「diet」在本条的核心意思是：', options: ['饮食', '完全相反的意思', '一种古代钱币'], answer: '饮食', explain: 'diet：饮食。' },
      { id: 'diet.q2', senseId: 'diet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diet?', options: ['饮食', 'a kind of ancient coin', 'the past tense of be'], answer: '饮食', explain: '对的是「饮食」。' },
      { id: 'diet.q3', senseId: 'diet.s1', errorType: 'grammar', type: '词义选择', prompt: 'diet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diet.q4', senseId: 'diet.s1', errorType: 'meaning', type: '词源', prompt: '记 diet 时，哪句更稳妥？', options: ['先锁住「饮食」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「饮食」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['饮食'] },
  });

  D('dietetics', {
    etymology: {
      origin: '现代英语常用词「dietetics」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dietetics', gloss: '饮食学' },
      suffix: null,
      history: [
        { label: 'dietetics', text: '现代英语常用词「dietetics」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：饮食学。' },
      ],
      formationLogic: '核心义：饮食学。',
      mnemonic: '看到 dietetics，先说出「饮食学」。',
      note: '核心义：饮食学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dietetics.', chinese: '这一章反复回到同一个点：饮食学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dietetics.s1', en: 'Without that dietetics, the next paragraph is hard to follow.', zh: '没有这个饮食学，下一段会很难读。', structure: 'dietetics / 表示 / 饮食学', grammar: 'noun，围绕「饮食学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dietetics.', right: 'He gave me some advice about the dietetics.', reason: 'advice 不可数。名词 dietetics 的单复数按词典词形记。', rule: '先确定 dietetics 是noun，再套「饮食学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dietetics.q1', senseId: 'dietetics.s1', errorType: 'meaning', type: '词义选择', prompt: '「dietetics」在本条的核心意思是：', options: ['饮食学', '完全相反的意思', '一种古代钱币'], answer: '饮食学', explain: 'dietetics：饮食学。' },
      { id: 'dietetics.q2', senseId: 'dietetics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dietetics?', options: ['饮食学', 'a kind of ancient coin', 'the past tense of be'], answer: '饮食学', explain: '对的是「饮食学」。' },
      { id: 'dietetics.q3', senseId: 'dietetics.s1', errorType: 'grammar', type: '词义选择', prompt: 'dietetics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dietetics.q4', senseId: 'dietetics.s1', errorType: 'meaning', type: '词源', prompt: '记 dietetics 时，哪句更稳妥？', options: ['先锁住「饮食学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「饮食学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['饮食学'] },
  });

  D('differ', {
    etymology: {
      origin: '拉丁语 differre「拿到不同方向」。',
      prefix: null,
      root: { text: 'differ', gloss: '不同' },
      suffix: null,
      history: [
        { label: 'differ', text: '拉丁语 differre「拿到不同方向」。' },
        { label: '现在', text: '核心用法是：不同。' },
      ],
      formationLogic: '考试认现在的用法：不同。',
      mnemonic: '看到 differ，先说出「不同」。',
      note: '考试认现在的用法：不同。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to differ before the office closed.', chinese: '他们同意在办公室关门前做这件事：不同。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'differ.s1', en: 'The deadline forced the team to differ that afternoon.', zh: '截止日期逼着小组在那天下午不同。', structure: 'differ / 表示 / 不同', grammar: 'verb，围绕「不同」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She differed it yesterday without checking the real past form.', right: 'Check the past form of "differ" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 differ 是verb，再套「不同」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'differ.q1', senseId: 'differ.s1', errorType: 'meaning', type: '词义选择', prompt: '「differ」在本条的核心意思是：', options: ['不同', '完全相反的意思', '一种古代钱币'], answer: '不同', explain: 'differ：不同。' },
      { id: 'differ.q2', senseId: 'differ.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches differ?', options: ['不同', 'a kind of ancient coin', 'the past tense of be'], answer: '不同', explain: '对的是「不同」。' },
      { id: 'differ.q3', senseId: 'differ.s1', errorType: 'grammar', type: '词义选择', prompt: 'differ 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'differ.q4', senseId: 'differ.s1', errorType: 'meaning', type: '词源', prompt: '记 differ 时，哪句更稳妥？', options: ['先锁住「不同」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不同」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不同'] },
  });

  D('difference', {
    etymology: {
      origin: 'differ 的名词。',
      prefix: null,
      root: { text: 'difference', gloss: '差别' },
      suffix: null,
      history: [
        { label: 'difference', text: 'differ 的名词。' },
        { label: '现在', text: '核心用法是：差别。' },
      ],
      formationLogic: '考试认现在的用法：差别。',
      mnemonic: '看到 difference，先说出「差别」。',
      note: '考试认现在的用法：差别。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one difference.', chinese: '这一章反复回到同一个点：差别。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'difference.s1', en: 'Without that difference, the next paragraph is hard to follow.', zh: '没有这个差别，下一段会很难读。', structure: 'difference / 表示 / 差别', grammar: 'noun，围绕「差别」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the difference.', right: 'He gave me some advice about the difference.', reason: 'advice 不可数。名词 difference 的单复数按词典词形记。', rule: '先确定 difference 是noun，再套「差别」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'difference.q1', senseId: 'difference.s1', errorType: 'meaning', type: '词义选择', prompt: '「difference」在本条的核心意思是：', options: ['差别', '完全相反的意思', '一种古代钱币'], answer: '差别', explain: 'difference：差别。' },
      { id: 'difference.q2', senseId: 'difference.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches difference?', options: ['差别', 'a kind of ancient coin', 'the past tense of be'], answer: '差别', explain: '对的是「差别」。' },
      { id: 'difference.q3', senseId: 'difference.s1', errorType: 'grammar', type: '词义选择', prompt: 'difference 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'difference.q4', senseId: 'difference.s1', errorType: 'meaning', type: '词源', prompt: '记 difference 时，哪句更稳妥？', options: ['先锁住「差别」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「差别」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['差别'] },
  });

  D('different', {
    etymology: {
      origin: '拉丁语 differre。',
      prefix: null,
      root: { text: 'different', gloss: '不同的' },
      suffix: null,
      history: [
        { label: 'different', text: '拉丁语 differre。' },
        { label: '现在', text: '核心用法是：不同的。' },
      ],
      formationLogic: '考试认现在的用法：不同的。',
      mnemonic: '看到 different，先说出「不同的」。',
      note: '考试认现在的用法：不同的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was different.', chinese: '即使是初读者也能看出，这个结果是不同的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'different.s1', en: 'They wanted a different answer, not a long speech.', zh: '他们要一个不同的的答复，不要长篇发言。', structure: 'different / 表示 / 不同的', grammar: 'adjective，围绕「不同的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are different.', right: 'The news is different.', reason: 'news 作主语时动词用单数。', rule: '先确定 different 是adjective，再套「不同的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'different.q1', senseId: 'different.s1', errorType: 'meaning', type: '词义选择', prompt: '「different」在本条的核心意思是：', options: ['不同的', '完全相反的意思', '一种古代钱币'], answer: '不同的', explain: 'different：不同的。' },
      { id: 'different.q2', senseId: 'different.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches different?', options: ['不同的', 'a kind of ancient coin', 'the past tense of be'], answer: '不同的', explain: '对的是「不同的」。' },
      { id: 'different.q3', senseId: 'different.s1', errorType: 'grammar', type: '词义选择', prompt: 'different 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'different.q4', senseId: 'different.s1', errorType: 'meaning', type: '词源', prompt: '记 different 时，哪句更稳妥？', options: ['先锁住「不同的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不同的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不同的'] },
  });

  D('differentiate', {
    etymology: {
      origin: '现代英语常用词「differentiate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'differentiate', gloss: '区分' },
      suffix: null,
      history: [
        { label: 'differentiate', text: '现代英语常用词「differentiate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：区分。' },
      ],
      formationLogic: '核心义：区分。',
      mnemonic: '看到 differentiate，先说出「区分」。',
      note: '核心义：区分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to differentiate before the office closed.', chinese: '他们同意在办公室关门前做这件事：区分。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'differentiate.s1', en: 'The deadline forced the team to differentiate that afternoon.', zh: '截止日期逼着小组在那天下午区分。', structure: 'differentiate / 表示 / 区分', grammar: 'verb，围绕「区分」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She differentiateed it yesterday without checking the real past form.', right: 'Check the past form of "differentiate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 differentiate 是verb，再套「区分」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'differentiate.q1', senseId: 'differentiate.s1', errorType: 'meaning', type: '词义选择', prompt: '「differentiate」在本条的核心意思是：', options: ['区分', '完全相反的意思', '一种古代钱币'], answer: '区分', explain: 'differentiate：区分。' },
      { id: 'differentiate.q2', senseId: 'differentiate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches differentiate?', options: ['区分', 'a kind of ancient coin', 'the past tense of be'], answer: '区分', explain: '对的是「区分」。' },
      { id: 'differentiate.q3', senseId: 'differentiate.s1', errorType: 'grammar', type: '词义选择', prompt: 'differentiate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'differentiate.q4', senseId: 'differentiate.s1', errorType: 'meaning', type: '词源', prompt: '记 differentiate 时，哪句更稳妥？', options: ['先锁住「区分」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「区分」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['区分'] },
  });

  D('differently', {
    etymology: {
      origin: '英语派生：different + -ly，词性转到「不同地」。',
      prefix: null,
      root: { text: 'different', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'differently', text: '英语派生：different + -ly，词性转到「不同地」。' },
        { label: '现在', text: '核心用法是：不同地。' },
      ],
      formationLogic: '先认词干 different，再看词尾。',
      mnemonic: '看到 differently，先说出「不同地」。',
      note: '先认词干 different，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule differently, and the class followed.', chinese: '她把规则讲清楚了（不同地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'differently.s1', en: 'He nodded differently and returned to the notes.', zh: '他不同地地点了点头，又回去看笔记。', structure: 'differently / 表示 / 不同地', grammar: 'adverb，围绕「不同地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very differentlyly in the meeting.', right: 'She spoke differently in the meeting.', reason: 'differently 已经是副词，不要再加 -ly。', rule: '先确定 differently 是adverb，再套「不同地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'differently.q1', senseId: 'differently.s1', errorType: 'meaning', type: '词义选择', prompt: '「differently」在本条的核心意思是：', options: ['不同地', '完全相反的意思', '一种古代钱币'], answer: '不同地', explain: 'differently：不同地。' },
      { id: 'differently.q2', senseId: 'differently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches differently?', options: ['不同地', 'a kind of ancient coin', 'the past tense of be'], answer: '不同地', explain: '对的是「不同地」。' },
      { id: 'differently.q3', senseId: 'differently.s1', errorType: 'grammar', type: '词义选择', prompt: 'differently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'differently.q4', senseId: 'differently.s1', errorType: 'meaning', type: '词源', prompt: '记 differently 时，哪句更稳妥？', options: ['先锁住「不同地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不同地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不同地'] },
  });

  D('difficult', {
    etymology: {
      origin: '拉丁语 difficilis：dis- + facilis「不容易」。',
      prefix: null,
      root: { text: 'difficult', gloss: '困难的' },
      suffix: null,
      history: [
        { label: 'difficult', text: '拉丁语 difficilis：dis- + facilis「不容易」。' },
        { label: '现在', text: '核心用法是：困难的。' },
      ],
      formationLogic: '考试认现在的用法：困难的。',
      mnemonic: '看到 difficult，先说出「困难的」。',
      note: '考试认现在的用法：困难的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was difficult.', chinese: '即使是初读者也能看出，这个结果是困难的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'difficult.s1', en: 'They wanted a difficult answer, not a long speech.', zh: '他们要一个困难的的答复，不要长篇发言。', structure: 'difficult / 表示 / 困难的', grammar: 'adjective，围绕「困难的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are difficult.', right: 'The news is difficult.', reason: 'news 作主语时动词用单数。', rule: '先确定 difficult 是adjective，再套「困难的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'difficult.q1', senseId: 'difficult.s1', errorType: 'meaning', type: '词义选择', prompt: '「difficult」在本条的核心意思是：', options: ['困难的', '完全相反的意思', '一种古代钱币'], answer: '困难的', explain: 'difficult：困难的。' },
      { id: 'difficult.q2', senseId: 'difficult.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches difficult?', options: ['困难的', 'a kind of ancient coin', 'the past tense of be'], answer: '困难的', explain: '对的是「困难的」。' },
      { id: 'difficult.q3', senseId: 'difficult.s1', errorType: 'grammar', type: '词义选择', prompt: 'difficult 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'difficult.q4', senseId: 'difficult.s1', errorType: 'meaning', type: '词源', prompt: '记 difficult 时，哪句更稳妥？', options: ['先锁住「困难的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「困难的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['困难的'] },
  });

  D('difficulty', {
    etymology: {
      origin: 'difficult 的名词。',
      prefix: null,
      root: { text: 'difficulty', gloss: '困难' },
      suffix: null,
      history: [
        { label: 'difficulty', text: 'difficult 的名词。' },
        { label: '现在', text: '核心用法是：困难。' },
      ],
      formationLogic: '考试认现在的用法：困难。',
      mnemonic: '看到 difficulty，先说出「困难」。',
      note: '考试认现在的用法：困难。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one difficulty.', chinese: '这一章反复回到同一个点：困难。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'difficulty.s1', en: 'Without that difficulty, the next paragraph is hard to follow.', zh: '没有这个困难，下一段会很难读。', structure: 'difficulty / 表示 / 困难', grammar: 'noun，围绕「困难」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the difficulty.', right: 'He gave me some advice about the difficulty.', reason: 'advice 不可数。名词 difficulty 的单复数按词典词形记。', rule: '先确定 difficulty 是noun，再套「困难」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'difficulty.q1', senseId: 'difficulty.s1', errorType: 'meaning', type: '词义选择', prompt: '「difficulty」在本条的核心意思是：', options: ['困难', '完全相反的意思', '一种古代钱币'], answer: '困难', explain: 'difficulty：困难。' },
      { id: 'difficulty.q2', senseId: 'difficulty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches difficulty?', options: ['困难', 'a kind of ancient coin', 'the past tense of be'], answer: '困难', explain: '对的是「困难」。' },
      { id: 'difficulty.q3', senseId: 'difficulty.s1', errorType: 'grammar', type: '词义选择', prompt: 'difficulty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'difficulty.q4', senseId: 'difficulty.s1', errorType: 'meaning', type: '词源', prompt: '记 difficulty 时，哪句更稳妥？', options: ['先锁住「困难」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「困难」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['困难'] },
  });

  D('diffuse', {
    etymology: {
      origin: '现代英语常用词「diffuse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diffuse', gloss: '扩散' },
      suffix: null,
      history: [
        { label: 'diffuse', text: '现代英语常用词「diffuse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：扩散。' },
      ],
      formationLogic: '核心义：扩散。',
      mnemonic: '看到 diffuse，先说出「扩散」。',
      note: '核心义：扩散。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to diffuse before the office closed.', chinese: '他们同意在办公室关门前做这件事：扩散。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diffuse.s1', en: 'The deadline forced the team to diffuse that afternoon.', zh: '截止日期逼着小组在那天下午扩散。', structure: 'diffuse / 表示 / 扩散', grammar: 'verb，围绕「扩散」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diffuseed it yesterday without checking the real past form.', right: 'Check the past form of "diffuse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 diffuse 是verb，再套「扩散」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diffuse.q1', senseId: 'diffuse.s1', errorType: 'meaning', type: '词义选择', prompt: '「diffuse」在本条的核心意思是：', options: ['扩散', '完全相反的意思', '一种古代钱币'], answer: '扩散', explain: 'diffuse：扩散。' },
      { id: 'diffuse.q2', senseId: 'diffuse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diffuse?', options: ['扩散', 'a kind of ancient coin', 'the past tense of be'], answer: '扩散', explain: '对的是「扩散」。' },
      { id: 'diffuse.q3', senseId: 'diffuse.s1', errorType: 'grammar', type: '词义选择', prompt: 'diffuse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'diffuse.q4', senseId: 'diffuse.s1', errorType: 'meaning', type: '词源', prompt: '记 diffuse 时，哪句更稳妥？', options: ['先锁住「扩散」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「扩散」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['扩散'] },
  });

  D('dig', {
    etymology: {
      origin: '古英语 dic「沟」，后指挖。',
      prefix: null,
      root: { text: 'dig', gloss: '挖' },
      suffix: null,
      history: [
        { label: 'dig', text: '古英语 dic「沟」，后指挖。' },
        { label: '现在', text: '核心用法是：挖。' },
      ],
      formationLogic: '考试认现在的用法：挖。',
      mnemonic: '看到 dig，先说出「挖」。',
      note: '考试认现在的用法：挖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dig before the office closed.', chinese: '他们同意在办公室关门前做这件事：挖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dig.s1', en: 'The deadline forced the team to dig that afternoon.', zh: '截止日期逼着小组在那天下午挖。', structure: 'dig / 表示 / 挖', grammar: 'verb，围绕「挖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diged it yesterday without checking the real past form.', right: 'Check the past form of "dig" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dig 是verb，再套「挖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dig.q1', senseId: 'dig.s1', errorType: 'meaning', type: '词义选择', prompt: '「dig」在本条的核心意思是：', options: ['挖', '完全相反的意思', '一种古代钱币'], answer: '挖', explain: 'dig：挖。' },
      { id: 'dig.q2', senseId: 'dig.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dig?', options: ['挖', 'a kind of ancient coin', 'the past tense of be'], answer: '挖', explain: '对的是「挖」。' },
      { id: 'dig.q3', senseId: 'dig.s1', errorType: 'grammar', type: '词义选择', prompt: 'dig 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dig.q4', senseId: 'dig.s1', errorType: 'meaning', type: '词源', prompt: '记 dig 时，哪句更稳妥？', options: ['先锁住「挖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挖'] },
  });

  D('digest', {
    etymology: {
      origin: '拉丁语 digerere「分开运走」。消化是把食物拆开。',
      prefix: null,
      root: { text: 'digest', gloss: '消化' },
      suffix: null,
      history: [
        { label: 'digest', text: '拉丁语 digerere「分开运走」。消化是把食物拆开。' },
        { label: '现在', text: '核心用法是：消化。' },
      ],
      formationLogic: '考试认现在的用法：消化。',
      mnemonic: '看到 digest，先说出「消化」。',
      note: '考试认现在的用法：消化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to digest before the office closed.', chinese: '他们同意在办公室关门前做这件事：消化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'digest.s1', en: 'The deadline forced the team to digest that afternoon.', zh: '截止日期逼着小组在那天下午消化。', structure: 'digest / 表示 / 消化', grammar: 'verb，围绕「消化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She digested it yesterday without checking the real past form.', right: 'Check the past form of "digest" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 digest 是verb，再套「消化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'digest.q1', senseId: 'digest.s1', errorType: 'meaning', type: '词义选择', prompt: '「digest」在本条的核心意思是：', options: ['消化', '完全相反的意思', '一种古代钱币'], answer: '消化', explain: 'digest：消化。' },
      { id: 'digest.q2', senseId: 'digest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches digest?', options: ['消化', 'a kind of ancient coin', 'the past tense of be'], answer: '消化', explain: '对的是「消化」。' },
      { id: 'digest.q3', senseId: 'digest.s1', errorType: 'grammar', type: '词义选择', prompt: 'digest 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'digest.q4', senseId: 'digest.s1', errorType: 'meaning', type: '词源', prompt: '记 digest 时，哪句更稳妥？', options: ['先锁住「消化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消化'] },
  });

  D('digestion', {
    etymology: {
      origin: '英语派生：diges + -tion，词性转到「消化」。',
      prefix: null,
      root: { text: 'diges', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'digestion', text: '英语派生：diges + -tion，词性转到「消化」。' },
        { label: '现在', text: '核心用法是：消化。' },
      ],
      formationLogic: '先认词干 diges，再看词尾。',
      mnemonic: '看到 digestion，先说出「消化」。',
      note: '先认词干 diges，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one digestion.', chinese: '这一章反复回到同一个点：消化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'digestion.s1', en: 'Without that digestion, the next paragraph is hard to follow.', zh: '没有这个消化，下一段会很难读。', structure: 'digestion / 表示 / 消化', grammar: 'noun，围绕「消化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the digestion.', right: 'He gave me some advice about the digestion.', reason: 'advice 不可数。名词 digestion 的单复数按词典词形记。', rule: '先确定 digestion 是noun，再套「消化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'digestion.q1', senseId: 'digestion.s1', errorType: 'meaning', type: '词义选择', prompt: '「digestion」在本条的核心意思是：', options: ['消化', '完全相反的意思', '一种古代钱币'], answer: '消化', explain: 'digestion：消化。' },
      { id: 'digestion.q2', senseId: 'digestion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches digestion?', options: ['消化', 'a kind of ancient coin', 'the past tense of be'], answer: '消化', explain: '对的是「消化」。' },
      { id: 'digestion.q3', senseId: 'digestion.s1', errorType: 'grammar', type: '词义选择', prompt: 'digestion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'digestion.q4', senseId: 'digestion.s1', errorType: 'meaning', type: '词源', prompt: '记 digestion 时，哪句更稳妥？', options: ['先锁住「消化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「消化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['消化'] },
  });

  D('digit', {
    etymology: {
      origin: '现代英语常用词「digit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'digit', gloss: '数字' },
      suffix: null,
      history: [
        { label: 'digit', text: '现代英语常用词「digit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：数字。' },
      ],
      formationLogic: '核心义：数字。',
      mnemonic: '看到 digit，先说出「数字」。',
      note: '核心义：数字。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one digit.', chinese: '这一章反复回到同一个点：数字。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'digit.s1', en: 'Without that digit, the next paragraph is hard to follow.', zh: '没有这个数字，下一段会很难读。', structure: 'digit / 表示 / 数字', grammar: 'noun，围绕「数字」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the digit.', right: 'He gave me some advice about the digit.', reason: 'advice 不可数。名词 digit 的单复数按词典词形记。', rule: '先确定 digit 是noun，再套「数字」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'digit.q1', senseId: 'digit.s1', errorType: 'meaning', type: '词义选择', prompt: '「digit」在本条的核心意思是：', options: ['数字', '完全相反的意思', '一种古代钱币'], answer: '数字', explain: 'digit：数字。' },
      { id: 'digit.q2', senseId: 'digit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches digit?', options: ['数字', 'a kind of ancient coin', 'the past tense of be'], answer: '数字', explain: '对的是「数字」。' },
      { id: 'digit.q3', senseId: 'digit.s1', errorType: 'grammar', type: '词义选择', prompt: 'digit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'digit.q4', senseId: 'digit.s1', errorType: 'meaning', type: '词源', prompt: '记 digit 时，哪句更稳妥？', options: ['先锁住「数字」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数字」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数字'] },
  });

  D('digital', {
    etymology: {
      origin: '拉丁语 digitus「手指」。用手指数，所以数字的。',
      prefix: null,
      root: { text: 'digital', gloss: '数字的' },
      suffix: null,
      history: [
        { label: 'digital', text: '拉丁语 digitus「手指」。用手指数，所以数字的。' },
        { label: '现在', text: '核心用法是：数字的。' },
      ],
      formationLogic: '考试认现在的用法：数字的。',
      mnemonic: '看到 digital，先说出「数字的」。',
      note: '考试认现在的用法：数字的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was digital.', chinese: '即使是初读者也能看出，这个结果是数字的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'digital.s1', en: 'They wanted a digital answer, not a long speech.', zh: '他们要一个数字的的答复，不要长篇发言。', structure: 'digital / 表示 / 数字的', grammar: 'adjective，围绕「数字的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are digital.', right: 'The news is digital.', reason: 'news 作主语时动词用单数。', rule: '先确定 digital 是adjective，再套「数字的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'digital.q1', senseId: 'digital.s1', errorType: 'meaning', type: '词义选择', prompt: '「digital」在本条的核心意思是：', options: ['数字的', '完全相反的意思', '一种古代钱币'], answer: '数字的', explain: 'digital：数字的。' },
      { id: 'digital.q2', senseId: 'digital.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches digital?', options: ['数字的', 'a kind of ancient coin', 'the past tense of be'], answer: '数字的', explain: '对的是「数字的」。' },
      { id: 'digital.q3', senseId: 'digital.s1', errorType: 'grammar', type: '词义选择', prompt: 'digital 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'digital.q4', senseId: 'digital.s1', errorType: 'meaning', type: '词源', prompt: '记 digital 时，哪句更稳妥？', options: ['先锁住「数字的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数字的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数字的'] },
  });

  D('digitize', {
    etymology: {
      origin: '现代英语常用词「digitize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'digitize', gloss: '数字化' },
      suffix: null,
      history: [
        { label: 'digitize', text: '现代英语常用词「digitize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：数字化。' },
      ],
      formationLogic: '核心义：数字化。',
      mnemonic: '看到 digitize，先说出「数字化」。',
      note: '核心义：数字化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to digitize before the office closed.', chinese: '他们同意在办公室关门前做这件事：数字化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'digitize.s1', en: 'The deadline forced the team to digitize that afternoon.', zh: '截止日期逼着小组在那天下午数字化。', structure: 'digitize / 表示 / 数字化', grammar: 'verb，围绕「数字化」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She digitizeed it yesterday without checking the real past form.', right: 'Check the past form of "digitize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 digitize 是verb，再套「数字化」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'digitize.q1', senseId: 'digitize.s1', errorType: 'meaning', type: '词义选择', prompt: '「digitize」在本条的核心意思是：', options: ['数字化', '完全相反的意思', '一种古代钱币'], answer: '数字化', explain: 'digitize：数字化。' },
      { id: 'digitize.q2', senseId: 'digitize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches digitize?', options: ['数字化', 'a kind of ancient coin', 'the past tense of be'], answer: '数字化', explain: '对的是「数字化」。' },
      { id: 'digitize.q3', senseId: 'digitize.s1', errorType: 'grammar', type: '词义选择', prompt: 'digitize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'digitize.q4', senseId: 'digitize.s1', errorType: 'meaning', type: '词源', prompt: '记 digitize 时，哪句更稳妥？', options: ['先锁住「数字化」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「数字化」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数字化'] },
  });

  D('dignity', {
    etymology: {
      origin: '拉丁语 dignitas，dignus「值得的」。',
      prefix: null,
      root: { text: 'dignity', gloss: '尊严' },
      suffix: null,
      history: [
        { label: 'dignity', text: '拉丁语 dignitas，dignus「值得的」。' },
        { label: '现在', text: '核心用法是：尊严。' },
      ],
      formationLogic: '考试认现在的用法：尊严。',
      mnemonic: '看到 dignity，先说出「尊严」。',
      note: '考试认现在的用法：尊严。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dignity.', chinese: '这一章反复回到同一个点：尊严。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dignity.s1', en: 'Without that dignity, the next paragraph is hard to follow.', zh: '没有这个尊严，下一段会很难读。', structure: 'dignity / 表示 / 尊严', grammar: 'noun，围绕「尊严」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dignity.', right: 'He gave me some advice about the dignity.', reason: 'advice 不可数。名词 dignity 的单复数按词典词形记。', rule: '先确定 dignity 是noun，再套「尊严」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dignity.q1', senseId: 'dignity.s1', errorType: 'meaning', type: '词义选择', prompt: '「dignity」在本条的核心意思是：', options: ['尊严', '完全相反的意思', '一种古代钱币'], answer: '尊严', explain: 'dignity：尊严。' },
      { id: 'dignity.q2', senseId: 'dignity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dignity?', options: ['尊严', 'a kind of ancient coin', 'the past tense of be'], answer: '尊严', explain: '对的是「尊严」。' },
      { id: 'dignity.q3', senseId: 'dignity.s1', errorType: 'grammar', type: '词义选择', prompt: 'dignity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dignity.q4', senseId: 'dignity.s1', errorType: 'meaning', type: '词源', prompt: '记 dignity 时，哪句更稳妥？', options: ['先锁住「尊严」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「尊严」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['尊严'] },
  });

  D('digression', {
    etymology: {
      origin: '英语派生：digres + -sion，词性转到「离题」。',
      prefix: null,
      root: { text: 'digres', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'digression', text: '英语派生：digres + -sion，词性转到「离题」。' },
        { label: '现在', text: '核心用法是：离题。' },
      ],
      formationLogic: '先认词干 digres，再看词尾。',
      mnemonic: '看到 digression，先说出「离题」。',
      note: '先认词干 digres，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one digression.', chinese: '这一章反复回到同一个点：离题。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'digression.s1', en: 'Without that digression, the next paragraph is hard to follow.', zh: '没有这个离题，下一段会很难读。', structure: 'digression / 表示 / 离题', grammar: 'noun，围绕「离题」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the digression.', right: 'He gave me some advice about the digression.', reason: 'advice 不可数。名词 digression 的单复数按词典词形记。', rule: '先确定 digression 是noun，再套「离题」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'digression.q1', senseId: 'digression.s1', errorType: 'meaning', type: '词义选择', prompt: '「digression」在本条的核心意思是：', options: ['离题', '完全相反的意思', '一种古代钱币'], answer: '离题', explain: 'digression：离题。' },
      { id: 'digression.q2', senseId: 'digression.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches digression?', options: ['离题', 'a kind of ancient coin', 'the past tense of be'], answer: '离题', explain: '对的是「离题」。' },
      { id: 'digression.q3', senseId: 'digression.s1', errorType: 'grammar', type: '词义选择', prompt: 'digression 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'digression.q4', senseId: 'digression.s1', errorType: 'meaning', type: '词源', prompt: '记 digression 时，哪句更稳妥？', options: ['先锁住「离题」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「离题」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['离题'] },
  });

  D('dike', {
    etymology: {
      origin: '现代英语常用词「dike」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dike', gloss: '堤坝' },
      suffix: null,
      history: [
        { label: 'dike', text: '现代英语常用词「dike」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：堤坝。' },
      ],
      formationLogic: '核心义：堤坝。',
      mnemonic: '看到 dike，先说出「堤坝」。',
      note: '核心义：堤坝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dike.', chinese: '这一章反复回到同一个点：堤坝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dike.s1', en: 'Without that dike, the next paragraph is hard to follow.', zh: '没有这个堤坝，下一段会很难读。', structure: 'dike / 表示 / 堤坝', grammar: 'noun，围绕「堤坝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dike.', right: 'He gave me some advice about the dike.', reason: 'advice 不可数。名词 dike 的单复数按词典词形记。', rule: '先确定 dike 是noun，再套「堤坝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dike.q1', senseId: 'dike.s1', errorType: 'meaning', type: '词义选择', prompt: '「dike」在本条的核心意思是：', options: ['堤坝', '完全相反的意思', '一种古代钱币'], answer: '堤坝', explain: 'dike：堤坝。' },
      { id: 'dike.q2', senseId: 'dike.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dike?', options: ['堤坝', 'a kind of ancient coin', 'the past tense of be'], answer: '堤坝', explain: '对的是「堤坝」。' },
      { id: 'dike.q3', senseId: 'dike.s1', errorType: 'grammar', type: '词义选择', prompt: 'dike 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dike.q4', senseId: 'dike.s1', errorType: 'meaning', type: '词源', prompt: '记 dike 时，哪句更稳妥？', options: ['先锁住「堤坝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「堤坝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['堤坝'] },
  });

  D('dilemma', {
    etymology: {
      origin: '现代英语常用词「dilemma」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dilemma', gloss: '困境' },
      suffix: null,
      history: [
        { label: 'dilemma', text: '现代英语常用词「dilemma」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：困境。' },
      ],
      formationLogic: '核心义：困境。',
      mnemonic: '看到 dilemma，先说出「困境」。',
      note: '核心义：困境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dilemma.', chinese: '这一章反复回到同一个点：困境。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dilemma.s1', en: 'Without that dilemma, the next paragraph is hard to follow.', zh: '没有这个困境，下一段会很难读。', structure: 'dilemma / 表示 / 困境', grammar: 'noun，围绕「困境」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dilemma.', right: 'He gave me some advice about the dilemma.', reason: 'advice 不可数。名词 dilemma 的单复数按词典词形记。', rule: '先确定 dilemma 是noun，再套「困境」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dilemma.q1', senseId: 'dilemma.s1', errorType: 'meaning', type: '词义选择', prompt: '「dilemma」在本条的核心意思是：', options: ['困境', '完全相反的意思', '一种古代钱币'], answer: '困境', explain: 'dilemma：困境。' },
      { id: 'dilemma.q2', senseId: 'dilemma.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dilemma?', options: ['困境', 'a kind of ancient coin', 'the past tense of be'], answer: '困境', explain: '对的是「困境」。' },
      { id: 'dilemma.q3', senseId: 'dilemma.s1', errorType: 'grammar', type: '词义选择', prompt: 'dilemma 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dilemma.q4', senseId: 'dilemma.s1', errorType: 'meaning', type: '词源', prompt: '记 dilemma 时，哪句更稳妥？', options: ['先锁住「困境」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「困境」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['困境'] },
  });

  D('diligence', {
    etymology: {
      origin: '英语派生：dilig + -ence，词性转到「勤勉」。',
      prefix: null,
      root: { text: 'dilig', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'diligence', text: '英语派生：dilig + -ence，词性转到「勤勉」。' },
        { label: '现在', text: '核心用法是：勤勉。' },
      ],
      formationLogic: '先认词干 dilig，再看词尾。',
      mnemonic: '看到 diligence，先说出「勤勉」。',
      note: '先认词干 dilig，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one diligence.', chinese: '这一章反复回到同一个点：勤勉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diligence.s1', en: 'Without that diligence, the next paragraph is hard to follow.', zh: '没有这个勤勉，下一段会很难读。', structure: 'diligence / 表示 / 勤勉', grammar: 'noun，围绕「勤勉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the diligence.', right: 'He gave me some advice about the diligence.', reason: 'advice 不可数。名词 diligence 的单复数按词典词形记。', rule: '先确定 diligence 是noun，再套「勤勉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diligence.q1', senseId: 'diligence.s1', errorType: 'meaning', type: '词义选择', prompt: '「diligence」在本条的核心意思是：', options: ['勤勉', '完全相反的意思', '一种古代钱币'], answer: '勤勉', explain: 'diligence：勤勉。' },
      { id: 'diligence.q2', senseId: 'diligence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diligence?', options: ['勤勉', 'a kind of ancient coin', 'the past tense of be'], answer: '勤勉', explain: '对的是「勤勉」。' },
      { id: 'diligence.q3', senseId: 'diligence.s1', errorType: 'grammar', type: '词义选择', prompt: 'diligence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'diligence.q4', senseId: 'diligence.s1', errorType: 'meaning', type: '词源', prompt: '记 diligence 时，哪句更稳妥？', options: ['先锁住「勤勉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勤勉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勤勉'] },
  });

  D('diligent', {
    etymology: {
      origin: '现代英语常用词「diligent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'diligent', gloss: '勤奋的' },
      suffix: null,
      history: [
        { label: 'diligent', text: '现代英语常用词「diligent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：勤奋的。' },
      ],
      formationLogic: '核心义：勤奋的。',
      mnemonic: '看到 diligent，先说出「勤奋的」。',
      note: '核心义：勤奋的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was diligent.', chinese: '即使是初读者也能看出，这个结果是勤奋的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diligent.s1', en: 'They wanted a diligent answer, not a long speech.', zh: '他们要一个勤奋的的答复，不要长篇发言。', structure: 'diligent / 表示 / 勤奋的', grammar: 'adjective，围绕「勤奋的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are diligent.', right: 'The news is diligent.', reason: 'news 作主语时动词用单数。', rule: '先确定 diligent 是adjective，再套「勤奋的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diligent.q1', senseId: 'diligent.s1', errorType: 'meaning', type: '词义选择', prompt: '「diligent」在本条的核心意思是：', options: ['勤奋的', '完全相反的意思', '一种古代钱币'], answer: '勤奋的', explain: 'diligent：勤奋的。' },
      { id: 'diligent.q2', senseId: 'diligent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diligent?', options: ['勤奋的', 'a kind of ancient coin', 'the past tense of be'], answer: '勤奋的', explain: '对的是「勤奋的」。' },
      { id: 'diligent.q3', senseId: 'diligent.s1', errorType: 'grammar', type: '词义选择', prompt: 'diligent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'diligent.q4', senseId: 'diligent.s1', errorType: 'meaning', type: '词源', prompt: '记 diligent 时，哪句更稳妥？', options: ['先锁住「勤奋的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勤奋的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勤奋的'] },
  });

  D('diligently', {
    etymology: {
      origin: '英语派生：diligent + -ly，词性转到「勤勉地」。',
      prefix: null,
      root: { text: 'diligent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'diligently', text: '英语派生：diligent + -ly，词性转到「勤勉地」。' },
        { label: '现在', text: '核心用法是：勤勉地。' },
      ],
      formationLogic: '先认词干 diligent，再看词尾。',
      mnemonic: '看到 diligently，先说出「勤勉地」。',
      note: '先认词干 diligent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule diligently, and the class followed.', chinese: '她把规则讲清楚了（勤勉地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'diligently.s1', en: 'He nodded diligently and returned to the notes.', zh: '他勤勉地地点了点头，又回去看笔记。', structure: 'diligently / 表示 / 勤勉地', grammar: 'adverb，围绕「勤勉地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very diligentlyly in the meeting.', right: 'She spoke diligently in the meeting.', reason: 'diligently 已经是副词，不要再加 -ly。', rule: '先确定 diligently 是adverb，再套「勤勉地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'diligently.q1', senseId: 'diligently.s1', errorType: 'meaning', type: '词义选择', prompt: '「diligently」在本条的核心意思是：', options: ['勤勉地', '完全相反的意思', '一种古代钱币'], answer: '勤勉地', explain: 'diligently：勤勉地。' },
      { id: 'diligently.q2', senseId: 'diligently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches diligently?', options: ['勤勉地', 'a kind of ancient coin', 'the past tense of be'], answer: '勤勉地', explain: '对的是「勤勉地」。' },
      { id: 'diligently.q3', senseId: 'diligently.s1', errorType: 'grammar', type: '词义选择', prompt: 'diligently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'diligently.q4', senseId: 'diligently.s1', errorType: 'meaning', type: '词源', prompt: '记 diligently 时，哪句更稳妥？', options: ['先锁住「勤勉地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勤勉地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勤勉地'] },
  });

  D('dilute', {
    etymology: {
      origin: '现代英语常用词「dilute」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dilute', gloss: '稀释' },
      suffix: null,
      history: [
        { label: 'dilute', text: '现代英语常用词「dilute」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：稀释。' },
      ],
      formationLogic: '核心义：稀释。',
      mnemonic: '看到 dilute，先说出「稀释」。',
      note: '核心义：稀释。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to dilute before the office closed.', chinese: '他们同意在办公室关门前做这件事：稀释。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dilute.s1', en: 'The deadline forced the team to dilute that afternoon.', zh: '截止日期逼着小组在那天下午稀释。', structure: 'dilute / 表示 / 稀释', grammar: 'verb，围绕「稀释」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She diluteed it yesterday without checking the real past form.', right: 'Check the past form of "dilute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 dilute 是verb，再套「稀释」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dilute.q1', senseId: 'dilute.s1', errorType: 'meaning', type: '词义选择', prompt: '「dilute」在本条的核心意思是：', options: ['稀释', '完全相反的意思', '一种古代钱币'], answer: '稀释', explain: 'dilute：稀释。' },
      { id: 'dilute.q2', senseId: 'dilute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dilute?', options: ['稀释', 'a kind of ancient coin', 'the past tense of be'], answer: '稀释', explain: '对的是「稀释」。' },
      { id: 'dilute.q3', senseId: 'dilute.s1', errorType: 'grammar', type: '词义选择', prompt: 'dilute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'dilute.q4', senseId: 'dilute.s1', errorType: 'meaning', type: '词源', prompt: '记 dilute 时，哪句更稳妥？', options: ['先锁住「稀释」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「稀释」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['稀释'] },
  });

  D('dim', {
    etymology: {
      origin: '现代英语常用词「dim」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dim', gloss: '昏暗的' },
      suffix: null,
      history: [
        { label: 'dim', text: '现代英语常用词「dim」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：昏暗的。' },
      ],
      formationLogic: '核心义：昏暗的。',
      mnemonic: '看到 dim，先说出「昏暗的」。',
      note: '核心义：昏暗的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was dim.', chinese: '即使是初读者也能看出，这个结果是昏暗的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dim.s1', en: 'They wanted a dim answer, not a long speech.', zh: '他们要一个昏暗的的答复，不要长篇发言。', structure: 'dim / 表示 / 昏暗的', grammar: 'adjective，围绕「昏暗的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are dim.', right: 'The news is dim.', reason: 'news 作主语时动词用单数。', rule: '先确定 dim 是adjective，再套「昏暗的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dim.q1', senseId: 'dim.s1', errorType: 'meaning', type: '词义选择', prompt: '「dim」在本条的核心意思是：', options: ['昏暗的', '完全相反的意思', '一种古代钱币'], answer: '昏暗的', explain: 'dim：昏暗的。' },
      { id: 'dim.q2', senseId: 'dim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dim?', options: ['昏暗的', 'a kind of ancient coin', 'the past tense of be'], answer: '昏暗的', explain: '对的是「昏暗的」。' },
      { id: 'dim.q3', senseId: 'dim.s1', errorType: 'grammar', type: '词义选择', prompt: 'dim 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'dim.q4', senseId: 'dim.s1', errorType: 'meaning', type: '词源', prompt: '记 dim 时，哪句更稳妥？', options: ['先锁住「昏暗的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「昏暗的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['昏暗的'] },
  });

  D('dime', {
    etymology: {
      origin: '现代英语常用词「dime」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'dime', gloss: '一角硬币' },
      suffix: null,
      history: [
        { label: 'dime', text: '现代英语常用词「dime」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一角硬币。' },
      ],
      formationLogic: '核心义：一角硬币。',
      mnemonic: '看到 dime，先说出「一角硬币」。',
      note: '核心义：一角硬币。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dime.', chinese: '这一章反复回到同一个点：一角硬币。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dime.s1', en: 'Without that dime, the next paragraph is hard to follow.', zh: '没有这个一角硬币，下一段会很难读。', structure: 'dime / 表示 / 一角硬币', grammar: 'noun，围绕「一角硬币」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dime.', right: 'He gave me some advice about the dime.', reason: 'advice 不可数。名词 dime 的单复数按词典词形记。', rule: '先确定 dime 是noun，再套「一角硬币」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dime.q1', senseId: 'dime.s1', errorType: 'meaning', type: '词义选择', prompt: '「dime」在本条的核心意思是：', options: ['一角硬币', '完全相反的意思', '一种古代钱币'], answer: '一角硬币', explain: 'dime：一角硬币。' },
      { id: 'dime.q2', senseId: 'dime.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dime?', options: ['一角硬币', 'a kind of ancient coin', 'the past tense of be'], answer: '一角硬币', explain: '对的是「一角硬币」。' },
      { id: 'dime.q3', senseId: 'dime.s1', errorType: 'grammar', type: '词义选择', prompt: 'dime 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dime.q4', senseId: 'dime.s1', errorType: 'meaning', type: '词源', prompt: '记 dime 时，哪句更稳妥？', options: ['先锁住「一角硬币」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一角硬币」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一角硬币'] },
  });

  D('dimension', {
    etymology: {
      origin: '拉丁语 dimensio「量出来」。',
      prefix: null,
      root: { text: 'dimension', gloss: '方面' },
      suffix: null,
      history: [
        { label: 'dimension', text: '拉丁语 dimensio「量出来」。' },
        { label: '现在', text: '核心用法是：方面。' },
      ],
      formationLogic: '考试认现在的用法：方面。',
      mnemonic: '看到 dimension，先说出「方面」。',
      note: '考试认现在的用法：方面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one dimension.', chinese: '这一章反复回到同一个点：方面。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'dimension.s1', en: 'Without that dimension, the next paragraph is hard to follow.', zh: '没有这个方面，下一段会很难读。', structure: 'dimension / 表示 / 方面', grammar: 'noun，围绕「方面」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the dimension.', right: 'He gave me some advice about the dimension.', reason: 'advice 不可数。名词 dimension 的单复数按词典词形记。', rule: '先确定 dimension 是noun，再套「方面」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'dimension.q1', senseId: 'dimension.s1', errorType: 'meaning', type: '词义选择', prompt: '「dimension」在本条的核心意思是：', options: ['方面', '完全相反的意思', '一种古代钱币'], answer: '方面', explain: 'dimension：方面。' },
      { id: 'dimension.q2', senseId: 'dimension.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches dimension?', options: ['方面', 'a kind of ancient coin', 'the past tense of be'], answer: '方面', explain: '对的是「方面」。' },
      { id: 'dimension.q3', senseId: 'dimension.s1', errorType: 'grammar', type: '词义选择', prompt: 'dimension 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'dimension.q4', senseId: 'dimension.s1', errorType: 'meaning', type: '词源', prompt: '记 dimension 时，哪句更稳妥？', options: ['先锁住「方面」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「方面」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['方面'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
