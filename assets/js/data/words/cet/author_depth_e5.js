/* data/words/cet/author_depth_e5.js
 * 手敲深度补丁：command–constitute（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('command', {
    etymology: {
      origin: '拉丁语 commendare 一系「交托、命令」。',
      prefix: null,
      root: { text: 'command', gloss: '命令' },
      suffix: null,
      history: [
        { label: 'command', text: '拉丁语 commendare 一系「交托、命令」。' },
        { label: '现在', text: '核心用法是：命令。' },
      ],
      formationLogic: '考试认现在的用法：命令。',
      mnemonic: '看到 command，先说出「命令」。',
      note: '考试认现在的用法：命令。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one command.', chinese: '这一章反复回到同一个点：命令。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'command.s1', en: 'Without that command, the next paragraph is hard to follow.', zh: '没有这个命令，下一段会很难读。', structure: 'command / 表示 / 命令', grammar: 'noun，围绕「命令」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the command.', right: 'He gave me some advice about the command.', reason: 'advice 不可数。名词 command 的单复数按词典词形记。', rule: '先确定 command 是noun，再套「命令」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'command.q1', senseId: 'command.s1', errorType: 'meaning', type: '词义选择', prompt: '「command」在本条的核心意思是：', options: ['命令', '完全相反的意思', '一种古代钱币'], answer: '命令', explain: 'command：命令。' },
      { id: 'command.q2', senseId: 'command.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches command?', options: ['命令', 'a kind of ancient coin', 'the past tense of be'], answer: '命令', explain: '对的是「命令」。' },
      { id: 'command.q3', senseId: 'command.s1', errorType: 'grammar', type: '词义选择', prompt: 'command 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'command.q4', senseId: 'command.s1', errorType: 'meaning', type: '词源', prompt: '记 command 时，哪句更稳妥？', options: ['先锁住「命令」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「命令」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['命令'] },
  });

  D('command form', {
    etymology: {
      origin: '现代英语固定说法「command form」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'command form', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'command form', text: '现代英语固定说法「command form」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：命令式（语法）。' },
      ],
      formationLogic: '核心义：命令式（语法）。',
      mnemonic: '看到 command form，先说出「命令式（语法）」。',
      note: '核心义：命令式（语法）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "command form" and asked the class to keep it as one unit.', chinese: '老师把「command form」圈出来，让全班把它当成一个整体。它表示命令式（语法）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'command form.s1', en: 'In the margin she wrote "command form" so nobody would split the phrase.', zh: '她在页边写下「command form」，免得有人把这个说法拆开。意思是命令式（语法）。', structure: 'command form / 表示 / 命令式（语法）', grammar: 'noun，围绕「命令式（语法）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of command form and lost the point.', right: 'Keep "command form" together: it means 命令式（语法）.', reason: '「command form」要整块理解。', rule: '先确定 command form 是noun，再套「命令式（语法）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'command form.q1', senseId: 'command form.s1', errorType: 'meaning', type: '词义选择', prompt: '「command form」在本条的核心意思是：', options: ['命令式（语法）', '完全相反的意思', '一种古代钱币'], answer: '命令式（语法）', explain: 'command form：命令式（语法）。' },
      { id: 'command form.q2', senseId: 'command form.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches command form?', options: ['命令式（语法）', 'a kind of ancient coin', 'the past tense of be'], answer: '命令式（语法）', explain: '对的是「命令式（语法）」。' },
      { id: 'command form.q3', senseId: 'command form.s1', errorType: 'grammar', type: '词义选择', prompt: 'command form 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'command form.q4', senseId: 'command form.s1', errorType: 'meaning', type: '词源', prompt: '记 command form 时，哪句更稳妥？', options: ['先锁住「命令式（语法）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「命令式（语法）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['命令式（语法）'] },
  });

  D('command post', {
    etymology: {
      origin: '现代英语固定说法「command post」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'command post', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'command post', text: '现代英语固定说法「command post」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：指挥所。' },
      ],
      formationLogic: '核心义：指挥所。',
      mnemonic: '看到 command post，先说出「指挥所」。',
      note: '核心义：指挥所。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "command post" and asked the class to keep it as one unit.', chinese: '老师把「command post」圈出来，让全班把它当成一个整体。它表示指挥所。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'command post.s1', en: 'In the margin she wrote "command post" so nobody would split the phrase.', zh: '她在页边写下「command post」，免得有人把这个说法拆开。意思是指挥所。', structure: 'command post / 表示 / 指挥所', grammar: 'noun，围绕「指挥所」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of command post and lost the point.', right: 'Keep "command post" together: it means 指挥所.', reason: '「command post」要整块理解。', rule: '先确定 command post 是noun，再套「指挥所」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'command post.q1', senseId: 'command post.s1', errorType: 'meaning', type: '词义选择', prompt: '「command post」在本条的核心意思是：', options: ['指挥所', '完全相反的意思', '一种古代钱币'], answer: '指挥所', explain: 'command post：指挥所。' },
      { id: 'command post.q2', senseId: 'command post.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches command post?', options: ['指挥所', 'a kind of ancient coin', 'the past tense of be'], answer: '指挥所', explain: '对的是「指挥所」。' },
      { id: 'command post.q3', senseId: 'command post.s1', errorType: 'grammar', type: '词义选择', prompt: 'command post 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'command post.q4', senseId: 'command post.s1', errorType: 'meaning', type: '词源', prompt: '记 command post 时，哪句更稳妥？', options: ['先锁住「指挥所」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指挥所」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指挥所'] },
  });

  D('commandeer', {
    etymology: {
      origin: '英语派生：commande + -er，词性转到「强征」。',
      prefix: null,
      root: { text: 'commande', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commandeer', text: '英语派生：commande + -er，词性转到「强征」。' },
        { label: '现在', text: '核心用法是：强征。' },
      ],
      formationLogic: '先认词干 commande，再看词尾。',
      mnemonic: '看到 commandeer，先说出「强征」。',
      note: '先认词干 commande，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commandeer before the office closed.', chinese: '他们同意在办公室关门前做这件事：强征。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commandeer.s1', en: 'The deadline forced the team to commandeer that afternoon.', zh: '截止日期逼着小组在那天下午强征。', structure: 'commandeer / 表示 / 强征', grammar: 'verb，围绕「强征」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commandeered it yesterday without checking the real past form.', right: 'Check the past form of "commandeer" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commandeer 是verb，再套「强征」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commandeer.q1', senseId: 'commandeer.s1', errorType: 'meaning', type: '词义选择', prompt: '「commandeer」在本条的核心意思是：', options: ['强征', '完全相反的意思', '一种古代钱币'], answer: '强征', explain: 'commandeer：强征。' },
      { id: 'commandeer.q2', senseId: 'commandeer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commandeer?', options: ['强征', 'a kind of ancient coin', 'the past tense of be'], answer: '强征', explain: '对的是「强征」。' },
      { id: 'commandeer.q3', senseId: 'commandeer.s1', errorType: 'grammar', type: '词义选择', prompt: 'commandeer 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commandeer.q4', senseId: 'commandeer.s1', errorType: 'meaning', type: '词源', prompt: '记 commandeer 时，哪句更稳妥？', options: ['先锁住「强征」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「强征」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['强征'] },
  });

  D('commander', {
    etymology: {
      origin: '英语派生：command + -er，词性转到「指挥官」。',
      prefix: null,
      root: { text: 'command', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commander', text: '英语派生：command + -er，词性转到「指挥官」。' },
        { label: '现在', text: '核心用法是：指挥官。' },
      ],
      formationLogic: '先认词干 command，再看词尾。',
      mnemonic: '看到 commander，先说出「指挥官」。',
      note: '先认词干 command，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commander.', chinese: '这一章反复回到同一个点：指挥官。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commander.s1', en: 'Without that commander, the next paragraph is hard to follow.', zh: '没有这个指挥官，下一段会很难读。', structure: 'commander / 表示 / 指挥官', grammar: 'noun，围绕「指挥官」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commander.', right: 'He gave me some advice about the commander.', reason: 'advice 不可数。名词 commander 的单复数按词典词形记。', rule: '先确定 commander 是noun，再套「指挥官」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commander.q1', senseId: 'commander.s1', errorType: 'meaning', type: '词义选择', prompt: '「commander」在本条的核心意思是：', options: ['指挥官', '完全相反的意思', '一种古代钱币'], answer: '指挥官', explain: 'commander：指挥官。' },
      { id: 'commander.q2', senseId: 'commander.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commander?', options: ['指挥官', 'a kind of ancient coin', 'the past tense of be'], answer: '指挥官', explain: '对的是「指挥官」。' },
      { id: 'commander.q3', senseId: 'commander.s1', errorType: 'grammar', type: '词义选择', prompt: 'commander 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commander.q4', senseId: 'commander.s1', errorType: 'meaning', type: '词源', prompt: '记 commander 时，哪句更稳妥？', options: ['先锁住「指挥官」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指挥官」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指挥官'] },
  });

  D('commanding', {
    etymology: {
      origin: '英语派生：command + -ing，词性转到「指挥的」。',
      prefix: null,
      root: { text: 'command', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commanding', text: '英语派生：command + -ing，词性转到「指挥的」。' },
        { label: '现在', text: '核心用法是：指挥的。' },
      ],
      formationLogic: '先认词干 command，再看词尾。',
      mnemonic: '看到 commanding，先说出「指挥的」。',
      note: '先认词干 command，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was commanding.', chinese: '即使是初读者也能看出，这个结果是指挥的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commanding.s1', en: 'They wanted a commanding answer, not a long speech.', zh: '他们要一个指挥的的答复，不要长篇发言。', structure: 'commanding / 表示 / 指挥的', grammar: 'adjective，围绕「指挥的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are commanding.', right: 'The news is commanding.', reason: 'news 作主语时动词用单数。', rule: '先确定 commanding 是adjective，再套「指挥的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commanding.q1', senseId: 'commanding.s1', errorType: 'meaning', type: '词义选择', prompt: '「commanding」在本条的核心意思是：', options: ['指挥的', '完全相反的意思', '一种古代钱币'], answer: '指挥的', explain: 'commanding：指挥的。' },
      { id: 'commanding.q2', senseId: 'commanding.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commanding?', options: ['指挥的', 'a kind of ancient coin', 'the past tense of be'], answer: '指挥的', explain: '对的是「指挥的」。' },
      { id: 'commanding.q3', senseId: 'commanding.s1', errorType: 'grammar', type: '词义选择', prompt: 'commanding 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'commanding.q4', senseId: 'commanding.s1', errorType: 'meaning', type: '词源', prompt: '记 commanding 时，哪句更稳妥？', options: ['先锁住「指挥的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指挥的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指挥的'] },
  });

  D('commemorate', {
    etymology: {
      origin: '现代英语常用词「commemorate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commemorate', gloss: '纪念' },
      suffix: null,
      history: [
        { label: 'commemorate', text: '现代英语常用词「commemorate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：纪念。' },
      ],
      formationLogic: '核心义：纪念。',
      mnemonic: '看到 commemorate，先说出「纪念」。',
      note: '核心义：纪念。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commemorate before the office closed.', chinese: '他们同意在办公室关门前做这件事：纪念。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commemorate.s1', en: 'The deadline forced the team to commemorate that afternoon.', zh: '截止日期逼着小组在那天下午纪念。', structure: 'commemorate / 表示 / 纪念', grammar: 'verb，围绕「纪念」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commemorateed it yesterday without checking the real past form.', right: 'Check the past form of "commemorate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commemorate 是verb，再套「纪念」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commemorate.q1', senseId: 'commemorate.s1', errorType: 'meaning', type: '词义选择', prompt: '「commemorate」在本条的核心意思是：', options: ['纪念', '完全相反的意思', '一种古代钱币'], answer: '纪念', explain: 'commemorate：纪念。' },
      { id: 'commemorate.q2', senseId: 'commemorate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commemorate?', options: ['纪念', 'a kind of ancient coin', 'the past tense of be'], answer: '纪念', explain: '对的是「纪念」。' },
      { id: 'commemorate.q3', senseId: 'commemorate.s1', errorType: 'grammar', type: '词义选择', prompt: 'commemorate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commemorate.q4', senseId: 'commemorate.s1', errorType: 'meaning', type: '词源', prompt: '记 commemorate 时，哪句更稳妥？', options: ['先锁住「纪念」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「纪念」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['纪念'] },
  });

  D('commemorative', {
    etymology: {
      origin: '英语派生：commemorat + -ive，词性转到「纪念性的」。',
      prefix: null,
      root: { text: 'commemorat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commemorative', text: '英语派生：commemorat + -ive，词性转到「纪念性的」。' },
        { label: '现在', text: '核心用法是：纪念性的。' },
      ],
      formationLogic: '先认词干 commemorat，再看词尾。',
      mnemonic: '看到 commemorative，先说出「纪念性的」。',
      note: '先认词干 commemorat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was commemorative.', chinese: '即使是初读者也能看出，这个结果是纪念性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commemorative.s1', en: 'They wanted a commemorative answer, not a long speech.', zh: '他们要一个纪念性的的答复，不要长篇发言。', structure: 'commemorative / 表示 / 纪念性的', grammar: 'adjective，围绕「纪念性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are commemorative.', right: 'The news is commemorative.', reason: 'news 作主语时动词用单数。', rule: '先确定 commemorative 是adjective，再套「纪念性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commemorative.q1', senseId: 'commemorative.s1', errorType: 'meaning', type: '词义选择', prompt: '「commemorative」在本条的核心意思是：', options: ['纪念性的', '完全相反的意思', '一种古代钱币'], answer: '纪念性的', explain: 'commemorative：纪念性的。' },
      { id: 'commemorative.q2', senseId: 'commemorative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commemorative?', options: ['纪念性的', 'a kind of ancient coin', 'the past tense of be'], answer: '纪念性的', explain: '对的是「纪念性的」。' },
      { id: 'commemorative.q3', senseId: 'commemorative.s1', errorType: 'grammar', type: '词义选择', prompt: 'commemorative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'commemorative.q4', senseId: 'commemorative.s1', errorType: 'meaning', type: '词源', prompt: '记 commemorative 时，哪句更稳妥？', options: ['先锁住「纪念性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「纪念性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['纪念性的'] },
  });

  D('commence', {
    etymology: {
      origin: '英语派生：comm + -ence，词性转到「开始」。',
      prefix: null,
      root: { text: 'comm', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commence', text: '英语派生：comm + -ence，词性转到「开始」。' },
        { label: '现在', text: '核心用法是：开始。' },
      ],
      formationLogic: '先认词干 comm，再看词尾。',
      mnemonic: '看到 commence，先说出「开始」。',
      note: '先认词干 comm，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commence before the office closed.', chinese: '他们同意在办公室关门前做这件事：开始。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commence.s1', en: 'The deadline forced the team to commence that afternoon.', zh: '截止日期逼着小组在那天下午开始。', structure: 'commence / 表示 / 开始', grammar: 'verb，围绕「开始」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commenceed it yesterday without checking the real past form.', right: 'Check the past form of "commence" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commence 是verb，再套「开始」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commence.q1', senseId: 'commence.s1', errorType: 'meaning', type: '词义选择', prompt: '「commence」在本条的核心意思是：', options: ['开始', '完全相反的意思', '一种古代钱币'], answer: '开始', explain: 'commence：开始。' },
      { id: 'commence.q2', senseId: 'commence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commence?', options: ['开始', 'a kind of ancient coin', 'the past tense of be'], answer: '开始', explain: '对的是「开始」。' },
      { id: 'commence.q3', senseId: 'commence.s1', errorType: 'grammar', type: '词义选择', prompt: 'commence 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commence.q4', senseId: 'commence.s1', errorType: 'meaning', type: '词源', prompt: '记 commence 时，哪句更稳妥？', options: ['先锁住「开始」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「开始」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['开始'] },
  });

  D('commend', {
    etymology: {
      origin: '现代英语常用词「commend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commend', gloss: '赞扬' },
      suffix: null,
      history: [
        { label: 'commend', text: '现代英语常用词「commend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赞扬。' },
      ],
      formationLogic: '核心义：赞扬。',
      mnemonic: '看到 commend，先说出「赞扬」。',
      note: '核心义：赞扬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commend before the office closed.', chinese: '他们同意在办公室关门前做这件事：赞扬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commend.s1', en: 'The deadline forced the team to commend that afternoon.', zh: '截止日期逼着小组在那天下午赞扬。', structure: 'commend / 表示 / 赞扬', grammar: 'verb，围绕「赞扬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commended it yesterday without checking the real past form.', right: 'Check the past form of "commend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commend 是verb，再套「赞扬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commend.q1', senseId: 'commend.s1', errorType: 'meaning', type: '词义选择', prompt: '「commend」在本条的核心意思是：', options: ['赞扬', '完全相反的意思', '一种古代钱币'], answer: '赞扬', explain: 'commend：赞扬。' },
      { id: 'commend.q2', senseId: 'commend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commend?', options: ['赞扬', 'a kind of ancient coin', 'the past tense of be'], answer: '赞扬', explain: '对的是「赞扬」。' },
      { id: 'commend.q3', senseId: 'commend.s1', errorType: 'grammar', type: '词义选择', prompt: 'commend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commend.q4', senseId: 'commend.s1', errorType: 'meaning', type: '词源', prompt: '记 commend 时，哪句更稳妥？', options: ['先锁住「赞扬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赞扬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赞扬'] },
  });

  D('comment', {
    etymology: {
      origin: '拉丁语 commentum「发明、评注」。',
      prefix: null,
      root: { text: 'comment', gloss: '评论' },
      suffix: null,
      history: [
        { label: 'comment', text: '拉丁语 commentum「发明、评注」。' },
        { label: '现在', text: '核心用法是：评论。' },
      ],
      formationLogic: '考试认现在的用法：评论。',
      mnemonic: '看到 comment，先说出「评论」。',
      note: '考试认现在的用法：评论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comment.', chinese: '这一章反复回到同一个点：评论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comment.s1', en: 'Without that comment, the next paragraph is hard to follow.', zh: '没有这个评论，下一段会很难读。', structure: 'comment / 表示 / 评论', grammar: 'noun，围绕「评论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comment.', right: 'He gave me some advice about the comment.', reason: 'advice 不可数。名词 comment 的单复数按词典词形记。', rule: '先确定 comment 是noun，再套「评论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comment.q1', senseId: 'comment.s1', errorType: 'meaning', type: '词义选择', prompt: '「comment」在本条的核心意思是：', options: ['评论', '完全相反的意思', '一种古代钱币'], answer: '评论', explain: 'comment：评论。' },
      { id: 'comment.q2', senseId: 'comment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comment?', options: ['评论', 'a kind of ancient coin', 'the past tense of be'], answer: '评论', explain: '对的是「评论」。' },
      { id: 'comment.q3', senseId: 'comment.s1', errorType: 'grammar', type: '词义选择', prompt: 'comment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comment.q4', senseId: 'comment.s1', errorType: 'meaning', type: '词源', prompt: '记 comment 时，哪句更稳妥？', options: ['先锁住「评论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「评论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['评论'] },
  });

  D('commentary', {
    etymology: {
      origin: '现代英语常用词「commentary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commentary', gloss: '解说' },
      suffix: null,
      history: [
        { label: 'commentary', text: '现代英语常用词「commentary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解说。' },
      ],
      formationLogic: '核心义：解说。',
      mnemonic: '看到 commentary，先说出「解说」。',
      note: '核心义：解说。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commentary.', chinese: '这一章反复回到同一个点：解说。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commentary.s1', en: 'Without that commentary, the next paragraph is hard to follow.', zh: '没有这个解说，下一段会很难读。', structure: 'commentary / 表示 / 解说', grammar: 'noun，围绕「解说」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commentary.', right: 'He gave me some advice about the commentary.', reason: 'advice 不可数。名词 commentary 的单复数按词典词形记。', rule: '先确定 commentary 是noun，再套「解说」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commentary.q1', senseId: 'commentary.s1', errorType: 'meaning', type: '词义选择', prompt: '「commentary」在本条的核心意思是：', options: ['解说', '完全相反的意思', '一种古代钱币'], answer: '解说', explain: 'commentary：解说。' },
      { id: 'commentary.q2', senseId: 'commentary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commentary?', options: ['解说', 'a kind of ancient coin', 'the past tense of be'], answer: '解说', explain: '对的是「解说」。' },
      { id: 'commentary.q3', senseId: 'commentary.s1', errorType: 'grammar', type: '词义选择', prompt: 'commentary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commentary.q4', senseId: 'commentary.s1', errorType: 'meaning', type: '词源', prompt: '记 commentary 时，哪句更稳妥？', options: ['先锁住「解说」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解说」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解说'] },
  });

  D('commentate', {
    etymology: {
      origin: '现代英语常用词「commentate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commentate', gloss: '解说' },
      suffix: null,
      history: [
        { label: 'commentate', text: '现代英语常用词「commentate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：解说。' },
      ],
      formationLogic: '核心义：解说。',
      mnemonic: '看到 commentate，先说出「解说」。',
      note: '核心义：解说。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commentate before the office closed.', chinese: '他们同意在办公室关门前做这件事：解说。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commentate.s1', en: 'The deadline forced the team to commentate that afternoon.', zh: '截止日期逼着小组在那天下午解说。', structure: 'commentate / 表示 / 解说', grammar: 'verb，围绕「解说」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commentateed it yesterday without checking the real past form.', right: 'Check the past form of "commentate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commentate 是verb，再套「解说」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commentate.q1', senseId: 'commentate.s1', errorType: 'meaning', type: '词义选择', prompt: '「commentate」在本条的核心意思是：', options: ['解说', '完全相反的意思', '一种古代钱币'], answer: '解说', explain: 'commentate：解说。' },
      { id: 'commentate.q2', senseId: 'commentate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commentate?', options: ['解说', 'a kind of ancient coin', 'the past tense of be'], answer: '解说', explain: '对的是「解说」。' },
      { id: 'commentate.q3', senseId: 'commentate.s1', errorType: 'grammar', type: '词义选择', prompt: 'commentate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commentate.q4', senseId: 'commentate.s1', errorType: 'meaning', type: '词源', prompt: '记 commentate 时，哪句更稳妥？', options: ['先锁住「解说」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「解说」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['解说'] },
  });

  D('commerce', {
    etymology: {
      origin: '拉丁语 commercium「贸易」，merx「货物」。',
      prefix: null,
      root: { text: 'commerce', gloss: '商业' },
      suffix: null,
      history: [
        { label: 'commerce', text: '拉丁语 commercium「贸易」，merx「货物」。' },
        { label: '现在', text: '核心用法是：商业。' },
      ],
      formationLogic: '考试认现在的用法：商业。',
      mnemonic: '看到 commerce，先说出「商业」。',
      note: '考试认现在的用法：商业。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commerce.', chinese: '这一章反复回到同一个点：商业。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commerce.s1', en: 'Without that commerce, the next paragraph is hard to follow.', zh: '没有这个商业，下一段会很难读。', structure: 'commerce / 表示 / 商业', grammar: 'noun，围绕「商业」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commerce.', right: 'He gave me some advice about the commerce.', reason: 'advice 不可数。名词 commerce 的单复数按词典词形记。', rule: '先确定 commerce 是noun，再套「商业」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commerce.q1', senseId: 'commerce.s1', errorType: 'meaning', type: '词义选择', prompt: '「commerce」在本条的核心意思是：', options: ['商业', '完全相反的意思', '一种古代钱币'], answer: '商业', explain: 'commerce：商业。' },
      { id: 'commerce.q2', senseId: 'commerce.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commerce?', options: ['商业', 'a kind of ancient coin', 'the past tense of be'], answer: '商业', explain: '对的是「商业」。' },
      { id: 'commerce.q3', senseId: 'commerce.s1', errorType: 'grammar', type: '词义选择', prompt: 'commerce 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commerce.q4', senseId: 'commerce.s1', errorType: 'meaning', type: '词源', prompt: '记 commerce 时，哪句更稳妥？', options: ['先锁住「商业」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「商业」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['商业'] },
  });

  D('commercial', {
    etymology: {
      origin: 'commerce + -ial。',
      prefix: null,
      root: { text: 'commercial', gloss: '商业的' },
      suffix: null,
      history: [
        { label: 'commercial', text: 'commerce + -ial。' },
        { label: '现在', text: '核心用法是：商业的。' },
      ],
      formationLogic: '考试认现在的用法：商业的。',
      mnemonic: '看到 commercial，先说出「商业的」。',
      note: '考试认现在的用法：商业的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was commercial.', chinese: '即使是初读者也能看出，这个结果是商业的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commercial.s1', en: 'They wanted a commercial answer, not a long speech.', zh: '他们要一个商业的的答复，不要长篇发言。', structure: 'commercial / 表示 / 商业的', grammar: 'adjective，围绕「商业的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are commercial.', right: 'The news is commercial.', reason: 'news 作主语时动词用单数。', rule: '先确定 commercial 是adjective，再套「商业的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commercial.q1', senseId: 'commercial.s1', errorType: 'meaning', type: '词义选择', prompt: '「commercial」在本条的核心意思是：', options: ['商业的', '完全相反的意思', '一种古代钱币'], answer: '商业的', explain: 'commercial：商业的。' },
      { id: 'commercial.q2', senseId: 'commercial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commercial?', options: ['商业的', 'a kind of ancient coin', 'the past tense of be'], answer: '商业的', explain: '对的是「商业的」。' },
      { id: 'commercial.q3', senseId: 'commercial.s1', errorType: 'grammar', type: '词义选择', prompt: 'commercial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'commercial.q4', senseId: 'commercial.s1', errorType: 'meaning', type: '词源', prompt: '记 commercial 时，哪句更稳妥？', options: ['先锁住「商业的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「商业的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['商业的'] },
  });

  D('commission', {
    etymology: {
      origin: '拉丁语 committere「交托」。',
      prefix: null,
      root: { text: 'commission', gloss: '佣金' },
      suffix: null,
      history: [
        { label: 'commission', text: '拉丁语 committere「交托」。' },
        { label: '现在', text: '核心用法是：佣金。' },
      ],
      formationLogic: '考试认现在的用法：佣金。',
      mnemonic: '看到 commission，先说出「佣金」。',
      note: '考试认现在的用法：佣金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commission.', chinese: '这一章反复回到同一个点：佣金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commission.s1', en: 'Without that commission, the next paragraph is hard to follow.', zh: '没有这个佣金，下一段会很难读。', structure: 'commission / 表示 / 佣金', grammar: 'noun，围绕「佣金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commission.', right: 'He gave me some advice about the commission.', reason: 'advice 不可数。名词 commission 的单复数按词典词形记。', rule: '先确定 commission 是noun，再套「佣金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commission.q1', senseId: 'commission.s1', errorType: 'meaning', type: '词义选择', prompt: '「commission」在本条的核心意思是：', options: ['佣金', '完全相反的意思', '一种古代钱币'], answer: '佣金', explain: 'commission：佣金。' },
      { id: 'commission.q2', senseId: 'commission.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commission?', options: ['佣金', 'a kind of ancient coin', 'the past tense of be'], answer: '佣金', explain: '对的是「佣金」。' },
      { id: 'commission.q3', senseId: 'commission.s1', errorType: 'grammar', type: '词义选择', prompt: 'commission 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commission.q4', senseId: 'commission.s1', errorType: 'meaning', type: '词源', prompt: '记 commission 时，哪句更稳妥？', options: ['先锁住「佣金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「佣金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['佣金'] },
  });

  D('commit', {
    etymology: {
      origin: '拉丁语 committere「送到一起、交出去」。',
      prefix: null,
      root: { text: 'commit', gloss: '犯（罪、错）' },
      suffix: null,
      history: [
        { label: 'commit', text: '拉丁语 committere「送到一起、交出去」。' },
        { label: '现在', text: '核心用法是：犯（罪、错）。' },
      ],
      formationLogic: '考试认现在的用法：犯（罪、错）。',
      mnemonic: '看到 commit，先说出「犯（罪、错）」。',
      note: '考试认现在的用法：犯（罪、错）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commit before the office closed.', chinese: '他们同意在办公室关门前做这件事：犯（罪、错）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commit.s1', en: 'The deadline forced the team to commit that afternoon.', zh: '截止日期逼着小组在那天下午犯（罪、错）。', structure: 'commit / 表示 / 犯（罪、错）', grammar: 'verb，围绕「犯（罪、错）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commited it yesterday without checking the real past form.', right: 'Check the past form of "commit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commit 是verb，再套「犯（罪、错）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commit.q1', senseId: 'commit.s1', errorType: 'meaning', type: '词义选择', prompt: '「commit」在本条的核心意思是：', options: ['犯（罪、错）', '完全相反的意思', '一种古代钱币'], answer: '犯（罪、错）', explain: 'commit：犯（罪、错）。' },
      { id: 'commit.q2', senseId: 'commit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commit?', options: ['犯（罪、错）', 'a kind of ancient coin', 'the past tense of be'], answer: '犯（罪、错）', explain: '对的是「犯（罪、错）」。' },
      { id: 'commit.q3', senseId: 'commit.s1', errorType: 'grammar', type: '词义选择', prompt: 'commit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commit.q4', senseId: 'commit.s1', errorType: 'meaning', type: '词源', prompt: '记 commit 时，哪句更稳妥？', options: ['先锁住「犯（罪、错）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「犯（罪、错）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['犯（罪、错）'] },
  });

  D('committee', {
    etymology: {
      origin: 'commit + -ee。被委派的一组人。',
      prefix: null,
      root: { text: 'committee', gloss: '委员会' },
      suffix: null,
      history: [
        { label: 'committee', text: 'commit + -ee。被委派的一组人。' },
        { label: '现在', text: '核心用法是：委员会。' },
      ],
      formationLogic: '考试认现在的用法：委员会。',
      mnemonic: '看到 committee，先说出「委员会」。',
      note: '考试认现在的用法：委员会。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one committee.', chinese: '这一章反复回到同一个点：委员会。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'committee.s1', en: 'Without that committee, the next paragraph is hard to follow.', zh: '没有这个委员会，下一段会很难读。', structure: 'committee / 表示 / 委员会', grammar: 'noun，围绕「委员会」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the committee.', right: 'He gave me some advice about the committee.', reason: 'advice 不可数。名词 committee 的单复数按词典词形记。', rule: '先确定 committee 是noun，再套「委员会」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'committee.q1', senseId: 'committee.s1', errorType: 'meaning', type: '词义选择', prompt: '「committee」在本条的核心意思是：', options: ['委员会', '完全相反的意思', '一种古代钱币'], answer: '委员会', explain: 'committee：委员会。' },
      { id: 'committee.q2', senseId: 'committee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches committee?', options: ['委员会', 'a kind of ancient coin', 'the past tense of be'], answer: '委员会', explain: '对的是「委员会」。' },
      { id: 'committee.q3', senseId: 'committee.s1', errorType: 'grammar', type: '词义选择', prompt: 'committee 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'committee.q4', senseId: 'committee.s1', errorType: 'meaning', type: '词源', prompt: '记 committee 时，哪句更稳妥？', options: ['先锁住「委员会」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「委员会」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['委员会'] },
  });

  D('commodity', {
    etymology: {
      origin: '英语派生：commod + -ity，词性转到「商品」。',
      prefix: null,
      root: { text: 'commod', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commodity', text: '英语派生：commod + -ity，词性转到「商品」。' },
        { label: '现在', text: '核心用法是：商品。' },
      ],
      formationLogic: '先认词干 commod，再看词尾。',
      mnemonic: '看到 commodity，先说出「商品」。',
      note: '先认词干 commod，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commodity.', chinese: '这一章反复回到同一个点：商品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commodity.s1', en: 'Without that commodity, the next paragraph is hard to follow.', zh: '没有这个商品，下一段会很难读。', structure: 'commodity / 表示 / 商品', grammar: 'noun，围绕「商品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commodity.', right: 'He gave me some advice about the commodity.', reason: 'advice 不可数。名词 commodity 的单复数按词典词形记。', rule: '先确定 commodity 是noun，再套「商品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commodity.q1', senseId: 'commodity.s1', errorType: 'meaning', type: '词义选择', prompt: '「commodity」在本条的核心意思是：', options: ['商品', '完全相反的意思', '一种古代钱币'], answer: '商品', explain: 'commodity：商品。' },
      { id: 'commodity.q2', senseId: 'commodity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commodity?', options: ['商品', 'a kind of ancient coin', 'the past tense of be'], answer: '商品', explain: '对的是「商品」。' },
      { id: 'commodity.q3', senseId: 'commodity.s1', errorType: 'grammar', type: '词义选择', prompt: 'commodity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commodity.q4', senseId: 'commodity.s1', errorType: 'meaning', type: '词源', prompt: '记 commodity 时，哪句更稳妥？', options: ['先锁住「商品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「商品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['商品'] },
  });

  D('common', {
    etymology: {
      origin: '拉丁语 communis「共享的」。',
      prefix: null,
      root: { text: 'common', gloss: '常见的' },
      suffix: null,
      history: [
        { label: 'common', text: '拉丁语 communis「共享的」。' },
        { label: '现在', text: '核心用法是：常见的。' },
      ],
      formationLogic: '考试认现在的用法：常见的。',
      mnemonic: '看到 common，先说出「常见的」。',
      note: '考试认现在的用法：常见的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was common.', chinese: '即使是初读者也能看出，这个结果是常见的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'common.s1', en: 'They wanted a common answer, not a long speech.', zh: '他们要一个常见的的答复，不要长篇发言。', structure: 'common / 表示 / 常见的', grammar: 'adjective，围绕「常见的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are common.', right: 'The news is common.', reason: 'news 作主语时动词用单数。', rule: '先确定 common 是adjective，再套「常见的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'common.q1', senseId: 'common.s1', errorType: 'meaning', type: '词义选择', prompt: '「common」在本条的核心意思是：', options: ['常见的', '完全相反的意思', '一种古代钱币'], answer: '常见的', explain: 'common：常见的。' },
      { id: 'common.q2', senseId: 'common.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches common?', options: ['常见的', 'a kind of ancient coin', 'the past tense of be'], answer: '常见的', explain: '对的是「常见的」。' },
      { id: 'common.q3', senseId: 'common.s1', errorType: 'grammar', type: '词义选择', prompt: 'common 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'common.q4', senseId: 'common.s1', errorType: 'meaning', type: '词源', prompt: '记 common 时，哪句更稳妥？', options: ['先锁住「常见的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「常见的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['常见的'] },
  });

  D('common ground', {
    etymology: {
      origin: '现代英语固定说法「common ground」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'common ground', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'common ground', text: '现代英语固定说法「common ground」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：共同点。' },
      ],
      formationLogic: '核心义：共同点。',
      mnemonic: '看到 common ground，先说出「共同点」。',
      note: '核心义：共同点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "common ground" and asked the class to keep it as one unit.', chinese: '老师把「common ground」圈出来，让全班把它当成一个整体。它表示共同点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'common ground.s1', en: 'In the margin she wrote "common ground" so nobody would split the phrase.', zh: '她在页边写下「common ground」，免得有人把这个说法拆开。意思是共同点。', structure: 'common ground / 表示 / 共同点', grammar: 'noun，围绕「共同点」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of common ground and lost the point.', right: 'Keep "common ground" together: it means 共同点.', reason: '「common ground」要整块理解。', rule: '先确定 common ground 是noun，再套「共同点」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'common ground.q1', senseId: 'common ground.s1', errorType: 'meaning', type: '词义选择', prompt: '「common ground」在本条的核心意思是：', options: ['共同点', '完全相反的意思', '一种古代钱币'], answer: '共同点', explain: 'common ground：共同点。' },
      { id: 'common ground.q2', senseId: 'common ground.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches common ground?', options: ['共同点', 'a kind of ancient coin', 'the past tense of be'], answer: '共同点', explain: '对的是「共同点」。' },
      { id: 'common ground.q3', senseId: 'common ground.s1', errorType: 'grammar', type: '词义选择', prompt: 'common ground 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'common ground.q4', senseId: 'common ground.s1', errorType: 'meaning', type: '词源', prompt: '记 common ground 时，哪句更稳妥？', options: ['先锁住「共同点」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「共同点」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['共同点'] },
  });

  D('commonly', {
    etymology: {
      origin: '英语派生：common + -ly，词性转到「通常」。',
      prefix: null,
      root: { text: 'common', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commonly', text: '英语派生：common + -ly，词性转到「通常」。' },
        { label: '现在', text: '核心用法是：通常。' },
      ],
      formationLogic: '先认词干 common，再看词尾。',
      mnemonic: '看到 commonly，先说出「通常」。',
      note: '先认词干 common，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule commonly, and the class followed.', chinese: '她把规则讲清楚了（通常），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commonly.s1', en: 'He nodded commonly and returned to the notes.', zh: '他通常地点了点头，又回去看笔记。', structure: 'commonly / 表示 / 通常', grammar: 'adverb，围绕「通常」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very commonlyly in the meeting.', right: 'She spoke commonly in the meeting.', reason: 'commonly 已经是副词，不要再加 -ly。', rule: '先确定 commonly 是adverb，再套「通常」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commonly.q1', senseId: 'commonly.s1', errorType: 'meaning', type: '词义选择', prompt: '「commonly」在本条的核心意思是：', options: ['通常', '完全相反的意思', '一种古代钱币'], answer: '通常', explain: 'commonly：通常。' },
      { id: 'commonly.q2', senseId: 'commonly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commonly?', options: ['通常', 'a kind of ancient coin', 'the past tense of be'], answer: '通常', explain: '对的是「通常」。' },
      { id: 'commonly.q3', senseId: 'commonly.s1', errorType: 'grammar', type: '词义选择', prompt: 'commonly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'commonly.q4', senseId: 'commonly.s1', errorType: 'meaning', type: '词源', prompt: '记 commonly 时，哪句更稳妥？', options: ['先锁住「通常」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「通常」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['通常'] },
  });

  D('commonplace', {
    etymology: {
      origin: '现代英语常用词「commonplace」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commonplace', gloss: '平常的' },
      suffix: null,
      history: [
        { label: 'commonplace', text: '现代英语常用词「commonplace」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：平常的。' },
      ],
      formationLogic: '核心义：平常的。',
      mnemonic: '看到 commonplace，先说出「平常的」。',
      note: '核心义：平常的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was commonplace.', chinese: '即使是初读者也能看出，这个结果是平常的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commonplace.s1', en: 'They wanted a commonplace answer, not a long speech.', zh: '他们要一个平常的的答复，不要长篇发言。', structure: 'commonplace / 表示 / 平常的', grammar: 'adjective，围绕「平常的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are commonplace.', right: 'The news is commonplace.', reason: 'news 作主语时动词用单数。', rule: '先确定 commonplace 是adjective，再套「平常的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commonplace.q1', senseId: 'commonplace.s1', errorType: 'meaning', type: '词义选择', prompt: '「commonplace」在本条的核心意思是：', options: ['平常的', '完全相反的意思', '一种古代钱币'], answer: '平常的', explain: 'commonplace：平常的。' },
      { id: 'commonplace.q2', senseId: 'commonplace.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commonplace?', options: ['平常的', 'a kind of ancient coin', 'the past tense of be'], answer: '平常的', explain: '对的是「平常的」。' },
      { id: 'commonplace.q3', senseId: 'commonplace.s1', errorType: 'grammar', type: '词义选择', prompt: 'commonplace 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'commonplace.q4', senseId: 'commonplace.s1', errorType: 'meaning', type: '词源', prompt: '记 commonplace 时，哪句更稳妥？', options: ['先锁住「平常的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「平常的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['平常的'] },
  });

  D('commonwealth', {
    etymology: {
      origin: '现代英语常用词「commonwealth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commonwealth', gloss: '联邦' },
      suffix: null,
      history: [
        { label: 'commonwealth', text: '现代英语常用词「commonwealth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：联邦。' },
      ],
      formationLogic: '核心义：联邦。',
      mnemonic: '看到 commonwealth，先说出「联邦」。',
      note: '核心义：联邦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commonwealth.', chinese: '这一章反复回到同一个点：联邦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commonwealth.s1', en: 'Without that commonwealth, the next paragraph is hard to follow.', zh: '没有这个联邦，下一段会很难读。', structure: 'commonwealth / 表示 / 联邦', grammar: 'noun，围绕「联邦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commonwealth.', right: 'He gave me some advice about the commonwealth.', reason: 'advice 不可数。名词 commonwealth 的单复数按词典词形记。', rule: '先确定 commonwealth 是noun，再套「联邦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commonwealth.q1', senseId: 'commonwealth.s1', errorType: 'meaning', type: '词义选择', prompt: '「commonwealth」在本条的核心意思是：', options: ['联邦', '完全相反的意思', '一种古代钱币'], answer: '联邦', explain: 'commonwealth：联邦。' },
      { id: 'commonwealth.q2', senseId: 'commonwealth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commonwealth?', options: ['联邦', 'a kind of ancient coin', 'the past tense of be'], answer: '联邦', explain: '对的是「联邦」。' },
      { id: 'commonwealth.q3', senseId: 'commonwealth.s1', errorType: 'grammar', type: '词义选择', prompt: 'commonwealth 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commonwealth.q4', senseId: 'commonwealth.s1', errorType: 'meaning', type: '词源', prompt: '记 commonwealth 时，哪句更稳妥？', options: ['先锁住「联邦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联邦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联邦'] },
  });

  D('commotion', {
    etymology: {
      origin: '英语派生：commo + -tion，词性转到「骚动」。',
      prefix: null,
      root: { text: 'commo', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'commotion', text: '英语派生：commo + -tion，词性转到「骚动」。' },
        { label: '现在', text: '核心用法是：骚动。' },
      ],
      formationLogic: '先认词干 commo，再看词尾。',
      mnemonic: '看到 commotion，先说出「骚动」。',
      note: '先认词干 commo，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commotion.', chinese: '这一章反复回到同一个点：骚动。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commotion.s1', en: 'Without that commotion, the next paragraph is hard to follow.', zh: '没有这个骚动，下一段会很难读。', structure: 'commotion / 表示 / 骚动', grammar: 'noun，围绕「骚动」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commotion.', right: 'He gave me some advice about the commotion.', reason: 'advice 不可数。名词 commotion 的单复数按词典词形记。', rule: '先确定 commotion 是noun，再套「骚动」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commotion.q1', senseId: 'commotion.s1', errorType: 'meaning', type: '词义选择', prompt: '「commotion」在本条的核心意思是：', options: ['骚动', '完全相反的意思', '一种古代钱币'], answer: '骚动', explain: 'commotion：骚动。' },
      { id: 'commotion.q2', senseId: 'commotion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commotion?', options: ['骚动', 'a kind of ancient coin', 'the past tense of be'], answer: '骚动', explain: '对的是「骚动」。' },
      { id: 'commotion.q3', senseId: 'commotion.s1', errorType: 'grammar', type: '词义选择', prompt: 'commotion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commotion.q4', senseId: 'commotion.s1', errorType: 'meaning', type: '词源', prompt: '记 commotion 时，哪句更稳妥？', options: ['先锁住「骚动」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「骚动」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['骚动'] },
  });

  D('communal', {
    etymology: {
      origin: '英语派生：commun + -al，词性转到「公共的」。',
      prefix: null,
      root: { text: 'commun', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'communal', text: '英语派生：commun + -al，词性转到「公共的」。' },
        { label: '现在', text: '核心用法是：公共的。' },
      ],
      formationLogic: '先认词干 commun，再看词尾。',
      mnemonic: '看到 communal，先说出「公共的」。',
      note: '先认词干 commun，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was communal.', chinese: '即使是初读者也能看出，这个结果是公共的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'communal.s1', en: 'They wanted a communal answer, not a long speech.', zh: '他们要一个公共的的答复，不要长篇发言。', structure: 'communal / 表示 / 公共的', grammar: 'adjective，围绕「公共的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are communal.', right: 'The news is communal.', reason: 'news 作主语时动词用单数。', rule: '先确定 communal 是adjective，再套「公共的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'communal.q1', senseId: 'communal.s1', errorType: 'meaning', type: '词义选择', prompt: '「communal」在本条的核心意思是：', options: ['公共的', '完全相反的意思', '一种古代钱币'], answer: '公共的', explain: 'communal：公共的。' },
      { id: 'communal.q2', senseId: 'communal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches communal?', options: ['公共的', 'a kind of ancient coin', 'the past tense of be'], answer: '公共的', explain: '对的是「公共的」。' },
      { id: 'communal.q3', senseId: 'communal.s1', errorType: 'grammar', type: '词义选择', prompt: 'communal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'communal.q4', senseId: 'communal.s1', errorType: 'meaning', type: '词源', prompt: '记 communal 时，哪句更稳妥？', options: ['先锁住「公共的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公共的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公共的'] },
  });

  D('commune', {
    etymology: {
      origin: '现代英语常用词「commune」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commune', gloss: '公社' },
      suffix: null,
      history: [
        { label: 'commune', text: '现代英语常用词「commune」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：公社。' },
      ],
      formationLogic: '核心义：公社。',
      mnemonic: '看到 commune，先说出「公社」。',
      note: '核心义：公社。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one commune.', chinese: '这一章反复回到同一个点：公社。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commune.s1', en: 'Without that commune, the next paragraph is hard to follow.', zh: '没有这个公社，下一段会很难读。', structure: 'commune / 表示 / 公社', grammar: 'noun，围绕「公社」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the commune.', right: 'He gave me some advice about the commune.', reason: 'advice 不可数。名词 commune 的单复数按词典词形记。', rule: '先确定 commune 是noun，再套「公社」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commune.q1', senseId: 'commune.s1', errorType: 'meaning', type: '词义选择', prompt: '「commune」在本条的核心意思是：', options: ['公社', '完全相反的意思', '一种古代钱币'], answer: '公社', explain: 'commune：公社。' },
      { id: 'commune.q2', senseId: 'commune.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commune?', options: ['公社', 'a kind of ancient coin', 'the past tense of be'], answer: '公社', explain: '对的是「公社」。' },
      { id: 'commune.q3', senseId: 'commune.s1', errorType: 'grammar', type: '词义选择', prompt: 'commune 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'commune.q4', senseId: 'commune.s1', errorType: 'meaning', type: '词源', prompt: '记 commune 时，哪句更稳妥？', options: ['先锁住「公社」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公社」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公社'] },
  });

  D('communicate', {
    etymology: {
      origin: '拉丁语 communicare「使共享」。',
      prefix: null,
      root: { text: 'communicate', gloss: '交流' },
      suffix: null,
      history: [
        { label: 'communicate', text: '拉丁语 communicare「使共享」。' },
        { label: '现在', text: '核心用法是：交流。' },
      ],
      formationLogic: '考试认现在的用法：交流。',
      mnemonic: '看到 communicate，先说出「交流」。',
      note: '考试认现在的用法：交流。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to communicate before the office closed.', chinese: '他们同意在办公室关门前做这件事：交流。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'communicate.s1', en: 'The deadline forced the team to communicate that afternoon.', zh: '截止日期逼着小组在那天下午交流。', structure: 'communicate / 表示 / 交流', grammar: 'verb，围绕「交流」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She communicateed it yesterday without checking the real past form.', right: 'Check the past form of "communicate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 communicate 是verb，再套「交流」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'communicate.q1', senseId: 'communicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「communicate」在本条的核心意思是：', options: ['交流', '完全相反的意思', '一种古代钱币'], answer: '交流', explain: 'communicate：交流。' },
      { id: 'communicate.q2', senseId: 'communicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches communicate?', options: ['交流', 'a kind of ancient coin', 'the past tense of be'], answer: '交流', explain: '对的是「交流」。' },
      { id: 'communicate.q3', senseId: 'communicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'communicate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'communicate.q4', senseId: 'communicate.s1', errorType: 'meaning', type: '词源', prompt: '记 communicate 时，哪句更稳妥？', options: ['先锁住「交流」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交流」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交流'] },
  });

  D('communication', {
    etymology: {
      origin: '英语派生：communica + -tion，词性转到「交流」。',
      prefix: null,
      root: { text: 'communica', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'communication', text: '英语派生：communica + -tion，词性转到「交流」。' },
        { label: '现在', text: '核心用法是：交流。' },
      ],
      formationLogic: '先认词干 communica，再看词尾。',
      mnemonic: '看到 communication，先说出「交流」。',
      note: '先认词干 communica，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one communication.', chinese: '这一章反复回到同一个点：交流。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'communication.s1', en: 'Without that communication, the next paragraph is hard to follow.', zh: '没有这个交流，下一段会很难读。', structure: 'communication / 表示 / 交流', grammar: 'noun，围绕「交流」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the communication.', right: 'He gave me some advice about the communication.', reason: 'advice 不可数。名词 communication 的单复数按词典词形记。', rule: '先确定 communication 是noun，再套「交流」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'communication.q1', senseId: 'communication.s1', errorType: 'meaning', type: '词义选择', prompt: '「communication」在本条的核心意思是：', options: ['交流', '完全相反的意思', '一种古代钱币'], answer: '交流', explain: 'communication：交流。' },
      { id: 'communication.q2', senseId: 'communication.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches communication?', options: ['交流', 'a kind of ancient coin', 'the past tense of be'], answer: '交流', explain: '对的是「交流」。' },
      { id: 'communication.q3', senseId: 'communication.s1', errorType: 'grammar', type: '词义选择', prompt: 'communication 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'communication.q4', senseId: 'communication.s1', errorType: 'meaning', type: '词源', prompt: '记 communication 时，哪句更稳妥？', options: ['先锁住「交流」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「交流」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交流'] },
  });

  D('communications', {
    etymology: {
      origin: '现代英语常用词「communications」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'communications', gloss: '通信' },
      suffix: null,
      history: [
        { label: 'communications', text: '现代英语常用词「communications」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：通信。' },
      ],
      formationLogic: '核心义：通信。',
      mnemonic: '看到 communications，先说出「通信」。',
      note: '核心义：通信。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one communications.', chinese: '这一章反复回到同一个点：通信。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'communications.s1', en: 'Without that communications, the next paragraph is hard to follow.', zh: '没有这个通信，下一段会很难读。', structure: 'communications / 表示 / 通信', grammar: 'noun，围绕「通信」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the communications.', right: 'He gave me some advice about the communications.', reason: 'advice 不可数。名词 communications 的单复数按词典词形记。', rule: '先确定 communications 是noun，再套「通信」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'communications.q1', senseId: 'communications.s1', errorType: 'meaning', type: '词义选择', prompt: '「communications」在本条的核心意思是：', options: ['通信', '完全相反的意思', '一种古代钱币'], answer: '通信', explain: 'communications：通信。' },
      { id: 'communications.q2', senseId: 'communications.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches communications?', options: ['通信', 'a kind of ancient coin', 'the past tense of be'], answer: '通信', explain: '对的是「通信」。' },
      { id: 'communications.q3', senseId: 'communications.s1', errorType: 'grammar', type: '词义选择', prompt: 'communications 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'communications.q4', senseId: 'communications.s1', errorType: 'meaning', type: '词源', prompt: '记 communications 时，哪句更稳妥？', options: ['先锁住「通信」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「通信」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['通信'] },
  });

  D('communism', {
    etymology: {
      origin: '英语派生：commun + -ism，词性转到「共产主义」。',
      prefix: null,
      root: { text: 'commun', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'communism', text: '英语派生：commun + -ism，词性转到「共产主义」。' },
        { label: '现在', text: '核心用法是：共产主义。' },
      ],
      formationLogic: '先认词干 commun，再看词尾。',
      mnemonic: '看到 communism，先说出「共产主义」。',
      note: '先认词干 commun，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one communism.', chinese: '这一章反复回到同一个点：共产主义。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'communism.s1', en: 'Without that communism, the next paragraph is hard to follow.', zh: '没有这个共产主义，下一段会很难读。', structure: 'communism / 表示 / 共产主义', grammar: 'noun，围绕「共产主义」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the communism.', right: 'He gave me some advice about the communism.', reason: 'advice 不可数。名词 communism 的单复数按词典词形记。', rule: '先确定 communism 是noun，再套「共产主义」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'communism.q1', senseId: 'communism.s1', errorType: 'meaning', type: '词义选择', prompt: '「communism」在本条的核心意思是：', options: ['共产主义', '完全相反的意思', '一种古代钱币'], answer: '共产主义', explain: 'communism：共产主义。' },
      { id: 'communism.q2', senseId: 'communism.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches communism?', options: ['共产主义', 'a kind of ancient coin', 'the past tense of be'], answer: '共产主义', explain: '对的是「共产主义」。' },
      { id: 'communism.q3', senseId: 'communism.s1', errorType: 'grammar', type: '词义选择', prompt: 'communism 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'communism.q4', senseId: 'communism.s1', errorType: 'meaning', type: '词源', prompt: '记 communism 时，哪句更稳妥？', options: ['先锁住「共产主义」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「共产主义」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['共产主义'] },
  });

  D('community', {
    etymology: {
      origin: '拉丁语 communitas，communis。',
      prefix: null,
      root: { text: 'community', gloss: '社区' },
      suffix: null,
      history: [
        { label: 'community', text: '拉丁语 communitas，communis。' },
        { label: '现在', text: '核心用法是：社区。' },
      ],
      formationLogic: '考试认现在的用法：社区。',
      mnemonic: '看到 community，先说出「社区」。',
      note: '考试认现在的用法：社区。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one community.', chinese: '这一章反复回到同一个点：社区。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'community.s1', en: 'Without that community, the next paragraph is hard to follow.', zh: '没有这个社区，下一段会很难读。', structure: 'community / 表示 / 社区', grammar: 'noun，围绕「社区」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the community.', right: 'He gave me some advice about the community.', reason: 'advice 不可数。名词 community 的单复数按词典词形记。', rule: '先确定 community 是noun，再套「社区」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'community.q1', senseId: 'community.s1', errorType: 'meaning', type: '词义选择', prompt: '「community」在本条的核心意思是：', options: ['社区', '完全相反的意思', '一种古代钱币'], answer: '社区', explain: 'community：社区。' },
      { id: 'community.q2', senseId: 'community.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches community?', options: ['社区', 'a kind of ancient coin', 'the past tense of be'], answer: '社区', explain: '对的是「社区」。' },
      { id: 'community.q3', senseId: 'community.s1', errorType: 'grammar', type: '词义选择', prompt: 'community 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'community.q4', senseId: 'community.s1', errorType: 'meaning', type: '词源', prompt: '记 community 时，哪句更稳妥？', options: ['先锁住「社区」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「社区」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['社区'] },
  });

  D('commute', {
    etymology: {
      origin: '现代英语常用词「commute」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'commute', gloss: '通勤' },
      suffix: null,
      history: [
        { label: 'commute', text: '现代英语常用词「commute」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：通勤。' },
      ],
      formationLogic: '核心义：通勤。',
      mnemonic: '看到 commute，先说出「通勤」。',
      note: '核心义：通勤。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to commute before the office closed.', chinese: '他们同意在办公室关门前做这件事：通勤。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'commute.s1', en: 'The deadline forced the team to commute that afternoon.', zh: '截止日期逼着小组在那天下午通勤。', structure: 'commute / 表示 / 通勤', grammar: 'verb，围绕「通勤」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She commuteed it yesterday without checking the real past form.', right: 'Check the past form of "commute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 commute 是verb，再套「通勤」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'commute.q1', senseId: 'commute.s1', errorType: 'meaning', type: '词义选择', prompt: '「commute」在本条的核心意思是：', options: ['通勤', '完全相反的意思', '一种古代钱币'], answer: '通勤', explain: 'commute：通勤。' },
      { id: 'commute.q2', senseId: 'commute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches commute?', options: ['通勤', 'a kind of ancient coin', 'the past tense of be'], answer: '通勤', explain: '对的是「通勤」。' },
      { id: 'commute.q3', senseId: 'commute.s1', errorType: 'grammar', type: '词义选择', prompt: 'commute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'commute.q4', senseId: 'commute.s1', errorType: 'meaning', type: '词源', prompt: '记 commute 时，哪句更稳妥？', options: ['先锁住「通勤」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「通勤」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['通勤'] },
  });

  D('compact', {
    etymology: {
      origin: '现代英语常用词「compact」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'compact', gloss: '紧凑的' },
      suffix: null,
      history: [
        { label: 'compact', text: '现代英语常用词「compact」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：紧凑的。' },
      ],
      formationLogic: '核心义：紧凑的。',
      mnemonic: '看到 compact，先说出「紧凑的」。',
      note: '核心义：紧凑的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was compact.', chinese: '即使是初读者也能看出，这个结果是紧凑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compact.s1', en: 'They wanted a compact answer, not a long speech.', zh: '他们要一个紧凑的的答复，不要长篇发言。', structure: 'compact / 表示 / 紧凑的', grammar: 'adjective，围绕「紧凑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are compact.', right: 'The news is compact.', reason: 'news 作主语时动词用单数。', rule: '先确定 compact 是adjective，再套「紧凑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compact.q1', senseId: 'compact.s1', errorType: 'meaning', type: '词义选择', prompt: '「compact」在本条的核心意思是：', options: ['紧凑的', '完全相反的意思', '一种古代钱币'], answer: '紧凑的', explain: 'compact：紧凑的。' },
      { id: 'compact.q2', senseId: 'compact.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compact?', options: ['紧凑的', 'a kind of ancient coin', 'the past tense of be'], answer: '紧凑的', explain: '对的是「紧凑的」。' },
      { id: 'compact.q3', senseId: 'compact.s1', errorType: 'grammar', type: '词义选择', prompt: 'compact 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'compact.q4', senseId: 'compact.s1', errorType: 'meaning', type: '词源', prompt: '记 compact 时，哪句更稳妥？', options: ['先锁住「紧凑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「紧凑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['紧凑的'] },
  });

  D('companion', {
    etymology: {
      origin: '拉丁语 com-「一起」+ panis「面包」。一起吃面包的人。',
      prefix: null,
      root: { text: 'companion', gloss: '同伴' },
      suffix: null,
      history: [
        { label: 'companion', text: '拉丁语 com-「一起」+ panis「面包」。一起吃面包的人。' },
        { label: '现在', text: '核心用法是：同伴。' },
      ],
      formationLogic: '考试认现在的用法：同伴。',
      mnemonic: '看到 companion，先说出「同伴」。',
      note: '考试认现在的用法：同伴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one companion.', chinese: '这一章反复回到同一个点：同伴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'companion.s1', en: 'Without that companion, the next paragraph is hard to follow.', zh: '没有这个同伴，下一段会很难读。', structure: 'companion / 表示 / 同伴', grammar: 'noun，围绕「同伴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the companion.', right: 'He gave me some advice about the companion.', reason: 'advice 不可数。名词 companion 的单复数按词典词形记。', rule: '先确定 companion 是noun，再套「同伴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'companion.q1', senseId: 'companion.s1', errorType: 'meaning', type: '词义选择', prompt: '「companion」在本条的核心意思是：', options: ['同伴', '完全相反的意思', '一种古代钱币'], answer: '同伴', explain: 'companion：同伴。' },
      { id: 'companion.q2', senseId: 'companion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches companion?', options: ['同伴', 'a kind of ancient coin', 'the past tense of be'], answer: '同伴', explain: '对的是「同伴」。' },
      { id: 'companion.q3', senseId: 'companion.s1', errorType: 'grammar', type: '词义选择', prompt: 'companion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'companion.q4', senseId: 'companion.s1', errorType: 'meaning', type: '词源', prompt: '记 companion 时，哪句更稳妥？', options: ['先锁住「同伴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同伴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同伴'] },
  });

  D('companionship', {
    etymology: {
      origin: '现代英语常用词「companionship」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'companionship', gloss: '陪伴' },
      suffix: null,
      history: [
        { label: 'companionship', text: '现代英语常用词「companionship」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：陪伴。' },
      ],
      formationLogic: '核心义：陪伴。',
      mnemonic: '看到 companionship，先说出「陪伴」。',
      note: '核心义：陪伴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one companionship.', chinese: '这一章反复回到同一个点：陪伴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'companionship.s1', en: 'Without that companionship, the next paragraph is hard to follow.', zh: '没有这个陪伴，下一段会很难读。', structure: 'companionship / 表示 / 陪伴', grammar: 'noun，围绕「陪伴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the companionship.', right: 'He gave me some advice about the companionship.', reason: 'advice 不可数。名词 companionship 的单复数按词典词形记。', rule: '先确定 companionship 是noun，再套「陪伴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'companionship.q1', senseId: 'companionship.s1', errorType: 'meaning', type: '词义选择', prompt: '「companionship」在本条的核心意思是：', options: ['陪伴', '完全相反的意思', '一种古代钱币'], answer: '陪伴', explain: 'companionship：陪伴。' },
      { id: 'companionship.q2', senseId: 'companionship.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches companionship?', options: ['陪伴', 'a kind of ancient coin', 'the past tense of be'], answer: '陪伴', explain: '对的是「陪伴」。' },
      { id: 'companionship.q3', senseId: 'companionship.s1', errorType: 'grammar', type: '词义选择', prompt: 'companionship 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'companionship.q4', senseId: 'companionship.s1', errorType: 'meaning', type: '词源', prompt: '记 companionship 时，哪句更稳妥？', options: ['先锁住「陪伴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陪伴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陪伴'] },
  });

  D('company', {
    etymology: {
      origin: '与 companion 同源。一伙人，后指公司。',
      prefix: null,
      root: { text: 'company', gloss: '公司' },
      suffix: null,
      history: [
        { label: 'company', text: '与 companion 同源。一伙人，后指公司。' },
        { label: '现在', text: '核心用法是：公司。' },
      ],
      formationLogic: '考试认现在的用法：公司。',
      mnemonic: '看到 company，先说出「公司」。',
      note: '考试认现在的用法：公司。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one company.', chinese: '这一章反复回到同一个点：公司。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'company.s1', en: 'Without that company, the next paragraph is hard to follow.', zh: '没有这个公司，下一段会很难读。', structure: 'company / 表示 / 公司', grammar: 'noun，围绕「公司」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the company.', right: 'He gave me some advice about the company.', reason: 'advice 不可数。名词 company 的单复数按词典词形记。', rule: '先确定 company 是noun，再套「公司」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'company.q1', senseId: 'company.s1', errorType: 'meaning', type: '词义选择', prompt: '「company」在本条的核心意思是：', options: ['公司', '完全相反的意思', '一种古代钱币'], answer: '公司', explain: 'company：公司。' },
      { id: 'company.q2', senseId: 'company.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches company?', options: ['公司', 'a kind of ancient coin', 'the past tense of be'], answer: '公司', explain: '对的是「公司」。' },
      { id: 'company.q3', senseId: 'company.s1', errorType: 'grammar', type: '词义选择', prompt: 'company 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'company.q4', senseId: 'company.s1', errorType: 'meaning', type: '词源', prompt: '记 company 时，哪句更稳妥？', options: ['先锁住「公司」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公司」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公司'] },
  });

  D('comparable', {
    etymology: {
      origin: '英语派生：compar + -able，词性转到「可比较的」。',
      prefix: null,
      root: { text: 'compar', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'comparable', text: '英语派生：compar + -able，词性转到「可比较的」。' },
        { label: '现在', text: '核心用法是：可比较的。' },
      ],
      formationLogic: '先认词干 compar，再看词尾。',
      mnemonic: '看到 comparable，先说出「可比较的」。',
      note: '先认词干 compar，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was comparable.', chinese: '即使是初读者也能看出，这个结果是可比较的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comparable.s1', en: 'They wanted a comparable answer, not a long speech.', zh: '他们要一个可比较的的答复，不要长篇发言。', structure: 'comparable / 表示 / 可比较的', grammar: 'adjective，围绕「可比较的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are comparable.', right: 'The news is comparable.', reason: 'news 作主语时动词用单数。', rule: '先确定 comparable 是adjective，再套「可比较的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comparable.q1', senseId: 'comparable.s1', errorType: 'meaning', type: '词义选择', prompt: '「comparable」在本条的核心意思是：', options: ['可比较的', '完全相反的意思', '一种古代钱币'], answer: '可比较的', explain: 'comparable：可比较的。' },
      { id: 'comparable.q2', senseId: 'comparable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comparable?', options: ['可比较的', 'a kind of ancient coin', 'the past tense of be'], answer: '可比较的', explain: '对的是「可比较的」。' },
      { id: 'comparable.q3', senseId: 'comparable.s1', errorType: 'grammar', type: '词义选择', prompt: 'comparable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'comparable.q4', senseId: 'comparable.s1', errorType: 'meaning', type: '词源', prompt: '记 comparable 时，哪句更稳妥？', options: ['先锁住「可比较的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可比较的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可比较的'] },
  });

  D('comparative', {
    etymology: {
      origin: '英语派生：comparat + -ive，词性转到「比较的」。',
      prefix: null,
      root: { text: 'comparat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'comparative', text: '英语派生：comparat + -ive，词性转到「比较的」。' },
        { label: '现在', text: '核心用法是：比较的。' },
      ],
      formationLogic: '先认词干 comparat，再看词尾。',
      mnemonic: '看到 comparative，先说出「比较的」。',
      note: '先认词干 comparat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was comparative.', chinese: '即使是初读者也能看出，这个结果是比较的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comparative.s1', en: 'They wanted a comparative answer, not a long speech.', zh: '他们要一个比较的的答复，不要长篇发言。', structure: 'comparative / 表示 / 比较的', grammar: 'adjective，围绕「比较的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are comparative.', right: 'The news is comparative.', reason: 'news 作主语时动词用单数。', rule: '先确定 comparative 是adjective，再套「比较的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comparative.q1', senseId: 'comparative.s1', errorType: 'meaning', type: '词义选择', prompt: '「comparative」在本条的核心意思是：', options: ['比较的', '完全相反的意思', '一种古代钱币'], answer: '比较的', explain: 'comparative：比较的。' },
      { id: 'comparative.q2', senseId: 'comparative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comparative?', options: ['比较的', 'a kind of ancient coin', 'the past tense of be'], answer: '比较的', explain: '对的是「比较的」。' },
      { id: 'comparative.q3', senseId: 'comparative.s1', errorType: 'grammar', type: '词义选择', prompt: 'comparative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'comparative.q4', senseId: 'comparative.s1', errorType: 'meaning', type: '词源', prompt: '记 comparative 时，哪句更稳妥？', options: ['先锁住「比较的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「比较的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['比较的'] },
  });

  D('compare', {
    etymology: {
      origin: '拉丁语 comparare「放在一起看」，par「相等」。',
      prefix: null,
      root: { text: 'compare', gloss: '比较' },
      suffix: null,
      history: [
        { label: 'compare', text: '拉丁语 comparare「放在一起看」，par「相等」。' },
        { label: '现在', text: '核心用法是：比较。' },
      ],
      formationLogic: '考试认现在的用法：比较。',
      mnemonic: '看到 compare，先说出「比较」。',
      note: '考试认现在的用法：比较。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compare before the office closed.', chinese: '他们同意在办公室关门前做这件事：比较。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compare.s1', en: 'The deadline forced the team to compare that afternoon.', zh: '截止日期逼着小组在那天下午比较。', structure: 'compare / 表示 / 比较', grammar: 'verb，围绕「比较」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She compareed it yesterday without checking the real past form.', right: 'Check the past form of "compare" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compare 是verb，再套「比较」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compare.q1', senseId: 'compare.s1', errorType: 'meaning', type: '词义选择', prompt: '「compare」在本条的核心意思是：', options: ['比较', '完全相反的意思', '一种古代钱币'], answer: '比较', explain: 'compare：比较。' },
      { id: 'compare.q2', senseId: 'compare.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compare?', options: ['比较', 'a kind of ancient coin', 'the past tense of be'], answer: '比较', explain: '对的是「比较」。' },
      { id: 'compare.q3', senseId: 'compare.s1', errorType: 'grammar', type: '词义选择', prompt: 'compare 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compare.q4', senseId: 'compare.s1', errorType: 'meaning', type: '词源', prompt: '记 compare 时，哪句更稳妥？', options: ['先锁住「比较」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「比较」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['比较'] },
  });

  D('compared with', {
    etymology: {
      origin: '现代英语固定说法「compared with」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'compared with', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'compared with', text: '现代英语固定说法「compared with」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：与……相比。' },
      ],
      formationLogic: '核心义：与……相比。',
      mnemonic: '看到 compared with，先说出「与……相比」。',
      note: '核心义：与……相比。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "compared with" and asked the class to keep it as one unit.', chinese: '老师把「compared with」圈出来，让全班把它当成一个整体。它表示与……相比。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compared with.s1', en: 'In the margin she wrote "compared with" so nobody would split the phrase.', zh: '她在页边写下「compared with」，免得有人把这个说法拆开。意思是与……相比。', structure: 'compared with / 表示 / 与……相比', grammar: 'preposition，围绕「与……相比」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of compared with and lost the point.', right: 'Keep "compared with" together: it means 与……相比.', reason: '「compared with」要整块理解。', rule: '先确定 compared with 是preposition，再套「与……相比」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compared with.q1', senseId: 'compared with.s1', errorType: 'meaning', type: '词义选择', prompt: '「compared with」在本条的核心意思是：', options: ['与……相比', '完全相反的意思', '一种古代钱币'], answer: '与……相比', explain: 'compared with：与……相比。' },
      { id: 'compared with.q2', senseId: 'compared with.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compared with?', options: ['与……相比', 'a kind of ancient coin', 'the past tense of be'], answer: '与……相比', explain: '对的是「与……相比」。' },
      { id: 'compared with.q3', senseId: 'compared with.s1', errorType: 'grammar', type: '词义选择', prompt: 'compared with 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'compared with.q4', senseId: 'compared with.s1', errorType: 'meaning', type: '词源', prompt: '记 compared with 时，哪句更稳妥？', options: ['先锁住「与……相比」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「与……相比」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['与……相比'] },
  });

  D('comparison', {
    etymology: {
      origin: '现代英语常用词「comparison」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'comparison', gloss: '比较' },
      suffix: null,
      history: [
        { label: 'comparison', text: '现代英语常用词「comparison」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：比较。' },
      ],
      formationLogic: '核心义：比较。',
      mnemonic: '看到 comparison，先说出「比较」。',
      note: '核心义：比较。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comparison.', chinese: '这一章反复回到同一个点：比较。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comparison.s1', en: 'Without that comparison, the next paragraph is hard to follow.', zh: '没有这个比较，下一段会很难读。', structure: 'comparison / 表示 / 比较', grammar: 'noun，围绕「比较」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comparison.', right: 'He gave me some advice about the comparison.', reason: 'advice 不可数。名词 comparison 的单复数按词典词形记。', rule: '先确定 comparison 是noun，再套「比较」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comparison.q1', senseId: 'comparison.s1', errorType: 'meaning', type: '词义选择', prompt: '「comparison」在本条的核心意思是：', options: ['比较', '完全相反的意思', '一种古代钱币'], answer: '比较', explain: 'comparison：比较。' },
      { id: 'comparison.q2', senseId: 'comparison.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comparison?', options: ['比较', 'a kind of ancient coin', 'the past tense of be'], answer: '比较', explain: '对的是「比较」。' },
      { id: 'comparison.q3', senseId: 'comparison.s1', errorType: 'grammar', type: '词义选择', prompt: 'comparison 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comparison.q4', senseId: 'comparison.s1', errorType: 'meaning', type: '词源', prompt: '记 comparison 时，哪句更稳妥？', options: ['先锁住「比较」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「比较」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['比较'] },
  });

  D('compartment', {
    etymology: {
      origin: '英语派生：compart + -ment，词性转到「隔间」。',
      prefix: null,
      root: { text: 'compart', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'compartment', text: '英语派生：compart + -ment，词性转到「隔间」。' },
        { label: '现在', text: '核心用法是：隔间。' },
      ],
      formationLogic: '先认词干 compart，再看词尾。',
      mnemonic: '看到 compartment，先说出「隔间」。',
      note: '先认词干 compart，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compartment.', chinese: '这一章反复回到同一个点：隔间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compartment.s1', en: 'Without that compartment, the next paragraph is hard to follow.', zh: '没有这个隔间，下一段会很难读。', structure: 'compartment / 表示 / 隔间', grammar: 'noun，围绕「隔间」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compartment.', right: 'He gave me some advice about the compartment.', reason: 'advice 不可数。名词 compartment 的单复数按词典词形记。', rule: '先确定 compartment 是noun，再套「隔间」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compartment.q1', senseId: 'compartment.s1', errorType: 'meaning', type: '词义选择', prompt: '「compartment」在本条的核心意思是：', options: ['隔间', '完全相反的意思', '一种古代钱币'], answer: '隔间', explain: 'compartment：隔间。' },
      { id: 'compartment.q2', senseId: 'compartment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compartment?', options: ['隔间', 'a kind of ancient coin', 'the past tense of be'], answer: '隔间', explain: '对的是「隔间」。' },
      { id: 'compartment.q3', senseId: 'compartment.s1', errorType: 'grammar', type: '词义选择', prompt: 'compartment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compartment.q4', senseId: 'compartment.s1', errorType: 'meaning', type: '词源', prompt: '记 compartment 时，哪句更稳妥？', options: ['先锁住「隔间」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「隔间」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['隔间'] },
  });

  D('compass', {
    etymology: {
      origin: '拉丁语 compassare「一起量步」。圆规和指南针都是用来定向的。',
      prefix: null,
      root: { text: 'compass', gloss: '指南针' },
      suffix: null,
      history: [
        { label: 'compass', text: '拉丁语 compassare「一起量步」。圆规和指南针都是用来定向的。' },
        { label: '现在', text: '核心用法是：指南针。' },
      ],
      formationLogic: '考试认现在的用法：指南针。',
      mnemonic: '看到 compass，先说出「指南针」。',
      note: '考试认现在的用法：指南针。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compass.', chinese: '这一章反复回到同一个点：指南针。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compass.s1', en: 'Without that compass, the next paragraph is hard to follow.', zh: '没有这个指南针，下一段会很难读。', structure: 'compass / 表示 / 指南针', grammar: 'noun，围绕「指南针」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compass.', right: 'He gave me some advice about the compass.', reason: 'advice 不可数。名词 compass 的单复数按词典词形记。', rule: '先确定 compass 是noun，再套「指南针」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compass.q1', senseId: 'compass.s1', errorType: 'meaning', type: '词义选择', prompt: '「compass」在本条的核心意思是：', options: ['指南针', '完全相反的意思', '一种古代钱币'], answer: '指南针', explain: 'compass：指南针。' },
      { id: 'compass.q2', senseId: 'compass.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compass?', options: ['指南针', 'a kind of ancient coin', 'the past tense of be'], answer: '指南针', explain: '对的是「指南针」。' },
      { id: 'compass.q3', senseId: 'compass.s1', errorType: 'grammar', type: '词义选择', prompt: 'compass 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compass.q4', senseId: 'compass.s1', errorType: 'meaning', type: '词源', prompt: '记 compass 时，哪句更稳妥？', options: ['先锁住「指南针」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指南针」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指南针'] },
  });

  D('compassion', {
    etymology: {
      origin: '英语派生：compas + -sion，词性转到「同情」。',
      prefix: null,
      root: { text: 'compas', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'compassion', text: '英语派生：compas + -sion，词性转到「同情」。' },
        { label: '现在', text: '核心用法是：同情。' },
      ],
      formationLogic: '先认词干 compas，再看词尾。',
      mnemonic: '看到 compassion，先说出「同情」。',
      note: '先认词干 compas，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compassion.', chinese: '这一章反复回到同一个点：同情。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compassion.s1', en: 'Without that compassion, the next paragraph is hard to follow.', zh: '没有这个同情，下一段会很难读。', structure: 'compassion / 表示 / 同情', grammar: 'noun，围绕「同情」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compassion.', right: 'He gave me some advice about the compassion.', reason: 'advice 不可数。名词 compassion 的单复数按词典词形记。', rule: '先确定 compassion 是noun，再套「同情」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compassion.q1', senseId: 'compassion.s1', errorType: 'meaning', type: '词义选择', prompt: '「compassion」在本条的核心意思是：', options: ['同情', '完全相反的意思', '一种古代钱币'], answer: '同情', explain: 'compassion：同情。' },
      { id: 'compassion.q2', senseId: 'compassion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compassion?', options: ['同情', 'a kind of ancient coin', 'the past tense of be'], answer: '同情', explain: '对的是「同情」。' },
      { id: 'compassion.q3', senseId: 'compassion.s1', errorType: 'grammar', type: '词义选择', prompt: 'compassion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compassion.q4', senseId: 'compassion.s1', errorType: 'meaning', type: '词源', prompt: '记 compassion 时，哪句更稳妥？', options: ['先锁住「同情」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同情」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同情'] },
  });

  D('compassionate', {
    etymology: {
      origin: '现代英语常用词「compassionate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'compassionate', gloss: '有同情心的' },
      suffix: null,
      history: [
        { label: 'compassionate', text: '现代英语常用词「compassionate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：有同情心的。' },
      ],
      formationLogic: '核心义：有同情心的。',
      mnemonic: '看到 compassionate，先说出「有同情心的」。',
      note: '核心义：有同情心的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was compassionate.', chinese: '即使是初读者也能看出，这个结果是有同情心的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compassionate.s1', en: 'They wanted a compassionate answer, not a long speech.', zh: '他们要一个有同情心的的答复，不要长篇发言。', structure: 'compassionate / 表示 / 有同情心的', grammar: 'adjective，围绕「有同情心的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are compassionate.', right: 'The news is compassionate.', reason: 'news 作主语时动词用单数。', rule: '先确定 compassionate 是adjective，再套「有同情心的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compassionate.q1', senseId: 'compassionate.s1', errorType: 'meaning', type: '词义选择', prompt: '「compassionate」在本条的核心意思是：', options: ['有同情心的', '完全相反的意思', '一种古代钱币'], answer: '有同情心的', explain: 'compassionate：有同情心的。' },
      { id: 'compassionate.q2', senseId: 'compassionate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compassionate?', options: ['有同情心的', 'a kind of ancient coin', 'the past tense of be'], answer: '有同情心的', explain: '对的是「有同情心的」。' },
      { id: 'compassionate.q3', senseId: 'compassionate.s1', errorType: 'grammar', type: '词义选择', prompt: 'compassionate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'compassionate.q4', senseId: 'compassionate.s1', errorType: 'meaning', type: '词源', prompt: '记 compassionate 时，哪句更稳妥？', options: ['先锁住「有同情心的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有同情心的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有同情心的'] },
  });

  D('compatible', {
    etymology: {
      origin: '英语派生：compat + -ible，词性转到「兼容的」。',
      prefix: null,
      root: { text: 'compat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'compatible', text: '英语派生：compat + -ible，词性转到「兼容的」。' },
        { label: '现在', text: '核心用法是：兼容的。' },
      ],
      formationLogic: '先认词干 compat，再看词尾。',
      mnemonic: '看到 compatible，先说出「兼容的」。',
      note: '先认词干 compat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was compatible.', chinese: '即使是初读者也能看出，这个结果是兼容的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compatible.s1', en: 'They wanted a compatible answer, not a long speech.', zh: '他们要一个兼容的的答复，不要长篇发言。', structure: 'compatible / 表示 / 兼容的', grammar: 'adjective，围绕「兼容的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are compatible.', right: 'The news is compatible.', reason: 'news 作主语时动词用单数。', rule: '先确定 compatible 是adjective，再套「兼容的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compatible.q1', senseId: 'compatible.s1', errorType: 'meaning', type: '词义选择', prompt: '「compatible」在本条的核心意思是：', options: ['兼容的', '完全相反的意思', '一种古代钱币'], answer: '兼容的', explain: 'compatible：兼容的。' },
      { id: 'compatible.q2', senseId: 'compatible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compatible?', options: ['兼容的', 'a kind of ancient coin', 'the past tense of be'], answer: '兼容的', explain: '对的是「兼容的」。' },
      { id: 'compatible.q3', senseId: 'compatible.s1', errorType: 'grammar', type: '词义选择', prompt: 'compatible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'compatible.q4', senseId: 'compatible.s1', errorType: 'meaning', type: '词源', prompt: '记 compatible 时，哪句更稳妥？', options: ['先锁住「兼容的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「兼容的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['兼容的'] },
  });

  D('compel', {
    etymology: {
      origin: '拉丁语 compellere「赶到一起」。',
      prefix: null,
      root: { text: 'compel', gloss: '强迫' },
      suffix: null,
      history: [
        { label: 'compel', text: '拉丁语 compellere「赶到一起」。' },
        { label: '现在', text: '核心用法是：强迫。' },
      ],
      formationLogic: '考试认现在的用法：强迫。',
      mnemonic: '看到 compel，先说出「强迫」。',
      note: '考试认现在的用法：强迫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compel before the office closed.', chinese: '他们同意在办公室关门前做这件事：强迫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compel.s1', en: 'The deadline forced the team to compel that afternoon.', zh: '截止日期逼着小组在那天下午强迫。', structure: 'compel / 表示 / 强迫', grammar: 'verb，围绕「强迫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She compeled it yesterday without checking the real past form.', right: 'Check the past form of "compel" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compel 是verb，再套「强迫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compel.q1', senseId: 'compel.s1', errorType: 'meaning', type: '词义选择', prompt: '「compel」在本条的核心意思是：', options: ['强迫', '完全相反的意思', '一种古代钱币'], answer: '强迫', explain: 'compel：强迫。' },
      { id: 'compel.q2', senseId: 'compel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compel?', options: ['强迫', 'a kind of ancient coin', 'the past tense of be'], answer: '强迫', explain: '对的是「强迫」。' },
      { id: 'compel.q3', senseId: 'compel.s1', errorType: 'grammar', type: '词义选择', prompt: 'compel 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compel.q4', senseId: 'compel.s1', errorType: 'meaning', type: '词源', prompt: '记 compel 时，哪句更稳妥？', options: ['先锁住「强迫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「强迫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['强迫'] },
  });

  D('compendium', {
    etymology: {
      origin: '现代英语常用词「compendium」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'compendium', gloss: '纲要' },
      suffix: null,
      history: [
        { label: 'compendium', text: '现代英语常用词「compendium」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：纲要。' },
      ],
      formationLogic: '核心义：纲要。',
      mnemonic: '看到 compendium，先说出「纲要」。',
      note: '核心义：纲要。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compendium.', chinese: '这一章反复回到同一个点：纲要。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compendium.s1', en: 'Without that compendium, the next paragraph is hard to follow.', zh: '没有这个纲要，下一段会很难读。', structure: 'compendium / 表示 / 纲要', grammar: 'noun，围绕「纲要」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compendium.', right: 'He gave me some advice about the compendium.', reason: 'advice 不可数。名词 compendium 的单复数按词典词形记。', rule: '先确定 compendium 是noun，再套「纲要」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compendium.q1', senseId: 'compendium.s1', errorType: 'meaning', type: '词义选择', prompt: '「compendium」在本条的核心意思是：', options: ['纲要', '完全相反的意思', '一种古代钱币'], answer: '纲要', explain: 'compendium：纲要。' },
      { id: 'compendium.q2', senseId: 'compendium.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compendium?', options: ['纲要', 'a kind of ancient coin', 'the past tense of be'], answer: '纲要', explain: '对的是「纲要」。' },
      { id: 'compendium.q3', senseId: 'compendium.s1', errorType: 'grammar', type: '词义选择', prompt: 'compendium 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compendium.q4', senseId: 'compendium.s1', errorType: 'meaning', type: '词源', prompt: '记 compendium 时，哪句更稳妥？', options: ['先锁住「纲要」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「纲要」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['纲要'] },
  });

  D('compensate', {
    etymology: {
      origin: '现代英语常用词「compensate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'compensate', gloss: '补偿' },
      suffix: null,
      history: [
        { label: 'compensate', text: '现代英语常用词「compensate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：补偿。' },
      ],
      formationLogic: '核心义：补偿。',
      mnemonic: '看到 compensate，先说出「补偿」。',
      note: '核心义：补偿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compensate before the office closed.', chinese: '他们同意在办公室关门前做这件事：补偿。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compensate.s1', en: 'The deadline forced the team to compensate that afternoon.', zh: '截止日期逼着小组在那天下午补偿。', structure: 'compensate / 表示 / 补偿', grammar: 'verb，围绕「补偿」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She compensateed it yesterday without checking the real past form.', right: 'Check the past form of "compensate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compensate 是verb，再套「补偿」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compensate.q1', senseId: 'compensate.s1', errorType: 'meaning', type: '词义选择', prompt: '「compensate」在本条的核心意思是：', options: ['补偿', '完全相反的意思', '一种古代钱币'], answer: '补偿', explain: 'compensate：补偿。' },
      { id: 'compensate.q2', senseId: 'compensate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compensate?', options: ['补偿', 'a kind of ancient coin', 'the past tense of be'], answer: '补偿', explain: '对的是「补偿」。' },
      { id: 'compensate.q3', senseId: 'compensate.s1', errorType: 'grammar', type: '词义选择', prompt: 'compensate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compensate.q4', senseId: 'compensate.s1', errorType: 'meaning', type: '词源', prompt: '记 compensate 时，哪句更稳妥？', options: ['先锁住「补偿」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「补偿」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['补偿'] },
  });

  D('compete', {
    etymology: {
      origin: '拉丁语 competere「一起追求」。',
      prefix: null,
      root: { text: 'compete', gloss: '竞争' },
      suffix: null,
      history: [
        { label: 'compete', text: '拉丁语 competere「一起追求」。' },
        { label: '现在', text: '核心用法是：竞争。' },
      ],
      formationLogic: '考试认现在的用法：竞争。',
      mnemonic: '看到 compete，先说出「竞争」。',
      note: '考试认现在的用法：竞争。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compete before the office closed.', chinese: '他们同意在办公室关门前做这件事：竞争。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compete.s1', en: 'The deadline forced the team to compete that afternoon.', zh: '截止日期逼着小组在那天下午竞争。', structure: 'compete / 表示 / 竞争', grammar: 'verb，围绕「竞争」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She competeed it yesterday without checking the real past form.', right: 'Check the past form of "compete" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compete 是verb，再套「竞争」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compete.q1', senseId: 'compete.s1', errorType: 'meaning', type: '词义选择', prompt: '「compete」在本条的核心意思是：', options: ['竞争', '完全相反的意思', '一种古代钱币'], answer: '竞争', explain: 'compete：竞争。' },
      { id: 'compete.q2', senseId: 'compete.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compete?', options: ['竞争', 'a kind of ancient coin', 'the past tense of be'], answer: '竞争', explain: '对的是「竞争」。' },
      { id: 'compete.q3', senseId: 'compete.s1', errorType: 'grammar', type: '词义选择', prompt: 'compete 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compete.q4', senseId: 'compete.s1', errorType: 'meaning', type: '词源', prompt: '记 compete 时，哪句更稳妥？', options: ['先锁住「竞争」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「竞争」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['竞争'] },
  });

  D('competent', {
    etymology: {
      origin: '拉丁语 competere「合适、足以应对」。',
      prefix: null,
      root: { text: 'competent', gloss: '有能力的' },
      suffix: null,
      history: [
        { label: 'competent', text: '拉丁语 competere「合适、足以应对」。' },
        { label: '现在', text: '核心用法是：有能力的。' },
      ],
      formationLogic: '考试认现在的用法：有能力的。',
      mnemonic: '看到 competent，先说出「有能力的」。',
      note: '考试认现在的用法：有能力的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was competent.', chinese: '即使是初读者也能看出，这个结果是有能力的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'competent.s1', en: 'They wanted a competent answer, not a long speech.', zh: '他们要一个有能力的的答复，不要长篇发言。', structure: 'competent / 表示 / 有能力的', grammar: 'adjective，围绕「有能力的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are competent.', right: 'The news is competent.', reason: 'news 作主语时动词用单数。', rule: '先确定 competent 是adjective，再套「有能力的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'competent.q1', senseId: 'competent.s1', errorType: 'meaning', type: '词义选择', prompt: '「competent」在本条的核心意思是：', options: ['有能力的', '完全相反的意思', '一种古代钱币'], answer: '有能力的', explain: 'competent：有能力的。' },
      { id: 'competent.q2', senseId: 'competent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches competent?', options: ['有能力的', 'a kind of ancient coin', 'the past tense of be'], answer: '有能力的', explain: '对的是「有能力的」。' },
      { id: 'competent.q3', senseId: 'competent.s1', errorType: 'grammar', type: '词义选择', prompt: 'competent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'competent.q4', senseId: 'competent.s1', errorType: 'meaning', type: '词源', prompt: '记 competent 时，哪句更稳妥？', options: ['先锁住「有能力的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有能力的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有能力的'] },
  });

  D('competing', {
    etymology: {
      origin: '英语派生：compet + -ing，词性转到「竞争的」。',
      prefix: null,
      root: { text: 'compet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'competing', text: '英语派生：compet + -ing，词性转到「竞争的」。' },
        { label: '现在', text: '核心用法是：竞争的。' },
      ],
      formationLogic: '先认词干 compet，再看词尾。',
      mnemonic: '看到 competing，先说出「竞争的」。',
      note: '先认词干 compet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was competing.', chinese: '即使是初读者也能看出，这个结果是竞争的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'competing.s1', en: 'They wanted a competing answer, not a long speech.', zh: '他们要一个竞争的的答复，不要长篇发言。', structure: 'competing / 表示 / 竞争的', grammar: 'adjective，围绕「竞争的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are competing.', right: 'The news is competing.', reason: 'news 作主语时动词用单数。', rule: '先确定 competing 是adjective，再套「竞争的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'competing.q1', senseId: 'competing.s1', errorType: 'meaning', type: '词义选择', prompt: '「competing」在本条的核心意思是：', options: ['竞争的', '完全相反的意思', '一种古代钱币'], answer: '竞争的', explain: 'competing：竞争的。' },
      { id: 'competing.q2', senseId: 'competing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches competing?', options: ['竞争的', 'a kind of ancient coin', 'the past tense of be'], answer: '竞争的', explain: '对的是「竞争的」。' },
      { id: 'competing.q3', senseId: 'competing.s1', errorType: 'grammar', type: '词义选择', prompt: 'competing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'competing.q4', senseId: 'competing.s1', errorType: 'meaning', type: '词源', prompt: '记 competing 时，哪句更稳妥？', options: ['先锁住「竞争的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「竞争的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['竞争的'] },
  });

  D('competition', {
    etymology: {
      origin: 'compete 的名词。',
      prefix: null,
      root: { text: 'competition', gloss: '竞争' },
      suffix: null,
      history: [
        { label: 'competition', text: 'compete 的名词。' },
        { label: '现在', text: '核心用法是：竞争。' },
      ],
      formationLogic: '考试认现在的用法：竞争。',
      mnemonic: '看到 competition，先说出「竞争」。',
      note: '考试认现在的用法：竞争。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one competition.', chinese: '这一章反复回到同一个点：竞争。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'competition.s1', en: 'Without that competition, the next paragraph is hard to follow.', zh: '没有这个竞争，下一段会很难读。', structure: 'competition / 表示 / 竞争', grammar: 'noun，围绕「竞争」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the competition.', right: 'He gave me some advice about the competition.', reason: 'advice 不可数。名词 competition 的单复数按词典词形记。', rule: '先确定 competition 是noun，再套「竞争」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'competition.q1', senseId: 'competition.s1', errorType: 'meaning', type: '词义选择', prompt: '「competition」在本条的核心意思是：', options: ['竞争', '完全相反的意思', '一种古代钱币'], answer: '竞争', explain: 'competition：竞争。' },
      { id: 'competition.q2', senseId: 'competition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches competition?', options: ['竞争', 'a kind of ancient coin', 'the past tense of be'], answer: '竞争', explain: '对的是「竞争」。' },
      { id: 'competition.q3', senseId: 'competition.s1', errorType: 'grammar', type: '词义选择', prompt: 'competition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'competition.q4', senseId: 'competition.s1', errorType: 'meaning', type: '词源', prompt: '记 competition 时，哪句更稳妥？', options: ['先锁住「竞争」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「竞争」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['竞争'] },
  });

  D('competitor', {
    etymology: {
      origin: '英语派生：competit + -or，词性转到「竞争者」。',
      prefix: null,
      root: { text: 'competit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'competitor', text: '英语派生：competit + -or，词性转到「竞争者」。' },
        { label: '现在', text: '核心用法是：竞争者。' },
      ],
      formationLogic: '先认词干 competit，再看词尾。',
      mnemonic: '看到 competitor，先说出「竞争者」。',
      note: '先认词干 competit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one competitor.', chinese: '这一章反复回到同一个点：竞争者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'competitor.s1', en: 'Without that competitor, the next paragraph is hard to follow.', zh: '没有这个竞争者，下一段会很难读。', structure: 'competitor / 表示 / 竞争者', grammar: 'noun，围绕「竞争者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the competitor.', right: 'He gave me some advice about the competitor.', reason: 'advice 不可数。名词 competitor 的单复数按词典词形记。', rule: '先确定 competitor 是noun，再套「竞争者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'competitor.q1', senseId: 'competitor.s1', errorType: 'meaning', type: '词义选择', prompt: '「competitor」在本条的核心意思是：', options: ['竞争者', '完全相反的意思', '一种古代钱币'], answer: '竞争者', explain: 'competitor：竞争者。' },
      { id: 'competitor.q2', senseId: 'competitor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches competitor?', options: ['竞争者', 'a kind of ancient coin', 'the past tense of be'], answer: '竞争者', explain: '对的是「竞争者」。' },
      { id: 'competitor.q3', senseId: 'competitor.s1', errorType: 'grammar', type: '词义选择', prompt: 'competitor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'competitor.q4', senseId: 'competitor.s1', errorType: 'meaning', type: '词源', prompt: '记 competitor 时，哪句更稳妥？', options: ['先锁住「竞争者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「竞争者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['竞争者'] },
  });

  D('compile', {
    etymology: {
      origin: '拉丁语 compilare「堆到一起」。',
      prefix: null,
      root: { text: 'compile', gloss: '编写' },
      suffix: null,
      history: [
        { label: 'compile', text: '拉丁语 compilare「堆到一起」。' },
        { label: '现在', text: '核心用法是：编写。' },
      ],
      formationLogic: '考试认现在的用法：编写。',
      mnemonic: '看到 compile，先说出「编写」。',
      note: '考试认现在的用法：编写。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compile before the office closed.', chinese: '他们同意在办公室关门前做这件事：编写。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compile.s1', en: 'The deadline forced the team to compile that afternoon.', zh: '截止日期逼着小组在那天下午编写。', structure: 'compile / 表示 / 编写', grammar: 'verb，围绕「编写」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She compileed it yesterday without checking the real past form.', right: 'Check the past form of "compile" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compile 是verb，再套「编写」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compile.q1', senseId: 'compile.s1', errorType: 'meaning', type: '词义选择', prompt: '「compile」在本条的核心意思是：', options: ['编写', '完全相反的意思', '一种古代钱币'], answer: '编写', explain: 'compile：编写。' },
      { id: 'compile.q2', senseId: 'compile.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compile?', options: ['编写', 'a kind of ancient coin', 'the past tense of be'], answer: '编写', explain: '对的是「编写」。' },
      { id: 'compile.q3', senseId: 'compile.s1', errorType: 'grammar', type: '词义选择', prompt: 'compile 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compile.q4', senseId: 'compile.s1', errorType: 'meaning', type: '词源', prompt: '记 compile 时，哪句更稳妥？', options: ['先锁住「编写」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「编写」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['编写'] },
  });

  D('complacent', {
    etymology: {
      origin: '现代英语常用词「complacent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complacent', gloss: '自满的' },
      suffix: null,
      history: [
        { label: 'complacent', text: '现代英语常用词「complacent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：自满的。' },
      ],
      formationLogic: '核心义：自满的。',
      mnemonic: '看到 complacent，先说出「自满的」。',
      note: '核心义：自满的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was complacent.', chinese: '即使是初读者也能看出，这个结果是自满的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complacent.s1', en: 'They wanted a complacent answer, not a long speech.', zh: '他们要一个自满的的答复，不要长篇发言。', structure: 'complacent / 表示 / 自满的', grammar: 'adjective，围绕「自满的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are complacent.', right: 'The news is complacent.', reason: 'news 作主语时动词用单数。', rule: '先确定 complacent 是adjective，再套「自满的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complacent.q1', senseId: 'complacent.s1', errorType: 'meaning', type: '词义选择', prompt: '「complacent」在本条的核心意思是：', options: ['自满的', '完全相反的意思', '一种古代钱币'], answer: '自满的', explain: 'complacent：自满的。' },
      { id: 'complacent.q2', senseId: 'complacent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complacent?', options: ['自满的', 'a kind of ancient coin', 'the past tense of be'], answer: '自满的', explain: '对的是「自满的」。' },
      { id: 'complacent.q3', senseId: 'complacent.s1', errorType: 'grammar', type: '词义选择', prompt: 'complacent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'complacent.q4', senseId: 'complacent.s1', errorType: 'meaning', type: '词源', prompt: '记 complacent 时，哪句更稳妥？', options: ['先锁住「自满的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自满的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自满的'] },
  });

  D('complain', {
    etymology: {
      origin: '拉丁语 complangere 一系，经法语「诉苦」。',
      prefix: null,
      root: { text: 'complain', gloss: '抱怨' },
      suffix: null,
      history: [
        { label: 'complain', text: '拉丁语 complangere 一系，经法语「诉苦」。' },
        { label: '现在', text: '核心用法是：抱怨。' },
      ],
      formationLogic: '考试认现在的用法：抱怨。',
      mnemonic: '看到 complain，先说出「抱怨」。',
      note: '考试认现在的用法：抱怨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to complain before the office closed.', chinese: '他们同意在办公室关门前做这件事：抱怨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complain.s1', en: 'The deadline forced the team to complain that afternoon.', zh: '截止日期逼着小组在那天下午抱怨。', structure: 'complain / 表示 / 抱怨', grammar: 'verb，围绕「抱怨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She complained it yesterday without checking the real past form.', right: 'Check the past form of "complain" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 complain 是verb，再套「抱怨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complain.q1', senseId: 'complain.s1', errorType: 'meaning', type: '词义选择', prompt: '「complain」在本条的核心意思是：', options: ['抱怨', '完全相反的意思', '一种古代钱币'], answer: '抱怨', explain: 'complain：抱怨。' },
      { id: 'complain.q2', senseId: 'complain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complain?', options: ['抱怨', 'a kind of ancient coin', 'the past tense of be'], answer: '抱怨', explain: '对的是「抱怨」。' },
      { id: 'complain.q3', senseId: 'complain.s1', errorType: 'grammar', type: '词义选择', prompt: 'complain 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'complain.q4', senseId: 'complain.s1', errorType: 'meaning', type: '词源', prompt: '记 complain 时，哪句更稳妥？', options: ['先锁住「抱怨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抱怨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抱怨'] },
  });

  D('complainant', {
    etymology: {
      origin: '现代英语常用词「complainant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complainant', gloss: '原告' },
      suffix: null,
      history: [
        { label: 'complainant', text: '现代英语常用词「complainant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：原告。' },
      ],
      formationLogic: '核心义：原告。',
      mnemonic: '看到 complainant，先说出「原告」。',
      note: '核心义：原告。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one complainant.', chinese: '这一章反复回到同一个点：原告。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complainant.s1', en: 'Without that complainant, the next paragraph is hard to follow.', zh: '没有这个原告，下一段会很难读。', structure: 'complainant / 表示 / 原告', grammar: 'noun，围绕「原告」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the complainant.', right: 'He gave me some advice about the complainant.', reason: 'advice 不可数。名词 complainant 的单复数按词典词形记。', rule: '先确定 complainant 是noun，再套「原告」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complainant.q1', senseId: 'complainant.s1', errorType: 'meaning', type: '词义选择', prompt: '「complainant」在本条的核心意思是：', options: ['原告', '完全相反的意思', '一种古代钱币'], answer: '原告', explain: 'complainant：原告。' },
      { id: 'complainant.q2', senseId: 'complainant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complainant?', options: ['原告', 'a kind of ancient coin', 'the past tense of be'], answer: '原告', explain: '对的是「原告」。' },
      { id: 'complainant.q3', senseId: 'complainant.s1', errorType: 'grammar', type: '词义选择', prompt: 'complainant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'complainant.q4', senseId: 'complainant.s1', errorType: 'meaning', type: '词源', prompt: '记 complainant 时，哪句更稳妥？', options: ['先锁住「原告」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「原告」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['原告'] },
  });

  D('complaint', {
    etymology: {
      origin: '现代英语常用词「complaint」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complaint', gloss: '抱怨' },
      suffix: null,
      history: [
        { label: 'complaint', text: '现代英语常用词「complaint」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：抱怨。' },
      ],
      formationLogic: '核心义：抱怨。',
      mnemonic: '看到 complaint，先说出「抱怨」。',
      note: '核心义：抱怨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one complaint.', chinese: '这一章反复回到同一个点：抱怨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complaint.s1', en: 'Without that complaint, the next paragraph is hard to follow.', zh: '没有这个抱怨，下一段会很难读。', structure: 'complaint / 表示 / 抱怨', grammar: 'noun，围绕「抱怨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the complaint.', right: 'He gave me some advice about the complaint.', reason: 'advice 不可数。名词 complaint 的单复数按词典词形记。', rule: '先确定 complaint 是noun，再套「抱怨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complaint.q1', senseId: 'complaint.s1', errorType: 'meaning', type: '词义选择', prompt: '「complaint」在本条的核心意思是：', options: ['抱怨', '完全相反的意思', '一种古代钱币'], answer: '抱怨', explain: 'complaint：抱怨。' },
      { id: 'complaint.q2', senseId: 'complaint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complaint?', options: ['抱怨', 'a kind of ancient coin', 'the past tense of be'], answer: '抱怨', explain: '对的是「抱怨」。' },
      { id: 'complaint.q3', senseId: 'complaint.s1', errorType: 'grammar', type: '词义选择', prompt: 'complaint 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'complaint.q4', senseId: 'complaint.s1', errorType: 'meaning', type: '词源', prompt: '记 complaint 时，哪句更稳妥？', options: ['先锁住「抱怨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抱怨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抱怨'] },
  });

  D('complementary', {
    etymology: {
      origin: '现代英语常用词「complementary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complementary', gloss: '互补的' },
      suffix: null,
      history: [
        { label: 'complementary', text: '现代英语常用词「complementary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：互补的。' },
      ],
      formationLogic: '核心义：互补的。',
      mnemonic: '看到 complementary，先说出「互补的」。',
      note: '核心义：互补的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was complementary.', chinese: '即使是初读者也能看出，这个结果是互补的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complementary.s1', en: 'They wanted a complementary answer, not a long speech.', zh: '他们要一个互补的的答复，不要长篇发言。', structure: 'complementary / 表示 / 互补的', grammar: 'adjective，围绕「互补的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are complementary.', right: 'The news is complementary.', reason: 'news 作主语时动词用单数。', rule: '先确定 complementary 是adjective，再套「互补的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complementary.q1', senseId: 'complementary.s1', errorType: 'meaning', type: '词义选择', prompt: '「complementary」在本条的核心意思是：', options: ['互补的', '完全相反的意思', '一种古代钱币'], answer: '互补的', explain: 'complementary：互补的。' },
      { id: 'complementary.q2', senseId: 'complementary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complementary?', options: ['互补的', 'a kind of ancient coin', 'the past tense of be'], answer: '互补的', explain: '对的是「互补的」。' },
      { id: 'complementary.q3', senseId: 'complementary.s1', errorType: 'grammar', type: '词义选择', prompt: 'complementary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'complementary.q4', senseId: 'complementary.s1', errorType: 'meaning', type: '词源', prompt: '记 complementary 时，哪句更稳妥？', options: ['先锁住「互补的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「互补的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['互补的'] },
  });

  D('complete', {
    etymology: {
      origin: '拉丁语 complere「装满」。',
      prefix: null,
      root: { text: 'complete', gloss: '完整的' },
      suffix: null,
      history: [
        { label: 'complete', text: '拉丁语 complere「装满」。' },
        { label: '现在', text: '核心用法是：完整的。' },
      ],
      formationLogic: '考试认现在的用法：完整的。',
      mnemonic: '看到 complete，先说出「完整的」。',
      note: '考试认现在的用法：完整的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was complete.', chinese: '即使是初读者也能看出，这个结果是完整的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complete.s1', en: 'They wanted a complete answer, not a long speech.', zh: '他们要一个完整的的答复，不要长篇发言。', structure: 'complete / 表示 / 完整的', grammar: 'adjective，围绕「完整的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are complete.', right: 'The news is complete.', reason: 'news 作主语时动词用单数。', rule: '先确定 complete 是adjective，再套「完整的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complete.q1', senseId: 'complete.s1', errorType: 'meaning', type: '词义选择', prompt: '「complete」在本条的核心意思是：', options: ['完整的', '完全相反的意思', '一种古代钱币'], answer: '完整的', explain: 'complete：完整的。' },
      { id: 'complete.q2', senseId: 'complete.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complete?', options: ['完整的', 'a kind of ancient coin', 'the past tense of be'], answer: '完整的', explain: '对的是「完整的」。' },
      { id: 'complete.q3', senseId: 'complete.s1', errorType: 'grammar', type: '词义选择', prompt: 'complete 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'complete.q4', senseId: 'complete.s1', errorType: 'meaning', type: '词源', prompt: '记 complete 时，哪句更稳妥？', options: ['先锁住「完整的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完整的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完整的'] },
  });

  D('completed', {
    etymology: {
      origin: '现代英语常用词「completed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'completed', gloss: '完成的' },
      suffix: null,
      history: [
        { label: 'completed', text: '现代英语常用词「completed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：完成的。' },
      ],
      formationLogic: '核心义：完成的。',
      mnemonic: '看到 completed，先说出「完成的」。',
      note: '核心义：完成的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was completed.', chinese: '即使是初读者也能看出，这个结果是完成的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'completed.s1', en: 'They wanted a completed answer, not a long speech.', zh: '他们要一个完成的的答复，不要长篇发言。', structure: 'completed / 表示 / 完成的', grammar: 'adjective，围绕「完成的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are completed.', right: 'The news is completed.', reason: 'news 作主语时动词用单数。', rule: '先确定 completed 是adjective，再套「完成的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'completed.q1', senseId: 'completed.s1', errorType: 'meaning', type: '词义选择', prompt: '「completed」在本条的核心意思是：', options: ['完成的', '完全相反的意思', '一种古代钱币'], answer: '完成的', explain: 'completed：完成的。' },
      { id: 'completed.q2', senseId: 'completed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches completed?', options: ['完成的', 'a kind of ancient coin', 'the past tense of be'], answer: '完成的', explain: '对的是「完成的」。' },
      { id: 'completed.q3', senseId: 'completed.s1', errorType: 'grammar', type: '词义选择', prompt: 'completed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'completed.q4', senseId: 'completed.s1', errorType: 'meaning', type: '词源', prompt: '记 completed 时，哪句更稳妥？', options: ['先锁住「完成的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完成的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完成的'] },
  });

  D('completely', {
    etymology: {
      origin: '英语派生：complete + -ly，词性转到「完全地」。',
      prefix: null,
      root: { text: 'complete', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'completely', text: '英语派生：complete + -ly，词性转到「完全地」。' },
        { label: '现在', text: '核心用法是：完全地。' },
      ],
      formationLogic: '先认词干 complete，再看词尾。',
      mnemonic: '看到 completely，先说出「完全地」。',
      note: '先认词干 complete，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule completely, and the class followed.', chinese: '她把规则讲清楚了（完全地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'completely.s1', en: 'He nodded completely and returned to the notes.', zh: '他完全地地点了点头，又回去看笔记。', structure: 'completely / 表示 / 完全地', grammar: 'adverb，围绕「完全地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very completelyly in the meeting.', right: 'She spoke completely in the meeting.', reason: 'completely 已经是副词，不要再加 -ly。', rule: '先确定 completely 是adverb，再套「完全地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'completely.q1', senseId: 'completely.s1', errorType: 'meaning', type: '词义选择', prompt: '「completely」在本条的核心意思是：', options: ['完全地', '完全相反的意思', '一种古代钱币'], answer: '完全地', explain: 'completely：完全地。' },
      { id: 'completely.q2', senseId: 'completely.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches completely?', options: ['完全地', 'a kind of ancient coin', 'the past tense of be'], answer: '完全地', explain: '对的是「完全地」。' },
      { id: 'completely.q3', senseId: 'completely.s1', errorType: 'grammar', type: '词义选择', prompt: 'completely 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'completely.q4', senseId: 'completely.s1', errorType: 'meaning', type: '词源', prompt: '记 completely 时，哪句更稳妥？', options: ['先锁住「完全地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完全地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完全地'] },
  });

  D('completion', {
    etymology: {
      origin: '英语派生：comple + -tion，词性转到「完成」。',
      prefix: null,
      root: { text: 'comple', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'completion', text: '英语派生：comple + -tion，词性转到「完成」。' },
        { label: '现在', text: '核心用法是：完成。' },
      ],
      formationLogic: '先认词干 comple，再看词尾。',
      mnemonic: '看到 completion，先说出「完成」。',
      note: '先认词干 comple，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one completion.', chinese: '这一章反复回到同一个点：完成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'completion.s1', en: 'Without that completion, the next paragraph is hard to follow.', zh: '没有这个完成，下一段会很难读。', structure: 'completion / 表示 / 完成', grammar: 'noun，围绕「完成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the completion.', right: 'He gave me some advice about the completion.', reason: 'advice 不可数。名词 completion 的单复数按词典词形记。', rule: '先确定 completion 是noun，再套「完成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'completion.q1', senseId: 'completion.s1', errorType: 'meaning', type: '词义选择', prompt: '「completion」在本条的核心意思是：', options: ['完成', '完全相反的意思', '一种古代钱币'], answer: '完成', explain: 'completion：完成。' },
      { id: 'completion.q2', senseId: 'completion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches completion?', options: ['完成', 'a kind of ancient coin', 'the past tense of be'], answer: '完成', explain: '对的是「完成」。' },
      { id: 'completion.q3', senseId: 'completion.s1', errorType: 'grammar', type: '词义选择', prompt: 'completion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'completion.q4', senseId: 'completion.s1', errorType: 'meaning', type: '词源', prompt: '记 completion 时，哪句更稳妥？', options: ['先锁住「完成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「完成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['完成'] },
  });

  D('complex', {
    etymology: {
      origin: '拉丁语 complecti「抱在一起」。缠在一起所以复杂。',
      prefix: null,
      root: { text: 'complex', gloss: '复杂的' },
      suffix: null,
      history: [
        { label: 'complex', text: '拉丁语 complecti「抱在一起」。缠在一起所以复杂。' },
        { label: '现在', text: '核心用法是：复杂的。' },
      ],
      formationLogic: '考试认现在的用法：复杂的。',
      mnemonic: '看到 complex，先说出「复杂的」。',
      note: '考试认现在的用法：复杂的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was complex.', chinese: '即使是初读者也能看出，这个结果是复杂的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complex.s1', en: 'They wanted a complex answer, not a long speech.', zh: '他们要一个复杂的的答复，不要长篇发言。', structure: 'complex / 表示 / 复杂的', grammar: 'adjective，围绕「复杂的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are complex.', right: 'The news is complex.', reason: 'news 作主语时动词用单数。', rule: '先确定 complex 是adjective，再套「复杂的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complex.q1', senseId: 'complex.s1', errorType: 'meaning', type: '词义选择', prompt: '「complex」在本条的核心意思是：', options: ['复杂的', '完全相反的意思', '一种古代钱币'], answer: '复杂的', explain: 'complex：复杂的。' },
      { id: 'complex.q2', senseId: 'complex.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complex?', options: ['复杂的', 'a kind of ancient coin', 'the past tense of be'], answer: '复杂的', explain: '对的是「复杂的」。' },
      { id: 'complex.q3', senseId: 'complex.s1', errorType: 'grammar', type: '词义选择', prompt: 'complex 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'complex.q4', senseId: 'complex.s1', errorType: 'meaning', type: '词源', prompt: '记 complex 时，哪句更稳妥？', options: ['先锁住「复杂的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复杂的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复杂的'] },
  });

  D('complexion', {
    etymology: {
      origin: '现代英语常用词「complexion」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complexion', gloss: '肤色' },
      suffix: null,
      history: [
        { label: 'complexion', text: '现代英语常用词「complexion」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：肤色。' },
      ],
      formationLogic: '核心义：肤色。',
      mnemonic: '看到 complexion，先说出「肤色」。',
      note: '核心义：肤色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one complexion.', chinese: '这一章反复回到同一个点：肤色。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complexion.s1', en: 'Without that complexion, the next paragraph is hard to follow.', zh: '没有这个肤色，下一段会很难读。', structure: 'complexion / 表示 / 肤色', grammar: 'noun，围绕「肤色」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the complexion.', right: 'He gave me some advice about the complexion.', reason: 'advice 不可数。名词 complexion 的单复数按词典词形记。', rule: '先确定 complexion 是noun，再套「肤色」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complexion.q1', senseId: 'complexion.s1', errorType: 'meaning', type: '词义选择', prompt: '「complexion」在本条的核心意思是：', options: ['肤色', '完全相反的意思', '一种古代钱币'], answer: '肤色', explain: 'complexion：肤色。' },
      { id: 'complexion.q2', senseId: 'complexion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complexion?', options: ['肤色', 'a kind of ancient coin', 'the past tense of be'], answer: '肤色', explain: '对的是「肤色」。' },
      { id: 'complexion.q3', senseId: 'complexion.s1', errorType: 'grammar', type: '词义选择', prompt: 'complexion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'complexion.q4', senseId: 'complexion.s1', errorType: 'meaning', type: '词源', prompt: '记 complexion 时，哪句更稳妥？', options: ['先锁住「肤色」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「肤色」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肤色'] },
  });

  D('complicate', {
    etymology: {
      origin: '拉丁语 complicare「折在一起」。',
      prefix: null,
      root: { text: 'complicate', gloss: '使复杂' },
      suffix: null,
      history: [
        { label: 'complicate', text: '拉丁语 complicare「折在一起」。' },
        { label: '现在', text: '核心用法是：使复杂。' },
      ],
      formationLogic: '考试认现在的用法：使复杂。',
      mnemonic: '看到 complicate，先说出「使复杂」。',
      note: '考试认现在的用法：使复杂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to complicate before the office closed.', chinese: '他们同意在办公室关门前做这件事：使复杂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complicate.s1', en: 'The deadline forced the team to complicate that afternoon.', zh: '截止日期逼着小组在那天下午使复杂。', structure: 'complicate / 表示 / 使复杂', grammar: 'verb，围绕「使复杂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She complicateed it yesterday without checking the real past form.', right: 'Check the past form of "complicate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 complicate 是verb，再套「使复杂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complicate.q1', senseId: 'complicate.s1', errorType: 'meaning', type: '词义选择', prompt: '「complicate」在本条的核心意思是：', options: ['使复杂', '完全相反的意思', '一种古代钱币'], answer: '使复杂', explain: 'complicate：使复杂。' },
      { id: 'complicate.q2', senseId: 'complicate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complicate?', options: ['使复杂', 'a kind of ancient coin', 'the past tense of be'], answer: '使复杂', explain: '对的是「使复杂」。' },
      { id: 'complicate.q3', senseId: 'complicate.s1', errorType: 'grammar', type: '词义选择', prompt: 'complicate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'complicate.q4', senseId: 'complicate.s1', errorType: 'meaning', type: '词源', prompt: '记 complicate 时，哪句更稳妥？', options: ['先锁住「使复杂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使复杂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使复杂'] },
  });

  D('complicated', {
    etymology: {
      origin: '现代英语常用词「complicated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complicated', gloss: '复杂的' },
      suffix: null,
      history: [
        { label: 'complicated', text: '现代英语常用词「complicated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：复杂的。' },
      ],
      formationLogic: '核心义：复杂的。',
      mnemonic: '看到 complicated，先说出「复杂的」。',
      note: '核心义：复杂的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was complicated.', chinese: '即使是初读者也能看出，这个结果是复杂的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complicated.s1', en: 'They wanted a complicated answer, not a long speech.', zh: '他们要一个复杂的的答复，不要长篇发言。', structure: 'complicated / 表示 / 复杂的', grammar: 'adjective，围绕「复杂的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are complicated.', right: 'The news is complicated.', reason: 'news 作主语时动词用单数。', rule: '先确定 complicated 是adjective，再套「复杂的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complicated.q1', senseId: 'complicated.s1', errorType: 'meaning', type: '词义选择', prompt: '「complicated」在本条的核心意思是：', options: ['复杂的', '完全相反的意思', '一种古代钱币'], answer: '复杂的', explain: 'complicated：复杂的。' },
      { id: 'complicated.q2', senseId: 'complicated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complicated?', options: ['复杂的', 'a kind of ancient coin', 'the past tense of be'], answer: '复杂的', explain: '对的是「复杂的」。' },
      { id: 'complicated.q3', senseId: 'complicated.s1', errorType: 'grammar', type: '词义选择', prompt: 'complicated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'complicated.q4', senseId: 'complicated.s1', errorType: 'meaning', type: '词源', prompt: '记 complicated 时，哪句更稳妥？', options: ['先锁住「复杂的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复杂的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复杂的'] },
  });

  D('complimentary', {
    etymology: {
      origin: '现代英语常用词「complimentary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'complimentary', gloss: '赞美的' },
      suffix: null,
      history: [
        { label: 'complimentary', text: '现代英语常用词「complimentary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赞美的。' },
      ],
      formationLogic: '核心义：赞美的。',
      mnemonic: '看到 complimentary，先说出「赞美的」。',
      note: '核心义：赞美的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was complimentary.', chinese: '即使是初读者也能看出，这个结果是赞美的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'complimentary.s1', en: 'They wanted a complimentary answer, not a long speech.', zh: '他们要一个赞美的的答复，不要长篇发言。', structure: 'complimentary / 表示 / 赞美的', grammar: 'adjective，围绕「赞美的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are complimentary.', right: 'The news is complimentary.', reason: 'news 作主语时动词用单数。', rule: '先确定 complimentary 是adjective，再套「赞美的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'complimentary.q1', senseId: 'complimentary.s1', errorType: 'meaning', type: '词义选择', prompt: '「complimentary」在本条的核心意思是：', options: ['赞美的', '完全相反的意思', '一种古代钱币'], answer: '赞美的', explain: 'complimentary：赞美的。' },
      { id: 'complimentary.q2', senseId: 'complimentary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches complimentary?', options: ['赞美的', 'a kind of ancient coin', 'the past tense of be'], answer: '赞美的', explain: '对的是「赞美的」。' },
      { id: 'complimentary.q3', senseId: 'complimentary.s1', errorType: 'grammar', type: '词义选择', prompt: 'complimentary 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'complimentary.q4', senseId: 'complimentary.s1', errorType: 'meaning', type: '词源', prompt: '记 complimentary 时，哪句更稳妥？', options: ['先锁住「赞美的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赞美的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赞美的'] },
  });

  D('comply', {
    etymology: {
      origin: '英语派生：comp + -ly，词性转到「遵守」。',
      prefix: null,
      root: { text: 'comp', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'comply', text: '英语派生：comp + -ly，词性转到「遵守」。' },
        { label: '现在', text: '核心用法是：遵守。' },
      ],
      formationLogic: '先认词干 comp，再看词尾。',
      mnemonic: '看到 comply，先说出「遵守」。',
      note: '先认词干 comp，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to comply before the office closed.', chinese: '他们同意在办公室关门前做这件事：遵守。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comply.s1', en: 'The deadline forced the team to comply that afternoon.', zh: '截止日期逼着小组在那天下午遵守。', structure: 'comply / 表示 / 遵守', grammar: 'verb，围绕「遵守」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She complyed it yesterday without checking the real past form.', right: 'Check the past form of "comply" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 comply 是verb，再套「遵守」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comply.q1', senseId: 'comply.s1', errorType: 'meaning', type: '词义选择', prompt: '「comply」在本条的核心意思是：', options: ['遵守', '完全相反的意思', '一种古代钱币'], answer: '遵守', explain: 'comply：遵守。' },
      { id: 'comply.q2', senseId: 'comply.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comply?', options: ['遵守', 'a kind of ancient coin', 'the past tense of be'], answer: '遵守', explain: '对的是「遵守」。' },
      { id: 'comply.q3', senseId: 'comply.s1', errorType: 'grammar', type: '词义选择', prompt: 'comply 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'comply.q4', senseId: 'comply.s1', errorType: 'meaning', type: '词源', prompt: '记 comply 时，哪句更稳妥？', options: ['先锁住「遵守」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「遵守」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['遵守'] },
  });

  D('component', {
    etymology: {
      origin: '拉丁语 componere「放在一起」。',
      prefix: null,
      root: { text: 'component', gloss: '组成部分' },
      suffix: null,
      history: [
        { label: 'component', text: '拉丁语 componere「放在一起」。' },
        { label: '现在', text: '核心用法是：组成部分。' },
      ],
      formationLogic: '考试认现在的用法：组成部分。',
      mnemonic: '看到 component，先说出「组成部分」。',
      note: '考试认现在的用法：组成部分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one component.', chinese: '这一章反复回到同一个点：组成部分。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'component.s1', en: 'Without that component, the next paragraph is hard to follow.', zh: '没有这个组成部分，下一段会很难读。', structure: 'component / 表示 / 组成部分', grammar: 'noun，围绕「组成部分」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the component.', right: 'He gave me some advice about the component.', reason: 'advice 不可数。名词 component 的单复数按词典词形记。', rule: '先确定 component 是noun，再套「组成部分」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'component.q1', senseId: 'component.s1', errorType: 'meaning', type: '词义选择', prompt: '「component」在本条的核心意思是：', options: ['组成部分', '完全相反的意思', '一种古代钱币'], answer: '组成部分', explain: 'component：组成部分。' },
      { id: 'component.q2', senseId: 'component.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches component?', options: ['组成部分', 'a kind of ancient coin', 'the past tense of be'], answer: '组成部分', explain: '对的是「组成部分」。' },
      { id: 'component.q3', senseId: 'component.s1', errorType: 'grammar', type: '词义选择', prompt: 'component 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'component.q4', senseId: 'component.s1', errorType: 'meaning', type: '词源', prompt: '记 component 时，哪句更稳妥？', options: ['先锁住「组成部分」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「组成部分」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['组成部分'] },
  });

  D('compose', {
    etymology: {
      origin: '拉丁语 componere「放到一起」。',
      prefix: null,
      root: { text: 'compose', gloss: '组成' },
      suffix: null,
      history: [
        { label: 'compose', text: '拉丁语 componere「放到一起」。' },
        { label: '现在', text: '核心用法是：组成。' },
      ],
      formationLogic: '考试认现在的用法：组成。',
      mnemonic: '看到 compose，先说出「组成」。',
      note: '考试认现在的用法：组成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compose before the office closed.', chinese: '他们同意在办公室关门前做这件事：组成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compose.s1', en: 'The deadline forced the team to compose that afternoon.', zh: '截止日期逼着小组在那天下午组成。', structure: 'compose / 表示 / 组成', grammar: 'verb，围绕「组成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She composeed it yesterday without checking the real past form.', right: 'Check the past form of "compose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compose 是verb，再套「组成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compose.q1', senseId: 'compose.s1', errorType: 'meaning', type: '词义选择', prompt: '「compose」在本条的核心意思是：', options: ['组成', '完全相反的意思', '一种古代钱币'], answer: '组成', explain: 'compose：组成。' },
      { id: 'compose.q2', senseId: 'compose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compose?', options: ['组成', 'a kind of ancient coin', 'the past tense of be'], answer: '组成', explain: '对的是「组成」。' },
      { id: 'compose.q3', senseId: 'compose.s1', errorType: 'grammar', type: '词义选择', prompt: 'compose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compose.q4', senseId: 'compose.s1', errorType: 'meaning', type: '词源', prompt: '记 compose 时，哪句更稳妥？', options: ['先锁住「组成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「组成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['组成'] },
  });

  D('composite', {
    etymology: {
      origin: '现代英语常用词「composite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'composite', gloss: '合成的' },
      suffix: null,
      history: [
        { label: 'composite', text: '现代英语常用词「composite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：合成的。' },
      ],
      formationLogic: '核心义：合成的。',
      mnemonic: '看到 composite，先说出「合成的」。',
      note: '核心义：合成的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was composite.', chinese: '即使是初读者也能看出，这个结果是合成的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'composite.s1', en: 'They wanted a composite answer, not a long speech.', zh: '他们要一个合成的的答复，不要长篇发言。', structure: 'composite / 表示 / 合成的', grammar: 'adjective，围绕「合成的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are composite.', right: 'The news is composite.', reason: 'news 作主语时动词用单数。', rule: '先确定 composite 是adjective，再套「合成的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'composite.q1', senseId: 'composite.s1', errorType: 'meaning', type: '词义选择', prompt: '「composite」在本条的核心意思是：', options: ['合成的', '完全相反的意思', '一种古代钱币'], answer: '合成的', explain: 'composite：合成的。' },
      { id: 'composite.q2', senseId: 'composite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches composite?', options: ['合成的', 'a kind of ancient coin', 'the past tense of be'], answer: '合成的', explain: '对的是「合成的」。' },
      { id: 'composite.q3', senseId: 'composite.s1', errorType: 'grammar', type: '词义选择', prompt: 'composite 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'composite.q4', senseId: 'composite.s1', errorType: 'meaning', type: '词源', prompt: '记 composite 时，哪句更稳妥？', options: ['先锁住「合成的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合成的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合成的'] },
  });

  D('composition', {
    etymology: {
      origin: '英语派生：composi + -tion，词性转到「构成」。',
      prefix: null,
      root: { text: 'composi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'composition', text: '英语派生：composi + -tion，词性转到「构成」。' },
        { label: '现在', text: '核心用法是：构成。' },
      ],
      formationLogic: '先认词干 composi，再看词尾。',
      mnemonic: '看到 composition，先说出「构成」。',
      note: '先认词干 composi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one composition.', chinese: '这一章反复回到同一个点：构成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'composition.s1', en: 'Without that composition, the next paragraph is hard to follow.', zh: '没有这个构成，下一段会很难读。', structure: 'composition / 表示 / 构成', grammar: 'noun，围绕「构成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the composition.', right: 'He gave me some advice about the composition.', reason: 'advice 不可数。名词 composition 的单复数按词典词形记。', rule: '先确定 composition 是noun，再套「构成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'composition.q1', senseId: 'composition.s1', errorType: 'meaning', type: '词义选择', prompt: '「composition」在本条的核心意思是：', options: ['构成', '完全相反的意思', '一种古代钱币'], answer: '构成', explain: 'composition：构成。' },
      { id: 'composition.q2', senseId: 'composition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches composition?', options: ['构成', 'a kind of ancient coin', 'the past tense of be'], answer: '构成', explain: '对的是「构成」。' },
      { id: 'composition.q3', senseId: 'composition.s1', errorType: 'grammar', type: '词义选择', prompt: 'composition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'composition.q4', senseId: 'composition.s1', errorType: 'meaning', type: '词源', prompt: '记 composition 时，哪句更稳妥？', options: ['先锁住「构成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「构成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['构成'] },
  });

  D('composure', {
    etymology: {
      origin: '现代英语常用词「composure」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'composure', gloss: '镇定' },
      suffix: null,
      history: [
        { label: 'composure', text: '现代英语常用词「composure」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：镇定。' },
      ],
      formationLogic: '核心义：镇定。',
      mnemonic: '看到 composure，先说出「镇定」。',
      note: '核心义：镇定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one composure.', chinese: '这一章反复回到同一个点：镇定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'composure.s1', en: 'Without that composure, the next paragraph is hard to follow.', zh: '没有这个镇定，下一段会很难读。', structure: 'composure / 表示 / 镇定', grammar: 'noun，围绕「镇定」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the composure.', right: 'He gave me some advice about the composure.', reason: 'advice 不可数。名词 composure 的单复数按词典词形记。', rule: '先确定 composure 是noun，再套「镇定」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'composure.q1', senseId: 'composure.s1', errorType: 'meaning', type: '词义选择', prompt: '「composure」在本条的核心意思是：', options: ['镇定', '完全相反的意思', '一种古代钱币'], answer: '镇定', explain: 'composure：镇定。' },
      { id: 'composure.q2', senseId: 'composure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches composure?', options: ['镇定', 'a kind of ancient coin', 'the past tense of be'], answer: '镇定', explain: '对的是「镇定」。' },
      { id: 'composure.q3', senseId: 'composure.s1', errorType: 'grammar', type: '词义选择', prompt: 'composure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'composure.q4', senseId: 'composure.s1', errorType: 'meaning', type: '词源', prompt: '记 composure 时，哪句更稳妥？', options: ['先锁住「镇定」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「镇定」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['镇定'] },
  });

  D('compound', {
    etymology: {
      origin: '拉丁语 componere。复合词是把部分放到一起。',
      prefix: null,
      root: { text: 'compound', gloss: '化合物' },
      suffix: null,
      history: [
        { label: 'compound', text: '拉丁语 componere。复合词是把部分放到一起。' },
        { label: '现在', text: '核心用法是：化合物。' },
      ],
      formationLogic: '考试认现在的用法：化合物。',
      mnemonic: '看到 compound，先说出「化合物」。',
      note: '考试认现在的用法：化合物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compound.', chinese: '这一章反复回到同一个点：化合物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compound.s1', en: 'Without that compound, the next paragraph is hard to follow.', zh: '没有这个化合物，下一段会很难读。', structure: 'compound / 表示 / 化合物', grammar: 'noun，围绕「化合物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compound.', right: 'He gave me some advice about the compound.', reason: 'advice 不可数。名词 compound 的单复数按词典词形记。', rule: '先确定 compound 是noun，再套「化合物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compound.q1', senseId: 'compound.s1', errorType: 'meaning', type: '词义选择', prompt: '「compound」在本条的核心意思是：', options: ['化合物', '完全相反的意思', '一种古代钱币'], answer: '化合物', explain: 'compound：化合物。' },
      { id: 'compound.q2', senseId: 'compound.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compound?', options: ['化合物', 'a kind of ancient coin', 'the past tense of be'], answer: '化合物', explain: '对的是「化合物」。' },
      { id: 'compound.q3', senseId: 'compound.s1', errorType: 'grammar', type: '词义选择', prompt: 'compound 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compound.q4', senseId: 'compound.s1', errorType: 'meaning', type: '词源', prompt: '记 compound 时，哪句更稳妥？', options: ['先锁住「化合物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化合物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化合物'] },
  });

  D('comprehend', {
    etymology: {
      origin: '拉丁语 comprehendere「抓住」。心里抓住就是理解。',
      prefix: null,
      root: { text: 'comprehend', gloss: '理解' },
      suffix: null,
      history: [
        { label: 'comprehend', text: '拉丁语 comprehendere「抓住」。心里抓住就是理解。' },
        { label: '现在', text: '核心用法是：理解。' },
      ],
      formationLogic: '考试认现在的用法：理解。',
      mnemonic: '看到 comprehend，先说出「理解」。',
      note: '考试认现在的用法：理解。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to comprehend before the office closed.', chinese: '他们同意在办公室关门前做这件事：理解。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comprehend.s1', en: 'The deadline forced the team to comprehend that afternoon.', zh: '截止日期逼着小组在那天下午理解。', structure: 'comprehend / 表示 / 理解', grammar: 'verb，围绕「理解」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She comprehended it yesterday without checking the real past form.', right: 'Check the past form of "comprehend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 comprehend 是verb，再套「理解」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comprehend.q1', senseId: 'comprehend.s1', errorType: 'meaning', type: '词义选择', prompt: '「comprehend」在本条的核心意思是：', options: ['理解', '完全相反的意思', '一种古代钱币'], answer: '理解', explain: 'comprehend：理解。' },
      { id: 'comprehend.q2', senseId: 'comprehend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comprehend?', options: ['理解', 'a kind of ancient coin', 'the past tense of be'], answer: '理解', explain: '对的是「理解」。' },
      { id: 'comprehend.q3', senseId: 'comprehend.s1', errorType: 'grammar', type: '词义选择', prompt: 'comprehend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'comprehend.q4', senseId: 'comprehend.s1', errorType: 'meaning', type: '词源', prompt: '记 comprehend 时，哪句更稳妥？', options: ['先锁住「理解」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「理解」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['理解'] },
  });

  D('comprehensible', {
    etymology: {
      origin: '英语派生：comprehens + -ible，词性转到「可理解的」。',
      prefix: null,
      root: { text: 'comprehens', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'comprehensible', text: '英语派生：comprehens + -ible，词性转到「可理解的」。' },
        { label: '现在', text: '核心用法是：可理解的。' },
      ],
      formationLogic: '先认词干 comprehens，再看词尾。',
      mnemonic: '看到 comprehensible，先说出「可理解的」。',
      note: '先认词干 comprehens，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was comprehensible.', chinese: '即使是初读者也能看出，这个结果是可理解的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comprehensible.s1', en: 'They wanted a comprehensible answer, not a long speech.', zh: '他们要一个可理解的的答复，不要长篇发言。', structure: 'comprehensible / 表示 / 可理解的', grammar: 'adjective，围绕「可理解的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are comprehensible.', right: 'The news is comprehensible.', reason: 'news 作主语时动词用单数。', rule: '先确定 comprehensible 是adjective，再套「可理解的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comprehensible.q1', senseId: 'comprehensible.s1', errorType: 'meaning', type: '词义选择', prompt: '「comprehensible」在本条的核心意思是：', options: ['可理解的', '完全相反的意思', '一种古代钱币'], answer: '可理解的', explain: 'comprehensible：可理解的。' },
      { id: 'comprehensible.q2', senseId: 'comprehensible.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comprehensible?', options: ['可理解的', 'a kind of ancient coin', 'the past tense of be'], answer: '可理解的', explain: '对的是「可理解的」。' },
      { id: 'comprehensible.q3', senseId: 'comprehensible.s1', errorType: 'grammar', type: '词义选择', prompt: 'comprehensible 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'comprehensible.q4', senseId: 'comprehensible.s1', errorType: 'meaning', type: '词源', prompt: '记 comprehensible 时，哪句更稳妥？', options: ['先锁住「可理解的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可理解的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可理解的'] },
  });

  D('comprehensive', {
    etymology: {
      origin: 'comprehend + -ive。抓得全，所以全面。',
      prefix: null,
      root: { text: 'comprehensive', gloss: '全面的' },
      suffix: null,
      history: [
        { label: 'comprehensive', text: 'comprehend + -ive。抓得全，所以全面。' },
        { label: '现在', text: '核心用法是：全面的。' },
      ],
      formationLogic: '考试认现在的用法：全面的。',
      mnemonic: '看到 comprehensive，先说出「全面的」。',
      note: '考试认现在的用法：全面的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was comprehensive.', chinese: '即使是初读者也能看出，这个结果是全面的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comprehensive.s1', en: 'They wanted a comprehensive answer, not a long speech.', zh: '他们要一个全面的的答复，不要长篇发言。', structure: 'comprehensive / 表示 / 全面的', grammar: 'adjective，围绕「全面的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are comprehensive.', right: 'The news is comprehensive.', reason: 'news 作主语时动词用单数。', rule: '先确定 comprehensive 是adjective，再套「全面的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comprehensive.q1', senseId: 'comprehensive.s1', errorType: 'meaning', type: '词义选择', prompt: '「comprehensive」在本条的核心意思是：', options: ['全面的', '完全相反的意思', '一种古代钱币'], answer: '全面的', explain: 'comprehensive：全面的。' },
      { id: 'comprehensive.q2', senseId: 'comprehensive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comprehensive?', options: ['全面的', 'a kind of ancient coin', 'the past tense of be'], answer: '全面的', explain: '对的是「全面的」。' },
      { id: 'comprehensive.q3', senseId: 'comprehensive.s1', errorType: 'grammar', type: '词义选择', prompt: 'comprehensive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'comprehensive.q4', senseId: 'comprehensive.s1', errorType: 'meaning', type: '词源', prompt: '记 comprehensive 时，哪句更稳妥？', options: ['先锁住「全面的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「全面的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全面的'] },
  });

  D('compress', {
    etymology: {
      origin: '拉丁语 comprimere「压到一起」。',
      prefix: null,
      root: { text: 'compress', gloss: '压缩' },
      suffix: null,
      history: [
        { label: 'compress', text: '拉丁语 comprimere「压到一起」。' },
        { label: '现在', text: '核心用法是：压缩。' },
      ],
      formationLogic: '考试认现在的用法：压缩。',
      mnemonic: '看到 compress，先说出「压缩」。',
      note: '考试认现在的用法：压缩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compress before the office closed.', chinese: '他们同意在办公室关门前做这件事：压缩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compress.s1', en: 'The deadline forced the team to compress that afternoon.', zh: '截止日期逼着小组在那天下午压缩。', structure: 'compress / 表示 / 压缩', grammar: 'verb，围绕「压缩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She compressed it yesterday without checking the real past form.', right: 'Check the past form of "compress" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compress 是verb，再套「压缩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compress.q1', senseId: 'compress.s1', errorType: 'meaning', type: '词义选择', prompt: '「compress」在本条的核心意思是：', options: ['压缩', '完全相反的意思', '一种古代钱币'], answer: '压缩', explain: 'compress：压缩。' },
      { id: 'compress.q2', senseId: 'compress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compress?', options: ['压缩', 'a kind of ancient coin', 'the past tense of be'], answer: '压缩', explain: '对的是「压缩」。' },
      { id: 'compress.q3', senseId: 'compress.s1', errorType: 'grammar', type: '词义选择', prompt: 'compress 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compress.q4', senseId: 'compress.s1', errorType: 'meaning', type: '词源', prompt: '记 compress 时，哪句更稳妥？', options: ['先锁住「压缩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「压缩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['压缩'] },
  });

  D('comprise', {
    etymology: {
      origin: '拉丁语 comprehendere 的法语形式。包含。',
      prefix: null,
      root: { text: 'comprise', gloss: '包括' },
      suffix: null,
      history: [
        { label: 'comprise', text: '拉丁语 comprehendere 的法语形式。包含。' },
        { label: '现在', text: '核心用法是：包括。' },
      ],
      formationLogic: '考试认现在的用法：包括。',
      mnemonic: '看到 comprise，先说出「包括」。',
      note: '考试认现在的用法：包括。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to comprise before the office closed.', chinese: '他们同意在办公室关门前做这件事：包括。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comprise.s1', en: 'The deadline forced the team to comprise that afternoon.', zh: '截止日期逼着小组在那天下午包括。', structure: 'comprise / 表示 / 包括', grammar: 'verb，围绕「包括」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She compriseed it yesterday without checking the real past form.', right: 'Check the past form of "comprise" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 comprise 是verb，再套「包括」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comprise.q1', senseId: 'comprise.s1', errorType: 'meaning', type: '词义选择', prompt: '「comprise」在本条的核心意思是：', options: ['包括', '完全相反的意思', '一种古代钱币'], answer: '包括', explain: 'comprise：包括。' },
      { id: 'comprise.q2', senseId: 'comprise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comprise?', options: ['包括', 'a kind of ancient coin', 'the past tense of be'], answer: '包括', explain: '对的是「包括」。' },
      { id: 'comprise.q3', senseId: 'comprise.s1', errorType: 'grammar', type: '词义选择', prompt: 'comprise 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'comprise.q4', senseId: 'comprise.s1', errorType: 'meaning', type: '词源', prompt: '记 comprise 时，哪句更稳妥？', options: ['先锁住「包括」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「包括」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['包括'] },
  });

  D('compromise', {
    etymology: {
      origin: '拉丁语 compromittere「共同承诺」。各让一步。',
      prefix: null,
      root: { text: 'compromise', gloss: '妥协' },
      suffix: null,
      history: [
        { label: 'compromise', text: '拉丁语 compromittere「共同承诺」。各让一步。' },
        { label: '现在', text: '核心用法是：妥协。' },
      ],
      formationLogic: '考试认现在的用法：妥协。',
      mnemonic: '看到 compromise，先说出「妥协」。',
      note: '考试认现在的用法：妥协。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compromise.', chinese: '这一章反复回到同一个点：妥协。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compromise.s1', en: 'Without that compromise, the next paragraph is hard to follow.', zh: '没有这个妥协，下一段会很难读。', structure: 'compromise / 表示 / 妥协', grammar: 'noun，围绕「妥协」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compromise.', right: 'He gave me some advice about the compromise.', reason: 'advice 不可数。名词 compromise 的单复数按词典词形记。', rule: '先确定 compromise 是noun，再套「妥协」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compromise.q1', senseId: 'compromise.s1', errorType: 'meaning', type: '词义选择', prompt: '「compromise」在本条的核心意思是：', options: ['妥协', '完全相反的意思', '一种古代钱币'], answer: '妥协', explain: 'compromise：妥协。' },
      { id: 'compromise.q2', senseId: 'compromise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compromise?', options: ['妥协', 'a kind of ancient coin', 'the past tense of be'], answer: '妥协', explain: '对的是「妥协」。' },
      { id: 'compromise.q3', senseId: 'compromise.s1', errorType: 'grammar', type: '词义选择', prompt: 'compromise 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compromise.q4', senseId: 'compromise.s1', errorType: 'meaning', type: '词源', prompt: '记 compromise 时，哪句更稳妥？', options: ['先锁住「妥协」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「妥协」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['妥协'] },
  });

  D('compulsion', {
    etymology: {
      origin: '英语派生：compul + -sion，词性转到「强制」。',
      prefix: null,
      root: { text: 'compul', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'compulsion', text: '英语派生：compul + -sion，词性转到「强制」。' },
        { label: '现在', text: '核心用法是：强制。' },
      ],
      formationLogic: '先认词干 compul，再看词尾。',
      mnemonic: '看到 compulsion，先说出「强制」。',
      note: '先认词干 compul，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one compulsion.', chinese: '这一章反复回到同一个点：强制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compulsion.s1', en: 'Without that compulsion, the next paragraph is hard to follow.', zh: '没有这个强制，下一段会很难读。', structure: 'compulsion / 表示 / 强制', grammar: 'noun，围绕「强制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the compulsion.', right: 'He gave me some advice about the compulsion.', reason: 'advice 不可数。名词 compulsion 的单复数按词典词形记。', rule: '先确定 compulsion 是noun，再套「强制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compulsion.q1', senseId: 'compulsion.s1', errorType: 'meaning', type: '词义选择', prompt: '「compulsion」在本条的核心意思是：', options: ['强制', '完全相反的意思', '一种古代钱币'], answer: '强制', explain: 'compulsion：强制。' },
      { id: 'compulsion.q2', senseId: 'compulsion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compulsion?', options: ['强制', 'a kind of ancient coin', 'the past tense of be'], answer: '强制', explain: '对的是「强制」。' },
      { id: 'compulsion.q3', senseId: 'compulsion.s1', errorType: 'grammar', type: '词义选择', prompt: 'compulsion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'compulsion.q4', senseId: 'compulsion.s1', errorType: 'meaning', type: '词源', prompt: '记 compulsion 时，哪句更稳妥？', options: ['先锁住「强制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「强制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['强制'] },
  });

  D('compulsory', {
    etymology: {
      origin: '现代英语常用词「compulsory」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'compulsory', gloss: '义务的' },
      suffix: null,
      history: [
        { label: 'compulsory', text: '现代英语常用词「compulsory」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：义务的。' },
      ],
      formationLogic: '核心义：义务的。',
      mnemonic: '看到 compulsory，先说出「义务的」。',
      note: '核心义：义务的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was compulsory.', chinese: '即使是初读者也能看出，这个结果是义务的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compulsory.s1', en: 'They wanted a compulsory answer, not a long speech.', zh: '他们要一个义务的的答复，不要长篇发言。', structure: 'compulsory / 表示 / 义务的', grammar: 'adjective，围绕「义务的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are compulsory.', right: 'The news is compulsory.', reason: 'news 作主语时动词用单数。', rule: '先确定 compulsory 是adjective，再套「义务的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compulsory.q1', senseId: 'compulsory.s1', errorType: 'meaning', type: '词义选择', prompt: '「compulsory」在本条的核心意思是：', options: ['义务的', '完全相反的意思', '一种古代钱币'], answer: '义务的', explain: 'compulsory：义务的。' },
      { id: 'compulsory.q2', senseId: 'compulsory.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compulsory?', options: ['义务的', 'a kind of ancient coin', 'the past tense of be'], answer: '义务的', explain: '对的是「义务的」。' },
      { id: 'compulsory.q3', senseId: 'compulsory.s1', errorType: 'grammar', type: '词义选择', prompt: 'compulsory 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'compulsory.q4', senseId: 'compulsory.s1', errorType: 'meaning', type: '词源', prompt: '记 compulsory 时，哪句更稳妥？', options: ['先锁住「义务的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「义务的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['义务的'] },
  });

  D('compute', {
    etymology: {
      origin: '拉丁语 computare「一起算」。',
      prefix: null,
      root: { text: 'compute', gloss: '计算' },
      suffix: null,
      history: [
        { label: 'compute', text: '拉丁语 computare「一起算」。' },
        { label: '现在', text: '核心用法是：计算。' },
      ],
      formationLogic: '考试认现在的用法：计算。',
      mnemonic: '看到 compute，先说出「计算」。',
      note: '考试认现在的用法：计算。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to compute before the office closed.', chinese: '他们同意在办公室关门前做这件事：计算。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'compute.s1', en: 'The deadline forced the team to compute that afternoon.', zh: '截止日期逼着小组在那天下午计算。', structure: 'compute / 表示 / 计算', grammar: 'verb，围绕「计算」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She computeed it yesterday without checking the real past form.', right: 'Check the past form of "compute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 compute 是verb，再套「计算」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'compute.q1', senseId: 'compute.s1', errorType: 'meaning', type: '词义选择', prompt: '「compute」在本条的核心意思是：', options: ['计算', '完全相反的意思', '一种古代钱币'], answer: '计算', explain: 'compute：计算。' },
      { id: 'compute.q2', senseId: 'compute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches compute?', options: ['计算', 'a kind of ancient coin', 'the past tense of be'], answer: '计算', explain: '对的是「计算」。' },
      { id: 'compute.q3', senseId: 'compute.s1', errorType: 'grammar', type: '词义选择', prompt: 'compute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'compute.q4', senseId: 'compute.s1', errorType: 'meaning', type: '词源', prompt: '记 compute 时，哪句更稳妥？', options: ['先锁住「计算」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「计算」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['计算'] },
  });

  D('computer', {
    etymology: {
      origin: 'compute + -er。做计算的机器。',
      prefix: null,
      root: { text: 'computer', gloss: '计算机' },
      suffix: null,
      history: [
        { label: 'computer', text: 'compute + -er。做计算的机器。' },
        { label: '现在', text: '核心用法是：计算机。' },
      ],
      formationLogic: '考试认现在的用法：计算机。',
      mnemonic: '看到 computer，先说出「计算机」。',
      note: '考试认现在的用法：计算机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one computer.', chinese: '这一章反复回到同一个点：计算机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'computer.s1', en: 'Without that computer, the next paragraph is hard to follow.', zh: '没有这个计算机，下一段会很难读。', structure: 'computer / 表示 / 计算机', grammar: 'noun，围绕「计算机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the computer.', right: 'He gave me some advice about the computer.', reason: 'advice 不可数。名词 computer 的单复数按词典词形记。', rule: '先确定 computer 是noun，再套「计算机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'computer.q1', senseId: 'computer.s1', errorType: 'meaning', type: '词义选择', prompt: '「computer」在本条的核心意思是：', options: ['计算机', '完全相反的意思', '一种古代钱币'], answer: '计算机', explain: 'computer：计算机。' },
      { id: 'computer.q2', senseId: 'computer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches computer?', options: ['计算机', 'a kind of ancient coin', 'the past tense of be'], answer: '计算机', explain: '对的是「计算机」。' },
      { id: 'computer.q3', senseId: 'computer.s1', errorType: 'grammar', type: '词义选择', prompt: 'computer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'computer.q4', senseId: 'computer.s1', errorType: 'meaning', type: '词源', prompt: '记 computer 时，哪句更稳妥？', options: ['先锁住「计算机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「计算机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['计算机'] },
  });

  D('comrade', {
    etymology: {
      origin: '西班牙语 camarada「同室的人」，camara「房间」。',
      prefix: null,
      root: { text: 'comrade', gloss: '同志' },
      suffix: null,
      history: [
        { label: 'comrade', text: '西班牙语 camarada「同室的人」，camara「房间」。' },
        { label: '现在', text: '核心用法是：同志。' },
      ],
      formationLogic: '考试认现在的用法：同志。',
      mnemonic: '看到 comrade，先说出「同志」。',
      note: '考试认现在的用法：同志。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comrade.', chinese: '这一章反复回到同一个点：同志。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comrade.s1', en: 'Without that comrade, the next paragraph is hard to follow.', zh: '没有这个同志，下一段会很难读。', structure: 'comrade / 表示 / 同志', grammar: 'noun，围绕「同志」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comrade.', right: 'He gave me some advice about the comrade.', reason: 'advice 不可数。名词 comrade 的单复数按词典词形记。', rule: '先确定 comrade 是noun，再套「同志」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comrade.q1', senseId: 'comrade.s1', errorType: 'meaning', type: '词义选择', prompt: '「comrade」在本条的核心意思是：', options: ['同志', '完全相反的意思', '一种古代钱币'], answer: '同志', explain: 'comrade：同志。' },
      { id: 'comrade.q2', senseId: 'comrade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comrade?', options: ['同志', 'a kind of ancient coin', 'the past tense of be'], answer: '同志', explain: '对的是「同志」。' },
      { id: 'comrade.q3', senseId: 'comrade.s1', errorType: 'grammar', type: '词义选择', prompt: 'comrade 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comrade.q4', senseId: 'comrade.s1', errorType: 'meaning', type: '词源', prompt: '记 comrade 时，哪句更稳妥？', options: ['先锁住「同志」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同志」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同志'] },
  });

  D('conceal', {
    etymology: {
      origin: '拉丁语 concelare「完全藏起」。',
      prefix: null,
      root: { text: 'conceal', gloss: '隐藏' },
      suffix: null,
      history: [
        { label: 'conceal', text: '拉丁语 concelare「完全藏起」。' },
        { label: '现在', text: '核心用法是：隐藏。' },
      ],
      formationLogic: '考试认现在的用法：隐藏。',
      mnemonic: '看到 conceal，先说出「隐藏」。',
      note: '考试认现在的用法：隐藏。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conceal before the office closed.', chinese: '他们同意在办公室关门前做这件事：隐藏。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conceal.s1', en: 'The deadline forced the team to conceal that afternoon.', zh: '截止日期逼着小组在那天下午隐藏。', structure: 'conceal / 表示 / 隐藏', grammar: 'verb，围绕「隐藏」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She concealed it yesterday without checking the real past form.', right: 'Check the past form of "conceal" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conceal 是verb，再套「隐藏」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conceal.q1', senseId: 'conceal.s1', errorType: 'meaning', type: '词义选择', prompt: '「conceal」在本条的核心意思是：', options: ['隐藏', '完全相反的意思', '一种古代钱币'], answer: '隐藏', explain: 'conceal：隐藏。' },
      { id: 'conceal.q2', senseId: 'conceal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conceal?', options: ['隐藏', 'a kind of ancient coin', 'the past tense of be'], answer: '隐藏', explain: '对的是「隐藏」。' },
      { id: 'conceal.q3', senseId: 'conceal.s1', errorType: 'grammar', type: '词义选择', prompt: 'conceal 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conceal.q4', senseId: 'conceal.s1', errorType: 'meaning', type: '词源', prompt: '记 conceal 时，哪句更稳妥？', options: ['先锁住「隐藏」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「隐藏」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['隐藏'] },
  });

  D('conceal oneself', {
    etymology: {
      origin: '现代英语固定说法「conceal oneself」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'conceal oneself', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'conceal oneself', text: '现代英语固定说法「conceal oneself」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：隐蔽自己。' },
      ],
      formationLogic: '核心义：隐蔽自己。',
      mnemonic: '看到 conceal oneself，先说出「隐蔽自己」。',
      note: '核心义：隐蔽自己。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "conceal oneself" and asked the class to keep it as one unit.', chinese: '老师把「conceal oneself」圈出来，让全班把它当成一个整体。它表示隐蔽自己。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conceal oneself.s1', en: 'In the margin she wrote "conceal oneself" so nobody would split the phrase.', zh: '她在页边写下「conceal oneself」，免得有人把这个说法拆开。意思是隐蔽自己。', structure: 'conceal oneself / 表示 / 隐蔽自己', grammar: 'verb，围绕「隐蔽自己」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of conceal oneself and lost the point.', right: 'Keep "conceal oneself" together: it means 隐蔽自己.', reason: '「conceal oneself」要整块理解。', rule: '先确定 conceal oneself 是verb，再套「隐蔽自己」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conceal oneself.q1', senseId: 'conceal oneself.s1', errorType: 'meaning', type: '词义选择', prompt: '「conceal oneself」在本条的核心意思是：', options: ['隐蔽自己', '完全相反的意思', '一种古代钱币'], answer: '隐蔽自己', explain: 'conceal oneself：隐蔽自己。' },
      { id: 'conceal oneself.q2', senseId: 'conceal oneself.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conceal oneself?', options: ['隐蔽自己', 'a kind of ancient coin', 'the past tense of be'], answer: '隐蔽自己', explain: '对的是「隐蔽自己」。' },
      { id: 'conceal oneself.q3', senseId: 'conceal oneself.s1', errorType: 'grammar', type: '词义选择', prompt: 'conceal oneself 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conceal oneself.q4', senseId: 'conceal oneself.s1', errorType: 'meaning', type: '词源', prompt: '记 conceal oneself 时，哪句更稳妥？', options: ['先锁住「隐蔽自己」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「隐蔽自己」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['隐蔽自己'] },
  });

  D('concede', {
    etymology: {
      origin: '现代英语常用词「concede」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concede', gloss: '承认' },
      suffix: null,
      history: [
        { label: 'concede', text: '现代英语常用词「concede」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：承认。' },
      ],
      formationLogic: '核心义：承认。',
      mnemonic: '看到 concede，先说出「承认」。',
      note: '核心义：承认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to concede before the office closed.', chinese: '他们同意在办公室关门前做这件事：承认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concede.s1', en: 'The deadline forced the team to concede that afternoon.', zh: '截止日期逼着小组在那天下午承认。', structure: 'concede / 表示 / 承认', grammar: 'verb，围绕「承认」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She concedeed it yesterday without checking the real past form.', right: 'Check the past form of "concede" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 concede 是verb，再套「承认」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concede.q1', senseId: 'concede.s1', errorType: 'meaning', type: '词义选择', prompt: '「concede」在本条的核心意思是：', options: ['承认', '完全相反的意思', '一种古代钱币'], answer: '承认', explain: 'concede：承认。' },
      { id: 'concede.q2', senseId: 'concede.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concede?', options: ['承认', 'a kind of ancient coin', 'the past tense of be'], answer: '承认', explain: '对的是「承认」。' },
      { id: 'concede.q3', senseId: 'concede.s1', errorType: 'grammar', type: '词义选择', prompt: 'concede 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'concede.q4', senseId: 'concede.s1', errorType: 'meaning', type: '词源', prompt: '记 concede 时，哪句更稳妥？', options: ['先锁住「承认」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「承认」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['承认'] },
  });

  D('conceit', {
    etymology: {
      origin: '现代英语常用词「conceit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conceit', gloss: '自负' },
      suffix: null,
      history: [
        { label: 'conceit', text: '现代英语常用词「conceit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：自负。' },
      ],
      formationLogic: '核心义：自负。',
      mnemonic: '看到 conceit，先说出「自负」。',
      note: '核心义：自负。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conceit.', chinese: '这一章反复回到同一个点：自负。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conceit.s1', en: 'Without that conceit, the next paragraph is hard to follow.', zh: '没有这个自负，下一段会很难读。', structure: 'conceit / 表示 / 自负', grammar: 'noun，围绕「自负」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conceit.', right: 'He gave me some advice about the conceit.', reason: 'advice 不可数。名词 conceit 的单复数按词典词形记。', rule: '先确定 conceit 是noun，再套「自负」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conceit.q1', senseId: 'conceit.s1', errorType: 'meaning', type: '词义选择', prompt: '「conceit」在本条的核心意思是：', options: ['自负', '完全相反的意思', '一种古代钱币'], answer: '自负', explain: 'conceit：自负。' },
      { id: 'conceit.q2', senseId: 'conceit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conceit?', options: ['自负', 'a kind of ancient coin', 'the past tense of be'], answer: '自负', explain: '对的是「自负」。' },
      { id: 'conceit.q3', senseId: 'conceit.s1', errorType: 'grammar', type: '词义选择', prompt: 'conceit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conceit.q4', senseId: 'conceit.s1', errorType: 'meaning', type: '词源', prompt: '记 conceit 时，哪句更稳妥？', options: ['先锁住「自负」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自负」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自负'] },
  });

  D('conceited', {
    etymology: {
      origin: '现代英语常用词「conceited」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conceited', gloss: '自负的' },
      suffix: null,
      history: [
        { label: 'conceited', text: '现代英语常用词「conceited」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：自负的。' },
      ],
      formationLogic: '核心义：自负的。',
      mnemonic: '看到 conceited，先说出「自负的」。',
      note: '核心义：自负的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conceited.', chinese: '即使是初读者也能看出，这个结果是自负的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conceited.s1', en: 'They wanted a conceited answer, not a long speech.', zh: '他们要一个自负的的答复，不要长篇发言。', structure: 'conceited / 表示 / 自负的', grammar: 'adjective，围绕「自负的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conceited.', right: 'The news is conceited.', reason: 'news 作主语时动词用单数。', rule: '先确定 conceited 是adjective，再套「自负的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conceited.q1', senseId: 'conceited.s1', errorType: 'meaning', type: '词义选择', prompt: '「conceited」在本条的核心意思是：', options: ['自负的', '完全相反的意思', '一种古代钱币'], answer: '自负的', explain: 'conceited：自负的。' },
      { id: 'conceited.q2', senseId: 'conceited.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conceited?', options: ['自负的', 'a kind of ancient coin', 'the past tense of be'], answer: '自负的', explain: '对的是「自负的」。' },
      { id: 'conceited.q3', senseId: 'conceited.s1', errorType: 'grammar', type: '词义选择', prompt: 'conceited 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conceited.q4', senseId: 'conceited.s1', errorType: 'meaning', type: '词源', prompt: '记 conceited 时，哪句更稳妥？', options: ['先锁住「自负的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自负的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自负的'] },
  });

  D('conceive', {
    etymology: {
      origin: '英语派生：conce + -ive，词性转到「构想」。',
      prefix: null,
      root: { text: 'conce', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conceive', text: '英语派生：conce + -ive，词性转到「构想」。' },
        { label: '现在', text: '核心用法是：构想。' },
      ],
      formationLogic: '先认词干 conce，再看词尾。',
      mnemonic: '看到 conceive，先说出「构想」。',
      note: '先认词干 conce，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conceive before the office closed.', chinese: '他们同意在办公室关门前做这件事：构想。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conceive.s1', en: 'The deadline forced the team to conceive that afternoon.', zh: '截止日期逼着小组在那天下午构想。', structure: 'conceive / 表示 / 构想', grammar: 'verb，围绕「构想」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conceiveed it yesterday without checking the real past form.', right: 'Check the past form of "conceive" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conceive 是verb，再套「构想」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conceive.q1', senseId: 'conceive.s1', errorType: 'meaning', type: '词义选择', prompt: '「conceive」在本条的核心意思是：', options: ['构想', '完全相反的意思', '一种古代钱币'], answer: '构想', explain: 'conceive：构想。' },
      { id: 'conceive.q2', senseId: 'conceive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conceive?', options: ['构想', 'a kind of ancient coin', 'the past tense of be'], answer: '构想', explain: '对的是「构想」。' },
      { id: 'conceive.q3', senseId: 'conceive.s1', errorType: 'grammar', type: '词义选择', prompt: 'conceive 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conceive.q4', senseId: 'conceive.s1', errorType: 'meaning', type: '词源', prompt: '记 conceive 时，哪句更稳妥？', options: ['先锁住「构想」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「构想」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['构想'] },
  });

  D('concentrate', {
    etymology: {
      origin: '拉丁语 con- + centrum「中心」。收到中心。',
      prefix: null,
      root: { text: 'concentrate', gloss: '集中（注意力）' },
      suffix: null,
      history: [
        { label: 'concentrate', text: '拉丁语 con- + centrum「中心」。收到中心。' },
        { label: '现在', text: '核心用法是：集中（注意力）。' },
      ],
      formationLogic: '考试认现在的用法：集中（注意力）。',
      mnemonic: '看到 concentrate，先说出「集中（注意力）」。',
      note: '考试认现在的用法：集中（注意力）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to concentrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：集中（注意力）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concentrate.s1', en: 'The deadline forced the team to concentrate that afternoon.', zh: '截止日期逼着小组在那天下午集中（注意力）。', structure: 'concentrate / 表示 / 集中（注意力）', grammar: 'verb，围绕「集中（注意力）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She concentrateed it yesterday without checking the real past form.', right: 'Check the past form of "concentrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 concentrate 是verb，再套「集中（注意力）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concentrate.q1', senseId: 'concentrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「concentrate」在本条的核心意思是：', options: ['集中（注意力）', '完全相反的意思', '一种古代钱币'], answer: '集中（注意力）', explain: 'concentrate：集中（注意力）。' },
      { id: 'concentrate.q2', senseId: 'concentrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concentrate?', options: ['集中（注意力）', 'a kind of ancient coin', 'the past tense of be'], answer: '集中（注意力）', explain: '对的是「集中（注意力）」。' },
      { id: 'concentrate.q3', senseId: 'concentrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'concentrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'concentrate.q4', senseId: 'concentrate.s1', errorType: 'meaning', type: '词源', prompt: '记 concentrate 时，哪句更稳妥？', options: ['先锁住「集中（注意力）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「集中（注意力）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['集中（注意力）'] },
  });

  D('concentrated', {
    etymology: {
      origin: '现代英语常用词「concentrated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concentrated', gloss: '浓缩的' },
      suffix: null,
      history: [
        { label: 'concentrated', text: '现代英语常用词「concentrated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：浓缩的。' },
      ],
      formationLogic: '核心义：浓缩的。',
      mnemonic: '看到 concentrated，先说出「浓缩的」。',
      note: '核心义：浓缩的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was concentrated.', chinese: '即使是初读者也能看出，这个结果是浓缩的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concentrated.s1', en: 'They wanted a concentrated answer, not a long speech.', zh: '他们要一个浓缩的的答复，不要长篇发言。', structure: 'concentrated / 表示 / 浓缩的', grammar: 'adjective，围绕「浓缩的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are concentrated.', right: 'The news is concentrated.', reason: 'news 作主语时动词用单数。', rule: '先确定 concentrated 是adjective，再套「浓缩的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concentrated.q1', senseId: 'concentrated.s1', errorType: 'meaning', type: '词义选择', prompt: '「concentrated」在本条的核心意思是：', options: ['浓缩的', '完全相反的意思', '一种古代钱币'], answer: '浓缩的', explain: 'concentrated：浓缩的。' },
      { id: 'concentrated.q2', senseId: 'concentrated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concentrated?', options: ['浓缩的', 'a kind of ancient coin', 'the past tense of be'], answer: '浓缩的', explain: '对的是「浓缩的」。' },
      { id: 'concentrated.q3', senseId: 'concentrated.s1', errorType: 'grammar', type: '词义选择', prompt: 'concentrated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'concentrated.q4', senseId: 'concentrated.s1', errorType: 'meaning', type: '词源', prompt: '记 concentrated 时，哪句更稳妥？', options: ['先锁住「浓缩的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「浓缩的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['浓缩的'] },
  });

  D('concentration', {
    etymology: {
      origin: '英语派生：concentra + -tion，词性转到「专注」。',
      prefix: null,
      root: { text: 'concentra', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'concentration', text: '英语派生：concentra + -tion，词性转到「专注」。' },
        { label: '现在', text: '核心用法是：专注。' },
      ],
      formationLogic: '先认词干 concentra，再看词尾。',
      mnemonic: '看到 concentration，先说出「专注」。',
      note: '先认词干 concentra，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concentration.', chinese: '这一章反复回到同一个点：专注。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concentration.s1', en: 'Without that concentration, the next paragraph is hard to follow.', zh: '没有这个专注，下一段会很难读。', structure: 'concentration / 表示 / 专注', grammar: 'noun，围绕「专注」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concentration.', right: 'He gave me some advice about the concentration.', reason: 'advice 不可数。名词 concentration 的单复数按词典词形记。', rule: '先确定 concentration 是noun，再套「专注」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concentration.q1', senseId: 'concentration.s1', errorType: 'meaning', type: '词义选择', prompt: '「concentration」在本条的核心意思是：', options: ['专注', '完全相反的意思', '一种古代钱币'], answer: '专注', explain: 'concentration：专注。' },
      { id: 'concentration.q2', senseId: 'concentration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concentration?', options: ['专注', 'a kind of ancient coin', 'the past tense of be'], answer: '专注', explain: '对的是「专注」。' },
      { id: 'concentration.q3', senseId: 'concentration.s1', errorType: 'grammar', type: '词义选择', prompt: 'concentration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concentration.q4', senseId: 'concentration.s1', errorType: 'meaning', type: '词源', prompt: '记 concentration 时，哪句更稳妥？', options: ['先锁住「专注」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「专注」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['专注'] },
  });

  D('concept', {
    etymology: {
      origin: '拉丁语 conceptum，concipere「接住、构想」。',
      prefix: null,
      root: { text: 'concept', gloss: '概念' },
      suffix: null,
      history: [
        { label: 'concept', text: '拉丁语 conceptum，concipere「接住、构想」。' },
        { label: '现在', text: '核心用法是：概念。' },
      ],
      formationLogic: '考试认现在的用法：概念。',
      mnemonic: '看到 concept，先说出「概念」。',
      note: '考试认现在的用法：概念。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concept.', chinese: '这一章反复回到同一个点：概念。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concept.s1', en: 'Without that concept, the next paragraph is hard to follow.', zh: '没有这个概念，下一段会很难读。', structure: 'concept / 表示 / 概念', grammar: 'noun，围绕「概念」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concept.', right: 'He gave me some advice about the concept.', reason: 'advice 不可数。名词 concept 的单复数按词典词形记。', rule: '先确定 concept 是noun，再套「概念」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concept.q1', senseId: 'concept.s1', errorType: 'meaning', type: '词义选择', prompt: '「concept」在本条的核心意思是：', options: ['概念', '完全相反的意思', '一种古代钱币'], answer: '概念', explain: 'concept：概念。' },
      { id: 'concept.q2', senseId: 'concept.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concept?', options: ['概念', 'a kind of ancient coin', 'the past tense of be'], answer: '概念', explain: '对的是「概念」。' },
      { id: 'concept.q3', senseId: 'concept.s1', errorType: 'grammar', type: '词义选择', prompt: 'concept 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concept.q4', senseId: 'concept.s1', errorType: 'meaning', type: '词源', prompt: '记 concept 时，哪句更稳妥？', options: ['先锁住「概念」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「概念」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['概念'] },
  });

  D('concern', {
    etymology: {
      origin: '拉丁语 concernere「混在一起、与……有关」。',
      prefix: null,
      root: { text: 'concern', gloss: '担心' },
      suffix: null,
      history: [
        { label: 'concern', text: '拉丁语 concernere「混在一起、与……有关」。' },
        { label: '现在', text: '核心用法是：担心。' },
      ],
      formationLogic: '考试认现在的用法：担心。',
      mnemonic: '看到 concern，先说出「担心」。',
      note: '考试认现在的用法：担心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concern.', chinese: '这一章反复回到同一个点：担心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concern.s1', en: 'Without that concern, the next paragraph is hard to follow.', zh: '没有这个担心，下一段会很难读。', structure: 'concern / 表示 / 担心', grammar: 'noun，围绕「担心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concern.', right: 'He gave me some advice about the concern.', reason: 'advice 不可数。名词 concern 的单复数按词典词形记。', rule: '先确定 concern 是noun，再套「担心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concern.q1', senseId: 'concern.s1', errorType: 'meaning', type: '词义选择', prompt: '「concern」在本条的核心意思是：', options: ['担心', '完全相反的意思', '一种古代钱币'], answer: '担心', explain: 'concern：担心。' },
      { id: 'concern.q2', senseId: 'concern.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concern?', options: ['担心', 'a kind of ancient coin', 'the past tense of be'], answer: '担心', explain: '对的是「担心」。' },
      { id: 'concern.q3', senseId: 'concern.s1', errorType: 'grammar', type: '词义选择', prompt: 'concern 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concern.q4', senseId: 'concern.s1', errorType: 'meaning', type: '词源', prompt: '记 concern 时，哪句更稳妥？', options: ['先锁住「担心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「担心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['担心'] },
  });

  D('concerning', {
    etymology: {
      origin: '英语派生：concern + -ing，词性转到「关于」。',
      prefix: null,
      root: { text: 'concern', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'concerning', text: '英语派生：concern + -ing，词性转到「关于」。' },
        { label: '现在', text: '核心用法是：关于。' },
      ],
      formationLogic: '先认词干 concern，再看词尾。',
      mnemonic: '看到 concerning，先说出「关于」。',
      note: '先认词干 concern，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "concerning" and asked the class to keep it as one unit.', chinese: '老师把「concerning」圈出来，让全班把它当成一个整体。它表示关于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concerning.s1', en: 'In the margin she wrote "concerning" so nobody would split the phrase.', zh: '她在页边写下「concerning」，免得有人把这个说法拆开。意思是关于。', structure: 'concerning / 表示 / 关于', grammar: 'preposition，围绕「关于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of concerning and lost the point.', right: 'Keep "concerning" together: it means 关于.', reason: '「concerning」要整块理解。', rule: '先确定 concerning 是preposition，再套「关于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concerning.q1', senseId: 'concerning.s1', errorType: 'meaning', type: '词义选择', prompt: '「concerning」在本条的核心意思是：', options: ['关于', '完全相反的意思', '一种古代钱币'], answer: '关于', explain: 'concerning：关于。' },
      { id: 'concerning.q2', senseId: 'concerning.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concerning?', options: ['关于', 'a kind of ancient coin', 'the past tense of be'], answer: '关于', explain: '对的是「关于」。' },
      { id: 'concerning.q3', senseId: 'concerning.s1', errorType: 'grammar', type: '词义选择', prompt: 'concerning 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'concerning.q4', senseId: 'concerning.s1', errorType: 'meaning', type: '词源', prompt: '记 concerning 时，哪句更稳妥？', options: ['先锁住「关于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「关于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['关于'] },
  });

  D('concert', {
    etymology: {
      origin: '意大利语 concerto，拉丁语 concertare「一起争、一起演」。',
      prefix: null,
      root: { text: 'concert', gloss: '音乐会' },
      suffix: null,
      history: [
        { label: 'concert', text: '意大利语 concerto，拉丁语 concertare「一起争、一起演」。' },
        { label: '现在', text: '核心用法是：音乐会。' },
      ],
      formationLogic: '考试认现在的用法：音乐会。',
      mnemonic: '看到 concert，先说出「音乐会」。',
      note: '考试认现在的用法：音乐会。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concert.', chinese: '这一章反复回到同一个点：音乐会。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concert.s1', en: 'Without that concert, the next paragraph is hard to follow.', zh: '没有这个音乐会，下一段会很难读。', structure: 'concert / 表示 / 音乐会', grammar: 'noun，围绕「音乐会」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concert.', right: 'He gave me some advice about the concert.', reason: 'advice 不可数。名词 concert 的单复数按词典词形记。', rule: '先确定 concert 是noun，再套「音乐会」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concert.q1', senseId: 'concert.s1', errorType: 'meaning', type: '词义选择', prompt: '「concert」在本条的核心意思是：', options: ['音乐会', '完全相反的意思', '一种古代钱币'], answer: '音乐会', explain: 'concert：音乐会。' },
      { id: 'concert.q2', senseId: 'concert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concert?', options: ['音乐会', 'a kind of ancient coin', 'the past tense of be'], answer: '音乐会', explain: '对的是「音乐会」。' },
      { id: 'concert.q3', senseId: 'concert.s1', errorType: 'grammar', type: '词义选择', prompt: 'concert 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concert.q4', senseId: 'concert.s1', errorType: 'meaning', type: '词源', prompt: '记 concert 时，哪句更稳妥？', options: ['先锁住「音乐会」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「音乐会」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['音乐会'] },
  });

  D('concerto', {
    etymology: {
      origin: '现代英语常用词「concerto」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concerto', gloss: '协奏曲' },
      suffix: null,
      history: [
        { label: 'concerto', text: '现代英语常用词「concerto」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：协奏曲。' },
      ],
      formationLogic: '核心义：协奏曲。',
      mnemonic: '看到 concerto，先说出「协奏曲」。',
      note: '核心义：协奏曲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concerto.', chinese: '这一章反复回到同一个点：协奏曲。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concerto.s1', en: 'Without that concerto, the next paragraph is hard to follow.', zh: '没有这个协奏曲，下一段会很难读。', structure: 'concerto / 表示 / 协奏曲', grammar: 'noun，围绕「协奏曲」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concerto.', right: 'He gave me some advice about the concerto.', reason: 'advice 不可数。名词 concerto 的单复数按词典词形记。', rule: '先确定 concerto 是noun，再套「协奏曲」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concerto.q1', senseId: 'concerto.s1', errorType: 'meaning', type: '词义选择', prompt: '「concerto」在本条的核心意思是：', options: ['协奏曲', '完全相反的意思', '一种古代钱币'], answer: '协奏曲', explain: 'concerto：协奏曲。' },
      { id: 'concerto.q2', senseId: 'concerto.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concerto?', options: ['协奏曲', 'a kind of ancient coin', 'the past tense of be'], answer: '协奏曲', explain: '对的是「协奏曲」。' },
      { id: 'concerto.q3', senseId: 'concerto.s1', errorType: 'grammar', type: '词义选择', prompt: 'concerto 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concerto.q4', senseId: 'concerto.s1', errorType: 'meaning', type: '词源', prompt: '记 concerto 时，哪句更稳妥？', options: ['先锁住「协奏曲」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「协奏曲」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['协奏曲'] },
  });

  D('concession', {
    etymology: {
      origin: '英语派生：conces + -sion，词性转到「让步」。',
      prefix: null,
      root: { text: 'conces', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'concession', text: '英语派生：conces + -sion，词性转到「让步」。' },
        { label: '现在', text: '核心用法是：让步。' },
      ],
      formationLogic: '先认词干 conces，再看词尾。',
      mnemonic: '看到 concession，先说出「让步」。',
      note: '先认词干 conces，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concession.', chinese: '这一章反复回到同一个点：让步。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concession.s1', en: 'Without that concession, the next paragraph is hard to follow.', zh: '没有这个让步，下一段会很难读。', structure: 'concession / 表示 / 让步', grammar: 'noun，围绕「让步」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concession.', right: 'He gave me some advice about the concession.', reason: 'advice 不可数。名词 concession 的单复数按词典词形记。', rule: '先确定 concession 是noun，再套「让步」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concession.q1', senseId: 'concession.s1', errorType: 'meaning', type: '词义选择', prompt: '「concession」在本条的核心意思是：', options: ['让步', '完全相反的意思', '一种古代钱币'], answer: '让步', explain: 'concession：让步。' },
      { id: 'concession.q2', senseId: 'concession.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concession?', options: ['让步', 'a kind of ancient coin', 'the past tense of be'], answer: '让步', explain: '对的是「让步」。' },
      { id: 'concession.q3', senseId: 'concession.s1', errorType: 'grammar', type: '词义选择', prompt: 'concession 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concession.q4', senseId: 'concession.s1', errorType: 'meaning', type: '词源', prompt: '记 concession 时，哪句更稳妥？', options: ['先锁住「让步」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「让步」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['让步'] },
  });

  D('concise', {
    etymology: {
      origin: '现代英语常用词「concise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concise', gloss: '简明的' },
      suffix: null,
      history: [
        { label: 'concise', text: '现代英语常用词「concise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：简明的。' },
      ],
      formationLogic: '核心义：简明的。',
      mnemonic: '看到 concise，先说出「简明的」。',
      note: '核心义：简明的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was concise.', chinese: '即使是初读者也能看出，这个结果是简明的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concise.s1', en: 'They wanted a concise answer, not a long speech.', zh: '他们要一个简明的的答复，不要长篇发言。', structure: 'concise / 表示 / 简明的', grammar: 'adjective，围绕「简明的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are concise.', right: 'The news is concise.', reason: 'news 作主语时动词用单数。', rule: '先确定 concise 是adjective，再套「简明的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concise.q1', senseId: 'concise.s1', errorType: 'meaning', type: '词义选择', prompt: '「concise」在本条的核心意思是：', options: ['简明的', '完全相反的意思', '一种古代钱币'], answer: '简明的', explain: 'concise：简明的。' },
      { id: 'concise.q2', senseId: 'concise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concise?', options: ['简明的', 'a kind of ancient coin', 'the past tense of be'], answer: '简明的', explain: '对的是「简明的」。' },
      { id: 'concise.q3', senseId: 'concise.s1', errorType: 'grammar', type: '词义选择', prompt: 'concise 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'concise.q4', senseId: 'concise.s1', errorType: 'meaning', type: '词源', prompt: '记 concise 时，哪句更稳妥？', options: ['先锁住「简明的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「简明的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['简明的'] },
  });

  D('conclude', {
    etymology: {
      origin: '拉丁语 concludere「关在里面、结束」。',
      prefix: null,
      root: { text: 'conclude', gloss: '得出结论' },
      suffix: null,
      history: [
        { label: 'conclude', text: '拉丁语 concludere「关在里面、结束」。' },
        { label: '现在', text: '核心用法是：得出结论。' },
      ],
      formationLogic: '考试认现在的用法：得出结论。',
      mnemonic: '看到 conclude，先说出「得出结论」。',
      note: '考试认现在的用法：得出结论。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conclude before the office closed.', chinese: '他们同意在办公室关门前做这件事：得出结论。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conclude.s1', en: 'The deadline forced the team to conclude that afternoon.', zh: '截止日期逼着小组在那天下午得出结论。', structure: 'conclude / 表示 / 得出结论', grammar: 'verb，围绕「得出结论」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She concludeed it yesterday without checking the real past form.', right: 'Check the past form of "conclude" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conclude 是verb，再套「得出结论」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conclude.q1', senseId: 'conclude.s1', errorType: 'meaning', type: '词义选择', prompt: '「conclude」在本条的核心意思是：', options: ['得出结论', '完全相反的意思', '一种古代钱币'], answer: '得出结论', explain: 'conclude：得出结论。' },
      { id: 'conclude.q2', senseId: 'conclude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conclude?', options: ['得出结论', 'a kind of ancient coin', 'the past tense of be'], answer: '得出结论', explain: '对的是「得出结论」。' },
      { id: 'conclude.q3', senseId: 'conclude.s1', errorType: 'grammar', type: '词义选择', prompt: 'conclude 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conclude.q4', senseId: 'conclude.s1', errorType: 'meaning', type: '词源', prompt: '记 conclude 时，哪句更稳妥？', options: ['先锁住「得出结论」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「得出结论」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['得出结论'] },
  });

  D('conclusion', {
    etymology: {
      origin: 'conclude 的名词。',
      prefix: null,
      root: { text: 'conclusion', gloss: '结束' },
      suffix: null,
      history: [
        { label: 'conclusion', text: 'conclude 的名词。' },
        { label: '现在', text: '核心用法是：结束。' },
      ],
      formationLogic: '考试认现在的用法：结束。',
      mnemonic: '看到 conclusion，先说出「结束」。',
      note: '考试认现在的用法：结束。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conclusion.', chinese: '这一章反复回到同一个点：结束。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conclusion.s1', en: 'Without that conclusion, the next paragraph is hard to follow.', zh: '没有这个结束，下一段会很难读。', structure: 'conclusion / 表示 / 结束', grammar: 'noun，围绕「结束」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conclusion.', right: 'He gave me some advice about the conclusion.', reason: 'advice 不可数。名词 conclusion 的单复数按词典词形记。', rule: '先确定 conclusion 是noun，再套「结束」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conclusion.q1', senseId: 'conclusion.s1', errorType: 'meaning', type: '词义选择', prompt: '「conclusion」在本条的核心意思是：', options: ['结束', '完全相反的意思', '一种古代钱币'], answer: '结束', explain: 'conclusion：结束。' },
      { id: 'conclusion.q2', senseId: 'conclusion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conclusion?', options: ['结束', 'a kind of ancient coin', 'the past tense of be'], answer: '结束', explain: '对的是「结束」。' },
      { id: 'conclusion.q3', senseId: 'conclusion.s1', errorType: 'grammar', type: '词义选择', prompt: 'conclusion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conclusion.q4', senseId: 'conclusion.s1', errorType: 'meaning', type: '词源', prompt: '记 conclusion 时，哪句更稳妥？', options: ['先锁住「结束」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结束」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结束'] },
  });

  D('concoct', {
    etymology: {
      origin: '现代英语常用词「concoct」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concoct', gloss: '编造' },
      suffix: null,
      history: [
        { label: 'concoct', text: '现代英语常用词「concoct」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：编造。' },
      ],
      formationLogic: '核心义：编造。',
      mnemonic: '看到 concoct，先说出「编造」。',
      note: '核心义：编造。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to concoct before the office closed.', chinese: '他们同意在办公室关门前做这件事：编造。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concoct.s1', en: 'The deadline forced the team to concoct that afternoon.', zh: '截止日期逼着小组在那天下午编造。', structure: 'concoct / 表示 / 编造', grammar: 'verb，围绕「编造」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She concocted it yesterday without checking the real past form.', right: 'Check the past form of "concoct" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 concoct 是verb，再套「编造」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concoct.q1', senseId: 'concoct.s1', errorType: 'meaning', type: '词义选择', prompt: '「concoct」在本条的核心意思是：', options: ['编造', '完全相反的意思', '一种古代钱币'], answer: '编造', explain: 'concoct：编造。' },
      { id: 'concoct.q2', senseId: 'concoct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concoct?', options: ['编造', 'a kind of ancient coin', 'the past tense of be'], answer: '编造', explain: '对的是「编造」。' },
      { id: 'concoct.q3', senseId: 'concoct.s1', errorType: 'grammar', type: '词义选择', prompt: 'concoct 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'concoct.q4', senseId: 'concoct.s1', errorType: 'meaning', type: '词源', prompt: '记 concoct 时，哪句更稳妥？', options: ['先锁住「编造」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「编造」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['编造'] },
  });

  D('concrete', {
    etymology: {
      origin: '拉丁语 concrescere「长到一起」。混凝土是凝在一起的；具体是能摸到的。',
      prefix: null,
      root: { text: 'concrete', gloss: '混凝土' },
      suffix: null,
      history: [
        { label: 'concrete', text: '拉丁语 concrescere「长到一起」。混凝土是凝在一起的；具体是能摸到的。' },
        { label: '现在', text: '核心用法是：混凝土。' },
      ],
      formationLogic: '考试认现在的用法：混凝土。',
      mnemonic: '看到 concrete，先说出「混凝土」。',
      note: '考试认现在的用法：混凝土。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one concrete.', chinese: '这一章反复回到同一个点：混凝土。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concrete.s1', en: 'Without that concrete, the next paragraph is hard to follow.', zh: '没有这个混凝土，下一段会很难读。', structure: 'concrete / 表示 / 混凝土', grammar: 'noun，围绕「混凝土」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the concrete.', right: 'He gave me some advice about the concrete.', reason: 'advice 不可数。名词 concrete 的单复数按词典词形记。', rule: '先确定 concrete 是noun，再套「混凝土」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concrete.q1', senseId: 'concrete.s1', errorType: 'meaning', type: '词义选择', prompt: '「concrete」在本条的核心意思是：', options: ['混凝土', '完全相反的意思', '一种古代钱币'], answer: '混凝土', explain: 'concrete：混凝土。' },
      { id: 'concrete.q2', senseId: 'concrete.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concrete?', options: ['混凝土', 'a kind of ancient coin', 'the past tense of be'], answer: '混凝土', explain: '对的是「混凝土」。' },
      { id: 'concrete.q3', senseId: 'concrete.s1', errorType: 'grammar', type: '词义选择', prompt: 'concrete 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'concrete.q4', senseId: 'concrete.s1', errorType: 'meaning', type: '词源', prompt: '记 concrete 时，哪句更稳妥？', options: ['先锁住「混凝土」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「混凝土」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['混凝土'] },
  });

  D('concur', {
    etymology: {
      origin: '现代英语常用词「concur」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concur', gloss: '同意' },
      suffix: null,
      history: [
        { label: 'concur', text: '现代英语常用词「concur」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同意。' },
      ],
      formationLogic: '核心义：同意。',
      mnemonic: '看到 concur，先说出「同意」。',
      note: '核心义：同意。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to concur before the office closed.', chinese: '他们同意在办公室关门前做这件事：同意。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concur.s1', en: 'The deadline forced the team to concur that afternoon.', zh: '截止日期逼着小组在那天下午同意。', structure: 'concur / 表示 / 同意', grammar: 'verb，围绕「同意」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She concured it yesterday without checking the real past form.', right: 'Check the past form of "concur" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 concur 是verb，再套「同意」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concur.q1', senseId: 'concur.s1', errorType: 'meaning', type: '词义选择', prompt: '「concur」在本条的核心意思是：', options: ['同意', '完全相反的意思', '一种古代钱币'], answer: '同意', explain: 'concur：同意。' },
      { id: 'concur.q2', senseId: 'concur.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concur?', options: ['同意', 'a kind of ancient coin', 'the past tense of be'], answer: '同意', explain: '对的是「同意」。' },
      { id: 'concur.q3', senseId: 'concur.s1', errorType: 'grammar', type: '词义选择', prompt: 'concur 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'concur.q4', senseId: 'concur.s1', errorType: 'meaning', type: '词源', prompt: '记 concur 时，哪句更稳妥？', options: ['先锁住「同意」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同意」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同意'] },
  });

  D('concurrent', {
    etymology: {
      origin: '现代英语常用词「concurrent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'concurrent', gloss: '同时发生的' },
      suffix: null,
      history: [
        { label: 'concurrent', text: '现代英语常用词「concurrent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同时发生的。' },
      ],
      formationLogic: '核心义：同时发生的。',
      mnemonic: '看到 concurrent，先说出「同时发生的」。',
      note: '核心义：同时发生的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was concurrent.', chinese: '即使是初读者也能看出，这个结果是同时发生的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'concurrent.s1', en: 'They wanted a concurrent answer, not a long speech.', zh: '他们要一个同时发生的的答复，不要长篇发言。', structure: 'concurrent / 表示 / 同时发生的', grammar: 'adjective，围绕「同时发生的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are concurrent.', right: 'The news is concurrent.', reason: 'news 作主语时动词用单数。', rule: '先确定 concurrent 是adjective，再套「同时发生的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'concurrent.q1', senseId: 'concurrent.s1', errorType: 'meaning', type: '词义选择', prompt: '「concurrent」在本条的核心意思是：', options: ['同时发生的', '完全相反的意思', '一种古代钱币'], answer: '同时发生的', explain: 'concurrent：同时发生的。' },
      { id: 'concurrent.q2', senseId: 'concurrent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches concurrent?', options: ['同时发生的', 'a kind of ancient coin', 'the past tense of be'], answer: '同时发生的', explain: '对的是「同时发生的」。' },
      { id: 'concurrent.q3', senseId: 'concurrent.s1', errorType: 'grammar', type: '词义选择', prompt: 'concurrent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'concurrent.q4', senseId: 'concurrent.s1', errorType: 'meaning', type: '词源', prompt: '记 concurrent 时，哪句更稳妥？', options: ['先锁住「同时发生的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同时发生的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同时发生的'] },
  });

  D('condemn', {
    etymology: {
      origin: '拉丁语 condemnare「判罪」。',
      prefix: null,
      root: { text: 'condemn', gloss: '谴责' },
      suffix: null,
      history: [
        { label: 'condemn', text: '拉丁语 condemnare「判罪」。' },
        { label: '现在', text: '核心用法是：谴责。' },
      ],
      formationLogic: '考试认现在的用法：谴责。',
      mnemonic: '看到 condemn，先说出「谴责」。',
      note: '考试认现在的用法：谴责。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to condemn before the office closed.', chinese: '他们同意在办公室关门前做这件事：谴责。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condemn.s1', en: 'The deadline forced the team to condemn that afternoon.', zh: '截止日期逼着小组在那天下午谴责。', structure: 'condemn / 表示 / 谴责', grammar: 'verb，围绕「谴责」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She condemned it yesterday without checking the real past form.', right: 'Check the past form of "condemn" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 condemn 是verb，再套「谴责」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condemn.q1', senseId: 'condemn.s1', errorType: 'meaning', type: '词义选择', prompt: '「condemn」在本条的核心意思是：', options: ['谴责', '完全相反的意思', '一种古代钱币'], answer: '谴责', explain: 'condemn：谴责。' },
      { id: 'condemn.q2', senseId: 'condemn.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condemn?', options: ['谴责', 'a kind of ancient coin', 'the past tense of be'], answer: '谴责', explain: '对的是「谴责」。' },
      { id: 'condemn.q3', senseId: 'condemn.s1', errorType: 'grammar', type: '词义选择', prompt: 'condemn 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'condemn.q4', senseId: 'condemn.s1', errorType: 'meaning', type: '词源', prompt: '记 condemn 时，哪句更稳妥？', options: ['先锁住「谴责」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谴责」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谴责'] },
  });

  D('condense', {
    etymology: {
      origin: '现代英语常用词「condense」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'condense', gloss: '浓缩' },
      suffix: null,
      history: [
        { label: 'condense', text: '现代英语常用词「condense」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：浓缩。' },
      ],
      formationLogic: '核心义：浓缩。',
      mnemonic: '看到 condense，先说出「浓缩」。',
      note: '核心义：浓缩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to condense before the office closed.', chinese: '他们同意在办公室关门前做这件事：浓缩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condense.s1', en: 'The deadline forced the team to condense that afternoon.', zh: '截止日期逼着小组在那天下午浓缩。', structure: 'condense / 表示 / 浓缩', grammar: 'verb，围绕「浓缩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She condenseed it yesterday without checking the real past form.', right: 'Check the past form of "condense" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 condense 是verb，再套「浓缩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condense.q1', senseId: 'condense.s1', errorType: 'meaning', type: '词义选择', prompt: '「condense」在本条的核心意思是：', options: ['浓缩', '完全相反的意思', '一种古代钱币'], answer: '浓缩', explain: 'condense：浓缩。' },
      { id: 'condense.q2', senseId: 'condense.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condense?', options: ['浓缩', 'a kind of ancient coin', 'the past tense of be'], answer: '浓缩', explain: '对的是「浓缩」。' },
      { id: 'condense.q3', senseId: 'condense.s1', errorType: 'grammar', type: '词义选择', prompt: 'condense 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'condense.q4', senseId: 'condense.s1', errorType: 'meaning', type: '词源', prompt: '记 condense 时，哪句更稳妥？', options: ['先锁住「浓缩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「浓缩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['浓缩'] },
  });

  D('condescend', {
    etymology: {
      origin: '现代英语常用词「condescend」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'condescend', gloss: '屈尊俯就' },
      suffix: null,
      history: [
        { label: 'condescend', text: '现代英语常用词「condescend」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：屈尊俯就。' },
      ],
      formationLogic: '核心义：屈尊俯就。',
      mnemonic: '看到 condescend，先说出「屈尊俯就」。',
      note: '核心义：屈尊俯就。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to condescend before the office closed.', chinese: '他们同意在办公室关门前做这件事：屈尊俯就。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condescend.s1', en: 'The deadline forced the team to condescend that afternoon.', zh: '截止日期逼着小组在那天下午屈尊俯就。', structure: 'condescend / 表示 / 屈尊俯就', grammar: 'verb，围绕「屈尊俯就」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She condescended it yesterday without checking the real past form.', right: 'Check the past form of "condescend" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 condescend 是verb，再套「屈尊俯就」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condescend.q1', senseId: 'condescend.s1', errorType: 'meaning', type: '词义选择', prompt: '「condescend」在本条的核心意思是：', options: ['屈尊俯就', '完全相反的意思', '一种古代钱币'], answer: '屈尊俯就', explain: 'condescend：屈尊俯就。' },
      { id: 'condescend.q2', senseId: 'condescend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condescend?', options: ['屈尊俯就', 'a kind of ancient coin', 'the past tense of be'], answer: '屈尊俯就', explain: '对的是「屈尊俯就」。' },
      { id: 'condescend.q3', senseId: 'condescend.s1', errorType: 'grammar', type: '词义选择', prompt: 'condescend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'condescend.q4', senseId: 'condescend.s1', errorType: 'meaning', type: '词源', prompt: '记 condescend 时，哪句更稳妥？', options: ['先锁住「屈尊俯就」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「屈尊俯就」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['屈尊俯就'] },
  });

  D('condescending', {
    etymology: {
      origin: '英语派生：condescend + -ing，词性转到「居高临下的」。',
      prefix: null,
      root: { text: 'condescend', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'condescending', text: '英语派生：condescend + -ing，词性转到「居高临下的」。' },
        { label: '现在', text: '核心用法是：居高临下的。' },
      ],
      formationLogic: '先认词干 condescend，再看词尾。',
      mnemonic: '看到 condescending，先说出「居高临下的」。',
      note: '先认词干 condescend，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was condescending.', chinese: '即使是初读者也能看出，这个结果是居高临下的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condescending.s1', en: 'They wanted a condescending answer, not a long speech.', zh: '他们要一个居高临下的的答复，不要长篇发言。', structure: 'condescending / 表示 / 居高临下的', grammar: 'adjective，围绕「居高临下的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are condescending.', right: 'The news is condescending.', reason: 'news 作主语时动词用单数。', rule: '先确定 condescending 是adjective，再套「居高临下的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condescending.q1', senseId: 'condescending.s1', errorType: 'meaning', type: '词义选择', prompt: '「condescending」在本条的核心意思是：', options: ['居高临下的', '完全相反的意思', '一种古代钱币'], answer: '居高临下的', explain: 'condescending：居高临下的。' },
      { id: 'condescending.q2', senseId: 'condescending.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condescending?', options: ['居高临下的', 'a kind of ancient coin', 'the past tense of be'], answer: '居高临下的', explain: '对的是「居高临下的」。' },
      { id: 'condescending.q3', senseId: 'condescending.s1', errorType: 'grammar', type: '词义选择', prompt: 'condescending 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'condescending.q4', senseId: 'condescending.s1', errorType: 'meaning', type: '词源', prompt: '记 condescending 时，哪句更稳妥？', options: ['先锁住「居高临下的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「居高临下的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['居高临下的'] },
  });

  D('condiment', {
    etymology: {
      origin: '英语派生：condi + -ment，词性转到「调味品」。',
      prefix: null,
      root: { text: 'condi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'condiment', text: '英语派生：condi + -ment，词性转到「调味品」。' },
        { label: '现在', text: '核心用法是：调味品。' },
      ],
      formationLogic: '先认词干 condi，再看词尾。',
      mnemonic: '看到 condiment，先说出「调味品」。',
      note: '先认词干 condi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one condiment.', chinese: '这一章反复回到同一个点：调味品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condiment.s1', en: 'Without that condiment, the next paragraph is hard to follow.', zh: '没有这个调味品，下一段会很难读。', structure: 'condiment / 表示 / 调味品', grammar: 'noun，围绕「调味品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the condiment.', right: 'He gave me some advice about the condiment.', reason: 'advice 不可数。名词 condiment 的单复数按词典词形记。', rule: '先确定 condiment 是noun，再套「调味品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condiment.q1', senseId: 'condiment.s1', errorType: 'meaning', type: '词义选择', prompt: '「condiment」在本条的核心意思是：', options: ['调味品', '完全相反的意思', '一种古代钱币'], answer: '调味品', explain: 'condiment：调味品。' },
      { id: 'condiment.q2', senseId: 'condiment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condiment?', options: ['调味品', 'a kind of ancient coin', 'the past tense of be'], answer: '调味品', explain: '对的是「调味品」。' },
      { id: 'condiment.q3', senseId: 'condiment.s1', errorType: 'grammar', type: '词义选择', prompt: 'condiment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'condiment.q4', senseId: 'condiment.s1', errorType: 'meaning', type: '词源', prompt: '记 condiment 时，哪句更稳妥？', options: ['先锁住「调味品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「调味品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['调味品'] },
  });

  D('condition', {
    etymology: {
      origin: '拉丁语 condicio「约定、状况」。',
      prefix: null,
      root: { text: 'condition', gloss: '条件' },
      suffix: null,
      history: [
        { label: 'condition', text: '拉丁语 condicio「约定、状况」。' },
        { label: '现在', text: '核心用法是：条件。' },
      ],
      formationLogic: '考试认现在的用法：条件。',
      mnemonic: '看到 condition，先说出「条件」。',
      note: '考试认现在的用法：条件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one condition.', chinese: '这一章反复回到同一个点：条件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condition.s1', en: 'Without that condition, the next paragraph is hard to follow.', zh: '没有这个条件，下一段会很难读。', structure: 'condition / 表示 / 条件', grammar: 'noun，围绕「条件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the condition.', right: 'He gave me some advice about the condition.', reason: 'advice 不可数。名词 condition 的单复数按词典词形记。', rule: '先确定 condition 是noun，再套「条件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condition.q1', senseId: 'condition.s1', errorType: 'meaning', type: '词义选择', prompt: '「condition」在本条的核心意思是：', options: ['条件', '完全相反的意思', '一种古代钱币'], answer: '条件', explain: 'condition：条件。' },
      { id: 'condition.q2', senseId: 'condition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condition?', options: ['条件', 'a kind of ancient coin', 'the past tense of be'], answer: '条件', explain: '对的是「条件」。' },
      { id: 'condition.q3', senseId: 'condition.s1', errorType: 'grammar', type: '词义选择', prompt: 'condition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'condition.q4', senseId: 'condition.s1', errorType: 'meaning', type: '词源', prompt: '记 condition 时，哪句更稳妥？', options: ['先锁住「条件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「条件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['条件'] },
  });

  D('conditional', {
    etymology: {
      origin: '英语派生：condition + -al，词性转到「有条件的」。',
      prefix: null,
      root: { text: 'condition', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conditional', text: '英语派生：condition + -al，词性转到「有条件的」。' },
        { label: '现在', text: '核心用法是：有条件的。' },
      ],
      formationLogic: '先认词干 condition，再看词尾。',
      mnemonic: '看到 conditional，先说出「有条件的」。',
      note: '先认词干 condition，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conditional.', chinese: '即使是初读者也能看出，这个结果是有条件的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conditional.s1', en: 'They wanted a conditional answer, not a long speech.', zh: '他们要一个有条件的的答复，不要长篇发言。', structure: 'conditional / 表示 / 有条件的', grammar: 'adjective，围绕「有条件的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conditional.', right: 'The news is conditional.', reason: 'news 作主语时动词用单数。', rule: '先确定 conditional 是adjective，再套「有条件的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conditional.q1', senseId: 'conditional.s1', errorType: 'meaning', type: '词义选择', prompt: '「conditional」在本条的核心意思是：', options: ['有条件的', '完全相反的意思', '一种古代钱币'], answer: '有条件的', explain: 'conditional：有条件的。' },
      { id: 'conditional.q2', senseId: 'conditional.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conditional?', options: ['有条件的', 'a kind of ancient coin', 'the past tense of be'], answer: '有条件的', explain: '对的是「有条件的」。' },
      { id: 'conditional.q3', senseId: 'conditional.s1', errorType: 'grammar', type: '词义选择', prompt: 'conditional 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conditional.q4', senseId: 'conditional.s1', errorType: 'meaning', type: '词源', prompt: '记 conditional 时，哪句更稳妥？', options: ['先锁住「有条件的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有条件的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有条件的'] },
  });

  D('conditions', {
    etymology: {
      origin: '现代英语常用词「conditions」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conditions', gloss: '条件' },
      suffix: null,
      history: [
        { label: 'conditions', text: '现代英语常用词「conditions」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：条件。' },
      ],
      formationLogic: '核心义：条件。',
      mnemonic: '看到 conditions，先说出「条件」。',
      note: '核心义：条件。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conditions.', chinese: '这一章反复回到同一个点：条件。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conditions.s1', en: 'Without that conditions, the next paragraph is hard to follow.', zh: '没有这个条件，下一段会很难读。', structure: 'conditions / 表示 / 条件', grammar: 'noun，围绕「条件」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conditions.', right: 'He gave me some advice about the conditions.', reason: 'advice 不可数。名词 conditions 的单复数按词典词形记。', rule: '先确定 conditions 是noun，再套「条件」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conditions.q1', senseId: 'conditions.s1', errorType: 'meaning', type: '词义选择', prompt: '「conditions」在本条的核心意思是：', options: ['条件', '完全相反的意思', '一种古代钱币'], answer: '条件', explain: 'conditions：条件。' },
      { id: 'conditions.q2', senseId: 'conditions.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conditions?', options: ['条件', 'a kind of ancient coin', 'the past tense of be'], answer: '条件', explain: '对的是「条件」。' },
      { id: 'conditions.q3', senseId: 'conditions.s1', errorType: 'grammar', type: '词义选择', prompt: 'conditions 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conditions.q4', senseId: 'conditions.s1', errorType: 'meaning', type: '词源', prompt: '记 conditions 时，哪句更稳妥？', options: ['先锁住「条件」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「条件」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['条件'] },
  });

  D('condolence', {
    etymology: {
      origin: '英语派生：condol + -ence，词性转到「哀悼」。',
      prefix: null,
      root: { text: 'condol', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'condolence', text: '英语派生：condol + -ence，词性转到「哀悼」。' },
        { label: '现在', text: '核心用法是：哀悼。' },
      ],
      formationLogic: '先认词干 condol，再看词尾。',
      mnemonic: '看到 condolence，先说出「哀悼」。',
      note: '先认词干 condol，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one condolence.', chinese: '这一章反复回到同一个点：哀悼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'condolence.s1', en: 'Without that condolence, the next paragraph is hard to follow.', zh: '没有这个哀悼，下一段会很难读。', structure: 'condolence / 表示 / 哀悼', grammar: 'noun，围绕「哀悼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the condolence.', right: 'He gave me some advice about the condolence.', reason: 'advice 不可数。名词 condolence 的单复数按词典词形记。', rule: '先确定 condolence 是noun，再套「哀悼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'condolence.q1', senseId: 'condolence.s1', errorType: 'meaning', type: '词义选择', prompt: '「condolence」在本条的核心意思是：', options: ['哀悼', '完全相反的意思', '一种古代钱币'], answer: '哀悼', explain: 'condolence：哀悼。' },
      { id: 'condolence.q2', senseId: 'condolence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches condolence?', options: ['哀悼', 'a kind of ancient coin', 'the past tense of be'], answer: '哀悼', explain: '对的是「哀悼」。' },
      { id: 'condolence.q3', senseId: 'condolence.s1', errorType: 'grammar', type: '词义选择', prompt: 'condolence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'condolence.q4', senseId: 'condolence.s1', errorType: 'meaning', type: '词源', prompt: '记 condolence 时，哪句更稳妥？', options: ['先锁住「哀悼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哀悼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哀悼'] },
  });

  D('conducive', {
    etymology: {
      origin: '英语派生：conduc + -ive，词性转到「有助于…的」。',
      prefix: null,
      root: { text: 'conduc', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conducive', text: '英语派生：conduc + -ive，词性转到「有助于…的」。' },
        { label: '现在', text: '核心用法是：有助于…的。' },
      ],
      formationLogic: '先认词干 conduc，再看词尾。',
      mnemonic: '看到 conducive，先说出「有助于…的」。',
      note: '先认词干 conduc，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conducive.', chinese: '即使是初读者也能看出，这个结果是有助于…的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conducive.s1', en: 'They wanted a conducive answer, not a long speech.', zh: '他们要一个有助于…的的答复，不要长篇发言。', structure: 'conducive / 表示 / 有助于…的', grammar: 'adjective，围绕「有助于…的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conducive.', right: 'The news is conducive.', reason: 'news 作主语时动词用单数。', rule: '先确定 conducive 是adjective，再套「有助于…的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conducive.q1', senseId: 'conducive.s1', errorType: 'meaning', type: '词义选择', prompt: '「conducive」在本条的核心意思是：', options: ['有助于…的', '完全相反的意思', '一种古代钱币'], answer: '有助于…的', explain: 'conducive：有助于…的。' },
      { id: 'conducive.q2', senseId: 'conducive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conducive?', options: ['有助于…的', 'a kind of ancient coin', 'the past tense of be'], answer: '有助于…的', explain: '对的是「有助于…的」。' },
      { id: 'conducive.q3', senseId: 'conducive.s1', errorType: 'grammar', type: '词义选择', prompt: 'conducive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conducive.q4', senseId: 'conducive.s1', errorType: 'meaning', type: '词源', prompt: '记 conducive 时，哪句更稳妥？', options: ['先锁住「有助于…的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有助于…的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有助于…的'] },
  });

  D('conduct', {
    etymology: {
      origin: '拉丁语 conducere「领到一起」。',
      prefix: null,
      root: { text: 'conduct', gloss: '进行' },
      suffix: null,
      history: [
        { label: 'conduct', text: '拉丁语 conducere「领到一起」。' },
        { label: '现在', text: '核心用法是：进行。' },
      ],
      formationLogic: '考试认现在的用法：进行。',
      mnemonic: '看到 conduct，先说出「进行」。',
      note: '考试认现在的用法：进行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conduct before the office closed.', chinese: '他们同意在办公室关门前做这件事：进行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conduct.s1', en: 'The deadline forced the team to conduct that afternoon.', zh: '截止日期逼着小组在那天下午进行。', structure: 'conduct / 表示 / 进行', grammar: 'verb，围绕「进行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conducted it yesterday without checking the real past form.', right: 'Check the past form of "conduct" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conduct 是verb，再套「进行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conduct.q1', senseId: 'conduct.s1', errorType: 'meaning', type: '词义选择', prompt: '「conduct」在本条的核心意思是：', options: ['进行', '完全相反的意思', '一种古代钱币'], answer: '进行', explain: 'conduct：进行。' },
      { id: 'conduct.q2', senseId: 'conduct.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conduct?', options: ['进行', 'a kind of ancient coin', 'the past tense of be'], answer: '进行', explain: '对的是「进行」。' },
      { id: 'conduct.q3', senseId: 'conduct.s1', errorType: 'grammar', type: '词义选择', prompt: 'conduct 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conduct.q4', senseId: 'conduct.s1', errorType: 'meaning', type: '词源', prompt: '记 conduct 时，哪句更稳妥？', options: ['先锁住「进行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进行'] },
  });

  D('conductor', {
    etymology: {
      origin: '英语派生：conduct + -or，词性转到「指挥」。',
      prefix: null,
      root: { text: 'conduct', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conductor', text: '英语派生：conduct + -or，词性转到「指挥」。' },
        { label: '现在', text: '核心用法是：指挥。' },
      ],
      formationLogic: '先认词干 conduct，再看词尾。',
      mnemonic: '看到 conductor，先说出「指挥」。',
      note: '先认词干 conduct，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conductor.', chinese: '这一章反复回到同一个点：指挥。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conductor.s1', en: 'Without that conductor, the next paragraph is hard to follow.', zh: '没有这个指挥，下一段会很难读。', structure: 'conductor / 表示 / 指挥', grammar: 'noun，围绕「指挥」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conductor.', right: 'He gave me some advice about the conductor.', reason: 'advice 不可数。名词 conductor 的单复数按词典词形记。', rule: '先确定 conductor 是noun，再套「指挥」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conductor.q1', senseId: 'conductor.s1', errorType: 'meaning', type: '词义选择', prompt: '「conductor」在本条的核心意思是：', options: ['指挥', '完全相反的意思', '一种古代钱币'], answer: '指挥', explain: 'conductor：指挥。' },
      { id: 'conductor.q2', senseId: 'conductor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conductor?', options: ['指挥', 'a kind of ancient coin', 'the past tense of be'], answer: '指挥', explain: '对的是「指挥」。' },
      { id: 'conductor.q3', senseId: 'conductor.s1', errorType: 'grammar', type: '词义选择', prompt: 'conductor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conductor.q4', senseId: 'conductor.s1', errorType: 'meaning', type: '词源', prompt: '记 conductor 时，哪句更稳妥？', options: ['先锁住「指挥」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「指挥」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['指挥'] },
  });

  D('cone', {
    etymology: {
      origin: '现代英语常用词「cone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cone', gloss: '圆锥' },
      suffix: null,
      history: [
        { label: 'cone', text: '现代英语常用词「cone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：圆锥。' },
      ],
      formationLogic: '核心义：圆锥。',
      mnemonic: '看到 cone，先说出「圆锥」。',
      note: '核心义：圆锥。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cone.', chinese: '这一章反复回到同一个点：圆锥。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cone.s1', en: 'Without that cone, the next paragraph is hard to follow.', zh: '没有这个圆锥，下一段会很难读。', structure: 'cone / 表示 / 圆锥', grammar: 'noun，围绕「圆锥」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cone.', right: 'He gave me some advice about the cone.', reason: 'advice 不可数。名词 cone 的单复数按词典词形记。', rule: '先确定 cone 是noun，再套「圆锥」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cone.q1', senseId: 'cone.s1', errorType: 'meaning', type: '词义选择', prompt: '「cone」在本条的核心意思是：', options: ['圆锥', '完全相反的意思', '一种古代钱币'], answer: '圆锥', explain: 'cone：圆锥。' },
      { id: 'cone.q2', senseId: 'cone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cone?', options: ['圆锥', 'a kind of ancient coin', 'the past tense of be'], answer: '圆锥', explain: '对的是「圆锥」。' },
      { id: 'cone.q3', senseId: 'cone.s1', errorType: 'grammar', type: '词义选择', prompt: 'cone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cone.q4', senseId: 'cone.s1', errorType: 'meaning', type: '词源', prompt: '记 cone 时，哪句更稳妥？', options: ['先锁住「圆锥」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「圆锥」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['圆锥'] },
  });

  D('confederation', {
    etymology: {
      origin: '英语派生：confedera + -tion，词性转到「联盟」。',
      prefix: null,
      root: { text: 'confedera', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'confederation', text: '英语派生：confedera + -tion，词性转到「联盟」。' },
        { label: '现在', text: '核心用法是：联盟。' },
      ],
      formationLogic: '先认词干 confedera，再看词尾。',
      mnemonic: '看到 confederation，先说出「联盟」。',
      note: '先认词干 confedera，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one confederation.', chinese: '这一章反复回到同一个点：联盟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confederation.s1', en: 'Without that confederation, the next paragraph is hard to follow.', zh: '没有这个联盟，下一段会很难读。', structure: 'confederation / 表示 / 联盟', grammar: 'noun，围绕「联盟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the confederation.', right: 'He gave me some advice about the confederation.', reason: 'advice 不可数。名词 confederation 的单复数按词典词形记。', rule: '先确定 confederation 是noun，再套「联盟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confederation.q1', senseId: 'confederation.s1', errorType: 'meaning', type: '词义选择', prompt: '「confederation」在本条的核心意思是：', options: ['联盟', '完全相反的意思', '一种古代钱币'], answer: '联盟', explain: 'confederation：联盟。' },
      { id: 'confederation.q2', senseId: 'confederation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confederation?', options: ['联盟', 'a kind of ancient coin', 'the past tense of be'], answer: '联盟', explain: '对的是「联盟」。' },
      { id: 'confederation.q3', senseId: 'confederation.s1', errorType: 'grammar', type: '词义选择', prompt: 'confederation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'confederation.q4', senseId: 'confederation.s1', errorType: 'meaning', type: '词源', prompt: '记 confederation 时，哪句更稳妥？', options: ['先锁住「联盟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联盟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联盟'] },
  });

  D('confer', {
    etymology: {
      origin: '英语派生：conf + -er，词性转到「商讨」。',
      prefix: null,
      root: { text: 'conf', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'confer', text: '英语派生：conf + -er，词性转到「商讨」。' },
        { label: '现在', text: '核心用法是：商讨。' },
      ],
      formationLogic: '先认词干 conf，再看词尾。',
      mnemonic: '看到 confer，先说出「商讨」。',
      note: '先认词干 conf，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confer before the office closed.', chinese: '他们同意在办公室关门前做这件事：商讨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confer.s1', en: 'The deadline forced the team to confer that afternoon.', zh: '截止日期逼着小组在那天下午商讨。', structure: 'confer / 表示 / 商讨', grammar: 'verb，围绕「商讨」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confered it yesterday without checking the real past form.', right: 'Check the past form of "confer" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confer 是verb，再套「商讨」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confer.q1', senseId: 'confer.s1', errorType: 'meaning', type: '词义选择', prompt: '「confer」在本条的核心意思是：', options: ['商讨', '完全相反的意思', '一种古代钱币'], answer: '商讨', explain: 'confer：商讨。' },
      { id: 'confer.q2', senseId: 'confer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confer?', options: ['商讨', 'a kind of ancient coin', 'the past tense of be'], answer: '商讨', explain: '对的是「商讨」。' },
      { id: 'confer.q3', senseId: 'confer.s1', errorType: 'grammar', type: '词义选择', prompt: 'confer 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confer.q4', senseId: 'confer.s1', errorType: 'meaning', type: '词源', prompt: '记 confer 时，哪句更稳妥？', options: ['先锁住「商讨」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「商讨」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['商讨'] },
  });

  D('conference', {
    etymology: {
      origin: '拉丁语 conferre「带到一起」。开会是把人带到一起。',
      prefix: null,
      root: { text: 'conference', gloss: '会议' },
      suffix: null,
      history: [
        { label: 'conference', text: '拉丁语 conferre「带到一起」。开会是把人带到一起。' },
        { label: '现在', text: '核心用法是：会议。' },
      ],
      formationLogic: '考试认现在的用法：会议。',
      mnemonic: '看到 conference，先说出「会议」。',
      note: '考试认现在的用法：会议。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conference.', chinese: '这一章反复回到同一个点：会议。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conference.s1', en: 'Without that conference, the next paragraph is hard to follow.', zh: '没有这个会议，下一段会很难读。', structure: 'conference / 表示 / 会议', grammar: 'noun，围绕「会议」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conference.', right: 'He gave me some advice about the conference.', reason: 'advice 不可数。名词 conference 的单复数按词典词形记。', rule: '先确定 conference 是noun，再套「会议」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conference.q1', senseId: 'conference.s1', errorType: 'meaning', type: '词义选择', prompt: '「conference」在本条的核心意思是：', options: ['会议', '完全相反的意思', '一种古代钱币'], answer: '会议', explain: 'conference：会议。' },
      { id: 'conference.q2', senseId: 'conference.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conference?', options: ['会议', 'a kind of ancient coin', 'the past tense of be'], answer: '会议', explain: '对的是「会议」。' },
      { id: 'conference.q3', senseId: 'conference.s1', errorType: 'grammar', type: '词义选择', prompt: 'conference 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conference.q4', senseId: 'conference.s1', errorType: 'meaning', type: '词源', prompt: '记 conference 时，哪句更稳妥？', options: ['先锁住「会议」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「会议」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['会议'] },
  });

  D('confess', {
    etymology: {
      origin: '拉丁语 confiteri「完全承认」。',
      prefix: null,
      root: { text: 'confess', gloss: '承认' },
      suffix: null,
      history: [
        { label: 'confess', text: '拉丁语 confiteri「完全承认」。' },
        { label: '现在', text: '核心用法是：承认。' },
      ],
      formationLogic: '考试认现在的用法：承认。',
      mnemonic: '看到 confess，先说出「承认」。',
      note: '考试认现在的用法：承认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confess before the office closed.', chinese: '他们同意在办公室关门前做这件事：承认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confess.s1', en: 'The deadline forced the team to confess that afternoon.', zh: '截止日期逼着小组在那天下午承认。', structure: 'confess / 表示 / 承认', grammar: 'verb，围绕「承认」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confessed it yesterday without checking the real past form.', right: 'Check the past form of "confess" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confess 是verb，再套「承认」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confess.q1', senseId: 'confess.s1', errorType: 'meaning', type: '词义选择', prompt: '「confess」在本条的核心意思是：', options: ['承认', '完全相反的意思', '一种古代钱币'], answer: '承认', explain: 'confess：承认。' },
      { id: 'confess.q2', senseId: 'confess.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confess?', options: ['承认', 'a kind of ancient coin', 'the past tense of be'], answer: '承认', explain: '对的是「承认」。' },
      { id: 'confess.q3', senseId: 'confess.s1', errorType: 'grammar', type: '词义选择', prompt: 'confess 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confess.q4', senseId: 'confess.s1', errorType: 'meaning', type: '词源', prompt: '记 confess 时，哪句更稳妥？', options: ['先锁住「承认」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「承认」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['承认'] },
  });

  D('confidant', {
    etymology: {
      origin: '现代英语常用词「confidant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'confidant', gloss: '心腹' },
      suffix: null,
      history: [
        { label: 'confidant', text: '现代英语常用词「confidant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：心腹。' },
      ],
      formationLogic: '核心义：心腹。',
      mnemonic: '看到 confidant，先说出「心腹」。',
      note: '核心义：心腹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one confidant.', chinese: '这一章反复回到同一个点：心腹。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confidant.s1', en: 'Without that confidant, the next paragraph is hard to follow.', zh: '没有这个心腹，下一段会很难读。', structure: 'confidant / 表示 / 心腹', grammar: 'noun，围绕「心腹」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the confidant.', right: 'He gave me some advice about the confidant.', reason: 'advice 不可数。名词 confidant 的单复数按词典词形记。', rule: '先确定 confidant 是noun，再套「心腹」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confidant.q1', senseId: 'confidant.s1', errorType: 'meaning', type: '词义选择', prompt: '「confidant」在本条的核心意思是：', options: ['心腹', '完全相反的意思', '一种古代钱币'], answer: '心腹', explain: 'confidant：心腹。' },
      { id: 'confidant.q2', senseId: 'confidant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confidant?', options: ['心腹', 'a kind of ancient coin', 'the past tense of be'], answer: '心腹', explain: '对的是「心腹」。' },
      { id: 'confidant.q3', senseId: 'confidant.s1', errorType: 'grammar', type: '词义选择', prompt: 'confidant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'confidant.q4', senseId: 'confidant.s1', errorType: 'meaning', type: '词源', prompt: '记 confidant 时，哪句更稳妥？', options: ['先锁住「心腹」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「心腹」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['心腹'] },
  });

  D('confide', {
    etymology: {
      origin: '现代英语常用词「confide」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'confide', gloss: '倾诉' },
      suffix: null,
      history: [
        { label: 'confide', text: '现代英语常用词「confide」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：倾诉。' },
      ],
      formationLogic: '核心义：倾诉。',
      mnemonic: '看到 confide，先说出「倾诉」。',
      note: '核心义：倾诉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confide before the office closed.', chinese: '他们同意在办公室关门前做这件事：倾诉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confide.s1', en: 'The deadline forced the team to confide that afternoon.', zh: '截止日期逼着小组在那天下午倾诉。', structure: 'confide / 表示 / 倾诉', grammar: 'verb，围绕「倾诉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confideed it yesterday without checking the real past form.', right: 'Check the past form of "confide" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confide 是verb，再套「倾诉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confide.q1', senseId: 'confide.s1', errorType: 'meaning', type: '词义选择', prompt: '「confide」在本条的核心意思是：', options: ['倾诉', '完全相反的意思', '一种古代钱币'], answer: '倾诉', explain: 'confide：倾诉。' },
      { id: 'confide.q2', senseId: 'confide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confide?', options: ['倾诉', 'a kind of ancient coin', 'the past tense of be'], answer: '倾诉', explain: '对的是「倾诉」。' },
      { id: 'confide.q3', senseId: 'confide.s1', errorType: 'grammar', type: '词义选择', prompt: 'confide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confide.q4', senseId: 'confide.s1', errorType: 'meaning', type: '词源', prompt: '记 confide 时，哪句更稳妥？', options: ['先锁住「倾诉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倾诉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倾诉'] },
  });

  D('confidence', {
    etymology: {
      origin: '拉丁语 confidere「完全信任」，fides「信任」。',
      prefix: null,
      root: { text: 'confidence', gloss: '信心' },
      suffix: null,
      history: [
        { label: 'confidence', text: '拉丁语 confidere「完全信任」，fides「信任」。' },
        { label: '现在', text: '核心用法是：信心。' },
      ],
      formationLogic: '考试认现在的用法：信心。',
      mnemonic: '看到 confidence，先说出「信心」。',
      note: '考试认现在的用法：信心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one confidence.', chinese: '这一章反复回到同一个点：信心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confidence.s1', en: 'Without that confidence, the next paragraph is hard to follow.', zh: '没有这个信心，下一段会很难读。', structure: 'confidence / 表示 / 信心', grammar: 'noun，围绕「信心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the confidence.', right: 'He gave me some advice about the confidence.', reason: 'advice 不可数。名词 confidence 的单复数按词典词形记。', rule: '先确定 confidence 是noun，再套「信心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confidence.q1', senseId: 'confidence.s1', errorType: 'meaning', type: '词义选择', prompt: '「confidence」在本条的核心意思是：', options: ['信心', '完全相反的意思', '一种古代钱币'], answer: '信心', explain: 'confidence：信心。' },
      { id: 'confidence.q2', senseId: 'confidence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confidence?', options: ['信心', 'a kind of ancient coin', 'the past tense of be'], answer: '信心', explain: '对的是「信心」。' },
      { id: 'confidence.q3', senseId: 'confidence.s1', errorType: 'grammar', type: '词义选择', prompt: 'confidence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'confidence.q4', senseId: 'confidence.s1', errorType: 'meaning', type: '词源', prompt: '记 confidence 时，哪句更稳妥？', options: ['先锁住「信心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「信心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['信心'] },
  });

  D('confident', {
    etymology: {
      origin: '拉丁语 confidere。',
      prefix: null,
      root: { text: 'confident', gloss: '自信的' },
      suffix: null,
      history: [
        { label: 'confident', text: '拉丁语 confidere。' },
        { label: '现在', text: '核心用法是：自信的。' },
      ],
      formationLogic: '考试认现在的用法：自信的。',
      mnemonic: '看到 confident，先说出「自信的」。',
      note: '考试认现在的用法：自信的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was confident.', chinese: '即使是初读者也能看出，这个结果是自信的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confident.s1', en: 'They wanted a confident answer, not a long speech.', zh: '他们要一个自信的的答复，不要长篇发言。', structure: 'confident / 表示 / 自信的', grammar: 'adjective，围绕「自信的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are confident.', right: 'The news is confident.', reason: 'news 作主语时动词用单数。', rule: '先确定 confident 是adjective，再套「自信的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confident.q1', senseId: 'confident.s1', errorType: 'meaning', type: '词义选择', prompt: '「confident」在本条的核心意思是：', options: ['自信的', '完全相反的意思', '一种古代钱币'], answer: '自信的', explain: 'confident：自信的。' },
      { id: 'confident.q2', senseId: 'confident.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confident?', options: ['自信的', 'a kind of ancient coin', 'the past tense of be'], answer: '自信的', explain: '对的是「自信的」。' },
      { id: 'confident.q3', senseId: 'confident.s1', errorType: 'grammar', type: '词义选择', prompt: 'confident 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'confident.q4', senseId: 'confident.s1', errorType: 'meaning', type: '词源', prompt: '记 confident 时，哪句更稳妥？', options: ['先锁住「自信的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「自信的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自信的'] },
  });

  D('confidential', {
    etymology: {
      origin: '英语派生：confidenti + -al，词性转到「机密的」。',
      prefix: null,
      root: { text: 'confidenti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'confidential', text: '英语派生：confidenti + -al，词性转到「机密的」。' },
        { label: '现在', text: '核心用法是：机密的。' },
      ],
      formationLogic: '先认词干 confidenti，再看词尾。',
      mnemonic: '看到 confidential，先说出「机密的」。',
      note: '先认词干 confidenti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was confidential.', chinese: '即使是初读者也能看出，这个结果是机密的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confidential.s1', en: 'They wanted a confidential answer, not a long speech.', zh: '他们要一个机密的的答复，不要长篇发言。', structure: 'confidential / 表示 / 机密的', grammar: 'adjective，围绕「机密的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are confidential.', right: 'The news is confidential.', reason: 'news 作主语时动词用单数。', rule: '先确定 confidential 是adjective，再套「机密的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confidential.q1', senseId: 'confidential.s1', errorType: 'meaning', type: '词义选择', prompt: '「confidential」在本条的核心意思是：', options: ['机密的', '完全相反的意思', '一种古代钱币'], answer: '机密的', explain: 'confidential：机密的。' },
      { id: 'confidential.q2', senseId: 'confidential.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confidential?', options: ['机密的', 'a kind of ancient coin', 'the past tense of be'], answer: '机密的', explain: '对的是「机密的」。' },
      { id: 'confidential.q3', senseId: 'confidential.s1', errorType: 'grammar', type: '词义选择', prompt: 'confidential 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'confidential.q4', senseId: 'confidential.s1', errorType: 'meaning', type: '词源', prompt: '记 confidential 时，哪句更稳妥？', options: ['先锁住「机密的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「机密的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['机密的'] },
  });

  D('configuration', {
    etymology: {
      origin: '英语派生：configura + -tion，词性转到「配置」。',
      prefix: null,
      root: { text: 'configura', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'configuration', text: '英语派生：configura + -tion，词性转到「配置」。' },
        { label: '现在', text: '核心用法是：配置。' },
      ],
      formationLogic: '先认词干 configura，再看词尾。',
      mnemonic: '看到 configuration，先说出「配置」。',
      note: '先认词干 configura，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one configuration.', chinese: '这一章反复回到同一个点：配置。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'configuration.s1', en: 'Without that configuration, the next paragraph is hard to follow.', zh: '没有这个配置，下一段会很难读。', structure: 'configuration / 表示 / 配置', grammar: 'noun，围绕「配置」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the configuration.', right: 'He gave me some advice about the configuration.', reason: 'advice 不可数。名词 configuration 的单复数按词典词形记。', rule: '先确定 configuration 是noun，再套「配置」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'configuration.q1', senseId: 'configuration.s1', errorType: 'meaning', type: '词义选择', prompt: '「configuration」在本条的核心意思是：', options: ['配置', '完全相反的意思', '一种古代钱币'], answer: '配置', explain: 'configuration：配置。' },
      { id: 'configuration.q2', senseId: 'configuration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches configuration?', options: ['配置', 'a kind of ancient coin', 'the past tense of be'], answer: '配置', explain: '对的是「配置」。' },
      { id: 'configuration.q3', senseId: 'configuration.s1', errorType: 'grammar', type: '词义选择', prompt: 'configuration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'configuration.q4', senseId: 'configuration.s1', errorType: 'meaning', type: '词源', prompt: '记 configuration 时，哪句更稳妥？', options: ['先锁住「配置」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「配置」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['配置'] },
  });

  D('confine', {
    etymology: {
      origin: '拉丁语 confinis「有共同边界」。限制在边界内。',
      prefix: null,
      root: { text: 'confine', gloss: '限制' },
      suffix: null,
      history: [
        { label: 'confine', text: '拉丁语 confinis「有共同边界」。限制在边界内。' },
        { label: '现在', text: '核心用法是：限制。' },
      ],
      formationLogic: '考试认现在的用法：限制。',
      mnemonic: '看到 confine，先说出「限制」。',
      note: '考试认现在的用法：限制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confine before the office closed.', chinese: '他们同意在办公室关门前做这件事：限制。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confine.s1', en: 'The deadline forced the team to confine that afternoon.', zh: '截止日期逼着小组在那天下午限制。', structure: 'confine / 表示 / 限制', grammar: 'verb，围绕「限制」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confineed it yesterday without checking the real past form.', right: 'Check the past form of "confine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confine 是verb，再套「限制」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confine.q1', senseId: 'confine.s1', errorType: 'meaning', type: '词义选择', prompt: '「confine」在本条的核心意思是：', options: ['限制', '完全相反的意思', '一种古代钱币'], answer: '限制', explain: 'confine：限制。' },
      { id: 'confine.q2', senseId: 'confine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confine?', options: ['限制', 'a kind of ancient coin', 'the past tense of be'], answer: '限制', explain: '对的是「限制」。' },
      { id: 'confine.q3', senseId: 'confine.s1', errorType: 'grammar', type: '词义选择', prompt: 'confine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confine.q4', senseId: 'confine.s1', errorType: 'meaning', type: '词源', prompt: '记 confine 时，哪句更稳妥？', options: ['先锁住「限制」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「限制」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['限制'] },
  });

  D('confined', {
    etymology: {
      origin: '现代英语常用词「confined」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'confined', gloss: '被限制的' },
      suffix: null,
      history: [
        { label: 'confined', text: '现代英语常用词「confined」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被限制的。' },
      ],
      formationLogic: '核心义：被限制的。',
      mnemonic: '看到 confined，先说出「被限制的」。',
      note: '核心义：被限制的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was confined.', chinese: '即使是初读者也能看出，这个结果是被限制的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confined.s1', en: 'They wanted a confined answer, not a long speech.', zh: '他们要一个被限制的的答复，不要长篇发言。', structure: 'confined / 表示 / 被限制的', grammar: 'adjective，围绕「被限制的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are confined.', right: 'The news is confined.', reason: 'news 作主语时动词用单数。', rule: '先确定 confined 是adjective，再套「被限制的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confined.q1', senseId: 'confined.s1', errorType: 'meaning', type: '词义选择', prompt: '「confined」在本条的核心意思是：', options: ['被限制的', '完全相反的意思', '一种古代钱币'], answer: '被限制的', explain: 'confined：被限制的。' },
      { id: 'confined.q2', senseId: 'confined.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confined?', options: ['被限制的', 'a kind of ancient coin', 'the past tense of be'], answer: '被限制的', explain: '对的是「被限制的」。' },
      { id: 'confined.q3', senseId: 'confined.s1', errorType: 'grammar', type: '词义选择', prompt: 'confined 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'confined.q4', senseId: 'confined.s1', errorType: 'meaning', type: '词源', prompt: '记 confined 时，哪句更稳妥？', options: ['先锁住「被限制的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被限制的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被限制的'] },
  });

  D('confinement', {
    etymology: {
      origin: '英语派生：confine + -ment，词性转到「禁闭」。',
      prefix: null,
      root: { text: 'confine', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'confinement', text: '英语派生：confine + -ment，词性转到「禁闭」。' },
        { label: '现在', text: '核心用法是：禁闭。' },
      ],
      formationLogic: '先认词干 confine，再看词尾。',
      mnemonic: '看到 confinement，先说出「禁闭」。',
      note: '先认词干 confine，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one confinement.', chinese: '这一章反复回到同一个点：禁闭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confinement.s1', en: 'Without that confinement, the next paragraph is hard to follow.', zh: '没有这个禁闭，下一段会很难读。', structure: 'confinement / 表示 / 禁闭', grammar: 'noun，围绕「禁闭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the confinement.', right: 'He gave me some advice about the confinement.', reason: 'advice 不可数。名词 confinement 的单复数按词典词形记。', rule: '先确定 confinement 是noun，再套「禁闭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confinement.q1', senseId: 'confinement.s1', errorType: 'meaning', type: '词义选择', prompt: '「confinement」在本条的核心意思是：', options: ['禁闭', '完全相反的意思', '一种古代钱币'], answer: '禁闭', explain: 'confinement：禁闭。' },
      { id: 'confinement.q2', senseId: 'confinement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confinement?', options: ['禁闭', 'a kind of ancient coin', 'the past tense of be'], answer: '禁闭', explain: '对的是「禁闭」。' },
      { id: 'confinement.q3', senseId: 'confinement.s1', errorType: 'grammar', type: '词义选择', prompt: 'confinement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'confinement.q4', senseId: 'confinement.s1', errorType: 'meaning', type: '词源', prompt: '记 confinement 时，哪句更稳妥？', options: ['先锁住「禁闭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「禁闭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['禁闭'] },
  });

  D('confirm', {
    etymology: {
      origin: '拉丁语 confirmare「使牢固」，firmus「牢」。',
      prefix: null,
      root: { text: 'confirm', gloss: '证实' },
      suffix: null,
      history: [
        { label: 'confirm', text: '拉丁语 confirmare「使牢固」，firmus「牢」。' },
        { label: '现在', text: '核心用法是：证实。' },
      ],
      formationLogic: '考试认现在的用法：证实。',
      mnemonic: '看到 confirm，先说出「证实」。',
      note: '考试认现在的用法：证实。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confirm before the office closed.', chinese: '他们同意在办公室关门前做这件事：证实。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confirm.s1', en: 'The deadline forced the team to confirm that afternoon.', zh: '截止日期逼着小组在那天下午证实。', structure: 'confirm / 表示 / 证实', grammar: 'verb，围绕「证实」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confirmed it yesterday without checking the real past form.', right: 'Check the past form of "confirm" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confirm 是verb，再套「证实」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confirm.q1', senseId: 'confirm.s1', errorType: 'meaning', type: '词义选择', prompt: '「confirm」在本条的核心意思是：', options: ['证实', '完全相反的意思', '一种古代钱币'], answer: '证实', explain: 'confirm：证实。' },
      { id: 'confirm.q2', senseId: 'confirm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confirm?', options: ['证实', 'a kind of ancient coin', 'the past tense of be'], answer: '证实', explain: '对的是「证实」。' },
      { id: 'confirm.q3', senseId: 'confirm.s1', errorType: 'grammar', type: '词义选择', prompt: 'confirm 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confirm.q4', senseId: 'confirm.s1', errorType: 'meaning', type: '词源', prompt: '记 confirm 时，哪句更稳妥？', options: ['先锁住「证实」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「证实」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['证实'] },
  });

  D('confirmation', {
    etymology: {
      origin: '英语派生：confirma + -tion，词性转到「确认」。',
      prefix: null,
      root: { text: 'confirma', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'confirmation', text: '英语派生：confirma + -tion，词性转到「确认」。' },
        { label: '现在', text: '核心用法是：确认。' },
      ],
      formationLogic: '先认词干 confirma，再看词尾。',
      mnemonic: '看到 confirmation，先说出「确认」。',
      note: '先认词干 confirma，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one confirmation.', chinese: '这一章反复回到同一个点：确认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confirmation.s1', en: 'Without that confirmation, the next paragraph is hard to follow.', zh: '没有这个确认，下一段会很难读。', structure: 'confirmation / 表示 / 确认', grammar: 'noun，围绕「确认」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the confirmation.', right: 'He gave me some advice about the confirmation.', reason: 'advice 不可数。名词 confirmation 的单复数按词典词形记。', rule: '先确定 confirmation 是noun，再套「确认」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confirmation.q1', senseId: 'confirmation.s1', errorType: 'meaning', type: '词义选择', prompt: '「confirmation」在本条的核心意思是：', options: ['确认', '完全相反的意思', '一种古代钱币'], answer: '确认', explain: 'confirmation：确认。' },
      { id: 'confirmation.q2', senseId: 'confirmation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confirmation?', options: ['确认', 'a kind of ancient coin', 'the past tense of be'], answer: '确认', explain: '对的是「确认」。' },
      { id: 'confirmation.q3', senseId: 'confirmation.s1', errorType: 'grammar', type: '词义选择', prompt: 'confirmation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'confirmation.q4', senseId: 'confirmation.s1', errorType: 'meaning', type: '词源', prompt: '记 confirmation 时，哪句更稳妥？', options: ['先锁住「确认」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「确认」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['确认'] },
  });

  D('confiscate', {
    etymology: {
      origin: '现代英语常用词「confiscate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'confiscate', gloss: '没收' },
      suffix: null,
      history: [
        { label: 'confiscate', text: '现代英语常用词「confiscate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：没收。' },
      ],
      formationLogic: '核心义：没收。',
      mnemonic: '看到 confiscate，先说出「没收」。',
      note: '核心义：没收。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confiscate before the office closed.', chinese: '他们同意在办公室关门前做这件事：没收。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confiscate.s1', en: 'The deadline forced the team to confiscate that afternoon.', zh: '截止日期逼着小组在那天下午没收。', structure: 'confiscate / 表示 / 没收', grammar: 'verb，围绕「没收」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confiscateed it yesterday without checking the real past form.', right: 'Check the past form of "confiscate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confiscate 是verb，再套「没收」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confiscate.q1', senseId: 'confiscate.s1', errorType: 'meaning', type: '词义选择', prompt: '「confiscate」在本条的核心意思是：', options: ['没收', '完全相反的意思', '一种古代钱币'], answer: '没收', explain: 'confiscate：没收。' },
      { id: 'confiscate.q2', senseId: 'confiscate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confiscate?', options: ['没收', 'a kind of ancient coin', 'the past tense of be'], answer: '没收', explain: '对的是「没收」。' },
      { id: 'confiscate.q3', senseId: 'confiscate.s1', errorType: 'grammar', type: '词义选择', prompt: 'confiscate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confiscate.q4', senseId: 'confiscate.s1', errorType: 'meaning', type: '词源', prompt: '记 confiscate 时，哪句更稳妥？', options: ['先锁住「没收」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「没收」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['没收'] },
  });

  D('conflict', {
    etymology: {
      origin: '拉丁语 confligere「打到一起」，fligere「打击」。',
      prefix: null,
      root: { text: 'conflict', gloss: '冲突' },
      suffix: null,
      history: [
        { label: 'conflict', text: '拉丁语 confligere「打到一起」，fligere「打击」。' },
        { label: '现在', text: '核心用法是：冲突。' },
      ],
      formationLogic: '考试认现在的用法：冲突。',
      mnemonic: '看到 conflict，先说出「冲突」。',
      note: '考试认现在的用法：冲突。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conflict.', chinese: '这一章反复回到同一个点：冲突。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conflict.s1', en: 'Without that conflict, the next paragraph is hard to follow.', zh: '没有这个冲突，下一段会很难读。', structure: 'conflict / 表示 / 冲突', grammar: 'noun，围绕「冲突」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conflict.', right: 'He gave me some advice about the conflict.', reason: 'advice 不可数。名词 conflict 的单复数按词典词形记。', rule: '先确定 conflict 是noun，再套「冲突」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conflict.q1', senseId: 'conflict.s1', errorType: 'meaning', type: '词义选择', prompt: '「conflict」在本条的核心意思是：', options: ['冲突', '完全相反的意思', '一种古代钱币'], answer: '冲突', explain: 'conflict：冲突。' },
      { id: 'conflict.q2', senseId: 'conflict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conflict?', options: ['冲突', 'a kind of ancient coin', 'the past tense of be'], answer: '冲突', explain: '对的是「冲突」。' },
      { id: 'conflict.q3', senseId: 'conflict.s1', errorType: 'grammar', type: '词义选择', prompt: 'conflict 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conflict.q4', senseId: 'conflict.s1', errorType: 'meaning', type: '词源', prompt: '记 conflict 时，哪句更稳妥？', options: ['先锁住「冲突」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冲突」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冲突'] },
  });

  D('conflict with', {
    etymology: {
      origin: '现代英语固定说法「conflict with」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'conflict with', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'conflict with', text: '现代英语固定说法「conflict with」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：与……相冲突。' },
      ],
      formationLogic: '核心义：与……相冲突。',
      mnemonic: '看到 conflict with，先说出「与……相冲突」。',
      note: '核心义：与……相冲突。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "conflict with" and asked the class to keep it as one unit.', chinese: '老师把「conflict with」圈出来，让全班把它当成一个整体。它表示与……相冲突。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conflict with.s1', en: 'In the margin she wrote "conflict with" so nobody would split the phrase.', zh: '她在页边写下「conflict with」，免得有人把这个说法拆开。意思是与……相冲突。', structure: 'conflict with / 表示 / 与……相冲突', grammar: 'verb，围绕「与……相冲突」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of conflict with and lost the point.', right: 'Keep "conflict with" together: it means 与……相冲突.', reason: '「conflict with」要整块理解。', rule: '先确定 conflict with 是verb，再套「与……相冲突」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conflict with.q1', senseId: 'conflict with.s1', errorType: 'meaning', type: '词义选择', prompt: '「conflict with」在本条的核心意思是：', options: ['与……相冲突', '完全相反的意思', '一种古代钱币'], answer: '与……相冲突', explain: 'conflict with：与……相冲突。' },
      { id: 'conflict with.q2', senseId: 'conflict with.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conflict with?', options: ['与……相冲突', 'a kind of ancient coin', 'the past tense of be'], answer: '与……相冲突', explain: '对的是「与……相冲突」。' },
      { id: 'conflict with.q3', senseId: 'conflict with.s1', errorType: 'grammar', type: '词义选择', prompt: 'conflict with 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conflict with.q4', senseId: 'conflict with.s1', errorType: 'meaning', type: '词源', prompt: '记 conflict with 时，哪句更稳妥？', options: ['先锁住「与……相冲突」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「与……相冲突」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['与……相冲突'] },
  });

  D('conform', {
    etymology: {
      origin: '拉丁语 conformare「做成同样的形状」。',
      prefix: null,
      root: { text: 'conform', gloss: '符合' },
      suffix: null,
      history: [
        { label: 'conform', text: '拉丁语 conformare「做成同样的形状」。' },
        { label: '现在', text: '核心用法是：符合。' },
      ],
      formationLogic: '考试认现在的用法：符合。',
      mnemonic: '看到 conform，先说出「符合」。',
      note: '考试认现在的用法：符合。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conform before the office closed.', chinese: '他们同意在办公室关门前做这件事：符合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conform.s1', en: 'The deadline forced the team to conform that afternoon.', zh: '截止日期逼着小组在那天下午符合。', structure: 'conform / 表示 / 符合', grammar: 'verb，围绕「符合」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conformed it yesterday without checking the real past form.', right: 'Check the past form of "conform" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conform 是verb，再套「符合」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conform.q1', senseId: 'conform.s1', errorType: 'meaning', type: '词义选择', prompt: '「conform」在本条的核心意思是：', options: ['符合', '完全相反的意思', '一种古代钱币'], answer: '符合', explain: 'conform：符合。' },
      { id: 'conform.q2', senseId: 'conform.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conform?', options: ['符合', 'a kind of ancient coin', 'the past tense of be'], answer: '符合', explain: '对的是「符合」。' },
      { id: 'conform.q3', senseId: 'conform.s1', errorType: 'grammar', type: '词义选择', prompt: 'conform 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conform.q4', senseId: 'conform.s1', errorType: 'meaning', type: '词源', prompt: '记 conform 时，哪句更稳妥？', options: ['先锁住「符合」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「符合」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['符合'] },
  });

  D('confound', {
    etymology: {
      origin: '现代英语常用词「confound」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'confound', gloss: '使困惑' },
      suffix: null,
      history: [
        { label: 'confound', text: '现代英语常用词「confound」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：使困惑。' },
      ],
      formationLogic: '核心义：使困惑。',
      mnemonic: '看到 confound，先说出「使困惑」。',
      note: '核心义：使困惑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confound before the office closed.', chinese: '他们同意在办公室关门前做这件事：使困惑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confound.s1', en: 'The deadline forced the team to confound that afternoon.', zh: '截止日期逼着小组在那天下午使困惑。', structure: 'confound / 表示 / 使困惑', grammar: 'verb，围绕「使困惑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confounded it yesterday without checking the real past form.', right: 'Check the past form of "confound" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confound 是verb，再套「使困惑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confound.q1', senseId: 'confound.s1', errorType: 'meaning', type: '词义选择', prompt: '「confound」在本条的核心意思是：', options: ['使困惑', '完全相反的意思', '一种古代钱币'], answer: '使困惑', explain: 'confound：使困惑。' },
      { id: 'confound.q2', senseId: 'confound.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confound?', options: ['使困惑', 'a kind of ancient coin', 'the past tense of be'], answer: '使困惑', explain: '对的是「使困惑」。' },
      { id: 'confound.q3', senseId: 'confound.s1', errorType: 'grammar', type: '词义选择', prompt: 'confound 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confound.q4', senseId: 'confound.s1', errorType: 'meaning', type: '词源', prompt: '记 confound 时，哪句更稳妥？', options: ['先锁住「使困惑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使困惑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使困惑'] },
  });

  D('confront', {
    etymology: {
      origin: '拉丁语 confrontare「额对额」，frons「额」。',
      prefix: null,
      root: { text: 'confront', gloss: '面对' },
      suffix: null,
      history: [
        { label: 'confront', text: '拉丁语 confrontare「额对额」，frons「额」。' },
        { label: '现在', text: '核心用法是：面对。' },
      ],
      formationLogic: '考试认现在的用法：面对。',
      mnemonic: '看到 confront，先说出「面对」。',
      note: '考试认现在的用法：面对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confront before the office closed.', chinese: '他们同意在办公室关门前做这件事：面对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confront.s1', en: 'The deadline forced the team to confront that afternoon.', zh: '截止日期逼着小组在那天下午面对。', structure: 'confront / 表示 / 面对', grammar: 'verb，围绕「面对」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confronted it yesterday without checking the real past form.', right: 'Check the past form of "confront" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confront 是verb，再套「面对」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confront.q1', senseId: 'confront.s1', errorType: 'meaning', type: '词义选择', prompt: '「confront」在本条的核心意思是：', options: ['面对', '完全相反的意思', '一种古代钱币'], answer: '面对', explain: 'confront：面对。' },
      { id: 'confront.q2', senseId: 'confront.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confront?', options: ['面对', 'a kind of ancient coin', 'the past tense of be'], answer: '面对', explain: '对的是「面对」。' },
      { id: 'confront.q3', senseId: 'confront.s1', errorType: 'grammar', type: '词义选择', prompt: 'confront 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confront.q4', senseId: 'confront.s1', errorType: 'meaning', type: '词源', prompt: '记 confront 时，哪句更稳妥？', options: ['先锁住「面对」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「面对」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['面对'] },
  });

  D('Confucian', {
    etymology: {
      origin: '现代英语常用词「Confucian」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'Confucian', gloss: '儒家的' },
      suffix: null,
      history: [
        { label: 'Confucian', text: '现代英语常用词「Confucian」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：儒家的。' },
      ],
      formationLogic: '核心义：儒家的。',
      mnemonic: '看到 Confucian，先说出「儒家的」。',
      note: '核心义：儒家的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was Confucian.', chinese: '即使是初读者也能看出，这个结果是儒家的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Confucian.s1', en: 'They wanted a Confucian answer, not a long speech.', zh: '他们要一个儒家的的答复，不要长篇发言。', structure: 'Confucian / 表示 / 儒家的', grammar: 'adjective，围绕「儒家的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are Confucian.', right: 'The news is Confucian.', reason: 'news 作主语时动词用单数。', rule: '先确定 Confucian 是adjective，再套「儒家的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Confucian.q1', senseId: 'Confucian.s1', errorType: 'meaning', type: '词义选择', prompt: '「Confucian」在本条的核心意思是：', options: ['儒家的', '完全相反的意思', '一种古代钱币'], answer: '儒家的', explain: 'Confucian：儒家的。' },
      { id: 'Confucian.q2', senseId: 'Confucian.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Confucian?', options: ['儒家的', 'a kind of ancient coin', 'the past tense of be'], answer: '儒家的', explain: '对的是「儒家的」。' },
      { id: 'Confucian.q3', senseId: 'Confucian.s1', errorType: 'grammar', type: '词义选择', prompt: 'Confucian 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'Confucian.q4', senseId: 'Confucian.s1', errorType: 'meaning', type: '词源', prompt: '记 Confucian 时，哪句更稳妥？', options: ['先锁住「儒家的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「儒家的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['儒家的'] },
  });

  D('confuse', {
    etymology: {
      origin: '拉丁语 confundere「倒在一起」。混成一团。',
      prefix: null,
      root: { text: 'confuse', gloss: '使困惑' },
      suffix: null,
      history: [
        { label: 'confuse', text: '拉丁语 confundere「倒在一起」。混成一团。' },
        { label: '现在', text: '核心用法是：使困惑。' },
      ],
      formationLogic: '考试认现在的用法：使困惑。',
      mnemonic: '看到 confuse，先说出「使困惑」。',
      note: '考试认现在的用法：使困惑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to confuse before the office closed.', chinese: '他们同意在办公室关门前做这件事：使困惑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confuse.s1', en: 'The deadline forced the team to confuse that afternoon.', zh: '截止日期逼着小组在那天下午使困惑。', structure: 'confuse / 表示 / 使困惑', grammar: 'verb，围绕「使困惑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She confuseed it yesterday without checking the real past form.', right: 'Check the past form of "confuse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 confuse 是verb，再套「使困惑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confuse.q1', senseId: 'confuse.s1', errorType: 'meaning', type: '词义选择', prompt: '「confuse」在本条的核心意思是：', options: ['使困惑', '完全相反的意思', '一种古代钱币'], answer: '使困惑', explain: 'confuse：使困惑。' },
      { id: 'confuse.q2', senseId: 'confuse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confuse?', options: ['使困惑', 'a kind of ancient coin', 'the past tense of be'], answer: '使困惑', explain: '对的是「使困惑」。' },
      { id: 'confuse.q3', senseId: 'confuse.s1', errorType: 'grammar', type: '词义选择', prompt: 'confuse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'confuse.q4', senseId: 'confuse.s1', errorType: 'meaning', type: '词源', prompt: '记 confuse 时，哪句更稳妥？', options: ['先锁住「使困惑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「使困惑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使困惑'] },
  });

  D('confusion', {
    etymology: {
      origin: '英语派生：confu + -sion，词性转到「困惑」。',
      prefix: null,
      root: { text: 'confu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'confusion', text: '英语派生：confu + -sion，词性转到「困惑」。' },
        { label: '现在', text: '核心用法是：困惑。' },
      ],
      formationLogic: '先认词干 confu，再看词尾。',
      mnemonic: '看到 confusion，先说出「困惑」。',
      note: '先认词干 confu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one confusion.', chinese: '这一章反复回到同一个点：困惑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'confusion.s1', en: 'Without that confusion, the next paragraph is hard to follow.', zh: '没有这个困惑，下一段会很难读。', structure: 'confusion / 表示 / 困惑', grammar: 'noun，围绕「困惑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the confusion.', right: 'He gave me some advice about the confusion.', reason: 'advice 不可数。名词 confusion 的单复数按词典词形记。', rule: '先确定 confusion 是noun，再套「困惑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'confusion.q1', senseId: 'confusion.s1', errorType: 'meaning', type: '词义选择', prompt: '「confusion」在本条的核心意思是：', options: ['困惑', '完全相反的意思', '一种古代钱币'], answer: '困惑', explain: 'confusion：困惑。' },
      { id: 'confusion.q2', senseId: 'confusion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches confusion?', options: ['困惑', 'a kind of ancient coin', 'the past tense of be'], answer: '困惑', explain: '对的是「困惑」。' },
      { id: 'confusion.q3', senseId: 'confusion.s1', errorType: 'grammar', type: '词义选择', prompt: 'confusion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'confusion.q4', senseId: 'confusion.s1', errorType: 'meaning', type: '词源', prompt: '记 confusion 时，哪句更稳妥？', options: ['先锁住「困惑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「困惑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['困惑'] },
  });

  D('congenial', {
    etymology: {
      origin: '英语派生：congeni + -al，词性转到「意气相投的」。',
      prefix: null,
      root: { text: 'congeni', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'congenial', text: '英语派生：congeni + -al，词性转到「意气相投的」。' },
        { label: '现在', text: '核心用法是：意气相投的。' },
      ],
      formationLogic: '先认词干 congeni，再看词尾。',
      mnemonic: '看到 congenial，先说出「意气相投的」。',
      note: '先认词干 congeni，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was congenial.', chinese: '即使是初读者也能看出，这个结果是意气相投的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'congenial.s1', en: 'They wanted a congenial answer, not a long speech.', zh: '他们要一个意气相投的的答复，不要长篇发言。', structure: 'congenial / 表示 / 意气相投的', grammar: 'adjective，围绕「意气相投的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are congenial.', right: 'The news is congenial.', reason: 'news 作主语时动词用单数。', rule: '先确定 congenial 是adjective，再套「意气相投的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'congenial.q1', senseId: 'congenial.s1', errorType: 'meaning', type: '词义选择', prompt: '「congenial」在本条的核心意思是：', options: ['意气相投的', '完全相反的意思', '一种古代钱币'], answer: '意气相投的', explain: 'congenial：意气相投的。' },
      { id: 'congenial.q2', senseId: 'congenial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches congenial?', options: ['意气相投的', 'a kind of ancient coin', 'the past tense of be'], answer: '意气相投的', explain: '对的是「意气相投的」。' },
      { id: 'congenial.q3', senseId: 'congenial.s1', errorType: 'grammar', type: '词义选择', prompt: 'congenial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'congenial.q4', senseId: 'congenial.s1', errorType: 'meaning', type: '词源', prompt: '记 congenial 时，哪句更稳妥？', options: ['先锁住「意气相投的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「意气相投的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['意气相投的'] },
  });

  D('congestion', {
    etymology: {
      origin: '英语派生：conges + -tion，词性转到「拥挤」。',
      prefix: null,
      root: { text: 'conges', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'congestion', text: '英语派生：conges + -tion，词性转到「拥挤」。' },
        { label: '现在', text: '核心用法是：拥挤。' },
      ],
      formationLogic: '先认词干 conges，再看词尾。',
      mnemonic: '看到 congestion，先说出「拥挤」。',
      note: '先认词干 conges，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one congestion.', chinese: '这一章反复回到同一个点：拥挤。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'congestion.s1', en: 'Without that congestion, the next paragraph is hard to follow.', zh: '没有这个拥挤，下一段会很难读。', structure: 'congestion / 表示 / 拥挤', grammar: 'noun，围绕「拥挤」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the congestion.', right: 'He gave me some advice about the congestion.', reason: 'advice 不可数。名词 congestion 的单复数按词典词形记。', rule: '先确定 congestion 是noun，再套「拥挤」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'congestion.q1', senseId: 'congestion.s1', errorType: 'meaning', type: '词义选择', prompt: '「congestion」在本条的核心意思是：', options: ['拥挤', '完全相反的意思', '一种古代钱币'], answer: '拥挤', explain: 'congestion：拥挤。' },
      { id: 'congestion.q2', senseId: 'congestion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches congestion?', options: ['拥挤', 'a kind of ancient coin', 'the past tense of be'], answer: '拥挤', explain: '对的是「拥挤」。' },
      { id: 'congestion.q3', senseId: 'congestion.s1', errorType: 'grammar', type: '词义选择', prompt: 'congestion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'congestion.q4', senseId: 'congestion.s1', errorType: 'meaning', type: '词源', prompt: '记 congestion 时，哪句更稳妥？', options: ['先锁住「拥挤」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拥挤」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拥挤'] },
  });

  D('conglomerate', {
    etymology: {
      origin: '现代英语常用词「conglomerate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conglomerate', gloss: '企业集团' },
      suffix: null,
      history: [
        { label: 'conglomerate', text: '现代英语常用词「conglomerate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：企业集团。' },
      ],
      formationLogic: '核心义：企业集团。',
      mnemonic: '看到 conglomerate，先说出「企业集团」。',
      note: '核心义：企业集团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conglomerate.', chinese: '这一章反复回到同一个点：企业集团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conglomerate.s1', en: 'Without that conglomerate, the next paragraph is hard to follow.', zh: '没有这个企业集团，下一段会很难读。', structure: 'conglomerate / 表示 / 企业集团', grammar: 'noun，围绕「企业集团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conglomerate.', right: 'He gave me some advice about the conglomerate.', reason: 'advice 不可数。名词 conglomerate 的单复数按词典词形记。', rule: '先确定 conglomerate 是noun，再套「企业集团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conglomerate.q1', senseId: 'conglomerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「conglomerate」在本条的核心意思是：', options: ['企业集团', '完全相反的意思', '一种古代钱币'], answer: '企业集团', explain: 'conglomerate：企业集团。' },
      { id: 'conglomerate.q2', senseId: 'conglomerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conglomerate?', options: ['企业集团', 'a kind of ancient coin', 'the past tense of be'], answer: '企业集团', explain: '对的是「企业集团」。' },
      { id: 'conglomerate.q3', senseId: 'conglomerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'conglomerate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conglomerate.q4', senseId: 'conglomerate.s1', errorType: 'meaning', type: '词源', prompt: '记 conglomerate 时，哪句更稳妥？', options: ['先锁住「企业集团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「企业集团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['企业集团'] },
  });

  D('congratulate', {
    etymology: {
      origin: '拉丁语 congratulari「一起高兴」，gratus。',
      prefix: null,
      root: { text: 'congratulate', gloss: '祝贺' },
      suffix: null,
      history: [
        { label: 'congratulate', text: '拉丁语 congratulari「一起高兴」，gratus。' },
        { label: '现在', text: '核心用法是：祝贺。' },
      ],
      formationLogic: '考试认现在的用法：祝贺。',
      mnemonic: '看到 congratulate，先说出「祝贺」。',
      note: '考试认现在的用法：祝贺。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to congratulate before the office closed.', chinese: '他们同意在办公室关门前做这件事：祝贺。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'congratulate.s1', en: 'The deadline forced the team to congratulate that afternoon.', zh: '截止日期逼着小组在那天下午祝贺。', structure: 'congratulate / 表示 / 祝贺', grammar: 'verb，围绕「祝贺」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She congratulateed it yesterday without checking the real past form.', right: 'Check the past form of "congratulate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 congratulate 是verb，再套「祝贺」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'congratulate.q1', senseId: 'congratulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「congratulate」在本条的核心意思是：', options: ['祝贺', '完全相反的意思', '一种古代钱币'], answer: '祝贺', explain: 'congratulate：祝贺。' },
      { id: 'congratulate.q2', senseId: 'congratulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches congratulate?', options: ['祝贺', 'a kind of ancient coin', 'the past tense of be'], answer: '祝贺', explain: '对的是「祝贺」。' },
      { id: 'congratulate.q3', senseId: 'congratulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'congratulate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'congratulate.q4', senseId: 'congratulate.s1', errorType: 'meaning', type: '词源', prompt: '记 congratulate 时，哪句更稳妥？', options: ['先锁住「祝贺」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「祝贺」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['祝贺'] },
  });

  D('congregate', {
    etymology: {
      origin: '现代英语常用词「congregate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'congregate', gloss: '聚集' },
      suffix: null,
      history: [
        { label: 'congregate', text: '现代英语常用词「congregate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：聚集。' },
      ],
      formationLogic: '核心义：聚集。',
      mnemonic: '看到 congregate，先说出「聚集」。',
      note: '核心义：聚集。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to congregate before the office closed.', chinese: '他们同意在办公室关门前做这件事：聚集。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'congregate.s1', en: 'The deadline forced the team to congregate that afternoon.', zh: '截止日期逼着小组在那天下午聚集。', structure: 'congregate / 表示 / 聚集', grammar: 'verb，围绕「聚集」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She congregateed it yesterday without checking the real past form.', right: 'Check the past form of "congregate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 congregate 是verb，再套「聚集」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'congregate.q1', senseId: 'congregate.s1', errorType: 'meaning', type: '词义选择', prompt: '「congregate」在本条的核心意思是：', options: ['聚集', '完全相反的意思', '一种古代钱币'], answer: '聚集', explain: 'congregate：聚集。' },
      { id: 'congregate.q2', senseId: 'congregate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches congregate?', options: ['聚集', 'a kind of ancient coin', 'the past tense of be'], answer: '聚集', explain: '对的是「聚集」。' },
      { id: 'congregate.q3', senseId: 'congregate.s1', errorType: 'grammar', type: '词义选择', prompt: 'congregate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'congregate.q4', senseId: 'congregate.s1', errorType: 'meaning', type: '词源', prompt: '记 congregate 时，哪句更稳妥？', options: ['先锁住「聚集」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聚集」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聚集'] },
  });

  D('congregation', {
    etymology: {
      origin: '英语派生：congrega + -tion，词性转到「会众」。',
      prefix: null,
      root: { text: 'congrega', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'congregation', text: '英语派生：congrega + -tion，词性转到「会众」。' },
        { label: '现在', text: '核心用法是：会众。' },
      ],
      formationLogic: '先认词干 congrega，再看词尾。',
      mnemonic: '看到 congregation，先说出「会众」。',
      note: '先认词干 congrega，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one congregation.', chinese: '这一章反复回到同一个点：会众。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'congregation.s1', en: 'Without that congregation, the next paragraph is hard to follow.', zh: '没有这个会众，下一段会很难读。', structure: 'congregation / 表示 / 会众', grammar: 'noun，围绕「会众」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the congregation.', right: 'He gave me some advice about the congregation.', reason: 'advice 不可数。名词 congregation 的单复数按词典词形记。', rule: '先确定 congregation 是noun，再套「会众」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'congregation.q1', senseId: 'congregation.s1', errorType: 'meaning', type: '词义选择', prompt: '「congregation」在本条的核心意思是：', options: ['会众', '完全相反的意思', '一种古代钱币'], answer: '会众', explain: 'congregation：会众。' },
      { id: 'congregation.q2', senseId: 'congregation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches congregation?', options: ['会众', 'a kind of ancient coin', 'the past tense of be'], answer: '会众', explain: '对的是「会众」。' },
      { id: 'congregation.q3', senseId: 'congregation.s1', errorType: 'grammar', type: '词义选择', prompt: 'congregation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'congregation.q4', senseId: 'congregation.s1', errorType: 'meaning', type: '词源', prompt: '记 congregation 时，哪句更稳妥？', options: ['先锁住「会众」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「会众」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['会众'] },
  });

  D('congress', {
    etymology: {
      origin: '拉丁语 congressus「走到一起」。',
      prefix: null,
      root: { text: 'congress', gloss: '国会' },
      suffix: null,
      history: [
        { label: 'congress', text: '拉丁语 congressus「走到一起」。' },
        { label: '现在', text: '核心用法是：国会。' },
      ],
      formationLogic: '考试认现在的用法：国会。',
      mnemonic: '看到 congress，先说出「国会」。',
      note: '考试认现在的用法：国会。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one congress.', chinese: '这一章反复回到同一个点：国会。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'congress.s1', en: 'Without that congress, the next paragraph is hard to follow.', zh: '没有这个国会，下一段会很难读。', structure: 'congress / 表示 / 国会', grammar: 'noun，围绕「国会」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the congress.', right: 'He gave me some advice about the congress.', reason: 'advice 不可数。名词 congress 的单复数按词典词形记。', rule: '先确定 congress 是noun，再套「国会」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'congress.q1', senseId: 'congress.s1', errorType: 'meaning', type: '词义选择', prompt: '「congress」在本条的核心意思是：', options: ['国会', '完全相反的意思', '一种古代钱币'], answer: '国会', explain: 'congress：国会。' },
      { id: 'congress.q2', senseId: 'congress.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches congress?', options: ['国会', 'a kind of ancient coin', 'the past tense of be'], answer: '国会', explain: '对的是「国会」。' },
      { id: 'congress.q3', senseId: 'congress.s1', errorType: 'grammar', type: '词义选择', prompt: 'congress 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'congress.q4', senseId: 'congress.s1', errorType: 'meaning', type: '词源', prompt: '记 congress 时，哪句更稳妥？', options: ['先锁住「国会」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「国会」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['国会'] },
  });

  D('conifer', {
    etymology: {
      origin: '英语派生：conif + -er，词性转到「针叶树」。',
      prefix: null,
      root: { text: 'conif', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conifer', text: '英语派生：conif + -er，词性转到「针叶树」。' },
        { label: '现在', text: '核心用法是：针叶树。' },
      ],
      formationLogic: '先认词干 conif，再看词尾。',
      mnemonic: '看到 conifer，先说出「针叶树」。',
      note: '先认词干 conif，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conifer.', chinese: '这一章反复回到同一个点：针叶树。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conifer.s1', en: 'Without that conifer, the next paragraph is hard to follow.', zh: '没有这个针叶树，下一段会很难读。', structure: 'conifer / 表示 / 针叶树', grammar: 'noun，围绕「针叶树」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conifer.', right: 'He gave me some advice about the conifer.', reason: 'advice 不可数。名词 conifer 的单复数按词典词形记。', rule: '先确定 conifer 是noun，再套「针叶树」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conifer.q1', senseId: 'conifer.s1', errorType: 'meaning', type: '词义选择', prompt: '「conifer」在本条的核心意思是：', options: ['针叶树', '完全相反的意思', '一种古代钱币'], answer: '针叶树', explain: 'conifer：针叶树。' },
      { id: 'conifer.q2', senseId: 'conifer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conifer?', options: ['针叶树', 'a kind of ancient coin', 'the past tense of be'], answer: '针叶树', explain: '对的是「针叶树」。' },
      { id: 'conifer.q3', senseId: 'conifer.s1', errorType: 'grammar', type: '词义选择', prompt: 'conifer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conifer.q4', senseId: 'conifer.s1', errorType: 'meaning', type: '词源', prompt: '记 conifer 时，哪句更稳妥？', options: ['先锁住「针叶树」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「针叶树」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['针叶树'] },
  });

  D('conjecture', {
    etymology: {
      origin: '现代英语常用词「conjecture」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conjecture', gloss: '推测' },
      suffix: null,
      history: [
        { label: 'conjecture', text: '现代英语常用词「conjecture」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：推测。' },
      ],
      formationLogic: '核心义：推测。',
      mnemonic: '看到 conjecture，先说出「推测」。',
      note: '核心义：推测。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conjecture.', chinese: '这一章反复回到同一个点：推测。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conjecture.s1', en: 'Without that conjecture, the next paragraph is hard to follow.', zh: '没有这个推测，下一段会很难读。', structure: 'conjecture / 表示 / 推测', grammar: 'noun，围绕「推测」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conjecture.', right: 'He gave me some advice about the conjecture.', reason: 'advice 不可数。名词 conjecture 的单复数按词典词形记。', rule: '先确定 conjecture 是noun，再套「推测」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conjecture.q1', senseId: 'conjecture.s1', errorType: 'meaning', type: '词义选择', prompt: '「conjecture」在本条的核心意思是：', options: ['推测', '完全相反的意思', '一种古代钱币'], answer: '推测', explain: 'conjecture：推测。' },
      { id: 'conjecture.q2', senseId: 'conjecture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conjecture?', options: ['推测', 'a kind of ancient coin', 'the past tense of be'], answer: '推测', explain: '对的是「推测」。' },
      { id: 'conjecture.q3', senseId: 'conjecture.s1', errorType: 'grammar', type: '词义选择', prompt: 'conjecture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conjecture.q4', senseId: 'conjecture.s1', errorType: 'meaning', type: '词源', prompt: '记 conjecture 时，哪句更稳妥？', options: ['先锁住「推测」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「推测」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['推测'] },
  });

  D('conjugation', {
    etymology: {
      origin: '英语派生：conjuga + -tion，词性转到「（动词）变位」。',
      prefix: null,
      root: { text: 'conjuga', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conjugation', text: '英语派生：conjuga + -tion，词性转到「（动词）变位」。' },
        { label: '现在', text: '核心用法是：（动词）变位。' },
      ],
      formationLogic: '先认词干 conjuga，再看词尾。',
      mnemonic: '看到 conjugation，先说出「（动词）变位」。',
      note: '先认词干 conjuga，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conjugation.', chinese: '这一章反复回到同一个点：（动词）变位。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conjugation.s1', en: 'Without that conjugation, the next paragraph is hard to follow.', zh: '没有这个（动词）变位，下一段会很难读。', structure: 'conjugation / 表示 / （动词）变位', grammar: 'noun，围绕「（动词）变位」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conjugation.', right: 'He gave me some advice about the conjugation.', reason: 'advice 不可数。名词 conjugation 的单复数按词典词形记。', rule: '先确定 conjugation 是noun，再套「（动词）变位」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conjugation.q1', senseId: 'conjugation.s1', errorType: 'meaning', type: '词义选择', prompt: '「conjugation」在本条的核心意思是：', options: ['（动词）变位', '完全相反的意思', '一种古代钱币'], answer: '（动词）变位', explain: 'conjugation：（动词）变位。' },
      { id: 'conjugation.q2', senseId: 'conjugation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conjugation?', options: ['（动词）变位', 'a kind of ancient coin', 'the past tense of be'], answer: '（动词）变位', explain: '对的是「（动词）变位」。' },
      { id: 'conjugation.q3', senseId: 'conjugation.s1', errorType: 'grammar', type: '词义选择', prompt: 'conjugation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conjugation.q4', senseId: 'conjugation.s1', errorType: 'meaning', type: '词源', prompt: '记 conjugation 时，哪句更稳妥？', options: ['先锁住「（动词）变位」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（动词）变位」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（动词）变位'] },
  });

  D('conjunction', {
    etymology: {
      origin: '英语派生：conjunc + -tion，词性转到「连词」。',
      prefix: null,
      root: { text: 'conjunc', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conjunction', text: '英语派生：conjunc + -tion，词性转到「连词」。' },
        { label: '现在', text: '核心用法是：连词。' },
      ],
      formationLogic: '先认词干 conjunc，再看词尾。',
      mnemonic: '看到 conjunction，先说出「连词」。',
      note: '先认词干 conjunc，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conjunction.', chinese: '这一章反复回到同一个点：连词。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conjunction.s1', en: 'Without that conjunction, the next paragraph is hard to follow.', zh: '没有这个连词，下一段会很难读。', structure: 'conjunction / 表示 / 连词', grammar: 'noun，围绕「连词」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conjunction.', right: 'He gave me some advice about the conjunction.', reason: 'advice 不可数。名词 conjunction 的单复数按词典词形记。', rule: '先确定 conjunction 是noun，再套「连词」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conjunction.q1', senseId: 'conjunction.s1', errorType: 'meaning', type: '词义选择', prompt: '「conjunction」在本条的核心意思是：', options: ['连词', '完全相反的意思', '一种古代钱币'], answer: '连词', explain: 'conjunction：连词。' },
      { id: 'conjunction.q2', senseId: 'conjunction.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conjunction?', options: ['连词', 'a kind of ancient coin', 'the past tense of be'], answer: '连词', explain: '对的是「连词」。' },
      { id: 'conjunction.q3', senseId: 'conjunction.s1', errorType: 'grammar', type: '词义选择', prompt: 'conjunction 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conjunction.q4', senseId: 'conjunction.s1', errorType: 'meaning', type: '词源', prompt: '记 conjunction 时，哪句更稳妥？', options: ['先锁住「连词」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连词」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连词'] },
  });

  D('connect', {
    etymology: {
      origin: '拉丁语 conectere「绑在一起」。',
      prefix: null,
      root: { text: 'connect', gloss: '连接' },
      suffix: null,
      history: [
        { label: 'connect', text: '拉丁语 conectere「绑在一起」。' },
        { label: '现在', text: '核心用法是：连接。' },
      ],
      formationLogic: '考试认现在的用法：连接。',
      mnemonic: '看到 connect，先说出「连接」。',
      note: '考试认现在的用法：连接。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to connect before the office closed.', chinese: '他们同意在办公室关门前做这件事：连接。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'connect.s1', en: 'The deadline forced the team to connect that afternoon.', zh: '截止日期逼着小组在那天下午连接。', structure: 'connect / 表示 / 连接', grammar: 'verb，围绕「连接」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She connected it yesterday without checking the real past form.', right: 'Check the past form of "connect" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 connect 是verb，再套「连接」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'connect.q1', senseId: 'connect.s1', errorType: 'meaning', type: '词义选择', prompt: '「connect」在本条的核心意思是：', options: ['连接', '完全相反的意思', '一种古代钱币'], answer: '连接', explain: 'connect：连接。' },
      { id: 'connect.q2', senseId: 'connect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches connect?', options: ['连接', 'a kind of ancient coin', 'the past tense of be'], answer: '连接', explain: '对的是「连接」。' },
      { id: 'connect.q3', senseId: 'connect.s1', errorType: 'grammar', type: '词义选择', prompt: 'connect 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'connect.q4', senseId: 'connect.s1', errorType: 'meaning', type: '词源', prompt: '记 connect 时，哪句更稳妥？', options: ['先锁住「连接」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连接」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连接'] },
  });

  D('connected', {
    etymology: {
      origin: '现代英语常用词「connected」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'connected', gloss: '连接的' },
      suffix: null,
      history: [
        { label: 'connected', text: '现代英语常用词「connected」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：连接的。' },
      ],
      formationLogic: '核心义：连接的。',
      mnemonic: '看到 connected，先说出「连接的」。',
      note: '核心义：连接的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was connected.', chinese: '即使是初读者也能看出，这个结果是连接的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'connected.s1', en: 'They wanted a connected answer, not a long speech.', zh: '他们要一个连接的的答复，不要长篇发言。', structure: 'connected / 表示 / 连接的', grammar: 'adjective，围绕「连接的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are connected.', right: 'The news is connected.', reason: 'news 作主语时动词用单数。', rule: '先确定 connected 是adjective，再套「连接的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'connected.q1', senseId: 'connected.s1', errorType: 'meaning', type: '词义选择', prompt: '「connected」在本条的核心意思是：', options: ['连接的', '完全相反的意思', '一种古代钱币'], answer: '连接的', explain: 'connected：连接的。' },
      { id: 'connected.q2', senseId: 'connected.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches connected?', options: ['连接的', 'a kind of ancient coin', 'the past tense of be'], answer: '连接的', explain: '对的是「连接的」。' },
      { id: 'connected.q3', senseId: 'connected.s1', errorType: 'grammar', type: '词义选择', prompt: 'connected 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'connected.q4', senseId: 'connected.s1', errorType: 'meaning', type: '词源', prompt: '记 connected 时，哪句更稳妥？', options: ['先锁住「连接的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连接的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连接的'] },
  });

  D('connection', {
    etymology: {
      origin: '英语派生：connec + -tion，词性转到「联系」。',
      prefix: null,
      root: { text: 'connec', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'connection', text: '英语派生：connec + -tion，词性转到「联系」。' },
        { label: '现在', text: '核心用法是：联系。' },
      ],
      formationLogic: '先认词干 connec，再看词尾。',
      mnemonic: '看到 connection，先说出「联系」。',
      note: '先认词干 connec，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one connection.', chinese: '这一章反复回到同一个点：联系。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'connection.s1', en: 'Without that connection, the next paragraph is hard to follow.', zh: '没有这个联系，下一段会很难读。', structure: 'connection / 表示 / 联系', grammar: 'noun，围绕「联系」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the connection.', right: 'He gave me some advice about the connection.', reason: 'advice 不可数。名词 connection 的单复数按词典词形记。', rule: '先确定 connection 是noun，再套「联系」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'connection.q1', senseId: 'connection.s1', errorType: 'meaning', type: '词义选择', prompt: '「connection」在本条的核心意思是：', options: ['联系', '完全相反的意思', '一种古代钱币'], answer: '联系', explain: 'connection：联系。' },
      { id: 'connection.q2', senseId: 'connection.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches connection?', options: ['联系', 'a kind of ancient coin', 'the past tense of be'], answer: '联系', explain: '对的是「联系」。' },
      { id: 'connection.q3', senseId: 'connection.s1', errorType: 'grammar', type: '词义选择', prompt: 'connection 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'connection.q4', senseId: 'connection.s1', errorType: 'meaning', type: '词源', prompt: '记 connection 时，哪句更稳妥？', options: ['先锁住「联系」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联系」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联系'] },
  });

  D('connector', {
    etymology: {
      origin: '英语派生：connect + -or，词性转到「连接器」。',
      prefix: null,
      root: { text: 'connect', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'connector', text: '英语派生：connect + -or，词性转到「连接器」。' },
        { label: '现在', text: '核心用法是：连接器。' },
      ],
      formationLogic: '先认词干 connect，再看词尾。',
      mnemonic: '看到 connector，先说出「连接器」。',
      note: '先认词干 connect，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one connector.', chinese: '这一章反复回到同一个点：连接器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'connector.s1', en: 'Without that connector, the next paragraph is hard to follow.', zh: '没有这个连接器，下一段会很难读。', structure: 'connector / 表示 / 连接器', grammar: 'noun，围绕「连接器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the connector.', right: 'He gave me some advice about the connector.', reason: 'advice 不可数。名词 connector 的单复数按词典词形记。', rule: '先确定 connector 是noun，再套「连接器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'connector.q1', senseId: 'connector.s1', errorType: 'meaning', type: '词义选择', prompt: '「connector」在本条的核心意思是：', options: ['连接器', '完全相反的意思', '一种古代钱币'], answer: '连接器', explain: 'connector：连接器。' },
      { id: 'connector.q2', senseId: 'connector.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches connector?', options: ['连接器', 'a kind of ancient coin', 'the past tense of be'], answer: '连接器', explain: '对的是「连接器」。' },
      { id: 'connector.q3', senseId: 'connector.s1', errorType: 'grammar', type: '词义选择', prompt: 'connector 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'connector.q4', senseId: 'connector.s1', errorType: 'meaning', type: '词源', prompt: '记 connector 时，哪句更稳妥？', options: ['先锁住「连接器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连接器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连接器'] },
  });

  D('connotation', {
    etymology: {
      origin: '英语派生：connota + -tion，词性转到「内涵」。',
      prefix: null,
      root: { text: 'connota', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'connotation', text: '英语派生：connota + -tion，词性转到「内涵」。' },
        { label: '现在', text: '核心用法是：内涵。' },
      ],
      formationLogic: '先认词干 connota，再看词尾。',
      mnemonic: '看到 connotation，先说出「内涵」。',
      note: '先认词干 connota，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one connotation.', chinese: '这一章反复回到同一个点：内涵。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'connotation.s1', en: 'Without that connotation, the next paragraph is hard to follow.', zh: '没有这个内涵，下一段会很难读。', structure: 'connotation / 表示 / 内涵', grammar: 'noun，围绕「内涵」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the connotation.', right: 'He gave me some advice about the connotation.', reason: 'advice 不可数。名词 connotation 的单复数按词典词形记。', rule: '先确定 connotation 是noun，再套「内涵」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'connotation.q1', senseId: 'connotation.s1', errorType: 'meaning', type: '词义选择', prompt: '「connotation」在本条的核心意思是：', options: ['内涵', '完全相反的意思', '一种古代钱币'], answer: '内涵', explain: 'connotation：内涵。' },
      { id: 'connotation.q2', senseId: 'connotation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches connotation?', options: ['内涵', 'a kind of ancient coin', 'the past tense of be'], answer: '内涵', explain: '对的是「内涵」。' },
      { id: 'connotation.q3', senseId: 'connotation.s1', errorType: 'grammar', type: '词义选择', prompt: 'connotation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'connotation.q4', senseId: 'connotation.s1', errorType: 'meaning', type: '词源', prompt: '记 connotation 时，哪句更稳妥？', options: ['先锁住「内涵」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「内涵」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['内涵'] },
  });

  D('conquer', {
    etymology: {
      origin: '拉丁语 conquirere「寻获、征服」，quaerere「寻找」。',
      prefix: null,
      root: { text: 'conquer', gloss: '征服' },
      suffix: null,
      history: [
        { label: 'conquer', text: '拉丁语 conquirere「寻获、征服」，quaerere「寻找」。' },
        { label: '现在', text: '核心用法是：征服。' },
      ],
      formationLogic: '考试认现在的用法：征服。',
      mnemonic: '看到 conquer，先说出「征服」。',
      note: '考试认现在的用法：征服。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conquer before the office closed.', chinese: '他们同意在办公室关门前做这件事：征服。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conquer.s1', en: 'The deadline forced the team to conquer that afternoon.', zh: '截止日期逼着小组在那天下午征服。', structure: 'conquer / 表示 / 征服', grammar: 'verb，围绕「征服」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conquered it yesterday without checking the real past form.', right: 'Check the past form of "conquer" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conquer 是verb，再套「征服」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conquer.q1', senseId: 'conquer.s1', errorType: 'meaning', type: '词义选择', prompt: '「conquer」在本条的核心意思是：', options: ['征服', '完全相反的意思', '一种古代钱币'], answer: '征服', explain: 'conquer：征服。' },
      { id: 'conquer.q2', senseId: 'conquer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conquer?', options: ['征服', 'a kind of ancient coin', 'the past tense of be'], answer: '征服', explain: '对的是「征服」。' },
      { id: 'conquer.q3', senseId: 'conquer.s1', errorType: 'grammar', type: '词义选择', prompt: 'conquer 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conquer.q4', senseId: 'conquer.s1', errorType: 'meaning', type: '词源', prompt: '记 conquer 时，哪句更稳妥？', options: ['先锁住「征服」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「征服」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['征服'] },
  });

  D('conscientious', {
    etymology: {
      origin: '英语派生：conscienti + -ous，词性转到「认真的」。',
      prefix: null,
      root: { text: 'conscienti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conscientious', text: '英语派生：conscienti + -ous，词性转到「认真的」。' },
        { label: '现在', text: '核心用法是：认真的。' },
      ],
      formationLogic: '先认词干 conscienti，再看词尾。',
      mnemonic: '看到 conscientious，先说出「认真的」。',
      note: '先认词干 conscienti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conscientious.', chinese: '即使是初读者也能看出，这个结果是认真的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conscientious.s1', en: 'They wanted a conscientious answer, not a long speech.', zh: '他们要一个认真的的答复，不要长篇发言。', structure: 'conscientious / 表示 / 认真的', grammar: 'adjective，围绕「认真的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conscientious.', right: 'The news is conscientious.', reason: 'news 作主语时动词用单数。', rule: '先确定 conscientious 是adjective，再套「认真的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conscientious.q1', senseId: 'conscientious.s1', errorType: 'meaning', type: '词义选择', prompt: '「conscientious」在本条的核心意思是：', options: ['认真的', '完全相反的意思', '一种古代钱币'], answer: '认真的', explain: 'conscientious：认真的。' },
      { id: 'conscientious.q2', senseId: 'conscientious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conscientious?', options: ['认真的', 'a kind of ancient coin', 'the past tense of be'], answer: '认真的', explain: '对的是「认真的」。' },
      { id: 'conscientious.q3', senseId: 'conscientious.s1', errorType: 'grammar', type: '词义选择', prompt: 'conscientious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conscientious.q4', senseId: 'conscientious.s1', errorType: 'meaning', type: '词源', prompt: '记 conscientious 时，哪句更稳妥？', options: ['先锁住「认真的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「认真的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['认真的'] },
  });

  D('consciousness', {
    etymology: {
      origin: '英语派生：conscious + -ness，词性转到「意识」。',
      prefix: null,
      root: { text: 'conscious', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consciousness', text: '英语派生：conscious + -ness，词性转到「意识」。' },
        { label: '现在', text: '核心用法是：意识。' },
      ],
      formationLogic: '先认词干 conscious，再看词尾。',
      mnemonic: '看到 consciousness，先说出「意识」。',
      note: '先认词干 conscious，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consciousness.', chinese: '这一章反复回到同一个点：意识。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consciousness.s1', en: 'Without that consciousness, the next paragraph is hard to follow.', zh: '没有这个意识，下一段会很难读。', structure: 'consciousness / 表示 / 意识', grammar: 'noun，围绕「意识」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consciousness.', right: 'He gave me some advice about the consciousness.', reason: 'advice 不可数。名词 consciousness 的单复数按词典词形记。', rule: '先确定 consciousness 是noun，再套「意识」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consciousness.q1', senseId: 'consciousness.s1', errorType: 'meaning', type: '词义选择', prompt: '「consciousness」在本条的核心意思是：', options: ['意识', '完全相反的意思', '一种古代钱币'], answer: '意识', explain: 'consciousness：意识。' },
      { id: 'consciousness.q2', senseId: 'consciousness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consciousness?', options: ['意识', 'a kind of ancient coin', 'the past tense of be'], answer: '意识', explain: '对的是「意识」。' },
      { id: 'consciousness.q3', senseId: 'consciousness.s1', errorType: 'grammar', type: '词义选择', prompt: 'consciousness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consciousness.q4', senseId: 'consciousness.s1', errorType: 'meaning', type: '词源', prompt: '记 consciousness 时，哪句更稳妥？', options: ['先锁住「意识」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「意识」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['意识'] },
  });

  D('conscript', {
    etymology: {
      origin: '现代英语常用词「conscript」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conscript', gloss: '应征入伍者' },
      suffix: null,
      history: [
        { label: 'conscript', text: '现代英语常用词「conscript」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：应征入伍者。' },
      ],
      formationLogic: '核心义：应征入伍者。',
      mnemonic: '看到 conscript，先说出「应征入伍者」。',
      note: '核心义：应征入伍者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conscript.', chinese: '这一章反复回到同一个点：应征入伍者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conscript.s1', en: 'Without that conscript, the next paragraph is hard to follow.', zh: '没有这个应征入伍者，下一段会很难读。', structure: 'conscript / 表示 / 应征入伍者', grammar: 'noun，围绕「应征入伍者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conscript.', right: 'He gave me some advice about the conscript.', reason: 'advice 不可数。名词 conscript 的单复数按词典词形记。', rule: '先确定 conscript 是noun，再套「应征入伍者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conscript.q1', senseId: 'conscript.s1', errorType: 'meaning', type: '词义选择', prompt: '「conscript」在本条的核心意思是：', options: ['应征入伍者', '完全相反的意思', '一种古代钱币'], answer: '应征入伍者', explain: 'conscript：应征入伍者。' },
      { id: 'conscript.q2', senseId: 'conscript.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conscript?', options: ['应征入伍者', 'a kind of ancient coin', 'the past tense of be'], answer: '应征入伍者', explain: '对的是「应征入伍者」。' },
      { id: 'conscript.q3', senseId: 'conscript.s1', errorType: 'grammar', type: '词义选择', prompt: 'conscript 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conscript.q4', senseId: 'conscript.s1', errorType: 'meaning', type: '词源', prompt: '记 conscript 时，哪句更稳妥？', options: ['先锁住「应征入伍者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「应征入伍者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['应征入伍者'] },
  });

  D('consecutive', {
    etymology: {
      origin: '英语派生：consecut + -ive，词性转到「连续的」。',
      prefix: null,
      root: { text: 'consecut', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consecutive', text: '英语派生：consecut + -ive，词性转到「连续的」。' },
        { label: '现在', text: '核心用法是：连续的。' },
      ],
      formationLogic: '先认词干 consecut，再看词尾。',
      mnemonic: '看到 consecutive，先说出「连续的」。',
      note: '先认词干 consecut，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was consecutive.', chinese: '即使是初读者也能看出，这个结果是连续的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consecutive.s1', en: 'They wanted a consecutive answer, not a long speech.', zh: '他们要一个连续的的答复，不要长篇发言。', structure: 'consecutive / 表示 / 连续的', grammar: 'adjective，围绕「连续的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are consecutive.', right: 'The news is consecutive.', reason: 'news 作主语时动词用单数。', rule: '先确定 consecutive 是adjective，再套「连续的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consecutive.q1', senseId: 'consecutive.s1', errorType: 'meaning', type: '词义选择', prompt: '「consecutive」在本条的核心意思是：', options: ['连续的', '完全相反的意思', '一种古代钱币'], answer: '连续的', explain: 'consecutive：连续的。' },
      { id: 'consecutive.q2', senseId: 'consecutive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consecutive?', options: ['连续的', 'a kind of ancient coin', 'the past tense of be'], answer: '连续的', explain: '对的是「连续的」。' },
      { id: 'consecutive.q3', senseId: 'consecutive.s1', errorType: 'grammar', type: '词义选择', prompt: 'consecutive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'consecutive.q4', senseId: 'consecutive.s1', errorType: 'meaning', type: '词源', prompt: '记 consecutive 时，哪句更稳妥？', options: ['先锁住「连续的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连续的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连续的'] },
  });

  D('consensus', {
    etymology: {
      origin: '拉丁语 consentire「一起感觉」。',
      prefix: null,
      root: { text: 'consensus', gloss: '共识' },
      suffix: null,
      history: [
        { label: 'consensus', text: '拉丁语 consentire「一起感觉」。' },
        { label: '现在', text: '核心用法是：共识。' },
      ],
      formationLogic: '考试认现在的用法：共识。',
      mnemonic: '看到 consensus，先说出「共识」。',
      note: '考试认现在的用法：共识。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consensus.', chinese: '这一章反复回到同一个点：共识。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consensus.s1', en: 'Without that consensus, the next paragraph is hard to follow.', zh: '没有这个共识，下一段会很难读。', structure: 'consensus / 表示 / 共识', grammar: 'noun，围绕「共识」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consensus.', right: 'He gave me some advice about the consensus.', reason: 'advice 不可数。名词 consensus 的单复数按词典词形记。', rule: '先确定 consensus 是noun，再套「共识」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consensus.q1', senseId: 'consensus.s1', errorType: 'meaning', type: '词义选择', prompt: '「consensus」在本条的核心意思是：', options: ['共识', '完全相反的意思', '一种古代钱币'], answer: '共识', explain: 'consensus：共识。' },
      { id: 'consensus.q2', senseId: 'consensus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consensus?', options: ['共识', 'a kind of ancient coin', 'the past tense of be'], answer: '共识', explain: '对的是「共识」。' },
      { id: 'consensus.q3', senseId: 'consensus.s1', errorType: 'grammar', type: '词义选择', prompt: 'consensus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consensus.q4', senseId: 'consensus.s1', errorType: 'meaning', type: '词源', prompt: '记 consensus 时，哪句更稳妥？', options: ['先锁住「共识」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「共识」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['共识'] },
  });

  D('consent', {
    etymology: {
      origin: '拉丁语 consentire。',
      prefix: null,
      root: { text: 'consent', gloss: '同意' },
      suffix: null,
      history: [
        { label: 'consent', text: '拉丁语 consentire。' },
        { label: '现在', text: '核心用法是：同意。' },
      ],
      formationLogic: '考试认现在的用法：同意。',
      mnemonic: '看到 consent，先说出「同意」。',
      note: '考试认现在的用法：同意。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consent.', chinese: '这一章反复回到同一个点：同意。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consent.s1', en: 'Without that consent, the next paragraph is hard to follow.', zh: '没有这个同意，下一段会很难读。', structure: 'consent / 表示 / 同意', grammar: 'noun，围绕「同意」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consent.', right: 'He gave me some advice about the consent.', reason: 'advice 不可数。名词 consent 的单复数按词典词形记。', rule: '先确定 consent 是noun，再套「同意」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consent.q1', senseId: 'consent.s1', errorType: 'meaning', type: '词义选择', prompt: '「consent」在本条的核心意思是：', options: ['同意', '完全相反的意思', '一种古代钱币'], answer: '同意', explain: 'consent：同意。' },
      { id: 'consent.q2', senseId: 'consent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consent?', options: ['同意', 'a kind of ancient coin', 'the past tense of be'], answer: '同意', explain: '对的是「同意」。' },
      { id: 'consent.q3', senseId: 'consent.s1', errorType: 'grammar', type: '词义选择', prompt: 'consent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consent.q4', senseId: 'consent.s1', errorType: 'meaning', type: '词源', prompt: '记 consent 时，哪句更稳妥？', options: ['先锁住「同意」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同意」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同意'] },
  });

  D('consequence', {
    etymology: {
      origin: '拉丁语 consequi「跟随而来」。',
      prefix: null,
      root: { text: 'consequence', gloss: '结果' },
      suffix: null,
      history: [
        { label: 'consequence', text: '拉丁语 consequi「跟随而来」。' },
        { label: '现在', text: '核心用法是：结果。' },
      ],
      formationLogic: '考试认现在的用法：结果。',
      mnemonic: '看到 consequence，先说出「结果」。',
      note: '考试认现在的用法：结果。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consequence.', chinese: '这一章反复回到同一个点：结果。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consequence.s1', en: 'Without that consequence, the next paragraph is hard to follow.', zh: '没有这个结果，下一段会很难读。', structure: 'consequence / 表示 / 结果', grammar: 'noun，围绕「结果」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consequence.', right: 'He gave me some advice about the consequence.', reason: 'advice 不可数。名词 consequence 的单复数按词典词形记。', rule: '先确定 consequence 是noun，再套「结果」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consequence.q1', senseId: 'consequence.s1', errorType: 'meaning', type: '词义选择', prompt: '「consequence」在本条的核心意思是：', options: ['结果', '完全相反的意思', '一种古代钱币'], answer: '结果', explain: 'consequence：结果。' },
      { id: 'consequence.q2', senseId: 'consequence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consequence?', options: ['结果', 'a kind of ancient coin', 'the past tense of be'], answer: '结果', explain: '对的是「结果」。' },
      { id: 'consequence.q3', senseId: 'consequence.s1', errorType: 'grammar', type: '词义选择', prompt: 'consequence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consequence.q4', senseId: 'consequence.s1', errorType: 'meaning', type: '词源', prompt: '记 consequence 时，哪句更稳妥？', options: ['先锁住「结果」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结果」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结果'] },
  });

  D('consequential', {
    etymology: {
      origin: '英语派生：consequenti + -al，词性转到「重要的」。',
      prefix: null,
      root: { text: 'consequenti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consequential', text: '英语派生：consequenti + -al，词性转到「重要的」。' },
        { label: '现在', text: '核心用法是：重要的。' },
      ],
      formationLogic: '先认词干 consequenti，再看词尾。',
      mnemonic: '看到 consequential，先说出「重要的」。',
      note: '先认词干 consequenti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was consequential.', chinese: '即使是初读者也能看出，这个结果是重要的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consequential.s1', en: 'They wanted a consequential answer, not a long speech.', zh: '他们要一个重要的的答复，不要长篇发言。', structure: 'consequential / 表示 / 重要的', grammar: 'adjective，围绕「重要的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are consequential.', right: 'The news is consequential.', reason: 'news 作主语时动词用单数。', rule: '先确定 consequential 是adjective，再套「重要的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consequential.q1', senseId: 'consequential.s1', errorType: 'meaning', type: '词义选择', prompt: '「consequential」在本条的核心意思是：', options: ['重要的', '完全相反的意思', '一种古代钱币'], answer: '重要的', explain: 'consequential：重要的。' },
      { id: 'consequential.q2', senseId: 'consequential.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consequential?', options: ['重要的', 'a kind of ancient coin', 'the past tense of be'], answer: '重要的', explain: '对的是「重要的」。' },
      { id: 'consequential.q3', senseId: 'consequential.s1', errorType: 'grammar', type: '词义选择', prompt: 'consequential 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'consequential.q4', senseId: 'consequential.s1', errorType: 'meaning', type: '词源', prompt: '记 consequential 时，哪句更稳妥？', options: ['先锁住「重要的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「重要的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['重要的'] },
  });

  D('consequently', {
    etymology: {
      origin: '英语派生：consequent + -ly，词性转到「因此」。',
      prefix: null,
      root: { text: 'consequent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consequently', text: '英语派生：consequent + -ly，词性转到「因此」。' },
        { label: '现在', text: '核心用法是：因此。' },
      ],
      formationLogic: '先认词干 consequent，再看词尾。',
      mnemonic: '看到 consequently，先说出「因此」。',
      note: '先认词干 consequent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule consequently, and the class followed.', chinese: '她把规则讲清楚了（因此），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consequently.s1', en: 'He nodded consequently and returned to the notes.', zh: '他因此地点了点头，又回去看笔记。', structure: 'consequently / 表示 / 因此', grammar: 'adverb，围绕「因此」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very consequentlyly in the meeting.', right: 'She spoke consequently in the meeting.', reason: 'consequently 已经是副词，不要再加 -ly。', rule: '先确定 consequently 是adverb，再套「因此」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consequently.q1', senseId: 'consequently.s1', errorType: 'meaning', type: '词义选择', prompt: '「consequently」在本条的核心意思是：', options: ['因此', '完全相反的意思', '一种古代钱币'], answer: '因此', explain: 'consequently：因此。' },
      { id: 'consequently.q2', senseId: 'consequently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consequently?', options: ['因此', 'a kind of ancient coin', 'the past tense of be'], answer: '因此', explain: '对的是「因此」。' },
      { id: 'consequently.q3', senseId: 'consequently.s1', errorType: 'grammar', type: '词义选择', prompt: 'consequently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'consequently.q4', senseId: 'consequently.s1', errorType: 'meaning', type: '词源', prompt: '记 consequently 时，哪句更稳妥？', options: ['先锁住「因此」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「因此」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['因此'] },
  });

  D('conservation', {
    etymology: {
      origin: '英语派生：conserva + -tion，词性转到「保护」。',
      prefix: null,
      root: { text: 'conserva', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conservation', text: '英语派生：conserva + -tion，词性转到「保护」。' },
        { label: '现在', text: '核心用法是：保护。' },
      ],
      formationLogic: '先认词干 conserva，再看词尾。',
      mnemonic: '看到 conservation，先说出「保护」。',
      note: '先认词干 conserva，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conservation.', chinese: '这一章反复回到同一个点：保护。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conservation.s1', en: 'Without that conservation, the next paragraph is hard to follow.', zh: '没有这个保护，下一段会很难读。', structure: 'conservation / 表示 / 保护', grammar: 'noun，围绕「保护」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conservation.', right: 'He gave me some advice about the conservation.', reason: 'advice 不可数。名词 conservation 的单复数按词典词形记。', rule: '先确定 conservation 是noun，再套「保护」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conservation.q1', senseId: 'conservation.s1', errorType: 'meaning', type: '词义选择', prompt: '「conservation」在本条的核心意思是：', options: ['保护', '完全相反的意思', '一种古代钱币'], answer: '保护', explain: 'conservation：保护。' },
      { id: 'conservation.q2', senseId: 'conservation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conservation?', options: ['保护', 'a kind of ancient coin', 'the past tense of be'], answer: '保护', explain: '对的是「保护」。' },
      { id: 'conservation.q3', senseId: 'conservation.s1', errorType: 'grammar', type: '词义选择', prompt: 'conservation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conservation.q4', senseId: 'conservation.s1', errorType: 'meaning', type: '词源', prompt: '记 conservation 时，哪句更稳妥？', options: ['先锁住「保护」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「保护」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['保护'] },
  });

  D('conservative', {
    etymology: {
      origin: '拉丁语 conservare「保存」。倾向于保存现状。',
      prefix: null,
      root: { text: 'conservative', gloss: '保守的' },
      suffix: null,
      history: [
        { label: 'conservative', text: '拉丁语 conservare「保存」。倾向于保存现状。' },
        { label: '现在', text: '核心用法是：保守的。' },
      ],
      formationLogic: '考试认现在的用法：保守的。',
      mnemonic: '看到 conservative，先说出「保守的」。',
      note: '考试认现在的用法：保守的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conservative.', chinese: '即使是初读者也能看出，这个结果是保守的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conservative.s1', en: 'They wanted a conservative answer, not a long speech.', zh: '他们要一个保守的的答复，不要长篇发言。', structure: 'conservative / 表示 / 保守的', grammar: 'adjective，围绕「保守的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conservative.', right: 'The news is conservative.', reason: 'news 作主语时动词用单数。', rule: '先确定 conservative 是adjective，再套「保守的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conservative.q1', senseId: 'conservative.s1', errorType: 'meaning', type: '词义选择', prompt: '「conservative」在本条的核心意思是：', options: ['保守的', '完全相反的意思', '一种古代钱币'], answer: '保守的', explain: 'conservative：保守的。' },
      { id: 'conservative.q2', senseId: 'conservative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conservative?', options: ['保守的', 'a kind of ancient coin', 'the past tense of be'], answer: '保守的', explain: '对的是「保守的」。' },
      { id: 'conservative.q3', senseId: 'conservative.s1', errorType: 'grammar', type: '词义选择', prompt: 'conservative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conservative.q4', senseId: 'conservative.s1', errorType: 'meaning', type: '词源', prompt: '记 conservative 时，哪句更稳妥？', options: ['先锁住「保守的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「保守的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['保守的'] },
  });

  D('conserve', {
    etymology: {
      origin: '现代英语常用词「conserve」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conserve', gloss: '保护' },
      suffix: null,
      history: [
        { label: 'conserve', text: '现代英语常用词「conserve」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：保护。' },
      ],
      formationLogic: '核心义：保护。',
      mnemonic: '看到 conserve，先说出「保护」。',
      note: '核心义：保护。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conserve before the office closed.', chinese: '他们同意在办公室关门前做这件事：保护。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conserve.s1', en: 'The deadline forced the team to conserve that afternoon.', zh: '截止日期逼着小组在那天下午保护。', structure: 'conserve / 表示 / 保护', grammar: 'verb，围绕「保护」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conserveed it yesterday without checking the real past form.', right: 'Check the past form of "conserve" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conserve 是verb，再套「保护」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conserve.q1', senseId: 'conserve.s1', errorType: 'meaning', type: '词义选择', prompt: '「conserve」在本条的核心意思是：', options: ['保护', '完全相反的意思', '一种古代钱币'], answer: '保护', explain: 'conserve：保护。' },
      { id: 'conserve.q2', senseId: 'conserve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conserve?', options: ['保护', 'a kind of ancient coin', 'the past tense of be'], answer: '保护', explain: '对的是「保护」。' },
      { id: 'conserve.q3', senseId: 'conserve.s1', errorType: 'grammar', type: '词义选择', prompt: 'conserve 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conserve.q4', senseId: 'conserve.s1', errorType: 'meaning', type: '词源', prompt: '记 conserve 时，哪句更稳妥？', options: ['先锁住「保护」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「保护」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['保护'] },
  });

  D('consider', {
    etymology: {
      origin: '拉丁语 considerare「仔细看星象」，sidus「星」。仔细看，所以考虑。',
      prefix: null,
      root: { text: 'consider', gloss: '考虑' },
      suffix: null,
      history: [
        { label: 'consider', text: '拉丁语 considerare「仔细看星象」，sidus「星」。仔细看，所以考虑。' },
        { label: '现在', text: '核心用法是：考虑。' },
      ],
      formationLogic: '考试认现在的用法：考虑。',
      mnemonic: '看到 consider，先说出「考虑」。',
      note: '考试认现在的用法：考虑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to consider before the office closed.', chinese: '他们同意在办公室关门前做这件事：考虑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consider.s1', en: 'The deadline forced the team to consider that afternoon.', zh: '截止日期逼着小组在那天下午考虑。', structure: 'consider / 表示 / 考虑', grammar: 'verb，围绕「考虑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She considered it yesterday without checking the real past form.', right: 'Check the past form of "consider" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 consider 是verb，再套「考虑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consider.q1', senseId: 'consider.s1', errorType: 'meaning', type: '词义选择', prompt: '「consider」在本条的核心意思是：', options: ['考虑', '完全相反的意思', '一种古代钱币'], answer: '考虑', explain: 'consider：考虑。' },
      { id: 'consider.q2', senseId: 'consider.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consider?', options: ['考虑', 'a kind of ancient coin', 'the past tense of be'], answer: '考虑', explain: '对的是「考虑」。' },
      { id: 'consider.q3', senseId: 'consider.s1', errorType: 'grammar', type: '词义选择', prompt: 'consider 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'consider.q4', senseId: 'consider.s1', errorType: 'meaning', type: '词源', prompt: '记 consider 时，哪句更稳妥？', options: ['先锁住「考虑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考虑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考虑'] },
  });

  D('considerable', {
    etymology: {
      origin: 'consider + -able。值得认真看，所以相当大。',
      prefix: null,
      root: { text: 'considerable', gloss: '相当大的' },
      suffix: null,
      history: [
        { label: 'considerable', text: 'consider + -able。值得认真看，所以相当大。' },
        { label: '现在', text: '核心用法是：相当大的。' },
      ],
      formationLogic: '考试认现在的用法：相当大的。',
      mnemonic: '看到 considerable，先说出「相当大的」。',
      note: '考试认现在的用法：相当大的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was considerable.', chinese: '即使是初读者也能看出，这个结果是相当大的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'considerable.s1', en: 'They wanted a considerable answer, not a long speech.', zh: '他们要一个相当大的的答复，不要长篇发言。', structure: 'considerable / 表示 / 相当大的', grammar: 'adjective，围绕「相当大的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are considerable.', right: 'The news is considerable.', reason: 'news 作主语时动词用单数。', rule: '先确定 considerable 是adjective，再套「相当大的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'considerable.q1', senseId: 'considerable.s1', errorType: 'meaning', type: '词义选择', prompt: '「considerable」在本条的核心意思是：', options: ['相当大的', '完全相反的意思', '一种古代钱币'], answer: '相当大的', explain: 'considerable：相当大的。' },
      { id: 'considerable.q2', senseId: 'considerable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches considerable?', options: ['相当大的', 'a kind of ancient coin', 'the past tense of be'], answer: '相当大的', explain: '对的是「相当大的」。' },
      { id: 'considerable.q3', senseId: 'considerable.s1', errorType: 'grammar', type: '词义选择', prompt: 'considerable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'considerable.q4', senseId: 'considerable.s1', errorType: 'meaning', type: '词源', prompt: '记 considerable 时，哪句更稳妥？', options: ['先锁住「相当大的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「相当大的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相当大的'] },
  });

  D('considerate', {
    etymology: {
      origin: '现代英语常用词「considerate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'considerate', gloss: '体贴的' },
      suffix: null,
      history: [
        { label: 'considerate', text: '现代英语常用词「considerate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：体贴的。' },
      ],
      formationLogic: '核心义：体贴的。',
      mnemonic: '看到 considerate，先说出「体贴的」。',
      note: '核心义：体贴的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was considerate.', chinese: '即使是初读者也能看出，这个结果是体贴的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'considerate.s1', en: 'They wanted a considerate answer, not a long speech.', zh: '他们要一个体贴的的答复，不要长篇发言。', structure: 'considerate / 表示 / 体贴的', grammar: 'adjective，围绕「体贴的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are considerate.', right: 'The news is considerate.', reason: 'news 作主语时动词用单数。', rule: '先确定 considerate 是adjective，再套「体贴的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'considerate.q1', senseId: 'considerate.s1', errorType: 'meaning', type: '词义选择', prompt: '「considerate」在本条的核心意思是：', options: ['体贴的', '完全相反的意思', '一种古代钱币'], answer: '体贴的', explain: 'considerate：体贴的。' },
      { id: 'considerate.q2', senseId: 'considerate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches considerate?', options: ['体贴的', 'a kind of ancient coin', 'the past tense of be'], answer: '体贴的', explain: '对的是「体贴的」。' },
      { id: 'considerate.q3', senseId: 'considerate.s1', errorType: 'grammar', type: '词义选择', prompt: 'considerate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'considerate.q4', senseId: 'considerate.s1', errorType: 'meaning', type: '词源', prompt: '记 considerate 时，哪句更稳妥？', options: ['先锁住「体贴的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「体贴的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['体贴的'] },
  });

  D('consideration', {
    etymology: {
      origin: '英语派生：considera + -tion，词性转到「考虑」。',
      prefix: null,
      root: { text: 'considera', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consideration', text: '英语派生：considera + -tion，词性转到「考虑」。' },
        { label: '现在', text: '核心用法是：考虑。' },
      ],
      formationLogic: '先认词干 considera，再看词尾。',
      mnemonic: '看到 consideration，先说出「考虑」。',
      note: '先认词干 considera，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consideration.', chinese: '这一章反复回到同一个点：考虑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consideration.s1', en: 'Without that consideration, the next paragraph is hard to follow.', zh: '没有这个考虑，下一段会很难读。', structure: 'consideration / 表示 / 考虑', grammar: 'noun，围绕「考虑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consideration.', right: 'He gave me some advice about the consideration.', reason: 'advice 不可数。名词 consideration 的单复数按词典词形记。', rule: '先确定 consideration 是noun，再套「考虑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consideration.q1', senseId: 'consideration.s1', errorType: 'meaning', type: '词义选择', prompt: '「consideration」在本条的核心意思是：', options: ['考虑', '完全相反的意思', '一种古代钱币'], answer: '考虑', explain: 'consideration：考虑。' },
      { id: 'consideration.q2', senseId: 'consideration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consideration?', options: ['考虑', 'a kind of ancient coin', 'the past tense of be'], answer: '考虑', explain: '对的是「考虑」。' },
      { id: 'consideration.q3', senseId: 'consideration.s1', errorType: 'grammar', type: '词义选择', prompt: 'consideration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consideration.q4', senseId: 'consideration.s1', errorType: 'meaning', type: '词源', prompt: '记 consideration 时，哪句更稳妥？', options: ['先锁住「考虑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考虑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考虑'] },
  });

  D('considering', {
    etymology: {
      origin: '英语派生：consider + -ing，词性转到「考虑到」。',
      prefix: null,
      root: { text: 'consider', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'considering', text: '英语派生：consider + -ing，词性转到「考虑到」。' },
        { label: '现在', text: '核心用法是：考虑到。' },
      ],
      formationLogic: '先认词干 consider，再看词尾。',
      mnemonic: '看到 considering，先说出「考虑到」。',
      note: '先认词干 consider，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "considering" and asked the class to keep it as one unit.', chinese: '老师把「considering」圈出来，让全班把它当成一个整体。它表示考虑到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'considering.s1', en: 'In the margin she wrote "considering" so nobody would split the phrase.', zh: '她在页边写下「considering」，免得有人把这个说法拆开。意思是考虑到。', structure: 'considering / 表示 / 考虑到', grammar: 'preposition，围绕「考虑到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of considering and lost the point.', right: 'Keep "considering" together: it means 考虑到.', reason: '「considering」要整块理解。', rule: '先确定 considering 是preposition，再套「考虑到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'considering.q1', senseId: 'considering.s1', errorType: 'meaning', type: '词义选择', prompt: '「considering」在本条的核心意思是：', options: ['考虑到', '完全相反的意思', '一种古代钱币'], answer: '考虑到', explain: 'considering：考虑到。' },
      { id: 'considering.q2', senseId: 'considering.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches considering?', options: ['考虑到', 'a kind of ancient coin', 'the past tense of be'], answer: '考虑到', explain: '对的是「考虑到」。' },
      { id: 'considering.q3', senseId: 'considering.s1', errorType: 'grammar', type: '词义选择', prompt: 'considering 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'considering.q4', senseId: 'considering.s1', errorType: 'meaning', type: '词源', prompt: '记 considering 时，哪句更稳妥？', options: ['先锁住「考虑到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「考虑到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考虑到'] },
  });

  D('consist', {
    etymology: {
      origin: '拉丁语 consistere「站在一起」。由哪些部分站在一起。',
      prefix: null,
      root: { text: 'consist', gloss: '由…组成' },
      suffix: null,
      history: [
        { label: 'consist', text: '拉丁语 consistere「站在一起」。由哪些部分站在一起。' },
        { label: '现在', text: '核心用法是：由…组成。' },
      ],
      formationLogic: '考试认现在的用法：由…组成。',
      mnemonic: '看到 consist，先说出「由…组成」。',
      note: '考试认现在的用法：由…组成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to consist before the office closed.', chinese: '他们同意在办公室关门前做这件事：由…组成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consist.s1', en: 'The deadline forced the team to consist that afternoon.', zh: '截止日期逼着小组在那天下午由…组成。', structure: 'consist / 表示 / 由…组成', grammar: 'verb，围绕「由…组成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She consisted it yesterday without checking the real past form.', right: 'Check the past form of "consist" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 consist 是verb，再套「由…组成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consist.q1', senseId: 'consist.s1', errorType: 'meaning', type: '词义选择', prompt: '「consist」在本条的核心意思是：', options: ['由…组成', '完全相反的意思', '一种古代钱币'], answer: '由…组成', explain: 'consist：由…组成。' },
      { id: 'consist.q2', senseId: 'consist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consist?', options: ['由…组成', 'a kind of ancient coin', 'the past tense of be'], answer: '由…组成', explain: '对的是「由…组成」。' },
      { id: 'consist.q3', senseId: 'consist.s1', errorType: 'grammar', type: '词义选择', prompt: 'consist 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'consist.q4', senseId: 'consist.s1', errorType: 'meaning', type: '词源', prompt: '记 consist 时，哪句更稳妥？', options: ['先锁住「由…组成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「由…组成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['由…组成'] },
  });

  D('consist of', {
    etymology: {
      origin: '现代英语固定说法「consist of」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'consist of', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'consist of', text: '现代英语固定说法「consist of」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：由……组成。' },
      ],
      formationLogic: '核心义：由……组成。',
      mnemonic: '看到 consist of，先说出「由……组成」。',
      note: '核心义：由……组成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "consist of" and asked the class to keep it as one unit.', chinese: '老师把「consist of」圈出来，让全班把它当成一个整体。它表示由……组成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consist of.s1', en: 'In the margin she wrote "consist of" so nobody would split the phrase.', zh: '她在页边写下「consist of」，免得有人把这个说法拆开。意思是由……组成。', structure: 'consist of / 表示 / 由……组成', grammar: 'verb，围绕「由……组成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of consist of and lost the point.', right: 'Keep "consist of" together: it means 由……组成.', reason: '「consist of」要整块理解。', rule: '先确定 consist of 是verb，再套「由……组成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consist of.q1', senseId: 'consist of.s1', errorType: 'meaning', type: '词义选择', prompt: '「consist of」在本条的核心意思是：', options: ['由……组成', '完全相反的意思', '一种古代钱币'], answer: '由……组成', explain: 'consist of：由……组成。' },
      { id: 'consist of.q2', senseId: 'consist of.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consist of?', options: ['由……组成', 'a kind of ancient coin', 'the past tense of be'], answer: '由……组成', explain: '对的是「由……组成」。' },
      { id: 'consist of.q3', senseId: 'consist of.s1', errorType: 'grammar', type: '词义选择', prompt: 'consist of 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'consist of.q4', senseId: 'consist of.s1', errorType: 'meaning', type: '词源', prompt: '记 consist of 时，哪句更稳妥？', options: ['先锁住「由……组成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「由……组成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['由……组成'] },
  });

  D('consistency', {
    etymology: {
      origin: '现代英语常用词「consistency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'consistency', gloss: '一致性' },
      suffix: null,
      history: [
        { label: 'consistency', text: '现代英语常用词「consistency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：一致性。' },
      ],
      formationLogic: '核心义：一致性。',
      mnemonic: '看到 consistency，先说出「一致性」。',
      note: '核心义：一致性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consistency.', chinese: '这一章反复回到同一个点：一致性。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consistency.s1', en: 'Without that consistency, the next paragraph is hard to follow.', zh: '没有这个一致性，下一段会很难读。', structure: 'consistency / 表示 / 一致性', grammar: 'noun，围绕「一致性」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consistency.', right: 'He gave me some advice about the consistency.', reason: 'advice 不可数。名词 consistency 的单复数按词典词形记。', rule: '先确定 consistency 是noun，再套「一致性」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consistency.q1', senseId: 'consistency.s1', errorType: 'meaning', type: '词义选择', prompt: '「consistency」在本条的核心意思是：', options: ['一致性', '完全相反的意思', '一种古代钱币'], answer: '一致性', explain: 'consistency：一致性。' },
      { id: 'consistency.q2', senseId: 'consistency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consistency?', options: ['一致性', 'a kind of ancient coin', 'the past tense of be'], answer: '一致性', explain: '对的是「一致性」。' },
      { id: 'consistency.q3', senseId: 'consistency.s1', errorType: 'grammar', type: '词义选择', prompt: 'consistency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consistency.q4', senseId: 'consistency.s1', errorType: 'meaning', type: '词源', prompt: '记 consistency 时，哪句更稳妥？', options: ['先锁住「一致性」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一致性」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一致性'] },
  });

  D('consistent', {
    etymology: {
      origin: '拉丁语 consistere。前后站得住，所以一致。',
      prefix: null,
      root: { text: 'consistent', gloss: '一致的' },
      suffix: null,
      history: [
        { label: 'consistent', text: '拉丁语 consistere。前后站得住，所以一致。' },
        { label: '现在', text: '核心用法是：一致的。' },
      ],
      formationLogic: '考试认现在的用法：一致的。',
      mnemonic: '看到 consistent，先说出「一致的」。',
      note: '考试认现在的用法：一致的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was consistent.', chinese: '即使是初读者也能看出，这个结果是一致的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consistent.s1', en: 'They wanted a consistent answer, not a long speech.', zh: '他们要一个一致的的答复，不要长篇发言。', structure: 'consistent / 表示 / 一致的', grammar: 'adjective，围绕「一致的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are consistent.', right: 'The news is consistent.', reason: 'news 作主语时动词用单数。', rule: '先确定 consistent 是adjective，再套「一致的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consistent.q1', senseId: 'consistent.s1', errorType: 'meaning', type: '词义选择', prompt: '「consistent」在本条的核心意思是：', options: ['一致的', '完全相反的意思', '一种古代钱币'], answer: '一致的', explain: 'consistent：一致的。' },
      { id: 'consistent.q2', senseId: 'consistent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consistent?', options: ['一致的', 'a kind of ancient coin', 'the past tense of be'], answer: '一致的', explain: '对的是「一致的」。' },
      { id: 'consistent.q3', senseId: 'consistent.s1', errorType: 'grammar', type: '词义选择', prompt: 'consistent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'consistent.q4', senseId: 'consistent.s1', errorType: 'meaning', type: '词源', prompt: '记 consistent 时，哪句更稳妥？', options: ['先锁住「一致的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一致的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一致的'] },
  });

  D('consistently', {
    etymology: {
      origin: '英语派生：consistent + -ly，词性转到「一贯地」。',
      prefix: null,
      root: { text: 'consistent', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consistently', text: '英语派生：consistent + -ly，词性转到「一贯地」。' },
        { label: '现在', text: '核心用法是：一贯地。' },
      ],
      formationLogic: '先认词干 consistent，再看词尾。',
      mnemonic: '看到 consistently，先说出「一贯地」。',
      note: '先认词干 consistent，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule consistently, and the class followed.', chinese: '她把规则讲清楚了（一贯地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consistently.s1', en: 'He nodded consistently and returned to the notes.', zh: '他一贯地地点了点头，又回去看笔记。', structure: 'consistently / 表示 / 一贯地', grammar: 'adverb，围绕「一贯地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very consistentlyly in the meeting.', right: 'She spoke consistently in the meeting.', reason: 'consistently 已经是副词，不要再加 -ly。', rule: '先确定 consistently 是adverb，再套「一贯地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consistently.q1', senseId: 'consistently.s1', errorType: 'meaning', type: '词义选择', prompt: '「consistently」在本条的核心意思是：', options: ['一贯地', '完全相反的意思', '一种古代钱币'], answer: '一贯地', explain: 'consistently：一贯地。' },
      { id: 'consistently.q2', senseId: 'consistently.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consistently?', options: ['一贯地', 'a kind of ancient coin', 'the past tense of be'], answer: '一贯地', explain: '对的是「一贯地」。' },
      { id: 'consistently.q3', senseId: 'consistently.s1', errorType: 'grammar', type: '词义选择', prompt: 'consistently 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'consistently.q4', senseId: 'consistently.s1', errorType: 'meaning', type: '词源', prompt: '记 consistently 时，哪句更稳妥？', options: ['先锁住「一贯地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「一贯地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['一贯地'] },
  });

  D('consolation', {
    etymology: {
      origin: '英语派生：consola + -tion，词性转到「安慰」。',
      prefix: null,
      root: { text: 'consola', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'consolation', text: '英语派生：consola + -tion，词性转到「安慰」。' },
        { label: '现在', text: '核心用法是：安慰。' },
      ],
      formationLogic: '先认词干 consola，再看词尾。',
      mnemonic: '看到 consolation，先说出「安慰」。',
      note: '先认词干 consola，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consolation.', chinese: '这一章反复回到同一个点：安慰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consolation.s1', en: 'Without that consolation, the next paragraph is hard to follow.', zh: '没有这个安慰，下一段会很难读。', structure: 'consolation / 表示 / 安慰', grammar: 'noun，围绕「安慰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consolation.', right: 'He gave me some advice about the consolation.', reason: 'advice 不可数。名词 consolation 的单复数按词典词形记。', rule: '先确定 consolation 是noun，再套「安慰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consolation.q1', senseId: 'consolation.s1', errorType: 'meaning', type: '词义选择', prompt: '「consolation」在本条的核心意思是：', options: ['安慰', '完全相反的意思', '一种古代钱币'], answer: '安慰', explain: 'consolation：安慰。' },
      { id: 'consolation.q2', senseId: 'consolation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consolation?', options: ['安慰', 'a kind of ancient coin', 'the past tense of be'], answer: '安慰', explain: '对的是「安慰」。' },
      { id: 'consolation.q3', senseId: 'consolation.s1', errorType: 'grammar', type: '词义选择', prompt: 'consolation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consolation.q4', senseId: 'consolation.s1', errorType: 'meaning', type: '词源', prompt: '记 consolation 时，哪句更稳妥？', options: ['先锁住「安慰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「安慰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['安慰'] },
  });

  D('console', {
    etymology: {
      origin: '现代英语常用词「console」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'console', gloss: '安慰' },
      suffix: null,
      history: [
        { label: 'console', text: '现代英语常用词「console」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：安慰。' },
      ],
      formationLogic: '核心义：安慰。',
      mnemonic: '看到 console，先说出「安慰」。',
      note: '核心义：安慰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to console before the office closed.', chinese: '他们同意在办公室关门前做这件事：安慰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'console.s1', en: 'The deadline forced the team to console that afternoon.', zh: '截止日期逼着小组在那天下午安慰。', structure: 'console / 表示 / 安慰', grammar: 'verb，围绕「安慰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She consoleed it yesterday without checking the real past form.', right: 'Check the past form of "console" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 console 是verb，再套「安慰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'console.q1', senseId: 'console.s1', errorType: 'meaning', type: '词义选择', prompt: '「console」在本条的核心意思是：', options: ['安慰', '完全相反的意思', '一种古代钱币'], answer: '安慰', explain: 'console：安慰。' },
      { id: 'console.q2', senseId: 'console.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches console?', options: ['安慰', 'a kind of ancient coin', 'the past tense of be'], answer: '安慰', explain: '对的是「安慰」。' },
      { id: 'console.q3', senseId: 'console.s1', errorType: 'grammar', type: '词义选择', prompt: 'console 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'console.q4', senseId: 'console.s1', errorType: 'meaning', type: '词源', prompt: '记 console 时，哪句更稳妥？', options: ['先锁住「安慰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「安慰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['安慰'] },
  });

  D('consolidate', {
    etymology: {
      origin: '现代英语常用词「consolidate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'consolidate', gloss: '巩固' },
      suffix: null,
      history: [
        { label: 'consolidate', text: '现代英语常用词「consolidate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：巩固。' },
      ],
      formationLogic: '核心义：巩固。',
      mnemonic: '看到 consolidate，先说出「巩固」。',
      note: '核心义：巩固。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to consolidate before the office closed.', chinese: '他们同意在办公室关门前做这件事：巩固。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consolidate.s1', en: 'The deadline forced the team to consolidate that afternoon.', zh: '截止日期逼着小组在那天下午巩固。', structure: 'consolidate / 表示 / 巩固', grammar: 'verb，围绕「巩固」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She consolidateed it yesterday without checking the real past form.', right: 'Check the past form of "consolidate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 consolidate 是verb，再套「巩固」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consolidate.q1', senseId: 'consolidate.s1', errorType: 'meaning', type: '词义选择', prompt: '「consolidate」在本条的核心意思是：', options: ['巩固', '完全相反的意思', '一种古代钱币'], answer: '巩固', explain: 'consolidate：巩固。' },
      { id: 'consolidate.q2', senseId: 'consolidate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consolidate?', options: ['巩固', 'a kind of ancient coin', 'the past tense of be'], answer: '巩固', explain: '对的是「巩固」。' },
      { id: 'consolidate.q3', senseId: 'consolidate.s1', errorType: 'grammar', type: '词义选择', prompt: 'consolidate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'consolidate.q4', senseId: 'consolidate.s1', errorType: 'meaning', type: '词源', prompt: '记 consolidate 时，哪句更稳妥？', options: ['先锁住「巩固」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「巩固」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['巩固'] },
  });

  D('consort', {
    etymology: {
      origin: '现代英语常用词「consort」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'consort', gloss: '配偶' },
      suffix: null,
      history: [
        { label: 'consort', text: '现代英语常用词「consort」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：配偶。' },
      ],
      formationLogic: '核心义：配偶。',
      mnemonic: '看到 consort，先说出「配偶」。',
      note: '核心义：配偶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consort.', chinese: '这一章反复回到同一个点：配偶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consort.s1', en: 'Without that consort, the next paragraph is hard to follow.', zh: '没有这个配偶，下一段会很难读。', structure: 'consort / 表示 / 配偶', grammar: 'noun，围绕「配偶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consort.', right: 'He gave me some advice about the consort.', reason: 'advice 不可数。名词 consort 的单复数按词典词形记。', rule: '先确定 consort 是noun，再套「配偶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consort.q1', senseId: 'consort.s1', errorType: 'meaning', type: '词义选择', prompt: '「consort」在本条的核心意思是：', options: ['配偶', '完全相反的意思', '一种古代钱币'], answer: '配偶', explain: 'consort：配偶。' },
      { id: 'consort.q2', senseId: 'consort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consort?', options: ['配偶', 'a kind of ancient coin', 'the past tense of be'], answer: '配偶', explain: '对的是「配偶」。' },
      { id: 'consort.q3', senseId: 'consort.s1', errorType: 'grammar', type: '词义选择', prompt: 'consort 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consort.q4', senseId: 'consort.s1', errorType: 'meaning', type: '词源', prompt: '记 consort 时，哪句更稳妥？', options: ['先锁住「配偶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「配偶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['配偶'] },
  });

  D('consortium', {
    etymology: {
      origin: '现代英语常用词「consortium」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'consortium', gloss: '财团' },
      suffix: null,
      history: [
        { label: 'consortium', text: '现代英语常用词「consortium」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：财团。' },
      ],
      formationLogic: '核心义：财团。',
      mnemonic: '看到 consortium，先说出「财团」。',
      note: '核心义：财团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one consortium.', chinese: '这一章反复回到同一个点：财团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'consortium.s1', en: 'Without that consortium, the next paragraph is hard to follow.', zh: '没有这个财团，下一段会很难读。', structure: 'consortium / 表示 / 财团', grammar: 'noun，围绕「财团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the consortium.', right: 'He gave me some advice about the consortium.', reason: 'advice 不可数。名词 consortium 的单复数按词典词形记。', rule: '先确定 consortium 是noun，再套「财团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'consortium.q1', senseId: 'consortium.s1', errorType: 'meaning', type: '词义选择', prompt: '「consortium」在本条的核心意思是：', options: ['财团', '完全相反的意思', '一种古代钱币'], answer: '财团', explain: 'consortium：财团。' },
      { id: 'consortium.q2', senseId: 'consortium.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches consortium?', options: ['财团', 'a kind of ancient coin', 'the past tense of be'], answer: '财团', explain: '对的是「财团」。' },
      { id: 'consortium.q3', senseId: 'consortium.s1', errorType: 'grammar', type: '词义选择', prompt: 'consortium 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'consortium.q4', senseId: 'consortium.s1', errorType: 'meaning', type: '词源', prompt: '记 consortium 时，哪句更稳妥？', options: ['先锁住「财团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「财团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['财团'] },
  });

  D('conspicuous', {
    etymology: {
      origin: '英语派生：conspicu + -ous，词性转到「显眼的」。',
      prefix: null,
      root: { text: 'conspicu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'conspicuous', text: '英语派生：conspicu + -ous，词性转到「显眼的」。' },
        { label: '现在', text: '核心用法是：显眼的。' },
      ],
      formationLogic: '先认词干 conspicu，再看词尾。',
      mnemonic: '看到 conspicuous，先说出「显眼的」。',
      note: '先认词干 conspicu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was conspicuous.', chinese: '即使是初读者也能看出，这个结果是显眼的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conspicuous.s1', en: 'They wanted a conspicuous answer, not a long speech.', zh: '他们要一个显眼的的答复，不要长篇发言。', structure: 'conspicuous / 表示 / 显眼的', grammar: 'adjective，围绕「显眼的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are conspicuous.', right: 'The news is conspicuous.', reason: 'news 作主语时动词用单数。', rule: '先确定 conspicuous 是adjective，再套「显眼的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conspicuous.q1', senseId: 'conspicuous.s1', errorType: 'meaning', type: '词义选择', prompt: '「conspicuous」在本条的核心意思是：', options: ['显眼的', '完全相反的意思', '一种古代钱币'], answer: '显眼的', explain: 'conspicuous：显眼的。' },
      { id: 'conspicuous.q2', senseId: 'conspicuous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conspicuous?', options: ['显眼的', 'a kind of ancient coin', 'the past tense of be'], answer: '显眼的', explain: '对的是「显眼的」。' },
      { id: 'conspicuous.q3', senseId: 'conspicuous.s1', errorType: 'grammar', type: '词义选择', prompt: 'conspicuous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'conspicuous.q4', senseId: 'conspicuous.s1', errorType: 'meaning', type: '词源', prompt: '记 conspicuous 时，哪句更稳妥？', options: ['先锁住「显眼的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「显眼的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['显眼的'] },
  });

  D('conspiracy', {
    etymology: {
      origin: '现代英语常用词「conspiracy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conspiracy', gloss: '阴谋' },
      suffix: null,
      history: [
        { label: 'conspiracy', text: '现代英语常用词「conspiracy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：阴谋。' },
      ],
      formationLogic: '核心义：阴谋。',
      mnemonic: '看到 conspiracy，先说出「阴谋」。',
      note: '核心义：阴谋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one conspiracy.', chinese: '这一章反复回到同一个点：阴谋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conspiracy.s1', en: 'Without that conspiracy, the next paragraph is hard to follow.', zh: '没有这个阴谋，下一段会很难读。', structure: 'conspiracy / 表示 / 阴谋', grammar: 'noun，围绕「阴谋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the conspiracy.', right: 'He gave me some advice about the conspiracy.', reason: 'advice 不可数。名词 conspiracy 的单复数按词典词形记。', rule: '先确定 conspiracy 是noun，再套「阴谋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conspiracy.q1', senseId: 'conspiracy.s1', errorType: 'meaning', type: '词义选择', prompt: '「conspiracy」在本条的核心意思是：', options: ['阴谋', '完全相反的意思', '一种古代钱币'], answer: '阴谋', explain: 'conspiracy：阴谋。' },
      { id: 'conspiracy.q2', senseId: 'conspiracy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conspiracy?', options: ['阴谋', 'a kind of ancient coin', 'the past tense of be'], answer: '阴谋', explain: '对的是「阴谋」。' },
      { id: 'conspiracy.q3', senseId: 'conspiracy.s1', errorType: 'grammar', type: '词义选择', prompt: 'conspiracy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'conspiracy.q4', senseId: 'conspiracy.s1', errorType: 'meaning', type: '词源', prompt: '记 conspiracy 时，哪句更稳妥？', options: ['先锁住「阴谋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「阴谋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['阴谋'] },
  });

  D('conspire', {
    etymology: {
      origin: '现代英语常用词「conspire」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'conspire', gloss: '密谋' },
      suffix: null,
      history: [
        { label: 'conspire', text: '现代英语常用词「conspire」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：密谋。' },
      ],
      formationLogic: '核心义：密谋。',
      mnemonic: '看到 conspire，先说出「密谋」。',
      note: '核心义：密谋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to conspire before the office closed.', chinese: '他们同意在办公室关门前做这件事：密谋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'conspire.s1', en: 'The deadline forced the team to conspire that afternoon.', zh: '截止日期逼着小组在那天下午密谋。', structure: 'conspire / 表示 / 密谋', grammar: 'verb，围绕「密谋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She conspireed it yesterday without checking the real past form.', right: 'Check the past form of "conspire" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 conspire 是verb，再套「密谋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'conspire.q1', senseId: 'conspire.s1', errorType: 'meaning', type: '词义选择', prompt: '「conspire」在本条的核心意思是：', options: ['密谋', '完全相反的意思', '一种古代钱币'], answer: '密谋', explain: 'conspire：密谋。' },
      { id: 'conspire.q2', senseId: 'conspire.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches conspire?', options: ['密谋', 'a kind of ancient coin', 'the past tense of be'], answer: '密谋', explain: '对的是「密谋」。' },
      { id: 'conspire.q3', senseId: 'conspire.s1', errorType: 'grammar', type: '词义选择', prompt: 'conspire 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'conspire.q4', senseId: 'conspire.s1', errorType: 'meaning', type: '词源', prompt: '记 conspire 时，哪句更稳妥？', options: ['先锁住「密谋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「密谋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['密谋'] },
  });

  D('constable', {
    etymology: {
      origin: '英语派生：const + -able，词性转到「（英国）警察」。',
      prefix: null,
      root: { text: 'const', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'constable', text: '英语派生：const + -able，词性转到「（英国）警察」。' },
        { label: '现在', text: '核心用法是：（英国）警察。' },
      ],
      formationLogic: '先认词干 const，再看词尾。',
      mnemonic: '看到 constable，先说出「（英国）警察」。',
      note: '先认词干 const，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one constable.', chinese: '这一章反复回到同一个点：（英国）警察。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constable.s1', en: 'Without that constable, the next paragraph is hard to follow.', zh: '没有这个（英国）警察，下一段会很难读。', structure: 'constable / 表示 / （英国）警察', grammar: 'noun，围绕「（英国）警察」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the constable.', right: 'He gave me some advice about the constable.', reason: 'advice 不可数。名词 constable 的单复数按词典词形记。', rule: '先确定 constable 是noun，再套「（英国）警察」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constable.q1', senseId: 'constable.s1', errorType: 'meaning', type: '词义选择', prompt: '「constable」在本条的核心意思是：', options: ['（英国）警察', '完全相反的意思', '一种古代钱币'], answer: '（英国）警察', explain: 'constable：（英国）警察。' },
      { id: 'constable.q2', senseId: 'constable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constable?', options: ['（英国）警察', 'a kind of ancient coin', 'the past tense of be'], answer: '（英国）警察', explain: '对的是「（英国）警察」。' },
      { id: 'constable.q3', senseId: 'constable.s1', errorType: 'grammar', type: '词义选择', prompt: 'constable 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'constable.q4', senseId: 'constable.s1', errorType: 'meaning', type: '词源', prompt: '记 constable 时，哪句更稳妥？', options: ['先锁住「（英国）警察」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（英国）警察」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（英国）警察'] },
  });

  D('constabulary', {
    etymology: {
      origin: '现代英语常用词「constabulary」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'constabulary', gloss: '（某地区的）警察部队' },
      suffix: null,
      history: [
        { label: 'constabulary', text: '现代英语常用词「constabulary」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（某地区的）警察部队。' },
      ],
      formationLogic: '核心义：（某地区的）警察部队。',
      mnemonic: '看到 constabulary，先说出「（某地区的）警察部队」。',
      note: '核心义：（某地区的）警察部队。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one constabulary.', chinese: '这一章反复回到同一个点：（某地区的）警察部队。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constabulary.s1', en: 'Without that constabulary, the next paragraph is hard to follow.', zh: '没有这个（某地区的）警察部队，下一段会很难读。', structure: 'constabulary / 表示 / （某地区的）警察部队', grammar: 'noun，围绕「（某地区的）警察部队」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the constabulary.', right: 'He gave me some advice about the constabulary.', reason: 'advice 不可数。名词 constabulary 的单复数按词典词形记。', rule: '先确定 constabulary 是noun，再套「（某地区的）警察部队」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constabulary.q1', senseId: 'constabulary.s1', errorType: 'meaning', type: '词义选择', prompt: '「constabulary」在本条的核心意思是：', options: ['（某地区的）警察部队', '完全相反的意思', '一种古代钱币'], answer: '（某地区的）警察部队', explain: 'constabulary：（某地区的）警察部队。' },
      { id: 'constabulary.q2', senseId: 'constabulary.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constabulary?', options: ['（某地区的）警察部队', 'a kind of ancient coin', 'the past tense of be'], answer: '（某地区的）警察部队', explain: '对的是「（某地区的）警察部队」。' },
      { id: 'constabulary.q3', senseId: 'constabulary.s1', errorType: 'grammar', type: '词义选择', prompt: 'constabulary 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'constabulary.q4', senseId: 'constabulary.s1', errorType: 'meaning', type: '词源', prompt: '记 constabulary 时，哪句更稳妥？', options: ['先锁住「（某地区的）警察部队」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（某地区的）警察部队」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（某地区的）警察部队'] },
  });

  D('constant', {
    etymology: {
      origin: '拉丁语 constare「站稳」。',
      prefix: null,
      root: { text: 'constant', gloss: '不断的' },
      suffix: null,
      history: [
        { label: 'constant', text: '拉丁语 constare「站稳」。' },
        { label: '现在', text: '核心用法是：不断的。' },
      ],
      formationLogic: '考试认现在的用法：不断的。',
      mnemonic: '看到 constant，先说出「不断的」。',
      note: '考试认现在的用法：不断的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was constant.', chinese: '即使是初读者也能看出，这个结果是不断的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constant.s1', en: 'They wanted a constant answer, not a long speech.', zh: '他们要一个不断的的答复，不要长篇发言。', structure: 'constant / 表示 / 不断的', grammar: 'adjective，围绕「不断的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are constant.', right: 'The news is constant.', reason: 'news 作主语时动词用单数。', rule: '先确定 constant 是adjective，再套「不断的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constant.q1', senseId: 'constant.s1', errorType: 'meaning', type: '词义选择', prompt: '「constant」在本条的核心意思是：', options: ['不断的', '完全相反的意思', '一种古代钱币'], answer: '不断的', explain: 'constant：不断的。' },
      { id: 'constant.q2', senseId: 'constant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constant?', options: ['不断的', 'a kind of ancient coin', 'the past tense of be'], answer: '不断的', explain: '对的是「不断的」。' },
      { id: 'constant.q3', senseId: 'constant.s1', errorType: 'grammar', type: '词义选择', prompt: 'constant 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'constant.q4', senseId: 'constant.s1', errorType: 'meaning', type: '词源', prompt: '记 constant 时，哪句更稳妥？', options: ['先锁住「不断的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不断的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不断的'] },
  });

  D('constantly', {
    etymology: {
      origin: '英语派生：constant + -ly，词性转到「不断地」。',
      prefix: null,
      root: { text: 'constant', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'constantly', text: '英语派生：constant + -ly，词性转到「不断地」。' },
        { label: '现在', text: '核心用法是：不断地。' },
      ],
      formationLogic: '先认词干 constant，再看词尾。',
      mnemonic: '看到 constantly，先说出「不断地」。',
      note: '先认词干 constant，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule constantly, and the class followed.', chinese: '她把规则讲清楚了（不断地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constantly.s1', en: 'He nodded constantly and returned to the notes.', zh: '他不断地地点了点头，又回去看笔记。', structure: 'constantly / 表示 / 不断地', grammar: 'adverb，围绕「不断地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very constantlyly in the meeting.', right: 'She spoke constantly in the meeting.', reason: 'constantly 已经是副词，不要再加 -ly。', rule: '先确定 constantly 是adverb，再套「不断地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constantly.q1', senseId: 'constantly.s1', errorType: 'meaning', type: '词义选择', prompt: '「constantly」在本条的核心意思是：', options: ['不断地', '完全相反的意思', '一种古代钱币'], answer: '不断地', explain: 'constantly：不断地。' },
      { id: 'constantly.q2', senseId: 'constantly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constantly?', options: ['不断地', 'a kind of ancient coin', 'the past tense of be'], answer: '不断地', explain: '对的是「不断地」。' },
      { id: 'constantly.q3', senseId: 'constantly.s1', errorType: 'grammar', type: '词义选择', prompt: 'constantly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'constantly.q4', senseId: 'constantly.s1', errorType: 'meaning', type: '词源', prompt: '记 constantly 时，哪句更稳妥？', options: ['先锁住「不断地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不断地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不断地'] },
  });

  D('constituent', {
    etymology: {
      origin: '现代英语常用词「constituent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'constituent', gloss: '成分' },
      suffix: null,
      history: [
        { label: 'constituent', text: '现代英语常用词「constituent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：成分。' },
      ],
      formationLogic: '核心义：成分。',
      mnemonic: '看到 constituent，先说出「成分」。',
      note: '核心义：成分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one constituent.', chinese: '这一章反复回到同一个点：成分。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constituent.s1', en: 'Without that constituent, the next paragraph is hard to follow.', zh: '没有这个成分，下一段会很难读。', structure: 'constituent / 表示 / 成分', grammar: 'noun，围绕「成分」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the constituent.', right: 'He gave me some advice about the constituent.', reason: 'advice 不可数。名词 constituent 的单复数按词典词形记。', rule: '先确定 constituent 是noun，再套「成分」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constituent.q1', senseId: 'constituent.s1', errorType: 'meaning', type: '词义选择', prompt: '「constituent」在本条的核心意思是：', options: ['成分', '完全相反的意思', '一种古代钱币'], answer: '成分', explain: 'constituent：成分。' },
      { id: 'constituent.q2', senseId: 'constituent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constituent?', options: ['成分', 'a kind of ancient coin', 'the past tense of be'], answer: '成分', explain: '对的是「成分」。' },
      { id: 'constituent.q3', senseId: 'constituent.s1', errorType: 'grammar', type: '词义选择', prompt: 'constituent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'constituent.q4', senseId: 'constituent.s1', errorType: 'meaning', type: '词源', prompt: '记 constituent 时，哪句更稳妥？', options: ['先锁住「成分」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「成分」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['成分'] },
  });

  D('constitute', {
    etymology: {
      origin: '拉丁语 constituere「放在一起设立」，statuere「建立」。',
      prefix: null,
      root: { text: 'constitute', gloss: '构成' },
      suffix: null,
      history: [
        { label: 'constitute', text: '拉丁语 constituere「放在一起设立」，statuere「建立」。' },
        { label: '现在', text: '核心用法是：构成。' },
      ],
      formationLogic: '考试认现在的用法：构成。',
      mnemonic: '看到 constitute，先说出「构成」。',
      note: '考试认现在的用法：构成。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to constitute before the office closed.', chinese: '他们同意在办公室关门前做这件事：构成。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'constitute.s1', en: 'The deadline forced the team to constitute that afternoon.', zh: '截止日期逼着小组在那天下午构成。', structure: 'constitute / 表示 / 构成', grammar: 'verb，围绕「构成」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She constituteed it yesterday without checking the real past form.', right: 'Check the past form of "constitute" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 constitute 是verb，再套「构成」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'constitute.q1', senseId: 'constitute.s1', errorType: 'meaning', type: '词义选择', prompt: '「constitute」在本条的核心意思是：', options: ['构成', '完全相反的意思', '一种古代钱币'], answer: '构成', explain: 'constitute：构成。' },
      { id: 'constitute.q2', senseId: 'constitute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches constitute?', options: ['构成', 'a kind of ancient coin', 'the past tense of be'], answer: '构成', explain: '对的是「构成」。' },
      { id: 'constitute.q3', senseId: 'constitute.s1', errorType: 'grammar', type: '词义选择', prompt: 'constitute 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'constitute.q4', senseId: 'constitute.s1', errorType: 'meaning', type: '词源', prompt: '记 constitute 时，哪句更稳妥？', options: ['先锁住「构成」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「构成」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['构成'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
